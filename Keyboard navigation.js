var keys = {
    '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l', length:9},
    '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
'length':3
}
var hash= {
    'q':'qq.com',
    'w':'weibo.com',
    'e':'ele.me',
    'r':'renren.com',
    't':'tianya.com',
    'y':'yy.com',
    'u':'uc.com',
    'i':'iqiyi.com',
    'z':'zhihu.com'
}
//取出localstorage中的zzz对应的hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz')||'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

index = 0
while(index < keys['length']){
    divXXXXX = document.createElement('div')
    maninxxxx.appendChild(divXXXXX)
    row = keys[index]
    console.log(row)
    index2 = 0
    while(index2 < row['length']) {
        kbdxxxxx = document.createElement('kbd')
        kbdxxxxx.textContent = row[index2]
        buttonx = document.createElement('button')
        buttonx.textContent = 'q'
        buttonx.id = row[index2]
        buttonx.onclick = function(e){
            key = (e['target']['id'])
            t = prompt('给我一个网址')
            hash[key] = t
            localStorage.setItem('zzz', JSON.stringify(hash))
            console.log(hash)

        }
        kbdxxxxx.appendChild(buttonx)
        divXXXXX.appendChild(kbdxxxxx)
        index2=index2+1
    }

    index = index + 1
}

document.onkeypress = function (e) {
    console.log('我发现你输入了一个键')
    console.log('你按键信息是')
    console.log(e['key'])
    key = e['key']
    website=hash[key]
    console.log(website)
    window.open('http://'+website, '_blank')
    // location.href = 'http://'+website
}