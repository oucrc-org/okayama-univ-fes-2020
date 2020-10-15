//参考文献：正規表現　https://qiita.com/nagimaruxxx/items/c2f186a2df5e32233122

export default function changeToUrl(value){
    value = value.replace(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g, '<a target="_blank" rel="noopener noreferrer" href="$&">$&</a>');
    //value = value.replace(/@[\w\W]+/g, '<a href="https://twitter.com/$&">$&</a>');
    //value=value.replace(/(?<=https:\/\/twitter.com\/)@+/g, '');
    return(
        <div dangerouslySetInnerHTML = {{__html : value}}/>
    )
}