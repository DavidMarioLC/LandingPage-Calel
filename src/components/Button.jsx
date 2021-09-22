export default function Button({ value, className = "" }) {
  return <button className={`btn ${"btn--" + className}`}>{value}</button>;
}
