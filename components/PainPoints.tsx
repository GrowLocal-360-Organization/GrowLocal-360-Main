export default function PainPoints() {
    const painCards = [
        {
            title: "Static Website, Stale Rankings",
            description: "Your site launched months ago and hasn't changed since. Google sees that — and ranks fresher competitors higher.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            ),
        },
        {
            title: "No Proof of Real Work",
            description: "You do great work every day but none of it shows up online. Customers can't see it. Google can't index it.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            ),
        },
        {
            title: "Inconsistent Google Activity",
            description: "Your Google Business Profile sits idle while competitors post updates, photos, and reviews every week.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
        },
        {
            title: "Too Dependent on Paid Ads",
            description: "When you stop paying, the leads stop coming. You need organic visibility that compounds over time.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Why Most Local Businesses Struggle to Get Calls
                    </h2>
                    <p className="text-xl text-gray-600">
                        It&apos;s not your work that&apos;s the problem. It&apos;s that nobody can see it.
                        While you&apos;re busy on the job, competitors who look more active online are getting the calls you should be getting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {painCards.map((card, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 group bg-white"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground">{card.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
