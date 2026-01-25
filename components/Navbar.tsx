import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-border">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/grow-local-360-logo-black.svg"
                        alt="GrowLocal 360"
                        width={180}
                        height={32}
                        className="h-8 w-auto"
                        priority
                    />
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
