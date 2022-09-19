import axios from "axios";
import { dataUser } from 'src/recoils/dataUser.js'
// import { useRecoilState } from 'recoil'
import jwt_decode from 'jwt-decode'
import useLocalStorage from 'src/hooks/useLocalStorage'
// const [valueUser, setValueUser] = useRecoilState(dataUser)

const user = useLocalStorage('recoil-persist', 'userState')
const accessToken = user?.accessToken
console.log(user)
const axiosAuth = axios.create({
    withCredentials: true,
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
    }
});

axiosAuth.interceptors.request.use(
    async (config) => {
        let date = new Date();
        let userInfor = user;
        const decodedToken = jwt_decode(accessToken);

        if (decodedToken.exp < date.getTime() / 1000) {
            const res = await axios({
                method: 'POST',
                url: '/api/auth/refreshToken',
                header: {
                    withCredentials: true,
                }
            });
            const newAccessToken = await res.data.accessToken
            // setValueUser({
            //     ...userInfor,
            //     accessToken: newAccessToken,
            // });
            localStorage.setItem('recoil-persist', JSON.stringify({
                userState: {
                    ...userInfor,
                    accessToken: newAccessToken,
                }
            }))
            const userInfors = useLocalStorage('recoil-persist', 'userState')
            console.log(userInfors)
            config.headers.Authorization = `Bearer ${newAccessToken}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosAuth;