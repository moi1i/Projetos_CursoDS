
package caixaeletronico;

import java.util.Scanner;


public class Menu3 {
    Scanner teclado = new Scanner(System.in);
    
    public void executarMenu(){
    Conta objConta = new Conta();
    
        System.out.println("###### Menu com While ######");
        System.out.println("Escolha uma opção");
        System.out.println("1 - Saldo");
        System.out.println("2 - Depósito");
        System.out.println("3 - Saque");
        System.out.println("4 - Sair");
            
        int operacao = teclado.nextInt();
        float valor = 0;
        
        while(operacao != 4){
            
        /*Testa e executa a operação que o usuário escolheu*/
            switch(operacao){

            case 1:
                objConta.verificarSaldo();
                break;
                
            case 2:
                System.out.println("DIGITE UM VALOR DE DEPÓSITO");
                valor = teclado.nextFloat();
                objConta.realizarDeposito(valor);
                objConta.verificarSaldo();
                break;

            case 3:
                System.out.println("DIGITE UM VALOR DE SAQUE");
                valor = teclado.nextFloat();
                objConta.realizarSaque(valor);
                objConta.verificarSaldo();

            default:
                System.out.println("OCORREU UM ERRO!!!");
                
            }
            
        /*Mostra e recupera a próxima ação que o usuário deseja executar*/    
        System.out.println("###### Menu com While ######");
        System.out.println("Escolha uma opção");
        System.out.println("1 - Saldo");
        System.out.println("2 - Depósito");
        System.out.println("3 - Saque");
        System.out.println("4 - Sair");
            
        operacao = teclado.nextInt();
            
        }
        
        System.out.println("Sessão encerrada! obrigado por utilizar nossos serviços ");
        
    }
}
