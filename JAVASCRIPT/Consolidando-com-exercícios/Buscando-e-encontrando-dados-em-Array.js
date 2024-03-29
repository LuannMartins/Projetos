/*
    Buscando e contado dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os sequintes desafios

        Contar o número de autores
        Contar o número de autores
        Mostrar livros do autor Auguto Cury
        Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse auor.
*/

const booksByCategory = [
    {
        catagory: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionário",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        catagory: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.catagory)
    console.log(category.books.length)
}

function countAuthons() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1)
                authors.push(book.author)
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthons();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author)
                books.push(book.title)
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')