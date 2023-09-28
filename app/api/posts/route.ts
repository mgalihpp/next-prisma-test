import { prisma } from "@/prisma";
import { connectDB } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, body, userId } = await req.json();

    if (!title || !body || !userId) {
      return NextResponse.json(
        { message: "invalid validare" },
        { status: 400 }
      );
    }
    await connectDB();
    const user = await prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ message: "invalid user" }, { status: 401 });
    }
    const newPosts = await prisma.post.create({
      data: { title, body, userId },
    });
    return NextResponse.json({ post: newPosts }, { status: 202 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
