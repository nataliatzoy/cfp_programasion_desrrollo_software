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
	     Algoritmo Ejercicio_58
	Definir matriz, op Como Entero
	Dimension matriz[10,10]                      
	Para i=1 Hasta 10 Con Paso 1 Hacer
		para j=1 hasta 10 Con Paso 1 Hacer
			matriz[i,j] = 1
		FinPara
	FinPara           
	Escribir ' '            
	matriz[1,3] = 5
	matriz[1,10]=7
	matriz[2,3] = 0
	matriz[3,3] = 0
	matriz[4,3] = 0
	matriz[4,4] = 0
	matriz[4,5] = 0
	matriz[5,5] = 0
	matriz[6,5] = 7
	matriz[6,6] = 0
	matriz[6,7] = 0
	matriz[5,7] = 0
	matriz[5,8] = 0
	matriz[5,9] = 0
	matriz[6,9] = 0
	matriz[7,9] = 0
	matriz[8,9] = 7
	matriz[8,8] = 0
	matriz[9,8] = 0
	matriz[9,7] = 0
	matriz[9,3]=7
	matriz[10,7] = 0            
	
	matriz[5,3] = 7
	matriz[4,7] = 0
	matriz[3,7] = 0
	matriz[6,3] = 0
	matriz[7,5] = 0
	matriz[7,3] = 7
	matriz[8,3] = 0
	matriz[9,3] = 0
	matriz[9,4] = 0
	matriz[9,5] = 7           
	Repetir
		
		Para i<-1 Hasta 10 Hacer
			Para j<-1 Hasta 10 Hacer
				si matriz[i,j] <> 1 y matriz[i,j] <> 5 y matriz[i,j]<> 7 Entonces
					matriz[i,j] = 0 
				FinSi
				Escribir  matriz[i,j], ' | ' Sin Saltar
			FinPara
			Escribir ''
		FinPara
		Escribir ''
		
		
		Escribir 'Ingrese una opción'
		Escribir '2. Bajar'
		Escribir '8. Subir'
		Escribir '6. Derecha'
		Escribir '4. Izquierda'
		Leer opc
		Segun opc
			2:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y i < 10 Entonces
							si matriz[i+1,j] = 1 Entonces
								matriz[i+1,j] = 5
								matriz[i,j] = 1
								i = 10
								j = 10
							FinSi
						FinSi
					FinPara
				FinPara
			6:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y i < 11 Entonces
							si matriz[i,j+1] = 1 Entonces
								matriz[i,j+1] = 5
								matriz[i,j] = 1
								i = 11
								j = 11
							FinSi
						FinSi
					FinPara
				FinPara
			4:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y i < 10 Entonces
							si matriz[i,j-1] = 1 Entonces
								matriz[i,j-1] = 5
								matriz[i,j] = 1
								i = 10
								j = 10
							FinSi
						FinSi
					FinPara
				FinPara
			8:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y j < 10 Entonces
							si matriz[i-1,j] = 1 Entonces
								matriz[i-1,j] = 5
								matriz[i,j] = 1
								i = 10
								j = 10
							FinSi
						FinSi
					FinPara
				FinPara
		FinSegun
		
		Limpiar Pantalla
	Hasta Que matriz[10,10] == 5
	
	Limpiar Pantalla
	Escribir 'Felicidades has ganado'
FinAlgoritmo
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
