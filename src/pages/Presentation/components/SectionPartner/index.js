import classNames from "classnames/bind";
import styles from "./SectionPartner.module.scss"

const cx = classNames.bind(styles)


function SectionPartner() {
    return (  
        <>
        <div className={cx('section-partner-size')}>
            <div className={cx('title')}>  
                <h2 className={cx('text')}>ĐỐI TÁC ĐỒNG HÀNH</h2>
                <span className={cx('line')}/>
            </div>

            <ul className={cx('list-logo-partner')}>
                <li>
                    <img src="https://cungduongyeuthuong.dai-ichi-life.com.vn/dl/t-coaching_logo.png" alt="partner"/>
                </li>
            </ul>
        </div>
        </>
    );
}

export default SectionPartner