window.addEventListener("load", () => {
    let form = document.querySelector(".editarProducto");
    let errorSec = document.querySelector("#errors");
    let nombre = document.querySelector("#nombre");
    let precio = document.querySelector("#precio");
    let descripcionCorta = document.querySelector("#descripcionCorta");
    let descripcionLarga = document.querySelector("#descripcion");
    let imagen = document.querySelector("#seleccionar-archivo");
    let imagenGrande = document.querySelector("#seleccionar-archivo-grande");
    let tour = document.querySelector("#vistaHome");
    let categoria = document.querySelector("#categoria");

    form.addEventListener("submit", (e) => {
        let errors = [];

        //Validacion de nombre
        if (nombre.value.trim() == "" || nombre.value.length < 5) {
            nombre.classList.add("is-invalid");
            errors.push("El titulo tiene que tener 5 caracteres minimo");
        }

        //Validacion de precio
        if (precio.value.trim() == "" || precio.value < 1 || isNaN(precio.value)) {
            precio.classList.add("is-invalid");
            errors.push("Este valor es obligatorio");
        }

        //Validacion de descripcion
        if (descripcionCorta.value.trim() == "" || descripcionCorta.value.length < 15) {
            descripcionCorta.classList.add("is-invalid");
            errors.push("La descripcion corta tiene que tener minumo 15 caracteres minimo");
        }

        if (descripcionLarga.value.trim() == "" || descripcionLarga.value.length < 40) {
            descripcionLarga.classList.add("is-invalid");
            errors.push("La descripcion corta tiene que tener minumo 40 caracteres minimo");
        }

        //Validacion de imagenes - TODO: Preguntar ID en VIEW || Chequear pq no anda
        //Imagen chica
        if (imagen.value.trim() == "") {
            errors.push("Debe subir una imagen de 350 x 200 px")
        } else {
            if (imagen.value.includes(".jpg") || imagen.value.includes(".jpeg") || imagen.value.includes(".png") || imagen.value.includes(".gif")) {
                //No hagas nada baby
            } else {
                errors.push("El formato de la imagen tiene q ser jpg, jpeg, png o gif")
            }
        }

        //Imagen grande
        if (imagenGrande.value.trim() == "") {
            errors.push("Debe subir una imagen de 1400 x 490 px")
        } else {
            if (imagenGrande.value.includes(".jpg") || imagenGrande.value.includes(".jpeg") || imagenGrande.value.includes(".png") || imagenGrande.value.includes(".gif")) {
                //No hagas nada baby
            } else {
                errors.push("El formato de la imagen tiene q ser jpg, jpeg, png o gif")
            }
        }



        //Lugar del tour
        /* SE DEJA FUERA DE USO ESTA VALIDACION YA QUE PUEDE DEJARSE SELECCIONADA LA OPCION PREDETERMINADA */
/*         if (tour.selectedIndex == 0) {
            tour.classList.add("is-invalid");
            errors.push("Debe seleccionar un lugar");
        } */

        //Categoria del tour
        if (categoria.selectedIndex == 0) {
            categoria.classList.add("is-invalid");
            errors.push("Debe seleccionar una categoria");
        }

        //Validacion de Errors
        if (errors.length != 0) {
            e.preventDefault();

            errors.forEach(error => {
                errorSec.innerHTML += "<li>" + error + "</li>";
            })
        }
    })
}); 