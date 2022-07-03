/*
Hacer un programa de cine que permita generar un ticket con los datos necesarios 
y asimismo poder acceder a descuentos y ofertas especiales. Para poder acceder al cine, 
se debe tener en cuenta lo siguiente:
 
1. Pedir el nombre del cliente, si el nombre no es un tipo string o es nulo, 
    te debe pedir de nuevo que ingreses correctamente tu nombre.
 
2. Pedir la edad del cliente, si la edad no es numérico es nulo, te debe pedir 
    de nuevo que ingreses correctamente tu edad.
 
3. Pedir que ingreses el nombre de la película que esta en cartelera 
    (ingresar la película tal cual como este escrito), para ello se debe mostrar 
    un listado de las películas ('Spider Man', 'Superman', 'Dragon Ball Super', 'La era del hielo', 'xvideos').
 
Si el cliente ingresa una película que no esta en la cartelera o es nulo, 
te debe pedir de nuevo que ingreses correctamente la película en cartelera.
 
4. Si la edad del cliente es menor o igual a 17 y la película que escogió es "xvideos", 
    deberá mostrarle un mensaje que no tiene permiso de acceder al cine. Caso contrario, se realizara
    lo siguiente:
 
5. Si la edad del cliente es menor o igual a 17, tendrá un descuento del 50% 
    y así mismo tendrá de regalo incluido: Galletas, Cheezetos, Hot Dog y Gaseosa.
 
6. Si la edad del cliente es mayor o igual a 18 y menor o igual a 25, no tendrá 
    descuento alguno pero si tendrá de regalo incluido: Cancha y Gaseosa.
 
7. Si la edad del cliente es mayor o igual a 26 y menor o igual a 35, tendrá un 
    descuento del 10% y así mismo tendrá de regalo incluido: Cancha, Papas Fritas y Gaseosa.
 
8. Si la edad del cliente es mayor o igual a 36, tendrá un descuento del 20% 
    y así mismo tendrá de regalo incluido: Cancha, Galletas y Agua.
 
*Tener en cuenta que la lista de películas, comidas y bebidas deben estar en arreglos
*Utilizar funciones anónimas y/o callbacks
*Imprimir por consola y la web: el nombre del cliente, nombre de la película, lista de comidas 
y bebida a la que accede, y el total a pagar dependiendo a que descuento accede o no por la edad.
*/