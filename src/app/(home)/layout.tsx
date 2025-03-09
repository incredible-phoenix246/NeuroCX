import { Footer } from '@/components/miscellaneous/footer'
import Navbar from '@/components/navigation/navbar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
