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

const { Path, SVG } = wp.components;

export function imagePlaceHolder() {
    return (
        <SVG viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></Path>
            <circle cx="409.1" cy="102.9" r="40.9"></circle>
            <Path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></Path>
        </SVG>
    );
}
