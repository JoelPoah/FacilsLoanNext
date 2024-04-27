import React from "react";
import { createPost } from "@/src/app/_actions/actions";

const Add = () => {
  return <div>
    <form action={createPost} className="p-4 flex flex-col items-center gap-4">

        <input type="text" name="title" id="title" className="bg-blue-500">
        </input>

        <button type="submit" className="text-white bg-teal-600 rounded p-4">
            Submit

        </button>


    </form>
  </div>;
};

export default Add;
