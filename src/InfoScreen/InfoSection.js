import infoSectionStyle from './style';
import TitleRow from './TitleRow';
import KeyValueRow from './KeyValueRow';
import ListTextRow from './ListTextRow';
export default function InfoSection({ content }) {
	let style = infoSectionStyle();
	return (
		<div className={style.infoSectionOuterClasses(content.size)}>
			<div className={style.infoSectionInnerClasses(content.size)} style={style.infoSectionStyle()}>
				{content.contents.map((content, i) => {
					if (content.type === 'title') {
						return <TitleRow content={content} />;
					} else if (content.type === 'keyValue') {
						return <KeyValueRow content={content} />;
					} else if (content.type === 'textlist') {
						return <ListTextRow content={content} />;
					} else {
						return <></>;
					}
				})}
			</div>
		</div>
	);
}
