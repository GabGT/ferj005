const reasonItems = document.querySelectorAll('.why-choose-us .reasons .reason-item')

reasonItems.forEach((itemElement) => {
    itemElement.addEventListener('mousemove', () => {
        reasonItems.forEach((item) => item.classList.remove('active'));

        itemElement.classList.add('active');
    });
});