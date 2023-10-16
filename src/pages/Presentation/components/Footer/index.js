import classNames from "classnames/bind";
import styles from "./Footer.module.scss"
import Huce from "assets/images/HUCE_DHXD_Logo.png"

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <>
            <div className={cx('foot-size')}>
                <div className={cx('foot-container')}>
                    <div className={cx('foot-css')}>
                        <img src={Huce} alt="logo_huce"/>
                        <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/line_12.png" alt="line" className={cx('foot-line')}/>
                        <span className={cx('ky-luc')}>KỶ LỤC VIỆT NAM ĐÃ ĐƯỢC XÁC LẬP</span>
                    </div>
                
                    <div className={cx('strava')}>
                        <a href="https://irace.vn/" className={cx('icon-irace')}>
                            <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/logo_irace.png" alt="irace" height={'36px'}/>
                        </a>

                        <a href="https://strava.com/" className={cx('icon-strava')}> 
                            <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/logo_strava.png" alt="strava" height={'44px'}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
     );

}

export default Footer;