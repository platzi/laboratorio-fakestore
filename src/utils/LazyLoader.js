const lazyLoader = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoader.unobserve(entry.target)
            const url = entry.target.dataset.src
            entry.target.setAttribute('src' , url)
            entry.target.addEventListener('error', () => {
                entry.target.setAttribute('src', "./assets/images/failedload.jpg")
            });
        } 
    })
}, {
    rootMargin: '0px 0px 100px 0px',
    threshold: 0,  
});

export default lazyLoader;