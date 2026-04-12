import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl tracking-widest">
              <span className="text-white">DJ</span>
              <span className="text-gradient"> LIFTS</span>
            </p>
            <p className="text-zinc-600 text-xs mt-1 tracking-wide">
              Tristan Echeverri · Houston, TX
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {["about", "services", "gallery", "booking"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-zinc-600 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
              >
                {id === "booking" ? "Book" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Social / contact */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/tristanecheverri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @tristanecheverri"
              className="flex items-center gap-2 text-zinc-500 hover:text-accent transition-colors duration-200 group"
            >
              <Instagram
                size={17}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-[11px] font-medium hidden sm:inline">
                @tristanecheverri
              </span>
            </a>
            <a
              href="mailto:bookdjlifts@gmail.com"
              aria-label="Email — bookdjlifts@gmail.com"
              className="flex items-center gap-2 text-zinc-500 hover:text-accent transition-colors duration-200 group"
            >
              <Mail
                size={17}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-[11px] font-medium hidden sm:inline">
                bookdjlifts@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-700 text-[11px] tracking-wide">
            © {year} DJ Lifts · Tristan Echeverri · Houston, TX · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
