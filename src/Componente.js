export class Componente {
   //metodos
   constructor(idSelector,estadoInicial={})
   {
    this.contenedor = document.getElementById(idSelector);
    this.estado = estadoInicial; //guardará los estados del proceso de renderizado
    
   }
   //actualizar y refrescar la vista automáticamente
   /* ...this.estado : toma todo lo que existe en el estado
   actual y lo esparce en un nuevo objeto
   
   ...nuevoEstado: toma los datos que se quieren cambiar
   y los añade al final*/
   establecerEstado(nuevoEstado){
    this.estado = {...this.estado,...nuevoEstado};
    this.render(); //actualizacion  reactiva

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