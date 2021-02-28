import styles from '../styles/components/Profile.module.css';

export function Profile() {
     
    return (
        <div>
            
            <div className={styles.photo}>
                <div className={styles.profileContainer}>
                    <img src="https://avatars.githubusercontent.com/u/55332682?s=400&u=b7c344b960fec4a099a5cca57fbca6f1a7e172ee&v=4" alt="Fillipe Augusto" />
                </div>
            </div>

            <h1 className={styles.profileName}>Fillipe Augusto</h1>
            <span className={styles.profilespan}>Software Developer</span>
            <div className={styles.TagContainer}>
            <ul className={styles.tags}>
                <li><a href="#" className={`${styles.tag} ${styles.a}` }>React JS</a></li>
                <li><a href="#" className={`${styles.tag} ${styles.b}`}>Next JS</a></li>
                <li><a href="#" className={`${styles.tag} ${styles.c}`}>Javascript</a></li>
            </ul>
            </div>
            
            <h2 className={styles.profileDescription}> Apaixonado por tecnologia e como ela transforma a humanidade</h2>
           
            <div className={styles.abt}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <symbol viewBox="0 0 24 24" id="expand-more">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><path d="M0 0h24v24H0z" fill="none" />
                    </symbol>
                    <symbol viewBox="0 0 24 24" id="close">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" />
                    </symbol>
                </svg>
            </div>

            <details open>
                <summary>
                    sobre
    <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
                    <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
                </summary>
                <p> Olá Me chamo Fillipe Augusto atualmente cursando Engenharia de software
                no 7º semestre moro em Brasília-DF, Facinado por novas tecnologias e 
                frameworks para o Front-end. 
                </p>
                <p>Minha paixão por programação começou principalmente pelo mundo dos games, foi ai que percebi
                    o quanto é divertido desenvolver tudo o que vier pela mente sem medo dos desafios e dos 
                    problemas enfrentados no caminho.  
                </p>
                
            </details>

            <details >
                <summary>
                    Objetivos
    <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
                    <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
                </summary>
                <p>Meu principal objetivo como Dev é criar soluções para ajudar pessoas resolverem seus problemas, 
                    mas também tornar sonhos que estavam no papel em realidade com o poder da programação.
                </p>
                
            </details>

            <details >
                <summary>
                    Tecnologias
    <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
                    <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
                </summary>
                <p>Atualmente Estudando :</p> 
                <p> ( React.JS | Node JS | Next.js | Javascript).</p>
                <p>Experiência em :</p> 
                <p> (Mysql | Php | Css ).</p>
            </details>



        </div>



    );
}