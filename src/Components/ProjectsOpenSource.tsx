import styles from '../styles/components/SocialMedia.module.css';



export default function ProjectsOpenSource(){
    return(
    <div className={styles.footerContainer}>
      <div className={styles.buttonGit}>
         <a target="_blank" href="https://github.com/Fillipeaugusto"><img src="logos/git33.svg" alt=""/>  GitHub</a>
      </div>
      <div className={styles.buttonLink}>
         <a target="_blank" href="https://www.linkedin.com/in/fillipe-augusto-a0bba7169">Linkedin</a>
      </div>
     </div>
    );
}