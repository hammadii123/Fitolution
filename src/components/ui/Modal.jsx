/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modal = {
  hidden: { scale: 0.9, opacity: 0, y: 20 },
  visible: { scale: 1, opacity: 1, y: 0 },
  exit: { scale: 0.9, opacity: 0, y: 20 },
};

const Modal = ({ open, onClose, title, icon: Icon, content }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit={"hidden"}
          onClick={onClose}
        >
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            exit={"exit"}
            transition={{ duration: 0.3 }}
            className="bg-green-300 max-w-lg w-full rounded-xl p-6 relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute  top-3 right-3 text-gray-800  transition-transform duration-200 ease-in-out hover:-rotate-45 hover:scale-110 mt-4"
              onClick={onClose}
            >
              <X className="w-8 h-8" /> 
            </button>

            <div className="flex items-center gap-4 mb-4 ">
              <div className="bg-lime-300 p-3 rounded-lg">
                <Icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-3xl font-bold ">{title}</h3>
            </div>
            <ul className="list-disc p-5">

            {content.map((items,index)=>(
              <li className="text-xl hover:scale-105 hover:transition-all hover:duration-150 hover:cursor-pointer font-semibold my-2" key={index}>{items}</li>
              
            ))}
            </ul>



            {/* <p className="text-gray-700">{content}</p> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;