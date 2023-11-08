const Result = ({filtered}) => {

    console.log(filtered)

    if(filtered.length === 0) {

        return

    } else {

        if(filtered.length > 10){

            return (
                <><p>Too many matches, specify another filter”</p></>
            )
        } else {

            if(filtered.length >1 || filtered.length <10) {

                return (
                    <>
                    <div>
                     <ul>
                        {filtered.map((element => <li>{element.common.name}</li>))}
                      </ul>
                    </div>
                    </>
                )
            }
        }
    }


}

export default Result