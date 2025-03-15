import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useResendApplicantVerOtpMutation,
  useVerifyApplicantMutation,
} from "../../api/user.api";
import { toastApiError } from "../../utils/error.util";
import { useAuthState } from "../../api/data/auth";

const VerifyEmail = () => {
  const location = useLocation();
  const { email } = location.state;

  const navigate = useNavigate();
  const authState = useAuthState();

  const [seconds, setSeconds] = useState(120);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsDisabled(false);
    }
  }, [seconds]);

  const [resendOtp, { isLoading: resending }] =
    useResendApplicantVerOtpMutation();

  const [verifyApplicant, { isLoading: verifying }] =
    useVerifyApplicantMutation();

  const handleResendOtp = () => {
    resendOtp()
      .unwrap()
      .then((res) => {
        authState.set(res);
        message.success("OTP sent successfully");
        setSeconds(120);
        setIsDisabled(true);
      })
      .catch(toastApiError);
  };

  const handleSubmit = (values: { code: string }) => {
    verifyApplicant(values)
      .unwrap()
      .then(() => {
        message.success("Account Verified");
        authState.clear();
        navigate("/login", { replace: true });
      })
      .catch(toastApiError);
  };

  return (
    <div className="relative flex justify-center h-screen">
      <div className="absolute top-4 left-4">
        <Button
          className="w-fit px-4 text-[#007D53]"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack />
          Back
        </Button>
      </div>
      <Form onFinish={handleSubmit} className="w-full max-w-md mt-[15vh]">
        <div className="relative z-50 grid gap-8 p-8 bg-white rounded">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/assets/rafiki.png"
              alt="logo"
              className="w-[80px] h-[80px]"
            />
            <p className="text-center text-[24px] font-bold">
              Verification Code
            </p>
            <p className="-mt-2 text-sm text-center">
              Check your mail. We have sent a code to{" "}
              <p className="font-bold">{email && email}</p>
            </p>
          </div>
          <div className="grid mx-auto">
            <Form.Item
              hasFeedback
              validateStatus="success"
              name="code"
              rules={[{ required: true, message: "Enter OTP!" }]}
            >
              <Input.OTP className="ml-4" />
            </Form.Item>

            <Button
              type="primary"
              className="font-semibold"
              htmlType="submit"
              loading={verifying}
            >
              Verify
            </Button>
          </div>
          <div className="text-center ">
            <p className="space-x-2 text-sm">
              <span>Didn't get a code yet?</span>
              {email && (
                <Button
                  disabled={isDisabled}
                  loading={resending}
                  onClick={handleResendOtp}
                  className="text-[#007D53] rounded-2xl font-semibold"
                >
                  {isDisabled ? `Resend in ${seconds}s` : "Resend OTP"}
                </Button>
              )}
            </p>
          </div>
        </div>
        <div className="bottom-">
          <p className="text-center text-gray-500">
            CopyRight 2024 All Rights Reserved Zoracom
          </p>
          <p className="flex justify-center gap-6 text-gray-500">
            <span>Terms</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default VerifyEmail;
