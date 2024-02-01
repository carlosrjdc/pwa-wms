/** @format */

"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import BuscarQRCode from "../qrCode";
import Image from "next/image";
import automatico from "../../../assets/recebimento/automatico.png";
import { Bot, ListTodo } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const data = [
	{
		goal: 400,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 278,
	},
	{
		goal: 189,
	},
	{
		goal: 239,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 278,
	},
	{
		goal: 189,
	},
	{
		goal: 349,
	},
];

type Item = {
	item: string;
	desc: string;
	Lote: string;
	quantidade: number;
};

const arrayItem = [
	{
		item: "60109822",
		desc: "Iorgute Batavo teste de tamanho de texto",
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

export default function DrawerArray() {
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<ListTodo />
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Items</DrawerTitle>
						<DrawerDescription>Itens Conferidos</DrawerDescription>
					</DrawerHeader>

					{arrayItem.map((item, index) => (
						<ItemArray key={index} item={item} />
					))}

					<DrawerFooter>
						<DrawerClose asChild>
							<Button>Submit</Button>
						</DrawerClose>
						<DrawerClose asChild>
							<Button variant='outline'>Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
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
						<Input className='' value={item.Lote} />
						<Input value={item.quantidade} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
