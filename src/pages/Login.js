import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/login.css";
import axios from 'axios';

const Login = () =>  {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
    const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  var submitYN = false;
  function fn_signIn(){

		if(document.getElementById("memberId").value.length < 1){
			alert("아이디를 입력하세요.");
			document.getElementById("memberId").focus()
			return;
		}
		
		if(document.getElementById("memberPw").value.length < 1){
			alert("비밀번호를 입력하세요.");
			document.getElementById("memberPw").focus()
			return;
		}

		if(!submitYN){
			submitYN = true;
		
      console.log("click login");
      console.log("ID : ", inputId);
      console.log("PW : ", inputPw);

			axios({
				 url :"http://localhost:9008/loginAction.do"
				,type:"post"
				,data:{
          id : inputId,
          passwd : inputPw,
        }
      })
        .then((res) => {
          console.log(res.data);
          if(res.data != "N"){
            alert(res.data + "회원님, 환영합니다");
            document.location.href="/"
          }else{
            alert("회원정보 가입을 해주세요");
          }
        document.location.href = "/login";
        })
          .catch()
        
    }
		
	}


    
    return (
        <>

            <Container fluid="sm">
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1 className='login_txt'>로그인</h1>
                        <Form id='loginForm'>
                            <Form.Group className="mb-3">
                                <Form.Control type="id" id="memberId" placeholder="아이디를 입력하세요" value={inputId} onChange={handleInputId}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="password" id="memberPw" placeholder="비밀번호를 입력하세요" value={inputPw} onChange={handleInputPw}/>
                            </Form.Group>
                            
                            <div className="d-grid gap-2 mb-3">
                                <Button variant="primary" size='lg' onClick={fn_signIn}>로그인</Button>
                                <Button variant="secondary" size='lg'><Link to={"/register"}>회원가입</Link></Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;