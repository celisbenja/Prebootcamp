function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

/*


// console.log= [Paula,Smith,Calle Principal 1234, St. Louis, MO, 12345]

diagrama en t

variable                valores
auntcontactinfo     | [paula, smith, calle principal 1234, St. Louis, MO, 12345]

*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

/*


// console.log= [brocoli, helado, croqueta de papa]

diagrama en t

variable        valores
produce       | [manzanas, naranjas]
frozen        |  [brócoli, helado]
*/


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*


 // console.log= [bambi,beetlejuice, toy story, zoro]
 
diagrama en t 

variable          valores 
movielibrary      [bambi, E.T., toy story]

*/