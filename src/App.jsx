import { useState } from "react";
import { Button } from "@sub-module/components/ui/button";
import { Input } from "@sub-module/components/ui/input";
import { ToDOForm } from "./form";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="flex flex-col items-center ">
      {" "}
      <h1 className="text-2xl font-bold mt-5">To-Do List</h1>
      <div className="grid grid-cols-2 gap-8 w-[800px]">
        <div className="mt-10 flex gap-4">
          <ToDOForm setData={setData} />
        </div>
        <div className="mt-10 border rounded-md px-2 py-2.5">
          <ul className=" space-y-2">
            {data.map((item, index) => (
              <li key={index} className="p-2 border rounded">
                {index + 1}.<strong> {item.title}</strong>: {item.to_do}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
