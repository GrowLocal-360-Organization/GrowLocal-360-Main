import Link from 'next/link';

export default function Showcase() {
    return (
        <section id="showcase" className="py-24 bg-black text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Start Getting More Calls Without Spending More on Ads
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Create your free account and build your first GBP-first website.
                    Only pay when you&apos;re ready to activate a site and start ranking.
                </p>

                <Link
                    href="https://app.growlocal360.com/login"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full font-medium text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-8"
                >
                    Get Started Free
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00ef99]">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Free account. Pay only when you activate a site.
                    </span>
                    <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00ef99]">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        No credit card required.
                    </span>
                </div>
            </div>
        </section>
    );
}
