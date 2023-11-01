// @mui material components
// import 'util';
// import db from "../connection/connect";

import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// components
import Carousel from "./components/Carousel";
import IntroduceText from "./components/Introduce_text";
import IntroduceDonate from "./components/Introduce_donate";
import Challenge from "./components/Challenge";
import ContainerSection from "./components/Container_Section";
import Video from "./components/Video"
import SectionPartner from "./components/SectionPartner";
import Footer from "./components/Footer";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import SignIn from "../LandingPages/SignInBasic"

// Routes
import routes from "routes";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

// classNames
import classNames from "classnames/bind";
import styles from "./Presentation.module.scss";

const cx = classNames.bind(styles);




function Presentation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {
    // Thực hiện các bước để đăng xuất người dùng
    // Ví dụ: xóa thông tin đăng nhập từ localStorage hoặc từ trạng thái ứng dụng
  
    // Xóa thông tin đăng nhập từ localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userAvatar');
  
    // Cập nhật trạng thái đăng nhập và avatar
    setIsLoggedIn(false);
    setUserAvatar("");
    navigate('/presentation')
  }; 

  useEffect(() => {
    // Kiểm tra xem có dữ liệu đăng nhập trong localStorage hay không
    const storedLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Nếu có, cập nhật trạng thái đăng nhập từ localStorage
    setIsLoggedIn(storedLoggedIn);
  }, []); 

  // Hàm này được gọi sau khi xác thực thành công và nhận URL của avatar
  const handleSuccessfulLogin = (avatarUrl) => {
    setIsLoggedIn(true);
    setUserAvatar(avatarUrl);
  };

  const handleLogin = () =>{
    navigate('/authentication/signin')
    console.log("da nhan nut dang nhap")
  }

  const handleAvatarClick = () => {
    if (isLoggedIn) {
      // Nếu người dùng đã đăng nhập, thực hiện đăng xuất
      handleLogout();
    } else {
     
    }
  };

  

  const isLoggedInFromStorage = localStorage.getItem('isLoggedIn');


  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems:"center", backgroundColor:"white"}} >
        <DefaultNavbar
          routes={routes}
          action={{
            type: 'internal',
            route: isLoggedIn ? "#" : "/authentication/signin",
            label:  isLoggedIn ? (
              <img src="" alt="Avatar" onClick={handleAvatarClick} />
            ) : "Đăng nhập",
            color: 'info',
          }}
          sticky
        />

        <div style={{width:"100%", height:'auto', marginTop:"106px"}}>
          <Carousel/>
        </div>
      </div>

      {/* {isLoggedIn && isMenuVisible && (
        <div style={{ position: "absolute", top: "100%", right: 0, backgroundColor: "white", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
        <ul>
          <li>
            <button onClick={handleLogout}>Đăng xuất</button>
          </li>          
        </ul>
      </div> */}

        {/* // <div>
        //   <button onClick={handleLogout}>Đăng xuất</button>
        // </div>
      )} */}


      {/* donate */}
      <MKBox>
        <Container style={{minHeight: "100px", marginTop: "50px"}}>
          <IntroduceText />
          <IntroduceDonate />
          <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
            <a href="/" className={cx('btn-red-bold', 'btn-join', 'size-btn')}>
              Tham gia ngay
            </a>
          </div>
        </Container>
      </MKBox> 

      {/* challenge */}
      <MKBox>
        <Container>
            <Challenge />
        </Container>
      </MKBox>
      
      {/* Section-infor */}
        <ContainerSection />
      {/* Section-video */}
      <>
        <Video />
        <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
            <a href="/" className={cx('btn-red-bold', 'btn-join', 'size-btn')}>
              Tham gia ngay
            </a>
          </div>
      </>

      {/* Section-partner */}
      <MKBox>
        <Container>
          <SectionPartner />  
        </Container>
      </MKBox>
      <div className={cx('last-banner')}>
                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/footer.png" alt="last-banner"/>
      </div>

        
      {/* Footer */}
      <Container>
          <Footer />
      </Container>

      {/* <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>  */}
    </>
  );
}

export default Presentation;
