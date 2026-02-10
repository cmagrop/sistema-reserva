import { Componente } from "./Componente";

export class FormularioReserva extends Componente {

    despuesDeRender() {

        const boton = this.contenedor.querySelector('#btn-agendar');
        if (boton) //si el boton existe
        {
            boton.onclick =
                () => {
                    const paciente =
                        this.contenedor.querySelector('#paciente').value;
                    const fecha =
                        this.contenedor.querySelector('#fecha').value;
                    const hora =
                        this.contenedor.querySelector('#hora').value;

                    //validar que paciente, fecha y hora no esten vacios
                    if (paciente && fecha && hora) {

                        this.estado.onAgregar({ paciente, fecha, hora });
                        //limpiar el formulario

                        this.contenedor.querySelector('#paciente').value = '';

                        this.contenedor.querySelector('#fecha').value = '';

                        this.contenedor.querySelector('#hora').value = '';



                    } else {
                        alert("Por favor completa todos los campos");

                    }
                };


        }



    }

    html() {

        return `
        <!-- html de FormularioReserva -->

        <div class="card p-4 shadow-sm bg-white">
            <!-- g-3 significa gap-3 
            
            g-3 significa que es un espaciado de 3rem-->
            <div class="row g-3">
                <div class="col-md-4">

                    <label class="form-label small fw-bold ">Paciente:</label>
                    <input type="text"  id="paciente" 
                    class="form-control" placeholder="Nombre Completo">
                
                </div>

                <div class="col-md-3">
                    <label class="form-label small fw-bold ">Fecha:</label>
                    <input type="date" id="fecha" class="form-control">
                </div>

                <div class="col-md-3">
                    <label class="form-label small fw-bold ">Hora:</label>
                    <input type="time" id="hora" class="form-control">
                
                </div>

                <div class="col-md-2 d-flex align-items-end">
                    <button class="btn btn-primary w-100" id="btn-agendar">
                        Agendar
                    </button>
                    
                </div>


            </div>




        </div> 
        
        `;
    }


} //cierra de la clase
