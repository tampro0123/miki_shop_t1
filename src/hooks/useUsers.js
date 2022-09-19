import axiosAuth from 'src/utils/axios';
import useSWR from 'swr';
import axios from 'axios'
const fetcher = async (url, accessToken) => {
    const res = await axiosAuth({
        method: 'GET',
        url: url,
        headers: accessToken ?
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + accessToken,
                withCredentials: true,
            }
            :
            {
                'Content-Type': 'application/json',
                withCredentials: true,
            }
    })
    return res.data
};

const useUsers = (query = '', accessToken = '') => {
    const { data, error } = useSWR([query ? `http://localhost:3000/api/user/${query}` : null, accessToken], fetcher, { refreshInterval: 500 })
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
};

export default useUsers