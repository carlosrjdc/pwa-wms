/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";


type Item = {
	item: string;
	desc: string;
	Lote: string;
	quantidade: number;
};

const arrayItem = [
	{
		item: "60109822",
		desc: "Iorgute Batavo",
		Lote: "400176521",
		quantidade: 900,
	},
	{
		item: "70032546",
		desc: "Queijo Prato",
		Lote: "450212367",
		quantidade: 750,
	},
	{
		item: "80215439",
		desc: "Leite Condensado Itambé",
		Lote: "410045632",
		quantidade: 1200,
	},
	{
		item: "92087653",
		desc: "Manteiga Lactalis",
		Lote: "490056789",
		quantidade: 500,
	},
	{
		item: "30126784",
		desc: "Iogurte Grego Itambé",
		Lote: "430123456",
		quantidade: 1000,
	},
	{
		item: "64230987",
		desc: "Queijo Minas Frescal Lactalis",
		Lote: "470098765",
		quantidade: 600,
	},
	{
		item: "12345678",
		desc: "Leite Longa Vida Itambé",
		Lote: "480087654",
		quantidade: 800,
	},
	{
		item: "87654321",
		desc: "Iogurte Natural Lactalis",
		Lote: "440065432",
		quantidade: 950,
	},
	{
		item: "98765432",
		desc: "Requeijão Cremoso Itambé",
		Lote: "460043219",
		quantidade: 1100,
	},
	{
		item: "56789012",
		desc: "Queijo Prato Lactalis",
		Lote: "420123456",
		quantidade: 700,
	},
];

export default function SheetSide() {
	return (
		<div className='grid grid-cols-2 gap-2'>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline'>"teste"</Button>
				</SheetTrigger>
				<SheetContent className='h-5/6' side='bottom'>
					<SheetHeader>
						<SheetTitle>Items conferidos</SheetTitle>
					</SheetHeader>
					<ScrollArea className='h-full w-full rounded-md border'>
						<div className='grid gap-4 py-4'>
							{arrayItem.map((item, index) => (
								<ItemArray key={index} item={item} />
							))}
						</div>
						<Separator className='my-2' />
					</ScrollArea>
					<SheetFooter></SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}

function ItemArray({ item }: { item: Item }) {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle className='text-lg'>{item.item}</CardTitle>
					<CardDescription>{item.desc}</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex gap-2'>
						<Label>{item.Lote}</Label>
						<Label>{item.quantidade}</Label>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
