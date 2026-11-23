import { useParams } from 'react-router-dom';

export default function PlayerDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="page-title">Player Details</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Player ID: {id}
      </p>
    </div>
  );
}