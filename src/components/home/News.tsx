import { useState } from "react";
import { motion } from "framer-motion";

interface NewsType {
  image_url: string;
  title: string;
  content: string;
  date: string;
}

export default function News() {
  const [news] = useState<NewsType[]>([
    {
      image_url: "/news1.png",
      title: "Coca-Cola Europacific Partners внедряет новые технологии на заводах в Германии",
      content: "Coca-Cola Europacific Partners продолжает инвестировать в улучшение производственных мощностей. На трёх заводах компании в Германии началась масштабная модернизация...",
      date: "9 января 2025 г.",
    },
    {
      image_url: "/news2.png",
      title: "Coca-Cola Europacific Partners внедряет новые технологии на заводах в Германии",
      content: "Coca-Cola Europacific Partners продолжает инвестировать в улучшение производственных мощностей. На трёх заводах компании в Германии началась масштабная модернизация...",
      date: "9 января 2025 г.",
    },
    {
      image_url: "/news3.png",
      title: "Coca-Cola Europacific Partners внедряет новые технологии на заводах в Германии",
      content: "Coca-Cola Europacific Partners продолжает инвестировать в улучшение производственных мощностей. На трёх заводах компании в Германии началась масштабная модернизация...",
      date: "9 января 2025 г.",
    },
    {
      image_url: "/news4.png",
      title: "Coca-Cola Europacific Partners внедряет новые технологии на заводах в Германии",
      content: "Coca-Cola Europacific Partners продолжает инвестировать в улучшение производственных мощностей. На трёх заводах компании в Германии началась масштабная модернизация...",
      date: "9 января 2025 г.",
    },
  ]);

  return (
    <div className="sm:px-20 px-5 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-[#0061AD] text-xl">ELKE COMPANY</div>
        <div className="text-4xl">Новости и события</div>
      </motion.div>
      <div className="flex flex-wrap gap-5 mt-10">
        {news.map((newss, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border border-[#F0F0F0] sm:w-[400px] w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={newss.image_url} className="w-full h-[300px] object-cover" />
            </motion.div>
            <div className="flex">
              <div className="p-5">
                <div className="text-2xl">{newss.title}</div>
                <div className="mt-5">{newss.content}</div>
              </div>
              <div className="border-l border-[#F0F0F0] flex flex-col justify-between items-center py-5 w-16">
                <div className="rotate-90 tracking-wide text-center h-20 flex my-auto items-center">
                  {newss.date.split(" ").join("\u00A0")}
                </div>
                <motion.img 
                  whileHover={{ y: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/news-arrow.png" 
                  className="w-[20px] mt-auto" 
                /> 
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
