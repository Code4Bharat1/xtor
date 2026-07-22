const BASE_URL = "https://xtorcind.com";

export async function GET() {
  // All active routes on the website
  const pages = [
    "", // Homepage
    "aboutus",
    "product",
    "distributor",
    "industry",
    "contact",
    "Joinus",
    "download",
    "services",
    "ElectricTorque",
    "FlangeSpreaders",
    "bevellingmachine",
    "bolttorquing",
    "casingcutter",
    "coldcutting",
    "electrictorquewrenches",
    "flangefacing",
    "flangefacingservice",
    "handPumps",
    "hexdrive",
    "hottapping",
    "hydralicnut",
    "hydraulicbolttensioners",
    "hydraulicjack",
    "hydraulictorque",
    "hydrotest",
    "manualtorque",
    "multistagebolt",
    "nutsplitter",
    "pipeCutting",
    "pneumotic",
    "reducer",
    "retubbing",
    "socket",
    "springreturnbolt",
    "squaredrive",
    "subseabolt",
    "topsidebolt",
    "waterjet",
    "xap1500",
    "xap700",
    "xep1500",
    "xep700"
  ];

  const allPages = pages.map((page) => `${BASE_URL}/${page}`);

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === BASE_URL + "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

