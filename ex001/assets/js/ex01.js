const lista_truta = [
    'Banana', 'Uva', 'Maça','Pera', 
    'Laranja', 'Abacate','Abacaxi', 
    'Mamão', 'Melancia','Jaca', 'Morango', 
    'Limão','Manga', 'Caju', 'Ciriguela'
]


function criarLista() {
    let lista = document.querySelector('.lista')
    
    lista_truta.forEach(x=>{
        let item = document.createElement('li')
        item.textContent = x
        lista.appendChild(item)
    })
}
criarLista()