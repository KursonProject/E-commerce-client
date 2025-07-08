// contexts/ProductContext.tsx
import { useEffect, useState } from "react";
import { ProductContext, type OredersProps, type ProductProps } from "@/hooks/useProduct";
import Cookies from "js-cookie";
const API_URI = import.meta.env.VITE_API_URI;


export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<ProductProps[]>([])
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<OredersProps[]>([])

    useEffect(() => {
        const getAllProducts = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_URI}/public/product`, {
                    method: "GET",
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/json",
                    },
                })
                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.message)
                }
                const data = await response.json()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        getAllProducts()
    }, [])

    const payment = async ({ id }: { id: string }) => {
        setLoading(true)
        try {
            const response = await fetch(`${API_URI}/user/payment/transaction`, {
                method: "POST",
                credentials:"same-origin",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get("token")}`
                },
                body: JSON.stringify({
                    product_id: id
                })
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }
            const data = await response.json()
            if (data.token) {
                window.location = data.redirect_url
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setLoading(true)
        const getOrders = async () => {
            if (!Cookies.get("token")) {
                setLoading(false)
                return
            }
            try {
                const response = await fetch(`${API_URI}/user/payment/transaction`, {
                    method: "GET",
                    credentials:'include',
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/json",
                    },
                })
                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.message)
                }
                const data = await response.json()
                setOrders(data.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        getOrders()
    }, [])

    return (
        <ProductContext.Provider value={{ products, loading, orders, payment }}>
            {children}
        </ProductContext.Provider>
    )
};