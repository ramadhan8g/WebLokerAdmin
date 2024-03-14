import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
	const industries = await prisma.industry.findMany();
	console.log(industries)
	return NextResponse.json(industries);
}
