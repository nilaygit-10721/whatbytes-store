import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p
        className="text-8xl font-black mb-4"
        style={{ color: "var(--primary)" }}
      >
        404
      </p>
      <h1 className="text-2xl font-bold text-gray-700 mb-2">Page not found</h1>
      <p className="text-gray-400 mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        id="not-found-home"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <Home size={16} />
        Back to Home
      </Link>
    </div>
  );
}
