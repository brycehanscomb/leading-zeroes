/**
 * Adds zeroes to the left of a number until its final length is `targetLength`.
 *
 * If `targetLength` is 0, returns an empty string. If `targetLength` is smaller
 * than `num`'s existing length, returns `num` unchanged.
 *
 * @param num The number to pad
 * @param targetLength The final desired number of digits
 */
const padWithLeadingZeroes = (num : number | string, targetLength : number) : string => {
    if (targetLength < 0) {
        throw new RangeError(`Error: cannot pad "${num}" with ${targetLength} zeroes. argument size must be non-negative.`);
    }

    if (targetLength === 0) {
        return '';
    }

    let s = String(num);

    if (s.length >= targetLength) {
        return s;
    }

    return padWithLeadingZeroes(`0${s}`, targetLength); // TCO-compatible
};

export default padWithLeadingZeroes;