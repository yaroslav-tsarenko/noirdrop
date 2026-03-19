import React from 'react';
import SignIn from '@/components/widgets/sign-in/SignIn';

type SignInPageProps = {
    searchParams?: Promise<{ registered?: string }>;
};

const Page = async ({ searchParams }: SignInPageProps) => {
    const params = searchParams ? await searchParams : undefined;

    return (
        <SignIn registered={params?.registered === "1"} />
    );
};

export default Page;
