import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="py-16 text-center">
            <p className="text-6xl font-bold text-primary-600">404</p>
            <h1 className="page-title mt-4">Page not found</h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Page Not Found
            </p>
            <Link to="/" className="btn-primary mt-6">
                Go to Dashboard
            </Link>
        </div>
    );
}