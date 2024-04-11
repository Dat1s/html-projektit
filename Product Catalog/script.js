function showMain(category) {
    document.querySelector('.homepage').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.product-grid').innerHTML = getProducts(category);
}

function goHome() {
    document.querySelector('.homepage').style.display = 'flex';
    document.querySelector('.main').style.display = 'none';
}


function getProducts(category) {
    switch (category) {
        case 'caps':
            const capsHTML = `
                <!-- ... (same as before) ... -->
            `;
            return capsHTML;
        
        case 'belts':
            const beltsHTML = `
                <!-- ... (same as before) ... -->
            `;
            return beltsHTML;

        case 'jackets':
            const jacketsHTML = `
                <!-- ... (same as before) ... -->
            `;
            return jacketsHTML;

        case 'dunks':
            const dunksHTML = `
                <!-- ... (same as before) ... -->
            `;
            return dunksHTML;

        default:
            return '';
    }
}
