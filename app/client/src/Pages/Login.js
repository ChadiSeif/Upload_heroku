import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { CurrentUser, userLogin } from "../JS/Actions/userAction";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./Login.css";
// import LoginClass from "./LoginClass";
// import Convert from "./convert";
// import Testing from "./test.js";

const FormItem = Form.Item;

const style = { BackgroundColor: "blue" };
export const StyleContext = React.createContext(style);

const Login = () => {
  const [user, setUser] = useState({
    Email: "a",
    Password: "a",
  });

  const refFocus = useRef();

  // const User = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CurrentUser());
  }, [dispatch]);

  useEffect(() => {
    refFocus.current.focus();
  }, []);

  const HandleChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log("email: " + user.Email);
  console.log("password: " + user.Password);
  return (
    <div>
      {/* <div className={this.isLoggedIn() ? " " : " hidden"}>
        Successfully logged in...
      </div> */}
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img
              src={"/assets/login.png"}
              width="300"
              style={{ position: "relative" }}
              alt="login"
            />
          </div>
          <div className="loginForm">
            <h2>Login</h2>

            <Form className="login-form">
              <FormItem>
                <Input
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Username"
                  name="Email"
                  onChange={HandleChange}
                  ref={refFocus}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="Password"
                  name="Password"
                  onChange={HandleChange}
                />
              </FormItem>
              <FormItem>
                <Checkbox>Remember me</Checkbox>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => dispatch(userLogin(user))}
                >
                  Log in
                </Button>
                {/* <LoginClass user={user} /> */}
                {/* <Button onClick={() => dispatch(userLogin(user))}>test</Button> */}
              </FormItem>
              {/* <h5>Welcome testing</h5> */}
              {/* <Testing /> */}
              {/* <h3>Converter</h3>
              <StyleContext.Provider value={style}>
                <Convert />
              </StyleContext.Provider> */}
            </Form>
          </div>
        </div>
        <div className="footer">
          <li
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            Designed by Seif Chedi
          </li>
        </div>
      </div>
    </div>
  );
};

export default Login;
