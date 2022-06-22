import Footer from "./Footer"
import Header from "./Header"

export async function getServerSideProps({ req, res }) {
  let loggedIn = false;
console.log(req)
  if (req.cookies.token)
loggedIn = true

  return { props: { loggedIn: loggedIn } }
}

const Page = ({ children,loggedIn }) => {
  return (
      <div className="flex h-screen flex-col justify-between">
        <Header/>
        <main className="mb-auto">{children}</main>
        <Footer/>
      </div>
  )
}

export default Page
