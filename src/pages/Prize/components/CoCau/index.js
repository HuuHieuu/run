import classNames from "classnames/bind";
import styles from "./CoCau.module.scss";

const cx = classNames.bind(styles);

function CoCau() {
    return ( 
        <>
            <table className={cx('table')}>
                <tr>
                    <th rowSpan={2}>STT</th>
                    <th rowSpan={2}>GIẢI THƯỞNG</th>
                    <th rowSpan={2}>TIÊU CHÍ</th>
                    <th rowSpan={2}>PHẦN THƯỞNG</th>
                    <th colSpan={4}>SỐ LƯỢNG</th>
                </tr>
                <tr>
                    <th>Dành cho tất cả những người tham gia</th>
                    <th>Dành cho cộng đồng</th>
                    <th>Dành cho nhân viên DLVN</th>
                    <th>Dành cho tư vấn viên DLVN</th>
                </tr>
            </table>
        </>
     );
}

export default CoCau;