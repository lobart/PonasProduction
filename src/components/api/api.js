import axios from "axios";



const instance=axios.create({
    withCredentials:true,
    baseURL: 'https://hivebot.info/api/v1/',
    //headers: {'API-KEY' : 'ed386668-28b4-45de-98f4-ed82c5c0ecc4'}
})

export const tagsAPI = {
    getTags(){
        return instance.get(`tags`)
            .then(response => { return (response.data)})},
    postTags(tags){
    return instance.post(`tags`, tags, {headers:
            {"Content-Type": 'application/json'}
    })
        .then(response => {
            console.log(response);
            return (response.data)})

    },
    upTags(id){
        return instance.put(`tags/up/${id}`, {}, {headers:
                {"Content-Type": 'application/json'}
        })
            .then(response => {
                console.log(response);
                return (response.data)})

    },
    downTags(id){
        return instance.put(`tags/down/${id}`, {}, {headers:
                {"Content-Type": 'application/json'}
        })
            .then(response => {
                console.log(response);
                return (response.data)})

    }
}