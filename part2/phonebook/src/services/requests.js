import axios from "axios";

const URL = `http://localhost:3001/persons`;

const get = async () => {

    const request = await axios.get(URL);

    // console.log(request);

    return request.data
    
}

const post = async (contact) => {

    const request = await axios.post(URL,contact);

    console.log(request.data);

    return request.data;


}

const supr = async (id) => {

    const request = await axios.delete(`${URL}/${id}`);

    console.log(request.data);

    return request.data;


}

export default { get, post, supr}