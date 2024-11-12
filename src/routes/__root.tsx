import { AppSidebar } from '@/components/SideBar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import '../App.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <div className='p-2 flex gap-2'></div>
        <hr />
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  ),
});
