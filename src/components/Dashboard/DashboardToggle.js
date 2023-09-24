import { Button, Drawer, Icon } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';
import Dashboard from '../Dashboard';

const DashboardToggle = () => {
  const {isOpen,open ,close } = useModalState();
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="Dashboard" />
        Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
         <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
