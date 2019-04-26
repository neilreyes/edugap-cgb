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

const HeroBannerAttributes = {
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
	overlayTransparency: {
		type: 'number',
		default: 5,
	},
	backgroundImage: {
		type: 'string',
		default: null,
	},
	backgroundVideo: {
		type: 'string',
		default: null,
	},
	backgroundMediaType: {
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
	buttonColor: {
		type: 'string',
		default: '#fcc418',
	},
	buttonTextColor: {
		type: 'string',
		default: '#000000',
	},
	buttonBorderRadius: {
		type: 'number',
		default: 15
	}
};

export default HeroBannerAttributes;