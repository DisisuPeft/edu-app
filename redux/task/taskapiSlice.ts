// import { DataApiSlice } from "../services/MapapiSlice";
import { Task } from "../interface/TasksInterfaces";
import { apiSlice } from "../services/apiSlice";


const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createTask: builder.mutation({
            query: (payload) => ({
                url: '/task/create/',
                method: 'POST',
                body: payload
            })
        }),
        getTask: builder.query<Task [], void>({
            query: () => '/task/all/',
            transformResponse: (response) => {
                // console.log("Response:", Array.isArray(response));
                return Array.isArray(response) ? response : [];
            }
        }),
        editTask: builder.query<Task | null, number>({
            query: (id) => ({
                url: `/task/get/${id}/`,
                method: "GET",
                // params: {id}
            })
        }),
        updateTask: builder.mutation({
            query: (payload) => ({
                url: `/task/update/${payload.id}`,
                method: 'PATCH',
                body: payload
            })
        })
    })
})

export const {
    useCreateTaskMutation,
    useGetTaskQuery,
    useEditTaskQuery,
    useUpdateTaskMutation
} = taskApiSlice