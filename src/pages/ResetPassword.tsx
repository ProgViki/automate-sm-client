import { Form, Input, Button, message } from "antd";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { useResetPasswordMutation } from "../../api/auth.api";

const ResetPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Extract token from URL
  // const [resetPassword, { isLoading }] = useResetPasswordMutation();

  if (!token) {
    message.error("Invalid or expired reset link.");
    navigate("/forgot-password");
    return null;
  }

  // const handleSubmit = async (values: { newPassword: string; confirmPassword: string }) => {
  //   if (values.newPassword !== values.confirmPassword) {
  //     return message.error("Passwords do not match!");
  //   }

  //   try {
  //     await resetPassword({ token, newPassword: values.newPassword }).unwrap();
  //     message.success("Password reset successful! You can now log in.");
  //     navigate("/login");
  //   } catch (error: any) {
  //     message.error(error?.data?.message || "Failed to reset password. Try again.");
  //   }
  // };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute top-4 left-4">
        <Button className="w-fit px-4 text-[#007D53]" onClick={() => navigate(-1)}>
          <BiArrowBack />
          Back
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Reset Password</h3>
        <p className="text-sm text-center">Enter your new password below.</p>

        <Form form={form} name="resetPassword" layout="vertical" 
        // onFinish={handleSubmit} 
        className="w-full max-w-md px-4 space-y-4 bg-white">
          <Form.Item name="newPassword" label="New Password" rules={[{ required: true, message: "Please enter new password!" }]}>
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item name="confirmPassword" label="Confirm Password" rules={[{ required: true, message: "Please confirm your password!" }]}>
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} className="w-full">
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
