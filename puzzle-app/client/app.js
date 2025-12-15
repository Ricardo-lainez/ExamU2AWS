// Use relative URL to work in both local and production environments
const API_URL = '/api';

async function computeAndSave() {
    const data = {
        serialNumber: document.getElementById('serialNumber').value,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value)
    };

    try {
        const response = await fetch(`${API_URL}/puzzles/compute`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            alert(`Saved successfully! Price: $${result.price.toFixed(2)}, Total with IVA: $${result.totalPrice.toFixed(2)}`);
            clearForm();
            loadPuzzles();
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

async function loadPuzzles() {
    try {
        const response = await fetch(`${API_URL}/puzzles`);
        const puzzles = await response.json();
        
        const list = document.getElementById('puzzlesList');
        list.innerHTML = puzzles.map(p => `
            <div>
                <strong>${p.brand} ${p.model}</strong> - 
                Serial: ${p.serialNumber} - 
                Description: ${p.description || 'N/A'} - 
                Price: $${p.price ? p.price.toFixed(2) : '0.00'} - 
                Total Price (with IVA): $${p.totalPrice ? p.totalPrice.toFixed(2) : '0.00'}
            </div>
        `).join('');
    } catch (error) {
        alert('Error loading puzzles: ' + error.message);
    }
}

function clearForm() {
    document.getElementById('serialNumber').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
}