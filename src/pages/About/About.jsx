import HeroImg from "../../assets/images/me old.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-center">
            {/* <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div> */}

           {/* img wrapper */}
      <div className="relative mb-6 sm:mb-0 group overflow-hidden rounded-2xl">
  
  {/* 🔥 Outer Glow */}
  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#5DCAA5] via-[#7F77DD] to-[#378ADD] opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#04081A]">

    {/* 1️⃣ Image */}
    <img
      src={HeroImg}
      alt="developer portrait"
      className="w-full h-full object-cover scale-[1.12] group-hover:scale-[1.05] transition duration-500"
    />

    {/* 2️⃣ 🔥 Strong bottom → mid gradient */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 h-[65%] 
        bg-gradient-to-t 
        from-black 
        via-black/80 
        via-black/40 
        to-transparent">
      </div>
    </div>

    {/* 3️⃣ Animated text (RIGHT → LEFT) */}
    <div className="absolute bottom-16 left-0 w-full overflow-hidden z-20 
  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <p className="whitespace-nowrap text-[18px] tracking-[0.2em] font-mono text-white/60 animate-slide">
    • BASED IN BANGLADESH • BACKEND-FOCUSED FULL-STACK DEVELOPER •
  </p>
</div>

    {/* 4️⃣ Bottom highlight line */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5DCAA5] to-transparent opacity-70"></div>

  </div>

  {/* 5️⃣ Soft shadow under image (depth boost) */}
  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-16 
    bg-black/60 blur-2xl rounded-full opacity-70">
  </div>

  {/* 🎬 Animations */}
  <style>{`
    @keyframes slide {
      0%   { transform: translateX(100%) }
      100% { transform: translateX(-100%) }
    }

    .animate-slide {
      display: inline-block;
      animation: slide 12s linear infinite;
    }

    /* Pause on hover (pro UX touch) */
    .group:hover .animate-slide {
      animation-play-state: paused;
    }
  `}</style>
</div>


          <div className="relative space-y-4">

  {/* Animated gradient text for the headline phrase */}
  <style>{`
    @keyframes shimmer {
      0% { background-position: 200% center }
      100% { background-position: -200% center }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px) }
      to   { opacity: 1; transform: translateY(0) }
    }
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(29,158,117,0) }
      50%       { box-shadow: 0 0 20px 4px rgba(29,158,117,0.3) }
    }
    .glow-text {
      background: linear-gradient(90deg, #5DCAA5, #7F77DD, #378ADD, #5DCAA5);
      background-size: 300% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
    }
    .chip {
      display: inline-block;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid;
      margin: 2px 2px 2px 0;
      font-family: monospace;
    }
    .about-card {
      border-radius: 14px;
      padding: 14px 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      border: 1px solid;
      transition: transform 0.2s;
      animation: fadeUp 0.5s ease both;
    }
    .about-card:hover { transform: translateY(-2px); }
  `}</style>

  <p className="text-white text-sm leading-relaxed" style={{ animation: "fadeUp 0.4s ease both" }}>
    I'm a{" "}
    <span className="glow-text font-medium">full-stack developer</span>{" "}
    with a focus on building scalable, maintainable web applications. I care
    deeply about clean architecture, thoughtful API design, and writing code
    that holds up in production — not just in demos.
  </p>

  <p className="text-white/60 text-sm leading-relaxed">
    My day-to-day stack:{" "}
    {["React","Next.js","Node.js","Express","PostgreSQL","Prisma"].map(t => (
      <span key={t} className="chip" style={{ background:"rgba(29,158,117,0.1)", borderColor:"rgba(29,158,117,0.3)", color:"#5DCAA5" }}>{t}</span>
    ))}
    &nbsp;— currently exploring:{" "}
    {["Redis","Go","Docker"].map(t => (
      <span key={t} className="chip" style={{ background:"rgba(186,117,23,0.1)", borderColor:"rgba(186,117,23,0.3)", color:"#EF9F27" }}>{t}</span>
    ))}
  </p>

  <div className="grid grid-cols-2 gap-3 pt-1">
    {[
      { label:"Focus",        value:"Scalable & maintainable web apps",   color:"#1D9E75", bg:"rgba(29,158,117,0.08)",  border:"rgba(29,158,117,0.25)",  glow:"rgba(29,158,117,0.3)",  delay:"0.1s" },
      { label:"Strength",     value:"Clean architecture & API design",     color:"#7F77DD", bg:"rgba(127,119,221,0.08)", border:"rgba(127,119,221,0.25)", glow:"rgba(127,119,221,0.3)", delay:"0.2s" },
      { label:"Learning now", value:"Redis, Go & Docker",                  color:"#378ADD", bg:"rgba(55,138,221,0.08)",  border:"rgba(55,138,221,0.25)",  glow:"rgba(55,138,221,0.3)",  delay:"0.3s" },
      { label:"Goal",         value:"Production-ready backend systems",    color:"#BA7517", bg:"rgba(186,117,23,0.08)",  border:"rgba(186,117,23,0.25)",  glow:"rgba(186,117,23,0.3)",  delay:"0.4s" },
    ].map(({ label, value, color, bg, border, glow, delay }) => (
      <div
        key={label}
        className="about-card"
        style={{ background: bg, borderColor: border, animationDelay: delay,
          animation: `fadeUp 0.5s ease ${delay} both, pulseGlow 3s ease-in-out infinite` }}
      >
        <div>
          <p style={{ fontSize:11, fontWeight:500, letterSpacing:"0.06em", textTransform:"uppercase", color, margin:"0 0 4px" }}>{label}</p>
          <p style={{ fontSize:13, color:"#fff", margin:0, lineHeight:1.5 }}>{value}</p>
        </div>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-TL66SLEMXW"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-TL66SLEMXW');
// </script>
