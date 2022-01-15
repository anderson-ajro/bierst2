Vue.component('contacto-st',{
	props: ['titulo','contenido','map'],
	template:`<div>
	<div class="container" data-aos="fade-up">
	
	  <div class="section-title">
		<h2>{{titulo}}</h2>
		<p>{{contenido}}</p>
	  </div>
	</div>
	
	<div data-aos="fade-up">
	  <iframe style="border:0; width: 100%; height: 350px;"
		src="{{map}}"
		allowfullscreen></iframe>
	</div>
	</div>

	`
})


