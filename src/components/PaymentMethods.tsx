const PaymentMethods = () => {
  return (
    <section className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Accepted Payment Methods
          </p>
          <div className="flex items-center gap-6">
            {/* Visa */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2 shadow-sm border border-border">
              <svg viewBox="0 0 780 500" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M293.2 348.73l33.36-195.76h53.35l-33.38 195.76H293.2zm246.11-191.54c-10.57-3.98-27.14-8.22-47.83-8.22-52.73 0-89.88 26.6-90.17 64.69-.28 28.17 26.51 43.87 46.75 53.24 20.79 9.58 27.77 15.71 27.68 24.27-.14 13.11-16.59 19.1-31.93 19.1-21.38 0-32.72-2.96-50.23-10.27l-6.88-3.12-7.49 43.95c12.47 5.48 35.53 10.24 59.49 10.48 56.07 0 92.5-26.28 92.89-67 .2-22.32-14.03-39.3-44.82-53.32-18.66-9.08-30.1-15.14-29.98-24.34 0-8.16 9.67-16.88 30.58-16.88 17.46-.28 30.1 3.54 39.95 7.52l4.79 2.26 7.24-42.36zm137.07-4.22h-41.23c-12.77 0-22.33 3.49-27.94 16.27l-79.27 179.49h56.04l11.19-29.37h68.49l6.5 29.37h49.47l-43.25-195.76zm-65.93 126.42c4.42-11.32 21.33-54.88 21.33-54.88-.32.52 4.39-11.38 7.1-18.77l3.62 16.97s10.24 46.93 12.39 56.68h-44.44zM240.95 152.97L188.65 287.6l-5.57-27.04c-9.68-31.2-39.87-65.02-73.64-81.95l47.83 171.98h56.44l83.95-197.62h-56.71" fill="#1a1f71"/>
                <path d="M124.39 152.97H38.04l-.66 3.7c66.94 16.22 111.23 55.37 129.62 102.39L148.97 169.5c-3.1-12.55-12.57-16.17-24.58-16.53" fill="#f9a533"/>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2 shadow-sm border border-border">
              <svg viewBox="0 0 780 500" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" rx="40" fill="transparent"/>
                <circle cx="310" cy="250" r="150" fill="#eb001b"/>
                <circle cx="470" cy="250" r="150" fill="#f79e1b"/>
                <path d="M390 130.9a149.76 149.76 0 0 0-55.93 119.1A149.76 149.76 0 0 0 390 369.1a149.76 149.76 0 0 0 55.93-119.1A149.76 149.76 0 0 0 390 130.9z" fill="#ff5f00"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
