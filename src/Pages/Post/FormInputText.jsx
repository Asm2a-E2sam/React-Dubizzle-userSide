import Form from "react-bootstrap/Form";

export default function FormInputText(args) {
  return (
    <Form.Group>
      <Form.Label>{args.label}</Form.Label>
      <Form.Control type="text" />
      <p className="fs-l">{args.msg}</p>
    </Form.Group>
  );
}
