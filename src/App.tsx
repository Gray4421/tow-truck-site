/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useId } from 'react';
import {
  Phone,
  Truck,
  Wrench,
  ShieldCheck,
  MapPin,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Menu,
  X,
  Car,
  Zap,
  ArrowRight,
  Star,
  ExternalLink,
  RotateCcw,
  MessageSquare
} from 'lucide-react';

// Official company logo and authentic company truck photos provided by user
const LOGO_IMG = '/assets/aistudio/420074475_122099451446188948_2847702470456231766_n_87899a7e.jpg';
const FLEET_ALL_IMG = '/assets/aistudio/all_trucks_4856d3a3.jpeg';
const TRUCK_RAM_IMG = '/assets/aistudio/tow_truck_40fb29d5.jpeg';
const TOW_ACTION_IMG = '/assets/aistudio/wrek_8567d674.jpeg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Quote Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    vehicle: '',
    serviceType: 'emergency-tow',
    notes: '',
    isEmergency: true,
  });

  // Accessible unique IDs
  const nameId = useId();
  const phoneId = useId();
  const locationId = useId();
  const vehicleId = useId();
  const serviceId = useId();
  const notesId = useId();
  const emergencyCheckId = useId();
  const modalLocId = useId();
  const modalPhoneId = useId();
  const modalVehId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = 'TT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(generatedTicket);
    setFormSubmitted(true);
  };

  // Pre-formatted email and SMS body for instant delivery to Turtle's Towing
  const emailSubject = encodeURIComponent(`[DISPATCH ${ticketNumber || 'REQUEST'}] ${formData.location || 'Union, SC'}`);
  const emailBody = encodeURIComponent(
    `Hello Turtle's Towing Dispatch,\n\n` +
    `Ticket ID: ${ticketNumber}\n` +
    `Customer Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Location: ${formData.location}\n` +
    `Vehicle: ${formData.vehicle}\n` +
    `Service Needed: ${formData.serviceType}\n` +
    `Urgent Emergency: ${formData.isEmergency ? 'YES (High Priority)' : 'Standard'}\n` +
    `Notes: ${formData.notes || 'None'}\n\n` +
    `Sent from Turtle's Towing & Diesel Web Request.`
  );
  const emailUrl = `mailto:turtlesautodieselrepair@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const smsText = encodeURIComponent(
    `[Turtle's Tow Dispatch ${ticketNumber}] Name: ${formData.name}, Phone: ${formData.phone}, Location: ${formData.location}, Vehicle: ${formData.vehicle}, Service: ${formData.serviceType}${formData.notes ? `, Notes: ${formData.notes}` : ''}`
  );
  const smsUrl = `sms:8644665979?body=${smsText}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 pb-16 md:pb-0">
      
      {/* 1. TOP NAVIGATION BAR */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'bg-slate-950/95 border-b border-slate-800 py-3'
            : 'bg-slate-950/80 border-b border-slate-800/60 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6">
            
            {/* Official Logo Brand Lockup */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <div className="w-11 h-11 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src={LOGO_IMG}
                  alt="Turtle's Towing 24 Hour Towing Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  TURTLE'S TOWING
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                  &amp; Diesel Repair · Union, SC
                </span>
              </div>
            </a>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a href="#services" className="hover:text-emerald-400 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">
                About
              </a>
              <a href="#shop" className="hover:text-emerald-400 transition-colors">
                Trucks &amp; Shop
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">
                Contact &amp; Location
              </a>
            </nav>

            {/* Call Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:8644665979"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call (864) 466-5979</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 mt-2 space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              About Us
            </a>
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Trucks &amp; Shop
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
            >
              Contact &amp; Location
            </a>
            <div className="pt-2">
              <a
                href="tel:8644665979"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Dispatch: (864) 466-5979</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-8 pb-14 lg:pt-12 lg:pb-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-semibold text-emerald-400">24/7 Local Towing &amp; Roadside Dispatch</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Union County, SC</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Fast Towing &amp; Diesel Pickup Repair in Union, SC.
              </h1>

              {/* Subheadline */}
              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Quick arrival times, damage-free wheel lift and flatbed towing for passenger cars, SUVs, and pickup trucks, plus honest mechanical repair for gas and diesel engines.
              </p>

              {/* Vehicle Scope Callout */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                <Car className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Vehicles We Handle:</span> Cars, sedans, AWD crossovers, SUVs, work vans, and diesel pickup trucks (Ford Powerstroke, Chevy Duramax, Ram Cummins).
                  <span className="block text-[11px] text-slate-400 mt-0.5 italic">*Please note: We do not handle semi-trucks or tractor-trailers.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setEmergencyModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer"
                >
                  <AlertTriangle className="w-4 h-4 fill-slate-950 text-emerald-400" />
                  <span>Request Emergency Tow</span>
                </button>

                <a
                  href="tel:8644665979"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>(864) 466-5979</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">USDOT #4179005</p>
                  <p className="text-[11px] text-slate-400">MC-1608646</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Licensed &amp; Insured</p>
                  <p className="text-[11px] text-slate-400">Total vehicle care</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Local &amp; Family-Owned</p>
                  <p className="text-[11px] text-slate-400">1502 Lockhart Hwy</p>
                </div>
              </div>

            </div>

            {/* Right Visual Image: Real Turtle's Towing Ram 4500 Wrecker */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                <div className="aspect-[4/3] relative bg-slate-900">
                  <img
                    src={TRUCK_RAM_IMG}
                    alt="Turtle's Towing Dodge Ram 4500 Cummins 24 Hour Wrecker Truck in Union, SC"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm border border-slate-800 rounded-lg p-1.5 flex items-center gap-2">
                    <img
                      src={LOGO_IMG}
                      alt="Logo badge"
                      className="w-6 h-6 object-contain rounded bg-white p-0.5"
                    />
                    <span className="text-[11px] font-bold text-emerald-400 pr-1">24 Hour Towing</span>
                  </div>
                </div>
                <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-slate-200">Turtle's Towing Ram 4500 Cummins</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">(864) 466-5979</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <section className="py-5 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <div className="p-2">
              <p className="text-xl font-bold text-emerald-400 font-mono">24/7 Service</p>
              <p className="text-xs text-slate-400 mt-0.5">Day &amp; Night Emergency Calls</p>
            </div>

            <div className="p-2">
              <p className="text-xl font-bold text-white font-mono">25-35 min</p>
              <p className="text-xs text-slate-400 mt-0.5">Average Union Co. Response</p>
            </div>

            <div className="p-2">
              <p className="text-xl font-bold text-white font-mono">Wheel Lift &amp; Bed</p>
              <p className="text-xs text-slate-400 mt-0.5">Damage-Free Vehicle Towing</p>
            </div>

            <div className="p-2">
              <p className="text-xl font-bold text-emerald-400 font-mono">Lockhart Hwy</p>
              <p className="text-xs text-slate-400 mt-0.5">Full Repair Facility in Union</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Towing &amp; Mechanical Repair Services
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Serving drivers, families, and tradesmen across Union, Lockhart, Jonesville, and Buffalo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                24-Hour Emergency Towing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Fast accident recovery, roadside breakdowns, and local transport for passenger cars, light trucks, and SUVs. We arrive promptly with proper recovery equipment.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accident scene recovery &amp; law enforcement dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ditch winching &amp; off-road extraction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sedans, coupes, crossovers, pickup trucks &amp; vans</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Available 24/7/365</span>
                <a href="tel:8644665979" className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1">
                  Call for Dispatch <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Auto &amp; Diesel Pickup Repair
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Expert mechanical service at our shop on Lockhart Hwy. We specialize in diagnostic troubleshooting, mechanical repairs, and maintenance for gas autos and diesel pickups.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ford Powerstroke (6.0L, 6.4L, 6.7L), Chevy Duramax &amp; Ram Cummins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Computer ECM diagnostic scans &amp; electrical troubleshooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Injectors, turbos, brakes, cooling systems &amp; alternator replacement</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">1502 Lockhart Hwy</span>
                <a href="#contact" className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1">
                  Book Repair <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Flatbed &amp; Wheel Lift Towing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Damage-free vehicle transport using safe wheel straps and secure rollback beds. Ideal for all-wheel-drive (AWD) cars, low-clearance vehicles, and non-running project cars.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Non-marring wheel harness straps (zero bumper or wheel damage)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Safe for all AWD, 4x4, and automatic transmissions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Towaway service for broken-down or inoperable vehicles</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Local &amp; Regional Delivery</span>
                <a href="tel:8644665979" className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1">
                  Call for Price <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Roadside Assistance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Stuck on the road with a dead battery, flat tire, or keys locked inside? Our service unit will come straight to you with the tools needed to get you going again.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>12-volt battery jump starts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Emergency fuel delivery (Diesel or Unleaded gas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vehicle lockout assistance &amp; spare tire mounting</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Union County Roadside</span>
                <a href="tel:8644665979" className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1">
                  Call Roadside <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SHOP & FLEET */}
      <section id="shop" className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our Trucks &amp; Repair Facility
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Real equipment and repair bays ready to handle your towing emergencies and diesel truck maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Real Fleet Lineup */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-slate-900 relative">
                <img
                  src={FLEET_ALL_IMG}
                  alt="Turtle's Towing full fleet of Ford, Ram Cummins, and International wreckers in Union, SC"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">Turtle's 24/7 Wrecker Fleet</h3>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">Ford · Ram Cummins · International</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our actual fleet lineup stationed in Union, SC. Equipped with heavy-duty wheel lifts, boom recovery units, and winches ready around the clock for emergency tows, accident recovery, and roadside assistance.
                </p>
              </div>
            </div>

            {/* Real Towing in Action with Dollies */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-slate-900 relative">
                <img
                  src={TOW_ACTION_IMG}
                  alt="Turtle's Towing Ram wrecker safely towing an SUV using roadside dollies and wheel straps"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">Safe Dolly &amp; Wheel-Lift Towing</h3>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">AWD &amp; Low-Clearance Safe</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Turtle's Towing truck in action safely towing a crossover SUV with wheel straps and auxiliary dollies. This completely eliminates drivetrain wear on all-wheel-drive (AWD) and 4x4 vehicles with zero body damage.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. ABOUT US & TESTIMONIALS */}
      <section id="about" className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-slate-800 shadow">
                  <img
                    src={LOGO_IMG}
                    alt="Turtle's Towing Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                    Local Family Business
                  </span>
                  <h2 className="text-2xl font-bold text-white">
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
                  <p className="text-slate-500 uppercase">License</p>
                  <p className="font-mono text-white font-semibold">USDOT #4179005 · MC-1608646</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase">Shop Address</p>
                  <p className="text-emerald-400 font-semibold">1502 Lockhart Hwy, Union</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 italic mb-2">
                  "Called Turtle's when my wife's SUV broke down on Hwy 49 outside Union. They arrived in less than 30 minutes, loaded the car with care on the truck, and gave us an honest price. Great local people."
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  Mark T. · <span className="text-slate-500">Union, SC</span>
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-1 text-amber-400 mb-1.5">
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

      {/* 7. CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Contact &amp; 24/7 Dispatch Center
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Give us a call directly for emergency dispatch or submit your request below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Contact details */}
            <div className="md:col-span-5 space-y-4">
              
              <a
                href="tel:8644665979"
                className="block p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      24/7 Phone Dispatch
                    </span>
                    <p className="text-xl font-bold text-white mt-0.5 font-mono group-hover:text-emerald-300 transition-colors">
                      (864) 466-5979
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Direct line for immediate towing and roadside dispatch.
                    </p>
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Shop Address
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      1502 Lockhart Hwy, Union, SC 29379
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Conveniently located on Highway 49 just outside downtown Union.
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1502+Lockhart+Hwy+Union+SC+29379"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:underline mt-2.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:turtlesautodieselrepair@gmail.com"
                className="block p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-slate-300 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </span>
                    <p className="text-xs font-semibold text-white mt-0.5 break-all">
                      turtlesautodieselrepair@gmail.com
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      For receipts, estimates, and non-emergency service questions.
                    </p>
                  </div>
                </div>
              </a>

            </div>

            {/* Inquiry Form */}
            <div className="md:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white mb-1">
                Dispatch Request / Service Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Send your details to our team. For active road breakdowns, call us directly at <a href="tel:8644665979" className="text-emerald-400 font-semibold">(864) 466-5979</a>.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Dispatch Request Recorded</h4>
                      <p className="text-xs font-mono text-emerald-400">Ticket Reference: {ticketNumber}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your request has been recorded. For the fastest response, you can transmit your details directly to Turtle's Towing:
                  </p>

                  {/* Immediate Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <a
                      href="tel:8644665979"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>1-Tap Call Dispatch</span>
                    </a>

                    <a
                      href={smsUrl}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Send Text / SMS</span>
                    </a>

                    <a
                      href={emailUrl}
                      className="sm:col-span-2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Send to turtlesautodieselrepair@gmail.com</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-end text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          location: '',
                          vehicle: '',
                          serviceType: 'emergency-tow',
                          notes: '',
                          isEmergency: true,
                        });
                      }}
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>New Form</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor={nameId} className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        id={nameId}
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label htmlFor={phoneId} className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        required
                        placeholder="(864) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor={locationId} className="block text-xs font-medium text-slate-300 mb-1">
                        Location / Highway *
                      </label>
                      <input
                        id={locationId}
                        type="text"
                        required
                        placeholder="e.g. Hwy 49 near Lockhart Hwy"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label htmlFor={vehicleId} className="block text-xs font-medium text-slate-300 mb-1">
                        Vehicle (Car, SUV, or Pickup)
                      </label>
                      <input
                        id={vehicleId}
                        type="text"
                        placeholder="e.g. 2018 Ford F-250 / Chevy Silverado / Civic"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={serviceId} className="block text-xs font-medium text-slate-300 mb-1">
                      Service Needed
                    </label>
                    <select
                      id={serviceId}
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                    >
                      <option value="emergency-tow">Emergency Towing (Car / SUV / Pickup)</option>
                      <option value="flatbed-transport">Flatbed Rollback Safe Transport</option>
                      <option value="diesel-diagnostics">Diesel Pickup Diagnostic / Repair</option>
                      <option value="auto-repair">General Auto Mechanical Repair</option>
                      <option value="roadside-jump">Roadside Battery Jump Start</option>
                      <option value="roadside-lockout">Car Lockout Assistance</option>
                      <option value="roadside-tire">Flat Tire Assistance</option>
                      <option value="fuel-delivery">Fuel Delivery</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={notesId} className="block text-xs font-medium text-slate-300 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id={notesId}
                      rows={2}
                      placeholder="Vehicle on shoulder, keys are in the ignition, destination address..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <input
                      id={emergencyCheckId}
                      type="checkbox"
                      checked={formData.isEmergency}
                      onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                      className="w-3.5 h-3.5 rounded text-emerald-500 focus:ring-emerald-400 border-slate-700 bg-slate-950 cursor-pointer"
                    />
                    <label htmlFor={emergencyCheckId} className="text-xs text-slate-300 cursor-pointer">
                      Flag as urgent breakdown (priority response)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg font-bold text-xs uppercase text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer"
                  >
                    Submit Dispatch Request
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 text-slate-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/60">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow">
                <img
                  src={LOGO_IMG}
                  alt="Turtle's Towing Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-white block">Turtle's Towing &amp; Diesel Repair</span>
                <span className="text-[10px] text-slate-500">1502 Lockhart Hwy, Union, SC 29379</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-xs">
              <a href="#services" className="hover:text-emerald-400">Services</a>
              <a href="#about" className="hover:text-emerald-400">About</a>
              <a href="#shop" className="hover:text-emerald-400">Trucks &amp; Shop</a>
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

      {/* 9. STICKY MOBILE EMERGENCY DISPATCH BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950 border-t border-slate-800 p-2.5 px-4">
        <div className="flex items-center gap-2">
          <a
            href="tel:8644665979"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs uppercase text-slate-950 bg-emerald-400 hover:bg-emerald-300"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call: (864) 466-5979</span>
          </a>
          <button
            type="button"
            onClick={() => setEmergencyModalOpen(true)}
            className="px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-semibold"
          >
            Dispatch
          </button>
        </div>
      </div>

      {/* 10. EMERGENCY MODAL */}
      {emergencyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 animate-in fade-in">
          <div className="relative w-full max-w-md bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
            
            <button
              type="button"
              onClick={() => setEmergencyModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow">
                <img
                  src={LOGO_IMG}
                  alt="Turtle's Towing"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Emergency Towing</h3>
                <p className="text-xs text-slate-400">Cars, SUVs &amp; Pickups · Union, SC</p>
              </div>
            </div>

            <div className="space-y-2 bg-slate-950 rounded-lg p-3 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Move to a safe position off the roadway away from moving traffic.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Turn on hazard warning flashers if battery allows.</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <div>
                <label htmlFor={modalLocId} className="block text-xs font-medium text-slate-300 mb-1">
                  Location / Nearest Landmark
                </label>
                <input
                  id={modalLocId}
                  type="text"
                  placeholder="e.g. Lockhart Hwy near mile marker 12"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={modalPhoneId} className="block text-xs font-medium text-slate-300 mb-1">
                    Phone #
                  </label>
                  <input
                    id={modalPhoneId}
                    type="tel"
                    placeholder="(864) ..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label htmlFor={modalVehId} className="block text-xs font-medium text-slate-300 mb-1">
                    Vehicle Model
                  </label>
                  <input
                    id={modalVehId}
                    type="text"
                    placeholder="e.g. Ford F-150 / Civic / Tahoe"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
            </div>

            <div className="pt-1 space-y-2">
              <a
                href="tel:8644665979"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-xs uppercase text-slate-950 bg-emerald-400 hover:bg-emerald-300"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Dispatch: (864) 466-5979</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setEmergencyModalOpen(false);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-950 border border-slate-800"
              >
                Or Fill Out Online Form
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
