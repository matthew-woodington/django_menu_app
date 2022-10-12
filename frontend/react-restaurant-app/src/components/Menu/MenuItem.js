import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MenuItem({ item, ...props }) {
  return (
    <li className="menu-item">
      <Card className="menu-card">
        <div className="card-content">
          <Card.Img className="menu-image" variant="top" src={item.image} />
          <Card.Body>
            <Card.Title className="card-title">{item.name}</Card.Title>
            <Card.Text className="card-body">{item.description}</Card.Text>
          </Card.Body>
        </div>
        <Card.Footer className="card-footer d-flex justify-content-between align-items-center">
          ${item.price.toFixed(2)}{" "}
          <Button
            variant="secondary"
            type="button"
            onClick={() => props.updateOrder(item.name, item.price)}
          >
            Add to Order
          </Button>
        </Card.Footer>
      </Card>
    </li>
  );
}

export default MenuItem;
