import Image from "next/image";
import React from "react";
import Button from "./Button";
import { HOTELS } from "@/constants";

const HotelsView = () => {
	return (
		<div className="  flex-col my-12">
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
			{HOTELS?.map((hotel, idx) => (
				<main
					key={hotel.title}
					className={`max-w-[1960px] mx-auto my-6 py-6 ${
						idx === 0
							? "bg-pahalgam"
							: idx === 1
							? "bg-gulmarg"
							: " bg-srinagar"
					}`}
				>
					<section className="max-container padding-container flex flex-col gap-20 py-5 pb-32 mt-20 md:gap-10 lg:py-10 xl:flex-row">
						<div className=" flex flex-1 flex-col xl:w-1/2 pl-3">
							<div className="flex flex-col flex-wrap w-full gap-1 mb-4 sm:flex-row">
								{hotel.tabs.map((tab) => (
									<Button
										type="button"
										title={tab}
										variant="btn_green"
									/>
								))}
							</div>
							<h1 className="bold-32 text-8xl text-white max-[720px]:text-xl lg:bold-40">
								{hotel.title}
							</h1>
							<p className="regular-20 mt-6 max-[720px]:text-sm text-slate-300 xl:max-w-[520px]">
								{hotel.description}
							</p>
						</div>

						<div className="relative flex flex-1 items-center gap-3">
							{hotel.imageSet.map((img, idx) => {
								{
									console.log(
										"hotel.imageSet",
										hotel.imageSet
									);
								}
								return (
									<div
										key={idx}
										className="relative top-[10px] z-20 flex w-[210px] flex-col rounded-xl bg-green-90 overflow-hidden"
									>
										<Image
											src={`/${img}`}
											alt="gulmarg"
											width={550}
											height={870}
										/>
									</div>
								);
							})}
						</div>

						{/* <div className="relative z-20 top-[20px] left-[-40px] flex w-[210px] flex-col rounded-xl bg-green-90 overflow-hidden">
								<Image
									src="/hero-5.jpg"
									alt="gulmarg"
									width={550}
									height={870}
								/>
							</div>
							<div className="relative z-20 top-[30px] left-[-70px] flex w-[210px] flex-col rounded-xl bg-green-90 overflow-hidden">
								<Image
									src="/hero-6.jpg"
									alt="gulmarg"
									width={550}
									height={870}
								/>
							</div> */}
						{/* </div> */}
					</section>
					<section className="max-container padding-container flex flex-col py-10 pb-32  md:gap-28 lg:py-20 xl:flex-row">
						<div className="flex justify-center flex-wrap w-full gap-5 mb-4 sm:flex-row sm:flex-wrap">
							{hotel.list?.map((name, idx) => (
								<div className="max-w-sm bg-slate-200 max-[720px]:w-[170px]  rounded-lg shadow rounded-lg ">
									<img
										src={hotel.listImages[idx]}
										alt={name}
										// width={180}
										// height={40}
										style={{
											width: "170px",
											objectFit: "cover",
											height: "170px",
										}}
										className="max-[600px]:w-full max-[600px]:h-[45vh] rounded-t-lg"
									/>
									<p className="my-4 text-center font-semibold">
										{name}
									</p>
								</div>
							))}
						</div>
					</section>
				</main>
			))}
		</div>
	);
};

export default HotelsView;
