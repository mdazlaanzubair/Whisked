const Quote = ({ quote }) => {
  return (
    <figure className="max-w-screen-md mx-auto text-center">
      <svg
        aria-hidden="true"
        className="w-12 h-12 mx-auto mb-3 text-primary"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p className="text-2xl italic font-medium ">{quote.text}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src={quote.img}
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2">
          <cite className="pr-3 font-medium">{quote.chef}</cite>
          <cite className="pl-3 text-sm font-light text-primary">
            {quote.title}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default Quote;
