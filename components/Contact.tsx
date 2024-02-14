import React from "react";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
	return (
		<section className="flex w-full  mt-40 pb-[100px]" id="contact">
			<div className="contact min-h-[500px] text-center ">
				<h2 className="bold-40 lg:bold-64 text-center max-[720px]:mb-16">
					Contact Us
				</h2>

				<div className="flex align-center justify-center gap-5 max-[720px]:flex-col">
					<a
						href="mailto:aurastayskashmir@gmail.com"
						className="bg-green-600 hover:bg-green-800 text-white px-4 min-w-[260px] min-h-[50px]   rounded inline-flex items-center justify-center my-8 max-[720px]:my-1"
					>
						<MdOutlineEmail className="mx-1 bold-20" />

						<span>Email Us</span>
					</a>
					<a
						href="tel:+918716006004"
						className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 min-w-[260px] min-h-[50px]   rounded inline-flex items-center justify-center my-8 max-[720px]:my-1"
					>
						<MdOutlineCall className="mx-1 bold-20" />

						<span>+918716006004</span>
					</a>
					<a
						href="tel:++9188999125611"
						className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 min-w-[260px] min-h-[50px]   rounded inline-flex items-center justify-center my-8 max-[720px]:my-1"
					>
						<MdOutlineCall className="mx-1 bold-20" />

						<span>+9188999125611</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
