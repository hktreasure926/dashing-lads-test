// import { GraphQLClient } from 'graphql-request';

// const API_URL = 'https://dashinglads.com/graphql';

// Initialize GraphQL Client
// const client = new GraphQLClient(API_URL);

export interface Post {
    id: string;
    title: string;
    date: string;
    imageUrl: string;
    excerpt?: string;
}

// Mock Data for initial development/fallback
const MOCK_POSTS: Post[] = [
    {
        id: '1',
        title: 'The Art of the Double Breasted Suit',
        date: '2023-10-27',
        imageUrl: 'https://dashinglads.com/wp-content/uploads/2023/10/suit-1.jpg', // Placeholder, likely to break if not real
        excerpt: 'Why the double breasted suit is making a comeback...',
    },
    {
        id: '2',
        title: 'Summer Linens',
        date: '2023-10-25',
        imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // Reliable placeholder
        excerpt: 'Staying cool while looking hot.',
    },
    {
        id: '3',
        title: 'Evening Wear Essentials',
        date: '2023-10-20',
        imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', // Reliable placeholder
        excerpt: 'Black tie guide for the modern man.',
    }
];

export async function getPosts(): Promise<Post[]> {
    // In a real scenario, we would uncomment this:
    /*
    const query = gql`
        query GetPosts {
            posts(first: 20) {
                nodes {
                    id
                    title
                    date
                    excerpt
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `;
    try {
        const data: any = await client.request(query);
        return data.posts.nodes.map((node: any) => ({
            id: node.id,
            title: node.title,
            date: node.date,
            imageUrl: node.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/600x800',
            excerpt: node.excerpt
        }));
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return MOCK_POSTS;
    }
    */

    // For now, return mock data to get UI working
    // Simulating delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return MOCK_POSTS;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getUserTier(_userId: string): Promise<'basic' | 'premium'> {
    // This would connect to the database or a custom endpoint
    // For now, we simulate a premium user
    return 'premium';
}
