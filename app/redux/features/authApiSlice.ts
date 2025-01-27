import { apiSlice } from "../services/apiSlice";

interface Role {
    id: number,
    name: string
}
// interface isAuth {
//     is_auth: booleand
// }
interface User {
    id: number,
    email: string,
    rol: Array<Role>
}

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query<User, void>({
            query: () => '/auth/users/'
        }),
        login: builder.mutation({
            query: ({email, password}) => ({
                url: '/auth/login/',
                method: 'POST',
                body: {email, password}
            })
        }),
        verify: builder.mutation({
            query: () => ({
                url: '/auth/verify/',
                method: 'POST'
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout/',
                method: 'POST'
            })
        })
    })
})

export const {
    useRetrieveUserQuery,
    useLoginMutation,
    useVerifyMutation,
    useLogoutMutation,
} = authApiSlice