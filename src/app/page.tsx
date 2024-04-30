import Image from "next/image";
import { cookieBasedClient, isAuthenticated } from "../utils/amplify-utils";
import Post from "../components/Post";

import Table from "@/src/components/Table";

export default async function Home() {
  const {data:items} = await cookieBasedClient.models.Item.list({
    selectionSet: ["Name", "Category"],
    authMode: "apiKey",
  });

  // console.log("Response: ", response);


  // const items = response.data.listItems.items.filter(item => item !== null);

  return (
    <div className="bg-white h-screen">
      <Table />

      {items?.map(async (item, idx) => (
        <h1>
          {item.Name}
          {item.Category}
        </h1>
))}
    </div>

    // <main className="flex min-h-screen flex-col items-center justify-between p-24 w-1/2 m-auto">
    //   <h1 className="text-xl  m-auto">List of all titles</h1>

    // </main>
  );
}
