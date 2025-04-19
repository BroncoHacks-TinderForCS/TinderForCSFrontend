import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputWithLabelProps {
    type: string;
    id: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ type, id, placeholder, value, onChange }) => {
    const labelText = id.charAt(0).toUpperCase() + id.slice(1);

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={id}>{labelText}</Label>
            <Input
                type={type}
                id={id}
                placeholder={placeholder || labelText}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
