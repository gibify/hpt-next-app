// import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useContext } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { AuthContext } from '../contexts/AuthContext';
import { SignInButton } from '../components/SignInButton';
import { supabase } from '../services/supabase';

import styles from '../styles/Home.module.scss';

const linkFacebook = 'https://www.facebook.com/groups/hebraicoparatodos';
const linkInstagram = 'https://www.instagram.com/hebraicooficial/';

export default function Home() {
  const router = useRouter()
  const { user } = useContext(AuthContext);

  async function signInWithFacebook() {
      const { error } = await supabase.auth.signIn({
        provider: 'facebook',
      });

      if(error) {
        return;
      }
  }

  if(user) {
    router.push('/signed');
  }

  return (
    <div className='wrapper'>
      <div className={styles.content}>
        <main>
            <div>
              <p>Shalom! Seja Bem Vindo ao</p>
              <Image 
                src="/logo-text.svg" 
                alt="Hebraico Pra Todos"
                width={565}
                height={90}
              />
            </div>

            <SignInButton onClick={signInWithFacebook}/>
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
// const { user } = await supabase.auth.api.getUserByCookie(context.req);

//   return {
//     props: { user }
//   }
// }
