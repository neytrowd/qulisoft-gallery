import React from 'react';
import { PageProps } from './page.props';
import styles from './page.module.scss';

const Page: React.FC<PageProps> = ({ title, children }) => {
   return (
      <div className={styles.root}>
         <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
         </header>

         <div>{children}</div>

         <footer className={styles.footer}>
            <div className={styles.copyright}>
               <a rel="noreferrer" target="_blank" href="http://qulisoft.com/">
                  &copy; Qulisoft {new Date().getFullYear()}
               </a>
            </div>
            <div className={styles.developer}>
               <a rel="noreferrer" target="_blank" href="https://github.com/neytrowd">
                  Made with ❤️ by neyt
               </a>
            </div>
         </footer>
      </div>
   );
};

export default Page;
