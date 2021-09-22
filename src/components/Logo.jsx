export default function Logo({ logo, height, width, title, alt }) {
  return (
    <img
      className="header__logo"
      src={logo}
      height={height}
      width={width}
      title={title}
      alt={alt}
    />
  );
}
