import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ViewButton = () => {
  return (
    <>

        <h1>메인페이지 만들고 파일이름 바꾸기</h1>

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

    </>
  );
};

export default ViewButton;