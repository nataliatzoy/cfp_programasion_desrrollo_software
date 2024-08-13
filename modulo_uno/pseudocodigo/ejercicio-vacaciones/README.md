<h2>Ejercicio 41</h2>
<pre>
    <code>
        Algoritmo ejercicio_41
            definir i,j Como Entero;
            i <- 1;
            j <- 1;
            para i<-1 hasta 10 hacer
                escribir 'tabla del ' ,i;
                para j<-1 Hasta 10 Hacer
                    Escribir i, 'x',j,'=',i*j;
                    
                FinPara
                escribir '';
            FinPara
            
        FinAlgoritmo

</code>
</pre>    
<br> 

<h2>Ejercicio 42</h2>
<pre>
    <code>
        Algoritmo ejercicio_42
            definir i,j Como Entero;
            i<-0
            j<-0
            para i<-10 Hasta 1 Con Paso -1 Hacer
                j=i;
                factorial=1;
                Mientras  j>0 Hacer
                    factorial=factorial*j
                    j=j-1;
                FinMientras
                Escribir 'el factorial de  ', i ,'es', factorial;
            FinPara
            
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 43</h2>
<pre>
    <code>
        Algoritmo ejercicio_43
            definir alto,ancho Como Entero
            ancho=0
            alto=0
            escribir 'ingrese el numero de asteriscos para el ancho'
            leer ancho
            guardar_ancho=ancho;
            
            Escribir 'ingrese el numero de asteriscos para el alto'
            Leer alto
            guardar_alto=alto
            
            Mientras alto>0 Hacer
                ancho=guardar_ancho
                Mientras ancho>0 Hacer
                    Escribir '*' Sin Saltar
                    ancho=ancho-1;
                FinMientras
                Escribir ''
                alto=alto-1;
            FinMientras
        FinAlgoritmo

</code>
</pre>    
<br>

<h2>Ejercicio 44</h2>
<pre>
    <code>
        Algoritmo ejercicio_44
            definir i, j Como Entero
            Escribir 'ingrese la cantida de filas';
            Leer filas
            para i<-1 Hasta filas Con Paso 1  Hacer
                para j<-1 Hasta i Con Paso 1 Hacer
                    escribir '*' Sin Saltar
                FinPara
                Escribir '';
            FinPara
            
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 45</h2>
<pre>
    <code>
        Algoritmo ejercicio_45
            definir alto, ancho Como Entero
            ancho=0
            alto=0
            i<-0;
            j<-0;
            escribir 'ingrese el numero de asteriscos para el ancho'
            leer ancho
            Escribir 'ingrese el numero de asteriscos para el alto'
            Leer alto
            Para i<-1 Hasta alto Con Paso 1 Hacer
                para j<-1 Hasta ancho Con Paso 1 Hacer
                    Si i=1 | j=1 | i=alto | j=ancho Entonces
                        Escribir '*' Sin Saltar
                    SiNo
                        Escribir ' ' Sin Saltar
                    Fin Si
                FinPara
                Escribir ' ';
            FinPara
        FinAlgoritmo

 </code>
</pre>    
<br>

<h2>Ejercicio 46 </h2>
<pre>
    <code>
        Algoritmo ejercicio_46
            Definir i,j Como Entero
            i=0
            j=0
            escribir 'ingrese el numero de astericos que quiere de lado'
            Leer lado
            para i<-1 Hasta lado Con Paso 1 Hacer
                para j<-1 Hasta lado Con Paso 1 Hacer
                    Si i=j | i+j=lado+1 Entonces
                        Escribir '*' Sin Saltar
                    SiNo
                        Escribir ' 'Sin Saltar;
                    Fin Si
                FinPara
                Escribir ' ' ;
            FinPara
        FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 47</h2>
<pre>
    <code>
        Algoritmo ejercicio_47
            Definir num, suma Como Entero;
            Dimension num[3];
            suma=0;
            i=0;
            para i<-1 Hasta 2  Con Paso 1 Hacer
                escribir 'ingrese un valor', i+1, 'del vector';
                Leer num[i];
                suma=suma+num[i]+2
                
            FinPara
            Escribir 'el modulo es: ' ,rc(suma);
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 48</h2>
<pre>
    <code>
        Algoritmo ejercicio_48
            definir  notas Como Real
            Dimension notas[5]
            
            suma=0
            may=0
            men=0
            i=1
            para i=1 Hasta 5 Con Paso 1 Hacer
                Escribir "ingresa una nota"
                Leer notas[i]
                suma=suma+notas[i];
                si i=0 Entonces
                    may=notas[i];
                    men=notas[i];
                FinSi
                si notas[i]>may Entonces
                    may=notas[i];
                FinSi
                si notas[i]<men Entonces
                    men=notas[i];
                FinSi
            FinPara
            Escribir 'la media es ' suma/5
            Escribir 'la mayor es ' may
            Escribir 'la menor es ' men
            
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 49</h2>
<pre>
    <code>
        Algoritmo ejercicio_49
            definir lista, num, cantidad, contador Como Entero;
            Dimension lista[cantidad]
            i=1
            cantidad=0
            contador=0
            Escribir 'ingrese la cantidad de nuemero que quiere en la lista'
            Leer cantidad;
            Escribir 'que numero quiere buscar en la lista'
            Leer num;
            para i=0 Hasta cantidad Con Paso 1 Hacer
                Escribir 'ingrese un numero';
                Leer lista[i];
                si lista[i]=num Entonces
                    contador=contador+1;
                FinSi
            FinPara
            Escribir 'el numero ',num,' aparece ',contador,' veces'
        FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 50</h2>
<pre>
    <code>
        Algoritmo ejercicio_50
            Definir i,j, memoria Como Entero
            Dimension  lista[5];
            
            para i<-1 hasta 5 Hacer
                Escribir 'ingresa un numero'
                Leer lista[i]
            FinPara
            
            para j<-1 Hasta 4 Hacer
                para i<-1 Hasta 3-j Con Paso 1 Hacer
                    si lista[i]<lista[i+1] Entonces
                        memoria=lista[i+1];
                        lista[i+1]=lista[i];
                        lista[i]=memoria
                    FinSi
                FinPara
            FinPara
            
            para i=1 Hasta 5 Con Paso 1 Hacer
                Escribir lista[i],' ' Sin Saltar
            FinPara
            Escribir ''
        FinAlgoritmo
 </code>
</pre>    
<br>

<h2>Ejercicio 51</h2>
<pre>
    <code>
        Algoritmo ejercicio_51
            definir i, j, men, memoria, lista Como Entero
            Dimension lista[5]
            i<-1
            j<-1
            
            para i<-1 Hasta 5 Con Paso 1 Hacer
                lista[i]= azar(10);
            FinPara
            
            Para j<-1 Hasta 4 Hacer
                men=lista[1];
                pmen=0;
                
                para i<-1 Hasta 5-j Hacer
                    si lista[i]<men Entonces
                        pmen=i;
                        men=lista[pmen];
                    FinSi
                FinPara
                memoria=lista[5-j];
                lista[5-j]=lista[pmen]
                lista[pmen]=memoria;
            FinPara
            
            para i<-1 Hasta 5 Hacer
                Escribir lista[i],' ' Sin Saltar
            FinPara
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 52</h2>
<pre>
    <code>
        Algoritmo ejercicio_52
            definir f, c, array Como Entero
            Dimension array[3,3];
            f<-1
            c<-1
            para f<-1 Hasta 3 Con Paso 1 Hacer
                para c<-1 Hasta 3 Con Paso 1 Hacer
                    array[f,c]= Aleatorio(1,10);
                FinPara
            FinPara
            Escribir 'array original'
            para f<-1 Hasta 3 Con Paso 1 Hacer
                para c<-1 Hasta 3 Con Paso 1 Hacer
                    Escribir array[f,c], ' ' Sin Saltar
                FinPara
                Escribir ' ';
            FinPara
            
            Escribir 'array transpuesto'
            para f<-1 Hasta 3 Con Paso 1 Hacer
                para c<-1 Hasta 3 Con Paso 1 Hacer
                    escribir array[c,f], ' ' Sin Saltar
                FinPara
                Escribir ' ';
            FinPara
            
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 53</h2>
<pre>
    <code>
        Algoritmo ejercicio_53
Definir n, m, num, contador Como Entero
Dimension matriz[5, 5] 

    Para i <- 1 Hasta 5 Hacer
        Para j <- 1 Hasta 5 Hacer
            matriz[i, j] <- Aleatorio(1, 10) 
        FinPara
    FinPara
	
    
    Escribir "Ingresa un número para buscar en la matriz:"
    Leer num
	
    contador <- 0
    Para i <- 1 Hasta 5 Hacer
        Para j <- 1 Hasta 5 Hacer
            Si matriz[i, j] = num Entonces
                contador <- contador + 1
            FinSi
        FinPara
    FinPara

    Escribir "El número ", numero, " aparece ", contador, " veces en la matriz."
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 54</h2>
<pre>
    <code>
        Algoritmo ejercicio_54
	Definir pl,p, suma,may,mayp,edificio Como Entero
	Dimension edificio[4,3];
	Dimension suma[4];
	
	para i<-1 Hasta 4 Hacer
		suma[i]<-0;
	FinPara
	
	para pl<-1 Hasta 4 Con Paso 1 Hacer
		para p<-1 Hasta 3  Con Paso 1 Hacer
			Escribir 'cuantas personas viven en la planta'
			Leer edificio[pl,p];
			suma[pl]<-suma[pl]+edificio[pl,p];
		FinPara
		
		si suma[pl]>may Entonces
			may<- suma[pl];
			mayp<-pl;
		FinSi
	FinPara
	Escribir 'la planta con mas vecino es: ',mayp+1, ' con ',may,' vecinos';
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 55</h2>
<pre>
    <code>
        Algoritmo ejercicio_55
Definir i, j, minimo, matriz Como Entero 
Dimension  matriz[3, 3]
	
	Para i <- 1 Hasta 3 Hacer
		Para j <- 1 Hasta 3 Hacer
			matriz[i, j] <- Aleatorio(1, 10);
		FinPara
	FinPara
	
	
	Para j <- 1 Hasta 3 Hacer
		minimo <- matriz[1, j]
		Para i <- 2 Hasta 3 Hacer
			Si matriz[i, j] < minimo Entonces
				minimo <- matriz[i, j]
			FinSi
		FinPara
		Escribir "El número menor en la columna ", j, " es: ", minimo
	FinPara
	

FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 56</h2>
<pre>
    <code>
        Algoritmo ejercicio_56
	Definir frase,letra como texto;
	Definir cantidad Como Entero;
	frase="";
	letra="";
	encontrada=Falso;
	Escribir 'ingrese una frase'
	Leer frase
	
	Escribir 'ingrese la letra que desea buscar'
	Leer letra
	cantidad=Longitud(frase);
	para i<-1 Hasta cantidad-1 Con Paso 1 Hacer
		si Subcadena(frase,i,i)=letra Entonces
			encontrada=Verdadero;
		FinSi
	FinPara
	Si encontrada=Verdadero Entonces
		Escribir 'la letra se encuentra'
	SiNo
		Escribir 'la letra no se encuentra'
	Fin Si
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 57</h2>
<pre>
    <code>
        Algoritmo ejercicio_57
	definir palabra, letra como cadena;
	Definir cantidad, vocales Como Entero;
	Escribir 'escriba una frase'
	Leer palabra
	
	palabra<-Minusculas(palabra);
	cantidad<-Longitud(palabra);
	
	para i<-1 Hasta cantidad-1 Hacer
		letra<-Subcadena(palabra,i,i);
		Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
            vocales <- vocales + 1
		FinSi
		
	FinPara
	Escribir 'la palabra tiene ',vocales,' vocales, y ',cantidad-vocales,' consonantes'
	
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 58</h2>
<pre>
    <code>
        Algoritmo ejercicio_58
	definir palabra1, palabra2, letra como cadena;
	Definir cant Como Entero
	
	Escribir 'escriba 2 palabras'
	Leer palabra1, palabra2
	
	palabra1=Minusculas(palabra1)
	palabra2=Minusculas(palabra2)
	cant=Longitud(palabra1)
	
	para i<-1 Hasta cant-1 Hacer
		letra=Subcadena(palabra1,i,i);
		inverso=Concatenar(letra,inverso)
	FinPara
	Si inverso=palabra2 Entonces
		Escribir 'es igual al darle la vuelta'
	SiNo
		Escribir 'no son iguales al darle la vuelta'
	Fin Si
FinAlgoritmo

</code>
</pre>    
<br>

<h2>Ejercicio 59</h2>
<pre>
    <code>
        Algoritmo ejercicio_59
	Definir frase como cadena;
	Definir cantidad, espacios Como Entero
	
	Escribir 'escriba una frase'
	Leer frase
	cantidad=Longitud(frase)
	Para i<-1 Hasta cantidad-1 Hacer
		si Subcadena(frase,i,i)= " " Entonces
			espacios=espacios+1
		FinSi
	FinPara
	Escribir 'la frase contiene ',espacios+1,' palabras'
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 60</h2>
<pre>
    <code>
        Algoritmo ejercicio_60
	Definir palabra, f como cadena
	Definir cantidad Como Entero
	Escribir 'escribe una frase'
	Leer f
	
	cantidad=Longitud(f)
	palabra=Subcadena(f,0,0);
	
	para i<-1 Hasta cantidad-1 Hacer
		si Subcadena(f,i,i)=" " Entonces
			palabra Concatenar(palabra,Subcadena(f,i+1,i+1));
		FinSi
	FinPara
	Escribir 'la palabraencriptada es ' ,palabra
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 61</h2>
<pre>
    <code>
        Funcion sum(x,t)
	Escribir x+t
FinFuncion

Funcion resultado<-multiplicar(x,t)
	Definir resultado Como Entero
	resultado=x*t
FinFuncion

Funcion resultado<-restar(x,t)
	Definir resultado Como Entero
	resultado=x-t
FinFuncion

Funcion resultado<-dividir(x,t)
	Definir resultado Como Entero
	resultado=x/t
FinFuncion

Funcion resultado<-sum(x,t)
	Definir resultado Como Entero
	resultado=x+t
FinFuncion

Algoritmo ejercicio_61
	Definir n1,,n2, eleccion Como Entero
	Escribir 'escriba 2 numeros'
	Leer n1,n2;
	Escribir 'selecione una opcion'
	Escribir '1 sumarlos'
	Escribir '2 sumarlos'
	Escribir '3 sumarlos'
	Escribir '4 sumarlos'
	
	Repetir
		Leer eleccion
	Hasta Que eleccion>4 | eleccion<1
	
	Segun eleccion Hacer
		1:
			sumar(n1,n2)
		2:
			Escribir restar(n1,n2)
		3:
			Escribir multiplicar(n1,n2)
		4:
			Escribir dividir(n1,n2)
	Fin Segun
	
FinAlgoritmo
	
</code>
</pre>    
<br>

<h2>Ejerrcicio 62</h2>
<pre>
<code>
Funcion incremento_de_la_equis(x)
	x=x+1;
FinFuncion

Funcion incremento_por_referencia(x Por Referencia)
	x=x+1
FinFuncion

Algoritmo ejercicio_62
	Definir num Como Entero
	num=Aleatorio(1,10);
	Escribir 'el numero antes de la funcios es: ',num;
	incremento_de_la_equis(num);
	Escribir 'el numero despues de la funcion es: ',num;
	Escribir 'el numero entes de llamar la funcion con paso por valor es: ',num
	incremento_por_referencia(num)
	Escribir 'el numero despues de llamar la funcion por referencia es: ',num;
FinAlgoritmo
</code>
</pre>
<br>

<h2>Ejercicio 63</h2>
<pre>
<code>
Funcion primo(i)
	Definir divisores, j Como Entero 
	divisores=0
	j=1
	Para j<-1 Hasta i Con Paso 1 Hacer
		si i%j=0 Entonces
			divisores=divisores+1;
		FinSi
	FinPara
	
	si divisores=2 Entonces
		Escribir 'el numero: ',i,' es primo'
	SiNo
		Escribir 'el numero: ',i,' no es primo'
	FinSi
FinFuncion

Algoritmo ejercicio_63
	Definir j, terminado Como Entero
	j=0
	terminado=0
	Escribir 'hasta que numero quieres revisar'
	Leer terminado
	para j<-1 Hasta terminado Hacer
		primo(j)
	FinPara
FinAlgoritmo
</code>
</pre>
<br>

<h2> Ejercicio 64</h2>
<pre>
<code>
Funcion tabla(i)
	Definir n Como Entero
	Escribir 'tabla del: ',i
	para n<-1 Hasta 10 Hacer
		Escribir num, ' x ',n,' = ',i*n;
	FinPara
FinFuncion

Algoritmo ejercicio_64
	Definir j Como Entero
	j=1
	Escribir 'pulse cualquier tecla'
	Esperar Tecla;
	para j<-1 Hasta 10 Con Paso 1 Hacer
		tabla(j)
		Escribir ' '
	FinPara
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_65</h2>
<pre>
<code>
Funcion resultado<-posicionmayor(lista,tope)
	Definir resultado, i, may Como Entero;
	resultado=0
	i=0
	may=lista[0];
	Para i<-1 Hasta tope Con Paso 1 Hacer
		si lista[i]>may Entonces
			resultado=i;
			may=lista[i];
		FinSi
	FinPara
FinFuncion

Algoritmo ejercicio_65
	Definir listanum, i,j, memoria, posgrande Como Entero;
	Dimension listanum[5];
	i=0
	j=0
	memoria=0
	posgrande=0
	
	Para i<-0 Hasta 4 Hacer
		listanum[i]=Aleatorio(1,10)
	FinPara
	
	Para i<-0 Hasta 4 Hacer
		Escribir listanum[i], " " Sin Saltar
	FinPara
	
	Escribir " ";
	
	Para j<-0 Hasta 3 Hacer
		posgrande=posicionmayor(listanum,4-j);
		memoria=listanum[4-j];
		listanum[4-j]=listanum[posgrande];
		listanum[posgrande]= memoria;
	FinPara
	
	Para i<-0 Hasta 4 Hacer
		Escribir listanum[i], " " Sin Saltar;
	FinPara
	
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_66</h2>
<pre>
<code>
funcion resultado <- posisicionmayor(lista, tope)
	Definir  resultado, i ,may Como Entero;
	resultado=0
	i=0
	may=lista[0];
	
	Para i<-1 Hasta tope Con Paso 1 Hacer
		si lista[i]>may Entonces
			resultado=i;
			may=lista[i];
		FinSi
	FinPara
FinFuncion

Funcion ordenarlista(lista, elementos)
	Definir  i, j, memoria, posgrande Como Entero
	i=0
	j=0
	para j<- 0 Hasta elementos-1 Con Paso 1 Hacer
		posgrande=posicionmayor(lista, elementos-1-j);
		memoria=lista[elementos-1-j];
		lista[elementos-1-j]=lista[posgrande];
		lista[posgrande]= memoria;
	FinPara
	
FinFuncion

Algoritmo ejercicio_66
	Definir i, j, matriz, fila Como Entero;
	Dimension matriz[5,5];
	Dimension fila[5]
	
	i=0
	j=0
	
	Para i<-0 Hasta 4 Con Paso 1 Hacer
		Para j<-0 Hasta 4 Con Paso 1 Hacer
			matriz[i,j]= Aleatorio(1,10)
		FinPara
	FinPara
	
	Para i<-0 Hasta 4 Hacer
		Para j<-0 Hasta 4 Hacer
			Escribir matriz[i,j], " " Sin Saltar
			
		FinPara
		Escribir " "
	FinPara
	
	Para i<-0 Hasta 4 Con Paso 1 Hacer
		Para j<-0 Hasta 4 Con Paso 1 Hacer
			fila[j]=matriz[i,j];
		FinPara
	FinPara
	Escribir "presione cualquier tecla para ver la matriz ordenada"
	Esperar Tecla
	Escribir " "
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_67</h2>
<pre>
<code>
Funcion cambio(a Por Referencia, b Por Referencia, c Por Referencia)
	Definir  memoria Como Entero;
	memoria<-0;
	si b>a Entonces
		memoria<- a;
		a<-b;
		b<- memoria;
	FinSi
	
	si c>b Entonces
		memoria<-b;
		b<-c;
		c<- memoria;
	FinSi
	
	si b>a Entonces
		memoria<-a;
		a<- b;
		b<- memoria;
	FinSi
FinFuncion

Algoritmo ejercicio_67
	Definir num1, num2, num3 Como Entero
	num1<-0
	num2<-0
	num3<-0
	
	Escribir 'Escriba 3 numeros'
	Leer num1, num2, num3
	cambio(num1, num2, num3);
	Escribir num1," ",num2, " ", num3 Sin Saltar
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_68</h2>
<pre>
<code>
Funcion  resultado<- may(lista, cantidad)
	Definir  i, resultado Como Entero
	i=0
	resultado=lista[0];
	
	Para  i<-1 Hasta cantidad-1 Hacer
		si lista[i]>resultado Entonces
			resultado=lista[i];
		FinSi
	FinPara
FinFuncion

Algoritmo ejercicio_68
	Definir lista, i Como Entero
	Dimension lista[5];
	i=0
	
	Para  i<-0 Hasta 4 Hacer
		lista[i]=Aleatorio(1,10)
	FinPara
	
	Para i<-0 Hasta 4 Hacer
		Escribir lista[i], " " Sin Saltar
	FinPara
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejrcicio_69</h2>
<pre>
<code>
Funcion resultado <- may(lista, cantida)
	Definir  i, resultado Como Entero
	i=0
	resultado = lista[0];
	Para i<-1 Hasta cantidad -1 Con Paso 1 Hacer
		si lista[i]>resultado Entonces
			resultado=lista[i];
		FinSi
	FinPara
FinFuncion

Funcion resultado<-mcm(lista, cantidad)
	Definir resultado, i, multiplos Como Entero
	Definir encontrado Como Logico
	i=0;
	multiplos=0;
	encontrado=Falso
	resultado=may(lista, cantidad)
	
	Mientras encontrado=Falso Hacer
		multiplos=0
		para i<-0 Hasta cantidad-1 Con Paso 1 Hacer
			si resultado%lista[i]=0 Entonces
				multiplos=multiplos+1
			FinSi
		FinPara
		
		si multiplos = cantidad Entonces
			encontrado= Verdadero
		SiNo
			resultado=resultado+1;
		FinSi
	FinMientras
	
FinFuncion

Algoritmo ejrcicio_69
	Definir lista, i Como Entero;
	Dimension lista[5];
	i=0
	
	Para i<-0 Hasta 4 Con Paso 1 Hacer
		lista[i]=Aleatorio(1,9);
	FinPara
	
	Para i<-0 Hasta 4 Con Paso 1 Hacer
		Escribir lista[i], " "
	FinPara
	
	Escribir " " 
	Escribir 'el mcm es: ', ' ',mcm(lista,5)
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_70</h2>
<pre>
<code>
Funcion resultado<-may(lista, cantida)
	Definir i, resultado Como Entero
	i=0
	resultado=lista[0]
	Para i<-1 Hasta cantidad-1 Con Paso 1 Hacer
		si lista[i]>resultao Entonces
			resultado=lista[i];
		FinSi
	FinPara
FinFuncion

Funcion resultado<-mcm(lista, cantidad)
	Definir resultado, i, multiplos Como Entero;
	Definir encontrado Como Logico
	i=0;
	multiplos=0
	
FinFuncion

Algoritmo ejercicio_70
	Definir  numeradores, denominadores, i, numfinal, min Como Entero
	Dimension numeradores[3], denominadores[3];
	
	i=0
	numfinal=0
	min=0;
	
	Para i<-0 Hasta 2 Hacer
		Escribir 'dime el numerador de la fraccion ', i+1;
		leer numeradores[i];
		Escribir "dime el denominador de la fraccion ', i+1
		Leer denominadores[i];
	FinPara
	
	para i<-0 Hasta 2 Hacer
		Escribir numeradores[i], '/', denominadores[i] Sin Saltar
		si i<>2 Entonces
			Escribir '+' Sin Saltar
		FinSi
	FinPara
	Escribir ' ';
	min=mcm(denominadores,3);
	
	Para i<-0 Hasta 2 Hacer
		numfinal=numfinal+(min+numeradores[i]/denominadores[i]);
	FinPara
	Escribir 'el resultado es: ',numfinal,"/", min
	
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_71</h2>
<pre>
<code>
Funcion resultado<- may(lista,cantidad)
	definir i, resultado Como Entero
	i=0
	resultado=lista[0];
	Para i<- Hasta cantidad-1 Hacer
		si lista[i]>resultado Entonces
			resultado=lista[i];
		FinSi
	FinPara
FinFuncion

Funcion resultado<-mcm(lista,cantidad)
	definir resultado,i m multiplos Como Entero
	Definir encontrado Como Logico
	i=0
	multiplos=0
	encontrado=Falso
FinFuncion

Algoritmo ejercicio_71
	Definir numeradores,denominadores,i,numfinal,min,max Como Entero
	Dimension numeradores[3];
	Dimension denominador[3];
	i=0 
	numfinal=0
	min=0
	max=0
	
	Para i<-0 Hasta 2 Hacer
		Escribir "dime el numerador de la fraccion ", i+1;
		Leer numeradores[i];
		
		Escribir "dime el denominadr de la fraccion ", i+1;
		Leer 
	FinPara
	Para i<-0 Hasta 2 Con Paso 1 Hacer
		Escribir numeradores[i], "/", denominadores[i] Sin Saltar
		si i<>2 Entonces
			Escribir '+' Sin Saltar
		FinSi
		
	FinPara
	Escribir " ";
	min=mcm(denominadores,3);
	Para i<-0 Hasta 2 Hacer
		numfinal=numfinal+(min*numeradores[i]/denominadores[i]);
	FinPara
	max=mcm(numfinal, min)
	
	Escribir "el resultado es: ", numfinal/max, "/", min/max;
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_72</h2>
<pre>
<code>
Funcion resultado<-sol1(a,b,c)
	definir resultado Como Real
	resultado<-(b*(-1)+rc(b^2-4*a*c))/2*a;
FinFuncion

Funcion resultado <- sol2(a,b,c)
	Definir resultado Como Real;
	resultado<-(b*(-1)-rc(b^2-4*a*c))/2*a;
FinFuncion

Algoritmo ejercicio_72
	Definir a,b,c Como Real
	a <- 0
	b <- 0
	c <- 0
	
	Escribir 'ecuaciones de segundo grado';
	Escribir 'dime el valor de la a'
	Leer a;
	Escribir 'dime el valor de la b'
	Leer b;
	Escribir 'dime el valor de la c'
	leer c;
	Escribir 'la primera solución a la ecuación es: ", sol1(a,b,c);
	Escribir 'la primera solución a la ecuación es: ",sol2(a,b,c)
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_73</h2>
<pre>
<code>
Funcion resultado<- media(lista,cantidad)
	Definir i, suma, resultado Como Entero;
	i=0
	suma=0
	para i<-0 Hasta cantidad-1 Hacer
		suma=suma+lista[i];
		
	FinPara
	resultado=trunc(suma/cantidad);
FinFuncion

Algoritmo ejercicio_73
	Definir i, lista, med Como Entero
	Dimension lista[50];
	i=0;
	med=0;
	Para i<-0 Hasta 49 Hacer
		lista[i]=azar(10);
		Escribir lista[i],' ' Sin Saltar;
	FinPara
	Escribir " "
	med=media(lista,50);
	
	para i=0 Hasta 49 Hacer
		si lista[i]-med>2 | med-lista[i]>2 Entonces
			lista[i]=med;
		FinSi
	FinPara
	
	Para i<-0 Hasta 49
		Escribir lista[i], " " Sin Saltar
		
	FinPara
	
FinAlgoritmo
</code>
</pre>
<br>

<h2>ejercicio_74</h2>
<pre>
<code>
Funcion resultado<-factorial(a)
	Definir resultado Como Entero;
	resultado=1;
	
	si a<>0 Entonces
		resultado=a*factorial(a-1);
	FinSi
FinFuncion

Algoritmo ejercicio_74
	Definir n, i Como Entero;
	i=0
	Escribir "¿hasta que numero quieres calcular el factorial?";
	leer n;
	Para i<-n Hasta 1 Con Paso -1 Hacer
		Escribir "el factorialde ", i, "es: ", factorial(i);
	FinPara
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_75</h2>
<pre>
<code>
Funcion resultado<-fibonacci(n)
	Definir resultado Como Entero;
	si n=0 Entonces
		resultado=0;
	FinSi
	
	si n=1 Entonces
		resultado=1;
	FinSi
	
	si n>1 Entonces
		resultado=fibonacci(n-1)+fibonacci(n-2);
	FinSi
FinFuncion

Algoritmo ejercicio_75
	Definir num, i Como Entero
	num=0
	i=0
	Escribir "¿hasta que termino quieres que muestre la serie?"
	Leer num;
	Para i<-0 Hasta num Hacer
		Escribir fibonacci(i), " " Sin Saltar;
	FinPara
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_76</h2>
<pre>
<code>
Funcion resultado<-potencia(base, expo)
	Definir  resultado Como Entero;
	si expo=0 Entonces
		resultado=1
	SiNo
		resultado=base*potencia(base,expo-1);
		
	FinSi
FinFuncion

Algoritmo ejercicio_76
	Definir base, exponente Como Entero
	base =0
	exponente=0
	
	Escribir "dime la base";
	Leer base
	
	Escribir "dime el exponente";
	leer exponente;
	
	Escribir "el resultado de la potencia es: ", potencia(base,exponente);
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_77</h2>
<pre>
<code>
Algoritmo ejercicio_77
	Definir  decimal Como Entero;
	Definir binario como cadena;
	decimal=0;
	binario="";
	Escribir "dime un numero"
	Leer decimal
	
	Mientras decimal>0 Hacer
		binario=Concatenar(ConvertirATexto(decimal%2), binario);
		decimal=trunc(decimal/2)
	FinMientras
	Escribir binario;
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_78</h2>
<pre>
<code>
Funcion resultado<-letrashex(cociente)
	Definir resultado Como Caracter;
	Segun cociente Hacer
		10:
			resultado ="A";
		11:
			resulttado="B";
		12:
			resultado="C"
		13:
			resultado="D";
		14:
			resultado="E";
		15:
			resultado="F";
	Fin Segun
FinFuncion

Funcion resultado<-conversordedecimal(num,base)
	Definir resultado como Cadena;
	Definir cociente Como Entero;
	Definir digito como Cadena;
	
	resultado =" ";
	cociente=0;
	
	si num=0 Entonces
		resultado="0";
	FinSi
	
	Mientras num>0 Hacer
		cociente=(num%base);
		digito=ConvertirATexto(cociente);
		si cociente>9 Entonces
			digito=letrashex(cociente);
		FinSi
		resultado=Concatenar(digito, resultado);
		num=trunc(num/base);
	Fin Mientras
FinFuncion

Algoritmo ejercicio_78
	Definir decimal, base Como Entero;
	Definir solucion como Cadena;
	
	decimal=0;
	base=0;
	solucion="";
	Escribir "dime un umero en base decimal"
	Leer decimal
	Escribir "a que base lo quieres convertir"
	Escribir "(2)- binario"
	Escribir "(8)- octal"
	Escribir "(16)-octal"
	Leer base
	Escribir conversordedecimal(decimal,base)
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_79</h2>
<pre>
<code>
Algoritmo ejercicio_79
	Definir binario, pos, decimal, dig Como Entero
	binario=0;
	pos=0;
	decimal=0;
	dig=0;
	
	Escribir "dime un numero en binario"
	Leer binario
	
	Mientras binario>0 Hacer
		dig=binario%10;
		decimal=decimal+dig*(2^(pos));
		pos=pos+1;
		binario=trunc(binario/10)
	Fin Mientras
	Escribir decimal;
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_80</h2>
<pre>
<code>
Funcion resultado<-binadec(binario)
	Definir pos, resultado, dig Como Entero;
	pos=0;
	resultado=0;
	dig=0;
	
	Mientras binario>0 Hacer
		dig=binario%10;
		resultado=resultado+dig*(2^(pos));
		pos=pos+1;
		binario=trunc(binario/10);
	FinMientras
FinFuncion

Funcion resultado<-conversordedecimal(num)
	Definir resultado Como Caracter;
	Definir cociente Como Entero;
	definir digito Como Caracter;
	
	resultado=" ";
	cociente=0;
	digito=" ";
	
	si num=0 Entonces
		resultado='0';
	FinSi
	
	Mientras num>0 Hacer
		cociente<-(num%8);
		digito<-ConvertirATexto(cociente);
		resultado<-Concatenar(digito, resultado);
		num<-trunc(num/8);
	FinMientras
	
FinFuncion

Algoritmo ejercicio_80
	Definir binario,decimal Como Entero;
	Definir octal como Cadena;
	
	binario=0;
	octal="";
	decimal=0;
	
	Escribir 'dime el valor del numero binario que quieres convertir'
	Leer binario
	decimal=binadec(binario);
	octal=conversordedecimal(decimal);
	Escribir "octal: ",octal
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_81</h2>
<pre>
<code>
//descompon un numero en factores primos

Funcion resultado<-primo(num)
	Definir divisores, i Como Entero;
	Definir resultado Como Logico;
	divisores=0
	i=0
	resultado=Falso;
	
	Para i<-num Hasta 1 Hacer
		si num%i=0 Entonces
			divisores=divisores+1;
		FinSi
		si divisores=2 Entonces
			resultado=Verdadero;
		FinSi
	FinPara
FinFuncion

Funcion resultado<-primossiguiente(num)
	Definir resultado Como Entero;
	Definir encontrado Como logico;
	
	encontrado=Falso;
	resultado=0
	mientras ancontrado =Falso Hacer
		num=num+1;
		encontrontrado=primo(num);
	FinMientras
	resultado=num;
FinFuncion

Algoritmo ejercicio_81
	Definir num, candidato Como Entero
	num=0;
	Escribir 'dime un numero'
	Leer num;
	candidato=1;
	Mientras num>1 Hacer
		candidato=primossiguiente(candidato);
		si num%candidato=0 Entonces
			Escribir candidato
			num=num/candidato;
			candidato=1;
		FinSi
	FinMientras
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejrcicio_82</h2>
<pre>
<code>
Algoritmo ejrcicio_82
	definir ancho, alto, i, j, long Como Entero;
	Definir frase como Cadena;
	ancho=0;
	alto=0;
	i=0;
	j=0;
	long=0
	Escribir "escriba una frase"
	Leer frase;
	long=Longitud(frase);
	ancho=long+4
	
	para i=1 Hasta alto Hacer
		si i=1 | j=3 Entonces
			Para j<-1 Hasta ancho Hacer
				Escribir "*" Sin Saltar;
			FinPara
		SiNo
			Escribir "**", frase,"**" Sin Saltar;
		FinSi
		Escribir " ";
	FinPara
	
FinAlgoritmo

</code>
</pre>
<br>

<h2>ejercicio_83</h2>
<pre>
<code>
Funcion rotulo(listafrase, cantfrase)
	Definir ancho, alto, i, j, long, huecos Como Entero;
	Definir frase como Cadena;
	
	ancho=0;
	alto=cantfrase;
	i=0;
	j=0;
	long=0;
	huecos=0;
	
	Para i<-1 Hasta cantfrase Hacer
		si Longitud(listafrase[i])>long  Entonces
			long=Longitud(listafrase[i]);
		FinSi
	FinPara
	ancho=long+4;
	
	para i<-1 Hasta alto Hacer
		si i=1 | i=alto Entonces
			Para j<-1 Hasta  ancho Hacer
				Escribir "*" Sin Saltar;
			FinPara
		SiNo
			huecos=ancho-Longitud(listaFrase[i]);
			
			Para j<-1 Hasta trunc(huecos/2) Hacer
				Escribir " " Sin Saltar;
			FinPara
			Escribir listafrase[i] Sin Saltar;
		FinSi
		Escribir " ";
	FinPara
FinFuncion

Algoritmo ejercicio_83
	Definir i, cantidad Como Entero;
	Definir listafrases como Cadena;
	
	i=0;
	cantidad=0;
	Escribir '¿cuantas frases quieres escribir?'
	Leer cantidad;
	Dimension listafrases[cantidad];
	Para i<-1 Hasta cantidad Hacer
		Escribir 'dime la frase ', i;
		Leer listafrases[i];
	FinPara
	rotulo(listafrases, cantidad);
FinAlgoritmo

</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>

<h2></h2>
<pre>
<code>
</code>
</pre>
<br>