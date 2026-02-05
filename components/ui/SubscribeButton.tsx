import { Zap } from 'lucide-react';

export default function SubscribeButton() {
    return (
        <button className="flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-dark text-stone-950 px-6 py-2 rounded-full font-bold text-sm tracking-uppercase hover:scale-105 transition-transform shadow-lg shadow-gold/20">
            <Zap size={16} fill="currentColor" />
            <span>Unlock Premium</span>
        </button>
    );
}
