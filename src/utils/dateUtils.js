import moment from 'moment';

export const formattedDate = (date, format = 'DD.MM.YY HH:mm:ss') => {
	if (!date) {
		date = moment();
	} else {
		date = moment(date);
	}

	return date.format(format);
}