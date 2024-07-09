import { Icon } from '@iconify/react/dist/iconify.js';
import homeIcon from '@iconify/icons-mdi/home';
import informationIcon from '@iconify/icons-mdi/information';
import contactMailIcon from '@iconify/icons-mdi/contact-mail';
import closeIcon from '@iconify/icons-mdi/close';
import { Button } from '@/shadcn/ui/button';
import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import arrowDown from '@iconify/icons-mdi/chevron-down';
import arrowUp from '@iconify/icons-mdi/chevron-up';
import { listIcons } from '@iconify/react';


// List all loaded Material Design Icons
console.log(listIcons());

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { props } = usePage<PageProps>();
  const { auth: { user } } = props;

  const [menuOpen, setMenuOpen] = useState<{
    [key: string]: boolean;
  }>({
    home: false,
    about: false,
    contact: false,
  });

  const toggleMenu = (menu: string) => {
    setMenuOpen(prevState => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  const menuOptions = [
    {
      id: 'news',
      label: 'Gestionar Noticias',
      icon: informationIcon,
      subItems: [
        {
          label: 'Lista de Noticias',
          url: '#',
        },
        {
          label: 'Crear Noticia',
          url: '#',
        },
      ],
    },
    {
      id: 'subscription',
      label: 'Gestionar Suscripciones',
      icon: informationIcon,
      subItems: [
        {
          label: 'Lista de Suscripciones',
          url: '#',
        },
        {
          label: 'Crear Suscripción',
          url: '#',
        },
      ],
    },
    {
      id: 'user',
      label: 'Gestionar Usuarios',
      icon: informationIcon,
      subItems: [
        {
          label: 'Lista de Usuarios',
          url: '#',
        },
        {
          label: 'Crear Usuario',
          url: '#',
        },
      ],
    },
    {
      id: 'report',
      label: 'Reportes y estadísticas',
      icon: informationIcon,
      url: '#',
    },
  ];
 
  return (
    <div className={`fixed top-0 left-0 pt-20 h-full w-9/12 md:w-1/3 lg:w-1/6 bg-gray-200 dark:bg-gray-700 shadow-md transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
      <div className="w-full py-2 px-1 flex flex-col items-center justify-between">
        <div className='w-full'>
          <div className="flex justify-between gap-5 items-center w-full mb-2 p-2">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">Canal 11</h1>
            <button onClick={toggleSidebar}>
              <Icon icon={closeIcon} width="24" height="24" className="text-gray-700 dark:text-gray-100" />
            </button>
          </div>
          <ul className="w-full px-4">
            {menuOptions.map((option) => (
              <li className="mb-4" key={option.id}>
                {option.subItems ? (
                  <button
                    className="flex items-center justify-between w-full text-gray-900 dark:text-gray-100 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
                    onClick={() => toggleMenu(option.id)}
                  >
                    <div className="flex items-center">
                      <Icon icon={option.icon} width="24" height="24" className="mr-2" />
                      {option.label}
                    </div>
                    <Icon icon={menuOpen[option.id] ? arrowUp : arrowDown} width="24" height="24" />
                  </button>
                ) : (
                  <a href={option.url} className="flex items-center justify-between w-full text-gray-900 dark:text-gray-100 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200">
                    <div className="flex items-center">
                      <Icon icon={option.icon} width="24" height="24" className="mr-2" />
                      {option.label}
                    </div>
                  </a>
                )}
                {menuOpen[option.id] && option.subItems && (
                  <ul className={`pl-6 transition-max-height duration-300 ease-in-out overflow-hidden ${menuOpen[option.id] ? 'max-h-screen' : 'max-h-0'}`}>
                    {option.subItems.map((subItem, index) => (
                      <li className="mb-2" key={index}>
                        <a href={subItem.url} className="flex items-center text-gray-900 dark:text-gray-100 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2 mb-5">
          <div>
            <p>
              Usuario: <span className='font-bold'>{user.name}</span> 
            </p>
          </div>
          <Button>Cerrar sesión</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
