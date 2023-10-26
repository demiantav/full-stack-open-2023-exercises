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

    try {

        await axios.delete(`${URL}/${id}`);
        
    } catch (error) {

        console.log(error);
        
    }

    


}

const update = async (id,object) => {

    try {

        const res = await axios.put(`${URL}/${id}`,object);
        return res.data;
        
    } catch (error) {

        console.log(error)
        
    }

    


}

export default { get, post, supr, update}