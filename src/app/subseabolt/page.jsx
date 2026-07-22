import SubseaBolt from '@/components/SubseaBolt/SubseaBolt';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Subsea Bolt Tensioners | Underwater Pipeline Bolting | XTORC",
  description: "Specialized subsea hydraulic bolt tensioners. Built with corrosion-resistant materials for offshore diving and ROV underwater bolting.",
  keywords: ["subsea bolt tensioner","underwater bolt tensioning","marine pipeline bolting","offshore diving bolting"],
  alternates: {
    canonical: "https://xtorcind.com/subseabolt",
  },
  openGraph: {
    url: "https://xtorcind.com/subseabolt",
    title: "Subsea Bolt Tensioners | Underwater Pipeline Bolting | XTORC",
    description: "Specialized subsea hydraulic bolt tensioners. Built with corrosion-resistant materials for offshore diving and ROV underwater bolting.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subsea Bolt Tensioners | Underwater Pipeline Bolting | XTORC",
    description: "Specialized subsea hydraulic bolt tensioners. Built with corrosion-resistant materials for offshore diving and ROV underwater bolting.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <SubseaBolt/>
        <Footer/>
    </div>
  )
}
export default page;