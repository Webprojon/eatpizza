export default function Input({ type, name = "", text = "", size = "" }) {
	return (
		<>
			<input
				type={type}
				name={name}
				placeholder={text}
				autoComplete="off"
				className={`border border-gray-300 outline-green-500 tracking-wider text-gray-500 placeholder:text-gray-500 px-3 py-2 rounded-sm
				dark:outline-none dark:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-300 dark:border-gray-500
			 ${size === "sm" ? "w-[8rem]" : ""} `}
			/>
		</>
	);
}
