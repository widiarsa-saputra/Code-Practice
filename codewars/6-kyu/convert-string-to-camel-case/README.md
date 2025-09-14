Complete the method/function so that it converts dash/underscore delimited words into [camel casing](https://en.wikipedia.org/wiki/Camel_case). The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

### Examples
=="the-stealth-warrior"== gets converted to =="theStealthWarrior"== <br>
=="The_Stealth_Warrior"== gets converted to =="The StealthWarrior"== <br>
=="The_Stealth-Warrior"== gets converted to =="TheStealthWarrior"== <br>


### Solution
- Title: 
Convert string to camel case
- Link : https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript
- Methods : For Loop & Splits 
- Complexity : 0(n)
- Notes : the .split function from javascript needs specific delimiters, unlike python that could use empty brackets