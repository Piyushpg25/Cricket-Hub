export default function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="mb-6 rounded-xl bg-navy-900 p-6 text-white">
        Sidebar preview (navy-900)
      </div>

      <div className="card mb-6 max-w-md">
        <h1 className="page-title mb-2">CricketHub 🏏</h1>
        <p className="mb-4 text-sm text-slate-500">
          Theme setup working hai agar yeh card white aur rounded dikh raha hai.
        </p>
        <div className="flex gap-3">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
        </div>
        <input className="input-field mt-4" placeholder="Input test..." />
      </div>
    </div>
  );
}