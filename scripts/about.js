Vue.component('brs-1',{
	
	
	
	props: ['image','titulo2','conten','conten2','list1','list2','list3'],
	
	template:`
	<section id="about" class="about">
	<div class="container">
  	<div class="row">
	<div class="col-lg-6 order-1 order-lg-2">
	  <div class="about-img">
		<img :src="image"  alt="alt">	

	</div>
	</div>
	<div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
	  <h3>{{titulo2}}</h3>
	  <p class="fst-italic">
	  {{conten}}
	  </p>
	  <ul>
		<li><i class="bi bi-check-circle"></i> {{list1}}</li>
		<li><i class="bi bi-check-circle"></i> {{list2}}</li>
		<li><i class="bi bi-check-circle"></i>{{list3}}</li>
	  </ul>
	  <p>
	  {{conten2}}
	  </p>
	</div>
  </div>
</div>
</section>`
})

