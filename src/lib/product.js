export const truncate = (text, length = 30) =>
    text.length > length ? text.substring(0, length) + "..." : text;

export const stars = Array.from({ length: 5 }, (_, i) => i + 1);