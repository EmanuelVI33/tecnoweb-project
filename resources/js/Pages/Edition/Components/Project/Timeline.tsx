import { ElementPresenter } from "@/Pages/Edition/models/element-presenter.model";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { useSelectedProjectStore } from "@/store/selected-project";

function Timeline() {
    const { elements, selectElement, currentElement } = useSelectedProjectStore();

    return (
        <div className="h-2/3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 m-2 rounded-2xl overflow-x-auto overflow-y-auto">
            <div className=" flex gap-5 p-2">
                {elements.map((element, index) => {
                    const { title } = element;
                    const w = title.length * 0.4;

                    return (
                        <Card key={index} className={`w[${w}rem] ${currentElement === index ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : ''}`} onClick={() => selectElement(index)}>
                            <CardHeader >
                                <CardTitle>{element.title}</CardTitle>
                                <CardDescription>{element.labelTypeElement}</CardDescription>
                            </CardHeader>
                            {element instanceof ElementPresenter && 
                                <CardContent className="">
                                    <p className="text-balance truncate">
                                        {element.content}
                                    </p>
                                </CardContent>
                            }
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Timeline
