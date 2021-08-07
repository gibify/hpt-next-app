import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { SignInButton } from '../components/SignInButton';

import styles from '../styles/Home.module.scss';

const linkFacebook = 'https://www.facebook.com/groups/hebraicoparatodos';
const linkInstagram = 'https://www.instagram.com/hebraicooficial/';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div >
          <p>Shalom! Seja Bem Vindo ao</p>
          <img src="/logo-text.svg" alt="Habraico Pra Todos"/>

          <SignInButton />
        </div>

        <div className={styles.imageBag}>
          <img src="/logo.svg" alt="Estrela Bandeira de Israel"/>
        
          <div>
            <a href={linkFacebook}><FaFacebook /></a>
            <a href={linkInstagram}><FaInstagram /></a>
          </div>
        </div>
      </main>
    </div>
  )
}
