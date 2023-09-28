import { prisma } from "@/prisma";
import { connectDB } from "@/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "invalid validare" },
        { status: 400 }
      );
    }

    await connectDB();
    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "user already registered, please login..." },
        { status: 403 }
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const users = await prisma.user.create({
      data: { name, email, password: hashPassword },
    });
    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
