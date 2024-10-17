const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('selected')) {
            const currentValue = parseInt(item.textContent);
            const randomDecrease = Math.floor(Math.random() * 7) + 12; // 12‚©‚ç18‚Ìƒ‰ƒ“ƒ_ƒ€‚È’l
            const newValue = currentValue - randomDecrease;
            item.textContent = newValue > 0 ? newValue : 0; // ’l‚ª0ˆÈ‰º‚É‚È‚ç‚È‚¢‚æ‚¤‚É‚·‚é
            item.classList.remove('selected');
        } else {
            gridItems.forEach(item => item.classList.remove('selected'));
            item.classList.add('selected');
        }
    });
});
