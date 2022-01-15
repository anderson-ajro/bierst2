Vue.component('unicos-view', {
    template: ` <section id="why-us" class="why-us srv">
<div class="container">

  <div class="section-title">
    <h2>¿Porque elegir Bier ST?</h2>
    <p>Nuestro restaurante ofrece lo que vos estabas buscando</p>
  </div>
  <div class="row">
        <services-st v-for="(servicio, index) in servicios"
        :key="index"
        :numero="servicio.numero"
        :title="servicio.title"
        :ctd="servicio.ctd">
        </services-st>
    </div>
</div>

</section>`,
    name:"unicos",
    data () {
        return {
            servicios : [
                {numero: '1' , title: 'Mezcla de Culturas', ctd:`Es una cocina completamente abierta a distintas propuestas culinarias del mundo, 
			expresada por sus sabores limpios, sus diversos modos de preparación y de presentación de los platos`},

                {numero: '2' , title: 'Sabores Unicos', ctd:`Bier St recoge los sabores de la tradición de cada mesa de suramerica, los platos
			fueron creados respetando los ingredinetes de cada lugar y fusionandolo con ingredientes de diferentes paises`},

                {numero: '3' , title: 'Lugar de encuentro', ctd:`En nuestras instalaciones podras encontrar un ambiente multiculturaas, en 	donde algunos de los elementos decorativos fueron traidos
			directamente desde los paises que acá rindimos honor`},

            ],
        }
    }
})


