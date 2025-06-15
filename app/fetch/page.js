import { FetchDemo } from '../components/FetchDemo';

export default function FetchPage() {
    return (
        <div className="container">
            <div className="page-header">
                <a href="/" className="back-link">
                    ← Back to examples
                </a>
                <h1>Data Fetching in React</h1>
            </div>
            <div className="page-content">
                <p className="page-intro">
                    This page demonstrates how to fetch data from an API using
                    React hooks. We use the JSONPlaceholder API to show
                    real-world data fetching patterns.
                </p>
                <FetchDemo />
            </div>
        </div>
    );
}
