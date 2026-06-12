"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function PlutoPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [ethAmount, setEthAmount] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // NEW: State for interactive features
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // NEW: Scroll progress tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // NEW: Mouse tracking effect for custom cursor
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // NEW: Toast notification trigger
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Animation presets for easy reuse
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const float = {
    y: ["-8px", "8px"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const floatSlow = {
    y: ["-15px", "15px"],
    rotate: [-2, 2],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const scrollToTerminal = () => {
    document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
    showToast("Navigating to Pluto Terminal... 🪐");
  };

  // FAQ Data
  const faqs = [
    { question: "What is Pluto Token?", answer: "Pluto Token is a community-driven celestial cryptocurrency designed to bring innovation and exploration to the digital asset space." },
    { question: "Is the Liquidity Locked?", answer: "Yes! To ensure the safety of our explorers, all initial liquidity has been securely burnt and locked away in the deepest part of the cosmos." },
    { question: "How do I track my cosmic rewards?", answer: "You can track your holdings directly through your connected decentralized wallet (like MetaMask or Trust Wallet) or by viewing the token contract on the block explorer." }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden cursor-default relative">

      {/* NEW: Scroll Progress Bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[4px] bg-[#FA9231] z-[100] shadow-[0_0_10px_#FA9231]"
      />

      {/* NEW: Custom Cursor Glow (Desktop Only) */}
      <div className="hidden lg:block">
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 rounded-full bg-[#FA9231]/30 blur-md pointer-events-none z-[100] flex items-center justify-center"
          animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
          transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
        >
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#fff]" />
        </motion.div>
      </div>

      {/* NEW: Toast Notification System */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#11173E] border-2 border-[#FA9231] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(250,146,49,0.4)] flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#FA9231] animate-pulse" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-[66px] bg-[#11173E] flex items-center justify-between px-4 md:px-10 sticky top-0 z-50 shadow-md relative"
      >
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <span style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#FA9231", fontSize: "28px", lineHeight: 1, marginTop: "4px" }}>
            PLUTO
          </span>
          <img src="/Image211.png" alt="Pluto logo" className="w-8 h-8" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold text-sm">
          <a href="#about" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">About Us</a>
          <a href="#roadmap" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">Roadmap</a>
          <a href="#tokenomics" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">Tokenomics</a>
          <a href="#howtobuy" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">How to Buy</a>
          <a href="#story" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">Our Story</a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTerminal}
            className="bg-[#FA9231] text-black px-5 py-2 rounded-lg font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Connect Wallet
          </motion.button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <svg
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer active:scale-90 transition-transform"
            width="33" height="22" viewBox="0 0 34 23" fill="none"
          >
            <path d="M0 22.0811V18.4009H33.1216V22.0811H0ZM0 12.8806V9.20045H33.1216V12.8806H0ZM0 3.68018V0H33.1216V3.68018H0Z" fill="white"/>
          </svg>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-[66px] left-0 w-full bg-[#11173E] border-b-4 border-black flex flex-col items-center py-6 gap-6 md:hidden z-40 shadow-2xl overflow-hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#FA9231] transition-colors">About Us</a>
            <a href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#FA9231] transition-colors">Roadmap</a>
            <a href="#tokenomics" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#FA9231] transition-colors">Tokenomics</a>
            <a href="#howtobuy" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#FA9231] transition-colors">How to Buy</a>
            <a href="#story" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold hover:text-[#FA9231] transition-colors">Our Story</a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTerminal();
              }}
              className="mt-2 bg-[#FA9231] text-black px-10 py-3 rounded-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
            >
              Connect Wallet
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#11173E]" style={{ minHeight: "420px" }}>
        <img src="/BgImage.png" alt="space background" className="absolute inset-0 w-full h-full object-cover" />

        {/* Desktop hero */}
        <div className="hidden lg:block relative z-10 px-16 py-12" style={{ minHeight: "500px" }}>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute z-[50] drop-shadow-2xl select-none tracking-wide"
            style={{
              fontFamily: "'Gloomie Saturday', cursive",
              color: "#FA9231",
              fontSize: "80px",
              lineHeight: 0.1,
              top: "40px",
              left: "25%"
            }}
          >
            PLUTO
          </motion.p>

          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/LapMockup.png" alt="laptop" className="absolute top-10 left-[24%] w-[48%] z-20 hover:scale-[1.02] transition-transform duration-500"
          />

          <motion.img
            animate={float}
            src="/PhoneMockup.png" alt="phone" className="absolute top-10 right-[16%] w-[10%] z-30 cursor-pointer hover:scale-110 transition-transform duration-300"
          />

          <motion.img
            animate={floatSlow}
            src="/Image3.png" alt="bear" className="absolute bottom-6 left-[15%] w-[15%] z-40 hover:rotate-12 transition-transform duration-300"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 right-12 flex gap-4 items-center z-[60]"
          >
            <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 bg-[#2431DF] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[0_0_15px_#2431DF]">
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" className="relative z-10">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.53686 1.31776C6.14856 2.04095 5.01275 2.65292 5.01299 2.67781C5.01361 2.74205 8.34494 4.42916 8.46318 4.42505C8.51697 4.42325 8.90715 4.24364 9.3302 4.02597L10.0995 3.63028L10.9397 4.06215L11.7799 4.4941L13.1558 3.87585C15.229 2.94424 15.4443 2.84215 15.4105 2.80785C15.3658 2.76234 14.6221 2.36286 12.6047 1.30072C11.6296 0.787375 10.6833 0.284058 10.5016 0.182211C10.32 0.0803653 10.1465 -0.00156325 10.1162 2.2641e-05C10.0859 0.00160853 8.92518 0.594596 7.53686 1.31776ZM1.44781 4.47088L0.00260731 5.21738V8.4936C0.00260731 10.2955 0.0215842 11.7698 0.0448618 11.7698C0.0680587 11.7698 0.779101 11.4616 1.62492 11.0849L3.16277 10.3999V6.94656L3.91426 7.35599C4.49336 7.6712 5.0728 7.98577 5.65259 8.2997L6.63938 8.83398L7.07849 8.63542C7.35387 8.51069 7.62871 8.38475 7.90299 8.2576C8.11493 8.1589 8.63521 7.92457 9.05912 7.73676C9.48304 7.54887 9.87545 7.35994 9.93109 7.31688C10.005 7.25968 9.10369 6.7616 6.59737 5.47456C4.70815 4.5044 3.10181 3.71371 3.02773 3.7175C2.95365 3.72129 2.24269 4.06027 1.44781 4.47088ZM15.671 4.68051C14.6867 5.12486 13.8807 5.50617 13.8798 5.52791C13.879 5.54963 14.4154 5.86861 15.072 6.23665C15.7286 6.60476 16.2658 6.92562 16.2658 6.94978C16.2658 6.97389 15.6848 7.2554 14.9748 7.57548C14.2647 7.89548 12.4698 8.70606 10.9861 9.37678L6.0146 11.624C4.76403 12.1893 3.63679 12.6988 3.50962 12.7564C0.955268 13.9128 0.253177 14.2336 0.156761 14.2887C0.0598067 14.3442 0.0378463 14.6663 0.0205896 16.2832L0 18.2116L1.29236 18.8701L2.5847 19.5286L4.37673 18.7198C5.36237 18.2751 6.16875 17.8878 6.16875 17.8593C6.16875 17.8309 5.98662 17.7122 5.76411 17.5955C5.54149 17.4788 5.08196 17.2204 4.74282 17.0212C4.40371 16.822 4.06557 16.6393 3.99133 16.615C3.91711 16.5909 3.85747 16.5486 3.85868 16.521C3.85991 16.4935 4.64904 16.1187 5.61219 15.688C7.48291 14.8516 8.91454 14.2069 11.988 12.817C13.3624 12.1956 14.7369 11.5746 16.1116 10.954C17.3198 10.4087 18.7245 9.77178 19.2333 9.53868L20.1582 9.11487L20.1787 7.16447L20.1994 5.21415L18.8886 4.54136C18.1677 4.17136 17.5514 3.86953 17.5191 3.87064C17.4869 3.87166 16.6552 4.23606 15.671 4.68051ZM19.807 11.7168C19.6138 11.8111 19.2323 11.9878 18.9592 12.1093C18.686 12.2308 18.1677 12.4647 17.8073 12.6291L17.1522 12.928L17.1372 14.6402C17.129 15.582 17.0943 16.3483 17.0602 16.3433C16.9826 16.3318 15.7547 15.7021 14.5204 15.0407C13.6295 14.5634 13.5736 14.5444 13.3642 14.6481C13.2432 14.708 12.5199 15.0324 11.7568 15.3691C10.9937 15.7057 10.3446 16.0031 10.314 16.03C10.2836 16.0569 11.8193 16.8893 13.7269 17.8799L17.1951 19.6809L18.6767 18.9144C19.4915 18.493 20.1843 18.1085 20.2162 18.0602C20.288 17.9514 20.2819 11.5303 20.21 11.539C20.1815 11.5424 20.0002 11.6225 19.807 11.7168ZM11.6027 19.2536C11.3457 19.364 11.0888 19.4747 10.8319 19.5855C10.0563 19.921 10.2083 19.9322 9.2855 19.4728C8.6709 19.1669 8.40598 19.0725 8.29099 19.1183C8.20473 19.1526 7.4624 19.4866 6.64124 19.8604C5.82012 20.2342 5.11981 20.5401 5.08497 20.5401C4.74046 20.5401 5.31321 20.8823 7.52331 21.9971L10.1152 23.3045L11.2058 22.7661C11.8056 22.4699 13.0154 21.877 13.8943 21.4483C14.7731 21.0196 15.4813 20.6577 15.4681 20.6441C15.4547 20.6305 14.7183 20.2523 13.8316 19.8038L12.2193 18.9883L11.6027 19.2536Z" fill="white"/>
              </svg>
            </motion.a>

            <motion.a href="https://discord.com" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 bg-[#2431DF] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[0_0_15px_#2431DF]">
              <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
                <path d="M23.2871 0.242457L0.83297 8.94605C-0.0706245 9.35137 -0.376245 10.163 0.614571 10.6035L6.37502 12.4437L20.3031 3.79134C21.0636 3.24817 21.8421 3.39301 21.1722 3.99054L9.20985 14.8776L8.83409 19.4849C9.18213 20.1963 9.81941 20.1996 10.2259 19.8461L13.5355 16.6983L19.2036 20.9647C20.5201 21.7481 21.2364 21.2425 21.5197 19.8067L25.2374 2.11147C25.6235 0.344033 24.9652 -0.434719 23.2871 0.242457Z" fill="white"/>
              </svg>
            </motion.a>

            <motion.a href="https://t.me" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 bg-[#2431DF] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[0_0_15px_#2431DF]">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                <path d="M18.6672 0H22.302L14.3615 9.03671L23.7028 21.3326H16.3881L10.6604 13.8745L4.10533 21.3326H0.466946L8.96086 11.6677L0 0H7.49958L12.6786 6.81694L18.6672 0ZM17.392 19.1661H19.4067L6.40451 2.05267H4.24281L17.392 19.1661Z" fill="white"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile/Tablet hero */}
        <div className="lg:hidden relative z-10 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-4 border-black bg-white overflow-hidden relative" style={{ height: "360px" }}
          >
            <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="space" className="absolute inset-0 w-full h-full object-cover" />
            <p style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#FA9231", fontSize: "80px", lineHeight: 1, position: "absolute", left: "16px", top: "24px", zIndex: 10 }}>PLUTO</p>
            <p className="absolute text-[#11173E] font-bold text-sm text-center z-10" style={{ left: "32px", top: "120px", width: "55%" }}>
              Your gateway to a cosmic crypto adventure, where innovation meets the stars.
            </p>
            <motion.img animate={float} src="/Image3.png" alt="bear" className="absolute bottom-0 left-8 w-[40%] z-10" />
          </motion.div>
        </div>
      </section>

      {/* INFINITE MARQUEE BANNER */}
      <div className="w-full bg-[#FA9231] border-y-4 border-black overflow-hidden py-3 relative z-20 hover:bg-[#ff9e42] transition-colors">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex whitespace-nowrap cursor-pointer"
          onClick={() => showToast("Exploring the cosmos... 🚀")}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-black font-bold text-xl mx-8 tracking-widest uppercase flex items-center gap-8">
              🚀 To the Moon <span className="w-3 h-3 bg-black rounded-full"></span>
              🪐 Explore the Cosmos <span className="w-3 h-3 bg-black rounded-full"></span>
              ⭐ Join the Community <span className="w-3 h-3 bg-black rounded-full"></span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* MAIN CONTENT SECTIONS */}
      <div className="relative">
        <img
          src="/BgImage.png"
          alt="space background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">

          {/* ================ ROW 1 ================ */}
          <div className="relative w-full mb-6 z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* About Us */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(250, 146, 49, 0.3)" }}
                id="about" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg transition-all duration-300 relative z-10 overflow-hidden group"
              >
                <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <h2 className="text-[42px] font-bold mb-6 text-[#11173E] group-hover:text-[#FA9231] transition-colors">About Us</h2>
                  <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                    Pluto Token is a celestial cryptocurrency inspired by the mysterious dwarf planet, Pluto. Just as Pluto holds a unique place in our solar system, this token represents innovation, exploration, and discovery in the world of digital assets. With a focus on community-driven growth and transparency, Pluto Token aims to bring a sense of wonder and excitement to the crypto space. Whether you&apos;re a seasoned investor or a newcomer, Pluto Token is here to offer an out-of-this-world experience. Join us on this cosmic journey as we venture beyond the stars!
                  </p>
                </div>
              </motion.div>

              {/* Roadmap */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(250, 146, 49, 0.3)" }}
                id="roadmap" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg transition-all duration-300 relative z-10 overflow-hidden group"
              >
                <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <h2 className="text-[42px] font-bold mb-6 text-[#11173E] group-hover:text-[#FA9231] transition-colors">Roadmap</h2>
                  <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                    officially launch Pluto Token and establish a vibrant, engaged community through social media, partnerships, and educational content. Develop and integrate Pluto Token into key platforms, enabling real-world use cases. Focus on expanding Pluto Token&apos;s ecosystem, introducing new features, and exploring innovative ways.
                  </p>
                </div>
              </motion.div>

              {/* Right Top Image - ANIMATED PLANET */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                onClick={() => showToast("Observing distant galaxies... 🔭")}
                className="border-4 border-black bg-[#11173E] rounded-xl overflow-hidden shadow-lg hidden md:block relative z-10 md:col-span-2 lg:col-span-1 cursor-pointer" style={{ minHeight: "380px" }}
              >
                <img src="/Image161.png" alt="space background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
                <motion.img
                  animate={floatSlow}
                  src="/PlanetGif.png"
                  alt="animated planet"
                  className="absolute z-10 w-[60%] top-[8%] left-[8%]"
                />
              </motion.div>
            </div>

            {/* Floating Bear 1 */}
            <motion.img
              animate={float}
              whileHover={{ scale: 1.2, rotate: 10 }}
              src="/Image8.png"
              alt="pointing bear"
              className="hidden md:block absolute -bottom-6 md:left-[50%] lg:left-[33.33%] -translate-x-1/2 w-32 xl:w-36 z-30 drop-shadow-xl"
            />

            {/* Floating Bear 2 */}
            <motion.img
              animate={floatSlow}
              whileHover={{ scale: 1.2, rotate: -10 }}
              src="/Image2.png"
              alt="arms up bear"
              className="hidden lg:block absolute -bottom-6 left-[66.66%] -translate-x-1/2 w-24 xl:w-28 z-30 drop-shadow-xl"
            />
          </div>

          {/* ================ ROW 2 ================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

            {/* Tokenomics */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(250, 146, 49, 0.5)" }}
              id="tokenomics" className="border-4 border-black bg-[#8bb5f8] p-8 rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 group"
            >
              <img src="/Image41.png" alt="space bubbles" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10">
                <h2 className="text-[42px] font-bold mb-6 text-[#11173E] group-hover:text-white transition-colors">Tokenomics</h2>
                <p className="text-[#11173E] text-2xl font-semibold leading-tight group-hover:text-white transition-colors">
                  Total Supply - 6 M<br />
                  Burnt Liquidity<br />
                  Buy/Sell Tax - 0%
                </p>
              </div>
            </motion.div>

            {/* Central PLUTO Section */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className="border-4 border-black bg-[#0f172a] p-8 rounded-xl shadow-[0_0_20px_rgba(250,146,49,0.3)] relative overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer" style={{ minHeight: "380px" }}
              onClick={() => showToast("Welcome to the Cosmic Gateway! 🌠")}
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="space" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10">
                <p style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#FA9231", fontSize: "88px", lineHeight: 1 }} className="group-hover:animate-pulse">PLUTO</p>
                <p className="text-white font-medium mt-3 max-w-xs">Your gateway to a cosmic crypto adventure, where innovation meets the stars.</p>
                <motion.img animate={float} src="/Image3.png" alt="bear" className="mt-6 w-40 mx-auto group-hover:rotate-[360deg] transition-transform duration-1000" />
              </div>
            </motion.div>

            {/* How to Buy */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(250, 146, 49, 0.3)" }}
              id="howtobuy" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 md:col-span-2 lg:col-span-1 group"
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <h2 className="text-[42px] font-bold mb-6 text-[#11173E] group-hover:text-[#FA9231] transition-colors">How to Buy</h2>
                <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                  Prepare Your Rocket Fuel- Set up a digital wallet to fuel your journey to Pluto.<br/><br/>
                  Blast Off to the Exchange - Visit a trusted decentralized exchange (DEX)<br/><br/>
                  Land on Pluto - Once your wallet is connected, swap your ETH or BNB for Pluto Token and watch your assets launch into the cosmos!
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================ ROW 3 ================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Join Now */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(250, 146, 49, 0.3)" }}
              onClick={() => showToast("Joining the community channels... 🛸")}
              className="border-4 border-black bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-between text-center group transition-all duration-300 cursor-pointer relative overflow-hidden" style={{ minHeight: "380px" }}
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10 w-full flex flex-col items-center h-full">
                <p className="text-[#11173E] text-[15px] leading-relaxed font-semibold mt-2">
                  Embark on an interstellar journey with us! Join the Pluto Token community today and be part of a vibrant group of explorers, innovators, and dreamers.
                </p>

                <div className="flex items-center justify-center gap-3 my-6 w-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: -15 }} className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:bg-[#FA9231] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </motion.div>

                  <p style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#000", fontSize: "44px", lineHeight: 1 }} className="mt-2 tracking-wide group-hover:text-[#11173E] transition-colors">JOIN NOW</p>

                  <motion.div whileHover={{ scale: 1.1, rotate: 15 }} className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:bg-[#FA9231] transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </motion.div>
                </div>

                <img src="/Image5.png" alt="bear" className="w-36 mt-auto group-hover:-translate-y-2 transition-transform" />
              </div>
            </motion.div>

            {/* Our Story */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(250, 146, 49, 0.3)" }}
              id="story" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 group"
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <h2 style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-[54px] font-normal mb-4 text-[#11173E] tracking-wide group-hover:text-[#FA9231] transition-colors">Our Story</h2>
                <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                  In the vast expanse of the digital universe, Pluto Token was born—a small but powerful entity destined to make a big impact. Much like Pluto, which was once seen as a distant and enigmatic world at solar system, Pluto Token represents the spirit of exploration and discovery in the crypto space. With a mission to bring innovation and inclusivity to the world of digital assets.
                </p>
              </div>
            </motion.div>

            {/* Buy Now */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(250,146,49,0.5)" }}
              onClick={scrollToTerminal}
              className="border-4 border-black bg-[#0f172a] rounded-xl shadow-lg relative overflow-hidden cursor-pointer group md:col-span-2 lg:col-span-1 transition-shadow duration-300" style={{ minHeight: "380px" }}
            >
              <img src="/Image41(1).png" alt="bg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" />

              <div className="relative z-10 w-full h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-12 left-6 sm:left-10 w-44"
                >
                  <img src="/Image12.png" alt="buy now bg" className="w-full drop-shadow-xl" />
                  <p style={{
                    fontFamily: "'Gloomie Saturday', cursive",
                    color: "#000",
                    fontSize: "38px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    lineHeight: 0.9,
                    textAlign: "center",
                    marginTop: "4px"
                  }}>
                    BUY<br/>NOW
                  </p>
                </motion.div>

                <motion.img animate={floatSlow} src="/Image7.png" alt="bear" className="absolute bottom-4 right-4 sm:right-8 w-40 drop-shadow-2xl group-hover:rotate-[15deg] transition-transform duration-500" />
              </div>
            </motion.div>
          </div>

          {/* ================ MASSIVE EXTENSION 1: CORE FEATURES ================ */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full mt-16">
            <h2 style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-[#FA9231] text-5xl text-center mb-8 tracking-wide drop-shadow-[0_0_15px_rgba(250,146,49,0.5)]">Why Choose Pluto?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Deflationary", desc: "A portion of every transaction is burnt, making Pluto rarer by the second.", icon: "🔥" },
                { title: "Secure", desc: "Liquidity is locked and contracts are audited to ensure a safe journey.", icon: "🛡️" },
                { title: "Community First", desc: "No venture capital. Owned and guided entirely by the Pluto fleet.", icon: "🤝" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => showToast(`Learn more about our ${feature.title} protocol... 🔍`)}
                  className="border-4 border-black bg-[#E6EDF5] p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(250,146,49,1)] text-center cursor-pointer transition-all duration-300"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-[#11173E] mb-2">{feature.title}</h3>
                  <p className="text-[#11173E] font-semibold text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================ MASSIVE EXTENSION 2: PLUTO TERMINAL (SWAP UI) ================ */}
          <motion.div id="terminal" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full max-w-2xl mx-auto mt-20 relative hover:z-20">
            <h2 style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-white text-5xl text-center mb-6 tracking-wide drop-shadow-lg">Pluto Terminal</h2>
            <div className="bg-[#11173E] border-4 border-black rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(250,146,49,1)] transition-shadow duration-300 hover:shadow-[12px_12px_0px_0px_rgba(250,146,49,1)] relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-white font-bold">Swap</span>
                <span onClick={() => showToast("Opening Swap Settings... ⚙️")} className="text-white/50 text-sm hover:text-[#FA9231] cursor-pointer transition-colors">⚙️ Settings</span>
              </div>

              <div className="bg-[#0b0f24] border-2 border-black rounded-xl p-4 mb-2 hover:border-[#FA9231] transition-colors focus-within:border-[#FA9231]">
                <p className="text-white/50 text-xs font-bold mb-2">You Pay</p>
                <div className="flex justify-between items-center">
                  <input
                    type="number"
                    value={ethAmount}
                    onChange={(e) => setEthAmount(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent text-3xl text-white font-bold w-full focus:outline-none"
                  />
                  <div onClick={() => showToast("Selecting payment token... 🪙")} className="flex items-center gap-2 bg-[#1A2352] px-3 py-1.5 rounded-lg border border-black cursor-pointer hover:bg-[#2a346e] transition-colors">
                    <span className="text-xl">🔷</span>
                    <span className="text-white font-bold">ETH</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center -my-3 relative z-10">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  onClick={() => showToast("Inverting trade pairs... 🔄")}
                  className="bg-[#E6EDF5] border-2 border-black rounded-full p-2 cursor-pointer shadow-sm text-center hover:bg-[#FA9231] transition-colors"
                >
                  ⬇️
                </motion.div>
              </div>

              <div className="bg-[#0b0f24] border-2 border-black rounded-xl p-4 mt-2 mb-6 hover:border-[#FA9231] transition-colors">
                <p className="text-white/50 text-xs font-bold mb-2">You Receive</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl text-white/50 font-bold">{ethAmount ? (parseFloat(ethAmount) * 1420500).toLocaleString() : "0.0"}</span>
                  <div className="flex items-center gap-2 bg-[#FA9231] px-3 py-1.5 rounded-lg border border-black cursor-pointer shadow-sm hover:bg-[#ff9e42] transition-colors">
                    <img src="/Image211.png" alt="pluto" className="w-5 h-5" />
                    <span className="text-black font-bold">PLUTO</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => showToast(ethAmount ? "Initiating PLUTO Swap! 🚀" : "Please connect your wallet first! 🦊")}
                className="w-full py-4 bg-[#FA9231] text-black border-4 border-black rounded-xl font-bold text-xl uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0_0_15px_rgba(250,146,49,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {ethAmount ? "SWAP NOW" : "Connect Wallet"}
              </motion.button>
            </div>
          </motion.div>

          {/* ================ MASSIVE EXTENSION 3: MEET THE CREW ================ */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full mt-24">
            <h2 style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-[#FA9231] text-5xl text-center mb-8 tracking-wide drop-shadow-lg">Meet The Cosmic Crew</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Captain Paws", role: "Mission Commander", img: "/Image7.png" },
                { name: "Astro Bear", role: "Lead Developer", img: "/Image8.png" },
                { name: "Cub Explorer", role: "Community Manager", img: "/Image2.png" }
              ].map((crew, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  onClick={() => showToast(`Viewing ${crew.name}'s cosmic profile... 👨‍🚀`)}
                  className="bg-white border-4 border-black rounded-xl p-6 text-center flex flex-col items-center shadow-[8px_8px_0px_0px_rgba(250,146,49,1)] hover:shadow-[12px_12px_0px_0px_rgba(250,146,49,1)] relative overflow-hidden cursor-pointer transition-all duration-300 group"
                >
                  <div className="w-32 h-32 bg-[#E6EDF5] border-4 border-black rounded-full mb-4 flex items-center justify-center overflow-hidden group-hover:border-[#FA9231] transition-colors">
                    <img src={crew.img} alt={crew.name} className="w-24 h-24 object-contain mt-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#11173E] group-hover:text-[#FA9231] transition-colors">{crew.name}</h3>
                  <p className="text-[#FA9231] font-bold uppercase tracking-wider text-sm mt-1">{crew.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================ MASSIVE EXTENSION 4: COMMUNITY TRANSMISSIONS ================ */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full mt-24">
            <h2 style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-white text-5xl text-center mb-8 tracking-wide drop-shadow-lg">Community Transmissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { handle: "@SpaceWhale", text: "Just joined the $PLUTO mission. The tokenomics are literally out of this world! 🚀🪐" },
                { handle: "@CryptoBear99", text: "Safest journey I've ever taken in DeFi. Liquidity locked and the community is amazing. #PlutoToken" },
                { handle: "@LunarLambo", text: "Ditching Earth, moving to Pluto. The development team is cooking up something massive here. 👀" }
              ].map((tweet, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: idx === 1 ? -2 : 2 }}
                  onClick={() => showToast(`Retweeting transmission from ${tweet.handle}... 📡`)}
                  className="bg-white border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(250,146,49,1)] flex flex-col justify-between cursor-pointer transition-all duration-300"
                >
                  <p className="text-[#11173E] font-semibold text-lg italic mb-4">"{tweet.text}"</p>
                  <div className="flex items-center gap-3 border-t-2 border-dashed border-gray-300 pt-4 mt-auto">
                    <div className="w-10 h-10 bg-[#FA9231] border-2 border-black rounded-full flex items-center justify-center text-xl hover:rotate-12 transition-transform">🐻</div>
                    <span className="font-bold text-[#11173E] hover:text-[#FA9231] transition-colors">{tweet.handle}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================ MASSIVE EXTENSION 5: COSMIC ALLIANCES ================ */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full mt-20 mb-8 text-center">
             <h2 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-6">Cosmic Alliances & Backers</h2>
             <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {['CoinMarketCap', 'CoinGecko', 'PancakeSwap', 'CertiK Audited', 'TrustWallet'].map((partner, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "#FA9231", color: "#11173E", borderColor: "#000" }}
                    onClick={() => showToast(`Verifying alliance with ${partner}... 🛡️`)}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white font-bold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_15px_#FA9231]"
                  >
                    {partner}
                  </motion.div>
                ))}
             </div>
          </motion.div>

          {/* ================ EXTENSION 6: INTERACTIVE FAQ ================ */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} id="faq" className="w-full max-w-4xl mx-auto mt-20 bg-white border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(250,146,49,1)]">
            <h2 className="text-4xl font-bold text-[#11173E] mb-8 text-center">Cosmic FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-2 border-black rounded-lg overflow-hidden transition-colors duration-300 hover:border-[#FA9231]">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className={`w-full text-left p-4 font-bold text-lg flex justify-between items-center transition-colors ${activeFaq === index ? 'bg-[#FA9231] text-white' : 'bg-gray-50 text-[#11173E] hover:bg-gray-100'}`}
                  >
                    {faq.question}
                    <motion.span animate={{ rotate: activeFaq === index ? 180 : 0 }}>▼</motion.span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-white px-4 py-4 text-[#11173E] font-semibold border-t-2 border-black">
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================ EXTENSION 7: LIVE STATS ================ */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 w-full border-4 border-black bg-[#FA9231] rounded-xl shadow-[8px_8px_0px_0px_rgba(17,23,62,1)] p-8 relative overflow-hidden group cursor-crosshair" onClick={() => showToast("Fetching live block data... 📊")}>
            <div className="absolute inset-0 bg-[url('/Image41.png')] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none mix-blend-overlay"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
              <div className="group-hover:scale-110 transition-transform duration-500">
                <p className="text-black font-bold text-xl uppercase tracking-wider mb-2">Total Holders</p>
                <p style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-[#11173E] text-6xl drop-shadow-md">14,209</p>
              </div>
              <div className="md:border-x-4 border-black px-4 group-hover:scale-110 transition-transform duration-500 delay-75">
                <p className="text-black font-bold text-xl uppercase tracking-wider mb-2">Market Cap</p>
                <p style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-[#11173E] text-6xl drop-shadow-md">$2.4M</p>
              </div>
              <div className="group-hover:scale-110 transition-transform duration-500 delay-150">
                <p className="text-black font-bold text-xl uppercase tracking-wider mb-2">Tokens Burned</p>
                <p style={{ fontFamily: "'Gloomie Saturday', cursive" }} className="text-[#11173E] text-6xl drop-shadow-md">42%</p>
              </div>
            </div>
          </motion.div>

          {/* ================ EXTENSION 8: JOIN THE FLEET (NEWSLETTER) ================ */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 mb-8 border-4 border-black bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-12 relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(250,146,49,0.3)] transition-all duration-300">
            <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-1000" />

            <div className="relative z-10 mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
              <h2 className="text-[42px] font-bold text-[#11173E] mb-2 leading-tight group-hover:text-[#FA9231] transition-colors">Join the Pluto Fleet</h2>
              <p className="text-[#11173E] font-semibold text-lg">Subscribe to get the latest cosmic updates, airdrops, and mission logs straight to your inbox.</p>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex flex-col sm:flex-row gap-4 justify-end">
              <input type="email" placeholder="Enter your email address" className="w-full sm:w-2/3 p-4 border-4 border-black rounded-xl bg-[#E6EDF5] text-[#11173E] font-bold placeholder-[#11173E]/50 focus:outline-none focus:ring-4 focus:ring-[#FA9231] transition-all" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => showToast("Welcome to the Pluto Fleet! 🚀 Check your inbox.")}
                className="w-full sm:w-auto px-8 py-4 bg-[#11173E] text-[#FA9231] border-4 border-black rounded-xl font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(250,146,49,1)] hover:shadow-[0_0_15px_#FA9231] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================ UPGRADED FOOTER ================ */}
      <footer className="bg-[#11173E] w-full pt-16 pb-8 flex flex-col items-center justify-center relative z-20 border-t-4 border-black overflow-hidden group">
        <div className="absolute inset-0 bg-[#FA9231]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
        <motion.div animate={float} className="mb-6 relative z-10 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#FA9231", fontSize: "48px", lineHeight: 1, textShadow: "0px 0px 20px rgba(250,146,49,0.5)" }} className="hover:text-white transition-colors duration-500">
            PLUTO
          </span>
        </motion.div>

        <div className="flex gap-6 mb-8 relative z-10">
          {['Twitter', 'Telegram', 'Discord', 'Reddit'].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              onClick={(e) => { e.preventDefault(); showToast(`Opening ${social}... 📱`); }}
              whileHover={{ y: -3, color: "#FA9231", scale: 1.1 }}
              className="text-white font-bold text-sm tracking-widest uppercase transition-all duration-300"
            >
              {social}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ width: "6rem" }}
          whileHover={{ width: "12rem" }}
          className="h-1 bg-[#FA9231] rounded-full mb-10 transition-all duration-500 cursor-pointer"
        />

        <div className="text-center relative z-10">
          <p className="text-white/80 text-sm tracking-wider font-semibold mb-2" >
            © {new Date().getFullYear()} Pluto Token Project. All Rights Reserved.
          </p>
          <p className="text-[#FA9231] font-bold text-xs tracking-widest uppercase hover:text-white transition-colors cursor-help" onClick={() => showToast("System Architect: Jayashan Nawarathne 👨‍💻")}>
            Developed by Jayashan Nawarathne
          </p>
        </div>
      </footer>
    </div>
  );
}