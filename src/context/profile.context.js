import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

//providor that will provide profilecontext to all its children

export const ProfileProvider = ({ children }) => {
  const [profile, setProfiles] = useState(false);

  return <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>;
};


export const useProfile =  () => useContext(ProfileContext);