import { ListGroup, Badge } from "react-bootstrap";

const List = () => {
return (
<di className="">
<h3>Hey!</h3>
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
</di>
);
};

export default List;
