import { createContext, useContext} from "react";

export interface ProductProps {
    id: string;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    features: string[];
    tools: { name: string; icon: string }[];
    rating: number;
    reviews?: {
        user: string;
        comment: string;
        rating: number;
        date: string;
    }[];
}

export interface OredersProps {
    id: string;
    user_id: string;
    product_id: string;
    stringOrder: string;
    total_price: number;
    status: "success" | "pending" | "fail" | "cancel";
    createAt: Date;
    updateAt: Date;
    product: ProductProps;

}

export interface ProductContextType {
    products: ProductProps[];
    loading: boolean;
    orders: OredersProps[];
    payment: ({ id }: { id: string }) => Promise<void>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};

export default useProduct;