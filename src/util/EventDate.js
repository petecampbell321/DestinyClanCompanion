export class EventDate extends Date {

    constructor() {
        super();
    }

    toDateString() {
        return `${this.getDay()}/${this.getMonth()}/${this.getFullYear()}`;
    }

    getMinutes() {
        for(let i = 0; i < 10; i++) {
            if (super.getMinutes() === i) {
                return `0${super.getMinutes()}`
            }
        }
        return super.getMinutes()
    }

    toTimeString() {
        return `${this.getHours()}:${this.getMinutes()}`;
    }
}