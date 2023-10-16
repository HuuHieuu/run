// import React from "react";
// import { Link } from "react-router-dom";

// function BackButton() {
//   const goBack = () => {
//     window.history.back(); // Sử dụng window.history để quay lại trang trước
//   };

//   return (
//     <button
//       style={{
//         position: "absolute",
//         top: "20px", // Điều chỉnh vị trí nút trên phần nền
//         left: "20px", // Điều chỉnh vị trí nút trên phần nền
//         zIndex: 2, // Đảm bảo nút có z-index lớn hơn phần nền
//         width: "100px",
//         height: "40px",
//         backgroundColor: "white",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//         color: "#000",
//         fontSize: "16px",
//         fontWeight: "bold",
//       }}
//       onClick={goBack}
//     >
//       Quay lại
//     </button>
//   );
// }

// export default BackButton;


import React from "react";
import { useNavigate } from "react-router-dom";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // Điều hướng đến trang chủ
  };

  return (
    <div>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/authentication/signin",
            label: "Đăng nhập",
            color: "info",
          }}
          sticky
        />
        <button
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            color: "#000",
            fontSize: "16px",
            fontWeight: "bold",
            zIndex:'2'
          }}
          onClick={goBack}
        >
          Quay lại
        </button>
    </div>
  );
}

export default BackButton;
