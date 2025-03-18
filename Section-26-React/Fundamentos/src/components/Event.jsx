const Event = () => {
  
    const handleClick = () => {
        console.log("Clicou no segundo btn!");
    }

    const renderingSomething = ( x ) => {
        if( x ) {
            return <h1>Texto de Renderização 1</h1>;
        }else{
            return <h1>Texto de Renderização 2</h1>;
        }
    }
  
    return (
    <div>
        <div>
            <button onClick={ () => { console.log("Ocorreu um clique no btn!") } }>Clique Aqui!</button>
            <button onClick={ () => { handleClick() } }>Clique Aqui 2!</button>
            { renderingSomething(true) }
            { renderingSomething(false) }
        </div>
    </div>
  )
}

export default Event