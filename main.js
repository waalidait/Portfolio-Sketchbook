 window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const paperSheet = document.querySelector('.paper-sheet'); // Container ديالك
    const emojiWrapper = document.querySelector('.emoji-wrapper');

    setTimeout(() => {
        // 1. خبي الـ Loader
        if (loader) loader.style.display = 'none';
        
        // 2. بَيّن الصفحة (إيلا كنتي داير ليها display: none ف الأول)
        if (paperSheet) paperSheet.style.display = 'block'; 
        
        // 3. طلق الـ Animation ديال الـ Emojis
        if (emojiWrapper) emojiWrapper.classList.add('start-anim');
        
    }, 2000); // هاد 2000ms هي 2 ثواني ديال الـ Loader
});