import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare const globalThis: {
	prisma: PrismaClient;
};
// cek utk projek berjalan d
if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	
	if (!globalThis.prisma) {
		globalThis.prisma = new PrismaClient();
	}

	prisma = globalThis.prisma;
}
export default prisma;
