import Form from "react-bootstrap/Form";

export default function FormInputPrice(args) {
  return (
    <Form.Group>
      <Form.Label>{args.label}</Form.Label>
      <div className="form-control d-flex align-items-center">
        <span className="p-1 border-end">{args.currency}</span>
        <input type="number" className="form-control border-0"/>
      </div>
      <p className="fs-l">{args.msg}</p>
    </Form.Group>
  );
}
