//@ts-nocheck

//@ts-nocheck
import { PrismaClient } from "@prisma/client";


export let prisma: PrismaClient;
declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}