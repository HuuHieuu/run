import classNames from "classnames/bind";
import styles from "./CoCau.module.scss";
import imgSymbol from 'assets/images/icon5symbol.png'

const cx = classNames.bind(styles);

function CoCau() {
    return ( 
        <>
            <div className={cx('main-title')}>
                <h1>I. CƠ CẤU GIẢI THƯỞNG TOÀN CHƯƠNG TRÌNH</h1>
            </div>
            <fragment>
                <div className={cx('text-center')}>
                    <img src={imgSymbol} className={cx('img-symbol')}/>
                </div>
            </fragment>
            


            <table className={cx('table')}>
                <thead>
                    <tr className={cx('tr-size')} style={{backgroundColor: '#C68158', color: 'white'}}>
                        <th rowSpan={2}>STT</th>
                        <th rowSpan={2}>GIẢI THƯỞNG</th>
                        <th rowSpan={2}>TIÊU CHÍ</th>
                        <th rowSpan={2}>PHẦN THƯỞNG</th>
                        <th colSpan={4}>SỐ LƯỢNG</th>
                    </tr>
                    <tr className={cx('tr-size')}>
                        <th className={cx('back-color')}>Dành cho tất cả những người tham gia</th>
                        <th className={cx('back-color')}>Dành cho cộng đồng</th>
                        <th className={cx('back-color')}>Dành cho nhân viên DLVN</th>
                        <th className={cx('back-color')}>Dành cho tư vấn viên DLVN</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 1 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>1</td>
                        <td rowSpan={2}>
                            <div>
                                <b>TOP NAM CHIẾN BINH XUẤT SẮC NHẤT TOÀN CHƯƠNG TRÌNH</b>
                            </div>
                                TOP Nam có thành tích cao nhất toàn Chương trình
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Tổng số km đi/chạy bộ (có GPS) cộng dồn mỗi Thử thách</li>
                                <li>Hoạt động đi/chạy bộ phải có GPS và thể hiện đường chạy (route map) rõ ràng, không có dấu hiệu sai số. Hoạt động có kết quả GPS bị lỗi được tính là không hợp lệ.</li>
                            </ul>
                        </td>
                        <td>Kỷ niệm chương</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}>5</td>
                        <td className={cx('td-center')}>3</td>
                        <td className={cx('td-center')}>4</td>
                    </tr>

                    <tr className={cx('tr-size')}>
                        <td>Chuyến đi tham dự sự kiện tổng kết chương trình</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}>5</td>
                        <td className={cx('td-center')}>3</td>
                        <td className={cx('td-center')}>4</td>
                    </tr>

                    {/* 2 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>2</td>
                        <td rowSpan={2}>
                            <div>
                                <b>TOP NỮ CHIẾN BINH XUẤT SẮC NHẤT TOÀN CHƯƠNG TRÌNH</b>
                            </div>
                                TOP Nữ có thành tích cao nhất toàn Chương trình
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Tổng số km đi/chạy bộ (có GPS) cộng dồn mỗi Thử thách</li>
                                <li>Hoạt động đi/chạy bộ phải có GPS và thể hiện đường chạy (route map) rõ ràng, không có dấu hiệu sai số. Hoạt động có kết quả GPS bị lỗi được tính là không hợp lệ.</li>
                            </ul>
                        </td>
                        <td>Kỷ niệm chương</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}>5</td>
                        <td className={cx('td-center')}>3</td>
                        <td className={cx('td-center')}>4</td>
                    </tr>

                    <tr className={cx('tr-size')}>
                        <td>Chuyến đi tham dự sự kiện tổng kết chương trình</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}>5</td>
                        <td className={cx('td-center')}>3</td>
                        <td className={cx('td-center')}>4</td>
                    </tr>

                    {/* 3 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>3</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH KẾT NỐI</b>
                            </div>
                            Thành viên mời thêm nhiều người tham gia
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Người tham gia có số lượng người được mời tham gia (và đồng thời có hoạt động trên Cung Đường Yêu Thương) nhiều nhất toàn Chương trình. Áp dụng cho hoạt động được ghi nhận tự động, không áp dụng cho hoạt động ghi nhận thủ công.
                                    <br></br>
                                    Ví dụ: Bạn mời được 40 người tham gia nhưng chỉ có 30 người được mời tham gia có hoạt động thì số lượng hợp lệ để ghi nhận kết quả của bạn là 30 người.
                                </li>
                                <li>Nếu số lượng người được mời tham gia không xác thực &gt;20 người, toàn bộ kết quả giải thưởng Chiến binh Kết nối của cá nhân sẽ không được công nhận.</li>
                            </ul>
                        </td>
                        <td>Kỷ niệm chương</td>
                        <td className={cx('td-center')}>2</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    <tr className={cx('tr-size')}>
                        <td>Chuyến đi tham dự sự kiện tổng kết chương trình</td>
                        <td className={cx('td-center')}>2</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    {/* 4 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>3</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH CUA-RƠ BỀN BỈ</b>
                            </div>
                            Thành viên thực hiện đều đặn hoạt động đạp xe
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Thực hiện hoạt động đạp xe (có GPS) có quãng đường được quy đổi tối thiểu 1km mỗi ngày, tương đương 4km đạp xe thực tế</li>
                                <li>Tiêu chí phụ: Số ngày thực hiện nhiều nhất</li>
                            </ul>
                        </td>
                        <td>Kỷ niệm chương</td>
                        <td className={cx('td-center')}>2</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    <tr className={cx('tr-size')}>
                        <td>Chuyến đi tham dự sự kiện tổng kết chương trình</td>
                        <td className={cx('td-center')}>2</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    {/* 5 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>5</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH YOGA BỀN BỈ</b>
                            </div>
                            Thành viên thực hiện đều đặn hoạt động yoga
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Thực hiện hoạt động yoga (hoạt động ghi nhận tự động) có quãng đường được quy đổi tối thiểu 1km mỗi ngày, tương đương 7 phút 45 giây tập Yoga</li>
                                <li>Tiêu chí phụ: Số ngày thực hiện nhiều nhất</li>
                            </ul>
                        </td>
                        <td>Kỷ niệm chương</td>
                        <td className={cx('td-center')}>1</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    <tr className={cx('tr-size')}>
                        <td>Chuyến đi tham dự sự kiện tổng kết chương trình</td>
                        <td className={cx('td-center')}>1</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    {/* 6 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>5</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH BƠI LỘI BỀN BỈ</b>
                            </div>
                            Thành viên thực hiện đều đặn hoạt động bơi lội
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Thực hiện hoạt động bơi lội (hoạt động ghi nhận tự động) có quãng đường được quy đổi tối thiểu 1km mỗi ngày, tương đương 250m bơi thực tế</li>
                                <li>Tiêu chí phụ: Số ngày thực hiện nhiều nhất</li>
                            </ul>
                        </td>
                        <td>Kỷ niệm chương</td>
                        <td className={cx('td-center')}>1</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>

                    <tr className={cx('tr-size')}>
                        <td>Chuyến đi tham dự sự kiện tổng kết chương trình</td>
                        <td className={cx('td-center')}>1</td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                        <td className={cx('td-center')}></td>
                    </tr>
                </tbody>
            </table>
            <div style={{marginTop:'10px'}}>
                <b>* BẢNG CƠ CẤU GIẢI THƯỞNG TỪNG THỬ THÁCH</b>
                : xem chi tiết tại mỗi trang Thử thách.
            </div>
        </>
     );
}

export default CoCau;