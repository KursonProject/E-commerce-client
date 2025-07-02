import Loading from "@/components/layouts/Loading"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

const LoginGoogleCallback = () => {
    const [loading, setLoading] = useState(true)

    const token = useLocation().search.split("=")[1].split("&")[0]

    const saveToken = (token: string) => {
        Cookies.set("token", token, { expires: 7, path: "/", secure: false })
    }

    useEffect(() => {
        if (token) {
            saveToken(token)
            window.location.href = "/"
            setLoading(false)
        }
    }, [token])

    if (loading) {
        return <Loading />
    }
    if (!token) {
        return <Navigate to="/login" replace />
    }
    return <Navigate to="/" replace />
}

export default LoginGoogleCallback