import { ListGroup, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => {
return (
<dib className="">
<h3 className="text-center">Hey!</h3>
<ListGroup as="ol" numbered>
<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
<div className="ms-2 me-auto">
<div className="fw-bold">Subheading</div>
Cras justo odio
</div>
<Badge bg="primary" pill>
14
</Badge>
</ListGroup.Item>
<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
<div className="ms-2 me-auto">
<div className="fw-bold">Subheading</div>
Cras justo odio
</div>
<Badge bg="primary" pill>
14
</Badge>
</ListGroup.Item>
<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
<div className="ms-2 me-auto">
<div className="fw-bold">Subheading</div>
Cras justo odio
</div>
<Badge bg="primary" pill>
14
</Badge>
</ListGroup.Item>
</ListGroup>
<Link to="/list">
<Button variant="secondary text-center" size="lg">
Show all candidates
</Button>
</Link>
</dib>
);
};

export default Main;
