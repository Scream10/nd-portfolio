import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import VanillaTilt from 'vanilla-tilt'

export default function Home() {



    return (
        <>
            <Head>
                <title>Nicolas Diot | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Portfolio de
                     Nicolas Diot, développeur free-lance à Troyes. Création de site internet et e-commerce."
                />
                <script type="text/javascript" src="vanilla-tilt.js"></script>
            </Head>
            <Navbar />
            <div className="container-content">
                <main>
                    <header className="header">
                        <div className="header__img">
                            <img src="images/mac-setup.jpg" alt="mac setup banner"/>
                        </div>
                        <div className="header__title">
                            <h1>Ensemble développons votre site internet</h1>
                        </div>
                    </header>
                    <div className="container">
                        <div id="discover">
                            <p>Découvrir</p>
                            <span className="arrow"></span>
                        </div>
                        <div className="container container--grid">
                            <article className="service-description">
                                <h2>Esthétique</h2>
                                <p>En tant que développeur front-end, je porte un intérêt prononcé pour l'esthétique
                                et l'univers graphique de votre site. Chaque site internet est unique, c'est pourquoi
                                vous pourrez choisir entre un template WordPress ou une charte graphique personnalisé
                                à votre image. Pour tous conseils esthétiques, je vous ferais part de mon expérience
                                en UI et UX Design. 
                                </p>
                            </article>
                            <article className="service-description service-description--middle">
                                <h2>Performant</h2>
                                <p>La performance d'un site est crucial, c'est pourquoi j'optimiserais son fonctionnement
                                avec des plugins comme WP Rocket si vous choisissez un site WordPress. Pour un site 
                                personnalisé, la structure du code respectera les normes W3C pour un meilleur référencement,
                                et chaque image sera compressée sans perte de qualité, pour un chargement plus rapide de
                                votre site. 
                                </p>
                            </article>
                            <article className="service-description">
                                <h2>Responsive Design</h2>
                                <p>Tous les sites que je développe sont responsive design, c'est à dire qu'ils s'adaptent
                                à tous support : un ordinateur, une tablette ou un téléphone.
                                </p>
                            </article>  
                        </div>
                        <section id="service-banner">
                            <a href="/services">
                                <h3>Découvrir les services</h3>
                                <span className="arrow arrow--white"></span>
                            </a>
                        </section>
                        <section className="container container--grid">
                            <div id="realisation">
                                <h2>Réalisations</h2>
                            </div>
                            <div className="card" data-tilt data-tilt-glare data-tilt-max-glare="0.8" data-tilt-scale="1.1">
                                <div className="card__img">
                                    <img src="images/ombelinedurey.jpg" alt="Ombeline Durey"/>
                                </div>
                                <div className="card__info">
                                    <div className="card__info-title">
                                        <h4>Ombeline Durey</h4>
                                    </div>
                                    <div className="card__info-description">
                                        <p><small>marketing digital</small></p>
                                    </div>
                                    <div className="card__info-discover">
                                        <p>voir le projet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card--right" data-tilt data-tilt-glare data-tilt-max-glare="0.8" data-tilt-scale="1.1">
                                <div className="card__img">
                                    <img src="images/ac-studio-1.png" alt="Semi Office"/>
                                </div>
                                <div className="card__info">
                                    <div className="card__info-title">
                                        <h4>Semi Office</h4>
                                    </div>
                                    <div className="card__info-description">
                                        <p><small>Galerie de design</small></p>
                                    </div>
                                    <div className="card__info-discover">
                                        <p>voir le projet</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="contact-banner">
                            <h3>Un projet ? Une question ? N'hésitez pas à <a href="/contact">me contacter</a></h3>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
