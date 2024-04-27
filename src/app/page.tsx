import Image from "next/image";
import { cookieBasedClient, isAuthenticated } from "../utils/amplify-utils";
import Post from "../components/Post";
import {deletePost} from "@/src/app/_actions/actions";

export default async function Home() {

  
  const { data: posts } = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: "apiKey",
  });

  console.log("post: ", posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-xl  m-auto">List of all titles</h1>
      {posts?.map(async (post, idx) => (

      <Post idx={idx} onDelete={deletePost} post={post} isSignedIn={ await isAuthenticated()}/>

      ))}
    </main>
  );
}
