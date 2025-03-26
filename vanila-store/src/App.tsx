import "./App.css";

export function App() {

    return <div className="layout">
        <div id="count" style={{height: 80}}>0</div>
        <button id="increment">increase</button>
        <button id="decrement">decrease</button>
    </div>;
}