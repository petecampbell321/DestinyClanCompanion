import {EventDate} from "../../src/util/EventDate";

const EVENT_DATE = new EventDate(new Date(1998, 9, 28));
const EVENT_DATE_WITH_TIME = new EventDate(new Date(2021, 0, 1, 12, 5, 0, 0))

describe('Date Conversion', function() {
	it('should return correct date string', function () {
		expect(EVENT_DATE.toDateString()).toBe("28/10/1998");
	});

	it('should add a zero if minutes is single digit', function () {
		expect(EVENT_DATE_WITH_TIME.getConvertedMinutes()).toBe("05")
	});

	it('should return correct time string', function () {
		expect(EVENT_DATE_WITH_TIME.toTimeString()).toBe("12:05")
	});
})