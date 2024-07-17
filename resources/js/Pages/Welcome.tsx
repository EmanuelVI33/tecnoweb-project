import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome">
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <script src="./assets/js/script.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
          {auth.user ? (
            <Link
              href={route('projects.index')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log in
              </Link>

              <Link
                href={route('register')}
                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <header className="active" data-header>
          <div className="container">

            <div className="overlay" data-overlay></div>

            <a href="#" className="logo">
              <img src="./assets/images/logo.png" alt="Canal 11 TVU logo" width="50" height="50"></img>
            </a>

            <button className="nav-toggle-btn" data-nav-toggle-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav className="navbar" data-navbar>
              <ul className="navbar-list">

                <li className="navbar-item">
                  <a href="#hero" className="navbar-link">Inicio</a>
                </li>

                <li className="navbar-item">
                  <a href="#programacion" className="navbar-link">Programación</a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link">Presentadores</a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link">Noticias</a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link">Contacto</a>
                </li>

              </ul>

              <div className="navbar-actions">

                <button className="navbar-btn">
                  <ion-icon name="search-outline"></ion-icon>
                </button>

                <button className="navbar-btn">
                  <ion-icon name="log-in-outline"></ion-icon>
                </button>

                <button className="navbar-btn">
                  <ion-icon name="cart-outline"></ion-icon>
                </button>

                <button className="btn">
                  <ion-icon name="logo-paypal"></ion-icon>

                  <span>Suscripción</span>
                </button>

              </div>
            </nav>

          </div>
        </header>



        <main>
          <article className="container">

            <section className="hero" id="hero">

              <div className="hero-content">

                <img src="./assets/images/hero-title.png" alt="Canal 11 TVU" className="hero-title">
                </img>
                <p className="hero-text">
                  Bienvenido a Canal 11 TVU, donde encontrarás la mejor programación en noticias, entretenimiento, y eventos en
                  vivo. ¡Sintoniza ahora y no te pierdas nada!
                </p>

                <div className="hero-btn-group">

                  <button className="btn btn-primary">
                    <i name="tv-outline"></i>

                    <span>Ver Ahora</span>
                  </button>

                  <div className="btn-link-wrapper">

                    <p className="btn-title">Síguenos en:</p>

                    <a href="#" className="btn-link">
                      <ion-icon name="logo-youtube"></ion-icon>

                      <span>YouTube</span>
                    </a>

                    <a href="#" className="btn-link">
                      <ion-icon name="logo-facebook"></ion-icon>

                      <span>Facebook</span>
                    </a>

                    <a href="#" className="btn-link">
                      <ion-icon name="logo-instagram"></ion-icon>

                      <span>Instagram</span>
                    </a>

                  </div>

                </div>

              </div>

              <div className="hero-banner"></div>

            </section>




            <section className="podcast" id="podcast">
              <ul className="podcast-list">

                <li>
                  <a href="#" className="podcast-card">

                    <figure className="card-banner">
                      <img src="./assets/images/podcast-1.png" alt="La Universidad Autónoma Gabriel René Moreno ha inaugurado una nueva biblioteca con recursos modernos para estudiantes y docentes.">

                        <div className="card-banner-icon">
                          <ion-icon name="play"></ion-icon>
                        </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2022-02-15">Jul 1, 2024</time>

                        <p className="pod-epi">Nueva Biblioteca Inaugurada en la UAGRM</p>
                      </div>

                      <h3 className="h3 card-title">La Universidad Autónoma Gabriel René Moreno ha inaugurado una nueva biblioteca con recursos modernos para estudiantes y docentes.</h3>
                    </div>

                  </a>
                </li>

                <li>
                  <a href="#" className="podcast-card">

                    <figure className="card-banner">
                      <img src="./assets/images/podcast-2.png" alt="La UAGRM abre convocatoria para becas de investigación en diversas áreas científicas y tecnológicas. ¡Aplica ahora!">

                        <div className="card-banner-icon">
                          <ion-icon name="play"></ion-icon>
                        </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2022-02-15">Jun 20, 2024</time>

                        <p className="pod-epi">Convocatoria para Becas de Investigación 2024</p>
                      </div>

                      <h3 className="h3 card-title">La UAGRM abre convocatoria para becas de investigación en diversas áreas científicas y tecnológicas. ¡Aplica ahora!</h3>
                    </div>

                  </a>
                </li>

                <li>
                  <a href="#" className="podcast-card">

                    <figure className="card-banner">
                      <img src="./assets/images/podcast-3.png" alt="La UAGRM celebra la Semana de la Ciencia y Tecnología con exposiciones, conferencias y talleres abiertos al público.">
                      </img>
                      <div className="card-banner-icon">
                        <ion-icon name="play"></ion-icon>
                      </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2022-02-15">Abr 10, 2024</time>

                        <p className="pod-epi">Semana de la Ciencia y Tecnología 2024</p>
                      </div>

                      <h3 className="h3 card-title">La UAGRM celebra la Semana de la Ciencia y Tecnología con exposiciones, conferencias y talleres abiertos al público.</h3>
                    </div>

                  </a>
                </li>

                <li>
                  <a href="#" className="podcast-card">

                    <figure className="card-banner">
                      <img src="./assets/images/podcast-4.png" alt="La UAGRM firma un convenio de colaboración con una prestigiosa universidad de España para intercambio académico y proyectos conjuntos.">

                        <div className="card-banner-icon">
                          <ion-icon name="play"></ion-icon>
                        </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2022-02-15">Abr 10, 2024</time>

                        <p className="pod-epi">Convenio Internacional con Universidad de España</p>
                      </div>

                      <h3 className="h3 card-title">La UAGRM firma un convenio de colaboración con una prestigiosa universidad de España para intercambio académico y proyectos conjuntos.</h3>
                    </div>

                  </a>
                </li>


              </ul>
            </section>




            <section className="newsletter">
              <div className="newsletter-card">

                <div className="card-content">
                  <h3 className="h3 card-title" style="color: #fff;">¡Suscríbete a Nuestro Boletín Informativo!</h3>

                  <p className="card-text" style="color: #fff;">
                    Mantente al día con las últimas noticias, programas y eventos de Canal 11 Televisión. ¡Es gratis!
                  </p>
                </div>

                <form action="" className="card-form" data-form>
                  <input type="email" name="email_address" placeholder="Tu Correo Electrónico" required className="input-field"
                    data-input>
                  </input>
                  <button type="submit" className="btn btn-primary" style="color: #fff;" disabled data-submit>Suscribirse</button>
                </form>

              </div>
            </section>

          </article>
        </main>



        <footer>
          <div className="footer-top">
            <div className="container">

              <div className="footer-brand">
                <a href="#" className="logo">
                  <img src="./assets/images/logo.png" alt="Canal 11 TVU logo" width="50" height="50">
                  </img>
                </a>

                <p className="footer-text">
                  Canal 11 Televisión te ofrece la mejor programación y noticias de la Universidad Gabriel René Moreno en Santa
                  Cruz, Bolivia.
                </p>
              </div>

              <ul className="footer-list">
                <li>
                  <p className="footer-link-title">Inicia una conversación</p>
                </li>

                <li>
                  <a href="mailto:contacto@canal11tvu.com" className="footer-link">contacto@canal11tvu.com</a>
                </li>

                <li>
                  <a href="tel:+59112345678" className="footer-link">+591 123 456 78</a>
                </li>

                <li>
                  <a href="tel:+59198765432" className="footer-link">+591 987 654 32</a>
                </li>
              </ul>

              <div className="social-list-box">
                <p className="social-title">Síguenos en:</p>

                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p className="copyright">
                &copy; 2024 <a href="#">Canal 11 TVU</a>. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>


        <a href="#top" className="go-top" data-go-top>
          <ion-icon name="chevron-up-outline"></ion-icon>
        </a>




      </div>

      <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
    </>
  );
}
