const NORMALIZED_CODE = {
    vi: 'NFD',
    fi: 'NFD',
};

const LATINIZED_PATTERN = {
    vi: /[\u0300-\u036f]/g,
    fi: /[^\u0000-\u007F]+/g
}

export {
    NORMALIZED_CODE,
    LATINIZED_PATTERN,
}