import { useState, useMemo, useRef } from "react";

function App() {
    const [product, setProduct] = useState({ name: '', price: '' });
    const [products, setProducts] = useState([]);

    const total = useMemo(() => {
        console.log('re-render in callback');
        return products.reduce((prev, curr) => prev + curr.price, 0);
    }, [products])

    const productNameRef = useRef();

    const handleClick = () => {
        setProducts(prev => [...prev, product]);
        setProduct({ name: '', price: '' })
        productNameRef.current.focus();
    }


    return (
        <div className="container">
            <div className="input-container">
                <input
                    ref={productNameRef}
                    value={product.name}
                    onChange={(e) => setProduct(prev => {
                        return {
                            ...prev,
                            ['name']: e.target.value,
                        };
                    })}
                    placeholder="Name"
                />
                <input
                    value={product.price}
                    onChange={(e) => setProduct(prev => {
                        return {
                            ...prev,
                            ['price']: parseInt(e.target.value),
                        };
                    })}
                    placeholder="Price"
                />
            </div>
            <div className="button-container">
                <button
                    onClick={handleClick}
                >Add</button>
            </div>
            <div className="list-container">
                <div className="list__totalprice">
                    <h1>Total: {total}</h1>
                </div>
                {
                    products.map((product, productIndex) => {
                        return (
                            <li key={productIndex}>{product.name} - {product.price}</li>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;