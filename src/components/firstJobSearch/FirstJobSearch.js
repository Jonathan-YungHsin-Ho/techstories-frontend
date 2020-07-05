import Page from '../Page';
import {
	FirstJobSearchCard,
	FirstJobSearchForm,
	initialFirstJobSearchInfo,
} from './';

export default function FirstJobSearch() {
	return Page(
		'firstJobSearch',
		FirstJobSearchForm,
		initialFirstJobSearchInfo,
		FirstJobSearchCard,
	);
}
