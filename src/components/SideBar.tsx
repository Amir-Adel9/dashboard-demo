import {
  CreditCard,
  FileText,
  Home,
  Inbox,
  Layers,
  LayoutDashboard,
  Lock,
  PieChart,
  User,
  Users,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';
import { useUser } from '@/stores/user.store';

export function AppSidebar() {
  const user = useUser();
  return (
    <Sidebar variant='sidebar'>
      <SidebarHeader className='bg-foreground text-secondary'>
        <img
          src='https://lh3.googleusercontent.com/p/AF1QipP4GeTaOBi3ZPM4k01BvHCLoaExVMWIb40pedWr=s680-w680-h510'
          alt='profile'
          className='w-16 h-16 rounded-full mx-auto'
        />
      </SidebarHeader>
      <SidebarContent className='bg-foreground text-secondary'>
        <SidebarGroup>
          <SidebarGroupLabel className='text-accent'>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to='/' className='flex items-center'>
                    <Home className='mr-2 h-4 w-4' />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to='/about' className='flex items-center'>
                    <LayoutDashboard className='mr-2 h-4 w-4' />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-accent'>
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#' className='flex items-center'>
                    <PieChart className='mr-2 h-4 w-4' />
                    <span>Statistics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to={`/customer/$id`}
                    params={{
                      id: Math.floor(Math.random() * 100).toLocaleString(),
                    }}
                    className='flex items-center'
                  >
                    <Users className='mr-2 h-4 w-4' />
                    <span>Customers</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-accent'>
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#' className='flex items-center'>
                    <Layers className='mr-2 h-4 w-4' />
                    <span>Projects</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#' className='flex items-center'>
                    <CreditCard className='mr-2 h-4 w-4' />
                    <span>Billing</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-accent'>
            Resources
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#' className='flex items-center'>
                    <FileText className='mr-2 h-4 w-4' />
                    <span>Documentation</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to='/auth' className='flex items-center'>
                    <Lock className='mr-2 h-4 w-4' />
                    <span>Auth</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='bg-foreground text-secondary'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#' className='flex items-center'>
                    <Lock className='mr-2 h-4 w-4' />
                    <span>Auth State: {user.loggedIn ? '🔒' : '🔓'}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#' className='flex items-center'>
                    <User className='mr-2 h-4 w-4' />
                    <span>Name: {user.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
