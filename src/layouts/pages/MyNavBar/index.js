import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import routes from "routes";

function MyNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {
    // Thực hiện các bước để đăng xuất người dùng
    // Ví dụ: xóa thông tin đăng nhập từ localStorage hoặc từ trạng thái ứng dụng
  
    // Xóa thông tin đăng nhập từ localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userAvatar');
  
    // Cập nhật trạng thái đăng nhập và avatar
    setIsLoggedIn(false);
    setUserAvatar("");
    navigate('/presentation')
  }; 

  useEffect(() => {
    // Kiểm tra xem có dữ liệu đăng nhập trong localStorage hay không
    const storedLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Nếu có, cập nhật trạng thái đăng nhập từ localStorage
    setIsLoggedIn(storedLoggedIn);
  }, []); 

  // Hàm này được gọi sau khi xác thực thành công và nhận URL của avatar
//   const handleSuccessfulLogin = (avatarUrl) => {
//     setIsLoggedIn(true);
//     setUserAvatar(avatarUrl);
//   };

//   const handleLogin = () =>{
//     navigate('/authentication/signin')
//     console.log("da nhan nut dang nhap")
//   }

  const handleAvatarClick = () => {
    if (isLoggedIn) {
      // Nếu người dùng đã đăng nhập, thực hiện đăng xuất
      handleLogout();
    } else {
     
    }
  };

  

//   const isLoggedInFromStorage = localStorage.getItem('isLoggedIn');

    return ( 
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", backgroundColor:"white"}} >
                <DefaultNavbar
                routes={routes}
                action={{
                    type: 'internal',
                    route: isLoggedIn ? "#" : "/authentication/signin",
                    label:  isLoggedIn ? (
                    <img src="" alt="Avatar" onClick={handleAvatarClick} />
                    ) : "Đăng nhập",
                    color: 'info',
                }}
                // transparent
                sticky
                />
            </div>
        </>
     );
}

export default MyNavBar;