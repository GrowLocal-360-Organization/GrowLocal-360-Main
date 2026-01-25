import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getIndustryBySlug } from '@/lib/industries';
import { applianceRepairSiloContent, getApplianceRepairSiloPage, getAllApplianceRepairSiloSlugs } from '@/lib/silo-content/appliance-repair';
import type { SiloPage as SiloPageContent } from '@/lib/silo-content/types';

interface PageProps {
    params: Promise<{ industry: string; silo: string }>;
}

// Generate static params for all industry + silo combinations
export async function generateStaticParams() {
    const params: { industry: string; silo: string }[] = [];

    // Add appliance repair silo pages
    const applianceRepairSilos = getAllApplianceRepairSiloSlugs();
    applianceRepairSilos.forEach(silo => {
        params.push({ industry: 'appliance-repair', silo });
    });

    return params;
}

// Get silo content based on industry
function getSiloContent(industry: string, siloSlug: string): SiloPageContent | undefined {
    if (industry === 'appliance-repair') {
        return getApplianceRepairSiloPage(siloSlug);
    }
    return undefined;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { industry, silo } = await params;
    const siloContent = getSiloContent(industry, silo);

    if (!siloContent) {
        return { title: 'Not Found' };
    }

    return {
        title: siloContent.seoTitle,
        description: siloContent.seoDescription,
    };
}

function SiloContentRenderer({ content, industrySlug }: { content: SiloPageContent; industrySlug: string }) {
    return (
        <article className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-black">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <Link href={`/${industrySlug}`} className="text-gray-500 hover:text-black capitalize">
                            {industrySlug.replace(/-/g, ' ')}
                        </Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-900">{content.h1}</span>
                    </nav>

                    {/* H1 */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                        {content.h1}
                    </h1>

                    {/* Intro */}
                    <div className="text-lg text-gray-700 leading-relaxed mb-12 border-l-4 border-yellow-300 pl-6">
                        {content.intro}
                    </div>

                    {/* Sections */}
                    {content.sections.map((section, index) => (
                        <section key={index} className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                {section.h2}
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                {section.content.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* CTA Section */}
                    <div className="mt-16 p-8 bg-black text-white rounded-2xl text-center">
                        <p className="text-xl mb-6">{content.ctaText}</p>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            Start Free Trial
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>

                    {/* Back Link */}
                    <div className="mt-12 text-center">
                        <Link
                            href={`/${industrySlug}`}
                            className="text-gray-600 hover:text-black inline-flex items-center gap-2"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            Back to {industrySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Overview
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default async function SiloPage({ params }: PageProps) {
    const { industry, silo } = await params;

    // Verify the industry exists
    const industryData = getIndustryBySlug(industry);
    if (!industryData) {
        notFound();
    }

    // Get silo content
    const siloContent = getSiloContent(industry, silo);
    if (!siloContent) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <SiloContentRenderer content={siloContent} industrySlug={industry} />
            <Footer />
        </main>
    );
}
