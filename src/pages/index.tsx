import { Profile } from "../Components/Profile";
import Head from 'next/head';
import ProjectsOpenSource from "../Components/ProjectsOpenSource";
import Footer from "../Components/footer";


export default function Home() {
  return (
    <div>
      <Head>
      
        <title>Fillipe Augusto</title>
      </Head>
      <Profile/>
      <ProjectsOpenSource />
      <Footer/>
    </div>
  )
}
