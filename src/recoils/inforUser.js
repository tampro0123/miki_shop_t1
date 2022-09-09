import { atom } from 'recoil';
import persistAtom from 'src/utils/recoilPersist';
export const inforUser = atom({
    key: 'informationUser',
    default: {
        name: 'The Shyn',
        img: 'https://www.w3schools.com/howto/img_avatar.png',
        role: 'admin',
        email: 'shyn@example.com',
        password: '12345678',
        confirmPassword: '12345678'
    },
    effects_UNSTABLE: [persistAtom],
});
