import { atom } from "recoil";
//if you wanna persist state to local, import recoilPersist like below
import persistAtom from 'src/utils/recoilPersist';

export const dataUser = atom({
    key: 'userState',
    default: {},
    effects_UNSTABLE: [persistAtom], //auto persist and sync with local-storage
});