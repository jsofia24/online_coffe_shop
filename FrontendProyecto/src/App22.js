/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from 'react-bootstrap';



export default class App extends React.Component {
  
  render() {
   
    return (
    <Container>
      <div className="MainDiv" bg='primary'>
     
        <div class="humberger__menu__overlay"></div>
          <div class="humberger__menu__wrapper">
              <div class="humberger__menu__logo">
                  <a href="#" class="logo">CAFE ONLINE</a>
              </div>
              <div class="humberger__menu__cart">
                  <ul>
                      <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                      <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                  </ul>
                  <div class="header__cart__price">item: <span>$150.00</span></div>
              </div>
              <div class="humberger__menu__widget">
                  <div class="header__top__right__language">
                      <img src="assets/img/lenguaje.png" alt="" />
                      <div>Español</div>
                      <span class="arrow_carrot-down"></span>
                      <ul>
                          <li><a href="#">Español</a></li>
                          <li><a href="#">Ingles</a></li>
                      </ul>
                  </div>
                  <div class="header__top__right__auth">
                      <a href="#"><i class="fa fa-user"></i> Login</a>
                  </div>
              </div>
              <nav class="humberger__menu__nav mobile-menu">
                  <ul>
                      <li class="active"><a href="#">Inicio</a></li>
                      <li><a href={"/FrontendProyecto/src/components/tienda/tienda.js"}>Tienda</a></li>
                      <li><a href="#">Paginas</a>
                          <ul class="header__menu__dropdown">
                              <li><a href="./components/tienda/tienda.js">Shop Details</a></li>
                              <li><a href="#">Shoping Cart</a></li>
                              <li><a href="#">Check Out</a></li>
                              <li><a href="#">Blog Details</a></li>
                          </ul>
                      </li>
                      <li><a href="#">Nosotros</a></li>
                      <li><a href="#">Contacto</a></li>
                  </ul>
              </nav>
              <div id="mobile-menu-wrap"></div>
              <div class="header__top__right__social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
              <div class="humberger__menu__contact">
                  <ul>
                      <li><i class="fa fa-envelope"></i> juanitovaldes@gmail.com</li>
                      <li>Envio Gratis en Ordenes al por Mayor</li>
                  </ul>
              </div>
          </div>
         
          <header class="header">
              <div class="header__top">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-6 col-md-6">
                              <div class="header__top__left">
                                  <ul>
                                      <li><i class="fa fa-envelope"></i> juanitovaldes@gmail.com</li>
                                      <li>Envio Gratis en Ordenes al por Mayor</li>
                                  </ul>
                              </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                              <div class="header__top__right">
                                  <div class="header__top__right__social">
                                      <a href="#"><i class="fa fa-facebook"></i></a>
                                      <a href="#"><i class="fa fa-twitter"></i></a>
                                      <a href="#"><i class="fa fa-linkedin"></i></a>
                                      <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                  </div>
                                  <div class="header__top__right__language">
                                      <img src="assets/img/lenguaje.png" alt="" />
                                      <div>Español</div>
                                      <span class="arrow_carrot-down"></span>
                                      <ul>
                                          <li><a href="#">Español</a></li>
                                          <li><a href="#">Ingles</a></li>
                                      </ul>
                                  </div>
                                  <div class="header__top__right__auth">
                                      <a href="#"><i class="fa fa-user"></i> Login</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3">
                          <div class="header__logo">
                              <a href="#" class="logo">CAFE ONLINE</a>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <nav class="header__menu">
                              <ul>
                              <li class="active"><a href="#">Inicio</a></li>
                              <li><a href={"/FrontendProyecto/src/components/tienda/tienda.js"}>Tienda</a></li>
                              <li><a href="#">Paginas</a>
                                      <ul class="header__menu__dropdown">
                                          <li><a href="#">Shop Details</a></li>
                                          <li><a href="#">Shoping Cart</a></li>
                                          <li><a href="#">Check Out</a></li>
                                          <li><a href="#">Blog Details</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="#">Nosotros</a></li>
                                  <li><a href="#">Contacto</a></li>
                              </ul>
                          </nav>
                      </div>
                      <div class="col-lg-3">
                          <div class="header__cart">
                              <ul>
                                  <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                                  <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                              </ul>
                              <div class="header__cart__price">item: <span>$150.00</span></div>
                          </div>
                      </div>
                  </div>
                  <div class="humberger__open">
                      <i class="fa fa-bars"></i>
                  </div>
              </div>
          </header>
        
          <section class="hero">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3">
                          <div class="hero__categories">
                              <div class="hero__categories__all">
                                  <i class="fa fa-bars"></i>
                                  <span>Departamentos</span>
                              </div>
                              <ul>
                                <h3 >Tipologia</h3>
                                  <li><a href="#">Grano</a></li>
                                  <li><a href="#">Molido</a></li> 
                                  <li><a href="#">Soluble</a></li>
                                  <hr></hr>
                                <h3 >Sabor</h3>
                                  <li><a href="#">Chocolate</a></li>
                                  <li><a href="#">Citrico</a></li>
                                  <li><a href="#">Dulce</a></li>
                                  <li><a href="#">Especias</a></li>
                                  <li><a href="#">Floral</a></li>
                                  <li><a href="#">Frutal</a></li>
                                  <li><a href="#">Frutos Secos</a></li>                                  
                                  {/* <li><a href="#">Fresh Bananas</a></li> */}
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-9">
                          <div class="hero__search">
                              <div class="hero__search__form">
                                  <form action="#">
                                      <div class="hero__search__categories">
                                          Categorias
                                          <span class="arrow_carrot-down"></span>
                                      </div>
                                      <input type="text" placeholder="¿Que buscas?" />
                                      <button type="submit" class="site-btn">BUSCAR</button>
                                  </form>
                              </div>
                              <div class="hero__search__phone">
                                  <div class="hero__search__phone__icon">
                                      <i class="fa fa-phone"></i>
                                  </div>
                                  <div class="hero__search__phone__text">
                                      <h5>1234567890</h5>
                                      <span>soporte 24/7 </span>
                                  </div>
                              </div>
                          </div>
                          <div class="hero__item set-bg" data-setbg="assets/img/hero/Cafeina2.jpg">
                              <div class="hero__text">
                                  <span>Lo Mejor de Colombia</span>
                                  <h2>CAFE<br />100% Organico</h2>
                                  <p>Entregas Gratuitas por Compras al por Mayor</p>
                                  <a href="#" class="primary-btn">COMPRAR AHORA</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

         {/* se debe revisar para su porta Utilidad */}
          {/* <section class="categories">
              <div class="container">
                  <div class="row">
                      <div class="categories__slider owl-carousel">
                          <div class="col-lg-3">
                              <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-1.jpg">
                                  <h5><a href="#">Fresh Fruit</a></h5>
                              </div>
                          </div>
                          <div class="col-lg-3">
                              <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-2.jpg">
                                  <h5><a href="#">Dried Fruit</a></h5>
                              </div>
                          </div>
                          <div class="col-lg-3">
                              <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-3.jpg">
                                  <h5><a href="#">Vegetables</a></h5>
                              </div>
                          </div>
                          <div class="col-lg-3">
                              <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-4.jpg">
                                  <h5><a href="#">drink fruits</a></h5>
                              </div>
                          </div>
                          <div class="col-lg-3">
                              <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-5.jpg">
                                  <h5><a href="#">drink fruits</a></h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
        
          <section class="featured spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="section-title">
                              <h2>Productos Destacados</h2>
                          </div>
                          <div class="featured__controls">
                              <ul>
                                  <li class="active" data-filter="*">Todos</li>
                                  <li data-filter=".Cafe-General">Cafe General</li>
                                  <li data-filter=".Mejor-precio">Mejor precio</li>
                                  <li data-filter=".Clasico">Clasico</li>
                                  <li data-filter=".Premiun">Premiun</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="row featured__filter">
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Cafe-General Mejor-precio">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/vo-1.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Clasico Premiun">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/vodr-2.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Clasico Mejor-precio">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/vocb-3.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Premiun Cafe-General">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/oma-4.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Mejor-precio Clasico">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/ap-5.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Cafe-General Premiun">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/cc-6.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Mejor-precio Clasico">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/cm-7.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 mix Premiun Clasico">
                          <div class="featured__item">
                              <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/cq-8.jpg">
                                  <ul class="featured__item__pic__hover">
                                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                  </ul>
                              </div>
                              <div class="featured__item__text">
                                  <h6><a href="#">Crab Pool Security</a></h6>
                                  <h5>$30.00</h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        
          <div class="banner">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                          <div class="banner__pic">
                              <img src="assets/img/banner/banner-1.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                          <div class="banner__pic">
                              <img src="assets/img/banner/banner-2.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       
          <section class="latest-product spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4 col-md-6">
                          <div class="latest-product__text">
                              <h4>Latest Products</h4>
                              <div class="latest-product__slider owl-carousel">
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <div class="latest-product__text">
                              <h4>Top Rated Products</h4>
                              <div class="latest-product__slider owl-carousel">
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <div class="latest-product__text">
                              <h4>Review Products</h4>
                              <div class="latest-product__slider owl-carousel">
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="from-blog spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="section-title from-blog__title">
                              <h2>Blog</h2>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic">
                                  <img src="assets/img/blog/blog-1.jpg" alt="" />
                              </div>
                              <div class="blog__item__text">
                                  <ul>
                                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                      <li><i class="fa fa-comment-o"></i> 5</li>
                                  </ul>
                                  <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic">
                                  <img src="assets/img/blog/blog-2.jpg" alt="" />
                              </div>
                              <div class="blog__item__text">
                                  <ul>
                                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                      <li><i class="fa fa-comment-o"></i> 5</li>
                                  </ul>
                                  <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic">
                                  <img src="assets/img/blog/blog-3.jpg" alt="" />
                              </div>
                              <div class="blog__item__text">
                                  <ul>
                                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                      <li><i class="fa fa-comment-o"></i> 5</li>
                                  </ul>
                                  <h5><a href="#">Visit the clean farm in the US</a></h5>
                                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
         
          <footer class="footer spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="footer__about">
                              <div class="footer__about__logo">
                                  <a href="#" class="logo">CAFE ONLINE</a>
                              </div>
                              <ul>
                                  <li>Ubicacion: Colombia</li>
                                  <li>Telefono: 1234567890</li>
                                  <li>Email: juanitovaldes@gmail.com</li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                          <div class="footer__widget">
                              <h6>Links de Utilidad</h6>
                              <ul>
                                  <li><a href="#">Sobre Nosotros</a></li>
                                  <li><a href={"/FrontendProyecto/src/components/tienda/tienda.js"}>Sobre nuestra Tienda</a></li>
                                  <li><a href="#">Compra Segura</a></li>
                                  <li><a href="#">Informacion de Entrega</a></li>
                                  <li><a href="#">Política de Privacidad</a></li>
                                  <li><a href="#">Our Sitemap</a></li>
                              </ul>
                              <ul>
                                  <li><a href="#">Quienes Somos</a></li>
                                  <li><a href="#">Nuestros Servicios</a></li>
                                  <li><a href="#">Projectos</a></li>
                                  <li><a href="#">Contacto</a></li>
                                  {/* <li><a href="#">Innovation</a></li>
                                  <li><a href="#">Testimonials</a></li> */}
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                          <div class="footer__widget">
                              <h6>Únete a nuestro boletín ahora</h6>
                              <p>Reciba actualizaciones por correo electrónico sobre nuestra últimas novedade y ofertas especiales..</p>
                              <form action="#">
                                  <input type="text" placeholder="Ingresa tu Correo" />
                                  <button type="submit" class="site-btn">Suscríbete</button>
                              </form>
                              <div class="footer__widget__social">
                                  <a href="#"><i class="fa fa-facebook"></i></a>
                                  <a href="#"><i class="fa fa-instagram"></i></a>
                                  <a href="#"><i class="fa fa-twitter"></i></a>
                                  <a href="#"><i class="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="footer__copyright">
                              <div class="footer__copyright__text"><p>
        Copyright &copy;2021 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Jassa</a>
      </p></div>
                              <div class="footer__copyright__payment"><img src="assets/img/payment-item.png" alt="" /></div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
      </Container>
)
};
}


