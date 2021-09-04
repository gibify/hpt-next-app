import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

// import { SignInButton } from '../components/SignInButton';

import styles from '../styles/Home.module.scss';

const linkFacebook = 'https://www.facebook.com/groups/hebraicoparatodos';
const linkInstagram = 'https://www.instagram.com/hebraicooficial/';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className={styles.content}>
        <main>
            <div>
              <p>Shalom! Seja Bem Vindo ao</p>
              <Image 
              src="/logo-text.svg" 
              alt="Habraico Pra Todos"
              width={565}
              height={90}
              />
            </div>

            {/* <SignInButton /> */}
          </main>

        <aside className={styles.imageBag}>
          <Image
          src="/logo.svg" 
          alt="Estrela Bandeira de Israel"
          width={250}
          height={250}
          />
        
          <div className={styles.links}> 
            <a href={linkFacebook}><FaFacebook /></a>
            <a href={linkInstagram}><FaInstagram /></a>
          </div>
        </aside>
      </div>
    </div>
  )
}
