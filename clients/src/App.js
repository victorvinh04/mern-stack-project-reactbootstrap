import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollButton from "./components/ScrollButton";
import RoutesWithUser from "./components/user/RoutesWithUser";
import {
  CartPage,
  LoginPage,
  ProductDetailsPage,
  ProductListPage,
  RegisterPage,
} from "./pages";
import {
  AdminAnalyticsPage,
  AdminChatsPage,
  AdminCreateProductPage,
  AdminEditProductPage,
  AdminEditUserPage,
  AdminOrderDetailsPage,
  AdminOrdersPage,
  AdminProductsPage,
  AdminUsersPage,
} from "./pages/admin";

import HomePage from "./pages/HomePage";
import {
  UserCartDetailsPage,
  UserOrderDetailsPage,
  UserOrdersPage,
  UserProfilePage,
} from "./pages/user";

// utils
// import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<RoutesWithUser />}>
          {/* publicly available routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        {/* <Route path="/" component={HomePage} />  in previous versions of react-router-dom */}
        {/* user protected routes: */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin protected routes: */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
