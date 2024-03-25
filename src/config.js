let responsiveStatus = 'UNKNOWN';

export const generalErrorMessage = () => {
	return '<h1>We\'re Sorry</h1> <p>At the moment, we are not able to fetch your data. Please contact you administrator at 23487/23437843.</p>'; 
}

export const siteBackgroundColor = () => {
	return '#ccc';
}

export const getResponsiveStatus = () => {
	return responsiveStatus;
}

export const setResponsiveStatus = (value) => {
	responsiveStatus = value;
}