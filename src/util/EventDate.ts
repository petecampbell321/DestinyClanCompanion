export class EventDate {
	private date: Date;

	constructor(date: Date) {
		this.date = date;
	}

	toDateString(): string {
		return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`;
	}

	getConvertedMinutes(): string {
		for (let i = 0; i < 10; i++) {
			if (this.date.getMinutes() === i) {
				return `0${this.date.getMinutes()}`
			}
		}
		return String(this.date.getMinutes())
	}

	toTimeString(): string {
		return `${this.date.getHours()}:${this.getConvertedMinutes()}`;
	}
}