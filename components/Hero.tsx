import Link from 'next/link';

export default function Hero() {
    return (
        <section className="pt-32 pb-20">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800 mb-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        GBP-First Website Architecture for Local Search
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                        Stop Losing Local Jobs to Competitors{' '}
                        <span className="bg-[#00ef99] px-2">Ranking Above You</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        GrowLocal 360 helps local service businesses and agencies launch GBP-first websites,
                        turn completed jobs into proof-driven SEO content, and build the visibility, trust,
                        and local authority that brings in more calls.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <Link
                            href="https://app.growlocal360.com/login"
                            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Started Free
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-black px-8 py-4 rounded-full font-medium text-lg transition-all hover:border-gray-400"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* Trust Microcopy */}
                    <p className="text-sm text-gray-500">
                        Free account. Pay only when you activate a site. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
}
