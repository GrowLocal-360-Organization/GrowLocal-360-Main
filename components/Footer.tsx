import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-surface py-12 border-t border-border">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
                    GrowLocal<span className="text-black">360</span>
                </Link>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} GrowLocal 360. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <Link href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</Link>
                    <Link href="#" className="text-gray-500 hover:text-black transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
