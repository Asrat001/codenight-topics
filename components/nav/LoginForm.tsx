"use client";
import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { createSupabaseBrower } from "@/lib/supabase/client";
import { AnonymouslyModal } from "../AnonymouslyModal";
export default function LoginForm() {
	const supabase = createSupabaseBrower();

	const handleLoginWithGihub = async () => {
		await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo:
					location.origin +
					"/auth/callback?next=" +
					location.pathname,
			},
		});
	};
console.log(location.origin +
	"/auth/callback?next=" +
	location.pathname)
	return (
	<div className=" flex flex-col md:flex-row items-center gap-4">
			<Button
			variant="outline"
			className="flex items-center gap-2 border p-2 rounded-md border-zinc-400 hover:border-green-500 transition-all px-8 animate-fade"
			onClick={handleLoginWithGihub}
		>
			<GitHubLogoIcon /> Login
		</Button>
        <AnonymouslyModal/>
	</div>
	);
}
