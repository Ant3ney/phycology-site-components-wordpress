import fancyTextStyle from './style';
import domReady from '@wordpress/dom-ready';

export default function (props) {
	domReady(function () {
		console.log('here');
		document.body.classList.add('d-none');
	});
	let style = fancyTextStyle();
	let { imgUrl, imgFirst, titleText, descriptionText, contactMeUrl } = props.attributes;

	function MainContent() {
		let ImageEle = () => <img className='o-0' src={imgUrl} alt='Portraite of Anthony Cavuoti' />;
		let SectionEle = () => (
			<section className={`${imgFirst ? '' : 'isFirst'}`}>
				<p>{descriptionText}</p>
				{contactMeUrl ? (
					<a className='button mt-3' href={contactMeUrl}>
						<p className='text-center'>Contact me</p>
					</a>
				) : (
					<></>
				)}
			</section>
		);

		/* Do not apply props here */
		if (imgFirst) {
			return (
				<>
					<ImageEle />
					<SectionEle />
				</>
			);
		} else {
			return (
				<>
					<SectionEle />
					<ImageEle />
				</>
			);
		}
	}

	return (
		<div className={style.outerClasses({ imgFirst: imgFirst })}>
			{titleText ? (
				<div className='fancy-text-title-container'>
					<h3 className='text-center mx-auto'>{titleText}</h3>
				</div>
			) : (
				<></>
			)}
			<div className='content-seperator'>
				<MainContent />
			</div>
		</div>
	);
}
