import Link from 'next/link';

interface FeaturesProps {
    industrySlug?: string;
}

export default function Features({ industrySlug }: FeaturesProps) {
    const features = [
        {
            title: "Full Website Build",
            description: "SEO-optimized, mobile-responsive website designed for local service businesses",
            siloSlug: "website-structure",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            ),
        },
        {
            title: "Google Business Profile Integration",
            description: "Sync your GBP data and auto-post completed jobs to boost visibility",
            siloSlug: "google-business-profile-seo",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
        },
        {
            title: "CRM + Booking Calendar",
            description: "Manage leads, appointments, and customer pipelines in one place",
            siloSlug: "crm-and-booking",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            ),
        },
        {
            title: "AI Chatbot + Text Automation",
            description: "24/7 customer engagement with intelligent responses and follow-ups",
            siloSlug: "automations",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            ),
        },
        {
            title: "Review Management",
            description: "Automated review requests and AI-powered auto-replies to build trust",
            siloSlug: "review-generation",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ),
        },
        {
            title: "Missed Call Text Back",
            description: "Never lose a lead — automatic text when you miss a call",
            siloSlug: "automations",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
        },
        {
            title: "On-Page SEO + Hosting",
            description: "Optimized for search engines with unlimited hosting included",
            siloSlug: "local-seo",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            ),
        },
        {
            title: "GrowLocal 360 JobSnaps",
            description: "Turn every job into proof — auto-post to GBP and generate SEO content",
            siloSlug: "job-snaps",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            ),
        },
        {
            title: "Unlimited Edits",
            description: "Make changes anytime — we handle updates for you",
            siloSlug: "automations",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
            ),
        },
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What&apos;s Included In Every Site</h2>
                    <p className="text-xl text-gray-600">Everything you need to launch, automate, and grow your local service business.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const cardContent = (
                            <>
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                                {industrySlug && feature.siloSlug && (
                                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-black">
                                        Learn more
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                )}
                            </>
                        );

                        if (industrySlug && feature.siloSlug) {
                            return (
                                <Link
                                    key={index}
                                    href={`/${industrySlug}/${feature.siloSlug}`}
                                    className="p-6 rounded-2xl border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 group bg-white block"
                                >
                                    {cardContent}
                                </Link>
                            );
                        }

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 group bg-white"
                            >
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
