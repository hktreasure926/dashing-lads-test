'use client';

import Image from 'next/image';
import { Post, getUserTier } from '@/lib/api';
import { useState, useEffect } from 'react';
import SubscribeButton from '@/components/ui/SubscribeButton';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface PostCardProps {
    post: Post;
    userId?: string; // Logic for fetching user tier would typically be higher up or in a context
}

export default function PostCard({ post, userId = 'current-user' }: PostCardProps) {
    const [tier, setTier] = useState<'basic' | 'premium'>('basic');

    useEffect(() => {
        getUserTier(userId).then(t => {
            setTier(t);
        });
    }, [userId]);

    // Design choice: Premium content simulation (e.g. video)
    // For this demo, let's say odd posts are "Premium Only videos"
    const isPremiumContent = parseInt(post.id) % 2 !== 0;
    const canView = !isPremiumContent || tier === 'premium';

    return (
        <article className="border-b border-stone-800 pb-6 mb-6">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold to-stone-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-stone-900 border-2 border-stone-900 overflow-hidden relative">
                            {/* Avatar Placeholder */}
                            <Image src={`https://secure.gravatar.com/avatar/${post.id}?d=identicon`} alt="avatar" fill className="object-cover" />
                        </div>
                    </div>
                    <div>
                        <span className="text-sm font-semibold text-stone-100 block">DashingLads</span>
                        <span className="text-xs text-stone-500 block">Original Audio</span>
                    </div>
                </div>
                <button className="text-stone-400">•••</button>
            </div>

            {/* Media Content */}
            <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden">
                {canView ? (
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900 backdrop-blur-md">
                        <div className="absolute inset-0 bg-stone-900/80 z-10" />
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover blur-xl opacity-30"
                        />
                        <div className="relative z-20 flex flex-col items-center p-6 text-center">
                            <h3 className="text-xl font-serif text-white mb-2">Premium Content</h3>
                            <p className="text-stone-400 text-sm mb-6">Upgrade your membership to access this exclusive styling guide.</p>
                            <SubscribeButton />
                        </div>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-4">
                        <button className="text-stone-100 hover:text-red-500 transition-colors"><Heart size={24} /></button>
                        <button className="text-stone-100 hover:text-stone-300 transition-colors"><MessageCircle size={24} /></button>
                        <button className="text-stone-100 hover:text-stone-300 transition-colors"><Share2 size={24} /></button>
                    </div>
                    <button className="text-stone-100 hover:text-gold transition-colors"><Bookmark size={24} /></button>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-stone-100 mb-2">
                    {Math.floor(Math.random() * 5000) + 100} likes
                </div>

                {/* Caption */}
                <div className="text-sm text-stone-300">
                    <span className="font-semibold text-stone-100 mr-2">DashingLads</span>
                    {post.title} — {post.excerpt}
                </div>

                <div className="text-xs text-stone-500 mt-2 uppercase tracking-wide">
                    {new Date(post.date).toLocaleDateString()}
                </div>
            </div>
        </article>
    );
}
