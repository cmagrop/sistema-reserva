export class Componente {
   //metodos
   constructor(idSelector,estadoInicial={})
   {
    this.contenedor = document.getElementById(idSelector);
    this.estado = estadoInicial; //guardará los estados del proceso de renderizado
    
   }
   //actualizar y refrescar la vista automáticamente
   establecerEstado(nuevoEstado){
    this.estado = {...this.estado,...nuevoEstado};
    this.render();

   }

   render()
   {
    if(this.contenedor) // si existe 
    {
        this.contenedor.innerHTML=this.html();
        this.despuesDeRender();
    
    }

   }

   html()
   {
    return '';
   }

   despuesDeRender()
   {

   }



}