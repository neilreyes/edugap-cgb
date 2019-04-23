/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable space-in-parens */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import defaultColors from '../lib/colors';

const HeroBannerAttributes = {
	color: defaultColors,
	headingText: {
		type: 'string',
		source: 'text',
		selector: 'p',
		default: 'Heading text...',
	},
	fontColor: {
		type: 'string',
		default: '#000000',
	},
	overlayColor: {
		type: 'string',
		default: '#000000',
	},
	backgroundVideo: {
		type: 'string',
		default: null,
	},
	backgroundImage: {
		type: 'string',
		default: null,
	},
	buttonLabel: {
		type: 'string',
		default: 'Click here',
	},
	buttonLink: {
		type: 'string',
		default: '#',
	},
	buttonLabelColor: {
		type: 'string',
		default: '#000000',
	},
	buttonColor: {
		type: 'string',
		default: '#fcc418',
	},
};

export default HeroBannerAttributes;