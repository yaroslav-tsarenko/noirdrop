import { ESIM_PRODUCTS } from "@/utils/esimProducts";
import ESimProductDetails from "@/components/widgets/esim/ESimProductDetails";

interface ESimProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ESimProductPage({ params }: ESimProductPageProps) {
    const { id } = await params;
    const product = ESIM_PRODUCTS.find((item) => item.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return <ESimProductDetails product={product} />;
}
