"use client";
import * as React from 'react';
import { useRouter } from "next/navigation";
import { Schema } from "@/amplify/data/resource";
import EditItem from "@/src/components/EditItem";
import { cookieBasedClient } from '../utils/amplify-utils';
import { revalidatePath } from "next/cache";



const Pagination = () => {

    const handleClick = (): void => {
        
      };
  return (
    <div className="bg-gray-900">

      <button onClick={handleClick}> Click me</button>

    </div>
  );
};

export default Pagination;
