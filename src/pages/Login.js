import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/login.css";

const Login = () =>  {

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
        fetch("http://localhost:3000/login", {
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

    
    return (
        <>
            <style type="text/css">
                {`
                    .btn-flat {
                        background-color: purple;
                        color: white;
                    }

                    .btn-join{
                        background-color: orange;
                        color: white;
                    }
                `}
            </style>

            <Container fluid="sm">
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1 className='login_txt'>로그인</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Control type="id" placeholder="아이디를 입력하세요" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                            </Form.Group>
                            
                            <div className="d-grid gap-2 mb-3">
                                <Button variant="primary" size='lg' onClick={handleSubmit}><Link to={"/management"}>로그인</Link></Button>
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