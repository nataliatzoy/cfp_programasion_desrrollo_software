<h2>ejercicio 51</h2>
<h3>Suma de Matrices:</h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            Definir matrizA, matrizB Como Entero
            Dimensionar matrizA(3,3)
            Dimensionar matrizB(3,3)
            matrizA[1,1]<-1
            matrizA[1,2]<-2
            matrizA[1,3]<-3
            matrizA[2,1]<-4
            matrizA[2,2]<-5
            matrizA[2,3]<-6
            matrizA[3,1]<-7
            matrizA[3,2]<-8
            matrizA[3,3]<-9
            matrizB[1,1]<-9
            matrizB[1,2]<-8
            matrizB[1,3]<-7
            matrizB[2,1]<-6
            matrizB[2,2]<-5
            matrizB[2,3]<-4
            matrizB[3,1]<-3
            matrizB[3,2]<-2
            matrizB[3,3]<-1
                
                para i=1 Hasta 3 Hacer
                    para j=1 Hasta 3 Hacer
                        contador1= contador1+matrizA[i,j]
                        contador2= contador2+matrizB[i,j]
                    FinPara
                FinPara
                Escribir "suma de la primera matriz " contador1
                Escribir "suma de la segunda matriz " contador2
                
                Escribir "la suma de las 2 matrices es: ", contador1+ contador2
        FinAlgoritmo

</code>
</pre>

<br>

<h2>ejercicio 52</h2>
<h3>Promedio por Columna:</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir matrizA Como Entero
            Dimension matrizA[3,4]
            
            matrizA[1,1]=100
            matrizA[1,2]=90
            matrizA[1,3]=70
            matrizA[1,4]=60
            matrizA[2,1]=80
            matrizA[2,2]=90
            matrizA[2,3]=50
            matrizA[2,4]=60
            matrizA[3,1]=90
            matrizA[3,2]=80
            matrizA[3,3]=100
            matrizA[3,4]=100
            
            para i=1 Hasta 3 Hacer
                Para j=1 Hasta 3 Hacer
                    contador1=contador1+matrizA[i,j]
                FinPara
                resultado=contador1/4
                Escribir resultado
                contador=0
            FinPara
        
        FinAlgoritmo
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
        Definir i, j, paso Como Entero
        paso = 0

        Dimension matriz[5,5]

        Para i = 1 Hasta 5 Con Paso 1
            Para j = 1 Hasta 5 Con Paso 1
                matriz[i, j] = " "
            FinPara
        FinPara


        Mientras paso <= 5 Hacer
            
            Limpiar Pantalla
            
            Segun paso Hacer
                Caso 0:
                    matriz[3, 3] = "*"
                Caso 1:
                    matriz[2, 3] = "*"
                    matriz[4, 3] = "*"
                Caso 2:
                    matriz[3, 2] = "*"
                    matriz[3, 4] = "*"
                Caso 3:
                    matriz[2, 2] = "*"
                    matriz[4, 4] = "*"
                Caso 4:
                    matriz[2, 4] = "*"
                    matriz[4, 2] = "*"
                Caso 5:
                    
                    Escribir "Estrella completa"
            FinSegun
            
            
            Para i = 1 Hasta 5 Con Paso 1
                Para j = 1 Hasta 5 Con Paso 1
                    Escribir Sin Saltar matriz[i, j]
                FinPara
                Escribir "" 
            FinPara
            
            Si paso < 5 Entonces
            
                Escribir "Presione una tecla para continuar..."
                Leer tecla 
            FinSi
            
            paso = paso + 1
        FinMientras
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
				matriz[1,10]= 7
				matriz[2,3] = 0
				matriz[3,3] = 0
				matriz[4,3] = 0
				matriz[4,4] = 0
				matriz[4,5] = 0
				matriz[5,5] = 0
				matriz[6,5] = 0
				matriz[6,6] = 7
				matriz[6,7] = 7
				matriz[5,7] = 0
				matriz[5,8] = 0
				matriz[5,9] = 0
				matriz[6,9] = 0
				matriz[7,9] = 7
				matriz[8,9] = 7
				matriz[8,8] = 0
				matriz[9,8] = 0
				matriz[9,7] = 0
				matriz[9,3]=  7
				matriz[10,7] = 0            
				matriz[5,3] = 7
				matriz[4,7] = 0
				matriz[3,7] = 0
				matriz[6,3] = 0
				matriz[7,5] = 0
				matriz[7,6] = 0
				matriz[7,7] = 0
				matriz[7,8] = 0
				matriz[7,3] = 7
				matriz[8,3] = 0
				matriz[9,3] = 0
				matriz[9,4] = 0
				matriz[9,5] = 7 
				matriz[9,7] = 1
				matriz[10,7] = 1
				matriz[10,8] = 0
				Repetir
					Limpiar Pantalla
					fila = 0
					columna = 0                
					Para i=1 Hasta 10 Con Paso 1 Hacer
						para j=1 Hasta 10 Con Paso 1 Hacer
							si matriz[i,j] = 5 Entonces
								fila = i
								columna = j
							FinSi
							Escribir matriz[i,j] ' | ' Sin Saltar
						FinPara
						Escribir ' '
					FinPara                              
					Para i=1 Hasta 10 Con Paso 1 Hacer
						para j=1 Hasta 10 Con Paso 1 Hacer
							si matriz[i,j] = 5 Entonces
								si fila -1 > 0 y matriz[fila-1,columna] = 5 Entonces
									matriz[fila-1,columna] = 5
									matriz[fila,columna] = 0
								FinSi
								si matriz[fila+1,columna] = 0 Entonces
									matriz[fila+1,columna] = 5
									matriz[fila,columna] = 0
								FinSi
								si matriz[fila,columna+1] = 0 Entonces
									matriz[fila,columna+1] = 5
									matriz[fila,columna] = 0
								FinSi
							FinSi
						FinPara
					FinPara               
					Leer op                
				Limpiar Pantalla
			Hasta Que  matriz[10,8] == 5
			
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
                contador_correctos = 0
                para i = 1 Hasta 4 Hacer
                    para j = 1 Hasta 4 Hacer
                        contador = contador + 1
                        si contador <= 15 Entonces
                            m_ordenado[i,j] = contador
                        FinSi
                        si matriz[i,j] == m_ordenado[i,j] Entonces
                            contador_correctos = contador_correctos + 1
                        FinSi
                    FinPara
                FinPara              
            Hasta Que contador_correctos = 16 o op = 10
            si contador_correctos = 16 Entonces
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
	    
        Algoritmo Ejercicio_60           
            Definir sudoku Como Entero
            Definir separador Como Caracter
            Definir existe Como Logico
            Dimension sudoku[9,9]           
            para f=1 Hasta 9 Hacer
                para c=1 Hasta 9 Hacer                  
                    para num = 1 Hasta 9 Hacer
                        existe = Falso                      
                        Repetir
                            Para vc = 1 Hasta  9 Hacer
                                si num == sudoku[f,vc] Entonces
                                    existe = Verdadero
                                    vc = 9 
                                FinSi
                            FinPara                            
                            para vf = 1 Hasta 9 Hacer
                                si num == sudoku[vf,c] Entonces
                                    existe = Verdadero
                                    vf = 9
                                FinSi
                            FinPara                            
                            si f >= 1 y f <= 3 Entonces
                                inicio_fila = 1
                            SiNo
                                si f >= 4 y f <= 6 Entonces
                                    inicio_fila = 4
                                SiNo
                                    inicio_fila = 7
                                FinSi
                            FinSi                        
                            si c >= 1 y c <= 3 Entonces
                                inicio_columna = 1
                            SiNo
                                si c >= 4 y c <= 6 Entonces
                                    inicio_columna = 4
                                SiNo
                                    inicio_columna = 7
                                FinSi
                            FinSi                            
                            para i = inicio_fila Hasta  inicio_fila + 2 Con Paso  1 Hacer
                                Para j = inicio_columna Hasta inicio_columna + 2 Con Paso  1 Hacer
                                    si num == sudoku[i,j] Entonces
                                        existe = Verdadero
                                        i = inicio_fila + 2
                                        j = inicio_columna + 2 
                                    FinSi
                                FinPara
                            FinPara                             
                            si existe == Falso Entonces
                                sudoku[f,c] = num
                                num = 9
                            FinSi
                        Hasta Que existe == Verdadero
                    FinPara
                    si sudoku[f,c] == 0 Entonces
                        f = 1
                        c = 1
                    FinSi  
                FinPara
            FinPara
            Para i = 1 Hasta 9 Con Paso 1 Hacer
                Para j = 1 Hasta 9 Con Paso 1 Hacer
                    si j <> 3 y j <> 6 Entonces
                        Escribir sudoku[i,j], " " Sin Saltar
                    SiNo
                        Escribir sudoku[i,j], "|" Sin Saltar
                    FinSi
                FinPara
                Si i == 6 o i  == 3 Entonces
                    Escribir " "
                FinSi
                Escribir ""
            Fin Para
        FinAlgoritmo
    
 </code>
</pre>


<br>