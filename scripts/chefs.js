Vue.component('cheff-st', {
	props: ['image', 'cargo', 'alt'],
	template: `
	<div>
	<div class="member">

  	<img :src="image" class="img-fluid" alt="alt">
  	<div class="member-info">
		<div class="member-info-content">
	 		 <h4>{{chef}}</h4>
	 		 <span>{{cargo}}</span>
			</div>
  		</div>
	</div>
	</div>
	`,

data: () => ({
    chefs: [{
      image: 'assets/img/chefs/chefs-3.jpg',
      alt:'Chef pedro',
      cargo:'Chef Principal'
    },
      {
        image: 'assets/img/chefs/chefs-2.jpg',
        alt:'Chef Laura',
        cargo:'Ayudante de Chef'
      },
      {
        image: 'assets/img/chefs/chefs-1.jpg',
        alt:'Chef Luis',
        cargo:'Chef de dulces '
      }],
  })
})


