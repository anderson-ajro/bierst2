Vue.component('acerca-view', {
    template: `<section id="about" class="local-1">
        <div>
          <brs-1 v-for="(local, index) in locals"
          :key="index"
          :titulo2="local.titulo2"
          :conten="local.conten"
          :conten2="local.conten2"
          :image="local.image"
          :alt="local.alt"
          :list1="local.list1"
          :list2="local.list2"
          :list3="local.list3"
          ></brs-1>
        </div>

      </section>`, 



    name:"acerca-view",

    data () {
        return {

		locals: [{
		image: 'assets/img/about.jpg',
		alt:'Local Bier ST',
		titulo2:'Que hace unico a Bier ST',
		conten:'En Bier St podras conseguir un ambiente creado para lograr degustar a todos los paladares, creando plantos y vivencias unicas, en donde la cultura de los paises suramericanos se entremezclan creando platos unicos, se fusiona el sabor caribeño, con aditivos del altiplano de la cordillera andina, mezclada de las mejores carnes de Argentina y Uruguay.',
		list1:'Platos Unicos',
		list2:'Mezcla de culturas y sabores.',
		list3:'Chefs que han vivido en estos paises en donde han adquirido los secretos de cada gastronomía',
		conten2:'Bier St, una nueva propuesta la cual ofrece un viaje a través del paladar, cada bebida, plato y/o postre será un viaje de cultura y sabor, Te invitamos a conocer lo que Bier ST tiene para vos.'
	}],

}}})
