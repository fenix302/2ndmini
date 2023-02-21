// Login.js

/* 로그인 페이지 */

import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { TextField } from "@rmwc/textfield"; // React Material 디자인 TextField 컴포넌트입니다.
import { Button } from "@rmwc/button"; // React Material 디자인 Button 컴포넌트 입니다.
import "@rmwc/button/styles"; // React Material Button 디자인 CSS 입니다.
import "@rmwc/textfield/styles"; // React Material TextField 디자인 CSS 입니다.
import "../css/login.css"; // 이 페이지의 커스텀 디자인을 위한 CSS 입니다.
// import { Button } from 'reactstrap';


const Login2 = () => {
  const history = useHistory(); // 라우팅을 위한 히스토리 객체
  const [formData, setFormData] = useState(null);
  const handleInputChange = (e) => {
    // 아이디와 비밀번호가 실시간으로 바뀔때마다, state에 값이 업데이트 됩니다.
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // 로그인 버튼을 눌렀을때 동작합니다.
    fetch("http://localhost:3000/api/login", {
      headers: {
        "Content-Type": "application/json", // 파일업로딩이 없으니 json 타입입니다.
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        formData, // formData에는 아이디와 비밀번호가 들어가 있습니다.
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.success === true) {
          // 서버로부터 true가 나오면, 2페이지로 이동하고, 환영합니다 메세지를 띄웁니다.
          history.push("/management");
        }

        alert(data.msg);
      });
  };

  // 아래는 JSX 껍데기
  return (
    <div className="wrapper">
      <div className="column">
        아이디:&nbsp;
        <TextField
          outlined
          label="아이디"
          className="userId loginInput"
          name="userId"
          onChange={handleInputChange}
        />
        {/* <Link to="/management"> */}
        <Button label="로그인" raised onClick={handleSubmit} />
        {/* </Link> */}
      </div>

      <div className="column">
        &nbsp;비밀번호:
        <TextField
          outlined
          label="비밀번호"
          className="userPw loginInput"
          name="userPw"
          type="password"
          onChange={handleInputChange}
        />
        <Link to="/register">
          <Button label="회원 가입" raised />
        </Link>
      </div>
    </div>
  );
};

export default Login2;
