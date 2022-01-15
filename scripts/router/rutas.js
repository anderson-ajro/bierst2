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
</section>  `, name:'home'
}
const cheff = { template: ` 
<cheff-view></cheff-view> `, name:'cheff'
}
const menu = { template: ` 
<menu-view></menu-view> `, name:'menu'
}
const acerca = { template: ` 
<acerca-view></acerca-view> `, name:'acerca'
}
const galeria = { template: ` 
<galeria-view></galeria-view> `, name:'galeria'
}
const reserva = { template: ` 
<reserva-view></reserva-view> `, name:'reserva'
}
const contactos = { template: ` 
<contactos-view></contactos-view> `, name:'contactos'
}
const unicos = { template: ` 
<unicos-view></unicos-view> `, name:'unicos'
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
