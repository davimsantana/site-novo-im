$(document).ready(function () {
  $(".dropdown").on("mouseenter", function () {
    $(this).addClass("show");
    $(this)
      .find(".dropdown-menu")
      .addClass("show")
      .addClass("animate")
  });

  

  $(".dropdown").on("mouseenter", function () {
    $(this).removeClass("show");
    $(this).find(".dropdown-menu").removeClass("show").css("display", "");
  });
});

document.addEventListener('DOMContentLoaded', function() {
var elements = document.querySelectorAll('.animate');

function checkVisibility() {
  elements.forEach(function(element) {
    var rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Inicialização
checkVisibility();
});



$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    const $collapse = $('#navbarNav');
    if ($collapse.hasClass('show')) {
      $collapse.removeClass('show');
      $collapse.css('height', ''); // Remove a altura ao fechar
    } else {
      $collapse.addClass('show');
      $collapse.css('height', '100vh'); // Define a altura para 100% da tela ao abrir
    }
  });
});

$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('#navbarNav').toggleClass('show');
  });

  $('.close').on('click', function () {
    $('#navbarNav').removeClass('show');
  });
});




document.addEventListener("DOMContentLoaded", function() {

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
if (currentScroll > lastScrollTop) {
// Scrolling down
document.documentElement.style.backgroundAttachment = "scroll";
document.documentElement.style.scrollBehavior = "auto";
} else {
// Scrolling up
document.documentElement.style.backgroundAttachment = "fixed";
document.documentElement.style.scrollBehavior = "smooth";
}
lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
});

let activeButton = null;
function changeContent(button) {
const source = button.getAttribute('data-source');
const content = document.getElementById('content');
const empresasBtns = document.querySelectorAll('.bg-empresas');

// Remover classes de todos os botões
empresasBtns.forEach(btn => {
btn.classList.remove('bg-active');
btn.querySelector('.empresa-nome').classList.remove('titulo-azul');
});

// Adicionar classes ao botão clicado
button.classList.add('bg-active');
button.querySelector('.empresa-nome').classList.add('titulo-azul');

// Adicionar efeito de fade-out
content.classList.remove('fade-in');
content.classList.add('fade-out');

setTimeout(() => {
  switch (source) {
      case 'baguete':
          content.innerHTML = `
          <div class="col-md-6">
        <div>
          <img class="watermark" src="assets/images/aspas.svg" alt="" height="65" width="50">
        </div>
        <h1 id="titulo" class="b-titulo-imprensa">Get Commerce dobra de tamanho em 2022</h1>
        <div>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
        </div>
        <p id="desc" class="txt-l">
          Com isso, a Get Commerce com aprimoramento constante de sua tecnologia de IA, possibilitou um faturamento até 30% maior
          para os seus clientes que são lojas físicas, marcas próprias e indústrias, migrando para o digital como um importante
          canal de vendas.
        </p>
        <div class="mt-40">
          <h3 id="nome">Baguete</h3>
          <span id="link">baguete.com.br</span>
        </div>
      </div>
      <div id="img" class="col-md-6 text-align-center">
        <img class="img-imprensa bg-preto d-b" src="assets/images/img11.jpg" alt=""/>
      </div>

          `
      break;    
      ;
      case 'startups':
          content.innerHTML = `
          <div class="col-md-6">
        <div>
          <img class="watermark" src="assets/images/aspas.svg" alt="" height="65" width="50">
        </div>
        <h1 id="titulo" class="b-titulo-imprensa">Get Commerce levanta R$ 1,2 milhão para ser a RD Station das lojas</h1>
        <div>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
        </div>
        <p id="desc" class="txt-l">
          Criada em 2018, a ferramenta segue um modelo de loja pronta, com tudo o que é preciso para realizar vendas online, desde a configuração das formas de pagamento e envio, à incorporação com o Facebook e configuração do Google Analytics, a ferramenta de marketing digital do Google. Desde sua fundação, a startup atingiu mais de 650 mil pedidos, 27 milhões de pageviews mensais e R$ 160 milhões transacionados diretamente na plataforma.
        </p>
        <div class="mt-40">
          <h3 id="nome">Startups</h3>
          <span id="link">startups.com.br</span>
        </div>
      </div>
      <div id="img" class="col-md-6 text-align-center">
        <img class="img-imprensa bg-preto d-b" src="assets/images/startups.jpg" alt=""/>
      </div>
          `;
          break;
      case 'abcomm':
          content.innerHTML = `
          <div class="col-md-6">
        <div>
          <img class="watermark" src="assets/images/aspas.svg" alt="" height="65" width="50">
        </div>
        <h1 id="titulo" class="b-titulo-imprensa">Get Commerce: eleita melhor plataforma de ecommerce do Brasil pela ABComm está conquistando o mundo</h1>
        <div>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
        </div>
        <p id="desc" class="txt-l">
          Com o uso da tecnologia Get Commerce, nossos clientes têm um aumento de, até 30% nas vendas. Na nossa plataforma já foram gerados mais de 700.000 pedidos, e transacionados mais de R$ 165.000.000. São mais de 27 milhões de pageviews mensais. Tudo isso com alta satisfação de nossos clientes.
        </p>
        <div class="mt-40">
          <h3 id="nome">ABCOMM</h3>
          <span id="link">abcomm.org</span>
        </div>
      </div>
      <div id="img" class="col-md-6 text-align-center">
        <img class="img-imprensa bg-preto d-b" src="assets/images/abcomm.jpg" alt=""/>
      </div>
          `;
          break;
      case 'forbes':
          content.innerHTML = `
          <div class="col-md-6">
        <div>
          <img class="watermark" src="assets/images/aspas.svg" alt="" height="65" width="50">
        </div>
        <h1 id="titulo" class="b-titulo-imprensa">60 Startups vão testar as suas inovações em parceria com empresas</h1>
        <div>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
          <span><i class="fa-solid fa-star star"></i></span>
        </div>
        <p id="desc" class="txt-l">
          Neste momento, os projetos com maior potencial irão conectar-se com mentores, investidores e atores do ecossistema, que os ajudarão a impulsionar o seu desenvolvimento, tais como as empresas Banco Montepio, Brisa, KCS IT, Gaiurb e Águas de Gaia.
        </p>
        <div class="mt-40">
          <h3 id="nome">Forbes</h3>
          <span id="link">forbespt.com</span>
        </div>
      </div>
      <div id="img" class="col-md-6 text-align-center">
        <img class="img-imprensa bg-preto d-b" src="assets/images/forbes.jpg" alt=""/>
      </div>
          `;
          break;
      default:
          break;
  }
  content.classList.remove('fade-out');
  setTimeout(() => {
      content.classList.add('fade-in');
  }, 20);
}, 300);
}