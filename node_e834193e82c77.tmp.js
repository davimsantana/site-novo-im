<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://www.internetmedia.com.br/favicon.ico">
    <title>Fale Conosco - Internet Media, Site de Notícias, Criar guia comercial!</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .bg-nebulosas {
        position: relative;
        z-index: 1;
        padding: 20px; /* ajuste conforme necessário */
        }

        .bg-nebulosas::before {
            content: "";
            background-image: url('assets/images/background-nebulosas.png');
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw; /* Estende a largura até a viewport */
            height: 100%;
            z-index: -1;
            margin-left: calc(-50vw + 50%);
        }
    </style>
</head>
<body>
    <nav class="navbar bg-body-tertiary navbar-expand-lg pt-20">
        <div class="container container-fluid bg-transparent justify-content-center">
          <div class="nav">
          <div class="nowrap display-flex align-items-center">
            <a href=""><img class="img-logo" src="assets/images/logo.png" alt="Logo" /></a>
            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
  
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="display-flex">
              <a href=""><img class="img-logo-nav" src="assets/images/logo.png" alt="Logo" /></a>
              <button class="close"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link home" href="https://davimsantana.github.io/site-novo-im/">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Plataforma 
                </a>
                <ul class="dropdown-menu">
                  <a class="link-dropdown" href="https://www.internetmedia.com.br/">Portal de Notícias <br></a>
                  <a class="link-dropdown" href="https://www.internetmedia.com.br/">Guia Comercial</a>
                  <ul>
                    <li><h2 class="titulo-dropdown">Como te Ajudamos</h2></li>
                    <li class="icon-container">
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-fingerprint"></i><span class="">Recursos</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-sharp fa-solid fa-laptop-code"></i><span class="">Temas</span>
                      </a>
                    </li>
                    <li class="icon-container">
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-user"></i><span class="">UltraCheckout</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-sharp fa-solid fa-laptop-code"></i><span class="">Vender Nas Redes Sociais</span>
                      </a>
                    </li>
                   <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-money-bill-1"></i><span class="">UltraCheckout</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-diagram-project"></i><span class="">Super Buscaa</span>
                      </a>
                    </li>
                   <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-dollar-sign"></i><span class="">Vitrines de Recomendação</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-cart-shopping"></i><span class="">Recuperação de Carrinhos</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-rocket"></i><span class="">Migrações</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="pr-30">
                    <li><h2 class="titulo-dropdown">Incremente sua loja</h2></li>
                    <li class="icon-container">
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-credit-card"></i><span class="">Meios de Pagamento</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="nav-i fa-solid fa-code-branch"></i><span class="">Sistema de
                        Gestão</span>
                      </a>
                    </li>
                    <li class="icon-container">
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i fas fa-dolly"></i><span class="">Meios de Entrega</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i fas fa-network-wired"></i><span class="">Redes Sociais</span>
                      </a>
                    </li>
                   <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i fas fa-lock"></i><span class="">Segurança e Anti-Fraude</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i far fa-envelope"></i><span class="">Marketing e Comunicação</span>
                      </a>
                    </li>
                   <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i fas fa-fingerprint"></i><span class="">Hubs Marketplaces</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i fas fa-users"></i><span class="">Recuperação de Carrinhos</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i fas fa-paper-plane"></i><span class="">Recuperação de Carrinhos</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i aria-hidden="true" class="nav-i far fa-chart-bar"></i><span class="">Comparadores de Preços</span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link nowrap" href="#">Planos e Preços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
              </li>
            </ul>
            <button type="button" class="btn btn-nav btn-primary">
              <span>Fale com Especialista</span>
            </button>
          </div>
        </div>
        </div>
      </nav>
      <main>
        <section class="bg-nebulosas col-md-12 container">
            <div>
                <div class="text-align-center pb-150">
                    <h1 class="titulo-fc">Olá, tudo bem com você?</h1>
                    <span class="span-fc">Fique à vontade para enviar sua mensagem.</span>
                </div>
            </div>
        </section>
        <section class="display-flex justify-content-center container mb-70">
            <div class="col-md-6 pr-35 margin-auto">
                <h3 class="t-txt">Texto de Exemplo</h3>
                <p class="f-w700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae similique facere, aperiam exercitationem numquam nobis.</p>
            </div>
            <div class="col-md-6">
                <div class="display-flex mr-50">
                    <div class="w-card col-md-6">
                        <i class="fa-brands fa-whatsapp"></i> <br>
                        <span class="card-span">WhatsApp</span>
                        <p class="card-p">Lorem ipsum dolor sit amet, consectetur</p>
                        <a class="card-link"  href="#"><i aria-hidden="true" class="fas fa-arrow-right seta-w"></i
                            >Falar com Especialista</a>
                    </div>
                    <div class="c-card col-md-6">
                        <i class="fa-regular fa-comment-dots"></i> <br>
                        <span class="card-span">Chat Online</span>
                        <p class="card-p">Lorem ipsum dolor sit amet, consectetur</p>
                        <a class="card-link" href="#"><i aria-hidden="true" class="fas fa-arrow-right seta-w"></i
                            >Entrar Chat Online</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gradiente">
          <div class="container display-flex">
            <div class="p-0 mt-70 col-md-6 pr-35">
              <div class="form-container">
                <div class="form-group col-md-6"> 
                  <label class="l-fc-form" for="nome">Nome</label><br><input class="w-90" id="" type="text">
                </div>
                <div class="form-group col-md-6">
                  <label class="l-fc-form" for="telefone">Telefone</label><br><input placeholder="número com DDD" class="w-90" id="telefone" type="text">
                </div>
              </div>
              <div class="col-md-12">
                <label class="l-fc-form" for="email">E-mail</label><br><input placeholder="exemplo@email.com" id="email" type="text"> <br>
                <label class="l-fc-form" for="assunto">Assunto</label><br><input placeholder="Sobre o que você quer conversar?" id="assunto" type="text"> <br>
                <label class="l-fc-formc" for="motivo">Em que podemos te ajudar?</label><br><input  class="h-105p" placeholder="O que você quer nos contar?" id="motivo" type="text">
              </div>
              <div>
                <button type="button" class="btn btn-nav btn-primary m-0">Fale Com Especialista</button>
              </div>
            </div>
            <div class="col-md-6 mt-70 ml-25 pr-80 pl-45">
              <h3 class="t-txt">Texto de Exemplo</h3>
              <p class="f-w700 pb-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae similique facere</p>
              <div class="contatos">
                <h3 class="t-txt pt-25 pb-25">Nossos Contatos</h3>
                <div class="display-flex pb-15">
                  <div class="c-i-box">
                    <i class="fa-regular fa-at"></i>
                  </div>
                  <div class="pl-15 pt-10">
                    <span>suporte@internetmedia.com.br</span> <br>
                    <span>financeiro@internetmedia.com.br</span>
                  </div>
                </div>
                <div class="display-flex">
                  <div class="c-i-box">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div class="pl-15 pt-10">
                    <span><strong class="txt-black">Comercial:</strong> (21) 97649-3627</span> <br>
                    <span><strong class="txt-black">Suporte:</strong> (21) 98132-7299</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="container mt-200">
        <section class="mb">
        <div>
          <div class="row align-items-start">
              <div class="col-md-3 pr-50">
                <img class="img-1-rodape" src="assets/images/logo.png" alt="">
                <p>Criar Portal de Notícias, Criar site Guia Comercial,
                  Site para imobiliárias, site para prefeituras, criação de aplicativos, site para igrejas, etc...</p>
                <img class="img-2-rodape" src="assets/images/img16.png" alt="">
              </div>
              <div class="col-md-3 links-footer">
                  <h4 class="titulo-rodape">Links Úteis</h4>
                  <a href="#">Blog</a><br>
                  <a href="#">+ 234 Recursos</a><br>
                  <a href="#">Planos e Preços</a><br>
                  <a href="#">Central de Ajuda</a><br>
                  <a href="#">Desenvolvedores</a><br>
                  <a href="#">Integre seu ERP</a><br>
                  <a href="#">Guia da Marca</a>
              </div>
              <div class="col-md-3 links-footer">
                  <h4 class="titulo-rodape">Sobre Nós</h4>
                  <a href="#">Quem Somos</a><br>
                  <a href="#">Fale conosco</a><br>
                  <a href="#">Termos de uso</a><br>
                  <a href="#">LGPD</a><br>
                  <a href="#">Trabalhe conosco</a>
              </div>
              <div class="col-md-3 numeros-fc">
                  <h4 class="titulo-rodape">Fale Conosco</h4>
                  <span>Vendas: <a href="#">(21) 97649-3627</a></span> <br>
                  <span>Suporte: <a href="#">(21) 98132-72990</a></span>
              </div>
            </div>
          </div>
        </div>
        </section>
          <div class="mb-20">Internet Media - Todos os direitos reservados | Política de Privacidade - Termos de Uso - Termos e Condições</div>
      </footer>
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    >
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>