import AdminTestimonials from "@/components/Admin/AdminTestimonials";

export const metadata = {
  title: "Testimonials Review | XTORC Admin",
  description: "Manage and moderate client reviews.",
  robots: { index: false, follow: false },
};

export default function AdminTestimonialsPage() {
  return <AdminTestimonials />;
}
