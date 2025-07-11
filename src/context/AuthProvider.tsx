import { AuthContext, type User } from "@/hooks/useAuth"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { middleUserFetch } from "./service/auth.service"

const API_URI = import.meta.env.VITE_API_URI


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState({
    login: "",
    register: "",
    logout: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


  function disableLoading(){
      setLoading(false)
  }
  useEffect(() => {
    middleUserFetch(API_URI + "/default/user").then((value) => {
      if (value.status) {
        setIsAuthenticated(true)
        setUser({email : value.userdata!.user_email,name : value.userdata!.username})
      }
    })
    setLoading(false);
  }, []);

   const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URI}/auth/login`, {
        credentials : 'include',
        method: "POST",
        credentials : 'include',
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
          user_email: email,
          user_password: password
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError({ ...error, login: errorData.message })
        throw new Error(errorData.message)
      }
      setIsAuthenticated(true)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URI}/auth/register`, {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          user_email: email,
          user_password: password
        }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        setError({ ...error, register: errorData.message })
        throw new Error(errorData.message)
      } else if (response.ok) {
        const resLogin = await fetch(`${API_URI}/auth/login`, {
          method: "POST",
          credentials : "include",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email: email,
            user_password: password
          }),
        })
        if (!resLogin.ok) {
          const errorLogin = await resLogin.json()
          setError({ ...error, login: errorLogin.message })
          throw new Error(errorLogin.message)
        }
        setIsAuthenticated(true)
        return true
      }

      setLoading(false)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const google = () => {
    setLoading(true)
    return window.location.href = `${API_URI}/auth/google?redirect=${window.location.href}`
  }

  const logout = async () => {
     const response = await fetch(`${API_URI}/auth/logout` ,{
        method : "POST",
        credentials : "include",
        headers :{
            "Content-Type" : "application/json"
        },
    })
    if (response.ok) {
      setUser(null)
      setIsAuthenticated(false)
      return <Navigate to={"/login"} />
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        login,
        register,
        google,
        logout,
        isAuthenticated,
        disableLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
