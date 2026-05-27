#!/usr/bin/env node
var mP=Object.create;var{getPrototypeOf:yP,defineProperty:wc,getOwnPropertyNames:pP}=Object;var vP=Object.prototype.hasOwnProperty;function fP(e){return this[e]}var IP,kP,po=(e,t,o)=>{var n=e!=null&&typeof e==="object";if(n){var r=t?IP??=new WeakMap:kP??=new WeakMap,i=r.get(e);if(i)return i}o=e!=null?mP(yP(e)):{};let a=t||!e||!e.__esModule?wc(o,"default",{value:e,enumerable:!0}):o;for(let c of pP(e))if(!vP.call(a,c))wc(a,c,{get:fP.bind(e,c),enumerable:!0});if(n)r.set(e,a);return a};var wP=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var $P=(e)=>e;function _P(e,t){this[e]=$P.bind(null,t)}var et=(e,t)=>{for(var o in t)wc(e,o,{get:t[o],enumerable:!0,configurable:!0,set:_P.bind(t,o)})};var g=(e,t)=>()=>(e&&(t=e(e=0)),t);var cr=wP((I1,$c)=>{var Dn=process||{},py=Dn.argv||[],An=Dn.env||{},TP=!(!!An.NO_COLOR||py.includes("--no-color"))&&(!!An.FORCE_COLOR||py.includes("--color")||Dn.platform==="win32"||(Dn.stdout||{}).isTTY&&An.TERM!=="dumb"||!!An.CI),OP=(e,t,o=e)=>(n)=>{let r=""+n,i=r.indexOf(t,e.length);return~i?e+SP(r,t,o,i)+t:e+r+t},SP=(e,t,o,n)=>{let r="",i=0;do r+=e.substring(i,n)+o,i=n+t.length,n=e.indexOf(t,i);while(~n);return r+e.substring(i)},vy=(e=TP)=>{let t=e?OP:()=>String;return{isColorSupported:e,reset:t("\x1B[0m","\x1B[0m"),bold:t("\x1B[1m","\x1B[22m","\x1B[22m\x1B[1m"),dim:t("\x1B[2m","\x1B[22m","\x1B[22m\x1B[2m"),italic:t("\x1B[3m","\x1B[23m"),underline:t("\x1B[4m","\x1B[24m"),inverse:t("\x1B[7m","\x1B[27m"),hidden:t("\x1B[8m","\x1B[28m"),strikethrough:t("\x1B[9m","\x1B[29m"),black:t("\x1B[30m","\x1B[39m"),red:t("\x1B[31m","\x1B[39m"),green:t("\x1B[32m","\x1B[39m"),yellow:t("\x1B[33m","\x1B[39m"),blue:t("\x1B[34m","\x1B[39m"),magenta:t("\x1B[35m","\x1B[39m"),cyan:t("\x1B[36m","\x1B[39m"),white:t("\x1B[37m","\x1B[39m"),gray:t("\x1B[90m","\x1B[39m"),bgBlack:t("\x1B[40m","\x1B[49m"),bgRed:t("\x1B[41m","\x1B[49m"),bgGreen:t("\x1B[42m","\x1B[49m"),bgYellow:t("\x1B[43m","\x1B[49m"),bgBlue:t("\x1B[44m","\x1B[49m"),bgMagenta:t("\x1B[45m","\x1B[49m"),bgCyan:t("\x1B[46m","\x1B[49m"),bgWhite:t("\x1B[47m","\x1B[49m"),blackBright:t("\x1B[90m","\x1B[39m"),redBright:t("\x1B[91m","\x1B[39m"),greenBright:t("\x1B[92m","\x1B[39m"),yellowBright:t("\x1B[93m","\x1B[39m"),blueBright:t("\x1B[94m","\x1B[39m"),magentaBright:t("\x1B[95m","\x1B[39m"),cyanBright:t("\x1B[96m","\x1B[39m"),whiteBright:t("\x1B[97m","\x1B[39m"),bgBlackBright:t("\x1B[100m","\x1B[49m"),bgRedBright:t("\x1B[101m","\x1B[49m"),bgGreenBright:t("\x1B[102m","\x1B[49m"),bgYellowBright:t("\x1B[103m","\x1B[49m"),bgBlueBright:t("\x1B[104m","\x1B[49m"),bgMagentaBright:t("\x1B[105m","\x1B[49m"),bgCyanBright:t("\x1B[106m","\x1B[49m"),bgWhiteBright:t("\x1B[107m","\x1B[49m")}};$c.exports=vy();$c.exports.createColors=vy});var fy=()=>{};var Iy,$e=(e)=>{return Iy.default.bold(e)};var _c=g(()=>{Iy=po(cr(),1)});var Tc=(e,t=!1)=>{let o=Object.entries(e);if(o.length===0&&!t)return"";let n=t?[["help",{type:"boolean",short:"h",description:"Show help for this command"}],...o]:o,r=Math.max(...n.map(([a,c])=>{return`${c.short?`-${c.short}, `:""}--${a}`.length})),i=n.map(([a,c])=>{let u=`${c.short?`-${c.short}, `:""}--${a}`,d=c.description.includes("(required)"),s=c.required&&!d?" (required)":"";return`  ${u.padEnd(r)}    ${c.description}${s}`});return`

${$e("OPTIONS")}
${i.join(`
`)}`},Ln=(e)=>{if(e.length===0)return"";let t=e.map((r)=>{let i=r.indexOf("#");if(i===-1)return{command:r,comment:null};return{command:r.substring(0,i).trimEnd(),comment:r.substring(i).trim()}}),o=Math.max(...t.map((r)=>r.command.length)),n=t.map(({command:r,comment:i})=>{if(!i)return`  ${r}`;let a=" ".repeat(o-r.length+2);return`  ${r}${a}${i}`});return`

${$e("EXAMPLES")}
${n.join(`
`)}`},ky=(e,t=2)=>{let o=Object.entries(e);if(o.length===0)return"";let n=Math.max(...o.map(([s])=>s.length)),r=o.flatMap(([,s])=>s.subcommands?Object.keys(s.subcommands):[]),i=r.length>0?Math.max(...r.map((s)=>s.length)):0,a=Math.max(t+n+2,t+2+i+2),c=" ".repeat(t),h=a-t-2,u=a-t-2-2,d="";for(let[s,b]of o)if(d+=`
${c}${s.padEnd(h)}  ${b.description}`,b.subcommands&&Object.keys(b.subcommands).length>0)for(let[m,k]of Object.entries(b.subcommands))d+=`
${c}  ${m.padEnd(u)}  ${k.description}`;return d},Oc=(e)=>{return{renderSubcommandHelp:(i,a)=>{let c=a.positionalArgs?` ${a.positionalArgs}`:"",h=`${e} ${i} ${a.name}${c}`,u=`
${$e(`${e} ${i} ${a.name}`)} - ${a.description}
`;if(u+=`
${$e("USAGE")}
  ${h}`,u+=Tc(a.options??{},!0),a.examples)u+=Ln(a.examples);return u+=`
`,u},renderSubcommandGroupHelp:(i,a)=>{let c=`
${$e(`${e} ${i} ${a.name}`)} - ${a.description}
`;if(c+=`
${$e("USAGE")}`,a.subcommands&&!a.handler)c+=`
  ${e} ${i} ${a.name} <subcommand> [options]`;else if(a.subcommands&&a.handler){let h=a.positionalArgs?` ${a.positionalArgs}`:"";c+=`
  ${e} ${i} ${a.name}${h}`,c+=`
  ${e} ${i} ${a.name} <subcommand> [options]`}if(a.subcommands&&Object.keys(a.subcommands).length>0)c+=`

${$e("SUBCOMMANDS")}`,c+=ky(a.subcommands);if(c+=Tc(a.options??{},!0),a.examples)c+=Ln(a.examples);return c+=`
`,c},renderCommandHelp:(i)=>{let a=i.description.trim(),c=`
${$e(`${e} ${i.name}`)}${a?` - ${a}`:""}
`;if(c+=`
${$e("USAGE")}`,i.subcommands&&!i.handler)c+=`
  ${e} ${i.name} <subcommand> [options]`;else if(i.subcommands&&i.handler){let h=i.positionalArgs?` ${i.positionalArgs}`:"";c+=`
  ${e} ${i.name}${h}`,c+=`
  ${e} ${i.name} <subcommand> [options]`}else{let h=i.positionalArgs?` ${i.positionalArgs}`:"";c+=`
  ${e} ${i.name}${h}`}if(i.subcommands&&Object.keys(i.subcommands).length>0)c+=`

${$e("SUBCOMMANDS")}`,c+=ky(i.subcommands);if(c+=Tc(i.options??{},!0),i.examples)c+=Ln(i.examples);return c+=`
`,c},renderMainHelp:(i,a)=>{let c=`
${$e(a.title)} - ${a.description}
`;c+=`
${$e("USAGE")}`,c+=`
  ${e} <command> [subcommand] [options]`,c+=`

${$e("COMMANDS")}`;let h=Math.max(...i.map((j)=>j.name.length)),u=i.flatMap((j)=>j.subcommands?Object.keys(j.subcommands):[]),d=u.length>0?Math.max(...u.map((j)=>j.length)):0,s=i.flatMap((j)=>j.subcommands?Object.values(j.subcommands).flatMap((te)=>te.subcommands?Object.keys(te.subcommands):[]):[]),b=s.length>0?Math.max(...s.map((j)=>j.length)):0,m=Math.max(2+h+2,4+d+2,6+b+2),k=m-2-2,A=m-4-2,F=m-6-2;for(let j of i)if(c+=`
  ${j.name.padEnd(k)}  ${j.description.trim()}`,j.subcommands){for(let[te,he]of Object.entries(j.subcommands))if(c+=`
    ${te.padEnd(A)}  ${he.description}`,he.subcommands)for(let[ne,Ne]of Object.entries(he.subcommands))c+=`
      ${ne.padEnd(F)}  ${Ne.description}`}return c+=`

${$e("OPTIONS")}`,c+=`
  -h, --help        Show help for a command`,c+=`
  -v, --version     Show version number`,c+=`
  --json            Output errors as JSON`,c+=`
  --profile <name>  Use a named profile`,c+=Ln(a.examples),c+=`
`,c}}};var wy=g(()=>{_c()});var be,ce,bt=(e,t)=>{let o=t??e,n=e.trim().toUpperCase(),i={ERROR:be.default.red,FATAL:be.default.red,WARN:be.default.yellow,WARNING:be.default.yellow,INFO:be.default.blue,DEBUG:be.default.gray,TRACE:be.default.gray}[n];return i?i(o):o},Sc=(e,t)=>{let o=t??e;if(e==="user")return be.default.blue(o);if(e==="assistant")return be.default.green(o);return be.default.gray(o)};var Pc=g(()=>{be=po(cr(),1),ce={success:(e)=>be.default.green(e),error:(e)=>be.default.red(e),warning:(e)=>be.default.yellow(e),info:(e)=>be.default.blue(e),muted:(e)=>be.default.dim(e),bold:(e)=>be.default.bold(e),cyan:(e)=>be.default.cyan(e),gray:(e)=>be.default.gray(e)}});var Pt,Kt=(e)=>{console.log(Pt.default.yellow(e))},E=(e)=>{console.log(JSON.stringify(e,null,2))},v=(e,t=1)=>{console.error(JSON.stringify(typeof e==="string"?{success:!1,error:e}:e,null,2)),process.exit(t)},le=(e)=>{console.log(Pt.default.bold(e))},Y=(e)=>{console.log(Pt.default.dim(e))},V=(e)=>{console.log(Pt.default.green(e))},At=(e)=>{console.log(Pt.default.red(e))},Ge=(e)=>{console.log(Pt.default.yellow(e))},_e=(e)=>Pt.default.dim(e);var vo=g(()=>{Pt=po(cr(),1)});var lr,mt=(e)=>{if(e.type==="cursor")if(e.nextCursor)console.log(lr.default.dim(`Next: --cursor ${e.nextCursor}`));else console.log(lr.default.dim("End of results"));else console.log(lr.default.dim(`Page ${e.page} of ${e.totalPages}`))},Ac=(e,t)=>{console.log(lr.default.bold(`${e} (${t} total)`))},Dc=(e,t)=>{console.log(lr.default.bold(`${e} (${t} results)`))};var Nn=g(()=>{lr=po(cr(),1)});var K=()=>{console.log("")},tt=(e,t=2)=>{console.log(`${" ".repeat(t)}${e}`)},ie=(e,t=0)=>{for(let[o,n]of Object.entries(e))console.log(`${" ".repeat(t)}${o}: ${n}`)},fo=(e="─",t=80)=>{console.log(e.repeat(t))},rt=(e,t,o)=>{if(e.length===0)return;if(o?.header){let h=typeof o.header==="string"?{title:o.header}:o.header,u=h.variant??"section",d=h.count??e.length;if(u==="results")Ac(h.title,d);else if(u==="search")Dc(h.title,d);else le(h.title)}let n=/\u001B\[[0-?]*[ -/]*[@-~]/g,r=(h)=>(h??"").replace(n,"").length,i=(h,u,d)=>{let s=r(h),b=Math.max(0,u-s);return d==="right"?`${" ".repeat(b)}${h}`:`${h}${" ".repeat(b)}`},a=t.map((h)=>{if(h.width)return h.width;let u=r(h.header),d=Math.max(...e.map((s)=>r(s[h.key]||"")));return Math.max(u,d)}),c=[t.map((h,u)=>{let d=a[u]||0;return i(h.header,d,"left")}),...e.map((h)=>t.map((u,d)=>{let s=h[u.key]||"",b=a[d]||0,m=u.align||"left";return i(s,b,m)}))];for(let h of c)tt(h.join("  "));K()};var Lc=g(()=>{vo();Nn()});var Ye=(e,t=60)=>{if(e.length<=t)return e;return`${e.substring(0,t-3)}...`},Cn=(e)=>{return new Date(e).toLocaleString()};var Nc=()=>{};var Io,Cc="✓",xc="✗",$y="⚠",_y="ℹ",PP,AP,DP,LP;var zc=g(()=>{Io=po(cr(),1),PP=Io.default.green(Cc),AP=Io.default.red(xc),DP=Io.default.yellow($y),LP=Io.default.cyan(_y)});var jc=()=>{};var Ty=g(()=>{Nc();zc();jc()});var ko=(e,t)=>{let o=t==null?"":String(t);switch(e.kind){case"string":case"number":return o;case"boolean":return t?"yes":"no";case"date":return o?Cn(o):_e("(none)");case"nullable-date":return o?Cn(o):_e(e.emptyLabel??"(never)");case"nullable-string":return o?o:_e(e.emptyLabel??"(none)");case"truncated":return o?Ye(o,e.maxLength):"";case"id":return o;case"severity":return o?bt(o):o;case"role":return o?Sc(o):o;case"custom":return e.render(t)}},Ec=(e,t)=>{if(e.kind==="custom")return e.serialize?e.serialize(t):t??null;return t??null},Gt=(e,t,o)=>{return e.get?e.get(o):o[t]};var Uc=g(()=>{Pc();vo()});var Oy=g(()=>{Nc();jc()});var Sy=(e,t,o)=>{let n={};for(let r of t){let i=e[r];if(!i)continue;let a=Gt(i,r,o);n[r]=Ec(i.type,a)}return n},UP=(e)=>{if(e.layout==="field-list")return e.fields;let t=[...e.primary.fields];for(let o of e.secondary??[])if(!t.includes(o.field))t.push(o.field);return t},q=(e,t,o)=>{if(o?.json){let a=e.jsonFields??e.columns,h={items:t.map((u)=>Sy(e.schema,a,u))};if(o.nextCursor!==void 0)h.nextCursor=o.nextCursor??null;E(h);return}if(t.length===0){Kt(e.emptyMessage??"No results found.");return}let n=e.columns.map((a)=>{let c=e.schema[a];return{header:c?.label??a,key:a,align:c?.align}}),r=t.map((a)=>{let c={};for(let h of e.columns){let u=e.schema[h];if(!u)continue;let d=Gt(u,h,a);c[h]=ko(u.type,d)}return c}),i=e.header;if(o?.count!==void 0)i=typeof i==="string"?{title:i,count:o.count}:i!=null?{...i,count:o.count}:void 0;if(rt(r,n,{header:i}),o?.nextCursor)mt({type:"cursor",nextCursor:o.nextCursor})},U=(e,t,o)=>{if(o?.json){E(Sy(e.schema,UP(e),t));return}if(e.layout==="field-list")RP(e,t);else FP(e,t)},RP=(e,t)=>{if(e.title)le(e.title);let o={};for(let n of e.fields){let r=e.schema[n];if(!r)continue;let i=Gt(r,n,t);o[r.label]=ko(r.type,i)}ie(o)},FP=(e,t)=>{let{primary:o}=e;if(o.title)le(o.title);let n={};for(let r of o.fields){let i=e.schema[r];if(!i)continue;let a=Gt(i,r,t);n[i.label]=ko(i.type,a)}ie(n);for(let r of e.secondary??[]){let i=e.schema[r.field];if(!i)continue;let a=Gt(i,r.field,t);if(a==null)continue;K(),le(r.title),tt(String(a))}};var Py=g(()=>{Lc();vo();Uc();Nn()});var p=(e,t=1)=>{console.error(e),process.exit(t)},Ht=(e)=>{console.log(e)};var J=g(()=>{fy();wy();Pc();Lc();_c();Ty();zc();vo();Uc();Nn();Oy();Py()});function Ay(e){return e[0]??{}}function Jt(e){return Array.isArray(e)?e:e===void 0||e===null?[]:[e]}function xn(e){let t;return()=>{if(t)return t.result;let o=e();return t={result:o},o}}function GP(e){let t=Promise.resolve();return(...o)=>{return t=t.catch(()=>{}).then(()=>{return e(...o)})}}function wo(){return globalThis[MP]}function zn(e,t={},o){return wo()?.tracer?.startSpan(e,t,o)}function Dt(e,t,o={}){if(!e)return;let n=JP(t);if(e.recordException(n),!o.signal?.aborted||o.signal.reason!==t)e.setStatus({code:HP,message:n.message})}function JP(e){if(e instanceof Error){let t={message:e.message,name:e.name,stack:e.stack};if("code"in e&&(typeof e.code==="string"||typeof e.code==="number"))t.code=e.code;return t}return{message:String(e)}}async function qt({name:e,context:t,...o},n){let r=wo()?.tracer;if(!r)return n();let i=async(a)=>{try{return await n(a)}catch(c){throw Dt(a,c,o),c}finally{a.end()}};if(t)return r.startActiveSpan(e,o,t,i);else return r.startActiveSpan(e,o,i)}async function Mt(e,t){let o=wo();if(!e||!o)return t();let n=o.trace.setSpan(o.context.active(),e);return o.context.with(n,t)}function Xe(e){if(!e||typeof e!=="object")return!1;return"next"in e&&typeof e.next==="function"&&Symbol.asyncIterator in e&&typeof e[Symbol.asyncIterator]==="function"}function Kc({name:e,...t},o){let n;return new Lt(async()=>{n??=zn(e);try{let r=await Mt(n,()=>o.next());return n?.addEvent(r.done?"completed":"yielded"),r}catch(r){throw Dt(n,r,t),r}},async(r)=>{try{if(r!=="next")await Mt(n,()=>o.return?.())}catch(i){throw Dt(n,i,t),i}finally{n?.end()}})}class WP{#e=new Map;#t;constructor(e={}){this.#t=e.maxBufferedEvents??100}get size(){return this.#e.size}publish(e,t){let o=this.#e.get(e);if(!o)return;for(let n of o)n(t)}subscribe(e,t){if(typeof t==="function"){let h=this.#e.get(e);if(!h)this.#e.set(e,h=[]);return h.push(t),xn(()=>{if(h.splice(h.indexOf(t),1),h.length===0)this.#e.delete(e)})}let o=t?.signal,n=t?.maxBufferedEvents??this.#t;o?.throwIfAborted();let r=[],i=[],a=this.subscribe(e,(h)=>{let u=i.shift();if(u)u[0]({done:!1,value:h});else if(r.push(h),r.length>n)r.shift()}),c=(h)=>{a(),i.forEach((u)=>u[1](h.target.reason)),i.length=0,r.length=0};return o?.addEventListener("abort",c,{once:!0}),new Lt(async()=>{if(o?.aborted)throw o.reason;if(r.length>0)return{done:!1,value:r.shift()};return new Promise((h,u)=>{i.push([h,u])})},async()=>{a(),o?.removeEventListener("abort",c),i.forEach((h)=>h[0]({done:!0,value:void 0})),i.length=0,r.length=0})}}class YP{index=BigInt(1);generate(){let e=this.index.toString(36);return this.index++,e}}function $o(e,t,o){let n=(r,i)=>{let a=e[i];if(!a)return o(r);return a({...r,next:(c=r)=>n(c,i+1)})};return n(t,0)}function _o(e){if(!e)return;return JSON.parse(e)}function hr(e){return JSON.stringify(e)}function Dy(e){if(!Ze(e))return null;return Object.getPrototypeOf(e)?.constructor}function He(e){if(!e||typeof e!=="object")return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||!t||!t.constructor}function Ze(e){return!!e&&(typeof e==="object"||typeof e==="function")}function Bc(e,t){let o=e;for(let n of t){if(!Ze(o))return;o=o[n]}return o}function jn(e,...t){if(typeof e==="function")return e(...t);return e}function Hc(e){return new Proxy(e,{get(t,o,n){let r=Reflect.get(t,o,n);if(o!=="then"||typeof r!=="function")return r;return new Proxy(r,{apply(i,a,c){if(c.length!==2||c.some((u)=>!ZP(u)))return Reflect.apply(i,a,c);let h=!0;c[0].call(a,Hc(new Proxy(t,{get:(u,d,s)=>{if(h&&d==="then"){h=!1;return}return Reflect.get(u,d,s)}})))}})}})}function ZP(e){return typeof e==="function"&&XP.test(e.toString())}function Ly(e){try{return decodeURIComponent(e)}catch{return e}}var Rc="orpc",KP="@orpc/shared",BP="1.14.3",Fc,HP=2,MP,qP,VP,Lt,Gc,XP;var ot=g(()=>{Fc=class Fc extends Error{constructor(...e){super(...e);this.name="AbortError"}};MP=`__${KP}@${BP}/otel/config__`;qP=Symbol.for("asyncDispose"),VP=Symbol.asyncDispose??qP;Lt=class Lt{#e=!1;#t=!1;#r;#o;constructor(e,t){this.#r=t,this.#o=GP(async()=>{if(this.#e)return{done:!0,value:void 0};try{let o=await e();if(o.done)this.#e=!0;return o}catch(o){throw this.#e=!0,o}finally{if(this.#e&&!this.#t)this.#t=!0,await this.#r("next")}})}next(){return this.#o()}async return(e){if(this.#e=!0,!this.#t)this.#t=!0,await this.#r("return");return{done:!0,value:e}}async throw(e){if(this.#e=!0,!this.#t)this.#t=!0,await this.#r("throw");throw e}async[VP](){if(this.#e=!0,!this.#t)this.#t=!0,await this.#r("dispose")}[Symbol.asyncIterator](){return this}};Gc=(()=>{let e=function(){};return e.prototype=Object.create(null),Object.freeze(e.prototype),e})();XP=/^\s*function\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/});function Jc(e,t){return t??To[e]?.status??500}function xy(e,t){return t||To[e]?.message||e}function Oo(e){return e instanceof pe?e:new pe("INTERNAL_SERVER_ERROR",{message:"Internal server error",cause:e})}function yt(e){return e<200||e>=400}function ur(e){if(!He(e))return!1;let t=["defined","code","status","message","data"];if(Object.keys(e).some((o)=>!t.includes(o)))return!1;return"defined"in e&&typeof e.defined==="boolean"&&"code"in e&&typeof e.code==="string"&&"status"in e&&typeof e.status==="number"&&yt(e.status)&&"message"in e&&typeof e.message==="string"}function sr(e,t={}){return new pe(e.code,{...t,...e})}var Ny="@orpc/client",Cy="1.14.3",To,zy,Mc,pe;var qc=g(()=>{ot();To={BAD_REQUEST:{status:400,message:"Bad Request"},UNAUTHORIZED:{status:401,message:"Unauthorized"},FORBIDDEN:{status:403,message:"Forbidden"},NOT_FOUND:{status:404,message:"Not Found"},METHOD_NOT_SUPPORTED:{status:405,message:"Method Not Supported"},NOT_ACCEPTABLE:{status:406,message:"Not Acceptable"},TIMEOUT:{status:408,message:"Request Timeout"},CONFLICT:{status:409,message:"Conflict"},PRECONDITION_FAILED:{status:412,message:"Precondition Failed"},PAYLOAD_TOO_LARGE:{status:413,message:"Payload Too Large"},UNSUPPORTED_MEDIA_TYPE:{status:415,message:"Unsupported Media Type"},UNPROCESSABLE_CONTENT:{status:422,message:"Unprocessable Content"},TOO_MANY_REQUESTS:{status:429,message:"Too Many Requests"},CLIENT_CLOSED_REQUEST:{status:499,message:"Client Closed Request"},INTERNAL_SERVER_ERROR:{status:500,message:"Internal Server Error"},NOT_IMPLEMENTED:{status:501,message:"Not Implemented"},BAD_GATEWAY:{status:502,message:"Bad Gateway"},SERVICE_UNAVAILABLE:{status:503,message:"Service Unavailable"},GATEWAY_TIMEOUT:{status:504,message:"Gateway Timeout"}};zy=Symbol.for(`__${Ny}@${Cy}/error/ORPC_ERROR_CONSTRUCTORS__`);globalThis[zy]??=new WeakSet;Mc=globalThis[zy];pe=class pe extends Error{defined;code;status;data;constructor(e,...t){let o=Ay(t);if(o.status!==void 0&&!yt(o.status))throw Error("[ORPCError] Invalid error status code.");let n=xy(e,o.message);super(n,o);this.code=e,this.status=Jc(e,o.status),this.defined=o.defined??!1,this.data=o.data}toJSON(){return{defined:this.defined,code:this.code,status:this.status,message:this.message,data:this.data}}static[Symbol.hasInstance](e){if(Mc.has(this)){let t=Dy(e);if(t&&Mc.has(t))return!0}return super[Symbol.hasInstance](e)}};Mc.add(pe)});function QP(e){let t=e.replace(/\n+$/,"").split(/\n/),o={data:void 0,event:void 0,id:void 0,retry:void 0,comments:[]};for(let n of t){let r=n.indexOf(":"),i=r===-1?n:n.slice(0,r),a=r===-1?"":n.slice(r+1).replace(/^\s/,"");if(r===0)o.comments.push(a);else if(i==="data")o.data??="",o.data+=`${a}
`;else if(i==="event")o.event=a;else if(i==="id")o.id=a;else if(i==="retry"){let c=Number.parseInt(a);if(Number.isInteger(c)&&c>=0&&c.toString()===a)o.retry=c}}return o.data=o.data?.replace(/\n$/,""),o}class Ey{constructor(e={}){this.options=e}incomplete="";feed(e){this.incomplete+=e;let t=this.incomplete.lastIndexOf(`

`);if(t===-1)return;let o=this.incomplete.slice(0,t).split(/\n\n/);this.incomplete=this.incomplete.slice(t+2);for(let n of o){let r=QP(`${n}

`);if(this.options.onEvent)this.options.onEvent(r)}}end(){if(this.incomplete)throw new jy("Event Iterator ended before complete")}}function Uy(e){if(e.includes(`
`))throw new So("Event's id must not contain a newline character")}function eA(e){if(e.includes(`
`))throw new So("Event's event must not contain a newline character")}function Ry(e){if(!Number.isInteger(e)||e<0)throw new So("Event's retry must be a integer and >= 0")}function Fy(e){if(e.includes(`
`))throw new So("Event's comment must not contain a newline character")}function tA(e){let t=e?.split(/\n/)??[],o="";for(let n of t)o+=`data: ${n}
`;return o}function rA(e){let t="";for(let o of e??[])Fy(o),t+=`: ${o}
`;return t}function Po(e){let t="";if(t+=rA(e.comments),e.event!==void 0)eA(e.event),t+=`event: ${e.event}
`;if(e.retry!==void 0)Ry(e.retry),t+=`retry: ${e.retry}
`;if(e.id!==void 0)Uy(e.id),t+=`id: ${e.id}
`;return t+=tA(e.data),t+=`
`,t}function Vt(e,t){if(t.id===void 0&&t.retry===void 0&&!t.comments?.length)return e;if(t.id!==void 0)Uy(t.id);if(t.retry!==void 0)Ry(t.retry);if(t.comments!==void 0)for(let o of t.comments)Fy(o);return new Proxy(e,{get(o,n,r){if(n===Ky)return t;return Reflect.get(o,n,r)}})}function dr(e){return Ze(e)?Reflect.get(e,Ky):void 0}function By(e,t="inline"){let o=e.replace(/[^\x20-\x7E]/g,"_").replace(/"/g,"\\\""),n=encodeURIComponent(e).replace(/['()*]/g,(r)=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`).replace(/%(7C|60|5E)/g,(r,i)=>String.fromCharCode(Number.parseInt(i,16)));return`${t}; filename="${o}"; filename*=utf-8''${n}`}function Gy(e){let t=e.match(/filename\*=(UTF-8'')?([^;]*)/i);if(t&&typeof t[2]==="string")return Ly(t[2]);let o=e.match(/filename="((?:\\"|[^"])*)"/i);if(o&&typeof o[1]==="string")return o[1].replace(/\\"/g,'"')}function En(e,t){let o={...e};for(let n in t)if(Array.isArray(t[n]))o[n]=[...Jt(o[n]),...t[n]];else if(t[n]!==void 0)if(Array.isArray(o[n]))o[n]=[...o[n],t[n]];else if(o[n]!==void 0)o[n]=[o[n],t[n]];else o[n]=t[n];return o}var So,jy,Me,Vc,Ky;var Ao=g(()=>{ot();So=class So extends TypeError{};jy=class jy extends TypeError{};Me=class Me extends Error{data;constructor(e){super(e?.message??"An error event was received",e);this.data=e?.data}};Vc=class Vc extends TransformStream{constructor(){let e;super({start(t){e=new Ey({onEvent:(o)=>{t.enqueue(o)}})},transform(t){e.feed(t)},flush(){e.end()}})}};Ky=Symbol("ORPC_EVENT_SOURCE_META")});function Wt(e,t){let o=async(n)=>{let r=await t.error(n);if(r!==n){let i=dr(n);if(i&&Ze(r))r=Vt(r,i)}return r};return new Lt(async()=>{let{done:n,value:r}=await(async()=>{try{return await e.next()}catch(a){throw await o(a)}})(),i=await t.value(r,n);if(i!==r){let a=dr(r);if(a&&Ze(i))i=Vt(i,a)}return{done:n,value:i}},async()=>{try{await e.return?.()}catch(n){throw await o(n)}})}var Wc=g(()=>{ot();Ao()});function oA(e){return{...e,context:e.context??{}}}function Yc(e,t={}){let o=t.path??[],r=new Proxy(async(...[i,a={}])=>{return await e.call(o,i,oA(a))},{get(i,a){if(typeof a!=="string")return Reflect.get(i,a);return Yc(e,{...t,path:[...o,a]})}});return Hc(r)}var gr=g(()=>{ot();qc();Wc()});function nA(e,t={}){let n=e?.pipeThrough(new TextDecoderStream).pipeThrough(new Vc)?.getReader(),r,i=!1;return new Lt(async()=>{r??=zn("consume_event_iterator_stream");try{while(!0){if(n===void 0)return{done:!0,value:void 0};let{done:a,value:c}=await Mt(r,()=>n.read());if(a){if(i)throw new Fc("Stream was cancelled");return{done:!0,value:void 0}}switch(c.event){case"message":{let h=_o(c.data);if(Ze(h))h=Vt(h,c);return r?.addEvent("message"),{done:!1,value:h}}case"error":{let h=new Me({data:_o(c.data)});throw h=Vt(h,c),r?.addEvent("error"),h}case"done":{let h=_o(c.data);if(Ze(h))h=Vt(h,c);return r?.addEvent("done"),{done:!0,value:h}}default:r?.addEvent("maybe_keepalive")}}}catch(a){if(!(a instanceof Me))Dt(r,a,t);throw a}},async(a)=>{try{if(a!=="next")i=!0,r?.addEvent("cancelled");await Mt(r,()=>n?.cancel())}catch(c){throw Dt(r,c,t),c}finally{r?.end()}})}function iA(e,t={}){let o=t.eventIteratorKeepAliveEnabled??!0,n=t.eventIteratorKeepAliveInterval??5000,r=t.eventIteratorKeepAliveComment??"",i=t.eventIteratorInitialCommentEnabled??!0,a=t.eventIteratorInitialComment??"",c=!1,h,u;return new ReadableStream({start(s){if(u=zn("stream_event_iterator"),i)s.enqueue(Po({comments:[a]}))},async pull(s){try{if(o)h=setInterval(()=>{s.enqueue(Po({comments:[r]})),u?.addEvent("keepalive")},n);let b=await Mt(u,()=>e.next());if(clearInterval(h),c)return;let m=dr(b.value);if(!b.done||b.value!==void 0||m!==void 0){let k=b.done?"done":"message";s.enqueue(Po({...m,event:k,data:hr(b.value)})),u?.addEvent(k)}if(b.done)s.close(),u?.end()}catch(b){if(clearInterval(h),c)return;if(b instanceof Me)s.enqueue(Po({...dr(b),event:"error",data:hr(b.data)})),u?.addEvent("error"),s.close();else Dt(u,b),s.error(b);u?.end()}},async cancel(){try{c=!0,clearInterval(h),u?.addEvent("cancelled"),await Mt(u,()=>e.return?.())}catch(s){throw Dt(u,s),s}finally{u?.end()}}}).pipeThrough(new TextEncoderStream)}function aA(e,t={}){return qt({name:"parse_standard_body",signal:t.signal},async()=>{let o=e.headers.get("content-disposition");if(typeof o==="string"){let i=Gy(o)??"blob",a=await e.blob();return new File([a],i,{type:a.type})}let n=e.headers.get("content-type");if(!n||n.startsWith("application/json")){let i=await e.text();return _o(i)}if(n.startsWith("multipart/form-data"))return await e.formData();if(n.startsWith("application/x-www-form-urlencoded")){let i=await e.text();return new URLSearchParams(i)}if(n.startsWith("text/event-stream"))return nA(e.body,t);if(n.startsWith("text/plain"))return await e.text();let r=await e.blob();return new File([r],"blob",{type:r.type})})}function cA(e,t,o={}){if(e instanceof ReadableStream)return e;let n=t.get("content-disposition");if(t.delete("content-type"),t.delete("content-disposition"),e===void 0)return;if(e instanceof Blob)return t.set("content-type",e.type),t.set("content-length",e.size.toString()),t.set("content-disposition",n??By(e instanceof File?e.name:"blob")),e;if(e instanceof FormData)return e;if(e instanceof URLSearchParams)return e;if(Xe(e))return t.set("content-type","text/event-stream"),iA(e,o);return t.set("content-type","application/json"),hr(e)}function Xc(e,t={}){return e.forEach((o,n)=>{if(Array.isArray(t[n]))t[n].push(o);else if(t[n]!==void 0)t[n]=[t[n],o];else t[n]=o}),t}function lA(e,t=new Headers){for(let[o,n]of Object.entries(e))if(Array.isArray(n))for(let r of n)t.append(o,r);else if(n!==void 0)t.append(o,n);return t}function Hy(e,t={}){let o=lA(e.headers),n=cA(e.body,o,t);return new Request(e.url,{signal:e.signal,method:e.method,headers:o,body:n})}function My(e,t={}){return{body:xn(()=>aA(e,t)),status:e.status,get headers(){let o=Xc(e.headers);return Object.defineProperty(this,"headers",{value:o,writable:!0}),o},set headers(o){Object.defineProperty(this,"headers",{value:o,writable:!0})}}}var Zc=g(()=>{ot();Ao()});class Do{plugins;constructor(e=[]){this.plugins=[...e].sort((t,o)=>(t.order??0)-(o.order??0))}init(e){for(let t of this.plugins)t.init?.(e)}}class Un{constructor(e,t,o={}){this.codec=e,this.sender=t,new Do(o.plugins).init(o),this.interceptors=Jt(o.interceptors),this.clientInterceptors=Jt(o.clientInterceptors)}interceptors;clientInterceptors;call(e,t,o){return qt({name:`${Rc}.${e.join("/")}`,signal:o.signal},(n)=>{if(n?.setAttribute("rpc.system",Rc),n?.setAttribute("rpc.method",e.join(".")),Xe(t))t=Kc({name:"consume_event_iterator_input",signal:o.signal},t);return $o(this.interceptors,{...o,path:e,input:t},async({path:r,input:i,...a})=>{let c=wo(),h,u=c?.trace.getActiveSpan()??n;if(u&&c)h=c?.trace.setSpan(c.context.active(),u);let d=await qt({name:"encode_request",context:h},()=>this.codec.encode(r,i,a)),s=await $o(this.clientInterceptors,{...a,input:i,path:r,request:d},({input:m,path:k,request:A,...F})=>{return qt({name:"send_request",signal:F.signal,context:h},()=>this.sender.call(A,F,k,m))}),b=await qt({name:"decode_response",context:h},()=>this.codec.decode(s,a,r,i));if(Xe(b))return Kc({name:"consume_event_iterator_output",signal:a.signal},b);return b})})}}function Rn(e){return`/${e.map(encodeURIComponent).join("/")}`}function Qc(e){if(typeof e.forEach==="function")return Xc(e);return e}function el(e){return Object.entries(To).find(([,t])=>t.status===e)?.[0]??"MALFORMED_ORPC_ERROR_RESPONSE"}class Jy{constructor(e){this.jsonSerializer=e}serialize(e){if(Xe(e))return Wt(e,{value:async(t)=>this.#e(t,!1),error:async(t)=>{return new Me({data:this.#e(Oo(t).toJSON(),!1),cause:t})}});return this.#e(e,!0)}#e(e,t){let[o,n,r,i]=this.jsonSerializer.serialize(e),a=n.length===0?void 0:n;if(!t||i.length===0)return{json:o,meta:a};let c=new FormData;return c.set("data",hr({json:o,meta:a,maps:r})),i.forEach((h,u)=>{c.set(u.toString(),h)}),c}deserialize(e){if(Xe(e))return Wt(e,{value:async(t)=>this.#t(t),error:async(t)=>{if(!(t instanceof Me))return t;let o=this.#t(t.data);if(ur(o))return sr(o,{cause:t});return new Me({data:o,cause:t})}});return this.#t(e)}#t(e){if(e===void 0)return;if(!(e instanceof FormData))return this.jsonSerializer.deserialize(e.json,e.meta??[]);let t=JSON.parse(e.get("data"));return this.jsonSerializer.deserialize(t.json,t.meta??[],t.maps,(o)=>e.get(o.toString()))}}var tl=g(()=>{ot();Ao();qc();Zc();Wc()});class rl{fetch;toFetchRequestOptions;adapterInterceptors;constructor(e){new qy(e.plugins).initRuntimeAdapter(e),this.fetch=e.fetch??globalThis.fetch.bind(globalThis),this.toFetchRequestOptions=e,this.adapterInterceptors=Jt(e.adapterInterceptors)}async call(e,t,o,n){let r=Hy(e,this.toFetchRequestOptions),i=await $o(this.adapterInterceptors,{...t,request:r,path:o,input:n,init:{redirect:"manual"}},({request:c,path:h,input:u,init:d,...s})=>this.fetch(c,d,s,h,u));return My(i,{signal:r.signal})}}var qy;var Vy=g(()=>{ot();Zc();tl();qy=class qy extends Do{initRuntimeAdapter(e){for(let t of this.plugins)t.initRuntimeAdapter?.(e)}}});var Wy=g(()=>{tl()});class nl{maxArrayIndex;constructor(e={}){this.maxArrayIndex=e.maxBracketNotationArrayIndex??9999}serialize(e,t=[],o=[]){if(Array.isArray(e))e.forEach((n,r)=>{this.serialize(n,[...t,r],o)});else if(He(e))for(let n in e)this.serialize(e[n],[...t,n],o);else o.push([this.stringifyPath(t),e]);return o}deserialize(e){if(e.length===0)return{};let t=new WeakSet,o={value:[]};for(let[n,r]of e){let i=this.parsePath(n),a=o,c="value";if(i.forEach((h,u)=>{if(!Array.isArray(a[c])&&!He(a[c]))a[c]=[];if(u!==i.length-1){if(Array.isArray(a[c])&&!Yy(h,this.maxArrayIndex))if(t.has(a[c]))t.delete(a[c]),a[c]=Xy(a[c]);else a[c]=ol(a[c])}else if(Array.isArray(a[c])){if(h===""){if(a[c].length&&!t.has(a[c]))a[c]=ol(a[c])}else if(t.has(a[c]))t.delete(a[c]),a[c]=Xy(a[c]);else if(!Yy(h,this.maxArrayIndex))a[c]=ol(a[c])}a=a[c],c=h}),Array.isArray(a)&&c==="")t.add(a),a.push(r);else if(c in a)if(Array.isArray(a[c]))a[c].push(r);else a[c]=[a[c],r];else a[c]=r}return o.value}stringifyPath(e){return e.map((t)=>{return t.toString().replace(/[\\[\]]/g,(o)=>{switch(o){case"\\":return"\\\\";case"[":return"\\[";case"]":return"\\]";default:return o}})}).reduce((t,o,n)=>{if(n===0)return o;return`${t}[${o}]`},"")}parsePath(e){let t=[],o=!1,n="",r=0;for(let i=0;i<e.length;i++){let a=e[i],c=e[i+1];if(o&&a==="]"&&(c===void 0||c==="[")&&r%2===0){if(c===void 0)o=!1;t.push(n),n="",i++}else if(t.length===0&&a==="["&&r%2===0)o=!0,t.push(n),n="";else if(a==="\\")r++;else n+="\\".repeat(r/2)+a,r=0}return o||t.length===0?[e]:t}}function Yy(e,t){return/^0$|^[1-9]\d*$/.test(e)&&Number(e)<=t}function ol(e){let t=new Gc;return e.forEach((o,n)=>{t[n]=o}),t}function Xy(e){let t=new Gc;return t[""]=e.length===1?e[0]:e,t}var Zy=g(()=>{ot()});function il(e,t){return{...e,...t}}class Lo{"~orpc";constructor(e){if(e.route?.successStatus&&yt(e.route.successStatus))throw Error("[ContractProcedure] Invalid successStatus.");if(Object.values(e.errorMap).some((t)=>t&&t.status&&!yt(t.status)))throw Error("[ContractProcedure] Invalid error status code.");this["~orpc"]=e}}function No(e){if(e instanceof Lo)return!0;return(typeof e==="object"||typeof e==="function")&&e!==null&&"~orpc"in e&&typeof e["~orpc"]==="object"&&e["~orpc"]!==null&&"errorMap"in e["~orpc"]&&"route"in e["~orpc"]&&"meta"in e["~orpc"]}var Qy=g(()=>{gr()});function uA(e,t){return{...e,...t}}function sA(e,t){return{...e,...t}}function dA(e,t){if(!e.path)return e;return{...e,path:`${t}${e.path}`}}function gA(e,t){return{...e,tags:[...t,...e.tags??[]]}}function bA(e,t){return e?`${e}${t}`:t}function mA(e,t){return e?[...e,...t]:t}function yA(e,t){let o=e;if(t.prefix)o=dA(o,t.prefix);if(t.tags?.length)o=gA(o,t.tags);return o}function ep(e,t){if(No(e))return new Lo({...e["~orpc"],errorMap:il(t.errorMap,e["~orpc"].errorMap),route:yA(e["~orpc"].route,t)});if(typeof e!=="object"||e===null)return e;let o={};for(let n in e)o[n]=ep(e[n],t);return o}function Co(e,t){if(t===void 0)return pA[e];return t}var Je,tp,pA,m6;var al=g(()=>{Qy();gr();Je=class Je extends Lo{constructor(e){super(e);this["~orpc"].prefix=e.prefix,this["~orpc"].tags=e.tags}$meta(e){return new Je({...this["~orpc"],meta:e})}$route(e){return new Je({...this["~orpc"],route:e})}$input(e){return new Je({...this["~orpc"],inputSchema:e})}errors(e){return new Je({...this["~orpc"],errorMap:il(this["~orpc"].errorMap,e)})}meta(e){return new Je({...this["~orpc"],meta:uA(this["~orpc"].meta,e)})}route(e){return new Je({...this["~orpc"],route:sA(this["~orpc"].route,e)})}input(e){return new Je({...this["~orpc"],inputSchema:e})}output(e){return new Je({...this["~orpc"],outputSchema:e})}prefix(e){return new Je({...this["~orpc"],prefix:bA(this["~orpc"].prefix,e)})}tag(...e){return new Je({...this["~orpc"],tags:mA(this["~orpc"].tags,e)})}router(e){return ep(e,this["~orpc"])}};tp=new Je({errorMap:{},route:{},meta:{}}),pA={defaultMethod:"POST",defaultSuccessStatus:200,defaultSuccessDescription:"OK",defaultInputStructure:"compact",defaultOutputStructure:"compact"};m6=Symbol("ORPC_EVENT_ITERATOR_DETAILS")});class op{customSerializers;constructor(e={}){this.customSerializers=e.customJsonSerializers??[]}serialize(e,t={value:!1}){for(let o of this.customSerializers)if(o.condition(e))return this.serialize(o.serialize(e),t);if(e instanceof Blob)return t.value=!0,[e,t.value];if(e instanceof Set)return this.serialize(Array.from(e),t);if(e instanceof Map)return this.serialize(Array.from(e.entries()),t);if(Array.isArray(e))return[e.map((n)=>n===void 0?null:this.serialize(n,t)[0]),t.value];if(He(e)){let o={};for(let n in e){if(n==="toJSON"&&typeof e[n]==="function")continue;o[n]=this.serialize(e[n],t)[0]}return[o,t.value]}if(typeof e==="bigint"||e instanceof RegExp||e instanceof URL)return[e.toString(),t.value];if(e instanceof Date)return[Number.isNaN(e.getTime())?null:e.toISOString(),t.value];if(Number.isNaN(e))return[null,t.value];return[e,t.value]}}function cl(e){return`/${e.replace(/\/{2,}/g,"/").replace(/^\/|\/$/g,"")}`}function rp(e){return e?cl(e).match(/\/\{[^}]+\}/g)?.map((t)=>({raw:t,name:t.match(/\{\+?([^}]+)\}/)[1]})):void 0}class np{constructor(e,t,o){this.contract=e,this.serializer=t,this.baseUrl=o.url,this.headers=o.headers??{},this.customErrorResponseBodyDecoder=o.customErrorResponseBodyDecoder}baseUrl;headers;customErrorResponseBodyDecoder;async encode(e,t,o){let n=Qc(await jn(this.headers,o,e,t));if(o.lastEventId!==void 0)n=En(n,{"last-event-id":o.lastEventId});let r=await jn(this.baseUrl,o,e,t),i=Bc(this.contract,e);if(!No(i))throw Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${e.join(".")}`);return Co("defaultInputStructure",i["~orpc"].route.inputStructure)==="compact"?this.#e(i,e,t,o,r,n):this.#t(i,e,t,o,r,n)}#e(e,t,o,n,r,i){let a=cl(e["~orpc"].route.path??Rn(t)),c=o,h=rp(a);if(h?.length){if(!He(o))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "compact" structure when has dynamic params at ${t.join(".")}.`);let s={...o};for(let b of h){let m=o[b.name];a=a.replace(b.raw,`/${encodeURIComponent(`${this.serializer.serialize(m)}`)}`),delete s[b.name]}c=Object.keys(s).length?s:void 0}let u=Co("defaultMethod",e["~orpc"].route.method),d=new URL(r);if(d.pathname=`${d.pathname.replace(/\/$/,"")}${a}`,u==="GET"){let s=this.serializer.serialize(c,{outputFormat:"URLSearchParams"});for(let[b,m]of s)d.searchParams.append(b,m);return{url:d,method:u,headers:i,body:void 0,signal:n.signal}}return{url:d,method:u,headers:i,body:this.serializer.serialize(c),signal:n.signal}}#t(e,t,o,n,r,i){let a=cl(e["~orpc"].route.path??Rn(t)),c=rp(a);if(!He(o)&&o!==void 0)throw TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "detailed" structure at ${t.join(".")}.`);if(c?.length){if(!He(o?.params))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input.params shape for "detailed" structure when has dynamic params at ${t.join(".")}.`);for(let s of c){let b=o.params[s.name];a=a.replace(s.raw,`/${encodeURIComponent(`${this.serializer.serialize(b)}`)}`)}}let h=i;if(o?.headers!==void 0){if(!He(o.headers))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input.headers shape for "detailed" structure at ${t.join(".")}.`);h=En(o.headers,i)}let u=Co("defaultMethod",e["~orpc"].route.method),d=new URL(r);if(d.pathname=`${d.pathname.replace(/\/$/,"")}${a}`,o?.query!==void 0){let s=this.serializer.serialize(o.query,{outputFormat:"URLSearchParams"});for(let[b,m]of s)d.searchParams.append(b,m)}if(u==="GET")return{url:d,method:u,headers:h,body:void 0,signal:n.signal};return{url:d,method:u,headers:h,body:this.serializer.serialize(o?.body),signal:n.signal}}async decode(e,t,o){let n=!yt(e.status),r=await(async()=>{let c=!1;try{let h=await e.body();return c=!0,this.serializer.deserialize(h)}catch(h){if(!c)throw Error("Cannot parse response body, please check the response body and content-type.",{cause:h});throw Error("Invalid OpenAPI response format.",{cause:h})}})();if(!n){let c=this.customErrorResponseBodyDecoder?.(r,e);if(c!==null&&c!==void 0)throw c;if(ur(r))throw sr(r);throw new pe(el(e.status),{status:e.status,data:{...e,body:r}})}let i=Bc(this.contract,o);if(!No(i))throw Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${o.join(".")}`);if(Co("defaultOutputStructure",i["~orpc"].route.outputStructure)==="compact")return r;return{status:e.status,headers:e.headers,body:r}}}class ip{constructor(e,t){this.jsonSerializer=e,this.bracketNotation=t}serialize(e,t={}){if(Xe(e)&&!t.outputFormat)return Wt(e,{value:async(o)=>this.#e(o,{outputFormat:"plain"}),error:async(o)=>{return new Me({data:this.#e(Oo(o).toJSON(),{outputFormat:"plain"}),cause:o})}});return this.#e(e,t)}#e(e,t){let[o,n]=this.jsonSerializer.serialize(e);if(t.outputFormat==="plain")return o;if(t.outputFormat==="URLSearchParams"){let i=new URLSearchParams;for(let[a,c]of this.bracketNotation.serialize(o))if(typeof c==="string"||typeof c==="number"||typeof c==="boolean")i.append(a,c.toString());return i}if(o instanceof Blob||o===void 0||!n)return o;let r=new FormData;for(let[i,a]of this.bracketNotation.serialize(o))if(typeof a==="string"||typeof a==="number"||typeof a==="boolean")r.append(i,a.toString());else if(a instanceof Blob)r.append(i,a);return r}deserialize(e){if(e instanceof URLSearchParams||e instanceof FormData)return this.bracketNotation.deserialize(Array.from(e.entries()));if(Xe(e))return Wt(e,{value:async(t)=>t,error:async(t)=>{if(t instanceof Me&&ur(t.data))return sr(t.data,{cause:t});return t}});return e}}var ll;var ap=g(()=>{Wy();Zy();ot();gr();al();Ao();ll=class ll extends Un{constructor(e,t,o){let n=new op(o),r=new nl({maxBracketNotationArrayIndex:4294967294}),i=new ip(n,r),a=new np(e,i,o);super(a,t,o)}}});var hl;var cp=g(()=>{Vy();ap();hl=class hl extends ll{constructor(e,t){let o=new rl(t);super(e,o,t)}}});var hp=`## Overview

Stream Cloudflare Logpush jobs directly to Sazabi for edge network observability. Monitor zone and account datasets (HTTP requests, firewall events, DNS logs, Spectrum events, and other Logpush datasets) with real-time AI-powered analysis.

## How it works

Cloudflare Logpush exports zone and account logs to Sazabi over HTTP. You can connect with a Cloudflare API token so Sazabi provisions Logpush jobs for each selected dataset, or use the manual flow to create the jobs yourself.

Native setup validates a Cloudflare API token with account read, zone read, and zone logs edit permissions, then presents eligible Logpush datasets in the stream selector. Manual setup expects an HTTP Logpush job that points at the Sazabi destination URL with timestamp output set to RFC3339 so event times parse accurately.

## Features

- Native provisioning of Logpush jobs per dataset via a scoped API token
- Manual HTTP Logpush job setup for accounts that prefer to manage jobs themselves
- Zone and account dataset coverage with RFC3339 timestamp parsing

## Requirements

- An Enterprise Cloudflare plan. Logpush is only available on the **Enterprise** tier.
- Cloudflare API token with account read, zone read, and zone logs edit permissions
- Ability to create HTTP Logpush jobs in the Cloudflare dashboard
`;var lp=()=>{};var sp=`# Cloudflare Logpush Data Source Setup

You can automate Cloudflare Logpush ingestion through Sazabi's native API token onboarding, or create a standalone manual Logpush HTTP job.

> **Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs and will not be able to complete this setup. (Workers telemetry has a separate path via the Cloudflare Workers data source, which uses OTLP — not Logpush — and is available on the Workers Paid plan.)

## Native path — API token & account linkage

1. Create a Cloudflare API token granting:
   - **Account Settings: Read**
   - **Zone: Read**
   - **Zone Logs: Edit**

   Dashboard links include a templated shortcut that pre-populates scopes.

2. Collect the Cloudflare **Account ID** (\`[a-f0-9]{32}\` hex) from \`/dash.cloudflare.com\` URLs or Overview.
3. Paste token + account ID into Sazabi validation; persisted metadata includes hashed secrets and account label.
4. Select zone or account Logpush datasets from the streams selector. Sazabi provisions a Logpush job and per-stream public key for each selected dataset.

### Logpush selectors

Configure streams per Logpush dataset (zone/account scoped). Respect dedupe prompts so duplicate jobs are not recreated.

## Manual Logpush fallback

Without native automation you can manually create Cloudflare Logpush jobs:

1. Destination type: **HTTP**.
2. Destination URL: \`https://cloudflare-logpush.{projectRegion}.intake.{intakeDomain}/v1/logs?api_key={publicKey}\` (copy from Sazabi).
3. In job **Output options**, set **Timestamp format** to **RFC3339** for reliable parsing.

## Verification

Send representative traffic through the selected Cloudflare zones or account products and confirm matching normalized events in Sazabi.
`;var up=()=>{};var gp=`## Overview

Stream Cloudflare Workers Observability logs and traces directly to Sazabi via OTLP. Monitor Workers executions, binding calls, and fetch requests with real-time AI-powered analysis.

## How it works

Cloudflare Workers Observability ships an OTLP exporter built into the Workers runtime. In the Cloudflare dashboard under **Workers & Pages > Observability**, you add OTLP destinations pointing at Sazabi — one for logs, one for traces — and authenticate each with a Sazabi public key.

Each Worker can opt in to logs and/or traces independently by listing the destination names you chose in its own \`wrangler.jsonc\` / \`wrangler.toml\`. Cloudflare ignores destinations a Worker has not explicitly listed, so until the Wrangler config references the destination name and the Worker is redeployed, the destination shows "Never run" in the Cloudflare dashboard.

\`\`\`jsonc
// wrangler.jsonc
{
  "observability": {
    "enabled": true,
    "logs": {
      "enabled": true,
      "destinations": ["<your-logs-destination-name>"]
    },
    "traces": {
      "enabled": true,
      "destinations": ["<your-traces-destination-name>"]
    }
  }
}
\`\`\`

\`\`\`toml
# wrangler.toml
[observability.logs]
enabled = true
destinations = [ "<your-logs-destination-name>" ]

[observability.traces]
enabled = true
destinations = [ "<your-traces-destination-name>" ]
\`\`\`

## Features

- Workers logs and traces forwarded via the built-in Workers Observability OTLP exporter
- Independent opt-in per Worker and per signal type (logs or traces)
- OTLP transport for compatibility with the broader OpenTelemetry ecosystem

## Requirements

- Workers Observability access on your Cloudflare account; no Cloudflare Logpush entitlement is required.
- Edit access to each Worker's \`wrangler.jsonc\` or \`wrangler.toml\` configuration file
- Cloudflare account permissions to manage Workers Observability destinations
`;var dp=()=>{};var mp=`# Cloudflare Workers Data Source Setup

Use Cloudflare **Workers Observability** to stream Workers logs and traces to Sazabi via OTLP.

> This is **not** the Cloudflare Logpush integration. For zone/account Logpush datasets (HTTP requests, firewall events, DNS logs, Spectrum events, etc.), use the separate **Cloudflare Logpush** data source. Workers Observability does not require a paid Cloudflare plan or Logpush entitlement; Logpush does.

## Setup

1. In Sazabi, create or select a public key for this data source.
2. In the Cloudflare dashboard, go to **Workers & Pages > Observability > Telemetry** and click **Add Destination**. The "Add New Destination" dialog has these fields, in this order — fill them in 1:1.

### Destination 1 — Logs

- **Destination Type**: \`Logs\`
- **OTLP Logs Endpoint**: \`https://cloudflare.{projectRegion}.intake.{intakeDomain}/v1/logs\`
- **Destination Name**: \`sazabi-logs\`
- **Custom Headers**: click **Add Header**
  - Header name: \`Authorization\`
  - Header value: \`Bearer {publicKey}\`
- Click **Save**.

### Destination 2 — Traces

Click **Add Destination** again and repeat with:

- **Destination Type**: \`Traces\`
- **OTLP Traces Endpoint**: \`https://cloudflare.{projectRegion}.intake.{intakeDomain}/v1/traces\`
- **Destination Name**: \`sazabi-traces\`
- **Custom Headers**: click **Add Header**
  - Header name: \`Authorization\`
  - Header value: \`Bearer {publicKey}\`
- Click **Save**.

### Opt each Worker in

In each Worker's \`wrangler.jsonc\` or \`wrangler.toml\`, enable observability and list the destination names for the signals you want to export, then redeploy.

## Verification

Invoke the Worker and confirm Workers logs or traces appear in Sazabi. If Cloudflare shows the destination as "Never run", confirm the Worker config references the exact destination name and has been redeployed.
`;var bp=()=>{};var pp=`## Overview

Stream your AWS CloudWatch logs directly to Sazabi for real-time analysis, alerting, and AI-powered incident investigation. CloudWatch integration forwards logs from any CloudWatch Log Group to Sazabi using subscription filters.

## How it works

Connect your AWS account by creating an IAM role that Sazabi can assume. The role grants permissions to create and manage subscription filters on your CloudWatch Log Groups.

Once connected, you can select which log groups to forward to Sazabi. Logs are streamed in real-time via CloudWatch subscription filters to our observability platform. Our AI agents automatically analyze log patterns, detect anomalies, and identify root causes of issues.

## Features

- Subscription-filter delivery of logs from any CloudWatch Log Group in real-time
- Multi-region support: connect log groups across AWS regions
- Selective log-group forwarding — choose which groups stream to Sazabi
- AI-powered anomaly detection and root-cause analysis

## Requirements

- AWS account access with permissions to create IAM roles
- Ability to create and manage CloudFormation stacks, run Terraform, or use the AWS CLI to provision the Sazabi IAM role
- IAM role creation rights with \`logs:PutSubscriptionFilter\` and related CloudWatch Logs permissions granted to the role
- A workspace admin to enable the integration in Sazabi settings`;var yp=()=>{};var fp=`# CloudWatch Data Source Setup

Walk the user through connecting AWS CloudWatch Logs to a Sazabi project via a customer-owned **cross-account IAM role**. Sazabi assumes that role to install per-log-group subscription filters that forward logs to a Sazabi-managed CloudWatch destination.

The full onboarding form (Sazabi AWS account ID, External ID, CloudFormation quick-create link, role validation, and log-group picker) is driven from the **Sazabi dashboard**. The Sazabi CLI cannot mint the External ID or the Sazabi AWS account ID on its own, so this skill drives the dashboard for credential collection and only falls back to direct CLI calls when the user already has both values from a prior onboarding attempt.

<important>
- **Do the work.** Only pause when the user must act in their AWS console (create role, paste outputs) or in the Sazabi dashboard (open the onboarding form, paste Role ARN, pick log groups). If a step fails, diagnose and retry before asking the user to intervene.
- Use \`AskUserQuestion\` only at user-owned boundaries: choosing the Sazabi project, choosing CloudFormation/Terraform/CLI, pasting the Role ARN, and picking log groups.
- Never echo the External ID or any AWS access keys back to the user or into logs. The Role ARN itself is not sensitive and is fine to display.
- **One Sazabi project per AWS region.** CloudWatch log groups are region-scoped and Sazabi's log-group picker filters by \`projectRegion\`. If the user wants to stream from multiple AWS regions, run this skill once per region, each against a separate Sazabi project pinned to that region.
</important>

## Phase 0: Preflight

Pick the Sazabi CLI command prefix (used for project selection and verification):

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, run \`$SAZABI_CLI auth login\` (browser flow) or \`$SAZABI_CLI auth save <token>\`. Never print the token back.

The user needs:

1. A Sazabi project whose region matches the AWS region of the log groups they want to stream.
2. An AWS account with permission to create IAM roles and policies (\`iam:CreateRole\`, \`iam:PutRolePolicy\`, or equivalent). CloudFormation needs the same plus stack-create rights.
3. Access to the Sazabi dashboard for this organization (the onboarding form surfaces values the CLI cannot).
4. A browser to launch the AWS console or to copy/paste from CloudFormation outputs.

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
\`\`\`

\`AskUserQuestion\`: which Sazabi project should receive the CloudWatch logs? Pick the project whose region matches the AWS region of the desired log groups. Capture the selected ID as \`SAZABI_PROJECT_ID\` and the region as \`PROJECT_REGION\`, then activate:

\`\`\`sh
$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"
\`\`\`

### Detect already-complete setup

\`\`\`sh
$SAZABI_CLI data-sources connections list --type cloudwatch --json
\`\`\`

The CLI returns \`{ "items": [ { "id", "dataSourceType", "displayName", "projectId", "createdAt" } ] }\` — \`metadata\` is **not** exposed by this endpoint. CloudWatch connections use \`displayName: "AWS Account <awsAccountId>"\`, so match on \`displayName\` instead.

If a CloudWatch connection already exists for the AWS account the user wants to onboard (ask the user to confirm by \`displayName\`, e.g. \`AWS Account 123456789012\`), reuse its \`id\` as \`CLOUDWATCH_CONNECTION_ID\` and skip to **Phase 4: Select log groups and create streams**. Do not create a duplicate connection for the same AWS account / region pair.

## Phase 2: Open the dashboard onboarding form

The dashboard surfaces three values that the CLI cannot regenerate: the **Sazabi AWS account ID**, the **External ID** (random per-connection), and the **CloudFormation quick-create URL** that pre-populates both into the customer stack.

Direct the user to the dashboard onboarding form:

> Open the Sazabi dashboard for project \`$SAZABI_PROJECT_ID\`, go to **Settings → Data Sources → New connection → CloudWatch**, and leave the form open. The form should show:
>
> - A **CloudFormation** tab with a **Launch CloudFormation stack** button.
> - A **Terraform** tab with a copyable HCL snippet.
> - A **CLI** tab with copyable \`aws iam\` commands.
> - A **Role ARN** input near the bottom of the form (this is where Phase 3's output is pasted).

Have the user keep this form open for the rest of the skill. Closing it before pasting the Role ARN regenerates a new External ID and invalidates whatever role the user is mid-creating.

## Phase 3: Create the IAM role in AWS

\`AskUserQuestion\`: which AWS provisioning path does the user want to use?

- **CloudFormation (recommended)** — fastest; uses the dashboard's quick-create URL so the trust policy already references the correct Sazabi AWS account ID and External ID.
- **Terraform** — for codified infrastructure; the user copies the HCL from the dashboard's Terraform tab into their Terraform repo.
- **AWS CLI** — for scripted one-off setup; the user runs the \`aws iam\` commands shown in the dashboard's CLI tab.

All three paths produce the same role: trust policy on \`sts:AssumeRole\` to the Sazabi AWS account ARN with the \`sts:ExternalId\` condition, and an inline policy granting \`logs:DescribeLogGroups\`, \`logs:DescribeSubscriptionFilters\`, \`logs:PutSubscriptionFilter\`, \`logs:DeleteSubscriptionFilter\`, and \`logs:Put/Delete/DescribeAccountPolicies\` against \`arn:aws:logs:*:<customerAccount>:log-group:*\` (plus the Sazabi destination ARN for filter targets).

### CloudFormation path

Tell the user to:

1. Click **Launch CloudFormation stack** in the dashboard. AWS opens in the **\`$PROJECT_REGION\`** region (the URL is region-pinned — do not switch regions in the console).
2. Acknowledge IAM capabilities, then click **Create stack**.
3. Wait for the stack to reach \`CREATE_COMPLETE\` (~30s).
4. Open the stack's **Outputs** tab and copy the \`RoleArn\` value. It looks like \`arn:aws:iam::123456789012:role/Sazabi-<projectSlug>-<shortId>-Sazabi-<random>\`.

### Terraform path

Tell the user to paste the dashboard's HCL snippet into their Terraform configuration, run \`terraform apply\`, and copy the \`sazabi_role_arn\` output.

### AWS CLI path

Tell the user to paste the dashboard's bash snippet into a terminal authenticated against the target AWS account, replace \`YOUR_ACCOUNT_ID\` with their 12-digit AWS account ID, run the script, and copy the role ARN printed by the final \`aws iam get-role\` call.

\`AskUserQuestion\`: ask the user to paste the **Role ARN**. Capture it as \`CLOUDWATCH_ROLE_ARN\`. Sanity-check the format before continuing:

\`\`\`sh
echo "$CLOUDWATCH_ROLE_ARN" | grep -Eq '^arn:aws:iam::[0-9]{12}:role/[A-Za-z0-9+=,.@_/-]+$' \\
  && echo "ok" || echo "invalid ARN format"
\`\`\`

If \`invalid ARN format\`, have the user re-copy from CloudFormation Outputs / Terraform output / \`aws iam get-role\` and retry. Do not trim or rewrite the ARN.

## Phase 4: Validate and create the connection

Paste \`CLOUDWATCH_ROLE_ARN\` into the dashboard's **Role ARN** input and click **Connect** (or the equivalent submit button). The dashboard runs the \`validate-role\` source action, which assumes the role from the Sazabi AWS account using the External ID it just surfaced, and on success persists a connection whose metadata is:

\`\`\`json
{
  "roleArn": "<CLOUDWATCH_ROLE_ARN>",
  "awsAccountId": "<extracted from roleArn>",
  "externalId": "<dashboard-issued external id>"
}
\`\`\`

After the dashboard reports success, capture the connection ID from the CLI. The list endpoint does not return \`metadata\`; CloudWatch connections use \`displayName: "AWS Account <awsAccountId>"\`, so match on that:

\`\`\`sh
CLOUDWATCH_AWS_ACCOUNT_ID=$(echo "$CLOUDWATCH_ROLE_ARN" \\
  | sed -E 's#^arn:aws:iam::([0-9]{12}):role/.+$#\\1#')
CLOUDWATCH_CONNECTION_ID=$($SAZABI_CLI data-sources connections list \\
  --type cloudwatch --json \\
  | jq -r --arg name "AWS Account $CLOUDWATCH_AWS_ACCOUNT_ID" \\
      '.items[] | select(.displayName == $name) | .id' | head -n1)
\`\`\`

If \`CLOUDWATCH_CONNECTION_ID\` is empty after the dashboard reported success, retry the CLI command after a few seconds (the dashboard's create call is synchronous, but eventually-consistent reads can lag briefly). If multiple connections share the same display name (re-onboarding the same AWS account), prefer the most recent by \`createdAt\`.

### Validation failed in the dashboard

If the dashboard's **Connect** button returns an error, classify it from the message and act:

- **"External ID mismatch"** — the role's trust policy uses a stale External ID. The dashboard regenerates the External ID each time the form is opened. Recreate the role using the **current** open form (do not reuse a stale CloudFormation template URL or HCL snippet copied from an earlier session). For CloudFormation, delete the half-created stack first.
- **"Access denied"** with no \`ExternalId\` hint — the trust policy principal does not match the Sazabi AWS account, or the role does not exist yet. Verify the role exists in the customer account and that the trust policy's \`Principal.AWS\` matches the value shown in the dashboard's CloudFormation/Terraform/CLI snippet.
- **"Invalid IAM role ARN format"** — re-collect the ARN from Phase 3.
- **"Project region is required"** — the Sazabi project does not have a region set. Pick a different Sazabi project that has a region matching the customer's AWS region.

Do not surface the External ID in any error output you echo to the user.

### Cannot use the dashboard (CLI-only fallback)

This path only works when the user already has both the External ID and Sazabi AWS account ID from a previous onboarding attempt — typically because the dashboard form was open in another tab. The CLI cannot regenerate either value.

\`\`\`sh
$SAZABI_CLI data-sources connections create \\
  --type cloudwatch \\
  --metadata "$(jq -nc \\
    --arg roleArn "$CLOUDWATCH_ROLE_ARN" \\
    --arg awsAccountId "$(echo "$CLOUDWATCH_ROLE_ARN" | sed -E 's#^arn:aws:iam::([0-9]{12}):role/.+$#\\1#')" \\
    --arg externalId "$CLOUDWATCH_EXTERNAL_ID" \\
    '{roleArn: $roleArn, awsAccountId: $awsAccountId, externalId: $externalId}')" \\
  --json
\`\`\`

\`CLOUDWATCH_EXTERNAL_ID\` must be the exact value the dashboard issued for this onboarding attempt. If the user does not have it, fall back to the dashboard path in Phase 2 — do not invent or reuse an unrelated External ID.

## Phase 5: Select log groups and create streams

The Sazabi CLI does not enumerate CloudWatch log groups (the source-action \`list-log-groups\` is dashboard-only). Use one of:

### Option A — Pick log groups from the dashboard

Tell the user to open the connection's stream picker in the dashboard (**Settings → Data Sources → CloudWatch → <connection> → Add streams**). The picker only shows log groups in \`$PROJECT_REGION\`. The user selects log groups and clicks **Add**. Each selection becomes one Sazabi stream whose config is:

\`\`\`json
{
  "logGroupName": "/aws/lambda/example",
  "logGroupArn": "arn:aws:logs:us-east-1:123456789012:log-group:/aws/lambda/example:*"
}
\`\`\`

After the dashboard reports the streams were created, list them via CLI to confirm:

\`\`\`sh
$SAZABI_CLI data-sources streams list --connection-id "$CLOUDWATCH_CONNECTION_ID" --json
\`\`\`

### Option B — Enumerate log groups via the customer's AWS CLI and create streams via the Sazabi CLI

Use this only if the user has \`aws\` CLI authenticated against the customer AWS account (not the Sazabi account) with \`logs:DescribeLogGroups\` in \`$PROJECT_REGION\`:

\`\`\`sh
aws logs describe-log-groups \\
  --region "$PROJECT_REGION" \\
  --query 'logGroups[].{name:logGroupName,arn:arn}' \\
  --output json
\`\`\`

\`AskUserQuestion\`: which log groups should Sazabi connect? Reuse the exact \`logGroupName\` and \`arn\` values from the response — do not invent or reformat them.

For each selected log group create one stream:

\`\`\`sh
$SAZABI_CLI data-sources streams create \\
  --connection-id "$CLOUDWATCH_CONNECTION_ID" \\
  --display-name "<logGroupName>" \\
  --config "$(jq -nc \\
    --arg name "<logGroupName>" \\
    --arg arn "<logGroupArn>" \\
    '{logGroupName: $name, logGroupArn: $arn}')" \\
  --json
\`\`\`

Sazabi rejects subscription filters on its own ingestion-hot-path log groups (anything matching \`/aws/lambda/sazabi-intake-*\`, \`/aws/lambda/sazabi-billing-usage-consumer\`, \`/aws/lambda/sazabi-tail-ws-broadcaster\`, \`/ecs/intake-*/intake\`, \`/ecs/intake-ecs-*/intake-ecs\`, \`/ecs/tail-broadcaster-*/tail-broadcaster\`) to avoid recursive ingestion loops. If a user tries to stream one of those, the stream's provisioning status will be \`error\` with a recursion-loop error.

Stream creation enqueues a Temporal activity that:

1. Assumes the customer's IAM role.
2. Adds the customer AWS account to the Sazabi destination policy.
3. Calls \`PutSubscriptionFilter\` against the chosen log group, pointing at the Sazabi destination ARN.

There is no separate "provision filters" command.

## Phase 6: Verify and report

Verify in two passes.

**Pass 1 — provisioning status.** Within a minute of the last \`streams create\`:

\`\`\`sh
$SAZABI_CLI data-sources streams list --connection-id "$CLOUDWATCH_CONNECTION_ID" --json
\`\`\`

Each stream transitions from \`pending\` / \`provisioning\` to \`active\` once \`PutSubscriptionFilter\` succeeds. Five minutes is a reasonable upper bound; longer than that suggests a Temporal worker problem or a non-retryable AWS error — see **Troubleshooting**.

**Pass 2 — telemetry arrival.** Subscription filters only emit data when the underlying log group receives new events. Trigger traffic against one of the subscribed services (invoke a Lambda, hit a load balancer, etc.), then:

\`\`\`sh
$SAZABI_CLI logs tail --json --search cloudwatch
\`\`\`

Confirm records arrive tagged with the corresponding \`logGroupName\`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.

Report back to the user:

- The created \`CLOUDWATCH_CONNECTION_ID\` and the AWS account it targets.
- One line per stream: log group name, current status.
- For any stream still non-\`active\`, say so explicitly and suggest re-running \`streams list\` in a minute.
- For any stream that errored out (status \`error\`), call out the failed log-group name and the surfaced \`errorMessage\`; offer to recreate just that stream.

Do not include the External ID in the summary.

## Troubleshooting

### \`sts:AssumeRole\` denied during validation

The customer role's trust policy is wrong. Verify in the **customer** account:

- \`Principal.AWS\` matches the Sazabi AWS account ARN shown in the dashboard CloudFormation/Terraform/CLI snippet (not an arbitrary \`root\` ARN copied from old docs).
- \`Condition.StringEquals."sts:ExternalId"\` exactly matches the External ID shown in the **currently-open** dashboard form. The dashboard generates a fresh External ID per form open; a role created against a stale ID will fail forever.

Fix is to rebuild the role using the open form's values, not to re-issue credentials in Sazabi.

### \`logs:PutSubscriptionFilter\` denied during stream provisioning

The customer role exists and is assumable, but its inline policy is missing \`logs:PutSubscriptionFilter\` for the target log group ARN, or scopes it to a different region. Update the customer role's inline policy to include both:

- \`arn:aws:logs:*:<customerAccount>:log-group:*\`
- \`arn:aws:logs:*:<sazabiAccountId>:destination:sazabi-*\`

The dashboard's bundled policy already includes both. If the user diverged from the bundled snippet (renamed resource patterns, dropped statements), re-apply the snippet as-is.

### \`logs:DescribeDestinations\` or \`logs:PutDestinationPolicy\` denied

This is a Sazabi-side permission error against Sazabi's own destination, **not** a customer-role problem. Do not have the user touch their IAM role. Escalate to Sazabi (the destination policy in Sazabi's AWS account is not allowing the customer account or the writer principal). Treat the stream as blocked until that's resolved.

### Stream stuck in \`pending\` / \`provisioning\` for more than five minutes

The Temporal worker that runs \`provisionStreamActivity\` is lagging or the activity is throwing a non-retryable error. Re-running \`streams create\` for the same \`(connection-id, display-name)\` will fail on duplicate display name — either delete the stuck stream first (\`$SAZABI_CLI data-sources streams remove <id>\`) or append a suffix like \`(retry)\` to the display name.

### Stream \`error\` with "log group does not exist"

The log group was renamed or deleted in the customer account after the user selected it. Re-enumerate (Phase 5) and recreate the stream against the current log-group name.

### Stream \`error\` with "subscription filter quota exceeded"

AWS allows at most **2 subscription filters per log group**. The customer must remove an existing non-Sazabi filter in CloudWatch Logs before retrying. Look for filters whose destination ARN does not start with \`arn:aws:logs:*:<sazabiAccountId>:destination:sazabi-\`.

### Stream \`error\` with "recursive ingestion loop"

The user tried to subscribe a Sazabi-owned log group on its own ingestion hot path. Pick a different log group. There is no override.

### Streams are \`active\` but no telemetry arrives

- Confirm the underlying log group received new events after the stream went \`active\` — subscription filters only emit on **new** PutLogEvents calls, not on historical data.
- Confirm the customer role is still assumable (someone may have changed the trust policy after onboarding). The validation pass only runs at connection-create time; ongoing drift is not auto-detected. Re-run **Phase 4** validation manually by deleting and recreating the connection if assumption is now broken.

### Manual connection already exists without streams

If someone previously ran \`$SAZABI_CLI data-sources connections create --type cloudwatch\` directly without picking log groups, the connection exists but \`streams list --connection-id <id>\` returns empty. Reuse the existing \`CLOUDWATCH_CONNECTION_ID\` and continue from **Phase 5**; do not create a second connection for the same AWS account.
`;var vp=()=>{};var kp=`## Overview

Forward your Convex deployment logs directly to Sazabi for real-time monitoring and AI-powered incident detection. Monitor your serverless query, mutation, action, and scheduled functions running on Convex.

## How it works

Connect your Convex account by configuring a log stream that forwards logs to Sazabi's intake endpoint. You can select which deployments to monitor from your team.

Once connected, logs are streamed in real-time using Convex's log stream feature. Our AI agents analyze function executions, scheduled function activity, and \`console.log\` events to detect anomalies and help you troubleshoot issues across your Convex deployments.

## Features

- Convex function logs from queries, mutations, actions, and scheduled functions
- Real-time log streaming via Convex's log stream feature
- Query, mutation, and action attribution for precise incident tracing
- AI analysis of \`console.log\` events and function execution patterns

## Requirements

- A Convex **Pro** plan. Log streaming is not available on the free tier.
- Access to the Convex deployments you want to monitor
- Rights to create a team access token from the Convex dashboard
- A workspace admin to enable the integration in Sazabi settings`;var Ip=()=>{};var $p="# Convex Data Source Setup\n\nWalk the user through connecting **Convex** deployments to a Sazabi project using a Convex **team access token** plus the Sazabi CLI. Stream creation enqueues the Convex backend's `provisionStream`, which mints a per-deployment deploy key, registers a webhook log stream on each Convex deployment, and points it at the Sazabi datasource-scoped intake host. Log streaming requires a Convex **Professional** plan.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating the team token in the Convex UI, choosing the Sazabi project, or picking which Convex deployments to monitor. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, pasting the team token, picking deployments.\n- Never echo `CONVEX_TEAM_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n- The team token is a JWT starting with `eyJ...`. Reject deploy keys (`prod:...`, `dev:...`, `preview:...`) — Sazabi mints its own per-deployment deploy keys via the Convex Management API.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI=\"sazabi\"\nelse\n  SAZABI_CLI=\"bunx @sazabi/cli\"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to the Convex Management API in Phase 3.\n\nCheck authentication:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf authentication fails, ask the user whether to authenticate via `auth login` (browser) or `auth save <token>` (existing secret key). Do not print tokens back to the user.\n\nThe user needs:\n\n1. A Sazabi project to receive the Convex telemetry.\n2. A Convex team on the **Professional** plan. Log streaming returns `LogStreamingNotEnabled` on Starter/Free teams.\n3. Access to the Convex deployments they want to monitor.\n4. A browser to create a Convex team access token.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the Convex telemetry? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use \"$SAZABI_PROJECT_ID\"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing Convex connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type convex --json\n```\n\nIf a Convex connection already exists that targets the Convex team the user wants to onboard, reuse its `id` as `CONVEX_CONNECTION_ID` and skip Phase 4 — still run Phase 2 to capture and validate the team token (the list response does not expose the decrypted team token, so Phase 3's Management API calls still need a freshly pasted `CONVEX_TEAM_TOKEN`), then continue into Phase 3 and Phase 5 to add new streams. Do not create a duplicate connection for the same Convex team.\n\n## Phase 2: Create and capture the Convex team token\n\nDirect the user to create the token:\n\n> Open **https://dashboard.convex.dev/team/settings/access-tokens** and click **Generate access token**.\n>\n> - **Token Name**: `Sazabi`\n> - **Permission**: This is a team-scoped token; it inherits the creator's team permissions. The creator must be a team admin or have permission to manage deployments in the team you want to monitor.\n>\n> Copy the token immediately — Convex only shows it once. The token is a JWT and starts with `eyJ`.\n\n`AskUserQuestion`: ask the user to paste the team access token. Capture it as `CONVEX_TEAM_TOKEN`.\n\nSanity-check the token before discovering deployments. The Management API's `/v1/token_details` returns the team the token is bound to:\n\n```sh\nif TOKEN_DETAILS=$(curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n  https://api.convex.dev/v1/token_details 2>/dev/null); then\n  CONVEX_TEAM_ID=$(jq -r '.teamId' <<<\"$TOKEN_DETAILS\")\nelse\n  CONVEX_TEAM_ID=\"\"\nfi\n```\n\nIf the call fails or `CONVEX_TEAM_ID` is empty/`null`, the token was revoked, copied incorrectly, or is not a team access token. Have the user regenerate it and retry. Do not print `CONVEX_TEAM_TOKEN` in any error output.\n\nConvex team access tokens are scoped to **exactly one team**. If the user wants to onboard deployments from multiple Convex teams, run this skill once per team — each run produces a separate Sazabi connection.\n\nCapture a display name for the team. Convex does not expose a team-name endpoint to token holders; fall back to `Team ${CONVEX_TEAM_ID}` if the user has no preferred label:\n\n```sh\nCONVEX_TEAM_NAME=\"Team ${CONVEX_TEAM_ID}\"\n```\n\n## Phase 3: Discover and pick Convex deployments\n\nEnumerate the team's projects, then enumerate each project's deployments. Reuse the exact `deployment.name` slug (e.g. `sleek-bear-350`) as `deploymentId` — that is the identifier the Convex log-streams API expects.\n\n```sh\nPROJECTS_JSON=$(curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n  \"https://api.convex.dev/v1/teams/${CONVEX_TEAM_ID}/list_projects\")\n\n# Emits one row per deployment: deploymentName<TAB>projectName<TAB>deploymentType\nDEPLOYMENTS_TSV=$(jq -r '.[] | \"\\(.id)\\t\\(.name)\"' <<<\"$PROJECTS_JSON\" \\\n  | while IFS=$'\\t' read -r PROJECT_ID PROJECT_NAME; do\n      curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n        \"https://api.convex.dev/v1/projects/${PROJECT_ID}/list_deployments\" \\\n        | jq -r --arg pname \"$PROJECT_NAME\" \\\n            '.[] | \"\\(.name)\\t\\($pname)\\t\\(.deploymentType)\"'\n    done)\n\nprintf '%s\\n' \"$DEPLOYMENTS_TSV\"\n```\n\nGroup the rows by `projectName` and present them to the user. The `deploymentType` is one of `prod`, `dev`, `preview`.\n\n`AskUserQuestion`: which Convex deployments should Sazabi connect? One Sazabi stream is created per selected deployment.\n\nFor each selected row, build `(DEPLOYMENT_ID, DEPLOYMENT_DISPLAY_NAME)`:\n\n- `DEPLOYMENT_ID` = the deployment slug (column 1, e.g. `sleek-bear-350`). This is the value passed to Convex's `/api/v1/create_log_stream`.\n- `DEPLOYMENT_DISPLAY_NAME` = `<projectName> (<deploymentType>)` (e.g. `web (prod)`). This becomes both the stream's `displayName` and `config.deploymentName`.\n\nCollect these into a list `CONVEX_DEPLOYMENTS` for use in Phase 5.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection. The metadata schema lives in `convexMetadataSchema` — only `accessToken`, `teamId`, and `teamName` are persisted:\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token  \"$CONVEX_TEAM_TOKEN\" \\\n  --arg teamId \"$CONVEX_TEAM_ID\" \\\n  --arg name   \"$CONVEX_TEAM_NAME\" \\\n  '{accessToken: $token, teamId: $teamId, teamName: $name}')\n\nCONVEX_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type convex \\\n  --metadata \"$METADATA_JSON\" \\\n  --json | jq -r '.connectionId')\n```\n\nThe connection persists the (encrypted) team token and team scope. It does **not** provision any Convex-side log streams on its own — log-stream creation happens per stream in Phase 5.\n\n## Phase 5: Create one stream per Convex deployment\n\nFor each entry in `CONVEX_DEPLOYMENTS`, create a stream. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the Convex backend's `provisionStream`. That activity:\n\n1. Calls `POST https://api.convex.dev/v1/deployments/<deploymentId>/create_deploy_key` with the team token to mint a Sazabi-named deploy key.\n2. Mints a per-stream Sazabi public key.\n3. Calls `POST https://<deploymentId>.convex.cloud/api/v1/create_log_stream` with the deploy key to register a `webhook` / `json` log stream pointed at `https://convex.<projectRegion>.intake.<intakeDomain>/api/v1/convex/ingest?key=<publicKey>`.\n\nThe agent only has to set `deploymentId` and `deploymentName` in the stream `config`. The backend writes back `logStreamId`, `deployKey`, and `publicKeyId` on success.\n\n```sh\n$SAZABI_CLI data-sources streams create \\\n  --connection-id \"$CONVEX_CONNECTION_ID\" \\\n  --display-name \"$DEPLOYMENT_DISPLAY_NAME\" \\\n  --config \"$(jq -nc \\\n    --arg id   \"$DEPLOYMENT_ID\" \\\n    --arg name \"$DEPLOYMENT_DISPLAY_NAME\" \\\n    '{deploymentId: $id, deploymentName: $name}')\" \\\n  --json\n```\n\nDo **not** set `logStreamId`, `deployKey`, or `publicKeyId` in the initial config — those fields are reserved for the backend's write-back. Reuse the exact `deployment.name` slug returned by `list_deployments` for `deploymentId`; do not invent or reformat it.\n\nIf a stream creation fails because of a duplicate display name on this connection, append the deployment slug (e.g. `\"$DEPLOYMENT_DISPLAY_NAME [$DEPLOYMENT_ID]\"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nLog-stream provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id \"$CONVEX_CONNECTION_ID\" --json\n```\n\nEach stream's status transitions from `pending`/`provisioning` to `active` once the backend finishes calling Convex's `/api/v1/create_log_stream`. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that deployment and surface it to the user.\n\n**Pass 2 — telemetry arrival.** Convex emits log-stream batches only while the deployment is processing requests. Trigger traffic (run a Convex function, hit a deployed endpoint, run `npx convex dev`) and then:\n\n```sh\n$SAZABI_CLI logs tail --json --search convex\n```\n\nConfirm new records arrive tagged with the corresponding `deploymentName`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `CONVEX_CONNECTION_ID` and `CONVEX_TEAM_NAME`.\n- One line per stream: deployment display name, deployment slug, current status.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored, call out the failed deployment slug and offer to recreate just that stream.\n\nDo not include `CONVEX_TEAM_TOKEN` or any minted deploy key in the summary.\n\n## Troubleshooting\n\n### Invalid or expired team access token\n\n`/v1/token_details` returns 401 or `Invalid access token`. The token was revoked, copied incorrectly, or is not a team access token. Regenerate at **https://dashboard.convex.dev/team/settings/access-tokens** and rerun Phase 2. The existing connection record holds a now-stale token — delete the connection and rerun from Phase 4 unless your CLI version supports `connections update` (check `$SAZABI_CLI data-sources connections -h`).\n\n### `LogStreamingNotEnabled`\n\nThe Convex `create_log_stream` API returns `LogStreamingNotEnabled` when the team is not on the **Professional** plan. The user must upgrade at **https://www.convex.dev/plans**. After upgrading, rerun `streams create` for the failed deployments — the connection itself does not need to be recreated.\n\n### Token has no access to expected deployments\n\nConvex team access tokens are scoped to exactly one team and inherit the creator's permissions inside that team. If a project or deployment is missing from `list_projects`/`list_deployments`, either the deployment lives in a different team (run this skill again for that team) or the token's creator does not have the necessary role. Have the user regenerate the token under an account with the right permissions and retry from Phase 2.\n\n### Wrong token shape (deploy key pasted instead of access token)\n\nIf the user pasted a string starting with `prod:`, `dev:`, or `preview:`, that is a deploy key, not a team access token. Deploy keys cannot list teams or projects via the Management API. Have the user generate a team access token (JWT, `eyJ...`) and retry Phase 2.\n\n### Stream config rejected by Sazabi\n\n`streams create` validates `config` against `convexStreamConfigSchema` before insert. If the CLI returns a validation error, check that `deploymentId` and `deploymentName` are non-empty strings and that you did **not** pre-populate `logStreamId`, `deployKey`, or `publicKeyId`. Field names are case-sensitive.\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No telemetry arriving after streams are `active`\n\nAn `active` stream on the Sazabi side only delivers data when the corresponding Convex deployment processes requests. Trigger a function call, deploy, or `console.log` in the deployment. If logs still never arrive, verify the Convex dashboard shows the `Sazabi …` log stream under the deployment's **Log Streams** settings and that its destination URL host is `convex.<region>.intake.<domain>` (not the base regional intake host).\n\n### Manual connection already exists without streams\n\nIf someone previously ran `sazabi data-sources connections create --type convex` without the corresponding `streams create` calls, the connection exists but `streams list --connection-id <id>` returns empty. Reuse the existing `CONVEX_CONNECTION_ID` and continue from Phase 3 to add streams; do not create a second connection for the same Convex team.\n";var wp=()=>{};var Tp=`## Overview

Forward your Datadog Agent logs directly to Sazabi for real-time analysis, alerting, and AI-powered incident investigation. The Datadog integration allows you to stream logs from any Datadog Agent deployment to Sazabi's observability platform.

## How it works

Configure your Datadog Agent to forward logs to Sazabi's intake endpoint using a Sazabi public key. Existing Agents can dual-ship logs with \`logs_config.additional_endpoints\`; dedicated sidecars or containers can point the Agent logs pipeline directly at Sazabi. The agent sends logs as JSON arrays with fields like message, status, timestamp, hostname, service, and tags.

Once configured, logs are streamed in real-time from your Datadog Agent to Sazabi. Our AI agents automatically analyze log patterns, detect anomalies, and identify root causes of issues across your infrastructure.

## Features

- Dual-shipping via \`logs_config.additional_endpoints\` so existing Datadog Agents continue forwarding to Datadog while also sending to Sazabi
- Dedicated sidecar or container Agent pointed exclusively at Sazabi for isolated log pipelines
- Full Datadog Agent log metadata preserved: message, status, timestamp, hostname, service, and tags

## Requirements

- Access to edit the Datadog Agent configuration file or container environment variables
- For dual-shipping: keep the existing \`api_key\` / \`DD_API_KEY\` as Datadog's key and add Sazabi through \`logs_config.additional_endpoints\` or \`DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS\`
- For a dedicated Sazabi Agent: set root \`DD_API_KEY\` to the Sazabi public key only when the Agent is not also forwarding to Datadog
- The \`DD-API-KEY\` header must be populated with your Sazabi public key for Sazabi's intake to authenticate the request`;var _p=()=>{};var Sp=`# Datadog Agent Data Source Setup

Stream logs from the Datadog Agent to Sazabi. Support both dual-shipping from an existing Agent and dedicated Agent sidecars that send logs only to Sazabi.

## Phase 1: Sazabi

1. Create or open the Datadog Agent connection for the target Sazabi project and copy the **\`publicKey\`** used for Sazabi intake auth.
2. Copy the rendered intake URL, which has the form \`https://datadog.{projectRegion}.intake.{intakeDomain}\`.

## Phase 2: Agent configuration

Pick exactly one setup style.

### Existing Agent that should keep sending logs to Datadog

Use Datadog Agent log dual-shipping. Keep the root-level \`api_key\` or \`DD_API_KEY\` as Datadog's key. Add Sazabi under \`logs_config.additional_endpoints\` or the matching environment variable:

\`\`\`yaml
logs_enabled: true
logs_config:
  force_use_http: true
  additional_endpoints:
    - api_key: "{publicKey}"
      Host: "datadog.{projectRegion}.intake.{intakeDomain}"
      Port: 443
\`\`\`

\`\`\`bash
DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_FORCE_USE_HTTP=true
DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS='[{"api_key":"{publicKey}","Host":"datadog.{projectRegion}.intake.{intakeDomain}","Port":443}]'
\`\`\`

### Dedicated Agent, sidecar, or container that sends logs only to Sazabi

Use the Sazabi public key as the Agent key and point the logs pipeline at Sazabi:

\`\`\`bash
DD_API_KEY={publicKey}
DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_LOGS_DD_URL=https://datadog.{projectRegion}.intake.{intakeDomain}
DD_LOGS_CONFIG_FORCE_USE_HTTP=true
\`\`\`

For ECS Fargate sidecars that collect task container logs, also set:

\`\`\`bash
ECS_FARGATE=true
DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true
\`\`\`

Restart or redeploy the Agent after changing configuration. \`DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS\` requires Datadog Agent v6.18+ or v7.18+. Avoid configuring both Sazabi as an additional endpoint and as the primary logs URL in the same Agent, or duplicate logs may be sent.

## Phase 3: Verify

Emit log lines tagged for collection. Confirm they appear in Sazabi Search for the mapped project. For dual-shipping setups, Datadog dashboards should continue ingesting the telemetry that the Agent already sent there.
`;var Op=()=>{};var Ap=`## Overview

Stream telemetry from all your Daytona sandboxes to Sazabi using org-level OpenTelemetry. Monitor sandbox provisioning, SDK method traces, and developer activity across your entire organization.

## How it works

Enable the OpenTelemetry card in your Daytona organization's **Settings**. Once configured, Daytona exports OTLP logs, traces, and metrics from all sandboxes to Sazabi's intake endpoint automatically.

AI agents analyze sandbox patterns, detect provisioning issues, and help you optimize your Daytona deployments.

## Features

- Sandbox log and trace forwarding via the Daytona OpenTelemetry card
- Org-level coverage: all sandboxes forward telemetry once the card is configured
- OTLP metrics are accepted at intake but not yet persisted in Sazabi

## Requirements

- Daytona organization owner access to enable the OpenTelemetry card under **Settings**
- Access to the OpenTelemetry card configuration to enter the Sazabi public key and intake endpoint
- Sazabi public key and intake endpoint values provided during connection setup`;var Pp=()=>{};var Lp=`# Daytona Data Source Setup

Connect Daytona Cloud to a Sazabi project using **organization-level OpenTelemetry forwarding**. Daytona exports OTLP logs and traces from every sandbox in the organization through the **OpenTelemetry** card under **Settings**; there is no per-sandbox SDK install and no provider API token. Sazabi mints a public intake key, the user pastes the OTLP endpoint and \`Authorization: Bearer ...\` header into Daytona, and telemetry begins flowing on the next sandbox start.

**Principle:** Do the work. Only pause when the user must act: opening Daytona, pasting the bearer header in the OpenTelemetry card, or choosing the Sazabi project. If a step fails, diagnose and retry before asking the user to intervene.

<important>
Use AskUserQuestion only for user-owned boundaries: choosing the Sazabi project, confirming the user has Daytona organization-owner access, or pasting the OpenTelemetry card values. Use CLI discovery before asking. Never echo the Sazabi public key back to the user in chat.
</important>

## Phase 0: Preflight

Use the Sazabi CLI. Choose the command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. In Sazabi agent runtimes \`sazabi\` is pre-installed and pre-authenticated; only fall back to \`bunx @sazabi/cli\` when the binary is missing.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, ask the user whether to authenticate with browser login (\`$SAZABI_CLI auth login\`) or an existing token (\`$SAZABI_CLI auth save <token>\`). Do not print tokens back to the user.

Daytona prerequisites the user must meet — confirm before continuing:

- The user is an **organization owner** in Daytona Cloud (the **OpenTelemetry** card under **Settings** is only visible to owners).
- The user can reach <https://app.daytona.io>.

Detect already-complete setup before doing any work:

\`\`\`sh
$SAZABI_CLI data-sources connections list --type daytona --json
\`\`\`

If a \`daytona\` connection already exists for the active project, list its streams and skip to **Phase 5: Verify**:

\`\`\`sh
$SAZABI_CLI data-sources streams list --connection-id <connection-id> --json
\`\`\`

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
$SAZABI_CLI projects use <project-id>
SAZABI_PROJECT_ID=<project-id>
\`\`\`

Capture the selected project ID as \`SAZABI_PROJECT_ID\` (assign it in the same shell — \`projects use\` writes the id to settings but does not print it to stdout). All Daytona telemetry from one organization lands in this single project, so the choice is policy: pick the project that should own org-wide sandbox telemetry.

## Phase 2: Create the Sazabi connection and capture the public key

Create the \`daytona\` connection. The backend mints a project-scoped public key and stores its id on the connection metadata; no provider credentials are validated.

\`\`\`sh
CONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\
  --type daytona \\
  --metadata '{}' \\
  --json)
\`\`\`

Extract the connection id. \`data-sources connections create --json\` emits \`{ "connectionId": "...", "publicKey": "..." }\` (see \`packages/public-cli/src/commands/data-sources.ts\` \`handleCreateConnection\`):

\`\`\`sh
CONNECTION_ID=$(printf '%s' "$CONNECTION_JSON" | jq -r '.connectionId')
\`\`\`

Mint a public key for OTLP intake auth and capture it as \`PUBLIC_KEY\`. \`public-keys create --json\` emits the full API response object with the plaintext key nested under \`publicKey.value\` (see \`packages/public-cli/src/commands/keys.ts\` \`handleCreateKey\`):

\`\`\`sh
PUBLIC_KEY_JSON=$($SAZABI_CLI public-keys create "Daytona OTLP" --json)
PUBLIC_KEY=$(printf '%s' "$PUBLIC_KEY_JSON" | jq -r '.publicKey.value')
\`\`\`

\`PUBLIC_KEY\` is a bearer secret. Never print it in summaries, chat output, or commit it to a repo. Reference it as \`<your-public-key>\` when guiding the user; only paste the literal value into the Daytona OpenTelemetry card.

Resolve the project region for the intake hostname:

\`\`\`sh
PROJECT_REGION=$($SAZABI_CLI projects list --json | jq -r --arg id "$SAZABI_PROJECT_ID" '.items[] | select(.id == $id) | .region')
\`\`\`

The \`projects list --json\` envelope is \`{ "items": [...] }\` (CLI renderer convention — see \`packages/cli-utils/src/renderer.ts\` and \`packages/public-cli/CLAUDE.md\`); do not query \`.projects[]\`.

Pick \`INTAKE_DOMAIN\` from the active Sazabi environment:

- \`sazabi.com\` for production
- \`sazabi.dev\` for staging or development

The Daytona OTLP endpoint is:

\`\`\`text
https://daytona.<PROJECT_REGION>.intake.<INTAKE_DOMAIN>
\`\`\`

Daytona appends \`/v1/logs\`, \`/v1/traces\`, and \`/v1/metrics\` per signal; do not include those suffixes in the value pasted into the OpenTelemetry card.

## Phase 3: Configure the Daytona OpenTelemetry card

Direct the user to:

> 1. Open <https://app.daytona.io> and switch to the organization whose sandboxes should forward to Sazabi.
> 2. Go to **Settings** and scroll to the **OpenTelemetry** card. If you do not see this card, you are not signed in as an organization owner — switch accounts or have an owner perform this phase.
> 3. Set **OTLP Endpoint** to:
>
>    \`\`\`text
>    https://daytona.<PROJECT_REGION>.intake.<INTAKE_DOMAIN>
>    \`\`\`
>
> 4. Add a custom header with **Name** \`Authorization\` and **Value** \`Bearer <your-public-key>\`. Use the literal Sazabi public key you just minted; keep the \`Bearer\` prefix and the single space before the key.
> 5. Save the **OpenTelemetry** card.

No per-sandbox change is required — Daytona starts exporting OTLP on the next sandbox start.

## Phase 4: Record the destination as a stream

Create a single stream against the connection so the dashboard and CLI can display the destination. There is one OTLP destination per Daytona organization, so use a single stream.

\`\`\`sh
$SAZABI_CLI data-sources streams create \\
  --connection-id "$CONNECTION_ID" \\
  --display-name "Daytona OTLP" \\
  --config '{}' \\
  --json
\`\`\`

## Phase 5: Verify

Have the user start (or restart) a Daytona sandbox in the configured organization so new OTLP batches emit, then wait ~30s and confirm records arrive:

\`\`\`sh
$SAZABI_CLI logs tail --json --search daytona &
TAIL_PID=$!
# Ask the user to start a sandbox at https://app.daytona.io now.
sleep 60
kill $TAIL_PID 2>/dev/null
\`\`\`

Daytona stamps every OTLP record with these resource attributes — filter on them in Sazabi to scope by org, region, or snapshot:

- \`daytona_organization_id\`
- \`daytona_region_id\`
- \`daytona_snapshot\`

If nothing arrives, diagnose in this order before asking the user to retry:

- **401 / no records:** the \`Authorization\` header value is wrong. It must be \`Bearer <public-key>\` (with the \`Bearer\` prefix and a single space before the key). Re-mint with \`$SAZABI_CLI public-keys create "Daytona OTLP"\` if the key was lost or pasted incorrectly.
- **Endpoint typo:** verify the OTLP Endpoint value is \`https://daytona.<PROJECT_REGION>.intake.<INTAKE_DOMAIN>\` with no trailing \`/v1/logs\` and no extra path. Daytona appends signal suffixes itself.
- **Wrong organization:** the OpenTelemetry card is per-organization. If the user has multiple Daytona orgs, confirm they configured the one whose sandboxes they restarted.
- **No sandbox activity:** running sandboxes that started before the card was saved continue with the prior config until they restart. Have the user create or restart a sandbox.
- **OTLP metrics expected but missing:** Sazabi currently persists Daytona OTLP logs and traces. \`/v1/metrics\` is accepted at intake but not yet stored — this is expected and is not a misconfiguration.

## Phase 6: Report

Summarize:

- The created connection id (\`$CONNECTION_ID\`) and stream display name (\`Daytona OTLP\`).
- The OTLP endpoint and the Daytona resource attributes available for filtering (\`daytona_organization_id\`, \`daytona_region_id\`, \`daytona_snapshot\`).
- The retention note: Daytona keeps sandbox telemetry for only **3 days** in its own dashboard — Sazabi is the durable store.

Do not print \`PUBLIC_KEY\` in the summary.

## Troubleshooting

### OpenTelemetry card is not visible

The card is restricted to Daytona organization owners. The user must either be promoted to owner or have an owner complete Phase 3. Do not look for the card under per-workspace or per-user settings — it is organization-scoped.

### Manual connection already exists

If \`data-sources connections list --type daytona --json\` returns an existing connection but no telemetry is flowing, prefer reusing it: re-mint a fresh public key with \`$SAZABI_CLI public-keys create "Daytona OTLP"\` and ask the user to update the \`Authorization\` header in the existing OpenTelemetry card. Deleting and recreating the connection rotates the connection id without changing intake behavior.

### Telemetry attributed to the wrong source

Daytona OTLP must be sent to \`daytona.<region>.intake.<domain>\`. Posting Daytona payloads to the generic \`otlp.<region>.intake.<domain>\` host still ingests them but attributes records to the generic OpenTelemetry source instead of Daytona. Fix the **OTLP Endpoint** value in the OpenTelemetry card to restore Daytona attribution.
`;var Dp=()=>{};var Cp=`## Overview

Forward DigitalOcean App Platform logs directly to Sazabi for unified observability across your services, workers, and jobs. Sazabi's native setup provisions App Platform \`log_destinations\` automatically using a DigitalOcean personal access token.

## How it works

Sazabi connects to your DigitalOcean account with a personal access token and configures App Platform \`log_destinations\` on each selected app's services, workers, and jobs. The destination uses App Platform's built-in Datadog destination type, pointed at Sazabi's DigitalOcean intake endpoint.

Once configured, logs stream automatically from your App Platform components. Our AI agents analyze application health, detect deployment issues, and help you maintain reliability across your apps.

## Features

- Native App Platform log forwarding via \`log_destinations\`
- Per-component routing for services, workers, and jobs
- Idempotent per-stream destination naming so multiple Sazabi streams can target the same app

## Requirements

- DigitalOcean personal access token with Full Access scope, or a custom token with app read and update permissions
- Access to select the App Platform apps you want to forward logs from during connection setup
- Permissions to provision \`log_destinations\` on the selected apps (granted by the token scopes above)`;var Np=()=>{};var zp=`# DigitalOcean Data Source Setup

Walk the user through connecting DigitalOcean App Platform apps to a Sazabi project using the Sazabi CLI. The connection holds a DigitalOcean personal access token; each stream points at one App Platform app, and the backend provisions a Datadog-typed \`log_destinations\` entry on every service, worker, and job in that app's spec. Stream creation enqueues a Temporal activity — there is no separate "provision drains" command.

<important>
- **Do the work.** Only pause when the user must act: creating a token in the DigitalOcean UI, choosing the Sazabi project, or picking apps. If a step fails, diagnose and retry before asking the user to intervene.
- Use \`AskUserQuestion\` only at user-owned boundaries: choosing a Sazabi project, entering the API token, picking apps.
- Never echo \`DO_TOKEN\` back to the user, into logs, into shell history, or into any tool input that is not strictly required.
- This skill only covers App Platform. Droplets, Spaces, Managed Databases, Managed Kubernetes, and App Platform Functions are not supported by the native flow — point those at Sazabi's OTLP intake instead.
</important>

## Phase 0: Preflight

Pick the Sazabi CLI command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. Confirm \`curl\` and \`jq\` are available — both are used for token sanity-checks and listing apps.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, ask the user whether to authenticate via browser (\`$SAZABI_CLI auth login\`) or with an existing token (\`$SAZABI_CLI auth save <token>\`). Do not print tokens back to the user.

The user needs:

1. A Sazabi project to receive the DigitalOcean telemetry.
2. A DigitalOcean account with access to the App Platform apps they want to monitor.
3. A browser to create a DigitalOcean personal access token.
4. At least one App Platform app with one or more services, workers, or jobs. Apps with only static sites or functions are filtered out of the picker.

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
\`\`\`

\`AskUserQuestion\`: which Sazabi project should receive the DigitalOcean telemetry? Capture the selected ID as \`SAZABI_PROJECT_ID\` and activate it:

\`\`\`sh
$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"
\`\`\`

### Detect already-complete setup

Before creating anything new, list existing DigitalOcean connections on this Sazabi project:

\`\`\`sh
$SAZABI_CLI data-sources connections list --type digital_ocean --json
\`\`\`

If a DigitalOcean connection already exists for the DigitalOcean account the user wants to onboard, reuse its \`id\` as \`DO_CONNECTION_ID\` and skip Phase 2 and Phase 4 — jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same DigitalOcean account.

## Phase 2: Create and capture the DigitalOcean token

Direct the user to create a token:

> Open **https://cloud.digitalocean.com/account/api/tokens** and click **Generate New Token**.
>
> - **Token name**: \`Sazabi\`
> - **Expiration**: Choose per security policy. No-expire is acceptable for automation.
> - **Scopes**: Either pick **Full Access**, or pick **Custom Scopes** and tick **every one** of the following — none of them are auto-selected:
>   - \`app:read\`
>   - \`app:update\`
>   - \`actions:read\`
>   - \`regions:read\`
>   - \`sizes:read\`
>
> DigitalOcean only displays the token once. If the user closes the page without copying it, they must create a new token.

\`AskUserQuestion\`: ask the user to paste the API token. Capture it as \`DO_TOKEN\`. Tokens are prefixed \`dop_v1_\`.

Sanity-check the token before continuing:

\`\`\`sh
curl -fsS -H "Authorization: Bearer $DO_TOKEN" \\
  "https://api.digitalocean.com/v2/apps?per_page=1" >/dev/null \\
  && echo "ok" || echo "invalid"
\`\`\`

If \`invalid\`, the token was revoked, copied incorrectly, expired, or missing the required scopes. Have the user recreate the token (covering all five Custom Scopes if not using Full Access) and retry. Do not print \`DO_TOKEN\` in any error output.

> The token is intentionally validated against \`/v2/apps\` rather than \`/v2/account\` because Custom Scopes tokens cannot access \`/v2/account\` — they can list apps just fine. Sazabi itself validates with the same call (\`GET /v2/apps?per_page=1\`) at connection-create time.

## Phase 3: Discover and pick App Platform apps

List every App Platform app the token can see, paginated. Filter out apps with no services, workers, or jobs — those are not provisionable by this flow.

\`\`\`sh
DO_APPS=$(
  page=1
  while :; do
    body=$(curl -fsS -H "Authorization: Bearer $DO_TOKEN" \\
      "https://api.digitalocean.com/v2/apps?page=\${page}&per_page=200") || exit 1
    printf '%s\\n' "$body"
    count=$(jq '.apps | length // 0' <<<"$body")
    [ "$count" -lt 200 ] && break
    page=$((page + 1))
  done | jq -s '
    [.[].apps[]?]
    | map({
        appId: .id,
        appName: .spec.name,
        componentCount: (
          ((.spec.services // []) | length) +
          ((.spec.workers  // []) | length) +
          ((.spec.jobs     // []) | length)
        ),
      })
    | map(select(.componentCount > 0))
  '
)

echo "$DO_APPS" | jq '.[] | {appId, appName, componentCount}'
\`\`\`

If the result is \`[]\`, the account has no App Platform apps with provisionable components. Tell the user to create an app (or add at least one service/worker/job to an existing app) before continuing.

\`AskUserQuestion\`: which DigitalOcean apps should Sazabi connect? After the user picks, narrow \`DO_APPS\` to the selected entries (preserving each \`appId\`/\`appName\` pair verbatim) before continuing to Phase 5. Example for a single chosen app:

\`\`\`sh
DO_APPS=$(jq -c --arg name "Production API" '[.[] | select(.appName == $name)]' <<<"$DO_APPS")
\`\`\`

## Phase 4: Create the Sazabi connection

Create the connection with the validated token. Sazabi calls \`GET /v2/apps?per_page=1\` again as part of \`validate\` before persisting — if the token was revoked between Phase 2 and now, this will fail with \`Invalid API token.\` and the user must recreate it.

\`\`\`sh
METADATA_JSON=$(jq -nc --arg token "$DO_TOKEN" '{apiToken: $token}')

DO_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\
  --type digital_ocean \\
  --metadata "$METADATA_JSON" \\
  --json | jq -r '.connectionId')
\`\`\`

The connection persists the (encrypted) token. It does **not** provision any DigitalOcean log destinations on its own — that happens per stream in Phase 5.

## Phase 5: Create one stream per app

For each entry in \`DO_APPS\`, call \`streams create\` with \`appId\` and \`appName\`. Stream creation enqueues the Temporal \`provisionStreamActivity\`, which calls the backend's \`provisionStream\` for digital_ocean — which in turn:

1. Mints a public key scoped to this stream.
2. \`GET /v2/apps/{appId}\` to fetch the current app spec.
3. \`PUT /v2/apps/{appId}\` with a new spec that adds (or replaces, by destination name) a \`log_destinations\` entry of type \`datadog\` on every service, worker, and job. The destination points at \`https://digital-ocean.<projectRegion>.intake.<intakeDomain>\` and uses the minted public key as the \`api_key\`.

\`\`\`sh
echo "$DO_APPS" | jq -c '.[]' | while IFS= read -r row; do
  APP_ID=$(jq -r '.appId' <<<"$row")
  APP_NAME=$(jq -r '.appName' <<<"$row")

  $SAZABI_CLI data-sources streams create \\
    --connection-id "$DO_CONNECTION_ID" \\
    --display-name "$APP_NAME" \\
    --config "$(jq -nc \\
      --arg id   "$APP_ID" \\
      --arg name "$APP_NAME" \\
      '{appId: $id, appName: $name}')" \\
    --json
done
\`\`\`

Field names are case-sensitive. The stream config must have \`appId\` and \`appName\`; the backend writes \`logDestinationName\` and \`publicKeyId\` back into the stored config once provisioning completes.

If \`streams create\` fails with a duplicate-display-name error, append a disambiguator (for example \`"$APP_NAME (logs)"\`) and retry that single stream — \`display-name\` is unique per connection.

## Phase 6: Verify and report

Provisioning runs asynchronously after \`streams create\` returns. Verify in two passes.

**Pass 1 — provisioning status.** Within a minute of the last \`streams create\`:

\`\`\`sh
$SAZABI_CLI data-sources streams list --connection-id "$DO_CONNECTION_ID" --json
\`\`\`

Each stream's status transitions to \`active\` once the backend finishes \`PUT /v2/apps/{appId}\`. Provisioning a stream that targets an app with no services/workers/jobs will fail with \`App has no provisionable components (services, workers, or jobs).\` — that means the user added a stream for an app that lost its provisionable components between Phase 3 and Phase 5.

**Pass 2 — telemetry arrival.** App Platform only ships logs when the underlying components actually run. Trigger traffic (deploy, redeploy, or hit a route on a service) or wait for natural traffic, then:

\`\`\`sh
$SAZABI_CLI logs tail --json --search "$APP_NAME"
\`\`\`

Confirm new records arrive tagged with the corresponding app name. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.

Report back to the user:

- The created \`DO_CONNECTION_ID\`.
- One line per stream: app name, current status.
- For any stream still non-\`active\`, say so explicitly and suggest re-running \`streams list\` in a minute.
- For any stream that errored out, call out the failed app name and offer to recreate just that stream after fixing the underlying issue.

Do not include \`DO_TOKEN\` in the summary.

## Troubleshooting

### Invalid or expired DigitalOcean token (\`401 Unauthorized\`)

The token was revoked, copied incorrectly, or expired. Recreate it at https://cloud.digitalocean.com/account/api/tokens with Full Access or all five Custom Scopes, and rerun Phase 2.

If the connection record already exists with a now-stale token, either delete it and rerun the skill from Phase 4, or update the connection metadata if your Sazabi CLI version supports \`connections update\` (check \`$SAZABI_CLI data-sources connections -h\`).

### Insufficient permissions (\`403 Forbidden\`)

The token is missing one or more required scopes. The \`app:update\` scope is not enough on its own — DigitalOcean treats \`app:read\`, \`actions:read\`, \`regions:read\`, and \`sizes:read\` as required companion scopes for app updates, and the Custom Scopes UI does **not** auto-select them. Recreate the token with **every** required scope checked (or pick Full Access) and rerun Phase 2.

### App not found (\`404\`) during provisioning

The app id captured in Phase 3 was deleted between listing and provisioning. Re-run Phase 3 to refresh \`DO_APPS\`, then retry the missing stream.

### Stream stuck in \`pending\` or \`provisioning\`

The Temporal worker may be lagging. Five minutes is a reasonable upper bound. Re-running \`streams create\` for the same \`(connectionId, displayName)\` will fail on duplicate display name — append a suffix like \`(retry)\` or delete the stuck stream first.

### No telemetry arriving after streams are \`active\`

A stream that is \`active\` on the Sazabi side does not emit logs unless the App Platform components actually produce output. Trigger a deploy or hit a route on the service. If logs still don't appear, the customer's app may have egress firewall rules blocking outbound HTTPS to \`digital-ocean.<region>.intake.<domain>\` — those need to allow Sazabi's intake host.

### Wrong workload type

This flow only covers App Platform apps. If the user wants telemetry from Droplets, Spaces, Managed Databases, Managed Kubernetes, or App Platform Functions, point them at Sazabi's OTLP intake (\`$SAZABI_CLI data-sources skill --type otel\`) instead — the native DigitalOcean flow does not provision those.

### Manual connection already exists without streams

If someone previously ran \`sazabi data-sources connections create --type digital_ocean\` without follow-up \`streams create\` calls, the connection exists but \`streams list --connection-id <id>\` returns empty. Reuse the existing \`DO_CONNECTION_ID\` and continue from Phase 5 to add streams; do not create a second connection for the same DigitalOcean account.
`;var xp=()=>{};var Ep=`## Overview

Stream stdout and stderr from your E2B sandboxes to Sazabi via OpenTelemetry. Capture the output of \`sandbox.runCode()\` calls and forward it to our intake in real time so AI agents can analyze execution output alongside the rest of your observability data.

## How it works

Configure an OpenTelemetry log exporter pointing at Sazabi's E2B intake URL, then attach \`onStdout\` / \`onStderr\` callbacks to your \`sandbox.runCode()\` calls. Each emitted line ships as an OTLP log record tagged with the sandbox ID and stream name.

Only output from code passed to \`sandbox.runCode()\` is captured — anything emitted by long-running processes started outside that call (for example via \`sandbox.commands.run\`) is not forwarded by this setup.

## Features

- OpenTelemetry log export for stdout and stderr from E2B sandboxes.
- Per-line log records tagged with sandbox ID and stream name.
- Real-time analysis of \`sandbox.runCode()\` output alongside your other telemetry.

## Requirements

- Ability to attach \`onStdout\` and \`onStderr\` callbacks to \`sandbox.runCode()\` calls.
- Access to set Sazabi public-key environment variables in the sandbox runtime.
- Only output from code passed to \`sandbox.runCode()\` is captured; long-running processes started outside that call are not forwarded by this setup.
`;var jp=()=>{};var Rp="# E2B Data Source Setup\n\nInstrument E2B sandboxes by attaching an **OpenTelemetry log exporter** that POSTs OTLP payloads to Sazabi's E2B intake URL. The exporter is configured in the host process where you create sandboxes; `onStdout` / `onStderr` callbacks passed to `sandbox.runCode()` emit one OTLP log record per output line.\n\n## Scope\n\nOnly output from code passed to `sandbox.runCode()` is captured. E2B's lifecycle webhook is not used by this setup, and the platform's `GET /sandboxes/{id}/logs/v2` endpoint is pull-only — any stdout/stderr emitted outside `runCode()` (for example by long-running processes spawned via `sandbox.commands.run`) is not forwarded.\n\n## Phase 1: Environment variables\n\n| Variable | Value |\n|----------|-------|\n| `SAZABI_INTAKE_URL` | `https://e2b.{projectRegion}.intake.{intakeDomain}/v1/logs` |\n| `SAZABI_PUBLIC_KEY`    | Sazabi `{publicKey}` |\n\nTreat `SAZABI_PUBLIC_KEY` as a bearer secret embedded in the OTLP exporter's `Authorization: Bearer ...` header. The `/v1/logs` path suffix is required.\n\n## Phase 2: Install dependencies\n\n**Node / TypeScript:**\n\n```bash\nnpm install @e2b/code-interpreter @opentelemetry/api-logs @opentelemetry/exporter-logs-otlp-http @opentelemetry/resources @opentelemetry/sdk-logs\n```\n\n**Python:**\n\n```bash\npip install e2b_code_interpreter opentelemetry-api opentelemetry-sdk opentelemetry-exporter-otlp-proto-http\n```\n\n## Phase 3: Wire the exporter\n\n1. Construct an `OTLPLogExporter` pointing at `SAZABI_INTAKE_URL` with `Authorization: Bearer ${SAZABI_PUBLIC_KEY}`.\n2. Wrap it in a `BatchLogRecordProcessor` and attach it to a `LoggerProvider`. On Node / TypeScript pass the processor through the `processors: [...]` option on the `LoggerProvider` constructor — the legacy `addLogRecordProcessor()` method was removed in `@opentelemetry/sdk-logs` 0.x → 2.x. On Python use `logger_provider.add_log_record_processor(...)`.\n3. Register the provider globally:\n   - Node: `logs.setGlobalLoggerProvider(loggerProvider)` and `logs.getLogger('e2b').emit({...})` for each output line.\n   - Python: `_logs.set_logger_provider(logger_provider)` plus a `LoggingHandler(logger_provider=...)` attached to the `e2b` logger (not root) with `logger.propagate = False`. Records emitted via `logging.getLogger('e2b').info(...)` are exported as OTLP log records via that bridge; unrelated app logs are not forwarded.\n\n## Phase 4: Create the sandbox and stream output\n\n1. Create the sandbox with `Sandbox.create()` (Node and Python). The bare `Sandbox()` constructor in Python requires positional arguments for an existing sandbox and is not the right entrypoint for new sandboxes.\n2. Pass `onStdout` / `onStderr` callbacks to **`sandbox.runCode(code, { ... })`** — not to `Sandbox.create()`. The callbacks fire once per output line; emit an OTLP log record from each, with attributes `e2b.stream` (`\"stdout\"` or `\"stderr\"`) and `e2b.sandbox_id`.\n3. When the code passed to `runCode()` is JavaScript, set `language: 'javascript'` in the options. The E2B code interpreter defaults to Python; without the override, JS code is evaluated as Python and stdout is silently empty.\n\n## Phase 5: Teardown\n\nIn a `finally` block (or equivalent):\n\n1. Call `sandbox.kill()` so the sandbox does not idle against the team's concurrent-sandbox quota until E2B's default timeout expires.\n2. Call `loggerProvider.shutdown()` (or the Python equivalent) so the batch processor flushes any pending records before the process exits.\n\nFollow the onboarding code tabs verbatim — they encode every required option above.\n";var Up=()=>{};var Kp=`## Overview

Forward logs from your Elastic Cloud deployment to Sazabi using Elastic Agent or Logstash. Elastic Cloud is a manual data source — no infrastructure is provisioned by Sazabi; you configure your shipper to push logs to Sazabi's OTLP intake.

## How it works

Logs flow from Elastic Agent (reading host files / system inputs) or Logstash (polling Elasticsearch indices) through a shipper that constructs the OTLP \`resourceLogs\` envelope and POSTs it to Sazabi's intake endpoint with your project's public key as the Bearer token.

## Features

- **Elastic Agent (OTel Collector mode)** — Run Elastic Agent 8.13+ with its embedded OpenTelemetry Collector (\`elastic-agent otel --config …\`) to ship logs over OTLP/HTTP. On 9.2+, attach the configuration as an **OpenTelemetry input package** to a Fleet Agent Policy for the managed equivalent.
- **Logstash** — Run Logstash 8.x/9.x outside Elastic Cloud, poll Elasticsearch indices with the \`elasticsearch\` input, and forward to Sazabi via the \`http\` output with a \`ruby\` filter that builds the OTLP envelope.
- No Sazabi-provisioned infrastructure — connect using a project public key.

## Requirements

- An Elastic Cloud deployment (hosted Elasticsearch) with at least one active index or data stream containing logs.
- One of: Elastic Agent 8.13+ running in OTel Collector mode, or Logstash 8.x/9.x running outside Elastic Cloud.
- Access to deploy and reconfigure the chosen forwarder.
`;var Fp=()=>{};var Gp=`# Elastic Cloud Data Source Setup

Walk the user through connecting an Elastic Cloud deployment to Sazabi so their Elasticsearch logs appear in the project.

**Principle:** Do the work. Only pause when the user must act (applying config, choosing a forwarding method, restarting a service). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight

This skill assumes Sazabi MCP tools are available. If \`list_projects\` or \`create_data_source_connection\` are unavailable, stop and explain that this workflow requires those tools.

The user needs:
1. A Sazabi project to receive the logs
2. An Elastic Cloud deployment with at least one active index or data stream
3. One of the following:
   - Elastic Agent 8.13+ (EDOT — runs the embedded OpenTelemetry Collector via \`elastic-agent otel\`; 9.2+ also accepts **OpenTelemetry input packages** attached to Fleet Agent Policies)
   - Logstash 8.x/9.x running outside Elastic Cloud (Docker, sidecar, or self-managed)

## Phase 1: Identify the Sazabi Project

If the target project is already clear from context, reuse it. Otherwise call \`list_projects\` and ask the user which project should receive the Elastic Cloud data.

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Choose the Forwarding Method

AskUserQuestion: Which forwarding method matches your stack?
- **Elastic Agent (OTel mode)** — If you run Elastic Agent 8.13+ and can run it in OTel Collector mode (\`elastic-agent otel --config <config>.yml\`), or have a Fleet Agent Policy on 9.2+ where you can attach an **OpenTelemetry input package**
- **Logstash** — If you run Logstash 8.x/9.x outside Elastic Cloud and want to forward an index

If the user asks about Vector, explain that Vector has no built-in source for polling Elasticsearch indices and therefore can't pull from Elastic Cloud directly. If they already run Vector elsewhere, point them at the standalone Vector data source in Sazabi instead.

## Phase 3: Provision the Connection and Get the Intake Key

Call the appropriate connection-creation tool with \`type: "elastic_cloud"\` and \`projectId: SAZABI_PROJECT_ID\`.

Capture the returned \`publicKey\` and construct the intake endpoint as \`https://elastic-cloud.<region>.intake.<domain>\`.

## Phase 4: Configure the Forwarder

### Elastic Agent (OTel Collector mode)

Elastic Agent 8.13+ embeds an OpenTelemetry Collector (EDOT). Sazabi is configured as an \`otlphttp\` exporter in a standard OTel Collector YAML, not as a Fleet output type — Fleet's \`Outputs\` UI does not expose an OTLP option.

Write the following to \`sazabi-otel.yml\`:

\`\`\`yaml
receivers:
  filelog:
    include: ["/var/log/**/*.log"]
    start_at: beginning

processors:
  resourcedetection:
    detectors: [env, system]
  batch: {}

exporters:
  otlphttp/sazabi:
    endpoint: https://elastic-cloud.<region>.intake.<domain>
    headers:
      Authorization: "Bearer <publicKey>"

service:
  pipelines:
    logs:
      receivers: [filelog]
      processors: [resourcedetection, batch]
      exporters: [otlphttp/sazabi]
\`\`\`

Two ways to run it:

- **Standalone:** \`elastic-agent otel --config sazabi-otel.yml\` (validate first with \`elastic-agent otel validate --config sazabi-otel.yml\`)
- **Fleet-managed (9.2+):** Attach the configuration as an **OpenTelemetry input package** to the Agent Policy.

Tune the \`filelog\` receiver's \`include\` paths to match the user's logs. Other standard OpenTelemetry receivers (\`hostmetrics\`, \`journald\`, \`kubernetesattributes\`, …) compose with the same \`exporters.otlphttp/sazabi\` block.

AskUserQuestion: Have you started Elastic Agent with this OTel Collector config?

### Logstash

Elastic Cloud does not run Logstash for the customer; Kibana's **Logstash Pipelines** page only stores pipeline definitions centrally. Logstash itself runs outside Elastic Cloud (Docker, sidecar, or self-managed VM).

Paste the following into the user's Logstash pipeline. Replace \`<your-deployment>\`, \`<region>\`, and the \`ELASTIC_PASSWORD\` env var with the user's Elasticsearch endpoint and credentials.

\`\`\`ruby
input {
  elasticsearch {
    hosts     => ["https://<your-deployment>.es.<region>.gcp.cloud.es.io:443"]
    user      => "elastic"
    password  => "\${ELASTIC_PASSWORD}"
    index     => "logs-*"
    query     => '{"query": {"range": {"@timestamp": {"gte": "now-1m"}}}}'
    schedule  => "* * * * *"
  }
}

filter {
  ruby {
    code => '
      require "json"
      ts_nanos = (event.get("@timestamp").to_f * 1_000_000_000).to_i.to_s
      svc      = event.get("[service][name]") || event.get("[app]") || "elastic"
      level    = (event.get("[log][level]") || event.get("[level]") || "INFO").upcase
      body     = event.get("[message]") || event.to_hash.to_json

      payload = {
        "resourceLogs" => [{
          "resource" => { "attributes" => [{ "key" => "service.name", "value" => { "stringValue" => svc.to_s } }] },
          "scopeLogs" => [{ "scope" => { "name" => "logstash" }, "logRecords" => [{ "timeUnixNano" => ts_nanos, "body" => { "stringValue" => body.to_s }, "severityText" => level.to_s }] }]
        }]
      }

      event.set("[@metadata][otlp_body]", payload.to_json)
    '
  }
}

output {
  http {
    url          => "https://elastic-cloud.<region>.intake.<domain>/v1/logs"
    http_method  => "post"
    format       => "message"
    content_type => "application/json"
    message      => "%{[@metadata][otlp_body]}"
    headers      => { "Authorization" => "Bearer <publicKey>" }
  }
}
\`\`\`

Notes:

- Nested field references use bracket syntax (\`[log][level]\`, not \`log.level\`) — Logstash's \`event.get\` treats dotted names as literal flat keys.
- The OTLP envelope is serialized in the ruby filter with \`payload.to_json\` and stashed in \`[@metadata][otlp_body]\`; the \`http\` output sends that exact JSON string via \`format => "message"\`. Using \`format => "json"\` with a \`mapping\` block stringifies the inner arrays/hashes and produces invalid OTLP.
- The \`ruby\` filter plugin ships with Logstash by default.
- For Elastic Cloud on AWS, swap the \`gcp.cloud.es.io\` host suffix for \`aws.elastic-cloud.com\`. For Azure, use \`azure.elastic-cloud.com\`.

AskUserQuestion: Have you started Logstash with this pipeline?

## Phase 5: Verify

After the user confirms the config is applied, check whether logs are arriving in the Sazabi project. If logs are not appearing within 2–3 minutes:

1. **Elastic Agent (OTel mode)**: Tail the agent's stdout/journal for \`otlphttp\` exporter errors. Confirm \`elastic-agent otel\` is active and the YAML path is correct; for the Fleet-managed flavor, confirm the Agent Policy with the OpenTelemetry input package was rolled out to running agents.
2. **Logstash**: Check Logstash's own logs for \`http\` output errors (401, connection refused, HTTP 4xx). Confirm \`schedule\` is firing.

## Troubleshooting

### No logs appearing

- Confirm the intake endpoint URL uses \`elastic-cloud\` as the subdomain.
- Verify the Bearer token contains no extra whitespace.
- For Logstash: confirm \`schedule\` is firing (check Logstash logs) and the \`http\` output is not returning 4xx.

### "Fleet > Outputs" has no OTLP option

That is expected — Fleet's \`Outputs\` UI exposes only \`elasticsearch\`, \`remote_elasticsearch\`, \`logstash\`, and \`kafka\`. Sazabi connects through Elastic Agent's embedded OpenTelemetry Collector (\`elastic-agent otel --config …\`), not a Fleet output. On 9.2+, attach the configuration as an **OpenTelemetry input package** on the Agent Policy for the managed equivalent.

### Logstash \`http\` output sends \`{"resourceLogs":"{...}"}\` (stringified)

If the captured request body looks like \`{"resourceLogs":"{resource={...}, scopeLogs=[...]}"}\`, the pipeline is using \`format => "json"\` with a \`mapping => { "resourceLogs" => "%{[resourceLogs]}" }\` block. The \`%{}\` interpolation stringifies arrays/hashes. Replace it with the \`format => "message"\` + \`[@metadata][otlp_body]\` pattern above.

### Serverless Elastic Cloud project

Serverless projects do not expose the Fleet Agent settings used above. Use Logstash running outside the serverless project instead.
`;var Bp=()=>{};var Mp=`## Overview

Forward logs from your Kubernetes cluster or any infrastructure to Sazabi using the Fluent Bit agent. Fluent Bit runs as a lightweight DaemonSet that collects container logs from every node and ships them to Sazabi's OTLP intake.

## How it works

Fluent Bit's built-in \`opentelemetry\` output plugin sends logs directly to Sazabi over HTTPS. No extra plugins or custom builds required — the plugin ships with Fluent Bit v2.0 and later.

## Features

- Log forwarding through Fluent Bit's built-in \`opentelemetry\` output plugin.
- Kubernetes DaemonSet support for collecting container logs from every node.
- HTTPS delivery directly to Sazabi's OTLP intake.

## Requirements

- Fluent Bit v2.0 or later with the built-in \`opentelemetry\` output plugin.
- Access to edit Fluent Bit configuration files, Helm values, or Kubernetes ConfigMaps.
- Outbound HTTPS connectivity from Fluent Bit agents to the Sazabi intake endpoint.
`;var Hp=()=>{};var qp=`# Fluent Bit Data Source Setup

Walk the user through connecting a Fluent Bit agent to Sazabi so logs from their Kubernetes cluster or infrastructure appear in the project.

**Principle:** Do the work. Only pause when the user must act (applying config, restarting the agent, choosing services). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight

This skill assumes Sazabi MCP tools are available. If \`list_projects\` or \`create_data_source_connection\` are unavailable, stop and explain that this workflow requires those tools.

The user needs:
1. A Sazabi project to receive the logs
2. Fluent Bit v2.0 or later running (or about to be deployed)
3. Access to modify the Fluent Bit configuration (classic config file or Helm values)

## Phase 1: Identify the Sazabi Project

If the target project is already clear from context, reuse it. Otherwise call \`list_projects\` and ask the user which project should receive the Fluent Bit data.

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Provision the Connection and Get the Intake Key

Call the appropriate connection-creation tool with \`type: "fluent_bit"\` and \`projectId: SAZABI_PROJECT_ID\`.

Capture the returned \`publicKey\` and \`intakeEndpoint\` (or construct the endpoint as \`https://fluent-bit.<region>.intake.<domain>\`).

## Phase 3: Configure Fluent Bit

Provide the user with the output block for their deployment method:

**Classic config (\`fluent-bit.conf\`):**
\`\`\`
[OUTPUT]
    name              opentelemetry
    match             *
    host              <intake-host>
    port              443
    logs_uri          /v1/logs
    header            Authorization Bearer <publicKey>
    tls               on
    tls.verify        on
\`\`\`

**Helm values (\`values.yaml\`):**
\`\`\`yaml
config:
  outputs: |
    [OUTPUT]
        name              opentelemetry
        match             *
        host              <intake-host>
        port              443
        logs_uri          /v1/logs
        header            Authorization Bearer <publicKey>
        tls               on
        tls.verify        on
\`\`\`

AskUserQuestion: Have you applied the config and restarted (or deployed) Fluent Bit?

## Phase 4: Verify

After the user confirms the config is applied, check whether logs are arriving. Look for recent log entries in the Sazabi project. If logs are not appearing within a few minutes:

1. Confirm Fluent Bit is running and the output block is active
2. Verify the \`match\` pattern covers the intended log streams
3. Check Fluent Bit logs for connection errors (TLS issues, auth failures)

## Troubleshooting

### No logs appearing

- Confirm the \`opentelemetry\` output plugin is enabled and the \`match\` pattern is correct
- Check for TLS errors; ensure port 443 is not blocked by a firewall
- Verify the \`Authorization\` header uses \`Bearer <key>\` format exactly

### Wrong Fluent Bit version

The \`opentelemetry\` output plugin requires Fluent Bit v2.0 or later. Run \`fluent-bit --version\` to confirm.
`;var Jp=()=>{};var Wp=`## Overview

Forward your Fly.io application logs directly to Sazabi for real-time monitoring of your globally distributed applications. Monitor app instances, machines, and volumes across Fly.io regions.

## How it works

Connect your Fly.io organization with a read-only org token, then select which apps to monitor. Sazabi provisions a per-stream public key and OTLP intake URL for each app.

You run a small Vector deployment inside your Fly organization that reads Fly's internal NATS log stream, wraps each event in the OTLP \`resourceLogs\` envelope, and forwards it to that intake URL. The setup docs include a ready-to-build Dockerfile and \`vector.toml\`. Our AI agents analyze application behavior, detect regional issues, and help you maintain global availability.

## Features

- Per-app log forwarding via a lightweight Vector deployment inside your Fly organization
- Reads Fly's internal NATS log stream for low-latency delivery
- OTLP envelope wrapping for structured log ingestion
- AI monitoring of application behavior and regional availability across Fly machines

## Requirements

- A read-only Fly.io org token scoped to the organization you want to monitor
- Access to the specific apps you want to forward logs from
- Ability to deploy and run a Vector instance inside your Fly organization (Dockerfile and \`vector.toml\` provided in the setup docs)
- Outbound HTTPS connectivity from your Fly organization to the Sazabi intake endpoint`;var Vp=()=>{};var Xp=`# Fly.io Data Source Setup

Walk the user through creating a Fly.io read-only API token scoped to their organization. The resulting token and org slug are entered into the Sazabi dashboard to enable native Fly.io log shipping.

**Principle:** Do the work. Only pause when the user must act (browser auth, org selection). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight - flyctl CLI

### Check flyctl installation

\`\`\`bash
which flyctl && flyctl version 2>/dev/null || echo "FLYCTL_NOT_FOUND"
\`\`\`

**If FLYCTL_NOT_FOUND:**

AskUserQuestion: The \`flyctl\` CLI is required but not installed. Would you like installation instructions?

- **Yes** - Show: "Install the Fly.io CLI from https://fly.io/docs/flyctl/install/ then restart your terminal and re-run this skill."
- **I'll install it now** - Wait for user to confirm, then re-check \`which flyctl\`.

Do not proceed until \`flyctl\` is available.

### Check authentication

\`\`\`bash
flyctl auth whoami 2>/dev/null
\`\`\`

**If not authenticated:** Tell the user a browser window will open for Fly.io authentication, then run:

\`\`\`bash
flyctl auth login
\`\`\`

This is interactive - the user must complete the browser flow. After it returns, verify:

\`\`\`bash
flyctl auth whoami 2>/dev/null
\`\`\`

## Phase 1: Select Organization

### List available organizations

\`\`\`bash
flyctl orgs list
\`\`\`

AskUserQuestion: Which Fly.io organization should Sazabi collect logs from?

Present the list of orgs. If only one org exists, confirm it with the user.

Capture the selected org slug as \`ORG_SLUG\`.

## Phase 2: Create Read-Only Token

### Check for existing Sazabi tokens

\`\`\`bash
flyctl tokens list -o \${ORG_SLUG} 2>/dev/null
\`\`\`

**If a token named "Sazabi" already exists:** AskUserQuestion: A Sazabi token already exists for this org. What would you like to do?

- **Create a new one** - proceed
- **Revoke and recreate** - \`flyctl tokens revoke <TOKEN_ID>\` then create fresh

### Create the token

\`\`\`bash
flyctl tokens create readonly -o \${ORG_SLUG} -n "Sazabi" --json
\`\`\`

Extract the \`token\` field from the JSON output. This is the API token the user will enter in Sazabi.

## Phase 3: Deliver the Token

Tell the user the token and org slug:

> Your Fly.io API token has been created.
>
> **Organization slug:** \`$ORG_SLUG\`
>
> **Next steps:**
>
> **Option A - Dashboard:** Go to Settings > Data Sources > Fly.io in the Sazabi dashboard. Enter the API token and organization slug (\`$ORG_SLUG\`), then click Connect.
>
> **Option B - CLI:** Use \`sazabi data-sources create-connection --type fly_io --metadata "{\\"apiToken\\":\\"<token>\\",\\"organizationSlug\\":\\"$ORG_SLUG\\"}"\` to create the connection via the CLI.

AskUserQuestion: Would you like to copy the token to your clipboard?

- **Yes** - copy:
  - macOS: \`echo -n "\${TOKEN}" | pbcopy\`
  - Linux (X11): \`echo -n "\${TOKEN}" | xclip -selection clipboard\`
  - Linux (Wayland): \`echo -n "\${TOKEN}" | wl-copy\`
- **No** - done

## Troubleshooting

### "failed retrieving org" error during token creation

The org slug may be incorrect. Re-run \`flyctl orgs list\` to verify available organizations.

### Token works but Sazabi shows "Invalid API token"

Read-only tokens are scoped to a single org. Verify the org slug entered in Sazabi matches the one used during token creation.

### "not authenticated" error

Run \`flyctl auth login\` to re-authenticate. Fly.io tokens expire - if the CLI token is stale, the browser flow will refresh it.
`;var Yp=()=>{};var Qp=`## Overview

Forward your Google Cloud Logging data to Sazabi for AI-powered observability. Monitor Cloud Functions, Cloud Run, GKE, Compute Engine, and other GCP services with real-time analysis and alerting.

## How it works

Provide a GCP service account key and Sazabi automatically provisions a Pub/Sub topic, log sink, and push subscription in your GCP project. Logs stream directly to Sazabi with no additional infrastructure to deploy or maintain.

Alternatively, you can set up forwarding manually using an OpenTelemetry Collector with a \`googlecloudpubsub\` receiver.

## Features

- Pub/Sub log delivery for real-time streaming from any GCP service
- Project-scoped log sinks: connect one or more GCP projects
- Automatic provisioning of Pub/Sub topic, log sink, and push subscription
- AI agents correlate events across Cloud Functions, Cloud Run, GKE, and Compute Engine

## Requirements

- A GCP service account key with permissions to create Pub/Sub topics, log sinks, and push subscriptions in the selected project
- Rights to create service account keys in your GCP project (if service account key creation is restricted, use the manual OpenTelemetry Collector path instead)
- Access to the GCP project(s) you want to stream logs from
- A workspace admin to enable the integration in Sazabi settings`;var Zp=()=>{};var tv=`# GCP Data Source Setup

Walk the user through creating a GCP service account with the correct permissions for Sazabi's native GCL (Google Cloud Logging) integration. The resulting JSON key can be pasted into the Sazabi dashboard or used via the API.

**Principle:** Do the work. Only pause when the user must act (browser auth, project selection). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight - gcloud CLI

### Check gcloud installation

\`\`\`bash
which gcloud && gcloud version --format=json 2>/dev/null || echo "GCLOUD_NOT_FOUND"
\`\`\`

**If GCLOUD_NOT_FOUND:**

AskUserQuestion: The \`gcloud\` CLI is required but not installed. Would you like installation instructions?

- **Yes** - Show: "Install the Google Cloud SDK from https://cloud.google.com/sdk/docs/install then restart your terminal and re-run this skill."
- **I'll install it now** - Wait for user to confirm, then re-check \`which gcloud\`.

Do not proceed until \`gcloud\` is available.

### Check authentication

\`\`\`bash
gcloud auth list --filter="status:ACTIVE" --format="value(account)" 2>/dev/null
\`\`\`

**If no active account:** Tell the user a browser window will open for Google authentication, then run:

\`\`\`bash
gcloud auth login
\`\`\`

This is interactive - the user must complete the browser flow. After it returns, verify:

\`\`\`bash
gcloud auth list --filter="status:ACTIVE" --format="value(account)"
\`\`\`

### Select target project

\`\`\`bash
CURRENT_PROJECT=$(gcloud config get-value project 2>/dev/null)
echo "Current project: \${CURRENT_PROJECT:-<none>}"
\`\`\`

AskUserQuestion: Which GCP project should Sazabi collect logs from?

- **Use current project (\`$CURRENT_PROJECT\`)** - if one is set
- **Choose a different project** - list available projects with \`gcloud projects list --format="table(projectId,name)"\` and let user pick
- **Enter project ID manually** - user types the project ID

Once selected:

\`\`\`bash
gcloud config set project <PROJECT_ID>
\`\`\`

Capture \`PROJECT_ID\` for all subsequent commands.

## Phase 1: Enable Required APIs

These APIs are needed on the service account's home project so connection validation and project listing succeed:

\`\`\`bash
gcloud services enable \\
  serviceusage.googleapis.com \\
  logging.googleapis.com \\
  pubsub.googleapis.com \\
  cloudresourcemanager.googleapis.com \\
  iam.googleapis.com
\`\`\`

This is idempotent - already-enabled APIs are skipped.

Verify:

\`\`\`bash
gcloud services list --enabled --filter="config.name:(serviceusage.googleapis.com OR logging.googleapis.com OR pubsub.googleapis.com OR cloudresourcemanager.googleapis.com OR iam.googleapis.com)" --format="table(config.name,state)"
\`\`\`

All five must show \`ENABLED\`. If any are missing, check permissions - the authenticated user needs \`roles/serviceusage.serviceUsageAdmin\` or \`roles/owner\` on the project.

> Sazabi re-enables these APIs on every target project at provisioning time using the service account, so APIs do not need to be pre-enabled on each project the user later selects for log streaming. The service account just needs \`roles/serviceusage.serviceUsageAdmin\` on those projects (granted in Phase 2 below).

## Phase 2: Create Service Account

### Prompt for name

AskUserQuestion: What should the service account be named?

- **Use default (\`sazabi-log-export\`)** - recommended
- **Custom name** - user provides a name (6-30 chars, must start with a lowercase letter, may contain lowercase letters, digits, and hyphens, must not end with a hyphen)

Capture as \`SA_NAME\`.

### Check if SA already exists

\`\`\`bash
gcloud iam service-accounts describe \${SA_NAME}@\${PROJECT_ID}.iam.gserviceaccount.com --format="value(email)" 2>/dev/null
\`\`\`

**If exists:** AskUserQuestion: A service account named \`$SA_NAME\` already exists. What would you like to do?

- **Use existing** - skip creation, proceed to role assignment
- **Delete and recreate** - \`gcloud iam service-accounts delete \${SA_NAME}@\${PROJECT_ID}.iam.gserviceaccount.com --quiet\` then create fresh

### Create the service account

\`\`\`bash
gcloud iam service-accounts create \${SA_NAME} \\
  --display-name="Sazabi Log Export" \\
  --description="Service account for Sazabi GCL native log pipeline provisioning"
\`\`\`

### Assign IAM roles

The service account needs these roles on the project:

| Role | Purpose |
|------|---------|
| \`roles/serviceusage.serviceUsageAdmin\` | Enable the required Google Cloud APIs on each target project at provisioning time |
| \`roles/logging.configWriter\` | Create and manage log sinks |
| \`roles/pubsub.admin\` | Create and manage Pub/Sub topics and subscriptions |
| \`roles/browser\` | List and browse projects (Cloud Resource Manager) |

\`\`\`bash
SA_EMAIL="\${SA_NAME}@\${PROJECT_ID}.iam.gserviceaccount.com"

gcloud projects add-iam-policy-binding \${PROJECT_ID} \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/serviceusage.serviceUsageAdmin" \\
  --quiet

gcloud projects add-iam-policy-binding \${PROJECT_ID} \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/logging.configWriter" \\
  --quiet

gcloud projects add-iam-policy-binding \${PROJECT_ID} \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/pubsub.admin" \\
  --quiet

gcloud projects add-iam-policy-binding \${PROJECT_ID} \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/browser" \\
  --quiet
\`\`\`

Each binding is idempotent - duplicates are ignored. If the user plans to stream logs from projects other than \`\${PROJECT_ID}\`, grant the same four roles to \`\${SA_EMAIL}\` on each of those target projects too.

### Generate JSON key

Each call to \`gcloud iam service-accounts keys create\` creates a new key. GCP enforces a limit of **10 user-managed keys per service account**. Before creating a new key, check for existing ones:

\`\`\`bash
gcloud iam service-accounts keys list \\
  --iam-account="\${SA_EMAIL}" \\
  --managed-by=user \\
  --format="table(name.basename(),validAfterTime,validBeforeTime)"
\`\`\`

**If user-managed keys already exist:** AskUserQuestion: This service account already has existing keys. What would you like to do?

- **Create a new key** - proceed (warn if at 9+ keys)
- **Delete old keys first** - \`gcloud iam service-accounts keys delete <KEY_ID> --iam-account="\${SA_EMAIL}" --quiet\` for each stale key, then create

Create the key to a well-known path in the user's home directory:

\`\`\`bash
KEY_DIR="\${HOME}/.config/sazabi"
mkdir -p "\${KEY_DIR}" && chmod 700 "\${KEY_DIR}"
KEY_FILE="\${KEY_DIR}/gcl-sa-key-\${PROJECT_ID}.json"
gcloud iam service-accounts keys create "\${KEY_FILE}" \\
  --iam-account="\${SA_EMAIL}"
chmod 600 "\${KEY_FILE}"
\`\`\`

## Phase 3: Deliver the Key

Tell the user where the key file is and how to use it:

> Your service account key has been saved to:
>
> \`$KEY_FILE\`
>
> **Next steps:**
>
> **Option A - Dashboard:** Go to Settings > Data Sources > Google Cloud Logging > "Service account" tab. Paste the contents of this file and click Connect.
>
> **Option B - CLI:** Use \`sazabi data-sources create-connection --type gcp --metadata "$(jq -cn --rawfile k "$KEY_FILE" '{serviceAccountKey: $k}')"\` to create the connection via the CLI. The metadata schema expects \`serviceAccountKey\` as a JSON-encoded string, so \`--rawfile\` reads the key file as a single string rather than splicing a bare object.
>
> **Option C - Clipboard:** Copy the key to your clipboard, then paste it into the dashboard.

AskUserQuestion: Would you like to copy the key to your clipboard?

- **Yes** - copy without mutation:
  - macOS: \`cat "\${KEY_FILE}" | pbcopy\`
  - Linux (X11): \`cat "\${KEY_FILE}" | xclip -selection clipboard\`
  - Linux (Wayland): \`cat "\${KEY_FILE}" | wl-copy\`
- **No** - done

The key file remains at \`$KEY_FILE\` for the user to manage. Do not delete it.

## Troubleshooting

### "Permission denied" on API enablement

The authenticated user needs \`roles/serviceusage.serviceUsageAdmin\` or \`roles/owner\`. Check:

\`\`\`bash
gcloud projects get-iam-policy \${PROJECT_ID} --flatten="bindings[].members" --filter="bindings.members:user:$(gcloud config get-value account)" --format="table(bindings.role)"
\`\`\`

### "Permission denied" on IAM binding

The authenticated user needs \`roles/resourcemanager.projectIamAdmin\` or \`roles/owner\` to grant roles.

### Service account key creation fails

Check if the org has a constraint blocking key creation:

\`\`\`bash
gcloud resource-manager org-policies describe iam.disableServiceAccountKeyCreation --project=\${PROJECT_ID} 2>/dev/null
\`\`\`

If enforced, the user must use Workload Identity Federation instead (manual setup flow in the dashboard).

### Key works but Sazabi shows "cannot access any active GCP projects"

The \`roles/browser\` role may not have propagated yet. IAM changes can take up to 60 seconds. Wait and retry.
`;var ev=()=>{};var ov=`## Overview

Forward logs and traces from your infrastructure to Sazabi using Grafana Alloy. Alloy runs as a DaemonSet on Kubernetes and uses a flexible River pipeline to collect and route telemetry.

## How it works

Alloy's \`otelcol.exporter.otlphttp\` component exports data to Sazabi using the OTLP/HTTP protocol. Wire the exporter into your existing pipeline by referencing it as an output in your processors or receivers.

## Features

- OTLP/HTTP export from Grafana Alloy to Sazabi.
- River pipeline integration with existing receivers and processors.
- Kubernetes-friendly deployment through the Grafana Helm chart.

## Requirements

- Access to edit the Alloy River configuration that defines your telemetry pipeline.
- Permission to update Helm values or ConfigMaps when Alloy runs on Kubernetes.
- Existing receiver and processor wiring that can route logs or traces to the Sazabi exporter.
`;var rv=()=>{};var iv=`# Grafana Alloy Data Source Setup

Walk the user through connecting Grafana Alloy to Sazabi so logs and traces from their infrastructure appear in the project.

**Principle:** Do the work. Only pause when the user must act (applying config, restarting Alloy, choosing pipeline components). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight

This skill assumes Sazabi MCP tools are available. If \`list_projects\` or \`create_data_source_connection\` are unavailable, stop and explain that this workflow requires those tools.

The user needs:
1. A Sazabi project to receive the telemetry
2. Grafana Alloy running (or about to be deployed)
3. Access to modify the Alloy River config (\`.alloy\` file or Helm values)

## Phase 1: Identify the Sazabi Project

If the target project is already clear from context, reuse it. Otherwise call \`list_projects\` and ask the user which project should receive the Alloy data.

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Provision the Connection and Get the Intake Key

Call the appropriate connection-creation tool with \`type: "grafana_alloy"\` and \`projectId: SAZABI_PROJECT_ID\`.

Capture the returned \`publicKey\` and construct the intake endpoint as \`https://grafana-alloy.<region>.intake.<domain>\`.

## Phase 3: Configure Grafana Alloy

Ask whether the user is deploying via Helm or using a standalone config file.

Give the user a complete pipeline — exporter alone is not enough. The minimum that actually ships data is an OTLP receiver, a batch processor, and the Sazabi exporter wired together. If the user already runs an \`otelcol.*\` pipeline in Alloy, they only need the exporter block and to add \`otelcol.processor.batch.default.input\` (or \`otelcol.exporter.otlphttp.sazabi.input\`) to their existing component's \`output\` list — but default to the full snippet so a fresh Alloy install starts emitting.

**Alloy config (\`.alloy\` file):**
\`\`\`hcl
otelcol.receiver.otlp "default" {
  grpc {}
  http {}

  output {
    logs   = [otelcol.processor.batch.default.input]
    traces = [otelcol.processor.batch.default.input]
  }
}

otelcol.processor.batch "default" {
  output {
    logs   = [otelcol.exporter.otlphttp.sazabi.input]
    traces = [otelcol.exporter.otlphttp.sazabi.input]
  }
}

otelcol.exporter.otlphttp "sazabi" {
  client {
    endpoint = "https://<intake-host>"
    headers = {
      "Authorization" = "Bearer <publicKey>",
    }
  }
}
\`\`\`

Swap \`otelcol.receiver.otlp\` for the OpenTelemetry receiver that matches the user's sources (\`otelcol.receiver.filelog\` for log files, \`otelcol.receiver.jaeger\` for Jaeger traces, etc.). Stay within \`otelcol.*\` receivers: Loki components (\`loki.source.*\`) emit to \`loki.LogsReceiver\` and are not type-compatible with \`otelcol.processor.batch.default.input\`.

**Helm values (\`values.yaml\`):**
\`\`\`yaml
alloy:
  configMap:
    content: |
      otelcol.receiver.otlp "default" {
        grpc {}
        http {}

        output {
          logs   = [otelcol.processor.batch.default.input]
          traces = [otelcol.processor.batch.default.input]
        }
      }

      otelcol.processor.batch "default" {
        output {
          logs   = [otelcol.exporter.otlphttp.sazabi.input]
          traces = [otelcol.exporter.otlphttp.sazabi.input]
        }
      }

      otelcol.exporter.otlphttp "sazabi" {
        client {
          endpoint = "https://<intake-host>"
          headers = {
            "Authorization" = "Bearer <publicKey>",
          }
        }
      }
\`\`\`

AskUserQuestion: Have you applied the config and reloaded (or deployed) Alloy?

## Phase 4: Verify

After the user confirms the config is applied, check whether telemetry is arriving in the Sazabi project. If nothing appears within a few minutes:

1. Check Alloy's built-in UI (default port 12345) for component health
2. Verify the \`otelcol.exporter.otlphttp\` component shows successful exports
3. Confirm the exporter is referenced in at least one upstream component's \`forward_to\`

## Troubleshooting

### No data appearing

- Open the Alloy UI (\`http://localhost:12345\`) and inspect the exporter component for errors
- Verify the \`forward_to\` wiring connects your receivers/processors to the Sazabi exporter
- Check that the endpoint URL uses HTTPS and the correct region subdomain

### Authentication errors

- Confirm the \`Authorization\` header value is \`Bearer <publicKey>\` (note the space)
- Regenerate the intake key from the Sazabi dashboard if it was rotated
`;var nv=()=>{};var cv=`## Overview

Forward telemetry from your Inngest-served app to Sazabi for comprehensive observability of your background jobs and event-driven workflows. Monitor function executions, retries, and event flows.

## How it works

Inngest itself does not export logs or traces; this integration instead instruments the application that hosts the Inngest serve handler. Add the OpenTelemetry SDK to that app, point it at Sazabi's intake endpoint with a public key, and optionally wrap your Inngest client with \`extendedTracesMiddleware()\` for per-step spans, database query traces, and HTTP request spans.

Once connected, telemetry streams in real-time. Our AI agents analyze function performance, detect failure patterns, and help you optimize your event-driven architecture.

## Features

- OpenTelemetry logs and traces from the application that hosts your Inngest serve handler.
- Optional per-step spans, database query traces, and HTTP request spans through \`extendedTracesMiddleware()\`.
- Real-time visibility into function executions, retries, and event-driven workflows.

## Requirements

- Access to instrument the host application that serves your Inngest functions.
- Permission to set OpenTelemetry environment variables in that application's runtime.
- Optional access to wrap your Inngest client with \`extendedTracesMiddleware()\` for deeper trace coverage.
`;var av=()=>{};var hv=`# Inngest Data Source Setup

Connect Inngest telemetry to a Sazabi project by instrumenting the **customer application that serves \`/api/inngest\`** with the OpenTelemetry SDK, pointing it at Sazabi's Inngest OTLP intake with a Sazabi public key, and (optionally) wrapping the Inngest client with \`extendedTracesMiddleware()\` for richer per-step spans.

**Inngest itself does not export logs or traces.** Its only outbound observability integrations are Datadog metrics and Prometheus metrics. All telemetry that reaches Sazabi through this source is emitted by the customer's own app runtime (Vercel, Fly, Render, Docker, bare Node/Bun, etc.). The OTEL env vars below go on **that runtime**, never inside the Inngest Cloud dashboard.

**Principle:** Do the work. Only pause when the user must act: choosing a Sazabi project, editing their own application code or runtime env, syncing the app in Inngest Cloud, or confirming a policy decision. If a step fails, diagnose and retry before asking the user to intervene.

<important>
Use AskUserQuestion only for user-owned boundaries: choosing a Sazabi project, editing app code, setting runtime env vars, syncing the app in Inngest Cloud, or approving a policy choice. Use CLI discovery before asking.
</important>

## Phase 0: Preflight

Use the Sazabi CLI. First choose the command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. In the Sazabi agent runtime, \`sazabi\` is pre-installed and pre-authenticated — skip auth checks. Locally, fall back to \`bunx @sazabi/cli\` instead of asking the user to install globally.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, ask the user whether to authenticate with browser login (\`$SAZABI_CLI auth login\`) or an existing token (\`$SAZABI_CLI auth save <token>\`). Do not echo tokens back.

Confirm the user actually serves Inngest from their own application (Next.js route, Express route, Bun/Node handler, etc.). If they only run Inngest Cloud functions written through the Inngest dashboard with no self-hosted serve endpoint, OTEL env-var instrumentation has nowhere to live — stop and tell the user.

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
$SAZABI_CLI projects use <project-id>
\`\`\`

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Detect existing setup

Avoid creating duplicate connections.

\`\`\`sh
$SAZABI_CLI data-sources connections list --type inngest --json
\`\`\`

If an \`inngest\` connection already exists for the project, reuse \`CONNECTION_ID\` from the listing. The connection's plaintext public key is only returned by \`connections create --json\` — if the customer still has it stored on the runtime, skip to Phase 4 for OTLP values. If the key is lost, disconnect (\`$SAZABI_CLI data-sources connections disconnect <id>\`) and re-create the connection in Phase 3 to mint a fresh connection-scoped key. Inngest is single-connection per project (\`getConnectionIdentity()\` is \`"manual"\`).

## Phase 3: Create the Sazabi connection

If no connection exists yet, create one. Inngest is a manual OTLP source, so \`metadata\` is empty. The create response includes both the new connection ID **and** the connection-linked public key — capture both now; the plaintext key value is only returned at creation time.

\`\`\`sh
CONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\
  --type inngest \\
  --metadata '{}' \\
  --json)
CONNECTION_ID=$(echo "$CONNECTION_JSON" | jq -r '.connectionId')
PUBLIC_KEY=$(echo "$CONNECTION_JSON" | jq -r '.publicKey')
\`\`\`

**Do not print \`PUBLIC_KEY\` back to the user.** Reference it as \`<your-public-key>\` in any guidance text.

If creation fails because a connection already exists, fall back to the listing in Phase 2 to recover \`CONNECTION_ID\`, but the connection-linked plaintext key is no longer retrievable — disconnect the existing connection (\`$SAZABI_CLI data-sources connections disconnect <id>\`) and re-create it to mint a fresh connection-scoped key. Do **not** mint a standalone \`public-keys create\` key here: standalone keys are not attached to the data-source connection, so disconnecting the Inngest connection later will not deactivate them and telemetry can continue through an orphaned key.

## Phase 4: Resolve the OTLP endpoint

Capture the project region from \`projects list --json\` (look up \`SAZABI_PROJECT_ID\` in the \`items[]\` array — the row exposes a \`region\` field). The intake domain comes from the deploy stage — detect it from \`settings view --json\` instead of hardcoding production:

\`\`\`sh
REGION=$($SAZABI_CLI projects list --json \\
  | jq -r --arg id "$SAZABI_PROJECT_ID" '.items[] | select(.id == $id) | .region')

# Staging / development CLIs point at sazabi.dev; production points at sazabi.com.
CLI_SETTINGS=$($SAZABI_CLI settings view --json)
if echo "$CLI_SETTINGS" | jq -e '(.apiBaseUrl // .apiDomain // .intakeDomain // "") | endswith("sazabi.dev")' >/dev/null 2>&1; then
  INTAKE_DOMAIN="sazabi.dev"
else
  INTAKE_DOMAIN="sazabi.com"
fi

OTLP_ENDPOINT="https://inngest.\${REGION}.intake.\${INTAKE_DOMAIN}"
\`\`\`

\`auth whoami --json\` does **not** expose region or intake domain — do not try to read them from there.

## Phase 5: Instrument the customer application

Direct the user to the runtime that serves \`/api/inngest\` (Next.js, Express, Bun/Node, Fastify, etc.). All edits happen there — not in Inngest Cloud.

### Install the OpenTelemetry SDK

Install the SDK and exporters appropriate for the runtime. For Node/Bun:

\`\`\`sh
bun add @opentelemetry/api \\
  @opentelemetry/sdk-node \\
  @opentelemetry/auto-instrumentations-node \\
  @opentelemetry/exporter-trace-otlp-proto \\
  @opentelemetry/exporter-logs-otlp-proto
\`\`\`

Bootstrap the SDK **before** the Inngest handler boots — typically a preload file or \`NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"\` on the start command. Other languages: follow the standard OpenTelemetry quickstart for that runtime.

### Optional: enable Extended Traces

If the user wants step-level workflow spans, database query spans, and HTTP request spans inside Inngest functions, wrap the Inngest client with \`extendedTracesMiddleware()\`:

\`\`\`typescript
import { Inngest } from "inngest";
import { extendedTracesMiddleware } from "inngest/experimental";

export const inngest = new Inngest({
  id: "<app-id>",
  middleware: [extendedTracesMiddleware()],
});
\`\`\`

This is opt-in. The baseline OTEL SDK alone already captures request/handler spans.

### Set runtime env vars

Set these on the **runtime that hosts the serve handler** (Vercel project env vars, Fly secrets, Render env, Docker \`-e\`, plain shell, etc.) — not in Inngest Cloud:

| Variable | Value |
| --- | --- |
| \`OTEL_EXPORTER_OTLP_ENDPOINT\` | \`https://inngest.<projectRegion>.intake.<intakeDomain>\` |
| \`OTEL_EXPORTER_OTLP_HEADERS\` | \`Authorization=Bearer <your-public-key>\` |
| \`OTEL_EXPORTER_OTLP_PROTOCOL\` | \`http/protobuf\` |

The OpenTelemetry SDK appends \`/v1/logs\` and \`/v1/traces\` per signal. Do **not** set per-signal endpoint overrides unless the SDK requires it.

AskUserQuestion: confirm the env vars are set on the runtime that serves \`/api/inngest\` and that the deploy has rolled out.

## Phase 6: Sync the app in Inngest Cloud

After the new code is deployed, the user must sync the app in Inngest Cloud so Inngest picks up the redeployed serve URL.

Direct the user to:

> Go to **https://app.inngest.com**, select the target **Environment**, open **Apps**, and click **Sync New App** (or **Sync App** when re-syncing). Paste the deployed serve URL — default path \`/api/inngest\`, or whatever the customer passes to \`serve({ servePath })\`.

This step does not move telemetry — it only refreshes Inngest's function registry. Skip it only when the user confirms the serve URL is unchanged since the last sync.

## Phase 7: Verify

Trigger an Inngest function execution (send an event, run a cron, or invoke a function manually from Inngest Cloud) and confirm new records arrive in Sazabi:

\`\`\`sh
$SAZABI_CLI logs tail --services <service-name>
\`\`\`

Or check the project intake in the dashboard. If nothing arrives within a minute:

- The OTLP endpoint host must be \`inngest.<projectRegion>.intake.<intakeDomain>\` exactly. A typo there routes through the generic OTEL adapter (or fails entirely).
- \`OTEL_EXPORTER_OTLP_HEADERS\` must start with \`Authorization=Bearer\` followed by a space — missing the prefix is the most common 401 cause.
- The OpenTelemetry SDK must initialize **before** the Inngest serve handler. If the SDK is required from the same module as the handler, the exporter may not be attached when the first request arrives.
- Confirm the deploy actually shipped the new env vars (Vercel needs a redeploy after env changes; Fly needs \`fly deploy\` after \`fly secrets set\`).
- Confirm corporate egress allows HTTPS to \`*.intake.sazabi.com\` / \`*.intake.sazabi.dev\`.

## Phase 8: Report

Summarize:

- The \`CONNECTION_ID\` created or reused.
- The OTLP endpoint string (safe to print).
- That \`PUBLIC_KEY\` is set in the customer runtime (do **not** print the value).
- Whether Extended Traces middleware was added.
- Whether the app was synced in Inngest Cloud.

Tell the user that the Sazabi \`inngest\` source ingests OTLP **logs** and **traces** today. OTLP metrics posted to this endpoint are accepted but not yet stored.

## Troubleshooting

### 401 / unauthorized at the intake

The \`Authorization\` header is missing the \`Bearer\` token prefix (note the required trailing space), the public key belongs to a different Sazabi project, or the key (or its parent connection) was deactivated. The connection-linked plaintext key is only returned by \`data-sources connections create --json\`; if the customer lost it, disconnect the existing Inngest connection and re-create it to mint a fresh connection-scoped key.

### Telemetry shows up under "OpenTelemetry" instead of "Inngest"

The endpoint subdomain is wrong. It must be \`inngest.<projectRegion>.intake.<intakeDomain>\`, not the generic \`otlp.<projectRegion>.intake.<intakeDomain>\`. The intake adapter id is keyed off the hostname.

### No spans for individual function steps

The customer added the OTEL SDK but did not wrap the Inngest client with \`extendedTracesMiddleware()\`. Without it, only top-level handler spans appear. Adding the middleware is opt-in and code-side; an env-var-only setup will not enable it.

### Inngest Cloud shows the app but no new functions appear

The serve URL was not re-synced after the deploy. Run **Sync App** again with the deployed URL in **Apps**. This is independent of telemetry — Sazabi can be receiving logs/traces even while Inngest Cloud has a stale function list.

### Connection already exists

\`getConnectionIdentity()\` for Inngest is \`"manual"\`, so a project gets exactly one \`inngest\` connection. If \`data-sources connections create --type inngest\` returns a duplicate error, reuse the existing connection from \`data-sources connections list --type inngest --json\`.
`;var lv=()=>{};var sv=`## Overview

Forward OpenTelemetry traces from your LangChain application to Sazabi for end-to-end LLM observability. Monitor chains, tool calls, and model interactions.

## How it works

LangChain itself does not emit OpenTelemetry. You wire in an instrumentation package (for example [OpenInference](https://github.com/Arize-ai/openinference)) at startup; it intercepts LangChain's callbacks and produces OTel spans for chains, prompts, tools, and LLM calls. Setting the three OTLP environment variables points those spans at Sazabi's intake — no other code changes required.

Sazabi's intake accepts OTLP/HTTP traces (protobuf or JSON).

## Features

- Chain, agent, and tool-call traces with input/output capture
- LLM call spans with provider, prompt template, and (when the model returns it) token-count attributes
- Supported in Python and TypeScript/JavaScript via OpenInference (the languages that currently ship both an OpenTelemetry SDK and a LangChain instrumentation package)
- Supports LangGraph through OpenInference

## Requirements

- OpenInference or equivalent OpenTelemetry instrumentation package for LangChain installed in the application
- Instrumentation initialized at application startup before LangChain is imported
- Access to set environment variables in the application's deploy or runtime environment
- Supported Python or TypeScript/JavaScript runtime with an OpenTelemetry SDK available`;var uv=()=>{};var gv=`# LangChain Data Source Setup

Wire a LangChain application to a Sazabi project via **manual OTLP**. LangChain core does not emit OpenTelemetry on its own, so an **OpenInference** instrumentation package (Python or TypeScript) must be installed and started before the host process imports LangChain. Sazabi mints a project-scoped public key and accepts OTLP/HTTP traces at the \`langchain\` intake subdomain.

**Principle:** Do the work. Only pause when the user must act — picking a Sazabi project, pasting the public key into their secrets store, or running their app to emit a span. If a step fails, diagnose and retry before asking the user to intervene.

<important>
Use AskUserQuestion only for user-owned boundaries: choosing a Sazabi project, choosing Python vs TypeScript, confirming the host runtime where env vars need to land, or approving browser auth. Use CLI discovery before asking.
</important>

## Phase 0: Preflight

Pick the Sazabi CLI command prefix once and use \`$SAZABI_CLI\` for every Sazabi call below:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

In Sazabi agent runtimes \`sazabi\` is pre-installed and pre-authenticated. Outside those runtimes, prefer \`bunx @sazabi/cli\` over asking the user to install globally.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If unauthenticated, ask the user to pick \`$SAZABI_CLI auth login\` (browser) or \`$SAZABI_CLI auth save <token>\` (existing token). Never print tokens back.

Duplicate detection happens at the start of Phase 2 after the project is finalized — do not pre-check here, since the active project may change in Phase 1.

## Phase 1: Choose the Sazabi project

If the active project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
SAZABI_PROJECT_ID="<project-id>"
$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"
\`\`\`

\`SAZABI_PROJECT_ID\` is referenced in Phase 4 to derive the project region — capture it from the chosen \`id\` rather than re-deriving later. If the active project was already set before this run, recover it with:

\`\`\`sh
SAZABI_PROJECT_ID=$($SAZABI_CLI projects list --json | jq -r '.items[] | select(.active) | .id')
if [ -z "$SAZABI_PROJECT_ID" ] || [ "$SAZABI_PROJECT_ID" = "null" ]; then
  echo "No active Sazabi project. Run: $SAZABI_CLI projects list --json, then $SAZABI_CLI projects use <project-id>" >&2
  exit 1
fi
\`\`\`

LangChain traces only land in this project.

## Phase 2: Create or reuse the manual connection

With \`SAZABI_PROJECT_ID\` finalized, check whether a langchain connection already exists for this project before creating a new one:

\`\`\`sh
EXISTING_CONNECTION_ID=$($SAZABI_CLI data-sources connections list --type langchain --json \\
  | jq -r '.items[0].connectionId // empty')
\`\`\`

If \`EXISTING_CONNECTION_ID\` is non-empty, set \`CONNECTION_ID="$EXISTING_CONNECTION_ID"\` and proceed to Phase 3.

Otherwise, LangChain is a \`manualKey\` source. There is no provider API token to collect, \`validateConnection\` always succeeds, and the CLI command requires no metadata fields. The connection does not return a public key — that is minted separately in Phase 3.

\`\`\`sh
CONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\
  --type langchain \\
  --metadata '{}' \\
  --json)
CONNECTION_ID=$(printf '%s' "$CONNECTION_JSON" | jq -r '.connectionId')
\`\`\`

**If the create call still returns an "already exists" error** (a race with another operator), re-run the \`connections list --type langchain\` call above and reuse the returned \`connectionId\`.

## Phase 3: Mint and capture the public intake key

Public keys are project-scoped and not returned by \`connections create\`. Mint one tied to this LangChain integration:

\`\`\`sh
PUBLIC_KEY_JSON=$($SAZABI_CLI public-keys create "LangChain" --json)
PUBLIC_KEY=$(printf '%s' "$PUBLIC_KEY_JSON" | jq -r '.publicKey.value')
\`\`\`

Capture as \`PUBLIC_KEY\`. The key value is the bearer secret for OTLP \`Authorization\` headers — **never echo it back to the user, log it, or include it in chat transcripts.** Refer to it as \`<your-public-key>\` when guiding the user.

\`public-keys create\` does not enforce unique names and always mints a fresh key, so this step can be re-run safely. The raw \`value\` is returned only at create time — \`public-keys list --json\` shows metadata (id, name, status) but never the secret. If a previously minted value has been lost, mint a new one and deactivate the old by id:

\`\`\`sh
$SAZABI_CLI public-keys list --json
$SAZABI_CLI public-keys deactivate <old-key-id>
\`\`\`

## Phase 4: Determine the OTLP endpoint

The Sazabi intake host for LangChain has the shape:

\`\`\`text
https://langchain.<projectRegion>.intake.<intakeDomain>
\`\`\`

Where \`intakeDomain\` is \`sazabi.com\` for production and \`sazabi.dev\` for development/staging. Read the project region from \`projects list --json\` (the same project picked in Phase 1):

\`\`\`sh
$SAZABI_CLI projects list --json | jq -r --arg id "$SAZABI_PROJECT_ID" '.items[] | select(.id == $id) | .region'
\`\`\`

Compose \`OTLP_ENDPOINT\` from that region plus the intake domain for the current environment (\`sazabi.com\` for production, \`sazabi.dev\` otherwise). Do not hardcode the region — always derive it from the active project.

The OpenTelemetry SDK appends \`/v1/traces\` automatically. Do not include it in the env-var value.

## Phase 5: Install and initialise OpenInference in the user's app

Ask the user whether the LangChain app is Python or TypeScript and confirm the file where the app boots (Python entrypoint, or the first module Node loads — typically a \`tracing.ts\`/\`instrumentation.ts\` imported before any LangChain import).

### Python

Install dependencies:

\`\`\`sh
pip install openinference-instrumentation-langchain \\
  opentelemetry-sdk \\
  opentelemetry-exporter-otlp-proto-http
\`\`\`

Add the bootstrap block to the entrypoint **before** any \`from langchain ...\` / \`from langgraph ...\` import:

\`\`\`python
from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from openinference.instrumentation.langchain import LangChainInstrumentor

provider = TracerProvider(resource=Resource.create({"service.name": "my-langchain-app"}))
provider.add_span_processor(BatchSpanProcessor(OTLPSpanExporter()))
trace.set_tracer_provider(provider)

LangChainInstrumentor().instrument()
\`\`\`

\`opentelemetry-exporter-otlp-proto-http\` only emits \`http/protobuf\`. Match \`OTEL_EXPORTER_OTLP_PROTOCOL\` accordingly in Phase 6.

### TypeScript

Install dependencies:

\`\`\`sh
npm install @arizeai/openinference-instrumentation-langchain \\
  @opentelemetry/sdk-trace-node \\
  @opentelemetry/exporter-trace-otlp-proto \\
  @langchain/core
\`\`\`

Add a bootstrap module (for example \`instrumentation.ts\`) and import it **before** any \`@langchain/*\` import in the app entrypoint:

\`\`\`typescript
import { NodeTracerProvider, BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { Resource } from "@opentelemetry/resources";
import { LangChainInstrumentation } from "@arizeai/openinference-instrumentation-langchain";
import * as CallbackManagerModule from "@langchain/core/callbacks/manager";

const provider = new NodeTracerProvider({
  resource: new Resource({ "service.name": "my-langchain-app" }),
  spanProcessors: [new BatchSpanProcessor(new OTLPTraceExporter())],
});
provider.register();

// REQUIRED: LangChain.js has no auto-instrumentable module structure. Registering
// \`new LangChainInstrumentation()\` via NodeSDK's \`instrumentations\` array or
// \`registerInstrumentations({ instrumentations: [...] })\` silently produces zero
// spans. The CallbackManager module must be patched by hand.
new LangChainInstrumentation().manuallyInstrument(CallbackManagerModule);
\`\`\`

\`@opentelemetry/exporter-trace-otlp-proto\` emits \`http/protobuf\`. If the user prefers JSON, swap to \`@opentelemetry/exporter-trace-otlp-http\` and set \`OTEL_EXPORTER_OTLP_PROTOCOL=http/json\` in Phase 6 — do not mix them.

## Phase 6: Set the three OTLP environment variables

Set these as environment variables in the runtime that hosts the LangChain process (Docker, Fly, Render, Vercel, Kubernetes, etc.) — not on the developer's laptop alone unless that is where the app actually runs. The values below are env-file (\`KEY=value\`) entries; substitute \`<OTLP_ENDPOINT>\` and \`<PUBLIC_KEY>\` with the values captured in Phase 4 and Phase 3:

\`\`\`dotenv
OTEL_EXPORTER_OTLP_ENDPOINT=<OTLP_ENDPOINT>
OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer <PUBLIC_KEY>
OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
\`\`\`

If exporting from a shell for local testing, quote the value containing a space:

\`\`\`sh
export OTEL_EXPORTER_OTLP_ENDPOINT="$OTLP_ENDPOINT"
export OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer $PUBLIC_KEY"
export OTEL_EXPORTER_OTLP_PROTOCOL="http/protobuf"
\`\`\`

Constraints:

- The runtime-visible value of \`OTEL_EXPORTER_OTLP_HEADERS\` must be exactly \`Authorization=Bearer <publicKey>\` — no wrapping quotes in the parsed value, no trailing whitespace, and no \`:\` separator (the OTel spec uses \`=\`). Most secrets stores write \`KEY=value\` literally; do not paste quote marks into the value field.
- \`OTEL_EXPORTER_OTLP_ENDPOINT\` must be the bare host (no \`/v1/traces\` suffix); the SDK appends the signal path.
- \`OTEL_EXPORTER_OTLP_PROTOCOL\` must match the exporter package actually installed (see Phase 5). The env var alone does not switch encodings in Node.js — the exporter package decides.

Tell the user where to put the env vars in their platform's secrets store. Do not paste the public key into chat or commit it to source control.

## Phase 7: Verify and report

Have the user trigger a short chain, agent, or LangGraph run against the deployed/booted process. Then check Sazabi for spans within ~60 seconds:

\`\`\`sh
$SAZABI_CLI threads list --limit 5 --json
$SAZABI_CLI logs tail --services langchain --json
\`\`\`

Successful intake returns \`{ "success": true, "processed": N }\` on the OTel exporter's debug logs and produces spans whose \`openinference.span.kind\` attribute is one of \`CHAIN\`, \`LLM\`, \`TOOL\`, or \`AGENT\`.

The summary the agent should print on success:
- The created \`CONNECTION_ID\`.
- The \`PUBLIC_KEY\` reference (\`<your-public-key>\` — never the literal value).
- The resolved \`OTLP_ENDPOINT\`.
- The chosen language (Python or TypeScript) and the file where the bootstrap was added.

If nothing arrives in Sazabi:

- Confirm the OpenInference bootstrap runs **before** any LangChain import. A missing or out-of-order import is the most common cause of zero spans.
- In TypeScript, re-check that \`manuallyInstrument(CallbackManagerModule)\` was called. Registering via \`NodeSDK#instrumentations\` produces no spans.
- Confirm \`OTEL_EXPORTER_OTLP_HEADERS\` is \`Authorization=Bearer …\` (not \`Authorization: Bearer …\`, not \`Bearer …\` alone).
- Confirm the host is \`langchain.<region>.intake.<domain>\` for the same project that owns \`PUBLIC_KEY\`. A 401 means the key is from a different project or was deactivated — recreate via Phase 3.
- Run \`$SAZABI_CLI data-sources connections get $CONNECTION_ID --json\` to verify the connection still belongs to the expected project.

## Troubleshooting

### TypeScript: zero spans despite no errors

\`@arizeai/openinference-instrumentation-langchain\` does **not** support OpenTelemetry's \`registerInstrumentations\` path because \`@langchain/core/callbacks/manager\` is not a hookable CJS module. Replace any \`new NodeSDK({ instrumentations: [new LangChainInstrumentation()] })\` or \`registerInstrumentations({ instrumentations: [...] })\` wiring with the explicit \`manuallyInstrument(CallbackManagerModule)\` call shown in Phase 5.

### 401 Unauthorized from intake

\`PUBLIC_KEY\` is wrong, deactivated, or scoped to a different project. Re-run Phase 3 with the project from Phase 1.

### Spans arrive but \`service.name\` is blank

The Resource was not attached to the \`TracerProvider\`. Re-check that \`Resource.create({ "service.name": "…" })\` (Python) or \`new Resource({ "service.name": "…" })\` (TypeScript) is passed into the provider constructor.

### Manual connection already exists

If \`connections create --type langchain\` rejects with a duplicate, reuse the existing \`connectionId\` from \`connections list --type langchain --json\` instead of creating a second connection. One LangChain connection per project is enough — additional public keys can be minted under it for separate environments.
`;var dv=()=>{};var mv=`## Overview

Stream your Mastra agent traces directly to Sazabi for comprehensive observability of your AI agent workflows. Monitor agent executions, tool calls, and LLM interactions with real-time analysis.

## How it works

Install \`@mastra/otel-exporter\` alongside \`@mastra/core\` and \`@mastra/observability\`, then wire the exporter into your \`Mastra\` instance through the \`Observability\` config. Mastra's \`Observability\` system handles span creation and batching, so you don't need to set up the OpenTelemetry SDK manually.

Once configured, traces flow automatically to our platform. AI agents analyze agent behavior, detect failures, and help you optimize your Mastra-powered applications.

## Features

- Mastra agent trace export through \`@mastra/otel-exporter\`.
- Visibility into agent executions, tool calls, and LLM interactions.
- Real-time trace analysis without manual OpenTelemetry SDK setup.

## Requirements

- Ability to install \`@mastra/otel-exporter\` alongside your Mastra application dependencies.
- Permission to deploy the application code that configures Mastra's \`OtelExporter\`.
- Access to set Sazabi intake environment variables in the application runtime.
`;var bv=()=>{};var pv="# Mastra Data Source Setup\n\nExport Mastra observability spans/logs by pointing `@mastra/otel-exporter` at Sazabi’s Mastra OTLP ingest host.\n\n## Phase 1: Environment variables\n\nSet (values come directly from dashboard copy helpers):\n\n| Variable | Purpose |\n|---------|---------|\n| `SAZABI_INTAKE_URL` | Must be `https://mastra.{projectRegion}.intake.{intakeDomain}/v1/traces` |\n| `SAZABI_API_KEY` | Raw **`{publicKey}`** (distinct from Bearer prefix; code adds Bearer if needed—match template you adopt) |\n\n## Phase 2: Mastra Observability bootstrap\n\nPut the snippet in `src/mastra/index.ts` (the canonical Mastra entry; `mastra build` and `mastra studio deploy` only look here, `mastra dev` accepts `--dir` as an override). The `mastra` binding **must be exported** — Mastra's generated dev/build entry does `import { mastra } from '#mastra'`, and an unexported `const mastra` fails the build with `MISSING_EXPORT`.\n\nInstantiate `Observability` with an `OtelExporter` referencing `process.env.SAZABI_INTAKE_URL` and Bearer headers wired to `process.env.SAZABI_API_KEY`, per the Mastra snippets in-dashboard:\n\n```typescript\n// src/mastra/index.ts\nimport { Mastra } from \"@mastra/core\";\nimport { OtelExporter } from \"@mastra/otel-exporter\";\nimport { Observability } from \"@mastra/observability\";\n\nexport const mastra = new Mastra({\n  observability: new Observability({\n    configs: {\n      default: {\n        serviceName: \"my-mastra-app\",\n        exporters: [\n          new OtelExporter({\n            provider: {\n              custom: {\n                endpoint: process.env.SAZABI_INTAKE_URL,\n                protocol: \"http/json\",\n                headers: {\n                  Authorization: `Bearer ${process.env.SAZABI_API_KEY}`,\n                },\n              },\n            },\n          }),\n        ],\n      },\n    },\n  }),\n});\n```\n\nMatch `protocol`, headers, and path suffix to what the onboard wizard emits.\n\n## Phase 3: Verify\n\nRun Mastra workloads (agents/tools) generating spans; inspect Sazabi for OTLP payloads tagged with Mastra adapters.\n";var yv=()=>{};var fv=`## Overview

Forward Postgres logs from your Neon database to Sazabi using Neon's OpenTelemetry integration. Database errors, warnings, and connection events stream into Sazabi alongside the rest of your application telemetry, so failures in the database surface in the same place as the application code that triggered them.

## How it works

Neon ships per-project log export through its OpenTelemetry integration. Once configured, your Neon project pushes Postgres logs to Sazabi's OTLP intake. From the Neon docs, exported logs include "error messages, warnings, connection events, and system notifications." Logs are organized under the \`service.name\` you configure in Neon.

Once connected, logs stream in near real-time (Neon: "within a few minutes"). Sazabi's AI agents correlate Postgres errors with application traces, surface connection-pool issues, and help you root-cause database incidents without hopping between tools.

## Features

- Postgres errors, warnings, connection events, and system notifications via OTLP
- Logs grouped by your chosen \`service.name\` for cross-project filtering
- HTTP/2 transport with bearer auth (no agent or sidecar to deploy)
- Compute lifecycle aware: while a Scale-to-Zero compute is suspended, no logs flow — wake it by running a query

## Requirements

- A Neon project on the **Scale** plan. The OpenTelemetry integration is Scale-only, and both the integration and its Postgres logs export are currently in Beta.
- Permission to add integrations to the Neon project
- A short, stable \`service.name\` to identify this project's logs in Sazabi`;var vv=()=>{};var kv=`# Neon Data Source Setup

Connect Neon Postgres logs to a Sazabi project via Neon's **OpenTelemetry** integration over **OTLP HTTP** with a Sazabi-minted bearer key. Logs only — no metrics or traces. Drive the Sazabi side with the CLI; the user must finish in Neon's console because the OpenTelemetry integration is configured exclusively in Neon's UI.

**Principle:** Do the work. Only pause when the user must act: choosing the Sazabi project, opening the Neon console to add the integration, or confirming the \`service.name\` to apply. If a step fails, diagnose and retry before asking the user to intervene.

<important>
Use AskUserQuestion only for user-owned boundaries: choosing a Sazabi project, opening Neon's console to paste OTLP fields, or naming the \`service.name\` resource attribute. Use CLI discovery before asking.
</important>

## Phase 0: Preflight

Confirm prerequisites before touching either side.

- Neon project is on the **Scale** plan. Free, Launch, and Business plans cannot enable the OpenTelemetry integration. The integration and its Postgres logs export are both in **Beta**.
- The user has **Admin** access on the Neon project (required to add integrations).
- A Sazabi project exists to receive the telemetry.

Pick the Sazabi CLI command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. In Sazabi agent runtimes \`sazabi\` is pre-installed and pre-authenticated. Otherwise prefer \`bunx @sazabi/cli\` over asking the user to install globally.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If unauthenticated, ask the user whether to log in via browser (\`$SAZABI_CLI auth login\`) or paste an existing token (\`$SAZABI_CLI auth save <token>\`). Do not echo the token back.

Detect existing setup before creating anything new:

\`\`\`sh
$SAZABI_CLI data-sources connections list --type neon --json
\`\`\`

If a Neon connection already exists for the active project, reuse it: capture its \`connectionId\` as \`CONNECTION_ID\`, skip Phase 2's \`connections create\` step, and mint a fresh bearer key by running the **Bearer key was lost or never captured** procedure in Troubleshooting before continuing to Phase 3. The plaintext bearer key from the original \`connections create\` call is not retrievable after the fact (\`CreateDataSourceConnectionOutputSchema\` in \`packages/public-api-contracts/src/data-sources.ts\` — "only shown once"), so reuse always requires minting a new key. Do **not** recreate the connection — that orphans the integration the user already pasted into Neon.

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already correct from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
$SAZABI_CLI projects use <project-id>
\`\`\`

Capture the chosen project as \`SAZABI_PROJECT_ID\` and read the project's \`region\` field — the regional intake hostname embeds it:

\`\`\`sh
PROJECT_REGION=$($SAZABI_CLI projects list --json | jq -r --arg id "$SAZABI_PROJECT_ID" '.items[] | select(.id==$id) | .region')
\`\`\`

If \`PROJECT_REGION\` is empty, the project lookup failed (wrong \`SAZABI_PROJECT_ID\`, project deleted, or unauthenticated). Stop and re-check the project selection before continuing — an empty region produces a malformed OTLP host like \`https://neon..intake.sazabi.com\` that Neon will reject:

\`\`\`sh
if [ -z "$PROJECT_REGION" ]; then
  echo "Could not resolve region for project $SAZABI_PROJECT_ID" >&2
  exit 1
fi
\`\`\`

Select the intake domain from \`auth whoami\`'s API host. Production uses \`sazabi.com\`; staging and development use \`sazabi.dev\`. If the API base URL is unknown, default to \`sazabi.com\`.

\`\`\`sh
INTAKE_DOMAIN=sazabi.com   # use sazabi.dev for staging/development
\`\`\`

## Phase 2: Create the Sazabi connection and capture the bearer key

Neon is a manual-setup source: Sazabi cannot reach into Neon's API to install the integration. \`data-sources connections create\` mints a project-scoped **public key** which doubles as the OTLP bearer token Neon will send on every request. The plaintext value is **only returned by this create call** — Sazabi does not store it in retrievable form afterward.

\`\`\`sh
CONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\
  --type neon \\
  --metadata '{}' \\
  --json)
\`\`\`

Read the response into shell variables — do **not** print \`PUBLIC_KEY\` to the user or into chat output:

\`\`\`sh
CONNECTION_ID=$(printf '%s' "$CONNECTION_JSON" | jq -r '.connectionId')
PUBLIC_KEY=$(printf '%s' "$CONNECTION_JSON" | jq -r '.publicKey')
OTLP_ENDPOINT="https://neon.\${PROJECT_REGION}.intake.\${INTAKE_DOMAIN}"
\`\`\`

If \`connectionId\` is empty or the create command errors, surface the message and stop — do not retry blindly, since a partially created connection will be rolled back automatically and the user may need to fix Sazabi auth or project scope first.

## Phase 3: Configure the Neon OpenTelemetry integration

Direct the user to Neon's console — these fields can only be set in Neon's UI.

> Open **https://console.neon.tech/app/projects** and select the Neon project you want monitored. In the left nav, open **Integrations**. On the **OpenTelemetry** card, click **Add** to open the configuration sidebar.

Fill the **Add OpenTelemetry integration** sidebar exactly. Field labels match Neon's UI 1:1:

| Neon field | Value |
|---|---|
| **Select data to export** → \`Postgres logs\` | Enabled |
| **Select data to export** → \`Metrics\` | Disabled (this Sazabi source is logs-only) |
| **Protocol** | \`HTTP\` |
| **Endpoint** | \`$OTLP_ENDPOINT\` (Neon appends \`/v1/logs\` itself — do **not** add the path) |
| **Authentication** | \`Bearer\` |
| **Token** | \`$PUBLIC_KEY\` (Neon prepends the \`Bearer \` scheme on every request) |
| **Resource attributes** → \`service.name\` | A short, stable identifier such as \`neon-postgres-prod\`. Optional but strongly recommended; required to disambiguate when more than one Neon project ships to the same Sazabi project. |

AskUserQuestion only if \`service.name\` is ambiguous (multiple Neon projects in the same Sazabi project). Otherwise default to \`neon-postgres\` or a name derived from the Neon project name. Record the chosen value as \`SERVICE_NAME\` so Phase 4 can scope its tail filter to it.

Click **Save** in the Neon sidebar.

**If Neon rejects the form:**

- \`Plan upgrade required\` / 402 — the project is not on Scale. Stop and tell the user; recreating on the Sazabi side will not help.
- \`Invalid endpoint\` — the URL must be \`https://neon.<region>.intake.<domain>\` with no path. Strip \`/v1/logs\` if Neon shows it in the field.
- \`Authentication failed\` on Neon's connectivity check — \`$PUBLIC_KEY\` was mis-pasted or the connection was rolled back. Verify the connection still exists with \`$SAZABI_CLI data-sources connections get $CONNECTION_ID --json\`. If the connection is gone, restart from Phase 2; otherwise re-copy \`$PUBLIC_KEY\` exactly (no surrounding whitespace, no \`Bearer \` prefix).

## Phase 4: Verify

Trigger a Postgres event so Neon emits a log line, then confirm it lands in Sazabi.

1. If the Neon compute uses **Scale to Zero** and is currently suspended, wake it. Run any query from the Neon **SQL Editor** or have the user's app open a connection — logs only flow while the compute is active.
2. From the Neon **SQL Editor**, run something that emits a Postgres log line (a failed query is fastest):
   \`\`\`sql
   SELECT 1/0;
   \`\`\`
3. Tail logs for the project, scoped to the \`service.name\` you configured in Neon. \`--services\` filters on the OTEL \`service.name\` (matched in tail-broadcaster against \`otel_service_name\`), so pass the exact value you pasted into Neon's **Resource attributes**:
   \`\`\`sh
   $SAZABI_CLI logs tail --services "$SERVICE_NAME" --json
   \`\`\`
   If \`service.name\` was left blank in Neon, drop the flag and tail unscoped (\`$SAZABI_CLI logs tail --json\`) — \`--services neon\` will not match because the adapter name is not the service-name attribute. Expect a record within ~1 minute.

If nothing arrives after a few minutes:

- Re-open the integration sidebar in Neon and check the **status panel** for OTLP export errors.
- Confirm **Protocol** is \`HTTP\` (gRPC is not supported by Sazabi's Neon intake).
- Confirm **Endpoint** is \`https://neon.\${PROJECT_REGION}.intake.\${INTAKE_DOMAIN}\` with no trailing path.
- Confirm **Authentication** is \`Bearer\` and the Token field contains exactly \`$PUBLIC_KEY\`.
- Confirm the compute is active — \`SELECT 1\` from the SQL Editor wakes it.

## Phase 5: Report

Summarize without leaking secrets:

- Created connection: \`$CONNECTION_ID\`.
- Neon project monitored + \`service.name\` configured.
- Verification: one query run, first log seen at \`<timestamp>\` (or "no logs yet — compute may still be warming").

Do **not** print \`$PUBLIC_KEY\` in the summary. If the user explicitly needs to re-copy it, mint a fresh key (see Troubleshooting) instead of echoing the original.

## Troubleshooting

### Neon project is not on Scale

Beta OpenTelemetry export is gated on the Scale plan. Upgrade in Neon Console → **Billing** before continuing; nothing on the Sazabi side unblocks this.

### Bearer key was lost or never captured

The plaintext key is only returned by the original \`connections create\` call. If \`$PUBLIC_KEY\` was lost (or you are reusing an existing connection from Phase 0), mint a new key on the same connection via \`streams create\` and update Neon's **Token** field:

\`\`\`sh
STREAM_JSON=$($SAZABI_CLI data-sources streams create \\
  --connection-id "$CONNECTION_ID" \\
  --display-name "Neon OTLP" \\
  --json)
PUBLIC_KEY=$(printf '%s' "$STREAM_JSON" | jq -r '.publicKey')
\`\`\`

\`streams create --json\` returns \`{ "streamId": "...", "publicKey": "..." }\` for manual-only sources like Neon (\`CreateDataSourceStreamOutputSchema\` in \`packages/public-api-contracts/src/data-sources.ts\`). Paste the new \`$PUBLIC_KEY\` into the existing Neon integration's **Token** field and save — do not delete the Sazabi connection, which would orphan historical intake attribution and force the user to rebuild the integration in Neon from scratch.

### Compute suspended (Scale to Zero)

While a Neon compute is suspended, no logs ship. This is expected behavior, not a setup failure. Waking the compute resumes log flow.

### Logs arriving but tagged to the wrong Neon project

Multiple Neon projects sharing one Sazabi connection are distinguished only by \`service.name\`. If two Neon projects use the same \`service.name\`, their logs collide in Sazabi. Set a unique \`service.name\` per Neon project (for example \`neon-checkout-db\`, \`neon-analytics-db\`) in each Neon integration's **Resource attributes** section.
`;var Iv=()=>{};var $v=`## Overview

Forward your Netlify deployment logs directly to Sazabi for real-time monitoring of your Jamstack applications. Track builds, functions, and edge handlers with AI-powered analysis.

## How it works

Configure a Log Drain in your Netlify site settings to forward logs to Sazabi's intake endpoint using the "General HTTP endpoint" option. Netlify will batch log records and post them in near real-time.

Once configured, logs stream automatically. Our AI agents analyze build performance, detect function errors, and help you optimize your Netlify deployments.

## Features

- **Traffic logs**: Site visitor requests for assets and pages
- **Function logs**: Serverless function invocations and execution details
- **Edge Function logs**: Edge function console output and execution
- **Deploy logs**: Build and deployment information

## Requirements

- Netlify Enterprise plan required for Log Drains — contact Netlify sales to upgrade if needed
- Site-level permissions to configure Log Drains under Logs & Metrics in the Netlify site dashboard`;var wv=()=>{};var Tv=`# Netlify Data Source Setup

Connect a Netlify site to a Sazabi project by configuring a Netlify **Log Drain** (General HTTP endpoint, JSON) that posts to Sazabi's regional intake with a Sazabi-minted bearer key. Netlify has no API to provision drains for a third party — the user must configure the drain in the Netlify UI. The Sazabi side of the flow runs through the CLI.

**Principle:** Do the work. Pause for the user only at boundaries: confirming Netlify Enterprise entitlement, choosing the Sazabi project, pasting the drain into Netlify, and verifying.

<important>
Use AskUserQuestion only for user-owned boundaries: confirming the Netlify plan, choosing a Sazabi project, performing the Netlify UI steps, and confirming verification. Never print the bearer public key back to the user in chat output.
</important>

## Phase 0: Preflight

### Confirm Netlify Enterprise

Netlify **Log Drains require a Netlify Enterprise plan** (Logs & Metrics → Log Drains is gated). Self-serve and Pro tiers do not see the **Log Drains** UI.

AskUserQuestion: Is this Netlify team on the **Enterprise** plan? If not, stop — direct the user to Netlify sales (<https://www.netlify.com/enterprise/>). Do not continue; the drain UI will not be available.

### Pick the Sazabi CLI prefix

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. In the Sazabi agent runtime \`sazabi\` is pre-installed and pre-authenticated; otherwise fall back to \`bunx @sazabi/cli\` rather than asking the user to install globally.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If unauthenticated, run \`$SAZABI_CLI auth login\` (browser) or \`$SAZABI_CLI auth save <token>\`. Do not echo tokens back.

## Phase 1: Choose the Sazabi project

If the active CLI project is already correct, reuse it. Otherwise list and switch:

\`\`\`sh
$SAZABI_CLI projects list --json
PROJECT_JSON=$($SAZABI_CLI projects use <project-id> --json)
\`\`\`

Capture the selected project ID as \`SAZABI_PROJECT_ID\` and the AWS region as \`PROJECT_REGION\` (read from \`PROJECT_JSON | jq -r '.project.region'\`). The drain will deliver into this project and \`PROJECT_REGION\` (for example \`us-east-1\`) is required for the intake URL in Phase 3.

### Detect already-complete setup

Before creating anything new, list existing Netlify connections on this Sazabi project:

\`\`\`sh
$SAZABI_CLI data-sources connections list --type netlify --json
\`\`\`

The list envelope is \`{"items":[...]}\`. If one already exists for the Netlify site the user wants to forward, reuse its \`id\` as \`CONNECTION_ID\` and skip Phase 2; jump to Phase 2.5 to mint a fresh bearer key, then continue from Phase 3.

## Phase 2: Create the Sazabi connection

The Netlify backend is manual — \`validateConnection\` always succeeds and the connection itself carries no Netlify-side credentials. Create the connection; Sazabi auto-mints a project-scoped public key in the same call and returns the plaintext bearer **once**:

\`\`\`sh
CONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\
  --type netlify \\
  --metadata '{}' \\
  --json)
CONNECTION_ID=$(jq -r '.connectionId' <<<"$CONNECTION_JSON")
PUBLIC_KEY=$(jq -r '.publicKey'    <<<"$CONNECTION_JSON")
\`\`\`

\`CONNECTION_JSON\` is \`{"connectionId":"...","publicKey":"<plaintext>"}\`. The plaintext is only returned on creation — \`public-keys get\` intentionally omits it. **Do not echo \`PUBLIC_KEY\` back to the user in chat.**

### Phase 2.5: Mint a bearer key for an existing connection

Only run this if Phase 1 found an existing Netlify connection and you skipped Phase 2. \`public-keys create --json\` returns the plaintext under \`.publicKey.value\`:

\`\`\`sh
KEY_JSON=$($SAZABI_CLI public-keys create "Netlify drain" --json)
PUBLIC_KEY=$(jq -r '.publicKey.value' <<<"$KEY_JSON")
\`\`\`

The new key is project-scoped and works for any Netlify drain pointed at this project's intake URL.

## Phase 3: Resolve the intake URL

The Netlify drain target is \`https://netlify.<PROJECT_REGION>.intake.<INTAKE_DOMAIN>\` where:

- \`PROJECT_REGION\` was captured in Phase 1 (for example \`us-east-1\`).
- \`INTAKE_DOMAIN\` mirrors the Sazabi environment the CLI is pointed at: \`sazabi.com\` in production, \`staging.sazabi.dev\` in staging, \`development.sazabi.dev\` in development. If unsure, infer from \`$SAZABI_CLI auth whoami --json | jq -r '.credential.apiBaseUrl // empty'\` or the \`apiBaseUrl\` in \`~/.sazabi/settings.json\` — the intake domain is the same suffix as the API host (\`api.sazabi.com\` -> \`sazabi.com\`, \`api.staging.sazabi.dev\` -> \`staging.sazabi.dev\`).

\`\`\`sh
INTAKE_URL="https://netlify.\${PROJECT_REGION}.intake.\${INTAKE_DOMAIN}"
\`\`\`

Capture the resolved URL as \`INTAKE_URL\`.

## Phase 4: Configure the Netlify Log Drain

Direct the user to Netlify. Field names below match the Netlify UI 1:1.

> 1. Open <https://app.netlify.com> and select the site to forward.
> 2. Go to **Logs & Metrics** → **Log Drains** in the site sidebar.
> 3. Click **Enable a log drain** (or **Add log drain** if drains already exist).
> 4. Set **Service** to **General HTTP endpoint**.
> 5. Select the **Log types** to forward. Available types: **Traffic logs**, **Function logs**, **Edge Function logs**, **Deploy logs**. Recommend all four unless the user has a reason to limit.
> 6. Fill the fields with these exact values:

| Netlify field | Value |
| --- | --- |
| Full URL | \`INTAKE_URL\` (e.g. \`https://netlify.us-east-1.intake.sazabi.com\`) |
| Authorization header name | \`Authorization\` |
| Authorization header value | \`Bearer <PUBLIC_KEY>\` |
| Log Drain Format | \`JSON\` |

> 7. Click **Connect**.

The user must paste \`PUBLIC_KEY\` into the Netlify form. Render it for the user via a clipboard-style instruction ("paste the value Sazabi minted") rather than echoing it inline in chat.

## Phase 5: Verify

Generate Netlify activity so the drain emits a batch within the next minute or two:

- Hit the site URL (traffic logs).
- Invoke a function endpoint (function logs).
- Trigger a deploy (deploy logs).

Then confirm new records in Sazabi for the project:

\`\`\`sh
$SAZABI_CLI logs tail --json --search "netlify" &
TAIL_PID=$!
sleep 30
kill $TAIL_PID
\`\`\`

You can also confirm the connection metadata and that public keys exist on the project:

\`\`\`sh
$SAZABI_CLI data-sources connections get "$CONNECTION_ID" --json
$SAZABI_CLI public-keys list --json
\`\`\`

If nothing arrives within ~5 minutes, work through Troubleshooting.

## Phase 6: Report

Summarize:

- \`CONNECTION_ID\` (do not summarize the public key value).
- Log types enabled in the Netlify drain.
- Pending verification status if no logs have arrived yet (note Netlify batches drain delivery; it can take a few minutes).

## Troubleshooting

### Netlify UI has no Log Drains entry

The team is not on Enterprise, or the user does not have **Owner** / **Team Owner** permissions on the site. Confirm both with the user before retrying.

### Drain saved but no logs in Sazabi

- The **Full URL** must be exactly \`https://netlify.<projectRegion>.intake.<intakeDomain>\` with no trailing path. Do not append \`/v1/logs\` — the Netlify intake adapter handles routing.
- The **Authorization** header value must be \`Bearer <PUBLIC_KEY>\` (literal \`Bearer\` prefix + space + key).
- **Log Drain Format** must be \`JSON\`. Other formats (NDJSON, syslog) will be rejected.
- At least one **Log type** must be selected.
- The Netlify site must have recent activity. Idle sites emit nothing.

### 401 from the intake

\`PUBLIC_KEY\` is wrong, scoped to a different Sazabi project, or has been deactivated. Mint a new key with \`$SAZABI_CLI public-keys create "Netlify drain"\`, update the Netlify drain's Authorization header to the new bearer value, and retry verification.

### Duplicate connection already exists

If \`$SAZABI_CLI data-sources connections list --type netlify --json\` (envelope \`{"items":[...]}\`) already shows a connection for this project, reuse its \`id\` as \`CONNECTION_ID\`. The original plaintext bearer key was only shown once at create time — mint a fresh project-scoped key via Phase 2.5 (\`$SAZABI_CLI public-keys create "Netlify drain" --json\`, read \`.publicKey.value\`) and continue from Phase 3.
`;var _v=()=>{};var Sv=`## Overview

Forward LLM trace spans from OpenRouter to Sazabi using OpenRouter's built-in OpenTelemetry Collector destination. No SDK install or code changes are required — OpenRouter exports OTLP trace spans for every generation directly to Sazabi.

## How it works

In the OpenRouter dashboard you enable Broadcast and add an OpenTelemetry Collector destination pointing at Sazabi's regional OTLP intake. OpenRouter pushes a trace span for each generation request, and Sazabi attributes the span to your project via the public key in the destination's \`Authorization\` header. The endpoint host follows the pattern \`openrouter.<region>.intake.<domain>\` — \`<domain>\` is \`sazabi.com\` for production projects and \`sazabi.dev\` for development and staging.

## Features

- Trace spans for every OpenRouter model call, with model and upstream-provider attribution
- Token counts and cost per request
- Prompt and completion content (unless OpenRouter's **Privacy Mode** is enabled)
- Optional sampling rate and per-API-key filtering controlled in OpenRouter

## Requirements

- OpenRouter account with Broadcast access enabled
- Ability to configure an OpenTelemetry Collector destination in OpenRouter Settings > Observability
- Project-scoped public key and intake endpoint provided by Sazabi during connection setup
- Note: prompt and completion content is withheld when OpenRouter's Privacy Mode is active`;var Ov=()=>{};var Av=`# OpenRouter Data Source Setup

Connect OpenRouter to a Sazabi project by adding an **OpenTelemetry Collector** destination in OpenRouter's Broadcast settings that points at Sazabi's regional OTLP intake. OpenRouter exports trace spans for every generation directly from its own infrastructure — no SDK install or code changes in the user's app.

## Phase 1: Sazabi-side

1. Open **Settings > Data sources > OpenRouter** for the correct Sazabi project, or run \`sazabi data-sources connections create --type openrouter\` in the CLI.
2. Sazabi mints a project-scoped **public key** and renders the **Endpoint** and **Headers** values for OpenRouter to copy.
3. Keep the public key out of chat output. Reference it as \`<your-public-key>\` when guiding the user.

## Phase 2: OpenRouter dashboard

1. In OpenRouter, open **Settings > Observability** (<https://openrouter.ai/settings/observability>) and toggle **Enable Broadcast** on if it is not already on.
2. Click the edit icon next to **OpenTelemetry Collector**. See the [OpenRouter docs](https://openrouter.ai/docs/guides/features/broadcast/otel-collector) for full reference.
3. Paste the values from Sazabi:
   - **Endpoint**: \`https://openrouter.<region>.intake.<intake-domain>/v1/traces\` (use the value Sazabi rendered — \`<intake-domain>\` is \`sazabi.com\` for production, \`sazabi.dev\` for development/staging).
   - **Headers**: \`{"Authorization": "Bearer <your-public-key>"}\` (JSON object, not the env-var format).
4. Optional: leave **Privacy Mode** off so Sazabi receives prompt and completion content; leave **Sampling Rate** at \`1\`; leave **API Key Filter** empty to forward every OpenRouter API key.

## Phase 3: Test and save

1. Click **Test Connection** in OpenRouter. The destination only saves if the test passes — a green check confirms Sazabi accepted the trace.
2. Save the destination to enable forwarding.

If Test Connection fails:

- The endpoint must end in \`/v1/traces\` and use the \`openrouter.<region>.intake.<intake-domain>\` host. The generic \`otlp.<region>.intake.<intake-domain>\` host also accepts the trace but attributes it to the generic OpenTelemetry source instead of OpenRouter.
- The headers must be valid JSON containing an \`Authorization\` field with the \`Bearer\` prefix.
- A 401 means the public key is wrong or was minted under a different project — recreate it in Sazabi and update the destination.

## Phase 4: Verify

Trigger any OpenRouter generation. Within a minute, new spans should appear in Sazabi for the project. If nothing arrives:

- Confirm the destination is enabled (not paused) in OpenRouter.
- Confirm **Sampling Rate** is greater than 0 and the calling API key is not excluded by an **API Key Filter**.
- Re-run **Test Connection** in OpenRouter.

## Notes

- OpenRouter's destination only emits **trace spans** — not logs or metrics. Each span carries model, provider, token counts, cost, latency, and (unless Privacy Mode is on) the prompt and completion.
- Privacy Mode strips prompt/completion content irreversibly at OpenRouter; Sazabi cannot recover it. Enable it only when the user cannot send prompts off the OpenRouter workspace.
`;var Pv=()=>{};var Lv=`## Overview

Send your OpenTelemetry logs and traces directly to Sazabi's OTLP-compatible intake endpoint for AI-powered observability. Any application instrumented with the OpenTelemetry SDK can export telemetry to Sazabi with minimal configuration.

This endpoint accepts OTLP **logs** and **traces**. Metrics are accepted by the intake but are not yet stored.

## How it works

Configure the standard OpenTelemetry environment variables to point your OTLP exporter at Sazabi's intake. The OpenTelemetry SDK will automatically detect these variables and start exporting log records and spans without requiring any additional code changes.

Once connected, telemetry streams in real-time. Our AI agents analyze patterns, detect anomalies, and help you troubleshoot production issues faster.

## Features

- OTLP-compatible intake for OpenTelemetry logs and traces.
- Standard \`OTEL_EXPORTER_OTLP_*\` environment variable configuration.
- AI-powered analysis of streamed telemetry for anomaly detection and troubleshooting.

## Requirements

- An application or collector that can export OTLP logs and traces.
- Runtime or deployment access to set the Sazabi OTLP endpoint and public-key authorization header.
- Metrics are accepted by the intake but are not yet stored; logs and traces are supported.
`;var Dv=()=>{};var Cv=`# OpenTelemetry (Generic) Data Source Setup

Walk the user through connecting any OpenTelemetry-instrumented application to a Sazabi project via the standard **OTLP HTTP** exporter env vars. This is the generic, any-language manual setup — works with the Node.js, Python, Go, Java, .NET, Rust, or Ruby OpenTelemetry SDKs.

**Principle:** Do the work. Only pause when the user must act: choosing a Sazabi project, picking an SDK, installing packages in their app, or restarting their process. If a step fails, diagnose and retry before asking the user to intervene.

<important>
Use AskUserQuestion only for user-owned boundaries: choosing the project, choosing the SDK language, or confirming the SDK is bootstrapped. Never echo \`PUBLIC_KEY\` back to the user — refer to it as \`<your-public-key>\`.
</important>

If the user is configuring an OpenTelemetry Collector, Grafana Alloy, Vector, or a vendor-native OTLP destination (OpenRouter, Inngest, Trigger.dev, Railway, Temporal, etc.) instead of an in-process SDK, stop and use that source's skill instead — those flows exist as separate data-source types (\`otel_collector\`, \`grafana_alloy\`, \`vector\`, \`openrouter\`, \`inngest\`, \`trigger_dev\`, \`railway\`, \`temporal\`).

## Phase 0: Preflight

Use the Sazabi CLI. First choose the command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. In the Sazabi agent runtime \`sazabi\` is pre-installed and pre-authenticated; do not ask the user to run \`npm i -g\`.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, ask the user how to authenticate.

Browser login:

\`\`\`sh
$SAZABI_CLI auth login
\`\`\`

Existing token:

\`\`\`sh
$SAZABI_CLI auth save <token>
\`\`\`

Do not print the token back to the user.

## Phase 1: Choose the Sazabi project

If the active project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
$SAZABI_CLI projects use <project-id>
\`\`\`

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

Determine the project's intake region by inspecting the project record returned by \`projects list --json\` (look at \`region\`). Capture it as \`PROJECT_REGION\`. The intake domain is \`sazabi.com\` in production and \`sazabi.dev\` in staging/development — default \`INTAKE_DOMAIN\` to \`sazabi.com\` unless the CLI is pointed at a non-production environment. To detect that, run \`$SAZABI_CLI settings view --json\` and inspect \`.settings.apiBaseUrl\`: if it ends in \`sazabi.dev\` (e.g. \`api.staging.sazabi.dev\`), set \`INTAKE_DOMAIN\` to \`staging.sazabi.dev\` or \`development.sazabi.dev\` accordingly. If \`apiBaseUrl\` is absent, the CLI is using its production default, so keep \`INTAKE_DOMAIN=sazabi.com\`.

## Phase 2: Create the connection and capture the public key

Check first whether a generic \`otel\` connection already exists for the project — \`$SAZABI_CLI data-sources connections list --type otel --json\` returns \`{ "items": [...] }\` with each connection's \`id\`. If one exists, reuse it: capture its \`id\` as \`CONNECTION_ID\`, then mint a fresh intake key with \`$SAZABI_CLI public-keys create "OpenTelemetry SDK" --json\` and capture \`.publicKey.value\` as \`PUBLIC_KEY\`. Skip ahead to Phase 3.

Otherwise, create the connection:

\`\`\`sh
CONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\
  --type otel \\
  --metadata '{}' \\
  --json)
\`\`\`

The \`otel\` source has no provider-side credentials — \`metadata\` is an empty object. Sazabi mints a project-scoped public intake key when the connection is created and returns the plaintext value once in the create response.

Extract the connection ID and the minted public key:

\`\`\`sh
CONNECTION_ID=$(printf '%s' "$CONNECTION_JSON" | jq -r '.connectionId')
PUBLIC_KEY=$(printf '%s' "$CONNECTION_JSON" | jq -r '.publicKey')
\`\`\`

Treat \`PUBLIC_KEY\` as a bearer secret. The plaintext value is only returned by \`connections create\` (and by \`public-keys create\`) — \`public-keys list --json\` does not include it. If you ever lose the plaintext, mint a replacement with \`$SAZABI_CLI public-keys create "OpenTelemetry SDK" --json\` and read \`.publicKey.value\`. Any active project public key will authenticate against the OTLP endpoint.

**If \`connections create\` reports the connection already exists:** Run \`connections list --type otel --json\`, take the existing connection's \`id\` from \`.items[]\`, mint a fresh key with \`public-keys create\`, and proceed.

## Phase 3: Build the OTLP endpoint and headers

Construct the values the user's app will need:

\`\`\`sh
OTLP_ENDPOINT="https://otlp.\${PROJECT_REGION}.intake.\${INTAKE_DOMAIN}"
OTLP_HEADERS="Authorization=Bearer \${PUBLIC_KEY}"
OTLP_PROTOCOL="http/protobuf"
\`\`\`

The intake host accepts every OTLP signal at one base URL and path-dispatches by suffix:

- \`POST /v1/logs\` is persisted as logs.
- \`POST /v1/traces\` is persisted as spans.
- \`POST /v1/metrics\` is accepted with a 200 response but not yet stored. Do not promise the user metrics; mention them only if they ask.

The OpenTelemetry SDK appends the \`/v1/<signal>\` suffix automatically when you set \`OTEL_EXPORTER_OTLP_ENDPOINT\` (the unsuffixed base). Per-signal overrides (\`OTEL_EXPORTER_OTLP_LOGS_ENDPOINT\`, \`..._TRACES_ENDPOINT\`) are supported but should not be set unless the user wants to disable a signal.

## Phase 4: Bootstrap the OpenTelemetry SDK in the user's app

AskUserQuestion: Which language SDK should I bootstrap? (Options: \`node\`, \`python\`, \`go\`, \`other\`.)

For each option, prefer adding a small bootstrap module and importing it before any other application code — most SDKs require the loader to register before instrumented packages are imported.

### Node.js / Bun / TypeScript

Install the SDK:

\`\`\`sh
npm install --save \\
  @opentelemetry/sdk-node \\
  @opentelemetry/auto-instrumentations-node \\
  @opentelemetry/exporter-trace-otlp-proto \\
  @opentelemetry/exporter-logs-otlp-proto \\
  @opentelemetry/api-logs \\
  @opentelemetry/sdk-logs
\`\`\`

Add an \`instrumentation.ts\` entry that loads before the app:

\`\`\`ts
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-proto";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { BatchLogRecordProcessor } from "@opentelemetry/sdk-logs";
import { NodeSDK } from "@opentelemetry/sdk-node";

const sdk = new NodeSDK({
  serviceName: process.env.OTEL_SERVICE_NAME ?? "my-service",
  traceExporter: new OTLPTraceExporter(),
  logRecordProcessors: [new BatchLogRecordProcessor(new OTLPLogExporter())],
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
\`\`\`

Boot the process with \`node --require ./instrumentation.js ./app.js\` (or Bun's \`--preload\` flag) so the SDK registers before user code imports.

### Python

Install the SDK:

\`\`\`sh
pip install \\
  opentelemetry-distro \\
  opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install
\`\`\`

Run the app with the auto-instrumenting wrapper so logs and traces are picked up without code changes:

\`\`\`sh
opentelemetry-instrument \\
  --traces_exporter otlp_proto_http \\
  --logs_exporter otlp_proto_http \\
  --metrics_exporter none \\
  python app.py
\`\`\`

Set \`OTEL_PYTHON_LOGGING_AUTO_INSTRUMENTATION_ENABLED=true\` if the user wants the stdlib \`logging\` module bridged to OTLP.

### Go

Install the SDK:

\`\`\`sh
go get \\
  go.opentelemetry.io/otel \\
  go.opentelemetry.io/otel/sdk \\
  go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp \\
  go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploghttp \\
  go.opentelemetry.io/otel/log/global \\
  go.opentelemetry.io/otel/sdk/log
\`\`\`

Wire the exporters in \`main\` before any business logic. Both \`otlptracehttp.New(ctx)\` and \`otlploghttp.New(ctx)\` read \`OTEL_EXPORTER_OTLP_ENDPOINT\`, \`OTEL_EXPORTER_OTLP_HEADERS\`, and \`OTEL_EXPORTER_OTLP_PROTOCOL\` from the environment. Register the trace exporter via \`sdktrace.NewBatchSpanProcessor\` on a \`TracerProvider\` and the log exporter via \`sdklog.NewBatchProcessor\` on a \`LoggerProvider\`. Defer \`Shutdown(ctx)\` for both providers so buffered records flush on exit.

### Other languages

For Java, .NET, Rust, Ruby, Erlang, etc., direct the user to the official OpenTelemetry SDK install for that language. The three env vars in Phase 5 are the contract — the SDK reads them automatically. Confirm the SDK is \`1.x\` and supports OTLP/HTTP protobuf. The OpenTelemetry status pages for [logs](https://opentelemetry.io/docs/languages/) and traces note which exporters ship stable for that language.

## Phase 5: Set the OTLP environment variables

The user must set these three env vars in the runtime that hosts the instrumented process (not in CI, not at build time). Render the resolved values, not the templates:

\`\`\`sh
OTEL_EXPORTER_OTLP_ENDPOINT=https://otlp.<projectRegion>.intake.<intakeDomain>
OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer <your-public-key>
OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
\`\`\`

Also recommend setting \`OTEL_SERVICE_NAME=<service>\` so each process shows up as a distinct service in Sazabi. For multi-process or multi-container deployments, set the same three variables in every runtime that should report telemetry — they all share the same \`PUBLIC_KEY\` for this connection.

Do not paste the raw \`PUBLIC_KEY\` into chat output. Tell the user to copy it from their secret manager / Sazabi dashboard / the CLI output they ran.

## Phase 6: Verify and report

Have the user redeploy or restart the process so the SDK boots with the new env vars. Then verify telemetry is arriving:

\`\`\`sh
$SAZABI_CLI logs tail --json --services "<otel-service-name>"
\`\`\`

Trigger a request, function call, or other action the instrumented process handles. Within ~30s new records should appear. If nothing arrives, work the failure modes below in order before escalating to the user.

### No telemetry arriving

- Confirm the OTLP endpoint resolves to \`https://otlp.<projectRegion>.intake.<intakeDomain>\` — \`otlp.<region>.intake.<domain>\` is the canonical subdomain. The \`otel.<region>\` and \`gcl.<region>\` aliases also work but are kept for legacy clients.
- Confirm the \`Authorization\` header value is exactly \`Bearer <publicKey>\` with a single space — no \`Token\`, no \`ApiKey\`, no quoting.
- Confirm \`OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf\`. The default gRPC protocol will not work against Sazabi's HTTP-only OTLP endpoint.
- Confirm the SDK initialization runs **before** the application code that creates spans or log records. Late initialization silently drops early telemetry.

### Authentication errors (HTTP 401)

The public key is wrong, was minted under a different project, or has been deactivated. Re-mint it:

\`\`\`sh
$SAZABI_CLI public-keys create "OpenTelemetry SDK" --json
\`\`\`

Update the runtime env var with the new value and restart the process.

### Metrics not appearing

Expected — the OTLP intake currently accepts \`/v1/metrics\` requests but does not persist them. Disable the metrics exporter in the SDK (e.g. \`--metrics_exporter none\` for Python's auto-instrumentor) to avoid wasted egress.

### Summary

When telemetry is arriving, report back:

- The \`connectionId\` of the created \`otel\` connection.
- The runtimes (or services) that were configured.
- That \`/v1/logs\` and \`/v1/traces\` are live and \`/v1/metrics\` is not yet persisted.

Do not print \`PUBLIC_KEY\` in the summary.
`;var Nv=()=>{};var zv=`## Overview

Forward logs and traces from your infrastructure to Sazabi using the OpenTelemetry Collector. The collector runs as a DaemonSet on Kubernetes and provides a vendor-neutral, extensible pipeline for your telemetry.

## How it works

The collector's \`otlphttp\` exporter sends data to Sazabi's OTLP intake. Add it to your existing collector config and include it in your service pipelines alongside any processors you already use.

## Features

- OTLP/HTTP export from the OpenTelemetry Collector to Sazabi.
- Support for existing collector receivers, processors, and service pipelines.
- Kubernetes-friendly deployment through the \`opentelemetry-collector\` Helm chart.

## Requirements

- Access to configure the collector's \`otlphttp\` exporter.
- Permission to edit collector configuration files, Helm values, or ConfigMaps.
- Ownership of the logs or traces pipeline that should include the Sazabi exporter.
`;var xv=()=>{};var Ev=`# OpenTelemetry Collector Data Source Setup

Walk the user through connecting the OpenTelemetry Collector to Sazabi so logs and traces from their infrastructure appear in the project.

**Principle:** Do the work. Only pause when the user must act (applying config, restarting the collector, choosing pipelines). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight

This skill assumes Sazabi MCP tools are available. If \`list_projects\` or \`create_data_source_connection\` are unavailable, stop and explain that this workflow requires those tools.

The user needs:
1. A Sazabi project to receive the telemetry
2. An OpenTelemetry Collector running (or about to be deployed)
3. Access to modify the collector config (\`otelcol.yaml\` or Helm values)

## Phase 1: Identify the Sazabi Project

If the target project is already clear from context, reuse it. Otherwise call \`list_projects\` and ask the user which project should receive the collector data.

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Provision the Connection and Get the Intake Key

Call the appropriate connection-creation tool with \`type: "otel_collector"\` and \`projectId: SAZABI_PROJECT_ID\`.

Capture the returned \`publicKey\` and construct the intake endpoint as \`https://otel-collector.<region>.intake.<domain>\`.

## Phase 3: Configure the Collector

Ask which signals the user wants to forward (logs, traces) so the pipeline section can reference the right exporters. Note: metrics are not yet supported and will be silently dropped.

**\`otelcol.yaml\` exporter block:**
\`\`\`yaml
exporters:
  otlphttp/sazabi:
    endpoint: https://<intake-host>
    headers:
      Authorization: "Bearer <publicKey>"

service:
  pipelines:
    logs:
      exporters: [otlphttp/sazabi]
    traces:
      exporters: [otlphttp/sazabi]
\`\`\`

Merge the exporter into the user's existing pipeline rather than replacing their current exporters — add \`otlphttp/sazabi\` to the appropriate \`exporters\` lists.

AskUserQuestion: Have you applied the config and restarted (or deployed) the collector?

## Phase 4: Verify

After the user confirms the config is applied, check whether telemetry is arriving in the Sazabi project. If nothing appears within a few minutes:

1. Enable debug logging on the collector (\`service.telemetry.logs.level: debug\`) and look for exporter errors
2. Confirm the pipeline section references \`otlphttp/sazabi\` in the correct signal pipelines
3. Verify the endpoint URL and auth header are correct

## Troubleshooting

### No data appearing

- Check collector logs for \`otlphttp/sazabi\` exporter errors
- Confirm \`otlphttp/sazabi\` is listed in \`service.pipelines.<signal>.exporters\`
- Verify no network policy is blocking outbound HTTPS to the intake endpoint

### Authentication errors

- Confirm the \`Authorization\` header value is \`Bearer <publicKey>\` (note the space and exact casing)
- Regenerate the intake key from the Sazabi dashboard if it was rotated

### Helm deployment

For the \`opentelemetry-collector\` Helm chart, pass the config via \`config\` in \`values.yaml\` and merge the exporter block into the existing structure.
`;var jv=()=>{};var Rv=`## Overview

Forward your PostHog events directly to Sazabi for real-time observability and AI-powered analysis. Use PostHog's CDP HTTP Webhook destination to stream product analytics and error events into your project.

## How it works

Configure an HTTP Webhook destination in PostHog Data Pipeline > Destinations and point it to your Sazabi intake URL. PostHog sends a JSON payload for each matching event, and Sazabi transforms it into OTEL logs for search, alerting, and investigation.

## Features

- Event delivery via PostHog's HTTP Webhook destination in Data Pipeline
- Per-event filtering to control which PostHog events are forwarded to Sazabi
- Full event and person properties included in each payload for rich observability context

## Requirements

- PostHog workspace with access to CDP / Data Pipeline destinations (paid PostHog feature)
- Permissions to create and configure HTTP Webhook destinations in PostHog Data Pipeline > Destinations`;var Uv=()=>{};var Kv='---\nname: posthog-data-source-setup\ndescription: Connect a PostHog organization to a Sazabi project so PostHog events stream into Sazabi via auto-provisioned CDP HTTP-webhook destinations. Use when the user wants to "connect PostHog", "ingest PostHog events", "add a PostHog data source", or after running `sazabi data-sources skill --type posthog`. Drives the Sazabi CLI (`data-sources connections create` + `data-sources streams create`) plus direct calls to PostHog\'s REST API for project discovery and scope validation; stream creation triggers the backend to POST to `/api/projects/{id}/hog_functions/` and mint a Sazabi public key.\n---\n\n# PostHog Data Source Setup\n\nWalk the user through connecting a PostHog organization to a Sazabi project using a **personal API key** (`phx_...`). The Sazabi backend installs a CDP HTTP-webhook destination (hog function) on each selected PostHog project and mints a per-stream public key. Prefer this native flow. The legacy "manual webhook" flow (user hand-creates an HTTP Webhook destination in PostHog) is out of scope for this skill.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating the personal API key in PostHog, choosing the Sazabi project, or picking PostHog projects. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, entering the personal API key, picking PostHog projects.\n- Never echo `POSTHOG_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to PostHog\'s REST API in Phase 2 and Phase 3.\n\nConfirm CLI auth:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf unauthenticated, run `$SAZABI_CLI auth login` (browser) or `$SAZABI_CLI auth save <token>` (paste an existing session token or secret key). Do not print tokens.\n\nThe user needs:\n\n1. A Sazabi project to receive PostHog events.\n2. A PostHog account with admin access to the projects they want to forward, on either **US Cloud** (`us.posthog.com`) or **EU Cloud** (`eu.posthog.com`).\n3. A PostHog plan that includes **CDP / Data Pipeline destinations** (hog functions) — this is a paid PostHog feature.\n4. A browser to create a personal API key.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the PostHog events? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing PostHog connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type posthog --json\n```\n\nIf a PostHog connection already exists for the same organization the user wants to onboard, reuse its `id` as `POSTHOG_CONNECTION_ID` and skip token creation (Phase 2) and connection creation (Phase 4) — but still run Phase 3 to discover and select the PostHog projects to create streams for. The user must paste a personal API key with `project:read` (and `hog_function:write` for stream provisioning) so Phase 3 can list projects; the existing connection\'s stored token is encrypted and not retrievable. Once the new project selection is captured in `POSTHOG_PROJECTS`, jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same PostHog organization (the backend dedupes by `region + organizationId + token`).\n\n## Phase 2: Create the PostHog personal API key\n\nDirect the user to create a personal API key. PostHog hosts US and EU Cloud separately; pick the one their organization lives on.\n\n> Open **PostHog → Settings → Personal API keys**:\n>\n> - US Cloud: **https://us.posthog.com/settings/user-api-keys**\n> - EU Cloud: **https://eu.posthog.com/settings/user-api-keys**\n>\n> Click **Create personal API key**.\n>\n> - **Label**: `Sazabi`\n> - **Scopes** (all three are required):\n>   - `project:read` — enumerate projects in the stream selector\n>   - `organization:read` — resolve the organization name shown alongside projects\n>   - `hog_function:write` — install the webhook destination on each project\n> - **Scoped organizations / projects**: leave unrestricted, or restrict to the organization the user wants to onboard.\n>\n> PostHog displays the key (`phx_...`) only once. If the user dismisses the dialog without copying it, they must create a new key.\n\n`AskUserQuestion`: ask the user to paste the personal API key. Capture it as `POSTHOG_TOKEN`.\n\n### Validate the token and resolve region + organization\n\nThe Sazabi backend probes US then EU using the token to discover which region it belongs to and which organization it grants access to. Reproduce that probe with `curl` so the agent has the values it needs for Phase 4. The token may be on either region; try US first, fall back to EU on `401`/`403`.\n\n```sh\nposthog_probe() {\n  local region="$1"\n  curl -fsS \\\n    -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n    "https://${region}.posthog.com/api/projects/@current/"\n}\n\nif PROJECT_JSON=$(posthog_probe us 2>/dev/null); then\n  POSTHOG_REGION="us"\nelif PROJECT_JSON=$(posthog_probe eu 2>/dev/null); then\n  POSTHOG_REGION="eu"\nelse\n  echo "PostHog token rejected on both US and EU." >&2\n  exit 1\nfi\n\nPOSTHOG_ORGANIZATION_ID=$(jq -r \'.organization\' <<<"$PROJECT_JSON")\nPOSTHOG_ORGANIZATION_NAME=$(curl -fsS \\\n  -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://${POSTHOG_REGION}.posthog.com/api/organizations/${POSTHOG_ORGANIZATION_ID}/" \\\n  | jq -r \'.name\')\n```\n\nIf the probe fails on both regions: the key was revoked, copied incorrectly, or lacks `project:read`. Have the user create a new key with the three required scopes and rerun this phase. Do not print `POSTHOG_TOKEN` in any error output.\n\n### Verify all three scopes\n\n`project:read` is implied by the successful probe above. Verify `organization:read` succeeded (`POSTHOG_ORGANIZATION_NAME` is non-empty) and confirm `hog_function:write` is on the key — stream creation will fail later if it is missing.\n\n```sh\ncurl -fsS \\\n  -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://${POSTHOG_REGION}.posthog.com/api/personal_api_keys/@current/" \\\n  | jq -e \'.scopes | index("hog_function:write") or index("*")\'\n```\n\nIf the check exits non-zero, the key is missing `hog_function:write`. Have the user edit the key in PostHog to add that scope (or recreate it) and rerun this phase.\n\n## Phase 3: Discover and pick PostHog projects\n\nList the PostHog projects the token can see. The stream selector flow in the dashboard calls Sazabi\'s `list-projects` action, which requires a created connection — but here we\'re discovering before connection creation, so call PostHog\'s REST API directly.\n\nPostHog `/api/projects/` is paginated using DRF-style `{ count, next, previous, results }`. Follow `next` until it is `null` so orgs with more than one page of projects are fully enumerated.\n\n```sh\nPOSTHOG_PROJECTS_JSON=\'[]\'\nNEXT_URL="https://${POSTHOG_REGION}.posthog.com/api/projects/?limit=200"\nwhile [ -n "$NEXT_URL" ] && [ "$NEXT_URL" != "null" ]; do\n  PAGE=$(curl -fsS -H "Authorization: Bearer $POSTHOG_TOKEN" "$NEXT_URL")\n  POSTHOG_PROJECTS_JSON=$(jq -c \\\n    --argjson acc "$POSTHOG_PROJECTS_JSON" \\\n    \'($acc + (.results // . | [.[] | {id: (.id | tostring), name}]))\' \\\n    <<<"$PAGE")\n  NEXT_URL=$(jq -r \'.next // empty\' <<<"$PAGE")\ndone\njq \'.\' <<<"$POSTHOG_PROJECTS_JSON"\n```\n\n`AskUserQuestion`: which PostHog projects should Sazabi forward events from?\n\nBuild `POSTHOG_PROJECTS` as a list of `(posthogProjectId, posthogProjectName)` pairs. Reuse the exact `id` (stringified) and `name` returned by PostHog — do not invent or reformat them. Each selected project becomes one Sazabi stream and one PostHog hog function.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection. The metadata schema requires `posthogPersonalApiKey`, `posthogApiRegion`, `posthogOrganizationId`, and `connectionMode: "native"`; `posthogOrganizationName` is optional but recommended for the dashboard.\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token   "$POSTHOG_TOKEN" \\\n  --arg region  "$POSTHOG_REGION" \\\n  --arg orgId   "$POSTHOG_ORGANIZATION_ID" \\\n  --arg orgName "$POSTHOG_ORGANIZATION_NAME" \\\n  \'{\n    posthogPersonalApiKey: $token,\n    posthogApiRegion: $region,\n    posthogOrganizationId: $orgId,\n    posthogOrganizationName: $orgName,\n    connectionMode: "native"\n  }\')\n\nPOSTHOG_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type posthog \\\n  --metadata "$METADATA_JSON" \\\n  --json | jq -r \'.connectionId\')\n```\n\nThe connection persists the encrypted personal API key plus the resolved region and organization. It does **not** install any hog functions on its own — that happens per stream in Phase 5.\n\nIf the CLI reports `duplicate connection` or a connection-identity collision, an existing PostHog connection already covers this `(region, organizationId, token)` triple — reuse its `id` from `connections list --type posthog --json` and continue from Phase 5.\n\n## Phase 5: Create one stream per PostHog project\n\nFor each entry in `POSTHOG_PROJECTS`, call `streams create`. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the backend\'s `provisionStream` for `posthog` — that mints a Sazabi public key scoped to the stream, then POSTs to `https://${POSTHOG_REGION}.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/hog_functions/` with `template_id: "template-webhook"` pointed at Sazabi\'s intake URL.\n\n```sh\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$POSTHOG_CONNECTION_ID" \\\n  --display-name "$POSTHOG_PROJECT_NAME" \\\n  --config "$(jq -nc \\\n    --arg id   "$POSTHOG_PROJECT_ID" \\\n    --arg name "$POSTHOG_PROJECT_NAME" \\\n    \'{posthogProjectId: $id, posthogProjectName: $name}\')" \\\n  --json\n```\n\nReuse the exact `id` (stringified) and `name` returned by PostHog\'s `/api/projects/` response for `posthogProjectId` and `posthogProjectName`. Field names are case-sensitive.\n\nIf a stream creation fails on duplicate display name, append a suffix (e.g. `"$POSTHOG_PROJECT_NAME (events)"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nHog-function provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id "$POSTHOG_CONNECTION_ID" --json\n```\n\nEach stream transitions from `pending` (or `provisioning`) to `active` once the backend finishes calling PostHog\'s `/api/projects/{id}/hog_functions/` endpoint. The stream\'s `config.posthogHogFunctionId` is populated on success. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that PostHog project and surface it to the user — the Temporal activity log holds the underlying error.\n\n**Pass 2 — telemetry arrival.** Hog functions only emit events when the PostHog project receives matching captures. Either trigger an event (`$pageview`, custom capture) or wait for natural traffic, then tail:\n\n```sh\n$SAZABI_CLI logs tail --json --search posthog\n```\n\nConfirm new records arrive tagged with the corresponding `posthogProjectName`. If nothing appears within a few minutes of triggering an event, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `POSTHOG_CONNECTION_ID` and the resolved `$POSTHOG_REGION` + `$POSTHOG_ORGANIZATION_NAME`.\n- One line per stream: PostHog project name, current status, and (if active) the `posthogHogFunctionId`.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored out (non-`active`, non-`pending`, non-`provisioning`), call out the failed PostHog project name and offer to recreate just that stream.\n\nDo not include `POSTHOG_TOKEN` in the summary.\n\n## Troubleshooting\n\n### Invalid or expired personal API key\n\nThe key may have been revoked, copied incorrectly, or expired. Recreate at the region-specific URL (`https://${POSTHOG_REGION}.posthog.com/settings/user-api-keys`) with the three required scopes and rerun Phase 2. The Sazabi connection still exists with a stale key — delete it (`data-sources connections delete <id>` if your CLI version supports it) and rerun from Phase 4, or update the connection metadata if `connections update` is available (`$SAZABI_CLI data-sources connections -h`).\n\n### Stream creation fails with `403` / "Insufficient permissions"\n\nThe personal API key is missing `hog_function:write`, or the user lacks admin access to that PostHog project. Verify the scope check at the end of Phase 2 passes, and confirm the user has at least Member (Admin recommended) access to the PostHog project. Recreate the key with the correct scope if needed.\n\n### Stream creation fails with `402` / "CDP destinations require a paid plan"\n\nHog functions / CDP destinations are a paid PostHog feature. The user must upgrade the PostHog organization billing plan before provisioning will succeed. The Sazabi connection and the failed stream can be deleted before retry; or leave them and provisioning will succeed next time it is retried.\n\n### Wrong region resolved\n\nThe probe in Phase 2 tries US first, EU second. A key that exists on **EU Cloud** but is rejected on US with a `401`/`403` will fall through correctly. If the probe returns a `5xx` on US, it short-circuits without trying EU — in that case retry the probe manually against EU only:\n\n```sh\ncurl -fsS -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://eu.posthog.com/api/projects/@current/"\n```\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No events arriving after streams are `active`\n\nA hog function that is `active` on the Sazabi side does not emit events unless the PostHog project receives captures matching the destination\'s filters. Trigger a real `$pageview` or `capture` event against the PostHog project. Confirm the hog function is enabled in PostHog → **Data Pipeline → Destinations** (look for `Sazabi — <project> (<prefix>)`).\n\n### Manual webhook destination already exists\n\nIf the user previously hand-created an HTTP Webhook destination in PostHog (the legacy manual flow), it will keep forwarding to Sazabi independently of this connection — this skill\'s native flow installs a **separate** hog function. Either delete the manual destination in PostHog before running this skill (to avoid duplicate events) or leave both in place if intentional.\n';var Fv=()=>{};var Gv=`## Overview

Forward Railway service logs and traces directly to Sazabi for real-time monitoring of your applications. Railway does not provide a managed log drain, so logs are emitted from your application via the OpenTelemetry SDK.

## How it works

Configure your application with the standard OTEL environment variables to send logs and traces to Sazabi's OTLP intake endpoint. Your app emits the telemetry directly; Railway is used to store the service environment variables and redeploy the service with that configuration.

Once configured, logs stream automatically from your Railway deployments. Our AI agents analyze application health, detect deployment issues, and help you maintain reliable services.

## Features

- Real-time log streaming via OpenTelemetry
- Support for logs and traces
- Service and deployment metadata included automatically
- Works with any language that has an OpenTelemetry SDK

## Requirements

- Application instrumented with the OpenTelemetry SDK and OTLP exporter
- Access to the Railway service's Variables tab to set environment variables
- Permissions to approve and deploy Railway's staged variable changes and restart the service
- Minimal applications may require an explicit bootstrap file, preload flag, or wrapper command so the SDK initializes with the service`;var Bv=()=>{};var Mv=`# Railway Data Source Setup

Send Railway deployment logs to Sazabi with the **OpenTelemetry** pattern (same as other push-style manual sources).

Refer to the Railway docs as needed: https://docs.railway.com/llms.txt

## Phase 1: Connection

1. In Sazabi, start the **Railway** manual integration for the target project and complete the flow until Sazabi mints a **public API key** for OTLP.

## Phase 2: Railway service environment

On each Railway service that should forward telemetry:

1. Install the OpenTelemetry SDK, OTLP HTTP/protobuf exporter, and any language-specific auto-instrumentation package the app needs.
2. Initialize OpenTelemetry before the app handles requests. This may be a bootstrap file, preload flag, or wrapper command depending on the runtime.
3. Set Railway environment variables in the service's Variables tab or Raw Editor:
   - **\`OTEL_EXPORTER_OTLP_ENDPOINT\`**: \`https://railway.{projectRegion}.intake.{intakeDomain}\` (use the dashboard-provided string).
   - **\`OTEL_EXPORTER_OTLP_HEADERS\`**: \`Authorization=Bearer <publicKey>\`.
   - **\`OTEL_EXPORTER_OTLP_PROTOCOL\`**: \`http/protobuf\`.
   - **\`OTEL_SERVICE_NAME\`**: \`\${{RAILWAY_SERVICE_NAME}}\`.
   - **\`OTEL_RESOURCE_ATTRIBUTES\`**: \`deployment.environment=\${{RAILWAY_ENVIRONMENT_NAME}},service.version=\${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=\${{RAILWAY_PROJECT_NAME}},railway.deployment.id=\${{RAILWAY_DEPLOYMENT_ID}}\`.
4. Review/deploy Railway's staged variable changes, then redeploy or restart the service so variables take effect.

## Phase 3: Check Sazabi

Generate traffic on Railway and verify matching log lines in Sazabi search. If ingestion is silent, validate the service actually exports OTLP (many minimal images need an explicit SDK bootstrap), inspect Railway deployment logs for exporter errors, and ensure shutdown handlers flush the OpenTelemetry provider during redeploys.

If the app cannot be instrumented, use a log forwarder such as [Vector](https://vector.dev/docs) or [Fluent Bit](https://docs.fluentbit.io/llms.txt) as its own Railway service. For collector-to-collector setups inside Railway, remember that private networking is dual-stack (IPv4 + IPv6) only for environments created after 2025-10-16; legacy environments resolve \`railway.internal\` DNS to IPv6 addresses only, so ensure your client supports IPv6 there. For very noisy stdout, Railway drops logs above 500 lines per second per replica.

## Example Bootstrap Patterns

Use the pattern for your runtime, or follow your language's OpenTelemetry documentation if your app already has instrumentation.

\`\`\`node
bun add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto @opentelemetry/exporter-logs-otlp-proto

# Railway variable or start-command prefix:
NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"
\`\`\`

\`\`\`python
pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install
# Railway start command example:
opentelemetry-instrument python app.py
\`\`\`

For deploy shutdowns, make sure your OpenTelemetry SDK flushes before the process exits. Many SDKs expose a \`shutdown()\` method that should run from your \`SIGTERM\` handler so the last telemetry batch is not dropped during Railway redeploys. If export fails only when targeting another Railway service, check IPv6 private networking support; Railway also drops stdout above 500 log lines per second per replica.
`;var Hv=()=>{};var qv=`## Overview

Forward your Render service logs directly to Sazabi for real-time monitoring and AI-powered incident detection. Monitor web services, background workers, cron jobs, and databases deployed on Render.

## How it works

Connect your Render account by configuring a log stream that forwards logs to Sazabi's intake endpoint. You can select which services and environments to monitor.

Once connected, logs are streamed in real-time. Our AI agents analyze application behavior, detect anomalies, and help you troubleshoot issues across your Render deployments.

## Features

- Real-time log streaming from Render services via the native log stream configuration
- Coverage for web services, background workers, cron jobs, and databases
- Service and environment filtering to control which deployments are monitored

## Requirements

- Render account with access to the services you want to monitor
- Permissions to select services and configure log streams in the Render dashboard
- Workspace admin access in Sazabi to enable the integration`;var Jv=()=>{};var Wv=`# Render Data Source Setup

Walk the user through connecting Render services to a Sazabi project using the Sazabi CLI for all Sazabi-side operations and direct calls to Render's REST API for workspace and service discovery. Creating a stream via \`sazabi data-sources streams create\` enqueues a Temporal activity that calls Render's \`PUT /v1/logs/streams/resource/{serviceId}\` API to install a per-service log stream override pointed at Sazabi's regional syslog intake — there is no separate "provision drains" command.

<important>
- **Do the work.** Only pause when the user must act: creating an API key in the Render UI, choosing the Sazabi project, picking the Render workspace, or picking services. If a step fails, diagnose and retry before asking the user to intervene.
- Use \`AskUserQuestion\` only at user-owned boundaries: choosing a Sazabi project, entering the API key, picking the workspace, or picking services.
- Never echo \`RENDER_TOKEN\` back to the user, into logs, into shell history, or into any tool input that is not strictly required.
</important>

## Phase 0: Preflight

Pick the Sazabi CLI command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. Confirm \`curl\` and \`jq\` are available — both are used to talk to Render's REST API in Phase 3.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, ask the user whether to authenticate with browser login or an existing token. Use \`$SAZABI_CLI auth login\` for browser login or \`$SAZABI_CLI auth save <token>\` for an existing token. Do not echo the token back.

The user needs:

1. A Sazabi project to receive the Render telemetry.
2. A Render account with permission to create API keys and configure log streams on the services they want to monitor.
3. A browser to create the Render API key.

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
\`\`\`

\`AskUserQuestion\`: which Sazabi project should receive the Render telemetry? Capture the selected ID as \`SAZABI_PROJECT_ID\` and activate it:

\`\`\`sh
$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"
\`\`\`

### Detect already-complete setup

Before creating anything new, list existing Render connections on this Sazabi project:

\`\`\`sh
$SAZABI_CLI data-sources connections list --type render --json
\`\`\`

The list JSON envelope is \`{ "items": [...] }\`, and each item only exposes \`id\`, \`dataSourceType\`, \`displayName\`, \`projectId\`, and \`createdAt\` — workspace metadata (\`ownerId\`) is not returned. Use \`displayName\` as the only reliable identifier: connections this skill creates in Phase 4 stamp the Render workspace name into \`displayName\` (\`Render: <ownerName>\`).

If exactly one Render connection's \`displayName\` matches the workspace the user wants to onboard, reuse its \`id\` as \`RENDER_CONNECTION_ID\` and skip Phase 2 through Phase 4 — jump to Phase 5 and create only the new streams. If no \`displayName\` matches, or multiple Render connections exist with ambiguous display names, do not guess: run Phase 2 onward and let the duplicate-prevention error in Phase 4 surface the existing \`id\` if \`(ownerId, apiToken)\` already matches.

## Phase 2: Create and capture the Render API key

Direct the user to create a key:

> Open **https://dashboard.render.com/settings#api-keys** and click **Create API Key**.
>
> - **Name**: \`Sazabi\`
> - **Expiration**: Choose per your security policy. No expiration is acceptable for automation, but a rotation reminder is recommended.
>
> Render only displays the key once. If the user closes the dialog without copying it, they must create a new key. The key starts with \`rnd_\`.

\`AskUserQuestion\`: ask the user to paste the API key. Capture it as \`RENDER_TOKEN\`.

Sanity-check the key before discovering workspaces:

\`\`\`sh
curl -fsS -H "Authorization: Bearer $RENDER_TOKEN" \\
  https://api.render.com/v1/owners >/dev/null \\
  && echo "ok" || echo "invalid"
\`\`\`

If \`invalid\`, the key was revoked, copied incorrectly, or expired. Have the user create a new key and retry. Do not print \`RENDER_TOKEN\` in any error output.

## Phase 3: Pick the Render workspace

A Render API key has access to one or more **owners** (workspaces) — personal users (\`usr-...\`) and teams (\`tea-...\`). One Sazabi connection scopes to exactly one workspace via \`ownerId\`. If the user wants services from multiple workspaces, plan one Sazabi connection per workspace and repeat Phases 4 and 5 for each.

List accessible owners. Render returns an array of \`{ owner: { id, name, type, email } }\` wrappers — unwrap with \`.[].owner\`:

\`\`\`sh
curl -fsS -H "Authorization: Bearer $RENDER_TOKEN" \\
  "https://api.render.com/v1/owners?limit=100" \\
  | jq '[.[].owner] | .[] | {id, name, type}'
\`\`\`

\`AskUserQuestion\`: which Render workspace should Sazabi connect? Capture the selection as \`RENDER_OWNER_ID\` and \`RENDER_OWNER_NAME\`. Reuse the exact \`id\` and \`name\` returned by Render — do not invent or reformat them.

## Phase 4: Create the Sazabi connection

The connection persists the (encrypted) API key and the chosen workspace. Sazabi's \`validateConnection\` calls \`GET /v1/owners/{ownerId}\` with the token to confirm the key actually has access to that workspace before the connection is saved.

\`\`\`sh
METADATA_JSON=$(jq -nc \\
  --arg token   "$RENDER_TOKEN" \\
  --arg ownerId "$RENDER_OWNER_ID" \\
  --arg name    "$RENDER_OWNER_NAME" \\
  '{apiToken: $token, ownerId: $ownerId, ownerName: $name}')

RENDER_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\
  --type render \\
  --display-name "Render: $RENDER_OWNER_NAME" \\
  --metadata "$METADATA_JSON" \\
  --json | jq -r '.connectionId')
\`\`\`

The \`--display-name\` stamps the Render workspace name onto the connection so the Phase 1 reuse check can identify it next time — \`connections list\` does not return workspace metadata.

If creation fails with a duplicate-connection error, a connection already exists for \`(ownerId, apiToken)\` on this project. Run \`$SAZABI_CLI data-sources connections list --type render --json\`, pick the item whose \`displayName\` matches \`Render: $RENDER_OWNER_NAME\` (or the single existing connection if there is only one), and reuse its \`id\` as \`RENDER_CONNECTION_ID\`.

If creation fails with \`The specified Render workspace is not accessible with the provided token.\`, the API key was created under a different scope than \`RENDER_OWNER_ID\`. Recreate the key while logged into the correct workspace and rerun Phase 2.

## Phase 5: Pick services and create one stream per service

List Render services in the chosen workspace. Render returns an array of \`{ service: { id, name, type, suspended } }\` wrappers — unwrap with \`.[].service\` and filter out \`suspended == "suspended"\` entries since they cannot receive log stream overrides. Capture the filtered list into \`SERVICES_JSON\` so later steps can iterate without re-fetching:

\`\`\`sh
SERVICES_JSON=$(curl -fsS -H "Authorization: Bearer $RENDER_TOKEN" \\
  "https://api.render.com/v1/services?ownerId=$RENDER_OWNER_ID&limit=100" \\
  | jq '[.[].service] | map(select(.suspended != "suspended")) | map({id, name, type})')
echo "$SERVICES_JSON" | jq
\`\`\`

Render's \`/v1/services\` is paginated via a \`cursor\` query parameter — if the response has 100 entries, iterate with \`&cursor=<last-id>\` until fewer than 100 are returned. Accounts with more than 100 services are otherwise silently truncated.

\`AskUserQuestion\`: which services should Sazabi forward? Each selected service becomes one Sazabi stream. Filter \`SERVICES_JSON\` down to the selected \`id\` values (or keep all of it) before the loop below — the loop iterates exactly what \`SERVICES_JSON\` contains.

For each selected service, create a stream. Stream creation enqueues the Temporal \`provisionStreamActivity\`, which calls Render's \`PUT /v1/logs/streams/resource/{serviceId}\` to install the override, then re-reads the resource to confirm the override actually took effect.

\`\`\`sh
echo "$SERVICES_JSON" | jq -c '.[]' | while read -r service; do
  SERVICE_ID=$(echo "$service" | jq -r '.id')
  SERVICE_NAME=$(echo "$service" | jq -r '.name')
  SERVICE_TYPE=$(echo "$service" | jq -r '.type')

  $SAZABI_CLI data-sources streams create \\
    --connection-id "$RENDER_CONNECTION_ID" \\
    --display-name "$SERVICE_NAME" \\
    --config "$(jq -nc \\
      --arg id   "$SERVICE_ID" \\
      --arg name "$SERVICE_NAME" \\
      --arg type "$SERVICE_TYPE" \\
      '{serviceId: $id, serviceName: $name, serviceType: $type}')" \\
    --json
done
\`\`\`

The backend mints a fresh public key per stream and embeds it as the syslog token, so each Sazabi stream gets its own credential. Streams dedupe on \`serviceId\`; recreating a stream for a service that already has one will fail.

If the user wants a different display name, override \`--display-name\`; \`display-name\` must be unique per connection.

## Phase 6: Verify and report

Stream provisioning runs asynchronously after \`streams create\` returns. Verify in two passes.

**Pass 1 — provisioning status.** Within a minute of the last \`streams create\`:

\`\`\`sh
$SAZABI_CLI data-sources streams list --connection-id "$RENDER_CONNECTION_ID" --json
\`\`\`

Each stream's status transitions from \`pending\` (or \`provisioning\`) to \`active\` once the backend installs the override on Render and verifies it stuck. If a stream stays non-\`active\` for more than five minutes, treat it as a provisioning failure and surface it. The most common cause is Render silently keeping a pre-existing forwarder configuration on the service — the backend explicitly rolls back the minted public key when this happens, so the failure is safe to retry after the user clears the existing override at **https://dashboard.render.com/<service-id>/logs/streams**.

**Pass 2 — telemetry arrival.** Render only emits logs when the underlying service produces output. Either trigger traffic (deploy, redeploy, hit a route) or wait for natural traffic, then:

\`\`\`sh
$SAZABI_CLI logs tail --json --search render
\`\`\`

Confirm new records arrive tagged with the corresponding \`serviceName\`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.

Report back to the user:

- The created \`RENDER_CONNECTION_ID\` and the connected \`ownerName\`.
- One line per stream: service name, type, current status.
- For any stream still non-\`active\`, say so explicitly and suggest re-running \`streams list\` in a minute.
- For any stream that errored out (you can detect this via a non-\`active\`, non-\`pending\`, non-\`provisioning\` status), call out the failed service name and offer to recreate just that stream.

Do not include \`RENDER_TOKEN\` in the summary.

## Troubleshooting

### Invalid or expired Render API key

The key may have been revoked, copied incorrectly, or expired. Recreate at https://dashboard.render.com/settings#api-keys and rerun Phase 2. The connection record still exists with a now-stale token — delete it and rerun from Phase 4, or update the connection metadata if your Sazabi CLI version supports \`connections update\` (check \`$SAZABI_CLI data-sources connections -h\`).

### Key has no access to expected workspace

Render API keys inherit the access of the user who created them. If the desired workspace is missing from \`/v1/owners\` in Phase 3, the user creating the key does not have access to that team. Have a member of the correct Render team create the key and rerun from Phase 2.

### Stream config rejected by Sazabi

\`streams create\` validates the \`config\` payload against the source's stream schema before insert. If the CLI returns a validation error, check that \`serviceId\` and \`serviceName\` are non-empty strings. \`serviceType\` is optional and accepts any string Render returns.

### Stream provisioning fails with "Render accepted the request but did not apply the log stream override"

The Render service already has a log stream forwarder configured for a different destination, and Render silently kept the existing config. The backend rolled back the minted public key, so the stream is safe to retry. Direct the user to **https://dashboard.render.com/<service-id>/logs/streams**, remove or update the existing override, then rerun \`streams create\` for that service.

### Streams stuck in \`pending\` or \`provisioning\`

The Temporal worker that runs \`provisionStreamActivity\` may be lagging. Five minutes is a reasonable upper bound; longer than that suggests the worker is unhealthy or the activity is throwing a non-retryable error. Re-running \`streams create\` for the same \`(connectionId, displayName)\` will fail on duplicate display name — append a suffix like \`(retry)\` or delete the stuck stream first.

### No telemetry arriving after streams are \`active\`

A stream that is \`active\` on the Sazabi side does not emit logs unless the Render service produces output. Trigger real traffic against the service (deploy, redeploy, hit a route, exercise a cron job). If logs still do not arrive, verify the service's egress is not blocked from reaching \`<projectRegion>.otel.<intakeDomain>:6514\` — Render's syslog forwarder needs outbound TCP to the regional OTEL endpoint.

### Manual connection already exists without streams

If someone previously ran \`sazabi data-sources connections create --type render\` without the corresponding \`streams create\` calls, the connection exists but \`streams list --connection-id <id>\` returns empty. Reuse the existing \`RENDER_CONNECTION_ID\` and continue from Phase 5 to add streams; do not create a second connection for the same workspace.
`;var Vv=()=>{};var Xv=`## Overview

Forward errors, exceptions, and events from any Sentry SDK directly to Sazabi for AI-powered error tracking and analysis. The Sentry integration works by redirecting your SDK's DSN to Sazabi's intake endpoint.

## How it works

Configure your Sentry SDK to use a Sazabi DSN instead of the standard Sentry DSN. This approach requires no custom transport code, works with all official Sentry SDKs (JavaScript, Python, Go, Ruby, Java, etc.), and captures errors exactly as the SDK formats them.

Once configured, errors are streamed in real-time from your application to Sazabi. Our AI agents automatically group similar errors, detect patterns, and help you identify root causes faster.

## Features

- Drop-in Sazabi DSN replacement for official Sentry SDKs.
- Error, exception, and event capture using the SDK payloads your app already emits.
- Automatic grouping, pattern detection, and root-cause analysis for streamed errors.

## Requirements

- Ability to replace the DSN used by your Sentry SDK initialization.
- Permission to deploy the application code or configuration that sets the DSN.
- Use of an official Sentry SDK supported by Sentry's standard DSN configuration.
`;var Yv=()=>{};var Qv=`# Sentry SDK Data Source Setup

Forward Sentry SDK telemetry to Sazabi by swapping the SDK **DSN** to Sazabi’s intake-shaped DSN. This aligns with official Sentry clients (JavaScript, Python, Go, Ruby, Java, .NET, etc.).

## Phase 1: Mint credentials in Sazabi

1. Ensure the Sazabi organization has the Sentry integration enabled for the desired **Sazabi project**.
2. Complete dashboard setup until Sazabi shows the **DSN** in the manual flow (\`https://{publicKey}@sentry-dsn.{projectRegion}.intake.{intakeDomain}/0\` pattern).

## Phase 2: Application configuration

1. Locate where your app calls \`Sentry.init\` / \`sentry_sdk.init\` (or equivalent).
2. Replace the **DSN** string with Sazabi’s value exactly—host is \`sentry-dsn.{projectRegion}.intake.{intakeDomain}\`, user segment is \`{publicKey}\`.
3. Remove or avoid logging the raw DSN; treat \`{publicKey}\` as a bearer-like secret embedded in the DSN URL.

Example shapes (adapt to your SDK):

\`\`\`javascript
// Node / browser-style init
Sentry.init({
  dsn: "https://<publicKey>@sentry-dsn.<projectRegion>.intake.<intakeDomain>/0",
});
\`\`\`

\`\`\`python
sentry_sdk.init(
    dsn="https://<publicKey>@sentry-dsn.<projectRegion>.intake.<intakeDomain>/0",
)
\`\`\`

## Phase 3: Verify

Trigger a test exception. Confirm error events arrive in Sazabi for this project and that ingestion is not silently blocked by CSP or outbound proxy rules.
`;var Zv=()=>{};var tf=`## Overview

Connect your Sentry organization to Sazabi for real-time issue, comment, and alert streaming. Sazabi creates an Internal Integration in your Sentry organization that forwards webhook events automatically.

## How it works

During setup, Sazabi creates a Sentry Internal Integration scoped to your organization and subscribes it to **issue** and **comment** webhook events, which arrive in real-time. AI agents analyze error patterns, detect anomalies, and help you identify root causes faster.

The integration is also registered as an **alert action** in your Sentry org. To stream a specific Issue Alert or Metric Alert into Sazabi, edit that rule in Sentry and add the Sazabi integration as a notification destination — Sentry will then POST \`event_alert\` / \`metric_alert\` webhooks to Sazabi when the rule triggers.

## Features

- Real-time issue and comment events forwarded via Sentry Internal Integration webhook
- Alert actions for Issue Alerts and Metric Alerts when the Sazabi integration is added as a notification destination
- AI analysis of error patterns and anomaly detection across your Sentry organization

## Requirements

- **Owner or Manager role in your Sentry organization.** Creating an Internal Integration requires the \`org:write\` scope, which is only granted to Owners and Managers. The Admin role does not include \`org:write\`, so personal user auth tokens minted by Admins cannot create Internal Integrations. Sentry returns 403 when a Member, Billing, or Admin-role user tries to create one regardless of the auth token's scopes.
- A Sentry user auth token (Sentry UI labels): **Organization: Read & Write** (\`org:write\`), **Project: Read** (\`project:read\`), **Issue & Event: Read** (\`event:read\`). The \`org:write\` scope is needed only so Sazabi can create the Internal Integration on your behalf; the integration itself only receives read-level webhook events.
- Works on all Sentry plans. Per-event \`error\` delivery (Sentry Business plan and up) is not currently used; \`issue\` events cover new error groupings on every plan.`;var ef=()=>{};var of='# Sentry Platform Data Source Setup\n\nConnect a Sentry organization to a Sazabi project via Sazabi-managed **Sentry Internal Integration**. Sazabi creates the Internal Integration in the user\'s Sentry org, subscribes it to `issue` and `comment` webhooks, and registers it as an alertable destination for Issue/Metric Alert rules. Use the Sazabi CLI (`data-sources connections create --type sentry_platform`); the provisioning, public-key minting, and webhook URL are handled server-side. This source has `streamCardinality: "single"` — creating the connection auto-provisions exactly one stream. Do **not** call `streams create` manually.\n\nThis skill covers the Sentry Platform (webhook) source. It is distinct from the **Sentry SDK** source (`sentry`), which forwards SDK telemetry via a swapped DSN. Pick this one when the user wants Sentry issues, comments, and alerts streamed to Sazabi.\n\n**Principle:** Do the work. Only pause when the user must act: minting a Sentry auth token in the browser, choosing the Sazabi project, or confirming a policy decision.\n\n<important>\nUse AskUserQuestion only for user-owned boundaries: choosing the Sazabi project, pasting the Sentry auth token, providing the organization slug, and confirming the Sentry user has Owner/Manager role.\n</important>\n\n## Phase 0: Preflight\n\nSelect the Sazabi CLI command prefix. Prefer the installed `sazabi` binary; fall back to `bunx @sazabi/cli` rather than asking the user to install globally.\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below.\n\nCheck authentication:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf unauthenticated, ask the user whether to authenticate via browser login or paste an existing token. Browser login: `$SAZABI_CLI auth login`. Token: `$SAZABI_CLI auth save <token>`. Do not echo the token back.\n\nCheck whether a Sentry Platform connection already exists for the active project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type sentry_platform --json\n```\n\nIf a connection already exists for the target Sentry organization, stop and tell the user setup is already complete. Re-running the create flow against the same organization will be rejected by `getConnectionIdentity` (which keys on `org:<organizationSlug>`).\n\n## Phase 1: Choose the Sazabi project\n\nIf the active project is already correct in context, reuse it. Otherwise list and select:\n\n```sh\n$SAZABI_CLI projects list --json\n$SAZABI_CLI projects use <project-id>\n```\n\nCapture the chosen project ID as `SAZABI_PROJECT_ID`.\n\n## Phase 2: Confirm the user has Owner or Manager role in Sentry\n\nCreating a Sentry Internal Integration requires the **`org:write`** scope, which Sentry only grants to users with **Owner** or **Manager** organization role. Admin, Member, and Billing roles cannot mint an `org:write` token regardless of the UI letting them check the scope box — Sentry will return `403` from `POST /api/0/sentry-apps/`.\n\nAskUserQuestion: Confirm the Sentry user is an **Owner** or **Manager** in the target Sentry organization. If they are an Admin/Member/Billing user, have an Owner or Manager run this setup instead.\n\n## Phase 3: Mint the Sentry auth token\n\nDirect the user to:\n\n> Open **https://sentry.io/settings/account/api/auth-tokens/new-token/** in your browser, then create a token with exactly these scopes:\n>\n> - **Organization: Read & Write** (`org:write`)\n> - **Project: Read** (`project:read`)\n> - **Issue & Event: Read** (`event:read`)\n>\n> Confirm the **Permissions Preview** at the bottom of the form shows `event:read, org:write, project:read` before clicking **Create Token**. The token is shown once — copy it immediately.\n\nAskUserQuestion: Paste the Sentry auth token you just created.\n\nCapture as `SENTRY_AUTH_TOKEN`. Do not print it back.\n\nAskUserQuestion: Paste the Sentry organization slug (the `<slug>` segment in `sentry.io/organizations/<slug>/`).\n\nCapture as `SENTRY_ORG_SLUG`. It must match `^[a-z0-9][a-z0-9-]*[a-z0-9]$` — lowercase letters, digits, and hyphens only.\n\n## Phase 4: Create the connection\n\nThe Sazabi CLI runs validation (`GET /api/0/organizations/<slug>/`) before persisting, then auto-provisions the single stream, which in turn mints a public key and creates the Internal Integration in Sentry with webhook URL `https://sentry-platform.<region>.intake.<domain>/v1/logs?api_key=<publicKey>`.\n\n```sh\nCONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\\n  --type sentry_platform \\\n  --metadata "$(jq -n \\\n    --arg token "$SENTRY_AUTH_TOKEN" \\\n    --arg slug "$SENTRY_ORG_SLUG" \\\n    \'{connectionMode: "native", sentryAuthToken: $token, organizationSlug: $slug}\')" \\\n  --json)\n\nCONNECTION_ID=$(printf \'%s\' "$CONNECTION_JSON" | jq -r \'.connectionId\')\n```\n\nDo **not** also run `data-sources streams create`. `streamCardinality: "single"` causes the connection-create flow to provision the one stream automatically.\n\nHandle expected failures here:\n\n- **`401 Invalid auth token`**: the token was mistyped, revoked, or lacks the required scopes. Re-mint at the URL in Phase 3 and retry.\n- **`403 ... org:write scope ... Owner or Manager`**: the Sentry user is not an Owner/Manager. Restart from Phase 2 with a qualified user.\n- **`404 Organization not found`**: re-check `SENTRY_ORG_SLUG` against `sentry.io/organizations/<slug>/`. Do not invent it — Sentry slugs are lowercase and may differ from the display name.\n- **Duplicate connection error**: a connection already exists for `org:<SENTRY_ORG_SLUG>` in this project. Run `connections list --type sentry_platform --json` to find it; reuse or delete it before retrying.\n\n## Phase 5: Verify and report\n\nInspect the connection and its stream:\n\n```sh\n$SAZABI_CLI data-sources connections get "$CONNECTION_ID" --json\n$SAZABI_CLI data-sources streams list --connection-id "$CONNECTION_ID" --json\n```\n\nThe single stream should appear with a `status` that transitions to `active` once provisioning finishes. The stream\'s `config` will then contain `sentryAppSlug` (the Internal Integration\'s slug in Sentry) and `publicKeyId`.\n\nTrigger a real signal to confirm end-to-end delivery. Any of these will fire a webhook:\n\n- In Sentry, open any Issue and add a comment, change status, assign, or resolve it.\n- Or trigger a fresh exception in an instrumented Sentry project to create a new issue.\n\nTail Sazabi logs for the project while the user performs the action:\n\n```sh\n$SAZABI_CLI logs tail --services sentry-platform-intake --json\n```\n\nSuccessful delivery shows entries with `sentry.webhook.resource` of `issue` or `comment` and `sentry.webhook.action` populated.\n\nSummarize the result for the user:\n\n- The `connectionId`.\n- That a single stream was auto-provisioned and is forwarding `issue` and `comment` webhooks.\n- That **Issue Alert** and **Metric Alert** webhooks are opt-in: the user must edit each Sentry alert rule in **Alerts** and add the integration (named `Sazabi (<stream display name>)`) as a notification destination. Without that step, `event_alert` and `metric_alert` deliveries will not arrive even though the integration is `isAlertable`.\n\nNever print `SENTRY_AUTH_TOKEN` or the minted public key in the summary.\n\n## Troubleshooting\n\n### Token works but no webhooks arrive\n\nVerify the Internal Integration exists in Sentry at **Settings → Developer Settings → Custom Integrations**. The name will be `Sazabi (<stream display name>)`. If it is missing, the provisioning step failed silently — check `streams list` for `status = error` and `errorMessage` to see the underlying Sentry API response.\n\n### Alert webhooks (`event_alert` / `metric_alert`) never fire\n\nThese are not subscribed automatically. The user must add the Sazabi integration as a notification action on each alert rule in Sentry under **Alerts → <rule> → Edit → Then perform these actions**. Issue and comment webhooks are unaffected and arrive regardless.\n\n### `403` on every Sentry call despite Owner role\n\nConfirm the token is a **user auth token** minted from **Account → API → Auth Tokens**, not an organization-scoped DSN or a deploy key. Internal Integration auth tokens cannot mint other Internal Integrations.\n\n### Connection persisted but stream stuck in `pending`\n\nProvisioning runs in a Temporal workflow. Wait 30 seconds and re-run `streams list`. If still pending after a minute, the workflow likely errored — surface `errorMessage` and retry by deleting the connection and re-running Phase 4.\n';var rf=()=>{};var af=`## Overview

Stream your Supabase project logs directly to Sazabi for unified observability of your backend-as-a-service infrastructure. Monitor database queries, authentication events, Edge Functions, and real-time subscriptions.

## How it works

Configure an OpenTelemetry Protocol (OTLP) log drain in your Supabase dashboard to forward logs to Sazabi's intake endpoint. Supabase sends OTLP logs over HTTP using protobuf encoding and can gzip-compress the request body.

Once configured, logs flow automatically to our platform. AI agents analyze query performance, detect authentication anomalies, and help you optimize your Supabase applications.

## Features

- Postgres query logs, authentication events, and connection events via OTLP Log Drains
- Edge Function logs streamed in real-time
- Auth service logs for anomaly detection and debugging
- HTTP/protobuf transport with gzip compression support

## Requirements

- A Supabase **Pro**, **Team**, or **Enterprise** plan. Log Drains are not available on the Free plan. You can upgrade your project plan in the Supabase dashboard under Project Settings > Billing.
- Access to your Supabase project's Log Drains settings (Project Settings > Log Drains)
- Ability to add custom HTTP headers when configuring the OTLP destination`;var nf=()=>{};var lf=`# Supabase Data Source Setup

Connect Supabase project logs to Sazabi through Supabase **Log Drains** using **OpenTelemetry (OTLP) over HTTP** with protobuf bodies.

## Phase 1: Sazabi and Supabase prerequisites

1. In Sazabi, start the Supabase integration for the target project until a **public API key** exists for OTLP ingest.
2. In [Supabase](https://supabase.com/dashboard), open the project → **Project Settings** → **Log Drains** and click **Add destination**. Select **Type** = **OpenTelemetry Protocol (OTLP)**. Supabase Log Drains require a **Pro, Team, or Enterprise** plan.
3. Use the dashboard copy fields for this project so region and intake hostname match (\`https://supabase.{projectRegion}.intake.{intakeDomain}\` pattern).

## Phase 2: Add destination fields (exact product contract)

Fill in the **Add destination** form. Field names match the Supabase UI 1:1:

| Field | Value |
|--------|--------|
| Name | \`Sazabi\` (or any label that identifies the destination) |
| Description | Optional — e.g. "Forward Supabase logs to Sazabi for observability and AI analysis." |
| Type | \`OpenTelemetry Protocol (OTLP)\` |
| OTLP Endpoint | \`https://supabase.{projectRegion}.intake.{intakeDomain}\` |
| Protocol | \`HTTP/Protobuf\` |
| Gzip Compression | Enabled (toggle on) |

Under **Custom Headers**, Supabase pre-fills the \`Content-Type\` row when OTLP is selected. **Leave it as-is** and click **Add a new header** to append the \`Authorization\` row alongside it:

| Custom header name | Custom header value |
|--------|--------|
| \`Content-Type\` | \`application/x-protobuf\` *(pre-filled — do not remove)* |
| \`Authorization\` | \`Bearer {publicKey}\` *(add new row; use Sazabi's minted key; never paste it into public logs or chat)* |

## Phase 3: Validate

Produce traffic in Supabase so new log drain batches emit. Confirm matching events appear in Sazabi for that project. If silent, verify gzip + protobuf + bearer format and that the drain is enabled for the environments you expect.
`;var cf=()=>{};var uf="## Overview\n\nForward OpenTelemetry logs and traces from your Temporal worker processes to Sazabi to observe durable workflow execution. Works for both Temporal Cloud and self-hosted clusters — everything is configured inside the worker process, not in the Temporal control plane.\n\n## How it works\n\nAdd the OpenTelemetry SDK to each Temporal worker. The OTel SDK reads the `OTEL_EXPORTER_OTLP_*` environment variables you set on the worker and exports telemetry to the Sazabi intake. Workflow- and activity-level traces are produced by registering Temporal's official OpenTelemetry tracing interceptor (`temporalio.contrib.opentelemetry.TracingInterceptor` in Python, `OpenTelemetryWorkflowClientInterceptor` in TypeScript, `tracing.NewTracingInterceptor` in Go, `Temporalio.Extensions.OpenTelemetry` in .NET).\n\nWorker-emitted metrics (such as `temporal_workflow_task_execution_latency` and `temporal_worker_task_slots_available`) are configured separately on the Temporal SDK runtime and are not currently ingested by this integration.\n\n## Features\n\n- OpenTelemetry logs and traces from Temporal worker processes.\n- Workflow- and activity-level spans through Temporal's official tracing interceptors.\n- Support for Temporal Cloud and self-hosted clusters without control-plane changes.\n\n## Requirements\n\n- Permission to deploy worker code that initializes the OpenTelemetry SDK.\n- Access to install and configure the OpenTelemetry SDK and Temporal tracing interceptor for your worker language.\n- Metrics emitted by Temporal workers are configured separately and are not currently stored by this integration; logs and traces are supported.\n";var hf=()=>{};var df=`# Temporal Data Source Setup

Forward OpenTelemetry **logs** (and optionally **traces**) from your **Temporal worker processes** to Sazabi. Works with both Temporal Cloud and self-hosted clusters — everything is configured inside the worker process and its surrounding runtime. Temporal Cloud and self-hosted Temporal servers are not modified.

**Principle:** Do the work. Only pause when the user must act: choosing a Sazabi project, deciding which workers to instrument, editing worker code, declaring deploy env vars, or confirming a policy choice. If a step fails, diagnose and retry before asking the user to intervene.

<important>
Use AskUserQuestion only for user-owned boundaries: choosing a Sazabi project, choosing which workers to instrument, editing worker code, setting runtime env vars, or approving a policy decision. Use CLI discovery before asking.
</important>

## Phase 0: Preflight

Pick the CLI command prefix:

\`\`\`sh
if command -v sazabi >/dev/null 2>&1; then
  SAZABI_CLI="sazabi"
else
  SAZABI_CLI="bunx @sazabi/cli"
fi
\`\`\`

Use \`$SAZABI_CLI\` for every Sazabi command below. In the Sazabi agent runtime, \`sazabi\` is pre-installed and pre-authenticated — skip auth checks. Locally, fall back to \`bunx @sazabi/cli\` instead of asking the user to install globally.

Check authentication:

\`\`\`sh
$SAZABI_CLI auth whoami --json
\`\`\`

If authentication fails, ask the user whether to authenticate with browser login (\`$SAZABI_CLI auth login\`) or an existing token (\`$SAZABI_CLI auth save <token>\`). Do not echo tokens back.

Confirm the user actually runs Temporal **worker** processes (a Temporal client that only starts workflows is out of scope — only workers emit the logs and traces this source ingests).

## Phase 1: Choose the Sazabi project

If the active Sazabi project is already clear from context, reuse it. Otherwise:

\`\`\`sh
$SAZABI_CLI projects list --json
$SAZABI_CLI projects use <project-id>
\`\`\`

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Identify worker processes

Each worker process needs its own stream-bound public key so per-service usage can be attributed and rotated independently. Detect worker SDKs in the repo and capture each worker's \`service.name\` (a stable, human-readable identifier you will use as the OTEL resource attribute):

\`\`\`sh
# TypeScript / Node
rg --files-with-matches '"@temporalio/worker"' --glob 'package.json'

# Go
rg --files-with-matches 'go\\.temporal\\.io/sdk' --glob 'go.mod'

# Python
rg --files-with-matches '^temporalio' --glob 'pyproject.toml' --glob 'requirements*.txt'

# .NET
rg --files-with-matches 'Temporalio\\.Worker' --glob '*.csproj'
\`\`\`

If multiple worker binaries are found, plan one stream per binary. If the worker set is ambiguous, AskUserQuestion with the candidate service names.

## Phase 3: Detect or create the Sazabi connection

Temporal is single-connection-per-project (\`getConnectionIdentity()\` is \`"manual"\`). Reuse an existing connection before creating one:

\`\`\`sh
EXISTING=$($SAZABI_CLI data-sources connections list --json \\
  | jq -r '.items[] | select(.dataSourceType == "temporal") | .id' \\
  | head -1)
\`\`\`

If \`EXISTING\` is empty, create the connection. The create response includes the new \`connectionId\` plus the connection-linked \`publicKey\` for the initial stream (named \`"Temporal (auto-generated)"\`). Capture both — the plaintext key is only returned at creation time.

\`\`\`sh
CREATE_JSON=$($SAZABI_CLI data-sources connections create \\
  --type temporal \\
  --metadata '{}' \\
  --json)
CONNECTION_ID=$(echo "$CREATE_JSON" | jq -r '.connectionId')
AUTO_STREAM_PUBLIC_KEY=$(echo "$CREATE_JSON" | jq -r '.publicKey')
\`\`\`

**Do not print key values back to the user.** Reference them as \`<your-public-key>\` in any guidance text.

If \`EXISTING\` is non-empty:

\`\`\`sh
CONNECTION_ID="$EXISTING"
\`\`\`

The original auto-stream's plaintext key is no longer retrievable. Either attribute it to one worker by reusing the key the customer already stored, rename the stream's display name in Phase 4, or ignore it and mint fresh per-worker streams below.

## Phase 4: Provision a stream per worker

In Sazabi, a "stream" is a public key scoped to a data-source connection. One stream per worker process gives you per-service attribution in \`streams list\` and lets you rotate one worker's key without disturbing the others.

For each worker service name from Phase 2, list existing streams first to stay idempotent:

\`\`\`sh
$SAZABI_CLI data-sources streams list --connection-id "$CONNECTION_ID" --json
\`\`\`

If a stream already exists with the desired \`displayName\`, the key value is **not** retrievable. Either reuse the key value the customer already stored, or remove and recreate the stream to mint a fresh key:

\`\`\`sh
$SAZABI_CLI data-sources streams remove <stream-id>
\`\`\`

Then create the stream:

\`\`\`sh
STREAM_JSON=$($SAZABI_CLI data-sources streams create \\
  --connection-id "$CONNECTION_ID" \\
  --display-name "<worker-service-name>" \\
  --json)
STREAM_ID=$(echo "$STREAM_JSON" | jq -r '.streamId')
PUBLIC_KEY=$(echo "$STREAM_JSON" | jq -r '.publicKey')
\`\`\`

Record \`(serviceName, streamId, publicKey)\` per worker in the agent's working set. Do not print \`PUBLIC_KEY\` back to the user.

## Phase 5: Resolve the OTLP endpoint

\`\`\`sh
REGION=$($SAZABI_CLI projects list --json \\
  | jq -r --arg id "$SAZABI_PROJECT_ID" '.items[] | select(.id == $id) | .region')

# Staging / development CLIs point at sazabi.dev; production points at sazabi.com.
CLI_SETTINGS=$($SAZABI_CLI settings view --json)
if echo "$CLI_SETTINGS" | jq -e '(.apiBaseUrl // .apiDomain // .intakeDomain // "") | endswith("sazabi.dev")' >/dev/null 2>&1; then
  INTAKE_DOMAIN="sazabi.dev"
else
  INTAKE_DOMAIN="sazabi.com"
fi

OTLP_ENDPOINT="https://temporal.\${REGION}.intake.\${INTAKE_DOMAIN}"
\`\`\`

The OpenTelemetry SDK appends \`/v1/logs\` and \`/v1/traces\` per signal. Do **not** set per-signal endpoint overrides unless the SDK requires it.

\`auth whoami --json\` does **not** expose the region or intake domain — do not try to read them from there.

## Phase 6: Initialize the OpenTelemetry SDK in each worker

The Temporal worker SDK does **not** consume \`OTEL_EXPORTER_OTLP_*\` env vars. You must explicitly initialize an OpenTelemetry SDK alongside the worker. Bootstrap it *before* the worker starts so the global \`LoggerProvider\` (and \`TracerProvider\` for Phase 8) is set when the first log line or activity span fires.

### TypeScript / Node

Workers inside the Sazabi monorepo already log via \`@sazabi/logger\`. The package ships an opt-in OTLP log bridge at \`packages/logger/src/otel-log-bridge.ts\` that initializes a \`LoggerProvider\` + \`OTLPLogExporter\` when \`SAZABI_LOGGER_OTEL_LOGS_ENABLED=true\` and the OTEL env vars below are set. Workers in this repo only need the env vars in Phase 7 — no code change.

For Temporal workers **outside** this repo, install:

\`\`\`sh
bun add @opentelemetry/api-logs \\
  @opentelemetry/exporter-logs-otlp-http \\
  @opentelemetry/resources \\
  @opentelemetry/sdk-logs \\
  @opentelemetry/semantic-conventions
\`\`\`

…and initialize \`LoggerProvider\` at process startup, mirroring \`packages/logger/src/otel-log-bridge.ts\`. If the worker uses pino, \`pino-opentelemetry-transport\` is a community-standard alternative.

### Python

\`\`\`sh
pip install opentelemetry-sdk opentelemetry-exporter-otlp-proto-http
\`\`\`

Initialize \`LoggerProvider\` (and \`TracerProvider\` for traces) before \`Worker.run()\`.

### Go

\`\`\`sh
go get go.opentelemetry.io/otel/sdk/log \\
       go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploghttp \\
       go.opentelemetry.io/otel/sdk/trace
\`\`\`

Configure \`sdk/log.LoggerProvider\` (and \`sdk/trace.TracerProvider\` for traces) before starting the worker.

### .NET

Install \`OpenTelemetry.Extensions.Hosting\` plus the OTLP exporter and configure the OTEL SDK in \`Program.cs\` before \`Worker.RunAsync\`.

## Phase 7: Set env vars on each worker's runtime

Find where each worker's deployment env vars are declared. Typical locations:

- ECS task definition (Terraform features module — \`terraform/main/features/<worker>/locals.tf\` in this repo)
- Kubernetes \`Deployment\` / Helm values
- \`fly secrets set\` / Render env / Vercel project env
- \`.env\` for locally-managed processes

If the deploy mechanism is ambiguous (the repo has multiple deploy paths or the worker isn't already deployed), AskUserQuestion.

For each worker, set:

| Variable | Value |
| --- | --- |
| \`OTEL_EXPORTER_OTLP_ENDPOINT\` | \`\${OTLP_ENDPOINT}\` (Phase 5) |
| \`OTEL_EXPORTER_OTLP_HEADERS\` | \`Authorization=Bearer <your-public-key>\` (the worker's stream key from Phase 4) |
| \`OTEL_EXPORTER_OTLP_PROTOCOL\` | \`http/protobuf\` |
| \`OTEL_RESOURCE_ATTRIBUTES\` | \`service.name=<worker-service-name>\` (or set via the SDK config) |
| \`SAZABI_LOGGER_OTEL_LOGS_ENABLED\` | \`true\` *(only if the worker uses the in-repo \`@sazabi/logger\` bridge)* |

AskUserQuestion: confirm the env vars are set on each worker runtime and the deploy has rolled out.

## Phase 8: (Optional) workflow/activity traces

Logs work without anything Temporal-specific. To also capture workflow + activity spans, register Temporal's OpenTelemetry tracing interceptor on **both** the client and the worker. This is a code change in the worker, so it's deferred from a logs-only setup.

- **TypeScript**: \`@temporalio/interceptors-opentelemetry\`'s \`OpenTelemetryPlugin\`. Pass \`new OpenTelemetryPlugin({ resource, spanProcessor })\` via the \`plugins\` option on both \`Client\` and \`Worker\` (and \`bundleWorkflowCode\` if pre-bundling). The plugin auto-wires the workflow-side interceptors and the \`makeWorkflowExporter\` sink — do not register them manually.
- **Python**: \`temporalio.contrib.opentelemetry.TracingInterceptor\`
- **Go**: \`go.temporal.io/sdk/contrib/opentelemetry.NewTracingInterceptor\`
- **.NET**: \`Temporalio.Extensions.OpenTelemetry.TracingInterceptor\`

## Phase 9: Restart / redeploy workers

Restart each worker so the OpenTelemetry SDK picks up the new env vars. For ECS / Kubernetes, that means rolling the service. For local processes, restart the binary.

AskUserQuestion: confirm the restart / redeploy has completed.

## Phase 10: Verify

Trigger a workflow execution. New logs should reach Sazabi within seconds.

\`\`\`sh
# Stream-side: lastUsedAt should update after the first successful ingest.
$SAZABI_CLI data-sources streams get <stream-id> --json

# Project-side: tail logs filtered to the worker's service.name.
$SAZABI_CLI logs tail --services <worker-service-name>
\`\`\`

## Phase 11: Report

Summarize:

- \`CONNECTION_ID\` (the project's single Temporal connection).
- One row per worker: \`serviceName\`, \`streamId\`, and the OTLP endpoint that worker uses.
- That each \`PUBLIC_KEY\` is set in the worker runtime (do **not** print the values).
- Whether traces were also wired (Phase 8).
- Confirmation that workers have been restarted.

Tell the user that the Sazabi \`temporal\` source ingests OTLP **logs** and **traces** today. OTLP **metrics** posted to this endpoint are dropped — Temporal SDK worker metrics (Prometheus / \`Runtime.install\` telemetry) need to be routed through your own Prometheus or OpenTelemetry Collector stack.

## Troubleshooting

### 401 / unauthorized at the intake

The \`Authorization\` header is missing the \`Bearer\` prefix (note: include one trailing space between \`Bearer\` and the key), the public key belongs to a different Sazabi project, or the stream (or its parent connection) was deactivated. Per-stream plaintext keys are only returned by \`data-sources streams create --json\` and \`data-sources connections create --json\`; if the customer lost it, remove and recreate the stream to mint a fresh key.

### Telemetry shows up under "OpenTelemetry" instead of "Temporal"

The endpoint subdomain is wrong. It must be \`temporal.<projectRegion>.intake.<intakeDomain>\`, not the generic \`otlp.<projectRegion>.intake.<intakeDomain>\`. The intake adapter id is keyed off the hostname.

### Missing workflow and activity spans

Register Temporal's OpenTelemetry tracing interceptor on both the client and the worker (Phase 8). Without it, only worker application logs reach Sazabi — workflow and activity executions will not appear as trace spans.

### Worker logs from pino / winston / structlog not forwarded

Stdout-only logging does not reach Sazabi unless something bridges it into the OTEL Logs SDK. Options:

- pino: use \`packages/logger/src/otel-log-bridge.ts\` as a reference for \`pino.multistream\` → OTEL Logs SDK, or install \`pino-opentelemetry-transport\`.
- winston: install \`@opentelemetry/winston-transport\`.
- Python \`logging\` / structlog: use \`LoggingHandler\` / \`LoggingInstrumentor\` from the OpenTelemetry contrib packages.

### No Temporal SDK worker metrics

OTLP metrics posted to this endpoint are not currently ingested. Worker metrics emitted via \`Runtime.install\` (TypeScript), \`PrometheusConfig\` or \`OpenTelemetryConfig\` in \`TelemetryConfig\` (Python), or \`WithCustomMetricsReporter\` (Go) need to be routed through your own Prometheus or OpenTelemetry Collector stack.

### Connection already exists

\`getConnectionIdentity()\` for Temporal is \`"manual"\`, so a project gets exactly one \`temporal\` connection. If \`data-sources connections create --type temporal\` returns a duplicate error, reuse the existing connection from \`data-sources connections list --json\`.

### Stream with the desired display name already exists

Stream display names are not enforced unique, but per-worker streams should not duplicate. List existing streams (\`data-sources streams list --connection-id "$CONNECTION_ID" --json\`) and either reuse a stream whose key the customer still has, or remove the stale one (\`data-sources streams remove <id>\`) before creating a fresh stream.
`;var sf=()=>{};var bf=`## Overview

Stream Trigger.dev task logs directly to Sazabi for real-time monitoring of background jobs and scheduled tasks.

## How it works

Configure \`telemetry.logExporters\` in your \`trigger.config.ts\` file with an OpenTelemetry log exporter that points at Sazabi's regional OTLP logs endpoint. Sazabi authenticates requests with the public key minted for this data source connection.

This source is logs-first. Trigger.dev alert webhooks only report run and deployment status changes, and the Trigger.dev management API exposes run or trace retrieval rather than a log-forwarding subscription. Do not use those paths as the primary Sazabi data source.

Do not configure this integration with \`OTEL_*\` environment variables. Trigger.dev reserves those variables for its own internal telemetry, so the exporter must be configured directly in \`trigger.config.ts\`.

## Features

- Task and job logs forwarded through OTLP
- Run failure details when emitted through Trigger.dev logs
- Background job observability in Sazabi without alert-webhook or polling setup

## Requirements

- Edit access to \`trigger.config.ts\` in the package that owns the Trigger.dev project
- Ability to install \`@opentelemetry/exporter-logs-otlp-http\` as a dependency
- Access to set environment variables in the Trigger.dev deployment environment (for the Sazabi public key)
- Trigger.dev project must be redeployed after configuration changes take effect`;var gf=()=>{};var yf="# Trigger.dev Data Source Setup\n\nConfigure Trigger.dev as a **manual OTLP logs** data source. This source is not native: the user must edit `trigger.config.ts` and redeploy their Trigger.dev project.\n\n## Phase 1: Sazabi values\n\nCreate or open the Trigger.dev data source in Sazabi and copy the rendered values from the manual setup screen:\n\n- **Sazabi API key**: `{publicKey}`.\n- **Logs endpoint**: `https://trigger-dev.{projectRegion}.intake.{intakeDomain}/v1/logs`.\n\nTreat the key as a bearer secret and never echo the full value back in logs, commits, or chat transcripts.\n\n## Phase 2: Trigger.dev config\n\n1. Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns `trigger.config.ts`.\n2. Store the Sazabi public key as `SAZABI_API_KEY` in the Trigger.dev deployment environment.\n3. Add an `OTLPLogExporter` to `telemetry.logExporters` in `trigger.config.ts`.\n4. Redeploy the Trigger.dev project.\n\nDo not set `OTEL_*` environment variables for this integration. Trigger.dev reserves those variables for internal telemetry, so configure the log exporter in code.\n\n## Phase 3: Out of scope\n\nUse this data source for logs only. Do not configure Trigger.dev alert webhooks, management API polling, trace retrieval, trace exporters, or metrics exporters as the primary Sazabi data source for this setup.\n\n## Phase 4: Verify\n\nTrigger a task that emits logs and confirm new records arrive in Sazabi for the project. If nothing appears, re-check that the URL includes `/v1/logs`, the `Authorization` header is `Bearer <publicKey>`, and the redeployed config uses `telemetry.logExporters`.\n";var mf=()=>{};var vf=`## Overview

Forward logs and traces from your infrastructure to Sazabi using Vector. Vector runs as a high-performance DaemonSet on Kubernetes and can collect from dozens of sources before shipping to Sazabi's OTLP intake.

## How it works

Vector's \`opentelemetry\` sink exports data to Sazabi using the OTLP/HTTP protocol. Configure the sink with your Sazabi intake endpoint and public key, then route your existing pipeline outputs through a \`remap\` transform that builds the OTLP envelope before the sink consumes them.

## Features

- OTLP/HTTP export from Vector to Sazabi using the \`opentelemetry\` sink.
- Flexible routing from selected Vector sources or transforms into Sazabi.
- Remap transform support for building the OTLP envelope before export.

## Requirements

- Vector 0.51.0 or later for the \`otlp\` encoding codec.
- Access to edit your Vector configuration file or Helm values.
- Ability to add the OTLP envelope remap transform and Sazabi public-key authorization to the pipeline.
`;var pf=()=>{};var If=`# Vector Data Source Setup

Walk the user through connecting Vector to Sazabi so logs from their infrastructure appear in the project. Forwarding traces is supported but requires the source already produce OTLP-shaped events — covered as an optional add-on at the end.

**Principle:** Do the work. Only pause when the user must act (applying config, restarting Vector, choosing pipelines). If a step fails, diagnose and retry before asking the user to intervene.

**UX:** Use \`AskUserQuestion\` for all user-facing questions.

## Phase 0: Pre-flight

This skill assumes Sazabi MCP tools are available. If \`list_projects\` or \`create_data_source_connection\` are unavailable, stop and explain that this workflow requires those tools.

The user needs:
1. A Sazabi project to receive the telemetry
2. Vector **0.51.0 or later** (the \`otlp\` encoding codec shipped in 0.51.0)
3. Access to modify the Vector configuration file or Helm values

**Sazabi indexes logs and traces from Vector. Metrics are accepted at the intake but silently dropped — do not route metrics-only pipelines.**

## Phase 1: Identify the Sazabi Project

If the target project is already clear from context, reuse it. Otherwise call \`list_projects\` and ask the user which project should receive the Vector data.

Capture the selected project ID as \`SAZABI_PROJECT_ID\`.

## Phase 2: Provision the Connection and Get the Intake Key

Call the appropriate connection-creation tool with \`type: "vector"\` and \`projectId: SAZABI_PROJECT_ID\`.

Capture the returned \`publicKey\` and construct the intake endpoint as \`https://vector.<region>.intake.<domain>\`.

## Phase 3: Configure Vector for Logs

**Why this needs a transform.** Vector's \`opentelemetry\` sink with \`encoding.codec: otlp\` does **not** automatically wrap arbitrary Vector log events into the OTLP envelope. It serializes whatever shape the event already has. If you wire ordinary log events (from \`file\`, \`kubernetes_logs\`, \`journald\`, etc.) directly into the sink, the events are emitted without a \`resourceLogs\` envelope and Sazabi's intake drops 100% of them with no Vector-side error. A \`remap\` transform must build the envelope first.

Give the user the config below. The \`inputs\` on the transform should be the IDs of their actual log sources or transforms — \`["*"]\` works but matches every component (including internal metrics), so prefer explicit IDs in production.

**\`vector.yaml\`:**
\`\`\`yaml
transforms:
  sazabi_logs_otlp:
    type: remap
    inputs: ["*"]  # replace with explicit source/transform IDs
    source: |
      # Build the OTLP resourceLogs envelope. The opentelemetry sink's \`otlp\`
      # codec expects events already in this shape — it does not auto-wrap.
      timestamp_nanos = to_unix_timestamp!(now(), unit: "nanoseconds")

      # Prefer explicit service identity; fall back to source_type, then "vector".
      service_name = .service.name ?? .service_name ?? .service ?? .app ?? .source_type ?? "vector"

      # Map common severity fields; fall back to INFO.
      severity_text = upcase(string!(.level ?? .severity ?? "INFO"))

      .resourceLogs = [{
        "resource": {
          "attributes": [
            { "key": "service.name", "value": { "stringValue": service_name } },
            { "key": "host.name",    "value": { "stringValue": .host ?? "" } }
          ]
        },
        "scopeLogs": [{
          "scope": { "name": "vector" },
          "logRecords": [{
            "timeUnixNano":  timestamp_nanos,
            "body":          { "stringValue": .message ?? encode_json(.) },
            "severityText":  severity_text
          }]
        }]
      }]

sinks:
  sazabi_logs:
    type: opentelemetry
    inputs: ["sazabi_logs_otlp"]
    protocol:
      type: http
      uri: https://<intake-host>/v1/logs
      method: post
      auth:
        strategy: bearer
        token: "<publicKey>"
      encoding:
        codec: otlp
\`\`\`

AskUserQuestion: Have you applied the config and restarted Vector?

## Phase 4: Verify

After the user confirms the config is applied, check whether data is arriving in the Sazabi project. If nothing appears within a few minutes:

1. Run \`vector tap sazabi_logs_otlp\` and confirm events flow into the transform; then \`vector tap sazabi_logs\` to confirm they leave the sink.
2. Check Vector logs at \`error\` level for sink HTTP errors.
3. Verify the \`inputs\` pattern on the transform matches active pipeline components.
4. Confirm the endpoint URL and auth token are correct.

A sink with non-zero throughput that produces no Sazabi-side ingestion almost always means the OTLP envelope wasn't built — re-check that the transform is wired between the sources and the sink, not bypassed.

## Phase 5: Forwarding Traces (optional)

Vector trace forwarding is only useful when the upstream source already emits OTLP-shaped traces — typically an \`opentelemetry\` source with \`use_otlp_decoding.traces: true\` receiving OTLP from instrumented apps. No remap is needed in that case; the events already match the OTLP wire shape.

Do **not** wire \`inputs: ["*"]\` into a traces sink. Point it explicitly at the OTLP-shaped output:

\`\`\`yaml
sources:
  otlp_in:
    type: opentelemetry
    grpc:
      address: 0.0.0.0:4317
    http:
      address: 0.0.0.0:4318
    use_otlp_decoding: true

sinks:
  sazabi_traces:
    type: opentelemetry
    inputs: ["otlp_in.traces"]
    protocol:
      type: http
      uri: https://<intake-host>/v1/traces
      method: post
      auth:
        strategy: bearer
        token: "<publicKey>"
      encoding:
        codec: otlp
\`\`\`

If the user does not have an OTLP-emitting source, skip this phase — there is no straightforward way to fabricate trace context from arbitrary log events.

## Troubleshooting

### Sink runs but no data appears in Sazabi

This is the most common failure mode and almost always means the OTLP envelope is missing.

- Confirm the \`sazabi_logs_otlp\` transform is in the pipeline and the sink's \`inputs\` references it (not \`["*"]\` or a raw source).
- Run \`vector tap sazabi_logs_otlp\` and inspect one event — it should have a top-level \`resourceLogs\` array.
- Run \`vector validate\` to catch config-shape errors before restart.

### Authentication errors

- \`auth.strategy: bearer\` with the token containing only the key (no \`Bearer \` prefix).
- Confirm the public key belongs to the correct Sazabi project.

### Partial data

- Use \`vector top\` to check per-component throughput. If the transform receives events but the sink shows zero outbound, the envelope shape is likely wrong — \`tap\` the transform and verify the structure.
`;var ff=()=>{};var wf=`## Overview

Our Vercel integration automatically streams logs from your serverless functions, edge functions, and static builds, along with OpenTelemetry traces and Web Analytics events, to Sazabi's observability platform.

## How it works

Connect your Vercel account by providing an API token. Select which Vercel projects to monitor, then choose whether to create logs, traces, or analytics drains. Log drains forward every Vercel log source (Static, Lambda, Edge, Build, External, Firewall, Redirect). AI agents analyze logs, traces, and analytics events to identify patterns, anomalies, and root causes of issues.

## Features

- Logs from all Vercel log sources: Static, Lambda, Edge, Build, External, Firewall, Redirect
- OpenTelemetry traces from serverless and edge functions
- Web Analytics events forwarded via analytics drains
- Real-time AI analysis of deployment logs, traces, and analytics

## Requirements

- A Vercel team on the **Pro** or **Enterprise** plan. Vercel's [Drains](https://vercel.com/docs/drains) feature — which Sazabi uses to forward logs, traces, and Web Analytics events — is not available on Hobby or Pro Trial accounts.
- A full-access API token created from your [Vercel account settings](https://vercel.com/account/tokens). Vercel tokens inherit the full permissions of your account; there is no way to select individual scopes. For team accounts, create the token while scoped to the team you want to connect.
- Web Analytics enabled in Vercel for projects where you create analytics drains.`;var kf=()=>{};var _f='---\nname: vercel-data-source-setup\ndescription: Connect Vercel projects to a Sazabi project so deployment logs, OpenTelemetry traces, and Web Analytics events stream into Sazabi. Use when the user wants to "connect Vercel", "set up Vercel logs/traces in Sazabi", "ingest Vercel telemetry", "add a Vercel data source", or after running `sazabi data-sources skill --type vercel`. Drives the Sazabi CLI (`data-sources connections create` + `data-sources streams create`) plus direct calls to Vercel\'s REST API for project discovery; stream creation triggers the backend\'s drain provisioner which calls Vercel\'s `/v1/drains` endpoint.\n---\n\n# Vercel Data Source Setup\n\nWalk the user through connecting Vercel projects to a Sazabi project using the Sazabi CLI for all Sazabi-side operations and direct calls to Vercel\'s REST API for Vercel-side project discovery. Creating a stream via `sazabi data-sources streams create` enqueues a Temporal activity that calls Vercel\'s `/v1/drains` API for that project — there is no separate "provision drains" command.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating a token in the Vercel UI, choosing the Sazabi project, picking Vercel projects, or picking a drain type. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, entering the API token, picking Vercel projects, or picking a drain type.\n- Never echo `VERCEL_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to Vercel\'s REST API in Phase 3.\n\nThe user needs:\n\n1. A Sazabi project to receive the Vercel telemetry.\n2. A Vercel team on the **Pro** or **Enterprise** plan. Drains are not available on Hobby or Pro Trial — see https://vercel.com/docs/drains#usage-and-pricing.\n3. A Vercel account with access to the projects they want to monitor.\n4. A browser to create a Vercel API token.\n5. Web Analytics enabled in Vercel for any project where they want analytics events.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the Vercel telemetry? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing Vercel connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type vercel --json\n```\n\nIf a Vercel connection already exists that targets the Vercel scope (team or personal account) the user wants to onboard, reuse its `id` as `VERCEL_CONNECTION_ID` and skip Phase 2 and Phase 4 — jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same Vercel scope.\n\n## Phase 2: Create and capture the Vercel token\n\nDirect the user to create a token:\n\n> Open **https://vercel.com/account/tokens** and click **Create Token**.\n>\n> - **Token Name**: `Sazabi`\n> - **Scope**: Select the team you want to monitor, or **Full Account** for personal accounts.\n> - **Expiration**: Choose per security policy. No expiration is acceptable for automation.\n>\n> Vercel only displays the token once. If the user closes the dialog without copying it, they must create a new token.\n\n`AskUserQuestion`: ask the user to paste the API token. Capture it as `VERCEL_TOKEN`.\n\nSanity-check the token before discovering projects:\n\n```sh\ncurl -fsS -H "Authorization: Bearer $VERCEL_TOKEN" https://api.vercel.com/v2/user >/dev/null \\\n  && echo "ok" || echo "invalid"\n```\n\nIf `invalid`, the token was revoked, copied incorrectly, or expired. Have the user create a new token and retry. Do not print `VERCEL_TOKEN` in any error output.\n\n## Phase 3: Discover and pick Vercel projects\n\nThe Sazabi CLI does not enumerate Vercel projects — call Vercel\'s REST API directly with `VERCEL_TOKEN`. Both endpoints are paginated and return `{ pagination: { next, ... } }`; iterate until `next` is null/missing or accounts with more than 100 projects/teams will be silently truncated.\n\n```bash\n# Iterate a Vercel paginated endpoint. $1 = base URL, $2 = cursor param name\n# (`from` for /v10/projects, `until` for /v2/teams). Emits one JSON page per line.\nvercel_paginate() {\n  local url="$1" param="$2" page next\n  while :; do\n    page=$(curl -fsS -H "Authorization: Bearer $VERCEL_TOKEN" "$url") || return 1\n    printf \'%s\\n\' "$page"\n    next=$(jq -r \'.pagination.next // empty\' <<<"$page")\n    [ -z "$next" ] && break\n    url="${1}&${param}=${next}"\n  done\n}\n\n# Teams the token can access; cache for the per-team loop below.\nTEAMS_JSON=$(vercel_paginate "https://api.vercel.com/v2/teams?limit=100" until \\\n  | jq -s \'[.[].teams[]]\')\necho "$TEAMS_JSON" | jq \'.[] | {id, name, slug}\'\n\n# Personal-account projects (no teamId param).\nvercel_paginate "https://api.vercel.com/v10/projects?limit=100" from \\\n  | jq -s \'[.[].projects[]] | .[] | {id, name, framework}\'\n\n# Projects per discovered team.\necho "$TEAMS_JSON" | jq -r \'.[] | "\\(.id)\\t\\(.name)"\' \\\n  | while IFS=$\'\\t\' read -r TEAM_ID TEAM_NAME; do\n      vercel_paginate "https://api.vercel.com/v10/projects?limit=100&teamId=$TEAM_ID" from \\\n        | jq -s --arg team "$TEAM_NAME" \'[.[].projects[]] | .[] | {id, name, framework, team: $team}\'\n    done\n```\n\nGroup the results: under each `team.name` for team-scoped projects, and under **Personal account** for projects with no `teamId`.\n\nResolve the connection scope:\n\n- If every project the user wants to onboard belongs to the same non-personal team, capture `VERCEL_TEAM_ID` and `VERCEL_TEAM_NAME` from that team\'s record. The Sazabi connection will be scoped to that team.\n- If the user only wants personal-account projects, leave `VERCEL_TEAM_ID` and `VERCEL_TEAM_NAME` unset.\n- If the user wants projects across multiple teams or across team + personal scopes, plan **one Sazabi connection per scope** — repeat Phase 4 and Phase 5 for each.\n\n`AskUserQuestion`: which Vercel projects should Sazabi connect?\n\nFor each selected project, ask which drain type to create. Each `(project, drainType)` pair becomes one Sazabi stream.\n\n| Drain type | Stream config fields                                  |\n| ---------- | ----------------------------------------------------- |\n| Logs       | `drainType: "logs"`, `ingestTraces: false`            |\n| Traces     | `drainType: "traces"`, `ingestTraces: true`           |\n| Analytics  | `drainType: "analytics"` (omit `ingestTraces`)        |\n\nMultiple drain types per project are supported — each drain type creates a separate stream and a separate Vercel drain.\n\nDo not pass a narrowed `sources` array for log streams. The backend overwrites the Vercel-side drain filter with the full source set (`static, lambda, edge, build, external, firewall, redirect`) at provision time, so narrowing has no effect on what Vercel forwards. Omit `sources` from the stream config.\n\nBuild `VERCEL_PROJECTS` as a list of `(vercelProjectId, vercelProjectName, drainType)` triples for use in Phase 5.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection:\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token "$VERCEL_TOKEN" \\\n  --arg teamId "${VERCEL_TEAM_ID:-}" \\\n  --arg teamName "${VERCEL_TEAM_NAME:-}" \\\n  \'{vercelApiToken: $token}\n   + (if $teamId  != "" then {vercelTeamId:  $teamId } else {} end)\n   + (if $teamName != "" then {vercelTeamName: $teamName} else {} end)\')\n\nVERCEL_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type vercel \\\n  --metadata "$METADATA_JSON" \\\n  --json | jq -r \'.connectionId\')\n```\n\nThe connection persists the (encrypted) token and team scope. It does **not** provision any Vercel drains on its own — drain creation happens per stream in Phase 5.\n\n## Phase 5: Create one stream per (project, drainType)\n\nFor each entry in `VERCEL_PROJECTS`, build a stream config and call `streams create`. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the backend\'s `provisionStream` for vercel — which in turn POSTs to Vercel\'s `/v1/drains` API.\n\n```sh\n# Logs stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "logs", ingestTraces: false}\')" \\\n  --json\n\n# Traces stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME (traces)" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "traces", ingestTraces: true}\')" \\\n  --json\n\n# Analytics stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME (analytics)" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "analytics"}\')" \\\n  --json\n```\n\nReuse the exact `id` and `name` values returned by Vercel\'s API for `vercelProjectId` and `vercelProjectName`. Do not invent or reformat them.\n\nIf a stream creation fails because of a duplicate display name, append the drain type (e.g. `"$VERCEL_PROJECT_NAME (logs)"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nDrain provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id "$VERCEL_CONNECTION_ID" --json\n```\n\nEach stream\'s status transitions from `pending` (or `provisioning`) to `active` once the backend finishes calling Vercel\'s `/v1/drains`. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that project and surface it to the user — the Temporal activity log will have the underlying error, but the agent doesn\'t have direct access to it from this skill.\n\n**Pass 2 — telemetry arrival.** Drains only emit data when the underlying Vercel project receives traffic. Either trigger traffic (deploy, redeploy, hit a route, navigate a Web Analytics-instrumented page) or wait for natural traffic, then:\n\n```sh\n$SAZABI_CLI logs tail --json --search vercel\n```\n\nConfirm new records arrive tagged with the corresponding `vercelProjectName`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `VERCEL_CONNECTION_ID`.\n- One line per stream: project name, drain type, current status.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored out (you can detect this via a non-`active`, non-`pending`, non-`provisioning` status), call out the failed project name and offer to recreate just that stream.\n\nDo not include `VERCEL_TOKEN` in the summary.\n\n## Troubleshooting\n\n### Invalid or expired Vercel token\n\nThe token may have been revoked, copied incorrectly, or expired. Recreate at https://vercel.com/account/tokens and rerun Phase 2. The connection record still exists with a now-stale token — either delete it and rerun the skill from Phase 4, or update the connection metadata if your Sazabi CLI version supports `connections update` (check `$SAZABI_CLI data-sources connections -h`).\n\n### Token has no access to expected projects\n\nVercel API tokens are scoped to a team or to the personal account at creation time. If the desired projects are missing from the `/v10/projects` response in Phase 3, the token was created under the wrong scope. Have the user create a new token while scoped to the correct team and rerun from Phase 2.\n\n### Stream config rejected by Sazabi\n\n`streams create` validates the `config` payload against the source\'s stream schema before insert. If the CLI returns a validation error, check that `vercelProjectId` and `vercelProjectName` are non-empty strings and `drainType` is one of `logs`, `traces`, `analytics`. Field names are case-sensitive.\n\n### Drains feature unavailable (Hobby / Pro Trial)\n\nIf `streams list` shows a stream stuck or errored, and the underlying error mentions a permissions or feature-availability issue, the Vercel team is on Hobby or Pro Trial. Drains require Pro or Enterprise — see https://vercel.com/docs/drains#usage-and-pricing. The user must upgrade the Vercel team. The connection record and the failed stream can be deleted before retry; or leave them and Vercel-side drain creation will succeed next time provisioning is retried.\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound; longer than that suggests the worker is unhealthy or the activity is throwing a non-retryable error. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No telemetry arriving after streams are `active`\n\nA drain that is `active` on the Sazabi side does not emit logs unless the Vercel project receives requests, builds, or Web Analytics events. Trigger real traffic against the Vercel project. For analytics specifically, confirm Web Analytics is enabled in the Vercel project\'s settings — drain creation succeeds even when analytics is disabled, and the drain will silently produce nothing.\n\n### Manual connection already exists without streams\n\nIf someone previously ran `sazabi data-sources connections create --type vercel` without the corresponding `streams create` calls, the connection exists but `streams list --connection-id <id>` returns empty. Reuse the existing `VERCEL_CONNECTION_ID` and continue from Phase 5 to add streams; do not create a second connection for the same Vercel scope.\n';var $f=()=>{};var Tf,Of;var Sf=g(()=>{lp();up();dp();bp();yp();vp();Ip();wp();_p();Op();Pp();Dp();Np();xp();jp();Up();Fp();Bp();Hp();Jp();Vp();Yp();Zp();ev();rv();nv();av();lv();uv();dv();bv();yv();vv();Iv();wv();_v();Ov();Pv();Dv();Nv();xv();jv();Uv();Fv();Bv();Hv();Jv();Vv();Yv();Zv();ef();rf();nf();cf();hf();sf();gf();mf();pf();ff();kf();$f();Tf={cloudflare:hp.trim(),cloudflare_workers:gp.trim(),cloudwatch:pp.trim(),convex:kp.trim(),datadog:Tp.trim(),daytona:Ap.trim(),digital_ocean:Cp.trim(),e2b:Ep.trim(),elastic_cloud:Kp.trim(),fluent_bit:Mp.trim(),fly_io:Wp.trim(),gcp:Qp.trim(),grafana_alloy:ov.trim(),inngest:cv.trim(),langchain:sv.trim(),mastra:mv.trim(),neon:fv.trim(),netlify:$v.trim(),openrouter:Sv.trim(),otel:Lv.trim(),otel_collector:zv.trim(),posthog:Rv.trim(),railway:Gv.trim(),render:qv.trim(),sentry:Xv.trim(),sentry_platform:tf.trim(),supabase:af.trim(),temporal:uf.trim(),trigger_dev:bf.trim(),vector:vf.trim(),vercel:wf.trim()},Of={cloudflare:sp.trim(),cloudflare_workers:mp.trim(),cloudwatch:fp.trim(),convex:$p.trim(),datadog:Sp.trim(),daytona:Lp.trim(),digital_ocean:zp.trim(),e2b:Rp.trim(),elastic_cloud:Gp.trim(),fluent_bit:qp.trim(),fly_io:Xp.trim(),gcp:tv.trim(),grafana_alloy:iv.trim(),inngest:hv.trim(),langchain:gv.trim(),mastra:pv.trim(),neon:kv.trim(),netlify:Tv.trim(),openrouter:Av.trim(),otel:Cv.trim(),otel_collector:Ev.trim(),posthog:Kv.trim(),railway:Mv.trim(),render:Wv.trim(),sentry:Qv.trim(),sentry_platform:of.trim(),supabase:lf.trim(),temporal:df.trim(),trigger_dev:yf.trim(),vector:If.trim(),vercel:_f.trim()}});var ul=(e)=>{let t=Of[e];if(t)return t;return Tf[e]};var Pf=g(()=>{Sf()});var C="available";var de,Fn="Authorization=Bearer ${context.publicKey}",je="Bearer ${context.publicKey}",Kn=(e)=>[`Add the OpenTelemetry SDK to your ${e}. Most languages have official OpenTelemetry SDKs available (e.g., \`@opentelemetry/api\` for Node.js, \`opentelemetry-api\` for Python, etc.).`,`Initialize the OpenTelemetry SDK in your ${e}. The SDK will automatically read these environment variables and export telemetry data to Sazabi.`,`Set the following environment variables in your ${e} environment. These variables configure the OpenTelemetry exporter to send logs, traces, and metrics to Sazabi.`],br=(e,t="http/protobuf")=>[{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:`https://${e}.\${context.projectRegion}.intake.\${context.intakeDomain}`,copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:"Authorization=Bearer ${context.publicKey}",copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:t,copyLabel:"OTLP protocol"}],Bn;var ge=g(()=>{de={label:"Connect",pendingLabel:"Connecting..."},Bn={kind:"prose",text:"The OpenTelemetry SDK will automatically detect these environment variables and start exporting telemetry data without requiring any additional code changes."}});var sl,dl,gl;var Af=g(()=>{ge();sl={kind:"linear",steps:[{kind:"prose",text:"**Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs."},{kind:"prose",text:"Create a Cloudflare API token with **Account Settings: Read**, **Zone: Read**, and **Zone Logs: Edit** permissions. The template below preselects the required permissions. Pick the account you want to connect, click **Continue to summary**, then **Create Token**, and paste the value below."},{kind:"external-link",label:"Open Cloudflare API token template",href:"https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22account_settings%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22account%22%7D%2C%7B%22key%22%3A%22logs%22%2C%22type%22%3A%22edit%22%2C%22scope%22%3A%22zone%22%7D%2C%7B%22key%22%3A%22zone%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22zone%22%7D%5D&name=Sazabi+Cloudflare+Logpush"},{id:"token",kind:"secret",label:"Cloudflare API token",description:"Token with Account Settings Read, Zone Read, and Logs Edit permissions.",placeholder:"Enter your Cloudflare API token"},{id:"accountId",kind:"text",label:"Cloudflare account ID",description:"The 32-character hex ID from your Cloudflare dashboard URL or account overview.",placeholder:"e.g. a1b2c3d4e5f6...",pattern:"^[a-f0-9]{32}$",patternMessage:"Enter the 32-character Cloudflare account ID."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token",accountId:"$accountId"},resultAs:"validate"}],metadata:{connectionMode:"native",cloudflareApiToken:"$token",accountId:"$accountId",accountName:"$validate.accountName"},button:de}},dl={content:{kind:"list",listAction:"listLogpushDatasets",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"datasetName",header:"Dataset",cell:"badge"},{field:"scopeDetail",header:"Scope"}],searchPlaceholder:"Search datasets and zones...",searchFields:["datasetName","scopeDetail"],dedupeByConfigField:["scope","zoneId","dataset"],dedupeMissingFieldAsEmpty:!0,emptyState:{noMatches:"No Logpush datasets match your search.",allConfigured:"All Logpush datasets already have streams configured."},toStreamItem:{displayName:"$item.displayName",config:{scope:"$item.scope",accountId:"$item.accountId",zoneId:"$item.zoneId",zoneName:"$item.zoneName",dataset:"$item.dataset",datasetName:"$item.datasetName"}}}},gl={steps:[{kind:"prose",text:"**Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs."},{kind:"prose",text:"Create a Logpush job in your [Cloudflare dashboard](https://dash.cloudflare.com) under Analytics & Logs > Logpush, or via the Cloudflare API. Select **HTTP** as the destination type and paste the destination URL below."},{kind:"copyable",label:"Destination URL",value:"https://cloudflare-logpush.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs?api_key=${context.publicKey}"},{kind:"prose",text:"In the Logpush job's **Output options**, set **Timestamp format** to **RFC3339** so Sazabi can parse event times accurately."}]}});var OD,Df;var Lf=g(()=>{Af();OD=["cloudflareApiToken"],Df={id:"cloudflare",name:"Cloudflare Logpush",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:OD,subtitle:"Stream your Cloudflare Logpush jobs to Sazabi for edge network observability.",features:["Zone Logpush","Account Logpush","Edge analytics"],setupSkill:C,dashboard:{iconKey:"cloudflare",intakeSourceId:"cloudflare-logpush",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{procedure:"cloudflare.validateToken"}},list:{listLogpushDatasets:{procedure:"cloudflare.listLogpushDatasets",itemsField:"items"}}}}}});var bl;var Nf=g(()=>{ge();bl={perStreamInstructions:!0,steps:[{kind:"prose",text:"In your Cloudflare dashboard, go to **Workers & Pages > Observability > Telemetry** and click **Add Destination**. Add one destination for logs and a second for traces. The fields in each tab below map 1:1 to Cloudflare's **Add New Destination** dialog."},{kind:"tab-set",tabs:[{id:"logs",label:"Logs",steps:[{kind:"copyable",label:"Destination Type",value:"Logs"},{kind:"copyable",label:"OTLP Logs Endpoint",value:"https://cloudflare.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs"},{kind:"copyable",label:"Destination Name",value:"sazabi-logs"},{kind:"copyable-pairs",label:"Custom Headers",description:"Click **Add Header** and paste these values.",pairs:[{name:"Authorization",value:je}]}]},{id:"traces",label:"Traces",steps:[{kind:"copyable",label:"Destination Type",value:"Traces"},{kind:"copyable",label:"OTLP Traces Endpoint",value:"https://cloudflare.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces"},{kind:"copyable",label:"Destination Name",value:"sazabi-traces"},{kind:"copyable-pairs",label:"Custom Headers",description:"Click **Add Header** and paste these values.",pairs:[{name:"Authorization",value:je}]}]}]},{kind:"prose",text:"In each Worker's `wrangler.jsonc` / `wrangler.toml`, opt into the destinations by name. Cloudflare ignores destinations a Worker has not explicitly listed."}]}});var Cf;var xf=g(()=>{Nf();Cf={id:"cloudflare_workers",name:"Cloudflare Workers",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleEligible:!0,subtitle:"Stream Cloudflare Workers Observability logs and traces to Sazabi via OTLP.",features:["Workers Observability OTLP logs","Workers Observability OTLP traces"],setupSkill:C,dashboard:{iconKey:"cloudflare",intakeSourceId:"cloudflare",streamSelectorLayout:"sidepanel"},streamCardinality:"multi"}});var ml,yl;var zf=g(()=>{ge();ml={kind:"linear",prefetch:{action:"prefetch",input:{projectId:"${context.projectId}",templateUrl:"${context.cloudformationTemplateUrl}"},resultAs:"cloudwatch"},steps:[{kind:"prose",text:"Set up an IAM role in your AWS account to allow Sazabi to read your CloudWatch logs. Use one of the setup methods below, then paste the resulting Role ARN."},{kind:"tab-set",tabs:[{id:"cloudformation",label:"CloudFormation",steps:[{kind:"prose",text:"Click the button below to launch a CloudFormation stack in your AWS account. After the stack is created, find your role ARN under **Stacks → ${context.extras.cloudwatch.stackName} → Outputs** and copy the `RoleArn` value."},{kind:"external-link",label:"Launch CloudFormation stack",href:"${context.extras.cloudwatch.cloudFormationQuickCreateUrl}"}]},{id:"terraform",label:"Terraform",steps:[{kind:"prose",text:"Add this configuration to your Terraform files."},{kind:"code",language:"hcl",copyLabel:"Terraform",value:`data "aws_caller_identity" "current" {}

resource "aws_iam_role" "sazabi_log_ingestion" {
  name = "SazabiLogIngestion"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { AWS = "arn:aws:iam::\${context.extras.cloudwatch.sazabiAccountId}:root" }
      Action = "sts:AssumeRole"
      Condition = { StringEquals = { "sts:ExternalId" = "\${context.extras.cloudwatch.externalId}" } }
    }]
  })
}

resource "aws_iam_role_policy" "sazabi_cloudwatch_logs" {
  name = "SazabiLogSubscriptionManagement"
  role = aws_iam_role.sazabi_log_ingestion.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      { Sid = "DescribeLogGroups", Effect = "Allow", Action = ["logs:DescribeLogGroups"], Resource = "*" },
      { Sid = "DescribeSubscriptionFilters", Effect = "Allow", Action = ["logs:DescribeSubscriptionFilters"], Resource = "arn:aws:logs:*:$\${data.aws_caller_identity.current.account_id}:log-group:*" },
      { Sid = "ManageSubscriptionFilters", Effect = "Allow", Action = ["logs:PutSubscriptionFilter","logs:DeleteSubscriptionFilter"], Resource = ["arn:aws:logs:*:$\${data.aws_caller_identity.current.account_id}:log-group:*","arn:aws:logs:*:\${context.extras.cloudwatch.sazabiAccountId}:destination:sazabi-*"] },
      { Sid = "ManageAccountPolicies", Effect = "Allow", Action = ["logs:PutAccountPolicy","logs:DeleteAccountPolicy","logs:DescribeAccountPolicies"], Resource = "arn:aws:logs:*:$\${data.aws_caller_identity.current.account_id}:*" }
    ]
  })
}

output "sazabi_role_arn" {
  value = aws_iam_role.sazabi_log_ingestion.arn
}`}]},{id:"cli",label:"CLI",steps:[{kind:"prose",text:"Run the following commands in your terminal. Replace `YOUR_ACCOUNT_ID` with your 12-digit AWS account ID."},{kind:"code",language:"bash",copyLabel:"CLI",value:`cat > trust-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "AWS": "arn:aws:iam::\${context.extras.cloudwatch.sazabiAccountId}:root" },
    "Action": "sts:AssumeRole",
    "Condition": { "StringEquals": { "sts:ExternalId": "\${context.extras.cloudwatch.externalId}" } }
  }]
}
EOF

cat > permission-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    { "Sid": "DescribeLogGroups", "Effect": "Allow", "Action": ["logs:DescribeLogGroups"], "Resource": "*" },
    { "Sid": "DescribeSubscriptionFilters", "Effect": "Allow", "Action": ["logs:DescribeSubscriptionFilters"], "Resource": "arn:aws:logs:*:YOUR_ACCOUNT_ID:log-group:*" },
    { "Sid": "ManageSubscriptionFilters", "Effect": "Allow", "Action": ["logs:PutSubscriptionFilter","logs:DeleteSubscriptionFilter"], "Resource": ["arn:aws:logs:*:YOUR_ACCOUNT_ID:log-group:*","arn:aws:logs:*:\${context.extras.cloudwatch.sazabiAccountId}:destination:sazabi-*"] },
    { "Sid": "ManageAccountPolicies", "Effect": "Allow", "Action": ["logs:PutAccountPolicy","logs:DeleteAccountPolicy","logs:DescribeAccountPolicies"], "Resource": "arn:aws:logs:*:YOUR_ACCOUNT_ID:*" }
  ]
}
EOF

aws iam create-role --role-name SazabiLogIngestion --assume-role-policy-document file://trust-policy.json
aws iam put-role-policy --role-name SazabiLogIngestion --policy-name SazabiLogSubscriptionManagement --policy-document file://permission-policy.json
aws iam get-role --role-name SazabiLogIngestion --query 'Role.Arn' --output text`}]}]},{id:"arn",kind:"secret",label:"Role ARN",placeholder:"arn:aws:iam::123456789012:role/SazabiLogIngestion-Sazabi-...",pattern:"^arn:aws:iam::(\\d{12}):role\\/[\\w+=,.@\\-\\/]+$",patternMessage:"Invalid ARN format. Expected: arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME"}],submit:{actions:[{kind:"validate",action:"validate",input:{projectId:"${context.projectId}",roleArn:"$arn",externalId:"${context.extras.cloudwatch.externalId}"},resultAs:"validateRole"}],metadata:{roleArn:"$arn",awsAccountId:"$validateRole.awsAccountId",externalId:"${context.extras.cloudwatch.externalId}"},displayName:"AWS Account $validateRole.awsAccountId",button:de}},yl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}",pattern:""},columns:[{field:"name",header:"Log group",cell:"mono"},{field:"arn",header:"Region",width:"w-32",cell:"badge",extract:"regex:^arn:aws:logs:([^:]+):"}],searchPlaceholder:"Search log groups...",searchFields:["name"],dedupeByConfigField:"logGroupName",filterItemsBy:{field:"arn",operator:"regex-group-equals",pattern:"^arn:aws:logs:([^:]+):",equals:"${context.projectRegion}"},infoBanner:"Only showing log groups from ${context.projectRegion}. To stream logs from other regions, create a new project for that region in Sazabi.",emptyState:{noMatches:"No log groups found.",allConfigured:"All log groups already have streams configured.",noResults:"No log groups found in ${context.projectRegion} region."},toStreamItem:{displayName:"$item.name",config:{logGroupName:"$item.name",logGroupArn:"$item.arn"}}}}});var SD,jf;var Ef=g(()=>{zf();SD=["externalId"],jf={id:"cloudwatch",name:"CloudWatch",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:SD,subtitle:"Stream your AWS CloudWatch logs directly to Sazabi for real-time analysis and alerting.",features:["Log forwarding","Real-time streaming","Multi-region support"],setupSkill:C,dashboard:{iconKey:"cloudwatch",intakeSourceId:"cloudwatch",streamSelectorLayout:"sidepanel",connectionMetadataSection:{title:"AWS account details",description:"The AWS account and IAM role used for log ingestion.",fields:[{key:"awsAccountId",label:"AWS account ID",description:"AWS account connected to this data source."},{key:"roleArn",label:"IAM role ARN",description:"IAM role Sazabi assumes for log ingestion."}]},actions:{submit:{validate:{kind:"source-action",actionId:"validate-role"}},list:{list:{kind:"source-action",actionId:"list-log-groups",itemsField:"logGroups"}},prefetch:{prefetch:{kind:"source-action",actionId:"get-setup-info"}}}}}});var pl,vl;var Uf=g(()=>{ge();pl={kind:"linear",steps:[{kind:"prose",text:"Enter a Convex team access token to connect your deployments. You can create one in your [Convex dashboard team settings](https://dashboard.convex.dev)."},{id:"token",kind:"secret",label:"Team access token",placeholder:"eyJ..."},{id:"team",kind:"select",label:"Team",placeholder:"Select a team",optionsAction:"options",optionsInput:{token:"$token"},optionValueField:"id",optionLabelField:"name",optionDescriptionField:"slug"}],submit:{metadata:{accessToken:"$token",teamId:"$team.id",teamName:"$team.name"},displayName:"$team.name",button:de}},vl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"slug",header:"Slug",width:"w-48",cell:"muted"}],searchPlaceholder:"Search deployments...",searchFields:["name"],dedupeByConfigField:"deploymentId",emptyState:{noMatches:"No deployments found.",allConfigured:"All deployments already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{deploymentId:"$item.id",deploymentName:"$item.name"}}}}});var PD,Rf;var Ff=g(()=>{Uf();PD=["accessToken"],Rf={id:"convex",name:"Convex",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:PD,subtitle:"Forward your Convex deployment logs directly to Sazabi for serverless observability.",features:["Function logs","Database mutations","Scheduled job monitoring"],setupSkill:C,dashboard:{iconKey:"convex",intakeSourceId:"convex",streamSelectorLayout:"sidepanel",actions:{list:{options:{procedure:"convex.listTeams",itemsField:"teams",sensitiveInputFields:["token"]},list:{procedure:"convex.listDeployments",itemsField:"deployments",sensitiveInputFields:["token"]}}}}}});var fl;var Kf=g(()=>{fl={steps:[{kind:"prose",text:"Configure your Datadog Agent to forward logs to Sazabi. Use the dual-ship option when the same Agent should keep sending logs to Datadog. Use the dedicated Agent option for sidecars or containers that send logs only to Sazabi."},{kind:"copyable",label:"Sazabi public key",value:"${context.publicKey}",copyLabel:"Sazabi public key"},{kind:"copyable",label:"Intake URL",value:"https://datadog.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"Datadog Agent intake URL"},{kind:"code-tabs",label:"Configuration options",description:"Choose one option. For dual-shipping, leave the top-level Datadog `api_key` or `DD_API_KEY` unchanged and add Sazabi as a logs endpoint. For a dedicated Sazabi sidecar, set `DD_API_KEY` to the Sazabi public key.",tabs:[{id:"datadog-yaml-dual-ship",label:"`datadog.yaml` dual-ship",language:"yaml",copyLabel:"datadog.yaml dual-ship configuration",value:`# Enable logs collection if it is not already enabled.
logs_enabled: true

# Send a copy of logs to Sazabi while the primary Agent config
# continues sending telemetry to Datadog.
logs_config:
  force_use_http: true
  additional_endpoints:
    - api_key: \${context.publicKey}
      Host: datadog.\${context.projectRegion}.intake.\${context.intakeDomain}
      Port: 443`},{id:"env-dual-ship",label:"Env vars dual-ship",language:"bash",copyLabel:"Datadog Agent dual-ship environment variables",value:`DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_FORCE_USE_HTTP=true
DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS='[{"api_key":"\${context.publicKey}","Host":"datadog.\${context.projectRegion}.intake.\${context.intakeDomain}","Port":443}]'`},{id:"env-sazabi-only",label:"Env vars Sazabi-only",language:"bash",copyLabel:"Dedicated Datadog Agent environment variables",value:"DD_API_KEY=${context.publicKey}\nDD_LOGS_ENABLED=true\nDD_LOGS_CONFIG_LOGS_DD_URL=https://datadog.${context.projectRegion}.intake.${context.intakeDomain}\nDD_LOGS_CONFIG_FORCE_USE_HTTP=true"},{id:"ecs-sidecar",label:"ECS sidecar",language:"bash",copyLabel:"ECS Datadog Agent sidecar environment variables",value:`ECS_FARGATE=true
DD_API_KEY=\${context.publicKey}
DD_LOGS_ENABLED=true
DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true
DD_LOGS_CONFIG_LOGS_DD_URL=https://datadog.\${context.projectRegion}.intake.\${context.intakeDomain}
DD_LOGS_CONFIG_FORCE_USE_HTTP=true`}]},{kind:"prose",text:"Restart or redeploy the Agent after changing its configuration. `DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS` requires Datadog Agent v6.18+ or v7.18+. Avoid configuring both a Sazabi additional endpoint and a Sazabi-only logs URL in the same Agent, or you may send duplicate logs."}]}});var Bf;var Gf=g(()=>{Kf();Bf={id:"datadog",name:"Datadog Agent",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK/agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Datadog Agent logs directly to Sazabi for AI-powered observability.",features:["Agent log forwarding","Minimal configuration","Keep existing setup"],setupSkill:C,dashboard:{iconKey:"datadog",intakeSourceId:"datadog"}}});var Il;var Hf=g(()=>{ge();Il={steps:[{kind:"prose",text:"In the [Daytona dashboard](https://app.daytona.io), open **Settings** and find the **OpenTelemetry** card (visible to organization owners only). Set the OTLP endpoint and add an `Authorization` header using the values below."},{kind:"copyable",label:"OTLP Endpoint",value:"https://daytona.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Authorization header",value:je},{kind:"prose",text:"Notes"},{kind:"bulleted-list",items:["Save the OpenTelemetry card; sandboxes begin exporting telemetry automatically on their next start with no per-sandbox change required.","Filter in Sazabi using the resource attributes Daytona stamps on each record: `daytona_organization_id`, `daytona_region_id`, `daytona_snapshot`.","Sazabi currently stores logs and traces from this source. OTLP metrics are accepted at the intake endpoint but not yet persisted.","Daytona only retains sandbox telemetry for 3 days in its own dashboard, so Sazabi is the durable store."]}]}});var Mf;var Jf=g(()=>{Hf();Mf={id:"daytona",name:"Daytona",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual webhook setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream sandbox telemetry from your Daytona organization to Sazabi via org-level OpenTelemetry export.",features:["Org-level OTLP logs and traces","Sandbox resource attributes (organization, region, snapshot)","Durable retention beyond Daytona's 3-day window"],setupSkill:C,dashboard:{iconKey:"daytona",intakeSourceId:"daytona"}}});var kl,wl;var qf=g(()=>{ge();kl={kind:"linear",steps:[{kind:"prose",text:"Enter your [DigitalOcean personal access token](https://cloud.digitalocean.com/account/api/tokens). Use **Full Access** scope, or Custom Scopes with `app:read`, `app:update`, `actions:read`, `regions:read`, and `sizes:read` so Sazabi can provision log forwarding on your apps."},{id:"token",kind:"secret",label:"Personal access token",placeholder:"dop_v1_..."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"}}],metadata:{apiToken:"$token"},button:de}},wl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"componentCount",header:"Components",width:"w-40",cell:"badge"}],searchPlaceholder:"Search apps...",searchFields:["name"],dedupeByConfigField:"appId",emptyState:{noMatches:"No apps found.",allConfigured:"All apps already have log streams configured.",noItems:"No App Platform apps found in this DigitalOcean account. Create an app in DigitalOcean first, then return here to forward its logs."},toStreamItem:{displayName:"$item.name",config:{appId:"$item.id",appName:"$item.name"}}}}});var AD,Vf;var Wf=g(()=>{qf();AD=["apiToken"],Vf={id:"digital_ocean",name:"DigitalOcean",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:AD,subtitle:"Forward your DigitalOcean infrastructure logs directly to Sazabi for unified observability.",features:["Log forwarding","App Platform logs"],setupSkill:C,dashboard:{iconKey:"digital-ocean",intakeSourceId:"digital-ocean",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-text",header:"App",width:"w-32",configField:"appName",fallbackLabel:"Unknown app"}],actions:{submit:{validate:{kind:"source-action",actionId:"validate-token",sensitiveInputFields:["token"]}},list:{list:{kind:"source-action",actionId:"list-apps",itemsField:"apps"}}}}}});var $l;var Yf=g(()=>{$l={steps:[{kind:"prose",text:"Set these values as environment variables in your application."},{kind:"copyable",label:"`SAZABI_INTAKE_URL`",value:"https://e2b.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs",copyLabel:"Intake URL"},{kind:"copyable",label:"`SAZABI_PUBLIC_KEY`",value:"${context.publicKey}",copyLabel:"Public key"},{kind:"code-tabs",label:"SDK integration",tabs:[{id:"typescript",label:"TypeScript",language:"typescript",copyLabel:"TypeScript code",value:`import { Sandbox } from '@e2b/code-interpreter'
import { logs, SeverityNumber } from '@opentelemetry/api-logs'
import { LoggerProvider, BatchLogRecordProcessor } from '@opentelemetry/sdk-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'

const code = 'console.log("hello from e2b")'

// Configure OpenTelemetry logger with batching. The OTLP exporter targets
// Sazabi's e2b intake endpoint; the BatchLogRecordProcessor coalesces emits
// so we ship one HTTP request per batch instead of per stdout line.
const loggerProvider = new LoggerProvider({
  resource: resourceFromAttributes({ 'service.name': 'e2b-sandbox' }),
  processors: [
    new BatchLogRecordProcessor(
      new OTLPLogExporter({
        url: process.env.SAZABI_INTAKE_URL,
        headers: { Authorization: \`Bearer \${process.env.SAZABI_PUBLIC_KEY}\` },
      })
    ),
  ],
})

logs.setGlobalLoggerProvider(loggerProvider)
const logger = logs.getLogger('e2b')

// Initialize E2B sandbox
const sandbox = await Sandbox.create()

try {
  // Run code and stream logs. \`language\` defaults to Python in the E2B SDK,
  // so passing 'javascript' here is required when the code is JS.
  await sandbox.runCode(code, {
    language: 'javascript',
    onStdout: (data) => {
      logger.emit({
        severityNumber: SeverityNumber.INFO,
        body: data.line,
        attributes: { 'e2b.stream': 'stdout', 'e2b.sandbox_id': sandbox.sandboxId },
      })
    },
    onStderr: (data) => {
      logger.emit({
        severityNumber: SeverityNumber.ERROR,
        body: data.line,
        attributes: { 'e2b.stream': 'stderr', 'e2b.sandbox_id': sandbox.sandboxId },
      })
    },
  })
} finally {
  try {
    // Kill the sandbox so it doesn't sit idle against your concurrent-sandbox
    // quota until E2B's default timeout expires.
    await sandbox.kill()
  } finally {
    // Flush logs before exit; runs even if sandbox.kill() throws.
    await loggerProvider.shutdown()
  }
}`},{id:"python",label:"Python",language:"python",copyLabel:"Python code",value:`import os
from e2b_code_interpreter import Sandbox
from opentelemetry import _logs
from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor
from opentelemetry.exporter.otlp.proto.http._log_exporter import OTLPLogExporter
from opentelemetry.sdk.resources import Resource
import logging

code = 'print("hello from e2b")'

# Configure OpenTelemetry logger with batching. The OTLP exporter targets
# Sazabi's e2b intake endpoint; the BatchLogRecordProcessor coalesces emits
# so we ship one HTTP request per batch instead of per stdout line.
resource = Resource.create({"service.name": "e2b-sandbox"})
logger_provider = LoggerProvider(resource=resource)

logger_provider.add_log_record_processor(
    BatchLogRecordProcessor(
        OTLPLogExporter(
            endpoint=os.environ["SAZABI_INTAKE_URL"],
            headers={"Authorization": f"Bearer {os.environ['SAZABI_PUBLIC_KEY']}"},
        )
    )
)

_logs.set_logger_provider(logger_provider)

# Bridge Python's stdlib logging to OpenTelemetry. Attach the handler to the
# 'e2b' logger only (not root) and disable propagation so unrelated app logs
# are not forwarded to Sazabi.
handler = LoggingHandler(logger_provider=logger_provider)
logger = logging.getLogger("e2b")
logger.addHandler(handler)
logger.propagate = False
logger.setLevel(logging.INFO)

# Initialize E2B sandbox. Use \`Sandbox.create()\` rather than \`Sandbox()\` so
# the SDK provisions a new sandbox instance instead of trying to attach to an
# existing one.
sandbox = Sandbox.create()

try:
    def on_stdout(data):
        logger.info(data.line, extra={
            "e2b.stream": "stdout",
            "e2b.sandbox_id": sandbox.sandbox_id,
        })

    def on_stderr(data):
        logger.error(data.line, extra={
            "e2b.stream": "stderr",
            "e2b.sandbox_id": sandbox.sandbox_id,
        })

    sandbox.run_code(
        code,
        on_stdout=on_stdout,
        on_stderr=on_stderr,
    )
finally:
    try:
        # Kill the sandbox so it doesn't sit idle against your concurrent-sandbox
        # quota until E2B's default timeout expires.
        sandbox.kill()
    finally:
        # Flush logs before exit; runs even if sandbox.kill() raises.
        logger_provider.shutdown()`}]}]}});var Xf;var Zf=g(()=>{Yf();Xf={id:"e2b",name:"E2B",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your E2B sandbox logs directly to Sazabi for code execution observability.",features:["Sandbox stdout/stderr capture"],setupSkill:C,dashboard:{iconKey:"e2b",intakeSourceId:"e2b"}}});var _l;var Qf=g(()=>{_l={perStreamInstructions:!0,steps:[{kind:"prose",text:"Forward logs from your Elastic Cloud deployment to Sazabi over OTLP/HTTP. Pick the forwarder that matches your stack: Elastic Agent (8.13+, embedded OTel Collector) or Logstash."},{kind:"tab-set",tabs:[{id:"elastic-agent",label:"Elastic Agent",steps:[{kind:"prose",text:"Elastic Agent 8.13+ ships an embedded OpenTelemetry Collector (EDOT). Configure Sazabi as a standard `otlphttp` exporter — Fleet's **Outputs** UI does not expose an OTLP type, so point Elastic Agent at Sazabi through the embedded OTel Collector, not via a Fleet output."},{kind:"code",label:"sazabi-otel.yml",language:"yaml",copyLabel:"OTel Collector config",value:`receivers:
  filelog:
    include: ["/var/log/**/*.log"]
    start_at: beginning

processors:
  resourcedetection:
    detectors: [env, system]
  batch: {}

exporters:
  otlphttp/sazabi:
    endpoint: https://elastic-cloud.\${context.projectRegion}.intake.\${context.intakeDomain}
    headers:
      Authorization: "Bearer \${context.publicKey}"

service:
  pipelines:
    logs:
      receivers: [filelog]
      processors: [resourcedetection, batch]
      exporters: [otlphttp/sazabi]`},{kind:"prose",text:"Run it standalone with `elastic-agent otel --config sazabi-otel.yml` (validate first with `elastic-agent otel validate --config sazabi-otel.yml`), or attach an **OpenTelemetry input package** to a Fleet Agent Policy on 9.2+. Tune the `filelog` receiver's `include` paths to match your log files; standard OpenTelemetry receivers (`hostmetrics`, `journald`, `kubernetesattributes`, etc.) all compose with the same `exporters.otlphttp/sazabi` block."}]},{id:"logstash",label:"Logstash",steps:[{kind:"prose",text:"Run Logstash 8.x or 9.x outside Elastic Cloud (Docker, sidecar, or self-managed). Elastic Cloud's Kibana **Logstash Pipelines** page only stores pipelines centrally — it does not run Logstash for you."},{kind:"code",label:"logstash.conf",language:"hcl",copyLabel:"Logstash pipeline",value:`input {
  elasticsearch {
    hosts     => ["https://<your-deployment>.es.<region>.gcp.cloud.es.io:443"]
    user      => "elastic"
    password  => "\${ELASTIC_PASSWORD}"
    index     => "logs-*"
    query     => '{"query": {"range": {"@timestamp": {"gte": "now-1m"}}}}'
    schedule  => "* * * * *"
  }
}

filter {
  ruby {
    code => '
      require "json"
      ts_nanos = (event.get("@timestamp").to_f * 1_000_000_000).to_i.to_s
      svc      = event.get("[service][name]") || event.get("[app]") || "elastic"
      level    = (event.get("[log][level]") || event.get("[level]") || "INFO").upcase
      body     = event.get("[message]") || event.to_hash.to_json

      payload = {
        "resourceLogs" => [{
          "resource" => {
            "attributes" => [
              { "key" => "service.name", "value" => { "stringValue" => svc.to_s } }
            ]
          },
          "scopeLogs" => [{
            "scope" => { "name" => "logstash" },
            "logRecords" => [{
              "timeUnixNano" => ts_nanos,
              "body"         => { "stringValue" => body.to_s },
              "severityText" => level.to_s
            }]
          }]
        }]
      }

      event.set("[@metadata][otlp_body]", payload.to_json)
    '
  }
}

output {
  http {
    url          => "https://elastic-cloud.\${context.projectRegion}.intake.\${context.intakeDomain}/v1/logs"
    http_method  => "post"
    format       => "message"
    content_type => "application/json"
    message      => "%{[@metadata][otlp_body]}"
    headers      => {
      "Authorization" => "Bearer \${context.publicKey}"
    }
  }
}`},{kind:"prose",text:'Replace `<your-deployment>` and `<region>` with your Elastic Cloud deployment\'s Elasticsearch endpoint (for example `https://acme.es.us-central1.gcp.cloud.es.io:443`). The pipeline polls the index every minute via the `schedule` setting, builds an OTLP/HTTP `resourceLogs` envelope in a `ruby` filter, and POSTs the raw JSON via the `http` output (using `format => "message"` so Logstash sends the exact body the filter builds). The `ruby` filter is included with Logstash by default.'}]}]}]}});var eI;var tI=g(()=>{Qf();eI={id:"elastic_cloud",name:"Elastic Cloud",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs from your Elastic Cloud deployment to Sazabi using Elastic Agent or Logstash.",features:["Elastic Agent OTel Collector output","Logstash pipeline forwarding","No Sazabi infrastructure required"],setupSkill:C,dashboard:{iconKey:"elastic-cloud",intakeSourceId:"elastic-cloud"}}});var Tl;var rI=g(()=>{Tl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Configure the Fluent Bit `opentelemetry` output plugin to forward logs to Sazabi. Use the classic config format or the Helm values snippet if you are deploying Fluent Bit via the official Helm chart."},{kind:"code-tabs",label:"Fluent Bit output configuration",tabs:[{id:"classic",label:"Classic config",language:"bash",copyLabel:"Classic config",value:`[OUTPUT]
    name              opentelemetry
    match             *
    host              fluent-bit.\${context.projectRegion}.intake.\${context.intakeDomain}
    port              443
    logs_uri          /v1/logs
    header            Authorization Bearer \${context.publicKey}
    tls               on
    tls.verify        on`},{id:"helm",label:"Helm values",language:"yaml",copyLabel:"Helm values",value:`config:
  outputs: |
    [OUTPUT]
        name              opentelemetry
        match             *
        host              fluent-bit.\${context.projectRegion}.intake.\${context.intakeDomain}
        port              443
        logs_uri          /v1/logs
        header            Authorization Bearer \${context.publicKey}
        tls               on
        tls.verify        on`}]},{kind:"prose",text:"Requires Fluent Bit v2.0 or later. The `opentelemetry` output plugin is included in the default distribution — no additional installation needed."}]}});var oI;var nI=g(()=>{rI();oI={id:"fluent_bit",name:"Fluent Bit",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs from your Kubernetes cluster or any infrastructure to Sazabi using the Fluent Bit agent.",features:["Kubernetes DaemonSet","Container log collection","Multi-pipeline routing","Low resource footprint"],setupSkill:C,dashboard:{iconKey:"fluent-bit",intakeSourceId:"fluent-bit"}}});var Ol,Sl;var iI=g(()=>{ge();Ol={kind:"linear",steps:[{kind:"prose",text:"Create a read-only token for your Fly.io organization. From the CLI: `flyctl tokens create readonly -o <org-slug>`. Or open the org's Tokens tab in the [Fly.io dashboard](https://fly.io/dashboard) and create a read-only token."},{id:"token",kind:"secret",label:"API token",placeholder:"FlyV1 ..."},{id:"orgSlug",kind:"secret",label:"Organization slug",placeholder:"personal"}],submit:{actions:[{kind:"validate",action:"validate",input:{dataSourceType:"fly_io",metadata:{apiToken:"$token",organizationSlug:"$orgSlug"}}}],metadata:{apiToken:"$token",organizationSlug:"$orgSlug"},button:de}},Sl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"}],searchPlaceholder:"Search apps...",searchFields:["name"],dedupeByConfigField:"appName",emptyState:{noMatches:"No apps found.",allConfigured:"All apps already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{appName:"$item.name"}}}}});var DD,aI;var cI=g(()=>{iI();DD=["apiToken"],aI={id:"fly_io",name:"Fly.io",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:DD,subtitle:"Forward your Fly.io application logs directly to Sazabi for global monitoring.",features:["Log shipping","Multi-region logs","Machine monitoring"],setupSkill:C,dashboard:{iconKey:"fly-io",intakeSourceId:"fly-io",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{procedure:"dataSources.validateConnection"}},list:{list:{kind:"source-action",actionId:"list-apps",itemsField:"apps"}}}}}});var Pl,Al,Dl;var lI=g(()=>{ge();Pl={kind:"tabs",tabs:[{id:"service-account",label:"Service account",content:{kind:"linear",steps:[{kind:"prose",text:"Provide a GCP service account key with permissions to enable APIs and create log sinks, Pub/Sub topics, and subscriptions. Sazabi enables the required APIs and provisions the log pipeline in your GCP project automatically. The service account needs `roles/serviceusage.serviceUsageAdmin`, `roles/logging.configWriter`, `roles/pubsub.admin`, and `roles/browser` on the target GCP project(s)."},{kind:"external-link",label:"Open service accounts in GCP Console",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},{id:"key",kind:"secret",label:"Service account key (JSON)",placeholder:'{"type": "service_account", "project_id": "...", ...}'}],submit:{actions:[{kind:"validate",action:"validate",input:{serviceAccountKey:"$key"},resultAs:"validateKey"},{kind:"preflight",action:"preflight",input:{serviceAccountKey:"$key"}}],metadata:{serviceAccountKey:"$key",connectionMode:"native"},displayName:"GCP $validateKey.projectId",button:de}}},{id:"manual",label:"Manual setup",content:{kind:"manual"}}]},Al={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"displayName",header:"Name"},{field:"projectId",header:"Project ID",width:"w-48",cell:"muted"}],searchPlaceholder:"Search projects...",searchFields:["displayName","projectId"],dedupeByConfigField:"gcpProjectId",emptyState:{noMatches:"No projects found.",allConfigured:"All accessible projects already have log streams configured."},toStreamItem:{displayName:"$item.displayName",config:{gcpProjectId:"$item.projectId",gcpProjectName:"$item.displayName"}}}},Dl={steps:[{kind:"prose",text:"To forward Google Cloud Logging data to Sazabi, create a log sink that routes logs to a Pub/Sub topic, then deploy an OpenTelemetry Collector with a `googlecloudpubsub` receiver that subscribes to that topic and exports to Sazabi."},{kind:"prose",text:"Required GCP permissions: the person performing these steps needs a role that grants `logging.sinks.create` (e.g. `roles/logging.configWriter`) and `pubsub.topics.setIamPolicy` (e.g. `roles/pubsub.admin`)."},{kind:"ordered-steps",items:["Create a Pub/Sub topic and subscription in your GCP project (e.g. `sazabi-logs` and `sazabi-logs-sub`).","Create a Cloud Logging sink that routes logs to the Pub/Sub topic. Grant the sink's service account the `roles/pubsub.publisher` role on the topic.","Deploy an OpenTelemetry Collector (e.g. on a GCE instance, GKE pod, or Cloud Run service) using the `opentelemetry-collector-contrib` distribution.","Configure the collector with a `googlecloudpubsub` receiver pointing at your subscription and an `otlp_http` exporter using the values below. The receiver requires the `googlecloudlogentry_encoding` encoding extension.","Ensure the collector's service account has the `roles/pubsub.subscriber` IAM role on the subscription."]},{kind:"copyable",label:"`OTLP endpoint`",value:"https://otel.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`Authorization header value`",value:je,copyLabel:"Authorization header"},{kind:"code",label:"Example collector configuration",language:"yaml",copyLabel:"Collector configuration",value:`extensions:
  googlecloudlogentry_encoding:

receivers:
  googlecloudpubsub:
    project: YOUR_GCP_PROJECT_ID
    subscription: projects/YOUR_GCP_PROJECT_ID/subscriptions/sazabi-logs-sub
    encoding: googlecloudlogentry_encoding

exporters:
  otlp_http:
    endpoint: https://otel.\${context.projectRegion}.intake.\${context.intakeDomain}
    headers:
      Authorization: Bearer \${context.publicKey}

service:
  extensions: [googlecloudlogentry_encoding]
  pipelines:
    logs:
      receivers: [googlecloudpubsub]
      exporters: [otlp_http]`}]}});var LD,hI;var uI=g(()=>{lI();LD=["serviceAccountKey"],hI={id:"gcp",name:"GCP",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:LD,subtitle:"Connect your GCP logs to Sazabi for AI-powered observability. Automatically provision log sinks with a service account, or set up manually.",features:["Log forwarding","Real-time streaming","Log sink support"],setupSkill:C,dashboard:{iconKey:"gcp",intakeSourceId:"gcp",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{kind:"source-action",actionId:"validate-service-account-key"},preflight:{kind:"source-action",actionId:"run-preflight-checks",normalize:"preflight"}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var Ll;var sI=g(()=>{Ll={perStreamInstructions:!0,steps:[{kind:"prose",text:"Add the Sazabi OTLP exporter to your Alloy config and wire it into a complete pipeline. The snippets below include an OTLP receiver and a batch processor — the minimum needed for telemetry to actually reach Sazabi. Use the Helm values tab if you deploy Alloy via the Grafana Helm chart."},{kind:"code-tabs",label:"Alloy configuration",tabs:[{id:"river",label:"config.alloy",language:"hcl",copyLabel:"Alloy config",value:`otelcol.receiver.otlp "default" {
  grpc {}
  http {}

  output {
    logs   = [otelcol.processor.batch.default.input]
    traces = [otelcol.processor.batch.default.input]
  }
}

otelcol.processor.batch "default" {
  output {
    logs   = [otelcol.exporter.otlphttp.sazabi.input]
    traces = [otelcol.exporter.otlphttp.sazabi.input]
  }
}

otelcol.exporter.otlphttp "sazabi" {
  client {
    endpoint = "https://grafana-alloy.\${context.projectRegion}.intake.\${context.intakeDomain}"
    headers = {
      "Authorization" = "Bearer \${context.publicKey}",
    }
  }
}`},{id:"helm",label:"Helm values",language:"yaml",copyLabel:"Helm values",value:`alloy:
  configMap:
    content: |
      otelcol.receiver.otlp "default" {
        grpc {}
        http {}

        output {
          logs   = [otelcol.processor.batch.default.input]
          traces = [otelcol.processor.batch.default.input]
        }
      }

      otelcol.processor.batch "default" {
        output {
          logs   = [otelcol.exporter.otlphttp.sazabi.input]
          traces = [otelcol.exporter.otlphttp.sazabi.input]
        }
      }

      otelcol.exporter.otlphttp "sazabi" {
        client {
          endpoint = "https://grafana-alloy.\${context.projectRegion}.intake.\${context.intakeDomain}"
          headers = {
            "Authorization" = "Bearer \${context.publicKey}",
          }
        }
      }`}]},{kind:"prose",text:"Replace `otelcol.receiver.otlp` with the OpenTelemetry receiver(s) that match your sources (for example `otelcol.receiver.filelog` for log files or `otelcol.receiver.jaeger` for Jaeger traces). Each upstream `otelcol.*` component must list `otelcol.processor.batch.default.input` in its `output` block to ship data to Sazabi."}]}});var dI;var gI=g(()=>{sI();dI={id:"grafana_alloy",name:"Grafana Alloy",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using Grafana Alloy.",features:["Kubernetes DaemonSet","OpenTelemetry native","Flexible River pipeline","Logs and traces"],setupSkill:C,dashboard:{iconKey:"grafana-alloy",intakeSourceId:"grafana-alloy"}}});var Nl;var bI=g(()=>{ge();Nl={steps:[{kind:"ordered-steps",items:Kn("Inngest function")},Bn,...br("inngest")]}});var mI;var yI=g(()=>{bI();mI={id:"inngest",name:"Inngest",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Inngest function logs directly to Sazabi for workflow observability.",features:["Function logs","Event tracing","Step monitoring"],setupSkill:C,dashboard:{iconKey:"inngest",intakeSourceId:"inngest"}}});var Cl;var pI=g(()=>{ge();Cl={steps:[{kind:"prose",text:"LangChain does not emit OpenTelemetry traces on its own. Set the OTLP environment variables (shown in the last step) in your deployment so they are present when the process starts, then install an instrumentation package (OpenInference shown below) and initialise it once at startup before importing LangChain."},{kind:"code-tabs",label:"Install instrumentation",tabs:[{id:"python",label:"Python",language:"bash",copyLabel:"Python install command",value:"pip install openinference-instrumentation-langchain \\\n  opentelemetry-sdk \\\n  opentelemetry-exporter-otlp-proto-http"},{id:"typescript",label:"TypeScript",language:"bash",copyLabel:"TypeScript install command",value:"npm install @arizeai/openinference-instrumentation-langchain \\\n  @opentelemetry/sdk-trace-node \\\n  @opentelemetry/exporter-trace-otlp-proto \\\n  @langchain/core"}]},{kind:"code-tabs",label:"Initialise the tracer at startup",tabs:[{id:"python",label:"Python",language:"python",copyLabel:"Python init snippet",value:`from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from openinference.instrumentation.langchain import LangChainInstrumentor

provider = TracerProvider(resource=Resource.create({"service.name": "my-langchain-app"}))
provider.add_span_processor(BatchSpanProcessor(OTLPSpanExporter()))
trace.set_tracer_provider(provider)

LangChainInstrumentor().instrument()`},{id:"typescript",label:"TypeScript",language:"typescript",copyLabel:"TypeScript init snippet",value:`import { NodeTracerProvider, BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { Resource } from "@opentelemetry/resources";
import { LangChainInstrumentation } from "@arizeai/openinference-instrumentation-langchain";
import * as CallbackManagerModule from "@langchain/core/callbacks/manager";

const provider = new NodeTracerProvider({
  resource: new Resource({ "service.name": "my-langchain-app" }),
});
provider.addSpanProcessor(new BatchSpanProcessor(new OTLPTraceExporter()));
provider.register();

// LangChain.js has no traditional auto-instrumentable module structure, so the
// callbacks manager must be wired in by hand.
new LangChainInstrumentation().manuallyInstrument(CallbackManagerModule);`}]},{kind:"prose",text:"Set these environment variables before starting your application. The OpenTelemetry SDK reads them automatically."},...br("langchain")]}});var vI;var fI=g(()=>{pI();vI={id:"langchain",name:"LangChain",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward LangChain traces to Sazabi for end-to-end LLM observability.",features:["Chain tracing","Tool & agent traces","LLM call traces"],setupSkill:C,dashboard:{iconKey:"langchain",intakeSourceId:"langchain"}}});var xl;var II=g(()=>{xl={steps:[{kind:"prose",text:"Set these values as environment variables in your application."},{kind:"copyable",label:"`SAZABI_INTAKE_URL`",value:"https://mastra.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces",copyLabel:"Intake URL"},{kind:"copyable",label:"`SAZABI_API_KEY`",value:"${context.publicKey}",copyLabel:"API key"},{kind:"code",label:"Configuration",language:"typescript",copyLabel:"TypeScript code",value:`// src/mastra/index.ts
import { Mastra } from "@mastra/core";
import { OtelExporter } from "@mastra/otel-exporter";
import { Observability } from "@mastra/observability";

export const mastra = new Mastra({
  observability: new Observability({
    configs: {
      default: {
        serviceName: "my-mastra-app",
        exporters: [
          new OtelExporter({
            provider: {
              custom: {
                endpoint: process.env.SAZABI_INTAKE_URL,
                protocol: "http/json",
                headers: {
                  Authorization: \`Bearer \${process.env.SAZABI_API_KEY}\`,
                },
              },
            },
          }),
        ],
      },
    },
  }),
  // Add your agents, tools, and workflows here
});

// Use your Mastra instance
const agent = mastra.getAgent("my-agent");
const response = await agent.generate("Hello, world!");`}]}});var kI;var wI=g(()=>{II();kI={id:"mastra",name:"Mastra",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Mastra agent traces directly to Sazabi for AI workflow observability.",features:["Agent traces","Tool tracing","Workflow monitoring"],setupSkill:C,dashboard:{iconKey:"mastra",intakeSourceId:"mastra"}}});var zl;var $I=g(()=>{zl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Neon's OpenTelemetry integration forwards Postgres logs to Sazabi. The integration is available on Neon's **Scale** plan, and both the integration itself and Postgres logs export are currently in Beta. You'll need admin access on the Neon project to add it."},{kind:"prose",text:"Neon can export both metrics and Postgres logs through this integration; this Sazabi data source is logs-only. Leave metrics disabled in the Neon form."},{kind:"external-link",label:"Open Neon integrations",href:"https://console.neon.tech/app/projects",description:"Choose the Neon project you want to monitor, then open the project's **Integrations** page."},{kind:"ordered-steps",items:["In the Neon Console, open your project and go to **Integrations**. On the **OpenTelemetry** card, click **Add** to open the configuration sidebar.","In **Select data to export**, enable `Postgres logs` and leave `Metrics` disabled. Neon does not expose a traces export for this integration.","Choose the `HTTP` protocol and paste the Sazabi OTLP base endpoint below. Neon appends `/v1/logs` automatically for log export.","Configure authentication as `Bearer` and paste the generated Sazabi token value below. Neon adds the `Bearer` prefix to outgoing requests automatically.","Under **Resource attributes**, set `service.name` to a short, stable identifier for this Neon project (Neon's docs use `neon-postgres-test` as an example). This attribute is optional but recommended so the project's logs are easy to filter in Sazabi.","Save the integration. Logs typically start arriving within a few minutes; if the compute has Scale to Zero enabled and is currently suspended, run a query against the database to wake it and begin log delivery."]},{kind:"copyable",label:"OTLP endpoint URL",value:"https://neon.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"Neon OTLP endpoint URL",description:"Use the base URL in Neon. Neon will send logs to this URL with `/v1/logs` appended."},{kind:"copyable",label:"Connection protocol",value:"HTTP"},{kind:"copyable",label:"Data to export",value:"Postgres logs only"},{kind:"copyable",label:"Authentication method",value:"Bearer"},{kind:"copyable",label:"Bearer token value",value:"${context.publicKey}",copyLabel:"Neon bearer token value"},{kind:"copyable",label:"`service.name` resource attribute",value:"neon-postgres",copyLabel:"Neon service.name value",description:"Optional but recommended — paste under **Resource attributes** in Neon. Change the suffix (e.g. `neon-postgres-prod`, `neon-checkout-db`) when you have more than one Neon project so streams stay easy to filter in Sazabi."},{kind:"prose",text:"If logs do not arrive after a few minutes, check whether the Neon compute is suspended (Scale to Zero) — logs only flow while the compute is active. Run a query from the Neon SQL Editor or your application to wake it, then check the Neon integration's status panel for OTLP export errors."}]}});var ND,_I;var TI=g(()=>{$I();ND=[],_I={id:"neon",name:"Neon",capabilities:["manual"],auth:["manualKey"],delivery:["push"],sensitiveFields:ND,lifecycleSkipReason:"Manual OTLP setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward Neon Postgres logs to Sazabi for database observability without sending metrics or traces.",features:["Postgres logs","Connection events","Error and warning logs"],setupSkill:C,dashboard:{iconKey:"neon",intakeSourceId:"neon"}}});var jl;var OI=g(()=>{ge();jl={steps:[{kind:"prose",text:"Configure a log drain in your [Netlify site settings](https://app.netlify.com) under Logs & Metrics > Log Drains. Select 'General HTTP endpoint' as the service and use the values below. Note: log drains require a Netlify Enterprise plan."},{kind:"copyable",label:"Full URL",value:"https://netlify.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Authorization header",value:je},{kind:"copyable",label:"Log drain format",value:"JSON"}]}});var SI;var PI=g(()=>{OI();SI={id:"netlify",name:"Netlify",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Netlify deployment logs directly to Sazabi for Jamstack observability.",features:["Build logs","Function logs","Edge handler logs"],setupSkill:C,dashboard:{iconKey:"netlify",intakeSourceId:"netlify"}}});var El;var AI=g(()=>{El={steps:[{kind:"prose",text:"In the OpenRouter dashboard, open **Settings > Observability**, toggle **Enable Broadcast** on, then click the edit icon next to **OpenTelemetry Collector**."},{kind:"external-link",label:"Settings > Observability",href:"https://openrouter.ai/settings/observability"},{kind:"prose",text:"Paste the values below into the destination form."},{kind:"copyable",label:"Endpoint",value:"https://openrouter.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces",copyLabel:"Endpoint"},{kind:"copyable",label:"Headers",value:'{"Authorization": "Bearer ${context.publicKey}"}',copyLabel:"Headers"},{kind:"prose",text:"Click **Test Connection** to verify Sazabi accepts the trace. OpenRouter only saves the destination if the test passes; a green check confirms forwarding is enabled."}]}});var DI;var LI=g(()=>{AI();DI={id:"openrouter",name:"OpenRouter",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"OpenRouter Broadcast destination setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward OpenRouter trace spans to Sazabi from the OpenRouter dashboard.",features:["Trace spans per generation","Token & cost tracking","Model & provider attribution"],setupSkill:C,dashboard:{iconKey:"openrouter",intakeSourceId:"openrouter"}}});var Ul;var NI=g(()=>{ge();Ul={perStreamInstructions:!0,steps:[{kind:"prose",text:"Configure your application to export OpenTelemetry logs and traces to Sazabi by setting the following environment variables. These work with any OpenTelemetry SDK (Node.js, Python, Go, Java, .NET, etc.). Metrics are accepted by the intake but are not yet stored."},{kind:"ordered-steps",items:["Add the OpenTelemetry SDK to your application. Most languages have official SDKs available (e.g., `@opentelemetry/api` for Node.js, `opentelemetry-api` for Python, etc.).","Initialize the OpenTelemetry SDK in your application and configure the OTLP exporters for the signals you want (logs and/or traces). The SDK will automatically read the environment variables below.","Set the following environment variables in your application environment. These configure the OTLP exporter to send logs and traces to Sazabi."]},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:"https://otlp.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:Fn,copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:"http/protobuf",copyLabel:"OTLP protocol"}]}});var CI;var xI=g(()=>{NI();CI={id:"otel",name:"OpenTelemetry",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual OTLP setup is not exercised by automated lifecycle tests yet.",subtitle:"Send OpenTelemetry logs and traces directly to Sazabi's OTLP-compatible intake for AI-powered observability.",features:["OTLP log export","OTLP trace export","Any OTEL SDK"],setupSkill:C,dashboard:{slug:"opentelemetry",iconKey:"opentelemetry",intakeSourceId:"otel"}}});var Rl;var zI=g(()=>{Rl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Add the `otlphttp/sazabi` exporter to your OpenTelemetry Collector configuration and include it in your service pipelines. Use the Helm values snippet if you are deploying the collector via the `opentelemetry-collector` Helm chart."},{kind:"code-tabs",label:"Collector configuration",tabs:[{id:"yaml",label:"otelcol.yaml",language:"yaml",copyLabel:"Collector config",value:`exporters:
  otlphttp/sazabi:
    endpoint: "https://otel-collector.\${context.projectRegion}.intake.\${context.intakeDomain}"
    headers:
      Authorization: "Bearer \${context.publicKey}"

service:
  pipelines:
    logs:
      receivers: [filelog]
      processors: [batch]
      exporters: [otlphttp/sazabi]
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlphttp/sazabi]`},{id:"helm",label:"Helm values",language:"yaml",copyLabel:"Helm values",value:`config:
  exporters:
    otlphttp/sazabi:
      endpoint: "https://otel-collector.\${context.projectRegion}.intake.\${context.intakeDomain}"
      headers:
        Authorization: "Bearer \${context.publicKey}"
  service:
    pipelines:
      logs:
        receivers: [filelog]
        processors: [batch]
        exporters: [otlphttp/sazabi]
      traces:
        receivers: [otlp]
        processors: [batch]
        exporters: [otlphttp/sazabi]`}]},{kind:"prose",text:"Adjust the `receivers` list to match the sources you have configured. The `filelog` receiver collects container logs on Kubernetes; the `otlp` receiver accepts spans from instrumented services."}]}});var jI;var EI=g(()=>{zI();jI={id:"otel_collector",name:"OpenTelemetry Collector",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using the OpenTelemetry Collector.",features:["Kubernetes DaemonSet","Vendor-neutral standard","Extensible via contrib","Logs and traces"],setupSkill:C,dashboard:{iconKey:"otel-collector",intakeSourceId:"otel-collector"}}});var Fl,CD,Kl,Bl;var UI=g(()=>{ge();Fl={kind:"linear",steps:[{kind:"prose",text:"Create a personal API key in your PostHog account under **Settings → Personal API keys** ([US](https://us.posthog.com/settings/user-api-keys) · [EU](https://eu.posthog.com/settings/user-api-keys)). Grant it these scopes:\n\n- `project:read` — list your projects\n- `organization:read` — show your organization\n- `hog_function:write` — install the webhook destination"},{id:"token",kind:"secret",label:"Personal API key",placeholder:"phx_..."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"},resultAs:"validate"},{kind:"preflight",action:"preflight",input:{token:"$token",region:"$validate.posthogApiRegion",organizationId:"$validate.posthogOrganizationId"}}],metadata:{posthogPersonalApiKey:"$token",posthogApiRegion:"$validate.posthogApiRegion",posthogOrganizationId:"$validate.posthogOrganizationId",posthogOrganizationName:"$validate.posthogOrganizationName",connectionMode:"native"},button:de}},CD=[{field:"name",header:"Project"},{field:"organizationName",header:"Organization",width:"w-48",transform:"fallback:—"}],Kl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:CD,searchPlaceholder:"Search projects...",searchFields:["name","organizationName"],dedupeByConfigField:"posthogProjectId",emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have PostHog destinations configured."},toStreamItem:{displayName:"$item.name",config:{posthogProjectId:"$item.id",posthogProjectName:"$item.name"}}}},Bl={steps:[{kind:"prose",text:"Configure an [HTTP Webhook destination](https://${context.posthogRegion}.posthog.com/pipeline/new/hog-template-webhook) in PostHog under Data Pipeline > Destinations. Use the values below and set your webhook body template to the default event and person payload."},{kind:"copyable",label:"Destination URL",value:"https://posthog.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Method",value:"POST"},{kind:"copyable",label:"Header name",value:"Authorization"},{kind:"copyable",label:"Header value",value:je},{kind:"code",label:"Body template",language:"json",copyLabel:"Body template",value:`{
  "event": "{event}",
  "person": "{person}"
}`}]}});var xD,RI;var FI=g(()=>{UI();xD=["posthogPersonalApiKey"],RI={id:"posthog",name:"PostHog",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:xD,subtitle:"Forward your PostHog events directly to Sazabi for real-time product and error observability.",features:["CDP webhook forwarding","Event property mapping","Real-time streaming"],setupSkill:C,dashboard:{iconKey:"posthog",intakeSourceId:"posthog",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{kind:"source-action",actionId:"validate-personal-api-key",sensitiveInputFields:["token"]},preflight:{kind:"source-action",actionId:"run-preflight-checks",normalize:"preflight",sensitiveInputFields:["token"]}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var Gl;var KI=g(()=>{ge();Gl={steps:[{kind:"prose",text:"Railway does not provide a managed log drain to an external OTLP endpoint. Configure each Railway service you want to monitor so the application emits OpenTelemetry data directly to Sazabi. If you cannot add the SDK, run a log forwarder such as Vector or Fluent Bit as its own Railway service and point it at the same OTLP endpoint."},{kind:"external-link",label:"Open Railway dashboard",href:"https://railway.com/dashboard"},{kind:"ordered-steps",items:["Add OpenTelemetry to your application. Install the SDK, an OTLP HTTP/protobuf exporter, and any auto-instrumentation package your language needs. For Node.js, `@opentelemetry/api` alone is not enough; use the SDK/exporter packages too.","Initialize OpenTelemetry before your application handles requests. You can do this in code, with a preload flag such as `NODE_OPTIONS=--require ...`, or with a language-specific wrapper command.","In Railway, open the service, go to **Variables**, and use **New Variable** or **Raw Editor** to add the variables below. Railway stages variable changes, so review and deploy the change set when prompted.","Redeploy or restart the Railway service, then generate traffic or a test log line so Sazabi can receive fresh telemetry.","Verify data in Sazabi. If nothing appears, check the Railway deployment logs for OpenTelemetry exporter errors and confirm your app is emitting logs through the OpenTelemetry logger, not only stdout."]},{kind:"code",label:"Railway Raw Editor variables",description:"Paste this into the Railway service's Variables Raw Editor. Railway resolves the `${{...}}` references from its own service and deployment metadata.",language:"bash",value:'OTEL_EXPORTER_OTLP_ENDPOINT=https://railway.${context.projectRegion}.intake.${context.intakeDomain}\nOTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer ${context.publicKey}"\nOTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf\nOTEL_SERVICE_NAME=${{RAILWAY_SERVICE_NAME}}\nOTEL_RESOURCE_ATTRIBUTES=deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}',copyLabel:"Railway environment variables"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:"https://railway.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:Fn,copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:"http/protobuf",copyLabel:"OTLP protocol"},{kind:"copyable",label:"`OTEL_SERVICE_NAME`",value:"${{RAILWAY_SERVICE_NAME}}",copyLabel:"OTEL service name"},{kind:"copyable",label:"`OTEL_RESOURCE_ATTRIBUTES`",value:"deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}",copyLabel:"OTEL resource attributes"},{kind:"code-tabs",label:"Example bootstrap patterns",description:"Use the pattern for your runtime, or follow your language's OpenTelemetry documentation if your app already has instrumentation.",tabs:[{id:"node",label:"Node.js",language:"bash",value:`bun add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto @opentelemetry/exporter-logs-otlp-proto

# Railway variable or start-command prefix:
NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"`,copyLabel:"Node.js OpenTelemetry bootstrap"},{id:"python",label:"Python",language:"bash",value:`pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install

# Railway start command example:
opentelemetry-instrument python app.py`,copyLabel:"Python OpenTelemetry bootstrap"}]}]}});var BI;var GI=g(()=>{KI();BI={id:"railway",name:"Railway",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Railway deployment logs directly to Sazabi for real-time monitoring.",features:["Log drains","Deployment logs","Service monitoring"],setupSkill:C,dashboard:{iconKey:"railway",intakeSourceId:"railway"}}});var Hl,Ml;var HI=g(()=>{ge();Hl={kind:"linear",steps:[{kind:"prose",text:"Enter your Render API key to connect your workspace. You can create an API key in your [Render dashboard](https://dashboard.render.com/settings#api-keys)."},{id:"token",kind:"secret",label:"API key",placeholder:"rnd_..."},{id:"workspace",kind:"select",label:"Workspace",placeholder:"Select a workspace",optionsAction:"options",optionsInput:{token:"$token"},optionValueField:"id",optionLabelField:"name",optionDescriptionField:"type"}],submit:{metadata:{apiToken:"$token",ownerId:"$workspace.id",ownerName:"$workspace.name"},displayName:"$workspace.name",button:de}},Ml={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"type",header:"Type",width:"w-40",cell:"badge"}],searchPlaceholder:"Search services...",searchFields:["name"],dedupeByConfigField:"serviceId",emptyState:{noMatches:"No services found.",allConfigured:"All services already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{serviceId:"$item.id",serviceName:"$item.name",serviceType:"$item.type"}}}}});var zD,MI;var JI=g(()=>{HI();zD=["apiToken"],MI={id:"render",name:"Render",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:zD,subtitle:"Forward your Render service logs directly to Sazabi for real-time monitoring.",features:["Log forwarding","Service monitoring","Environment filtering"],setupSkill:C,dashboard:{iconKey:"render",intakeSourceId:"render-syslog",streamSelectorLayout:"sidepanel",connectionMetadataSection:{title:"Render details",description:"The Render workspace linked to this connection.",fields:[{key:"ownerId",label:"Workspace ID",description:"Render workspace linked to this connection."}]},actions:{list:{options:{procedure:"render.listWorkspaces",itemsField:"workspaces",sensitiveInputFields:["token"]},list:{procedure:"render.listServices",itemsField:"services"}}}}}});var Jl;var qI=g(()=>{Jl={steps:[{kind:"prose",text:"Configure your Sentry SDK to forward errors to Sazabi using the DSN below. This works with all official Sentry SDKs."},{kind:"copyable",label:"Sentry DSN",value:"https://${context.publicKey}@sentry-dsn.${context.projectRegion}.intake.${context.intakeDomain}/0",copyLabel:"DSN"},{kind:"code",label:"JavaScript / Node.js",language:"javascript",copyLabel:"JavaScript",value:`import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://\${context.publicKey}@sentry-dsn.\${context.projectRegion}.intake.\${context.intakeDomain}/0",
});`},{kind:"code",label:"Python",language:"python",copyLabel:"Python",value:`import sentry_sdk

sentry_sdk.init(
    dsn="https://\${context.publicKey}@sentry-dsn.\${context.projectRegion}.intake.\${context.intakeDomain}/0",
)`},{kind:"prose",text:"This DSN works with any official Sentry SDK including Go, Ruby, Java, .NET, and more. Simply replace your existing Sentry DSN with the one above."}]}});var VI;var WI=g(()=>{qI();VI={id:"sentry",name:"Sentry SDK",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Sentry SDK errors and events directly to Sazabi for AI-powered error tracking.",features:["Error forwarding","Exception tracking","SDK integration"],setupSkill:C,dashboard:{iconKey:"sentry",intakeSourceId:"sentry-dsn"}}});var ql;var YI=g(()=>{ge();ql={kind:"linear",steps:[{kind:"prose",text:"You must be an **Owner** or **Manager** in the Sentry organization — creating an Internal Integration requires the `org:write` scope, which is only granted to Owners and Managers. The Admin role does not include `org:write`, so a personal user auth token minted by an Admin cannot create the Internal Integration and Sentry will return 403. Create a Sentry user auth token with the following permissions: **Organization: Read & Write** (the `org:write` scope), **Project: Read**, and **Issue & Event: Read**. The `org:write` scope is required for Sazabi to create the Internal Integration; the integration itself only receives read-level webhook events. Confirm the Permissions Preview at the bottom of the Sentry form shows `event:read, org:write, project:read` before submitting."},{kind:"external-link",label:"Open Sentry auth token settings",href:"https://sentry.io/settings/account/api/auth-tokens/new-token/"},{id:"token",kind:"secret",label:"Sentry auth token",description:"Token with org:write, project:read, and event:read scopes.",placeholder:"Enter your Sentry auth token"},{id:"organizationSlug",kind:"text",label:"Sentry organization slug",description:"The slug from your Sentry URL: sentry.io/organizations/<slug>/",placeholder:"e.g. my-org",pattern:"^[a-z0-9][a-z0-9-]*[a-z0-9]$",patternMessage:"Enter a valid Sentry organization slug (lowercase, hyphens allowed)."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token",organizationSlug:"$organizationSlug"},resultAs:"validate"}],metadata:{connectionMode:"native",sentryAuthToken:"$token",organizationSlug:"$organizationSlug"},button:de}}});var jD,XI;var ZI=g(()=>{YI();jD=["sentryAuthToken"],XI={id:"sentry_platform",name:"Sentry",capabilities:["native"],auth:["apiToken"],delivery:["push"],streamCardinality:"single",sensitiveFields:jD,subtitle:"Connect your Sentry organization to stream errors, issues, and alerts to Sazabi in real-time.",features:["Error streaming","Issue tracking","Alert forwarding","Metric alerts"],setupSkill:C,dashboard:{iconKey:"sentry",intakeSourceId:"sentry-platform",actions:{submit:{validate:{kind:"source-action",actionId:"validate",sensitiveInputFields:["token"]}}}}}});var Vl;var QI=g(()=>{ge();Vl={steps:[{kind:"prose",text:"In the [Supabase dashboard](https://supabase.com/dashboard), open Project Settings > Log Drains and click **Add destination**."},{kind:"prose",text:"Fill in the fields below in order — they map 1:1 to the Supabase form. Under **Custom Headers**, Supabase pre-fills a `Content-Type` row when OTLP is selected; **leave it in place** and click **Add a new header** to add the `Authorization` row alongside it."},{kind:"prose",text:"Note: Log Drains require a Supabase Pro, Team, or Enterprise plan."},{kind:"copyable",label:"Name",value:"Sazabi"},{kind:"copyable",label:"Description",value:"Forward Supabase logs to Sazabi for observability and AI analysis."},{kind:"copyable",label:"Type",value:"OpenTelemetry Protocol (OTLP)"},{kind:"copyable",label:"OTLP Endpoint",value:"https://supabase.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Protocol",value:"HTTP/Protobuf"},{kind:"copyable",label:"Gzip Compression",value:"Enabled"},{kind:"copyable-pairs",label:"Custom Headers",pairs:[{name:"Content-Type",value:"application/x-protobuf",description:"Pre-filled by Supabase — keep as-is."},{name:"Authorization",value:je,description:"Click **Add a new header** and paste these values."}]}]}});var ek;var tk=g(()=>{QI();ek={id:"supabase",name:"Supabase",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Supabase project logs directly to Sazabi for unified observability.",features:["Database logs","Auth events","Edge Function logs"],setupSkill:C,dashboard:{iconKey:"supabase",intakeSourceId:"supabase"}}});var Wl;var rk=g(()=>{ge();Wl={steps:[{kind:"ordered-steps",items:Kn("Temporal worker")},Bn,...br("temporal")]}});var ok;var nk=g(()=>{rk();ok={id:"temporal",name:"Temporal",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual worker setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward OpenTelemetry logs and traces from your Temporal workers to Sazabi for durable execution observability.",features:["Worker logs","Workflow and activity traces"],setupSkill:C,dashboard:{iconKey:"temporal",intakeSourceId:"temporal"}}});var Yl;var ik=g(()=>{Yl={perStreamInstructions:!0,steps:[{kind:"ordered-steps",items:["Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns your `trigger.config.ts` file.","Add `SAZABI_API_KEY` to the Trigger.dev deployment environment using the public key shown below.","Configure `telemetry.logExporters` directly in `trigger.config.ts`. Trigger.dev reserves `OTEL_*` environment variables for its own internal telemetry, so do not use them for this integration.","Redeploy your Trigger.dev project so task logs are exported to Sazabi."]},{kind:"copyable",label:"`SAZABI_API_KEY`",value:"${context.publicKey}",copyLabel:"Sazabi API key",description:"Store this as a secret in the Trigger.dev environment that runs your tasks."},{kind:"copyable",label:"Sazabi log intake URL",value:"https://trigger-dev.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs",copyLabel:"Sazabi log intake URL"},{kind:"code",label:"`trigger.config.ts`",language:"typescript",value:`import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { defineConfig } from "@trigger.dev/sdk";

const sazabiApiKey = process.env.SAZABI_API_KEY;

if (!sazabiApiKey) {
  throw new Error("SAZABI_API_KEY is required");
}

export default defineConfig({
  project: "<your-trigger-project-ref>",
  telemetry: {
    logExporters: [
      new OTLPLogExporter({
        url: "https://trigger-dev.\${context.projectRegion}.intake.\${context.intakeDomain}/v1/logs",
        headers: {
          Authorization: "Bearer " + sazabiApiKey,
        },
      }),
    ],
  },
});
`,copyLabel:"Trigger.dev config snippet"},{kind:"bulleted-list",items:["This v1 source ingests logs only. Trace exporters, metrics exporters, alert webhooks, and management API polling are intentionally out of scope.","Use `telemetry.logExporters`; do not configure this source through `telemetry.exporters`, Trigger.dev alert webhooks, or management API polling."]}]}});var ak;var ck=g(()=>{ik();ak={id:"trigger_dev",name:"Trigger.dev",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual trigger.config.ts setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Trigger.dev job logs directly to Sazabi for background job monitoring.",features:["Task logs","Run failure logs","Background job monitoring"],setupSkill:C,dashboard:{iconKey:"trigger-dev",intakeSourceId:"trigger-dev"}}});var Xl;var lk=g(()=>{Xl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Forward Vector logs to Sazabi over OTLP/HTTP. Vector 0.51.0 or later is required for the `otlp` encoding codec. The configuration pipes events through a `remap` transform that builds the OTLP `resourceLogs` envelope — the sink's `otlp` codec does not construct this envelope on its own, so wiring raw sources directly into it drops 100% of events."},{kind:"code-tabs",label:"Vector logs sink",tabs:[{id:"yaml",label:"vector.yaml",language:"yaml",copyLabel:"YAML config",value:`transforms:
  sazabi_logs_otlp:
    type: remap
    inputs: ["*"]  # replace with explicit source/transform IDs
    source: |
      # The opentelemetry sink's \`otlp\` codec does not auto-wrap events —
      # this transform builds the OTLP resourceLogs envelope Sazabi expects.
      timestamp_nanos = to_unix_timestamp!(now(), unit: "nanoseconds")
      service_name = .service.name ?? .service_name ?? .service ?? .app ?? .source_type ?? "vector"
      severity_text = upcase(string!(.level ?? .severity ?? "INFO"))

      .resourceLogs = [{
        "resource": {
          "attributes": [
            { "key": "service.name", "value": { "stringValue": service_name } },
            { "key": "host.name",    "value": { "stringValue": .host ?? "" } }
          ]
        },
        "scopeLogs": [{
          "scope": { "name": "vector" },
          "logRecords": [{
            "timeUnixNano":  timestamp_nanos,
            "body":          { "stringValue": .message ?? encode_json(.) },
            "severityText":  severity_text
          }]
        }]
      }]

sinks:
  sazabi_logs:
    type: opentelemetry
    inputs: ["sazabi_logs_otlp"]
    protocol:
      type: http
      uri: "https://vector.\${context.projectRegion}.intake.\${context.intakeDomain}/v1/logs"
      method: post
      auth:
        strategy: bearer
        token: "\${context.publicKey}"
      encoding:
        codec: otlp`},{id:"helm",label:"Helm values",language:"yaml",copyLabel:"Helm values",value:`customConfig:
  transforms:
    sazabi_logs_otlp:
      type: remap
      inputs: ["*"]  # replace with explicit source/transform IDs
      source: |
        # The opentelemetry sink's \`otlp\` codec does not auto-wrap events —
        # this transform builds the OTLP resourceLogs envelope Sazabi expects.
        timestamp_nanos = to_unix_timestamp!(now(), unit: "nanoseconds")
        service_name = .service.name ?? .service_name ?? .service ?? .app ?? .source_type ?? "vector"
        severity_text = upcase(string!(.level ?? .severity ?? "INFO"))

        .resourceLogs = [{
          "resource": {
            "attributes": [
              { "key": "service.name", "value": { "stringValue": service_name } },
              { "key": "host.name",    "value": { "stringValue": .host ?? "" } }
            ]
          },
          "scopeLogs": [{
            "scope": { "name": "vector" },
            "logRecords": [{
              "timeUnixNano":  timestamp_nanos,
              "body":          { "stringValue": .message ?? encode_json(.) },
              "severityText":  severity_text
            }]
          }]
        }]
  sinks:
    sazabi_logs:
      type: opentelemetry
      inputs: ["sazabi_logs_otlp"]
      protocol:
        type: http
        uri: "https://vector.\${context.projectRegion}.intake.\${context.intakeDomain}/v1/logs"
        method: post
        auth:
          strategy: bearer
          token: "\${context.publicKey}"
        encoding:
          codec: otlp`}]},{kind:"prose",text:'Replace `inputs: ["*"]` on the `remap` transform with your specific source or transform IDs in production — `["*"]` also matches `internal_metrics` and other unrelated components. Sazabi indexes logs and traces from Vector; metrics are accepted at the intake but silently dropped.'},{kind:"prose",text:'**Forwarding traces (optional):** add a second `opentelemetry` sink with `uri` ending in `/v1/traces` and explicit `inputs` referencing an already-OTLP-shaped source — typically an `opentelemetry` Vector source with `use_otlp_decoding.traces: true` (use `inputs: ["otlp_in.traces"]`). No remap is needed for traces. Do not wire `["*"]` into a traces sink.'}]}});var hk;var uk=g(()=>{lk();hk={id:"vector",name:"Vector",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using the Vector observability pipeline.",features:["Kubernetes DaemonSet","High-throughput pipeline","Built-in transforms","Multiple source types"],setupSkill:C,dashboard:{iconKey:"vector",intakeSourceId:"vector"}}});var Ql,Zl,eh;var sk=g(()=>{ge();Ql={kind:"linear",steps:[{kind:"prose",text:"Create a full-access API token in your [Vercel account settings](https://vercel.com/account/tokens). Vercel tokens inherit your account permissions automatically. For team accounts, make sure you create the token while scoped to the correct team."},{id:"token",kind:"secret",label:"API token",placeholder:"Enter your Vercel API token"}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"},resultAs:"validate"}],metadata:{vercelApiToken:"$token",vercelTeamId:"$validate.teamId",vercelTeamName:"$validate.teamName"},button:de}},Zl=[{field:"name",header:"Project"},{field:"framework",header:"Framework",width:"w-32",cell:"badge",transform:"fallback:Unspecified"}],eh={content:{kind:"tabs",tabs:[{id:"logs",label:"Logs",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Zl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{ingestTraces:!1},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have logs drains configured."},toStreamItem:{displayName:"$item.name (Logs)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"logs",ingestTraces:!1}}}},{id:"traces",label:"Traces",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Zl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{ingestTraces:!0},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have traces drains configured."},toStreamItem:{displayName:"$item.name (Traces)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"traces",ingestTraces:!0}}}},{id:"analytics",label:"Analytics",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Zl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{drainType:"analytics"},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have analytics drains configured."},toStreamItem:{displayName:"$item.name (Analytics)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"analytics"}}}}]}}});var ED,dk;var gk=g(()=>{sk();ED=["vercelApiToken"],dk={id:"vercel",name:"Vercel",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:ED,subtitle:"Forward your Vercel deployment logs, traces, and Web Analytics events directly to Sazabi for real-time analysis and alerting.",features:["Log forwarding","Trace forwarding","Web Analytics forwarding","Real-time streaming"],setupSkill:C,dashboard:{iconKey:"vercel",intakeSourceId:"vercel",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-enum-badge",header:"Type",width:"w-24",configField:"drainType",values:[{value:"logs",label:"Logs"},{value:"traces",label:"Traces"},{value:"analytics",label:"Analytics"}],legacyBooleanField:"ingestTraces",legacyTrueLabel:"Traces",legacyFalseLabel:"Logs",fallbackLabel:"N/A"}],actions:{submit:{validate:{kind:"source-action",actionId:"validate-token"}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var Gn,bk,c0,l0,mr,h0,u0,UD,RD,FD,s0;var mk=g(()=>{Lf();xf();Ef();Ff();Gf();Jf();Wf();Zf();tI();nI();cI();uI();gI();yI();fI();wI();TI();PI();LI();xI();EI();FI();GI();JI();WI();ZI();tk();nk();ck();uk();gk();Gn=[Df,Cf,jf,Rf,Bf,Mf,Vf,Xf,eI,oI,aI,hI,dI,mI,vI,kI,_I,SI,DI,CI,jI,RI,BI,MI,XI,VI,ek,ok,ak,hk,dk],bk=Gn,c0=Object.fromEntries(bk.map((e)=>[e.id,e.sensitiveFields??[]])),l0=Object.fromEntries(bk.flatMap((e)=>[...Object.values(e.dashboard?.actions?.submit??{}),...Object.values(e.dashboard?.actions?.list??{}),...Object.values(e.dashboard?.actions?.prefetch??{})].flatMap((t)=>{let o=t.sensitiveInputFields??[];if(o.length===0)return[];return[["procedure"in t?t.procedure:`${e.id}.${t.actionId}`,o]]}))),mr=["vercel","cloudflare","railway","render","fly_io","netlify","supabase","digital_ocean","inngest","trigger_dev","temporal","mastra","neon","langchain","daytona","e2b","cloudwatch","convex","datadog","sentry","sentry_platform","openrouter","posthog","gcp","otel","fluent_bit","vector","grafana_alloy","otel_collector","cloudflare_workers","elastic_cloud"],h0=Gn.map((e)=>({id:e.id,name:e.name,capabilities:e.capabilities})),u0=Object.fromEntries(Gn.map((e)=>[e.id,{name:e.name,setupSkill:e.setupSkill}])),UD={cloudflare:sl,cloudwatch:ml,convex:pl,digital_ocean:kl,fly_io:Ol,gcp:Pl,posthog:Fl,render:Hl,sentry_platform:ql,vercel:Ql},RD={cloudflare:dl,cloudwatch:yl,convex:vl,digital_ocean:wl,fly_io:Sl,gcp:Al,posthog:Kl,render:Ml,vercel:eh},FD={cloudflare:gl,cloudflare_workers:bl,datadog:fl,daytona:Il,fluent_bit:Tl,grafana_alloy:Ll,e2b:$l,elastic_cloud:_l,gcp:Dl,inngest:Nl,langchain:Cl,mastra:xl,neon:zl,netlify:jl,openrouter:El,otel:Ul,otel_collector:Rl,posthog:Bl,railway:Gl,sentry:Jl,supabase:Vl,temporal:Wl,trigger_dev:Yl,vector:Xl},s0=Gn.map((e)=>({sourceId:e.id,name:e.name,capabilities:e.capabilities,setupAuthModes:e.auth,deliveryModes:e.delivery,hasDashboardMetadata:Boolean(e.dashboard),hasNativeFlow:Boolean(UD[e.id]),hasManualFlow:Boolean(FD[e.id]),hasStreamSelector:Boolean(RD[e.id]),lifecycleEligible:e.lifecycleEligible??!1,lifecycleSkipReason:e.lifecycleSkipReason}))});var yk=g(()=>{mk()});var th=g(()=>{Pf();yk()});function y(e,t,o){function n(c,h){if(!c._zod)Object.defineProperty(c,"_zod",{value:{def:h,constr:a,traits:new Set},enumerable:!1});if(c._zod.traits.has(e))return;c._zod.traits.add(e),t(c,h);let u=a.prototype,d=Object.keys(u);for(let s=0;s<d.length;s++){let b=d[s];if(!(b in c))c[b]=u[b].bind(c)}}let r=o?.Parent??Object;class i extends r{}Object.defineProperty(i,"name",{value:e});function a(c){var h;let u=o?.Parent?new i:this;n(u,c),(h=u._zod).deferred??(h.deferred=[]);for(let d of u._zod.deferred)d();return u}return Object.defineProperty(a,"init",{value:n}),Object.defineProperty(a,Symbol.hasInstance,{value:(c)=>{if(o?.Parent&&c instanceof o.Parent)return!0;return c?._zod?.traits?.has(e)}}),Object.defineProperty(a,"name",{value:e}),a}function ue(e){if(e)Object.assign(xo,e);return xo}var rh,oh,nt,Yt,xo;var yr=g(()=>{rh=Object.freeze({status:"aborted"});oh=Symbol("zod_brand");nt=class nt extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}};Yt=class Yt extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`);this.name="ZodEncodeError"}};xo={}});var _={};et(_,{unwrapMessage:()=>zo,uint8ArrayToHex:()=>sL,uint8ArrayToBase64url:()=>hL,uint8ArrayToBase64:()=>fk,stringifyPrimitive:()=>w,slugify:()=>ah,shallowClone:()=>lh,safeExtend:()=>oL,required:()=>aL,randomString:()=>YD,propertyKeyTypes:()=>Uo,promiseAllObject:()=>WD,primitiveTypes:()=>hh,prefixIssues:()=>Ee,pick:()=>eL,partial:()=>iL,parsedType:()=>$,optionalKeys:()=>uh,omit:()=>tL,objectClone:()=>JD,numKeys:()=>XD,nullish:()=>Nt,normalizeParams:()=>T,mergeDefs:()=>pt,merge:()=>nL,jsonStringifyReplacer:()=>pr,joinValues:()=>f,issue:()=>fr,isPlainObject:()=>xt,isObject:()=>Xt,hexToUint8Array:()=>uL,getSizableOrigin:()=>Ro,getParsedType:()=>ZD,getLengthableOrigin:()=>Fo,getEnumValues:()=>jo,getElementAtPath:()=>VD,floatSafeRemainder:()=>ih,finalizeIssue:()=>Ce,extend:()=>rL,escapeRegex:()=>qe,esc:()=>Hn,defineLazy:()=>M,createTransparentProxy:()=>QD,cloneDef:()=>qD,clone:()=>Pe,cleanRegex:()=>Eo,cleanEnum:()=>cL,captureStackTrace:()=>Mn,cached:()=>vr,base64urlToUint8Array:()=>lL,base64ToUint8Array:()=>vk,assignProp:()=>Ct,assertNotEqual:()=>BD,assertNever:()=>HD,assertIs:()=>GD,assertEqual:()=>KD,assert:()=>MD,allowsEval:()=>ch,aborted:()=>zt,NUMBER_FORMAT_RANGES:()=>sh,Class:()=>Ik,BIGINT_FORMAT_RANGES:()=>dh});function KD(e){return e}function BD(e){return e}function GD(e){}function HD(e){throw Error("Unexpected value in exhaustive check")}function MD(e){}function jo(e){let t=Object.values(e).filter((n)=>typeof n==="number");return Object.entries(e).filter(([n,r])=>t.indexOf(+n)===-1).map(([n,r])=>r)}function f(e,t="|"){return e.map((o)=>w(o)).join(t)}function pr(e,t){if(typeof t==="bigint")return t.toString();return t}function vr(e){return{get value(){{let o=e();return Object.defineProperty(this,"value",{value:o}),o}throw Error("cached value already set")}}}function Nt(e){return e===null||e===void 0}function Eo(e){let t=e.startsWith("^")?1:0,o=e.endsWith("$")?e.length-1:e.length;return e.slice(t,o)}function ih(e,t){let o=(e.toString().split(".")[1]||"").length,n=t.toString(),r=(n.split(".")[1]||"").length;if(r===0&&/\d?e-\d?/.test(n)){let h=n.match(/\d?e-(\d?)/);if(h?.[1])r=Number.parseInt(h[1])}let i=o>r?o:r,a=Number.parseInt(e.toFixed(i).replace(".","")),c=Number.parseInt(t.toFixed(i).replace(".",""));return a%c/10**i}function M(e,t,o){let n=void 0;Object.defineProperty(e,t,{get(){if(n===pk)return;if(n===void 0)n=pk,n=o();return n},set(r){Object.defineProperty(e,t,{value:r})},configurable:!0})}function JD(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function Ct(e,t,o){Object.defineProperty(e,t,{value:o,writable:!0,enumerable:!0,configurable:!0})}function pt(...e){let t={};for(let o of e){let n=Object.getOwnPropertyDescriptors(o);Object.assign(t,n)}return Object.defineProperties({},t)}function qD(e){return pt(e._zod.def)}function VD(e,t){if(!t)return e;return t.reduce((o,n)=>o?.[n],e)}function WD(e){let t=Object.keys(e),o=t.map((n)=>e[n]);return Promise.all(o).then((n)=>{let r={};for(let i=0;i<t.length;i++)r[t[i]]=n[i];return r})}function YD(e=10){let o="";for(let n=0;n<e;n++)o+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return o}function Hn(e){return JSON.stringify(e)}function ah(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}function Xt(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function xt(e){if(Xt(e)===!1)return!1;let t=e.constructor;if(t===void 0)return!0;if(typeof t!=="function")return!0;let o=t.prototype;if(Xt(o)===!1)return!1;if(Object.prototype.hasOwnProperty.call(o,"isPrototypeOf")===!1)return!1;return!0}function lh(e){if(xt(e))return{...e};if(Array.isArray(e))return[...e];return e}function XD(e){let t=0;for(let o in e)if(Object.prototype.hasOwnProperty.call(e,o))t++;return t}function qe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Pe(e,t,o){let n=new e._zod.constr(t??e._zod.def);if(!t||o?.parent)n._zod.parent=e;return n}function T(e){let t=e;if(!t)return{};if(typeof t==="string")return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}if(delete t.message,typeof t.error==="string")return{...t,error:()=>t.error};return t}function QD(e){let t;return new Proxy({},{get(o,n,r){return t??(t=e()),Reflect.get(t,n,r)},set(o,n,r,i){return t??(t=e()),Reflect.set(t,n,r,i)},has(o,n){return t??(t=e()),Reflect.has(t,n)},deleteProperty(o,n){return t??(t=e()),Reflect.deleteProperty(t,n)},ownKeys(o){return t??(t=e()),Reflect.ownKeys(t)},getOwnPropertyDescriptor(o,n){return t??(t=e()),Reflect.getOwnPropertyDescriptor(t,n)},defineProperty(o,n,r){return t??(t=e()),Reflect.defineProperty(t,n,r)}})}function w(e){if(typeof e==="bigint")return e.toString()+"n";if(typeof e==="string")return`"${e}"`;return`${e}`}function uh(e){return Object.keys(e).filter((t)=>{return e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional"})}function eL(e,t){let o=e._zod.def,n=o.checks;if(n&&n.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let i=pt(e._zod.def,{get shape(){let a={};for(let c in t){if(!(c in o.shape))throw Error(`Unrecognized key: "${c}"`);if(!t[c])continue;a[c]=o.shape[c]}return Ct(this,"shape",a),a},checks:[]});return Pe(e,i)}function tL(e,t){let o=e._zod.def,n=o.checks;if(n&&n.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let i=pt(e._zod.def,{get shape(){let a={...e._zod.def.shape};for(let c in t){if(!(c in o.shape))throw Error(`Unrecognized key: "${c}"`);if(!t[c])continue;delete a[c]}return Ct(this,"shape",a),a},checks:[]});return Pe(e,i)}function rL(e,t){if(!xt(t))throw Error("Invalid input to extend: expected a plain object");let o=e._zod.def.checks;if(o&&o.length>0){let i=e._zod.def.shape;for(let a in t)if(Object.getOwnPropertyDescriptor(i,a)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let r=pt(e._zod.def,{get shape(){let i={...e._zod.def.shape,...t};return Ct(this,"shape",i),i}});return Pe(e,r)}function oL(e,t){if(!xt(t))throw Error("Invalid input to safeExtend: expected a plain object");let o=pt(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return Ct(this,"shape",n),n}});return Pe(e,o)}function nL(e,t){let o=pt(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return Ct(this,"shape",n),n},get catchall(){return t._zod.def.catchall},checks:[]});return Pe(e,o)}function iL(e,t,o){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let a=pt(t._zod.def,{get shape(){let c=t._zod.def.shape,h={...c};if(o)for(let u in o){if(!(u in c))throw Error(`Unrecognized key: "${u}"`);if(!o[u])continue;h[u]=e?new e({type:"optional",innerType:c[u]}):c[u]}else for(let u in c)h[u]=e?new e({type:"optional",innerType:c[u]}):c[u];return Ct(this,"shape",h),h},checks:[]});return Pe(t,a)}function aL(e,t,o){let n=pt(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(o)for(let a in o){if(!(a in i))throw Error(`Unrecognized key: "${a}"`);if(!o[a])continue;i[a]=new e({type:"nonoptional",innerType:r[a]})}else for(let a in r)i[a]=new e({type:"nonoptional",innerType:r[a]});return Ct(this,"shape",i),i}});return Pe(t,n)}function zt(e,t=0){if(e.aborted===!0)return!0;for(let o=t;o<e.issues.length;o++)if(e.issues[o]?.continue!==!0)return!0;return!1}function Ee(e,t){return t.map((o)=>{var n;return(n=o).path??(n.path=[]),o.path.unshift(e),o})}function zo(e){return typeof e==="string"?e:e?.message}function Ce(e,t,o){let n={...e,path:e.path??[]};if(!e.message){let r=zo(e.inst?._zod.def?.error?.(e))??zo(t?.error?.(e))??zo(o.customError?.(e))??zo(o.localeError?.(e))??"Invalid input";n.message=r}if(delete n.inst,delete n.continue,!t?.reportInput)delete n.input;return n}function Ro(e){if(e instanceof Set)return"set";if(e instanceof Map)return"map";if(e instanceof File)return"file";return"unknown"}function Fo(e){if(Array.isArray(e))return"array";if(typeof e==="string")return"string";return"unknown"}function $(e){let t=typeof e;switch(t){case"number":return Number.isNaN(e)?"nan":"number";case"object":{if(e===null)return"null";if(Array.isArray(e))return"array";let o=e;if(o&&Object.getPrototypeOf(o)!==Object.prototype&&"constructor"in o&&o.constructor)return o.constructor.name}}return t}function fr(...e){let[t,o,n]=e;if(typeof t==="string")return{message:t,code:"custom",input:o,inst:n};return{...t}}function cL(e){return Object.entries(e).filter(([t,o])=>{return Number.isNaN(Number.parseInt(t,10))}).map((t)=>t[1])}function vk(e){let t=atob(e),o=new Uint8Array(t.length);for(let n=0;n<t.length;n++)o[n]=t.charCodeAt(n);return o}function fk(e){let t="";for(let o=0;o<e.length;o++)t+=String.fromCharCode(e[o]);return btoa(t)}function lL(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),o="=".repeat((4-t.length%4)%4);return vk(t+o)}function hL(e){return fk(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function uL(e){let t=e.replace(/^0x/,"");if(t.length%2!==0)throw Error("Invalid hex string length");let o=new Uint8Array(t.length/2);for(let n=0;n<t.length;n+=2)o[n/2]=Number.parseInt(t.slice(n,n+2),16);return o}function sL(e){return Array.from(e).map((t)=>t.toString(16).padStart(2,"0")).join("")}class Ik{constructor(...e){}}var pk,Mn,ch,ZD=(e)=>{let t=typeof e;switch(t){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(e))return"array";if(e===null)return"null";if(e.then&&typeof e.then==="function"&&e.catch&&typeof e.catch==="function")return"promise";if(typeof Map<"u"&&e instanceof Map)return"map";if(typeof Set<"u"&&e instanceof Set)return"set";if(typeof Date<"u"&&e instanceof Date)return"date";if(typeof File<"u"&&e instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${t}`)}},Uo,hh,sh,dh;var z=g(()=>{pk=Symbol("evaluating");Mn="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};ch=vr(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(e){return!1}});Uo=new Set(["string","number","symbol"]),hh=new Set(["string","number","bigint","boolean","symbol","undefined"]);sh={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},dh={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]}});function Bo(e,t=(o)=>o.message){let o={},n=[];for(let r of e.issues)if(r.path.length>0)o[r.path[0]]=o[r.path[0]]||[],o[r.path[0]].push(t(r));else n.push(t(r));return{formErrors:n,fieldErrors:o}}function Go(e,t=(o)=>o.message){let o={_errors:[]},n=(r)=>{for(let i of r.issues)if(i.code==="invalid_union"&&i.errors.length)i.errors.map((a)=>n({issues:a}));else if(i.code==="invalid_key")n({issues:i.issues});else if(i.code==="invalid_element")n({issues:i.issues});else if(i.path.length===0)o._errors.push(t(i));else{let a=o,c=0;while(c<i.path.length){let h=i.path[c];if(c!==i.path.length-1)a[h]=a[h]||{_errors:[]};else a[h]=a[h]||{_errors:[]},a[h]._errors.push(t(i));a=a[h],c++}}};return n(e),o}function gh(e,t=(o)=>o.message){let o={errors:[]},n=(r,i=[])=>{var a,c;for(let h of r.issues)if(h.code==="invalid_union"&&h.errors.length)h.errors.map((u)=>n({issues:u},h.path));else if(h.code==="invalid_key")n({issues:h.issues},h.path);else if(h.code==="invalid_element")n({issues:h.issues},h.path);else{let u=[...i,...h.path];if(u.length===0){o.errors.push(t(h));continue}let d=o,s=0;while(s<u.length){let b=u[s],m=s===u.length-1;if(typeof b==="string")d.properties??(d.properties={}),(a=d.properties)[b]??(a[b]={errors:[]}),d=d.properties[b];else d.items??(d.items=[]),(c=d.items)[b]??(c[b]={errors:[]}),d=d.items[b];if(m)d.errors.push(t(h));s++}}};return n(e),o}function wk(e){let t=[],o=e.map((n)=>typeof n==="object"?n.key:n);for(let n of o)if(typeof n==="number")t.push(`[${n}]`);else if(typeof n==="symbol")t.push(`[${JSON.stringify(String(n))}]`);else if(/[^\w$]/.test(n))t.push(`[${JSON.stringify(n)}]`);else{if(t.length)t.push(".");t.push(n)}return t.join("")}function bh(e){let t=[],o=[...e.issues].sort((n,r)=>(n.path??[]).length-(r.path??[]).length);for(let n of o)if(t.push(`✖ ${n.message}`),n.path?.length)t.push(`  → at ${wk(n.path)}`);return t.join(`
`)}var kk=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,pr,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Ko,xe;var mh=g(()=>{yr();z();Ko=y("$ZodError",kk),xe=y("$ZodError",kk,{Parent:Error})});var Ir=(e)=>(t,o,n,r)=>{let i=n?Object.assign(n,{async:!1}):{async:!1},a=t._zod.run({value:o,issues:[]},i);if(a instanceof Promise)throw new nt;if(a.issues.length){let c=new(r?.Err??e)(a.issues.map((h)=>Ce(h,i,ue())));throw Mn(c,r?.callee),c}return a.value},Jn,kr=(e)=>async(t,o,n,r)=>{let i=n?Object.assign(n,{async:!0}):{async:!0},a=t._zod.run({value:o,issues:[]},i);if(a instanceof Promise)a=await a;if(a.issues.length){let c=new(r?.Err??e)(a.issues.map((h)=>Ce(h,i,ue())));throw Mn(c,r?.callee),c}return a.value},qn,wr=(e)=>(t,o,n)=>{let r=n?{...n,async:!1}:{async:!1},i=t._zod.run({value:o,issues:[]},r);if(i instanceof Promise)throw new nt;return i.issues.length?{success:!1,error:new(e??Ko)(i.issues.map((a)=>Ce(a,r,ue())))}:{success:!0,data:i.value}},yh,$r=(e)=>async(t,o,n)=>{let r=n?Object.assign(n,{async:!0}):{async:!0},i=t._zod.run({value:o,issues:[]},r);if(i instanceof Promise)i=await i;return i.issues.length?{success:!1,error:new e(i.issues.map((a)=>Ce(a,r,ue())))}:{success:!0,data:i.value}},ph,Vn=(e)=>(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return Ir(e)(t,o,r)},gL,Wn=(e)=>(t,o,n)=>{return Ir(e)(t,o,n)},bL,Yn=(e)=>async(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return kr(e)(t,o,r)},mL,Xn=(e)=>async(t,o,n)=>{return kr(e)(t,o,n)},yL,Zn=(e)=>(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return wr(e)(t,o,r)},pL,Qn=(e)=>(t,o,n)=>{return wr(e)(t,o,n)},vL,ei=(e)=>async(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return $r(e)(t,o,r)},fL,ti=(e)=>async(t,o,n)=>{return $r(e)(t,o,n)},IL;var vh=g(()=>{yr();mh();z();Jn=Ir(xe),qn=kr(xe),yh=wr(xe),ph=$r(xe),gL=Vn(xe),bL=Wn(xe),mL=Yn(xe),yL=Xn(xe),pL=Zn(xe),vL=Qn(xe),fL=ei(xe),IL=ti(xe)});var Ve={};et(Ve,{xid:()=>wh,uuid7:()=>_L,uuid6:()=>$L,uuid4:()=>wL,uuid:()=>Zt,uppercase:()=>Jh,unicodeEmail:()=>$k,undefined:()=>Hh,ulid:()=>kh,time:()=>Eh,string:()=>Rh,sha512_hex:()=>ML,sha512_base64url:()=>qL,sha512_base64:()=>JL,sha384_hex:()=>BL,sha384_base64url:()=>HL,sha384_base64:()=>GL,sha256_hex:()=>RL,sha256_base64url:()=>KL,sha256_base64:()=>FL,sha1_hex:()=>jL,sha1_base64url:()=>UL,sha1_base64:()=>EL,rfc5322Email:()=>OL,number:()=>Ho,null:()=>Gh,nanoid:()=>_h,md5_hex:()=>CL,md5_base64url:()=>zL,md5_base64:()=>xL,mac:()=>Lh,lowercase:()=>Mh,ksuid:()=>$h,ipv6:()=>Dh,ipv4:()=>Ah,integer:()=>Kh,idnEmail:()=>SL,html5Email:()=>TL,hostname:()=>DL,hex:()=>NL,guid:()=>Oh,extendedDuration:()=>kL,emoji:()=>Ph,email:()=>Sh,e164:()=>zh,duration:()=>Th,domain:()=>LL,datetime:()=>Uh,date:()=>jh,cuid2:()=>Ih,cuid:()=>fh,cidrv6:()=>Ch,cidrv4:()=>Nh,browserEmail:()=>PL,boolean:()=>Bh,bigint:()=>Fh,base64url:()=>ri,base64:()=>xh});function Ph(){return new RegExp(AL,"u")}function Tk(e){return typeof e.precision==="number"?e.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":e.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function Eh(e){return new RegExp(`^${Tk(e)}$`)}function Uh(e){let t=Tk({precision:e.precision}),o=["Z"];if(e.local)o.push("");if(e.offset)o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let n=`${t}(?:${o.join("|")})`;return new RegExp(`^${_k}T(?:${n})$`)}function Mo(e,t){return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`)}function Jo(e){return new RegExp(`^[A-Za-z0-9_-]{${e}}$`)}var fh,Ih,kh,wh,$h,_h,Th,kL,Oh,Zt=(e)=>{if(!e)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)},wL,$L,_L,Sh,TL,OL,$k,SL,PL,AL="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Ah,Dh,Lh=(e)=>{let t=qe(e??":");return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`)},Nh,Ch,xh,ri,DL,LL,zh,_k="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",jh,Rh=(e)=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)},Fh,Kh,Ho,Bh,Gh,Hh,Mh,Jh,NL,CL,xL,zL,jL,EL,UL,RL,FL,KL,BL,GL,HL,ML,JL,qL;var oi=g(()=>{z();fh=/^[cC][^\s-]{8,}$/,Ih=/^[0-9a-z]+$/,kh=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,wh=/^[0-9a-vA-V]{20}$/,$h=/^[A-Za-z0-9]{27}$/,_h=/^[a-zA-Z0-9_-]{21}$/,Th=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,kL=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Oh=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,wL=Zt(4),$L=Zt(6),_L=Zt(7),Sh=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,TL=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,OL=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,$k=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,SL=$k,PL=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;Ah=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Dh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Nh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Ch=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,xh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,ri=/^[A-Za-z0-9_-]*$/,DL=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,LL=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,zh=/^\+[1-9]\d{6,14}$/,jh=new RegExp(`^${_k}$`);Fh=/^-?\d+n?$/,Kh=/^-?\d+$/,Ho=/^-?\d+(?:\.\d+)?$/,Bh=/^(?:true|false)$/i,Gh=/^null$/i,Hh=/^undefined$/i,Mh=/^[^A-Z]*$/,Jh=/^[^a-z]*$/,NL=/^[0-9a-fA-F]*$/;CL=/^[0-9a-fA-F]{32}$/,xL=Mo(22,"=="),zL=Jo(22),jL=/^[0-9a-fA-F]{40}$/,EL=Mo(27,"="),UL=Jo(27),RL=/^[0-9a-fA-F]{64}$/,FL=Mo(43,"="),KL=Jo(43),BL=/^[0-9a-fA-F]{96}$/,GL=Mo(64,""),HL=Jo(64),ML=/^[0-9a-fA-F]{128}$/,JL=Mo(86,"=="),qL=Jo(86)});function Ok(e,t,o){if(e.issues.length)t.issues.push(...Ee(o,e.issues))}var re,Sk,ni,ii,qh,Vh,Wh,Yh,Xh,Zh,Qh,eu,tu,_r,ru,ou,nu,iu,au,cu,lu,hu,uu;var ai=g(()=>{yr();oi();z();re=y("$ZodCheck",(e,t)=>{var o;e._zod??(e._zod={}),e._zod.def=t,(o=e._zod).onattach??(o.onattach=[])}),Sk={number:"number",bigint:"bigint",object:"date"},ni=y("$ZodCheckLessThan",(e,t)=>{re.init(e,t);let o=Sk[typeof t.value];e._zod.onattach.push((n)=>{let r=n._zod.bag,i=(t.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;if(t.value<i)if(t.inclusive)r.maximum=t.value;else r.exclusiveMaximum=t.value}),e._zod.check=(n)=>{if(t.inclusive?n.value<=t.value:n.value<t.value)return;n.issues.push({origin:o,code:"too_big",maximum:typeof t.value==="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),ii=y("$ZodCheckGreaterThan",(e,t)=>{re.init(e,t);let o=Sk[typeof t.value];e._zod.onattach.push((n)=>{let r=n._zod.bag,i=(t.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;if(t.value>i)if(t.inclusive)r.minimum=t.value;else r.exclusiveMinimum=t.value}),e._zod.check=(n)=>{if(t.inclusive?n.value>=t.value:n.value>t.value)return;n.issues.push({origin:o,code:"too_small",minimum:typeof t.value==="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),qh=y("$ZodCheckMultipleOf",(e,t)=>{re.init(e,t),e._zod.onattach.push((o)=>{var n;(n=o._zod.bag).multipleOf??(n.multipleOf=t.value)}),e._zod.check=(o)=>{if(typeof o.value!==typeof t.value)throw Error("Cannot mix number and bigint in multiple_of check.");if(typeof o.value==="bigint"?o.value%t.value===BigInt(0):ih(o.value,t.value)===0)return;o.issues.push({origin:typeof o.value,code:"not_multiple_of",divisor:t.value,input:o.value,inst:e,continue:!t.abort})}}),Vh=y("$ZodCheckNumberFormat",(e,t)=>{re.init(e,t),t.format=t.format||"float64";let o=t.format?.includes("int"),n=o?"int":"number",[r,i]=sh[t.format];e._zod.onattach.push((a)=>{let c=a._zod.bag;if(c.format=t.format,c.minimum=r,c.maximum=i,o)c.pattern=Kh}),e._zod.check=(a)=>{let c=a.value;if(o){if(!Number.isInteger(c)){a.issues.push({expected:n,format:t.format,code:"invalid_type",continue:!1,input:c,inst:e});return}if(!Number.isSafeInteger(c)){if(c>0)a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});else a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});return}}if(c<r)a.issues.push({origin:"number",input:c,code:"too_small",minimum:r,inclusive:!0,inst:e,continue:!t.abort});if(c>i)a.issues.push({origin:"number",input:c,code:"too_big",maximum:i,inclusive:!0,inst:e,continue:!t.abort})}}),Wh=y("$ZodCheckBigIntFormat",(e,t)=>{re.init(e,t);let[o,n]=dh[t.format];e._zod.onattach.push((r)=>{let i=r._zod.bag;i.format=t.format,i.minimum=o,i.maximum=n}),e._zod.check=(r)=>{let i=r.value;if(i<o)r.issues.push({origin:"bigint",input:i,code:"too_small",minimum:o,inclusive:!0,inst:e,continue:!t.abort});if(i>n)r.issues.push({origin:"bigint",input:i,code:"too_big",maximum:n,inclusive:!0,inst:e,continue:!t.abort})}}),Yh=y("$ZodCheckMaxSize",(e,t)=>{var o;re.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Nt(r)&&r.size!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(t.maximum<r)n._zod.bag.maximum=t.maximum}),e._zod.check=(n)=>{let r=n.value;if(r.size<=t.maximum)return;n.issues.push({origin:Ro(r),code:"too_big",maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Xh=y("$ZodCheckMinSize",(e,t)=>{var o;re.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Nt(r)&&r.size!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(t.minimum>r)n._zod.bag.minimum=t.minimum}),e._zod.check=(n)=>{let r=n.value;if(r.size>=t.minimum)return;n.issues.push({origin:Ro(r),code:"too_small",minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Zh=y("$ZodCheckSizeEquals",(e,t)=>{var o;re.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Nt(r)&&r.size!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.minimum=t.size,r.maximum=t.size,r.size=t.size}),e._zod.check=(n)=>{let r=n.value,i=r.size;if(i===t.size)return;let a=i>t.size;n.issues.push({origin:Ro(r),...a?{code:"too_big",maximum:t.size}:{code:"too_small",minimum:t.size},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),Qh=y("$ZodCheckMaxLength",(e,t)=>{var o;re.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Nt(r)&&r.length!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(t.maximum<r)n._zod.bag.maximum=t.maximum}),e._zod.check=(n)=>{let r=n.value;if(r.length<=t.maximum)return;let a=Fo(r);n.issues.push({origin:a,code:"too_big",maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),eu=y("$ZodCheckMinLength",(e,t)=>{var o;re.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Nt(r)&&r.length!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(t.minimum>r)n._zod.bag.minimum=t.minimum}),e._zod.check=(n)=>{let r=n.value;if(r.length>=t.minimum)return;let a=Fo(r);n.issues.push({origin:a,code:"too_small",minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),tu=y("$ZodCheckLengthEquals",(e,t)=>{var o;re.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Nt(r)&&r.length!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.minimum=t.length,r.maximum=t.length,r.length=t.length}),e._zod.check=(n)=>{let r=n.value,i=r.length;if(i===t.length)return;let a=Fo(r),c=i>t.length;n.issues.push({origin:a,...c?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),_r=y("$ZodCheckStringFormat",(e,t)=>{var o,n;if(re.init(e,t),e._zod.onattach.push((r)=>{let i=r._zod.bag;if(i.format=t.format,t.pattern)i.patterns??(i.patterns=new Set),i.patterns.add(t.pattern)}),t.pattern)(o=e._zod).check??(o.check=(r)=>{if(t.pattern.lastIndex=0,t.pattern.test(r.value))return;r.issues.push({origin:"string",code:"invalid_format",format:t.format,input:r.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})});else(n=e._zod).check??(n.check=()=>{})}),ru=y("$ZodCheckRegex",(e,t)=>{_r.init(e,t),e._zod.check=(o)=>{if(t.pattern.lastIndex=0,t.pattern.test(o.value))return;o.issues.push({origin:"string",code:"invalid_format",format:"regex",input:o.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),ou=y("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=Mh),_r.init(e,t)}),nu=y("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=Jh),_r.init(e,t)}),iu=y("$ZodCheckIncludes",(e,t)=>{re.init(e,t);let o=qe(t.includes),n=new RegExp(typeof t.position==="number"?`^.{${t.position}}${o}`:o);t.pattern=n,e._zod.onattach.push((r)=>{let i=r._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(n)}),e._zod.check=(r)=>{if(r.value.includes(t.includes,t.position))return;r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:r.value,inst:e,continue:!t.abort})}}),au=y("$ZodCheckStartsWith",(e,t)=>{re.init(e,t);let o=new RegExp(`^${qe(t.prefix)}.*`);t.pattern??(t.pattern=o),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(o)}),e._zod.check=(n)=>{if(n.value.startsWith(t.prefix))return;n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),cu=y("$ZodCheckEndsWith",(e,t)=>{re.init(e,t);let o=new RegExp(`.*${qe(t.suffix)}$`);t.pattern??(t.pattern=o),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(o)}),e._zod.check=(n)=>{if(n.value.endsWith(t.suffix))return;n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}});lu=y("$ZodCheckProperty",(e,t)=>{re.init(e,t),e._zod.check=(o)=>{let n=t.schema._zod.run({value:o.value[t.property],issues:[]},{});if(n instanceof Promise)return n.then((r)=>Ok(r,o,t.property));Ok(n,o,t.property);return}}),hu=y("$ZodCheckMimeType",(e,t)=>{re.init(e,t);let o=new Set(t.mime);e._zod.onattach.push((n)=>{n._zod.bag.mime=t.mime}),e._zod.check=(n)=>{if(o.has(n.value.type))return;n.issues.push({code:"invalid_value",values:t.mime,input:n.value.type,inst:e,continue:!t.abort})}}),uu=y("$ZodCheckOverwrite",(e,t)=>{re.init(e,t),e._zod.check=(o)=>{o.value=t.tx(o.value)}})});class ci{constructor(e=[]){if(this.content=[],this.indent=0,this)this.args=e}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e==="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let o=e.split(`
`).filter((i)=>i),n=Math.min(...o.map((i)=>i.length-i.trimStart().length)),r=o.map((i)=>i.slice(n)).map((i)=>" ".repeat(this.indent*2)+i);for(let i of r)this.content.push(i)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[""]).map((r)=>`  ${r}`)];return new e(...t,n.join(`
`))}}var su;var du=g(()=>{su={major:4,minor:3,patch:6}});function xu(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}function Fk(e){if(!ri.test(e))return!1;let t=e.replace(/[-_]/g,(n)=>n==="-"?"+":"/"),o=t.padEnd(Math.ceil(t.length/4)*4,"=");return xu(o)}function Kk(e,t=null){try{let o=e.split(".");if(o.length!==3)return!1;let[n]=o;if(!n)return!1;let r=JSON.parse(atob(n));if("typ"in r&&r?.typ!=="JWT")return!1;if(!r.alg)return!1;if(t&&(!("alg"in r)||r.alg!==t))return!1;return!0}catch{return!1}}function Ak(e,t,o){if(e.issues.length)t.issues.push(...Ee(o,e.issues));t.value[o]=e.value}function di(e,t,o,n,r){if(e.issues.length){if(r&&!(o in n))return;t.issues.push(...Ee(o,e.issues))}if(e.value===void 0){if(o in n)t.value[o]=void 0}else t.value[o]=e.value}function Bk(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let o=uh(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(o)}}function Gk(e,t,o,n,r,i){let a=[],c=r.keySet,h=r.catchall._zod,u=h.def.type,d=h.optout==="optional";for(let s in t){if(c.has(s))continue;if(u==="never"){a.push(s);continue}let b=h.run({value:t[s],issues:[]},n);if(b instanceof Promise)e.push(b.then((m)=>di(m,o,s,t,d)));else di(b,o,s,t,d)}if(a.length)o.issues.push({code:"unrecognized_keys",keys:a,input:t,inst:i});if(!e.length)return o;return Promise.all(e).then(()=>{return o})}function Dk(e,t,o,n){for(let i of e)if(i.issues.length===0)return t.value=i.value,t;let r=e.filter((i)=>!zt(i));if(r.length===1)return t.value=r[0].value,r[0];return t.issues.push({code:"invalid_union",input:t.value,inst:o,errors:e.map((i)=>i.issues.map((a)=>Ce(a,n,ue())))}),t}function Lk(e,t,o,n){let r=e.filter((i)=>i.issues.length===0);if(r.length===1)return t.value=r[0].value,t;if(r.length===0)t.issues.push({code:"invalid_union",input:t.value,inst:o,errors:e.map((i)=>i.issues.map((a)=>Ce(a,n,ue())))});else t.issues.push({code:"invalid_union",input:t.value,inst:o,errors:[],inclusive:!1});return t}function gu(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e===+t)return{valid:!0,data:e};if(xt(e)&&xt(t)){let o=Object.keys(t),n=Object.keys(e).filter((i)=>o.indexOf(i)!==-1),r={...e,...t};for(let i of n){let a=gu(e[i],t[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};r[i]=a.data}return{valid:!0,data:r}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let o=[];for(let n=0;n<e.length;n++){let r=e[n],i=t[n],a=gu(r,i);if(!a.valid)return{valid:!1,mergeErrorPath:[n,...a.mergeErrorPath]};o.push(a.data)}return{valid:!0,data:o}}return{valid:!1,mergeErrorPath:[]}}function Nk(e,t,o){let n=new Map,r;for(let c of t.issues)if(c.code==="unrecognized_keys"){r??(r=c);for(let h of c.keys){if(!n.has(h))n.set(h,{});n.get(h).l=!0}}else e.issues.push(c);for(let c of o.issues)if(c.code==="unrecognized_keys")for(let h of c.keys){if(!n.has(h))n.set(h,{});n.get(h).r=!0}else e.issues.push(c);let i=[...n].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(i.length&&r)e.issues.push({...r,keys:i});if(zt(e))return e;let a=gu(t.value,o.value);if(!a.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return e.value=a.data,e}function li(e,t,o){if(e.issues.length)t.issues.push(...Ee(o,e.issues));t.value[o]=e.value}function Ck(e,t,o,n,r,i,a){if(e.issues.length)if(Uo.has(typeof n))o.issues.push(...Ee(n,e.issues));else o.issues.push({code:"invalid_key",origin:"map",input:r,inst:i,issues:e.issues.map((c)=>Ce(c,a,ue()))});if(t.issues.length)if(Uo.has(typeof n))o.issues.push(...Ee(n,t.issues));else o.issues.push({origin:"map",code:"invalid_element",input:r,inst:i,key:n,issues:t.issues.map((c)=>Ce(c,a,ue()))});o.value.set(e.value,t.value)}function xk(e,t){if(e.issues.length)t.issues.push(...e.issues);t.value.add(e.value)}function zk(e,t){if(e.issues.length&&t===void 0)return{issues:[],value:void 0};return e}function jk(e,t){if(e.value===void 0)e.value=t.defaultValue;return e}function Ek(e,t){if(!e.issues.length&&e.value===void 0)e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t});return e}function hi(e,t,o){if(e.issues.length)return e.aborted=!0,e;return t._zod.run({value:e.value,issues:e.issues},o)}function ui(e,t,o){if(e.issues.length)return e.aborted=!0,e;if((o.direction||"forward")==="forward"){let r=t.transform(e.value,e);if(r instanceof Promise)return r.then((i)=>si(e,i,t.out,o));return si(e,r,t.out,o)}else{let r=t.reverseTransform(e.value,e);if(r instanceof Promise)return r.then((i)=>si(e,i,t.in,o));return si(e,r,t.in,o)}}function si(e,t,o,n){if(e.issues.length)return e.aborted=!0,e;return o._zod.run({value:t,issues:e.issues},n)}function Uk(e){return e.value=Object.freeze(e.value),e}function Rk(e,t,o,n){if(!e){let r={code:"custom",input:o,inst:n,path:[...n._zod.def.path??[]],continue:!n._zod.def.abort};if(n._zod.def.params)r.params=n._zod.def.params;t.issues.push(fr(r))}}var R,Qt,Q,bu,mu,yu,pu,vu,fu,Iu,ku,wu,$u,_u,Tu,Ou,Su,Pu,Au,Du,Lu,Nu,Cu,zu,ju,Eu,Uu,Ru,gi,Fu,qo,bi,Ku,Bu,Gu,Hu,Mu,Ju,qu,Vu,Wu,Yu,Hk,Xu,Vo,Zu,Qu,es,mi,ts,rs,os,ns,is,as,cs,yi,ls,hs,us,ss,ds,gs,bs,ms,ys,Wo,ps,vs,fs,Is,ks,ws;var $s=g(()=>{ai();yr();vh();oi();z();du();z();R=y("$ZodType",(e,t)=>{var o;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=su;let n=[...e._zod.def.checks??[]];if(e._zod.traits.has("$ZodCheck"))n.unshift(e);for(let r of n)for(let i of r._zod.onattach)i(e);if(n.length===0)(o=e._zod).deferred??(o.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let r=(a,c,h)=>{let u=zt(a),d;for(let s of c){if(s._zod.def.when){if(!s._zod.def.when(a))continue}else if(u)continue;let b=a.issues.length,m=s._zod.check(a);if(m instanceof Promise&&h?.async===!1)throw new nt;if(d||m instanceof Promise)d=(d??Promise.resolve()).then(async()=>{if(await m,a.issues.length===b)return;if(!u)u=zt(a,b)});else{if(a.issues.length===b)continue;if(!u)u=zt(a,b)}}if(d)return d.then(()=>{return a});return a},i=(a,c,h)=>{if(zt(a))return a.aborted=!0,a;let u=r(c,n,h);if(u instanceof Promise){if(h.async===!1)throw new nt;return u.then((d)=>e._zod.parse(d,h))}return e._zod.parse(u,h)};e._zod.run=(a,c)=>{if(c.skipChecks)return e._zod.parse(a,c);if(c.direction==="backward"){let u=e._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});if(u instanceof Promise)return u.then((d)=>{return i(d,a,c)});return i(u,a,c)}let h=e._zod.parse(a,c);if(h instanceof Promise){if(c.async===!1)throw new nt;return h.then((u)=>r(u,n,c))}return r(h,n,c)}}M(e,"~standard",()=>({validate:(r)=>{try{let i=yh(e,r);return i.success?{value:i.data}:{issues:i.error?.issues}}catch(i){return ph(e,r).then((a)=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),Qt=y("$ZodString",(e,t)=>{R.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Rh(e._zod.bag),e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=String(o.value)}catch(r){}if(typeof o.value==="string")return o;return o.issues.push({expected:"string",code:"invalid_type",input:o.value,inst:e}),o}}),Q=y("$ZodStringFormat",(e,t)=>{_r.init(e,t),Qt.init(e,t)}),bu=y("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=Oh),Q.init(e,t)}),mu=y("$ZodUUID",(e,t)=>{if(t.version){let n={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(n===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=Zt(n))}else t.pattern??(t.pattern=Zt());Q.init(e,t)}),yu=y("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=Sh),Q.init(e,t)}),pu=y("$ZodURL",(e,t)=>{Q.init(e,t),e._zod.check=(o)=>{try{let n=o.value.trim(),r=new URL(n);if(t.hostname){if(t.hostname.lastIndex=0,!t.hostname.test(r.hostname))o.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:t.hostname.source,input:o.value,inst:e,continue:!t.abort})}if(t.protocol){if(t.protocol.lastIndex=0,!t.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol))o.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:o.value,inst:e,continue:!t.abort})}if(t.normalize)o.value=r.href;else o.value=n;return}catch(n){o.issues.push({code:"invalid_format",format:"url",input:o.value,inst:e,continue:!t.abort})}}}),vu=y("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=Ph()),Q.init(e,t)}),fu=y("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=_h),Q.init(e,t)}),Iu=y("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=fh),Q.init(e,t)}),ku=y("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=Ih),Q.init(e,t)}),wu=y("$ZodULID",(e,t)=>{t.pattern??(t.pattern=kh),Q.init(e,t)}),$u=y("$ZodXID",(e,t)=>{t.pattern??(t.pattern=wh),Q.init(e,t)}),_u=y("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=$h),Q.init(e,t)}),Tu=y("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=Uh(t)),Q.init(e,t)}),Ou=y("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=jh),Q.init(e,t)}),Su=y("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=Eh(t)),Q.init(e,t)}),Pu=y("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=Th),Q.init(e,t)}),Au=y("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=Ah),Q.init(e,t),e._zod.bag.format="ipv4"}),Du=y("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=Dh),Q.init(e,t),e._zod.bag.format="ipv6",e._zod.check=(o)=>{try{new URL(`http://[${o.value}]`)}catch{o.issues.push({code:"invalid_format",format:"ipv6",input:o.value,inst:e,continue:!t.abort})}}}),Lu=y("$ZodMAC",(e,t)=>{t.pattern??(t.pattern=Lh(t.delimiter)),Q.init(e,t),e._zod.bag.format="mac"}),Nu=y("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=Nh),Q.init(e,t)}),Cu=y("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=Ch),Q.init(e,t),e._zod.check=(o)=>{let n=o.value.split("/");try{if(n.length!==2)throw Error();let[r,i]=n;if(!i)throw Error();let a=Number(i);if(`${a}`!==i)throw Error();if(a<0||a>128)throw Error();new URL(`http://[${r}]`)}catch{o.issues.push({code:"invalid_format",format:"cidrv6",input:o.value,inst:e,continue:!t.abort})}}});zu=y("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=xh),Q.init(e,t),e._zod.bag.contentEncoding="base64",e._zod.check=(o)=>{if(xu(o.value))return;o.issues.push({code:"invalid_format",format:"base64",input:o.value,inst:e,continue:!t.abort})}});ju=y("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=ri),Q.init(e,t),e._zod.bag.contentEncoding="base64url",e._zod.check=(o)=>{if(Fk(o.value))return;o.issues.push({code:"invalid_format",format:"base64url",input:o.value,inst:e,continue:!t.abort})}}),Eu=y("$ZodE164",(e,t)=>{t.pattern??(t.pattern=zh),Q.init(e,t)});Uu=y("$ZodJWT",(e,t)=>{Q.init(e,t),e._zod.check=(o)=>{if(Kk(o.value,t.alg))return;o.issues.push({code:"invalid_format",format:"jwt",input:o.value,inst:e,continue:!t.abort})}}),Ru=y("$ZodCustomStringFormat",(e,t)=>{Q.init(e,t),e._zod.check=(o)=>{if(t.fn(o.value))return;o.issues.push({code:"invalid_format",format:t.format,input:o.value,inst:e,continue:!t.abort})}}),gi=y("$ZodNumber",(e,t)=>{R.init(e,t),e._zod.pattern=e._zod.bag.pattern??Ho,e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=Number(o.value)}catch(a){}let r=o.value;if(typeof r==="number"&&!Number.isNaN(r)&&Number.isFinite(r))return o;let i=typeof r==="number"?Number.isNaN(r)?"NaN":!Number.isFinite(r)?"Infinity":void 0:void 0;return o.issues.push({expected:"number",code:"invalid_type",input:r,inst:e,...i?{received:i}:{}}),o}}),Fu=y("$ZodNumberFormat",(e,t)=>{Vh.init(e,t),gi.init(e,t)}),qo=y("$ZodBoolean",(e,t)=>{R.init(e,t),e._zod.pattern=Bh,e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=Boolean(o.value)}catch(i){}let r=o.value;if(typeof r==="boolean")return o;return o.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:e}),o}}),bi=y("$ZodBigInt",(e,t)=>{R.init(e,t),e._zod.pattern=Fh,e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=BigInt(o.value)}catch(r){}if(typeof o.value==="bigint")return o;return o.issues.push({expected:"bigint",code:"invalid_type",input:o.value,inst:e}),o}}),Ku=y("$ZodBigIntFormat",(e,t)=>{Wh.init(e,t),bi.init(e,t)}),Bu=y("$ZodSymbol",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(typeof r==="symbol")return o;return o.issues.push({expected:"symbol",code:"invalid_type",input:r,inst:e}),o}}),Gu=y("$ZodUndefined",(e,t)=>{R.init(e,t),e._zod.pattern=Hh,e._zod.values=new Set([void 0]),e._zod.optin="optional",e._zod.optout="optional",e._zod.parse=(o,n)=>{let r=o.value;if(typeof r>"u")return o;return o.issues.push({expected:"undefined",code:"invalid_type",input:r,inst:e}),o}}),Hu=y("$ZodNull",(e,t)=>{R.init(e,t),e._zod.pattern=Gh,e._zod.values=new Set([null]),e._zod.parse=(o,n)=>{let r=o.value;if(r===null)return o;return o.issues.push({expected:"null",code:"invalid_type",input:r,inst:e}),o}}),Mu=y("$ZodAny",(e,t)=>{R.init(e,t),e._zod.parse=(o)=>o}),Ju=y("$ZodUnknown",(e,t)=>{R.init(e,t),e._zod.parse=(o)=>o}),qu=y("$ZodNever",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{return o.issues.push({expected:"never",code:"invalid_type",input:o.value,inst:e}),o}}),Vu=y("$ZodVoid",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(typeof r>"u")return o;return o.issues.push({expected:"void",code:"invalid_type",input:r,inst:e}),o}}),Wu=y("$ZodDate",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=new Date(o.value)}catch(c){}let r=o.value,i=r instanceof Date;if(i&&!Number.isNaN(r.getTime()))return o;return o.issues.push({expected:"date",code:"invalid_type",input:r,...i?{received:"Invalid Date"}:{},inst:e}),o}});Yu=y("$ZodArray",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!Array.isArray(r))return o.issues.push({expected:"array",code:"invalid_type",input:r,inst:e}),o;o.value=Array(r.length);let i=[];for(let a=0;a<r.length;a++){let c=r[a],h=t.element._zod.run({value:c,issues:[]},n);if(h instanceof Promise)i.push(h.then((u)=>Ak(u,o,a)));else Ak(h,o,a)}if(i.length)return Promise.all(i).then(()=>o);return o}});Hk=y("$ZodObject",(e,t)=>{if(R.init(e,t),!Object.getOwnPropertyDescriptor(t,"shape")?.get){let c=t.shape;Object.defineProperty(t,"shape",{get:()=>{let h={...c};return Object.defineProperty(t,"shape",{value:h}),h}})}let n=vr(()=>Bk(t));M(e._zod,"propValues",()=>{let c=t.shape,h={};for(let u in c){let d=c[u]._zod;if(d.values){h[u]??(h[u]=new Set);for(let s of d.values)h[u].add(s)}}return h});let r=Xt,i=t.catchall,a;e._zod.parse=(c,h)=>{a??(a=n.value);let u=c.value;if(!r(u))return c.issues.push({expected:"object",code:"invalid_type",input:u,inst:e}),c;c.value={};let d=[],s=a.shape;for(let b of a.keys){let m=s[b],k=m._zod.optout==="optional",A=m._zod.run({value:u[b],issues:[]},h);if(A instanceof Promise)d.push(A.then((F)=>di(F,c,b,u,k)));else di(A,c,b,u,k)}if(!i)return d.length?Promise.all(d).then(()=>c):c;return Gk(d,u,c,h,n.value,e)}}),Xu=y("$ZodObjectJIT",(e,t)=>{Hk.init(e,t);let o=e._zod.parse,n=vr(()=>Bk(t)),r=(b)=>{let m=new ci(["shape","payload","ctx"]),k=n.value,A=(he)=>{let ne=Hn(he);return`shape[${ne}]._zod.run({ value: input[${ne}], issues: [] }, ctx)`};m.write("const input = payload.value;");let F=Object.create(null),j=0;for(let he of k.keys)F[he]=`key_${j++}`;m.write("const newResult = {};");for(let he of k.keys){let ne=F[he],Ne=Hn(he),bP=b[he]?._zod?.optout==="optional";if(m.write(`const ${ne} = ${A(he)};`),bP)m.write(`
        if (${ne}.issues.length) {
          if (${Ne} in input) {
            payload.issues = payload.issues.concat(${ne}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Ne}, ...iss.path] : [${Ne}]
            })));
          }
        }
        
        if (${ne}.value === undefined) {
          if (${Ne} in input) {
            newResult[${Ne}] = undefined;
          }
        } else {
          newResult[${Ne}] = ${ne}.value;
        }
        
      `);else m.write(`
        if (${ne}.issues.length) {
          payload.issues = payload.issues.concat(${ne}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Ne}, ...iss.path] : [${Ne}]
          })));
        }
        
        if (${ne}.value === undefined) {
          if (${Ne} in input) {
            newResult[${Ne}] = undefined;
          }
        } else {
          newResult[${Ne}] = ${ne}.value;
        }
        
      `)}m.write("payload.value = newResult;"),m.write("return payload;");let te=m.compile();return(he,ne)=>te(b,he,ne)},i,a=Xt,c=!xo.jitless,u=c&&ch.value,d=t.catchall,s;e._zod.parse=(b,m)=>{s??(s=n.value);let k=b.value;if(!a(k))return b.issues.push({expected:"object",code:"invalid_type",input:k,inst:e}),b;if(c&&u&&m?.async===!1&&m.jitless!==!0){if(!i)i=r(t.shape);if(b=i(b,m),!d)return b;return Gk([],k,b,m,s,e)}return o(b,m)}});Vo=y("$ZodUnion",(e,t)=>{R.init(e,t),M(e._zod,"optin",()=>t.options.some((r)=>r._zod.optin==="optional")?"optional":void 0),M(e._zod,"optout",()=>t.options.some((r)=>r._zod.optout==="optional")?"optional":void 0),M(e._zod,"values",()=>{if(t.options.every((r)=>r._zod.values))return new Set(t.options.flatMap((r)=>Array.from(r._zod.values)));return}),M(e._zod,"pattern",()=>{if(t.options.every((r)=>r._zod.pattern)){let r=t.options.map((i)=>i._zod.pattern);return new RegExp(`^(${r.map((i)=>Eo(i.source)).join("|")})$`)}return});let o=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(r,i)=>{if(o)return n(r,i);let a=!1,c=[];for(let h of t.options){let u=h._zod.run({value:r.value,issues:[]},i);if(u instanceof Promise)c.push(u),a=!0;else{if(u.issues.length===0)return u;c.push(u)}}if(!a)return Dk(c,r,e,i);return Promise.all(c).then((h)=>{return Dk(h,r,e,i)})}});Zu=y("$ZodXor",(e,t)=>{Vo.init(e,t),t.inclusive=!1;let o=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(r,i)=>{if(o)return n(r,i);let a=!1,c=[];for(let h of t.options){let u=h._zod.run({value:r.value,issues:[]},i);if(u instanceof Promise)c.push(u),a=!0;else c.push(u)}if(!a)return Lk(c,r,e,i);return Promise.all(c).then((h)=>{return Lk(h,r,e,i)})}}),Qu=y("$ZodDiscriminatedUnion",(e,t)=>{t.inclusive=!1,Vo.init(e,t);let o=e._zod.parse;M(e._zod,"propValues",()=>{let r={};for(let i of t.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);for(let[c,h]of Object.entries(a)){if(!r[c])r[c]=new Set;for(let u of h)r[c].add(u)}}return r});let n=vr(()=>{let r=t.options,i=new Map;for(let a of r){let c=a._zod.propValues?.[t.discriminator];if(!c||c.size===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);for(let h of c){if(i.has(h))throw Error(`Duplicate discriminator value "${String(h)}"`);i.set(h,a)}}return i});e._zod.parse=(r,i)=>{let a=r.value;if(!Xt(a))return r.issues.push({code:"invalid_type",expected:"object",input:a,inst:e}),r;let c=n.value.get(a?.[t.discriminator]);if(c)return c._zod.run(r,i);if(t.unionFallback)return o(r,i);return r.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:t.discriminator,input:a,path:[t.discriminator],inst:e}),r}}),es=y("$ZodIntersection",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);if(i instanceof Promise||a instanceof Promise)return Promise.all([i,a]).then(([h,u])=>{return Nk(o,h,u)});return Nk(o,i,a)}});mi=y("$ZodTuple",(e,t)=>{R.init(e,t);let o=t.items;e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({input:i,inst:e,expected:"tuple",code:"invalid_type"}),n;n.value=[];let a=[],c=[...o].reverse().findIndex((d)=>d._zod.optin!=="optional"),h=c===-1?0:o.length-c;if(!t.rest){let d=i.length>o.length,s=i.length<h-1;if(d||s)return n.issues.push({...d?{code:"too_big",maximum:o.length,inclusive:!0}:{code:"too_small",minimum:o.length},input:i,inst:e,origin:"array"}),n}let u=-1;for(let d of o){if(u++,u>=i.length){if(u>=h)continue}let s=d._zod.run({value:i[u],issues:[]},r);if(s instanceof Promise)a.push(s.then((b)=>li(b,n,u)));else li(s,n,u)}if(t.rest){let d=i.slice(o.length);for(let s of d){u++;let b=t.rest._zod.run({value:s,issues:[]},r);if(b instanceof Promise)a.push(b.then((m)=>li(m,n,u)));else li(b,n,u)}}if(a.length)return Promise.all(a).then(()=>n);return n}});ts=y("$ZodRecord",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!xt(r))return o.issues.push({expected:"record",code:"invalid_type",input:r,inst:e}),o;let i=[],a=t.keyType._zod.values;if(a){o.value={};let c=new Set;for(let u of a)if(typeof u==="string"||typeof u==="number"||typeof u==="symbol"){c.add(typeof u==="number"?u.toString():u);let d=t.valueType._zod.run({value:r[u],issues:[]},n);if(d instanceof Promise)i.push(d.then((s)=>{if(s.issues.length)o.issues.push(...Ee(u,s.issues));o.value[u]=s.value}));else{if(d.issues.length)o.issues.push(...Ee(u,d.issues));o.value[u]=d.value}}let h;for(let u in r)if(!c.has(u))h=h??[],h.push(u);if(h&&h.length>0)o.issues.push({code:"unrecognized_keys",input:r,inst:e,keys:h})}else{o.value={};for(let c of Reflect.ownKeys(r)){if(c==="__proto__")continue;let h=t.keyType._zod.run({value:c,issues:[]},n);if(h instanceof Promise)throw Error("Async schemas not supported in object keys currently");if(typeof c==="string"&&Ho.test(c)&&h.issues.length){let s=t.keyType._zod.run({value:Number(c),issues:[]},n);if(s instanceof Promise)throw Error("Async schemas not supported in object keys currently");if(s.issues.length===0)h=s}if(h.issues.length){if(t.mode==="loose")o.value[c]=r[c];else o.issues.push({code:"invalid_key",origin:"record",issues:h.issues.map((s)=>Ce(s,n,ue())),input:c,path:[c],inst:e});continue}let d=t.valueType._zod.run({value:r[c],issues:[]},n);if(d instanceof Promise)i.push(d.then((s)=>{if(s.issues.length)o.issues.push(...Ee(c,s.issues));o.value[h.value]=s.value}));else{if(d.issues.length)o.issues.push(...Ee(c,d.issues));o.value[h.value]=d.value}}}if(i.length)return Promise.all(i).then(()=>o);return o}}),rs=y("$ZodMap",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!(r instanceof Map))return o.issues.push({expected:"map",code:"invalid_type",input:r,inst:e}),o;let i=[];o.value=new Map;for(let[a,c]of r){let h=t.keyType._zod.run({value:a,issues:[]},n),u=t.valueType._zod.run({value:c,issues:[]},n);if(h instanceof Promise||u instanceof Promise)i.push(Promise.all([h,u]).then(([d,s])=>{Ck(d,s,o,a,r,e,n)}));else Ck(h,u,o,a,r,e,n)}if(i.length)return Promise.all(i).then(()=>o);return o}});os=y("$ZodSet",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!(r instanceof Set))return o.issues.push({input:r,inst:e,expected:"set",code:"invalid_type"}),o;let i=[];o.value=new Set;for(let a of r){let c=t.valueType._zod.run({value:a,issues:[]},n);if(c instanceof Promise)i.push(c.then((h)=>xk(h,o)));else xk(c,o)}if(i.length)return Promise.all(i).then(()=>o);return o}});ns=y("$ZodEnum",(e,t)=>{R.init(e,t);let o=jo(t.entries),n=new Set(o);e._zod.values=n,e._zod.pattern=new RegExp(`^(${o.filter((r)=>Uo.has(typeof r)).map((r)=>typeof r==="string"?qe(r):r.toString()).join("|")})$`),e._zod.parse=(r,i)=>{let a=r.value;if(n.has(a))return r;return r.issues.push({code:"invalid_value",values:o,input:a,inst:e}),r}}),is=y("$ZodLiteral",(e,t)=>{if(R.init(e,t),t.values.length===0)throw Error("Cannot create literal schema with no valid values");let o=new Set(t.values);e._zod.values=o,e._zod.pattern=new RegExp(`^(${t.values.map((n)=>typeof n==="string"?qe(n):n?qe(n.toString()):String(n)).join("|")})$`),e._zod.parse=(n,r)=>{let i=n.value;if(o.has(i))return n;return n.issues.push({code:"invalid_value",values:t.values,input:i,inst:e}),n}}),as=y("$ZodFile",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(r instanceof File)return o;return o.issues.push({expected:"file",code:"invalid_type",input:r,inst:e}),o}}),cs=y("$ZodTransform",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{if(n.direction==="backward")throw new Yt(e.constructor.name);let r=t.transform(o.value,o);if(n.async)return(r instanceof Promise?r:Promise.resolve(r)).then((a)=>{return o.value=a,o});if(r instanceof Promise)throw new nt;return o.value=r,o}});yi=y("$ZodOptional",(e,t)=>{R.init(e,t),e._zod.optin="optional",e._zod.optout="optional",M(e._zod,"values",()=>{return t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0}),M(e._zod,"pattern",()=>{let o=t.innerType._zod.pattern;return o?new RegExp(`^(${Eo(o.source)})?$`):void 0}),e._zod.parse=(o,n)=>{if(t.innerType._zod.optin==="optional"){let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>zk(i,o.value));return zk(r,o.value)}if(o.value===void 0)return o;return t.innerType._zod.run(o,n)}}),ls=y("$ZodExactOptional",(e,t)=>{yi.init(e,t),M(e._zod,"values",()=>t.innerType._zod.values),M(e._zod,"pattern",()=>t.innerType._zod.pattern),e._zod.parse=(o,n)=>{return t.innerType._zod.run(o,n)}}),hs=y("$ZodNullable",(e,t)=>{R.init(e,t),M(e._zod,"optin",()=>t.innerType._zod.optin),M(e._zod,"optout",()=>t.innerType._zod.optout),M(e._zod,"pattern",()=>{let o=t.innerType._zod.pattern;return o?new RegExp(`^(${Eo(o.source)}|null)$`):void 0}),M(e._zod,"values",()=>{return t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0}),e._zod.parse=(o,n)=>{if(o.value===null)return o;return t.innerType._zod.run(o,n)}}),us=y("$ZodDefault",(e,t)=>{R.init(e,t),e._zod.optin="optional",M(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);if(o.value===void 0)return o.value=t.defaultValue,o;let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>jk(i,t));return jk(r,t)}});ss=y("$ZodPrefault",(e,t)=>{R.init(e,t),e._zod.optin="optional",M(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);if(o.value===void 0)o.value=t.defaultValue;return t.innerType._zod.run(o,n)}}),ds=y("$ZodNonOptional",(e,t)=>{R.init(e,t),M(e._zod,"values",()=>{let o=t.innerType._zod.values;return o?new Set([...o].filter((n)=>n!==void 0)):void 0}),e._zod.parse=(o,n)=>{let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>Ek(i,e));return Ek(r,e)}});gs=y("$ZodSuccess",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{if(n.direction==="backward")throw new Yt("ZodSuccess");let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>{return o.value=i.issues.length===0,o});return o.value=r.issues.length===0,o}}),bs=y("$ZodCatch",(e,t)=>{R.init(e,t),M(e._zod,"optin",()=>t.innerType._zod.optin),M(e._zod,"optout",()=>t.innerType._zod.optout),M(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>{if(o.value=i.value,i.issues.length)o.value=t.catchValue({...o,error:{issues:i.issues.map((a)=>Ce(a,n,ue()))},input:o.value}),o.issues=[];return o});if(o.value=r.value,r.issues.length)o.value=t.catchValue({...o,error:{issues:r.issues.map((i)=>Ce(i,n,ue()))},input:o.value}),o.issues=[];return o}}),ms=y("$ZodNaN",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{if(typeof o.value!=="number"||!Number.isNaN(o.value))return o.issues.push({input:o.value,inst:e,expected:"nan",code:"invalid_type"}),o;return o}}),ys=y("$ZodPipe",(e,t)=>{R.init(e,t),M(e._zod,"values",()=>t.in._zod.values),M(e._zod,"optin",()=>t.in._zod.optin),M(e._zod,"optout",()=>t.out._zod.optout),M(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(o,n)=>{if(n.direction==="backward"){let i=t.out._zod.run(o,n);if(i instanceof Promise)return i.then((a)=>hi(a,t.in,n));return hi(i,t.in,n)}let r=t.in._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>hi(i,t.out,n));return hi(r,t.out,n)}});Wo=y("$ZodCodec",(e,t)=>{R.init(e,t),M(e._zod,"values",()=>t.in._zod.values),M(e._zod,"optin",()=>t.in._zod.optin),M(e._zod,"optout",()=>t.out._zod.optout),M(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(o,n)=>{if((n.direction||"forward")==="forward"){let i=t.in._zod.run(o,n);if(i instanceof Promise)return i.then((a)=>ui(a,t,n));return ui(i,t,n)}else{let i=t.out._zod.run(o,n);if(i instanceof Promise)return i.then((a)=>ui(a,t,n));return ui(i,t,n)}}});ps=y("$ZodReadonly",(e,t)=>{R.init(e,t),M(e._zod,"propValues",()=>t.innerType._zod.propValues),M(e._zod,"values",()=>t.innerType._zod.values),M(e._zod,"optin",()=>t.innerType?._zod?.optin),M(e._zod,"optout",()=>t.innerType?._zod?.optout),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then(Uk);return Uk(r)}});vs=y("$ZodTemplateLiteral",(e,t)=>{R.init(e,t);let o=[];for(let n of t.parts)if(typeof n==="object"&&n!==null){if(!n._zod.pattern)throw Error(`Invalid template literal part, no pattern found: ${[...n._zod.traits].shift()}`);let r=n._zod.pattern instanceof RegExp?n._zod.pattern.source:n._zod.pattern;if(!r)throw Error(`Invalid template literal part: ${n._zod.traits}`);let i=r.startsWith("^")?1:0,a=r.endsWith("$")?r.length-1:r.length;o.push(r.slice(i,a))}else if(n===null||hh.has(typeof n))o.push(qe(`${n}`));else throw Error(`Invalid template literal part: ${n}`);e._zod.pattern=new RegExp(`^${o.join("")}$`),e._zod.parse=(n,r)=>{if(typeof n.value!=="string")return n.issues.push({input:n.value,inst:e,expected:"string",code:"invalid_type"}),n;if(e._zod.pattern.lastIndex=0,!e._zod.pattern.test(n.value))return n.issues.push({input:n.value,inst:e,code:"invalid_format",format:t.format??"template_literal",pattern:e._zod.pattern.source}),n;return n}}),fs=y("$ZodFunction",(e,t)=>{return R.init(e,t),e._def=t,e._zod.def=t,e.implement=(o)=>{if(typeof o!=="function")throw Error("implement() must be called with a function");return function(...n){let r=e._def.input?Jn(e._def.input,n):n,i=Reflect.apply(o,this,r);if(e._def.output)return Jn(e._def.output,i);return i}},e.implementAsync=(o)=>{if(typeof o!=="function")throw Error("implementAsync() must be called with a function");return async function(...n){let r=e._def.input?await qn(e._def.input,n):n,i=await Reflect.apply(o,this,r);if(e._def.output)return await qn(e._def.output,i);return i}},e._zod.parse=(o,n)=>{if(typeof o.value!=="function")return o.issues.push({code:"invalid_type",expected:"function",input:o.value,inst:e}),o;if(e._def.output&&e._def.output._zod.def.type==="promise")o.value=e.implementAsync(o.value);else o.value=e.implement(o.value);return o},e.input=(...o)=>{let n=e.constructor;if(Array.isArray(o[0]))return new n({type:"function",input:new mi({type:"tuple",items:o[0],rest:o[1]}),output:e._def.output});return new n({type:"function",input:o[0],output:e._def.output})},e.output=(o)=>{return new e.constructor({type:"function",input:e._def.input,output:o})},e}),Is=y("$ZodPromise",(e,t)=>{R.init(e,t),e._zod.parse=(o,n)=>{return Promise.resolve(o.value).then((r)=>t.innerType._zod.run({value:r,issues:[]},n))}}),ks=y("$ZodLazy",(e,t)=>{R.init(e,t),M(e._zod,"innerType",()=>t.getter()),M(e._zod,"pattern",()=>e._zod.innerType?._zod?.pattern),M(e._zod,"propValues",()=>e._zod.innerType?._zod?.propValues),M(e._zod,"optin",()=>e._zod.innerType?._zod?.optin??void 0),M(e._zod,"optout",()=>e._zod.innerType?._zod?.optout??void 0),e._zod.parse=(o,n)=>{return e._zod.innerType._zod.run(o,n)}}),ws=y("$ZodCustom",(e,t)=>{re.init(e,t),R.init(e,t),e._zod.parse=(o,n)=>{return o},e._zod.check=(o)=>{let n=o.value,r=t.fn(n);if(r instanceof Promise)return r.then((i)=>Rk(i,o,n,e));Rk(r,o,n,e);return}})});function _s(){return{localeError:WL()}}var WL=()=>{let e={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function t(r){return e[r]??null}let o={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`مدخلات غير مقبولة: يفترض إدخال instanceof ${r.expected}، ولكن تم إدخال ${c}`;return`مدخلات غير مقبولة: يفترض إدخال ${i}، ولكن تم إدخال ${c}`}case"invalid_value":if(r.values.length===1)return`مدخلات غير مقبولة: يفترض إدخال ${w(r.values[0])}`;return`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return` أكبر من اللازم: يفترض أن تكون ${r.origin??"القيمة"} ${i} ${r.maximum.toString()} ${a.unit??"عنصر"}`;return`أكبر من اللازم: يفترض أن تكون ${r.origin??"القيمة"} ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`أصغر من اللازم: يفترض لـ ${r.origin} أن يكون ${i} ${r.minimum.toString()} ${a.unit}`;return`أصغر من اللازم: يفترض لـ ${r.origin} أن يكون ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`نَص غير مقبول: يجب أن يبدأ بـ "${r.prefix}"`;if(i.format==="ends_with")return`نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"`;if(i.format==="includes")return`نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"`;if(i.format==="regex")return`نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}`;return`${o[i.format]??r.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${r.divisor}`;case"unrecognized_keys":return`معرف${r.keys.length>1?"ات":""} غريب${r.keys.length>1?"ة":""}: ${f(r.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${r.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${r.origin}`;default:return"مدخل غير مقبول"}}};var Mk=g(()=>{z()});function Ts(){return{localeError:YL()}}var YL=()=>{let e={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function t(r){return e[r]??null}let o={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Yanlış dəyər: gözlənilən instanceof ${r.expected}, daxil olan ${c}`;return`Yanlış dəyər: gözlənilən ${i}, daxil olan ${c}`}case"invalid_value":if(r.values.length===1)return`Yanlış dəyər: gözlənilən ${w(r.values[0])}`;return`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Çox böyük: gözlənilən ${r.origin??"dəyər"} ${i}${r.maximum.toString()} ${a.unit??"element"}`;return`Çox böyük: gözlənilən ${r.origin??"dəyər"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Çox kiçik: gözlənilən ${r.origin} ${i}${r.minimum.toString()} ${a.unit}`;return`Çox kiçik: gözlənilən ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Yanlış mətn: "${i.prefix}" ilə başlamalıdır`;if(i.format==="ends_with")return`Yanlış mətn: "${i.suffix}" ilə bitməlidir`;if(i.format==="includes")return`Yanlış mətn: "${i.includes}" daxil olmalıdır`;if(i.format==="regex")return`Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır`;return`Yanlış ${o[i.format]??r.format}`}case"not_multiple_of":return`Yanlış ədəd: ${r.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${r.keys.length>1?"lar":""}: ${f(r.keys,", ")}`;case"invalid_key":return`${r.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${r.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};var Jk=g(()=>{z()});function qk(e,t,o,n){let r=Math.abs(e),i=r%10,a=r%100;if(a>=11&&a<=19)return n;if(i===1)return t;if(i>=2&&i<=4)return o;return n}function Os(){return{localeError:XL()}}var XL=()=>{let e={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function t(r){return e[r]??null}let o={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"},n={nan:"NaN",number:"лік",array:"масіў"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Няправільны ўвод: чакаўся instanceof ${r.expected}, атрымана ${c}`;return`Няправільны ўвод: чакаўся ${i}, атрымана ${c}`}case"invalid_value":if(r.values.length===1)return`Няправільны ўвод: чакалася ${w(r.values[0])}`;return`Няправільны варыянт: чакаўся адзін з ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a){let c=Number(r.maximum),h=qk(c,a.unit.one,a.unit.few,a.unit.many);return`Занадта вялікі: чакалася, што ${r.origin??"значэнне"} павінна ${a.verb} ${i}${r.maximum.toString()} ${h}`}return`Занадта вялікі: чакалася, што ${r.origin??"значэнне"} павінна быць ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a){let c=Number(r.minimum),h=qk(c,a.unit.one,a.unit.few,a.unit.many);return`Занадта малы: чакалася, што ${r.origin} павінна ${a.verb} ${i}${r.minimum.toString()} ${h}`}return`Занадта малы: чакалася, што ${r.origin} павінна быць ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Няправільны радок: павінен пачынацца з "${i.prefix}"`;if(i.format==="ends_with")return`Няправільны радок: павінен заканчвацца на "${i.suffix}"`;if(i.format==="includes")return`Няправільны радок: павінен змяшчаць "${i.includes}"`;if(i.format==="regex")return`Няправільны радок: павінен адпавядаць шаблону ${i.pattern}`;return`Няправільны ${o[i.format]??r.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${r.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${r.keys.length>1?"ключы":"ключ"}: ${f(r.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${r.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${r.origin}`;default:return"Няправільны ўвод"}}};var Vk=g(()=>{z()});function Ss(){return{localeError:ZL()}}var ZL=()=>{let e={string:{unit:"символа",verb:"да съдържа"},file:{unit:"байта",verb:"да съдържа"},array:{unit:"елемента",verb:"да съдържа"},set:{unit:"елемента",verb:"да съдържа"}};function t(r){return e[r]??null}let o={regex:"вход",email:"имейл адрес",url:"URL",emoji:"емоджи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO време",date:"ISO дата",time:"ISO време",duration:"ISO продължителност",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"base64-кодиран низ",base64url:"base64url-кодиран низ",json_string:"JSON низ",e164:"E.164 номер",jwt:"JWT",template_literal:"вход"},n={nan:"NaN",number:"число",array:"масив"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Невалиден вход: очакван instanceof ${r.expected}, получен ${c}`;return`Невалиден вход: очакван ${i}, получен ${c}`}case"invalid_value":if(r.values.length===1)return`Невалиден вход: очакван ${w(r.values[0])}`;return`Невалидна опция: очаквано едно от ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Твърде голямо: очаква се ${r.origin??"стойност"} да съдържа ${i}${r.maximum.toString()} ${a.unit??"елемента"}`;return`Твърде голямо: очаква се ${r.origin??"стойност"} да бъде ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Твърде малко: очаква се ${r.origin} да съдържа ${i}${r.minimum.toString()} ${a.unit}`;return`Твърде малко: очаква се ${r.origin} да бъде ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Невалиден низ: трябва да започва с "${i.prefix}"`;if(i.format==="ends_with")return`Невалиден низ: трябва да завършва с "${i.suffix}"`;if(i.format==="includes")return`Невалиден низ: трябва да включва "${i.includes}"`;if(i.format==="regex")return`Невалиден низ: трябва да съвпада с ${i.pattern}`;let a="Невалиден";if(i.format==="emoji")a="Невалидно";if(i.format==="datetime")a="Невалидно";if(i.format==="date")a="Невалидна";if(i.format==="time")a="Невалидно";if(i.format==="duration")a="Невалидна";return`${a} ${o[i.format]??r.format}`}case"not_multiple_of":return`Невалидно число: трябва да бъде кратно на ${r.divisor}`;case"unrecognized_keys":return`Неразпознат${r.keys.length>1?"и":""} ключ${r.keys.length>1?"ове":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Невалиден ключ в ${r.origin}`;case"invalid_union":return"Невалиден вход";case"invalid_element":return`Невалидна стойност в ${r.origin}`;default:return"Невалиден вход"}}};var Wk=g(()=>{z()});function Ps(){return{localeError:QL()}}var QL=()=>{let e={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function t(r){return e[r]??null}let o={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Tipus invàlid: s'esperava instanceof ${r.expected}, s'ha rebut ${c}`;return`Tipus invàlid: s'esperava ${i}, s'ha rebut ${c}`}case"invalid_value":if(r.values.length===1)return`Valor invàlid: s'esperava ${w(r.values[0])}`;return`Opció invàlida: s'esperava una de ${f(r.values," o ")}`;case"too_big":{let i=r.inclusive?"com a màxim":"menys de",a=t(r.origin);if(a)return`Massa gran: s'esperava que ${r.origin??"el valor"} contingués ${i} ${r.maximum.toString()} ${a.unit??"elements"}`;return`Massa gran: s'esperava que ${r.origin??"el valor"} fos ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?"com a mínim":"més de",a=t(r.origin);if(a)return`Massa petit: s'esperava que ${r.origin} contingués ${i} ${r.minimum.toString()} ${a.unit}`;return`Massa petit: s'esperava que ${r.origin} fos ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Format invàlid: ha de començar amb "${i.prefix}"`;if(i.format==="ends_with")return`Format invàlid: ha d'acabar amb "${i.suffix}"`;if(i.format==="includes")return`Format invàlid: ha d'incloure "${i.includes}"`;if(i.format==="regex")return`Format invàlid: ha de coincidir amb el patró ${i.pattern}`;return`Format invàlid per a ${o[i.format]??r.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${r.divisor}`;case"unrecognized_keys":return`Clau${r.keys.length>1?"s":""} no reconeguda${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${r.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${r.origin}`;default:return"Entrada invàlida"}}};var Yk=g(()=>{z()});function As(){return{localeError:eN()}}var eN=()=>{let e={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function t(r){return e[r]??null}let o={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"},n={nan:"NaN",number:"číslo",string:"řetězec",function:"funkce",array:"pole"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Neplatný vstup: očekáváno instanceof ${r.expected}, obdrženo ${c}`;return`Neplatný vstup: očekáváno ${i}, obdrženo ${c}`}case"invalid_value":if(r.values.length===1)return`Neplatný vstup: očekáváno ${w(r.values[0])}`;return`Neplatná možnost: očekávána jedna z hodnot ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Hodnota je příliš velká: ${r.origin??"hodnota"} musí mít ${i}${r.maximum.toString()} ${a.unit??"prvků"}`;return`Hodnota je příliš velká: ${r.origin??"hodnota"} musí být ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Hodnota je příliš malá: ${r.origin??"hodnota"} musí mít ${i}${r.minimum.toString()} ${a.unit??"prvků"}`;return`Hodnota je příliš malá: ${r.origin??"hodnota"} musí být ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Neplatný řetězec: musí začínat na "${i.prefix}"`;if(i.format==="ends_with")return`Neplatný řetězec: musí končit na "${i.suffix}"`;if(i.format==="includes")return`Neplatný řetězec: musí obsahovat "${i.includes}"`;if(i.format==="regex")return`Neplatný řetězec: musí odpovídat vzoru ${i.pattern}`;return`Neplatný formát ${o[i.format]??r.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${r.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${f(r.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${r.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${r.origin}`;default:return"Neplatný vstup"}}};var Xk=g(()=>{z()});function Ds(){return{localeError:tN()}}var tN=()=>{let e={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}};function t(r){return e[r]??null}let o={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},n={nan:"NaN",string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ugyldigt input: forventede instanceof ${r.expected}, fik ${c}`;return`Ugyldigt input: forventede ${i}, fik ${c}`}case"invalid_value":if(r.values.length===1)return`Ugyldig værdi: forventede ${w(r.values[0])}`;return`Ugyldigt valg: forventede en af følgende ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`For stor: forventede ${c??"value"} ${a.verb} ${i} ${r.maximum.toString()} ${a.unit??"elementer"}`;return`For stor: forventede ${c??"value"} havde ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`For lille: forventede ${c} ${a.verb} ${i} ${r.minimum.toString()} ${a.unit}`;return`For lille: forventede ${c} havde ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ugyldig streng: skal starte med "${i.prefix}"`;if(i.format==="ends_with")return`Ugyldig streng: skal ende med "${i.suffix}"`;if(i.format==="includes")return`Ugyldig streng: skal indeholde "${i.includes}"`;if(i.format==="regex")return`Ugyldig streng: skal matche mønsteret ${i.pattern}`;return`Ugyldig ${o[i.format]??r.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${f(r.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${r.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${r.origin}`;default:return"Ugyldigt input"}}};var Zk=g(()=>{z()});function Ls(){return{localeError:rN()}}var rN=()=>{let e={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function t(r){return e[r]??null}let o={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"},n={nan:"NaN",number:"Zahl",array:"Array"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ungültige Eingabe: erwartet instanceof ${r.expected}, erhalten ${c}`;return`Ungültige Eingabe: erwartet ${i}, erhalten ${c}`}case"invalid_value":if(r.values.length===1)return`Ungültige Eingabe: erwartet ${w(r.values[0])}`;return`Ungültige Option: erwartet eine von ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Zu groß: erwartet, dass ${r.origin??"Wert"} ${i}${r.maximum.toString()} ${a.unit??"Elemente"} hat`;return`Zu groß: erwartet, dass ${r.origin??"Wert"} ${i}${r.maximum.toString()} ist`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Zu klein: erwartet, dass ${r.origin} ${i}${r.minimum.toString()} ${a.unit} hat`;return`Zu klein: erwartet, dass ${r.origin} ${i}${r.minimum.toString()} ist`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ungültiger String: muss mit "${i.prefix}" beginnen`;if(i.format==="ends_with")return`Ungültiger String: muss mit "${i.suffix}" enden`;if(i.format==="includes")return`Ungültiger String: muss "${i.includes}" enthalten`;if(i.format==="regex")return`Ungültiger String: muss dem Muster ${i.pattern} entsprechen`;return`Ungültig: ${o[i.format]??r.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${r.divisor} sein`;case"unrecognized_keys":return`${r.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${f(r.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${r.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${r.origin}`;default:return"Ungültige Eingabe"}}};var Qk=g(()=>{z()});function Yo(){return{localeError:oN()}}var oN=()=>{let e={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function t(r){return e[r]??null}let o={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;return`Invalid input: expected ${i}, received ${c}`}case"invalid_value":if(r.values.length===1)return`Invalid input: expected ${w(r.values[0])}`;return`Invalid option: expected one of ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Too big: expected ${r.origin??"value"} to have ${i}${r.maximum.toString()} ${a.unit??"elements"}`;return`Too big: expected ${r.origin??"value"} to be ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Too small: expected ${r.origin} to have ${i}${r.minimum.toString()} ${a.unit}`;return`Too small: expected ${r.origin} to be ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Invalid string: must start with "${i.prefix}"`;if(i.format==="ends_with")return`Invalid string: must end with "${i.suffix}"`;if(i.format==="includes")return`Invalid string: must include "${i.includes}"`;if(i.format==="regex")return`Invalid string: must match pattern ${i.pattern}`;return`Invalid ${o[i.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};var Ns=g(()=>{z()});function Cs(){return{localeError:nN()}}var nN=()=>{let e={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function t(r){return e[r]??null}let o={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"},n={nan:"NaN",number:"nombro",array:"tabelo",null:"senvalora"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Nevalida enigo: atendiĝis instanceof ${r.expected}, riceviĝis ${c}`;return`Nevalida enigo: atendiĝis ${i}, riceviĝis ${c}`}case"invalid_value":if(r.values.length===1)return`Nevalida enigo: atendiĝis ${w(r.values[0])}`;return`Nevalida opcio: atendiĝis unu el ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${i}${r.maximum.toString()} ${a.unit??"elementojn"}`;return`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Tro malgranda: atendiĝis ke ${r.origin} havu ${i}${r.minimum.toString()} ${a.unit}`;return`Tro malgranda: atendiĝis ke ${r.origin} estu ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Nevalida karaktraro: devas komenciĝi per "${i.prefix}"`;if(i.format==="ends_with")return`Nevalida karaktraro: devas finiĝi per "${i.suffix}"`;if(i.format==="includes")return`Nevalida karaktraro: devas inkluzivi "${i.includes}"`;if(i.format==="regex")return`Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}`;return`Nevalida ${o[i.format]??r.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${r.divisor}`;case"unrecognized_keys":return`Nekonata${r.keys.length>1?"j":""} ŝlosilo${r.keys.length>1?"j":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${r.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${r.origin}`;default:return"Nevalida enigo"}}};var ew=g(()=>{z()});function xs(){return{localeError:iN()}}var iN=()=>{let e={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function t(r){return e[r]??null}let o={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN",string:"texto",number:"número",boolean:"booleano",array:"arreglo",object:"objeto",set:"conjunto",file:"archivo",date:"fecha",bigint:"número grande",symbol:"símbolo",undefined:"indefinido",null:"nulo",function:"función",map:"mapa",record:"registro",tuple:"tupla",enum:"enumeración",union:"unión",literal:"literal",promise:"promesa",void:"vacío",never:"nunca",unknown:"desconocido",any:"cualquiera"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Entrada inválida: se esperaba instanceof ${r.expected}, recibido ${c}`;return`Entrada inválida: se esperaba ${i}, recibido ${c}`}case"invalid_value":if(r.values.length===1)return`Entrada inválida: se esperaba ${w(r.values[0])}`;return`Opción inválida: se esperaba una de ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`Demasiado grande: se esperaba que ${c??"valor"} tuviera ${i}${r.maximum.toString()} ${a.unit??"elementos"}`;return`Demasiado grande: se esperaba que ${c??"valor"} fuera ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`Demasiado pequeño: se esperaba que ${c} tuviera ${i}${r.minimum.toString()} ${a.unit}`;return`Demasiado pequeño: se esperaba que ${c} fuera ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Cadena inválida: debe comenzar con "${i.prefix}"`;if(i.format==="ends_with")return`Cadena inválida: debe terminar en "${i.suffix}"`;if(i.format==="includes")return`Cadena inválida: debe incluir "${i.includes}"`;if(i.format==="regex")return`Cadena inválida: debe coincidir con el patrón ${i.pattern}`;return`Inválido ${o[i.format]??r.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${r.divisor}`;case"unrecognized_keys":return`Llave${r.keys.length>1?"s":""} desconocida${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Llave inválida en ${n[r.origin]??r.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${n[r.origin]??r.origin}`;default:return"Entrada inválida"}}};var tw=g(()=>{z()});function zs(){return{localeError:aN()}}var aN=()=>{let e={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function t(r){return e[r]??null}let o={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"},n={nan:"NaN",number:"عدد",array:"آرایه"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ورودی نامعتبر: می‌بایست instanceof ${r.expected} می‌بود، ${c} دریافت شد`;return`ورودی نامعتبر: می‌بایست ${i} می‌بود، ${c} دریافت شد`}case"invalid_value":if(r.values.length===1)return`ورودی نامعتبر: می‌بایست ${w(r.values[0])} می‌بود`;return`گزینه نامعتبر: می‌بایست یکی از ${f(r.values,"|")} می‌بود`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`خیلی بزرگ: ${r.origin??"مقدار"} باید ${i}${r.maximum.toString()} ${a.unit??"عنصر"} باشد`;return`خیلی بزرگ: ${r.origin??"مقدار"} باید ${i}${r.maximum.toString()} باشد`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`خیلی کوچک: ${r.origin} باید ${i}${r.minimum.toString()} ${a.unit} باشد`;return`خیلی کوچک: ${r.origin} باید ${i}${r.minimum.toString()} باشد`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`رشته نامعتبر: باید با "${i.prefix}" شروع شود`;if(i.format==="ends_with")return`رشته نامعتبر: باید با "${i.suffix}" تمام شود`;if(i.format==="includes")return`رشته نامعتبر: باید شامل "${i.includes}" باشد`;if(i.format==="regex")return`رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد`;return`${o[i.format]??r.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${r.divisor} باشد`;case"unrecognized_keys":return`کلید${r.keys.length>1?"های":""} ناشناس: ${f(r.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${r.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${r.origin}`;default:return"ورودی نامعتبر"}}};var rw=g(()=>{z()});function js(){return{localeError:cN()}}var cN=()=>{let e={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function t(r){return e[r]??null}let o={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Virheellinen tyyppi: odotettiin instanceof ${r.expected}, oli ${c}`;return`Virheellinen tyyppi: odotettiin ${i}, oli ${c}`}case"invalid_value":if(r.values.length===1)return`Virheellinen syöte: täytyy olla ${w(r.values[0])}`;return`Virheellinen valinta: täytyy olla yksi seuraavista: ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Liian suuri: ${a.subject} täytyy olla ${i}${r.maximum.toString()} ${a.unit}`.trim();return`Liian suuri: arvon täytyy olla ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Liian pieni: ${a.subject} täytyy olla ${i}${r.minimum.toString()} ${a.unit}`.trim();return`Liian pieni: arvon täytyy olla ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Virheellinen syöte: täytyy alkaa "${i.prefix}"`;if(i.format==="ends_with")return`Virheellinen syöte: täytyy loppua "${i.suffix}"`;if(i.format==="includes")return`Virheellinen syöte: täytyy sisältää "${i.includes}"`;if(i.format==="regex")return`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}`;return`Virheellinen ${o[i.format]??r.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${r.divisor} monikerta`;case"unrecognized_keys":return`${r.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${f(r.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};var ow=g(()=>{z()});function Es(){return{localeError:lN()}}var lN=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function t(r){return e[r]??null}let o={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},n={nan:"NaN",number:"nombre",array:"tableau"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Entrée invalide : instanceof ${r.expected} attendu, ${c} reçu`;return`Entrée invalide : ${i} attendu, ${c} reçu`}case"invalid_value":if(r.values.length===1)return`Entrée invalide : ${w(r.values[0])} attendu`;return`Option invalide : une valeur parmi ${f(r.values,"|")} attendue`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Trop grand : ${r.origin??"valeur"} doit ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"élément(s)"}`;return`Trop grand : ${r.origin??"valeur"} doit être ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Trop petit : ${r.origin} doit ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Trop petit : ${r.origin} doit être ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Chaîne invalide : doit commencer par "${i.prefix}"`;if(i.format==="ends_with")return`Chaîne invalide : doit se terminer par "${i.suffix}"`;if(i.format==="includes")return`Chaîne invalide : doit inclure "${i.includes}"`;if(i.format==="regex")return`Chaîne invalide : doit correspondre au modèle ${i.pattern}`;return`${o[i.format]??r.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${r.divisor}`;case"unrecognized_keys":return`Clé${r.keys.length>1?"s":""} non reconnue${r.keys.length>1?"s":""} : ${f(r.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${r.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${r.origin}`;default:return"Entrée invalide"}}};var nw=g(()=>{z()});function Us(){return{localeError:hN()}}var hN=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function t(r){return e[r]??null}let o={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Entrée invalide : attendu instanceof ${r.expected}, reçu ${c}`;return`Entrée invalide : attendu ${i}, reçu ${c}`}case"invalid_value":if(r.values.length===1)return`Entrée invalide : attendu ${w(r.values[0])}`;return`Option invalide : attendu l'une des valeurs suivantes ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"≤":"<",a=t(r.origin);if(a)return`Trop grand : attendu que ${r.origin??"la valeur"} ait ${i}${r.maximum.toString()} ${a.unit}`;return`Trop grand : attendu que ${r.origin??"la valeur"} soit ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?"≥":">",a=t(r.origin);if(a)return`Trop petit : attendu que ${r.origin} ait ${i}${r.minimum.toString()} ${a.unit}`;return`Trop petit : attendu que ${r.origin} soit ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Chaîne invalide : doit commencer par "${i.prefix}"`;if(i.format==="ends_with")return`Chaîne invalide : doit se terminer par "${i.suffix}"`;if(i.format==="includes")return`Chaîne invalide : doit inclure "${i.includes}"`;if(i.format==="regex")return`Chaîne invalide : doit correspondre au motif ${i.pattern}`;return`${o[i.format]??r.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${r.divisor}`;case"unrecognized_keys":return`Clé${r.keys.length>1?"s":""} non reconnue${r.keys.length>1?"s":""} : ${f(r.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${r.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${r.origin}`;default:return"Entrée invalide"}}};var iw=g(()=>{z()});function Rs(){return{localeError:uN()}}var uN=()=>{let e={string:{label:"מחרוזת",gender:"f"},number:{label:"מספר",gender:"m"},boolean:{label:"ערך בוליאני",gender:"m"},bigint:{label:"BigInt",gender:"m"},date:{label:"תאריך",gender:"m"},array:{label:"מערך",gender:"m"},object:{label:"אובייקט",gender:"m"},null:{label:"ערך ריק (null)",gender:"m"},undefined:{label:"ערך לא מוגדר (undefined)",gender:"m"},symbol:{label:"סימבול (Symbol)",gender:"m"},function:{label:"פונקציה",gender:"f"},map:{label:"מפה (Map)",gender:"f"},set:{label:"קבוצה (Set)",gender:"f"},file:{label:"קובץ",gender:"m"},promise:{label:"Promise",gender:"m"},NaN:{label:"NaN",gender:"m"},unknown:{label:"ערך לא ידוע",gender:"m"},value:{label:"ערך",gender:"m"}},t={string:{unit:"תווים",shortLabel:"קצר",longLabel:"ארוך"},file:{unit:"בייטים",shortLabel:"קטן",longLabel:"גדול"},array:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},set:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},number:{unit:"",shortLabel:"קטן",longLabel:"גדול"}},o=(u)=>u?e[u]:void 0,n=(u)=>{let d=o(u);if(d)return d.label;return u??e.unknown.label},r=(u)=>`ה${n(u)}`,i=(u)=>{return(o(u)?.gender??"m")==="f"?"צריכה להיות":"צריך להיות"},a=(u)=>{if(!u)return null;return t[u]??null},c={regex:{label:"קלט",gender:"m"},email:{label:"כתובת אימייל",gender:"f"},url:{label:"כתובת רשת",gender:"f"},emoji:{label:"אימוג'י",gender:"m"},uuid:{label:"UUID",gender:"m"},nanoid:{label:"nanoid",gender:"m"},guid:{label:"GUID",gender:"m"},cuid:{label:"cuid",gender:"m"},cuid2:{label:"cuid2",gender:"m"},ulid:{label:"ULID",gender:"m"},xid:{label:"XID",gender:"m"},ksuid:{label:"KSUID",gender:"m"},datetime:{label:"תאריך וזמן ISO",gender:"m"},date:{label:"תאריך ISO",gender:"m"},time:{label:"זמן ISO",gender:"m"},duration:{label:"משך זמן ISO",gender:"m"},ipv4:{label:"כתובת IPv4",gender:"f"},ipv6:{label:"כתובת IPv6",gender:"f"},cidrv4:{label:"טווח IPv4",gender:"m"},cidrv6:{label:"טווח IPv6",gender:"m"},base64:{label:"מחרוזת בבסיס 64",gender:"f"},base64url:{label:"מחרוזת בבסיס 64 לכתובות רשת",gender:"f"},json_string:{label:"מחרוזת JSON",gender:"f"},e164:{label:"מספר E.164",gender:"m"},jwt:{label:"JWT",gender:"m"},ends_with:{label:"קלט",gender:"m"},includes:{label:"קלט",gender:"m"},lowercase:{label:"קלט",gender:"m"},starts_with:{label:"קלט",gender:"m"},uppercase:{label:"קלט",gender:"m"}},h={nan:"NaN"};return(u)=>{switch(u.code){case"invalid_type":{let d=u.expected,s=h[d??""]??n(d),b=$(u.input),m=h[b]??e[b]?.label??b;if(/^[A-Z]/.test(u.expected))return`קלט לא תקין: צריך להיות instanceof ${u.expected}, התקבל ${m}`;return`קלט לא תקין: צריך להיות ${s}, התקבל ${m}`}case"invalid_value":{if(u.values.length===1)return`ערך לא תקין: הערך חייב להיות ${w(u.values[0])}`;let d=u.values.map((m)=>w(m));if(u.values.length===2)return`ערך לא תקין: האפשרויות המתאימות הן ${d[0]} או ${d[1]}`;let s=d[d.length-1];return`ערך לא תקין: האפשרויות המתאימות הן ${d.slice(0,-1).join(", ")} או ${s}`}case"too_big":{let d=a(u.origin),s=r(u.origin??"value");if(u.origin==="string")return`${d?.longLabel??"ארוך"} מדי: ${s} צריכה להכיל ${u.maximum.toString()} ${d?.unit??""} ${u.inclusive?"או פחות":"לכל היותר"}`.trim();if(u.origin==="number"){let k=u.inclusive?`קטן או שווה ל-${u.maximum}`:`קטן מ-${u.maximum}`;return`גדול מדי: ${s} צריך להיות ${k}`}if(u.origin==="array"||u.origin==="set"){let k=u.origin==="set"?"צריכה":"צריך",A=u.inclusive?`${u.maximum} ${d?.unit??""} או פחות`:`פחות מ-${u.maximum} ${d?.unit??""}`;return`גדול מדי: ${s} ${k} להכיל ${A}`.trim()}let b=u.inclusive?"<=":"<",m=i(u.origin??"value");if(d?.unit)return`${d.longLabel} מדי: ${s} ${m} ${b}${u.maximum.toString()} ${d.unit}`;return`${d?.longLabel??"גדול"} מדי: ${s} ${m} ${b}${u.maximum.toString()}`}case"too_small":{let d=a(u.origin),s=r(u.origin??"value");if(u.origin==="string")return`${d?.shortLabel??"קצר"} מדי: ${s} צריכה להכיל ${u.minimum.toString()} ${d?.unit??""} ${u.inclusive?"או יותר":"לפחות"}`.trim();if(u.origin==="number"){let k=u.inclusive?`גדול או שווה ל-${u.minimum}`:`גדול מ-${u.minimum}`;return`קטן מדי: ${s} צריך להיות ${k}`}if(u.origin==="array"||u.origin==="set"){let k=u.origin==="set"?"צריכה":"צריך";if(u.minimum===1&&u.inclusive){let F=u.origin==="set"?"לפחות פריט אחד":"לפחות פריט אחד";return`קטן מדי: ${s} ${k} להכיל ${F}`}let A=u.inclusive?`${u.minimum} ${d?.unit??""} או יותר`:`יותר מ-${u.minimum} ${d?.unit??""}`;return`קטן מדי: ${s} ${k} להכיל ${A}`.trim()}let b=u.inclusive?">=":">",m=i(u.origin??"value");if(d?.unit)return`${d.shortLabel} מדי: ${s} ${m} ${b}${u.minimum.toString()} ${d.unit}`;return`${d?.shortLabel??"קטן"} מדי: ${s} ${m} ${b}${u.minimum.toString()}`}case"invalid_format":{let d=u;if(d.format==="starts_with")return`המחרוזת חייבת להתחיל ב "${d.prefix}"`;if(d.format==="ends_with")return`המחרוזת חייבת להסתיים ב "${d.suffix}"`;if(d.format==="includes")return`המחרוזת חייבת לכלול "${d.includes}"`;if(d.format==="regex")return`המחרוזת חייבת להתאים לתבנית ${d.pattern}`;let s=c[d.format],b=s?.label??d.format,k=(s?.gender??"m")==="f"?"תקינה":"תקין";return`${b} לא ${k}`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${u.divisor}`;case"unrecognized_keys":return`מפתח${u.keys.length>1?"ות":""} לא מזוה${u.keys.length>1?"ים":"ה"}: ${f(u.keys,", ")}`;case"invalid_key":return"שדה לא תקין באובייקט";case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${r(u.origin??"array")}`;default:return"קלט לא תקין"}}};var aw=g(()=>{z()});function Fs(){return{localeError:sN()}}var sN=()=>{let e={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function t(r){return e[r]??null}let o={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"},n={nan:"NaN",number:"szám",array:"tömb"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Érvénytelen bemenet: a várt érték instanceof ${r.expected}, a kapott érték ${c}`;return`Érvénytelen bemenet: a várt érték ${i}, a kapott érték ${c}`}case"invalid_value":if(r.values.length===1)return`Érvénytelen bemenet: a várt érték ${w(r.values[0])}`;return`Érvénytelen opció: valamelyik érték várt ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Túl nagy: ${r.origin??"érték"} mérete túl nagy ${i}${r.maximum.toString()} ${a.unit??"elem"}`;return`Túl nagy: a bemeneti érték ${r.origin??"érték"} túl nagy: ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Túl kicsi: a bemeneti érték ${r.origin} mérete túl kicsi ${i}${r.minimum.toString()} ${a.unit}`;return`Túl kicsi: a bemeneti érték ${r.origin} túl kicsi ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie`;if(i.format==="ends_with")return`Érvénytelen string: "${i.suffix}" értékkel kell végződnie`;if(i.format==="includes")return`Érvénytelen string: "${i.includes}" értéket kell tartalmaznia`;if(i.format==="regex")return`Érvénytelen string: ${i.pattern} mintának kell megfelelnie`;return`Érvénytelen ${o[i.format]??r.format}`}case"not_multiple_of":return`Érvénytelen szám: ${r.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${r.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${r.origin}`;default:return"Érvénytelen bemenet"}}};var cw=g(()=>{z()});function lw(e,t,o){return Math.abs(e)===1?t:o}function Tr(e){if(!e)return"";let t=["ա","ե","ը","ի","ո","ու","օ"],o=e[e.length-1];return e+(t.includes(o)?"ն":"ը")}function Ks(){return{localeError:dN()}}var dN=()=>{let e={string:{unit:{one:"նշան",many:"նշաններ"},verb:"ունենալ"},file:{unit:{one:"բայթ",many:"բայթեր"},verb:"ունենալ"},array:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"},set:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"}};function t(r){return e[r]??null}let o={regex:"մուտք",email:"էլ. հասցե",url:"URL",emoji:"էմոջի",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO ամսաթիվ և ժամ",date:"ISO ամսաթիվ",time:"ISO ժամ",duration:"ISO տևողություն",ipv4:"IPv4 հասցե",ipv6:"IPv6 հասցե",cidrv4:"IPv4 միջակայք",cidrv6:"IPv6 միջակայք",base64:"base64 ձևաչափով տող",base64url:"base64url ձևաչափով տող",json_string:"JSON տող",e164:"E.164 համար",jwt:"JWT",template_literal:"մուտք"},n={nan:"NaN",number:"թիվ",array:"զանգված"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Սխալ մուտքագրում․ սպասվում էր instanceof ${r.expected}, ստացվել է ${c}`;return`Սխալ մուտքագրում․ սպասվում էր ${i}, ստացվել է ${c}`}case"invalid_value":if(r.values.length===1)return`Սխալ մուտքագրում․ սպասվում էր ${w(r.values[1])}`;return`Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a){let c=Number(r.maximum),h=lw(c,a.unit.one,a.unit.many);return`Չափազանց մեծ արժեք․ սպասվում է, որ ${Tr(r.origin??"արժեք")} կունենա ${i}${r.maximum.toString()} ${h}`}return`Չափազանց մեծ արժեք․ սպասվում է, որ ${Tr(r.origin??"արժեք")} լինի ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a){let c=Number(r.minimum),h=lw(c,a.unit.one,a.unit.many);return`Չափազանց փոքր արժեք․ սպասվում է, որ ${Tr(r.origin)} կունենա ${i}${r.minimum.toString()} ${h}`}return`Չափազանց փոքր արժեք․ սպասվում է, որ ${Tr(r.origin)} լինի ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Սխալ տող․ պետք է սկսվի "${i.prefix}"-ով`;if(i.format==="ends_with")return`Սխալ տող․ պետք է ավարտվի "${i.suffix}"-ով`;if(i.format==="includes")return`Սխալ տող․ պետք է պարունակի "${i.includes}"`;if(i.format==="regex")return`Սխալ տող․ պետք է համապատասխանի ${i.pattern} ձևաչափին`;return`Սխալ ${o[i.format]??r.format}`}case"not_multiple_of":return`Սխալ թիվ․ պետք է բազմապատիկ լինի ${r.divisor}-ի`;case"unrecognized_keys":return`Չճանաչված բանալի${r.keys.length>1?"ներ":""}. ${f(r.keys,", ")}`;case"invalid_key":return`Սխալ բանալի ${Tr(r.origin)}-ում`;case"invalid_union":return"Սխալ մուտքագրում";case"invalid_element":return`Սխալ արժեք ${Tr(r.origin)}-ում`;default:return"Սխալ մուտքագրում"}}};var hw=g(()=>{z()});function Bs(){return{localeError:gN()}}var gN=()=>{let e={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function t(r){return e[r]??null}let o={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Input tidak valid: diharapkan instanceof ${r.expected}, diterima ${c}`;return`Input tidak valid: diharapkan ${i}, diterima ${c}`}case"invalid_value":if(r.values.length===1)return`Input tidak valid: diharapkan ${w(r.values[0])}`;return`Pilihan tidak valid: diharapkan salah satu dari ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Terlalu besar: diharapkan ${r.origin??"value"} memiliki ${i}${r.maximum.toString()} ${a.unit??"elemen"}`;return`Terlalu besar: diharapkan ${r.origin??"value"} menjadi ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Terlalu kecil: diharapkan ${r.origin} memiliki ${i}${r.minimum.toString()} ${a.unit}`;return`Terlalu kecil: diharapkan ${r.origin} menjadi ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`String tidak valid: harus dimulai dengan "${i.prefix}"`;if(i.format==="ends_with")return`String tidak valid: harus berakhir dengan "${i.suffix}"`;if(i.format==="includes")return`String tidak valid: harus menyertakan "${i.includes}"`;if(i.format==="regex")return`String tidak valid: harus sesuai pola ${i.pattern}`;return`${o[i.format]??r.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${r.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${r.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${r.origin}`;default:return"Input tidak valid"}}};var uw=g(()=>{z()});function Gs(){return{localeError:bN()}}var bN=()=>{let e={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function t(r){return e[r]??null}let o={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"},n={nan:"NaN",number:"númer",array:"fylki"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Rangt gildi: Þú slóst inn ${c} þar sem á að vera instanceof ${r.expected}`;return`Rangt gildi: Þú slóst inn ${c} þar sem á að vera ${i}`}case"invalid_value":if(r.values.length===1)return`Rangt gildi: gert ráð fyrir ${w(r.values[0])}`;return`Ógilt val: má vera eitt af eftirfarandi ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} hafi ${i}${r.maximum.toString()} ${a.unit??"hluti"}`;return`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} sé ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Of lítið: gert er ráð fyrir að ${r.origin} hafi ${i}${r.minimum.toString()} ${a.unit}`;return`Of lítið: gert er ráð fyrir að ${r.origin} sé ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ógildur strengur: verður að byrja á "${i.prefix}"`;if(i.format==="ends_with")return`Ógildur strengur: verður að enda á "${i.suffix}"`;if(i.format==="includes")return`Ógildur strengur: verður að innihalda "${i.includes}"`;if(i.format==="regex")return`Ógildur strengur: verður að fylgja mynstri ${i.pattern}`;return`Rangt ${o[i.format]??r.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${r.divisor}`;case"unrecognized_keys":return`Óþekkt ${r.keys.length>1?"ir lyklar":"ur lykill"}: ${f(r.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${r.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${r.origin}`;default:return"Rangt gildi"}}};var sw=g(()=>{z()});function Hs(){return{localeError:mN()}}var mN=()=>{let e={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function t(r){return e[r]??null}let o={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"numero",array:"vettore"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Input non valido: atteso instanceof ${r.expected}, ricevuto ${c}`;return`Input non valido: atteso ${i}, ricevuto ${c}`}case"invalid_value":if(r.values.length===1)return`Input non valido: atteso ${w(r.values[0])}`;return`Opzione non valida: atteso uno tra ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Troppo grande: ${r.origin??"valore"} deve avere ${i}${r.maximum.toString()} ${a.unit??"elementi"}`;return`Troppo grande: ${r.origin??"valore"} deve essere ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Troppo piccolo: ${r.origin} deve avere ${i}${r.minimum.toString()} ${a.unit}`;return`Troppo piccolo: ${r.origin} deve essere ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Stringa non valida: deve iniziare con "${i.prefix}"`;if(i.format==="ends_with")return`Stringa non valida: deve terminare con "${i.suffix}"`;if(i.format==="includes")return`Stringa non valida: deve includere "${i.includes}"`;if(i.format==="regex")return`Stringa non valida: deve corrispondere al pattern ${i.pattern}`;return`Invalid ${o[i.format]??r.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${r.divisor}`;case"unrecognized_keys":return`Chiav${r.keys.length>1?"i":"e"} non riconosciut${r.keys.length>1?"e":"a"}: ${f(r.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${r.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${r.origin}`;default:return"Input non valido"}}};var dw=g(()=>{z()});function Ms(){return{localeError:yN()}}var yN=()=>{let e={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function t(r){return e[r]??null}let o={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"},n={nan:"NaN",number:"数値",array:"配列"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`無効な入力: instanceof ${r.expected}が期待されましたが、${c}が入力されました`;return`無効な入力: ${i}が期待されましたが、${c}が入力されました`}case"invalid_value":if(r.values.length===1)return`無効な入力: ${w(r.values[0])}が期待されました`;return`無効な選択: ${f(r.values,"、")}のいずれかである必要があります`;case"too_big":{let i=r.inclusive?"以下である":"より小さい",a=t(r.origin);if(a)return`大きすぎる値: ${r.origin??"値"}は${r.maximum.toString()}${a.unit??"要素"}${i}必要があります`;return`大きすぎる値: ${r.origin??"値"}は${r.maximum.toString()}${i}必要があります`}case"too_small":{let i=r.inclusive?"以上である":"より大きい",a=t(r.origin);if(a)return`小さすぎる値: ${r.origin}は${r.minimum.toString()}${a.unit}${i}必要があります`;return`小さすぎる値: ${r.origin}は${r.minimum.toString()}${i}必要があります`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`無効な文字列: "${i.prefix}"で始まる必要があります`;if(i.format==="ends_with")return`無効な文字列: "${i.suffix}"で終わる必要があります`;if(i.format==="includes")return`無効な文字列: "${i.includes}"を含む必要があります`;if(i.format==="regex")return`無効な文字列: パターン${i.pattern}に一致する必要があります`;return`無効な${o[i.format]??r.format}`}case"not_multiple_of":return`無効な数値: ${r.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${r.keys.length>1?"群":""}: ${f(r.keys,"、")}`;case"invalid_key":return`${r.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${r.origin}内の無効な値`;default:return"無効な入力"}}};var gw=g(()=>{z()});function Js(){return{localeError:pN()}}var pN=()=>{let e={string:{unit:"სიმბოლო",verb:"უნდა შეიცავდეს"},file:{unit:"ბაიტი",verb:"უნდა შეიცავდეს"},array:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"},set:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"}};function t(r){return e[r]??null}let o={regex:"შეყვანა",email:"ელ-ფოსტის მისამართი",url:"URL",emoji:"ემოჯი",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"თარიღი-დრო",date:"თარიღი",time:"დრო",duration:"ხანგრძლივობა",ipv4:"IPv4 მისამართი",ipv6:"IPv6 მისამართი",cidrv4:"IPv4 დიაპაზონი",cidrv6:"IPv6 დიაპაზონი",base64:"base64-კოდირებული სტრინგი",base64url:"base64url-კოდირებული სტრინგი",json_string:"JSON სტრინგი",e164:"E.164 ნომერი",jwt:"JWT",template_literal:"შეყვანა"},n={nan:"NaN",number:"რიცხვი",string:"სტრინგი",boolean:"ბულეანი",function:"ფუნქცია",array:"მასივი"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`არასწორი შეყვანა: მოსალოდნელი instanceof ${r.expected}, მიღებული ${c}`;return`არასწორი შეყვანა: მოსალოდნელი ${i}, მიღებული ${c}`}case"invalid_value":if(r.values.length===1)return`არასწორი შეყვანა: მოსალოდნელი ${w(r.values[0])}`;return`არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${f(r.values,"|")}-დან`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`ზედმეტად დიდი: მოსალოდნელი ${r.origin??"მნიშვნელობა"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit}`;return`ზედმეტად დიდი: მოსალოდნელი ${r.origin??"მნიშვნელობა"} იყოს ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`ზედმეტად პატარა: მოსალოდნელი ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`ზედმეტად პატარა: მოსალოდნელი ${r.origin} იყოს ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`არასწორი სტრინგი: უნდა იწყებოდეს "${i.prefix}"-ით`;if(i.format==="ends_with")return`არასწორი სტრინგი: უნდა მთავრდებოდეს "${i.suffix}"-ით`;if(i.format==="includes")return`არასწორი სტრინგი: უნდა შეიცავდეს "${i.includes}"-ს`;if(i.format==="regex")return`არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${i.pattern}`;return`არასწორი ${o[i.format]??r.format}`}case"not_multiple_of":return`არასწორი რიცხვი: უნდა იყოს ${r.divisor}-ის ჯერადი`;case"unrecognized_keys":return`უცნობი გასაღებ${r.keys.length>1?"ები":"ი"}: ${f(r.keys,", ")}`;case"invalid_key":return`არასწორი გასაღები ${r.origin}-ში`;case"invalid_union":return"არასწორი შეყვანა";case"invalid_element":return`არასწორი მნიშვნელობა ${r.origin}-ში`;default:return"არასწორი შეყვანა"}}};var bw=g(()=>{z()});function Xo(){return{localeError:vN()}}var vN=()=>{let e={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function t(r){return e[r]??null}let o={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"},n={nan:"NaN",number:"លេខ",array:"អារេ (Array)",null:"គ្មានតម្លៃ (null)"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${r.expected} ប៉ុន្តែទទួលបាន ${c}`;return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i} ប៉ុន្តែទទួលបាន ${c}`}case"invalid_value":if(r.values.length===1)return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${w(r.values[0])}`;return`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`ធំពេក៖ ត្រូវការ ${r.origin??"តម្លៃ"} ${i} ${r.maximum.toString()} ${a.unit??"ធាតុ"}`;return`ធំពេក៖ ត្រូវការ ${r.origin??"តម្លៃ"} ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`តូចពេក៖ ត្រូវការ ${r.origin} ${i} ${r.minimum.toString()} ${a.unit}`;return`តូចពេក៖ ត្រូវការ ${r.origin} ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"`;if(i.format==="ends_with")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"`;if(i.format==="includes")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"`;if(i.format==="regex")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}`;return`មិនត្រឹមត្រូវ៖ ${o[i.format]??r.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${r.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${f(r.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${r.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${r.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};var qs=g(()=>{z()});function Vs(){return Xo()}var mw=g(()=>{qs()});function Ws(){return{localeError:fN()}}var fN=()=>{let e={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function t(r){return e[r]??null}let o={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`잘못된 입력: 예상 타입은 instanceof ${r.expected}, 받은 타입은 ${c}입니다`;return`잘못된 입력: 예상 타입은 ${i}, 받은 타입은 ${c}입니다`}case"invalid_value":if(r.values.length===1)return`잘못된 입력: 값은 ${w(r.values[0])} 이어야 합니다`;return`잘못된 옵션: ${f(r.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{let i=r.inclusive?"이하":"미만",a=i==="미만"?"이어야 합니다":"여야 합니다",c=t(r.origin),h=c?.unit??"요소";if(c)return`${r.origin??"값"}이 너무 큽니다: ${r.maximum.toString()}${h} ${i}${a}`;return`${r.origin??"값"}이 너무 큽니다: ${r.maximum.toString()} ${i}${a}`}case"too_small":{let i=r.inclusive?"이상":"초과",a=i==="이상"?"이어야 합니다":"여야 합니다",c=t(r.origin),h=c?.unit??"요소";if(c)return`${r.origin??"값"}이 너무 작습니다: ${r.minimum.toString()}${h} ${i}${a}`;return`${r.origin??"값"}이 너무 작습니다: ${r.minimum.toString()} ${i}${a}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다`;if(i.format==="ends_with")return`잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다`;if(i.format==="includes")return`잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다`;if(i.format==="regex")return`잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다`;return`잘못된 ${o[i.format]??r.format}`}case"not_multiple_of":return`잘못된 숫자: ${r.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${f(r.keys,", ")}`;case"invalid_key":return`잘못된 키: ${r.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${r.origin}`;default:return"잘못된 입력"}}};var yw=g(()=>{z()});function pw(e){let t=Math.abs(e),o=t%10,n=t%100;if(n>=11&&n<=19||o===0)return"many";if(o===1)return"one";return"few"}function Ys(){return{localeError:IN()}}var Zo=(e)=>{return e.charAt(0).toUpperCase()+e.slice(1)},IN=()=>{let e={string:{unit:{one:"simbolis",few:"simboliai",many:"simbolių"},verb:{smaller:{inclusive:"turi būti ne ilgesnė kaip",notInclusive:"turi būti trumpesnė kaip"},bigger:{inclusive:"turi būti ne trumpesnė kaip",notInclusive:"turi būti ilgesnė kaip"}}},file:{unit:{one:"baitas",few:"baitai",many:"baitų"},verb:{smaller:{inclusive:"turi būti ne didesnis kaip",notInclusive:"turi būti mažesnis kaip"},bigger:{inclusive:"turi būti ne mažesnis kaip",notInclusive:"turi būti didesnis kaip"}}},array:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}},set:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}}};function t(r,i,a,c){let h=e[r]??null;if(h===null)return h;return{unit:h.unit[i],verb:h.verb[c][a?"inclusive":"notInclusive"]}}let o={regex:"įvestis",email:"el. pašto adresas",url:"URL",emoji:"jaustukas",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO data ir laikas",date:"ISO data",time:"ISO laikas",duration:"ISO trukmė",ipv4:"IPv4 adresas",ipv6:"IPv6 adresas",cidrv4:"IPv4 tinklo prefiksas (CIDR)",cidrv6:"IPv6 tinklo prefiksas (CIDR)",base64:"base64 užkoduota eilutė",base64url:"base64url užkoduota eilutė",json_string:"JSON eilutė",e164:"E.164 numeris",jwt:"JWT",template_literal:"įvestis"},n={nan:"NaN",number:"skaičius",bigint:"sveikasis skaičius",string:"eilutė",boolean:"loginė reikšmė",undefined:"neapibrėžta reikšmė",function:"funkcija",symbol:"simbolis",array:"masyvas",object:"objektas",null:"nulinė reikšmė"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Gautas tipas ${c}, o tikėtasi - instanceof ${r.expected}`;return`Gautas tipas ${c}, o tikėtasi - ${i}`}case"invalid_value":if(r.values.length===1)return`Privalo būti ${w(r.values[0])}`;return`Privalo būti vienas iš ${f(r.values,"|")} pasirinkimų`;case"too_big":{let i=n[r.origin]??r.origin,a=t(r.origin,pw(Number(r.maximum)),r.inclusive??!1,"smaller");if(a?.verb)return`${Zo(i??r.origin??"reikšmė")} ${a.verb} ${r.maximum.toString()} ${a.unit??"elementų"}`;let c=r.inclusive?"ne didesnis kaip":"mažesnis kaip";return`${Zo(i??r.origin??"reikšmė")} turi būti ${c} ${r.maximum.toString()} ${a?.unit}`}case"too_small":{let i=n[r.origin]??r.origin,a=t(r.origin,pw(Number(r.minimum)),r.inclusive??!1,"bigger");if(a?.verb)return`${Zo(i??r.origin??"reikšmė")} ${a.verb} ${r.minimum.toString()} ${a.unit??"elementų"}`;let c=r.inclusive?"ne mažesnis kaip":"didesnis kaip";return`${Zo(i??r.origin??"reikšmė")} turi būti ${c} ${r.minimum.toString()} ${a?.unit}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Eilutė privalo prasidėti "${i.prefix}"`;if(i.format==="ends_with")return`Eilutė privalo pasibaigti "${i.suffix}"`;if(i.format==="includes")return`Eilutė privalo įtraukti "${i.includes}"`;if(i.format==="regex")return`Eilutė privalo atitikti ${i.pattern}`;return`Neteisingas ${o[i.format]??r.format}`}case"not_multiple_of":return`Skaičius privalo būti ${r.divisor} kartotinis.`;case"unrecognized_keys":return`Neatpažint${r.keys.length>1?"i":"as"} rakt${r.keys.length>1?"ai":"as"}: ${f(r.keys,", ")}`;case"invalid_key":return"Rastas klaidingas raktas";case"invalid_union":return"Klaidinga įvestis";case"invalid_element":{let i=n[r.origin]??r.origin;return`${Zo(i??r.origin??"reikšmė")} turi klaidingą įvestį`}default:return"Klaidinga įvestis"}}};var vw=g(()=>{z()});function Xs(){return{localeError:kN()}}var kN=()=>{let e={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function t(r){return e[r]??null}let o={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"},n={nan:"NaN",number:"број",array:"низа"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Грешен внес: се очекува instanceof ${r.expected}, примено ${c}`;return`Грешен внес: се очекува ${i}, примено ${c}`}case"invalid_value":if(r.values.length===1)return`Invalid input: expected ${w(r.values[0])}`;return`Грешана опција: се очекува една ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Премногу голем: се очекува ${r.origin??"вредноста"} да има ${i}${r.maximum.toString()} ${a.unit??"елементи"}`;return`Премногу голем: се очекува ${r.origin??"вредноста"} да биде ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Премногу мал: се очекува ${r.origin} да има ${i}${r.minimum.toString()} ${a.unit}`;return`Премногу мал: се очекува ${r.origin} да биде ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Неважечка низа: мора да започнува со "${i.prefix}"`;if(i.format==="ends_with")return`Неважечка низа: мора да завршува со "${i.suffix}"`;if(i.format==="includes")return`Неважечка низа: мора да вклучува "${i.includes}"`;if(i.format==="regex")return`Неважечка низа: мора да одгоара на патернот ${i.pattern}`;return`Invalid ${o[i.format]??r.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${f(r.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${r.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${r.origin}`;default:return"Грешен внес"}}};var fw=g(()=>{z()});function Zs(){return{localeError:wN()}}var wN=()=>{let e={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function t(r){return e[r]??null}let o={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"nombor"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Input tidak sah: dijangka instanceof ${r.expected}, diterima ${c}`;return`Input tidak sah: dijangka ${i}, diterima ${c}`}case"invalid_value":if(r.values.length===1)return`Input tidak sah: dijangka ${w(r.values[0])}`;return`Pilihan tidak sah: dijangka salah satu daripada ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Terlalu besar: dijangka ${r.origin??"nilai"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"elemen"}`;return`Terlalu besar: dijangka ${r.origin??"nilai"} adalah ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Terlalu kecil: dijangka ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Terlalu kecil: dijangka ${r.origin} adalah ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`String tidak sah: mesti bermula dengan "${i.prefix}"`;if(i.format==="ends_with")return`String tidak sah: mesti berakhir dengan "${i.suffix}"`;if(i.format==="includes")return`String tidak sah: mesti mengandungi "${i.includes}"`;if(i.format==="regex")return`String tidak sah: mesti sepadan dengan corak ${i.pattern}`;return`${o[i.format]??r.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${r.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${f(r.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${r.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${r.origin}`;default:return"Input tidak sah"}}};var Iw=g(()=>{z()});function Qs(){return{localeError:$N()}}var $N=()=>{let e={string:{unit:"tekens",verb:"heeft"},file:{unit:"bytes",verb:"heeft"},array:{unit:"elementen",verb:"heeft"},set:{unit:"elementen",verb:"heeft"}};function t(r){return e[r]??null}let o={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"},n={nan:"NaN",number:"getal"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ongeldige invoer: verwacht instanceof ${r.expected}, ontving ${c}`;return`Ongeldige invoer: verwacht ${i}, ontving ${c}`}case"invalid_value":if(r.values.length===1)return`Ongeldige invoer: verwacht ${w(r.values[0])}`;return`Ongeldige optie: verwacht één van ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin),c=r.origin==="date"?"laat":r.origin==="string"?"lang":"groot";if(a)return`Te ${c}: verwacht dat ${r.origin??"waarde"} ${i}${r.maximum.toString()} ${a.unit??"elementen"} ${a.verb}`;return`Te ${c}: verwacht dat ${r.origin??"waarde"} ${i}${r.maximum.toString()} is`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin),c=r.origin==="date"?"vroeg":r.origin==="string"?"kort":"klein";if(a)return`Te ${c}: verwacht dat ${r.origin} ${i}${r.minimum.toString()} ${a.unit} ${a.verb}`;return`Te ${c}: verwacht dat ${r.origin} ${i}${r.minimum.toString()} is`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ongeldige tekst: moet met "${i.prefix}" beginnen`;if(i.format==="ends_with")return`Ongeldige tekst: moet op "${i.suffix}" eindigen`;if(i.format==="includes")return`Ongeldige tekst: moet "${i.includes}" bevatten`;if(i.format==="regex")return`Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}`;return`Ongeldig: ${o[i.format]??r.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${r.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${r.origin}`;default:return"Ongeldige invoer"}}};var kw=g(()=>{z()});function ed(){return{localeError:_N()}}var _N=()=>{let e={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function t(r){return e[r]??null}let o={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"tall",array:"liste"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ugyldig input: forventet instanceof ${r.expected}, fikk ${c}`;return`Ugyldig input: forventet ${i}, fikk ${c}`}case"invalid_value":if(r.values.length===1)return`Ugyldig verdi: forventet ${w(r.values[0])}`;return`Ugyldig valg: forventet en av ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`For stor(t): forventet ${r.origin??"value"} til å ha ${i}${r.maximum.toString()} ${a.unit??"elementer"}`;return`For stor(t): forventet ${r.origin??"value"} til å ha ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`For lite(n): forventet ${r.origin} til å ha ${i}${r.minimum.toString()} ${a.unit}`;return`For lite(n): forventet ${r.origin} til å ha ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ugyldig streng: må starte med "${i.prefix}"`;if(i.format==="ends_with")return`Ugyldig streng: må ende med "${i.suffix}"`;if(i.format==="includes")return`Ugyldig streng: må inneholde "${i.includes}"`;if(i.format==="regex")return`Ugyldig streng: må matche mønsteret ${i.pattern}`;return`Ugyldig ${o[i.format]??r.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${f(r.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${r.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${r.origin}`;default:return"Ugyldig input"}}};var ww=g(()=>{z()});function td(){return{localeError:TN()}}var TN=()=>{let e={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function t(r){return e[r]??null}let o={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"},n={nan:"NaN",number:"numara",array:"saf",null:"gayb"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Fâsit giren: umulan instanceof ${r.expected}, alınan ${c}`;return`Fâsit giren: umulan ${i}, alınan ${c}`}case"invalid_value":if(r.values.length===1)return`Fâsit giren: umulan ${w(r.values[0])}`;return`Fâsit tercih: mûteberler ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Fazla büyük: ${r.origin??"value"}, ${i}${r.maximum.toString()} ${a.unit??"elements"} sahip olmalıydı.`;return`Fazla büyük: ${r.origin??"value"}, ${i}${r.maximum.toString()} olmalıydı.`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Fazla küçük: ${r.origin}, ${i}${r.minimum.toString()} ${a.unit} sahip olmalıydı.`;return`Fazla küçük: ${r.origin}, ${i}${r.minimum.toString()} olmalıydı.`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Fâsit metin: "${i.prefix}" ile başlamalı.`;if(i.format==="ends_with")return`Fâsit metin: "${i.suffix}" ile bitmeli.`;if(i.format==="includes")return`Fâsit metin: "${i.includes}" ihtivâ etmeli.`;if(i.format==="regex")return`Fâsit metin: ${i.pattern} nakşına uymalı.`;return`Fâsit ${o[i.format]??r.format}`}case"not_multiple_of":return`Fâsit sayı: ${r.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`${r.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${r.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};var $w=g(()=>{z()});function rd(){return{localeError:ON()}}var ON=()=>{let e={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function t(r){return e[r]??null}let o={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"},n={nan:"NaN",number:"عدد",array:"ارې"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ناسم ورودي: باید instanceof ${r.expected} وای, مګر ${c} ترلاسه شو`;return`ناسم ورودي: باید ${i} وای, مګر ${c} ترلاسه شو`}case"invalid_value":if(r.values.length===1)return`ناسم ورودي: باید ${w(r.values[0])} وای`;return`ناسم انتخاب: باید یو له ${f(r.values,"|")} څخه وای`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`ډیر لوی: ${r.origin??"ارزښت"} باید ${i}${r.maximum.toString()} ${a.unit??"عنصرونه"} ولري`;return`ډیر لوی: ${r.origin??"ارزښت"} باید ${i}${r.maximum.toString()} وي`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`ډیر کوچنی: ${r.origin} باید ${i}${r.minimum.toString()} ${a.unit} ولري`;return`ډیر کوچنی: ${r.origin} باید ${i}${r.minimum.toString()} وي`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`ناسم متن: باید د "${i.prefix}" سره پیل شي`;if(i.format==="ends_with")return`ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي`;if(i.format==="includes")return`ناسم متن: باید "${i.includes}" ولري`;if(i.format==="regex")return`ناسم متن: باید د ${i.pattern} سره مطابقت ولري`;return`${o[i.format]??r.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${r.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${r.keys.length>1?"کلیډونه":"کلیډ"}: ${f(r.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${r.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${r.origin} کې`;default:return"ناسمه ورودي"}}};var _w=g(()=>{z()});function od(){return{localeError:SN()}}var SN=()=>{let e={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function t(r){return e[r]??null}let o={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"},n={nan:"NaN",number:"liczba",array:"tablica"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Nieprawidłowe dane wejściowe: oczekiwano instanceof ${r.expected}, otrzymano ${c}`;return`Nieprawidłowe dane wejściowe: oczekiwano ${i}, otrzymano ${c}`}case"invalid_value":if(r.values.length===1)return`Nieprawidłowe dane wejściowe: oczekiwano ${w(r.values[0])}`;return`Nieprawidłowa opcja: oczekiwano jednej z wartości ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Za duża wartość: oczekiwano, że ${r.origin??"wartość"} będzie mieć ${i}${r.maximum.toString()} ${a.unit??"elementów"}`;return`Zbyt duż(y/a/e): oczekiwano, że ${r.origin??"wartość"} będzie wynosić ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Za mała wartość: oczekiwano, że ${r.origin??"wartość"} będzie mieć ${i}${r.minimum.toString()} ${a.unit??"elementów"}`;return`Zbyt mał(y/a/e): oczekiwano, że ${r.origin??"wartość"} będzie wynosić ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"`;if(i.format==="ends_with")return`Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"`;if(i.format==="includes")return`Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"`;if(i.format==="regex")return`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}`;return`Nieprawidłow(y/a/e) ${o[i.format]??r.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${r.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${r.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${r.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};var Tw=g(()=>{z()});function nd(){return{localeError:PN()}}var PN=()=>{let e={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function t(r){return e[r]??null}let o={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN",number:"número",null:"nulo"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Tipo inválido: esperado instanceof ${r.expected}, recebido ${c}`;return`Tipo inválido: esperado ${i}, recebido ${c}`}case"invalid_value":if(r.values.length===1)return`Entrada inválida: esperado ${w(r.values[0])}`;return`Opção inválida: esperada uma das ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Muito grande: esperado que ${r.origin??"valor"} tivesse ${i}${r.maximum.toString()} ${a.unit??"elementos"}`;return`Muito grande: esperado que ${r.origin??"valor"} fosse ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Muito pequeno: esperado que ${r.origin} tivesse ${i}${r.minimum.toString()} ${a.unit}`;return`Muito pequeno: esperado que ${r.origin} fosse ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Texto inválido: deve começar com "${i.prefix}"`;if(i.format==="ends_with")return`Texto inválido: deve terminar com "${i.suffix}"`;if(i.format==="includes")return`Texto inválido: deve incluir "${i.includes}"`;if(i.format==="regex")return`Texto inválido: deve corresponder ao padrão ${i.pattern}`;return`${o[i.format]??r.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${r.divisor}`;case"unrecognized_keys":return`Chave${r.keys.length>1?"s":""} desconhecida${r.keys.length>1?"s":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Chave inválida em ${r.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${r.origin}`;default:return"Campo inválido"}}};var Ow=g(()=>{z()});function Sw(e,t,o,n){let r=Math.abs(e),i=r%10,a=r%100;if(a>=11&&a<=19)return n;if(i===1)return t;if(i>=2&&i<=4)return o;return n}function id(){return{localeError:AN()}}var AN=()=>{let e={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function t(r){return e[r]??null}let o={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"},n={nan:"NaN",number:"число",array:"массив"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Неверный ввод: ожидалось instanceof ${r.expected}, получено ${c}`;return`Неверный ввод: ожидалось ${i}, получено ${c}`}case"invalid_value":if(r.values.length===1)return`Неверный ввод: ожидалось ${w(r.values[0])}`;return`Неверный вариант: ожидалось одно из ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a){let c=Number(r.maximum),h=Sw(c,a.unit.one,a.unit.few,a.unit.many);return`Слишком большое значение: ожидалось, что ${r.origin??"значение"} будет иметь ${i}${r.maximum.toString()} ${h}`}return`Слишком большое значение: ожидалось, что ${r.origin??"значение"} будет ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a){let c=Number(r.minimum),h=Sw(c,a.unit.one,a.unit.few,a.unit.many);return`Слишком маленькое значение: ожидалось, что ${r.origin} будет иметь ${i}${r.minimum.toString()} ${h}`}return`Слишком маленькое значение: ожидалось, что ${r.origin} будет ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Неверная строка: должна начинаться с "${i.prefix}"`;if(i.format==="ends_with")return`Неверная строка: должна заканчиваться на "${i.suffix}"`;if(i.format==="includes")return`Неверная строка: должна содержать "${i.includes}"`;if(i.format==="regex")return`Неверная строка: должна соответствовать шаблону ${i.pattern}`;return`Неверный ${o[i.format]??r.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${r.divisor}`;case"unrecognized_keys":return`Нераспознанн${r.keys.length>1?"ые":"ый"} ключ${r.keys.length>1?"и":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${r.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${r.origin}`;default:return"Неверные входные данные"}}};var Pw=g(()=>{z()});function ad(){return{localeError:DN()}}var DN=()=>{let e={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function t(r){return e[r]??null}let o={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"},n={nan:"NaN",number:"število",array:"tabela"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Neveljaven vnos: pričakovano instanceof ${r.expected}, prejeto ${c}`;return`Neveljaven vnos: pričakovano ${i}, prejeto ${c}`}case"invalid_value":if(r.values.length===1)return`Neveljaven vnos: pričakovano ${w(r.values[0])}`;return`Neveljavna možnost: pričakovano eno izmed ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Preveliko: pričakovano, da bo ${r.origin??"vrednost"} imelo ${i}${r.maximum.toString()} ${a.unit??"elementov"}`;return`Preveliko: pričakovano, da bo ${r.origin??"vrednost"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Premajhno: pričakovano, da bo ${r.origin} imelo ${i}${r.minimum.toString()} ${a.unit}`;return`Premajhno: pričakovano, da bo ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Neveljaven niz: mora se začeti z "${i.prefix}"`;if(i.format==="ends_with")return`Neveljaven niz: mora se končati z "${i.suffix}"`;if(i.format==="includes")return`Neveljaven niz: mora vsebovati "${i.includes}"`;if(i.format==="regex")return`Neveljaven niz: mora ustrezati vzorcu ${i.pattern}`;return`Neveljaven ${o[i.format]??r.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${r.divisor}`;case"unrecognized_keys":return`Neprepoznan${r.keys.length>1?"i ključi":" ključ"}: ${f(r.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${r.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${r.origin}`;default:return"Neveljaven vnos"}}};var Aw=g(()=>{z()});function cd(){return{localeError:LN()}}var LN=()=>{let e={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function t(r){return e[r]??null}let o={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"},n={nan:"NaN",number:"antal",array:"lista"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ogiltig inmatning: förväntat instanceof ${r.expected}, fick ${c}`;return`Ogiltig inmatning: förväntat ${i}, fick ${c}`}case"invalid_value":if(r.values.length===1)return`Ogiltig inmatning: förväntat ${w(r.values[0])}`;return`Ogiltigt val: förväntade en av ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`För stor(t): förväntade ${r.origin??"värdet"} att ha ${i}${r.maximum.toString()} ${a.unit??"element"}`;return`För stor(t): förväntat ${r.origin??"värdet"} att ha ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`För lite(t): förväntade ${r.origin??"värdet"} att ha ${i}${r.minimum.toString()} ${a.unit}`;return`För lite(t): förväntade ${r.origin??"värdet"} att ha ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ogiltig sträng: måste börja med "${i.prefix}"`;if(i.format==="ends_with")return`Ogiltig sträng: måste sluta med "${i.suffix}"`;if(i.format==="includes")return`Ogiltig sträng: måste innehålla "${i.includes}"`;if(i.format==="regex")return`Ogiltig sträng: måste matcha mönstret "${i.pattern}"`;return`Ogiltig(t) ${o[i.format]??r.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${f(r.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${r.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${r.origin??"värdet"}`;default:return"Ogiltig input"}}};var Dw=g(()=>{z()});function ld(){return{localeError:NN()}}var NN=()=>{let e={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function t(r){return e[r]??null}let o={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"எண்",array:"அணி",null:"வெறுமை"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${r.expected}, பெறப்பட்டது ${c}`;return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i}, பெறப்பட்டது ${c}`}case"invalid_value":if(r.values.length===1)return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${w(r.values[0])}`;return`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${f(r.values,"|")} இல் ஒன்று`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${r.origin??"மதிப்பு"} ${i}${r.maximum.toString()} ${a.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`;return`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${r.origin??"மதிப்பு"} ${i}${r.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${r.origin} ${i}${r.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்`;return`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${r.origin} ${i}${r.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்`;if(i.format==="ends_with")return`தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்`;if(i.format==="includes")return`தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்`;if(i.format==="regex")return`தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;return`தவறான ${o[i.format]??r.format}`}case"not_multiple_of":return`தவறான எண்: ${r.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${r.keys.length>1?"கள்":""}: ${f(r.keys,", ")}`;case"invalid_key":return`${r.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${r.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};var Lw=g(()=>{z()});function hd(){return{localeError:CN()}}var CN=()=>{let e={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function t(r){return e[r]??null}let o={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"},n={nan:"NaN",number:"ตัวเลข",array:"อาร์เรย์ (Array)",null:"ไม่มีค่า (null)"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${r.expected} แต่ได้รับ ${c}`;return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${i} แต่ได้รับ ${c}`}case"invalid_value":if(r.values.length===1)return`ค่าไม่ถูกต้อง: ควรเป็น ${w(r.values[0])}`;return`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"ไม่เกิน":"น้อยกว่า",a=t(r.origin);if(a)return`เกินกำหนด: ${r.origin??"ค่า"} ควรมี${i} ${r.maximum.toString()} ${a.unit??"รายการ"}`;return`เกินกำหนด: ${r.origin??"ค่า"} ควรมี${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?"อย่างน้อย":"มากกว่า",a=t(r.origin);if(a)return`น้อยกว่ากำหนด: ${r.origin} ควรมี${i} ${r.minimum.toString()} ${a.unit}`;return`น้อยกว่ากำหนด: ${r.origin} ควรมี${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"`;if(i.format==="ends_with")return`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"`;if(i.format==="includes")return`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ`;if(i.format==="regex")return`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}`;return`รูปแบบไม่ถูกต้อง: ${o[i.format]??r.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${r.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${f(r.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${r.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${r.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};var Nw=g(()=>{z()});function ud(){return{localeError:xN()}}var xN=()=>{let e={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function t(r){return e[r]??null}let o={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Geçersiz değer: beklenen instanceof ${r.expected}, alınan ${c}`;return`Geçersiz değer: beklenen ${i}, alınan ${c}`}case"invalid_value":if(r.values.length===1)return`Geçersiz değer: beklenen ${w(r.values[0])}`;return`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Çok büyük: beklenen ${r.origin??"değer"} ${i}${r.maximum.toString()} ${a.unit??"öğe"}`;return`Çok büyük: beklenen ${r.origin??"değer"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Çok küçük: beklenen ${r.origin} ${i}${r.minimum.toString()} ${a.unit}`;return`Çok küçük: beklenen ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Geçersiz metin: "${i.prefix}" ile başlamalı`;if(i.format==="ends_with")return`Geçersiz metin: "${i.suffix}" ile bitmeli`;if(i.format==="includes")return`Geçersiz metin: "${i.includes}" içermeli`;if(i.format==="regex")return`Geçersiz metin: ${i.pattern} desenine uymalı`;return`Geçersiz ${o[i.format]??r.format}`}case"not_multiple_of":return`Geçersiz sayı: ${r.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${r.keys.length>1?"lar":""}: ${f(r.keys,", ")}`;case"invalid_key":return`${r.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${r.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};var Cw=g(()=>{z()});function Qo(){return{localeError:zN()}}var zN=()=>{let e={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function t(r){return e[r]??null}let o={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"},n={nan:"NaN",number:"число",array:"масив"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Неправильні вхідні дані: очікується instanceof ${r.expected}, отримано ${c}`;return`Неправильні вхідні дані: очікується ${i}, отримано ${c}`}case"invalid_value":if(r.values.length===1)return`Неправильні вхідні дані: очікується ${w(r.values[0])}`;return`Неправильна опція: очікується одне з ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Занадто велике: очікується, що ${r.origin??"значення"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"елементів"}`;return`Занадто велике: очікується, що ${r.origin??"значення"} буде ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Занадто мале: очікується, що ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Занадто мале: очікується, що ${r.origin} буде ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Неправильний рядок: повинен починатися з "${i.prefix}"`;if(i.format==="ends_with")return`Неправильний рядок: повинен закінчуватися на "${i.suffix}"`;if(i.format==="includes")return`Неправильний рядок: повинен містити "${i.includes}"`;if(i.format==="regex")return`Неправильний рядок: повинен відповідати шаблону ${i.pattern}`;return`Неправильний ${o[i.format]??r.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${r.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${r.keys.length>1?"і":""}: ${f(r.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${r.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${r.origin}`;default:return"Неправильні вхідні дані"}}};var sd=g(()=>{z()});function dd(){return Qo()}var xw=g(()=>{sd()});function gd(){return{localeError:jN()}}var jN=()=>{let e={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function t(r){return e[r]??null}let o={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"},n={nan:"NaN",number:"نمبر",array:"آرے",null:"نل"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`غلط ان پٹ: instanceof ${r.expected} متوقع تھا، ${c} موصول ہوا`;return`غلط ان پٹ: ${i} متوقع تھا، ${c} موصول ہوا`}case"invalid_value":if(r.values.length===1)return`غلط ان پٹ: ${w(r.values[0])} متوقع تھا`;return`غلط آپشن: ${f(r.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`بہت بڑا: ${r.origin??"ویلیو"} کے ${i}${r.maximum.toString()} ${a.unit??"عناصر"} ہونے متوقع تھے`;return`بہت بڑا: ${r.origin??"ویلیو"} کا ${i}${r.maximum.toString()} ہونا متوقع تھا`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`بہت چھوٹا: ${r.origin} کے ${i}${r.minimum.toString()} ${a.unit} ہونے متوقع تھے`;return`بہت چھوٹا: ${r.origin} کا ${i}${r.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے`;if(i.format==="ends_with")return`غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے`;if(i.format==="includes")return`غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے`;if(i.format==="regex")return`غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے`;return`غلط ${o[i.format]??r.format}`}case"not_multiple_of":return`غلط نمبر: ${r.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${r.keys.length>1?"ز":""}: ${f(r.keys,"، ")}`;case"invalid_key":return`${r.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${r.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};var zw=g(()=>{z()});function bd(){return{localeError:EN()}}var EN=()=>{let e={string:{unit:"belgi",verb:"bo‘lishi kerak"},file:{unit:"bayt",verb:"bo‘lishi kerak"},array:{unit:"element",verb:"bo‘lishi kerak"},set:{unit:"element",verb:"bo‘lishi kerak"}};function t(r){return e[r]??null}let o={regex:"kirish",email:"elektron pochta manzili",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO sana va vaqti",date:"ISO sana",time:"ISO vaqt",duration:"ISO davomiylik",ipv4:"IPv4 manzil",ipv6:"IPv6 manzil",mac:"MAC manzil",cidrv4:"IPv4 diapazon",cidrv6:"IPv6 diapazon",base64:"base64 kodlangan satr",base64url:"base64url kodlangan satr",json_string:"JSON satr",e164:"E.164 raqam",jwt:"JWT",template_literal:"kirish"},n={nan:"NaN",number:"raqam",array:"massiv"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Noto‘g‘ri kirish: kutilgan instanceof ${r.expected}, qabul qilingan ${c}`;return`Noto‘g‘ri kirish: kutilgan ${i}, qabul qilingan ${c}`}case"invalid_value":if(r.values.length===1)return`Noto‘g‘ri kirish: kutilgan ${w(r.values[0])}`;return`Noto‘g‘ri variant: quyidagilardan biri kutilgan ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Juda katta: kutilgan ${r.origin??"qiymat"} ${i}${r.maximum.toString()} ${a.unit} ${a.verb}`;return`Juda katta: kutilgan ${r.origin??"qiymat"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Juda kichik: kutilgan ${r.origin} ${i}${r.minimum.toString()} ${a.unit} ${a.verb}`;return`Juda kichik: kutilgan ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Noto‘g‘ri satr: "${i.prefix}" bilan boshlanishi kerak`;if(i.format==="ends_with")return`Noto‘g‘ri satr: "${i.suffix}" bilan tugashi kerak`;if(i.format==="includes")return`Noto‘g‘ri satr: "${i.includes}" ni o‘z ichiga olishi kerak`;if(i.format==="regex")return`Noto‘g‘ri satr: ${i.pattern} shabloniga mos kelishi kerak`;return`Noto‘g‘ri ${o[i.format]??r.format}`}case"not_multiple_of":return`Noto‘g‘ri raqam: ${r.divisor} ning karralisi bo‘lishi kerak`;case"unrecognized_keys":return`Noma’lum kalit${r.keys.length>1?"lar":""}: ${f(r.keys,", ")}`;case"invalid_key":return`${r.origin} dagi kalit noto‘g‘ri`;case"invalid_union":return"Noto‘g‘ri kirish";case"invalid_element":return`${r.origin} da noto‘g‘ri qiymat`;default:return"Noto‘g‘ri kirish"}}};var jw=g(()=>{z()});function md(){return{localeError:UN()}}var UN=()=>{let e={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function t(r){return e[r]??null}let o={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"},n={nan:"NaN",number:"số",array:"mảng"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Đầu vào không hợp lệ: mong đợi instanceof ${r.expected}, nhận được ${c}`;return`Đầu vào không hợp lệ: mong đợi ${i}, nhận được ${c}`}case"invalid_value":if(r.values.length===1)return`Đầu vào không hợp lệ: mong đợi ${w(r.values[0])}`;return`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Quá lớn: mong đợi ${r.origin??"giá trị"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"phần tử"}`;return`Quá lớn: mong đợi ${r.origin??"giá trị"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Quá nhỏ: mong đợi ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Quá nhỏ: mong đợi ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"`;if(i.format==="ends_with")return`Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"`;if(i.format==="includes")return`Chuỗi không hợp lệ: phải bao gồm "${i.includes}"`;if(i.format==="regex")return`Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}`;return`${o[i.format]??r.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${r.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${f(r.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${r.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${r.origin}`;default:return"Đầu vào không hợp lệ"}}};var Ew=g(()=>{z()});function yd(){return{localeError:RN()}}var RN=()=>{let e={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function t(r){return e[r]??null}let o={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"},n={nan:"NaN",number:"数字",array:"数组",null:"空值(null)"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`无效输入：期望 instanceof ${r.expected}，实际接收 ${c}`;return`无效输入：期望 ${i}，实际接收 ${c}`}case"invalid_value":if(r.values.length===1)return`无效输入：期望 ${w(r.values[0])}`;return`无效选项：期望以下之一 ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`数值过大：期望 ${r.origin??"值"} ${i}${r.maximum.toString()} ${a.unit??"个元素"}`;return`数值过大：期望 ${r.origin??"值"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`数值过小：期望 ${r.origin} ${i}${r.minimum.toString()} ${a.unit}`;return`数值过小：期望 ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`无效字符串：必须以 "${i.prefix}" 开头`;if(i.format==="ends_with")return`无效字符串：必须以 "${i.suffix}" 结尾`;if(i.format==="includes")return`无效字符串：必须包含 "${i.includes}"`;if(i.format==="regex")return`无效字符串：必须满足正则表达式 ${i.pattern}`;return`无效${o[i.format]??r.format}`}case"not_multiple_of":return`无效数字：必须是 ${r.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${f(r.keys,", ")}`;case"invalid_key":return`${r.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${r.origin} 中包含无效值(value)`;default:return"无效输入"}}};var Uw=g(()=>{z()});function pd(){return{localeError:FN()}}var FN=()=>{let e={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function t(r){return e[r]??null}let o={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`無效的輸入值：預期為 instanceof ${r.expected}，但收到 ${c}`;return`無效的輸入值：預期為 ${i}，但收到 ${c}`}case"invalid_value":if(r.values.length===1)return`無效的輸入值：預期為 ${w(r.values[0])}`;return`無效的選項：預期為以下其中之一 ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`數值過大：預期 ${r.origin??"值"} 應為 ${i}${r.maximum.toString()} ${a.unit??"個元素"}`;return`數值過大：預期 ${r.origin??"值"} 應為 ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`數值過小：預期 ${r.origin} 應為 ${i}${r.minimum.toString()} ${a.unit}`;return`數值過小：預期 ${r.origin} 應為 ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`無效的字串：必須以 "${i.prefix}" 開頭`;if(i.format==="ends_with")return`無效的字串：必須以 "${i.suffix}" 結尾`;if(i.format==="includes")return`無效的字串：必須包含 "${i.includes}"`;if(i.format==="regex")return`無效的字串：必須符合格式 ${i.pattern}`;return`無效的 ${o[i.format]??r.format}`}case"not_multiple_of":return`無效的數字：必須為 ${r.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${r.keys.length>1?"們":""}：${f(r.keys,"、")}`;case"invalid_key":return`${r.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${r.origin} 中有無效的值`;default:return"無效的輸入值"}}};var Rw=g(()=>{z()});function vd(){return{localeError:KN()}}var KN=()=>{let e={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function t(r){return e[r]??null}let o={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"},n={nan:"NaN",number:"nọ́mbà",array:"akopọ"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${r.expected}, àmọ̀ a rí ${c}`;return`Ìbáwọlé aṣìṣe: a ní láti fi ${i}, àmọ̀ a rí ${c}`}case"invalid_value":if(r.values.length===1)return`Ìbáwọlé aṣìṣe: a ní láti fi ${w(r.values[0])}`;return`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${f(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Tó pọ̀ jù: a ní láti jẹ́ pé ${r.origin??"iye"} ${a.verb} ${i}${r.maximum} ${a.unit}`;return`Tó pọ̀ jù: a ní láti jẹ́ ${i}${r.maximum}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Kéré ju: a ní láti jẹ́ pé ${r.origin} ${a.verb} ${i}${r.minimum} ${a.unit}`;return`Kéré ju: a ní láti jẹ́ ${i}${r.minimum}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"`;if(i.format==="ends_with")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"`;if(i.format==="includes")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"`;if(i.format==="regex")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}`;return`Aṣìṣe: ${o[i.format]??r.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${r.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${f(r.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${r.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${r.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};var Fw=g(()=>{z()});var en={};et(en,{zhTW:()=>pd,zhCN:()=>yd,yo:()=>vd,vi:()=>md,uz:()=>bd,ur:()=>gd,uk:()=>Qo,ua:()=>dd,tr:()=>ud,th:()=>hd,ta:()=>ld,sv:()=>cd,sl:()=>ad,ru:()=>id,pt:()=>nd,ps:()=>rd,pl:()=>od,ota:()=>td,no:()=>ed,nl:()=>Qs,ms:()=>Zs,mk:()=>Xs,lt:()=>Ys,ko:()=>Ws,km:()=>Xo,kh:()=>Vs,ka:()=>Js,ja:()=>Ms,it:()=>Hs,is:()=>Gs,id:()=>Bs,hy:()=>Ks,hu:()=>Fs,he:()=>Rs,frCA:()=>Us,fr:()=>Es,fi:()=>js,fa:()=>zs,es:()=>xs,eo:()=>Cs,en:()=>Yo,de:()=>Ls,da:()=>Ds,cs:()=>As,ca:()=>Ps,bg:()=>Ss,be:()=>Os,az:()=>Ts,ar:()=>_s});var fd=g(()=>{Mk();Jk();Vk();Wk();Yk();Xk();Zk();Qk();Ns();ew();tw();rw();ow();nw();iw();aw();cw();hw();uw();sw();dw();gw();bw();mw();qs();yw();vw();fw();Iw();kw();ww();$w();_w();Tw();Ow();Pw();Aw();Dw();Lw();Nw();Cw();xw();sd();zw();jw();Ew();Uw();Rw();Fw()});class wd{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let o=t[0];if(this._map.set(e,o),o&&typeof o==="object"&&"id"in o)this._idmap.set(o.id,e);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);if(t&&typeof t==="object"&&"id"in t)this._idmap.delete(t.id);return this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let o={...this.get(t)??{}};delete o.id;let n={...o,...this._map.get(e)};return Object.keys(n).length?n:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function pi(){return new wd}var Kw,Id,kd,fe;var tn=g(()=>{Id=Symbol("ZodOutput"),kd=Symbol("ZodInput");(Kw=globalThis).__zod_globalRegistry??(Kw.__zod_globalRegistry=pi());fe=globalThis.__zod_globalRegistry});function $d(e,t){return new e({type:"string",...T(t)})}function _d(e,t){return new e({type:"string",coerce:!0,...T(t)})}function vi(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...T(t)})}function rn(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...T(t)})}function fi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...T(t)})}function Ii(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...T(t)})}function ki(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...T(t)})}function wi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...T(t)})}function on(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...T(t)})}function $i(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...T(t)})}function _i(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...T(t)})}function Ti(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...T(t)})}function Oi(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...T(t)})}function Si(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...T(t)})}function Pi(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...T(t)})}function Ai(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...T(t)})}function Di(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...T(t)})}function Li(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...T(t)})}function Td(e,t){return new e({type:"string",format:"mac",check:"string_format",abort:!1,...T(t)})}function Ni(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...T(t)})}function Ci(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...T(t)})}function xi(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...T(t)})}function zi(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...T(t)})}function ji(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...T(t)})}function Ei(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...T(t)})}function Sd(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...T(t)})}function Pd(e,t){return new e({type:"string",format:"date",check:"string_format",...T(t)})}function Ad(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...T(t)})}function Dd(e,t){return new e({type:"string",format:"duration",check:"string_format",...T(t)})}function Ld(e,t){return new e({type:"number",checks:[],...T(t)})}function Nd(e,t){return new e({type:"number",coerce:!0,checks:[],...T(t)})}function Cd(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...T(t)})}function xd(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"float32",...T(t)})}function zd(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"float64",...T(t)})}function jd(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"int32",...T(t)})}function Ed(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"uint32",...T(t)})}function Ud(e,t){return new e({type:"boolean",...T(t)})}function Rd(e,t){return new e({type:"boolean",coerce:!0,...T(t)})}function Fd(e,t){return new e({type:"bigint",...T(t)})}function Kd(e,t){return new e({type:"bigint",coerce:!0,...T(t)})}function Bd(e,t){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...T(t)})}function Gd(e,t){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...T(t)})}function Hd(e,t){return new e({type:"symbol",...T(t)})}function Md(e,t){return new e({type:"undefined",...T(t)})}function Jd(e,t){return new e({type:"null",...T(t)})}function qd(e){return new e({type:"any"})}function Vd(e){return new e({type:"unknown"})}function Wd(e,t){return new e({type:"never",...T(t)})}function Yd(e,t){return new e({type:"void",...T(t)})}function Xd(e,t){return new e({type:"date",...T(t)})}function Zd(e,t){return new e({type:"date",coerce:!0,...T(t)})}function Qd(e,t){return new e({type:"nan",...T(t)})}function it(e,t){return new ni({check:"less_than",...T(t),value:e,inclusive:!1})}function Ue(e,t){return new ni({check:"less_than",...T(t),value:e,inclusive:!0})}function at(e,t){return new ii({check:"greater_than",...T(t),value:e,inclusive:!1})}function Ae(e,t){return new ii({check:"greater_than",...T(t),value:e,inclusive:!0})}function Ui(e){return at(0,e)}function Ri(e){return it(0,e)}function Fi(e){return Ue(0,e)}function Ki(e){return Ae(0,e)}function jt(e,t){return new qh({check:"multiple_of",...T(t),value:e})}function Et(e,t){return new Yh({check:"max_size",...T(t),maximum:e})}function ct(e,t){return new Xh({check:"min_size",...T(t),minimum:e})}function er(e,t){return new Zh({check:"size_equals",...T(t),size:e})}function tr(e,t){return new Qh({check:"max_length",...T(t),maximum:e})}function vt(e,t){return new eu({check:"min_length",...T(t),minimum:e})}function rr(e,t){return new tu({check:"length_equals",...T(t),length:e})}function Or(e,t){return new ru({check:"string_format",format:"regex",...T(t),pattern:e})}function Sr(e){return new ou({check:"string_format",format:"lowercase",...T(e)})}function Pr(e){return new nu({check:"string_format",format:"uppercase",...T(e)})}function Ar(e,t){return new iu({check:"string_format",format:"includes",...T(t),includes:e})}function Dr(e,t){return new au({check:"string_format",format:"starts_with",...T(t),prefix:e})}function Lr(e,t){return new cu({check:"string_format",format:"ends_with",...T(t),suffix:e})}function Bi(e,t,o){return new lu({check:"property",property:e,schema:t,...T(o)})}function Nr(e,t){return new hu({check:"mime_type",mime:e,...T(t)})}function Qe(e){return new uu({check:"overwrite",tx:e})}function Cr(e){return Qe((t)=>t.normalize(e))}function xr(){return Qe((e)=>e.trim())}function zr(){return Qe((e)=>e.toLowerCase())}function jr(){return Qe((e)=>e.toUpperCase())}function Er(){return Qe((e)=>ah(e))}function eg(e,t,o){return new e({type:"array",element:t,...T(o)})}function GN(e,t,o){return new e({type:"union",options:t,...T(o)})}function HN(e,t,o){return new e({type:"union",options:t,inclusive:!1,...T(o)})}function MN(e,t,o,n){return new e({type:"union",options:o,discriminator:t,...T(n)})}function JN(e,t,o){return new e({type:"intersection",left:t,right:o})}function qN(e,t,o,n){let r=o instanceof R;return new e({type:"tuple",items:t,rest:r?o:null,...T(r?n:o)})}function VN(e,t,o,n){return new e({type:"record",keyType:t,valueType:o,...T(n)})}function WN(e,t,o,n){return new e({type:"map",keyType:t,valueType:o,...T(n)})}function YN(e,t,o){return new e({type:"set",valueType:t,...T(o)})}function XN(e,t,o){let n=Array.isArray(t)?Object.fromEntries(t.map((r)=>[r,r])):t;return new e({type:"enum",entries:n,...T(o)})}function ZN(e,t,o){return new e({type:"enum",entries:t,...T(o)})}function QN(e,t,o){return new e({type:"literal",values:Array.isArray(t)?t:[t],...T(o)})}function tg(e,t){return new e({type:"file",...T(t)})}function eC(e,t){return new e({type:"transform",transform:t})}function tC(e,t){return new e({type:"optional",innerType:t})}function rC(e,t){return new e({type:"nullable",innerType:t})}function oC(e,t,o){return new e({type:"default",innerType:t,get defaultValue(){return typeof o==="function"?o():lh(o)}})}function nC(e,t,o){return new e({type:"nonoptional",innerType:t,...T(o)})}function iC(e,t){return new e({type:"success",innerType:t})}function aC(e,t,o){return new e({type:"catch",innerType:t,catchValue:typeof o==="function"?o:()=>o})}function cC(e,t,o){return new e({type:"pipe",in:t,out:o})}function lC(e,t){return new e({type:"readonly",innerType:t})}function hC(e,t,o){return new e({type:"template_literal",parts:t,...T(o)})}function uC(e,t){return new e({type:"lazy",getter:t})}function sC(e,t){return new e({type:"promise",innerType:t})}function rg(e,t,o){let n=T(o);return n.abort??(n.abort=!0),new e({type:"custom",check:"custom",fn:t,...n})}function og(e,t,o){return new e({type:"custom",check:"custom",fn:t,...T(o)})}function ng(e){let t=Bw((o)=>{return o.addIssue=(n)=>{if(typeof n==="string")o.issues.push(fr(n,o.value,t._zod.def));else{let r=n;if(r.fatal)r.continue=!1;r.code??(r.code="custom"),r.input??(r.input=o.value),r.inst??(r.inst=t),r.continue??(r.continue=!t._zod.def.abort),o.issues.push(fr(r))}},e(o.value,o)});return t}function Bw(e,t){let o=new re({check:"custom",...T(t)});return o._zod.check=e,o}function ig(e){let t=new re({check:"describe"});return t._zod.onattach=[(o)=>{let n=fe.get(o)??{};fe.add(o,{...n,description:e})}],t._zod.check=()=>{},t}function ag(e){let t=new re({check:"meta"});return t._zod.onattach=[(o)=>{let n=fe.get(o)??{};fe.add(o,{...n,...e})}],t._zod.check=()=>{},t}function cg(e,t){let o=T(t),n=o.truthy??["true","1","yes","on","y","enabled"],r=o.falsy??["false","0","no","off","n","disabled"];if(o.case!=="sensitive")n=n.map((m)=>typeof m==="string"?m.toLowerCase():m),r=r.map((m)=>typeof m==="string"?m.toLowerCase():m);let i=new Set(n),a=new Set(r),c=e.Codec??Wo,h=e.Boolean??qo,d=new(e.String??Qt)({type:"string",error:o.error}),s=new h({type:"boolean",error:o.error}),b=new c({type:"pipe",in:d,out:s,transform:(m,k)=>{let A=m;if(o.case!=="sensitive")A=A.toLowerCase();if(i.has(A))return!0;else if(a.has(A))return!1;else return k.issues.push({code:"invalid_value",expected:"stringbool",values:[...i,...a],input:k.value,inst:b,continue:!1}),{}},reverseTransform:(m,k)=>{if(m===!0)return n[0]||"true";else return r[0]||"false"},error:o.error});return b}function Ur(e,t,o,n={}){let r=T(n),i={...T(n),check:"string_format",type:"string",format:t,fn:typeof o==="function"?o:(c)=>o.test(c),...r};if(o instanceof RegExp)i.pattern=o;return new e(i)}var Od;var Gw=g(()=>{ai();tn();$s();z();Od={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6}});function Ut(e){let t=e?.target??"draft-2020-12";if(t==="draft-4")t="draft-04";if(t==="draft-7")t="draft-07";return{processors:e.processors??{},metadataRegistry:e?.metadata??fe,target:t,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function Z(e,t,o={path:[],schemaPath:[]}){var n;let r=e._zod.def,i=t.seen.get(e);if(i){if(i.count++,o.schemaPath.includes(e))i.cycle=o.path;return i.schema}let a={schema:{},count:1,cycle:void 0,path:o.path};t.seen.set(e,a);let c=e._zod.toJSONSchema?.();if(c)a.schema=c;else{let d={...o,schemaPath:[...o.schemaPath,e],path:o.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,a.schema,d);else{let b=a.schema,m=t.processors[r.type];if(!m)throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);m(e,t,b,d)}let s=e._zod.parent;if(s){if(!a.ref)a.ref=s;Z(s,t,d),t.seen.get(s).isParent=!0}}let h=t.metadataRegistry.get(e);if(h)Object.assign(a.schema,h);if(t.io==="input"&&De(e))delete a.schema.examples,delete a.schema.default;if(t.io==="input"&&a.schema._prefault)(n=a.schema).default??(n.default=a.schema._prefault);return delete a.schema._prefault,t.seen.get(e).schema}function Rt(e,t){let o=e.seen.get(t);if(!o)throw Error("Unprocessed schema. This is a bug in Zod.");let n=new Map;for(let a of e.seen.entries()){let c=e.metadataRegistry.get(a[0])?.id;if(c){let h=n.get(c);if(h&&h!==a[0])throw Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);n.set(c,a[0])}}let r=(a)=>{let c=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){let s=e.external.registry.get(a[0])?.id,b=e.external.uri??((k)=>k);if(s)return{ref:b(s)};let m=a[1].defId??a[1].schema.id??`schema${e.counter++}`;return a[1].defId=m,{defId:m,ref:`${b("__shared")}#/${c}/${m}`}}if(a[1]===o)return{ref:"#"};let u=`${"#"}/${c}/`,d=a[1].schema.id??`__schema${e.counter++}`;return{defId:d,ref:u+d}},i=(a)=>{if(a[1].schema.$ref)return;let c=a[1],{ref:h,defId:u}=r(a);if(c.def={...c.schema},u)c.defId=u;let d=c.schema;for(let s in d)delete d[s];d.$ref=h};if(e.cycles==="throw")for(let a of e.seen.entries()){let c=a[1];if(c.cycle)throw Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let a of e.seen.entries()){let c=a[1];if(t===a[0]){i(a);continue}if(e.external){let u=e.external.registry.get(a[0])?.id;if(t!==a[0]&&u){i(a);continue}}if(e.metadataRegistry.get(a[0])?.id){i(a);continue}if(c.cycle){i(a);continue}if(c.count>1){if(e.reused==="ref"){i(a);continue}}}}function Ft(e,t){let o=e.seen.get(t);if(!o)throw Error("Unprocessed schema. This is a bug in Zod.");let n=(a)=>{let c=e.seen.get(a);if(c.ref===null)return;let h=c.def??c.schema,u={...h},d=c.ref;if(c.ref=null,d){n(d);let b=e.seen.get(d),m=b.schema;if(m.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"))h.allOf=h.allOf??[],h.allOf.push(m);else Object.assign(h,m);if(Object.assign(h,u),a._zod.parent===d)for(let A in h){if(A==="$ref"||A==="allOf")continue;if(!(A in u))delete h[A]}if(m.$ref&&b.def)for(let A in h){if(A==="$ref"||A==="allOf")continue;if(A in b.def&&JSON.stringify(h[A])===JSON.stringify(b.def[A]))delete h[A]}}let s=a._zod.parent;if(s&&s!==d){n(s);let b=e.seen.get(s);if(b?.schema.$ref){if(h.$ref=b.schema.$ref,b.def)for(let m in h){if(m==="$ref"||m==="allOf")continue;if(m in b.def&&JSON.stringify(h[m])===JSON.stringify(b.def[m]))delete h[m]}}}e.override({zodSchema:a,jsonSchema:h,path:c.path??[]})};for(let a of[...e.seen.entries()].reverse())n(a[0]);let r={};if(e.target==="draft-2020-12")r.$schema="https://json-schema.org/draft/2020-12/schema";else if(e.target==="draft-07")r.$schema="http://json-schema.org/draft-07/schema#";else if(e.target==="draft-04")r.$schema="http://json-schema.org/draft-04/schema#";else if(e.target==="openapi-3.0");if(e.external?.uri){let a=e.external.registry.get(t)?.id;if(!a)throw Error("Schema is missing an `id` property");r.$id=e.external.uri(a)}Object.assign(r,o.def??o.schema);let i=e.external?.defs??{};for(let a of e.seen.entries()){let c=a[1];if(c.def&&c.defId)i[c.defId]=c.def}if(e.external);else if(Object.keys(i).length>0)if(e.target==="draft-2020-12")r.$defs=i;else r.definitions=i;try{let a=JSON.parse(JSON.stringify(r));return Object.defineProperty(a,"~standard",{value:{...t["~standard"],jsonSchema:{input:Rr(t,"input",e.processors),output:Rr(t,"output",e.processors)}},enumerable:!1,writable:!1}),a}catch(a){throw Error("Error converting schema to JSON.")}}function De(e,t){let o=t??{seen:new Set};if(o.seen.has(e))return!1;o.seen.add(e);let n=e._zod.def;if(n.type==="transform")return!0;if(n.type==="array")return De(n.element,o);if(n.type==="set")return De(n.valueType,o);if(n.type==="lazy")return De(n.getter(),o);if(n.type==="promise"||n.type==="optional"||n.type==="nonoptional"||n.type==="nullable"||n.type==="readonly"||n.type==="default"||n.type==="prefault")return De(n.innerType,o);if(n.type==="intersection")return De(n.left,o)||De(n.right,o);if(n.type==="record"||n.type==="map")return De(n.keyType,o)||De(n.valueType,o);if(n.type==="pipe")return De(n.in,o)||De(n.out,o);if(n.type==="object"){for(let r in n.shape)if(De(n.shape[r],o))return!0;return!1}if(n.type==="union"){for(let r of n.options)if(De(r,o))return!0;return!1}if(n.type==="tuple"){for(let r of n.items)if(De(r,o))return!0;if(n.rest&&De(n.rest,o))return!0;return!1}return!1}var lg=(e,t={})=>(o)=>{let n=Ut({...o,processors:t});return Z(e,n),Rt(n,e),Ft(n,e)},Rr=(e,t,o={})=>(n)=>{let{libraryOptions:r,target:i}=n??{},a=Ut({...r??{},target:i,io:t,processors:o});return Z(e,a),Rt(a,e),Ft(a,e)};var nn=g(()=>{tn()});function Ji(e,t){if("_idmap"in e){let n=e,r=Ut({...t,processors:Gi}),i={};for(let h of n._idmap.entries()){let[u,d]=h;Z(d,r)}let a={},c={registry:n,uri:t?.uri,defs:i};r.external=c;for(let h of n._idmap.entries()){let[u,d]=h;Rt(r,d),a[u]=Ft(r,d)}if(Object.keys(i).length>0){let h=r.target==="draft-2020-12"?"$defs":"definitions";a.__shared={[h]:i}}return{schemas:a}}let o=Ut({...t,processors:Gi});return Z(e,o),Rt(o,e),Ft(o,e)}var dC,hg=(e,t,o,n)=>{let r=o;r.type="string";let{minimum:i,maximum:a,format:c,patterns:h,contentEncoding:u}=e._zod.bag;if(typeof i==="number")r.minLength=i;if(typeof a==="number")r.maxLength=a;if(c){if(r.format=dC[c]??c,r.format==="")delete r.format;if(c==="time")delete r.format}if(u)r.contentEncoding=u;if(h&&h.size>0){let d=[...h];if(d.length===1)r.pattern=d[0].source;else if(d.length>1)r.allOf=[...d.map((s)=>({...t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0"?{type:"string"}:{},pattern:s.source}))]}},ug=(e,t,o,n)=>{let r=o,{minimum:i,maximum:a,format:c,multipleOf:h,exclusiveMaximum:u,exclusiveMinimum:d}=e._zod.bag;if(typeof c==="string"&&c.includes("int"))r.type="integer";else r.type="number";if(typeof d==="number")if(t.target==="draft-04"||t.target==="openapi-3.0")r.minimum=d,r.exclusiveMinimum=!0;else r.exclusiveMinimum=d;if(typeof i==="number"){if(r.minimum=i,typeof d==="number"&&t.target!=="draft-04")if(d>=i)delete r.minimum;else delete r.exclusiveMinimum}if(typeof u==="number")if(t.target==="draft-04"||t.target==="openapi-3.0")r.maximum=u,r.exclusiveMaximum=!0;else r.exclusiveMaximum=u;if(typeof a==="number"){if(r.maximum=a,typeof u==="number"&&t.target!=="draft-04")if(u<=a)delete r.maximum;else delete r.exclusiveMaximum}if(typeof h==="number")r.multipleOf=h},sg=(e,t,o,n)=>{o.type="boolean"},dg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("BigInt cannot be represented in JSON Schema")},gg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Symbols cannot be represented in JSON Schema")},bg=(e,t,o,n)=>{if(t.target==="openapi-3.0")o.type="string",o.nullable=!0,o.enum=[null];else o.type="null"},mg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Undefined cannot be represented in JSON Schema")},yg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Void cannot be represented in JSON Schema")},pg=(e,t,o,n)=>{o.not={}},vg=(e,t,o,n)=>{},fg=(e,t,o,n)=>{},Ig=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Date cannot be represented in JSON Schema")},kg=(e,t,o,n)=>{let r=e._zod.def,i=jo(r.entries);if(i.every((a)=>typeof a==="number"))o.type="number";if(i.every((a)=>typeof a==="string"))o.type="string";o.enum=i},wg=(e,t,o,n)=>{let r=e._zod.def,i=[];for(let a of r.values)if(a===void 0){if(t.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a==="bigint")if(t.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else i.push(Number(a));else i.push(a);if(i.length===0);else if(i.length===1){let a=i[0];if(o.type=a===null?"null":typeof a,t.target==="draft-04"||t.target==="openapi-3.0")o.enum=[a];else o.const=a}else{if(i.every((a)=>typeof a==="number"))o.type="number";if(i.every((a)=>typeof a==="string"))o.type="string";if(i.every((a)=>typeof a==="boolean"))o.type="boolean";if(i.every((a)=>a===null))o.type="null";o.enum=i}},$g=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("NaN cannot be represented in JSON Schema")},_g=(e,t,o,n)=>{let r=o,i=e._zod.pattern;if(!i)throw Error("Pattern not found in template literal");r.type="string",r.pattern=i.source},Tg=(e,t,o,n)=>{let r=o,i={type:"string",format:"binary",contentEncoding:"binary"},{minimum:a,maximum:c,mime:h}=e._zod.bag;if(a!==void 0)i.minLength=a;if(c!==void 0)i.maxLength=c;if(h)if(h.length===1)i.contentMediaType=h[0],Object.assign(r,i);else Object.assign(r,i),r.anyOf=h.map((u)=>({contentMediaType:u}));else Object.assign(r,i)},Og=(e,t,o,n)=>{o.type="boolean"},Sg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")},Pg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Function types cannot be represented in JSON Schema")},Ag=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")},Dg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Map cannot be represented in JSON Schema")},Lg=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Set cannot be represented in JSON Schema")},Ng=(e,t,o,n)=>{let r=o,i=e._zod.def,{minimum:a,maximum:c}=e._zod.bag;if(typeof a==="number")r.minItems=a;if(typeof c==="number")r.maxItems=c;r.type="array",r.items=Z(i.element,t,{...n,path:[...n.path,"items"]})},Cg=(e,t,o,n)=>{let r=o,i=e._zod.def;r.type="object",r.properties={};let a=i.shape;for(let u in a)r.properties[u]=Z(a[u],t,{...n,path:[...n.path,"properties",u]});let c=new Set(Object.keys(a)),h=new Set([...c].filter((u)=>{let d=i.shape[u]._zod;if(t.io==="input")return d.optin===void 0;else return d.optout===void 0}));if(h.size>0)r.required=Array.from(h);if(i.catchall?._zod.def.type==="never")r.additionalProperties=!1;else if(!i.catchall){if(t.io==="output")r.additionalProperties=!1}else if(i.catchall)r.additionalProperties=Z(i.catchall,t,{...n,path:[...n.path,"additionalProperties"]})},Hi=(e,t,o,n)=>{let r=e._zod.def,i=r.inclusive===!1,a=r.options.map((c,h)=>Z(c,t,{...n,path:[...n.path,i?"oneOf":"anyOf",h]}));if(i)o.oneOf=a;else o.anyOf=a},xg=(e,t,o,n)=>{let r=e._zod.def,i=Z(r.left,t,{...n,path:[...n.path,"allOf",0]}),a=Z(r.right,t,{...n,path:[...n.path,"allOf",1]}),c=(u)=>("allOf"in u)&&Object.keys(u).length===1,h=[...c(i)?i.allOf:[i],...c(a)?a.allOf:[a]];o.allOf=h},zg=(e,t,o,n)=>{let r=o,i=e._zod.def;r.type="array";let a=t.target==="draft-2020-12"?"prefixItems":"items",c=t.target==="draft-2020-12"?"items":t.target==="openapi-3.0"?"items":"additionalItems",h=i.items.map((b,m)=>Z(b,t,{...n,path:[...n.path,a,m]})),u=i.rest?Z(i.rest,t,{...n,path:[...n.path,c,...t.target==="openapi-3.0"?[i.items.length]:[]]}):null;if(t.target==="draft-2020-12"){if(r.prefixItems=h,u)r.items=u}else if(t.target==="openapi-3.0"){if(r.items={anyOf:h},u)r.items.anyOf.push(u);if(r.minItems=h.length,!u)r.maxItems=h.length}else if(r.items=h,u)r.additionalItems=u;let{minimum:d,maximum:s}=e._zod.bag;if(typeof d==="number")r.minItems=d;if(typeof s==="number")r.maxItems=s},jg=(e,t,o,n)=>{let r=o,i=e._zod.def;r.type="object";let a=i.keyType,h=a._zod.bag?.patterns;if(i.mode==="loose"&&h&&h.size>0){let d=Z(i.valueType,t,{...n,path:[...n.path,"patternProperties","*"]});r.patternProperties={};for(let s of h)r.patternProperties[s.source]=d}else{if(t.target==="draft-07"||t.target==="draft-2020-12")r.propertyNames=Z(i.keyType,t,{...n,path:[...n.path,"propertyNames"]});r.additionalProperties=Z(i.valueType,t,{...n,path:[...n.path,"additionalProperties"]})}let u=a._zod.values;if(u){let d=[...u].filter((s)=>typeof s==="string"||typeof s==="number");if(d.length>0)r.required=d}},Eg=(e,t,o,n)=>{let r=e._zod.def,i=Z(r.innerType,t,n),a=t.seen.get(e);if(t.target==="openapi-3.0")a.ref=r.innerType,o.nullable=!0;else o.anyOf=[i,{type:"null"}]},Ug=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType},Rg=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType,o.default=JSON.parse(JSON.stringify(r.defaultValue))},Fg=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);if(i.ref=r.innerType,t.io==="input")o._prefault=JSON.parse(JSON.stringify(r.defaultValue))},Kg=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}o.default=a},Bg=(e,t,o,n)=>{let r=e._zod.def,i=t.io==="input"?r.in._zod.def.type==="transform"?r.out:r.in:r.out;Z(i,t,n);let a=t.seen.get(e);a.ref=i},Gg=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType,o.readOnly=!0},Hg=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType},Mi=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType},Mg=(e,t,o,n)=>{let r=e._zod.innerType;Z(r,t,n);let i=t.seen.get(e);i.ref=r},Gi;var an=g(()=>{nn();z();dC={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Gi={string:hg,number:ug,boolean:sg,bigint:dg,symbol:gg,null:bg,undefined:mg,void:yg,never:pg,any:vg,unknown:fg,date:Ig,enum:kg,literal:wg,nan:$g,template_literal:_g,file:Tg,success:Og,custom:Sg,function:Pg,transform:Ag,map:Dg,set:Lg,array:Ng,object:Cg,union:Hi,intersection:xg,tuple:zg,record:jg,nullable:Eg,nonoptional:Ug,default:Rg,prefault:Fg,catch:Kg,pipe:Bg,readonly:Gg,promise:Hg,optional:Mi,lazy:Mg}});class Jg{get metadataRegistry(){return this.ctx.metadataRegistry}get target(){return this.ctx.target}get unrepresentable(){return this.ctx.unrepresentable}get override(){return this.ctx.override}get io(){return this.ctx.io}get counter(){return this.ctx.counter}set counter(e){this.ctx.counter=e}get seen(){return this.ctx.seen}constructor(e){let t=e?.target??"draft-2020-12";if(t==="draft-4")t="draft-04";if(t==="draft-7")t="draft-07";this.ctx=Ut({processors:Gi,target:t,...e?.metadata&&{metadata:e.metadata},...e?.unrepresentable&&{unrepresentable:e.unrepresentable},...e?.override&&{override:e.override},...e?.io&&{io:e.io}})}process(e,t={path:[],schemaPath:[]}){return Z(e,this.ctx,t)}emit(e,t){if(t){if(t.cycles)this.ctx.cycles=t.cycles;if(t.reused)this.ctx.reused=t.reused;if(t.external)this.ctx.external=t.external}Rt(this.ctx,e);let o=Ft(this.ctx,e),{"~standard":n,...r}=o;return r}}var Hw=g(()=>{an();nn()});var Mw={};var Jw=()=>{};var ft={};et(ft,{version:()=>su,util:()=>_,treeifyError:()=>gh,toJSONSchema:()=>Ji,toDotPath:()=>wk,safeParseAsync:()=>ph,safeParse:()=>yh,safeEncodeAsync:()=>fL,safeEncode:()=>pL,safeDecodeAsync:()=>IL,safeDecode:()=>vL,registry:()=>pi,regexes:()=>Ve,process:()=>Z,prettifyError:()=>bh,parseAsync:()=>qn,parse:()=>Jn,meta:()=>ag,locales:()=>en,isValidJWT:()=>Kk,isValidBase64URL:()=>Fk,isValidBase64:()=>xu,initializeContext:()=>Ut,globalRegistry:()=>fe,globalConfig:()=>xo,formatError:()=>Go,flattenError:()=>Bo,finalize:()=>Ft,extractDefs:()=>Rt,encodeAsync:()=>mL,encode:()=>gL,describe:()=>ig,decodeAsync:()=>yL,decode:()=>bL,createToJSONSchemaMethod:()=>lg,createStandardJSONSchemaMethod:()=>Rr,config:()=>ue,clone:()=>Pe,_xor:()=>HN,_xid:()=>Pi,_void:()=>Yd,_uuidv7:()=>wi,_uuidv6:()=>ki,_uuidv4:()=>Ii,_uuid:()=>fi,_url:()=>on,_uppercase:()=>Pr,_unknown:()=>Vd,_union:()=>GN,_undefined:()=>Md,_ulid:()=>Si,_uint64:()=>Gd,_uint32:()=>Ed,_tuple:()=>qN,_trim:()=>xr,_transform:()=>eC,_toUpperCase:()=>jr,_toLowerCase:()=>zr,_templateLiteral:()=>hC,_symbol:()=>Hd,_superRefine:()=>ng,_success:()=>iC,_stringbool:()=>cg,_stringFormat:()=>Ur,_string:()=>$d,_startsWith:()=>Dr,_slugify:()=>Er,_size:()=>er,_set:()=>YN,_safeParseAsync:()=>$r,_safeParse:()=>wr,_safeEncodeAsync:()=>ei,_safeEncode:()=>Zn,_safeDecodeAsync:()=>ti,_safeDecode:()=>Qn,_regex:()=>Or,_refine:()=>og,_record:()=>VN,_readonly:()=>lC,_property:()=>Bi,_promise:()=>sC,_positive:()=>Ui,_pipe:()=>cC,_parseAsync:()=>kr,_parse:()=>Ir,_overwrite:()=>Qe,_optional:()=>tC,_number:()=>Ld,_nullable:()=>rC,_null:()=>Jd,_normalize:()=>Cr,_nonpositive:()=>Fi,_nonoptional:()=>nC,_nonnegative:()=>Ki,_never:()=>Wd,_negative:()=>Ri,_nativeEnum:()=>ZN,_nanoid:()=>_i,_nan:()=>Qd,_multipleOf:()=>jt,_minSize:()=>ct,_minLength:()=>vt,_min:()=>Ae,_mime:()=>Nr,_maxSize:()=>Et,_maxLength:()=>tr,_max:()=>Ue,_map:()=>WN,_mac:()=>Td,_lte:()=>Ue,_lt:()=>it,_lowercase:()=>Sr,_literal:()=>QN,_length:()=>rr,_lazy:()=>uC,_ksuid:()=>Ai,_jwt:()=>Ei,_isoTime:()=>Ad,_isoDuration:()=>Dd,_isoDateTime:()=>Sd,_isoDate:()=>Pd,_ipv6:()=>Li,_ipv4:()=>Di,_intersection:()=>JN,_int64:()=>Bd,_int32:()=>jd,_int:()=>Cd,_includes:()=>Ar,_guid:()=>rn,_gte:()=>Ae,_gt:()=>at,_float64:()=>zd,_float32:()=>xd,_file:()=>tg,_enum:()=>XN,_endsWith:()=>Lr,_encodeAsync:()=>Yn,_encode:()=>Vn,_emoji:()=>$i,_email:()=>vi,_e164:()=>ji,_discriminatedUnion:()=>MN,_default:()=>oC,_decodeAsync:()=>Xn,_decode:()=>Wn,_date:()=>Xd,_custom:()=>rg,_cuid2:()=>Oi,_cuid:()=>Ti,_coercedString:()=>_d,_coercedNumber:()=>Nd,_coercedDate:()=>Zd,_coercedBoolean:()=>Rd,_coercedBigint:()=>Kd,_cidrv6:()=>Ci,_cidrv4:()=>Ni,_check:()=>Bw,_catch:()=>aC,_boolean:()=>Ud,_bigint:()=>Fd,_base64url:()=>zi,_base64:()=>xi,_array:()=>eg,_any:()=>qd,TimePrecision:()=>Od,NEVER:()=>rh,JSONSchemaGenerator:()=>Jg,JSONSchema:()=>Mw,Doc:()=>ci,$output:()=>Id,$input:()=>kd,$constructor:()=>y,$brand:()=>oh,$ZodXor:()=>Zu,$ZodXID:()=>$u,$ZodVoid:()=>Vu,$ZodUnknown:()=>Ju,$ZodUnion:()=>Vo,$ZodUndefined:()=>Gu,$ZodUUID:()=>mu,$ZodURL:()=>pu,$ZodULID:()=>wu,$ZodType:()=>R,$ZodTuple:()=>mi,$ZodTransform:()=>cs,$ZodTemplateLiteral:()=>vs,$ZodSymbol:()=>Bu,$ZodSuccess:()=>gs,$ZodStringFormat:()=>Q,$ZodString:()=>Qt,$ZodSet:()=>os,$ZodRegistry:()=>wd,$ZodRecord:()=>ts,$ZodRealError:()=>xe,$ZodReadonly:()=>ps,$ZodPromise:()=>Is,$ZodPrefault:()=>ss,$ZodPipe:()=>ys,$ZodOptional:()=>yi,$ZodObjectJIT:()=>Xu,$ZodObject:()=>Hk,$ZodNumberFormat:()=>Fu,$ZodNumber:()=>gi,$ZodNullable:()=>hs,$ZodNull:()=>Hu,$ZodNonOptional:()=>ds,$ZodNever:()=>qu,$ZodNanoID:()=>fu,$ZodNaN:()=>ms,$ZodMap:()=>rs,$ZodMAC:()=>Lu,$ZodLiteral:()=>is,$ZodLazy:()=>ks,$ZodKSUID:()=>_u,$ZodJWT:()=>Uu,$ZodIntersection:()=>es,$ZodISOTime:()=>Su,$ZodISODuration:()=>Pu,$ZodISODateTime:()=>Tu,$ZodISODate:()=>Ou,$ZodIPv6:()=>Du,$ZodIPv4:()=>Au,$ZodGUID:()=>bu,$ZodFunction:()=>fs,$ZodFile:()=>as,$ZodExactOptional:()=>ls,$ZodError:()=>Ko,$ZodEnum:()=>ns,$ZodEncodeError:()=>Yt,$ZodEmoji:()=>vu,$ZodEmail:()=>yu,$ZodE164:()=>Eu,$ZodDiscriminatedUnion:()=>Qu,$ZodDefault:()=>us,$ZodDate:()=>Wu,$ZodCustomStringFormat:()=>Ru,$ZodCustom:()=>ws,$ZodCodec:()=>Wo,$ZodCheckUpperCase:()=>nu,$ZodCheckStringFormat:()=>_r,$ZodCheckStartsWith:()=>au,$ZodCheckSizeEquals:()=>Zh,$ZodCheckRegex:()=>ru,$ZodCheckProperty:()=>lu,$ZodCheckOverwrite:()=>uu,$ZodCheckNumberFormat:()=>Vh,$ZodCheckMultipleOf:()=>qh,$ZodCheckMinSize:()=>Xh,$ZodCheckMinLength:()=>eu,$ZodCheckMimeType:()=>hu,$ZodCheckMaxSize:()=>Yh,$ZodCheckMaxLength:()=>Qh,$ZodCheckLowerCase:()=>ou,$ZodCheckLessThan:()=>ni,$ZodCheckLengthEquals:()=>tu,$ZodCheckIncludes:()=>iu,$ZodCheckGreaterThan:()=>ii,$ZodCheckEndsWith:()=>cu,$ZodCheckBigIntFormat:()=>Wh,$ZodCheck:()=>re,$ZodCatch:()=>bs,$ZodCUID2:()=>ku,$ZodCUID:()=>Iu,$ZodCIDRv6:()=>Cu,$ZodCIDRv4:()=>Nu,$ZodBoolean:()=>qo,$ZodBigIntFormat:()=>Ku,$ZodBigInt:()=>bi,$ZodBase64URL:()=>ju,$ZodBase64:()=>zu,$ZodAsyncError:()=>nt,$ZodArray:()=>Yu,$ZodAny:()=>Mu});var Re=g(()=>{z();oi();fd();an();Hw();Jw();yr();vh();mh();$s();ai();du();tn();Gw();nn()});var qi={};et(qi,{uppercase:()=>Pr,trim:()=>xr,toUpperCase:()=>jr,toLowerCase:()=>zr,startsWith:()=>Dr,slugify:()=>Er,size:()=>er,regex:()=>Or,property:()=>Bi,positive:()=>Ui,overwrite:()=>Qe,normalize:()=>Cr,nonpositive:()=>Fi,nonnegative:()=>Ki,negative:()=>Ri,multipleOf:()=>jt,minSize:()=>ct,minLength:()=>vt,mime:()=>Nr,maxSize:()=>Et,maxLength:()=>tr,lte:()=>Ue,lt:()=>it,lowercase:()=>Sr,length:()=>rr,includes:()=>Ar,gte:()=>Ae,gt:()=>at,endsWith:()=>Lr});var Vi=g(()=>{Re()});var Fr={};et(Fr,{time:()=>Wg,duration:()=>Yg,datetime:()=>qg,date:()=>Vg,ZodISOTime:()=>Xi,ZodISODuration:()=>Zi,ZodISODateTime:()=>Wi,ZodISODate:()=>Yi});function qg(e){return Sd(Wi,e)}function Vg(e){return Pd(Yi,e)}function Wg(e){return Ad(Xi,e)}function Yg(e){return Dd(Zi,e)}var Wi,Yi,Xi,Zi;var cn=g(()=>{Re();hn();Wi=y("ZodISODateTime",(e,t)=>{Tu.init(e,t),ee.init(e,t)});Yi=y("ZodISODate",(e,t)=>{Ou.init(e,t),ee.init(e,t)});Xi=y("ZodISOTime",(e,t)=>{Su.init(e,t),ee.init(e,t)});Zi=y("ZodISODuration",(e,t)=>{Pu.init(e,t),ee.init(e,t)})});var qw=(e,t)=>{Ko.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:(o)=>Go(e,o)},flatten:{value:(o)=>Bo(e,o)},addIssue:{value:(o)=>{e.issues.push(o),e.message=JSON.stringify(e.issues,pr,2)}},addIssues:{value:(o)=>{e.issues.push(...o),e.message=JSON.stringify(e.issues,pr,2)}},isEmpty:{get(){return e.issues.length===0}}})},bC,ze;var Xg=g(()=>{Re();Re();z();bC=y("ZodError",qw),ze=y("ZodError",qw,{Parent:Error})});var Zg,Qg,eb,tb,rb,ob,nb,ib,ab,cb,lb,hb;var ub=g(()=>{Re();Xg();Zg=Ir(ze),Qg=kr(ze),eb=wr(ze),tb=$r(ze),rb=Vn(ze),ob=Wn(ze),nb=Yn(ze),ib=Xn(ze),ab=Zn(ze),cb=Qn(ze),lb=ei(ze),hb=ti(ze)});var ln={};et(ln,{xor:()=>U$,xid:()=>c$,void:()=>N$,uuidv7:()=>Qw,uuidv6:()=>Zw,uuidv4:()=>Xw,uuid:()=>Yw,url:()=>e$,unknown:()=>or,union:()=>Ia,undefined:()=>D$,ulid:()=>a$,uint64:()=>P$,uint32:()=>T$,tuple:()=>Pb,transform:()=>wa,templateLiteral:()=>X$,symbol:()=>A$,superRefine:()=>tm,success:()=>V$,stringbool:()=>i_,stringFormat:()=>v$,string:()=>Qi,strictObject:()=>j$,set:()=>G$,refine:()=>em,record:()=>Ab,readonly:()=>Vb,promise:()=>Z$,preprocess:()=>c_,prefault:()=>Kb,pipe:()=>gn,partialRecord:()=>F$,optional:()=>sn,object:()=>z$,number:()=>db,nullish:()=>q$,nullable:()=>dn,null:()=>pb,nonoptional:()=>Bb,never:()=>fa,nativeEnum:()=>H$,nanoid:()=>o$,nan:()=>W$,meta:()=>o_,map:()=>B$,mac:()=>u$,looseRecord:()=>K$,looseObject:()=>E$,literal:()=>M$,lazy:()=>Xb,ksuid:()=>l$,keyof:()=>x$,jwt:()=>p$,json:()=>a_,ipv6:()=>s$,ipv4:()=>h$,intersection:()=>Ob,int64:()=>S$,int32:()=>_$,int:()=>ea,instanceof:()=>n_,httpUrl:()=>t$,hostname:()=>f$,hex:()=>I$,hash:()=>k$,guid:()=>Ww,function:()=>Q$,float64:()=>$$,float32:()=>w$,file:()=>J$,exactOptional:()=>jb,enum:()=>ka,emoji:()=>r$,email:()=>Vw,e164:()=>y$,discriminatedUnion:()=>R$,describe:()=>r_,date:()=>C$,custom:()=>t_,cuid2:()=>i$,cuid:()=>n$,codec:()=>Y$,cidrv6:()=>g$,cidrv4:()=>d$,check:()=>e_,catch:()=>Mb,boolean:()=>gb,bigint:()=>O$,base64url:()=>m$,base64:()=>b$,array:()=>yn,any:()=>L$,_function:()=>Q$,_default:()=>Rb,_ZodString:()=>ta,ZodXor:()=>$b,ZodXID:()=>la,ZodVoid:()=>kb,ZodUnknown:()=>fb,ZodUnion:()=>vn,ZodUndefined:()=>mb,ZodUUID:()=>lt,ZodURL:()=>bn,ZodULID:()=>ca,ZodType:()=>B,ZodTuple:()=>Sb,ZodTransform:()=>xb,ZodTemplateLiteral:()=>Wb,ZodSymbol:()=>bb,ZodSuccess:()=>Gb,ZodStringFormat:()=>ee,ZodString:()=>Br,ZodSet:()=>Lb,ZodRecord:()=>fn,ZodReadonly:()=>qb,ZodPromise:()=>Zb,ZodPrefault:()=>Fb,ZodPipe:()=>Ta,ZodOptional:()=>$a,ZodObject:()=>pn,ZodNumberFormat:()=>nr,ZodNumber:()=>Hr,ZodNullable:()=>Eb,ZodNull:()=>yb,ZodNonOptional:()=>_a,ZodNever:()=>Ib,ZodNanoID:()=>na,ZodNaN:()=>Jb,ZodMap:()=>Db,ZodMAC:()=>sb,ZodLiteral:()=>Nb,ZodLazy:()=>Yb,ZodKSUID:()=>ha,ZodJWT:()=>pa,ZodIntersection:()=>Tb,ZodIPv6:()=>sa,ZodIPv4:()=>ua,ZodGUID:()=>un,ZodFunction:()=>Qb,ZodFile:()=>Cb,ZodExactOptional:()=>zb,ZodEnum:()=>Kr,ZodEmoji:()=>oa,ZodEmail:()=>ra,ZodE164:()=>ya,ZodDiscriminatedUnion:()=>_b,ZodDefault:()=>Ub,ZodDate:()=>mn,ZodCustomStringFormat:()=>Gr,ZodCustom:()=>In,ZodCodec:()=>Oa,ZodCatch:()=>Hb,ZodCUID2:()=>aa,ZodCUID:()=>ia,ZodCIDRv6:()=>ga,ZodCIDRv4:()=>da,ZodBoolean:()=>Mr,ZodBigIntFormat:()=>va,ZodBigInt:()=>Jr,ZodBase64URL:()=>ma,ZodBase64:()=>ba,ZodArray:()=>wb,ZodAny:()=>vb});function Qi(e){return $d(Br,e)}function Vw(e){return vi(ra,e)}function Ww(e){return rn(un,e)}function Yw(e){return fi(lt,e)}function Xw(e){return Ii(lt,e)}function Zw(e){return ki(lt,e)}function Qw(e){return wi(lt,e)}function e$(e){return on(bn,e)}function t$(e){return on(bn,{protocol:/^https?$/,hostname:Ve.domain,..._.normalizeParams(e)})}function r$(e){return $i(oa,e)}function o$(e){return _i(na,e)}function n$(e){return Ti(ia,e)}function i$(e){return Oi(aa,e)}function a$(e){return Si(ca,e)}function c$(e){return Pi(la,e)}function l$(e){return Ai(ha,e)}function h$(e){return Di(ua,e)}function u$(e){return Td(sb,e)}function s$(e){return Li(sa,e)}function d$(e){return Ni(da,e)}function g$(e){return Ci(ga,e)}function b$(e){return xi(ba,e)}function m$(e){return zi(ma,e)}function y$(e){return ji(ya,e)}function p$(e){return Ei(pa,e)}function v$(e,t,o={}){return Ur(Gr,e,t,o)}function f$(e){return Ur(Gr,"hostname",Ve.hostname,e)}function I$(e){return Ur(Gr,"hex",Ve.hex,e)}function k$(e,t){let o=t?.enc??"hex",n=`${e}_${o}`,r=Ve[n];if(!r)throw Error(`Unrecognized hash format: ${n}`);return Ur(Gr,n,r,t)}function db(e){return Ld(Hr,e)}function ea(e){return Cd(nr,e)}function w$(e){return xd(nr,e)}function $$(e){return zd(nr,e)}function _$(e){return jd(nr,e)}function T$(e){return Ed(nr,e)}function gb(e){return Ud(Mr,e)}function O$(e){return Fd(Jr,e)}function S$(e){return Bd(va,e)}function P$(e){return Gd(va,e)}function A$(e){return Hd(bb,e)}function D$(e){return Md(mb,e)}function pb(e){return Jd(yb,e)}function L$(){return qd(vb)}function or(){return Vd(fb)}function fa(e){return Wd(Ib,e)}function N$(e){return Yd(kb,e)}function C$(e){return Xd(mn,e)}function yn(e,t){return eg(wb,e,t)}function x$(e){let t=e._zod.def.shape;return ka(Object.keys(t))}function z$(e,t){let o={type:"object",shape:e??{},..._.normalizeParams(t)};return new pn(o)}function j$(e,t){return new pn({type:"object",shape:e,catchall:fa(),..._.normalizeParams(t)})}function E$(e,t){return new pn({type:"object",shape:e,catchall:or(),..._.normalizeParams(t)})}function Ia(e,t){return new vn({type:"union",options:e,..._.normalizeParams(t)})}function U$(e,t){return new $b({type:"union",options:e,inclusive:!1,..._.normalizeParams(t)})}function R$(e,t,o){return new _b({type:"union",options:t,discriminator:e,..._.normalizeParams(o)})}function Ob(e,t){return new Tb({type:"intersection",left:e,right:t})}function Pb(e,t,o){let n=t instanceof R,r=n?o:t;return new Sb({type:"tuple",items:e,rest:n?t:null,..._.normalizeParams(r)})}function Ab(e,t,o){return new fn({type:"record",keyType:e,valueType:t,..._.normalizeParams(o)})}function F$(e,t,o){let n=Pe(e);return n._zod.values=void 0,new fn({type:"record",keyType:n,valueType:t,..._.normalizeParams(o)})}function K$(e,t,o){return new fn({type:"record",keyType:e,valueType:t,mode:"loose",..._.normalizeParams(o)})}function B$(e,t,o){return new Db({type:"map",keyType:e,valueType:t,..._.normalizeParams(o)})}function G$(e,t){return new Lb({type:"set",valueType:e,..._.normalizeParams(t)})}function ka(e,t){let o=Array.isArray(e)?Object.fromEntries(e.map((n)=>[n,n])):e;return new Kr({type:"enum",entries:o,..._.normalizeParams(t)})}function H$(e,t){return new Kr({type:"enum",entries:e,..._.normalizeParams(t)})}function M$(e,t){return new Nb({type:"literal",values:Array.isArray(e)?e:[e],..._.normalizeParams(t)})}function J$(e){return tg(Cb,e)}function wa(e){return new xb({type:"transform",transform:e})}function sn(e){return new $a({type:"optional",innerType:e})}function jb(e){return new zb({type:"optional",innerType:e})}function dn(e){return new Eb({type:"nullable",innerType:e})}function q$(e){return sn(dn(e))}function Rb(e,t){return new Ub({type:"default",innerType:e,get defaultValue(){return typeof t==="function"?t():_.shallowClone(t)}})}function Kb(e,t){return new Fb({type:"prefault",innerType:e,get defaultValue(){return typeof t==="function"?t():_.shallowClone(t)}})}function Bb(e,t){return new _a({type:"nonoptional",innerType:e,..._.normalizeParams(t)})}function V$(e){return new Gb({type:"success",innerType:e})}function Mb(e,t){return new Hb({type:"catch",innerType:e,catchValue:typeof t==="function"?t:()=>t})}function W$(e){return Qd(Jb,e)}function gn(e,t){return new Ta({type:"pipe",in:e,out:t})}function Y$(e,t,o){return new Oa({type:"pipe",in:e,out:t,transform:o.decode,reverseTransform:o.encode})}function Vb(e){return new qb({type:"readonly",innerType:e})}function X$(e,t){return new Wb({type:"template_literal",parts:e,..._.normalizeParams(t)})}function Xb(e){return new Yb({type:"lazy",getter:e})}function Z$(e){return new Zb({type:"promise",innerType:e})}function Q$(e){return new Qb({type:"function",input:Array.isArray(e?.input)?Pb(e?.input):e?.input??yn(or()),output:e?.output??or()})}function e_(e){let t=new re({check:"custom"});return t._zod.check=e,t}function t_(e,t){return rg(In,e??(()=>!0),t)}function em(e,t={}){return og(In,e,t)}function tm(e){return ng(e)}function n_(e,t={}){let o=new In({type:"custom",check:"custom",fn:(n)=>n instanceof e,abort:!0,..._.normalizeParams(t)});return o._zod.bag.Class=e,o._zod.check=(n)=>{if(!(n.value instanceof e))n.issues.push({code:"invalid_type",expected:e.name,input:n.value,inst:o,path:[...o._zod.def.path??[]]})},o}function a_(e){let t=Xb(()=>{return Ia([Qi(e),db(),gb(),pb(),yn(t),Ab(Qi(),t)])});return t}function c_(e,t){return gn(wa(e),t)}var B,ta,Br,ee,ra,un,lt,bn,oa,na,ia,aa,ca,la,ha,ua,sb,sa,da,ga,ba,ma,ya,pa,Gr,Hr,nr,Mr,Jr,va,bb,mb,yb,vb,fb,Ib,kb,mn,wb,pn,vn,$b,_b,Tb,Sb,fn,Db,Lb,Kr,Nb,Cb,xb,$a,zb,Eb,Ub,Fb,_a,Gb,Hb,Jb,Ta,Oa,qb,Wb,Yb,Zb,Qb,In,r_,o_,i_=(...e)=>cg({Codec:Oa,Boolean:Mr,String:Br},...e);var hn=g(()=>{Re();Re();an();nn();Vi();cn();ub();B=y("ZodType",(e,t)=>{return R.init(e,t),Object.assign(e["~standard"],{jsonSchema:{input:Rr(e,"input"),output:Rr(e,"output")}}),e.toJSONSchema=lg(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.check=(...o)=>{return e.clone(_.mergeDefs(t,{checks:[...t.checks??[],...o.map((n)=>typeof n==="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},e.with=e.check,e.clone=(o,n)=>Pe(e,o,n),e.brand=()=>e,e.register=(o,n)=>{return o.add(e,n),e},e.parse=(o,n)=>Zg(e,o,n,{callee:e.parse}),e.safeParse=(o,n)=>eb(e,o,n),e.parseAsync=async(o,n)=>Qg(e,o,n,{callee:e.parseAsync}),e.safeParseAsync=async(o,n)=>tb(e,o,n),e.spa=e.safeParseAsync,e.encode=(o,n)=>rb(e,o,n),e.decode=(o,n)=>ob(e,o,n),e.encodeAsync=async(o,n)=>nb(e,o,n),e.decodeAsync=async(o,n)=>ib(e,o,n),e.safeEncode=(o,n)=>ab(e,o,n),e.safeDecode=(o,n)=>cb(e,o,n),e.safeEncodeAsync=async(o,n)=>lb(e,o,n),e.safeDecodeAsync=async(o,n)=>hb(e,o,n),e.refine=(o,n)=>e.check(em(o,n)),e.superRefine=(o)=>e.check(tm(o)),e.overwrite=(o)=>e.check(Qe(o)),e.optional=()=>sn(e),e.exactOptional=()=>jb(e),e.nullable=()=>dn(e),e.nullish=()=>sn(dn(e)),e.nonoptional=(o)=>Bb(e,o),e.array=()=>yn(e),e.or=(o)=>Ia([e,o]),e.and=(o)=>Ob(e,o),e.transform=(o)=>gn(e,wa(o)),e.default=(o)=>Rb(e,o),e.prefault=(o)=>Kb(e,o),e.catch=(o)=>Mb(e,o),e.pipe=(o)=>gn(e,o),e.readonly=()=>Vb(e),e.describe=(o)=>{let n=e.clone();return fe.add(n,{description:o}),n},Object.defineProperty(e,"description",{get(){return fe.get(e)?.description},configurable:!0}),e.meta=(...o)=>{if(o.length===0)return fe.get(e);let n=e.clone();return fe.add(n,o[0]),n},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e.apply=(o)=>o(e),e}),ta=y("_ZodString",(e,t)=>{Qt.init(e,t),B.init(e,t),e._zod.processJSONSchema=(n,r,i)=>hg(e,n,r,i);let o=e._zod.bag;e.format=o.format??null,e.minLength=o.minimum??null,e.maxLength=o.maximum??null,e.regex=(...n)=>e.check(Or(...n)),e.includes=(...n)=>e.check(Ar(...n)),e.startsWith=(...n)=>e.check(Dr(...n)),e.endsWith=(...n)=>e.check(Lr(...n)),e.min=(...n)=>e.check(vt(...n)),e.max=(...n)=>e.check(tr(...n)),e.length=(...n)=>e.check(rr(...n)),e.nonempty=(...n)=>e.check(vt(1,...n)),e.lowercase=(n)=>e.check(Sr(n)),e.uppercase=(n)=>e.check(Pr(n)),e.trim=()=>e.check(xr()),e.normalize=(...n)=>e.check(Cr(...n)),e.toLowerCase=()=>e.check(zr()),e.toUpperCase=()=>e.check(jr()),e.slugify=()=>e.check(Er())}),Br=y("ZodString",(e,t)=>{Qt.init(e,t),ta.init(e,t),e.email=(o)=>e.check(vi(ra,o)),e.url=(o)=>e.check(on(bn,o)),e.jwt=(o)=>e.check(Ei(pa,o)),e.emoji=(o)=>e.check($i(oa,o)),e.guid=(o)=>e.check(rn(un,o)),e.uuid=(o)=>e.check(fi(lt,o)),e.uuidv4=(o)=>e.check(Ii(lt,o)),e.uuidv6=(o)=>e.check(ki(lt,o)),e.uuidv7=(o)=>e.check(wi(lt,o)),e.nanoid=(o)=>e.check(_i(na,o)),e.guid=(o)=>e.check(rn(un,o)),e.cuid=(o)=>e.check(Ti(ia,o)),e.cuid2=(o)=>e.check(Oi(aa,o)),e.ulid=(o)=>e.check(Si(ca,o)),e.base64=(o)=>e.check(xi(ba,o)),e.base64url=(o)=>e.check(zi(ma,o)),e.xid=(o)=>e.check(Pi(la,o)),e.ksuid=(o)=>e.check(Ai(ha,o)),e.ipv4=(o)=>e.check(Di(ua,o)),e.ipv6=(o)=>e.check(Li(sa,o)),e.cidrv4=(o)=>e.check(Ni(da,o)),e.cidrv6=(o)=>e.check(Ci(ga,o)),e.e164=(o)=>e.check(ji(ya,o)),e.datetime=(o)=>e.check(qg(o)),e.date=(o)=>e.check(Vg(o)),e.time=(o)=>e.check(Wg(o)),e.duration=(o)=>e.check(Yg(o))});ee=y("ZodStringFormat",(e,t)=>{Q.init(e,t),ta.init(e,t)}),ra=y("ZodEmail",(e,t)=>{yu.init(e,t),ee.init(e,t)});un=y("ZodGUID",(e,t)=>{bu.init(e,t),ee.init(e,t)});lt=y("ZodUUID",(e,t)=>{mu.init(e,t),ee.init(e,t)});bn=y("ZodURL",(e,t)=>{pu.init(e,t),ee.init(e,t)});oa=y("ZodEmoji",(e,t)=>{vu.init(e,t),ee.init(e,t)});na=y("ZodNanoID",(e,t)=>{fu.init(e,t),ee.init(e,t)});ia=y("ZodCUID",(e,t)=>{Iu.init(e,t),ee.init(e,t)});aa=y("ZodCUID2",(e,t)=>{ku.init(e,t),ee.init(e,t)});ca=y("ZodULID",(e,t)=>{wu.init(e,t),ee.init(e,t)});la=y("ZodXID",(e,t)=>{$u.init(e,t),ee.init(e,t)});ha=y("ZodKSUID",(e,t)=>{_u.init(e,t),ee.init(e,t)});ua=y("ZodIPv4",(e,t)=>{Au.init(e,t),ee.init(e,t)});sb=y("ZodMAC",(e,t)=>{Lu.init(e,t),ee.init(e,t)});sa=y("ZodIPv6",(e,t)=>{Du.init(e,t),ee.init(e,t)});da=y("ZodCIDRv4",(e,t)=>{Nu.init(e,t),ee.init(e,t)});ga=y("ZodCIDRv6",(e,t)=>{Cu.init(e,t),ee.init(e,t)});ba=y("ZodBase64",(e,t)=>{zu.init(e,t),ee.init(e,t)});ma=y("ZodBase64URL",(e,t)=>{ju.init(e,t),ee.init(e,t)});ya=y("ZodE164",(e,t)=>{Eu.init(e,t),ee.init(e,t)});pa=y("ZodJWT",(e,t)=>{Uu.init(e,t),ee.init(e,t)});Gr=y("ZodCustomStringFormat",(e,t)=>{Ru.init(e,t),ee.init(e,t)});Hr=y("ZodNumber",(e,t)=>{gi.init(e,t),B.init(e,t),e._zod.processJSONSchema=(n,r,i)=>ug(e,n,r,i),e.gt=(n,r)=>e.check(at(n,r)),e.gte=(n,r)=>e.check(Ae(n,r)),e.min=(n,r)=>e.check(Ae(n,r)),e.lt=(n,r)=>e.check(it(n,r)),e.lte=(n,r)=>e.check(Ue(n,r)),e.max=(n,r)=>e.check(Ue(n,r)),e.int=(n)=>e.check(ea(n)),e.safe=(n)=>e.check(ea(n)),e.positive=(n)=>e.check(at(0,n)),e.nonnegative=(n)=>e.check(Ae(0,n)),e.negative=(n)=>e.check(it(0,n)),e.nonpositive=(n)=>e.check(Ue(0,n)),e.multipleOf=(n,r)=>e.check(jt(n,r)),e.step=(n,r)=>e.check(jt(n,r)),e.finite=()=>e;let o=e._zod.bag;e.minValue=Math.max(o.minimum??Number.NEGATIVE_INFINITY,o.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(o.maximum??Number.POSITIVE_INFINITY,o.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(o.format??"").includes("int")||Number.isSafeInteger(o.multipleOf??0.5),e.isFinite=!0,e.format=o.format??null});nr=y("ZodNumberFormat",(e,t)=>{Fu.init(e,t),Hr.init(e,t)});Mr=y("ZodBoolean",(e,t)=>{qo.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>sg(e,o,n,r)});Jr=y("ZodBigInt",(e,t)=>{bi.init(e,t),B.init(e,t),e._zod.processJSONSchema=(n,r,i)=>dg(e,n,r,i),e.gte=(n,r)=>e.check(Ae(n,r)),e.min=(n,r)=>e.check(Ae(n,r)),e.gt=(n,r)=>e.check(at(n,r)),e.gte=(n,r)=>e.check(Ae(n,r)),e.min=(n,r)=>e.check(Ae(n,r)),e.lt=(n,r)=>e.check(it(n,r)),e.lte=(n,r)=>e.check(Ue(n,r)),e.max=(n,r)=>e.check(Ue(n,r)),e.positive=(n)=>e.check(at(BigInt(0),n)),e.negative=(n)=>e.check(it(BigInt(0),n)),e.nonpositive=(n)=>e.check(Ue(BigInt(0),n)),e.nonnegative=(n)=>e.check(Ae(BigInt(0),n)),e.multipleOf=(n,r)=>e.check(jt(n,r));let o=e._zod.bag;e.minValue=o.minimum??null,e.maxValue=o.maximum??null,e.format=o.format??null});va=y("ZodBigIntFormat",(e,t)=>{Ku.init(e,t),Jr.init(e,t)});bb=y("ZodSymbol",(e,t)=>{Bu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>gg(e,o,n,r)});mb=y("ZodUndefined",(e,t)=>{Gu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>mg(e,o,n,r)});yb=y("ZodNull",(e,t)=>{Hu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>bg(e,o,n,r)});vb=y("ZodAny",(e,t)=>{Mu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>vg(e,o,n,r)});fb=y("ZodUnknown",(e,t)=>{Ju.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>fg(e,o,n,r)});Ib=y("ZodNever",(e,t)=>{qu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>pg(e,o,n,r)});kb=y("ZodVoid",(e,t)=>{Vu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>yg(e,o,n,r)});mn=y("ZodDate",(e,t)=>{Wu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(n,r,i)=>Ig(e,n,r,i),e.min=(n,r)=>e.check(Ae(n,r)),e.max=(n,r)=>e.check(Ue(n,r));let o=e._zod.bag;e.minDate=o.minimum?new Date(o.minimum):null,e.maxDate=o.maximum?new Date(o.maximum):null});wb=y("ZodArray",(e,t)=>{Yu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ng(e,o,n,r),e.element=t.element,e.min=(o,n)=>e.check(vt(o,n)),e.nonempty=(o)=>e.check(vt(1,o)),e.max=(o,n)=>e.check(tr(o,n)),e.length=(o,n)=>e.check(rr(o,n)),e.unwrap=()=>e.element});pn=y("ZodObject",(e,t)=>{Xu.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Cg(e,o,n,r),_.defineLazy(e,"shape",()=>{return t.shape}),e.keyof=()=>ka(Object.keys(e._zod.def.shape)),e.catchall=(o)=>e.clone({...e._zod.def,catchall:o}),e.passthrough=()=>e.clone({...e._zod.def,catchall:or()}),e.loose=()=>e.clone({...e._zod.def,catchall:or()}),e.strict=()=>e.clone({...e._zod.def,catchall:fa()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=(o)=>{return _.extend(e,o)},e.safeExtend=(o)=>{return _.safeExtend(e,o)},e.merge=(o)=>_.merge(e,o),e.pick=(o)=>_.pick(e,o),e.omit=(o)=>_.omit(e,o),e.partial=(...o)=>_.partial($a,e,o[0]),e.required=(...o)=>_.required(_a,e,o[0])});vn=y("ZodUnion",(e,t)=>{Vo.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Hi(e,o,n,r),e.options=t.options});$b=y("ZodXor",(e,t)=>{vn.init(e,t),Zu.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Hi(e,o,n,r),e.options=t.options});_b=y("ZodDiscriminatedUnion",(e,t)=>{vn.init(e,t),Qu.init(e,t)});Tb=y("ZodIntersection",(e,t)=>{es.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>xg(e,o,n,r)});Sb=y("ZodTuple",(e,t)=>{mi.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>zg(e,o,n,r),e.rest=(o)=>e.clone({...e._zod.def,rest:o})});fn=y("ZodRecord",(e,t)=>{ts.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>jg(e,o,n,r),e.keyType=t.keyType,e.valueType=t.valueType});Db=y("ZodMap",(e,t)=>{rs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Dg(e,o,n,r),e.keyType=t.keyType,e.valueType=t.valueType,e.min=(...o)=>e.check(ct(...o)),e.nonempty=(o)=>e.check(ct(1,o)),e.max=(...o)=>e.check(Et(...o)),e.size=(...o)=>e.check(er(...o))});Lb=y("ZodSet",(e,t)=>{os.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Lg(e,o,n,r),e.min=(...o)=>e.check(ct(...o)),e.nonempty=(o)=>e.check(ct(1,o)),e.max=(...o)=>e.check(Et(...o)),e.size=(...o)=>e.check(er(...o))});Kr=y("ZodEnum",(e,t)=>{ns.init(e,t),B.init(e,t),e._zod.processJSONSchema=(n,r,i)=>kg(e,n,r,i),e.enum=t.entries,e.options=Object.values(t.entries);let o=new Set(Object.keys(t.entries));e.extract=(n,r)=>{let i={};for(let a of n)if(o.has(a))i[a]=t.entries[a];else throw Error(`Key ${a} not found in enum`);return new Kr({...t,checks:[],..._.normalizeParams(r),entries:i})},e.exclude=(n,r)=>{let i={...t.entries};for(let a of n)if(o.has(a))delete i[a];else throw Error(`Key ${a} not found in enum`);return new Kr({...t,checks:[],..._.normalizeParams(r),entries:i})}});Nb=y("ZodLiteral",(e,t)=>{is.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>wg(e,o,n,r),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});Cb=y("ZodFile",(e,t)=>{as.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Tg(e,o,n,r),e.min=(o,n)=>e.check(ct(o,n)),e.max=(o,n)=>e.check(Et(o,n)),e.mime=(o,n)=>e.check(Nr(Array.isArray(o)?o:[o],n))});xb=y("ZodTransform",(e,t)=>{cs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ag(e,o,n,r),e._zod.parse=(o,n)=>{if(n.direction==="backward")throw new Yt(e.constructor.name);o.addIssue=(i)=>{if(typeof i==="string")o.issues.push(_.issue(i,o.value,t));else{let a=i;if(a.fatal)a.continue=!1;a.code??(a.code="custom"),a.input??(a.input=o.value),a.inst??(a.inst=e),o.issues.push(_.issue(a))}};let r=t.transform(o.value,o);if(r instanceof Promise)return r.then((i)=>{return o.value=i,o});return o.value=r,o}});$a=y("ZodOptional",(e,t)=>{yi.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Mi(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});zb=y("ZodExactOptional",(e,t)=>{ls.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Mi(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Eb=y("ZodNullable",(e,t)=>{hs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Eg(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Ub=y("ZodDefault",(e,t)=>{us.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Rg(e,o,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});Fb=y("ZodPrefault",(e,t)=>{ss.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Fg(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});_a=y("ZodNonOptional",(e,t)=>{ds.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ug(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Gb=y("ZodSuccess",(e,t)=>{gs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Og(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Hb=y("ZodCatch",(e,t)=>{bs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Kg(e,o,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});Jb=y("ZodNaN",(e,t)=>{ms.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>$g(e,o,n,r)});Ta=y("ZodPipe",(e,t)=>{ys.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Bg(e,o,n,r),e.in=t.in,e.out=t.out});Oa=y("ZodCodec",(e,t)=>{Ta.init(e,t),Wo.init(e,t)});qb=y("ZodReadonly",(e,t)=>{ps.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Gg(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Wb=y("ZodTemplateLiteral",(e,t)=>{vs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>_g(e,o,n,r)});Yb=y("ZodLazy",(e,t)=>{ks.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Mg(e,o,n,r),e.unwrap=()=>e._zod.def.getter()});Zb=y("ZodPromise",(e,t)=>{Is.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Hg(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Qb=y("ZodFunction",(e,t)=>{fs.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Pg(e,o,n,r)});In=y("ZodCustom",(e,t)=>{ws.init(e,t),B.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Sg(e,o,n,r)});r_=ig,o_=ag});function pC(e){ue({customError:e})}function vC(){return ue().customError}var yC,rm;var l_=g(()=>{Re();yC={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};(function(e){})(rm||(rm={}))});function IC(e,t){let o=e.$schema;if(o==="https://json-schema.org/draft/2020-12/schema")return"draft-2020-12";if(o==="http://json-schema.org/draft-07/schema#")return"draft-7";if(o==="http://json-schema.org/draft-04/schema#")return"draft-4";return t??"draft-2020-12"}function kC(e,t){if(!e.startsWith("#"))throw Error("External $ref is not supported, only local refs (#/...) are allowed");let o=e.slice(1).split("/").filter(Boolean);if(o.length===0)return t.rootSchema;let n=t.version==="draft-2020-12"?"$defs":"definitions";if(o[0]===n){let r=o[1];if(!r||!t.defs[r])throw Error(`Reference not found: ${e}`);return t.defs[r]}throw Error(`Reference not found: ${e}`)}function h_(e,t){if(e.not!==void 0){if(typeof e.not==="object"&&Object.keys(e.not).length===0)return P.never();throw Error("not is not supported in Zod (except { not: {} } for never)")}if(e.unevaluatedItems!==void 0)throw Error("unevaluatedItems is not supported");if(e.unevaluatedProperties!==void 0)throw Error("unevaluatedProperties is not supported");if(e.if!==void 0||e.then!==void 0||e.else!==void 0)throw Error("Conditional schemas (if/then/else) are not supported");if(e.dependentSchemas!==void 0||e.dependentRequired!==void 0)throw Error("dependentSchemas and dependentRequired are not supported");if(e.$ref){let r=e.$ref;if(t.refs.has(r))return t.refs.get(r);if(t.processing.has(r))return P.lazy(()=>{if(!t.refs.has(r))throw Error(`Circular reference not resolved: ${r}`);return t.refs.get(r)});t.processing.add(r);let i=kC(r,t),a=Te(i,t);return t.refs.set(r,a),t.processing.delete(r),a}if(e.enum!==void 0){let r=e.enum;if(t.version==="openapi-3.0"&&e.nullable===!0&&r.length===1&&r[0]===null)return P.null();if(r.length===0)return P.never();if(r.length===1)return P.literal(r[0]);if(r.every((a)=>typeof a==="string"))return P.enum(r);let i=r.map((a)=>P.literal(a));if(i.length<2)return i[0];return P.union([i[0],i[1],...i.slice(2)])}if(e.const!==void 0)return P.literal(e.const);let o=e.type;if(Array.isArray(o)){let r=o.map((i)=>{let a={...e,type:i};return h_(a,t)});if(r.length===0)return P.never();if(r.length===1)return r[0];return P.union(r)}if(!o)return P.any();let n;switch(o){case"string":{let r=P.string();if(e.format){let i=e.format;if(i==="email")r=r.check(P.email());else if(i==="uri"||i==="uri-reference")r=r.check(P.url());else if(i==="uuid"||i==="guid")r=r.check(P.uuid());else if(i==="date-time")r=r.check(P.iso.datetime());else if(i==="date")r=r.check(P.iso.date());else if(i==="time")r=r.check(P.iso.time());else if(i==="duration")r=r.check(P.iso.duration());else if(i==="ipv4")r=r.check(P.ipv4());else if(i==="ipv6")r=r.check(P.ipv6());else if(i==="mac")r=r.check(P.mac());else if(i==="cidr")r=r.check(P.cidrv4());else if(i==="cidr-v6")r=r.check(P.cidrv6());else if(i==="base64")r=r.check(P.base64());else if(i==="base64url")r=r.check(P.base64url());else if(i==="e164")r=r.check(P.e164());else if(i==="jwt")r=r.check(P.jwt());else if(i==="emoji")r=r.check(P.emoji());else if(i==="nanoid")r=r.check(P.nanoid());else if(i==="cuid")r=r.check(P.cuid());else if(i==="cuid2")r=r.check(P.cuid2());else if(i==="ulid")r=r.check(P.ulid());else if(i==="xid")r=r.check(P.xid());else if(i==="ksuid")r=r.check(P.ksuid())}if(typeof e.minLength==="number")r=r.min(e.minLength);if(typeof e.maxLength==="number")r=r.max(e.maxLength);if(e.pattern)r=r.regex(new RegExp(e.pattern));n=r;break}case"number":case"integer":{let r=o==="integer"?P.number().int():P.number();if(typeof e.minimum==="number")r=r.min(e.minimum);if(typeof e.maximum==="number")r=r.max(e.maximum);if(typeof e.exclusiveMinimum==="number")r=r.gt(e.exclusiveMinimum);else if(e.exclusiveMinimum===!0&&typeof e.minimum==="number")r=r.gt(e.minimum);if(typeof e.exclusiveMaximum==="number")r=r.lt(e.exclusiveMaximum);else if(e.exclusiveMaximum===!0&&typeof e.maximum==="number")r=r.lt(e.maximum);if(typeof e.multipleOf==="number")r=r.multipleOf(e.multipleOf);n=r;break}case"boolean":{n=P.boolean();break}case"null":{n=P.null();break}case"object":{let r={},i=e.properties||{},a=new Set(e.required||[]);for(let[h,u]of Object.entries(i)){let d=Te(u,t);r[h]=a.has(h)?d:d.optional()}if(e.propertyNames){let h=Te(e.propertyNames,t),u=e.additionalProperties&&typeof e.additionalProperties==="object"?Te(e.additionalProperties,t):P.any();if(Object.keys(r).length===0){n=P.record(h,u);break}let d=P.object(r).passthrough(),s=P.looseRecord(h,u);n=P.intersection(d,s);break}if(e.patternProperties){let h=e.patternProperties,u=Object.keys(h),d=[];for(let b of u){let m=Te(h[b],t),k=P.string().regex(new RegExp(b));d.push(P.looseRecord(k,m))}let s=[];if(Object.keys(r).length>0)s.push(P.object(r).passthrough());if(s.push(...d),s.length===0)n=P.object({}).passthrough();else if(s.length===1)n=s[0];else{let b=P.intersection(s[0],s[1]);for(let m=2;m<s.length;m++)b=P.intersection(b,s[m]);n=b}break}let c=P.object(r);if(e.additionalProperties===!1)n=c.strict();else if(typeof e.additionalProperties==="object")n=c.catchall(Te(e.additionalProperties,t));else n=c.passthrough();break}case"array":{let{prefixItems:r,items:i}=e;if(r&&Array.isArray(r)){let a=r.map((h)=>Te(h,t)),c=i&&typeof i==="object"&&!Array.isArray(i)?Te(i,t):void 0;if(c)n=P.tuple(a).rest(c);else n=P.tuple(a);if(typeof e.minItems==="number")n=n.check(P.minLength(e.minItems));if(typeof e.maxItems==="number")n=n.check(P.maxLength(e.maxItems))}else if(Array.isArray(i)){let a=i.map((h)=>Te(h,t)),c=e.additionalItems&&typeof e.additionalItems==="object"?Te(e.additionalItems,t):void 0;if(c)n=P.tuple(a).rest(c);else n=P.tuple(a);if(typeof e.minItems==="number")n=n.check(P.minLength(e.minItems));if(typeof e.maxItems==="number")n=n.check(P.maxLength(e.maxItems))}else if(i!==void 0){let a=Te(i,t),c=P.array(a);if(typeof e.minItems==="number")c=c.min(e.minItems);if(typeof e.maxItems==="number")c=c.max(e.maxItems);n=c}else n=P.array(P.any());break}default:throw Error(`Unsupported type: ${o}`)}if(e.description)n=n.describe(e.description);if(e.default!==void 0)n=n.default(e.default);return n}function Te(e,t){if(typeof e==="boolean")return e?P.any():P.never();let o=h_(e,t),n=e.type||e.enum!==void 0||e.const!==void 0;if(e.anyOf&&Array.isArray(e.anyOf)){let c=e.anyOf.map((u)=>Te(u,t)),h=P.union(c);o=n?P.intersection(o,h):h}if(e.oneOf&&Array.isArray(e.oneOf)){let c=e.oneOf.map((u)=>Te(u,t)),h=P.xor(c);o=n?P.intersection(o,h):h}if(e.allOf&&Array.isArray(e.allOf))if(e.allOf.length===0)o=n?o:P.any();else{let c=n?o:Te(e.allOf[0],t),h=n?0:1;for(let u=h;u<e.allOf.length;u++)c=P.intersection(c,Te(e.allOf[u],t));o=c}if(e.nullable===!0&&t.version==="openapi-3.0")o=P.nullable(o);if(e.readOnly===!0)o=P.readonly(o);let r={},i=["$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor"];for(let c of i)if(c in e)r[c]=e[c];let a=["contentEncoding","contentMediaType","contentSchema"];for(let c of a)if(c in e)r[c]=e[c];for(let c of Object.keys(e))if(!fC.has(c))r[c]=e[c];if(Object.keys(r).length>0)t.registry.add(o,r);return o}function u_(e,t){if(typeof e==="boolean")return e?P.any():P.never();let o=IC(e,t?.defaultTarget),n=e.$defs||e.definitions||{},r={version:o,defs:n,refs:new Map,processing:new Set,rootSchema:e,registry:t?.registry??fe};return Te(e,r)}var P,fC;var s_=g(()=>{tn();Vi();cn();hn();P={...ln,...qi,iso:Fr},fC=new Set(["$schema","$ref","$defs","definitions","$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor","type","enum","const","anyOf","oneOf","allOf","not","properties","required","additionalProperties","patternProperties","propertyNames","minProperties","maxProperties","items","prefixItems","additionalItems","minItems","maxItems","uniqueItems","contains","minContains","maxContains","minLength","maxLength","pattern","format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","multipleOf","description","default","contentEncoding","contentMediaType","contentSchema","unevaluatedItems","unevaluatedProperties","if","then","else","dependentSchemas","dependentRequired","nullable","readOnly"])});var om={};et(om,{string:()=>wC,number:()=>$C,date:()=>OC,boolean:()=>_C,bigint:()=>TC});function wC(e){return _d(Br,e)}function $C(e){return Nd(Hr,e)}function _C(e){return Rd(Mr,e)}function TC(e){return Kd(Jr,e)}function OC(e){return Zd(mn,e)}var d_=g(()=>{Re();hn()});var l={};et(l,{xor:()=>U$,xid:()=>c$,void:()=>N$,uuidv7:()=>Qw,uuidv6:()=>Zw,uuidv4:()=>Xw,uuid:()=>Yw,util:()=>_,url:()=>e$,uppercase:()=>Pr,unknown:()=>or,union:()=>Ia,undefined:()=>D$,ulid:()=>a$,uint64:()=>P$,uint32:()=>T$,tuple:()=>Pb,trim:()=>xr,treeifyError:()=>gh,transform:()=>wa,toUpperCase:()=>jr,toLowerCase:()=>zr,toJSONSchema:()=>Ji,templateLiteral:()=>X$,symbol:()=>A$,superRefine:()=>tm,success:()=>V$,stringbool:()=>i_,stringFormat:()=>v$,string:()=>Qi,strictObject:()=>j$,startsWith:()=>Dr,slugify:()=>Er,size:()=>er,setErrorMap:()=>pC,set:()=>G$,safeParseAsync:()=>tb,safeParse:()=>eb,safeEncodeAsync:()=>lb,safeEncode:()=>ab,safeDecodeAsync:()=>hb,safeDecode:()=>cb,registry:()=>pi,regexes:()=>Ve,regex:()=>Or,refine:()=>em,record:()=>Ab,readonly:()=>Vb,property:()=>Bi,promise:()=>Z$,prettifyError:()=>bh,preprocess:()=>c_,prefault:()=>Kb,positive:()=>Ui,pipe:()=>gn,partialRecord:()=>F$,parseAsync:()=>Qg,parse:()=>Zg,overwrite:()=>Qe,optional:()=>sn,object:()=>z$,number:()=>db,nullish:()=>q$,nullable:()=>dn,null:()=>pb,normalize:()=>Cr,nonpositive:()=>Fi,nonoptional:()=>Bb,nonnegative:()=>Ki,never:()=>fa,negative:()=>Ri,nativeEnum:()=>H$,nanoid:()=>o$,nan:()=>W$,multipleOf:()=>jt,minSize:()=>ct,minLength:()=>vt,mime:()=>Nr,meta:()=>o_,maxSize:()=>Et,maxLength:()=>tr,map:()=>B$,mac:()=>u$,lte:()=>Ue,lt:()=>it,lowercase:()=>Sr,looseRecord:()=>K$,looseObject:()=>E$,locales:()=>en,literal:()=>M$,length:()=>rr,lazy:()=>Xb,ksuid:()=>l$,keyof:()=>x$,jwt:()=>p$,json:()=>a_,iso:()=>Fr,ipv6:()=>s$,ipv4:()=>h$,intersection:()=>Ob,int64:()=>S$,int32:()=>_$,int:()=>ea,instanceof:()=>n_,includes:()=>Ar,httpUrl:()=>t$,hostname:()=>f$,hex:()=>I$,hash:()=>k$,guid:()=>Ww,gte:()=>Ae,gt:()=>at,globalRegistry:()=>fe,getErrorMap:()=>vC,function:()=>Q$,fromJSONSchema:()=>u_,formatError:()=>Go,float64:()=>$$,float32:()=>w$,flattenError:()=>Bo,file:()=>J$,exactOptional:()=>jb,enum:()=>ka,endsWith:()=>Lr,encodeAsync:()=>nb,encode:()=>rb,emoji:()=>r$,email:()=>Vw,e164:()=>y$,discriminatedUnion:()=>R$,describe:()=>r_,decodeAsync:()=>ib,decode:()=>ob,date:()=>C$,custom:()=>t_,cuid2:()=>i$,cuid:()=>n$,core:()=>ft,config:()=>ue,coerce:()=>om,codec:()=>Y$,clone:()=>Pe,cidrv6:()=>g$,cidrv4:()=>d$,check:()=>e_,catch:()=>Mb,boolean:()=>gb,bigint:()=>O$,base64url:()=>m$,base64:()=>b$,array:()=>yn,any:()=>L$,_function:()=>Q$,_default:()=>Rb,_ZodString:()=>ta,ZodXor:()=>$b,ZodXID:()=>la,ZodVoid:()=>kb,ZodUnknown:()=>fb,ZodUnion:()=>vn,ZodUndefined:()=>mb,ZodUUID:()=>lt,ZodURL:()=>bn,ZodULID:()=>ca,ZodType:()=>B,ZodTuple:()=>Sb,ZodTransform:()=>xb,ZodTemplateLiteral:()=>Wb,ZodSymbol:()=>bb,ZodSuccess:()=>Gb,ZodStringFormat:()=>ee,ZodString:()=>Br,ZodSet:()=>Lb,ZodRecord:()=>fn,ZodRealError:()=>ze,ZodReadonly:()=>qb,ZodPromise:()=>Zb,ZodPrefault:()=>Fb,ZodPipe:()=>Ta,ZodOptional:()=>$a,ZodObject:()=>pn,ZodNumberFormat:()=>nr,ZodNumber:()=>Hr,ZodNullable:()=>Eb,ZodNull:()=>yb,ZodNonOptional:()=>_a,ZodNever:()=>Ib,ZodNanoID:()=>na,ZodNaN:()=>Jb,ZodMap:()=>Db,ZodMAC:()=>sb,ZodLiteral:()=>Nb,ZodLazy:()=>Yb,ZodKSUID:()=>ha,ZodJWT:()=>pa,ZodIssueCode:()=>yC,ZodIntersection:()=>Tb,ZodISOTime:()=>Xi,ZodISODuration:()=>Zi,ZodISODateTime:()=>Wi,ZodISODate:()=>Yi,ZodIPv6:()=>sa,ZodIPv4:()=>ua,ZodGUID:()=>un,ZodFunction:()=>Qb,ZodFirstPartyTypeKind:()=>rm,ZodFile:()=>Cb,ZodExactOptional:()=>zb,ZodError:()=>bC,ZodEnum:()=>Kr,ZodEmoji:()=>oa,ZodEmail:()=>ra,ZodE164:()=>ya,ZodDiscriminatedUnion:()=>_b,ZodDefault:()=>Ub,ZodDate:()=>mn,ZodCustomStringFormat:()=>Gr,ZodCustom:()=>In,ZodCodec:()=>Oa,ZodCatch:()=>Hb,ZodCUID2:()=>aa,ZodCUID:()=>ia,ZodCIDRv6:()=>ga,ZodCIDRv4:()=>da,ZodBoolean:()=>Mr,ZodBigIntFormat:()=>va,ZodBigInt:()=>Jr,ZodBase64URL:()=>ma,ZodBase64:()=>ba,ZodArray:()=>wb,ZodAny:()=>vb,TimePrecision:()=>Od,NEVER:()=>rh,$output:()=>Id,$input:()=>kd,$brand:()=>oh});var nm=g(()=>{Re();Re();Ns();Re();an();s_();fd();cn();cn();d_();hn();Vi();Xg();ub();l_();ue(Yo())});var Ie=g(()=>{nm();nm()});var D=(e)=>{let t={operationId:e.operationId,backend:e.backend,pagination:e.pagination,async:e.async,examples:e.examples??[]};return{...e,contract:tp.$meta(t).route({method:e.route.method,path:e.route.path,tags:e.route.tags,operationId:e.operationId,description:e.description,successStatus:e.route.successStatus,successDescription:e.route.successDescription,deprecated:e.route.deprecated,inputStructure:e.route.inputStructure}).input(e.input).output(e.output)}};var Le=g(()=>{al()});var g_,im,SC,PC,b_,am,cm,m_,y_,Sa,p_,v_,qr,f_,I_,Pa,k_,w_,Vr,$_,__,Aa,T_,O_,Da,S_,P_,La,A_,D_,Na,L_,N_,Ca,AC;var lm=g(()=>{th();Ie();Le();g_=mr,im=l.enum(g_),SC=l.enum(["pending","provisioning","active","error"]),PC=l.object({name:l.string().describe("Field name used as the JSON key in metadata."),type:l.string().describe('Zod type name, e.g. "string", "boolean", "enum".'),required:l.boolean().describe("Whether the field is required."),sensitive:l.boolean().describe("Whether the field contains a secret and will be encrypted."),description:l.string().nullable().describe("Human-readable description of the field.")}),b_=l.object({id:l.string().describe("Data source type identifier."),name:l.string().describe("Human-readable display name."),metadataFields:l.array(PC).describe("Fields required in the metadata object when creating a connection."),setupSkill:l.string().nullable().describe("Markdown setup skill for AI agents. Null when no skill is available.")}),am=l.object({id:l.string().uuid(),projectId:l.string().uuid(),dataSourceType:im,displayName:l.string().nullable(),createdAt:l.string().datetime()}),cm=l.object({id:l.string().uuid(),connectionId:l.string().uuid(),displayName:l.string(),config:l.record(l.string(),l.unknown()),status:SC,errorMessage:l.string().nullable(),createdAt:l.string().datetime()}),m_=l.object({}),y_=l.object({types:l.array(b_)}),Sa=D({operationId:"dataSources.listTypes",description:"List all supported data source types with their metadata requirements.",backend:"api",route:{method:"GET",path:"/data-sources/types",tags:["Data Sources"]},input:m_,output:y_,pagination:"none",async:"sync"}),p_=l.object({projectId:l.string().uuid().optional().describe("Project to list connections for. Auto-filled from SDK context when omitted."),dataSourceType:im.optional().describe("Filter connections by data source type.")}),v_=l.object({connections:l.array(am)}),qr=D({operationId:"dataSources.listConnections",description:"List data source connections within one project.",backend:"api",route:{method:"GET",path:"/data-sources/connections",tags:["Data Sources"]},input:p_,output:v_,pagination:"none",async:"sync"}),f_=l.object({connectionId:l.string().uuid().describe("Connection ID to fetch.")}),I_=l.object({connection:am}),Pa=D({operationId:"dataSources.getConnection",description:"Get one data source connection by ID.",backend:"api",route:{method:"GET",path:"/data-sources/connections/{connectionId}",tags:["Data Sources"]},input:f_,output:I_,pagination:"none",async:"sync"}),k_=l.object({projectId:l.string().uuid().optional().describe("Project to create the connection in. Auto-filled from SDK context when omitted."),dataSourceType:im.describe("Data source type identifier."),metadata:l.record(l.string(),l.unknown()).describe("Platform-specific credentials. Fields vary by data source type."),displayName:l.string().optional().describe("Optional human-readable name for this connection.")}),w_=l.object({connectionId:l.string().uuid().describe("ID of the created connection."),publicKey:l.string().describe("Auto-generated public API key for this connection. Store this securely — it is only shown once.")}),Vr=D({operationId:"dataSources.createConnection",description:"Create a new data source connection. Validates credentials, encrypts sensitive fields, and auto-generates a public API key.",backend:"api",route:{method:"POST",path:"/data-sources/connections",successStatus:201,tags:["Data Sources"]},input:k_,output:w_,pagination:"none",async:"sync"}),$_=l.object({connectionId:l.string().uuid().describe("Connection ID to list streams for.")}),__=l.object({streams:l.array(cm)}),Aa=D({operationId:"dataSources.listStreams",description:"List streams for a data source connection.",backend:"api",route:{method:"GET",path:"/data-sources/connections/{connectionId}/streams",tags:["Data Sources"]},input:$_,output:__,pagination:"none",async:"sync"}),T_=l.object({connectionId:l.string().uuid().describe("Connection ID to create the stream under."),displayName:l.string().describe("Resource name, e.g. service or app name."),config:l.record(l.string(),l.unknown()).describe("Platform-specific stream configuration.")}),O_=l.object({streamId:l.string().uuid().describe("ID of the created stream."),publicKey:l.string().optional().describe("Auto-generated public API key for this stream. Returned only when the data source mints a per-stream key (manual-only sources). Store this securely — it is only shown once.")}),Da=D({operationId:"dataSources.createStream",description:"Create a new stream for a data source connection. Triggers async provisioning.",backend:"api",route:{method:"POST",path:"/data-sources/connections/{connectionId}/streams",successStatus:201,tags:["Data Sources"]},input:T_,output:O_,pagination:"none",async:"sync"}),S_=l.object({streamId:l.string().uuid().describe("Stream ID to fetch.")}),P_=l.object({stream:cm}),La=D({operationId:"dataSources.getStream",description:"Get one data source stream by ID. Use to poll provisioning status.",backend:"api",route:{method:"GET",path:"/data-sources/streams/{streamId}",tags:["Data Sources"]},input:S_,output:P_,pagination:"none",async:"sync"}),A_=l.object({streamId:l.string().uuid().describe("Stream ID to delete.")}),D_=l.object({success:l.boolean()}),Na=D({operationId:"dataSources.deleteStream",description:"Delete a data source stream. For manual-only sources where streams are stored as connection API keys, deletes the underlying public key.",backend:"api",route:{method:"DELETE",path:"/data-sources/streams/{streamId}",successStatus:204,tags:["Data Sources"]},input:A_,output:D_,pagination:"none",async:"sync"}),L_=l.object({connectionId:l.string().uuid().describe("Connection ID to disconnect.")}),N_=l.object({success:l.boolean(),connectionTeardownError:l.string().nullable().describe("Null when teardown succeeded; error message when remote cleanup failed.")}),Ca=D({operationId:"dataSources.disconnectConnection",description:"Disconnect a data source connection. Soft-deletes the connection, all associated streams, and all associated API keys. Triggers async backend teardown when the source supports it.",backend:"api",route:{method:"DELETE",path:"/data-sources/connections/{connectionId}",successStatus:200,tags:["Data Sources"]},input:L_,output:N_,pagination:"none",async:"sync"}),AC={listTypes:Sa.contract,listConnections:qr.contract,getConnection:Pa.contract,createConnection:Vr.contract,disconnectConnection:Ca.contract,listStreams:Aa.contract,createStream:Da.contract,getStream:La.contract,deleteStream:Na.contract}});var It,C_,kn,x_,hm,z_,um,j_,E_,DC,LC,U_,R_,F_,K_,B_,G_,H_,M_,J_,q_,V_,Wr,xa,za,ja,Ea,Ua,Ra,Fa,Ka,NC;var sm=g(()=>{Ie();Le();It=l.object({id:l.string().uuid(),projectId:l.string().uuid(),name:l.string(),whatHappened:l.string(),whyItHappened:l.string().nullable(),howToFix:l.string().nullable(),status:l.enum(["open","resolved","ignored"]),severity:l.enum(["low","medium","high","critical"]),statusComponentId:l.string().uuid().nullable(),createdAt:l.string().datetime(),resolvedAt:l.string().datetime().nullable(),mutedAt:l.string().datetime().nullable(),muteHitCount:l.number().int().nonnegative(),lastActivityAt:l.string().datetime().nullable(),lastDeliveredAt:l.string().datetime().nullable()}),C_=It.extend({delivery:l.record(l.string(),l.unknown()).nullable().optional()}),kn=l.object({projectId:l.string().uuid().optional().describe("Project to create the issue in. Auto-filled from CLI and SDK context when omitted."),name:l.string().trim().min(1).optional().describe("Stable issue name for indexing and mute matching. When omitted, the name is derived from whatHappened."),whatHappened:l.string().trim().min(1,"What happened cannot be empty").describe("Concise summary of what happened, including the user-visible impact."),whyItHappened:l.string().trim().min(1,"Why it happened cannot be empty").describe("Root cause or best current hypothesis."),howToFix:l.string().trim().min(1,"How to fix it cannot be empty").describe("Remediation guidance describing the next steps."),severity:l.enum(["low","medium","high","critical"]).default("medium").describe("Issue severity used for prioritization and triage."),statusComponentId:l.string().uuid().optional().describe("Optional status component ID to link to the issue.")}),x_=l.object({issue:It}),hm=l.object({projectId:l.string().uuid().optional().describe("Project to list issues for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of issues to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),status:l.enum(["open","resolved","ignored"]).optional().describe("Filter by issue status."),severity:l.enum(["low","medium","high","critical"]).optional().describe("Filter by severity."),statusComponentId:l.string().uuid().optional().describe("Filter by status component ID.")}),z_=l.object({issues:l.array(It),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),um=hm.extend({name:l.string().trim().optional().describe("Case-insensitive partial match on issue name."),includeDeliveryMetadata:l.union([l.boolean(),l.stringbool()]).default(!1).describe("When true, include raw delivery metadata in each issue.")}),j_=l.object({issues:l.array(C_),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),E_=um.omit({limit:!0,cursor:!0,includeDeliveryMetadata:!0}),DC=l.object({open:l.number().int().nonnegative(),resolved:l.number().int().nonnegative(),ignored:l.number().int().nonnegative()}),LC=l.object({low:l.number().int().nonnegative(),medium:l.number().int().nonnegative(),high:l.number().int().nonnegative(),critical:l.number().int().nonnegative()}),U_=l.object({total:l.number().int().nonnegative(),byStatus:DC,bySeverity:LC,filters:l.object({name:l.string().nullable(),status:l.enum(["open","resolved","ignored"]).nullable(),severity:l.enum(["low","medium","high","critical"]).nullable(),statusComponentId:l.string().uuid().nullable()})}),R_=l.object({issueId:l.string().uuid().describe("Issue ID to retrieve.")}),F_=l.object({issue:It}),K_=l.object({issueId:l.string().uuid().describe("Issue ID to resolve.")}),B_=l.object({issue:It}),G_=l.object({issueId:l.string().uuid().describe("Issue ID to ignore.")}),H_=l.object({issue:It}),M_=l.object({issueId:l.string().uuid().describe("Issue ID to mute.")}),J_=l.object({issue:It}),q_=l.object({issueId:l.string().uuid().describe("Issue ID to unmute.")}),V_=l.object({issue:It}),Wr=D({operationId:"issues.create",description:"Create an issue in a project.",backend:"api",route:{method:"POST",path:"/issues",tags:["Issues"],successStatus:201},input:kn,output:x_,pagination:"none",async:"sync"}),xa=D({operationId:"issues.list",description:"List issues in a project, optionally filtered by status and severity.",backend:"api",route:{method:"GET",path:"/issues",tags:["Issues"]},input:hm,output:z_,pagination:"cursor",async:"sync"}),za=D({operationId:"issues.search",description:"Search issues in a project by name, status, and severity.",backend:"api",route:{method:"GET",path:"/issues/search",tags:["Issues"]},input:um,output:j_,pagination:"cursor",async:"sync"}),ja=D({operationId:"issues.count",description:"Count issues in a project with status and severity breakdowns.",backend:"api",route:{method:"GET",path:"/issues/count",tags:["Issues"]},input:E_,output:U_,pagination:"none",async:"sync"}),Ea=D({operationId:"issues.get",description:"Get a single issue by ID.",backend:"api",route:{method:"GET",path:"/issues/{issueId}",tags:["Issues"]},input:R_,output:F_,pagination:"none",async:"sync"}),Ua=D({operationId:"issues.resolve",description:"Resolve an open issue.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/resolve",tags:["Issues"]},input:K_,output:B_,pagination:"none",async:"sync"}),Ra=D({operationId:"issues.ignore",description:"Ignore an open issue.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/ignore",tags:["Issues"]},input:G_,output:H_,pagination:"none",async:"sync"}),Fa=D({operationId:"issues.mute",description:"Mute an issue, suppressing future re-fires without changing status.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/mute",tags:["Issues"]},input:M_,output:J_,pagination:"none",async:"sync"}),Ka=D({operationId:"issues.unmute",description:"Unmute an issue, preserving its current status.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/unmute",tags:["Issues"]},input:q_,output:V_,pagination:"none",async:"sync"}),NC={count:ja.contract,create:Wr.contract,list:xa.contract,search:za.contract,get:Ea.contract,resolve:Ua.contract,ignore:Ra.contract,mute:Fa.contract,unmute:Ka.contract}});var Ba,W_,Ga,Ha,Y_,X_,Z_,Q_,Ma,dm,eT,tT,rT,oT,nT,iT,aT,cT,lT,hT,uT,sT,Yr,Xr,Zr,Qr,eo,Ja,qa,Va,Wa,Ya,CC,xC;var gm=g(()=>{Ie();Le();Ba=/^[a-zA-Z0-9\s\-_]+$/,W_=l.object({id:l.string().uuid(),name:l.string(),expiresAt:l.string().datetime().nullable(),lastUsedAt:l.string().datetime().nullable(),createdAt:l.string().datetime()}),Ga=W_.extend({projectId:l.string().uuid(),dataSourceConnectionId:l.string().uuid().nullable().describe("Linked data source connection ID when this key is scoped to one data source."),deactivatedAt:l.string().datetime().nullable().describe("Timestamp when this public key was deactivated.")}),Ha=W_.extend({projectId:l.string().uuid().nullable()}),Y_=l.object({projectId:l.string().uuid().optional().describe("Project to list keys for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),X_=l.object({publicKeys:l.array(Ga),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),Z_=l.object({secretKeys:l.array(Ha),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),Q_=l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),keyId:l.string().uuid().describe("Key ID to fetch.")}),Ma=l.object({publicKey:Ga}),dm=l.object({secretKey:Ha}),eT=l.object({projectId:l.string().uuid().optional().describe("Project to create the key in. Auto-filled from CLI and SDK context when omitted."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Ba,"Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),expiresAt:l.string().datetime().optional().describe("Optional expiration timestamp for the key.")}),tT=l.object({publicKey:Ga.extend({value:l.string()})}),rT=l.object({secretKey:Ha.extend({value:l.string()})}),oT=l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),keyId:l.string().uuid().describe("Key ID to update."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Ba,"Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),expiresAt:l.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")}),nT=l.object({params:l.object({keyId:l.string().uuid().describe("Public key ID to deactivate.")}),query:l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted.")})}).transform(({params:e,query:t})=>({...t,...e})),iT=Ma,aT=l.void(),cT=l.object({limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),lT=l.object({keyId:l.string().uuid().describe("Key ID to fetch.")}),hT=l.object({projectId:l.string().uuid().optional().describe("Project to scope this key to. When set, the key can only access resources within this project. Omit for organization-wide access."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Ba,"Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),expiresAt:l.string().datetime().optional().describe("Optional expiration timestamp for the key.")}),uT=l.object({keyId:l.string().uuid().describe("Key ID to update."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Ba,"Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),expiresAt:l.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")}),sT=l.object({params:l.object({keyId:l.string().uuid().describe("Key ID to delete.")})}).transform(({params:e})=>({...e})),Yr=D({operationId:"publicKeys.list",description:"List public keys within one project.",backend:"api",route:{method:"GET",path:"/public-keys",tags:["Public Keys"]},input:Y_,output:X_,pagination:"cursor",async:"sync",examples:[{name:"list-public-keys",input:{projectId:"11111111-1111-4111-8111-111111111111",limit:25},output:{publicKeys:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),Xr=D({operationId:"publicKeys.get",description:"Get one public key within one project.",backend:"api",route:{method:"GET",path:"/public-keys/{keyId}",tags:["Public Keys"]},input:Q_,output:Ma,pagination:"none",async:"sync",examples:[{name:"get-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",keyId:"22222222-2222-4222-8222-222222222222"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Zr=D({operationId:"publicKeys.create",description:"Create one public key within one project.",backend:"api",route:{method:"POST",path:"/public-keys",successStatus:201,tags:["Public Keys"]},input:eT,output:tT,pagination:"none",async:"sync",examples:[{name:"create-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z",value:"sazabi_public_example"}}}]}),Qr=D({operationId:"publicKeys.update",description:"Update one public key within one project.",backend:"api",route:{method:"PATCH",path:"/public-keys/{keyId}",tags:["Public Keys"]},input:oT,output:Ma,pagination:"none",async:"sync",examples:[{name:"rename-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",keyId:"22222222-2222-4222-8222-222222222222",name:"Updated CLI forwarder"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"Updated CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),eo=D({operationId:"publicKeys.deactivate",description:"Deactivate one public key within one project. Existing successful intake-auth cache entries may continue to authenticate until their current TTL expires.",backend:"api",route:{method:"POST",path:"/public-keys/{keyId}/deactivate",tags:["Public Keys"],inputStructure:"detailed"},input:nT,output:iT,pagination:"none",async:"sync"}),Ja=D({operationId:"secretKeys.list",description:"List secret keys within the organization.",backend:"api",route:{method:"GET",path:"/secret-keys",tags:["Secret Keys"]},input:cT,output:Z_,pagination:"cursor",async:"sync",examples:[{name:"list-secret-keys",input:{limit:25},output:{secretKeys:[{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),qa=D({operationId:"secretKeys.get",description:"Get one secret key within the organization.",backend:"api",route:{method:"GET",path:"/secret-keys/{keyId}",tags:["Secret Keys"]},input:lT,output:dm,pagination:"none",async:"sync",examples:[{name:"get-secret-key",input:{keyId:"33333333-3333-4333-8333-333333333333"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Va=D({operationId:"secretKeys.create",description:"Create one secret key within the organization.",backend:"api",route:{method:"POST",path:"/secret-keys",successStatus:201,tags:["Secret Keys"]},input:hT,output:rT,pagination:"none",async:"sync",examples:[{name:"create-secret-key",input:{name:"CI agent"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z",value:"sazabi_secret_example"}}}]}),Wa=D({operationId:"secretKeys.update",description:"Update one secret key within the organization.",backend:"api",route:{method:"PATCH",path:"/secret-keys/{keyId}",tags:["Secret Keys"]},input:uT,output:dm,pagination:"none",async:"sync",examples:[{name:"rename-secret-key",input:{keyId:"33333333-3333-4333-8333-333333333333",name:"Updated CI agent"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"Updated CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Ya=D({operationId:"secretKeys.delete",description:"Delete one secret key within the organization.",backend:"api",route:{method:"DELETE",path:"/secret-keys/{keyId}",successStatus:204,tags:["Secret Keys"],inputStructure:"detailed"},input:sT,output:aT,pagination:"none",async:"sync"}),CC={list:Yr.contract,get:Xr.contract,create:Zr.contract,update:Qr.contract,deactivate:eo.contract},xC={list:Ja.contract,get:qa.contract,create:Va.contract,update:Wa.contract,delete:Ya.contract}});var dT,gT,bT,mT,yT,pT,vT,Xa,fT,IT,kT,bm,wT,$T,_T,TT,OT,ST,PT,AT,zC,DT,LT,to,ro,oo,no,io,jC;var mm=g(()=>{Ie();Le();dT=l.enum(["eq","neq","in","contains","starts_with","gt","gte","lt","lte","between","exists"]).describe("Filter operator: 'eq' (equals), 'neq' (not equals), 'in' (in array), 'contains' (substring), 'starts_with' (prefix), 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal), 'between' (range), 'exists' (field exists)"),gT=l.enum(["any","all","phrase"]).describe("Search mode: 'any' (match any token), 'all' (match all tokens), 'phrase' (exact phrase match)"),bT=l.object({query:l.string().min(1,"Search query must be at least 1 character").max(500,"Search query must be at most 500 characters").describe("Search query text (1-500 characters)"),fields:l.array(l.string()).optional().describe("Fields to search in (defaults to backend allowlist)"),mode:gT.optional().default("all").describe("Token matching mode")}),mT=l.object({field:l.string().describe("Field name to filter on"),op:dT.describe("Filter operator"),value:l.union([l.string(),l.number(),l.boolean(),l.array(l.union([l.string(),l.number()])),l.object({from:l.string(),to:l.string()})]).describe("Filter value (type depends on operator)")}).superRefine((e,t)=>{if(e.op==="in"&&!Array.isArray(e.value))t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be an array when op is 'in'",path:["value"]});if(e.op==="between"){let o=e.value;if(!(typeof o==="object"&&o!==null&&("from"in o)&&("to"in o)))t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be an object with from/to when op is 'between'",path:["value"]})}if(e.op==="exists"&&typeof e.value!=="boolean")t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be boolean when op is 'exists'",path:["value"]})}),yT=l.object({field:l.string().describe("Field name to sort by"),direction:l.enum(["asc","desc"]).default("desc").describe("Sort direction: 'asc' for ascending, 'desc' for descending")}),pT=l.object({limit:l.number().int().min(1,"Limit must be at least 1").max(1000,"Limit must be at most 1000").default(50).describe("Maximum number of rows to return"),cursor:l.string().optional().describe("Opaque cursor from previous response for pagination")}),vT=l.object({projectId:l.string().uuid().optional().describe("Project to query logs for. Auto-filled from CLI and SDK context when omitted."),search:bT.optional().describe("Full-text search configuration"),filters:l.array(mT).optional().describe("Structured filter clauses (ANDed together)"),select:l.array(l.string()).optional().describe("Fields to return (defaults to backend default set)"),sort:yT.optional().describe("Sort configuration (defaults to timestamp desc)"),pagination:pT.optional().describe("Pagination configuration")}),Xa=l.enum(["clickhouse","better-stack","datadog","gcp","axiom","cloudwatch","sentry","posthog","mezmo"]),fT=l.enum(["native","external"]),IT=l.object({projectId:l.string().uuid().optional().describe("Project to inspect. Auto-filled from CLI and SDK context when omitted.")}),kT=l.object({backend:l.object({id:Xa,name:l.string(),kind:fT}).describe("Active log backend for the project"),features:l.array(l.string()).describe("Backend features registered on the server"),commands:l.array(l.enum(["schema","query","volume","patterns","nativeQuery"])).describe("CLI/API commands available for this backend"),queryableFields:l.array(l.string()).describe("Fields accepted by the normalized logs.query contract"),searchableFields:l.array(l.string()).describe("Fields accepted by logs.query full-text search"),observedServiceNames:l.array(l.string()).describe("Recently observed service names for this project"),observedAttributeKeys:l.array(l.string()).describe("Recently observed log attribute keys for this project"),schemaContext:l.record(l.string(),l.any()).optional().describe("Backend-specific schema guidance and examples")}),bm=l.enum(["1m","5m","15m","1h"]),wT=l.enum(["service_name","severity_text","environment"]),$T=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),startDate:l.string().datetime({offset:!0}),endDate:l.string().datetime({offset:!0}),interval:bm.optional().describe("Aggregation bucket size for the volume series"),groupBy:wT.optional().describe("Optional field to split volume series by"),filters:l.object({service_name:l.string().optional(),severity_text:l.string().optional(),environment:l.string().optional()}).optional()}).refine((e)=>new Date(e.startDate)<new Date(e.endDate),{message:"startDate must be before endDate",path:["endDate"]}),_T=l.object({total:l.number().nonnegative(),startDate:l.string().datetime({offset:!0}),endDate:l.string().datetime({offset:!0}),interval:bm,series:l.array(l.object({group:l.string(),total:l.number().nonnegative(),points:l.array(l.object({bucket:l.string(),count:l.number().nonnegative()}))}))}),TT=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),query:l.string().min(1).max(500).optional().describe("Optional text to match against normalized log patterns"),severity:l.string().optional().describe("Optional severity_text value, for example ERROR"),startDate:l.string().datetime({offset:!0}).optional().describe("Optional earliest last-seen timestamp"),endDate:l.string().datetime({offset:!0}).optional().describe("Optional latest last-seen timestamp"),limit:l.number().int().min(1).max(100).default(25).describe("Maximum number of log patterns to return")}).refine((e)=>!e.startDate||!e.endDate||new Date(e.startDate)<new Date(e.endDate),{message:"startDate must be before endDate",path:["endDate"]}),OT=l.object({fingerprint:l.string(),pattern:l.string(),severity:l.string().nullable(),occurrences:l.number().nonnegative(),firstSeen:l.string().nullable(),lastSeen:l.string().nullable(),representativeId:l.string().nullable()}),ST=l.object({patterns:l.array(OT),meta:l.object({backendId:Xa,count:l.number().int().nonnegative(),took:l.number().nonnegative()})}),PT=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),query:l.string().min(1,"Query cannot be empty").max(1e4,"Query must be 10000 characters or less")}),AT=l.object({result:l.string().describe("Backend-formatted query result"),format:l.literal("text"),meta:l.object({backendId:Xa,took:l.number().nonnegative(),truncated:l.boolean()})}),zC=l.object({cursor:l.string().nullable().describe("Cursor for next page (null if no more results)"),hasMore:l.boolean().describe("Whether more results are available")}),DT=l.object({count:l.number().int().nonnegative().describe("Number of log rows returned in this response"),took:l.number().nonnegative().describe("Query execution time in milliseconds")}),LT=l.object({data:l.array(l.record(l.string(),l.any())).describe("Array of log rows with selected fields"),nextCursor:l.string().nullable().describe("Pass as 'cursor' in the next query to fetch the next page. Null when there are no more results."),meta:DT.describe("Query execution metadata")}),to=D({operationId:"logs.query",description:"Query logs within one project via the platform API proxy.",backend:"api",route:{method:"POST",path:"/logs/query",tags:["Logs"]},input:vT,output:LT,pagination:"cursor",async:"sync"}),ro=D({operationId:"logs.schema",description:"Describe the active log backend, supported commands, query fields, and schema context.",backend:"api",route:{method:"POST",path:"/logs/schema",tags:["Logs"]},input:IT,output:kT,pagination:"none",async:"sync"}),oo=D({operationId:"logs.volume",description:"Query pre-aggregated log volume for one project.",backend:"api",route:{method:"POST",path:"/logs/volume",tags:["Logs"]},input:$T,output:_T,pagination:"none",async:"sync"}),no=D({operationId:"logs.patterns",description:"Query normalized log patterns for discovery workflows.",backend:"api",route:{method:"POST",path:"/logs/patterns",tags:["Logs"]},input:TT,output:ST,pagination:"none",async:"sync"}),io=D({operationId:"logs.nativeQuery",description:"Run the active backend's native read-only query language through server-side guardrails.",backend:"api",route:{method:"POST",path:"/logs/native-query",tags:["Logs"]},input:PT,output:AT,pagination:"none",async:"sync"}),jC={query:to.contract,schema:ro.contract,volume:oo.contract,patterns:no.contract,nativeQuery:io.contract}});var ao,EC,UC,RC,FC,KC,BC,GC,ym,hJ;var Za=g(()=>{Ie();Le();ao=l.enum(["admin","member"]),EC=l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional(),role:ao}),UC=l.object({id:l.string().min(1),name:l.string().nullable(),email:l.string().email()}),RC=l.object({credentialType:l.literal("user"),user:UC,activeOrganizationId:l.string().min(1).nullable(),organizations:l.array(EC).describe("Organizations the user belongs to, including membership role.")}),FC=l.object({credentialType:l.literal("secret"),organization:l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional()}),keyName:l.string()}),KC=l.object({credentialType:l.literal("partner"),superorganization:l.object({id:l.string().uuid(),name:l.string()})}),BC=l.object({}),GC=l.discriminatedUnion("credentialType",[RC,FC,KC]),ym=D({operationId:"me.get",description:"Return the identity and available context for the current credential.",backend:"api",route:{method:"GET",path:"/me",tags:["Auth"]},input:BC,output:GC,pagination:"none",async:"sync"}),hJ=ym.contract});var NT,HC,MC,JC,qC,VC,WC,pm,vm,fm,bJ;var CT=g(()=>{Ie();Le();Za();NT=l.object({membershipId:l.string().min(1).describe("Organization membership record ID."),userId:l.string().min(1).describe("User ID for the organization member."),name:l.string().nullable().describe("Display name for the member, when available."),email:l.string().email().describe("Email address for the member."),imageUrl:l.string().nullable().describe("Profile image URL for the member, when available."),role:ao.describe("Organization role."),createdAt:l.string().datetime().describe("When the membership was created.")}),HC=l.object({organizationId:l.string().min(1).optional().describe("Organization to list members for. Auto-filled from CLI and SDK context when omitted.")}),MC=l.object({members:l.array(NT).describe("Members visible within the selected organization.")}),JC=l.object({organizationId:l.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted."),userId:l.string().min(1).describe("User ID of the member to update."),role:ao.describe("Role to assign.")}),qC=l.object({member:NT.describe("Updated organization member.")}),VC=l.object({params:l.object({userId:l.string().min(1).describe("User ID of the member to remove.")}),query:l.object({organizationId:l.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted.")})}).transform(({params:e,query:t})=>({...t,...e})),WC=l.object({removedUserId:l.string().min(1).describe("User ID removed from the organization.")}),pm=D({operationId:"members.list",description:"List members in an organization.",backend:"api",route:{method:"GET",path:"/members",tags:["Members"]},input:HC,output:MC,pagination:"none",async:"sync",examples:[{name:"organization-members",input:{organizationId:"organization-123"},output:{members:[{membershipId:"membership-123",userId:"user-123",name:"Alex Admin",email:"alex@example.com",imageUrl:null,role:"admin",createdAt:"2026-01-01T00:00:00.000Z"}]}}]}),vm=D({operationId:"members.updateRole",description:"Update a member's organization role.",backend:"api",route:{method:"PATCH",path:"/members/{userId}/role",tags:["Members"]},input:JC,output:qC,pagination:"none",async:"sync",examples:[{name:"promote-member",input:{organizationId:"organization-123",userId:"user-456",role:"admin"},output:{member:{membershipId:"membership-456",userId:"user-456",name:"Mina Member",email:"mina@example.com",imageUrl:null,role:"admin",createdAt:"2026-01-01T00:00:00.000Z"}}}]}),fm=D({operationId:"members.remove",description:"Remove a member from an organization.",backend:"api",route:{method:"DELETE",path:"/members/{userId}",tags:["Members"],inputStructure:"detailed"},input:VC,output:WC,pagination:"none",async:"sync"}),bJ={list:pm.contract,updateRole:vm.contract,remove:fm.contract}});var xT,zT,YC,XC,ZC,QC,ex,wn,tx,Im,km,wm,vJ;var Qa=g(()=>{Ie();Le();xT=l.enum(["processing","completed","aborted","error"]),zT=l.object({id:l.string().uuid(),threadId:l.string().uuid(),userMessageId:l.string().uuid().nullable(),assistantMessageId:l.string().uuid().nullable(),parentRunId:l.string().uuid().nullable(),workflowRunId:l.string().nullable(),status:xT,source:l.enum(["web","api","mcp","slack","github","agent","cli","automation"]),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),completedAt:l.string().datetime().nullable()}),YC=l.object({projectId:l.string().uuid().optional().describe("Project ID to list runs for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),cursor:l.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),XC=l.object({runs:l.array(zT),nextCursor:l.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),ZC=l.object({threadId:l.string().uuid().describe("Thread ID to list runs for."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),cursor:l.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),QC=l.object({runs:l.array(zT),nextCursor:l.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),ex=l.object({runId:l.string().uuid().describe("Run ID returned by a deferred operation.")}),wn=l.object({completed:l.boolean().describe("Whether the run has reached a terminal status."),threadId:l.string().uuid().describe("Thread ID associated with the run."),runId:l.string().uuid().describe("Run ID for subsequent polling."),messageId:l.string().uuid().optional().describe("ID of the user message that triggered this run."),status:xT.describe("Current run lifecycle status."),response:l.string().nullable().describe("Assistant response text when the run has completed.")}),tx=wn.describe("Current run state and, when complete, the assistant response."),Im=D({operationId:"runs.list",description:"List deferred runs within one project.",backend:"api",route:{method:"GET",path:"/runs",tags:["Runs"]},input:YC,output:XC,pagination:"cursor",async:"sync"}),km=D({operationId:"runs.listForThread",description:"List deferred runs for one thread.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/runs",tags:["Runs"]},input:ZC,output:QC,pagination:"cursor",async:"sync"}),wm=D({operationId:"runs.get",description:"Get the current result for a deferred run by run ID.",backend:"api",route:{method:"GET",path:"/runs/{runId}",tags:["Runs"]},input:ex,output:tx,pagination:"none",async:"sync",examples:[{name:"processing-run",input:{runId:"33333333-3333-4333-8333-333333333333"},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]}),vJ={list:Im.contract,listForThread:km.contract,get:wm.contract}});var $m,rx,ox,nx,ix,ax,cx,lx,hx,_m,ux,sx,dx,gx,bx,mx,yx,px,vx,fx,Tm,Om,Sm,Pm,Am,$J;var Dm=g(()=>{Ie();Le();Qa();$m=l.object({id:l.string().uuid(),projectId:l.string().uuid(),title:l.string().nullable(),status:l.enum(["regular","archived"]),createdAt:l.string().datetime(),updatedAt:l.string().datetime()}),rx=l.object({type:l.literal("message"),message:l.string()}),ox=l.object({type:l.literal("reasoning"),reasoning:l.string(),status:l.enum(["in_progress","complete"]).optional()}),nx=l.object({type:l.literal("tool_call"),name:l.string(),params:l.any().optional(),result:l.any().optional(),status:l.enum(["in_progress","success","error","unknown"]).optional(),toolCallId:l.string().optional(),durationMs:l.number().nonnegative().optional()}),ix=l.object({type:l.literal("artifact"),name:l.enum(["timeseries","table","log_detail","integration_required","alert_card","issue_card"]),data:l.any(),toolCallId:l.string().optional()}),ax=l.object({type:l.literal("fork"),sourceThreadId:l.string(),sourceMessageId:l.string(),sourceThreadTitle:l.string().nullable()}),cx=l.object({type:l.literal("summary"),summary:l.string()}),lx=l.object({type:l.literal("slack_context"),channelId:l.string(),isTruncated:l.boolean().optional(),messages:l.array(l.object({timestamp:l.string(),slackUserId:l.string().optional(),displayName:l.string(),text:l.string(),isBot:l.boolean(),files:l.array(l.object({name:l.string(),mimetype:l.string(),size:l.number().optional(),attachmentId:l.string().uuid().optional(),ingestionStatus:l.enum(["attached","unsupported","oversized","skipped","unavailable"]).optional()})).optional()}))}),hx=l.union([rx,ox,nx,ix,ax,cx,lx]),_m=l.object({id:l.string().uuid(),role:l.enum(["user","assistant"]),content:l.array(hx),createdAt:l.string().datetime()}),ux=l.object({projectId:l.string().uuid().optional().describe("Project to list threads for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of threads to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),status:l.enum(["regular","archived"]).optional().describe("Filter by thread status. 'regular' returns active threads, 'archived' returns archived threads.")}),sx=l.object({threads:l.array($m).describe("The page of threads matching the query."),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),dx=l.object({threadId:l.string().uuid().describe("Thread ID returned by threads.list or threads.create.")}),gx=l.object({thread:$m.describe("The requested thread."),messages:l.array(_m).describe("Messages currently stored on the thread in chronological order.")}),bx=l.object({projectId:l.string().uuid().optional().describe("Project to create the thread in. Auto-filled from CLI and SDK context when omitted."),message:l.string().min(1,"Message cannot be empty").max(1e4,"Message cannot exceed 10000 characters").describe("Initial user message that starts the thread."),wait:l.boolean().default(!0).describe("Whether the server should wait for the agent run before responding."),timeoutSeconds:l.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling."),automationId:l.string().uuid().optional().describe("Internal automation context. Set by the Sazabi CLI when an automation script starts an agent run.")}),mx=wn.describe("Deferred run result for creating a thread."),yx=l.object({threadId:l.string().uuid().describe("Thread ID whose current processing status should be returned.")}),px=l.object({status:l.enum(["idle","processing"]),lastRunStatus:l.enum(["error"]).nullable()}),vx=l.object({threadId:l.string().uuid().describe("Thread ID of the thread to update."),status:l.enum(["regular","archived"]).describe("New status for the thread. 'archived' hides the thread from the sidebar.")}),fx=l.object({thread:$m.describe("The updated thread.")}),Tm=D({operationId:"threads.list",description:"List threads in a project, optionally filtered by status.",backend:"api",route:{method:"GET",path:"/threads",tags:["Threads"]},input:ux,output:sx,pagination:"cursor",async:"sync",examples:[{name:"active-threads",input:{projectId:"11111111-1111-4111-8111-111111111111",status:"regular",limit:10},output:{threads:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"API returning 500s",status:"regular",createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-01T00:05:00.000Z"}],nextCursor:null}}]}),Om=D({operationId:"threads.get",description:"Get a thread and its messages.",backend:"api",route:{method:"GET",path:"/threads/{threadId}",tags:["Threads"]},input:dx,output:gx,pagination:"none",async:"sync"}),Sm=D({operationId:"threads.getStatus",description:"Get the current processing status for a thread.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/status",tags:["Threads"]},input:yx,output:px,pagination:"none",async:"sync",examples:[{name:"processing-thread",input:{threadId:"22222222-2222-4222-8222-222222222222"},output:{status:"processing",lastRunStatus:null}}]}),Pm=D({operationId:"threads.create",description:"Create a thread with an initial message and optionally wait for the agent response.",backend:"api",route:{method:"POST",path:"/threads",tags:["Threads"],successStatus:201},input:bx,output:mx,pagination:"none",async:"deferred",examples:[{name:"async-handoff",input:{projectId:"11111111-1111-4111-8111-111111111111",message:"Investigate elevated 500s in production.",wait:!1,timeoutSeconds:20},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]}),Am=D({operationId:"threads.update",description:"Update a thread's status.",backend:"api",route:{method:"PATCH",path:"/threads/{threadId}",tags:["Threads"]},input:vx,output:fx,pagination:"none",async:"sync",examples:[{name:"archive-thread",input:{threadId:"22222222-2222-4222-8222-222222222222",status:"archived"},output:{thread:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"API returning 500s",status:"archived",createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-01T00:10:00.000Z"}}}]}),$J={list:Tm.contract,get:Om.contract,getStatus:Sm.contract,create:Pm.contract,update:Am.contract}});var Ix,kx,wx,$x,jT,ET;var UT=g(()=>{Ie();Le();Qa();Dm();Ix=l.object({threadId:l.string().uuid().describe("Thread ID to list messages for."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of messages to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),kx=l.object({messages:l.array(_m),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),wx=l.object({threadId:l.string().uuid().describe("Thread ID to append the message to."),message:l.string().min(1,"Message cannot be empty").max(1e4,"Message cannot exceed 10000 characters"),wait:l.boolean().default(!0).describe("Whether the server should wait for the appended message run before responding."),timeoutSeconds:l.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling."),automationId:l.string().uuid().optional().describe("Internal automation context. Set by the Sazabi CLI when an automation script starts an agent run.")}),$x=wn.describe("Deferred run result for appending a message to an existing thread."),jT=D({operationId:"messages.list",description:"List messages in a thread with cursor pagination.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/messages",tags:["Messages"]},input:Ix,output:kx,pagination:"cursor",async:"sync",examples:[{name:"thread-messages",input:{threadId:"22222222-2222-4222-8222-222222222222",limit:2},output:{messages:[{id:"33333333-3333-4333-8333-333333333333",role:"user",content:[{type:"message",message:"What changed in the intake pipeline?"}],createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),ET=D({operationId:"messages.append",description:"Append a user message to an existing thread and trigger a deferred run.",backend:"api",route:{method:"POST",path:"/threads/{threadId}/messages",successStatus:201,tags:["Messages"]},input:wx,output:$x,pagination:"none",async:"deferred",examples:[{name:"append-processing",input:{threadId:"22222222-2222-4222-8222-222222222222",message:"Follow up on the intake backlog.",wait:!1,timeoutSeconds:20},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]})});var Lm,_x,Tx,Ox,Sx,Px,Ax,Dx,Nm,Cm,xm,CJ;var RT=g(()=>{Ie();Le();Za();Lm=l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional()}),_x=Lm.extend({role:ao.optional()}),Tx=l.object({}),Ox=l.object({organizations:l.array(_x).describe("Organizations available to the current credential.")}),Sx=l.object({organizationId:l.string().min(1).describe("Organization ID to fetch.")}),Px=l.object({organization:Lm}),Ax=l.object({organizationId:l.string().min(1).describe("Organization ID to update. SDK and CLI callers can auto-fill this before dispatch."),name:l.string().trim().min(1).max(100).describe("New organization name.")}),Dx=l.object({organization:Lm.describe("Updated organization.")}),Nm=D({operationId:"organizations.list",description:"List organizations available to the current credential.",backend:"api",route:{method:"GET",path:"/organizations",tags:["Organizations"]},input:Tx,output:Ox,pagination:"none",async:"sync"}),Cm=D({operationId:"organizations.get",description:"Get one organization by ID.",backend:"api",route:{method:"GET",path:"/organizations/{organizationId}",tags:["Organizations"]},input:Sx,output:Px,pagination:"none",async:"sync"}),xm=D({operationId:"organizations.update",description:"Update one organization.",backend:"api",route:{method:"PATCH",path:"/organizations/{organizationId}",tags:["Organizations"]},input:Ax,output:Dx,pagination:"none",async:"sync",examples:[{name:"rename-organization",input:{organizationId:"organization-123",name:"Observed Platform"},output:{organization:{id:"organization-123",name:"Observed Platform",slug:"acme",logo:null}}}]}),CJ={list:Nm.contract,get:Cm.contract,update:xm.contract}});var ec,zm,FT,KT,BT,GT,tc,rc,Lx;var jm=g(()=>{Ie();Le();ec=l.enum(["us-east-1","us-east-2","us-west-1","us-west-2","eu-central-1","eu-central-2","eu-north-1","eu-south-1","eu-south-2","eu-west-1","eu-west-2","eu-west-3"]),zm=l.object({id:l.string().uuid(),organizationId:l.string().min(1),name:l.string(),region:ec}),FT=l.object({organizationId:l.string().min(1).optional().describe("Organization to list projects for. Auto-filled from CLI and SDK context when omitted.")}),KT=l.object({projects:l.array(zm).describe("Projects visible within the selected organization.")}),BT=l.object({projectId:l.string().uuid().describe("Project ID to fetch.")}),GT=l.object({project:zm}),tc=D({operationId:"projects.list",description:"List projects in an organization.",backend:"api",route:{method:"GET",path:"/projects",tags:["Projects"]},input:FT,output:KT,pagination:"none",async:"sync"}),rc=D({operationId:"projects.get",description:"Get one project by ID.",backend:"api",route:{method:"GET",path:"/projects/{projectId}",tags:["Projects"]},input:BT,output:GT,pagination:"none",async:"sync"}),Lx={list:tc.contract,get:rc.contract}});var Em,HT,MT,JT,qT,co,lo,Nx;var Um=g(()=>{Ie();Le();Em=l.object({projectId:l.string().uuid().optional().describe("Project to search within. Auto-filled from CLI and SDK context when omitted."),query:l.string().trim().min(1,"Query must be at least 1 character").max(500,"Query must be at most 500 characters"),limit:l.coerce.number().min(1).max(100).default(20).describe("Maximum number of search results to return."),page:l.coerce.number().min(1).default(1).describe("One-based page number.")}),HT=Em.extend({status:l.enum(["regular","archived"]).optional().describe("Optional thread status filter.")}),MT=Em.extend({threadId:l.string().uuid().optional().describe("Optional thread restriction for message search."),role:l.enum(["user","assistant"]).optional().describe("Optional message role filter.")}),JT=l.object({threads:l.array(l.object({id:l.string().uuid(),projectId:l.string().uuid().optional(),title:l.string(),status:l.enum(["regular","archived"]),labels:l.array(l.string()),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),highlights:l.array(l.string()),score:l.number().optional()})),pagination:l.object({page:l.number(),limit:l.number(),totalResults:l.number(),totalPages:l.number()}).describe("Page-based pagination metadata for the current search result.")}),qT=l.object({messages:l.array(l.object({id:l.string().uuid(),threadId:l.string().uuid(),threadTitle:l.string(),role:l.enum(["user","assistant"]),content:l.string(),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),highlights:l.array(l.string()),score:l.number().optional()})),pagination:l.object({page:l.number(),limit:l.number(),totalResults:l.number(),totalPages:l.number()}).describe("Page-based pagination metadata for the current search result.")}),co=D({operationId:"search.threads",description:"Search threads within one project.",backend:"api",route:{method:"GET",path:"/search/threads",tags:["Search"]},input:HT,output:JT,pagination:"page",async:"sync",examples:[{name:"search-open-incidents",input:{projectId:"11111111-1111-4111-8111-111111111111",query:"payment timeout",status:"regular",limit:10,page:1},output:{threads:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"Payment timeout in us-west-2",status:"regular",labels:["payments","timeout"],createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-02T00:00:00.000Z",highlights:["payment timeout"],score:123.45}],pagination:{page:1,limit:10,totalResults:1,totalPages:1}}}]}),lo=D({operationId:"search.messages",description:"Search messages within one project.",backend:"api",route:{method:"GET",path:"/search/messages",tags:["Search"]},input:MT,output:qT,pagination:"page",async:"sync",examples:[{name:"search-assistant-messages",input:{projectId:"11111111-1111-4111-8111-111111111111",query:"rollback",role:"assistant",limit:10,page:1},output:{messages:[{id:"33333333-3333-4333-8333-333333333333",threadId:"22222222-2222-4222-8222-222222222222",threadTitle:"Deployment rollback guidance",role:"assistant",content:"Rollback the ingestion deployment and confirm queue depth.",createdAt:"2026-01-02T00:00:00.000Z",updatedAt:"2026-01-02T00:00:00.000Z",highlights:["Rollback the ingestion deployment"],score:98.76}],pagination:{page:1,limit:10,totalResults:1,totalPages:1}}}]}),Nx={threads:co.contract,messages:lo.contract}});var $n,VT,WT,YT,XT,ZT,QT,eO,tO,oc,nc,ho,ic,Cx;var Rm=g(()=>{Ie();Le();$n=l.object({id:l.string().uuid(),projectId:l.string().uuid(),name:l.string(),description:l.string().nullable(),currentStatus:l.enum(["operational","degraded","outage"]).describe("Current health status of this component."),firstSeenAt:l.string().datetime(),lastSeenAt:l.string().datetime(),deletedAt:l.string().datetime().nullable().describe("Timestamp when this component was deregistered, if any.")}),VT=l.object({projectId:l.string().uuid().optional().describe("Project to list status components for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of components to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),includeDeleted:l.union([l.boolean(),l.stringbool()]).default(!1).describe("When true, include soft-deleted components in the response.")}),WT=l.object({statusComponents:l.array($n),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),YT=l.object({componentId:l.string().uuid().describe("Status component ID to retrieve.")}),XT=l.object({statusComponent:$n}),ZT=l.object({projectId:l.string().uuid().optional().describe("Project to register the status component in. Auto-filled from CLI and SDK context when omitted."),name:l.string().trim().min(1,"Name is required").describe("Evidence-backed component name to register."),description:l.string().trim().min(1,"Description cannot be empty").optional().describe("Optional component description.")}),QT=l.object({statusComponent:$n}),eO=l.object({componentId:l.string().uuid().describe("Status component ID to deregister."),reason:l.string().trim().min(1,"Reason cannot be empty").optional().describe("Optional reason for audit logging.")}),tO=l.object({statusComponent:$n}),oc=D({operationId:"statusComponents.list",description:"List status page components in a project.",backend:"api",route:{method:"GET",path:"/status-components",tags:["Status Components"]},input:VT,output:WT,pagination:"cursor",async:"sync"}),nc=D({operationId:"statusComponents.get",description:"Get a single status component by ID.",backend:"api",route:{method:"GET",path:"/status-components/{componentId}",tags:["Status Components"]},input:YT,output:XT,pagination:"none",async:"sync"}),ho=D({operationId:"statusComponents.register",description:"Register a status page component in a project, or refresh an existing active component with the same name.",backend:"api",route:{method:"POST",path:"/status-components",tags:["Status Components"]},input:ZT,output:QT,pagination:"none",async:"sync"}),ic=D({operationId:"statusComponents.deregister",description:"Deregister a status page component by soft-deleting it.",backend:"api",route:{method:"POST",path:"/status-components/{componentId}/deregister",tags:["Status Components"]},input:eO,output:tO,pagination:"none",async:"sync"}),Cx={list:oc.contract,get:nc.contract,register:ho.contract,deregister:ic.contract}});var rO;var oO=g(()=>{rO=["onboarding","setup"]});var nO,iO,aO,cO,_n;var Fm=g(()=>{oO();Ie();Le();nO=l.enum(rO),iO=l.object({id:l.string().describe("Unique task identifier (e.g. install_github_app)."),label:l.string().describe("Short human-readable task name."),description:l.string().describe("Explanation of what needs to be completed to satisfy this task."),instructions:l.string().describe("Step-by-step instructions for completing this task."),completed:l.boolean().describe("Whether the task has been completed."),completedAt:l.string().datetime().nullable().describe("ISO 8601 timestamp of when the task was completed, or null."),category:nO.describe("Task category: onboarding (core setup steps) or setup (additional configuration).")}),aO=l.object({projectId:l.string().uuid().optional().describe("Project to list tasks for. Auto-filled from CLI and SDK context when omitted.")}),cO=l.object({tasks:l.array(iO).describe("All onboarding and setup tasks with their current completion status.")}),_n=D({operationId:"tasks.list",description:"List all onboarding and setup tasks for a project, including their current completion status and a description of what is required to complete each task.",backend:"api",route:{method:"GET",path:"/tasks",tags:["Tasks"]},input:aO,output:cO,pagination:"none",async:"sync"})});var Km;var lO=g(()=>{lm();sm();gm();mm();Za();CT();UT();RT();jm();Qa();Um();Rm();Fm();Dm();Km={me:ym.contract,logs:{query:to.contract,schema:ro.contract,volume:oo.contract,patterns:no.contract,nativeQuery:io.contract},dataSources:{listTypes:Sa.contract,listConnections:qr.contract,getConnection:Pa.contract,createConnection:Vr.contract,disconnectConnection:Ca.contract,listStreams:Aa.contract,createStream:Da.contract,getStream:La.contract,deleteStream:Na.contract},organizations:{list:Nm.contract,get:Cm.contract,update:xm.contract},members:{list:pm.contract,updateRole:vm.contract,remove:fm.contract},publicKeys:{list:Yr.contract,get:Xr.contract,create:Zr.contract,update:Qr.contract,deactivate:eo.contract},secretKeys:{list:Ja.contract,get:qa.contract,create:Va.contract,update:Wa.contract,delete:Ya.contract},projects:{list:tc.contract,get:rc.contract},search:{threads:co.contract,messages:lo.contract},messages:{list:jT.contract,append:ET.contract},threads:{list:Tm.contract,get:Om.contract,getStatus:Sm.contract,create:Pm.contract,update:Am.contract},runs:{list:Im.contract,listForThread:km.contract,get:wm.contract},issues:{count:ja.contract,create:Wr.contract,list:xa.contract,search:za.contract,get:Ea.contract,resolve:Ua.contract,ignore:Ra.contract,mute:Fa.contract,unmute:Ka.contract},tasks:{list:_n.contract},statusComponents:{list:oc.contract,get:nc.contract,register:ho.contract,deregister:ic.contract}}});var ac=g(()=>{lO();lm();sm();gm();mm();jm();Um();Rm();Fm()});var xx,tY,zx,cc=(e)=>{return zx.includes(e)};var Bm=g(()=>{xx={"eu-central-1":"EU Central (Frankfurt)"},tY={"us-west-2":"US West","us-east-1":"US East","us-east-2":"US East 2","eu-central-1":xx["eu-central-1"]},zx=["us-west-2","us-east-1","us-east-2","eu-central-1"]});var Gm,Hm,Mm,hO;var uO=g(()=>{Ie();Gm=l.object({severities:l.array(l.string()).optional().describe("Limit results to the listed severities."),services:l.array(l.string()).optional().describe("Limit results to the listed service names."),environments:l.array(l.string()).optional().describe("Limit results to the listed deployment environments."),searchTerm:l.string().optional().describe("Case-insensitive substring match against the log body."),traceId:l.string().optional().describe("Limit results to one trace ID.")}),Hm=l.object({service:l.string(),namespace:l.string(),environment:l.string(),host:l.string(),container:l.string(),pod:l.string()}),Mm=l.object({id:l.string(),timestamp:l.string().datetime(),severity:l.string(),body:l.string(),service:l.string(),traceId:l.string(),spanId:l.string(),attributes:l.record(l.string(),l.string()),resource:Hm}),hO=l.object({type:l.literal("logs"),timestamp:l.string().datetime(),data:l.array(Mm)})});var jx="https://{region}.intake.sazabi.com",Ex="wss://{region}.tail.sazabi.com",Ux=3,dO=500,gO="sazabi.public_key",Rx=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},bO=(e)=>{let t=Rx(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},Fx,Kx,Bx,mO=(e)=>{let t=new Map;return{tail:async(o)=>{let n=await Yx(e.credentialProvider,o.projectId,"logs.tail"),r=await Xx(e,t,n,o.region,"logs.tail"),i=Gx({projectId:n,region:r,filters:o.filters,tailBaseUrl:e.tailBaseUrl}),a=await e.credentialProvider.getToken(),c=e.webSocket??globalThis.WebSocket;if(!c)throw Error("WebSocket transport is not available in this runtime.");return ez({token:a,url:i,signal:o.signal,webSocket:c})},forward:async(o)=>{let n=await Zx(e,t,o.projectId??await e.credentialProvider.getProjectId?.(),o.region,"logs.forward"),r=Jx(n,e.intakeBaseUrl),i=e.fetch??globalThis.fetch,a=Vx(o.logs,o.publicKey),c=nz(a);return await oz(i,r,a),{forwardedCount:c,failedCount:0}}}},Gx=(e)=>{let t=(e.tailBaseUrl??Ex).replace("{region}",e.region),o=Hx(t)??new URL(t);o.searchParams.set("projectId",e.projectId);let n=Mx(e.filters);if(n)o.searchParams.set("filters",n);return o.toString()},Hx=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!bO(t.hostname))return;return t.protocol="ws:",t.pathname="/tail",t},Mx=(e)=>{if(!e)return;let t=Object.entries(e).filter(([,o])=>o!==void 0&&(!Array.isArray(o)||o.length>0)&&o!=="");if(t.length===0)return;return JSON.stringify(Object.fromEntries(t))},Jx=(e,t)=>{let o=(t??jx).replace("{region}",e),n=o.endsWith("/")?o.slice(0,-1):o,r=qx(n);if(r)return r;let i=n.match(/^https:\/\/([a-z0-9-]+)\.intake\.([a-z0-9.]+)$/);return`${i?`https://otlp.${i[1]}.intake.${i[2]}`:n}/v1/logs`},qx=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!bO(t.hostname))return;return t.pathname="/adapters/otlp",t.toString()},Vx=(e,t)=>{let o=e.resourceLogs;if(!o||o.length===0)return{...e,resourceLogs:[{resource:{attributes:[yO(t)]},scopeLogs:[]}]};return{...e,resourceLogs:o.map((n)=>({...n,resource:{...n.resource,attributes:Wx(n.resource?.attributes,t)}}))}},Wx=(e,t)=>{return[...(e??[]).filter((n)=>n?.key!==gO),yO(t)]},yO=(e)=>({key:gO,value:{stringValue:e}}),Yx=async(e,t,o)=>{let n=t??await e.getProjectId?.();if(n)return n;throw vO(o,"Project ID is required",["projectId"])},Xx=async(e,t,o,n,r)=>{let i=n??await pO(e,t,o);return Qx(i,r)},Zx=async(e,t,o,n,r)=>{if(n)return n;if(!o)throw vO(r,"Project ID is required",["projectId"]);return pO(e,t,o)},pO=async(e,t,o)=>{let n=t.get(o);if(n)return n;let r=e.raw.projects.get({projectId:o}).then((i)=>i.project.region);t.set(o,r);try{return await r}catch(i){throw t.delete(o),i}},Qx=(e,t)=>{if(cc(e))return e;throw new pe("BAD_REQUEST",{message:`Log tail is not supported for project region ${e}.`,data:{operationId:t,missingContext:[]}})},ez=async(e)=>{let t=[],o=[],n=!1,r=!1,i,a=0,c,h=(m)=>{if(n)return;n=!0,i=m;while(o.length>0){let k=o.shift();if(k)k({value:void 0,done:!0})}},u=(m)=>{let k=o.shift();if(k){k({value:m,done:!1});return}t.push(m)},d=()=>{if(c&&c.readyState<c.CLOSING)c.close(1000,"Client closed stream")},s=async()=>{await new Promise((m,k)=>{let A=!1,F;try{F=new e.webSocket(e.url,[e.token])}catch(j){k(j instanceof Error?j:Error("Failed to open WebSocket connection."));return}c=F,F.onopen=()=>{if(a=0,!A)A=!0,m()},F.onmessage=(j)=>{let te=tz(j.data);for(let he of te)u(he)},F.onerror=()=>{if(!A)A=!0,k(Error("WebSocket connection failed. Check the close event for details."))},F.onclose=(j)=>{if(!A){A=!0,k(sO(j.code,j.reason));return}if(r||n){h();return}if(rz(j.code)&&a<Ux){a+=1,globalThis.setTimeout(()=>{s().catch((te)=>{h(te instanceof Error?te:Error(String(te)))})},dO*2**(a-1));return}h(sO(j.code,j.reason))}})};e.signal?.addEventListener("abort",()=>{r=!0,d(),h()},{once:!0}),await s();let b={[Symbol.asyncIterator](){return b},next:async()=>{if(t.length>0)return{value:t.shift(),done:!1};if(n){if(i)throw i;return{value:void 0,done:!0}}return new Promise((m)=>{o.push(m)}).then((m)=>{if(m.done&&i)throw i;return m})},return:async()=>{return r=!0,d(),h(),{value:void 0,done:!0}},throw:async(m)=>{throw r=!0,d(),h(m instanceof Error?m:Error(String(m))),m}};return b},tz=(e)=>{let t=(()=>{if(typeof e==="string")return e;if(e instanceof ArrayBuffer)return new TextDecoder().decode(e);return null})();if(!t)return[];try{let o=hO.safeParse(JSON.parse(t));if(!o.success)return[];return o.data.data}catch{return[]}},rz=(e)=>{return![1000,1001,1008,4001,4003,4004].includes(e)},sO=(e,t)=>{if(t)return Error(t);let o={1000:"Normal closure",1001:"Endpoint going away",1002:"Protocol error",1003:"Unsupported data",1006:"Connection closed abnormally (no close frame received)",1007:"Invalid payload data",1008:"Policy violation",1009:"Message too big",1010:"Missing extension",1011:"Internal server error",1015:"TLS handshake failure",4001:"Authentication failed - check your credential",4003:"Forbidden - credential may not have access to this project",4004:"Project not found"}[e]??`Unknown close code: ${e}`;return Error(`Connection closed: ${o}`)},oz=async(e,t,o,n=3,r=1e4)=>{let i;for(let a=0;a<=n;a+=1){let c=new AbortController,h=globalThis.setTimeout(()=>c.abort(),r);try{let u=await e(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o),signal:c.signal});if(u.ok)return;let d=await u.text();if(u.status===401||u.status===403)throw Error("Authentication failed. Check your public key.");if(u.status>=400&&u.status<500&&u.status!==429)throw Error(`Client error (${u.status}): ${d}`);i=Error(u.status===429?`Rate limited (429): ${d}`:`Server error (${u.status}): ${d}`)}catch(u){let d=u instanceof Error?u.message:String(u);if(d.startsWith("Authentication failed")||d.startsWith("Client error ("))throw u instanceof Error?u:Error(d);i=u instanceof Error&&u.name==="AbortError"?Error("Request timed out"):u instanceof Error?u:Error(String(u))}finally{globalThis.clearTimeout(h)}if(a<n)await iz(dO*2**a)}throw Error(`Failed after ${n+1} attempts: ${i?.message??"Unknown error"}`)},nz=(e)=>{return e.resourceLogs?.reduce((t,o)=>t+(o.scopeLogs?.reduce((n,r)=>n+(r.logRecords?.length??0),0)??0),0)??0},iz=async(e)=>{await new Promise((t)=>globalThis.setTimeout(t,e))},vO=(e,t,o)=>{return new pe("BAD_REQUEST",{message:t,data:{operationId:e,missingContext:o}})};var Jm=g(()=>{gr();Bm();uO();Ie();Fx=l.object({projectId:l.string().uuid().optional().describe("Project to tail logs for. Auto-filled from CLI and SDK context when omitted."),filters:Gm.optional().describe("Optional filters applied by the tail WebSocket service.")}),Kx=l.object({publicKey:l.string().min(1).describe("Public key for intake auth. Create or list one via the public key endpoints."),logs:l.custom((e)=>typeof e==="object"&&e!==null).describe("OTLP logs export request payload to send to the intake service.")}),Bx=l.object({forwardedCount:l.number().int().nonnegative().describe("Number of log records accepted by the intake request."),failedCount:l.number().int().nonnegative().describe("Number of log records rejected by the intake request.")})});var az="https://api.sazabi.com",IO="https://api.platform.sazabi.com",kO="sazabi-cli",cz="urn:ietf:params:oauth:grant-type:device_code",wO=(e)=>{let t=Yc(new hl(Km,{url:lz(e.apiBaseUrl??az),headers:async()=>new Headers({authorization:`Bearer ${await e.credentialProvider.getToken()}`}),fetch:e.fetch,customErrorResponseBodyDecoder:(n,r)=>{let i=mz(n);if(!i)return null;return new pe(i.code,{message:i.message,status:r.status,data:{operationId:i.operationId,missingContext:i.missingContext}})}})),o=mO({raw:t,credentialProvider:e.credentialProvider,fetch:e.fetch,intakeBaseUrl:e.intakeBaseUrl,tailBaseUrl:e.tailBaseUrl,webSocket:e.webSocket});return{raw:t,me:async()=>t.me({}),logs:{...o,query:async(n={})=>t.logs.query(await se(e.credentialProvider,n,to.operationId)),schema:async(n={})=>t.logs.schema(await se(e.credentialProvider,n,ro.operationId)),volume:async(n)=>t.logs.volume(await se(e.credentialProvider,n,oo.operationId)),patterns:async(n={})=>t.logs.patterns(await se(e.credentialProvider,n,no.operationId)),nativeQuery:async(n)=>t.logs.nativeQuery(await se(e.credentialProvider,n,io.operationId))},organizations:{list:async()=>t.organizations.list({}),get:async(n)=>t.organizations.get(n),update:async(n)=>t.organizations.update(await uz(e.credentialProvider,n))},members:{list:async(n={})=>t.members.list(await lc(e.credentialProvider,n)),updateRole:async(n)=>t.members.updateRole(await lc(e.credentialProvider,n)),remove:async(n)=>{let r=await lc(e.credentialProvider,n);return t.members.remove({params:{userId:r.userId},query:{organizationId:r.organizationId}})}},publicKeys:{list:async(n={})=>t.publicKeys.list(await se(e.credentialProvider,n,Yr.operationId)),get:async(n)=>t.publicKeys.get(await se(e.credentialProvider,n,Xr.operationId)),create:async(n)=>t.publicKeys.create(await se(e.credentialProvider,n,Zr.operationId)),update:async(n)=>t.publicKeys.update(await se(e.credentialProvider,n,Qr.operationId)),deactivate:async(n)=>{let r=await se(e.credentialProvider,n,eo.operationId);return t.publicKeys.deactivate({params:{keyId:r.keyId},query:{projectId:r.projectId}})}},secretKeys:{list:async(n={})=>t.secretKeys.list(n),get:async(n)=>t.secretKeys.get(n),create:async(n)=>t.secretKeys.create(n),update:async(n)=>t.secretKeys.update(n),delete:async(n)=>{await t.secretKeys.delete({params:{keyId:n.keyId}})}},search:{threads:async(n)=>t.search.threads(await se(e.credentialProvider,n,co.operationId)),messages:async(n)=>t.search.messages(await se(e.credentialProvider,n,lo.operationId))},projects:{list:async(n={})=>t.projects.list(await hz(e.credentialProvider,n)),get:async(n)=>t.projects.get(n)},messages:{list:async(n)=>t.messages.list(n),append:async(n)=>fO(t,await t.messages.append(bz(n)))},threads:{list:async(n={})=>t.threads.list(await sz(e.credentialProvider,n)),get:async(n)=>t.threads.get(n),getStatus:async(n)=>t.threads.getStatus(n),create:async(n)=>fO(t,await t.threads.create(await gz(e.credentialProvider,n))),update:async(n)=>t.threads.update(n)},runs:{list:async(n={})=>t.runs.list(await dz(e.credentialProvider,n)),listForThread:async(n)=>t.runs.listForThread(n),get:async(n)=>t.runs.get(n)},dataSources:{listTypes:async()=>t.dataSources.listTypes({}),connections:{list:async(n={})=>t.dataSources.listConnections(await se(e.credentialProvider,n,qr.operationId)),get:async(n)=>t.dataSources.getConnection(n),create:async(n)=>t.dataSources.createConnection(await se(e.credentialProvider,n,Vr.operationId)),disconnect:async(n)=>t.dataSources.disconnectConnection(n)},streams:{list:async(n)=>t.dataSources.listStreams(n),get:async(n)=>t.dataSources.getStream(n),create:async(n)=>t.dataSources.createStream(n),delete:async(n)=>t.dataSources.deleteStream(n)}},issues:{count:async(n={})=>t.issues.count(await se(e.credentialProvider,n,"issues.count")),create:async(n)=>t.issues.create(await se(e.credentialProvider,n,Wr.operationId)),list:async(n={})=>t.issues.list(await se(e.credentialProvider,n,"issues.list")),search:async(n={})=>t.issues.search(await se(e.credentialProvider,n,"issues.search")),get:async(n)=>t.issues.get(n),resolve:async(n)=>t.issues.resolve(n),ignore:async(n)=>t.issues.ignore(n),mute:async(n)=>t.issues.mute(n),unmute:async(n)=>t.issues.unmute(n)},statusComponents:{list:async(n={})=>t.statusComponents.list(await se(e.credentialProvider,n,"statusComponents.list")),get:async(n)=>t.statusComponents.get(n),register:async(n)=>t.statusComponents.register(await se(e.credentialProvider,n,ho.operationId)),deregister:async(n)=>t.statusComponents.deregister({componentId:n.componentId,...n.reason!==void 0?{reason:n.reason}:{}})},tasks:{list:async(n={})=>t.tasks.list(await se(e.credentialProvider,n,_n.operationId))}}},Vm=async(e={})=>{let t=await TO(e.fetch)($O(e.apiBaseUrl??IO,"/device/code"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({client_id:e.clientId??kO,...e.scope?{scope:e.scope}:{}})}),o=await t.json();if(!t.ok)throw yz(o,t.status);let n=o;return{deviceCode:uo(n.device_code,"device_code"),userCode:uo(n.user_code,"user_code"),verificationUri:uo(n.verification_uri,"verification_uri"),verificationUriComplete:uo(n.verification_uri_complete,"verification_uri_complete"),expiresIn:qm(n.expires_in,"expires_in"),interval:qm(n.interval,"interval")}},Wm=async(e)=>{let t=await TO(e.fetch)($O(e.apiBaseUrl??IO,"/device/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({grant_type:cz,device_code:e.deviceCode,client_id:e.clientId??kO})}),o=await t.json();if(t.ok){let r=o;return{status:"authorized",accessToken:uo(r.access_token,"access_token"),tokenType:uo(r.token_type,"token_type"),expiresIn:qm(r.expires_in,"expires_in"),scope:typeof r.scope==="string"?r.scope:""}}let n=_O(o);if(!n)throw Error(`Device authorization failed with status ${t.status}`);if(n.error==="authorization_pending")return{status:"pending"};if(n.error==="slow_down")return{status:"pending",interval:10};if(n.error==="access_denied")return{status:"denied",message:n.errorDescription};if(n.error==="expired_token"||n.error==="invalid_grant")return{status:"expired",message:n.errorDescription};throw Error(n.errorDescription)},lz=(e)=>{let t=e.replace(/\/+$/,"");return t.endsWith("/v1")?t:`${t}/v1`},$O=(e,t)=>{return`${e.replace(/\/+$/,"")}/api/auth${t}`},hz=async(e,t)=>{return lc(e,t)},lc=async(e,t)=>{let o=t.organizationId??await e.getOrganizationId?.();return o?{...t,organizationId:o}:t},uz=async(e,t)=>{let o=t.organizationId??await e.getOrganizationId?.();if(!o)throw new pe("BAD_REQUEST",{message:"Organization ID is required",data:{operationId:"organizations.update",missingContext:["organizationId"]},status:400});return{...t,organizationId:o}},se=async(e,t,o)=>{let n=t.projectId??await e.getProjectId?.();if(!n)throw new pe("BAD_REQUEST",{message:"Project ID is required",data:{operationId:o,missingContext:["projectId"]},status:400});return{...t,projectId:n}},sz=async(e,t)=>{let o=t.projectId??await e.getProjectId?.();return o?{...t,projectId:o}:t},dz=async(e,t)=>{let o=t.projectId??await e.getProjectId?.();return o?{...t,projectId:o}:t},gz=async(e,t)=>{let o=t.projectId??await e.getProjectId?.();return o?{...t,projectId:o}:t},bz=(e)=>{return{threadId:e.threadId,message:e.message,wait:e.wait??!0,timeoutSeconds:e.timeoutSeconds??20,...e.automationId!==void 0?{automationId:e.automationId}:{}}},mz=(e)=>{if(!e||typeof e!=="object")return null;let t=e;if(typeof t.code!=="string"||typeof t.message!=="string"||typeof t.operationId!=="string")return null;return{code:t.code,message:t.message,operationId:t.operationId,missingContext:Array.isArray(t.missingContext)?t.missingContext.filter((o)=>typeof o==="string"):[]}},_O=(e)=>{if(!e||typeof e!=="object")return null;let t=e;if(typeof t.error!=="string"||typeof t.error_description!=="string")return null;return{error:t.error,errorDescription:t.error_description}},yz=(e,t)=>{let o=_O(e);return Error(o?.errorDescription??`Device authorization failed with status ${t}`)},TO=(e)=>{return e??globalThis.fetch},fO=(e,t)=>({result:t,poll:()=>e.runs.get({runId:t.runId}),waitForCompletion:async(o={})=>pz(e,t,o)}),pz=async(e,t,o)=>{if(t.completed)return t;let n=o.intervalMs??2000,r=Date.now(),i=t;while(!i.completed){if(o.timeoutMs!==void 0&&Date.now()-r>=o.timeoutMs)return i;await vz(n),i=await e.runs.get({runId:i.runId})}return i},vz=async(e)=>{await new Promise((t)=>globalThis.setTimeout(t,e))},uo=(e,t)=>{if(typeof e==="string")return e;throw Error(`Expected '${t}' to be a string.`)},qm=(e,t)=>{if(typeof e==="number")return e;throw Error(`Expected '${t}' to be a number.`)};var Ym=g(()=>{gr();cp();ac();Jm();Jm()});var ke=(e)=>({success:!0,value:e}),me=(e,t,o)=>({success:!1,error:e,...t!==void 0&&{statusCode:t},...o!==void 0&&{errorPayload:o}}),I=(e,t,o)=>{if(!e.success){let n=`${t}: ${e.error}`;if(o)return v(e.errorPayload??n);return p(n)}return e.value};var X=g(()=>{J()});var Iz="https://api.sazabi.com",x=async(e)=>{try{return ke(await e())}catch(t){let o=kz(t),n=wz(t),r=t instanceof Error?t.message:String(t);return me(r,n,o)}},kz=(e)=>{if(!e||typeof e!=="object")return;let t=e;if(typeof t.code!=="string"||typeof t.message!=="string"||!t.data||typeof t.data!=="object")return;let o=t.data;if(typeof o.operationId!=="string")return;return{code:t.code,message:t.message,operationId:o.operationId,missingContext:Array.isArray(o.missingContext)?o.missingContext.filter((n)=>typeof n==="string"):[]}},wz=(e)=>{if(!e||typeof e!=="object")return;let t=e;return typeof t.status==="number"?t.status:void 0},kt=(e)=>{let t=wO({apiBaseUrl:e.baseUrl??Iz,credentialProvider:{getToken:()=>e.token,getOrganizationId:()=>e.organizationId,getProjectId:()=>e.projectId},intakeBaseUrl:e.intakeBaseUrl,tailBaseUrl:e.tailBaseUrl});return{me:()=>x(()=>t.me()),logs:{tail:(o)=>x(()=>t.logs.tail(o)),forward:(o)=>x(()=>t.logs.forward(o)),query:(o={})=>x(()=>t.logs.query(o)),schema:(o={})=>x(()=>t.logs.schema(o)),volume:(o)=>x(()=>t.logs.volume(o)),patterns:(o={})=>x(()=>t.logs.patterns(o)),nativeQuery:(o)=>x(()=>t.logs.nativeQuery(o))},organizations:{list:()=>x(()=>t.organizations.list()),get:(o)=>x(()=>t.organizations.get({organizationId:o})),rename:(o,n)=>x(()=>t.organizations.update({organizationId:n,name:o}))},members:{list:(o={})=>x(()=>t.members.list(o)),updateRole:(o,n,r)=>x(()=>t.members.updateRole({organizationId:r,userId:o,role:n})),remove:(o,n)=>x(()=>t.members.remove({organizationId:n,userId:o}))},projects:{list:(o={})=>x(()=>t.projects.list(o)),get:(o)=>x(()=>t.projects.get({projectId:o}))},threads:{list:(o={})=>x(()=>t.threads.list(o)),get:(o)=>x(()=>t.threads.get({threadId:o})),create:(o)=>x(()=>t.threads.create(o)),getStatus:(o)=>x(()=>t.threads.getStatus({threadId:o})),update:(o,n)=>x(()=>t.threads.update({threadId:o,status:n}))},messages:{list:(o,n={})=>x(()=>t.messages.list({threadId:o,...n})),append:(o,n,r,i,a)=>x(()=>t.messages.append({threadId:o,message:n,wait:r,timeoutSeconds:i,...a!==void 0?{automationId:a}:{}}))},runs:{get:(o)=>x(()=>t.runs.get({runId:o}))},search:{threads:(o)=>x(()=>t.search.threads(o)),messages:(o)=>x(()=>t.search.messages(o))},publicKeys:{list:(o)=>x(()=>t.publicKeys.list(o)),get:(o,n)=>x(()=>t.publicKeys.get(n?{keyId:o,projectId:n}:{keyId:o})),create:(o)=>x(()=>t.publicKeys.create(o)),update:(o)=>x(()=>t.publicKeys.update(o)),deactivate:(o)=>x(()=>t.publicKeys.deactivate(o))},secretKeys:{list:(o)=>x(()=>t.secretKeys.list(o)),get:(o)=>x(()=>t.secretKeys.get({keyId:o})),create:(o)=>x(()=>t.secretKeys.create(o)),update:(o)=>x(()=>t.secretKeys.update(o)),delete:(o)=>x(()=>t.secretKeys.delete(o))},issues:{count:(o={})=>x(()=>t.issues.count(o)),create:(o)=>x(()=>t.issues.create(o)),list:(o={})=>x(()=>t.issues.list(o)),search:(o={})=>x(()=>t.issues.search(o)),get:(o)=>x(()=>t.issues.get({issueId:o})),resolve:(o)=>x(()=>t.issues.resolve({issueId:o})),ignore:(o)=>x(()=>t.issues.ignore({issueId:o})),mute:(o)=>x(()=>t.issues.mute({issueId:o})),unmute:(o)=>x(()=>t.issues.unmute({issueId:o}))},statusComponents:{list:(o={})=>x(()=>t.statusComponents.list(o)),get:(o)=>x(()=>t.statusComponents.get({componentId:o})),register:(o)=>x(()=>t.statusComponents.register(o)),deregister:(o,n)=>x(()=>t.statusComponents.deregister({componentId:o,...n!==void 0?{reason:n}:{}}))},tasks:{list:(o={})=>x(()=>t.tasks.list(o))},dataSources:{listTypes:()=>x(()=>t.dataSources.listTypes()),connections:{list:(o)=>x(()=>t.dataSources.connections.list(o)),get:(o)=>x(()=>t.dataSources.connections.get({connectionId:o})),create:(o)=>x(()=>t.dataSources.connections.create(o)),disconnect:(o)=>x(()=>t.dataSources.connections.disconnect({connectionId:o}))},streams:{list:(o)=>x(()=>t.dataSources.streams.list({connectionId:o})),get:(o)=>x(()=>t.dataSources.streams.get({streamId:o})),create:(o)=>x(()=>t.dataSources.streams.create(o)),delete:(o)=>x(()=>t.dataSources.streams.delete({streamId:o}))}}}};var Tn=g(()=>{Ym();X()});var OO;var SO=g(()=>{OO={version:2,activeProfile:"default",profiles:{default:{}}}});import*as wt from"node:fs";import*as PO from"node:os";import*as Qm from"node:path";var Oe=(e)=>{if(e===void 0||e===null)return;if(typeof e==="string")return e.length>0?e:void 0;return},Xm,so,$z=()=>{if(!wt.existsSync(Xm))wt.mkdirSync(Xm,{recursive:!0,mode:448})},Zm,AO=(e)=>{Zm=e},DO=(e)=>({token:Oe(e.token),activeOrganizationId:Oe(e.activeOrganizationId??e.organizationId),organizationName:Oe(e.organizationName),activeProjectId:Oe(e.activeProjectId??e.defaultProjectId),apiBaseUrl:Oe(e.apiBaseUrl),authBaseUrl:Oe(e.authBaseUrl),webBaseUrl:Oe(e.webBaseUrl),intakeBaseUrl:Oe(e.intakeBaseUrl),tailBaseUrl:Oe(e.tailBaseUrl),apiDomain:Oe(e.apiDomain),webDomain:Oe(e.webDomain),intakeDomain:Oe(e.intakeDomain),tailDomain:Oe(e.tailDomain),forwardPublicKey:Oe(e.forwardPublicKey),forwardPublicKeyProjectId:Oe(e.forwardPublicKeyProjectId)}),_z=(e)=>({version:2,activeProfile:"default",profiles:{default:DO(e)}}),Tz=(e)=>{let t=Oe(e.activeProfile)??"default",o=typeof e.profiles==="object"&&e.profiles!==null?e.profiles:{},n={};for(let[r,i]of Object.entries(o)){if(typeof i!=="object"||i===null)continue;n[r]=DO(i)}if(!n[t])n[t]={};return{version:2,activeProfile:t,profiles:n}},ae=()=>{try{if(!wt.existsSync(so))return ke(OO);let e=wt.readFileSync(so,"utf-8"),t=JSON.parse(e),o=typeof t.version==="number"?t.version:void 0;if(o!==void 0&&o>2)return me("Settings file requires a newer CLI version. Please upgrade.");if(o===2)return ke(Tz(t));let n=_z(t),r=ve(n);if(!r.success)return r;return ke(n)}catch(e){let t=e instanceof Error?e.message:String(e);return me(`Failed to read settings: ${t}`)}},ve=(e)=>{try{return $z(),wt.writeFileSync(so,JSON.stringify(e,null,2),{encoding:"utf-8",mode:384}),ke(void 0)}catch(t){let o=t instanceof Error?t.message:String(t);return me(`Failed to write settings: ${o}`)}},ht=(e,t)=>{if(t)return t;if(Zm)return Zm;let o=process.env.SAZABI_PROFILE?.trim();if(o)return o;return e.activeProfile??"default"},Fe=(e,t)=>{let o=ht(e,t),n=e.profiles[o];if(n)return ke(n);if(o==="default")return ke({});return me(`Profile '${o}' does not exist. Run 'sazabi profiles create ${o}' first.`)},$t=()=>{let e=ae();if(!e.success)return e;return Fe(e.value)},Ke=(e,t,o)=>{let n=ht(e,o);if(!e.profiles[n])return me(`Profile '${n}' does not exist. Run 'sazabi profiles create ${n}' first.`);return ke({...e,profiles:{...e.profiles,[n]:{...e.profiles[n],...t}}})},_t=(e)=>{if(!e?.forwardPublicKey&&!e?.forwardPublicKeyProjectId)return{};return{forwardPublicKey:void 0,forwardPublicKeyProjectId:void 0}};var We=g(()=>{SO();X();Xm=Qm.join(PO.homedir(),".sazabi"),so=Qm.join(Xm,"settings.json")});var ut=(e)=>{let{cliFlag:t,globalUrl:o,globalDomain:n,buildUrlFromDomain:r,defaultUrl:i}=e;if(t)return t;let a=process.env.SAZABI_API_URL?.trim();if(a)return a;if(o)return o;if(n)return r(n);return i},L=(e)=>{let{tokenFlag:t,organizationIdFlag:o,projectIdFlag:n,jsonMode:r}=e,i=t?.trim(),a=process.env.SAZABI_TOKEN?.trim(),c=process.env.SAZABI_ORGANIZATION_ID?.trim(),h=process.env.SAZABI_PROJECT_ID?.trim(),u=I($t(),"Failed to read settings",r),d=u.token?.trim(),s=(i&&i.length>0?i:void 0)||(a&&a.length>0?a:void 0)||d,b=i&&i.length>0?"flag":a&&a.length>0?"environment":"settings";if(!s||s.length===0){if(r)return v("Not authenticated. Set SAZABI_TOKEN, pass --token, run 'sazabi auth login', or run 'sazabi auth save <token>'.");return p("Not authenticated. Set SAZABI_TOKEN, pass --token, run 'sazabi auth login', or run 'sazabi auth save <token>'.")}let m,k;if(o)m=o,k="flag";else if(c&&c.length>0)m=c,k="environment";else if(u.activeOrganizationId)m=u.activeOrganizationId,k="settings";let A,F;if(n)A=n,F="flag";else if(h&&h.length>0)A=h,F="environment";else if(u.activeProjectId)A=u.activeProjectId,F="settings";return{token:s,type:"token",projectId:A,organizationId:m,tokenSource:b,organizationSource:k,projectSource:F}},N=(e)=>{let t=I($t(),"Failed to read settings",e.jsonMode),o=ut({cliFlag:e.apiBaseUrlFlag,globalUrl:t.apiBaseUrl,globalDomain:t.apiDomain,buildUrlFromDomain:(n)=>`https://api.${n}`,defaultUrl:"https://api.sazabi.com"});return kt({token:e.token,baseUrl:o,organizationId:e.organizationId,projectId:e.projectId})},LO,ey,uc=async(e)=>{let t=I($t(),"Failed to read settings",e.jsonMode),o=ut({cliFlag:e.apiBaseUrlFlag,globalUrl:t.apiBaseUrl,globalDomain:t.apiDomain,buildUrlFromDomain:(h)=>`https://api.${h}`,defaultUrl:"https://api.sazabi.com"}),n=`${e.token}@${o}@${e.projectId??""}`,r=LO.get(n);if(r)return r;let i=ey.get(n);if(i)return i;if(!e.projectId){if(e.jsonMode)return v("Project ID is required. Run 'sazabi projects use <project-id>' or set SAZABI_PROJECT_ID.");return p("Project ID is required. Run 'sazabi projects use <project-id>' or set SAZABI_PROJECT_ID.")}let a=e.projectId,c=(async()=>{let u=await kt({token:e.token,baseUrl:o,projectId:a}).projects.get(a),s=I(u,"Failed to fetch project info",e.jsonMode).project;return LO.set(n,s),s})();ey.set(n,c);try{return await c}finally{ey.delete(n)}},hc=(e)=>{let t=e.trim().toLowerCase(),o=/^[a-z][a-z0-9+.-]*:\/\//.test(t)?t:`https://${t}`,n=t;try{n=new URL(o).hostname.toLowerCase()}catch{n=t.replace(/^[a-z][a-z0-9+.-]*:\/\//,"").replace(/[/?#].*$/,"").replace(/:\d+$/,"")}return`https://app.${n.replace(/^(?:app\.)+/,"")}`},On=(e)=>{let t=(n)=>n.replace(/\/+$/,"");if(e)return t(e);let o=I($t(),"Failed to read settings");if(o.webBaseUrl)return t(o.webBaseUrl);if(o.webDomain)return hc(o.webDomain);if(o.apiDomain)return hc(o.apiDomain);return"https://app.sazabi.com"},Tt=(e,t,o,n)=>{let r=`${On(o)}/projects/${e}/threads/${t}`;return n?`${r}?messageId=${encodeURIComponent(n)}`:r},NO=(e,t)=>{return`https://otlp.${t}.intake.${e}`};var oe=g(()=>{J();Tn();X();We();LO=new Map,ey=new Map});var fc,nP=(e)=>{fc.set(e.name,e)},Ic=(e)=>{return fc.get(e)},Sn=()=>{return Array.from(fc.values())},iP=(e)=>{return fc.has(e)};var uy=g(()=>{fc=new Map});async function by(e){let t=await e.publicKeys.list({limit:20});if(!t.success)return[];return t.value.publicKeys.map((o)=>({value:o.id,description:o.name}))}async function my(e){let t=await e.secretKeys.list({limit:20});if(!t.success)return[];return t.value.secretKeys.map((o)=>({value:o.id,description:o.name}))}async function l1(e){let t=await e.dataSources.connections.list();if(!t.success)return[];return t.value.connections.map((o)=>({value:o.id,description:o.displayName??void 0}))}async function lP(e){let t=await e.members.list();if(!t.success)return[];return t.value.members.map((o)=>({value:o.userId,description:o.name??o.email}))}var a1=3000,c1,hP=async(e,t,o)=>{try{let n=c1[e]?.[t];if(!n)return[];let r=$t();if(!r.success)return[];let i=r.value,a=process.env.SAZABI_TOKEN?.trim()||i.token?.trim();if(!a)return[];let c=ut({globalUrl:i.apiBaseUrl,globalDomain:i.apiDomain,buildUrlFromDomain:(d)=>`https://api.${d}`,defaultUrl:"https://api.sazabi.com"}),h=kt({token:a,baseUrl:c,organizationId:i.activeOrganizationId,projectId:i.activeProjectId});return(await Promise.race([n(h),new Promise((d)=>setTimeout(()=>d([]),a1))])).filter((d)=>d.value.startsWith(o))}catch{return[]}};var uP=g(()=>{Tn();oe();We();c1={threads:{get:async(e)=>{let t=await e.threads.list({limit:20});if(!t.success)return[];return t.value.threads.map((o)=>({value:o.id,description:o.title??void 0}))}},projects:{use:async(e)=>{let t=await e.projects.list();if(!t.success)return[];return t.value.projects.map((o)=>({value:o.id,description:o.name}))}},organizations:{use:async(e)=>{let t=await e.organizations.list();if(!t.success)return[];return t.value.organizations.map((o)=>({value:o.id,description:o.name}))},rename:async(e)=>{let t=await e.organizations.list();if(!t.success)return[];return t.value.organizations.map((o)=>({value:o.id,description:o.name}))}},"public-keys":{get:by,update:by,deactivate:by},"secret-keys":{get:my,update:my,delete:my},"data-sources":{"get-connection":l1},members:{"update-role":lP,remove:lP}}});var dP={};et(dP,{parseCompletionContext:()=>s1,getCompletions:()=>d1});var h1,u1,s1=(e)=>{let t=e.length>0?e:[""],o=t.length-1,n=t[o]??"";return{words:t,currentIndex:o,partial:n}},d1=async(e)=>{let{words:t,currentIndex:o,partial:n}=e,r=t[o-1];if(r==="--profile")return y1(n);let i=m1(t),a=Math.max(0,i.length-(t.length-o));if(a===0)return g1(n);let c=i[0]??"",h=Ic(c);if(!h)return[];if(a===1&&h.subcommands){if(n.startsWith("-"))return sP(h.options,i);return b1(h,n)}let u=h.subcommands?i[1]:void 0,s=(u?h.subcommands?.[u]:void 0)?.options??h.options;if(n.startsWith("-"))return sP(s,i);if(r?.startsWith("--")){let b=r.slice(2);if(s?.[b]?.type==="string"){let k=`${c}:${u??""}`,A=u1[k]?.[b]??h1[b];if(A)return A.filter((F)=>F.startsWith(n)).map((F)=>({value:F}));return[]}}return hP(c,u??"",n)},g1=(e)=>{let o=Sn().filter((r)=>r.name.startsWith(e)).map((r)=>({value:r.name,description:r.description})),n=[{value:"--help",description:"Show help"},{value:"--version",description:"Show version"},{value:"--profile",description:"Use a named profile"}];for(let r of n)if(r.value.startsWith(e))o.push(r);return o},b1=(e,t)=>{if(!e.subcommands)return[];return Object.values(e.subcommands).filter((o)=>o.name.startsWith(t)).map((o)=>({value:o.name,description:o.description}))},sP=(e,t)=>{let o=t[t.length-1]??"",n=new Set(t.filter((i)=>i.startsWith("--")).map((i)=>i.replace(/=.*/,""))),r=[];if(!n.has("--help")&&"--help".startsWith(o))r.push({value:"--help",description:"Show help"});if(!n.has("--profile")&&"--profile".startsWith(o))r.push({value:"--profile",description:"Use a named profile"});if(!e)return r;for(let[i,a]of Object.entries(e)){let c=`--${i}`;if(n.has(c))continue;if(!c.startsWith(o))continue;r.push({value:c,description:a.description})}return r},m1=(e)=>{let t=[];for(let o=0;o<e.length;o++){let n=e[o];if(n==="--profile"&&o+1<e.length)o++;else if(n.startsWith("--profile="));else t.push(n)}return t},y1=(e)=>{try{let t=ae();if(!t.success)return[];return Object.keys(t.value.profiles).filter((o)=>o.startsWith(e)).map((o)=>({value:o,description:o===t.value.activeProfile?"active":void 0}))}catch{return[]}};var gP=g(()=>{uy();We();uP();h1={status:["regular","archived"],format:["json","text"]},u1={"members:update-role":{role:["admin","member"]},"messages:search":{role:["user","assistant"]},"messages:list":{role:["user","assistant"]}}});J();J();Ym();import{spawn as Oz}from"node:child_process";J();import{parseArgs as fz}from"node:util";var O=(e,t,o={})=>{let n=fz({args:e,options:t,allowPositionals:Boolean(o.allowPositionals),strict:!1,tokens:!0}),r=Object.hasOwn(t,"json")&&n.values.json===!0,i=new Set(Object.keys(t)),a=new Set(Object.entries(t).map(([,h])=>h.short).filter((h)=>Boolean(h))),c=[];if(Array.isArray(n.tokens))for(let h of n.tokens){if(h.kind!=="option")continue;let u=h.name,d=u.length>1;if(!(i.has(u)||!d&&a.has(u))){let b=d?`--${u}`:`-${u}`;if(!c.includes(b))c.push(b)}}for(let h of Object.keys(n.values))if(!i.has(h)){let u=h.length>1?`--${h}`:`-${h}`;if(!c.includes(u))c.push(u)}if(c.length>0){let h=`Unknown option${c.length>1?"s":""}: ${c.join(", ")}`;if(r)v(h);p(h)}for(let[h,u]of Object.entries(t))if(u.type==="string"&&n.values[h]===!0){let s=`Option ${h.length===1?`-${h}`:`--${h}`} requires a value`;if(r)v(s);p(s)}for(let[h,u]of Object.entries(t)){let d=n.values[h];if(u.type==="string"&&typeof d==="string"){if(d.startsWith("--")||d.length===2&&d[0]==="-"&&/[a-zA-Z]/.test(d.charAt(1))){let m=`Option ${h.length===1?`-${h}`:`--${h}`} received "${d}" as its value. Did you forget to provide a value?`;if(r)v(m);p(m)}}}return{values:n.values,positionals:n.positionals}};var G={token:{type:"string"},"api-base-url":{type:"string"},json:{type:"boolean"}},H={token:{type:"string",description:"Override token"},"api-base-url":{type:"string",description:"Override API base URL"},json:{type:"boolean",description:"Output as JSON"}};oe();var sc=(e,t)=>{let o=e?.json;if(!o||o.type!=="boolean")throw Error(`${t} must include a boolean --json option (enforced by CommandBuilder)`)};class CO{name;description;handler;subcommands;options;examples;positionalArgs;allowNoJson=!1;constructor(e,t,o){this.name=e,this.description=t,this.handler=o}withOptions(e){return this.options=e,this}withSubcommands(e){return this.subcommands=e,this}withExamples(e){return this.examples=e,this}withPositionalArgs(e){return this.positionalArgs=e,this}build(){if(!this.handler&&!this.subcommands)throw Error(`Subcommand "${this.name}" must have either a handler or subcommands`);if(!this.allowNoJson&&this.handler)sc(this.options,`Subcommand "${this.name}"`);if(!this.allowNoJson&&this.subcommands){for(let[e,t]of Object.entries(this.subcommands))if(!t.subcommands)sc(t.options,`Subcommand "${this.name} ${e}"`)}return{name:this.name,description:this.description,handler:this.handler,subcommands:this.subcommands,options:this.options,examples:this.examples,positionalArgs:this.positionalArgs}}allowWithoutJson(){return this.allowNoJson=!0,this}}class xO{name;description;handler;subcommands;options;examples;positionalArgs;allowNoJson=!1;constructor(e,t){this.name=e,this.description=t}withHandler(e){return this.handler=e,this}withSubcommands(e){return this.subcommands=e,this}withOptions(e){return this.options=e,this}withExamples(e){return this.examples=e,this}withPositionalArgs(e){return this.positionalArgs=e,this}build(){if(!this.handler&&!this.subcommands)throw Error(`Command "${this.name}" must have either a handler or subcommands`);if(!this.allowNoJson){if(this.handler)sc(this.options,`Command "${this.name}"`);if(this.subcommands)for(let[e,t]of Object.entries(this.subcommands)){if(t.subcommands)continue;sc(t.options,`Subcommand "${this.name} ${e}"`)}}return{name:this.name,description:this.description,handler:this.handler,subcommands:this.subcommands,options:this.options,examples:this.examples,positionalArgs:this.positionalArgs}}allowWithoutJson(){return this.allowNoJson=!0,this}}var W=(e,t)=>{return new xO(e,t)},S=(e,t,o)=>{return new CO(e,t,o)};X();We();var go=(e)=>{if(e==="flag")return"from flag";if(e==="environment")return"from environment";return"from settings"},Sz=async(e={})=>{let t=L({jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.me(),"Failed to fetch authentication details",e.json);if(e.json){E({credential:n,activeOrganizationId:t.organizationId,activeProjectId:t.projectId,tokenSource:t.tokenSource,organizationSource:t.organizationSource,projectSource:t.projectSource});return}if(le("Authentication"),n.credentialType==="user"){ie({Type:`User token (${go(t.tokenSource)})`,User:n.user.name??n.user.email,Email:n.user.email,"Active Organization":t.organizationId&&t.organizationSource?`${t.organizationId} (${go(t.organizationSource)})`:_e("(none)"),"Active Project":t.projectId&&t.projectSource?`${t.projectId} (${go(t.projectSource)})`:_e("(none)"),Organizations:n.organizations.length.toString(),"Dashboard URL":On()});return}if(n.credentialType==="secret"){ie({Type:`Secret key (${go(t.tokenSource)})`,Organization:n.organization.name,"Key Name":n.keyName,"Active Project":t.projectId&&t.projectSource?`${t.projectId} (${go(t.projectSource)})`:_e("(none)"),"Dashboard URL":On()});return}ie({Type:`Partner key (${go(t.tokenSource)})`,Superorganization:n.superorganization.name,"Dashboard URL":On()})},Pz=async(e,t={})=>{let o=e.trim();if(!o){if(t.json)return v("Token is required.");return p("Token is required.")}let n=I(ae(),"Failed to read settings",t.json);await ty({token:o,options:t,cliSettings:n,status:"saved"})},zO=(e)=>{let t=process.platform,o,n;if(t==="darwin")o="open",n=[e];else if(t==="win32")o="cmd",n=["/c","start","",e];else o="xdg-open",n=[e];let r=Oz(o,n,{detached:!0,stdio:"ignore"});r.on("error",()=>{}),r.unref()},jO=(e)=>new Promise((t)=>setTimeout(t,e)),Az=async(e={})=>{let t=I(ae(),"Failed to read settings",e.json),o=ht(t),n=t.profiles[o]??{},r=ry(n,e.apiBaseUrl),i=EO(r,e.authBaseUrl??n.authBaseUrl),a;try{a=await Vm({apiBaseUrl:i})}catch(b){let m=b instanceof Error?b.message:String(b);if(e.json)return v(`Failed to initiate signup: ${m}`);return p(`Failed to initiate signup: ${m}`)}let c=RO({profile:n,publicApiBaseUrl:r,authBaseUrl:i,apiBaseUrlOverride:e.apiBaseUrl,authBaseUrlOverride:e.authBaseUrl,webBaseUrlOverride:e.webBaseUrl,verificationUriComplete:a.verificationUriComplete}),h=`/login/cli?user_code=${encodeURIComponent(a.userCode)}`,u=`${c}/sign-up?returnTo=${encodeURIComponent(h)}`,d=new Date(Date.now()+a.expiresIn*1000),s=a.interval*1000;if(!e.json)K(),le("Create a Sazabi account"),K(),tt(`Opening ${ce.info(u)}`),K(),zO(u),Y("Waiting for signup to complete...");while(new Date<d){await jO(s);try{let b=await Wm({apiBaseUrl:i,deviceCode:a.deviceCode});if(b.status==="pending"){s=(b.interval??a.interval)*1000;continue}if(b.status==="denied"){if(e.json)return v("Signup was denied.");return K(),p("Signup was denied.")}if(b.status==="expired"){if(e.json)return v("Signup request expired. Please try again.");return K(),p("Signup request expired. Please try again.")}await ty({token:b.accessToken,options:e,cliSettings:t,status:"authorized"});return}catch(b){let m=b instanceof Error?b.message:String(b);if(e.json)return v(`Signup failed: ${m}`);return K(),p(`Signup failed: ${m}`)}}if(e.json)return v("Signup request expired. Please try again.");return K(),p("Signup request expired. Please try again.")},Dz=async(e={})=>{let t=I(ae(),"Failed to read settings",e.json),o=ht(t),n=t.profiles[o]??{},r=ry(n,e.apiBaseUrl),i=EO(r,e.authBaseUrl??n.authBaseUrl),a;try{a=await Vm({apiBaseUrl:i})}catch(s){let b=s instanceof Error?s.message:String(s);if(e.json)return v(`Failed to initiate login: ${b}`);return p(`Failed to initiate login: ${b}`)}let c=RO({profile:n,publicApiBaseUrl:r,authBaseUrl:i,apiBaseUrlOverride:e.apiBaseUrl,authBaseUrlOverride:e.authBaseUrl,webBaseUrlOverride:e.webBaseUrl,verificationUriComplete:a.verificationUriComplete}),h=Uz(a.verificationUriComplete,c),u=new Date(Date.now()+a.expiresIn*1000),d=a.interval*1000;if(!e.json)K(),le("Login to Sazabi"),K(),tt("Enter this code in your browser:"),K(),tt(ce.bold(a.userCode),4),K(),tt(`Opening ${ce.info(h)}`),K(),zO(h),Y("Waiting for authorization...");while(new Date<u){await jO(d);try{let s=await Wm({apiBaseUrl:i,deviceCode:a.deviceCode});if(s.status==="pending"){d=(s.interval??a.interval)*1000;continue}if(s.status==="denied"){if(e.json)return v("Authorization was denied.");return K(),p("Authorization was denied.")}if(s.status==="expired"){if(e.json)return v("Authorization request expired. Please try again.");return K(),p("Authorization request expired. Please try again.")}await ty({token:s.accessToken,options:e,cliSettings:t,status:"authorized"});return}catch(s){let b=s instanceof Error?s.message:String(s);if(e.json)return v(`Authorization failed: ${b}`);return K(),p(`Authorization failed: ${b}`)}}if(e.json)return v("Authorization request expired. Please try again.");return K(),p("Authorization request expired. Please try again.")},Lz=(e)=>{let t=I(ae(),"Failed to read settings",e.json),o=I(Fe(t),"Failed to resolve profile",e.json),n=Boolean(o.token),r=I(Ke(t,{token:void 0,activeOrganizationId:void 0,organizationName:void 0,activeProjectId:void 0,..._t(o)}),"Failed to update profile",e.json);if(I(ve(r),"Failed to remove credentials",e.json),e.json){E({removed:n});return}if(n){V("Logged out successfully.");return}Y("No credentials were saved.")},ty=async({token:e,options:t,cliSettings:o,status:n})=>{let r=ht(o),i=o.profiles[r]??{},a=ry(i,t.apiBaseUrl),c=N({token:e,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),h=I(await c.me(),`Failed to resolve authenticated context at ${a} (pass --api-base-url to target a different environment)`,t.json);if(n==="authorized"&&h.credentialType!=="user"){if(t.json)return v("Expected a user session from device authorization.");return p("Expected a user session from device authorization.")}let u=o.profiles[r]?o:{...o,profiles:{...o.profiles,[r]:{}}},d=u.profiles[r],s=await Nz({client:c,credential:h,currentProjectId:d.activeProjectId,jsonMode:t.json}),b=d.token!==e||d.activeOrganizationId!==s.activeOrganizationId||d.activeProjectId!==s.activeProjectId,m=I(Ke(u,{token:e,activeOrganizationId:s.activeOrganizationId,organizationName:s.activeOrganizationName,activeProjectId:s.activeProjectId,apiBaseUrl:t.apiBaseUrl??d.apiBaseUrl,authBaseUrl:t.authBaseUrl??d.authBaseUrl,webBaseUrl:t.webBaseUrl??d.webBaseUrl,...b&&_t(d)}),"Failed to update profile",t.json);if(I(ve(m),"Failed to save credentials",t.json),t.json){E({status:n,credential:h,activeOrganizationId:s.activeOrganizationId,activeProjectId:s.activeProjectId,projects:s.projects});return}if(K(),V(n==="authorized"?"Successfully authenticated!":"Saved token."),K(),xz({credential:h,activeOrganizationName:s.activeOrganizationName,activeProjectId:s.activeProjectId,projects:s.projects}),s.projects.length>0){K(),le("Available Projects");for(let k of s.projects){let F=k.id===s.activeProjectId?ce.success(" (active)"):"";tt(`${k.name} (${k.region})${F}`)}}},Nz=async({client:e,credential:t,currentProjectId:o,jsonMode:n})=>{if(t.credentialType==="partner")return{projects:[]};let r=t.credentialType==="user"?t.activeOrganizationId??t.organizations[0]?.id:t.organization.id,i=t.credentialType==="user"?t.organizations.find((c)=>c.id===r)?.name:t.organization.name,a=r?I(await e.projects.list({organizationId:r}),"Failed to fetch projects",n).projects:[];return{activeOrganizationId:r,activeOrganizationName:i,activeProjectId:Cz(a,o),projects:a}},Cz=(e,t)=>{if(t&&e.some((o)=>o.id===t))return t;return e[0]?.id},xz=({credential:e,activeOrganizationName:t,activeProjectId:o,projects:n})=>{if(e.credentialType==="user"){ie({Type:"User token",User:e.user.name??e.user.email,Organizations:e.organizations.length.toString(),"Active Organization":t??"(none)","Active Project":n.find((r)=>r.id===o)?.name??"(none)"});return}if(e.credentialType==="secret"){ie({Type:"Secret key",Organization:e.organization.name,"Key Name":e.keyName,"Active Project":n.find((r)=>r.id===o)?.name??"(none)"});return}ie({Type:"Partner key",Superorganization:e.superorganization.name})},ry=(e,t)=>{return ut({cliFlag:t,globalUrl:e.apiBaseUrl,globalDomain:e.apiDomain,buildUrlFromDomain:(o)=>`https://api.${o}`,defaultUrl:"https://api.sazabi.com"})},EO=(e,t)=>{if(t)return t;try{let o=new URL(e);if(["localhost","127.0.0.1"].includes(o.hostname)&&["15005","15009"].includes(o.port))return o.port="15001",o.toString().replace(/\/$/,"");if(o.hostname==="api.sazabi.com")return o.hostname="api.platform.sazabi.com",o.toString().replace(/\/$/,"");if(o.hostname==="api.staging.sazabi.dev")return o.hostname="api.platform.staging.sazabi.dev",o.toString().replace(/\/$/,"");return o.toString().replace(/\/$/,"")}catch{return e}},UO=(e)=>e.replace(/\/+$/,""),Be=(e)=>(e?.trim().length??0)>0,zz=(e)=>{if(!Be(e))return;try{let t=new URL(e);return`${t.protocol}//${t.host}`}catch{return}},dc=(e)=>{if(!Be(e))return;try{let o=new URL(e).hostname.toLowerCase();if(["localhost","127.0.0.1"].includes(o))return"https://localhost:5173";if(["api.staging.sazabi.dev","api.platform.staging.sazabi.dev"].includes(o))return"https://app.staging.sazabi.dev";if(["api.sazabi.com","api.platform.sazabi.com"].includes(o))return"https://app.sazabi.com"}catch{return}return},jz=(e)=>{if(Be(e.webBaseUrl))return UO(e.webBaseUrl);if(Be(e.webDomain))return hc(e.webDomain);return},Ez=({profile:e,publicApiBaseUrl:t})=>{if(!(Be(e.authBaseUrl)||Be(e.apiBaseUrl)||Be(e.apiDomain)))return;if(Be(e.authBaseUrl)){let n=dc(e.authBaseUrl);if(n)return n}return dc(t)},RO=({profile:e,publicApiBaseUrl:t,authBaseUrl:o,apiBaseUrlOverride:n,authBaseUrlOverride:r,webBaseUrlOverride:i,verificationUriComplete:a})=>{if(Be(i))return UO(i);let c=process.env.SAZABI_API_URL?.trim(),h=Be(r)||Be(n)||Be(c),u=zz(a);if(h){let b=Be(r)?dc(o):dc(t);if(b)return b;if(u)return u}let d=jz(e);if(d)return d;let s=Ez({profile:e,publicApiBaseUrl:t});if(s)return s;if(u)return u;return"https://app.sazabi.com"},Uz=(e,t)=>{if(!t)return e;try{let o=new URL(e),n=new URL(t);return o.protocol=n.protocol,o.host=n.host,o.toString()}catch{return e}},FO=W("auth","Manage authentication credentials").withSubcommands({signup:S("signup","Create a new Sazabi account via browser",async(e)=>{let{values:t,positionals:o}=O(e,{...G,"auth-base-url":{type:"string"},"web-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Az({json:t.json,apiBaseUrl:t["api-base-url"],authBaseUrl:t["auth-base-url"],webBaseUrl:t["web-base-url"]})}).withOptions({...H,"auth-base-url":{type:"string",description:"Override auth API base URL"},"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth signup  # Create a new account via browser"]).build(),login:S("login","Authenticate via browser",async(e)=>{let{values:t,positionals:o}=O(e,{...G,"auth-base-url":{type:"string"},"web-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Dz({json:t.json,apiBaseUrl:t["api-base-url"],authBaseUrl:t["auth-base-url"],webBaseUrl:t["web-base-url"]})}).withOptions({...H,"auth-base-url":{type:"string",description:"Override auth API base URL"},"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth login  # Authenticate via browser"]).build(),save:S("save","Save an existing bearer token",async(e)=>{let{values:t,positionals:o}=O(e,{...G,"web-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Token is required.");return p("Token is required.")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await Pz(n,{json:t.json,apiBaseUrl:t["api-base-url"],webBaseUrl:t["web-base-url"]})}).withPositionalArgs("<token>").withOptions({...H,"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth save sazabi_secret_xxx  # Save a secret key for future commands"]).build(),logout:S("logout","Remove saved credentials",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}Lz({json:t.json})}).withOptions(H).withExamples(["sazabi auth logout  # Remove saved credentials"]).build(),whoami:S("whoami","Display current authentication context",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Sz({json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions(H).withExamples(["sazabi auth whoami  # Show current context","sazabi auth whoami --json  # Output as JSON"]).build()}).withExamples(["sazabi auth signup  # Create a new account via browser","sazabi auth login  # Authenticate via browser","sazabi auth save sazabi_secret_xxx  # Save an existing token","sazabi auth logout  # Remove saved credentials","sazabi auth whoami  # Show current context"]).build();J();var KO=()=>`
_sazabi() {
  local -a completions
  local line IFS=$'\\n'

  # words[1] is 'sazabi' in zsh; pass words[2] through words[CURRENT]
  for line in $(sazabi --get-completions -- "\${words[@]:1}" 2>/dev/null); do
    local val="\${line%%$'\\t'*}"
    local desc="\${line#*$'\\t'}"
    if [[ "$val" != "$desc" ]]; then
      completions+=("\${val}:\${desc}")
    else
      completions+=("\${val}")
    fi
  done

  _describe 'sazabi' completions
}

compdef _sazabi sazabi
`.trim(),BO=()=>`
_sazabi() {
  local cur="\${COMP_WORDS[COMP_CWORD]}"
  local IFS=$'\\n'
  local completions

  # Pass words after 'sazabi' to the completion engine
  completions=$(sazabi --get-completions -- "\${COMP_WORDS[@]:1}" 2>/dev/null)

  COMPREPLY=()
  local vals=()
  while IFS=$'\\t' read -r val desc; do
    [[ -n "$val" ]] && vals+=("$val")
  done <<< "$completions"

  COMPREPLY=($(compgen -W "\${vals[*]}" -- "$cur"))
}

complete -F _sazabi sazabi
`.trim();var Rz=async(e)=>{let{values:t}=O(e,{json:{type:"boolean"}}),o=KO();if(t.json){E({shell:"zsh",script:o});return}console.log(o)},Fz=async(e)=>{let{values:t}=O(e,{json:{type:"boolean"}}),o=BO();if(t.json){E({shell:"bash",script:o});return}console.log(o)},GO=W("completions","Shell completion scripts").withSubcommands({zsh:S("zsh","Output zsh completion script",Rz).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(['eval "$(sazabi completions zsh)"   # Add to .zshrc']).build(),bash:S("bash","Output bash completion script",Fz).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(['eval "$(sazabi completions bash)"  # Add to .bashrc']).build()}).withExamples(['eval "$(sazabi completions zsh)"   # Enable zsh completions','eval "$(sazabi completions bash)"  # Enable bash completions']).build();J();oe();X();var Kz={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}}},Bz={schema:Kz,columns:["id","name"],header:"Data source types",emptyMessage:"No data source types found."},HO={id:{label:"ID",type:{kind:"string"}},dataSourceType:{label:"Type",type:{kind:"string"}},displayName:{label:"Name",type:{kind:"nullable-string"}},projectId:{label:"Project",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}}},Gz={schema:HO,columns:["id","dataSourceType","displayName","createdAt"],header:"Connections",emptyMessage:"No data source connections found."},Hz={layout:"field-list",schema:HO,fields:["id","dataSourceType","displayName","projectId","createdAt"],title:"Connection"},MO={id:{label:"ID",type:{kind:"string"}},displayName:{label:"Name",type:{kind:"string"}},connectionId:{label:"Connection",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},errorMessage:{label:"Error",type:{kind:"nullable-string"}},createdAt:{label:"Created",type:{kind:"date"}}},Mz={schema:MO,columns:["id","displayName","status","errorMessage","createdAt"],header:"Streams",emptyMessage:"No streams found for this connection."},Jz={layout:"field-list",schema:MO,fields:["id","connectionId","displayName","status","errorMessage","createdAt"],title:"Stream"},st=(e)=>{let t=e.json,o=L({tokenFlag:e.token,jsonMode:t});return{client:N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:t}),json:t}},qz=async(e)=>{let{values:t}=O(e,G),{client:o,json:n}=st(t),{types:r}=I(await o.dataSources.listTypes(),"Failed to list data source types",n),i=[...r].sort((a,c)=>a.name.localeCompare(c.name));q(Bz,i,{json:n})},Vz=async(e)=>{let{values:t}=O(e,{...G,type:{type:"string"},"project-id":{type:"string"}}),{client:o,json:n}=st(t),{connections:r}=I(await o.dataSources.connections.list({projectId:t["project-id"],dataSourceType:t.type}),"Failed to list connections",n);q(Gz,r,{json:n})},Wz=async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Connection ID is required.");return p("Connection ID is required.")}let{client:r,json:i}=st(t),{connection:a}=I(await r.dataSources.connections.get(n),"Failed to get connection",i);U(Hz,a,{json:i})},Yz=async(e)=>{let{values:t}=O(e,{...G,type:{type:"string"},metadata:{type:"string"},"display-name":{type:"string"},"project-id":{type:"string"}});if(!t.type){if(t.json)return v("--type is required.");return p("--type is required. Use 'sazabi data-sources types' to see available types.")}if(!t.metadata){if(t.json)return v("--metadata is required.");return p("--metadata is required. Pass a JSON object with the required fields.")}let o;try{o=JSON.parse(t.metadata)}catch{if(t.json)return v("--metadata must be valid JSON.");return p("--metadata must be valid JSON.")}let{client:n,json:r}=st(t),i=I(await n.dataSources.connections.create({dataSourceType:t.type,metadata:o,displayName:t["display-name"],projectId:t["project-id"]}),"Failed to create connection",r);if(r){E(i);return}V("Connection created."),ie({"Connection ID":i.connectionId,"Public key":i.publicKey})},Xz=async(e)=>{let{values:t}=O(e,{...G,"connection-id":{type:"string"}});if(!t["connection-id"]){if(t.json)return v("--connection-id is required.");return p("--connection-id is required.")}let{client:o,json:n}=st(t),{streams:r}=I(await o.dataSources.streams.list(t["connection-id"]),"Failed to list streams",n);q(Mz,r,{json:n})},Zz=async(e)=>{let{values:t}=O(e,{...G,"connection-id":{type:"string"},"display-name":{type:"string"},config:{type:"string"}});if(!t["connection-id"]){if(t.json)return v("--connection-id is required.");return p("--connection-id is required.")}if(!t["display-name"]){if(t.json)return v("--display-name is required.");return p("--display-name is required.")}let o={};if(t.config)try{o=JSON.parse(t.config)}catch{if(t.json)return v("--config must be valid JSON.");return p("--config must be valid JSON.")}let{client:n,json:r}=st(t),i=I(await n.dataSources.streams.create({connectionId:t["connection-id"],displayName:t["display-name"],config:o}),"Failed to create stream",r);if(r){E(i);return}V("Stream created. Provisioning started."),ie(i.publicKey?{"Stream ID":i.streamId,"Public key":i.publicKey}:{"Stream ID":i.streamId})},Qz=async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Stream ID is required.");return p("Stream ID is required.")}let{client:r,json:i}=st(t),{stream:a}=I(await r.dataSources.streams.get(n),"Failed to get stream",i);U(Jz,a,{json:i})},ej=async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Stream ID is required.");return p("Stream ID is required.")}let{client:r,json:i}=st(t),a=I(await r.dataSources.streams.delete(n),"Failed to remove stream",i);if(i){E(a);return}V("Stream removed.")},tj=async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Connection ID is required.");return p("Connection ID is required.")}let{client:r,json:i}=st(t),a=I(await r.dataSources.connections.disconnect(n),"Failed to disconnect connection",i);if(i){E(a);return}if(a.connectionTeardownError){Ge(`Connection disconnected, but remote cleanup failed: ${a.connectionTeardownError}`);return}V("Connection disconnected.")},rj=async(e)=>{let{values:t}=O(e,{...G,type:{type:"string"}});if(!t.type){if(t.json)return v("--type is required.");return p("--type is required. Use 'sazabi data-sources types' to see types with skills.")}let{client:o,json:n}=st(t),{types:r}=I(await o.dataSources.listTypes(),"Failed to list data source types",n),i=r.find((a)=>a.id===t.type);if(!i){if(n)return v(`Unknown data source type: ${t.type}`);return p(`Unknown data source type: ${t.type}`)}if(!i.setupSkill){if(n)return v(`No setup skill available for ${t.type}.`);return p(`No setup skill available for ${t.type}. This data source does not have an agent-ready skill yet.`)}if(n){E({type:t.type,setupSkill:i.setupSkill});return}Y(i.setupSkill)},JO=W("data-sources","Manage data source connections and streams").withSubcommands({types:S("types","List supported data source types",qz).withOptions(H).withExamples(["sazabi data-sources types           # List all types","sazabi data-sources types --json    # Output as JSON"]).build(),connections:S("connections","Manage data source connections").withSubcommands({list:S("list","List data source connections",Vz).withOptions({...H,type:{type:"string",description:"Filter by data source type"},"project-id":{type:"string",description:"Project ID"}}).withExamples(["sazabi data-sources connections list                  # List all connections","sazabi data-sources connections list --type vercel    # Filter by type"]).build(),get:S("get","Get one data source connection",Wz).withPositionalArgs("<connection-id>").withOptions(H).withExamples(["sazabi data-sources connections get <id>  # Get connection details"]).build(),create:S("create","Create a data source connection",Yz).withOptions({...H,type:{type:"string",description:"Data source type (required)"},metadata:{type:"string",description:"JSON metadata (required)"},"display-name":{type:"string",description:"Human-readable name"},"project-id":{type:"string",description:"Project ID"}}).withExamples([`sazabi data-sources connections create --type fly_io --metadata '{"apiToken":"..."}'  # Create Fly.io connection`]).build(),disconnect:S("disconnect","Disconnect a data source connection",tj).withPositionalArgs("<connection-id>").withOptions(H).withExamples(["sazabi data-sources connections disconnect <id>  # Disconnect connection"]).build()}).withExamples(["sazabi data-sources connections list                  # List all connections","sazabi data-sources connections list --type vercel    # Filter by type","sazabi data-sources connections disconnect <id>       # Disconnect a connection"]).build(),streams:S("streams","Manage data source streams").withSubcommands({list:S("list","List streams for a connection",Xz).withOptions({...H,"connection-id":{type:"string",description:"Connection ID (required)"}}).withExamples(["sazabi data-sources streams list --connection-id <id>  # List streams"]).build(),get:S("get","Get one stream (check provisioning status)",Qz).withPositionalArgs("<stream-id>").withOptions(H).withExamples(["sazabi data-sources streams get <id>  # Check stream status"]).build(),create:S("create","Create a stream for a connection",Zz).withOptions({...H,"connection-id":{type:"string",description:"Connection ID (required)"},"display-name":{type:"string",description:"Resource name (required)"},config:{type:"string",description:"JSON stream config"}}).withExamples(['sazabi data-sources streams create --connection-id <id> --display-name "my-app"  # Create stream']).build(),remove:S("remove","Remove a stream from a connection",ej).withPositionalArgs("<stream-id>").withOptions(H).withExamples(["sazabi data-sources streams remove <id>  # Remove a stream"]).build()}).withExamples(["sazabi data-sources streams list --connection-id <id>  # List streams","sazabi data-sources streams remove <id>                # Remove a stream"]).build(),skill:S("skill","Show setup skill for a data source type",rj).withOptions({...H,type:{type:"string",description:"Data source type (required)"}}).withExamples(["sazabi data-sources skill --type gcp      # Show GCP setup skill","sazabi data-sources skill --type fly_io    # Show Fly.io setup skill"]).build()}).withExamples(["sazabi data-sources types                                                        # List available types","sazabi data-sources connections create --type fly_io --metadata '{...}'           # Create connection","sazabi data-sources streams list --connection-id <id>                             # List streams","sazabi data-sources skill --type gcp                                             # Show agent setup skill"]).build();J();ac();import{readFile as oj}from"node:fs/promises";oe();X();var qO={id:{label:"ID",type:{kind:"string"}},projectId:{label:"Project",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},severity:{label:"Severity",type:{kind:"severity"}},statusComponentId:{label:"Status Component",type:{kind:"nullable-string"}},createdAt:{label:"Created",type:{kind:"date"}},resolvedAt:{label:"Resolved",type:{kind:"nullable-date"}},mutedAt:{label:"Muted",type:{kind:"nullable-date"}},muteHitCount:{label:"Mute Hits",type:{kind:"number"}},lastActivityAt:{label:"Last Activity",type:{kind:"nullable-date"}},lastDeliveredAt:{label:"Last Delivered",type:{kind:"nullable-date"}},whatHappened:{label:"What Happened",type:{kind:"nullable-string"}},whyItHappened:{label:"Why It Happened",type:{kind:"nullable-string"}},howToFix:{label:"How To Fix",type:{kind:"nullable-string"}},delivery:{label:"Delivery",type:{kind:"custom",render:(e)=>e==null?"(none)":JSON.stringify(e,null,2),serialize:(e)=>e??null}}},VO=["id","projectId","name","status","severity","statusComponentId","createdAt","resolvedAt","mutedAt","muteHitCount","lastActivityAt","lastDeliveredAt","whatHappened","whyItHappened","howToFix"],WO={schema:qO,columns:["id","name","status","severity","createdAt","mutedAt"],jsonFields:VO,header:"Issues",emptyMessage:"No issues found."},nj={...WO,jsonFields:[...VO,"delivery"]},bo={layout:"sections",schema:qO,primary:{title:"Issue",fields:["id","name","status","severity","createdAt","resolvedAt","mutedAt","muteHitCount","lastActivityAt","lastDeliveredAt","statusComponentId"]},secondary:[{title:"What Happened",field:"whatHappened"},{title:"Why It Happened",field:"whyItHappened"},{title:"How To Fix",field:"howToFix"}]},ij={layout:"field-list",title:"Issue Counts",schema:{total:{label:"Total",type:{kind:"number"}},byStatus:{label:"By Status",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}},bySeverity:{label:"By Severity",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}},filters:{label:"Filters",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e},get:(e)=>e.filters}},fields:["total","byStatus","bySeverity","filters"]},aj=kn.partial(),cj={whatHappened:"What happened cannot be empty",whyItHappened:"Why it happened cannot be empty",howToFix:"How to fix it cannot be empty"},lj=async(e)=>{let t=await pj(e);if(!t.ok){if(e.json)return v(t.message);return p(t.message)}let o=L({tokenFlag:e.token,jsonMode:e.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),r=I(await n.issues.create(t.input),"Failed to create issue",e.json);U(bo,r.issue,{json:e.json})},hj=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.issues.list({status:e.status,severity:e.severity,statusComponentId:e.statusComponentId,limit:e.limit,cursor:e.cursor}),"Failed to list issues",e.json);q(WO,n.issues,{json:e.json,nextCursor:n.nextCursor})},uj=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.issues.search({name:e.name,status:e.status,severity:e.severity,statusComponentId:e.statusComponentId,limit:e.limit,cursor:e.cursor,includeDeliveryMetadata:e.includeDeliveryMetadata}),"Failed to search issues",e.json);q(nj,n.issues,{json:e.json,nextCursor:n.nextCursor})},sj=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.issues.count({name:e.name,status:e.status,severity:e.severity,statusComponentId:e.statusComponentId}),"Failed to count issues",e.json);U(ij,n,{json:e.json})},dj=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.issues.get(e),"Failed to get issue",t.json);U(bo,r.issue,{json:t.json})},gj=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.issues.resolve(e),"Failed to resolve issue",t.json);U(bo,r.issue,{json:t.json})},bj=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.issues.ignore(e),"Failed to ignore issue",t.json);U(bo,r.issue,{json:t.json})},mj=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.issues.mute(e),"Failed to mute issue",t.json);U(bo,r.issue,{json:t.json})},yj=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.issues.unmute(e),"Failed to unmute issue",t.json);U(bo,r.issue,{json:t.json})},pj=async(e)=>{let t=e.fromJson?await vj(e.fromJson):{ok:!0,input:{}};if(!t.ok)return t;let o={...t.input,...e.name!==void 0?{name:e.name}:{},...e.whatHappened!==void 0?{whatHappened:e.whatHappened}:{},...e.whyItHappened!==void 0?{whyItHappened:e.whyItHappened}:{},...e.howToFix!==void 0?{howToFix:e.howToFix}:{},...e.severity!==void 0?{severity:e.severity}:{},...e.statusComponentId!==void 0?{statusComponentId:e.statusComponentId}:{}},n=kn.safeParse(o);if(!n.success)return{ok:!1,message:YO(n.error)};return{ok:!0,input:n.data}},vj=async(e)=>{let t;try{t=e==="-"?await fj():await oj(e,"utf8")}catch(r){return{ok:!1,message:`Failed to read issue input: ${r instanceof Error?r.message:String(r)}`}}let o;try{o=JSON.parse(t)}catch(r){return{ok:!1,message:`Failed to parse issue input JSON: ${r instanceof Error?r.message:String(r)}`}}let n=aj.safeParse(o);if(!n.success)return{ok:!1,message:YO(n.error)};return{ok:!0,input:n.data}},fj=async()=>{let e=[];process.stdin.setEncoding("utf8");for await(let t of process.stdin)e.push(String(t));return e.join("")},YO=(e)=>{let t=e.issues[0];if(!t)return"Invalid issue input.";let o=t.path[0];if(o&&t.code==="invalid_type")return cj[o]??t.message;return t.message},XO=W("issues","Manage issues").withSubcommands({create:S("create","Create an issue",async(e)=>{let{values:t}=O(e,{...G,name:{type:"string"},"what-happened":{type:"string"},"why-it-happened":{type:"string"},"how-to-fix":{type:"string"},severity:{type:"string"},"status-component":{type:"string"},"from-json":{type:"string"}});await lj({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],name:t.name,whatHappened:t["what-happened"],whyItHappened:t["why-it-happened"],howToFix:t["how-to-fix"],severity:t.severity,statusComponentId:t["status-component"],fromJson:t["from-json"]})}).withOptions({...H,name:{type:"string",description:"Stable issue name for indexing and mute matching"},"what-happened":{type:"string",description:"Concise summary of what happened"},"why-it-happened":{type:"string",description:"Root cause or best current hypothesis"},"how-to-fix":{type:"string",description:"Remediation guidance describing the next steps"},severity:{type:"string",description:"Issue severity: low, medium, high, or critical (default: medium)"},"status-component":{type:"string",description:"Status component ID to link to this issue"},"from-json":{type:"string",description:"Read issue fields from a JSON file, or '-' for stdin"}}).withExamples(['sazabi issues create --what-happened "Checkout is returning 500s" --why-it-happened "The payments API is timing out" --how-to-fix "Rollback the payments deploy"  # Create an issue from flags',"sazabi issues create --from-json issue.json  # Create an issue from a JSON file","cat issue.json | sazabi issues create --from-json - --json  # Create an issue from stdin"]).build(),list:S("list","List issues in the active project",async(e)=>{let{values:t}=O(e,{...G,status:{type:"string"},severity:{type:"string"},"status-component":{type:"string"},limit:{type:"string"},cursor:{type:"string"}}),o=["open","resolved","ignored"];if(t.status&&!o.includes(t.status)){let i=`Invalid --status "${t.status}". Must be one of: ${o.join(", ")}.`;if(t.json)return v(i);return p(i)}let n=["low","medium","high","critical"];if(t.severity&&!n.includes(t.severity)){let i=`Invalid --severity "${t.severity}". Must be one of: ${n.join(", ")}.`;if(t.json)return v(i);return p(i)}let r=t.limit?Number(t.limit):void 0;if(r!==void 0&&(Number.isNaN(r)||r<1||r>100)){if(t.json)return v("Invalid --limit. Must be an integer between 1 and 100.");return p("Invalid --limit. Must be an integer between 1 and 100.")}await hj({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],status:t.status,severity:t.severity,statusComponentId:t["status-component"],limit:r,cursor:t.cursor})}).withOptions({...H,status:{type:"string",description:"Filter by status: open, resolved, or ignored"},severity:{type:"string",description:"Filter by severity: low, medium, high, or critical"},"status-component":{type:"string",description:"Filter by status component ID"},limit:{type:"string",description:"Maximum number of issues to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples(["sazabi issues list                                        # List all issues","sazabi issues list --status open                          # List open issues only","sazabi issues list --status-component <component-id>      # List issues for a component"]).build(),search:S("search","Search issues by name and filters",async(e)=>{let{values:t,positionals:o}=O(e,{...G,name:{type:"string"},status:{type:"string"},severity:{type:"string"},"status-component":{type:"string"},limit:{type:"string"},cursor:{type:"string"},"include-delivery-metadata":{type:"boolean"}},{allowPositionals:!0}),n=["open","resolved","ignored"];if(t.status&&!n.includes(t.status)){let c=`Invalid --status "${t.status}". Must be one of: ${n.join(", ")}.`;if(t.json)return v(c);return p(c)}let r=["low","medium","high","critical"];if(t.severity&&!r.includes(t.severity)){let c=`Invalid --severity "${t.severity}". Must be one of: ${r.join(", ")}.`;if(t.json)return v(c);return p(c)}let i=t.limit?Number(t.limit):void 0;if(i!==void 0&&(Number.isNaN(i)||i<1||i>100)){if(t.json)return v("Invalid --limit. Must be an integer between 1 and 100.");return p("Invalid --limit. Must be an integer between 1 and 100.")}let a=o.join(" ").trim();await uj({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],name:t.name??(a||void 0),status:t.status,severity:t.severity,statusComponentId:t["status-component"],limit:i,cursor:t.cursor,includeDeliveryMetadata:t["include-delivery-metadata"]})}).withPositionalArgs("[name]").withOptions({...H,name:{type:"string",description:"Case-insensitive partial issue name match"},status:{type:"string",description:"Filter by status: open, resolved, or ignored"},severity:{type:"string",description:"Filter by severity: low, medium, high, or critical"},"status-component":{type:"string",description:"Filter by status component ID"},limit:{type:"string",description:"Maximum number of issues to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},"include-delivery-metadata":{type:"boolean",description:"Include delivery metadata in JSON output"}}).withExamples(['sazabi issues search "checkout" --status open  # Search open issues by name',"sazabi issues search --severity critical --json # Machine-readable search"]).build(),count:S("count","Count issues by status and severity",async(e)=>{let{values:t,positionals:o}=O(e,{...G,name:{type:"string"},status:{type:"string"},severity:{type:"string"},"status-component":{type:"string"}},{allowPositionals:!0}),n=["open","resolved","ignored"];if(t.status&&!n.includes(t.status)){let a=`Invalid --status "${t.status}". Must be one of: ${n.join(", ")}.`;if(t.json)return v(a);return p(a)}let r=["low","medium","high","critical"];if(t.severity&&!r.includes(t.severity)){let a=`Invalid --severity "${t.severity}". Must be one of: ${r.join(", ")}.`;if(t.json)return v(a);return p(a)}let i=o.join(" ").trim();await sj({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],name:t.name??(i||void 0),status:t.status,severity:t.severity,statusComponentId:t["status-component"]})}).withPositionalArgs("[name]").withOptions({...H,name:{type:"string",description:"Case-insensitive partial issue name match"},status:{type:"string",description:"Filter by status: open, resolved, or ignored"},severity:{type:"string",description:"Filter by severity: low, medium, high, or critical"},"status-component":{type:"string",description:"Filter by status component ID"}}).withExamples(["sazabi issues count --status open              # Count open issues",'sazabi issues count "checkout" --json          # Count matching issues']).build(),get:S("get","Get one issue by ID",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await dj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(H).withExamples(["sazabi issues get <issue-id>  # Get one issue"]).build(),resolve:S("resolve","Resolve an open issue",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await gj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(H).withExamples(["sazabi issues resolve <issue-id>  # Resolve an issue"]).build(),ignore:S("ignore","Ignore an issue",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await bj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(H).withExamples(["sazabi issues ignore <issue-id>  # Ignore an issue"]).build(),mute:S("mute","Mute an issue",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await mj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(H).withExamples(["sazabi issues mute <issue-id>  # Mute an issue"]).build(),unmute:S("unmute","Unmute an issue",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await yj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(H).withExamples(["sazabi issues unmute <issue-id>  # Unmute an issue"]).build()}).withExamples(["sazabi issues create --from-json issue.json # Create an issue","sazabi issues list                       # List all issues","sazabi issues search checkout            # Search issues","sazabi issues count --status open        # Count issues","sazabi issues get <issue-id>             # Get one issue","sazabi issues resolve <issue-id>         # Resolve an issue","sazabi issues ignore <issue-id>          # Ignore an issue","sazabi issues mute <issue-id>            # Mute an issue","sazabi issues unmute <issue-id>          # Unmute an issue"]).build();J();oe();X();var Ij=async(e,t)=>{let o=L({tokenFlag:t.token,projectIdFlag:e==="public"?t.projectId:void 0,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:e==="public"?o.projectId:void 0,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json});if(e==="public"){let i=I(await n.publicKeys.list({projectId:o.projectId,limit:t.limit,cursor:t.cursor}),"Failed to list public keys",t.json);q(ZO(e),i.publicKeys.map((a)=>Ot(e,a)),{json:t.json,nextCursor:i.nextCursor});return}let r=I(await n.secretKeys.list({limit:t.limit,cursor:t.cursor}),"Failed to list secret keys",t.json);q(ZO(e),r.secretKeys.map((i)=>Ot(e,i)),{json:t.json,nextCursor:r.nextCursor})},kj=async(e,t,o)=>{let n=L({tokenFlag:o.token,projectIdFlag:e==="public"?o.projectId:void 0,jsonMode:o.json}),r=N({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:o.apiBaseUrl,jsonMode:o.json});if(e==="public"){let a=I(await r.publicKeys.get(t,n.projectId),"Failed to get public key",o.json);U(ir(e),Ot(e,a.publicKey),{json:o.json});return}let i=I(await r.secretKeys.get(t),"Failed to get secret key",o.json);U(ir(e),Ot(e,i.secretKey),{json:o.json})},wj=async(e,t,o)=>{let n=L({tokenFlag:o.token,projectIdFlag:e==="public"?o.projectId:void 0,jsonMode:o.json}),r=N({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:o.apiBaseUrl,jsonMode:o.json});if(e==="public"){let c={projectId:n.projectId,name:t,...o.expiresAt?{expiresAt:o.expiresAt}:{}},h=I(await r.publicKeys.create(c),"Failed to create public key",o.json);if(o.json){E(h);return}V(`Created public key ${h.publicKey.name}.`),ie({Value:h.publicKey.value}),U(ir(e),{...Ot(e,h.publicKey)});return}let i={name:t,...o.expiresAt?{expiresAt:o.expiresAt}:{}},a=I(await r.secretKeys.create(i),"Failed to create secret key",o.json);if(o.json){E(a);return}V(`Created secret key ${a.secretKey.name}.`),ie({Value:a.secretKey.value}),U(ir(e),{...Ot(e,a.secretKey)})},$j=async(e,t,o)=>{if(o.name===void 0&&o.expiresAt===void 0&&!o.clearExpiresAt){if(o.json)return v("At least one update is required. Pass --name, --expires-at, or --clear-expires-at.");return p("At least one update is required. Pass --name, --expires-at, or --clear-expires-at.")}if(o.expiresAt&&o.clearExpiresAt){if(o.json)return v("Use either --expires-at or --clear-expires-at, not both.");return p("Use either --expires-at or --clear-expires-at, not both.")}let n=L({tokenFlag:o.token,projectIdFlag:e==="public"?o.projectId:void 0,jsonMode:o.json}),r=N({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:o.apiBaseUrl,jsonMode:o.json}),i=o.clearExpiresAt?null:o.expiresAt!==void 0?o.expiresAt:void 0;if(e==="public"){let h={projectId:n.projectId,keyId:t,...o.name!==void 0?{name:o.name}:{},...i!==void 0?{expiresAt:i}:{}},u=I(await r.publicKeys.update(h),"Failed to update public key",o.json);U(ir(e),Ot(e,u.publicKey),{json:o.json});return}let a={keyId:t,...o.name!==void 0?{name:o.name}:{},...i!==void 0?{expiresAt:i}:{}},c=I(await r.secretKeys.update(a),"Failed to update secret key",o.json);U(ir(e),Ot(e,c.secretKey),{json:o.json})},_j=async(e,t)=>{let o=L({tokenFlag:t.token,projectIdFlag:t.projectId,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.publicKeys.deactivate({projectId:o.projectId,keyId:e}),"Failed to deactivate public key",t.json);if(!t.json)V(`Deactivated public key ${e}.`);U(ir("public"),Ot("public",r.publicKey),{json:t.json})},Tj=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json});if(I(await n.secretKeys.delete({keyId:e}),"Failed to delete secret key",t.json),t.json){E({deleted:!0,keyId:e});return}V(`Deleted secret key ${e}.`)},QO=(e)=>{let t=Oj(e),o=oy(e),n=`${o} Keys`,r=e==="secret",i=r?"the organization":"the active project",a={token:{type:"string"},"project-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},u=r?{token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}:{token:{type:"string",description:"Override token"},"project-id":{type:"string",description:"Override project selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}};return W(t,`Manage ${e} API keys`).withSubcommands({list:S("list",`List ${e} keys in ${i}`,async(d)=>{let{values:s,positionals:b}=O(d,{...a,limit:{type:"string"},cursor:{type:"string"}},{allowPositionals:!0});if(b.length>0){let m=b.join(", ");if(s.json)return v(`Unexpected arguments: ${m}`);return p(`Unexpected arguments: ${m}`)}await Ij(e,{token:s.token,projectId:s["project-id"],limit:s.limit?Number(s.limit):void 0,cursor:s.cursor,json:s.json,apiBaseUrl:s["api-base-url"]})}).withOptions({...u,limit:{type:"string",description:"Maximum number of keys to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples([`sazabi ${t} list  # List ${e} keys in ${i}`]).build(),get:S("get",`Get one ${e} key by ID`,async(d)=>{let{values:s,positionals:b}=O(d,a,{allowPositionals:!0}),m=b[0];if(!m){let k=`${o} key ID is required.`;if(s.json)return v(k);return p(k)}await kj(e,m,{token:s.token,projectId:s["project-id"],json:s.json,apiBaseUrl:s["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(u).withExamples([`sazabi ${t} get <key-id>  # Get one ${e} key`]).build(),create:S("create",`Create one ${e} key in ${i}`,async(d)=>{let{values:s,positionals:b}=O(d,{...a,"expires-at":{type:"string"}},{allowPositionals:!0}),m=b.join(" ");if(!m){let k=`${o} key name is required.`;if(s.json)return v(k);return p(k)}await wj(e,m,{token:s.token,projectId:s["project-id"],expiresAt:s["expires-at"],json:s.json,apiBaseUrl:s["api-base-url"]})}).withPositionalArgs("<name>").withOptions({...u,"expires-at":{type:"string",description:"Optional ISO timestamp when the key should expire"}}).withExamples([`sazabi ${t} create "CI agent"  # Create one ${e} key`]).build(),update:S("update",`Update one ${e} key in ${i}`,async(d)=>{let{values:s,positionals:b}=O(d,{...a,name:{type:"string"},"expires-at":{type:"string"},"clear-expires-at":{type:"boolean"}},{allowPositionals:!0}),m=b[0];if(!m){let k=`${o} key ID is required.`;if(s.json)return v(k);return p(k)}await $j(e,m,{token:s.token,projectId:s["project-id"],name:s.name,expiresAt:s["expires-at"],clearExpiresAt:s["clear-expires-at"],json:s.json,apiBaseUrl:s["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions({...u,name:{type:"string",description:`New ${e} key name`},"expires-at":{type:"string",description:"New ISO timestamp when the key should expire"},"clear-expires-at":{type:"boolean",description:"Clear any configured expiration"}}).withExamples([`sazabi ${t} update <key-id> --name "Renamed key"  # Update one ${e} key`]).build(),...e==="public"?{deactivate:S("deactivate",`Deactivate one public key in ${i}`,async(d)=>{let{values:s,positionals:b}=O(d,a,{allowPositionals:!0}),m=b[0];if(!m){if(s.json)return v("Public key ID is required.");return p("Public key ID is required.")}await _j(m,{token:s.token,projectId:s["project-id"],json:s.json,apiBaseUrl:s["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(u).withExamples([`sazabi ${t} deactivate <key-id>  # Deactivate one public key`]).build()}:{delete:S("delete",`Delete one secret key from ${i}`,async(d)=>{let{values:s,positionals:b}=O(d,a,{allowPositionals:!0}),m=b[0];if(!m){if(s.json)return v("Secret key ID is required.");return p("Secret key ID is required.")}await Tj(m,{token:s.token,json:s.json,apiBaseUrl:s["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(u).withExamples([`sazabi ${t} delete <key-id>  # Delete one secret key`]).build()}}).withExamples([`sazabi ${t} list  # List ${e} keys in ${i}`,`sazabi ${t} create "CI agent"  # Create one ${e} key`]).build()},eS={keyType:{label:"Type",type:{kind:"string"}},id:{label:"ID",type:{kind:"string"}},projectId:{label:"Project ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},expiresAt:{label:"Expires",type:{kind:"nullable-date"}},lastUsedAt:{label:"Last Used",type:{kind:"nullable-date"}},createdAt:{label:"Created",type:{kind:"date"}}},ZO=(e)=>({schema:eS,columns:e==="public"?["id","name","status","expiresAt","lastUsedAt","createdAt"]:["id","name","expiresAt","lastUsedAt","createdAt"],header:`${oy(e)} Keys`,emptyMessage:`No ${e} keys found.`}),ir=(e)=>({layout:"field-list",schema:eS,fields:e==="public"?["keyType","id","projectId","name","status","expiresAt","lastUsedAt","createdAt"]:["keyType","id","name","expiresAt","lastUsedAt","createdAt"]}),Oj=(e)=>{return e==="public"?"public-keys":"secret-keys"},oy=(e)=>{return e==="public"?"Public":"Secret"},Ot=(e,t)=>{let o=e==="public"&&"deactivatedAt"in t&&t.deactivatedAt!==null;return{...t,keyType:`${oy(e)} key`,status:o?"Deactivated":"Active"}},tS=QO("public"),rS=QO("secret");J();J();var Se=(e,t,o,n,r)=>{let i=Number.parseInt(e,10);if(Number.isNaN(i)||i<t||i>o){let a=`${n} must be between ${t} and ${o}`;if(r)return v(a);return p(a)}return i},dt=(e,t,o,n)=>{if(!t.includes(e)){let r=t.map((a)=>`"${a}"`).join(" or "),i=`${o} must be ${r}`;if(n)return v(i);return p(i)}return e};J();ac();Tn();oe();import*as gt from"node:fs";import*as bc from"node:readline";var gc=(e)=>new Promise((t)=>setTimeout(t,e));var Sj=(e)=>{return`${e.getTime()*1e6}`},Pj=(e)=>Object.entries(e).map(([t,o])=>({key:t,value:{stringValue:o}})),oS=(e,t,o={})=>{let r=Sj(new Date),i=o.serviceName??"sazabi-cli",a=Pj(o.attributes??{}),c=e.filter((h)=>h.trim().length>0).map((h)=>({timeUnixNano:r,observedTimeUnixNano:r,severityNumber:9,severityText:"INFO",body:{stringValue:h},attributes:a}));return{resourceLogs:[{resource:{attributes:[{key:"service.name",value:{stringValue:i}},{key:"sazabi.public_key",value:{stringValue:t}}]},scopeLogs:[{scope:{name:"sazabi-cli-forward",version:"1.0.0"},logRecords:c}]}]}};X();We();var Aj="15003",Dj=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},Lj=(e)=>{let t=Dj(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},Nj=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!Lj(t.hostname))return;return t.protocol="http:",t.port=Aj,t.pathname="",t.search="",t.hash="",t.toString()},Cj=async(e,t)=>{if(!t)Y("Ensuring public key exists...");let o=await e.publicKeys.create({name:"sazabi-cli-forward"});if(!o.success){if(!t)At(`Failed to create public key: ${o.error}`);return null}if(!t)V(`Created new public key: ${o.value.publicKey.name}`);return{value:o.value.publicKey.value,projectId:o.value.publicKey.projectId}},xj=({explicitPublicKey:e,cachedPublicKey:t,cachedPublicKeyProjectId:o,activeProjectId:n})=>{let r=e?.trim();if(r)return r;let i=t?.trim();if(!i)return;return o?.trim()===n?i:void 0},zj=(e)=>{if(!e||e.length===0)return{success:!0,value:{}};let t={};for(let o of e){let n=o.indexOf("=");if(n<=0)return{success:!1,error:`Invalid attribute "${o}". Use key=value.`};let r=o.slice(0,n).trim();if(!r)return{success:!1,error:`Invalid attribute "${o}". Attribute key is required.`};t[r]=o.slice(n+1)}return{success:!0,value:t}},ny=(e,t,o,n,r,i,a,c,h)=>{return async()=>{if(e.length===0)return;let u=oS(e,n,a),d=Rj(u);if(e.length=0,d===0)return;if(!c)Y(`Forwarding ${d} logs...`);let s=await o.logs.forward({publicKey:n,logs:u,region:r,...i?{projectId:i}:{}});if(!s.success){if(Fj(s)){I(s,"Failed to forward logs",c);return}if(t.totalFailed+=d,!c)Ge(`Failed to forward logs: ${s.error}`);h?.({forwarded:0,failed:d});return}t.totalForwarded+=s.value.forwardedCount,t.totalFailed+=s.value.failedCount,h?.({forwarded:s.value.forwardedCount,failed:s.value.failedCount})}},jj=async(e,t,o,n,r,i,a,c,h)=>{let u=gt.createReadStream(e),d=bc.createInterface({input:u,crlfDelay:Number.POSITIVE_INFINITY}),s=[],b={totalForwarded:0,totalFailed:0},m=ny(s,b,t,o,n,r,i,c,(k)=>h?.push(k));try{for await(let k of d)if(s.push(k),s.length>=a)await m()}catch(k){At(`Failed to read ${e}: ${k instanceof Error?k.message:String(k)}`);return}if(await m(),c);else if(K(),Ht(ce.muted("─".repeat(80))),V(`Forwarded ${b.totalForwarded} logs`),b.totalFailed>0)Ge(`Failed to forward ${b.totalFailed} logs`)},Ej=async(e,t,o,n,r,i,a,c)=>{let h=bc.createInterface({input:process.stdin,output:process.stdout,terminal:!1}),u=[],d={totalForwarded:0,totalFailed:0},s=ny(u,d,e,t,o,n,r,a,(b)=>c?.push(b));try{for await(let b of h)if(u.push(b),u.length>=i)await s()}catch(b){At(`Failed to read from stdin: ${b instanceof Error?b.message:String(b)}`);return}if(await s(),a);else if(K(),Ht(ce.muted("─".repeat(80))),V(`Forwarded ${d.totalForwarded} logs`),d.totalFailed>0)Ge(`Failed to forward ${d.totalFailed} logs`)},Uj=async(e,t,o,n,r,i,a,c,h)=>{let u=[],d={totalForwarded:0,totalFailed:0},s=ny(u,d,t,o,n,r,i,c,(ne)=>h?.push(ne)),b=null,m=null,k=async()=>{if(m)clearTimeout(m);if(b)b.close();if(await s(),c);else if(K(),Ht(ce.muted("─".repeat(80))),V(`Forwarded ${d.totalForwarded} logs`),d.totalFailed>0)Ge(`Failed to forward ${d.totalFailed} logs`)};process.on("SIGINT",async()=>{K(),Y("Interrupted, flushing remaining logs..."),await k(),process.exit(0)});let A=null,F=null,j=!1,te=0,he=async()=>{if(j)return;j=!0;try{if((await gt.promises.stat(e)).size<te)te=0;A=gt.createReadStream(e,{encoding:"utf8",start:te}),F=bc.createInterface({input:A,crlfDelay:Number.POSITIVE_INFINITY});for await(let yy of F)if(u.push(yy),u.length>=a)await s();te=(await gt.promises.stat(e)).size}catch(ne){At(`Failed to read ${e}: ${ne instanceof Error?ne.message:String(ne)}`)}finally{j=!1}};await he(),b=gt.watch(e,async(ne)=>{if(ne==="change"){if(m)clearTimeout(m);m=setTimeout(async()=>{if(j)return;if(A)A.close();if(F)F.close();await gc(50),await he()},100)}})},nS=async(e)=>{let t=e.batchSize??100;if(t<=0){if(e.json)return v("Batch size must be a positive number");throw p("Batch size must be a positive number"),Error("Unreachable")}let o=I(zj(e.attributes),"Invalid --attribute value",e.json===!0);if(e.follow&&!e.file){if(e.json)return v("--follow flag requires --file to be specified");throw p("--follow flag requires --file to be specified"),Error("Unreachable")}let n=(()=>{let j=ae();if(!j.success)throw p(`Failed to read settings: ${j.error}`),Error("Unreachable");return j.value})(),r=I(Fe(n),"Failed to resolve profile"),i=e.json===!0,a=L({tokenFlag:e.token,jsonMode:i}),c=ut({cliFlag:e.apiBaseUrl,globalUrl:r.apiBaseUrl,globalDomain:r.apiDomain,buildUrlFromDomain:(j)=>`https://api.${j}`,defaultUrl:"https://api.sazabi.com"});if(!i)le("Forwarding logs...");let h=await uc({token:a.token,projectId:a.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:i});if(!i)Y(`Project: ${h.name}`);let u;if(e.region)u=Kj(e.region,i);else u=h.region;if(!i)Y(`Region: ${u}`);if(!i)Y(`Batch size: ${t}`);let d={serviceName:e.service?.trim()||void 0,attributes:o},s=e.intakeBaseUrl??r.intakeBaseUrl??Nj(c)??(r.intakeDomain?NO(r.intakeDomain,u):void 0)??`https://otlp.${u}.intake.sazabi.com`;try{let j=new URL(s);if(!i&&/\.intake\.sazabi\.(dev|com)$/.test(j.host)&&!j.host.startsWith("otlp."))Ge("Intake base URL may not be the OTLP endpoint. For Sazabi, prefer https://otlp.{region}.intake.sazabi.dev or .com as appropriate.")}catch{}let b=kt({token:a.token,projectId:a.projectId,baseUrl:c,intakeBaseUrl:s}),m=xj({explicitPublicKey:e.publicKey,cachedPublicKey:r.forwardPublicKey,cachedPublicKeyProjectId:r.forwardPublicKeyProjectId,activeProjectId:h.id});if(!m){let j=await Cj(b,i);if(!j)throw p("Failed to get or create public key"),Error("Unreachable");m=j.value;let te=Ke(n,{forwardPublicKey:m,forwardPublicKeyProjectId:j.projectId});if(te.success){let he=ve(te.value);if(!he.success)Ge(`Failed to store public key: ${he.error}`)}}if(!i)K(),Ht(ce.muted("─".repeat(80))),K();let k=!e.follow,A=[],F={forwarded:0,failed:0};if(e.follow&&e.file)await Uj(e.file,b,m,u,a.projectId,d,t,i,k?A:void 0);else if(e.file)await jj(e.file,b,m,u,a.projectId,d,t,i,A);else await Ej(b,m,u,a.projectId,d,t,i,A);for(let j of A)F.forwarded+=j.forwarded,F.failed+=j.failed;if(i){let j={forwardedCount:F.forwarded,failedCount:F.failed,batches:A,project:{id:h.id,name:h.name,region:u},intakeBaseUrl:s,batchSize:t,follow:Boolean(e.follow),file:e.file??void 0};console.log(JSON.stringify(j))}},Rj=(e)=>{return e.resourceLogs?.reduce((t,o)=>t+(o.scopeLogs?.reduce((n,r)=>n+(r.logRecords?.length??0),0)??0),0)??0},Fj=(e)=>{if(e.success)return!1;if(e.errorPayload)return!0;if(e.statusCode!==void 0&&e.statusCode<500)return!0;return e.error.startsWith("Authentication failed")||e.error.startsWith("Client error (")},Kj=(e,t)=>{let o=ec.safeParse(e);if(o.success)return o.data;let n=`Invalid region: ${e}.`;if(t)return v(n);return p(n)};J();oe();X();import{readFile as Bj}from"node:fs/promises";var Gj={result:{label:"Result",type:{kind:"string"}},format:{label:"Format",type:{kind:"string"}},meta:{label:"Meta",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}}},Hj={layout:"field-list",schema:Gj,fields:["result","format","meta"]},iS=async(e)=>{if(!e.query&&!e.file){if(e.json)return v("Pass --query or --file");return p("Pass --query or --file")}if(e.query&&e.file){if(e.json)return v("Pass either --query or --file, not both");return p("Pass either --query or --file, not both")}let t;if(e.query!==void 0)t=e.query;else try{t=await Bj(e.file,"utf8")}catch(i){let a=`Failed to read query file: ${i instanceof Error?i.message:String(i)}`;if(e.json)return v(a);return p(a)}if(t.trim().length===0){if(e.json)return v("Query cannot be empty");return p("Query cannot be empty")}let o=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),r=I(await n.logs.nativeQuery({query:t}),"Failed to run native log query",e.json);if(e.json){U(Hj,r,{json:!0});return}Y(`Backend ${r.meta.backendId} returned ${r.result.length} characters in ${r.meta.took}ms${r.meta.truncated?" (truncated)":""}`),process.stdout.write(r.result.endsWith(`
`)?r.result:`${r.result}
`)};J();oe();X();J();var Mj=/^(\d+)(s|m|h|d)$/u,Jj=(e,t)=>{let o=Mj.exec(e.trim());if(!o){if(t)return v("Duration must use s, m, h, or d units, for example 30m");return p("Duration must use s, m, h, or d units, for example 30m")}let n=Number(o[1]),r=o[2];return n*(r==="s"?1000:r==="m"?60000:r==="h"?3600000:86400000)},aS=(e,t,o)=>{let n=new Date(e);if(Number.isNaN(n.getTime())){let r=`${t} must be a valid ISO-8601 timestamp`;if(o)return v(r);return p(r)}return n.toISOString()},mo=(e)=>{if(e.last&&(e.from||e.to)){if(e.json)return v("Use either --last or --from/--to, not both");return p("Use either --last or --from/--to, not both")}if(e.last){let n=new Date,r=new Date(n.getTime()-Jj(e.last,e.json));if(!Number.isFinite(r.getTime())||!Number.isFinite(n.getTime())){if(e.json)return v("--last is out of supported date range");return p("--last is out of supported date range")}return{startDate:r.toISOString(),endDate:n.toISOString()}}let t=e.from?aS(e.from,"--from",e.json):void 0,o=e.to?aS(e.to,"--to",e.json):void 0;if(t&&o&&new Date(t)>=new Date(o)){if(e.json)return v("--from must be before --to");return p("--from must be before --to")}return{startDate:t,endDate:o}};var qj={patterns:{label:"Patterns",type:{kind:"custom",render:(e)=>`${Array.isArray(e)?e.length:0} patterns`,serialize:(e)=>e}},meta:{label:"Meta",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}}},Vj={layout:"field-list",schema:qj,fields:["patterns","meta"]},Wj={severity:{label:"Severity",type:{kind:"custom",render:(e)=>typeof e==="string"&&e.length>0?bt(e):"(none)",serialize:(e)=>e}},occurrences:{label:"Occurrences",type:{kind:"number"},align:"right"},lastSeen:{label:"Last Seen",type:{kind:"nullable-date",emptyLabel:"(never)"}},pattern:{label:"Pattern",type:{kind:"truncated",maxLength:140}},representativeId:{label:"Representative",type:{kind:"nullable-string",emptyLabel:"(none)"}}},Yj={schema:Wj,columns:["severity","occurrences","lastSeen","pattern","representativeId"],header:{title:"Log patterns",variant:"search"},emptyMessage:"No matching log patterns."},Xj=(e)=>{let t=mo(e);return{...e.query?{query:e.query}:{},...e.severity?{severity:e.severity}:{},...t.startDate?{startDate:t.startDate}:{},...t.endDate?{endDate:t.endDate}:{},limit:e.limit??25}},cS=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),o=N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=I(await o.logs.patterns(Xj(e)),"Failed to query log patterns",e.json);if(e.json){U(Vj,n,{json:!0});return}Zj(n)},Zj=(e)=>{if(e.patterns.length>0)Y(`Returned ${e.meta.count} pattern${e.meta.count===1?"":"s"} in ${e.meta.took}ms`);q(Yj,e.patterns,{count:e.meta.count})};J();oe();X();var mc=500,Qj=new Set(["eq","neq","in","contains","starts_with","gt","gte","lt","lte","between","exists"]),eE=(e)=>{if(e==="@timestamp")return"timestamp";return e},yc=(e,t)=>{for(let o of t){let n=e[o];if(n===void 0||n===null)continue;if(typeof n==="string")return n;if(typeof n==="number"||typeof n==="boolean")return String(n)}return""},tE=(e)=>{let t=yc(e,["@timestamp","timestamp","time","ts","date"]);if(!t)return _e("(no time)");let o=new Date(t);if(Number.isNaN(o.getTime()))return t;return o.toISOString()},rE=(e)=>{return yc(e,["body","message","log","text","content","msg"])||_e("(no message)")},oE=(e)=>{return yc(e,["severity","level","log_level","priority"])},nE=(e)=>{return yc(e,["service","service_name","serviceName","source"])},iE=(e,t)=>{let o={};if(!t.omitSearch)o.search={query:e,mode:t.mode??"all",...t.searchFields?.length?{fields:t.searchFields}:{}};if(t.cursor!==void 0||t.limit!==void 0||t.all)o.pagination={limit:t.limit??(t.all?100:50),...t.cursor!==void 0?{cursor:t.cursor}:{}};if(t["sort-field"])o.sort={field:eE(t["sort-field"]),direction:t["sort-direction"]??"desc"};if(t.select){let r=t.select.split(",").map((i)=>i.trim()).filter((i)=>i.length>0);if(r.length>0)o.select=r}let n=hE(t);if(!n.ok)return{ok:!1,errors:n.errors};if(n.filters.length>0)o.filters=n.filters;return{ok:!0,input:o}};var aE=(e)=>{if(e==="true")return!0;if(e==="false")return!1;let t=Number(e);if(e.trim()!==""&&Number.isFinite(t))return t;return e},cE=(e)=>{let t=Number(e);if(e.trim()!==""&&Number.isFinite(t))return t;return e},lE=(e)=>{let t=e.indexOf("=");if(t<=0)return{ok:!1,error:"Filter must use <field>.<op>=<value>"};let o=e.slice(0,t),n=e.slice(t+1),r=o.lastIndexOf(".");if(r<=0||r===o.length-1)return{ok:!1,error:"Filter must use <field>.<op>=<value>"};let i=o.slice(0,r),a=o.slice(r+1);if(!Qj.has(a))return{ok:!1,error:`Unsupported filter operator: ${a}`};if(a==="in"){let c=n.split(",").map((h)=>cE(h.trim())).filter((h)=>h!=="");if(c.length===0)return{ok:!1,error:"in filters must include at least one value"};return{ok:!0,filter:{field:i,op:a,value:c}}}if(a==="between"){let c=n.includes("..")?n.split(".."):n.split(",");if(c.length!==2)return{ok:!1,error:"between filters must use <from>..<to>"};let[h,u]=c.map((d)=>d.trim());if(!h||!u)return{ok:!1,error:"between filters must use <from>..<to>"};return{ok:!0,filter:{field:i,op:a,value:{from:h,to:u}}}}if(a==="exists"){if(n!=="true"&&n!=="false")return{ok:!1,error:"exists filters must use true or false"};return{ok:!0,filter:{field:i,op:a,value:n==="true"}}}return{ok:!0,filter:{field:i,op:a,value:aE(n)}}},hE=(e)=>{let t=[],o=[],n=mo({from:e.from,to:e.to,last:e.last,json:e.json});if(n.startDate&&n.endDate)t.push({field:"timestamp",op:"between",value:{from:n.startDate,to:n.endDate}});else if(n.startDate)t.push({field:"timestamp",op:"gte",value:n.startDate});else if(n.endDate)t.push({field:"timestamp",op:"lte",value:n.endDate});if(e.service)t.push({field:"service",op:"eq",value:e.service});if(e.severity)t.push({field:"severity",op:"eq",value:e.severity});if(e.env)t.push({field:"environment",op:"eq",value:e.env});if(e.traceId)t.push({field:"trace_id",op:"eq",value:e.traceId});for(let r of e.filters??[]){let i=lE(r);if(i.ok)t.push(i.filter);else o.push(`${r}: ${i.error}`)}if(o.length>0)return{ok:!1,errors:o};return{ok:!0,filters:t}},lS=async(e,t)=>{let o=L({tokenFlag:t.token,projectIdFlag:t.project,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t["api-base-url"],jsonMode:t.json}),r=iE(e,t);if(!r.ok){if(t.json)return v({success:!1,error:"Invalid log query filters",errors:r.errors});return p(`Invalid log query filters: ${r.errors.join("; ")}`)}let i=r.input,a=t.all?await uE(n,i,t):I(await n.logs.query(i),"Failed to query logs",t.json);if(t.json){E(a);return}sE(a)},uE=async(e,t,o)=>{let n=[],r=t.pagination?.cursor,i=0;do{let a={...t,pagination:{limit:t.pagination?.limit??o.limit??100,...r?{cursor:r}:{}}},c=I(await e.logs.query(a),"Failed to query logs",o.json);n.push(...c.data),i+=c.meta.took,r=c.nextCursor}while(r);return{data:n,nextCursor:null,meta:{count:n.length,took:i}}},sE=(e)=>{let{data:t,nextCursor:o,meta:n}=e;if(t.length===0){Kt("No matching log rows.");return}Y(`Returned ${n.count} row${n.count===1?"":"s"} in ${n.took}ms`);let r=t.map((i)=>{let a=i,c=oE(a);return{time:tE(a),severity:c?bt(c,c):ce.muted(_e("(sev)")),service:nE(a)||_e("(service)"),message:Ye(rE(a),200)}});rt(r,[{header:"Time (UTC)",key:"time"},{header:"Severity",key:"severity"},{header:"Service",key:"service"},{header:"Message",key:"message"}],{header:{title:"Log query results",variant:"search",count:n.count}}),mt({type:"cursor",nextCursor:o})};J();oe();X();var dE={backend:{label:"Backend",type:{kind:"custom",render:(e)=>{let t=e;return`${t.name} (${t.id})`},serialize:(e)=>e}},features:{label:"Features",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},commands:{label:"Commands",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},queryableFields:{label:"Queryable",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},searchableFields:{label:"Searchable",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},observedServiceNames:{label:"Observed Services",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},observedAttributeKeys:{label:"Observed Attributes",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},schemaContext:{label:"Schema Context",type:{kind:"custom",render:(e)=>e?JSON.stringify(e):"(none)",serialize:(e)=>e}}},gE={layout:"field-list",schema:dE,fields:["backend","features","commands","queryableFields","searchableFields","observedServiceNames","observedAttributeKeys","schemaContext"]},hS=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),o=N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=I(await o.logs.schema({}),"Failed to fetch log schema",e.json);if(e.json){U(gE,n,{json:!0});return}bE(n)},bE=(e)=>{if(le("Log backend"),ie({Backend:`${e.backend.name} (${e.backend.id})`,Kind:e.backend.kind,Commands:e.commands.join(", "),Features:e.features.join(", ")||"(none)"}),le("Normalized fields"),ie({Queryable:e.queryableFields.join(", ")||"(none)",Searchable:e.searchableFields.join(", ")||"(none)"}),e.observedServiceNames.length>0)rt(e.observedServiceNames.map((t)=>({service:Ye(t,80)})),[{header:"Observed Services",key:"service"}]);if(e.observedAttributeKeys.length>0)rt(e.observedAttributeKeys.map((t)=>({attribute:Ye(t,80)})),[{header:"Observed Attributes",key:"attribute"}])};J();Bm();Tn();oe();X();We();var uS=["ERROR","WARN","INFO","DEBUG","TRACE"],mE="15006",yE=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},pE=(e)=>{let t=yE(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},vE=(e)=>{let t=new Date(e.timestamp).toISOString().split("T")[1],o=bt(e.severity,e.severity.padEnd(7)),n=ce.cyan(e.service.padEnd(20)),r=e.body.length>120?`${e.body.substring(0,117)}...`:e.body;return`[${t}] ${o} ${n} ${r}`},dS=async(e)=>{let t=I($t(),"Failed to read settings"),o=e.json??!1,n=kE(t,e.apiBaseUrl),r=IE(e.severities,o),i=iy(e.services),a=iy(e.environments),c=L({tokenFlag:e.token,jsonMode:o}),h=await _E({apiBaseUrlFlag:e.apiBaseUrl,jsonMode:o,projectId:c.projectId,regionFlag:e.region,token:c.token}),u=kt({token:c.token,projectId:c.projectId,baseUrl:n,tailBaseUrl:$E(t,e.tailBaseUrl,h,n)}),d={severities:r,services:i,environments:a,searchTerm:e.search,traceId:e.traceId},s=new AbortController,b,m=0,k,A,F=()=>{b="interrupted",s.abort()};if(!o)fE({environments:a,region:h,search:e.search,services:i,severities:r,traceId:e.traceId});let j=I(await u.logs.tail({...c.projectId?{projectId:c.projectId}:{},...h?{region:h}:{},filters:d,signal:s.signal}),"Failed to tail logs",o);if(!o)V("Connected! Waiting for logs..."),K();if(process.on("SIGINT",F),e.duration&&e.duration>0)A=setTimeout(()=>{b="duration",s.abort()},e.duration*1000);try{for await(let te of j){if(m+=1,o){E(te);continue}Ht(vE(te))}}catch(te){k=te instanceof Error?te:Error(String(te))}finally{if(process.removeListener("SIGINT",F),A)clearTimeout(A)}if(k){if(o)return v(k.message);K(),fo(),At(k.message);return}if(o)return;if(K(),b==="duration")Y("Duration reached, closing connection...");if(b==="interrupted")Y("Interrupted, closing connection...");fo(),Y(`Connection closed. Received ${m} logs.`)},fE=(e)=>{if(le("Tailing logs..."),e.severities?.length)Y(`Severities: ${e.severities.join(", ")}`);if(e.services?.length)Y(`Services: ${e.services.join(", ")}`);if(e.environments?.length)Y(`Environments: ${e.environments.join(", ")}`);if(e.search)Y(`Search: ${e.search}`);if(e.traceId)Y(`Trace ID: ${e.traceId}`);if(e.region)Y(`Region: ${e.region}`);fo(),K()},iy=(e)=>{if(!e)return;let t=e.split(",").map((o)=>o.trim()).filter((o)=>o.length>0);return t.length>0?t:void 0},IE=(e,t)=>{let o=iy(e)?.map((i)=>i.toUpperCase());if(!o)return;let n=o.find((i)=>!uS.includes(i));if(!n)return o;let r=`Invalid severity: ${n}. Valid values: ${uS.join(", ")}`;if(t)return v(r);return p(r)},kE=(e,t)=>{return ut({cliFlag:t,globalUrl:e.apiBaseUrl,globalDomain:e.apiDomain,buildUrlFromDomain:(o)=>`https://api.${o}`,defaultUrl:"https://api.sazabi.com"})},wE=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!pE(t.hostname))return;return t.protocol="ws:",t.port=mE,t.pathname="/tail",t.search="",t.hash="",t.toString()},$E=(e,t,o,n)=>{if(t)return t;if(e.tailBaseUrl)return e.tailBaseUrl;let r=wE(n);if(r)return r;if(e.tailDomain&&o)return`wss://${o}.tail.${e.tailDomain}`;if(o)return`wss://${o}.tail.sazabi.com`;return},_E=async(e)=>{if(e.regionFlag)return sS(e.regionFlag,e.jsonMode);if(!e.projectId)return;let t=await uc({token:e.token,projectId:e.projectId,apiBaseUrlFlag:e.apiBaseUrlFlag,jsonMode:e.jsonMode});return sS(t.region,e.jsonMode)},sS=(e,t)=>{if(cc(e))return e;let o=`Log tail is not supported for project region ${e}.`;if(t)return v(o);return p(o)};J();oe();X();var TE={total:{label:"Total",type:{kind:"number"}},startDate:{label:"Start",type:{kind:"date"}},endDate:{label:"End",type:{kind:"date"}},interval:{label:"Interval",type:{kind:"string"}},series:{label:"Series",type:{kind:"custom",render:(e)=>`${Array.isArray(e)?e.length:0} series`,serialize:(e)=>e}}},OE={layout:"field-list",schema:TE,fields:["total","startDate","endDate","interval","series"]},SE={group:{label:"Group",type:{kind:"string"}},total:{label:"Total",type:{kind:"number"},align:"right"},points:{label:"Points",type:{kind:"custom",render:(e)=>Array.isArray(e)?String(e.length):"0",serialize:(e)=>e},align:"right"}},PE={schema:SE,columns:["group","total","points"],header:{title:"Log volume",variant:"results"},emptyMessage:"No log volume found."},AE=(e)=>{if(e==="service")return"service_name";if(e==="severity")return"severity_text";return e},DE=(e)=>{let t=new Date,o=mo(e),n=o.endDate??t.toISOString();return{startDate:o.startDate??new Date(new Date(n).getTime()-3600000).toISOString(),endDate:n,...e.interval?{interval:e.interval}:{},...e.groupBy?{groupBy:AE(e.groupBy)}:{},filters:{...e.service?{service_name:e.service}:{},...e.severity?{severity_text:e.severity}:{},...e.env?{environment:e.env}:{}}}},gS=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),o=N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=I(await o.logs.volume(DE(e)),"Failed to query log volume",e.json);if(e.json){U(OE,n,{json:!0});return}LE(n)},LE=(e)=>{if(e.series.length>0)Y(`Total ${e.total} logs from ${e.startDate} to ${e.endDate} at ${e.interval}`);q(PE,e.series,{count:e.series.length})};var ay=(e,t)=>{let o=[],n=`--${t}=`;for(let r=0;r<e.length;r+=1){let i=e[r];if(i===void 0)continue;if(i===`--${t}`){let a=e[r+1];if(a!==void 0&&!a.startsWith("-"))o.push(a),r+=1;continue}if(i.startsWith(n))o.push(i.slice(n.length))}return o},bS=W("logs","Stream, search, and forward logs").withSubcommands({schema:S("schema","Describe the active log backend and query fields",async(e)=>{let{values:t}=O(e,{...G,project:{type:"string"}}),o={token:t.token,project:t.project,json:t.json,"api-base-url":t["api-base-url"]};await hS(o)}).withOptions({...H,project:{type:"string",description:"Override project ID (default: active project)"}}).withExamples(["sazabi logs schema  # Show backend, commands, and fields","sazabi logs schema --json  # Machine-readable schema context"]).build(),tail:S("tail","Stream logs from current project in real-time",async(e)=>{let{values:t}=O(e,{...G,severities:{type:"string"},services:{type:"string"},environments:{type:"string"},search:{type:"string"},"trace-id":{type:"string"},duration:{type:"string"},"tail-base-url":{type:"string"},region:{type:"string"}}),o={};if(t.token)o.token=t.token;if(t.severities)o.severities=t.severities;if(t.services)o.services=t.services;if(t.environments)o.environments=t.environments;if(t.search)o.search=t.search;if(t["trace-id"])o.traceId=t["trace-id"];if(t.duration)o.duration=Se(t.duration,1,Number.MAX_SAFE_INTEGER,"Duration",t.json);if(t.json)o.json=!0;if(t["tail-base-url"])o.tailBaseUrl=t["tail-base-url"];if(t.region)o.region=t.region;if(t["api-base-url"])o.apiBaseUrl=t["api-base-url"];await dS(o)}).withOptions({...H,severities:{type:"string",description:"Filter by comma-separated severities (e.g., ERROR,WARN,INFO)"},services:{type:"string",description:"Filter by comma-separated service names"},environments:{type:"string",description:"Filter by comma-separated environments"},search:{type:"string",description:"Filter by search term (case-insensitive)"},"trace-id":{type:"string",description:"Filter by trace ID"},duration:{type:"string",description:"Duration to tail in seconds (default: unlimited)"},"tail-base-url":{type:"string",description:"Override tail WebSocket base URL"},region:{type:"string",description:"Override project region"}}).withExamples(["sazabi logs tail  # Tail all logs in real-time","sazabi logs tail --severities ERROR,WARN  # Tail only errors and warnings","sazabi logs tail --services api,worker  # Tail specific services","sazabi logs tail --environments production,staging  # Tail specific environments",'sazabi logs tail --search "database"  # Tail logs matching search term',"sazabi logs tail --json  # Output as JSON"]).build(),query:S("query","Search stored logs in the current project (POST /logs/query)",async(e)=>{let{values:t,positionals:o}=O(e,{...G,project:{type:"string"},limit:{type:"string"},cursor:{type:"string"},mode:{type:"string"},"sort-field":{type:"string"},"sort-direction":{type:"string"},select:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},service:{type:"string"},severity:{type:"string"},env:{type:"string"},"trace-id":{type:"string"},filter:{type:"string"},"search-field":{type:"string"},"query-all":{type:"boolean"},all:{type:"boolean"}},{allowPositionals:!0}),n=o.join(" ").trim(),r=ay(e,"filter"),i=ay(e,"search-field"),a=Boolean(t.from||t.to||t.last||t.service||t.severity||t.env||t["trace-id"])||r.length>0;if(!n&&!t["query-all"]&&!a){if(t.json)return v("Search text, a structured filter, or --query-all is required. Usage: sazabi logs query <search-text> [options]");return p("Search text, a structured filter, or --query-all is required. Usage: sazabi logs query <search-text> [options]")}if(n.length>mc){if(t.json)return v(`Search text must be at most ${mc} characters`);return p(`Search text must be at most ${mc} characters`)}if(n&&t["query-all"]){if(t.json)return v("Pass either a search phrase or --query-all, not both");return p("Pass either a search phrase or --query-all, not both")}if(t.mode&&!n){if(t.json)return v("--mode requires search text (search is omitted)");return p("--mode requires search text (search is omitted)")}let c={token:t.token,project:t.project,json:t.json,"api-base-url":t["api-base-url"],omitSearch:t["query-all"]===!0||!n,from:t.from,to:t.to,last:t.last,service:t.service,severity:t.severity,env:t.env,traceId:t["trace-id"],filters:r,searchFields:i,all:t.all};if(t.limit)c.limit=Se(t.limit,1,1000,"Limit",t.json);if(t.cursor)c.cursor=t.cursor;if(t.mode)c.mode=dt(t.mode,["any","all","phrase"],"Mode",t.json);if(t["sort-field"])c["sort-field"]=t["sort-field"];if(t["sort-direction"]&&!t["sort-field"]){if(t.json)return v("--sort-direction requires --sort-field");return p("--sort-direction requires --sort-field")}if(t["sort-direction"])c["sort-direction"]=dt(t["sort-direction"],["asc","desc"],"Sort direction",t.json);if(t.select)c.select=t.select;await lS(n,c)}).withPositionalArgs("[search-text]").withOptions({...H,project:{type:"string",description:"Override project ID (default: active project)"},limit:{type:"string",description:"Max rows to return (1-1000, default: 50)"},cursor:{type:"string",description:"Pagination cursor from a previous response"},mode:{type:"string",description:"Token match mode: any, all, or phrase (default: all)"},"sort-field":{type:"string",description:"Field to sort by (e.g. @timestamp)"},"sort-direction":{type:"string",description:"Sort direction: asc or desc (default: desc)"},select:{type:"string",description:"Comma-separated fields to return"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},service:{type:"string",description:"Filter by service name"},severity:{type:"string",description:"Filter by severity, for example ERROR"},env:{type:"string",description:"Filter by deployment environment"},"trace-id":{type:"string",description:"Filter by trace ID"},filter:{type:"string",description:"Structured filter as <field>.<op>=<value>; repeatable"},"search-field":{type:"string",description:"Restrict full-text search to a field; repeatable"},"query-all":{type:"boolean",description:"Omit full-text search and return the API default slice (sort/pagination only; server may require other filters)"},all:{type:"boolean",description:"Fetch all pages until the server returns no cursor"}}).withExamples(['sazabi logs query "connection refused" --last 1h --service api --severity ERROR  # Search recent API errors',"sazabi logs query --trace-id abc123 --select timestamp,service,severity,body  # Find logs for one trace","sazabi logs query --filter http_status_code.gte=500 --limit 100 --json  # Machine-readable structured filter","sazabi logs query error --mode any --limit 100  # Match any token with a larger page","sazabi logs query --query-all --limit 20 --sort-field @timestamp  # Recent rows without full-text search","sazabi logs query slow --json  # Machine-readable output"]).build(),patterns:S("patterns","Search normalized log patterns for discovery",async(e)=>{let{values:t,positionals:o}=O(e,{...G,project:{type:"string"},severity:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},limit:{type:"string"}},{allowPositionals:!0}),n={token:t.token,project:t.project,query:o.join(" ").trim()||void 0,severity:t.severity,from:t.from,to:t.to,last:t.last,json:t.json,"api-base-url":t["api-base-url"]};if(t.limit)n.limit=Se(t.limit,1,100,"Limit",t.json);await cS(n)}).withPositionalArgs("[pattern-text]").withOptions({...H,project:{type:"string",description:"Override project ID (default: active project)"},severity:{type:"string",description:"Filter by severity, for example ERROR"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},limit:{type:"string",description:"Max patterns to return (1-100, default: 25)"}}).withExamples(['sazabi logs patterns "connection refused" --severity ERROR --limit 25  # Find recurring error patterns',"sazabi logs patterns --last 24h --json  # Export recent patterns"]).build(),volume:S("volume","Summarize log volume by time and optional dimension",async(e)=>{let{values:t}=O(e,{...G,project:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},interval:{type:"string"},"group-by":{type:"string"},service:{type:"string"},severity:{type:"string"},env:{type:"string"}}),o={token:t.token,project:t.project,from:t.from,to:t.to,last:t.last,service:t.service,severity:t.severity,env:t.env,json:t.json,"api-base-url":t["api-base-url"]};if(t.interval)o.interval=dt(t.interval,["1m","5m","15m","1h"],"Interval",t.json);if(t["group-by"])o.groupBy=dt(t["group-by"],["service","severity","environment"],"Group by",t.json);await gS(o)}).withOptions({...H,project:{type:"string",description:"Override project ID (default: active project)"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},interval:{type:"string",description:"Bucket interval: 1m, 5m, 15m, or 1h"},"group-by":{type:"string",description:"Group by service, severity, or environment"},service:{type:"string",description:"Filter by service name"},severity:{type:"string",description:"Filter by severity, for example ERROR"},env:{type:"string",description:"Filter by deployment environment"}}).withExamples(["sazabi logs volume --last 6h --group-by service  # Compare service log volume","sazabi logs volume --last 24h --severity ERROR --interval 15m --json  # Export error volume"]).build(),"native-query":S("native-query","Run a backend-native read-only log query",async(e)=>{let{values:t}=O(e,{...G,project:{type:"string"},query:{type:"string"},file:{type:"string",short:"f"}}),o={token:t.token,project:t.project,query:t.query,file:t.file,json:t.json,"api-base-url":t["api-base-url"]};await iS(o)}).withOptions({...H,project:{type:"string",description:"Override project ID (default: active project)"},query:{type:"string",description:"Backend-native query text"},file:{type:"string",short:"f",description:"Read backend-native query text from a file"}}).withExamples(['sazabi logs native-query --query "SELECT service_name, count() FROM log_volume_per_minute GROUP BY service_name LIMIT 20"  # Run backend-native query text',"sazabi logs native-query --file investigation.sql --json  # Run a query from a file"]).build(),forward:S("forward","Forward plaintext logs to current project",async(e)=>{let{values:t}=O(e,{...G,file:{type:"string",short:"f"},follow:{type:"boolean"},"batch-size":{type:"string"},"intake-base-url":{type:"string"},"public-key":{type:"string"},service:{type:"string"},attribute:{type:"string"},region:{type:"string"}}),o={};if(t.token)o.token=t.token;if(t.file)o.file=t.file;if(t.follow)o.follow=t.follow;if(t["batch-size"])o.batchSize=Se(t["batch-size"],1,Number.MAX_SAFE_INTEGER,"Batch size",t.json);if(t["api-base-url"])o.apiBaseUrl=t["api-base-url"];if(t["intake-base-url"])o.intakeBaseUrl=t["intake-base-url"];if(t.region)o.region=t.region;if(t["public-key"])o.publicKey=t["public-key"];if(t.service)o.service=t.service;let n=ay(e,"attribute");if(n.length>0)o.attributes=n;await nS({...o,json:t.json})}).withOptions({...H,json:{type:"boolean",description:"Output a final JSON summary"},file:{type:"string",short:"f",description:"Read from file instead of stdin"},follow:{type:"boolean",description:"Follow file for new lines (like tail -f)"},"batch-size":{type:"string",description:"Number of logs to batch before sending (default: 100)"},"intake-base-url":{type:"string",description:"Override intake base URL"},"public-key":{type:"string",description:"Use this public key value (skip creating/storing)"},service:{type:"string",description:"Set OTLP service.name for forwarded lines (default: sazabi-cli)"},attribute:{type:"string",description:"Attach a log attribute as key=value. Repeat for multiple attributes."},region:{type:"string",description:"Override project region"}}).withExamples(['echo "Log message" | sazabi logs forward  # Forward from stdin',"sazabi logs forward --file app.log  # Forward from file","sazabi logs forward --file app.log --follow  # Forward file with tail -f behavior","sazabi logs forward --file app.log --batch-size 50  # Forward with custom batch size"]).build()}).withExamples(["sazabi logs tail  # Tail all logs in real-time","sazabi logs tail --severities ERROR,WARN  # Tail only errors and warnings",'sazabi logs query "timeout"  # Search stored logs',"sazabi logs forward --file app.log  # Forward from file"]).build();J();oe();X();var mS={membershipId:{label:"Membership ID",type:{kind:"string"}},userId:{label:"User ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"nullable-string"}},email:{label:"Email",type:{kind:"string"}},role:{label:"Role",type:{kind:"string"}}},NE={schema:mS,columns:["membershipId","userId","name","email","role"],header:"Members",emptyMessage:"No members found."},CE={layout:"field-list",schema:mS,fields:["membershipId","userId","name","email","role"]},xE=async(e)=>{let t=L({tokenFlag:e.token,organizationIdFlag:e.organizationId,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.members.list({organizationId:t.organizationId}),"Failed to list members",e.json);q(NE,n.members,{json:e.json})},zE=async(e,t)=>{let o=L({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.members.updateRole(e,t.role,o.organizationId),"Failed to update member role",t.json);U(CE,r.member,{json:t.json})},jE=async(e,t)=>{let o=L({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.members.remove(e,o.organizationId),"Failed to remove member",t.json);if(t.json){E(r);return}V(`Removed ${r.removedUserId} from the active organization.`)},yS=W("members","Manage organization members").withSubcommands({list:S("list","List members in the active organization",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await xE({token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members list  # List members in the active organization"]).build(),"update-role":S("update-role","Update one member's organization role",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},"organization-id":{type:"string"},role:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("User ID is required.");return p("User ID is required.")}if(t.role!=="admin"&&t.role!=="member"){if(t.json)return v("Role must be either 'admin' or 'member'.");return p("Role must be either 'admin' or 'member'.")}await zE(n,{token:t.token,organizationId:t["organization-id"],role:t.role,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},role:{type:"string",description:"New role: admin or member"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members update-role user_123 --role admin  # Promote a member to admin"]).build(),remove:S("remove","Remove one member from the active organization",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("User ID is required.");return p("User ID is required.")}await jE(n,{token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members remove user_123  # Remove a member from the active organization"]).build()}).withExamples(["sazabi members list  # List members in the active organization","sazabi members update-role user_123 --role admin  # Promote a member to admin","sazabi members remove user_123  # Remove a member from the active organization"]).build();J();oe();X();J();oe();X();X();var EE=2000,pc=async(e)=>{let t=e.pollIntervalMs??EE,o=Date.now(),n=!1,r={completed:!1,threadId:e.threadId,runId:e.runId,status:"processing",response:null};while(!0){let i=await e.client.runs.get(e.runId);if(!i.success){if(!RE(i))return cy(e.printProgress,n),i}else if(r=i.value,i.value.completed)return cy(e.printProgress,n),i;if(e.timeoutMs!==void 0&&Date.now()-o>=e.timeoutMs)return cy(e.printProgress,n),ke(r);n=UE(e.printProgress,n),await gc(t)}},UE=(e,t)=>{if(!e)return t;if(!t)process.stdout.write(`
`);return process.stdout.write("."),!0},cy=(e,t)=>{if(!e||!t)return;process.stdout.write(`
`)},RE=(e)=>{return e.statusCode===404};var FE={threadId:{label:"Thread ID",type:{kind:"id"}},messageId:{label:"Message ID",type:{kind:"nullable-string",emptyLabel:"(pending)"}},url:{label:"URL",type:{kind:"nullable-string"},get:(e)=>e.threadUrl??null},runId:{label:"Run ID",type:{kind:"id"}},status:{label:"Status",type:{kind:"string"}},pollWith:{label:"Poll with",type:{kind:"string"},get:(e)=>`sazabi runs get ${e.runId}`},response:{label:"Response",type:{kind:"nullable-string"},get:(e)=>e.response}},KE={layout:"sections",schema:FE,primary:{title:"Thread",fields:["threadId","messageId","url","runId","status","pollWith"]},secondary:[{title:"Response",field:"response"}]},BE=()=>{return process.env.SAZABI_AUTOMATION_ID??process.env.SAZABI_SCRIPT_PARAM_AUTOMATION_ID},vS=async(e,t={})=>{let o=Date.now(),n=L({tokenFlag:t.token,jsonMode:t.json}),r=N({token:n.token,projectId:n.projectId,apiBaseUrlFlag:t.apiBaseUrl}),i=await GE({message:e,threadId:t.threadId,projectId:n.projectId,json:t.json,client:r,wait:t.wait,timeoutMs:t.timeout,automationId:BE()});if(t.wait&&i.status==="processing"){let a=t.timeout===void 0?void 0:Math.max(0,t.timeout-(Date.now()-o)),c=I(await pc({client:r,runId:i.runId,threadId:i.threadId,timeoutMs:a,printProgress:!t.json}),"Failed to get run",t.json);i={...i,status:c.status,response:c.response,messageId:i.messageId??c.messageId}}U(KE,i,{json:t.json})},GE=async(e)=>{if(e.threadId){let o=I(await e.client.messages.append(e.threadId,e.message,e.wait??!1,pS(e.timeoutMs),e.automationId),"Failed to send message",e.json);return{threadId:e.threadId,runId:o.result.runId,messageId:o.result.messageId,status:o.result.status,response:o.result.response,threadUrl:e.projectId?Tt(e.projectId,e.threadId,void 0,o.result.messageId):void 0}}let t=I(await e.client.threads.create({message:e.message,...e.projectId?{projectId:e.projectId}:{},wait:e.wait??!1,timeoutSeconds:pS(e.timeoutMs),...e.automationId!==void 0?{automationId:e.automationId}:{}}),"Failed to create thread",e.json);return{threadId:t.result.threadId,runId:t.result.runId,messageId:t.result.messageId,status:t.result.status,response:t.result.response,threadUrl:e.projectId?Tt(e.projectId,t.result.threadId,void 0,t.result.messageId):void 0}},pS=(e)=>{if(e===void 0)return 20;return Math.max(1,Math.min(Math.ceil(e/1000),20))};var HE={id:{label:"ID",type:{kind:"string"}},role:{label:"Role",type:{kind:"role"}},content:{label:"Content",type:{kind:"custom",render:(e)=>{let o=e.find((n)=>n.type==="message"&&Boolean(n.message));return o?Ye(o.message):_e("(no text)")}}},createdAt:{label:"Created",type:{kind:"date"}}},ME={schema:HE,columns:["id","role","content","createdAt"],header:"Messages",emptyMessage:"No messages found."},JE={id:{label:"ID",type:{kind:"string"}},threadTitle:{label:"Thread",type:{kind:"nullable-string",emptyLabel:"(no title)"}},role:{label:"Role",type:{kind:"role"}},content:{label:"Content",type:{kind:"custom",render:(e)=>Ye(e)}},score:{label:"Score",align:"right",type:{kind:"custom",render:(e)=>e!=null?e.toFixed(2):"-"}}},qE={schema:JE,columns:["id","threadTitle","role","content","score"],header:{title:"Search Results",variant:"search"},emptyMessage:"No matching messages found."},VE=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{messages:r,nextCursor:i}=I(await n.messages.list(e,{limit:t.limit,cursor:t.cursor}),"Failed to list messages",t.json);q(ME,r,{json:t.json,nextCursor:i})},WE=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{messages:r,pagination:i}=I(await n.search.messages({query:e,limit:t.limit,page:t.page,threadId:t.threadId,role:t.role}),"Failed to search messages",t.json);if(t.json){E({messages:r,pagination:i});return}q(qE,r,{count:i.totalResults}),mt({type:"page",page:i.page,totalPages:i.totalPages})},fS=W("messages","Send, list, and search messages").withSubcommands({send:S("send","Send a message (creates new thread if --thread-id omitted)",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},"thread-id":{type:"string",short:"t"},wait:{type:"boolean"},timeout:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o.join(" ");if(!n){if(t.json)return v("Message is required. Usage: sazabi messages send <message> [--thread-id <id>]");return p("Message is required. Usage: sazabi messages send <message> [--thread-id <id>]")}let r=t.timeout?Se(t.timeout,1,3600,"Timeout",t.json)*1000:void 0,i={token:t.token,threadId:t["thread-id"],wait:t.wait,timeout:r,json:t.json,apiBaseUrl:t["api-base-url"]};await vS(n,i)}).withPositionalArgs("<message>").withOptions({token:{type:"string",description:"Override authentication token"},"thread-id":{type:"string",short:"t",description:"Thread ID to append to (creates new thread if omitted)"},wait:{type:"boolean",description:"Wait for assistant response and print it"},timeout:{type:"string",description:"Timeout in seconds to wait for response before returning processing state"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi messages send 'Hello'                         # Start a new thread","sazabi messages send 'Hello' --thread-id abc123      # Append to existing thread","sazabi messages send 'Hello' -t abc123 --wait        # Append and wait for reply","sazabi messages send 'Hello' --wait                  # New thread, wait for reply","sazabi messages send 'Hello' --wait --timeout 120    # Wait up to 2 minutes"]).build(),list:S("list","List messages in a thread",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},limit:{type:"string"},cursor:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi messages list <thread-id>");return p("Thread ID is required. Usage: sazabi messages list <thread-id>")}if(o.length>1){let i=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${i}`);return p(`Unexpected arguments: ${i}`)}let r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.cursor)r.cursor=t.cursor;await VE(n,r)}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of messages to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi messages list <thread-id>  # List all messages in thread","sazabi messages list <thread-id> --limit 20  # List with custom limit","sazabi messages list <thread-id> --cursor xyz  # List next page"]).build(),search:S("search","Search messages in current project",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},limit:{type:"string"},page:{type:"string"},"thread-id":{type:"string"},role:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o.join(" ");if(!n){if(t.json)return v("Search query is required. Usage: sazabi messages search <query>");return p("Search query is required. Usage: sazabi messages search <query>")}let r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.page)r.page=Se(t.page,1,Number.MAX_SAFE_INTEGER,"Page",t.json);if(t["thread-id"])r.threadId=t["thread-id"];if(t.role)r.role=dt(t.role,["user","assistant"],"Role",t.json);await WE(n,r)}).withPositionalArgs("<query>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of results (default: 20, max: 100)"},page:{type:"string",description:"Page number for pagination (default: 1)"},"thread-id":{type:"string",description:"Filter messages by thread ID"},role:{type:"string",description:"Filter by role: user or assistant"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi messages search "error handling"  # Search messages','sazabi messages search "bug" --limit 50  # Search with limit','sazabi messages search "user input" --role user  # Search user messages only','sazabi messages search "response" --thread-id thread-123  # Search in specific thread']).build()}).withExamples(["sazabi messages send 'Hello'                      # Start a new thread","sazabi messages send 'Follow up' -t <thread-id>   # Append to thread","sazabi messages list <thread-id>                  # List messages in thread",'sazabi messages search "error"                    # Search messages']).build();J();oe();X();We();var IS={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},slug:{label:"Slug",type:{kind:"string"}},role:{label:"Role",type:{kind:"nullable-string"}}},YE={schema:IS,columns:["id","name","slug","role"],header:"Organizations",emptyMessage:"No organizations found."},XE={layout:"field-list",schema:IS,fields:["id","name","slug","role"]},ZE=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.organizations.list(),"Failed to list organizations",e.json);q(YE,n.organizations,{json:e.json})},QE=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=I(ae(),"Failed to read settings",t.json),r=N({token:o.token,organizationId:e,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await r.organizations.get(e),"Failed to select organization",t.json).organization,a=I(await r.projects.list({organizationId:e}),"Failed to fetch organization projects",t.json).projects,c=I(Fe(n),"Failed to resolve profile",t.json),h=c.activeProjectId&&a.some((b)=>b.id===c.activeProjectId)?c.activeProjectId:a[0]?.id,u=i.id!==c.activeOrganizationId,d=h!==c.activeProjectId,s=I(Ke(n,{activeOrganizationId:i.id,organizationName:i.name,activeProjectId:h,...(u||d)&&_t(c)}),"Failed to update profile",t.json);if(I(ve(s),"Failed to persist active organization",t.json),t.json){E({organization:i,activeProjectId:I(Fe(s),"Failed to resolve profile",t.json).activeProjectId});return}V(`Active organization set to ${i.name}.`)},e4=async(e,t)=>{let o=L({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.organizations.rename(e,o.organizationId),"Failed to rename organization",t.json);t4(r.organization.id,r.organization.name),U(XE,r.organization,{json:t.json})},t4=(e,t)=>{let o=ae();if(!o.success)return;let n=o.value,r=Fe(n);if(!r.success)return;if(r.value.activeOrganizationId!==e)return;let i=Ke(n,{organizationName:t});if(i.success)ve(i.value)},kS=W("organizations","Manage organizations").withSubcommands({list:S("list","List organizations available to the current credential",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await ZE({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi organizations list  # List available organizations"]).build(),use:S("use","Set the active organization for future commands",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Organization ID is required.");return p("Organization ID is required.")}await QE(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi organizations use org_123  # Set the active organization"]).build(),rename:S("rename","Rename the active organization",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Organization name is required.");return p("Organization name is required.")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await e4(n,{token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi organizations rename "Observed Platform"  # Rename the active organization']).build()}).withExamples(["sazabi organizations list  # List available organizations","sazabi organizations use org_123  # Set the active organization",'sazabi organizations rename "Observed Platform"  # Rename the active organization']).build();J();X();We();var r4={name:{label:"Profile",type:{kind:"string"}},active:{label:"Active",type:{kind:"custom",render:(e)=>e?ce.success("*"):"",serialize:(e)=>Boolean(e)}}},o4=(e)=>{let t=I(ae(),"Failed to read settings",e.json),o=Object.keys(t.profiles).map((n)=>({name:n,active:n===t.activeProfile}));q({schema:r4,columns:["name","active"],header:"Profiles",emptyMessage:"No profiles configured."},o,{json:e.json})},n4=(e,t)=>{let o=I(ae(),"Failed to read settings",t.json);if(!o.profiles[e]){let n=`Profile '${e}' does not exist. Run 'sazabi profiles list' to see available profiles.`;if(t.json)v(n);p(n)}if(o.activeProfile=e,I(ve(o),"Failed to write settings",t.json),t.json){E({activeProfile:e});return}V(`Active profile set to '${e}'.`)},i4=(e,t)=>{let o=I(ae(),"Failed to read settings",t.json);if(o.profiles[e]){let n=`Profile '${e}' already exists.`;if(t.json)v(n);p(n)}if(o.profiles[e]={},I(ve(o),"Failed to write settings",t.json),t.json){E({created:e});return}V(`Created profile '${e}'.`)},a4=(e,t)=>{let o=I(ae(),"Failed to read settings",t.json);if(!o.profiles[e]){let n=`Profile '${e}' does not exist.`;if(t.json)v(n);p(n)}if(e===o.activeProfile){let n=`Cannot delete the active profile '${e}'. Switch to a different profile first with 'sazabi profiles use <name>'.`;if(t.json)v(n);p(n)}if(delete o.profiles[e],I(ve(o),"Failed to write settings",t.json),t.json){E({deleted:e});return}V(`Deleted profile '${e}'.`)},wS=W("profiles","Manage named CLI profiles").withSubcommands({list:S("list","List all profiles",async(e)=>{let{values:t}=O(e,{json:{type:"boolean"}});o4({json:t.json})}).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles list  # List all profiles"]).build(),use:S("use","Set the active profile",async(e)=>{let{values:t,positionals:o}=O(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles use <name>");return p("Profile name is required. Usage: sazabi profiles use <name>")}n4(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles use staging  # Switch to staging profile"]).build(),create:S("create","Create a new empty profile",async(e)=>{let{values:t,positionals:o}=O(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles create <name>");return p("Profile name is required. Usage: sazabi profiles create <name>")}i4(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles create staging  # Create a new profile"]).build(),delete:S("delete","Delete a profile",async(e)=>{let{values:t,positionals:o}=O(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles delete <name>");return p("Profile name is required. Usage: sazabi profiles delete <name>")}a4(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles delete staging  # Delete a profile"]).build()}).withExamples(["sazabi profiles list  # List all profiles","sazabi profiles use staging  # Switch to staging profile","sazabi profiles create local  # Create a new profile","sazabi profiles delete staging  # Delete a profile"]).build();J();oe();X();We();var c4={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},region:{label:"Region",type:{kind:"string"}},active:{label:"Active",type:{kind:"custom",render:(e)=>e?ce.success("*"):"",serialize:(e)=>e}}},l4={schema:c4,columns:["id","name","region","active"],header:"Projects",emptyMessage:"No projects found."},h4=async(e)=>{let t=L({tokenFlag:e.token,organizationIdFlag:e.organizationId,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),r=I(await o.projects.list({organizationId:t.organizationId}),"Failed to list projects",e.json).projects.map((i)=>({...i,active:i.id===t.projectId}));q(l4,r,{json:e.json})},u4=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=I(ae(),"Failed to read settings",t.json),r=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await r.projects.get(e),"Failed to select project",t.json).project,a=ht(n),c=n.profiles[a],h=i.organizationId!==c?.activeOrganizationId,u=i.id!==c?.activeProjectId,d=I(Ke(n,{activeOrganizationId:i.organizationId,activeProjectId:i.id,...h&&{organizationName:void 0},...(h||u)&&_t(c)}),"Failed to update profile",t.json);if(I(ve(d),"Failed to persist active project",t.json),t.json){E({project:i});return}V(`Active project set to ${i.name}.`)},$S=W("projects","Manage projects").withSubcommands({list:S("list","List projects in the active organization",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await h4({token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi projects list  # List projects in the active organization"]).build(),use:S("use","Set the active project for future commands",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Project ID is required.");return p("Project ID is required.")}await u4(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi projects use 11111111-1111-4111-8111-111111111111  # Set the active project"]).build()}).withExamples(["sazabi projects list  # List projects in the active organization","sazabi projects use 11111111-1111-4111-8111-111111111111  # Set the active project"]).build();J();oe();X();var s4={runId:{label:"Run ID",type:{kind:"id"}},threadId:{label:"Thread ID",type:{kind:"id"}},status:{label:"Status",type:{kind:"string"}},completed:{label:"Completed",type:{kind:"boolean"}},messageId:{label:"Message ID",type:{kind:"nullable-string",emptyLabel:"(none)"}},response:{label:"Response",type:{kind:"nullable-string"}}},d4={layout:"sections",schema:s4,primary:{title:"Run",fields:["runId","threadId","status","completed","messageId"]},secondary:[{title:"Response",field:"response"}]},g4=async(e,t={})=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),r=I(await n.runs.get(e),"Failed to get run",t.json),i=t.wait&&!r.completed?I(await pc({client:n,runId:e,threadId:r.threadId,timeoutMs:t.timeout,printProgress:!t.json}),"Failed to get run",t.json):r;if(U(d4,i,{json:t.json}),!t.json&&!i.completed)K(),Y(`Poll with: sazabi runs get ${i.runId}`)},_S=W("runs","Inspect deferred agent runs").withSubcommands({get:S("get","Get a deferred run by run ID",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},wait:{type:"boolean"},timeout:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Run ID is required. Usage: sazabi runs get <run-id>");return p("Run ID is required. Usage: sazabi runs get <run-id>")}if(o.length>1){let i=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${i}`);return p(`Unexpected arguments: ${i}`)}let r=t.timeout?Se(t.timeout,1,3600,"Timeout",t.json)*1000:void 0;await g4(n,{token:t.token,wait:t.wait,timeout:r,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<run-id>").withOptions({token:{type:"string",description:"Override authentication token"},wait:{type:"boolean",description:"Wait for terminal status and print the final result"},timeout:{type:"string",description:"Timeout in seconds to wait before returning processing state"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi runs get <run-id>  # Check current run status","sazabi runs get <run-id> --wait  # Wait until the run is terminal","sazabi runs get <run-id> --wait --timeout 60  # Wait up to 60 seconds","sazabi runs get <run-id> --json  # Output run state as JSON"]).build()}).withExamples(["sazabi runs get <run-id>  # Check current run status","sazabi runs get <run-id> --wait  # Wait until the run is terminal"]).build();J();X();We();var ly=["apiBaseUrl","authBaseUrl","webBaseUrl","intakeBaseUrl","tailBaseUrl","apiDomain","webDomain","intakeDomain","tailDomain","forwardPublicKey"],TS=(e)=>{return ly.includes(e)},b4=["apiBaseUrl","authBaseUrl","webBaseUrl","intakeBaseUrl","tailBaseUrl"],m4=(e)=>b4.includes(e),y4={apiBaseUrl:["http:","https:"],authBaseUrl:["http:","https:"],webBaseUrl:["http:","https:"],intakeBaseUrl:["http:","https:"],tailBaseUrl:["ws:","wss:","http:","https:"]},p4=(e,t)=>{let o=(()=>{try{return new URL(t)}catch{return null}})();if(!o)return me(`Invalid URL for ${e}: '${t}'`);let n=y4[e];if(!n.includes(o.protocol))return me(`Invalid protocol '${o.protocol}' for ${e}. Allowed: ${n.join(", ")}`);return ke(o.toString().replace(/\/+$/,""))},v4=(e={})=>{let t=I(ae(),"Failed to read settings",e.json),o=ht(t),n=I(Fe(t),"Failed to resolve profile",e.json);if(e.json){E({success:!0,settingsFile:so,profile:o,settings:n});return}ie({"Settings file":so,"Active profile":o}),K();let r=Object.entries(n).filter(([,a])=>a!=null);if(r.length===0){Kt("No settings configured.");return}let i=r.map(([a,c])=>({key:a,value:String(c)})).sort((a,c)=>a.key.localeCompare(c.key));rt(i,[{header:"Key",key:"key",width:20},{header:"Value",key:"value"}],{header:"Settings"})},f4=(e,t,o={})=>{if(!TS(e)){let h=ly.join(", "),u=`Invalid setting key: '${e}'. Valid keys: ${h}`;if(o.json){v(u);return}p(u);return}let n=t;if(m4(e)){let h=p4(e,t);if(!h.success){if(o.json){v(h.error);return}p(h.error);return}n=h.value}let r=I(ae(),"Failed to read settings",o.json),i=I(Fe(r),"Failed to resolve profile",o.json);if(e==="forwardPublicKey"&&!i.activeProjectId){if(o.json){v("Cannot set forwardPublicKey without an active project. Select a project first with 'sazabi projects use <id>'.");return}p("Cannot set forwardPublicKey without an active project. Select a project first with 'sazabi projects use <id>'.");return}let a=e==="forwardPublicKey"?{forwardPublicKey:n,forwardPublicKeyProjectId:i.activeProjectId}:{[e]:n},c=I(Ke(r,a),"Failed to update profile",o.json);if(I(ve(c),"Failed to write settings",o.json),o.json){E({success:!0,key:e,value:n});return}V(`Set ${e} to ${n}`)},I4=(e,t={})=>{if(!TS(e)){let a=ly.join(", "),c=`Invalid setting key: '${e}'. Valid keys: ${a}`;if(t.json){v(c);return}p(c);return}let o=I(ae(),"Failed to read settings",t.json),n=I(Fe(o),"Failed to resolve profile",t.json),r=e==="forwardPublicKey"?_t(n):{[e]:void 0},i=I(Ke(o,r),"Failed to update profile",t.json);if(I(ve(i),"Failed to write settings",t.json),t.json){E({success:!0,key:e});return}V(`Cleared ${e}`)},OS=W("settings","Manage global CLI settings").withSubcommands({view:S("view","Show current CLI settings and file location",async(e)=>{let{values:t}=O(e,{json:{type:"boolean"}});v4({json:t.json})}).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings view  # Show current settings","sazabi settings view --json  # Output as JSON"]).build(),set:S("set","Set a global configuration value",async(e)=>{let{values:t,positionals:o}=O(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0],r=o[1];if(!n){if(t.json)return v("Setting key is required. Usage: sazabi settings set <key> <value>");return p("Setting key is required. Usage: sazabi settings set <key> <value>")}if(!r){if(t.json)return v("Value is required. Usage: sazabi settings set <key> <value>");return p("Value is required. Usage: sazabi settings set <key> <value>")}f4(n,r,{json:t.json})}).withPositionalArgs("<key> <value>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings set apiBaseUrl https://api.example.com  # Override a base URL (also: authBaseUrl, webBaseUrl, intakeBaseUrl, tailBaseUrl)"]).build(),unset:S("unset","Clear a global configuration value",async(e)=>{let{values:t,positionals:o}=O(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Setting key is required. Usage: sazabi settings unset <key>");return p("Setting key is required. Usage: sazabi settings unset <key>")}I4(n,{json:t.json})}).withPositionalArgs("<key>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings unset apiBaseUrl  # Clear API base URL override","sazabi settings unset --json apiBaseUrl  # Output as JSON"]).build()}).withExamples(["sazabi settings view  # Show current settings","sazabi settings set apiBaseUrl https://api.example.com  # Set API base URL","sazabi settings unset apiBaseUrl  # Clear API base URL override"]).build();J();X();import*as FS from"node:os";import*as KS from"node:path";import*as St from"node:path";var vc=["claude-code","codex","cursor","amp","opencode"],k4={"claude-code":{user:(e)=>St.join(e,".claude","skills"),project:(e)=>St.join(e,".claude","skills")},codex:{user:(e)=>St.join(e,".agents","skills"),project:(e)=>St.join(e,".agents","skills")},amp:{user:(e)=>St.join(e,".config","agents","skills"),project:(e)=>St.join(e,".agents","skills")},opencode:{user:(e)=>St.join(e,".config","opencode","skills"),project:(e)=>St.join(e,".opencode","skills")}},w4="Cursor does not support agent skills. Use Cursor Rules (.cursor/rules/*.mdc) instead. See https://cursor.com/docs/context/rules.",SS=(e)=>{if(e.agent==="cursor")return{kind:"unsupported",agent:"cursor",reason:w4};let t=k4[e.agent],o=e.scope==="user"?t.user(e.home):t.project(e.projectDir);return{kind:"supported",agent:e.agent,scope:e.scope,root:o}};th();import{dirname as D4,resolve as L4}from"node:path";import{fileURLToPath as N4}from"node:url";var PS=`# Sazabi CLI Reference

The CLI is published as \`@sazabi/cli\`. Every command supports \`--json\` for machine-readable output and \`-h\` for help.

## Thread Operations

\`\`\`bash
# List recent threads (paginated)
sazabi threads list --limit 10

# Get a thread with all messages
sazabi threads get <thread-id>

# Full-text search across threads
sazabi threads search "authentication errors" --status regular
\`\`\`

## Message Operations

\`\`\`bash
# Send a message (creates new thread if --thread-id omitted)
sazabi messages send "What's the status of the intake pipeline?"

# Send and wait for the run to finish
sazabi messages send "What's the status of the intake pipeline?" --wait

# Send to existing thread
sazabi messages send "Follow up on that" --thread-id <thread-id>

# Send to existing thread and wait for the appended run
sazabi messages send "Follow up on that" --thread-id <thread-id> --wait

# List messages in one thread
sazabi messages list <thread-id>
sazabi messages list <thread-id> --limit 20

# Search messages
sazabi messages search "timeout" --role assistant
sazabi messages search "error" --thread-id <thread-id>
\`\`\`

## Run Operations

\`\`\`bash
# Poll for deferred run status
sazabi runs get <run-id>

# Wait until the run is completed, errored, or aborted
sazabi runs get <run-id> --wait

# Wait with timeout
sazabi runs get <run-id> --wait --timeout 60
\`\`\`

## Issue Operations

Use the issue commands when you need to query, create, update, or suppress Sazabi issues. Prefer \`count\` for totals and breakdowns instead of paginating list/search output.

\`\`\`bash
# Broad listing
sazabi issues list
sazabi issues list --status open
sazabi issues list --severity critical
sazabi issues list --status-component <component-id>

# Narrow search by name and filters
sazabi issues search "checkout"
sazabi issues search "checkout" --status open --severity high
sazabi issues search --status-component <component-id> --include-delivery-metadata --json

# Counts and breakdowns by status/severity
sazabi issues count
sazabi issues count "checkout"
sazabi issues count --status open --severity critical

# One issue
sazabi issues get <issue-id>

# Create from flags or JSON
sazabi issues create \\
  --name "Checkout 500s after deploy" \\
  --severity high \\
  --what-happened "Checkout API is returning elevated 500s." \\
  --why-it-happened "The payments dependency is timing out after the latest deploy." \\
  --how-to-fix "Rollback the payments deploy and verify checkout error rate returns to baseline."

cat issue.json | sazabi issues create --from-json - --json

# Terminal lifecycle actions
sazabi issues resolve <issue-id>
sazabi issues ignore <issue-id>

# Reversible suppression actions
sazabi issues mute <issue-id>
sazabi issues unmute <issue-id>
\`\`\`

\`ignore\` sets the terminal \`ignored\` status. Use \`mute\` and \`unmute\` when you want reversible suppression without changing issue status.

## Status Component Operations

Use status component commands when you need to inspect or maintain the project component registry used by status pages and issue linking. Always list existing components before registering a new one, and only register components backed by repository, telemetry, or deployment evidence.

\`\`\`bash
# List active components
sazabi status-components list
sazabi status-components list --limit 100 --json

# Include soft-deleted components when auditing previous registry state
sazabi status-components list --include-deleted

# Get one component
sazabi status-components get <component-id>

# Register or refresh a component
sazabi status-components register --name "API Gateway"
sazabi status-components register --name "Checkout" --description "Checkout API and workflow"

# Deregister a component by soft-deleting it
sazabi status-components deregister <component-id>
sazabi status-components deregister <component-id> --reason "service retired"
\`\`\`

Use specific names such as service names, product areas, workflows, or dependencies. Avoid unsupported placeholders such as "API" or "Database" unless the repository or telemetry actually uses those as concrete component names.

## Log Tailing

Real-time log streaming via WebSocket:

\`\`\`bash
sazabi logs tail                              # All logs
sazabi logs tail --severities ERROR,WARN      # Filter by severity
sazabi logs tail --services api-gateway       # Filter by service
sazabi logs tail --search "timeout"           # Filter by content
sazabi logs tail --json                       # JSON output (for piping)
\`\`\`

### Captured log tailing pattern

\`logs tail\` is a persistent stream, so you can't just run it and wait. Use this pattern to capture logs around a specific action:

\`\`\`bash
# 1. Start tailing in the background, filtered to what you care about
sazabi logs tail --json --severities ERROR,WARN > /tmp/captured-logs.json &
TAIL_PID=$!

# 2. Do the thing that generates logs
# Option A: Trigger something in production/staging
curl https://api.example.com/endpoint-under-test
# Option B: Run a local process and forward its output to Sazabi
my-app 2>&1 | sazabi logs forward

# 3. Give logs a moment to arrive, then stop tailing
sleep 3
kill $TAIL_PID

# 4. Read and analyze the captured logs
cat /tmp/captured-logs.json
\`\`\`

This gives you a targeted log capture window around a specific action. Use \`--services\`, \`--severities\`, and \`--search\` filters to reduce noise. Prefer \`--json\` so you can parse the output programmatically.

## Log Forwarding

Forward logs from stdin to Sazabi intake via OTLP:

\`\`\`bash
cat app.log | sazabi logs forward             # Forward from file
my-app 2>&1 | sazabi logs forward             # Forward from process
\`\`\`

Reads from stdin and uploads to Sazabi's intake. Logs become queryable through Sazabi once ingested.

## Data Sources

### Data Source Types

| ID            | Name                 |
| ------------- | -------------------- |
| cloudflare    | Cloudflare           |
| cloudwatch    | CloudWatch           |
| convex        | Convex               |
| datadog       | Datadog Agent        |
| daytona       | Daytona              |
| digital_ocean | DigitalOcean         |
| e2b           | E2B                  |
| fly_io        | Fly.io               |
| gcp           | Google Cloud Logging |
| inngest       | Inngest              |
| langchain     | LangChain            |
| mastra        | Mastra               |
| netlify       | Netlify              |
| openrouter    | OpenRouter           |
| otel          | OpenTelemetry        |
| posthog       | PostHog              |
| railway       | Railway              |
| render        | Render               |
| sentry        | Sentry SDK           |
| supabase      | Supabase             |
| temporal      | Temporal             |
| vercel        | Vercel               |

### Data Source Operations

Use these commands first when the user asks to connect a provider, manage ingestion, or discover whether Sazabi supports something like Vercel.

\`\`\`bash
# List supported data-source types
sazabi data-sources types --json

# Show the setup skill for a provider
sazabi data-sources skill --type <provider> --json

# List connections for the active project or a specific type
sazabi data-sources connections list
sazabi data-sources connections list --type <provider>

# Get one connection
sazabi data-sources connections get <connection-id>

# Create a connection directly when you already know the metadata contract.
# Note: for Vercel, prefer the MCP \`setup_vercel\` tool or \`data-sources skill
# --type vercel\` — creating a Vercel connection this way does NOT provision log/trace/analytics drains.
sazabi data-sources connections create --type <provider> --metadata '{"apiToken":"..."}'

# List streams for a connection
sazabi data-sources streams list --connection-id <connection-id>

# Get one stream
sazabi data-sources streams get <stream-id>

# Create a stream directly
sazabi data-sources streams create --connection-id <connection-id> --display-name "my-app" --config '{"foo":"bar"}'
\`\`\`

For provider onboarding, prefer this discovery order:

1. \`data-sources types --json\`
2. \`data-sources skill --type <type> --json\`
3. Connection and stream commands only after you understand the provider's setup flow

\`data-sources skill --type <type>\` is especially important for AI-agent workflows because it returns provider-specific setup guidance directly from the CLI instead of forcing the agent to infer the flow.

## Skills

Install the Sazabi-authored skills into an AI coding agent's skills directory. Skill content is bundled into the CLI at build time — no network access required.

\`\`\`bash
# Install all skills for Claude Code (user-scoped, the default)
sazabi skill install claude-code

# Install into the current project directory
sazabi skill install claude-code --project

# Install into a specific project directory
sazabi skill install codex --project --project-dir /path/to/repo

# Overwrite existing skill files
sazabi skill install claude-code --force

# JSON output
sazabi skill install claude-code --json
\`\`\`

Supported agents: \`claude-code\`, \`codex\`, \`amp\`, \`opencode\`. (\`cursor\` is recognized but refused — use Cursor Rules instead.)

## Public Key Operations

\`\`\`bash
sazabi public-keys list                        # List public keys for the resolved project context
sazabi public-keys list --project-id <project-id>  # Override project selection for one command
sazabi public-keys get <key-id>               # Get one public key
sazabi public-keys create "CLI Forwarder"     # Create one public key
sazabi public-keys update <key-id> --name "Renamed key"   # Update one public key
sazabi public-keys deactivate <key-id>        # Deactivate one public key
\`\`\`

Public keys are used for intake authentication. \`logs forward\` can reuse an existing key via \`--public-key\` or the persisted \`forwardPublicKey\` setting.

## Secret Key Operations

\`\`\`bash
sazabi secret-keys list                        # List secret keys for the resolved project context
sazabi secret-keys list --project-id <project-id>  # Override project selection for one command
sazabi secret-keys get <key-id>               # Get one secret key
sazabi secret-keys create "CI Agent"          # Create one secret key
sazabi secret-keys update <key-id> --name "Renamed key"   # Update one secret key
sazabi secret-keys delete <key-id>            # Delete one secret key
\`\`\`

Secret keys are bearer credentials. You can use a generated secret key immediately with \`sazabi auth save <secret-key>\`.

## Profiles

\`\`\`bash
sazabi profiles list                          # List all profiles (marks active)
sazabi profiles create staging                # Create a new profile
sazabi profiles use staging                   # Switch the active profile
sazabi profiles delete staging                # Delete a profile
\`\`\`

## Auth & Settings

\`\`\`bash
sazabi auth login                             # Authenticate via browser
sazabi auth login --profile staging           # Authenticate a specific profile (auto-creates)
sazabi auth save <token>                      # Save an existing session token or secret key
sazabi auth logout                            # Remove saved credentials
sazabi auth whoami                            # Show current credential and active context
sazabi organizations list                     # List available organizations
sazabi organizations use <organization-id>    # Set active organization
sazabi organizations rename "Observed Platform"  # Rename the active organization
sazabi members list                           # List members in the active organization
sazabi members update-role <user-id> --role admin   # Update a member role
sazabi members remove <user-id>               # Remove a member from the active organization
sazabi projects list                          # List projects in the active organization
sazabi projects use <project-id>              # Set active project

sazabi settings view                          # Show all settings
sazabi settings set <key> <value>             # Set a value
sazabi settings unset <key>                   # Remove a value
\`\`\`

## JSON Output Envelopes

Before scripting against \`--json\` output, check the envelope shape below. Field names and nesting follow the CLI renderer convention, not the underlying API contract — they are stable but easy to misremember. Verify against the table before writing \`jq\` filters.

### List commands — \`{ "items": [...], "nextCursor": ... }\`

Every list subcommand wraps results in a generic \`items\` array. Iterate \`.items[]\`, not \`.connections[]\` / \`.streams[]\` / \`.publicKeys[]\` / \`.projects[]\`. Applies to: \`data-sources types\`, \`data-sources connections list\`, \`data-sources streams list\`, \`public-keys list\`, \`secret-keys list\`, \`projects list\`, \`threads list\`, \`messages list\`, \`organizations list\`, \`members list\`, \`profiles list\`, \`issues list\`, \`issues search\`.

### Detail commands — direct object fields

Detail and lifecycle commands render the object fields directly in JSON mode. Applies to: \`issues get\`, \`issues create\`, \`issues resolve\`, \`issues ignore\`, \`issues mute\`, \`issues unmute\`, \`issues count\`.

\`\`\`bash
sazabi projects list --json | jq -r '.items[] | select(.id == $id) | .region'
\`\`\`

### \`data-sources connections create --json\`

\`\`\`json
{ "connectionId": "<uuid>", "publicKey": "<plaintext bearer>" }
\`\`\`

\`publicKey\` is shown **only once**, at creation. Capture both before moving on. Field is \`connectionId\`, not \`id\`.

### \`data-sources connections get --json\`

Single object — same fields as the list items. Public surface includes \`{ id, projectId, dataSourceType, displayName, createdAt }\`. Does **not** expose \`metadata\`, region, intake domain, or any encrypted setup-context fields; \`toApiConnection\` strips them. Identify reused connections by \`displayName\`, not by hidden metadata.

### \`data-sources streams create --json\`

\`\`\`json
{ "streamId": "<uuid>", "publicKey": "<plaintext>" }
\`\`\`

\`publicKey\` is **optional** — returned only for manual-only data sources that mint a per-stream key. For native-flow sources it is absent.

### \`data-sources streams list --json\`

Items carry \`{ id, connectionId, displayName, config, status, errorMessage, createdAt }\`. Stream \`status\` is one of \`pending | provisioning | active | error\` — **not** \`failed\` / \`errored\`. When \`status === "error"\`, \`errorMessage\` carries the diagnostic.

### \`public-keys create --json\` (also \`secret-keys create\`)

\`\`\`json
{ "publicKey": { "id": "...", "name": "...", "value": "<plaintext>", "projectId": "...", "dataSourceConnectionId": null, "createdAt": "...", "expiresAt": null, "lastUsedAt": null, "deactivatedAt": null } }
\`\`\`

Plaintext key is at \`.publicKey.value\` (or \`.secretKey.value\`), **not** \`.key\` or \`.value\`. \`value\` is only present on create responses — \`public-keys list\` and \`public-keys get\` strip it for security. If a bearer key is lost, mint a new key; you cannot recover the old plaintext.

### \`auth whoami --json\`

Returns active credential identity and selected org/project IDs only. Does **not** expose \`apiBaseUrl\`, \`intakeBaseUrl\`, project region, or intake domain. For those, use \`settings view --json\` (returns the persisted base URLs) or \`projects list --json\` (each item carries \`region\`).

### \`projects use --json\`

Writes the project ID to settings. Does not echo the chosen ID to stdout in a structured envelope, so capture the ID into a shell variable explicitly:

\`\`\`bash
sazabi projects use <project-id>
SAZABI_PROJECT_ID=<project-id>
\`\`\`

### \`data-sources skill --type <type> --json\`

\`\`\`json
{ "type": "<type>", "setupSkill": "<markdown>" }
\`\`\`

Only those two fields. Does not expose region, intake domain, project context, or any provisioning hints.

## Common Flags

All commands accept:

- \`--json\` — Machine-readable JSON output
- \`-h, --help\` — Show command help
- \`--profile <name>\` — Use a named profile instead of the active one

Most API-backed commands also accept:

- \`--token <token>\` — Override authentication for this command with a session token or secret key
- \`--api-base-url <url>\` — Override API endpoint for this command

Local-only commands such as \`settings view\`, \`settings set\`, and \`settings unset\` do not accept auth or API endpoint override flags.
`;var AS=`# CLI Setup

These instructions are for you (the agent) to help the user install and configure the Sazabi CLI. You need two things from the user: (1) that they want to use the CLI, and (2) whether they want to authenticate through the browser-based login flow or provide an existing token explicitly.

## Installation

The CLI is published as \`@sazabi/cli\`. Install it globally:

\`\`\`bash
bun add -g @sazabi/cli
\`\`\`

Or run without installing:

\`\`\`bash
bunx @sazabi/cli --help
\`\`\`

Also works with npm:

\`\`\`bash
npm install -g @sazabi/cli
npx @sazabi/cli --help
\`\`\`

## Authentication

Authenticate with the browser-based login flow:

\`\`\`bash
bunx @sazabi/cli auth login
\`\`\`

Or save an existing token directly:

\`\`\`bash
bunx @sazabi/cli auth save sazabi_secret_xxx
\`\`\`

For local development against the full stack with an existing token:

\`\`\`bash
bunx @sazabi/cli auth save sazabi_secret_xxx \\
  --api-base-url http://localhost:15009
\`\`\`

Verify it worked:

\`\`\`bash
bunx @sazabi/cli auth whoami
\`\`\`

For local development against the full stack:

\`\`\`bash
bunx @sazabi/cli auth login \\
  --api-base-url http://localhost:15009 \\
  --auth-base-url http://localhost:15001 \\
  --web-base-url https://localhost:5173
\`\`\`

### Named Profiles

Named profiles let you store separate credentials and switch between them. This is useful when you work across multiple organizations, projects, or API keys.

\`\`\`bash
# Create a profile
bunx @sazabi/cli profiles create acme-corp

# Authenticate the profile
bunx @sazabi/cli auth login --profile acme-corp

# Run a command using that profile
bunx @sazabi/cli threads list --profile acme-corp

# Switch the default profile
bunx @sazabi/cli profiles use acme-corp

# List all profiles
bunx @sazabi/cli profiles list
\`\`\`

The \`--profile <name>\` flag works with any command. When omitted, the active profile is used (defaults to \`"default"\`). \`auth login --profile <name>\` auto-creates the profile if it doesn't exist.

### Credential Precedence

Highest to lowest priority:

1. \`--token <token>\` CLI flag (per-command override)
2. \`SAZABI_TOKEN\` environment variable
3. Active profile in \`~/.sazabi/settings.json\` (resolved via \`--profile\` flag > \`SAZABI_PROFILE\` env var > \`activeProfile\` setting > \`"default"\`)

The token can be either a Better Auth session token or a \`sazabi_secret_*\`
secret key.

## Troubleshooting

**"Not authenticated":**
- Run \`bunx @sazabi/cli auth login\` to save credentials
- Or run \`bunx @sazabi/cli auth save <token>\` to persist an existing token
- Or set \`SAZABI_TOKEN\` environment variable
- Or pass \`--token <token>\` per command
- If using profiles, ensure the correct profile is active or pass \`--profile <name>\`

## After Setup

Once setup is complete, suggest the user reclaim context by rewinding/forking the conversation to before the setup began, compacting, or starting a new conversation.
`;var DS=`# MCP Server Setup

These instructions are for you (the agent) to help the user set up the Sazabi MCP server.
Do **not** ask the user to paste their secret key into chat. Tell them to replace \`<secret-key>\` locally in the command or config on their machine.
If the user already pasted a secret into chat, instruct them to revoke it at https://app.sazabi.com/settings/api and create a new one immediately.
If they don't have a key, direct them to https://app.sazabi.com/settings/api to create one. The key format is \`sazabi_secret_<hex>\`.

This gives Claude Code the Sazabi skill (MCP setup guides, CLI reference, investigation patterns). You still need to configure the MCP server connection separately — see below.

## Claude Code

Run this command, substituting the user's secret key:

\`\`\`bash
claude mcp add --transport http sazabi https://mcp.sazabi.com/mcp \\
  --header "X-Sazabi-Secret-Key: <secret-key>"
\`\`\`

Alternatively, create or edit \`.mcp.json\` in the project root:

\`\`\`json
{
  "mcpServers": {
    "sazabi": {
      "type": "http",
      "url": "https://mcp.sazabi.com/mcp",
      "headers": {
        "X-Sazabi-Secret-Key": "<secret-key>"
      }
    }
  }
}
\`\`\`

After setup, the user needs to restart Claude Code. Tools will appear as \`mcp__sazabi__send_message\`, \`mcp__sazabi__list_threads\`, etc.

Management commands:
- \`claude mcp list\` — Show configured servers
- \`claude mcp remove sazabi\` — Remove the server

## Cursor

Add to Cursor's MCP settings (the user can find this in Cursor's settings UI):

\`\`\`json
{
  "mcpServers": {
    "sazabi": {
      "type": "http",
      "url": "https://mcp.sazabi.com/mcp",
      "headers": {
        "X-Sazabi-Secret-Key": "<secret-key>"
      }
    }
  }
}
\`\`\`

## Claude Desktop

Edit the Claude Desktop config file with the same JSON structure as above:

- **macOS:** \`~/Library/Application Support/Claude/claude_desktop_config.json\`
- **Windows:** \`%APPDATA%\\Claude\\claude_desktop_config.json\`

## Troubleshooting

**Tools don't appear after restart:**
- Check for JSON syntax errors in \`.mcp.json\`
- Verify the URL ends with \`/mcp\` (not just the domain)
- Verify the secret key is valid and not expired

**401 Unauthorized errors:**
- Check that \`X-Sazabi-Secret-Key\` header is spelled exactly as shown
- The key may be expired or deleted — the user can generate a new one at https://app.sazabi.com/settings/api

**Verify connectivity:**
\`\`\`bash
curl https://mcp.sazabi.com/health
\`\`\`

## After Setup

If the user shared a secret key during this conversation, remind them to revoke it and create a new one.
Once setup is complete, suggest the user reclaim context by rewinding/forking the conversation to before the setup began, compacting, or starting a new conversation.
`;var LS=`---
name: sazabi
description: How to set up and use the Sazabi MCP server and CLI to interact with the Sazabi observability platform. Use this skill whenever the user wants to send messages to Sazabi, search or list threads, query/create/manage issues, manage status components, tail/query/forward logs, connect or manage data sources such as Vercel, inspect available Sazabi CLI capabilities, retrieve provider-specific setup skills via \`sazabi data-sources skill --type <type>\`, check thread status, configure MCP or CLI authentication, or do anything involving the Sazabi API, MCP tools, or CLI commands. Also use when you see mcp__sazabi__* tools available in your session and need guidance on how to use them effectively.
---

# Sazabi

Sazabi is an observability platform with an AI agent that helps developers investigate issues across production, staging, and local development. You can interact with it via **MCP tools** or the **CLI**.

## Runtime Environment

When you're running as the Sazabi agent (staging or production, inside the Daytona sandbox), the CLI is **pre-installed and pre-authenticated** for the active project before your session starts:

- \`sazabi\` is on \`PATH\` (no \`bunx @sazabi/cli\` fallback needed — use \`sazabi\` directly)
- \`sazabi auth save <token>\` has already run with a system secret key
- \`sazabi projects use <project-id>\` has already selected the caller's project
- Domain settings (\`apiDomain\`, \`webDomain\`, \`intakeDomain\`, \`tailDomain\`) are already set for the active cloud environment: \`sazabi.com\` in production, \`staging.sazabi.dev\` in staging, and \`development.sazabi.dev\` in development

You do **not** need to run \`sazabi --help\`, \`sazabi auth whoami\`, or install steps to discover capabilities — the full command surface is listed below. Skip straight to the concrete subcommand that answers the user.

### Command Surface (output of \`sazabi -h\`)

\`\`\`text
auth         login | save | logout | whoami
completions  zsh | bash
data-sources types | connections (list|get|create) | streams (list|get|create) | skill
organizations list | use | rename
members      list | update-role | remove
profiles     list | use | create | delete
projects     list | use
public-keys  list | get | create | update | delete
secret-keys  list | get | create | update | delete
settings     view | set | unset
skill        install
logs         tail | forward | query | schema | volume | patterns | native-query
threads      list | get | search | archive | unarchive
messages     send | list | search
runs         get
issues       list | get | search | count | create | resolve | ignore | mute | unmute
status-components list | get | register | deregister

Global: -h/--help, -v/--version, --json, --profile <name>
Most API commands also accept: --token <token>, --api-base-url <url>
\`\`\`

### Quick command routing

| User asks… | Run |
|---|---|
| "who am I" / "am I authenticated" | \`sazabi auth whoami\` |
| "what project" / "switch project" | \`sazabi projects list\` / \`sazabi projects use <id>\` |
| "list threads" / "recent investigations" | \`sazabi threads list\` |
| "search threads for X" | \`sazabi threads search "X"\` |
| "send a message" / "ask Sazabi" | \`sazabi messages send "..."\` (add \`--thread-id\` to continue) |
| "tail logs" | \`sazabi logs tail\` (add \`--severities\`, \`--services\`, \`--search\`) |
| "forward these local logs" | \`my-app 2>&1 \\| sazabi logs forward\` |
| "list/search/count issues" | \`sazabi issues list\` / \`sazabi issues search "X"\` / \`sazabi issues count\` |
| "create an issue" | \`sazabi issues create --what-happened "..." --why-it-happened "..." --how-to-fix "..."\` |
| "resolve/ignore/mute/unmute an issue" | \`sazabi issues resolve <id>\` / \`sazabi issues ignore <id>\` / \`sazabi issues mute <id>\` / \`sazabi issues unmute <id>\` |
| "status components" / "component registry" | \`sazabi status-components list\` / \`sazabi status-components register --name "..."\` |
| "connect Vercel" / "onboard provider" | \`sazabi data-sources types\` → \`sazabi data-sources skill --type <type>\` |
| "list connections" / "list streams" | \`sazabi data-sources connections list\` / \`... streams list --connection-id <id>\` |
| "list/create API keys" | \`sazabi public-keys …\` / \`sazabi secret-keys …\` |

Use \`sazabi <group> <subcommand> -h\` only when you need flag details for a specific command — not to rediscover the command tree.

For local development or environments outside the Sazabi sandbox, substitute \`bunx @sazabi/cli <command>\` and assume the CLI may not be authenticated. See \`references/cli/setup.md\`.

## What You Can Do

**Investigate issues** — Send questions to Sazabi's agent about errors, performance, or incidents in any environment (production, staging, local dev). You have codebase context the agent doesn't; Sazabi has observability context you don't. Bridge the two by asking targeted questions.

**Search prior investigations** — Find and resume past threads. Before starting a new investigation, search for existing ones — someone may have already looked into this.

**Manage issues** — Use \`sazabi issues\` to list, search, count, create, resolve, ignore, mute, and unmute issues. \`ignore\` is terminal (\`status=ignored\`); \`mute\`/\`unmute\` are the reversible suppression actions.

**Manage status components** — Use \`sazabi status-components\` to inspect the project component registry, register evidence-backed services/workflows/dependencies, and deregister components that should no longer appear on the status page. Always list first and use concrete component names backed by repo, telemetry, or deployment evidence.

**Monitor logs in real-time** — Tail logs filtered by severity, service, or search terms (CLI only).

**Instrument local development** — Pipe local dev output into Sazabi's intake via \`logs forward\`, then query those logs through the agent. This closes the loop: \`my-app 2>&1 | sazabi logs forward\` makes local logs queryable through Sazabi (CLI only).

**Cross-reference code and observability** — See a suspicious code path? Ask Sazabi if it's manifesting in any environment. Deployed a change? Ask if errors are appearing.

**Connect providers and manage ingestion** — The CLI can list supported data-source types, create connections, list streams, and return provider-specific setup skills. When a user asks to "connect Vercel" or onboard another provider, start from the CLI's \`data-sources\` surface before searching elsewhere.

## Projects

Everything in Sazabi is scoped to a **project**. A project is a container for logs, traces, threads, and agent conversations. Each secret key is tied to exactly one project.

Users often have multiple projects for different contexts — for example, a "Production" project receiving logs from deployed services and a "Local Dev" project receiving forwarded local output via \`logs forward\`. Investigating production errors and forwarding local logs are different projects with different keys.

When helping a user, be aware of which project they're targeting. If it's ambiguous (e.g., they want to investigate production but the configured credentials are for a local dev project), ask. For the CLI, the active organization and project normally come from saved settings, and authentication can be overridden per command with \`--token\`. For MCP, the configured key in \`.mcp.json\` determines the project.

## MCP vs CLI

MCP tools (\`mcp__sazabi__*\`) handle messaging and thread operations directly. The CLI (\`bunx @sazabi/cli\` or the installed \`sazabi\` command) covers the same ground plus log tailing, log forwarding, auth management, and data-source/provider setup flows.

| Capability | MCP | CLI |
|---|---|---|
| Send messages / ask questions | \`send_message\` | \`messages send\` |
| Search threads | \`search_threads\` | \`threads search\` |
| List threads | \`list_threads\` | \`threads list\` |
| Get thread with messages | \`get_thread\` | \`threads get\` |
| Poll async responses | \`get_response\` | \`runs get\` |
| Issue query/create/update | -- | \`issues ...\` |
| Status component registry | -- | \`status-components ...\` |
| Tail logs (real-time) | -- | \`logs tail\` |
| Forward logs | -- | \`logs forward\` |
| List supported data-source types | -- | \`data-sources types\` |
| Get provider setup instructions | -- | \`data-sources skill --type <type>\` |
| Create/list/get data-source connections | -- | \`data-sources connections ...\` |
| Create/list/get data-source streams | -- | \`data-sources streams ...\` |
| Auth / settings management | -- | \`auth\`, \`settings\` |

## Starting Heuristic

When the user asks for Sazabi help, pick the exact subcommand from the **Runtime Environment** table above and run it directly. Do not run \`sazabi --help\` to rediscover the tree — it's already in your context.

For provider onboarding ("connect vercel", "connect fly.io", "set up a data source"), skip generic web search and use this order:

1. \`sazabi data-sources types --json\` for provider discovery
2. Read \`references/data-sources/<type>.md\` from this skill directory — every supported provider's setup runbook ships locally with \`sazabi skill install\`, so you don't need a network round-trip. Fall back to \`sazabi data-sources skill --type <type> --json\` only if the local reference is missing.
3. \`sazabi data-sources connections ...\` / \`streams ...\` for execution

## The Async Polling Pattern

This is the most important thing to understand. Agent runs take a median of 29 seconds (p90: 113s). The MCP wait limit is 25 seconds, so most responses require polling.

1. Call \`send_message\` with default \`wait: true\`
2. If you get a direct response, great — you're done
3. If you get a \`responseId\` back in MCP, poll with \`get_response\`
4. If you get a \`runId\` back in the CLI/public API, poll with \`runs get\`
5. Wait 5s before first poll, then 10-15s between subsequent polls
6. A "not found" immediately after sending can be a transient race — retry after 2-3s
7. Stop after ~3 minutes (p99 is 189s); inform the user if still pending
8. Save the \`threadId\` — you need it to continue the conversation

## API Documentation

The full API reference is available at https://api.sazabi.com/docs (interactive UI for users) and https://api.sazabi.com/openapi.json (raw OpenAPI spec). The OpenAPI spec is large — don't fetch it directly into your context. Instead, save it to a temp file and use a subagent to query it for the specific endpoint or schema you need.

## References

### MCP
- \`references/mcp/setup.md\` — Config snippets for Claude Code / Claude Desktop, secret key setup

### CLI
- \`references/cli/setup.md\` — Installation, authentication, credential precedence, settings
- \`references/cli/commands.md\` — All CLI commands, log tailing, log forwarding, JSON mode
`;var NS=`---
name: sazabi-docs
description: How to access and explore Sazabi's product documentation. Use this skill whenever the user asks to look up, explore, or reference Sazabi docs, or asks about platform features, capabilities, integrations, configuration options, data sources, alerts, status pages, MCP, CLI, API, or anything else answered by the official Sazabi documentation.
---

# Sazabi Docs

The full Sazabi documentation is baked into the Daytona sandbox image at
\`/docs\` (a symlink to \`/home/sazabi/docs\`). It contains the same MDX source
that powers \`https://docs.sazabi.com\`.

**Always prefer reading from \`/docs\` first** — it is local, instant, requires
no auth, and lets you \`rg\` across the whole corpus. Only fall back to the
hosted site if \`/docs\` is missing (e.g., you are running outside a sandbox).

## Workflow (preferred: local files)

1. **Discover the structure** — the directory layout maps to the docs URL
   tree. Use \`find\` or \`ls\` to scan, and \`meta.json\` files to see the
   intended sidebar order:

   \`\`\`bash
   ls /docs
   cat /docs/meta.json
   \`\`\`

2. **Search across all docs** with \`ripgrep\`:

   \`\`\`bash
   rg -i "your query" /docs --glob '*.mdx'
   \`\`\`

3. **Read specific pages** — every page is an \`.mdx\` file. The directory
   structure mirrors the public URL (e.g., \`/data/sources/index.mdx\`
   corresponds to \`https://docs.sazabi.com/data/sources\`):

   \`\`\`bash
   cat /docs/data/sources/index.mdx
   \`\`\`

## Fallback: hosted site

If \`/docs\` does not exist (running outside a Sazabi sandbox), use the hosted
site with the auth header:

\`x-docs-password: logsareallyouneed\`

**Always request markdown**, not HTML — either append \`.md\` to the path or
send \`Accept: text/markdown\`. The hosted site rewrites both to the raw MDX
route, which is far cheaper and easier to parse than scraping rendered HTML:

\`\`\`bash
curl -s -H "x-docs-password: logsareallyouneed" https://docs.sazabi.com/llms.txt
curl -s -H "x-docs-password: logsareallyouneed" "https://docs.sazabi.com/<path>.md"
curl -s -H "x-docs-password: logsareallyouneed" \\
     -H "Accept: text/markdown" \\
     "https://docs.sazabi.com/<path>"
\`\`\`

## Citing

When answering the user, summarize and cite what you read; do not paste large
raw dumps unless they ask for the full text.

## Freshness

The \`/docs\` snapshot reflects whatever was on disk when the Daytona snapshot
was last published (see \`packages/sandbox/platform/\`). If the user mentions a
very recently shipped feature and you cannot find it locally, fall back to
the hosted site to pick up the latest changes.
`;var CS='---\nname: sazabi-logs-search\ndescription: Search and analyze Sazabi logs with ClickHouse-backed tools. Use for log discovery, recurring errors, log volume, service liveness, attribute keys, raw log lookups, and after ClickHouse scan-limit, TYPE_MISMATCH, or UNKNOWN_TABLE errors.\n---\n\n# Sazabi Logs Search\n\nUse `clickhouse_query` for logs. Do not use `bash` for log queries.\n\n## Tools\n\n- `get_log_schema_context`: call first in a fresh log investigation. It returns available columns, services, attribute keys, and guardrails.\n- `clickhouse_query`: read-only `SELECT`. Org filtering is added automatically; you must add project/time filters where needed and `LIMIT` for row queries.\n- `clickhouse_health_check`: use only after connection/availability errors.\n- `log_detail`, `table`, `timeseries`: render artifacts when useful.\n\n## Pick The Table\n\n- Discovery questions: "do we log X?", "what patterns mention Y?", "common errors", "what is failing now?"\n  Use `log_pattern_state`. It is small and already aggregates normalized message patterns. No time filter is required for broad discovery.\n\n- Volume, liveness, intake health, bytes, per-minute trends, latest ingestion, adapter/public-key breakdown:\n  Use `log_volume_per_minute`. It has a 7-day TTL and aggregate-state columns.\n\n- Attribute-key discovery: "which keys does service X emit?", "does user.id exist?", "which services emit this key?"\n  Use `attributes`.\n\n- Raw rows, point lookups, structured-attribute filters, traces/spans, exact payloads:\n  Use `logs`. Always filter both `otel_timestamp_time` and `otel_timestamp` unless doing a point lookup by `canonical_id`, `otel_trace_id`, or `otel_span_id`.\n\n## Hard Rules\n\n1. Table name is `logs`, never `otel_logs`.\n2. Call `get_log_schema_context` before first query in a fresh investigation.\n3. Always add `LIMIT` to non-aggregation row queries. Hard ceiling is 10000.\n4. Never `SELECT *` from `logs`; avoid `raw`.\n5. On `logs`, use both time predicates:\n   `otel_timestamp_time >= ... AND otel_timestamp >= ...`.\n6. For body text search, use `hasAnyTokens(otel_body, \'lowercase needle\')`, `hasAllTokens`, or `hasPhrase`.\n7. Never use `lower(otel_body) LIKE \'%foo%\'`; it bypasses the text index and commonly hits scan limits.\n8. Low-cardinality fields like `otel_severity_text` can use `lower()`.\n9. Aggregate-state MVs need finalizers: `countMerge`, `sumMerge`, `maxMerge`.\n10. `log_pattern_state` time columns are `SimpleAggregateFunction`; finalize in `HAVING`, not `WHERE`.\n11. Use `parseDateTimeBestEffort(\'...\')` for `DateTime` and `parseDateTime64BestEffort(\'...\', 9)` for `DateTime64`.\n12. No `SETTINGS` clause. No joins except `ARRAY JOIN`. No `IN (SELECT ...)`; run the inner query first and expand explicit values.\n\n## Standard Flow\n\n1. Call `get_log_schema_context`.\n2. Pick the table using the rules above.\n3. Query with `clickhouse_query`.\n4. For an interesting pattern, drill into raw logs using its `representative_id` as `logs.canonical_id`.\n5. Use `timeseries` for bucketed numeric results, `table` for tabular results, and `log_detail` for one raw log entry.\n\n## Common Queries\n\n### Discover Patterns\n\n```sql\nSELECT\n  fingerprint,\n  any(pattern) AS pattern,\n  sum(occurrence_count) AS occurrences,\n  max(last_seen_at) AS last_seen,\n  any(representative_id) AS representative_id\nFROM log_pattern_state\nWHERE pattern ILIKE \'%<topic>%\'\nGROUP BY fingerprint\nORDER BY occurrences DESC\nLIMIT 50\n```\n\n### Top Recent Errors\n\n```sql\nSELECT\n  severity_text,\n  fingerprint,\n  any(pattern) AS pattern,\n  sum(occurrence_count) AS occurrences,\n  max(last_seen_at) AS last_seen,\n  any(representative_id) AS representative_id\nFROM log_pattern_state\nWHERE severity_text IN (\'ERROR\', \'FATAL\')\nGROUP BY severity_text, fingerprint\nHAVING max(last_seen_at) >= now() - INTERVAL 24 HOUR\nORDER BY occurrences DESC\nLIMIT 20\n```\n\nRare recent patterns: add\n`HAVING sum(occurrence_count) <= 3 AND max(last_seen_at) >= now() - INTERVAL 24 HOUR`.\n\n### Drill Into A Pattern\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_service_name,\n  otel_severity_text,\n  otel_body,\n  otel_log_attributes\nFROM logs\nWHERE canonical_id = \'<representative_id>\'\nLIMIT 1\n```\n\n### Volume / Traffic\n\n```sql\nSELECT\n  toStartOfInterval(minute, INTERVAL 1 HOUR) AS bucket,\n  countMerge(log_count) AS log_count,\n  sumMerge(bytes_sum) AS total_bytes\nFROM log_volume_per_minute\nWHERE minute >= now() - INTERVAL 24 HOUR\nGROUP BY bucket\nORDER BY bucket\n```\n\n### Service Liveness\n\n```sql\nSELECT\n  service_name,\n  maxMerge(last_ingested_at) AS last_ingested_at,\n  countMerge(log_count) AS recent_log_count\nFROM log_volume_per_minute\nWHERE minute >= now() - INTERVAL 1 HOUR\n  AND service_name = \'<service>\'\nGROUP BY service_name\n```\n\nGroup by `intake_adapter, public_api_key` for intake breakdowns.\n\n### Attribute Keys For A Service\n\n```sql\nSELECT\n  key,\n  maxMerge(last_seen_timestamp_state) AS last_seen\nFROM attributes\nWHERE service_name = \'<service>\'\nGROUP BY key\nORDER BY last_seen DESC\nLIMIT 100\n```\n\nWhich services emit a key:\n\n```sql\nSELECT\n  service_name,\n  maxMerge(last_seen_timestamp_state) AS last_seen\nFROM attributes\nWHERE key = \'<key>\'\nGROUP BY service_name\nORDER BY last_seen DESC\nLIMIT 100\n```\n\n### Raw Body Search\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_service_name,\n  otel_severity_text,\n  otel_body\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 24 HOUR\n  AND otel_timestamp >= now() - INTERVAL 24 HOUR\n  AND hasAnyTokens(otel_body, \'connection timeout\')\nORDER BY otel_timestamp DESC\nLIMIT 100\n```\n\nUse multiple token calls for AND semantics:\n`hasAnyTokens(otel_body, \'retry\') AND hasAnyTokens(otel_body, \'backoff\')`.\nUse an array for OR semantics:\n`hasAnyTokens(otel_body, [\'429\', \'timeout\', \'5xx\'])`.\nUse `hasPhrase(otel_body, \'cannot parse string\')` for ordered phrases.\n\n### Errors By Service\n\n```sql\nSELECT\n  otel_service_name,\n  count(*) AS count\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 1 HOUR\n  AND otel_timestamp >= now() - INTERVAL 1 HOUR\n  AND lower(otel_severity_text) = \'error\'\nGROUP BY otel_service_name\nORDER BY count DESC\nLIMIT 50\n```\n\n### Structured Attribute Filter\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_body,\n  otel_log_attributes[\'user_id\'] AS user_id\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 1 HOUR\n  AND otel_timestamp >= now() - INTERVAL 1 HOUR\n  AND otel_log_attributes[\'user_id\'] = \'123\'\nORDER BY otel_timestamp DESC\nLIMIT 50\n```\n\nPrefer promoted alias columns when available:\n`error_message`, `error_type`, `error_stack`, `exception_message`,\n`exception_type`, `http_status_code`, `http_route`, `http_method`,\n`url_path`, `span_duration_ms`.\n\nUse map helpers for attributes:\n- `mapContainsKey(otel_log_attributes, \'foo\')`\n- `mapContainsValue(otel_log_attributes, \'AI_RetryError\')`\n- `mapContainsValueLike(otel_log_attributes, \'% AI_RetryError %\')`\n\n### Point Lookups\n\nPoint lookups do not need time filters:\n\n```sql\nSELECT otel_timestamp, otel_service_name, otel_severity_text, otel_body\nFROM logs\nWHERE canonical_id = \'<uuidv7>\'\nLIMIT 1\n```\n\nAlso valid: exact-match `otel_trace_id = \'<32 hex>\'` or\n`otel_span_id = \'<16 hex>\'`.\n\n## Pitfalls\n\n- Scan limit: switch body discovery to `log_pattern_state`, replace `lower(otel_body) LIKE` with token functions, add both time predicates, or narrow the window.\n- `TYPE_MISMATCH`: wrap time strings with the correct `parseDateTime*` function.\n- `UNKNOWN_TABLE otel_logs`: use `logs`.\n- Empty/garbage MV aggregates: add `countMerge`, `sumMerge`, or `maxMerge`.\n- Empty `log_pattern_state WHERE last_seen_at`: move finalized time checks to `HAVING max(last_seen_at) ...`.\n- Missing map column like `otel_log_attributes.user_id`: use bracket access, e.g. `otel_log_attributes[\'user_id\']`.\n- Key not found: use `attributes` to discover exact case-sensitive keys.\n- `hasToken` rejects separators: use `hasAnyTokens`.\n- `LIMIT required`: add a limit, usually 100.\n- Connection error: run `clickhouse_health_check` once, then retry or report the outage.\n\nWhen unsure, call `get_log_schema_context` again. It is cheap and authoritative.\n';var xS=`---
name: sazabi-sandbox-builtins
description: Use Sazabi sandbox bash built-ins, including MCP connector discovery, MCP tool calls, and explicit outbound message delivery from Daytona automation scripts.
---

# Sazabi sandbox built-ins

Use this skill when writing bash that runs inside the Sazabi Daytona sandbox and needs to call organization MCP connectors or explicitly send outbound notifications. This applies to saved automation scripts under \`/home/sazabi/scripts\`, monitor scripts, and one-off sandbox bash commands.

The sandbox loads these functions for interactive shells and non-interactive \`bash script.sh\` runs:

- \`sazabi_mcp_list\`
- \`sazabi_mcp_call <connectionKey> <toolName> [jsonArguments]\`
- \`send_message <content> [threadId]\`

Do not call hidden \`/system/*\` HTTP routes directly from scripts. Use the functions so auth, base URL selection, error handling, and JSON request construction stay consistent.

## Requirements

The built-ins depend on runtime variables that Sazabi injects into managed sandboxes:

- \`SAZABI_API_URL\`
- \`SAZABI_TOKEN\`

They also require \`jq\`, which is installed in the managed sandbox image. If either variable is missing, the function exits non-zero and writes the reason to stderr.

## Discover available MCP tools

\`sazabi_mcp_list\` prints JSON with configured MCP connections and enabled tools.

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

sazabi_mcp_list | jq -r '
  .connections[]
  | .connectionKey as $connection
  | .tools[]
  | "\\($connection)\\t\\(.name)\\t\\(.description // "")"
'
\`\`\`

Use the \`connectionKey\` from the list output when calling a tool. Do not guess keys from provider names.

## Call an MCP tool

Pass arguments as a JSON object string. The result is JSON and includes the connection key, tool name, normalized result, structured content when available, raw MCP content parts, and text content when available.

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

result_json="$(
  sazabi_mcp_call \\
    "linear" \\
    "list_issues" \\
    '{"query":"state:open assignee:me","limit":10}'
)"

jq -r '.result' <<<"$result_json"
\`\`\`

For dynamic arguments, let \`jq\` build the JSON instead of hand-quoting:

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

team_key="ENG"
query_json="$(jq -cn --arg team "$team_key" '{teamKey: $team, limit: 20}')"

sazabi_mcp_call "linear" "list_issues" "$query_json" |
  jq -r '.result'
\`\`\`

## Send an outbound message

Use \`send_message\` only when the user explicitly asks you to send, post, or notify through configured external communication channels. Ordinary investigation results should be returned normally.

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

send_message "Railway status page is still reporting degraded service."
\`\`\`

The function delegates channel selection to the configured \`send_message\` tool. It returns JSON with the underlying tool result. To reply in the same external thread when the selected channel supports it, pass the thread ID returned by the first call:

\`\`\`bash
thread_id="$(
  send_message "Railway status page is degraded." |
    jq -r '.result | capture("Thread ID: (?<threadId>[^ ]+)").threadId | rtrimstr(".")'
)"

send_message "Railway status page recovered." "$thread_id"
\`\`\`

## Handle failures

Built-in functions return non-zero when the request fails, auth is unavailable, arguments are invalid JSON, or the MCP tool reports an error. Capture stderr for evidence in monitors or automations.

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

error_file="$(mktemp)"
if ! result_json="$(sazabi_mcp_call "linear" "list_issues" '{"limit":5}' 2>"$error_file")"; then
  echo "MCP call failed" >&2
  cat "$error_file" >&2
  exit 1
fi

jq -r '.result' <<<"$result_json"
\`\`\`

For monitors, fail loudly with enough context for the automation run log. For polling jobs, write durable cursors only after the MCP call and downstream processing both succeed.

## Script rules

- Write bash, not JavaScript.
- \`sazabi_mcp_call\` forwards the provided argument value with \`jq --argjson\`, so it accepts any valid JSON; object-shape validation happens downstream in the system API or target MCP tool.
- Parse outputs with \`jq\`; do not rely on text formatting.
- Do not use \`send_message\` unless the user explicitly requested external message delivery.
- Do not print \`SAZABI_TOKEN\` or copy it into state files.
- Use \`/home/sazabi/store\` for durable cursors, dedupe keys, and processed IDs.
`;var MZ=L4(D4(N4(import.meta.url)),"../skills"),C4=[...mr].sort().map((e)=>({relPath:`references/data-sources/${e}.md`,contents:ul(e)})),zS=[{name:"sazabi",files:[{relPath:"SKILL.md",contents:LS},{relPath:"references/cli/commands.md",contents:PS},{relPath:"references/cli/setup.md",contents:AS},{relPath:"references/mcp/setup.md",contents:DS},...C4]},{name:"sazabi-docs",files:[{relPath:"SKILL.md",contents:NS}]},{name:"sazabi-logs-search",files:[{relPath:"SKILL.md",contents:CS}]},{name:"sazabi-sandbox-builtins",files:[{relPath:"SKILL.md",contents:xS}]}];var yo=zS;X();import*as we from"node:fs";import*as ye from"node:path";var ES=(e)=>{let t=[],o=ye.resolve(e.targetRoot);for(let n of e.skills){let r=ye.join(o,n.name),i=ye.relative(o,r);if(i.startsWith("..")||ye.isAbsolute(i))return me(`Invalid skill name "${n.name}" escapes target root`);let a=[];for(let c of n.files){let h=ye.resolve(r,c.relPath),u=ye.relative(r,h);if(u.startsWith("..")||ye.isAbsolute(u))return me(`Invalid skill file path "${c.relPath}" in skill "${n.name}" escapes skill root`);a.push({absPath:h,contents:c.contents})}t.push({skillName:n.name,files:a})}return ke(t)},US=(e)=>{let t=[];for(let o of e)for(let n of o.files)if(we.existsSync(n.absPath))t.push(n.absPath);return t},jS=(e)=>{let t=ye.resolve(e);while(!we.existsSync(t)){let o=ye.dirname(t);if(o===t)break;t=o}return t},RS=(e,t)=>{try{let o;if(t.targetRoot){let a=jS(t.targetRoot);o=we.existsSync(a)?we.realpathSync(a):ye.resolve(t.targetRoot)}let n=[];for(let a of e)for(let c of a.files)n.push({absPath:c.absPath,contents:c.contents,existed:we.existsSync(c.absPath)});if(!t.force){let a=n.find((c)=>c.existed);if(a)return me(`Refusing to overwrite ${a.absPath} (use --force to overwrite)`)}let r=[],i=[];for(let a of n){if(o){let h=ye.dirname(a.absPath),u=jS(h);if(we.existsSync(u)){let d=we.realpathSync(u),s=ye.relative(o,d);if(s.startsWith("..")||ye.isAbsolute(s))return me(`Refusing to write ${a.absPath}: symlink escape detected (resolves outside target root)`)}}we.mkdirSync(ye.dirname(a.absPath),{recursive:!0,mode:493});let c=!1;try{if(we.lstatSync(a.absPath).isSymbolicLink())c=!0}catch(h){if(!(h instanceof Error&&("code"in h)&&h.code==="ENOENT"))throw h}if(c)return me(`Refusing to write ${a.absPath}: path is a symbolic link`);if(t.force&&a.existed)try{we.unlinkSync(a.absPath)}catch(h){if(!(h instanceof Error&&("code"in h)&&h.code==="ENOENT"))throw h}try{we.writeFileSync(a.absPath,a.contents,{encoding:"utf-8",mode:420,flag:"wx"})}catch(h){if(h instanceof Error&&"code"in h&&h.code==="EEXIST"){let u=t.force?`Failed to write ${a.absPath}: file was recreated during operation (possible race condition)`:`Refusing to overwrite ${a.absPath} (use --force to overwrite)`;return me(u)}throw h}if(a.existed)i.push(a.absPath);else r.push(a.absPath)}return ke({written:r,overwritten:i})}catch(o){let n=o instanceof Error?o.message:String(o);return me(`Failed to write skill files: ${n}`)}};var ar=(e,t)=>{if(t)return v(e);return p(e)},x4=(e)=>e!==void 0&&vc.includes(e),BS=async(e)=>{let t=Boolean(e.json);if(!e.agent)return void ar(`Agent is required. Usage: sazabi skill install <agent>. Known agents: ${vc.join(", ")}.`,t);if(!x4(e.agent))return void ar(`Unknown agent '${e.agent}'. Known agents: ${vc.join(", ")}.`,t);let o=e.agent;if(e.user&&e.project)return void ar("--user and --project are mutually exclusive.",t);if(e.projectDir!==void 0&&!e.project)return void ar("--project-dir is only valid with --project.",t);let n=e.project?"project":"user",r=e.projectDir!==void 0?KS.resolve(e.projectDir):process.cwd(),i=SS({agent:o,scope:n,home:FS.homedir(),projectDir:r});if(i.kind==="unsupported")return void ar(i.reason,t);if(yo.length===0)return void ar("No skills are available to install.",t);let a=I(ES({targetRoot:i.root,skills:yo}),"Failed to plan skill installation",t);if(!e.force){let h=US(a);if(h.length>0)return void ar(["Refusing to overwrite existing files (use --force to overwrite):",...h.map((u)=>`  ${u}`)].join(`
`),t)}let c=I(RS(a,{force:Boolean(e.force),targetRoot:i.root}),"Failed to install skills",t);if(t){E({agent:o,scope:n,targetRoot:i.root,skills:yo.map((h)=>({name:h.name,files:h.files.map((u)=>u.relPath)})),written:c.written,overwritten:c.overwritten});return}le("Installed skills"),ie({Agent:o,Scope:n,Destination:i.root});for(let h of c.written)V(`wrote  ${h}`);for(let h of c.overwritten)Ge(`replaced ${h}`);V(`Installed ${yo.length} skill${yo.length===1?"":"s"} to ${i.root}`)};var GS=W("skill","Manage Sazabi agent skills").withSubcommands({install:S("install","Install Sazabi skills into your AI agent's skills directory",async(e)=>{let{values:t,positionals:o}=O(e,{user:{type:"boolean"},project:{type:"boolean"},"project-dir":{type:"string"},force:{type:"boolean"},json:{type:"boolean"}},{allowPositionals:!0});await BS({agent:o[0],user:t.user,project:t.project,projectDir:t["project-dir"],force:t.force,json:t.json})}).withPositionalArgs("<agent>").withOptions({user:{type:"boolean",description:"Install into the user-scoped skills directory (default)"},project:{type:"boolean",description:"Install into the project-scoped skills directory"},"project-dir":{type:"string",description:"Project directory for --project (default: current working directory)"},force:{type:"boolean",description:"Overwrite existing skill files"},json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi skill install claude-code  # Install for Claude Code in $HOME (default --user)","sazabi skill install codex --project  # Install into current repo","sazabi skill install codex --project --project-dir ../other  # Install into another repo","sazabi skill install claude-code --force  # Overwrite existing files"]).build()}).withExamples(["sazabi skill install claude-code  # Install Sazabi skills for Claude Code in $HOME","sazabi skill install codex --project  # Install Sazabi skills into the current repo"]).build();J();oe();X();var z4={name:{label:"Name",type:{kind:"string"}},currentStatus:{label:"Status",type:{kind:"string"}},firstSeenAt:{label:"Created At",type:{kind:"date"}}},j4={schema:z4,columns:["name","currentStatus","firstSeenAt"],emptyMessage:"All clear — no status components found."},E4=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.statusComponents.list(),"Failed to fetch status",e.json);if(e.json){E(n);return}le("Status Page"),q(j4,n.statusComponents)},HS=W("status","Show a summary of the status page").withHandler(async(e)=>{let{values:t}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}});await E4({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi status         # Show status page summary","sazabi status --json  # Output as JSON"]).build();J();oe();X();var MS={id:{label:"ID",type:{kind:"string"}},projectId:{label:"Project",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},currentStatus:{label:"Status",type:{kind:"string"}},description:{label:"Description",type:{kind:"nullable-string"}},firstSeenAt:{label:"Created At",type:{kind:"date"}},lastSeenAt:{label:"Last Seen",type:{kind:"date"}},deletedAt:{label:"Deleted At",type:{kind:"nullable-date"}}},U4={schema:MS,columns:["id","name","currentStatus","firstSeenAt","deletedAt"],jsonFields:["id","projectId","name","currentStatus","description","firstSeenAt","lastSeenAt","deletedAt"],emptyMessage:"No status components found."},hy={layout:"field-list",schema:MS,fields:["id","projectId","name","currentStatus","description","firstSeenAt","lastSeenAt","deletedAt"],title:"Status Component"},R4=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.statusComponents.list({limit:e.limit,cursor:e.cursor,includeDeleted:e.includeDeleted}),"Failed to list status components",e.json);q(U4,n.statusComponents,{json:e.json,nextCursor:n.nextCursor})},F4=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=I(await n.statusComponents.get(e),"Failed to get status component",t.json);U(hy,r.statusComponent,{json:t.json})},K4=async(e)=>{let t=e.name?.trim(),o=e.description?.trim();if(!t){if(e.json)return v("Name is required.");return p("Name is required.")}if(e.description!==void 0&&!o){if(e.json)return v("Description cannot be empty.");return p("Description cannot be empty.")}let n=L({tokenFlag:e.token,jsonMode:e.json}),r=N({token:n.token,organizationId:n.organizationId,projectId:n.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),i=I(await r.statusComponents.register({name:t,...o?{description:o}:{}}),"Failed to register status component",e.json);U(hy,i.statusComponent,{json:e.json})},B4=async(e,t)=>{let o=t.reason?.trim();if(t.reason!==void 0&&!o){if(t.json)return v("Reason cannot be empty.");return p("Reason cannot be empty.")}let n=L({tokenFlag:t.token,jsonMode:t.json}),r=N({token:n.token,organizationId:n.organizationId,projectId:n.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await r.statusComponents.deregister(e,o),"Failed to deregister status component",t.json);U(hy,i.statusComponent,{json:t.json})},JS=W("status-components","Manage status page components").withSubcommands({list:S("list","List status components in the active project",async(e)=>{let{values:t}=O(e,{...G,limit:{type:"string"},cursor:{type:"string"},"include-deleted":{type:"boolean"}});await R4({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],limit:t.limit?Number(t.limit):void 0,cursor:t.cursor,includeDeleted:t["include-deleted"]})}).withOptions({...H,limit:{type:"string",description:"Maximum number of components to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},"include-deleted":{type:"boolean",description:"Include deregistered status components"}}).withExamples(["sazabi status-components list  # List all status components","sazabi status-components list --include-deleted  # Include deregistered components"]).build(),get:S("get","Get one status component by ID",async(e)=>{let{values:t,positionals:o}=O(e,G,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Component ID is required.");return p("Component ID is required.")}await F4(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<component-id>").withOptions(H).withExamples(["sazabi status-components get <component-id>  # Get one status component"]).build(),register:S("register","Register or refresh a status component",async(e)=>{let{values:t}=O(e,{...G,name:{type:"string"},description:{type:"string"}});await K4({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],name:t.name,description:t.description})}).withOptions({...H,name:{type:"string",description:"Component name to register"},description:{type:"string",description:"Optional component description"}}).withExamples(['sazabi status-components register --name "API Gateway"  # Register a component','sazabi status-components register --name "Checkout" --description "Checkout API and workflow"  # Register with description']).build(),deregister:S("deregister","Deregister a status component",async(e)=>{let{values:t,positionals:o}=O(e,{...G,reason:{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Component ID is required.");return p("Component ID is required.")}await B4(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],reason:t.reason})}).withPositionalArgs("<component-id>").withOptions({...H,reason:{type:"string",description:"Optional deregistration reason"}}).withExamples(["sazabi status-components deregister <component-id>  # Deregister a component",'sazabi status-components deregister <component-id> --reason "service retired"  # Deregister with reason']).build()}).withExamples(["sazabi status-components list                        # List all status components","sazabi status-components get <component-id>          # Get one status component",'sazabi status-components register --name "API Gateway"  # Register a component',"sazabi status-components deregister <component-id>  # Deregister a component"]).build();J();oe();X();var WS={id:{label:"ID",type:{kind:"id"}},label:{label:"Task",type:{kind:"string"}},description:{label:"Description",type:{kind:"string"}},instructions:{label:"Instructions",type:{kind:"string"}},completed:{label:"Status",type:{kind:"custom",render:(e)=>e?ce.success("✓  done"):ce.muted("○  pending"),serialize:(e)=>e}},completedAt:{label:"Completed at",type:{kind:"nullable-date",emptyLabel:"—"}},category:{label:"Category",type:{kind:"string"}}},G4={schema:WS,columns:["completed","label","id","category"],header:"Onboarding and setup tasks",emptyMessage:"No tasks found."},H4={layout:"field-list",schema:WS,fields:["id","label","completed","completedAt","category","description","instructions"],title:"Task"},M4=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.projectId,organizationIdFlag:e.organizationId,jsonMode:e.json}),o=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await o.tasks.list(),"Failed to list tasks",e.json);q(G4,n.tasks,{json:e.json})},J4=async(e,t)=>{let o=L({tokenFlag:t.token,projectIdFlag:t.projectId,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await n.tasks.list(),"Failed to list tasks",t.json).tasks.find((a)=>a.id===e);if(!i){if(t.json)return v(`Task not found: ${e}`);return p(`Task not found: ${e}`)}U(H4,i,{json:t.json})},qS={...G,"project-id":{type:"string"},"organization-id":{type:"string"}},VS={...H,"project-id":{type:"string",description:"Override active project ID"},"organization-id":{type:"string",description:"Override active organization ID"}},YS=W("tasks","View onboarding and setup tasks").withSubcommands({list:S("list","List all onboarding and setup tasks for the active project",async(e)=>{let{values:t}=O(e,qS);await M4({token:t.token,projectId:t["project-id"],organizationId:t["organization-id"],apiBaseUrl:t["api-base-url"],json:t.json})}).withOptions(VS).withExamples(["sazabi tasks list           # List all tasks for the active project","sazabi tasks list --json    # Output tasks as JSON"]).build(),get:S("get","Get one task by ID",async(e)=>{let{values:t,positionals:o}=O(e,qS,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Task ID is required.");return p("Task ID is required.")}await J4(n,{token:t.token,projectId:t["project-id"],organizationId:t["organization-id"],apiBaseUrl:t["api-base-url"],json:t.json})}).withPositionalArgs("<task-id>").withOptions(VS).withExamples(["sazabi tasks get install_github_app   # Show task details and instructions","sazabi tasks get send_message --json  # Output as JSON"]).build()}).withExamples(["sazabi tasks list                           # List all tasks","sazabi tasks list --json                    # List tasks as JSON","sazabi tasks get install_github_app         # Get one task by ID","sazabi tasks get send_message --json        # Get one task as JSON"]).build();J();J();oe();X();var q4={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},V4={layout:"field-list",schema:q4,fields:["id","url","title","status","createdAt","updatedAt"]},XS=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:r}=I(await n.threads.update(e,"archived"),"Failed to archive thread",t.json),i={...r,url:Tt(r.projectId,r.id)};U(V4,i,{json:t.json})};J();oe();X();var W4={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},Y4={role:{label:"Role",type:{kind:"role"}},createdAt:{label:"When",type:{kind:"date"}},text:{label:"Message",type:{kind:"truncated",maxLength:80}}},X4=(e)=>{for(let t of e.content){if(t.type==="message"&&t.message)return t.message;if(t.type==="tool_call")return`[tool: ${t.name}]`;if(t.type==="artifact")return`[artifact: ${t.name}]`;if(t.type==="summary")return"[summary]";if(t.type==="reasoning")return"[reasoning]";if(t.type==="fork")return"[fork]";if(t.type==="slack_context")return"[slack context]"}return"(empty)"},ZS=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:r,messages:i}=I(await n.threads.get(e),"Failed to get thread",t.json);if(t.json){E({thread:r,messages:i});return}let a={...r,url:Tt(r.projectId,r.id)},c=i.map((h)=>({role:h.role,createdAt:h.createdAt,text:X4(h)}));U({layout:"field-list",schema:W4,fields:["id","url","title","status","createdAt","updatedAt"],title:"Thread"},a),K(),q({schema:Y4,columns:["role","createdAt","text"],header:"Messages",emptyMessage:"No messages."},c)};J();oe();X();var Z4={id:{label:"ID",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},updatedAt:{label:"Updated",type:{kind:"date"}}},Q4={schema:Z4,columns:["id","title","status","updatedAt"],header:"Threads",emptyMessage:"No threads found."},QS=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),n=await N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl}).threads.list({limit:e.limit,cursor:e.cursor,status:e.status}),{threads:r,nextCursor:i}=I(n,"Failed to list threads",e.json);q(Q4,r,{json:e.json,nextCursor:i})};J();oe();X();var e1={id:{label:"ID",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},score:{label:"Score",align:"right",type:{kind:"custom",render:(e)=>e!=null?e.toFixed(2):"-"}}},t1={schema:e1,columns:["id","title","status","score"],header:{title:"Search Results",variant:"search"},emptyMessage:"No matching threads found."},eP=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{threads:r,pagination:i}=I(await n.search.threads({query:e,limit:t.limit,page:t.page,status:t.status}),"Failed to search threads",t.json);if(t.json){E({threads:r,pagination:i});return}q(t1,r,{count:i.totalResults}),mt({type:"page",page:i.page,totalPages:i.totalPages})};J();oe();X();var r1={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},o1={layout:"field-list",schema:r1,fields:["id","url","title","status","createdAt","updatedAt"]},tP=async(e,t)=>{let o=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:r}=I(await n.threads.update(e,"regular"),"Failed to unarchive thread",t.json),i={...r,url:Tt(r.projectId,r.id)};U(o1,i,{json:t.json})};var rP=W("threads","Manage agent threads").withSubcommands({list:S("list","List threads from current project",async(e)=>{let{values:t}=O(e,{token:{type:"string"},limit:{type:"string"},cursor:{type:"string"},status:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}}),o={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)o.limit=Se(t.limit,1,100,"Limit",t.json);if(t.cursor)o.cursor=t.cursor;if(t.status)o.status=dt(t.status,["regular","archived"],"Status",t.json);await QS(o)}).withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of threads to return (default: 20, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},status:{type:"string",description:"Filter by status: regular or archived"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads list  # List all threads","sazabi threads list --limit 50  # List with custom limit","sazabi threads list --status archived  # List archived threads","sazabi threads list --cursor xyz  # List next page"]).build(),get:S("get","Get thread with messages",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads get <thread-id>");return p("Thread ID is required. Usage: sazabi threads get <thread-id>")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await ZS(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads get <thread-id>  # Get thread with messages","sazabi threads get <thread-id> --json  # Output as JSON"]).build(),search:S("search","Search threads in current project",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},limit:{type:"string"},page:{type:"string"},status:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o.join(" ");if(!n){if(t.json)return v("Search query is required. Usage: sazabi threads search <query>");return p("Search query is required. Usage: sazabi threads search <query>")}let r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.page)r.page=Se(t.page,1,Number.MAX_SAFE_INTEGER,"Page",t.json);if(t.status)r.status=dt(t.status,["regular","archived"],"Status",t.json);await eP(n,r)}).withPositionalArgs("<query>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of results (default: 20, max: 100)"},page:{type:"string",description:"Page number for pagination (default: 1)"},status:{type:"string",description:"Filter by status: regular or archived"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi threads search "error handling"  # Search threads','sazabi threads search "bug" --limit 50  # Search with limit','sazabi threads search "authentication" --status regular  # Search only regular threads']).build(),archive:S("archive","Archive a thread",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads archive <thread-id>");return p("Thread ID is required. Usage: sazabi threads archive <thread-id>")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await XS(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads archive <thread-id>  # Archive a thread","sazabi threads archive <thread-id> --json  # Output as JSON"]).build(),unarchive:S("unarchive","Unarchive a thread",async(e)=>{let{values:t,positionals:o}=O(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads unarchive <thread-id>");return p("Thread ID is required. Usage: sazabi threads unarchive <thread-id>")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await tP(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads unarchive <thread-id>  # Unarchive a thread","sazabi threads unarchive <thread-id> --json  # Output as JSON"]).build()}).withExamples(["sazabi threads list  # List all threads","sazabi threads get <thread-id>  # Get thread with messages",'sazabi threads search "error"  # Search threads',"sazabi threads archive <thread-id>  # Archive a thread","sazabi threads unarchive <thread-id>  # Unarchive a thread"]).build();var oP=[FO,GO,JO,kS,yS,wS,$S,tS,rS,OS,GS,bS,rP,fS,_S,XO,JS,HS,YS];uy();J();var{renderSubcommandHelp:sy,renderSubcommandGroupHelp:aP,renderCommandHelp:dy,renderMainHelp:n1}=Oc("sazabi");var gy=(e)=>n1(e,{title:"Sazabi CLI",description:"Command-line interface for the Sazabi public API",examples:["sazabi auth login                         # Authenticate via browser",'sazabi messages send "Hello"              # Start a new thread','sazabi messages send "Hi" -t <id>         # Send a message to a thread',"sazabi logs tail --severities ERROR,WARN  # Tail logs filtered by severity","sazabi threads list                       # List all threads"]});We();import*as kc from"node:fs";import*as Pn from"node:path";import{fileURLToPath as i1}from"node:url";var cP=()=>{try{let e=Pn.dirname(i1(import.meta.url));for(let t=0;t<5;t++){let o=Pn.join(e,"package.json");if(kc.existsSync(o)){let n=kc.readFileSync(o,"utf-8");return JSON.parse(n).version??"0.0.0"}e=Pn.dirname(e)}return"0.0.0"}catch{return"0.0.0"}};var p1=cP();for(let e of oP)nP(e);var v1=async()=>{let e=process.argv.slice(2);if(e[0]==="--get-completions"&&e[1]==="--"){let{getCompletions:s,parseCompletionContext:b}=await Promise.resolve().then(() => (gP(),dP)),m=b(e.slice(2)),k=await s(m);for(let A of k)if(A.description)console.log(`${A.value}	${A.description}`);else console.log(A.value);return}let t=[],o;for(let s=0;s<e.length;s++){let b=e[s];if(b==="--profile"){let m=e[s+1],k=e.includes("--json");if(m===void 0||m.startsWith("-")){let A=m===void 0?"--profile requires a value.":`--profile requires a value, but got '${m}'. Use '--profile <name>'.`;if(k)v(A);p(A)}o=m,s++}else if(b.startsWith("--profile=")){let m=b.slice(10),k=e.includes("--json");if(!m){if(k)v("--profile requires a value.");p("--profile requires a value.")}o=m}else t.push(b)}AO(o);let n=t[0]==="--json",r=n?t.slice(1):t,i=n||r.includes("--json");if(r.includes("--version")||r.includes("-v")){console.log(`sazabi ${p1}`);return}if(r.length===0){console.log(gy(Sn()));return}if(r[0]?.startsWith("--")||r[0]==="-h"){if(r[0]==="--help"||r[0]==="-h"){console.log(gy(Sn()));return}}let a=r[0];if(a&&!iP(a)){let b=a.startsWith("-")?`Unknown option: ${a}. Run 'sazabi -h' for usage.`:`Unknown command: ${a}. Run 'sazabi -h' for usage.`;if(i)v(b);throw p(b),Error("Unreachable")}if(!a)throw Error("Unexpected: commandName is undefined");let c=Ic(a);if(!c)throw p(`Unknown command: ${a}. Run 'sazabi -h' for usage.`),Error("Unreachable");let h=r[1]??"",u=r.slice(2);if(h==="--help"||h==="-h"){console.log(dy(c));return}if(!h&&c.subcommands&&!c.handler){console.log(dy(c));return}let d=c.subcommands?.[h];if(!d){if(c.handler){let s=h?[h,...u]:u;await c.handler(s)}else{let b=h.startsWith("-")?`Subcommand required. Run 'sazabi ${a} -h' for usage.`:`Unknown subcommand: ${h}. Run 'sazabi ${a} -h' for usage.`;if(i)v(b);throw p(b),Error("Unreachable")}return}if(d.subcommands){let s=u[0]??"",b=u.slice(1);if(s==="--help"||s==="-h"||!s&&!d.handler){console.log(aP(a,d));return}let m=d.subcommands[s];if(m){if(b.includes("--help")||b.includes("-h")){console.log(sy(`${a} ${h}`,m));return}if(m.handler)await m.handler(b);return}if(d.handler){await d.handler(u);return}let A=s.startsWith("-")?`Subcommand required. Run 'sazabi ${a} ${h} -h' for usage.`:`Unknown subcommand: ${s}. Run 'sazabi ${a} ${h} -h' for usage.`;if(i)v(A);throw p(A),Error("Unreachable")}if(u.includes("--help")||u.includes("-h")){console.log(sy(a,d));return}if(d.handler)await d.handler(u)};v1().catch((e)=>{let t=process.argv.includes("--json"),o=`Unexpected error: ${String(e)}`;if(t)v(o);p(o)});
