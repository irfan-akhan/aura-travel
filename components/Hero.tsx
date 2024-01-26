import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 mt-20 md:gap-28 lg:py-20 xl:flex-row">
			<div className="hero-map" />

			<div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
				<Image
					src="/camp.svg"
					alt="camp"
					width={50}
					height={50}
					className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
				/>
				<h1 className="bold-64 text-6xl lg:bold-68">Explore Kashmir with us</h1>
				<p className="regular-16 mt-6 text-gray-50 xl:max-w-[520px]">
				Embark on an enchanting journey to Kashmir with us, where every moment is a symphony of beauty and tranquility. Our curated tours offer an immersive experience, unveiling the timeless allure of the 'Paradise on Earth.' From the snow-capped peaks of Gulmarg to the serene Dal Lake, explore the cultural richness of Srinagar and the pristine valleys that define Kashmir. Indulge in the warmth of local hospitality and savor the flavors of authentic cuisine. Let us guide you through the breathtaking landscapes and captivating traditions, ensuring your Kashmir sojourn is a seamless blend of discovery and relaxation.
				</p>

				{/* <div className="flex flex-col w-full gap-3 sm:flex-row">
					<Button
						type="button"
						title="Download App"
						variant="btn_green"
					/>
					<Button
						type="button"
						title="How we work?"
						icon="/play.svg"
						variant="btn_white_text"
					/>
				</div> */}
			</div>

			<div className="relative flex flex-1 items-start gap-3">
				<div className="relative top-[-15px] z-20 flex w-[210px] flex-col rounded-xl bg-green-90 overflow-hidden">
					<Image
						src="/hero-5.jpg"
						alt="gulmarg"
						width={550}
						height={870}
					/>
				</div>
				<div className="relative z-20 top-[20px] flex w-[210px] flex-col rounded-xl bg-green-90 overflow-hidden">
					<Image
						src="/hero-6.jpg"
						alt="gulmarg"
						width={550}
						height={870}
					/>
				</div>
				<div className="relative z-20 top-[40px] flex w-[210px] flex-col rounded-xl bg-green-90 overflow-hidden">
					<Image
						src="/hero-4.jpg"
						alt="gulmarg"
						width={550}
						height={870}
					/>
				</div>
			</div>
		</section>
  );
}

export default Hero