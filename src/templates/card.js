export const card = ({ title, price, images }) => `
    <article class="Card">
        <div class="Card-body">
            <img src="${images[0]}" alt="${title}">
            <span>$ ${price}</span>
        </div>
        <header>
            <h2>${title}</h2>
        </header>
    </article>
`;
