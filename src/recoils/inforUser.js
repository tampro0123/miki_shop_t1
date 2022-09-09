import { atom } from 'recoil';
import persistAtom from 'src/utils/recoilPersist';
export const inforUser = atom({
    key: 'informationUser',
    default: {
    },
    effects_UNSTABLE: [persistAtom],
});
