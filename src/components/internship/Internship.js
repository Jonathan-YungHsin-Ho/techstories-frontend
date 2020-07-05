import Page from '../Page';
import { InternshipCard, InternshipForm, initialInternshipInfo } from './';

export default function Internship() {
	return Page(
		'internship',
		InternshipForm,
		initialInternshipInfo,
		InternshipCard,
	);
}
