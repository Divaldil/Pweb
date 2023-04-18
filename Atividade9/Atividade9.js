        num1 = parseInt(prompt("Digite o numero 1"));
        num2 = parseInt(prompt("Digite o numero 2"));
        num3 = parseInt(prompt("Digite o numero 3"));

        function MaiorNum(num1, num2, num3){
            MaNum = 0;
            if(num1 > num2 && num1 > num3)
                MaNum = num1;
            else if(num2 > num1 && num2 > num3)
                MaNum = num2;
            else
                MaNum = num3

            return MaNum;
        } 

        var lista = new Array();
        lista[0] = num1;
        lista[1] = num2;
        lista[2] = num3;

        function OrdCres(num1, num2, num3){
            return lista.sort(function(a,b){return a-b});
        }

        alert("Maior numero: " + MaiorNum(num1, num2, num3));
        alert("numeros em ordem cresecente: " + OrdCres(lista));