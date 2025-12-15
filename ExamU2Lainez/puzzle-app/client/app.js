const API_URL = 'http://localhost:3000/api';

async function computeAndSave() {
    const data = {
        serialNumber: document.getElementById('serialNumber').value,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        twoYearsWarranty: document.getElementById('warranty').checked,
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
            alert(`Saved successfully! Final price: $${result.result}`);
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
                Warranty: ${p.twoYearsWarranty ? 'Yes' : 'No'} - 
                Price: $${p.price} - 
                Final Price: $${p.result || p.price}
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
    document.getElementById('warranty').checked = false;
    document.getElementById('price').value = '';
}