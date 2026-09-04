"use client";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { api } from "@/services/apiClient";
import { Loader2, AlertCircle, RefreshCw, MapPin, Phone, Mail, Globe, User, X } from "lucide-react";

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
  const closeTimeoutRef = useRef(null);

  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeLocation, setActiveLocation] = useState(null);

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

          // On hover: immediately show full info in center of map
          marker.on("mouseover", () => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
            setActiveLocation(loc);
          });

          // On mouse out: slight delay before hiding, allows moving onto the centered card
          marker.on("mouseout", () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = setTimeout(() => {
              setActiveLocation(null);
            }, 300);
          });

          // Click / Touch fallback for mobile screens
          marker.on("click", (e) => {
            if (e?.originalEvent) e.originalEvent.stopPropagation();
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
            setActiveLocation(loc);
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
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
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

  // Clean parsed contact details for active location overlay
  const parsedEmails = activeLocation?.email
    ? activeLocation.email
        .split(",")
        .map((e) => e.trim())
        .filter((e) => Boolean(e) && !e.toLowerCase().includes("xtorc"))
    : [];

  const parsedPhones = activeLocation?.phone
    ? activeLocation.phone.split(",").map((p) => p.trim()).filter(Boolean)
    : [];

  const parsedWebsites = activeLocation?.website
    ? activeLocation.website
        .split(",")
        .map((w) => w.trim())
        .filter((w) => Boolean(w) && !w.toLowerCase().includes("xtorc"))
    : [];

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-700 bg-white shadow-2xl">
      {/* Custom Styles for Clean Watermark-Free Light Map & Controls */}
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

      {/* Centered Distributor Info Card (Hover-Triggered within Map Container) */}
      {activeLocation && (
        <div
          className="absolute inset-0 z-[500] flex items-center justify-center p-3 pointer-events-none"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
          onMouseLeave={() => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = setTimeout(() => {
              setActiveLocation(null);
            }, 200);
          }}
        >
          <div className="pointer-events-auto bg-white/98 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-4 sm:p-5 max-w-[340px] sm:max-w-[380px] w-full relative transition-all duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveLocation(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close distributor info"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Partner Badge */}
            <div className="flex items-center gap-2 mb-1.5 pr-6">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-red-600 truncate">
                {activeLocation.partnerType || "Authorized Distributor"}
              </span>
            </div>

            {/* Company Name */}
            <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1.5">
              {activeLocation.company || activeLocation.name}
            </h3>

            {/* Location (City & Country) */}
            <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
              <span>
                <strong>{activeLocation.city ? `${activeLocation.city}, ` : ""}</strong>
                {activeLocation.country || activeLocation.address}
              </span>
            </div>

            {/* Contact Person */}
            {activeLocation.contactPerson && (
              <div className="flex items-center gap-1.5 text-xs text-gray-800 mb-2">
                <User className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span className="font-semibold">{activeLocation.contactPerson}</span>
              </div>
            )}

            {/* Phone Numbers */}
            {parsedPhones.length > 0 && (
              <div className="flex items-start gap-1.5 text-xs mb-2">
                <Phone className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  {parsedPhones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/[\s-()]/g, "")}`}
                      className="text-gray-800 hover:text-red-600 font-semibold transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Email Addresses */}
            {parsedEmails.length > 0 && (
              <div className="flex items-start gap-1.5 text-xs mb-2">
                <Mail className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  {parsedEmails.map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email}`}
                      className="text-red-600 hover:underline font-semibold break-all transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Websites */}
            {parsedWebsites.length > 0 && (
              <div className="flex items-start gap-1.5 text-xs mb-2">
                <Globe className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-2">
                  {parsedWebsites.map((website, idx) => {
                    const url = website.startsWith("http") ? website : `https://${website}`;
                    const label = website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
                    return (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black underline font-semibold transition-colors"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Address */}
            {activeLocation.address && (
              <div className="flex items-start gap-1.5 text-[11px] text-gray-500 pt-2 border-t border-dashed border-gray-200 mt-2 leading-tight">
                <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{activeLocation.address}</span>
              </div>
            )}
          </div>
        </div>
      )}

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