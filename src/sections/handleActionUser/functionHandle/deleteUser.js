import axiosAuth from 'src/utils/axios';
function deleteUser(idUser) {
    const reqDelete = axiosAuth({
        method: 'DELETE',
        url: `/api/user/delete?id=${idUser}`
    })
        .then(res => console.log(res, idUser))
}
export default deleteUser
