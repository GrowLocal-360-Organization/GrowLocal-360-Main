import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-border">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    GrowLocal<span className="text-black">360</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        Pricing
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        How it Works
                    </Link>
                </div>

                <Link
                    href="#"
                    className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md"
                >
                    Start Free Trial
                </Link>
            </div>
        </nav>
    );
}
