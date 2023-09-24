import { Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '../Dashboard';

const DashboardToggle = () => {
  const {isOpen,open ,close } = useModalState();
  const ismobile =useMediaQuery('(max-width :992px');
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="Dashboard" />
        Dashboard
      </Button>
      <Drawer full={ismobile} show={isOpen} onHide={close} placement="left">
         <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
