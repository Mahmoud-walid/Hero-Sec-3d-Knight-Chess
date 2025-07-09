import { Outlet } from 'react-router';
import Navbar from './Navbar';

const AppLayout = () => {
  return (
    <div className="flex h-[100dvh] flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
