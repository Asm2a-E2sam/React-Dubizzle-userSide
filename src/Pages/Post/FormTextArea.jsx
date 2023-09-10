import Form from "react-bootstrap/Form";

export default function FormTextArea(args) {
  return (
    <Form.Group>
      <Form.Label>{args.label}</Form.Label>
      <Form.Control as="textarea" rows={5} />
      <p className="fs-l">{args.msg}</p>
    </Form.Group>
  );
}
