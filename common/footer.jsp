    <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <c:set var ="context"><%=request.getContextPath()%></c:set>
    <meta charset="utf-8">
    <title>MultiShop - Online Shop Website Template</title>
    
    <!-- Channel Plugin Scripts -->
 <script>
    (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.")}var ch=function(){ch.c(arguments)};ch.q=[];ch.c=function(args){ch.q.push(args)};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x)}}if(document.readyState==="complete"){l()}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l)}})();
  
    ChannelIO('boot', {
      "pluginKey": "db554ba4-b12a-4287-b247-1a88c47121aa"
    });
  </script>
<!-- End Channel Plugin -->
    
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">
      

    <!-- Favicon -->
    <link href="${context}/img/logo.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">  

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">


    <link href="${context}/css/pages/footer.css" rel="stylesheet">
    <link rel="stylesheet" href="${context}/css/bootstrap.css">
    <script src="https://kit.fontawesome.com/05eac13e8d.js" crossorigin="anonymous"></script>
    <script text="text/javascript" src="${context}/js/bootstrap.min.js"></script>
<!-- Footer Start -->
    <footer>
        <div class="container f-container">
          <div class="row">
            <div class="col-md-3 footer-column f-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title f-title">About Us</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">회사 소개</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">오시는 길</a>
              </ul>
            </div>
            <div class="col-md-3 footer-column f-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title f-title">Customer</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">QNA</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">상담신청 및 문의</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-column f-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title f-title">Board</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">공지사항</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">자유게시판</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link f-subtitle" href="#">커뮤니티 게시판</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-column f-column">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <span class="footer-logo"><a href="#"><img class="f-logo" src="${context}/img/logo.png" alt="logo"></a></span>
                  </li>
                </ul>
              </div>
          </div>
      
          
          <div class="row">
            <div class="col-md-4 box text-left">
              <span class="copyright quick-links f-bottom">Follow Us</span>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                  <i class="fa-brands fa-pinterest"></i>
                </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 box text-left">
                <span class="copyright quick-links f-bottom">We Accept</span>
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa-brands fa-cc-mastercard"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa-brands fa-cc-visa"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa-brands fa-cc-paypal"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa-brands fa-cc-apple-pay"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa-brands fa-cc-amazon-pay"></i>
                    </a>
                  </li>
                </ul>
            </div>
            <div class="col-md-4 box text-center">
              <ul class="list-inline quick-links">
                <li class="list-inline-item" style="padding-top: 9%; font-size: 16px">
                  <a href="#">@2023 strange store</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
</body>
</html>