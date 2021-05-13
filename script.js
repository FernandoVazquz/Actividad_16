const app = Vue.createApp ({
    data: () => ({
        productos: [
            {nombre: "Cerveza", cantidad: 10},
            {nombre: "Coca-Cola", cantidad: 10},
            {nombre: "Papas", cantidad: 7},
        ],
        productoNuevo: "",
    }),

    methods: {
        agregarProducto () {
            this.productos.push(
                {nombre: this.productoNuevo, cantidad: 0}
            )
            this.productoNuevo = "";
        }
    },
    computed : {
        sumarCantidad(){
            this.total = 0;
            for(producto of this.productos){
                this.total = this.total + producto.cantidad;
            }
            return this.total;
        },
        voltearTexto(){
            return this.productoNuevo.split("").reverse().join("")
        }
    }
})

const vm = app.mount('#app')