import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useUser } from '@/stores/user.store';

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
});

function RouteComponent() {
  const isLoggedIn = useUser((state) => state.loggedIn);
  const login = useUser((state) => state.login);
  const logout = useUser((state) => state.logout);
  return (
    <div>
      <h1>Auth</h1>
      {isLoggedIn ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </div>
  );
}
