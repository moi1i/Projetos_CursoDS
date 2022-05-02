
package atividade1pa;

import java.util.Scanner;


public class Notas {
    Scanner teclado = new Scanner(System.in);
    
    public String nome;
    public double n1;
    public double n2;
    public double n3;
    public double media;

    public void calcularMedia() {
        System.out.println("Nome do aluno: ");
        nome = teclado.nextLine();
       System.out.println("Informe a primeira nota");
       n1 = teclado.nextDouble();
       System.out.println("Informe a segunda nota");
       n2 = teclado.nextDouble();
       System.out.println("Informe a terceira nota");
       n3 = teclado.nextDouble();
       media = (n1+n2+n3)/3;
    
    if (media>=7){
    System.out.println("A média do aluno é: " + media + "\n" + nome + " esta aprovado.");
    }
    else if (media<=6){
    System.out.println("A média do aluno é: " + media + "\n" + nome + " esta em recuperação.");
    }
    
  }

}