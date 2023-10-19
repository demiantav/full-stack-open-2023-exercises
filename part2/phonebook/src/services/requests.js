import axios from "axios";

const URL = `http://localhost:3001/persons`;

const get = async () => {

    const request = await axios.get(URL);

    console.log(request);

    return request.data
    
}

export default { get }