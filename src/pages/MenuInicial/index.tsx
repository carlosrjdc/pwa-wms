/** @format */
'use client'
import Image from "next/image";

import { useRouter } from "next/navigation"

//imagens
import imgRecebimento from "../../assets/entrega.png";
import imgInventario from "../../assets/inventario.png";
import imgDevolucao from "../../assets/devolucao.png";
import imgCarrinho from "../../assets/carrinho.png";

export default function MenuPrincipal_Page() {

    const router = useRouter()

	const infoGap = 4;
	const gapVertical = 4;

	return (
		<div
			className={`min-h-screen flex flex-col gap-${gapVertical} justify-center items-center`}>
			<div
				className={`flex flex-wrap gap-${infoGap} justify-center items-center`}>
				<div onClick={()=> router.push("/recebimento")} className='flex flex-col justify-center w-40  items-center border px-4 py-2 rounded'>
					<Image className='h-20 w-20' src={imgRecebimento} alt='logo' />
					<div>RECEBIMENTO</div>
				</div>
				<div className='flex flex-col justify-center w-40  items-center border px-4 py-2 rounded'>
					<Image className='h-20 w-20' src={imgInventario} alt='logo' />
					<div>Inventario</div>
				</div>
			</div>
			<div
				className={`flex flex-wrap gap-${infoGap} justify-center items-center`}>
				<div className='flex flex-col justify-center w-40  items-center border px-4 py-2 rounded'>
					<Image className='h-20 w-20' src={imgDevolucao} alt='logo' />
					<div>DEVOLUÇÃO</div>
				</div>
				<div className='flex flex-col justify-center w-40  items-center border px-4 py-2 rounded'>
					<Image className='h-20 w-20' src={imgCarrinho} alt='logo' />
					<div>EXPEDIÇÃO</div>
				</div>
			</div>
		</div>
	);
}
