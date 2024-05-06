let minutos = '25';

function pomodoro() {
    document.getElementById('minutos').innerText = '25';
    document.getElementById('segundos').innerText = '00';
    minutos = '25'
    clearInterval(min_interval);
    clearInterval(seg_interval);
}
function pausa() {
    document.getElementById('minutos').innerText = '05';
    document.getElementById('segundos').innerText = '00';
    minutos = '05';
    clearInterval(min_interval);
    clearInterval(seg_interval);
}
function descanso() {
    document.getElementById('minutos').innerHTML = '15';
    document.getElementById('segundos').innerHTML = '00';
    minutos = '15';
    clearInterval(min_interval);
    clearInterval(seg_interval);
}
function start() {
    if (minutos == '25') {

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
                    pausa();
                }
            }

        }
    }
    else if (minutos == '15') {

        minutos = 15 - 1;
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

                    pomodoro();
                }
            }
        }
    }
    else {
        minutos = 1 - 1;
        segundos = 3;

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
                    descanso();
                }
            }
        }
    }

}
function adicionar() {
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