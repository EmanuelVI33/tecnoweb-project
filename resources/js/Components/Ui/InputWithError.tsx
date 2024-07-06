import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";

interface InputWithErrorProps {
    id: string;
    label: string;
    value: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null; // Error puede ser una cadena o nulo
}

function InputWithError({ id, label, value, type = "text", onChange, error } : InputWithErrorProps) {
    return (
      <div className="mb-2">
        <Label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</Label>
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          className={`mt-1 rounded-md ${error ? 'border-red-500' : ''}`}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    )
}

export default InputWithError
