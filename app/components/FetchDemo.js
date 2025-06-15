'use client';

import { useEffect, useState } from 'react';

// endpoint: https://jsonplaceholder.typicode.com/posts?_limit=3

function PostsList() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts?_limit=3'
                );

                if (!response.ok) {
                    throw new Error('something went wrong');
                }

                const res = await response.json();
                setData(res);
                setIsLoading(false);
            } catch (error) {
                setError('Has error');
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <div className="loading-state">
                <p>...Loading</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-state">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="posts-list">
            {data?.map((element) => (
                <div key={element.id} className="post-item">
                    <h4>{element.title}</h4>
                    <p>{element.body}</p>
                </div>
            ))}
        </div>
    );
}

export function FetchDemo() {
    return (
        <div className="fetch-demo">
            <h2>Data Fetching with useEffect</h2>
            <p>This demonstrates fetching data from an API using useEffect</p>
            <PostsList />
        </div>
    );
}
