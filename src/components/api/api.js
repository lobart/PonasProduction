import axios from "axios";



const instance=axios.create({
    //withCredentials:true,
    baseURL:  'https://hivebot.info/api/v1/'//'http://0.0.0.0:5005/api/v1/',
    //headers: {"Access-Control-Allow-Origin": "*"}
})

export const tagsAPI = {
    getTags(){
        return instance.get(`tags` )
            .then(response => {
                console.log(response);
                return (response.data)})},
    postTag(name){
    return instance.post(`tags`, {name : name}, {headers:
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