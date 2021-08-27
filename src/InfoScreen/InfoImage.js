import infoImageStyle from './style';
export default function InfoImage({ content }) {
	let style = infoImageStyle();
	return (
		<div className={style.infoImageClassesOuter(content.size)}>
			<image src={content.contents.url} className={style.infoImageClassesInner(content.size)} />
		</div>
	);
}
