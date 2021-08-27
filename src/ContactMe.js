import contactMeStyle from './style';
import LabelInput from './LabelInput';

export default function ContactMe() {
	let style = contactMeStyle();

	return (
		<div className={style.outerClasses()}>
			<h1 className='mainTitle'>Contact Me</h1>
			<p>
				I look forward to assisting you as best I can. Please complete the form below and I'll get back to you
				as soon as possible.
			</p>
			<section>
				<LabelInput label='Name' dskSize={6} labelID='contact-name-input' makeTextArea={false} />
				<LabelInput label='Email' dskSize={6} labelID='contact-email-input' makeTextArea={false} />
				<LabelInput label='Number' dskSize={6} labelID='contact-number-input' makeTextArea={false} />
				<LabelInput label='How can I help?' dskSize={12} labelID='contact-message-input' makeTextArea={true} />
			</section>
			<button className='button' id='send-contact-email'>
				Send Email
			</button>
		</div>
	);
}
