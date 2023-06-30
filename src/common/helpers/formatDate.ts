export const formatDate = (date: number | undefined) => {
	if (date) {
		return new Date(date).toLocaleString('en-US', {
			month: 'numeric',
			day: 'numeric',
			year: 'numeric',
		});
	}
};
