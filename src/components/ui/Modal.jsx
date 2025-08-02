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
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-lime-400 p-3 rounded-lg">
                <Icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            <p className="text-gray-700">{content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
