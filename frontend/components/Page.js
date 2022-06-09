import Footer from "./Footer"
import Header from "./Header"

const Page = ({ children }) => {
  return (
      <div className="flex h-screen flex-col justify-between">
        <Header/>
        <main className="mb-auto">{children}</main>
        <Footer/>
      </div>
  )
}

export default Page
