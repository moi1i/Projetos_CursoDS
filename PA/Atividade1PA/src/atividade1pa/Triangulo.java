
package atividade1pa;

import java.util.Scanner;


public class Triangulo {
Scanner teclado = new Scanner(System.in);

public double lado1;
public double lado2;
public double lado3;
public String tipo = ("Tipo de triângulo: ");


  public void calcularTriangulo(){
      
      System.out.println("Coloque o primeiro valor");
      lado1 = teclado.nextDouble();
      System.out.println("Coloque o segundo valor");
      lado2 = teclado.nextDouble();
      System.out.println("Coloque o terceiro valor");
      lado3 = teclado.nextDouble();
      
  if (lado1 == lado2 && lado1 == lado3){
      System.out.println(tipo + "equilátero");
  } else if (lado1 == lado2 || lado1 == lado3){ 
      System.out.println( tipo + "isóscele"); 
  }
  else {System.out.println(tipo + "escaleno");
    } 
  
  }

}
