(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{184:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node-js-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-安装"}},[s._v("#")]),s._v(" node.js 安装")]),s._v(" "),a("p",[s._v("node.js官网下载地址 ：https://nodejs.org/en/download/current/\n安装包带有 npm ，自动添加了系统环境变量\n"),a("img",{attrs:{src:"https://wildye.cn/static/images/blog/50721b11/01.png",alt:"这里写图片描述"}})]),s._v(" "),a("ul",[a("li",[s._v("Linux（Ubuntn 16.4）")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 github 上获取源码")]),s._v("\n$ sudo git clone https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nodejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git \nCloning into "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改目录权限")]),s._v("\n$ sudo chmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" node\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 ./configure 创建编译文件")]),s._v("\n$ cd node\n$ sudo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configure\n$ sudo make\n$ sudo make install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看 node 版本")]),s._v("\n$ node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Ubuntu apt-get命令安装")]),s._v("\nsudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install nodejs\nsudo apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install npm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"nvm-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm-安装"}},[s._v("#")]),s._v(" NVM 安装")]),s._v(" "),a("ol",[a("li",[s._v("下载 nvm-noinstall.zip，"),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("github项目地址"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("解压到想安装的路径（比如："),a("code",[s._v("D\\dev\\nvm")]),s._v("）")]),s._v(" "),a("li",[s._v("安装配置settings.txt（若无，则在 "),a("code",[s._v("D\\dev\\nvm")]),s._v(" 下新建一个）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root: D:\\dev\\nvm      // 配置`nvm.exe` 所在目录\npath: D:\\dev\\nodejs   // 配置 node快捷方式路径\narch: 64              // 配置32/64\nproxy:                // 表示代理，一般不用配置\n// node 下载镜像源指向淘宝，避免卡顿\nnode_mirror: https://npm.taobao.org/mirrors/node/\n// npm 下载镜像源指向淘宝\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("进入环境变量面板 Win + R  => sysdm.cpl")]),s._v(" "),a("li",[s._v("新建 "),a("code",[s._v("NVM_HOME")]),s._v(" 、 "),a("code",[s._v("NVM_SYMLINK")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://wildye.cn/static/images/blog/50721b11/02.png",alt:"这里写图片描述"}})]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("将 "),a("code",[s._v("NVM_HOME")]),s._v(" 、 "),a("code",[s._v("NVM_SYMLINK")]),s._v(" 加入 "),a("code",[s._v("Path")]),s._v(" 变量中")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://wildye.cn/static/images/blog/50721b11/03.png",alt:"这里写图片描述"}})]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[s._v("验证环境变量\ncmd窗口输入 set [变量名] 查看上面配置的变量，安装完成！")])]),s._v(" "),a("h2",{attrs:{id:"npm-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装"}},[s._v("#")]),s._v(" NPM 安装")]),s._v(" "),a("p",[s._v("已集成至 nodejs")]),s._v(" "),a("h2",{attrs:{id:"nrm-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm-安装"}},[s._v("#")]),s._v(" NRM 安装")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("npm install -g nrm\n\n// 安装淘宝镜像\nnpm install -g cnpm --registry=http://registry.npm.taobao.org\n\ncnpm install -g less\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"nvm-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm-指令"}},[s._v("#")]),s._v(" NVM - 指令")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装最新版本")]),s._v("\nnvm install lastest\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装指定版本，可模糊安装")]),s._v("\nnvm install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodejs版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除已安装的指定版本，语法与install类似")]),s._v("\nnvm uninstall "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 切换使用指定的nodejs版本")]),s._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列出所有安装的版本")]),s._v("\nnvm ls \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列出所以远程服务器的版本（官方node version list）")]),s._v("\nnvm ls"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("remote \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示当前的版本")]),s._v("\nnvm current \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给不同的版本号添加别名")]),s._v("\nnvm alias \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除已定义的别名")]),s._v("\nnvm unalias \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在当前版本node环境下，重新全局安装指定版本号的npm包")]),s._v("\nnvm reinstall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("packages \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"npm-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-指令"}},[s._v("#")]),s._v(" NPM - 指令")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在当前目录生成 package.json 文件,添加 -y 或 --yes 则为默认配置")]),s._v("\nnpm init "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认在当前下生成目录(node_modules)安装， -g 全局下安装(nodejs所在目录下)")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据当前目录下 package.json 配置，进行依赖安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若不想保存在package.json中，改为 --no-save")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行依赖（发布）")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("S")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发依赖（辅助）")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 卸载模块")]),s._v("\nnpm uninstall "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看当前目录或全局的模块，可指定层级为0")]),s._v("\nnpm ls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看当前过期模块 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// current：显示当前安装版本、")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// latest：显示模块最新版本、")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// wanted：显示不破坏当前代码的可升级版本")]),s._v("\nnpm outdated\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看全局安装地址")]),s._v("\nnpm root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 升级模块版本")]),s._v("\nnpm update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看模块信息")]),s._v("\nnpm ll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("la"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看模块的当前版本")]),s._v("\nnpm list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查找包含该字符串的模块")]),s._v("\nnpm search "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列出模块信息，包括历史版本，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// field 查看某个具体信息，比如（versions) ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --json 输出全部结果")]),s._v("\nnpm view "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在浏览器端查看项目（项目主页）")]),s._v("\nnpm home "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 浏览器端打开项目地址（github）")]),s._v("\nnpm repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看项目文档")]),s._v("\nnpm docs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看项目bug")]),s._v("\nnpm bugs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 移除当前不在 package.json 中但是存在node_modules中的模块")]),s._v("\nnpm prune\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不使用npm install 而连接某个模块，通常用作开发本地模块")]),s._v("\nnpm link\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h2",{attrs:{id:"nrm-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm-指令"}},[s._v("#")]),s._v(" NRM - 指令")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局安装")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g nrm\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 切换镜像源")]),s._v("\nnrm use cnpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列出可用源")]),s._v("\nnrm ls\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wildye.cn/static/images/blog/50721b11/04.png",alt:"这里写图片描述"}})]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 测试所有源的响应时间")]),s._v("\nnrm test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wildye.cn/static/images/blog/50721b11/05.png",alt:"这里写图片描述"}})]),s._v(" "),a("blockquote",[a("p",[s._v("参考引用："),a("br"),s._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/u014291497/article/details/75194456",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm link的基本用法及实例"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/npm.html#toc18",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm 模块管理器"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);