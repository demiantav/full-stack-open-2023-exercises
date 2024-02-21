import axios from "axios";

const URL = `api/persons`;

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

    try {

        await axios.delete(`${URL}/${id}`);
        
    } catch (error) {

        console.log(error);
        
    }

    


}

const update = async (id,object) => {

    

        const res = await axios.put(`${URL}/${id}`,object);
        return res.data;


    


}

export default { get, post, supr, update}