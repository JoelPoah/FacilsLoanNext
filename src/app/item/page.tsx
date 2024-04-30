import Image from "next/image";
import { cookieBasedClient, isAuthenticated } from "@/src/utils/amplify-utils";
import ItemTable from "@/src/components/ItemTable";
import Pagination from "@/src/components/pagination";
import { getNext10Items } from "../_actions/actions";

export default async function Home() {
  
  
  let nextAvailableToken: string | undefined | null = "";

  let {
    data: items,
    nextToken,
    errors,
  } = await cookieBasedClient.models.Item.list({
    selectionSet: ["id", "Name", "Category", "description"],
    authMode: "apiKey",
    limit: 10,
    nextToken: nextAvailableToken || "",
  });

  nextAvailableToken = nextToken; // Update nextAvailableToken



  return (
    <div className="mx-auto">
      {/* <ItemTable
        items={items}
        getNext10={getNext10Items}
        nextToken={nextAvailableToken}
      /> */}
      <ItemTable />
    </div>
  );
}
