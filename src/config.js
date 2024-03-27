import * as config from './config.js';

let responsiveStatus = 'UNKNOWN';

export const generalErrorMessage = () => {
	return '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i><p>At the moment, we are not able to fetch your data. Please try again or contact your administrator at 23487/23437843.</p>';
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
};

export const defaultMockWaitSeconds = () => {
	return 0;
};

export const defaultSimulateErrors = () => {
	return 'no';
};