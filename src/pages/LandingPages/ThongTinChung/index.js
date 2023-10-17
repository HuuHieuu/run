// default-navbar
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import Carousel from "pages/Presentation/components/Carousel";
import routes from "routes";


import classNames from "classnames/bind";
import styles from "./ThongTinChung.module.scss";

// material
import Container from "@mui/material/Container";

//img
import imgSymbol from 'assets/images/icon5symbol.png';
import Footer from "pages/Presentation/components/Footer";

const cx = classNames.bind(styles)


function ThongTinChung() {
    return ( 
        <>
            {/* header */}
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
            {/* carousel */}
                <div style={{width:"100%", height:'auto', marginTop:"106px"}}>
                    <Carousel/>
                </div>
            </div>

            {/* content */}
            {/* <div className={cx('container')}>
                <div className={cx('main-title', 'text-center')}> */}
            <Container className={cx('container')}>
                <div className={cx('head-intro')}>
                    CHƯƠNG TRÌNH ĐI/CHẠY BỘ
                    <br></br>
                    VÀ HOẠT ĐỘNG THỂ DỤC THỂ THAO TRỰC TUYẾN VÌ CỘNG ĐỒNG
                    <h1>DAI-ICHI LIFE - CUNG ĐƯỜNG YÊU THƯƠNG 2023</h1>
                </div>

                <div>
                    <div className={cx('text-center')}>
                        <img src={imgSymbol} className={cx('img-symbol')}/>
                    </div>
                </div>

                <section>
                    <h2 className={cx('head-title')}>GIỚI THIỆU CHUNG</h2>
                    <ul style={{marginLeft: "22px"}}>
                        <p>
                            <b className={cx('red')}>Dai-ichi Life - Cung Đường Yêu Thương 2023 </b>
                            là Chương trình đi/chạy bộ và hoạt động thể dục thể thao trực tuyến vì cộng đồng do Dai-ichi Life Việt Nam (DLVN) tổ chức.
                        </p>
                        <li>- Đây là sân chơi miễn phí dành cho người dân Việt Nam nhằm khuyến khích mỗi người, mỗi nhà xây dựng lối sống tích cực, chủ động rèn luyện và chăm sóc sức khỏe, lan tỏa tinh thần: yêu thương bản thân và gia đình, yêu thương cộng đồng, yêu thương trái đất.</li>
                        <li>- Với 
                            <b> mỗi km </b>
                            người tham gia hoàn thành, DLVN sẽ đóng góp 
                            <b className={cx('red')}> 1,000 đồng </b>
                            vào Quỹ “Vì cuộc sống tươi đẹp” với mục tiêu 5 tỷ đồng hỗ trợ những người dân có hoàn cảnh khó khăn trên khắp mọi miền đất nước.
                        </li>
                        <li>
                            - Đặc biệt, 
                            <b> mỗi 30 hoạt động Xanh </b>
                            được ghi nhận từ người tham gia sẽ được quy đổi thành 
                            <b className={cx('green')}> 1 cây xanh</b>
                            , hướng đến mục tiêu 15,000 cây xanh góp phần phủ xanh Trái đất.
                        </li>
                        <br></br>
                        <p style={{marginTop:'-26px'}}> --- Chương trình được chia thành 5 Thử Thách, lấy cảm hứng từ 5 yếu tố hình thành nên sự sống: Đất, Nước, Lửa, Gió, Vô theo triết lý Ngũ Đại Nhật Bản. Chương trình sẽ chính thức bắt đầu 
                            <b> từ ngày 15/04/2023 đến ngày 03/12/2023.</b>
                        </p>

                        <div className={cx('list-item-event')}>
                            <a className={cx('item-event')} href="/">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/thong-tin-chung/icon-thu-thach-dat.png" alt="icon-thu-thach-dat"/>
                                <div>
                                    <b className={cx('red')}>15/04 - 21/05</b>
                                </div>
                            </a>
                            <a className={cx('item-event')} href="/">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/thong-tin-chung/icon-thu-thach-nuoc.png" alt="icon-thu-thach-dat"/>
                                <div>
                                    <b className={cx('red')}>05/06 - 09/07</b>
                                </div>
                            </a>
                            <a className={cx('item-event')} href="/">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/thong-tin-chung/icon-thu-thach-lua.png" alt="icon-thu-thach-dat"/>
                                <div>
                                    <b className={cx('red')}>24/07 - 27/08</b>
                                </div>
                            </a>
                            <a className={cx('item-event')} href="/">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/thong-tin-chung/icon-thu-thach-gio.png" alt="icon-thu-thach-dat"/>
                                <div>
                                    <b className={cx('red')}>11/09 - 15/10</b>
                                </div>
                            </a>
                            <a className={cx('item-event')} href="/">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/thong-tin-chung/icon-thu-thach-vo.png" alt="icon-thu-thach-dat"/>
                                <div>
                                    <b className={cx('red')}>30/10 - 03/12</b>
                                </div>
                            </a>
                        </div>

                        <p>Sau thành công của hai mùa trước, Dai-ichi Life - Cung Đường Yêu Thương 2023 trở lại đầy hứng khởi cùng nhiều thay đổi thú vị: đa dạng thêm nhiều bộ môn thể dục thể thao được ghi nhận tự động, cơ cấu giải thưởng được mở rộng theo nhiều tiêu chí, đóng góp cây xanh,...</p>
                        <p>Thông tin liên quan đến Chương trình, số tiền DLVN đóng góp vào các hoạt động vì cộng đồng sẽ được cập nhật thường xuyên trên trang thông tin chính thức của Dai-ichi Life - Cung Đường Yêu Thương 2023, các trang mạng xã hội của DLVN, và các phương tiện truyền thông đại chúng.</p>
                        <li style={{fontSize:'18px'}}>
                            Trang thông tin chính thức của Chương trình: <a className={cx('link')} href="/" style={{display:'inline', marginLeft:'8px', color:'#985801'}}>đây là link</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <div style={{fontSize: '16px'}}>
                        <h2 className={cx('head-title')}>CÁCH THỨC THAM GIA & TÀI LIỆU HƯỚNG DẪN</h2>
                        <b>Bước 1: </b>
                        Đăng ký tài khoản Chương trình đi/chạy bộ và hoạt động thể dục thể thao trực tuyến vì cộng đồng Dai-ichi Life - Cung Đường Yêu Thương
                        <a className={cx('link')} href="/authentication/signin"> tại đây</a>
                        <br></br>
                        <b>Bước 2:</b>
                            <ul style={{marginLeft: '15px'}}>
                                <li className={cx('huong-dan')}>
                                    <i>Đối với người đã có tài khoản Strava, Garmin Connect, Suunto, Fitbit hoặc Google Fit</i>
                                    : Liên kết tài khoản này với tài khoản đã đăng ký trên trang Cung Đường Yêu Thương để được tự động ghi nhận kết quả.
                                </li>
                                <li className={cx('huong-dan')}>
                                    <i>Đối với người không có các tài khoản kể trên hoặc không sử dụng đồng hồ hoặc điện thoại thông minh</i>
                                    : Ghi nhận kết quả hoạt động bằng hình thức nhập thủ công.
                                </li>
                                <li className={cx('huong-dan')}>
                                    Tham khảo hướng dẫn ghi nhận kết quả: <a className={cx('link')} href="https://cungduongyeuthuong.dai-ichi-life.com.vn/hoi-dap">tại đây.</a>
                                </li>
                            </ul>
                    </div>
                </section>

                <section className={cx('prize')} id={cx('prize')}>
                    <h2 className={cx('head-title')}>GIẢI THƯỞNG</h2>
                    <ul className={cx('danh-sach-mon')}>
                        <li className={cx('custom-li')}>
                            <b>Đa dạng giải thưởng dành cho 5 nhóm bộ môn:</b>
                        </li>

                        <ul>
                            <li className={cx('custom-li-white')} style={{marginLeft:'50px'}}>- Đi/chạy bộ có GPS</li>
                            <li className={cx('custom-li-white')} style={{marginLeft:'50px'}}>- Đạp xe</li>
                            <li className={cx('custom-li-white')} style={{marginLeft:'50px'}}>- Yoga</li>
                            <li className={cx('custom-li-white')} style={{marginLeft:'50px'}}>- Bơi lội</li>
                            <li className={cx('custom-li-white')} style={{marginLeft:'50px'}}>- Các bộ môn khác (Thể dục dụng cụ, Nhảy dây, Hít đất, Cầu lông, Đánh gôn,...)</li>
                        </ul>
                    </ul>

                    <ul>
                        <li className={cx('custom-li')}>
                            <b>Đa dạng giải thưởng - Đa dạng tiêu chí phù hợp với mọi người tham gia:</b>
                        </li>
                        <div className={cx('row')}>
                            <div className={cx('row-price-left')}>
                                <div className={cx('row-price-table')} style={{display:'flex', margin: '26px 0'}}>
                                    <div className={cx('img-size')}>
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-nang-no.svg" alt="icon-nang-no"/>
                                    </div>
                                    <div style={{fontSize: '16px'}}>
                                        <b className={cx('red')}>NĂNG NỔ</b>
                                        <br></br>
                                        <span>Hoàn thành 50km đi/chạy bộ (có GPS) của mỗi Thử thách trong thời gian sớm nhất</span>
                                    </div>
                                </div>

                                <div className={cx('row-price-table')} style={{display:'flex', margin: '15px 0'}}>
                                    <div className={cx('img-size')}>
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-xuat-sac.svg" alt="icon-xuat-sac"/>
                                    </div>
                                    <div style={{fontSize: '16px'}}>
                                        <b className={cx('red')}>XUẤT SẮC</b>
                                        <br></br>
                                        <span>Có thành tích đi/chạy bộ có GPS cao nhất của từng Thử thách và toàn Chương trình</span>
                                    </div>
                                </div>

                                <div className={cx('row-price-table')} style={{display:'flex', margin: '26px 0'}}>
                                    <div className={cx('img-size')}>
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-tien-bo.svg" alt="icon-tien-bo"/>
                                    </div>
                                    <div style={{fontSize: '16px', paddingLeft: '6px'}}>
                                        <b className={cx('red')}>TIẾN BỘ</b>
                                        <br></br>
                                        <span>Có tổng quãng đường đi/chạy bộ (có GPS) trong 1 tuần tăng 10% so với thành tích tuần trước đó</span>
                                    </div>
                                </div>


                            </div>


                            <div className={cx('row-price-right')}>
                                <div className={cx('row-price-table')} style={{display:'flex', margin: '26px 0', maxHeight:'78px'}}>
                                    <div className={cx('img-size')}>
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-ben-bi.svg" alt="icon-ben-bi"/>
                                    </div>
                                    <div style={{fontSize: '16px'}}>
                                        <b className={cx('red')}>BỀN BỈ</b>
                                        <br></br>
                                        <span>Ghi nhận hoạt động đều đặn mỗi ngày theo nhóm bộ môn (hoạt động được ghi nhận tự động và hoạt động ghi nhận thủ công)</span>
                                    </div>
                                </div>

                                <div className={cx('row-price-table')} style={{display:'flex', margin: '26px -3px', maxHeight:'78px'}}>
                                    <div className={cx('img-size')}>
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/But-pha.svg" alt="icon-but-pha"/>
                                    </div>
                                    <div style={{fontSize: '16px'}}>
                                        <b className={cx('red')}>BỨT PHÁ</b>
                                        <br></br>
                                        <span>Hoàn thành 10 ngày hoạt động của từng bộ môn (hoạt động được ghi nhận tự động và hoạt động ghi nhận thủ công)</span>
                                    </div>
                                </div>

                                <div className={cx('row-price-table')} style={{display:'flex', margin: '26px -3px', maxHeight:'78px'}}>
                                    <div className={cx('img-size')}>
                                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-ket-noi.svg" alt="icon-ket-noi"/>
                                    </div>
                                    <div style={{fontSize: '16px', marginRight: '45px'}}>
                                        <b className={cx('red')}>KẾT NỐI</b>
                                        <br></br>
                                        <span>Mời thêm nhiều người tham gia và ghi nhận hoạt động tại Dai-ichi Life - Cung Đường Yêu Thương</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('row-price-lucky')}>
                            <div className={cx('row-price-table')} style={{display:'flex', margin: '26px 0'}}>
                                <div className={cx('img-size')}>
                                    <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-may-man.svg" alt="icon-lucky"/>
                                </div>
                                <div style={{fontSize: '16px', paddingLeft: '4px'}}>
                                    <b className={cx('red')}>MAY MẮN</b>
                                    <br></br>
                                    <span>Giải thưởng Rút thăm may mắn dành cho các người tham gia đặt và hoàn thành mục tiêu 30km/50km/100km, 200km, 400km, 800km (áp dụng cho tất cả các hoạt động)</span>
                                </div>
                            </div>
                        </div>

                        <li className={cx('custom-li')}>
                            Gồm 
                            <b> 2 bảng cơ cấu giải thưởng chính:</b>
                            <ul>
                                <li style={{marginLeft: '10px'}}>- Giải thưởng mỗi Thử thách: tham khảo mỗi trang Thử thách</li>
                                <li style={{marginLeft: '10px'}}>- Giải thưởng toàn Chương trình: tham khảo 
                                    <a className={cx('link')} href="https://cungduongyeuthuong.dai-ichi-life.com.vn/giai-thuong"> tại đây</a>
                                </li>
                            </ul>
                        </li>

                        <li className={cx('custom-li')}>
                            Danh sách kết quả sẽ được chia theo nhóm tham gia:
                            <ul style={{marginLeft: '46px'}}>
                                <li>+ Toàn bộ người tham gia</li>
                                <li>+ Người tham gia là Cộng đồng</li>
                                <li>+ Người tham gia là Nhân viên DLVN</li>
                                <li>+ Người tham gia là Tư vấn viên DLVN (Kênh phân phối truyền thống và Kênh phân phối mở rộng)</li>
                                <li>
                                    <b>
                                        <i>Lưu ý</i>
                                    </b>
                                    : Đối với người tham gia là Nhân viên/Tư vấn viên DLVN:
                                    <ul>
                                        <li>- Người tham gia phải chọn nhóm “Nhân viên/Tư vấn viên DLVN” tại website</li>
                                        <li>- Mã số nhân viên/mã số tư vấn cần còn hiệu lực đến thời điểm xét kết quả (kết thúc Thử thách/Chương trình) </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={cx('custom-li')}>
                            Do nhiều yếu tố khách quan, phần thưởng dự kiến của chương trình có thể thay đổi bằng sản phẩm với giá trị tương đương. Ban Tổ Chức sẽ thông báo đến người thắng giải nếu có bất kỳ sự thay đổi nào.
                        </li>

                        <li className={cx('custom-li')}>
                            Thời gian công bố giải thưởng dành cho từng Thử Thách: Trong vòng 10 ngày làm việc sau khi mỗi Thử Thách kết thúc.
                        </li>

                        <li className={cx('custom-li')}>Thời gian công bố giải thưởng chung cuộc dành cho toàn Chương trình: Trong vòng 15 ngày làm việc sau khi Thử Thách Vô (Thử Thách cuối cùng) kết thúc.</li>
                    </ul>
                </section>

                <section>
                    <h2 className={cx('head-title')}>QUY ĐỊNH</h2>
                    <ul style={{marginLeft: '46px'}}>
                        <li>
                            <h3 style={{color:'#2f5496'}}>Đăng ký và tham gia:</h3>
                            <ul style={{marginLeft: '46px'}}>
                                <li className={cx('custom-li1')}>Người tham gia có thể đăng ký tham gia cá nhân hoặc theo câu lạc bộ (chọn câu lạc bộ có sẵn hoặc tạo câu lạc bộ mới trên trang web của chương trình). Người tham gia đã chọn tham gia một câu lạc bộ không được chuyển sang câu lạc bộ khác kể từ 00h00, Ngày 30/04/2023.</li>
                                <li className={cx('custom-li1')}>Người tham gia đăng ký thuộc nhóm tham gia: Cộng đồng hoặc Nhân viên hoặc Tư vấn viên DLVN.</li>
                                <li className={cx('custom-li1')}>Người tham gia không thể chỉnh sửa tư cách tham gia và nhóm tham gia đã đăng ký. </li>
                                <li className={cx('custom-li1')}>Đối với người tham gia đạt được giải thưởng của mỗi Thử thách, phần thưởng sẽ được gửi theo thông tin người tham gia đã đăng ký với Chương trình.</li>
                                <li className={cx('custom-li1')}>Nếu tham gia theo Câu lạc bộ, kết quả của cá nhân sẽ được tính vào thành tích của Câu lạc bộ và thành tích của cá nhân.</li>
                                <li className={cx('custom-li1')}>Bằng việc đăng ký tham gia Dai-ichi Life - Cung Đường Yêu Thương, người tham gia cần đảm bảo:</li>
                                <li className={cx('custom-li1')}>Bằng việc đăng ký tham gia, người tham gia đồng ý cho Ban Tổ chức sử dụng thông tin và hình ảnh của mình để phục vụ cho mục đích truyền thông của Chương trình.</li>
                                <li className={cx('custom-li1')}>Bằng việc đăng ký tham gia, người tham gia xác nhận đã đọc, hiểu và đồng ý tất cả yêu cầu Ban Tổ chức đưa ra. </li>
                                <li className={cx('custom-li1')}>Người nhận thưởng sẽ chịu thuế thu nhập cá nhân theo luật quy định.</li>
                                <li className={cx('custom-li1')}>Người tham gia cần đặt/ thay đổi Cự ly mục tiêu trước thời gian bắt đầu của mỗi Thử thách. Sau thời gian này, người tham gia không thể thay đổi cự ly mục tiêu. </li>
                            </ul>
                        </li>

                        <li>
                            <h3 style={{color:'#2f5496'}}>Đăng ký và tham gia:</h3>
                            <ul style={{marginLeft: '46px'}}>
                                <li className={cx('custom-li1')}>Các hoạt động cần thỏa tiêu chí Giới hạn (ngưỡng) để tính tổng quãng đường tích lũy, đóng góp và giải thưởng tại Dai-ichi Life - Cung Đường Yêu Thương:
                                    <ul style={{marginLeft: '53px'}}>
                                        <li>
                                            <b>- Tổng quãng đường tích lũy tối đa/ ngày: </b>
                                            160km/ ngày (bao gồm cả hoạt động ghi nhận tự động và/hoặc hoạt động ghi nhận thủ công)
                                        </li>
                                        <li>
                                            <b>- Số hoạt động tối đa cho 1 nhóm bộ môn/ 1 ngày: </b>
                                            3 hoạt động ghi nhận tự động và 3 hoạt động ghi nhận thủ công 
                                        </li>
                                        <li>
                                            <b>- Quãng đường quy đổi tối đa/ 1 hoạt động:</b>
                                            <ul style={{marginLeft:'60px'}}>
                                                <li className={cx('custom-li1')}>Đối với hoạt động ghi nhận tự động: 160km/ hoạt động</li>
                                                <li className={cx('custom-li1')}>Đối với hoạt động ghi nhận thủ công: 10km/ hoạt động</li>
                                            </ul>
                                        </li>
                                        <strong><i>Lưu ý:</i></strong>
                                        <li>- Đối với hoạt động Đi/ chạy bộ có GPS, tổng quãng đường ghi nhận xét thành tích xếp hạng là 30km/ ngày. </li>
                                        <li>- Số bước chân tối đa ghi nhận là 30,000 bước chân/ ngày.</li>
                                    </ul>
                                </li>
                                <li className={cx('custom-li1')}>Đi bộ/chạy bộ (có GPS) với Pace (số phút hoàn thành 1km) hợp lệ không được nhỏ hơn 4 và lớn hơn 20 (4 ≤ Pace ≤ 20). Bên cạnh đó, quãng đường của một lần đi/chạy bộ không nhỏ hơn 1km.</li>
                                <li className={cx('custom-li1')}>Hoạt động đi/chạy bộ (có GPS) không có nhiều hơn 1 lần split pace (số pace cụ thể ở các giai đoạn trong quá trình đi/chạy bộ) nhỏ hơn 4 hoặc lớn hơn 20.</li>
                                <li className={cx('custom-li1')}>Hoạt động không được chỉnh sửa (chỉnh sửa/ chuyển đổi hình thức hoạt động, chỉnh sửa kết quả,...)</li>
                                <li className={cx('custom-li1')}>Đối với các hoạt động sử dụng chức năng “Add Others” trên Strava (hay còn gọi là Group Activities – Thêm bạn cùng chơi, Hoạt động nhóm), hệ thống chỉ công nhận hoạt động của người tham gia chính (người “tag”) chứ không công nhận hoạt động của người được “tag”.</li>
                                <li className={cx('custom-li1')}>Các hoạt động được tạo ra bằng tính năng “Upload File”/ “Import File” (ví dụ: GPX, FIT, TCX…) sẽ đều được xem là không hợp lệ.</li>
                                <li className={cx('custom-li1')}>Kết quả từ Strava, Garmin, Fitbit, Suunto hoặc Google Fit chỉ ghi nhận vào hệ thống nếu đã liên kết với tài khoản của người tham gia. Các kết quả từ Strava phải được để ở chế độ công khai (Public). Trong trường hợp để chế độ cá nhân (Private), người tham gia phải chuyển sang chế độ công khai và báo BAN TỔ CHỨC không quá 24 tiếng sau khi hoàn thành (Finish) và được lưu trữ trên hệ thống (Save activity).</li>
                                <li className={cx('custom-li1')}>Đối với các kết quả chưa được đồng bộ từ Strava, Garmin, Fitbit, Suunto hoặc Google Fit vào hệ thống Dai-ichi Life - Cung Đường Yêu Thương của mỗi Thử thách, người tham gia cần báo cho BAN TỔ CHỨC trong vòng 24 giờ sau khi hoàn thành hoạt động. </li>
                                <li className={cx('custom-li1')}>Đối với giải thưởng xếp hạng cho hoạt động Đi/ chạy bộ có GPS, hoạt động phải có GPS và thể hiện đường chạy (route map) rõ ràng, không có dấu hiệu sai số. Hoạt động có kết quả GPS bị lỗi được tính là không hợp lệ.</li>
                                <li className={cx('custom-li1')}>Hoạt động không hợp lệ sẽ được hiển thị kèm dấu hỏi chấm hỏi (!) tại phần Hoạt động gần đây tại
                                    <a className={cx('red', 'link')} href="/">Trang cá nhân</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3 style={{color:'#2f5496'}}>Cách tính và ghi nhận kết quả:</h3>
                            <ul style={{marginLeft: '46px'}}>
                                <li className={cx('custom-li1')}>Thời gian ghi nhận kết quả hoạt động hợp lệ là 
                                    <b> thời gian hoạt động được ghi nhận tại hệ thống </b>
                                    Dai-ichi Life - Cung Đường Yêu Thương.
                                </li>
                                <li className={cx('custom-li1')}>Thang đo kết quả mặc định của chương trình là quãng đường - được tính bằng <b>km</b>
                                    <ul style={{marginLeft: '35px'}}>
                                        <li>- Đối với nhóm bộ môn đi/chạy bộ có GPS: Quãng đường ghi nhận tại Dai-ichi Life - Cung Đường Yêu Thương là quãng đường thực tế được ghi nhận từ ứng dụng đã được kết nối (Strava/ Garmin/ Fitbit/ Suunto).</li>
                                        <li>- Đối với các nhóm bộ môn còn lại: Quãng đường được ghi nhận là quãng đường được quy đổi theo hệ số được quy định tại Dai-ichi Life - Cung Đường Yêu Thương. Tham khảo thêm 
                                            <a className={cx('red', 'link')}href="https://cungduongyeuthuong.dai-ichi-life.com.vn/hoi-dap"> tại đây</a>.
                                        </li>
                                        <li>Với người tham gia dùng Google Fit/Garmin để ghi nhận kết quả (bước chân), hệ số quy đổi là 1,250 bước chân = 1 km. </li>
                                    </ul>
                                </li>
                                <li className={cx('custom-li1')}>Quãng đường tính lũy của mỗi người tham gia được tính bằng cách 
                                    <b>cộng dồn kết quả</b>
                                    của tất cả các hoạt động hợp lệ. Nếu có các hoạt động trong ngày trùng nhau về thời gian, Ban Tổ chức chỉ tính kết quả của hoạt động đầu tiên trong loạt hoạt động bị trùng.
                                </li>
                                <li className={cx('custom-li1')}>Người tham gia được xem là hoàn thành Một Thử Thách khi hoàn tất quãng đường tích lũy tương ứng với mục tiêu đăng ký cá nhân khi kết thúc Thử Thách. </li>
                                <li className={cx('custom-li1')}>Kết quả hiển thị tại Trang Cá nhân và Bảng xếp hạng Cá nhân, Bảng xếp hạng Câu lạc bộ là kết quả tạm tính. 
                                    <b>Kết quả chính thức</b>
                                    sẽ được công bố tại trang Kết quả và fanpage chính thức của Chương trình. 
                                </li>
                                <li className={cx('custom-li1')}>Trong trường hợp người tham gia có khiếu nại về kết quả cuối cùng, người tham gia cần thông báo cho Ban Tổ chức chậm nhất sau 3 ngày kể từ ngày công bố kết quả.</li>
                                <li className={cx('custom-li1')}>Trong trường hợp có khiếu nại về kết quả, quyền quyết định cuối cùng thuộc về Ban Tổ chức.</li>
                            </ul>
                        </li>

                        <li>
                            <h3 style={{color:'#2f5496'}}>Cách tính đóng góp:</h3>
                            <ul style={{marginLeft: '46px'}}>
                                <li className={cx('custom-li1')}>
                                    <h4>Đối với số tiền quyên góp:</h4>
                                    <ul style={{marginLeft:'47px'}}>
                                        <li>
                                            <b>- Tổng số tiền quyên góp </b>
                                            = Số tiền quyên góp từ các hoạt động được ghi nhận từ người tham gia tại website + Số tiền quyên góp từ các hoạt động sự kiện trực tiếp + Số tiền quyên góp từ các hoạt động khác trong quá trình Chương trình diễn ra (nếu có)
                                        </li>
                                        <li>
                                            <b>- Số tiền quyên góp từ mỗi hoạt động được ghi nhận tại website </b>
                                            = Số km của hoạt động (được làm tròn) x 1,000 đồng
                                        </li>
                                        <li>
                                            <b>- Quy tắc làm tròn: </b>
                                            <div style={{marginLeft: '48px'}}>
                                                <p style={{fontSize: '16px'}}>+ Làm tròn lên nếu phần thập phân lớn hơn hoặc bằng 5</p>
                                                <p style={{fontSize: '16px'}}>+ Làm tròn xuống nếu phần thập phân nhỏ hơn 5</p>
                                                <p>
                                                    <i>Ví dụ: </i>
                                                    Kết quả được ghi nhận của bạn là 10.3km =&gt; Kết quả được ghi nhận vào đóng góp là 10km, tương đương đóng góp 10,000 đồng. Nếu kết quả được ghi nhận của bạn là 10.6km =&gt; Kết quả được ghi nhận vào đóng góp là 11km, tương đương đóng góp 11,000 đồng.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={cx('custom-li1')}>
                                    <h4>Đối với số cây đóng góp:</h4>
                                    <ul style={{marginLeft:'47px'}}>
                                        <li>
                                            <b>- Tổng số cây xanh đóng góp </b>
                                            = Số cây xanh quy đổi từ các hoạt động Xanh được ghi nhận từ người tham gia tại website + Số cây xanh quy đổi từ các hoạt động khác trong quá trình Chương trình diễn ra (nếu có)
                                        </li>
                                        <li>
                                            <b>- Mỗi 30 hoạt động Xanh </b>
                                            được ghi nhận từ người tham gia sẽ được 
                                            <b> quy đổi thành 1 cây xanh.</b>
                                        </li>
                                        <li>
                                            - Hoạt động Xanh bao gồm:
                                            <div style={{marginLeft: '48px'}}>
                                                <p style={{fontSize: '16px'}}>+ Các hoạt động đi bộ/chạy bộ/đạp xe được ghi nhận tự động và được đánh dấu cộng xanh (+) tại phần “Hoạt động gần đây”.</p>
                                                <p style={{fontSize: '16px'}}>+ Các hoạt động bảo vệ môi trường như trồng cây, giảm nhựa dùng một lần,... được người tham gia ghi nhận bằng cách nhập thủ công.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3 style={{color:'#2f5496'}}>Hình thức xử lý vi phạm:</h3>
                            <ul style={{marginLeft: '46px'}}>
                                <li className={cx('custom-li1')}>Trường hợp kết quả của người tham gia bị báo cáo vi phạm, Ban Tổ chức có quyền yêu cầu kiểm tra. Quyết định xử lý của Ban Tổ chức sẽ là quyết định cuối cùng.</li>
                                <li className={cx('custom-li1')}>Hoạt động không hợp lệ (vượt ngưỡng, trùng thời gian hoạt động hoặc vi phạm pace theo quy định của Chương trình) sẽ hiển thị biểu tượng (i). Kết quả của các hoạt động không hợp lệ sẽ không được tính vào thành tích xếp hạng và thành tích nhận giải thưởng.</li>
                                <li className={cx('custom-li1')}>Các hình thức xử lý vi phạm người tham gia nhận THẺ VÀNG:
                                    <ul style={{marginLeft: '47px'}}>
                                        <li>- Người tham gia có 3 hoạt động vi phạm thể lệ liên quan đến Pace trong một Thử Thách sẽ nhận thẻ vàng.</li>
                                        <li>- Toàn bộ thành tích ghi nhận ở Thử thách bị thẻ vàng sẽ không được tính vào thành tích xếp hạng và thành tích nhận giải thưởng.</li>
                                        <li>- Người tham gia có thể thấy hoạt động vi phạm thẻ vàng ở Trang cá nhân. Hoạt động vi phạm pace sẽ được hiển thị biểu tượng (i).</li>
                                        <li>- Thẻ vàng sẽ không tồn tại khi chuyển qua Thử Thách tiếp theo.</li>
                                    </ul>
                                </li>
                                <li className={cx('custom-li1')}>
                                    Các hình thức xử lý vi phạm người tham gia nhận THẺ ĐỎ:
                                    <ul style={{marginLeft: '47px'}}>
                                        <li>- Người tham gia nhận 2 thẻ vàng sẽ nhận thẻ đỏ.</li>
                                        <li>- Người tham gia có thể thấy hoạt động vi phạm thẻ đỏ ở Trang cá nhân. Hoạt động vi phạm pace sẽ được hiển thị biểu tượng (i).</li>
                                        <li>- Toàn bộ thành tích người tham gia nhận thẻ đỏ sẽ không được tính vào thành tích xếp hạng và thành tích nhận giải thưởng.</li>
                                        <li>- Thẻ đỏ vẫn tồn tại đến hết Chương trình Dai-ichi Life - Cung Đường Yêu Thương 2023.</li>
                                    </ul>
                                </li>
                                <li className={cx('custom-li1')}>Đối với các giải thưởng Chiến binh Kết nối: Nếu số lượng người được mời tham gia có thông tin không xác thực lớn hơn 20 người, Ban Tổ Chức có quyền hủy toàn bộ kết quả của các giải thưởng Chiến binh Kết nối của cá nhân/câu lạc bộ.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className={cx('head-title')}>THỜI GIAN TỔ CHỨC & CÔNG BỐ GIẢI THƯỞNG</h2>
                    <ul style={{marginLeft: '46px'}}>
                        <li className={cx('custom-li1')}>Thời gian đăng ký tham gia Dai-ichi Life - Cung Đường Yêu Thương 2023: Từ 00h00 ngày 15/04/2023 đến 00h00 ngày 03/12/2023.</li>
                        <li className={cx('custom-li1')}>Thời gian ghi nhận kết quả: Theo thời gian bắt đầu và kết thúc của từng Thử Thách.</li>
                        <li className={cx('custom-li1')}>Thời gian công bố giải thưởng dành cho từng Thử Thách: Trong vòng 10 ngày làm việc sau khi mỗi Thử Thách kết thúc.</li>
                        <li className={cx('custom-li1')}>Thời gian công bố giải thưởng chung cuộc dành cho toàn Chương trình: Trong vòng 15 ngày làm việc sau khi Thử Thách Vô (Thử Thách cuối cùng) kết thúc.</li>
                    </ul>
                </section>

                <section>
                    <h2 className={cx('head-title')}>TRÁCH NHIỆM CỦA BAN TỔ CHỨC & THÔNG TIN LIÊN HỆ</h2>
                    <ul style={{marginLeft: '46px'}}>
                        <li className={cx('custom-li1')}>Đảm bảo kết quả được xác nhận một cách công bằng và thông tin được chia sẻ một cách minh bạch.</li>
                        <li className={cx('custom-li1')}>Xem xét các khiếu nại có liên quan đến kết quả của các người tham gia đạt giải thưởng.  Email là kênh tiếp nhận khiếu nại do người đại diện của mỗi đội gửi tới địa chỉ: cungduongyeuthuong@dai-ichi-life.com.vn. Quyết định của Ban Tổ chức là quyết định cuối cùng đối với mọi khiếu nại.</li>
                        <li className={cx('custom-li1')}>Ban Tổ chức có quyền yêu cầu người tham gia cung cấp thông tin để chứng minh kết quả như thông tin chi tiết của các hoạt động ghi nhận tại Cung Đường Yêu Thương (nhịp tim, nhịp chạy,…), thành tích ghi nhận tại trang kết quả của các giải chạy có chip ghi nhận thời gian,… Nếu người tham gia không chứng minh được kết quả trong vòng 72 giờ (kể từ lúc nhận được thông báo/yêu cầu từ Ban Tổ chức) thì Ban Tổ chức có quyền không công nhận kết quả để xếp hạng thành tích.</li>
                        <li className={cx('custom-li1')}>Có các phương án phòng chống và phát hiện gian lận (nếu có) để đảm bảo công bằng cho người tham gia.</li>
                        <li className={cx('custom-li1')}>Có toàn quyền quyết định một nhóm và người tham gia có đủ điều kiện tham gia hay không, quyền dừng tham gia và huỷ kết quả (tương đương Thẻ vàng/Thẻ đỏ) của nhóm và người tham gia trong trường hợp phát hiện hành vi gian lận hoặc không tuân thủ các quy định của chương trình và quyền phân xử đối với các khiếu nại.</li>
                        <li className={cx('custom-li1')}>Thông tin liên hệ:
                            <ul>
                                <li>Email: 
                                    <a className={cx('link')} href="mailto:cungduongyeuthuong@dai-ichi-life.com.vn">cungduongyeuthuong@dai-ichi-life.com.vn</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

            </Container>

            <Footer/>
        </>
     );
}

export default ThongTinChung;