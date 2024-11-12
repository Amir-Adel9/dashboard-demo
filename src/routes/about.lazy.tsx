import { createLazyFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/input';
import { useUser } from '@/stores/user.store';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  const updateName = useUser((state) => state.updateName);
  const name = useUser((state) => state.name);
  const isLoggedIn = useUser((state) => state.loggedIn);
  return (
    <div className='p-2 text-red-500 '>
      Hello from About!
      <Input
        onChange={(e) => {
          updateName({ name: e.target.value });
        }}
        defaultValue={name}
      />
      {isLoggedIn ? <p>Logged in 🔒</p> : <p>Logged out 🔓</p>}
    </div>
  );
}
