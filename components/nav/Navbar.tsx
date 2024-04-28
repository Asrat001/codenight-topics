"use client";
import { RocketIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/hook";
import { createSupabaseBrower } from "@/lib/supabase/client";


export default function Navbar() {
	const [numberOfusers,setNumberofUsers]=useState<number>(0)
	const supabase = createSupabaseBrower();
useEffect(
	 () =>{
		const getNumberofUsers =async ()=>{
			const {count,error}=await supabase.from("users").select('*',{count:"exact"});
			if(!error){
				setNumberofUsers(count!)
			}
		}
		getNumberofUsers()
	}
	,[])	
	

	return (
	<div className="">
			<nav className=" w-full flex items-center justify-between ">
			<Link href="/" className="flex items-center gap-2">
				<h1 className=" text-[15px] md:text-3xl font-bold ">CodenightTopics</h1>

				<RocketIcon className="w-5 h-5  animate-lanuch transition-all transform text-green-500" />
			</Link>
			<RenderProfile />
		</nav>
      <p className="mt-10 text-yellow-500">{numberOfusers} People have been Here </p>
	</div>
	);
}

const RenderProfile = () => {
	const { data, isFetching } = useUser();
	console.log(data)

	if (isFetching) {
		return <> </>;
	}

	if (data?.user?.id) {
		return <Profile user={data?.user} />;
	} else {
		return <LoginForm />;
	}
};
