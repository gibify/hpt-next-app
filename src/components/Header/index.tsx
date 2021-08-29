import Link from 'next/link';

import styles from './styles.module.scss';

export const Header: React.FC = (props) => {
    return (
        <header className={styles.menu}>
           <nav>
               <Link href="">Sobre</Link>
           </nav>
        </header>
    )
}