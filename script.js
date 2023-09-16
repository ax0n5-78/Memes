serase = document.getElementById('screen')
menes = ['ai dento', 'que pro', 'analise', 'sabe muito']
serase.innerHTML = '<ul><li>'+menes.join('</li><li>')+'</li></ul>'

function eita(){
    persona = document.getElementById('menePersona').value

    menes.push(persona)

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
