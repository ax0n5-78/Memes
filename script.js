serase = document.getElementById('screen')
menes = ['ai dento', 'que pro', 'analise', 'sabe muito']
serase.innerHTML = '<ul><li>'+menes.join('</li><li>')+'</li></ul>'

function eita(){
    persona = document.getElementById('menePersona').value
    persona = persona.charAt(0).toUpperCase() + persona.slice(1).toLowerCase()

    if(menes.indexOf(persona) == -1){
        menes.push(persona)
    } else{
        alert('Hermano, já tem esse mene na list')
    }

    serase.innerHTML = '<ul><li>'+menes.join('</li><li>')+'</li></ul>'
}

function que(){
    persona = document.getElementById('menePersona').value
    persona = persona.charAt(0).toUpperCase() + persona.slice(1).toLowerCase()

    if(menes.indexOf(persona) == -1){
        alert('Tá lokeando, tem nada pra remover, doido kkkk')
    } else{
        menes.splice(menes.indexOf(persona),1)
    }

    serase.innerHTML = '<ul><li>'+menes.join('</li><li>')+'</li></ul>'
}
//lits[1]
//lits.length
//lits.indexOf('casal')
//lits.push('amor')
//lits[0] = 'viagem'
//lits.pop()
//lits.shift()
//lits.splice(3,1)
//lits.reverse()
//document.write(lits.length)
//'<ul><li> + menes.join('</li><li>') + '</li>'</ul>'
