const Total = ({ parts }) => {

    /* FUNZIONAMENTO DI REDUCE
    
    array.reduce((accumulatore, elementoCorrente) => {
    // cosa fare ad ogni iterazione
    return nuovoValoreAccumulatore
    }, valoreIniziale)*/

    
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (

        <p><strong>total of {total} exercises</strong></p>

    )
}

export default Total