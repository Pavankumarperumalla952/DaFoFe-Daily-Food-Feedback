import React from 'react';
import { EyeOff, Clock, Utensils, ShieldCheck, Shield, Lock } from 'lucide-react';
import { CategoryMode, DayKey, MealType } from '../types';
import { MEAL_META, MENU } from '../data/menuData';

interface HeaderProps {
  currentMeal: MealType;
  todayKey: DayKey;
  onQuickJumpToNow: () => void;
  mode: CategoryMode;
  selectedDay: DayKey;
  selectedMeal: MealType;
  isAdmin: boolean;
  onOpenAdminPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMeal,
  todayKey,
  onQuickJumpToNow,
  mode,
  selectedDay,
  selectedMeal,
  isAdmin,
  onOpenAdminPortal
}) => {
  const isNowSelected = mode === 'mess' && selectedDay === todayKey && selectedMeal === currentMeal;
  const currentSelectionTitle =
    mode === 'mess'
      ? `${MENU[selectedDay].label} ${MEAL_META[selectedMeal].label}`
      : 'Canteen Food';

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <header className="bg-[#1E2B22] border-b-4 border-[#E8A93A] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-[#E8A93A] text-[#1E2B22] px-3 py-1 font-oswald font-black tracking-tighter text-2xl rounded-sm shadow-[2px_2px_0px_0px_rgba(30,43,34,0.4)]">
            DaFoFe
          </div>
          <div className="text-[#D9DBD1] font-mono-plex text-xs tracking-widest uppercase font-semibold">
            Daily Food Feedback
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {!isNowSelected && (
            <button
              onClick={onQuickJumpToNow}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono-plex font-bold bg-[#2B3A2E] hover:bg-[#41573F] text-[#EDEEE8] border border-[#E8A93A]/40 rounded cursor-pointer transition-all active:scale-95"
              title="Jump to today's active meal"
            >
              <Clock className="w-3.5 h-3.5 text-[#E8A93A]" />
              <span className="hidden sm:inline">Now:</span> {MEAL_META[currentMeal].label}
            </button>
          )}

          <div className="hidden xs:flex items-center gap-1.5 bg-[#E8A93A]/10 border border-[#E8A93A]/30 px-2.5 py-1.5 rounded">
            <div className="w-2 h-2 rounded-full bg-[#E8A93A] animate-pulse"></div>
            <span className="font-mono-plex text-[10px] text-[#E8A93A] uppercase font-bold tracking-widest whitespace-nowrap">
              Anonymous
            </span>
          </div>

          <button
            onClick={onOpenAdminPortal}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-oswald font-bold uppercase tracking-wider cursor-pointer transition-all active:scale-95 ${
              isAdmin
                ? 'bg-[#5C8A56] hover:bg-[#4E7748] text-white shadow-xs'
                : 'bg-[#E8A93A] hover:bg-[#D99A2D] text-[#1E2B22] shadow-[2px_2px_0px_0px_rgba(30,43,34,0.4)]'
            }`}
            title={isAdmin ? 'Open Admin Feedback Dashboard' : 'Admin Login for Mess Committee & Wardens'}
          >
            {isAdmin ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Admin Console</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Admin Login</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Hero Title Section */}
      <div className="bg-[#1E2B22] text-[#EDEEE8] px-4 sm:px-8 py-6 sm:py-8 border-b-2 border-[#1E2B22]/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono-plex text-[11px] font-bold text-[#E8A93A] uppercase tracking-widest block mb-1">
              Anonymous Student Food Review
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-oswald tracking-tight uppercase leading-none text-white">
              How is <br className="hidden sm:inline" />
              <span className="text-[#E8A93A]">{currentSelectionTitle}?</span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#C9CDC5] max-w-md leading-relaxed font-sans">
            Pick a day and meal, drop your honest score, and flag specific issues. No names, no roll numbers — fully anonymous hostel intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

