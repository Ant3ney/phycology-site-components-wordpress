/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/nice-background', {
	attributes: {
		videoBGURL: {
			type: 'string',
			default: 'https://lmftanthony.com/wp-content/uploads/2021/08/Waves02.mp4',
		},
		title: {
			type: 'string',
			default: 'Anthony Cavuoti',
		},
		subtitle: {
			type: 'string',
			default: 'Licenced Marriage and Family Therapist',
		},
		lowerText: {
			type: 'string',
			default: 'I provide free initial consultations',
		},
		buttonOneText: {
			type: 'string',
			default: '310 - 214 - 0525',
		},
		buttonOneHref: {
			type: 'string',
			default: 'tel:310-214-0525',
		},
		buttonTwoText: {
			type: 'string',
			default: 'Contact Me',
		},
		buttonTwoHref: {
			type: 'string',
			default: '/contactme',
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
