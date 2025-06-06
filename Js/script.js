
        const campoName1 = document.querySelector("#campoId1")
        const campoName2 = document.querySelector("#campoId2")
        const operacaoName = document.querySelector("#operacaoId")
        const respostaId = document.querySelector("#respostaId");
        let btnIgual = document.querySelector("#btnIgual").addEventListener('click',calcular)

        function calcular(){
            if(!campoName1.value){
                window.alert('Campo 1 está vazio')
                respostaId.value = "";
                campoName2.value = "";
            }

            else if(!campoName2.value){
                window.alert('Campo 2 está vazio')
                respostaId.value = "";
                campoName1.value = "";
            }

            else{
                //Aqui eu utilizo o parseFloat para mostrar os números após a virgula
                if(operacaoName.value === "somar"){
                    let valorCampo1 = parseFloat(campoName1.value);
                    let valorCampo2 = parseFloat(campoName2.value);
                    let resultado = valorCampo1 + valorCampo2;
                    respostaId.innerHTML = resultado;
                }

                if(operacaoName.value === "subtrair"){
                    let valorCampo1 = parseFloat(campoName1.value);
                    let valorCampo2 = parseFloat(campoName2.value);
                    let resultado = valorCampo1 - valorCampo2;
                    respostaId.innerHTML = resultado;
                }

                if(operacaoName.value === "multiplicar"){
                    let valorCampo1 = parseFloat(campoName1.value);
                    let valorCampo2 = parseFloat(campoName2.value);
                    let resultado = valorCampo1 * valorCampo2;
                    respostaId.innerHTML = resultado;
                }

                if(operacaoName.value === "dividir"){
                    let valorCampo1 = parseFloat(campoName1.value);
                    let valorCampo2 = parseFloat(campoName2.value);
                    let resultado = (valorCampo1 / valorCampo2).toFixed(2);
                    respostaId.innerHTML = resultado;
                }
            }
        }
