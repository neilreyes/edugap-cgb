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

const FeatureGridAttributes = {
    id: {
        source: 'attribute',
        selector: '.feature-box',
        attribute: 'id',
    },
    featureEntries: {
        source: 'query',
        default: [],
        selector: '.feature-box-entry',
        query: {
            index: {
                type: 'number',
                source: 'attribute',
                attribute: 'data-index',
            },
            image: {
                source: 'attribute',
                selector: 'img',
                attribute: 'src',
                default: '...',
            },
            title: {
                source: 'text',
                selector: '.feature-entry-title',
                default: 'Title',
            },
            excerpt: {
                source: 'text',
                selector: '.feature-entry-excerpt',
                default: 'Excerpt',
            }
        }
    }
};

export default FeatureGridAttributes;