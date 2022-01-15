Vue.component('menu-view', {
    template: `<div>

<section class="menu   section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Menu</h2>
            <p>Mira nuestro menú</p>
            <span>En Bier ST nos interesa saber que opciones de nuestro menu te gustan más, por eso te invitamos a seleccionar que plato es de tu preferencia</span>
          </div>
  

		  <div class="row menu-container" >

<menu-st v-for="(menu, index) in menus"
                        :key="index" 
                        :opcion="menu.opcion"
                        :image="menu.image" 
                        :alt="menu.alt" 
                        :plato="menu.plato"
                        :precio="menu.precio"
                        :ingredientes="menu.ingredientes">
</menu-st>


                </div>
	</div>
  

</section>


</div>`,
    name:"menu-view",
    data () {
        return {
            menus: [{
                opcion:'1',
                plato: 'Arepa Reina Pepeada',
                precio:'485.00',
                ingredientes:'Harina de maiz, con relleno de pollo y crema de palta, acompañada con diferentes cremas de la casa',
                image:'assets/img/menu/arepa.png',
                alt:'Arepa Reina pepeada'
            },
                {
                    opcion:'2',
                    plato: 'Asado Argentino',
                    precio:'1400.50',
                    ingredientes:'Carne de primera calidad, acompañado de chistorras, morcillas, chorizos, pollo, ensalada y/o mandioca',
                    image:'assets/img/menu/asado.png',
                    alt:'Asado Argentino'
                },
                {
                    opcion:'3',
                    plato: 'Pabellon Criollo',
                    precio:'750.00',
                    ingredientes:'Plato tipico venezolano; el cual consta de arroz porotos negros, carne "mechada", rebanadas de platano maduro frito, con queso llanero y huevo frito',
                    image:'assets/img/menu/pabellon.png',
                    alt:'Pabellon criollo venezolano'
                },
                {
                    opcion:'4',
                    plato: 'Ceviche',
                    precio:'850.00',
                    ingredientes:'Trozos de pescado fresco, cebolla, jugo de limón, acompañados de maiz blanco',
                    image:'assets/img/menu/ceviche.png',
                    alt:'ceviche peruano'
                },
                {
                    opcion:'5',
                    plato: 'Bandeja Paisa',
                    precio:'650.50',
                    ingredientes:'Plato tipico de Colombia, el cual consta de arroz, chicharron, huevo frito, tajadas de platano maduro, chorizo, arepa antioqueña, frigoles, palta y queso',
                    image:'assets/img/menu/bandeja.png',
                    alt:'Bandeja paisa Colombiana'
                },
                {
                    opcion:'6',
                    plato: 'Sandwich de Chola',
                    precio:'750.00',
                    ingredientes:'Pan artesanal redondo, lonjas de jamon de cerdo horneadas, escabeche, chicharron crocante y salsa de aji amarillo',
                    image:'assets/img/menu/sand.png',
                    alt:'Sandwich de chola'
                },
                {
                    opcion:'7',
                    plato: 'Empanadas de pino chillenas (2 Ud.)',
                    precio:'350.00',
                    ingredientes:'Empanadas al horno, relleno de carne, aceitunas negras, uvas pasas y demas condimentos',
                    image:'assets/img/menu/empanadas.png',
                    alt:'empanadas chilenas'
                },
                {
                    opcion:'8',
                    plato: 'Chivito',
                    precio:'750.00',
                    ingredientes:'Sandwich tradicional de Uruguay, consta de pan artesanal, relleno de carne vacuna, jamón cocido, panceta , queso mozzarella, lechuga, rodajas de tomate, rodajas de huevo duro y morrón',
                    image:'assets/img/menu/chivito.png',
                    alt:'chivito uruguayo'
                },
                {
                    opcion:'9',
                    plato: 'Feijoada',
                    precio:'850.00',
                    ingredientes:'Plato tipico de Brasil, consta de frijoles negros con carne de cerdo, puede estar acompañado de arroz blanco y/o rodajas de naranja',
                    image:'assets/img/menu/fei.png',
                    alt:'Feijoada brasilera'
                },
                {
                    opcion:'10',
                    plato: 'Sopa Paragüaya',
                    precio:'650.00',
                    ingredientes:'Plato que se prepara a base de harina de maíz, manteca de cerdo, cebolla, leche fresca y queso paraguay (queso fresco).',
                    image:'assets/img/menu/sopa.png',
                    alt:'sopa paragüaya'
                }],
        }
    }
})