const request = fetch("https://raw.githubusercontent.com/rafael-vasconcellos/playhub-vanilla/main/api/content.json").then(response => response.status===200? response.json() : [])

let top10_today = { brasil: { 
    filmes: ['Racionais, das ruas de são paulo pro mundo', 'O Milagre', 'Uma quedinha de natal', 'Natal com você', 'Bala perdida', 'Depois do universo', 'As cores do amor', 'The girl with all the gifts', 'Enola holmes 2', 'Medieval'],
    series: ['1899', 'Manifest', 'Riverdale', 'Um de nós está mentindo', 'Warrior Nun', 'Recruta', 'Wandinha', 'Alice em borderland', 'Emily em paris']
}}

let top_searchs = ['Riverdale', 'Clickbait', 'Amor, verdade ou consequência 2', 'Traição e desejo', 'Fidelidade', 'Class onion, um mistério knives out', 'Wandinha']
let trendings = ['class onion', '1899', 'sim senhor!', 'primeira morte', 'bridgerton', 'você', 'solteiros ilhados', 'intersection', 'fogo ardente', 'my name', 'o amante de lady chatterley', 'manifest', 'cobra kai']


let content_relations = [
    {
        name: 'Campeões de bilheteria - aventuras empolgantes para a família inteira',
        func: (index) => { 
            return (
            index.genero.some(  i => {return i.toLowerCase().includes('familia')}  ) || index.genero.some(  i => {return i.toLowerCase().includes('teen')}  )
            ) && index.style.some(i => {  return i.toLowerCase().includes('empolgantes')  }) && index.tipo==='filme' ;}
    }, {
        name: 'Filmes inspiradores',
        func: (index) => {return index.style.some(i => {  return i.toLowerCase().includes('aqui tudo é possível')  }) && index.tipo == 'filme'}
    }, {
        name: 'Séries românticas',
        func: (index) => { return (
            index.style.some(i => {  return i.toLowerCase().includes('românticos')  }) || index.genero.some(i => {return i.toLowerCase().includes('romântic')})
            ) && index.tipo == 'série' ;}
    }, {
        name: 'Dramas emocionantes para TV',
        func: (index) => {return (
            index.style.some(i => {  return i.toLowerCase().includes('comoventes')  }) || index.genero.some(i => {return i.toLowerCase().includes('drama') || i.toLowerCase().includes('dramátic')})
            ) && index.tipo=='série' ;}
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }, {
        name: 'Comédias para a TV',
        func: (index) => {return (
            index.style.some(i => {  return i.toLowerCase().includes('irreverentes')  }) || index.genero.includes('Sitcoms') || index.genero.some( i => {return i.toLowerCase().includes('comédia')} )
            ) && index.tipo=='série' ;}
    }, {
        name: 'Para jovens adultos',
        func: (index) => {return index.genero.some(i => i.toLowerCase().includes('teen'))}
    }, {
        name: 'Filmes românticos',
        func: (index) => { return (
            index.style.some(i => {  return i.toLowerCase().includes('românticos')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('romântic');})
            ) && index.tipo == 'filme' ;}
    }, {
        name: 'Filmes baseados em livros',
        func: (index) => {return index.genero.some(i => {return i.toLowerCase().includes('livro')}) && index.tipo == 'filme' ;}
    }, {
        name: 'Séries baseadas em livros',
        func: (index) => {return index.genero.some(i => {return i.toLowerCase().includes('livro')}) && index.tipo == 'série' ;}
    }, {
        name: 'Séries românticas baseadas em livros',
        func: (index) => {return (
            index.style.some(i => {  return i.toLowerCase().includes('românticos')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('romântic')})
            ) && index.genero.some(i => {return i.toLowerCase().includes('livro')}) && index.tipo == 'série' ;}
    }, {
        name: 'Ação e aventura',
        func: (index) => {  return index.genero.some(i => {return i.toLowerCase().includes('ação e aventura')})  ;}
    }, {
        name: 'Filmes repletos de suspense',
        func: (index) => {  return (
            index.style.some(i => {  return i.toLowerCase().includes('sinistros')  }) || index.style.some(i => {  return i.toLowerCase().includes('suspense')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('suspense')})
            ) && index.tipo==='filme' ;}
    }, {
        name: 'Séries repletas de suspense',
        func: (index) => {  return (
            index.style.some(i => {  return i.toLowerCase().includes('sinistros')  }) || index.style.some(i => {  return i.toLowerCase().includes('suspense')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('suspense')})
            ) && index.tipo==='série' ;}
    }, {
        name: 'Picantes',
        func: (index) => {return index.style.some(i => {  return i.toLowerCase().includes('calientes')  }) || index.style.some(i => {  return i.toLowerCase().includes('intimista')  })}
    }, {
        name: 'Séries policiais',
        func: (index) => {return index.genero.some(i => {  return i.toLowerCase().includes('policia')  }) && index.tipo==='série'}
    }, {
        name: 'Em alta',
        func: (index) => {return trendings.some(i => {  return i.toLowerCase()===index.nome.toLowerCase()  })}
    }, {
        name: 'Principais buscas',
        func: (index) => {return top_searchs.some(i => {  return i.toLowerCase()===index.nome.toLowerCase()  })}
    }


]


// séries emotivas, lançamentos, lançamentos dos ultimos 12 meses, adicionados recentemente




// implementados: séries românticas, filmes inspiradores, dramas emocionantes para TV, comédias para a TV, Campeões de bilheteria - aventuras empolgantes para a família inteira, séries de ação e aventura, para jovens adultos, filmes românticos, filmes baseados em livros, Séries baseadas em livros, séries românticas baseadas em livros, filmes repletos de suspense
// principais escolhas para você, principais buscas, em alta, top 10 séries brasil hoje, top 10 em filmes hoje

// não vai rolar: amor em qualquer época, dramas românticos, ação com fantasia, romance, comédia, aventura, séries, favoritos da crítica, populares da netflix, 
// Filmes de hollywood dublados em português, filmes e séries europeus, séries estrangeiras dubladas em português, produções de hollywood, fim de ano, séries estrangeiras, séries para maratonar, filmes premiados, séries empolgantes de ficção científica e fantasia
// a vez delas - ação e aventura, jovens e poderosas, filmes com mulheres fortes, filmes premiados, dramas baseados em livros, assista em fins de semana, dramas hollywoodianos, Dramas, Assistir novamente, séries dramáticas, mulheres por trás das câmeras, só na netflix




// scroll top, left, width height