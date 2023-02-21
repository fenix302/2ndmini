// Register.js

/* 회원가입  페이지 */
import React, { useRef, useState, useEffect } from "react"; // state관리와, ref 바인딩을 위한 hooks 라이브러리 임포트
import { post } from "axios"; // 비동기 요청을 위한 axios 라이브러리
import { Link, useHistory, useLocation, useParams } from "react-router-dom"; // 라우팅을 위한 라우터 라이브러리
import { TextField } from "@rmwc/textfield"; // React Material 디자인 TextField 컴포넌트입니다.
import { Button } from "react-bootstrap"; // React Material 디자인 Button 컴포넌트 입니다.
import { Icon } from "@rmwc/icon"; // 프로필 아이콘을 위한 컴포넌트 추가
import "@rmwc/button/styles"; // React Material Button 디자인 CSS 입니다.
import "@rmwc/textfield/styles"; // React Material TextField 디자인 CSS 입니다.
import "@rmwc/icon/styles"; // 아이콘 디자인 CSS입니다.
import "../css/register.css"; // 회원가입 페이지 커스텀 디자인 CSS 입니다.

const Register = (props) => {
  // 회원가입 페이지입니다. props는 회원수정인지 판단하기 위하여 매개변수로 받습니다. (info)
  const location = useLocation();
  const history = useHistory();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    profile: null,
    userId: "",
    userName: "",
    userPassword: "",
    userPassword2: "",
    userMail: "",
    userPhone: "",
  });

  const [tempFormData, setTempFormData] = useState({
    profile: null,
    userId: "",
    userName: "",
    userPassword: "",
    userPassword2: "",
    userMail: "",
    userPhone: "",
  });

  const profileRef = useRef();
  const iconRef = useRef();
  const previewRef = useRef();
  /* 위에는 변수선언부분들 */

  // 프로필 로딩, 페이지 로드시 한번만 실행합니다.
  useEffect(() => {
    if (location.state) {
      // 회원수정페인지 확인하는 if문
      fetch(
        `http://localhost:3000/api/user/update/${location.state.idx}`,
        {
          method: "GET",
        }
      )
        .then((data) => data.json())
        .then((json) => {
          setTempFormData({
            profile: json[0][5],
            userId: json[0][6],
            userName: json[0][1],
            userPassword: json[0][2],
            userPassword2: json[0][2],
            userMail: json[0][3],
            userPhone: json[0][4],
          });
          setFormData({
            profile: json[0][5],
            userId: json[0][6],
            userName: json[0][1],
            userPassword: json[0][2],
            userPassword2: json[0][2],
            userMail: json[0][3],
            userPhone: json[0][4],
          });
        });

      previewRef.current.style.display = "block";
      iconRef.current.style.display = "none";
    }
  }, []);

  const handleProfileClick = () => {
    // 예쁜 버튼을 사용하기위해, 실제로 프로필사진을 업로드하는 버튼은 숨겨두고 이쁜버튼을누르면 숨겨진버튼이 클릭되도록 하는 부분입니다.
    profileRef.current.click();
  };

  const handleProfile = (event) => {
    // 프로필사진을 올리면, 미리보기에 사진이 보여지는 부분입니다.
    setProfile(URL.createObjectURL(event.target.files[0]));

    previewRef.current.style.display = "block";
    iconRef.current.style.display = "none";

    setFormData({
      ...formData,
      profile: event.target.files[0], // API에 요청을 날릴 Form State에 정보를 추가합니다.
    });
  };

  const handleValueChange = (event) => {
    // API 요청에 날릴 Form state에 정보를 추가합니다.
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const registerSubmit = (event) => {
    // 회원가입버튼을 누르면 동작합니다.
    event.preventDefault();
    if (formData.userPassword !== formData.userPassword2) {
      // 비밀번호가 서로 다른지 체크하는 validation 코드입니다.
      alert("비밀번호를 다시 확인 해주세요");
      return;
    }

    const reqFormData = new FormData(); // 파일이 업로드되는 폼이기때문에, multipart/form-data로 전송해야합니다.
    reqFormData.append("profile", formData.profile); // 입력한정보들을 폼데이터에 넣어줍니다.
    reqFormData.append("userId", formData.userId);
    reqFormData.append("userName", formData.userName);
    reqFormData.append("userPassword", formData.userPassword);
    reqFormData.append("userMail", formData.userMail);
    reqFormData.append("userPhone", formData.userPhone);
    const config = {
      headers: {
        "content-type": "multipart/form-data", // 헤더설정
      },
    };

    fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: reqFormData,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success === true) {
          // api서버에서, true가 오면, 회원가입 축하메세지가 나오며, 기본 슬라이드1페이지로 넘어갑니다.
          alert(json.msg);
          history.push("/");
        }
      });
  };

  const updateSubmit = (event) => {
    // 이부분은 회원수정버튼눌렀을때 동작합니다. 회원가입과 동일합니다.
    event.preventDefault();
    if (formData.userPassword !== formData.userPassword2) {
      alert("비밀번호를 다시 확인 해주세요");
      return;
    }
    const reqFormData = new FormData();
    reqFormData.append("profile", formData.profile);
    reqFormData.append("userId", formData.userId);
    reqFormData.append("userName", formData.userName);
    reqFormData.append("userPassword", formData.userPassword);
    reqFormData.append("userMail", formData.userMail);
    reqFormData.append("userPhone", formData.userPhone);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    post(
      `http://localhost:3000/api/user/update/${location.state.idx}`,
      reqFormData,
      config
    ).then((res) => {
      if (res.data.success === true) {
        alert(res.data.msg);
        history.push("/management"); // 단 회원수정을했을때는 회원관리페이지로 이동합니다.
      }
    });
  };

  //아래부분들은 JSX 껍데기입니다.
  return (
    <div className="wrapper">
      <div className="column">
        <h1 className="registerTitle">회원가입</h1>
      </div>
      <div className="column">
        <Icon icon="account_circle" className="profile_icon" ref={iconRef} />
        <img
          src={profile ? profile : tempFormData.profile}
          alt="profile_preview"
          className="profile_preview"
          ref={previewRef}
        />
        <Button
          variant="info"
          className="profile_button"
          onClick={handleProfileClick}>
            회원사진 등록
        </Button>
        <input
          type="file"
          className="hidden_file"
          hidden
          onChange={handleProfile}
          ref={profileRef}
        />
      </div>
      <div className="column_reverse column">
        <TextField
          outlined
          label="이름"
          className="userName registerInput"
          placeholder="공백없이 입력해주세요."
          onChange={handleValueChange}
          name="userName"
          value={formData.userName ? formData.userName : ""}
        />
        <TextField
          outlined
          label="이메일"
          className="userEmail registerInput"
          placeholder="이메일 주소를 입력해주세요."
          type="email"
          onChange={handleValueChange}
          name="userMail"
          value={formData.userMail ? formData.userMail : ""}
        />
        <TextField
          outlined
          label="휴대전화"
          className="userPhone registerInput"
          placeholder="-없이 숫자만 입력해주세요."
          onChange={handleValueChange}
          name="userPhone"
          value={formData.userPhone ? formData.userPhone : ""}
        />
        <TextField
          outlined
          label="아이디"
          className="userId registerInput"
          placeholder="공백없이 입력해주세요."
          onChange={handleValueChange}
          name="userId"
          value={formData.userId ? formData.userId : ""}
        />
        <TextField
          outlined
          label="비밀번호"
          className="userPassword registerInput"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleValueChange}
          name="userPassword"
        />
        <TextField
          outlined
          label="비밀번호 확인"
          className="userPassword2 registerInput"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleValueChange}
          name="userPassword2"
        />
      </div>
      <div className="column">
        <Button variant="success" className={props.info ? "registerButton updateButton" : "registerButton"} type="button" onClick={props.info ? updateSubmit : registerSubmit}>
          {props.info ? "회원 정보 수정" : "회원 가입"}
        </Button>
        {!props.info ? (
          <Link to="/login">
            <Button variant="warning" className="registerCancleButton">
              회원가입 취소
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Register;
