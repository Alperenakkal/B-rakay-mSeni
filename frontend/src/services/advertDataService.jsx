import http from "./http";
class advertDataService {
    listAllAdvert(){
        return http.get('/advert');
    }
    addAdvert(data){
        return http.post("/advert",data);
    }
    getAdvert(){
        return http.get(`/advert/${id}`);
    }
}
export default new advertDataService();