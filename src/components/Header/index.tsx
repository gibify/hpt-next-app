import Link from 'next/link';

// import { FcAbout } from 'react-icons/fc';
// import { BiHomeSmile } from 'react-icons/bi';

import styles from './styles.module.scss';

interface HeaderProps {
    title: string;
    route: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={styles.container}>
            {props.title === 'voltar'}
            <Link href={props.route}>
                {props.title}
            </Link>
            {props.title === 'nosso grupo, saiba mais...'}
        </header>
        //  .
    )
}