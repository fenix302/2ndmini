import React from "react";
import { Link } from "react-router-dom";

const ViewButton = () => {
  return (
    <>
      <Link to="/Insert">
        <button>게시글 등록</button>
      </Link>
      <Link to="/View">
        <button>최근 게시글 보기</button>
      </Link>
      <Link to="/Update">
        <button>최근 게시글 수정</button>
      </Link>
      <Link to="/Delete">
        <button>최근 게시글 삭제</button>
      </Link>
      <Link to="/location">
        <button>카카오 지도</button>
      </Link>
      <Link to="/about">
        <button>회사 소개</button>
      </Link>
      <Link to="/Login">
        <button>로그인</button>
      </Link>
    </>
  );
};

export default ViewButton;