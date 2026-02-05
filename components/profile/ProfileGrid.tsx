import Image from 'next/image';
import { PROFILE_POSTS } from '@/lib/data';

interface ProfileGridProps {
    posts?: { id: string, imageUrl: string }[];
}

export default function ProfileGrid({ posts = PROFILE_POSTS }: ProfileGridProps) {
    return (
        <div className="grid grid-cols-3 gap-[1px]">
            {posts.map((post) => (
                <div key={post.id} className="relative aspect-square w-full bg-stone-900 group cursor-pointer overflow-hidden">
                    <Image
                        src={post.imageUrl}
                        alt="Post thumbnail"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 33vw, 300px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
            ))}
        </div>
    );
}
