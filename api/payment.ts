import axios from "axios";

// En tu frontend, donde configuras axios
export const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json", 
  }
});


