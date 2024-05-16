<h2>ejercicio 51</h2>
<h3>Suma de Matrices:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 52</h2>
<h3>Promedio por Columna:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 53</h2>
<h3>Suma de Diagonales:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 54</h2>
<h3>Mayor Elemento por Fila:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 55</h2>
<h3>Rotación de Matriz:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 56</h2>
<h3>Laberinto:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 57</h2>
<h3>Juego de la Vida (Conway's Game of Life):</h3>
<pre>
    <code>
    Algoritmo  DibujoProgresivoEstrella
	Definir matriz Como Caracter
	Definir i, j, posicion_inicial, posicion_actual Como Entero
	paso = 0
	
	posicion_inicial = Aleatorio(1,25);
	
	Dimension matriz[5,5]
	posicion_actual = 0;
	
	Para i = 1 Hasta 5 Con Paso 1
		Para j = 1 Hasta 5 Con Paso 1
			posicion_actual = posicion_actual + 1;
			Si(posicion_actual == posicion_inicial) Entonces
				matriz[i, j] = "*";
			SiNo
				Si(matriz[i, j] <> "*") Entonces
					matriz[i, j] = " ";
				FinSi
			FinSi
		FinPara
	FinPara
	
	Para i = 1 Hasta 5 Con Paso 1
		Para j = 1 Hasta 5 Con Paso 1
			Escribir  matriz[i, j] Sin Saltar;
		FinPara
		Escribir ""
	FinPara
	
	
	
FinAlgoritmo
    </code>
</pre>

<br>

<h2>ejercicio 58</h2>
<h3>Laberinto con Obstáculos y Algoritmo de Búsqueda:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 59</h2>
<h3>Rompecabezas del 15:</h3>
<pre>
    <code>
    </code>
</pre>

<br>

<h2>ejercicio 60</h2>
<h3>Sudoku Solver:</h3>
<pre>
    <code>
    </code>
</pre>

<br>