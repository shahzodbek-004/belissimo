function Counter({count, onIncrement, onDecrement}) {
    return(
        <div className="counter">
            <button 
                className="counter-button counter-button__decrement" 
                onClick={onDecrement}
            >
                <span></span>
            </button>
            <span className="counter-text">{count}</span>
            <button 
                className="counter-button counter-button__increment" 
                onClick={onIncrement}
            >
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

export default Counter