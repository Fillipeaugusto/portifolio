import { Profile } from "../Components/Profile";
import Head from 'next/head';
import Footer from "../Components/footer";


export default function Home() {
  return (
    <div>
      <Head>
      
        <title>Fillipe Augusto</title>
      </Head>
      <Profile/>
      <Footer />
    </div>
  )
}
