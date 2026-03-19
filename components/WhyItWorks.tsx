export default function WhyItWorks() {
    const genericMarketing = [
        "Static website that never changes",
        "No proof of real completed work",
        "Inconsistent posting and updates",
        "Relies heavily on paid ad spend",
        "No fresh content for Google to index",
        "Disconnected tools with no unified strategy",
    ];

    const growLocalApproach = [
        "Fresh content from every completed job",
        "Real proof that builds trust and authority",
        "Consistent Google Business Profile activity",
        "Organic visibility that compounds over time",
        "EEAT signals that strengthen your rankings",
        "Website + GBP working as one connected system",
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Why This Works When Other Marketing Falls Flat
                    </h2>
                    <p className="text-xl text-gray-600">
                        Most local marketing fails because it&apos;s static, disconnected, and doesn&apos;t show Google
                        what you actually do. GrowLocal works because it turns your real work into compounding visibility.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Generic Marketing Column */}
                    <div className="p-8 rounded-2xl border border-border bg-gray-50">
                        <h3 className="text-xl font-bold mb-6 text-foreground">Generic Marketing</h3>
                        <ul className="space-y-4">
                            {genericMarketing.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mt-0.5 shrink-0">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GrowLocal Approach Column */}
                    <div className="p-8 rounded-2xl border-2 border-black bg-white">
                        <h3 className="text-xl font-bold mb-6 text-foreground">The GrowLocal Approach</h3>
                        <ul className="space-y-4">
                            {growLocalApproach.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black mt-0.5 shrink-0">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
