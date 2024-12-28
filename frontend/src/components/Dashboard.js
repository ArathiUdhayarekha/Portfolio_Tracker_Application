import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [metrics, setMetrics] = useState({ totalValue: 0, topStock: '', distribution: [] });

    useEffect(() => {
        fetch('/api/stocks/portfolio-value')
            .then((response) => response.json())
            .then((data) => setMetrics({ totalValue: data, topStock: 'N/A', distribution: [] }));
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Total Portfolio Value: ${metrics.totalValue}</p>
            <p>Top Performing Stock: {metrics.topStock}</p>
        </div>
    );
}

export default Dashboard;