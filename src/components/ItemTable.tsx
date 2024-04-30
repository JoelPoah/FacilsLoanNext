"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Schema } from "@/amplify/data/resource";
import EditItem from "@/src/components/EditItem";
import { Pagination } from "@aws-amplify/ui-react";
import { cookieBasedClient } from "../utils/amplify-utils";

import { getItems, getNext10Items } from "../app/_actions/actions";

type Item = {
  id: string;
  Name: string;
  Category: string | undefined | null;
  description: string | undefined | null;
};

const ItemTable = ({}: {}) => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [nextToken, setNextToken] = React.useState<string | undefined | null>(
    ""
  );

  React.useEffect(() => {
    getItems().then((data) => {
      setItems(data.items);
      setNextToken(data.nextToken);
    });
  }, []);

  const router = useRouter();
  const onAddItem = () => {
    router.push("/AddItem");
  };
  function handleNext10() {
    getNext10Items(nextToken).then((data) => {
      setItems(data.items);
      setNextToken(data.nextToken);
    });
  }

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  Items
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the items in facilities
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  onClick={onAddItem}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add Item
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Category
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only" onClick={EditItem}>
                            Edit
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {item.id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {item.Name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {item.Category}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {item.description}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <a
                              href="#"
                              className="text-indigo-400 hover:text-indigo-300"
                            >
                              Edit<span className="sr-only">, {item.Name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5} className="text-center">
                          <button
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={handleNext10}
                          >
                            Get Next 10
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTable;
