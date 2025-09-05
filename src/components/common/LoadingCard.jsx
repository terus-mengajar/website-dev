export default function LoadingCard({cols = 4}) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-6`}>
    {[...Array(cols*2)].map((_, i) => (
      <div
        key={i}
        className="rounded-lg p-3 flex flex-col items-center animate-pulse"
      >
        {/* Thumbnail placeholder */}
        <div className="w-40 h-24 bg-gray-300 rounded mb-6"></div>
        {/* Nama game */}
        <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
        {/* Jumlah main */}
        <div className="h-3 w-16 bg-gray-200 rounded mb-4"></div>
        {/* Tombol */}
        <div className="h-7 w-full bg-gray-300 rounded-lg"></div>
      </div>
    ))}
  </div>
  );
}
