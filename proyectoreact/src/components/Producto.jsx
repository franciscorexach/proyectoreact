import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Producto = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Botín Adidas</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;


// const Producto = ({precio, nombre, categoria, tag, imagen}) => {
//     return (<div className="card">
//         <div className="card__top">
//             <img src={imagen} alt="Botines" />
//             <span className="card__price">{precio}</span>
//         </div>
//         <div className="card__content">
//             <span className="card__name">{nombre}</span>
//             <span className="card__category">{categoria}</span>
        
//                 <span className="card__tag">{tag}</span>
            
//         </div>
//     </div>)
// }

// export default Producto