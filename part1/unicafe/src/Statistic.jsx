const Statistic = (props) => {

    
        return(

            <>
             <tr>
                <th style={{textAlign: "left"}}>{props.name}</th>
                <td>{props.valor}</td>
             </tr>
            </>
            
        ) 

    
}

export default Statistic