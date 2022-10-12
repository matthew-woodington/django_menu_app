import Nav from "react-bootstrap/Nav";

function MenuFilter({ updateFilter }) {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="/home" onClick={(e) => updateFilter("")}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="filter1" onClick={(e) => updateFilter("pizza")}>
          Pizza
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="filter2" onClick={(e) => updateFilter("appetizer")}>
          Appetizers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="filter3" onClick={(e) => updateFilter("salad")}>
          Salads
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="filter4" onClick={(e) => updateFilter("dessert")}>
          Dessert
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MenuFilter;
