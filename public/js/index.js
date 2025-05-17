modalEliminarUsuario()
modalEditarUsuario()



function modalEliminarUsuario() {
    const vendedorModal = document.getElementById('deleteVendorModal')
    const nombreVendedorEl = document.getElementById('nombre-vendedor');
    const usuarioIdInput = document.getElementById('usuarioIdInput');

    vendedorModal.addEventListener('show.bs.modal', (e) => {
        const boton = e.relatedTarget;
        const usuarioId = boton.getAttribute('data-usuario-id')
        const nombre = boton.getAttribute('data-usuario-nombre')
        nombreVendedorEl.textContent = nombre
        usuarioIdInput.value = usuarioId
    })
}

function modalEditarUsuario() {
    const vendedorModal = document.getElementById('editVendorModal');
    const usuarioIdInput = document.getElementById('usuarioIdInputEdit');
    const nombreVendedorEl = document.getElementById('editVendorName')
    const usuarioVendedorEl = document.getElementById('editVendorUser')


    vendedorModal.addEventListener('show.bs.modal', (e) => {
        const boton = e.relatedTarget;
        const usuarioId = boton.getAttribute('data-usuario-id');
        const nombre = boton.getAttribute('data-usuario-nombre');
        const nombreUsuario = boton.getAttribute('data-usuario-usuario');


        nombreVendedorEl.value = nombre
        usuarioVendedorEl.value = nombreUsuario
        usuarioIdInput.value = usuarioId;

    })
}