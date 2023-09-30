"use server"

import { prisma } from "@/prisma";
import { connectDB } from "@/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "invalid validare" },
        { status: 400 }
      );
    }

    await connectDB();
    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (!existingUser) {
      return NextResponse.json(
        { message: "user not found! please register" },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "invalid password" }, { status: 403 });
    }
    return NextResponse.json({ message: "logged in" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
