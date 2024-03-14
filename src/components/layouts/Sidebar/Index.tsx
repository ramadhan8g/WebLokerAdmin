"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlineUsergroupAdd,
	AiOutlineCalendar,
	AiOutlineLogout,
	AiOutlineLogin
} from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsBuildings, BsGear } from "react-icons/bs";
import { signIn, signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
	const router = useRouter();
	const {data:session, status} : {data:any ; status:string} = useSession()
	return (
		<div className="pb-12 min-h-screen">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold">
						Dashboard
					</h2>
					<div className="space-y-3">
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/")}
						>
							<AiOutlineHome className="mr-2 text-lg" />
							Home
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineMessage className="mr-2 text-lg" />
							Messages
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<BsBuildings className="mr-2 text-lg" />
							Company Profile
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineUsergroupAdd className="mr-2 text-lg" />
							All Applicants
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/job-listings")}
						>
							<HiOutlineClipboardList className="mr-2 text-lg" />
							Job Listings
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineCalendar className="mr-2 text-lg" />
							My Schedule
						</Button>
					</div>
				</div>
			</div>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold">
						Settings
					</h2>
					<div className="space-y-3">
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/settings")}
						>
							<BsGear className="mr-2 text-lg" />
							Settings
						</Button>
						{status === 'authenticated' ? (
							<div className="flex flex-row items-center ">
							   <h4 className="text-white mr-5">{session?.user?.name}</h4>
							<Button
								variant={"ghost"}
								className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none"
								onClick={() => signOut()}
							>
								<AiOutlineLogout className="mr-2 text-lg" />
								Logout
							</Button>
							</div>
						) : (
							<Button
								variant={"ghost"}
								className="w-full text-blue-500 hover:bg-blue-200 hover:text-blue-500 justify-start rounded-none"
								onClick={() => signIn()}
							>
								<AiOutlineLogin className="mr-2 text-lg" />
								Sign In
							</Button>
						)
							
						}

					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar