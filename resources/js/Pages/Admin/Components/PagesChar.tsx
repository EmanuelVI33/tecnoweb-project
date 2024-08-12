import { TrendingUp } from "lucide-react";
import { Bar, BarChart, TooltipProps, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/shadcn/ui/chart";
import { usePage } from "@inertiajs/react";
import { AdminPageProps } from "@/types";

// const chartData = [
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 73 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 214 },
// ];

// const chartConfig = {
//     desktop: {
//         label: "User index",
//         color: "hsl(var(--chart-1))",
//     },
// } satisfies ChartConfig;

const chartConfig = {
    visits: {
        label: "Visitas",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

const CustomTooltipContent = ({
    active,
    payload,
}: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        const { label, visits } = payload[0].payload;
        return (
            <div className="bg-white text-black border border-gray-300 rounded-lg shadow-md p-3">
                <p className="font-semibold text-lg">{`Página: ${label}`}</p>
                <p className="text-gray-700">{`Visitas: ${visits}`}</p>
            </div>
        );
    }
    return null;
};

export function PagesChar() {
    const {
        props: { pages },
    } = usePage<AdminPageProps>();

    const chartData = pages.map((page) => ({
        page: page.key, // Usar 'key' como el nombre de la página
        visits: parseInt(page.value, 10), // Convertir 'value' a número
        label: page.label ?? "",
    }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Visitas por paginas</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: -20,
                        }}
                    >
                        <XAxis type="number" dataKey="visits" hide />
                        <YAxis
                            dataKey="page"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<CustomTooltipContent />} // Usa el tooltip personalizado
                        />
                        <Bar
                            dataKey="visits"
                            fill="var(--color-visits)"
                            radius={5}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    );
}
