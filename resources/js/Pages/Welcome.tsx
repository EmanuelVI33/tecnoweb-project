import { PageProps } from "@/types";
import WelcomeNavbar from "@/Components/Ui/WelcomeNavbar";
import { Button } from "@/shadcn/ui/button";
import Imagen from "@/Components/Image";

export default function Welcome({ auth }: PageProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <WelcomeNavbar />
            <main className="flex-1 mt-5 flex flex-col justify-between ">
                <article className="h-full">
                    <section className="w-1/2 text-center m-auto mb-2">
                        <p className="text-2xl">
                            Bienvenido a Canal 11 TVU, donde encontrarás la
                            mejor programación en noticias, entretenimiento, y
                            eventos en vivo. ¡Sintoniza ahora y no te pierdas
                            nada!
                        </p>

                        <div className="">
                            <Button className="my-2">
                                {/* <IonIcon name="tv-outline"></IonIcon> */}

                                <span>Ver Ahora</span>
                            </Button>

                            <div className="flex justify-center gap-5 my-2">
                                <p className="btn-title">Síguenos en:</p>

                                <a href="#" className="btn-link">
                                    {/* <IonIcon name="logo-youtube"></IonIcon> */}

                                    <span>YouTube</span>
                                </a>

                                <a href="#" className="btn-link">
                                    {/* <IonIcon name="logo-facebook"></IonIcon> */}

                                    <span>Facebook</span>
                                </a>

                                <a href="#" className="btn-link">
                                    {/* <IonIcon name="logo-instagram"></IonIcon> */}

                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="p-5 border-b border-gray-4 mt-10 h-full">
                        <ul className="">
                            <li className="">
                                <a
                                    href="#"
                                    className="w-full flex justify-evenly"
                                >
                                    <figure className="card-banner">
                                        <Imagen
                                            src="assets/images/podcast-1.png"
                                            alt="La Universidad Autónoma Gabriel René Moreno ha inaugurado una nueva biblioteca con recursos modernos para estudiantes y docentes."
                                            className="block h-56 w-full object-cover"
                                        />
                                        {/* <img
                                            src="/assets/images/podcast-1.png"
                                            alt="La Universidad Autónoma Gabriel René Moreno ha inaugurado una nueva biblioteca con recursos modernos para estudiantes y docentes."
                                            className="block h-56 w-full object-cover"
                                        /> */}
                                        <div className="card-banner-icon">
                                            {/* <IonIcon name="play"></IonIcon> */}
                                        </div>
                                    </figure>

                                    <div className="text-center my-auto">
                                        <div className="card-meta">
                                            <time dateTime="2024-07-01">
                                                Jul 1, 2024
                                            </time>

                                            <p className="pod-epi">
                                                Nueva Biblioteca Inaugurada en
                                                la UAGRM
                                            </p>
                                        </div>

                                        <h3 className="h3 card-title">
                                            La Universidad Autónoma Gabriel René
                                            Moreno ha inaugurado una nueva
                                            biblioteca con recursos modernos
                                            para estudiantes y docentes.
                                        </h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </section>
                </article>
            </main>

            <footer className="h-24">
                <div className="">
                    <div className="text-center">
                        <p className="footer-copyright">
                            &copy; 2024 Canal 11 TVU. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
