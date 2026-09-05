"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe2, 
  Briefcase, 
  MessageSquare, 
  Send, 
  Loader2, 
  AlertCircle,
  Package,
  Layers,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  Search
} from "lucide-react";
import { api } from "@/services/apiClient";
import { useToast } from "@/components/common/ToastContext";

// 3-Level Product Hierarchy (Main Types > Subtypes > Subtypes of Subtypes)
const PRODUCT_TREE = [
  {
    id: "all-products",
    name: "All Products / Full Portfolio",
    path: "All Products / Full Portfolio",
  },
  {
    id: "bolting-tools",
    name: "Bolting Tools",
    path: "Bolting Tools",
    subtypes: [
      {
        id: "hydraulic-torque-wrench",
        name: "Hydraulic Torque Wrench",
        path: "Bolting Tools > Hydraulic Torque Wrench",
        models: [
          { id: "square-drive", name: "Square Drive Hydraulic Torque Wrench", path: "Bolting Tools > Hydraulic Torque Wrench > Square Drive" },
          { id: "xfr-series", name: "XFR Series (Square Drive)", path: "Bolting Tools > Hydraulic Torque Wrench > XFR Series" },
          { id: "hex-drive", name: "Hex Drive Hydraulic Torque Wrench", path: "Bolting Tools > Hydraulic Torque Wrench > Hex Drive" },
          { id: "xsl-series", name: "XSL Series Slimline Torque Wrench", path: "Bolting Tools > Hydraulic Torque Wrench > XSL Series" },
        ],
      },
      {
        id: "bolt-tensioner",
        name: "Bolt Tensioner",
        path: "Bolting Tools > Bolt Tensioner",
        models: [
          { id: "topside-tensioner", name: "Top Side Bolt Tensioner", path: "Bolting Tools > Bolt Tensioner > Top Side Bolt Tensioner" },
          { id: "spring-return-tensioner", name: "Spring Return Bolt Tensioner", path: "Bolting Tools > Bolt Tensioner > Spring Return Bolt Tensioner" },
          { id: "multi-stage-tensioner", name: "Multi Stage Bolt Tensioner", path: "Bolting Tools > Bolt Tensioner > Multi Stage Bolt Tensioner" },
          { id: "subsea-tensioner", name: "Subsea Bolt Tensioner", path: "Bolting Tools > Bolt Tensioner > Subsea Bolt Tensioner" },
        ],
      },
    ],
  },
  {
    id: "insitu-machining",
    name: "In-Situ Machining",
    path: "In-Situ Machining",
    subtypes: [
      { id: "pipe-cutting", name: "Pipe Cutting Machine (XTCB Series)", path: "In-Situ Machining > Pipe Cutting Machine (XTCB Series)" },
      { id: "id-bevelling", name: "ID Bevelling Machine", path: "In-Situ Machining > ID Bevelling Machine" },
      { id: "flange-facing", name: "Flange Facing Machine", path: "In-Situ Machining > Flange Facing Machine" },
      { id: "casing-cutter", name: "Casing Cutter", path: "In-Situ Machining > Casing Cutter" },
    ],
  },
  {
    id: "hydraulic-powerpack",
    name: "Hydraulic Powerpack",
    path: "Hydraulic Powerpack",
    subtypes: [
      {
        id: "700-bar",
        name: "700 Bar High-Pressure Pumps",
        path: "Hydraulic Powerpack > 700 Bar High-Pressure Pumps",
        models: [
          { id: "xep-700", name: "XEP 700 (Electric Power Pack)", path: "Hydraulic Powerpack > 700 Bar > XEP 700 Electric" },
          { id: "xap-700", name: "XAP 700 (Air-Driven Power Pack)", path: "Hydraulic Powerpack > 700 Bar > XAP 700 Air-Driven" },
        ],
      },
      {
        id: "1500-bar",
        name: "1500 Bar Ultra High-Pressure Pumps",
        path: "Hydraulic Powerpack > 1500 Bar Ultra High-Pressure Pumps",
        models: [
          { id: "xep-1500", name: "XEP 1500 (Electric Power Pack)", path: "Hydraulic Powerpack > 1500 Bar > XEP 1500 Electric" },
          { id: "xap-1500", name: "XAP 1500 (Air-Driven Power Pack)", path: "Hydraulic Powerpack > 1500 Bar > XAP 1500 Air-Driven" },
        ],
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories & Maintenance Tools",
    path: "Accessories & Maintenance Tools",
    subtypes: [
      { id: "jacks", name: "Hydraulic Jacks & Cylinders", path: "Accessories > Hydraulic Jacks & Cylinders" },
      { id: "handpumps", name: "Hydraulic Hand Pumps", path: "Accessories > Hydraulic Hand Pumps" },
      { id: "flange-spreaders", name: "Flange Spreaders", path: "Accessories > Flange Spreaders" },
      { id: "nut-splitters", name: "Hydraulic Nut Splitters", path: "Accessories > Hydraulic Nut Splitters" },
    ],
  },
  {
    id: "impact-sockets",
    name: "Impact Sockets & Reducers",
    path: "Impact Sockets & Reducers",
    subtypes: [
      { id: "sockets", name: "Impact Sockets", path: "Impact Sockets & Reducers > Impact Sockets" },
      { id: "reducers", name: "Impact Reducers", path: "Impact Sockets & Reducers > Impact Reducers" },
    ],
  },
];

const PRODUCT_CLEAN_NAMES = {
  "All Products / Full Portfolio": "All Products / Full Portfolio",
  "Bolting Tools": "Bolting Tools (All Models)",
  "In-Situ Machining": "In-Situ Machining (All Models)",
  "Hydraulic Powerpack": "Hydraulic Powerpack (All Models)",
  "Accessories & Maintenance Tools": "Accessories & Maintenance Tools (All Models)",
  "Impact Sockets & Reducers": "Impact Sockets & Reducers (All Models)",

  // Subtypes
  "Bolting Tools > Hydraulic Torque Wrench": "Hydraulic Torque Wrench (Full Line)",
  "Bolting Tools > Bolt Tensioner": "Bolt Tensioner (Full Line)",
  "Hydraulic Powerpack > 700 Bar High-Pressure Pumps": "700 Bar High-Pressure Pumps",
  "Hydraulic Powerpack > 1500 Bar Ultra High-Pressure Pumps": "1500 Bar Ultra High-Pressure Pumps",

  // Specific Models
  "Bolting Tools > Hydraulic Torque Wrench > Square Drive": "Square Drive Hydraulic Torque Wrench",
  "Bolting Tools > Hydraulic Torque Wrench > XFR Series": "XFR Series (Square Drive) Torque Wrench",
  "Bolting Tools > Hydraulic Torque Wrench > Hex Drive": "Hex Drive Hydraulic Torque Wrench",
  "Bolting Tools > Hydraulic Torque Wrench > XSL Series": "XSL Series Slimline Torque Wrench",
  "Bolting Tools > Bolt Tensioner > Top Side Bolt Tensioner": "Top Side Bolt Tensioner",
  "Bolting Tools > Bolt Tensioner > Spring Return Bolt Tensioner": "Spring Return Bolt Tensioner",
  "Bolting Tools > Bolt Tensioner > Multi Stage Bolt Tensioner": "Multi Stage Bolt Tensioner",
  "Bolting Tools > Bolt Tensioner > Subsea Bolt Tensioner": "Subsea Bolt Tensioner",

  "In-Situ Machining > Pipe Cutting Machine (XTCB Series)": "Pipe Cutting Machine (XTCB Series)",
  "In-Situ Machining > ID Bevelling Machine": "ID Bevelling Machine",
  "In-Situ Machining > Flange Facing Machine": "Flange Facing Machine",
  "In-Situ Machining > Casing Cutter": "Casing Cutter",

  "Hydraulic Powerpack > 700 Bar > XEP 700 Electric": "XEP 700 (Electric Power Pack - 700 Bar)",
  "Hydraulic Powerpack > 700 Bar > XAP 700 Air-Driven": "XAP 700 (Air-Driven Power Pack - 700 Bar)",
  "Hydraulic Powerpack > 1500 Bar > XEP 1500 Electric": "XEP 1500 (Electric Power Pack - 1500 Bar)",
  "Hydraulic Powerpack > 1500 Bar > XAP 1500 Air-Driven": "XAP 1500 (Air-Driven Power Pack - 1500 Bar)",

  "Accessories > Hydraulic Jacks & Cylinders": "Hydraulic Jacks & Cylinders",
  "Accessories > Hydraulic Hand Pumps": "Hydraulic Hand Pumps",
  "Accessories > Flange Spreaders": "Flange Spreaders",
  "Accessories > Hydraulic Nut Splitters": "Hydraulic Nut Splitters",

  "Impact Sockets & Reducers > Impact Sockets": "Impact Sockets",
  "Impact Sockets & Reducers > Impact Reducers": "Impact Reducers",
};

export function getCleanProductName(path) {
  if (!path) return "";
  if (PRODUCT_CLEAN_NAMES[path]) return PRODUCT_CLEAN_NAMES[path];
  if (path.includes(" > ")) {
    const parts = path.split(" > ");
    return parts[parts.length - 1].trim();
  }
  return path;
}

const DistributorForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    message: "",
  });

  // Product Interest Multi-Select State
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedNodes, setExpandedNodes] = useState({
    "bolting-tools": true,
    "insitu-machining": true,
    "hydraulic-powerpack": true,
    "accessories": true,
    "impact-sockets": true,
  });
  const dropdownRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleExpand = (nodeId, e) => {
    e.stopPropagation();
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const getCategoryAllLeafPaths = (category) => {
    const paths = [];
    if (category.subtypes && category.subtypes.length > 0) {
      category.subtypes.forEach((sub) => {
        if (sub.models && sub.models.length > 0) {
          sub.models.forEach((m) => paths.push(m.path));
        } else {
          paths.push(sub.path);
        }
      });
    } else {
      paths.push(category.path);
    }
    return paths;
  };

  const getSubtypeAllLeafPaths = (sub) => {
    if (sub.models && sub.models.length > 0) {
      return sub.models.map((m) => m.path);
    }
    return [sub.path];
  };

  const getAllLeafPaths = () => {
    const paths = [];
    PRODUCT_TREE.forEach((cat) => {
      if (cat.id !== "all-products") {
        getCategoryAllLeafPaths(cat).forEach((p) => paths.push(p));
      }
    });
    return paths;
  };

  const toggleCategory = (category) => {
    if (category.id === "all-products" || !category.subtypes) {
      toggleProduct(category.path);
      return;
    }
    const childPaths = getCategoryAllLeafPaths(category);
    const isAllSelected = selectedProducts.includes("All Products / Full Portfolio");
    const isCurrentlySelected =
      isAllSelected ||
      selectedProducts.includes(category.path) ||
      (childPaths.length > 0 && childPaths.every((p) => selectedProducts.includes(p)));

    // Expand category to reveal all child products
    setExpandedNodes((prev) => ({ ...prev, [category.id]: true }));

    setSelectedProducts((prev) => {
      if (isCurrentlySelected) {
        // If "All Products" was chosen, unpack other categories
        if (prev.includes("All Products / Full Portfolio")) {
          const otherCats = PRODUCT_TREE.filter(
            (c) => c.id !== "all-products" && c.id !== category.id
          ).map((c) => c.path);
          return otherCats;
        }
        return prev.filter((p) => !childPaths.includes(p) && p !== category.path);
      } else {
        const cleaned = prev.filter(
          (p) => !childPaths.includes(p) && p !== "All Products / Full Portfolio"
        );
        return [...cleaned, category.path];
      }
    });

    if (fieldErrors.productInterest) {
      setFieldErrors((prev) => ({ ...prev, productInterest: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const toggleSubtype = (category, sub) => {
    if (!sub.models || sub.models.length === 0) {
      toggleProduct(sub.path);
      return;
    }
    const childPaths = getSubtypeAllLeafPaths(sub);
    const isAllSelected = selectedProducts.includes("All Products / Full Portfolio");
    const isCatSelected = isAllSelected || selectedProducts.includes(category.path);
    const isCurrentlySelected =
      isCatSelected ||
      selectedProducts.includes(sub.path) ||
      (childPaths.length > 0 && childPaths.every((p) => selectedProducts.includes(p)));

    setExpandedNodes((prev) => ({ ...prev, [sub.id]: true }));

    setSelectedProducts((prev) => {
      if (isCurrentlySelected) {
        if (prev.includes("All Products / Full Portfolio")) {
          const otherCats = PRODUCT_TREE.filter(
            (c) => c.id !== "all-products" && c.id !== category.id
          ).map((c) => c.path);
          const otherSubs = (category.subtypes || [])
            .filter((s) => s.id !== sub.id)
            .map((s) => s.path);
          return [...otherCats, ...otherSubs];
        }
        if (prev.includes(category.path)) {
          const otherSubs = (category.subtypes || [])
            .filter((s) => s.id !== sub.id)
            .map((s) => s.path);
          return [...prev.filter((p) => p !== category.path), ...otherSubs];
        }
        return prev.filter((p) => !childPaths.includes(p) && p !== sub.path);
      } else {
        const cleaned = prev.filter(
          (p) => !childPaths.includes(p) && p !== "All Products / Full Portfolio"
        );
        return [...cleaned, sub.path];
      }
    });

    if (fieldErrors.productInterest) {
      setFieldErrors((prev) => ({ ...prev, productInterest: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const toggleModel = (category, sub, modelPath) => {
    setSelectedProducts((prev) => {
      const isAllSelected = prev.includes("All Products / Full Portfolio");
      const isCatSelected = isAllSelected || prev.includes(category.path);
      const isSubSelected = isCatSelected || (sub && prev.includes(sub.path));

      if (isAllSelected) {
        const otherCats = PRODUCT_TREE.filter(
          (c) => c.id !== "all-products" && c.id !== category.id
        ).map((c) => c.path);
        const otherCategoryLeafs = getCategoryAllLeafPaths(category).filter(
          (p) => p !== modelPath
        );
        return [...otherCats, ...otherCategoryLeafs];
      }
      if (prev.includes(category.path)) {
        const otherCategoryLeafs = getCategoryAllLeafPaths(category).filter(
          (p) => p !== modelPath
        );
        return [...prev.filter((p) => p !== category.path), ...otherCategoryLeafs];
      }
      if (sub && prev.includes(sub.path)) {
        const otherSubLeafs = getSubtypeAllLeafPaths(sub).filter((p) => p !== modelPath);
        return [...prev.filter((p) => p !== sub.path), ...otherSubLeafs];
      }
      if (prev.includes(modelPath)) {
        return prev.filter((p) => p !== modelPath);
      } else {
        return [...prev, modelPath];
      }
    });

    if (fieldErrors.productInterest) {
      setFieldErrors((prev) => ({ ...prev, productInterest: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const toggleProduct = (path) => {
    setSelectedProducts((prev) => {
      if (prev.includes(path)) {
        return prev.filter((p) => p !== path);
      } else {
        if (path === "All Products / Full Portfolio") {
          return ["All Products / Full Portfolio"];
        }
        return [...prev.filter((p) => p !== "All Products / Full Portfolio"), path];
      }
    });
    if (fieldErrors.productInterest) {
      setFieldErrors((prev) => ({ ...prev, productInterest: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const removeSelectedProduct = (path) => {
    setSelectedProducts((prev) => prev.filter((p) => p !== path));
    if (errorMessage) setErrorMessage("");
  };

  const handleSelectAll = () => {
    setSelectedProducts(["All Products / Full Portfolio"]);
    if (fieldErrors.productInterest) {
      setFieldErrors((prev) => ({ ...prev, productInterest: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Contact person name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name cannot exceed 100 characters.";
    }

    if (!formData.company.trim()) {
      errors.company = "Company name is required.";
    } else if (formData.company.trim().length > 100) {
      errors.company = "Company name cannot exceed 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. partner@company.com).";
    }

    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number (7-15 digits).";
    }

    if (!formData.country.trim()) {
      errors.country = "Country / Region of interest is required.";
    } else if (formData.country.trim().length > 100) {
      errors.country = "Country/Region cannot exceed 100 characters.";
    }

    if (selectedProducts.length === 0) {
      errors.productInterest = "Please select at least one product of interest.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please provide brief details about your company and capabilities.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    } else if (formData.message.trim().length > 1000) {
      errors.message = "Message cannot exceed 1000 characters.";
    }

    setFieldErrors(errors);
    const errorList = Object.values(errors);
    return errorList.length > 0 ? errorList[0] : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error("Error", validationError);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const productInterestStr = selectedProducts.length > 0
        ? selectedProducts.join(" | ")
        : "All Products / Full Portfolio";

      await api.post("/distributor", {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        country: formData.country.trim(),
        experience: formData.experience.trim(),
        productInterest: productInterestStr,
        message: formData.message.trim()
      });

      toast.success("Success", "Form submitted successfully");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        experience: "",
        message: "",
      });
      setSelectedProducts([]);
      setIsDropdownOpen(false);
      setFieldErrors({});
    } catch (err) {
      const errorTxt = err?.message || "Failed to submit form. Please check your connection and try again.";
      setErrorMessage(errorTxt);
      toast.error("Error", "Form submission failed");
    } finally {
      setLoading(false);
    }
  };

  const isAllSelected = selectedProducts.includes("All Products / Full Portfolio");

  const filteredTree = PRODUCT_TREE.filter((category) => {
    if (category.id === "all-products") return false;
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const catMatches = category.name.toLowerCase().includes(term);
    const subMatches = category.subtypes?.some((sub) => {
      const sMatches = sub.name.toLowerCase().includes(term);
      const mMatches = sub.models?.some((m) => m.name.toLowerCase().includes(term));
      return sMatches || mMatches;
    });
    return catMatches || subMatches;
  });

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-zinc-900 to-zinc-900/95 border border-zinc-700/80 border-t-4 border-t-red-600 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(220,38,38,0.06)]"
      >
        {/* Form Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4 text-red-500" />
            Partner With XTORC
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Distributor Application Form
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Expand your industrial supply portfolio with world-class hydraulic bolting and machining tools. Submit your application below to join our growing global distribution network.
          </p>
        </div>


        {/* Error Alert */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-700/60 text-red-300 flex items-start gap-3 shadow-lg"
          >
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
            <div>
              <h4 className="font-semibold text-red-200">Submission Error</h4>
              <p className="text-sm text-red-300/90 mt-0.5">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Contact Person Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contact Person Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                    fieldErrors.name ? "border-red-500 focus:border-red-500" : "border-zinc-700/70 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.name && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company / Organization Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Industrial Supplies Ltd."
                  className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                    fieldErrors.company ? "border-red-500 focus:border-red-500" : "border-zinc-700/70 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.company && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.company}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Official Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. partner@company.com"
                  className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                    fieldErrors.email ? "border-red-500 focus:border-red-500" : "border-zinc-700/70 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.email && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number / WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                    fieldErrors.phone ? "border-red-500 focus:border-red-500" : "border-zinc-700/70 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.phone && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.phone}
                </p>
              )}
            </div>

            {/* Country / Territory */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Target Country / Territory of Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Globe2 className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Saudi Arabia, Germany, Vietnam..."
                  className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                    fieldErrors.country ? "border-red-500 focus:border-red-500" : "border-zinc-700/70 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.country && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.country}
                </p>
              )}
            </div>

            {/* Years in Business / Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Years in Industrial / Bolting Equipment Business
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 5+ Years / Distributing hydraulic tools"
                  className="w-full pl-11 pr-4 py-3 bg-[#0f0f12] border border-zinc-700/70 rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600 focus:bg-black transition-all"
                />
              </div>
            </div>
          </div>

          {/* Product Interest Selection (User-friendly Multi-Select Dropdown) */}
          <div ref={dropdownRef} className="space-y-3 relative">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Product(s) of Interest <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-400">
                Choose the tools or product lines you are interested in distributing.
              </p>
            </div>

            {/* Dropdown Trigger Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full pl-4 pr-10 py-3 bg-[#0f0f12] border rounded-xl text-left flex items-center justify-between shadow-inner transition-all cursor-pointer ${
                  fieldErrors.productInterest
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : isDropdownOpen
                      ? "border-red-600 ring-2 ring-red-600/30 bg-black"
                      : "border-zinc-700/70 hover:border-zinc-500"
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Package className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className={selectedProducts.length > 0 ? "text-white font-medium text-sm truncate" : "text-gray-400 text-sm truncate"}>
                    {selectedProducts.length === 0
                      ? "Select products of interest (Click to choose)..."
                      : selectedProducts.length === 1
                        ? getCleanProductName(selectedProducts[0])
                        : `${selectedProducts.length} product selections chosen`}
                  </span>
                </div>

                <div className="absolute right-3.5 flex items-center gap-2">
                  {selectedProducts.length > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[11px] font-semibold">
                      {selectedProducts.length}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Dropdown Menu Popover */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 right-0 top-full mt-2 p-3 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl z-50 max-h-[440px] flex flex-col"
                >
                  {/* Search Box */}
                  <div className="relative mb-2.5">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search tools or categories (e.g. Torque, Flange, 700 Bar)..."
                      className="w-full pl-9 pr-8 py-2 bg-[#0f0f12] border border-zinc-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition shadow-inner"
                    />
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={() => setSearchTerm("")}
                        className="absolute right-2.5 top-2 text-gray-400 hover:text-white p-0.5 rounded cursor-pointer"
                        title="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Top Quick Actions Bar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-xs text-gray-400 px-1">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleSelectAll}
                        className={`transition cursor-pointer font-medium ${
                          isAllSelected
                            ? "text-red-400 underline font-semibold"
                            : "hover:text-white text-gray-300"
                        }`}
                      >
                        ✓ Select All Portfolio
                      </button>
                      <span className="text-zinc-700">|</span>
                      <button
                        type="button"
                        onClick={() => setSelectedProducts([])}
                        className="hover:text-red-400 text-gray-400 transition cursor-pointer"
                      >
                        Clear Selection
                      </button>
                    </div>
                    <span className="text-gray-400 text-[11px]">
                      {selectedProducts.length} selected
                    </span>
                  </div>

                  {/* Scrollable Categories List */}
                  <div className="overflow-y-auto space-y-2.5 pr-1 flex-1">
                    {filteredTree.length === 0 ? (
                      <div className="py-8 text-center text-gray-400 text-xs sm:text-sm">
                        No products found matching "{searchTerm}".
                      </div>
                    ) : (
                      filteredTree.map((category) => {
                        const hasSubtypes = category.subtypes && category.subtypes.length > 0;
                        const isCatExpanded = !!expandedNodes[category.id] || searchTerm.trim().length > 0;
                        const childPaths = getCategoryAllLeafPaths(category);
                        const isCatSelected =
                          isAllSelected ||
                          selectedProducts.includes(category.path) ||
                          (childPaths.length > 0 && childPaths.every((p) => selectedProducts.includes(p)));

                        return (
                          <div
                            key={category.id}
                            className={`rounded-lg border transition-all ${
                              isCatSelected
                                ? "bg-zinc-950 border-red-900/60"
                                : "bg-zinc-950/60 border-zinc-800/80"
                            }`}
                          >
                            {/* Category Header Row */}
                            <div className="flex items-center justify-between p-2.5 gap-2">
                              <button
                                type="button"
                                onClick={(e) => toggleExpand(category.id, e)}
                                className="flex items-center gap-2 flex-1 text-left min-w-0 cursor-pointer"
                              >
                                {isCatExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                )}
                                <span className="font-semibold text-xs sm:text-sm text-white truncate">
                                  {category.name}
                                </span>
                              </button>

                              {/* Toggle entire category button */}
                              <button
                                type="button"
                                onClick={() => toggleCategory(category)}
                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium border transition cursor-pointer ${
                                  isCatSelected
                                    ? "bg-red-600 border-red-500 text-white"
                                    : "bg-zinc-900 border-zinc-700 text-gray-300 hover:border-gray-500 hover:text-white"
                                }`}
                                title={`Select all products under ${category.name}`}
                              >
                                <div
                                  className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                                    isCatSelected
                                      ? "bg-white border-white text-red-600"
                                      : "border-gray-500 bg-zinc-950"
                                  }`}
                                >
                                  {isCatSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                </div>
                                <span className="text-[11px]">
                                  {isCatSelected ? "All Selected" : "Select Category"}
                                </span>
                              </button>
                            </div>

                            {/* Category Items */}
                            {isCatExpanded && (
                              <div className="px-2.5 pb-2.5 pt-1 border-t border-zinc-800/60 space-y-2">
                                {category.subtypes.map((sub) => {
                                  const hasModels = sub.models && sub.models.length > 0;
                                  const subChildPaths = getSubtypeAllLeafPaths(sub);
                                  const isSubSelected =
                                    isCatSelected ||
                                    selectedProducts.includes(sub.path) ||
                                    (hasModels &&
                                      subChildPaths.length > 0 &&
                                      subChildPaths.every((p) => selectedProducts.includes(p)));

                                  const displayModels = !searchTerm.trim()
                                    ? sub.models || []
                                    : (sub.models || []).filter(
                                        (m) =>
                                          m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                          sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                          category.name.toLowerCase().includes(searchTerm.toLowerCase())
                                      );

                                  // Subtype without models (e.g. In-Situ Machining, Accessories, Sockets)
                                  if (!hasModels) {
                                    const matchesSearch =
                                      !searchTerm.trim() ||
                                      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                      category.name.toLowerCase().includes(searchTerm.toLowerCase());

                                    if (!matchesSearch) return null;

                                    return (
                                      <div
                                        key={sub.id}
                                        onClick={() => toggleSubtype(category, sub)}
                                        className={`flex items-center justify-between p-2 rounded cursor-pointer transition ${
                                          isSubSelected
                                            ? "bg-red-950/40 text-white font-medium border border-red-900/40"
                                            : "hover:bg-zinc-800/50 text-gray-300 border border-transparent"
                                        }`}
                                      >
                                        <span className="text-xs sm:text-sm truncate pr-2">{sub.name}</span>
                                        <div
                                          className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                                            isSubSelected
                                              ? "bg-red-600 border-red-500 text-white"
                                              : "bg-zinc-950 border-zinc-700"
                                          }`}
                                        >
                                          {isSubSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                        </div>
                                      </div>
                                    );
                                  }

                                  // Subtype with models
                                  if (displayModels.length === 0 && searchTerm.trim()) return null;

                                  return (
                                    <div key={sub.id} className="rounded bg-zinc-900/60 border border-zinc-800/60 p-2">
                                      {/* Subtype Header */}
                                      <div
                                        onClick={() => toggleSubtype(category, sub)}
                                        className="flex items-center justify-between pb-1 mb-1.5 border-b border-zinc-800/40 cursor-pointer text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition"
                                      >
                                        <span>{sub.name}</span>
                                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 normal-case font-normal">
                                          <span>{isSubSelected ? "Selected" : "Select all"}</span>
                                          <div
                                            className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                                              isSubSelected
                                                ? "bg-red-600 border-red-500 text-white"
                                                : "bg-zinc-950 border-zinc-700"
                                            }`}
                                          >
                                            {isSubSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                          </div>
                                        </div>
                                      </div>

                                      {/* Models Grid */}
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                        {displayModels.map((model) => {
                                          const isModelSelected = isSubSelected || selectedProducts.includes(model.path);
                                          return (
                                            <div
                                              key={model.id}
                                              onClick={() => toggleModel(category, sub, model.path)}
                                              className={`flex items-center justify-between p-1.5 rounded cursor-pointer transition ${
                                                isModelSelected
                                                  ? "bg-red-950/40 text-white font-medium border border-red-900/40"
                                                  : "hover:bg-zinc-800/60 text-gray-300 border border-transparent"
                                              }`}
                                            >
                                              <span className="text-xs truncate pr-2">{model.name}</span>
                                              <div
                                                className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                                                  isModelSelected
                                                    ? "bg-red-600 border-red-500 text-white"
                                                    : "bg-zinc-950 border-zinc-700"
                                                }`}
                                              >
                                                {isModelSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Dropdown Footer Bar */}
                  <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-zinc-800">
                    <span className="text-xs text-gray-400">
                      {selectedProducts.length === 0
                        ? "No products selected"
                        : `${selectedProducts.length} option${selectedProducts.length > 1 ? "s" : ""} selected`}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold cursor-pointer transition shadow"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {fieldErrors.productInterest && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.productInterest}
              </p>
            )}

            {/* Selected Products Tags Chips */}
            {selectedProducts.length > 0 && (
              <div className="pt-1.5 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-gray-300">
                    Selected ({selectedProducts.length}):
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProducts([])}
                    className="text-red-400 hover:text-red-300 transition cursor-pointer text-[11px]"
                  >
                    Clear All
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selectedProducts.map((prod) => (
                    <span
                      key={prod}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700/80 text-zinc-200 text-xs font-medium"
                    >
                      <span>{getCleanProductName(prod)}</span>
                      <button
                        type="button"
                        onClick={() => removeSelectedProduct(prod)}
                        className="text-gray-400 hover:text-red-400 transition p-0.5 rounded cursor-pointer"
                        title="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Business Overview & Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Business Overview & Capabilities <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your existing distribution network, client base (e.g. Oil & Gas, Wind, Construction), and why you want to partner with XTORC..."
                className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all resize-none ${
                  fieldErrors.message ? "border-red-500 focus:border-red-500" : "border-zinc-700/70 focus:border-red-600"
                }`}
              />
            </div>
            {fieldErrors.message && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex justify-center sm:justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default DistributorForm;