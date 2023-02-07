const Quote = ({ quote }) => {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="rounded-lg p-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <img
            alt="Man"
            src={quote.img}
            className="aspect-square w-full rounded-lg object-cover shadow-2xl"
          />

          <blockquote className="sm:col-span-2">
            <p className="text-xl font-medium sm:text-2xl">{quote.text}</p>

            <cite className="mt-8 inline-flex items-center not-italic">
              <span className="hidden h-0.5 w-6 bg-primary sm:inline-block"></span>
              <p className="text-sm capitalize sm:ml-3">
                <strong>{quote.chef}</strong>, {quote.title}.
              </p>
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Quote;
