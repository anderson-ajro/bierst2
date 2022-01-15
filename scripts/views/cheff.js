Vue.component('cheff-view', {
    template: ` <section id="chefs" class="chefs container">
<div>

  <div class="section-title">
    <h2>Chefs</h2>
    <p>Conoce a nuestro equipo</p>
  </div>

  <div>
    <div> 
      <div>
  
          <cheff-st v-for="(chef, index) in chefs"
          :key="index"
          :image="chef.image"
          :cargo="chef.cargo"
          :alt="chef.alt">
          </cheff-st>

      </div>
      </div>
      </div>

</div>
</section>`,
    name:"cheff",
    data () {
        return {
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
        }
    }
})