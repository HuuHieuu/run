import React, { useState, useEffect } from 'react';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.jpeg';
import banner3 from 'assets/images/banner3.png';
import banner4 from 'assets/images/banner4.png';

const images = [
  banner3,
  banner4
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Chuyển đổi hình ảnh tự động mỗi 5 giây
    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, []);


  return (
      <div style={{position: 'relative', height:'417px', width:'100%', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: activeIndex === index ? 1 : 0, /* Hiển thị hình ảnh hoặc ẩn đi */
              transition: 'opacity 1s ease-in-out', /* Áp dụng transition */
            }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                // maxWidth: '100%',
                // maxHeight: '100%',
                width:'100%',
                height: '100%',
                objectFit: 'cover', // Cắt hoặc điều chỉnh tỷ lệ khung hình để vừa với container
                // paddingTop: '75px',
              }}
            />
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: activeIndex === index ? 'white' : 'gray',
                borderRadius: '50%',
                margin: '0 5px',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
  );
}

export default Carousel;
