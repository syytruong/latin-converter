const normalizedCode = {
    vi: 'NFD',
    fi: 'NFD',
};

const latinizedPattern = {
    vi: /[\u0300-\u036f]/g,
    fi: /[^\u0000-\u007F]+/g
}

export default function toLatin(language, text) {
    const normalized = text.normalized(normalizedCode[language]);
    const latinized = normalized.replace(latinizedPattern[language], '');
    return latinized;
}