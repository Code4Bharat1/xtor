function LinedBox() {
  const innerLines = Array.from({ length: 11 }); // 11 vertical lines inside

  return (
    <div className="w-full  flex justify-center py-10 bg-black">
      <div className="relative w-full max-w-6xl h-96 bg-black">
        {/* Rectangle border (left + right lines included) */}
        <div className="absolute inset-0 border-2 border-white" />

        {/* 11 inner vertical lines equally spaced */}
        {innerLines.map((_, i) => (
          <span
            key={i}
            className="absolute top-0 h-full w-px border-white bg-white"
            style={{ left: `${((i + 1) * 100) / 12}%` }} // 12 gaps -> place at 1/12 ... 11/12
          />
        ))}

        {/* If you want EXTRA lines outside the box, uncomment below */}
        {/* <span className="absolute top-0 -left-4 h-full w-px bg-black" />
        <span className="absolute top-0 -right-4 h-full w-px bg-black" /> */}
      </div>
    </div>
  );
}
export default LinedBox;
