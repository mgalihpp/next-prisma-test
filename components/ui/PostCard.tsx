"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const PostCard = () => {
  return (
    <Card className="w-[350px] m-auto rounded-none relative">
      <CardHeader className="p-0 px-6 pt-6 relative">
        <Avatar className="flex flex-row">
          <AvatarImage
            className="rounded-full"
            src="/messi.png"
            alt="messigoat"
            width={40}
          />
          <div className="flex flex-row justify-between w-full">
          <span className="pl-5 font-bold text-sm">@Galih</span>
          <div className="flex">
          <span className="text-sm pr-2 text-gray-400">10m</span>
          <span className="text-black font-bold">...</span>
          </div>
          </div>
          <AvatarFallback>User Avatar</AvatarFallback>
        </Avatar>
      </CardHeader>
      <span className="line-group"></span>
      <CardContent className="pl-20 pb-0">
        <CardTitle className="text-md">My First Post</CardTitle>
        <CardDescription>
          Halo kawan kawan aapakah kalian tau apa itu apaa ya ankgg akomntol
          anjing lah idah ah
        </CardDescription>
        <Image
          src="https://placehold.co/500x500/png"
          alt="post image"
          width={200}
          height={150}
          className="rounded-sm w-full object-cover h-[auto]"
        />
      </CardContent>
      <CardFooter className="">
        <div>helo</div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
