import { GetServerSideProps } from "next";
import Image from "next/image";
import router from "next/router";
import { useContext, useState } from "react";
import { SignOutButton } from "../components/SignOutButton";
import { SubscribeButton } from "../components/SubscribeButton";
import { AuthContext } from "../contexts/AuthContext";
import { supabase } from "../services/supabase";

import styles from "../styles/Signed.module.scss";

export default function Signed() {
  const { user } = useContext(AuthContext);
  
  async function signOutFromFacebook() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return error;
    }

  }

  if(!user) {
    router.push('/'); 
  }
  
  return (
    <div className="wrapper">
      <div className={styles.content}>
            <p>Shalom, <br />
                <span >{user ? user.email : ''}</span>
              </p>
            <h1>Seja Bem Vindo ao</h1>
            <Image
              src="/logo-text.svg"
              alt="Habraico Pra Todos"
              width={565}
              height={90}
            />
            <div  className={styles.links}>
                <SubscribeButton />
                <SignOutButton onClick={signOutFromFacebook}/>
            </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if(!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: { }
  }
}

