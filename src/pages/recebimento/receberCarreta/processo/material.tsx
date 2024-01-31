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
			<div className='p-2 flex flex-1'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Produto</FormLabel>
									<FormControl>
										<Input placeholder='Produto' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='Doca'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Lote</FormLabel>
									<FormControl>
										<Input placeholder='Lote' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='Placa'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Quantidade</FormLabel>
									<FormControl>
										<Input placeholder='Quantidade' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='mt-4'>
							<CalendarForm />
							<Button className='mt-2' type='submit'>
								Submit
							</Button>
						</div>
						<br />
						<br />
						<div className="flex justify-between">
							<DrawerDemo />
                            <SheetSide/>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
