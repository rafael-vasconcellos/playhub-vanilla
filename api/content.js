let content = [
    {
    tipo: 'série',
    nome: '1899',
    descrição: 'Dos mesmos criadores de "Dark", um transatlântico descobre um navio afundado. Com ele, emergem os segredos dos passageiros e tripulantes. Estrelado por Miguel Bernardeau ("Elite").',
    get banner() {return `banners/${this.nome}.jpg`},
    get large_banner() {return `banners/${this.nome}_large.webp`},
    get top10() {return `banners/top10/${this.nome}.jpg`},
    genero: ['Realidade Alternativa', 'Sinistros'],
    style: [''],
    exclusive: true,
    },

    {
    tipo: 'filme',
    nome: 'Enola Holmes',
    descrição: '',
    get banner() {return `banners/${this.nome}.jpg`},
    genero: ['Mistério', 'Filmes para a Familia', 'Obras de época'],
    style: ['Espirituosos', 'Suspense no ar', 'Empolgantes'],
    exclusive: true,
    },

    {
    tipo: 'filme',
    nome: 'Amor e Monstros',
    descrição: '',
    get banner() {return `banners/${this.nome}.jpg`},
    genero: ['Filmes de ficção científica', 'Filmes para a familia', 'Filmes teen'],
    style: ['Empolgantes'],
    exclusive: false,
    },

    {
    tipo: 'filme',
    nome: 'O Projeto Adam',
    descrição: '',
    get banner() {return `banners/${this.nome}.jpg`},
    genero: ['Filmes de ficção científica', 'Filmes para a familia', 'Ação', 'Aventura'],
    style: ['Espirituosos', 'Alto astral', 'Empolgantes'],
    exclusive: undefined,
    },

    {
    tipo: 'filme',
    nome: 'Jumanji, bem-vindo à selva',
    descrição: '',
    get banner() {return `banners/${this.nome}.webp`},
    genero: ['Filmes de ficção científica', 'Filmes baseados em livro', 'Filmes teen'],
    style: ['Adrenalina pura', 'Empolgantes'],
    exclusive: false,
    },

    {
    tipo: 'filme',
    nome: 'As tartarugas ninja, fora das sombras',
    descrição: '',
    get banner() {return `banners/${this.nome}.webp`},
    genero: ['Filmes de ficção científica', 'Filmes para a familia', 'Ação', 'Aventura'],
    style: ['Empolgantes'],
    exclusive: false,
    },

    {
    tipo: 'filme',
    nome: 'De volta para o futuro 3',
    descrição: '',
    get banner() {return `banners/${this.nome}.webp`},
    genero: ['Filmes de ficção científica', 'Filmes para a familia', 'Faraoestes'],
    style: ['Alto astral', 'Empolgantes'],
    exclusive: false,
    },

    {
    tipo: 'filme',
    nome: 'Enola holmes 2',
    descrição: '',
    get banner() {return `banners/${this.nome}.jpg`},
    genero: ['Mistério', 'Filmes para a familia', 'Filmes sobre questões sociais'],
    style: ['Espirituosos', 'Suspense no ar', 'Empolgantes'],
    exclusive: true,
    },

// Campeões de bilheteria - aventuras empolgantes para a família inteira

    {
    tipo: 'filme',
    nome: 'Pegando fogo',
    descrição: '',
    get banner() {return `banners/${this.nome}.webp`},
    genero: ['Dramas'],
    style: ['Aqui tudo é possível', 'Inspirador'],
    exclusive: undefined,
    },

    {
    tipo: 'filme',
    nome: 'O maior milagre',
    descrição: '',
    get banner() {return `banners/${this.nome}.webp`},
    genero: ['Mexicano', 'Dramas', 'Fé e espiritualidade'],
    style: ['Aqui tudo é possível'],
    exclusive: false,
    },

    {
    tipo: 'filme',
    nome: 'Enfrentando a barra',
    descrição: '',
    get banner() {return `banners/${this.nome}.webp`},
    genero: ['Australiano', 'Filmes para a familia', 'Filmes para toda a familia'],
    style: ['Aqui tudo é possível'],
    exclusive: undefined,
    },

    {
    tipo: 'filme',
    nome: 'BREAK, o poder da dança',
    descrição: '',
    get banner() {return `banners/${this.nome}.jpg`},
    genero: ['Comédias românticas', 'Comédia', 'Francês'],
    style: ['Aqui tudo é possível', 'Encantador', 'Comoventes'],
    exclusive: undefined,
    },

    {
    tipo: 'filme',
    nome: 'Na batida do coração',
    descrição: '',
    get banner() {return `banners/${this.nome}.jpg`},
    genero: ['Dramas', 'Filmes teen', 'Alemão'],
    style: ['Aqui tudo é possível', 'Românticos'],
    exclusive: false,
    },

    {
        tipo: 'filme',
        nome: 'Felicidade por um fio',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Comédias românticas', 'Comédia', 'Filmes baseados em livros'],
        style: ['Aqui tudo é possível', 'Sentimentais', 'Românticos'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: '100 metros',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Espanhol', 'Filmes baseados na vida real', 'Dramas'],
        style: ['Aqui tudo é possível', 'Intimistas'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: 'A ultima nota',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Música', 'Dramas'],
        style: ['Aqui tudo é possível', 'Intimista'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: 'Soul suffer, coragem de viver',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Filmes baseados na vida real', 'Filmes baseados em livros', 'Filmes para a familia'],
        style: ['Aqui tudo é possível', 'Alto astral'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: 'KARDEC',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Brasileiro', 'Filmes baseados na vida real', 'Obras de época'],
        style: ['Aqui tudo é possível', 'Sentimentais', 'Comoventes'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: 'Deus não está morto',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Dramas', 'Fé e espiritualidade'],
        style: ['Aqui tudo é possível'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: 'Toscana',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Dinamarquês', 'Dramas', 'Filmes românticos'],
        style: ['Aqui tudo é possível', 'Encantador', 'Alto astral'],
        exclusive: undefined,
    },

    {
        tipo: 'filme',
        nome: 'O resgate de ruby',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Filmes baseados na vida real', 'Filmes baseados em livros', 'Filmes para a familia'],
        style: ['Aqui tudo é possível', 'Alto astral'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Sim senhor',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Comédias românticas', 'Filmes baseados em livros', 'Comédia'],
        style: ['Aqui tudo é possível', 'Encantador'],
        exclusive: false,
    },

    {
        tipo: 'filme',
        nome: 'Quarentão',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Mexicano', 'Comédia', 'Dramas'],
        style: ['Aqui tudo é possível', 'Alto astral'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Kart nervoso',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Australiano', 'Filmes para a familia', 'Filmes para toda a familia'],
        style: ['Aqui tudo é possível', 'Alto astral', 'Empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Em busca de um lar',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Dramas', 'Melodramáticos', 'Filmes independentes'],
        style: ['Aqui tudo é possível', 'Emoções contraditórias', 'Comoventes'],
        exclusive: false,
    },

    {
        tipo: 'filme',
        nome: 'Karate kid',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Filmes de artes marciais', 'Filmes para a familia', 'Filmes para toda a familia'],
        style: ['Aqui tudo é possível', 'Alto astral', 'Empolgantes'],
        exclusive: false,
    },

    {
        tipo: 'filme',
        nome: 'Recuperando a esperança',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Dramas', 'Filmes sobre esportes', 'Fé e espiritualidade'],
        style: ['Aqui tudo é possível', 'Emoções contraditórias'],
        exclusive: false,
    },

    {
        tipo: 'filme',
        nome: 'Andar, montar, rodeio, a virada de amberley',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Filmes para a familia', 'Filmes baseados na vida real', 'Dramas'],
        style: ['Aqui tudo é possível', 'Alto astral', 'Comoventes'],
        exclusive: true,
    },
///////////////////////////////////////  filmes inspiradores  /////////////////////////////////////////////////
    {
        tipo: 'série',
        nome: 'My secret romance',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Coreano', 'Séries de comédia romântica', 'Comédias para a TV'],
        style: ['Românticos', 'Encantador'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'On my block',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Dramas românticos para a tv', 'Séries de comédia romântica', 'Séries teen'],
        style: ['Românticos', 'Espirituosos', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Betty em nova york',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Mexicano', 'Séries de comédia romântica', 'Comédias para a TV'],
        style: ['Românticos'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Pousando no amor',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Coreano', 'Dramas românticos para a tv', 'Séries de comédia romântica'],
        style: ['Românticos', 'Para suspirar', 'Encantador'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: '100 dias para enamorarmos',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Série dos EUA', 'Séries de comédia romântica', 'Comédias para a TV'],
        style: ['Românticos', 'Comoventes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Ginny e georgia',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Dramas românticos para a tv', 'Séries de comédia romântica', 'Séries teen'],
        style: ['Escandalosos', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Solteiros ilhados e desesperados',
        descrição: 'Em uma ilha deserta, solteiros e solteiras precisam encontrar o amor verdadeiro ― já que só os casais podem sair e desfrutar um encontro romântico.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome}_large.webp`},
        genero: ['Coreano', 'Reality shows', 'Reality show de competição'],
        style: ['Românticos', 'Intimista'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Paixões ardentes',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Colombiano', 'Dramas românticos para a TV', 'Séries dramáticas'],
        style: ['Românticos', 'Comoventes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'O ultimo guardião',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Turco', 'Séries de fantasia', 'Séries baseadas em livros'],
        style: ['Românticos', 'Empolgantes', 'Suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Sex life',
        descrição: 'Nesta série, a vida de uma mãe de família vira de cabeça para baixo quando o marido descobre um diário detalhando o passado sexual dela.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome.toLowerCase()}_large.webp`},
        genero: ['Dramas românticos para a TV', 'Séries baseadas em livros', 'Séries dramáticas'],
        style: ['Calientes', 'Intimista'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Primeira morte',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries de fantasia', 'Dramas românticos para a TV', 'Séries baseadas em livros'],
        style: ['Românticos', 'Suspense no ar'],
        exclusive: true,
    },
/////// séries românticas
    {
        tipo: 'série',
        nome: 'Fogo ardente',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Mexicano', 'Séries dramáticas', 'Ação', 'Aventura', 'Ação e aventura'],
        style: ['Calientes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Gotham',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Séries policiais', 'Séries baseadas em HQ', 'Séries dramáticas', 'Ação e aventura'],
        style: ['Empolgantes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Arrow',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Séries policiais', 'Séries baseadas em HQ', 'Séries dos EUA', 'Ação e aventura'],
        style: ['Empolgantes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'O ultimo dragão',
        descrição: 'Miguel tenta se livrar dos seus potenciais rivais no leilão do protótipo Grace. Jorge começa a trabalhar com Kenia e Magrelo. Chisca planeja sua vingança contra Valentín.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome}_large.webp`},
        genero: ['Mexicano', 'Séries policiais', 'Séries dramáticas', 'Ação e aventura'],
        style: ['Empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Respire',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Suspense para a TV', 'Séries dramáticas', 'Séries dos EUA', 'Ação e aventura'],
        style: ['Sombrios', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Titãs',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries policiais', 'Séries de ficção científica', 'Séries baseadas em HQ', 'Ação e aventura'],
        style: ['Realistas', 'Sombrios'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'My name',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Coreano', 'Séries policiais', 'Suspense para a TV', 'Ação e aventura'],
        style: ['Sombrios', 'Suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Outer banks',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries teen', 'Séries dramáticas', 'Séries dos EUA', 'Ação e aventura'],
        style: ['Suspense no ar', 'Empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'The 100',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Séries de ficção científica', 'Programas sobre política', 'Séries baseadas em livros', 'Ação e aventura'],
        style: ['Violentos'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'The shannara chronicles',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Séries de fantasia', 'Séries baseadas em livros', 'Séries dramáticas', 'Ação e aventura'],
        style: [''],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Van hellsing',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Canadenses', 'Séries de fantasia', 'Séries baseadas em HQ', 'Ação e aventura'],
        style: ['Violentos', 'Sombrios', 'Empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Perdidos no espaço',
        descrição: 'Após um pouso forçado em um planeta desconhecido, a família Robinson tenta sobreviver aos perigos que encontra neste novo mundo.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome}_large.webp`},
        genero: ['Séries para toda a familia', 'Séries dramáticas', 'Séries dos EUA', 'Ação e aventura'],
        style: ['Suspense no ar'],
        exclusive: true,
    },
/////// ação e aventura, tags add por mim
    {
        tipo: 'série',
        nome: 'Alba',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Espanhol', 'Séries dramáticas sobre questões sociais', 'Séries dramáticas'],
        style: ['Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Anne with an E',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Canadense', 'Séries para a familia toda', 'Séries baseadas em livros'],
        style: ['Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Baby',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Italiano', 'Séries teen', 'Séries dramáticas'],
        style: ['Comoventes', 'Intimista'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: '13 Reasons why',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries de mistério', 'Séries baseadas em livros', 'Séries teen'],
        style: ['Sombrios', 'Suspense no ar', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Coisa mais linda',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Brasileiro', 'Música', 'Dramas românticos para TV'],
        style: ['Sentimentais', 'Aqui tudo é possível'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'O gambito da rainha',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries baseadas em livros', 'Séries dramáticas sobre questões sociais', 'Séries dramáticas'],
        style: ['Complexos', 'Intimista', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Intersection',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Turco', 'Dramas românticos para TV', 'Séries dramáticas'],
        style: ['Comoventes', 'Românticos'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Valéria',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Espanhol', 'Dramas românticos para TV', 'Séries de comédia romântica'],
        style: ['Paar suspirar', 'Calientes', 'Espirituosos'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Away',
        descrição: 'A astronauta Emma Green comanda uma perigosa expedição rumo a Marte e deixa para trás o marido e a filha por três anos.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome}_large.webp`},
        genero: ['Séries de ficção científica', 'Dramas românticos para TV', 'Séries baseadas em livros'],
        style: ['Comoventes', 'Empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Heartland',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Canadense', 'Séries baseadas em livros', 'Séries para a familia toda'],
        style: ['Sentimetais', 'Comoventes'],
        exclusive: false,
    },
/////// Dramas emocionantes para TV: +sexlife, on my block
    {
        tipo: 'série',
        nome: 'Amor ocasional',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Francês', 'Séries de comédia romântica', 'Comédias para a TV'],
        style: ['Românticos', 'Alto astral'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Sex education',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Britânico', 'Séries teen', 'Séries dramáticas'],
        style: ['Apimentados', 'Irreverentes', 'Emoções contraditórias'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Superstore',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Sitcoms', 'Comédias para a TV', 'Séries dos EUA'],
        style: ['Irreverentes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'The good place',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Sitcoms', 'Comédias para a TV', 'Séries dos EUA'],
        style: ['Espirituosos', 'Peculiares'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'The ranch',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Sitcoms', 'Comédias para a TV', 'Séries dramáticas'],
        style: ['Irreverentes', 'Emoções contraditórias', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Sempre bruxa',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Colombiano', 'Séries de fantasia', 'Séries baseadas em livros', 'Comédia romântica'],
        // Obs.: tag 'Comédia' add por mim
        style: ['Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'The bold type',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['Séries dramáticas', 'Comédias para a TV', 'Séries dos EUA'],
        style: ['Espirituosos', 'Intimista'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Familia em concerto',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Música', 'Sitcoms', 'Séries para a familia toda'],
        style: ['Alto astral'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Maldivas',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Brasileiro', 'Séries de mistério', 'Séries dramáticas'],
        style: ['Irreverentes', 'Suspense no ar'],
        exclusive: true,
    },
/////// Comédias para a TV: + valéria, ginny e georgia, betty nova york
    {
        tipo: 'série',
        nome: 'Você',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries baseadas em livros', 'Suspense para TV', 'Séries dramáticas'],
        style: ['Sombrios'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Bridgerton',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Dramas românticos para TV', 'Séries baseadas em livros', 'Obras de época'],
        style: ['Para suspirar', 'Espirituosos', 'Comoventes'],
        exclusive: true,
    },
//////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tipo: 'filme',
        nome: 'O date perfeito',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Comédias românticas', 'Filmes teen', 'Comédia'],
        style: ['Para suspirar', 'Encantador', 'Espirituosos'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Com amor, anônima',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Mexicano', 'Dramas', 'Filmes teen'],
        style: ['Peculiaridades', 'Alto astral', 'Românticos'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Lulli',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Brasileiro', 'Filmes brasileiros', 'Comédias brasileiras', 'teen'],
        // Obs: tag 'teen' add por mim
        style: ['Alto astral', 'Comoventes'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'A barraca do beijo',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Filmes teen', 'Comédias Românticas', 'Filmes baseados em livros'],
        style: ['Para suspirar', 'Encantador', 'Peculiares'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'O amor move ondas',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Polonês', 'Filmes teen', 'Dramas'],
        style: ['Comoventes', 'Intimista', 'Românticos'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'O mundo sombrio de sabrina',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['Séries de fantasia', 'Séries baseadas em HQ', 'Séries teen'],
        style: ['Arrepiantes', 'Sombrios'],
        exclusive: true,
    },
/////// para jovens adultos
    {
        tipo: 'série',
        nome: 'Emily em paris',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['dramas româncitos para a tv', 'séries de comédia romântica', 'séries dramáticas'],
        style: ['peculiares', 'românticos'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Alice em borderland',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['japonês', 'séries de ficção científica', 'séries baseadas em mangá'],
        style: ['sombrios', 'suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Wandinha',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['séries de mistério', 'séries policiais', 'séries de fantasia'],
        style: ['humor seco'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Recruta',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['suspense para a tv', 'séries dramáticas', 'séries dos EUA'],
        style: ['suspense no ar', 'empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: '',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: [''],
        style: [''],
        exclusive: undefined,
    },
// top10 séries
    {
        tipo: 'filme',
        nome: 'O limite da traição',
        descrição: 'A íntegra e dócil Grace confessa ter assassinado seu marido, mas sua jovem advogada desconfia de algo e parte em busca da verdade. Um filme de Tyler Perry.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome}_large.webp`},
        genero: ['Dramas', 'Filmes de suspense'],
        style: ['Sinistros', 'Suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Sandman',
        descrição: 'Após anos aprisionado, Morpheus, o Rei dos Sonhos, embarca em uma jornada entre mundos para recuperar o que lhe foi roubado e restaurar seu poder.',
        get banner() {return `banners/${this.nome}.jpg`},
        get large_banner() {return `banners/${this.nome}_large.webp`},
        genero: ['Séries de fantasia', 'Séries dramáticas', 'Séries dos EUA'],
        style: ['Sombrios'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Class onion, um mistério knives out',
        descrição: 'Desvende um mistério de assassinato envolvendo um grupo de amigos excêntricos e um detetive brilhante neste filme "divertido de assistir até mesmo pela segunda vez", segundo a BBC.',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['mistério', 'policiais', 'comédia'],
        style: ['excêntricos', 'irreverentes', 'espirituosos'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Manifest',
        descrição: 'O voo 828 chega a Nova York com passageiros que não sabem que estão desaparecidos há anos e precisam lidar com um misterioso fenômeno que mudará suas vidas.',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['séries de mistério', 'séries de ficção científica', 'séries dramáticas'],
        style: ['realidade alternativa', 'suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Cobra kai',
        descrição: 'Décadas depois da competição que mudou suas vidas, a rivalidade entre Johnny e Daniel está de volta nesta sequência da trilogia Karatê Kid.',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['séries dramáticas', 'comédia pra tv', 'série dos EUA'],
        style: ['empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'O poder e a lei',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['séries de mistério', 'séries policiais', 'séries de tribunal'],
        style: ['espirituosos', 'suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'O amante de lady chatterley',
        descrição: 'Infeliz no casamento, a aristocrata Lady Chatterley se envolve em um romance ardente com um funcionário do marido.',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['filmes sobre questões sociais', 'obras de época', 'filmes baseados em livros'],
        style: ['Calientes', 'Intimista', 'comoventes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Fidelidade',
        descrição: 'Um casamento aparentemente feliz começa a desmoronar depois que a fidelidade do marido é questionada e ambos os cônjuges são tentados por outros desejos.',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['italiano', 'dramas românticos para a tv', 'séries baseadas em livro'],
        style: ['Calientes', 'Comoventes', 'Românticos'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Amor, verdade ou consequência 2',
        descrição: 'Um novo grupo de casais chegou para testar a força de seus relacionamentos. O problema é que, às vezes, a verdade pode atrapalhar a busca por amor e dinheiro.',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['espanhol', 'reality show de competição', 'reality shows'],
        style: ['Escandalosos', 'Calientes'],
        exclusive: true,
    },

    {
        tipo: 'filme',
        nome: 'Traição e desejo',
        descrição: 'Duas pessoas entram na vida de um casal bem-sucedido. Será que o casamento resiste à tentação e ao ciúme?',
        get banner() {return `banners/${this.nome}.webp`},
        genero: ['dramas', 'filmes românticos'],
        style: ['Intimista', 'Comoventes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Clickbait',
        descrição: 'Quando Nick Brewer é sequestrado e sua vida passa a depender de um sinistro jogo online, as pessoas próximas a ele correm para descobrir quem está por trás disso.',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: ['séries de mistério', 'séries policiais', 'suspense para a tv'],
        style: ['suspense no ar', 'comoventes', 'empolgantes'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Um de nós está mentindo',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['séries de mistério', 'séries policiais', 'séries baseadas em livros'],
        style: ['suspense no ar'],
        exclusive: true,
    },

    {
        tipo: 'série',
        nome: 'Riverdale',
        descrição: '',
        get banner() {return `banners/${this.nome}.webp`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['séries de mistério', 'séries policiais', 'séries baseadas em HQ'],
        style: ['excêntricos', 'sombrio', 'comoventes'],
        exclusive: false,
    },

    {
        tipo: 'série',
        nome: 'Warrior Nun',
        descrição: 'Uma jovem acorda no necrotério com superpoderes e descobre que faz parte de uma seita secreta de freiras caçadoras de demônios.',
        get banner() {return `banners/${this.nome}.jpg`},
        get top10() {return `banners/top10/${this.nome}.jpg`},
        genero: ['séries de fantasia', 'séries teen', 'séries baseadas em HQ'],
        style: ['suspense no ar', 'empolgantes'],
        exclusive: true,
    },

    {
        tipo: '',
        nome: '',
        descrição: '',
        get banner() {return `banners/${this.nome}.jpg`},
        genero: [''],
        style: [''],
        exclusive: undefined,
    },
]


let top10_today = {brasil: {
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
    },

    {
        name: 'Filmes inspiradores',
        func: (index) => {return index.style.some(i => {  return i.toLowerCase().includes('aqui tudo é possível')  }) && index.tipo == 'filme'}
    },

    {
        name: 'Séries românticas',
        func: (index) => { return (
            index.style.some(i => {  return i.toLowerCase().includes('românticos')  }) || index.genero.some(i => {return i.toLowerCase().includes('romântic')})
            ) && index.tipo == 'série' ;}
    },

    {
        name: 'Dramas emocionantes para TV',
        func: (index) => {return (
            index.style.some(i => {  return i.toLowerCase().includes('comoventes')  }) || index.genero.some(i => {return i.toLowerCase().includes('drama') || i.toLowerCase().includes('dramátic')})
            ) && index.tipo=='série' ;}
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    },


    {
        name: 'Comédias para a TV',
        func: (index) => {return (
            index.style.some(i => {  return i.toLowerCase().includes('irreverentes')  }) || index.genero.includes('Sitcoms') || index.genero.some( i => {return i.toLowerCase().includes('comédia')} )
            ) && index.tipo=='série' ;}
    },

    {
        name: 'Para jovens adultos',
        func: (index) => {return index.genero.some(i => i.toLowerCase().includes('teen'))}
    },


    {
        name: 'Filmes românticos',
        func: (index) => { return (
            index.style.some(i => {  return i.toLowerCase().includes('românticos')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('romântic');})
            ) && index.tipo == 'filme' ;}
    },

    {
        name: 'Filmes baseados em livros',
        func: (index) => {return index.genero.some(i => {return i.toLowerCase().includes('livro')}) && index.tipo == 'filme' ;}
    },

    {
        name: 'Séries baseadas em livros',
        func: (index) => {return index.genero.some(i => {return i.toLowerCase().includes('livro')}) && index.tipo == 'série' ;}
    },

    {
        name: 'Séries românticas baseadas em livros',
        func: (index) => {return (
            index.style.some(i => {  return i.toLowerCase().includes('românticos')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('romântic')})
            ) && index.genero.some(i => {return i.toLowerCase().includes('livro')}) && index.tipo == 'série' ;}
    },

    {
        name: 'Ação e aventura',
        func: (index) => {  return index.genero.some(i => {return i.toLowerCase().includes('ação e aventura')})  ;}
    },

    {
        name: 'Filmes repletos de suspense',
        func: (index) => {  return (
            index.style.some(i => {  return i.toLowerCase().includes('sinistros')  }) || index.style.some(i => {  return i.toLowerCase().includes('suspense')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('suspense')})
            ) && index.tipo==='filme' ;}
    },

    {
        name: 'Séries repletas de suspense',
        func: (index) => {  return (
            index.style.some(i => {  return i.toLowerCase().includes('sinistros')  }) || index.style.some(i => {  return i.toLowerCase().includes('suspense')  }) 
            || index.genero.some(i => {return i.toLowerCase().includes('suspense')})
            ) && index.tipo==='série' ;}
    },

    {
        name: 'Picantes',
        func: (index) => {return index.style.some(i => {  return i.toLowerCase().includes('calientes')  }) || index.style.some(i => {  return i.toLowerCase().includes('intimista')  })}
    },

    {
        name: 'Séries policiais',
        func: (index) => {return index.genero.some(i => {  return i.toLowerCase().includes('policia')  }) && index.tipo==='série'}
    },

    {
        name: 'Em alta',
        func: (index) => {return trendings.some(i => {  return i.toLowerCase()===index.nome.toLowerCase()  })}
    },

    {
        name: 'Principais buscas',
        func: (index) => {return top_searchs.some(i => {  return i.toLowerCase()===index.nome.toLowerCase()  })}
    }


]



module.exports = content
// séries emotivas, lançamentos, lançamentos dos ultimos 12 meses, adicionados recentemente
















// implementados: séries românticas, filmes inspiradores, dramas emocionantes para TV, comédias para a TV, Campeões de bilheteria - aventuras empolgantes para a família inteira, séries de ação e aventura, para jovens adultos, filmes românticos, filmes baseados em livros, Séries baseadas em livros, séries românticas baseadas em livros, filmes repletos de suspense
// principais escolhas para você, principais buscas, em alta, top 10 séries brasil hoje, top 10 em filmes hoje

// não vai rolar: amor em qualquer época, dramas românticos, ação com fantasia, romance, comédia, aventura, séries, favoritos da crítica, populares da netflix, 
// Filmes de hollywood dublados em português, filmes e séries europeus, séries estrangeiras dubladas em português, produções de hollywood, fim de ano, séries estrangeiras, séries para maratonar, filmes premiados, séries empolgantes de ficção científica e fantasia
// a vez delas - ação e aventura, jovens e poderosas, filmes com mulheres fortes, filmes premiados, dramas baseados em livros, assista em fins de semana, dramas hollywoodianos, Dramas, Assistir novamente, séries dramáticas, mulheres por trás das câmeras, só na netflix




// scroll top, left, width height