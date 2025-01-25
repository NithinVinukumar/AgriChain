document.getElementById('goodForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;

    let formData = new FormData();
    formData.append('name', name);
    formData.append('quantity', quantity);
    formData.append('price', price);

    try {
        const response = await fetch('/add_good', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        document.getElementById('result').innerHTML = `
            ${result.status}<br>
            Transaction Hash: ${result.transaction_hash}<br>
            <img src="${result.qr_code_url}" alt="QR Code">
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error: ' + error;
    }
});
