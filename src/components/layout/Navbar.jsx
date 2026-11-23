
import { Menu, Moon, Activity } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
    return (
        <header className="no-print sticky top-0 z-20 flex h-18 items-center justify-between border-b border-white/18 bg-[#0B1929]/95 px-4 backdrop-blur-xl sm:px-6 lg:px-8">

            {/* Left Section */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                {/* Mobile Menu */}
                <button
                    type="button"
                    onClick={onMenuClick}
                    aria-label="Open menu"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-slate-300 transition-all duration-200 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white lg:hidden"
                >
                    <Menu size={21} className="transition-transform duration-200 group-hover:scale-110" />
                </button>

                {/* Heading */}
                <div className="min-w-0">
                    <h2 className="truncate text-sm font-bold tracking-wide text-white sm:text-lg">
                        International Cricket Analytics
                    </h2>

                    <div className="mt-1 hidden items-center gap-2 sm:flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                        <span className="text-[10px] font-medium uppercase tracking-[1.5px] text-slate-500">
                            Performance & Insights
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">

                {/* Status */}
                <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 sm:flex">
                    <Activity size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-semibold tracking-wide text-emerald-400">
                        SYSTEM ONLINE
                    </span>
                </div>

                {/* Theme Button */}
                <button
                    type="button"
                    aria-label="Toggle theme"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 transition-all duration-200 hover:border-blue-400/20 hover:bg-blue-400/10 hover:text-white"
                >
                    <Moon size={19} />
                </button>

                {/* Divider */}
                <div className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />

                {/* Avatar */}
                <div
                    className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-linear-to-br from-red-500 to-[#BF092F] text-sm font-bold text-white shadow-[0_4px_15px_rgba(191,9,47,0.25)] transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(191,9,47,0.4)]"
                    aria-label="User profile"
                >
                    PG
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0B1929] bg-emerald-400" />
                </div>
            </div>
        </header>
    );
}
