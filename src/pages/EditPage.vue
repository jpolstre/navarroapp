<template>
<div v-if="data">
	<section id="video">
		<div class="full-window-height video-bg">
			<video
				:src="`${baseImg}/background2.mp4`"
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
					<a class="cursor-pointer" @click="scrollToElement('soluciones_tecnologicas')"><img id="mouse" :src="`${baseImg}/mouseanimado4.gif`"  style="z-index: 9999;"></a>
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
					<q-carousel-slide v-for="slideItem, index in data.solTec.slideItems" :key="index" :name="slideItem.imagen" :img-src="slideItem.imageFile?slideItem.imagen:`${baseImg}/${slideItem.imagen}`" />

					<template v-slot:control v-if="canEdit">
						<q-carousel-control position="top">
							<q-btn class="animate-pop" color="primary" label="cambiar imagenes..." @click="dialogCarousel=true" />
						</q-carousel-control>
					</template>
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
		<div class="row bg-white" v-if="canEdit">
			<q-toolbar class="bg-white text-grey-9 q-my-xs shadow-2">
		<!-- <q-btn class="animate-pop" flat round dense icon="menu"  /> -->
			<!-- <q-space /> -->
			<!-- <q-btn class="animate-pop" round  icon="keyboard_arrow_up" color="primary"/> -->
			
			<!-- <q-toggle v-model="swValue" icon="edit" label="Editable" left-label/> -->
			
			<q-space />
			<q-btn round icon="add" size="sm" @click="data.solTec.items.unshift({imagen:'default.png', titulo:'TITULO', descripcion:'Descripcion'})" color="primary" class="q-mx-sm animate-pop"/>
			<!-- <q-btn class="animate-pop" label="Restaurar" flat class="q-ml-sm text-primary" /> -->
			</q-toolbar>
		</div>
		<draggable class="row q-col-gutter-sm bg-white q-mb-xl text-center" v-model="data.solTec.items" :disabled="!canEdit" align="center">
			<div class="col-md-4 col-sm-12 col-xs-12" v-for="st, index in data.solTec.items" :key="index">
				<div class="q-card full-height">
					<div class="q-pa-xl">
						<img :src="st.imageFile?st.imagen:`${baseImg}/${st.imagen}`" :alt="st.imagen" style="border-radius:50%;" class="wow jackInTheBox" data-wow-duration="1s" data-wow-delay=".5s" height="174" width="174">
						<editable class="text-h5 text-weight-medium text-grey-9 q-my-sm" :swValue="swValue" :canEdit="canEdit" v-model="st.titulo"></editable>
						<editable class="text-body1 text-left text-weight-thin" :swValue="swValue" :canEdit="canEdit" v-model="st.descripcion"></editable>
						<div class="absolute-right q-ma-md" v-if="canEdit">
							<q-btn round  class="q-mr-sm animate-pop" size="sm" color="red-5" icon="delete_forever" @click="data.solTec.items.splice(index, 1)"/>
							<q-btn class="animate-pop" round  size="sm" color="info" icon="image" @click="selectImagen(st) "/>
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
				<div class="box sonar-effect" :style="`background: url(${data.solCorp.imageFile?data.solCorp.imagen:baseImg+'/'+data.solCorp.imagen}) no-repeat 50% center/${data.solCorp.size}% ${data.solCorp.size}% rgba(255,255,255,0.2);`">
					<q-btn class="animate-pop q-zindex-xs" color="primary" label="cambiar imagen..." v-if="canEdit" @click="selectImagen(data.solCorp)"/>

					<q-slider class="animate-pop q-zindex-xs absolute-bottom" v-model="data.solCorp.size" :min="0" :max="100" v-if="canEdit" />
				</div>
			</div>
			
		</div>
		<div class="row bg-darkblue text-white q-pt-xl">
			<div class="col-md-12 q-pt-sm" align="center">
				<editable class="text-h4 text-weight-medium" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.h4s"></editable>
				<editable class="text-h5 text-weight-bold text-light-green q-pt-sm" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.h5s"></editable>
				<editable class="text-body1 text-weight-thin" style="max-width: 800px;" :swValue="swValue" :canEdit="canEdit" v-model="data.solCorp.ps"></editable>
			</div>
		</div>
	

		<div class="row bg-darkblue" v-if="canEdit">
			<q-toolbar class="bg-darkblue text-grey-5 q-my-xs shadow-2">
		<!-- <q-btn class="animate-pop" flat round dense icon="menu"  /> -->
			<!-- <q-space /> -->
			<!-- <q-btn class="animate-pop" round  icon="keyboard_arrow_up" color="primary"/> -->
			
			<!-- <q-toggle v-model="swValue" icon="edit" label="Editable" left-label/> -->
			
			<q-space />
			<q-btn round icon="add" size="sm" @click="data.solCorp.items.unshift({imagen:'default.png', titulo:'TITULO', descripcion:'Descripcion'})" color="primary" class="q-mx-sm animate-pop"/>
			<!-- <q-btn class="animate-pop" label="Restaurar" flat class="q-ml-sm text-primary" /> -->
			</q-toolbar>
		</div>
		<draggable class="row q-col-gutter-sm bg-darkblue q-pb-xl text-center" v-model="data.solCorp.items" :disabled="!canEdit" align="center">
			<div class="col-md-4 col-sm-12 col-xs-12" v-for="sc, index in data.solCorp.items" :key="index">
				<div class="q-card full-height bg-darkblue">
					<div class="q-pa-xl">
						<img :src="sc.imageFile?sc.imagen:`${baseImg}/${sc.imagen}`" :alt="sc.imagen" style="border-radius:50%;" class="wow jackInTheBox" data-wow-duration="1s" data-wow-delay=".5s" height="174" width="174">
						<editable class="text-h5 text-weight-medium text-grey-8 q-my-sm" :swValue="swValue" :canEdit="canEdit" v-model="sc.titulo"></editable>
						<editable class="text-body1 text-left text-weight-thin text-grey-5" :swValue="swValue" :canEdit="canEdit" v-model="sc.descripcion"></editable>
						<div class="absolute-right q-ma-md" v-if="canEdit"> 
							<q-btn round class="q-mr-sm animate-pop" size="sm" color="red-5" icon="delete_forever" @click="data.solCorp.items.splice(index, 1)"/>
							<q-btn class="animate-pop" round  size="sm" color="info" icon="image" @click="selectImagen(sc) "/>
						</div>
					</div>
				</div>
			</div>	
		</draggable>


	</section>

	<div id="wall_x" class="imageX" data-stellar-background-ratio="0.4" data-wow-delay=".5s" 
		:style="`background: url(${data.textParallax.imageFile?data.textParallax.imagen:baseImg+'/'+data.textParallax.imagen}) no-repeat 50% fixed / cover;	display: flex;`">

		<editable class="editable wow flipInY text-weight-bold" style="visibility: visible; animation-name: flipInY;" :swValue="swValue" :canEdit="canEdit" v-model="data.textParallax.texto"></editable>
		<q-btn class="absolute q-mt-md animate-pop" style="right: 10px;" color="primary" label="cambiar imagen..." v-if="canEdit" @click="()=>selectImagen(data.textParallax)"/>

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
						autocomplete="off"
					>
						<q-input
							v-for="(value, name) in form"
							v-if="name !== 'recaptcha'"
							:key="name"
							:type="(()=>{
								if(name == 'mensaje'){
									return 'textarea'
								}else if(name=='email'){
									return 'email'
								}else{
									return 'text'
								}
							})()"
							filled
							v-model="form[name]"
							:label="name.toUpperCase()"
							dark 
							:input-style="{ fontSize: '16px' }"
							lazy-rules
							:rules="[ val => val && val.length > 0 || `Por favor escriba su ${name}`]"
							:autocomplete="'new-'+name"
						/>

						<vue-recaptcha 
							@verify="recaptchaVerified"
							sitekey="6Ld_F08UAAAAAMVoQv2lCtC_ZnPEipuhJAtCdR18"
							ref="recaptcha"
						>
						</vue-recaptcha>

						<div align="right">
							<q-btn class="animate-pop" label="ENVIAR" type="submit" color="primary"/>
							<q-btn label="RESET" type="reset" color="primary" flat class="q-ml-sm animate-pop" />
						</div>
					</q-form>
				</div>
			</div>

			<div class="col-md-6 col-sm-12 col-xs-12 q-py-lg">
				<div class="q-pl-md">
					<editable class="text-h4" :swValue="swValue" :canEdit="canEdit" v-model="data.footer.p4rigth"></editable>
					<editable class="text-body1" :swValue="swValue" :canEdit="canEdit" v-model="data.footer.prigth"></editable>
					<q-list dark bordered separator class="q-mt-lg" v-for="(arr, name) in data.footer.callCenter" :key="name">
						<q-item-label header class="text-uppercase">
							{{name}}
							<q-btn class="animate-pop" color="primary" icon="add" round size="sm" @click="arr.unshift({label:'NUEVO '+name.replace('s','').toUpperCase()})" v-if="canEdit"/>		
						</q-item-label>

						<draggable v-model="data.footer.callCenter[name]" :disabled="!canEdit">
							<q-item  v-ripple  v-for="item, index in arr" :key="index">
								<q-item-section avatar>
									<q-icon color="primary" :name="name!=='emails'?'phone':'email'" />
								</q-item-section>
								<editable class="q-item-section" :swValue="swValue" :canEdit="canEdit" v-model="item.label"></editable>
								<q-item-section align="right">
									<q-btn class="animate-pop" round size="sm" color="red-5" icon="delete_forever" v-if="canEdit" @click="arr.splice(index, 1)"/>
								</q-item-section>
								<!-- <q-item-label caption>{{name!=='emails'?'linea '+(index+1):'email '+(index+1)}}</q-item-label> -->
							</q-item>
						</draggable>

					</q-list>
				</div>
			</div>
		</div>
		<q-separator class="bg-grey q-mt-xl"/>	
		<div class="full-width  q-pa-xl" align="center">
			© Gonzales Navarro Ltda. Todos los derechos reservados. La Paz, Bolivia.
		</div>
	</q-footer>

	 <q-toolbar class="bg-lime text-grey-9 q-my-none shadow-2 fixed-bottom q-zindex-sm" v-if="T0f0eLiLMC">
	<!-- <q-btn class="animate-pop" flat round dense icon="menu"  /> -->
		<!-- <q-space /> -->
		<q-btn icon="keyboard_backspace" label="Salir" color="pink" class="q-mr-sm animate-pop" @click="logoOut"/>
		
		<q-toggle v-model="canEdit" icon="edit" label="Editable" left-label/>
		
		<q-space />
		<q-btn label="Guardar" icon="save" @click="saveData" color="primary" class="q-mx-sm animate-pop"/>
		<q-btn label="Restaurar" icon="refresh" @click="restoreData" flat class="q-ml-sm text-primary animate-pop" />
	</q-toolbar>


	<q-dialog v-model="dialogLog" persistent transition-show="flip-down" transition-hide="flip-up">
				<q-card class="bg-primary text-white" style="min-width: 350px;">
					<q-bar>
						<div class="text-h6 text-uppercase">Identificate</div>
<!-- 	          <q-icon name="network_wifi" />
						<q-icon name="network_cell" />
						<q-icon name="battery_full" />
						<div>9:34</div>

						<q-space />

						<q-btn class="animate-pop" dense flat icon="close" v-close-popup>
							<q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
						</q-btn class="animate-pop"> -->
					</q-bar>

					<!-- <q-card-section>
						<div class="text-h6">Identificarce</div>
					</q-card-section> -->

					<q-card-section class="bg-blue-9">
						<q-form
							@submit="login"
							class="q-gutter-md q-mt-lg"
							autocomplete="off"
						>
							<q-input
								type="text"
								filled
								v-model.trim="formLogin.name"
								label="Nombre"
								stack-label
								color="yellow" bg-color="primary"
								dark 
								lazy-rules
								:rules="[ val => val && val.length > 0 || `Nombre es Necesario`]"
								autocomplete="new-user"
							/>
							<q-input
								type="password"
								filled
								v-model.trim="formLogin.pass"
								label="Password"
								stack-label
								color="yellow" bg-color="primary"
								dark 
								lazy-rules
								:rules="[ val => val && val.length > 0 || `Password es Necesario`]"
								autocomplete="new-password"

							/>

							<div align="right">
								<q-btn class="animate-pop" :loading="loading" label="ok" type="submit" color="primary"/>
								<!-- <q-btn class="animate-pop" label="RESET" type="reset" color="primary" flat class="q-ml-sm" /> -->
							</div>
						</q-form>
					</q-card-section>
				</q-card>
			</q-dialog>


			<q-dialog v-model="dialogCarousel" persistent>
				<q-card class="bg-white" style="min-width: 50%;">
					<q-bar>
						<div class="text-h6 text-uppercase">Imagenes carousel</div>
<!-- 	          <q-icon name="network_wifi" />
						<q-icon name="network_cell" />
						<q-icon name="battery_full" />
						<div>9:34</div>

						<q-space />

						<q-btn class="animate-pop" dense flat icon="close" v-close-popup>
							<q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
						</q-btn class="animate-pop"> -->
					</q-bar>

					<!-- <q-card-section>
						<div class="text-h6">Identificarce</div>
					</q-card-section> -->

					<q-card-section>
						<draggable class="row q-col-gutter-sm text-center" v-model="data.solTec.slideItems" :disabled="!canEdit" align="center">
							<div class="col-md-4 col-sm-12 col-xs-12" v-for="slideItem, index in data.solTec.slideItems" :key="index">
								<div class="q-card full-height bg-darkblue" >
									<img :src="slideItem.imageFile?slideItem.imagen:`${baseImg}/${slideItem.imagen}`" :alt="slideItem.imagen" class="full-height full-width" >
									<q-btn round class="q-mt-sm q-mr-xl animate-pop absolute-right" size="sm" color="red-5" icon="delete_forever" @click="data.solTec.slideItems.splice(index, 1)"/>
									<q-btn class="q-mt-sm q-mr-sm animate-pop absolute-right" round  size="sm" color="info" icon="image" @click="selectImagen(slideItem) "/>
								</div>
							</div>
						</draggable>
					</q-card-section>
						<q-separator/>	
					<q-card-section>

						<div align="right">
							<q-btn class="animate-pop" label="ok" color="primary" v-close-popup/>
							<!-- <q-btn flat class="q-ml-sm animate-pop close-popup" label="cancel" color="primary"  /> -->
						</div>
					</q-card-section>
				</q-card>
			</q-dialog>
			<input type="file" style="display:none;" @change="changeValueInput" name="myImage" accept=".png, .jpg, .jpeg" ref="inputFile"/>
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
import VueRecaptcha from 'vue-recaptcha'

const baseUrl = 'http://gonzalesnavarro.com/back/index.php'
const baseImg = 'http://gonzalesnavarro.com/statics'

export default {
	name: 'PageIndex',

	components:{
		VueRecaptcha,
		editable,
		draggable
	},
	data(){
		return{
			baseUrl,
			baseImg,
			itemImg:null,
			dialogCarousel:false,

			dialogLog:false, 
			canEdit:false,
			T0f0eLiLMC:false,

			loading:false,
			
			swValue:false,
			
			slide: 1,
			formLogin:{
				name:null,
				pass:null
			},
			form:{
				nombre:null,
				email:null,
				telefono:null,
				mensaje:null,
				recaptcha:null,
			},
			data:null
		}
	},
	created(){
		new WOW().init()
		this.getData()
		if(!this.$route.params.pagina){
			this.dialogLog=false 
			this.canEdit=false
			this.T0f0eLiLMC=false
		}else{
			if(this.$route.params.pagina == 'admin'){
				this.dialogLog=true 

			/*	this.canEdit=true
				this.T0f0eLiLMC=true*/
			}
		}
	},
	methods: {
		logoOut(){
			this.dialogLog=false 
			this.canEdit=false
			this.T0f0eLiLMC=false
			this.$router.push({name:'Index'})
		},

		changeValueInput(){
			let file = this.$refs.inputFile.files[0]
			this.itemImg.imagen =  window.URL.createObjectURL(file)
			this.itemImg.imageFile =  file

			// console.log(document.getElementById(this.itemImg.id).style)
			// if(this.itemImg.id == 'wall_x'){
			// 	document.getElementById(this.itemImg.id).style.backgroundImage=`url(${this.itemImg.imagen})`
			// }
			this.$refs.inputFile.value = ''
			this.itemImg = null
		},

		selectImagen(item){
			this.itemImg = item
			// this.itemImg.index = index
			this.$refs.inputFile.click()
		},
		login(){
			const self = this
			self.loading = true
			let sendFormData =  new FormData()
			sendFormData.append('nombre', this.formLogin.name)
			sendFormData.append('password', this.formLogin.pass)
			this.$axios({
				url:`${self.baseUrl}/login`,
				method: 'post',
				data:sendFormData,
				// data: sendFormData,
				config: { headers: {'Content-Type': 'multipart/form-data' }}
			}).then(r=>{
				self.loading = false
				setTimeout(()=>{
					if(r.data.status){
						self.dialogLog = false
						self.$q.notify({
							message: r.data.msg,
							position: 'top',
							icon:'thumb_up',
							color:'green-5'
						})
						self.canEdit = true
						self.T0f0eLiLMC = true
					}else{
						self.$q.notify({
							message: r.data.msg,
							position: 'top',
							icon:'warning',
							color:'red-5'
						})
					}
				},500)
			}).catch(error =>{
				self.$q.notify({
					message: 'Error en el servidor',
					position: 'top',
					icon:'warning',
					color:'red-5'
				})
			})
		},

		restoreData(){
			const self = this
			self.$q.loading.show()
			this.$axios.get(`${self.baseUrl}/getData`).then(r=>{
				// console.log(r.data)
				self.swValue = true
				self.data = r.data 
				//restaura imagenes cambiadas sin guardar.
				// document.getElementById('wall_x').style.backgroundImage=`url(${self.baseImg}/${self.data.textParallax.imagen})`
				setTimeout(()=>{
					self.swValue = false
				}, 100)
				self.$q.loading.hide()
			}).catch(error =>{
				// your action on error success
				self.$q.loading.hide()
				self.$q.notify({
					message:'error en el servidor',
					position:'top',
					icon:'warning',
					color:'red-5'
				})
			})
		},

		getData(){
			const self = this
			self.$q.loading.show()
			this.$axios.get(`${self.baseUrl}/getData`).then(r=>{
				// console.log(r.data)
				self.data = r.data
				self.$q.loading.hide()
			}).catch(error =>{
				// your action on error success
				self.$q.loading.hide()
				self.$q.notify({
					message:'error en el servidor',
					position:'top',
					icon:'warning',
					color:'red-5'
				})
			})
		},

		saveData(){
			const self =  this
			self.$q.loading.show()
			let sendFormData =  new FormData()

		this.data.solTec.slideItems.forEach((item, index)=>{
			if(item.imageFile){//enviando imagenes.
				sendFormData.append(`slideItems-${index}`, item.imageFile)
				delete item.imageFile
			}
		})

			if(this.data.solCorp.imageFile){
				sendFormData.append(`solCorp`, this.data.solCorp.imageFile)
				delete this.data.solCorp.imageFile
			}
			
			if(this.data.textParallax.imageFile){
				sendFormData.append(`textParallax`, this.data.textParallax.imageFile)
				delete this.data.textParallax.imageFile
			}

			this.data.solTec.items.forEach((item, index)=>{
				if(item.imageFile){//enviando imagenes.
					sendFormData.append(`solTec-${index}`, item.imageFile)
					delete item.imageFile
				}
			})

			this.data.solCorp.items.forEach((item, index)=>{
				if(item.imageFile){//enviando imagenes.
					sendFormData.append(`solCorp-${index}`, item.imageFile)
					delete item.imageFile
				}
			})

			sendFormData.append('data', JSON.stringify(this.data))
			this.$axios({
				url: `${self.baseUrl}/saveData`,
				method: 'post',
				data:sendFormData,
				// data: sendFormData,
				config: { headers: {'Content-Type': 'multipart/form-data' }}
			})
			.then(response =>{
				if(response.data.ok){
					console.log(response)
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
				self.$q.loading.hide()
				self.$q.notify({
					message:'error en el servidor',
					position: 'top',
					icon:'warning',
					color:'red-5'
				})
			})
		},
		
		// takes an element object
		scrollToElement(id){
			const ele = document.getElementById(id) // You need to get your element here
			let target = getScrollTarget(ele)
			let offset = ele.offsetTop-50 // do not subtract the el.scrollHeight here
			let duration = 0
			setScrollPosition(target, offset, duration)
		}, 
		recaptchaVerified(response){
			this.form.recaptcha = response
		},

		onSubmit(){
			if(this.form.recaptcha){
				const self = this
				let sendFormData = new FormData()
				self.$q.loading.show()
				Object.keys(self.form).forEach((key)=>{
					sendFormData.append(key, self.form[key])
				})

				this.$axios({
					url:`${self.baseUrl}/enviar`,
					method: 'post',
					data:sendFormData,
					config: { headers: {'Content-Type': 'multipart/form-data' }}
				})
				.then(response =>{
					if(response.data.ok){
						self.$q.notify({
							message:response.data.msg,
							position:'bottom-left',
							icon:'thumb_up',
							color:'green-5'
						})
						self.onReset()
					}else{
						self.$q.notify({
							message:response.data.msg,
							position:'bottom-left',
							icon:'warning',
							color:'red-5'
						})
					}
					self.$q.loading.hide()
				})
				.catch(error =>{
					self.$q.loading.hide()
				// your action on error success
					self.$q.notify({
						message:'error en el servidor',
						position: 'top',
						icon:'warning',
						color:'red-5'
					})
				})
			}else{

				this.$q.notify({
					message:'Resolver el captcha',
					position: 'bottom-left',
					icon:'warning',
					color:'red-5'
				})

			}
		
		},

		onReset () {
			this.form = {
				nombre:null,
				email:null,
				telefono:null,
				mensaje:null,
				recaptcha:null,
			}
			// this.$refs.recaptcha.reset()
		}
	}
}
</script>