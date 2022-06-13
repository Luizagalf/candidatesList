import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { inject, observer } from "mobx-react";

const Main = ({ candidatesList, getAllCandidates, isLoading }) => {
  useEffect(() => {
    getAllCandidates(5);
  }, []);

  return (
    <div className="">
      <h3 className="text-center">Hey!</h3>
      {isLoading ? (
        <p>Please, wait</p>
      ) : (
        <ListGroup as="ol" numbered>
          {candidatesList.map((item) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {item.lastName} {item.firstName} {item.Cole}
                </div>
                {item.birthDate}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Link to="/list">
        <Button variant="secondary text-center" size="lg">
          Show all candidates
        </Button>
      </Link>
    </div>
  );
};

export default inject(({ candidatesStore }) => {
  const { candidatesList, getAllCandidates, isLoading } = candidatesStore;

  return {
    candidatesList,
    getAllCandidates,
    isLoading
  };
})(observer(Main));
