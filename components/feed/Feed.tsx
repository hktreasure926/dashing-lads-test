'use client';

import { useEffect, useState } from 'react';
import { getPosts, Post } from '@/lib/api';
import PostCard from './PostCard';

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then((fetchedPosts) => {
            setPosts(fetchedPosts);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <div className="w-8 h-8 border-2 border-stone-600 border-t-gold rounded-full animate-spin"></div>
                <p className="text-stone-500 font-serif animate-pulse">Curating your feed...</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
