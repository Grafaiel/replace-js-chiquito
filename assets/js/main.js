function meuEscopo() {
    const adicionar = document.querySelector('#adicionar');
    const inputDnaRna = document.querySelector('#dna-rna');

    adicionar.addEventListener("click", adicionarDnaRna);

    function adicionarDnaRna() {
        const result = document.querySelector('.result');
        if (inputDnaRna){
            console.log(inputDnaRna.value);
            const result = document.querySelector('.result');
            let trocado = document.createElement('option');
            trocado.text = (inputDnaRna.value).replace(/T/g,'U');
            result.appendChild(trocado);
            inputDnaRna.value = '';
            inputDnaRna.focus();
            
            return result.innerHTML = `<p> ${trocado.text} </p> `;
        }
        

    }


}
meuEscopo();