'use client';

function Button({ onClick }) {
    return (
        <button className="btn btnPrimary" onClick={onClick}>
            Click me
        </button>
    );
}

export function ButtonDemo() {
    const handleOnClick = () => {
        alert('Button is clicked');
    };

    return (
        <div className="button-demo">
            <h2>Event Handler Props Demo</h2>
            <p>This demonstrates passing event handlers as props</p>
            <Button onClick={handleOnClick} />
        </div>
    );
}
