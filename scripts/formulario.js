Vue.component('reserva-form', {
	data:function(){
		return {
				name:null,
				email:"",
				phone:"",
				reserva:"",
				seleccion:"",
				personas:null,
			
										
		arr:[],
		errores:[],
		submitted: false,
		}

	},
	computed : {
    hayErrores: function(){
    	return this.errores.length; 
    }
},
template:`
<div class="form">
<form v-on:submit.prevent="guardar" novalidate >



<div class="row">


	<div class="col-lg-4 col-md-6 form-group">
		  <input type="text" v-model="name" name="name" class="form-control" id="name" placeholder="Ingresa tu nombre" required/>
		  <div class="validate"></div>
	</div>



	<div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
		<input type="email" class="form-control" name="email" id="email" placeholder="Ingresa tu Email" required v-model="email" />
		<div class="validate"></div>
	</div>

	<div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
		<input type="text" class="form-control" name="phone" id="phone" placeholder="Ingresa tu telefono" required v-model="phone" />
		<div class="validate"></div>
	</div>

	
	<div class="col-lg-4 col-md-6 form-group mt-3">
		<input type="date" id="start" name="reserva" v-model="reserva" value="2018-07-22" min="2021-05-24" max="2021-05-31">
		<div class="validate"></div>
	</div>
		
	
	<div class="col-lg-4 col-md-6 form-group mt-3">
	
		<select v-model="seleccion"  name="seleccion">
		<option value="">Seleccione una hora</option>
			<option>11:00</option>
			<option>12:00</option>
  			<option>14:00</option>
  			<option>15:00</option>
  			<option>17:00</option>
			<option>19:00</option>
			<option>20:00</option>
		</select>
	</div>
		

		<div class="col-lg-4 col-md-6 form-group mt-3">
			<input v-model.number="personas" name="personas" type="number" placeholder="Ingrese Nº de personas" />
		</div>

</div>	



<div class="text-center"><button type="submit" value="Enviar">Reservar</button></div>

</form>


		<div v-if="submitted === true">
			<div v-if="hayErrores" class="classerror">
			 <ul>
	     		 <li v-for="x in errores" >{{x}}</li>
	    	</ul>
	  		</div>
	  		<div v-else class="enviado">
	              <span>Enviado con éxito</span>
	        </div>
 		</div>

		<div v-if="this.arr.length > 0" >
			<h2>Detalles de Reserva</h2>
				<ul v-for="item in arr" >
					<li >
					{{item.name}}</li>
					<li>{{item.phone}}</li>
					<li>{{item.reserva}}</li>
					<li>{{item.seleccion}}</li>
					<li>{{item.personas}} personas</li>
				</ul>


	
		</div>
		<div v-else class="classerror">
			<p>No hay reservas realizadas, ingrese los datos</p>
		</div>

		
	</div>`,


methods:{
	guardar:function(e){
		console.log(e) //evento del submit
	//validacion
       this.submitted = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
       this.errores=[] //vaciamos el array de errores
             
	  if (!this.name) {
	  	console.log(!this.name)
	   	this.errores.push('El nombre es obligatorio');
       
      }
     
      if(!this.seleccion[0]){
      	this.errores.push('Debe seleccionar un horario.');
      }
      if (!this.personas) {
        this.errores.push('Debe ingresar 1 ó mas personas');
        
      }
	  if (!this.phone) {
        this.errores.push('Debe ingresar un número');
        
      }
	  if (!this.email) {
        this.errores.push('Debe ingresar un E-mail');
        
      }
	  if (!this.reserva) {
        this.errores.push('Debe ingresar una fecha');
        
      }
     	
     if(this.errores.length == 0){
     	     	 
     nuevoObj = {name: this.name,
				 email: this.email,
				 phone: this.phone,
				 reserva: this.reserva,
				 seleccion: this.seleccion,
				 personas: this.personas,
				}
			
      if(!localStorage.reserva){
			this.arr=[]
		}else{
			this.arr=JSON.parse(localStorage.getItem("reserva"))
			}

		this.arr.push(nuevoObj)
		localStorage.setItem("reserva",JSON.stringify(this.arr))
   }
}

},
//cuando se monte la instancia...
	mounted:function(){
		this.arr=JSON.parse(localStorage.getItem("reserva")) || [] 
		
	}

});


