"use client";
import TabsComponents from "@/components/tabs/TabsComponents";
import React from "react";

const TabsPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>Tabs Page</h1>
      <br />
      <br />

      <TabsComponents items={items} />
    </div>
  );
};

export default TabsPage;

const items: any = [
  {
    title: "Tab 1",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title test 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eaque fugit hic voluptatibus aliquam necessitatibus corporis
          accusantium in qui, amet fugiat odit nesciunt dolor unde ab
          perferendis, sint odio perspiciatis similique cumque commodi at
          impedit accusamus vero! Sunt exercitationem repellat debitis
          voluptatibus animi! Quam consequuntur accusamus aut possimus suscipit
          laborum.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title test 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eaque fugit hic voluptatibus aliquam necessitatibus corporis
          accusantium in qui, amet fugiat odit nesciunt dolor unde ab
          perferendis, sint odio perspiciatis similique cumque commodi at
          impedit accusamus vero! Sunt exercitationem repellat debitis
          voluptatibus animi! Quam consequuntur accusamus aut possimus suscipit
          laborum.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title test 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eaque fugit hic voluptatibus aliquam necessitatibus corporis
          accusantium in qui, amet fugiat odit nesciunt dolor unde ab
          perferendis, sint odio perspiciatis similique cumque commodi at
          impedit accusamus vero! Sunt exercitationem repellat debitis
          voluptatibus animi! Quam consequuntur accusamus aut possimus suscipit
          laborum.
        </p>
      </div>
    ),
  },
];
