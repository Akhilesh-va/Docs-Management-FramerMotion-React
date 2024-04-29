import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref =useRef(null);
  const data = [
    {
      desc: " This is 1st components",
      filesize: "0.8mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: " This is 2nd components",
      filesize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Can't Download", tagColor: "blue" },
    },
    {
      desc: " This is 3rd components",
      filesize: "45mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
   
    {
      desc: " This is 5th components",
      filesize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (

      <div ref={ref} className=" flex gap-10 p-5 flex-wrap fixed top-0 left-0 z-[3] w-full h-full ">
       {data.map((item,index)=>(
        <Card data={item} reference={ref} />
       ))}
      </div>
    
  );    
}

export default Foreground;
