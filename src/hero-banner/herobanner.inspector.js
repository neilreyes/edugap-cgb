/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
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
const { Button, ColorPalette, ColorIndicator, PanelBody, PanelRow, TextControl, Path, SVG } = wp.components;
const { MediaUpload } = wp.editor;
import defaultColors from '../lib/colors';

const ImagePlaceHolder = () => (
    <SVG viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></Path>
        <circle cx="409.1" cy="102.9" r="40.9"></circle>
        <Path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></Path>
    </SVG>
);

const HeroBannerOptions = ( { attributes, setAttributes } ) => {
    function setBackgroundImage(imageObject) {
        setAttributes({ backgroundImage: imageObject.sizes.full.url });
    }

    function setBackgroundVideo(videoObject) {
        setAttributes({ backgroundVideo: videoObject.url });
    }

    function onChangeOverlayColor(color) {
        setAttributes({ overlayColor: color });
    }

    function setFontColor(color) {
        setAttributes({ fontColor: color });
    }

    function setButtonLink(link) {
        setAttributes({ buttonLink: link });
    }

    function resetImage() {
        setAttributes({ backgroundImage: null });
    }

    function resetVideo() {
        setAttributes({ backgroundVideo: null });
    }

    return (<div>
        <PanelBody
            title="Background Settings"
            initialOpen={false}>
            <PanelRow>
                <label>Background Image</label>
                <MediaUpload
                    onSelect={ setBackgroundImage }
                    type="image"
                    value={attributes.backgroundImage}
                    render={({ open }) => {
                        if (attributes.backgroundImage === null) {
                            return (
                                <div className="component-mediaupload__wrapper component-mediaupload__null">
                                    <Button onClick={open} className="component-btn-image-uploader">
                                        <SVG viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></Path>
                                            <circle cx="409.1" cy="102.9" r="40.9"></circle>
                                            <Path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></Path>
                                        </SVG>
                                    </Button>
                                </div>
                            );
                        }

                        return (
                            <div className="component-mediaupload__wrapper">
                                <Button onClick={open}><img src={attributes.backgroundImage} alt="" /></Button>
                                <Button isDefault={true} onClick={resetImage}>Clear</Button>
                            </div>
                        );
                    }}
                />
            </PanelRow>

            <PanelRow>
                <label>Background Video</label>
                <MediaUpload
                    onSelect={ setBackgroundVideo }
                    type="video"
                    value={attributes.backgroundVideo}
                    render={({ open }) => {
                        if (attributes.backgroundVideo === null) {
                            return (
                                <div className="component-mediaupload__wrapper component-mediaupload__null">
                                    <Button onClick={open} className="component-btn-image-uploader">
                                        <SVG viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></Path>
                                            <circle cx="409.1" cy="102.9" r="40.9"></circle>
                                            <Path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></Path>
                                        </SVG>
                                    </Button>
                                </div>
                            );
                        }

                        return (
                            <div className="component-mediaupload__wrapper">
                                <Button onClick={open}><video src={attributes.backgroundVideo} autoplay loop /></Button>
                                <Button isDefault={true} onClick={resetVideo}>Clear</Button>
                            </div>
                        );
                    }}
                />
            </PanelRow>


            <PanelRow>
                <label>Background Overlay<ColorIndicator colorValue={attributes.overlayColor} /></label>
                <ColorPalette
                    colors={defaultColors}
                    value={attributes.overlayColor}
                    onChange={onChangeOverlayColor}
                />
            </PanelRow>
        </PanelBody>

        <PanelBody
            title="Typography"
            initialOpen={false}>
            <PanelRow>
                <label>Font Color<ColorIndicator colorValue={attributes.fontColor} /></label>
            <ColorPalette
                colors={defaultColors}
                value={attributes.fontColor}
                onChange={setFontColor}
            />
            </PanelRow>
        </PanelBody>

        <PanelBody
            title="Button Settings"
            initialOpen={false}>
            <PanelRow>
                <strong>Button Link</strong>
                <TextControl
                    type="url"
                    label="Button Link"
                    value={attributes.buttonLink}
                    onChange={setButtonLink} />
            </PanelRow>
        </PanelBody>
    </div>);
};
export default HeroBannerOptions;
