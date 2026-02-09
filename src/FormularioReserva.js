import { Componente } from "./Componente";

export class FormularioReserva extends Componente{

    despuesDeRender(){

        const boton = this.contenedor.querySelector('#btn-agendar');
            if(boton) //si el boton existe
            {
                boton.onclick=
                ()=>{
                    const paciente = 
                    this.contenedor.querySelector('#paciente').value;
                    const fecha =
                    this.contenedor.querySelector('#fecha').value;
                    const hora =
                    this.contenedor.querySelector('#hora').value;

                    //validar que paciente, fecha y hora no esten vacios
                    if (paciente && fecha && hora) {

                        this.estado.onAgregar({paciente,fecha,hora});
                        //limpiar el formulario
                    
                    this.contenedor.querySelector('#paciente').value = '';
                    
                    this.contenedor.querySelector('#fecha').value = '';
                    
                    this.contenedor.querySelector('#hora').value ='';
                        

                        
                    } else {
                        alert("Por favor completa todos los campos");
                        
                    }
                };


            }



    }

    html()
    {

        return 
        `
        
        
        
        `;
    }
    

} //cierra de la clase
