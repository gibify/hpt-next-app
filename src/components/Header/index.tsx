import Link from 'next/link';
import { useRouter }  from 'next/router';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
    const router = useRouter();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.link}>
                    {
                        router.pathname === '/' && 
                        <Link href="/rules">Regras</Link>
                    }
                    {
                        router.pathname === '/' &&
                        <Link href="/about">Sobre</Link>
                    }
                    {
                        router.pathname === '/rules' &&
                        <Link href="/">Home</Link>
                    } 
                    {
                        router.pathname === '/about' && 
                        <Link href="/">Home</Link>
                    }  
                </div>
            </div>
        </header>
    )
}