// npm i --save-dev axios
// npm i --save-dev fs

var axios = require('axios');
const fs = require('fs')

const https = ['regex', 'git', 'html-css', 'javascript', 'linux', 'mysql', 'notebook', 'php', 'projects', 'vue']
const files = {
    'regex': {},
    'git': {},
    'html-css': {},
    'javascript': {},
    'linux': {},
    'mysql': {},
    'notebook': {},
    'php': {},
    'projects': {},
    'vue': {}
}

// 遍历10次
for (let i = 0; i < https.length; i++) {
    let heading = 'Initial'
    files[https[i]][heading] = []

    let config = {
        method: 'get',
        url: 'https://wuchi.gitbook.io/' + https[i] + '/',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            //console.log(JSON.stringify(response.data));
            // 提取数据
            const regex = /href="([^\"]*)"><span\s*class="text-4505230f--UIH300-2063425d--textContentFamily-49a318e1--navButtonLabel-14a4968f">([^<]*)<\/span>|<span class="text-4505230f--InfoH200-3a8a7a86--textContentFamily-49a318e1">([^<]*)<\/span>/gm;
            let m;
            while ((m = regex.exec(response.data)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                if (m[1] === undefined) {
                    heading = m[3]
                    files[https[i]][heading] = []
                } else {
                    files[https[i]][heading].push({"title": m[2], "url": m[1]})
                }
            }
            // 写入文件
            fs.writeFile('./src/assets/gitbook.json', JSON.stringify(files), err => {
                if (err) {
                    console.error(err)
                    return
                }
                //文件写入成功。
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}