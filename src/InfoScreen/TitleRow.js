import titleRowStyle from './style';
export default function TitleRow({ content }) {
	return (
		<div className='section-title-container'>
			<p className='title'>{content.title}</p>
			{content.subtitle ? <p>{content.subtitle}</p> : <></>}
		</div>
	);
}
