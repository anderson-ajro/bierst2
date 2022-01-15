var app= new Vue({
	el: '.contenedorpcpal',
	router,


	data: {
		servicios : [
			{numero: '1' , title: 'Mezcla de Culturas', ctd:`Es una cocina completamente abierta a distintas propuestas culinarias del mundo, 
			expresada por sus sabores limpios, sus diversos modos de preparación y de presentación de los platos`},

			{numero: '2' , title: 'Sabores Unicos', ctd:`Bier St recoge los sabores de la tradición de cada mesa de suramerica, los platos
			fueron creados respetando los ingredinetes de cada lugar y fusionandolo con ingredientes de diferentes paises`},

			{numero: '3' , title: 'Lugar de encuentro', ctd:`En nuestras instalaciones podras encontrar un ambiente multiculturaas, en 	donde algunos de los elementos decorativos fueron traidos
			directamente desde los paises que acá rindimos honor`},

		],
		
		menus: [{
			plato: 'Arepa Reina Pepeada',
			precio:'485.00',
			ingredientes:'Harina de maiz, con relleno de pollo y crema de palta, acompañada con diferentes cremas de la casa',
			image:'assets/img/menu/arepa.png',
			alt:'Arepa Reina pepeada'
		},
		{
			plato: 'Asado Argentino',
			precio:'1400.50',
			ingredientes:'Carne de primera calidad, acompañado de chistorras, morcillas, chorizos, pollo, ensalada y/o mandioca',
			image:'assets/img/menu/asado.png',
			alt:'Asado Argentino'
		},
		{
			plato: 'Pabellon Criollo',
			precio:'750.00',
			ingredientes:'Plato tipico venezolano; el cual consta de arroz porotos negros, carne "mechada", rebanadas de platano maduro frito, con queso llanero y huevo frito',
			image:'assets/img/menu/pabellon.png',
			alt:'Pabellon criollo venezolano'
		},
		{
			plato: 'Ceviche',
			precio:'850.00',
			ingredientes:'Trozos de pescado fresco, cebolla, jugo de limón, acompañados de maiz blanco',
			image:'assets/img/menu/ceviche.png',
			alt:'ceviche peruano'
		},
		{
			plato: 'Bandeja Paisa',
			precio:'650.50',
			ingredientes:'Plato tipico de Colombia, el cual consta de arroz, chicharron, huevo frito, tajadas de platano maduro, chorizo, arepa antioqueña, frigoles, palta y queso',
			image:'assets/img/menu/bandeja.png',
			alt:'Bandeja paisa Colombiana'
		},
		{
			plato: 'Sandwich de Chola',
			precio:'750.00',
			ingredientes:'Pan artesanal redondo, lonjas de jamon de cerdo horneadas, escabeche, chicharron crocante y salsa de aji amarillo',
			image:'assets/img/menu/sand.png',
			alt:'Sandwich de chola'
		},
		{
			plato: 'Empanadas de pino chillenas (2 Ud.)',
			precio:'350.00',
			ingredientes:'Empanadas al horno, relleno de carne, aceitunas negras, uvas pasas y demas condimentos',
			image:'assets/img/menu/empanadas.png',
			alt:'empanadas chilenas'
		},
		{
			plato: 'Chivito',
			precio:'750.00',
			ingredientes:'Sandwich tradicional de Uruguay, consta de pan artesanal, relleno de carne vacuna, jamón cocido, panceta , queso mozzarella, lechuga, rodajas de tomate, rodajas de huevo duro y morrón',
			image:'assets/img/menu/chivito.png',
			alt:'chivito uruguayo'
		},
		{
			plato: 'Feijoada',
			precio:'850.00',
			ingredientes:'Plato tipico de Brasil, consta de frijoles negros con carne de cerdo, puede estar acompañado de arroz blanco y/o rodajas de naranja',
			image:'assets/img/menu/fei.png',
			alt:'Feijoada brasilera'
		},
		{
			plato: 'Sopa Paragüaya',
			precio:'650.00',
			ingredientes:'Plato que se prepara a base de harina de maíz, manteca de cerdo, cebolla, leche fresca y queso paraguay (queso fresco).',
			image:'assets/img/menu/sopa.png',
			alt:'sopa paragüaya'
		}],

		

		locals: [{
		image: 'assets/img/about.jpg',
		alt:'Local Bier ST',
		titulo2:'Que hace unico a Bier ST',
		conten:'En Bier St podras conseguir un ambiente creado para lograr degustar a todos los paladares, creando plantos y vivencias unicas, en donde la cultura de los paises suramericanos se entremezclan creando platos unicos, se fusiona el sabor caribeño, con aditivos del altiplano de la cordillera andina, mezclada de las mejores carnes de Argentina y Uruguay.',
		list1:'Platos Unicos',
		list2:'Mezcla de culturas y sabores.',
		list3:'Chefs que han vivido en estos paises en donde han adquirido los secretos de cada gastronomía',
		conten2:'Bier St, una nueva propuesta la cual ofrece un viaje a través del paladar, cada bebida, plato y/o postre será un viaje de cultura y sabor, Te invitamos a conocer lo que Bier ST tiene para vos.'
	}]

	,

		galerias: [
		{image: 'assets/img/gallery/gallery-1.jpg'},
		{image:'assets/img/gallery/gallery-2.jpg'},
		{image:'assets/img/gallery/gallery-3.jpg'},
		{image:'assets/img/gallery/gallery-4.jpg'},
		{image:'assets/img/gallery/gallery-5.jpg'},
		{image:'assets/img/gallery/gallery-6.jpg'},
		{image:'assets/img/gallery/gallery-7.jpg'},
		{image:'assets/img/gallery/gallery-8.jpg'
	}]

}





})











