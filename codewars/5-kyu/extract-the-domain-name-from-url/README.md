Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

### Example

```
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
```

### Solution

Title : Extract the domain name from URL
Link : https://www.codewars.com/kata/514a024011ea4fb54200004b
Methods : regex
Complexity : 0(n)
Addition :
- ^ -> string matching will be done at the beginning of the string only
- (?:https?:\/\/)? -> group 1: capture the `https://` or `http://` or nothing, this group wouldn't be saved on result
- (?:www\.)? -> group 2: capture the `www.` or nothing, this group wouldn't be saved on result
- ([^\/]+) -> group 3: capture all the character until meet the `/`
- i -> Flag case-insensitive