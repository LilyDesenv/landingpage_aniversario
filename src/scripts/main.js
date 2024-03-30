AOS.init();

const dataEvento = new Date("Jul 6, 2024 20:00:00");
const timeStampEvento = dataEvento.getTime();


const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEMMs= 1000 * 60;

    const distanciaParaEvento = timeStampEvento - timeStampAgora;
    const diasAteEvento = Math.floor(distanciaParaEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaParaEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaParaEvento % horaEmMs)/ minutoEMMs);
    const segundosAteEvento = Math.floor((distanciaParaEvento % minutoEMMs)/1000);


    if(distanciaParaEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Ops, o Evento Já passou!`;
    }else{
        document.getElementById('contador').innerHTML = ` Não Perca a Data!!<br> Começa em ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    }

    
},1000)