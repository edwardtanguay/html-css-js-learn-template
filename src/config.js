import * as config from './config.js';

let responsiveStatus = 'UNKNOWN';

export const generalErrorMessage = () => {
	return '<h3>We\'re Sorry</h3> <p>At the moment, we are not able to fetch your data. Please contact your administrator at 23487/23437843.</p>';
};

export const siteBackgroundColor = () => {
	return '#ccc';
};

export const getResponsiveStatus = () => {
	return responsiveStatus;
};

export const setResponsiveStatus = (value) => {
	responsiveStatus = value;
};

export const determineResponsiveStatus = () => {
	if (window.innerWidth >= 768) {
		config.setResponsiveStatus('computer');
	} else {
		config.setResponsiveStatus('mobile');
	}
};

export const defaultSiteMode = () => {
	return 'light';
}

export const defaultMockWaitSeconds = () => {
	return 0;
}

export const defaultSimulateErrors = () => {
	return 'no';
}