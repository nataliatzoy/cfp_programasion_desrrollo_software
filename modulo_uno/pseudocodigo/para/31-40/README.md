<h2>Ejercicio 31</h2>
<h3>Suma de numeros</h3>
<pre>
    <code>
        Algoritmo suma_de_numeros
            definir contador Como Entero
            Para i<-1 Hasta 10 Con Paso 1 Hacer
                contador=contador+i
                Escribir contador;
            Fin Para
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 32</h2>
<h3>Tabla de multiplicar</h3>
<pre>
    <code>
        Algoritmo tabla_de_multiplicar
            definir x, n, resultado Como Entero
            Escribir 'ingrese un numero'
            Leer n
            para x=1 Hasta 10 Hacer
                resultado=n*x
                Escribir n, 'x' ,x '=',resultado
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 33</h2>
<h3>Factorial</h3>
<pre>
    <code>
        Algoritmo factorial
            definir n,f Como Entero
            f=1
            Escribir 'ingrese el numero factorial'
            leer n
            para i=1 hasta n Con Paso 1 Hacer
                f=f*i
                
            FinPara
            escribir 'El factorial de ',n ' es ',f
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 34</h2>
<h3>Contador regresivo</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir i Como Entero
            Para i<-10 Hasta 1 Con Paso -1 Hacer
                contador=contador-i
                escribir contador;
            Fin Para
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 35</h2>
<h3>Impresion de caracteres</h3>
<pre>
    <code>
        Algoritmo Impresion_de_carecteres
            definir g Como Caracter
            g=''
            Para i<-1 Hasta 5 Con Paso  1 Hacer
                g=g+'*'
            Fin Para
            escribir g;
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 36</h2>
<h3>potencia de 2</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir p Como Entero
            p=2
            r=1
            para i=1 Hasta 5 Con Paso 1 hacer
                r=r*p
                escribir  r
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 37</h2>
<h3>Suma de numeros pares</h3>
<pre>
    <code>
        Algoritmo Suma_de_numeros_pares
            Para i<-2 Hasta 20 Con Paso 2 Hacer
                escribir i
                i=i+2
	        Fin Para
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 38</h2>
<h3>Contador de dígitos</h3>
<pre>
    <code>
        Algoritmo contador_de_digitos
            definir num Como Entero
            escribir "escriba un numero"
            leer num 
            contador=" "
            Para num<-0 Hasta 10 Con Paso 1 Hacer
                contador=contador    
            Fin Para
        FinAlgoritmo
    </code>
</pre>
<br>
<h2>Ejercicio 39</h2>
<h3>Secuencia Fibonacci</h3>
<pre>
    <code>
        Algoritmo secuencia_fibonacci
	
            definir a, b Como Entero
            a=0
            b=1
            para i=1 Hasta 10 Con Paso 1
                escribir a
                c=a+b
                a=b
                b=c
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>
let
<h2>Ejercicio 40</h2>
<h3>Patrón numerico</h3>
<pre>
    <code>
        Algoritmo patron_numerico
            definir num Como Texto
            Para i<-1 Hasta 10 Con Paso 1 Hacer
                contador=contador+1
                num=Concatenar(num, ConvertirATexto(contador))
                escribir num
            Fin Para
        FinAlgoritmo
    </code>
</pre>
<br>