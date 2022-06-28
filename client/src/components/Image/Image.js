import './image.css';

export default function Image({ width, height, alt, image }) {
  return (
    <img
      className="containerImg"
      src={image}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
