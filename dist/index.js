#!/usr/bin/env node
var dT=Object.create;var{getPrototypeOf:bT,defineProperty:ic,getOwnPropertyNames:yT}=Object;var mT=Object.prototype.hasOwnProperty;function pT(e){return this[e]}var vT,IT,go=(e,t,o)=>{var n=e!=null&&typeof e==="object";if(n){var r=t?vT??=new WeakMap:IT??=new WeakMap,i=r.get(e);if(i)return i}o=e!=null?dT(bT(e)):{};let a=t||!e||!e.__esModule?ic(o,"default",{value:e,enumerable:!0}):o;for(let c of yT(e))if(!mT.call(a,c))ic(a,c,{get:pT.bind(e,c),enumerable:!0});if(n)r.set(e,a);return a};var fT=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var kT=(e)=>e;function $T(e,t){this[e]=kT.bind(null,t)}var Qe=(e,t)=>{for(var o in t)ic(e,o,{get:t[o],enumerable:!0,configurable:!0,set:$T.bind(t,o)})};var d=(e,t)=>()=>(e&&(t=e(e=0)),t);var ir=fT((l4,ac)=>{var _n=process||{},Qy=_n.argv||[],wn=_n.env||{},wT=!(!!wn.NO_COLOR||Qy.includes("--no-color"))&&(!!wn.FORCE_COLOR||Qy.includes("--color")||_n.platform==="win32"||(_n.stdout||{}).isTTY&&wn.TERM!=="dumb"||!!wn.CI),_T=(e,t,o=e)=>(n)=>{let r=""+n,i=r.indexOf(t,e.length);return~i?e+OT(r,t,o,i)+t:e+r+t},OT=(e,t,o,n)=>{let r="",i=0;do r+=e.substring(i,n)+o,i=n+t.length,n=e.indexOf(t,i);while(~n);return r+e.substring(i)},em=(e=wT)=>{let t=e?_T:()=>String;return{isColorSupported:e,reset:t("\x1B[0m","\x1B[0m"),bold:t("\x1B[1m","\x1B[22m","\x1B[22m\x1B[1m"),dim:t("\x1B[2m","\x1B[22m","\x1B[22m\x1B[2m"),italic:t("\x1B[3m","\x1B[23m"),underline:t("\x1B[4m","\x1B[24m"),inverse:t("\x1B[7m","\x1B[27m"),hidden:t("\x1B[8m","\x1B[28m"),strikethrough:t("\x1B[9m","\x1B[29m"),black:t("\x1B[30m","\x1B[39m"),red:t("\x1B[31m","\x1B[39m"),green:t("\x1B[32m","\x1B[39m"),yellow:t("\x1B[33m","\x1B[39m"),blue:t("\x1B[34m","\x1B[39m"),magenta:t("\x1B[35m","\x1B[39m"),cyan:t("\x1B[36m","\x1B[39m"),white:t("\x1B[37m","\x1B[39m"),gray:t("\x1B[90m","\x1B[39m"),bgBlack:t("\x1B[40m","\x1B[49m"),bgRed:t("\x1B[41m","\x1B[49m"),bgGreen:t("\x1B[42m","\x1B[49m"),bgYellow:t("\x1B[43m","\x1B[49m"),bgBlue:t("\x1B[44m","\x1B[49m"),bgMagenta:t("\x1B[45m","\x1B[49m"),bgCyan:t("\x1B[46m","\x1B[49m"),bgWhite:t("\x1B[47m","\x1B[49m"),blackBright:t("\x1B[90m","\x1B[39m"),redBright:t("\x1B[91m","\x1B[39m"),greenBright:t("\x1B[92m","\x1B[39m"),yellowBright:t("\x1B[93m","\x1B[39m"),blueBright:t("\x1B[94m","\x1B[39m"),magentaBright:t("\x1B[95m","\x1B[39m"),cyanBright:t("\x1B[96m","\x1B[39m"),whiteBright:t("\x1B[97m","\x1B[39m"),bgBlackBright:t("\x1B[100m","\x1B[49m"),bgRedBright:t("\x1B[101m","\x1B[49m"),bgGreenBright:t("\x1B[102m","\x1B[49m"),bgYellowBright:t("\x1B[103m","\x1B[49m"),bgBlueBright:t("\x1B[104m","\x1B[49m"),bgMagentaBright:t("\x1B[105m","\x1B[49m"),bgCyanBright:t("\x1B[106m","\x1B[49m"),bgWhiteBright:t("\x1B[107m","\x1B[49m")}};ac.exports=em();ac.exports.createColors=em});var tm=()=>{};var rm,we=(e)=>{return rm.default.bold(e)};var cc=d(()=>{rm=go(ir(),1)});var lc=(e,t=!1)=>{let o=Object.entries(e);if(o.length===0&&!t)return"";let n=t?[["help",{type:"boolean",short:"h",description:"Show help for this command"}],...o]:o,r=Math.max(...n.map(([a,c])=>{return`${c.short?`-${c.short}, `:""}--${a}`.length})),i=n.map(([a,c])=>{let h=`${c.short?`-${c.short}, `:""}--${a}`,s=c.description.includes("(required)"),g=c.required&&!s?" (required)":"";return`  ${h.padEnd(r)}    ${c.description}${g}`});return`

${we("OPTIONS")}
${i.join(`
`)}`},On=(e)=>{if(e.length===0)return"";let t=e.map((r)=>{let i=r.indexOf("#");if(i===-1)return{command:r,comment:null};return{command:r.substring(0,i).trimEnd(),comment:r.substring(i).trim()}}),o=Math.max(...t.map((r)=>r.command.length)),n=t.map(({command:r,comment:i})=>{if(!i)return`  ${r}`;let a=" ".repeat(o-r.length+2);return`  ${r}${a}${i}`});return`

${we("EXAMPLES")}
${n.join(`
`)}`},om=(e,t=2)=>{let o=Object.entries(e);if(o.length===0)return"";let n=Math.max(...o.map(([g])=>g.length)),r=o.flatMap(([,g])=>g.subcommands?Object.keys(g.subcommands):[]),i=r.length>0?Math.max(...r.map((g)=>g.length)):0,a=Math.max(t+n+2,t+2+i+2),c=" ".repeat(t),u=a-t-2,h=a-t-2-2,s="";for(let[g,b]of o)if(s+=`
${c}${g.padEnd(u)}  ${b.description}`,b.subcommands&&Object.keys(b.subcommands).length>0)for(let[y,_]of Object.entries(b.subcommands))s+=`
${c}  ${y.padEnd(h)}  ${_.description}`;return s},uc=(e)=>{return{renderSubcommandHelp:(i,a)=>{let c=a.positionalArgs?` ${a.positionalArgs}`:"",u=`${e} ${i} ${a.name}${c}`,h=`
${we(`${e} ${i} ${a.name}`)} - ${a.description}
`;if(h+=`
${we("USAGE")}
  ${u}`,h+=lc(a.options??{},!0),a.examples)h+=On(a.examples);return h+=`
`,h},renderSubcommandGroupHelp:(i,a)=>{let c=`
${we(`${e} ${i} ${a.name}`)} - ${a.description}
`;if(c+=`
${we("USAGE")}`,a.subcommands&&!a.handler)c+=`
  ${e} ${i} ${a.name} <subcommand> [options]`;else if(a.subcommands&&a.handler){let u=a.positionalArgs?` ${a.positionalArgs}`:"";c+=`
  ${e} ${i} ${a.name}${u}`,c+=`
  ${e} ${i} ${a.name} <subcommand> [options]`}if(a.subcommands&&Object.keys(a.subcommands).length>0)c+=`

${we("SUBCOMMANDS")}`,c+=om(a.subcommands);if(c+=lc(a.options??{},!0),a.examples)c+=On(a.examples);return c+=`
`,c},renderCommandHelp:(i)=>{let a=i.description.trim(),c=`
${we(`${e} ${i.name}`)}${a?` - ${a}`:""}
`;if(c+=`
${we("USAGE")}`,i.subcommands&&!i.handler)c+=`
  ${e} ${i.name} <subcommand> [options]`;else if(i.subcommands&&i.handler){let u=i.positionalArgs?` ${i.positionalArgs}`:"";c+=`
  ${e} ${i.name}${u}`,c+=`
  ${e} ${i.name} <subcommand> [options]`}else{let u=i.positionalArgs?` ${i.positionalArgs}`:"";c+=`
  ${e} ${i.name}${u}`}if(i.subcommands&&Object.keys(i.subcommands).length>0)c+=`

${we("SUBCOMMANDS")}`,c+=om(i.subcommands);if(c+=lc(i.options??{},!0),i.examples)c+=On(i.examples);return c+=`
`,c},renderMainHelp:(i,a)=>{let c=`
${we(a.title)} - ${a.description}
`;c+=`
${we("USAGE")}`,c+=`
  ${e} <command> [subcommand] [options]`,c+=`

${we("COMMANDS")}`;let u=Math.max(...i.map((F)=>F.name.length)),h=i.flatMap((F)=>F.subcommands?Object.keys(F.subcommands):[]),s=h.length>0?Math.max(...h.map((F)=>F.length)):0,g=i.flatMap((F)=>F.subcommands?Object.values(F.subcommands).flatMap((le)=>le.subcommands?Object.keys(le.subcommands):[]):[]),b=g.length>0?Math.max(...g.map((F)=>F.length)):0,y=Math.max(2+u+2,4+s+2,6+b+2),_=y-2-2,S=y-4-2,H=y-6-2;for(let F of i)if(c+=`
  ${F.name.padEnd(_)}  ${F.description.trim()}`,F.subcommands){for(let[le,oe]of Object.entries(F.subcommands))if(c+=`
    ${le.padEnd(S)}  ${oe.description}`,oe.subcommands)for(let[pe,Te]of Object.entries(oe.subcommands))c+=`
      ${pe.padEnd(H)}  ${Te.description}`}return c+=`

${we("OPTIONS")}`,c+=`
  -h, --help        Show help for a command`,c+=`
  -v, --version     Show version number`,c+=`
  --json            Output errors as JSON`,c+=`
  --profile <name>  Use a named profile`,c+=On(a.examples),c+=`
`,c}}};var nm=d(()=>{cc()});var ge,ae,bt=(e,t)=>{let o=t??e,n=e.trim().toUpperCase(),i={ERROR:ge.default.red,FATAL:ge.default.red,WARN:ge.default.yellow,WARNING:ge.default.yellow,INFO:ge.default.blue,DEBUG:ge.default.gray,TRACE:ge.default.gray}[n];return i?i(o):o},hc=(e,t)=>{let o=t??e;if(e==="user")return ge.default.blue(o);if(e==="assistant")return ge.default.green(o);return ge.default.gray(o)};var gc=d(()=>{ge=go(ir(),1),ae={success:(e)=>ge.default.green(e),error:(e)=>ge.default.red(e),warning:(e)=>ge.default.yellow(e),info:(e)=>ge.default.blue(e),muted:(e)=>ge.default.dim(e),bold:(e)=>ge.default.bold(e),cyan:(e)=>ge.default.cyan(e),gray:(e)=>ge.default.gray(e)}});var St,Rt=(e)=>{console.log(St.default.yellow(e))},j=(e)=>{console.log(JSON.stringify(e,null,2))},v=(e,t=1)=>{console.error(JSON.stringify(typeof e==="string"?{success:!1,error:e}:e,null,2)),process.exit(t)},ce=(e)=>{console.log(St.default.bold(e))},Y=(e)=>{console.log(St.default.dim(e))},M=(e)=>{console.log(St.default.green(e))},Tt=(e)=>{console.log(St.default.red(e))},Fe=(e)=>{console.log(St.default.yellow(e))},_e=(e)=>St.default.dim(e);var so=d(()=>{St=go(ir(),1)});var ar,yt=(e)=>{if(e.type==="cursor")if(e.nextCursor)console.log(ar.default.dim(`Next: --cursor ${e.nextCursor}`));else console.log(ar.default.dim("End of results"));else console.log(ar.default.dim(`Page ${e.page} of ${e.totalPages}`))},sc=(e,t)=>{console.log(ar.default.bold(`${e} (${t} total)`))},dc=(e,t)=>{console.log(ar.default.bold(`${e} (${t} results)`))};var Sn=d(()=>{ar=go(ir(),1)});var R=()=>{console.log("")},et=(e,t=2)=>{console.log(`${" ".repeat(t)}${e}`)},ne=(e,t=0)=>{for(let[o,n]of Object.entries(e))console.log(`${" ".repeat(t)}${o}: ${n}`)},bo=(e="─",t=80)=>{console.log(e.repeat(t))},tt=(e,t,o)=>{if(e.length===0)return;if(o?.header){let u=typeof o.header==="string"?{title:o.header}:o.header,h=u.variant??"section",s=u.count??e.length;if(h==="results")sc(u.title,s);else if(h==="search")dc(u.title,s);else ce(u.title)}let n=/\u001B\[[0-?]*[ -/]*[@-~]/g,r=(u)=>(u??"").replace(n,"").length,i=(u,h,s)=>{let g=r(u),b=Math.max(0,h-g);return s==="right"?`${" ".repeat(b)}${u}`:`${u}${" ".repeat(b)}`},a=t.map((u)=>{if(u.width)return u.width;let h=r(u.header),s=Math.max(...e.map((g)=>r(g[u.key]||"")));return Math.max(h,s)}),c=[t.map((u,h)=>{let s=a[h]||0;return i(u.header,s,"left")}),...e.map((u)=>t.map((h,s)=>{let g=u[h.key]||"",b=a[s]||0,y=h.align||"left";return i(g,b,y)}))];for(let u of c)et(u.join("  "));R()};var bc=d(()=>{so();Sn()});var qe=(e,t=60)=>{if(e.length<=t)return e;return`${e.substring(0,t-3)}...`},Tn=(e)=>{return new Date(e).toLocaleString()};var yc=()=>{};var yo,mc="✓",pc="✗",im="⚠",am="ℹ",ST,TT,PT,AT;var vc=d(()=>{yo=go(ir(),1),ST=yo.default.green(mc),TT=yo.default.red(pc),PT=yo.default.yellow(im),AT=yo.default.cyan(am)});var Ic=()=>{};var cm=d(()=>{yc();vc();Ic()});var mo=(e,t)=>{let o=t==null?"":String(t);switch(e.kind){case"string":case"number":return o;case"boolean":return t?"yes":"no";case"date":return o?Tn(o):_e("(none)");case"nullable-date":return o?Tn(o):_e(e.emptyLabel??"(never)");case"nullable-string":return o?o:_e(e.emptyLabel??"(none)");case"truncated":return o?qe(o,e.maxLength):"";case"id":return o;case"severity":return o?bt(o):o;case"role":return o?hc(o):o;case"custom":return e.render(t)}},fc=(e,t)=>{if(e.kind==="custom")return e.serialize?e.serialize(t):t??null;return t??null},Ft=(e,t,o)=>{return e.get?e.get(o):o[t]};var kc=d(()=>{gc();so()});var lm=d(()=>{yc();Ic()});var um=(e,t,o)=>{let n={};for(let r of t){let i=e[r];if(!i)continue;let a=Ft(i,r,o);n[r]=fc(i.type,a)}return n},jT=(e)=>{if(e.layout==="field-list")return e.fields;let t=[...e.primary.fields];for(let o of e.secondary??[])if(!t.includes(o.field))t.push(o.field);return t},J=(e,t,o)=>{if(o?.json){let c={items:t.map((u)=>um(e.schema,e.columns,u))};if(o.nextCursor!==void 0)c.nextCursor=o.nextCursor??null;j(c);return}if(t.length===0){Rt(e.emptyMessage??"No results found.");return}let n=e.columns.map((a)=>{let c=e.schema[a];return{header:c?.label??a,key:a,align:c?.align}}),r=t.map((a)=>{let c={};for(let u of e.columns){let h=e.schema[u];if(!h)continue;let s=Ft(h,u,a);c[u]=mo(h.type,s)}return c}),i=e.header;if(o?.count!==void 0)i=typeof i==="string"?{title:i,count:o.count}:i!=null?{...i,count:o.count}:void 0;if(tt(r,n,{header:i}),o?.nextCursor)yt({type:"cursor",nextCursor:o.nextCursor})},U=(e,t,o)=>{if(o?.json){j(um(e.schema,jT(e),t));return}if(e.layout==="field-list")ET(e,t);else UT(e,t)},ET=(e,t)=>{if(e.title)ce(e.title);let o={};for(let n of e.fields){let r=e.schema[n];if(!r)continue;let i=Ft(r,n,t);o[r.label]=mo(r.type,i)}ne(o)},UT=(e,t)=>{let{primary:o}=e;if(o.title)ce(o.title);let n={};for(let r of o.fields){let i=e.schema[r];if(!i)continue;let a=Ft(i,r,t);n[i.label]=mo(i.type,a)}ne(n);for(let r of e.secondary??[]){let i=e.schema[r.field];if(!i)continue;let a=Ft(i,r.field,t);if(a==null)continue;R(),ce(r.title),et(String(a))}};var hm=d(()=>{bc();so();kc();Sn()});var p=(e,t=1)=>{console.error(e),process.exit(t)},Gt=(e)=>{console.log(e)};var B=d(()=>{tm();nm();gc();bc();cc();cm();vc();so();kc();Sn();lm();hm()});function gm(e){return e[0]??{}}function Ht(e){return Array.isArray(e)?e:e===void 0||e===null?[]:[e]}function Pn(e){let t;return()=>{if(t)return t.result;let o=e();return t={result:o},o}}function FT(e){let t=Promise.resolve();return(...o)=>{return t=t.catch(()=>{}).then(()=>{return e(...o)})}}function po(){return globalThis[BT]}function An(e,t={},o){return po()?.tracer?.startSpan(e,t,o)}function Pt(e,t,o={}){if(!e)return;let n=HT(t);if(e.recordException(n),!o.signal?.aborted||o.signal.reason!==t)e.setStatus({code:GT,message:n.message})}function HT(e){if(e instanceof Error){let t={message:e.message,name:e.name,stack:e.stack};if("code"in e&&(typeof e.code==="string"||typeof e.code==="number"))t.code=e.code;return t}return{message:String(e)}}async function Mt({name:e,context:t,...o},n){let r=po()?.tracer;if(!r)return n();let i=async(a)=>{try{return await n(a)}catch(c){throw Pt(a,c,o),c}finally{a.end()}};if(t)return r.startActiveSpan(e,o,t,i);else return r.startActiveSpan(e,o,i)}async function Bt(e,t){let o=po();if(!e||!o)return t();let n=o.trace.setSpan(o.context.active(),e);return o.context.with(n,t)}function We(e){if(!e||typeof e!=="object")return!1;return"next"in e&&typeof e.next==="function"&&Symbol.asyncIterator in e&&typeof e[Symbol.asyncIterator]==="function"}function _c({name:e,...t},o){let n;return new At(async()=>{n??=An(e);try{let r=await Bt(n,()=>o.next());return n?.addEvent(r.done?"completed":"yielded"),r}catch(r){throw Pt(n,r,t),r}},async(r)=>{try{if(r!=="next")await Bt(n,()=>o.return?.())}catch(i){throw Pt(n,i,t),i}finally{n?.end()}})}class VT{#e=new Map;#t;constructor(e={}){this.#t=e.maxBufferedEvents??100}get size(){return this.#e.size}publish(e,t){let o=this.#e.get(e);if(!o)return;for(let n of o)n(t)}subscribe(e,t){if(typeof t==="function"){let u=this.#e.get(e);if(!u)this.#e.set(e,u=[]);return u.push(t),Pn(()=>{if(u.splice(u.indexOf(t),1),u.length===0)this.#e.delete(e)})}let o=t?.signal,n=t?.maxBufferedEvents??this.#t;o?.throwIfAborted();let r=[],i=[],a=this.subscribe(e,(u)=>{let h=i.shift();if(h)h[0]({done:!1,value:u});else if(r.push(u),r.length>n)r.shift()}),c=(u)=>{a(),i.forEach((h)=>h[1](u.target.reason)),i.length=0,r.length=0};return o?.addEventListener("abort",c,{once:!0}),new At(async()=>{if(o?.aborted)throw o.reason;if(r.length>0)return{done:!1,value:r.shift()};return new Promise((u,h)=>{i.push([u,h])})},async()=>{a(),o?.removeEventListener("abort",c),i.forEach((u)=>u[0]({done:!0,value:void 0})),i.length=0,r.length=0})}}class qT{index=BigInt(1);generate(){let e=this.index.toString(36);return this.index++,e}}function vo(e,t,o){let n=(r,i)=>{let a=e[i];if(!a)return o(r);return a({...r,next:(c=r)=>n(c,i+1)})};return n(t,0)}function Io(e){if(!e)return;return JSON.parse(e)}function cr(e){return JSON.stringify(e)}function sm(e){if(!Ye(e))return null;return Object.getPrototypeOf(e)?.constructor}function Ge(e){if(!e||typeof e!=="object")return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||!t||!t.constructor}function Ye(e){return!!e&&(typeof e==="object"||typeof e==="function")}function Oc(e,t){let o=e;for(let n of t){if(!Ye(o))return;o=o[n]}return o}function Dn(e,...t){if(typeof e==="function")return e(...t);return e}function Tc(e){return new Proxy(e,{get(t,o,n){let r=Reflect.get(t,o,n);if(o!=="then"||typeof r!=="function")return r;return new Proxy(r,{apply(i,a,c){if(c.length!==2||c.some((h)=>!YT(h)))return Reflect.apply(i,a,c);let u=!0;c[0].call(a,Tc(new Proxy(t,{get:(h,s,g)=>{if(u&&s==="then"){u=!1;return}return Reflect.get(h,s,g)}})))}})}})}function YT(e){return typeof e==="function"&&WT.test(e.toString())}function dm(e){try{return decodeURIComponent(e)}catch{return e}}var $c="orpc",RT="@orpc/shared",KT="1.14.3",wc,GT=2,BT,MT,JT,At,Sc,WT;var rt=d(()=>{wc=class wc extends Error{constructor(...e){super(...e);this.name="AbortError"}};BT=`__${RT}@${KT}/otel/config__`;MT=Symbol.for("asyncDispose"),JT=Symbol.asyncDispose??MT;At=class At{#e=!1;#t=!1;#r;#o;constructor(e,t){this.#r=t,this.#o=FT(async()=>{if(this.#e)return{done:!0,value:void 0};try{let o=await e();if(o.done)this.#e=!0;return o}catch(o){throw this.#e=!0,o}finally{if(this.#e&&!this.#t)this.#t=!0,await this.#r("next")}})}next(){return this.#o()}async return(e){if(this.#e=!0,!this.#t)this.#t=!0,await this.#r("return");return{done:!0,value:e}}async throw(e){if(this.#e=!0,!this.#t)this.#t=!0,await this.#r("throw");throw e}async[JT](){if(this.#e=!0,!this.#t)this.#t=!0,await this.#r("dispose")}[Symbol.asyncIterator](){return this}};Sc=(()=>{let e=function(){};return e.prototype=Object.create(null),Object.freeze(e.prototype),e})();WT=/^\s*function\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/});function Ac(e,t){return t??fo[e]?.status??500}function mm(e,t){return t||fo[e]?.message||e}function ko(e){return e instanceof ye?e:new ye("INTERNAL_SERVER_ERROR",{message:"Internal server error",cause:e})}function mt(e){return e<200||e>=400}function lr(e){if(!Ge(e))return!1;let t=["defined","code","status","message","data"];if(Object.keys(e).some((o)=>!t.includes(o)))return!1;return"defined"in e&&typeof e.defined==="boolean"&&"code"in e&&typeof e.code==="string"&&"status"in e&&typeof e.status==="number"&&mt(e.status)&&"message"in e&&typeof e.message==="string"}function ur(e,t={}){return new ye(e.code,{...t,...e})}var bm="@orpc/client",ym="1.14.3",fo,pm,Pc,ye;var Dc=d(()=>{rt();fo={BAD_REQUEST:{status:400,message:"Bad Request"},UNAUTHORIZED:{status:401,message:"Unauthorized"},FORBIDDEN:{status:403,message:"Forbidden"},NOT_FOUND:{status:404,message:"Not Found"},METHOD_NOT_SUPPORTED:{status:405,message:"Method Not Supported"},NOT_ACCEPTABLE:{status:406,message:"Not Acceptable"},TIMEOUT:{status:408,message:"Request Timeout"},CONFLICT:{status:409,message:"Conflict"},PRECONDITION_FAILED:{status:412,message:"Precondition Failed"},PAYLOAD_TOO_LARGE:{status:413,message:"Payload Too Large"},UNSUPPORTED_MEDIA_TYPE:{status:415,message:"Unsupported Media Type"},UNPROCESSABLE_CONTENT:{status:422,message:"Unprocessable Content"},TOO_MANY_REQUESTS:{status:429,message:"Too Many Requests"},CLIENT_CLOSED_REQUEST:{status:499,message:"Client Closed Request"},INTERNAL_SERVER_ERROR:{status:500,message:"Internal Server Error"},NOT_IMPLEMENTED:{status:501,message:"Not Implemented"},BAD_GATEWAY:{status:502,message:"Bad Gateway"},SERVICE_UNAVAILABLE:{status:503,message:"Service Unavailable"},GATEWAY_TIMEOUT:{status:504,message:"Gateway Timeout"}};pm=Symbol.for(`__${bm}@${ym}/error/ORPC_ERROR_CONSTRUCTORS__`);globalThis[pm]??=new WeakSet;Pc=globalThis[pm];ye=class ye extends Error{defined;code;status;data;constructor(e,...t){let o=gm(t);if(o.status!==void 0&&!mt(o.status))throw Error("[ORPCError] Invalid error status code.");let n=mm(e,o.message);super(n,o);this.code=e,this.status=Ac(e,o.status),this.defined=o.defined??!1,this.data=o.data}toJSON(){return{defined:this.defined,code:this.code,status:this.status,message:this.message,data:this.data}}static[Symbol.hasInstance](e){if(Pc.has(this)){let t=sm(e);if(t&&Pc.has(t))return!0}return super[Symbol.hasInstance](e)}};Pc.add(ye)});function XT(e){let t=e.replace(/\n+$/,"").split(/\n/),o={data:void 0,event:void 0,id:void 0,retry:void 0,comments:[]};for(let n of t){let r=n.indexOf(":"),i=r===-1?n:n.slice(0,r),a=r===-1?"":n.slice(r+1).replace(/^\s/,"");if(r===0)o.comments.push(a);else if(i==="data")o.data??="",o.data+=`${a}
`;else if(i==="event")o.event=a;else if(i==="id")o.id=a;else if(i==="retry"){let c=Number.parseInt(a);if(Number.isInteger(c)&&c>=0&&c.toString()===a)o.retry=c}}return o.data=o.data?.replace(/\n$/,""),o}class Im{constructor(e={}){this.options=e}incomplete="";feed(e){this.incomplete+=e;let t=this.incomplete.lastIndexOf(`

`);if(t===-1)return;let o=this.incomplete.slice(0,t).split(/\n\n/);this.incomplete=this.incomplete.slice(t+2);for(let n of o){let r=XT(`${n}

`);if(this.options.onEvent)this.options.onEvent(r)}}end(){if(this.incomplete)throw new vm("Event Iterator ended before complete")}}function fm(e){if(e.includes(`
`))throw new $o("Event's id must not contain a newline character")}function ZT(e){if(e.includes(`
`))throw new $o("Event's event must not contain a newline character")}function km(e){if(!Number.isInteger(e)||e<0)throw new $o("Event's retry must be a integer and >= 0")}function $m(e){if(e.includes(`
`))throw new $o("Event's comment must not contain a newline character")}function QT(e){let t=e?.split(/\n/)??[],o="";for(let n of t)o+=`data: ${n}
`;return o}function eP(e){let t="";for(let o of e??[])$m(o),t+=`: ${o}
`;return t}function wo(e){let t="";if(t+=eP(e.comments),e.event!==void 0)ZT(e.event),t+=`event: ${e.event}
`;if(e.retry!==void 0)km(e.retry),t+=`retry: ${e.retry}
`;if(e.id!==void 0)fm(e.id),t+=`id: ${e.id}
`;return t+=QT(e.data),t+=`
`,t}function Jt(e,t){if(t.id===void 0&&t.retry===void 0&&!t.comments?.length)return e;if(t.id!==void 0)fm(t.id);if(t.retry!==void 0)km(t.retry);if(t.comments!==void 0)for(let o of t.comments)$m(o);return new Proxy(e,{get(o,n,r){if(n===wm)return t;return Reflect.get(o,n,r)}})}function hr(e){return Ye(e)?Reflect.get(e,wm):void 0}function _m(e,t="inline"){let o=e.replace(/[^\x20-\x7E]/g,"_").replace(/"/g,"\\\""),n=encodeURIComponent(e).replace(/['()*]/g,(r)=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`).replace(/%(7C|60|5E)/g,(r,i)=>String.fromCharCode(Number.parseInt(i,16)));return`${t}; filename="${o}"; filename*=utf-8''${n}`}function Om(e){let t=e.match(/filename\*=(UTF-8'')?([^;]*)/i);if(t&&typeof t[2]==="string")return dm(t[2]);let o=e.match(/filename="((?:\\"|[^"])*)"/i);if(o&&typeof o[1]==="string")return o[1].replace(/\\"/g,'"')}function Nn(e,t){let o={...e};for(let n in t)if(Array.isArray(t[n]))o[n]=[...Ht(o[n]),...t[n]];else if(t[n]!==void 0)if(Array.isArray(o[n]))o[n]=[...o[n],t[n]];else if(o[n]!==void 0)o[n]=[o[n],t[n]];else o[n]=t[n];return o}var $o,vm,Be,Nc,wm;var _o=d(()=>{rt();$o=class $o extends TypeError{};vm=class vm extends TypeError{};Be=class Be extends Error{data;constructor(e){super(e?.message??"An error event was received",e);this.data=e?.data}};Nc=class Nc extends TransformStream{constructor(){let e;super({start(t){e=new Im({onEvent:(o)=>{t.enqueue(o)}})},transform(t){e.feed(t)},flush(){e.end()}})}};wm=Symbol("ORPC_EVENT_SOURCE_META")});function Vt(e,t){let o=async(n)=>{let r=await t.error(n);if(r!==n){let i=hr(n);if(i&&Ye(r))r=Jt(r,i)}return r};return new At(async()=>{let{done:n,value:r}=await(async()=>{try{return await e.next()}catch(a){throw await o(a)}})(),i=await t.value(r,n);if(i!==r){let a=hr(r);if(a&&Ye(i))i=Jt(i,a)}return{done:n,value:i}},async()=>{try{await e.return?.()}catch(n){throw await o(n)}})}var Lc=d(()=>{rt();_o()});function tP(e){return{...e,context:e.context??{}}}function Cc(e,t={}){let o=t.path??[],r=new Proxy(async(...[i,a={}])=>{return await e.call(o,i,tP(a))},{get(i,a){if(typeof a!=="string")return Reflect.get(i,a);return Cc(e,{...t,path:[...o,a]})}});return Tc(r)}var gr=d(()=>{rt();Dc();Lc()});function rP(e,t={}){let n=e?.pipeThrough(new TextDecoderStream).pipeThrough(new Nc)?.getReader(),r,i=!1;return new At(async()=>{r??=An("consume_event_iterator_stream");try{while(!0){if(n===void 0)return{done:!0,value:void 0};let{done:a,value:c}=await Bt(r,()=>n.read());if(a){if(i)throw new wc("Stream was cancelled");return{done:!0,value:void 0}}switch(c.event){case"message":{let u=Io(c.data);if(Ye(u))u=Jt(u,c);return r?.addEvent("message"),{done:!1,value:u}}case"error":{let u=new Be({data:Io(c.data)});throw u=Jt(u,c),r?.addEvent("error"),u}case"done":{let u=Io(c.data);if(Ye(u))u=Jt(u,c);return r?.addEvent("done"),{done:!0,value:u}}default:r?.addEvent("maybe_keepalive")}}}catch(a){if(!(a instanceof Be))Pt(r,a,t);throw a}},async(a)=>{try{if(a!=="next")i=!0,r?.addEvent("cancelled");await Bt(r,()=>n?.cancel())}catch(c){throw Pt(r,c,t),c}finally{r?.end()}})}function oP(e,t={}){let o=t.eventIteratorKeepAliveEnabled??!0,n=t.eventIteratorKeepAliveInterval??5000,r=t.eventIteratorKeepAliveComment??"",i=t.eventIteratorInitialCommentEnabled??!0,a=t.eventIteratorInitialComment??"",c=!1,u,h;return new ReadableStream({start(g){if(h=An("stream_event_iterator"),i)g.enqueue(wo({comments:[a]}))},async pull(g){try{if(o)u=setInterval(()=>{g.enqueue(wo({comments:[r]})),h?.addEvent("keepalive")},n);let b=await Bt(h,()=>e.next());if(clearInterval(u),c)return;let y=hr(b.value);if(!b.done||b.value!==void 0||y!==void 0){let _=b.done?"done":"message";g.enqueue(wo({...y,event:_,data:cr(b.value)})),h?.addEvent(_)}if(b.done)g.close(),h?.end()}catch(b){if(clearInterval(u),c)return;if(b instanceof Be)g.enqueue(wo({...hr(b),event:"error",data:cr(b.data)})),h?.addEvent("error"),g.close();else Pt(h,b),g.error(b);h?.end()}},async cancel(){try{c=!0,clearInterval(u),h?.addEvent("cancelled"),await Bt(h,()=>e.return?.())}catch(g){throw Pt(h,g),g}finally{h?.end()}}}).pipeThrough(new TextEncoderStream)}function nP(e,t={}){return Mt({name:"parse_standard_body",signal:t.signal},async()=>{let o=e.headers.get("content-disposition");if(typeof o==="string"){let i=Om(o)??"blob",a=await e.blob();return new File([a],i,{type:a.type})}let n=e.headers.get("content-type");if(!n||n.startsWith("application/json")){let i=await e.text();return Io(i)}if(n.startsWith("multipart/form-data"))return await e.formData();if(n.startsWith("application/x-www-form-urlencoded")){let i=await e.text();return new URLSearchParams(i)}if(n.startsWith("text/event-stream"))return rP(e.body,t);if(n.startsWith("text/plain"))return await e.text();let r=await e.blob();return new File([r],"blob",{type:r.type})})}function iP(e,t,o={}){if(e instanceof ReadableStream)return e;let n=t.get("content-disposition");if(t.delete("content-type"),t.delete("content-disposition"),e===void 0)return;if(e instanceof Blob)return t.set("content-type",e.type),t.set("content-length",e.size.toString()),t.set("content-disposition",n??_m(e instanceof File?e.name:"blob")),e;if(e instanceof FormData)return e;if(e instanceof URLSearchParams)return e;if(We(e))return t.set("content-type","text/event-stream"),oP(e,o);return t.set("content-type","application/json"),cr(e)}function xc(e,t={}){return e.forEach((o,n)=>{if(Array.isArray(t[n]))t[n].push(o);else if(t[n]!==void 0)t[n]=[t[n],o];else t[n]=o}),t}function aP(e,t=new Headers){for(let[o,n]of Object.entries(e))if(Array.isArray(n))for(let r of n)t.append(o,r);else if(n!==void 0)t.append(o,n);return t}function Sm(e,t={}){let o=aP(e.headers),n=iP(e.body,o,t);return new Request(e.url,{signal:e.signal,method:e.method,headers:o,body:n})}function Tm(e,t={}){return{body:Pn(()=>nP(e,t)),status:e.status,get headers(){let o=xc(e.headers);return Object.defineProperty(this,"headers",{value:o,writable:!0}),o},set headers(o){Object.defineProperty(this,"headers",{value:o,writable:!0})}}}var zc=d(()=>{rt();_o()});class Oo{plugins;constructor(e=[]){this.plugins=[...e].sort((t,o)=>(t.order??0)-(o.order??0))}init(e){for(let t of this.plugins)t.init?.(e)}}class Ln{constructor(e,t,o={}){this.codec=e,this.sender=t,new Oo(o.plugins).init(o),this.interceptors=Ht(o.interceptors),this.clientInterceptors=Ht(o.clientInterceptors)}interceptors;clientInterceptors;call(e,t,o){return Mt({name:`${$c}.${e.join("/")}`,signal:o.signal},(n)=>{if(n?.setAttribute("rpc.system",$c),n?.setAttribute("rpc.method",e.join(".")),We(t))t=_c({name:"consume_event_iterator_input",signal:o.signal},t);return vo(this.interceptors,{...o,path:e,input:t},async({path:r,input:i,...a})=>{let c=po(),u,h=c?.trace.getActiveSpan()??n;if(h&&c)u=c?.trace.setSpan(c.context.active(),h);let s=await Mt({name:"encode_request",context:u},()=>this.codec.encode(r,i,a)),g=await vo(this.clientInterceptors,{...a,input:i,path:r,request:s},({input:y,path:_,request:S,...H})=>{return Mt({name:"send_request",signal:H.signal,context:u},()=>this.sender.call(S,H,_,y))}),b=await Mt({name:"decode_response",context:u},()=>this.codec.decode(g,a,r,i));if(We(b))return _c({name:"consume_event_iterator_output",signal:a.signal},b);return b})})}}function Cn(e){return`/${e.map(encodeURIComponent).join("/")}`}function jc(e){if(typeof e.forEach==="function")return xc(e);return e}function Ec(e){return Object.entries(fo).find(([,t])=>t.status===e)?.[0]??"MALFORMED_ORPC_ERROR_RESPONSE"}class Pm{constructor(e){this.jsonSerializer=e}serialize(e){if(We(e))return Vt(e,{value:async(t)=>this.#e(t,!1),error:async(t)=>{return new Be({data:this.#e(ko(t).toJSON(),!1),cause:t})}});return this.#e(e,!0)}#e(e,t){let[o,n,r,i]=this.jsonSerializer.serialize(e),a=n.length===0?void 0:n;if(!t||i.length===0)return{json:o,meta:a};let c=new FormData;return c.set("data",cr({json:o,meta:a,maps:r})),i.forEach((u,h)=>{c.set(h.toString(),u)}),c}deserialize(e){if(We(e))return Vt(e,{value:async(t)=>this.#t(t),error:async(t)=>{if(!(t instanceof Be))return t;let o=this.#t(t.data);if(lr(o))return ur(o,{cause:t});return new Be({data:o,cause:t})}});return this.#t(e)}#t(e){if(e===void 0)return;if(!(e instanceof FormData))return this.jsonSerializer.deserialize(e.json,e.meta??[]);let t=JSON.parse(e.get("data"));return this.jsonSerializer.deserialize(t.json,t.meta??[],t.maps,(o)=>e.get(o.toString()))}}var Uc=d(()=>{rt();_o();Dc();zc();Lc()});class Rc{fetch;toFetchRequestOptions;adapterInterceptors;constructor(e){new Am(e.plugins).initRuntimeAdapter(e),this.fetch=e.fetch??globalThis.fetch.bind(globalThis),this.toFetchRequestOptions=e,this.adapterInterceptors=Ht(e.adapterInterceptors)}async call(e,t,o,n){let r=Sm(e,this.toFetchRequestOptions),i=await vo(this.adapterInterceptors,{...t,request:r,path:o,input:n,init:{redirect:"manual"}},({request:c,path:u,input:h,init:s,...g})=>this.fetch(c,s,g,u,h));return Tm(i,{signal:r.signal})}}var Am;var Dm=d(()=>{rt();zc();Uc();Am=class Am extends Oo{initRuntimeAdapter(e){for(let t of this.plugins)t.initRuntimeAdapter?.(e)}}});var Nm=d(()=>{Uc()});class Fc{maxArrayIndex;constructor(e={}){this.maxArrayIndex=e.maxBracketNotationArrayIndex??9999}serialize(e,t=[],o=[]){if(Array.isArray(e))e.forEach((n,r)=>{this.serialize(n,[...t,r],o)});else if(Ge(e))for(let n in e)this.serialize(e[n],[...t,n],o);else o.push([this.stringifyPath(t),e]);return o}deserialize(e){if(e.length===0)return{};let t=new WeakSet,o={value:[]};for(let[n,r]of e){let i=this.parsePath(n),a=o,c="value";if(i.forEach((u,h)=>{if(!Array.isArray(a[c])&&!Ge(a[c]))a[c]=[];if(h!==i.length-1){if(Array.isArray(a[c])&&!Lm(u,this.maxArrayIndex))if(t.has(a[c]))t.delete(a[c]),a[c]=Cm(a[c]);else a[c]=Kc(a[c])}else if(Array.isArray(a[c])){if(u===""){if(a[c].length&&!t.has(a[c]))a[c]=Kc(a[c])}else if(t.has(a[c]))t.delete(a[c]),a[c]=Cm(a[c]);else if(!Lm(u,this.maxArrayIndex))a[c]=Kc(a[c])}a=a[c],c=u}),Array.isArray(a)&&c==="")t.add(a),a.push(r);else if(c in a)if(Array.isArray(a[c]))a[c].push(r);else a[c]=[a[c],r];else a[c]=r}return o.value}stringifyPath(e){return e.map((t)=>{return t.toString().replace(/[\\[\]]/g,(o)=>{switch(o){case"\\":return"\\\\";case"[":return"\\[";case"]":return"\\]";default:return o}})}).reduce((t,o,n)=>{if(n===0)return o;return`${t}[${o}]`},"")}parsePath(e){let t=[],o=!1,n="",r=0;for(let i=0;i<e.length;i++){let a=e[i],c=e[i+1];if(o&&a==="]"&&(c===void 0||c==="[")&&r%2===0){if(c===void 0)o=!1;t.push(n),n="",i++}else if(t.length===0&&a==="["&&r%2===0)o=!0,t.push(n),n="";else if(a==="\\")r++;else n+="\\".repeat(r/2)+a,r=0}return o||t.length===0?[e]:t}}function Lm(e,t){return/^0$|^[1-9]\d*$/.test(e)&&Number(e)<=t}function Kc(e){let t=new Sc;return e.forEach((o,n)=>{t[n]=o}),t}function Cm(e){let t=new Sc;return t[""]=e.length===1?e[0]:e,t}var xm=d(()=>{rt()});function Gc(e,t){return{...e,...t}}class So{"~orpc";constructor(e){if(e.route?.successStatus&&mt(e.route.successStatus))throw Error("[ContractProcedure] Invalid successStatus.");if(Object.values(e.errorMap).some((t)=>t&&t.status&&!mt(t.status)))throw Error("[ContractProcedure] Invalid error status code.");this["~orpc"]=e}}function To(e){if(e instanceof So)return!0;return(typeof e==="object"||typeof e==="function")&&e!==null&&"~orpc"in e&&typeof e["~orpc"]==="object"&&e["~orpc"]!==null&&"errorMap"in e["~orpc"]&&"route"in e["~orpc"]&&"meta"in e["~orpc"]}var zm=d(()=>{gr()});function lP(e,t){return{...e,...t}}function uP(e,t){return{...e,...t}}function hP(e,t){if(!e.path)return e;return{...e,path:`${t}${e.path}`}}function gP(e,t){return{...e,tags:[...t,...e.tags??[]]}}function sP(e,t){return e?`${e}${t}`:t}function dP(e,t){return e?[...e,...t]:t}function bP(e,t){let o=e;if(t.prefix)o=hP(o,t.prefix);if(t.tags?.length)o=gP(o,t.tags);return o}function jm(e,t){if(To(e))return new So({...e["~orpc"],errorMap:Gc(t.errorMap,e["~orpc"].errorMap),route:bP(e["~orpc"].route,t)});if(typeof e!=="object"||e===null)return e;let o={};for(let n in e)o[n]=jm(e[n],t);return o}function Po(e,t){if(t===void 0)return yP[e];return t}var He,Em,yP,oU;var Bc=d(()=>{zm();gr();He=class He extends So{constructor(e){super(e);this["~orpc"].prefix=e.prefix,this["~orpc"].tags=e.tags}$meta(e){return new He({...this["~orpc"],meta:e})}$route(e){return new He({...this["~orpc"],route:e})}$input(e){return new He({...this["~orpc"],inputSchema:e})}errors(e){return new He({...this["~orpc"],errorMap:Gc(this["~orpc"].errorMap,e)})}meta(e){return new He({...this["~orpc"],meta:lP(this["~orpc"].meta,e)})}route(e){return new He({...this["~orpc"],route:uP(this["~orpc"].route,e)})}input(e){return new He({...this["~orpc"],inputSchema:e})}output(e){return new He({...this["~orpc"],outputSchema:e})}prefix(e){return new He({...this["~orpc"],prefix:sP(this["~orpc"].prefix,e)})}tag(...e){return new He({...this["~orpc"],tags:dP(this["~orpc"].tags,e)})}router(e){return jm(e,this["~orpc"])}};Em=new He({errorMap:{},route:{},meta:{}}),yP={defaultMethod:"POST",defaultSuccessStatus:200,defaultSuccessDescription:"OK",defaultInputStructure:"compact",defaultOutputStructure:"compact"};oU=Symbol("ORPC_EVENT_ITERATOR_DETAILS")});class Rm{customSerializers;constructor(e={}){this.customSerializers=e.customJsonSerializers??[]}serialize(e,t={value:!1}){for(let o of this.customSerializers)if(o.condition(e))return this.serialize(o.serialize(e),t);if(e instanceof Blob)return t.value=!0,[e,t.value];if(e instanceof Set)return this.serialize(Array.from(e),t);if(e instanceof Map)return this.serialize(Array.from(e.entries()),t);if(Array.isArray(e))return[e.map((n)=>n===void 0?null:this.serialize(n,t)[0]),t.value];if(Ge(e)){let o={};for(let n in e){if(n==="toJSON"&&typeof e[n]==="function")continue;o[n]=this.serialize(e[n],t)[0]}return[o,t.value]}if(typeof e==="bigint"||e instanceof RegExp||e instanceof URL)return[e.toString(),t.value];if(e instanceof Date)return[Number.isNaN(e.getTime())?null:e.toISOString(),t.value];if(Number.isNaN(e))return[null,t.value];return[e,t.value]}}function Hc(e){return`/${e.replace(/\/{2,}/g,"/").replace(/^\/|\/$/g,"")}`}function Um(e){return e?Hc(e).match(/\/\{[^}]+\}/g)?.map((t)=>({raw:t,name:t.match(/\{\+?([^}]+)\}/)[1]})):void 0}class Km{constructor(e,t,o){this.contract=e,this.serializer=t,this.baseUrl=o.url,this.headers=o.headers??{},this.customErrorResponseBodyDecoder=o.customErrorResponseBodyDecoder}baseUrl;headers;customErrorResponseBodyDecoder;async encode(e,t,o){let n=jc(await Dn(this.headers,o,e,t));if(o.lastEventId!==void 0)n=Nn(n,{"last-event-id":o.lastEventId});let r=await Dn(this.baseUrl,o,e,t),i=Oc(this.contract,e);if(!To(i))throw Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${e.join(".")}`);return Po("defaultInputStructure",i["~orpc"].route.inputStructure)==="compact"?this.#e(i,e,t,o,r,n):this.#t(i,e,t,o,r,n)}#e(e,t,o,n,r,i){let a=Hc(e["~orpc"].route.path??Cn(t)),c=o,u=Um(a);if(u?.length){if(!Ge(o))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "compact" structure when has dynamic params at ${t.join(".")}.`);let g={...o};for(let b of u){let y=o[b.name];a=a.replace(b.raw,`/${encodeURIComponent(`${this.serializer.serialize(y)}`)}`),delete g[b.name]}c=Object.keys(g).length?g:void 0}let h=Po("defaultMethod",e["~orpc"].route.method),s=new URL(r);if(s.pathname=`${s.pathname.replace(/\/$/,"")}${a}`,h==="GET"){let g=this.serializer.serialize(c,{outputFormat:"URLSearchParams"});for(let[b,y]of g)s.searchParams.append(b,y);return{url:s,method:h,headers:i,body:void 0,signal:n.signal}}return{url:s,method:h,headers:i,body:this.serializer.serialize(c),signal:n.signal}}#t(e,t,o,n,r,i){let a=Hc(e["~orpc"].route.path??Cn(t)),c=Um(a);if(!Ge(o)&&o!==void 0)throw TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "detailed" structure at ${t.join(".")}.`);if(c?.length){if(!Ge(o?.params))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input.params shape for "detailed" structure when has dynamic params at ${t.join(".")}.`);for(let g of c){let b=o.params[g.name];a=a.replace(g.raw,`/${encodeURIComponent(`${this.serializer.serialize(b)}`)}`)}}let u=i;if(o?.headers!==void 0){if(!Ge(o.headers))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input.headers shape for "detailed" structure at ${t.join(".")}.`);u=Nn(o.headers,i)}let h=Po("defaultMethod",e["~orpc"].route.method),s=new URL(r);if(s.pathname=`${s.pathname.replace(/\/$/,"")}${a}`,o?.query!==void 0){let g=this.serializer.serialize(o.query,{outputFormat:"URLSearchParams"});for(let[b,y]of g)s.searchParams.append(b,y)}if(h==="GET")return{url:s,method:h,headers:u,body:void 0,signal:n.signal};return{url:s,method:h,headers:u,body:this.serializer.serialize(o?.body),signal:n.signal}}async decode(e,t,o){let n=!mt(e.status),r=await(async()=>{let c=!1;try{let u=await e.body();return c=!0,this.serializer.deserialize(u)}catch(u){if(!c)throw Error("Cannot parse response body, please check the response body and content-type.",{cause:u});throw Error("Invalid OpenAPI response format.",{cause:u})}})();if(!n){let c=this.customErrorResponseBodyDecoder?.(r,e);if(c!==null&&c!==void 0)throw c;if(lr(r))throw ur(r);throw new ye(Ec(e.status),{status:e.status,data:{...e,body:r}})}let i=Oc(this.contract,o);if(!To(i))throw Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${o.join(".")}`);if(Po("defaultOutputStructure",i["~orpc"].route.outputStructure)==="compact")return r;return{status:e.status,headers:e.headers,body:r}}}class Fm{constructor(e,t){this.jsonSerializer=e,this.bracketNotation=t}serialize(e,t={}){if(We(e)&&!t.outputFormat)return Vt(e,{value:async(o)=>this.#e(o,{outputFormat:"plain"}),error:async(o)=>{return new Be({data:this.#e(ko(o).toJSON(),{outputFormat:"plain"}),cause:o})}});return this.#e(e,t)}#e(e,t){let[o,n]=this.jsonSerializer.serialize(e);if(t.outputFormat==="plain")return o;if(t.outputFormat==="URLSearchParams"){let i=new URLSearchParams;for(let[a,c]of this.bracketNotation.serialize(o))if(typeof c==="string"||typeof c==="number"||typeof c==="boolean")i.append(a,c.toString());return i}if(o instanceof Blob||o===void 0||!n)return o;let r=new FormData;for(let[i,a]of this.bracketNotation.serialize(o))if(typeof a==="string"||typeof a==="number"||typeof a==="boolean")r.append(i,a.toString());else if(a instanceof Blob)r.append(i,a);return r}deserialize(e){if(e instanceof URLSearchParams||e instanceof FormData)return this.bracketNotation.deserialize(Array.from(e.entries()));if(We(e))return Vt(e,{value:async(t)=>t,error:async(t)=>{if(t instanceof Be&&lr(t.data))return ur(t.data,{cause:t});return t}});return e}}var Mc;var Gm=d(()=>{Nm();xm();rt();gr();Bc();_o();Mc=class Mc extends Ln{constructor(e,t,o){let n=new Rm(o),r=new Fc({maxBracketNotationArrayIndex:4294967294}),i=new Fm(n,r),a=new Km(e,i,o);super(a,t,o)}}});var Jc;var Bm=d(()=>{Dm();Gm();Jc=class Jc extends Mc{constructor(e,t){let o=new Rc(t);super(e,o,t)}}});var Mm=`## Overview

Stream your Cloudflare Workers logs and traces directly to Sazabi for edge network observability. Monitor Workers executions, binding calls, and fetch requests with real-time AI-powered analysis.

## How it works

Each Worker can opt in to logs and/or traces independently. Selecting a Worker signal in the streams modal provisions a single Cloudflare Workers Observability destination plus a per-stream public key. The destinations are named:

- \`sazabi-workers-logs-<scriptName>-<suffix>\`
- \`sazabi-workers-traces-<scriptName>-<suffix>\`

Each Worker must reference those destination names in its own Wrangler config. Cloudflare ignores destinations the Worker has not explicitly listed, so until this is in place the destination shows "Never run" in the Cloudflare dashboard.

**\`wrangler.jsonc\`:**

\`\`\`jsonc
{
  "observability": {
    "enabled": true,
    "logs": {
      "enabled": true,
      "destinations": ["sazabi-workers-logs-<scriptName>-<suffix>"]
    },
    "traces": {
      "enabled": true,
      "destinations": ["sazabi-workers-traces-<scriptName>-<suffix>"]
    }
  }
}
\`\`\`

**\`wrangler.toml\`:**

\`\`\`toml
[observability.logs]
enabled = true
destinations = [ "sazabi-workers-logs-<scriptName>-<suffix>" ]

[observability.traces]
enabled = true
destinations = [ "sazabi-workers-traces-<scriptName>-<suffix>" ]
\`\`\`

The exact destination name appears on each stream's detail page after provisioning.

## Features

- Workers logs and traces forwarded via Workers Observability destinations
- Independent opt-in per Worker and per signal type (logs or traces)
- Optional Logpush job for Enterprise Cloudflare accounts preferring the push delivery path

## Requirements

- Edit access to each Worker's \`wrangler.jsonc\` or \`wrangler.toml\` configuration file
- Cloudflare account permissions to enable Workers Observability destinations
- Enterprise Cloudflare plan required for the Logpush delivery path`;var Hm=()=>{};var Vm=`# Cloudflare Data Source Setup

You can automate Cloudflare ingestion through Sazabi’s **native API token onboarding** plus managed Logpush / Workers Observability streams, **or** create a standalone **manual Logpush → HTTP job**.

## Native path — API token & account linkage

1. Create a Cloudflare API token granting:
   - **Account Settings: Read**
   - **Zone: Read**
   - **Zone Logs: Edit**
   - **Workers Observability: Edit**
   - **Workers Scripts: Read**

   Dashboard links include a templated shortcut that pre-populates scopes.

2. Collect the Cloudflare **Account ID** (\`[a-f0-9]{32}\` hex) from \`/dash.cloudflare.com\` URLs or Overview.
3. Paste token + account ID into Sazabi validation; persisted metadata includes hashed secrets and account label.
4. For **Workers Observability** streams, redeploy Workers with Observability snippets calling out the precise **destination IDs** surfaced in-dashboard—Workers ignore destinations omitted from config, so dashboards may show destinations as “never run” until Wrangler merges the snippets.

### Logpush / Workers selectors

Configure streams per Logpush dataset (zone/account scoped) or per Worker telemetry channel (Logs vs Traces lanes). Respect dedupe prompts so duplicate jobs are not recreated.

## Manual Logpush fallback

Without native automation you can manually create Cloudflare Logpush jobs:

1. Destination type: **HTTP**.
2. Destination URL: \`https://cloudflare-logpush.{projectRegion}.intake.{intakeDomain}/v1/logs?api_key={publicKey}\` (copy from Sazabi).
3. In job **Output options**, set **Timestamp format** to **RFC3339** for reliable parsing.

## Verification

Send representative traffic (HTTP requests, Worker invocations) and confirm matching normalized events in Sazabi.
`;var Jm=()=>{};var Wm=`## Overview

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
- A workspace admin to enable the integration in Sazabi settings`;var qm=()=>{};var Xm=`# CloudWatch Data Source Setup

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
`;var Ym=()=>{};var Qm=`## Overview

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
- A workspace admin to enable the integration in Sazabi settings`;var Zm=()=>{};var tp="# Convex Data Source Setup\n\nWalk the user through connecting **Convex** deployments to a Sazabi project using a Convex **team access token** plus the Sazabi CLI. Stream creation enqueues the Convex backend's `provisionStream`, which mints a per-deployment deploy key, registers a webhook log stream on each Convex deployment, and points it at the Sazabi datasource-scoped intake host. Log streaming requires a Convex **Professional** plan.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating the team token in the Convex UI, choosing the Sazabi project, or picking which Convex deployments to monitor. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, pasting the team token, picking deployments.\n- Never echo `CONVEX_TEAM_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n- The team token is a JWT starting with `eyJ...`. Reject deploy keys (`prod:...`, `dev:...`, `preview:...`) — Sazabi mints its own per-deployment deploy keys via the Convex Management API.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI=\"sazabi\"\nelse\n  SAZABI_CLI=\"bunx @sazabi/cli\"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to the Convex Management API in Phase 3.\n\nCheck authentication:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf authentication fails, ask the user whether to authenticate via `auth login` (browser) or `auth save <token>` (existing secret key). Do not print tokens back to the user.\n\nThe user needs:\n\n1. A Sazabi project to receive the Convex telemetry.\n2. A Convex team on the **Professional** plan. Log streaming returns `LogStreamingNotEnabled` on Starter/Free teams.\n3. Access to the Convex deployments they want to monitor.\n4. A browser to create a Convex team access token.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the Convex telemetry? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use \"$SAZABI_PROJECT_ID\"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing Convex connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type convex --json\n```\n\nIf a Convex connection already exists that targets the Convex team the user wants to onboard, reuse its `id` as `CONVEX_CONNECTION_ID` and skip Phase 4 — still run Phase 2 to capture and validate the team token (the list response does not expose the decrypted team token, so Phase 3's Management API calls still need a freshly pasted `CONVEX_TEAM_TOKEN`), then continue into Phase 3 and Phase 5 to add new streams. Do not create a duplicate connection for the same Convex team.\n\n## Phase 2: Create and capture the Convex team token\n\nDirect the user to create the token:\n\n> Open **https://dashboard.convex.dev/team/settings/access-tokens** and click **Generate access token**.\n>\n> - **Token Name**: `Sazabi`\n> - **Permission**: This is a team-scoped token; it inherits the creator's team permissions. The creator must be a team admin or have permission to manage deployments in the team you want to monitor.\n>\n> Copy the token immediately — Convex only shows it once. The token is a JWT and starts with `eyJ`.\n\n`AskUserQuestion`: ask the user to paste the team access token. Capture it as `CONVEX_TEAM_TOKEN`.\n\nSanity-check the token before discovering deployments. The Management API's `/v1/token_details` returns the team the token is bound to:\n\n```sh\nif TOKEN_DETAILS=$(curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n  https://api.convex.dev/v1/token_details 2>/dev/null); then\n  CONVEX_TEAM_ID=$(jq -r '.teamId' <<<\"$TOKEN_DETAILS\")\nelse\n  CONVEX_TEAM_ID=\"\"\nfi\n```\n\nIf the call fails or `CONVEX_TEAM_ID` is empty/`null`, the token was revoked, copied incorrectly, or is not a team access token. Have the user regenerate it and retry. Do not print `CONVEX_TEAM_TOKEN` in any error output.\n\nConvex team access tokens are scoped to **exactly one team**. If the user wants to onboard deployments from multiple Convex teams, run this skill once per team — each run produces a separate Sazabi connection.\n\nCapture a display name for the team. Convex does not expose a team-name endpoint to token holders; fall back to `Team ${CONVEX_TEAM_ID}` if the user has no preferred label:\n\n```sh\nCONVEX_TEAM_NAME=\"Team ${CONVEX_TEAM_ID}\"\n```\n\n## Phase 3: Discover and pick Convex deployments\n\nEnumerate the team's projects, then enumerate each project's deployments. Reuse the exact `deployment.name` slug (e.g. `sleek-bear-350`) as `deploymentId` — that is the identifier the Convex log-streams API expects.\n\n```sh\nPROJECTS_JSON=$(curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n  \"https://api.convex.dev/v1/teams/${CONVEX_TEAM_ID}/list_projects\")\n\n# Emits one row per deployment: deploymentName<TAB>projectName<TAB>deploymentType\nDEPLOYMENTS_TSV=$(jq -r '.[] | \"\\(.id)\\t\\(.name)\"' <<<\"$PROJECTS_JSON\" \\\n  | while IFS=$'\\t' read -r PROJECT_ID PROJECT_NAME; do\n      curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n        \"https://api.convex.dev/v1/projects/${PROJECT_ID}/list_deployments\" \\\n        | jq -r --arg pname \"$PROJECT_NAME\" \\\n            '.[] | \"\\(.name)\\t\\($pname)\\t\\(.deploymentType)\"'\n    done)\n\nprintf '%s\\n' \"$DEPLOYMENTS_TSV\"\n```\n\nGroup the rows by `projectName` and present them to the user. The `deploymentType` is one of `prod`, `dev`, `preview`.\n\n`AskUserQuestion`: which Convex deployments should Sazabi connect? One Sazabi stream is created per selected deployment.\n\nFor each selected row, build `(DEPLOYMENT_ID, DEPLOYMENT_DISPLAY_NAME)`:\n\n- `DEPLOYMENT_ID` = the deployment slug (column 1, e.g. `sleek-bear-350`). This is the value passed to Convex's `/api/v1/create_log_stream`.\n- `DEPLOYMENT_DISPLAY_NAME` = `<projectName> (<deploymentType>)` (e.g. `web (prod)`). This becomes both the stream's `displayName` and `config.deploymentName`.\n\nCollect these into a list `CONVEX_DEPLOYMENTS` for use in Phase 5.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection. The metadata schema lives in `convexMetadataSchema` — only `accessToken`, `teamId`, and `teamName` are persisted:\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token  \"$CONVEX_TEAM_TOKEN\" \\\n  --arg teamId \"$CONVEX_TEAM_ID\" \\\n  --arg name   \"$CONVEX_TEAM_NAME\" \\\n  '{accessToken: $token, teamId: $teamId, teamName: $name}')\n\nCONVEX_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type convex \\\n  --metadata \"$METADATA_JSON\" \\\n  --json | jq -r '.connectionId')\n```\n\nThe connection persists the (encrypted) team token and team scope. It does **not** provision any Convex-side log streams on its own — log-stream creation happens per stream in Phase 5.\n\n## Phase 5: Create one stream per Convex deployment\n\nFor each entry in `CONVEX_DEPLOYMENTS`, create a stream. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the Convex backend's `provisionStream`. That activity:\n\n1. Calls `POST https://api.convex.dev/v1/deployments/<deploymentId>/create_deploy_key` with the team token to mint a Sazabi-named deploy key.\n2. Mints a per-stream Sazabi public key.\n3. Calls `POST https://<deploymentId>.convex.cloud/api/v1/create_log_stream` with the deploy key to register a `webhook` / `json` log stream pointed at `https://convex.<projectRegion>.intake.<intakeDomain>/api/v1/convex/ingest?key=<publicKey>`.\n\nThe agent only has to set `deploymentId` and `deploymentName` in the stream `config`. The backend writes back `logStreamId`, `deployKey`, and `publicKeyId` on success.\n\n```sh\n$SAZABI_CLI data-sources streams create \\\n  --connection-id \"$CONVEX_CONNECTION_ID\" \\\n  --display-name \"$DEPLOYMENT_DISPLAY_NAME\" \\\n  --config \"$(jq -nc \\\n    --arg id   \"$DEPLOYMENT_ID\" \\\n    --arg name \"$DEPLOYMENT_DISPLAY_NAME\" \\\n    '{deploymentId: $id, deploymentName: $name}')\" \\\n  --json\n```\n\nDo **not** set `logStreamId`, `deployKey`, or `publicKeyId` in the initial config — those fields are reserved for the backend's write-back. Reuse the exact `deployment.name` slug returned by `list_deployments` for `deploymentId`; do not invent or reformat it.\n\nIf a stream creation fails because of a duplicate display name on this connection, append the deployment slug (e.g. `\"$DEPLOYMENT_DISPLAY_NAME [$DEPLOYMENT_ID]\"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nLog-stream provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id \"$CONVEX_CONNECTION_ID\" --json\n```\n\nEach stream's status transitions from `pending`/`provisioning` to `active` once the backend finishes calling Convex's `/api/v1/create_log_stream`. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that deployment and surface it to the user.\n\n**Pass 2 — telemetry arrival.** Convex emits log-stream batches only while the deployment is processing requests. Trigger traffic (run a Convex function, hit a deployed endpoint, run `npx convex dev`) and then:\n\n```sh\n$SAZABI_CLI logs tail --json --search convex\n```\n\nConfirm new records arrive tagged with the corresponding `deploymentName`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `CONVEX_CONNECTION_ID` and `CONVEX_TEAM_NAME`.\n- One line per stream: deployment display name, deployment slug, current status.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored, call out the failed deployment slug and offer to recreate just that stream.\n\nDo not include `CONVEX_TEAM_TOKEN` or any minted deploy key in the summary.\n\n## Troubleshooting\n\n### Invalid or expired team access token\n\n`/v1/token_details` returns 401 or `Invalid access token`. The token was revoked, copied incorrectly, or is not a team access token. Regenerate at **https://dashboard.convex.dev/team/settings/access-tokens** and rerun Phase 2. The existing connection record holds a now-stale token — delete the connection and rerun from Phase 4 unless your CLI version supports `connections update` (check `$SAZABI_CLI data-sources connections -h`).\n\n### `LogStreamingNotEnabled`\n\nThe Convex `create_log_stream` API returns `LogStreamingNotEnabled` when the team is not on the **Professional** plan. The user must upgrade at **https://www.convex.dev/plans**. After upgrading, rerun `streams create` for the failed deployments — the connection itself does not need to be recreated.\n\n### Token has no access to expected deployments\n\nConvex team access tokens are scoped to exactly one team and inherit the creator's permissions inside that team. If a project or deployment is missing from `list_projects`/`list_deployments`, either the deployment lives in a different team (run this skill again for that team) or the token's creator does not have the necessary role. Have the user regenerate the token under an account with the right permissions and retry from Phase 2.\n\n### Wrong token shape (deploy key pasted instead of access token)\n\nIf the user pasted a string starting with `prod:`, `dev:`, or `preview:`, that is a deploy key, not a team access token. Deploy keys cannot list teams or projects via the Management API. Have the user generate a team access token (JWT, `eyJ...`) and retry Phase 2.\n\n### Stream config rejected by Sazabi\n\n`streams create` validates `config` against `convexStreamConfigSchema` before insert. If the CLI returns a validation error, check that `deploymentId` and `deploymentName` are non-empty strings and that you did **not** pre-populate `logStreamId`, `deployKey`, or `publicKeyId`. Field names are case-sensitive.\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No telemetry arriving after streams are `active`\n\nAn `active` stream on the Sazabi side only delivers data when the corresponding Convex deployment processes requests. Trigger a function call, deploy, or `console.log` in the deployment. If logs still never arrive, verify the Convex dashboard shows the `Sazabi …` log stream under the deployment's **Log Streams** settings and that its destination URL host is `convex.<region>.intake.<domain>` (not the base regional intake host).\n\n### Manual connection already exists without streams\n\nIf someone previously ran `sazabi data-sources connections create --type convex` without the corresponding `streams create` calls, the connection exists but `streams list --connection-id <id>` returns empty. Reuse the existing `CONVEX_CONNECTION_ID` and continue from Phase 3 to add streams; do not create a second connection for the same Convex team.\n";var ep=()=>{};var op=`## Overview

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
- The \`DD-API-KEY\` header must be populated with your Sazabi public key for Sazabi's intake to authenticate the request`;var rp=()=>{};var ip=`# Datadog Agent Data Source Setup

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
`;var np=()=>{};var cp=`## Overview

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
- Sazabi public key and intake endpoint values provided during connection setup`;var ap=()=>{};var up=`# Daytona Data Source Setup

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
`;var lp=()=>{};var gp=`## Overview

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
- Permissions to provision \`log_destinations\` on the selected apps (granted by the token scopes above)`;var hp=()=>{};var dp=`# DigitalOcean Data Source Setup

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
`;var sp=()=>{};var yp=`## Overview

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
`;var bp=()=>{};var pp="# E2B Data Source Setup\n\nInstrument E2B sandboxes by attaching an **OpenTelemetry log exporter** that POSTs OTLP payloads to Sazabi's E2B intake URL. The exporter is configured in the host process where you create sandboxes; `onStdout` / `onStderr` callbacks passed to `sandbox.runCode()` emit one OTLP log record per output line.\n\n## Scope\n\nOnly output from code passed to `sandbox.runCode()` is captured. E2B's lifecycle webhook is not used by this setup, and the platform's `GET /sandboxes/{id}/logs/v2` endpoint is pull-only — any stdout/stderr emitted outside `runCode()` (for example by long-running processes spawned via `sandbox.commands.run`) is not forwarded.\n\n## Phase 1: Environment variables\n\n| Variable | Value |\n|----------|-------|\n| `SAZABI_INTAKE_URL` | `https://e2b.{projectRegion}.intake.{intakeDomain}/v1/logs` |\n| `SAZABI_PUBLIC_KEY`    | Sazabi `{publicKey}` |\n\nTreat `SAZABI_PUBLIC_KEY` as a bearer secret embedded in the OTLP exporter's `Authorization: Bearer ...` header. The `/v1/logs` path suffix is required.\n\n## Phase 2: Install dependencies\n\n**Node / TypeScript:**\n\n```bash\nnpm install @e2b/code-interpreter @opentelemetry/api-logs @opentelemetry/exporter-logs-otlp-http @opentelemetry/resources @opentelemetry/sdk-logs\n```\n\n**Python:**\n\n```bash\npip install e2b_code_interpreter opentelemetry-api opentelemetry-sdk opentelemetry-exporter-otlp-proto-http\n```\n\n## Phase 3: Wire the exporter\n\n1. Construct an `OTLPLogExporter` pointing at `SAZABI_INTAKE_URL` with `Authorization: Bearer ${SAZABI_PUBLIC_KEY}`.\n2. Wrap it in a `BatchLogRecordProcessor` and attach it to a `LoggerProvider`. On Node / TypeScript pass the processor through the `processors: [...]` option on the `LoggerProvider` constructor — the legacy `addLogRecordProcessor()` method was removed in `@opentelemetry/sdk-logs` 0.x → 2.x. On Python use `logger_provider.add_log_record_processor(...)`.\n3. Register the provider globally:\n   - Node: `logs.setGlobalLoggerProvider(loggerProvider)` and `logs.getLogger('e2b').emit({...})` for each output line.\n   - Python: `_logs.set_logger_provider(logger_provider)` plus a `LoggingHandler(logger_provider=...)` attached to the `e2b` logger (not root) with `logger.propagate = False`. Records emitted via `logging.getLogger('e2b').info(...)` are exported as OTLP log records via that bridge; unrelated app logs are not forwarded.\n\n## Phase 4: Create the sandbox and stream output\n\n1. Create the sandbox with `Sandbox.create()` (Node and Python). The bare `Sandbox()` constructor in Python requires positional arguments for an existing sandbox and is not the right entrypoint for new sandboxes.\n2. Pass `onStdout` / `onStderr` callbacks to **`sandbox.runCode(code, { ... })`** — not to `Sandbox.create()`. The callbacks fire once per output line; emit an OTLP log record from each, with attributes `e2b.stream` (`\"stdout\"` or `\"stderr\"`) and `e2b.sandbox_id`.\n3. When the code passed to `runCode()` is JavaScript, set `language: 'javascript'` in the options. The E2B code interpreter defaults to Python; without the override, JS code is evaluated as Python and stdout is silently empty.\n\n## Phase 5: Teardown\n\nIn a `finally` block (or equivalent):\n\n1. Call `sandbox.kill()` so the sandbox does not idle against the team's concurrent-sandbox quota until E2B's default timeout expires.\n2. Call `loggerProvider.shutdown()` (or the Python equivalent) so the batch processor flushes any pending records before the process exits.\n\nFollow the onboarding code tabs verbatim — they encode every required option above.\n";var mp=()=>{};var Ip=`## Overview

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
`;var vp=()=>{};var kp=`# Fluent Bit Data Source Setup

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
`;var fp=()=>{};var wp=`## Overview

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
- Outbound HTTPS connectivity from your Fly organization to the Sazabi intake endpoint`;var $p=()=>{};var Op=`# Fly.io Data Source Setup

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
`;var _p=()=>{};var Tp=`## Overview

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
- A workspace admin to enable the integration in Sazabi settings`;var Sp=()=>{};var Ap=`# GCP Data Source Setup

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
`;var Pp=()=>{};var Np=`## Overview

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
`;var Dp=()=>{};var Cp=`# Grafana Alloy Data Source Setup

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
`;var Lp=()=>{};var zp=`## Overview

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
`;var xp=()=>{};var Ep=`# Inngest Data Source Setup

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
`;var jp=()=>{};var Rp=`## Overview

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
- Supported Python or TypeScript/JavaScript runtime with an OpenTelemetry SDK available`;var Up=()=>{};var Fp=`# LangChain Data Source Setup

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
`;var Kp=()=>{};var Bp=`## Overview

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
`;var Gp=()=>{};var Mp="# Mastra Data Source Setup\n\nExport Mastra observability spans/logs by pointing `@mastra/otel-exporter` at Sazabi’s Mastra OTLP ingest host.\n\n## Phase 1: Environment variables\n\nSet (values come directly from dashboard copy helpers):\n\n| Variable | Purpose |\n|---------|---------|\n| `SAZABI_INTAKE_URL` | Must be `https://mastra.{projectRegion}.intake.{intakeDomain}/v1/traces` |\n| `SAZABI_API_KEY` | Raw **`{publicKey}`** (distinct from Bearer prefix; code adds Bearer if needed—match template you adopt) |\n\n## Phase 2: Mastra Observability bootstrap\n\nPut the snippet in `src/mastra/index.ts` (the canonical Mastra entry; `mastra build` and `mastra studio deploy` only look here, `mastra dev` accepts `--dir` as an override). The `mastra` binding **must be exported** — Mastra's generated dev/build entry does `import { mastra } from '#mastra'`, and an unexported `const mastra` fails the build with `MISSING_EXPORT`.\n\nInstantiate `Observability` with an `OtelExporter` referencing `process.env.SAZABI_INTAKE_URL` and Bearer headers wired to `process.env.SAZABI_API_KEY`, per the Mastra snippets in-dashboard:\n\n```typescript\n// src/mastra/index.ts\nimport { Mastra } from \"@mastra/core\";\nimport { OtelExporter } from \"@mastra/otel-exporter\";\nimport { Observability } from \"@mastra/observability\";\n\nexport const mastra = new Mastra({\n  observability: new Observability({\n    configs: {\n      default: {\n        serviceName: \"my-mastra-app\",\n        exporters: [\n          new OtelExporter({\n            provider: {\n              custom: {\n                endpoint: process.env.SAZABI_INTAKE_URL,\n                protocol: \"http/json\",\n                headers: {\n                  Authorization: `Bearer ${process.env.SAZABI_API_KEY}`,\n                },\n              },\n            },\n          }),\n        ],\n      },\n    },\n  }),\n});\n```\n\nMatch `protocol`, headers, and path suffix to what the onboard wizard emits.\n\n## Phase 3: Verify\n\nRun Mastra workloads (agents/tools) generating spans; inspect Sazabi for OTLP payloads tagged with Mastra adapters.\n";var Hp=()=>{};var Vp=`## Overview

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
- A short, stable \`service.name\` to identify this project's logs in Sazabi`;var Jp=()=>{};var Wp=`# Neon Data Source Setup

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
`;var qp=()=>{};var Xp=`## Overview

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
- Site-level permissions to configure Log Drains under Logs & Metrics in the Netlify site dashboard`;var Yp=()=>{};var Qp=`# Netlify Data Source Setup

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
`;var Zp=()=>{};var tv=`## Overview

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
- Note: prompt and completion content is withheld when OpenRouter's Privacy Mode is active`;var ev=()=>{};var ov=`# OpenRouter Data Source Setup

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
`;var rv=()=>{};var iv=`## Overview

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
`;var nv=()=>{};var cv=`# OpenTelemetry (Generic) Data Source Setup

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
`;var av=()=>{};var uv=`## Overview

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
`;var lv=()=>{};var gv=`# OpenTelemetry Collector Data Source Setup

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
`;var hv=()=>{};var dv=`## Overview

Forward your PostHog events directly to Sazabi for real-time observability and AI-powered analysis. Use PostHog's CDP HTTP Webhook destination to stream product analytics and error events into your project.

## How it works

Configure an HTTP Webhook destination in PostHog Data Pipeline > Destinations and point it to your Sazabi intake URL. PostHog sends a JSON payload for each matching event, and Sazabi transforms it into OTEL logs for search, alerting, and investigation.

## Features

- Event delivery via PostHog's HTTP Webhook destination in Data Pipeline
- Per-event filtering to control which PostHog events are forwarded to Sazabi
- Full event and person properties included in each payload for rich observability context

## Requirements

- PostHog workspace with access to CDP / Data Pipeline destinations (paid PostHog feature)
- Permissions to create and configure HTTP Webhook destinations in PostHog Data Pipeline > Destinations`;var sv=()=>{};var yv='---\nname: posthog-data-source-setup\ndescription: Connect a PostHog organization to a Sazabi project so PostHog events stream into Sazabi via auto-provisioned CDP HTTP-webhook destinations. Use when the user wants to "connect PostHog", "ingest PostHog events", "add a PostHog data source", or after running `sazabi data-sources skill --type posthog`. Drives the Sazabi CLI (`data-sources connections create` + `data-sources streams create`) plus direct calls to PostHog\'s REST API for project discovery and scope validation; stream creation triggers the backend to POST to `/api/projects/{id}/hog_functions/` and mint a Sazabi public key.\n---\n\n# PostHog Data Source Setup\n\nWalk the user through connecting a PostHog organization to a Sazabi project using a **personal API key** (`phx_...`). The Sazabi backend installs a CDP HTTP-webhook destination (hog function) on each selected PostHog project and mints a per-stream public key. Prefer this native flow. The legacy "manual webhook" flow (user hand-creates an HTTP Webhook destination in PostHog) is out of scope for this skill.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating the personal API key in PostHog, choosing the Sazabi project, or picking PostHog projects. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, entering the personal API key, picking PostHog projects.\n- Never echo `POSTHOG_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to PostHog\'s REST API in Phase 2 and Phase 3.\n\nConfirm CLI auth:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf unauthenticated, run `$SAZABI_CLI auth login` (browser) or `$SAZABI_CLI auth save <token>` (paste an existing session token or secret key). Do not print tokens.\n\nThe user needs:\n\n1. A Sazabi project to receive PostHog events.\n2. A PostHog account with admin access to the projects they want to forward, on either **US Cloud** (`us.posthog.com`) or **EU Cloud** (`eu.posthog.com`).\n3. A PostHog plan that includes **CDP / Data Pipeline destinations** (hog functions) — this is a paid PostHog feature.\n4. A browser to create a personal API key.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the PostHog events? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing PostHog connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type posthog --json\n```\n\nIf a PostHog connection already exists for the same organization the user wants to onboard, reuse its `id` as `POSTHOG_CONNECTION_ID` and skip token creation (Phase 2) and connection creation (Phase 4) — but still run Phase 3 to discover and select the PostHog projects to create streams for. The user must paste a personal API key with `project:read` (and `hog_function:write` for stream provisioning) so Phase 3 can list projects; the existing connection\'s stored token is encrypted and not retrievable. Once the new project selection is captured in `POSTHOG_PROJECTS`, jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same PostHog organization (the backend dedupes by `region + organizationId + token`).\n\n## Phase 2: Create the PostHog personal API key\n\nDirect the user to create a personal API key. PostHog hosts US and EU Cloud separately; pick the one their organization lives on.\n\n> Open **PostHog → Settings → Personal API keys**:\n>\n> - US Cloud: **https://us.posthog.com/settings/user-api-keys**\n> - EU Cloud: **https://eu.posthog.com/settings/user-api-keys**\n>\n> Click **Create personal API key**.\n>\n> - **Label**: `Sazabi`\n> - **Scopes** (all three are required):\n>   - `project:read` — enumerate projects in the stream selector\n>   - `organization:read` — resolve the organization name shown alongside projects\n>   - `hog_function:write` — install the webhook destination on each project\n> - **Scoped organizations / projects**: leave unrestricted, or restrict to the organization the user wants to onboard.\n>\n> PostHog displays the key (`phx_...`) only once. If the user dismisses the dialog without copying it, they must create a new key.\n\n`AskUserQuestion`: ask the user to paste the personal API key. Capture it as `POSTHOG_TOKEN`.\n\n### Validate the token and resolve region + organization\n\nThe Sazabi backend probes US then EU using the token to discover which region it belongs to and which organization it grants access to. Reproduce that probe with `curl` so the agent has the values it needs for Phase 4. The token may be on either region; try US first, fall back to EU on `401`/`403`.\n\n```sh\nposthog_probe() {\n  local region="$1"\n  curl -fsS \\\n    -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n    "https://${region}.posthog.com/api/projects/@current/"\n}\n\nif PROJECT_JSON=$(posthog_probe us 2>/dev/null); then\n  POSTHOG_REGION="us"\nelif PROJECT_JSON=$(posthog_probe eu 2>/dev/null); then\n  POSTHOG_REGION="eu"\nelse\n  echo "PostHog token rejected on both US and EU." >&2\n  exit 1\nfi\n\nPOSTHOG_ORGANIZATION_ID=$(jq -r \'.organization\' <<<"$PROJECT_JSON")\nPOSTHOG_ORGANIZATION_NAME=$(curl -fsS \\\n  -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://${POSTHOG_REGION}.posthog.com/api/organizations/${POSTHOG_ORGANIZATION_ID}/" \\\n  | jq -r \'.name\')\n```\n\nIf the probe fails on both regions: the key was revoked, copied incorrectly, or lacks `project:read`. Have the user create a new key with the three required scopes and rerun this phase. Do not print `POSTHOG_TOKEN` in any error output.\n\n### Verify all three scopes\n\n`project:read` is implied by the successful probe above. Verify `organization:read` succeeded (`POSTHOG_ORGANIZATION_NAME` is non-empty) and confirm `hog_function:write` is on the key — stream creation will fail later if it is missing.\n\n```sh\ncurl -fsS \\\n  -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://${POSTHOG_REGION}.posthog.com/api/personal_api_keys/@current/" \\\n  | jq -e \'.scopes | index("hog_function:write") or index("*")\'\n```\n\nIf the check exits non-zero, the key is missing `hog_function:write`. Have the user edit the key in PostHog to add that scope (or recreate it) and rerun this phase.\n\n## Phase 3: Discover and pick PostHog projects\n\nList the PostHog projects the token can see. The stream selector flow in the dashboard calls Sazabi\'s `list-projects` action, which requires a created connection — but here we\'re discovering before connection creation, so call PostHog\'s REST API directly.\n\nPostHog `/api/projects/` is paginated using DRF-style `{ count, next, previous, results }`. Follow `next` until it is `null` so orgs with more than one page of projects are fully enumerated.\n\n```sh\nPOSTHOG_PROJECTS_JSON=\'[]\'\nNEXT_URL="https://${POSTHOG_REGION}.posthog.com/api/projects/?limit=200"\nwhile [ -n "$NEXT_URL" ] && [ "$NEXT_URL" != "null" ]; do\n  PAGE=$(curl -fsS -H "Authorization: Bearer $POSTHOG_TOKEN" "$NEXT_URL")\n  POSTHOG_PROJECTS_JSON=$(jq -c \\\n    --argjson acc "$POSTHOG_PROJECTS_JSON" \\\n    \'($acc + (.results // . | [.[] | {id: (.id | tostring), name}]))\' \\\n    <<<"$PAGE")\n  NEXT_URL=$(jq -r \'.next // empty\' <<<"$PAGE")\ndone\njq \'.\' <<<"$POSTHOG_PROJECTS_JSON"\n```\n\n`AskUserQuestion`: which PostHog projects should Sazabi forward events from?\n\nBuild `POSTHOG_PROJECTS` as a list of `(posthogProjectId, posthogProjectName)` pairs. Reuse the exact `id` (stringified) and `name` returned by PostHog — do not invent or reformat them. Each selected project becomes one Sazabi stream and one PostHog hog function.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection. The metadata schema requires `posthogPersonalApiKey`, `posthogApiRegion`, `posthogOrganizationId`, and `connectionMode: "native"`; `posthogOrganizationName` is optional but recommended for the dashboard.\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token   "$POSTHOG_TOKEN" \\\n  --arg region  "$POSTHOG_REGION" \\\n  --arg orgId   "$POSTHOG_ORGANIZATION_ID" \\\n  --arg orgName "$POSTHOG_ORGANIZATION_NAME" \\\n  \'{\n    posthogPersonalApiKey: $token,\n    posthogApiRegion: $region,\n    posthogOrganizationId: $orgId,\n    posthogOrganizationName: $orgName,\n    connectionMode: "native"\n  }\')\n\nPOSTHOG_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type posthog \\\n  --metadata "$METADATA_JSON" \\\n  --json | jq -r \'.connectionId\')\n```\n\nThe connection persists the encrypted personal API key plus the resolved region and organization. It does **not** install any hog functions on its own — that happens per stream in Phase 5.\n\nIf the CLI reports `duplicate connection` or a connection-identity collision, an existing PostHog connection already covers this `(region, organizationId, token)` triple — reuse its `id` from `connections list --type posthog --json` and continue from Phase 5.\n\n## Phase 5: Create one stream per PostHog project\n\nFor each entry in `POSTHOG_PROJECTS`, call `streams create`. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the backend\'s `provisionStream` for `posthog` — that mints a Sazabi public key scoped to the stream, then POSTs to `https://${POSTHOG_REGION}.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/hog_functions/` with `template_id: "template-webhook"` pointed at Sazabi\'s intake URL.\n\n```sh\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$POSTHOG_CONNECTION_ID" \\\n  --display-name "$POSTHOG_PROJECT_NAME" \\\n  --config "$(jq -nc \\\n    --arg id   "$POSTHOG_PROJECT_ID" \\\n    --arg name "$POSTHOG_PROJECT_NAME" \\\n    \'{posthogProjectId: $id, posthogProjectName: $name}\')" \\\n  --json\n```\n\nReuse the exact `id` (stringified) and `name` returned by PostHog\'s `/api/projects/` response for `posthogProjectId` and `posthogProjectName`. Field names are case-sensitive.\n\nIf a stream creation fails on duplicate display name, append a suffix (e.g. `"$POSTHOG_PROJECT_NAME (events)"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nHog-function provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id "$POSTHOG_CONNECTION_ID" --json\n```\n\nEach stream transitions from `pending` (or `provisioning`) to `active` once the backend finishes calling PostHog\'s `/api/projects/{id}/hog_functions/` endpoint. The stream\'s `config.posthogHogFunctionId` is populated on success. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that PostHog project and surface it to the user — the Temporal activity log holds the underlying error.\n\n**Pass 2 — telemetry arrival.** Hog functions only emit events when the PostHog project receives matching captures. Either trigger an event (`$pageview`, custom capture) or wait for natural traffic, then tail:\n\n```sh\n$SAZABI_CLI logs tail --json --search posthog\n```\n\nConfirm new records arrive tagged with the corresponding `posthogProjectName`. If nothing appears within a few minutes of triggering an event, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `POSTHOG_CONNECTION_ID` and the resolved `$POSTHOG_REGION` + `$POSTHOG_ORGANIZATION_NAME`.\n- One line per stream: PostHog project name, current status, and (if active) the `posthogHogFunctionId`.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored out (non-`active`, non-`pending`, non-`provisioning`), call out the failed PostHog project name and offer to recreate just that stream.\n\nDo not include `POSTHOG_TOKEN` in the summary.\n\n## Troubleshooting\n\n### Invalid or expired personal API key\n\nThe key may have been revoked, copied incorrectly, or expired. Recreate at the region-specific URL (`https://${POSTHOG_REGION}.posthog.com/settings/user-api-keys`) with the three required scopes and rerun Phase 2. The Sazabi connection still exists with a stale key — delete it (`data-sources connections delete <id>` if your CLI version supports it) and rerun from Phase 4, or update the connection metadata if `connections update` is available (`$SAZABI_CLI data-sources connections -h`).\n\n### Stream creation fails with `403` / "Insufficient permissions"\n\nThe personal API key is missing `hog_function:write`, or the user lacks admin access to that PostHog project. Verify the scope check at the end of Phase 2 passes, and confirm the user has at least Member (Admin recommended) access to the PostHog project. Recreate the key with the correct scope if needed.\n\n### Stream creation fails with `402` / "CDP destinations require a paid plan"\n\nHog functions / CDP destinations are a paid PostHog feature. The user must upgrade the PostHog organization billing plan before provisioning will succeed. The Sazabi connection and the failed stream can be deleted before retry; or leave them and provisioning will succeed next time it is retried.\n\n### Wrong region resolved\n\nThe probe in Phase 2 tries US first, EU second. A key that exists on **EU Cloud** but is rejected on US with a `401`/`403` will fall through correctly. If the probe returns a `5xx` on US, it short-circuits without trying EU — in that case retry the probe manually against EU only:\n\n```sh\ncurl -fsS -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://eu.posthog.com/api/projects/@current/"\n```\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No events arriving after streams are `active`\n\nA hog function that is `active` on the Sazabi side does not emit events unless the PostHog project receives captures matching the destination\'s filters. Trigger a real `$pageview` or `capture` event against the PostHog project. Confirm the hog function is enabled in PostHog → **Data Pipeline → Destinations** (look for `Sazabi — <project> (<prefix>)`).\n\n### Manual webhook destination already exists\n\nIf the user previously hand-created an HTTP Webhook destination in PostHog (the legacy manual flow), it will keep forwarding to Sazabi independently of this connection — this skill\'s native flow installs a **separate** hog function. Either delete the manual destination in PostHog before running this skill (to avoid duplicate events) or leave both in place if intentional.\n';var bv=()=>{};var pv=`## Overview

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
- Minimal applications may require an explicit bootstrap file, preload flag, or wrapper command so the SDK initializes with the service`;var mv=()=>{};var Iv=`# Railway Data Source Setup

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
`;var vv=()=>{};var kv=`## Overview

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
- Workspace admin access in Sazabi to enable the integration`;var fv=()=>{};var wv=`# Render Data Source Setup

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
`;var $v=()=>{};var Ov=`## Overview

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
`;var _v=()=>{};var Tv=`# Sentry SDK Data Source Setup

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
`;var Sv=()=>{};var Av=`## Overview

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
- Works on all Sentry plans. Per-event \`error\` delivery (Sentry Business plan and up) is not currently used; \`issue\` events cover new error groupings on every plan.`;var Pv=()=>{};var Nv='# Sentry Platform Data Source Setup\n\nConnect a Sentry organization to a Sazabi project via Sazabi-managed **Sentry Internal Integration**. Sazabi creates the Internal Integration in the user\'s Sentry org, subscribes it to `issue` and `comment` webhooks, and registers it as an alertable destination for Issue/Metric Alert rules. Use the Sazabi CLI (`data-sources connections create --type sentry_platform`); the provisioning, public-key minting, and webhook URL are handled server-side. This source has `streamCardinality: "single"` — creating the connection auto-provisions exactly one stream. Do **not** call `streams create` manually.\n\nThis skill covers the Sentry Platform (webhook) source. It is distinct from the **Sentry SDK** source (`sentry`), which forwards SDK telemetry via a swapped DSN. Pick this one when the user wants Sentry issues, comments, and alerts streamed to Sazabi.\n\n**Principle:** Do the work. Only pause when the user must act: minting a Sentry auth token in the browser, choosing the Sazabi project, or confirming a policy decision.\n\n<important>\nUse AskUserQuestion only for user-owned boundaries: choosing the Sazabi project, pasting the Sentry auth token, providing the organization slug, and confirming the Sentry user has Owner/Manager role.\n</important>\n\n## Phase 0: Preflight\n\nSelect the Sazabi CLI command prefix. Prefer the installed `sazabi` binary; fall back to `bunx @sazabi/cli` rather than asking the user to install globally.\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below.\n\nCheck authentication:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf unauthenticated, ask the user whether to authenticate via browser login or paste an existing token. Browser login: `$SAZABI_CLI auth login`. Token: `$SAZABI_CLI auth save <token>`. Do not echo the token back.\n\nCheck whether a Sentry Platform connection already exists for the active project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type sentry_platform --json\n```\n\nIf a connection already exists for the target Sentry organization, stop and tell the user setup is already complete. Re-running the create flow against the same organization will be rejected by `getConnectionIdentity` (which keys on `org:<organizationSlug>`).\n\n## Phase 1: Choose the Sazabi project\n\nIf the active project is already correct in context, reuse it. Otherwise list and select:\n\n```sh\n$SAZABI_CLI projects list --json\n$SAZABI_CLI projects use <project-id>\n```\n\nCapture the chosen project ID as `SAZABI_PROJECT_ID`.\n\n## Phase 2: Confirm the user has Owner or Manager role in Sentry\n\nCreating a Sentry Internal Integration requires the **`org:write`** scope, which Sentry only grants to users with **Owner** or **Manager** organization role. Admin, Member, and Billing roles cannot mint an `org:write` token regardless of the UI letting them check the scope box — Sentry will return `403` from `POST /api/0/sentry-apps/`.\n\nAskUserQuestion: Confirm the Sentry user is an **Owner** or **Manager** in the target Sentry organization. If they are an Admin/Member/Billing user, have an Owner or Manager run this setup instead.\n\n## Phase 3: Mint the Sentry auth token\n\nDirect the user to:\n\n> Open **https://sentry.io/settings/account/api/auth-tokens/new-token/** in your browser, then create a token with exactly these scopes:\n>\n> - **Organization: Read & Write** (`org:write`)\n> - **Project: Read** (`project:read`)\n> - **Issue & Event: Read** (`event:read`)\n>\n> Confirm the **Permissions Preview** at the bottom of the form shows `event:read, org:write, project:read` before clicking **Create Token**. The token is shown once — copy it immediately.\n\nAskUserQuestion: Paste the Sentry auth token you just created.\n\nCapture as `SENTRY_AUTH_TOKEN`. Do not print it back.\n\nAskUserQuestion: Paste the Sentry organization slug (the `<slug>` segment in `sentry.io/organizations/<slug>/`).\n\nCapture as `SENTRY_ORG_SLUG`. It must match `^[a-z0-9][a-z0-9-]*[a-z0-9]$` — lowercase letters, digits, and hyphens only.\n\n## Phase 4: Create the connection\n\nThe Sazabi CLI runs validation (`GET /api/0/organizations/<slug>/`) before persisting, then auto-provisions the single stream, which in turn mints a public key and creates the Internal Integration in Sentry with webhook URL `https://sentry-platform.<region>.intake.<domain>/v1/logs?api_key=<publicKey>`.\n\n```sh\nCONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\\n  --type sentry_platform \\\n  --metadata "$(jq -n \\\n    --arg token "$SENTRY_AUTH_TOKEN" \\\n    --arg slug "$SENTRY_ORG_SLUG" \\\n    \'{connectionMode: "native", sentryAuthToken: $token, organizationSlug: $slug}\')" \\\n  --json)\n\nCONNECTION_ID=$(printf \'%s\' "$CONNECTION_JSON" | jq -r \'.connectionId\')\n```\n\nDo **not** also run `data-sources streams create`. `streamCardinality: "single"` causes the connection-create flow to provision the one stream automatically.\n\nHandle expected failures here:\n\n- **`401 Invalid auth token`**: the token was mistyped, revoked, or lacks the required scopes. Re-mint at the URL in Phase 3 and retry.\n- **`403 ... org:write scope ... Owner or Manager`**: the Sentry user is not an Owner/Manager. Restart from Phase 2 with a qualified user.\n- **`404 Organization not found`**: re-check `SENTRY_ORG_SLUG` against `sentry.io/organizations/<slug>/`. Do not invent it — Sentry slugs are lowercase and may differ from the display name.\n- **Duplicate connection error**: a connection already exists for `org:<SENTRY_ORG_SLUG>` in this project. Run `connections list --type sentry_platform --json` to find it; reuse or delete it before retrying.\n\n## Phase 5: Verify and report\n\nInspect the connection and its stream:\n\n```sh\n$SAZABI_CLI data-sources connections get "$CONNECTION_ID" --json\n$SAZABI_CLI data-sources streams list --connection-id "$CONNECTION_ID" --json\n```\n\nThe single stream should appear with a `status` that transitions to `active` once provisioning finishes. The stream\'s `config` will then contain `sentryAppSlug` (the Internal Integration\'s slug in Sentry) and `publicKeyId`.\n\nTrigger a real signal to confirm end-to-end delivery. Any of these will fire a webhook:\n\n- In Sentry, open any Issue and add a comment, change status, assign, or resolve it.\n- Or trigger a fresh exception in an instrumented Sentry project to create a new issue.\n\nTail Sazabi logs for the project while the user performs the action:\n\n```sh\n$SAZABI_CLI logs tail --services sentry-platform-intake --json\n```\n\nSuccessful delivery shows entries with `sentry.webhook.resource` of `issue` or `comment` and `sentry.webhook.action` populated.\n\nSummarize the result for the user:\n\n- The `connectionId`.\n- That a single stream was auto-provisioned and is forwarding `issue` and `comment` webhooks.\n- That **Issue Alert** and **Metric Alert** webhooks are opt-in: the user must edit each Sentry alert rule in **Alerts** and add the integration (named `Sazabi (<stream display name>)`) as a notification destination. Without that step, `event_alert` and `metric_alert` deliveries will not arrive even though the integration is `isAlertable`.\n\nNever print `SENTRY_AUTH_TOKEN` or the minted public key in the summary.\n\n## Troubleshooting\n\n### Token works but no webhooks arrive\n\nVerify the Internal Integration exists in Sentry at **Settings → Developer Settings → Custom Integrations**. The name will be `Sazabi (<stream display name>)`. If it is missing, the provisioning step failed silently — check `streams list` for `status = error` and `errorMessage` to see the underlying Sentry API response.\n\n### Alert webhooks (`event_alert` / `metric_alert`) never fire\n\nThese are not subscribed automatically. The user must add the Sazabi integration as a notification action on each alert rule in Sentry under **Alerts → <rule> → Edit → Then perform these actions**. Issue and comment webhooks are unaffected and arrive regardless.\n\n### `403` on every Sentry call despite Owner role\n\nConfirm the token is a **user auth token** minted from **Account → API → Auth Tokens**, not an organization-scoped DSN or a deploy key. Internal Integration auth tokens cannot mint other Internal Integrations.\n\n### Connection persisted but stream stuck in `pending`\n\nProvisioning runs in a Temporal workflow. Wait 30 seconds and re-run `streams list`. If still pending after a minute, the workflow likely errored — surface `errorMessage` and retry by deleting the connection and re-running Phase 4.\n';var Dv=()=>{};var Cv=`## Overview

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
- Ability to add custom HTTP headers when configuring the OTLP destination`;var Lv=()=>{};var zv=`# Supabase Data Source Setup

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
`;var xv=()=>{};var Ev="## Overview\n\nForward OpenTelemetry logs and traces from your Temporal worker processes to Sazabi to observe durable workflow execution. Works for both Temporal Cloud and self-hosted clusters — everything is configured inside the worker process, not in the Temporal control plane.\n\n## How it works\n\nAdd the OpenTelemetry SDK to each Temporal worker. The OTel SDK reads the `OTEL_EXPORTER_OTLP_*` environment variables you set on the worker and exports telemetry to the Sazabi intake. Workflow- and activity-level traces are produced by registering Temporal's official OpenTelemetry tracing interceptor (`temporalio.contrib.opentelemetry.TracingInterceptor` in Python, `OpenTelemetryWorkflowClientInterceptor` in TypeScript, `tracing.NewTracingInterceptor` in Go, `Temporalio.Extensions.OpenTelemetry` in .NET).\n\nWorker-emitted metrics (such as `temporal_workflow_task_execution_latency` and `temporal_worker_task_slots_available`) are configured separately on the Temporal SDK runtime and are not currently ingested by this integration.\n\n## Features\n\n- OpenTelemetry logs and traces from Temporal worker processes.\n- Workflow- and activity-level spans through Temporal's official tracing interceptors.\n- Support for Temporal Cloud and self-hosted clusters without control-plane changes.\n\n## Requirements\n\n- Permission to deploy worker code that initializes the OpenTelemetry SDK.\n- Access to install and configure the OpenTelemetry SDK and Temporal tracing interceptor for your worker language.\n- Metrics emitted by Temporal workers are configured separately and are not currently stored by this integration; logs and traces are supported.\n";var jv=()=>{};var Rv=`# Temporal Data Source Setup

Forward OpenTelemetry logs and traces from your **Temporal worker processes** (self-hosted or long-lived workers connecting to Temporal Cloud) to Sazabi. The Temporal control plane is not modified — everything is configured in worker code and worker environment variables.

## Phase 1: Project connection

Create the Temporal manual integration in Sazabi and capture the **Sazabi public key** plus the OTLP endpoint string from the setup panel.

## Phase 2: Worker environment

For each Temporal worker binary:

1. Add the OpenTelemetry SDK to the worker process (e.g. \`@opentelemetry/sdk-node\` / \`opentelemetry-sdk\` / Go \`go.opentelemetry.io/otel\`). The Temporal SDK itself does not read \`OTEL_EXPORTER_OTLP_*\` env vars — those are consumed by the OpenTelemetry SDK you initialize alongside it.
2. To capture workflow and activity spans, register Temporal's OpenTelemetry tracing interceptor on both the client and worker:
   - **Python**: \`temporalio.contrib.opentelemetry.TracingInterceptor\`.
   - **TypeScript**: \`@temporalio/interceptors-opentelemetry\`'s \`OpenTelemetryPlugin\`. Pass \`new OpenTelemetryPlugin({ resource, spanProcessor })\` via the \`plugins\` option on both the \`Client\` and the \`Worker\` (and \`bundleWorkflowCode\` if prebundling workflows). The plugin auto-wires the workflow-side interceptors (\`OpenTelemetryInboundInterceptor\`, \`OpenTelemetryOutboundInterceptor\`, \`OpenTelemetryInternalsInterceptor\`) and the \`makeWorkflowExporter\` sink — do not register them manually.
   - **Go**: \`go.temporal.io/sdk/contrib/opentelemetry.NewTracingInterceptor\`.
   - **.NET**: \`Temporalio.Extensions.OpenTelemetry.TracingInterceptor\`.
3. Set the following on each worker:
   - **\`OTEL_EXPORTER_OTLP_ENDPOINT\`**: \`https://temporal.{projectRegion}.intake.{intakeDomain}\`.
   - **\`OTEL_EXPORTER_OTLP_HEADERS\`**: \`Authorization=Bearer <sazabiPublicKey>\`.
   - **\`OTEL_EXPORTER_OTLP_PROTOCOL\`**: \`http/protobuf\`.

Restart workers after changing env vars.

## Phase 3: Operational notes

- Temporal Cloud users still run OTEL inside **their** workers; Temporal Cloud itself is not altered.
- The Sazabi intake accepts OTLP logs and traces. OTLP metrics posted to this endpoint are dropped — Temporal SDK worker metrics (Prometheus/\`Runtime.install\` telemetry) are not currently ingested.
- Confirm clock skew is normal and batches are permitted through corporate egress (HTTPS to \`*.intake.*\`).
`;var Uv=()=>{};var Fv=`## Overview

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
- Trigger.dev project must be redeployed after configuration changes take effect`;var Kv=()=>{};var Bv="# Trigger.dev Data Source Setup\n\nConfigure Trigger.dev as a **manual OTLP logs** data source. This source is not native: the user must edit `trigger.config.ts` and redeploy their Trigger.dev project.\n\n## Phase 1: Sazabi values\n\nCreate or open the Trigger.dev data source in Sazabi and copy the rendered values from the manual setup screen:\n\n- **Sazabi API key**: `{publicKey}`.\n- **Logs endpoint**: `https://trigger-dev.{projectRegion}.intake.{intakeDomain}/v1/logs`.\n\nTreat the key as a bearer secret and never echo the full value back in logs, commits, or chat transcripts.\n\n## Phase 2: Trigger.dev config\n\n1. Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns `trigger.config.ts`.\n2. Store the Sazabi public key as `SAZABI_API_KEY` in the Trigger.dev deployment environment.\n3. Add an `OTLPLogExporter` to `telemetry.logExporters` in `trigger.config.ts`.\n4. Redeploy the Trigger.dev project.\n\nDo not set `OTEL_*` environment variables for this integration. Trigger.dev reserves those variables for internal telemetry, so configure the log exporter in code.\n\n## Phase 3: Out of scope\n\nUse this data source for logs only. Do not configure Trigger.dev alert webhooks, management API polling, trace retrieval, trace exporters, or metrics exporters as the primary Sazabi data source for this setup.\n\n## Phase 4: Verify\n\nTrigger a task that emits logs and confirm new records arrive in Sazabi for the project. If nothing appears, re-check that the URL includes `/v1/logs`, the `Authorization` header is `Bearer <publicKey>`, and the redeployed config uses `telemetry.logExporters`.\n";var Gv=()=>{};var Mv=`## Overview

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
`;var Hv=()=>{};var Vv=`# Vector Data Source Setup

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
`;var Jv=()=>{};var Wv=`## Overview

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
- Web Analytics enabled in Vercel for projects where you create analytics drains.`;var qv=()=>{};var Xv='---\nname: vercel-data-source-setup\ndescription: Connect Vercel projects to a Sazabi project so deployment logs, OpenTelemetry traces, and Web Analytics events stream into Sazabi. Use when the user wants to "connect Vercel", "set up Vercel logs/traces in Sazabi", "ingest Vercel telemetry", "add a Vercel data source", or after running `sazabi data-sources skill --type vercel`. Drives the Sazabi CLI (`data-sources connections create` + `data-sources streams create`) plus direct calls to Vercel\'s REST API for project discovery; stream creation triggers the backend\'s drain provisioner which calls Vercel\'s `/v1/drains` endpoint.\n---\n\n# Vercel Data Source Setup\n\nWalk the user through connecting Vercel projects to a Sazabi project using the Sazabi CLI for all Sazabi-side operations and direct calls to Vercel\'s REST API for Vercel-side project discovery. Creating a stream via `sazabi data-sources streams create` enqueues a Temporal activity that calls Vercel\'s `/v1/drains` API for that project — there is no separate "provision drains" command.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating a token in the Vercel UI, choosing the Sazabi project, picking Vercel projects, or picking a drain type. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, entering the API token, picking Vercel projects, or picking a drain type.\n- Never echo `VERCEL_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to Vercel\'s REST API in Phase 3.\n\nThe user needs:\n\n1. A Sazabi project to receive the Vercel telemetry.\n2. A Vercel team on the **Pro** or **Enterprise** plan. Drains are not available on Hobby or Pro Trial — see https://vercel.com/docs/drains#usage-and-pricing.\n3. A Vercel account with access to the projects they want to monitor.\n4. A browser to create a Vercel API token.\n5. Web Analytics enabled in Vercel for any project where they want analytics events.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the Vercel telemetry? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing Vercel connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type vercel --json\n```\n\nIf a Vercel connection already exists that targets the Vercel scope (team or personal account) the user wants to onboard, reuse its `id` as `VERCEL_CONNECTION_ID` and skip Phase 2 and Phase 4 — jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same Vercel scope.\n\n## Phase 2: Create and capture the Vercel token\n\nDirect the user to create a token:\n\n> Open **https://vercel.com/account/tokens** and click **Create Token**.\n>\n> - **Token Name**: `Sazabi`\n> - **Scope**: Select the team you want to monitor, or **Full Account** for personal accounts.\n> - **Expiration**: Choose per security policy. No expiration is acceptable for automation.\n>\n> Vercel only displays the token once. If the user closes the dialog without copying it, they must create a new token.\n\n`AskUserQuestion`: ask the user to paste the API token. Capture it as `VERCEL_TOKEN`.\n\nSanity-check the token before discovering projects:\n\n```sh\ncurl -fsS -H "Authorization: Bearer $VERCEL_TOKEN" https://api.vercel.com/v2/user >/dev/null \\\n  && echo "ok" || echo "invalid"\n```\n\nIf `invalid`, the token was revoked, copied incorrectly, or expired. Have the user create a new token and retry. Do not print `VERCEL_TOKEN` in any error output.\n\n## Phase 3: Discover and pick Vercel projects\n\nThe Sazabi CLI does not enumerate Vercel projects — call Vercel\'s REST API directly with `VERCEL_TOKEN`. Both endpoints are paginated and return `{ pagination: { next, ... } }`; iterate until `next` is null/missing or accounts with more than 100 projects/teams will be silently truncated.\n\n```bash\n# Iterate a Vercel paginated endpoint. $1 = base URL, $2 = cursor param name\n# (`from` for /v10/projects, `until` for /v2/teams). Emits one JSON page per line.\nvercel_paginate() {\n  local url="$1" param="$2" page next\n  while :; do\n    page=$(curl -fsS -H "Authorization: Bearer $VERCEL_TOKEN" "$url") || return 1\n    printf \'%s\\n\' "$page"\n    next=$(jq -r \'.pagination.next // empty\' <<<"$page")\n    [ -z "$next" ] && break\n    url="${1}&${param}=${next}"\n  done\n}\n\n# Teams the token can access; cache for the per-team loop below.\nTEAMS_JSON=$(vercel_paginate "https://api.vercel.com/v2/teams?limit=100" until \\\n  | jq -s \'[.[].teams[]]\')\necho "$TEAMS_JSON" | jq \'.[] | {id, name, slug}\'\n\n# Personal-account projects (no teamId param).\nvercel_paginate "https://api.vercel.com/v10/projects?limit=100" from \\\n  | jq -s \'[.[].projects[]] | .[] | {id, name, framework}\'\n\n# Projects per discovered team.\necho "$TEAMS_JSON" | jq -r \'.[] | "\\(.id)\\t\\(.name)"\' \\\n  | while IFS=$\'\\t\' read -r TEAM_ID TEAM_NAME; do\n      vercel_paginate "https://api.vercel.com/v10/projects?limit=100&teamId=$TEAM_ID" from \\\n        | jq -s --arg team "$TEAM_NAME" \'[.[].projects[]] | .[] | {id, name, framework, team: $team}\'\n    done\n```\n\nGroup the results: under each `team.name` for team-scoped projects, and under **Personal account** for projects with no `teamId`.\n\nResolve the connection scope:\n\n- If every project the user wants to onboard belongs to the same non-personal team, capture `VERCEL_TEAM_ID` and `VERCEL_TEAM_NAME` from that team\'s record. The Sazabi connection will be scoped to that team.\n- If the user only wants personal-account projects, leave `VERCEL_TEAM_ID` and `VERCEL_TEAM_NAME` unset.\n- If the user wants projects across multiple teams or across team + personal scopes, plan **one Sazabi connection per scope** — repeat Phase 4 and Phase 5 for each.\n\n`AskUserQuestion`: which Vercel projects should Sazabi connect?\n\nFor each selected project, ask which drain type to create. Each `(project, drainType)` pair becomes one Sazabi stream.\n\n| Drain type | Stream config fields                                  |\n| ---------- | ----------------------------------------------------- |\n| Logs       | `drainType: "logs"`, `ingestTraces: false`            |\n| Traces     | `drainType: "traces"`, `ingestTraces: true`           |\n| Analytics  | `drainType: "analytics"` (omit `ingestTraces`)        |\n\nMultiple drain types per project are supported — each drain type creates a separate stream and a separate Vercel drain.\n\nDo not pass a narrowed `sources` array for log streams. The backend overwrites the Vercel-side drain filter with the full source set (`static, lambda, edge, build, external, firewall, redirect`) at provision time, so narrowing has no effect on what Vercel forwards. Omit `sources` from the stream config.\n\nBuild `VERCEL_PROJECTS` as a list of `(vercelProjectId, vercelProjectName, drainType)` triples for use in Phase 5.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection:\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token "$VERCEL_TOKEN" \\\n  --arg teamId "${VERCEL_TEAM_ID:-}" \\\n  --arg teamName "${VERCEL_TEAM_NAME:-}" \\\n  \'{vercelApiToken: $token}\n   + (if $teamId  != "" then {vercelTeamId:  $teamId } else {} end)\n   + (if $teamName != "" then {vercelTeamName: $teamName} else {} end)\')\n\nVERCEL_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type vercel \\\n  --metadata "$METADATA_JSON" \\\n  --json | jq -r \'.connectionId\')\n```\n\nThe connection persists the (encrypted) token and team scope. It does **not** provision any Vercel drains on its own — drain creation happens per stream in Phase 5.\n\n## Phase 5: Create one stream per (project, drainType)\n\nFor each entry in `VERCEL_PROJECTS`, build a stream config and call `streams create`. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the backend\'s `provisionStream` for vercel — which in turn POSTs to Vercel\'s `/v1/drains` API.\n\n```sh\n# Logs stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "logs", ingestTraces: false}\')" \\\n  --json\n\n# Traces stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME (traces)" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "traces", ingestTraces: true}\')" \\\n  --json\n\n# Analytics stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME (analytics)" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "analytics"}\')" \\\n  --json\n```\n\nReuse the exact `id` and `name` values returned by Vercel\'s API for `vercelProjectId` and `vercelProjectName`. Do not invent or reformat them.\n\nIf a stream creation fails because of a duplicate display name, append the drain type (e.g. `"$VERCEL_PROJECT_NAME (logs)"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nDrain provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id "$VERCEL_CONNECTION_ID" --json\n```\n\nEach stream\'s status transitions from `pending` (or `provisioning`) to `active` once the backend finishes calling Vercel\'s `/v1/drains`. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that project and surface it to the user — the Temporal activity log will have the underlying error, but the agent doesn\'t have direct access to it from this skill.\n\n**Pass 2 — telemetry arrival.** Drains only emit data when the underlying Vercel project receives traffic. Either trigger traffic (deploy, redeploy, hit a route, navigate a Web Analytics-instrumented page) or wait for natural traffic, then:\n\n```sh\n$SAZABI_CLI logs tail --json --search vercel\n```\n\nConfirm new records arrive tagged with the corresponding `vercelProjectName`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `VERCEL_CONNECTION_ID`.\n- One line per stream: project name, drain type, current status.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored out (you can detect this via a non-`active`, non-`pending`, non-`provisioning` status), call out the failed project name and offer to recreate just that stream.\n\nDo not include `VERCEL_TOKEN` in the summary.\n\n## Troubleshooting\n\n### Invalid or expired Vercel token\n\nThe token may have been revoked, copied incorrectly, or expired. Recreate at https://vercel.com/account/tokens and rerun Phase 2. The connection record still exists with a now-stale token — either delete it and rerun the skill from Phase 4, or update the connection metadata if your Sazabi CLI version supports `connections update` (check `$SAZABI_CLI data-sources connections -h`).\n\n### Token has no access to expected projects\n\nVercel API tokens are scoped to a team or to the personal account at creation time. If the desired projects are missing from the `/v10/projects` response in Phase 3, the token was created under the wrong scope. Have the user create a new token while scoped to the correct team and rerun from Phase 2.\n\n### Stream config rejected by Sazabi\n\n`streams create` validates the `config` payload against the source\'s stream schema before insert. If the CLI returns a validation error, check that `vercelProjectId` and `vercelProjectName` are non-empty strings and `drainType` is one of `logs`, `traces`, `analytics`. Field names are case-sensitive.\n\n### Drains feature unavailable (Hobby / Pro Trial)\n\nIf `streams list` shows a stream stuck or errored, and the underlying error mentions a permissions or feature-availability issue, the Vercel team is on Hobby or Pro Trial. Drains require Pro or Enterprise — see https://vercel.com/docs/drains#usage-and-pricing. The user must upgrade the Vercel team. The connection record and the failed stream can be deleted before retry; or leave them and Vercel-side drain creation will succeed next time provisioning is retried.\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound; longer than that suggests the worker is unhealthy or the activity is throwing a non-retryable error. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No telemetry arriving after streams are `active`\n\nA drain that is `active` on the Sazabi side does not emit logs unless the Vercel project receives requests, builds, or Web Analytics events. Trigger real traffic against the Vercel project. For analytics specifically, confirm Web Analytics is enabled in the Vercel project\'s settings — drain creation succeeds even when analytics is disabled, and the drain will silently produce nothing.\n\n### Manual connection already exists without streams\n\nIf someone previously ran `sazabi data-sources connections create --type vercel` without the corresponding `streams create` calls, the connection exists but `streams list --connection-id <id>` returns empty. Reuse the existing `VERCEL_CONNECTION_ID` and continue from Phase 5 to add streams; do not create a second connection for the same Vercel scope.\n';var Yv=()=>{};var Zv,Qv;var eI=d(()=>{Hm();Jm();qm();Ym();Zm();ep();rp();np();ap();lp();hp();sp();bp();mp();vp();fp();$p();_p();Sp();Pp();Dp();Lp();xp();jp();Up();Kp();Gp();Hp();Jp();qp();Yp();Zp();ev();rv();nv();av();lv();hv();sv();bv();mv();vv();fv();$v();_v();Sv();Pv();Dv();Lv();xv();jv();Uv();Kv();Gv();Hv();Jv();qv();Yv();Zv={cloudflare:Mm.trim(),cloudwatch:Wm.trim(),convex:Qm.trim(),datadog:op.trim(),daytona:cp.trim(),digital_ocean:gp.trim(),e2b:yp.trim(),fluent_bit:Ip.trim(),fly_io:wp.trim(),gcp:Tp.trim(),grafana_alloy:Np.trim(),inngest:zp.trim(),langchain:Rp.trim(),mastra:Bp.trim(),neon:Vp.trim(),netlify:Xp.trim(),openrouter:tv.trim(),otel:iv.trim(),otel_collector:uv.trim(),posthog:dv.trim(),railway:pv.trim(),render:kv.trim(),sentry:Ov.trim(),sentry_platform:Av.trim(),supabase:Cv.trim(),temporal:Ev.trim(),trigger_dev:Fv.trim(),vector:Mv.trim(),vercel:Wv.trim()},Qv={cloudflare:Vm.trim(),cloudwatch:Xm.trim(),convex:tp.trim(),datadog:ip.trim(),daytona:up.trim(),digital_ocean:dp.trim(),e2b:pp.trim(),fluent_bit:kp.trim(),fly_io:Op.trim(),gcp:Ap.trim(),grafana_alloy:Cp.trim(),inngest:Ep.trim(),langchain:Fp.trim(),mastra:Mp.trim(),neon:Wp.trim(),netlify:Qp.trim(),openrouter:ov.trim(),otel:cv.trim(),otel_collector:gv.trim(),posthog:yv.trim(),railway:Iv.trim(),render:wv.trim(),sentry:Tv.trim(),sentry_platform:Nv.trim(),supabase:zv.trim(),temporal:Rv.trim(),trigger_dev:Bv.trim(),vector:Vv.trim(),vercel:Xv.trim()}});var Vc=(e)=>{let t=Qv[e];if(t)return t;return Zv[e]};var tI=d(()=>{eI()});var C="available";var he,xn="Authorization=Bearer ${context.publicKey}",ot="Bearer ${context.publicKey}",zn=(e)=>[`Add the OpenTelemetry SDK to your ${e}. Most languages have official OpenTelemetry SDKs available (e.g., \`@opentelemetry/api\` for Node.js, \`opentelemetry-api\` for Python, etc.).`,`Initialize the OpenTelemetry SDK in your ${e}. The SDK will automatically read these environment variables and export telemetry data to Sazabi.`,`Set the following environment variables in your ${e} environment. These variables configure the OpenTelemetry exporter to send logs, traces, and metrics to Sazabi.`],sr=(e,t="http/protobuf")=>[{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:`https://${e}.\${context.projectRegion}.intake.\${context.intakeDomain}`,copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:"Authorization=Bearer ${context.publicKey}",copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:t,copyLabel:"OTLP protocol"}],jn;var se=d(()=>{he={label:"Connect",pendingLabel:"Connecting..."},jn={kind:"prose",text:"The OpenTelemetry SDK will automatically detect these environment variables and start exporting telemetry data without requiring any additional code changes."}});var qc,Wc,Yc;var rI=d(()=>{se();qc={kind:"linear",steps:[{kind:"prose",text:"Create a Cloudflare API token with **Account Settings: Read**, **Zone: Read**, **Zone Logs: Edit**, **Workers Observability: Edit**, and **Workers Scripts: Read** permissions. The template below preselects the required permissions. Pick the account you want to connect, click **Continue to summary**, then **Create Token**, and paste the value below."},{kind:"external-link",label:"Open Cloudflare API token template",href:"https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22account_settings%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22account%22%7D%2C%7B%22key%22%3A%22logs%22%2C%22type%22%3A%22edit%22%2C%22scope%22%3A%22zone%22%7D%2C%7B%22key%22%3A%22zone%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22zone%22%7D%2C%7B%22key%22%3A%22workers_observability%22%2C%22type%22%3A%22edit%22%2C%22scope%22%3A%22account%22%7D%2C%7B%22key%22%3A%22workers_scripts%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22account%22%7D%5D&name=Sazabi+Cloudflare"},{id:"token",kind:"secret",label:"Cloudflare API token",description:"Token with Account Settings Read, Zone Read, Logs Edit, Workers Observability Edit, and Workers Scripts Read permissions.",placeholder:"Enter your Cloudflare API token"},{id:"accountId",kind:"text",label:"Cloudflare account ID",description:"The 32-character hex ID from your Cloudflare dashboard URL or account overview.",placeholder:"e.g. a1b2c3d4e5f6...",pattern:"^[a-f0-9]{32}$",patternMessage:"Enter the 32-character Cloudflare account ID."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token",accountId:"$accountId"},resultAs:"validate"}],metadata:{connectionMode:"native",cloudflareApiToken:"$token",accountId:"$accountId",accountName:"$validate.accountName"},button:he}},Wc={content:{kind:"tabs",tabs:[{id:"logpush",label:"Logpush",content:{kind:"list",listAction:"listLogpushDatasets",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"datasetName",header:"Dataset",cell:"badge"},{field:"scopeDetail",header:"Scope"}],searchPlaceholder:"Search datasets and zones...",searchFields:["datasetName","scopeDetail"],dedupeByConfigField:["scope","zoneId","dataset"],dedupeMissingFieldAsEmpty:!0,emptyState:{noMatches:"No Logpush datasets match your search.",allConfigured:"All Logpush datasets already have streams configured."},toStreamItem:{displayName:"$item.displayName",config:{scope:"$item.scope",accountId:"$item.accountId",zoneId:"$item.zoneId",zoneName:"$item.zoneName",dataset:"$item.dataset",datasetName:"$item.datasetName"}}}},{id:"workers-observability",label:"Workers Observability",content:{kind:"list",listAction:"listWorkers",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"scriptName",header:"Worker"}],searchPlaceholder:"Search Workers...",searchFields:["scriptName"],dedupeByConfigField:["accountId","scriptTag","signal"],dedupeExtraMatch:{scope:"workers-observability"},rowVariants:[{id:"logs",label:"Logs",configMerge:{signal:"logs"},displayNameTemplate:"Workers Logs — $item.scriptName"},{id:"traces",label:"Traces",configMerge:{signal:"traces"},displayNameTemplate:"Workers Traces — $item.scriptName"}],emptyState:{noMatches:"No Workers match your search.",noItems:"No Workers found in this account.",allConfigured:"All Workers in this account already have Sazabi destinations."},toStreamItem:{displayName:"Workers — $item.scriptName",config:{scope:"workers-observability",accountId:"$item.accountId",scriptTag:"$item.scriptTag",scriptName:"$item.scriptName"}}}}]}},Yc={steps:[{kind:"prose",text:"Create a Logpush job in your [Cloudflare dashboard](https://dash.cloudflare.com) under Analytics & Logs > Logpush, or via the Cloudflare API. Select **HTTP** as the destination type and paste the destination URL below."},{kind:"copyable",label:"Destination URL",value:"https://cloudflare-logpush.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs?api_key=${context.publicKey}"},{kind:"prose",text:"In the Logpush job's **Output options**, set **Timestamp format** to **RFC3339** so Sazabi can parse event times accurately."}]}});var fA,oI;var nI=d(()=>{rI();fA=["cloudflareApiToken"],oI={id:"cloudflare",name:"Cloudflare",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:fA,subtitle:"Stream your Cloudflare logs directly to Sazabi for edge network observability.",features:["Logpush support","Workers logs","Edge analytics"],setupSkill:C,dashboard:{iconKey:"cloudflare",intakeSourceId:"cloudflare",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-enum-badge",header:"Type",width:"12rem",configField:"scope",values:[{value:"zone",label:"Logpush"},{value:"account",label:"Logpush"},{value:"workers-observability",label:"Workers Observability"}],fallbackLabel:"—"}],streamRowInstructions:[{id:"wrangler-config",matchConfig:{scope:"workers-observability"},label:"View instructions",title:"Configure your Worker",description:"Add this block to your Worker's Wrangler config and redeploy. Cloudflare ignores destinations the Worker hasn't explicitly listed, so until this is in place the destination shows as Never run in the Cloudflare dashboard.",snippets:[{label:"wrangler.jsonc",language:"jsonc",code:`"observability": {
  "enabled": true,
  "$config.signal": {
    "enabled": true,
    "destinations": ["$config.destinationName"]
  }
}`},{label:"wrangler.toml",language:"toml",code:`[observability.$config.signal]
enabled = true
destinations = [ "$config.destinationName" ]`}]}],actions:{submit:{validate:{procedure:"cloudflare.validateToken"}},list:{listLogpushDatasets:{procedure:"cloudflare.listLogpushDatasets",itemsField:"items"},listWorkers:{procedure:"cloudflare.listWorkers",itemsField:"items"}}}}}});var Xc,Zc;var iI=d(()=>{se();Xc={kind:"linear",prefetch:{action:"prefetch",input:{projectId:"${context.projectId}",templateUrl:"${context.cloudformationTemplateUrl}"},resultAs:"cloudwatch"},steps:[{kind:"prose",text:"Set up an IAM role in your AWS account to allow Sazabi to read your CloudWatch logs. Use one of the setup methods below, then paste the resulting Role ARN."},{kind:"tab-set",tabs:[{id:"cloudformation",label:"CloudFormation",steps:[{kind:"prose",text:"Click the button below to launch a CloudFormation stack in your AWS account. After the stack is created, find your role ARN under **Stacks → ${context.extras.cloudwatch.stackName} → Outputs** and copy the `RoleArn` value."},{kind:"external-link",label:"Launch CloudFormation stack",href:"${context.extras.cloudwatch.cloudFormationQuickCreateUrl}"}]},{id:"terraform",label:"Terraform",steps:[{kind:"prose",text:"Add this configuration to your Terraform files."},{kind:"code",language:"hcl",copyLabel:"Terraform",value:`data "aws_caller_identity" "current" {}

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
aws iam get-role --role-name SazabiLogIngestion --query 'Role.Arn' --output text`}]}]},{id:"arn",kind:"secret",label:"Role ARN",placeholder:"arn:aws:iam::123456789012:role/SazabiLogIngestion-Sazabi-...",pattern:"^arn:aws:iam::(\\d{12}):role\\/[\\w+=,.@\\-\\/]+$",patternMessage:"Invalid ARN format. Expected: arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME"}],submit:{actions:[{kind:"validate",action:"validate",input:{projectId:"${context.projectId}",roleArn:"$arn",externalId:"${context.extras.cloudwatch.externalId}"},resultAs:"validateRole"}],metadata:{roleArn:"$arn",awsAccountId:"$validateRole.awsAccountId",externalId:"${context.extras.cloudwatch.externalId}"},displayName:"AWS Account $validateRole.awsAccountId",button:he}},Zc={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}",pattern:""},columns:[{field:"name",header:"Log group",cell:"mono"},{field:"arn",header:"Region",width:"w-32",cell:"badge",extract:"regex:^arn:aws:logs:([^:]+):"}],searchPlaceholder:"Search log groups...",searchFields:["name"],dedupeByConfigField:"logGroupName",filterItemsBy:{field:"arn",operator:"regex-group-equals",pattern:"^arn:aws:logs:([^:]+):",equals:"${context.projectRegion}"},infoBanner:"Only showing log groups from ${context.projectRegion}. To stream logs from other regions, create a new project for that region in Sazabi.",emptyState:{noMatches:"No log groups found.",allConfigured:"All log groups already have streams configured.",noResults:"No log groups found in ${context.projectRegion} region."},toStreamItem:{displayName:"$item.name",config:{logGroupName:"$item.name",logGroupArn:"$item.arn"}}}}});var kA,aI;var cI=d(()=>{iI();kA=["externalId"],aI={id:"cloudwatch",name:"CloudWatch",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:kA,subtitle:"Stream your AWS CloudWatch logs directly to Sazabi for real-time analysis and alerting.",features:["Log forwarding","Real-time streaming","Multi-region support"],setupSkill:C,dashboard:{iconKey:"cloudwatch",intakeSourceId:"cloudwatch",streamSelectorLayout:"sidepanel",connectionMetadataSection:{title:"AWS account details",description:"The AWS account and IAM role used for log ingestion.",fields:[{key:"awsAccountId",label:"AWS account ID",description:"AWS account connected to this data source."},{key:"roleArn",label:"IAM role ARN",description:"IAM role Sazabi assumes for log ingestion."}]},actions:{submit:{validate:{kind:"source-action",actionId:"validate-role"}},list:{list:{kind:"source-action",actionId:"list-log-groups",itemsField:"logGroups"}},prefetch:{prefetch:{kind:"source-action",actionId:"get-setup-info"}}}}}});var Qc,el;var lI=d(()=>{se();Qc={kind:"linear",steps:[{kind:"prose",text:"Enter a Convex team access token to connect your deployments. You can create one in your [Convex dashboard team settings](https://dashboard.convex.dev)."},{id:"token",kind:"secret",label:"Team access token",placeholder:"eyJ..."},{id:"team",kind:"select",label:"Team",placeholder:"Select a team",optionsAction:"options",optionsInput:{token:"$token"},optionValueField:"id",optionLabelField:"name",optionDescriptionField:"slug"}],submit:{metadata:{accessToken:"$token",teamId:"$team.id",teamName:"$team.name"},displayName:"$team.name",button:he}},el={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"slug",header:"Slug",width:"w-48",cell:"muted"}],searchPlaceholder:"Search deployments...",searchFields:["name"],dedupeByConfigField:"deploymentId",emptyState:{noMatches:"No deployments found.",allConfigured:"All deployments already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{deploymentId:"$item.id",deploymentName:"$item.name"}}}}});var $A,uI;var hI=d(()=>{lI();$A=["accessToken"],uI={id:"convex",name:"Convex",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:$A,subtitle:"Forward your Convex deployment logs directly to Sazabi for serverless observability.",features:["Function logs","Database mutations","Scheduled job monitoring"],setupSkill:C,dashboard:{iconKey:"convex",intakeSourceId:"convex",streamSelectorLayout:"sidepanel",actions:{list:{options:{procedure:"convex.listTeams",itemsField:"teams",sensitiveInputFields:["token"]},list:{procedure:"convex.listDeployments",itemsField:"deployments",sensitiveInputFields:["token"]}}}}}});var tl;var gI=d(()=>{tl={steps:[{kind:"prose",text:"Configure your Datadog Agent to forward logs to Sazabi. Use the dual-ship option when the same Agent should keep sending logs to Datadog. Use the dedicated Agent option for sidecars or containers that send logs only to Sazabi."},{kind:"copyable",label:"Sazabi public key",value:"${context.publicKey}",copyLabel:"Sazabi public key"},{kind:"copyable",label:"Intake URL",value:"https://datadog.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"Datadog Agent intake URL"},{kind:"code-tabs",label:"Configuration options",description:"Choose one option. For dual-shipping, leave the top-level Datadog `api_key` or `DD_API_KEY` unchanged and add Sazabi as a logs endpoint. For a dedicated Sazabi sidecar, set `DD_API_KEY` to the Sazabi public key.",tabs:[{id:"datadog-yaml-dual-ship",label:"`datadog.yaml` dual-ship",language:"yaml",copyLabel:"datadog.yaml dual-ship configuration",value:`# Enable logs collection if it is not already enabled.
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
DD_LOGS_CONFIG_FORCE_USE_HTTP=true`}]},{kind:"prose",text:"Restart or redeploy the Agent after changing its configuration. `DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS` requires Datadog Agent v6.18+ or v7.18+. Avoid configuring both a Sazabi additional endpoint and a Sazabi-only logs URL in the same Agent, or you may send duplicate logs."}]}});var sI;var dI=d(()=>{gI();sI={id:"datadog",name:"Datadog Agent",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK/agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Datadog Agent logs directly to Sazabi for AI-powered observability.",features:["Agent log forwarding","Minimal configuration","Keep existing setup"],setupSkill:C,dashboard:{iconKey:"datadog",intakeSourceId:"datadog"}}});var rl;var bI=d(()=>{se();rl={steps:[{kind:"prose",text:"In the [Daytona dashboard](https://app.daytona.io), open **Settings** and find the **OpenTelemetry** card (visible to organization owners only). Set the OTLP endpoint and add an `Authorization` header using the values below."},{kind:"copyable",label:"OTLP Endpoint",value:"https://daytona.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Authorization header",value:ot},{kind:"prose",text:"Notes"},{kind:"bulleted-list",items:["Save the OpenTelemetry card; sandboxes begin exporting telemetry automatically on their next start with no per-sandbox change required.","Filter in Sazabi using the resource attributes Daytona stamps on each record: `daytona_organization_id`, `daytona_region_id`, `daytona_snapshot`.","Sazabi currently stores logs and traces from this source. OTLP metrics are accepted at the intake endpoint but not yet persisted.","Daytona only retains sandbox telemetry for 3 days in its own dashboard, so Sazabi is the durable store."]}]}});var yI;var mI=d(()=>{bI();yI={id:"daytona",name:"Daytona",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual webhook setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream sandbox telemetry from your Daytona organization to Sazabi via org-level OpenTelemetry export.",features:["Org-level OTLP logs and traces","Sandbox resource attributes (organization, region, snapshot)","Durable retention beyond Daytona's 3-day window"],setupSkill:C,dashboard:{iconKey:"daytona",intakeSourceId:"daytona"}}});var ol,nl;var pI=d(()=>{se();ol={kind:"linear",steps:[{kind:"prose",text:"Enter your [DigitalOcean personal access token](https://cloud.digitalocean.com/account/api/tokens). Use **Full Access** scope, or Custom Scopes with `app:read`, `app:update`, `actions:read`, `regions:read`, and `sizes:read` so Sazabi can provision log forwarding on your apps."},{id:"token",kind:"secret",label:"Personal access token",placeholder:"dop_v1_..."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"}}],metadata:{apiToken:"$token"},button:he}},nl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"componentCount",header:"Components",width:"w-40",cell:"badge"}],searchPlaceholder:"Search apps...",searchFields:["name"],dedupeByConfigField:"appId",emptyState:{noMatches:"No apps found.",allConfigured:"All apps already have log streams configured.",noItems:"No App Platform apps found in this DigitalOcean account. Create an app in DigitalOcean first, then return here to forward its logs."},toStreamItem:{displayName:"$item.name",config:{appId:"$item.id",appName:"$item.name"}}}}});var wA,vI;var II=d(()=>{pI();wA=["apiToken"],vI={id:"digital_ocean",name:"DigitalOcean",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:wA,subtitle:"Forward your DigitalOcean infrastructure logs directly to Sazabi for unified observability.",features:["Log forwarding","App Platform logs"],setupSkill:C,dashboard:{iconKey:"digital-ocean",intakeSourceId:"digital-ocean",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-text",header:"App",width:"w-32",configField:"appName",fallbackLabel:"Unknown app"}],actions:{submit:{validate:{kind:"source-action",actionId:"validate-token",sensitiveInputFields:["token"]}},list:{list:{kind:"source-action",actionId:"list-apps",itemsField:"apps"}}}}}});var il;var fI=d(()=>{il={steps:[{kind:"prose",text:"Set these values as environment variables in your application."},{kind:"copyable",label:"`SAZABI_INTAKE_URL`",value:"https://e2b.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs",copyLabel:"Intake URL"},{kind:"copyable",label:"`SAZABI_PUBLIC_KEY`",value:"${context.publicKey}",copyLabel:"Public key"},{kind:"code-tabs",label:"SDK integration",tabs:[{id:"typescript",label:"TypeScript",language:"typescript",copyLabel:"TypeScript code",value:`import { Sandbox } from '@e2b/code-interpreter'
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
        logger_provider.shutdown()`}]}]}});var kI;var $I=d(()=>{fI();kI={id:"e2b",name:"E2B",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your E2B sandbox logs directly to Sazabi for code execution observability.",features:["Sandbox stdout/stderr capture"],setupSkill:C,dashboard:{iconKey:"e2b",intakeSourceId:"e2b"}}});var al;var wI=d(()=>{al={perStreamInstructions:!0,steps:[{kind:"prose",text:"Configure the Fluent Bit `opentelemetry` output plugin to forward logs to Sazabi. Use the classic config format or the Helm values snippet if you are deploying Fluent Bit via the official Helm chart."},{kind:"code-tabs",label:"Fluent Bit output configuration",tabs:[{id:"classic",label:"Classic config",language:"bash",copyLabel:"Classic config",value:`[OUTPUT]
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
        tls.verify        on`}]},{kind:"prose",text:"Requires Fluent Bit v2.0 or later. The `opentelemetry` output plugin is included in the default distribution — no additional installation needed."}]}});var _I;var OI=d(()=>{wI();_I={id:"fluent_bit",name:"Fluent Bit",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs from your Kubernetes cluster or any infrastructure to Sazabi using the Fluent Bit agent.",features:["Kubernetes DaemonSet","Container log collection","Multi-pipeline routing","Low resource footprint"],setupSkill:C,dashboard:{iconKey:"fluent-bit",intakeSourceId:"fluent-bit"}}});var cl,ll;var SI=d(()=>{se();cl={kind:"linear",steps:[{kind:"prose",text:"Create a read-only token for your Fly.io organization. From the CLI: `flyctl tokens create readonly -o <org-slug>`. Or open the org's Tokens tab in the [Fly.io dashboard](https://fly.io/dashboard) and create a read-only token."},{id:"token",kind:"secret",label:"API token",placeholder:"FlyV1 ..."},{id:"orgSlug",kind:"secret",label:"Organization slug",placeholder:"personal"}],submit:{actions:[{kind:"validate",action:"validate",input:{dataSourceType:"fly_io",metadata:{apiToken:"$token",organizationSlug:"$orgSlug"}}}],metadata:{apiToken:"$token",organizationSlug:"$orgSlug"},button:he}},ll={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"}],searchPlaceholder:"Search apps...",searchFields:["name"],dedupeByConfigField:"appName",emptyState:{noMatches:"No apps found.",allConfigured:"All apps already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{appName:"$item.name"}}}}});var _A,TI;var PI=d(()=>{SI();_A=["apiToken"],TI={id:"fly_io",name:"Fly.io",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:_A,subtitle:"Forward your Fly.io application logs directly to Sazabi for global monitoring.",features:["Log shipping","Multi-region logs","Machine monitoring"],setupSkill:C,dashboard:{iconKey:"fly-io",intakeSourceId:"fly-io",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{procedure:"dataSources.validateConnection"}},list:{list:{kind:"source-action",actionId:"list-apps",itemsField:"apps"}}}}}});var ul,hl,gl;var AI=d(()=>{se();ul={kind:"tabs",tabs:[{id:"service-account",label:"Service account",content:{kind:"linear",steps:[{kind:"prose",text:"Provide a GCP service account key with permissions to enable APIs and create log sinks, Pub/Sub topics, and subscriptions. Sazabi enables the required APIs and provisions the log pipeline in your GCP project automatically. The service account needs `roles/serviceusage.serviceUsageAdmin`, `roles/logging.configWriter`, `roles/pubsub.admin`, and `roles/browser` on the target GCP project(s)."},{kind:"external-link",label:"Open service accounts in GCP Console",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},{id:"key",kind:"secret",label:"Service account key (JSON)",placeholder:'{"type": "service_account", "project_id": "...", ...}'}],submit:{actions:[{kind:"validate",action:"validate",input:{serviceAccountKey:"$key"},resultAs:"validateKey"},{kind:"preflight",action:"preflight",input:{serviceAccountKey:"$key"}}],metadata:{serviceAccountKey:"$key",connectionMode:"native"},displayName:"GCP $validateKey.projectId",button:he}}},{id:"manual",label:"Manual setup",content:{kind:"manual"}}]},hl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"displayName",header:"Name"},{field:"projectId",header:"Project ID",width:"w-48",cell:"muted"}],searchPlaceholder:"Search projects...",searchFields:["displayName","projectId"],dedupeByConfigField:"gcpProjectId",emptyState:{noMatches:"No projects found.",allConfigured:"All accessible projects already have log streams configured."},toStreamItem:{displayName:"$item.displayName",config:{gcpProjectId:"$item.projectId",gcpProjectName:"$item.displayName"}}}},gl={steps:[{kind:"prose",text:"To forward Google Cloud Logging data to Sazabi, create a log sink that routes logs to a Pub/Sub topic, then deploy an OpenTelemetry Collector with a `googlecloudpubsub` receiver that subscribes to that topic and exports to Sazabi."},{kind:"prose",text:"Required GCP permissions: the person performing these steps needs a role that grants `logging.sinks.create` (e.g. `roles/logging.configWriter`) and `pubsub.topics.setIamPolicy` (e.g. `roles/pubsub.admin`)."},{kind:"ordered-steps",items:["Create a Pub/Sub topic and subscription in your GCP project (e.g. `sazabi-logs` and `sazabi-logs-sub`).","Create a Cloud Logging sink that routes logs to the Pub/Sub topic. Grant the sink's service account the `roles/pubsub.publisher` role on the topic.","Deploy an OpenTelemetry Collector (e.g. on a GCE instance, GKE pod, or Cloud Run service) using the `opentelemetry-collector-contrib` distribution.","Configure the collector with a `googlecloudpubsub` receiver pointing at your subscription and an `otlp_http` exporter using the values below. The receiver requires the `googlecloudlogentry_encoding` encoding extension.","Ensure the collector's service account has the `roles/pubsub.subscriber` IAM role on the subscription."]},{kind:"copyable",label:"`OTLP endpoint`",value:"https://otel.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`Authorization header value`",value:ot,copyLabel:"Authorization header"},{kind:"code",label:"Example collector configuration",language:"yaml",copyLabel:"Collector configuration",value:`extensions:
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
      exporters: [otlp_http]`}]}});var OA,DI;var NI=d(()=>{AI();OA=["serviceAccountKey"],DI={id:"gcp",name:"GCP",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:OA,subtitle:"Connect your GCP logs to Sazabi for AI-powered observability. Automatically provision log sinks with a service account, or set up manually.",features:["Log forwarding","Real-time streaming","Log sink support"],setupSkill:C,dashboard:{iconKey:"gcp",intakeSourceId:"gcp",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{kind:"source-action",actionId:"validate-service-account-key"},preflight:{kind:"source-action",actionId:"run-preflight-checks",normalize:"preflight"}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var sl;var LI=d(()=>{sl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Add the Sazabi OTLP exporter to your Alloy config and wire it into a complete pipeline. The snippets below include an OTLP receiver and a batch processor — the minimum needed for telemetry to actually reach Sazabi. Use the Helm values tab if you deploy Alloy via the Grafana Helm chart."},{kind:"code-tabs",label:"Alloy configuration",tabs:[{id:"river",label:"config.alloy",language:"hcl",copyLabel:"Alloy config",value:`otelcol.receiver.otlp "default" {
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
      }`}]},{kind:"prose",text:"Replace `otelcol.receiver.otlp` with the OpenTelemetry receiver(s) that match your sources (for example `otelcol.receiver.filelog` for log files or `otelcol.receiver.jaeger` for Jaeger traces). Each upstream `otelcol.*` component must list `otelcol.processor.batch.default.input` in its `output` block to ship data to Sazabi."}]}});var CI;var xI=d(()=>{LI();CI={id:"grafana_alloy",name:"Grafana Alloy",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using Grafana Alloy.",features:["Kubernetes DaemonSet","OpenTelemetry native","Flexible River pipeline","Logs and traces"],setupSkill:C,dashboard:{iconKey:"grafana-alloy",intakeSourceId:"grafana-alloy"}}});var dl;var zI=d(()=>{se();dl={steps:[{kind:"ordered-steps",items:zn("Inngest function")},jn,...sr("inngest")]}});var jI;var EI=d(()=>{zI();jI={id:"inngest",name:"Inngest",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Inngest function logs directly to Sazabi for workflow observability.",features:["Function logs","Event tracing","Step monitoring"],setupSkill:C,dashboard:{iconKey:"inngest",intakeSourceId:"inngest"}}});var bl;var UI=d(()=>{se();bl={steps:[{kind:"prose",text:"LangChain does not emit OpenTelemetry traces on its own. Set the OTLP environment variables (shown in the last step) in your deployment so they are present when the process starts, then install an instrumentation package (OpenInference shown below) and initialise it once at startup before importing LangChain."},{kind:"code-tabs",label:"Install instrumentation",tabs:[{id:"python",label:"Python",language:"bash",copyLabel:"Python install command",value:"pip install openinference-instrumentation-langchain \\\n  opentelemetry-sdk \\\n  opentelemetry-exporter-otlp-proto-http"},{id:"typescript",label:"TypeScript",language:"bash",copyLabel:"TypeScript install command",value:"npm install @arizeai/openinference-instrumentation-langchain \\\n  @opentelemetry/sdk-trace-node \\\n  @opentelemetry/exporter-trace-otlp-proto \\\n  @langchain/core"}]},{kind:"code-tabs",label:"Initialise the tracer at startup",tabs:[{id:"python",label:"Python",language:"python",copyLabel:"Python init snippet",value:`from opentelemetry import trace
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
new LangChainInstrumentation().manuallyInstrument(CallbackManagerModule);`}]},{kind:"prose",text:"Set these environment variables before starting your application. The OpenTelemetry SDK reads them automatically."},...sr("langchain")]}});var RI;var KI=d(()=>{UI();RI={id:"langchain",name:"LangChain",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward LangChain traces to Sazabi for end-to-end LLM observability.",features:["Chain tracing","Tool & agent traces","LLM call traces"],setupSkill:C,dashboard:{iconKey:"langchain",intakeSourceId:"langchain"}}});var yl;var FI=d(()=>{yl={steps:[{kind:"prose",text:"Set these values as environment variables in your application."},{kind:"copyable",label:"`SAZABI_INTAKE_URL`",value:"https://mastra.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces",copyLabel:"Intake URL"},{kind:"copyable",label:"`SAZABI_API_KEY`",value:"${context.publicKey}",copyLabel:"API key"},{kind:"code",label:"Configuration",language:"typescript",copyLabel:"TypeScript code",value:`// src/mastra/index.ts
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
const response = await agent.generate("Hello, world!");`}]}});var GI;var BI=d(()=>{FI();GI={id:"mastra",name:"Mastra",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Mastra agent traces directly to Sazabi for AI workflow observability.",features:["Agent traces","Tool tracing","Workflow monitoring"],setupSkill:C,dashboard:{iconKey:"mastra",intakeSourceId:"mastra"}}});var ml;var HI=d(()=>{ml={perStreamInstructions:!0,steps:[{kind:"prose",text:"Neon's OpenTelemetry integration forwards Postgres logs to Sazabi. The integration is available on Neon's **Scale** plan, and both the integration itself and Postgres logs export are currently in Beta. You'll need admin access on the Neon project to add it."},{kind:"prose",text:"Neon can export both metrics and Postgres logs through this integration; this Sazabi data source is logs-only. Leave metrics disabled in the Neon form."},{kind:"external-link",label:"Open Neon integrations",href:"https://console.neon.tech/app/projects",description:"Choose the Neon project you want to monitor, then open the project's **Integrations** page."},{kind:"ordered-steps",items:["In the Neon Console, open your project and go to **Integrations**. On the **OpenTelemetry** card, click **Add** to open the configuration sidebar.","In **Select data to export**, enable `Postgres logs` and leave `Metrics` disabled. Neon does not expose a traces export for this integration.","Choose the `HTTP` protocol and paste the Sazabi OTLP base endpoint below. Neon appends `/v1/logs` automatically for log export.","Configure authentication as `Bearer` and paste the generated Sazabi token value below. Neon adds the `Bearer` prefix to outgoing requests automatically.","Under **Resource attributes**, set `service.name` to a short, stable identifier for this Neon project (Neon's docs use `neon-postgres-test` as an example). This attribute is optional but recommended so the project's logs are easy to filter in Sazabi.","Save the integration. Logs typically start arriving within a few minutes; if the compute has Scale to Zero enabled and is currently suspended, run a query against the database to wake it and begin log delivery."]},{kind:"copyable",label:"OTLP endpoint URL",value:"https://neon.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"Neon OTLP endpoint URL",description:"Use the base URL in Neon. Neon will send logs to this URL with `/v1/logs` appended."},{kind:"copyable",label:"Connection protocol",value:"HTTP"},{kind:"copyable",label:"Data to export",value:"Postgres logs only"},{kind:"copyable",label:"Authentication method",value:"Bearer"},{kind:"copyable",label:"Bearer token value",value:"${context.publicKey}",copyLabel:"Neon bearer token value"},{kind:"copyable",label:"`service.name` resource attribute",value:"neon-postgres",copyLabel:"Neon service.name value",description:"Optional but recommended — paste under **Resource attributes** in Neon. Change the suffix (e.g. `neon-postgres-prod`, `neon-checkout-db`) when you have more than one Neon project so streams stay easy to filter in Sazabi."},{kind:"prose",text:"If logs do not arrive after a few minutes, check whether the Neon compute is suspended (Scale to Zero) — logs only flow while the compute is active. Run a query from the Neon SQL Editor or your application to wake it, then check the Neon integration's status panel for OTLP export errors."}]}});var SA,MI;var JI=d(()=>{HI();SA=[],MI={id:"neon",name:"Neon",capabilities:["manual"],auth:["manualKey"],delivery:["push"],sensitiveFields:SA,lifecycleSkipReason:"Manual OTLP setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward Neon Postgres logs to Sazabi for database observability without sending metrics or traces.",features:["Postgres logs","Connection events","Error and warning logs"],setupSkill:C,dashboard:{iconKey:"neon",intakeSourceId:"neon"}}});var pl;var VI=d(()=>{se();pl={steps:[{kind:"prose",text:"Configure a log drain in your [Netlify site settings](https://app.netlify.com) under Logs & Metrics > Log Drains. Select 'General HTTP endpoint' as the service and use the values below. Note: log drains require a Netlify Enterprise plan."},{kind:"copyable",label:"Full URL",value:"https://netlify.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Authorization header",value:ot},{kind:"copyable",label:"Log drain format",value:"JSON"}]}});var qI;var WI=d(()=>{VI();qI={id:"netlify",name:"Netlify",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Netlify deployment logs directly to Sazabi for Jamstack observability.",features:["Build logs","Function logs","Edge handler logs"],setupSkill:C,dashboard:{iconKey:"netlify",intakeSourceId:"netlify"}}});var vl;var YI=d(()=>{vl={steps:[{kind:"prose",text:"In the OpenRouter dashboard, open **Settings > Observability**, toggle **Enable Broadcast** on, then click the edit icon next to **OpenTelemetry Collector**."},{kind:"external-link",label:"Settings > Observability",href:"https://openrouter.ai/settings/observability"},{kind:"prose",text:"Paste the values below into the destination form."},{kind:"copyable",label:"Endpoint",value:"https://openrouter.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces",copyLabel:"Endpoint"},{kind:"copyable",label:"Headers",value:'{"Authorization": "Bearer ${context.publicKey}"}',copyLabel:"Headers"},{kind:"prose",text:"Click **Test Connection** to verify Sazabi accepts the trace. OpenRouter only saves the destination if the test passes; a green check confirms forwarding is enabled."}]}});var XI;var ZI=d(()=>{YI();XI={id:"openrouter",name:"OpenRouter",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"OpenRouter Broadcast destination setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward OpenRouter trace spans to Sazabi from the OpenRouter dashboard.",features:["Trace spans per generation","Token & cost tracking","Model & provider attribution"],setupSkill:C,dashboard:{iconKey:"openrouter",intakeSourceId:"openrouter"}}});var Il;var QI=d(()=>{se();Il={perStreamInstructions:!0,steps:[{kind:"prose",text:"Configure your application to export OpenTelemetry logs and traces to Sazabi by setting the following environment variables. These work with any OpenTelemetry SDK (Node.js, Python, Go, Java, .NET, etc.). Metrics are accepted by the intake but are not yet stored."},{kind:"ordered-steps",items:["Add the OpenTelemetry SDK to your application. Most languages have official SDKs available (e.g., `@opentelemetry/api` for Node.js, `opentelemetry-api` for Python, etc.).","Initialize the OpenTelemetry SDK in your application and configure the OTLP exporters for the signals you want (logs and/or traces). The SDK will automatically read the environment variables below.","Set the following environment variables in your application environment. These configure the OTLP exporter to send logs and traces to Sazabi."]},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:"https://otlp.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:xn,copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:"http/protobuf",copyLabel:"OTLP protocol"}]}});var ef;var tf=d(()=>{QI();ef={id:"otel",name:"OpenTelemetry",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual OTLP setup is not exercised by automated lifecycle tests yet.",subtitle:"Send OpenTelemetry logs and traces directly to Sazabi's OTLP-compatible intake for AI-powered observability.",features:["OTLP log export","OTLP trace export","Any OTEL SDK"],setupSkill:C,dashboard:{slug:"opentelemetry",iconKey:"opentelemetry",intakeSourceId:"otel"}}});var fl;var rf=d(()=>{fl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Add the `otlphttp/sazabi` exporter to your OpenTelemetry Collector configuration and include it in your service pipelines. Use the Helm values snippet if you are deploying the collector via the `opentelemetry-collector` Helm chart."},{kind:"code-tabs",label:"Collector configuration",tabs:[{id:"yaml",label:"otelcol.yaml",language:"yaml",copyLabel:"Collector config",value:`exporters:
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
        exporters: [otlphttp/sazabi]`}]},{kind:"prose",text:"Adjust the `receivers` list to match the sources you have configured. The `filelog` receiver collects container logs on Kubernetes; the `otlp` receiver accepts spans from instrumented services."}]}});var of;var nf=d(()=>{rf();of={id:"otel_collector",name:"OpenTelemetry Collector",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using the OpenTelemetry Collector.",features:["Kubernetes DaemonSet","Vendor-neutral standard","Extensible via contrib","Logs and traces"],setupSkill:C,dashboard:{iconKey:"otel-collector",intakeSourceId:"otel-collector"}}});var kl,TA,$l,wl;var af=d(()=>{se();kl={kind:"linear",steps:[{kind:"prose",text:"Create a personal API key in your PostHog account under **Settings → Personal API keys** ([US](https://us.posthog.com/settings/user-api-keys) · [EU](https://eu.posthog.com/settings/user-api-keys)). Grant it these scopes:\n\n- `project:read` — list your projects\n- `organization:read` — show your organization\n- `hog_function:write` — install the webhook destination"},{id:"token",kind:"secret",label:"Personal API key",placeholder:"phx_..."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"},resultAs:"validate"},{kind:"preflight",action:"preflight",input:{token:"$token",region:"$validate.posthogApiRegion",organizationId:"$validate.posthogOrganizationId"}}],metadata:{posthogPersonalApiKey:"$token",posthogApiRegion:"$validate.posthogApiRegion",posthogOrganizationId:"$validate.posthogOrganizationId",posthogOrganizationName:"$validate.posthogOrganizationName",connectionMode:"native"},button:he}},TA=[{field:"name",header:"Project"},{field:"organizationName",header:"Organization",width:"w-48",transform:"fallback:—"}],$l={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:TA,searchPlaceholder:"Search projects...",searchFields:["name","organizationName"],dedupeByConfigField:"posthogProjectId",emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have PostHog destinations configured."},toStreamItem:{displayName:"$item.name",config:{posthogProjectId:"$item.id",posthogProjectName:"$item.name"}}}},wl={steps:[{kind:"prose",text:"Configure an [HTTP Webhook destination](https://${context.posthogRegion}.posthog.com/pipeline/new/hog-template-webhook) in PostHog under Data Pipeline > Destinations. Use the values below and set your webhook body template to the default event and person payload."},{kind:"copyable",label:"Destination URL",value:"https://posthog.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Method",value:"POST"},{kind:"copyable",label:"Header name",value:"Authorization"},{kind:"copyable",label:"Header value",value:ot},{kind:"code",label:"Body template",language:"json",copyLabel:"Body template",value:`{
  "event": "{event}",
  "person": "{person}"
}`}]}});var PA,cf;var lf=d(()=>{af();PA=["posthogPersonalApiKey"],cf={id:"posthog",name:"PostHog",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:PA,subtitle:"Forward your PostHog events directly to Sazabi for real-time product and error observability.",features:["CDP webhook forwarding","Event property mapping","Real-time streaming"],setupSkill:C,dashboard:{iconKey:"posthog",intakeSourceId:"posthog",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{kind:"source-action",actionId:"validate-personal-api-key",sensitiveInputFields:["token"]},preflight:{kind:"source-action",actionId:"run-preflight-checks",normalize:"preflight",sensitiveInputFields:["token"]}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var _l;var uf=d(()=>{se();_l={steps:[{kind:"prose",text:"Railway does not provide a managed log drain to an external OTLP endpoint. Configure each Railway service you want to monitor so the application emits OpenTelemetry data directly to Sazabi. If you cannot add the SDK, run a log forwarder such as Vector or Fluent Bit as its own Railway service and point it at the same OTLP endpoint."},{kind:"external-link",label:"Open Railway dashboard",href:"https://railway.com/dashboard"},{kind:"ordered-steps",items:["Add OpenTelemetry to your application. Install the SDK, an OTLP HTTP/protobuf exporter, and any auto-instrumentation package your language needs. For Node.js, `@opentelemetry/api` alone is not enough; use the SDK/exporter packages too.","Initialize OpenTelemetry before your application handles requests. You can do this in code, with a preload flag such as `NODE_OPTIONS=--require ...`, or with a language-specific wrapper command.","In Railway, open the service, go to **Variables**, and use **New Variable** or **Raw Editor** to add the variables below. Railway stages variable changes, so review and deploy the change set when prompted.","Redeploy or restart the Railway service, then generate traffic or a test log line so Sazabi can receive fresh telemetry.","Verify data in Sazabi. If nothing appears, check the Railway deployment logs for OpenTelemetry exporter errors and confirm your app is emitting logs through the OpenTelemetry logger, not only stdout."]},{kind:"code",label:"Railway Raw Editor variables",description:"Paste this into the Railway service's Variables Raw Editor. Railway resolves the `${{...}}` references from its own service and deployment metadata.",language:"bash",value:'OTEL_EXPORTER_OTLP_ENDPOINT=https://railway.${context.projectRegion}.intake.${context.intakeDomain}\nOTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer ${context.publicKey}"\nOTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf\nOTEL_SERVICE_NAME=${{RAILWAY_SERVICE_NAME}}\nOTEL_RESOURCE_ATTRIBUTES=deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}',copyLabel:"Railway environment variables"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:"https://railway.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:xn,copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:"http/protobuf",copyLabel:"OTLP protocol"},{kind:"copyable",label:"`OTEL_SERVICE_NAME`",value:"${{RAILWAY_SERVICE_NAME}}",copyLabel:"OTEL service name"},{kind:"copyable",label:"`OTEL_RESOURCE_ATTRIBUTES`",value:"deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}",copyLabel:"OTEL resource attributes"},{kind:"code-tabs",label:"Example bootstrap patterns",description:"Use the pattern for your runtime, or follow your language's OpenTelemetry documentation if your app already has instrumentation.",tabs:[{id:"node",label:"Node.js",language:"bash",value:`bun add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto @opentelemetry/exporter-logs-otlp-proto

# Railway variable or start-command prefix:
NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"`,copyLabel:"Node.js OpenTelemetry bootstrap"},{id:"python",label:"Python",language:"bash",value:`pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install

# Railway start command example:
opentelemetry-instrument python app.py`,copyLabel:"Python OpenTelemetry bootstrap"}]}]}});var hf;var gf=d(()=>{uf();hf={id:"railway",name:"Railway",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Railway deployment logs directly to Sazabi for real-time monitoring.",features:["Log drains","Deployment logs","Service monitoring"],setupSkill:C,dashboard:{iconKey:"railway",intakeSourceId:"railway"}}});var Ol,Sl;var sf=d(()=>{se();Ol={kind:"linear",steps:[{kind:"prose",text:"Enter your Render API key to connect your workspace. You can create an API key in your [Render dashboard](https://dashboard.render.com/settings#api-keys)."},{id:"token",kind:"secret",label:"API key",placeholder:"rnd_..."},{id:"workspace",kind:"select",label:"Workspace",placeholder:"Select a workspace",optionsAction:"options",optionsInput:{token:"$token"},optionValueField:"id",optionLabelField:"name",optionDescriptionField:"type"}],submit:{metadata:{apiToken:"$token",ownerId:"$workspace.id",ownerName:"$workspace.name"},displayName:"$workspace.name",button:he}},Sl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"type",header:"Type",width:"w-40",cell:"badge"}],searchPlaceholder:"Search services...",searchFields:["name"],dedupeByConfigField:"serviceId",emptyState:{noMatches:"No services found.",allConfigured:"All services already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{serviceId:"$item.id",serviceName:"$item.name",serviceType:"$item.type"}}}}});var AA,df;var bf=d(()=>{sf();AA=["apiToken"],df={id:"render",name:"Render",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:AA,subtitle:"Forward your Render service logs directly to Sazabi for real-time monitoring.",features:["Log forwarding","Service monitoring","Environment filtering"],setupSkill:C,dashboard:{iconKey:"render",intakeSourceId:"render-syslog",streamSelectorLayout:"sidepanel",connectionMetadataSection:{title:"Render details",description:"The Render workspace linked to this connection.",fields:[{key:"ownerId",label:"Workspace ID",description:"Render workspace linked to this connection."}]},actions:{list:{options:{procedure:"render.listWorkspaces",itemsField:"workspaces",sensitiveInputFields:["token"]},list:{procedure:"render.listServices",itemsField:"services"}}}}}});var Tl;var yf=d(()=>{Tl={steps:[{kind:"prose",text:"Configure your Sentry SDK to forward errors to Sazabi using the DSN below. This works with all official Sentry SDKs."},{kind:"copyable",label:"Sentry DSN",value:"https://${context.publicKey}@sentry-dsn.${context.projectRegion}.intake.${context.intakeDomain}/0",copyLabel:"DSN"},{kind:"code",label:"JavaScript / Node.js",language:"javascript",copyLabel:"JavaScript",value:`import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://\${context.publicKey}@sentry-dsn.\${context.projectRegion}.intake.\${context.intakeDomain}/0",
});`},{kind:"code",label:"Python",language:"python",copyLabel:"Python",value:`import sentry_sdk

sentry_sdk.init(
    dsn="https://\${context.publicKey}@sentry-dsn.\${context.projectRegion}.intake.\${context.intakeDomain}/0",
)`},{kind:"prose",text:"This DSN works with any official Sentry SDK including Go, Ruby, Java, .NET, and more. Simply replace your existing Sentry DSN with the one above."}]}});var mf;var pf=d(()=>{yf();mf={id:"sentry",name:"Sentry SDK",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Sentry SDK errors and events directly to Sazabi for AI-powered error tracking.",features:["Error forwarding","Exception tracking","SDK integration"],setupSkill:C,dashboard:{iconKey:"sentry",intakeSourceId:"sentry-dsn"}}});var Pl;var vf=d(()=>{se();Pl={kind:"linear",steps:[{kind:"prose",text:"You must be an **Owner** or **Manager** in the Sentry organization — creating an Internal Integration requires the `org:write` scope, which is only granted to Owners and Managers. The Admin role does not include `org:write`, so a personal user auth token minted by an Admin cannot create the Internal Integration and Sentry will return 403. Create a Sentry user auth token with the following permissions: **Organization: Read & Write** (the `org:write` scope), **Project: Read**, and **Issue & Event: Read**. The `org:write` scope is required for Sazabi to create the Internal Integration; the integration itself only receives read-level webhook events. Confirm the Permissions Preview at the bottom of the Sentry form shows `event:read, org:write, project:read` before submitting."},{kind:"external-link",label:"Open Sentry auth token settings",href:"https://sentry.io/settings/account/api/auth-tokens/new-token/"},{id:"token",kind:"secret",label:"Sentry auth token",description:"Token with org:write, project:read, and event:read scopes.",placeholder:"Enter your Sentry auth token"},{id:"organizationSlug",kind:"text",label:"Sentry organization slug",description:"The slug from your Sentry URL: sentry.io/organizations/<slug>/",placeholder:"e.g. my-org",pattern:"^[a-z0-9][a-z0-9-]*[a-z0-9]$",patternMessage:"Enter a valid Sentry organization slug (lowercase, hyphens allowed)."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token",organizationSlug:"$organizationSlug"},resultAs:"validate"}],metadata:{connectionMode:"native",sentryAuthToken:"$token",organizationSlug:"$organizationSlug"},button:he}}});var DA,If;var ff=d(()=>{vf();DA=["sentryAuthToken"],If={id:"sentry_platform",name:"Sentry",capabilities:["native"],auth:["apiToken"],delivery:["push"],streamCardinality:"single",sensitiveFields:DA,subtitle:"Connect your Sentry organization to stream errors, issues, and alerts to Sazabi in real-time.",features:["Error streaming","Issue tracking","Alert forwarding","Metric alerts"],setupSkill:C,dashboard:{iconKey:"sentry",intakeSourceId:"sentry-platform",actions:{submit:{validate:{kind:"source-action",actionId:"validate",sensitiveInputFields:["token"]}}}}}});var Al;var kf=d(()=>{se();Al={steps:[{kind:"prose",text:"In the [Supabase dashboard](https://supabase.com/dashboard), open Project Settings > Log Drains and click **Add destination**. Fill in the fields below in order — they map 1:1 to the Supabase form. Under **Custom Headers**, Supabase pre-fills a `Content-Type` row when OTLP is selected; **leave it in place** and click **Add a new header** to add the `Authorization` row alongside it. Note: Log Drains require a Supabase Pro, Team, or Enterprise plan."},{kind:"copyable",label:"Name",value:"Sazabi"},{kind:"copyable",label:"Description",value:"Forward Supabase logs to Sazabi for observability and AI analysis."},{kind:"copyable",label:"Type",value:"OpenTelemetry Protocol (OTLP)"},{kind:"copyable",label:"OTLP Endpoint",value:"https://supabase.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Protocol",value:"HTTP/Protobuf"},{kind:"copyable",label:"Gzip Compression",value:"Enabled"},{kind:"copyable-pairs",label:"Custom Headers",pairs:[{name:"Content-Type",value:"application/x-protobuf",description:"Pre-filled by Supabase — keep as-is."},{name:"Authorization",value:ot,description:"Click **Add a new header** and paste these values."}]}]}});var $f;var wf=d(()=>{kf();$f={id:"supabase",name:"Supabase",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Supabase project logs directly to Sazabi for unified observability.",features:["Database logs","Auth events","Edge Function logs"],setupSkill:C,dashboard:{iconKey:"supabase",intakeSourceId:"supabase"}}});var Dl;var _f=d(()=>{se();Dl={steps:[{kind:"ordered-steps",items:zn("Temporal worker")},jn,...sr("temporal")]}});var Of;var Sf=d(()=>{_f();Of={id:"temporal",name:"Temporal",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual worker setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward OpenTelemetry logs and traces from your Temporal workers to Sazabi for durable execution observability.",features:["Worker logs","Workflow and activity traces"],setupSkill:C,dashboard:{iconKey:"temporal",intakeSourceId:"temporal"}}});var Nl;var Tf=d(()=>{Nl={perStreamInstructions:!0,steps:[{kind:"ordered-steps",items:["Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns your `trigger.config.ts` file.","Add `SAZABI_API_KEY` to the Trigger.dev deployment environment using the public key shown below.","Configure `telemetry.logExporters` directly in `trigger.config.ts`. Trigger.dev reserves `OTEL_*` environment variables for its own internal telemetry, so do not use them for this integration.","Redeploy your Trigger.dev project so task logs are exported to Sazabi."]},{kind:"copyable",label:"`SAZABI_API_KEY`",value:"${context.publicKey}",copyLabel:"Sazabi API key",description:"Store this as a secret in the Trigger.dev environment that runs your tasks."},{kind:"copyable",label:"Sazabi log intake URL",value:"https://trigger-dev.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs",copyLabel:"Sazabi log intake URL"},{kind:"code",label:"`trigger.config.ts`",language:"typescript",value:`import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
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
`,copyLabel:"Trigger.dev config snippet"},{kind:"bulleted-list",items:["This v1 source ingests logs only. Trace exporters, metrics exporters, alert webhooks, and management API polling are intentionally out of scope.","Use `telemetry.logExporters`; do not configure this source through `telemetry.exporters`, Trigger.dev alert webhooks, or management API polling."]}]}});var Pf;var Af=d(()=>{Tf();Pf={id:"trigger_dev",name:"Trigger.dev",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual trigger.config.ts setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Trigger.dev job logs directly to Sazabi for background job monitoring.",features:["Task logs","Run failure logs","Background job monitoring"],setupSkill:C,dashboard:{iconKey:"trigger-dev",intakeSourceId:"trigger-dev"}}});var Ll;var Df=d(()=>{Ll={perStreamInstructions:!0,steps:[{kind:"prose",text:"Forward Vector logs to Sazabi over OTLP/HTTP. Vector 0.51.0 or later is required for the `otlp` encoding codec. The configuration pipes events through a `remap` transform that builds the OTLP `resourceLogs` envelope — the sink's `otlp` codec does not construct this envelope on its own, so wiring raw sources directly into it drops 100% of events."},{kind:"code-tabs",label:"Vector logs sink",tabs:[{id:"yaml",label:"vector.yaml",language:"yaml",copyLabel:"YAML config",value:`transforms:
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
          codec: otlp`}]},{kind:"prose",text:'Replace `inputs: ["*"]` on the `remap` transform with your specific source or transform IDs in production — `["*"]` also matches `internal_metrics` and other unrelated components. Sazabi indexes logs and traces from Vector; metrics are accepted at the intake but silently dropped.'},{kind:"prose",text:'**Forwarding traces (optional):** add a second `opentelemetry` sink with `uri` ending in `/v1/traces` and explicit `inputs` referencing an already-OTLP-shaped source — typically an `opentelemetry` Vector source with `use_otlp_decoding.traces: true` (use `inputs: ["otlp_in.traces"]`). No remap is needed for traces. Do not wire `["*"]` into a traces sink.'}]}});var Nf;var Lf=d(()=>{Df();Nf={id:"vector",name:"Vector",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using the Vector observability pipeline.",features:["Kubernetes DaemonSet","High-throughput pipeline","Built-in transforms","Multiple source types"],setupSkill:C,dashboard:{iconKey:"vector",intakeSourceId:"vector"}}});var xl,Cl,zl;var Cf=d(()=>{se();xl={kind:"linear",steps:[{kind:"prose",text:"Create a full-access API token in your [Vercel account settings](https://vercel.com/account/tokens). Vercel tokens inherit your account permissions automatically. For team accounts, make sure you create the token while scoped to the correct team."},{id:"token",kind:"secret",label:"API token",placeholder:"Enter your Vercel API token"}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"},resultAs:"validate"}],metadata:{vercelApiToken:"$token",vercelTeamId:"$validate.teamId",vercelTeamName:"$validate.teamName"},button:he}},Cl=[{field:"name",header:"Project"},{field:"framework",header:"Framework",width:"w-32",cell:"badge",transform:"fallback:Unspecified"}],zl={content:{kind:"tabs",tabs:[{id:"logs",label:"Logs",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Cl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{ingestTraces:!1},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have logs drains configured."},toStreamItem:{displayName:"$item.name (Logs)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"logs",ingestTraces:!1}}}},{id:"traces",label:"Traces",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Cl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{ingestTraces:!0},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have traces drains configured."},toStreamItem:{displayName:"$item.name (Traces)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"traces",ingestTraces:!0}}}},{id:"analytics",label:"Analytics",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Cl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{drainType:"analytics"},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have analytics drains configured."},toStreamItem:{displayName:"$item.name (Analytics)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"analytics"}}}}]}}});var NA,xf;var zf=d(()=>{Cf();NA=["vercelApiToken"],xf={id:"vercel",name:"Vercel",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:NA,subtitle:"Forward your Vercel deployment logs, traces, and Web Analytics events directly to Sazabi for real-time analysis and alerting.",features:["Log forwarding","Trace forwarding","Web Analytics forwarding","Real-time streaming"],setupSkill:C,dashboard:{iconKey:"vercel",intakeSourceId:"vercel",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-enum-badge",header:"Type",width:"w-24",configField:"drainType",values:[{value:"logs",label:"Logs"},{value:"traces",label:"Traces"},{value:"analytics",label:"Analytics"}],legacyBooleanField:"ingestTraces",legacyTrueLabel:"Traces",legacyFalseLabel:"Logs",fallbackLabel:"N/A"}],actions:{submit:{validate:{kind:"source-action",actionId:"validate-token"}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var En,jf,DF,NF,dr,LF,CF,LA,CA,xA,xF;var Ef=d(()=>{nI();cI();hI();dI();mI();II();$I();OI();PI();NI();xI();EI();KI();BI();JI();WI();ZI();tf();nf();lf();gf();bf();pf();ff();wf();Sf();Af();Lf();zf();En=[oI,aI,uI,sI,yI,vI,kI,_I,TI,DI,CI,jI,RI,GI,MI,qI,XI,ef,of,cf,hf,df,If,mf,$f,Of,Pf,Nf,xf],jf=En,DF=Object.fromEntries(jf.map((e)=>[e.id,e.sensitiveFields??[]])),NF=Object.fromEntries(jf.flatMap((e)=>[...Object.values(e.dashboard?.actions?.submit??{}),...Object.values(e.dashboard?.actions?.list??{}),...Object.values(e.dashboard?.actions?.prefetch??{})].flatMap((t)=>{let o=t.sensitiveInputFields??[];if(o.length===0)return[];return[["procedure"in t?t.procedure:`${e.id}.${t.actionId}`,o]]}))),dr=["vercel","cloudflare","railway","render","fly_io","netlify","supabase","digital_ocean","inngest","trigger_dev","temporal","mastra","neon","langchain","daytona","e2b","cloudwatch","convex","datadog","sentry","sentry_platform","openrouter","posthog","gcp","otel","fluent_bit","vector","grafana_alloy","otel_collector"],LF=En.map((e)=>({id:e.id,name:e.name,capabilities:e.capabilities})),CF=Object.fromEntries(En.map((e)=>[e.id,{name:e.name,setupSkill:e.setupSkill}])),LA={cloudflare:qc,cloudwatch:Xc,convex:Qc,digital_ocean:ol,fly_io:cl,gcp:ul,posthog:kl,render:Ol,sentry_platform:Pl,vercel:xl},CA={cloudflare:Wc,cloudwatch:Zc,convex:el,digital_ocean:nl,fly_io:ll,gcp:hl,posthog:$l,render:Sl,vercel:zl},xA={cloudflare:Yc,datadog:tl,daytona:rl,fluent_bit:al,grafana_alloy:sl,e2b:il,gcp:gl,inngest:dl,langchain:bl,mastra:yl,neon:ml,netlify:pl,openrouter:vl,otel:Il,otel_collector:fl,posthog:wl,railway:_l,sentry:Tl,supabase:Al,temporal:Dl,trigger_dev:Nl,vector:Ll},xF=En.map((e)=>({sourceId:e.id,name:e.name,capabilities:e.capabilities,setupAuthModes:e.auth,deliveryModes:e.delivery,hasDashboardMetadata:Boolean(e.dashboard),hasNativeFlow:Boolean(LA[e.id]),hasManualFlow:Boolean(xA[e.id]),hasStreamSelector:Boolean(CA[e.id]),lifecycleEligible:e.lifecycleEligible??!1,lifecycleSkipReason:e.lifecycleSkipReason}))});var Uf=d(()=>{Ef()});var jl=d(()=>{tI();Uf()});function m(e,t,o){function n(c,u){if(!c._zod)Object.defineProperty(c,"_zod",{value:{def:u,constr:a,traits:new Set},enumerable:!1});if(c._zod.traits.has(e))return;c._zod.traits.add(e),t(c,u);let h=a.prototype,s=Object.keys(h);for(let g=0;g<s.length;g++){let b=s[g];if(!(b in c))c[b]=h[b].bind(c)}}let r=o?.Parent??Object;class i extends r{}Object.defineProperty(i,"name",{value:e});function a(c){var u;let h=o?.Parent?new i:this;n(h,c),(u=h._zod).deferred??(u.deferred=[]);for(let s of h._zod.deferred)s();return h}return Object.defineProperty(a,"init",{value:n}),Object.defineProperty(a,Symbol.hasInstance,{value:(c)=>{if(o?.Parent&&c instanceof o.Parent)return!0;return c?._zod?.traits?.has(e)}}),Object.defineProperty(a,"name",{value:e}),a}function ue(e){if(e)Object.assign(Ao,e);return Ao}var El,Ul,nt,qt,Ao;var br=d(()=>{El=Object.freeze({status:"aborted"});Ul=Symbol("zod_brand");nt=class nt extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}};qt=class qt extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`);this.name="ZodEncodeError"}};Ao={}});var w={};Qe(w,{unwrapMessage:()=>Do,uint8ArrayToHex:()=>iD,uint8ArrayToBase64url:()=>oD,uint8ArrayToBase64:()=>Ff,stringifyPrimitive:()=>k,slugify:()=>Fl,shallowClone:()=>Bl,safeExtend:()=>XA,required:()=>eD,randomString:()=>HA,propertyKeyTypes:()=>Co,promiseAllObject:()=>BA,primitiveTypes:()=>Hl,prefixIssues:()=>je,pick:()=>qA,partial:()=>QA,parsedType:()=>$,optionalKeys:()=>Ml,omit:()=>WA,objectClone:()=>KA,numKeys:()=>MA,nullish:()=>Dt,normalizeParams:()=>O,mergeDefs:()=>pt,merge:()=>ZA,jsonStringifyReplacer:()=>yr,joinValues:()=>I,issue:()=>pr,isPlainObject:()=>Lt,isObject:()=>Wt,hexToUint8Array:()=>nD,getSizableOrigin:()=>xo,getParsedType:()=>JA,getLengthableOrigin:()=>zo,getEnumValues:()=>No,getElementAtPath:()=>GA,floatSafeRemainder:()=>Kl,finalizeIssue:()=>Ce,extend:()=>YA,escapeRegex:()=>Me,esc:()=>Un,defineLazy:()=>G,createTransparentProxy:()=>VA,cloneDef:()=>FA,clone:()=>Pe,cleanRegex:()=>Lo,cleanEnum:()=>tD,captureStackTrace:()=>Rn,cached:()=>mr,base64urlToUint8Array:()=>rD,base64ToUint8Array:()=>Kf,assignProp:()=>Nt,assertNotEqual:()=>jA,assertNever:()=>UA,assertIs:()=>EA,assertEqual:()=>zA,assert:()=>RA,allowsEval:()=>Gl,aborted:()=>Ct,NUMBER_FORMAT_RANGES:()=>Jl,Class:()=>Gf,BIGINT_FORMAT_RANGES:()=>Vl});function zA(e){return e}function jA(e){return e}function EA(e){}function UA(e){throw Error("Unexpected value in exhaustive check")}function RA(e){}function No(e){let t=Object.values(e).filter((n)=>typeof n==="number");return Object.entries(e).filter(([n,r])=>t.indexOf(+n)===-1).map(([n,r])=>r)}function I(e,t="|"){return e.map((o)=>k(o)).join(t)}function yr(e,t){if(typeof t==="bigint")return t.toString();return t}function mr(e){return{get value(){{let o=e();return Object.defineProperty(this,"value",{value:o}),o}throw Error("cached value already set")}}}function Dt(e){return e===null||e===void 0}function Lo(e){let t=e.startsWith("^")?1:0,o=e.endsWith("$")?e.length-1:e.length;return e.slice(t,o)}function Kl(e,t){let o=(e.toString().split(".")[1]||"").length,n=t.toString(),r=(n.split(".")[1]||"").length;if(r===0&&/\d?e-\d?/.test(n)){let u=n.match(/\d?e-(\d?)/);if(u?.[1])r=Number.parseInt(u[1])}let i=o>r?o:r,a=Number.parseInt(e.toFixed(i).replace(".","")),c=Number.parseInt(t.toFixed(i).replace(".",""));return a%c/10**i}function G(e,t,o){let n=void 0;Object.defineProperty(e,t,{get(){if(n===Rf)return;if(n===void 0)n=Rf,n=o();return n},set(r){Object.defineProperty(e,t,{value:r})},configurable:!0})}function KA(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function Nt(e,t,o){Object.defineProperty(e,t,{value:o,writable:!0,enumerable:!0,configurable:!0})}function pt(...e){let t={};for(let o of e){let n=Object.getOwnPropertyDescriptors(o);Object.assign(t,n)}return Object.defineProperties({},t)}function FA(e){return pt(e._zod.def)}function GA(e,t){if(!t)return e;return t.reduce((o,n)=>o?.[n],e)}function BA(e){let t=Object.keys(e),o=t.map((n)=>e[n]);return Promise.all(o).then((n)=>{let r={};for(let i=0;i<t.length;i++)r[t[i]]=n[i];return r})}function HA(e=10){let o="";for(let n=0;n<e;n++)o+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return o}function Un(e){return JSON.stringify(e)}function Fl(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}function Wt(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function Lt(e){if(Wt(e)===!1)return!1;let t=e.constructor;if(t===void 0)return!0;if(typeof t!=="function")return!0;let o=t.prototype;if(Wt(o)===!1)return!1;if(Object.prototype.hasOwnProperty.call(o,"isPrototypeOf")===!1)return!1;return!0}function Bl(e){if(Lt(e))return{...e};if(Array.isArray(e))return[...e];return e}function MA(e){let t=0;for(let o in e)if(Object.prototype.hasOwnProperty.call(e,o))t++;return t}function Me(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Pe(e,t,o){let n=new e._zod.constr(t??e._zod.def);if(!t||o?.parent)n._zod.parent=e;return n}function O(e){let t=e;if(!t)return{};if(typeof t==="string")return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}if(delete t.message,typeof t.error==="string")return{...t,error:()=>t.error};return t}function VA(e){let t;return new Proxy({},{get(o,n,r){return t??(t=e()),Reflect.get(t,n,r)},set(o,n,r,i){return t??(t=e()),Reflect.set(t,n,r,i)},has(o,n){return t??(t=e()),Reflect.has(t,n)},deleteProperty(o,n){return t??(t=e()),Reflect.deleteProperty(t,n)},ownKeys(o){return t??(t=e()),Reflect.ownKeys(t)},getOwnPropertyDescriptor(o,n){return t??(t=e()),Reflect.getOwnPropertyDescriptor(t,n)},defineProperty(o,n,r){return t??(t=e()),Reflect.defineProperty(t,n,r)}})}function k(e){if(typeof e==="bigint")return e.toString()+"n";if(typeof e==="string")return`"${e}"`;return`${e}`}function Ml(e){return Object.keys(e).filter((t)=>{return e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional"})}function qA(e,t){let o=e._zod.def,n=o.checks;if(n&&n.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let i=pt(e._zod.def,{get shape(){let a={};for(let c in t){if(!(c in o.shape))throw Error(`Unrecognized key: "${c}"`);if(!t[c])continue;a[c]=o.shape[c]}return Nt(this,"shape",a),a},checks:[]});return Pe(e,i)}function WA(e,t){let o=e._zod.def,n=o.checks;if(n&&n.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let i=pt(e._zod.def,{get shape(){let a={...e._zod.def.shape};for(let c in t){if(!(c in o.shape))throw Error(`Unrecognized key: "${c}"`);if(!t[c])continue;delete a[c]}return Nt(this,"shape",a),a},checks:[]});return Pe(e,i)}function YA(e,t){if(!Lt(t))throw Error("Invalid input to extend: expected a plain object");let o=e._zod.def.checks;if(o&&o.length>0){let i=e._zod.def.shape;for(let a in t)if(Object.getOwnPropertyDescriptor(i,a)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let r=pt(e._zod.def,{get shape(){let i={...e._zod.def.shape,...t};return Nt(this,"shape",i),i}});return Pe(e,r)}function XA(e,t){if(!Lt(t))throw Error("Invalid input to safeExtend: expected a plain object");let o=pt(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return Nt(this,"shape",n),n}});return Pe(e,o)}function ZA(e,t){let o=pt(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return Nt(this,"shape",n),n},get catchall(){return t._zod.def.catchall},checks:[]});return Pe(e,o)}function QA(e,t,o){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let a=pt(t._zod.def,{get shape(){let c=t._zod.def.shape,u={...c};if(o)for(let h in o){if(!(h in c))throw Error(`Unrecognized key: "${h}"`);if(!o[h])continue;u[h]=e?new e({type:"optional",innerType:c[h]}):c[h]}else for(let h in c)u[h]=e?new e({type:"optional",innerType:c[h]}):c[h];return Nt(this,"shape",u),u},checks:[]});return Pe(t,a)}function eD(e,t,o){let n=pt(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(o)for(let a in o){if(!(a in i))throw Error(`Unrecognized key: "${a}"`);if(!o[a])continue;i[a]=new e({type:"nonoptional",innerType:r[a]})}else for(let a in r)i[a]=new e({type:"nonoptional",innerType:r[a]});return Nt(this,"shape",i),i}});return Pe(t,n)}function Ct(e,t=0){if(e.aborted===!0)return!0;for(let o=t;o<e.issues.length;o++)if(e.issues[o]?.continue!==!0)return!0;return!1}function je(e,t){return t.map((o)=>{var n;return(n=o).path??(n.path=[]),o.path.unshift(e),o})}function Do(e){return typeof e==="string"?e:e?.message}function Ce(e,t,o){let n={...e,path:e.path??[]};if(!e.message){let r=Do(e.inst?._zod.def?.error?.(e))??Do(t?.error?.(e))??Do(o.customError?.(e))??Do(o.localeError?.(e))??"Invalid input";n.message=r}if(delete n.inst,delete n.continue,!t?.reportInput)delete n.input;return n}function xo(e){if(e instanceof Set)return"set";if(e instanceof Map)return"map";if(e instanceof File)return"file";return"unknown"}function zo(e){if(Array.isArray(e))return"array";if(typeof e==="string")return"string";return"unknown"}function $(e){let t=typeof e;switch(t){case"number":return Number.isNaN(e)?"nan":"number";case"object":{if(e===null)return"null";if(Array.isArray(e))return"array";let o=e;if(o&&Object.getPrototypeOf(o)!==Object.prototype&&"constructor"in o&&o.constructor)return o.constructor.name}}return t}function pr(...e){let[t,o,n]=e;if(typeof t==="string")return{message:t,code:"custom",input:o,inst:n};return{...t}}function tD(e){return Object.entries(e).filter(([t,o])=>{return Number.isNaN(Number.parseInt(t,10))}).map((t)=>t[1])}function Kf(e){let t=atob(e),o=new Uint8Array(t.length);for(let n=0;n<t.length;n++)o[n]=t.charCodeAt(n);return o}function Ff(e){let t="";for(let o=0;o<e.length;o++)t+=String.fromCharCode(e[o]);return btoa(t)}function rD(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),o="=".repeat((4-t.length%4)%4);return Kf(t+o)}function oD(e){return Ff(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function nD(e){let t=e.replace(/^0x/,"");if(t.length%2!==0)throw Error("Invalid hex string length");let o=new Uint8Array(t.length/2);for(let n=0;n<t.length;n+=2)o[n/2]=Number.parseInt(t.slice(n,n+2),16);return o}function iD(e){return Array.from(e).map((t)=>t.toString(16).padStart(2,"0")).join("")}class Gf{constructor(...e){}}var Rf,Rn,Gl,JA=(e)=>{let t=typeof e;switch(t){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(e))return"array";if(e===null)return"null";if(e.then&&typeof e.then==="function"&&e.catch&&typeof e.catch==="function")return"promise";if(typeof Map<"u"&&e instanceof Map)return"map";if(typeof Set<"u"&&e instanceof Set)return"set";if(typeof Date<"u"&&e instanceof Date)return"date";if(typeof File<"u"&&e instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${t}`)}},Co,Hl,Jl,Vl;var x=d(()=>{Rf=Symbol("evaluating");Rn="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};Gl=mr(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(e){return!1}});Co=new Set(["string","number","symbol"]),Hl=new Set(["string","number","bigint","boolean","symbol","undefined"]);Jl={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Vl={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]}});function Eo(e,t=(o)=>o.message){let o={},n=[];for(let r of e.issues)if(r.path.length>0)o[r.path[0]]=o[r.path[0]]||[],o[r.path[0]].push(t(r));else n.push(t(r));return{formErrors:n,fieldErrors:o}}function Uo(e,t=(o)=>o.message){let o={_errors:[]},n=(r)=>{for(let i of r.issues)if(i.code==="invalid_union"&&i.errors.length)i.errors.map((a)=>n({issues:a}));else if(i.code==="invalid_key")n({issues:i.issues});else if(i.code==="invalid_element")n({issues:i.issues});else if(i.path.length===0)o._errors.push(t(i));else{let a=o,c=0;while(c<i.path.length){let u=i.path[c];if(c!==i.path.length-1)a[u]=a[u]||{_errors:[]};else a[u]=a[u]||{_errors:[]},a[u]._errors.push(t(i));a=a[u],c++}}};return n(e),o}function ql(e,t=(o)=>o.message){let o={errors:[]},n=(r,i=[])=>{var a,c;for(let u of r.issues)if(u.code==="invalid_union"&&u.errors.length)u.errors.map((h)=>n({issues:h},u.path));else if(u.code==="invalid_key")n({issues:u.issues},u.path);else if(u.code==="invalid_element")n({issues:u.issues},u.path);else{let h=[...i,...u.path];if(h.length===0){o.errors.push(t(u));continue}let s=o,g=0;while(g<h.length){let b=h[g],y=g===h.length-1;if(typeof b==="string")s.properties??(s.properties={}),(a=s.properties)[b]??(a[b]={errors:[]}),s=s.properties[b];else s.items??(s.items=[]),(c=s.items)[b]??(c[b]={errors:[]}),s=s.items[b];if(y)s.errors.push(t(u));g++}}};return n(e),o}function Hf(e){let t=[],o=e.map((n)=>typeof n==="object"?n.key:n);for(let n of o)if(typeof n==="number")t.push(`[${n}]`);else if(typeof n==="symbol")t.push(`[${JSON.stringify(String(n))}]`);else if(/[^\w$]/.test(n))t.push(`[${JSON.stringify(n)}]`);else{if(t.length)t.push(".");t.push(n)}return t.join("")}function Wl(e){let t=[],o=[...e.issues].sort((n,r)=>(n.path??[]).length-(r.path??[]).length);for(let n of o)if(t.push(`✖ ${n.message}`),n.path?.length)t.push(`  → at ${Hf(n.path)}`);return t.join(`
`)}var Bf=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,yr,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},jo,xe;var Yl=d(()=>{br();x();jo=m("$ZodError",Bf),xe=m("$ZodError",Bf,{Parent:Error})});var vr=(e)=>(t,o,n,r)=>{let i=n?Object.assign(n,{async:!1}):{async:!1},a=t._zod.run({value:o,issues:[]},i);if(a instanceof Promise)throw new nt;if(a.issues.length){let c=new(r?.Err??e)(a.issues.map((u)=>Ce(u,i,ue())));throw Rn(c,r?.callee),c}return a.value},Kn,Ir=(e)=>async(t,o,n,r)=>{let i=n?Object.assign(n,{async:!0}):{async:!0},a=t._zod.run({value:o,issues:[]},i);if(a instanceof Promise)a=await a;if(a.issues.length){let c=new(r?.Err??e)(a.issues.map((u)=>Ce(u,i,ue())));throw Rn(c,r?.callee),c}return a.value},Fn,fr=(e)=>(t,o,n)=>{let r=n?{...n,async:!1}:{async:!1},i=t._zod.run({value:o,issues:[]},r);if(i instanceof Promise)throw new nt;return i.issues.length?{success:!1,error:new(e??jo)(i.issues.map((a)=>Ce(a,r,ue())))}:{success:!0,data:i.value}},Xl,kr=(e)=>async(t,o,n)=>{let r=n?Object.assign(n,{async:!0}):{async:!0},i=t._zod.run({value:o,issues:[]},r);if(i instanceof Promise)i=await i;return i.issues.length?{success:!1,error:new e(i.issues.map((a)=>Ce(a,r,ue())))}:{success:!0,data:i.value}},Zl,Gn=(e)=>(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return vr(e)(t,o,r)},cD,Bn=(e)=>(t,o,n)=>{return vr(e)(t,o,n)},lD,Hn=(e)=>async(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return Ir(e)(t,o,r)},uD,Mn=(e)=>async(t,o,n)=>{return Ir(e)(t,o,n)},hD,Jn=(e)=>(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return fr(e)(t,o,r)},gD,Vn=(e)=>(t,o,n)=>{return fr(e)(t,o,n)},sD,qn=(e)=>async(t,o,n)=>{let r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return kr(e)(t,o,r)},dD,Wn=(e)=>async(t,o,n)=>{return kr(e)(t,o,n)},bD;var Ql=d(()=>{br();Yl();x();Kn=vr(xe),Fn=Ir(xe),Xl=fr(xe),Zl=kr(xe),cD=Gn(xe),lD=Bn(xe),uD=Hn(xe),hD=Mn(xe),gD=Jn(xe),sD=Vn(xe),dD=qn(xe),bD=Wn(xe)});var Je={};Qe(Je,{xid:()=>ou,uuid7:()=>vD,uuid6:()=>pD,uuid4:()=>mD,uuid:()=>Yt,uppercase:()=>Tu,unicodeEmail:()=>Mf,undefined:()=>Ou,ulid:()=>ru,time:()=>vu,string:()=>fu,sha512_hex:()=>RD,sha512_base64url:()=>FD,sha512_base64:()=>KD,sha384_hex:()=>jD,sha384_base64url:()=>UD,sha384_base64:()=>ED,sha256_hex:()=>CD,sha256_base64url:()=>zD,sha256_base64:()=>xD,sha1_hex:()=>DD,sha1_base64url:()=>LD,sha1_base64:()=>ND,rfc5322Email:()=>fD,number:()=>Ro,null:()=>_u,nanoid:()=>iu,md5_hex:()=>TD,md5_base64url:()=>AD,md5_base64:()=>PD,mac:()=>su,lowercase:()=>Su,ksuid:()=>nu,ipv6:()=>gu,ipv4:()=>hu,integer:()=>$u,idnEmail:()=>kD,html5Email:()=>ID,hostname:()=>_D,hex:()=>SD,guid:()=>cu,extendedDuration:()=>yD,emoji:()=>uu,email:()=>lu,e164:()=>mu,duration:()=>au,domain:()=>OD,datetime:()=>Iu,date:()=>pu,cuid2:()=>tu,cuid:()=>eu,cidrv6:()=>bu,cidrv4:()=>du,browserEmail:()=>$D,boolean:()=>wu,bigint:()=>ku,base64url:()=>Yn,base64:()=>yu});function uu(){return new RegExp(wD,"u")}function Vf(e){return typeof e.precision==="number"?e.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":e.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function vu(e){return new RegExp(`^${Vf(e)}$`)}function Iu(e){let t=Vf({precision:e.precision}),o=["Z"];if(e.local)o.push("");if(e.offset)o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let n=`${t}(?:${o.join("|")})`;return new RegExp(`^${Jf}T(?:${n})$`)}function Ko(e,t){return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`)}function Fo(e){return new RegExp(`^[A-Za-z0-9_-]{${e}}$`)}var eu,tu,ru,ou,nu,iu,au,yD,cu,Yt=(e)=>{if(!e)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)},mD,pD,vD,lu,ID,fD,Mf,kD,$D,wD="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",hu,gu,su=(e)=>{let t=Me(e??":");return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`)},du,bu,yu,Yn,_D,OD,mu,Jf="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",pu,fu=(e)=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)},ku,$u,Ro,wu,_u,Ou,Su,Tu,SD,TD,PD,AD,DD,ND,LD,CD,xD,zD,jD,ED,UD,RD,KD,FD;var Xn=d(()=>{x();eu=/^[cC][^\s-]{8,}$/,tu=/^[0-9a-z]+$/,ru=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,ou=/^[0-9a-vA-V]{20}$/,nu=/^[A-Za-z0-9]{27}$/,iu=/^[a-zA-Z0-9_-]{21}$/,au=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,yD=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,cu=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,mD=Yt(4),pD=Yt(6),vD=Yt(7),lu=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,ID=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,fD=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Mf=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,kD=Mf,$D=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;hu=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,gu=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,du=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,bu=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,yu=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Yn=/^[A-Za-z0-9_-]*$/,_D=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,OD=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,mu=/^\+[1-9]\d{6,14}$/,pu=new RegExp(`^${Jf}$`);ku=/^-?\d+n?$/,$u=/^-?\d+$/,Ro=/^-?\d+(?:\.\d+)?$/,wu=/^(?:true|false)$/i,_u=/^null$/i,Ou=/^undefined$/i,Su=/^[^A-Z]*$/,Tu=/^[^a-z]*$/,SD=/^[0-9a-fA-F]*$/;TD=/^[0-9a-fA-F]{32}$/,PD=Ko(22,"=="),AD=Fo(22),DD=/^[0-9a-fA-F]{40}$/,ND=Ko(27,"="),LD=Fo(27),CD=/^[0-9a-fA-F]{64}$/,xD=Ko(43,"="),zD=Fo(43),jD=/^[0-9a-fA-F]{96}$/,ED=Ko(64,""),UD=Fo(64),RD=/^[0-9a-fA-F]{128}$/,KD=Ko(86,"=="),FD=Fo(86)});function qf(e,t,o){if(e.issues.length)t.issues.push(...je(o,e.issues))}var te,Wf,Zn,Qn,Pu,Au,Du,Nu,Lu,Cu,xu,zu,ju,$r,Eu,Uu,Ru,Ku,Fu,Gu,Bu,Hu,Mu;var ei=d(()=>{br();Xn();x();te=m("$ZodCheck",(e,t)=>{var o;e._zod??(e._zod={}),e._zod.def=t,(o=e._zod).onattach??(o.onattach=[])}),Wf={number:"number",bigint:"bigint",object:"date"},Zn=m("$ZodCheckLessThan",(e,t)=>{te.init(e,t);let o=Wf[typeof t.value];e._zod.onattach.push((n)=>{let r=n._zod.bag,i=(t.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;if(t.value<i)if(t.inclusive)r.maximum=t.value;else r.exclusiveMaximum=t.value}),e._zod.check=(n)=>{if(t.inclusive?n.value<=t.value:n.value<t.value)return;n.issues.push({origin:o,code:"too_big",maximum:typeof t.value==="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Qn=m("$ZodCheckGreaterThan",(e,t)=>{te.init(e,t);let o=Wf[typeof t.value];e._zod.onattach.push((n)=>{let r=n._zod.bag,i=(t.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;if(t.value>i)if(t.inclusive)r.minimum=t.value;else r.exclusiveMinimum=t.value}),e._zod.check=(n)=>{if(t.inclusive?n.value>=t.value:n.value>t.value)return;n.issues.push({origin:o,code:"too_small",minimum:typeof t.value==="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Pu=m("$ZodCheckMultipleOf",(e,t)=>{te.init(e,t),e._zod.onattach.push((o)=>{var n;(n=o._zod.bag).multipleOf??(n.multipleOf=t.value)}),e._zod.check=(o)=>{if(typeof o.value!==typeof t.value)throw Error("Cannot mix number and bigint in multiple_of check.");if(typeof o.value==="bigint"?o.value%t.value===BigInt(0):Kl(o.value,t.value)===0)return;o.issues.push({origin:typeof o.value,code:"not_multiple_of",divisor:t.value,input:o.value,inst:e,continue:!t.abort})}}),Au=m("$ZodCheckNumberFormat",(e,t)=>{te.init(e,t),t.format=t.format||"float64";let o=t.format?.includes("int"),n=o?"int":"number",[r,i]=Jl[t.format];e._zod.onattach.push((a)=>{let c=a._zod.bag;if(c.format=t.format,c.minimum=r,c.maximum=i,o)c.pattern=$u}),e._zod.check=(a)=>{let c=a.value;if(o){if(!Number.isInteger(c)){a.issues.push({expected:n,format:t.format,code:"invalid_type",continue:!1,input:c,inst:e});return}if(!Number.isSafeInteger(c)){if(c>0)a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});else a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});return}}if(c<r)a.issues.push({origin:"number",input:c,code:"too_small",minimum:r,inclusive:!0,inst:e,continue:!t.abort});if(c>i)a.issues.push({origin:"number",input:c,code:"too_big",maximum:i,inclusive:!0,inst:e,continue:!t.abort})}}),Du=m("$ZodCheckBigIntFormat",(e,t)=>{te.init(e,t);let[o,n]=Vl[t.format];e._zod.onattach.push((r)=>{let i=r._zod.bag;i.format=t.format,i.minimum=o,i.maximum=n}),e._zod.check=(r)=>{let i=r.value;if(i<o)r.issues.push({origin:"bigint",input:i,code:"too_small",minimum:o,inclusive:!0,inst:e,continue:!t.abort});if(i>n)r.issues.push({origin:"bigint",input:i,code:"too_big",maximum:n,inclusive:!0,inst:e,continue:!t.abort})}}),Nu=m("$ZodCheckMaxSize",(e,t)=>{var o;te.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Dt(r)&&r.size!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(t.maximum<r)n._zod.bag.maximum=t.maximum}),e._zod.check=(n)=>{let r=n.value;if(r.size<=t.maximum)return;n.issues.push({origin:xo(r),code:"too_big",maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Lu=m("$ZodCheckMinSize",(e,t)=>{var o;te.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Dt(r)&&r.size!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(t.minimum>r)n._zod.bag.minimum=t.minimum}),e._zod.check=(n)=>{let r=n.value;if(r.size>=t.minimum)return;n.issues.push({origin:xo(r),code:"too_small",minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Cu=m("$ZodCheckSizeEquals",(e,t)=>{var o;te.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Dt(r)&&r.size!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.minimum=t.size,r.maximum=t.size,r.size=t.size}),e._zod.check=(n)=>{let r=n.value,i=r.size;if(i===t.size)return;let a=i>t.size;n.issues.push({origin:xo(r),...a?{code:"too_big",maximum:t.size}:{code:"too_small",minimum:t.size},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),xu=m("$ZodCheckMaxLength",(e,t)=>{var o;te.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Dt(r)&&r.length!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(t.maximum<r)n._zod.bag.maximum=t.maximum}),e._zod.check=(n)=>{let r=n.value;if(r.length<=t.maximum)return;let a=zo(r);n.issues.push({origin:a,code:"too_big",maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),zu=m("$ZodCheckMinLength",(e,t)=>{var o;te.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Dt(r)&&r.length!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(t.minimum>r)n._zod.bag.minimum=t.minimum}),e._zod.check=(n)=>{let r=n.value;if(r.length>=t.minimum)return;let a=zo(r);n.issues.push({origin:a,code:"too_small",minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),ju=m("$ZodCheckLengthEquals",(e,t)=>{var o;te.init(e,t),(o=e._zod.def).when??(o.when=(n)=>{let r=n.value;return!Dt(r)&&r.length!==void 0}),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.minimum=t.length,r.maximum=t.length,r.length=t.length}),e._zod.check=(n)=>{let r=n.value,i=r.length;if(i===t.length)return;let a=zo(r),c=i>t.length;n.issues.push({origin:a,...c?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),$r=m("$ZodCheckStringFormat",(e,t)=>{var o,n;if(te.init(e,t),e._zod.onattach.push((r)=>{let i=r._zod.bag;if(i.format=t.format,t.pattern)i.patterns??(i.patterns=new Set),i.patterns.add(t.pattern)}),t.pattern)(o=e._zod).check??(o.check=(r)=>{if(t.pattern.lastIndex=0,t.pattern.test(r.value))return;r.issues.push({origin:"string",code:"invalid_format",format:t.format,input:r.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})});else(n=e._zod).check??(n.check=()=>{})}),Eu=m("$ZodCheckRegex",(e,t)=>{$r.init(e,t),e._zod.check=(o)=>{if(t.pattern.lastIndex=0,t.pattern.test(o.value))return;o.issues.push({origin:"string",code:"invalid_format",format:"regex",input:o.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Uu=m("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=Su),$r.init(e,t)}),Ru=m("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=Tu),$r.init(e,t)}),Ku=m("$ZodCheckIncludes",(e,t)=>{te.init(e,t);let o=Me(t.includes),n=new RegExp(typeof t.position==="number"?`^.{${t.position}}${o}`:o);t.pattern=n,e._zod.onattach.push((r)=>{let i=r._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(n)}),e._zod.check=(r)=>{if(r.value.includes(t.includes,t.position))return;r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:r.value,inst:e,continue:!t.abort})}}),Fu=m("$ZodCheckStartsWith",(e,t)=>{te.init(e,t);let o=new RegExp(`^${Me(t.prefix)}.*`);t.pattern??(t.pattern=o),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(o)}),e._zod.check=(n)=>{if(n.value.startsWith(t.prefix))return;n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Gu=m("$ZodCheckEndsWith",(e,t)=>{te.init(e,t);let o=new RegExp(`.*${Me(t.suffix)}$`);t.pattern??(t.pattern=o),e._zod.onattach.push((n)=>{let r=n._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(o)}),e._zod.check=(n)=>{if(n.value.endsWith(t.suffix))return;n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}});Bu=m("$ZodCheckProperty",(e,t)=>{te.init(e,t),e._zod.check=(o)=>{let n=t.schema._zod.run({value:o.value[t.property],issues:[]},{});if(n instanceof Promise)return n.then((r)=>qf(r,o,t.property));qf(n,o,t.property);return}}),Hu=m("$ZodCheckMimeType",(e,t)=>{te.init(e,t);let o=new Set(t.mime);e._zod.onattach.push((n)=>{n._zod.bag.mime=t.mime}),e._zod.check=(n)=>{if(o.has(n.value.type))return;n.issues.push({code:"invalid_value",values:t.mime,input:n.value.type,inst:e,continue:!t.abort})}}),Mu=m("$ZodCheckOverwrite",(e,t)=>{te.init(e,t),e._zod.check=(o)=>{o.value=t.tx(o.value)}})});class ti{constructor(e=[]){if(this.content=[],this.indent=0,this)this.args=e}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e==="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let o=e.split(`
`).filter((i)=>i),n=Math.min(...o.map((i)=>i.length-i.trimStart().length)),r=o.map((i)=>i.slice(n)).map((i)=>" ".repeat(this.indent*2)+i);for(let i of r)this.content.push(i)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[""]).map((r)=>`  ${r}`)];return new e(...t,n.join(`
`))}}var Ju;var Vu=d(()=>{Ju={major:4,minor:3,patch:6}});function yh(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}function lk(e){if(!Yn.test(e))return!1;let t=e.replace(/[-_]/g,(n)=>n==="-"?"+":"/"),o=t.padEnd(Math.ceil(t.length/4)*4,"=");return yh(o)}function uk(e,t=null){try{let o=e.split(".");if(o.length!==3)return!1;let[n]=o;if(!n)return!1;let r=JSON.parse(atob(n));if("typ"in r&&r?.typ!=="JWT")return!1;if(!r.alg)return!1;if(t&&(!("alg"in r)||r.alg!==t))return!1;return!0}catch{return!1}}function Xf(e,t,o){if(e.issues.length)t.issues.push(...je(o,e.issues));t.value[o]=e.value}function ai(e,t,o,n,r){if(e.issues.length){if(r&&!(o in n))return;t.issues.push(...je(o,e.issues))}if(e.value===void 0){if(o in n)t.value[o]=void 0}else t.value[o]=e.value}function hk(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let o=Ml(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(o)}}function gk(e,t,o,n,r,i){let a=[],c=r.keySet,u=r.catchall._zod,h=u.def.type,s=u.optout==="optional";for(let g in t){if(c.has(g))continue;if(h==="never"){a.push(g);continue}let b=u.run({value:t[g],issues:[]},n);if(b instanceof Promise)e.push(b.then((y)=>ai(y,o,g,t,s)));else ai(b,o,g,t,s)}if(a.length)o.issues.push({code:"unrecognized_keys",keys:a,input:t,inst:i});if(!e.length)return o;return Promise.all(e).then(()=>{return o})}function Zf(e,t,o,n){for(let i of e)if(i.issues.length===0)return t.value=i.value,t;let r=e.filter((i)=>!Ct(i));if(r.length===1)return t.value=r[0].value,r[0];return t.issues.push({code:"invalid_union",input:t.value,inst:o,errors:e.map((i)=>i.issues.map((a)=>Ce(a,n,ue())))}),t}function Qf(e,t,o,n){let r=e.filter((i)=>i.issues.length===0);if(r.length===1)return t.value=r[0].value,t;if(r.length===0)t.issues.push({code:"invalid_union",input:t.value,inst:o,errors:e.map((i)=>i.issues.map((a)=>Ce(a,n,ue())))});else t.issues.push({code:"invalid_union",input:t.value,inst:o,errors:[],inclusive:!1});return t}function qu(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e===+t)return{valid:!0,data:e};if(Lt(e)&&Lt(t)){let o=Object.keys(t),n=Object.keys(e).filter((i)=>o.indexOf(i)!==-1),r={...e,...t};for(let i of n){let a=qu(e[i],t[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};r[i]=a.data}return{valid:!0,data:r}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let o=[];for(let n=0;n<e.length;n++){let r=e[n],i=t[n],a=qu(r,i);if(!a.valid)return{valid:!1,mergeErrorPath:[n,...a.mergeErrorPath]};o.push(a.data)}return{valid:!0,data:o}}return{valid:!1,mergeErrorPath:[]}}function ek(e,t,o){let n=new Map,r;for(let c of t.issues)if(c.code==="unrecognized_keys"){r??(r=c);for(let u of c.keys){if(!n.has(u))n.set(u,{});n.get(u).l=!0}}else e.issues.push(c);for(let c of o.issues)if(c.code==="unrecognized_keys")for(let u of c.keys){if(!n.has(u))n.set(u,{});n.get(u).r=!0}else e.issues.push(c);let i=[...n].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(i.length&&r)e.issues.push({...r,keys:i});if(Ct(e))return e;let a=qu(t.value,o.value);if(!a.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return e.value=a.data,e}function ri(e,t,o){if(e.issues.length)t.issues.push(...je(o,e.issues));t.value[o]=e.value}function tk(e,t,o,n,r,i,a){if(e.issues.length)if(Co.has(typeof n))o.issues.push(...je(n,e.issues));else o.issues.push({code:"invalid_key",origin:"map",input:r,inst:i,issues:e.issues.map((c)=>Ce(c,a,ue()))});if(t.issues.length)if(Co.has(typeof n))o.issues.push(...je(n,t.issues));else o.issues.push({origin:"map",code:"invalid_element",input:r,inst:i,key:n,issues:t.issues.map((c)=>Ce(c,a,ue()))});o.value.set(e.value,t.value)}function rk(e,t){if(e.issues.length)t.issues.push(...e.issues);t.value.add(e.value)}function ok(e,t){if(e.issues.length&&t===void 0)return{issues:[],value:void 0};return e}function nk(e,t){if(e.value===void 0)e.value=t.defaultValue;return e}function ik(e,t){if(!e.issues.length&&e.value===void 0)e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t});return e}function oi(e,t,o){if(e.issues.length)return e.aborted=!0,e;return t._zod.run({value:e.value,issues:e.issues},o)}function ni(e,t,o){if(e.issues.length)return e.aborted=!0,e;if((o.direction||"forward")==="forward"){let r=t.transform(e.value,e);if(r instanceof Promise)return r.then((i)=>ii(e,i,t.out,o));return ii(e,r,t.out,o)}else{let r=t.reverseTransform(e.value,e);if(r instanceof Promise)return r.then((i)=>ii(e,i,t.in,o));return ii(e,r,t.in,o)}}function ii(e,t,o,n){if(e.issues.length)return e.aborted=!0,e;return o._zod.run({value:t,issues:e.issues},n)}function ak(e){return e.value=Object.freeze(e.value),e}function ck(e,t,o,n){if(!e){let r={code:"custom",input:o,inst:n,path:[...n._zod.def.path??[]],continue:!n._zod.def.abort};if(n._zod.def.params)r.params=n._zod.def.params;t.issues.push(pr(r))}}var E,Xt,Q,Wu,Yu,Xu,Zu,Qu,eh,th,rh,oh,nh,ih,ah,ch,lh,uh,hh,gh,sh,dh,bh,mh,ph,vh,Ih,fh,ci,kh,Go,li,$h,wh,_h,Oh,Sh,Th,Ph,Ah,Dh,Nh,sk,Lh,Bo,Ch,xh,zh,ui,jh,Eh,Uh,Rh,Kh,Fh,Gh,hi,Bh,Hh,Mh,Jh,Vh,qh,Wh,Yh,Xh,Ho,Zh,Qh,eg,tg,rg,og;var ng=d(()=>{ei();br();Ql();Xn();x();Vu();x();E=m("$ZodType",(e,t)=>{var o;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Ju;let n=[...e._zod.def.checks??[]];if(e._zod.traits.has("$ZodCheck"))n.unshift(e);for(let r of n)for(let i of r._zod.onattach)i(e);if(n.length===0)(o=e._zod).deferred??(o.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let r=(a,c,u)=>{let h=Ct(a),s;for(let g of c){if(g._zod.def.when){if(!g._zod.def.when(a))continue}else if(h)continue;let b=a.issues.length,y=g._zod.check(a);if(y instanceof Promise&&u?.async===!1)throw new nt;if(s||y instanceof Promise)s=(s??Promise.resolve()).then(async()=>{if(await y,a.issues.length===b)return;if(!h)h=Ct(a,b)});else{if(a.issues.length===b)continue;if(!h)h=Ct(a,b)}}if(s)return s.then(()=>{return a});return a},i=(a,c,u)=>{if(Ct(a))return a.aborted=!0,a;let h=r(c,n,u);if(h instanceof Promise){if(u.async===!1)throw new nt;return h.then((s)=>e._zod.parse(s,u))}return e._zod.parse(h,u)};e._zod.run=(a,c)=>{if(c.skipChecks)return e._zod.parse(a,c);if(c.direction==="backward"){let h=e._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});if(h instanceof Promise)return h.then((s)=>{return i(s,a,c)});return i(h,a,c)}let u=e._zod.parse(a,c);if(u instanceof Promise){if(c.async===!1)throw new nt;return u.then((h)=>r(h,n,c))}return r(u,n,c)}}G(e,"~standard",()=>({validate:(r)=>{try{let i=Xl(e,r);return i.success?{value:i.data}:{issues:i.error?.issues}}catch(i){return Zl(e,r).then((a)=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),Xt=m("$ZodString",(e,t)=>{E.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??fu(e._zod.bag),e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=String(o.value)}catch(r){}if(typeof o.value==="string")return o;return o.issues.push({expected:"string",code:"invalid_type",input:o.value,inst:e}),o}}),Q=m("$ZodStringFormat",(e,t)=>{$r.init(e,t),Xt.init(e,t)}),Wu=m("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=cu),Q.init(e,t)}),Yu=m("$ZodUUID",(e,t)=>{if(t.version){let n={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(n===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=Yt(n))}else t.pattern??(t.pattern=Yt());Q.init(e,t)}),Xu=m("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=lu),Q.init(e,t)}),Zu=m("$ZodURL",(e,t)=>{Q.init(e,t),e._zod.check=(o)=>{try{let n=o.value.trim(),r=new URL(n);if(t.hostname){if(t.hostname.lastIndex=0,!t.hostname.test(r.hostname))o.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:t.hostname.source,input:o.value,inst:e,continue:!t.abort})}if(t.protocol){if(t.protocol.lastIndex=0,!t.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol))o.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:o.value,inst:e,continue:!t.abort})}if(t.normalize)o.value=r.href;else o.value=n;return}catch(n){o.issues.push({code:"invalid_format",format:"url",input:o.value,inst:e,continue:!t.abort})}}}),Qu=m("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=uu()),Q.init(e,t)}),eh=m("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=iu),Q.init(e,t)}),th=m("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=eu),Q.init(e,t)}),rh=m("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=tu),Q.init(e,t)}),oh=m("$ZodULID",(e,t)=>{t.pattern??(t.pattern=ru),Q.init(e,t)}),nh=m("$ZodXID",(e,t)=>{t.pattern??(t.pattern=ou),Q.init(e,t)}),ih=m("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=nu),Q.init(e,t)}),ah=m("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=Iu(t)),Q.init(e,t)}),ch=m("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=pu),Q.init(e,t)}),lh=m("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=vu(t)),Q.init(e,t)}),uh=m("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=au),Q.init(e,t)}),hh=m("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=hu),Q.init(e,t),e._zod.bag.format="ipv4"}),gh=m("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=gu),Q.init(e,t),e._zod.bag.format="ipv6",e._zod.check=(o)=>{try{new URL(`http://[${o.value}]`)}catch{o.issues.push({code:"invalid_format",format:"ipv6",input:o.value,inst:e,continue:!t.abort})}}}),sh=m("$ZodMAC",(e,t)=>{t.pattern??(t.pattern=su(t.delimiter)),Q.init(e,t),e._zod.bag.format="mac"}),dh=m("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=du),Q.init(e,t)}),bh=m("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=bu),Q.init(e,t),e._zod.check=(o)=>{let n=o.value.split("/");try{if(n.length!==2)throw Error();let[r,i]=n;if(!i)throw Error();let a=Number(i);if(`${a}`!==i)throw Error();if(a<0||a>128)throw Error();new URL(`http://[${r}]`)}catch{o.issues.push({code:"invalid_format",format:"cidrv6",input:o.value,inst:e,continue:!t.abort})}}});mh=m("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=yu),Q.init(e,t),e._zod.bag.contentEncoding="base64",e._zod.check=(o)=>{if(yh(o.value))return;o.issues.push({code:"invalid_format",format:"base64",input:o.value,inst:e,continue:!t.abort})}});ph=m("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=Yn),Q.init(e,t),e._zod.bag.contentEncoding="base64url",e._zod.check=(o)=>{if(lk(o.value))return;o.issues.push({code:"invalid_format",format:"base64url",input:o.value,inst:e,continue:!t.abort})}}),vh=m("$ZodE164",(e,t)=>{t.pattern??(t.pattern=mu),Q.init(e,t)});Ih=m("$ZodJWT",(e,t)=>{Q.init(e,t),e._zod.check=(o)=>{if(uk(o.value,t.alg))return;o.issues.push({code:"invalid_format",format:"jwt",input:o.value,inst:e,continue:!t.abort})}}),fh=m("$ZodCustomStringFormat",(e,t)=>{Q.init(e,t),e._zod.check=(o)=>{if(t.fn(o.value))return;o.issues.push({code:"invalid_format",format:t.format,input:o.value,inst:e,continue:!t.abort})}}),ci=m("$ZodNumber",(e,t)=>{E.init(e,t),e._zod.pattern=e._zod.bag.pattern??Ro,e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=Number(o.value)}catch(a){}let r=o.value;if(typeof r==="number"&&!Number.isNaN(r)&&Number.isFinite(r))return o;let i=typeof r==="number"?Number.isNaN(r)?"NaN":!Number.isFinite(r)?"Infinity":void 0:void 0;return o.issues.push({expected:"number",code:"invalid_type",input:r,inst:e,...i?{received:i}:{}}),o}}),kh=m("$ZodNumberFormat",(e,t)=>{Au.init(e,t),ci.init(e,t)}),Go=m("$ZodBoolean",(e,t)=>{E.init(e,t),e._zod.pattern=wu,e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=Boolean(o.value)}catch(i){}let r=o.value;if(typeof r==="boolean")return o;return o.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:e}),o}}),li=m("$ZodBigInt",(e,t)=>{E.init(e,t),e._zod.pattern=ku,e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=BigInt(o.value)}catch(r){}if(typeof o.value==="bigint")return o;return o.issues.push({expected:"bigint",code:"invalid_type",input:o.value,inst:e}),o}}),$h=m("$ZodBigIntFormat",(e,t)=>{Du.init(e,t),li.init(e,t)}),wh=m("$ZodSymbol",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(typeof r==="symbol")return o;return o.issues.push({expected:"symbol",code:"invalid_type",input:r,inst:e}),o}}),_h=m("$ZodUndefined",(e,t)=>{E.init(e,t),e._zod.pattern=Ou,e._zod.values=new Set([void 0]),e._zod.optin="optional",e._zod.optout="optional",e._zod.parse=(o,n)=>{let r=o.value;if(typeof r>"u")return o;return o.issues.push({expected:"undefined",code:"invalid_type",input:r,inst:e}),o}}),Oh=m("$ZodNull",(e,t)=>{E.init(e,t),e._zod.pattern=_u,e._zod.values=new Set([null]),e._zod.parse=(o,n)=>{let r=o.value;if(r===null)return o;return o.issues.push({expected:"null",code:"invalid_type",input:r,inst:e}),o}}),Sh=m("$ZodAny",(e,t)=>{E.init(e,t),e._zod.parse=(o)=>o}),Th=m("$ZodUnknown",(e,t)=>{E.init(e,t),e._zod.parse=(o)=>o}),Ph=m("$ZodNever",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{return o.issues.push({expected:"never",code:"invalid_type",input:o.value,inst:e}),o}}),Ah=m("$ZodVoid",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(typeof r>"u")return o;return o.issues.push({expected:"void",code:"invalid_type",input:r,inst:e}),o}}),Dh=m("$ZodDate",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{if(t.coerce)try{o.value=new Date(o.value)}catch(c){}let r=o.value,i=r instanceof Date;if(i&&!Number.isNaN(r.getTime()))return o;return o.issues.push({expected:"date",code:"invalid_type",input:r,...i?{received:"Invalid Date"}:{},inst:e}),o}});Nh=m("$ZodArray",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!Array.isArray(r))return o.issues.push({expected:"array",code:"invalid_type",input:r,inst:e}),o;o.value=Array(r.length);let i=[];for(let a=0;a<r.length;a++){let c=r[a],u=t.element._zod.run({value:c,issues:[]},n);if(u instanceof Promise)i.push(u.then((h)=>Xf(h,o,a)));else Xf(u,o,a)}if(i.length)return Promise.all(i).then(()=>o);return o}});sk=m("$ZodObject",(e,t)=>{if(E.init(e,t),!Object.getOwnPropertyDescriptor(t,"shape")?.get){let c=t.shape;Object.defineProperty(t,"shape",{get:()=>{let u={...c};return Object.defineProperty(t,"shape",{value:u}),u}})}let n=mr(()=>hk(t));G(e._zod,"propValues",()=>{let c=t.shape,u={};for(let h in c){let s=c[h]._zod;if(s.values){u[h]??(u[h]=new Set);for(let g of s.values)u[h].add(g)}}return u});let r=Wt,i=t.catchall,a;e._zod.parse=(c,u)=>{a??(a=n.value);let h=c.value;if(!r(h))return c.issues.push({expected:"object",code:"invalid_type",input:h,inst:e}),c;c.value={};let s=[],g=a.shape;for(let b of a.keys){let y=g[b],_=y._zod.optout==="optional",S=y._zod.run({value:h[b],issues:[]},u);if(S instanceof Promise)s.push(S.then((H)=>ai(H,c,b,h,_)));else ai(S,c,b,h,_)}if(!i)return s.length?Promise.all(s).then(()=>c):c;return gk(s,h,c,u,n.value,e)}}),Lh=m("$ZodObjectJIT",(e,t)=>{sk.init(e,t);let o=e._zod.parse,n=mr(()=>hk(t)),r=(b)=>{let y=new ti(["shape","payload","ctx"]),_=n.value,S=(oe)=>{let pe=Un(oe);return`shape[${pe}]._zod.run({ value: input[${pe}], issues: [] }, ctx)`};y.write("const input = payload.value;");let H=Object.create(null),F=0;for(let oe of _.keys)H[oe]=`key_${F++}`;y.write("const newResult = {};");for(let oe of _.keys){let pe=H[oe],Te=Un(oe),sT=b[oe]?._zod?.optout==="optional";if(y.write(`const ${pe} = ${S(oe)};`),sT)y.write(`
        if (${pe}.issues.length) {
          if (${Te} in input) {
            payload.issues = payload.issues.concat(${pe}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Te}, ...iss.path] : [${Te}]
            })));
          }
        }
        
        if (${pe}.value === undefined) {
          if (${Te} in input) {
            newResult[${Te}] = undefined;
          }
        } else {
          newResult[${Te}] = ${pe}.value;
        }
        
      `);else y.write(`
        if (${pe}.issues.length) {
          payload.issues = payload.issues.concat(${pe}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Te}, ...iss.path] : [${Te}]
          })));
        }
        
        if (${pe}.value === undefined) {
          if (${Te} in input) {
            newResult[${Te}] = undefined;
          }
        } else {
          newResult[${Te}] = ${pe}.value;
        }
        
      `)}y.write("payload.value = newResult;"),y.write("return payload;");let le=y.compile();return(oe,pe)=>le(b,oe,pe)},i,a=Wt,c=!Ao.jitless,h=c&&Gl.value,s=t.catchall,g;e._zod.parse=(b,y)=>{g??(g=n.value);let _=b.value;if(!a(_))return b.issues.push({expected:"object",code:"invalid_type",input:_,inst:e}),b;if(c&&h&&y?.async===!1&&y.jitless!==!0){if(!i)i=r(t.shape);if(b=i(b,y),!s)return b;return gk([],_,b,y,g,e)}return o(b,y)}});Bo=m("$ZodUnion",(e,t)=>{E.init(e,t),G(e._zod,"optin",()=>t.options.some((r)=>r._zod.optin==="optional")?"optional":void 0),G(e._zod,"optout",()=>t.options.some((r)=>r._zod.optout==="optional")?"optional":void 0),G(e._zod,"values",()=>{if(t.options.every((r)=>r._zod.values))return new Set(t.options.flatMap((r)=>Array.from(r._zod.values)));return}),G(e._zod,"pattern",()=>{if(t.options.every((r)=>r._zod.pattern)){let r=t.options.map((i)=>i._zod.pattern);return new RegExp(`^(${r.map((i)=>Lo(i.source)).join("|")})$`)}return});let o=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(r,i)=>{if(o)return n(r,i);let a=!1,c=[];for(let u of t.options){let h=u._zod.run({value:r.value,issues:[]},i);if(h instanceof Promise)c.push(h),a=!0;else{if(h.issues.length===0)return h;c.push(h)}}if(!a)return Zf(c,r,e,i);return Promise.all(c).then((u)=>{return Zf(u,r,e,i)})}});Ch=m("$ZodXor",(e,t)=>{Bo.init(e,t),t.inclusive=!1;let o=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(r,i)=>{if(o)return n(r,i);let a=!1,c=[];for(let u of t.options){let h=u._zod.run({value:r.value,issues:[]},i);if(h instanceof Promise)c.push(h),a=!0;else c.push(h)}if(!a)return Qf(c,r,e,i);return Promise.all(c).then((u)=>{return Qf(u,r,e,i)})}}),xh=m("$ZodDiscriminatedUnion",(e,t)=>{t.inclusive=!1,Bo.init(e,t);let o=e._zod.parse;G(e._zod,"propValues",()=>{let r={};for(let i of t.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);for(let[c,u]of Object.entries(a)){if(!r[c])r[c]=new Set;for(let h of u)r[c].add(h)}}return r});let n=mr(()=>{let r=t.options,i=new Map;for(let a of r){let c=a._zod.propValues?.[t.discriminator];if(!c||c.size===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);for(let u of c){if(i.has(u))throw Error(`Duplicate discriminator value "${String(u)}"`);i.set(u,a)}}return i});e._zod.parse=(r,i)=>{let a=r.value;if(!Wt(a))return r.issues.push({code:"invalid_type",expected:"object",input:a,inst:e}),r;let c=n.value.get(a?.[t.discriminator]);if(c)return c._zod.run(r,i);if(t.unionFallback)return o(r,i);return r.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:t.discriminator,input:a,path:[t.discriminator],inst:e}),r}}),zh=m("$ZodIntersection",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);if(i instanceof Promise||a instanceof Promise)return Promise.all([i,a]).then(([u,h])=>{return ek(o,u,h)});return ek(o,i,a)}});ui=m("$ZodTuple",(e,t)=>{E.init(e,t);let o=t.items;e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({input:i,inst:e,expected:"tuple",code:"invalid_type"}),n;n.value=[];let a=[],c=[...o].reverse().findIndex((s)=>s._zod.optin!=="optional"),u=c===-1?0:o.length-c;if(!t.rest){let s=i.length>o.length,g=i.length<u-1;if(s||g)return n.issues.push({...s?{code:"too_big",maximum:o.length,inclusive:!0}:{code:"too_small",minimum:o.length},input:i,inst:e,origin:"array"}),n}let h=-1;for(let s of o){if(h++,h>=i.length){if(h>=u)continue}let g=s._zod.run({value:i[h],issues:[]},r);if(g instanceof Promise)a.push(g.then((b)=>ri(b,n,h)));else ri(g,n,h)}if(t.rest){let s=i.slice(o.length);for(let g of s){h++;let b=t.rest._zod.run({value:g,issues:[]},r);if(b instanceof Promise)a.push(b.then((y)=>ri(y,n,h)));else ri(b,n,h)}}if(a.length)return Promise.all(a).then(()=>n);return n}});jh=m("$ZodRecord",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!Lt(r))return o.issues.push({expected:"record",code:"invalid_type",input:r,inst:e}),o;let i=[],a=t.keyType._zod.values;if(a){o.value={};let c=new Set;for(let h of a)if(typeof h==="string"||typeof h==="number"||typeof h==="symbol"){c.add(typeof h==="number"?h.toString():h);let s=t.valueType._zod.run({value:r[h],issues:[]},n);if(s instanceof Promise)i.push(s.then((g)=>{if(g.issues.length)o.issues.push(...je(h,g.issues));o.value[h]=g.value}));else{if(s.issues.length)o.issues.push(...je(h,s.issues));o.value[h]=s.value}}let u;for(let h in r)if(!c.has(h))u=u??[],u.push(h);if(u&&u.length>0)o.issues.push({code:"unrecognized_keys",input:r,inst:e,keys:u})}else{o.value={};for(let c of Reflect.ownKeys(r)){if(c==="__proto__")continue;let u=t.keyType._zod.run({value:c,issues:[]},n);if(u instanceof Promise)throw Error("Async schemas not supported in object keys currently");if(typeof c==="string"&&Ro.test(c)&&u.issues.length){let g=t.keyType._zod.run({value:Number(c),issues:[]},n);if(g instanceof Promise)throw Error("Async schemas not supported in object keys currently");if(g.issues.length===0)u=g}if(u.issues.length){if(t.mode==="loose")o.value[c]=r[c];else o.issues.push({code:"invalid_key",origin:"record",issues:u.issues.map((g)=>Ce(g,n,ue())),input:c,path:[c],inst:e});continue}let s=t.valueType._zod.run({value:r[c],issues:[]},n);if(s instanceof Promise)i.push(s.then((g)=>{if(g.issues.length)o.issues.push(...je(c,g.issues));o.value[u.value]=g.value}));else{if(s.issues.length)o.issues.push(...je(c,s.issues));o.value[u.value]=s.value}}}if(i.length)return Promise.all(i).then(()=>o);return o}}),Eh=m("$ZodMap",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!(r instanceof Map))return o.issues.push({expected:"map",code:"invalid_type",input:r,inst:e}),o;let i=[];o.value=new Map;for(let[a,c]of r){let u=t.keyType._zod.run({value:a,issues:[]},n),h=t.valueType._zod.run({value:c,issues:[]},n);if(u instanceof Promise||h instanceof Promise)i.push(Promise.all([u,h]).then(([s,g])=>{tk(s,g,o,a,r,e,n)}));else tk(u,h,o,a,r,e,n)}if(i.length)return Promise.all(i).then(()=>o);return o}});Uh=m("$ZodSet",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(!(r instanceof Set))return o.issues.push({input:r,inst:e,expected:"set",code:"invalid_type"}),o;let i=[];o.value=new Set;for(let a of r){let c=t.valueType._zod.run({value:a,issues:[]},n);if(c instanceof Promise)i.push(c.then((u)=>rk(u,o)));else rk(c,o)}if(i.length)return Promise.all(i).then(()=>o);return o}});Rh=m("$ZodEnum",(e,t)=>{E.init(e,t);let o=No(t.entries),n=new Set(o);e._zod.values=n,e._zod.pattern=new RegExp(`^(${o.filter((r)=>Co.has(typeof r)).map((r)=>typeof r==="string"?Me(r):r.toString()).join("|")})$`),e._zod.parse=(r,i)=>{let a=r.value;if(n.has(a))return r;return r.issues.push({code:"invalid_value",values:o,input:a,inst:e}),r}}),Kh=m("$ZodLiteral",(e,t)=>{if(E.init(e,t),t.values.length===0)throw Error("Cannot create literal schema with no valid values");let o=new Set(t.values);e._zod.values=o,e._zod.pattern=new RegExp(`^(${t.values.map((n)=>typeof n==="string"?Me(n):n?Me(n.toString()):String(n)).join("|")})$`),e._zod.parse=(n,r)=>{let i=n.value;if(o.has(i))return n;return n.issues.push({code:"invalid_value",values:t.values,input:i,inst:e}),n}}),Fh=m("$ZodFile",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{let r=o.value;if(r instanceof File)return o;return o.issues.push({expected:"file",code:"invalid_type",input:r,inst:e}),o}}),Gh=m("$ZodTransform",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{if(n.direction==="backward")throw new qt(e.constructor.name);let r=t.transform(o.value,o);if(n.async)return(r instanceof Promise?r:Promise.resolve(r)).then((a)=>{return o.value=a,o});if(r instanceof Promise)throw new nt;return o.value=r,o}});hi=m("$ZodOptional",(e,t)=>{E.init(e,t),e._zod.optin="optional",e._zod.optout="optional",G(e._zod,"values",()=>{return t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0}),G(e._zod,"pattern",()=>{let o=t.innerType._zod.pattern;return o?new RegExp(`^(${Lo(o.source)})?$`):void 0}),e._zod.parse=(o,n)=>{if(t.innerType._zod.optin==="optional"){let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>ok(i,o.value));return ok(r,o.value)}if(o.value===void 0)return o;return t.innerType._zod.run(o,n)}}),Bh=m("$ZodExactOptional",(e,t)=>{hi.init(e,t),G(e._zod,"values",()=>t.innerType._zod.values),G(e._zod,"pattern",()=>t.innerType._zod.pattern),e._zod.parse=(o,n)=>{return t.innerType._zod.run(o,n)}}),Hh=m("$ZodNullable",(e,t)=>{E.init(e,t),G(e._zod,"optin",()=>t.innerType._zod.optin),G(e._zod,"optout",()=>t.innerType._zod.optout),G(e._zod,"pattern",()=>{let o=t.innerType._zod.pattern;return o?new RegExp(`^(${Lo(o.source)}|null)$`):void 0}),G(e._zod,"values",()=>{return t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0}),e._zod.parse=(o,n)=>{if(o.value===null)return o;return t.innerType._zod.run(o,n)}}),Mh=m("$ZodDefault",(e,t)=>{E.init(e,t),e._zod.optin="optional",G(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);if(o.value===void 0)return o.value=t.defaultValue,o;let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>nk(i,t));return nk(r,t)}});Jh=m("$ZodPrefault",(e,t)=>{E.init(e,t),e._zod.optin="optional",G(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);if(o.value===void 0)o.value=t.defaultValue;return t.innerType._zod.run(o,n)}}),Vh=m("$ZodNonOptional",(e,t)=>{E.init(e,t),G(e._zod,"values",()=>{let o=t.innerType._zod.values;return o?new Set([...o].filter((n)=>n!==void 0)):void 0}),e._zod.parse=(o,n)=>{let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>ik(i,e));return ik(r,e)}});qh=m("$ZodSuccess",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{if(n.direction==="backward")throw new qt("ZodSuccess");let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>{return o.value=i.issues.length===0,o});return o.value=r.issues.length===0,o}}),Wh=m("$ZodCatch",(e,t)=>{E.init(e,t),G(e._zod,"optin",()=>t.innerType._zod.optin),G(e._zod,"optout",()=>t.innerType._zod.optout),G(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>{if(o.value=i.value,i.issues.length)o.value=t.catchValue({...o,error:{issues:i.issues.map((a)=>Ce(a,n,ue()))},input:o.value}),o.issues=[];return o});if(o.value=r.value,r.issues.length)o.value=t.catchValue({...o,error:{issues:r.issues.map((i)=>Ce(i,n,ue()))},input:o.value}),o.issues=[];return o}}),Yh=m("$ZodNaN",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{if(typeof o.value!=="number"||!Number.isNaN(o.value))return o.issues.push({input:o.value,inst:e,expected:"nan",code:"invalid_type"}),o;return o}}),Xh=m("$ZodPipe",(e,t)=>{E.init(e,t),G(e._zod,"values",()=>t.in._zod.values),G(e._zod,"optin",()=>t.in._zod.optin),G(e._zod,"optout",()=>t.out._zod.optout),G(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(o,n)=>{if(n.direction==="backward"){let i=t.out._zod.run(o,n);if(i instanceof Promise)return i.then((a)=>oi(a,t.in,n));return oi(i,t.in,n)}let r=t.in._zod.run(o,n);if(r instanceof Promise)return r.then((i)=>oi(i,t.out,n));return oi(r,t.out,n)}});Ho=m("$ZodCodec",(e,t)=>{E.init(e,t),G(e._zod,"values",()=>t.in._zod.values),G(e._zod,"optin",()=>t.in._zod.optin),G(e._zod,"optout",()=>t.out._zod.optout),G(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(o,n)=>{if((n.direction||"forward")==="forward"){let i=t.in._zod.run(o,n);if(i instanceof Promise)return i.then((a)=>ni(a,t,n));return ni(i,t,n)}else{let i=t.out._zod.run(o,n);if(i instanceof Promise)return i.then((a)=>ni(a,t,n));return ni(i,t,n)}}});Zh=m("$ZodReadonly",(e,t)=>{E.init(e,t),G(e._zod,"propValues",()=>t.innerType._zod.propValues),G(e._zod,"values",()=>t.innerType._zod.values),G(e._zod,"optin",()=>t.innerType?._zod?.optin),G(e._zod,"optout",()=>t.innerType?._zod?.optout),e._zod.parse=(o,n)=>{if(n.direction==="backward")return t.innerType._zod.run(o,n);let r=t.innerType._zod.run(o,n);if(r instanceof Promise)return r.then(ak);return ak(r)}});Qh=m("$ZodTemplateLiteral",(e,t)=>{E.init(e,t);let o=[];for(let n of t.parts)if(typeof n==="object"&&n!==null){if(!n._zod.pattern)throw Error(`Invalid template literal part, no pattern found: ${[...n._zod.traits].shift()}`);let r=n._zod.pattern instanceof RegExp?n._zod.pattern.source:n._zod.pattern;if(!r)throw Error(`Invalid template literal part: ${n._zod.traits}`);let i=r.startsWith("^")?1:0,a=r.endsWith("$")?r.length-1:r.length;o.push(r.slice(i,a))}else if(n===null||Hl.has(typeof n))o.push(Me(`${n}`));else throw Error(`Invalid template literal part: ${n}`);e._zod.pattern=new RegExp(`^${o.join("")}$`),e._zod.parse=(n,r)=>{if(typeof n.value!=="string")return n.issues.push({input:n.value,inst:e,expected:"string",code:"invalid_type"}),n;if(e._zod.pattern.lastIndex=0,!e._zod.pattern.test(n.value))return n.issues.push({input:n.value,inst:e,code:"invalid_format",format:t.format??"template_literal",pattern:e._zod.pattern.source}),n;return n}}),eg=m("$ZodFunction",(e,t)=>{return E.init(e,t),e._def=t,e._zod.def=t,e.implement=(o)=>{if(typeof o!=="function")throw Error("implement() must be called with a function");return function(...n){let r=e._def.input?Kn(e._def.input,n):n,i=Reflect.apply(o,this,r);if(e._def.output)return Kn(e._def.output,i);return i}},e.implementAsync=(o)=>{if(typeof o!=="function")throw Error("implementAsync() must be called with a function");return async function(...n){let r=e._def.input?await Fn(e._def.input,n):n,i=await Reflect.apply(o,this,r);if(e._def.output)return await Fn(e._def.output,i);return i}},e._zod.parse=(o,n)=>{if(typeof o.value!=="function")return o.issues.push({code:"invalid_type",expected:"function",input:o.value,inst:e}),o;if(e._def.output&&e._def.output._zod.def.type==="promise")o.value=e.implementAsync(o.value);else o.value=e.implement(o.value);return o},e.input=(...o)=>{let n=e.constructor;if(Array.isArray(o[0]))return new n({type:"function",input:new ui({type:"tuple",items:o[0],rest:o[1]}),output:e._def.output});return new n({type:"function",input:o[0],output:e._def.output})},e.output=(o)=>{return new e.constructor({type:"function",input:e._def.input,output:o})},e}),tg=m("$ZodPromise",(e,t)=>{E.init(e,t),e._zod.parse=(o,n)=>{return Promise.resolve(o.value).then((r)=>t.innerType._zod.run({value:r,issues:[]},n))}}),rg=m("$ZodLazy",(e,t)=>{E.init(e,t),G(e._zod,"innerType",()=>t.getter()),G(e._zod,"pattern",()=>e._zod.innerType?._zod?.pattern),G(e._zod,"propValues",()=>e._zod.innerType?._zod?.propValues),G(e._zod,"optin",()=>e._zod.innerType?._zod?.optin??void 0),G(e._zod,"optout",()=>e._zod.innerType?._zod?.optout??void 0),e._zod.parse=(o,n)=>{return e._zod.innerType._zod.run(o,n)}}),og=m("$ZodCustom",(e,t)=>{te.init(e,t),E.init(e,t),e._zod.parse=(o,n)=>{return o},e._zod.check=(o)=>{let n=o.value,r=t.fn(n);if(r instanceof Promise)return r.then((i)=>ck(i,o,n,e));ck(r,o,n,e);return}})});function ig(){return{localeError:BD()}}var BD=()=>{let e={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function t(r){return e[r]??null}let o={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`مدخلات غير مقبولة: يفترض إدخال instanceof ${r.expected}، ولكن تم إدخال ${c}`;return`مدخلات غير مقبولة: يفترض إدخال ${i}، ولكن تم إدخال ${c}`}case"invalid_value":if(r.values.length===1)return`مدخلات غير مقبولة: يفترض إدخال ${k(r.values[0])}`;return`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return` أكبر من اللازم: يفترض أن تكون ${r.origin??"القيمة"} ${i} ${r.maximum.toString()} ${a.unit??"عنصر"}`;return`أكبر من اللازم: يفترض أن تكون ${r.origin??"القيمة"} ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`أصغر من اللازم: يفترض لـ ${r.origin} أن يكون ${i} ${r.minimum.toString()} ${a.unit}`;return`أصغر من اللازم: يفترض لـ ${r.origin} أن يكون ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`نَص غير مقبول: يجب أن يبدأ بـ "${r.prefix}"`;if(i.format==="ends_with")return`نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"`;if(i.format==="includes")return`نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"`;if(i.format==="regex")return`نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}`;return`${o[i.format]??r.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${r.divisor}`;case"unrecognized_keys":return`معرف${r.keys.length>1?"ات":""} غريب${r.keys.length>1?"ة":""}: ${I(r.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${r.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${r.origin}`;default:return"مدخل غير مقبول"}}};var dk=d(()=>{x()});function ag(){return{localeError:HD()}}var HD=()=>{let e={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function t(r){return e[r]??null}let o={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Yanlış dəyər: gözlənilən instanceof ${r.expected}, daxil olan ${c}`;return`Yanlış dəyər: gözlənilən ${i}, daxil olan ${c}`}case"invalid_value":if(r.values.length===1)return`Yanlış dəyər: gözlənilən ${k(r.values[0])}`;return`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Çox böyük: gözlənilən ${r.origin??"dəyər"} ${i}${r.maximum.toString()} ${a.unit??"element"}`;return`Çox böyük: gözlənilən ${r.origin??"dəyər"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Çox kiçik: gözlənilən ${r.origin} ${i}${r.minimum.toString()} ${a.unit}`;return`Çox kiçik: gözlənilən ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Yanlış mətn: "${i.prefix}" ilə başlamalıdır`;if(i.format==="ends_with")return`Yanlış mətn: "${i.suffix}" ilə bitməlidir`;if(i.format==="includes")return`Yanlış mətn: "${i.includes}" daxil olmalıdır`;if(i.format==="regex")return`Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır`;return`Yanlış ${o[i.format]??r.format}`}case"not_multiple_of":return`Yanlış ədəd: ${r.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${r.keys.length>1?"lar":""}: ${I(r.keys,", ")}`;case"invalid_key":return`${r.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${r.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};var bk=d(()=>{x()});function yk(e,t,o,n){let r=Math.abs(e),i=r%10,a=r%100;if(a>=11&&a<=19)return n;if(i===1)return t;if(i>=2&&i<=4)return o;return n}function cg(){return{localeError:MD()}}var MD=()=>{let e={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function t(r){return e[r]??null}let o={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"},n={nan:"NaN",number:"лік",array:"масіў"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Няправільны ўвод: чакаўся instanceof ${r.expected}, атрымана ${c}`;return`Няправільны ўвод: чакаўся ${i}, атрымана ${c}`}case"invalid_value":if(r.values.length===1)return`Няправільны ўвод: чакалася ${k(r.values[0])}`;return`Няправільны варыянт: чакаўся адзін з ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a){let c=Number(r.maximum),u=yk(c,a.unit.one,a.unit.few,a.unit.many);return`Занадта вялікі: чакалася, што ${r.origin??"значэнне"} павінна ${a.verb} ${i}${r.maximum.toString()} ${u}`}return`Занадта вялікі: чакалася, што ${r.origin??"значэнне"} павінна быць ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a){let c=Number(r.minimum),u=yk(c,a.unit.one,a.unit.few,a.unit.many);return`Занадта малы: чакалася, што ${r.origin} павінна ${a.verb} ${i}${r.minimum.toString()} ${u}`}return`Занадта малы: чакалася, што ${r.origin} павінна быць ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Няправільны радок: павінен пачынацца з "${i.prefix}"`;if(i.format==="ends_with")return`Няправільны радок: павінен заканчвацца на "${i.suffix}"`;if(i.format==="includes")return`Няправільны радок: павінен змяшчаць "${i.includes}"`;if(i.format==="regex")return`Няправільны радок: павінен адпавядаць шаблону ${i.pattern}`;return`Няправільны ${o[i.format]??r.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${r.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${r.keys.length>1?"ключы":"ключ"}: ${I(r.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${r.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${r.origin}`;default:return"Няправільны ўвод"}}};var mk=d(()=>{x()});function lg(){return{localeError:JD()}}var JD=()=>{let e={string:{unit:"символа",verb:"да съдържа"},file:{unit:"байта",verb:"да съдържа"},array:{unit:"елемента",verb:"да съдържа"},set:{unit:"елемента",verb:"да съдържа"}};function t(r){return e[r]??null}let o={regex:"вход",email:"имейл адрес",url:"URL",emoji:"емоджи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO време",date:"ISO дата",time:"ISO време",duration:"ISO продължителност",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"base64-кодиран низ",base64url:"base64url-кодиран низ",json_string:"JSON низ",e164:"E.164 номер",jwt:"JWT",template_literal:"вход"},n={nan:"NaN",number:"число",array:"масив"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Невалиден вход: очакван instanceof ${r.expected}, получен ${c}`;return`Невалиден вход: очакван ${i}, получен ${c}`}case"invalid_value":if(r.values.length===1)return`Невалиден вход: очакван ${k(r.values[0])}`;return`Невалидна опция: очаквано едно от ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Твърде голямо: очаква се ${r.origin??"стойност"} да съдържа ${i}${r.maximum.toString()} ${a.unit??"елемента"}`;return`Твърде голямо: очаква се ${r.origin??"стойност"} да бъде ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Твърде малко: очаква се ${r.origin} да съдържа ${i}${r.minimum.toString()} ${a.unit}`;return`Твърде малко: очаква се ${r.origin} да бъде ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Невалиден низ: трябва да започва с "${i.prefix}"`;if(i.format==="ends_with")return`Невалиден низ: трябва да завършва с "${i.suffix}"`;if(i.format==="includes")return`Невалиден низ: трябва да включва "${i.includes}"`;if(i.format==="regex")return`Невалиден низ: трябва да съвпада с ${i.pattern}`;let a="Невалиден";if(i.format==="emoji")a="Невалидно";if(i.format==="datetime")a="Невалидно";if(i.format==="date")a="Невалидна";if(i.format==="time")a="Невалидно";if(i.format==="duration")a="Невалидна";return`${a} ${o[i.format]??r.format}`}case"not_multiple_of":return`Невалидно число: трябва да бъде кратно на ${r.divisor}`;case"unrecognized_keys":return`Неразпознат${r.keys.length>1?"и":""} ключ${r.keys.length>1?"ове":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Невалиден ключ в ${r.origin}`;case"invalid_union":return"Невалиден вход";case"invalid_element":return`Невалидна стойност в ${r.origin}`;default:return"Невалиден вход"}}};var pk=d(()=>{x()});function ug(){return{localeError:VD()}}var VD=()=>{let e={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function t(r){return e[r]??null}let o={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Tipus invàlid: s'esperava instanceof ${r.expected}, s'ha rebut ${c}`;return`Tipus invàlid: s'esperava ${i}, s'ha rebut ${c}`}case"invalid_value":if(r.values.length===1)return`Valor invàlid: s'esperava ${k(r.values[0])}`;return`Opció invàlida: s'esperava una de ${I(r.values," o ")}`;case"too_big":{let i=r.inclusive?"com a màxim":"menys de",a=t(r.origin);if(a)return`Massa gran: s'esperava que ${r.origin??"el valor"} contingués ${i} ${r.maximum.toString()} ${a.unit??"elements"}`;return`Massa gran: s'esperava que ${r.origin??"el valor"} fos ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?"com a mínim":"més de",a=t(r.origin);if(a)return`Massa petit: s'esperava que ${r.origin} contingués ${i} ${r.minimum.toString()} ${a.unit}`;return`Massa petit: s'esperava que ${r.origin} fos ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Format invàlid: ha de començar amb "${i.prefix}"`;if(i.format==="ends_with")return`Format invàlid: ha d'acabar amb "${i.suffix}"`;if(i.format==="includes")return`Format invàlid: ha d'incloure "${i.includes}"`;if(i.format==="regex")return`Format invàlid: ha de coincidir amb el patró ${i.pattern}`;return`Format invàlid per a ${o[i.format]??r.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${r.divisor}`;case"unrecognized_keys":return`Clau${r.keys.length>1?"s":""} no reconeguda${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${r.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${r.origin}`;default:return"Entrada invàlida"}}};var vk=d(()=>{x()});function hg(){return{localeError:qD()}}var qD=()=>{let e={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function t(r){return e[r]??null}let o={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"},n={nan:"NaN",number:"číslo",string:"řetězec",function:"funkce",array:"pole"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Neplatný vstup: očekáváno instanceof ${r.expected}, obdrženo ${c}`;return`Neplatný vstup: očekáváno ${i}, obdrženo ${c}`}case"invalid_value":if(r.values.length===1)return`Neplatný vstup: očekáváno ${k(r.values[0])}`;return`Neplatná možnost: očekávána jedna z hodnot ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Hodnota je příliš velká: ${r.origin??"hodnota"} musí mít ${i}${r.maximum.toString()} ${a.unit??"prvků"}`;return`Hodnota je příliš velká: ${r.origin??"hodnota"} musí být ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Hodnota je příliš malá: ${r.origin??"hodnota"} musí mít ${i}${r.minimum.toString()} ${a.unit??"prvků"}`;return`Hodnota je příliš malá: ${r.origin??"hodnota"} musí být ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Neplatný řetězec: musí začínat na "${i.prefix}"`;if(i.format==="ends_with")return`Neplatný řetězec: musí končit na "${i.suffix}"`;if(i.format==="includes")return`Neplatný řetězec: musí obsahovat "${i.includes}"`;if(i.format==="regex")return`Neplatný řetězec: musí odpovídat vzoru ${i.pattern}`;return`Neplatný formát ${o[i.format]??r.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${r.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${I(r.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${r.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${r.origin}`;default:return"Neplatný vstup"}}};var Ik=d(()=>{x()});function gg(){return{localeError:WD()}}var WD=()=>{let e={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}};function t(r){return e[r]??null}let o={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},n={nan:"NaN",string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ugyldigt input: forventede instanceof ${r.expected}, fik ${c}`;return`Ugyldigt input: forventede ${i}, fik ${c}`}case"invalid_value":if(r.values.length===1)return`Ugyldig værdi: forventede ${k(r.values[0])}`;return`Ugyldigt valg: forventede en af følgende ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`For stor: forventede ${c??"value"} ${a.verb} ${i} ${r.maximum.toString()} ${a.unit??"elementer"}`;return`For stor: forventede ${c??"value"} havde ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`For lille: forventede ${c} ${a.verb} ${i} ${r.minimum.toString()} ${a.unit}`;return`For lille: forventede ${c} havde ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ugyldig streng: skal starte med "${i.prefix}"`;if(i.format==="ends_with")return`Ugyldig streng: skal ende med "${i.suffix}"`;if(i.format==="includes")return`Ugyldig streng: skal indeholde "${i.includes}"`;if(i.format==="regex")return`Ugyldig streng: skal matche mønsteret ${i.pattern}`;return`Ugyldig ${o[i.format]??r.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${I(r.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${r.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${r.origin}`;default:return"Ugyldigt input"}}};var fk=d(()=>{x()});function sg(){return{localeError:YD()}}var YD=()=>{let e={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function t(r){return e[r]??null}let o={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"},n={nan:"NaN",number:"Zahl",array:"Array"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ungültige Eingabe: erwartet instanceof ${r.expected}, erhalten ${c}`;return`Ungültige Eingabe: erwartet ${i}, erhalten ${c}`}case"invalid_value":if(r.values.length===1)return`Ungültige Eingabe: erwartet ${k(r.values[0])}`;return`Ungültige Option: erwartet eine von ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Zu groß: erwartet, dass ${r.origin??"Wert"} ${i}${r.maximum.toString()} ${a.unit??"Elemente"} hat`;return`Zu groß: erwartet, dass ${r.origin??"Wert"} ${i}${r.maximum.toString()} ist`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Zu klein: erwartet, dass ${r.origin} ${i}${r.minimum.toString()} ${a.unit} hat`;return`Zu klein: erwartet, dass ${r.origin} ${i}${r.minimum.toString()} ist`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ungültiger String: muss mit "${i.prefix}" beginnen`;if(i.format==="ends_with")return`Ungültiger String: muss mit "${i.suffix}" enden`;if(i.format==="includes")return`Ungültiger String: muss "${i.includes}" enthalten`;if(i.format==="regex")return`Ungültiger String: muss dem Muster ${i.pattern} entsprechen`;return`Ungültig: ${o[i.format]??r.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${r.divisor} sein`;case"unrecognized_keys":return`${r.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${I(r.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${r.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${r.origin}`;default:return"Ungültige Eingabe"}}};var kk=d(()=>{x()});function Mo(){return{localeError:XD()}}var XD=()=>{let e={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function t(r){return e[r]??null}let o={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;return`Invalid input: expected ${i}, received ${c}`}case"invalid_value":if(r.values.length===1)return`Invalid input: expected ${k(r.values[0])}`;return`Invalid option: expected one of ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Too big: expected ${r.origin??"value"} to have ${i}${r.maximum.toString()} ${a.unit??"elements"}`;return`Too big: expected ${r.origin??"value"} to be ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Too small: expected ${r.origin} to have ${i}${r.minimum.toString()} ${a.unit}`;return`Too small: expected ${r.origin} to be ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Invalid string: must start with "${i.prefix}"`;if(i.format==="ends_with")return`Invalid string: must end with "${i.suffix}"`;if(i.format==="includes")return`Invalid string: must include "${i.includes}"`;if(i.format==="regex")return`Invalid string: must match pattern ${i.pattern}`;return`Invalid ${o[i.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};var dg=d(()=>{x()});function bg(){return{localeError:ZD()}}var ZD=()=>{let e={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function t(r){return e[r]??null}let o={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"},n={nan:"NaN",number:"nombro",array:"tabelo",null:"senvalora"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Nevalida enigo: atendiĝis instanceof ${r.expected}, riceviĝis ${c}`;return`Nevalida enigo: atendiĝis ${i}, riceviĝis ${c}`}case"invalid_value":if(r.values.length===1)return`Nevalida enigo: atendiĝis ${k(r.values[0])}`;return`Nevalida opcio: atendiĝis unu el ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${i}${r.maximum.toString()} ${a.unit??"elementojn"}`;return`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Tro malgranda: atendiĝis ke ${r.origin} havu ${i}${r.minimum.toString()} ${a.unit}`;return`Tro malgranda: atendiĝis ke ${r.origin} estu ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Nevalida karaktraro: devas komenciĝi per "${i.prefix}"`;if(i.format==="ends_with")return`Nevalida karaktraro: devas finiĝi per "${i.suffix}"`;if(i.format==="includes")return`Nevalida karaktraro: devas inkluzivi "${i.includes}"`;if(i.format==="regex")return`Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}`;return`Nevalida ${o[i.format]??r.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${r.divisor}`;case"unrecognized_keys":return`Nekonata${r.keys.length>1?"j":""} ŝlosilo${r.keys.length>1?"j":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${r.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${r.origin}`;default:return"Nevalida enigo"}}};var $k=d(()=>{x()});function yg(){return{localeError:QD()}}var QD=()=>{let e={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function t(r){return e[r]??null}let o={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN",string:"texto",number:"número",boolean:"booleano",array:"arreglo",object:"objeto",set:"conjunto",file:"archivo",date:"fecha",bigint:"número grande",symbol:"símbolo",undefined:"indefinido",null:"nulo",function:"función",map:"mapa",record:"registro",tuple:"tupla",enum:"enumeración",union:"unión",literal:"literal",promise:"promesa",void:"vacío",never:"nunca",unknown:"desconocido",any:"cualquiera"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Entrada inválida: se esperaba instanceof ${r.expected}, recibido ${c}`;return`Entrada inválida: se esperaba ${i}, recibido ${c}`}case"invalid_value":if(r.values.length===1)return`Entrada inválida: se esperaba ${k(r.values[0])}`;return`Opción inválida: se esperaba una de ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`Demasiado grande: se esperaba que ${c??"valor"} tuviera ${i}${r.maximum.toString()} ${a.unit??"elementos"}`;return`Demasiado grande: se esperaba que ${c??"valor"} fuera ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin),c=n[r.origin]??r.origin;if(a)return`Demasiado pequeño: se esperaba que ${c} tuviera ${i}${r.minimum.toString()} ${a.unit}`;return`Demasiado pequeño: se esperaba que ${c} fuera ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Cadena inválida: debe comenzar con "${i.prefix}"`;if(i.format==="ends_with")return`Cadena inválida: debe terminar en "${i.suffix}"`;if(i.format==="includes")return`Cadena inválida: debe incluir "${i.includes}"`;if(i.format==="regex")return`Cadena inválida: debe coincidir con el patrón ${i.pattern}`;return`Inválido ${o[i.format]??r.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${r.divisor}`;case"unrecognized_keys":return`Llave${r.keys.length>1?"s":""} desconocida${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Llave inválida en ${n[r.origin]??r.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${n[r.origin]??r.origin}`;default:return"Entrada inválida"}}};var wk=d(()=>{x()});function mg(){return{localeError:eN()}}var eN=()=>{let e={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function t(r){return e[r]??null}let o={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"},n={nan:"NaN",number:"عدد",array:"آرایه"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ورودی نامعتبر: می‌بایست instanceof ${r.expected} می‌بود، ${c} دریافت شد`;return`ورودی نامعتبر: می‌بایست ${i} می‌بود، ${c} دریافت شد`}case"invalid_value":if(r.values.length===1)return`ورودی نامعتبر: می‌بایست ${k(r.values[0])} می‌بود`;return`گزینه نامعتبر: می‌بایست یکی از ${I(r.values,"|")} می‌بود`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`خیلی بزرگ: ${r.origin??"مقدار"} باید ${i}${r.maximum.toString()} ${a.unit??"عنصر"} باشد`;return`خیلی بزرگ: ${r.origin??"مقدار"} باید ${i}${r.maximum.toString()} باشد`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`خیلی کوچک: ${r.origin} باید ${i}${r.minimum.toString()} ${a.unit} باشد`;return`خیلی کوچک: ${r.origin} باید ${i}${r.minimum.toString()} باشد`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`رشته نامعتبر: باید با "${i.prefix}" شروع شود`;if(i.format==="ends_with")return`رشته نامعتبر: باید با "${i.suffix}" تمام شود`;if(i.format==="includes")return`رشته نامعتبر: باید شامل "${i.includes}" باشد`;if(i.format==="regex")return`رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد`;return`${o[i.format]??r.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${r.divisor} باشد`;case"unrecognized_keys":return`کلید${r.keys.length>1?"های":""} ناشناس: ${I(r.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${r.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${r.origin}`;default:return"ورودی نامعتبر"}}};var _k=d(()=>{x()});function pg(){return{localeError:tN()}}var tN=()=>{let e={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function t(r){return e[r]??null}let o={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Virheellinen tyyppi: odotettiin instanceof ${r.expected}, oli ${c}`;return`Virheellinen tyyppi: odotettiin ${i}, oli ${c}`}case"invalid_value":if(r.values.length===1)return`Virheellinen syöte: täytyy olla ${k(r.values[0])}`;return`Virheellinen valinta: täytyy olla yksi seuraavista: ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Liian suuri: ${a.subject} täytyy olla ${i}${r.maximum.toString()} ${a.unit}`.trim();return`Liian suuri: arvon täytyy olla ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Liian pieni: ${a.subject} täytyy olla ${i}${r.minimum.toString()} ${a.unit}`.trim();return`Liian pieni: arvon täytyy olla ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Virheellinen syöte: täytyy alkaa "${i.prefix}"`;if(i.format==="ends_with")return`Virheellinen syöte: täytyy loppua "${i.suffix}"`;if(i.format==="includes")return`Virheellinen syöte: täytyy sisältää "${i.includes}"`;if(i.format==="regex")return`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}`;return`Virheellinen ${o[i.format]??r.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${r.divisor} monikerta`;case"unrecognized_keys":return`${r.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${I(r.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};var Ok=d(()=>{x()});function vg(){return{localeError:rN()}}var rN=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function t(r){return e[r]??null}let o={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},n={nan:"NaN",number:"nombre",array:"tableau"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Entrée invalide : instanceof ${r.expected} attendu, ${c} reçu`;return`Entrée invalide : ${i} attendu, ${c} reçu`}case"invalid_value":if(r.values.length===1)return`Entrée invalide : ${k(r.values[0])} attendu`;return`Option invalide : une valeur parmi ${I(r.values,"|")} attendue`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Trop grand : ${r.origin??"valeur"} doit ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"élément(s)"}`;return`Trop grand : ${r.origin??"valeur"} doit être ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Trop petit : ${r.origin} doit ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Trop petit : ${r.origin} doit être ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Chaîne invalide : doit commencer par "${i.prefix}"`;if(i.format==="ends_with")return`Chaîne invalide : doit se terminer par "${i.suffix}"`;if(i.format==="includes")return`Chaîne invalide : doit inclure "${i.includes}"`;if(i.format==="regex")return`Chaîne invalide : doit correspondre au modèle ${i.pattern}`;return`${o[i.format]??r.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${r.divisor}`;case"unrecognized_keys":return`Clé${r.keys.length>1?"s":""} non reconnue${r.keys.length>1?"s":""} : ${I(r.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${r.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${r.origin}`;default:return"Entrée invalide"}}};var Sk=d(()=>{x()});function Ig(){return{localeError:oN()}}var oN=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function t(r){return e[r]??null}let o={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Entrée invalide : attendu instanceof ${r.expected}, reçu ${c}`;return`Entrée invalide : attendu ${i}, reçu ${c}`}case"invalid_value":if(r.values.length===1)return`Entrée invalide : attendu ${k(r.values[0])}`;return`Option invalide : attendu l'une des valeurs suivantes ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"≤":"<",a=t(r.origin);if(a)return`Trop grand : attendu que ${r.origin??"la valeur"} ait ${i}${r.maximum.toString()} ${a.unit}`;return`Trop grand : attendu que ${r.origin??"la valeur"} soit ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?"≥":">",a=t(r.origin);if(a)return`Trop petit : attendu que ${r.origin} ait ${i}${r.minimum.toString()} ${a.unit}`;return`Trop petit : attendu que ${r.origin} soit ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Chaîne invalide : doit commencer par "${i.prefix}"`;if(i.format==="ends_with")return`Chaîne invalide : doit se terminer par "${i.suffix}"`;if(i.format==="includes")return`Chaîne invalide : doit inclure "${i.includes}"`;if(i.format==="regex")return`Chaîne invalide : doit correspondre au motif ${i.pattern}`;return`${o[i.format]??r.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${r.divisor}`;case"unrecognized_keys":return`Clé${r.keys.length>1?"s":""} non reconnue${r.keys.length>1?"s":""} : ${I(r.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${r.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${r.origin}`;default:return"Entrée invalide"}}};var Tk=d(()=>{x()});function fg(){return{localeError:nN()}}var nN=()=>{let e={string:{label:"מחרוזת",gender:"f"},number:{label:"מספר",gender:"m"},boolean:{label:"ערך בוליאני",gender:"m"},bigint:{label:"BigInt",gender:"m"},date:{label:"תאריך",gender:"m"},array:{label:"מערך",gender:"m"},object:{label:"אובייקט",gender:"m"},null:{label:"ערך ריק (null)",gender:"m"},undefined:{label:"ערך לא מוגדר (undefined)",gender:"m"},symbol:{label:"סימבול (Symbol)",gender:"m"},function:{label:"פונקציה",gender:"f"},map:{label:"מפה (Map)",gender:"f"},set:{label:"קבוצה (Set)",gender:"f"},file:{label:"קובץ",gender:"m"},promise:{label:"Promise",gender:"m"},NaN:{label:"NaN",gender:"m"},unknown:{label:"ערך לא ידוע",gender:"m"},value:{label:"ערך",gender:"m"}},t={string:{unit:"תווים",shortLabel:"קצר",longLabel:"ארוך"},file:{unit:"בייטים",shortLabel:"קטן",longLabel:"גדול"},array:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},set:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},number:{unit:"",shortLabel:"קטן",longLabel:"גדול"}},o=(h)=>h?e[h]:void 0,n=(h)=>{let s=o(h);if(s)return s.label;return h??e.unknown.label},r=(h)=>`ה${n(h)}`,i=(h)=>{return(o(h)?.gender??"m")==="f"?"צריכה להיות":"צריך להיות"},a=(h)=>{if(!h)return null;return t[h]??null},c={regex:{label:"קלט",gender:"m"},email:{label:"כתובת אימייל",gender:"f"},url:{label:"כתובת רשת",gender:"f"},emoji:{label:"אימוג'י",gender:"m"},uuid:{label:"UUID",gender:"m"},nanoid:{label:"nanoid",gender:"m"},guid:{label:"GUID",gender:"m"},cuid:{label:"cuid",gender:"m"},cuid2:{label:"cuid2",gender:"m"},ulid:{label:"ULID",gender:"m"},xid:{label:"XID",gender:"m"},ksuid:{label:"KSUID",gender:"m"},datetime:{label:"תאריך וזמן ISO",gender:"m"},date:{label:"תאריך ISO",gender:"m"},time:{label:"זמן ISO",gender:"m"},duration:{label:"משך זמן ISO",gender:"m"},ipv4:{label:"כתובת IPv4",gender:"f"},ipv6:{label:"כתובת IPv6",gender:"f"},cidrv4:{label:"טווח IPv4",gender:"m"},cidrv6:{label:"טווח IPv6",gender:"m"},base64:{label:"מחרוזת בבסיס 64",gender:"f"},base64url:{label:"מחרוזת בבסיס 64 לכתובות רשת",gender:"f"},json_string:{label:"מחרוזת JSON",gender:"f"},e164:{label:"מספר E.164",gender:"m"},jwt:{label:"JWT",gender:"m"},ends_with:{label:"קלט",gender:"m"},includes:{label:"קלט",gender:"m"},lowercase:{label:"קלט",gender:"m"},starts_with:{label:"קלט",gender:"m"},uppercase:{label:"קלט",gender:"m"}},u={nan:"NaN"};return(h)=>{switch(h.code){case"invalid_type":{let s=h.expected,g=u[s??""]??n(s),b=$(h.input),y=u[b]??e[b]?.label??b;if(/^[A-Z]/.test(h.expected))return`קלט לא תקין: צריך להיות instanceof ${h.expected}, התקבל ${y}`;return`קלט לא תקין: צריך להיות ${g}, התקבל ${y}`}case"invalid_value":{if(h.values.length===1)return`ערך לא תקין: הערך חייב להיות ${k(h.values[0])}`;let s=h.values.map((y)=>k(y));if(h.values.length===2)return`ערך לא תקין: האפשרויות המתאימות הן ${s[0]} או ${s[1]}`;let g=s[s.length-1];return`ערך לא תקין: האפשרויות המתאימות הן ${s.slice(0,-1).join(", ")} או ${g}`}case"too_big":{let s=a(h.origin),g=r(h.origin??"value");if(h.origin==="string")return`${s?.longLabel??"ארוך"} מדי: ${g} צריכה להכיל ${h.maximum.toString()} ${s?.unit??""} ${h.inclusive?"או פחות":"לכל היותר"}`.trim();if(h.origin==="number"){let _=h.inclusive?`קטן או שווה ל-${h.maximum}`:`קטן מ-${h.maximum}`;return`גדול מדי: ${g} צריך להיות ${_}`}if(h.origin==="array"||h.origin==="set"){let _=h.origin==="set"?"צריכה":"צריך",S=h.inclusive?`${h.maximum} ${s?.unit??""} או פחות`:`פחות מ-${h.maximum} ${s?.unit??""}`;return`גדול מדי: ${g} ${_} להכיל ${S}`.trim()}let b=h.inclusive?"<=":"<",y=i(h.origin??"value");if(s?.unit)return`${s.longLabel} מדי: ${g} ${y} ${b}${h.maximum.toString()} ${s.unit}`;return`${s?.longLabel??"גדול"} מדי: ${g} ${y} ${b}${h.maximum.toString()}`}case"too_small":{let s=a(h.origin),g=r(h.origin??"value");if(h.origin==="string")return`${s?.shortLabel??"קצר"} מדי: ${g} צריכה להכיל ${h.minimum.toString()} ${s?.unit??""} ${h.inclusive?"או יותר":"לפחות"}`.trim();if(h.origin==="number"){let _=h.inclusive?`גדול או שווה ל-${h.minimum}`:`גדול מ-${h.minimum}`;return`קטן מדי: ${g} צריך להיות ${_}`}if(h.origin==="array"||h.origin==="set"){let _=h.origin==="set"?"צריכה":"צריך";if(h.minimum===1&&h.inclusive){let H=h.origin==="set"?"לפחות פריט אחד":"לפחות פריט אחד";return`קטן מדי: ${g} ${_} להכיל ${H}`}let S=h.inclusive?`${h.minimum} ${s?.unit??""} או יותר`:`יותר מ-${h.minimum} ${s?.unit??""}`;return`קטן מדי: ${g} ${_} להכיל ${S}`.trim()}let b=h.inclusive?">=":">",y=i(h.origin??"value");if(s?.unit)return`${s.shortLabel} מדי: ${g} ${y} ${b}${h.minimum.toString()} ${s.unit}`;return`${s?.shortLabel??"קטן"} מדי: ${g} ${y} ${b}${h.minimum.toString()}`}case"invalid_format":{let s=h;if(s.format==="starts_with")return`המחרוזת חייבת להתחיל ב "${s.prefix}"`;if(s.format==="ends_with")return`המחרוזת חייבת להסתיים ב "${s.suffix}"`;if(s.format==="includes")return`המחרוזת חייבת לכלול "${s.includes}"`;if(s.format==="regex")return`המחרוזת חייבת להתאים לתבנית ${s.pattern}`;let g=c[s.format],b=g?.label??s.format,_=(g?.gender??"m")==="f"?"תקינה":"תקין";return`${b} לא ${_}`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${h.divisor}`;case"unrecognized_keys":return`מפתח${h.keys.length>1?"ות":""} לא מזוה${h.keys.length>1?"ים":"ה"}: ${I(h.keys,", ")}`;case"invalid_key":return"שדה לא תקין באובייקט";case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${r(h.origin??"array")}`;default:return"קלט לא תקין"}}};var Pk=d(()=>{x()});function kg(){return{localeError:iN()}}var iN=()=>{let e={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function t(r){return e[r]??null}let o={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"},n={nan:"NaN",number:"szám",array:"tömb"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Érvénytelen bemenet: a várt érték instanceof ${r.expected}, a kapott érték ${c}`;return`Érvénytelen bemenet: a várt érték ${i}, a kapott érték ${c}`}case"invalid_value":if(r.values.length===1)return`Érvénytelen bemenet: a várt érték ${k(r.values[0])}`;return`Érvénytelen opció: valamelyik érték várt ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Túl nagy: ${r.origin??"érték"} mérete túl nagy ${i}${r.maximum.toString()} ${a.unit??"elem"}`;return`Túl nagy: a bemeneti érték ${r.origin??"érték"} túl nagy: ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Túl kicsi: a bemeneti érték ${r.origin} mérete túl kicsi ${i}${r.minimum.toString()} ${a.unit}`;return`Túl kicsi: a bemeneti érték ${r.origin} túl kicsi ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie`;if(i.format==="ends_with")return`Érvénytelen string: "${i.suffix}" értékkel kell végződnie`;if(i.format==="includes")return`Érvénytelen string: "${i.includes}" értéket kell tartalmaznia`;if(i.format==="regex")return`Érvénytelen string: ${i.pattern} mintának kell megfelelnie`;return`Érvénytelen ${o[i.format]??r.format}`}case"not_multiple_of":return`Érvénytelen szám: ${r.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${r.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${r.origin}`;default:return"Érvénytelen bemenet"}}};var Ak=d(()=>{x()});function Dk(e,t,o){return Math.abs(e)===1?t:o}function wr(e){if(!e)return"";let t=["ա","ե","ը","ի","ո","ու","օ"],o=e[e.length-1];return e+(t.includes(o)?"ն":"ը")}function $g(){return{localeError:aN()}}var aN=()=>{let e={string:{unit:{one:"նշան",many:"նշաններ"},verb:"ունենալ"},file:{unit:{one:"բայթ",many:"բայթեր"},verb:"ունենալ"},array:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"},set:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"}};function t(r){return e[r]??null}let o={regex:"մուտք",email:"էլ. հասցե",url:"URL",emoji:"էմոջի",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO ամսաթիվ և ժամ",date:"ISO ամսաթիվ",time:"ISO ժամ",duration:"ISO տևողություն",ipv4:"IPv4 հասցե",ipv6:"IPv6 հասցե",cidrv4:"IPv4 միջակայք",cidrv6:"IPv6 միջակայք",base64:"base64 ձևաչափով տող",base64url:"base64url ձևաչափով տող",json_string:"JSON տող",e164:"E.164 համար",jwt:"JWT",template_literal:"մուտք"},n={nan:"NaN",number:"թիվ",array:"զանգված"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Սխալ մուտքագրում․ սպասվում էր instanceof ${r.expected}, ստացվել է ${c}`;return`Սխալ մուտքագրում․ սպասվում էր ${i}, ստացվել է ${c}`}case"invalid_value":if(r.values.length===1)return`Սխալ մուտքագրում․ սպասվում էր ${k(r.values[1])}`;return`Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a){let c=Number(r.maximum),u=Dk(c,a.unit.one,a.unit.many);return`Չափազանց մեծ արժեք․ սպասվում է, որ ${wr(r.origin??"արժեք")} կունենա ${i}${r.maximum.toString()} ${u}`}return`Չափազանց մեծ արժեք․ սպասվում է, որ ${wr(r.origin??"արժեք")} լինի ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a){let c=Number(r.minimum),u=Dk(c,a.unit.one,a.unit.many);return`Չափազանց փոքր արժեք․ սպասվում է, որ ${wr(r.origin)} կունենա ${i}${r.minimum.toString()} ${u}`}return`Չափազանց փոքր արժեք․ սպասվում է, որ ${wr(r.origin)} լինի ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Սխալ տող․ պետք է սկսվի "${i.prefix}"-ով`;if(i.format==="ends_with")return`Սխալ տող․ պետք է ավարտվի "${i.suffix}"-ով`;if(i.format==="includes")return`Սխալ տող․ պետք է պարունակի "${i.includes}"`;if(i.format==="regex")return`Սխալ տող․ պետք է համապատասխանի ${i.pattern} ձևաչափին`;return`Սխալ ${o[i.format]??r.format}`}case"not_multiple_of":return`Սխալ թիվ․ պետք է բազմապատիկ լինի ${r.divisor}-ի`;case"unrecognized_keys":return`Չճանաչված բանալի${r.keys.length>1?"ներ":""}. ${I(r.keys,", ")}`;case"invalid_key":return`Սխալ բանալի ${wr(r.origin)}-ում`;case"invalid_union":return"Սխալ մուտքագրում";case"invalid_element":return`Սխալ արժեք ${wr(r.origin)}-ում`;default:return"Սխալ մուտքագրում"}}};var Nk=d(()=>{x()});function wg(){return{localeError:cN()}}var cN=()=>{let e={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function t(r){return e[r]??null}let o={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Input tidak valid: diharapkan instanceof ${r.expected}, diterima ${c}`;return`Input tidak valid: diharapkan ${i}, diterima ${c}`}case"invalid_value":if(r.values.length===1)return`Input tidak valid: diharapkan ${k(r.values[0])}`;return`Pilihan tidak valid: diharapkan salah satu dari ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Terlalu besar: diharapkan ${r.origin??"value"} memiliki ${i}${r.maximum.toString()} ${a.unit??"elemen"}`;return`Terlalu besar: diharapkan ${r.origin??"value"} menjadi ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Terlalu kecil: diharapkan ${r.origin} memiliki ${i}${r.minimum.toString()} ${a.unit}`;return`Terlalu kecil: diharapkan ${r.origin} menjadi ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`String tidak valid: harus dimulai dengan "${i.prefix}"`;if(i.format==="ends_with")return`String tidak valid: harus berakhir dengan "${i.suffix}"`;if(i.format==="includes")return`String tidak valid: harus menyertakan "${i.includes}"`;if(i.format==="regex")return`String tidak valid: harus sesuai pola ${i.pattern}`;return`${o[i.format]??r.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${r.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${r.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${r.origin}`;default:return"Input tidak valid"}}};var Lk=d(()=>{x()});function _g(){return{localeError:lN()}}var lN=()=>{let e={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function t(r){return e[r]??null}let o={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"},n={nan:"NaN",number:"númer",array:"fylki"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Rangt gildi: Þú slóst inn ${c} þar sem á að vera instanceof ${r.expected}`;return`Rangt gildi: Þú slóst inn ${c} þar sem á að vera ${i}`}case"invalid_value":if(r.values.length===1)return`Rangt gildi: gert ráð fyrir ${k(r.values[0])}`;return`Ógilt val: má vera eitt af eftirfarandi ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} hafi ${i}${r.maximum.toString()} ${a.unit??"hluti"}`;return`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} sé ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Of lítið: gert er ráð fyrir að ${r.origin} hafi ${i}${r.minimum.toString()} ${a.unit}`;return`Of lítið: gert er ráð fyrir að ${r.origin} sé ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ógildur strengur: verður að byrja á "${i.prefix}"`;if(i.format==="ends_with")return`Ógildur strengur: verður að enda á "${i.suffix}"`;if(i.format==="includes")return`Ógildur strengur: verður að innihalda "${i.includes}"`;if(i.format==="regex")return`Ógildur strengur: verður að fylgja mynstri ${i.pattern}`;return`Rangt ${o[i.format]??r.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${r.divisor}`;case"unrecognized_keys":return`Óþekkt ${r.keys.length>1?"ir lyklar":"ur lykill"}: ${I(r.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${r.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${r.origin}`;default:return"Rangt gildi"}}};var Ck=d(()=>{x()});function Og(){return{localeError:uN()}}var uN=()=>{let e={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function t(r){return e[r]??null}let o={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"numero",array:"vettore"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Input non valido: atteso instanceof ${r.expected}, ricevuto ${c}`;return`Input non valido: atteso ${i}, ricevuto ${c}`}case"invalid_value":if(r.values.length===1)return`Input non valido: atteso ${k(r.values[0])}`;return`Opzione non valida: atteso uno tra ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Troppo grande: ${r.origin??"valore"} deve avere ${i}${r.maximum.toString()} ${a.unit??"elementi"}`;return`Troppo grande: ${r.origin??"valore"} deve essere ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Troppo piccolo: ${r.origin} deve avere ${i}${r.minimum.toString()} ${a.unit}`;return`Troppo piccolo: ${r.origin} deve essere ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Stringa non valida: deve iniziare con "${i.prefix}"`;if(i.format==="ends_with")return`Stringa non valida: deve terminare con "${i.suffix}"`;if(i.format==="includes")return`Stringa non valida: deve includere "${i.includes}"`;if(i.format==="regex")return`Stringa non valida: deve corrispondere al pattern ${i.pattern}`;return`Invalid ${o[i.format]??r.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${r.divisor}`;case"unrecognized_keys":return`Chiav${r.keys.length>1?"i":"e"} non riconosciut${r.keys.length>1?"e":"a"}: ${I(r.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${r.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${r.origin}`;default:return"Input non valido"}}};var xk=d(()=>{x()});function Sg(){return{localeError:hN()}}var hN=()=>{let e={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function t(r){return e[r]??null}let o={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"},n={nan:"NaN",number:"数値",array:"配列"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`無効な入力: instanceof ${r.expected}が期待されましたが、${c}が入力されました`;return`無効な入力: ${i}が期待されましたが、${c}が入力されました`}case"invalid_value":if(r.values.length===1)return`無効な入力: ${k(r.values[0])}が期待されました`;return`無効な選択: ${I(r.values,"、")}のいずれかである必要があります`;case"too_big":{let i=r.inclusive?"以下である":"より小さい",a=t(r.origin);if(a)return`大きすぎる値: ${r.origin??"値"}は${r.maximum.toString()}${a.unit??"要素"}${i}必要があります`;return`大きすぎる値: ${r.origin??"値"}は${r.maximum.toString()}${i}必要があります`}case"too_small":{let i=r.inclusive?"以上である":"より大きい",a=t(r.origin);if(a)return`小さすぎる値: ${r.origin}は${r.minimum.toString()}${a.unit}${i}必要があります`;return`小さすぎる値: ${r.origin}は${r.minimum.toString()}${i}必要があります`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`無効な文字列: "${i.prefix}"で始まる必要があります`;if(i.format==="ends_with")return`無効な文字列: "${i.suffix}"で終わる必要があります`;if(i.format==="includes")return`無効な文字列: "${i.includes}"を含む必要があります`;if(i.format==="regex")return`無効な文字列: パターン${i.pattern}に一致する必要があります`;return`無効な${o[i.format]??r.format}`}case"not_multiple_of":return`無効な数値: ${r.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${r.keys.length>1?"群":""}: ${I(r.keys,"、")}`;case"invalid_key":return`${r.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${r.origin}内の無効な値`;default:return"無効な入力"}}};var zk=d(()=>{x()});function Tg(){return{localeError:gN()}}var gN=()=>{let e={string:{unit:"სიმბოლო",verb:"უნდა შეიცავდეს"},file:{unit:"ბაიტი",verb:"უნდა შეიცავდეს"},array:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"},set:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"}};function t(r){return e[r]??null}let o={regex:"შეყვანა",email:"ელ-ფოსტის მისამართი",url:"URL",emoji:"ემოჯი",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"თარიღი-დრო",date:"თარიღი",time:"დრო",duration:"ხანგრძლივობა",ipv4:"IPv4 მისამართი",ipv6:"IPv6 მისამართი",cidrv4:"IPv4 დიაპაზონი",cidrv6:"IPv6 დიაპაზონი",base64:"base64-კოდირებული სტრინგი",base64url:"base64url-კოდირებული სტრინგი",json_string:"JSON სტრინგი",e164:"E.164 ნომერი",jwt:"JWT",template_literal:"შეყვანა"},n={nan:"NaN",number:"რიცხვი",string:"სტრინგი",boolean:"ბულეანი",function:"ფუნქცია",array:"მასივი"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`არასწორი შეყვანა: მოსალოდნელი instanceof ${r.expected}, მიღებული ${c}`;return`არასწორი შეყვანა: მოსალოდნელი ${i}, მიღებული ${c}`}case"invalid_value":if(r.values.length===1)return`არასწორი შეყვანა: მოსალოდნელი ${k(r.values[0])}`;return`არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${I(r.values,"|")}-დან`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`ზედმეტად დიდი: მოსალოდნელი ${r.origin??"მნიშვნელობა"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit}`;return`ზედმეტად დიდი: მოსალოდნელი ${r.origin??"მნიშვნელობა"} იყოს ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`ზედმეტად პატარა: მოსალოდნელი ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`ზედმეტად პატარა: მოსალოდნელი ${r.origin} იყოს ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`არასწორი სტრინგი: უნდა იწყებოდეს "${i.prefix}"-ით`;if(i.format==="ends_with")return`არასწორი სტრინგი: უნდა მთავრდებოდეს "${i.suffix}"-ით`;if(i.format==="includes")return`არასწორი სტრინგი: უნდა შეიცავდეს "${i.includes}"-ს`;if(i.format==="regex")return`არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${i.pattern}`;return`არასწორი ${o[i.format]??r.format}`}case"not_multiple_of":return`არასწორი რიცხვი: უნდა იყოს ${r.divisor}-ის ჯერადი`;case"unrecognized_keys":return`უცნობი გასაღებ${r.keys.length>1?"ები":"ი"}: ${I(r.keys,", ")}`;case"invalid_key":return`არასწორი გასაღები ${r.origin}-ში`;case"invalid_union":return"არასწორი შეყვანა";case"invalid_element":return`არასწორი მნიშვნელობა ${r.origin}-ში`;default:return"არასწორი შეყვანა"}}};var jk=d(()=>{x()});function Jo(){return{localeError:sN()}}var sN=()=>{let e={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function t(r){return e[r]??null}let o={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"},n={nan:"NaN",number:"លេខ",array:"អារេ (Array)",null:"គ្មានតម្លៃ (null)"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${r.expected} ប៉ុន្តែទទួលបាន ${c}`;return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i} ប៉ុន្តែទទួលបាន ${c}`}case"invalid_value":if(r.values.length===1)return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${k(r.values[0])}`;return`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`ធំពេក៖ ត្រូវការ ${r.origin??"តម្លៃ"} ${i} ${r.maximum.toString()} ${a.unit??"ធាតុ"}`;return`ធំពេក៖ ត្រូវការ ${r.origin??"តម្លៃ"} ${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`តូចពេក៖ ត្រូវការ ${r.origin} ${i} ${r.minimum.toString()} ${a.unit}`;return`តូចពេក៖ ត្រូវការ ${r.origin} ${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"`;if(i.format==="ends_with")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"`;if(i.format==="includes")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"`;if(i.format==="regex")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}`;return`មិនត្រឹមត្រូវ៖ ${o[i.format]??r.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${r.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${I(r.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${r.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${r.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};var Pg=d(()=>{x()});function Ag(){return Jo()}var Ek=d(()=>{Pg()});function Dg(){return{localeError:dN()}}var dN=()=>{let e={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function t(r){return e[r]??null}let o={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`잘못된 입력: 예상 타입은 instanceof ${r.expected}, 받은 타입은 ${c}입니다`;return`잘못된 입력: 예상 타입은 ${i}, 받은 타입은 ${c}입니다`}case"invalid_value":if(r.values.length===1)return`잘못된 입력: 값은 ${k(r.values[0])} 이어야 합니다`;return`잘못된 옵션: ${I(r.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{let i=r.inclusive?"이하":"미만",a=i==="미만"?"이어야 합니다":"여야 합니다",c=t(r.origin),u=c?.unit??"요소";if(c)return`${r.origin??"값"}이 너무 큽니다: ${r.maximum.toString()}${u} ${i}${a}`;return`${r.origin??"값"}이 너무 큽니다: ${r.maximum.toString()} ${i}${a}`}case"too_small":{let i=r.inclusive?"이상":"초과",a=i==="이상"?"이어야 합니다":"여야 합니다",c=t(r.origin),u=c?.unit??"요소";if(c)return`${r.origin??"값"}이 너무 작습니다: ${r.minimum.toString()}${u} ${i}${a}`;return`${r.origin??"값"}이 너무 작습니다: ${r.minimum.toString()} ${i}${a}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다`;if(i.format==="ends_with")return`잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다`;if(i.format==="includes")return`잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다`;if(i.format==="regex")return`잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다`;return`잘못된 ${o[i.format]??r.format}`}case"not_multiple_of":return`잘못된 숫자: ${r.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${I(r.keys,", ")}`;case"invalid_key":return`잘못된 키: ${r.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${r.origin}`;default:return"잘못된 입력"}}};var Uk=d(()=>{x()});function Rk(e){let t=Math.abs(e),o=t%10,n=t%100;if(n>=11&&n<=19||o===0)return"many";if(o===1)return"one";return"few"}function Ng(){return{localeError:bN()}}var Vo=(e)=>{return e.charAt(0).toUpperCase()+e.slice(1)},bN=()=>{let e={string:{unit:{one:"simbolis",few:"simboliai",many:"simbolių"},verb:{smaller:{inclusive:"turi būti ne ilgesnė kaip",notInclusive:"turi būti trumpesnė kaip"},bigger:{inclusive:"turi būti ne trumpesnė kaip",notInclusive:"turi būti ilgesnė kaip"}}},file:{unit:{one:"baitas",few:"baitai",many:"baitų"},verb:{smaller:{inclusive:"turi būti ne didesnis kaip",notInclusive:"turi būti mažesnis kaip"},bigger:{inclusive:"turi būti ne mažesnis kaip",notInclusive:"turi būti didesnis kaip"}}},array:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}},set:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}}};function t(r,i,a,c){let u=e[r]??null;if(u===null)return u;return{unit:u.unit[i],verb:u.verb[c][a?"inclusive":"notInclusive"]}}let o={regex:"įvestis",email:"el. pašto adresas",url:"URL",emoji:"jaustukas",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO data ir laikas",date:"ISO data",time:"ISO laikas",duration:"ISO trukmė",ipv4:"IPv4 adresas",ipv6:"IPv6 adresas",cidrv4:"IPv4 tinklo prefiksas (CIDR)",cidrv6:"IPv6 tinklo prefiksas (CIDR)",base64:"base64 užkoduota eilutė",base64url:"base64url užkoduota eilutė",json_string:"JSON eilutė",e164:"E.164 numeris",jwt:"JWT",template_literal:"įvestis"},n={nan:"NaN",number:"skaičius",bigint:"sveikasis skaičius",string:"eilutė",boolean:"loginė reikšmė",undefined:"neapibrėžta reikšmė",function:"funkcija",symbol:"simbolis",array:"masyvas",object:"objektas",null:"nulinė reikšmė"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Gautas tipas ${c}, o tikėtasi - instanceof ${r.expected}`;return`Gautas tipas ${c}, o tikėtasi - ${i}`}case"invalid_value":if(r.values.length===1)return`Privalo būti ${k(r.values[0])}`;return`Privalo būti vienas iš ${I(r.values,"|")} pasirinkimų`;case"too_big":{let i=n[r.origin]??r.origin,a=t(r.origin,Rk(Number(r.maximum)),r.inclusive??!1,"smaller");if(a?.verb)return`${Vo(i??r.origin??"reikšmė")} ${a.verb} ${r.maximum.toString()} ${a.unit??"elementų"}`;let c=r.inclusive?"ne didesnis kaip":"mažesnis kaip";return`${Vo(i??r.origin??"reikšmė")} turi būti ${c} ${r.maximum.toString()} ${a?.unit}`}case"too_small":{let i=n[r.origin]??r.origin,a=t(r.origin,Rk(Number(r.minimum)),r.inclusive??!1,"bigger");if(a?.verb)return`${Vo(i??r.origin??"reikšmė")} ${a.verb} ${r.minimum.toString()} ${a.unit??"elementų"}`;let c=r.inclusive?"ne mažesnis kaip":"didesnis kaip";return`${Vo(i??r.origin??"reikšmė")} turi būti ${c} ${r.minimum.toString()} ${a?.unit}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Eilutė privalo prasidėti "${i.prefix}"`;if(i.format==="ends_with")return`Eilutė privalo pasibaigti "${i.suffix}"`;if(i.format==="includes")return`Eilutė privalo įtraukti "${i.includes}"`;if(i.format==="regex")return`Eilutė privalo atitikti ${i.pattern}`;return`Neteisingas ${o[i.format]??r.format}`}case"not_multiple_of":return`Skaičius privalo būti ${r.divisor} kartotinis.`;case"unrecognized_keys":return`Neatpažint${r.keys.length>1?"i":"as"} rakt${r.keys.length>1?"ai":"as"}: ${I(r.keys,", ")}`;case"invalid_key":return"Rastas klaidingas raktas";case"invalid_union":return"Klaidinga įvestis";case"invalid_element":{let i=n[r.origin]??r.origin;return`${Vo(i??r.origin??"reikšmė")} turi klaidingą įvestį`}default:return"Klaidinga įvestis"}}};var Kk=d(()=>{x()});function Lg(){return{localeError:yN()}}var yN=()=>{let e={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function t(r){return e[r]??null}let o={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"},n={nan:"NaN",number:"број",array:"низа"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Грешен внес: се очекува instanceof ${r.expected}, примено ${c}`;return`Грешен внес: се очекува ${i}, примено ${c}`}case"invalid_value":if(r.values.length===1)return`Invalid input: expected ${k(r.values[0])}`;return`Грешана опција: се очекува една ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Премногу голем: се очекува ${r.origin??"вредноста"} да има ${i}${r.maximum.toString()} ${a.unit??"елементи"}`;return`Премногу голем: се очекува ${r.origin??"вредноста"} да биде ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Премногу мал: се очекува ${r.origin} да има ${i}${r.minimum.toString()} ${a.unit}`;return`Премногу мал: се очекува ${r.origin} да биде ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Неважечка низа: мора да започнува со "${i.prefix}"`;if(i.format==="ends_with")return`Неважечка низа: мора да завршува со "${i.suffix}"`;if(i.format==="includes")return`Неважечка низа: мора да вклучува "${i.includes}"`;if(i.format==="regex")return`Неважечка низа: мора да одгоара на патернот ${i.pattern}`;return`Invalid ${o[i.format]??r.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${I(r.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${r.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${r.origin}`;default:return"Грешен внес"}}};var Fk=d(()=>{x()});function Cg(){return{localeError:mN()}}var mN=()=>{let e={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function t(r){return e[r]??null}let o={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"nombor"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Input tidak sah: dijangka instanceof ${r.expected}, diterima ${c}`;return`Input tidak sah: dijangka ${i}, diterima ${c}`}case"invalid_value":if(r.values.length===1)return`Input tidak sah: dijangka ${k(r.values[0])}`;return`Pilihan tidak sah: dijangka salah satu daripada ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Terlalu besar: dijangka ${r.origin??"nilai"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"elemen"}`;return`Terlalu besar: dijangka ${r.origin??"nilai"} adalah ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Terlalu kecil: dijangka ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Terlalu kecil: dijangka ${r.origin} adalah ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`String tidak sah: mesti bermula dengan "${i.prefix}"`;if(i.format==="ends_with")return`String tidak sah: mesti berakhir dengan "${i.suffix}"`;if(i.format==="includes")return`String tidak sah: mesti mengandungi "${i.includes}"`;if(i.format==="regex")return`String tidak sah: mesti sepadan dengan corak ${i.pattern}`;return`${o[i.format]??r.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${r.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${I(r.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${r.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${r.origin}`;default:return"Input tidak sah"}}};var Gk=d(()=>{x()});function xg(){return{localeError:pN()}}var pN=()=>{let e={string:{unit:"tekens",verb:"heeft"},file:{unit:"bytes",verb:"heeft"},array:{unit:"elementen",verb:"heeft"},set:{unit:"elementen",verb:"heeft"}};function t(r){return e[r]??null}let o={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"},n={nan:"NaN",number:"getal"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ongeldige invoer: verwacht instanceof ${r.expected}, ontving ${c}`;return`Ongeldige invoer: verwacht ${i}, ontving ${c}`}case"invalid_value":if(r.values.length===1)return`Ongeldige invoer: verwacht ${k(r.values[0])}`;return`Ongeldige optie: verwacht één van ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin),c=r.origin==="date"?"laat":r.origin==="string"?"lang":"groot";if(a)return`Te ${c}: verwacht dat ${r.origin??"waarde"} ${i}${r.maximum.toString()} ${a.unit??"elementen"} ${a.verb}`;return`Te ${c}: verwacht dat ${r.origin??"waarde"} ${i}${r.maximum.toString()} is`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin),c=r.origin==="date"?"vroeg":r.origin==="string"?"kort":"klein";if(a)return`Te ${c}: verwacht dat ${r.origin} ${i}${r.minimum.toString()} ${a.unit} ${a.verb}`;return`Te ${c}: verwacht dat ${r.origin} ${i}${r.minimum.toString()} is`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ongeldige tekst: moet met "${i.prefix}" beginnen`;if(i.format==="ends_with")return`Ongeldige tekst: moet op "${i.suffix}" eindigen`;if(i.format==="includes")return`Ongeldige tekst: moet "${i.includes}" bevatten`;if(i.format==="regex")return`Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}`;return`Ongeldig: ${o[i.format]??r.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${r.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${r.origin}`;default:return"Ongeldige invoer"}}};var Bk=d(()=>{x()});function zg(){return{localeError:vN()}}var vN=()=>{let e={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function t(r){return e[r]??null}let o={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"tall",array:"liste"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ugyldig input: forventet instanceof ${r.expected}, fikk ${c}`;return`Ugyldig input: forventet ${i}, fikk ${c}`}case"invalid_value":if(r.values.length===1)return`Ugyldig verdi: forventet ${k(r.values[0])}`;return`Ugyldig valg: forventet en av ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`For stor(t): forventet ${r.origin??"value"} til å ha ${i}${r.maximum.toString()} ${a.unit??"elementer"}`;return`For stor(t): forventet ${r.origin??"value"} til å ha ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`For lite(n): forventet ${r.origin} til å ha ${i}${r.minimum.toString()} ${a.unit}`;return`For lite(n): forventet ${r.origin} til å ha ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ugyldig streng: må starte med "${i.prefix}"`;if(i.format==="ends_with")return`Ugyldig streng: må ende med "${i.suffix}"`;if(i.format==="includes")return`Ugyldig streng: må inneholde "${i.includes}"`;if(i.format==="regex")return`Ugyldig streng: må matche mønsteret ${i.pattern}`;return`Ugyldig ${o[i.format]??r.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${I(r.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${r.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${r.origin}`;default:return"Ugyldig input"}}};var Hk=d(()=>{x()});function jg(){return{localeError:IN()}}var IN=()=>{let e={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function t(r){return e[r]??null}let o={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"},n={nan:"NaN",number:"numara",array:"saf",null:"gayb"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Fâsit giren: umulan instanceof ${r.expected}, alınan ${c}`;return`Fâsit giren: umulan ${i}, alınan ${c}`}case"invalid_value":if(r.values.length===1)return`Fâsit giren: umulan ${k(r.values[0])}`;return`Fâsit tercih: mûteberler ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Fazla büyük: ${r.origin??"value"}, ${i}${r.maximum.toString()} ${a.unit??"elements"} sahip olmalıydı.`;return`Fazla büyük: ${r.origin??"value"}, ${i}${r.maximum.toString()} olmalıydı.`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Fazla küçük: ${r.origin}, ${i}${r.minimum.toString()} ${a.unit} sahip olmalıydı.`;return`Fazla küçük: ${r.origin}, ${i}${r.minimum.toString()} olmalıydı.`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Fâsit metin: "${i.prefix}" ile başlamalı.`;if(i.format==="ends_with")return`Fâsit metin: "${i.suffix}" ile bitmeli.`;if(i.format==="includes")return`Fâsit metin: "${i.includes}" ihtivâ etmeli.`;if(i.format==="regex")return`Fâsit metin: ${i.pattern} nakşına uymalı.`;return`Fâsit ${o[i.format]??r.format}`}case"not_multiple_of":return`Fâsit sayı: ${r.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`${r.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${r.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};var Mk=d(()=>{x()});function Eg(){return{localeError:fN()}}var fN=()=>{let e={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function t(r){return e[r]??null}let o={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"},n={nan:"NaN",number:"عدد",array:"ارې"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ناسم ورودي: باید instanceof ${r.expected} وای, مګر ${c} ترلاسه شو`;return`ناسم ورودي: باید ${i} وای, مګر ${c} ترلاسه شو`}case"invalid_value":if(r.values.length===1)return`ناسم ورودي: باید ${k(r.values[0])} وای`;return`ناسم انتخاب: باید یو له ${I(r.values,"|")} څخه وای`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`ډیر لوی: ${r.origin??"ارزښت"} باید ${i}${r.maximum.toString()} ${a.unit??"عنصرونه"} ولري`;return`ډیر لوی: ${r.origin??"ارزښت"} باید ${i}${r.maximum.toString()} وي`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`ډیر کوچنی: ${r.origin} باید ${i}${r.minimum.toString()} ${a.unit} ولري`;return`ډیر کوچنی: ${r.origin} باید ${i}${r.minimum.toString()} وي`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`ناسم متن: باید د "${i.prefix}" سره پیل شي`;if(i.format==="ends_with")return`ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي`;if(i.format==="includes")return`ناسم متن: باید "${i.includes}" ولري`;if(i.format==="regex")return`ناسم متن: باید د ${i.pattern} سره مطابقت ولري`;return`${o[i.format]??r.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${r.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${r.keys.length>1?"کلیډونه":"کلیډ"}: ${I(r.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${r.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${r.origin} کې`;default:return"ناسمه ورودي"}}};var Jk=d(()=>{x()});function Ug(){return{localeError:kN()}}var kN=()=>{let e={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function t(r){return e[r]??null}let o={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"},n={nan:"NaN",number:"liczba",array:"tablica"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Nieprawidłowe dane wejściowe: oczekiwano instanceof ${r.expected}, otrzymano ${c}`;return`Nieprawidłowe dane wejściowe: oczekiwano ${i}, otrzymano ${c}`}case"invalid_value":if(r.values.length===1)return`Nieprawidłowe dane wejściowe: oczekiwano ${k(r.values[0])}`;return`Nieprawidłowa opcja: oczekiwano jednej z wartości ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Za duża wartość: oczekiwano, że ${r.origin??"wartość"} będzie mieć ${i}${r.maximum.toString()} ${a.unit??"elementów"}`;return`Zbyt duż(y/a/e): oczekiwano, że ${r.origin??"wartość"} będzie wynosić ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Za mała wartość: oczekiwano, że ${r.origin??"wartość"} będzie mieć ${i}${r.minimum.toString()} ${a.unit??"elementów"}`;return`Zbyt mał(y/a/e): oczekiwano, że ${r.origin??"wartość"} będzie wynosić ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"`;if(i.format==="ends_with")return`Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"`;if(i.format==="includes")return`Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"`;if(i.format==="regex")return`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}`;return`Nieprawidłow(y/a/e) ${o[i.format]??r.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${r.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${r.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${r.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};var Vk=d(()=>{x()});function Rg(){return{localeError:$N()}}var $N=()=>{let e={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function t(r){return e[r]??null}let o={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN",number:"número",null:"nulo"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Tipo inválido: esperado instanceof ${r.expected}, recebido ${c}`;return`Tipo inválido: esperado ${i}, recebido ${c}`}case"invalid_value":if(r.values.length===1)return`Entrada inválida: esperado ${k(r.values[0])}`;return`Opção inválida: esperada uma das ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Muito grande: esperado que ${r.origin??"valor"} tivesse ${i}${r.maximum.toString()} ${a.unit??"elementos"}`;return`Muito grande: esperado que ${r.origin??"valor"} fosse ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Muito pequeno: esperado que ${r.origin} tivesse ${i}${r.minimum.toString()} ${a.unit}`;return`Muito pequeno: esperado que ${r.origin} fosse ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Texto inválido: deve começar com "${i.prefix}"`;if(i.format==="ends_with")return`Texto inválido: deve terminar com "${i.suffix}"`;if(i.format==="includes")return`Texto inválido: deve incluir "${i.includes}"`;if(i.format==="regex")return`Texto inválido: deve corresponder ao padrão ${i.pattern}`;return`${o[i.format]??r.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${r.divisor}`;case"unrecognized_keys":return`Chave${r.keys.length>1?"s":""} desconhecida${r.keys.length>1?"s":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Chave inválida em ${r.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${r.origin}`;default:return"Campo inválido"}}};var qk=d(()=>{x()});function Wk(e,t,o,n){let r=Math.abs(e),i=r%10,a=r%100;if(a>=11&&a<=19)return n;if(i===1)return t;if(i>=2&&i<=4)return o;return n}function Kg(){return{localeError:wN()}}var wN=()=>{let e={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function t(r){return e[r]??null}let o={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"},n={nan:"NaN",number:"число",array:"массив"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Неверный ввод: ожидалось instanceof ${r.expected}, получено ${c}`;return`Неверный ввод: ожидалось ${i}, получено ${c}`}case"invalid_value":if(r.values.length===1)return`Неверный ввод: ожидалось ${k(r.values[0])}`;return`Неверный вариант: ожидалось одно из ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a){let c=Number(r.maximum),u=Wk(c,a.unit.one,a.unit.few,a.unit.many);return`Слишком большое значение: ожидалось, что ${r.origin??"значение"} будет иметь ${i}${r.maximum.toString()} ${u}`}return`Слишком большое значение: ожидалось, что ${r.origin??"значение"} будет ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a){let c=Number(r.minimum),u=Wk(c,a.unit.one,a.unit.few,a.unit.many);return`Слишком маленькое значение: ожидалось, что ${r.origin} будет иметь ${i}${r.minimum.toString()} ${u}`}return`Слишком маленькое значение: ожидалось, что ${r.origin} будет ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Неверная строка: должна начинаться с "${i.prefix}"`;if(i.format==="ends_with")return`Неверная строка: должна заканчиваться на "${i.suffix}"`;if(i.format==="includes")return`Неверная строка: должна содержать "${i.includes}"`;if(i.format==="regex")return`Неверная строка: должна соответствовать шаблону ${i.pattern}`;return`Неверный ${o[i.format]??r.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${r.divisor}`;case"unrecognized_keys":return`Нераспознанн${r.keys.length>1?"ые":"ый"} ключ${r.keys.length>1?"и":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${r.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${r.origin}`;default:return"Неверные входные данные"}}};var Yk=d(()=>{x()});function Fg(){return{localeError:_N()}}var _N=()=>{let e={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function t(r){return e[r]??null}let o={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"},n={nan:"NaN",number:"število",array:"tabela"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Neveljaven vnos: pričakovano instanceof ${r.expected}, prejeto ${c}`;return`Neveljaven vnos: pričakovano ${i}, prejeto ${c}`}case"invalid_value":if(r.values.length===1)return`Neveljaven vnos: pričakovano ${k(r.values[0])}`;return`Neveljavna možnost: pričakovano eno izmed ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Preveliko: pričakovano, da bo ${r.origin??"vrednost"} imelo ${i}${r.maximum.toString()} ${a.unit??"elementov"}`;return`Preveliko: pričakovano, da bo ${r.origin??"vrednost"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Premajhno: pričakovano, da bo ${r.origin} imelo ${i}${r.minimum.toString()} ${a.unit}`;return`Premajhno: pričakovano, da bo ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Neveljaven niz: mora se začeti z "${i.prefix}"`;if(i.format==="ends_with")return`Neveljaven niz: mora se končati z "${i.suffix}"`;if(i.format==="includes")return`Neveljaven niz: mora vsebovati "${i.includes}"`;if(i.format==="regex")return`Neveljaven niz: mora ustrezati vzorcu ${i.pattern}`;return`Neveljaven ${o[i.format]??r.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${r.divisor}`;case"unrecognized_keys":return`Neprepoznan${r.keys.length>1?"i ključi":" ključ"}: ${I(r.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${r.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${r.origin}`;default:return"Neveljaven vnos"}}};var Xk=d(()=>{x()});function Gg(){return{localeError:ON()}}var ON=()=>{let e={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function t(r){return e[r]??null}let o={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"},n={nan:"NaN",number:"antal",array:"lista"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ogiltig inmatning: förväntat instanceof ${r.expected}, fick ${c}`;return`Ogiltig inmatning: förväntat ${i}, fick ${c}`}case"invalid_value":if(r.values.length===1)return`Ogiltig inmatning: förväntat ${k(r.values[0])}`;return`Ogiltigt val: förväntade en av ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`För stor(t): förväntade ${r.origin??"värdet"} att ha ${i}${r.maximum.toString()} ${a.unit??"element"}`;return`För stor(t): förväntat ${r.origin??"värdet"} att ha ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`För lite(t): förväntade ${r.origin??"värdet"} att ha ${i}${r.minimum.toString()} ${a.unit}`;return`För lite(t): förväntade ${r.origin??"värdet"} att ha ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ogiltig sträng: måste börja med "${i.prefix}"`;if(i.format==="ends_with")return`Ogiltig sträng: måste sluta med "${i.suffix}"`;if(i.format==="includes")return`Ogiltig sträng: måste innehålla "${i.includes}"`;if(i.format==="regex")return`Ogiltig sträng: måste matcha mönstret "${i.pattern}"`;return`Ogiltig(t) ${o[i.format]??r.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${I(r.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${r.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${r.origin??"värdet"}`;default:return"Ogiltig input"}}};var Zk=d(()=>{x()});function Bg(){return{localeError:SN()}}var SN=()=>{let e={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function t(r){return e[r]??null}let o={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"எண்",array:"அணி",null:"வெறுமை"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${r.expected}, பெறப்பட்டது ${c}`;return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i}, பெறப்பட்டது ${c}`}case"invalid_value":if(r.values.length===1)return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${k(r.values[0])}`;return`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${I(r.values,"|")} இல் ஒன்று`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${r.origin??"மதிப்பு"} ${i}${r.maximum.toString()} ${a.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`;return`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${r.origin??"மதிப்பு"} ${i}${r.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${r.origin} ${i}${r.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்`;return`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${r.origin} ${i}${r.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்`;if(i.format==="ends_with")return`தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்`;if(i.format==="includes")return`தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்`;if(i.format==="regex")return`தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;return`தவறான ${o[i.format]??r.format}`}case"not_multiple_of":return`தவறான எண்: ${r.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${r.keys.length>1?"கள்":""}: ${I(r.keys,", ")}`;case"invalid_key":return`${r.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${r.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};var Qk=d(()=>{x()});function Hg(){return{localeError:TN()}}var TN=()=>{let e={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function t(r){return e[r]??null}let o={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"},n={nan:"NaN",number:"ตัวเลข",array:"อาร์เรย์ (Array)",null:"ไม่มีค่า (null)"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${r.expected} แต่ได้รับ ${c}`;return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${i} แต่ได้รับ ${c}`}case"invalid_value":if(r.values.length===1)return`ค่าไม่ถูกต้อง: ควรเป็น ${k(r.values[0])}`;return`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"ไม่เกิน":"น้อยกว่า",a=t(r.origin);if(a)return`เกินกำหนด: ${r.origin??"ค่า"} ควรมี${i} ${r.maximum.toString()} ${a.unit??"รายการ"}`;return`เกินกำหนด: ${r.origin??"ค่า"} ควรมี${i} ${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?"อย่างน้อย":"มากกว่า",a=t(r.origin);if(a)return`น้อยกว่ากำหนด: ${r.origin} ควรมี${i} ${r.minimum.toString()} ${a.unit}`;return`น้อยกว่ากำหนด: ${r.origin} ควรมี${i} ${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"`;if(i.format==="ends_with")return`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"`;if(i.format==="includes")return`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ`;if(i.format==="regex")return`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}`;return`รูปแบบไม่ถูกต้อง: ${o[i.format]??r.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${r.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${I(r.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${r.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${r.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};var e$=d(()=>{x()});function Mg(){return{localeError:PN()}}var PN=()=>{let e={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function t(r){return e[r]??null}let o={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Geçersiz değer: beklenen instanceof ${r.expected}, alınan ${c}`;return`Geçersiz değer: beklenen ${i}, alınan ${c}`}case"invalid_value":if(r.values.length===1)return`Geçersiz değer: beklenen ${k(r.values[0])}`;return`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Çok büyük: beklenen ${r.origin??"değer"} ${i}${r.maximum.toString()} ${a.unit??"öğe"}`;return`Çok büyük: beklenen ${r.origin??"değer"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Çok küçük: beklenen ${r.origin} ${i}${r.minimum.toString()} ${a.unit}`;return`Çok küçük: beklenen ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Geçersiz metin: "${i.prefix}" ile başlamalı`;if(i.format==="ends_with")return`Geçersiz metin: "${i.suffix}" ile bitmeli`;if(i.format==="includes")return`Geçersiz metin: "${i.includes}" içermeli`;if(i.format==="regex")return`Geçersiz metin: ${i.pattern} desenine uymalı`;return`Geçersiz ${o[i.format]??r.format}`}case"not_multiple_of":return`Geçersiz sayı: ${r.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${r.keys.length>1?"lar":""}: ${I(r.keys,", ")}`;case"invalid_key":return`${r.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${r.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};var t$=d(()=>{x()});function qo(){return{localeError:AN()}}var AN=()=>{let e={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function t(r){return e[r]??null}let o={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"},n={nan:"NaN",number:"число",array:"масив"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Неправильні вхідні дані: очікується instanceof ${r.expected}, отримано ${c}`;return`Неправильні вхідні дані: очікується ${i}, отримано ${c}`}case"invalid_value":if(r.values.length===1)return`Неправильні вхідні дані: очікується ${k(r.values[0])}`;return`Неправильна опція: очікується одне з ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Занадто велике: очікується, що ${r.origin??"значення"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"елементів"}`;return`Занадто велике: очікується, що ${r.origin??"значення"} буде ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Занадто мале: очікується, що ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Занадто мале: очікується, що ${r.origin} буде ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Неправильний рядок: повинен починатися з "${i.prefix}"`;if(i.format==="ends_with")return`Неправильний рядок: повинен закінчуватися на "${i.suffix}"`;if(i.format==="includes")return`Неправильний рядок: повинен містити "${i.includes}"`;if(i.format==="regex")return`Неправильний рядок: повинен відповідати шаблону ${i.pattern}`;return`Неправильний ${o[i.format]??r.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${r.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${r.keys.length>1?"і":""}: ${I(r.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${r.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${r.origin}`;default:return"Неправильні вхідні дані"}}};var Jg=d(()=>{x()});function Vg(){return qo()}var r$=d(()=>{Jg()});function qg(){return{localeError:DN()}}var DN=()=>{let e={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function t(r){return e[r]??null}let o={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"},n={nan:"NaN",number:"نمبر",array:"آرے",null:"نل"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`غلط ان پٹ: instanceof ${r.expected} متوقع تھا، ${c} موصول ہوا`;return`غلط ان پٹ: ${i} متوقع تھا، ${c} موصول ہوا`}case"invalid_value":if(r.values.length===1)return`غلط ان پٹ: ${k(r.values[0])} متوقع تھا`;return`غلط آپشن: ${I(r.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`بہت بڑا: ${r.origin??"ویلیو"} کے ${i}${r.maximum.toString()} ${a.unit??"عناصر"} ہونے متوقع تھے`;return`بہت بڑا: ${r.origin??"ویلیو"} کا ${i}${r.maximum.toString()} ہونا متوقع تھا`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`بہت چھوٹا: ${r.origin} کے ${i}${r.minimum.toString()} ${a.unit} ہونے متوقع تھے`;return`بہت چھوٹا: ${r.origin} کا ${i}${r.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے`;if(i.format==="ends_with")return`غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے`;if(i.format==="includes")return`غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے`;if(i.format==="regex")return`غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے`;return`غلط ${o[i.format]??r.format}`}case"not_multiple_of":return`غلط نمبر: ${r.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${r.keys.length>1?"ز":""}: ${I(r.keys,"، ")}`;case"invalid_key":return`${r.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${r.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};var o$=d(()=>{x()});function Wg(){return{localeError:NN()}}var NN=()=>{let e={string:{unit:"belgi",verb:"bo‘lishi kerak"},file:{unit:"bayt",verb:"bo‘lishi kerak"},array:{unit:"element",verb:"bo‘lishi kerak"},set:{unit:"element",verb:"bo‘lishi kerak"}};function t(r){return e[r]??null}let o={regex:"kirish",email:"elektron pochta manzili",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO sana va vaqti",date:"ISO sana",time:"ISO vaqt",duration:"ISO davomiylik",ipv4:"IPv4 manzil",ipv6:"IPv6 manzil",mac:"MAC manzil",cidrv4:"IPv4 diapazon",cidrv6:"IPv6 diapazon",base64:"base64 kodlangan satr",base64url:"base64url kodlangan satr",json_string:"JSON satr",e164:"E.164 raqam",jwt:"JWT",template_literal:"kirish"},n={nan:"NaN",number:"raqam",array:"massiv"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Noto‘g‘ri kirish: kutilgan instanceof ${r.expected}, qabul qilingan ${c}`;return`Noto‘g‘ri kirish: kutilgan ${i}, qabul qilingan ${c}`}case"invalid_value":if(r.values.length===1)return`Noto‘g‘ri kirish: kutilgan ${k(r.values[0])}`;return`Noto‘g‘ri variant: quyidagilardan biri kutilgan ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Juda katta: kutilgan ${r.origin??"qiymat"} ${i}${r.maximum.toString()} ${a.unit} ${a.verb}`;return`Juda katta: kutilgan ${r.origin??"qiymat"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Juda kichik: kutilgan ${r.origin} ${i}${r.minimum.toString()} ${a.unit} ${a.verb}`;return`Juda kichik: kutilgan ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Noto‘g‘ri satr: "${i.prefix}" bilan boshlanishi kerak`;if(i.format==="ends_with")return`Noto‘g‘ri satr: "${i.suffix}" bilan tugashi kerak`;if(i.format==="includes")return`Noto‘g‘ri satr: "${i.includes}" ni o‘z ichiga olishi kerak`;if(i.format==="regex")return`Noto‘g‘ri satr: ${i.pattern} shabloniga mos kelishi kerak`;return`Noto‘g‘ri ${o[i.format]??r.format}`}case"not_multiple_of":return`Noto‘g‘ri raqam: ${r.divisor} ning karralisi bo‘lishi kerak`;case"unrecognized_keys":return`Noma’lum kalit${r.keys.length>1?"lar":""}: ${I(r.keys,", ")}`;case"invalid_key":return`${r.origin} dagi kalit noto‘g‘ri`;case"invalid_union":return"Noto‘g‘ri kirish";case"invalid_element":return`${r.origin} da noto‘g‘ri qiymat`;default:return"Noto‘g‘ri kirish"}}};var n$=d(()=>{x()});function Yg(){return{localeError:LN()}}var LN=()=>{let e={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function t(r){return e[r]??null}let o={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"},n={nan:"NaN",number:"số",array:"mảng"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Đầu vào không hợp lệ: mong đợi instanceof ${r.expected}, nhận được ${c}`;return`Đầu vào không hợp lệ: mong đợi ${i}, nhận được ${c}`}case"invalid_value":if(r.values.length===1)return`Đầu vào không hợp lệ: mong đợi ${k(r.values[0])}`;return`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Quá lớn: mong đợi ${r.origin??"giá trị"} ${a.verb} ${i}${r.maximum.toString()} ${a.unit??"phần tử"}`;return`Quá lớn: mong đợi ${r.origin??"giá trị"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Quá nhỏ: mong đợi ${r.origin} ${a.verb} ${i}${r.minimum.toString()} ${a.unit}`;return`Quá nhỏ: mong đợi ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"`;if(i.format==="ends_with")return`Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"`;if(i.format==="includes")return`Chuỗi không hợp lệ: phải bao gồm "${i.includes}"`;if(i.format==="regex")return`Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}`;return`${o[i.format]??r.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${r.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${I(r.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${r.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${r.origin}`;default:return"Đầu vào không hợp lệ"}}};var i$=d(()=>{x()});function Xg(){return{localeError:CN()}}var CN=()=>{let e={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function t(r){return e[r]??null}let o={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"},n={nan:"NaN",number:"数字",array:"数组",null:"空值(null)"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`无效输入：期望 instanceof ${r.expected}，实际接收 ${c}`;return`无效输入：期望 ${i}，实际接收 ${c}`}case"invalid_value":if(r.values.length===1)return`无效输入：期望 ${k(r.values[0])}`;return`无效选项：期望以下之一 ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`数值过大：期望 ${r.origin??"值"} ${i}${r.maximum.toString()} ${a.unit??"个元素"}`;return`数值过大：期望 ${r.origin??"值"} ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`数值过小：期望 ${r.origin} ${i}${r.minimum.toString()} ${a.unit}`;return`数值过小：期望 ${r.origin} ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`无效字符串：必须以 "${i.prefix}" 开头`;if(i.format==="ends_with")return`无效字符串：必须以 "${i.suffix}" 结尾`;if(i.format==="includes")return`无效字符串：必须包含 "${i.includes}"`;if(i.format==="regex")return`无效字符串：必须满足正则表达式 ${i.pattern}`;return`无效${o[i.format]??r.format}`}case"not_multiple_of":return`无效数字：必须是 ${r.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${I(r.keys,", ")}`;case"invalid_key":return`${r.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${r.origin} 中包含无效值(value)`;default:return"无效输入"}}};var a$=d(()=>{x()});function Zg(){return{localeError:xN()}}var xN=()=>{let e={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function t(r){return e[r]??null}let o={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"},n={nan:"NaN"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`無效的輸入值：預期為 instanceof ${r.expected}，但收到 ${c}`;return`無效的輸入值：預期為 ${i}，但收到 ${c}`}case"invalid_value":if(r.values.length===1)return`無效的輸入值：預期為 ${k(r.values[0])}`;return`無效的選項：預期為以下其中之一 ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`數值過大：預期 ${r.origin??"值"} 應為 ${i}${r.maximum.toString()} ${a.unit??"個元素"}`;return`數值過大：預期 ${r.origin??"值"} 應為 ${i}${r.maximum.toString()}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`數值過小：預期 ${r.origin} 應為 ${i}${r.minimum.toString()} ${a.unit}`;return`數值過小：預期 ${r.origin} 應為 ${i}${r.minimum.toString()}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`無效的字串：必須以 "${i.prefix}" 開頭`;if(i.format==="ends_with")return`無效的字串：必須以 "${i.suffix}" 結尾`;if(i.format==="includes")return`無效的字串：必須包含 "${i.includes}"`;if(i.format==="regex")return`無效的字串：必須符合格式 ${i.pattern}`;return`無效的 ${o[i.format]??r.format}`}case"not_multiple_of":return`無效的數字：必須為 ${r.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${r.keys.length>1?"們":""}：${I(r.keys,"、")}`;case"invalid_key":return`${r.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${r.origin} 中有無效的值`;default:return"無效的輸入值"}}};var c$=d(()=>{x()});function Qg(){return{localeError:zN()}}var zN=()=>{let e={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function t(r){return e[r]??null}let o={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"},n={nan:"NaN",number:"nọ́mbà",array:"akopọ"};return(r)=>{switch(r.code){case"invalid_type":{let i=n[r.expected]??r.expected,a=$(r.input),c=n[a]??a;if(/^[A-Z]/.test(r.expected))return`Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${r.expected}, àmọ̀ a rí ${c}`;return`Ìbáwọlé aṣìṣe: a ní láti fi ${i}, àmọ̀ a rí ${c}`}case"invalid_value":if(r.values.length===1)return`Ìbáwọlé aṣìṣe: a ní láti fi ${k(r.values[0])}`;return`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${I(r.values,"|")}`;case"too_big":{let i=r.inclusive?"<=":"<",a=t(r.origin);if(a)return`Tó pọ̀ jù: a ní láti jẹ́ pé ${r.origin??"iye"} ${a.verb} ${i}${r.maximum} ${a.unit}`;return`Tó pọ̀ jù: a ní láti jẹ́ ${i}${r.maximum}`}case"too_small":{let i=r.inclusive?">=":">",a=t(r.origin);if(a)return`Kéré ju: a ní láti jẹ́ pé ${r.origin} ${a.verb} ${i}${r.minimum} ${a.unit}`;return`Kéré ju: a ní láti jẹ́ ${i}${r.minimum}`}case"invalid_format":{let i=r;if(i.format==="starts_with")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"`;if(i.format==="ends_with")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"`;if(i.format==="includes")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"`;if(i.format==="regex")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}`;return`Aṣìṣe: ${o[i.format]??r.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${r.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${I(r.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${r.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${r.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};var l$=d(()=>{x()});var Wo={};Qe(Wo,{zhTW:()=>Zg,zhCN:()=>Xg,yo:()=>Qg,vi:()=>Yg,uz:()=>Wg,ur:()=>qg,uk:()=>qo,ua:()=>Vg,tr:()=>Mg,th:()=>Hg,ta:()=>Bg,sv:()=>Gg,sl:()=>Fg,ru:()=>Kg,pt:()=>Rg,ps:()=>Eg,pl:()=>Ug,ota:()=>jg,no:()=>zg,nl:()=>xg,ms:()=>Cg,mk:()=>Lg,lt:()=>Ng,ko:()=>Dg,km:()=>Jo,kh:()=>Ag,ka:()=>Tg,ja:()=>Sg,it:()=>Og,is:()=>_g,id:()=>wg,hy:()=>$g,hu:()=>kg,he:()=>fg,frCA:()=>Ig,fr:()=>vg,fi:()=>pg,fa:()=>mg,es:()=>yg,eo:()=>bg,en:()=>Mo,de:()=>sg,da:()=>gg,cs:()=>hg,ca:()=>ug,bg:()=>lg,be:()=>cg,az:()=>ag,ar:()=>ig});var es=d(()=>{dk();bk();mk();pk();vk();Ik();fk();kk();dg();$k();wk();_k();Ok();Sk();Tk();Pk();Ak();Nk();Lk();Ck();xk();zk();jk();Ek();Pg();Uk();Kk();Fk();Gk();Bk();Hk();Mk();Jk();Vk();qk();Yk();Xk();Zk();Qk();e$();t$();r$();Jg();o$();n$();i$();a$();c$();l$()});class os{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let o=t[0];if(this._map.set(e,o),o&&typeof o==="object"&&"id"in o)this._idmap.set(o.id,e);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);if(t&&typeof t==="object"&&"id"in t)this._idmap.delete(t.id);return this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let o={...this.get(t)??{}};delete o.id;let n={...o,...this._map.get(e)};return Object.keys(n).length?n:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function gi(){return new os}var u$,ts,rs,ve;var Yo=d(()=>{ts=Symbol("ZodOutput"),rs=Symbol("ZodInput");(u$=globalThis).__zod_globalRegistry??(u$.__zod_globalRegistry=gi());ve=globalThis.__zod_globalRegistry});function ns(e,t){return new e({type:"string",...O(t)})}function is(e,t){return new e({type:"string",coerce:!0,...O(t)})}function si(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...O(t)})}function Xo(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...O(t)})}function di(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...O(t)})}function bi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...O(t)})}function yi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...O(t)})}function mi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...O(t)})}function Zo(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...O(t)})}function pi(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...O(t)})}function vi(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...O(t)})}function Ii(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...O(t)})}function fi(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...O(t)})}function ki(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...O(t)})}function $i(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...O(t)})}function wi(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...O(t)})}function _i(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...O(t)})}function Oi(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...O(t)})}function as(e,t){return new e({type:"string",format:"mac",check:"string_format",abort:!1,...O(t)})}function Si(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...O(t)})}function Ti(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...O(t)})}function Pi(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...O(t)})}function Ai(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...O(t)})}function Di(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...O(t)})}function Ni(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...O(t)})}function ls(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...O(t)})}function us(e,t){return new e({type:"string",format:"date",check:"string_format",...O(t)})}function hs(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...O(t)})}function gs(e,t){return new e({type:"string",format:"duration",check:"string_format",...O(t)})}function ss(e,t){return new e({type:"number",checks:[],...O(t)})}function ds(e,t){return new e({type:"number",coerce:!0,checks:[],...O(t)})}function bs(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...O(t)})}function ys(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"float32",...O(t)})}function ms(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"float64",...O(t)})}function ps(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"int32",...O(t)})}function vs(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"uint32",...O(t)})}function Is(e,t){return new e({type:"boolean",...O(t)})}function fs(e,t){return new e({type:"boolean",coerce:!0,...O(t)})}function ks(e,t){return new e({type:"bigint",...O(t)})}function $s(e,t){return new e({type:"bigint",coerce:!0,...O(t)})}function ws(e,t){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...O(t)})}function _s(e,t){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...O(t)})}function Os(e,t){return new e({type:"symbol",...O(t)})}function Ss(e,t){return new e({type:"undefined",...O(t)})}function Ts(e,t){return new e({type:"null",...O(t)})}function Ps(e){return new e({type:"any"})}function As(e){return new e({type:"unknown"})}function Ds(e,t){return new e({type:"never",...O(t)})}function Ns(e,t){return new e({type:"void",...O(t)})}function Ls(e,t){return new e({type:"date",...O(t)})}function Cs(e,t){return new e({type:"date",coerce:!0,...O(t)})}function xs(e,t){return new e({type:"nan",...O(t)})}function it(e,t){return new Zn({check:"less_than",...O(t),value:e,inclusive:!1})}function Ee(e,t){return new Zn({check:"less_than",...O(t),value:e,inclusive:!0})}function at(e,t){return new Qn({check:"greater_than",...O(t),value:e,inclusive:!1})}function Ae(e,t){return new Qn({check:"greater_than",...O(t),value:e,inclusive:!0})}function Li(e){return at(0,e)}function Ci(e){return it(0,e)}function xi(e){return Ee(0,e)}function zi(e){return Ae(0,e)}function xt(e,t){return new Pu({check:"multiple_of",...O(t),value:e})}function zt(e,t){return new Nu({check:"max_size",...O(t),maximum:e})}function ct(e,t){return new Lu({check:"min_size",...O(t),minimum:e})}function Zt(e,t){return new Cu({check:"size_equals",...O(t),size:e})}function Qt(e,t){return new xu({check:"max_length",...O(t),maximum:e})}function vt(e,t){return new zu({check:"min_length",...O(t),minimum:e})}function er(e,t){return new ju({check:"length_equals",...O(t),length:e})}function _r(e,t){return new Eu({check:"string_format",format:"regex",...O(t),pattern:e})}function Or(e){return new Uu({check:"string_format",format:"lowercase",...O(e)})}function Sr(e){return new Ru({check:"string_format",format:"uppercase",...O(e)})}function Tr(e,t){return new Ku({check:"string_format",format:"includes",...O(t),includes:e})}function Pr(e,t){return new Fu({check:"string_format",format:"starts_with",...O(t),prefix:e})}function Ar(e,t){return new Gu({check:"string_format",format:"ends_with",...O(t),suffix:e})}function ji(e,t,o){return new Bu({check:"property",property:e,schema:t,...O(o)})}function Dr(e,t){return new Hu({check:"mime_type",mime:e,...O(t)})}function Xe(e){return new Mu({check:"overwrite",tx:e})}function Nr(e){return Xe((t)=>t.normalize(e))}function Lr(){return Xe((e)=>e.trim())}function Cr(){return Xe((e)=>e.toLowerCase())}function xr(){return Xe((e)=>e.toUpperCase())}function zr(){return Xe((e)=>Fl(e))}function zs(e,t,o){return new e({type:"array",element:t,...O(o)})}function EN(e,t,o){return new e({type:"union",options:t,...O(o)})}function UN(e,t,o){return new e({type:"union",options:t,inclusive:!1,...O(o)})}function RN(e,t,o,n){return new e({type:"union",options:o,discriminator:t,...O(n)})}function KN(e,t,o){return new e({type:"intersection",left:t,right:o})}function FN(e,t,o,n){let r=o instanceof E;return new e({type:"tuple",items:t,rest:r?o:null,...O(r?n:o)})}function GN(e,t,o,n){return new e({type:"record",keyType:t,valueType:o,...O(n)})}function BN(e,t,o,n){return new e({type:"map",keyType:t,valueType:o,...O(n)})}function HN(e,t,o){return new e({type:"set",valueType:t,...O(o)})}function MN(e,t,o){let n=Array.isArray(t)?Object.fromEntries(t.map((r)=>[r,r])):t;return new e({type:"enum",entries:n,...O(o)})}function JN(e,t,o){return new e({type:"enum",entries:t,...O(o)})}function VN(e,t,o){return new e({type:"literal",values:Array.isArray(t)?t:[t],...O(o)})}function js(e,t){return new e({type:"file",...O(t)})}function qN(e,t){return new e({type:"transform",transform:t})}function WN(e,t){return new e({type:"optional",innerType:t})}function YN(e,t){return new e({type:"nullable",innerType:t})}function XN(e,t,o){return new e({type:"default",innerType:t,get defaultValue(){return typeof o==="function"?o():Bl(o)}})}function ZN(e,t,o){return new e({type:"nonoptional",innerType:t,...O(o)})}function QN(e,t){return new e({type:"success",innerType:t})}function eL(e,t,o){return new e({type:"catch",innerType:t,catchValue:typeof o==="function"?o:()=>o})}function tL(e,t,o){return new e({type:"pipe",in:t,out:o})}function rL(e,t){return new e({type:"readonly",innerType:t})}function oL(e,t,o){return new e({type:"template_literal",parts:t,...O(o)})}function nL(e,t){return new e({type:"lazy",getter:t})}function iL(e,t){return new e({type:"promise",innerType:t})}function Es(e,t,o){let n=O(o);return n.abort??(n.abort=!0),new e({type:"custom",check:"custom",fn:t,...n})}function Us(e,t,o){return new e({type:"custom",check:"custom",fn:t,...O(o)})}function Rs(e){let t=h$((o)=>{return o.addIssue=(n)=>{if(typeof n==="string")o.issues.push(pr(n,o.value,t._zod.def));else{let r=n;if(r.fatal)r.continue=!1;r.code??(r.code="custom"),r.input??(r.input=o.value),r.inst??(r.inst=t),r.continue??(r.continue=!t._zod.def.abort),o.issues.push(pr(r))}},e(o.value,o)});return t}function h$(e,t){let o=new te({check:"custom",...O(t)});return o._zod.check=e,o}function Ks(e){let t=new te({check:"describe"});return t._zod.onattach=[(o)=>{let n=ve.get(o)??{};ve.add(o,{...n,description:e})}],t._zod.check=()=>{},t}function Fs(e){let t=new te({check:"meta"});return t._zod.onattach=[(o)=>{let n=ve.get(o)??{};ve.add(o,{...n,...e})}],t._zod.check=()=>{},t}function Gs(e,t){let o=O(t),n=o.truthy??["true","1","yes","on","y","enabled"],r=o.falsy??["false","0","no","off","n","disabled"];if(o.case!=="sensitive")n=n.map((y)=>typeof y==="string"?y.toLowerCase():y),r=r.map((y)=>typeof y==="string"?y.toLowerCase():y);let i=new Set(n),a=new Set(r),c=e.Codec??Ho,u=e.Boolean??Go,s=new(e.String??Xt)({type:"string",error:o.error}),g=new u({type:"boolean",error:o.error}),b=new c({type:"pipe",in:s,out:g,transform:(y,_)=>{let S=y;if(o.case!=="sensitive")S=S.toLowerCase();if(i.has(S))return!0;else if(a.has(S))return!1;else return _.issues.push({code:"invalid_value",expected:"stringbool",values:[...i,...a],input:_.value,inst:b,continue:!1}),{}},reverseTransform:(y,_)=>{if(y===!0)return n[0]||"true";else return r[0]||"false"},error:o.error});return b}function jr(e,t,o,n={}){let r=O(n),i={...O(n),check:"string_format",type:"string",format:t,fn:typeof o==="function"?o:(c)=>o.test(c),...r};if(o instanceof RegExp)i.pattern=o;return new e(i)}var cs;var g$=d(()=>{ei();Yo();ng();x();cs={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6}});function jt(e){let t=e?.target??"draft-2020-12";if(t==="draft-4")t="draft-04";if(t==="draft-7")t="draft-07";return{processors:e.processors??{},metadataRegistry:e?.metadata??ve,target:t,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function Z(e,t,o={path:[],schemaPath:[]}){var n;let r=e._zod.def,i=t.seen.get(e);if(i){if(i.count++,o.schemaPath.includes(e))i.cycle=o.path;return i.schema}let a={schema:{},count:1,cycle:void 0,path:o.path};t.seen.set(e,a);let c=e._zod.toJSONSchema?.();if(c)a.schema=c;else{let s={...o,schemaPath:[...o.schemaPath,e],path:o.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,a.schema,s);else{let b=a.schema,y=t.processors[r.type];if(!y)throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);y(e,t,b,s)}let g=e._zod.parent;if(g){if(!a.ref)a.ref=g;Z(g,t,s),t.seen.get(g).isParent=!0}}let u=t.metadataRegistry.get(e);if(u)Object.assign(a.schema,u);if(t.io==="input"&&De(e))delete a.schema.examples,delete a.schema.default;if(t.io==="input"&&a.schema._prefault)(n=a.schema).default??(n.default=a.schema._prefault);return delete a.schema._prefault,t.seen.get(e).schema}function Et(e,t){let o=e.seen.get(t);if(!o)throw Error("Unprocessed schema. This is a bug in Zod.");let n=new Map;for(let a of e.seen.entries()){let c=e.metadataRegistry.get(a[0])?.id;if(c){let u=n.get(c);if(u&&u!==a[0])throw Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);n.set(c,a[0])}}let r=(a)=>{let c=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){let g=e.external.registry.get(a[0])?.id,b=e.external.uri??((_)=>_);if(g)return{ref:b(g)};let y=a[1].defId??a[1].schema.id??`schema${e.counter++}`;return a[1].defId=y,{defId:y,ref:`${b("__shared")}#/${c}/${y}`}}if(a[1]===o)return{ref:"#"};let h=`${"#"}/${c}/`,s=a[1].schema.id??`__schema${e.counter++}`;return{defId:s,ref:h+s}},i=(a)=>{if(a[1].schema.$ref)return;let c=a[1],{ref:u,defId:h}=r(a);if(c.def={...c.schema},h)c.defId=h;let s=c.schema;for(let g in s)delete s[g];s.$ref=u};if(e.cycles==="throw")for(let a of e.seen.entries()){let c=a[1];if(c.cycle)throw Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let a of e.seen.entries()){let c=a[1];if(t===a[0]){i(a);continue}if(e.external){let h=e.external.registry.get(a[0])?.id;if(t!==a[0]&&h){i(a);continue}}if(e.metadataRegistry.get(a[0])?.id){i(a);continue}if(c.cycle){i(a);continue}if(c.count>1){if(e.reused==="ref"){i(a);continue}}}}function Ut(e,t){let o=e.seen.get(t);if(!o)throw Error("Unprocessed schema. This is a bug in Zod.");let n=(a)=>{let c=e.seen.get(a);if(c.ref===null)return;let u=c.def??c.schema,h={...u},s=c.ref;if(c.ref=null,s){n(s);let b=e.seen.get(s),y=b.schema;if(y.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"))u.allOf=u.allOf??[],u.allOf.push(y);else Object.assign(u,y);if(Object.assign(u,h),a._zod.parent===s)for(let S in u){if(S==="$ref"||S==="allOf")continue;if(!(S in h))delete u[S]}if(y.$ref&&b.def)for(let S in u){if(S==="$ref"||S==="allOf")continue;if(S in b.def&&JSON.stringify(u[S])===JSON.stringify(b.def[S]))delete u[S]}}let g=a._zod.parent;if(g&&g!==s){n(g);let b=e.seen.get(g);if(b?.schema.$ref){if(u.$ref=b.schema.$ref,b.def)for(let y in u){if(y==="$ref"||y==="allOf")continue;if(y in b.def&&JSON.stringify(u[y])===JSON.stringify(b.def[y]))delete u[y]}}}e.override({zodSchema:a,jsonSchema:u,path:c.path??[]})};for(let a of[...e.seen.entries()].reverse())n(a[0]);let r={};if(e.target==="draft-2020-12")r.$schema="https://json-schema.org/draft/2020-12/schema";else if(e.target==="draft-07")r.$schema="http://json-schema.org/draft-07/schema#";else if(e.target==="draft-04")r.$schema="http://json-schema.org/draft-04/schema#";else if(e.target==="openapi-3.0");if(e.external?.uri){let a=e.external.registry.get(t)?.id;if(!a)throw Error("Schema is missing an `id` property");r.$id=e.external.uri(a)}Object.assign(r,o.def??o.schema);let i=e.external?.defs??{};for(let a of e.seen.entries()){let c=a[1];if(c.def&&c.defId)i[c.defId]=c.def}if(e.external);else if(Object.keys(i).length>0)if(e.target==="draft-2020-12")r.$defs=i;else r.definitions=i;try{let a=JSON.parse(JSON.stringify(r));return Object.defineProperty(a,"~standard",{value:{...t["~standard"],jsonSchema:{input:Er(t,"input",e.processors),output:Er(t,"output",e.processors)}},enumerable:!1,writable:!1}),a}catch(a){throw Error("Error converting schema to JSON.")}}function De(e,t){let o=t??{seen:new Set};if(o.seen.has(e))return!1;o.seen.add(e);let n=e._zod.def;if(n.type==="transform")return!0;if(n.type==="array")return De(n.element,o);if(n.type==="set")return De(n.valueType,o);if(n.type==="lazy")return De(n.getter(),o);if(n.type==="promise"||n.type==="optional"||n.type==="nonoptional"||n.type==="nullable"||n.type==="readonly"||n.type==="default"||n.type==="prefault")return De(n.innerType,o);if(n.type==="intersection")return De(n.left,o)||De(n.right,o);if(n.type==="record"||n.type==="map")return De(n.keyType,o)||De(n.valueType,o);if(n.type==="pipe")return De(n.in,o)||De(n.out,o);if(n.type==="object"){for(let r in n.shape)if(De(n.shape[r],o))return!0;return!1}if(n.type==="union"){for(let r of n.options)if(De(r,o))return!0;return!1}if(n.type==="tuple"){for(let r of n.items)if(De(r,o))return!0;if(n.rest&&De(n.rest,o))return!0;return!1}return!1}var Bs=(e,t={})=>(o)=>{let n=jt({...o,processors:t});return Z(e,n),Et(n,e),Ut(n,e)},Er=(e,t,o={})=>(n)=>{let{libraryOptions:r,target:i}=n??{},a=jt({...r??{},target:i,io:t,processors:o});return Z(e,a),Et(a,e),Ut(a,e)};var Qo=d(()=>{Yo()});function Ki(e,t){if("_idmap"in e){let n=e,r=jt({...t,processors:Ei}),i={};for(let u of n._idmap.entries()){let[h,s]=u;Z(s,r)}let a={},c={registry:n,uri:t?.uri,defs:i};r.external=c;for(let u of n._idmap.entries()){let[h,s]=u;Et(r,s),a[h]=Ut(r,s)}if(Object.keys(i).length>0){let u=r.target==="draft-2020-12"?"$defs":"definitions";a.__shared={[u]:i}}return{schemas:a}}let o=jt({...t,processors:Ei});return Z(e,o),Et(o,e),Ut(o,e)}var aL,Hs=(e,t,o,n)=>{let r=o;r.type="string";let{minimum:i,maximum:a,format:c,patterns:u,contentEncoding:h}=e._zod.bag;if(typeof i==="number")r.minLength=i;if(typeof a==="number")r.maxLength=a;if(c){if(r.format=aL[c]??c,r.format==="")delete r.format;if(c==="time")delete r.format}if(h)r.contentEncoding=h;if(u&&u.size>0){let s=[...u];if(s.length===1)r.pattern=s[0].source;else if(s.length>1)r.allOf=[...s.map((g)=>({...t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0"?{type:"string"}:{},pattern:g.source}))]}},Ms=(e,t,o,n)=>{let r=o,{minimum:i,maximum:a,format:c,multipleOf:u,exclusiveMaximum:h,exclusiveMinimum:s}=e._zod.bag;if(typeof c==="string"&&c.includes("int"))r.type="integer";else r.type="number";if(typeof s==="number")if(t.target==="draft-04"||t.target==="openapi-3.0")r.minimum=s,r.exclusiveMinimum=!0;else r.exclusiveMinimum=s;if(typeof i==="number"){if(r.minimum=i,typeof s==="number"&&t.target!=="draft-04")if(s>=i)delete r.minimum;else delete r.exclusiveMinimum}if(typeof h==="number")if(t.target==="draft-04"||t.target==="openapi-3.0")r.maximum=h,r.exclusiveMaximum=!0;else r.exclusiveMaximum=h;if(typeof a==="number"){if(r.maximum=a,typeof h==="number"&&t.target!=="draft-04")if(h<=a)delete r.maximum;else delete r.exclusiveMaximum}if(typeof u==="number")r.multipleOf=u},Js=(e,t,o,n)=>{o.type="boolean"},Vs=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("BigInt cannot be represented in JSON Schema")},qs=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Symbols cannot be represented in JSON Schema")},Ws=(e,t,o,n)=>{if(t.target==="openapi-3.0")o.type="string",o.nullable=!0,o.enum=[null];else o.type="null"},Ys=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Undefined cannot be represented in JSON Schema")},Xs=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Void cannot be represented in JSON Schema")},Zs=(e,t,o,n)=>{o.not={}},Qs=(e,t,o,n)=>{},ed=(e,t,o,n)=>{},td=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Date cannot be represented in JSON Schema")},rd=(e,t,o,n)=>{let r=e._zod.def,i=No(r.entries);if(i.every((a)=>typeof a==="number"))o.type="number";if(i.every((a)=>typeof a==="string"))o.type="string";o.enum=i},od=(e,t,o,n)=>{let r=e._zod.def,i=[];for(let a of r.values)if(a===void 0){if(t.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a==="bigint")if(t.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else i.push(Number(a));else i.push(a);if(i.length===0);else if(i.length===1){let a=i[0];if(o.type=a===null?"null":typeof a,t.target==="draft-04"||t.target==="openapi-3.0")o.enum=[a];else o.const=a}else{if(i.every((a)=>typeof a==="number"))o.type="number";if(i.every((a)=>typeof a==="string"))o.type="string";if(i.every((a)=>typeof a==="boolean"))o.type="boolean";if(i.every((a)=>a===null))o.type="null";o.enum=i}},nd=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("NaN cannot be represented in JSON Schema")},id=(e,t,o,n)=>{let r=o,i=e._zod.pattern;if(!i)throw Error("Pattern not found in template literal");r.type="string",r.pattern=i.source},ad=(e,t,o,n)=>{let r=o,i={type:"string",format:"binary",contentEncoding:"binary"},{minimum:a,maximum:c,mime:u}=e._zod.bag;if(a!==void 0)i.minLength=a;if(c!==void 0)i.maxLength=c;if(u)if(u.length===1)i.contentMediaType=u[0],Object.assign(r,i);else Object.assign(r,i),r.anyOf=u.map((h)=>({contentMediaType:h}));else Object.assign(r,i)},cd=(e,t,o,n)=>{o.type="boolean"},ld=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")},ud=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Function types cannot be represented in JSON Schema")},hd=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")},gd=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Map cannot be represented in JSON Schema")},sd=(e,t,o,n)=>{if(t.unrepresentable==="throw")throw Error("Set cannot be represented in JSON Schema")},dd=(e,t,o,n)=>{let r=o,i=e._zod.def,{minimum:a,maximum:c}=e._zod.bag;if(typeof a==="number")r.minItems=a;if(typeof c==="number")r.maxItems=c;r.type="array",r.items=Z(i.element,t,{...n,path:[...n.path,"items"]})},bd=(e,t,o,n)=>{let r=o,i=e._zod.def;r.type="object",r.properties={};let a=i.shape;for(let h in a)r.properties[h]=Z(a[h],t,{...n,path:[...n.path,"properties",h]});let c=new Set(Object.keys(a)),u=new Set([...c].filter((h)=>{let s=i.shape[h]._zod;if(t.io==="input")return s.optin===void 0;else return s.optout===void 0}));if(u.size>0)r.required=Array.from(u);if(i.catchall?._zod.def.type==="never")r.additionalProperties=!1;else if(!i.catchall){if(t.io==="output")r.additionalProperties=!1}else if(i.catchall)r.additionalProperties=Z(i.catchall,t,{...n,path:[...n.path,"additionalProperties"]})},Ui=(e,t,o,n)=>{let r=e._zod.def,i=r.inclusive===!1,a=r.options.map((c,u)=>Z(c,t,{...n,path:[...n.path,i?"oneOf":"anyOf",u]}));if(i)o.oneOf=a;else o.anyOf=a},yd=(e,t,o,n)=>{let r=e._zod.def,i=Z(r.left,t,{...n,path:[...n.path,"allOf",0]}),a=Z(r.right,t,{...n,path:[...n.path,"allOf",1]}),c=(h)=>("allOf"in h)&&Object.keys(h).length===1,u=[...c(i)?i.allOf:[i],...c(a)?a.allOf:[a]];o.allOf=u},md=(e,t,o,n)=>{let r=o,i=e._zod.def;r.type="array";let a=t.target==="draft-2020-12"?"prefixItems":"items",c=t.target==="draft-2020-12"?"items":t.target==="openapi-3.0"?"items":"additionalItems",u=i.items.map((b,y)=>Z(b,t,{...n,path:[...n.path,a,y]})),h=i.rest?Z(i.rest,t,{...n,path:[...n.path,c,...t.target==="openapi-3.0"?[i.items.length]:[]]}):null;if(t.target==="draft-2020-12"){if(r.prefixItems=u,h)r.items=h}else if(t.target==="openapi-3.0"){if(r.items={anyOf:u},h)r.items.anyOf.push(h);if(r.minItems=u.length,!h)r.maxItems=u.length}else if(r.items=u,h)r.additionalItems=h;let{minimum:s,maximum:g}=e._zod.bag;if(typeof s==="number")r.minItems=s;if(typeof g==="number")r.maxItems=g},pd=(e,t,o,n)=>{let r=o,i=e._zod.def;r.type="object";let a=i.keyType,u=a._zod.bag?.patterns;if(i.mode==="loose"&&u&&u.size>0){let s=Z(i.valueType,t,{...n,path:[...n.path,"patternProperties","*"]});r.patternProperties={};for(let g of u)r.patternProperties[g.source]=s}else{if(t.target==="draft-07"||t.target==="draft-2020-12")r.propertyNames=Z(i.keyType,t,{...n,path:[...n.path,"propertyNames"]});r.additionalProperties=Z(i.valueType,t,{...n,path:[...n.path,"additionalProperties"]})}let h=a._zod.values;if(h){let s=[...h].filter((g)=>typeof g==="string"||typeof g==="number");if(s.length>0)r.required=s}},vd=(e,t,o,n)=>{let r=e._zod.def,i=Z(r.innerType,t,n),a=t.seen.get(e);if(t.target==="openapi-3.0")a.ref=r.innerType,o.nullable=!0;else o.anyOf=[i,{type:"null"}]},Id=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType},fd=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType,o.default=JSON.parse(JSON.stringify(r.defaultValue))},kd=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);if(i.ref=r.innerType,t.io==="input")o._prefault=JSON.parse(JSON.stringify(r.defaultValue))},$d=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}o.default=a},wd=(e,t,o,n)=>{let r=e._zod.def,i=t.io==="input"?r.in._zod.def.type==="transform"?r.out:r.in:r.out;Z(i,t,n);let a=t.seen.get(e);a.ref=i},_d=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType,o.readOnly=!0},Od=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType},Ri=(e,t,o,n)=>{let r=e._zod.def;Z(r.innerType,t,n);let i=t.seen.get(e);i.ref=r.innerType},Sd=(e,t,o,n)=>{let r=e._zod.innerType;Z(r,t,n);let i=t.seen.get(e);i.ref=r},Ei;var en=d(()=>{Qo();x();aL={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Ei={string:Hs,number:Ms,boolean:Js,bigint:Vs,symbol:qs,null:Ws,undefined:Ys,void:Xs,never:Zs,any:Qs,unknown:ed,date:td,enum:rd,literal:od,nan:nd,template_literal:id,file:ad,success:cd,custom:ld,function:ud,transform:hd,map:gd,set:sd,array:dd,object:bd,union:Ui,intersection:yd,tuple:md,record:pd,nullable:vd,nonoptional:Id,default:fd,prefault:kd,catch:$d,pipe:wd,readonly:_d,promise:Od,optional:Ri,lazy:Sd}});class Td{get metadataRegistry(){return this.ctx.metadataRegistry}get target(){return this.ctx.target}get unrepresentable(){return this.ctx.unrepresentable}get override(){return this.ctx.override}get io(){return this.ctx.io}get counter(){return this.ctx.counter}set counter(e){this.ctx.counter=e}get seen(){return this.ctx.seen}constructor(e){let t=e?.target??"draft-2020-12";if(t==="draft-4")t="draft-04";if(t==="draft-7")t="draft-07";this.ctx=jt({processors:Ei,target:t,...e?.metadata&&{metadata:e.metadata},...e?.unrepresentable&&{unrepresentable:e.unrepresentable},...e?.override&&{override:e.override},...e?.io&&{io:e.io}})}process(e,t={path:[],schemaPath:[]}){return Z(e,this.ctx,t)}emit(e,t){if(t){if(t.cycles)this.ctx.cycles=t.cycles;if(t.reused)this.ctx.reused=t.reused;if(t.external)this.ctx.external=t.external}Et(this.ctx,e);let o=Ut(this.ctx,e),{"~standard":n,...r}=o;return r}}var s$=d(()=>{en();Qo()});var d$={};var b$=()=>{};var It={};Qe(It,{version:()=>Ju,util:()=>w,treeifyError:()=>ql,toJSONSchema:()=>Ki,toDotPath:()=>Hf,safeParseAsync:()=>Zl,safeParse:()=>Xl,safeEncodeAsync:()=>dD,safeEncode:()=>gD,safeDecodeAsync:()=>bD,safeDecode:()=>sD,registry:()=>gi,regexes:()=>Je,process:()=>Z,prettifyError:()=>Wl,parseAsync:()=>Fn,parse:()=>Kn,meta:()=>Fs,locales:()=>Wo,isValidJWT:()=>uk,isValidBase64URL:()=>lk,isValidBase64:()=>yh,initializeContext:()=>jt,globalRegistry:()=>ve,globalConfig:()=>Ao,formatError:()=>Uo,flattenError:()=>Eo,finalize:()=>Ut,extractDefs:()=>Et,encodeAsync:()=>uD,encode:()=>cD,describe:()=>Ks,decodeAsync:()=>hD,decode:()=>lD,createToJSONSchemaMethod:()=>Bs,createStandardJSONSchemaMethod:()=>Er,config:()=>ue,clone:()=>Pe,_xor:()=>UN,_xid:()=>$i,_void:()=>Ns,_uuidv7:()=>mi,_uuidv6:()=>yi,_uuidv4:()=>bi,_uuid:()=>di,_url:()=>Zo,_uppercase:()=>Sr,_unknown:()=>As,_union:()=>EN,_undefined:()=>Ss,_ulid:()=>ki,_uint64:()=>_s,_uint32:()=>vs,_tuple:()=>FN,_trim:()=>Lr,_transform:()=>qN,_toUpperCase:()=>xr,_toLowerCase:()=>Cr,_templateLiteral:()=>oL,_symbol:()=>Os,_superRefine:()=>Rs,_success:()=>QN,_stringbool:()=>Gs,_stringFormat:()=>jr,_string:()=>ns,_startsWith:()=>Pr,_slugify:()=>zr,_size:()=>Zt,_set:()=>HN,_safeParseAsync:()=>kr,_safeParse:()=>fr,_safeEncodeAsync:()=>qn,_safeEncode:()=>Jn,_safeDecodeAsync:()=>Wn,_safeDecode:()=>Vn,_regex:()=>_r,_refine:()=>Us,_record:()=>GN,_readonly:()=>rL,_property:()=>ji,_promise:()=>iL,_positive:()=>Li,_pipe:()=>tL,_parseAsync:()=>Ir,_parse:()=>vr,_overwrite:()=>Xe,_optional:()=>WN,_number:()=>ss,_nullable:()=>YN,_null:()=>Ts,_normalize:()=>Nr,_nonpositive:()=>xi,_nonoptional:()=>ZN,_nonnegative:()=>zi,_never:()=>Ds,_negative:()=>Ci,_nativeEnum:()=>JN,_nanoid:()=>vi,_nan:()=>xs,_multipleOf:()=>xt,_minSize:()=>ct,_minLength:()=>vt,_min:()=>Ae,_mime:()=>Dr,_maxSize:()=>zt,_maxLength:()=>Qt,_max:()=>Ee,_map:()=>BN,_mac:()=>as,_lte:()=>Ee,_lt:()=>it,_lowercase:()=>Or,_literal:()=>VN,_length:()=>er,_lazy:()=>nL,_ksuid:()=>wi,_jwt:()=>Ni,_isoTime:()=>hs,_isoDuration:()=>gs,_isoDateTime:()=>ls,_isoDate:()=>us,_ipv6:()=>Oi,_ipv4:()=>_i,_intersection:()=>KN,_int64:()=>ws,_int32:()=>ps,_int:()=>bs,_includes:()=>Tr,_guid:()=>Xo,_gte:()=>Ae,_gt:()=>at,_float64:()=>ms,_float32:()=>ys,_file:()=>js,_enum:()=>MN,_endsWith:()=>Ar,_encodeAsync:()=>Hn,_encode:()=>Gn,_emoji:()=>pi,_email:()=>si,_e164:()=>Di,_discriminatedUnion:()=>RN,_default:()=>XN,_decodeAsync:()=>Mn,_decode:()=>Bn,_date:()=>Ls,_custom:()=>Es,_cuid2:()=>fi,_cuid:()=>Ii,_coercedString:()=>is,_coercedNumber:()=>ds,_coercedDate:()=>Cs,_coercedBoolean:()=>fs,_coercedBigint:()=>$s,_cidrv6:()=>Ti,_cidrv4:()=>Si,_check:()=>h$,_catch:()=>eL,_boolean:()=>Is,_bigint:()=>ks,_base64url:()=>Ai,_base64:()=>Pi,_array:()=>zs,_any:()=>Ps,TimePrecision:()=>cs,NEVER:()=>El,JSONSchemaGenerator:()=>Td,JSONSchema:()=>d$,Doc:()=>ti,$output:()=>ts,$input:()=>rs,$constructor:()=>m,$brand:()=>Ul,$ZodXor:()=>Ch,$ZodXID:()=>nh,$ZodVoid:()=>Ah,$ZodUnknown:()=>Th,$ZodUnion:()=>Bo,$ZodUndefined:()=>_h,$ZodUUID:()=>Yu,$ZodURL:()=>Zu,$ZodULID:()=>oh,$ZodType:()=>E,$ZodTuple:()=>ui,$ZodTransform:()=>Gh,$ZodTemplateLiteral:()=>Qh,$ZodSymbol:()=>wh,$ZodSuccess:()=>qh,$ZodStringFormat:()=>Q,$ZodString:()=>Xt,$ZodSet:()=>Uh,$ZodRegistry:()=>os,$ZodRecord:()=>jh,$ZodRealError:()=>xe,$ZodReadonly:()=>Zh,$ZodPromise:()=>tg,$ZodPrefault:()=>Jh,$ZodPipe:()=>Xh,$ZodOptional:()=>hi,$ZodObjectJIT:()=>Lh,$ZodObject:()=>sk,$ZodNumberFormat:()=>kh,$ZodNumber:()=>ci,$ZodNullable:()=>Hh,$ZodNull:()=>Oh,$ZodNonOptional:()=>Vh,$ZodNever:()=>Ph,$ZodNanoID:()=>eh,$ZodNaN:()=>Yh,$ZodMap:()=>Eh,$ZodMAC:()=>sh,$ZodLiteral:()=>Kh,$ZodLazy:()=>rg,$ZodKSUID:()=>ih,$ZodJWT:()=>Ih,$ZodIntersection:()=>zh,$ZodISOTime:()=>lh,$ZodISODuration:()=>uh,$ZodISODateTime:()=>ah,$ZodISODate:()=>ch,$ZodIPv6:()=>gh,$ZodIPv4:()=>hh,$ZodGUID:()=>Wu,$ZodFunction:()=>eg,$ZodFile:()=>Fh,$ZodExactOptional:()=>Bh,$ZodError:()=>jo,$ZodEnum:()=>Rh,$ZodEncodeError:()=>qt,$ZodEmoji:()=>Qu,$ZodEmail:()=>Xu,$ZodE164:()=>vh,$ZodDiscriminatedUnion:()=>xh,$ZodDefault:()=>Mh,$ZodDate:()=>Dh,$ZodCustomStringFormat:()=>fh,$ZodCustom:()=>og,$ZodCodec:()=>Ho,$ZodCheckUpperCase:()=>Ru,$ZodCheckStringFormat:()=>$r,$ZodCheckStartsWith:()=>Fu,$ZodCheckSizeEquals:()=>Cu,$ZodCheckRegex:()=>Eu,$ZodCheckProperty:()=>Bu,$ZodCheckOverwrite:()=>Mu,$ZodCheckNumberFormat:()=>Au,$ZodCheckMultipleOf:()=>Pu,$ZodCheckMinSize:()=>Lu,$ZodCheckMinLength:()=>zu,$ZodCheckMimeType:()=>Hu,$ZodCheckMaxSize:()=>Nu,$ZodCheckMaxLength:()=>xu,$ZodCheckLowerCase:()=>Uu,$ZodCheckLessThan:()=>Zn,$ZodCheckLengthEquals:()=>ju,$ZodCheckIncludes:()=>Ku,$ZodCheckGreaterThan:()=>Qn,$ZodCheckEndsWith:()=>Gu,$ZodCheckBigIntFormat:()=>Du,$ZodCheck:()=>te,$ZodCatch:()=>Wh,$ZodCUID2:()=>rh,$ZodCUID:()=>th,$ZodCIDRv6:()=>bh,$ZodCIDRv4:()=>dh,$ZodBoolean:()=>Go,$ZodBigIntFormat:()=>$h,$ZodBigInt:()=>li,$ZodBase64URL:()=>ph,$ZodBase64:()=>mh,$ZodAsyncError:()=>nt,$ZodArray:()=>Nh,$ZodAny:()=>Sh});var Ue=d(()=>{x();Xn();es();en();s$();b$();br();Ql();Yl();ng();ei();Vu();Yo();g$();Qo()});var Fi={};Qe(Fi,{uppercase:()=>Sr,trim:()=>Lr,toUpperCase:()=>xr,toLowerCase:()=>Cr,startsWith:()=>Pr,slugify:()=>zr,size:()=>Zt,regex:()=>_r,property:()=>ji,positive:()=>Li,overwrite:()=>Xe,normalize:()=>Nr,nonpositive:()=>xi,nonnegative:()=>zi,negative:()=>Ci,multipleOf:()=>xt,minSize:()=>ct,minLength:()=>vt,mime:()=>Dr,maxSize:()=>zt,maxLength:()=>Qt,lte:()=>Ee,lt:()=>it,lowercase:()=>Or,length:()=>er,includes:()=>Tr,gte:()=>Ae,gt:()=>at,endsWith:()=>Ar});var Gi=d(()=>{Ue()});var Ur={};Qe(Ur,{time:()=>Dd,duration:()=>Nd,datetime:()=>Pd,date:()=>Ad,ZodISOTime:()=>Mi,ZodISODuration:()=>Ji,ZodISODateTime:()=>Bi,ZodISODate:()=>Hi});function Pd(e){return ls(Bi,e)}function Ad(e){return us(Hi,e)}function Dd(e){return hs(Mi,e)}function Nd(e){return gs(Ji,e)}var Bi,Hi,Mi,Ji;var tn=d(()=>{Ue();on();Bi=m("ZodISODateTime",(e,t)=>{ah.init(e,t),ee.init(e,t)});Hi=m("ZodISODate",(e,t)=>{ch.init(e,t),ee.init(e,t)});Mi=m("ZodISOTime",(e,t)=>{lh.init(e,t),ee.init(e,t)});Ji=m("ZodISODuration",(e,t)=>{uh.init(e,t),ee.init(e,t)})});var y$=(e,t)=>{jo.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:(o)=>Uo(e,o)},flatten:{value:(o)=>Eo(e,o)},addIssue:{value:(o)=>{e.issues.push(o),e.message=JSON.stringify(e.issues,yr,2)}},addIssues:{value:(o)=>{e.issues.push(...o),e.message=JSON.stringify(e.issues,yr,2)}},isEmpty:{get(){return e.issues.length===0}}})},lL,ze;var Ld=d(()=>{Ue();Ue();x();lL=m("ZodError",y$),ze=m("ZodError",y$,{Parent:Error})});var Cd,xd,zd,jd,Ed,Ud,Rd,Kd,Fd,Gd,Bd,Hd;var Md=d(()=>{Ue();Ld();Cd=vr(ze),xd=Ir(ze),zd=fr(ze),jd=kr(ze),Ed=Gn(ze),Ud=Bn(ze),Rd=Hn(ze),Kd=Mn(ze),Fd=Jn(ze),Gd=Vn(ze),Bd=qn(ze),Hd=Wn(ze)});var rn={};Qe(rn,{xor:()=>aw,xid:()=>A$,void:()=>ew,uuidv7:()=>k$,uuidv6:()=>f$,uuidv4:()=>I$,uuid:()=>v$,url:()=>$$,unknown:()=>tr,union:()=>ba,undefined:()=>Z$,ulid:()=>P$,uint64:()=>Y$,uint32:()=>V$,tuple:()=>ub,transform:()=>ma,templateLiteral:()=>Iw,symbol:()=>X$,superRefine:()=>jb,success:()=>mw,stringbool:()=>Tw,stringFormat:()=>K$,string:()=>Vi,strictObject:()=>nw,set:()=>gw,refine:()=>zb,record:()=>hb,readonly:()=>Ab,promise:()=>fw,preprocess:()=>Aw,prefault:()=>$b,pipe:()=>ln,partialRecord:()=>lw,optional:()=>an,object:()=>ow,number:()=>Vd,nullish:()=>yw,nullable:()=>cn,null:()=>Zd,nonoptional:()=>wb,never:()=>da,nativeEnum:()=>sw,nanoid:()=>O$,nan:()=>pw,meta:()=>Ow,map:()=>hw,mac:()=>L$,looseRecord:()=>uw,looseObject:()=>iw,literal:()=>dw,lazy:()=>Lb,ksuid:()=>D$,keyof:()=>rw,jwt:()=>R$,json:()=>Pw,ipv6:()=>C$,ipv4:()=>N$,intersection:()=>cb,int64:()=>W$,int32:()=>J$,int:()=>qi,instanceof:()=>Sw,httpUrl:()=>w$,hostname:()=>F$,hex:()=>G$,hash:()=>B$,guid:()=>p$,function:()=>kw,float64:()=>M$,float32:()=>H$,file:()=>bw,exactOptional:()=>pb,enum:()=>ya,emoji:()=>_$,email:()=>m$,e164:()=>U$,discriminatedUnion:()=>cw,describe:()=>_w,date:()=>tw,custom:()=>ww,cuid2:()=>T$,cuid:()=>S$,codec:()=>vw,cidrv6:()=>z$,cidrv4:()=>x$,check:()=>$w,catch:()=>Sb,boolean:()=>qd,bigint:()=>q$,base64url:()=>E$,base64:()=>j$,array:()=>gn,any:()=>Q$,_function:()=>kw,_default:()=>fb,_ZodString:()=>Wi,ZodXor:()=>nb,ZodXID:()=>ra,ZodVoid:()=>rb,ZodUnknown:()=>eb,ZodUnion:()=>dn,ZodUndefined:()=>Yd,ZodUUID:()=>lt,ZodURL:()=>un,ZodULID:()=>ta,ZodType:()=>K,ZodTuple:()=>lb,ZodTransform:()=>yb,ZodTemplateLiteral:()=>Db,ZodSymbol:()=>Wd,ZodSuccess:()=>_b,ZodStringFormat:()=>ee,ZodString:()=>Kr,ZodSet:()=>sb,ZodRecord:()=>bn,ZodReadonly:()=>Pb,ZodPromise:()=>Cb,ZodPrefault:()=>kb,ZodPipe:()=>Ia,ZodOptional:()=>pa,ZodObject:()=>sn,ZodNumberFormat:()=>rr,ZodNumber:()=>Gr,ZodNullable:()=>vb,ZodNull:()=>Xd,ZodNonOptional:()=>va,ZodNever:()=>tb,ZodNanoID:()=>Zi,ZodNaN:()=>Tb,ZodMap:()=>gb,ZodMAC:()=>Jd,ZodLiteral:()=>db,ZodLazy:()=>Nb,ZodKSUID:()=>oa,ZodJWT:()=>ga,ZodIntersection:()=>ab,ZodIPv6:()=>ia,ZodIPv4:()=>na,ZodGUID:()=>nn,ZodFunction:()=>xb,ZodFile:()=>bb,ZodExactOptional:()=>mb,ZodEnum:()=>Rr,ZodEmoji:()=>Xi,ZodEmail:()=>Yi,ZodE164:()=>ha,ZodDiscriminatedUnion:()=>ib,ZodDefault:()=>Ib,ZodDate:()=>hn,ZodCustomStringFormat:()=>Fr,ZodCustom:()=>yn,ZodCodec:()=>fa,ZodCatch:()=>Ob,ZodCUID2:()=>ea,ZodCUID:()=>Qi,ZodCIDRv6:()=>ca,ZodCIDRv4:()=>aa,ZodBoolean:()=>Br,ZodBigIntFormat:()=>sa,ZodBigInt:()=>Hr,ZodBase64URL:()=>ua,ZodBase64:()=>la,ZodArray:()=>ob,ZodAny:()=>Qd});function Vi(e){return ns(Kr,e)}function m$(e){return si(Yi,e)}function p$(e){return Xo(nn,e)}function v$(e){return di(lt,e)}function I$(e){return bi(lt,e)}function f$(e){return yi(lt,e)}function k$(e){return mi(lt,e)}function $$(e){return Zo(un,e)}function w$(e){return Zo(un,{protocol:/^https?$/,hostname:Je.domain,...w.normalizeParams(e)})}function _$(e){return pi(Xi,e)}function O$(e){return vi(Zi,e)}function S$(e){return Ii(Qi,e)}function T$(e){return fi(ea,e)}function P$(e){return ki(ta,e)}function A$(e){return $i(ra,e)}function D$(e){return wi(oa,e)}function N$(e){return _i(na,e)}function L$(e){return as(Jd,e)}function C$(e){return Oi(ia,e)}function x$(e){return Si(aa,e)}function z$(e){return Ti(ca,e)}function j$(e){return Pi(la,e)}function E$(e){return Ai(ua,e)}function U$(e){return Di(ha,e)}function R$(e){return Ni(ga,e)}function K$(e,t,o={}){return jr(Fr,e,t,o)}function F$(e){return jr(Fr,"hostname",Je.hostname,e)}function G$(e){return jr(Fr,"hex",Je.hex,e)}function B$(e,t){let o=t?.enc??"hex",n=`${e}_${o}`,r=Je[n];if(!r)throw Error(`Unrecognized hash format: ${n}`);return jr(Fr,n,r,t)}function Vd(e){return ss(Gr,e)}function qi(e){return bs(rr,e)}function H$(e){return ys(rr,e)}function M$(e){return ms(rr,e)}function J$(e){return ps(rr,e)}function V$(e){return vs(rr,e)}function qd(e){return Is(Br,e)}function q$(e){return ks(Hr,e)}function W$(e){return ws(sa,e)}function Y$(e){return _s(sa,e)}function X$(e){return Os(Wd,e)}function Z$(e){return Ss(Yd,e)}function Zd(e){return Ts(Xd,e)}function Q$(){return Ps(Qd)}function tr(){return As(eb)}function da(e){return Ds(tb,e)}function ew(e){return Ns(rb,e)}function tw(e){return Ls(hn,e)}function gn(e,t){return zs(ob,e,t)}function rw(e){let t=e._zod.def.shape;return ya(Object.keys(t))}function ow(e,t){let o={type:"object",shape:e??{},...w.normalizeParams(t)};return new sn(o)}function nw(e,t){return new sn({type:"object",shape:e,catchall:da(),...w.normalizeParams(t)})}function iw(e,t){return new sn({type:"object",shape:e,catchall:tr(),...w.normalizeParams(t)})}function ba(e,t){return new dn({type:"union",options:e,...w.normalizeParams(t)})}function aw(e,t){return new nb({type:"union",options:e,inclusive:!1,...w.normalizeParams(t)})}function cw(e,t,o){return new ib({type:"union",options:t,discriminator:e,...w.normalizeParams(o)})}function cb(e,t){return new ab({type:"intersection",left:e,right:t})}function ub(e,t,o){let n=t instanceof E,r=n?o:t;return new lb({type:"tuple",items:e,rest:n?t:null,...w.normalizeParams(r)})}function hb(e,t,o){return new bn({type:"record",keyType:e,valueType:t,...w.normalizeParams(o)})}function lw(e,t,o){let n=Pe(e);return n._zod.values=void 0,new bn({type:"record",keyType:n,valueType:t,...w.normalizeParams(o)})}function uw(e,t,o){return new bn({type:"record",keyType:e,valueType:t,mode:"loose",...w.normalizeParams(o)})}function hw(e,t,o){return new gb({type:"map",keyType:e,valueType:t,...w.normalizeParams(o)})}function gw(e,t){return new sb({type:"set",valueType:e,...w.normalizeParams(t)})}function ya(e,t){let o=Array.isArray(e)?Object.fromEntries(e.map((n)=>[n,n])):e;return new Rr({type:"enum",entries:o,...w.normalizeParams(t)})}function sw(e,t){return new Rr({type:"enum",entries:e,...w.normalizeParams(t)})}function dw(e,t){return new db({type:"literal",values:Array.isArray(e)?e:[e],...w.normalizeParams(t)})}function bw(e){return js(bb,e)}function ma(e){return new yb({type:"transform",transform:e})}function an(e){return new pa({type:"optional",innerType:e})}function pb(e){return new mb({type:"optional",innerType:e})}function cn(e){return new vb({type:"nullable",innerType:e})}function yw(e){return an(cn(e))}function fb(e,t){return new Ib({type:"default",innerType:e,get defaultValue(){return typeof t==="function"?t():w.shallowClone(t)}})}function $b(e,t){return new kb({type:"prefault",innerType:e,get defaultValue(){return typeof t==="function"?t():w.shallowClone(t)}})}function wb(e,t){return new va({type:"nonoptional",innerType:e,...w.normalizeParams(t)})}function mw(e){return new _b({type:"success",innerType:e})}function Sb(e,t){return new Ob({type:"catch",innerType:e,catchValue:typeof t==="function"?t:()=>t})}function pw(e){return xs(Tb,e)}function ln(e,t){return new Ia({type:"pipe",in:e,out:t})}function vw(e,t,o){return new fa({type:"pipe",in:e,out:t,transform:o.decode,reverseTransform:o.encode})}function Ab(e){return new Pb({type:"readonly",innerType:e})}function Iw(e,t){return new Db({type:"template_literal",parts:e,...w.normalizeParams(t)})}function Lb(e){return new Nb({type:"lazy",getter:e})}function fw(e){return new Cb({type:"promise",innerType:e})}function kw(e){return new xb({type:"function",input:Array.isArray(e?.input)?ub(e?.input):e?.input??gn(tr()),output:e?.output??tr()})}function $w(e){let t=new te({check:"custom"});return t._zod.check=e,t}function ww(e,t){return Es(yn,e??(()=>!0),t)}function zb(e,t={}){return Us(yn,e,t)}function jb(e){return Rs(e)}function Sw(e,t={}){let o=new yn({type:"custom",check:"custom",fn:(n)=>n instanceof e,abort:!0,...w.normalizeParams(t)});return o._zod.bag.Class=e,o._zod.check=(n)=>{if(!(n.value instanceof e))n.issues.push({code:"invalid_type",expected:e.name,input:n.value,inst:o,path:[...o._zod.def.path??[]]})},o}function Pw(e){let t=Lb(()=>{return ba([Vi(e),Vd(),qd(),Zd(),gn(t),hb(Vi(),t)])});return t}function Aw(e,t){return ln(ma(e),t)}var K,Wi,Kr,ee,Yi,nn,lt,un,Xi,Zi,Qi,ea,ta,ra,oa,na,Jd,ia,aa,ca,la,ua,ha,ga,Fr,Gr,rr,Br,Hr,sa,Wd,Yd,Xd,Qd,eb,tb,rb,hn,ob,sn,dn,nb,ib,ab,lb,bn,gb,sb,Rr,db,bb,yb,pa,mb,vb,Ib,kb,va,_b,Ob,Tb,Ia,fa,Pb,Db,Nb,Cb,xb,yn,_w,Ow,Tw=(...e)=>Gs({Codec:fa,Boolean:Br,String:Kr},...e);var on=d(()=>{Ue();Ue();en();Qo();Gi();tn();Md();K=m("ZodType",(e,t)=>{return E.init(e,t),Object.assign(e["~standard"],{jsonSchema:{input:Er(e,"input"),output:Er(e,"output")}}),e.toJSONSchema=Bs(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.check=(...o)=>{return e.clone(w.mergeDefs(t,{checks:[...t.checks??[],...o.map((n)=>typeof n==="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},e.with=e.check,e.clone=(o,n)=>Pe(e,o,n),e.brand=()=>e,e.register=(o,n)=>{return o.add(e,n),e},e.parse=(o,n)=>Cd(e,o,n,{callee:e.parse}),e.safeParse=(o,n)=>zd(e,o,n),e.parseAsync=async(o,n)=>xd(e,o,n,{callee:e.parseAsync}),e.safeParseAsync=async(o,n)=>jd(e,o,n),e.spa=e.safeParseAsync,e.encode=(o,n)=>Ed(e,o,n),e.decode=(o,n)=>Ud(e,o,n),e.encodeAsync=async(o,n)=>Rd(e,o,n),e.decodeAsync=async(o,n)=>Kd(e,o,n),e.safeEncode=(o,n)=>Fd(e,o,n),e.safeDecode=(o,n)=>Gd(e,o,n),e.safeEncodeAsync=async(o,n)=>Bd(e,o,n),e.safeDecodeAsync=async(o,n)=>Hd(e,o,n),e.refine=(o,n)=>e.check(zb(o,n)),e.superRefine=(o)=>e.check(jb(o)),e.overwrite=(o)=>e.check(Xe(o)),e.optional=()=>an(e),e.exactOptional=()=>pb(e),e.nullable=()=>cn(e),e.nullish=()=>an(cn(e)),e.nonoptional=(o)=>wb(e,o),e.array=()=>gn(e),e.or=(o)=>ba([e,o]),e.and=(o)=>cb(e,o),e.transform=(o)=>ln(e,ma(o)),e.default=(o)=>fb(e,o),e.prefault=(o)=>$b(e,o),e.catch=(o)=>Sb(e,o),e.pipe=(o)=>ln(e,o),e.readonly=()=>Ab(e),e.describe=(o)=>{let n=e.clone();return ve.add(n,{description:o}),n},Object.defineProperty(e,"description",{get(){return ve.get(e)?.description},configurable:!0}),e.meta=(...o)=>{if(o.length===0)return ve.get(e);let n=e.clone();return ve.add(n,o[0]),n},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e.apply=(o)=>o(e),e}),Wi=m("_ZodString",(e,t)=>{Xt.init(e,t),K.init(e,t),e._zod.processJSONSchema=(n,r,i)=>Hs(e,n,r,i);let o=e._zod.bag;e.format=o.format??null,e.minLength=o.minimum??null,e.maxLength=o.maximum??null,e.regex=(...n)=>e.check(_r(...n)),e.includes=(...n)=>e.check(Tr(...n)),e.startsWith=(...n)=>e.check(Pr(...n)),e.endsWith=(...n)=>e.check(Ar(...n)),e.min=(...n)=>e.check(vt(...n)),e.max=(...n)=>e.check(Qt(...n)),e.length=(...n)=>e.check(er(...n)),e.nonempty=(...n)=>e.check(vt(1,...n)),e.lowercase=(n)=>e.check(Or(n)),e.uppercase=(n)=>e.check(Sr(n)),e.trim=()=>e.check(Lr()),e.normalize=(...n)=>e.check(Nr(...n)),e.toLowerCase=()=>e.check(Cr()),e.toUpperCase=()=>e.check(xr()),e.slugify=()=>e.check(zr())}),Kr=m("ZodString",(e,t)=>{Xt.init(e,t),Wi.init(e,t),e.email=(o)=>e.check(si(Yi,o)),e.url=(o)=>e.check(Zo(un,o)),e.jwt=(o)=>e.check(Ni(ga,o)),e.emoji=(o)=>e.check(pi(Xi,o)),e.guid=(o)=>e.check(Xo(nn,o)),e.uuid=(o)=>e.check(di(lt,o)),e.uuidv4=(o)=>e.check(bi(lt,o)),e.uuidv6=(o)=>e.check(yi(lt,o)),e.uuidv7=(o)=>e.check(mi(lt,o)),e.nanoid=(o)=>e.check(vi(Zi,o)),e.guid=(o)=>e.check(Xo(nn,o)),e.cuid=(o)=>e.check(Ii(Qi,o)),e.cuid2=(o)=>e.check(fi(ea,o)),e.ulid=(o)=>e.check(ki(ta,o)),e.base64=(o)=>e.check(Pi(la,o)),e.base64url=(o)=>e.check(Ai(ua,o)),e.xid=(o)=>e.check($i(ra,o)),e.ksuid=(o)=>e.check(wi(oa,o)),e.ipv4=(o)=>e.check(_i(na,o)),e.ipv6=(o)=>e.check(Oi(ia,o)),e.cidrv4=(o)=>e.check(Si(aa,o)),e.cidrv6=(o)=>e.check(Ti(ca,o)),e.e164=(o)=>e.check(Di(ha,o)),e.datetime=(o)=>e.check(Pd(o)),e.date=(o)=>e.check(Ad(o)),e.time=(o)=>e.check(Dd(o)),e.duration=(o)=>e.check(Nd(o))});ee=m("ZodStringFormat",(e,t)=>{Q.init(e,t),Wi.init(e,t)}),Yi=m("ZodEmail",(e,t)=>{Xu.init(e,t),ee.init(e,t)});nn=m("ZodGUID",(e,t)=>{Wu.init(e,t),ee.init(e,t)});lt=m("ZodUUID",(e,t)=>{Yu.init(e,t),ee.init(e,t)});un=m("ZodURL",(e,t)=>{Zu.init(e,t),ee.init(e,t)});Xi=m("ZodEmoji",(e,t)=>{Qu.init(e,t),ee.init(e,t)});Zi=m("ZodNanoID",(e,t)=>{eh.init(e,t),ee.init(e,t)});Qi=m("ZodCUID",(e,t)=>{th.init(e,t),ee.init(e,t)});ea=m("ZodCUID2",(e,t)=>{rh.init(e,t),ee.init(e,t)});ta=m("ZodULID",(e,t)=>{oh.init(e,t),ee.init(e,t)});ra=m("ZodXID",(e,t)=>{nh.init(e,t),ee.init(e,t)});oa=m("ZodKSUID",(e,t)=>{ih.init(e,t),ee.init(e,t)});na=m("ZodIPv4",(e,t)=>{hh.init(e,t),ee.init(e,t)});Jd=m("ZodMAC",(e,t)=>{sh.init(e,t),ee.init(e,t)});ia=m("ZodIPv6",(e,t)=>{gh.init(e,t),ee.init(e,t)});aa=m("ZodCIDRv4",(e,t)=>{dh.init(e,t),ee.init(e,t)});ca=m("ZodCIDRv6",(e,t)=>{bh.init(e,t),ee.init(e,t)});la=m("ZodBase64",(e,t)=>{mh.init(e,t),ee.init(e,t)});ua=m("ZodBase64URL",(e,t)=>{ph.init(e,t),ee.init(e,t)});ha=m("ZodE164",(e,t)=>{vh.init(e,t),ee.init(e,t)});ga=m("ZodJWT",(e,t)=>{Ih.init(e,t),ee.init(e,t)});Fr=m("ZodCustomStringFormat",(e,t)=>{fh.init(e,t),ee.init(e,t)});Gr=m("ZodNumber",(e,t)=>{ci.init(e,t),K.init(e,t),e._zod.processJSONSchema=(n,r,i)=>Ms(e,n,r,i),e.gt=(n,r)=>e.check(at(n,r)),e.gte=(n,r)=>e.check(Ae(n,r)),e.min=(n,r)=>e.check(Ae(n,r)),e.lt=(n,r)=>e.check(it(n,r)),e.lte=(n,r)=>e.check(Ee(n,r)),e.max=(n,r)=>e.check(Ee(n,r)),e.int=(n)=>e.check(qi(n)),e.safe=(n)=>e.check(qi(n)),e.positive=(n)=>e.check(at(0,n)),e.nonnegative=(n)=>e.check(Ae(0,n)),e.negative=(n)=>e.check(it(0,n)),e.nonpositive=(n)=>e.check(Ee(0,n)),e.multipleOf=(n,r)=>e.check(xt(n,r)),e.step=(n,r)=>e.check(xt(n,r)),e.finite=()=>e;let o=e._zod.bag;e.minValue=Math.max(o.minimum??Number.NEGATIVE_INFINITY,o.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(o.maximum??Number.POSITIVE_INFINITY,o.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(o.format??"").includes("int")||Number.isSafeInteger(o.multipleOf??0.5),e.isFinite=!0,e.format=o.format??null});rr=m("ZodNumberFormat",(e,t)=>{kh.init(e,t),Gr.init(e,t)});Br=m("ZodBoolean",(e,t)=>{Go.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Js(e,o,n,r)});Hr=m("ZodBigInt",(e,t)=>{li.init(e,t),K.init(e,t),e._zod.processJSONSchema=(n,r,i)=>Vs(e,n,r,i),e.gte=(n,r)=>e.check(Ae(n,r)),e.min=(n,r)=>e.check(Ae(n,r)),e.gt=(n,r)=>e.check(at(n,r)),e.gte=(n,r)=>e.check(Ae(n,r)),e.min=(n,r)=>e.check(Ae(n,r)),e.lt=(n,r)=>e.check(it(n,r)),e.lte=(n,r)=>e.check(Ee(n,r)),e.max=(n,r)=>e.check(Ee(n,r)),e.positive=(n)=>e.check(at(BigInt(0),n)),e.negative=(n)=>e.check(it(BigInt(0),n)),e.nonpositive=(n)=>e.check(Ee(BigInt(0),n)),e.nonnegative=(n)=>e.check(Ae(BigInt(0),n)),e.multipleOf=(n,r)=>e.check(xt(n,r));let o=e._zod.bag;e.minValue=o.minimum??null,e.maxValue=o.maximum??null,e.format=o.format??null});sa=m("ZodBigIntFormat",(e,t)=>{$h.init(e,t),Hr.init(e,t)});Wd=m("ZodSymbol",(e,t)=>{wh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>qs(e,o,n,r)});Yd=m("ZodUndefined",(e,t)=>{_h.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ys(e,o,n,r)});Xd=m("ZodNull",(e,t)=>{Oh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ws(e,o,n,r)});Qd=m("ZodAny",(e,t)=>{Sh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Qs(e,o,n,r)});eb=m("ZodUnknown",(e,t)=>{Th.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>ed(e,o,n,r)});tb=m("ZodNever",(e,t)=>{Ph.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Zs(e,o,n,r)});rb=m("ZodVoid",(e,t)=>{Ah.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Xs(e,o,n,r)});hn=m("ZodDate",(e,t)=>{Dh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(n,r,i)=>td(e,n,r,i),e.min=(n,r)=>e.check(Ae(n,r)),e.max=(n,r)=>e.check(Ee(n,r));let o=e._zod.bag;e.minDate=o.minimum?new Date(o.minimum):null,e.maxDate=o.maximum?new Date(o.maximum):null});ob=m("ZodArray",(e,t)=>{Nh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>dd(e,o,n,r),e.element=t.element,e.min=(o,n)=>e.check(vt(o,n)),e.nonempty=(o)=>e.check(vt(1,o)),e.max=(o,n)=>e.check(Qt(o,n)),e.length=(o,n)=>e.check(er(o,n)),e.unwrap=()=>e.element});sn=m("ZodObject",(e,t)=>{Lh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>bd(e,o,n,r),w.defineLazy(e,"shape",()=>{return t.shape}),e.keyof=()=>ya(Object.keys(e._zod.def.shape)),e.catchall=(o)=>e.clone({...e._zod.def,catchall:o}),e.passthrough=()=>e.clone({...e._zod.def,catchall:tr()}),e.loose=()=>e.clone({...e._zod.def,catchall:tr()}),e.strict=()=>e.clone({...e._zod.def,catchall:da()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=(o)=>{return w.extend(e,o)},e.safeExtend=(o)=>{return w.safeExtend(e,o)},e.merge=(o)=>w.merge(e,o),e.pick=(o)=>w.pick(e,o),e.omit=(o)=>w.omit(e,o),e.partial=(...o)=>w.partial(pa,e,o[0]),e.required=(...o)=>w.required(va,e,o[0])});dn=m("ZodUnion",(e,t)=>{Bo.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ui(e,o,n,r),e.options=t.options});nb=m("ZodXor",(e,t)=>{dn.init(e,t),Ch.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ui(e,o,n,r),e.options=t.options});ib=m("ZodDiscriminatedUnion",(e,t)=>{dn.init(e,t),xh.init(e,t)});ab=m("ZodIntersection",(e,t)=>{zh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>yd(e,o,n,r)});lb=m("ZodTuple",(e,t)=>{ui.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>md(e,o,n,r),e.rest=(o)=>e.clone({...e._zod.def,rest:o})});bn=m("ZodRecord",(e,t)=>{jh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>pd(e,o,n,r),e.keyType=t.keyType,e.valueType=t.valueType});gb=m("ZodMap",(e,t)=>{Eh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>gd(e,o,n,r),e.keyType=t.keyType,e.valueType=t.valueType,e.min=(...o)=>e.check(ct(...o)),e.nonempty=(o)=>e.check(ct(1,o)),e.max=(...o)=>e.check(zt(...o)),e.size=(...o)=>e.check(Zt(...o))});sb=m("ZodSet",(e,t)=>{Uh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>sd(e,o,n,r),e.min=(...o)=>e.check(ct(...o)),e.nonempty=(o)=>e.check(ct(1,o)),e.max=(...o)=>e.check(zt(...o)),e.size=(...o)=>e.check(Zt(...o))});Rr=m("ZodEnum",(e,t)=>{Rh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(n,r,i)=>rd(e,n,r,i),e.enum=t.entries,e.options=Object.values(t.entries);let o=new Set(Object.keys(t.entries));e.extract=(n,r)=>{let i={};for(let a of n)if(o.has(a))i[a]=t.entries[a];else throw Error(`Key ${a} not found in enum`);return new Rr({...t,checks:[],...w.normalizeParams(r),entries:i})},e.exclude=(n,r)=>{let i={...t.entries};for(let a of n)if(o.has(a))delete i[a];else throw Error(`Key ${a} not found in enum`);return new Rr({...t,checks:[],...w.normalizeParams(r),entries:i})}});db=m("ZodLiteral",(e,t)=>{Kh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>od(e,o,n,r),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});bb=m("ZodFile",(e,t)=>{Fh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>ad(e,o,n,r),e.min=(o,n)=>e.check(ct(o,n)),e.max=(o,n)=>e.check(zt(o,n)),e.mime=(o,n)=>e.check(Dr(Array.isArray(o)?o:[o],n))});yb=m("ZodTransform",(e,t)=>{Gh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>hd(e,o,n,r),e._zod.parse=(o,n)=>{if(n.direction==="backward")throw new qt(e.constructor.name);o.addIssue=(i)=>{if(typeof i==="string")o.issues.push(w.issue(i,o.value,t));else{let a=i;if(a.fatal)a.continue=!1;a.code??(a.code="custom"),a.input??(a.input=o.value),a.inst??(a.inst=e),o.issues.push(w.issue(a))}};let r=t.transform(o.value,o);if(r instanceof Promise)return r.then((i)=>{return o.value=i,o});return o.value=r,o}});pa=m("ZodOptional",(e,t)=>{hi.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ri(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});mb=m("ZodExactOptional",(e,t)=>{Bh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Ri(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});vb=m("ZodNullable",(e,t)=>{Hh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>vd(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Ib=m("ZodDefault",(e,t)=>{Mh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>fd(e,o,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});kb=m("ZodPrefault",(e,t)=>{Jh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>kd(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});va=m("ZodNonOptional",(e,t)=>{Vh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Id(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});_b=m("ZodSuccess",(e,t)=>{qh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>cd(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Ob=m("ZodCatch",(e,t)=>{Wh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>$d(e,o,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});Tb=m("ZodNaN",(e,t)=>{Yh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>nd(e,o,n,r)});Ia=m("ZodPipe",(e,t)=>{Xh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>wd(e,o,n,r),e.in=t.in,e.out=t.out});fa=m("ZodCodec",(e,t)=>{Ia.init(e,t),Ho.init(e,t)});Pb=m("ZodReadonly",(e,t)=>{Zh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>_d(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});Db=m("ZodTemplateLiteral",(e,t)=>{Qh.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>id(e,o,n,r)});Nb=m("ZodLazy",(e,t)=>{rg.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Sd(e,o,n,r),e.unwrap=()=>e._zod.def.getter()});Cb=m("ZodPromise",(e,t)=>{tg.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>Od(e,o,n,r),e.unwrap=()=>e._zod.def.innerType});xb=m("ZodFunction",(e,t)=>{eg.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>ud(e,o,n,r)});yn=m("ZodCustom",(e,t)=>{og.init(e,t),K.init(e,t),e._zod.processJSONSchema=(o,n,r)=>ld(e,o,n,r)});_w=Ks,Ow=Fs});function gL(e){ue({customError:e})}function sL(){return ue().customError}var hL,Eb;var Dw=d(()=>{Ue();hL={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};(function(e){})(Eb||(Eb={}))});function bL(e,t){let o=e.$schema;if(o==="https://json-schema.org/draft/2020-12/schema")return"draft-2020-12";if(o==="http://json-schema.org/draft-07/schema#")return"draft-7";if(o==="http://json-schema.org/draft-04/schema#")return"draft-4";return t??"draft-2020-12"}function yL(e,t){if(!e.startsWith("#"))throw Error("External $ref is not supported, only local refs (#/...) are allowed");let o=e.slice(1).split("/").filter(Boolean);if(o.length===0)return t.rootSchema;let n=t.version==="draft-2020-12"?"$defs":"definitions";if(o[0]===n){let r=o[1];if(!r||!t.defs[r])throw Error(`Reference not found: ${e}`);return t.defs[r]}throw Error(`Reference not found: ${e}`)}function Nw(e,t){if(e.not!==void 0){if(typeof e.not==="object"&&Object.keys(e.not).length===0)return A.never();throw Error("not is not supported in Zod (except { not: {} } for never)")}if(e.unevaluatedItems!==void 0)throw Error("unevaluatedItems is not supported");if(e.unevaluatedProperties!==void 0)throw Error("unevaluatedProperties is not supported");if(e.if!==void 0||e.then!==void 0||e.else!==void 0)throw Error("Conditional schemas (if/then/else) are not supported");if(e.dependentSchemas!==void 0||e.dependentRequired!==void 0)throw Error("dependentSchemas and dependentRequired are not supported");if(e.$ref){let r=e.$ref;if(t.refs.has(r))return t.refs.get(r);if(t.processing.has(r))return A.lazy(()=>{if(!t.refs.has(r))throw Error(`Circular reference not resolved: ${r}`);return t.refs.get(r)});t.processing.add(r);let i=yL(r,t),a=Oe(i,t);return t.refs.set(r,a),t.processing.delete(r),a}if(e.enum!==void 0){let r=e.enum;if(t.version==="openapi-3.0"&&e.nullable===!0&&r.length===1&&r[0]===null)return A.null();if(r.length===0)return A.never();if(r.length===1)return A.literal(r[0]);if(r.every((a)=>typeof a==="string"))return A.enum(r);let i=r.map((a)=>A.literal(a));if(i.length<2)return i[0];return A.union([i[0],i[1],...i.slice(2)])}if(e.const!==void 0)return A.literal(e.const);let o=e.type;if(Array.isArray(o)){let r=o.map((i)=>{let a={...e,type:i};return Nw(a,t)});if(r.length===0)return A.never();if(r.length===1)return r[0];return A.union(r)}if(!o)return A.any();let n;switch(o){case"string":{let r=A.string();if(e.format){let i=e.format;if(i==="email")r=r.check(A.email());else if(i==="uri"||i==="uri-reference")r=r.check(A.url());else if(i==="uuid"||i==="guid")r=r.check(A.uuid());else if(i==="date-time")r=r.check(A.iso.datetime());else if(i==="date")r=r.check(A.iso.date());else if(i==="time")r=r.check(A.iso.time());else if(i==="duration")r=r.check(A.iso.duration());else if(i==="ipv4")r=r.check(A.ipv4());else if(i==="ipv6")r=r.check(A.ipv6());else if(i==="mac")r=r.check(A.mac());else if(i==="cidr")r=r.check(A.cidrv4());else if(i==="cidr-v6")r=r.check(A.cidrv6());else if(i==="base64")r=r.check(A.base64());else if(i==="base64url")r=r.check(A.base64url());else if(i==="e164")r=r.check(A.e164());else if(i==="jwt")r=r.check(A.jwt());else if(i==="emoji")r=r.check(A.emoji());else if(i==="nanoid")r=r.check(A.nanoid());else if(i==="cuid")r=r.check(A.cuid());else if(i==="cuid2")r=r.check(A.cuid2());else if(i==="ulid")r=r.check(A.ulid());else if(i==="xid")r=r.check(A.xid());else if(i==="ksuid")r=r.check(A.ksuid())}if(typeof e.minLength==="number")r=r.min(e.minLength);if(typeof e.maxLength==="number")r=r.max(e.maxLength);if(e.pattern)r=r.regex(new RegExp(e.pattern));n=r;break}case"number":case"integer":{let r=o==="integer"?A.number().int():A.number();if(typeof e.minimum==="number")r=r.min(e.minimum);if(typeof e.maximum==="number")r=r.max(e.maximum);if(typeof e.exclusiveMinimum==="number")r=r.gt(e.exclusiveMinimum);else if(e.exclusiveMinimum===!0&&typeof e.minimum==="number")r=r.gt(e.minimum);if(typeof e.exclusiveMaximum==="number")r=r.lt(e.exclusiveMaximum);else if(e.exclusiveMaximum===!0&&typeof e.maximum==="number")r=r.lt(e.maximum);if(typeof e.multipleOf==="number")r=r.multipleOf(e.multipleOf);n=r;break}case"boolean":{n=A.boolean();break}case"null":{n=A.null();break}case"object":{let r={},i=e.properties||{},a=new Set(e.required||[]);for(let[u,h]of Object.entries(i)){let s=Oe(h,t);r[u]=a.has(u)?s:s.optional()}if(e.propertyNames){let u=Oe(e.propertyNames,t),h=e.additionalProperties&&typeof e.additionalProperties==="object"?Oe(e.additionalProperties,t):A.any();if(Object.keys(r).length===0){n=A.record(u,h);break}let s=A.object(r).passthrough(),g=A.looseRecord(u,h);n=A.intersection(s,g);break}if(e.patternProperties){let u=e.patternProperties,h=Object.keys(u),s=[];for(let b of h){let y=Oe(u[b],t),_=A.string().regex(new RegExp(b));s.push(A.looseRecord(_,y))}let g=[];if(Object.keys(r).length>0)g.push(A.object(r).passthrough());if(g.push(...s),g.length===0)n=A.object({}).passthrough();else if(g.length===1)n=g[0];else{let b=A.intersection(g[0],g[1]);for(let y=2;y<g.length;y++)b=A.intersection(b,g[y]);n=b}break}let c=A.object(r);if(e.additionalProperties===!1)n=c.strict();else if(typeof e.additionalProperties==="object")n=c.catchall(Oe(e.additionalProperties,t));else n=c.passthrough();break}case"array":{let{prefixItems:r,items:i}=e;if(r&&Array.isArray(r)){let a=r.map((u)=>Oe(u,t)),c=i&&typeof i==="object"&&!Array.isArray(i)?Oe(i,t):void 0;if(c)n=A.tuple(a).rest(c);else n=A.tuple(a);if(typeof e.minItems==="number")n=n.check(A.minLength(e.minItems));if(typeof e.maxItems==="number")n=n.check(A.maxLength(e.maxItems))}else if(Array.isArray(i)){let a=i.map((u)=>Oe(u,t)),c=e.additionalItems&&typeof e.additionalItems==="object"?Oe(e.additionalItems,t):void 0;if(c)n=A.tuple(a).rest(c);else n=A.tuple(a);if(typeof e.minItems==="number")n=n.check(A.minLength(e.minItems));if(typeof e.maxItems==="number")n=n.check(A.maxLength(e.maxItems))}else if(i!==void 0){let a=Oe(i,t),c=A.array(a);if(typeof e.minItems==="number")c=c.min(e.minItems);if(typeof e.maxItems==="number")c=c.max(e.maxItems);n=c}else n=A.array(A.any());break}default:throw Error(`Unsupported type: ${o}`)}if(e.description)n=n.describe(e.description);if(e.default!==void 0)n=n.default(e.default);return n}function Oe(e,t){if(typeof e==="boolean")return e?A.any():A.never();let o=Nw(e,t),n=e.type||e.enum!==void 0||e.const!==void 0;if(e.anyOf&&Array.isArray(e.anyOf)){let c=e.anyOf.map((h)=>Oe(h,t)),u=A.union(c);o=n?A.intersection(o,u):u}if(e.oneOf&&Array.isArray(e.oneOf)){let c=e.oneOf.map((h)=>Oe(h,t)),u=A.xor(c);o=n?A.intersection(o,u):u}if(e.allOf&&Array.isArray(e.allOf))if(e.allOf.length===0)o=n?o:A.any();else{let c=n?o:Oe(e.allOf[0],t),u=n?0:1;for(let h=u;h<e.allOf.length;h++)c=A.intersection(c,Oe(e.allOf[h],t));o=c}if(e.nullable===!0&&t.version==="openapi-3.0")o=A.nullable(o);if(e.readOnly===!0)o=A.readonly(o);let r={},i=["$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor"];for(let c of i)if(c in e)r[c]=e[c];let a=["contentEncoding","contentMediaType","contentSchema"];for(let c of a)if(c in e)r[c]=e[c];for(let c of Object.keys(e))if(!dL.has(c))r[c]=e[c];if(Object.keys(r).length>0)t.registry.add(o,r);return o}function Lw(e,t){if(typeof e==="boolean")return e?A.any():A.never();let o=bL(e,t?.defaultTarget),n=e.$defs||e.definitions||{},r={version:o,defs:n,refs:new Map,processing:new Set,rootSchema:e,registry:t?.registry??ve};return Oe(e,r)}var A,dL;var Cw=d(()=>{Yo();Gi();tn();on();A={...rn,...Fi,iso:Ur},dL=new Set(["$schema","$ref","$defs","definitions","$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor","type","enum","const","anyOf","oneOf","allOf","not","properties","required","additionalProperties","patternProperties","propertyNames","minProperties","maxProperties","items","prefixItems","additionalItems","minItems","maxItems","uniqueItems","contains","minContains","maxContains","minLength","maxLength","pattern","format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","multipleOf","description","default","contentEncoding","contentMediaType","contentSchema","unevaluatedItems","unevaluatedProperties","if","then","else","dependentSchemas","dependentRequired","nullable","readOnly"])});var Ub={};Qe(Ub,{string:()=>mL,number:()=>pL,date:()=>fL,boolean:()=>vL,bigint:()=>IL});function mL(e){return is(Kr,e)}function pL(e){return ds(Gr,e)}function vL(e){return fs(Br,e)}function IL(e){return $s(Hr,e)}function fL(e){return Cs(hn,e)}var xw=d(()=>{Ue();on()});var l={};Qe(l,{xor:()=>aw,xid:()=>A$,void:()=>ew,uuidv7:()=>k$,uuidv6:()=>f$,uuidv4:()=>I$,uuid:()=>v$,util:()=>w,url:()=>$$,uppercase:()=>Sr,unknown:()=>tr,union:()=>ba,undefined:()=>Z$,ulid:()=>P$,uint64:()=>Y$,uint32:()=>V$,tuple:()=>ub,trim:()=>Lr,treeifyError:()=>ql,transform:()=>ma,toUpperCase:()=>xr,toLowerCase:()=>Cr,toJSONSchema:()=>Ki,templateLiteral:()=>Iw,symbol:()=>X$,superRefine:()=>jb,success:()=>mw,stringbool:()=>Tw,stringFormat:()=>K$,string:()=>Vi,strictObject:()=>nw,startsWith:()=>Pr,slugify:()=>zr,size:()=>Zt,setErrorMap:()=>gL,set:()=>gw,safeParseAsync:()=>jd,safeParse:()=>zd,safeEncodeAsync:()=>Bd,safeEncode:()=>Fd,safeDecodeAsync:()=>Hd,safeDecode:()=>Gd,registry:()=>gi,regexes:()=>Je,regex:()=>_r,refine:()=>zb,record:()=>hb,readonly:()=>Ab,property:()=>ji,promise:()=>fw,prettifyError:()=>Wl,preprocess:()=>Aw,prefault:()=>$b,positive:()=>Li,pipe:()=>ln,partialRecord:()=>lw,parseAsync:()=>xd,parse:()=>Cd,overwrite:()=>Xe,optional:()=>an,object:()=>ow,number:()=>Vd,nullish:()=>yw,nullable:()=>cn,null:()=>Zd,normalize:()=>Nr,nonpositive:()=>xi,nonoptional:()=>wb,nonnegative:()=>zi,never:()=>da,negative:()=>Ci,nativeEnum:()=>sw,nanoid:()=>O$,nan:()=>pw,multipleOf:()=>xt,minSize:()=>ct,minLength:()=>vt,mime:()=>Dr,meta:()=>Ow,maxSize:()=>zt,maxLength:()=>Qt,map:()=>hw,mac:()=>L$,lte:()=>Ee,lt:()=>it,lowercase:()=>Or,looseRecord:()=>uw,looseObject:()=>iw,locales:()=>Wo,literal:()=>dw,length:()=>er,lazy:()=>Lb,ksuid:()=>D$,keyof:()=>rw,jwt:()=>R$,json:()=>Pw,iso:()=>Ur,ipv6:()=>C$,ipv4:()=>N$,intersection:()=>cb,int64:()=>W$,int32:()=>J$,int:()=>qi,instanceof:()=>Sw,includes:()=>Tr,httpUrl:()=>w$,hostname:()=>F$,hex:()=>G$,hash:()=>B$,guid:()=>p$,gte:()=>Ae,gt:()=>at,globalRegistry:()=>ve,getErrorMap:()=>sL,function:()=>kw,fromJSONSchema:()=>Lw,formatError:()=>Uo,float64:()=>M$,float32:()=>H$,flattenError:()=>Eo,file:()=>bw,exactOptional:()=>pb,enum:()=>ya,endsWith:()=>Ar,encodeAsync:()=>Rd,encode:()=>Ed,emoji:()=>_$,email:()=>m$,e164:()=>U$,discriminatedUnion:()=>cw,describe:()=>_w,decodeAsync:()=>Kd,decode:()=>Ud,date:()=>tw,custom:()=>ww,cuid2:()=>T$,cuid:()=>S$,core:()=>It,config:()=>ue,coerce:()=>Ub,codec:()=>vw,clone:()=>Pe,cidrv6:()=>z$,cidrv4:()=>x$,check:()=>$w,catch:()=>Sb,boolean:()=>qd,bigint:()=>q$,base64url:()=>E$,base64:()=>j$,array:()=>gn,any:()=>Q$,_function:()=>kw,_default:()=>fb,_ZodString:()=>Wi,ZodXor:()=>nb,ZodXID:()=>ra,ZodVoid:()=>rb,ZodUnknown:()=>eb,ZodUnion:()=>dn,ZodUndefined:()=>Yd,ZodUUID:()=>lt,ZodURL:()=>un,ZodULID:()=>ta,ZodType:()=>K,ZodTuple:()=>lb,ZodTransform:()=>yb,ZodTemplateLiteral:()=>Db,ZodSymbol:()=>Wd,ZodSuccess:()=>_b,ZodStringFormat:()=>ee,ZodString:()=>Kr,ZodSet:()=>sb,ZodRecord:()=>bn,ZodRealError:()=>ze,ZodReadonly:()=>Pb,ZodPromise:()=>Cb,ZodPrefault:()=>kb,ZodPipe:()=>Ia,ZodOptional:()=>pa,ZodObject:()=>sn,ZodNumberFormat:()=>rr,ZodNumber:()=>Gr,ZodNullable:()=>vb,ZodNull:()=>Xd,ZodNonOptional:()=>va,ZodNever:()=>tb,ZodNanoID:()=>Zi,ZodNaN:()=>Tb,ZodMap:()=>gb,ZodMAC:()=>Jd,ZodLiteral:()=>db,ZodLazy:()=>Nb,ZodKSUID:()=>oa,ZodJWT:()=>ga,ZodIssueCode:()=>hL,ZodIntersection:()=>ab,ZodISOTime:()=>Mi,ZodISODuration:()=>Ji,ZodISODateTime:()=>Bi,ZodISODate:()=>Hi,ZodIPv6:()=>ia,ZodIPv4:()=>na,ZodGUID:()=>nn,ZodFunction:()=>xb,ZodFirstPartyTypeKind:()=>Eb,ZodFile:()=>bb,ZodExactOptional:()=>mb,ZodError:()=>lL,ZodEnum:()=>Rr,ZodEmoji:()=>Xi,ZodEmail:()=>Yi,ZodE164:()=>ha,ZodDiscriminatedUnion:()=>ib,ZodDefault:()=>Ib,ZodDate:()=>hn,ZodCustomStringFormat:()=>Fr,ZodCustom:()=>yn,ZodCodec:()=>fa,ZodCatch:()=>Ob,ZodCUID2:()=>ea,ZodCUID:()=>Qi,ZodCIDRv6:()=>ca,ZodCIDRv4:()=>aa,ZodBoolean:()=>Br,ZodBigIntFormat:()=>sa,ZodBigInt:()=>Hr,ZodBase64URL:()=>ua,ZodBase64:()=>la,ZodArray:()=>ob,ZodAny:()=>Qd,TimePrecision:()=>cs,NEVER:()=>El,$output:()=>ts,$input:()=>rs,$brand:()=>Ul});var Rb=d(()=>{Ue();Ue();dg();Ue();en();Cw();es();tn();tn();xw();on();Gi();Ld();Md();Dw();ue(Mo())});var Ie=d(()=>{Rb();Rb()});var D=(e)=>{let t={operationId:e.operationId,backend:e.backend,pagination:e.pagination,async:e.async,examples:e.examples??[]};return{...e,contract:Em.$meta(t).route({method:e.route.method,path:e.route.path,tags:e.route.tags,operationId:e.operationId,description:e.description,successStatus:e.route.successStatus,successDescription:e.route.successDescription,deprecated:e.route.deprecated,inputStructure:e.route.inputStructure}).input(e.input).output(e.output)}};var Ne=d(()=>{Bc()});var zw,Kb,kL,$L,jw,Fb,Gb,Ew,Uw,ka,Rw,Kw,Mr,Fw,Gw,$a,Bw,Hw,Jr,Mw,Jw,wa,Vw,qw,_a,Ww,Yw,Oa,Xw,Zw,Sa,Qw,e_,Ta,wL;var Bb=d(()=>{jl();Ie();Ne();zw=dr,Kb=l.enum(zw),kL=l.enum(["pending","provisioning","active","error"]),$L=l.object({name:l.string().describe("Field name used as the JSON key in metadata."),type:l.string().describe('Zod type name, e.g. "string", "boolean", "enum".'),required:l.boolean().describe("Whether the field is required."),sensitive:l.boolean().describe("Whether the field contains a secret and will be encrypted."),description:l.string().nullable().describe("Human-readable description of the field.")}),jw=l.object({id:l.string().describe("Data source type identifier."),name:l.string().describe("Human-readable display name."),metadataFields:l.array($L).describe("Fields required in the metadata object when creating a connection."),setupSkill:l.string().nullable().describe("Markdown setup skill for AI agents. Null when no skill is available.")}),Fb=l.object({id:l.string().uuid(),projectId:l.string().uuid(),dataSourceType:Kb,displayName:l.string().nullable(),createdAt:l.string().datetime()}),Gb=l.object({id:l.string().uuid(),connectionId:l.string().uuid(),displayName:l.string(),config:l.record(l.string(),l.unknown()),status:kL,errorMessage:l.string().nullable(),createdAt:l.string().datetime()}),Ew=l.object({}),Uw=l.object({types:l.array(jw)}),ka=D({operationId:"dataSources.listTypes",description:"List all supported data source types with their metadata requirements.",backend:"api",route:{method:"GET",path:"/data-sources/types",tags:["Data Sources"]},input:Ew,output:Uw,pagination:"none",async:"sync"}),Rw=l.object({projectId:l.string().uuid().optional().describe("Project to list connections for. Auto-filled from SDK context when omitted."),dataSourceType:Kb.optional().describe("Filter connections by data source type.")}),Kw=l.object({connections:l.array(Fb)}),Mr=D({operationId:"dataSources.listConnections",description:"List data source connections within one project.",backend:"api",route:{method:"GET",path:"/data-sources/connections",tags:["Data Sources"]},input:Rw,output:Kw,pagination:"none",async:"sync"}),Fw=l.object({connectionId:l.string().uuid().describe("Connection ID to fetch.")}),Gw=l.object({connection:Fb}),$a=D({operationId:"dataSources.getConnection",description:"Get one data source connection by ID.",backend:"api",route:{method:"GET",path:"/data-sources/connections/{connectionId}",tags:["Data Sources"]},input:Fw,output:Gw,pagination:"none",async:"sync"}),Bw=l.object({projectId:l.string().uuid().optional().describe("Project to create the connection in. Auto-filled from SDK context when omitted."),dataSourceType:Kb.describe("Data source type identifier."),metadata:l.record(l.string(),l.unknown()).describe("Platform-specific credentials. Fields vary by data source type."),displayName:l.string().optional().describe("Optional human-readable name for this connection.")}),Hw=l.object({connectionId:l.string().uuid().describe("ID of the created connection."),publicKey:l.string().describe("Auto-generated public API key for this connection. Store this securely — it is only shown once.")}),Jr=D({operationId:"dataSources.createConnection",description:"Create a new data source connection. Validates credentials, encrypts sensitive fields, and auto-generates a public API key.",backend:"api",route:{method:"POST",path:"/data-sources/connections",successStatus:201,tags:["Data Sources"]},input:Bw,output:Hw,pagination:"none",async:"sync"}),Mw=l.object({connectionId:l.string().uuid().describe("Connection ID to list streams for.")}),Jw=l.object({streams:l.array(Gb)}),wa=D({operationId:"dataSources.listStreams",description:"List streams for a data source connection.",backend:"api",route:{method:"GET",path:"/data-sources/connections/{connectionId}/streams",tags:["Data Sources"]},input:Mw,output:Jw,pagination:"none",async:"sync"}),Vw=l.object({connectionId:l.string().uuid().describe("Connection ID to create the stream under."),displayName:l.string().describe("Resource name, e.g. service or app name."),config:l.record(l.string(),l.unknown()).describe("Platform-specific stream configuration.")}),qw=l.object({streamId:l.string().uuid().describe("ID of the created stream."),publicKey:l.string().optional().describe("Auto-generated public API key for this stream. Returned only when the data source mints a per-stream key (manual-only sources). Store this securely — it is only shown once.")}),_a=D({operationId:"dataSources.createStream",description:"Create a new stream for a data source connection. Triggers async provisioning.",backend:"api",route:{method:"POST",path:"/data-sources/connections/{connectionId}/streams",successStatus:201,tags:["Data Sources"]},input:Vw,output:qw,pagination:"none",async:"sync"}),Ww=l.object({streamId:l.string().uuid().describe("Stream ID to fetch.")}),Yw=l.object({stream:Gb}),Oa=D({operationId:"dataSources.getStream",description:"Get one data source stream by ID. Use to poll provisioning status.",backend:"api",route:{method:"GET",path:"/data-sources/streams/{streamId}",tags:["Data Sources"]},input:Ww,output:Yw,pagination:"none",async:"sync"}),Xw=l.object({streamId:l.string().uuid().describe("Stream ID to delete.")}),Zw=l.object({success:l.boolean()}),Sa=D({operationId:"dataSources.deleteStream",description:"Delete a data source stream. For manual-only sources where streams are stored as connection API keys, deletes the underlying public key.",backend:"api",route:{method:"DELETE",path:"/data-sources/streams/{streamId}",successStatus:204,tags:["Data Sources"]},input:Xw,output:Zw,pagination:"none",async:"sync"}),Qw=l.object({connectionId:l.string().uuid().describe("Connection ID to disconnect.")}),e_=l.object({success:l.boolean(),connectionTeardownError:l.string().nullable().describe("Null when teardown succeeded; error message when remote cleanup failed.")}),Ta=D({operationId:"dataSources.disconnectConnection",description:"Disconnect a data source connection. Soft-deletes the connection, all associated streams, and all associated API keys. Triggers async backend teardown when the source supports it.",backend:"api",route:{method:"DELETE",path:"/data-sources/connections/{connectionId}",successStatus:200,tags:["Data Sources"]},input:Qw,output:e_,pagination:"none",async:"sync"}),wL={listTypes:ka.contract,listConnections:Mr.contract,getConnection:$a.contract,createConnection:Jr.contract,disconnectConnection:Ta.contract,listStreams:wa.contract,createStream:_a.contract,getStream:Oa.contract,deleteStream:Sa.contract}});var mn,_L,OL,SL,TL,PL,AL,DL,NL,LL,CL,Hb,Mb,Jb,Vb,qb,wH;var t_=d(()=>{Ie();Ne();mn=l.object({id:l.string().uuid(),projectId:l.string().uuid(),name:l.string(),whatHappened:l.string(),whyItHappened:l.string().nullable(),howToFix:l.string().nullable(),status:l.enum(["open","resolved","ignored"]),severity:l.enum(["low","medium","high","critical"]),statusComponentId:l.string().uuid().nullable(),createdAt:l.string().datetime(),resolvedAt:l.string().datetime().nullable(),mutedAt:l.string().datetime().nullable(),lastActivityAt:l.string().datetime().nullable()}),_L=l.object({projectId:l.string().uuid().optional().describe("Project to list issues for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of issues to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),status:l.enum(["open","resolved","ignored"]).optional().describe("Filter by issue status."),severity:l.enum(["low","medium","high","critical"]).optional().describe("Filter by severity."),statusComponentId:l.string().uuid().optional().describe("Filter by status component ID.")}),OL=l.object({issues:l.array(mn),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),SL=l.object({issueId:l.string().uuid().describe("Issue ID to retrieve.")}),TL=l.object({issue:mn}),PL=l.object({issueId:l.string().uuid().describe("Issue ID to resolve.")}),AL=l.object({issue:mn}),DL=l.object({issueId:l.string().uuid().describe("Issue ID to ignore.")}),NL=l.object({issue:mn}),LL=l.object({issueId:l.string().uuid().describe("Issue ID to unignore.")}),CL=l.object({issue:mn}),Hb=D({operationId:"issues.list",description:"List issues in a project, optionally filtered by status and severity.",backend:"api",route:{method:"GET",path:"/issues",tags:["Issues"]},input:_L,output:OL,pagination:"cursor",async:"sync"}),Mb=D({operationId:"issues.get",description:"Get a single issue by ID.",backend:"api",route:{method:"GET",path:"/issues/{issueId}",tags:["Issues"]},input:SL,output:TL,pagination:"none",async:"sync"}),Jb=D({operationId:"issues.resolve",description:"Resolve an open issue.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/resolve",tags:["Issues"]},input:PL,output:AL,pagination:"none",async:"sync"}),Vb=D({operationId:"issues.ignore",description:"Ignore an open issue.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/ignore",tags:["Issues"]},input:DL,output:NL,pagination:"none",async:"sync"}),qb=D({operationId:"issues.unignore",description:"Unignore an ignored issue. Mute is separate from ignored status.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/unignore",tags:["Issues"]},input:LL,output:CL,pagination:"none",async:"sync"}),wH={list:Hb.contract,get:Mb.contract,resolve:Jb.contract,ignore:Vb.contract,unignore:qb.contract}});var Pa,r_,Aa,Da,o_,n_,i_,a_,Na,Wb,c_,l_,u_,h_,g_,s_,d_,b_,y_,m_,p_,v_,Vr,qr,Wr,Yr,Xr,La,Ca,xa,za,ja,xL,zL;var Yb=d(()=>{Ie();Ne();Pa=/^[a-zA-Z0-9\s\-_]+$/,r_=l.object({id:l.string().uuid(),name:l.string(),expiresAt:l.string().datetime().nullable(),lastUsedAt:l.string().datetime().nullable(),createdAt:l.string().datetime()}),Aa=r_.extend({projectId:l.string().uuid(),dataSourceConnectionId:l.string().uuid().nullable().describe("Linked data source connection ID when this key is scoped to one data source."),deactivatedAt:l.string().datetime().nullable().describe("Timestamp when this public key was deactivated.")}),Da=r_.extend({projectId:l.string().uuid().nullable()}),o_=l.object({projectId:l.string().uuid().optional().describe("Project to list keys for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),n_=l.object({publicKeys:l.array(Aa),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),i_=l.object({secretKeys:l.array(Da),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),a_=l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),keyId:l.string().uuid().describe("Key ID to fetch.")}),Na=l.object({publicKey:Aa}),Wb=l.object({secretKey:Da}),c_=l.object({projectId:l.string().uuid().optional().describe("Project to create the key in. Auto-filled from CLI and SDK context when omitted."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Pa,"Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),expiresAt:l.string().datetime().optional().describe("Optional expiration timestamp for the key.")}),l_=l.object({publicKey:Aa.extend({value:l.string()})}),u_=l.object({secretKey:Da.extend({value:l.string()})}),h_=l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),keyId:l.string().uuid().describe("Key ID to update."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Pa,"Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),expiresAt:l.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")}),g_=l.object({params:l.object({keyId:l.string().uuid().describe("Public key ID to deactivate.")}),query:l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted.")})}).transform(({params:e,query:t})=>({...t,...e})),s_=Na,d_=l.void(),b_=l.object({limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),y_=l.object({keyId:l.string().uuid().describe("Key ID to fetch.")}),m_=l.object({projectId:l.string().uuid().optional().describe("Project to scope this key to. When set, the key can only access resources within this project. Omit for organization-wide access."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Pa,"Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),expiresAt:l.string().datetime().optional().describe("Optional expiration timestamp for the key.")}),p_=l.object({keyId:l.string().uuid().describe("Key ID to update."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(Pa,"Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),expiresAt:l.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")}),v_=l.object({params:l.object({keyId:l.string().uuid().describe("Key ID to delete.")})}).transform(({params:e})=>({...e})),Vr=D({operationId:"publicKeys.list",description:"List public keys within one project.",backend:"api",route:{method:"GET",path:"/public-keys",tags:["Public Keys"]},input:o_,output:n_,pagination:"cursor",async:"sync",examples:[{name:"list-public-keys",input:{projectId:"11111111-1111-4111-8111-111111111111",limit:25},output:{publicKeys:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),qr=D({operationId:"publicKeys.get",description:"Get one public key within one project.",backend:"api",route:{method:"GET",path:"/public-keys/{keyId}",tags:["Public Keys"]},input:a_,output:Na,pagination:"none",async:"sync",examples:[{name:"get-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",keyId:"22222222-2222-4222-8222-222222222222"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Wr=D({operationId:"publicKeys.create",description:"Create one public key within one project.",backend:"api",route:{method:"POST",path:"/public-keys",successStatus:201,tags:["Public Keys"]},input:c_,output:l_,pagination:"none",async:"sync",examples:[{name:"create-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z",value:"sazabi_public_example"}}}]}),Yr=D({operationId:"publicKeys.update",description:"Update one public key within one project.",backend:"api",route:{method:"PATCH",path:"/public-keys/{keyId}",tags:["Public Keys"]},input:h_,output:Na,pagination:"none",async:"sync",examples:[{name:"rename-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",keyId:"22222222-2222-4222-8222-222222222222",name:"Updated CLI forwarder"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"Updated CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Xr=D({operationId:"publicKeys.deactivate",description:"Deactivate one public key within one project. Existing successful intake-auth cache entries may continue to authenticate until their current TTL expires.",backend:"api",route:{method:"POST",path:"/public-keys/{keyId}/deactivate",tags:["Public Keys"],inputStructure:"detailed"},input:g_,output:s_,pagination:"none",async:"sync"}),La=D({operationId:"secretKeys.list",description:"List secret keys within the organization.",backend:"api",route:{method:"GET",path:"/secret-keys",tags:["Secret Keys"]},input:b_,output:i_,pagination:"cursor",async:"sync",examples:[{name:"list-secret-keys",input:{limit:25},output:{secretKeys:[{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),Ca=D({operationId:"secretKeys.get",description:"Get one secret key within the organization.",backend:"api",route:{method:"GET",path:"/secret-keys/{keyId}",tags:["Secret Keys"]},input:y_,output:Wb,pagination:"none",async:"sync",examples:[{name:"get-secret-key",input:{keyId:"33333333-3333-4333-8333-333333333333"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),xa=D({operationId:"secretKeys.create",description:"Create one secret key within the organization.",backend:"api",route:{method:"POST",path:"/secret-keys",successStatus:201,tags:["Secret Keys"]},input:m_,output:u_,pagination:"none",async:"sync",examples:[{name:"create-secret-key",input:{name:"CI agent"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z",value:"sazabi_secret_example"}}}]}),za=D({operationId:"secretKeys.update",description:"Update one secret key within the organization.",backend:"api",route:{method:"PATCH",path:"/secret-keys/{keyId}",tags:["Secret Keys"]},input:p_,output:Wb,pagination:"none",async:"sync",examples:[{name:"rename-secret-key",input:{keyId:"33333333-3333-4333-8333-333333333333",name:"Updated CI agent"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"Updated CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),ja=D({operationId:"secretKeys.delete",description:"Delete one secret key within the organization.",backend:"api",route:{method:"DELETE",path:"/secret-keys/{keyId}",successStatus:204,tags:["Secret Keys"],inputStructure:"detailed"},input:v_,output:d_,pagination:"none",async:"sync"}),xL={list:Vr.contract,get:qr.contract,create:Wr.contract,update:Yr.contract,deactivate:Xr.contract},zL={list:La.contract,get:Ca.contract,create:xa.contract,update:za.contract,delete:ja.contract}});var I_,f_,k_,$_,w_,__,O_,Ea,S_,T_,P_,Xb,A_,D_,N_,L_,C_,x_,z_,j_,jL,E_,U_,Zr,Qr,eo,to,ro,EL;var Zb=d(()=>{Ie();Ne();I_=l.enum(["eq","neq","in","contains","starts_with","gt","gte","lt","lte","between","exists"]).describe("Filter operator: 'eq' (equals), 'neq' (not equals), 'in' (in array), 'contains' (substring), 'starts_with' (prefix), 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal), 'between' (range), 'exists' (field exists)"),f_=l.enum(["any","all","phrase"]).describe("Search mode: 'any' (match any token), 'all' (match all tokens), 'phrase' (exact phrase match)"),k_=l.object({query:l.string().min(1,"Search query must be at least 1 character").max(500,"Search query must be at most 500 characters").describe("Search query text (1-500 characters)"),fields:l.array(l.string()).optional().describe("Fields to search in (defaults to backend allowlist)"),mode:f_.optional().default("all").describe("Token matching mode")}),$_=l.object({field:l.string().describe("Field name to filter on"),op:I_.describe("Filter operator"),value:l.union([l.string(),l.number(),l.boolean(),l.array(l.union([l.string(),l.number()])),l.object({from:l.string(),to:l.string()})]).describe("Filter value (type depends on operator)")}).superRefine((e,t)=>{if(e.op==="in"&&!Array.isArray(e.value))t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be an array when op is 'in'",path:["value"]});if(e.op==="between"){let o=e.value;if(!(typeof o==="object"&&o!==null&&("from"in o)&&("to"in o)))t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be an object with from/to when op is 'between'",path:["value"]})}if(e.op==="exists"&&typeof e.value!=="boolean")t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be boolean when op is 'exists'",path:["value"]})}),w_=l.object({field:l.string().describe("Field name to sort by"),direction:l.enum(["asc","desc"]).default("desc").describe("Sort direction: 'asc' for ascending, 'desc' for descending")}),__=l.object({limit:l.number().int().min(1,"Limit must be at least 1").max(1000,"Limit must be at most 1000").default(50).describe("Maximum number of rows to return"),cursor:l.string().optional().describe("Opaque cursor from previous response for pagination")}),O_=l.object({projectId:l.string().uuid().optional().describe("Project to query logs for. Auto-filled from CLI and SDK context when omitted."),search:k_.optional().describe("Full-text search configuration"),filters:l.array($_).optional().describe("Structured filter clauses (ANDed together)"),select:l.array(l.string()).optional().describe("Fields to return (defaults to backend default set)"),sort:w_.optional().describe("Sort configuration (defaults to timestamp desc)"),pagination:__.optional().describe("Pagination configuration")}),Ea=l.enum(["clickhouse","better-stack","datadog","gcp","axiom","cloudwatch","sentry","posthog","mezmo"]),S_=l.enum(["native","external"]),T_=l.object({projectId:l.string().uuid().optional().describe("Project to inspect. Auto-filled from CLI and SDK context when omitted.")}),P_=l.object({backend:l.object({id:Ea,name:l.string(),kind:S_}).describe("Active log backend for the project"),features:l.array(l.string()).describe("Backend features registered on the server"),commands:l.array(l.enum(["schema","query","volume","patterns","nativeQuery"])).describe("CLI/API commands available for this backend"),queryableFields:l.array(l.string()).describe("Fields accepted by the normalized logs.query contract"),searchableFields:l.array(l.string()).describe("Fields accepted by logs.query full-text search"),observedServiceNames:l.array(l.string()).describe("Recently observed service names for this project"),observedAttributeKeys:l.array(l.string()).describe("Recently observed log attribute keys for this project"),schemaContext:l.record(l.string(),l.any()).optional().describe("Backend-specific schema guidance and examples")}),Xb=l.enum(["1m","5m","15m","1h"]),A_=l.enum(["service_name","severity_text","environment"]),D_=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),startDate:l.string().datetime({offset:!0}),endDate:l.string().datetime({offset:!0}),interval:Xb.optional().describe("Aggregation bucket size for the volume series"),groupBy:A_.optional().describe("Optional field to split volume series by"),filters:l.object({service_name:l.string().optional(),severity_text:l.string().optional(),environment:l.string().optional()}).optional()}).refine((e)=>new Date(e.startDate)<new Date(e.endDate),{message:"startDate must be before endDate",path:["endDate"]}),N_=l.object({total:l.number().nonnegative(),startDate:l.string().datetime({offset:!0}),endDate:l.string().datetime({offset:!0}),interval:Xb,series:l.array(l.object({group:l.string(),total:l.number().nonnegative(),points:l.array(l.object({bucket:l.string(),count:l.number().nonnegative()}))}))}),L_=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),query:l.string().min(1).max(500).optional().describe("Optional text to match against normalized log patterns"),severity:l.string().optional().describe("Optional severity_text value, for example ERROR"),startDate:l.string().datetime({offset:!0}).optional().describe("Optional earliest last-seen timestamp"),endDate:l.string().datetime({offset:!0}).optional().describe("Optional latest last-seen timestamp"),limit:l.number().int().min(1).max(100).default(25).describe("Maximum number of log patterns to return")}).refine((e)=>!e.startDate||!e.endDate||new Date(e.startDate)<new Date(e.endDate),{message:"startDate must be before endDate",path:["endDate"]}),C_=l.object({fingerprint:l.string(),pattern:l.string(),severity:l.string().nullable(),occurrences:l.number().nonnegative(),firstSeen:l.string().nullable(),lastSeen:l.string().nullable(),representativeId:l.string().nullable()}),x_=l.object({patterns:l.array(C_),meta:l.object({backendId:Ea,count:l.number().int().nonnegative(),took:l.number().nonnegative()})}),z_=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),query:l.string().min(1,"Query cannot be empty").max(1e4,"Query must be 10000 characters or less")}),j_=l.object({result:l.string().describe("Backend-formatted query result"),format:l.literal("text"),meta:l.object({backendId:Ea,took:l.number().nonnegative(),truncated:l.boolean()})}),jL=l.object({cursor:l.string().nullable().describe("Cursor for next page (null if no more results)"),hasMore:l.boolean().describe("Whether more results are available")}),E_=l.object({count:l.number().int().nonnegative().describe("Number of log rows returned in this response"),took:l.number().nonnegative().describe("Query execution time in milliseconds")}),U_=l.object({data:l.array(l.record(l.string(),l.any())).describe("Array of log rows with selected fields"),nextCursor:l.string().nullable().describe("Pass as 'cursor' in the next query to fetch the next page. Null when there are no more results."),meta:E_.describe("Query execution metadata")}),Zr=D({operationId:"logs.query",description:"Query logs within one project via the platform API proxy.",backend:"api",route:{method:"POST",path:"/logs/query",tags:["Logs"]},input:O_,output:U_,pagination:"cursor",async:"sync"}),Qr=D({operationId:"logs.schema",description:"Describe the active log backend, supported commands, query fields, and schema context.",backend:"api",route:{method:"POST",path:"/logs/schema",tags:["Logs"]},input:T_,output:P_,pagination:"none",async:"sync"}),eo=D({operationId:"logs.volume",description:"Query pre-aggregated log volume for one project.",backend:"api",route:{method:"POST",path:"/logs/volume",tags:["Logs"]},input:D_,output:N_,pagination:"none",async:"sync"}),to=D({operationId:"logs.patterns",description:"Query normalized log patterns for discovery workflows.",backend:"api",route:{method:"POST",path:"/logs/patterns",tags:["Logs"]},input:L_,output:x_,pagination:"none",async:"sync"}),ro=D({operationId:"logs.nativeQuery",description:"Run the active backend's native read-only query language through server-side guardrails.",backend:"api",route:{method:"POST",path:"/logs/native-query",tags:["Logs"]},input:z_,output:j_,pagination:"none",async:"sync"}),EL={query:Zr.contract,schema:Qr.contract,volume:eo.contract,patterns:to.contract,nativeQuery:ro.contract}});var oo,UL,RL,KL,FL,GL,BL,HL,Qb,CH;var Ua=d(()=>{Ie();Ne();oo=l.enum(["admin","member"]),UL=l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional(),role:oo}),RL=l.object({id:l.string().min(1),name:l.string().nullable(),email:l.string().email()}),KL=l.object({credentialType:l.literal("user"),user:RL,activeOrganizationId:l.string().min(1).nullable(),organizations:l.array(UL).describe("Organizations the user belongs to, including membership role.")}),FL=l.object({credentialType:l.literal("secret"),organization:l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional()}),keyName:l.string()}),GL=l.object({credentialType:l.literal("partner"),superorganization:l.object({id:l.string().uuid(),name:l.string()})}),BL=l.object({}),HL=l.discriminatedUnion("credentialType",[KL,FL,GL]),Qb=D({operationId:"me.get",description:"Return the identity and available context for the current credential.",backend:"api",route:{method:"GET",path:"/me",tags:["Auth"]},input:BL,output:HL,pagination:"none",async:"sync"}),CH=Qb.contract});var R_,ML,JL,VL,qL,WL,YL,ey,ty,ry,UH;var K_=d(()=>{Ie();Ne();Ua();R_=l.object({membershipId:l.string().min(1).describe("Organization membership record ID."),userId:l.string().min(1).describe("User ID for the organization member."),name:l.string().nullable().describe("Display name for the member, when available."),email:l.string().email().describe("Email address for the member."),imageUrl:l.string().nullable().describe("Profile image URL for the member, when available."),role:oo.describe("Organization role."),createdAt:l.string().datetime().describe("When the membership was created.")}),ML=l.object({organizationId:l.string().min(1).optional().describe("Organization to list members for. Auto-filled from CLI and SDK context when omitted.")}),JL=l.object({members:l.array(R_).describe("Members visible within the selected organization.")}),VL=l.object({organizationId:l.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted."),userId:l.string().min(1).describe("User ID of the member to update."),role:oo.describe("Role to assign.")}),qL=l.object({member:R_.describe("Updated organization member.")}),WL=l.object({params:l.object({userId:l.string().min(1).describe("User ID of the member to remove.")}),query:l.object({organizationId:l.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted.")})}).transform(({params:e,query:t})=>({...t,...e})),YL=l.object({removedUserId:l.string().min(1).describe("User ID removed from the organization.")}),ey=D({operationId:"members.list",description:"List members in an organization.",backend:"api",route:{method:"GET",path:"/members",tags:["Members"]},input:ML,output:JL,pagination:"none",async:"sync",examples:[{name:"organization-members",input:{organizationId:"organization-123"},output:{members:[{membershipId:"membership-123",userId:"user-123",name:"Alex Admin",email:"alex@example.com",imageUrl:null,role:"admin",createdAt:"2026-01-01T00:00:00.000Z"}]}}]}),ty=D({operationId:"members.updateRole",description:"Update a member's organization role.",backend:"api",route:{method:"PATCH",path:"/members/{userId}/role",tags:["Members"]},input:VL,output:qL,pagination:"none",async:"sync",examples:[{name:"promote-member",input:{organizationId:"organization-123",userId:"user-456",role:"admin"},output:{member:{membershipId:"membership-456",userId:"user-456",name:"Mina Member",email:"mina@example.com",imageUrl:null,role:"admin",createdAt:"2026-01-01T00:00:00.000Z"}}}]}),ry=D({operationId:"members.remove",description:"Remove a member from an organization.",backend:"api",route:{method:"DELETE",path:"/members/{userId}",tags:["Members"],inputStructure:"detailed"},input:WL,output:YL,pagination:"none",async:"sync"}),UH={list:ey.contract,updateRole:ty.contract,remove:ry.contract}});var F_,G_,XL,ZL,QL,eC,tC,pn,rC,oy,ny,iy,GH;var Ra=d(()=>{Ie();Ne();F_=l.enum(["processing","completed","aborted","error"]),G_=l.object({id:l.string().uuid(),threadId:l.string().uuid(),userMessageId:l.string().uuid().nullable(),assistantMessageId:l.string().uuid().nullable(),parentRunId:l.string().uuid().nullable(),workflowRunId:l.string().nullable(),status:F_,source:l.enum(["web","api","mcp","slack","agent","cli"]),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),completedAt:l.string().datetime().nullable()}),XL=l.object({projectId:l.string().uuid().optional().describe("Project ID to list runs for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),cursor:l.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),ZL=l.object({runs:l.array(G_),nextCursor:l.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),QL=l.object({threadId:l.string().uuid().describe("Thread ID to list runs for."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),cursor:l.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),eC=l.object({runs:l.array(G_),nextCursor:l.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),tC=l.object({runId:l.string().uuid().describe("Run ID returned by a deferred operation.")}),pn=l.object({completed:l.boolean().describe("Whether the run has reached a terminal status."),threadId:l.string().uuid().describe("Thread ID associated with the run."),runId:l.string().uuid().describe("Run ID for subsequent polling."),messageId:l.string().uuid().optional().describe("ID of the user message that triggered this run."),status:F_.describe("Current run lifecycle status."),response:l.string().nullable().describe("Assistant response text when the run has completed.")}),rC=pn.describe("Current run state and, when complete, the assistant response."),oy=D({operationId:"runs.list",description:"List deferred runs within one project.",backend:"api",route:{method:"GET",path:"/runs",tags:["Runs"]},input:XL,output:ZL,pagination:"cursor",async:"sync"}),ny=D({operationId:"runs.listForThread",description:"List deferred runs for one thread.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/runs",tags:["Runs"]},input:QL,output:eC,pagination:"cursor",async:"sync"}),iy=D({operationId:"runs.get",description:"Get the current result for a deferred run by run ID.",backend:"api",route:{method:"GET",path:"/runs/{runId}",tags:["Runs"]},input:tC,output:rC,pagination:"none",async:"sync",examples:[{name:"processing-run",input:{runId:"33333333-3333-4333-8333-333333333333"},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]}),GH={list:oy.contract,listForThread:ny.contract,get:iy.contract}});var ay,oC,nC,iC,aC,cC,lC,uC,hC,cy,gC,sC,dC,bC,yC,mC,pC,vC,IC,fC,ly,uy,hy,gy,sy,VH;var dy=d(()=>{Ie();Ne();Ra();ay=l.object({id:l.string().uuid(),projectId:l.string().uuid(),title:l.string().nullable(),status:l.enum(["regular","archived"]),createdAt:l.string().datetime(),updatedAt:l.string().datetime()}),oC=l.object({type:l.literal("message"),message:l.string()}),nC=l.object({type:l.literal("reasoning"),reasoning:l.string(),status:l.enum(["in_progress","complete"]).optional()}),iC=l.object({type:l.literal("tool_call"),name:l.string(),params:l.any().optional(),result:l.any().optional(),status:l.enum(["in_progress","success","error","unknown"]).optional(),toolCallId:l.string().optional(),durationMs:l.number().nonnegative().optional()}),aC=l.object({type:l.literal("artifact"),name:l.enum(["timeseries","table","log_detail","integration_required","alert_card","issue_card"]),data:l.any(),toolCallId:l.string().optional()}),cC=l.object({type:l.literal("fork"),sourceThreadId:l.string(),sourceMessageId:l.string(),sourceThreadTitle:l.string().nullable()}),lC=l.object({type:l.literal("summary"),summary:l.string()}),uC=l.object({type:l.literal("slack_context"),channelId:l.string(),isTruncated:l.boolean().optional(),messages:l.array(l.object({timestamp:l.string(),slackUserId:l.string().optional(),displayName:l.string(),text:l.string(),isBot:l.boolean(),files:l.array(l.object({name:l.string(),mimetype:l.string(),size:l.number().optional(),attachmentId:l.string().uuid().optional(),ingestionStatus:l.enum(["attached","unsupported","oversized","skipped","unavailable"]).optional()})).optional()}))}),hC=l.union([oC,nC,iC,aC,cC,lC,uC]),cy=l.object({id:l.string().uuid(),role:l.enum(["user","assistant"]),content:l.array(hC),createdAt:l.string().datetime()}),gC=l.object({projectId:l.string().uuid().optional().describe("Project to list threads for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of threads to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),status:l.enum(["regular","archived"]).optional().describe("Filter by thread status. 'regular' returns active threads, 'archived' returns archived threads.")}),sC=l.object({threads:l.array(ay).describe("The page of threads matching the query."),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),dC=l.object({threadId:l.string().uuid().describe("Thread ID returned by threads.list or threads.create.")}),bC=l.object({thread:ay.describe("The requested thread."),messages:l.array(cy).describe("Messages currently stored on the thread in chronological order.")}),yC=l.object({projectId:l.string().uuid().optional().describe("Project to create the thread in. Auto-filled from CLI and SDK context when omitted."),message:l.string().min(1,"Message cannot be empty").max(1e4,"Message cannot exceed 10000 characters").describe("Initial user message that starts the thread."),wait:l.boolean().default(!0).describe("Whether the server should wait for the agent run before responding."),timeoutSeconds:l.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling.")}),mC=pn.describe("Deferred run result for creating a thread."),pC=l.object({threadId:l.string().uuid().describe("Thread ID whose current processing status should be returned.")}),vC=l.object({status:l.enum(["idle","processing"]),lastRunStatus:l.enum(["error"]).nullable()}),IC=l.object({threadId:l.string().uuid().describe("Thread ID of the thread to update."),status:l.enum(["regular","archived"]).describe("New status for the thread. 'archived' hides the thread from the sidebar.")}),fC=l.object({thread:ay.describe("The updated thread.")}),ly=D({operationId:"threads.list",description:"List threads in a project, optionally filtered by status.",backend:"api",route:{method:"GET",path:"/threads",tags:["Threads"]},input:gC,output:sC,pagination:"cursor",async:"sync",examples:[{name:"active-threads",input:{projectId:"11111111-1111-4111-8111-111111111111",status:"regular",limit:10},output:{threads:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"API returning 500s",status:"regular",createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-01T00:05:00.000Z"}],nextCursor:null}}]}),uy=D({operationId:"threads.get",description:"Get a thread and its messages.",backend:"api",route:{method:"GET",path:"/threads/{threadId}",tags:["Threads"]},input:dC,output:bC,pagination:"none",async:"sync"}),hy=D({operationId:"threads.getStatus",description:"Get the current processing status for a thread.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/status",tags:["Threads"]},input:pC,output:vC,pagination:"none",async:"sync",examples:[{name:"processing-thread",input:{threadId:"22222222-2222-4222-8222-222222222222"},output:{status:"processing",lastRunStatus:null}}]}),gy=D({operationId:"threads.create",description:"Create a thread with an initial message and optionally wait for the agent response.",backend:"api",route:{method:"POST",path:"/threads",tags:["Threads"],successStatus:201},input:yC,output:mC,pagination:"none",async:"deferred",examples:[{name:"async-handoff",input:{projectId:"11111111-1111-4111-8111-111111111111",message:"Investigate elevated 500s in production.",wait:!1,timeoutSeconds:20},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]}),sy=D({operationId:"threads.update",description:"Update a thread's status.",backend:"api",route:{method:"PATCH",path:"/threads/{threadId}",tags:["Threads"]},input:IC,output:fC,pagination:"none",async:"sync",examples:[{name:"archive-thread",input:{threadId:"22222222-2222-4222-8222-222222222222",status:"archived"},output:{thread:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"API returning 500s",status:"archived",createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-01T00:10:00.000Z"}}}]}),VH={list:ly.contract,get:uy.contract,getStatus:hy.contract,create:gy.contract,update:sy.contract}});var kC,$C,wC,_C,B_,H_;var M_=d(()=>{Ie();Ne();Ra();dy();kC=l.object({threadId:l.string().uuid().describe("Thread ID to list messages for."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of messages to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),$C=l.object({messages:l.array(cy),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),wC=l.object({threadId:l.string().uuid().describe("Thread ID to append the message to."),message:l.string().min(1,"Message cannot be empty").max(1e4,"Message cannot exceed 10000 characters"),wait:l.boolean().default(!0).describe("Whether the server should wait for the appended message run before responding."),timeoutSeconds:l.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling.")}),_C=pn.describe("Deferred run result for appending a message to an existing thread."),B_=D({operationId:"messages.list",description:"List messages in a thread with cursor pagination.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/messages",tags:["Messages"]},input:kC,output:$C,pagination:"cursor",async:"sync",examples:[{name:"thread-messages",input:{threadId:"22222222-2222-4222-8222-222222222222",limit:2},output:{messages:[{id:"33333333-3333-4333-8333-333333333333",role:"user",content:[{type:"message",message:"What changed in the intake pipeline?"}],createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),H_=D({operationId:"messages.append",description:"Append a user message to an existing thread and trigger a deferred run.",backend:"api",route:{method:"POST",path:"/threads/{threadId}/messages",successStatus:201,tags:["Messages"]},input:wC,output:_C,pagination:"none",async:"deferred",examples:[{name:"append-processing",input:{threadId:"22222222-2222-4222-8222-222222222222",message:"Follow up on the intake backlog.",wait:!1,timeoutSeconds:20},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]})});var by,OC,SC,TC,PC,AC,DC,NC,yy,my,py,oM;var J_=d(()=>{Ie();Ne();Ua();by=l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional()}),OC=by.extend({role:oo.optional()}),SC=l.object({}),TC=l.object({organizations:l.array(OC).describe("Organizations available to the current credential.")}),PC=l.object({organizationId:l.string().min(1).describe("Organization ID to fetch.")}),AC=l.object({organization:by}),DC=l.object({organizationId:l.string().min(1).describe("Organization ID to update. SDK and CLI callers can auto-fill this before dispatch."),name:l.string().trim().min(1).max(100).describe("New organization name.")}),NC=l.object({organization:by.describe("Updated organization.")}),yy=D({operationId:"organizations.list",description:"List organizations available to the current credential.",backend:"api",route:{method:"GET",path:"/organizations",tags:["Organizations"]},input:SC,output:TC,pagination:"none",async:"sync"}),my=D({operationId:"organizations.get",description:"Get one organization by ID.",backend:"api",route:{method:"GET",path:"/organizations/{organizationId}",tags:["Organizations"]},input:PC,output:AC,pagination:"none",async:"sync"}),py=D({operationId:"organizations.update",description:"Update one organization.",backend:"api",route:{method:"PATCH",path:"/organizations/{organizationId}",tags:["Organizations"]},input:DC,output:NC,pagination:"none",async:"sync",examples:[{name:"rename-organization",input:{organizationId:"organization-123",name:"Observed Platform"},output:{organization:{id:"organization-123",name:"Observed Platform",slug:"acme",logo:null}}}]}),oM={list:yy.contract,get:my.contract,update:py.contract}});var Ka,vy,V_,q_,W_,Y_,Fa,Ga,LC;var Iy=d(()=>{Ie();Ne();Ka=l.enum(["us-east-1","us-east-2","us-west-1","us-west-2","eu-central-1","eu-central-2","eu-north-1","eu-south-1","eu-south-2","eu-west-1","eu-west-2","eu-west-3"]),vy=l.object({id:l.string().uuid(),organizationId:l.string().min(1),name:l.string(),region:Ka}),V_=l.object({organizationId:l.string().min(1).optional().describe("Organization to list projects for. Auto-filled from CLI and SDK context when omitted.")}),q_=l.object({projects:l.array(vy).describe("Projects visible within the selected organization.")}),W_=l.object({projectId:l.string().uuid().describe("Project ID to fetch.")}),Y_=l.object({project:vy}),Fa=D({operationId:"projects.list",description:"List projects in an organization.",backend:"api",route:{method:"GET",path:"/projects",tags:["Projects"]},input:V_,output:q_,pagination:"none",async:"sync"}),Ga=D({operationId:"projects.get",description:"Get one project by ID.",backend:"api",route:{method:"GET",path:"/projects/{projectId}",tags:["Projects"]},input:W_,output:Y_,pagination:"none",async:"sync"}),LC={list:Fa.contract,get:Ga.contract}});var fy,X_,Z_,Q_,eO,no,io,CC;var ky=d(()=>{Ie();Ne();fy=l.object({projectId:l.string().uuid().optional().describe("Project to search within. Auto-filled from CLI and SDK context when omitted."),query:l.string().trim().min(1,"Query must be at least 1 character").max(500,"Query must be at most 500 characters"),limit:l.coerce.number().min(1).max(100).default(20).describe("Maximum number of search results to return."),page:l.coerce.number().min(1).default(1).describe("One-based page number.")}),X_=fy.extend({status:l.enum(["regular","archived"]).optional().describe("Optional thread status filter.")}),Z_=fy.extend({threadId:l.string().uuid().optional().describe("Optional thread restriction for message search."),role:l.enum(["user","assistant"]).optional().describe("Optional message role filter.")}),Q_=l.object({threads:l.array(l.object({id:l.string().uuid(),projectId:l.string().uuid().optional(),title:l.string(),status:l.enum(["regular","archived"]),labels:l.array(l.string()),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),highlights:l.array(l.string()),score:l.number().optional()})),pagination:l.object({page:l.number(),limit:l.number(),totalResults:l.number(),totalPages:l.number()}).describe("Page-based pagination metadata for the current search result.")}),eO=l.object({messages:l.array(l.object({id:l.string().uuid(),threadId:l.string().uuid(),threadTitle:l.string(),role:l.enum(["user","assistant"]),content:l.string(),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),highlights:l.array(l.string()),score:l.number().optional()})),pagination:l.object({page:l.number(),limit:l.number(),totalResults:l.number(),totalPages:l.number()}).describe("Page-based pagination metadata for the current search result.")}),no=D({operationId:"search.threads",description:"Search threads within one project.",backend:"api",route:{method:"GET",path:"/search/threads",tags:["Search"]},input:X_,output:Q_,pagination:"page",async:"sync",examples:[{name:"search-open-incidents",input:{projectId:"11111111-1111-4111-8111-111111111111",query:"payment timeout",status:"regular",limit:10,page:1},output:{threads:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"Payment timeout in us-west-2",status:"regular",labels:["payments","timeout"],createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-02T00:00:00.000Z",highlights:["payment timeout"],score:123.45}],pagination:{page:1,limit:10,totalResults:1,totalPages:1}}}]}),io=D({operationId:"search.messages",description:"Search messages within one project.",backend:"api",route:{method:"GET",path:"/search/messages",tags:["Search"]},input:Z_,output:eO,pagination:"page",async:"sync",examples:[{name:"search-assistant-messages",input:{projectId:"11111111-1111-4111-8111-111111111111",query:"rollback",role:"assistant",limit:10,page:1},output:{messages:[{id:"33333333-3333-4333-8333-333333333333",threadId:"22222222-2222-4222-8222-222222222222",threadTitle:"Deployment rollback guidance",role:"assistant",content:"Rollback the ingestion deployment and confirm queue depth.",createdAt:"2026-01-02T00:00:00.000Z",updatedAt:"2026-01-02T00:00:00.000Z",highlights:["Rollback the ingestion deployment"],score:98.76}],pagination:{page:1,limit:10,totalResults:1,totalPages:1}}}]}),CC={threads:no.contract,messages:io.contract}});var tO,xC,zC,jC,EC,$y,wy,dM;var rO=d(()=>{Ie();Ne();tO=l.object({id:l.string().uuid(),projectId:l.string().uuid(),name:l.string(),description:l.string().nullable(),currentStatus:l.enum(["operational","degraded","outage"]).describe("Current health status of this component."),firstSeenAt:l.string().datetime(),lastSeenAt:l.string().datetime()}),xC=l.object({projectId:l.string().uuid().optional().describe("Project to list status components for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of components to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),zC=l.object({statusComponents:l.array(tO),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),jC=l.object({componentId:l.string().uuid().describe("Status component ID to retrieve.")}),EC=l.object({statusComponent:tO}),$y=D({operationId:"statusComponents.list",description:"List status page components in a project.",backend:"api",route:{method:"GET",path:"/status-components",tags:["Status Components"]},input:xC,output:zC,pagination:"cursor",async:"sync"}),wy=D({operationId:"statusComponents.get",description:"Get a single status component by ID.",backend:"api",route:{method:"GET",path:"/status-components/{componentId}",tags:["Status Components"]},input:jC,output:EC,pagination:"none",async:"sync"}),dM={list:$y.contract,get:wy.contract}});var oO;var nO=d(()=>{oO=["onboarding","setup"]});var iO,aO,cO,lO,vn;var _y=d(()=>{nO();Ie();Ne();iO=l.enum(oO),aO=l.object({id:l.string().describe("Unique task identifier (e.g. install_github_app)."),label:l.string().describe("Short human-readable task name."),description:l.string().describe("Explanation of what needs to be completed to satisfy this task."),instructions:l.string().describe("Step-by-step instructions for completing this task."),completed:l.boolean().describe("Whether the task has been completed."),completedAt:l.string().datetime().nullable().describe("ISO 8601 timestamp of when the task was completed, or null."),category:iO.describe("Task category: onboarding (core setup steps) or setup (additional configuration).")}),cO=l.object({projectId:l.string().uuid().optional().describe("Project to list tasks for. Auto-filled from CLI and SDK context when omitted.")}),lO=l.object({tasks:l.array(aO).describe("All onboarding and setup tasks with their current completion status.")}),vn=D({operationId:"tasks.list",description:"List all onboarding and setup tasks for a project, including their current completion status and a description of what is required to complete each task.",backend:"api",route:{method:"GET",path:"/tasks",tags:["Tasks"]},input:cO,output:lO,pagination:"none",async:"sync"})});var Oy;var uO=d(()=>{Bb();t_();Yb();Zb();Ua();K_();M_();J_();Iy();Ra();ky();rO();_y();dy();Oy={me:Qb.contract,logs:{query:Zr.contract,schema:Qr.contract,volume:eo.contract,patterns:to.contract,nativeQuery:ro.contract},dataSources:{listTypes:ka.contract,listConnections:Mr.contract,getConnection:$a.contract,createConnection:Jr.contract,disconnectConnection:Ta.contract,listStreams:wa.contract,createStream:_a.contract,getStream:Oa.contract,deleteStream:Sa.contract},organizations:{list:yy.contract,get:my.contract,update:py.contract},members:{list:ey.contract,updateRole:ty.contract,remove:ry.contract},publicKeys:{list:Vr.contract,get:qr.contract,create:Wr.contract,update:Yr.contract,deactivate:Xr.contract},secretKeys:{list:La.contract,get:Ca.contract,create:xa.contract,update:za.contract,delete:ja.contract},projects:{list:Fa.contract,get:Ga.contract},search:{threads:no.contract,messages:io.contract},messages:{list:B_.contract,append:H_.contract},threads:{list:ly.contract,get:uy.contract,getStatus:hy.contract,create:gy.contract,update:sy.contract},runs:{list:oy.contract,listForThread:ny.contract,get:iy.contract},issues:{list:Hb.contract,get:Mb.contract,resolve:Jb.contract,ignore:Vb.contract,unignore:qb.contract},tasks:{list:vn.contract},statusComponents:{list:$y.contract,get:wy.contract}}});var Sy=d(()=>{uO();Bb();Yb();Zb();Iy();ky();_y()});var UC,Xq,RC,Ba=(e)=>{return RC.includes(e)};var Ty=d(()=>{UC={"eu-central-1":"EU Central (Frankfurt)"},Xq={"us-west-2":"US West","us-east-1":"US East","eu-central-1":UC["eu-central-1"]},RC=["us-west-2","us-east-1","eu-central-1"]});var Py,Ay,Dy,hO;var gO=d(()=>{Ie();Py=l.object({severities:l.array(l.string()).optional().describe("Limit results to the listed severities."),services:l.array(l.string()).optional().describe("Limit results to the listed service names."),environments:l.array(l.string()).optional().describe("Limit results to the listed deployment environments."),searchTerm:l.string().optional().describe("Case-insensitive substring match against the log body."),traceId:l.string().optional().describe("Limit results to one trace ID.")}),Ay=l.object({service:l.string(),namespace:l.string(),environment:l.string(),host:l.string(),container:l.string(),pod:l.string()}),Dy=l.object({id:l.string(),timestamp:l.string().datetime(),severity:l.string(),body:l.string(),service:l.string(),traceId:l.string(),spanId:l.string(),attributes:l.record(l.string(),l.string()),resource:Ay}),hO=l.object({type:l.literal("logs"),timestamp:l.string().datetime(),data:l.array(Dy)})});var KC="https://{region}.intake.sazabi.com",FC="wss://{region}.tail.sazabi.com",GC=3,dO=500,bO="sazabi.public_key",BC=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},yO=(e)=>{let t=BC(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},HC,MC,JC,mO=(e)=>{let t=new Map;return{tail:async(o)=>{let n=await ex(e.credentialProvider,o.projectId,"logs.tail"),r=await tx(e,t,n,o.region,"logs.tail"),i=VC({projectId:n,region:r,filters:o.filters,tailBaseUrl:e.tailBaseUrl}),a=await e.credentialProvider.getToken(),c=e.webSocket??globalThis.WebSocket;if(!c)throw Error("WebSocket transport is not available in this runtime.");return nx({token:a,url:i,signal:o.signal,webSocket:c})},forward:async(o)=>{let n=await rx(e,t,o.projectId??await e.credentialProvider.getProjectId?.(),o.region,"logs.forward"),r=YC(n,e.intakeBaseUrl),i=e.fetch??globalThis.fetch,a=ZC(o.logs,o.publicKey),c=lx(a);return await cx(i,r,a),{forwardedCount:c,failedCount:0}}}},VC=(e)=>{let t=(e.tailBaseUrl??FC).replace("{region}",e.region),o=qC(t)??new URL(t);o.searchParams.set("projectId",e.projectId);let n=WC(e.filters);if(n)o.searchParams.set("filters",n);return o.toString()},qC=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!yO(t.hostname))return;return t.protocol="ws:",t.pathname="/tail",t},WC=(e)=>{if(!e)return;let t=Object.entries(e).filter(([,o])=>o!==void 0&&(!Array.isArray(o)||o.length>0)&&o!=="");if(t.length===0)return;return JSON.stringify(Object.fromEntries(t))},YC=(e,t)=>{let o=(t??KC).replace("{region}",e),n=o.endsWith("/")?o.slice(0,-1):o,r=XC(n);if(r)return r;let i=n.match(/^https:\/\/([a-z0-9-]+)\.intake\.([a-z0-9.]+)$/);return`${i?`https://otlp.${i[1]}.intake.${i[2]}`:n}/v1/logs`},XC=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!yO(t.hostname))return;return t.pathname="/adapters/otlp",t.toString()},ZC=(e,t)=>{let o=e.resourceLogs;if(!o||o.length===0)return{...e,resourceLogs:[{resource:{attributes:[pO(t)]},scopeLogs:[]}]};return{...e,resourceLogs:o.map((n)=>({...n,resource:{...n.resource,attributes:QC(n.resource?.attributes,t)}}))}},QC=(e,t)=>{return[...(e??[]).filter((n)=>n?.key!==bO),pO(t)]},pO=(e)=>({key:bO,value:{stringValue:e}}),ex=async(e,t,o)=>{let n=t??await e.getProjectId?.();if(n)return n;throw IO(o,"Project ID is required",["projectId"])},tx=async(e,t,o,n,r)=>{let i=n??await vO(e,t,o);return ox(i,r)},rx=async(e,t,o,n,r)=>{if(n)return n;if(!o)throw IO(r,"Project ID is required",["projectId"]);return vO(e,t,o)},vO=async(e,t,o)=>{let n=t.get(o);if(n)return n;let r=e.raw.projects.get({projectId:o}).then((i)=>i.project.region);t.set(o,r);try{return await r}catch(i){throw t.delete(o),i}},ox=(e,t)=>{if(Ba(e))return e;throw new ye("BAD_REQUEST",{message:`Log tail is not supported for project region ${e}.`,data:{operationId:t,missingContext:[]}})},nx=async(e)=>{let t=[],o=[],n=!1,r=!1,i,a=0,c,u=(y)=>{if(n)return;n=!0,i=y;while(o.length>0){let _=o.shift();if(_)_({value:void 0,done:!0})}},h=(y)=>{let _=o.shift();if(_){_({value:y,done:!1});return}t.push(y)},s=()=>{if(c&&c.readyState<c.CLOSING)c.close(1000,"Client closed stream")},g=async()=>{await new Promise((y,_)=>{let S=!1,H;try{H=new e.webSocket(e.url,[e.token])}catch(F){_(F instanceof Error?F:Error("Failed to open WebSocket connection."));return}c=H,H.onopen=()=>{if(a=0,!S)S=!0,y()},H.onmessage=(F)=>{let le=ix(F.data);for(let oe of le)h(oe)},H.onerror=()=>{if(!S)S=!0,_(Error("WebSocket connection failed. Check the close event for details."))},H.onclose=(F)=>{if(!S){S=!0,_(sO(F.code,F.reason));return}if(r||n){u();return}if(ax(F.code)&&a<GC){a+=1,globalThis.setTimeout(()=>{g().catch((le)=>{u(le instanceof Error?le:Error(String(le)))})},dO*2**(a-1));return}u(sO(F.code,F.reason))}})};e.signal?.addEventListener("abort",()=>{r=!0,s(),u()},{once:!0}),await g();let b={[Symbol.asyncIterator](){return b},next:async()=>{if(t.length>0)return{value:t.shift(),done:!1};if(n){if(i)throw i;return{value:void 0,done:!0}}return new Promise((y)=>{o.push(y)}).then((y)=>{if(y.done&&i)throw i;return y})},return:async()=>{return r=!0,s(),u(),{value:void 0,done:!0}},throw:async(y)=>{throw r=!0,s(),u(y instanceof Error?y:Error(String(y))),y}};return b},ix=(e)=>{let t=(()=>{if(typeof e==="string")return e;if(e instanceof ArrayBuffer)return new TextDecoder().decode(e);return null})();if(!t)return[];try{let o=hO.safeParse(JSON.parse(t));if(!o.success)return[];return o.data.data}catch{return[]}},ax=(e)=>{return![1000,1001,1008,4001,4003,4004].includes(e)},sO=(e,t)=>{if(t)return Error(t);let o={1000:"Normal closure",1001:"Endpoint going away",1002:"Protocol error",1003:"Unsupported data",1006:"Connection closed abnormally (no close frame received)",1007:"Invalid payload data",1008:"Policy violation",1009:"Message too big",1010:"Missing extension",1011:"Internal server error",1015:"TLS handshake failure",4001:"Authentication failed - check your credential",4003:"Forbidden - credential may not have access to this project",4004:"Project not found"}[e]??`Unknown close code: ${e}`;return Error(`Connection closed: ${o}`)},cx=async(e,t,o,n=3,r=1e4)=>{let i;for(let a=0;a<=n;a+=1){let c=new AbortController,u=globalThis.setTimeout(()=>c.abort(),r);try{let h=await e(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o),signal:c.signal});if(h.ok)return;let s=await h.text();if(h.status===401||h.status===403)throw Error("Authentication failed. Check your public key.");if(h.status>=400&&h.status<500&&h.status!==429)throw Error(`Client error (${h.status}): ${s}`);i=Error(h.status===429?`Rate limited (429): ${s}`:`Server error (${h.status}): ${s}`)}catch(h){let s=h instanceof Error?h.message:String(h);if(s.startsWith("Authentication failed")||s.startsWith("Client error ("))throw h instanceof Error?h:Error(s);i=h instanceof Error&&h.name==="AbortError"?Error("Request timed out"):h instanceof Error?h:Error(String(h))}finally{globalThis.clearTimeout(u)}if(a<n)await ux(dO*2**a)}throw Error(`Failed after ${n+1} attempts: ${i?.message??"Unknown error"}`)},lx=(e)=>{return e.resourceLogs?.reduce((t,o)=>t+(o.scopeLogs?.reduce((n,r)=>n+(r.logRecords?.length??0),0)??0),0)??0},ux=async(e)=>{await new Promise((t)=>globalThis.setTimeout(t,e))},IO=(e,t,o)=>{return new ye("BAD_REQUEST",{message:t,data:{operationId:e,missingContext:o}})};var Ny=d(()=>{gr();Ty();gO();Ie();HC=l.object({projectId:l.string().uuid().optional().describe("Project to tail logs for. Auto-filled from CLI and SDK context when omitted."),filters:Py.optional().describe("Optional filters applied by the tail WebSocket service.")}),MC=l.object({publicKey:l.string().min(1).describe("Public key for intake auth. Create or list one via the public key endpoints."),logs:l.custom((e)=>typeof e==="object"&&e!==null).describe("OTLP logs export request payload to send to the intake service.")}),JC=l.object({forwardedCount:l.number().int().nonnegative().describe("Number of log records accepted by the intake request."),failedCount:l.number().int().nonnegative().describe("Number of log records rejected by the intake request.")})});var hx="https://api.sazabi.com",kO="https://api.platform.sazabi.com",$O="sazabi-cli",gx="urn:ietf:params:oauth:grant-type:device_code",wO=(e)=>{let t=Cc(new Jc(Oy,{url:sx(e.apiBaseUrl??hx),headers:async()=>new Headers({authorization:`Bearer ${await e.credentialProvider.getToken()}`}),fetch:e.fetch,customErrorResponseBodyDecoder:(n,r)=>{let i=Ix(n);if(!i)return null;return new ye(i.code,{message:i.message,status:r.status,data:{operationId:i.operationId,missingContext:i.missingContext}})}})),o=mO({raw:t,credentialProvider:e.credentialProvider,fetch:e.fetch,intakeBaseUrl:e.intakeBaseUrl,tailBaseUrl:e.tailBaseUrl,webSocket:e.webSocket});return{raw:t,me:async()=>t.me({}),logs:{...o,query:async(n={})=>t.logs.query(await fe(e.credentialProvider,n,Zr.operationId)),schema:async(n={})=>t.logs.schema(await fe(e.credentialProvider,n,Qr.operationId)),volume:async(n)=>t.logs.volume(await fe(e.credentialProvider,n,eo.operationId)),patterns:async(n={})=>t.logs.patterns(await fe(e.credentialProvider,n,to.operationId)),nativeQuery:async(n)=>t.logs.nativeQuery(await fe(e.credentialProvider,n,ro.operationId))},organizations:{list:async()=>t.organizations.list({}),get:async(n)=>t.organizations.get(n),update:async(n)=>t.organizations.update(await bx(e.credentialProvider,n))},members:{list:async(n={})=>t.members.list(await Ha(e.credentialProvider,n)),updateRole:async(n)=>t.members.updateRole(await Ha(e.credentialProvider,n)),remove:async(n)=>{let r=await Ha(e.credentialProvider,n);return t.members.remove({params:{userId:r.userId},query:{organizationId:r.organizationId}})}},publicKeys:{list:async(n={})=>t.publicKeys.list(await fe(e.credentialProvider,n,Vr.operationId)),get:async(n)=>t.publicKeys.get(await fe(e.credentialProvider,n,qr.operationId)),create:async(n)=>t.publicKeys.create(await fe(e.credentialProvider,n,Wr.operationId)),update:async(n)=>t.publicKeys.update(await fe(e.credentialProvider,n,Yr.operationId)),deactivate:async(n)=>{let r=await fe(e.credentialProvider,n,Xr.operationId);return t.publicKeys.deactivate({params:{keyId:r.keyId},query:{projectId:r.projectId}})}},secretKeys:{list:async(n={})=>t.secretKeys.list(n),get:async(n)=>t.secretKeys.get(n),create:async(n)=>t.secretKeys.create(n),update:async(n)=>t.secretKeys.update(n),delete:async(n)=>{await t.secretKeys.delete({params:{keyId:n.keyId}})}},search:{threads:async(n)=>t.search.threads(await fe(e.credentialProvider,n,no.operationId)),messages:async(n)=>t.search.messages(await fe(e.credentialProvider,n,io.operationId))},projects:{list:async(n={})=>t.projects.list(await dx(e.credentialProvider,n)),get:async(n)=>t.projects.get(n)},messages:{list:async(n)=>t.messages.list(n),append:async(n)=>fO(t,await t.messages.append(vx(n)))},threads:{list:async(n={})=>t.threads.list(await yx(e.credentialProvider,n)),get:async(n)=>t.threads.get(n),getStatus:async(n)=>t.threads.getStatus(n),create:async(n)=>fO(t,await t.threads.create(await px(e.credentialProvider,n))),update:async(n)=>t.threads.update(n)},runs:{list:async(n={})=>t.runs.list(await mx(e.credentialProvider,n)),listForThread:async(n)=>t.runs.listForThread(n),get:async(n)=>t.runs.get(n)},dataSources:{listTypes:async()=>t.dataSources.listTypes({}),connections:{list:async(n={})=>t.dataSources.listConnections(await fe(e.credentialProvider,n,Mr.operationId)),get:async(n)=>t.dataSources.getConnection(n),create:async(n)=>t.dataSources.createConnection(await fe(e.credentialProvider,n,Jr.operationId)),disconnect:async(n)=>t.dataSources.disconnectConnection(n)},streams:{list:async(n)=>t.dataSources.listStreams(n),get:async(n)=>t.dataSources.getStream(n),create:async(n)=>t.dataSources.createStream(n),delete:async(n)=>t.dataSources.deleteStream(n)}},issues:{list:async(n={})=>t.issues.list(await fe(e.credentialProvider,n,"issues.list")),get:async(n)=>t.issues.get(n),resolve:async(n)=>t.issues.resolve(n),ignore:async(n)=>t.issues.ignore(n),unignore:async(n)=>t.issues.unignore(n)},statusComponents:{list:async(n={})=>t.statusComponents.list(await fe(e.credentialProvider,n,"statusComponents.list")),get:async(n)=>t.statusComponents.get(n)},tasks:{list:async(n={})=>t.tasks.list(await fe(e.credentialProvider,n,vn.operationId))}}},Cy=async(e={})=>{let t=await SO(e.fetch)(_O(e.apiBaseUrl??kO,"/device/code"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({client_id:e.clientId??$O,...e.scope?{scope:e.scope}:{}})}),o=await t.json();if(!t.ok)throw fx(o,t.status);let n=o;return{deviceCode:ao(n.device_code,"device_code"),userCode:ao(n.user_code,"user_code"),verificationUri:ao(n.verification_uri,"verification_uri"),verificationUriComplete:ao(n.verification_uri_complete,"verification_uri_complete"),expiresIn:Ly(n.expires_in,"expires_in"),interval:Ly(n.interval,"interval")}},xy=async(e)=>{let t=await SO(e.fetch)(_O(e.apiBaseUrl??kO,"/device/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({grant_type:gx,device_code:e.deviceCode,client_id:e.clientId??$O})}),o=await t.json();if(t.ok){let r=o;return{status:"authorized",accessToken:ao(r.access_token,"access_token"),tokenType:ao(r.token_type,"token_type"),expiresIn:Ly(r.expires_in,"expires_in"),scope:typeof r.scope==="string"?r.scope:""}}let n=OO(o);if(!n)throw Error(`Device authorization failed with status ${t.status}`);if(n.error==="authorization_pending")return{status:"pending"};if(n.error==="slow_down")return{status:"pending",interval:10};if(n.error==="access_denied")return{status:"denied",message:n.errorDescription};if(n.error==="expired_token"||n.error==="invalid_grant")return{status:"expired",message:n.errorDescription};throw Error(n.errorDescription)},sx=(e)=>{let t=e.replace(/\/+$/,"");return t.endsWith("/v1")?t:`${t}/v1`},_O=(e,t)=>{return`${e.replace(/\/+$/,"")}/api/auth${t}`},dx=async(e,t)=>{return Ha(e,t)},Ha=async(e,t)=>{let o=t.organizationId??await e.getOrganizationId?.();return o?{...t,organizationId:o}:t},bx=async(e,t)=>{let o=t.organizationId??await e.getOrganizationId?.();if(!o)throw new ye("BAD_REQUEST",{message:"Organization ID is required",data:{operationId:"organizations.update",missingContext:["organizationId"]},status:400});return{...t,organizationId:o}},fe=async(e,t,o)=>{let n=t.projectId??await e.getProjectId?.();if(!n)throw new ye("BAD_REQUEST",{message:"Project ID is required",data:{operationId:o,missingContext:["projectId"]},status:400});return{...t,projectId:n}},yx=async(e,t)=>{let o=t.projectId??await e.getProjectId?.();return o?{...t,projectId:o}:t},mx=async(e,t)=>{let o=t.projectId??await e.getProjectId?.();return o?{...t,projectId:o}:t},px=async(e,t)=>{let o=t.projectId??await e.getProjectId?.();return o?{...t,projectId:o}:t},vx=(e)=>{return{threadId:e.threadId,message:e.message,wait:e.wait??!0,timeoutSeconds:e.timeoutSeconds??20}},Ix=(e)=>{if(!e||typeof e!=="object")return null;let t=e;if(typeof t.code!=="string"||typeof t.message!=="string"||typeof t.operationId!=="string")return null;return{code:t.code,message:t.message,operationId:t.operationId,missingContext:Array.isArray(t.missingContext)?t.missingContext.filter((o)=>typeof o==="string"):[]}},OO=(e)=>{if(!e||typeof e!=="object")return null;let t=e;if(typeof t.error!=="string"||typeof t.error_description!=="string")return null;return{error:t.error,errorDescription:t.error_description}},fx=(e,t)=>{let o=OO(e);return Error(o?.errorDescription??`Device authorization failed with status ${t}`)},SO=(e)=>{return e??globalThis.fetch},fO=(e,t)=>({result:t,poll:()=>e.runs.get({runId:t.runId}),waitForCompletion:async(o={})=>kx(e,t,o)}),kx=async(e,t,o)=>{if(t.completed)return t;let n=o.intervalMs??2000,r=Date.now(),i=t;while(!i.completed){if(o.timeoutMs!==void 0&&Date.now()-r>=o.timeoutMs)return i;await $x(n),i=await e.runs.get({runId:i.runId})}return i},$x=async(e)=>{await new Promise((t)=>globalThis.setTimeout(t,e))},ao=(e,t)=>{if(typeof e==="string")return e;throw Error(`Expected '${t}' to be a string.`)},Ly=(e,t)=>{if(typeof e==="number")return e;throw Error(`Expected '${t}' to be a number.`)};var zy=d(()=>{gr();Bm();Sy();Ny();Ny()});var ke=(e)=>({success:!0,value:e}),de=(e,t,o)=>({success:!1,error:e,...t!==void 0&&{statusCode:t},...o!==void 0&&{errorPayload:o}}),f=(e,t,o)=>{if(!e.success){let n=`${t}: ${e.error}`;if(o)return v(e.errorPayload??n);return p(n)}return e.value};var X=d(()=>{B()});var _x="https://api.sazabi.com",z=async(e)=>{try{return ke(await e())}catch(t){let o=Ox(t),n=Sx(t),r=t instanceof Error?t.message:String(t);return de(r,n,o)}},Ox=(e)=>{if(!e||typeof e!=="object")return;let t=e;if(typeof t.code!=="string"||typeof t.message!=="string"||!t.data||typeof t.data!=="object")return;let o=t.data;if(typeof o.operationId!=="string")return;return{code:t.code,message:t.message,operationId:o.operationId,missingContext:Array.isArray(o.missingContext)?o.missingContext.filter((n)=>typeof n==="string"):[]}},Sx=(e)=>{if(!e||typeof e!=="object")return;let t=e;return typeof t.status==="number"?t.status:void 0},ft=(e)=>{let t=wO({apiBaseUrl:e.baseUrl??_x,credentialProvider:{getToken:()=>e.token,getOrganizationId:()=>e.organizationId,getProjectId:()=>e.projectId},intakeBaseUrl:e.intakeBaseUrl,tailBaseUrl:e.tailBaseUrl});return{me:()=>z(()=>t.me()),logs:{tail:(o)=>z(()=>t.logs.tail(o)),forward:(o)=>z(()=>t.logs.forward(o)),query:(o={})=>z(()=>t.logs.query(o)),schema:(o={})=>z(()=>t.logs.schema(o)),volume:(o)=>z(()=>t.logs.volume(o)),patterns:(o={})=>z(()=>t.logs.patterns(o)),nativeQuery:(o)=>z(()=>t.logs.nativeQuery(o))},organizations:{list:()=>z(()=>t.organizations.list()),get:(o)=>z(()=>t.organizations.get({organizationId:o})),rename:(o,n)=>z(()=>t.organizations.update({organizationId:n,name:o}))},members:{list:(o={})=>z(()=>t.members.list(o)),updateRole:(o,n,r)=>z(()=>t.members.updateRole({organizationId:r,userId:o,role:n})),remove:(o,n)=>z(()=>t.members.remove({organizationId:n,userId:o}))},projects:{list:(o={})=>z(()=>t.projects.list(o)),get:(o)=>z(()=>t.projects.get({projectId:o}))},threads:{list:(o={})=>z(()=>t.threads.list(o)),get:(o)=>z(()=>t.threads.get({threadId:o})),create:(o)=>z(()=>t.threads.create(o)),getStatus:(o)=>z(()=>t.threads.getStatus({threadId:o})),update:(o,n)=>z(()=>t.threads.update({threadId:o,status:n}))},messages:{list:(o,n={})=>z(()=>t.messages.list({threadId:o,...n})),append:(o,n,r,i)=>z(()=>t.messages.append({threadId:o,message:n,wait:r,timeoutSeconds:i}))},runs:{get:(o)=>z(()=>t.runs.get({runId:o}))},search:{threads:(o)=>z(()=>t.search.threads(o)),messages:(o)=>z(()=>t.search.messages(o))},publicKeys:{list:(o)=>z(()=>t.publicKeys.list(o)),get:(o,n)=>z(()=>t.publicKeys.get(n?{keyId:o,projectId:n}:{keyId:o})),create:(o)=>z(()=>t.publicKeys.create(o)),update:(o)=>z(()=>t.publicKeys.update(o)),deactivate:(o)=>z(()=>t.publicKeys.deactivate(o))},secretKeys:{list:(o)=>z(()=>t.secretKeys.list(o)),get:(o)=>z(()=>t.secretKeys.get({keyId:o})),create:(o)=>z(()=>t.secretKeys.create(o)),update:(o)=>z(()=>t.secretKeys.update(o)),delete:(o)=>z(()=>t.secretKeys.delete(o))},issues:{list:(o={})=>z(()=>t.issues.list(o)),get:(o)=>z(()=>t.issues.get({issueId:o})),resolve:(o)=>z(()=>t.issues.resolve({issueId:o})),ignore:(o)=>z(()=>t.issues.ignore({issueId:o})),unignore:(o)=>z(()=>t.issues.unignore({issueId:o}))},statusComponents:{list:(o={})=>z(()=>t.statusComponents.list(o)),get:(o)=>z(()=>t.statusComponents.get({componentId:o}))},tasks:{list:(o={})=>z(()=>t.tasks.list(o))},dataSources:{listTypes:()=>z(()=>t.dataSources.listTypes()),connections:{list:(o)=>z(()=>t.dataSources.connections.list(o)),get:(o)=>z(()=>t.dataSources.connections.get({connectionId:o})),create:(o)=>z(()=>t.dataSources.connections.create(o)),disconnect:(o)=>z(()=>t.dataSources.connections.disconnect({connectionId:o}))},streams:{list:(o)=>z(()=>t.dataSources.streams.list({connectionId:o})),get:(o)=>z(()=>t.dataSources.streams.get({streamId:o})),create:(o)=>z(()=>t.dataSources.streams.create(o)),delete:(o)=>z(()=>t.dataSources.streams.delete({streamId:o}))}}}};var In=d(()=>{zy();X()});var TO;var PO=d(()=>{TO={version:2,activeProfile:"default",profiles:{default:{}}}});import*as kt from"node:fs";import*as AO from"node:os";import*as Uy from"node:path";var Le=(e)=>{if(e===void 0||e===null)return;if(typeof e==="string")return e.length>0?e:void 0;return},jy,co,Tx=()=>{if(!kt.existsSync(jy))kt.mkdirSync(jy,{recursive:!0,mode:448})},Ey,DO=(e)=>{Ey=e},NO=(e)=>({token:Le(e.token),activeOrganizationId:Le(e.activeOrganizationId??e.organizationId),organizationName:Le(e.organizationName),activeProjectId:Le(e.activeProjectId??e.defaultProjectId),apiBaseUrl:Le(e.apiBaseUrl),authBaseUrl:Le(e.authBaseUrl),webBaseUrl:Le(e.webBaseUrl),intakeBaseUrl:Le(e.intakeBaseUrl),tailBaseUrl:Le(e.tailBaseUrl),apiDomain:Le(e.apiDomain),webDomain:Le(e.webDomain),intakeDomain:Le(e.intakeDomain),tailDomain:Le(e.tailDomain),forwardPublicKey:Le(e.forwardPublicKey)}),Px=(e)=>({version:2,activeProfile:"default",profiles:{default:NO(e)}}),Ax=(e)=>{let t=Le(e.activeProfile)??"default",o=typeof e.profiles==="object"&&e.profiles!==null?e.profiles:{},n={};for(let[r,i]of Object.entries(o)){if(typeof i!=="object"||i===null)continue;n[r]=NO(i)}if(!n[t])n[t]={};return{version:2,activeProfile:t,profiles:n}},ie=()=>{try{if(!kt.existsSync(co))return ke(TO);let e=kt.readFileSync(co,"utf-8"),t=JSON.parse(e),o=typeof t.version==="number"?t.version:void 0;if(o!==void 0&&o>2)return de("Settings file requires a newer CLI version. Please upgrade.");if(o===2)return ke(Ax(t));let n=Px(t),r=me(n);if(!r.success)return r;return ke(n)}catch(e){let t=e instanceof Error?e.message:String(e);return de(`Failed to read settings: ${t}`)}},me=(e)=>{try{return Tx(),kt.writeFileSync(co,JSON.stringify(e,null,2),{encoding:"utf-8",mode:384}),ke(void 0)}catch(t){let o=t instanceof Error?t.message:String(t);return de(`Failed to write settings: ${o}`)}},ut=(e,t)=>{if(t)return t;if(Ey)return Ey;let o=process.env.SAZABI_PROFILE?.trim();if(o)return o;return e.activeProfile??"default"},Ze=(e,t)=>{let o=ut(e,t),n=e.profiles[o];if(n)return ke(n);if(o==="default")return ke({});return de(`Profile '${o}' does not exist. Run 'sazabi profiles create ${o}' first.`)},$t=()=>{let e=ie();if(!e.success)return e;return Ze(e.value)},Re=(e,t,o)=>{let n=ut(e,o);if(!e.profiles[n])return de(`Profile '${n}' does not exist. Run 'sazabi profiles create ${n}' first.`);return ke({...e,profiles:{...e.profiles,[n]:{...e.profiles[n],...t}}})};var Ve=d(()=>{PO();X();jy=Uy.join(AO.homedir(),".sazabi"),co=Uy.join(jy,"settings.json")});var ht=(e)=>{let{cliFlag:t,globalUrl:o,globalDomain:n,buildUrlFromDomain:r,defaultUrl:i}=e;if(t)return t;let a=process.env.SAZABI_API_URL?.trim();if(a)return a;if(o)return o;if(n)return r(n);return i},N=(e)=>{let{tokenFlag:t,organizationIdFlag:o,projectIdFlag:n,jsonMode:r}=e,i=t?.trim(),a=process.env.SAZABI_TOKEN?.trim(),c=process.env.SAZABI_ORGANIZATION_ID?.trim(),u=process.env.SAZABI_PROJECT_ID?.trim(),h=f($t(),"Failed to read settings",r),s=h.token?.trim(),g=(i&&i.length>0?i:void 0)||(a&&a.length>0?a:void 0)||s,b=i&&i.length>0?"flag":a&&a.length>0?"environment":"settings";if(!g||g.length===0){if(r)return v("Not authenticated. Set SAZABI_TOKEN, pass --token, run 'sazabi auth login', or run 'sazabi auth save <token>'.");return p("Not authenticated. Set SAZABI_TOKEN, pass --token, run 'sazabi auth login', or run 'sazabi auth save <token>'.")}let y,_;if(o)y=o,_="flag";else if(c&&c.length>0)y=c,_="environment";else if(h.activeOrganizationId)y=h.activeOrganizationId,_="settings";let S,H;if(n)S=n,H="flag";else if(u&&u.length>0)S=u,H="environment";else if(h.activeProjectId)S=h.activeProjectId,H="settings";return{token:g,type:"token",projectId:S,organizationId:y,tokenSource:b,organizationSource:_,projectSource:H}},L=(e)=>{let t=f($t(),"Failed to read settings",e.jsonMode),o=ht({cliFlag:e.apiBaseUrlFlag,globalUrl:t.apiBaseUrl,globalDomain:t.apiDomain,buildUrlFromDomain:(n)=>`https://api.${n}`,defaultUrl:"https://api.sazabi.com"});return ft({token:e.token,baseUrl:o,organizationId:e.organizationId,projectId:e.projectId})},LO,Ry,Ja=async(e)=>{let t=f($t(),"Failed to read settings",e.jsonMode),o=ht({cliFlag:e.apiBaseUrlFlag,globalUrl:t.apiBaseUrl,globalDomain:t.apiDomain,buildUrlFromDomain:(u)=>`https://api.${u}`,defaultUrl:"https://api.sazabi.com"}),n=`${e.token}@${o}@${e.projectId??""}`,r=LO.get(n);if(r)return r;let i=Ry.get(n);if(i)return i;if(!e.projectId){if(e.jsonMode)return v("Project ID is required. Run 'sazabi projects use <project-id>' or set SAZABI_PROJECT_ID.");return p("Project ID is required. Run 'sazabi projects use <project-id>' or set SAZABI_PROJECT_ID.")}let a=e.projectId,c=(async()=>{let h=await ft({token:e.token,baseUrl:o,projectId:a}).projects.get(a),g=f(h,"Failed to fetch project info",e.jsonMode).project;return LO.set(n,g),g})();Ry.set(n,c);try{return await c}finally{Ry.delete(n)}},Ma=(e)=>{let t=e.trim().toLowerCase(),o=/^[a-z][a-z0-9+.-]*:\/\//.test(t)?t:`https://${t}`,n=t;try{n=new URL(o).hostname.toLowerCase()}catch{n=t.replace(/^[a-z][a-z0-9+.-]*:\/\//,"").replace(/[/?#].*$/,"").replace(/:\d+$/,"")}return`https://app.${n.replace(/^(?:app\.)+/,"")}`},fn=(e)=>{let t=(n)=>n.replace(/\/+$/,"");if(e)return t(e);let o=f($t(),"Failed to read settings");if(o.webBaseUrl)return t(o.webBaseUrl);if(o.webDomain)return Ma(o.webDomain);if(o.apiDomain)return Ma(o.apiDomain);return"https://app.sazabi.com"},wt=(e,t,o,n)=>{let r=`${fn(o)}/projects/${e}/threads/${t}`;return n?`${r}?messageId=${encodeURIComponent(n)}`:r},CO=(e,t)=>{return`https://otlp.${t}.intake.${e}`};var re=d(()=>{B();In();X();Ve();LO=new Map,Ry=new Map});var rc,rT=(e)=>{rc.set(e.name,e)},oc=(e)=>{return rc.get(e)},kn=()=>{return Array.from(rc.values())},oT=(e)=>{return rc.has(e)};var Vy=d(()=>{rc=new Map});async function Xy(e){let t=await e.publicKeys.list({limit:20});if(!t.success)return[];return t.value.publicKeys.map((o)=>({value:o.id,description:o.name}))}async function Zy(e){let t=await e.secretKeys.list({limit:20});if(!t.success)return[];return t.value.secretKeys.map((o)=>({value:o.id,description:o.name}))}async function WE(e){let t=await e.dataSources.connections.list();if(!t.success)return[];return t.value.connections.map((o)=>({value:o.id,description:o.displayName??void 0}))}async function aT(e){let t=await e.members.list();if(!t.success)return[];return t.value.members.map((o)=>({value:o.userId,description:o.name??o.email}))}var VE=3000,qE,cT=async(e,t,o)=>{try{let n=qE[e]?.[t];if(!n)return[];let r=$t();if(!r.success)return[];let i=r.value,a=process.env.SAZABI_TOKEN?.trim()||i.token?.trim();if(!a)return[];let c=ht({globalUrl:i.apiBaseUrl,globalDomain:i.apiDomain,buildUrlFromDomain:(s)=>`https://api.${s}`,defaultUrl:"https://api.sazabi.com"}),u=ft({token:a,baseUrl:c,organizationId:i.activeOrganizationId,projectId:i.activeProjectId});return(await Promise.race([n(u),new Promise((s)=>setTimeout(()=>s([]),VE))])).filter((s)=>s.value.startsWith(o))}catch{return[]}};var lT=d(()=>{In();re();Ve();qE={threads:{get:async(e)=>{let t=await e.threads.list({limit:20});if(!t.success)return[];return t.value.threads.map((o)=>({value:o.id,description:o.title??void 0}))}},projects:{use:async(e)=>{let t=await e.projects.list();if(!t.success)return[];return t.value.projects.map((o)=>({value:o.id,description:o.name}))}},organizations:{use:async(e)=>{let t=await e.organizations.list();if(!t.success)return[];return t.value.organizations.map((o)=>({value:o.id,description:o.name}))},rename:async(e)=>{let t=await e.organizations.list();if(!t.success)return[];return t.value.organizations.map((o)=>({value:o.id,description:o.name}))}},"public-keys":{get:Xy,update:Xy,deactivate:Xy},"secret-keys":{get:Zy,update:Zy,delete:Zy},"data-sources":{"get-connection":WE},members:{"update-role":aT,remove:aT}}});var hT={};Qe(hT,{parseCompletionContext:()=>ZE,getCompletions:()=>QE});var YE,XE,ZE=(e)=>{let t=e.length>0?e:[""],o=t.length-1,n=t[o]??"";return{words:t,currentIndex:o,partial:n}},QE=async(e)=>{let{words:t,currentIndex:o,partial:n}=e,r=t[o-1];if(r==="--profile")return o4(n);let i=r4(t),a=Math.max(0,i.length-(t.length-o));if(a===0)return e4(n);let c=i[0]??"",u=oc(c);if(!u)return[];if(a===1&&u.subcommands){if(n.startsWith("-"))return uT(u.options,i);return t4(u,n)}let h=u.subcommands?i[1]:void 0,g=(h?u.subcommands?.[h]:void 0)?.options??u.options;if(n.startsWith("-"))return uT(g,i);if(r?.startsWith("--")){let b=r.slice(2);if(g?.[b]?.type==="string"){let _=`${c}:${h??""}`,S=XE[_]?.[b]??YE[b];if(S)return S.filter((H)=>H.startsWith(n)).map((H)=>({value:H}));return[]}}return cT(c,h??"",n)},e4=(e)=>{let o=kn().filter((r)=>r.name.startsWith(e)).map((r)=>({value:r.name,description:r.description})),n=[{value:"--help",description:"Show help"},{value:"--version",description:"Show version"},{value:"--profile",description:"Use a named profile"}];for(let r of n)if(r.value.startsWith(e))o.push(r);return o},t4=(e,t)=>{if(!e.subcommands)return[];return Object.values(e.subcommands).filter((o)=>o.name.startsWith(t)).map((o)=>({value:o.name,description:o.description}))},uT=(e,t)=>{let o=t[t.length-1]??"",n=new Set(t.filter((i)=>i.startsWith("--")).map((i)=>i.replace(/=.*/,""))),r=[];if(!n.has("--help")&&"--help".startsWith(o))r.push({value:"--help",description:"Show help"});if(!n.has("--profile")&&"--profile".startsWith(o))r.push({value:"--profile",description:"Use a named profile"});if(!e)return r;for(let[i,a]of Object.entries(e)){let c=`--${i}`;if(n.has(c))continue;if(!c.startsWith(o))continue;r.push({value:c,description:a.description})}return r},r4=(e)=>{let t=[];for(let o=0;o<e.length;o++){let n=e[o];if(n==="--profile"&&o+1<e.length)o++;else if(n.startsWith("--profile="));else t.push(n)}return t},o4=(e)=>{try{let t=ie();if(!t.success)return[];return Object.keys(t.value.profiles).filter((o)=>o.startsWith(e)).map((o)=>({value:o,description:o===t.value.activeProfile?"active":void 0}))}catch{return[]}};var gT=d(()=>{Vy();Ve();lT();YE={status:["regular","archived"],format:["json","text"]},XE={"members:update-role":{role:["admin","member"]},"messages:search":{role:["user","assistant"]},"messages:list":{role:["user","assistant"]}}});B();B();zy();import{spawn as Dx}from"node:child_process";B();import{parseArgs as wx}from"node:util";var T=(e,t,o={})=>{let n=wx({args:e,options:t,allowPositionals:Boolean(o.allowPositionals),strict:!1,tokens:!0}),r=Object.hasOwn(t,"json")&&n.values.json===!0,i=new Set(Object.keys(t)),a=new Set(Object.entries(t).map(([,u])=>u.short).filter((u)=>Boolean(u))),c=[];if(Array.isArray(n.tokens))for(let u of n.tokens){if(u.kind!=="option")continue;let h=u.name,s=h.length>1;if(!(i.has(h)||!s&&a.has(h))){let b=s?`--${h}`:`-${h}`;if(!c.includes(b))c.push(b)}}for(let u of Object.keys(n.values))if(!i.has(u)){let h=u.length>1?`--${u}`:`-${u}`;if(!c.includes(h))c.push(h)}if(c.length>0){let u=`Unknown option${c.length>1?"s":""}: ${c.join(", ")}`;if(r)v(u);p(u)}for(let[u,h]of Object.entries(t))if(h.type==="string"&&n.values[u]===!0){let g=`Option ${u.length===1?`-${u}`:`--${u}`} requires a value`;if(r)v(g);p(g)}for(let[u,h]of Object.entries(t)){let s=n.values[u];if(h.type==="string"&&typeof s==="string"){if(s.startsWith("--")||s.length===2&&s[0]==="-"&&/[a-zA-Z]/.test(s.charAt(1))){let y=`Option ${u.length===1?`-${u}`:`--${u}`} received "${s}" as its value. Did you forget to provide a value?`;if(r)v(y);p(y)}}}return{values:n.values,positionals:n.positionals}};var V={token:{type:"string"},"api-base-url":{type:"string"},json:{type:"boolean"}},q={token:{type:"string",description:"Override token"},"api-base-url":{type:"string",description:"Override API base URL"},json:{type:"boolean",description:"Output as JSON"}};re();var Va=(e,t)=>{let o=e?.json;if(!o||o.type!=="boolean")throw Error(`${t} must include a boolean --json option (enforced by CommandBuilder)`)};class xO{name;description;handler;subcommands;options;examples;positionalArgs;allowNoJson=!1;constructor(e,t,o){this.name=e,this.description=t,this.handler=o}withOptions(e){return this.options=e,this}withSubcommands(e){return this.subcommands=e,this}withExamples(e){return this.examples=e,this}withPositionalArgs(e){return this.positionalArgs=e,this}build(){if(!this.handler&&!this.subcommands)throw Error(`Subcommand "${this.name}" must have either a handler or subcommands`);if(!this.allowNoJson&&this.handler)Va(this.options,`Subcommand "${this.name}"`);if(!this.allowNoJson&&this.subcommands){for(let[e,t]of Object.entries(this.subcommands))if(!t.subcommands)Va(t.options,`Subcommand "${this.name} ${e}"`)}return{name:this.name,description:this.description,handler:this.handler,subcommands:this.subcommands,options:this.options,examples:this.examples,positionalArgs:this.positionalArgs}}allowWithoutJson(){return this.allowNoJson=!0,this}}class zO{name;description;handler;subcommands;options;examples;positionalArgs;allowNoJson=!1;constructor(e,t){this.name=e,this.description=t}withHandler(e){return this.handler=e,this}withSubcommands(e){return this.subcommands=e,this}withOptions(e){return this.options=e,this}withExamples(e){return this.examples=e,this}withPositionalArgs(e){return this.positionalArgs=e,this}build(){if(!this.handler&&!this.subcommands)throw Error(`Command "${this.name}" must have either a handler or subcommands`);if(!this.allowNoJson){if(this.handler)Va(this.options,`Command "${this.name}"`);if(this.subcommands)for(let[e,t]of Object.entries(this.subcommands)){if(t.subcommands)continue;Va(t.options,`Subcommand "${this.name} ${e}"`)}}return{name:this.name,description:this.description,handler:this.handler,subcommands:this.subcommands,options:this.options,examples:this.examples,positionalArgs:this.positionalArgs}}allowWithoutJson(){return this.allowNoJson=!0,this}}var W=(e,t)=>{return new zO(e,t)},P=(e,t,o)=>{return new xO(e,t,o)};X();Ve();var lo=(e)=>{if(e==="flag")return"from flag";if(e==="environment")return"from environment";return"from settings"},Nx=async(e={})=>{let t=N({jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.me(),"Failed to fetch authentication details",e.json);if(e.json){j({credential:n,activeOrganizationId:t.organizationId,activeProjectId:t.projectId,tokenSource:t.tokenSource,organizationSource:t.organizationSource,projectSource:t.projectSource});return}if(ce("Authentication"),n.credentialType==="user"){ne({Type:`User token (${lo(t.tokenSource)})`,User:n.user.name??n.user.email,Email:n.user.email,"Active Organization":t.organizationId&&t.organizationSource?`${t.organizationId} (${lo(t.organizationSource)})`:_e("(none)"),"Active Project":t.projectId&&t.projectSource?`${t.projectId} (${lo(t.projectSource)})`:_e("(none)"),Organizations:n.organizations.length.toString(),"Dashboard URL":fn()});return}if(n.credentialType==="secret"){ne({Type:`Secret key (${lo(t.tokenSource)})`,Organization:n.organization.name,"Key Name":n.keyName,"Active Project":t.projectId&&t.projectSource?`${t.projectId} (${lo(t.projectSource)})`:_e("(none)"),"Dashboard URL":fn()});return}ne({Type:`Partner key (${lo(t.tokenSource)})`,Superorganization:n.superorganization.name,"Dashboard URL":fn()})},Lx=async(e,t={})=>{let o=e.trim();if(!o){if(t.json)return v("Token is required.");return p("Token is required.")}let n=f(ie(),"Failed to read settings",t.json);await Ky({token:o,options:t,cliSettings:n,status:"saved"})},jO=(e)=>{let t=process.platform,o,n;if(t==="darwin")o="open",n=[e];else if(t==="win32")o="cmd",n=["/c","start","",e];else o="xdg-open",n=[e];let r=Dx(o,n,{detached:!0,stdio:"ignore"});r.on("error",()=>{}),r.unref()},EO=(e)=>new Promise((t)=>setTimeout(t,e)),Cx=async(e={})=>{let t=f(ie(),"Failed to read settings",e.json),o=ut(t),n=t.profiles[o]??{},r=Fy(n,e.apiBaseUrl),i=UO(r,e.authBaseUrl??n.authBaseUrl),a;try{a=await Cy({apiBaseUrl:i})}catch(b){let y=b instanceof Error?b.message:String(b);if(e.json)return v(`Failed to initiate signup: ${y}`);return p(`Failed to initiate signup: ${y}`)}let c=KO({profile:n,publicApiBaseUrl:r,authBaseUrl:i,apiBaseUrlOverride:e.apiBaseUrl,authBaseUrlOverride:e.authBaseUrl,webBaseUrlOverride:e.webBaseUrl,verificationUriComplete:a.verificationUriComplete}),u=`/login/cli?user_code=${encodeURIComponent(a.userCode)}`,h=`${c}/sign-up?returnTo=${encodeURIComponent(u)}`,s=new Date(Date.now()+a.expiresIn*1000),g=a.interval*1000;if(!e.json)R(),ce("Create a Sazabi account"),R(),et(`Opening ${ae.info(h)}`),R(),jO(h),Y("Waiting for signup to complete...");while(new Date<s){await EO(g);try{let b=await xy({apiBaseUrl:i,deviceCode:a.deviceCode});if(b.status==="pending"){g=(b.interval??a.interval)*1000;continue}if(b.status==="denied"){if(e.json)return v("Signup was denied.");return R(),p("Signup was denied.")}if(b.status==="expired"){if(e.json)return v("Signup request expired. Please try again.");return R(),p("Signup request expired. Please try again.")}await Ky({token:b.accessToken,options:e,cliSettings:t,status:"authorized"});return}catch(b){let y=b instanceof Error?b.message:String(b);if(e.json)return v(`Signup failed: ${y}`);return R(),p(`Signup failed: ${y}`)}}if(e.json)return v("Signup request expired. Please try again.");return R(),p("Signup request expired. Please try again.")},xx=async(e={})=>{let t=f(ie(),"Failed to read settings",e.json),o=ut(t),n=t.profiles[o]??{},r=Fy(n,e.apiBaseUrl),i=UO(r,e.authBaseUrl??n.authBaseUrl),a;try{a=await Cy({apiBaseUrl:i})}catch(g){let b=g instanceof Error?g.message:String(g);if(e.json)return v(`Failed to initiate login: ${b}`);return p(`Failed to initiate login: ${b}`)}let c=KO({profile:n,publicApiBaseUrl:r,authBaseUrl:i,apiBaseUrlOverride:e.apiBaseUrl,authBaseUrlOverride:e.authBaseUrl,webBaseUrlOverride:e.webBaseUrl,verificationUriComplete:a.verificationUriComplete}),u=Gx(a.verificationUriComplete,c),h=new Date(Date.now()+a.expiresIn*1000),s=a.interval*1000;if(!e.json)R(),ce("Login to Sazabi"),R(),et("Enter this code in your browser:"),R(),et(ae.bold(a.userCode),4),R(),et(`Opening ${ae.info(u)}`),R(),jO(u),Y("Waiting for authorization...");while(new Date<h){await EO(s);try{let g=await xy({apiBaseUrl:i,deviceCode:a.deviceCode});if(g.status==="pending"){s=(g.interval??a.interval)*1000;continue}if(g.status==="denied"){if(e.json)return v("Authorization was denied.");return R(),p("Authorization was denied.")}if(g.status==="expired"){if(e.json)return v("Authorization request expired. Please try again.");return R(),p("Authorization request expired. Please try again.")}await Ky({token:g.accessToken,options:e,cliSettings:t,status:"authorized"});return}catch(g){let b=g instanceof Error?g.message:String(g);if(e.json)return v(`Authorization failed: ${b}`);return R(),p(`Authorization failed: ${b}`)}}if(e.json)return v("Authorization request expired. Please try again.");return R(),p("Authorization request expired. Please try again.")},zx=(e)=>{let t=f(ie(),"Failed to read settings",e.json),o=f(Ze(t),"Failed to resolve profile",e.json),n=Boolean(o.token),r=f(Re(t,{token:void 0,activeOrganizationId:void 0,organizationName:void 0,activeProjectId:void 0}),"Failed to update profile",e.json);if(f(me(r),"Failed to remove credentials",e.json),e.json){j({removed:n});return}if(n){M("Logged out successfully.");return}Y("No credentials were saved.")},Ky=async({token:e,options:t,cliSettings:o,status:n})=>{let r=ut(o),i=o.profiles[r]??{},a=Fy(i,t.apiBaseUrl),c=L({token:e,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),u=f(await c.me(),`Failed to resolve authenticated context at ${a} (pass --api-base-url to target a different environment)`,t.json);if(n==="authorized"&&u.credentialType!=="user"){if(t.json)return v("Expected a user session from device authorization.");return p("Expected a user session from device authorization.")}let h=o.profiles[r]?o:{...o,profiles:{...o.profiles,[r]:{}}},s=h.profiles[r],g=await jx({client:c,credential:u,currentProjectId:s.activeProjectId,jsonMode:t.json}),b=f(Re(h,{token:e,activeOrganizationId:g.activeOrganizationId,organizationName:g.activeOrganizationName,activeProjectId:g.activeProjectId,apiBaseUrl:t.apiBaseUrl??s.apiBaseUrl,authBaseUrl:t.authBaseUrl??s.authBaseUrl,webBaseUrl:t.webBaseUrl??s.webBaseUrl}),"Failed to update profile",t.json);if(f(me(b),"Failed to save credentials",t.json),t.json){j({status:n,credential:u,activeOrganizationId:g.activeOrganizationId,activeProjectId:g.activeProjectId,projects:g.projects});return}if(R(),M(n==="authorized"?"Successfully authenticated!":"Saved token."),R(),Ux({credential:u,activeOrganizationName:g.activeOrganizationName,activeProjectId:g.activeProjectId,projects:g.projects}),g.projects.length>0){R(),ce("Available Projects");for(let y of g.projects){let S=y.id===g.activeProjectId?ae.success(" (active)"):"";et(`${y.name} (${y.region})${S}`)}}},jx=async({client:e,credential:t,currentProjectId:o,jsonMode:n})=>{if(t.credentialType==="partner")return{projects:[]};let r=t.credentialType==="user"?t.activeOrganizationId??t.organizations[0]?.id:t.organization.id,i=t.credentialType==="user"?t.organizations.find((c)=>c.id===r)?.name:t.organization.name,a=r?f(await e.projects.list({organizationId:r}),"Failed to fetch projects",n).projects:[];return{activeOrganizationId:r,activeOrganizationName:i,activeProjectId:Ex(a,o),projects:a}},Ex=(e,t)=>{if(t&&e.some((o)=>o.id===t))return t;return e[0]?.id},Ux=({credential:e,activeOrganizationName:t,activeProjectId:o,projects:n})=>{if(e.credentialType==="user"){ne({Type:"User token",User:e.user.name??e.user.email,Organizations:e.organizations.length.toString(),"Active Organization":t??"(none)","Active Project":n.find((r)=>r.id===o)?.name??"(none)"});return}if(e.credentialType==="secret"){ne({Type:"Secret key",Organization:e.organization.name,"Key Name":e.keyName,"Active Project":n.find((r)=>r.id===o)?.name??"(none)"});return}ne({Type:"Partner key",Superorganization:e.superorganization.name})},Fy=(e,t)=>{return ht({cliFlag:t,globalUrl:e.apiBaseUrl,globalDomain:e.apiDomain,buildUrlFromDomain:(o)=>`https://api.${o}`,defaultUrl:"https://api.sazabi.com"})},UO=(e,t)=>{if(t)return t;try{let o=new URL(e);if(["localhost","127.0.0.1"].includes(o.hostname)&&["15005","15009"].includes(o.port))return o.port="15001",o.toString().replace(/\/$/,"");if(o.hostname==="api.sazabi.com")return o.hostname="api.platform.sazabi.com",o.toString().replace(/\/$/,"");if(o.hostname==="api.staging.sazabi.dev")return o.hostname="api.platform.staging.sazabi.dev",o.toString().replace(/\/$/,"");return o.toString().replace(/\/$/,"")}catch{return e}},RO=(e)=>e.replace(/\/+$/,""),Ke=(e)=>(e?.trim().length??0)>0,Rx=(e)=>{if(!Ke(e))return;try{let t=new URL(e);return`${t.protocol}//${t.host}`}catch{return}},qa=(e)=>{if(!Ke(e))return;try{let o=new URL(e).hostname.toLowerCase();if(["localhost","127.0.0.1"].includes(o))return"https://localhost:5173";if(["api.staging.sazabi.dev","api.platform.staging.sazabi.dev"].includes(o))return"https://app.staging.sazabi.dev";if(["api.sazabi.com","api.platform.sazabi.com"].includes(o))return"https://app.sazabi.com"}catch{return}return},Kx=(e)=>{if(Ke(e.webBaseUrl))return RO(e.webBaseUrl);if(Ke(e.webDomain))return Ma(e.webDomain);return},Fx=({profile:e,publicApiBaseUrl:t})=>{if(!(Ke(e.authBaseUrl)||Ke(e.apiBaseUrl)||Ke(e.apiDomain)))return;if(Ke(e.authBaseUrl)){let n=qa(e.authBaseUrl);if(n)return n}return qa(t)},KO=({profile:e,publicApiBaseUrl:t,authBaseUrl:o,apiBaseUrlOverride:n,authBaseUrlOverride:r,webBaseUrlOverride:i,verificationUriComplete:a})=>{if(Ke(i))return RO(i);let c=process.env.SAZABI_API_URL?.trim(),u=Ke(r)||Ke(n)||Ke(c),h=Rx(a);if(u){let b=Ke(r)?qa(o):qa(t);if(b)return b;if(h)return h}let s=Kx(e);if(s)return s;let g=Fx({profile:e,publicApiBaseUrl:t});if(g)return g;if(h)return h;return"https://app.sazabi.com"},Gx=(e,t)=>{if(!t)return e;try{let o=new URL(e),n=new URL(t);return o.protocol=n.protocol,o.host=n.host,o.toString()}catch{return e}},FO=W("auth","Manage authentication credentials").withSubcommands({signup:P("signup","Create a new Sazabi account via browser",async(e)=>{let{values:t,positionals:o}=T(e,{...V,"auth-base-url":{type:"string"},"web-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Cx({json:t.json,apiBaseUrl:t["api-base-url"],authBaseUrl:t["auth-base-url"],webBaseUrl:t["web-base-url"]})}).withOptions({...q,"auth-base-url":{type:"string",description:"Override auth API base URL"},"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth signup  # Create a new account via browser"]).build(),login:P("login","Authenticate via browser",async(e)=>{let{values:t,positionals:o}=T(e,{...V,"auth-base-url":{type:"string"},"web-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await xx({json:t.json,apiBaseUrl:t["api-base-url"],authBaseUrl:t["auth-base-url"],webBaseUrl:t["web-base-url"]})}).withOptions({...q,"auth-base-url":{type:"string",description:"Override auth API base URL"},"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth login  # Authenticate via browser"]).build(),save:P("save","Save an existing bearer token",async(e)=>{let{values:t,positionals:o}=T(e,{...V,"web-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Token is required.");return p("Token is required.")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await Lx(n,{json:t.json,apiBaseUrl:t["api-base-url"],webBaseUrl:t["web-base-url"]})}).withPositionalArgs("<token>").withOptions({...q,"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth save sazabi_secret_xxx  # Save a secret key for future commands"]).build(),logout:P("logout","Remove saved credentials",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}zx({json:t.json})}).withOptions(q).withExamples(["sazabi auth logout  # Remove saved credentials"]).build(),whoami:P("whoami","Display current authentication context",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Nx({json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions(q).withExamples(["sazabi auth whoami  # Show current context","sazabi auth whoami --json  # Output as JSON"]).build()}).withExamples(["sazabi auth signup  # Create a new account via browser","sazabi auth login  # Authenticate via browser","sazabi auth save sazabi_secret_xxx  # Save an existing token","sazabi auth logout  # Remove saved credentials","sazabi auth whoami  # Show current context"]).build();B();var GO=()=>`
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
`.trim();var Bx=async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}}),o=GO();if(t.json){j({shell:"zsh",script:o});return}console.log(o)},Hx=async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}}),o=BO();if(t.json){j({shell:"bash",script:o});return}console.log(o)},HO=W("completions","Shell completion scripts").withSubcommands({zsh:P("zsh","Output zsh completion script",Bx).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(['eval "$(sazabi completions zsh)"   # Add to .zshrc']).build(),bash:P("bash","Output bash completion script",Hx).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(['eval "$(sazabi completions bash)"  # Add to .bashrc']).build()}).withExamples(['eval "$(sazabi completions zsh)"   # Enable zsh completions','eval "$(sazabi completions bash)"  # Enable bash completions']).build();B();re();X();var Mx={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}}},Jx={schema:Mx,columns:["id","name"],header:"Data source types",emptyMessage:"No data source types found."},MO={id:{label:"ID",type:{kind:"string"}},dataSourceType:{label:"Type",type:{kind:"string"}},displayName:{label:"Name",type:{kind:"nullable-string"}},projectId:{label:"Project",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}}},Vx={schema:MO,columns:["id","dataSourceType","displayName","createdAt"],header:"Connections",emptyMessage:"No data source connections found."},qx={layout:"field-list",schema:MO,fields:["id","dataSourceType","displayName","projectId","createdAt"],title:"Connection"},JO={id:{label:"ID",type:{kind:"string"}},displayName:{label:"Name",type:{kind:"string"}},connectionId:{label:"Connection",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},errorMessage:{label:"Error",type:{kind:"nullable-string"}},createdAt:{label:"Created",type:{kind:"date"}}},Wx={schema:JO,columns:["id","displayName","status","errorMessage","createdAt"],header:"Streams",emptyMessage:"No streams found for this connection."},Yx={layout:"field-list",schema:JO,fields:["id","connectionId","displayName","status","errorMessage","createdAt"],title:"Stream"},gt=(e)=>{let t=e.json,o=N({tokenFlag:e.token,jsonMode:t});return{client:L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:t}),json:t}},Xx=async(e)=>{let{values:t}=T(e,V),{client:o,json:n}=gt(t),{types:r}=f(await o.dataSources.listTypes(),"Failed to list data source types",n),i=[...r].sort((a,c)=>a.name.localeCompare(c.name));J(Jx,i,{json:n})},Zx=async(e)=>{let{values:t}=T(e,{...V,type:{type:"string"},"project-id":{type:"string"}}),{client:o,json:n}=gt(t),{connections:r}=f(await o.dataSources.connections.list({projectId:t["project-id"],dataSourceType:t.type}),"Failed to list connections",n);J(Vx,r,{json:n})},Qx=async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Connection ID is required.");return p("Connection ID is required.")}let{client:r,json:i}=gt(t),{connection:a}=f(await r.dataSources.connections.get(n),"Failed to get connection",i);U(qx,a,{json:i})},ez=async(e)=>{let{values:t}=T(e,{...V,type:{type:"string"},metadata:{type:"string"},"display-name":{type:"string"},"project-id":{type:"string"}});if(!t.type){if(t.json)return v("--type is required.");return p("--type is required. Use 'sazabi data-sources types' to see available types.")}if(!t.metadata){if(t.json)return v("--metadata is required.");return p("--metadata is required. Pass a JSON object with the required fields.")}let o;try{o=JSON.parse(t.metadata)}catch{if(t.json)return v("--metadata must be valid JSON.");return p("--metadata must be valid JSON.")}let{client:n,json:r}=gt(t),i=f(await n.dataSources.connections.create({dataSourceType:t.type,metadata:o,displayName:t["display-name"],projectId:t["project-id"]}),"Failed to create connection",r);if(r){j(i);return}M("Connection created."),ne({"Connection ID":i.connectionId,"Public key":i.publicKey})},tz=async(e)=>{let{values:t}=T(e,{...V,"connection-id":{type:"string"}});if(!t["connection-id"]){if(t.json)return v("--connection-id is required.");return p("--connection-id is required.")}let{client:o,json:n}=gt(t),{streams:r}=f(await o.dataSources.streams.list(t["connection-id"]),"Failed to list streams",n);J(Wx,r,{json:n})},rz=async(e)=>{let{values:t}=T(e,{...V,"connection-id":{type:"string"},"display-name":{type:"string"},config:{type:"string"}});if(!t["connection-id"]){if(t.json)return v("--connection-id is required.");return p("--connection-id is required.")}if(!t["display-name"]){if(t.json)return v("--display-name is required.");return p("--display-name is required.")}let o={};if(t.config)try{o=JSON.parse(t.config)}catch{if(t.json)return v("--config must be valid JSON.");return p("--config must be valid JSON.")}let{client:n,json:r}=gt(t),i=f(await n.dataSources.streams.create({connectionId:t["connection-id"],displayName:t["display-name"],config:o}),"Failed to create stream",r);if(r){j(i);return}M("Stream created. Provisioning started."),ne(i.publicKey?{"Stream ID":i.streamId,"Public key":i.publicKey}:{"Stream ID":i.streamId})},oz=async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Stream ID is required.");return p("Stream ID is required.")}let{client:r,json:i}=gt(t),{stream:a}=f(await r.dataSources.streams.get(n),"Failed to get stream",i);U(Yx,a,{json:i})},nz=async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Stream ID is required.");return p("Stream ID is required.")}let{client:r,json:i}=gt(t),a=f(await r.dataSources.streams.delete(n),"Failed to remove stream",i);if(i){j(a);return}M("Stream removed.")},iz=async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Connection ID is required.");return p("Connection ID is required.")}let{client:r,json:i}=gt(t),a=f(await r.dataSources.connections.disconnect(n),"Failed to disconnect connection",i);if(i){j(a);return}if(a.connectionTeardownError){Fe(`Connection disconnected, but remote cleanup failed: ${a.connectionTeardownError}`);return}M("Connection disconnected.")},az=async(e)=>{let{values:t}=T(e,{...V,type:{type:"string"}});if(!t.type){if(t.json)return v("--type is required.");return p("--type is required. Use 'sazabi data-sources types' to see types with skills.")}let{client:o,json:n}=gt(t),{types:r}=f(await o.dataSources.listTypes(),"Failed to list data source types",n),i=r.find((a)=>a.id===t.type);if(!i){if(n)return v(`Unknown data source type: ${t.type}`);return p(`Unknown data source type: ${t.type}`)}if(!i.setupSkill){if(n)return v(`No setup skill available for ${t.type}.`);return p(`No setup skill available for ${t.type}. This data source does not have an agent-ready skill yet.`)}if(n){j({type:t.type,setupSkill:i.setupSkill});return}Y(i.setupSkill)},VO=W("data-sources","Manage data source connections and streams").withSubcommands({types:P("types","List supported data source types",Xx).withOptions(q).withExamples(["sazabi data-sources types           # List all types","sazabi data-sources types --json    # Output as JSON"]).build(),connections:P("connections","Manage data source connections").withSubcommands({list:P("list","List data source connections",Zx).withOptions({...q,type:{type:"string",description:"Filter by data source type"},"project-id":{type:"string",description:"Project ID"}}).withExamples(["sazabi data-sources connections list                  # List all connections","sazabi data-sources connections list --type vercel    # Filter by type"]).build(),get:P("get","Get one data source connection",Qx).withPositionalArgs("<connection-id>").withOptions(q).withExamples(["sazabi data-sources connections get <id>  # Get connection details"]).build(),create:P("create","Create a data source connection",ez).withOptions({...q,type:{type:"string",description:"Data source type (required)"},metadata:{type:"string",description:"JSON metadata (required)"},"display-name":{type:"string",description:"Human-readable name"},"project-id":{type:"string",description:"Project ID"}}).withExamples([`sazabi data-sources connections create --type fly_io --metadata '{"apiToken":"..."}'  # Create Fly.io connection`]).build(),disconnect:P("disconnect","Disconnect a data source connection",iz).withPositionalArgs("<connection-id>").withOptions(q).withExamples(["sazabi data-sources connections disconnect <id>  # Disconnect connection"]).build()}).withExamples(["sazabi data-sources connections list                  # List all connections","sazabi data-sources connections list --type vercel    # Filter by type","sazabi data-sources connections disconnect <id>       # Disconnect a connection"]).build(),streams:P("streams","Manage data source streams").withSubcommands({list:P("list","List streams for a connection",tz).withOptions({...q,"connection-id":{type:"string",description:"Connection ID (required)"}}).withExamples(["sazabi data-sources streams list --connection-id <id>  # List streams"]).build(),get:P("get","Get one stream (check provisioning status)",oz).withPositionalArgs("<stream-id>").withOptions(q).withExamples(["sazabi data-sources streams get <id>  # Check stream status"]).build(),create:P("create","Create a stream for a connection",rz).withOptions({...q,"connection-id":{type:"string",description:"Connection ID (required)"},"display-name":{type:"string",description:"Resource name (required)"},config:{type:"string",description:"JSON stream config"}}).withExamples(['sazabi data-sources streams create --connection-id <id> --display-name "my-app"  # Create stream']).build(),remove:P("remove","Remove a stream from a connection",nz).withPositionalArgs("<stream-id>").withOptions(q).withExamples(["sazabi data-sources streams remove <id>  # Remove a stream"]).build()}).withExamples(["sazabi data-sources streams list --connection-id <id>  # List streams","sazabi data-sources streams remove <id>                # Remove a stream"]).build(),skill:P("skill","Show setup skill for a data source type",az).withOptions({...q,type:{type:"string",description:"Data source type (required)"}}).withExamples(["sazabi data-sources skill --type gcp      # Show GCP setup skill","sazabi data-sources skill --type fly_io    # Show Fly.io setup skill"]).build()}).withExamples(["sazabi data-sources types                                                        # List available types","sazabi data-sources connections create --type fly_io --metadata '{...}'           # Create connection","sazabi data-sources streams list --connection-id <id>                             # List streams","sazabi data-sources skill --type gcp                                             # Show agent setup skill"]).build();B();re();X();var qO={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},severity:{label:"Severity",type:{kind:"severity"}},createdAt:{label:"Created",type:{kind:"date"}},resolvedAt:{label:"Resolved",type:{kind:"nullable-date"}},mutedAt:{label:"Muted",type:{kind:"nullable-date"}},whatHappened:{label:"What Happened",type:{kind:"nullable-string"}},whyItHappened:{label:"Why It Happened",type:{kind:"nullable-string"}},howToFix:{label:"How To Fix",type:{kind:"nullable-string"}}},cz={schema:qO,columns:["id","name","status","severity","createdAt"],header:"Issues",emptyMessage:"No issues found."},Wa={layout:"sections",schema:qO,primary:{title:"Issue",fields:["id","name","status","severity","createdAt","resolvedAt","mutedAt"]},secondary:[{title:"What Happened",field:"whatHappened"},{title:"Why It Happened",field:"whyItHappened"},{title:"How To Fix",field:"howToFix"}]},lz=async(e)=>{let t=N({tokenFlag:e.token,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.issues.list({status:e.status,severity:e.severity,statusComponentId:e.statusComponentId,limit:e.limit,cursor:e.cursor}),"Failed to list issues",e.json);J(cz,n.issues,{json:e.json,nextCursor:n.nextCursor})},uz=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.issues.get(e),"Failed to get issue",t.json);U(Wa,r.issue,{json:t.json})},hz=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.issues.resolve(e),"Failed to resolve issue",t.json);U(Wa,r.issue,{json:t.json})},gz=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.issues.ignore(e),"Failed to ignore issue",t.json);U(Wa,r.issue,{json:t.json})},sz=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.issues.unignore(e),"Failed to unignore issue",t.json);U(Wa,r.issue,{json:t.json})},WO=W("issues","Manage issues").withSubcommands({list:P("list","List issues in the active project",async(e)=>{let{values:t}=T(e,{...V,status:{type:"string"},severity:{type:"string"},"status-component":{type:"string"},limit:{type:"string"},cursor:{type:"string"}}),o=["open","resolved","ignored"];if(t.status&&!o.includes(t.status)){let i=`Invalid --status "${t.status}". Must be one of: ${o.join(", ")}.`;if(t.json)return v(i);return p(i)}let n=["low","medium","high","critical"];if(t.severity&&!n.includes(t.severity)){let i=`Invalid --severity "${t.severity}". Must be one of: ${n.join(", ")}.`;if(t.json)return v(i);return p(i)}let r=t.limit?Number(t.limit):void 0;if(r!==void 0&&(Number.isNaN(r)||r<1||r>100)){if(t.json)return v("Invalid --limit. Must be an integer between 1 and 100.");return p("Invalid --limit. Must be an integer between 1 and 100.")}await lz({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],status:t.status,severity:t.severity,statusComponentId:t["status-component"],limit:r,cursor:t.cursor})}).withOptions({...q,status:{type:"string",description:"Filter by status: open, resolved, or ignored"},severity:{type:"string",description:"Filter by severity: low, medium, high, or critical"},"status-component":{type:"string",description:"Filter by status component ID"},limit:{type:"string",description:"Maximum number of issues to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples(["sazabi issues list                                        # List all issues","sazabi issues list --status open                          # List open issues only","sazabi issues list --status-component <component-id>      # List issues for a component"]).build(),get:P("get","Get one issue by ID",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await uz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(q).withExamples(["sazabi issues get <issue-id>  # Get one issue"]).build(),resolve:P("resolve","Resolve an open issue",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await hz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(q).withExamples(["sazabi issues resolve <issue-id>  # Resolve an issue"]).build(),ignore:P("ignore","Ignore an issue",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await gz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(q).withExamples(["sazabi issues ignore <issue-id>  # Ignore an issue"]).build(),unignore:P("unignore","Unmute an issue",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Issue ID is required.");return p("Issue ID is required.")}await sz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(q).withExamples(["sazabi issues unignore <issue-id>  # Unmute an issue"]).build()}).withExamples(["sazabi issues list                       # List all issues","sazabi issues get <issue-id>             # Get one issue","sazabi issues resolve <issue-id>         # Resolve an issue","sazabi issues ignore <issue-id>          # Ignore an issue","sazabi issues unignore <issue-id>        # Unmute an issue"]).build();B();re();X();var dz=async(e,t)=>{let o=N({tokenFlag:t.token,projectIdFlag:e==="public"?t.projectId:void 0,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:e==="public"?o.projectId:void 0,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json});if(e==="public"){let i=f(await n.publicKeys.list({projectId:o.projectId,limit:t.limit,cursor:t.cursor}),"Failed to list public keys",t.json);J(YO(e),i.publicKeys.map((a)=>_t(e,a)),{json:t.json,nextCursor:i.nextCursor});return}let r=f(await n.secretKeys.list({limit:t.limit,cursor:t.cursor}),"Failed to list secret keys",t.json);J(YO(e),r.secretKeys.map((i)=>_t(e,i)),{json:t.json,nextCursor:r.nextCursor})},bz=async(e,t,o)=>{let n=N({tokenFlag:o.token,projectIdFlag:e==="public"?o.projectId:void 0,jsonMode:o.json}),r=L({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:o.apiBaseUrl,jsonMode:o.json});if(e==="public"){let a=f(await r.publicKeys.get(t,n.projectId),"Failed to get public key",o.json);U(or(e),_t(e,a.publicKey),{json:o.json});return}let i=f(await r.secretKeys.get(t),"Failed to get secret key",o.json);U(or(e),_t(e,i.secretKey),{json:o.json})},yz=async(e,t,o)=>{let n=N({tokenFlag:o.token,projectIdFlag:e==="public"?o.projectId:void 0,jsonMode:o.json}),r=L({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:o.apiBaseUrl,jsonMode:o.json});if(e==="public"){let c={projectId:n.projectId,name:t,...o.expiresAt?{expiresAt:o.expiresAt}:{}},u=f(await r.publicKeys.create(c),"Failed to create public key",o.json);if(o.json){j(u);return}M(`Created public key ${u.publicKey.name}.`),ne({Value:u.publicKey.value}),U(or(e),{..._t(e,u.publicKey)});return}let i={name:t,...o.expiresAt?{expiresAt:o.expiresAt}:{}},a=f(await r.secretKeys.create(i),"Failed to create secret key",o.json);if(o.json){j(a);return}M(`Created secret key ${a.secretKey.name}.`),ne({Value:a.secretKey.value}),U(or(e),{..._t(e,a.secretKey)})},mz=async(e,t,o)=>{if(o.name===void 0&&o.expiresAt===void 0&&!o.clearExpiresAt){if(o.json)return v("At least one update is required. Pass --name, --expires-at, or --clear-expires-at.");return p("At least one update is required. Pass --name, --expires-at, or --clear-expires-at.")}if(o.expiresAt&&o.clearExpiresAt){if(o.json)return v("Use either --expires-at or --clear-expires-at, not both.");return p("Use either --expires-at or --clear-expires-at, not both.")}let n=N({tokenFlag:o.token,projectIdFlag:e==="public"?o.projectId:void 0,jsonMode:o.json}),r=L({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:o.apiBaseUrl,jsonMode:o.json}),i=o.clearExpiresAt?null:o.expiresAt!==void 0?o.expiresAt:void 0;if(e==="public"){let u={projectId:n.projectId,keyId:t,...o.name!==void 0?{name:o.name}:{},...i!==void 0?{expiresAt:i}:{}},h=f(await r.publicKeys.update(u),"Failed to update public key",o.json);U(or(e),_t(e,h.publicKey),{json:o.json});return}let a={keyId:t,...o.name!==void 0?{name:o.name}:{},...i!==void 0?{expiresAt:i}:{}},c=f(await r.secretKeys.update(a),"Failed to update secret key",o.json);U(or(e),_t(e,c.secretKey),{json:o.json})},pz=async(e,t)=>{let o=N({tokenFlag:t.token,projectIdFlag:t.projectId,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.publicKeys.deactivate({projectId:o.projectId,keyId:e}),"Failed to deactivate public key",t.json);if(!t.json)M(`Deactivated public key ${e}.`);U(or("public"),_t("public",r.publicKey),{json:t.json})},vz=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json});if(f(await n.secretKeys.delete({keyId:e}),"Failed to delete secret key",t.json),t.json){j({deleted:!0,keyId:e});return}M(`Deleted secret key ${e}.`)},XO=(e)=>{let t=Iz(e),o=Gy(e),n=`${o} Keys`,r=e==="secret",i=r?"the organization":"the active project",a={token:{type:"string"},"project-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},h=r?{token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}:{token:{type:"string",description:"Override token"},"project-id":{type:"string",description:"Override project selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}};return W(t,`Manage ${e} API keys`).withSubcommands({list:P("list",`List ${e} keys in ${i}`,async(s)=>{let{values:g,positionals:b}=T(s,{...a,limit:{type:"string"},cursor:{type:"string"}},{allowPositionals:!0});if(b.length>0){let y=b.join(", ");if(g.json)return v(`Unexpected arguments: ${y}`);return p(`Unexpected arguments: ${y}`)}await dz(e,{token:g.token,projectId:g["project-id"],limit:g.limit?Number(g.limit):void 0,cursor:g.cursor,json:g.json,apiBaseUrl:g["api-base-url"]})}).withOptions({...h,limit:{type:"string",description:"Maximum number of keys to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples([`sazabi ${t} list  # List ${e} keys in ${i}`]).build(),get:P("get",`Get one ${e} key by ID`,async(s)=>{let{values:g,positionals:b}=T(s,a,{allowPositionals:!0}),y=b[0];if(!y){let _=`${o} key ID is required.`;if(g.json)return v(_);return p(_)}await bz(e,y,{token:g.token,projectId:g["project-id"],json:g.json,apiBaseUrl:g["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(h).withExamples([`sazabi ${t} get <key-id>  # Get one ${e} key`]).build(),create:P("create",`Create one ${e} key in ${i}`,async(s)=>{let{values:g,positionals:b}=T(s,{...a,"expires-at":{type:"string"}},{allowPositionals:!0}),y=b.join(" ");if(!y){let _=`${o} key name is required.`;if(g.json)return v(_);return p(_)}await yz(e,y,{token:g.token,projectId:g["project-id"],expiresAt:g["expires-at"],json:g.json,apiBaseUrl:g["api-base-url"]})}).withPositionalArgs("<name>").withOptions({...h,"expires-at":{type:"string",description:"Optional ISO timestamp when the key should expire"}}).withExamples([`sazabi ${t} create "CI agent"  # Create one ${e} key`]).build(),update:P("update",`Update one ${e} key in ${i}`,async(s)=>{let{values:g,positionals:b}=T(s,{...a,name:{type:"string"},"expires-at":{type:"string"},"clear-expires-at":{type:"boolean"}},{allowPositionals:!0}),y=b[0];if(!y){let _=`${o} key ID is required.`;if(g.json)return v(_);return p(_)}await mz(e,y,{token:g.token,projectId:g["project-id"],name:g.name,expiresAt:g["expires-at"],clearExpiresAt:g["clear-expires-at"],json:g.json,apiBaseUrl:g["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions({...h,name:{type:"string",description:`New ${e} key name`},"expires-at":{type:"string",description:"New ISO timestamp when the key should expire"},"clear-expires-at":{type:"boolean",description:"Clear any configured expiration"}}).withExamples([`sazabi ${t} update <key-id> --name "Renamed key"  # Update one ${e} key`]).build(),...e==="public"?{deactivate:P("deactivate",`Deactivate one public key in ${i}`,async(s)=>{let{values:g,positionals:b}=T(s,a,{allowPositionals:!0}),y=b[0];if(!y){if(g.json)return v("Public key ID is required.");return p("Public key ID is required.")}await pz(y,{token:g.token,projectId:g["project-id"],json:g.json,apiBaseUrl:g["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(h).withExamples([`sazabi ${t} deactivate <key-id>  # Deactivate one public key`]).build()}:{delete:P("delete",`Delete one secret key from ${i}`,async(s)=>{let{values:g,positionals:b}=T(s,a,{allowPositionals:!0}),y=b[0];if(!y){if(g.json)return v("Secret key ID is required.");return p("Secret key ID is required.")}await vz(y,{token:g.token,json:g.json,apiBaseUrl:g["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(h).withExamples([`sazabi ${t} delete <key-id>  # Delete one secret key`]).build()}}).withExamples([`sazabi ${t} list  # List ${e} keys in ${i}`,`sazabi ${t} create "CI agent"  # Create one ${e} key`]).build()},ZO={keyType:{label:"Type",type:{kind:"string"}},id:{label:"ID",type:{kind:"string"}},projectId:{label:"Project ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},expiresAt:{label:"Expires",type:{kind:"nullable-date"}},lastUsedAt:{label:"Last Used",type:{kind:"nullable-date"}},createdAt:{label:"Created",type:{kind:"date"}}},YO=(e)=>({schema:ZO,columns:e==="public"?["id","name","status","expiresAt","lastUsedAt","createdAt"]:["id","name","expiresAt","lastUsedAt","createdAt"],header:`${Gy(e)} Keys`,emptyMessage:`No ${e} keys found.`}),or=(e)=>({layout:"field-list",schema:ZO,fields:e==="public"?["keyType","id","projectId","name","status","expiresAt","lastUsedAt","createdAt"]:["keyType","id","name","expiresAt","lastUsedAt","createdAt"]}),Iz=(e)=>{return e==="public"?"public-keys":"secret-keys"},Gy=(e)=>{return e==="public"?"Public":"Secret"},_t=(e,t)=>{let o=e==="public"&&"deactivatedAt"in t&&t.deactivatedAt!==null;return{...t,keyType:`${Gy(e)} key`,status:o?"Deactivated":"Active"}},QO=XO("public"),eS=XO("secret");B();B();var Se=(e,t,o,n,r)=>{let i=Number.parseInt(e,10);if(Number.isNaN(i)||i<t||i>o){let a=`${n} must be between ${t} and ${o}`;if(r)return v(a);return p(a)}return i},st=(e,t,o,n)=>{if(!t.includes(e)){let r=t.map((a)=>`"${a}"`).join(" or "),i=`${o} must be ${r}`;if(n)return v(i);return p(i)}return e};B();Sy();In();re();import*as dt from"node:fs";import*as Xa from"node:readline";var Ya=(e)=>new Promise((t)=>setTimeout(t,e));var fz=(e)=>{return`${e.getTime()*1e6}`},tS=(e,t)=>{let n=fz(new Date),r=e.filter((i)=>i.trim().length>0).map((i)=>({timeUnixNano:n,observedTimeUnixNano:n,severityNumber:9,severityText:"INFO",body:{stringValue:i},attributes:[]}));return{resourceLogs:[{resource:{attributes:[{key:"service.name",value:{stringValue:"sazabi-cli"}},{key:"sazabi.public_key",value:{stringValue:t}}]},scopeLogs:[{scope:{name:"sazabi-cli-forward",version:"1.0.0"},logRecords:r}]}]}};X();Ve();var kz="15003",$z=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},wz=(e)=>{let t=$z(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},_z=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!wz(t.hostname))return;return t.protocol="http:",t.port=kz,t.pathname="",t.search="",t.hash="",t.toString()},Oz=async(e,t)=>{if(!t)Y("Ensuring public key exists...");let o=await e.publicKeys.create({name:"sazabi-cli-forward"});if(!o.success){if(!t)Tt(`Failed to create public key: ${o.error}`);return null}if(!t)M(`Created new public key: ${o.value.publicKey.name}`);return o.value.publicKey.value},By=(e,t,o,n,r,i,a,c)=>{return async()=>{if(e.length===0)return;let u=tS(e,n),h=Az(u);if(e.length=0,h===0)return;if(!a)Y(`Forwarding ${h} logs...`);let s=await o.logs.forward({publicKey:n,logs:u,region:r,...i?{projectId:i}:{}});if(!s.success){if(Dz(s)){f(s,"Failed to forward logs",a);return}if(t.totalFailed+=h,!a)Fe(`Failed to forward logs: ${s.error}`);c?.({forwarded:0,failed:h});return}t.totalForwarded+=s.value.forwardedCount,t.totalFailed+=s.value.failedCount,c?.({forwarded:s.value.forwardedCount,failed:s.value.failedCount})}},Sz=async(e,t,o,n,r,i,a,c)=>{let u=dt.createReadStream(e),h=Xa.createInterface({input:u,crlfDelay:Number.POSITIVE_INFINITY}),s=[],g={totalForwarded:0,totalFailed:0},b=By(s,g,t,o,n,r,a,(y)=>c?.push(y));try{for await(let y of h)if(s.push(y),s.length>=i)await b()}catch(y){Tt(`Failed to read ${e}: ${y instanceof Error?y.message:String(y)}`);return}if(await b(),a);else if(R(),Gt(ae.muted("─".repeat(80))),M(`Forwarded ${g.totalForwarded} logs`),g.totalFailed>0)Fe(`Failed to forward ${g.totalFailed} logs`)},Tz=async(e,t,o,n,r,i,a)=>{let c=Xa.createInterface({input:process.stdin,output:process.stdout,terminal:!1}),u=[],h={totalForwarded:0,totalFailed:0},s=By(u,h,e,t,o,n,i,(g)=>a?.push(g));try{for await(let g of c)if(u.push(g),u.length>=r)await s()}catch(g){Tt(`Failed to read from stdin: ${g instanceof Error?g.message:String(g)}`);return}if(await s(),i);else if(R(),Gt(ae.muted("─".repeat(80))),M(`Forwarded ${h.totalForwarded} logs`),h.totalFailed>0)Fe(`Failed to forward ${h.totalFailed} logs`)},Pz=async(e,t,o,n,r,i,a,c)=>{let u=[],h={totalForwarded:0,totalFailed:0},s=By(u,h,t,o,n,r,a,(oe)=>c?.push(oe)),g=null,b=null,y=async()=>{if(b)clearTimeout(b);if(g)g.close();if(await s(),a);else if(R(),Gt(ae.muted("─".repeat(80))),M(`Forwarded ${h.totalForwarded} logs`),h.totalFailed>0)Fe(`Failed to forward ${h.totalFailed} logs`)};process.on("SIGINT",async()=>{R(),Y("Interrupted, flushing remaining logs..."),await y(),process.exit(0)});let _=null,S=null,H=!1,F=0,le=async()=>{if(H)return;H=!0;try{if((await dt.promises.stat(e)).size<F)F=0;_=dt.createReadStream(e,{encoding:"utf8",start:F}),S=Xa.createInterface({input:_,crlfDelay:Number.POSITIVE_INFINITY});for await(let Te of S)if(u.push(Te),u.length>=i)await s();F=(await dt.promises.stat(e)).size}catch(oe){Tt(`Failed to read ${e}: ${oe instanceof Error?oe.message:String(oe)}`)}finally{H=!1}};await le(),g=dt.watch(e,async(oe)=>{if(oe==="change"){if(b)clearTimeout(b);b=setTimeout(async()=>{if(H)return;if(_)_.close();if(S)S.close();await Ya(50),await le()},100)}})},rS=async(e)=>{let t=e.batchSize??100;if(t<=0){if(e.json)return v("Batch size must be a positive number");throw p("Batch size must be a positive number"),Error("Unreachable")}if(e.follow&&!e.file){if(e.json)return v("--follow flag requires --file to be specified");throw p("--follow flag requires --file to be specified"),Error("Unreachable")}let o=(()=>{let S=ie();if(!S.success)throw p(`Failed to read settings: ${S.error}`),Error("Unreachable");return S.value})(),n=f(Ze(o),"Failed to resolve profile"),r=e.json===!0,i=N({tokenFlag:e.token,jsonMode:r}),a=ht({cliFlag:e.apiBaseUrl,globalUrl:n.apiBaseUrl,globalDomain:n.apiDomain,buildUrlFromDomain:(S)=>`https://api.${S}`,defaultUrl:"https://api.sazabi.com"});if(!r)ce("Forwarding logs...");let c=await Ja({token:i.token,projectId:i.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:r});if(!r)Y(`Project: ${c.name}`);let u;if(e.region)u=Nz(e.region,r);else u=c.region;if(!r)Y(`Region: ${u}`);if(!r)Y(`Batch size: ${t}`);let h=e.intakeBaseUrl??n.intakeBaseUrl??_z(a)??(n.intakeDomain?CO(n.intakeDomain,u):void 0)??`https://otlp.${u}.intake.sazabi.com`;try{let S=new URL(h);if(!r&&/\.intake\.sazabi\.(dev|com)$/.test(S.host)&&!S.host.startsWith("otlp."))Fe("Intake base URL may not be the OTLP endpoint. For Sazabi, prefer https://otlp.{region}.intake.sazabi.dev or .com as appropriate.")}catch{}let s=ft({token:i.token,projectId:i.projectId,baseUrl:a,intakeBaseUrl:h}),g=e.publicKey?.trim()||n.forwardPublicKey?.trim()||void 0;if(!g){let S=await Oz(s,r);if(!S)throw p("Failed to get or create public key"),Error("Unreachable");g=S;let H=Re(o,{forwardPublicKey:g});if(H.success){let F=me(H.value);if(!F.success)Fe(`Failed to store public key: ${F.error}`)}}if(!r)R(),Gt(ae.muted("─".repeat(80))),R();let b=!e.follow,y=[],_={forwarded:0,failed:0};if(e.follow&&e.file)await Pz(e.file,s,g,u,i.projectId,t,r,b?y:void 0);else if(e.file)await Sz(e.file,s,g,u,i.projectId,t,r,y);else await Tz(s,g,u,i.projectId,t,r,y);for(let S of y)_.forwarded+=S.forwarded,_.failed+=S.failed;if(r){let S={forwardedCount:_.forwarded,failedCount:_.failed,batches:y,project:{id:c.id,name:c.name,region:u},intakeBaseUrl:h,batchSize:t,follow:Boolean(e.follow),file:e.file??void 0};console.log(JSON.stringify(S))}},Az=(e)=>{return e.resourceLogs?.reduce((t,o)=>t+(o.scopeLogs?.reduce((n,r)=>n+(r.logRecords?.length??0),0)??0),0)??0},Dz=(e)=>{if(e.success)return!1;if(e.errorPayload)return!0;if(e.statusCode!==void 0&&e.statusCode<500)return!0;return e.error.startsWith("Authentication failed")||e.error.startsWith("Client error (")},Nz=(e,t)=>{let o=Ka.safeParse(e);if(o.success)return o.data;let n=`Invalid region: ${e}.`;if(t)return v(n);return p(n)};B();re();X();import{readFile as Lz}from"node:fs/promises";var Cz={result:{label:"Result",type:{kind:"string"}},format:{label:"Format",type:{kind:"string"}},meta:{label:"Meta",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}}},xz={layout:"field-list",schema:Cz,fields:["result","format","meta"]},oS=async(e)=>{if(!e.query&&!e.file){if(e.json)return v("Pass --query or --file");return p("Pass --query or --file")}if(e.query&&e.file){if(e.json)return v("Pass either --query or --file, not both");return p("Pass either --query or --file, not both")}let t;if(e.query!==void 0)t=e.query;else try{t=await Lz(e.file,"utf8")}catch(i){let a=`Failed to read query file: ${i instanceof Error?i.message:String(i)}`;if(e.json)return v(a);return p(a)}if(t.trim().length===0){if(e.json)return v("Query cannot be empty");return p("Query cannot be empty")}let o=N({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),r=f(await n.logs.nativeQuery({query:t}),"Failed to run native log query",e.json);if(e.json){U(xz,r,{json:!0});return}Y(`Backend ${r.meta.backendId} returned ${r.result.length} characters in ${r.meta.took}ms${r.meta.truncated?" (truncated)":""}`),process.stdout.write(r.result.endsWith(`
`)?r.result:`${r.result}
`)};B();re();X();B();var zz=/^(\d+)(s|m|h|d)$/u,jz=(e,t)=>{let o=zz.exec(e.trim());if(!o){if(t)return v("Duration must use s, m, h, or d units, for example 30m");return p("Duration must use s, m, h, or d units, for example 30m")}let n=Number(o[1]),r=o[2];return n*(r==="s"?1000:r==="m"?60000:r==="h"?3600000:86400000)},nS=(e,t,o)=>{let n=new Date(e);if(Number.isNaN(n.getTime())){let r=`${t} must be a valid ISO-8601 timestamp`;if(o)return v(r);return p(r)}return n.toISOString()},uo=(e)=>{if(e.last&&(e.from||e.to)){if(e.json)return v("Use either --last or --from/--to, not both");return p("Use either --last or --from/--to, not both")}if(e.last){let n=new Date,r=new Date(n.getTime()-jz(e.last,e.json));if(!Number.isFinite(r.getTime())||!Number.isFinite(n.getTime())){if(e.json)return v("--last is out of supported date range");return p("--last is out of supported date range")}return{startDate:r.toISOString(),endDate:n.toISOString()}}let t=e.from?nS(e.from,"--from",e.json):void 0,o=e.to?nS(e.to,"--to",e.json):void 0;if(t&&o&&new Date(t)>=new Date(o)){if(e.json)return v("--from must be before --to");return p("--from must be before --to")}return{startDate:t,endDate:o}};var Ez={patterns:{label:"Patterns",type:{kind:"custom",render:(e)=>`${Array.isArray(e)?e.length:0} patterns`,serialize:(e)=>e}},meta:{label:"Meta",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}}},Uz={layout:"field-list",schema:Ez,fields:["patterns","meta"]},Rz={severity:{label:"Severity",type:{kind:"custom",render:(e)=>typeof e==="string"&&e.length>0?bt(e):"(none)",serialize:(e)=>e}},occurrences:{label:"Occurrences",type:{kind:"number"},align:"right"},lastSeen:{label:"Last Seen",type:{kind:"nullable-date",emptyLabel:"(never)"}},pattern:{label:"Pattern",type:{kind:"truncated",maxLength:140}},representativeId:{label:"Representative",type:{kind:"nullable-string",emptyLabel:"(none)"}}},Kz={schema:Rz,columns:["severity","occurrences","lastSeen","pattern","representativeId"],header:{title:"Log patterns",variant:"search"},emptyMessage:"No matching log patterns."},Fz=(e)=>{let t=uo(e);return{...e.query?{query:e.query}:{},...e.severity?{severity:e.severity}:{},...t.startDate?{startDate:t.startDate}:{},...t.endDate?{endDate:t.endDate}:{},limit:e.limit??25}},iS=async(e)=>{let t=N({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),o=L({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=f(await o.logs.patterns(Fz(e)),"Failed to query log patterns",e.json);if(e.json){U(Uz,n,{json:!0});return}Gz(n)},Gz=(e)=>{if(e.patterns.length>0)Y(`Returned ${e.meta.count} pattern${e.meta.count===1?"":"s"} in ${e.meta.took}ms`);J(Kz,e.patterns,{count:e.meta.count})};B();re();X();var Za=500,Bz=new Set(["eq","neq","in","contains","starts_with","gt","gte","lt","lte","between","exists"]),Hz=(e)=>{if(e==="@timestamp")return"timestamp";return e},Qa=(e,t)=>{for(let o of t){let n=e[o];if(n===void 0||n===null)continue;if(typeof n==="string")return n;if(typeof n==="number"||typeof n==="boolean")return String(n)}return""},Mz=(e)=>{let t=Qa(e,["@timestamp","timestamp","time","ts","date"]);if(!t)return _e("(no time)");let o=new Date(t);if(Number.isNaN(o.getTime()))return t;return o.toISOString()},Jz=(e)=>{return Qa(e,["body","message","log","text","content","msg"])||_e("(no message)")},Vz=(e)=>{return Qa(e,["severity","level","log_level","priority"])},qz=(e)=>{return Qa(e,["service","service_name","serviceName","source"])},Wz=(e,t)=>{let o={};if(!t.omitSearch)o.search={query:e,mode:t.mode??"all",...t.searchFields?.length?{fields:t.searchFields}:{}};if(t.cursor!==void 0||t.limit!==void 0||t.all)o.pagination={limit:t.limit??(t.all?100:50),...t.cursor!==void 0?{cursor:t.cursor}:{}};if(t["sort-field"])o.sort={field:Hz(t["sort-field"]),direction:t["sort-direction"]??"desc"};if(t.select){let r=t.select.split(",").map((i)=>i.trim()).filter((i)=>i.length>0);if(r.length>0)o.select=r}let n=Qz(t);if(!n.ok)return{ok:!1,errors:n.errors};if(n.filters.length>0)o.filters=n.filters;return{ok:!0,input:o}};var Yz=(e)=>{if(e==="true")return!0;if(e==="false")return!1;let t=Number(e);if(e.trim()!==""&&Number.isFinite(t))return t;return e},Xz=(e)=>{let t=Number(e);if(e.trim()!==""&&Number.isFinite(t))return t;return e},Zz=(e)=>{let t=e.indexOf("=");if(t<=0)return{ok:!1,error:"Filter must use <field>.<op>=<value>"};let o=e.slice(0,t),n=e.slice(t+1),r=o.lastIndexOf(".");if(r<=0||r===o.length-1)return{ok:!1,error:"Filter must use <field>.<op>=<value>"};let i=o.slice(0,r),a=o.slice(r+1);if(!Bz.has(a))return{ok:!1,error:`Unsupported filter operator: ${a}`};if(a==="in"){let c=n.split(",").map((u)=>Xz(u.trim())).filter((u)=>u!=="");if(c.length===0)return{ok:!1,error:"in filters must include at least one value"};return{ok:!0,filter:{field:i,op:a,value:c}}}if(a==="between"){let c=n.includes("..")?n.split(".."):n.split(",");if(c.length!==2)return{ok:!1,error:"between filters must use <from>..<to>"};let[u,h]=c.map((s)=>s.trim());if(!u||!h)return{ok:!1,error:"between filters must use <from>..<to>"};return{ok:!0,filter:{field:i,op:a,value:{from:u,to:h}}}}if(a==="exists"){if(n!=="true"&&n!=="false")return{ok:!1,error:"exists filters must use true or false"};return{ok:!0,filter:{field:i,op:a,value:n==="true"}}}return{ok:!0,filter:{field:i,op:a,value:Yz(n)}}},Qz=(e)=>{let t=[],o=[],n=uo({from:e.from,to:e.to,last:e.last,json:e.json});if(n.startDate&&n.endDate)t.push({field:"timestamp",op:"between",value:{from:n.startDate,to:n.endDate}});else if(n.startDate)t.push({field:"timestamp",op:"gte",value:n.startDate});else if(n.endDate)t.push({field:"timestamp",op:"lte",value:n.endDate});if(e.service)t.push({field:"service",op:"eq",value:e.service});if(e.severity)t.push({field:"severity",op:"eq",value:e.severity});if(e.env)t.push({field:"environment",op:"eq",value:e.env});if(e.traceId)t.push({field:"trace_id",op:"eq",value:e.traceId});for(let r of e.filters??[]){let i=Zz(r);if(i.ok)t.push(i.filter);else o.push(`${r}: ${i.error}`)}if(o.length>0)return{ok:!1,errors:o};return{ok:!0,filters:t}},aS=async(e,t)=>{let o=N({tokenFlag:t.token,projectIdFlag:t.project,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t["api-base-url"],jsonMode:t.json}),r=Wz(e,t);if(!r.ok){if(t.json)return v({success:!1,error:"Invalid log query filters",errors:r.errors});return p(`Invalid log query filters: ${r.errors.join("; ")}`)}let i=r.input,a=t.all?await ej(n,i,t):f(await n.logs.query(i),"Failed to query logs",t.json);if(t.json){j(a);return}tj(a)},ej=async(e,t,o)=>{let n=[],r=t.pagination?.cursor,i=0;do{let a={...t,pagination:{limit:t.pagination?.limit??o.limit??100,...r?{cursor:r}:{}}},c=f(await e.logs.query(a),"Failed to query logs",o.json);n.push(...c.data),i+=c.meta.took,r=c.nextCursor}while(r);return{data:n,nextCursor:null,meta:{count:n.length,took:i}}},tj=(e)=>{let{data:t,nextCursor:o,meta:n}=e;if(t.length===0){Rt("No matching log rows.");return}Y(`Returned ${n.count} row${n.count===1?"":"s"} in ${n.took}ms`);let r=t.map((i)=>{let a=i,c=Vz(a);return{time:Mz(a),severity:c?bt(c,c):ae.muted(_e("(sev)")),service:qz(a)||_e("(service)"),message:qe(Jz(a),200)}});tt(r,[{header:"Time (UTC)",key:"time"},{header:"Severity",key:"severity"},{header:"Service",key:"service"},{header:"Message",key:"message"}],{header:{title:"Log query results",variant:"search",count:n.count}}),yt({type:"cursor",nextCursor:o})};B();re();X();var rj={backend:{label:"Backend",type:{kind:"custom",render:(e)=>{let t=e;return`${t.name} (${t.id})`},serialize:(e)=>e}},features:{label:"Features",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},commands:{label:"Commands",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},queryableFields:{label:"Queryable",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},searchableFields:{label:"Searchable",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},observedServiceNames:{label:"Observed Services",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},observedAttributeKeys:{label:"Observed Attributes",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},schemaContext:{label:"Schema Context",type:{kind:"custom",render:(e)=>e?JSON.stringify(e):"(none)",serialize:(e)=>e}}},oj={layout:"field-list",schema:rj,fields:["backend","features","commands","queryableFields","searchableFields","observedServiceNames","observedAttributeKeys","schemaContext"]},cS=async(e)=>{let t=N({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),o=L({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=f(await o.logs.schema({}),"Failed to fetch log schema",e.json);if(e.json){U(oj,n,{json:!0});return}nj(n)},nj=(e)=>{if(ce("Log backend"),ne({Backend:`${e.backend.name} (${e.backend.id})`,Kind:e.backend.kind,Commands:e.commands.join(", "),Features:e.features.join(", ")||"(none)"}),ce("Normalized fields"),ne({Queryable:e.queryableFields.join(", ")||"(none)",Searchable:e.searchableFields.join(", ")||"(none)"}),e.observedServiceNames.length>0)tt(e.observedServiceNames.map((t)=>({service:qe(t,80)})),[{header:"Observed Services",key:"service"}]);if(e.observedAttributeKeys.length>0)tt(e.observedAttributeKeys.map((t)=>({attribute:qe(t,80)})),[{header:"Observed Attributes",key:"attribute"}])};B();Ty();In();re();X();Ve();var lS=["ERROR","WARN","INFO","DEBUG","TRACE"],ij="15006",aj=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},cj=(e)=>{let t=aj(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},lj=(e)=>{let t=new Date(e.timestamp).toISOString().split("T")[1],o=bt(e.severity,e.severity.padEnd(7)),n=ae.cyan(e.service.padEnd(20)),r=e.body.length>120?`${e.body.substring(0,117)}...`:e.body;return`[${t}] ${o} ${n} ${r}`},hS=async(e)=>{let t=f($t(),"Failed to read settings"),o=e.json??!1,n=gj(t,e.apiBaseUrl),r=hj(e.severities,o),i=Hy(e.services),a=Hy(e.environments),c=N({tokenFlag:e.token,jsonMode:o}),u=await bj({apiBaseUrlFlag:e.apiBaseUrl,jsonMode:o,projectId:c.projectId,regionFlag:e.region,token:c.token}),h=ft({token:c.token,projectId:c.projectId,baseUrl:n,tailBaseUrl:dj(t,e.tailBaseUrl,u,n)}),s={severities:r,services:i,environments:a,searchTerm:e.search,traceId:e.traceId},g=new AbortController,b,y=0,_,S,H=()=>{b="interrupted",g.abort()};if(!o)uj({environments:a,region:u,search:e.search,services:i,severities:r,traceId:e.traceId});let F=f(await h.logs.tail({...c.projectId?{projectId:c.projectId}:{},...u?{region:u}:{},filters:s,signal:g.signal}),"Failed to tail logs",o);if(!o)M("Connected! Waiting for logs..."),R();if(process.on("SIGINT",H),e.duration&&e.duration>0)S=setTimeout(()=>{b="duration",g.abort()},e.duration*1000);try{for await(let le of F){if(y+=1,o){j(le);continue}Gt(lj(le))}}catch(le){_=le instanceof Error?le:Error(String(le))}finally{if(process.removeListener("SIGINT",H),S)clearTimeout(S)}if(_){if(o)return v(_.message);R(),bo(),Tt(_.message);return}if(o)return;if(R(),b==="duration")Y("Duration reached, closing connection...");if(b==="interrupted")Y("Interrupted, closing connection...");bo(),Y(`Connection closed. Received ${y} logs.`)},uj=(e)=>{if(ce("Tailing logs..."),e.severities?.length)Y(`Severities: ${e.severities.join(", ")}`);if(e.services?.length)Y(`Services: ${e.services.join(", ")}`);if(e.environments?.length)Y(`Environments: ${e.environments.join(", ")}`);if(e.search)Y(`Search: ${e.search}`);if(e.traceId)Y(`Trace ID: ${e.traceId}`);if(e.region)Y(`Region: ${e.region}`);bo(),R()},Hy=(e)=>{if(!e)return;let t=e.split(",").map((o)=>o.trim()).filter((o)=>o.length>0);return t.length>0?t:void 0},hj=(e,t)=>{let o=Hy(e)?.map((i)=>i.toUpperCase());if(!o)return;let n=o.find((i)=>!lS.includes(i));if(!n)return o;let r=`Invalid severity: ${n}. Valid values: ${lS.join(", ")}`;if(t)return v(r);return p(r)},gj=(e,t)=>{return ht({cliFlag:t,globalUrl:e.apiBaseUrl,globalDomain:e.apiDomain,buildUrlFromDomain:(o)=>`https://api.${o}`,defaultUrl:"https://api.sazabi.com"})},sj=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!cj(t.hostname))return;return t.protocol="ws:",t.port=ij,t.pathname="/tail",t.search="",t.hash="",t.toString()},dj=(e,t,o,n)=>{if(t)return t;if(e.tailBaseUrl)return e.tailBaseUrl;let r=sj(n);if(r)return r;if(e.tailDomain&&o)return`wss://${o}.tail.${e.tailDomain}`;if(o)return`wss://${o}.tail.sazabi.com`;return},bj=async(e)=>{if(e.regionFlag)return uS(e.regionFlag,e.jsonMode);if(!e.projectId)return;let t=await Ja({token:e.token,projectId:e.projectId,apiBaseUrlFlag:e.apiBaseUrlFlag,jsonMode:e.jsonMode});return uS(t.region,e.jsonMode)},uS=(e,t)=>{if(Ba(e))return e;let o=`Log tail is not supported for project region ${e}.`;if(t)return v(o);return p(o)};B();re();X();var yj={total:{label:"Total",type:{kind:"number"}},startDate:{label:"Start",type:{kind:"date"}},endDate:{label:"End",type:{kind:"date"}},interval:{label:"Interval",type:{kind:"string"}},series:{label:"Series",type:{kind:"custom",render:(e)=>`${Array.isArray(e)?e.length:0} series`,serialize:(e)=>e}}},mj={layout:"field-list",schema:yj,fields:["total","startDate","endDate","interval","series"]},pj={group:{label:"Group",type:{kind:"string"}},total:{label:"Total",type:{kind:"number"},align:"right"},points:{label:"Points",type:{kind:"custom",render:(e)=>Array.isArray(e)?String(e.length):"0",serialize:(e)=>e},align:"right"}},vj={schema:pj,columns:["group","total","points"],header:{title:"Log volume",variant:"results"},emptyMessage:"No log volume found."},Ij=(e)=>{if(e==="service")return"service_name";if(e==="severity")return"severity_text";return e},fj=(e)=>{let t=new Date,o=uo(e),n=o.endDate??t.toISOString();return{startDate:o.startDate??new Date(new Date(n).getTime()-3600000).toISOString(),endDate:n,...e.interval?{interval:e.interval}:{},...e.groupBy?{groupBy:Ij(e.groupBy)}:{},filters:{...e.service?{service_name:e.service}:{},...e.severity?{severity_text:e.severity}:{},...e.env?{environment:e.env}:{}}}},gS=async(e)=>{let t=N({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),o=L({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=f(await o.logs.volume(fj(e)),"Failed to query log volume",e.json);if(e.json){U(mj,n,{json:!0});return}kj(n)},kj=(e)=>{if(e.series.length>0)Y(`Total ${e.total} logs from ${e.startDate} to ${e.endDate} at ${e.interval}`);J(vj,e.series,{count:e.series.length})};var sS=(e,t)=>{let o=[],n=`--${t}=`;for(let r=0;r<e.length;r+=1){let i=e[r];if(i===void 0)continue;if(i===`--${t}`){let a=e[r+1];if(a!==void 0&&!a.startsWith("-"))o.push(a),r+=1;continue}if(i.startsWith(n))o.push(i.slice(n.length))}return o},dS=W("logs","Stream, search, and forward logs").withSubcommands({schema:P("schema","Describe the active log backend and query fields",async(e)=>{let{values:t}=T(e,{...V,project:{type:"string"}}),o={token:t.token,project:t.project,json:t.json,"api-base-url":t["api-base-url"]};await cS(o)}).withOptions({...q,project:{type:"string",description:"Override project ID (default: active project)"}}).withExamples(["sazabi logs schema  # Show backend, commands, and fields","sazabi logs schema --json  # Machine-readable schema context"]).build(),tail:P("tail","Stream logs from current project in real-time",async(e)=>{let{values:t}=T(e,{...V,severities:{type:"string"},services:{type:"string"},environments:{type:"string"},search:{type:"string"},"trace-id":{type:"string"},duration:{type:"string"},"tail-base-url":{type:"string"},region:{type:"string"}}),o={};if(t.token)o.token=t.token;if(t.severities)o.severities=t.severities;if(t.services)o.services=t.services;if(t.environments)o.environments=t.environments;if(t.search)o.search=t.search;if(t["trace-id"])o.traceId=t["trace-id"];if(t.duration)o.duration=Se(t.duration,1,Number.MAX_SAFE_INTEGER,"Duration",t.json);if(t.json)o.json=!0;if(t["tail-base-url"])o.tailBaseUrl=t["tail-base-url"];if(t.region)o.region=t.region;if(t["api-base-url"])o.apiBaseUrl=t["api-base-url"];await hS(o)}).withOptions({...q,severities:{type:"string",description:"Filter by comma-separated severities (e.g., ERROR,WARN,INFO)"},services:{type:"string",description:"Filter by comma-separated service names"},environments:{type:"string",description:"Filter by comma-separated environments"},search:{type:"string",description:"Filter by search term (case-insensitive)"},"trace-id":{type:"string",description:"Filter by trace ID"},duration:{type:"string",description:"Duration to tail in seconds (default: unlimited)"},"tail-base-url":{type:"string",description:"Override tail WebSocket base URL"},region:{type:"string",description:"Override project region"}}).withExamples(["sazabi logs tail  # Tail all logs in real-time","sazabi logs tail --severities ERROR,WARN  # Tail only errors and warnings","sazabi logs tail --services api,worker  # Tail specific services","sazabi logs tail --environments production,staging  # Tail specific environments",'sazabi logs tail --search "database"  # Tail logs matching search term',"sazabi logs tail --json  # Output as JSON"]).build(),query:P("query","Search stored logs in the current project (POST /logs/query)",async(e)=>{let{values:t,positionals:o}=T(e,{...V,project:{type:"string"},limit:{type:"string"},cursor:{type:"string"},mode:{type:"string"},"sort-field":{type:"string"},"sort-direction":{type:"string"},select:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},service:{type:"string"},severity:{type:"string"},env:{type:"string"},"trace-id":{type:"string"},filter:{type:"string"},"search-field":{type:"string"},"query-all":{type:"boolean"},all:{type:"boolean"}},{allowPositionals:!0}),n=o.join(" ").trim(),r=sS(e,"filter"),i=sS(e,"search-field"),a=Boolean(t.from||t.to||t.last||t.service||t.severity||t.env||t["trace-id"])||r.length>0;if(!n&&!t["query-all"]&&!a){if(t.json)return v("Search text, a structured filter, or --query-all is required. Usage: sazabi logs query <search-text> [options]");return p("Search text, a structured filter, or --query-all is required. Usage: sazabi logs query <search-text> [options]")}if(n.length>Za){if(t.json)return v(`Search text must be at most ${Za} characters`);return p(`Search text must be at most ${Za} characters`)}if(n&&t["query-all"]){if(t.json)return v("Pass either a search phrase or --query-all, not both");return p("Pass either a search phrase or --query-all, not both")}if(t.mode&&!n){if(t.json)return v("--mode requires search text (search is omitted)");return p("--mode requires search text (search is omitted)")}let c={token:t.token,project:t.project,json:t.json,"api-base-url":t["api-base-url"],omitSearch:t["query-all"]===!0||!n,from:t.from,to:t.to,last:t.last,service:t.service,severity:t.severity,env:t.env,traceId:t["trace-id"],filters:r,searchFields:i,all:t.all};if(t.limit)c.limit=Se(t.limit,1,1000,"Limit",t.json);if(t.cursor)c.cursor=t.cursor;if(t.mode)c.mode=st(t.mode,["any","all","phrase"],"Mode",t.json);if(t["sort-field"])c["sort-field"]=t["sort-field"];if(t["sort-direction"]&&!t["sort-field"]){if(t.json)return v("--sort-direction requires --sort-field");return p("--sort-direction requires --sort-field")}if(t["sort-direction"])c["sort-direction"]=st(t["sort-direction"],["asc","desc"],"Sort direction",t.json);if(t.select)c.select=t.select;await aS(n,c)}).withPositionalArgs("[search-text]").withOptions({...q,project:{type:"string",description:"Override project ID (default: active project)"},limit:{type:"string",description:"Max rows to return (1-1000, default: 50)"},cursor:{type:"string",description:"Pagination cursor from a previous response"},mode:{type:"string",description:"Token match mode: any, all, or phrase (default: all)"},"sort-field":{type:"string",description:"Field to sort by (e.g. @timestamp)"},"sort-direction":{type:"string",description:"Sort direction: asc or desc (default: desc)"},select:{type:"string",description:"Comma-separated fields to return"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},service:{type:"string",description:"Filter by service name"},severity:{type:"string",description:"Filter by severity, for example ERROR"},env:{type:"string",description:"Filter by deployment environment"},"trace-id":{type:"string",description:"Filter by trace ID"},filter:{type:"string",description:"Structured filter as <field>.<op>=<value>; repeatable"},"search-field":{type:"string",description:"Restrict full-text search to a field; repeatable"},"query-all":{type:"boolean",description:"Omit full-text search and return the API default slice (sort/pagination only; server may require other filters)"},all:{type:"boolean",description:"Fetch all pages until the server returns no cursor"}}).withExamples(['sazabi logs query "connection refused" --last 1h --service api --severity ERROR  # Search recent API errors',"sazabi logs query --trace-id abc123 --select timestamp,service,severity,body  # Find logs for one trace","sazabi logs query --filter http_status_code.gte=500 --limit 100 --json  # Machine-readable structured filter","sazabi logs query error --mode any --limit 100  # Match any token with a larger page","sazabi logs query --query-all --limit 20 --sort-field @timestamp  # Recent rows without full-text search","sazabi logs query slow --json  # Machine-readable output"]).build(),patterns:P("patterns","Search normalized log patterns for discovery",async(e)=>{let{values:t,positionals:o}=T(e,{...V,project:{type:"string"},severity:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},limit:{type:"string"}},{allowPositionals:!0}),n={token:t.token,project:t.project,query:o.join(" ").trim()||void 0,severity:t.severity,from:t.from,to:t.to,last:t.last,json:t.json,"api-base-url":t["api-base-url"]};if(t.limit)n.limit=Se(t.limit,1,100,"Limit",t.json);await iS(n)}).withPositionalArgs("[pattern-text]").withOptions({...q,project:{type:"string",description:"Override project ID (default: active project)"},severity:{type:"string",description:"Filter by severity, for example ERROR"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},limit:{type:"string",description:"Max patterns to return (1-100, default: 25)"}}).withExamples(['sazabi logs patterns "connection refused" --severity ERROR --limit 25  # Find recurring error patterns',"sazabi logs patterns --last 24h --json  # Export recent patterns"]).build(),volume:P("volume","Summarize log volume by time and optional dimension",async(e)=>{let{values:t}=T(e,{...V,project:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},interval:{type:"string"},"group-by":{type:"string"},service:{type:"string"},severity:{type:"string"},env:{type:"string"}}),o={token:t.token,project:t.project,from:t.from,to:t.to,last:t.last,service:t.service,severity:t.severity,env:t.env,json:t.json,"api-base-url":t["api-base-url"]};if(t.interval)o.interval=st(t.interval,["1m","5m","15m","1h"],"Interval",t.json);if(t["group-by"])o.groupBy=st(t["group-by"],["service","severity","environment"],"Group by",t.json);await gS(o)}).withOptions({...q,project:{type:"string",description:"Override project ID (default: active project)"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},interval:{type:"string",description:"Bucket interval: 1m, 5m, 15m, or 1h"},"group-by":{type:"string",description:"Group by service, severity, or environment"},service:{type:"string",description:"Filter by service name"},severity:{type:"string",description:"Filter by severity, for example ERROR"},env:{type:"string",description:"Filter by deployment environment"}}).withExamples(["sazabi logs volume --last 6h --group-by service  # Compare service log volume","sazabi logs volume --last 24h --severity ERROR --interval 15m --json  # Export error volume"]).build(),"native-query":P("native-query","Run a backend-native read-only log query",async(e)=>{let{values:t}=T(e,{...V,project:{type:"string"},query:{type:"string"},file:{type:"string",short:"f"}}),o={token:t.token,project:t.project,query:t.query,file:t.file,json:t.json,"api-base-url":t["api-base-url"]};await oS(o)}).withOptions({...q,project:{type:"string",description:"Override project ID (default: active project)"},query:{type:"string",description:"Backend-native query text"},file:{type:"string",short:"f",description:"Read backend-native query text from a file"}}).withExamples(['sazabi logs native-query --query "SELECT service_name, count() FROM log_volume_per_minute GROUP BY service_name LIMIT 20"  # Run backend-native query text',"sazabi logs native-query --file investigation.sql --json  # Run a query from a file"]).build(),forward:P("forward","Forward plaintext logs to current project",async(e)=>{let{values:t}=T(e,{...V,file:{type:"string",short:"f"},follow:{type:"boolean"},"batch-size":{type:"string"},"intake-base-url":{type:"string"},"public-key":{type:"string"},region:{type:"string"}}),o={};if(t.token)o.token=t.token;if(t.file)o.file=t.file;if(t.follow)o.follow=t.follow;if(t["batch-size"])o.batchSize=Se(t["batch-size"],1,Number.MAX_SAFE_INTEGER,"Batch size",t.json);if(t["api-base-url"])o.apiBaseUrl=t["api-base-url"];if(t["intake-base-url"])o.intakeBaseUrl=t["intake-base-url"];if(t.region)o.region=t.region;if(t["public-key"])o.publicKey=t["public-key"];await rS({...o,json:t.json})}).withOptions({...q,json:{type:"boolean",description:"Output a final JSON summary"},file:{type:"string",short:"f",description:"Read from file instead of stdin"},follow:{type:"boolean",description:"Follow file for new lines (like tail -f)"},"batch-size":{type:"string",description:"Number of logs to batch before sending (default: 100)"},"intake-base-url":{type:"string",description:"Override intake base URL"},"public-key":{type:"string",description:"Use this public key value (skip creating/storing)"},region:{type:"string",description:"Override project region"}}).withExamples(['echo "Log message" | sazabi logs forward  # Forward from stdin',"sazabi logs forward --file app.log  # Forward from file","sazabi logs forward --file app.log --follow  # Forward file with tail -f behavior","sazabi logs forward --file app.log --batch-size 50  # Forward with custom batch size"]).build()}).withExamples(["sazabi logs tail  # Tail all logs in real-time","sazabi logs tail --severities ERROR,WARN  # Tail only errors and warnings",'sazabi logs query "timeout"  # Search stored logs',"sazabi logs forward --file app.log  # Forward from file"]).build();B();re();X();var bS={membershipId:{label:"Membership ID",type:{kind:"string"}},userId:{label:"User ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"nullable-string"}},email:{label:"Email",type:{kind:"string"}},role:{label:"Role",type:{kind:"string"}}},$j={schema:bS,columns:["membershipId","userId","name","email","role"],header:"Members",emptyMessage:"No members found."},wj={layout:"field-list",schema:bS,fields:["membershipId","userId","name","email","role"]},_j=async(e)=>{let t=N({tokenFlag:e.token,organizationIdFlag:e.organizationId,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.members.list({organizationId:t.organizationId}),"Failed to list members",e.json);J($j,n.members,{json:e.json})},Oj=async(e,t)=>{let o=N({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.members.updateRole(e,t.role,o.organizationId),"Failed to update member role",t.json);U(wj,r.member,{json:t.json})},Sj=async(e,t)=>{let o=N({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.members.remove(e,o.organizationId),"Failed to remove member",t.json);if(t.json){j(r);return}M(`Removed ${r.removedUserId} from the active organization.`)},yS=W("members","Manage organization members").withSubcommands({list:P("list","List members in the active organization",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await _j({token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members list  # List members in the active organization"]).build(),"update-role":P("update-role","Update one member's organization role",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},"organization-id":{type:"string"},role:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("User ID is required.");return p("User ID is required.")}if(t.role!=="admin"&&t.role!=="member"){if(t.json)return v("Role must be either 'admin' or 'member'.");return p("Role must be either 'admin' or 'member'.")}await Oj(n,{token:t.token,organizationId:t["organization-id"],role:t.role,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},role:{type:"string",description:"New role: admin or member"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members update-role user_123 --role admin  # Promote a member to admin"]).build(),remove:P("remove","Remove one member from the active organization",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("User ID is required.");return p("User ID is required.")}await Sj(n,{token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members remove user_123  # Remove a member from the active organization"]).build()}).withExamples(["sazabi members list  # List members in the active organization","sazabi members update-role user_123 --role admin  # Promote a member to admin","sazabi members remove user_123  # Remove a member from the active organization"]).build();B();re();X();B();re();X();X();var Tj=2000,ec=async(e)=>{let t=e.pollIntervalMs??Tj,o=Date.now(),n=!1,r={completed:!1,threadId:e.threadId,runId:e.runId,status:"processing",response:null};while(!0){let i=await e.client.runs.get(e.runId);if(!i.success){if(!Aj(i))return My(e.printProgress,n),i}else if(r=i.value,i.value.completed)return My(e.printProgress,n),i;if(e.timeoutMs!==void 0&&Date.now()-o>=e.timeoutMs)return My(e.printProgress,n),ke(r);n=Pj(e.printProgress,n),await Ya(t)}},Pj=(e,t)=>{if(!e)return t;if(!t)process.stdout.write(`
`);return process.stdout.write("."),!0},My=(e,t)=>{if(!e||!t)return;process.stdout.write(`
`)},Aj=(e)=>{return e.statusCode===404};var Dj={threadId:{label:"Thread ID",type:{kind:"id"}},messageId:{label:"Message ID",type:{kind:"nullable-string",emptyLabel:"(pending)"}},url:{label:"URL",type:{kind:"nullable-string"},get:(e)=>e.threadUrl??null},runId:{label:"Run ID",type:{kind:"id"}},status:{label:"Status",type:{kind:"string"}},pollWith:{label:"Poll with",type:{kind:"string"},get:(e)=>`sazabi runs get ${e.runId}`},response:{label:"Response",type:{kind:"nullable-string"},get:(e)=>e.response}},Nj={layout:"sections",schema:Dj,primary:{title:"Thread",fields:["threadId","messageId","url","runId","status","pollWith"]},secondary:[{title:"Response",field:"response"}]},pS=async(e,t={})=>{let o=Date.now(),n=N({tokenFlag:t.token,jsonMode:t.json}),r=L({token:n.token,projectId:n.projectId,apiBaseUrlFlag:t.apiBaseUrl}),i=await Lj({message:e,threadId:t.threadId,projectId:n.projectId,json:t.json,client:r,wait:t.wait,timeoutMs:t.timeout});if(t.wait&&i.status==="processing"){let a=t.timeout===void 0?void 0:Math.max(0,t.timeout-(Date.now()-o)),c=f(await ec({client:r,runId:i.runId,threadId:i.threadId,timeoutMs:a,printProgress:!t.json}),"Failed to get run",t.json);i={...i,status:c.status,response:c.response,messageId:i.messageId??c.messageId}}U(Nj,i,{json:t.json})},Lj=async(e)=>{if(e.threadId){let o=f(await e.client.messages.append(e.threadId,e.message,e.wait??!1,mS(e.timeoutMs)),"Failed to send message",e.json);return{threadId:e.threadId,runId:o.result.runId,messageId:o.result.messageId,status:o.result.status,response:o.result.response,threadUrl:e.projectId?wt(e.projectId,e.threadId,void 0,o.result.messageId):void 0}}let t=f(await e.client.threads.create({message:e.message,...e.projectId?{projectId:e.projectId}:{},wait:e.wait??!1,timeoutSeconds:mS(e.timeoutMs)}),"Failed to create thread",e.json);return{threadId:t.result.threadId,runId:t.result.runId,messageId:t.result.messageId,status:t.result.status,response:t.result.response,threadUrl:e.projectId?wt(e.projectId,t.result.threadId,void 0,t.result.messageId):void 0}},mS=(e)=>{if(e===void 0)return 20;return Math.max(1,Math.min(Math.ceil(e/1000),20))};var Cj={id:{label:"ID",type:{kind:"string"}},role:{label:"Role",type:{kind:"role"}},content:{label:"Content",type:{kind:"custom",render:(e)=>{let o=e.find((n)=>n.type==="message"&&Boolean(n.message));return o?qe(o.message):_e("(no text)")}}},createdAt:{label:"Created",type:{kind:"date"}}},xj={schema:Cj,columns:["id","role","content","createdAt"],header:"Messages",emptyMessage:"No messages found."},zj={id:{label:"ID",type:{kind:"string"}},threadTitle:{label:"Thread",type:{kind:"nullable-string",emptyLabel:"(no title)"}},role:{label:"Role",type:{kind:"role"}},content:{label:"Content",type:{kind:"custom",render:(e)=>qe(e)}},score:{label:"Score",align:"right",type:{kind:"custom",render:(e)=>e!=null?e.toFixed(2):"-"}}},jj={schema:zj,columns:["id","threadTitle","role","content","score"],header:{title:"Search Results",variant:"search"},emptyMessage:"No matching messages found."},Ej=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{messages:r,nextCursor:i}=f(await n.messages.list(e,{limit:t.limit,cursor:t.cursor}),"Failed to list messages",t.json);J(xj,r,{json:t.json,nextCursor:i})},Uj=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{messages:r,pagination:i}=f(await n.search.messages({query:e,limit:t.limit,page:t.page,threadId:t.threadId,role:t.role}),"Failed to search messages",t.json);if(t.json){j({messages:r,pagination:i});return}J(jj,r,{count:i.totalResults}),yt({type:"page",page:i.page,totalPages:i.totalPages})},vS=W("messages","Send, list, and search messages").withSubcommands({send:P("send","Send a message (creates new thread if --thread-id omitted)",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},"thread-id":{type:"string",short:"t"},wait:{type:"boolean"},timeout:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o.join(" ");if(!n){if(t.json)return v("Message is required. Usage: sazabi messages send <message> [--thread-id <id>]");return p("Message is required. Usage: sazabi messages send <message> [--thread-id <id>]")}let r=t.timeout?Se(t.timeout,1,3600,"Timeout",t.json)*1000:void 0,i={token:t.token,threadId:t["thread-id"],wait:t.wait,timeout:r,json:t.json,apiBaseUrl:t["api-base-url"]};await pS(n,i)}).withPositionalArgs("<message>").withOptions({token:{type:"string",description:"Override authentication token"},"thread-id":{type:"string",short:"t",description:"Thread ID to append to (creates new thread if omitted)"},wait:{type:"boolean",description:"Wait for assistant response and print it"},timeout:{type:"string",description:"Timeout in seconds to wait for response before returning processing state"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi messages send 'Hello'                         # Start a new thread","sazabi messages send 'Hello' --thread-id abc123      # Append to existing thread","sazabi messages send 'Hello' -t abc123 --wait        # Append and wait for reply","sazabi messages send 'Hello' --wait                  # New thread, wait for reply","sazabi messages send 'Hello' --wait --timeout 120    # Wait up to 2 minutes"]).build(),list:P("list","List messages in a thread",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},limit:{type:"string"},cursor:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi messages list <thread-id>");return p("Thread ID is required. Usage: sazabi messages list <thread-id>")}if(o.length>1){let i=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${i}`);return p(`Unexpected arguments: ${i}`)}let r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.cursor)r.cursor=t.cursor;await Ej(n,r)}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of messages to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi messages list <thread-id>  # List all messages in thread","sazabi messages list <thread-id> --limit 20  # List with custom limit","sazabi messages list <thread-id> --cursor xyz  # List next page"]).build(),search:P("search","Search messages in current project",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},limit:{type:"string"},page:{type:"string"},"thread-id":{type:"string"},role:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o.join(" ");if(!n){if(t.json)return v("Search query is required. Usage: sazabi messages search <query>");return p("Search query is required. Usage: sazabi messages search <query>")}let r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.page)r.page=Se(t.page,1,Number.MAX_SAFE_INTEGER,"Page",t.json);if(t["thread-id"])r.threadId=t["thread-id"];if(t.role)r.role=st(t.role,["user","assistant"],"Role",t.json);await Uj(n,r)}).withPositionalArgs("<query>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of results (default: 20, max: 100)"},page:{type:"string",description:"Page number for pagination (default: 1)"},"thread-id":{type:"string",description:"Filter messages by thread ID"},role:{type:"string",description:"Filter by role: user or assistant"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi messages search "error handling"  # Search messages','sazabi messages search "bug" --limit 50  # Search with limit','sazabi messages search "user input" --role user  # Search user messages only','sazabi messages search "response" --thread-id thread-123  # Search in specific thread']).build()}).withExamples(["sazabi messages send 'Hello'                      # Start a new thread","sazabi messages send 'Follow up' -t <thread-id>   # Append to thread","sazabi messages list <thread-id>                  # List messages in thread",'sazabi messages search "error"                    # Search messages']).build();B();re();X();Ve();var IS={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},slug:{label:"Slug",type:{kind:"string"}},role:{label:"Role",type:{kind:"nullable-string"}}},Rj={schema:IS,columns:["id","name","slug","role"],header:"Organizations",emptyMessage:"No organizations found."},Kj={layout:"field-list",schema:IS,fields:["id","name","slug","role"]},Fj=async(e)=>{let t=N({tokenFlag:e.token,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.organizations.list(),"Failed to list organizations",e.json);J(Rj,n.organizations,{json:e.json})},Gj=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=f(ie(),"Failed to read settings",t.json),r=L({token:o.token,organizationId:e,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=f(await r.organizations.get(e),"Failed to select organization",t.json).organization,a=f(await r.projects.list({organizationId:e}),"Failed to fetch organization projects",t.json).projects,c=f(Ze(n),"Failed to resolve profile",t.json),u=f(Re(n,{activeOrganizationId:i.id,organizationName:i.name,activeProjectId:c.activeProjectId&&a.some((h)=>h.id===c.activeProjectId)?c.activeProjectId:a[0]?.id}),"Failed to update profile",t.json);if(f(me(u),"Failed to persist active organization",t.json),t.json){j({organization:i,activeProjectId:f(Ze(u),"Failed to resolve profile",t.json).activeProjectId});return}M(`Active organization set to ${i.name}.`)},Bj=async(e,t)=>{let o=N({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.organizations.rename(e,o.organizationId),"Failed to rename organization",t.json);Hj(r.organization.id,r.organization.name),U(Kj,r.organization,{json:t.json})},Hj=(e,t)=>{let o=ie();if(!o.success)return;let n=o.value,r=Ze(n);if(!r.success)return;if(r.value.activeOrganizationId!==e)return;let i=Re(n,{organizationName:t});if(i.success)me(i.value)},fS=W("organizations","Manage organizations").withSubcommands({list:P("list","List organizations available to the current credential",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Fj({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi organizations list  # List available organizations"]).build(),use:P("use","Set the active organization for future commands",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Organization ID is required.");return p("Organization ID is required.")}await Gj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi organizations use org_123  # Set the active organization"]).build(),rename:P("rename","Rename the active organization",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Organization name is required.");return p("Organization name is required.")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await Bj(n,{token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi organizations rename "Observed Platform"  # Rename the active organization']).build()}).withExamples(["sazabi organizations list  # List available organizations","sazabi organizations use org_123  # Set the active organization",'sazabi organizations rename "Observed Platform"  # Rename the active organization']).build();B();X();Ve();var Mj={name:{label:"Profile",type:{kind:"string"}},active:{label:"Active",type:{kind:"custom",render:(e)=>e?ae.success("*"):"",serialize:(e)=>Boolean(e)}}},Jj=(e)=>{let t=f(ie(),"Failed to read settings",e.json),o=Object.keys(t.profiles).map((n)=>({name:n,active:n===t.activeProfile}));J({schema:Mj,columns:["name","active"],header:"Profiles",emptyMessage:"No profiles configured."},o,{json:e.json})},Vj=(e,t)=>{let o=f(ie(),"Failed to read settings",t.json);if(!o.profiles[e]){let n=`Profile '${e}' does not exist. Run 'sazabi profiles list' to see available profiles.`;if(t.json)v(n);p(n)}if(o.activeProfile=e,f(me(o),"Failed to write settings",t.json),t.json){j({activeProfile:e});return}M(`Active profile set to '${e}'.`)},qj=(e,t)=>{let o=f(ie(),"Failed to read settings",t.json);if(o.profiles[e]){let n=`Profile '${e}' already exists.`;if(t.json)v(n);p(n)}if(o.profiles[e]={},f(me(o),"Failed to write settings",t.json),t.json){j({created:e});return}M(`Created profile '${e}'.`)},Wj=(e,t)=>{let o=f(ie(),"Failed to read settings",t.json);if(!o.profiles[e]){let n=`Profile '${e}' does not exist.`;if(t.json)v(n);p(n)}if(e===o.activeProfile){let n=`Cannot delete the active profile '${e}'. Switch to a different profile first with 'sazabi profiles use <name>'.`;if(t.json)v(n);p(n)}if(delete o.profiles[e],f(me(o),"Failed to write settings",t.json),t.json){j({deleted:e});return}M(`Deleted profile '${e}'.`)},kS=W("profiles","Manage named CLI profiles").withSubcommands({list:P("list","List all profiles",async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}});Jj({json:t.json})}).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles list  # List all profiles"]).build(),use:P("use","Set the active profile",async(e)=>{let{values:t,positionals:o}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles use <name>");return p("Profile name is required. Usage: sazabi profiles use <name>")}Vj(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles use staging  # Switch to staging profile"]).build(),create:P("create","Create a new empty profile",async(e)=>{let{values:t,positionals:o}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles create <name>");return p("Profile name is required. Usage: sazabi profiles create <name>")}qj(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles create staging  # Create a new profile"]).build(),delete:P("delete","Delete a profile",async(e)=>{let{values:t,positionals:o}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles delete <name>");return p("Profile name is required. Usage: sazabi profiles delete <name>")}Wj(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles delete staging  # Delete a profile"]).build()}).withExamples(["sazabi profiles list  # List all profiles","sazabi profiles use staging  # Switch to staging profile","sazabi profiles create local  # Create a new profile","sazabi profiles delete staging  # Delete a profile"]).build();B();re();X();Ve();var Yj={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},region:{label:"Region",type:{kind:"string"}},active:{label:"Active",type:{kind:"custom",render:(e)=>e?ae.success("*"):"",serialize:(e)=>e}}},Xj={schema:Yj,columns:["id","name","region","active"],header:"Projects",emptyMessage:"No projects found."},Zj=async(e)=>{let t=N({tokenFlag:e.token,organizationIdFlag:e.organizationId,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),r=f(await o.projects.list({organizationId:t.organizationId}),"Failed to list projects",e.json).projects.map((i)=>({...i,active:i.id===t.projectId}));J(Xj,r,{json:e.json})},Qj=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=f(ie(),"Failed to read settings",t.json),r=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=f(await r.projects.get(e),"Failed to select project",t.json).project,a=i.organizationId!==n.profiles[ut(n)]?.activeOrganizationId,c=f(Re(n,{activeOrganizationId:i.organizationId,activeProjectId:i.id,...a&&{organizationName:void 0}}),"Failed to update profile",t.json);if(f(me(c),"Failed to persist active project",t.json),t.json){j({project:i});return}M(`Active project set to ${i.name}.`)},$S=W("projects","Manage projects").withSubcommands({list:P("list","List projects in the active organization",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(o.length>0){let n=o.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return p(`Unexpected arguments: ${n}`)}await Zj({token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi projects list  # List projects in the active organization"]).build(),use:P("use","Set the active project for future commands",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Project ID is required.");return p("Project ID is required.")}await Qj(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi projects use 11111111-1111-4111-8111-111111111111  # Set the active project"]).build()}).withExamples(["sazabi projects list  # List projects in the active organization","sazabi projects use 11111111-1111-4111-8111-111111111111  # Set the active project"]).build();B();re();X();var eE={runId:{label:"Run ID",type:{kind:"id"}},threadId:{label:"Thread ID",type:{kind:"id"}},status:{label:"Status",type:{kind:"string"}},completed:{label:"Completed",type:{kind:"boolean"}},messageId:{label:"Message ID",type:{kind:"nullable-string",emptyLabel:"(none)"}},response:{label:"Response",type:{kind:"nullable-string"}}},tE={layout:"sections",schema:eE,primary:{title:"Run",fields:["runId","threadId","status","completed","messageId"]},secondary:[{title:"Response",field:"response"}]},rE=async(e,t={})=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),r=f(await n.runs.get(e),"Failed to get run",t.json),i=t.wait&&!r.completed?f(await ec({client:n,runId:e,threadId:r.threadId,timeoutMs:t.timeout,printProgress:!t.json}),"Failed to get run",t.json):r;if(U(tE,i,{json:t.json}),!t.json&&!i.completed)R(),Y(`Poll with: sazabi runs get ${i.runId}`)},wS=W("runs","Inspect deferred agent runs").withSubcommands({get:P("get","Get a deferred run by run ID",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},wait:{type:"boolean"},timeout:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Run ID is required. Usage: sazabi runs get <run-id>");return p("Run ID is required. Usage: sazabi runs get <run-id>")}if(o.length>1){let i=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${i}`);return p(`Unexpected arguments: ${i}`)}let r=t.timeout?Se(t.timeout,1,3600,"Timeout",t.json)*1000:void 0;await rE(n,{token:t.token,wait:t.wait,timeout:r,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<run-id>").withOptions({token:{type:"string",description:"Override authentication token"},wait:{type:"boolean",description:"Wait for terminal status and print the final result"},timeout:{type:"string",description:"Timeout in seconds to wait before returning processing state"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi runs get <run-id>  # Check current run status","sazabi runs get <run-id> --wait  # Wait until the run is terminal","sazabi runs get <run-id> --wait --timeout 60  # Wait up to 60 seconds","sazabi runs get <run-id> --json  # Output run state as JSON"]).build()}).withExamples(["sazabi runs get <run-id>  # Check current run status","sazabi runs get <run-id> --wait  # Wait until the run is terminal"]).build();B();X();Ve();var Jy=["apiBaseUrl","authBaseUrl","webBaseUrl","intakeBaseUrl","tailBaseUrl","apiDomain","webDomain","intakeDomain","tailDomain","forwardPublicKey"],_S=(e)=>{return Jy.includes(e)},oE=["apiBaseUrl","authBaseUrl","webBaseUrl","intakeBaseUrl","tailBaseUrl"],nE=(e)=>oE.includes(e),iE={apiBaseUrl:["http:","https:"],authBaseUrl:["http:","https:"],webBaseUrl:["http:","https:"],intakeBaseUrl:["http:","https:"],tailBaseUrl:["ws:","wss:","http:","https:"]},aE=(e,t)=>{let o=(()=>{try{return new URL(t)}catch{return null}})();if(!o)return de(`Invalid URL for ${e}: '${t}'`);let n=iE[e];if(!n.includes(o.protocol))return de(`Invalid protocol '${o.protocol}' for ${e}. Allowed: ${n.join(", ")}`);return ke(o.toString().replace(/\/+$/,""))},cE=(e={})=>{let t=f(ie(),"Failed to read settings",e.json),o=ut(t),n=f(Ze(t),"Failed to resolve profile",e.json);if(e.json){j({success:!0,settingsFile:co,profile:o,settings:n});return}ne({"Settings file":co,"Active profile":o}),R();let r=Object.entries(n).filter(([,a])=>a!=null);if(r.length===0){Rt("No settings configured.");return}let i=r.map(([a,c])=>({key:a,value:String(c)})).sort((a,c)=>a.key.localeCompare(c.key));tt(i,[{header:"Key",key:"key",width:20},{header:"Value",key:"value"}],{header:"Settings"})},lE=(e,t,o={})=>{if(!_S(e)){let a=Jy.join(", "),c=`Invalid setting key: '${e}'. Valid keys: ${a}`;if(o.json){v(c);return}p(c);return}let n=t;if(nE(e)){let a=aE(e,t);if(!a.success){if(o.json){v(a.error);return}p(a.error);return}n=a.value}let r=f(ie(),"Failed to read settings",o.json),i=f(Re(r,{[e]:n}),"Failed to update profile",o.json);if(f(me(i),"Failed to write settings",o.json),o.json){j({success:!0,key:e,value:n});return}M(`Set ${e} to ${n}`)},uE=(e,t={})=>{if(!_S(e)){let r=Jy.join(", "),i=`Invalid setting key: '${e}'. Valid keys: ${r}`;if(t.json){v(i);return}p(i);return}let o=f(ie(),"Failed to read settings",t.json),n=f(Re(o,{[e]:void 0}),"Failed to update profile",t.json);if(f(me(n),"Failed to write settings",t.json),t.json){j({success:!0,key:e});return}M(`Cleared ${e}`)},OS=W("settings","Manage global CLI settings").withSubcommands({view:P("view","Show current CLI settings and file location",async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}});cE({json:t.json})}).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings view  # Show current settings","sazabi settings view --json  # Output as JSON"]).build(),set:P("set","Set a global configuration value",async(e)=>{let{values:t,positionals:o}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0],r=o[1];if(!n){if(t.json)return v("Setting key is required. Usage: sazabi settings set <key> <value>");return p("Setting key is required. Usage: sazabi settings set <key> <value>")}if(!r){if(t.json)return v("Value is required. Usage: sazabi settings set <key> <value>");return p("Value is required. Usage: sazabi settings set <key> <value>")}lE(n,r,{json:t.json})}).withPositionalArgs("<key> <value>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings set apiBaseUrl https://api.example.com  # Override a base URL (also: authBaseUrl, webBaseUrl, intakeBaseUrl, tailBaseUrl)"]).build(),unset:P("unset","Clear a global configuration value",async(e)=>{let{values:t,positionals:o}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Setting key is required. Usage: sazabi settings unset <key>");return p("Setting key is required. Usage: sazabi settings unset <key>")}uE(n,{json:t.json})}).withPositionalArgs("<key>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings unset apiBaseUrl  # Clear API base URL override","sazabi settings unset --json apiBaseUrl  # Output as JSON"]).build()}).withExamples(["sazabi settings view  # Show current settings","sazabi settings set apiBaseUrl https://api.example.com  # Set API base URL","sazabi settings unset apiBaseUrl  # Clear API base URL override"]).build();B();X();import*as US from"node:os";import*as RS from"node:path";import*as Ot from"node:path";var tc=["claude-code","codex","cursor","amp","opencode"],hE={"claude-code":{user:(e)=>Ot.join(e,".claude","skills"),project:(e)=>Ot.join(e,".claude","skills")},codex:{user:(e)=>Ot.join(e,".agents","skills"),project:(e)=>Ot.join(e,".agents","skills")},amp:{user:(e)=>Ot.join(e,".config","agents","skills"),project:(e)=>Ot.join(e,".agents","skills")},opencode:{user:(e)=>Ot.join(e,".config","opencode","skills"),project:(e)=>Ot.join(e,".opencode","skills")}},gE="Cursor does not support agent skills. Use Cursor Rules (.cursor/rules/*.mdc) instead. See https://cursor.com/docs/context/rules.",SS=(e)=>{if(e.agent==="cursor")return{kind:"unsupported",agent:"cursor",reason:gE};let t=hE[e.agent],o=e.scope==="user"?t.user(e.home):t.project(e.projectDir);return{kind:"supported",agent:e.agent,scope:e.scope,root:o}};jl();import{dirname as vE,resolve as IE}from"node:path";import{fileURLToPath as fE}from"node:url";var TS=`# Sazabi CLI Reference

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

Every list subcommand wraps results in a generic \`items\` array. Iterate \`.items[]\`, not \`.connections[]\` / \`.streams[]\` / \`.publicKeys[]\` / \`.projects[]\`. Applies to: \`data-sources types\`, \`data-sources connections list\`, \`data-sources streams list\`, \`public-keys list\`, \`secret-keys list\`, \`projects list\`, \`threads list\`, \`messages list\`, \`organizations list\`, \`members list\`, \`profiles list\`.

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
`;var PS=`# CLI Setup

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
`;var AS=`# MCP Server Setup

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
`;var DS=`---
name: sazabi
description: How to set up and use the Sazabi MCP server and CLI to interact with the Sazabi observability platform. Use this skill whenever the user wants to send messages to Sazabi, search or list threads, tail logs, forward logs, connect or manage data sources such as Vercel, inspect available Sazabi CLI capabilities, retrieve provider-specific setup skills via \`sazabi data-sources skill --type <type>\`, check thread status, configure MCP or CLI authentication, or do anything involving the Sazabi API, MCP tools, or CLI commands. Also use when you see mcp__sazabi__* tools available in your session and need guidance on how to use them effectively.
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
logs         tail | forward
threads      list | get | search | archive | unarchive
messages     send | list | search
runs         get

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
| "connect Vercel" / "onboard provider" | \`sazabi data-sources types\` → \`sazabi data-sources skill --type <type>\` |
| "list connections" / "list streams" | \`sazabi data-sources connections list\` / \`... streams list --connection-id <id>\` |
| "list/create API keys" | \`sazabi public-keys …\` / \`sazabi secret-keys …\` |

Use \`sazabi <group> <subcommand> -h\` only when you need flag details for a specific command — not to rediscover the command tree.

For local development or environments outside the Sazabi sandbox, substitute \`bunx @sazabi/cli <command>\` and assume the CLI may not be authenticated. See \`references/cli/setup.md\`.

## What You Can Do

**Investigate issues** — Send questions to Sazabi's agent about errors, performance, or incidents in any environment (production, staging, local dev). You have codebase context the agent doesn't; Sazabi has observability context you don't. Bridge the two by asking targeted questions.

**Search prior investigations** — Find and resume past threads. Before starting a new investigation, search for existing ones — someone may have already looked into this.

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
`;var LS='---\nname: sazabi-logs-search\ndescription: Search and analyze Sazabi logs with ClickHouse-backed tools. Use for log discovery, recurring errors, log volume, service liveness, attribute keys, raw log lookups, and after ClickHouse scan-limit, TYPE_MISMATCH, or UNKNOWN_TABLE errors.\n---\n\n# Sazabi Logs Search\n\nUse `clickhouse_query` for logs. Do not use `bash` for log queries.\n\n## Tools\n\n- `get_log_schema_context`: call first in a fresh log investigation. It returns available columns, services, attribute keys, and guardrails.\n- `clickhouse_query`: read-only `SELECT`. Org filtering is added automatically; you must add project/time filters where needed and `LIMIT` for row queries.\n- `clickhouse_health_check`: use only after connection/availability errors.\n- `log_detail`, `table`, `timeseries`: render artifacts when useful.\n\n## Pick The Table\n\n- Discovery questions: "do we log X?", "what patterns mention Y?", "common errors", "what is failing now?"\n  Use `log_pattern_state`. It is small and already aggregates normalized message patterns. No time filter is required for broad discovery.\n\n- Volume, liveness, intake health, bytes, per-minute trends, latest ingestion, adapter/public-key breakdown:\n  Use `log_volume_per_minute`. It has a 7-day TTL and aggregate-state columns.\n\n- Attribute-key discovery: "which keys does service X emit?", "does user.id exist?", "which services emit this key?"\n  Use `attributes`.\n\n- Raw rows, point lookups, structured-attribute filters, traces/spans, exact payloads:\n  Use `logs`. Always filter both `otel_timestamp_time` and `otel_timestamp` unless doing a point lookup by `canonical_id`, `otel_trace_id`, or `otel_span_id`.\n\n## Hard Rules\n\n1. Table name is `logs`, never `otel_logs`.\n2. Call `get_log_schema_context` before first query in a fresh investigation.\n3. Always add `LIMIT` to non-aggregation row queries. Hard ceiling is 10000.\n4. Never `SELECT *` from `logs`; avoid `raw`.\n5. On `logs`, use both time predicates:\n   `otel_timestamp_time >= ... AND otel_timestamp >= ...`.\n6. For body text search, use `hasAnyTokens(otel_body, \'lowercase needle\')`, `hasAllTokens`, or `hasPhrase`.\n7. Never use `lower(otel_body) LIKE \'%foo%\'`; it bypasses the text index and commonly hits scan limits.\n8. Low-cardinality fields like `otel_severity_text` can use `lower()`.\n9. Aggregate-state MVs need finalizers: `countMerge`, `sumMerge`, `maxMerge`.\n10. `log_pattern_state` time columns are `SimpleAggregateFunction`; finalize in `HAVING`, not `WHERE`.\n11. Use `parseDateTimeBestEffort(\'...\')` for `DateTime` and `parseDateTime64BestEffort(\'...\', 9)` for `DateTime64`.\n12. No `SETTINGS` clause. No joins except `ARRAY JOIN`. No `IN (SELECT ...)`; run the inner query first and expand explicit values.\n\n## Standard Flow\n\n1. Call `get_log_schema_context`.\n2. Pick the table using the rules above.\n3. Query with `clickhouse_query`.\n4. For an interesting pattern, drill into raw logs using its `representative_id` as `logs.canonical_id`.\n5. Use `timeseries` for bucketed numeric results, `table` for tabular results, and `log_detail` for one raw log entry.\n\n## Common Queries\n\n### Discover Patterns\n\n```sql\nSELECT\n  fingerprint,\n  any(pattern) AS pattern,\n  sum(occurrence_count) AS occurrences,\n  max(last_seen_at) AS last_seen,\n  any(representative_id) AS representative_id\nFROM log_pattern_state\nWHERE pattern ILIKE \'%<topic>%\'\nGROUP BY fingerprint\nORDER BY occurrences DESC\nLIMIT 50\n```\n\n### Top Recent Errors\n\n```sql\nSELECT\n  severity_text,\n  fingerprint,\n  any(pattern) AS pattern,\n  sum(occurrence_count) AS occurrences,\n  max(last_seen_at) AS last_seen,\n  any(representative_id) AS representative_id\nFROM log_pattern_state\nWHERE severity_text IN (\'ERROR\', \'FATAL\')\nGROUP BY severity_text, fingerprint\nHAVING max(last_seen_at) >= now() - INTERVAL 24 HOUR\nORDER BY occurrences DESC\nLIMIT 20\n```\n\nRare recent patterns: add\n`HAVING sum(occurrence_count) <= 3 AND max(last_seen_at) >= now() - INTERVAL 24 HOUR`.\n\n### Drill Into A Pattern\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_service_name,\n  otel_severity_text,\n  otel_body,\n  otel_log_attributes\nFROM logs\nWHERE canonical_id = \'<representative_id>\'\nLIMIT 1\n```\n\n### Volume / Traffic\n\n```sql\nSELECT\n  toStartOfInterval(minute, INTERVAL 1 HOUR) AS bucket,\n  countMerge(log_count) AS log_count,\n  sumMerge(bytes_sum) AS total_bytes\nFROM log_volume_per_minute\nWHERE minute >= now() - INTERVAL 24 HOUR\nGROUP BY bucket\nORDER BY bucket\n```\n\n### Service Liveness\n\n```sql\nSELECT\n  service_name,\n  maxMerge(last_ingested_at) AS last_ingested_at,\n  countMerge(log_count) AS recent_log_count\nFROM log_volume_per_minute\nWHERE minute >= now() - INTERVAL 1 HOUR\n  AND service_name = \'<service>\'\nGROUP BY service_name\n```\n\nGroup by `intake_adapter, public_api_key` for intake breakdowns.\n\n### Attribute Keys For A Service\n\n```sql\nSELECT\n  key,\n  maxMerge(last_seen_timestamp_state) AS last_seen\nFROM attributes\nWHERE service_name = \'<service>\'\nGROUP BY key\nORDER BY last_seen DESC\nLIMIT 100\n```\n\nWhich services emit a key:\n\n```sql\nSELECT\n  service_name,\n  maxMerge(last_seen_timestamp_state) AS last_seen\nFROM attributes\nWHERE key = \'<key>\'\nGROUP BY service_name\nORDER BY last_seen DESC\nLIMIT 100\n```\n\n### Raw Body Search\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_service_name,\n  otel_severity_text,\n  otel_body\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 24 HOUR\n  AND otel_timestamp >= now() - INTERVAL 24 HOUR\n  AND hasAnyTokens(otel_body, \'connection timeout\')\nORDER BY otel_timestamp DESC\nLIMIT 100\n```\n\nUse multiple token calls for AND semantics:\n`hasAnyTokens(otel_body, \'retry\') AND hasAnyTokens(otel_body, \'backoff\')`.\nUse an array for OR semantics:\n`hasAnyTokens(otel_body, [\'429\', \'timeout\', \'5xx\'])`.\nUse `hasPhrase(otel_body, \'cannot parse string\')` for ordered phrases.\n\n### Errors By Service\n\n```sql\nSELECT\n  otel_service_name,\n  count(*) AS count\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 1 HOUR\n  AND otel_timestamp >= now() - INTERVAL 1 HOUR\n  AND lower(otel_severity_text) = \'error\'\nGROUP BY otel_service_name\nORDER BY count DESC\nLIMIT 50\n```\n\n### Structured Attribute Filter\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_body,\n  otel_log_attributes[\'user_id\'] AS user_id\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 1 HOUR\n  AND otel_timestamp >= now() - INTERVAL 1 HOUR\n  AND otel_log_attributes[\'user_id\'] = \'123\'\nORDER BY otel_timestamp DESC\nLIMIT 50\n```\n\nPrefer promoted alias columns when available:\n`error_message`, `error_type`, `error_stack`, `exception_message`,\n`exception_type`, `http_status_code`, `http_route`, `http_method`,\n`url_path`, `span_duration_ms`.\n\nUse map helpers for attributes:\n- `mapContainsKey(otel_log_attributes, \'foo\')`\n- `mapContainsValue(otel_log_attributes, \'AI_RetryError\')`\n- `mapContainsValueLike(otel_log_attributes, \'% AI_RetryError %\')`\n\n### Point Lookups\n\nPoint lookups do not need time filters:\n\n```sql\nSELECT otel_timestamp, otel_service_name, otel_severity_text, otel_body\nFROM logs\nWHERE canonical_id = \'<uuidv7>\'\nLIMIT 1\n```\n\nAlso valid: exact-match `otel_trace_id = \'<32 hex>\'` or\n`otel_span_id = \'<16 hex>\'`.\n\n## Pitfalls\n\n- Scan limit: switch body discovery to `log_pattern_state`, replace `lower(otel_body) LIKE` with token functions, add both time predicates, or narrow the window.\n- `TYPE_MISMATCH`: wrap time strings with the correct `parseDateTime*` function.\n- `UNKNOWN_TABLE otel_logs`: use `logs`.\n- Empty/garbage MV aggregates: add `countMerge`, `sumMerge`, or `maxMerge`.\n- Empty `log_pattern_state WHERE last_seen_at`: move finalized time checks to `HAVING max(last_seen_at) ...`.\n- Missing map column like `otel_log_attributes.user_id`: use bracket access, e.g. `otel_log_attributes[\'user_id\']`.\n- Key not found: use `attributes` to discover exact case-sensitive keys.\n- `hasToken` rejects separators: use `hasAnyTokens`.\n- `LIMIT required`: add a limit, usually 100.\n- Connection error: run `clickhouse_health_check` once, then retry or report the outage.\n\nWhen unsure, call `get_log_schema_context` again. It is cheap and authoritative.\n';var E3=IE(vE(fE(import.meta.url)),"../skills"),kE=[...dr].sort().map((e)=>({relPath:`references/data-sources/${e}.md`,contents:Vc(e)})),CS=[{name:"sazabi",files:[{relPath:"SKILL.md",contents:DS},{relPath:"references/cli/commands.md",contents:TS},{relPath:"references/cli/setup.md",contents:PS},{relPath:"references/mcp/setup.md",contents:AS},...kE]},{name:"sazabi-docs",files:[{relPath:"SKILL.md",contents:NS}]},{name:"sazabi-logs-search",files:[{relPath:"SKILL.md",contents:LS}]}];var ho=CS;X();import*as $e from"node:fs";import*as be from"node:path";var zS=(e)=>{let t=[],o=be.resolve(e.targetRoot);for(let n of e.skills){let r=be.join(o,n.name),i=be.relative(o,r);if(i.startsWith("..")||be.isAbsolute(i))return de(`Invalid skill name "${n.name}" escapes target root`);let a=[];for(let c of n.files){let u=be.resolve(r,c.relPath),h=be.relative(r,u);if(h.startsWith("..")||be.isAbsolute(h))return de(`Invalid skill file path "${c.relPath}" in skill "${n.name}" escapes skill root`);a.push({absPath:u,contents:c.contents})}t.push({skillName:n.name,files:a})}return ke(t)},jS=(e)=>{let t=[];for(let o of e)for(let n of o.files)if($e.existsSync(n.absPath))t.push(n.absPath);return t},xS=(e)=>{let t=be.resolve(e);while(!$e.existsSync(t)){let o=be.dirname(t);if(o===t)break;t=o}return t},ES=(e,t)=>{try{let o;if(t.targetRoot){let a=xS(t.targetRoot);o=$e.existsSync(a)?$e.realpathSync(a):be.resolve(t.targetRoot)}let n=[];for(let a of e)for(let c of a.files)n.push({absPath:c.absPath,contents:c.contents,existed:$e.existsSync(c.absPath)});if(!t.force){let a=n.find((c)=>c.existed);if(a)return de(`Refusing to overwrite ${a.absPath} (use --force to overwrite)`)}let r=[],i=[];for(let a of n){if(o){let u=be.dirname(a.absPath),h=xS(u);if($e.existsSync(h)){let s=$e.realpathSync(h),g=be.relative(o,s);if(g.startsWith("..")||be.isAbsolute(g))return de(`Refusing to write ${a.absPath}: symlink escape detected (resolves outside target root)`)}}$e.mkdirSync(be.dirname(a.absPath),{recursive:!0,mode:493});let c=!1;try{if($e.lstatSync(a.absPath).isSymbolicLink())c=!0}catch(u){if(!(u instanceof Error&&("code"in u)&&u.code==="ENOENT"))throw u}if(c)return de(`Refusing to write ${a.absPath}: path is a symbolic link`);if(t.force&&a.existed)try{$e.unlinkSync(a.absPath)}catch(u){if(!(u instanceof Error&&("code"in u)&&u.code==="ENOENT"))throw u}try{$e.writeFileSync(a.absPath,a.contents,{encoding:"utf-8",mode:420,flag:"wx"})}catch(u){if(u instanceof Error&&"code"in u&&u.code==="EEXIST"){let h=t.force?`Failed to write ${a.absPath}: file was recreated during operation (possible race condition)`:`Refusing to overwrite ${a.absPath} (use --force to overwrite)`;return de(h)}throw u}if(a.existed)i.push(a.absPath);else r.push(a.absPath)}return ke({written:r,overwritten:i})}catch(o){let n=o instanceof Error?o.message:String(o);return de(`Failed to write skill files: ${n}`)}};var nr=(e,t)=>{if(t)return v(e);return p(e)},$E=(e)=>e!==void 0&&tc.includes(e),KS=async(e)=>{let t=Boolean(e.json);if(!e.agent)return void nr(`Agent is required. Usage: sazabi skill install <agent>. Known agents: ${tc.join(", ")}.`,t);if(!$E(e.agent))return void nr(`Unknown agent '${e.agent}'. Known agents: ${tc.join(", ")}.`,t);let o=e.agent;if(e.user&&e.project)return void nr("--user and --project are mutually exclusive.",t);if(e.projectDir!==void 0&&!e.project)return void nr("--project-dir is only valid with --project.",t);let n=e.project?"project":"user",r=e.projectDir!==void 0?RS.resolve(e.projectDir):process.cwd(),i=SS({agent:o,scope:n,home:US.homedir(),projectDir:r});if(i.kind==="unsupported")return void nr(i.reason,t);if(ho.length===0)return void nr("No skills are available to install.",t);let a=f(zS({targetRoot:i.root,skills:ho}),"Failed to plan skill installation",t);if(!e.force){let u=jS(a);if(u.length>0)return void nr(["Refusing to overwrite existing files (use --force to overwrite):",...u.map((h)=>`  ${h}`)].join(`
`),t)}let c=f(ES(a,{force:Boolean(e.force),targetRoot:i.root}),"Failed to install skills",t);if(t){j({agent:o,scope:n,targetRoot:i.root,skills:ho.map((u)=>({name:u.name,files:u.files.map((h)=>h.relPath)})),written:c.written,overwritten:c.overwritten});return}ce("Installed skills"),ne({Agent:o,Scope:n,Destination:i.root});for(let u of c.written)M(`wrote  ${u}`);for(let u of c.overwritten)Fe(`replaced ${u}`);M(`Installed ${ho.length} skill${ho.length===1?"":"s"} to ${i.root}`)};var FS=W("skill","Manage Sazabi agent skills").withSubcommands({install:P("install","Install Sazabi skills into your AI agent's skills directory",async(e)=>{let{values:t,positionals:o}=T(e,{user:{type:"boolean"},project:{type:"boolean"},"project-dir":{type:"string"},force:{type:"boolean"},json:{type:"boolean"}},{allowPositionals:!0});await KS({agent:o[0],user:t.user,project:t.project,projectDir:t["project-dir"],force:t.force,json:t.json})}).withPositionalArgs("<agent>").withOptions({user:{type:"boolean",description:"Install into the user-scoped skills directory (default)"},project:{type:"boolean",description:"Install into the project-scoped skills directory"},"project-dir":{type:"string",description:"Project directory for --project (default: current working directory)"},force:{type:"boolean",description:"Overwrite existing skill files"},json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi skill install claude-code  # Install for Claude Code in $HOME (default --user)","sazabi skill install codex --project  # Install into current repo","sazabi skill install codex --project --project-dir ../other  # Install into another repo","sazabi skill install claude-code --force  # Overwrite existing files"]).build()}).withExamples(["sazabi skill install claude-code  # Install Sazabi skills for Claude Code in $HOME","sazabi skill install codex --project  # Install Sazabi skills into the current repo"]).build();B();re();X();var wE={name:{label:"Name",type:{kind:"string"}},currentStatus:{label:"Status",type:{kind:"string"}},firstSeenAt:{label:"Created At",type:{kind:"date"}}},_E={schema:wE,columns:["name","currentStatus","firstSeenAt"],emptyMessage:"All clear — no status components found."},OE=async(e)=>{let t=N({tokenFlag:e.token,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.statusComponents.list(),"Failed to fetch status",e.json);if(e.json){j(n);return}ce("Status Page"),J(_E,n.statusComponents)},GS=W("status","Show a summary of the status page").withHandler(async(e)=>{let{values:t}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}});await OE({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi status         # Show status page summary","sazabi status --json  # Output as JSON"]).build();B();re();X();var BS={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},currentStatus:{label:"Status",type:{kind:"string"}},description:{label:"Description",type:{kind:"nullable-string"}},firstSeenAt:{label:"Created At",type:{kind:"date"}}},SE={schema:BS,columns:["id","name","currentStatus","firstSeenAt"],emptyMessage:"No status components found."},TE={layout:"field-list",schema:BS,fields:["id","name","currentStatus","description","firstSeenAt"],title:"Status Component"},PE=async(e)=>{let t=N({tokenFlag:e.token,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.statusComponents.list({limit:e.limit,cursor:e.cursor}),"Failed to list status components",e.json);J(SE,n.statusComponents,{json:e.json,nextCursor:n.nextCursor})},AE=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),r=f(await n.statusComponents.get(e),"Failed to get status component",t.json);U(TE,r.statusComponent,{json:t.json})},HS=W("status-components","Manage status page components").withSubcommands({list:P("list","List status components in the active project",async(e)=>{let{values:t}=T(e,{...V,limit:{type:"string"},cursor:{type:"string"}});await PE({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],limit:t.limit?Number(t.limit):void 0,cursor:t.cursor})}).withOptions({...q,limit:{type:"string",description:"Maximum number of components to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples(["sazabi status-components list  # List all status components"]).build(),get:P("get","Get one status component by ID",async(e)=>{let{values:t,positionals:o}=T(e,V,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Component ID is required.");return p("Component ID is required.")}await AE(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<component-id>").withOptions(q).withExamples(["sazabi status-components get <component-id>  # Get one status component"]).build()}).withExamples(["sazabi status-components list                        # List all status components","sazabi status-components get <component-id>          # Get one status component"]).build();B();re();X();var VS={id:{label:"ID",type:{kind:"id"}},label:{label:"Task",type:{kind:"string"}},description:{label:"Description",type:{kind:"string"}},instructions:{label:"Instructions",type:{kind:"string"}},completed:{label:"Status",type:{kind:"custom",render:(e)=>e?ae.success("✓  done"):ae.muted("○  pending"),serialize:(e)=>e}},completedAt:{label:"Completed at",type:{kind:"nullable-date",emptyLabel:"—"}},category:{label:"Category",type:{kind:"string"}}},DE={schema:VS,columns:["completed","label","id","category"],header:"Onboarding and setup tasks",emptyMessage:"No tasks found."},NE={layout:"field-list",schema:VS,fields:["id","label","completed","completedAt","category","description","instructions"],title:"Task"},LE=async(e)=>{let t=N({tokenFlag:e.token,projectIdFlag:e.projectId,organizationIdFlag:e.organizationId,jsonMode:e.json}),o=L({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=f(await o.tasks.list(),"Failed to list tasks",e.json);J(DE,n.tasks,{json:e.json})},CE=async(e,t)=>{let o=N({tokenFlag:t.token,projectIdFlag:t.projectId,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=L({token:o.token,organizationId:o.organizationId,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=f(await n.tasks.list(),"Failed to list tasks",t.json).tasks.find((a)=>a.id===e);if(!i){if(t.json)return v(`Task not found: ${e}`);return p(`Task not found: ${e}`)}U(NE,i,{json:t.json})},MS={...V,"project-id":{type:"string"},"organization-id":{type:"string"}},JS={...q,"project-id":{type:"string",description:"Override active project ID"},"organization-id":{type:"string",description:"Override active organization ID"}},qS=W("tasks","View onboarding and setup tasks").withSubcommands({list:P("list","List all onboarding and setup tasks for the active project",async(e)=>{let{values:t}=T(e,MS);await LE({token:t.token,projectId:t["project-id"],organizationId:t["organization-id"],apiBaseUrl:t["api-base-url"],json:t.json})}).withOptions(JS).withExamples(["sazabi tasks list           # List all tasks for the active project","sazabi tasks list --json    # Output tasks as JSON"]).build(),get:P("get","Get one task by ID",async(e)=>{let{values:t,positionals:o}=T(e,MS,{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Task ID is required.");return p("Task ID is required.")}await CE(n,{token:t.token,projectId:t["project-id"],organizationId:t["organization-id"],apiBaseUrl:t["api-base-url"],json:t.json})}).withPositionalArgs("<task-id>").withOptions(JS).withExamples(["sazabi tasks get install_github_app   # Show task details and instructions","sazabi tasks get send_message --json  # Output as JSON"]).build()}).withExamples(["sazabi tasks list                           # List all tasks","sazabi tasks list --json                    # List tasks as JSON","sazabi tasks get install_github_app         # Get one task by ID","sazabi tasks get send_message --json        # Get one task as JSON"]).build();B();B();re();X();var xE={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},zE={layout:"field-list",schema:xE,fields:["id","url","title","status","createdAt","updatedAt"]},WS=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:r}=f(await n.threads.update(e,"archived"),"Failed to archive thread",t.json),i={...r,url:wt(r.projectId,r.id)};U(zE,i,{json:t.json})};B();re();X();var jE={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},EE={role:{label:"Role",type:{kind:"role"}},createdAt:{label:"When",type:{kind:"date"}},text:{label:"Message",type:{kind:"truncated",maxLength:80}}},UE=(e)=>{for(let t of e.content){if(t.type==="message"&&t.message)return t.message;if(t.type==="tool_call")return`[tool: ${t.name}]`;if(t.type==="artifact")return`[artifact: ${t.name}]`;if(t.type==="summary")return"[summary]";if(t.type==="reasoning")return"[reasoning]";if(t.type==="fork")return"[fork]";if(t.type==="slack_context")return"[slack context]"}return"(empty)"},YS=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:r,messages:i}=f(await n.threads.get(e),"Failed to get thread",t.json);if(t.json){j({thread:r,messages:i});return}let a={...r,url:wt(r.projectId,r.id)},c=i.map((u)=>({role:u.role,createdAt:u.createdAt,text:UE(u)}));U({layout:"field-list",schema:jE,fields:["id","url","title","status","createdAt","updatedAt"],title:"Thread"},a),R(),J({schema:EE,columns:["role","createdAt","text"],header:"Messages",emptyMessage:"No messages."},c)};B();re();X();var RE={id:{label:"ID",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},updatedAt:{label:"Updated",type:{kind:"date"}}},KE={schema:RE,columns:["id","title","status","updatedAt"],header:"Threads",emptyMessage:"No threads found."},XS=async(e)=>{let t=N({tokenFlag:e.token,jsonMode:e.json}),n=await L({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl}).threads.list({limit:e.limit,cursor:e.cursor,status:e.status}),{threads:r,nextCursor:i}=f(n,"Failed to list threads",e.json);J(KE,r,{json:e.json,nextCursor:i})};B();re();X();var FE={id:{label:"ID",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},score:{label:"Score",align:"right",type:{kind:"custom",render:(e)=>e!=null?e.toFixed(2):"-"}}},GE={schema:FE,columns:["id","title","status","score"],header:{title:"Search Results",variant:"search"},emptyMessage:"No matching threads found."},ZS=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{threads:r,pagination:i}=f(await n.search.threads({query:e,limit:t.limit,page:t.page,status:t.status}),"Failed to search threads",t.json);if(t.json){j({threads:r,pagination:i});return}J(GE,r,{count:i.totalResults}),yt({type:"page",page:i.page,totalPages:i.totalPages})};B();re();X();var BE={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},HE={layout:"field-list",schema:BE,fields:["id","url","title","status","createdAt","updatedAt"]},QS=async(e,t)=>{let o=N({tokenFlag:t.token,jsonMode:t.json}),n=L({token:o.token,projectId:o.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:r}=f(await n.threads.update(e,"regular"),"Failed to unarchive thread",t.json),i={...r,url:wt(r.projectId,r.id)};U(HE,i,{json:t.json})};var eT=W("threads","Manage agent threads").withSubcommands({list:P("list","List threads from current project",async(e)=>{let{values:t}=T(e,{token:{type:"string"},limit:{type:"string"},cursor:{type:"string"},status:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}}),o={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)o.limit=Se(t.limit,1,100,"Limit",t.json);if(t.cursor)o.cursor=t.cursor;if(t.status)o.status=st(t.status,["regular","archived"],"Status",t.json);await XS(o)}).withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of threads to return (default: 20, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},status:{type:"string",description:"Filter by status: regular or archived"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads list  # List all threads","sazabi threads list --limit 50  # List with custom limit","sazabi threads list --status archived  # List archived threads","sazabi threads list --cursor xyz  # List next page"]).build(),get:P("get","Get thread with messages",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads get <thread-id>");return p("Thread ID is required. Usage: sazabi threads get <thread-id>")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await YS(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads get <thread-id>  # Get thread with messages","sazabi threads get <thread-id> --json  # Output as JSON"]).build(),search:P("search","Search threads in current project",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},limit:{type:"string"},page:{type:"string"},status:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o.join(" ");if(!n){if(t.json)return v("Search query is required. Usage: sazabi threads search <query>");return p("Search query is required. Usage: sazabi threads search <query>")}let r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.page)r.page=Se(t.page,1,Number.MAX_SAFE_INTEGER,"Page",t.json);if(t.status)r.status=st(t.status,["regular","archived"],"Status",t.json);await ZS(n,r)}).withPositionalArgs("<query>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of results (default: 20, max: 100)"},page:{type:"string",description:"Page number for pagination (default: 1)"},status:{type:"string",description:"Filter by status: regular or archived"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi threads search "error handling"  # Search threads','sazabi threads search "bug" --limit 50  # Search with limit','sazabi threads search "authentication" --status regular  # Search only regular threads']).build(),archive:P("archive","Archive a thread",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads archive <thread-id>");return p("Thread ID is required. Usage: sazabi threads archive <thread-id>")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await WS(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads archive <thread-id>  # Archive a thread","sazabi threads archive <thread-id> --json  # Output as JSON"]).build(),unarchive:P("unarchive","Unarchive a thread",async(e)=>{let{values:t,positionals:o}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=o[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads unarchive <thread-id>");return p("Thread ID is required. Usage: sazabi threads unarchive <thread-id>")}if(o.length>1){let r=o.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${r}`);return p(`Unexpected arguments: ${r}`)}await QS(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads unarchive <thread-id>  # Unarchive a thread","sazabi threads unarchive <thread-id> --json  # Output as JSON"]).build()}).withExamples(["sazabi threads list  # List all threads","sazabi threads get <thread-id>  # Get thread with messages",'sazabi threads search "error"  # Search threads',"sazabi threads archive <thread-id>  # Archive a thread","sazabi threads unarchive <thread-id>  # Unarchive a thread"]).build();var tT=[FO,HO,VO,fS,yS,kS,$S,QO,eS,OS,FS,dS,eT,vS,wS,WO,HS,GS,qS];Vy();B();var{renderSubcommandHelp:qy,renderSubcommandGroupHelp:nT,renderCommandHelp:Wy,renderMainHelp:ME}=uc("sazabi");var Yy=(e)=>ME(e,{title:"Sazabi CLI",description:"Command-line interface for the Sazabi public API",examples:["sazabi auth login                         # Authenticate via browser",'sazabi messages send "Hello"              # Start a new thread','sazabi messages send "Hi" -t <id>         # Send a message to a thread',"sazabi logs tail --severities ERROR,WARN  # Tail logs filtered by severity","sazabi threads list                       # List all threads"]});Ve();import*as nc from"node:fs";import*as $n from"node:path";import{fileURLToPath as JE}from"node:url";var iT=()=>{try{let e=$n.dirname(JE(import.meta.url));for(let t=0;t<5;t++){let o=$n.join(e,"package.json");if(nc.existsSync(o)){let n=nc.readFileSync(o,"utf-8");return JSON.parse(n).version??"0.0.0"}e=$n.dirname(e)}return"0.0.0"}catch{return"0.0.0"}};var n4=iT();for(let e of tT)rT(e);var i4=async()=>{let e=process.argv.slice(2);if(e[0]==="--get-completions"&&e[1]==="--"){let{getCompletions:g,parseCompletionContext:b}=await Promise.resolve().then(() => (gT(),hT)),y=b(e.slice(2)),_=await g(y);for(let S of _)if(S.description)console.log(`${S.value}	${S.description}`);else console.log(S.value);return}let t=[],o;for(let g=0;g<e.length;g++){let b=e[g];if(b==="--profile"){let y=e[g+1],_=e.includes("--json");if(y===void 0||y.startsWith("-")){let S=y===void 0?"--profile requires a value.":`--profile requires a value, but got '${y}'. Use '--profile <name>'.`;if(_)v(S);p(S)}o=y,g++}else if(b.startsWith("--profile=")){let y=b.slice(10),_=e.includes("--json");if(!y){if(_)v("--profile requires a value.");p("--profile requires a value.")}o=y}else t.push(b)}DO(o);let n=t[0]==="--json",r=n?t.slice(1):t,i=n||r.includes("--json");if(r.includes("--version")||r.includes("-v")){console.log(`sazabi ${n4}`);return}if(r.length===0){console.log(Yy(kn()));return}if(r[0]?.startsWith("--")||r[0]==="-h"){if(r[0]==="--help"||r[0]==="-h"){console.log(Yy(kn()));return}}let a=r[0];if(a&&!oT(a)){let b=a.startsWith("-")?`Unknown option: ${a}. Run 'sazabi -h' for usage.`:`Unknown command: ${a}. Run 'sazabi -h' for usage.`;if(i)v(b);throw p(b),Error("Unreachable")}if(!a)throw Error("Unexpected: commandName is undefined");let c=oc(a);if(!c)throw p(`Unknown command: ${a}. Run 'sazabi -h' for usage.`),Error("Unreachable");let u=r[1]??"",h=r.slice(2);if(u==="--help"||u==="-h"){console.log(Wy(c));return}if(!u&&c.subcommands&&!c.handler){console.log(Wy(c));return}let s=c.subcommands?.[u];if(!s){if(c.handler){let g=u?[u,...h]:h;await c.handler(g)}else{let b=u.startsWith("-")?`Subcommand required. Run 'sazabi ${a} -h' for usage.`:`Unknown subcommand: ${u}. Run 'sazabi ${a} -h' for usage.`;if(i)v(b);throw p(b),Error("Unreachable")}return}if(s.subcommands){let g=h[0]??"",b=h.slice(1);if(g==="--help"||g==="-h"||!g&&!s.handler){console.log(nT(a,s));return}let y=s.subcommands[g];if(y){if(b.includes("--help")||b.includes("-h")){console.log(qy(`${a} ${u}`,y));return}if(y.handler)await y.handler(b);return}if(s.handler){await s.handler(h);return}let S=g.startsWith("-")?`Subcommand required. Run 'sazabi ${a} ${u} -h' for usage.`:`Unknown subcommand: ${g}. Run 'sazabi ${a} ${u} -h' for usage.`;if(i)v(S);throw p(S),Error("Unreachable")}if(h.includes("--help")||h.includes("-h")){console.log(qy(a,s));return}if(s.handler)await s.handler(h)};i4().catch((e)=>{let t=process.argv.includes("--json"),o=`Unexpected error: ${String(e)}`;if(t)v(o);p(o)});
