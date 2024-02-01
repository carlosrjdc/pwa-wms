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
import FormItemPage from "./formItems";

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
	Lacre: z.string().min(3, {
		message: "Lacre must be 3 characters.",
	}),
	Foto: z.unknown(),
});

export default function DocaPage() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			Doca: "",
			Placa: "",
			Lacre: "",
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
		<div className='flex flex-col min-h-screen'>
			<div className='p-2 flex flex-1'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className=''>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItemPage label='OCR' field={field} />
							)}
						/>
						<FormField
							control={form.control}
							name='Doca'
							render={({ field }) => (
								<FormItemPage label='Doca' field={field} />
							)}
						/>
						<FormField
							control={form.control}
							name='Placa'
							render={({ field }) => (
								<FormItemPage label='Placa' field={field} />
							)}
						/>
						<FormField
							control={form.control}
							name='Lacre'
							render={({ field }) => (
								<FormItemPage label='Lacre' field={field} />
							)}
						/>

						<div className='mt-4'>
							<FormLabel>Foto Carreta</FormLabel>
							<Input type='file' />
						</div>
						<Button className='mt-2' type='submit'>
							Iniciar Conferencia
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
