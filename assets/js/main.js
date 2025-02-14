$(document).ready(function () {
  $(".dropdown").on("mouseenter", function () {
    $(this).addClass("show");
    $(this).find(".dropdown-menu").addClass("show");
  });

  $(".dropdown").on("mouseleave", function () {
    const dropdownMenu = $(this).find(".dropdown-menu");
    dropdownMenu.addClass("hide"); // Adiciona a animação de desaparecimento

    // Aguarda a animação de desaparecimento terminar antes de remover as classes
    setTimeout(function () {
      dropdownMenu.removeClass("show hide"); // Remove as classes após a animação
    }, 300); // Tempo deve ser igual à duração da animação
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
      <div id="img" class="col-md-6 text-align-right">
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
      <div id="img" class="col-md-6 text-align-right">
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
      <div id="img" class="col-md-6 text-align-right">
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
      <div id="img" class="col-md-6 text-align-right">
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

document.addEventListener('DOMContentLoaded', (event) => {
  
  const navbar = document.querySelector('.container-fluid');
  const image = document.querySelector('.img-logo')

  if (navbar) {
      console.log("Navbar found, attaching scroll listener");

      function onScroll() {
          console.log("Scroll position:", window.scrollY);
          if (window.scrollY > 50) { 
              navbar.classList.add('scrolled');
              image.classList.add('s-image')
          } else {
              navbar.classList.remove('scrolled');
              image.classList.remove('s-image')
          }
      }

      window.addEventListener('scroll', onScroll);
  } else {
      console.error("Element with class 'container-fluid' not found.");
  }
});

// Código do carrosel de index.html

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  // Verifica o número de slides visíveis
  let slidesToShow = window.innerWidth <= 768 ? 2 : 3; // 2 slides no mobile, 3 no desktop
  const slideGap = 15; // Espaçamento entre slides em pixels

  let currentSlide = 0; // Índice do slide atual
  let slideWidth = updateSlideWidth(); // Inicializa a largura do slide
  const totalSlides = slides.length;

  // Função para calcular a largura do slide e do track
  function updateSlideWidth() {
      return slides[0].getBoundingClientRect().width;
  }

  // Atualiza a posição dos slides
  function updateSlidePosition(smooth = true) {
      slideWidth = updateSlideWidth(); // Atualiza a largura do slide
      const moveAmount = currentSlide * (slideWidth + slideGap);
      track.style.transition = smooth ? 'transform 0.5s ease' : 'none'; // Transição suave
      track.style.transform = `translateX(-${moveAmount}px)`; // Move os slides
  }

  // Cria os indicadores dinamicamente com base no número total de cliques possíveis
  function createIndicators() {
      indicatorsContainer.innerHTML = ''; // Limpa indicadores antigos
      const totalIndicators = Math.ceil((totalSlides - slidesToShow + 1) / 1); // Calcula o número de indicadores
      for (let i = 0; i < totalIndicators; i++) {
          const button = document.createElement('button');
          button.addEventListener('click', () => goToSlide(i));
          if (i === Math.floor(currentSlide / 1)) {
              button.classList.add('active');
          }
          indicatorsContainer.appendChild(button);
      }
  }

  // Move para o próximo slide considerando slides visíveis
  function nextSlide() {
      if (currentSlide < totalSlides - slidesToShow) {
          currentSlide++;
      } else {
          currentSlide = 0; // Volta ao primeiro slide
      }
      updateSlidePosition();
      updateIndicators();
  }

  // Move para o slide anterior
  function prevSlide() {
      if (currentSlide > 0) {
          currentSlide--;
      } else {
          currentSlide = totalSlides - slidesToShow; // Vai para o último conjunto de slides visíveis
      }
      updateSlidePosition();
      updateIndicators();
  }

  // Move para o slide especificado pelos indicadores
  function goToSlide(slideIndex) {
      currentSlide = slideIndex * 1; 
      updateSlidePosition();
      updateIndicators();
  }

  // Atualiza os indicadores com base no slide atual
  function updateIndicators() {
      const indicators = document.querySelectorAll('.carousel-indicators button');
      indicators.forEach((indicator, i) => {
          if (i === Math.floor(currentSlide / 1)) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }

  // Inicializa o carrossel
  updateSlidePosition();
  createIndicators();
  updateIndicators();

  // Adiciona eventos de clique aos botões de controle
  document.querySelector('.next-slide').addEventListener('click', nextSlide);
  document.querySelector('.prev-slide').addEventListener('click', prevSlide);

  // Adiciona eventos de touch para suporte a swipe
  track.addEventListener('touchstart', touchStart);
  track.addEventListener('touchend', touchEnd);
  track.addEventListener('touchmove', touchMove);

  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  let isDragging = false;

  function touchStart(event) {
      isDragging = true;
      startPos = event.touches[0].clientX;
      animationID = requestAnimationFrame(animation);
      track.style.transition = 'none';
  }

  function touchMove(event) {
      if (isDragging) {
          const currentPosition = event.touches[0].clientX;
          currentTranslate = prevTranslate + currentPosition - startPos;
      }
  }

  function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100) {
      if (currentSlide < totalSlides - slidesToShow) {
          nextSlide();
      } else {
          currentSlide = 0; // Volta ao primeiro slide ao arrastar após o último
          updateSlidePosition(); 
      }
  } else if (movedBy > 100) {
      if (currentSlide > 0) {
          prevSlide();
      } else {
          currentSlide = totalSlides - slidesToShow; // Vai para o último conjunto de slides visíveis
          updateSlidePosition();
      }
  } else {
      updateSlidePosition(); // Atualiza a posição se não houver movimentação suficiente
  }

  prevTranslate = currentSlide * -(slideWidth + slideGap);
  setPositionByIndex();
  updateIndicators();
}

  function animation() {
      setSliderPosition();
      if (isDragging) {
          requestAnimationFrame(animation);
      }
  }

  function setSliderPosition() {
      track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
      track.style.transition = 'transform 0.3s ease-out';
      currentTranslate = currentSlide * -(slideWidth + slideGap);
      prevTranslate = currentTranslate;
      setSliderPosition();
  }

  window.addEventListener('resize', () => {
      slidesToShow = window.innerWidth <= 768 ? 2 : 3; // Atualiza o número de slides mostrados
      slideWidth = updateSlideWidth();
      updateSlidePosition(false);
      createIndicators();
      updateIndicators();
  });
});

// Mostrar ou esconder a senha
function mostrasenha() {
  const input = document.querySelector("#senha")
  const btn = document.querySelector(".btn-eye")
  input.type = (input.type === 'text') ? 'password' : 'text';
  if (input.type === "text") {
    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
  }
  else{
    btn.innerHTML = '<i class="fa-solid fa-eye"></i>'
  }
}


// Página Checkout

function mostrarFormulario() {
  const hideInputs = document.querySelector('.hide-form');
  const Inputs = document.querySelectorAll('.p-inputs');
  const btnForm = document.querySelector('.btn-submit-co');
  let cInput = 0;

  Inputs.forEach((input) => {
    if (input.value === '') {
      cInput = 0;
      btnForm.disabled = true;
      return;
    } 
    else {
      cInput++;
    }
  });

  if (cInput === Inputs.length) {
    hideInputs.style.display = 'block';
    setTimeout(function() {
      hideInputs.classList.add('form-fade-in');
    }, 1);
    btnForm.disabled = false;
    btnForm.classList.remove('disabled')
  } else {
    hideInputs.style.display = 'none';
  }
}

const btnForm = document.querySelector('.btn-submit-co');
if (btnForm) {
  btnForm.disabled = true;
  btnForm.addEventListener('click', mostrarFormulario);
}

const Inputs = document.querySelectorAll('.p-inputs');
Inputs.forEach((input) => {
  input.addEventListener('input', mostrarFormulario);
});


// MASCARAS PAG CHECKOUT / VALIDACAO CPF/CNPJ
$(document).ready(function() {
  const telefoneInput = document.getElementById('inumero');
  var telefoneMask = IMask(telefoneInput, { mask: '(00) 00000-0000' });
  const cpfCnpjInput = document.getElementById('icpf_cnpj');
  const hideRsDiv = document.querySelector('.hide-rs');
  const errorMessage = document.querySelector('.msgcpfcnpj');
  function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev >= 10) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev >= 10) rev = 0;
    return rev === parseInt(cpf.charAt(10));
  }
  function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0, pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    return resultado === parseInt(digitos.charAt(1));
  }
  const cpfCnpjMask = IMask(cpfCnpjInput, {
    mask: [
      { mask: '000.000.000-00', lazy: true },
      { mask: '00.000.000/0000-00', lazy: true }
    ],
    dispatch: function(appended, dynamicMasked) {
      let number = (dynamicMasked.value + appended).replace(/\D/g, '');
      return number.length > 11 ? dynamicMasked.compiledMasks[1] : dynamicMasked.compiledMasks[0];
    }
  });
  function validateCpfCnpj() {
    const rawValue = cpfCnpjMask.unmaskedValue;
    if (rawValue.length !== 11 && rawValue.length !== 14) {
      cpfCnpjInput.classList.remove('valid');
      cpfCnpjInput.classList.remove('invalid');
      errorMessage.style.display = 'none';
      errorMessage.innerHTML = '';
      return;
    }
    let isValid = rawValue.length === 11 ? isValidCPF(rawValue) : isValidCNPJ(rawValue);
    cpfCnpjInput.classList.toggle('valid', isValid);
    cpfCnpjInput.classList.toggle('invalid', !isValid);
    if (isValid) {
      errorMessage.style.display = 'none';
      errorMessage.innerHTML = '';
    } else {
      errorMessage.style.display = 'block';
      errorMessage.innerHTML = '<span class="form-fade-in invalid-c">CPF/CNPJ inválido</span>';
    }
  }
  cpfCnpjMask.on('accept', () => {
    const rawValue = cpfCnpjMask.unmaskedValue;
    hideRsDiv.style.display = rawValue.length > 11 ? 'block' : 'none';
    validateCpfCnpj();
  });
});



const planos = {
  basico: {
    preco_m: "89,90",
    preco_a: "899,90",
    recursos: ['5 usuários', '150 MB de dados', '8 GB de anexos e imagens']
  },
  intermediario: {
    preco_m: "119,90",
    preco_a: "1119,90",
    recursos: ['10 usuários', '300 MB de dados', '12 GB de anexos e imagens']
  },
  profissional: {
    preco_m: "229,90",
    preco_a: "2229,90",
    recursos: ['15 usuários', '500 MB de dados', '20 GB de anexos e imagens']
  }
};

function atualizarPreco() {
  const select = document.querySelector('.selecao-plano');
  const plano = select.value;
  const precoDestaque = document.querySelector('.preco-destaque');
  const pagamento = document.querySelector('.radio-selected');
  const msgA = document.querySelector('.msg_anual')
  
  if (pagamento) {
    const plano_pagamento = pagamento.dataset.plano;
    
    if (plano_pagamento == 'mensal') {
      precoDestaque.innerHTML = `${planos[plano].preco_m}`;
      msgA.innerHTML = ''
    } else if (plano_pagamento == 'anual') {
      precoDestaque.innerHTML = `${planos[plano].preco_a}`;
      msgA.innerHTML = `Economize <span class="msg_A">R$ ${(Number(planos[plano].preco_m.replace(',', '.')) * 12 - Number(planos[plano].preco_m.replace(',', '.')) * 10).toFixed(2).replace('.', ',')}</span>`;
    }
  }
}

function atualizarRecursos() {
  const select = document.querySelector('.selecao-plano');
  const plano = select.value;
  const recursosList = document.querySelectorAll('.recurso');
  const recursos = planos[plano].recursos;

  recursosList.forEach((li, index) => {
    li.innerHTML = recursos[index] || '';
  });
}

function mudarPlano() {
  const divPreco = document.querySelector('.preco');
  const precoDestaque = document.querySelector('.preco-destaque');

  divPreco.classList.remove('preco-fade-in');
  precoDestaque.style.opacity = '0';

  setTimeout(function() {
    atualizarPreco();
    precoDestaque.style.opacity = '1';
    divPreco.classList.add('preco-fade-in');
  }, 1);

  atualizarRecursos();
}

function setSelected(element) {
  const links = document.querySelectorAll('.a-radio');
  
  links.forEach(function(link) {
    link.classList.remove('radio-selected');
  });

  element.classList.add('radio-selected');

  mudarPlano();  
}

window.onload = function() {
  atualizarPreco();
  atualizarRecursos();

  const select = document.querySelector('.selecao-plano');
  select.addEventListener('change', mudarPlano);
};


function mostrardominios() {

let dominio = document.querySelector('#IDbdominio')

dominio = dominio.value

var blocos_dominios = {
  encontrado: {
    bloco: `
      <section class="c-dominio-encontrado fd-m display-flex col-md-12">
        <div class="col-md-8 display-flex">
            <div class="">   
                <i class="fa-solid fa-check i-dc"></i>
            </div>
            <div class="display-flex fd-c justify-content-center">
                <h3 class="t-dc">Este Domínio está disponível</h3>
                <span class="s-dc">${dominio}</span>
            </div>
        </div>
        <div class="col-md-4 display-flex justify-content-center align-items-center">
            <button class="btn-dc">Comprar Domínio</button>
        </div>
      </section>
    `   
  },
  nao_encontrado: {
    bloco: `
      <section class="c-dominio-encontrado fd-m display-flex col-md-12">
        <div class="col-md-8 display-flex">
            <div class="">   
                <i class="fa-solid fa-x i-dcne"></i>
            </div>
            <div class="display-flex fd-c justify-content-center">
                <h3 class="t-dc">Domínio indisponível</h3>
                <span class="s-dc">${dominio}</span>
            </div>
        </div>
        <div class="col-md-4 display-flex justify-content-center align-items-center">
            <button class="btn-dc">Comprar Domínio</button>
        </div>
      </section>
    `   
  },
  exemplo: {
    bloco: `
      <div class="c-dominio-exemplo">
        <div class="border-bottom display-flex fd-m">
          <div class="col-md-8 display-flex">
            <div class="">
                <i class="fa-solid fa-check i-dce"></i>
            </div>
            <div class="mb-35 pr-25 display-flex fd-c justify-content-center">
                <h3 class="t-dce">www.exemplo.com.br</h3>
                <span class="s-dce">Domínio disponível</span>
            </div>
          </div>
          <div class="col-md-4 display-flex justify-content-center align-items-center mb-35">
              <button class="btn-dce">Comprar Domínio</button>
          </div>
        </div>
    </div>
  `     
  },
};

const Sdominios = document.querySelector('.dominios');

Sdominios.innerHTML = `
                    <div class="text-align-center mt-25 mb-25">
                      <h2 class="titulo-d">Domínios encontrados:</h1>
                    </div>
                  `

Sdominios.innerHTML += blocos_dominios.encontrado.bloco;

Sdominios.innerHTML += `<div class="text-align-center mt-25 mb-25">
                          <h2 class="titulo-exemplos-d">Veja também</h1>
                        </div>
                      `
let exemplos = `<div class="c-dominio-exemplos col-md-12">`;

for (let blocos = 0; blocos < 3; blocos++){
  exemplos += blocos_dominios.exemplo.bloco;
}

Sdominios.innerHTML += exemplos;

}


let touchedSenha = false;
let touchedSenhac = false;

function verificaSenha() {
  const senha = document.querySelector('#isenha');
  const senhac = document.querySelector('#isenhac');
  const msgsenha = document.querySelector('.msgsenhac');

  if (!touchedSenha && !touchedSenhac) {
    msgsenha.style.display = 'none';
    msgsenha.innerHTML = '';
    return;
  }

  if (!senha.value || !senhac.value) {
    msgsenha.style.display = 'none';
    msgsenha.innerHTML = '';
    return;
  }

  if (senha.value.length < 8 || senhac.value.length < 8) {
    msgsenha.style.display = 'block';
    msgsenha.innerHTML = '<span class="form-fade-in invalid-c erro">A senha deve ter pelo menos 8 caracteres</span>';
    return;
  }

  if (senha.value !== senhac.value) {
    msgsenha.style.display = 'block';
    msgsenha.innerHTML = '<span class="form-fade-in invalid-c erro">As senhas devem ser iguais</span>';
  } else {
    msgsenha.style.display = 'none';
    msgsenha.innerHTML = '';
  }
}

document.querySelector('#isenha').addEventListener('blur', () => { touchedSenha = true; verificaSenha(); });
document.querySelector('#isenhac').addEventListener('blur', () => { touchedSenhac = true; verificaSenha(); });
document.querySelector('#isenha').addEventListener('input', verificaSenha);
document.querySelector('#isenhac').addEventListener('input', verificaSenha);

document.addEventListener('DOMContentLoaded', function() {
  function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev >= 10) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev >= 10) rev = 0;
    return rev === parseInt(cpf.charAt(10));
  }
  
  function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0, pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    return resultado === parseInt(digitos.charAt(1));
  }
  
  function disableSubmit() {
    const submitBtn = document.querySelector('.btn-submit-co');
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
  }
  
  function enableSubmit() {
    const submitBtn = document.querySelector('.btn-submit-co');
    submitBtn.disabled = false;
    submitBtn.classList.remove('disabled');
  }
  
  function checkFormValidity() {
    const inome = document.querySelector('#inome');
    const iemail = document.querySelector('#iemail');
    const inumero = document.querySelector('#inumero');
    const icpfCnpj = document.querySelector('#icpf_cnpj');
    const irs = document.querySelector('#irs');
    const isenha = document.querySelector('#isenha');
    const isenhac = document.querySelector('#isenhac');
    const itermos = document.querySelector('#itermos');
    
    if (
      !inome.value.trim() ||
      !iemail.value.trim() ||
      !inumero.value.trim() ||
      !icpfCnpj.value.trim() ||
      !isenha.value.trim() ||
      !isenhac.value.trim()
    ) {
      disableSubmit();
      return;
    }
    
    if (!itermos.checked) {
      disableSubmit();
      return;
    }
    
    let cpfCnpjDigits = icpfCnpj.value.replace(/\D/g, '');
    if (cpfCnpjDigits.length !== 11 && cpfCnpjDigits.length !== 14) {
      disableSubmit();
      return;
    }
    
    if (cpfCnpjDigits.length === 11) {
      if (!isValidCPF(cpfCnpjDigits)) {
        disableSubmit();
        return;
      }
    } else if (cpfCnpjDigits.length === 14) {
      if (!isValidCNPJ(cpfCnpjDigits)) {
        disableSubmit();
        return;
      }
      if (!irs.value.trim()) {
        disableSubmit();
        return;
      }
    }
    
    if (isenha.value.length < 8 || isenhac.value.length < 8 || isenha.value !== isenhac.value) {
      disableSubmit();
      return;
    }
    
    enableSubmit();
  }
  
  disableSubmit();
  ['#inome', '#iemail', '#inumero', '#icpf_cnpj', '#irs', '#isenha', '#isenhac', '#itermos'].forEach(selector => {
    const el = document.querySelector(selector);
    if (el) {
      el.addEventListener('input', checkFormValidity);
      el.addEventListener('change', checkFormValidity);
    }
  });
});





