

function Button ({id,del,name}){


    return <><button onClick={() => del(id,name)} >Delete</button></>

}

export default Button;