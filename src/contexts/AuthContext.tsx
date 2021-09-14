import { User, Session } from '@supabase/supabase-js';
import { createContext, ReactChild, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';


interface AuthContextProps {
	user?: User;
	session?: Session;
}

interface Props {
	children: ReactChild;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider(props: Props) {
	const [user, setUser] = useState<User>();
	const [session, setSession] = useState<Session>();

	useEffect(() => {
		const currentSession = supabase.auth.session();

		if(currentSession) {
			setSession(currentSession);
			setUser(currentSession.user);
		}

    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
        setSession(newSession);
				setUser(newSession?.user);

				fetch('/api/auth', {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
					credentials: 'same-origin',
					body: JSON.stringify({ event, session: newSession })
				})
		});

		return () => {
			data.unsubscribe();
		}
}, [])

	return (
		<AuthContext.Provider value={{ user, session }}>
				{props.children}
		</AuthContext.Provider>
	)
}