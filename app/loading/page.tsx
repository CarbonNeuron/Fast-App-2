import Loading from "../loading";

export default function LoadingDemo() {
  return (
    <div className="space-y-8">
      {/* Actual Loading Component */}
      <Loading />
      
      {/* Demo Info Overlay */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="p-4 bg-secondary-800/90 backdrop-blur-sm rounded-lg border border-secondary-700 max-w-md">
          <h3 className="text-sm font-semibold text-white mb-2">
            Loading Component Preview
          </h3>
          <p className="text-secondary-300 text-xs">
            This is the actual loading.tsx component that appears during page transitions. Visit <code className="text-primary-400">/loading</code> to see this demo.
          </p>
        </div>
      </div>
    </div>
  );
}