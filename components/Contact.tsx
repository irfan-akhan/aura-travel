import React from "react";

const Contact = () => {
	return (
		<section className="flex w-full  mt-40 pb-[100px]">
			<div className="contact min-h-[500px] text-center ">
				<h2 className="bold-40 lg:bold-64 text-center">Contact Us</h2>

				<div className="flex align-center justify-center gap-10">
					<a
						href="mailto:aurastayskashmir@gmail.com"
						className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 min-w-[300px] min-h-[50px]   rounded inline-flex items-center justify-center my-10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						<span>Email Us</span>
					</a>
					<a
						href="tel:+918716006004"
						className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 min-w-[300px] min-h-[50px]   rounded inline-flex items-center justify-center my-10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						<span>Call Us</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
