
<h2>ejrcicio11</h2>
<h3>positivo o negativo</h3>
<pre>
  <code>
    Algoritmo positivo_o_negativo 
            Definir num Como Entero
            Escribir "ingrese un numero"
             Leer num
            Si num<0 Entonces
              Escribir "negativo"
            SiNo
              escribir "positivo"
            Fin Si
       FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio12</h2>
<h3>par o impar</h3>
<pre>
  <code>
      Algoritmo par_o_impar
      Definir num Como Entero
      escribir "ingrese un numero"
      leer num
      Si num=par Entonces
        escribir "par"
      SiNo
        escribir "impar"
      Fin Si
    FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio13</h2>
<h3>día de la semana</h3>
<pre>
  <code>
    Algoritmo dia_de_la_semana
	Definir num Como Entero
	escribir "ingrese un número del 1 al 7"
	Leer num
	Si num=1 Entonces
		
		escribir"Lunes"
	SiNo
		Si num=2 Entonces
			Escribir "Martes"
		SiNo
			Si num=3 Entonces
				Escribir "Miercoles"
			SiNo
				si num=4 Entonces
					Escribir "Jueves"
				SiNo
					Si num=5 Entonces
						escribir "Viernes"
					SiNo
						Si num=6 Entonces
							escribir "Sabado"
						SiNo
							si num=7 Entonces
								Escribir "Domingo"
							FinSi
						Fin Si
					Fin Si
				FinSi
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo

  </code>
</pre>  
<h2>ejercicio14</h2>
<h3>mayor de tres numeros</h3>
<pre>
  <code>
    Algoritmo mayor_de_tres_numeros
      Escribir 'ingrese primer numero'
      Leer a
      Escribir 'ingrese segundo numero'
      Leer b
      Escribir 'ingrese tercer numero'
      Leer c
      Si a>b Entonces
        Escribir "el amyor es: ",a
      SiNo
        Si b>c Entonces
          Escribir 'el mayor es: " ,b
        SiNo
          Escribir 'el mayor es:"  c
        FinSi
      FinSi
    FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio 15</h2>
<h3>aprovado o reprobado</h3>
<pre>
  <code>
    Algoritmo aprobado_o_reprobado
      Escribir "ingrese su nota"
      Leer nota
      Si nota>=60 Entonces
        Escribir "aprobado"
        SiNo
          Escribir "reprobado"
        Fin Si
    FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio16</h2>
<h3>rango de numeros</h3>
<pre>
  <code>
  Algoritmo rango_de_numeros
	definir n Como Entero
	Escribir "ingrese un numero"
	leer n
	Si n <=10 y n=1 Entonces
		Escribir "esta en el rango"
	SiNo
		Escribir "no esta en el rango"
	Fin Si
FinAlgoritmo

  </code>
</pre>  
<h2>ejercicio17</h2>
<h3>categoria edad</h3>
<pre>
  <code>
    Algoritmo categoria_de_edad
      Definir edad Como Entero
      escribir "ingrese su edad"
      Leer edad
      Si edad<=12 Entonces
        Escribir "niño"
      SiNo
        Si edad<=17 Entonces
          escribir"adolesente"
        SiNo
          Si edad<=64 Entonces
            escribir "adulto"
          SiNo
            Si edad>=65 Entonces
              escribir"adulto mayor"
            SiNo
              escribir" "
            Fin Si
          Fin Si
        Fin Si
      Fin Si
    FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio18</h2>
<h3>calculadora de descuento</h3>
<pre>
  <code>
    Algoritmo calculadora_de_descuento
      Definir descueto, precio Como Entero
      
      escribir "ingrese el precio de su producto"
      leer precio
      Si precio >= 100 Entonces
        descuento = precio * 10 
        division = descuento / 100
        descuento_total = precio - division
        Escribir 'precio normal: ' precio
        Escribir 'descuento: ' division
        Escribir 'precio con descuento: ' descuento_total
      SiNo
        Escribir precio
      FinSi
    FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio19</h2>
<h3>divisible entre 5 y 3</h3>
<pre>
  <code>
    Algoritmo divisivilidad_por_5_y_3
      Definir num Como Entero
      escribir"ingrese un numero"
      leer num
      Si num%3=0 y (num%5=0) Entonces
        escribir "tu numero es divisible entre 3 y 5"
      SiNo
        Escribir "tu numero no es divisible"
        
      Fin Si
      
    FinAlgoritmo
  </code>
</pre>  
<h2>ejercicio 20</h2>
<h3>Día habli o fin de semana</h3>
<pre>
  <code>
    Algoritmo dia_habil_o_fin_de_semana
      definir dia Como Entero
      Escribir "escriba un numero del 1 al 7"
      Leer dia
      Si dia=1 o (dia<6) Entonces
        Escribir "dia habil"
      SiNo
        Si dia=6 o (dia=7) Entonces
          escribir "fin de semana"
        SiNo
          Escribir ""
        Fin Si
      Fin Si
    FinAlgoritmo

  </code>
</pre>  