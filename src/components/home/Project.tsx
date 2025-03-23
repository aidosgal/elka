import { useState } from "react";
import { HiMinusSmall } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function Project() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="sm:px-20 px-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-20 border border-b-0 text-center border-[#EEEEEE]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-[#0061AD]"
        >
          ELKE COMPANY
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl"
        >
          Выполненные проекты
        </motion.div>
      </motion.div>
      <div className="grid sm:grid-cols-8 grid-cols-1 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative sm:col-span-2 h-full w-full"
        >
          <video
            className="h-full object-cover"
            autoPlay
            muted
            loop
            src="/left.mp4"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShow(!show)}
            className="bg-white text-black absolute bottom-5 right-5 p-3 cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {show ? (
                <motion.div
                  key="plus"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMdAdd className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="minus"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMinusSmall className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!show && (
            <motion.div
              key="content-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-3 p-7 border border-[#F0F0F0]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-gray-500 text-lg"
              >
                Монтаж трубопроводов
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-3xl"
              >
                Промышленная система трубопроводов
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-10 text-lg"
              >
                предназначенная для транспортировки жидкостей или газов. Объект включает в себя трубопроводы различного диаметра с цветовой и графической маркировкой, позволяющей идентифицировать направление потока и тип транспортируемой среды. Используемые материалы и изоляция труб обеспечивают долговечность системы и её устойчивость к внешним воздействиям.
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-lg"
              >
                <motion.div
                  whileHover={{ backgroundColor: "#f9f9f9" }}
                  className="flex gap-2 items-center py-2 px-2 border border-gray-200"
                >
                  <img src="/rect.png" className="w-[30px] h-[30px] object-cover" />
                  1 января 2025 г.
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#f9f9f9" }}
                  className="flex gap-2 items-center py-2 px-2 border border-gray-200 mt-[15px]"
                >
                  <img src="/circle.png" className="w-[30px] h-[30px] object-cover" />
                  Республика Казахстан, г. Астана
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#f9f9f9" }}
                  className="flex gap-2 items-center px-2 py-2 border border-gray-200 mt-[15px]"
                >
                  <img src="/superect.png" className="w-[30px] h-[30px] object-cover" />
                  Завод №1 Coca-Cola
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="inline-block mt-[40px]"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex bg-black gap-2 text-lg text-white px-10 py-3 items-center cursor-pointer"
                >
                  <div>Перейти к проекту</div>
                  <motion.img
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                    src="Vector_corner.png"
                    className="w-[16px] h-[16px] object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="sm:col-span-1 sm:block hidden w-full"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/graphic.png"
            className=""
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/graphic2.png"
            className="mt-5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative sm:col-span-2"
        >
          <video
            className="h-full object-cover"
            autoPlay
            muted
            loop
            src="/right.mp4"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShow(!show)}
            className="bg-white text-black absolute bottom-5 right-5 p-3 cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {!show ? (
                <motion.div
                  key="plus"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMdAdd className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="minus"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMinusSmall className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key="content-right"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-3 p-7 border border-[#F0F0F0]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-gray-500 text-lg"
              >
                Монтаж трубопроводов
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-3xl"
              >
                Промышленная система трубопроводов
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-10 text-lg"
              >
                предназначенная для транспортировки жидкостей или газов. Объект включает в себя трубопроводы различного диаметра с цветовой и графической маркировкой, позволяющей идентифицировать направление потока и тип транспортируемой среды. Используемые материалы и изоляция труб обеспечивают долговечность системы и её устойчивость к внешним воздействиям.
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-lg"
              >
                <motion.div
                  whileHover={{ backgroundColor: "#f9f9f9" }}
                  className="flex gap-2 items-center py-2 px-2 border border-gray-200"
                >
                  <img src="/rect.png" className="w-[30px] h-[30px] object-cover" />
                  1 января 2025 г.
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#f9f9f9" }}
                  className="flex gap-2 items-center py-2 px-2 border border-gray-200 mt-[15px]"
                >
                  <img src="/circle.png" className="w-[30px] h-[30px] object-cover" />
                  Республика Казахстан, г. Астана
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#f9f9f9" }}
                  className="flex gap-2 items-center px-2 py-2 border border-gray-200 mt-[15px]"
                >
                  <img src="/superect.png" className="w-[30px] h-[30px] object-cover" />
                  Завод №1 Coca-Cola
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="inline-block mt-[40px]"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex bg-black gap-2 text-lg text-white px-10 py-3 items-center cursor-pointer"
                >
                  <div>Перейти к проекту</div>
                  <motion.img
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                    src="Vector_corner.png"
                    className="w-[16px] h-[16px] object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
