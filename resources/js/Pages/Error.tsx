interface Props {
    status: number;
    message: string;
}

const titles: { [key: number]: string } = {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden',
};

const descriptions: { [key: number]: string } = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
};

const Error = ({ status }: Props) => {
  const getTitle = (status = 500): string => {
    return titles[status];
  };

  const getDescription = (status: number) => {
   
    return descriptions[status];
  };

  return (
    <div>
        <h2>Esto es uidsfsdfsdfsd</h2>
      <h1>{getTitle(status)}</h1>
      <div>{getDescription(status)}</div>
    </div>
  );
};

export default Error;

