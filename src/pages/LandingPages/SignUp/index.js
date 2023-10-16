/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes

// Images
import bgImage from "assets/images/pngtree-creative-3d.jpeg";
import styles from "./SignUp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)



const errorStyle = {
  color: 'red',       // Màu chữ đỏ
  fontSize: '12px'    // Kích thước font nhỏ hơn
};



function SignUp() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^\d{10}$/;
  const isPasswordValid = (password) => password.length >= 8;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Xóa thông báo lỗi khi người dùng thay đổi nội dung trường
    if (formErrors.name) {
      setFormErrors({ ...formErrors, name: '' });
    }
  };
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (formErrors.phone) {
      setFormErrors({ ...formErrors, phone: '' });
    }
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (formErrors.email) {
      setFormErrors({ ...formErrors, email: '' });
    }
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (formErrors.password) {
      setFormErrors({ ...formErrors, password: '' });
    }
  };
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (formErrors.confirmPassword) {
      setFormErrors({ ...formErrors, confirmPassword: '' });
    }
  };
  

  const handleSignUp = () => {
    const errors = {};

    if (!name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!phone) {
      errors.phone = "Vui lòng nhập số điện thoại";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ";
    }
    if (!email) {
      errors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email không hợp lệ";
    }
    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    } else if (!isPasswordValid(password)) {
      errors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      // Nếu không có lỗi, chuyển hướng đến trang khác (ví dụ: trang đăng nhập)
      navigate("/authentication/signin");
    }
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleButton = () =>{
    navigate("/presentation")
  }

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={0}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} 
      />
       

    <div className={cx('flex-item')}>
        <MKButton classNames={cx('btn-mk')}
          component={Link}
          to= "/"
          variant="text"
          style={{
            fontSize: "40px",
            zIndex: "3",
          }}
        >X</MKButton>


      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2} mt={-10}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign up
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                  <MKBox component="form" role="form">
                    <MKBox mb={2}>
                      <MKInput
                        type="name"
                        label="Name"
                        fullWidth
                        value={name}
                        // onChange={(e) => setName(e.target.value)}
                        onChange={handleNameChange}
                      />
                      {formErrors.name && <div style={errorStyle}>{formErrors.name}</div>}
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="phone"
                        label="Phone"
                        fullWidth
                        value={phone}
                        // onChange={(e) => setPhone(e.target.value)}
                        onChange={handlePhoneChange}
                      />
                      {formErrors.phone && <div style={errorStyle}>{formErrors.phone}</div>}
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="email"
                        label="Email"
                        fullWidth
                        value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={handleEmailChange}
                      />
                      {formErrors.email && <div style={errorStyle}>{formErrors.email}</div>}
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Password"
                        fullWidth
                        value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={handlePasswordChange}
                      />
                      {formErrors.password && <div style={errorStyle}>{formErrors.password}</div>}
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Confirm Password"
                        fullWidth
                        value={confirmPassword}
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                        onChange={handleConfirmPasswordChange}
                      />
                      {formErrors.confirmPassword && <div style={errorStyle}>{formErrors.confirmPassword}</div>}
                    </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth
                        component="span"
                        to="/authentication/signin"
                        onClick={handleSignUp}
                    >
                      sign up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account{"  "}
                      <MKTypography
                        component={Link}
                        to="/authentication/signin"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      </div>
    </>
  );
}



export default SignUp;
