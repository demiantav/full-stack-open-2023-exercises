import Statistic from "./Statistic";

const Statistics = ({total,good,neutral,bad}) => {

    

    if(total === 0) {

        return (

            <><p>No hay nada</p></>
        )

    } else {

        return (
          <>
             <table>
                <tbody>
                <Statistic name={"good"} valor={good}/>
              <Statistic name={"neutral"} valor={neutral}/>
              <Statistic name={"bad"} valor={bad}/>
              <Statistic name={"total"} valor={total}/>
              <Statistic name={"average"} valor={total/3}/>
              <Statistic name={"porcentage"} valor={(good*50)/100+"%"}/>

                </tbody>
              

            </table>
          </>
        )
    }



}



export default Statistics;