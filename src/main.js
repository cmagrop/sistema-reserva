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



//renderización
lista.render();