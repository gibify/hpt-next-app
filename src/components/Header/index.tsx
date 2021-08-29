import Image from 'next/image';

import styles from './styles.module.scss';

export const Header: React.FC = (props) => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image 
                    src="/logo-text-white.svg"
                    alt="logo branco"
                    width={250}
                    height={80}
                />
           </div>
        </header>
    )
}