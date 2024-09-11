<h2>Ejercicio 21</h2>
<h3>contador ascendente </h3>
<pre>
    <code>
        Algoritmo contador_ascendente
            contador=0
            Mientras contador < 10 Hacer
                contador=contador+1
                Escribir "numero actual ",contador
            Fin Mientras
	    FinAlgoritmo
    </code>
    <br>

<pre>
<h2>Ejercicio 22 </h2>
<h3> Contador descendente</h3>
<pre>
  <code>
    Algoritmo contador_decendente
      contar=11
      Mientras contar>1 Hacer
        contar=contar-1
        Escribir "numero actual " ,contar
      Fin Mientras
    FinAlgoritmo
  </code>
</pre>  

<br>

<h2>Ejecicio 23 </h2>
<h3>Suma de numeros positivos </h3>
<pre>
  <code>
    Algoritmo suma_de_numeros_positivos
      escribir "ingrese un numero"
      Leer num
      Mientras num>0 Hacer
        suma=suma+num
        escribir "ingrese un numero"
        Leer num
      Fin Mientras
      Escribir "la suma es de: ",suma
    FinAlgoritmo
  </code>
</pre>  

<br>

<h2>Ejercicio 24 </h2>
<h3>Adivina el numero</h3>

<pre>
  <code>
    Algoritmo sin_titulo
    Definir numerol Como Entero
    
    numero2=28
    Mientras numerol<>numero2 Hacer
      Escribir "ingrese otro numero"
      leer numerol
    FinMientras
    FinAlgoritmo
  </code>
</pre> 
<br>

<h2>Ejercicio 25</h2>
<h3>Validación de  contraseña</h3>
<pre>
  <code>
    Algoritmo sin_titulo
      definir contra Como Entero
      
      contra2=242005
      
      Mientras contra<>contra2 Hacer
        Escribir "ingrese contraseña"
        leer contra
      FinMientras
    FinAlgoritmo
  </code>
</pre> 
<br>

<h2>Ejercicio 26</h2>
<h3>Número positivo</h3>
<pre>
  <code>
    Algoritmo numero_positivo
      escribir "ingrese un numero"
      Leer num
      Mientras num<>0 Hacer
        suma=suma+num
        escribir "ingrese un numero"
        Leer num
      Fin Mientras
      Escribir "la suma es de: ",suma
    FinAlgoritmo
  </code>
</pre>  
<br>

<h2>Ejercicio 27</h2>
<h3>Suma de numeros pares</h3>
<pre>
  <code>
    Algoritmo suma_de_numeros_pares
      definir num, cont Como Entero
      Repetir
        escribir "ingrese un numero"
        leer num
        cont=cont+num
      Hasta Que num=0
      
      escribir "la suma de los numeros pares es " cont
    FinAlgoritmo
  </code>
</pre> 
<br>
 
<h2>Ejercicio 28</h2>
<h3>Adivina el numero</h3>
<pre>
  <code>
    Algoritmo adivina_el_numero
      Definir num Como entero
      Repetir
        escribir"adivine el numero del 1 al 50"
        leer num
        
      Hasta Que num=30
      escribir "correcto"
    FinAlgoritmo
  </code>
</pre>

<br>

<h2>Ejercicio 29</h2>
<h3>Calculo factorial</h3>

<pre>
  <code>
    Algoritmo calculo_factorial
      definir f, resultado Como Entero
      Escribir "In grese el numero factorial no negativo"
      Leer f
      contador=1
      resultado=f
      Mientras (contador<=f) Hacer
        resultado=resultado*contador;
        contador=contador+1
        
      Fin Mientras
      escribir "el resultado es de " , resultado 
    FinAlgoritmo
  </code>
</pre> 

<br>

<h2>Ejercicio 30</h2>
<h3>Validación de entrada</h3>

<pre>
  <code>
    Algoritmo sin_titulo
      Definir num Como Caracter
      Repetir
        escribir "ingrese contraseña de 8 caracteres"
        leer num
        si Longitud(num) < 8 Entonces
          
        FinSi
      Hasta Que Longitud(num) = 8
      escribir "su contraseña es correcta"
    FinAlgoritmo
  </code>
</pre>  

