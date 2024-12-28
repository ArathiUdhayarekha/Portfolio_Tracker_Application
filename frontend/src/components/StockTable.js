import React, { useEffect, useState } from 'react';

function StockTable() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('/api/stocks')
            .then((response) => response.json())
            .then((data) => setStocks(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`/api/stocks/${id}`, { method: 'DELETE' })
            .then(() => setStocks(stocks.filter((stock) => stock.id !== id)));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Quantity</th>
                    <th>Buy Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock) => (
                    <tr key={stock.id}>
                        <td>{stock.name}</td>
                        <td>{stock.ticker}</td>
                        <td>{stock.quantity}</td>
                        <td>${stock.buyPrice}</td>
                        <td>
                            <button>Edit</button>
                            <button onClick={() => handleDelete(stock.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StockTable;
