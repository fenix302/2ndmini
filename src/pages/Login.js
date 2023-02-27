import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/login.css";
import axios from 'axios';
import { Input } from 'reactstrap';

const Login = () =>  {


  const fn_signIn = () => {
    var submitYN = false;

    const memberId = document.getElementById('memberId').value;
    const memberPw = document.getElementById('memberPw').value;

    
    
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
      var submitYN = true;
      
      const form = new FormData()
        form.append('memberId', memberId)
        form.append('memberPw', memberPw)
      
        console.log("click login");

			axios.post('http://localhost:9008/loginAction.do', 
          form
        ,{ 
          headers:{ 
           'Content-type': 'application/json', 
             } 
        }
        )
      .then((res) => {
          console.log(res.data);

          if(res.data != "N"){
            alert(res.data + "회원님, 환영합니다");
            document.location.href="/management"
          }else{
            alert("회원정보 가입을 해주세요");
            document.location.href = "/login";
          }
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
                                <Input type="id" id="memberId" placeholder="아이디를 입력하세요" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Input type="password" id="memberPw" placeholder="비밀번호를 입력하세요" />
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