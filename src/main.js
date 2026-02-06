import './styles/main.scss';
import { FormularioReserva } from './FormularioReserva';
import { ListaReservas } from './ListaReservas';

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



`
