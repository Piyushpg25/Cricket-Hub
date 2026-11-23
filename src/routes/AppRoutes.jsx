import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Dashboard from '@/pages/Dashboard';
import Players from '@/pages/Players';
import PlayerDetails from '@/pages/PlayerDetails';
import Compare from '@/pages/Compare';
import Rankings from '@/pages/Rankings';
import Analytics from '@/pages/Analytics';
import Reports from '@/pages/Reports';
import Settings from '@/pages/Settings';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='/players' element={<Players />} />
                <Route path='/players/:id' element={<PlayerDetails />} />
                <Route path='/compare' element={<Compare />} />
                <Route path='/rankings' element={<Rankings />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}