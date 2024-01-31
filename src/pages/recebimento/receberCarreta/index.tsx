/** @format */
'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocaPage from "./processo/doca";
import { useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";
import MaterialPage from "./processo/material";

export default function ReceberCarretaPage() {

    const router = useRouter();
	//		<DocaPage/>
	return (
		<div>
			<div className='bg-cyan-600 flex justify-between px-2 py-2'>
				<Undo2 onClick={() => router.push("/recebimento")} />
				<strong>MENU</strong>
			</div>

			<Tabs defaultValue='material' className=''>
				<TabsList className='grid w-full grid-cols-3'>
					<TabsTrigger value='info'>Info</TabsTrigger>
					<TabsTrigger value='material'>Material</TabsTrigger>
					<TabsTrigger value='validacao'>Validação</TabsTrigger>
				</TabsList>
				<TabsContent value='info'>
					<DocaPage />
				</TabsContent>
				<TabsContent value='material'>
					<MaterialPage/>
				</TabsContent>
				<TabsContent value='validacao'>
					<div>Validacao</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
