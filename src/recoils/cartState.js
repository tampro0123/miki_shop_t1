import { atom, selector } from 'recoil';
//if you wanna persist state to local, import recoilPersist like below
import persistAtom from 'src/utils/recoilPersist';

export const cartState = atom({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [persistAtom], //auto persist and sync with local-storage
});

export const totalCart = selector({
  key: 'totalCart',
  get: ({ get }) => {
    const cart = get(cartState)
    return cart.length ? cart.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0) : 0
  }
})