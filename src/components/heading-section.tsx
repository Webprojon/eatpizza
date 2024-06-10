import React from "react";

type HeadingSectionProps = {
	children: React.ReactNode;
};

export default function HeadingSection({ children }: HeadingSectionProps) {
	return (
		<h2
			className="my-9 max-sm:mt-10 max-sm:mb-4 tracking-wider text-2xl font-bold text-gray-600 dark:text-gray-400 uppercase text-left
        max-sm:text-xl max-sm:pl-2"
		>
			{children}
		</h2>
	);
}
