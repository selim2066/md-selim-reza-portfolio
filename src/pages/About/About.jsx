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
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
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
