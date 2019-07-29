<template>
	<q-layout view="lHh Lpr lFf">
		<q-header  elevated class="bg-primary text-white">
		 <q-toolbar>
			 <q-btn
				 flat
				 dense
				 round
				 @click="drawer = !drawer"
				 aria-label="Menu"
				 class="lt-md"
			 >
				 <q-icon name="menu" />
			 </q-btn>
	 
			 <q-toolbar-title>
				 <small> <strong>GONZALES</strong> NAVARRO L<span class="text-lowercase">TDA.</span></small>
			 </q-toolbar-title>
	 
			 <q-btn-toggle
			 		class="gt-sm"
					v-model="btnsToggle"
					@input="goScrollTo"
					flat stretch
					toggle-color="yellow"
					:options="menu"
				/>
		 </q-toolbar>
	 </q-header>

	<q-drawer
		q-drawer v-model="drawer"
		side="left" overlay behavior="mobile" bordered
		content-class="bg-grey-2 lt-md"
	>
	<q-list>
		<q-item-label header>Opciones</q-item-label>
		<q-item 
			clickable 
			v-for="item in menu" 
			:key="item.label" 
			@click="goScrollTo(item.value)"
			:active="item.value === btnsToggle" 
			active-class="bg-primary text-grey-1"
		>
			<q-item-section avatar>
				<q-icon :name="item.icon" />
			</q-item-section>
			<q-item-section>
				<q-item-label>{{item.label}}</q-item-label>
				<!-- <q-item-label caption>quasar.dev</q-item-label> -->
			</q-item-section>
		</q-item>
		
	</q-list>
</q-drawer>

		<q-page-container>
			<router-view />
		<!-- 	<q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]" :duration="0" >
				 <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
					 Ir arriba...
				 </div>
			 </q-page-scroller> -->
		</q-page-container>
		<q-scroll-observer @scroll="scrollHandler" />
	</q-layout>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

const menu = [
	{label: 'INICIO', value: 'video', icon:'home'},
	{label: 'TECNOLÓGICAS', value: 'soluciones_tecnologicas', icon:'settings_input_hdmi'},
	{label: 'EMPRESARIALES', value: 'soluciones_corporativas', icon:'business'},
	{label: 'CONTACTO', value: 'footer', icon:'email'}
]

export default {
	name: 'FrontLayout',
	data () {
		return {
			menu,
			drawer:false,
			btnsToggle:'video'
		}
	},
	methods: {
		scrollHandler(details){
			// console.log(details.position)
			let video = document.getElementById('video')
			if( video && details.position >= video.offsetTop-51){
				this.btnsToggle = 'video'
			}

			let st = document.getElementById('soluciones_tecnologicas')
			if(st && details.position >= st.offsetTop-51){
				this.btnsToggle = 'soluciones_tecnologicas'
			}

			let sc = document.getElementById('soluciones_corporativas')
			if(sc && details.position >= sc.offsetTop-51){
				this.btnsToggle = 'soluciones_corporativas'
			}

			let footer = document.getElementById('footer')
			if(footer && details.position >= footer.offsetTop-51){
				this.btnsToggle = 'footer'
			}
			// console.log(getScrollTarget(DomElement))
		},
		goScrollTo(id){
			this.btnsToggle = id
			this.drawer = false
			const ele = document.getElementById(id) // You need to get your element here
			let target = getScrollTarget(ele)
			let offset = ele.offsetTop-50 // do not subtract the el.scrollHeight here
			let duration = 0
			setScrollPosition(target, offset, duration)
		}, 
	}
}
</script>