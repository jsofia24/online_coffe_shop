import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="MainDiv" bg='primary'>
            
        <div class="humberger__menu__overlay"></div>
        <div class="humberger__menu__wrapper">
            <div class="humberger__menu__logo">
                <Link to="/" class="logo">CAFE ONLINE</Link>
            </div>
            <div class="humberger__menu__cart">
                <ul>
                    <li><Link to="/"><i class="fa fa-heart"></i> <span>1</span></Link></li>
                    <li><Link to="/"><i class="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                </ul>
                <div class="header__cart__price">item: <span>$150.00</span></div>
            </div>
            <div class="humberger__menu__widget">
                <div class="header__top__right__language">
                    <img src="assets/img/lenguaje.png" alt="" />
                    <div>Español</div>
                    <span class="arrow_carrot-down"></span>
                    <ul>
                        <li><Link to="/">Español</Link></li>
                        <li><Link to="/">Ingles</Link></li>
                    </ul>
                </div>
                <div class="header__top__right__auth">
                    <Link to="/login"><i class="fa fa-user"></i> Login</Link>
                </div>
            </div>
            <nav class="humberger__menu__nav mobile-menu">
                {/* <ul>
                    <li class="active"><Link to="/">Inicio</Link></li>
                    <li><Link to="/">Tienda</Link></li>
                    <li><Link to="/">Paginas</Link>
                        <ul class="header__menu__dropdown">
                            <li><Link to="/">Shop Details</Link></li>
                            <li><Link to="/">Shoping Cart</Link></li>
                            <li><Link to="/">Check Out</Link></li>
                            <li><Link to="/">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Nosotros</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul> */}
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div class="header__top__right__social">
                <Link to="/"><i class="fa fa-facebook"></i></Link>
                <Link to="/"><i class="fa fa-twitter"></i></Link>
                <Link to="/"><i class="fa fa-linkedin"></i></Link>
                <Link to="/"><i class="fa fa-pinterest-p"></i></Link>
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
                                    <Link to="/"><i class="fa fa-facebook"></i></Link>
                                    <Link to="/"><i class="fa fa-twitter"></i></Link>
                                    <Link to="/"><i class="fa fa-linkedin"></i></Link>
                                    <Link to="/"><i class="fa fa-pinterest-p"></i></Link>
                                </div>
                                <div class="header__top__right__language">
                                    <img src="assets/img/lenguaje.png" alt="" />
                                    <div>Español</div>
                                    <span class="arrow_carrot-down"></span>
                                    <ul>
                                        <li><Link to="/">Español</Link></li>
                                        <li><Link to="/">Ingles</Link></li>
                                    </ul>
                                </div>
                                <div class="header__top__right__auth">
                                    <Link to="/login"><i class="fa fa-user"></i> Login</Link>
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
                            <Link to="/" class="logo">CAFE ONLINE</Link>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <nav class="header__menu">
                            {/* <ul>
                            <li class="active"><Link to="/">Inicio</Link></li>
                            <li><Link to="/tienda">Tienda</Link></li>
                            <li><Link to="/">Paginas</Link>
                                    <ul class="header__menu__dropdown">
                                        <li><Link to="/">Shop Details</Link></li>
                                        <li><Link to="/">Shoping Cart</Link></li>
                                        <li><Link to="/">Check Out</Link></li>
                                        <li><Link to="/">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Nosotros</Link></li>
                                <li><Link to="/">Contacto</Link></li>
                            </ul> */}
                        </nav>
                    </div>
                    <div class="col-lg-3">
                        <div class="header__cart">
                            <ul>
                                <li><Link to="/"><i class="fa fa-heart"></i> <span>1</span></Link></li>
                                <li><Link to="/"><i class="fa fa-shopping-bag"></i> <span>3</span></Link></li>
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
                                <li><Link to="/">Grano</Link></li>
                                <li><Link to="/">Molido</Link></li> 
                                <li><Link to="/">Soluble</Link></li>
                                <hr></hr>
                                <h3 >Sabor</h3>
                                <li><Link to="/">Chocolate</Link></li>
                                <li><Link to="/">Citrico</Link></li>
                                <li><Link to="/">Dulce</Link></li>
                                <li><Link to="/">Especias</Link></li>
                                <li><Link to="/">Floral</Link></li>
                                <li><Link to="/">Frutal</Link></li>
                                <li><Link to="/">Frutos Secos</Link></li>                                  
                                {/* <li><Link to="/">Fresh Bananas</Link></li> */}
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
                                <Link to="/" class="primary-btn">COMPRAR AHORA</Link>
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
                                <h5><Link to="/">Fresh Fruit</Link></h5>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-2.jpg">
                                <h5><Link to="/">Dried Fruit</Link></h5>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-3.jpg">
                                <h5><Link to="/">Vegetables</Link></h5>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-4.jpg">
                                <h5><Link to="/">drink fruits</Link></h5>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-5.jpg">
                                <h5><Link to="/">drink fruits</Link></h5>
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
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Clasico Premiun">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/vodr-2.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Clasico Mejor-precio">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/vocb-3.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Premiun Cafe-General">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/oma-4.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Mejor-precio Clasico">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/ap-5.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Cafe-General Premiun">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/cc-6.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Mejor-precio Clasico">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/cm-7.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix Premiun Clasico">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg" data-setbg="assets/img/imcafe/cq-8.jpg">
                                <ul class="featured__item__pic__hover">
                                    <li><Link to="/"><i class="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i class="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div class="featured__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
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
                    {/* <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="banner__pic">
                            <img src="assets/img/banner/banner-1.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="banner__pic">
                            <img src="assets/img/banner/banner-2.jpg" alt="" />
                        </div>
                    </div> */}
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
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cb-9.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/ccn-10.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/jv-11.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                </div>
                                <div class="latest-prdouct__slider__item">
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/jvm-12.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/vo-1.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/vodr-2.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <div class="latest-product__slider owl-carousel">
                                <div class="latest-prdouct__slider__item">
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/vocb-3.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/oma-4.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/ap-5.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                </div>
                                <div class="latest-prdouct__slider__item">
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cc-6.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cm-7.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cq-8.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Review Products</h4>
                            <div class="latest-product__slider owl-carousel">
                                <div class="latest-prdouct__slider__item">
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/ap-5.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cc-6.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cm-7.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                </div>
                                <div class="latest-prdouct__slider__item">
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cq-8.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/cb-9.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
                                    <Link to="/" class="latest-product__item">
                                        <div class="latest-product__item__pic" background-position="center center">
                                            <img src="assets/img/imcafe/ccn-10.jpg" alt="" />
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </Link>
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
                                <img src="assets/img/imcafe/ccn-10.jpg" alt="" />
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i> Mayo 4,2019</li>
                                    <li><i class="fa fa-comment-o"></i> 6</li>
                                </ul>
                                <h5><Link to="/">Un gusto para todos</Link></h5>
                                <p>Un cafe para todo momento que te atrae con sus buenos recuerdos. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img src="assets/img/imcafe/cm-7.jpg" alt="" />
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i> Febrero 21,2020</li>
                                    <li><i class="fa fa-comment-o"></i> 1</li>
                                </ul>
                                <h5><Link to="/">Gran cosecha antes de los 6 meses</Link></h5>
                                <p>La amargura de este cafe es impresionante, solo para conocedores. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img src="assets/img/imcafe/cc-6.jpg" alt="" />
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i> Octubre 15,2021</li>
                                    <li><i class="fa fa-comment-o"></i> 3</li>
                                </ul>
                                <h5><Link to="/">¿Tostado o al natural?</Link></h5>
                                <p>Nadie se imagina que su nueva presentacion tiene mas de 1 solo secreto. </p>
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
                                <Link to="/" class="logo">CAFE ONLINE</Link>
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
                                <li><Link to="/">Sobre Nosotros</Link></li>
                                <li><Link to="/">Sobre nuestra Tienda</Link></li>
                                <li><Link to="/">Compra Segura</Link></li>
                                <li><Link to="/">Informacion de Entrega</Link></li>
                                <li><Link to="/">Política de Privacidad</Link></li>
                                <li><Link to="/">Our Sitemap</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/">Quienes Somos</Link></li>
                                <li><Link to="/">Nuestros Servicios</Link></li>
                                <li><Link to="/">Projectos</Link></li>
                                <li><Link to="/">Contacto</Link></li>
                                {/* <li><Link to="/">Innovation</Link></li>
                                <li><Link to="/">Testimonials</Link></li> */}
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
                                <Link to="/"><i class="fa fa-facebook"></i></Link>
                                <Link to="/"><i class="fa fa-instagram"></i></Link>
                                <Link to="/"><i class="fa fa-twitter"></i></Link>
                                <Link to="/"><i class="fa fa-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer__copyright">
                            <div class="footer__copyright__text"><p>
        Copyright &copy;2021 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <Link to="/" target="_blank">Jassa</Link>
    </p></div>
                            <div class="footer__copyright__payment"><img src="assets/img/payment-item.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};
  
export default Home;