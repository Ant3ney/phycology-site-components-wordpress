import googleMapsRowStyle from './style';
export default function GoogleMapsRow({ content }) {
	let style = googleMapsRowStyle();
	return (
		<div className={style.googleMapsClassesOuter(content.size)}>
			<div className={style.googleMapsClassesInner()} id='google-map'>
				<p>This is the google maps row</p>
			</div>
		</div>
	);
}
