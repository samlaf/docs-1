"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6032],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,o=e.lazy,c=e.block,m=e.defaultValue,g=e.values,h=e.groupId,k=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,x=(0,l.useState)(y),I=x[0],O=x[1],Z=[],$=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=N[h];null!=M&&M!==I&&v.some((function(e){return e.value===M}))&&O(M)}var A=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=v[a].value;n!==I&&($(t),O(n),null!=h&&T(h,String(n)))},H=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=Z.indexOf(e.currentTarget)+1;a=null!=(n=Z[l])?n:Z[0];break;case"ArrowLeft":var r,o=Z.indexOf(e.currentTarget)-1;a=null!=(r=Z[o])?r:Z[Z.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},k)},v.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:H,onFocus:A,onClick:A},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},6452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=a(5488),i=a(5162),s=["components"],u={sidebar_label:"Light Node"},p="Setting up a Celestia Light Node",d={unversionedId:"nodes/light-node",id:"nodes/light-node",title:"Setting up a Celestia Light Node",description:"This tutorial will guide you through setting up a Celestia light node, which",source:"@site/docs/nodes/light-node.mdx",sourceDirName:"nodes",slug:"/nodes/light-node",permalink:"/pr-preview/pr-271/fr/nodes/light-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/light-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Light Node"},sidebar:"nodes",previous:{title:"Full Storage Node",permalink:"/pr-preview/pr-271/fr/nodes/full-storage-node"},next:{title:"Participate in the Celestia Testnets",permalink:"/pr-preview/pr-271/fr/nodes/participate"}},c={},m=[{value:"Overview of light nodes",id:"overview-of-light-nodes",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your light node",id:"setting-up-your-light-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3},{value:"Install Celestia node",id:"install-celestia-node",level:3},{value:"Initialize the light node",id:"initialize-the-light-node",level:2},{value:"Start the light node",id:"start-the-light-node",level:3},{value:"Keys and wallets",id:"keys-and-wallets",level:3},{value:"Optional: run the light node with a custom key",id:"optional-run-the-light-node-with-a-custom-key",level:3},{value:"Optional: start light node with SystemD",id:"optional-start-light-node-with-systemd",level:3},{value:"Data availability sampling (DAS)",id:"data-availability-sampling-das",level:2}],g={toc:m};function h(e){var t=e.components,u=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-light-node"},"Setting up a Celestia Light Node"),(0,r.kt)("p",null,"This tutorial will guide you through setting up a Celestia light node, which\nwill allow you to perform data availability sampling on the data\navailability (DA) network."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To view a video tutorial for setting up a Celestia light node, click ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-271/fr/developers/light-node-video"},"here"))),(0,r.kt)("h2",{id:"overview-of-light-nodes"},"Overview of light nodes"),(0,r.kt)("p",null,"Light nodes ensure data availability. This is the most common\nway to interact with the Celestia network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"light-node",src:a(8236).Z,width:"1058",height:"245"})),(0,r.kt)("p",null,"Light nodes have the following behavior:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"They listen for ExtendedHeaders, i.e. wrapped \u201craw\u201d headers, that notify\nCelestia nodes of new block headers and relevant DA metadata."),(0,r.kt)("li",{parentName:"ol"},"They perform data availability sampling (DAS) on the received headers")),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following minimum hardware requirements are recommended for running\na light node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 2 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Single Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 5 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 56 Kbps for Download/56 Kbps for Upload")),(0,r.kt)("h2",{id:"setting-up-your-light-node"},"Setting up your light node"),(0,r.kt)("p",null,"This tutorial was performed on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,r.kt)(i.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,r.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,r.kt)(i.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,r.kt)(i.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,r.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,r.kt)("p",null,"Using Homebrew, in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," is an internet file retriever and\n",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,r.kt)(i.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,r.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,r.kt)("p",null,"Using Homebrew, in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," is an internet file retriever and\n",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,r.kt)("h3",{id:"install-golang"},"Install Golang"),(0,r.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang"),"\nso we must install Golang to build and run them."),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n'))),(0,r.kt)(i.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"\nrm "go$ver.linux-arm64.tar.gz"\n'))),(0,r.kt)(i.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"\nrm "go$ver.darwin-arm64.tar.gz"\n'))),(0,r.kt)(i.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"\nrm "go$ver.darwin-amd64.tar.gz"\n')))),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,r.kt)(i.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/amd64\n"))),(0,r.kt)(i.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/arm64\n"))),(0,r.kt)(i.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 darwin/arm64\n"))),(0,r.kt)(i.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 darwin/amd64\n"))))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n'))),(0,r.kt)(i.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"\nrm "go$ver.linux-arm64.tar.gz"\n'))),(0,r.kt)(i.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"\nrm "go$ver.darwin-arm64.tar.gz"\n'))),(0,r.kt)(i.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"\nrm "go$ver.darwin-amd64.tar.gz"\n')))),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,r.kt)(i.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n"))),(0,r.kt)(i.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/arm64\n"))),(0,r.kt)(i.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 darwin/arm64\n"))),(0,r.kt)(i.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 darwin/amd64\n")))))),(0,r.kt)("h3",{id:"install-celestia-node"},"Install Celestia node"),(0,r.kt)("p",null,"One thing to note here is deciding which version of\ncelestia-node you wish to compile. Mamaki Testnet requires\nv0.3.0-rc2 and Arabica Devnet requires v0.4.0."),(0,r.kt)("p",null,"The following section highlights how to install it for the\ntwo networks."),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.1\nmake install\nmake cel-key\n")),(0,r.kt)("p",null,"Verify that the binary is working and check the version with the\ncelestia version command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia version\nSemantic version: v0.4.1\nCommit: dbaf227c8b35da13ee92b34e364cbf8deb461ff1\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: arm64/darwin\nGolang version: go1.19.1\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\nmake cel-key\n")),(0,r.kt)("p",null,"Verify that the binary is working and check the version with the\ncelestia version command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")))),(0,r.kt)("h2",{id:"initialize-the-light-node"},"Initialize the light node"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\n")),(0,r.kt)("p",null,"You should see output like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},'$ celestia light init\n2022-07-18T02:22:09.449Z INFO node node/init.go:26 Initializing Light Node Store over \'/home/ec2-user/.celestia-light\'\n2022-07-18T02:22:09.449Z INFO node node/init.go:62 Saving config {"path": "/home/ec2-user/.celestia-light/config.toml"}\n2022-07-18T02:22:09.449Z INFO node node/init.go:67 Node Store initialized\n')),(0,r.kt)("h3",{id:"start-the-light-node"},"Start the light node"),(0,r.kt)("p",null,"Start the light node with a connection to a validator node's gRPC endpoint (which\nis usually exposed on port 9090):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: In order for access to the ability to get/submit state-related information,\nsuch as the ability to submit PayForData transactions, or query for the node's\naccount balance, a gRPC endpoint of a validator (core) node must be passed as\ndirected below.")),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <IP_address> --core.grpc.port <port>\n")),(0,r.kt)("p",null,"For ports:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer."))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc <IP_address>:<port>\n")),(0,r.kt)("p",null,"For ports:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc")," port defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can add the port\nafter the IP address.")))),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-271/fr/nodes/arabica-devnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"For example, your command might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-271/fr/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"For example, your command might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc https://rpc-mamaki.pops.one:9090\n")))),(0,r.kt)("h3",{id:"keys-and-wallets"},"Keys and wallets"),(0,r.kt)("p",null,"You can create your key for your node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type light\n")),(0,r.kt)("p",null,"You can start your light node with the key created above by running the\nfollowing command:"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <IP_address> --core.grpc.port <port> --keyring.accname <key_name>\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc <IP_address>:<port> --keyring.accname <key_name>\n")))),(0,r.kt)("p",null,"Once you start the Light Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\nPayForData transactions."),(0,r.kt)("p",null,"You can find the address by running the following command in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type light --keyring-backend test\n")),(0,r.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-271/fr/nodes/arabica-devnet#arabica-devnet-faucet"},"Arabica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-271/fr/nodes/mamaki-testnet#mamaki-testnet-faucet"},"Mamaki"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a light node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMamaki Testnet as well, it is just used for Validator operations.")),(0,r.kt)("p",null,"You can request funds to your wallet address using the following command in Discord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$request <Wallet-Address>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<Wallet-Address>")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia1******")," address generated\nwhen you created the wallet."),(0,r.kt)("h3",{id:"optional-run-the-light-node-with-a-custom-key"},"Optional: run the light node with a custom key"),(0,r.kt)("p",null,"In order to run a light node using a custom key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia light node directory at the\ncorrect path (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.celestia-light/keys/keyring-test"),")"),(0,r.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <IP_address> --core.grpc.port <port> --keyring.accname <name_of_custom_key>\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc <IP_address>:<port> --keyring.accname <name_of_custom_key>\n")))),(0,r.kt)("h3",{id:"optional-start-light-node-with-systemd"},"Optional: start light node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the light node as a background\nprocess with SystemD ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-271/fr/nodes/systemd#celestia-light-node"},"here"),"."),(0,r.kt)("h2",{id:"data-availability-sampling-das"},"Data availability sampling (DAS)"),(0,r.kt)("p",null,"With your light node running, you can check out this tutorial on\nsubmitting ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-271/fr/developers/node-tutorial"},"here"),"."))}h.isMDXComponent=!0},8236:function(e,t,a){t.Z=a.p+"assets/images/LightNodes-6e065ce02c37e36a01707b9b1edd36b3.png"}}]);