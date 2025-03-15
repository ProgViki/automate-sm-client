import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerifyEmail from "./pages/OtpScreen";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import store from "./api/data/store";


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
              {/* <Route path="/*" element={<RoutesList />} /> */}
              {/* <Route path="/auth/set-password" element={<SetPassword />} /> */}
            </Routes>
          </BrowserRouter>
       
    </Provider>
  );
}
