

listado = [
    [1,"Juan", 10, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex nemo minus optio consequatur. Nulla qui possimus sed enim asperiores ex explicabo! Sint vel assumenda magnam velit doloribus atque nisi." ],
    [1,"Juan", 10, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex nemo minus optio consequatur. Nulla qui possimus sed enim asperiores ex explicabo! Sint vel assumenda magnam velit doloribus atque nisi." ]

];

function carga(){

        for (let i = 0; i < listado.length; i++) {
            
            const array = listado[i];
            
            let trElement = document.createElement('tr');
            trElement.setAttribute("id",i);
            trElement.setAttribute("data-row",i);
            document.querySelector("#data-table").appendChild(trElement);
            
            for (let j = 0; j < array.length; j++) {
                const element = array[j];

                let tdElement = document.createElement('td');
                if(j===0){
                    tdElement.innerHTML=i;
                }else{
                    tdElement.innerHTML=element;
                }
                
                document.querySelector("#data-table tr[id='"+ i +"']").appendChild(tdElement);
                
            }
            
        }
            
    }
    
function envio(){
    let nombreForm = document.getElementById('nombre').value;
    let cantidadForm = document.getElementById('cantidad').value;
    let descripcionForm = document.getElementById('descripcion').value;

    if( !comprobarNombreRepetido(nombreForm) ){
        listado.push([1, nombreForm, cantidadForm, descripcionForm]);
        limpiarTabla();
        carga();
    }else{
        console.error("El nombre ya se encuentra en uso.");
    }
    

}

function limpiarTabla() {
    // Removes an element from the document
    let elementos = document.querySelectorAll("#data-table tr[data-row]");
    elementos.forEach(element => {
        document.getElementById("data-table").removeChild(element);
    });

}

function comprobarNombreRepetido(name){
    for (let i = 0; i < listado.length; i++) {
        const array = listado[i];
        
        if(array[1] == name){
            return true;
        }
        
    }
    return false;
}

function filtrarTablaPorNombre(value){
    //debugger;
    limpiarTabla();

    for (let i = 0; i < listado.length; i++) {
            
        const array = listado[i];
        
        let trElement = document.createElement('tr');
        trElement.setAttribute("id",i);
        trElement.setAttribute("data-row",i);
        
        document.querySelector("#data-table").appendChild(trElement);

        let valueToCompare = array[1];
        
        valueToCompare = valueToCompare.toLowerCase();
        if(valueToCompare.includes(value)  ){

            
            for (let j = 0; j < array.length; j++) {
            const element = array[j];
            
            let tdElement = document.createElement('td');
            if(j===0){
                tdElement.innerHTML=i;
            }else{
                tdElement.innerHTML=element;
            }
         
            document.querySelector("#data-table tr[id='"+ i +"']").appendChild(tdElement);
            
        }
    }
        
    }
}

// document.querySelectorAll("#data-table tr")[1].append(tr)