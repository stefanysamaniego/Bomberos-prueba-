class Motobomba{
    constructor(id,capacidad,estado=false){
        this.id=id;
        this.capacidad=capacidad;
        this.estado=estado;
    }
    prender(){
        this.estado=true
        
    }
    apagare(){
        this.estado=false
    }
    getEstado(){

        return(this.estado)
    }
    toString(){
        if(this.estado=false){
            document.getElementById('estado').innerHTML='<img src="img/rojo.jpg" windth="130px" height="100px">'
            var estado = document.createElement('a')
            estado.innerHTML='Esta apagado'
            document.body.appendChild(estado)
            
        } 
        if(this.estado=true){
            document.getElementById('estado').innerHTML='<img src="img/verde.jpg" windth="130px" height="100px">'
            var estado = document.createElement('a')
            estado.innerHTML='Esta prendido'
            document.body.appendChild(estado)
        }
    }
    crear(){
        var recuperar=document.getElementById("id").value;
        var recuperar1=document.getElementById("capacidad").value;
        this.id=recuperar;
        this.capacidad=recuperar1;
        document.getElementById('imagen').innerHTML='<img src="img/bomberos.jpg" windth="130px" height="100px">'
        document.getElementById('boton').innerHTML=' <button type="button" id="estados" onclick="motobomba.toString()">Estado</button>'
    }
}
