import classNames from "classnames/bind";
import styles from './CoCauNuoc.module.scss';
const cx = classNames.bind(styles);

function CoCauNuoc() {
    return ( 
        <>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <table style={{maxWidth:'1271px'}} className={cx('table')}>
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
                                <b>CHIẾN BINH NĂNG NỔ</b>
                            </div>
                            Thành viên hoàn thành 50km đầu tiên
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Hoàn thành 50km sớm nhất của Thử thách (đi/chạy bộ có GPS)</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Áo thun</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>200</td>
                        <td rowSpan={2} className={cx('td-center')}>100</td>
                        <td rowSpan={2} className={cx('td-center')}>150</td>
                    </tr>
                    <br></br>

                    {/* 2 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>2</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH XUẤT SẮC</b>
                            </div>
                            Thành viên có thành tích cao nhất (có GPS)
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Số km đi/chạy bộ (có GPS) của Thử Thách</li>
                                <li>Danh sách đạt giải không bao gồm top 5 nam/nữ chiến binh xuất sắc</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Huy chương vật lý</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>100</td>
                        <td rowSpan={2} className={cx('td-center')}>50</td>
                        <td rowSpan={2} className={cx('td-center')}>75</td>
                    </tr>
                    <br></br>

                    {/* 3 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>3</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH BỀN BỈ</b>
                            </div>
                            Thành viên thực hiện đều đặn hoạt động đi/chạy bộ
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Thực hiện hoạt động đi/chạy bộ (có GPS) tối thiểu 1km mỗi ngày của Thử thách</li>
                                <li>
                                    <i>Tiêu chí phụ: </i>
                                    <li style={{marginLeft:'30px'}}>+ Số ngày thực hiện nhiều nhất</li>
                                    <li style={{marginLeft:'30px'}}>+ Tổng quãng đường dài nhất</li>
                                </li>
                                <li>Danh sách đoạt giải không bao gồm thành viên đã đạt giải Chiến binh Xuất sắc</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Huy chương vật lý</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>100</td>
                        <td rowSpan={2} className={cx('td-center')}>50</td>
                        <td rowSpan={2} className={cx('td-center')}>100</td>
                    </tr>
                    <br></br>

                    {/* 4 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>4</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH TIẾN BỘ</b>
                            </div>
                            Thành viên nỗ lực, tiến bộ
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Thành viên có số tuần tiến bộ nhiều nhất</li>
                                <li>Tuần tiến bộ được tính là tuần có tổng quãng đường đi/chạy bộ (có GPS) tăng 10% so với thành tích tuần trước đó của Thử thách</li>
                                <li>Tiêu chí phụ: Tổng quãng đường đi/chạy bộ (có GPS) dài nhất</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Áo thun</td>
                        <td rowSpan={2} className={cx('td-center')}>200</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 5 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>5</td>
                        <td rowSpan={2}>
                            <div>
                                <b>TOP NAM CHIẾN BINH XUẤT SẮC NHẤT THỬ THÁCH</b>
                            </div>
                            TOP Nam có thành tích cao nhất
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Tổng số km đi/chạy bộ (có GPS) cộng dồn của Thử thách</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Kỷ niệm chương</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>5</td>
                        <td rowSpan={2} className={cx('td-center')}>3</td>
                        <td rowSpan={2} className={cx('td-center')}>4</td>
                    </tr>

                    <br></br>

                    {/* 6 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>6</td>
                        <td rowSpan={2}>
                            <div>
                                <b>TOP NỮ CHIẾN BINH XUẤT SẮC NHẤT THỬ THÁCH</b>
                            </div>
                            TOP Nữ có thành tích cao nhất
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Tổng số km đi/chạy bộ (có GPS) cộng dồn của Thử thách</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Kỷ niệm chương</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>5</td>
                        <td rowSpan={2} className={cx('td-center')}>3</td>
                        <td rowSpan={2} className={cx('td-center')}>4</td>
                    </tr>
                    
                    <br></br>
                    {/* 7 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>7</td>
                        <td rowSpan={2}>
                            <div>
                                <b>TOP CÂU LẠC BỘ CHIẾN BINH XUẤT SẮC NHẤT THỬ THÁCH</b>
                            </div>
                            TOP Câu lạc bộ có thành tích cao nhất của Thử thách
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Tổng số km đi/chạy bộ (có GPS) cộng dồn của Thử thách</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>100 Phiếu mua hàng điện tử trị giá 50,000 đồng/câu lạc bộ</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>3</td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}>2</td>
                    </tr>
                    <br></br>

                    
                    {/* 8 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>8</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CÂU LẠC BỘ CHIẾN BINH KẾT NỐI</b>
                            </div>
                            Câu lạc bộ có nhiều Tân binh của Thử thách
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Với mỗi 50 thành viên mới tham gia ở mỗi Thử thách, Câu lạc bộ sẽ nhận 50 phiếu mua hàng điện tử trị giá 50,000 đồng/phiếu (Tối đa 3 lần nhận thưởng/câu lạc bộ)</li>
                                <li>Thành viên mới phải có ít nhất 1 hoạt động được ghi nhận tự động trên Cung Đường Yêu Thương 2023</li>
                                <li>Thông tin của thành viên mới (số điện thoại, email) và hoạt động phải được xác thực</li>
                                <li>Nếu số lượng người được mời tham gia không xác thực &gt;20 người, toàn bộ kết quả giải thưởng Chiến binh Kết nối của câu lạc bộ sẽ không được công nhận</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>50 Phiếu mua hàng điện tử trị giá 50,000 đồng/lần (tối đa 3 lần nhận/ câu lạc bộ)</td>
                        <td rowSpan={2} className={cx('td-center')}>Không giới hạn</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 9 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>9</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH CUA-RƠ BỨT PHÁ</b>
                            </div>
                            Thành viên đầu tiên hoàn thành 10 ngày đạp xe (hoạt động được ghi nhận tự động, không áp dụng cho hoạt động nhập tay)
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Hoàn thành 10 ngày đạp xe</li>
                                <li>Thời gian được ghi nhận để tính kết quả là thời gian kết quả hoạt động đạp xe được đồng bộ lên Dai-ichi Life - Cung Đường Yêu Thương</li>
                                <li>Kết quả được ghi nhận thành tích là kết quả từ hoạt động đạp xe được ghi nhận tự động, không áp dụng cho kết quả từ hoạt động đạp xe nhập tay</li>
                                <li>Ngày đạp xe được tính là ngày có ít nhất 1 hoạt động đạp xe, mỗi hoạt động đạp xe phải đạt tối thiểu 5km</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Nón bảo hiểm xe đạp</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>30</td>
                        <td rowSpan={2} className={cx('td-center')}>20</td>
                        <td rowSpan={2} className={cx('td-center')}>25</td>
                    </tr>
                    <br></br>

                    {/* 10 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>10</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH CUNG ĐƯỜNG YÊU THƯƠNG</b>
                            </div>
                            Thành viên hoàn thành Thử thách
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Hoàn thành số km mục tiêu đề ra cho Thử thách</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Huy chương điện tử</td>
                        <td rowSpan={2} className={cx('td-center')}>Không giới hạn</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 11 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>11</td>
                        <td rowSpan={16}>
                            <div>
                                <b>CHIẾN BINH MAY MẮN</b>
                            </div>
                            Rút thăm may mắn
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Dành cho tất cả các thành viên đặt và hoàn thành mục tiêu 800km đi/chạy bộ và/hoặc quy đổi tương đương từ các hoạt động khác</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Đồng hồ Garmin Forerunner 55 và Áo khoác</td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 12 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>12</td>
                        
                        <td rowSpan={2}>
                            <ul>
                                <li>Dành cho tất cả các thành viên đặt và hoàn thành mục tiêu 400km đi/chạy bộ và/hoặc quy đổi tương đương từ các hoạt động khác</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Giày Asics Nova Blast và Áo khoác</td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 13 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>13</td>
                        
                        <td rowSpan={2}>
                            <ul>
                                <li>Dành cho tất cả các thành viên đặt và hoàn thành mục tiêu 200km đi/chạy bộ và/hoặc quy đổi tương đương từ các hoạt động khác</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Giày Asics GT1000-11 và Áo khoác</td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 14 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={10}>14</td>
                        <td rowSpan={10}>
                            <ul>
                                <li>Dành cho tất cả các thành viên đặt và hoàn thành mục tiêu 30km/50km/100km đi/chạy bộ và/hoặc quy đổi tương đương từ các hoạt động khác</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Đồng hồ Garmin Forerunner 55</td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>
                    
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>Áo khoác</td>
                        <td rowSpan={2} className={cx('td-center')}>20</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>
                    
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>Bình nước</td>
                        <td rowSpan={2} className={cx('td-center')}>40</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>Nón</td>
                        <td rowSpan={2} className={cx('td-center')}>50</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>
                    
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>Đai đeo chạy bộ</td>
                        <td rowSpan={2} className={cx('td-center')}>50</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 15 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>15</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CHIẾN BINH MAY MẮN THEO TỪNG NHÓM TUỔI</b>
                            </div>
                            Rút thăm may mắn
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Giải thưởng Rút thăm may mắn theo từng nhóm tuổi: &lt;20, 20-29, 30-39, 40-49, ≥ 50</li>
                                <li>Thành viên có ít nhất 1 hoạt động được ghi nhận. Hoạt động được tính bao gồm hoạt động được ghi nhận tự động và hoạt động nhập thủ công, có tổng quãng đường/quãng đường quy đổi tối thiểu 1km.</li>
                                <li>Nhóm tuổi được tính dựa trên thông tin Ngày sinh của người tham gia tại Trang thông tin Cá nhân. Người tham gia vui lòng điền/cập nhật thông tin ngày sinh chính xác.</li>
                                <li>Danh sách đạt giải không bao gồm thành viên đã đạt giải Chiến binh Năng nổ & Chiến binh Xuất sắc</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Đai đeo chạy bộ</td>
                        <td rowSpan={2} className={cx('td-center')}>10/mỗi nhóm tuổi</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                    </tr>
                    <br></br>

                    {/* 16 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>16</td>
                        <td rowSpan={2}>
                            <div>
                                <b>TÂN CHIẾN BINH MAY MẮN</b>
                            </div>
                            Rút thăm may mắn
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Dành cho thành viên hoàn thành ít nhất 7 ngày đi/chạy bộ (có GPS)</li>
                                <li>Hoạt động đi/chạy bộ (có GPS) có quãng đường ít nhất 1km</li>
                                <li>Danh sách đạt giải không bao gồm thành viên đã đạt giải Chiến binh Xuất sắc và Chiến binh Bền bỉ</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>Áo thun</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>100</td>
                        <td rowSpan={2} className={cx('td-center')}>30</td>
                        <td rowSpan={2} className={cx('td-center')}>45</td>
                    </tr>
                    <br></br>

                    {/* 17 */}
                    <tr className={cx('tr-size')}>
                        <td rowSpan={2}>17</td>
                        <td rowSpan={2}>
                            <div>
                                <b>CÂU LẠC BỘ HOÀN THÀNH TIÊU CHÍ DÀNH RIÊNG THỬ THÁCH ĐẤT</b>
                            </div>
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li>Câu lạc bộ có nhiều thành viên có hoạt động nhất</li>
                                <li>Hoạt động được tính bao gồm hoạt động được ghi nhận tự động và hoạt động nhập thủ công, có tổng quãng đường/quãng đường quy đổi tối thiểu 1km.</li>
                            </ul>
                        </td>
                        <td rowSpan={2}>100 Phiếu mua hàng điện tử trị giá 50,000 đồng/câu lạc bộ</td>
                        <td rowSpan={2} className={cx('td-center')}></td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}>1</td>
                        <td rowSpan={2} className={cx('td-center')}>2</td>
                    </tr>
                    <br></br>
                </tbody>
            </table>

            <div style={{maxWidth:'1271px', fontSize:'16px'}}>
            * Giải rút thăm may mắn sẽ được tổ chức thông qua hình thức rút thăm dựa trên mã số đăng ký (số BIB) của người tham gia và được phát sóng trực tiếp (livestream) trên trang Facebook của chương trình tại: https://www.facebook.com/DLVNCungDuongYeuThuong trong vòng 5-7 ngày làm việc sau khi Thử thách kết thúc.
            <ul>
                <li>+ Bảng cơ cấu giải thưởng này chỉ dành riêng cho Thử thách Nước.</li>
                <li>+ Bảng cơ cấu giải thưởng của mỗi Thử thách sẽ được cập nhật tại mỗi trang Thử thách trước khi bắt đầu.</li>
                <li>+ Tham khảo bảng cơ cấu giải thưởng toàn Chương trình <a href="/pages/prize/cocaugiaithuong" style={{color:'#337ab7', display:'inline-block'}}>tại đây</a>.</li>
            </ul>
            </div>
            </div>
        </>
     );
}

export default CoCauNuoc;