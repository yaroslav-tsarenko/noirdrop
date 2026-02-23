import type {CSSProperties} from "react";


export interface TextButton {
    text: string;
    link: string;
    color?: "primary" | "secondary" | "tertiary";
}

export interface HeroButton {
    text: string;
    link: string;
    color?: "primary" | "secondary" | "tertiary";
}

export type HeroBlock = {
    type: "hero";
    bgImage?: string | number;
    title?: string;
    description?: string;
    buttons?: HeroButton[];
}

export interface TextBlock {
    type: "text";
    id?: string;
    title?: string;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    description?: string;
    bullets?: string[];
    descriptionWithBullets?: string[];
    centerTitle?: boolean;
    centerDescription?: boolean;
    centerBullets?: boolean;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    iconBg?: string;
    iconAlign?: "center" | "left" | "right";
    buttons?: TextButton[];
}

export type OgImageInput =
    | string
    | { title?: string; description?: string; bg?: string; color?: string };

export type MetaSchema = {
    title: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: OgImageInput;
};

export type MediaBlock = {
    type: "media";
    mediaType: "image" | "video";
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    controls?: boolean;
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
};

export type SliderBlock = {
    type: "slider";
    images: string[];
};

export type FaqBlock = {
    type: "faq";
    items: { question: string; answer: string }[];
};

export type CardBlock = {
    type: "card";
    image: string;
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
};

export type AlignInput = "left" | "right" | "center" | "start" | "end";

export type SectionBlock = {
    type: "section";
    align?: AlignInput;
    gap?: string;
    left?: PageBlock;
    right?: PageBlock;
};

export type GridItem = {
    block: PageBlock;
    colSpan?: number;
    key?: string;
};

export type LegacyCard = {
    image: string;
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
};

export type GridBlock = {
    type: "grid";
    columns: number;
    gap?: string;
    style?: CSSProperties;
    items?: GridItem[];
    cards?: LegacyCard[];
};

export type PricingBlock = {
    type: "pricing";
    variant?: "basic" | "highlight" | "premium";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
};

export type QRGeneratorBlock = {
    type: "qr-generator";
};


export type TestimonialItem = {
    avatar?: string;
    name: string;
    role?: string;
    text: string;
};

export type TestimonialsBlock = {
    type: "testimonials";
    title?: string;
    items: TestimonialItem[];
};

export type StepItem = {
    number: number;
    title: string;
    description?: string;
    iconName?: string;
};

export type StepsBlock = {
    type: "steps";
    title?: string;
    items: StepItem[];
};

export type RatesPerCountryBlock = {
    type: "rates-per-country";
};

export type PageBlock =
    | TextBlock
    | MediaBlock
    | SliderBlock
    | FaqBlock
    | CardBlock
    | SectionBlock
    | PricingBlock
    | GridBlock
    | HeroBlock
    | QRGeneratorBlock
    | TestimonialsBlock
    | StepsBlock
    | RatesPerCountryBlock;

export type PageSchema = {
    meta: MetaSchema;
    blocks: PageBlock[];
};
