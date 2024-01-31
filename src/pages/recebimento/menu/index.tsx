/** @format */
'use client'
import Image from "next/image";
import caminhao from "../../../assets/recebimento/caminhao.png";
import conformidade from "../../../assets/recebimento/conformidade.png";
import { Separator } from "@/components/ui/separator";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation"


export default function MenuRecebimentoPage() {
    const router = useRouter()


	return (
		<div>
			<div>
				<div className='bg-cyan-600 flex justify-between px-2 py-2'>
					<Undo2 onClick={()=> router.push("/menu")} />
					<strong>MENU</strong>
				</div>
				<ItemMenu rota="receberCarreta" imagem={caminhao} text='Receber Carreta' />
				<Separator />
				<ItemMenu imagem={conformidade} text='Cadastrar CNC' />
				<Separator />
				<ItemMenu imagem={caminhao} text='Recebimento' />
			</div>
		</div>
	);
}

export function ItemMenu({ imagem, text, rota }: { imagem: any; text: string; rota?: string}) {
    const router = useRouter()
	return (
		<div onClick={()=> rota? router.push(rota): null} className='flex gap-2 items-center px-2 py-2'>
			<Image src={imagem} alt='logo' width={42} height={42} />
			<span>{text}</span>
		</div>
	);
}
