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
                boton.onclick =  // por cada boton que clikee
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
                 getAttribute('data-index'); //obtener el indice

                 this.estado.onEliminar(parseInt(index)); //eliminar la cita

                }

            }
        );


    }
    html()
    {
        /* destructurar estado: extraer la propiedad citas
        del objeto this.estado
        const {citas} = this.estado;
        const {citas} -> declarar una constante de donde estoy
        seleccionando un atributo de un objeto que se llama
        citas de donde estoy extrayendo esa propiedad desde this.estado 
        que es un objeto.
        */
        const {citas}= this.estado;
        if (citas.length ==0) {
            //mensaje que no hay citas
            return `
            <!-- alert-info es un calor azul claro-->
            <div class="alert alert-info text-center">
                No hay citas disponibles
            </div>
            `;
            
        }
        //ejecuta la siguiente instrucción si la anterior es falsa
        return `

        <div class="mt-4">

    ${
        citas.map(

        (c,index)=>`
        <div class="card mb-3 border-start border-primary border-4 shadow-sm">
            <div class=" card-body d-flex justify-content-between 
            align-items-center">
              <!--text-primary es un color azul , muestra la 
              información del paciente
              ${c.paciente} mostrará el nombre del paciente-->
                <div>
                    <h6 class="mb-1 text-primary">${c.paciente}</h6>
                    <!--text-muted : gris claro 
                    small: letra mas pequeña que la de paciente-->
                    <div class="text-muted small">
                        ${c.fecha}
                        <!--margen al comienzo-->
                     <span class="ms-2">${c.hora}</span>   


                    </div>


                </div>

                <button class="btn btn-outline-danger
                 btn-small btn-eliminar" data-index="${index}">
                 Eliminar
                </button>


            </div>

        </div>
        
        `
        ).join('')

    }


</div>  `; //cierre del return

    }

}


