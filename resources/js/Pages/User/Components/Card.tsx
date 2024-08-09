import { Subscription } from "@/Pages/Admin/Models/subscription";
import { Button } from "@/shadcn/ui/button";
import {
    Card as CardShadcn,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";

export interface ICardProps {
    subscription: Subscription;
    buttonText: string;
    onClick: (id: string) => void;
}

export default function SubsCard({
    subscription: { id, name, description, price },
    buttonText,
    onClick,
}: ICardProps) {
    return (
        <CardShadcn>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center p-2">
                    <CardDescription>{description}</CardDescription>
                    {price && (
                        <p>
                            <span className="font-bold text-xl">{price}</span>$
                        </p>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={() => onClick(id)}>{buttonText}</Button>
            </CardFooter>
        </CardShadcn>
    );
}
