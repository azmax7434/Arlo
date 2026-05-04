/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-arlo-dark shadow-xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center z-20 relative">
        <a href="#" className="font-bebas font-black tracking-tighter text-white text-[3.5rem] leading-none">ARLO</a>
        
        <div className="hidden md:flex gap-8 items-center text-white/90 text-sm font-medium tracking-wide">
          {['Menu', 'Story', 'Reviews', 'Location'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="border-b-2 border-transparent hover:border-arlo-light-blue pb-1 uppercase transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="tel:+923214033939"
          className="hidden md:flex bg-white text-arlo-blue font-bold text-sm px-6 py-2 uppercase hover:bg-arlo-blue hover:text-white transition-colors duration-300"
        >
          CALL TO ORDER
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen bg-arlo-dark flex flex-col justify-center overflow-hidden pt-24">
      {/* Top checkerboard */}
      <div className="absolute top-0 w-full h-3 bg-checkerboard opacity-80" />

      <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center z-10 relative mt-12 mb-20">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/5 font-bebas font-black text-[12rem] md:text-[20rem] pointer-events-none select-none">
          ARLO
        </div>

        <motion.div style={{ y }} className="max-w-4xl relative z-10">
          <h1 className="font-bebas text-white text-[5rem] md:text-[8rem] font-black leading-[0.85] tracking-tight uppercase flex flex-col">
            <span>SMASHED.</span>
            <span>STACKED.</span>
            <span className="text-arlo-light-blue">LEGENDARY.</span>
          </h1>
          
          <p className="font-syne text-arlo-light-blue text-xl md:text-2xl font-semibold italic flex items-center gap-4 mt-6">
            Lahore's most crave-worthy burgers.
            <span className="hidden md:block h-[2px] w-24 bg-arlo-light-blue"></span>
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a href="#menu" className="bg-arlo-blue text-white font-bebas font-black uppercase text-lg px-10 py-4 text-center hover:bg-arlo-light-blue transition-all tracking-wider">
              EXPLORE THE MENU
            </a>
            <a href="https://wa.me/923214033939" target="_blank" rel="noreferrer" className="border-2 border-white text-white font-bebas font-black uppercase text-lg px-10 py-4 text-center hover:bg-white hover:text-arlo-dark transition-all tracking-wider">
              ORDER BY WHATSAPP
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee Info Strip */}
      <div className="relative bottom-8 w-full bg-arlo-blue py-3 overflow-hidden whitespace-nowrap z-20 border-y border-white/10">
        <div className="animate-marquee font-bebas font-bold text-white text-sm uppercase tracking-[0.2em] inline-block px-4">
          OPEN 7 DAYS A WEEK &middot; 12 PM – 2 AM &middot; LAKE CITY LAHORE &middot; CALL: +92 321 4033939 &middot; BEEF &amp; CHICKEN BURGERS &middot; SHAKES &middot; WINGS &middot; OPEN 7 DAYS A WEEK &middot; 12 PM – 2 AM &middot; LAKE CITY LAHORE &middot; CALL: +92 321 4033939 &middot; BEEF &amp; CHICKEN BURGERS &middot; SHAKES &middot; WINGS &middot; 
        </div>
      </div>

      {/* Bottom checkerboard */}
      <div className="absolute bottom-0 w-full h-3 bg-checkerboard opacity-80 z-20" />
    </section>
  );
}

function Menu() {
  const categories = [
    {
      title: "BEEF BURGERS",
      items: [
        { name: "Beefsmith", price: "1,100" },
        { name: "Mushroom Melt", price: "1,150" },
        { name: "Cali Classic", price: "1,150" },
        { name: "Texas BBQ", price: "1,150" },
      ]
    },
    {
      title: "CHICKEN BURGERS",
      items: [
        { name: "Caesar's Chicken", price: "700" },
        { name: "Smokey Jalapeño", price: "750" },
        { name: "Chicken Hot Lava", price: "750" },
        { name: "Garlic Chicken", price: "750" },
      ]
    },
    {
      title: "APPETIZERS",
      items: [
        { name: "Buffalo Wings", price: "650" },
        { name: "Sweet Chilli Wings", price: "650" },
      ]
    },
    {
      title: "SALADS",
      items: [
        { name: "Potato Salad", price: "750" },
        { name: "Coleslaw", price: "750" },
      ]
    },
    {
      title: "FRIES",
      items: [
        { name: "Plain Fries", price: "250" },
        { name: "Cheese Fries", price: "450" },
        { name: "Garlic Fries", price: "450" },
        { name: "Loaded Fries", price: "850" },
      ]
    },
    {
      title: "SHAKES",
      items: [
        { name: "Chocolate Shake", price: "700" },
        { name: "Strawberry Shake", price: "700" },
        { name: "Oreo Shake", price: "750" },
        { name: "Cold Coffee", price: "750" },
      ]
    },
    {
      title: "DRINKS",
      items: [
        { name: "Peach Iced Tea", price: "350" },
        { name: "Coke", price: "120" },
        { name: "Sprite", price: "120" },
        { name: "Fanta", price: "120" },
      ]
    }
  ];

  return (
    <section id="menu" className="bg-arlo-cream py-24 relative text-arlo-dark">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-bebas text-[5rem] md:text-[6rem] font-black leading-[0.85] tracking-tight uppercase mb-4">THE MENU</h2>
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: 80 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-arlo-blue mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mb-8"
            >
              <h3 className="font-bebas font-black text-arlo-dark text-3xl md:text-4xl uppercase border-l-4 border-arlo-blue pl-4 mb-6 tracking-tight">
                {cat.title}
              </h3>
              <div className="flex flex-col">
                {cat.items.map((item, j) => (
                  <div 
                    key={j} 
                    className="flex justify-between items-center py-4 px-2 border-b-2 border-gray-200 transition-colors hover:bg-white group"
                  >
                    <span className="font-bebas font-black text-xl text-arlo-dark uppercase group-hover:text-arlo-blue transition-colors tracking-tight">
                      {item.name}
                    </span>
                    <span className="font-dm font-bold text-arlo-blue text-lg">
                      Rs {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-arlo-blue py-6 px-4 text-center"
        >
          <h3 className="font-bebas text-white text-3xl md:text-4xl font-black uppercase tracking-tight">
            ADD RS 350 TO ANY BURGER TO MAKE IT A MEAL
          </h3>
          <div className="text-3xl mt-2">🍟 + 🥤</div>
        </motion.div>

        <div className="mt-20 text-center">
          <a href="https://wa.me/923214033939" target="_blank" rel="noreferrer" className="inline-block bg-arlo-blue text-white font-bebas font-black uppercase text-2xl px-10 py-4 hover:bg-arlo-dark transition-colors tracking-wider">
            WANT TO ORDER? CALL OR WHATSAPP US &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative bg-arlo-dark overflow-hidden flex flex-col md:flex-row">
      <div className="absolute top-0 w-full h-3 bg-checkerboard opacity-80 z-20" />
      <div className="absolute bottom-0 w-full h-3 bg-checkerboard opacity-80 z-20" />

      {/* Left Panel */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative min-h-[500px]"
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-bebas font-black text-[14rem] md:text-[20rem] text-white opacity-[0.04] pointer-events-none select-none -translate-y-1/2 absolute left-0 top-1/2 uppercase">
            ARLO
          </span>
        </div>
        
        <div className="relative z-10">
          <h2 className="font-bebas text-white text-[5rem] md:text-[6rem] font-black leading-[0.85] tracking-tight uppercase mb-8">
            <span className="block">WE</span>
            <span className="block">DON'T DO</span>
            <span className="block text-arlo-light-blue">ORDINARY.</span>
          </h2>
          <div className="w-[60px] h-[2px] bg-arlo-light-blue mb-8" />
          <p className="font-syne text-arlo-light-blue text-xl max-w-sm">
            Just seriously good burgers, made fresh, served fast.
          </p>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 bg-[#1A2E6E] p-12 md:p-24 flex flex-col justify-center"
      >
        <span className="font-syne text-[#7BA7FF] uppercase tracking-[0.2em] text-sm font-bold mb-4">
          OUR STORY
        </span>
        <h3 className="font-bebas text-white text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Born in Lahore. Built for burger lovers.
        </h3>
        <p className="font-dm text-[#A8BFFF] text-lg leading-[1.8] mb-6">
          Arlo is a premium burger spot in Lake City Lahore that set out to bring the perfect smash burger to the city. We believe in fresh beef, bold flavors, and absolutely no compromises.
        </p>
        <p className="font-dm text-[#A8BFFF] text-lg leading-[1.8] mb-12">
          This is the kind of place where regulars know the menu by heart. It's not fast food—it's elevated comfort food.
        </p>
        
        <div className="flex flex-wrap gap-4">
          {["🥩 Fresh beef daily", "🍗 Halal certified", "⚡ Open till 2AM"].map(badge => (
            <div key={badge} className="bg-arlo-dark text-white border border-arlo-blue font-dm px-4 py-2 rounded-full text-sm font-medium">
              {badge}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SocialProof() {
  const reviews = [
    {
      name: "Zara M.",
      quote: "The Beefsmith is genuinely the best burger I've had in Lahore. Came back three times this month. The loaded fries seal the deal."
    },
    {
      name: "Hassan K.",
      quote: "Lake City finally has a proper burger spot. Chicken Hot Lava is insane — spicy, juicy, messy in the best way. Open till 2AM is a blessing."
    },
    {
      name: "Maryam T.",
      quote: "Came for the shakes, stayed for the wings. Buffalo wings are perfectly crispy. Arlo is now our go-to Friday night spot."
    }
  ];

  return (
    <section id="reviews" className="relative bg-white dot-grid py-24 text-arlo-dark">
      <div className="absolute top-0 w-full h-3 bg-checkerboard opacity-80 z-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas font-black text-[4rem] md:text-[5rem] tracking-tight leading-[0.85] uppercase mb-4">WHAT THE PEOPLE SAY</h2>
          <p className="font-syne text-arlo-blue font-semibold italic text-xl flex items-center justify-center gap-4">
            <span className="hidden md:block h-[2px] w-16 bg-arlo-light-blue"></span>
            Lahore's most loyal burger fans.
            <span className="hidden md:block h-[2px] w-16 bg-arlo-light-blue"></span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className="flex-1 min-w-[300px] snap-center bg-white border-t-2 border-arlo-blue shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 transition-all hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(26,58,143,0.15)] hover:border-arlo-light-blue flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-arlo-blue text-xl">★</span>
                ))}
              </div>
              <p className="font-dm text-[#333] italic text-lg leading-relaxed flex-grow mb-6">
                "{r.quote}"
              </p>
              <div>
                <div className="font-syne font-bold text-arlo-blue text-lg">{r.name}</div>
                <div className="text-gray-400 text-sm font-dm mt-1">+ Google Review</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white text-arlo-dark border border-arlo-blue rounded-full px-6 py-3 font-syne font-medium shadow-sm">
            ⭐ Highly Rated on Google &middot; Lake City, Lahore
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-arlo-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[10px] h-[10px] bg-arlo-blue rounded-full mb-4"
          />
          <h2 className="font-bebas font-black text-[4rem] md:text-[5rem] text-arlo-dark leading-[0.85] tracking-tight uppercase">FIND US</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white border-l-[6px] border-arlo-blue shadow-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="font-bebas font-black text-arlo-blue text-4xl mb-2 tracking-tight uppercase">ARLO — LAKE CITY</h3>
          <p className="font-dm text-[#555] text-lg mb-8 flex items-start gap-2">
            <MapPin className="w-5 h-5 text-arlo-blue flex-shrink-0 mt-1" />
            C-3-2, Business Bay, Block M1, Lake City, Lahore, 54000, Pakistan
          </p>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6 mb-8">
            <h4 className="font-syne text-arlo-dark uppercase tracking-[0.15em] text-sm font-bold mb-4 border-b border-gray-200 pb-2">
              OPENING HOURS
            </h4>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center font-dm text-lg mb-4 gap-2">
              <span className="font-medium">Monday &ndash; Sunday</span>
              <span className="text-[#C8972A] font-bold">12:00 PM &ndash; 2:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-dm font-medium text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Open Today
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://maps.google.com/?q=C-3-2+Business+Bay+Block+M1+Lake+City+Lahore" 
              target="_blank" rel="noreferrer"
              className="flex-1 border-2 border-arlo-blue text-arlo-blue font-bebas font-black uppercase tracking-wider text-xl py-3 px-6 text-center hover:bg-[#EEF2FF] transition-colors"
            >
              📍 GET DIRECTIONS
            </a>
            <a 
              href="tel:+923214033939"
              className="flex-1 bg-arlo-blue text-white font-bebas font-black uppercase tracking-wider text-xl py-3 px-6 text-center hover:bg-arlo-dark transition-colors flex justify-center items-center gap-2"
            >
              <Phone className="w-5 h-5" /> CALL NOW
            </a>
          </div>

          <div className="text-center">
            <a 
              href="https://wa.me/923214033939" 
              target="_blank" rel="noreferrer"
              className="font-dm text-arlo-blue hover:underline font-medium inline-flex items-center gap-2"
            >
              💬 Order or ask on WhatsApp: +92 321 4033939
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full bg-arlo-blue py-3 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="animate-marquee font-bebas font-bold text-white text-sm uppercase tracking-[0.2em] inline-block px-4">
          OPEN 7 DAYS &middot; 12 PM TO 2 AM &middot; LAKE CITY LAHORE &middot; CALL +92 321 4033939 &middot; DINE IN &amp; TAKEAWAY &middot; OPEN 7 DAYS &middot; 12 PM TO 2 AM &middot; LAKE CITY LAHORE &middot; CALL +92 321 4033939 &middot; DINE IN &amp; TAKEAWAY &middot; 
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const headline = "CALL OR WHATSAPP US. WE'LL HANDLE THE REST.".split(" ");

  return (
    <section className="bg-arlo-blue relative py-24 sm:py-32 overflow-hidden flex flex-col justify-center min-h-[60vh]">
      <div className="absolute top-0 w-full h-3 bg-checkerboard opacity-[0.15] z-10 filter invert brightness-200" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <span className="font-syne text-white uppercase tracking-[0.2em] text-sm font-bold mb-6">
          READY TO ORDER?
        </span>
        
        <h2 className="font-bebas font-black text-white text-[3.5rem] md:text-[5.5rem] leading-[0.85] tracking-tight uppercase mb-8 max-w-4xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2">
          {headline.map((word, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <p className="font-dm text-[#C8D8FF] text-xl mb-12 max-w-2xl mx-auto">
          Open every day, 12 PM to 2 AM. Dine in or takeaway.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-xl mx-auto mb-10">
          <a 
            href="tel:+923214033939"
            className="flex-1 bg-white text-arlo-blue font-bebas font-black uppercase text-2xl tracking-wider py-5 px-8 flex justify-center items-center gap-3 hover:bg-arlo-cream hover:shadow-lg transition-all"
          >
            <Phone className="w-6 h-6" /> CALL: +92 321 4033939
          </a>
          <a 
            href="https://wa.me/923214033939"
            target="_blank" rel="noreferrer"
            className="flex-1 bg-[#25D366] text-white font-bebas font-black uppercase text-2xl tracking-wider py-5 px-8 flex justify-center items-center gap-3 hover:bg-[#20BE5A] transition-colors"
          >
            <MessageCircle className="w-6 h-6" /> WHATSAPP ORDER
          </a>
        </div>

        <p className="font-dm text-[#C8D8FF] text-sm flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" /> C-3-2, Business Bay, Block M1, Lake City, Lahore
        </p>
      </div>

      <div className="absolute bottom-0 w-full h-3 bg-checkerboard opacity-[0.15] z-10 filter invert brightness-200" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-arlo-dark pt-20 relative">
      <div className="absolute top-0 w-full h-3 bg-checkerboard opacity-80 z-10" />

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          {/* Brand Col */}
          <div className="md:col-span-2">
            <h2 className="font-bebas font-black uppercase text-white text-[4rem] leading-none mb-2 tracking-tight">ARLO</h2>
            <p className="font-dm text-[#7BA7FF] text-lg mb-6">Smashed. Stacked. Legendary.</p>
            
            <div className="flex flex-col gap-3 font-dm">
              <p className="text-[#7BA7FF] text-sm">C-3-2, Business Bay, Block M1, Lake City, Lahore</p>
              <a href="tel:+923214033939" className="text-white hover:text-arlo-light-blue transition-colors flex items-center gap-2 w-fit">
                <Phone className="w-4 h-4" /> +92 321 4033939
              </a>
              <p className="text-[#7BA7FF] text-sm">Open Daily: 12 PM &ndash; 2 AM</p>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="font-syne text-white uppercase text-sm font-bold tracking-widest mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 font-dm font-medium">
              {['Menu', 'Story', 'Location'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#7BA7FF] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions Col */}
          <div>
            <h3 className="font-syne text-white uppercase text-sm font-bold tracking-widest mb-6">Order Now</h3>
            <div className="flex flex-col gap-4 mb-8">
              <a href="tel:+923214033939" className="border-2 border-white text-white font-bebas font-black uppercase tracking-wider text-xl py-2 px-4 text-center hover:bg-white hover:text-arlo-dark transition-colors">
                📞 CALL US
              </a>
              <a href="https://wa.me/923214033939" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bebas font-black uppercase tracking-wider text-xl py-2 px-4 text-center hover:bg-[#20BE5A] transition-colors">
                💬 WHATSAPP
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-arlo-blue py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-dm text-white text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Arlo Burgers. All rights reserved.</p>
          <p>Lake City, Lahore 🇵🇰</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-arlo-dark overflow-x-hidden selection:bg-arlo-light-blue selection:text-white">
      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <SocialProof />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
}

