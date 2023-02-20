import React, { useEffect } from 'react';
import './location.css'

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
            <h1>&nbsp;찾아오시는 길&nbsp;</h1>
            <br />
            <div id="map" style={{width:"500px",height:"350px"}}></div>
        </div>
    );

    
}

export default Kakaomap;