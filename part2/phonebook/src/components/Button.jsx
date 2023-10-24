import phoneService from '../services/requests.js'

function Button ({id}){

    const wantToDelete =  async (id) => {
       
         const res = await phoneService.supr(id)

        console.log(id)
        


    }

    return <><button onClick={() => wantToDelete(id)}>Delete</button></>

}

export default Button;