Vue.component('galeria-view',{
    template: ` <section id="gallery" class="gallery">
  
<div class="container">
  <div class="section-title">
    <h2>Galeria</h2>
    <p>Algunas fotografias de Bier ST</p>
  </div>
</div>

<div class="container-fluid">

  <div class="row g-0">

    <galeria-st v-for="(galeria, index) in galerias"
    
    :key="index"
    :image="galeria.image"
    
    >

    </galeria-st>

  </div>

</div>
</section>`,
    name:"galeria",
    data () {
        return {
            galerias: [
                {image: 'assets/img/gallery/gallery-1.jpg'},
                {image:'assets/img/gallery/gallery-2.jpg'},
                {image:'assets/img/gallery/gallery-3.jpg'},
                {image:'assets/img/gallery/gallery-4.jpg'},
                {image:'assets/img/gallery/gallery-5.jpg'},
                {image:'assets/img/gallery/gallery-6.jpg'},
                {image:'assets/img/gallery/gallery-7.jpg'},
                {image:'assets/img/gallery/gallery-8.jpg'}]
        }
    }
})
