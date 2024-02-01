import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FormItemPage({field, label}: {field: any, label:string}){
    return (
        <FormItem>
        <div className='flex border-2'>
            <FormLabel className='text-xl px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
                {label}
            </FormLabel>
            <FormControl className='w-full '>
                <Input
                    type='number'
                    className='text-xl font-semibold items-center border rounded-r flex focus:outline-none'
                    placeholder={label}
                    {...field}
                />
            </FormControl>
        </div>
        <FormMessage />
    </FormItem>
    )
}