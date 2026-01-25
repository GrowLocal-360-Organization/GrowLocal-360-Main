export interface SiloSection {
    h2: string;
    content: string;
}

export interface SiloPage {
    slug: string;
    industry: string;
    seoTitle: string;
    seoDescription: string;
    h1: string;
    intro: string;
    sections: SiloSection[];
    ctaText: string;
}

export interface IndustrySiloContent {
    industry: string;
    industryName: string;
    pages: SiloPage[];
}
