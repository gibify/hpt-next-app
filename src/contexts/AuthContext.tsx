import { User, Session } from '@supabase/supabase-js';
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';


interface AuthContextProps {
	user?: User;
	session?: Session;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider(props) {
	const [user, setUser] = useState<User>(null);
	const [session, setSession] = useState<Session>(null);

	useEffect(() => {
		const currentSession = supabase.auth.session();

		if(currentSession) {
			setSession(currentSession);
			setUser(currentSession.user);
		}

    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			console.log(data)
        setSession(newSession);
				setUser(newSession?.user);

				fetch('/api/auth', {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
					credentials: 'same-origin',
					body: JSON.stringify({ event,  session: newSession })
				});
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