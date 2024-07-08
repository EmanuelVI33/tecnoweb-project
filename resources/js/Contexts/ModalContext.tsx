import { createContext, useState, useContext, ReactNode, FC } from 'react';

// Definir la interfaz para el contexto del modal
interface ModalContextProps {
  open: boolean;
  toggleModal: () => void;
}

// Crear el contexto para el estado del modal
const ModalContext = createContext<ModalContextProps>({
  open: false,
  toggleModal: () => {},
});

// Definir las propiedades para el proveedor del modal
interface ModalProviderProps {
  children: ReactNode;
}

// Crear el proveedor del contexto del modal
const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <ModalContext.Provider value={{ open, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Definir el tipo de las propiedades para el componente envuelto
type WithModalProps = {};

// Crear el HOC para proporcionar el contexto del modal
const withModal = <P extends WithModalProps>(WrappedComponent: React.ComponentType<P>): FC<P> => {
  return (props: P) => (
    <ModalProvider>
      <WrappedComponent {...props} />
    </ModalProvider>
  );
};

// Crear el hook para acceder al contexto del modal
export const useModal = (): ModalContextProps => {
  return useContext(ModalContext);
};

export default withModal;
