import classNames from "classnames/bind";
import styles from "./ThuThachDat.module.scss"

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

import Introduce_donate from "pages/Presentation/components/Introduce_donate";
import Footer from "pages/Presentation/components/Footer";


const cx = classNames.bind(styles)

function ThuThachDat() {
    return ( 
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", backgroundColor:"#f0f2f5"}}>
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
                    <img className={cx('img-challenge-size')} src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/thu-thach-lua.png" alt="Thu-thach-lua"></img>
                </div>
            </div>

            <div>
                <div className={cx('row-challenge-dat')}>
                    <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/icon-thu-thach-lua.png" alt="icon-thu-thach-lua"/>
                </div>
            </div>

            <div className={cx('container-desc')}>
                <b>NHIỆT HUYẾT </b>
                - tinh thần chủ đạo mang đến nguồn năng lượng dồi dào, tiếp thêm động lực cho hành trình chinh phục Cung Đường Yêu Thương.
            </div>

            <div className={cx('container-desc2')}>
                <div className={cx('row')}>
                    <div className={cx('row-timeline')}>
                        <div style={{textAlign: 'center'}}>
                            <b>24/07/2023 - 27/08/2023 </b>
                            |
                            <span> Thử thách đã kết thúc</span>
                        </div>
                    </div>

                    <div className={cx('row-infor-event')}>
                        <div style={{marginLeft: '167px', marginRight:'114px'}}>
                            <div className={cx('item-infor')}>
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-detail-info-0.png" alt="icon-detail-infor"/>
                                <div className={cx('item-detail')}>
                                    <div>
                                        Đổi cự ly 
                                        <a className={cx('link')} href="/">tại đây </a>
                                        (Vui lòng cập nhật trước khi bắt đầu thử thách)
                                    </div>
                                </div>
                            </div>

                            <div className={cx('item-infor')}>
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-detail-info-1.png" alt="icon-detail-infor1"/>
                                <div className={cx('item-detail')}>
                                    <div>Bộ môn: đi bộ/chạy bộ và hoạt động thể dục thể thao.</div>
                                    <div>Cự ly tối thiểu: 30km.</div>
                                    <div>Địa điểm: ngoài trời hoặc trong nhà.</div>
                                    <div>Hoàn thành trong một hoặc nhiều lần.</div>
                                </div>
                            </div>

                            <div className={cx('item-infor')}>
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-detail-info-2.png" alt="icon-detail-infor2"/>
                                <div className={cx('item-detail')}>
                                    <div>Huy chương vật lý, áo thun, giấy chứng nhận điện tử, các giải thưởng khác. Vui lòng bấm "Xem chi tiết giải thưởng và thể lệ" để biết thêm chi tiết.</div>
                                </div>
                            </div>

                            <div className={cx('item-infor')}>
                                <i style={{fontSize:'14px'}}>Số tiền đóng góp của tất cả thành viên tham gia Dai-ichi Life - Cung Đường Yêu Thương 2023 cho Quỹ "Vì cuộc sống tươi đẹp" ở Thử thách Đất tối đa là 1 tỷ đồng.</i>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '24.333333333%', float:'left'}}>
                        <img style={{maxWidth:'100%'}} src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/hinh-giai-thuong-moi.png" alt="hinh-giai-thuong"/>
                    </div>
                </div>

                <div className={cx('giai-thuong')} style={{height: '137px'}}>
                    <a className={cx('btn-toggle-prize')} href="/">
                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/gift.gif" alt="gift"/>
                        <span style={{animation: 'pulse 2s infinite'}}>Xem chi tiết giải thưởng và thể lệ</span>
                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/gift.gif" alt="gift"/>
                    </a>
                
                    <div className={cx('anim')} style={{display:'flex', justifyContent:'center', marginTop:'7px'}}>
                        <a href="/" className={cx('btn-red-bold', 'btn-join', 'size-btn')}>
                            Tham gia thử thách
                        </a>
                    </div>
                </div>

            </div>     

            <div className={cx('row-target', 'float-left')} style={{width: "100%", height:'510px', backgroundColor:'#fdefef'}}>
                <div className={cx('container')} style={{marginTop: '35px', textAlign: 'center'}}>
                    <h2 style={{marginBottom:'34px'}}>Kết quả thử thách đất</h2>
                    <Introduce_donate />
                    <div style={{fontSize:'16px'}}>Hãy cùng chúng tôi đóng góp yêu thương!</div>
                </div>
            </div>

            
            <div className={cx('container-desc2')}>
                <div className={cx('giai-thuong')} style={{height: '96px', display:'flex', justifyContent:'center'}}>
                    <div className={cx('float-left')} style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                        <a href="/" className={cx('btn-red-bold', 'btn-join', 'size-btn')}>
                            Tham gia thử thách
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('last-banner')}>
                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/footer.png" alt="last-banner"/>
            </div>

            <Footer />
        </>
    )
}
export default ThuThachDat