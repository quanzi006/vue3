import { defineStore } from 'pinia'
export const  useCounterStore = defineStore('counter',{
    state() {
        return {
            counter: 1
        }
    },
    actions: {
        inc() {
            this.counter++;
        }
    }
})