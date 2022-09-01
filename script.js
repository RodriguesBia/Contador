var inicio = document.getElementById('escolhainicio');
var fim = document.getElementById('escolhafinal');
var pular = document.getElementById('escolhapular');
var res = document.getElementById('resposta');
var limp = document.getElementsByName('escolha')

function verificar(){
    if(inicio.value == ""|| inicio.value.length == 0|| fim.value == "" ||fim.value.length == 0 || pular.value == ""){
        alert('[ERRO] Todos os campos precisam ser preenchidos');
    } else{
        res.innerHTML='Contando: ';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(pular.value);
        if(p <= 0){
           var prefnull = confirm('Pular 0 numeros é inválido. Prefere que o pulo seja igual a 1 ?');

           if(prefnull == true){
            p = 1;
           } else {
            alert('Digite um número válido');
                return;
           }

            
    } if(i < f){
        for(var c = i; c<=f; c+=p){
            res.innerHTML += `${c} \u{27A1}`;
        }

    } else {
        for(var c = i; c>=f; c-= p){
            res.innerHTML += `${c} \u{2B05}`;
        }
    }

    res.innerHTML += `\u{1F6A8}`
}

    
}

function limpar(){
    var inicio = document.getElementById('escolhainicio').value = '';
    var fim = document.getElementById('escolhafinal').value = '';
    var pular = document.getElementById('escolhapular').value = '';
    var res = document.getElementById('resposta').value = '';
    
}