export default function Section({
  className,
  prevTitle,
  title,
  paragraph,
  image,
}) {
  return (
    <section className={className}>
      <div className="wrapper">
        <div className={`${className}__content`}>
          <figure className={`${className}__img`}>
            <img src={image} alt="" />
          </figure>
          <div className={`${className}__description`}>
            <span className={`${className}__prevTitle`}>{prevTitle}</span>
            <h3 className={`${className}__title`}>{title}</h3>
            <p className={`${className}__paragraph`}>{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
