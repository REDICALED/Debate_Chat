import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: "sessionPersist",
  storage: sessionStorage,
});

export const Topic = atom<string>({
  key: 'Topic',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const Pros = atom<boolean>({
  key: 'Pros',
  default: true,
  effects_UNSTABLE: [persistAtom],
});
