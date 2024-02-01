/** @format */

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import passo1 from "@/assets/passos/1.png";
import passo2 from "@/assets/passos/2.png";
import passo3 from "@/assets/passos/3.png";

import { Button } from "@/components/ui/button";

export default function SliderAjuda() {
	return (
		<div>
			<Carousel>
				<CarouselContent>
					<CarouselItem className='flex flex-col items-center'>
						<Image className='w-auto h-4/6' src={passo1} alt='crrinho' />
					</CarouselItem>
					<CarouselItem>
						<Image className='w-auto h-4/6' src={passo2} alt='crrinho' />
					</CarouselItem>
					<CarouselItem>
						<Image className='w-auto h-4/6' src={passo3} alt='crrinho' />
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	);
}
