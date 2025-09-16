# Narcissistic Function
positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base

```js
function narcissistic(value, base = 10) {
    const len = Math.floor(Math.log(value) / Math.log(base)) + 1;    
    const strSplit = value.toString().split('');
    
    const sum = strSplit.reduce((acc, val) => acc + Math.pow(Number(val), len), 0);
    return sum === value; //true or false
}
```

# Domain name function
This function take full string URL and return the domain of the string

```js
function domainName(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    return url.match(regex)[1].split('.')[0];
}
```

# Count string function
```js
function count(string) {
    return string.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}
```