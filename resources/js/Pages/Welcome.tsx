import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { IonIcon } from '@ionic/react'; // Asegúrate de importar IonIcon

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome">
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <script src="/assets/js/script.js"></script>
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
                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
              <img src="/assets/images/logo.png" alt="Canal 11 TVU logo" width="50" height="50" />
            </a>

            <button className="nav-toggle-btn" data-nav-toggle-btn>
              <IonIcon name="menu-outline"></IonIcon>
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
                  <IonIcon name="search-outline"></IonIcon>
                </button>

                <button className="navbar-btn">
                  <IonIcon name="log-in-outline"></IonIcon>
                </button>

                <button className="navbar-btn">
                  <IonIcon name="cart-outline"></IonIcon>
                </button>

                <button className="btn">
                  <IonIcon name="logo-paypal"></IonIcon>

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

                <img src="/assets/images/hero-title.png" alt="Canal 11 TVU" className="hero-title" />
                <p className="hero-text">
                  Bienvenido a Canal 11 TVU, donde encontrarás la mejor programación en noticias, entretenimiento, y eventos en vivo. ¡Sintoniza ahora y no te pierdas nada!
                </p>

                <div className="hero-btn-group">

                  <button className="btn btn-primary">
                    <IonIcon name="tv-outline"></IonIcon>

                    <span>Ver Ahora</span>
                  </button>

                  <div className="btn-link-wrapper">

                    <p className="btn-title">Síguenos en:</p>

                    <a href="#" className="btn-link">
                      <IonIcon name="logo-youtube"></IonIcon>

                      <span>YouTube</span>
                    </a>

                    <a href="#" className="btn-link">
                      <IonIcon name="logo-facebook"></IonIcon>

                      <span>Facebook</span>
                    </a>

                    <a href="#" className="btn-link">
                      <IonIcon name="logo-instagram"></IonIcon>

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
                      <img src="/assets/images/podcast-1.png" alt="La Universidad Autónoma Gabriel René Moreno ha inaugurado una nueva biblioteca con recursos modernos para estudiantes y docentes." />
                      <div className="card-banner-icon">
                        <IonIcon name="play"></IonIcon>
                      </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2024-07-01">Jul 1, 2024</time>

                        <p className="pod-epi">Nueva Biblioteca Inaugurada en la UAGRM</p>
                      </div>

                      <h3 className="h3 card-title">La Universidad Autónoma Gabriel René Moreno ha inaugurado una nueva biblioteca con recursos modernos para estudiantes y docentes.</h3>
                    </div>

                  </a>
                </li>

                <li>
                  <a href="#" className="podcast-card">

                    <figure className="card-banner">
                      <img src="/assets/images/podcast-2.png" alt="La UAGRM abre convocatoria para becas de investigación en diversas áreas científicas y tecnológicas. ¡Aplica ahora!" />
                      <div className="card-banner-icon">
                        <IonIcon name="play"></IonIcon>
                      </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2024-06-20">Jun 20, 2024</time>

                        <p className="pod-epi">Convocatoria para Becas de Investigación 2024</p>
                      </div>

                      <h3 className="h3 card-title">La UAGRM abre convocatoria para becas de investigación en diversas áreas científicas y tecnológicas. ¡Aplica ahora!</h3>
                    </div>

                  </a>
                </li>

                <li>
                  <a href="#" className="podcast-card">

                    <figure className="card-banner">
                      <img src="/assets/images/podcast-3.png" alt="La UAGRM celebra la Semana de la Ciencia y Tecnología con exposiciones, conferencias y talleres abiertos al público." />
                      <div className="card-banner-icon">
                        <IonIcon name="play"></IonIcon>
                      </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime="2024-04-10">Abr 10, 2024</time>

                        <p className="pod-epi">Semana de la Ciencia y Tecnología 2024</p>
                      </div>

                      <h3 className="h3 card-title">La UAGRM celebra la Semana de la Ciencia y Tecnología con exposiciones, conferencias y talleres abiertos al público.</h3>
                    </div>

                  </a>
                </li>

              </ul>
            </section>
          </article>
        </main>

        <footer className="footer">
          <div className="container">

            <div className="footer-top">

              <div className="footer-brand">

                <a href="#" className="logo">
                  <img src="/assets/images/logo.png" alt="Canal 11 TVU logo" width="50" height="50" />
                </a>

                <p className="footer-text">
                  Canal 11 TVU, brindándote la mejor programación en noticias, entretenimiento, y eventos en vivo.
                </p>

              </div>

              <div className="footer-list">

                <ul>
                  <li>
                    <h3 className="h3 list-title">Programación</h3>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Noticias</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Deportes</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Entretenimiento</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Eventos en Vivo</a>
                  </li>
                </ul>

              </div>

              <div className="footer-list">

                <ul>
                  <li>
                    <h3 className="h3 list-title">Acerca de Nosotros</h3>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Quiénes Somos</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Nuestra Misión</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Contáctanos</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Trabaja con Nosotros</a>
                  </li>
                </ul>

              </div>

              <div className="footer-list">

                <ul>
                  <li>
                    <h3 className="h3 list-title">Síguenos</h3>
                  </li>

                  <li>
                    <a href="#" className="footer-link">YouTube</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Facebook</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Instagram</a>
                  </li>

                  <li>
                    <a href="#" className="footer-link">Twitter</a>
                  </li>
                </ul>

              </div>

            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                &copy; 2024 Canal 11 TVU. Todos los derechos reservados.
              </p>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
}
