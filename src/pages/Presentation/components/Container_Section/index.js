import classNames from "classnames/bind";
import styles from "./Container_section.module.scss"
import Container from "@mui/material/Container";

const cx = classNames.bind(styles)

function Container_section() {
    return ( 
        <>
        <div className={cx('sec-size')}>
            <div className={cx('container-fluid', 'section-infor')}>
                {/* <div className={cx('container')}> */}
                <Container className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('list-item')}>
                            <ul>
                                <li>
                                    <a href="/">
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-thong-tin-chung.png" alt="Thông tin chung"/>
                                        THÔNG TIN CHUNG
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-info-next.png" alt="icon-next"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-hdtg.png" alt="Thông tin chung"/>
                                        HƯỚNG DẪN THAM GIA
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-info-next.png" alt="icon-next"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-bxh-ca-nhan.png" alt="Thông tin chung"/>
                                        BẢNG XẾP HẠNG CÁ NHÂN
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-info-next.png" alt="icon-next"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-bxh-clb.png" alt="Thông tin chung"/>
                                        BẢNG XẾP HẠNG CÂU LẠC BỘ
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-info-next.png" alt="icon-next"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
                {/* </div> */}
            </div>
        </div>
        </>
     );
}

export default Container_section;