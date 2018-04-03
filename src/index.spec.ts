import { describe, it } from 'mocha';
import { expect } from 'chai';

import leadingZeroes from './index';

describe('leadingZeroes', () => {

    it('should throw an error if the `size` argument is not a positive number (or zero)', () => {
        expect(
            () => leadingZeroes(5, -1)
        ).to.throw(
            RangeError
        );

        expect(
            () => leadingZeroes(5, Number.NEGATIVE_INFINITY)
        ).to.throw(
            RangeError
        );


        expect(
            () => leadingZeroes(5, Number.MIN_SAFE_INTEGER)
        ).to.throw(
            RangeError
        );
    });

    it('should not throw an error if the `size` argument is a positive number (or zero)', () => {
        expect(
            () => leadingZeroes(5, 0)
        ).not.to.throw(
            RangeError
        );

        expect(
            () => leadingZeroes(5, 100)
        ).not.to.throw(
            RangeError
        );
    });

    it('should return an empty string if `size` is zero', () => {
        expect(
            leadingZeroes(5, 0)
        ).to.equal(
            ''
        );
    });

    it('should return the input for `num` if `size` is smaller than the length of `num`', () => {
        expect(
            leadingZeroes(55, 1)
        ).to.equal(
            '55'
        );

        expect(
            leadingZeroes(12345, 1)
        ).to.equal(
            '12345'
        );

        expect(
            leadingZeroes(555, 2)
        ).to.equal(
            '555'
        );

        expect(
            leadingZeroes(192837465, 9)
        ).to.equal(
            '192837465'
        );
    });

    it('should add N number of zeroes to the left side of `num` if `size` is N larger than `num`\s length', () => {

        expect(
            leadingZeroes(1, 2)
        ).to.equal(
            '01'
        );

        expect(
            leadingZeroes(1, 3)
        ).to.equal(
            '001'
        );

        const noise = String(Math.random());
        const fillLength = Math.floor(Math.random() * 1000);

        expect(
            leadingZeroes(noise, noise.length + fillLength)
        ).to.equal(
            Array(fillLength).fill('0').join('') + noise
        );

    });

});