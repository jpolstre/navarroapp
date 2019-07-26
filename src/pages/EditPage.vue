<template>
<div v-if="data">
	<section id="video">
		<div class="full-window-height video-bg">
			<video
				src="statics/background2.mp4"
				preload="auto"
				autoplay="true"
				muted="true"
				loop="true"
			></video>
			<!-- <h1>Example of a Full-Fill Video Background</h1> -->
			<div class="q-mt-xl">
				<div class="row wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".5s">
					<div class="col-sm-6 col-xs-12">
						<q-btn @click="scrollToElement('soluciones_tecnologicas')" size="15px" color="blue-grey-4" outline icon="check" label="SOLUCIONES TECNOLÓGICAS" />
					</div>
					<div class="col-sm-6 col-xs-12">
						<q-btn @click="scrollToElement('soluciones_corporativas')" size="15px" color="blue-grey-4" outline icon-right="check" label="SOLUCIONES EMPRESARIALES" />
					</div>

				</div>
				<div class="absolute-bottom text-white q-my-lg" align="center">
					<!-- <div class="text-h4 text-weight-bold" contenteditable="true">{{data.video.h4}}</div> -->
					<editable class="text-h4 text-weight-bold" :swValue="swValue" :canEdit="canEdit" v-model="data.video.h4"></editable>
					<editable class="text-h5 text-weight-bold text-blue-grey-4" :swValue="swValue" :canEdit="canEdit" v-model="data.video.h5"></editable>
					<editable class="text-body2 text-blue-grey-4 q-mt-lg" style="max-width: 450px;" :swValue="swValue" :canEdit="canEdit" v-model="data.video.p"></editable>
					<a class="cursor-pointer" @click="scrollToElement('soluciones_tecnologicas')"><img id="mouse" src="statics/mouseanimado4.gif"  style="z-index: 9999;"></a>
				</div>
			</div>
			<vue-particles class="absolute-top"  
				color="#dedede"
				:particleOpacity="0.5"
				:particlesNumber="80"
				shapeType="circle"
				:particleSize="3"
				linesColor="#dedede"
				:linesWidth="1"
				:lineLinked="true"
				:lineOpacity="0.4"
				:linesDistance="150"
				:moveSpeed="3"
				:hoverEffect="true"
				hoverMode="grab"
				:clickEffect="true"
				clickMode="push" 
				style="z-index: -1;">
			</vue-particles>
	
		</div>
	</section>
	<section id="soluciones_tecnologicas">
		<div class="row text-white q-pt-xl">
			<div class="col-md-8 col-sm-12 col-xs-12 q-px-xl q-pb-xl" align="center">
				<editable class="text-h4 q-mt-sm text-weight-medium" :swValue="swValue" :canEdit="canEdit" v-model="data.solTec.h4p"></editable>
				<editable class="text-h6 q-mb-md text-weight-bold text-blue" :swValue="swValue" :canEdit="canEdit" v-model="data.solTec.h6p"></editable>
				<editable class="text-body1 text-weight-thin" :swValue="swValue" :canEdit="canEdit" v-model="data.solTec.textBody"></editable>
			</div>

			<div class="col-md-4 col-sm-12 col-xs-12" align="center">
				<q-carousel
					swipeable
					animated
					v-model="slide"
					infinite
					autoplay
					>
					<q-carousel-slide v-for="slideItem in 6" :key="slideItem" :name="slideItem" :img-src="`statics/ico${slideItem}.png`" />
				</q-carousel>
			</div>
			
		</div>
		<div class="row bg-white q-pt-xl">
			<div class="col-md-12 q-pt-sm" align="center">
				<editable class="text-h4  text-weight-medium text-grey-9" :swValue="swValue" :canEdit="canEdit" v-model="data.solTec.h4s"></editable>
				<editable class="text-h5  text-weight-bold text-blue q-pt-sm" :swValue="swValue" :canEdit="canEdit" v-model="data.solTec.h5s"></editable>
				<editable class="text-body1 text-weight-thin" style="max-width: 800px;" :swValue="swValue" :canEdit="canEdit" v-model="data.solTec.ps"></editable>
			</div>
		</div>
		<div class="row bg-white">
			<q-toolbar class="bg-white text-grey-9 q-my-xs shadow-2">
		<!-- <q-btn flat round dense icon="menu"  /> -->
			<!-- <q-space /> -->
			<!-- <q-btn round  icon="keyboard_arrow_up" color="primary"/> -->
			
			<!-- <q-toggle v-model="swValue" icon="edit" label="Editable" left-label/> -->
			
			<q-space />
			<q-btn round icon="add" size="sm" @click="data.solTec.items.push({imagen:'default.png', titulo:'TITULO', descripcion:'Descripcion'})" color="primary" class="q-mx-sm"/>
			<!-- <q-btn label="Restaurar" flat class="q-ml-sm text-primary" /> -->
			</q-toolbar>
		</div>
		<draggable class="row q-col-gutter-sm bg-white q-mb-xl text-center" v-model="data.solTec.items" align="center">
			<div class="col-md-4 col-sm-12 col-xs-12" v-for="st, index in data.solTec.items" :key="index">
				<div class="q-card full-height">
					<div class="q-pa-xl">
						<img :src="`statics/${st.imagen}`" :alt="st.imagen" style="border-radius:50%;" class="wow jackInTheBox" data-wow-duration="1s" data-wow-delay=".5s" height="174">
						<editable class="text-h5 text-weight-medium text-grey-9 q-my-sm" :swValue="swValue" :canEdit="canEdit" v-model="st.titulo"></editable>
						<editable class="text-body1 text-left text-weight-thin" :swValue="swValue" :canEdit="canEdit" v-model="st.descripcion"></editable>
						<div class="absolute-right q-ma-md">
							<q-btn round size="sm" color="red-5" icon="delete_forever" @click="data.solTec.items.splice(index, 1)"/>
						</div>
					</div>
				</div>
			</div>	
		</draggable>
			
		
	</section>
	<section id="soluciones_corporativas">
		<div class="row text-white q-pt-xl">
			<div class="col-md-8 col-sm-12 col-xs-12 q-px-xl q-pb-xl" align="center">
				<editable class="text-h4 text-weight-medium q-mt-sm" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.h4p"></editable>
				<editable class="text-h6 q-mb-md text-weight-bold text-blue" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.h6p"></editable>
				<editable class="text-body1 text-weight-thin" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.textBody"></editable>
				
			</div>
			<div class="col-md-4 col-sm-12 col-xs-12" align="center">
				<div class="box sonar-effect"></div>
			</div>
			
		</div>
		<div class="row bg-darkblue text-white q-pt-xl">
			<div class="col-md-12 q-pt-sm" align="center">
				<editable class="text-h4 text-weight-medium" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.h4s"></editable>
				<editable class="text-h5 text-weight-bold text-light-green q-pt-sm" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.h5s"></editable>
				<editable class="text-body1 text-weight-thin" style="max-width: 800px;" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.ps"></editable>
			</div>
		</div>
	

		<div class="row bg-darkblue">
			<q-toolbar class="bg-darkblue text-grey-5 q-my-xs shadow-2">
		<!-- <q-btn flat round dense icon="menu"  /> -->
			<!-- <q-space /> -->
			<!-- <q-btn round  icon="keyboard_arrow_up" color="primary"/> -->
			
			<!-- <q-toggle v-model="swValue" icon="edit" label="Editable" left-label/> -->
			
			<q-space />
			<q-btn round icon="add" size="sm" @click="data.solCorp.items.push({imagen:'default.png', titulo:'TITULO', descripcion:'Descripcion'})" color="primary" class="q-mx-sm"/>
			<!-- <q-btn label="Restaurar" flat class="q-ml-sm text-primary" /> -->
			</q-toolbar>
		</div>
		<draggable class="row q-col-gutter-sm bg-darkblue q-pb-xl text-center" v-model="data.solCorp.items" align="center">
			<div class="col-md-4 col-sm-12 col-xs-12" v-for="sc, index in data.solCorp.items" :key="index">
				<div class="q-card full-height bg-darkblue">
					<div class="q-pa-xl">
						<img :src="`statics/${sc.imagen}`" :alt="sc.imagen" style="border-radius:50%;" class="wow jackInTheBox" data-wow-duration="1s" data-wow-delay=".5s" height="174">
						<editable class="text-h5 text-weight-medium text-grey-8 q-my-sm" :swValue="swValue" :canEdit="canEdit" v-model="sc.titulo"></editable>
						<editable class="text-body1 text-left text-weight-thin text-grey-5" :swValue="swValue" :canEdit="canEdit" v-model="sc.descripcion"></editable>
						<div class="absolute-right q-ma-md">
							<q-btn round size="sm" color="red-5" icon="delete_forever" @click="data.solCorp.items.splice(index, 1)"/>
						</div>
					</div>
				</div>
			</div>	
		</draggable>


	</section>

	<div id="wall_x" class="imageX" data-stellar-background-ratio="0.4" data-wow-delay=".5s">
		<editable class="editable wow flipInY text-weight-bold" style="visibility: visible; animation-name: flipInY;" :swValue="swValue" :canEdit="canEdit" v-model="data.textParallax"></editable>
				
	</div>
	
	<q-footer id="footer" class="absolute-bottom bg-darkblue text-grey-6 q-px-lg q-pt-lg" style="z-index: 0;">
		<div class="row">
			<div class="col-md-6 col-sm-12 col-xs-12 q-py-lg">
				<div class="q-mr-md">
					<editable class="text-h4" :swValue="swValue" :canEdit="canEdit" v-model="data.footer.p4left"></editable>
					<editable class="text-body1" :swValue="swValue" :canEdit="canEdit" v-model="data.footer.pleft"></editable>
					<q-form
						@submit="onSubmit"
						@reset="onReset"
						class="q-gutter-md q-mt-lg"
					>
						<q-input
							v-for="(value, name) in form"
							:key="name"
							:type="name!='mensaje'?'text':'textarea'"
							filled
							v-model="form[name]"
							:label="name.toUpperCase()"
							dark 
							:input-style="{ fontSize: '16px' }"
							lazy-rules
							:rules="[ val => val && val.length > 0 || `Por favor escriba su ${name}`]"
						/>

						<div align="right">
							<q-btn label="ENVIAR" type="submit" color="primary"/>
							<q-btn label="RESET" type="reset" color="primary" flat class="q-ml-sm" />
						</div>
					</q-form>
				</div>
			</div>

			<div class="col-md-6 col-sm-12 col-xs-12 q-py-lg">
				<div class="q-pl-md">
					<editable class="text-h4" :swValue="swValue" :canEdit="canEdit" v-model="data.footer.p4rigth"></editable>
					<editable class="text-body1" :swValue="swValue" :canEdit="canEdit" v-model="data.footer.prigth"></editable>
					<q-list dark bordered separator class="q-mt-lg" v-for="(value, name) in data.footer.callCenter" :key="name">
						<q-item-label header class="text-uppercase">{{name}}</q-item-label>
						<q-item  v-ripple  v-for="item, index in value" :key="index">
							<q-item-section avatar>
								<q-icon color="primary" :name="name!=='emails'?'phone':'email'" />
							</q-item-section>
							<editable class="q-item-section" :swValue="swValue" :canEdit="canEdit" v-model="item.label"></editable>
							<!-- <q-item-label caption>{{name!=='emails'?'linea '+(index+1):'email '+(index+1)}}</q-item-label> -->
						</q-item>
					</q-list>
				</div>
			</div>
		</div>
		<q-separator class="bg-grey q-mt-xl"/>	
		<div class="full-width  q-pa-xl" align="center">
			© Gonzales Navarro Ltda. Todos los derechos reservados. La Paz, Bolivia.
		</div>
	</q-footer>

	 <q-toolbar class="bg-lime text-grey-9 q-my-none shadow-2 fixed-bottom">
	<!-- <q-btn flat round dense icon="menu"  /> -->
		<!-- <q-space /> -->
		<!-- <q-btn round  icon="keyboard_arrow_up" color="primary"/> -->
		
		<q-toggle v-model="canEdit" icon="edit" label="Editable" left-label/>
		
		<q-space />
		<q-btn label="Guardar" icon="save" @click="saveData" color="primary" class="q-mx-sm"/>
		<q-btn label="Restaurar" icon="refresh" @click="restoreData" flat class="q-ml-sm text-primary" />
	</q-toolbar>
</div>
</template>
<script>

import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

import editable from '../components/editable'
import WOW from 'wow.js/dist/wow.min.js'
import draggable from 'vuedraggable'
export default {
	components:{
		editable,
		draggable
	},
	name: 'PageIndex',
	data(){
		return{
			swValue:false,
			canEdit:true,
			slide: 1,
			form:{
				nombre:null,
				email:null,
				telefono:null,
				mensaje:null
			},
			data:null
		}
	},
	created(){
		new WOW().init()
		this.getData()
	},
	methods: {
		restoreData(){
			const self = this
			self.$q.loading.show()
			this.$axios.get('http://gonzalesnavarro.com/back/index.php/getData').then(r=>{
				// console.log(r.data)
				self.swValue = true
				self.data = r.data 
				setTimeout(()=>{
					self.swValue = false
				}, 100)
				self.$q.loading.hide()
			})
		},
		getData(){
			const self = this
			self.$q.loading.show()
			this.$axios.get('http://gonzalesnavarro.com/back/index.php/getData').then(r=>{
				// console.log(r.data)
				self.data = r.data
				self.$q.loading.hide()
			})
		},
		saveData(){
			const self =  this
			self.$q.loading.show()
			let sendFormData =  new FormData()
			// this.items.forEach((item, index)=>{
			// 	item.orden = index
			// 	if(item.imageFile){//enviando imagenes.
			// 		sendFormData.append(`${item.id}`, item.imageFile)
			// 	}
			// })
			sendFormData.append('data', JSON.stringify(this.data))
			this.$axios({
				url: `http://gonzalesnavarro.com/back/index.php/saveData`,
				method: 'post',
				data:sendFormData,
				// data: sendFormData,
				config: { headers: {'Content-Type': 'multipart/form-data' }}
			})
			.then(response =>{
				if(response.data.ok){
					self.data = response.data.data
					self.$q.notify({
						message: response.data.msg,
						position: 'top',
						icon:'thumb_up',
						color:'green-5'
					})
				}else{
					self.$q.notify({
						message: response.data.msg,
						position: 'top',
						icon:'warning',
						color:'red-5'
					})
				}
				self.$q.loading.hide()
			})
			.catch(error =>{
				// your action on error success
				self.$q.notify({
					message: error,
					position: 'top',
					icon:'warning',
					color:'red-5'
				})
			})
		},
		
		// takes an element object
		scrollToElement (id) {
			const ele = document.getElementById(id) // You need to get your element here
			let target = getScrollTarget(ele)
			let offset = ele.offsetTop // do not subtract the el.scrollHeight here
			let duration = 0
			setScrollPosition(target, offset, duration)
		}, 
		onSubmit () {
		 if (this.accept !== true) {
			 this.$q.notify({
				 color: 'red-5',
				 textColor: 'white',
				 icon: 'fas fa-exclamation-triangle',
				 message: 'You need to accept the license and terms first'
			 })
		 }
		 else {
			 this.$q.notify({
				 color: 'green-4',
				 textColor: 'white',
				 icon: 'fas fa-check-circle',
				 message: 'Submitted'
			 })
		 }
		},
		onReset () {
			this.form = {
				nombre:null,
				email:null,
				telefono:null,
				mensaje:null
			}
		}
	}
}
</script>

