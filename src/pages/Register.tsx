import { Button, Form, Input, Select } from "antd";

import { useNavigate } from "react-router-dom";

const Register = () => {
 

  return (
    <div className="flex flex-col h-screen overflow-hidden md:flex-row">
      <div className="relative flex flex-col w-full p-4 bg-white md:w-1/2 md:p-0">
        <div className="absolute top-4 left-4">
          <img src="/assets/nemsa-logo.png" alt="Logo" className="h-12 w-25" />
        </div>

        <div className="flex items-start justify-center h-full pb-8 mt-10 overflow-y-scroll md:mt-16 hide-scrollbar">
          <div className="w-full max-w-md p-4 space-y-4 md:p-8">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">Register</h2>
              <p className="text-sm">Enter your information to get started</p>
            </div>

            <Form
              name="register"
              initialValues={{ remember: true }}
              // onFinish={handleRegisterApplicant}
              layout="vertical"
              className="space-y-4"
            >
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
                style={{ marginBottom: "6px" }}
              >
                <Input placeholder="E.g John" />
              </Form.Item>

              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                  style={{ marginBottom: "6px", width: "100%" }}
                  className="md:w-3/5"
                >
                  <Input placeholder="E.g Doe" />
                </Form.Item>

                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                  style={{ marginBottom: "6px", width: "100%" }}
                  className="md:w-2/5"
                >
                  <Select>
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                style={{ marginBottom: "6px" }}
              >
                <Input placeholder="Enter your 11 digits number" />
              </Form.Item>

              <Form.Item
                label="Alternate Phone Number"
                name="altPhoneNumber"
                rules={[
                  { message: "Please input your alternate phone number!" },
                ]}
                style={{ marginBottom: "6px" }}
              >
                <Input placeholder="Enter your 11 digits number" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Input valid email" },
                ]}
                style={{ marginBottom: "6px" }}
              >
                <Input placeholder="E.g sample@gmail.com" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ marginBottom: "6px" }}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item style={{ marginBottom: "8px" }}>
                <Button
                  // loading={registeringUser}
                  type="primary"
                  htmlType="submit"
                  className="w-full mt-4"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>

            <div className="pt-2 space-y-4 text-sm">
              <p className="text-center">
                Do you already have an account?
                <a href="/login" className="text-[#007D53] ml-1 font-semibold">
                  Log In
                </a>
              </p>
              <div className="space-y-1">
                <p className="text-center text-gray-500">
                  CopyRight 2024 All Rights Reserved Zoracom
                </p>
                <p className="flex justify-center gap-6 text-gray-500">
                  <span>Terms</span>
                  <span>Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-1/2 md:block">
        <img
          src="/assets/bkgrdPix.png"
          alt="Login Visual"
          className="object-cover object-top w-full h-full"
        />
      </div>
    </div>
  );
};

export default Register;
