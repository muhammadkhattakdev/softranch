import React, { useState, useEffect } from "react";
import {
  Car,
  Star,
  MapPin,
  Phone,
  Mail,
  Search,
  Filter,
  Heart,
  Eye,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Users,
  Zap,
  Target,
  Gauge,
  Fuel,
  Calendar,
  CreditCard,
  Settings,
  Play,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Camera,
  Video,
  Download,
  Share2,
  MessageSquare,
  Building,
  Home,
  Wrench,
  DollarSign,
  TrendingUp,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";

import c1 from "../../../../static/dealership_website/c1.jpg";
import c2 from "../../../../static/dealership_website/c2.jpg";
import c3 from "../../../../static/dealership_website/c3.jpg";
import c4 from "../../../../static/dealership_website/c4.jpg";
import c5 from "../../../../static/dealership_website/c5.jpg";
import c6 from "../../../../static/dealership_website/c6.jpg";
import c7 from "../../../../static/dealership_website/c7.jpg";
import header from "../../../../static/dealership_website/header.jpg";

const CarDealershipLanding = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(4.5);
  const [favorites, setFavorites] = useState([]);

  // Featured Cars Data
  const featuredCars = [
    {
      id: 1,
      name: "BMW M3 Competition",
      year: 2024,
      price: 89999,
      originalPrice: 94999,
      type: "luxury",
      fuel: "Gasoline",
      transmission: "Automatic",
      mileage: "12 miles",
      engine: "3.0L Twin Turbo I6",
      horsepower: 503,
      images: [c1],
      features: [
        "M Carbon Fiber Exterior",
        "Harman Kardon Sound",
        "Adaptive M Suspension",
      ],
      badge: "New Arrival",
      badgeColor: "#ef4444",
    },
    {
      id: 2,
      name: "Mercedes-AMG GT 63S",
      year: 2024,
      price: 159999,
      originalPrice: null,
      type: "luxury",
      fuel: "Gasoline",
      transmission: "Automatic",
      mileage: "5 miles",
      engine: "4.0L V8 Biturbo",
      horsepower: 630,
      images: [c2],
      features: [
        "AMG Performance Exhaust",
        "Race Track Package",
        "Carbon Ceramic Brakes",
      ],
      badge: "Featured",
      badgeColor: "#f59e0b",
    },
    {
      id: 3,
      name: "Tesla Model S Plaid",
      year: 2024,
      price: 109999,
      originalPrice: 119999,
      type: "electric",
      fuel: "Electric",
      transmission: "Single Speed",
      mileage: "0 miles",
      engine: "Tri Motor",
      horsepower: 1020,
      images: [c3],
      features: ["Autopilot", '17" Cinematic Display', "Glass Roof"],
      badge: "Best Deal",
      badgeColor: "#10b981",
    },
    {
      id: 4,
      name: "Audi RS e-tron GT",
      year: 2024,
      price: 142999,
      originalPrice: null,
      type: "electric",
      fuel: "Electric",
      transmission: "Single Speed",
      mileage: "8 miles",
      engine: "Dual Motor",
      horsepower: 637,
      images: [c4],
      features: [
        "Matrix LED Headlights",
        "Air Suspension",
        "Bang & Olufsen Sound",
      ],
      badge: "Limited",
      badgeColor: "#8b5cf6",
    },
    {
      id: 5,
      name: "Porsche 911 Turbo S",
      year: 2024,
      price: 234999,
      originalPrice: null,
      type: "sports",
      fuel: "Gasoline",
      transmission: "PDK",
      mileage: "15 miles",
      engine: "3.8L Twin Turbo H6",
      horsepower: 640,
      images: [c5],
      features: ["Sport Chrono Package", "PASM Suspension", "Ceramic Brakes"],
      badge: "Premium",
      badgeColor: "#dc2626",
    },
    {
      id: 6,
      name: "Range Rover Sport SVR",
      year: 2024,
      price: 119999,
      originalPrice: 129999,
      type: "suv",
      fuel: "Gasoline",
      transmission: "Automatic",
      mileage: "22 miles",
      engine: "5.0L Supercharged V8",
      horsepower: 575,
      images: [c6],
      features: ["Terrain Response 2", "Meridian Sound", "Panoramic Roof"],
      badge: "Popular",
      badgeColor: "#3b82f6",
    },
    {
      id: 7,
      name: "Ferrari 488 GTB",
      year: 2023,
      price: 299999,
      originalPrice: 319999,
      type: "sports",
      fuel: "Gasoline",
      transmission: "Dual Clutch",
      mileage: "1,200 miles",
      engine: "3.9L Twin Turbo V8",
      horsepower: 661,
      images: [c7],
      features: ["Carbon Fiber Interior", "Racing Seats", "Track Package"],
      badge: "Exotic",
      badgeColor: "#dc2626",
    },
    {
      id: 8,
      name: "Lexus LX 600",
      year: 2024,
      price: 89999,
      originalPrice: null,
      type: "suv",
      fuel: "Gasoline",
      transmission: "Automatic",
      mileage: "35 miles",
      engine: "3.5L Twin Turbo V6",
      horsepower: 409,
      images: [c1],
      features: [
        "Multi-Terrain Select",
        "Mark Levinson Audio",
        "Crawl Control",
      ],
      badge: "Reliable",
      badgeColor: "#059669",
    },
    {
      id: 9,
      name: "Lamborghini Huracán",
      year: 2024,
      price: 249999,
      originalPrice: null,
      type: "sports",
      fuel: "Gasoline",
      transmission: "Dual Clutch",
      mileage: "8 miles",
      engine: "5.2L V10",
      horsepower: 631,
      images: [c2],
      features: [
        "Carbon Fiber Package",
        "Alcantara Interior",
        "Dynamic Steering",
      ],
      badge: "Supercar",
      badgeColor: "#f59e0b",
    },
    {
      id: 10,
      name: "Bentley Continental GT",
      year: 2024,
      price: 229999,
      originalPrice: null,
      type: "luxury",
      fuel: "Gasoline",
      transmission: "Automatic",
      mileage: "12 miles",
      engine: "6.0L Twin Turbo W12",
      horsepower: 626,
      images: [c3],
      features: ["Naim Audio", "Diamond Quilted Leather", "Mulliner Package"],
      badge: "Luxury",
      badgeColor: "#6366f1",
    },
    {
      id: 11,
      name: "McLaren 720S",
      year: 2023,
      price: 319999,
      originalPrice: 339999,
      type: "sports",
      fuel: "Gasoline",
      transmission: "Dual Clutch",
      mileage: "890 miles",
      engine: "4.0L Twin Turbo V8",
      horsepower: 710,
      images: [c4],
      features: ["Dihedral Doors", "Carbon Fiber Monocage", "Track Telemetry"],
      badge: "Rare",
      badgeColor: "#ec4899",
    },
    {
      id: 12,
      name: "Rolls-Royce Ghost",
      year: 2024,
      price: 399999,
      originalPrice: null,
      type: "luxury",
      fuel: "Gasoline",
      transmission: "Automatic",
      mileage: "5 miles",
      engine: "6.75L Twin Turbo V12",
      horsepower: 563,
      images: [c5],
      features: [
        "Starlight Headliner",
        "Bespoke Audio",
        "Self-Leveling Wheels",
      ],
      badge: "Ultimate",
      badgeColor: "#7c3aed",
    },
  ];

  const carTypes = [
    { id: "all", name: "All Cars", icon: Car },
    { id: "luxury", name: "Luxury", icon: Star },
    { id: "sports", name: "Sports", icon: Zap },
    { id: "suv", name: "SUV", icon: Building },
    { id: "electric", name: "Electric", icon: Gauge },
  ];

  const services = [
    {
      icon: CreditCard,
      title: "Financing Solutions",
      description: "Competitive rates starting at 2.9% APR",
      color: "#3b82f6",
    },
    {
      icon: Car,
      title: "Trade-In Program",
      description: "Get top dollar for your current vehicle",
      color: "#10b981",
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description: "Certified technicians and genuine parts",
      color: "#f59e0b",
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Comprehensive coverage for peace of mind",
      color: "#8b5cf6",
    },
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      rating: 5,
      text: "Outstanding service! Found my dream BMW M3 and the financing process was seamless. The team went above and beyond.",
      car: "BMW M3 Competition",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Professional, knowledgeable, and honest. They helped me find the perfect Tesla Model S within my budget.",
      car: "Tesla Model S Plaid",
      image: "/api/placeholder/60/60",
    },
    {
      name: "David Chen",
      rating: 5,
      text: "Incredible selection of luxury vehicles. The Porsche 911 I bought exceeded all my expectations.",
      car: "Porsche 911 Turbo S",
      image: "/api/placeholder/60/60",
    },
  ];

  // Filter cars based on selected type and price range
  const filteredCars = featuredCars.filter((car) => {
    const typeMatch = selectedFilter === "all" || car.type === selectedFilter;
    const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
    return typeMatch && priceMatch;
  });

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment.toFixed(0);
  };

  const toggleFavorite = (carId) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        marginTop: "-80px",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "8rem",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <img
            src={header}
            alt="Luxury car showroom"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Subtle shadow overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          ></div>
        </div>

        {/* Navigation */}
        <nav
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: "20px 40px",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Car size={20} color="white" />
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              SoftRanch Motors
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {["Inventory", "Financing", "Service", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    opacity: 0.9,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            textAlign: "center",
            color: "white",
            maxWidth: "900px",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: "900",
              marginBottom: "24px",
              lineHeight: 1.1,
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            }}
          >
            Drive Your Dreams
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              marginBottom: "40px",
              opacity: 0.95,
              lineHeight: 1.5,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            Discover our premium collection of luxury, sports, and electric
            vehicles.
            <br />
            Where automotive excellence meets exceptional service.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("featured-cars")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "16px 32px",
                background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 8px 25px rgba(220, 38, 38, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 35px rgba(220, 38, 38, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(220, 38, 38, 0.4)";
              }}
            >
              <Search size={20} />
              Browse Inventory
            </button>

            <button
              onClick={() => setIsCalculatorOpen(true)}
              style={{
                padding: "16px 32px",
                background: "rgba(255, 255, 255, 0.15)",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
            >
              <CreditCard size={20} />
              Calculate Payment
            </button>
          </div>

          {/* Quick Stats */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { number: "500+", label: "Premium Vehicles" },
              { number: "25+", label: "Luxury Brands" },
              { number: "10K+", label: "Happy Customers" },
              { number: "15", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.8,
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section
        id="featured-cars"
        style={{
          padding: "100px 20px",
          backgroundColor: "#1e293b",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "16px",
                background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Vehicles
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Explore our handpicked selection of premium vehicles from the
              world's most prestigious brands
            </p>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            {carTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedFilter(type.id)}
                style={{
                  padding: "12px 24px",
                  background:
                    selectedFilter === type.id
                      ? "linear-gradient(135deg, #dc2626, #f59e0b)"
                      : "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
              >
                <type.icon size={16} />
                {type.name}
              </button>
            ))}
          </div>

          {/* Price Range Filter */}
          <div
            style={{
              maxWidth: "400px",
              margin: "0 auto 60px",
              textAlign: "center",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#e2e8f0",
              }}
            >
              Price Range: ${priceRange[0].toLocaleString()} - $
              {priceRange[1].toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="400000"
              step="10000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              style={{
                width: "100%",
                height: "6px",
                borderRadius: "3px",
                background: "#334155",
                outline: "none",
                cursor: "pointer",
              }}
            />
          </div>

          {/* Cars Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "30px",
            }}
          >
            {filteredCars.map((car) => (
              <div
                key={car.id}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(220, 38, 38, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => setSelectedCar(car)}
              >
                {/* Car Image */}
                <div
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* Badge */}
                  {car.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        padding: "6px 12px",
                        backgroundColor: car.badgeColor,
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                      }}
                    >
                      {car.badge}
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(car.id);
                    }}
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      border: "none",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Heart
                      size={20}
                      color={favorites.includes(car.id) ? "#dc2626" : "white"}
                      fill={favorites.includes(car.id) ? "#dc2626" : "none"}
                    />
                  </button>

                  {/* Quick Actions */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "16px",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <button
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        border: "none",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Camera size={16} color="#0f172a" />
                    </button>
                    <button
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        border: "none",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Eye size={16} color="#0f172a" />
                    </button>
                  </div>
                </div>

                {/* Car Details */}
                <div
                  style={{
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                      }}
                    >
                      {car.year} {car.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          color="#f59e0b"
                          fill="#f59e0b"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "#94a3b8",
                      }}
                    >
                      <Gauge size={14} />
                      {car.mileage}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "#94a3b8",
                      }}
                    >
                      <Fuel size={14} />
                      {car.fuel}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "#94a3b8",
                      }}
                    >
                      <Settings size={14} />
                      {car.transmission}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "#94a3b8",
                      }}
                    >
                      <Zap size={14} />
                      {car.horsepower} HP
                    </div>
                  </div>

                  {/* Features */}
                  <div
                    style={{
                      marginBottom: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#64748b",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Key Features:
                    </p>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#94a3b8",
                      }}
                    >
                      {car.features.slice(0, 2).join(" • ")}
                    </div>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          background:
                            "linear-gradient(135deg, #dc2626, #f59e0b)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        ${car.price.toLocaleString()}
                      </div>
                      {car.originalPrice && (
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#64748b",
                            textDecoration: "line-through",
                          }}
                        >
                          ${car.originalPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#94a3b8",
                        }}
                      >
                        Est. Monthly
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#10b981",
                        }}
                      >
                        ${Math.round(car.price * 0.015).toLocaleString()}/mo
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <button
                      style={{
                        flex: 1,
                        padding: "12px",
                        background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <Calendar size={14} />
                      Test Drive
                    </button>
                    <button
                      style={{
                        flex: 1,
                        padding: "12px",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <MessageSquare size={14} />
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#0f172a",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #dc2626, #f59e0b)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose SoftRanch Motors?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#94a3b8",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            Experience the difference of working with automotive professionals
            who put your dreams first
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                icon: Award,
                title: "Award-Winning Service",
                description:
                  "Recognized as the region's #1 luxury car dealer for 5 consecutive years",
                color: "#f59e0b",
              },
              {
                icon: Shield,
                title: "Lifetime Warranty",
                description:
                  "Comprehensive coverage on all certified pre-owned vehicles with our exclusive warranty",
                color: "#10b981",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Certified automotive specialists with decades of combined industry experience",
                color: "#3b82f6",
              },
              {
                icon: TrendingUp,
                title: "Best Trade-In Values",
                description:
                  "Get the highest market value for your current vehicle with our competitive trade-in program",
                color: "#8b5cf6",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "30px",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: `0 8px 25px ${feature.color}40`,
                  }}
                >
                  <feature.icon size={32} color="white" />
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "12px",
                    color: "white",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#1e293b",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Complete Automotive Services
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              From purchase to maintenance, we're your trusted automotive
              partner
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  padding: "30px",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: service.color,
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <service.icon size={24} color="white" />
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "12px",
                    color: "white",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#0f172a",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #dc2626, #f59e0b)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Our Customers Say
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#94a3b8",
              marginBottom: "60px",
            }}
          >
            Real experiences from our valued customers
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  padding: "30px",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    marginBottom: "16px",
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#e2e8f0",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#94a3b8",
                        margin: 0,
                      }}
                    >
                      Purchased: {testimonial.car}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Calculator Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#1e293b",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "white",
            }}
          >
            Calculate Your Payment
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#94a3b8",
              marginBottom: "40px",
            }}
          >
            Get an instant estimate for your monthly payment
          </p>

          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "30px",
                marginBottom: "30px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#e2e8f0",
                    marginBottom: "8px",
                  }}
                >
                  Loan Amount
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#dc2626",
                  }}
                >
                  ${loanAmount.toLocaleString()}
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#e2e8f0",
                    marginBottom: "8px",
                  }}
                >
                  Loan Term (months)
                </label>
                <input
                  type="range"
                  min="12"
                  max="84"
                  step="12"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#10b981",
                  }}
                >
                  {loanTerm} months
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#e2e8f0",
                    marginBottom: "8px",
                  }}
                >
                  Interest Rate (%)
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  style={{
                    width: "100%",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#3b82f6",
                  }}
                >
                  {interestRate}%
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  color: "white",
                  marginBottom: "8px",
                }}
              >
                Estimated Monthly Payment
              </div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ${calculateMonthlyPayment()}
              </div>
            </div>

            <button
              style={{
                width: "100%",
                padding: "16px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <CreditCard size={20} />
              Apply for Financing
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#0f172a",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Visit Our Showroom
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
              }}
            >
              Experience luxury automotive excellence in person
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth >= 768 ? "repeat(3, 1fr)" : "1fr",
              gap: "40px",
            }}
          >
            {[
              {
                icon: MapPin,
                title: "Location",
                value: "123 Luxury Auto Blvd",
                description: "Premium District, CA 90210",
              },
              {
                icon: Phone,
                title: "Call Us",
                value: "(555) 123-CARS",
                description: "Available 7 days a week",
              },
              {
                icon: Clock,
                title: "Hours",
                value: "Mon-Sat: 9AM-8PM",
                description: "Sunday: 10AM-6PM",
              },
            ].map((contact, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "30px",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <contact.icon
                  size={40}
                  color="#dc2626"
                  style={{ margin: "0 auto 20px" }}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {contact.title}
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#dc2626",
                    marginBottom: "4px",
                  }}
                >
                  {contact.value}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#94a3b8",
                  }}
                >
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1e293b",
              borderRadius: "20px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedCar(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "none",
                borderRadius: "50%",
                color: "white",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              ×
            </button>

            <div
              style={{
                position: "relative",
                height: "400px",
              }}
            >
              <img
                src={selectedCar.images[currentImageIndex]}
                alt={selectedCar.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {selectedCar.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor:
                        currentImageIndex === index
                          ? "#dc2626"
                          : "rgba(255, 255, 255, 0.5)",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "30px",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                {selectedCar.year} {selectedCar.name}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div>
                  <span style={{ color: "#94a3b8", fontSize: "14px" }}>
                    Engine:
                  </span>
                  <div style={{ color: "white", fontWeight: "600" }}>
                    {selectedCar.engine}
                  </div>
                </div>
                <div>
                  <span style={{ color: "#94a3b8", fontSize: "14px" }}>
                    Horsepower:
                  </span>
                  <div style={{ color: "white", fontWeight: "600" }}>
                    {selectedCar.horsepower} HP
                  </div>
                </div>
                <div>
                  <span style={{ color: "#94a3b8", fontSize: "14px" }}>
                    Transmission:
                  </span>
                  <div style={{ color: "white", fontWeight: "600" }}>
                    {selectedCar.transmission}
                  </div>
                </div>
                <div>
                  <span style={{ color: "#94a3b8", fontSize: "14px" }}>
                    Mileage:
                  </span>
                  <div style={{ color: "white", fontWeight: "600" }}>
                    {selectedCar.mileage}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    marginBottom: "12px",
                  }}
                >
                  Key Features:
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {selectedCar.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        color: "#94a3b8",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <CheckCircle size={16} color="#10b981" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ${selectedCar.price.toLocaleString()}
                  </div>
                  {selectedCar.originalPrice && (
                    <div
                      style={{
                        fontSize: "18px",
                        color: "#64748b",
                        textDecoration: "line-through",
                      }}
                    >
                      ${selectedCar.originalPrice.toLocaleString()}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#94a3b8",
                    }}
                  >
                    Est. Monthly Payment
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#10b981",
                    }}
                  >
                    ${Math.round(selectedCar.price * 0.015).toLocaleString()}/mo
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <button
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "linear-gradient(135deg, #dc2626, #f59e0b)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Calendar size={20} />
                  Schedule Test Drive
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <CreditCard size={20} />
                  Get Financing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 3px;
          background: #334155;
          outline: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dc2626, #f59e0b);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dc2626, #f59e0b);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default CarDealershipLanding;
