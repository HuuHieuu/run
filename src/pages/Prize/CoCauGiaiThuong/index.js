import classNames from "classnames/bind";
import styles from "./CoCauGiaiThuong.module.scss"
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import routes from "routes";
import Carousel from "pages/Presentation/components/Carousel";
import Container from "@mui/material/Container"
import CoCau from "./components/CoCau";
import CoCauMoiThuThach from "./components/CoCauMoiThuThach";
import KhamPhaYN from "./components/KhamPhaYN";
import Footer from "pages/Presentation/components/Footer";

const cx = classNames.bind(styles)

function CoCauGiaiThuong() {
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
            

            <Container>
                <CoCau />
            </Container>

            <Container style={{marginTop: '60px'}}>
                <CoCauMoiThuThach />
            </Container>
            
            <Container>
                <KhamPhaYN />
            </Container>

            <div className={cx('last-banner')}>
                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/22/bg-tp-png.png" alt="last-banner"/>
            </div>

            <Footer /> 
        </>
     );
}

export default CoCauGiaiThuong;

