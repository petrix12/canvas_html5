/* https://www.youtube.com/watch?v=-cgdU9JSz28 */

function dibujar(){
var canvas = document.getElementById('areaDeDibujo');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'yellow';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        /* TEXTO */
        ctx.font = "bold 80% sans-serif";   // Atributos del texto
        ctx.fillText("Texto en el Canvas", 20, 10); // Escribir texto

        /* RECTÁNGULO */
        ctx.fillStyle = "#123456"; // Color de relleno del rectángulo
        ctx.fillRect(30, 20, 100, 50); // Dibujar el relleno del rectángulo - fillRect(x,y,ancho,alto)
        ctx.strokeStyle = "red"; // Color de borde del rectángulo
        ctx.strokeRect(30, 20, 100, 50); // Dibujar el borde del rectángulo - strokeRect(x,y,ancho,alto)
        ctx.fillText("Rectángulo", 150, 50);

        /* ARCO */
        var X = 80;
        var Y = 200;
        var r = 50;
        var aPartida = 0;
        var aFinal =  5;
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 12;
        ctx.arc(X, Y, r, aPartida, aFinal, false);  
        ctx.fillText("Arco", 150, 250);
        ctx.stroke();
    }

    //carita();
}

// Dibujar carita
function carita() {
    var canvas = document.getElementById('areaDeDibujo');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
    
        ctx.beginPath();
        ctx.arc(75,75,50,0,Math.PI*2,true); // Círculo externo
        ctx.moveTo(110,75);
        ctx.arc(75,75,35,0,Math.PI,false);   // Boca (contra reloj)
        ctx.moveTo(65,65);
        ctx.arc(60,65,5,0,Math.PI*2,true);  // Ojo izquierdo
        ctx.moveTo(95,65);
        ctx.arc(90,65,5,0,Math.PI*2,true);  // Ojo derecho
        ctx.stroke();
    }
  }



