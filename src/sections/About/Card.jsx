const Card = ({ img, title, desc, className }) => {
  return (
    <div className={className}>
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="w-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase mt-[-20px] mb-2">{title}</h2>
        <p className="mb-2">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
