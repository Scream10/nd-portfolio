import Head from 'next/head'
import Navbar from '../components/navbar'
import Grid from '../components/grid'

export default function Home() {
    return (
        <>
            <Head>
                <title>Nicolas Diot | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Portfolio de Nicolas Diot, développeur free-lance à Troyes. Création de site internet et e-commerce."
                />
            </Head>
            <Grid />
            <main>
                <Navbar />
                <div>
                    <div>
                        <img src="/" alt="..."/>
                    </div>
                    <div>
                        <h1>Ensemble développons votre site internet</h1>
                    </div>
                </div>
                <div>
                    <p>Découvrir</p>
                    <span></span>
                </div>
                <div>
                    <div>
                        <h2>Esthétique</h2>
                        <p>En tant que développeur front-end, je porte un intérêt prononcé pour l'esthétique
                        et l'univers graphique de votre site. Chaque site internet est unique, c'est pourquoi
                        vous pourrez choisir entre un template WordPress ou une charte graphique personnalisé
                        à votre image. Pour tous conseils esthétiques, je vous ferais part de mon expérience
                        en UI et UX Design. 
                        </p>
                    </div>
                    <div>
                        <h2>Performant</h2>
                        <p>La performance d'un site est crucial, c'est pourquoi j'optimiserais son fonctionnement
                        avec des plugins comme WP Rocket si vous choisissez un site WordPress. Pour un site 
                        personnalisé, la structure du code respectera les normes W3C pour un meilleur référencement,
                        et chaque image sera compressée sans perte de qualité, pour un chargement plus rapide de
                        votre site. 
                        </p>
                    </div>
                    <div>
                        <h2>Responsive Design</h2>
                        <p>Tous les sites que je développe sont responsive design, c'est à dire qu'ils s'adaptent
                        à tous support : un ordinateur, une tablette ou un téléphone.
                        </p>
                    </div>  
                </div>
                <div>
                    <a href="/services">
                        <h3>Découvrir les services</h3>
                        <span></span>
                    </a>
                </div>
                <div>
                    <h2>Réalisations</h2>
                </div>
                <div>
                    <h3>Un projet ? Une question ? N'hésitez pas à <a href="/contact">me contacter</a></h3>
                </div>
            </main>
        </>
    )
}
