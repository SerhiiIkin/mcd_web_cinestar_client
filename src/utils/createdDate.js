export const createdDate = (str) => {
    return new Date(str)
        .toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
        .split(' ')
        .map((str, i) => {
            if (i == 1) return `${str}, `;
            if (i == 2) return str;
            return `${str} `;
        })
        .join('');
};
