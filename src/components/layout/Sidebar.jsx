import { NavLink } from 'react-router-dom';
import { Target, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navItems';

export default function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="no-print fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity duration-300"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`no-print fixed inset-y-0 left-0 z-40 flex w-72 flex-col overflow-hidden border-r border-white/10 bg-linear-to-b from-[#102F46] via-[#16476A] to-[#0B2235] text-slate-300 shadow-2xl shadow-slate-950/30 transition-all duration-300 ease-in-out lg:translate-x-0 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                aria-label="Main navigation"
            >
                {/* Decorative background */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />

                {/* Logo */}
                <div className="relative flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-red-500 to-[#BF092F] text-white shadow-lg shadow-red-900/30 ring-1 ring-white/10 transition-transform duration-300 hover:scale-105">
                            <Target size={23} strokeWidth={2.5} />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tight text-white">
                                Cricket<span className="text-red-400">Hub</span>
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-400">
                                Match Dashboard
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className="rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-red-500/20 hover:text-red-400 lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="relative flex-1 space-y-2 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[2px] text-slate-500">
                        Navigation
                    </p>

                    {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === '/'}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `group relative flex items-center gap-3.5 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-linear-to-r from-red-600 to-[#BF092F] text-white shadow-lg shadow-red-950/30 ring-1 ring-white/10'
                                        : 'text-slate-400 hover:translate-x-1 hover:bg-white/7 hover:text-white'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Active indicator */}
                                    {isActive && (
                                        <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-white" />
                                    )}

                                    <Icon
                                        size={19}
                                        strokeWidth={isActive ? 2.5 : 2}
                                        className={`shrink-0 transition-all duration-300 ${
                                            isActive
                                                ? 'text-white'
                                                : 'text-slate-500 group-hover:scale-110 group-hover:text-blue-300'
                                        }`}
                                    />

                                    <span className="flex-1">{label}</span>

                                    {isActive && (
                                        <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer */}
                <div className="relative shrink-0 border-t border-white/10 p-4">
                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/4 px-4 py-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-200">
                                CricketHub
                            </span>
                            <span className="text-[10px] text-slate-500">
                                v1.0 · Demo data
                            </span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}