const home = { template: ` 
<section id="hero" class="d-flex align-items-center">
  <div class="container position-relative text-center text-lg-start">
    <div class="row">
      <div class="col-lg-8">
        <h1>Bienvenido a <span>Bier ST</span></h1>
        <h2>Fusionando los sabores de Latinoamerica</h2>

        <div class="btns">
        <router-link to="/menu" exact class="btn-menu">Nuestro Menu</router-link>
        <router-link to="/reserva" exact class="btn-book">Reservar</router-link>
        </div>
      </div>
      <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative">
      </div>
    </div>
  </div>
</section> `, name:'home' 
}
const acerca = {template: `<brs-1></brs-1>`, name:"acerca"
}
const unicos = {template: ` <section id="why-us" class="why-us srv">
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

</section>`, name:"unicos"
}
const menu = {template: `<menu-st></menu-st>`, name:"menu"
}
const cheff = {template: ` <section id="chefs" class="chefs">
<div class="container">

  <div class="section-title">
    <h2>Chefs</h2>
    <p>Conoce a nuestro equipo</p>
  </div>

  <div class="row">
    <div class="col-lg-4 col-md-6"> 
      <div class="cheff">
  
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
</section>`, name:"cheff"
}
const galeria = {template: ` <section id="gallery" class="gallery">
  
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
</section>`, name:"galeria"
}
const reserva = {template: `<section id="book-a-table" class="book-a-table v-cloak formulario1">
<div class="container">

  <div class="section-title">
    <h2>Reservas Biert ST</h2>
    <p>Reserve una mesa</p>
  </div>

  <reserva-form>
  </reserva-form>


</div>

</section>`, name:"contactos"
}
const contactos = {template: `
<div>

<section id="contact" class="contact">
        <div class="container">
  
          <div class="section-title">
            <h2>Contacto</h2>
            <p>Contactanos</p>
          </div>
        </div>
  
        <div >
          <iframe style="border:0; width: 100%; height: 350px;"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3021121552556!2d-58.370660784174405!3d-34.62180496596352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d25a20d091%3A0x1c69f4b647402512!2sAv.%20San%20Juan%20200%2C%20C1147AAN%20CABA!5e0!3m2!1ses!2sar!4v1621886617318!5m2!1ses!2sar"
            allowfullscreen></iframe>
        </div>
  
      </section>

<footer id="footer">
  <div class="footer-top">
    <div class="container">
      <div class="row">

        <div class="col-lg-3 col-md-6">
          <div class="footer-info">
            <h3>Bier ST</h3>
            <p>
              Av. San Juan 200 <br>
              CABA, Argentina<br><br>
              <strong>Telefono:</strong> +54 9 11 2672 2296<br>
              <strong>Email:</strong> info@bierst.com.ar <br>
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 footer-links">
          <h4>Links de interess</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#about">Bier ST</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#menu">Menu</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#chefs">Chefs</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#book-a-table">Reserva</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Bier ST</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> Cultura</li>
            <li><i class="bx bx-chevron-right"></i> Sabores</li>
            <li><i class="bx bx-chevron-right"></i> Multicultural</li>
            <li><i class="bx bx-chevron-right"></i> Viajes gastronomicos</li>
            <li><i class="bx bx-chevron-right"></i> Latinoamerica</li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6 footer-newsletter">
          <h4>Bier ST Newsletter</h4>
          <p>Ingresa tu correo y recibe ofertas semanales</p>
          <form action="" method="post">
            <input type="email" name="email"><input type="submit" value="Bier ST">
          </form>

        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>Bier ST</span></strong>. Todos los derechos reservados
    </div>

  </div>
</footer></div>`, name:"reserva"
}


const routes = [
  { path: '/', component: home },
  { path: '/acerca', component: acerca },
  { path: '/unicos', component: unicos },
  { path: '/menu', component: menu },
  { path: '/cheff', component: cheff },
  { path: '/galeria', component: galeria },
  { path: '/contactos', component: contactos },
  { path: '/reserva', component: reserva },
  { path: '*', redirect: '/' }

]

const router = new VueRouter({
  routes
})
