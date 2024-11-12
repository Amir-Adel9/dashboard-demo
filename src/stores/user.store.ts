import { create } from 'zustand';

interface UserStore {
  name: string;
  updateName: ({ name }: { name: string }) => void;
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useUser = create<UserStore>()((set) => ({
  name: 'Sample',
  updateName: ({ name }) => set({ name }),
  loggedIn: false,
  login: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false }),
}));
