import styles from "./Challenge.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Challenge() {
    return (
        <>
            <div id={cx('challenge')} className={cx('container')}>
                <h2 className={cx('intro-title')}>
                    Chương trình được chia thành 5 thử thách gồm:
                    <b>
                        Đất, Nước, Lửa, Gió, Vô
                    </b>
                    (theo triết lý Ngũ Đại Nhật Bản).
                </h2>

                {/* list-event */}
                <div className={cx('list-event')}>
                    <div className={cx('item-event', 'row')}>
                        <div className={cx('item-left')}>
                            <a href="https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/thumb-desktop-dat.png"/>
                            </a>
                        </div>

                        <div className={cx('item-right')}>
                            <div className={cx('description')}>
                                <b>BỀN BỈ </b>
                                - khái niệm thể hiện trọn vẹn hết tinh thần của yếu tố Đất trong Ngũ Đại. Đây chính là thử thách đầu tiên trong hành trình chinh phục Dai-ichi Life - Cung Đường Yêu Thương. Một tinh thần khỏe khoắn trong một cơ thể dẻo dai sẽ giúp bạn đủ sức vượt qua mọi thử thách.
                            </div>

                            <div className={cx('row-date')}>
                                <div className={cx('date')}>
                                    <b>15/04/2023 - 21/05/2023 |</b>
                                    <span> Thử thách đã hoàn thành mục tiêu</span>
                                </div>
                                <div className={cx('text-right')}>
                                    <b className={cx('target-donate')}>1,000,000,000 đồng</b>
                                </div>
                            </div>

                            <div className={cx('progress-donate')}>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '100%'}}>100%</div>
                                </div>

                                <div className={cx('price-donate')}>
                                    <div className={cx('row-donate')}>
                                        <div className={cx('title')}>Kết quả đã đạt được</div>
                                        <ul className={cx('target')}>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-2.png"/>
                                                1,000,000,000 đồng
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-4.png"/>
                                                3,000 cây
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-1.png"/>
                                                2,158,237 km
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('wrap-btn-detail')}>
                                            <a href="/">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('list-event')}>
                    <div className={cx('item-event', 'row')}>
                        <div className={cx('item-left')}>
                            <a href="https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/thumb-desktop-nuoc.png"/>
                            </a>
                        </div>

                        <div className={cx('item-right')}>
                            <div className={cx('description')}>
                                <b>LINH HOẠT </b>
                                -  - uyển chuyển, mềm mại và có khả năng ứng biến tốt trước mọi thử thách - chính là mục tiêu chính của Thử Thách Nước. Hãy cùng Dai-ichi Life - Cung Đường Yêu Thương duy trì sức khỏe dẻo dai để hoàn tất thử thách này nhé.
                            </div>

                            <div className={cx('row-date')}>
                                <div className={cx('date')}>
                                    <b>05/06/2023 - 09/07/2023 |</b>
                                    <span> Thử thách đã hoàn thành mục tiêu</span>
                                </div>
                                <div className={cx('text-right')}>
                                    <b className={cx('target-donate')}>1,000,000,000 đồng</b>
                                </div>
                            </div>

                            <div className={cx('progress-donate')}>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '100%'}}>100%</div>
                                </div>

                                <div className={cx('price-donate')}>
                                    <div className={cx('row-donate')}>
                                        <div className={cx('title')}>Kết quả đã đạt được</div>
                                        <ul className={cx('target')}>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-2.png"/>
                                                1,000,000,000 đồng
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-4.png"/>
                                                3,000 cây
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-1.png"/>
                                                2,538,578 km
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('wrap-btn-detail')}>
                                            <a href="/">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('list-event')}>
                    <div className={cx('item-event', 'row')}>
                        <div className={cx('item-left')}>
                            <a href="https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/thumb-desktop-lua.png"/>
                            </a>
                        </div>

                        <div className={cx('item-right')}>
                            <div className={cx('description')}>
                                <b>NHIỆT HUYẾT </b>
                                như lửa - bạn đã sẵn sàng dấn thân chinh phục hành trình Thử Thách Lửa tiếp theo hay chưa? Rèn luyện thể chất, nâng cao sức khỏe mỗi ngày với tinh thần đam mê và tràn đầy năng lượng sẽ giúp bạn sống vui sống khỏe mỗi ngày.
                            </div>

                            <div className={cx('row-date')}>
                                <div className={cx('date')}>
                                    <b>24/07/2023 - 27/08/2023 |</b>
                                    <span> Thử thách đã hoàn thành mục tiêu</span>
                                </div>
                                <div className={cx('text-right')}>
                                    <b className={cx('target-donate')}>1,000,000,000 đồng</b>
                                </div>
                            </div>

                            <div className={cx('progress-donate')}>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '100%'}}>100%</div>
                                </div>

                                <div className={cx('price-donate')}>
                                    <div className={cx('row-donate')}>
                                        <div className={cx('title')}>Kết quả đã đạt được</div>
                                        <ul className={cx('target')}>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-2.png"/>
                                                1,000,000,000 đồng
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-4.png"/>
                                                3,000 cây
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-1.png"/>
                                                2,720,132 km
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('wrap-btn-detail')}>
                                            <a href="/">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('list-event')}>
                    <div className={cx('item-event', 'row')}>
                        <div className={cx('item-left')}>
                            <a href="https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/thumb-desktop-gio.png"/>
                            </a>
                        </div>

                        <div className={cx('item-right')}>
                            <div className={cx('description')}>
                                <b>LAN TỎA </b>
                                - truyền năng lượng tích cực và tinh thần thể thao nhiệt huyết đến cộng đồng cùng Thử Thách Gió. Cùng nhau hoàn thành thật tốt thử thách này để lấy đà về đích trong chặng đường chinh phục Dai-ichi Life - Cung Đường Yêu Thương.
                            </div>

                            <div className={cx('row-date')}>
                                <div className={cx('date')}>
                                    <b>11/09/2023 - 15/10/2023 |</b>
                                    <span> Thử thách đã hoàn thành mục tiêu</span>
                                </div>
                                <div className={cx('text-right')}>
                                    <b className={cx('target-donate')}>1,000,000,000 đồng</b>
                                </div>
                            </div>

                            <div className={cx('progress-donate')}>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '100%'}}>100%</div>
                                </div>

                                <div className={cx('price-donate')}>
                                    <div className={cx('row-donate')}>
                                        <div className={cx('title')}>Kết quả đã đạt được</div>
                                        <ul className={cx('target')}>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-2.png"/>
                                                1,000,000,000 đồng
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-4.png"/>
                                                3,000 cây
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-1.png"/>
                                                2,158,237 km
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('wrap-btn-detail')}>
                                            <a href="/">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('list-event')}>
                    <div className={cx('item-event', 'row')}>
                        <div className={cx('item-left')}>
                            <a href="https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat">
                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/thumb-desktop-vo.png"/>
                            </a>
                        </div>

                        <div className={cx('item-right')}>
                            <div className={cx('description')}>
                                Trong Ngũ Đại, yếu tố Vô biểu tượng cho trí tuệ, bình an và tình
                                <b> YÊU THƯƠNG</b>
                                . Thử thách cuối cùng trong hành trình chinh phục Dai-ichi Life - Cung Đường Yêu Thương sẽ giúp bạn kết nối và lan tỏa năng lượng yêu thương tích cực này đến mọi người.
                            </div>

                            <div className={cx('row-date')}>
                                <div className={cx('date')}>
                                    <b>15/04/2023 - 21/05/2023 |</b>
                                    <span> Thử thách đã hoàn thành mục tiêu</span>
                                </div>
                                <div className={cx('text-right')}>
                                    <b className={cx('target-donate')}>1,000,000,000 đồng</b>
                                </div>
                            </div>

                            <div className={cx('progress-donate')}>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '100%'}}>100%</div>
                                </div>

                                <div className={cx('price-donate')}>
                                    <div className={cx('row-donate')}>
                                        <div className={cx('title')}>Kết quả đã đạt được</div>
                                        <ul className={cx('target')}>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-2.png"/>
                                                1,000,000,000 đồng
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-4.png"/>
                                                3,000 cây
                                            </li>
                                            <li> 
                                                <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/23/rank/icon-donate-1.png"/>
                                                2,158,237 km
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('wrap-btn-detail')}>
                                            <a href="/">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Challenge