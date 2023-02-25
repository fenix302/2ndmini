import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../css/main.css'

const ViewButton = () => {
  return (
    <>
    {/* 배너 */}
      <div class="con">
        <div class="banner">
          <div class="owl-carousel">
              <div class="banner_img"> <img src="img/banner1.jpg" alt="banner1"/> </div>  
            </div>
        </div>
      </div>

      {/* 본문 */}
      <div class="content">
        <div class="best_group">
          {/* 컨텐츠 명 */}
          <div class="group_name">
            <p class="con_name">BEST</p>
          </div>

          <div class="inner_group">
            {/* 컨텐츠1 */}
            <div class="item1">
	            <div class="img">
	              <a><img src="img/item1.jpg" /></a>
	            </div>
              <div class="item">
                <a><p class="item_name">3chain drop earring</p></a>
                <p class="item_ann">각기 다른 세가지 체인이 믹스되어 찰랑거리며 반짝이는 것이 포인트인 드롭 귀걸이</p>
              </div>
            </div>

            {/* 컨텐츠2 */}
            <div class="item2">
	            <div class="img">
	              <a><img src="img/item1.jpg" /></a>
	            </div>
              <div class="item">
                <a><p class="item_name">3chain drop earring</p></a>
                <p class="item_ann">각기 다른 세가지 체인이 믹스되어 찰랑거리며 반짝이는 것이 포인트인 드롭 귀걸이</p>
              </div>
            </div>

            {/* 컨텐츠3 */}
            <div class="item4">
	            <div class="img">
	              <a><img src="img/item1.jpg" /></a>
	            </div>
              <div class="item">
                <a><p class="item_name">3chain drop earring</p></a>
                <p class="item_ann">각기 다른 세가지 체인이 믹스되어 찰랑거리며 반짝이는 것이 포인트인 드롭 귀걸이</p>
              </div>
            </div>

            {/* 컨텐츠4 */}
            <div class="item4">
	            <div class="img">
	              <a><img src="img/item1.jpg" /></a>
	            </div>
              <div class="item">
                <a><p class="item_name">3chain drop earring</p></a>
                <p class="item_ann">각기 다른 세가지 체인이 믹스되어 찰랑거리며 반짝이는 것이 포인트인 드롭 귀걸이</p>
              </div>
            </div>                    
          </div>
        </div>
      </div>

      {/* 광고 */}
      <div class="con">
        <div class="add">
          <div class="owl-carousel">
              <div class="add_img"> <img src="img/add1.jpg" alt="add1"/> </div>  
            </div>
        </div>
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