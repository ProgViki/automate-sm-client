import { Button, Form, Input } from "antd";
import { useState } from "react";
import NemsaLogo from "/assets/nemsa-logo.png";

const StaffPassword = () => {
  const [loginDetails, setLoginDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleInputChange = (name: string, value: string) => {
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
    console.log(loginDetails);
  };

  return (
    <div className="h-[100vh] w-full ">
      <div className="header h-[101px] px-6 py-4 border-b">
        <img src={NemsaLogo} alt="nemsa" />
      </div>

      <div className="h-[calc(100vh-105px)] w-full flex flex-col items-center justify-center mt-[-150px]">
        <div className="max-w-[410px] w-full space-y-6">
          <div className="">
            <h2 className="font-bold text-[28px]"> Portal Login</h2>
            <p className="">Set your password to login</p>
          </div>
          <Form className="space-y-6">
            <div className="">
              {/* <Form.Item>
                <Input
                  type="email"
                  placeholder="E.g sample@email.com"
                  name="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </Form.Item> */}

              <Form.Item>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Confirm password"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
              </Form.Item>

              <div className="flex items-center justify-between"></div>
            </div>

            <Button type="primary" className="w-full">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StaffPassword;
