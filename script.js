
setTimeout( () => {
    display_teaser()
    setInterval( display_teaser, 8000 );

    let index = Math.round(Math.random()*content_relations.length-1)
    for (i=0 ; i<content_relations.length ; i++) {
        display_sections('random')
        if (index===i) {display_tops('series')}
    }

}, 3000)
















let arr=[]

async function display_teaser() {
    let target
    let data = content.filter(indice => {return indice.large_banner})
    let header = document.querySelector('header')
    let random = () => {
        target = data[Math.round(  Math.random()*(data.length-1)  )]
        if (header.children[0].children[1]) {
            if (header.children[0].children[1].textContent===target.nome) {random()}
        }
    }

    random() ; resetAnim(header.children[0])

    header.style.backgroundImage = `url(${target.large_banner.replaceAll(' ', '%20').toLowerCase()})`
    header.style.animationPlayState = 'paused'
    header.children[0].innerHTML = `
    <h3><img src=assets/logo.png height="32">${target.tipo}</h3>
    <h1>${target.nome}</h1>
    <span>${target.descrição}</span>
    <div>
        <button style="background-color:white;"><img src="assets/play.svg" style="padding-right:10px"> Assistir </button>
        <button style="background-color:rgba(109, 109, 110, 0.7);color:white"><img src="assets/info.svg" style="padding-right:10px;"> Mais Informações </button>
    </div>
    `
}




function display_sections(key) {
    let relation ; let count = Math.round(Math.random()*100)

    if (key === 'random') { 
        let random = () => { 
            relation = content_relations[Math.round(  Math.random()*(content_relations.length-1)  )]
            if (arr.includes(relation)) {random()} else {arr.push(relation)}
        }

        random()
    }

    else if (typeof key ==="string") { 
        content_relations.find(indice => {return indice.name.toLowerCase().includes(key)})
        if (arr.includes(relation)) {return undefined} else {arr.push(relation)}
    }

    else if (typeof key ==="number") {relation = content_relations[key]}


    let section = document.createElement('section')
    section.innerHTML = `
        <p><b>${relation.name}</b></p>
        <div class="inputs"></div>
        <div class="carrosel_itens"></div>
    `
    document.querySelector('main').append(section)
    document.querySelector('main').children[1].style.display = 'none'


    if (Math.ceil(content.filter(relation.func).length/4) > 1) {

        for (let i=1 ; i<=Math.ceil(content.filter(relation.func).length/4) ; i++) { 
            section.children[1].innerHTML += `<input type="radio" name="carrossel${count}">`
        }

        section.innerHTML += `
            <span class="c-button c-btn1"></span>
            <span class="c-button c-btn2"></span>
        `

        section.children[1].children[0].checked = true

        section.children[4].onclick = () => {
            section.children[2].scrollBy(341*4, 0)
        }

        section.children[3].onclick = () => {
            section.children[2].scrollBy(-341*4, 0)
        }

        section.children[2].onscroll = (res) => {
            if (res.scrollLeft != 0) {section.children[3].style.display = 'block'}
            else {section.children[3].style.display = 'none'}
        }

    }

    let random_sorted = content.filter(relation.func).sort(() => {  return Math.round(Math.random()*-1)  })
    for (let indice of random_sorted) {
        section.children[2].innerHTML += `<img src="${indice.banner.toLowerCase()}">`
    }

    

    
}


function display_tops(key) {

    let relation = content.filter(
        (index) => {return top10_today.brasil[key].some(i => {  return i.toLowerCase()===index.nome.toLowerCase()  })}
    )
    let section = document.createElement('section'); section.classList.add('top10')
    section.innerHTML = `
        <p><b>top 10 ${key}</b></p>
        <div class="carrosel_itens"></div>
        <span class="c-button c-btn1"></span>
        <span class="c-button c-btn2"></span>
    `

    document.querySelector('main').append(section)

    for(let indice of relation) {
        section.children[1].innerHTML += `
        <div>
            <span>${relation.indexOf(indice)+1}</span>
            <img src="${indice.top10.toLowerCase()}" width="284" height="398">
        </div>
        `
    }

    section.children[2].onclick = () => {
        section.children[1].scrollBy(-341*4, 0)
    }

    section.children[3].onclick = () => {
        section.children[1].scrollBy(341*4, 0)
    }

    section.children[1].onscroll = (res) => {
        if (res.scrollLeft != 0) {section.children[2].style.display = 'block'}
        else {section.children[2].style.display = 'none'}
    }


}


function resetAnim(el) {
    el.style.animation = 'none'
    el.offsetWidth
    el.style.animation = ''
}



