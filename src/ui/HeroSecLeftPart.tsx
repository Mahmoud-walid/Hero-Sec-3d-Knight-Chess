const HeroSecLeftPart = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-9 px-10">
      <h1 className="w-full text-6xl font-bold">
        Solution for everyone to manage their finances.
      </h1>
      <p>
        Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit
        amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci
        porta dapibus. Nulla quis lorem ut libero malesuada feugiat.
      </p>
      <div className="mr-auto flex flex-col gap-6 text-lg font-bold md:flex-row">
        <button className="rounded-2xl bg-red-700 px-7 py-2 text-white">
          Join Us
        </button>
        <button className="rounded-2xl border-1 border-red-700 bg-transparent px-7 py-2 text-red-700">
          Hire now
        </button>
      </div>
    </div>
  );
};

export default HeroSecLeftPart;
