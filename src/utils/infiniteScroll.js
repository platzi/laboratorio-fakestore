import renderProducts from "../templates/Template";
const endOfCatalog = document.querySelector('.catalog-finish');
endOfCatalog.classList.add('hidden');

const infiniteScroll = () => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    
    if (endOfPage) {
        localStorage.offset = Number(localStorage.offset) + Number(localStorage.limit);
        console.log(localStorage.offset);
        if (localStorage.maxOffset == 'true') {          
            window.removeEventListener('scroll', infiniteScroll, {passive: false});
            endOfCatalog.classList.remove('hidden')            
        } 
        renderProducts();
    }
};

export default infiniteScroll;