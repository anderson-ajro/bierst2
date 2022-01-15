Vue.component('menu-st', {
	props: ['image', 'opcion','alt', 'plato', 'precio', 'ingredientes',],
	name:  'menu-view',
	template: `
	<div class="col-lg-6 menu-item">



	<input type="checkbox" value="apcion" id="opcion" @change="comida" :checked="isChecked" />

<label for="opcion"></label>


	<img :src="image" class="menu-img" alt="alt">
	<div class="menu-content">
	 <p>{{plato}}</p><span>$.{{precio}}</span>
	</div>
	<div class="menu-ingredients">
	  <p>{{ingredientes}}</p>
	</div>
	</div>

	`,

computed: {
	isChecked: function( ){
		var opcionLocalStorage = localStorage.getItem( 'favoritas' );
		if( ! opcionLocalStorage ){
			opcionLocalStorage = {}
		}else{
			opcionLocalStorage = JSON.parse( opcionLocalStorage );
		}


		return this.opcion in opcionLocalStorage;
	}
},

methods:{
	comida( e ){ //guarda en localStorage como favorito....
		//console.log( this.id, this.pelicula, this.caratula );

		// el this de Vue tiene una propiedad llamada _props que es un array con todos los properties + getter/setter de esas propiedades 
		console.log( this._props );
		
		let estado = e.target.checked;

		if( estado == true ){
			this.agregarFavorito( this._props );
		}else{
			this.quitarFavorito( this.opcion );
		}

		
	},
	agregarFavorito( datos ){ //para agregar al localStorage
		console.log( 'agregando ' , datos );
		
		var opcionLocalStorage = localStorage.getItem( 'favoritas' );

		if( ! opcionLocalStorage ){
			opcionLocalStorage = { }; 
		}else{
			opcionLocalStorage = JSON.parse( opcionLocalStorage ); 
		}

		opcionLocalStorage[ datos.opcion ] = datos; 

		//console.log( 'peliculas antes del stringify ', peliculasLocalStorage );
		opcionLocalStorage = JSON.stringify( opcionLocalStorage );
		//console.log( 'peliculas después del stringify ', peliculasLocalStorage );

		localStorage.setItem( 'favoritas', opcionLocalStorage );
	},
	quitarFavorito( cual ){ //para quitar del localStorage
		console.log( 'quitando ' + cual );
		
		var opcionLocalStorage = localStorage.getItem( 'favoritas' ); 	
		opcionLocalStorage = JSON.parse( opcionLocalStorage ); 
		
		if( cual in opcionLocalStorage ){
			
			delete opcionLocalStorage[ cual ]; 
		}

		opcionLocalStorage = JSON.stringify( opcionLocalStorage ); 
		localStorage.setItem( 'favoritas', opcionLocalStorage ); 
	}
}

})






