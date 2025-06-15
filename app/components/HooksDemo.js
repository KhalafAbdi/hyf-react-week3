'use client';

import { use, useEffect, useRef, useState } from 'react';

function CounterHook() {
    const [count, setCount] = useState(0);

    const handleOnClick = () => {
        setCount((previous) => {
            const nextCount = previous + 1;

            console.log(nextCount);

            return nextCount;
        });
    };

    return (
        <div className="hook-example">
            <h3>useState Hook</h3>
            <p>Simple counter example:</p>
            <button className="btn btnPrimary" onClick={handleOnClick}>
                Count: {count}
            </button>
        </div>
    );
}

function MountEffect() {
    const [status, setStatus] = useState();

    useEffect(() => {
        setStatus('Mounted');
        console.log('Mounted');
    }, []);

    return (
        <div className="hook-example">
            <h3>useEffect on Mount</h3>
            <p>Effect runs once when component mounts:</p>

            <div className="effect-message">{status}</div>
        </div>
    );
}

function DependencyEffect() {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('name has changed');
    }, [name]);

    return (
        <div className="hook-example">
            <h3>useEffect with Dependencies</h3>
            <p>Effect runs when name changes (check console):</p>
            <input
                className="form-input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

function CleanupEffect() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((previous) => previous + 1);
        }, 1000);

        return () => {
            console.log('interval');
            clearInterval(interval);
        };
    }, [isRunning]);

    const handleOnClick = () => {
        if (!isRunning) setSeconds(0);

        setIsRunning(!isRunning);
    };

    return (
        <div className="hook-example">
            <h3>useEffect with Cleanup</h3>
            <p>Timer with cleanup (check console):</p>
            <div className="timer-container">
                <button className="btn btnPrimary" onClick={handleOnClick}>
                    {isRunning ? 'Stop timer' : 'Start timer'}
                </button>
                <span className="timer-counter">{seconds}</span>
            </div>
        </div>
    );
}

export function HooksDemo() {
    return (
        <div className="hooks-demo">
            <h2>React Hooks</h2>
            <p>This section demonstrates the main concepts of React Hooks</p>

            <div className="hooks-grid">
                <CounterHook />
                <MountEffect />
                <DependencyEffect />
                <CleanupEffect />
            </div>
        </div>
    );
}
