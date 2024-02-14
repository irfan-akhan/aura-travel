import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
		<button
			className={`flexCenter rounded-full text-white ${variant}`}
			type={type}
		>
			{icon && <Image src={icon} alt={title} width={20} height={20} />}
			<label className="regular-14 whitespace-nowrap font-bold  ">{`${title},`}</label>
		</button>
  );
}

export default Button