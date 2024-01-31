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
import automatico from "../../../assets/recebimento/automatico.png"
import { Bot } from "lucide-react";


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

export default function DrawerDemo() {
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button>
                    <Bot />
                </Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Foto Etiqueta</DrawerTitle>
						<DrawerDescription>Tirar uma foto da etiqueta.</DrawerDescription>
					</DrawerHeader>
					<BuscarQRCode />
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
