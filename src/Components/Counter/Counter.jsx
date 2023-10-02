const Counter = ()=> {
    const counterValue = 10;
    return (
        <div>
            <h1>Counter</h1>
            <h2>Babar Arif</h2>
            {counterValue !== 0 && <p>{counterValue}</p>}
        </div>
    );
};

export default Counter;