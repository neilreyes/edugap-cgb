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

import FeatureGridAttributes from './featuregrid.attributes.js';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, InnerBlocks } = wp.editor;

console.log(FeatureGridAttributes);

registerBlockType( 'edugap/featuregrid', {
    title: __('Feature Grid', 'edugap'),
    description: __('Edugap', 'edugap'),
    category: 'edugap-category',
    attributes: FeatureGridAttributes,
    icon: 'format-image',
    edit: props => {
        const { className, attributes } = props;
        const { featureEntries } = attributes;
        const featureEntryList = featureEntries
            .sort((a, b) => a.index - b.index)
            .map(entry=>{
                return (
                    <div key="feature-entry">
                        <img src="..." alt="Icon" />
                        <RichText
                            tagName="h3"
                            className="feature-entry-title"
                            placeholder="Title goes here..."
                            value={entry.title}
                        />
                        <p className="feature-entry-excerpt">Excerpt {entry.excerpt}</p>
                    </div>
                );
            });

        return [
            <InspectorControls key="inspector">

            </InspectorControls>,
            <div
                key="editable-content"
                className={ className }>
                {console.log('featureEntryList', featureEntryList)}
                {featureEntryList}
                {console.log(props)}
                {__('Add Blocks that you can hide or show based on criteria')}
                <InnerBlocks allowedBlocks={[ 'core/image', 'core/paragraph' ]} />
            </div>
        ];
    },
    save: props => {
        const featureEntryList = props.attributes.featureEntries;
        return (
            <div key="feature-entry" className={props.className}>
                {featureEntryList}
            </div>
        );
    }
});