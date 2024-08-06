import { atom } from 'recoil';
const maxindex = 5;
const minindex = 0;


export const Colorindex = atom<number>({
  key: 'Colorindex',
  default: 0,
  effects: [
    ({onSet, setSelf}) => {
      onSet(Colorindex => {
        if (Colorindex > maxindex) {
          setSelf(minindex);
        }
      });
    },
  ],
});