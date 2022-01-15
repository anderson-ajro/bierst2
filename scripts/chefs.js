Vue.component('cheff-st', {
	props: ['image', 'cargo', 'alt'],
	template: `
	<div>
	<div class="member">

  	<img :src="image" class="img-fluid" alt="alt">
  	<div class="member-info">
		<div class="member-info-content">
	 		 <h4>{{alt}}</h4>
	 		 <span>{{cargo}}</span>
			</div>
  		</div>
	</div>
	</div>
	`
})


