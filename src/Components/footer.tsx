import styles from '../styles/components/Footer.module.css';
import Link from 'next/link';
import { ChevronUp} from 'react-iconly';

export default function Footer(){
   
  function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    return(
        <div className={styles.container}>
            <div className={styles.content}>
            <p><Link href="openSource" >Projetos open-source</Link></p>  
            <button type="button" onClick={scrollToTop}> 
            <ChevronUp set="two-tone" primaryColor="white"/>
             </button>
            </div>
        </div>
    );
}