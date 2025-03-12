

export type AuthState = {
  token: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type AuthResult = AuthState;

export type ForgotPasswordInput = {
  email: string;
  
}

export type ForgotPasswordResponse = {
  message: string;
}

export type OtpCodeInput = {
  email: string;
  otp: string;
}
export type OtpCodeResponse = {
  message: string;
  token: string;
}
export interface ResetPasswordInput {
  token: string; // ✅ Use token instead of otp
  newPassword: string;
}

export type ResetPasswordResponse = {
  message: string;
}

export type Org = {
  id: string;
  name: string;
  logo: string;
  industry: string;
  phone: string;
  website: string;
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  supportName: string;
  supportEmail: string;
  supportPhone: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updatedAt: string;
};
