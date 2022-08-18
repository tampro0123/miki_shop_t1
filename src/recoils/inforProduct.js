import { atom } from 'recoil';
import persistAtom from 'src/utils/recoilPersist';
export const inforProduct = atom({
    key: 'informationProduct',
    default: {},
    effects_UNSTABLE: [persistAtom],
});
