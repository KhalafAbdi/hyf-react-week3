import { ButtonDemo } from './components/ButtonDemo';
import { FormDemo } from './components/FormDemo';
import { TodoDemo } from './components/TodoDemo';
import { HooksDemo } from './components/HooksDemo';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>React week 3</h1>
            <ButtonDemo />
            <FormDemo />
            <TodoDemo />
            <HooksDemo />
            <div className="demo-link-card">
                <h2>Connecting to APIs</h2>
                <Link href="/fetch" className="demo-link">
                    Data Fetching Example →
                </Link>
            </div>
        </div>
    );
}
