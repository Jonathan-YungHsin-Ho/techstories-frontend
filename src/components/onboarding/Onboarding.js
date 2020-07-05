import Page from '../Page';
import { OnboardingCard, OnboardingForm, initialOnboardingInfo } from './';

export default function Onboarding() {
	return Page(
		'onboarding',
		OnboardingForm,
		initialOnboardingInfo,
		OnboardingCard,
	);
}
