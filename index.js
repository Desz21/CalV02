
        console.log("Hola Perú");
        //Funcion Regular en JavaScript
        function testFunction(){
            let n = 4;
            let x = 3
            showResult(cube2(x)); 
        }
        function square(n){
            return n * n;
        }
        //Arrow notation
        const cube = x =>{
            console.log("En funcion cube ...");
            return x * x * x;
        }
        const cube2 = x => x * x * x;
        function greet(){
            return "Hola Mundo";
            
        }
        function showResult(result){
            //Obtenemos una referencia al elemento HTML con ese ID
            //Podemos modificar sus atributos
            document.getElementById("txtResult").value = result;
        }
        const getTriangleType = (a, b, c) => {
            if(a==b || a==c || b==c){
                return "Isosceles"
            }
            else if (a==b && b==c){
                return "Equilatero"
            }
            else{
                return "Escaleno"
            }
        }
        const test1 = _ =>{
            let values = [2,3,4];
            print(values);
        }
        /*
        Implemente una funcion que reciba un entero n y 
        retorne un array con la suma de los numeros 
        enteros entre 1 y n (inclusive). Muestre en 
        consola la suma total.
        */
       const getSum = n => {
           let sum = 0;
           let values = [];
           for(let i = 1; i <= n;i++){
               values.push(i);
               sum += i;
           }
           console.log("La suma es: ", sum)
           return values;
       }

       const find = (arr, x) => {
           //Primeraforma: Con indices
           for(let i = 0; i < arr.length;i++){
               if(arr[i] == x){
                   return true;
               }
           }
           return false;
       }

       const find2 = (arr, x) => {
        //Primeraforma: Con indices
        for(let element of arr){
            if(element == x){
                return true;
            }
        }
        return false;
        }

        const showMatrix = _ =>{
            const values = [[1,2,3],[4,5,6],[7,8,9]];
            for(let i = 0;i < values.length;i++){
                for(let j=0;j<values[0].length;j++){
                    console.log(i,j,values[i][j]);
                }
            }
            return true;
        }

        //Retorna el nombre completo del estudiante
        const getFullName = student => student.firstName + " " + student.lastName;

        //Retorne verdadero si el estudiante es mayor de edad o falso en caso contrario
        const legalAge = student => student.age >=18 ? "Mayor de edad" : "Menor de edad";

        function GetProd(){
            value1 = parseInt(document.getElementById("txtValue1").value);
            value2 = parseInt(document.getElementById("txtValue2").value);
            console.log(value1 * value2);   
            document.getElementById("lblResult").innerHTML = value1 * value2;
            document.getElementById("divTitle").innerHTML = "<h3>Titulo</h3>"
        }

        function GetSum(){
            value1 = parseInt(document.getElementById("txtValue1").value);
            value2 = parseInt(document.getElementById("txtValue2").value);
            console.log(value1 + value2);   
            document.getElementById("lblResult").innerHTML = value1 + value2;
            document.getElementById("divTitle").innerHTML = "<h3>Titulo</h3>"
        }
        function GetMinus(){
            value1 = parseInt(document.getElementById("txtValue1").value);
            value2 = parseInt(document.getElementById("txtValue2").value);
            console.log(value1 - value2);   
            document.getElementById("lblResult").innerHTML = value1 - value2;
            document.getElementById("divTitle").innerHTML = "<h3>Titulo</h3>"
        }

        function GetDiv(){
            value1 = parseInt(document.getElementById("txtValue1").value);
            value2 = parseInt(document.getElementById("txtValue2").value);
            console.log(value1 / value2);   
            document.getElementById("lblResult").innerHTML = value1 / value2;
            
            document.getElementById("divTitle").innerHTML = "<h3>Titulo</h3>"
        }

        function Clean(){
            
            document.getElementById("txtValue1").value = "";
            document.getElementById("txtValue2").value = "";
            document.getElementById("lblResult").value= "";
            document.getElementById("divTitle").innerHTML = "<h3>Titulo</h3>"
        }
        function SaveValues(){
            
        }
        window.onload = _ =>{
            /*document.getElementById("divTitulo").innerHTML = "<h2>El otro titulo</h2>"*/
            document.getElementById("btnTest").onclick = _ =>{
                showResult("Hola Ulima");
            }
        }
        



