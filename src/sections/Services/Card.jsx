

const Card = ({ svgPath, title, desc }) => {
  return (
    <div
      className="card hover:-translate-y-5 transition-all mx-auto h-[500px] mt-6 w-80 bg-base-100 rounded-xl shadow-xl"
    >
      <figure className="px-10 pt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 text-blue-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
        </svg>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title mt-[-20px] mb-2">{title}</h2>
        <p className="mb-2">{desc}</p>
        <div className="card-actions">
          <button className="btn rounded-md btn-primary">Readmore</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
