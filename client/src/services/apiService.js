import axios from "axios";
export class ApiService {
    constructor(props) {
        this.client=axios.create();
    }
    fetchDataFromApi(url,body) {

    }
}