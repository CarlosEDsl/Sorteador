var button = document.getElementById("button")
button.addEventListener('click', ()=>{
    var Item = getData("#ITEM-PARA-SORTEAR")
    var Items = {}
    createLine(Item)
})
function createLine(line) {
    const linha = document.createElement("il")
    const node = document.createTextNode(line)
    linha.appendChild(node)
    const lista = document.getElementById("List")
    lista.appendChild(linha)
}
function getData(form){
    var input = document.querySelector(form)
    var text = input.value
    return text;
}