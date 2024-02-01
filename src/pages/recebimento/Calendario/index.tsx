/** @format */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import RegistroAnomalia from "../DiagloAnomalia";

const FormSchema = z.object({
	dob: z.date({
		required_error: "A date of birth is required.",
	}),
});

export default function CalendarForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
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

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8  flex flex-col'>
				<div>
					<Collapsible className='p-2 border'>
						<CollapsibleTrigger className='bg-cyan-200 w-full p-1 font-bold uppercase'>
							Lote por fabricação e SIF +
						</CollapsibleTrigger>
						<CollapsibleContent>
							<FormField
								control={form.control}
								name='dob'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<div className='flex gap-2 items-center mt-2'>
											<label>SIF:</label>
											<Input />
										</div>
										<div className='flex gap-2 items-center mt-2'>
											<FormLabel>Fabricação:</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"w-[240px] pl-3 text-left font-normal",
																!field.value && "text-muted-foreground",
															)}>
															{field.value ? (
																format(field.value, "PPP")
															) : (
																<span>Selecione a data</span>
															)}
															<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className='w-auto p-0' align='start'>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) =>
															date > new Date() || date < new Date("1900-01-01")
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
						</CollapsibleContent>
					</Collapsible>
					<Collapsible className='p-2 border'>
						<CollapsibleTrigger className='bg-cyan-200 w-full p-1 font-bold uppercase'>
							CADASTRO DE ANOMALIA +
						</CollapsibleTrigger>
						<CollapsibleContent>
							<div className='flex justify-between items-center px-2 py-4 bg-slate-400'>
								<div className='flex p-2 items-center space-x-2'>
									<Checkbox id='terms' />
									<label
										htmlFor='terms'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										ITEM COM ANOMALIA
									</label>
								</div>
								<RegistroAnomalia item="item 1" lote="lote2" quantidade={4}>
									<PlusCircle />
								</RegistroAnomalia>
							</div>
						</CollapsibleContent>
					</Collapsible>
				</div>
			</form>
		</Form>
	);
}
