import type {Metadata} from "next";

import enBlog from "@/pageSchemas/blog/blogPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enBlog.meta);
}

export default function Page() {
    return (
        <>
            <PageCreator schemaMap={{tr: enBlog, en: enBlog}}/>
        </>
    )
}
