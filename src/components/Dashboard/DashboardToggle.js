import { Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '../Dashboard';
import { useCallback } from 'react';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {
  const {isOpen,open ,close } = useModalState();
  const ismobile =useMediaQuery('(max-width :992px');
  const onSignOut = useCallback(()=>{
   auth.signOut();
   alert("you are signed out",5000);
   close();
  },[close]);
  return (
    <>
      <Button block color="cyan" onClick={open}>
        <Icon icon="Dashboard" />
        Dashboard
      </Button>
      <Drawer full={ismobile} show={isOpen} onHide={close} placement="left">
         <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
