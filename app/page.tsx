import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-secondary-800 rounded-lg shadow-xl border border-secondary-700 min-h-[calc(100vh-12rem)]">
        <div className="flex flex-col items-center justify-center p-8 md:p-16">
          <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Folder Browser
        </h1>
        <p className="text-lg text-secondary-300 max-w-2xl">
          Navigate through digital pathways with an intuitive interface
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg">
            Get Started
          </button>
          <button className="border border-secondary-600 hover:border-secondary-500 hover:bg-secondary-700 text-secondary-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Learn More
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
