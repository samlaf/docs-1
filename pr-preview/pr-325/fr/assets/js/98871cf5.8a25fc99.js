"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8169],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9051:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c}});var n=r(3117),i=(r(7294),r(3905));const o={sidebar_label:"Running the Recipes Rollup"},l="\ud83d\udc69\u200d\ud83c\udf73 Running the Recipes Rollup",a={unversionedId:"developers/recipe-rollup",id:"developers/recipe-rollup",title:"\ud83d\udc69\u200d\ud83c\udf73 Running the Recipes Rollup",description:"\u2728 Run a Celestia Light Node",source:"@site/docs/developers/recipe-rollup.mdx",sourceDirName:"developers",slug:"/developers/recipe-rollup",permalink:"/pr-preview/pr-325/fr/developers/recipe-rollup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-rollup.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Running the Recipes Rollup"},sidebar:"developers",previous:{title:"Querying Recipes",permalink:"/pr-preview/pr-325/fr/developers/recipe-query"},next:{title:"Wordle",permalink:"/pr-preview/pr-325/fr/category/wordle"}},p={},c=[{value:"\u2728 Run a Celestia Light Node",id:"-run-a-celestia-light-node",level:2},{value:"\ud83d\uddde\ufe0f Start the Recipes Rollup",id:"\ufe0f-start-the-recipes-rollup",level:2},{value:"\u2328\ufe0f\xa0Query your recipes with the CLI",id:"\ufe0fquery-your-recipes-with-the-cli",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-running-the-recipes-rollup"},"\ud83d\udc69\u200d\ud83c\udf73 Running the Recipes Rollup"),(0,i.kt)("h2",{id:"-run-a-celestia-light-node"},"\u2728 Run a Celestia Light Node"),(0,i.kt)("p",null,"Follow instructions to install and start your Celestia Data Availalbility\nlayer Light Node selecting the network that you had previously used. You can\nfind instructions to install and run the node ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-325/fr/nodes/light-node"},"here"),"."),(0,i.kt)("p",null,"After you have Go and Ignite CLI installed, and your Celestia Light\nNode running on your machine, you're ready to build, test, and launch your own\nsovereign rollup."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"light-node.png",src:r(9203).Z,width:"1912",height:"1514"}),"  "),(0,i.kt)("h2",{id:"\ufe0f-start-the-recipes-rollup"},"\ud83d\uddde\ufe0f Start the Recipes Rollup"),(0,i.kt)("p",null,"We have a handy ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/devrel-tools"},"here"),"."),(0,i.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# From inside the `recipe` directory\ncd ..\ngit clone https://github.com/celestiaorg/devrel-tools\ncp devrel-tools/recipe/init.sh recipe/\ncd recipe/\n")),(0,i.kt)("p",null,"This copies over our ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nRecipes Rollup."),(0,i.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the Recipes Rollup."),(0,i.kt)("p",null,"\ud83d\udfe2 Start the chain with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"bash init.sh\n")),(0,i.kt)("p",null,"With that, we have kickstarted our ",(0,i.kt)("inlineCode",{parentName:"p"},"recipesd")," network!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"recipe-start.gif",src:r(3819).Z,width:"1888",height:"1536"})),(0,i.kt)("p",null,"Open another teminal instance. Now, create your first recipe in the command line by sending a transaction from alice, when prompted, confirm the transaction by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'recipesd tx recipes create-recipe salad "spinach, mandarin oranges, sliced almonds, smoked gouda, citrus vinagrette" --from alice\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"recipes.gif",src:r(7950).Z,width:"1410",height:"1128"})),(0,i.kt)("h2",{id:"\ufe0fquery-your-recipes-with-the-cli"},"\u2328\ufe0f\xa0Query your recipes with the CLI"),(0,i.kt)("p",null,"To query all of the on-chain recipes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"recipesd q recipes dishes\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"query.gif",src:r(7883).Z,width:"1410",height:"1128"})),(0,i.kt)("p",null,"\ud83c\udf89\xa0Congratulations, again! You have now successfully built a recipe book rollup."))}u.isMDXComponent=!0},9203:function(e,t,r){t.Z=r.p+"assets/images/light-node-e9bf84be9327c23a6573c247e5ede7cd.png"},7883:function(e,t,r){t.Z=r.p+"assets/images/query-a6c8042342b2de67304f474de6c0df65.gif"},3819:function(e,t,r){t.Z=r.p+"assets/images/recipe-start-b435769158f76024880099308cda4224.gif"},7950:function(e,t,r){t.Z=r.p+"assets/images/recipes-ed8d74ded258a73a05555483e33b0c01.gif"}}]);