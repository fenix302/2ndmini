import './header.css'
import about from "../test/about";
import 'bootstrap/dist/css/bootstrap.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light container justify-content-between" id="navbar-example2">
                <ul class="navbar-brand">
                    <li><a href="/"><img src="img/logo.png" alt="logo" /></a></li>
                </ul>

                {/* <!-- 네비게이션 바 --> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>               

                <div class="collapse navbar-collapse navigation_bar" id="navbarSupportedContent">
                    <ul class="navbar-nav nav_right">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to="/about">
                                        <a class="dropdown-item">회사소개</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/location">
                                        <a class="dropdown-item">오시는 길</a>
                                    </Link>
                                </li>
                                <li><a class="dropdown-item" href="#">FAQ</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Course</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to="/LectureList">
                                        <a class="dropdown-item">강좌 목록</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${context}/work/notice/retrieveBoardList.do">공지사항</a></li>
                                <Link to="/BoardList">
                                        <a class="dropdown-item">자유게시판</a>
                                    </Link>
                                <li><a class="dropdown-item" href="${context}/work/comm/retrieveBoardList.do">커뮤니티</a></li>
                                <li><a class="dropdown-item" href="${context}/work/consulting/retrieveBoardList.do">상담신청게시판</a></li>
                            </ul>
                        </li>  

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to="/">
                                        <a class="dropdown-item">무언가 생기겠죠?</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>                      
                    </ul>

                    
                </div>

                {/* 로그인 */}
                <div class="collapse navbar-collapse navigation_bar" id="navbarSupportedContent">
                    <ul class="navbar-nav nav_right">                    
                        <li class="nav-item dropdown login">
                            <Link to="/Login">
                                <a class="nav-link login_link" href="#" role="button">로그인</a>
                            </Link>                         
                        </li>                        
                    </ul>                    
                </div>

            </nav>
        </header>
    )
}

export default Header
