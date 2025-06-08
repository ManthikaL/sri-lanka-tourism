import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { PlacesPage } from "@/pages/places"
import { ActivitiesPage } from "@/pages/activities"
import { HistoryPage } from "@/pages/history"
import { ShopPage } from "@/pages/shop"
import { AboutPage } from "@/pages/about"
import { ProductPage } from "@/pages/product"
import { CartPage } from "@/pages/cart"
import { CheckoutPage } from "@/pages/checkout"

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const placesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/places",
  component: PlacesPage,
})

const activitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/activities",
  component: ActivitiesPage,
})

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: HistoryPage,
})

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: ShopPage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
})

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$productId",
  component: ProductPage,
})

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
})

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  placesRoute,
  activitiesRoute,
  historyRoute,
  shopRoute,
  aboutRoute,
  productRoute,
  cartRoute,
  checkoutRoute,
])
