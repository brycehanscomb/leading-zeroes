# Leading Zeroes

Pad a number with leading zeroes (to the left)

```typescript
padWithLeadingZeroes(num, targetLength);
```

## Example

```js
padWithLeadingZeroes(555,8); 
// => "00000555"

padWithLeadingZeroes('7 is James Bond', 15);
// => "007 is James Bond
```

## Parameters

### `num`

|----------------------|----------|
| Type                 | Required |
|----------------------|----------|
| `number` or `string` | Yes      |
|----------------------|----------|

The input to which leading zeroes should be added.


### `targetLength`

|----------|----------|
| Type     | Required |
|----------|----------|
| `number` | Yes      |
|----------|----------|

The length of the resulting string once the current string has been padded. If 
the value is lower than the current string's length, the current string will be 
returned as is.

## Installation

In your project's root folder, run:

```bash
yarn add leading-zeroes
```

Then in your JS code, add:

```typescript
import leadingZeroes from 'leading-zeroes';
```

## Running Tests

Clone this project into your local computer and run the following in its root
directory (where the `package.json` is):

```bash
yarn install
yarn test
```

## License

Released under the MIT license.