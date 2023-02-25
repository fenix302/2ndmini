import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../css/main.css'

const ViewButton = () => {
  return (
    <>
      <div class="con">
        <div class="banner">
          <div class="owl-carousel">
              <div class="banner_img"> <img src="img/banner1.jpg" alt="banner1"/> </div>  
            </div>
        </div>

        <div class="content"></div>

      </div>


        
      {/* 버튼 */}
        <Link to="/BoardList">
          <Button variant="outline-secondary" size='lg'>게시판 리스트</Button>
        </Link>

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
        <Link to="/Faq">
          <Button variant="outline-secondary" size='lg'>Faq</Button>
        </Link>

    </>
  );
};

export default ViewButton;