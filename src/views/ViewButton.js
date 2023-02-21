import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ViewButton = () => {
  return (
    <>
        <Link to="/Insert">
          <Button variant="outline-secondary" size='lg'>게시글 등록</Button>
        </Link>
        <Link to="/View">
          <Button variant="outline-secondary" size='lg'>최근 게시글 보기</Button>
        </Link>
        <Link to="/Update">
          <Button variant="outline-secondary" size='lg'>최근 게시글 수정</Button>
        </Link>
        <Link to="/Delete">
          <Button variant="outline-secondary" size='lg'>최근 게시글 삭제</Button>
        </Link>
        <Link to="/location">
          <Button variant="outline-secondary" size='lg'>카카오 지도</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline-secondary" size='lg'>회사 소개</Button>
        </Link>
        <Link to="/Login">
          <Button variant="outline-secondary" size='lg'>로그인</Button>
        </Link>
    </>
  );
};

export default ViewButton;