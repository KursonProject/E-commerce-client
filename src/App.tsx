import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "./hooks/useAuth"
import Loading from "./components/layouts/Loading"
import { AnimatePresence } from "framer-motion"

// Layouts
import InnerAnimation from "./components/templates/animated/InnerAnimated"
import AppNavbar from "./components/layouts/AppNavbar";
import AppFooter from "./components/layouts/AppFooter";

// Pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegsiterPage"
import ProductPage from "./pages/ProductPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductCartPage from "./pages/ProductCartPage"
import ProductModify from "./pages/ProductModify"
import ProductOrderPage from "./pages/ProductOrderPage"
import ProfilePage from "./pages/ProfilePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FaqPage from "./pages/FaqPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsOfServicePage from "./pages/TermsPage"
import LoginGoogleCallback from "./pages/auth/LoginGoogleCalback"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNavbar />
      <InnerAnimation className="min-h-screen">
        {children}
      </InnerAnimation>
      <AppFooter />
    </>
  );
};

const ProtectedRoute = () => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return <MainLayout><Outlet /></MainLayout>;
};

const PublicRoute = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const AuthRoute = () => (
  <InnerAnimation>
    <Outlet />
  </InnerAnimation>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Pages */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path="/products/details/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Route>

        {/* Protected Pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="/products/cart" element={<ProductCartPage />} />
          <Route path="/products/modify/:id" element={<ProductModify />} />
          <Route path="/products/order/:id" element={<ProductOrderPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Auth Pages */}
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Google Callback */}
        <Route path="/login/google" element={<LoginGoogleCallback />} />
        <Route path="/register/google" element={<LoginGoogleCallback />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;