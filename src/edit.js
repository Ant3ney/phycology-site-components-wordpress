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
import { TextControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

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
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<TextControl
					heading='Title'
					label='Give video bg section a title'
					help='Default is "Anthony Cavuoti"'
					value={props.attributes.title}
					onChange={new_val => {
						props.setAttributes({ title: new_val });
					}}
				/>
				<TextControl
					heading='Video Background'
					label='Give url of video background'
					help='Default is "Anthony Cavuoti"'
					value={props.attributes.videoBGURL}
					onChange={new_val => {
						props.setAttributes({ videoBGURL: new_val });
					}}
				/>
				<TextControl
					heading='Subtitle'
					label='Give video bg section a subtitle'
					help='Default is "Licenced Marriage and Family Therapist"'
					value={props.attributes.subtitle}
					onChange={new_val => {
						props.setAttributes({ subtitle: new_val });
					}}
				/>
				<TextControl
					heading='Button One Text'
					label='The text that apears inside the first button'
					help='Default is "310 - 214 - 0525"'
					value={props.attributes.buttonOneText}
					onChange={new_val => {
						props.setAttributes({ buttonOneText: new_val });
					}}
				/>
				<TextControl
					heading='Button One Href'
					label='The route to visit on click'
					help='Default is "tel:310-214-0525"'
					value={props.attributes.buttonOneHref}
					onChange={new_val => {
						props.setAttributes({ buttonOneHref: new_val });
					}}
				/>
				<TextControl
					heading='Button Two Text'
					label='The text that apears inside the Seceond button'
					help='Default is "Contact Me"'
					value={props.attributes.buttonTwoText}
					onChange={new_val => {
						props.setAttributes({ buttonTwoText: new_val });
					}}
				/>
				<TextControl
					heading='Button Two Href'
					label='The route to visit on click'
					help='Default is "/contactme"'
					value={props.attributes.buttonTwoHref}
					onChange={new_val => {
						props.setAttributes({ buttonTwoHref: new_val });
					}}
				/>
				<TextControl
					heading='Lower Text'
					label='The text that apears under the call to action buttons'
					help='Default is "I provide free initial consultations"'
					value={props.attributes.lowerText}
					onChange={new_val => {
						props.setAttributes({ lowerText: new_val });
					}}
				/>
			</InspectorControls>
			<p>{__('Creats a video background with paralax effect', 'nice-background')}</p>
		</div>
	);
}
