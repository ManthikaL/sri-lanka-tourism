"use client";

import { useState, useEffect } from "react";
import { CartProvider } from "@/contexts/cart-context";
import { Layout } from "@/components/layout";
import { HomePage } from "../pages/home";
import { PlacesPage } from "../pages/places";
import { ActivitiesPage } from "../pages/activities";
import { HistoryPage } from "../pages/history";
import { ShopPage } from "../pages/shop";
import { AboutPage } from "../pages/about";
import { ProductPage } from "../pages/product";
import { CartPage } from "../pages/cart";
import { CheckoutPage } from "../pages/checkout";
import { EventsPage } from "../pages/events";
import { TransportPage } from "../pages/transport";
import { GalleryPage } from "../pages/gallery";
import { GuidesPage } from "../pages/guides";
import { BlogPage } from "../pages/blog";
import { WriteBlogPage } from "../pages/write-blog";
import "./globals.css";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";

      // Handle product routes like "product-1"
      if (hash.startsWith("product-")) {
        const id = hash.replace("product-", "");
        setCurrentRoute("product");
        setProductId(id);
      } else {
        setCurrentRoute(hash);
        setProductId("");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case "home":
        return <HomePage />;
      case "places":
        return <PlacesPage />;
      case "activities":
        return <ActivitiesPage />;
      case "history":
        return <HistoryPage />;
      case "shop":
        return <ShopPage />;
      case "about":
        return <AboutPage />;
      case "product":
        return <ProductPage productId={productId} />;
      case "cart":
        return <CartPage />;
      case "checkout":
        return <CheckoutPage />;
      case "events":
        return <EventsPage />;
      case "transport":
        return <TransportPage />;
      case "gallery":
        return <GalleryPage />;
      case "guides":
        return <GuidesPage />;
      case "blog":
        return <BlogPage />;
      case "write-blog":
        return <WriteBlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <CartProvider>
      <Layout>{renderPage()}</Layout>
    </CartProvider>
  );
}
