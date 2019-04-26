/* eslint-disable jsx-a11y/label-has-associated-control *//* eslint-disable jsx-a11y/label-has-for *//* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable space-in-parens */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
const {
    BaseControl,
    Button,
    ColorPalette,
    ColorIndicator,
    PanelBody,
    PanelRow,
    RangeControl } = wp.components;
const { __ } = wp.i18n;
const { MediaUpload, URLInput } = wp.editor;

import { ALLOWED_BACKGROUND_MEDIA_TYPES, DEFAULT_COLORS } from '../lib/index';
import { imagePlaceHolder } from '../lib/assets/svgs';

const HeroBannerOptions = ( { attributes, setAttributes } ) => {
    function setbackgroundMedia(obj) {
        const { type } = obj;

        if ( type === 'image' ) {
            setAttributes({ backgroundImage: obj.sizes.full.url });
            setAttributes({ backgroundMediaType: 'image' });
        } else if ( type === 'video' ) {
            setAttributes({ backgroundVideo: obj.url });
            setAttributes({ backgroundMediaType: 'video' });
        }
    }

    function onChangeOverlayColor(overlayColor) {
        setAttributes({ overlayColor });
    }

    function setFontColor(fontColor) {
        setAttributes({ fontColor });
    }

    function setButtonLink(buttonLink) {
        setAttributes({ buttonLink });
    }

    function setOverlayTransparency(overlayTransparency) {
        setAttributes({ overlayTransparency });
    }

    function resetImage() {
        setAttributes({ backgroundMedia: null });
        setAttributes({ backgroundMediaType: null });
    }

    function renderBackgroundPreview() {
        if ( attributes.backgroundMediaType === 'image' ) {
            return <img src={attributes.backgroundImage} alt="" />;
        }

        return <video autoPlay loop src={attributes.backgroundVideo}></video>;
    }

    return (<div>
        <PanelBody
            title="Background Settings"
            initialOpen={false}>
            <PanelRow>
                <BaseControl
                    label={__('Background Image or Video', 'edugap')}
                    help={__('Upload .mp4 format for video', 'edugap')}>
                    <MediaUpload
                        onSelect={ setbackgroundMedia }
                        type={ALLOWED_BACKGROUND_MEDIA_TYPES}
                        value={attributes.backgroundMedia}
                        render={({ open }) => {
                            if (attributes.backgroundMediaType === null) {
                                return (
                                    <div className="component-mediaupload__wrapper component-mediaupload__null">
                                        <Button onClick={open} className="component-btn-image-uploader">
                                            {imagePlaceHolder()}
                                        </Button>
                                    </div>
                                );
                            }

                            return (
                                <div className="component-mediaupload__wrapper">
                                    <Button onClick={open}>
                                        {renderBackgroundPreview()}
                                    </Button>
                                    <Button isDefault={true} onClick={resetImage}>Clear</Button>
                                </div>
                            );
                        }}
                    />
                </BaseControl>
            </PanelRow>
            <PanelRow>
                <BaseControl label="Background Overlay">
                    <ColorPalette
                        colors={DEFAULT_COLORS}
                        value={attributes.overlayColor}
                        onChange={onChangeOverlayColor}
                    />
                </BaseControl>
                <BaseControl>
                    <RangeControl
                        label="Background Overlay Opacity"
                        value={attributes.overlayTransparency}
                        onChange={setOverlayTransparency}
                        min={0}
                        max={10}
                    />
                </BaseControl>
            </PanelRow>
        </PanelBody>

        <PanelBody
            title="Typography"
            initialOpen={false}>
            <PanelRow>
                <label>Font Color<ColorIndicator colorValue={attributes.fontColor} /></label>
            <ColorPalette
                colors={DEFAULT_COLORS}
                value={attributes.fontColor}
                onChange={setFontColor}
            />
            </PanelRow>
        </PanelBody>

        <PanelBody
            title="Button Settings"
            initialOpen={false}>
            <PanelRow>
                <BaseControl label="Button Link">
                    <URLInput
                        value={attributes.buttonLink}
                        onChange={setButtonLink} />
                </BaseControl>
                <BaseControl label="Button Color">
                    <ColorPalette
                        colors={DEFAULT_COLORS}
                        value={attributes.buttonColor}
                        onChange={buttonColor => setAttributes({ buttonColor })}
                    />
                </BaseControl>
                <BaseControl label="Text Color">
                    <ColorPalette
                        colors={DEFAULT_COLORS}
                        value={attributes.buttonTextColor}
                        onChange={buttonTextColor => setAttributes({ buttonTextColor })}
                    />
                </BaseControl>
                <BaseControl>
                    <RangeControl
                        label="Border Radius"
                        value={attributes.buttonBorderRadius}
                        onChange={buttonBorderRadius => setAttributes({ buttonBorderRadius })}
                        min={0}
                        max={50}
                    />
                </BaseControl>
            </PanelRow>
            {console.log(attributes.buttonBorderRadius)}
        </PanelBody>
    </div>);
};
export default HeroBannerOptions;
