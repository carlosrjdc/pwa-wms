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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";


export default function EditarProduto({ item, lote, quantidade, children }: { item:string, lote:string, quantidade:number, children?: ReactNode }) {
	return (
		<div className="flex relative">
			<Dialog>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent className='sm:max-w-[425px] absolute '>
					<DialogHeader>
						<DialogTitle>Editar Item</DialogTitle>
					</DialogHeader>
                    <ScrollArea className="h-full">
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								SKU
							</Label>
							<Input
								id='name'
								defaultValue={item}
								className='col-span-3'
							/>
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
					<DialogFooter>
						<Button type='submit'>Salvar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
