import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/motion/CustomCursor'
import ScrollToTop from '../components/motion/ScrollToTop'

export default function RootLayout() {
  return (
    <div className="bg-bg text-ink font-sans min-h-screen flex flex-col cursor-none-desktop">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
