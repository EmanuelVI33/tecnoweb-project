import { z } from "zod";
import { useForm as useReactForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
import { useRef } from "react";
import { useSelectedProjectStore } from "@/store/selected-project";
import { ElementVideoCreator } from "@/Pages/Edition/Class/factory-element/element-video-creator";

const formSchema = z.object({
    title: z.string().min(3),
    video_url: z.string(),
});

function TabVideo() {
    const form = useReactForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    }); 
    const videoRef = useRef<HTMLInputElement>(null);
    const handleAddElement = useSelectedProjectStore(state => state.addElement);

    const submit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        const videoCreater = new ElementVideoCreator();
        if (!videoRef.current || !videoRef.current.files) {
            return;
        } 
        const file = videoRef.current?.files[0];
        const video = videoCreater.createElement({
            ...values, 
            file, 
            isModified: true
        });
        handleAddElement(video);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel htmlFor="name">Titulo</FormLabel>
                    <FormControl>
                        <Input 
                            id="name"
                            placeholder="nombre"
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="video_url"
                render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel>Vídeo</FormLabel>
                    <FormControl>
                        <Input 
                            type="file" 
                            placeholder="video"
                            accept="video/mp4,video/x-m4v,video/*"
                            {...field} 
                            ref={videoRef}
                        />
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

export default TabVideo
