import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
	// panggil data
	const data = await request.json();
	// handling data
	const profile = await prisma.companyoverview.findFirst({
		where: {
			companyId: data.companyId,
		},
	});
	// upsert nambah data jika blum d buat
	const result = await prisma.companyoverview.upsert({
		where: {
			companyId: data.companyId,
			id: profile?.id || "",
		},
		update: data,
		create: data,
	});

	return NextResponse.json(result);
}
