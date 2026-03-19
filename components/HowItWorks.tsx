export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Build Your Site",
            description: "Choose the right GBP-first website structure for your business or client. Your site launches with SEO-optimized pages built around your actual services and service areas.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            ),
        },
        {
            number: "2",
            title: "Add Your Real-World Work",
            description: "Upload job photos and details as you complete work in the field. AI helps you turn each job into compelling, optimized content in seconds.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            ),
        },
        {
            number: "3",
            title: "Turn That Work Into Visibility",
            description: "GrowLocal transforms your activity into website content, Google updates, and stronger local authority — so every job you finish brings in the next one.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        From Job to Ranking in 3 Simple Steps
                    </h2>
                    <p className="text-xl text-gray-600">Launch fast, then grow your visibility with every job you complete.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-black">
                                {step.icon}
                            </div>
                            <div className="inline-block px-3 py-1 bg-black text-white text-sm font-bold rounded-full mb-4">
                                Step {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
