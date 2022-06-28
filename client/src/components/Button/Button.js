/* eslint-disable react/button-has-type */
import './button.css';

export default function Button({ type, children, id, className, onClick }) {
  return (
    <button type={type} id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
