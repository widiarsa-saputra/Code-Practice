### Description
Write a function named `first_non_repeating_letter†` that takes a string input, and returns the first character that is not repeated anywhere in the string. <br>

For example, if given the input `'stress'`, the function should return `'t'`, since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the **same** character, but the function should return the correct case for the initial letter. For example, the input `'sTreSS'` should return `'T'`.

If a string contains *all repeating* characters, it should return an empty string `("")`;

† Note: the function is called `firstNonRepeatingLetter` for historical reasons, but your function should handle any Unicode character.

<hr>

### Solution
- Title : First non-repeating character
- Link :
- Methods : Nested Loop & Array Includes
- Complexity : 0(mn)
- Addition : There's simplification using .indexOf and .lastIndexOf from array function. The complexity would be 0(n)