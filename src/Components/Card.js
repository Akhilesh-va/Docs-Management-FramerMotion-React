import React from "react";
import { FiFileText } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
      className=" flex-shrink-0 relative w-60 h-72 text-white py-10 px-5 bg-zinc-900/90  rounded-[30px] overflow-hidden"
    >
      <FiFileText />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>

      {/* footer */}
      <div className="footer absolute bottom-[0] w-full  left-0">
        <div className=" flex items-center mb-3 px-8  justify-between  ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose size="1em" color="white " />
            ) : (
              <GoDownload size=".9em" color="white " />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4  ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center `}
          >
            <h3 className=" text-md font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
