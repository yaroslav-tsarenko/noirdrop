"use client";

import React from "react";
import { media as mediaMap } from "@/resources/media";
import Media from "../image/Media";
import Section from "../section/Section";
import Text from "../text/Text";
import Card from "../card/Card";
import Grid from "../grid/Grid";
import Slider from "../slider/Slider";
import FAQ from "../faq/FAQ";
import PricingCard from "../pricing-card/PricingCard";
import QRGenerator from "@/components/widgets/qr-generator/QRGenerator";
import Testimonials from "../testimonials/Testimonials";
import Steps from "../steps/Steps";
import RatesPerCountryBlock from "./RatesPerCountryBlock";

import type {
    PageSchema,
    PageBlock,
    MediaBlock,
    TextBlock,
    SectionBlock,
    GridBlock,
    SliderBlock,
    FaqBlock,
    CardBlock,
    PricingBlock,
    TestimonialsBlock,
    StepsBlock,
    GridItem,
    AlignInput,
    HeroBlock,
    QRGeneratorBlock,
    RatesPerCountryBlock as RatesPerCountryBlockType,
} from "./types";
import Hero from "@/components/constructor/hero/Hero";
import FadeIn from "@/components/constructor/fade-in/FadeIn";
import { StaticImageData } from "next/image";

// ------------------- helpers -------------------

function resolveMedia(key?: string) {
    if (!key) return undefined;
    const v = (mediaMap as Record<string, unknown>)[key];
    if (!v && process.env.NODE_ENV !== "production") {
        console.warn(`media asset not found: ${key}`);
    }
    return v as string | StaticImageData | undefined;
}

function RenderHero(b: HeroBlock) {
    return (
        <Hero
            bgImage={b.bgImage}
            title={b.title}
            description={b.description}
            buttons={b.buttons}
        />
    );
}



function RenderTestimonials(b: TestimonialsBlock) {
    return <Testimonials title={b.title} items={b.items} />;
}

function RenderSteps(b: StepsBlock) {
    return <Steps title={b.title} items={b.items} />;
}


function RenderText(b: TextBlock) {
    return (
        <Text
            id={b.id}
            title={b.title}
            description={b.description}
            bullets={b.bullets}
            centerTitle={b.centerTitle}
            centerDescription={b.centerDescription}
            centerBullets={b.centerBullets}
            iconName={b.iconName}
            iconSize={b.iconSize}
            iconAlign={b.iconAlign}
            buttons={b.buttons}
            iconColor={b.iconColor}
            iconBg={b.iconBg}
        />
    );
}

function RenderMedia(b: MediaBlock) {
    return (
        <Media
            src={resolveMedia(b.src)}
            type={b.mediaType}
            width={b.width}
            height={b.height}
            alt={b.alt}
            controls={b.controls}
            loop={b.loop}
            autoPlay={b.autoPlay}
            muted={b.muted}
        />
    );
}

function RenderSlider(b: SliderBlock) {
    return <Slider images={b.images.map(resolveMedia)} />;
}

function RenderFaq(b: FaqBlock) {
    return <FAQ items={b.items} />;
}

function RenderCard(b: CardBlock) {
    return (
        <Card
            image={resolveMedia(b.image)}
            title={b.title}
            description={b.description}
            buttonLink={b.buttonLink}
            buttonText={b.buttonText}
        />
    );
}

function RenderPricingCard(b: PricingBlock) {
    return (
        <PricingCard
            variant={b.variant}
            title={b.title}
            price={b.price}
            tokens={b.tokens}
            description={b.description}
            features={b.features}
            buttonText={b.buttonText}
            buttonLink={b.buttonLink}
        />
    );
}

function RenderQRGenerator() {
    return <QRGenerator />;
}

function RenderRatesPerCountry(b: RatesPerCountryBlockType) {
    return (
        <div id={b.id}>
            <RatesPerCountryBlock />
        </div>
    );
}

// ------------------- grid + section -------------------

function mapAlign(a?: AlignInput): "center" | "start" | "end" | undefined {
    if (!a) return undefined;
    if (a === "left") return "start";
    if (a === "right") return "end";
    return a;
}

function RenderSection(b: SectionBlock) {
    const left = b.left ? renderBlock(b.left, "left") : undefined;
    const right = b.right ? renderBlock(b.right, "right") : undefined;
    return <Section align={mapAlign(b.align)} gap={b.gap} left={left} right={right} />;
}

function RenderGrid(b: GridBlock) {
    const items: GridItem[] =
        (b.items && b.items.length > 0)
            ? b.items
            : (b.cards?.map((c, idx) => {
                if ("type" in c && c.type === "pricing") {
                    return {
                        key: c.title ?? String(idx),
                        block: c,
                    };
                }
                return {
                    key: c.title ?? String(idx),
                    block: {
                        type: "card",
                        image: c.image,
                        title: c.title,
                        description: c.description,
                        buttonLink: c.buttonLink,
                        buttonText: c.buttonText,
                    } as CardBlock,
                };
            }) ?? []);

    return (
        <div id={b.id}>
            <Grid columns={b.columns} gap={b.gap} style={b.style}>
                {items.map((item, i) => (
                    <div
                        key={item.key ?? i}
                        style={item.colSpan ? { gridColumn: `span ${item.colSpan}` } : undefined}
                    >
                        {renderBlock(item.block, item.key ?? i)}
                    </div>
                ))}
            </Grid>
        </div>
    );
}

// ------------------- switch -------------------


function renderBlock(block: PageBlock, key?: React.Key): React.ReactNode {
    switch (block.type) {
        case "text":
            return (
                <FadeIn key={key}>
                    <RenderText {...block} />
                </FadeIn>
            );
        case "media":
            return (
                <FadeIn key={key}>
                    <RenderMedia {...block} />
                </FadeIn>
            );
        case "slider":
            return (
                <FadeIn key={key}>
                    <RenderSlider {...block} />
                </FadeIn>
            );
        case "faq":
            return (
                <FadeIn key={key}>
                    <RenderFaq {...block} />
                </FadeIn>
            );
        case "card":
            return (
                <FadeIn key={key}>
                    <RenderCard {...block} />
                </FadeIn>
            );
        case "pricing":
            return (
                <FadeIn key={key}>
                    <RenderPricingCard {...block} />
                </FadeIn>
            );
        case "section":
            return (
                <FadeIn key={key}>
                    <RenderSection {...block} />
                </FadeIn>
            );
        case "grid":
            return (
                <FadeIn key={key}>
                    <RenderGrid {...block} />
                </FadeIn>
            );
        case "qr-generator":
            return (
                <FadeIn key={key}>
                    {RenderQRGenerator(block as QRGeneratorBlock)}
                </FadeIn>
            );
        case "hero":
            return (
                <FadeIn key={key}>
                    <RenderHero {...(block as HeroBlock)} />
                </FadeIn>
            );
        case "steps":
            return (
                <FadeIn key={key}>
                    <RenderSteps {...(block as StepsBlock)} />
                </FadeIn>
            );
        case "testimonials":
            return (
                <FadeIn key={key}>
                    <RenderTestimonials {...(block as TestimonialsBlock)} />
                </FadeIn>
            );
        case "rates-per-country":
            return (
                <FadeIn key={key}>
                    {RenderRatesPerCountry(block as RatesPerCountryBlockType)}
                </FadeIn>
            );
        default:
            return null;
    }
}

// ------------------- root -------------------

export default function PageRenderer({ schema }: { schema: PageSchema }) {
    return <>{schema.blocks.map((b, i) => renderBlock(b, i))}</>;
}
