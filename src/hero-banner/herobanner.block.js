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

//  Import CSS.
import './herobanner.style.scss';
import './herobanner.editor.scss';

// Import inspecto
import HeroBannerOptions from './herobanner.inspector';
import HeroBannerAttributes from './herobanner.attributes';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;

console.log('wp.blocks:', wp.blocks );
console.log('wp.editor:', wp.editor );

registerBlockType( 'edugap/herobanner', {

	title: __( 'Edu Gap Hero Banner', 'edugap' ), // Block title.
	icon: 'format-image',
	description: __( 'A large box section with heading title and a call-to-action. Typically used at the very top of the page', 'edugap' ),
	category: 'edugap-category',
	supports: {
		align: true,
	},
	attributes: HeroBannerAttributes,
	edit: props => {
		const {
			attributes,
			setAttributes,
			className } = props;
		const {
			overlayColor,
			backgroundImage,
			backgroundVideo,
			fontColor,
			buttonColor,
			buttonLabel,
			buttonLabelColor,
			headingText } = attributes;
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
				style={{
					backgroundImage: `url( ${ backgroundImage } )`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}} >
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
								color: buttonLabelColor,
							}} />
					</div>
				</div>
				<div
					className="edugap-herobanner-overlay"
					style={{ backgroundColor: overlayColor }}></div>
				<div className="herobanner__bg-video-wrapper">
					<video autoplay loop src={backgroundVideo}>
					</video>
				</div>
			</div>,
		];
	},
	save: props => {
		const { attributes, className } = props;
		const { backgroundImage, backgroundVideo, headingText, fontColor, overlayColor, buttonLabel, buttonLink } = attributes;
		return (
			<div
				className={ className }
				style={ { backgroundImage: `url(${ backgroundImage })` } } >
				<div className="edugap-herobanner-content">
					<div className="edugap-herobanner__content-wrapper">
						<RichText.Content
							tagName="h1"
							className="hero-banner-heading-text"
							style={{ color: fontColor }} 
							value={headingText} />
						<a href={buttonLink} className="btn-primary"> {buttonLabel} </a>
					</div>
				</div>
				<div
					className="edugap-herobanner-overlay"
					style={ { backgroundColor: overlayColor } }></div>
				<div className="herobanner__bg-video-wrapper">
					<video autoplay loop src={backgroundVideo}>
					</video>
				</div>
			</div>
		);
	},
	depecrated: [
		{
			attributes: HeroBannerAttributes,
			save: props => {
				const { attributes, className } = props;
				const { backgroundImage, headingText, overlayColor, buttonLabel } = attributes;
				return (
					<div
						className={className}
						style={{ backgroundImage: `url(${ backgroundImage })` }} >
						<div className="edugap-herobanner-content">
							<div className="edugap-herobanner__content-wrapper">
								<RichText.Content
									tagName="h1"
									className="hero-banner-heading-text"
									value={headingText} />
								<a href="..." className="btn--primary"> {buttonLabel} </a>
							</div>
						</div>
						<div
							className="edugap-herobanner-overlay"
							style={{ backgroundColor: overlayColor }}></div>
					</div>
				);
			}
		}
	],
} );
