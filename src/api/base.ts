import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./data";

export const tagTypes = [
  "org",
  "user",
  "staff",
  "customer",
  "survey",
  "vendor",
  "model",
  "device",
  "services",
  "dynamic-form",
  "project",
  "ticket",
  "roles",
  "products",
] as const;

const envUrl = import.meta.env.VITE_API_URL;
const defaultUrl = "http://localhost:5000";

export const baseUrl =
  envUrl ?? defaultUrl.replace(/\blocalhost\b/, window.location.hostname);

export const api = createApi({
  reducerPath: "api",
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers, { getState }) {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
});
