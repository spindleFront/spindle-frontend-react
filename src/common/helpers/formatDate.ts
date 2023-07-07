export const formatDate = (date: number | undefined) => {
	if (date) {
		return new Date(date).toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			month: 'numeric',
			day: 'numeric',
			year: 'numeric',
			hour12: false,
		});
	}
};
