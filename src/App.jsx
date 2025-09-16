import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner"
import ErrorPage from "./pages/ErrorPage"
import { Route, Routes } from "react-router-dom"
import { ProductsProvider } from "./context/ProductsProvider"
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = lazy(() => import("./pages/Dashboard"))
const AddProduct = lazy(() => import("./pages/AddProduct"))
const ProductDetails = lazy(() => import("./pages/ProductDetails"))

function App() {

  return (
    <ProductsProvider>
      <div className="min-h-[100vh-64px] bg-background text-foreground ">
        <ToastContainer
          position="top-right"
          transition={Slide}
          autoClose={6000}
          pauseOnHover
          closeButton
          className="z-50"
        />

        <Navbar />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
    </ProductsProvider>
  )
}

export default App
