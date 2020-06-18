import * as axios from "axios/index";


const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Authorization: "Bearer " +
        // ПРОБЕЛ!!
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTU5MTY0MTk4NywiZXhwIjoxNjMxNjQxNTg3fQ.bFaBG0qczYzsb1FuriPI_v_FRG4FULwk8waW8IhngZE'
    },
})

// получение списка юзеров
export const usersAPI = {

    getUsers(pageNumber, pageSize) {
        return instance.get(`users?_page=${pageNumber}&_limit=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    toFollow(userId) {
        return instance.patch(
            `folowed/${userId}`,
            {
                id: userId,
                follow: "true"
            }
        )
    },

    toUnFollow(userId) {
        return instance.patch(
            `folowed/${userId}`,
            {
                id: userId,
                follow: "false"
            }
        )
    }
};


export const profileAPI = {

/*    toLogin(email, password) {
        return instance.post(`auth/login`, {
            email: 'nilson@email.com',
            password: 'nilson'
        })
    },*/

    toLogin(email, password) {
        return instance.post(`auth/login`,
            {email:email, password: password}
        )
    },

    toLogout() {
        return instance.delete(`auth/login`)
    },

    getProfileUser(userId) {

        return instance.get(
            `users/` + userId
        )
    },


    getStatus(userId) {
        return instance.get(
            `status/${userId}`
        )
    },

    updateStatus(userId, statusMessage) {
        return instance.patch(
            `status/${userId}`,
            {
                id: userId,
                status: statusMessage
            }
        )
    }


};





