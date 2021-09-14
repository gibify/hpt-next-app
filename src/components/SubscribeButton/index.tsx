import { useRouter } from 'next/router';
import { FaTelegram } from 'react-icons/fa';

import styles from './styles.module.scss';

const telegramGrouplink = 'https://tttttt.me/gibifyofficial';

export function SubscribeButton() {
    const router = useRouter();

    function goToTelegramGroup() {
        router.push(`${telegramGrouplink}`);
    }

    return (
        <button 
            className={styles.container}
            onClick={goToTelegramGroup}
        >
            <FaTelegram />
            Entrar no grupo
        </button>
    )
}