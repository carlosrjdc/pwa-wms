/** @format */
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocaPage from "./processo/doca";
import { useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";
import MaterialPage from "./processo/material";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ValidarPage from "./processo/validacao";

export default function ReceberCarretaPage() {
	const router = useRouter();
    const [aba, setAba] = useState('info')

    function alterarAbata(){

    }
	
	return (
		<div>
			<div className='bg-cyan-600 flex justify-between px-2 py-2 items-center'>
				<Undo2 size={40} onClick={() => router.push("/recebimento")} />
				<strong>MENU</strong>
			</div>

			<Tabs value={aba} className=''>
				<TabsList className='grid w-full grid-cols-3'>
					<TabsTrigger onClick={()=> setAba('info')} value='info'>Info</TabsTrigger>
					<TabsTrigger onClick={()=> setAba('material')}  value='material'>Material</TabsTrigger>
					<TabsTrigger onClick={()=> setAba('validacao')}  value='validacao'>Validação</TabsTrigger>
				</TabsList>
				<TabsContent value='info'>
					<DocaPage />
				</TabsContent>
				<TabsContent value='material'>
					<div>
						<MaterialPage />
                        <Button onClick={()=> setAba("validacao")}>Passar</Button>
					</div>
				</TabsContent>
				<TabsContent value='validacao'>
        	<ValidarPage/>
				</TabsContent>
			</Tabs>
		</div>
	);
}
