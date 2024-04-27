"use client";

import React from "react";
import {useRouter } from "next/navigation";
import { Schema } from "@/amplify/data/resource";

const Post = ({
    post,
    onDelete,
    idx,
    isSignedIn,
}: {
    post: Pick<Schema["Post"] , "title" | "id">;
    onDelete: (id:string) => void;
    idx: number;
    isSignedIn: boolean;
}) => {
    const router = useRouter();
    const onDetail = () => {
        router.push(`/post/${post.id}`);
    };
    return (
        <div className="border bg-gray-500 w-full p-4 rounded flex justify-between" key={idx}>

            <button onClick={onDetail}>
                <div className="flex gap-2">
                    <div>Title:</div>
                    <div>{post.title}</div>
                </div>
            </button>

            <input type="hidden" name="id" id="id" value={post.id}  />
            {isSignedIn ?(
                <button className="text-red-500 cursor-pointer"
                onClick={()=>onDelete(post.id)}>
X
                </button>
            ):null} 
            
        </div>);

}

export default Post;