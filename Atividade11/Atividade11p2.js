function Conta(){
    var nomeCor, banco, numConta, saldo

    this.getSaldo = function(){
        return saldo;
    }
    this.getNomeCor = function(){
        return nomeCor;
    }
    this.getBanco = function(){
        return banco;
    }
    this.getNumConta = function(){
        return numConta;
    }

    this.setSaldo = function(sal){
        saldo = sal;
    }
    this.setNomeCor = function(nomCor){
        nomeCor = nomCor;
    }
    this.setBanco = function(banc){
        banco = banc;
    }
    this.setNumConta = function(numCont){
        numConta = numCont;
    }
}

function Corrente(){
    var saldoEspecial;

    this.getSalEspec = function(){
        return saldoEspecial;
    }
    this.setSalEspec = function(salEspec){
        saldoEspecial = salEspec;
    }
}

function Poupanca(){
    var juros, dataVenc;

    this.getJuros = function(){
        return juros;
    }
    this.getDataVenc = function(){
        return dataVenc;
    }

    this.setJuros = function(jur){
        juros = jur;
    }
    this.setDataVenc = function(dtVen){
        dataVenc = dtVen;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var ContaPoupanca = new Poupanca();
var ContaCorrente = new Corrente();

ContaCorrente.setSaldo(1000);
ContaCorrente.setSalEspec(500);
ContaCorrente.setNumConta(0001);
ContaCorrente.setNomeCor("José Silva");
ContaCorrente.setBanco("Nubank");

ContaPoupanca.setSaldo(2000);
ContaPoupanca.setNumConta(0002);
ContaPoupanca.setBanco("Itau");
ContaPoupanca.setNomeCor("Marcos Rocha");
ContaPoupanca.setJuros(400);
ContaPoupanca.setDataVenc("14/06/2024");

alert("Saldo da conta corrente: " + ContaCorrente.getSaldo() + "\nSaldo Especial da conta corrente: " + ContaCorrente.getSalEspec() + "\nNumero da conta: " 
+ ContaCorrente.getNumConta() + "\nNome do Correntista: " + ContaCorrente.getNomeCor() + "\nBanco: " + ContaCorrente.getBanco());

alert("Saldo da conta poupança: " + ContaPoupanca.getSaldo() + "\nJuros da conta poupança: " + ContaPoupanca.getJuros() + "\nNumero da conta: " 
+ ContaPoupanca.getNumConta() + "\nNome do Correntista: " + ContaPoupanca.getNomeCor() + "\nBanco: " + ContaPoupanca.getBanco() + "\nData de vencimento: " + ContaPoupanca.getDataVenc());