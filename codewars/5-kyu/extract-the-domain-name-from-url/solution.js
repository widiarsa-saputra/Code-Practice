function domainName(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    return url.match(regex)[1].split('.')[0];
}

console.log("🚀 ~ domainName ~ domainName:", domainName('http://google.com'));
console.log("🚀 ~ domainName ~ domainName:", domainName('http://google.co.jp'));
console.log("🚀 ~ domainName ~ domainName:", domainName('www.xakep.ru'));
console.log("🚀 ~ domainName ~ domainName:", domainName('https://youtube.com'));
