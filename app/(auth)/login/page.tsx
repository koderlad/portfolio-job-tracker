import Link from "next/link";
export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <div className="form-container">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
            <Link
              href="/register"
              className="ml-4 text-sm text-blue-500 hover:text-blue-700"
            >
              Don&apos;t have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
