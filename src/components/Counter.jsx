function Counter({ count, onIncrease, onDecrease }) {
    return (
        <div className='counter'>
            <button
                className='counter-button counter-button__decrement'
                onClick={onDecrease}
            >
                <span></span>
            </button>
            <span className='counter-text'>{count}</span>
            <button
                className='counter-button counter-button__increment'
                onClick={onIncrease}
            >
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

export default Counter;