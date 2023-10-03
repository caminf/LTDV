import { defineStore } from "pinia";
import data from "@/data/data";


export const useCartStore = defineStore("CartStore",
    {
        state: () => {
            return {
                cartContet: {},
            }
        },

        actions: {
            add(productId) {
                if (this.cartContet.hasOwnProperty(productId)) {
                    
                    this.cartContet[productId] = {
                        productId,
                        quantity: this.cartContet[productId].quantity + 1,
                    }

                } else {
                    this.cartContet[productId] = {
                        productId,
                        quantity: 1,
                    }
                }

            },
            remove(productId) {
                if (!this.cartContet[productId]) {
                    return
                }
                this.cartContet[productId].quantity -= 1;

                if (this.cartContet[productId].quantity === 0) {
                    delete this.cartContet[productId];
                }
            },
            removeProduct(productId) {
                delete this.cartContet[productId]
            }

        },

        getters: {

            formattedCart() {
                return Object.keys(this.cartContet).map(productId => {
                    const product = this.cartContet[productId];

                    return {
                        id: product.productId,
                        name: data.find((data) => data.id === product.productId).name,
                        price: data.find((data) => data.id === product.productId).price,
                        quantity: product.quantity,
                        cost: product.quantity * data.find((data) => data.id === product.productId).price,

                    }
                })
            },
            // acc = acumulador
            total() {
                return Object.keys(this.cartContet).reduce((acc, id) => {
                    //single product according to the id 
                    const product = product.find(p => p.id === id);

                    if (product) {
                        return acc + product.price * this.cartContet[id].quantity;
                    }

                    return acc + 0;
                }, 0);
            },

            productsTotal() {
                return Object.keys(this.cartContet).reduce((acc, id) => {
                    return acc + this.cartContet[id].quantity;
                },0);
            }





        }

    },





);
