import './styles/main.scss';
import { FormularioReserva } from './FormularioReserva';
import { ListaReservas } from './ListaReservas';

let baseDatos= []; //guardar las reservas

document.querySelector('#app').innerHTML=`
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-10">

            <h1 class="text-center mb-5 text-dark fw-bold">
                Gestión de Reservas
            </h1>
            <div id="form-container">
            </div>
            <div id="lista-container" class="mt-5"></div>

        </div>


    </div>


</div>



`;
//crearemos una nueva Lista de Reserva
const lista =  new ListaReservas('lista-container',
    {
        citas: baseDatos, //se le asigna a citas un arreglo vacio
        onEliminar:
        (index) => {
            if(confirm("¿Quieres realmente eliminar la cita"))
            {
                baseDatos.splice(index,1); //eliminar cita
                lista.establecerEstado({citas:baseDatos});

            }
        }



    }
);

//crearemos un nuevo formulario
const formulario = new FormularioReserva('form-container',

    {
        onAgregar: (nuevaCita) =>{
            //push para agregar una nueva cita
            baseDatos.push(nuevaCita);
            /*sort: ordenar las citas*
            
            se toma a y b porque necesitamos comparar dos elementos
            dentro del sort que correspoden a dos citas distintas
            donde cada cita será comparada en su fecha y hora*/

            baseDatos.sort(
                (a,b)=>{
                    /*`${a.fecha}T${a.hora}` 
                    yyyy-mm-ddTHH:mm
                    2026-02-09T11:59

                    */
                    const fechaA = new Date(`${a.fecha}T${a.hora}`);
                    const fechaB = new Date(`${b.fecha}T${b.hora}`);
                    
                    /*a=5 y b=3
                    //a-b=5-3 = 2 positivo
                     a>b
                     si b=5 y a=3
                     a-b =3-5 = -2 negativa
                     a<b

                     a=5 y b=5
                     a-b=5-5=0
                     a=b
                     Si
                     fechaA-fechaB >0
                     Entonces
                     fechaA>fechaB

                     Si fechaA-fechaB <0
                     Entonces
                     fechaA<fechaB

                     Si fechaA-fechaB=0
                     Entonces
                     fechaA=fechaB

                     */
                    return fechaA-fechaB; 

                }
            );

            lista.establecerEstado({citas:baseDatos});

        }


    }
);



//renderización
formulario.render();
lista.render();