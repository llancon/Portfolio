
var str = "<h1>Luis Lancon</h1><h2>Web Developer</h2>",
    i = 0,
    isTag,
    text;

 (function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 150);
}());
