"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();

	return (
		<footer
			className={`${pathname === "/" ? "hidden" : pathname === "/menu" ? "hidden" : ""} mt-8 w-full bg-gray-50 dark:bg-transparent`}
		>
			<div className="flex justify-between max-w-[78rem] mx-auto py-[1rem] tracking-wider">
				<div>
					<a href="https://portfolio-webprojon.vercel.app/" target="blank">
						© All Rights Reserved. Tokhirjon Khasanov ❤️
					</a>
				</div>
				<div className="font-semibold">
					<LogoutLink>Log out</LogoutLink>
				</div>
			</div>
		</footer>
	);
}
