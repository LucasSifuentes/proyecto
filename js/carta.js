
        // Cargar datos desde el archivo JSON
        fetch('cartajson/carta.json')
            .then(response => response.json())
            .then(data => {
                const menuList = document.getElementById('CartaTarjetas');
                data.forEach(item => {
                    const divContenedor = document.createElement('div');
                    divContenedor.className = "divContenedor";
                    divContenedor.innerHTML = `
        <div>
           <p class='titulo'>  
          ${item.nombre}                
            </p> 
            <img src="${item.imagen}" class="imgCss"/>
                <p class= 'titulo'> 
                    $${item.precio}
                </p>          
        </div>   
          `;
                    // Crear imagen, luego asignar la direccion desde el JSON
                    //const img = document.createElement('img');
                    //.src = item.imagen;  //Asume que el JSON tiene una propiedad "imagen"
                    //   img.className = "imgCss"

                    // Agregar clase para aplicar estilos
                    //   img.classList.add('menu-item-image');

                    // Agregar elementos al DOM
                    //   divContenedor.appendChild(img);
                    menuList.appendChild(divContenedor);
                });
            })
            .catch(error => console.error('Error al traer los datos del Json:', error));
