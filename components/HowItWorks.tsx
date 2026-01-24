export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Choose Your Design",
            description: "Select from professional templates designed specifically for local home service businesses.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            ),
        },
        {
            number: "2",
            title: "Fill Out The Form",
            description: "Enter your business details, services, and service areas. Takes just 5 minutes.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
            ),
        },
        {
            number: "3",
            title: "Get Your Site",
            description: "Your SEO-optimized website goes live instantly with CRM, booking, and automation included.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Everything You Need to Launch Sites</h2>
                    <p className="text-xl text-gray-600">From template to live site in three simple steps</p>
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
