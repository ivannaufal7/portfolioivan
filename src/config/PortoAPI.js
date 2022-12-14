import api from '.'

export default{
    find: () => api.get("/api/posts/?populate=*").then(res => res.data),
    detail: (id) => api.get(`/api/posts/${id}/?populate=*`).then(res => res.data),
    findSpecialist: () => api.get("/api/specialists/?populate=*").then(res => res.data),
    findReview: () => api.get("api/testimonis/?populate=*").then(res => res.data)
}