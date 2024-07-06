import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from "@/types";

const owners = [
  {
    name: 'Emanuel Aroldo Vaca Ibañez',
    description: 'Emanuel es el encargado de los desplieges a producción y del desarrollo web.',
    image: 'emanuel.jpeg',
  },
  {
    name: 'José Luis Padilla Yapura ',
    description: 'Jose es una ingeniera de software apasionada por la inteligencia artificial y el aprendizaje automático.',
    image: 'jose.jpeg',
  },
];

const products = [
  'Soluciones de Software Personalizadas',
  'Desarrollo de Aplicaciones Móviles',
  'Consultoría en Inteligencia Artificial',
  'Diseño UX/UI',
  'Mantenimiento y Soporte Técnico',
];

export default function HomePage({ auth } : PageProps) {
  return (
    <AuthenticatedLayout
        user={auth.user}
    >
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h1>
            
            <section className="mb-12">
                <p className="text-lg leading-relaxed text-center">
                    En la <strong>Empresa</strong>, nos dedicamos a ofrecer soluciones tecnológicas innovadoras que ayudan a nuestros clientes a alcanzar sus objetivos empresariales. Nuestro equipo está compuesto por expertos en diversas áreas, todos comprometidos con la excelencia y la satisfacción del cliente.
                </p>
            </section>
            
            <section className="my-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Fundadores</h2>
                <div className="flex flex-wrap justify-center">
                    {owners.map((owner, index) => (
                    <div key={index} className="max-w-xs m-4 ">
                        <img src={owner.image} alt={owner.name} className="rounded-full mb-4 mx-auto h-72 w-60" />
                        <h3 className="text-2xl font-bold text-center mb-2">{owner.name}</h3>
                        <p className="text-center">{owner.description}</p>
                    </div>
                    ))}
                </div>
            </section>
            
            <section>
            <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Productos</h2>
            <ul className="list-disc list-inside mx-auto max-w-md">
                {products.map((product, index) => (
                <li key={index} className="text-lg leading-relaxed">{product}</li>
                ))}
            </ul>
            </section>
        </div>
    </AuthenticatedLayout>
  );
}