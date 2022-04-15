//header-------------------------------------------------------------------------------------
document.getElementById("header").innerHTML = 
          ` <nav class="nav">
            <a href="index.html"><img class="logo" src="./img/logo-ElLlano.png" alt="El Llano Logo"></a>
             
              </button>
              <ul class="nav-menu nav-Menu-visible">
                <li class="nav-menu-item"><a href="#nosotros" class="nav-menu-link nav-route">Sobre Nosotros</a></li>
                <li class="nav-menu-item"><a href="#productos" class="nav-menu-link nav-route">Productos</a></li>
                <li class="nav-menu-item"><a href="#contacto" class="nav-menu-link nav-route">Contacto</a></li>
              </ul>
            </nav>`;



//footer---------------------------------------------------------------------------------------
document.getElementById("footer").innerHTML = 
` <a name="contacto" id="contacto"><div class="socialFooter"></a>
    <a href="index.html" class="logoFooter">
      <img class="logo" src="./img/logo.png" alt="Margarita Barrientos Logo"></div>
    </a>

    <div class="socialFooter">

      <a href="https://www.facebook.com/" target="_blank" class="redesFooter"><i class="fab fa-facebook"></i></a>

      <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram" class="redesFooter"></i></a>
      
      <a href=""><i class="fab fa-linkedin"></i></a>
      
    </div>

  <div class="footerInfo">
    <p class="pFooter">Dirección: lorem ipsum - Santiago de Chile -  Tel: 11-12345678 - Email: info@elllano.com.cl</p>
  </div>`;


//toogle menu---------------------------------------------------------------------------------
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-vissible")
})