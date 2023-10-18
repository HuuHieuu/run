import classNames from "classnames/bind";
import styles from "./CoCauGiaiThuong.module.scss"
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import routes from "routes";
import Carousel from "pages/Presentation/components/Carousel";
import Container from "@mui/material/Container"
import CoCau from "../components/CoCau";

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


        </>
     );
}

export default CoCauGiaiThuong;

