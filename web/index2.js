fetch('http://localhost:1234/comentars')
.then(res => res.json())
.then(comentars =>{
    const html = comentars.map(comentar => {
        return `
        <article data-id="${comentar.id}">
            <h2>${comentar.titulo}</h2>

            <button>Eliminar</button>
        </article>
        `
    }).join('')

    document.querySelector('main').innerHTML = html

    document.addEventListener('click', e=>{
        if(e.target.matches('button')) {
            const article = e.target.closest('article')
            const id = article.dataset.id
        
        fetch(`http://localhost:1234/comentars/${id}`,{
                method:'DELETE'
            })
            .then(res =>{
                if(res.ok){
                    article.remove()
                }
            })
        }
    })
})