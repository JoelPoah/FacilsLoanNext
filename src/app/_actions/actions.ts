"use server";

import { data } from "@/amplify/data/resource";
import { cookieBasedClient } from "@/src/utils/amplify-utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePost(id:string){
    const {data,errors} = await cookieBasedClient.models.Post.delete({
        id
    })

    console.log("Delete Post Data", data,errors);
    revalidatePath
}

export async function createPost(formData:FormData){

    const {data} = await cookieBasedClient.models.Post.create({

        title:formData.get("title")?.toString() || "",
    })

    console.log("Create Post Data",data )

    redirect("/");
}