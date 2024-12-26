import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import './../public/css/bootstrap.min.css'
import './../public/vendors/css/vendors.min.css'
import './../public/vendors/css/daterangepicker.min.css'
import './../public/css/theme.min.css'

const Home = lazy(() => import('./pages/home'));
const Pelanggan = lazy(() => import('./pages/pelanggan'));
const PelangganForm = lazy(() => import('./pages/pelanggan/form'));
const Pembayaran = lazy(() => import('./pages/pesanan'));
const Invoice = lazy(() => import('./pages/pesanan/invoice'));
// const Invoice = lazy(() => import('./pages/produk'));
const Error404 = lazy(() => import('./pages/error/404'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pelanggan" element={<Pelanggan />} />
          <Route path="/pelanggan/form" element={<PelangganForm />} />
          <Route path="/pelanggan/form/:id" element={<Pelanggan />} />
          <Route path="/pelanggan/form/:id" element={<Pelanggan />} />

          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/pembayaran/invoice" element={<Invoice />} />



          {/* <Route path="/produk" element={<Produk />} /> */}


          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router >
  );
}

export default App