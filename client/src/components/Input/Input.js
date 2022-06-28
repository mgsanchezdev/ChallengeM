import './input.css';

export default function Input({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
}) {
  return (
    <input
      className="containerInput"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
