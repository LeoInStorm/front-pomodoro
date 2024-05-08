let minutos = '25';
document.getElementById('button_remover').disabled = true;

function pomodoro() {
    document.getElementById('minutos').innerText = '25';
    document.getElementById('segundos').innerText = '00';
    minutos = '25'
}
function pausa() {
    document.getElementById('minutos').innerText = '05';
    document.getElementById('segundos').innerText = '00';
    minutos = '05';
}
function descanso() {
    document.getElementById('minutos').innerHTML = '15';
    document.getElementById('segundos').innerHTML = '00';
    minutos = '15';
}

function start() {
    if (minutos == '25') {
        document.getElementById('button_start').disabled = true;
        document.getElementById('button_pausa').disabled = true;
        document.getElementById('button_descanso').disabled = true;
        minutos = 25 - 1;
        segundos = 59;

        document.getElementById('minutos').innerHTML = minutos;
        document.getElementById('segundos').innerHTML = segundos;

        var min_interval = setInterval(minTimer, 60000);
        var seg_interval = setInterval(segTimer, 1000);

        function minTimer() {
            minutos = minutos - 1;
            document.getElementById('minutos').innerHTML = minutos;

        }
        function segTimer() {
            segundos = segundos - 1
            document.getElementById('segundos').innerHTML = segundos;

            if (segundos <= 0) {
                segundos = 60;

                if (minutos <= 0) {
                    clearInterval(min_interval);
                    clearInterval(seg_interval);
                    document.getElementById('button_start').disabled = false;
                    document.getElementById('button_pausa').disabled = false;
                    document.getElementById('button_descanso').disabled = false;
                    pomodoro();
                }
            }

        }
    }
    else if (minutos == '15') {
        document.getElementById('button_start').disabled = true;
        document.getElementById('button_pomodoro').disabled = true;
        document.getElementById('button_pausa').disabled = true;
        minutos = minutos - 1;
        segundos = 59;

        document.getElementById('minutos').innerHTML = minutos;
        document.getElementById('segundos').innerHTML = segundos;

        var min_interval = setInterval(minTimer, 60000);
        var seg_interval = setInterval(segTimer, 1000);

        function minTimer() {
            minutos = minutos - 1;
            document.getElementById('minutos').innerHTML = minutos;

        }

        function segTimer() {
            segundos = segundos - 1
            document.getElementById('segundos').innerHTML = segundos;

            if (segundos <= 0) {
                segundos = 60;
                if (minutos <= 0) {
                    document.getElementById('button_start').disabled = false;
                    document.getElementById('button_pomodoro').disabled = false;
                    document.getElementById('button_pausa').disabled = false;
                    clearInterval(min_interval);
                    clearInterval(seg_interval);
                    descanso();
                }
            }
        }
    }
    else {
        document.getElementById('button_start').disabled = true;
        document.getElementById('button_pomodoro').disabled = true;
        document.getElementById('button_descanso').disabled = true;

        minutos = minutos - 1;
        segundos = 59;

        document.getElementById('minutos').innerHTML = minutos;
        document.getElementById('segundos').innerHTML = segundos;

        var min_interval = setInterval(minTimer, 60000);
        var seg_interval = setInterval(segTimer, 1000);

        function minTimer() {
            minutos = minutos - 1;
            document.getElementById('minutos').innerHTML = minutos;

        }

        function segTimer() {
            segundos = segundos - 1
            document.getElementById('segundos').innerHTML = segundos;

            if (segundos <= 0) {
                segundos = 60;
                if (minutos <= 0) {
                    document.getElementById('button_start').disabled = false;
                    document.getElementById('button_pomodoro').disabled = false;
                    document.getElementById('button_descanso').disabled = false;
                    clearInterval(min_interval);
                    clearInterval(seg_interval);
                    pausa();
                }
            }
        }
    }

}
function adicionar() {
    document.getElementById('button_remover').disabled = false;
    let atividades = [];
    let tarefa = document.getElementById('tarefa');

    if (tarefa.value == '') {
        alert('informe a tarefa que você deseja inserir');
        return;
    }

    let resultado = document.getElementById('resultado');



    if (resultado.textContent == '') {
        resultado.textContent = tarefa.value;
    }

    else {
        resultado.textContent = resultado.textContent + '\n' + tarefa.value;
    }
    atividades.push(resultado.value);

    tarefa.value = '';
}


function remover(){
    atividades = [];
    document.getElementById('tarefa').textContent ='';
    document.getElementById('resultado').textContent ='';

    document.getElementById('button_remover').disabled = true;
}