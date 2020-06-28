import Page from '../Page';
import {
	OnboardingCard,
	OnboardingFormContent,
	initialOnboardingInfo,
} from './';

export default function Onboarding() {
	return Page(
		'onboarding',
		OnboardingFormContent,
		initialOnboardingInfo,
		OnboardingCard,
	);
}
