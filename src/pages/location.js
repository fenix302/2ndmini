import React, { useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import ReactCarousel from '../test/carousel';
import '../css/location.css'

const {kakao} = window;

const Kakaomap = () => {
    
    useEffect(()=> {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
      const mapOption = { 
               center: new kakao.maps.LatLng(37.567283765403744, 126.97895774407993), // 지도의 중심좌표
               level: 3 // 지도의 확대 레벨
      };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);

      var markerPosition = new kakao.maps.LatLng(
         37.567283765403744,
         126.97895774407993
      );
      var marker = new kakao.maps.Marker({
         position: markerPosition,
      });

      marker.setMap(map);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    }, []);
    
    return (
        <div className='location_box'>
          <br />
          <Container fluid="sm">
            <h1>&nbsp;오시는 길&nbsp;</h1>
          </Container>
          <br />
          
          <ReactCarousel />
          <br />

          <div id="map" style={{width:"1300px",height:"350px"}}></div>
      
          <br />
          <br />
          <br />
          <Container fluid="sm">
            <Table bordered>
              <tbody>
                <tr>
                  <th className='table-light' scope="row">
                    주소
                  </th>
                  <td>
                    서울특별시 중구 무교로 15 남강타워빌딩 2층
                  </td>
                </tr>
                <tr>
                  <th className='table-light' scope="row">
                    전화
                  </th>
                  <td>
                    02-2096-0160
                  </td>
                </tr>
                <tr>
                  <th className='table-light' scope="row">
                    팩스
                  </th>
                  <td>
                    02-3705-0030
                  </td>
                </tr>
                <tr>
                  <th className='table-light' scope="row">
                    지하철
                  </th>
                  <td>
                  - 지하철 1호선 시청역 4번 출구 방향 <br />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
    );

    
}

export default Kakaomap;