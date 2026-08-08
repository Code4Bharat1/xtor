import axios from "axios";

// Read API Base URL strictly from environment variable (no hardcoded URLs)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios Request Interceptor: Attach JWT Token and handle FormData properly
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("xtorc_admin_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Automatically remove application/json header for FormData uploads
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Axios Response Interceptor: Extract data cleanly & format detailed error messages
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorDetails = error.response?.data?.errors;
    let errorMsg =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "An unexpected API error occurred";

    if (Array.isArray(errorDetails) && errorDetails.length > 0) {
      const fieldErrors = errorDetails.map((e) => e.message || e.msg).filter(Boolean).join(". ");
      if (fieldErrors) {
        errorMsg = `${errorMsg}: ${fieldErrors}`;
      }
    }

    return Promise.reject(new Error(errorMsg));
  }
);

export const api = {
  get: (url, params) => apiClient.get(url, { params }),
  post: (url, data, config) => apiClient.post(url, data, config),
  patch: (url, data, config) => apiClient.patch(url, data, config),
  put: (url, data, config) => apiClient.put(url, data, config),
  delete: (url, config) => apiClient.delete(url, config),
};

export default apiClient;
