'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, PlusSquare, User, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/search', icon: Search, label: 'Search' },
        { href: '/upload', icon: PlusSquare, label: 'Upload' },
        { href: '/shop', icon: Briefcase, label: 'Shop' }, // Adding Shop/Suit Generator link potentially
        { href: '/profile', icon: User, label: 'Profile' },
    ];

    return (
        <nav className="sticky bottom-0 z-50 h-20 bg-stone-950/90 backdrop-blur-lg border-t border-white/5 flex items-center justify-around px-2 pb-2 mt-auto">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 transform active:scale-95",
                            isActive ? "text-gold" : "text-stone-500 hover:text-stone-300"
                        )}
                    >
                        <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        <span className="text-[10px] mt-1 font-medium tracking-wide opacity-80">
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
