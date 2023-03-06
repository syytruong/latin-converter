import { NORMALIZED_CODE, LATINIZED_PATTERN} from './utils/constants'

export default function toLatin(language, text) {
    const normalized = text.normalized(NORMALIZED_CODE[language]);
    const latinized = normalized.replace(LATINIZED_PATTERN[language], '');
    return latinized;
}