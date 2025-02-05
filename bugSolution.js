```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using JSON.stringify for deep comparison
    const prevCount = JSON.stringify(count);
    console.log('Count changed!');
  }, [JSON.stringify(count)]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```