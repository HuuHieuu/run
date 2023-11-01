import styles from './CoCauMoiThuThach.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function CoCauMoiThuThach() {
    return ( 
        <>
            <div className={cx('main-title')}>
                <h1>II. CƠ CẤU GIẢI THƯỞNG MỖI THỬ THÁCH</h1>
            </div>

            <div className={cx('text-left')}>
                <b>Xem chi tiết Cơ cấu giải thưởng từng Thử thách tại mỗi trang Thử thách</b>
                {/* dat */}
                <div className={cx('list-prize')}>
                    <div>
                        <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-symbol-dat.png' width={'44px'} style={{verticalAlign:'middle'}}/>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        Thử thách Đất (15/04/2023 - 21/05/2023):
                        <br></br>
                        <a href='/'>https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat#giai-thuong</a>
                    </div>
                </div>

                {/* nuoc */}
                <div className={cx('list-prize')}>
                    <div>
                        <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-symbol-nuoc.png' width={'44px'} style={{verticalAlign:'middle'}}/>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        Thử thách Nước (05/06/2023 - 09/07/2023):
                        <br></br>
                        <a href='/'>https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat#giai-thuong</a>
                    </div>
                </div>

                {/* lua */}
                <div className={cx('list-prize')}>
                    <div>
                        <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-symbol-lua.png' width={'44px'} style={{verticalAlign:'middle'}}/>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        Thử thách Lửa (24/07/2023 - 27/08/2023):
                        <br></br>
                        <a href='/'>https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat#giai-thuong</a>
                    </div>
                </div>

                {/* gio */}
                <div className={cx('list-prize')}>
                    <div>
                        <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-symbol-gio.png' width={'44px'} style={{verticalAlign:'middle'}}/>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        Thử thách Gió (11/09/2023 - 15/10/2023):
                        <br></br>
                        <a href='/'>https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat#giai-thuong</a>
                    </div>
                </div>

                {/* vo */}
                <div className={cx('list-prize')}>
                    <div>
                        <img src='https://cungduongyeuthuong.dai-ichi-life.com.vn/23/img/icon-symbol-vo.png' width={'44px'} style={{verticalAlign:'middle'}}/>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        Thử thách Vô (30/10/2023 - 03/12/2023):
                        <br></br>
                        <a href='/'>https://cungduongyeuthuong.dai-ichi-life.com.vn/thu-thach-dat#giai-thuong</a>
                    </div>
                </div>

            </div>
        </>
     );
}

export default CoCauMoiThuThach;