import  { createContext, useContext, useEffect, useRef, useState } from 'react';
import { auth ,database} from '../misc/firebase';

const ProfileContext = createContext();

//providor that will provide profilecontext to all its children

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading ,setIsLoading] =useState(true);
  //using useEffect to get user from firebase when component mount
  useEffect(() => {
    let userRef;

  const authUnsub =  auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef=database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt } = snap.val();

          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if(userRef){
          userRef.off();
        }
        setProfile(null);
        setIsLoading(false);
      }
    });

    //cleanUP function --->when component unmount
    return () =>{
      authUnsub();
      if(userRef){
        userRef.off();
      }
    }
  }, []);

  return (
    <ProfileContext.Provider value={{profile, isLoading}}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
