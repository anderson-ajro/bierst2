Vue.component('galeria-st', {
	props: ['image'],
	template: `
	<div class="col-lg-3 col-md-4">
    <div class="gallery-item">
		<img :src="image"  alt="alt" class="img-fluid"></a>
    </div>
</div>`
})



