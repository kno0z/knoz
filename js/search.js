// وظيفة البحث
document.querySelector('.search-box input')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const tools = document.querySelectorAll('.tool-card');
    
    tools.forEach(tool => {
        const title = tool.querySelector('h3')?.textContent.toLowerCase() || '';
        const desc = tool.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            tool.style.display = 'block';
        } else {
            tool.style.display = 'none';
        }
    });
});