const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const button = document.querySelector("#btn_copiar")
const button2 = document.querySelector("#btn_copiar2")
const todosCursos = [...document.querySelectorAll(".curso")]


todosCursos.map((el)=> {
    el.addEventListener("click", (evt)=> {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

button.addEventListener("click", ()=> {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=> {
        caixa2.appendChild(el)
    })
})


/* Racíociono do professor */


button2.addEventListener("click", ()=> {
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosNaoSelecionados.map((el)=> {
        caixa1.appendChild(el)
    })
})


/* Meu racíocino para voltar o elemento para a caixa 1 */

/* button2.addEventListener("dblclick", ()=> {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=> {
        caixa1.appendChild(el)
    })
}) */
