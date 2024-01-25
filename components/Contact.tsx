import React from "react";

const Contact = () => {
	return (
		<section className="flex w-full  mt-40 pb-[100px]">
			<div className="contact min-h-[500px] text-center ">
				<h2 className="bold-40 lg:bold-64 text-center max-[720px]:mb-16">
					Contact Us
				</h2>

				<div className="flex align-center justify-center gap-5 max-[720px]:flex-col">
					<a
						href="mailto:aurastayskashmir@gmail.com"
						className="bg-green-600 hover:bg-green-800 text-white px-4 min-w-[300px] min-h-[50px]   rounded inline-flex items-center justify-center my-8 max-[720px]:my-1"
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
						className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 min-w-[300px] min-h-[50px]   rounded inline-flex items-center justify-center my-8 max-[720px]:my-1"
					>
						{/* <svg
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
						</svg> */}
						<svg
							aria-hidden="true"
							focusable="false"
							className="w-6 h-6 mr-2 !text-red-200"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
							/>
						</svg>
						<span>+918716006004</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
