import './styles/main.scss';
import { FormularioReserva } from './FormularioReserva';
import { ListaReservas } from './ListaReservas';

let baseDatos= []; //guardar las reservas

document.querySelector('#app').innerHTML=`
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-10">

            <h1 class="text-center mb-5 text-dark fw-bold">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>   Gestión de Reservas
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