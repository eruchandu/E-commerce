import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from "./Rating";
function Product(props)
{
    const {product}=props;
    return ( <Card key={product.slug} className="product">
    <Link to={`/product/slug/${product.slug}`}><img src={product.image}></img> </Link>
    
    {/* <div className="product-info"> */}
    <Card.Body>
    <Link to={`/product/slug/${product.slug}`}>${product.name}</Link>
    
    <Card.Title> <strong>${product.price} </strong></Card.Title>
    <Card.Text> {product.brand}</Card.Text>
    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
    <Button className="btn btn-warning btn-outline-danger"> Add to cart</Button>
    </Card.Body>
    {/* </div> */}
    </Card>);

}
export default Product;