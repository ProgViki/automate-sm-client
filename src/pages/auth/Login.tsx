import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
// import { useLoginMutation } from "../../api/auth.api";
// import { LoginInput } from "../../api/types";
// import { useAuthComplete } from "../../hooks/useAuthComplete";
// import LabelComponent from "../../components/LabelComponent";

const Login = () => {
  // const authComplete = useAuthComplete();
  // const [login] = useLoginMutation();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // const handleLogin = async (values: LoginInput) => {
  //   setIsLoggingIn(true);
  //   await authComplete(login(values).unwrap());
  //   setIsLoggingIn(false);
  // };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col justify-center w-full overflow-hidden bg-white md:flex-row md:w-1/2 ">
        <div className="absolute top-4 left-4">
          <img src="/assets/nemsa-logo.png" alt="Logo" className="h-12 w-25" />
        </div>

        <div className="relative flex items-center justify-center w-full max-w-md px-8 -mt-12 space-y-1 md:mt-8">
          <div className="w-full max-w-md px-8 -mt-6 space-y-1 md:mt-16">
            <div className="pb-4 space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold">Portal Login</h2>
              <p className="text-sm">Hi, Welcome back</p>
            </div>

            <Form
              name="login"
              initialValues={{ remember: true }}
              // onFinish={handleLogin}
              layout="vertical"
              className="space-y-4"
            >
              <Form.Item
                // label={<LabelComponent label="Email" required />}
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
                className="mb-[6px]"
              >
                <Input placeholder="E.g sample@gmail.com" />
              </Form.Item>

              <Form.Item
                // label={<LabelComponent label="Password" required />}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                className="mb-[6px]"
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <div className="flex mb-[12px] w-full justify-between items-center">
                <Checkbox>Remember Me</Checkbox>
                <a
                  href="/forgot"
                  className="text-[#007D53] hover:text-[#007D53] ml-2 font-semibold "
                >
                  Forgot password?
                </a>
              </div>

              <Form.Item style={{ marginBottom: "12px" }}>
                <Button
                  loading={isLoggingIn}
                  type="primary"
                  htmlType="submit"
                  className="w-full font-semibold"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>

            {/* Additional Links and Info */}
            <div className="pt-2 space-y-4 text-sm">
              <p className="text-center">
                Not registered yet?
                <a
                  href="/register"
                  className="text-[#007D53] ml-2 font-semibold"
                >
                  Register Now
                </a>
              </p>

              <div className="space-y-1">
                <p className="text-center text-gray-300">
                  © 2024 All Rights Reserved Zoracom
                </p>
                <p className="flex justify-center gap-6 text-gray-300">
                  <a href="#">Terms</a>
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section - Hidden on small screens */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/assets/bkgrdPix.png"
          alt="Login Visual"
          className="object-cover object-top w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
