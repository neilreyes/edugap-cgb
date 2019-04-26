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
import './herobanner.style.scss';
import './herobanner.editor.scss';
import HeroBannerOptions from './herobanner.inspector';
import HeroBannerAttributes from './herobanner.attributes';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;

const renderBackgroundImage = ({ attributes }) => {
	const { backgroundMediaType, backgroundImage } = attributes;
	if (backgroundMediaType === 'image') {
		return {
			backgroundImage: `url( ${ backgroundImage } )`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		};
	}
};

const renderBackgroundVideo = ({ attributes }) => {
	const { backgroundMediaType, backgroundVideo } = attributes;
	if ( backgroundMediaType === 'video') {
		return (
			<div className="herobanner__bg-video-wrapper">
				<video autoPlay loop src={backgroundVideo}></video>
			</div>
		);
	}
};

registerBlockType( 'edugap/herobanner', {

	title: __( 'Edu Gap Hero Banner', 'edugap' ), // Block title.
	icon: 'format-image',
	description: __( 'A large box section with heading title and a call-to-action. Typically used at the very top of the page', 'edugap' ),
	category: 'edugap-category',
	supports: {
		align: [ 'center', 'wide', 'full' ],
	},
	attributes: HeroBannerAttributes,
	edit: props => {
		const {
			attributes,
			setAttributes,
			className } = props;
		const {
			overlayColor,
			fontColor,
			buttonColor,
			buttonLabel,
			buttonTextColor,
			overlayTransparency,
			headingText,
			buttonBorderRadius } = attributes;
		const transparency = overlayTransparency / 10;
		function handleOnHeadingTextChange( newHeadingText ) {
			setAttributes( { headingText: newHeadingText } );
		}
		function handleOnButtonLabelChange( newButtonLabel ) {
			setAttributes( { buttonLabel: newButtonLabel } );
		}
		return [
			<InspectorControls key="inspector">
				{ HeroBannerOptions( props ) }
			</InspectorControls>,
			<div
				key="editable-content"
				className={className}
				style={renderBackgroundImage(props)} >
				<div className="edugap-herobanner-content">
					<div className="edugap-herobanner__content-wrapper">
						<RichText
							tagName="h1"
							className="hero-banner-heading-text"
							value={headingText}
							onChange={handleOnHeadingTextChange}
							placeholder="Heading text here..."
							style={{ color: fontColor }} />
						<RichText
							tagName="div"
							className="btn-primary"
							value={buttonLabel}
							onChange={handleOnButtonLabelChange}
							placeholder="Button Label"
							style={{
								backgroundColor: buttonColor,
								color: buttonTextColor,
								borderRadius: buttonBorderRadius
							}} />
					</div>
				</div>
				<div
					className="edugap-herobanner-overlay"
					style={{ backgroundColor: overlayColor, opacity: transparency }}>
				</div>
				{renderBackgroundVideo(props)}
			</div>,
		];
	},
	save: props => {
		const { attributes, className } = props;
		const { buttonBorderRadius, headingText, fontColor, overlayColor, buttonLabel, buttonLink, overlayTransparency } = attributes;
		const transparency = overlayTransparency / 10;
		return (
			<div
				className={ className }
				style={renderBackgroundImage(props)} >
				<div className="edugap-herobanner-content">
					<div className="edugap-herobanner__content-wrapper">
						<RichText.Content
							tagName="h1"
							className="hero-banner-heading-text"
							style={{ color: fontColor }}
							value={headingText} />
						<a
							href={buttonLink}
							className="btn-primary"
							style={{
								borderRadius: buttonBorderRadius
							}}>
								{buttonLabel}
						</a>
					</div>
				</div>
				<div
					className="edugap-herobanner-overlay"
					style={{ backgroundColor: overlayColor, opacity: transparency } }>
				</div>
				{renderBackgroundVideo(props)}
			</div>
		);
	},
} );
