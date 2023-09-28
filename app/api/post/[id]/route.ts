import { prisma } from "@/prisma";
import { connectDB } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const post = await prisma.post.findFirst({
      where: { id: params.id },
    });
    return NextResponse.json({ post }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { title, body, userId } = await req.json();
    await connectDB();

    const author = await prisma.post.findFirst({ where: { userId } });

    if (userId !== author?.userId) {
      return NextResponse.json({ message: "invalid user" }, { status: 400 });
    }

    if (userId === author?.userId) {
      const updatePost = await prisma.post.update({
        data: { title, body },
        where: { id: params.id },
      });
      return NextResponse.json({ updatePost }, { status: 200 });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { userId } = await req.json();
    await connectDB();

    const author = await prisma.post.findFirst({ where: { userId } });

    if (userId !== author?.userId) {
      return NextResponse.json({ message: "invalid user" }, { status: 400 });
    }

    if (userId === author?.userId) {
      const deletedPost = await prisma.post.delete({
        where: { id: params.id },
      });
      return NextResponse.json({ deletedPost }, { status: 200 });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};