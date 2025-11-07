"use client";

export default function BackButton() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button 
      onClick={handleGoBack}
      className="border border-slate-600 hover:border-slate-500 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
    >
      Go Back
    </button>
  );
}