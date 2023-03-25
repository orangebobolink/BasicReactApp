import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("Act Sort");
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
};

export const usePosts = (posts, sorts, query) => {
    const sortedPosts = useSortedPosts(posts, sorts);
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedPosts]);
    return sortedAndSearchPosts;
};
