import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
      <Link href="/" className="text-[#1D3557] hover:underline font-medium">
        ← Go Back to Home
      </Link>
    </div>
  );
}
