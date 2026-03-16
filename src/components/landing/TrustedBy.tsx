import cosmos from "@/assets/logos/cosmos.png";
import pel from "@/assets/logos/pel.jpg";
import acr from "@/assets/logos/acr.png";
import ebmorgane from "@/assets/logos/ebmorgane.jpg";
import dawa from "@/assets/logos/dawa.png";
import kentau from "@/assets/logos/kentau.jpg";
import nawi from "@/assets/logos/nawi.jpg";

const logos = [
  { name: "Cosmos Ltd", logo: cosmos },
  { name: "P.E.L", logo: pel },
  { name: "A.C.R", logo: acr },
  { name: "EBMorgane'", logo: ebmorgane },
  { name: "Dawa Ltd", logo: dawa },
  { name: "Kentau Safaris", logo: kentau },
  { name: "Nawi Afrifem", logo: nawi },
];

const TrustedBy = () => {
  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">

      {/* Inline CSS */}
      <style>
        {`
        .logo-scroll {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scrollLogos 30s linear infinite;
        }

        .logo-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .fade-edge-left,
        .fade-edge-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 90px;
          pointer-events: none;
          z-index: 10;
        }

        .fade-edge-left {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }

        .fade-edge-right {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }
        `}
      </style>

      <div className="section-container px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <p className="text-center font-semibold text-accent uppercase tracking-wide mb-12">
          Trusted by modern teams
        </p>

        {/* Logo Scroller */}
        <div className="relative w-full overflow-hidden">

          {/* Fade edges */}
          <div className="fade-edge-left"></div>
          <div className="fade-edge-right"></div>

          <div className="logo-scroll">
            {scrollingLogos.map((company, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-14 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;