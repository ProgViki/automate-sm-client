import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { store } from "./api/data/store";
import SetPassword from "./page/auth/SetPassword";
import ForgotPassword from "./page/onboarding/ForgotPassword";
import Login from "./page/onboarding/Login";
import Register from "./page/onboarding/Register";
import RoutesList from "./page/RouteList";
import { useEffect } from "react";
import { useGetAuthUserQuery } from "./api/auth.api";
import { api } from "./api/base";
import Loading from "./components/shared/Loading";
import ResetPassword from "./page/onboarding/ResetPassword";
import VerifyEmail from "./page/onboarding/OtpScreen";
import { PopupProvider } from "./context/PopupContext";

function Home() {
  const navigate = useNavigate();

  // const { error, isLoading, data } = useGetAuthUserQuery();

//   useEffect(() => {
//     if (data) {
//       navigate("/installation/new-installation");
//     } else if (error && "status" in error && error.status === 401) {
//       api.util.resetApiState();
//       navigate("/login", { replace: true });
//     }
//   }, [isLoading, error, navigate, data]);

//   return (
//     <div className="h-screen">
//       <Loading />
//     </div>
//   );
}

export default function App() {
  return (
    // <ConfigProvider >

    <Provider store={store}>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/otp" element={<VerifyEmail />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/*" element={<RoutesList />} />
              <Route path="/auth/set-password" element={<SetPassword />} />
            </Routes>
          </BrowserRouter>
       
    </Provider>
  );
}
