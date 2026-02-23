import type {Metadata} from "next";

import enHowItWorks from "@/pageSchemas/how-it-works/howItWorksPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enHowItWorks.meta);
}

export default function Page() {
    return (
        <>
            <PageCreator schemaMap={{tr: enHowItWorks, en: enHowItWorks}}/>
        </>
    )
}
