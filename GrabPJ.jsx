import React, { useState } from "react";
import {
  Search, ScanLine, User, UtensilsCrossed, Car, ShoppingBasket, Package,
  Bike, CalendarClock, ListChecks, Grid3x3, Home, Wallet, Clock,
  MessageSquare, ChevronRight, MapPin, Star, Percent, Gamepad2, Gift
} from "lucide-react";

const services = [
  { label: "Food", icon: UtensilsCrossed },
  { label: "Ride", icon: Car },
  { label: "Market", icon: ShoppingBasket },
  { label: "Express", icon: Package },
  { label: "Moto", icon: Bike },
  { label: "Schedule", icon: CalendarClock },
  { label: "Errands", icon: ListChecks },
  { label: "All", icon: Grid3x3 },
];

const tips = [
  { title: "Claim", sub: "50% off your first ride", icon: Percent, bg: "#FF7A45" },
  { title: "Plan ahead", sub: "Schedule a ride anytime", icon: CalendarClock, bg: "#FF8F66" },
  { title: "Play", sub: "Free games while you wait", icon: Gamepad2, bg: "#FFA585" },
  { title: "Rewards", sub: "Earn points on every order", icon: Gift, bg: "#FF6B6B" },
];

const restaurants = [
  { name: "Marisol's Kitchen", km: "4.3 km", rating: 4.7, tag: "15% off" },
  { name: "Sunrise Diner", km: "5.9 km", rating: 4.4, tag: "₦500 off" },
  { name: "Bayfront Grill", km: "2.1 km", rating: 4.6, tag: "₦500 off" },
];

const foodItems = [
  { name: "Crispy Chicken Set", shop: "Quickbite Co." },
  { name: "Classic Cheeseburger", shop: "Quickbite Co." },
  { name: "Spring Rolls (6 pcs)", shop: "Streetside Eats" },
];

const navItems = [
  { label: "Home", icon: Home },
  { label: "Payment", icon: Wallet },
  { label: "Activity", icon: Clock },
  { label: "Messages", icon: MessageSquare },
];

export default function PJRidesHome() {
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#2a1410] p-6">
      <div className="relative w-[390px] h-[844px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#FFF6F2] border-[6px] border-[#1f0d09]">
        <div className="h-full overflow-y-auto pb-20" style={{ scrollbarWidth: "none" }}>

          {/* Header */}
          <div className="bg-gradient-to-br from-[#FF6A3D] via-[#FF8A5B] to-[#FFB199] px-5 pt-12 pb-5">
            <div className="flex items-center gap-3">
              <button className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <ScanLine size={18} className="text-white" />
              </button>
              <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                <Search size={16} className="text-[#FF6A3D]" />
                <span className="text-[#9A6B5C] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  Search PJ Rides
                </span>
              </div>
              <button className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <User size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Service grid */}
          <div className="px-5 pt-5">
            <div className="grid grid-cols-4 gap-3 mb-4">
              {services.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 bg-[#FFEDE5] rounded-2xl py-4"
                >
                  <Icon size={22} className="text-[#FF5C2E]" />
                  <span className="text-[11px] text-[#3A2118] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Schedule card */}
            <div className="flex gap-3 mb-5">
              <div className="flex-1 bg-white rounded-xl border border-[#FFD9C2] p-3.5">
                <p className="text-[11px] text-[#B07A5E]" style={{ fontFamily: "Inter, sans-serif" }}>Schedule</p>
                <p className="text-[13px] font-semibold text-[#3A2118]" style={{ fontFamily: "Inter, sans-serif" }}>Ride to airport</p>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-[#FFD9C2] p-3.5">
                <p className="text-[11px] text-[#B07A5E]" style={{ fontFamily: "Inter, sans-serif" }}>Points</p>
                <p className="text-[13px] font-semibold text-[#3A2118]" style={{ fontFamily: "Inter, sans-serif" }}>0</p>
              </div>
            </div>
          </div>

          {/* Tips & benefits carousel */}
          <div className="px-5 mb-6">
            <div className="bg-[#FFEAE0] rounded-2xl p-4">
              <h4 className="text-[15px] font-bold text-[#3A2118] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                Tips & benefits
              </h4>
              <p className="text-[11px] text-[#9A6B5C] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>While you're nearby</p>
              <div className="flex gap-3 overflow-x-auto">
                {tips.map(({ title, sub, icon: Icon, bg }) => (
                  <div
                    key={title}
                    className="min-w-[100px] rounded-xl p-3 flex flex-col justify-between h-32"
                    style={{ backgroundColor: bg }}
                  >
                    <div>
                      <p className="text-white text-[13px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>{title}</p>
                      <p className="text-white/85 text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{sub}</p>
                    </div>
                    <Icon size={20} className="text-white/90" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Now promo */}
          <div className="px-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[15px] font-bold text-[#3A2118]" style={{ fontFamily: "Playfair Display, serif" }}>Order now</h4>
              <ChevronRight size={16} className="text-[#FF5C2E]" />
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-[#FF4D4D] to-[#FF8A3D] p-4 text-white relative overflow-hidden">
              <p className="text-[11px] uppercase tracking-wide opacity-90" style={{ fontFamily: "Inter, sans-serif" }}>Limited offer</p>
              <p className="text-lg font-bold mt-1" style={{ fontFamily: "Playfair Display, serif" }}>₦4,500 off your first order</p>
              <p className="text-[11px] opacity-85 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Min. spend ₦22,000 · Code: WELCOME4500</p>
              <button className="bg-white text-[#FF5C2E] text-[12px] font-semibold rounded-lg px-3 py-1.5 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Order now
              </button>
            </div>
          </div>

          {/* Restaurants you may like */}
          <div className="px-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[15px] font-bold text-[#3A2118]" style={{ fontFamily: "Playfair Display, serif" }}>Restaurants you may like</h4>
              <ChevronRight size={16} className="text-[#FF5C2E]" />
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {restaurants.map(({ name, km, rating, tag }) => (
                <div key={name} className="min-w-[140px] bg-white rounded-xl border border-[#FFD9C2] p-3">
                  <div className="w-full h-20 rounded-lg bg-[#FFD9C2] mb-2" />
                  <p className="text-[12px] font-semibold text-[#3A2118] truncate" style={{ fontFamily: "Inter, sans-serif" }}>{name}</p>
                  <div className="flex items-center gap-1 text-[10px] text-[#B07A5E] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span>{km}</span>
                    <Star size={10} className="text-[#FF8A3D] fill-[#FF8A3D]" />
                    <span>{rating}</span>
                  </div>
                  <span className="inline-block mt-2 text-[10px] text-[#FF5C2E] border border-[#FF5C2E] rounded-md px-2 py-0.5">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Food for you */}
          <div className="px-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[15px] font-bold text-[#3A2118]" style={{ fontFamily: "Playfair Display, serif" }}>Food for you</h4>
              <ChevronRight size={16} className="text-[#FF5C2E]" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {foodItems.map(({ name, shop }) => (
                <div key={name}>
                  <div className="w-full h-16 rounded-lg bg-[#FFD9C2] mb-1.5" />
                  <p className="text-[10.5px] font-medium text-[#3A2118] leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>{name}</p>
                  <p className="text-[9.5px] text-[#B07A5E]" style={{ fontFamily: "Inter, sans-serif" }}>{shop}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore map */}
          <div className="px-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[15px] font-bold text-[#3A2118]" style={{ fontFamily: "Playfair Display, serif" }}>Explore</h4>
              <ChevronRight size={16} className="text-[#FF5C2E]" />
            </div>
            <div className="w-full h-40 rounded-xl bg-[#FFE3D6] relative flex items-center justify-center border border-[#FFD9C2]">
              <MapPin size={28} className="text-[#FF5C2E]" />
              <span className="absolute bottom-2 left-2 text-[10px] text-[#B07A5E]" style={{ fontFamily: "Inter, sans-serif" }}>
                PJ Maps
              </span>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#FFD9C2] px-2 py-3 flex items-center justify-around">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <button key={label} onClick={() => setActive(label)} className="flex flex-col items-center gap-1">
                <Icon size={20} className={isActive ? "text-[#FF5C2E]" : "text-[#C9A695]"} />
                <span
                  className={`text-[10px] ${isActive ? "text-[#FF5C2E] font-medium" : "text-[#C9A695]"}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
