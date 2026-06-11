"use client";

import { motion } from "framer-motion";

export default function PlutoPage() {
  // Animation presets for easy reuse
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-[66px] bg-[#11173E] flex items-center justify-between px-4 md:px-10 sticky top-0 z-50 shadow-md"
      >
        {/* Name and Logo Group */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <span style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#FA9231", fontSize: "28px", lineHeight: 1, marginTop: "4px" }}>
            PLUTO
          </span>
          <img src="/Image211.png" alt="Pluto logo" className="w-8 h-8" />
        </div>

        <div className="hidden md:flex gap-8 text-white font-semibold text-sm">
          <a href="#about" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">About Us</a>
          <a href="#roadmap" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">Roadmap</a>
          <a href="#tokenomics" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">Tokenomics</a>
          <a href="#howtobuy" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">How to Buy</a>
          <a href="#story" className="hover:text-[#FA9231] transition-colors hover:-translate-y-1 transform duration-200">Our Story</a>
        </div>
        <svg className="md:hidden cursor-pointer active:scale-90 transition-transform" width="33" height="22" viewBox="0 0 34 23" fill="none">
          <path d="M0 22.0811V18.4009H33.1216V22.0811H0ZM0 12.8806V9.20045H33.1216V12.8806H0ZM0 3.68018V0H33.1216V3.68018H0Z" fill="white"/>
        </svg>
      </motion.nav>

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#11173E]" style={{ minHeight: "420px" }}>
        <img src="/BgImage.png" alt="space background" className="absolute inset-0 w-full h-full object-cover" />

        {/* Desktop hero */}
        <div className="hidden lg:block relative z-10 px-16 py-12" style={{ minHeight: "500px" }}>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              fontFamily: "'Gloomie Saturday', cursive",
              color: "#FA9231",
              fontSize: "140px",
              lineHeight: 1,
              position: "absolute",
              top: "80px",
              left: "80px",
              zIndex: 30
            }}
          >
            PLUTO
          </motion.p>

          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/LapMockup.png" alt="laptop" className="absolute top-8 left-[20%] w-[50%] z-20"
          />
          <motion.img
            animate={float}
            src="/PhoneMockup.png" alt="phone" className="absolute top-8 right-[4%] w-[11%] z-20 cursor-pointer"
          />
          <motion.img
            animate={floatSlow}
            src="/Image3.png" alt="bear" className="absolute bottom-0 left-[4%] w-[16%] z-20"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 right-8 flex gap-3 items-center"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative w-12 h-12 flex items-center justify-center cursor-pointer">
              <svg width="48" height="46" viewBox="0 0 48 46" fill="none" className="absolute inset-0">
                <ellipse cx="23.8426" cy="22.9595" rx="23.8426" ry="22.9595" fill="#2431DF"/>
              </svg>
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" className="relative z-10">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.53686 1.31776C6.14856 2.04095 5.01275 2.65292 5.01299 2.67781C5.01361 2.74205 8.34494 4.42916 8.46318 4.42505C8.51697 4.42325 8.90715 4.24364 9.3302 4.02597L10.0995 3.63028L10.9397 4.06215L11.7799 4.4941L13.1558 3.87585C15.229 2.94424 15.4443 2.84215 15.4105 2.80785C15.3658 2.76234 14.6221 2.36286 12.6047 1.30072C11.6296 0.787375 10.6833 0.284058 10.5016 0.182211C10.32 0.0803653 10.1465 -0.00156325 10.1162 2.2641e-05C10.0859 0.00160853 8.92518 0.594596 7.53686 1.31776ZM1.44781 4.47088L0.00260731 5.21738V8.4936C0.00260731 10.2955 0.0215842 11.7698 0.0448618 11.7698C0.0680587 11.7698 0.779101 11.4616 1.62492 11.0849L3.16277 10.3999V6.94656L3.91426 7.35599C4.49336 7.6712 5.0728 7.98577 5.65259 8.2997L6.63938 8.83398L7.07849 8.63542C7.35387 8.51069 7.62871 8.38475 7.90299 8.2576C8.11493 8.1589 8.63521 7.92457 9.05912 7.73676C9.48304 7.54887 9.87545 7.35994 9.93109 7.31688C10.005 7.25968 9.10369 6.7616 6.59737 5.47456C4.70815 4.5044 3.10181 3.71371 3.02773 3.7175C2.95365 3.72129 2.24269 4.06027 1.44781 4.47088ZM15.671 4.68051C14.6867 5.12486 13.8807 5.50617 13.8798 5.52791C13.879 5.54963 14.4154 5.86861 15.072 6.23665C15.7286 6.60476 16.2658 6.92562 16.2658 6.94978C16.2658 6.97389 15.6848 7.2554 14.9748 7.57548C14.2647 7.89548 12.4698 8.70606 10.9861 9.37678L6.0146 11.624C4.76403 12.1893 3.63679 12.6988 3.50962 12.7564C0.955268 13.9128 0.253177 14.2336 0.156761 14.2887C0.0598067 14.3442 0.0378463 14.6663 0.0205896 16.2832L0 18.2116L1.29236 18.8701L2.5847 19.5286L4.37673 18.7198C5.36237 18.2751 6.16875 17.8878 6.16875 17.8593C6.16875 17.8309 5.98662 17.7122 5.76411 17.5955C5.54149 17.4788 5.08196 17.2204 4.74282 17.0212C4.40371 16.822 4.06557 16.6393 3.99133 16.615C3.91711 16.5909 3.85747 16.5486 3.85868 16.521C3.85991 16.4935 4.64904 16.1187 5.61219 15.688C7.48291 14.8516 8.91454 14.2069 11.988 12.817C13.3624 12.1956 14.7369 11.5746 16.1116 10.954C17.3198 10.4087 18.7245 9.77178 19.2333 9.53868L20.1582 9.11487L20.1787 7.16447L20.1994 5.21415L18.8886 4.54136C18.1677 4.17136 17.5514 3.86953 17.5191 3.87064C17.4869 3.87166 16.6552 4.23606 15.671 4.68051ZM19.807 11.7168C19.6138 11.8111 19.2323 11.9878 18.9592 12.1093C18.686 12.2308 18.1677 12.4647 17.8073 12.6291L17.1522 12.928L17.1372 14.6402C17.129 15.582 17.0943 16.3483 17.0602 16.3433C16.9826 16.3318 15.7547 15.7021 14.5204 15.0407C13.6295 14.5634 13.5736 14.5444 13.3642 14.6481C13.2432 14.708 12.5199 15.0324 11.7568 15.3691C10.9937 15.7057 10.3446 16.0031 10.314 16.03C10.2836 16.0569 11.8193 16.8893 13.7269 17.8799L17.1951 19.6809L18.6767 18.9144C19.4915 18.493 20.1843 18.1085 20.2162 18.0602C20.288 17.9514 20.2819 11.5303 20.21 11.539C20.1815 11.5424 20.0002 11.6225 19.807 11.7168ZM11.6027 19.2536C11.3457 19.364 11.0888 19.4747 10.8319 19.5855C10.0563 19.921 10.2083 19.9322 9.2855 19.4728C8.6709 19.1669 8.40598 19.0725 8.29099 19.1183C8.20473 19.1526 7.4624 19.4866 6.64124 19.8604C5.82012 20.2342 5.11981 20.5401 5.08497 20.5401C4.74046 20.5401 5.31321 20.8823 7.52331 21.9971L10.1152 23.3045L11.2058 22.7661C11.8056 22.4699 13.0154 21.877 13.8943 21.4483C14.7731 21.0196 15.4813 20.6577 15.4681 20.6441C15.4547 20.6305 14.7183 20.2523 13.8316 19.8038L12.2193 18.9883L11.6027 19.2536Z" fill="white"/>
              </svg>
            </motion.div>
            <motion.svg whileHover={{ scale: 1.1 }} className="cursor-pointer" width="26" height="22" viewBox="0 0 26 22" fill="none">
              <path d="M23.2871 0.242457L0.83297 8.94605C-0.0706245 9.35137 -0.376245 10.163 0.614571 10.6035L6.37502 12.4437L20.3031 3.79134C21.0636 3.24817 21.8421 3.39301 21.1722 3.99054L9.20985 14.8776L8.83409 19.4849C9.18213 20.1963 9.81941 20.1996 10.2259 19.8461L13.5355 16.6983L19.2036 20.9647C20.5201 21.7481 21.2364 21.2425 21.5197 19.8067L25.2374 2.11147C25.6235 0.344033 24.9652 -0.434719 23.2871 0.242457Z" fill="white"/>
            </motion.svg>
            <motion.svg whileHover={{ scale: 1.1 }} className="cursor-pointer" width="24" height="22" viewBox="0 0 24 22" fill="none">
              <path d="M18.6672 0H22.302L14.3615 9.03671L23.7028 21.3326H16.3881L10.6604 13.8745L4.10533 21.3326H0.466946L8.96086 11.6677L0 0H7.49958L12.6786 6.81694L18.6672 0ZM17.392 19.1661H19.4067L6.40451 2.05267H4.24281L17.392 19.1661Z" fill="white"/>
            </motion.svg>
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

      {/* CONTENT SECTIONS */}
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
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                id="about" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 relative z-10 overflow-hidden"
              >
                <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-[42px] font-bold mb-6 text-[#11173E]">About Us</h2>
                  <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                    Pluto Token is a celestial cryptocurrency inspired by the mysterious dwarf planet, Pluto. Just as Pluto holds a unique place in our solar system, this token represents innovation, exploration, and discovery in the world of digital assets. With a focus on community-driven growth and transparency, Pluto Token aims to bring a sense of wonder and excitement to the crypto space. Whether you&apos;re a seasoned investor or a newcomer, Pluto Token is here to offer an out-of-this-world experience. Join us on this cosmic journey as we venture beyond the stars!
                  </p>
                </div>
              </motion.div>

              {/* Roadmap */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                id="roadmap" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 relative z-10 overflow-hidden"
              >
                <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-[42px] font-bold mb-6 text-[#11173E]">Roadmap</h2>
                  <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                    officially launch Pluto Token and establish a vibrant, engaged community through social media, partnerships, and educational content. Develop and integrate Pluto Token into key platforms, enabling real-world use cases. Focus on expanding Pluto Token&apos;s ecosystem, introducing new features, and exploring innovative ways.
                  </p>
                </div>
              </motion.div>

              {/* Right Top Image (Spans full width on tablet to match the grid mathematically) */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                className="border-4 border-black bg-white rounded-xl overflow-hidden shadow-lg hidden md:block relative z-10 md:col-span-2 lg:col-span-1" style={{ minHeight: "380px" }}
              >
                <img src="/Image161.png" alt="planets" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Floating Bear 1 - Centers beautifully on Tablet and Desktop */}
            <motion.img
              animate={float}
              src="/Image8.png"
              alt="pointing bear"
              className="hidden md:block absolute -bottom-6 md:left-[50%] lg:left-[33.33%] -translate-x-1/2 w-32 xl:w-36 z-30 drop-shadow-xl pointer-events-none"
            />

            {/* Floating Bear 2 - Desktop Only (Tablet only has 2 columns!) */}
            <motion.img
              animate={floatSlow}
              src="/Image2.png"
              alt="arms up bear"
              className="hidden lg:block absolute -bottom-6 left-[66.66%] -translate-x-1/2 w-24 xl:w-28 z-30 drop-shadow-xl pointer-events-none"
            />
          </div>

          {/* ================ ROW 2 ================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

            {/* Tokenomics */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              id="tokenomics" className="border-4 border-black bg-[#8bb5f8] p-8 rounded-xl shadow-lg relative overflow-hidden transition-shadow duration-300"
            >
              <img src="/Image41.png" alt="space bubbles" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-[42px] font-bold mb-6 text-[#11173E]">Tokenomics</h2>
                <p className="text-[#11173E] text-2xl font-semibold leading-tight">
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
              className="border-4 border-black bg-[#0f172a] p-8 rounded-xl shadow-lg relative overflow-hidden flex flex-col items-center justify-center text-center" style={{ minHeight: "380px" }}
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="space" className="absolute inset-0 w-full h-full object-cover opacity-90" />
              <div className="relative z-10">
                <p style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#FA9231", fontSize: "88px", lineHeight: 1 }}>PLUTO</p>
                <p className="text-white font-medium mt-3 max-w-xs">Your gateway to a cosmic crypto adventure, where innovation meets the stars.</p>
                <motion.img animate={float} src="/Image3.png" alt="bear" className="mt-6 w-40 mx-auto" />
              </div>
            </motion.div>

            {/* How to Buy - Spans full width on tablet */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              id="howtobuy" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg relative overflow-hidden transition-shadow duration-300 md:col-span-2 lg:col-span-1"
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-[42px] font-bold mb-6 text-[#11173E]">How to Buy</h2>
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
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="border-4 border-black bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center group transition-shadow duration-300 cursor-pointer relative overflow-hidden"
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none" />
              <div className="relative z-10 w-full flex flex-col items-center">
                <p className="text-[#11173E] text-[15px] leading-relaxed mb-8 font-semibold">
                  Embark on an interstellar journey with us! Join the Pluto Token community today and be part of a vibrant group of explorers, innovators, and dreamers.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  >
                    <span className="text-white text-xl">↗</span>
                  </motion.div>
                  <p style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#11173E", fontSize: "46px", lineHeight: 1 }} className="group-hover:text-[#FA9231] transition-colors">JOIN NOW</p>
                </div>
                <img src="/Image5.png" alt="bear" className="w-36" />
              </div>
            </motion.div>

            {/* Our Story */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              id="story" className="border-4 border-black bg-white p-8 rounded-xl shadow-lg relative overflow-hidden transition-shadow duration-300"
            >
              <img src="/Botcalm_cartoon_type_vastness_of_space_distant_planets__dark_bl_76e8397f120d436a86d390dbf063213e2.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-[42px] font-bold mb-6 text-[#11173E]">Our Story</h2>
                <p className="text-[#11173E] leading-relaxed text-[15px] font-semibold">
                  In the vast expanse of the digital universe, Pluto Token was born—a small but powerful entity destined to make a big impact. Much like Pluto, which was once seen as a distant and enigmatic world at solar system, Pluto Token represents the spirit of exploration and discovery in the crypto space. With a mission to bring innovation and inclusivity to the world of digital assets.
                </p>
              </div>
            </motion.div>

            {/* Buy Now - Spans full width on tablet */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className="border-4 border-black bg-[#0f172a] rounded-xl shadow-lg relative overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer group md:col-span-2 lg:col-span-1" style={{ minHeight: "380px" }}
            >
              <img src="/Image41(1).png" alt="bg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block mb-6"
                >
                  <img src="/Image12.png" alt="buy now" className="w-52" />
                  <p style={{ fontFamily: "'Gloomie Saturday', cursive", color: "#000", fontSize: "38px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>BUY NOW</p>
                </motion.div>
                <motion.img animate={floatSlow} src="/Image7.png" alt="bear" className="w-40 mx-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#11173E] w-full py-4 flex items-center justify-center relative z-20">
        <p className="text-white text-xs tracking-wider" >
          @2024 Pluto All Right Reserved
        </p>
      </footer>
    </div>
  );
}