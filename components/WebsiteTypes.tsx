export default function WebsiteTypes() {
    const types = [
        {
            name: "Single Location",
            description: "Ideal for businesses focused on one primary GBP and city. Built to strengthen your core local market and support category + service area growth.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            badge: null,
        },
        {
            name: "Multi-Location",
            description: "Built for brands managing multiple GBPs or service areas. Give each location its own optimized visibility path while keeping the brand unified.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            badge: "Most Popular",
        },
        {
            name: "Microsite (EMD)",
            description: "Useful for highly targeted campaigns, exact-match domain opportunities, or support sites focused on a specific service + location combination.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            badge: null,
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Choose the Right Website Structure for the Way You Grow
                    </h2>
                    <p className="text-xl text-gray-600">
                        Three website types. One local growth platform. Whether you serve one city or twenty,
                        GrowLocal gives you the right structure to match your strategy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {types.map((type, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl ${
                                type.badge
                                    ? 'border-2 border-black'
                                    : 'border border-border'
                            }`}
                        >
                            {type.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
                                        {type.badge}
                                    </span>
                                </div>
                            )}
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-black">
                                {type.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground text-center">{type.name}</h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {type.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
