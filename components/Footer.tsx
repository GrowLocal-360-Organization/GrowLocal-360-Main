import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-surface py-12 border-t border-border">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/grow-local-360-logo-black.svg"
                        alt="GrowLocal 360"
                        width={160}
                        height={28}
                        className="h-7 w-auto"
                    />
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
