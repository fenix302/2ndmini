import React, { useEffect, useState } from "react";
import CategoryFilter from "../pages/CategoryFilter";

import "../css/FAQ.css";

const categories = [
  {
    name: "자주 묻는 질문",
    value: "all",
  },
  {
    name: "카테고리 1",
    value: "category1",
  },
  {
    name: "카테고리 2",
    value: "category2",
  },
  {
    name: "카테고리 3",
    value: "category3",
  },
];

const qnaList = [
  {
    category: "category1",
    question: "what is that ? 1",
    answer: "this is react. 1",
  },
  {
    category: "category2",
    question: "what is that ? 2",
    answer: "this is react. 2",
  },
  {
    category: "category3",
    question: "what is that ? 3",
    answer: "this is react. 3",
  },
  {
    category: "category1",
    question: "what is that ? 4",
    answer: "this is react. 4",
  },
  {
    category: "category2",
    question: "what is that ? 5",
    answer: "this is react. 5",
  },
  {
    category: "category3",
    question: "what is that ? 6",
    answer: "this is react. 6",
  },
];

const FAQ = () => {
  const [category, setCatecory] = useState("all");
  const [cardOnOff, setCardOnOff] = useState(qnaList);
  const [showList, setShowList] = useState(qnaList);

  const getQnACard = (item, index) => {
    return (
      <div className="faq-card" key={index}>
        <div
          className="faq-card-title"
          onClick={() => {
            let tempCard = cardOnOff;
            tempCard[index].show = !tempCard[index].show;
            setCardOnOff([...tempCard]);
          }}
        >
          <span className="question-mark">Q.</span>
          <span>{item.question}</span>
        </div>
        <div
          className={
            qnaList[index].show
              ? "faq-card-answer"
              : "faq-card-answer faq-card-none"
          }
        >
          <span className="answer-mark">A.</span>
          <span className="FAQ-card-answer">{item.answer}</span>
        </div>
      </div>
    );
  };

  useEffect(()=> {
    setShowList(
      qnaList.filter((item) => {
        if (category === "all") return true;
        if (category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  return (
    <div>
      <div>faq</div> 
      {/* 이부분이 현재 나오고 있는 글자  */}
      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
      <div className="fqa-parent">
        <div className="faq-list">
          {showList.map((item, index) => getQnACard(item, index))}     
        </div>
      </div>
    </div>
  );
};

export default FAQ;