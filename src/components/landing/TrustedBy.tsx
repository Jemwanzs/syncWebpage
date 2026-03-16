const logos = [
  "Cosmos Ltd", "P.E.L", "ACR", "JMS", "SaSHA",
  "EBMorgane'", "Dawa Ltd", "Kentau Safaris", "NAWI AFRIFEM",
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
          Teams building modern workplaces
        </p>
      </div>
      <div className="relative">
        <div className="flex logo-scroll">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="px-6 py-3 rounded-lg bg-muted/50">
                <span className="text-sm font-heading font-semibold text-muted-foreground whitespace-nowrap">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
