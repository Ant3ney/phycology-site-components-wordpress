import infoData from './infoData';
import InfoScreenStyle from './style';
import InfoSection from './InfoSection';
import InfoImage from './InfoImage';
import GoogleMapsRow from './GoogleMapsRow';

export default function InfoScreen() {
	let style = InfoScreenStyle();
	return (
		<div className={style.outerClasses()}>
			<h1>{infoData.screenTitle}</h1>
			{infoData.contents.map((content, i) => {
				if (content.type === 'text') {
					return <InfoSection content={content} />;
				} else if (content.type === 'image') {
					return <InfoImage content={content} />;
				} else if (content.type === 'googleMap') {
					return <GoogleMapsRow content={content} />;
				} else {
					return <></>;
				}
			})}
		</div>
	);
}
