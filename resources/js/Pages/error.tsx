
interface Props {
    status: string;
    message: string;
}

const ErrorBoundary = ({ message, status }: Props) => {
    return (
        <div>
            <h1>Error { status }</h1>
        
            <p>{ message }</p>
        </div>
    );
};

export default ErrorBoundary;
