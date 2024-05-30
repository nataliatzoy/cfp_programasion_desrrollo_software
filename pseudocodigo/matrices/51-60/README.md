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
		Algoritmo laberinto
			Definir ceros Como Entero
			definir a, s, d,w Como Caracter
			Dimensionar ceros(4,4)
			ceros[1,1]<-8
			ceros[2,1]<-1
			ceros[2,2]<-1
			ceros[3,1]<-1
			ceros[3,2]<-1
			ceros[3,3]<-1
			ceros[3,4]<-1
			ceros[4,4]<-1
			
			Para i<-1 Hasta 4 Hacer
				para j<-1 Hasta 4 Hacer
					si ceros[i,j]<>1 y ceros[i,j]<>8  Entonces
						ceros[i,j]=0
					FinSi
					
				FinPara
			FinPara
			Repetir
				para i=1 Hasta 4 Hacer
					Para j=1 Hasta 4 Hacer
						si ceros[i,j]<>1 y ceros[i,j]<>8 Entonces
							ceros[i,j]=0
						FinSi
						Escribir ceros[i,j] ' | ' Sin Saltar
					FinPara
					Escribir " "
				FinPara 
				
				Escribir " "
				
				escribir "ingresa una opcion"
				escribir "s. para bajar"
				Escribir "w . para subir"
				escribir "d. para la derecha"
				Escribir "a para izquierda"
				leer movimiento 
				
				Si movimiento == "s" Entonces
					para i=1 Hasta 4 Hacer
						para j=1 Hasta 4 Hacer
							si ceros[i,j] =8 y i  <4 Entonces
								si ceros[i+1,j]= 1 Entonces
									ceros[i+1,j] = 8
									ceros[i,j]=1
									i=4
									j=4
								FinSi
							FinSi
						FinPara
					FinPara
						
				SiNo
						
					Si movimiento == "w"
						para i=1 Hasta 4 Hacer
							para j=1 Hasta 4 Hacer
								si ceros[i,j]=8 y i <4 Entonces
									si ceros[i-1,j]= 1 Entonces
										ceros[i-1,j]=8
										ceros[i,j]=1
										i=4
										j=4
									FinSi
								FinSi
							FinPara
						FinPara
					SiNo
						si movimiento =="d"
							Para i=1 Hasta 4 Hacer
								Para j=1 Hasta 4 Hacer
									si ceros[i,j]=8 y i <4 Entonces
										si ceros[i,j+1]= 1 Entonces
											ceros[i,j+1]=8
											ceros[i,j]=1
											i=4
											j=4
										FinSi
									FinSi
									
								FinPara
							FinPara
						SiNo
							si movimiento =="a"
								Para i=1 Hasta 4 Hacer
									Para j=1 Hasta 4 Hacer
										si ceros[i,j]=8 y j <4 Entonces
											si ceros[i,j-1]= 1 Entonces
												ceros[i,j-1]=8
												ceros[i,j]=1
												i=4
												j=4
											FinSi
										FinSi
									FinPara
								FinPara
							FinSi
							
						FinSi
					FinSi
				FinSi
				Limpiar Pantalla
			Hasta Que ceros[4,4]==8
			Limpiar Pantalla
			Escribir "felicidades has ganado"
		FinAlgoritmo
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
		    
    Algoritmo Ejercicico_59
			definir matriz,m_ordenado,fila,columna,op,contador,contador_correctos Como Entero
			Definir existe Como Logico            
			//matriz principal
			Dimension matriz[4,4]
			//matriz ordenada
			Dimension m_ordenado[4,4]            
			//Números desordenado y sin repetir
			para posicion=1 Hasta 15 Hacer
				Repetir
					existe = Verdadero
					f_aleatoria = Aleatorio(1,4)
					c_aleatoria = Aleatorio(1,4)
					si matriz[f_aleatoria,c_aleatoria] = 0 Entonces
						matriz[f_aleatoria, c_aleatoria] = posicion
						existe = Falso
					FinSi
				Hasta Que existe = Falso
			FinPara
		///arma auto
		para i = 1 Hasta 4 Hacer
			para j = 1 Hasta 4 Hacer
				contador = contador + 1 
				si contador < 15 Entonces
					matriz[i,j] = contador
				SiNo
					Si contador == 15 Entonces
						matriz[i,j] = 0;
						matriz[4,4] = 15; 
					FinSi
				FinSi
			FinPara
		FinPara   

		Repetir
			Limpiar Pantalla               
			Escribir 'Números en posición correctas: ' contador_correctos
			//Matriz principal
			fila = 0
			columna = 0
			para i=1 Hasta 4 Hacer
				para j=1 Hasta 4 Hacer
					si matriz[i,j] = 0 Entonces
						fila = i
						columna = j
					FinSi
					Escribir matriz[i,j] ' || ' Sin Saltar 
				FinPara
				Escribir ' '
			FinPara               
			//Opciones que puede escojer el usuario
			Escribir ' '
			Escribir 'seleccione una opción'
			Escribir '10. Salir'
			Escribir '8. Arriba'
			Escribir '2. Abajo'
			Escribir '4. Izquierda'
			Escribir '6. Derecha'
			Leer op               
			segun op Hacer
				2:
					//Proceso para mover el número hacia arriba
					si (fila + 1) < 5 Entonces
						matriz[fila,columna] = matriz[fila+1,columna]
						matriz[fila+1,columna] = 0
					FinSi
				4:
					//Proceso para mover el número hacia derecha
					si columna -1 > 0 Entonces
						matriz[fila,columna] = matriz[fila,columna-1]
						matriz[fila,columna-1] = 0
					FinSi
				6:
					//Proceso para mover el número hacia izquierda
					si columna +1 < 5 Entonces
						matriz[fila,columna] = matriz[fila,columna +1]
						matriz[fila,columna+1] = 0
					FinSi
				8:
					//Proceso para mover el número hacia abajo
					si fila -1 > 0 Entonces
						matriz[fila,columna] = matriz[fila-1,columna]
						matriz[fila - 1,columna] = 0
					FinSi
			FinSegun                
			//Matriz ordenada 
			contador_posicion = 0
			contador_correctos = 0
			para i = 1 Hasta 4 Hacer
				para j = 1 Hasta 4 Hacer
					contador_posicion = contador_posicion + 1;
					si matriz[i,j] == contador_posicion Entonces
						contador_correctos = contador_correctos + 1;
						Escribir contador_correctos
					FinSi
				FinPara
			FinPara
			
		Hasta Que contador_correctos = 15 o op = 10
		si contador_correctos = 15 Entonces
			Limpiar Pantalla
			Escribir '  Felicidades, ¡Has ganado!'
		FinSi
		si op = 10 Entonces
			Limpiar Pantalla
			Escribir '¡Hasta luego!'
		FinSi  



		FinAlgoritmo
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
