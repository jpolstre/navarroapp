<template>
<div>
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
					<div class="text-h4 text-weight-bold">RECURSOS</div>
					<div class="text-h5 text-weight-bold text-blue-grey-4">EMPRESARIALES</div>
					<p class="text-body2 text-blue-grey-4 q-mt-lg" style="max-width: 450px;">Tenemos lo que su empresa necesita, atención especializada 24hrs. Tecnología de última generación, asesoramiento corporativo y especialistas en cobertura de eventos.</p>
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
				<div class="text-h4 q-mt-sm text-weight-medium">SOLUCIONES</div>
				<div class="text-h6 q-mb-md text-weight-bold text-blue">TECNOLÓGICAS</div>
				<div class="text-body1 text-weight-thin">
					<p >Ponemos a su disposición productos de última tecnología. Realizamos la instalación de dispositivos de audio y video enfocados en mejorar la experiencia del usuario basándonos en lo último en dispositivos inteligentes.</p> 
					<br>
					<p>El mundo ha evolucionado y vemos una proliferación de asistentes automatizados como parte del crecimiento del Internet de las Cosas. En la actualidad contamos con centros de comando de voz naturales, progreso en la tecnología WiFi, un aumento en el interés de la conectividad de redes e incluso ciudades. </p>
					<br>
					<p>Deseamos que nuestros clientes saquen provecho de lo mejor del siglo XXI y puedan mostrarse como agentes de la revolución tecnológica. Integramos todo con un cuidado profesional buscando la compatibilidad entre todos los sistemas, cámaras de video, audio y recursos digitales e informáticos. Usted puede ahora hacer su vida mejor, más fácil y satisfactoria.</p>
					<br>
					<p>Cual sea el elemento que necesite, contamos con dispositivos que se adapten a sus necesidades, estamos dispuestos a asesorarlo y ofrecerle lo mejor. Ayudamos a nuestros clientes ya sea que tengan conocimientos y dominio de estos dispositivos como para clientes que recién comienzan en el ámbito corporativo.</p>
				</div>
				
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
				<div class="text-h4  text-weight-medium text-grey-9">SEA PARTE DE LAS SOLUCIONES TECNOLÓGICAS</div>
				<div class="text-h5  text-weight-bold text-blue q-pt-sm">Conviértase en un innovador y aumente su productividad</div>
				<p class="text-body1 text-weight-thin" style="max-width: 800px;">Contamos con una infinidad de dispositivos específicamente diseñados para hacer su vida mejor, donde la ciencia ficción encuentra un punto de equilibrio con la realidad, haciendo lo inimaginable.</p>
			</div>
		</div>
		<div class="row bg-white q-pt-lg q-pb-xl" align="center">
			<div class="col-md-4 col-sm-12 col-xs-12" v-for="st, index in solucionesTecnologicas" :key="index">
				<div class="q-card q-mx-sm full-height">
					<div class="q-pa-xl">
						<img :src="`statics/${st.imagen}`" :alt="st.imagen" style="border-radius:50%;" class="wow jackInTheBox" data-wow-duration="1s" data-wow-delay=".5s">
						<div class="text-h5 text-weight-medium text-grey-9 q-my-sm">{{st.titulo}}</div>
						<div class="text-body1 text-left text-weight-thin">{{st.descripcion}}</div>
					</div>
				</div>
			</div>
			
		</div>
	</section>
	<section id="soluciones_corporativas">
		<div class="row text-white q-pt-xl">
			<div class="col-md-8 col-sm-12 col-xs-12 q-px-xl q-pb-xl" align="center">
				<div class="text-h4 text-weight-medium q-mt-sm">SOLUCIONES</div>
				<div class="text-h6 q-mb-md text-weight-bold text-blue">CORPORATIVAS</div>
				<div class="text-body1 text-weight-thin">
					<p>Nuestro personal especializado se encarga de cubrir eventos corporativos, traducción en tiempo real entre idiomas, control de sistemas electrónicos y contactos para activaciones corporativas.</p> 
					<br>
					<p>Cual sea el evento a realizar: Encuentros corporativos, conferencias, celebraciones, ferias, cumbres, seminarios, congresos, exposiciones, simposios, lanzamientos de productos, conferencias de prensa, workshops, apertura de licitaciones, inauguraciones, traducciones en tiempo real y actos especiales en general contamos con el equipo y/o accesorios que se adapten a sus necesidades.</p>
					<br>
					<p>Nuestro equipo de especialistas está siempre atento para apoyarlo y asesorarlo, puede contactarnos en cualquier momento, respondemos las 24 horas. Brindamos atención al cliente y servicio personalizado.</p>
				</div>
				
			</div>
			<div class="col-md-4 col-sm-12 col-xs-12" align="center">
				<div class="box sonar-effect"></div>
			</div>
			
		</div>
		<div class="row bg-darkblue text-white q-pt-xl">
			<div class="col-md-12 q-pt-sm" align="center">
				<div class="text-h4 text-weight-medium">SUS EVENTOS NO VOLVERÁN A SER IGUALES</div>
				<div class="text-h5 text-weight-bold text-light-green q-pt-sm">Queremos que su empresa y usted crezcan</div>
				<p class="text-body1 text-weight-thin" style="max-width: 800px;">Estamos dispuestos a brindar un asesoramiento preciso sobre diversas formas en las cuales puede implementar nuestra tecnología y servicios en la administración de sus eventos.</p>
			</div>
		</div>
		<div class="row bg-darkblue text-grey-5 q-pt-lg q-pb-xl" align="center">
			<div class="col-md-4 col-sm-12 col-xs-12" v-for="st, index in solucionesCorporativas" :key="index">
				<div class="q-card bg-darkblue q-mx-sm full-height">
					<div class="q-pa-xl">
						<img :src="`statics/${st.imagen}`" :alt="st.imagen" style="border-radius:50%;" class="wow jackInTheBox" data-wow-duration="1s" data-wow-delay=".5s">
						<div class="text-h5 text-weight-medium text-grey-8 q-my-sm">{{st.titulo}}</div>
						<div class="text-body1 text-left text-weight-thin">{{st.descripcion}}</div>
					</div>
				</div>
			</div>
			
		</div>
	</section>

	<div id="wall_x" class="imageX" data-stellar-background-ratio="0.4" data-wow-delay=".5s">
		<h1 class="wow flipInY text-weight-bold" style="visibility: visible; animation-name: flipInY;">DEMUESTRE EL VALOR DE SU EMPRESA</h1>
				
	</div>
	
	<q-footer class="absolute-bottom bg-darkblue text-grey-6 q-px-lg q-pt-lg" style="z-index: 0;">
		<div class="row">
			<div class="col-md-6 col-sm-12 col-xs-12 q-py-lg">
				<div class="q-mr-md">
					<div class="text-h4">Contáctenos</div>
					<p class="text-body1">
						¡Envíenos un mensaje! respondemos de inmediato. Si lo desea puede escribirnos desde su cuenta de correo a info@gonzalesnavarro.com
					</p>
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
					<div class="text-h4">Call-center</div>
					<p class="text-body1">
						Nuestras líneas se encuentran disponibles todo el tiempo, no dude en contactar para realizar cualquier consulta.
					</p>
					<q-list dark bordered separator class="q-mt-lg" v-for="(value, name) in callCenter" :key="name">
						<q-item-label header class="text-uppercase">{{name}}</q-item-label>
						<q-item clickable v-ripple  v-for="item, index in value" :key="index">
							<q-item-section avatar>
								<q-icon color="primary" :name="name!=='emails'?'phone':'email'" />
							</q-item-section>
							<q-item-section>{{item}}</q-item-section>
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
	

</div>
</template>
<script>

import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

import WOW from 'wow.js/dist/wow.min.js'
export default {
	name: 'PageIndex',
	data(){
		return{
			slide: 1,
			form:{
				nombre:null,
				email:null,
				telefono:null,
				mensaje:null
			},

			callCenter:{
				telefonos:['(+591) 2 2900471', '(+591) 2 2900472', '(+591) 707 66444', '(+591) 758 12048'],
				correos:['info@gonzalesnavarro.com', 'soporte@gonzalesnavarro.com']
			},

			solucionesTecnologicas:[
				{ 
					imagen:'icon1.jpg',
					titulo:'INTERNET DE LAS COSAS',
					descripcion:'Objetos convencionales se vuelven inteligentes y se conectan entre sí para facilitar muchas tareas simples y aumentar la productividad.'
				},
				{ 
					imagen:'icon2.jpg',
					titulo:'MONITOREO Y SEGURIDAD',
					descripcion:'Tenga el control total. Contamos con cámaras, monitores y videowalls, videograbadoras, sistemas inalámbricos, video analítica, redes, cámaras termales, monitoreo de energía, cableado estructurado, cable UTP, montaje en rack, paneles y cables de conexión, recintos en pared, bastidores de servidores, Kits, enrutadores, puertos, sensores especializados, multidetectores, software de supervisión, lectores biométricos y control de acceso.'
				},
				{ 
					imagen:'icon3.jpg',
					titulo:'AUTOMATIZACIÓN',
					descripcion:'Aplicamos elaborados procesos, tanto en hardware como en software para que tareas realizadas repetidas veces puedan ser operadas por una inteligencia artificial, ahorrando incontables horas de trabajo y generando ingresos inmensurables para usted y su empresa.'
				},

			],
			solucionesCorporativas:[
				{ 
					imagen:'icon4.jpg',
					titulo:'REUNIONES PRIVADAS',
					descripcion:'Contamos con el equipo necesario para realizar presentaciones de calidad, demostrando un control total de sus negocios y su empresa.'
				},
				{ 
					imagen:'icon5.jpg',
					titulo:'EVENTOS MASIVOS',
					descripcion:'Si requiere ayuda externa para poder organizar, reunir y entretener a grandes grupos de personas, contamos con el personal indispensable para brindar soporte.'
				},
				{ 
					imagen:'icon6.jpg',
					titulo:'CEREMONIAS',
					descripcion:'El protocolo a seguir, incluso antes de iniciar el evento se encuentra en nuestras manos, confiamos en la capacidad de nuestros anfitriones para poder ayudarle.'
				},

			]
		}
	},
	created(){
		new WOW().init();
	},
	methods: {
		
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
			this.form ={
				nombre:null,
				email:null,
				telefono:null,
				mensaje:null
			}
		}
	}
}
</script>

