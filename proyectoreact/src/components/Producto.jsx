const Producto = ({precio, nombre, categoria, tag, imagen}) => {
    return (<div className="card">
        <div className="card__top">
            <img src={imagen} alt="Botines" />
            <span className="card__price">{precio}</span>
        </div>
        <div className="card__content">
            <span className="card__name">{nombre}</span>
            <span className="card__category">{categoria}</span>
        
                <span className="card__tag">{tag}</span>
            
        </div>
    </div>)
}

export default Producto