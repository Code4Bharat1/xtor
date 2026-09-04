"use client";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { api } from "@/services/apiClient";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";

// Default fallback locations matching initial requirements
const FALLBACK_LOCATIONS = [
  {
    company: "Roots Supply Solutions",
    phone: "+971 558 505 297",
    email: "sales@rootssupply.com",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    address: "Roots General Trading Ltd WS 208 ,Building no. 280, Kezad HQ Building , Taweelah Abu Dhabi , United Arab Emirates",
    latitude: 24.8118,
    longitude: 54.7208,
    partnerType: "Authorized Distributor - Middle East",
    description: "Official authorized distributor for XTORC in the Middle East, supplying hydraulic torque wrenches, bolt tensioners, and onsite calibration.",
    website: "",
    region: "Middle East"
  },
  {
    company: "SC Intertech",
    phone: "+7 (771) 060-05-00, +91 9619561695",
    email: "office@intertechsc.kz",
    city: "Astana",
    country: "Kazakhstan",
    address: "Kazakhstan",
    latitude: 51.1694,
    longitude: 71.4491,
    partnerType: "Authorized Distributor - Central Asia",
    description: "Trusted partner in Central Asia delivering high-performance bolting solutions for power, oil & gas, and mining applications.",
    website: "https://intertechsc.kz",
    region: "Central Asia"
  },
  {
    company: "SASFORDE ENERGY",
    partnerType: "Exclusive Partner for African Region (Except South Africa)",
    contactPerson: "Mr. Joe - Director",
    phone: "+234 907 329 5778",
    email: "jedu@sasfordeenergy.com, edujoe7@gmail.com",
    city: "Port Harcourt",
    country: "Nigeria",
    address: "No: 227, Eneka Igwuruta Airport Road . Rumuewhara. Port Harcourt . Rivers State",
    latitude: 4.8720,
    longitude: 7.0330,
    description: "Exclusive partner for African region (except South Africa) providing heavy-duty bolting, cold cutting machines, and technical field services.",
    website: "https://sasfordeenergy.com",
    region: "Africa"
  },
  {
    company: "AETOS LIMITED",
    partnerType: "Non-Exclusive Partner Nigeria",
    contactPerson: "Mr. Solomon Ough - General Manager",
    phone: "+234 805 614 5561",
    email: "solomon_ough@aetosng.com",
    city: "Ejigbo, Lagos",
    country: "Nigeria",
    address: "90 Ailegun Rd, Off Isolo-Egbe Road, Ejigbo, Lagos State",
    latitude: 6.5445,
    longitude: 3.3082,
    description: "Non-exclusive partner in Nigeria delivering industrial tooling, hydraulic equipment, and technical solutions.",
    website: "",
    region: "Africa"
  }
];

const GlobalDistributorMap = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch distributor locations from backend API
  const fetchLocations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/distributor/locations");
      const data = response?.data || response;
      if (Array.isArray(data) && data.length > 0) {
        setLocations(data);
      } else {
        setLocations(FALLBACK_LOCATIONS);
      }
    } catch (err) {
      console.warn("Could not fetch locations from backend API, using fallback data:", err);
      setLocations(FALLBACK_LOCATIONS);
      setError("Note: Showing cached distributor network.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // Initialize and update the Leaflet map (100% Free, Zero Watermarks, Clean & Sharp)
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      if (mapContainerRef.current) {
        if (mapInstanceRef.current) {
          try {
            mapInstanceRef.current.stop();
            mapInstanceRef.current.off();
            mapInstanceRef.current.remove();
          } catch (e) {}
          mapInstanceRef.current = null;
        }
        if (mapContainerRef.current._leaflet_id) {
          delete mapContainerRef.current._leaflet_id;
        }
      }

      const isMobile = window.innerWidth < 768;

      // Initialize map instance with integer zoomSnap to prevent any tile blur
      const map = L.map(mapContainerRef.current, {
        center: [28, 45],
        zoom: isMobile ? 2 : 3,
        minZoom: 2,
        maxZoom: 18,
        zoomSnap: 1,
        zoomDelta: 1,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // Add zoom control at bottom-right
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Clean, High-Contrast English Map Layer (Zero Watermarks, Zero API Key required)
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 19,
        }
      ).addTo(map);

      // Custom Red Pin Icon for XTORC (optimized for mobile & desktop)
      const createCustomPin = () => {
        const width = isMobile ? 26 : 30;
        const height = isMobile ? 32 : 38;
        return L.divIcon({
          className: "xtorc-map-marker-container",
          html: `
            <div style="position: relative; width: ${width}px; height: ${height}px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 12px; height: 4px; background: rgba(0,0,0,0.35); border-radius: 50%; filter: blur(1px);"></div>
              <svg width="${width}" height="${height}" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 8px rgba(220, 38, 38, 0.5));">
                <path d="M12 0C5.37258 0 0 5.37258 0 12C0 19.5 12 30 12 30C12 30 24 19.5 24 12C24 5.37258 18.6274 0 12 0Z" fill="#D01A1A"/>
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 18.2 10.5 26.8 12 28.1C13.5 26.8 22 18.2 22 12C22 6.47715 17.5228 2 12 2Z" fill="#E62E2E"/>
                <circle cx="12" cy="11" r="5" fill="#FFFFFF"/>
                <circle cx="12" cy="11" r="2.5" fill="#D01A1A"/>
              </svg>
            </div>
          `,
          iconSize: [width, height],
          iconAnchor: [width / 2, height - 4],
          popupAnchor: [0, -(height - 4)],
          tooltipAnchor: [0, -(height - 4)],
        });
      };

      const latLngBounds = L.latLngBounds([]);
      markersRef.current = [];

      const activeLocations = locations.length > 0 ? locations : FALLBACK_LOCATIONS;

      activeLocations.forEach((loc) => {
        const lat = Number(loc.latitude);
        const lng = Number(loc.longitude);

        if (!isNaN(lat) && !isNaN(lng)) {
          const latLng = [lat, lng];
          latLngBounds.extend(latLng);

          const marker = L.marker(latLng, { icon: createCustomPin() }).addTo(map);

          // 1. Tooltip on Hover
          marker.bindTooltip(
            `<div style="font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600; padding: 2px 4px; color: #111827;">${loc.company || loc.name}</div>`,
            {
              direction: "top",
              className: "xtorc-custom-tooltip",
              opacity: 0.98,
              offset: [0, -8],
            }
          );

          // 2. Popup on Click (Responsive for mobile & desktop)
          const partnerBadge = loc.partnerType || "Authorized Distributor";
          const emailList = loc.email
            ? loc.email
                .split(",")
                .map((e) => e.trim())
                .filter((e) => Boolean(e) && !e.toLowerCase().includes("xtorc"))
            : [];
          const phoneList = loc.phone
            ? loc.phone.split(",").map((p) => p.trim()).filter(Boolean)
            : [];
          const websiteList = loc.website
            ? loc.website
                .split(",")
                .map((w) => w.trim())
                .filter((w) => Boolean(w) && !w.toLowerCase().includes("xtorc"))
            : [];

          const popupContent = `
            <div style="font-family: 'Poppins', sans-serif; color: #111827; width: 100%; max-width: 310px; padding: 2px;">
              <div style="display: flex; align-items: flex-start; gap: 6px; margin-bottom: 6px;">
                <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #DC2626; flex-shrink: 0; margin-top: 4px;"></span>
                <span style="font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; color: #DC2626; line-height: 1.3;">
                  ${partnerBadge}
                </span>
              </div>
              
              <h4 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 700; color: #111827; line-height: 1.3;">
                ${loc.company || loc.name}
              </h4>
              
              <div style="display: flex; align-items: center; gap: 5px; font-size: 12px; color: #4B5563; margin-bottom: 8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span><strong>${loc.city ? `${loc.city}, ` : ""}</strong>${loc.country || loc.address}</span>
              </div>

              ${
                loc.contactPerson
                  ? `
                <div style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #1F2937; margin-bottom: 6px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style="font-weight: 600;">${loc.contactPerson}</span>
                </div>
              `
                  : ""
              }

              ${
                phoneList.length > 0
                  ? `
                <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 11.5px; margin-bottom: 6px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div style="display: flex; flex-direction: column; gap: 2px;">
                    ${phoneList
                      .map(
                        (p) =>
                          `<a href="tel:${p.replace(/[\s-()]/g, "")}" style="color: #111827; text-decoration: none; font-weight: 600;">${p}</a>`
                      )
                      .join("")}
                  </div>
                </div>
              `
                  : ""
              }

              ${
                emailList.length > 0
                  ? `
                <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 11.5px; margin-bottom: 6px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div style="display: flex; flex-direction: column; gap: 2px;">
                    ${emailList
                      .map(
                        (em) =>
                          `<a href="mailto:${em}" style="color: #DC2626; text-decoration: none; font-weight: 600; word-break: break-all;">${em}</a>`
                      )
                      .join("")}
                  </div>
                </div>
              `
                  : ""
              }

              ${
                websiteList.length > 0
                  ? `
                <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 11.5px; margin-bottom: 6px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${websiteList
                      .map((w) => {
                        const url = w.startsWith("http") ? w : `https://${w}`;
                        const label = w.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
                        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #4B5563; text-decoration: underline; font-weight: 600;">${label}</a>`;
                      })
                      .join("")}
                  </div>
                </div>
              `
                  : ""
              }

              ${
                loc.address
                  ? `
                <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 11px; color: #4B5563; margin-top: 6px; padding-top: 6px; border-top: 1px dashed #E5E7EB; line-height: 1.35;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>${loc.address}</span>
                </div>
              `
                  : ""
              }

            </div>
          `;

          marker.bindPopup(popupContent, {
            className: "xtorc-white-popup",
            closeButton: true,
            maxWidth: isMobile ? 290 : 330,
          });

          markersRef.current.push(marker);
        }
      });

      // Automatically fit map view without animation to prevent '_leaflet_pos' race condition
      if (latLngBounds.isValid() && isMounted && mapInstanceRef.current) {
        map.fitBounds(latLngBounds, {
          padding: isMobile ? [15, 12] : [30, 25],
          maxZoom: isMobile ? 3 : 4,
          animate: false,
        });
      }
    });

    return () => {
      isMounted = false;
      if (mapContainerRef.current) {
        if (mapInstanceRef.current) {
          try {
            mapInstanceRef.current.stop();
            mapInstanceRef.current.off();
            mapInstanceRef.current.remove();
          } catch (e) {}
          mapInstanceRef.current = null;
        }
        if (mapContainerRef.current._leaflet_id) {
          delete mapContainerRef.current._leaflet_id;
        }
      }
    };
  }, [locations]);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-700 bg-white shadow-2xl">
      {/* Custom Styles for Clean Watermark-Free Light Map, English Labels & Popups */}
      <style jsx global>{`
        /* Soft, elegant contrast filter: softens bright ocean blues into subtle silver/slate tone */
        .leaflet-tile-pane {
          filter: saturate(38%) brightness(104%) contrast(110%) !important;
        }

        /* Ensure crisp, pixel-sharp tile rendering */
        .leaflet-tile {
          image-rendering: -webkit-optimize-contrast !important;
        }

        /* Hide attribution */
        .leaflet-control-attribution {
          display: none !important;
        }

        /* Tooltip styling for light theme */
        .xtorc-custom-tooltip {
          background-color: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 6px !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12) !important;
        }
        .xtorc-custom-tooltip::before {
          border-top-color: #ffffff !important;
        }

        /* White Popup styling */
        .xtorc-white-popup .leaflet-popup-content-wrapper {
          background-color: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 12px !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2), 0 0 16px rgba(220, 38, 38, 0.15) !important;
          padding: 6px 4px !important;
        }
        .xtorc-white-popup .leaflet-popup-tip {
          background-color: #ffffff !important;
          border: 1px solid #e5e7eb !important;
        }
        .xtorc-white-popup a.leaflet-popup-close-button {
          color: #9ca3af !important;
          padding: 8px !important;
        }
        .xtorc-white-popup a.leaflet-popup-close-button:hover {
          color: #111827 !important;
        }

        /* Light Zoom Controls */
        .leaflet-control-zoom {
          border: 1px solid #d1d5db !important;
          border-radius: 8px !important;
          overflow: hidden !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }
        .leaflet-control-zoom-in,
        .leaflet-control-zoom-out {
          background-color: #ffffff !important;
          color: #1f2937 !important;
          border-bottom: 1px solid #e5e7eb !important;
        }
        .leaflet-control-zoom-in:hover,
        .leaflet-control-zoom-out:hover {
          background-color: #f3f4f6 !important;
          color: #dc2626 !important;
        }

        .leaflet-container {
          background: #f4f5f7 !important;
        }

        /* Mobile specific popup tweaks */
        @media (max-width: 640px) {
          .xtorc-white-popup .leaflet-popup-content {
            margin: 6px 8px !important;
            max-width: 280px !important;
          }
        }
      `}</style>

      {/* Map Header / Stats Badge (Clean White Theme) */}
      <div className="absolute top-3 left-3 z-[400] flex items-center gap-2 bg-white/95 border border-gray-200 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs text-gray-800 shadow-md pointer-events-auto">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="font-semibold text-gray-700">Global Hubs:</span>
        <span className="font-bold text-red-600">{locations.length > 0 ? locations.length : FALLBACK_LOCATIONS.length} Active</span>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-[500] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm text-gray-800">
          <Loader2 className="w-7 h-7 text-red-600 animate-spin mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700">Loading Distributor Map...</p>
        </div>
      )}

      {/* Fallback Notice if API is offline */}
      {error && !loading && (
        <div className="absolute bottom-3 left-3 z-[400] flex items-center gap-1.5 bg-white/95 border border-gray-300 text-gray-700 px-2.5 py-1 rounded-md text-[11px] shadow-sm">
          <AlertCircle className="w-3 h-3 text-yellow-600" />
          <span>{error}</span>
          <button
            onClick={fetchLocations}
            className="ml-1 hover:text-black transition-colors"
            title="Retry connecting"
          >
            <RefreshCw className="w-2.5 h-2.5" />
          </button>
        </div>
      )}

      {/* Fit to screen Responsive Map DOM Element (Optimized for Mobile & Desktop) */}
      <div
        ref={mapContainerRef}
        className="w-full h-[290px] sm:h-[330px] md:h-[360px] z-[1] outline-none"
        style={{ background: "#f4f5f7" }}
      />
    </div>
  );
};

export default GlobalDistributorMap;