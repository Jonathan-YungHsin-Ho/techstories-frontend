import Page from '../Page';
import {
	InternshipCard,
	InternshipFormContent,
	initialInternshipInfo,
} from './';

export default function Internship() {
	return Page(
		'internship',
		InternshipFormContent,
		initialInternshipInfo,
		InternshipCard,
	);
}
