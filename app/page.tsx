export default function Home() {
  return (
    <main>
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold">Alvaro Peña</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            Edit
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
      </header>
    </main>
  );
}
