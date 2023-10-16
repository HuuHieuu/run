/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
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

// classNames
import classNames from "classnames/bind";
import styles from "./Presentation.module.scss";

const cx = classNames.bind(styles);

function Presentation() {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems:"center", backgroundColor:"white"}} >
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/authentication/signin",
            label: "Đăng nhập",
            color: "info",
          }}
          sticky
        />

        <div style={{width:"100%", height:'auto', marginTop:"106px"}}>
          <Carousel/>
        </div>
      </div>


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
