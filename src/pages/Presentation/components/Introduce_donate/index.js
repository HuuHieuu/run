import classNames from "classnames/bind";
import styles from "./Introduce_donate.module.scss"

const cx = classNames.bind(styles);

function Introduce_donate() {
    return (
        <fragment className={cx('progress-donate')}>
            {/* TOP */}
                <div className={cx('price-donate')}>
                    <div className={cx('size-card')}>
                        <div className={cx('item', 'text-center')}>
                            <div className={cx('wrap-item-top')}>
                                <div className={cx('wrap-img')}>
                                    <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-home-gioi-thieu-1.png'/>
                                </div>
                                <div className={cx('item-text','text-left')}>
                                    <div className={cx('title')}>Số tiền đã quyên góp</div>
                                    <div className={cx('number','red')}> 4,000,000,000 <span className={cx('unit')}>đồng</span>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('progress-goal')}>
                                <p>
                                    Mục tiêu:
                                    <b> 5,000,000,000 đồng </b>
                                </p>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '80%'}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('size-card')}>
                        <div className={cx('item', 'text-center')}>
                            <div className={cx('wrap-item-top')}>
                                <div className={cx('wrap-img')}>
                                    <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-home-gioi-thieu-2.png'/>
                                </div>
                                <div className={cx('item-text','text-left')}>
                                    <div className={cx('title')}>Số cây xanh đã đóng góp</div>
                                    <div className={cx('number','red')}> 12,000 <span className={cx('unit')}>cây</span>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('progress-goal')}>
                                <p>
                                    Mục tiêu:
                                    <b> 15,000 cây xanh </b>
                                </p>
                                <div className={cx('progress')}>
                                    <div className={cx('progress-bar')} style={{width: '80%'}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            {/* BOTTOM */}
            <div className={cx('price-donate')}>
                    <div className={cx('size-card')}>
                        <div className={cx('item', 'text-center')}>
                            <div className={cx('wrap-item-top')}>
                                <div className={cx('wrap-img')}>
                                    <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-home-gioi-thieu-3.png'/>
                                </div>
                                <div className={cx('item-text','text-left')}>
                                    <div className={cx('title')}>Quãng đường tích luỹ</div>
                                    <div className={cx('number','red')}> 12,143,315 <span className={cx('unit')}>km</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('size-card')}>
                        <div className={cx('item', 'text-center')}>
                            <div className={cx('wrap-item-top')}>
                                <div className={cx('wrap-img')}>
                                    <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-home-gioi-thieu-4.svg'/>
                                </div>
                                <div className={cx('item-text','text-left')}>
                                    <div className={cx('title')}>Số người tham gia</div>
                                    <div className={cx('number','red')}> 30,770 <span className={cx('unit')}>chiến binh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fragment>
    )
}
export default Introduce_donate;