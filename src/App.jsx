import { Routes, Route } from "react-router-dom";

import {
  Home, Dashboard, Orders,
  Products, Delivery, Marketing, Analytics, Payments,
  Tools, Discounts, Appearance, Audience, Plugins,
} from "./_root/pages/index.js";
import RootLayout from "./_root/pages/RootLayout.jsx";


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>

        <Route element={<RootLayout />} >
          <Route index path="/" element={<Home />} />


          {/* Add more routes as needed */}
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/appearance' element={<Appearance />} />
          <Route path='/audience' element={<Audience />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/discounts' element={<Discounts />} />


          <Route path='/marketing' element={<Marketing />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/plugins' element={<Plugins />} />
          <Route path='/products' element={<Products />} />
          <Route path='/tools' element={<Tools />} />

        </Route>
      </Routes>
    </main>
  )
}

export default App