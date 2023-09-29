"use server";

import { prisma } from "@/prisma";
import { connectDB } from "@/utils";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { text, userId, postId } = await req.json();

    if (!text || !userId || !postId) {
      return NextResponse.json(
        { message: "invalid validate" },
        { status: 400 }
      );
    }
    await connectDB();
    const user = await prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ message: "invalid user" }, { status: 401 });
    }
    const newComment = await prisma.comment.create({
      data: { text, userId, postId },
    });
    return NextResponse.json({ post: newComment }, { status: 202 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
