import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default function Footer() {
	return (
		<footer className="w-full bg-gray-50 dark:bg-transparent py-5">
			<div className="flex justify-between max-w-[78rem] mx-auto py-[1rem] max-sm:flex-col max-sm:py-0 max-sm:p-3">
				<div>
					<a href="https://portfolio-webprojon.vercel.app/" target="blank">
						© All Rights Reserved. Tokhirjon Khasanov ❤️
					</a>
				</div>
				<LogoutLink>Log out</LogoutLink>
			</div>
		</footer>
	);
}
