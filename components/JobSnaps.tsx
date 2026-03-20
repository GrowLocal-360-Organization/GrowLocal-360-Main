export default function JobSnaps() {
    const features = [
        {
            title: "Show Proof of Real Work",
            description: "Upload photos from completed jobs to build trust and authenticity that generic stock imagery never will.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            ),
        },
        {
            title: "Turn Photos Into SEO Content",
            description: "AI transforms your job details into optimized descriptions and content — no writing required on your end.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            ),
        },
        {
            title: "Stay Active on Google",
            description: "Publish job updates that keep your Google Business Profile fresh, visible, and ahead of competitors who sit idle.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
            ),
        },
        {
            title: "Keep Your Website Growing",
            description: "Every completed job creates fresh, relevant content that supports your local rankings week after week.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            ),
        },
        {
            title: "Build Authority Google Can Trust",
            description: "Real proof of completed work strengthens your Experience, Expertise, Authority, and Trust signals.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
        },
        {
            title: "Strengthen Service Area Relevance",
            description: "Every job adds localized signals to the specific markets and neighborhoods you serve.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium text-gray-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                        Core Differentiator
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                    Turn Every Job Into <span className="bg-[#00ef99] text-black px-2">Proof</span>
                </h2>

                {/* Description */}
                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
                    Your best marketing is the work you already do. Job Snaps lets you upload photos from completed jobs,
                    generate AI-assisted descriptions, and publish that proof across your website and Google Business Profile —
                    so every job you finish strengthens your visibility and authority over time.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white text-black p-6 rounded-2xl"
                        >
                            <div className="mb-4 text-black">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Tagline */}
                <p className="text-center text-gray-400 text-lg">
                    If you&apos;re not showing your work, you&apos;re not ranking. Job Snaps changes that.
                </p>
            </div>
        </section>
    );
}
