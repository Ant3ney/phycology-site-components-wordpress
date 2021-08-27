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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	let {
		videoBGURL,
		title,
		subtitle,
		lowerText,
		buttonOneText,
		buttonOneHref,
		buttonTwoText,
		buttonTwoHref,
	} = props.attributes;
	return (
		<div {...useBlockProps.save()}>
			<div id='nice-background'>
				<div className='header'>
					<div className='center-content'>
						<h1>{title}</h1>
						<p className='mt-5'>{subtitle}</p>
						<section>
							<a className='button mx-auto mx-sm-0 me-sm-auto' href={buttonOneHref}>
								{buttonOneText}
							</a>
							<a className='button mx-auto mx-sm-0  ms-sm-auto mt-3 mt-sm-0' href={buttonTwoHref}>
								{buttonTwoText}
							</a>
						</section>
						<p className='text-start'>{lowerText}</p>
					</div>
				</div>
				<video autoplay muted loop playsinline>
					<source src={videoBGURL} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'></source>
				</video>
			</div>
		</div>
	);
}
