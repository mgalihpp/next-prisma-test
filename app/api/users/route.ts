import { prisma } from "@/prisma";
import { connectDB } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const users = await prisma.user.findMany({select: {id: true, name: true, post: true, _count: true}});
    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};
