import { z } from "zod";
import { useForm as useReactForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";
import { useSelectedProjectStore } from "@/store/selected-project";
import { IconNeutral, IconAngry, IconHappy, IconSurprise } from "@/Components/icons/icon";
import { Expression } from "@/Pages/Edition/enum/expression";
import { ElementPresenterCreator } from "@/Pages/Edition/Class/factory-element/element-presenter-creator";

const formSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
    expression: z.enum([
        Expression.HAPPY,
        Expression.NEUTRAL,
        Expression.SURPRISE,
        Expression.SERIOUS,
    ]),
});

const expressions = [
    {
        label: 'Neutral',
        value: Expression.NEUTRAL,
        icon: <IconNeutral />
    },
    {
        label: 'Felíz',
        value: Expression.HAPPY,
        icon: <IconHappy />
    },
    {
        label: 'Sorprendido',
        value: Expression.SURPRISE,
        icon: <IconSurprise />
    },
    {
        label: 'Serio',
        value: Expression.SERIOUS,
        icon: <IconAngry />
    },
]

function TabPresenter() {
    const form = useReactForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    }); 
    const handleAddElement = useSelectedProjectStore(state => state.addElement);

    const submit = (values: z.infer<typeof formSchema>) => {
        const presenterCreate = new ElementPresenterCreator();   
        const presenter = presenterCreate.createElement({
            title: values.title,
            content: values.content,
            expression: values.expression,
            isModified: true,
        });
        handleAddElement(presenter);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel htmlFor="title">Nombre del Proyecto</FormLabel>
                    <FormControl>
                        <Input 
                            id="title"
                            placeholder="Título"
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel htmlFor="content">Contenido</FormLabel>
                    <FormControl>
                        <Input 
                            id="content"
                            placeholder="Contenido"
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="expression"
                render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel>Expresión</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto"
                        >
                            {expressions.map(expression => (
                                <FormItem className="flex items-center space-x-2 space-y-0 mr-3">
                                    <FormControl>
                                        <RadioGroupItem value={expression.value} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        <div className="flex items-center gap-1">
                                            {expression.icon}
                                            <p className="font-medium">{expression.label}</p>
                                        </div>
                                    </FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>  
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <div className="flex justify-end p-2">
                    <Button className="" type="submit">Agregar</Button>
                </div>
            </form>
        </Form>
    )
}

export default TabPresenter
