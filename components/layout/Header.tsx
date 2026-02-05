import Link from 'next/link';
import { Bell } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 h-16 bg-stone-950/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4">
            <Link href="/" className="text-2xl font-serif font-bold gold-text tracking-wide">
                Dashing Lads
            </Link>
            <button className="p-2 text-stone-400 hover:text-gold transition-colors">
                <Bell size={24} />
            </button>
        </header>
    );
}
