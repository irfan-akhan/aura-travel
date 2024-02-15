import Image from "next/image";
import React from "react";
import Button from "./Button";
import { HOTELS } from "@/constants";

const Hotels = () => {
	return (
		<div className=" flexCenter flex-col my-12">
			<div className="relative flexCenter my-12">
				<Image
					src="/camp.svg"
					alt="camp"
					width={50}
					height={50}
					className="absolute left-[35%] top-[-28px] w-10 lg:w-[50px]"
				/>
				<h2 className="bold-40 lg:bold-64">Featured Destinations</h2>
			</div>
			{HOTELS?.map((hotel) => (
				<section
					key={hotel.title}
					className="flexCenter  w-[90%] flex-col pb-[100px]"
				>
					<div className="hotel-card w-full min-h-[650px] ">
						<div className="w-6/12">
							<div className="flex flex-wrap justify-between gap-5 lg:gap-5">
								<div className="lg:flexCenter">
									{hotel.tabs.map((tab) => (
										<Button
											type="button"
											title={tab}
											variant="btn_white"
										/>
									))}
								</div>
								<h2 className="bold-20 lg:bold-32 xl:max-w-[390px] text-green-50">
									{hotel.title}
								</h2>
								<p className="regular-20 xl:max-w-[520px]">
									{`${hotel.description}`}
								</p>
							</div>
						</div>
						<div className="flexCenter gap-5">
							<Image
								src="/hero-6.jpg"
								alt="camp-2"
								width={250}
								height={350}
								className="rounded-xl"
							/>
							<div>
								<Image
									src="/hero-5.jpg"
									alt="camp-2"
									width={250}
									height={350}
									className="rounded-xl"
								/>
								<Image
									src="/hero-2.jpg"
									alt="camp-2"
									width={550}
									height={350}
									className="rounded-xl"
								/>
							</div>
							<div>
								{/* <Image
							src="/hero-5.jpg"
							alt="camp-2"
							width={250}
							height={350}
							className="rounded-xl"
						/> */}
								<Image
									src="/hero-2.jpg"
									alt="camp-2"
									width={550}
									height={350}
									className="rounded-xl"
								/>
							</div>
						</div>
					</div>
					<div className="hotel-list-card w-full min-h-[350px]">
						<div className="bg-white flexBetween w-full h-full rounded-lg overflow-hidden">
							<Image
								src="/hero-3.jpg"
								alt="meter"
								width={80}
								height={40}
								// className="w-auto"
							/>
							<div className="flex flex-wrap justify-between gap-2 lg:gap-3 px-3">
								<h2 className="bold-16 lg:bold-16 text-green-50">
									Green Heights
								</h2>
								{/* <p className="regular-14 text-red-400   pr-16">
							{`Indulge in the captivating beauty of Pahalgam with
							our exclusive tour package. Nestled in the
							 `}
						</p> */}
								<p className="regular-14 text-green-600">
									Gulmarg
								</p>
							</div>
						</div>
						<div className="bg-white flexBetween w-full h-full rounded-lg overflow-hidden">
							<Image
								src="/hero-3.jpg"
								alt="meter"
								width={80}
								height={40}
								// className="w-auto"
							/>
							<div className="flex flex-wrap justify-between gap-2 lg:gap-3 px-3">
								<h2 className="bold-16 lg:bold-16 text-green-50">
									Sun and Shades
								</h2>
								<p className="regular-14 text-green-600">
									Gulmarg
								</p>
							</div>
						</div>
						<div className="bg-white flexBetween w-full h-full rounded-lg overflow-hidden">
							<Image
								src="/hero-3.jpg"
								alt="meter"
								width={80}
								height={40}
								// className="w-auto"
							/>
							<div className="flex flex-wrap justify-between gap-2 lg:gap-3 px-3">
								<h2 className="bold-16 lg:bold-16 text-green-50">
									Hotel Mount View
								</h2>
								<p className="regular-14 text-green-600">
									Gulmarg
								</p>
							</div>
						</div>
						<div className="bg-white flexBetween w-full h-full rounded-lg overflow-hidden">
							<Image
								src="/hero-3.jpg"
								alt="meter"
								width={80}
								height={40}
								// className="w-auto"
							/>
							<div className="flex flex-wrap justify-between gap-2 lg:gap-3 px-3">
								<h2 className="bold-16 lg:bold-16 text-green-50">
									Hotel Baiseran
								</h2>
								<p className="regular-14 text-green-600">
									Gulmarg
								</p>
							</div>
						</div>
						<div className="bg-white flex w-full h-full rounded-lg overflow-hidden">
							<Image
								src="/hero-3.jpg"
								alt="meter"
								width={80}
								height={40}
								// className="w-auto"
							/>
							<div className="flex flex-wrap justify-start align-start gap-2 lg:gap-1 px-3">
								<h2 className="bold-16 lg:bold-16 text-green-50">
									Home 2
								</h2>
								<p className="regular-14 text-green-600">
									Gulmarg
								</p>
							</div>
						</div>
					</div>
				</section>
			))}
		</div>
	);
};

export default Hotels;
