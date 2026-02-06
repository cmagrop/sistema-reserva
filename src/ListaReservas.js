import { Componente } from "./Componente";

export class ListaReservas extends Componente{
    despuesDeRender()
    {
        /*querySelectorAll: seleccionará todos los elementos
         dentro del HTML qjue tengan asociada la clase .btn-eliminar
        
        */
        const botones = this.contenedor.querySelectorAll('.btn-eliminar');
        botones.forEach( //recorre cada uno de los botones btn-eliminar
            boton=>{ //toma cada boton existente y lo condiciona
                boton.click =  // por cada boton que clikee
                (e)=>{ //disparará un evento que debe modelar su comportamiento
                 //modelar el comportamiento del evento
                 /* 
                 e: evento
                 target: se refiere boton fue el que disparo el evento
                 closest()-> buscará siempre el button mas cercano
                getAttribute('data-index')-> capturar el indice que ocupa
                un boton dentro de la iteración


                    
                 */
                 const index = e.target.closest('button').
                 getAttribute('data-index');

                 this.estado.onEliminar(parseInt(index)); //eliminar la cita

                }

            }
        );


    }
    html()
    {
        
    }

}


