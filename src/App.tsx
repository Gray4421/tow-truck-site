/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Menu,
  X,
  ArrowRight,
  Star,
  ExternalLink,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

// Official user-uploaded company logo and authentic company truck photos
const LOGO_IMG = '/assets/aistudio/420074475_122099451446188948_2847702470456231766_n_87899a7e.jpg';
const FLEET_ALL_IMG = '/assets/aistudio/all_trucks_4856d3a3.jpeg';
const TRUCK_RAM_IMG = '/assets/aistudio/tow_truck_40fb29d5.jpeg';
const TOW_ACTION_IMG = '/assets/aistudio/wrek_8567d674.jpeg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Interactive Capability Tab (Inspired by "The right Pressure for every surface" video feature)
  const [activeVehicleTab, setActiveVehicleTab] = useState<'suv' | 'diesel' | 'car' | 'roadside'>('suv');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Capabilities dataset for the interactive switcher
  const vehicleCapabilities = {
    suv: {
      title: 'AWD & 4x4 SUVs / Crossovers',
      badge: 'Zero-Drivetrain Drag',
      img: TOW_ACTION_IMG,
      equipment: 'Dodge Ram Cummins + Auxiliary Roadside Dollies',
      method: 'Full 4-wheel off-ground transport using auxiliary dollies and heavy-duty soft wheel straps.',
      spec1Label: 'Drivetrain Protection',
      spec1Val: '100% AWD Safe',
      spec2Label: 'Ground Clearance',
      spec2Val: 'Zero Scrape',
      benefit: 'Eliminates transfer case and transmission wear on all-wheel-drive vehicles.',
    },
    diesel: {
      title: 'Diesel Pickups & Work Trucks',
      badge: 'Heavy Recovery Rating',
      img: TRUCK_RAM_IMG,
      equipment: 'Ram 4500 Cummins Heavy Wrecker Unit',
      method: 'High-tonnage hydraulic underlift engineered for Powerstroke, Duramax, and Cummins diesel trucks.',
      spec1Label: 'Truck Capacity',
      spec1Val: 'Class 4 & 5 Rated',
      spec2Label: 'Shop Diagnostics',
      spec2Val: 'ECM & Sensor Fixes',
      benefit: 'Equipped to tow your diesel pickup and diagnose engine trouble at our 1502 Lockhart Hwy shop.',
    },
    car: {
      title: 'Passenger Sedans, Coupes & Hatchbacks',
      badge: 'Fast Accident Extraction',
      img: FLEET_ALL_IMG,
      equipment: 'Rapid Response Wheel-Lift Units',
      method: 'Quick-cycle hydraulic wheel cradles for accident clearance, highway breakdowns, and parking decks.',
      spec1Label: 'Hookup Speed',
      spec1Val: '< 3 Minutes',
      spec2Label: 'Wheel Contact',
      spec2Val: 'Tire-Only Harness',
      benefit: 'Fastest dispatch in Union County. Soft straps safeguard aluminum rims and painted bodywork.',
    },
    roadside: {
      title: '24/7 Roadside Assistance & Recovery',
      badge: 'On-Scene Fixes',
      img: TOW_ACTION_IMG,
      equipment: 'Mobile Roadside Service Unit',
      method: 'Carrying commercial 12V boost packs, roadside lock-out gear, high-capacity floor jacks, and fuel cans.',
      spec1Label: 'Average Arrival',
      spec1Val: '20 - 30 Mins',
      spec2Label: 'Service Coverage',
      spec2Val: 'Union & Upstate SC',
      benefit: 'Immediate help for dead batteries, emergency fuel delivery, tire flats, and locked keys.',
    },
  };

  const activeCap = vehicleCapabilities[activeVehicleTab];

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 font-sans selection:bg-emerald-400 selection:text-black pb-24 md:pb-16 antialiased">
      
      {/* 1. FLOATING MINIMALIST PILL NAVIGATION BAR (Inspired by reference sites) */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
        <header
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto ${
            scrolled
              ? 'bg-[#0b0f19]/90 backdrop-blur-xl border border-white/10 shadow-2xl py-2 px-4 sm:px-6'
              : 'bg-[#0d1220]/80 backdrop-blur-md border border-white/10 py-2.5 px-4 sm:px-6 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src={LOGO_IMG}
                  alt="Turtle's Towing Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-extrabold tracking-tight text-white uppercase font-display leading-tight">
                  TURTLE'S TOWING
                </span>
                <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold -mt-0.5">
                  24 HR DISPATCH · UNION, SC
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
                Capabilities
              </a>
              <a href="#fleet" className="hover:text-emerald-400 transition-colors">
                Trucks &amp; Fleet
              </a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </nav>

            {/* High-Contrast Phone Pill Button */}
            <div className="flex items-center gap-2">
              <a
                href="tel:8644665979"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Call (864) 466-5979</span>
                <span className="sm:hidden">Call 24/7</span>
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-sm mx-auto mt-2 p-4 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-2 pointer-events-auto">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-emerald-400"
            >
              Capabilities &amp; Specs
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-emerald-400"
            >
              Trucks &amp; Fleet
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-emerald-400"
            >
              About Turtle's
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-emerald-400"
            >
              Direct Call &amp; Location
            </a>
            <div className="pt-2">
              <a
                href="tel:8644665979"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Dispatch: (864) 466-5979</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* 2. CINEMATIC HERO SECTION (Inspired by Boat Laptop Mockup & High-End Visuals) */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        
        {/* Subtle dark ambient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Action Pill Zone */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Status pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-emerald-400">24/7 Roadside Units On Call</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400">Union, SC &amp; Upstate</span>
              </div>

              {/* Bold Display Headline (Inspired by "REDEFINE OCEAN SPEED") */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[0.95]">
                WHEN YOU'RE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-emerald-400">
                  STRANDED,
                </span>{' '}
                WE ROLL.
              </h1>

              {/* Crisp Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Rapid arrival, damage-free wheel lift &amp; dolly towing for passenger cars, AWD SUVs, and diesel pickups across Union County, SC.
              </p>

              {/* Scope note */}
              <p className="text-xs text-slate-400">
                Cars · SUVs · Diesel Pickups · Work Vans <span className="text-slate-500">(No semi-trucks)</span>
              </p>

              {/* Dual Action Pills */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="tel:8644665979"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call 24/7: (864) 466-5979</span>
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>

              {/* Key Trust Markers */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">USDOT #4179005</p>
                  <p className="text-[11px] text-slate-400">MC-1608646</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Licensed &amp; Insured</p>
                  <p className="text-[11px] text-slate-400">Full vehicle coverage</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Local &amp; Family-Owned</p>
                  <p className="text-[11px] text-slate-400">1502 Lockhart Hwy</p>
                </div>
              </div>

            </div>

            {/* Right Visual Carrier: 24/7 Fleet Lineup */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1220] shadow-2xl group">
                
                {/* Fleet Photo */}
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-950">
                  <img
                    src={FLEET_ALL_IMG}
                    alt="Turtle's Towing full fleet of wreckers ready in Union, SC"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-transparent to-transparent"></div>

                  {/* Top Floating Logo Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15">
                    <img
                      src={LOGO_IMG}
                      alt="Logo"
                      className="w-5 h-5 rounded-full bg-white object-contain"
                    />
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Turtle's Towing
                    </span>
                  </div>

                  {/* Top Right Live Signal */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>DISPATCH ACTIVE</span>
                  </div>
                </div>

                {/* Telemetry Glass Widget */}
                <div className="p-5 bg-[#0b0f19] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block">
                      24/7 ON-CALL FLEET
                    </span>
                    <span className="text-sm font-extrabold text-white font-display">
                      Union County Towing &amp; Recovery
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Wheel-Lift Units · Auxiliary Dollies · Roadside Gear
                    </p>
                  </div>
                  <div className="text-right pl-4 border-l border-white/10">
                    <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                      25<span className="text-xs text-slate-400 font-sans font-normal ml-0.5">min</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                      Avg Response
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Underglow */}
              <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-2xl -z-10 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. METRIC STRIP (Clean Modern Segmented Bar) */}
      <section className="py-6 border-y border-white/5 bg-[#090d16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">24/7/365</p>
              <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mt-1">
                Live Dispatch Desk
              </p>
            </div>

            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">25 - 35 MIN</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Union County Arrival
              </p>
            </div>

            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mt-1">
                Damage-Free Strapping
              </p>
            </div>

            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">LOCAL YARD</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                1502 Lockhart Hwy
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CAPABILITY & VEHICLE SELECTOR (Inspired by video: "The right Pressure for every surface") */}
      <section id="capabilities" className="py-20 bg-[#070a12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/30">
              Precision Equipment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-display tracking-tight">
              The Right Tow Rig For Every Vehicle
            </h2>
            <p className="text-sm text-slate-400">
              Select your vehicle type below to see our dedicated recovery setup and damage-free protocol.
            </p>
          </div>

          {/* Segmented Pill Switcher (Inspired by the pressure washing selector tabs) */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-2xl mx-auto rounded-full bg-white/5 border border-white/10 mb-10">
            {[
              { id: 'suv', label: 'AWD & 4x4 SUVs' },
              { id: 'diesel', label: 'Diesel Pickups' },
              { id: 'car', label: 'Cars & Sedans' },
              { id: 'roadside', label: 'Roadside Assist' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveVehicleTab(tab.id as any)}
                className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeVehicleTab === tab.id
                    ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Capability Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c101b] border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              
              {/* Photo View */}
              <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto bg-slate-950">
                <img
                  src={activeCap.img}
                  alt={activeCap.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {activeCap.badge}
                </div>
              </div>

              {/* Specs & Technique Details */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                      Dedicated Rig Protocol
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                      {activeCap.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeCap.method}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300">
                    <span className="font-semibold text-white">Why it matters:</span> {activeCap.benefit}
                  </div>

                  {/* Dual Telemetry Gauges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        {activeCap.spec1Label}
                      </span>
                      <span className="text-base font-extrabold text-white font-display mt-0.5 block">
                        {activeCap.spec1Val}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        {activeCap.spec2Label}
                      </span>
                      <span className="text-base font-extrabold text-emerald-400 font-display mt-0.5 block">
                        {activeCap.spec2Val}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Centered Dispatch Call Action Bar */}
            <div className="p-6 bg-[#090d16] border-t border-white/10 flex flex-col items-center justify-center text-center gap-3">
              <a
                href="tel:8644665979"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 24/7 Dispatch: (864) 466-5979</span>
              </a>
              <p className="text-xs text-slate-400">
                Direct to on-call driver · Fast arrival in Union, SC &amp; Upstate
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FLEET & EQUIPMENT SHOWCASE */}
      <section id="fleet" className="py-20 bg-[#070a12] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/30">
                Local Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-display tracking-tight mt-3">
                Our Trucks &amp; Equipment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Stationed at 1502 Lockhart Hwy in Union, SC. Maintained to the highest commercial safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Fleet Lineup */}
            <div className="rounded-3xl bg-[#0c101b] border border-white/10 overflow-hidden group">
              <div className="aspect-[4/3] bg-black relative overflow-hidden">
                <img
                  src={FLEET_ALL_IMG}
                  alt="Turtle's Towing full fleet lineup in Union, SC"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase text-emerald-400">
                  Ford · Ram Cummins · International
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white font-display uppercase">
                  Turtle's 24/7 Wrecker Fleet
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Our actual fleet lineup stationed in Union, SC. Heavy-duty hydraulic wheel lifts, boom recovery units, and winches ready around the clock for breakdowns, ditch extractions, and towing.
                </p>
              </div>
            </div>

            {/* Card 2: Dolly Recovery */}
            <div className="rounded-3xl bg-[#0c101b] border border-white/10 overflow-hidden group">
              <div className="aspect-[4/3] bg-black relative overflow-hidden">
                <img
                  src={TOW_ACTION_IMG}
                  alt="Turtle's Towing truck towing SUV with auxiliary dollies"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase text-emerald-400">
                  AWD &amp; Low-Clearance Safe
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white font-display uppercase">
                  Safe Dolly &amp; Wheel-Lift Towing
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Turtle's Towing truck in action safely towing a crossover SUV with wheel straps and auxiliary dollies. Completely eliminates drivetrain wear on AWD/4x4 vehicles with zero body damage.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. ABOUT & LOCAL HERITAGE */}
      <section id="about" className="py-16 bg-[#05070c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shrink-0 border border-white/10 shadow">
                  <img
                    src={LOGO_IMG}
                    alt="Turtle's Towing Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                    Local Family Business
                  </span>
                  <h2 className="text-2xl font-bold text-white uppercase font-display">
                    Turtle's Towing &amp; Diesel Repair
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Turtle's Auto &amp; Diesel Repair LLC (USDOT #4179005) is locally owned and operated right here in Union, South Carolina. We know that when your car or work truck breaks down, you want quick help from an honest local team.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you need a quick tire change or jump start on Highway 49, an emergency tow home, or engine diagnostics on your diesel pickup, we give you upfront pricing with no games.
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
                <div>
                  <p className="text-slate-500 uppercase text-[10px]">License</p>
                  <p className="font-mono text-white font-semibold">USDOT #4179005</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-[10px]">Shop Location</p>
                  <p className="text-emerald-400 font-semibold">1502 Lockhart Hwy</p>
                </div>
              </div>
            </div>

            {/* Verified Reviews */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#0c101b] border border-white/10">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 italic mb-2">
                  "Called Turtle's when my wife's SUV broke down on Hwy 49 outside Union. They arrived in less than 30 minutes, loaded the car with care on the truck with dollies, and gave us an honest price. Great local people."
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  Mark T. · <span className="text-slate-500">Union, SC</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c101b] border border-white/10">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 italic mb-2">
                  "My Ford F-250 6.7L diesel was throwing a turbo pressure code and running rough. Turtle's got it into their shop, diagnosed the sensor failure right away, and had me back on the road without charging an arm and a leg."
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  Bradley S. · <span className="text-slate-500">Lockhart, SC (Diesel Pickup Owner)</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. DIRECT CONTACT & 24/7 DISPATCH CONSOLE (NO FORM AS REQUESTED!) */}
      <section id="contact" className="py-20 bg-[#070a12] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/30">
              Direct Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-display tracking-tight">
              24/7 Dispatch &amp; Shop Location
            </h2>
            <p className="text-sm text-slate-400">
              No complicated forms or wait times. Tap below to connect directly with Turtle's Towing operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Direct Call Card */}
            <a
              href="tel:8644665979"
              className="p-6 rounded-3xl bg-[#0c101b] border border-emerald-500/30 hover:border-emerald-400 transition-all group flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-400 text-black flex items-center justify-center font-bold shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                    Immediate Response
                  </span>
                  <h3 className="text-xl font-bold text-white font-display mt-0.5">
                    Call 24/7 Dispatch
                  </h3>
                  <p className="text-2xl font-extrabold text-white font-mono mt-2 group-hover:text-emerald-300 transition-colors">
                    (864) 466-5979
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Direct line to our on-call tow truck operators. 24 hours a day, 7 days a week.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300">
                <span>Tap to Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Direct Text / SMS Card */}
            <a
              href="sms:8644665979?body=Hello%20Turtle's%20Towing,%20I%20need%20a%20tow%20in%20Union%20County."
              className="p-6 rounded-3xl bg-[#0c101b] border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Text Message
                  </span>
                  <h3 className="text-xl font-bold text-white font-display mt-0.5">
                    Send SMS Text
                  </h3>
                  <p className="text-2xl font-extrabold text-white font-mono mt-2">
                    (864) 466-5979
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Text your current location, mile marker, or address directly to our dispatch desk.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white">
                <span>Open Text Message</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Shop Address & GPS Card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=1502+Lockhart+Hwy+Union+SC+29379"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#0c101b] border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Physical Location
                  </span>
                  <h3 className="text-xl font-bold text-white font-display mt-0.5">
                    Shop &amp; Tow Yard
                  </h3>
                  <p className="text-sm font-bold text-white mt-2">
                    1502 Lockhart Hwy, Union, SC 29379
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Centrally located along Highway 49, minutes from Union, Lockhart, Jonesville, and Buffalo.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white">
                <span>Open Driving Directions</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

          </div>

          {/* Email Support Banner */}
          <div className="max-w-5xl mx-auto mt-6 p-4 rounded-2xl bg-[#0c101b] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-300">
                Email inquiries, invoicing, and fleet accounts: <a href="mailto:turtlesautodieselrepair@gmail.com" className="text-white font-semibold underline">turtlesautodieselrepair@gmail.com</a>
              </span>
            </div>
            <span className="font-mono text-slate-400 text-[11px]">USDOT #4179005</span>
          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-black border-t border-white/10 py-10 text-slate-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 shadow">
                <img
                  src={LOGO_IMG}
                  alt="Turtle's Towing Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-bold text-white block uppercase font-display">Turtle's Towing &amp; Diesel Repair</span>
                <span className="text-[10px] text-slate-500">1502 Lockhart Hwy, Union, SC 29379</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-xs">
              <a href="#capabilities" className="hover:text-emerald-400">Capabilities</a>
              <a href="#fleet" className="hover:text-emerald-400">Fleet</a>
              <a href="#about" className="hover:text-emerald-400">About</a>
              <a href="#contact" className="hover:text-emerald-400">Contact</a>
              <a href="tel:8644665979" className="text-emerald-400 font-semibold">(864) 466-5979</a>
            </div>

            <div className="text-center md:text-right text-xs">
              <p className="font-mono text-slate-300">USDOT #4179005</p>
              <p className="text-[11px] text-slate-500">24/7 Dispatch Hotline</p>
            </div>

          </div>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>&copy; {new Date().getFullYear()} Turtle's Towing &amp; Diesel Repair. All rights reserved.</p>
            <p>Serving Union, Lockhart, Jonesville, and Buffalo, SC (No semi-trucks).</p>
          </div>
        </div>
      </footer>

      {/* 10. ANCHORED FLOATING BOTTOM DISPATCH DOCK (Inspired by the video's floating bar) */}
      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none flex justify-center">
        <div className="pointer-events-auto inline-flex items-center gap-3 p-2 pl-4 rounded-full bg-[#0b0f19]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-white hidden sm:inline font-display">
              24/7 Live Dispatch
            </span>
          </div>

          <a
            href="tel:8644665979"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>(864) 466-5979</span>
          </a>
        </div>
      </div>

    </div>
  );
}
