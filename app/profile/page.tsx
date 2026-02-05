import Image from 'next/image';
import ProfileGrid from '@/components/profile/ProfileGrid';
import { Settings, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="min-h-screen pb-20">

            {/* Profile Header */}
            <div className="px-4 py-6 border-b border-white/5">
                <div className="flex items-center gap-6 mb-6">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold to-stone-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-stone-900 overflow-hidden relative">
                            <Image
                                src="https://dashinglads.com/wp-content/uploads/2023/10/suit-1.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex-1 flex justify-around text-center">
                        <div>
                            <div className="font-bold text-lg text-white">128</div>
                            <div className="text-xs text-stone-400">Posts</div>
                        </div>
                        <div>
                            <div className="font-bold text-lg text-white">14.2k</div>
                            <div className="text-xs text-stone-400">Followers</div>
                        </div>
                        <div>
                            <div className="font-bold text-lg text-white">542</div>
                            <div className="text-xs text-stone-400">Following</div>
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                    <div className="flex items-center gap-1">
                        <h1 className="font-bold text-white text-base">Dashing Lads</h1>
                        <CheckCircle2 size={14} className="text-blue-400" fill="currentColor" color="white" />
                    </div>
                    <p className="text-sm text-stone-300">
                        Gentlemen&apos;s Styling & AI Wardrobe.<br />
                        Membership tiers available now.<br />
                        <span className="text-gold">#DashingLads</span>
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button className="flex-1 bg-stone-800 text-stone-200 font-semibold text-sm py-1.5 rounded-md hover:bg-stone-700 transition-colors">
                        Edit Profile
                    </button>
                    <button className="flex-1 bg-stone-800 text-stone-200 font-semibold text-sm py-1.5 rounded-md hover:bg-stone-700 transition-colors">
                        Share Profile
                    </button>
                    <button className="bg-stone-800 text-stone-200 p-1.5 rounded-md hover:bg-stone-700 transition-colors">
                        <Settings size={20} />
                    </button>
                </div>
            </div>

            {/* Grid */}
            <ProfileGrid />
        </div>
    );
}
