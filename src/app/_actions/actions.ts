"use server";

import { Schema, data } from "@/amplify/data/resource";
import { cookieBasedClient } from "@/src/utils/amplify-utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteComment(formData:FormData){
    const id = formData.get("id")?.toString();
    if(!id) return;
    const {data:deletedComment} = 
    await cookieBasedClient.models.Comment.delete({
        id,
    });
    console.log("deleted",deletedComment);
}

export async function addComment(
    content:string,
    post: Schema["Post"],
    paramsId:string
){
    if(content.trim().length===0) return;
    const {data:comment} = await cookieBasedClient.models.Comment.create({
        post,
        content
    })
    console.log("got comment",comment);
    revalidatePath(`/posts/${paramsId}`);
}

export async function deletePost(id:string){
    const {data,errors} = await cookieBasedClient.models.Post.delete({
        id
    })

    console.log("Delete Post Data", data,errors);
    revalidatePath("/");
}


export async function createPost(formData:FormData){

    const {data} = await cookieBasedClient.models.Post.create({

        title:formData.get("title")?.toString() || "",
    })

    console.log("Create Post Data",data )

    redirect("/");
}