import './header.css'
import about from "../test/about";
import 'bootstrap/dist/css/bootstrap.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"


const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light container justify-content-between" id="navbar-example2">
                <ul class="navbar-brand">
                    <li><a href="#"><img src="img/logo.png" alt="logo" /></a></li>
                </ul>

                {/* <!-- 네비게이션 바 --> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>               

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/about">회사소개</a></li>
                                <li><a class="dropdown-item" href="#">오시는 길</a></li>
                                <li><a class="dropdown-item" href="#">FAQ</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${context}/work/notice/retrieveBoardList.do">공지사항</a></li>
                                <li><a class="dropdown-item" href="${context}/work/generalboard/retrieveBoardList.do">자유게시판</a></li>
                                <li><a class="dropdown-item" href="${context}/work/comm/retrieveBoardList.do">커뮤니티</a></li>
                                <li><a class="dropdown-item" href="${context}/work/consulting/retrieveBoardList.do">상담신청게시판</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header