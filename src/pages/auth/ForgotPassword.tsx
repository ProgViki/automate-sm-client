import { Form, Input, Button, message } from "antd";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import { useForgotPasswordMutation } from "../../api/auth.api";

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (values: { email: string }) => {
    try {
      // await forgotPassword(values).unwrap();
      message.success("Reset link sent to your email.");
      navigate("/login");
    } catch (error: any) {
      message.error(error?.data?.message || "Failed to send reset link. Try again.");
    }
  };

  const handleFailedSubmit = (errorInfo: any) => {
    message.error("Please enter a valid email.");
    console.error("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute top-4 left-4">
        <Button className="w-fit px-4 text-[#007D53]" onClick={() => navigate(-1)}>
          <BiArrowBack />
          Back
        </Button>
      </div>

      <div className="space-y-4">
        <img src="/assets/rafiki.png" alt="logo" className="mx-auto" />
        <h3 className="text-2xl font-bold text-center">Forgot Password</h3>
        <p className="text-sm text-center">
          Enter the email address associated with your account <br />
          and we will send you a password reset link.
        </p>

        <Form
          form={form}
          name="forgotPassword"
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={handleFailedSubmit}
          className="w-full max-w-md px-4 space-y-4 bg-white"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" 
            // loading={isLoading}
             className="w-full">
              {/* {isLoading ? "Sending..." : "Send Reset Link"} */}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
