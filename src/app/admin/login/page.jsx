import AdminLogin from "@/components/Admin/AdminLogin";

export const metadata = {
  title: "Admin Login | XTORC Control Panel",
  description: "Secure login for XTORC Administrators.",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <AdminLogin />;
}
