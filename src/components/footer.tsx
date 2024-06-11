"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();

	return (
		<footer
			className={`${pathname === "/" ? "hidden" : ""} w-full bg-gray-50 dark:bg-transparent py-5`}
		>
			<div className="flex justify-between max-w-[78rem] mx-auto py-[1rem] tracking-wider max-sm:flex-col max-sm:py-0 max-sm:p-3 max-sm:text-center">
				<div>
					<a href="https://portfolio-webprojon.vercel.app/" target="blank">
						© All Rights Reserved. Tokhirjon Khasanov ❤️
					</a>
				</div>
				<div className="pt-2 font-semibold">
					<LogoutLink>Log out</LogoutLink>
				</div>
			</div>
		</footer>
	);
}
