import { Carrusel } from "./Carrusel";
import { WhatsappButton } from "./WhatsappButton";


export function Home() {
    return (

        <div className="homeContainer">
            <Carrusel />
            <h1 >
                Comer Bien y sano es posible
            </h1>
            <div className="cartelTeMostramos">
                Bienvenido!
            </div>
            <div className="cardsContainer">
                <div className="card ">
                    <img src="https://i.blogs.es/80135e/veggie/1366_2000.jpeg" alt="Veggie" />
                    <div className="overlay">
                        <p className="description">Menu Vegetariano</p>
                    </div>
                </div>

                <div className="card ">
                    <img src="https://mercadoventas.es/wp-content/uploads/2024/09/receta-de-pasta.jpg" alt="Pasta" />
                    <div className="overlay">
                        <p className="description">Almuerzos</p>
                    </div>
                </div>

                <div className="card ">
                    <img src="https://www.10wallpaper.com/wallpaper/1920x1200/1608/Cake_dessert_syrup_baking-2016_Food_HD_Wallpaper_1920x1200.jpg" alt="Cake" />
                    <div className="overlay">
                        <p className="description">Postres</p>
                    </div>
                </div>

                <div className="card ">
                    <img src="https://peruvianveef.com/wp-content/uploads/2023/09/receta-club-sandwich-vegano.webp" alt="Sandwich" />
                    <div className="overlay">
                        <p className="description">Club Sandwich</p>
                    </div>
                </div>
            </div>
            <div className="nosotrosContainer">
                <h2>
                    Por que elegirnos?
                </h2>

                <div className="nosotrosGrid">
                    <div className="cardNosotros">
                        <p>
                            🕒 Por practicidad y tiempo
                            Ahorro de tiempo: evitás cocinar todos los días y lavar platos.
                            Ideal para rutinas ocupadas: perfecto para quienes trabajan o estudian muchas horas.
                            Planificación semanal: ya sabés qué vas a comer cada día sin estrés.
                        </p>
                    </div>
                    <div className="cardNosotros">
                        <p>🥗 Por salud y nutrición
                            Control de calorías: ideal si estás cuidando tu peso o siguiendo un plan específico.
                            Variedad de menús: evita la monotonía alimentaria con opciones equilibradas.</p>
                    </div>
                    <div className="cardNosotros">
                        <p>
                            🚚 Por comodidad
                            Entrega a domicilio: directo a tu casa o trabajo.
                            Listas para consumir o calentar: sin complicaciones.
                            Envases prácticos y reciclables.
                        </p>
                    </div>
                    <div className="cardNosotros">
                        <p>
                            🌿 Por estilo de vida
                            Ideal para dietas específicas: viandas vegetarianas, sin TACC, fitness, veganas, keto, etc.
                            Apoya hábitos saludables: facilita comer bien incluso con poco tiempo.
                            Perfecto para deportistas o personas en recuperación.</p>
                    </div>
                </div>
            </div>

            <div className="pedirContainer">
                <div className="pedirOverlay">
                    <h3>¿Listo para pedir?</h3>
                    <div className="pedirInfo">
                        <p>
                            <i className="bi bi-whatsapp"></i>
                            <br />
                            Contactanos por WhatsApp
                        </p>

                        <p> <i className="bi bi-chevron-right netxIcon"></i> </p>

                        <p>
                            <i className="bi bi-box2"></i>
                            <br />
                            Lo preparamos para que llegue excelente
                        </p>

                        <p> <i className="bi bi-chevron-right "></i> </p>

                        <p>
                            <i className="bi bi-car-front-fill"></i>
                            <br />
                            Te lo llevamos a donde sea!

                        </p>

                        <p> <i className="bi bi-chevron-right "></i> </p>

                        <p>
                            <i className="bi bi-hearts"></i>
                            <br />
                            Disfruta!

                        </p>


                    </div>
                </div>
            </div>
            <div>
                <WhatsappButton />
            </div>
        </div>

    )
}

