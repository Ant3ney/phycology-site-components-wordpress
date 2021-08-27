import FancyText from './FancyText';
/* import { InspectorControls, ColorPalette, TextareaControl } from '@wordpress/block-editor'; */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextareaControl, CheckboxControl, TextControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	let { imgUrl } = props.attributes;
	return [
		<InspectorControls>
			<TextareaControl
				label='Display image url'
				help='Enter the url of the image here'
				value={imgUrl}
				onChange={new_val => {
					props.setAttributes({ imgUrl: new_val });
				}}
			/>
			<CheckboxControl
				label='Make image come first?'
				help='Checking this will the image display befor the text'
				checked={props.attributes.imgFirst}
				onChange={new_val => {
					props.setAttributes({ imgFirst: new_val });
				}}
			/>
			<TextControl
				heading='Title'
				label='Give display a title'
				help='Leave empty to have no title'
				value={props.attributes.titleText}
				onChange={new_val => {
					props.setAttributes({ titleText: new_val });
				}}
			/>
			<TextareaControl
				label='Display text'
				help='This here is the meat potatos'
				value={props.attributes.descriptionText}
				onChange={new_val => {
					props.setAttributes({ descriptionText: new_val });
				}}
			/>
			<TextControl
				heading='Contact me url'
				label='On click go to this url'
				help='Leave empty to have no contact me url'
				value={props.attributes.contactMeUrl}
				onChange={new_val => {
					props.setAttributes({ contactMeUrl: new_val });
				}}
			/>
		</InspectorControls>,
		<div {...useBlockProps.save()}>
			<FancyText {...props} />
		</div>,
	];
}
