import type {Metadata} from "next";
import enPrivacy from "@/pageSchemas/privacy-policy/privacyPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enPrivacy.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ tr: enPrivacy, en: enPrivacy }} />;
}

