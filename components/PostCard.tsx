"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import DropDown from "./ui/dropdown";
import { AiFillLike } from "react-icons/ai";
import { Repeat2Icon } from "lucide-react";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { BsSend } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";

type PostCardProps = {
  id?: string;
  title: string;
  body: string;
  username: string;
  createdAt: string;
  replies: number
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  body,
  username,
  createdAt,
  replies
}) => {
  const [cout, setCout] = React.useState<number>(0);

  const parsedCreatedAt = parseISO(createdAt);
  const formattedCreatedAt = formatDistanceToNowStrict(parsedCreatedAt, {
    addSuffix: true,
  });
  return (
    <Card className="w-full md:w-[450px] m-auto rounded-none relative">
      <CardHeader className="p-0 px-6 pt-6 relative flex flex-row justify-center items-center">
        <Avatar>
          <AvatarImage src="/messi.png" alt="user avatar" width={40} />
        </Avatar>
        <div className="flex flex-row justify-between items-center w-full">
          <span className="pl-5 font-bold text-sm">{username}</span>
          <span className="text-[.7rem] pr-2 text-gray-500">
            {formattedCreatedAt}
          </span>
        </div>
        <DropDown />
      </CardHeader>
      <span className="line-group">
        <div className="flex items-center justify-center absolute bottom-[-22.5px] left-[-12.5px]">
          <Avatar className="text-start w-[20px] h-[20px]">
            <AvatarImage
              src="/vercel.svg"
              alt="user avatar"
              width={10}
              height={10}
            />
          </Avatar>
          <Avatar className="text-start w-[20px] h-[20px] absolute left-0 ml-2.5">
            <AvatarImage
              src="/messi.png"
              alt="user avatar"
              width={10}
              height={10}
            />
          </Avatar>
        </div>
      </span>
      <CardContent className="pl-20 pb-0 flex flex-col justify-center ">
        <CardTitle className="text-md text-start">{title}</CardTitle>
        <CardDescription>{body}</CardDescription>
        <Image
          src="https://placehold.co/600x600/png"
          alt="post image"
          width={200}
          height={150}
          priority
          className="rounded-sm w-full object-cover h-[auto]"
        />
      </CardContent>
      <CardFooter className="w-full pt-10 flex items-center relative pl-20">
        <div className="mt-[10px]">
          <span className="text-[.75rem] text-slate-500 font-normal">
            {replies} replies | People liked your content
          </span>
        </div>
        <div className="flex flex-row justify-center items-start pt-2 gap-5 absolute top-0">
          <button onClick={() => setCout(cout + 1)}>
            <AiFillLike size={20} />
            <span className="text-[0.7rem] font-bold">{cout}</span>
          </button>
          <button onClick={() => setCout(cout + 1)}>
            <FaRegComment size={20} />
            <span className="text-[0.7rem] font-bold">{cout}</span>
          </button>
          <button onClick={() => setCout(cout + 1)}>
            <Repeat2Icon size={20} />
            <span className="text-[0.7rem] font-bold">{cout}</span>
          </button>
          <button onClick={() => setCout(cout + 1)}>
            <BsSend size={20} />
            <span className="text-[0.7rem] font-bold">{cout}</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
