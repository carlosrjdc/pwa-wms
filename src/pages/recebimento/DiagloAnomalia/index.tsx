/** @format */

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";
import SliderAjuda from "../receberCarreta/SliderAjuda";
import ComboboxDemo from "../receberCarreta/SliderAjuda/ComboboxAnomalia";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function RegistroAnomalia({
	item,
	lote,
	quantidade,
	children,
}: {
	item: string;
	lote: string;
	quantidade: number;
	children?: ReactNode;
}) {
	return (
		<div className='flex relative'>
			<AlertDialog>
				<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
				<AlertDialogContent className='sm:max-w-[425px] absolute '>
					<AlertDialogHeader>
						<AlertDialogTitle>Registro de Anomalia</AlertDialogTitle>
					</AlertDialogHeader>

					<Tabs defaultValue='account' className='w-[400px]'>
						<TabsList className=''>
							<TabsTrigger value='account'>Definicao Anomalia</TabsTrigger>
							<TabsTrigger value='password'>Registros</TabsTrigger>
							<TabsTrigger value='relato'>Relato</TabsTrigger>
						</TabsList>
						<TabsContent value='account'>
							<ScrollArea className='h-full'>
								<div className='grid gap-4 py-4'>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label htmlFor='name' className='text-right'>
											Anomalia
										</Label>
										<ComboboxDemo />
									</div>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label htmlFor='username' className='text-right'>
											Lote
										</Label>
										<Input
											id='username'
											defaultValue={lote}
											className='col-span-3'
										/>
									</div>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label htmlFor='username' className='text-right'>
											Quantidade
										</Label>
										<Input
											id='username'
											defaultValue={quantidade}
											className='col-span-3'
										/>
									</div>
								</div>
							</ScrollArea>
						</TabsContent>
						<TabsContent className="flex flex-col gap-2" value='password'>
							<div className='grid w-full max-w-sm items-center gap-1.5 pb-4 border rounded p-1'>
								<Label htmlFor='picture'>Foto 1</Label>
								<Input id='picture' type='file' />
							</div>
							<div className='grid w-full max-w-sm items-center gap-1.5 pb-4 border rounded p-1'>
								<Label htmlFor='picture'>Foto 2</Label>
								<Input id='picture' type='file' />
							</div>
							<div className='grid w-full max-w-sm items-center gap-1.5 pb-4 border rounded p-1'>
								<Label htmlFor='picture'>Foto 3</Label>
								<Input id='picture' type='file' />
							</div>
							<div className='grid w-full max-w-sm items-center gap-1.5 pb-4 border rounded p-1'>
								<Label htmlFor='picture'>Foto 4</Label>
								<Input id='picture' type='file' />
							</div>
						</TabsContent>
						<TabsContent value='relato'>
							<Textarea placeholder='Type your message here.' />
						</TabsContent>
					</Tabs>

					<Sheet>
						<SheetTrigger asChild>
							<Button variant='outline'>Ajuda</Button>
						</SheetTrigger>
						<SheetContent className='w-full'>
							<SheetHeader>
								<SheetTitle>Ajuda</SheetTitle>
							</SheetHeader>
							<SheetClose asChild>
								<div className='flex justify-center'>
									<Button className='px-8 w-5/6' type='submit'>
										Sair
									</Button>
								</div>
							</SheetClose>
							<div className='grid gap-4 py-4'>
								<SliderAjuda />
							</div>
							<SheetFooter></SheetFooter>
						</SheetContent>
					</Sheet>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
