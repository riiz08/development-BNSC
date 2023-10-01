const ScrollTop = () => {
  return (
    <svg
      onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 bg-blue-600 text-white rounded-full p-2 font-bold fixed bottom-6 right-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
      />
    </svg>
  );
};

export default ScrollTop;
