export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-orange-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}