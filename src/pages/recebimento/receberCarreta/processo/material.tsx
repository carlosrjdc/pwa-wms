/** @format */

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import DrawerDemo from "../../drawerQrCode";
import CalendarForm from "../../Calendario";
import DrawerArray from "../../drawerArray";
import SheetSide from "../../gavetaArray";

const FormSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	Doca: z.string().min(2, {
		message: "Doca must be at least 2 characters.",
	}),
	Placa: z.string().length(7, {
		message: "Placa must be 7 characters.",
	}),
});

export default function MaterialPage() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			Doca: "",
			Placa: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	const router = useRouter();
	return (
		<div className='flex flex-col'>
			<div className='p-2 gap-8 flex'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full flex flex-col gap-4'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem className=''>
									<div className='flex border-2'>
										<FormLabel className='text-xl px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
											Produto
										</FormLabel>
										<FormControl className='w-full '>
											<Input
												type='number'
												className='text-lg font-semibold items-center border rounded-r flex focus:outline-none'
												placeholder='Produto'
												{...field}
											/>
										</FormControl>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='Doca'
							render={({ field }) => (
								<FormItem>
									<div className='flex border-2'>
										<FormLabel className='text-xl px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
											Lote
										</FormLabel>
										<FormControl className='w-full '>
											<Input
												className='text-xl font-semibold items-center border rounded-r flex focus:outline-none'
												placeholder='Lote'
												{...field}
											/>
										</FormControl>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='Placa'
							render={({ field }) => (
								<FormItem>
									<div className='flex border-2'>
										<FormLabel className='text-xl px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
											Quantidade
										</FormLabel>
										<FormControl className='w-full '>
											<Input
												type='number'
												className='text-xl font-semibold items-center border rounded-r flex focus:outline-none'
												placeholder='Quantidade'
												{...field}
											/>
										</FormControl>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='mt-4 '>
							<CalendarForm />
							<div className='flex justify-end items-center'>
								<Button className='mt-2' type='submit'>
									CADASTRAR
								</Button>
							</div>
						</div>
						<br />
						<br />
						<div className='flex justify-between p-2 border rounded'>
							<DrawerDemo />
							<SheetSide />
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
