import { Button } from "react-bootstrap";

const RemoveButton = ({ onSubmit }) => {
  return (
    <>
      <Button variant="danger" onClick={onSubmit}>
        Delete user
      </Button>
    </>
  );
};

export default RemoveButton;
