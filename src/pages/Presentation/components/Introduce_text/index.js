import styles from'./Introduce.module.scss'
import classNames from "classnames/bind";
import imgSymbol from 'assets/images/icon5symbol.png'

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <>
            {/* Text */}
            <fragment>
                <h1>DAI-ICHI LIFE - CUNG ĐƯỜNG YÊU THƯƠNG 2023</h1>
                <p>
                    <b className={cx('red')}>Dai-ichi Life - Cung Đường Yêu Thương 2023 </b>
                    là Chương trình đi/chạy bộ và hoạt động thể dục thể thao trực tuyến vì cộng đồng do Dai-ichi Life Việt Nam (DLVN) tổ chức.
                </p>
                <p>Đây là sân chơi miễn phí dành cho người dân Việt Nam nhằm khuyến khích mỗi người, mỗi nhà xây dựng lối sống tích cực, chủ động rèn luyện và chăm sóc sức khỏe, lan tỏa tinh thần: yêu thương bản thân và gia đình, yêu thương cộng đồng, yêu thương trái đất.</p>
                <p>
                    Với
                    <b> mỗi km </b>
                    người tham gia hoàn thành, DLVN sẽ đóng góp
                    <b className={cx('red')}> 1,000 đồng </b>
                    vào Quỹ “Vì cuộc sống tươi đẹp” với mục tiêu 5 tỷ đồng hỗ trợ những người dân có hoàn cảnh khó khăn trên khắp mọi miền đất nước.
                </p>
                <p>
                    Đặc biệt,
                    <b> mỗi 30 hoạt động Xanh </b>
                    được ghi nhận từ người tham gia sẽ được quy đổi thành
                    <b className={cx('green')}> 1 cây xanh</b>
                    , hướng đến mục tiêu 15,000 cây xanh góp phần phủ xanh Trái đất.
                </p>
            </fragment>
            
            {/* Image */}
            <fragment>
                <div className={cx('text-center')}>
                    <img src={imgSymbol} className={cx('img-symbol')}/>
                </div>
            </fragment>

        </>
    );
}

export default Introduce;