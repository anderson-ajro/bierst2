Vue.component('menu-st', {
	props: ['image', 'alt', 'plato', 'precio', 'ingredientes',],
	name:  'menu-st',
	template: `
	<div class="col-lg-6 menu-item">
	<img :src="image" class="menu-img" alt="alt">
	<div class="menu-content">
	 <p>{{plato}}</p><span>$.{{precio}}</span>
	</div>
	<div class="menu-ingredients">
	  <p>{{ingredientes}}</p>
	</div>
	</div>
	`
  })