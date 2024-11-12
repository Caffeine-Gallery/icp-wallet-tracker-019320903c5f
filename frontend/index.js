import { backend } from "declarations/backend";

async function initializeChart() {
    const ctx = document.getElementById('walletChart').getContext('2d');
    
    try {
        const data = await backend.getWalletData();
        
        // Update statistics
        const totalWallets = data[data.length - 1].count;
        const monthlyGrowth = calculateGrowthRate(data, 1);
        const annualGrowth = calculateGrowthRate(data, 12);
        
        document.getElementById('totalWallets').textContent = totalWallets.toLocaleString();
        document.getElementById('monthlyGrowth').textContent = `${monthlyGrowth}%`;
        document.getElementById('annualGrowth').textContent = `${annualGrowth}%`;

        // Prepare chart data
        const labels = data.map(item => new Date(item.timestamp).toLocaleDateString());
        const counts = data.map(item => item.count);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Wallets',
                    data: counts,
                    fill: true,
                    borderColor: '#4355f9',
                    backgroundColor: 'rgba(67, 85, 249, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'ICP Wallet Growth Over Time'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching wallet data:', error);
    }
}

function calculateGrowthRate(data, months) {
    if (data.length < months + 1) return 0;
    
    const currentValue = data[data.length - 1].count;
    const previousValue = data[data.length - 1 - months].count;
    
    const growthRate = ((currentValue - previousValue) / previousValue) * 100;
    return growthRate.toFixed(2);
}

window.addEventListener('load', initializeChart);
