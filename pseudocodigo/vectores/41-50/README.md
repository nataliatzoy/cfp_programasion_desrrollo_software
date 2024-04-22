<h2>Ejercicio 41</h2>
<h3>suma de elementos</h3>

<pre>
    <code>
     Algoritmo suma_de_elementos
            definir arreglo_suma, contador Como Entero
            Dimension arreglo_suma[5]
             contador=0
            Para i=1 Hasta 5 Con Paso 1 Hacer
                Escribir "ingrese valores para cada posicion ", i
                leer arreglo_suma[i]
                contador=contador+arreglo_suma[i]
            Fin Para
            escribir contador
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 42</h2>
<h3>Mayor y menor</h3>

<pre>
    <code>
        Algoritmo mayor_y_menor
            definir cant Como Entero
            escribir "Ingrese cantidad de numeros"
            leer cant
            Dimension nums[cant]
            Para i<-1 Hasta cant Con Paso 1 Hacer
                Escribir "Ingrese numero", i
                leer n
                nums[i]=n
            FinPara
            Para i<-1 Hasta cant Con Paso 1
                Si (i==1) Entonces
                    mayr<-nums[i]
                    menr<-nums[i] 
                    
                SiNo
                    Si (nums[i] > mayr) Entonces
                        mayr<-nums[i]
                    Fin Si
                    si (nums[i] < menr) Entonces
                        menr<-nums[i]
                    FinSi
                Fin Si
            FinPara
            Escribir "el numero mayor es: " mayr
            escribir "el numero menor es: " menr
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 43</h2>
<h3>Promedio de notas</h3>
<pre>
    <code>
        Algoritmo promedio_de_notas
            Definir arreglo_num Como Entero
            Dimension arreglo_num[10]
            contador=0
            Para i<-1 Hasta 10 Con Paso 1 Hacer
                Escribir "ingrse su nota" i
                leer arreglo_num[10]
                contador=(contador+arreglo_num[i])/10
            Fin Para
            escribir 'el promedio de las notas es ',contador
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 44</h2>
<h3>contador de numeros pares</h3>
<pre>
    <code>
        Algoritmo contador_de_numeros_pares
            Definir arreglo_pares Como Entero
            Dimension arreglo_pares[6]
            contador=0
            para i=1 Hasta 6 Con Paso 1
                Escribir "ingrese numero", i
                leer arreglo_pares[i]
            FinPara
            Para i<-1 Hasta 6 Con Paso 1 Hacer
                si arreglo_pares[i]%2=0 Entonces
                    contador<-contador+1
                FinSi
            Fin Para
            Escribir "los numeros pares encontrados son " , contador
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 45</h2>
<h3>Bsqueda de elemento</h3>
<pre>
    <code>
        Algoritmo busqueda_de_elemento
            Definir arreglo_car Como Caracter
            Dimension arreglo_car[7];
            
            arreglo_car[1]="1"
            arreglo_car[2]="2"
            arreglo_car[3]="3"
            arreglo_car[4]="4"
            arreglo_car[5]="5"
            arreglo_car[6]="6"
            arreglo_car[7]="7"
            
            escribir "que caracter quieres buscar"
            leer num
            Si num<=7 Entonces
                
                Escribir "El caracter se encuentra" 
                
            SiNo
                Escribir "El caracter no se encuentra"
            Fin Si
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 46</h2>
<h3>inversion de un array</h3>
<pre>
    <code>
        Algoritmo Inversion_de_un_array
            Definir arreglo_numeros Como Entero
            Dimension arreglo_numeros[10];
            
            para i=10 Hasta 1 Con Paso -1 Hacer
                Escribir i 
            FinPara
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 47</h2>
<h3>Contador de ocurrencias</h3>
<pre>
    <code>
        Algoritmo contador_de_ocurrencias
            definir arreglo_car Como Caracter
            Dimension arreglo_car[15];
            
            arreglo_car[1]="1"
            arreglo_car[2]="2"
            arreglo_car[3]="3"
            arreglo_car[4]="4"
            arreglo_car[5]="5"
            arreglo_car[6]="6"
            arreglo_car[7]="7"
            arreglo_car[8]="a"
            arreglo_car[9]="a"
            arreglo_car[10]="a"
            arreglo_car[11]="a"
            arreglo_car[12]="b"
            arreglo_car[13]="b"
            arreglo_car[14]="b"
            arreglo_car[15]="c"
            
            Escribir "ingrese un caracter"
            leer caracte_r
            Para i<-1 Hasta 15 Con Paso 1 Hacer
                si arreglo_car[i]=caracte_r
                    contador=contador+1
                FinSi
                
            Fin Para
            escribir contador
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 48</h2>
<h3>Cálculo de Descuento por Categoría</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir categoria, producto como texto
            dimension producto[3,3]
            Dimension categoria[2,2]
            
            para pf=1 Hasta 3 Con Paso 1 hacer 
                Escribir producto[3,pf]
                para cf=1 Hasta 2 Con Paso 1 hacer
                    escribir categoria[1,cf]
                    si producto[3,pf]=categoria[1,cf]
                        escribir categoria[2,cf]
                    FinSi
                FinPara
            FinPara
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 49</h2>
<h3>Ordenamiento de Array</h3>
<pre>
    <code>
        Algoritmo ordenamiento_de_Array
            Definir arreglo_numeros Como Entero
            Dimension arreglo_numeros[6];
            arreglo_numeros[1]=100
            arreglo_numeros[2]=2
            arreglo_numeros[3]=20
            arreglo_numeros[4]=4
            arreglo_numeros[5]=60
            arreglo_numeros[6]=3
            
            para i=1 Hasta 6 Con Paso 1  Hacer
                Para j=i+1 Hasta 6 Con Paso 1  Hacer
                    si arreglo_numeros[i]>arreglo_numeros[j] Entonces
                        menor_a=arreglo_numeros[j]
                        arreglo_numeros[j]=arreglo_numeros[i]
                        arreglo_numeros[i]=menor_a
                    FinSi
                FinPara
            FinPara
            para i=1 Hasta 6 Con Paso 1  Hacer
                Escribir arreglo_numeros[i]
            FinPara          
        FinAlgoritmo
    </code>
</pre>
<h2>Ejercicio 50</h2>
<h3>Eliminación de duplicados</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir arreglo_repetido, arreglo_resultante, posicion Como Entero
            Dimension arreglo_repetido[12]
            Dimension arreglo_resultante[12]
            
            posicion=1
            para i=1 Hasta 12 Con Paso 1 Hacer
                escribir "ingrese un valor"
                leer arreglo_repetido[i]
            FinPara
            para i=1 Hasta 12 Con Paso 1 Hacer

                para j=1 Hasta 12 Con Paso 1 Hacer
                    existe=Falso
                    si arreglo_repetido[i] =arreglo_resultante[j] Entonces
                        j=12
                        existe=Verdadero
                    FinSi
                FinPara
                si existe =Falso Entonces
                    arreglo_resultante[posicion]=arreglo_repetido[i]
                    posicion=posicion+1
                FinSi
                
            FinPara
            para i=1 Hasta 12 Con Paso 1 Hacer
                escribir arreglo_resultante[i]
            FinPara
        FinAlgoritmo
    </code>
</pre>