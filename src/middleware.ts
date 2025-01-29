import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {}

export const config = {
	matcher: ["/create-post"],
};
