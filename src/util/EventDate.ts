export class EventDate extends Date {

    constructor(props: any) {
        super(props);
    }

    toDateString(): string {
        return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
    }

    getConvertedMinutes(): string {
        for(let i = 0; i < 10; i++) {
            if (super.getMinutes() === i) {
                return `0${super.getMinutes()}`
            }
        }
        return String(super.getMinutes())
    }

    toTimeString(): string {
        return `${this.getHours()}:${this.getConvertedMinutes()}`;
    }
}