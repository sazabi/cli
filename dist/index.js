#!/usr/bin/env node
var HT=Object.create;var{getPrototypeOf:MT,defineProperty:gc,getOwnPropertyNames:JT}=Object;var qT=Object.prototype.hasOwnProperty;function VT(e){return this[e]}var WT,YT,br=(e,t,r)=>{var n=e!=null&&typeof e==="object";if(n){var o=t?WT??=new WeakMap:YT??=new WeakMap,i=o.get(e);if(i)return i}r=e!=null?HT(MT(e)):{};let a=t||!e||!e.__esModule?gc(r,"default",{value:e,enumerable:!0}):r;for(let c of JT(e))if(!qT.call(a,c))gc(a,c,{get:VT.bind(e,c),enumerable:!0});if(n)o.set(e,a);return a};var XT=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ZT=(e)=>e;function QT(e,t){this[e]=ZT.bind(null,t)}var et=(e,t)=>{for(var r in t)gc(e,r,{get:t[r],enumerable:!0,configurable:!0,set:QT.bind(t,r)})};var g=(e,t)=>()=>(e&&(t=e(e=0)),t);var ao=XT((G4,bc)=>{var Tn=process||{},nm=Tn.argv||[],Sn=Tn.env||{},eP=!(!!Sn.NO_COLOR||nm.includes("--no-color"))&&(!!Sn.FORCE_COLOR||nm.includes("--color")||Tn.platform==="win32"||(Tn.stdout||{}).isTTY&&Sn.TERM!=="dumb"||!!Sn.CI),tP=(e,t,r=e)=>(n)=>{let o=""+n,i=o.indexOf(t,e.length);return~i?e+oP(o,t,r,i)+t:e+o+t},oP=(e,t,r,n)=>{let o="",i=0;do o+=e.substring(i,n)+r,i=n+t.length,n=e.indexOf(t,i);while(~n);return o+e.substring(i)},im=(e=eP)=>{let t=e?tP:()=>String;return{isColorSupported:e,reset:t("\x1B[0m","\x1B[0m"),bold:t("\x1B[1m","\x1B[22m","\x1B[22m\x1B[1m"),dim:t("\x1B[2m","\x1B[22m","\x1B[22m\x1B[2m"),italic:t("\x1B[3m","\x1B[23m"),underline:t("\x1B[4m","\x1B[24m"),inverse:t("\x1B[7m","\x1B[27m"),hidden:t("\x1B[8m","\x1B[28m"),strikethrough:t("\x1B[9m","\x1B[29m"),black:t("\x1B[30m","\x1B[39m"),red:t("\x1B[31m","\x1B[39m"),green:t("\x1B[32m","\x1B[39m"),yellow:t("\x1B[33m","\x1B[39m"),blue:t("\x1B[34m","\x1B[39m"),magenta:t("\x1B[35m","\x1B[39m"),cyan:t("\x1B[36m","\x1B[39m"),white:t("\x1B[37m","\x1B[39m"),gray:t("\x1B[90m","\x1B[39m"),bgBlack:t("\x1B[40m","\x1B[49m"),bgRed:t("\x1B[41m","\x1B[49m"),bgGreen:t("\x1B[42m","\x1B[49m"),bgYellow:t("\x1B[43m","\x1B[49m"),bgBlue:t("\x1B[44m","\x1B[49m"),bgMagenta:t("\x1B[45m","\x1B[49m"),bgCyan:t("\x1B[46m","\x1B[49m"),bgWhite:t("\x1B[47m","\x1B[49m"),blackBright:t("\x1B[90m","\x1B[39m"),redBright:t("\x1B[91m","\x1B[39m"),greenBright:t("\x1B[92m","\x1B[39m"),yellowBright:t("\x1B[93m","\x1B[39m"),blueBright:t("\x1B[94m","\x1B[39m"),magentaBright:t("\x1B[95m","\x1B[39m"),cyanBright:t("\x1B[96m","\x1B[39m"),whiteBright:t("\x1B[97m","\x1B[39m"),bgBlackBright:t("\x1B[100m","\x1B[49m"),bgRedBright:t("\x1B[101m","\x1B[49m"),bgGreenBright:t("\x1B[102m","\x1B[49m"),bgYellowBright:t("\x1B[103m","\x1B[49m"),bgBlueBright:t("\x1B[104m","\x1B[49m"),bgMagentaBright:t("\x1B[105m","\x1B[49m"),bgCyanBright:t("\x1B[106m","\x1B[49m"),bgWhiteBright:t("\x1B[107m","\x1B[49m")}};bc.exports=im();bc.exports.createColors=im});var am=()=>{};var cm,$e=(e)=>{return cm.default.bold(e)};var pc=g(()=>{cm=br(ao(),1)});var mc=(e,t=!1)=>{let r=Object.entries(e);if(r.length===0&&!t)return"";let n=t?[["help",{type:"boolean",short:"h",description:"Show help for this command"}],...r]:r,o=Math.max(...n.map(([a,c])=>{return`${c.short?`-${c.short}, `:""}--${a}`.length})),i=n.map(([a,c])=>{let s=`${c.short?`-${c.short}, `:""}--${a}`,d=c.description.includes("(required)"),h=c.required&&!d?" (required)":"";return`  ${s.padEnd(o)}    ${c.description}${h}`});return`

${$e("OPTIONS")}
${i.join(`
`)}`},Pn=(e)=>{if(e.length===0)return"";let t=e.map((o)=>{let i=o.indexOf("#");if(i===-1)return{command:o,comment:null};return{command:o.substring(0,i).trimEnd(),comment:o.substring(i).trim()}}),r=Math.max(...t.map((o)=>o.command.length)),n=t.map(({command:o,comment:i})=>{if(!i)return`  ${o}`;let a=" ".repeat(r-o.length+2);return`  ${o}${a}${i}`});return`

${$e("EXAMPLES")}
${n.join(`
`)}`},lm=(e,t=2)=>{let r=Object.entries(e);if(r.length===0)return"";let n=Math.max(...r.map(([h])=>h.length)),o=r.flatMap(([,h])=>h.subcommands?Object.keys(h.subcommands):[]),i=o.length>0?Math.max(...o.map((h)=>h.length)):0,a=Math.max(t+n+2,t+2+i+2),c=" ".repeat(t),u=a-t-2,s=a-t-2-2,d="";for(let[h,b]of r)if(d+=`
${c}${h.padEnd(u)}  ${b.description}`,b.subcommands&&Object.keys(b.subcommands).length>0)for(let[p,_]of Object.entries(b.subcommands))d+=`
${c}  ${p.padEnd(s)}  ${_.description}`;return d},yc=(e)=>{return{renderSubcommandHelp:(i,a)=>{let c=a.positionalArgs?` ${a.positionalArgs}`:"",u=`${e} ${i} ${a.name}${c}`,s=`
${$e(`${e} ${i} ${a.name}`)} - ${a.description}
`;if(s+=`
${$e("USAGE")}
  ${u}`,s+=mc(a.options??{},!0),a.examples)s+=Pn(a.examples);return s+=`
`,s},renderSubcommandGroupHelp:(i,a)=>{let c=`
${$e(`${e} ${i} ${a.name}`)} - ${a.description}
`;if(c+=`
${$e("USAGE")}`,a.subcommands&&!a.handler)c+=`
  ${e} ${i} ${a.name} <subcommand> [options]`;else if(a.subcommands&&a.handler){let u=a.positionalArgs?` ${a.positionalArgs}`:"";c+=`
  ${e} ${i} ${a.name}${u}`,c+=`
  ${e} ${i} ${a.name} <subcommand> [options]`}if(a.subcommands&&Object.keys(a.subcommands).length>0)c+=`

${$e("SUBCOMMANDS")}`,c+=lm(a.subcommands);if(c+=mc(a.options??{},!0),a.examples)c+=Pn(a.examples);return c+=`
`,c},renderCommandHelp:(i)=>{let a=i.description.trim(),c=`
${$e(`${e} ${i.name}`)}${a?` - ${a}`:""}
`;if(c+=`
${$e("USAGE")}`,i.subcommands&&!i.handler)c+=`
  ${e} ${i.name} <subcommand> [options]`;else if(i.subcommands&&i.handler){let u=i.positionalArgs?` ${i.positionalArgs}`:"";c+=`
  ${e} ${i.name}${u}`,c+=`
  ${e} ${i.name} <subcommand> [options]`}else{let u=i.positionalArgs?` ${i.positionalArgs}`:"";c+=`
  ${e} ${i.name}${u}`}if(i.subcommands&&Object.keys(i.subcommands).length>0)c+=`

${$e("SUBCOMMANDS")}`,c+=lm(i.subcommands);if(c+=mc(i.options??{},!0),i.examples)c+=Pn(i.examples);return c+=`
`,c},renderMainHelp:(i,a)=>{let c=`
${$e(a.title)} - ${a.description}
`;c+=`
${$e("USAGE")}`,c+=`
  ${e} <command> [subcommand] [options]`,c+=`

${$e("COMMANDS")}`;let u=Math.max(...i.map((K)=>K.name.length)),s=i.flatMap((K)=>K.subcommands?Object.keys(K.subcommands):[]),d=s.length>0?Math.max(...s.map((K)=>K.length)):0,h=i.flatMap((K)=>K.subcommands?Object.values(K.subcommands).flatMap((le)=>le.subcommands?Object.keys(le.subcommands):[]):[]),b=h.length>0?Math.max(...h.map((K)=>K.length)):0,p=Math.max(2+u+2,4+d+2,6+b+2),_=p-2-2,S=p-4-2,H=p-6-2;for(let K of i)if(c+=`
  ${K.name.padEnd(_)}  ${K.description.trim()}`,K.subcommands){for(let[le,re]of Object.entries(K.subcommands))if(c+=`
    ${le.padEnd(S)}  ${re.description}`,re.subcommands)for(let[ve,Te]of Object.entries(re.subcommands))c+=`
      ${ve.padEnd(H)}  ${Te.description}`}return c+=`

${$e("OPTIONS")}`,c+=`
  -h, --help        Show help for a command`,c+=`
  -v, --version     Show version number`,c+=`
  --json            Output errors as JSON`,c+=`
  --profile <name>  Use a named profile`,c+=Pn(a.examples),c+=`
`,c}}};var um=g(()=>{pc()});var de,ae,bt=(e,t)=>{let r=t??e,n=e.trim().toUpperCase(),i={ERROR:de.default.red,FATAL:de.default.red,WARN:de.default.yellow,WARNING:de.default.yellow,INFO:de.default.blue,DEBUG:de.default.gray,TRACE:de.default.gray}[n];return i?i(r):r},vc=(e,t)=>{let r=t??e;if(e==="user")return de.default.blue(r);if(e==="assistant")return de.default.green(r);return de.default.gray(r)};var fc=g(()=>{de=br(ao(),1),ae={success:(e)=>de.default.green(e),error:(e)=>de.default.red(e),warning:(e)=>de.default.yellow(e),info:(e)=>de.default.blue(e),muted:(e)=>de.default.dim(e),bold:(e)=>de.default.bold(e),cyan:(e)=>de.default.cyan(e),gray:(e)=>de.default.gray(e)}});var St,Rt=(e)=>{console.log(St.default.yellow(e))},j=(e)=>{console.log(JSON.stringify(e,null,2))},v=(e,t=1)=>{console.error(JSON.stringify(typeof e==="string"?{success:!1,error:e}:e,null,2)),process.exit(t)},ce=(e)=>{console.log(St.default.bold(e))},Y=(e)=>{console.log(St.default.dim(e))},M=(e)=>{console.log(St.default.green(e))},Tt=(e)=>{console.log(St.default.red(e))},Be=(e)=>{console.log(St.default.yellow(e))},_e=(e)=>St.default.dim(e);var pr=g(()=>{St=br(ao(),1)});var co,pt=(e)=>{if(e.type==="cursor")if(e.nextCursor)console.log(co.default.dim(`Next: --cursor ${e.nextCursor}`));else console.log(co.default.dim("End of results"));else console.log(co.default.dim(`Page ${e.page} of ${e.totalPages}`))},Ic=(e,t)=>{console.log(co.default.bold(`${e} (${t} total)`))},kc=(e,t)=>{console.log(co.default.bold(`${e} (${t} results)`))};var An=g(()=>{co=br(ao(),1)});var R=()=>{console.log("")},tt=(e,t=2)=>{console.log(`${" ".repeat(t)}${e}`)},ne=(e,t=0)=>{for(let[r,n]of Object.entries(e))console.log(`${" ".repeat(t)}${r}: ${n}`)},mr=(e="─",t=80)=>{console.log(e.repeat(t))},ot=(e,t,r)=>{if(e.length===0)return;if(r?.header){let u=typeof r.header==="string"?{title:r.header}:r.header,s=u.variant??"section",d=u.count??e.length;if(s==="results")Ic(u.title,d);else if(s==="search")kc(u.title,d);else ce(u.title)}let n=/\u001B\[[0-?]*[ -/]*[@-~]/g,o=(u)=>(u??"").replace(n,"").length,i=(u,s,d)=>{let h=o(u),b=Math.max(0,s-h);return d==="right"?`${" ".repeat(b)}${u}`:`${u}${" ".repeat(b)}`},a=t.map((u)=>{if(u.width)return u.width;let s=o(u.header),d=Math.max(...e.map((h)=>o(h[u.key]||"")));return Math.max(s,d)}),c=[t.map((u,s)=>{let d=a[s]||0;return i(u.header,d,"left")}),...e.map((u)=>t.map((s,d)=>{let h=u[s.key]||"",b=a[d]||0,p=s.align||"left";return i(h,b,p)}))];for(let u of c)tt(u.join("  "));R()};var wc=g(()=>{pr();An()});var We=(e,t=60)=>{if(e.length<=t)return e;return`${e.substring(0,t-3)}...`},Dn=(e)=>{return new Date(e).toLocaleString()};var $c=()=>{};var yr,_c="✓",Oc="✗",sm="⚠",hm="ℹ",rP,nP,iP,aP;var Sc=g(()=>{yr=br(ao(),1),rP=yr.default.green(_c),nP=yr.default.red(Oc),iP=yr.default.yellow(sm),aP=yr.default.cyan(hm)});var Tc=()=>{};var dm=g(()=>{$c();Sc();Tc()});var vr=(e,t)=>{let r=t==null?"":String(t);switch(e.kind){case"string":case"number":return r;case"boolean":return t?"yes":"no";case"date":return r?Dn(r):_e("(none)");case"nullable-date":return r?Dn(r):_e(e.emptyLabel??"(never)");case"nullable-string":return r?r:_e(e.emptyLabel??"(none)");case"truncated":return r?We(r,e.maxLength):"";case"id":return r;case"severity":return r?bt(r):r;case"role":return r?vc(r):r;case"custom":return e.render(t)}},Pc=(e,t)=>{if(e.kind==="custom")return e.serialize?e.serialize(t):t??null;return t??null},Kt=(e,t,r)=>{return e.get?e.get(r):r[t]};var Ac=g(()=>{fc();pr()});var gm=g(()=>{$c();Tc()});var bm=(e,t,r)=>{let n={};for(let o of t){let i=e[o];if(!i)continue;let a=Kt(i,o,r);n[o]=Pc(i.type,a)}return n},gP=(e)=>{if(e.layout==="field-list")return e.fields;let t=[...e.primary.fields];for(let r of e.secondary??[])if(!t.includes(r.field))t.push(r.field);return t},J=(e,t,r)=>{if(r?.json){let c={items:t.map((u)=>bm(e.schema,e.columns,u))};if(r.nextCursor!==void 0)c.nextCursor=r.nextCursor??null;j(c);return}if(t.length===0){Rt(e.emptyMessage??"No results found.");return}let n=e.columns.map((a)=>{let c=e.schema[a];return{header:c?.label??a,key:a,align:c?.align}}),o=t.map((a)=>{let c={};for(let u of e.columns){let s=e.schema[u];if(!s)continue;let d=Kt(s,u,a);c[u]=vr(s.type,d)}return c}),i=e.header;if(r?.count!==void 0)i=typeof i==="string"?{title:i,count:r.count}:i!=null?{...i,count:r.count}:void 0;if(ot(o,n,{header:i}),r?.nextCursor)pt({type:"cursor",nextCursor:r.nextCursor})},U=(e,t,r)=>{if(r?.json){j(bm(e.schema,gP(e),t));return}if(e.layout==="field-list")bP(e,t);else pP(e,t)},bP=(e,t)=>{if(e.title)ce(e.title);let r={};for(let n of e.fields){let o=e.schema[n];if(!o)continue;let i=Kt(o,n,t);r[o.label]=vr(o.type,i)}ne(r)},pP=(e,t)=>{let{primary:r}=e;if(r.title)ce(r.title);let n={};for(let o of r.fields){let i=e.schema[o];if(!i)continue;let a=Kt(i,o,t);n[i.label]=vr(i.type,a)}ne(n);for(let o of e.secondary??[]){let i=e.schema[o.field];if(!i)continue;let a=Kt(i,o.field,t);if(a==null)continue;R(),ce(o.title),tt(String(a))}};var pm=g(()=>{wc();pr();Ac();An()});var y=(e,t=1)=>{console.error(e),process.exit(t)},Bt=(e)=>{console.log(e)};var G=g(()=>{am();um();fc();wc();pc();dm();Sc();pr();Ac();An();gm();pm()});function mm(e){return e[0]??{}}function Ht(e){return Array.isArray(e)?e:e===void 0||e===null?[]:[e]}function Ln(e){let t;return()=>{if(t)return t.result;let r=e();return t={result:r},r}}function vP(e){let t=Promise.resolve();return(...r)=>{return t=t.catch(()=>{}).then(()=>{return e(...r)})}}function fr(){return globalThis[IP]}function Nn(e,t={},r){return fr()?.tracer?.startSpan(e,t,r)}function Pt(e,t,r={}){if(!e)return;let n=kP(t);if(e.recordException(n),!r.signal?.aborted||r.signal.reason!==t)e.setStatus({code:fP,message:n.message})}function kP(e){if(e instanceof Error){let t={message:e.message,name:e.name,stack:e.stack};if("code"in e&&(typeof e.code==="string"||typeof e.code==="number"))t.code=e.code;return t}return{message:String(e)}}async function Mt({name:e,context:t,...r},n){let o=fr()?.tracer;if(!o)return n();let i=async(a)=>{try{return await n(a)}catch(c){throw Pt(a,c,r),c}finally{a.end()}};if(t)return o.startActiveSpan(e,r,t,i);else return o.startActiveSpan(e,r,i)}async function Gt(e,t){let r=fr();if(!e||!r)return t();let n=r.trace.setSpan(r.context.active(),e);return r.context.with(n,t)}function Ye(e){if(!e||typeof e!=="object")return!1;return"next"in e&&typeof e.next==="function"&&Symbol.asyncIterator in e&&typeof e[Symbol.asyncIterator]==="function"}function Nc({name:e,...t},r){let n;return new At(async()=>{n??=Nn(e);try{let o=await Gt(n,()=>r.next());return n?.addEvent(o.done?"completed":"yielded"),o}catch(o){throw Pt(n,o,t),o}},async(o)=>{try{if(o!=="next")await Gt(n,()=>r.return?.())}catch(i){throw Pt(n,i,t),i}finally{n?.end()}})}class _P{#e=new Map;#t;constructor(e={}){this.#t=e.maxBufferedEvents??100}get size(){return this.#e.size}publish(e,t){let r=this.#e.get(e);if(!r)return;for(let n of r)n(t)}subscribe(e,t){if(typeof t==="function"){let u=this.#e.get(e);if(!u)this.#e.set(e,u=[]);return u.push(t),Ln(()=>{if(u.splice(u.indexOf(t),1),u.length===0)this.#e.delete(e)})}let r=t?.signal,n=t?.maxBufferedEvents??this.#t;r?.throwIfAborted();let o=[],i=[],a=this.subscribe(e,(u)=>{let s=i.shift();if(s)s[0]({done:!1,value:u});else if(o.push(u),o.length>n)o.shift()}),c=(u)=>{a(),i.forEach((s)=>s[1](u.target.reason)),i.length=0,o.length=0};return r?.addEventListener("abort",c,{once:!0}),new At(async()=>{if(r?.aborted)throw r.reason;if(o.length>0)return{done:!1,value:o.shift()};return new Promise((u,s)=>{i.push([u,s])})},async()=>{a(),r?.removeEventListener("abort",c),i.forEach((u)=>u[0]({done:!0,value:void 0})),i.length=0,o.length=0})}}class OP{index=BigInt(1);generate(){let e=this.index.toString(36);return this.index++,e}}function Ir(e,t,r){let n=(o,i)=>{let a=e[i];if(!a)return r(o);return a({...o,next:(c=o)=>n(c,i+1)})};return n(t,0)}function kr(e){if(!e)return;return JSON.parse(e)}function lo(e){return JSON.stringify(e)}function ym(e){if(!Xe(e))return null;return Object.getPrototypeOf(e)?.constructor}function Ge(e){if(!e||typeof e!=="object")return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||!t||!t.constructor}function Xe(e){return!!e&&(typeof e==="object"||typeof e==="function")}function Cc(e,t){let r=e;for(let n of t){if(!Xe(r))return;r=r[n]}return r}function Cn(e,...t){if(typeof e==="function")return e(...t);return e}function zc(e){return new Proxy(e,{get(t,r,n){let o=Reflect.get(t,r,n);if(r!=="then"||typeof o!=="function")return o;return new Proxy(o,{apply(i,a,c){if(c.length!==2||c.some((s)=>!TP(s)))return Reflect.apply(i,a,c);let u=!0;c[0].call(a,zc(new Proxy(t,{get:(s,d,h)=>{if(u&&d==="then"){u=!1;return}return Reflect.get(s,d,h)}})))}})}})}function TP(e){return typeof e==="function"&&SP.test(e.toString())}function vm(e){try{return decodeURIComponent(e)}catch{return e}}var Dc="orpc",mP="@orpc/shared",yP="1.14.3",Lc,fP=2,IP,wP,$P,At,xc,SP;var rt=g(()=>{Lc=class Lc extends Error{constructor(...e){super(...e);this.name="AbortError"}};IP=`__${mP}@${yP}/otel/config__`;wP=Symbol.for("asyncDispose"),$P=Symbol.asyncDispose??wP;At=class At{#e=!1;#t=!1;#o;#r;constructor(e,t){this.#o=t,this.#r=vP(async()=>{if(this.#e)return{done:!0,value:void 0};try{let r=await e();if(r.done)this.#e=!0;return r}catch(r){throw this.#e=!0,r}finally{if(this.#e&&!this.#t)this.#t=!0,await this.#o("next")}})}next(){return this.#r()}async return(e){if(this.#e=!0,!this.#t)this.#t=!0,await this.#o("return");return{done:!0,value:e}}async throw(e){if(this.#e=!0,!this.#t)this.#t=!0,await this.#o("throw");throw e}async[$P](){if(this.#e=!0,!this.#t)this.#t=!0,await this.#o("dispose")}[Symbol.asyncIterator](){return this}};xc=(()=>{let e=function(){};return e.prototype=Object.create(null),Object.freeze(e.prototype),e})();SP=/^\s*function\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/});function Ec(e,t){return t??wr[e]?.status??500}function km(e,t){return t||wr[e]?.message||e}function $r(e){return e instanceof pe?e:new pe("INTERNAL_SERVER_ERROR",{message:"Internal server error",cause:e})}function mt(e){return e<200||e>=400}function uo(e){if(!Ge(e))return!1;let t=["defined","code","status","message","data"];if(Object.keys(e).some((r)=>!t.includes(r)))return!1;return"defined"in e&&typeof e.defined==="boolean"&&"code"in e&&typeof e.code==="string"&&"status"in e&&typeof e.status==="number"&&mt(e.status)&&"message"in e&&typeof e.message==="string"}function so(e,t={}){return new pe(e.code,{...t,...e})}var fm="@orpc/client",Im="1.14.3",wr,wm,jc,pe;var Uc=g(()=>{rt();wr={BAD_REQUEST:{status:400,message:"Bad Request"},UNAUTHORIZED:{status:401,message:"Unauthorized"},FORBIDDEN:{status:403,message:"Forbidden"},NOT_FOUND:{status:404,message:"Not Found"},METHOD_NOT_SUPPORTED:{status:405,message:"Method Not Supported"},NOT_ACCEPTABLE:{status:406,message:"Not Acceptable"},TIMEOUT:{status:408,message:"Request Timeout"},CONFLICT:{status:409,message:"Conflict"},PRECONDITION_FAILED:{status:412,message:"Precondition Failed"},PAYLOAD_TOO_LARGE:{status:413,message:"Payload Too Large"},UNSUPPORTED_MEDIA_TYPE:{status:415,message:"Unsupported Media Type"},UNPROCESSABLE_CONTENT:{status:422,message:"Unprocessable Content"},TOO_MANY_REQUESTS:{status:429,message:"Too Many Requests"},CLIENT_CLOSED_REQUEST:{status:499,message:"Client Closed Request"},INTERNAL_SERVER_ERROR:{status:500,message:"Internal Server Error"},NOT_IMPLEMENTED:{status:501,message:"Not Implemented"},BAD_GATEWAY:{status:502,message:"Bad Gateway"},SERVICE_UNAVAILABLE:{status:503,message:"Service Unavailable"},GATEWAY_TIMEOUT:{status:504,message:"Gateway Timeout"}};wm=Symbol.for(`__${fm}@${Im}/error/ORPC_ERROR_CONSTRUCTORS__`);globalThis[wm]??=new WeakSet;jc=globalThis[wm];pe=class pe extends Error{defined;code;status;data;constructor(e,...t){let r=mm(t);if(r.status!==void 0&&!mt(r.status))throw Error("[ORPCError] Invalid error status code.");let n=km(e,r.message);super(n,r);this.code=e,this.status=Ec(e,r.status),this.defined=r.defined??!1,this.data=r.data}toJSON(){return{defined:this.defined,code:this.code,status:this.status,message:this.message,data:this.data}}static[Symbol.hasInstance](e){if(jc.has(this)){let t=ym(e);if(t&&jc.has(t))return!0}return super[Symbol.hasInstance](e)}};jc.add(pe)});function PP(e){let t=e.replace(/\n+$/,"").split(/\n/),r={data:void 0,event:void 0,id:void 0,retry:void 0,comments:[]};for(let n of t){let o=n.indexOf(":"),i=o===-1?n:n.slice(0,o),a=o===-1?"":n.slice(o+1).replace(/^\s/,"");if(o===0)r.comments.push(a);else if(i==="data")r.data??="",r.data+=`${a}
`;else if(i==="event")r.event=a;else if(i==="id")r.id=a;else if(i==="retry"){let c=Number.parseInt(a);if(Number.isInteger(c)&&c>=0&&c.toString()===a)r.retry=c}}return r.data=r.data?.replace(/\n$/,""),r}class _m{constructor(e={}){this.options=e}incomplete="";feed(e){this.incomplete+=e;let t=this.incomplete.lastIndexOf(`

`);if(t===-1)return;let r=this.incomplete.slice(0,t).split(/\n\n/);this.incomplete=this.incomplete.slice(t+2);for(let n of r){let o=PP(`${n}

`);if(this.options.onEvent)this.options.onEvent(o)}}end(){if(this.incomplete)throw new $m("Event Iterator ended before complete")}}function Om(e){if(e.includes(`
`))throw new _r("Event's id must not contain a newline character")}function AP(e){if(e.includes(`
`))throw new _r("Event's event must not contain a newline character")}function Sm(e){if(!Number.isInteger(e)||e<0)throw new _r("Event's retry must be a integer and >= 0")}function Tm(e){if(e.includes(`
`))throw new _r("Event's comment must not contain a newline character")}function DP(e){let t=e?.split(/\n/)??[],r="";for(let n of t)r+=`data: ${n}
`;return r}function LP(e){let t="";for(let r of e??[])Tm(r),t+=`: ${r}
`;return t}function Or(e){let t="";if(t+=LP(e.comments),e.event!==void 0)AP(e.event),t+=`event: ${e.event}
`;if(e.retry!==void 0)Sm(e.retry),t+=`retry: ${e.retry}
`;if(e.id!==void 0)Om(e.id),t+=`id: ${e.id}
`;return t+=DP(e.data),t+=`
`,t}function Jt(e,t){if(t.id===void 0&&t.retry===void 0&&!t.comments?.length)return e;if(t.id!==void 0)Om(t.id);if(t.retry!==void 0)Sm(t.retry);if(t.comments!==void 0)for(let r of t.comments)Tm(r);return new Proxy(e,{get(r,n,o){if(n===Pm)return t;return Reflect.get(r,n,o)}})}function ho(e){return Xe(e)?Reflect.get(e,Pm):void 0}function Am(e,t="inline"){let r=e.replace(/[^\x20-\x7E]/g,"_").replace(/"/g,"\\\""),n=encodeURIComponent(e).replace(/['()*]/g,(o)=>`%${o.charCodeAt(0).toString(16).toUpperCase()}`).replace(/%(7C|60|5E)/g,(o,i)=>String.fromCharCode(Number.parseInt(i,16)));return`${t}; filename="${r}"; filename*=utf-8''${n}`}function Dm(e){let t=e.match(/filename\*=(UTF-8'')?([^;]*)/i);if(t&&typeof t[2]==="string")return vm(t[2]);let r=e.match(/filename="((?:\\"|[^"])*)"/i);if(r&&typeof r[1]==="string")return r[1].replace(/\\"/g,'"')}function xn(e,t){let r={...e};for(let n in t)if(Array.isArray(t[n]))r[n]=[...Ht(r[n]),...t[n]];else if(t[n]!==void 0)if(Array.isArray(r[n]))r[n]=[...r[n],t[n]];else if(r[n]!==void 0)r[n]=[r[n],t[n]];else r[n]=t[n];return r}var _r,$m,He,Rc,Pm;var Sr=g(()=>{rt();_r=class _r extends TypeError{};$m=class $m extends TypeError{};He=class He extends Error{data;constructor(e){super(e?.message??"An error event was received",e);this.data=e?.data}};Rc=class Rc extends TransformStream{constructor(){let e;super({start(t){e=new _m({onEvent:(r)=>{t.enqueue(r)}})},transform(t){e.feed(t)},flush(){e.end()}})}};Pm=Symbol("ORPC_EVENT_SOURCE_META")});function qt(e,t){let r=async(n)=>{let o=await t.error(n);if(o!==n){let i=ho(n);if(i&&Xe(o))o=Jt(o,i)}return o};return new At(async()=>{let{done:n,value:o}=await(async()=>{try{return await e.next()}catch(a){throw await r(a)}})(),i=await t.value(o,n);if(i!==o){let a=ho(o);if(a&&Xe(i))i=Jt(i,a)}return{done:n,value:i}},async()=>{try{await e.return?.()}catch(n){throw await r(n)}})}var Fc=g(()=>{rt();Sr()});function NP(e){return{...e,context:e.context??{}}}function Kc(e,t={}){let r=t.path??[],o=new Proxy(async(...[i,a={}])=>{return await e.call(r,i,NP(a))},{get(i,a){if(typeof a!=="string")return Reflect.get(i,a);return Kc(e,{...t,path:[...r,a]})}});return zc(o)}var go=g(()=>{rt();Uc();Fc()});function CP(e,t={}){let n=e?.pipeThrough(new TextDecoderStream).pipeThrough(new Rc)?.getReader(),o,i=!1;return new At(async()=>{o??=Nn("consume_event_iterator_stream");try{while(!0){if(n===void 0)return{done:!0,value:void 0};let{done:a,value:c}=await Gt(o,()=>n.read());if(a){if(i)throw new Lc("Stream was cancelled");return{done:!0,value:void 0}}switch(c.event){case"message":{let u=kr(c.data);if(Xe(u))u=Jt(u,c);return o?.addEvent("message"),{done:!1,value:u}}case"error":{let u=new He({data:kr(c.data)});throw u=Jt(u,c),o?.addEvent("error"),u}case"done":{let u=kr(c.data);if(Xe(u))u=Jt(u,c);return o?.addEvent("done"),{done:!0,value:u}}default:o?.addEvent("maybe_keepalive")}}}catch(a){if(!(a instanceof He))Pt(o,a,t);throw a}},async(a)=>{try{if(a!=="next")i=!0,o?.addEvent("cancelled");await Gt(o,()=>n?.cancel())}catch(c){throw Pt(o,c,t),c}finally{o?.end()}})}function xP(e,t={}){let r=t.eventIteratorKeepAliveEnabled??!0,n=t.eventIteratorKeepAliveInterval??5000,o=t.eventIteratorKeepAliveComment??"",i=t.eventIteratorInitialCommentEnabled??!0,a=t.eventIteratorInitialComment??"",c=!1,u,s;return new ReadableStream({start(h){if(s=Nn("stream_event_iterator"),i)h.enqueue(Or({comments:[a]}))},async pull(h){try{if(r)u=setInterval(()=>{h.enqueue(Or({comments:[o]})),s?.addEvent("keepalive")},n);let b=await Gt(s,()=>e.next());if(clearInterval(u),c)return;let p=ho(b.value);if(!b.done||b.value!==void 0||p!==void 0){let _=b.done?"done":"message";h.enqueue(Or({...p,event:_,data:lo(b.value)})),s?.addEvent(_)}if(b.done)h.close(),s?.end()}catch(b){if(clearInterval(u),c)return;if(b instanceof He)h.enqueue(Or({...ho(b),event:"error",data:lo(b.data)})),s?.addEvent("error"),h.close();else Pt(s,b),h.error(b);s?.end()}},async cancel(){try{c=!0,clearInterval(u),s?.addEvent("cancelled"),await Gt(s,()=>e.return?.())}catch(h){throw Pt(s,h),h}finally{s?.end()}}}).pipeThrough(new TextEncoderStream)}function zP(e,t={}){return Mt({name:"parse_standard_body",signal:t.signal},async()=>{let r=e.headers.get("content-disposition");if(typeof r==="string"){let i=Dm(r)??"blob",a=await e.blob();return new File([a],i,{type:a.type})}let n=e.headers.get("content-type");if(!n||n.startsWith("application/json")){let i=await e.text();return kr(i)}if(n.startsWith("multipart/form-data"))return await e.formData();if(n.startsWith("application/x-www-form-urlencoded")){let i=await e.text();return new URLSearchParams(i)}if(n.startsWith("text/event-stream"))return CP(e.body,t);if(n.startsWith("text/plain"))return await e.text();let o=await e.blob();return new File([o],"blob",{type:o.type})})}function jP(e,t,r={}){if(e instanceof ReadableStream)return e;let n=t.get("content-disposition");if(t.delete("content-type"),t.delete("content-disposition"),e===void 0)return;if(e instanceof Blob)return t.set("content-type",e.type),t.set("content-length",e.size.toString()),t.set("content-disposition",n??Am(e instanceof File?e.name:"blob")),e;if(e instanceof FormData)return e;if(e instanceof URLSearchParams)return e;if(Ye(e))return t.set("content-type","text/event-stream"),xP(e,r);return t.set("content-type","application/json"),lo(e)}function Bc(e,t={}){return e.forEach((r,n)=>{if(Array.isArray(t[n]))t[n].push(r);else if(t[n]!==void 0)t[n]=[t[n],r];else t[n]=r}),t}function EP(e,t=new Headers){for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let o of n)t.append(r,o);else if(n!==void 0)t.append(r,n);return t}function Lm(e,t={}){let r=EP(e.headers),n=jP(e.body,r,t);return new Request(e.url,{signal:e.signal,method:e.method,headers:r,body:n})}function Nm(e,t={}){return{body:Ln(()=>zP(e,t)),status:e.status,get headers(){let r=Bc(e.headers);return Object.defineProperty(this,"headers",{value:r,writable:!0}),r},set headers(r){Object.defineProperty(this,"headers",{value:r,writable:!0})}}}var Gc=g(()=>{rt();Sr()});class Tr{plugins;constructor(e=[]){this.plugins=[...e].sort((t,r)=>(t.order??0)-(r.order??0))}init(e){for(let t of this.plugins)t.init?.(e)}}class zn{constructor(e,t,r={}){this.codec=e,this.sender=t,new Tr(r.plugins).init(r),this.interceptors=Ht(r.interceptors),this.clientInterceptors=Ht(r.clientInterceptors)}interceptors;clientInterceptors;call(e,t,r){return Mt({name:`${Dc}.${e.join("/")}`,signal:r.signal},(n)=>{if(n?.setAttribute("rpc.system",Dc),n?.setAttribute("rpc.method",e.join(".")),Ye(t))t=Nc({name:"consume_event_iterator_input",signal:r.signal},t);return Ir(this.interceptors,{...r,path:e,input:t},async({path:o,input:i,...a})=>{let c=fr(),u,s=c?.trace.getActiveSpan()??n;if(s&&c)u=c?.trace.setSpan(c.context.active(),s);let d=await Mt({name:"encode_request",context:u},()=>this.codec.encode(o,i,a)),h=await Ir(this.clientInterceptors,{...a,input:i,path:o,request:d},({input:p,path:_,request:S,...H})=>{return Mt({name:"send_request",signal:H.signal,context:u},()=>this.sender.call(S,H,_,p))}),b=await Mt({name:"decode_response",context:u},()=>this.codec.decode(h,a,o,i));if(Ye(b))return Nc({name:"consume_event_iterator_output",signal:a.signal},b);return b})})}}function jn(e){return`/${e.map(encodeURIComponent).join("/")}`}function Hc(e){if(typeof e.forEach==="function")return Bc(e);return e}function Mc(e){return Object.entries(wr).find(([,t])=>t.status===e)?.[0]??"MALFORMED_ORPC_ERROR_RESPONSE"}class Cm{constructor(e){this.jsonSerializer=e}serialize(e){if(Ye(e))return qt(e,{value:async(t)=>this.#e(t,!1),error:async(t)=>{return new He({data:this.#e($r(t).toJSON(),!1),cause:t})}});return this.#e(e,!0)}#e(e,t){let[r,n,o,i]=this.jsonSerializer.serialize(e),a=n.length===0?void 0:n;if(!t||i.length===0)return{json:r,meta:a};let c=new FormData;return c.set("data",lo({json:r,meta:a,maps:o})),i.forEach((u,s)=>{c.set(s.toString(),u)}),c}deserialize(e){if(Ye(e))return qt(e,{value:async(t)=>this.#t(t),error:async(t)=>{if(!(t instanceof He))return t;let r=this.#t(t.data);if(uo(r))return so(r,{cause:t});return new He({data:r,cause:t})}});return this.#t(e)}#t(e){if(e===void 0)return;if(!(e instanceof FormData))return this.jsonSerializer.deserialize(e.json,e.meta??[]);let t=JSON.parse(e.get("data"));return this.jsonSerializer.deserialize(t.json,t.meta??[],t.maps,(r)=>e.get(r.toString()))}}var Jc=g(()=>{rt();Sr();Uc();Gc();Fc()});class qc{fetch;toFetchRequestOptions;adapterInterceptors;constructor(e){new xm(e.plugins).initRuntimeAdapter(e),this.fetch=e.fetch??globalThis.fetch.bind(globalThis),this.toFetchRequestOptions=e,this.adapterInterceptors=Ht(e.adapterInterceptors)}async call(e,t,r,n){let o=Lm(e,this.toFetchRequestOptions),i=await Ir(this.adapterInterceptors,{...t,request:o,path:r,input:n,init:{redirect:"manual"}},({request:c,path:u,input:s,init:d,...h})=>this.fetch(c,d,h,u,s));return Nm(i,{signal:o.signal})}}var xm;var zm=g(()=>{rt();Gc();Jc();xm=class xm extends Tr{initRuntimeAdapter(e){for(let t of this.plugins)t.initRuntimeAdapter?.(e)}}});var jm=g(()=>{Jc()});class Wc{maxArrayIndex;constructor(e={}){this.maxArrayIndex=e.maxBracketNotationArrayIndex??9999}serialize(e,t=[],r=[]){if(Array.isArray(e))e.forEach((n,o)=>{this.serialize(n,[...t,o],r)});else if(Ge(e))for(let n in e)this.serialize(e[n],[...t,n],r);else r.push([this.stringifyPath(t),e]);return r}deserialize(e){if(e.length===0)return{};let t=new WeakSet,r={value:[]};for(let[n,o]of e){let i=this.parsePath(n),a=r,c="value";if(i.forEach((u,s)=>{if(!Array.isArray(a[c])&&!Ge(a[c]))a[c]=[];if(s!==i.length-1){if(Array.isArray(a[c])&&!Em(u,this.maxArrayIndex))if(t.has(a[c]))t.delete(a[c]),a[c]=Um(a[c]);else a[c]=Vc(a[c])}else if(Array.isArray(a[c])){if(u===""){if(a[c].length&&!t.has(a[c]))a[c]=Vc(a[c])}else if(t.has(a[c]))t.delete(a[c]),a[c]=Um(a[c]);else if(!Em(u,this.maxArrayIndex))a[c]=Vc(a[c])}a=a[c],c=u}),Array.isArray(a)&&c==="")t.add(a),a.push(o);else if(c in a)if(Array.isArray(a[c]))a[c].push(o);else a[c]=[a[c],o];else a[c]=o}return r.value}stringifyPath(e){return e.map((t)=>{return t.toString().replace(/[\\[\]]/g,(r)=>{switch(r){case"\\":return"\\\\";case"[":return"\\[";case"]":return"\\]";default:return r}})}).reduce((t,r,n)=>{if(n===0)return r;return`${t}[${r}]`},"")}parsePath(e){let t=[],r=!1,n="",o=0;for(let i=0;i<e.length;i++){let a=e[i],c=e[i+1];if(r&&a==="]"&&(c===void 0||c==="[")&&o%2===0){if(c===void 0)r=!1;t.push(n),n="",i++}else if(t.length===0&&a==="["&&o%2===0)r=!0,t.push(n),n="";else if(a==="\\")o++;else n+="\\".repeat(o/2)+a,o=0}return r||t.length===0?[e]:t}}function Em(e,t){return/^0$|^[1-9]\d*$/.test(e)&&Number(e)<=t}function Vc(e){let t=new xc;return e.forEach((r,n)=>{t[n]=r}),t}function Um(e){let t=new xc;return t[""]=e.length===1?e[0]:e,t}var Rm=g(()=>{rt()});function Yc(e,t){return{...e,...t}}class Pr{"~orpc";constructor(e){if(e.route?.successStatus&&mt(e.route.successStatus))throw Error("[ContractProcedure] Invalid successStatus.");if(Object.values(e.errorMap).some((t)=>t&&t.status&&!mt(t.status)))throw Error("[ContractProcedure] Invalid error status code.");this["~orpc"]=e}}function Ar(e){if(e instanceof Pr)return!0;return(typeof e==="object"||typeof e==="function")&&e!==null&&"~orpc"in e&&typeof e["~orpc"]==="object"&&e["~orpc"]!==null&&"errorMap"in e["~orpc"]&&"route"in e["~orpc"]&&"meta"in e["~orpc"]}var Fm=g(()=>{go()});function RP(e,t){return{...e,...t}}function FP(e,t){return{...e,...t}}function KP(e,t){if(!e.path)return e;return{...e,path:`${t}${e.path}`}}function BP(e,t){return{...e,tags:[...t,...e.tags??[]]}}function GP(e,t){return e?`${e}${t}`:t}function HP(e,t){return e?[...e,...t]:t}function MP(e,t){let r=e;if(t.prefix)r=KP(r,t.prefix);if(t.tags?.length)r=BP(r,t.tags);return r}function Km(e,t){if(Ar(e))return new Pr({...e["~orpc"],errorMap:Yc(t.errorMap,e["~orpc"].errorMap),route:MP(e["~orpc"].route,t)});if(typeof e!=="object"||e===null)return e;let r={};for(let n in e)r[n]=Km(e[n],t);return r}function Dr(e,t){if(t===void 0)return JP[e];return t}var Me,Bm,JP,UU;var Xc=g(()=>{Fm();go();Me=class Me extends Pr{constructor(e){super(e);this["~orpc"].prefix=e.prefix,this["~orpc"].tags=e.tags}$meta(e){return new Me({...this["~orpc"],meta:e})}$route(e){return new Me({...this["~orpc"],route:e})}$input(e){return new Me({...this["~orpc"],inputSchema:e})}errors(e){return new Me({...this["~orpc"],errorMap:Yc(this["~orpc"].errorMap,e)})}meta(e){return new Me({...this["~orpc"],meta:RP(this["~orpc"].meta,e)})}route(e){return new Me({...this["~orpc"],route:FP(this["~orpc"].route,e)})}input(e){return new Me({...this["~orpc"],inputSchema:e})}output(e){return new Me({...this["~orpc"],outputSchema:e})}prefix(e){return new Me({...this["~orpc"],prefix:GP(this["~orpc"].prefix,e)})}tag(...e){return new Me({...this["~orpc"],tags:HP(this["~orpc"].tags,e)})}router(e){return Km(e,this["~orpc"])}};Bm=new Me({errorMap:{},route:{},meta:{}}),JP={defaultMethod:"POST",defaultSuccessStatus:200,defaultSuccessDescription:"OK",defaultInputStructure:"compact",defaultOutputStructure:"compact"};UU=Symbol("ORPC_EVENT_ITERATOR_DETAILS")});class Hm{customSerializers;constructor(e={}){this.customSerializers=e.customJsonSerializers??[]}serialize(e,t={value:!1}){for(let r of this.customSerializers)if(r.condition(e))return this.serialize(r.serialize(e),t);if(e instanceof Blob)return t.value=!0,[e,t.value];if(e instanceof Set)return this.serialize(Array.from(e),t);if(e instanceof Map)return this.serialize(Array.from(e.entries()),t);if(Array.isArray(e))return[e.map((n)=>n===void 0?null:this.serialize(n,t)[0]),t.value];if(Ge(e)){let r={};for(let n in e){if(n==="toJSON"&&typeof e[n]==="function")continue;r[n]=this.serialize(e[n],t)[0]}return[r,t.value]}if(typeof e==="bigint"||e instanceof RegExp||e instanceof URL)return[e.toString(),t.value];if(e instanceof Date)return[Number.isNaN(e.getTime())?null:e.toISOString(),t.value];if(Number.isNaN(e))return[null,t.value];return[e,t.value]}}function Zc(e){return`/${e.replace(/\/{2,}/g,"/").replace(/^\/|\/$/g,"")}`}function Gm(e){return e?Zc(e).match(/\/\{[^}]+\}/g)?.map((t)=>({raw:t,name:t.match(/\{\+?([^}]+)\}/)[1]})):void 0}class Mm{constructor(e,t,r){this.contract=e,this.serializer=t,this.baseUrl=r.url,this.headers=r.headers??{},this.customErrorResponseBodyDecoder=r.customErrorResponseBodyDecoder}baseUrl;headers;customErrorResponseBodyDecoder;async encode(e,t,r){let n=Hc(await Cn(this.headers,r,e,t));if(r.lastEventId!==void 0)n=xn(n,{"last-event-id":r.lastEventId});let o=await Cn(this.baseUrl,r,e,t),i=Cc(this.contract,e);if(!Ar(i))throw Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${e.join(".")}`);return Dr("defaultInputStructure",i["~orpc"].route.inputStructure)==="compact"?this.#e(i,e,t,r,o,n):this.#t(i,e,t,r,o,n)}#e(e,t,r,n,o,i){let a=Zc(e["~orpc"].route.path??jn(t)),c=r,u=Gm(a);if(u?.length){if(!Ge(r))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "compact" structure when has dynamic params at ${t.join(".")}.`);let h={...r};for(let b of u){let p=r[b.name];a=a.replace(b.raw,`/${encodeURIComponent(`${this.serializer.serialize(p)}`)}`),delete h[b.name]}c=Object.keys(h).length?h:void 0}let s=Dr("defaultMethod",e["~orpc"].route.method),d=new URL(o);if(d.pathname=`${d.pathname.replace(/\/$/,"")}${a}`,s==="GET"){let h=this.serializer.serialize(c,{outputFormat:"URLSearchParams"});for(let[b,p]of h)d.searchParams.append(b,p);return{url:d,method:s,headers:i,body:void 0,signal:n.signal}}return{url:d,method:s,headers:i,body:this.serializer.serialize(c),signal:n.signal}}#t(e,t,r,n,o,i){let a=Zc(e["~orpc"].route.path??jn(t)),c=Gm(a);if(!Ge(r)&&r!==void 0)throw TypeError(`[StandardOpenapiLinkCodec] Invalid input shape for "detailed" structure at ${t.join(".")}.`);if(c?.length){if(!Ge(r?.params))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input.params shape for "detailed" structure when has dynamic params at ${t.join(".")}.`);for(let h of c){let b=r.params[h.name];a=a.replace(h.raw,`/${encodeURIComponent(`${this.serializer.serialize(b)}`)}`)}}let u=i;if(r?.headers!==void 0){if(!Ge(r.headers))throw TypeError(`[StandardOpenapiLinkCodec] Invalid input.headers shape for "detailed" structure at ${t.join(".")}.`);u=xn(r.headers,i)}let s=Dr("defaultMethod",e["~orpc"].route.method),d=new URL(o);if(d.pathname=`${d.pathname.replace(/\/$/,"")}${a}`,r?.query!==void 0){let h=this.serializer.serialize(r.query,{outputFormat:"URLSearchParams"});for(let[b,p]of h)d.searchParams.append(b,p)}if(s==="GET")return{url:d,method:s,headers:u,body:void 0,signal:n.signal};return{url:d,method:s,headers:u,body:this.serializer.serialize(r?.body),signal:n.signal}}async decode(e,t,r){let n=!mt(e.status),o=await(async()=>{let c=!1;try{let u=await e.body();return c=!0,this.serializer.deserialize(u)}catch(u){if(!c)throw Error("Cannot parse response body, please check the response body and content-type.",{cause:u});throw Error("Invalid OpenAPI response format.",{cause:u})}})();if(!n){let c=this.customErrorResponseBodyDecoder?.(o,e);if(c!==null&&c!==void 0)throw c;if(uo(o))throw so(o);throw new pe(Mc(e.status),{status:e.status,data:{...e,body:o}})}let i=Cc(this.contract,r);if(!Ar(i))throw Error(`[StandardOpenapiLinkCodec] expect a contract procedure at ${r.join(".")}`);if(Dr("defaultOutputStructure",i["~orpc"].route.outputStructure)==="compact")return o;return{status:e.status,headers:e.headers,body:o}}}class Jm{constructor(e,t){this.jsonSerializer=e,this.bracketNotation=t}serialize(e,t={}){if(Ye(e)&&!t.outputFormat)return qt(e,{value:async(r)=>this.#e(r,{outputFormat:"plain"}),error:async(r)=>{return new He({data:this.#e($r(r).toJSON(),{outputFormat:"plain"}),cause:r})}});return this.#e(e,t)}#e(e,t){let[r,n]=this.jsonSerializer.serialize(e);if(t.outputFormat==="plain")return r;if(t.outputFormat==="URLSearchParams"){let i=new URLSearchParams;for(let[a,c]of this.bracketNotation.serialize(r))if(typeof c==="string"||typeof c==="number"||typeof c==="boolean")i.append(a,c.toString());return i}if(r instanceof Blob||r===void 0||!n)return r;let o=new FormData;for(let[i,a]of this.bracketNotation.serialize(r))if(typeof a==="string"||typeof a==="number"||typeof a==="boolean")o.append(i,a.toString());else if(a instanceof Blob)o.append(i,a);return o}deserialize(e){if(e instanceof URLSearchParams||e instanceof FormData)return this.bracketNotation.deserialize(Array.from(e.entries()));if(Ye(e))return qt(e,{value:async(t)=>t,error:async(t)=>{if(t instanceof He&&uo(t.data))return so(t.data,{cause:t});return t}});return e}}var Qc;var qm=g(()=>{jm();Rm();rt();go();Xc();Sr();Qc=class Qc extends zn{constructor(e,t,r){let n=new Hm(r),o=new Wc({maxBracketNotationArrayIndex:4294967294}),i=new Jm(n,o),a=new Mm(e,i,r);super(a,t,r)}}});var el;var Vm=g(()=>{zm();qm();el=class el extends Qc{constructor(e,t){let r=new qc(t);super(e,r,t)}}});var Ym=`## Overview

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
`;var Wm=()=>{};var Zm=`# Cloudflare Logpush Data Source Setup

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
`;var Xm=()=>{};var ey=`## Overview

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
`;var Qm=()=>{};var oy=`# Cloudflare Workers Data Source Setup

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
`;var ty=()=>{};var ny=`## Overview

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
- A workspace admin to enable the integration in Sazabi settings`;var ry=()=>{};var ay=`# CloudWatch Data Source Setup

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
`;var iy=()=>{};var ly=`## Overview

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
- A workspace admin to enable the integration in Sazabi settings`;var cy=()=>{};var sy="# Convex Data Source Setup\n\nWalk the user through connecting **Convex** deployments to a Sazabi project using a Convex **team access token** plus the Sazabi CLI. Stream creation enqueues the Convex backend's `provisionStream`, which mints a per-deployment deploy key, registers a webhook log stream on each Convex deployment, and points it at the Sazabi datasource-scoped intake host. Log streaming requires a Convex **Professional** plan.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating the team token in the Convex UI, choosing the Sazabi project, or picking which Convex deployments to monitor. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, pasting the team token, picking deployments.\n- Never echo `CONVEX_TEAM_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n- The team token is a JWT starting with `eyJ...`. Reject deploy keys (`prod:...`, `dev:...`, `preview:...`) — Sazabi mints its own per-deployment deploy keys via the Convex Management API.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI=\"sazabi\"\nelse\n  SAZABI_CLI=\"bunx @sazabi/cli\"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to the Convex Management API in Phase 3.\n\nCheck authentication:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf authentication fails, ask the user whether to authenticate via `auth login` (browser) or `auth save <token>` (existing secret key). Do not print tokens back to the user.\n\nThe user needs:\n\n1. A Sazabi project to receive the Convex telemetry.\n2. A Convex team on the **Professional** plan. Log streaming returns `LogStreamingNotEnabled` on Starter/Free teams.\n3. Access to the Convex deployments they want to monitor.\n4. A browser to create a Convex team access token.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the Convex telemetry? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use \"$SAZABI_PROJECT_ID\"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing Convex connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type convex --json\n```\n\nIf a Convex connection already exists that targets the Convex team the user wants to onboard, reuse its `id` as `CONVEX_CONNECTION_ID` and skip Phase 4 — still run Phase 2 to capture and validate the team token (the list response does not expose the decrypted team token, so Phase 3's Management API calls still need a freshly pasted `CONVEX_TEAM_TOKEN`), then continue into Phase 3 and Phase 5 to add new streams. Do not create a duplicate connection for the same Convex team.\n\n## Phase 2: Create and capture the Convex team token\n\nDirect the user to create the token:\n\n> Open **https://dashboard.convex.dev/team/settings/access-tokens** and click **Generate access token**.\n>\n> - **Token Name**: `Sazabi`\n> - **Permission**: This is a team-scoped token; it inherits the creator's team permissions. The creator must be a team admin or have permission to manage deployments in the team you want to monitor.\n>\n> Copy the token immediately — Convex only shows it once. The token is a JWT and starts with `eyJ`.\n\n`AskUserQuestion`: ask the user to paste the team access token. Capture it as `CONVEX_TEAM_TOKEN`.\n\nSanity-check the token before discovering deployments. The Management API's `/v1/token_details` returns the team the token is bound to:\n\n```sh\nif TOKEN_DETAILS=$(curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n  https://api.convex.dev/v1/token_details 2>/dev/null); then\n  CONVEX_TEAM_ID=$(jq -r '.teamId' <<<\"$TOKEN_DETAILS\")\nelse\n  CONVEX_TEAM_ID=\"\"\nfi\n```\n\nIf the call fails or `CONVEX_TEAM_ID` is empty/`null`, the token was revoked, copied incorrectly, or is not a team access token. Have the user regenerate it and retry. Do not print `CONVEX_TEAM_TOKEN` in any error output.\n\nConvex team access tokens are scoped to **exactly one team**. If the user wants to onboard deployments from multiple Convex teams, run this skill once per team — each run produces a separate Sazabi connection.\n\nCapture a display name for the team. Convex does not expose a team-name endpoint to token holders; fall back to `Team ${CONVEX_TEAM_ID}` if the user has no preferred label:\n\n```sh\nCONVEX_TEAM_NAME=\"Team ${CONVEX_TEAM_ID}\"\n```\n\n## Phase 3: Discover and pick Convex deployments\n\nEnumerate the team's projects, then enumerate each project's deployments. Reuse the exact `deployment.name` slug (e.g. `sleek-bear-350`) as `deploymentId` — that is the identifier the Convex log-streams API expects.\n\n```sh\nPROJECTS_JSON=$(curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n  \"https://api.convex.dev/v1/teams/${CONVEX_TEAM_ID}/list_projects\")\n\n# Emits one row per deployment: deploymentName<TAB>projectName<TAB>deploymentType\nDEPLOYMENTS_TSV=$(jq -r '.[] | \"\\(.id)\\t\\(.name)\"' <<<\"$PROJECTS_JSON\" \\\n  | while IFS=$'\\t' read -r PROJECT_ID PROJECT_NAME; do\n      curl -fsS -H \"Authorization: Bearer $CONVEX_TEAM_TOKEN\" \\\n        \"https://api.convex.dev/v1/projects/${PROJECT_ID}/list_deployments\" \\\n        | jq -r --arg pname \"$PROJECT_NAME\" \\\n            '.[] | \"\\(.name)\\t\\($pname)\\t\\(.deploymentType)\"'\n    done)\n\nprintf '%s\\n' \"$DEPLOYMENTS_TSV\"\n```\n\nGroup the rows by `projectName` and present them to the user. The `deploymentType` is one of `prod`, `dev`, `preview`.\n\n`AskUserQuestion`: which Convex deployments should Sazabi connect? One Sazabi stream is created per selected deployment.\n\nFor each selected row, build `(DEPLOYMENT_ID, DEPLOYMENT_DISPLAY_NAME)`:\n\n- `DEPLOYMENT_ID` = the deployment slug (column 1, e.g. `sleek-bear-350`). This is the value passed to Convex's `/api/v1/create_log_stream`.\n- `DEPLOYMENT_DISPLAY_NAME` = `<projectName> (<deploymentType>)` (e.g. `web (prod)`). This becomes both the stream's `displayName` and `config.deploymentName`.\n\nCollect these into a list `CONVEX_DEPLOYMENTS` for use in Phase 5.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection. The metadata schema lives in `convexMetadataSchema` — only `accessToken`, `teamId`, and `teamName` are persisted:\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token  \"$CONVEX_TEAM_TOKEN\" \\\n  --arg teamId \"$CONVEX_TEAM_ID\" \\\n  --arg name   \"$CONVEX_TEAM_NAME\" \\\n  '{accessToken: $token, teamId: $teamId, teamName: $name}')\n\nCONVEX_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type convex \\\n  --metadata \"$METADATA_JSON\" \\\n  --json | jq -r '.connectionId')\n```\n\nThe connection persists the (encrypted) team token and team scope. It does **not** provision any Convex-side log streams on its own — log-stream creation happens per stream in Phase 5.\n\n## Phase 5: Create one stream per Convex deployment\n\nFor each entry in `CONVEX_DEPLOYMENTS`, create a stream. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the Convex backend's `provisionStream`. That activity:\n\n1. Calls `POST https://api.convex.dev/v1/deployments/<deploymentId>/create_deploy_key` with the team token to mint a Sazabi-named deploy key.\n2. Mints a per-stream Sazabi public key.\n3. Calls `POST https://<deploymentId>.convex.cloud/api/v1/create_log_stream` with the deploy key to register a `webhook` / `json` log stream pointed at `https://convex.<projectRegion>.intake.<intakeDomain>/api/v1/convex/ingest?key=<publicKey>`.\n\nThe agent only has to set `deploymentId` and `deploymentName` in the stream `config`. The backend writes back `logStreamId`, `deployKey`, and `publicKeyId` on success.\n\n```sh\n$SAZABI_CLI data-sources streams create \\\n  --connection-id \"$CONVEX_CONNECTION_ID\" \\\n  --display-name \"$DEPLOYMENT_DISPLAY_NAME\" \\\n  --config \"$(jq -nc \\\n    --arg id   \"$DEPLOYMENT_ID\" \\\n    --arg name \"$DEPLOYMENT_DISPLAY_NAME\" \\\n    '{deploymentId: $id, deploymentName: $name}')\" \\\n  --json\n```\n\nDo **not** set `logStreamId`, `deployKey`, or `publicKeyId` in the initial config — those fields are reserved for the backend's write-back. Reuse the exact `deployment.name` slug returned by `list_deployments` for `deploymentId`; do not invent or reformat it.\n\nIf a stream creation fails because of a duplicate display name on this connection, append the deployment slug (e.g. `\"$DEPLOYMENT_DISPLAY_NAME [$DEPLOYMENT_ID]\"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nLog-stream provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id \"$CONVEX_CONNECTION_ID\" --json\n```\n\nEach stream's status transitions from `pending`/`provisioning` to `active` once the backend finishes calling Convex's `/api/v1/create_log_stream`. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that deployment and surface it to the user.\n\n**Pass 2 — telemetry arrival.** Convex emits log-stream batches only while the deployment is processing requests. Trigger traffic (run a Convex function, hit a deployed endpoint, run `npx convex dev`) and then:\n\n```sh\n$SAZABI_CLI logs tail --json --search convex\n```\n\nConfirm new records arrive tagged with the corresponding `deploymentName`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `CONVEX_CONNECTION_ID` and `CONVEX_TEAM_NAME`.\n- One line per stream: deployment display name, deployment slug, current status.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored, call out the failed deployment slug and offer to recreate just that stream.\n\nDo not include `CONVEX_TEAM_TOKEN` or any minted deploy key in the summary.\n\n## Troubleshooting\n\n### Invalid or expired team access token\n\n`/v1/token_details` returns 401 or `Invalid access token`. The token was revoked, copied incorrectly, or is not a team access token. Regenerate at **https://dashboard.convex.dev/team/settings/access-tokens** and rerun Phase 2. The existing connection record holds a now-stale token — delete the connection and rerun from Phase 4 unless your CLI version supports `connections update` (check `$SAZABI_CLI data-sources connections -h`).\n\n### `LogStreamingNotEnabled`\n\nThe Convex `create_log_stream` API returns `LogStreamingNotEnabled` when the team is not on the **Professional** plan. The user must upgrade at **https://www.convex.dev/plans**. After upgrading, rerun `streams create` for the failed deployments — the connection itself does not need to be recreated.\n\n### Token has no access to expected deployments\n\nConvex team access tokens are scoped to exactly one team and inherit the creator's permissions inside that team. If a project or deployment is missing from `list_projects`/`list_deployments`, either the deployment lives in a different team (run this skill again for that team) or the token's creator does not have the necessary role. Have the user regenerate the token under an account with the right permissions and retry from Phase 2.\n\n### Wrong token shape (deploy key pasted instead of access token)\n\nIf the user pasted a string starting with `prod:`, `dev:`, or `preview:`, that is a deploy key, not a team access token. Deploy keys cannot list teams or projects via the Management API. Have the user generate a team access token (JWT, `eyJ...`) and retry Phase 2.\n\n### Stream config rejected by Sazabi\n\n`streams create` validates `config` against `convexStreamConfigSchema` before insert. If the CLI returns a validation error, check that `deploymentId` and `deploymentName` are non-empty strings and that you did **not** pre-populate `logStreamId`, `deployKey`, or `publicKeyId`. Field names are case-sensitive.\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No telemetry arriving after streams are `active`\n\nAn `active` stream on the Sazabi side only delivers data when the corresponding Convex deployment processes requests. Trigger a function call, deploy, or `console.log` in the deployment. If logs still never arrive, verify the Convex dashboard shows the `Sazabi …` log stream under the deployment's **Log Streams** settings and that its destination URL host is `convex.<region>.intake.<domain>` (not the base regional intake host).\n\n### Manual connection already exists without streams\n\nIf someone previously ran `sazabi data-sources connections create --type convex` without the corresponding `streams create` calls, the connection exists but `streams list --connection-id <id>` returns empty. Reuse the existing `CONVEX_CONNECTION_ID` and continue from Phase 3 to add streams; do not create a second connection for the same Convex team.\n";var uy=()=>{};var dy=`## Overview

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
- The \`DD-API-KEY\` header must be populated with your Sazabi public key for Sazabi's intake to authenticate the request`;var hy=()=>{};var by=`# Datadog Agent Data Source Setup

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
`;var gy=()=>{};var my=`## Overview

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
- Sazabi public key and intake endpoint values provided during connection setup`;var py=()=>{};var vy=`# Daytona Data Source Setup

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
`;var yy=()=>{};var Iy=`## Overview

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
- Permissions to provision \`log_destinations\` on the selected apps (granted by the token scopes above)`;var fy=()=>{};var wy=`# DigitalOcean Data Source Setup

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
`;var ky=()=>{};var _y=`## Overview

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
`;var $y=()=>{};var Sy="# E2B Data Source Setup\n\nInstrument E2B sandboxes by attaching an **OpenTelemetry log exporter** that POSTs OTLP payloads to Sazabi's E2B intake URL. The exporter is configured in the host process where you create sandboxes; `onStdout` / `onStderr` callbacks passed to `sandbox.runCode()` emit one OTLP log record per output line.\n\n## Scope\n\nOnly output from code passed to `sandbox.runCode()` is captured. E2B's lifecycle webhook is not used by this setup, and the platform's `GET /sandboxes/{id}/logs/v2` endpoint is pull-only — any stdout/stderr emitted outside `runCode()` (for example by long-running processes spawned via `sandbox.commands.run`) is not forwarded.\n\n## Phase 1: Environment variables\n\n| Variable | Value |\n|----------|-------|\n| `SAZABI_INTAKE_URL` | `https://e2b.{projectRegion}.intake.{intakeDomain}/v1/logs` |\n| `SAZABI_PUBLIC_KEY`    | Sazabi `{publicKey}` |\n\nTreat `SAZABI_PUBLIC_KEY` as a bearer secret embedded in the OTLP exporter's `Authorization: Bearer ...` header. The `/v1/logs` path suffix is required.\n\n## Phase 2: Install dependencies\n\n**Node / TypeScript:**\n\n```bash\nnpm install @e2b/code-interpreter @opentelemetry/api-logs @opentelemetry/exporter-logs-otlp-http @opentelemetry/resources @opentelemetry/sdk-logs\n```\n\n**Python:**\n\n```bash\npip install e2b_code_interpreter opentelemetry-api opentelemetry-sdk opentelemetry-exporter-otlp-proto-http\n```\n\n## Phase 3: Wire the exporter\n\n1. Construct an `OTLPLogExporter` pointing at `SAZABI_INTAKE_URL` with `Authorization: Bearer ${SAZABI_PUBLIC_KEY}`.\n2. Wrap it in a `BatchLogRecordProcessor` and attach it to a `LoggerProvider`. On Node / TypeScript pass the processor through the `processors: [...]` option on the `LoggerProvider` constructor — the legacy `addLogRecordProcessor()` method was removed in `@opentelemetry/sdk-logs` 0.x → 2.x. On Python use `logger_provider.add_log_record_processor(...)`.\n3. Register the provider globally:\n   - Node: `logs.setGlobalLoggerProvider(loggerProvider)` and `logs.getLogger('e2b').emit({...})` for each output line.\n   - Python: `_logs.set_logger_provider(logger_provider)` plus a `LoggingHandler(logger_provider=...)` attached to the `e2b` logger (not root) with `logger.propagate = False`. Records emitted via `logging.getLogger('e2b').info(...)` are exported as OTLP log records via that bridge; unrelated app logs are not forwarded.\n\n## Phase 4: Create the sandbox and stream output\n\n1. Create the sandbox with `Sandbox.create()` (Node and Python). The bare `Sandbox()` constructor in Python requires positional arguments for an existing sandbox and is not the right entrypoint for new sandboxes.\n2. Pass `onStdout` / `onStderr` callbacks to **`sandbox.runCode(code, { ... })`** — not to `Sandbox.create()`. The callbacks fire once per output line; emit an OTLP log record from each, with attributes `e2b.stream` (`\"stdout\"` or `\"stderr\"`) and `e2b.sandbox_id`.\n3. When the code passed to `runCode()` is JavaScript, set `language: 'javascript'` in the options. The E2B code interpreter defaults to Python; without the override, JS code is evaluated as Python and stdout is silently empty.\n\n## Phase 5: Teardown\n\nIn a `finally` block (or equivalent):\n\n1. Call `sandbox.kill()` so the sandbox does not idle against the team's concurrent-sandbox quota until E2B's default timeout expires.\n2. Call `loggerProvider.shutdown()` (or the Python equivalent) so the batch processor flushes any pending records before the process exits.\n\nFollow the onboarding code tabs verbatim — they encode every required option above.\n";var Oy=()=>{};var Py=`## Overview

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
`;var Ty=()=>{};var Dy=`# Elastic Cloud Data Source Setup

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
`;var Ay=()=>{};var Ny=`## Overview

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
`;var Ly=()=>{};var xy=`# Fluent Bit Data Source Setup

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
`;var Cy=()=>{};var jy=`## Overview

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
- Outbound HTTPS connectivity from your Fly organization to the Sazabi intake endpoint`;var zy=()=>{};var Uy=`# Fly.io Data Source Setup

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
`;var Ey=()=>{};var Fy=`## Overview

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
- A workspace admin to enable the integration in Sazabi settings`;var Ry=()=>{};var By=`# GCP Data Source Setup

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
`;var Ky=()=>{};var Hy=`## Overview

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
`;var Gy=()=>{};var Jy=`# Grafana Alloy Data Source Setup

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
`;var My=()=>{};var Vy=`## Overview

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
`;var qy=()=>{};var Yy=`# Inngest Data Source Setup

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
`;var Wy=()=>{};var Zy=`## Overview

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
- Supported Python or TypeScript/JavaScript runtime with an OpenTelemetry SDK available`;var Xy=()=>{};var ev=`# LangChain Data Source Setup

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
`;var Qy=()=>{};var ov=`## Overview

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
`;var tv=()=>{};var nv="# Mastra Data Source Setup\n\nExport Mastra observability spans/logs by pointing `@mastra/otel-exporter` at Sazabi’s Mastra OTLP ingest host.\n\n## Phase 1: Environment variables\n\nSet (values come directly from dashboard copy helpers):\n\n| Variable | Purpose |\n|---------|---------|\n| `SAZABI_INTAKE_URL` | Must be `https://mastra.{projectRegion}.intake.{intakeDomain}/v1/traces` |\n| `SAZABI_API_KEY` | Raw **`{publicKey}`** (distinct from Bearer prefix; code adds Bearer if needed—match template you adopt) |\n\n## Phase 2: Mastra Observability bootstrap\n\nPut the snippet in `src/mastra/index.ts` (the canonical Mastra entry; `mastra build` and `mastra studio deploy` only look here, `mastra dev` accepts `--dir` as an override). The `mastra` binding **must be exported** — Mastra's generated dev/build entry does `import { mastra } from '#mastra'`, and an unexported `const mastra` fails the build with `MISSING_EXPORT`.\n\nInstantiate `Observability` with an `OtelExporter` referencing `process.env.SAZABI_INTAKE_URL` and Bearer headers wired to `process.env.SAZABI_API_KEY`, per the Mastra snippets in-dashboard:\n\n```typescript\n// src/mastra/index.ts\nimport { Mastra } from \"@mastra/core\";\nimport { OtelExporter } from \"@mastra/otel-exporter\";\nimport { Observability } from \"@mastra/observability\";\n\nexport const mastra = new Mastra({\n  observability: new Observability({\n    configs: {\n      default: {\n        serviceName: \"my-mastra-app\",\n        exporters: [\n          new OtelExporter({\n            provider: {\n              custom: {\n                endpoint: process.env.SAZABI_INTAKE_URL,\n                protocol: \"http/json\",\n                headers: {\n                  Authorization: `Bearer ${process.env.SAZABI_API_KEY}`,\n                },\n              },\n            },\n          }),\n        ],\n      },\n    },\n  }),\n});\n```\n\nMatch `protocol`, headers, and path suffix to what the onboard wizard emits.\n\n## Phase 3: Verify\n\nRun Mastra workloads (agents/tools) generating spans; inspect Sazabi for OTLP payloads tagged with Mastra adapters.\n";var rv=()=>{};var av=`## Overview

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
- A short, stable \`service.name\` to identify this project's logs in Sazabi`;var iv=()=>{};var lv=`# Neon Data Source Setup

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
`;var cv=()=>{};var sv=`## Overview

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
- Site-level permissions to configure Log Drains under Logs & Metrics in the Netlify site dashboard`;var uv=()=>{};var dv=`# Netlify Data Source Setup

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
`;var hv=()=>{};var bv=`## Overview

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
- Note: prompt and completion content is withheld when OpenRouter's Privacy Mode is active`;var gv=()=>{};var mv=`# OpenRouter Data Source Setup

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
`;var pv=()=>{};var vv=`## Overview

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
`;var yv=()=>{};var Iv=`# OpenTelemetry (Generic) Data Source Setup

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
`;var fv=()=>{};var wv=`## Overview

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
`;var kv=()=>{};var _v=`# OpenTelemetry Collector Data Source Setup

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
`;var $v=()=>{};var Sv=`## Overview

Forward your PostHog events directly to Sazabi for real-time observability and AI-powered analysis. Use PostHog's CDP HTTP Webhook destination to stream product analytics and error events into your project.

## How it works

Configure an HTTP Webhook destination in PostHog Data Pipeline > Destinations and point it to your Sazabi intake URL. PostHog sends a JSON payload for each matching event, and Sazabi transforms it into OTEL logs for search, alerting, and investigation.

## Features

- Event delivery via PostHog's HTTP Webhook destination in Data Pipeline
- Per-event filtering to control which PostHog events are forwarded to Sazabi
- Full event and person properties included in each payload for rich observability context

## Requirements

- PostHog workspace with access to CDP / Data Pipeline destinations (paid PostHog feature)
- Permissions to create and configure HTTP Webhook destinations in PostHog Data Pipeline > Destinations`;var Ov=()=>{};var Pv='---\nname: posthog-data-source-setup\ndescription: Connect a PostHog organization to a Sazabi project so PostHog events stream into Sazabi via auto-provisioned CDP HTTP-webhook destinations. Use when the user wants to "connect PostHog", "ingest PostHog events", "add a PostHog data source", or after running `sazabi data-sources skill --type posthog`. Drives the Sazabi CLI (`data-sources connections create` + `data-sources streams create`) plus direct calls to PostHog\'s REST API for project discovery and scope validation; stream creation triggers the backend to POST to `/api/projects/{id}/hog_functions/` and mint a Sazabi public key.\n---\n\n# PostHog Data Source Setup\n\nWalk the user through connecting a PostHog organization to a Sazabi project using a **personal API key** (`phx_...`). The Sazabi backend installs a CDP HTTP-webhook destination (hog function) on each selected PostHog project and mints a per-stream public key. Prefer this native flow. The legacy "manual webhook" flow (user hand-creates an HTTP Webhook destination in PostHog) is out of scope for this skill.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating the personal API key in PostHog, choosing the Sazabi project, or picking PostHog projects. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, entering the personal API key, picking PostHog projects.\n- Never echo `POSTHOG_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to PostHog\'s REST API in Phase 2 and Phase 3.\n\nConfirm CLI auth:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf unauthenticated, run `$SAZABI_CLI auth login` (browser) or `$SAZABI_CLI auth save <token>` (paste an existing session token or secret key). Do not print tokens.\n\nThe user needs:\n\n1. A Sazabi project to receive PostHog events.\n2. A PostHog account with admin access to the projects they want to forward, on either **US Cloud** (`us.posthog.com`) or **EU Cloud** (`eu.posthog.com`).\n3. A PostHog plan that includes **CDP / Data Pipeline destinations** (hog functions) — this is a paid PostHog feature.\n4. A browser to create a personal API key.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the PostHog events? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing PostHog connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type posthog --json\n```\n\nIf a PostHog connection already exists for the same organization the user wants to onboard, reuse its `id` as `POSTHOG_CONNECTION_ID` and skip token creation (Phase 2) and connection creation (Phase 4) — but still run Phase 3 to discover and select the PostHog projects to create streams for. The user must paste a personal API key with `project:read` (and `hog_function:write` for stream provisioning) so Phase 3 can list projects; the existing connection\'s stored token is encrypted and not retrievable. Once the new project selection is captured in `POSTHOG_PROJECTS`, jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same PostHog organization (the backend dedupes by `region + organizationId + token`).\n\n## Phase 2: Create the PostHog personal API key\n\nDirect the user to create a personal API key. PostHog hosts US and EU Cloud separately; pick the one their organization lives on.\n\n> Open **PostHog → Settings → Personal API keys**:\n>\n> - US Cloud: **https://us.posthog.com/settings/user-api-keys**\n> - EU Cloud: **https://eu.posthog.com/settings/user-api-keys**\n>\n> Click **Create personal API key**.\n>\n> - **Label**: `Sazabi`\n> - **Scopes** (all three are required):\n>   - `project:read` — enumerate projects in the stream selector\n>   - `organization:read` — resolve the organization name shown alongside projects\n>   - `hog_function:write` — install the webhook destination on each project\n> - **Scoped organizations / projects**: leave unrestricted, or restrict to the organization the user wants to onboard.\n>\n> PostHog displays the key (`phx_...`) only once. If the user dismisses the dialog without copying it, they must create a new key.\n\n`AskUserQuestion`: ask the user to paste the personal API key. Capture it as `POSTHOG_TOKEN`.\n\n### Validate the token and resolve region + organization\n\nThe Sazabi backend probes US then EU using the token to discover which region it belongs to and which organization it grants access to. Reproduce that probe with `curl` so the agent has the values it needs for Phase 4. The token may be on either region; try US first, fall back to EU on `401`/`403`.\n\n```sh\nposthog_probe() {\n  local region="$1"\n  curl -fsS \\\n    -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n    "https://${region}.posthog.com/api/projects/@current/"\n}\n\nif PROJECT_JSON=$(posthog_probe us 2>/dev/null); then\n  POSTHOG_REGION="us"\nelif PROJECT_JSON=$(posthog_probe eu 2>/dev/null); then\n  POSTHOG_REGION="eu"\nelse\n  echo "PostHog token rejected on both US and EU." >&2\n  exit 1\nfi\n\nPOSTHOG_ORGANIZATION_ID=$(jq -r \'.organization\' <<<"$PROJECT_JSON")\nPOSTHOG_ORGANIZATION_NAME=$(curl -fsS \\\n  -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://${POSTHOG_REGION}.posthog.com/api/organizations/${POSTHOG_ORGANIZATION_ID}/" \\\n  | jq -r \'.name\')\n```\n\nIf the probe fails on both regions: the key was revoked, copied incorrectly, or lacks `project:read`. Have the user create a new key with the three required scopes and rerun this phase. Do not print `POSTHOG_TOKEN` in any error output.\n\n### Verify all three scopes\n\n`project:read` is implied by the successful probe above. Verify `organization:read` succeeded (`POSTHOG_ORGANIZATION_NAME` is non-empty) and confirm `hog_function:write` is on the key — stream creation will fail later if it is missing.\n\n```sh\ncurl -fsS \\\n  -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://${POSTHOG_REGION}.posthog.com/api/personal_api_keys/@current/" \\\n  | jq -e \'.scopes | index("hog_function:write") or index("*")\'\n```\n\nIf the check exits non-zero, the key is missing `hog_function:write`. Have the user edit the key in PostHog to add that scope (or recreate it) and rerun this phase.\n\n## Phase 3: Discover and pick PostHog projects\n\nList the PostHog projects the token can see. The stream selector flow in the dashboard calls Sazabi\'s `list-projects` action, which requires a created connection — but here we\'re discovering before connection creation, so call PostHog\'s REST API directly.\n\nPostHog `/api/projects/` is paginated using DRF-style `{ count, next, previous, results }`. Follow `next` until it is `null` so orgs with more than one page of projects are fully enumerated.\n\n```sh\nPOSTHOG_PROJECTS_JSON=\'[]\'\nNEXT_URL="https://${POSTHOG_REGION}.posthog.com/api/projects/?limit=200"\nwhile [ -n "$NEXT_URL" ] && [ "$NEXT_URL" != "null" ]; do\n  PAGE=$(curl -fsS -H "Authorization: Bearer $POSTHOG_TOKEN" "$NEXT_URL")\n  POSTHOG_PROJECTS_JSON=$(jq -c \\\n    --argjson acc "$POSTHOG_PROJECTS_JSON" \\\n    \'($acc + (.results // . | [.[] | {id: (.id | tostring), name}]))\' \\\n    <<<"$PAGE")\n  NEXT_URL=$(jq -r \'.next // empty\' <<<"$PAGE")\ndone\njq \'.\' <<<"$POSTHOG_PROJECTS_JSON"\n```\n\n`AskUserQuestion`: which PostHog projects should Sazabi forward events from?\n\nBuild `POSTHOG_PROJECTS` as a list of `(posthogProjectId, posthogProjectName)` pairs. Reuse the exact `id` (stringified) and `name` returned by PostHog — do not invent or reformat them. Each selected project becomes one Sazabi stream and one PostHog hog function.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection. The metadata schema requires `posthogPersonalApiKey`, `posthogApiRegion`, `posthogOrganizationId`, and `connectionMode: "native"`; `posthogOrganizationName` is optional but recommended for the dashboard.\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token   "$POSTHOG_TOKEN" \\\n  --arg region  "$POSTHOG_REGION" \\\n  --arg orgId   "$POSTHOG_ORGANIZATION_ID" \\\n  --arg orgName "$POSTHOG_ORGANIZATION_NAME" \\\n  \'{\n    posthogPersonalApiKey: $token,\n    posthogApiRegion: $region,\n    posthogOrganizationId: $orgId,\n    posthogOrganizationName: $orgName,\n    connectionMode: "native"\n  }\')\n\nPOSTHOG_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type posthog \\\n  --metadata "$METADATA_JSON" \\\n  --json | jq -r \'.connectionId\')\n```\n\nThe connection persists the encrypted personal API key plus the resolved region and organization. It does **not** install any hog functions on its own — that happens per stream in Phase 5.\n\nIf the CLI reports `duplicate connection` or a connection-identity collision, an existing PostHog connection already covers this `(region, organizationId, token)` triple — reuse its `id` from `connections list --type posthog --json` and continue from Phase 5.\n\n## Phase 5: Create one stream per PostHog project\n\nFor each entry in `POSTHOG_PROJECTS`, call `streams create`. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the backend\'s `provisionStream` for `posthog` — that mints a Sazabi public key scoped to the stream, then POSTs to `https://${POSTHOG_REGION}.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/hog_functions/` with `template_id: "template-webhook"` pointed at Sazabi\'s intake URL.\n\n```sh\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$POSTHOG_CONNECTION_ID" \\\n  --display-name "$POSTHOG_PROJECT_NAME" \\\n  --config "$(jq -nc \\\n    --arg id   "$POSTHOG_PROJECT_ID" \\\n    --arg name "$POSTHOG_PROJECT_NAME" \\\n    \'{posthogProjectId: $id, posthogProjectName: $name}\')" \\\n  --json\n```\n\nReuse the exact `id` (stringified) and `name` returned by PostHog\'s `/api/projects/` response for `posthogProjectId` and `posthogProjectName`. Field names are case-sensitive.\n\nIf a stream creation fails on duplicate display name, append a suffix (e.g. `"$POSTHOG_PROJECT_NAME (events)"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nHog-function provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id "$POSTHOG_CONNECTION_ID" --json\n```\n\nEach stream transitions from `pending` (or `provisioning`) to `active` once the backend finishes calling PostHog\'s `/api/projects/{id}/hog_functions/` endpoint. The stream\'s `config.posthogHogFunctionId` is populated on success. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that PostHog project and surface it to the user — the Temporal activity log holds the underlying error.\n\n**Pass 2 — telemetry arrival.** Hog functions only emit events when the PostHog project receives matching captures. Either trigger an event (`$pageview`, custom capture) or wait for natural traffic, then tail:\n\n```sh\n$SAZABI_CLI logs tail --json --search posthog\n```\n\nConfirm new records arrive tagged with the corresponding `posthogProjectName`. If nothing appears within a few minutes of triggering an event, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `POSTHOG_CONNECTION_ID` and the resolved `$POSTHOG_REGION` + `$POSTHOG_ORGANIZATION_NAME`.\n- One line per stream: PostHog project name, current status, and (if active) the `posthogHogFunctionId`.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored out (non-`active`, non-`pending`, non-`provisioning`), call out the failed PostHog project name and offer to recreate just that stream.\n\nDo not include `POSTHOG_TOKEN` in the summary.\n\n## Troubleshooting\n\n### Invalid or expired personal API key\n\nThe key may have been revoked, copied incorrectly, or expired. Recreate at the region-specific URL (`https://${POSTHOG_REGION}.posthog.com/settings/user-api-keys`) with the three required scopes and rerun Phase 2. The Sazabi connection still exists with a stale key — delete it (`data-sources connections delete <id>` if your CLI version supports it) and rerun from Phase 4, or update the connection metadata if `connections update` is available (`$SAZABI_CLI data-sources connections -h`).\n\n### Stream creation fails with `403` / "Insufficient permissions"\n\nThe personal API key is missing `hog_function:write`, or the user lacks admin access to that PostHog project. Verify the scope check at the end of Phase 2 passes, and confirm the user has at least Member (Admin recommended) access to the PostHog project. Recreate the key with the correct scope if needed.\n\n### Stream creation fails with `402` / "CDP destinations require a paid plan"\n\nHog functions / CDP destinations are a paid PostHog feature. The user must upgrade the PostHog organization billing plan before provisioning will succeed. The Sazabi connection and the failed stream can be deleted before retry; or leave them and provisioning will succeed next time it is retried.\n\n### Wrong region resolved\n\nThe probe in Phase 2 tries US first, EU second. A key that exists on **EU Cloud** but is rejected on US with a `401`/`403` will fall through correctly. If the probe returns a `5xx` on US, it short-circuits without trying EU — in that case retry the probe manually against EU only:\n\n```sh\ncurl -fsS -H "Authorization: Bearer $POSTHOG_TOKEN" \\\n  "https://eu.posthog.com/api/projects/@current/"\n```\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No events arriving after streams are `active`\n\nA hog function that is `active` on the Sazabi side does not emit events unless the PostHog project receives captures matching the destination\'s filters. Trigger a real `$pageview` or `capture` event against the PostHog project. Confirm the hog function is enabled in PostHog → **Data Pipeline → Destinations** (look for `Sazabi — <project> (<prefix>)`).\n\n### Manual webhook destination already exists\n\nIf the user previously hand-created an HTTP Webhook destination in PostHog (the legacy manual flow), it will keep forwarding to Sazabi independently of this connection — this skill\'s native flow installs a **separate** hog function. Either delete the manual destination in PostHog before running this skill (to avoid duplicate events) or leave both in place if intentional.\n';var Tv=()=>{};var Dv=`## Overview

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
- Minimal applications may require an explicit bootstrap file, preload flag, or wrapper command so the SDK initializes with the service`;var Av=()=>{};var Nv=`# Railway Data Source Setup

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
`;var Lv=()=>{};var xv=`## Overview

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
- Workspace admin access in Sazabi to enable the integration`;var Cv=()=>{};var jv=`# Render Data Source Setup

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
`;var zv=()=>{};var Uv=`## Overview

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
`;var Ev=()=>{};var Fv=`# Sentry SDK Data Source Setup

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
`;var Rv=()=>{};var Bv=`## Overview

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
- Works on all Sentry plans. Per-event \`error\` delivery (Sentry Business plan and up) is not currently used; \`issue\` events cover new error groupings on every plan.`;var Kv=()=>{};var Hv='# Sentry Platform Data Source Setup\n\nConnect a Sentry organization to a Sazabi project via Sazabi-managed **Sentry Internal Integration**. Sazabi creates the Internal Integration in the user\'s Sentry org, subscribes it to `issue` and `comment` webhooks, and registers it as an alertable destination for Issue/Metric Alert rules. Use the Sazabi CLI (`data-sources connections create --type sentry_platform`); the provisioning, public-key minting, and webhook URL are handled server-side. This source has `streamCardinality: "single"` — creating the connection auto-provisions exactly one stream. Do **not** call `streams create` manually.\n\nThis skill covers the Sentry Platform (webhook) source. It is distinct from the **Sentry SDK** source (`sentry`), which forwards SDK telemetry via a swapped DSN. Pick this one when the user wants Sentry issues, comments, and alerts streamed to Sazabi.\n\n**Principle:** Do the work. Only pause when the user must act: minting a Sentry auth token in the browser, choosing the Sazabi project, or confirming a policy decision.\n\n<important>\nUse AskUserQuestion only for user-owned boundaries: choosing the Sazabi project, pasting the Sentry auth token, providing the organization slug, and confirming the Sentry user has Owner/Manager role.\n</important>\n\n## Phase 0: Preflight\n\nSelect the Sazabi CLI command prefix. Prefer the installed `sazabi` binary; fall back to `bunx @sazabi/cli` rather than asking the user to install globally.\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below.\n\nCheck authentication:\n\n```sh\n$SAZABI_CLI auth whoami --json\n```\n\nIf unauthenticated, ask the user whether to authenticate via browser login or paste an existing token. Browser login: `$SAZABI_CLI auth login`. Token: `$SAZABI_CLI auth save <token>`. Do not echo the token back.\n\nCheck whether a Sentry Platform connection already exists for the active project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type sentry_platform --json\n```\n\nIf a connection already exists for the target Sentry organization, stop and tell the user setup is already complete. Re-running the create flow against the same organization will be rejected by `getConnectionIdentity` (which keys on `org:<organizationSlug>`).\n\n## Phase 1: Choose the Sazabi project\n\nIf the active project is already correct in context, reuse it. Otherwise list and select:\n\n```sh\n$SAZABI_CLI projects list --json\n$SAZABI_CLI projects use <project-id>\n```\n\nCapture the chosen project ID as `SAZABI_PROJECT_ID`.\n\n## Phase 2: Confirm the user has Owner or Manager role in Sentry\n\nCreating a Sentry Internal Integration requires the **`org:write`** scope, which Sentry only grants to users with **Owner** or **Manager** organization role. Admin, Member, and Billing roles cannot mint an `org:write` token regardless of the UI letting them check the scope box — Sentry will return `403` from `POST /api/0/sentry-apps/`.\n\nAskUserQuestion: Confirm the Sentry user is an **Owner** or **Manager** in the target Sentry organization. If they are an Admin/Member/Billing user, have an Owner or Manager run this setup instead.\n\n## Phase 3: Mint the Sentry auth token\n\nDirect the user to:\n\n> Open **https://sentry.io/settings/account/api/auth-tokens/new-token/** in your browser, then create a token with exactly these scopes:\n>\n> - **Organization: Read & Write** (`org:write`)\n> - **Project: Read** (`project:read`)\n> - **Issue & Event: Read** (`event:read`)\n>\n> Confirm the **Permissions Preview** at the bottom of the form shows `event:read, org:write, project:read` before clicking **Create Token**. The token is shown once — copy it immediately.\n\nAskUserQuestion: Paste the Sentry auth token you just created.\n\nCapture as `SENTRY_AUTH_TOKEN`. Do not print it back.\n\nAskUserQuestion: Paste the Sentry organization slug (the `<slug>` segment in `sentry.io/organizations/<slug>/`).\n\nCapture as `SENTRY_ORG_SLUG`. It must match `^[a-z0-9][a-z0-9-]*[a-z0-9]$` — lowercase letters, digits, and hyphens only.\n\n## Phase 4: Create the connection\n\nThe Sazabi CLI runs validation (`GET /api/0/organizations/<slug>/`) before persisting, then auto-provisions the single stream, which in turn mints a public key and creates the Internal Integration in Sentry with webhook URL `https://sentry-platform.<region>.intake.<domain>/v1/logs?api_key=<publicKey>`.\n\n```sh\nCONNECTION_JSON=$($SAZABI_CLI data-sources connections create \\\n  --type sentry_platform \\\n  --metadata "$(jq -n \\\n    --arg token "$SENTRY_AUTH_TOKEN" \\\n    --arg slug "$SENTRY_ORG_SLUG" \\\n    \'{connectionMode: "native", sentryAuthToken: $token, organizationSlug: $slug}\')" \\\n  --json)\n\nCONNECTION_ID=$(printf \'%s\' "$CONNECTION_JSON" | jq -r \'.connectionId\')\n```\n\nDo **not** also run `data-sources streams create`. `streamCardinality: "single"` causes the connection-create flow to provision the one stream automatically.\n\nHandle expected failures here:\n\n- **`401 Invalid auth token`**: the token was mistyped, revoked, or lacks the required scopes. Re-mint at the URL in Phase 3 and retry.\n- **`403 ... org:write scope ... Owner or Manager`**: the Sentry user is not an Owner/Manager. Restart from Phase 2 with a qualified user.\n- **`404 Organization not found`**: re-check `SENTRY_ORG_SLUG` against `sentry.io/organizations/<slug>/`. Do not invent it — Sentry slugs are lowercase and may differ from the display name.\n- **Duplicate connection error**: a connection already exists for `org:<SENTRY_ORG_SLUG>` in this project. Run `connections list --type sentry_platform --json` to find it; reuse or delete it before retrying.\n\n## Phase 5: Verify and report\n\nInspect the connection and its stream:\n\n```sh\n$SAZABI_CLI data-sources connections get "$CONNECTION_ID" --json\n$SAZABI_CLI data-sources streams list --connection-id "$CONNECTION_ID" --json\n```\n\nThe single stream should appear with a `status` that transitions to `active` once provisioning finishes. The stream\'s `config` will then contain `sentryAppSlug` (the Internal Integration\'s slug in Sentry) and `publicKeyId`.\n\nTrigger a real signal to confirm end-to-end delivery. Any of these will fire a webhook:\n\n- In Sentry, open any Issue and add a comment, change status, assign, or resolve it.\n- Or trigger a fresh exception in an instrumented Sentry project to create a new issue.\n\nTail Sazabi logs for the project while the user performs the action:\n\n```sh\n$SAZABI_CLI logs tail --services sentry-platform-intake --json\n```\n\nSuccessful delivery shows entries with `sentry.webhook.resource` of `issue` or `comment` and `sentry.webhook.action` populated.\n\nSummarize the result for the user:\n\n- The `connectionId`.\n- That a single stream was auto-provisioned and is forwarding `issue` and `comment` webhooks.\n- That **Issue Alert** and **Metric Alert** webhooks are opt-in: the user must edit each Sentry alert rule in **Alerts** and add the integration (named `Sazabi (<stream display name>)`) as a notification destination. Without that step, `event_alert` and `metric_alert` deliveries will not arrive even though the integration is `isAlertable`.\n\nNever print `SENTRY_AUTH_TOKEN` or the minted public key in the summary.\n\n## Troubleshooting\n\n### Token works but no webhooks arrive\n\nVerify the Internal Integration exists in Sentry at **Settings → Developer Settings → Custom Integrations**. The name will be `Sazabi (<stream display name>)`. If it is missing, the provisioning step failed silently — check `streams list` for `status = error` and `errorMessage` to see the underlying Sentry API response.\n\n### Alert webhooks (`event_alert` / `metric_alert`) never fire\n\nThese are not subscribed automatically. The user must add the Sazabi integration as a notification action on each alert rule in Sentry under **Alerts → <rule> → Edit → Then perform these actions**. Issue and comment webhooks are unaffected and arrive regardless.\n\n### `403` on every Sentry call despite Owner role\n\nConfirm the token is a **user auth token** minted from **Account → API → Auth Tokens**, not an organization-scoped DSN or a deploy key. Internal Integration auth tokens cannot mint other Internal Integrations.\n\n### Connection persisted but stream stuck in `pending`\n\nProvisioning runs in a Temporal workflow. Wait 30 seconds and re-run `streams list`. If still pending after a minute, the workflow likely errored — surface `errorMessage` and retry by deleting the connection and re-running Phase 4.\n';var Gv=()=>{};var Jv=`## Overview

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
- Ability to add custom HTTP headers when configuring the OTLP destination`;var Mv=()=>{};var Vv=`# Supabase Data Source Setup

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
`;var qv=()=>{};var Yv="## Overview\n\nForward OpenTelemetry logs and traces from your Temporal worker processes to Sazabi to observe durable workflow execution. Works for both Temporal Cloud and self-hosted clusters — everything is configured inside the worker process, not in the Temporal control plane.\n\n## How it works\n\nAdd the OpenTelemetry SDK to each Temporal worker. The OTel SDK reads the `OTEL_EXPORTER_OTLP_*` environment variables you set on the worker and exports telemetry to the Sazabi intake. Workflow- and activity-level traces are produced by registering Temporal's official OpenTelemetry tracing interceptor (`temporalio.contrib.opentelemetry.TracingInterceptor` in Python, `OpenTelemetryWorkflowClientInterceptor` in TypeScript, `tracing.NewTracingInterceptor` in Go, `Temporalio.Extensions.OpenTelemetry` in .NET).\n\nWorker-emitted metrics (such as `temporal_workflow_task_execution_latency` and `temporal_worker_task_slots_available`) are configured separately on the Temporal SDK runtime and are not currently ingested by this integration.\n\n## Features\n\n- OpenTelemetry logs and traces from Temporal worker processes.\n- Workflow- and activity-level spans through Temporal's official tracing interceptors.\n- Support for Temporal Cloud and self-hosted clusters without control-plane changes.\n\n## Requirements\n\n- Permission to deploy worker code that initializes the OpenTelemetry SDK.\n- Access to install and configure the OpenTelemetry SDK and Temporal tracing interceptor for your worker language.\n- Metrics emitted by Temporal workers are configured separately and are not currently stored by this integration; logs and traces are supported.\n";var Wv=()=>{};var Zv=`# Temporal Data Source Setup

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
`;var Xv=()=>{};var ef=`## Overview

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
- Trigger.dev project must be redeployed after configuration changes take effect`;var Qv=()=>{};var of="# Trigger.dev Data Source Setup\n\nConfigure Trigger.dev as a **manual OTLP logs** data source. This source is not native: the user must edit `trigger.config.ts` and redeploy their Trigger.dev project.\n\n## Phase 1: Sazabi values\n\nCreate or open the Trigger.dev data source in Sazabi and copy the rendered values from the manual setup screen:\n\n- **Sazabi API key**: `{publicKey}`.\n- **Logs endpoint**: `https://trigger-dev.{projectRegion}.intake.{intakeDomain}/v1/logs`.\n\nTreat the key as a bearer secret and never echo the full value back in logs, commits, or chat transcripts.\n\n## Phase 2: Trigger.dev config\n\n1. Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns `trigger.config.ts`.\n2. Store the Sazabi public key as `SAZABI_API_KEY` in the Trigger.dev deployment environment.\n3. Add an `OTLPLogExporter` to `telemetry.logExporters` in `trigger.config.ts`.\n4. Redeploy the Trigger.dev project.\n\nDo not set `OTEL_*` environment variables for this integration. Trigger.dev reserves those variables for internal telemetry, so configure the log exporter in code.\n\n## Phase 3: Out of scope\n\nUse this data source for logs only. Do not configure Trigger.dev alert webhooks, management API polling, trace retrieval, trace exporters, or metrics exporters as the primary Sazabi data source for this setup.\n\n## Phase 4: Verify\n\nTrigger a task that emits logs and confirm new records arrive in Sazabi for the project. If nothing appears, re-check that the URL includes `/v1/logs`, the `Authorization` header is `Bearer <publicKey>`, and the redeployed config uses `telemetry.logExporters`.\n";var tf=()=>{};var nf=`## Overview

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
`;var rf=()=>{};var cf=`# Vector Data Source Setup

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
`;var af=()=>{};var uf=`## Overview

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
- Web Analytics enabled in Vercel for projects where you create analytics drains.`;var lf=()=>{};var hf='---\nname: vercel-data-source-setup\ndescription: Connect Vercel projects to a Sazabi project so deployment logs, OpenTelemetry traces, and Web Analytics events stream into Sazabi. Use when the user wants to "connect Vercel", "set up Vercel logs/traces in Sazabi", "ingest Vercel telemetry", "add a Vercel data source", or after running `sazabi data-sources skill --type vercel`. Drives the Sazabi CLI (`data-sources connections create` + `data-sources streams create`) plus direct calls to Vercel\'s REST API for project discovery; stream creation triggers the backend\'s drain provisioner which calls Vercel\'s `/v1/drains` endpoint.\n---\n\n# Vercel Data Source Setup\n\nWalk the user through connecting Vercel projects to a Sazabi project using the Sazabi CLI for all Sazabi-side operations and direct calls to Vercel\'s REST API for Vercel-side project discovery. Creating a stream via `sazabi data-sources streams create` enqueues a Temporal activity that calls Vercel\'s `/v1/drains` API for that project — there is no separate "provision drains" command.\n\n<important>\n- **Do the work.** Only pause when the user must act: creating a token in the Vercel UI, choosing the Sazabi project, picking Vercel projects, or picking a drain type. If a step fails, diagnose and retry before asking the user to intervene.\n- Use `AskUserQuestion` only at user-owned boundaries: choosing a Sazabi project, entering the API token, picking Vercel projects, or picking a drain type.\n- Never echo `VERCEL_TOKEN` back to the user, into logs, into shell history, or into any tool input that is not strictly required.\n</important>\n\n## Phase 0: Preflight\n\nPick the Sazabi CLI command prefix:\n\n```sh\nif command -v sazabi >/dev/null 2>&1; then\n  SAZABI_CLI="sazabi"\nelse\n  SAZABI_CLI="bunx @sazabi/cli"\nfi\n```\n\nUse `$SAZABI_CLI` for every Sazabi command below. Confirm `curl` and `jq` are available — both are used to talk to Vercel\'s REST API in Phase 3.\n\nThe user needs:\n\n1. A Sazabi project to receive the Vercel telemetry.\n2. A Vercel team on the **Pro** or **Enterprise** plan. Drains are not available on Hobby or Pro Trial — see https://vercel.com/docs/drains#usage-and-pricing.\n3. A Vercel account with access to the projects they want to monitor.\n4. A browser to create a Vercel API token.\n5. Web Analytics enabled in Vercel for any project where they want analytics events.\n\n## Phase 1: Choose the Sazabi project\n\nIf the active Sazabi project is already clear from context, reuse it. Otherwise:\n\n```sh\n$SAZABI_CLI projects list --json\n```\n\n`AskUserQuestion`: which Sazabi project should receive the Vercel telemetry? Capture the selected ID as `SAZABI_PROJECT_ID` and activate it:\n\n```sh\n$SAZABI_CLI projects use "$SAZABI_PROJECT_ID"\n```\n\n### Detect already-complete setup\n\nBefore creating anything new, list existing Vercel connections on this Sazabi project:\n\n```sh\n$SAZABI_CLI data-sources connections list --type vercel --json\n```\n\nIf a Vercel connection already exists that targets the Vercel scope (team or personal account) the user wants to onboard, reuse its `id` as `VERCEL_CONNECTION_ID` and skip Phase 2 and Phase 4 — jump to Phase 5 and create only the new streams. Do not create a duplicate connection for the same Vercel scope.\n\n## Phase 2: Create and capture the Vercel token\n\nDirect the user to create a token:\n\n> Open **https://vercel.com/account/tokens** and click **Create Token**.\n>\n> - **Token Name**: `Sazabi`\n> - **Scope**: Select the team you want to monitor, or **Full Account** for personal accounts.\n> - **Expiration**: Choose per security policy. No expiration is acceptable for automation.\n>\n> Vercel only displays the token once. If the user closes the dialog without copying it, they must create a new token.\n\n`AskUserQuestion`: ask the user to paste the API token. Capture it as `VERCEL_TOKEN`.\n\nSanity-check the token before discovering projects:\n\n```sh\ncurl -fsS -H "Authorization: Bearer $VERCEL_TOKEN" https://api.vercel.com/v2/user >/dev/null \\\n  && echo "ok" || echo "invalid"\n```\n\nIf `invalid`, the token was revoked, copied incorrectly, or expired. Have the user create a new token and retry. Do not print `VERCEL_TOKEN` in any error output.\n\n## Phase 3: Discover and pick Vercel projects\n\nThe Sazabi CLI does not enumerate Vercel projects — call Vercel\'s REST API directly with `VERCEL_TOKEN`. Both endpoints are paginated and return `{ pagination: { next, ... } }`; iterate until `next` is null/missing or accounts with more than 100 projects/teams will be silently truncated.\n\n```bash\n# Iterate a Vercel paginated endpoint. $1 = base URL, $2 = cursor param name\n# (`from` for /v10/projects, `until` for /v2/teams). Emits one JSON page per line.\nvercel_paginate() {\n  local url="$1" param="$2" page next\n  while :; do\n    page=$(curl -fsS -H "Authorization: Bearer $VERCEL_TOKEN" "$url") || return 1\n    printf \'%s\\n\' "$page"\n    next=$(jq -r \'.pagination.next // empty\' <<<"$page")\n    [ -z "$next" ] && break\n    url="${1}&${param}=${next}"\n  done\n}\n\n# Teams the token can access; cache for the per-team loop below.\nTEAMS_JSON=$(vercel_paginate "https://api.vercel.com/v2/teams?limit=100" until \\\n  | jq -s \'[.[].teams[]]\')\necho "$TEAMS_JSON" | jq \'.[] | {id, name, slug}\'\n\n# Personal-account projects (no teamId param).\nvercel_paginate "https://api.vercel.com/v10/projects?limit=100" from \\\n  | jq -s \'[.[].projects[]] | .[] | {id, name, framework}\'\n\n# Projects per discovered team.\necho "$TEAMS_JSON" | jq -r \'.[] | "\\(.id)\\t\\(.name)"\' \\\n  | while IFS=$\'\\t\' read -r TEAM_ID TEAM_NAME; do\n      vercel_paginate "https://api.vercel.com/v10/projects?limit=100&teamId=$TEAM_ID" from \\\n        | jq -s --arg team "$TEAM_NAME" \'[.[].projects[]] | .[] | {id, name, framework, team: $team}\'\n    done\n```\n\nGroup the results: under each `team.name` for team-scoped projects, and under **Personal account** for projects with no `teamId`.\n\nResolve the connection scope:\n\n- If every project the user wants to onboard belongs to the same non-personal team, capture `VERCEL_TEAM_ID` and `VERCEL_TEAM_NAME` from that team\'s record. The Sazabi connection will be scoped to that team.\n- If the user only wants personal-account projects, leave `VERCEL_TEAM_ID` and `VERCEL_TEAM_NAME` unset.\n- If the user wants projects across multiple teams or across team + personal scopes, plan **one Sazabi connection per scope** — repeat Phase 4 and Phase 5 for each.\n\n`AskUserQuestion`: which Vercel projects should Sazabi connect?\n\nFor each selected project, ask which drain type to create. Each `(project, drainType)` pair becomes one Sazabi stream.\n\n| Drain type | Stream config fields                                  |\n| ---------- | ----------------------------------------------------- |\n| Logs       | `drainType: "logs"`, `ingestTraces: false`            |\n| Traces     | `drainType: "traces"`, `ingestTraces: true`           |\n| Analytics  | `drainType: "analytics"` (omit `ingestTraces`)        |\n\nMultiple drain types per project are supported — each drain type creates a separate stream and a separate Vercel drain.\n\nDo not pass a narrowed `sources` array for log streams. The backend overwrites the Vercel-side drain filter with the full source set (`static, lambda, edge, build, external, firewall, redirect`) at provision time, so narrowing has no effect on what Vercel forwards. Omit `sources` from the stream config.\n\nBuild `VERCEL_PROJECTS` as a list of `(vercelProjectId, vercelProjectName, drainType)` triples for use in Phase 5.\n\n## Phase 4: Create the Sazabi connection\n\nBuild the metadata payload and create the connection:\n\n```sh\nMETADATA_JSON=$(jq -nc \\\n  --arg token "$VERCEL_TOKEN" \\\n  --arg teamId "${VERCEL_TEAM_ID:-}" \\\n  --arg teamName "${VERCEL_TEAM_NAME:-}" \\\n  \'{vercelApiToken: $token}\n   + (if $teamId  != "" then {vercelTeamId:  $teamId } else {} end)\n   + (if $teamName != "" then {vercelTeamName: $teamName} else {} end)\')\n\nVERCEL_CONNECTION_ID=$($SAZABI_CLI data-sources connections create \\\n  --type vercel \\\n  --metadata "$METADATA_JSON" \\\n  --json | jq -r \'.connectionId\')\n```\n\nThe connection persists the (encrypted) token and team scope. It does **not** provision any Vercel drains on its own — drain creation happens per stream in Phase 5.\n\n## Phase 5: Create one stream per (project, drainType)\n\nFor each entry in `VERCEL_PROJECTS`, build a stream config and call `streams create`. Stream creation enqueues the Temporal `provisionStreamActivity`, which calls the backend\'s `provisionStream` for vercel — which in turn POSTs to Vercel\'s `/v1/drains` API.\n\n```sh\n# Logs stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "logs", ingestTraces: false}\')" \\\n  --json\n\n# Traces stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME (traces)" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "traces", ingestTraces: true}\')" \\\n  --json\n\n# Analytics stream:\n$SAZABI_CLI data-sources streams create \\\n  --connection-id "$VERCEL_CONNECTION_ID" \\\n  --display-name "$VERCEL_PROJECT_NAME (analytics)" \\\n  --config "$(jq -nc \\\n    --arg id   "$VERCEL_PROJECT_ID" \\\n    --arg name "$VERCEL_PROJECT_NAME" \\\n    \'{vercelProjectId: $id, vercelProjectName: $name, drainType: "analytics"}\')" \\\n  --json\n```\n\nReuse the exact `id` and `name` values returned by Vercel\'s API for `vercelProjectId` and `vercelProjectName`. Do not invent or reformat them.\n\nIf a stream creation fails because of a duplicate display name, append the drain type (e.g. `"$VERCEL_PROJECT_NAME (logs)"`) and retry that one stream — `display-name` is unique per connection.\n\n## Phase 6: Verify and report\n\nDrain provisioning runs asynchronously after `streams create` returns. Verify in two passes.\n\n**Pass 1 — provisioning status.** Within a minute of the last `streams create`:\n\n```sh\n$SAZABI_CLI data-sources streams list --connection-id "$VERCEL_CONNECTION_ID" --json\n```\n\nEach stream\'s status transitions from `pending` (or `provisioning`) to `active` once the backend finishes calling Vercel\'s `/v1/drains`. If a stream stays non-`active` for more than five minutes, treat it as a provisioning failure for that project and surface it to the user — the Temporal activity log will have the underlying error, but the agent doesn\'t have direct access to it from this skill.\n\n**Pass 2 — telemetry arrival.** Drains only emit data when the underlying Vercel project receives traffic. Either trigger traffic (deploy, redeploy, hit a route, navigate a Web Analytics-instrumented page) or wait for natural traffic, then:\n\n```sh\n$SAZABI_CLI logs tail --json --search vercel\n```\n\nConfirm new records arrive tagged with the corresponding `vercelProjectName`. If nothing appears within a few minutes of triggering traffic, see **Troubleshooting**.\n\nReport back to the user:\n\n- The created `VERCEL_CONNECTION_ID`.\n- One line per stream: project name, drain type, current status.\n- For any stream still non-`active`, say so explicitly and suggest re-running `streams list` in a minute.\n- For any stream that errored out (you can detect this via a non-`active`, non-`pending`, non-`provisioning` status), call out the failed project name and offer to recreate just that stream.\n\nDo not include `VERCEL_TOKEN` in the summary.\n\n## Troubleshooting\n\n### Invalid or expired Vercel token\n\nThe token may have been revoked, copied incorrectly, or expired. Recreate at https://vercel.com/account/tokens and rerun Phase 2. The connection record still exists with a now-stale token — either delete it and rerun the skill from Phase 4, or update the connection metadata if your Sazabi CLI version supports `connections update` (check `$SAZABI_CLI data-sources connections -h`).\n\n### Token has no access to expected projects\n\nVercel API tokens are scoped to a team or to the personal account at creation time. If the desired projects are missing from the `/v10/projects` response in Phase 3, the token was created under the wrong scope. Have the user create a new token while scoped to the correct team and rerun from Phase 2.\n\n### Stream config rejected by Sazabi\n\n`streams create` validates the `config` payload against the source\'s stream schema before insert. If the CLI returns a validation error, check that `vercelProjectId` and `vercelProjectName` are non-empty strings and `drainType` is one of `logs`, `traces`, `analytics`. Field names are case-sensitive.\n\n### Drains feature unavailable (Hobby / Pro Trial)\n\nIf `streams list` shows a stream stuck or errored, and the underlying error mentions a permissions or feature-availability issue, the Vercel team is on Hobby or Pro Trial. Drains require Pro or Enterprise — see https://vercel.com/docs/drains#usage-and-pricing. The user must upgrade the Vercel team. The connection record and the failed stream can be deleted before retry; or leave them and Vercel-side drain creation will succeed next time provisioning is retried.\n\n### Streams stuck in `pending` or `provisioning`\n\nThe Temporal worker that runs `provisionStreamActivity` may be lagging. Five minutes is a reasonable upper bound; longer than that suggests the worker is unhealthy or the activity is throwing a non-retryable error. Re-running `streams create` for the same `(connectionId, displayName)` will fail on duplicate display name — append a suffix like `(retry)` or delete the stuck stream first.\n\n### No telemetry arriving after streams are `active`\n\nA drain that is `active` on the Sazabi side does not emit logs unless the Vercel project receives requests, builds, or Web Analytics events. Trigger real traffic against the Vercel project. For analytics specifically, confirm Web Analytics is enabled in the Vercel project\'s settings — drain creation succeeds even when analytics is disabled, and the drain will silently produce nothing.\n\n### Manual connection already exists without streams\n\nIf someone previously ran `sazabi data-sources connections create --type vercel` without the corresponding `streams create` calls, the connection exists but `streams list --connection-id <id>` returns empty. Reuse the existing `VERCEL_CONNECTION_ID` and continue from Phase 5 to add streams; do not create a second connection for the same Vercel scope.\n';var sf=()=>{};var df,gf;var bf=g(()=>{Wm();Xm();Qm();ty();ry();iy();cy();uy();hy();gy();py();yy();fy();ky();$y();Oy();Ty();Ay();Ly();Cy();zy();Ey();Ry();Ky();Gy();My();qy();Wy();Xy();Qy();tv();rv();iv();cv();uv();hv();gv();pv();yv();fv();kv();$v();Ov();Tv();Av();Lv();Cv();zv();Ev();Rv();Kv();Gv();Mv();qv();Wv();Xv();Qv();tf();rf();af();lf();sf();df={cloudflare:Ym.trim(),cloudflare_workers:ey.trim(),cloudwatch:ny.trim(),convex:ly.trim(),datadog:dy.trim(),daytona:my.trim(),digital_ocean:Iy.trim(),e2b:_y.trim(),elastic_cloud:Py.trim(),fluent_bit:Ny.trim(),fly_io:jy.trim(),gcp:Fy.trim(),grafana_alloy:Hy.trim(),inngest:Vy.trim(),langchain:Zy.trim(),mastra:ov.trim(),neon:av.trim(),netlify:sv.trim(),openrouter:bv.trim(),otel:vv.trim(),otel_collector:wv.trim(),posthog:Sv.trim(),railway:Dv.trim(),render:xv.trim(),sentry:Uv.trim(),sentry_platform:Bv.trim(),supabase:Jv.trim(),temporal:Yv.trim(),trigger_dev:ef.trim(),vector:nf.trim(),vercel:uf.trim()},gf={cloudflare:Zm.trim(),cloudflare_workers:oy.trim(),cloudwatch:ay.trim(),convex:sy.trim(),datadog:by.trim(),daytona:vy.trim(),digital_ocean:wy.trim(),e2b:Sy.trim(),elastic_cloud:Dy.trim(),fluent_bit:xy.trim(),fly_io:Uy.trim(),gcp:By.trim(),grafana_alloy:Jy.trim(),inngest:Yy.trim(),langchain:ev.trim(),mastra:nv.trim(),neon:lv.trim(),netlify:dv.trim(),openrouter:mv.trim(),otel:Iv.trim(),otel_collector:_v.trim(),posthog:Pv.trim(),railway:Nv.trim(),render:jv.trim(),sentry:Fv.trim(),sentry_platform:Hv.trim(),supabase:Vv.trim(),temporal:Zv.trim(),trigger_dev:of.trim(),vector:cf.trim(),vercel:hf.trim()}});var tl=(e)=>{let t=gf[e];if(t)return t;return df[e]};var pf=g(()=>{bf()});var C="available";var se,En="Authorization=Bearer ${context.publicKey}",je="Bearer ${context.publicKey}",Un=(e)=>[`Add the OpenTelemetry SDK to your ${e}. Most languages have official OpenTelemetry SDKs available (e.g., \`@opentelemetry/api\` for Node.js, \`opentelemetry-api\` for Python, etc.).`,`Initialize the OpenTelemetry SDK in your ${e}. The SDK will automatically read these environment variables and export telemetry data to Sazabi.`,`Set the following environment variables in your ${e} environment. These variables configure the OpenTelemetry exporter to send logs, traces, and metrics to Sazabi.`],bo=(e,t="http/protobuf")=>[{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:`https://${e}.\${context.projectRegion}.intake.\${context.intakeDomain}`,copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:"Authorization=Bearer ${context.publicKey}",copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:t,copyLabel:"OTLP protocol"}],Rn;var he=g(()=>{se={label:"Connect",pendingLabel:"Connecting..."},Rn={kind:"prose",text:"The OpenTelemetry SDK will automatically detect these environment variables and start exporting telemetry data without requiring any additional code changes."}});var ol,rl,nl;var mf=g(()=>{he();ol={kind:"linear",steps:[{kind:"prose",text:"**Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs."},{kind:"prose",text:"Create a Cloudflare API token with **Account Settings: Read**, **Zone: Read**, and **Zone Logs: Edit** permissions. The template below preselects the required permissions. Pick the account you want to connect, click **Continue to summary**, then **Create Token**, and paste the value below."},{kind:"external-link",label:"Open Cloudflare API token template",href:"https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22account_settings%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22account%22%7D%2C%7B%22key%22%3A%22logs%22%2C%22type%22%3A%22edit%22%2C%22scope%22%3A%22zone%22%7D%2C%7B%22key%22%3A%22zone%22%2C%22type%22%3A%22read%22%2C%22scope%22%3A%22zone%22%7D%5D&name=Sazabi+Cloudflare+Logpush"},{id:"token",kind:"secret",label:"Cloudflare API token",description:"Token with Account Settings Read, Zone Read, and Logs Edit permissions.",placeholder:"Enter your Cloudflare API token"},{id:"accountId",kind:"text",label:"Cloudflare account ID",description:"The 32-character hex ID from your Cloudflare dashboard URL or account overview.",placeholder:"e.g. a1b2c3d4e5f6...",pattern:"^[a-f0-9]{32}$",patternMessage:"Enter the 32-character Cloudflare account ID."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token",accountId:"$accountId"},resultAs:"validate"}],metadata:{connectionMode:"native",cloudflareApiToken:"$token",accountId:"$accountId",accountName:"$validate.accountName"},button:se}},rl={content:{kind:"list",listAction:"listLogpushDatasets",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"datasetName",header:"Dataset",cell:"badge"},{field:"scopeDetail",header:"Scope"}],searchPlaceholder:"Search datasets and zones...",searchFields:["datasetName","scopeDetail"],dedupeByConfigField:["scope","zoneId","dataset"],dedupeMissingFieldAsEmpty:!0,emptyState:{noMatches:"No Logpush datasets match your search.",allConfigured:"All Logpush datasets already have streams configured."},toStreamItem:{displayName:"$item.displayName",config:{scope:"$item.scope",accountId:"$item.accountId",zoneId:"$item.zoneId",zoneName:"$item.zoneName",dataset:"$item.dataset",datasetName:"$item.datasetName"}}}},nl={steps:[{kind:"prose",text:"**Cloudflare Logpush is only available on the Enterprise plan.** Free, Pro, and Business accounts cannot create Logpush jobs."},{kind:"prose",text:"Create a Logpush job in your [Cloudflare dashboard](https://dash.cloudflare.com) under Analytics & Logs > Logpush, or via the Cloudflare API. Select **HTTP** as the destination type and paste the destination URL below."},{kind:"copyable",label:"Destination URL",value:"https://cloudflare-logpush.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs?api_key=${context.publicKey}"},{kind:"prose",text:"In the Logpush job's **Output options**, set **Timestamp format** to **RFC3339** so Sazabi can parse event times accurately."}]}});var tD,yf;var vf=g(()=>{mf();tD=["cloudflareApiToken"],yf={id:"cloudflare",name:"Cloudflare Logpush",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:tD,subtitle:"Stream your Cloudflare Logpush jobs to Sazabi for edge network observability.",features:["Zone Logpush","Account Logpush","Edge analytics"],setupSkill:C,dashboard:{iconKey:"cloudflare",intakeSourceId:"cloudflare-logpush",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{procedure:"cloudflare.validateToken"}},list:{listLogpushDatasets:{procedure:"cloudflare.listLogpushDatasets",itemsField:"items"}}}}}});var il;var ff=g(()=>{he();il={perStreamInstructions:!0,steps:[{kind:"prose",text:"In your Cloudflare dashboard, go to **Workers & Pages > Observability > Telemetry** and click **Add Destination**. Add one destination for logs and a second for traces. The fields in each tab below map 1:1 to Cloudflare's **Add New Destination** dialog."},{kind:"tab-set",tabs:[{id:"logs",label:"Logs",steps:[{kind:"copyable",label:"Destination Type",value:"Logs"},{kind:"copyable",label:"OTLP Logs Endpoint",value:"https://cloudflare.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs"},{kind:"copyable",label:"Destination Name",value:"sazabi-logs"},{kind:"copyable-pairs",label:"Custom Headers",description:"Click **Add Header** and paste these values.",pairs:[{name:"Authorization",value:je}]}]},{id:"traces",label:"Traces",steps:[{kind:"copyable",label:"Destination Type",value:"Traces"},{kind:"copyable",label:"OTLP Traces Endpoint",value:"https://cloudflare.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces"},{kind:"copyable",label:"Destination Name",value:"sazabi-traces"},{kind:"copyable-pairs",label:"Custom Headers",description:"Click **Add Header** and paste these values.",pairs:[{name:"Authorization",value:je}]}]}]},{kind:"prose",text:"In each Worker's `wrangler.jsonc` / `wrangler.toml`, opt into the destinations by name. Cloudflare ignores destinations a Worker has not explicitly listed."}]}});var If;var kf=g(()=>{ff();If={id:"cloudflare_workers",name:"Cloudflare Workers",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleEligible:!0,subtitle:"Stream Cloudflare Workers Observability logs and traces to Sazabi via OTLP.",features:["Workers Observability OTLP logs","Workers Observability OTLP traces"],setupSkill:C,dashboard:{iconKey:"cloudflare",intakeSourceId:"cloudflare",streamSelectorLayout:"sidepanel"},streamCardinality:"multi"}});var al,cl;var wf=g(()=>{he();al={kind:"linear",prefetch:{action:"prefetch",input:{projectId:"${context.projectId}",templateUrl:"${context.cloudformationTemplateUrl}"},resultAs:"cloudwatch"},steps:[{kind:"prose",text:"Set up an IAM role in your AWS account to allow Sazabi to read your CloudWatch logs. Use one of the setup methods below, then paste the resulting Role ARN."},{kind:"tab-set",tabs:[{id:"cloudformation",label:"CloudFormation",steps:[{kind:"prose",text:"Click the button below to launch a CloudFormation stack in your AWS account. After the stack is created, find your role ARN under **Stacks → ${context.extras.cloudwatch.stackName} → Outputs** and copy the `RoleArn` value."},{kind:"external-link",label:"Launch CloudFormation stack",href:"${context.extras.cloudwatch.cloudFormationQuickCreateUrl}"}]},{id:"terraform",label:"Terraform",steps:[{kind:"prose",text:"Add this configuration to your Terraform files."},{kind:"code",language:"hcl",copyLabel:"Terraform",value:`data "aws_caller_identity" "current" {}

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
aws iam get-role --role-name SazabiLogIngestion --query 'Role.Arn' --output text`}]}]},{id:"arn",kind:"secret",label:"Role ARN",placeholder:"arn:aws:iam::123456789012:role/SazabiLogIngestion-Sazabi-...",pattern:"^arn:aws:iam::(\\d{12}):role\\/[\\w+=,.@\\-\\/]+$",patternMessage:"Invalid ARN format. Expected: arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME"}],submit:{actions:[{kind:"validate",action:"validate",input:{projectId:"${context.projectId}",roleArn:"$arn",externalId:"${context.extras.cloudwatch.externalId}"},resultAs:"validateRole"}],metadata:{roleArn:"$arn",awsAccountId:"$validateRole.awsAccountId",externalId:"${context.extras.cloudwatch.externalId}"},displayName:"AWS Account $validateRole.awsAccountId",button:se}},cl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}",pattern:""},columns:[{field:"name",header:"Log group",cell:"mono"},{field:"arn",header:"Region",width:"w-32",cell:"badge",extract:"regex:^arn:aws:logs:([^:]+):"}],searchPlaceholder:"Search log groups...",searchFields:["name"],dedupeByConfigField:"logGroupName",filterItemsBy:{field:"arn",operator:"regex-group-equals",pattern:"^arn:aws:logs:([^:]+):",equals:"${context.projectRegion}"},infoBanner:"Only showing log groups from ${context.projectRegion}. To stream logs from other regions, create a new project for that region in Sazabi.",emptyState:{noMatches:"No log groups found.",allConfigured:"All log groups already have streams configured.",noResults:"No log groups found in ${context.projectRegion} region."},toStreamItem:{displayName:"$item.name",config:{logGroupName:"$item.name",logGroupArn:"$item.arn"}}}}});var oD,$f;var _f=g(()=>{wf();oD=["externalId"],$f={id:"cloudwatch",name:"CloudWatch",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:oD,subtitle:"Stream your AWS CloudWatch logs directly to Sazabi for real-time analysis and alerting.",features:["Log forwarding","Real-time streaming","Multi-region support"],setupSkill:C,dashboard:{iconKey:"cloudwatch",intakeSourceId:"cloudwatch",streamSelectorLayout:"sidepanel",connectionMetadataSection:{title:"AWS account details",description:"The AWS account and IAM role used for log ingestion.",fields:[{key:"awsAccountId",label:"AWS account ID",description:"AWS account connected to this data source."},{key:"roleArn",label:"IAM role ARN",description:"IAM role Sazabi assumes for log ingestion."}]},actions:{submit:{validate:{kind:"source-action",actionId:"validate-role"}},list:{list:{kind:"source-action",actionId:"list-log-groups",itemsField:"logGroups"}},prefetch:{prefetch:{kind:"source-action",actionId:"get-setup-info"}}}}}});var ll,ul;var Of=g(()=>{he();ll={kind:"linear",steps:[{kind:"prose",text:"Enter a Convex team access token to connect your deployments. You can create one in your [Convex dashboard team settings](https://dashboard.convex.dev)."},{id:"token",kind:"secret",label:"Team access token",placeholder:"eyJ..."},{id:"team",kind:"select",label:"Team",placeholder:"Select a team",optionsAction:"options",optionsInput:{token:"$token"},optionValueField:"id",optionLabelField:"name",optionDescriptionField:"slug"}],submit:{metadata:{accessToken:"$token",teamId:"$team.id",teamName:"$team.name"},displayName:"$team.name",button:se}},ul={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"slug",header:"Slug",width:"w-48",cell:"muted"}],searchPlaceholder:"Search deployments...",searchFields:["name"],dedupeByConfigField:"deploymentId",emptyState:{noMatches:"No deployments found.",allConfigured:"All deployments already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{deploymentId:"$item.id",deploymentName:"$item.name"}}}}});var rD,Sf;var Tf=g(()=>{Of();rD=["accessToken"],Sf={id:"convex",name:"Convex",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:rD,subtitle:"Forward your Convex deployment logs directly to Sazabi for serverless observability.",features:["Function logs","Database mutations","Scheduled job monitoring"],setupSkill:C,dashboard:{iconKey:"convex",intakeSourceId:"convex",streamSelectorLayout:"sidepanel",actions:{list:{options:{procedure:"convex.listTeams",itemsField:"teams",sensitiveInputFields:["token"]},list:{procedure:"convex.listDeployments",itemsField:"deployments",sensitiveInputFields:["token"]}}}}}});var sl;var Pf=g(()=>{sl={steps:[{kind:"prose",text:"Configure your Datadog Agent to forward logs to Sazabi. Use the dual-ship option when the same Agent should keep sending logs to Datadog. Use the dedicated Agent option for sidecars or containers that send logs only to Sazabi."},{kind:"copyable",label:"Sazabi public key",value:"${context.publicKey}",copyLabel:"Sazabi public key"},{kind:"copyable",label:"Intake URL",value:"https://datadog.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"Datadog Agent intake URL"},{kind:"code-tabs",label:"Configuration options",description:"Choose one option. For dual-shipping, leave the top-level Datadog `api_key` or `DD_API_KEY` unchanged and add Sazabi as a logs endpoint. For a dedicated Sazabi sidecar, set `DD_API_KEY` to the Sazabi public key.",tabs:[{id:"datadog-yaml-dual-ship",label:"`datadog.yaml` dual-ship",language:"yaml",copyLabel:"datadog.yaml dual-ship configuration",value:`# Enable logs collection if it is not already enabled.
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
DD_LOGS_CONFIG_FORCE_USE_HTTP=true`}]},{kind:"prose",text:"Restart or redeploy the Agent after changing its configuration. `DD_LOGS_CONFIG_ADDITIONAL_ENDPOINTS` requires Datadog Agent v6.18+ or v7.18+. Avoid configuring both a Sazabi additional endpoint and a Sazabi-only logs URL in the same Agent, or you may send duplicate logs."}]}});var Af;var Df=g(()=>{Pf();Af={id:"datadog",name:"Datadog Agent",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK/agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Datadog Agent logs directly to Sazabi for AI-powered observability.",features:["Agent log forwarding","Minimal configuration","Keep existing setup"],setupSkill:C,dashboard:{iconKey:"datadog",intakeSourceId:"datadog"}}});var hl;var Lf=g(()=>{he();hl={steps:[{kind:"prose",text:"In the [Daytona dashboard](https://app.daytona.io), open **Settings** and find the **OpenTelemetry** card (visible to organization owners only). Set the OTLP endpoint and add an `Authorization` header using the values below."},{kind:"copyable",label:"OTLP Endpoint",value:"https://daytona.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Authorization header",value:je},{kind:"prose",text:"Notes"},{kind:"bulleted-list",items:["Save the OpenTelemetry card; sandboxes begin exporting telemetry automatically on their next start with no per-sandbox change required.","Filter in Sazabi using the resource attributes Daytona stamps on each record: `daytona_organization_id`, `daytona_region_id`, `daytona_snapshot`.","Sazabi currently stores logs and traces from this source. OTLP metrics are accepted at the intake endpoint but not yet persisted.","Daytona only retains sandbox telemetry for 3 days in its own dashboard, so Sazabi is the durable store."]}]}});var Nf;var Cf=g(()=>{Lf();Nf={id:"daytona",name:"Daytona",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual webhook setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream sandbox telemetry from your Daytona organization to Sazabi via org-level OpenTelemetry export.",features:["Org-level OTLP logs and traces","Sandbox resource attributes (organization, region, snapshot)","Durable retention beyond Daytona's 3-day window"],setupSkill:C,dashboard:{iconKey:"daytona",intakeSourceId:"daytona"}}});var dl,gl;var xf=g(()=>{he();dl={kind:"linear",steps:[{kind:"prose",text:"Enter your [DigitalOcean personal access token](https://cloud.digitalocean.com/account/api/tokens). Use **Full Access** scope, or Custom Scopes with `app:read`, `app:update`, `actions:read`, `regions:read`, and `sizes:read` so Sazabi can provision log forwarding on your apps."},{id:"token",kind:"secret",label:"Personal access token",placeholder:"dop_v1_..."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"}}],metadata:{apiToken:"$token"},button:se}},gl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"componentCount",header:"Components",width:"w-40",cell:"badge"}],searchPlaceholder:"Search apps...",searchFields:["name"],dedupeByConfigField:"appId",emptyState:{noMatches:"No apps found.",allConfigured:"All apps already have log streams configured.",noItems:"No App Platform apps found in this DigitalOcean account. Create an app in DigitalOcean first, then return here to forward its logs."},toStreamItem:{displayName:"$item.name",config:{appId:"$item.id",appName:"$item.name"}}}}});var nD,zf;var jf=g(()=>{xf();nD=["apiToken"],zf={id:"digital_ocean",name:"DigitalOcean",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:nD,subtitle:"Forward your DigitalOcean infrastructure logs directly to Sazabi for unified observability.",features:["Log forwarding","App Platform logs"],setupSkill:C,dashboard:{iconKey:"digital-ocean",intakeSourceId:"digital-ocean",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-text",header:"App",width:"w-32",configField:"appName",fallbackLabel:"Unknown app"}],actions:{submit:{validate:{kind:"source-action",actionId:"validate-token",sensitiveInputFields:["token"]}},list:{list:{kind:"source-action",actionId:"list-apps",itemsField:"apps"}}}}}});var bl;var Ef=g(()=>{bl={steps:[{kind:"prose",text:"Set these values as environment variables in your application."},{kind:"copyable",label:"`SAZABI_INTAKE_URL`",value:"https://e2b.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs",copyLabel:"Intake URL"},{kind:"copyable",label:"`SAZABI_PUBLIC_KEY`",value:"${context.publicKey}",copyLabel:"Public key"},{kind:"code-tabs",label:"SDK integration",tabs:[{id:"typescript",label:"TypeScript",language:"typescript",copyLabel:"TypeScript code",value:`import { Sandbox } from '@e2b/code-interpreter'
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
        logger_provider.shutdown()`}]}]}});var Uf;var Rf=g(()=>{Ef();Uf={id:"e2b",name:"E2B",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your E2B sandbox logs directly to Sazabi for code execution observability.",features:["Sandbox stdout/stderr capture"],setupSkill:C,dashboard:{iconKey:"e2b",intakeSourceId:"e2b"}}});var pl;var Ff=g(()=>{pl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Forward logs from your Elastic Cloud deployment to Sazabi over OTLP/HTTP. Pick the forwarder that matches your stack: Elastic Agent (8.13+, embedded OTel Collector) or Logstash."},{kind:"tab-set",tabs:[{id:"elastic-agent",label:"Elastic Agent",steps:[{kind:"prose",text:"Elastic Agent 8.13+ ships an embedded OpenTelemetry Collector (EDOT). Configure Sazabi as a standard `otlphttp` exporter — Fleet's **Outputs** UI does not expose an OTLP type, so point Elastic Agent at Sazabi through the embedded OTel Collector, not via a Fleet output."},{kind:"code",label:"sazabi-otel.yml",language:"yaml",copyLabel:"OTel Collector config",value:`receivers:
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
}`},{kind:"prose",text:'Replace `<your-deployment>` and `<region>` with your Elastic Cloud deployment\'s Elasticsearch endpoint (for example `https://acme.es.us-central1.gcp.cloud.es.io:443`). The pipeline polls the index every minute via the `schedule` setting, builds an OTLP/HTTP `resourceLogs` envelope in a `ruby` filter, and POSTs the raw JSON via the `http` output (using `format => "message"` so Logstash sends the exact body the filter builds). The `ruby` filter is included with Logstash by default.'}]}]}]}});var Kf;var Bf=g(()=>{Ff();Kf={id:"elastic_cloud",name:"Elastic Cloud",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs from your Elastic Cloud deployment to Sazabi using Elastic Agent or Logstash.",features:["Elastic Agent OTel Collector output","Logstash pipeline forwarding","No Sazabi infrastructure required"],setupSkill:C,dashboard:{iconKey:"elastic-cloud",intakeSourceId:"elastic-cloud"}}});var ml;var Gf=g(()=>{ml={perStreamInstructions:!0,steps:[{kind:"prose",text:"Configure the Fluent Bit `opentelemetry` output plugin to forward logs to Sazabi. Use the classic config format or the Helm values snippet if you are deploying Fluent Bit via the official Helm chart."},{kind:"code-tabs",label:"Fluent Bit output configuration",tabs:[{id:"classic",label:"Classic config",language:"bash",copyLabel:"Classic config",value:`[OUTPUT]
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
        tls.verify        on`}]},{kind:"prose",text:"Requires Fluent Bit v2.0 or later. The `opentelemetry` output plugin is included in the default distribution — no additional installation needed."}]}});var Hf;var Mf=g(()=>{Gf();Hf={id:"fluent_bit",name:"Fluent Bit",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs from your Kubernetes cluster or any infrastructure to Sazabi using the Fluent Bit agent.",features:["Kubernetes DaemonSet","Container log collection","Multi-pipeline routing","Low resource footprint"],setupSkill:C,dashboard:{iconKey:"fluent-bit",intakeSourceId:"fluent-bit"}}});var yl,vl;var Jf=g(()=>{he();yl={kind:"linear",steps:[{kind:"prose",text:"Create a read-only token for your Fly.io organization. From the CLI: `flyctl tokens create readonly -o <org-slug>`. Or open the org's Tokens tab in the [Fly.io dashboard](https://fly.io/dashboard) and create a read-only token."},{id:"token",kind:"secret",label:"API token",placeholder:"FlyV1 ..."},{id:"orgSlug",kind:"secret",label:"Organization slug",placeholder:"personal"}],submit:{actions:[{kind:"validate",action:"validate",input:{dataSourceType:"fly_io",metadata:{apiToken:"$token",organizationSlug:"$orgSlug"}}}],metadata:{apiToken:"$token",organizationSlug:"$orgSlug"},button:se}},vl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"}],searchPlaceholder:"Search apps...",searchFields:["name"],dedupeByConfigField:"appName",emptyState:{noMatches:"No apps found.",allConfigured:"All apps already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{appName:"$item.name"}}}}});var iD,qf;var Vf=g(()=>{Jf();iD=["apiToken"],qf={id:"fly_io",name:"Fly.io",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:iD,subtitle:"Forward your Fly.io application logs directly to Sazabi for global monitoring.",features:["Log shipping","Multi-region logs","Machine monitoring"],setupSkill:C,dashboard:{iconKey:"fly-io",intakeSourceId:"fly-io",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{procedure:"dataSources.validateConnection"}},list:{list:{kind:"source-action",actionId:"list-apps",itemsField:"apps"}}}}}});var fl,Il,kl;var Wf=g(()=>{he();fl={kind:"tabs",tabs:[{id:"service-account",label:"Service account",content:{kind:"linear",steps:[{kind:"prose",text:"Provide a GCP service account key with permissions to enable APIs and create log sinks, Pub/Sub topics, and subscriptions. Sazabi enables the required APIs and provisions the log pipeline in your GCP project automatically. The service account needs `roles/serviceusage.serviceUsageAdmin`, `roles/logging.configWriter`, `roles/pubsub.admin`, and `roles/browser` on the target GCP project(s)."},{kind:"external-link",label:"Open service accounts in GCP Console",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},{id:"key",kind:"secret",label:"Service account key (JSON)",placeholder:'{"type": "service_account", "project_id": "...", ...}'}],submit:{actions:[{kind:"validate",action:"validate",input:{serviceAccountKey:"$key"},resultAs:"validateKey"},{kind:"preflight",action:"preflight",input:{serviceAccountKey:"$key"}}],metadata:{serviceAccountKey:"$key",connectionMode:"native"},displayName:"GCP $validateKey.projectId",button:se}}},{id:"manual",label:"Manual setup",content:{kind:"manual"}}]},Il={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"displayName",header:"Name"},{field:"projectId",header:"Project ID",width:"w-48",cell:"muted"}],searchPlaceholder:"Search projects...",searchFields:["displayName","projectId"],dedupeByConfigField:"gcpProjectId",emptyState:{noMatches:"No projects found.",allConfigured:"All accessible projects already have log streams configured."},toStreamItem:{displayName:"$item.displayName",config:{gcpProjectId:"$item.projectId",gcpProjectName:"$item.displayName"}}}},kl={steps:[{kind:"prose",text:"To forward Google Cloud Logging data to Sazabi, create a log sink that routes logs to a Pub/Sub topic, then deploy an OpenTelemetry Collector with a `googlecloudpubsub` receiver that subscribes to that topic and exports to Sazabi."},{kind:"prose",text:"Required GCP permissions: the person performing these steps needs a role that grants `logging.sinks.create` (e.g. `roles/logging.configWriter`) and `pubsub.topics.setIamPolicy` (e.g. `roles/pubsub.admin`)."},{kind:"ordered-steps",items:["Create a Pub/Sub topic and subscription in your GCP project (e.g. `sazabi-logs` and `sazabi-logs-sub`).","Create a Cloud Logging sink that routes logs to the Pub/Sub topic. Grant the sink's service account the `roles/pubsub.publisher` role on the topic.","Deploy an OpenTelemetry Collector (e.g. on a GCE instance, GKE pod, or Cloud Run service) using the `opentelemetry-collector-contrib` distribution.","Configure the collector with a `googlecloudpubsub` receiver pointing at your subscription and an `otlp_http` exporter using the values below. The receiver requires the `googlecloudlogentry_encoding` encoding extension.","Ensure the collector's service account has the `roles/pubsub.subscriber` IAM role on the subscription."]},{kind:"copyable",label:"`OTLP endpoint`",value:"https://otel.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`Authorization header value`",value:je,copyLabel:"Authorization header"},{kind:"code",label:"Example collector configuration",language:"yaml",copyLabel:"Collector configuration",value:`extensions:
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
      exporters: [otlp_http]`}]}});var aD,Yf;var Xf=g(()=>{Wf();aD=["serviceAccountKey"],Yf={id:"gcp",name:"GCP",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:aD,subtitle:"Connect your GCP logs to Sazabi for AI-powered observability. Automatically provision log sinks with a service account, or set up manually.",features:["Log forwarding","Real-time streaming","Log sink support"],setupSkill:C,dashboard:{iconKey:"gcp",intakeSourceId:"gcp",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{kind:"source-action",actionId:"validate-service-account-key"},preflight:{kind:"source-action",actionId:"run-preflight-checks",normalize:"preflight"}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var wl;var Zf=g(()=>{wl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Add the Sazabi OTLP exporter to your Alloy config and wire it into a complete pipeline. The snippets below include an OTLP receiver and a batch processor — the minimum needed for telemetry to actually reach Sazabi. Use the Helm values tab if you deploy Alloy via the Grafana Helm chart."},{kind:"code-tabs",label:"Alloy configuration",tabs:[{id:"river",label:"config.alloy",language:"hcl",copyLabel:"Alloy config",value:`otelcol.receiver.otlp "default" {
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
      }`}]},{kind:"prose",text:"Replace `otelcol.receiver.otlp` with the OpenTelemetry receiver(s) that match your sources (for example `otelcol.receiver.filelog` for log files or `otelcol.receiver.jaeger` for Jaeger traces). Each upstream `otelcol.*` component must list `otelcol.processor.batch.default.input` in its `output` block to ship data to Sazabi."}]}});var Qf;var eI=g(()=>{Zf();Qf={id:"grafana_alloy",name:"Grafana Alloy",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using Grafana Alloy.",features:["Kubernetes DaemonSet","OpenTelemetry native","Flexible River pipeline","Logs and traces"],setupSkill:C,dashboard:{iconKey:"grafana-alloy",intakeSourceId:"grafana-alloy"}}});var $l;var tI=g(()=>{he();$l={steps:[{kind:"ordered-steps",items:Un("Inngest function")},Rn,...bo("inngest")]}});var oI;var rI=g(()=>{tI();oI={id:"inngest",name:"Inngest",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Inngest function logs directly to Sazabi for workflow observability.",features:["Function logs","Event tracing","Step monitoring"],setupSkill:C,dashboard:{iconKey:"inngest",intakeSourceId:"inngest"}}});var _l;var nI=g(()=>{he();_l={steps:[{kind:"prose",text:"LangChain does not emit OpenTelemetry traces on its own. Set the OTLP environment variables (shown in the last step) in your deployment so they are present when the process starts, then install an instrumentation package (OpenInference shown below) and initialise it once at startup before importing LangChain."},{kind:"code-tabs",label:"Install instrumentation",tabs:[{id:"python",label:"Python",language:"bash",copyLabel:"Python install command",value:"pip install openinference-instrumentation-langchain \\\n  opentelemetry-sdk \\\n  opentelemetry-exporter-otlp-proto-http"},{id:"typescript",label:"TypeScript",language:"bash",copyLabel:"TypeScript install command",value:"npm install @arizeai/openinference-instrumentation-langchain \\\n  @opentelemetry/sdk-trace-node \\\n  @opentelemetry/exporter-trace-otlp-proto \\\n  @langchain/core"}]},{kind:"code-tabs",label:"Initialise the tracer at startup",tabs:[{id:"python",label:"Python",language:"python",copyLabel:"Python init snippet",value:`from opentelemetry import trace
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
new LangChainInstrumentation().manuallyInstrument(CallbackManagerModule);`}]},{kind:"prose",text:"Set these environment variables before starting your application. The OpenTelemetry SDK reads them automatically."},...bo("langchain")]}});var iI;var aI=g(()=>{nI();iI={id:"langchain",name:"LangChain",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward LangChain traces to Sazabi for end-to-end LLM observability.",features:["Chain tracing","Tool & agent traces","LLM call traces"],setupSkill:C,dashboard:{iconKey:"langchain",intakeSourceId:"langchain"}}});var Ol;var cI=g(()=>{Ol={steps:[{kind:"prose",text:"Set these values as environment variables in your application."},{kind:"copyable",label:"`SAZABI_INTAKE_URL`",value:"https://mastra.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces",copyLabel:"Intake URL"},{kind:"copyable",label:"`SAZABI_API_KEY`",value:"${context.publicKey}",copyLabel:"API key"},{kind:"code",label:"Configuration",language:"typescript",copyLabel:"TypeScript code",value:`// src/mastra/index.ts
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
const response = await agent.generate("Hello, world!");`}]}});var lI;var uI=g(()=>{cI();lI={id:"mastra",name:"Mastra",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Mastra agent traces directly to Sazabi for AI workflow observability.",features:["Agent traces","Tool tracing","Workflow monitoring"],setupSkill:C,dashboard:{iconKey:"mastra",intakeSourceId:"mastra"}}});var Sl;var sI=g(()=>{Sl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Neon's OpenTelemetry integration forwards Postgres logs to Sazabi. The integration is available on Neon's **Scale** plan, and both the integration itself and Postgres logs export are currently in Beta. You'll need admin access on the Neon project to add it."},{kind:"prose",text:"Neon can export both metrics and Postgres logs through this integration; this Sazabi data source is logs-only. Leave metrics disabled in the Neon form."},{kind:"external-link",label:"Open Neon integrations",href:"https://console.neon.tech/app/projects",description:"Choose the Neon project you want to monitor, then open the project's **Integrations** page."},{kind:"ordered-steps",items:["In the Neon Console, open your project and go to **Integrations**. On the **OpenTelemetry** card, click **Add** to open the configuration sidebar.","In **Select data to export**, enable `Postgres logs` and leave `Metrics` disabled. Neon does not expose a traces export for this integration.","Choose the `HTTP` protocol and paste the Sazabi OTLP base endpoint below. Neon appends `/v1/logs` automatically for log export.","Configure authentication as `Bearer` and paste the generated Sazabi token value below. Neon adds the `Bearer` prefix to outgoing requests automatically.","Under **Resource attributes**, set `service.name` to a short, stable identifier for this Neon project (Neon's docs use `neon-postgres-test` as an example). This attribute is optional but recommended so the project's logs are easy to filter in Sazabi.","Save the integration. Logs typically start arriving within a few minutes; if the compute has Scale to Zero enabled and is currently suspended, run a query against the database to wake it and begin log delivery."]},{kind:"copyable",label:"OTLP endpoint URL",value:"https://neon.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"Neon OTLP endpoint URL",description:"Use the base URL in Neon. Neon will send logs to this URL with `/v1/logs` appended."},{kind:"copyable",label:"Connection protocol",value:"HTTP"},{kind:"copyable",label:"Data to export",value:"Postgres logs only"},{kind:"copyable",label:"Authentication method",value:"Bearer"},{kind:"copyable",label:"Bearer token value",value:"${context.publicKey}",copyLabel:"Neon bearer token value"},{kind:"copyable",label:"`service.name` resource attribute",value:"neon-postgres",copyLabel:"Neon service.name value",description:"Optional but recommended — paste under **Resource attributes** in Neon. Change the suffix (e.g. `neon-postgres-prod`, `neon-checkout-db`) when you have more than one Neon project so streams stay easy to filter in Sazabi."},{kind:"prose",text:"If logs do not arrive after a few minutes, check whether the Neon compute is suspended (Scale to Zero) — logs only flow while the compute is active. Run a query from the Neon SQL Editor or your application to wake it, then check the Neon integration's status panel for OTLP export errors."}]}});var cD,hI;var dI=g(()=>{sI();cD=[],hI={id:"neon",name:"Neon",capabilities:["manual"],auth:["manualKey"],delivery:["push"],sensitiveFields:cD,lifecycleSkipReason:"Manual OTLP setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward Neon Postgres logs to Sazabi for database observability without sending metrics or traces.",features:["Postgres logs","Connection events","Error and warning logs"],setupSkill:C,dashboard:{iconKey:"neon",intakeSourceId:"neon"}}});var Tl;var gI=g(()=>{he();Tl={steps:[{kind:"prose",text:"Configure a log drain in your [Netlify site settings](https://app.netlify.com) under Logs & Metrics > Log Drains. Select 'General HTTP endpoint' as the service and use the values below. Note: log drains require a Netlify Enterprise plan."},{kind:"copyable",label:"Full URL",value:"https://netlify.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Authorization header",value:je},{kind:"copyable",label:"Log drain format",value:"JSON"}]}});var bI;var pI=g(()=>{gI();bI={id:"netlify",name:"Netlify",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Netlify deployment logs directly to Sazabi for Jamstack observability.",features:["Build logs","Function logs","Edge handler logs"],setupSkill:C,dashboard:{iconKey:"netlify",intakeSourceId:"netlify"}}});var Pl;var mI=g(()=>{Pl={steps:[{kind:"prose",text:"In the OpenRouter dashboard, open **Settings > Observability**, toggle **Enable Broadcast** on, then click the edit icon next to **OpenTelemetry Collector**."},{kind:"external-link",label:"Settings > Observability",href:"https://openrouter.ai/settings/observability"},{kind:"prose",text:"Paste the values below into the destination form."},{kind:"copyable",label:"Endpoint",value:"https://openrouter.${context.projectRegion}.intake.${context.intakeDomain}/v1/traces",copyLabel:"Endpoint"},{kind:"copyable",label:"Headers",value:'{"Authorization": "Bearer ${context.publicKey}"}',copyLabel:"Headers"},{kind:"prose",text:"Click **Test Connection** to verify Sazabi accepts the trace. OpenRouter only saves the destination if the test passes; a green check confirms forwarding is enabled."}]}});var yI;var vI=g(()=>{mI();yI={id:"openrouter",name:"OpenRouter",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"OpenRouter Broadcast destination setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward OpenRouter trace spans to Sazabi from the OpenRouter dashboard.",features:["Trace spans per generation","Token & cost tracking","Model & provider attribution"],setupSkill:C,dashboard:{iconKey:"openrouter",intakeSourceId:"openrouter"}}});var Al;var fI=g(()=>{he();Al={perStreamInstructions:!0,steps:[{kind:"prose",text:"Configure your application to export OpenTelemetry logs and traces to Sazabi by setting the following environment variables. These work with any OpenTelemetry SDK (Node.js, Python, Go, Java, .NET, etc.). Metrics are accepted by the intake but are not yet stored."},{kind:"ordered-steps",items:["Add the OpenTelemetry SDK to your application. Most languages have official SDKs available (e.g., `@opentelemetry/api` for Node.js, `opentelemetry-api` for Python, etc.).","Initialize the OpenTelemetry SDK in your application and configure the OTLP exporters for the signals you want (logs and/or traces). The SDK will automatically read the environment variables below.","Set the following environment variables in your application environment. These configure the OTLP exporter to send logs and traces to Sazabi."]},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:"https://otlp.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:En,copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:"http/protobuf",copyLabel:"OTLP protocol"}]}});var II;var kI=g(()=>{fI();II={id:"otel",name:"OpenTelemetry",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual OTLP setup is not exercised by automated lifecycle tests yet.",subtitle:"Send OpenTelemetry logs and traces directly to Sazabi's OTLP-compatible intake for AI-powered observability.",features:["OTLP log export","OTLP trace export","Any OTEL SDK"],setupSkill:C,dashboard:{slug:"opentelemetry",iconKey:"opentelemetry",intakeSourceId:"otel"}}});var Dl;var wI=g(()=>{Dl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Add the `otlphttp/sazabi` exporter to your OpenTelemetry Collector configuration and include it in your service pipelines. Use the Helm values snippet if you are deploying the collector via the `opentelemetry-collector` Helm chart."},{kind:"code-tabs",label:"Collector configuration",tabs:[{id:"yaml",label:"otelcol.yaml",language:"yaml",copyLabel:"Collector config",value:`exporters:
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
        exporters: [otlphttp/sazabi]`}]},{kind:"prose",text:"Adjust the `receivers` list to match the sources you have configured. The `filelog` receiver collects container logs on Kubernetes; the `otlp` receiver accepts spans from instrumented services."}]}});var $I;var _I=g(()=>{wI();$I={id:"otel_collector",name:"OpenTelemetry Collector",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using the OpenTelemetry Collector.",features:["Kubernetes DaemonSet","Vendor-neutral standard","Extensible via contrib","Logs and traces"],setupSkill:C,dashboard:{iconKey:"otel-collector",intakeSourceId:"otel-collector"}}});var Ll,lD,Nl,Cl;var OI=g(()=>{he();Ll={kind:"linear",steps:[{kind:"prose",text:"Create a personal API key in your PostHog account under **Settings → Personal API keys** ([US](https://us.posthog.com/settings/user-api-keys) · [EU](https://eu.posthog.com/settings/user-api-keys)). Grant it these scopes:\n\n- `project:read` — list your projects\n- `organization:read` — show your organization\n- `hog_function:write` — install the webhook destination"},{id:"token",kind:"secret",label:"Personal API key",placeholder:"phx_..."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"},resultAs:"validate"},{kind:"preflight",action:"preflight",input:{token:"$token",region:"$validate.posthogApiRegion",organizationId:"$validate.posthogOrganizationId"}}],metadata:{posthogPersonalApiKey:"$token",posthogApiRegion:"$validate.posthogApiRegion",posthogOrganizationId:"$validate.posthogOrganizationId",posthogOrganizationName:"$validate.posthogOrganizationName",connectionMode:"native"},button:se}},lD=[{field:"name",header:"Project"},{field:"organizationName",header:"Organization",width:"w-48",transform:"fallback:—"}],Nl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:lD,searchPlaceholder:"Search projects...",searchFields:["name","organizationName"],dedupeByConfigField:"posthogProjectId",emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have PostHog destinations configured."},toStreamItem:{displayName:"$item.name",config:{posthogProjectId:"$item.id",posthogProjectName:"$item.name"}}}},Cl={steps:[{kind:"prose",text:"Configure an [HTTP Webhook destination](https://${context.posthogRegion}.posthog.com/pipeline/new/hog-template-webhook) in PostHog under Data Pipeline > Destinations. Use the values below and set your webhook body template to the default event and person payload."},{kind:"copyable",label:"Destination URL",value:"https://posthog.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Method",value:"POST"},{kind:"copyable",label:"Header name",value:"Authorization"},{kind:"copyable",label:"Header value",value:je},{kind:"code",label:"Body template",language:"json",copyLabel:"Body template",value:`{
  "event": "{event}",
  "person": "{person}"
}`}]}});var uD,SI;var TI=g(()=>{OI();uD=["posthogPersonalApiKey"],SI={id:"posthog",name:"PostHog",capabilities:["manual","native"],auth:["manualKey","apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:uD,subtitle:"Forward your PostHog events directly to Sazabi for real-time product and error observability.",features:["CDP webhook forwarding","Event property mapping","Real-time streaming"],setupSkill:C,dashboard:{iconKey:"posthog",intakeSourceId:"posthog",streamSelectorLayout:"sidepanel",actions:{submit:{validate:{kind:"source-action",actionId:"validate-personal-api-key",sensitiveInputFields:["token"]},preflight:{kind:"source-action",actionId:"run-preflight-checks",normalize:"preflight",sensitiveInputFields:["token"]}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var xl;var PI=g(()=>{he();xl={steps:[{kind:"prose",text:"Railway does not provide a managed log drain to an external OTLP endpoint. Configure each Railway service you want to monitor so the application emits OpenTelemetry data directly to Sazabi. If you cannot add the SDK, run a log forwarder such as Vector or Fluent Bit as its own Railway service and point it at the same OTLP endpoint."},{kind:"external-link",label:"Open Railway dashboard",href:"https://railway.com/dashboard"},{kind:"ordered-steps",items:["Add OpenTelemetry to your application. Install the SDK, an OTLP HTTP/protobuf exporter, and any auto-instrumentation package your language needs. For Node.js, `@opentelemetry/api` alone is not enough; use the SDK/exporter packages too.","Initialize OpenTelemetry before your application handles requests. You can do this in code, with a preload flag such as `NODE_OPTIONS=--require ...`, or with a language-specific wrapper command.","In Railway, open the service, go to **Variables**, and use **New Variable** or **Raw Editor** to add the variables below. Railway stages variable changes, so review and deploy the change set when prompted.","Redeploy or restart the Railway service, then generate traffic or a test log line so Sazabi can receive fresh telemetry.","Verify data in Sazabi. If nothing appears, check the Railway deployment logs for OpenTelemetry exporter errors and confirm your app is emitting logs through the OpenTelemetry logger, not only stdout."]},{kind:"code",label:"Railway Raw Editor variables",description:"Paste this into the Railway service's Variables Raw Editor. Railway resolves the `${{...}}` references from its own service and deployment metadata.",language:"bash",value:'OTEL_EXPORTER_OTLP_ENDPOINT=https://railway.${context.projectRegion}.intake.${context.intakeDomain}\nOTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer ${context.publicKey}"\nOTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf\nOTEL_SERVICE_NAME=${{RAILWAY_SERVICE_NAME}}\nOTEL_RESOURCE_ATTRIBUTES=deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}',copyLabel:"Railway environment variables"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_ENDPOINT`",value:"https://railway.${context.projectRegion}.intake.${context.intakeDomain}",copyLabel:"OTLP endpoint"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_HEADERS`",value:En,copyLabel:"OTLP headers"},{kind:"copyable",label:"`OTEL_EXPORTER_OTLP_PROTOCOL`",value:"http/protobuf",copyLabel:"OTLP protocol"},{kind:"copyable",label:"`OTEL_SERVICE_NAME`",value:"${{RAILWAY_SERVICE_NAME}}",copyLabel:"OTEL service name"},{kind:"copyable",label:"`OTEL_RESOURCE_ATTRIBUTES`",value:"deployment.environment=${{RAILWAY_ENVIRONMENT_NAME}},service.version=${{RAILWAY_GIT_COMMIT_SHA}},railway.project.name=${{RAILWAY_PROJECT_NAME}},railway.deployment.id=${{RAILWAY_DEPLOYMENT_ID}}",copyLabel:"OTEL resource attributes"},{kind:"code-tabs",label:"Example bootstrap patterns",description:"Use the pattern for your runtime, or follow your language's OpenTelemetry documentation if your app already has instrumentation.",tabs:[{id:"node",label:"Node.js",language:"bash",value:`bun add @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto @opentelemetry/exporter-logs-otlp-proto

# Railway variable or start-command prefix:
NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"`,copyLabel:"Node.js OpenTelemetry bootstrap"},{id:"python",label:"Python",language:"bash",value:`pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install

# Railway start command example:
opentelemetry-instrument python app.py`,copyLabel:"Python OpenTelemetry bootstrap"}]}]}});var AI;var DI=g(()=>{PI();AI={id:"railway",name:"Railway",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Railway deployment logs directly to Sazabi for real-time monitoring.",features:["Log drains","Deployment logs","Service monitoring"],setupSkill:C,dashboard:{iconKey:"railway",intakeSourceId:"railway"}}});var zl,jl;var LI=g(()=>{he();zl={kind:"linear",steps:[{kind:"prose",text:"Enter your Render API key to connect your workspace. You can create an API key in your [Render dashboard](https://dashboard.render.com/settings#api-keys)."},{id:"token",kind:"secret",label:"API key",placeholder:"rnd_..."},{id:"workspace",kind:"select",label:"Workspace",placeholder:"Select a workspace",optionsAction:"options",optionsInput:{token:"$token"},optionValueField:"id",optionLabelField:"name",optionDescriptionField:"type"}],submit:{metadata:{apiToken:"$token",ownerId:"$workspace.id",ownerName:"$workspace.name"},displayName:"$workspace.name",button:se}},jl={content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:[{field:"name",header:"Name"},{field:"type",header:"Type",width:"w-40",cell:"badge"}],searchPlaceholder:"Search services...",searchFields:["name"],dedupeByConfigField:"serviceId",emptyState:{noMatches:"No services found.",allConfigured:"All services already have log streams configured."},toStreamItem:{displayName:"$item.name",config:{serviceId:"$item.id",serviceName:"$item.name",serviceType:"$item.type"}}}}});var sD,NI;var CI=g(()=>{LI();sD=["apiToken"],NI={id:"render",name:"Render",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:sD,subtitle:"Forward your Render service logs directly to Sazabi for real-time monitoring.",features:["Log forwarding","Service monitoring","Environment filtering"],setupSkill:C,dashboard:{iconKey:"render",intakeSourceId:"render-syslog",streamSelectorLayout:"sidepanel",connectionMetadataSection:{title:"Render details",description:"The Render workspace linked to this connection.",fields:[{key:"ownerId",label:"Workspace ID",description:"Render workspace linked to this connection."}]},actions:{list:{options:{procedure:"render.listWorkspaces",itemsField:"workspaces",sensitiveInputFields:["token"]},list:{procedure:"render.listServices",itemsField:"services"}}}}}});var El;var xI=g(()=>{El={steps:[{kind:"prose",text:"Configure your Sentry SDK to forward errors to Sazabi using the DSN below. This works with all official Sentry SDKs."},{kind:"copyable",label:"Sentry DSN",value:"https://${context.publicKey}@sentry-dsn.${context.projectRegion}.intake.${context.intakeDomain}/0",copyLabel:"DSN"},{kind:"code",label:"JavaScript / Node.js",language:"javascript",copyLabel:"JavaScript",value:`import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://\${context.publicKey}@sentry-dsn.\${context.projectRegion}.intake.\${context.intakeDomain}/0",
});`},{kind:"code",label:"Python",language:"python",copyLabel:"Python",value:`import sentry_sdk

sentry_sdk.init(
    dsn="https://\${context.publicKey}@sentry-dsn.\${context.projectRegion}.intake.\${context.intakeDomain}/0",
)`},{kind:"prose",text:"This DSN works with any official Sentry SDK including Go, Ruby, Java, .NET, and more. Simply replace your existing Sentry DSN with the one above."}]}});var zI;var jI=g(()=>{xI();zI={id:"sentry",name:"Sentry SDK",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual SDK setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward your Sentry SDK errors and events directly to Sazabi for AI-powered error tracking.",features:["Error forwarding","Exception tracking","SDK integration"],setupSkill:C,dashboard:{iconKey:"sentry",intakeSourceId:"sentry-dsn"}}});var Ul;var EI=g(()=>{he();Ul={kind:"linear",steps:[{kind:"prose",text:"You must be an **Owner** or **Manager** in the Sentry organization — creating an Internal Integration requires the `org:write` scope, which is only granted to Owners and Managers. The Admin role does not include `org:write`, so a personal user auth token minted by an Admin cannot create the Internal Integration and Sentry will return 403. Create a Sentry user auth token with the following permissions: **Organization: Read & Write** (the `org:write` scope), **Project: Read**, and **Issue & Event: Read**. The `org:write` scope is required for Sazabi to create the Internal Integration; the integration itself only receives read-level webhook events. Confirm the Permissions Preview at the bottom of the Sentry form shows `event:read, org:write, project:read` before submitting."},{kind:"external-link",label:"Open Sentry auth token settings",href:"https://sentry.io/settings/account/api/auth-tokens/new-token/"},{id:"token",kind:"secret",label:"Sentry auth token",description:"Token with org:write, project:read, and event:read scopes.",placeholder:"Enter your Sentry auth token"},{id:"organizationSlug",kind:"text",label:"Sentry organization slug",description:"The slug from your Sentry URL: sentry.io/organizations/<slug>/",placeholder:"e.g. my-org",pattern:"^[a-z0-9][a-z0-9-]*[a-z0-9]$",patternMessage:"Enter a valid Sentry organization slug (lowercase, hyphens allowed)."}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token",organizationSlug:"$organizationSlug"},resultAs:"validate"}],metadata:{connectionMode:"native",sentryAuthToken:"$token",organizationSlug:"$organizationSlug"},button:se}}});var hD,UI;var RI=g(()=>{EI();hD=["sentryAuthToken"],UI={id:"sentry_platform",name:"Sentry",capabilities:["native"],auth:["apiToken"],delivery:["push"],streamCardinality:"single",sensitiveFields:hD,subtitle:"Connect your Sentry organization to stream errors, issues, and alerts to Sazabi in real-time.",features:["Error streaming","Issue tracking","Alert forwarding","Metric alerts"],setupSkill:C,dashboard:{iconKey:"sentry",intakeSourceId:"sentry-platform",actions:{submit:{validate:{kind:"source-action",actionId:"validate",sensitiveInputFields:["token"]}}}}}});var Rl;var FI=g(()=>{he();Rl={steps:[{kind:"prose",text:"In the [Supabase dashboard](https://supabase.com/dashboard), open Project Settings > Log Drains and click **Add destination**."},{kind:"prose",text:"Fill in the fields below in order — they map 1:1 to the Supabase form. Under **Custom Headers**, Supabase pre-fills a `Content-Type` row when OTLP is selected; **leave it in place** and click **Add a new header** to add the `Authorization` row alongside it."},{kind:"prose",text:"Note: Log Drains require a Supabase Pro, Team, or Enterprise plan."},{kind:"copyable",label:"Name",value:"Sazabi"},{kind:"copyable",label:"Description",value:"Forward Supabase logs to Sazabi for observability and AI analysis."},{kind:"copyable",label:"Type",value:"OpenTelemetry Protocol (OTLP)"},{kind:"copyable",label:"OTLP Endpoint",value:"https://supabase.${context.projectRegion}.intake.${context.intakeDomain}"},{kind:"copyable",label:"Protocol",value:"HTTP/Protobuf"},{kind:"copyable",label:"Gzip Compression",value:"Enabled"},{kind:"copyable-pairs",label:"Custom Headers",pairs:[{name:"Content-Type",value:"application/x-protobuf",description:"Pre-filled by Supabase — keep as-is."},{name:"Authorization",value:je,description:"Click **Add a new header** and paste these values."}]}]}});var KI;var BI=g(()=>{FI();KI={id:"supabase",name:"Supabase",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual drain setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Supabase project logs directly to Sazabi for unified observability.",features:["Database logs","Auth events","Edge Function logs"],setupSkill:C,dashboard:{iconKey:"supabase",intakeSourceId:"supabase"}}});var Fl;var GI=g(()=>{he();Fl={steps:[{kind:"ordered-steps",items:Un("Temporal worker")},Rn,...bo("temporal")]}});var HI;var MI=g(()=>{GI();HI={id:"temporal",name:"Temporal",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual worker setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward OpenTelemetry logs and traces from your Temporal workers to Sazabi for durable execution observability.",features:["Worker logs","Workflow and activity traces"],setupSkill:C,dashboard:{iconKey:"temporal",intakeSourceId:"temporal"}}});var Kl;var JI=g(()=>{Kl={perStreamInstructions:!0,steps:[{kind:"ordered-steps",items:["Install `@opentelemetry/exporter-logs-otlp-http` in the package that owns your `trigger.config.ts` file.","Add `SAZABI_API_KEY` to the Trigger.dev deployment environment using the public key shown below.","Configure `telemetry.logExporters` directly in `trigger.config.ts`. Trigger.dev reserves `OTEL_*` environment variables for its own internal telemetry, so do not use them for this integration.","Redeploy your Trigger.dev project so task logs are exported to Sazabi."]},{kind:"copyable",label:"`SAZABI_API_KEY`",value:"${context.publicKey}",copyLabel:"Sazabi API key",description:"Store this as a secret in the Trigger.dev environment that runs your tasks."},{kind:"copyable",label:"Sazabi log intake URL",value:"https://trigger-dev.${context.projectRegion}.intake.${context.intakeDomain}/v1/logs",copyLabel:"Sazabi log intake URL"},{kind:"code",label:"`trigger.config.ts`",language:"typescript",value:`import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
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
`,copyLabel:"Trigger.dev config snippet"},{kind:"bulleted-list",items:["This v1 source ingests logs only. Trace exporters, metrics exporters, alert webhooks, and management API polling are intentionally out of scope.","Use `telemetry.logExporters`; do not configure this source through `telemetry.exporters`, Trigger.dev alert webhooks, or management API polling."]}]}});var qI;var VI=g(()=>{JI();qI={id:"trigger_dev",name:"Trigger.dev",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual trigger.config.ts setup is not exercised by automated lifecycle tests yet.",subtitle:"Stream your Trigger.dev job logs directly to Sazabi for background job monitoring.",features:["Task logs","Run failure logs","Background job monitoring"],setupSkill:C,dashboard:{iconKey:"trigger-dev",intakeSourceId:"trigger-dev"}}});var Bl;var WI=g(()=>{Bl={perStreamInstructions:!0,steps:[{kind:"prose",text:"Forward Vector logs to Sazabi over OTLP/HTTP. Vector 0.51.0 or later is required for the `otlp` encoding codec. The configuration pipes events through a `remap` transform that builds the OTLP `resourceLogs` envelope — the sink's `otlp` codec does not construct this envelope on its own, so wiring raw sources directly into it drops 100% of events."},{kind:"code-tabs",label:"Vector logs sink",tabs:[{id:"yaml",label:"vector.yaml",language:"yaml",copyLabel:"YAML config",value:`transforms:
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
          codec: otlp`}]},{kind:"prose",text:'Replace `inputs: ["*"]` on the `remap` transform with your specific source or transform IDs in production — `["*"]` also matches `internal_metrics` and other unrelated components. Sazabi indexes logs and traces from Vector; metrics are accepted at the intake but silently dropped.'},{kind:"prose",text:'**Forwarding traces (optional):** add a second `opentelemetry` sink with `uri` ending in `/v1/traces` and explicit `inputs` referencing an already-OTLP-shaped source — typically an `opentelemetry` Vector source with `use_otlp_decoding.traces: true` (use `inputs: ["otlp_in.traces"]`). No remap is needed for traces. Do not wire `["*"]` into a traces sink.'}]}});var YI;var XI=g(()=>{WI();YI={id:"vector",name:"Vector",capabilities:["manual"],auth:["manualKey"],delivery:["push"],lifecycleSkipReason:"Manual agent setup is not exercised by automated lifecycle tests yet.",subtitle:"Forward logs and traces from your infrastructure to Sazabi using the Vector observability pipeline.",features:["Kubernetes DaemonSet","High-throughput pipeline","Built-in transforms","Multiple source types"],setupSkill:C,dashboard:{iconKey:"vector",intakeSourceId:"vector"}}});var Hl,Gl,Ml;var ZI=g(()=>{he();Hl={kind:"linear",steps:[{kind:"prose",text:"Create a full-access API token in your [Vercel account settings](https://vercel.com/account/tokens). Vercel tokens inherit your account permissions automatically. For team accounts, make sure you create the token while scoped to the correct team."},{id:"token",kind:"secret",label:"API token",placeholder:"Enter your Vercel API token"}],submit:{actions:[{kind:"validate",action:"validate",input:{token:"$token"},resultAs:"validate"}],metadata:{vercelApiToken:"$token",vercelTeamId:"$validate.teamId",vercelTeamName:"$validate.teamName"},button:se}},Gl=[{field:"name",header:"Project"},{field:"framework",header:"Framework",width:"w-32",cell:"badge",transform:"fallback:Unspecified"}],Ml={content:{kind:"tabs",tabs:[{id:"logs",label:"Logs",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Gl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{ingestTraces:!1},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have logs drains configured."},toStreamItem:{displayName:"$item.name (Logs)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"logs",ingestTraces:!1}}}},{id:"traces",label:"Traces",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Gl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{ingestTraces:!0},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have traces drains configured."},toStreamItem:{displayName:"$item.name (Traces)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"traces",ingestTraces:!0}}}},{id:"analytics",label:"Analytics",content:{kind:"list",listAction:"list",listInput:{connectionId:"${context.connectionId}"},columns:Gl,searchPlaceholder:"Search projects...",searchFields:["name","framework"],dedupeByConfigField:"vercelProjectId",dedupeExtraMatch:{drainType:"analytics"},emptyState:{noMatches:"No projects found.",allConfigured:"All projects already have analytics drains configured."},toStreamItem:{displayName:"$item.name (Analytics)",config:{vercelProjectId:"$item.id",vercelProjectName:"$item.name",drainType:"analytics"}}}}]}}});var dD,QI;var ek=g(()=>{ZI();dD=["vercelApiToken"],QI={id:"vercel",name:"Vercel",capabilities:["native"],auth:["apiToken"],delivery:["push"],lifecycleEligible:!0,sensitiveFields:dD,subtitle:"Forward your Vercel deployment logs, traces, and Web Analytics events directly to Sazabi for real-time analysis and alerting.",features:["Log forwarding","Trace forwarding","Web Analytics forwarding","Real-time streaming"],setupSkill:C,dashboard:{iconKey:"vercel",intakeSourceId:"vercel",streamSelectorLayout:"sidepanel",streamTableColumns:[{kind:"config-enum-badge",header:"Type",width:"w-24",configField:"drainType",values:[{value:"logs",label:"Logs"},{value:"traces",label:"Traces"},{value:"analytics",label:"Analytics"}],legacyBooleanField:"ingestTraces",legacyTrueLabel:"Traces",legacyFalseLabel:"Logs",fallbackLabel:"N/A"}],actions:{submit:{validate:{kind:"source-action",actionId:"validate-token"}},list:{list:{kind:"source-action",actionId:"list-projects",itemsField:"projects"}}}}}});var Fn,tk,DB,LB,po,NB,CB,gD,bD,pD,xB;var ok=g(()=>{vf();kf();_f();Tf();Df();Cf();jf();Rf();Bf();Mf();Vf();Xf();eI();rI();aI();uI();dI();pI();vI();kI();_I();TI();DI();CI();jI();RI();BI();MI();VI();XI();ek();Fn=[yf,If,$f,Sf,Af,Nf,zf,Uf,Kf,Hf,qf,Yf,Qf,oI,iI,lI,hI,bI,yI,II,$I,SI,AI,NI,UI,zI,KI,HI,qI,YI,QI],tk=Fn,DB=Object.fromEntries(tk.map((e)=>[e.id,e.sensitiveFields??[]])),LB=Object.fromEntries(tk.flatMap((e)=>[...Object.values(e.dashboard?.actions?.submit??{}),...Object.values(e.dashboard?.actions?.list??{}),...Object.values(e.dashboard?.actions?.prefetch??{})].flatMap((t)=>{let r=t.sensitiveInputFields??[];if(r.length===0)return[];return[["procedure"in t?t.procedure:`${e.id}.${t.actionId}`,r]]}))),po=["vercel","cloudflare","railway","render","fly_io","netlify","supabase","digital_ocean","inngest","trigger_dev","temporal","mastra","neon","langchain","daytona","e2b","cloudwatch","convex","datadog","sentry","sentry_platform","openrouter","posthog","gcp","otel","fluent_bit","vector","grafana_alloy","otel_collector","cloudflare_workers","elastic_cloud"],NB=Fn.map((e)=>({id:e.id,name:e.name,capabilities:e.capabilities})),CB=Object.fromEntries(Fn.map((e)=>[e.id,{name:e.name,setupSkill:e.setupSkill}])),gD={cloudflare:ol,cloudwatch:al,convex:ll,digital_ocean:dl,fly_io:yl,gcp:fl,posthog:Ll,render:zl,sentry_platform:Ul,vercel:Hl},bD={cloudflare:rl,cloudwatch:cl,convex:ul,digital_ocean:gl,fly_io:vl,gcp:Il,posthog:Nl,render:jl,vercel:Ml},pD={cloudflare:nl,cloudflare_workers:il,datadog:sl,daytona:hl,fluent_bit:ml,grafana_alloy:wl,e2b:bl,elastic_cloud:pl,gcp:kl,inngest:$l,langchain:_l,mastra:Ol,neon:Sl,netlify:Tl,openrouter:Pl,otel:Al,otel_collector:Dl,posthog:Cl,railway:xl,sentry:El,supabase:Rl,temporal:Fl,trigger_dev:Kl,vector:Bl},xB=Fn.map((e)=>({sourceId:e.id,name:e.name,capabilities:e.capabilities,setupAuthModes:e.auth,deliveryModes:e.delivery,hasDashboardMetadata:Boolean(e.dashboard),hasNativeFlow:Boolean(gD[e.id]),hasManualFlow:Boolean(pD[e.id]),hasStreamSelector:Boolean(bD[e.id]),lifecycleEligible:e.lifecycleEligible??!1,lifecycleSkipReason:e.lifecycleSkipReason}))});var rk=g(()=>{ok()});var Jl=g(()=>{pf();rk()});function m(e,t,r){function n(c,u){if(!c._zod)Object.defineProperty(c,"_zod",{value:{def:u,constr:a,traits:new Set},enumerable:!1});if(c._zod.traits.has(e))return;c._zod.traits.add(e),t(c,u);let s=a.prototype,d=Object.keys(s);for(let h=0;h<d.length;h++){let b=d[h];if(!(b in c))c[b]=s[b].bind(c)}}let o=r?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:e});function a(c){var u;let s=r?.Parent?new i:this;n(s,c),(u=s._zod).deferred??(u.deferred=[]);for(let d of s._zod.deferred)d();return s}return Object.defineProperty(a,"init",{value:n}),Object.defineProperty(a,Symbol.hasInstance,{value:(c)=>{if(r?.Parent&&c instanceof r.Parent)return!0;return c?._zod?.traits?.has(e)}}),Object.defineProperty(a,"name",{value:e}),a}function ue(e){if(e)Object.assign(Lr,e);return Lr}var ql,Vl,nt,Vt,Lr;var mo=g(()=>{ql=Object.freeze({status:"aborted"});Vl=Symbol("zod_brand");nt=class nt extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}};Vt=class Vt extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`);this.name="ZodEncodeError"}};Lr={}});var $={};et($,{unwrapMessage:()=>Nr,uint8ArrayToHex:()=>FD,uint8ArrayToBase64url:()=>UD,uint8ArrayToBase64:()=>ak,stringifyPrimitive:()=>k,slugify:()=>Xl,shallowClone:()=>Ql,safeExtend:()=>ND,required:()=>zD,randomString:()=>OD,propertyKeyTypes:()=>zr,promiseAllObject:()=>_D,primitiveTypes:()=>eu,prefixIssues:()=>Ee,pick:()=>AD,partial:()=>xD,parsedType:()=>w,optionalKeys:()=>tu,omit:()=>DD,objectClone:()=>kD,numKeys:()=>SD,nullish:()=>Dt,normalizeParams:()=>O,mergeDefs:()=>yt,merge:()=>CD,jsonStringifyReplacer:()=>yo,joinValues:()=>f,issue:()=>fo,isPlainObject:()=>Nt,isObject:()=>Wt,hexToUint8Array:()=>RD,getSizableOrigin:()=>jr,getParsedType:()=>TD,getLengthableOrigin:()=>Er,getEnumValues:()=>Cr,getElementAtPath:()=>$D,floatSafeRemainder:()=>Yl,finalizeIssue:()=>Ce,extend:()=>LD,escapeRegex:()=>Je,esc:()=>Kn,defineLazy:()=>B,createTransparentProxy:()=>PD,cloneDef:()=>wD,clone:()=>Pe,cleanRegex:()=>xr,cleanEnum:()=>jD,captureStackTrace:()=>Bn,cached:()=>vo,base64urlToUint8Array:()=>ED,base64ToUint8Array:()=>ik,assignProp:()=>Lt,assertNotEqual:()=>yD,assertNever:()=>fD,assertIs:()=>vD,assertEqual:()=>mD,assert:()=>ID,allowsEval:()=>Zl,aborted:()=>Ct,NUMBER_FORMAT_RANGES:()=>ou,Class:()=>ck,BIGINT_FORMAT_RANGES:()=>ru});function mD(e){return e}function yD(e){return e}function vD(e){}function fD(e){throw Error("Unexpected value in exhaustive check")}function ID(e){}function Cr(e){let t=Object.values(e).filter((n)=>typeof n==="number");return Object.entries(e).filter(([n,o])=>t.indexOf(+n)===-1).map(([n,o])=>o)}function f(e,t="|"){return e.map((r)=>k(r)).join(t)}function yo(e,t){if(typeof t==="bigint")return t.toString();return t}function vo(e){return{get value(){{let r=e();return Object.defineProperty(this,"value",{value:r}),r}throw Error("cached value already set")}}}function Dt(e){return e===null||e===void 0}function xr(e){let t=e.startsWith("^")?1:0,r=e.endsWith("$")?e.length-1:e.length;return e.slice(t,r)}function Yl(e,t){let r=(e.toString().split(".")[1]||"").length,n=t.toString(),o=(n.split(".")[1]||"").length;if(o===0&&/\d?e-\d?/.test(n)){let u=n.match(/\d?e-(\d?)/);if(u?.[1])o=Number.parseInt(u[1])}let i=r>o?r:o,a=Number.parseInt(e.toFixed(i).replace(".","")),c=Number.parseInt(t.toFixed(i).replace(".",""));return a%c/10**i}function B(e,t,r){let n=void 0;Object.defineProperty(e,t,{get(){if(n===nk)return;if(n===void 0)n=nk,n=r();return n},set(o){Object.defineProperty(e,t,{value:o})},configurable:!0})}function kD(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function Lt(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!0,configurable:!0})}function yt(...e){let t={};for(let r of e){let n=Object.getOwnPropertyDescriptors(r);Object.assign(t,n)}return Object.defineProperties({},t)}function wD(e){return yt(e._zod.def)}function $D(e,t){if(!t)return e;return t.reduce((r,n)=>r?.[n],e)}function _D(e){let t=Object.keys(e),r=t.map((n)=>e[n]);return Promise.all(r).then((n)=>{let o={};for(let i=0;i<t.length;i++)o[t[i]]=n[i];return o})}function OD(e=10){let r="";for(let n=0;n<e;n++)r+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return r}function Kn(e){return JSON.stringify(e)}function Xl(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}function Wt(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function Nt(e){if(Wt(e)===!1)return!1;let t=e.constructor;if(t===void 0)return!0;if(typeof t!=="function")return!0;let r=t.prototype;if(Wt(r)===!1)return!1;if(Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)return!1;return!0}function Ql(e){if(Nt(e))return{...e};if(Array.isArray(e))return[...e];return e}function SD(e){let t=0;for(let r in e)if(Object.prototype.hasOwnProperty.call(e,r))t++;return t}function Je(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Pe(e,t,r){let n=new e._zod.constr(t??e._zod.def);if(!t||r?.parent)n._zod.parent=e;return n}function O(e){let t=e;if(!t)return{};if(typeof t==="string")return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}if(delete t.message,typeof t.error==="string")return{...t,error:()=>t.error};return t}function PD(e){let t;return new Proxy({},{get(r,n,o){return t??(t=e()),Reflect.get(t,n,o)},set(r,n,o,i){return t??(t=e()),Reflect.set(t,n,o,i)},has(r,n){return t??(t=e()),Reflect.has(t,n)},deleteProperty(r,n){return t??(t=e()),Reflect.deleteProperty(t,n)},ownKeys(r){return t??(t=e()),Reflect.ownKeys(t)},getOwnPropertyDescriptor(r,n){return t??(t=e()),Reflect.getOwnPropertyDescriptor(t,n)},defineProperty(r,n,o){return t??(t=e()),Reflect.defineProperty(t,n,o)}})}function k(e){if(typeof e==="bigint")return e.toString()+"n";if(typeof e==="string")return`"${e}"`;return`${e}`}function tu(e){return Object.keys(e).filter((t)=>{return e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional"})}function AD(e,t){let r=e._zod.def,n=r.checks;if(n&&n.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let i=yt(e._zod.def,{get shape(){let a={};for(let c in t){if(!(c in r.shape))throw Error(`Unrecognized key: "${c}"`);if(!t[c])continue;a[c]=r.shape[c]}return Lt(this,"shape",a),a},checks:[]});return Pe(e,i)}function DD(e,t){let r=e._zod.def,n=r.checks;if(n&&n.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let i=yt(e._zod.def,{get shape(){let a={...e._zod.def.shape};for(let c in t){if(!(c in r.shape))throw Error(`Unrecognized key: "${c}"`);if(!t[c])continue;delete a[c]}return Lt(this,"shape",a),a},checks:[]});return Pe(e,i)}function LD(e,t){if(!Nt(t))throw Error("Invalid input to extend: expected a plain object");let r=e._zod.def.checks;if(r&&r.length>0){let i=e._zod.def.shape;for(let a in t)if(Object.getOwnPropertyDescriptor(i,a)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let o=yt(e._zod.def,{get shape(){let i={...e._zod.def.shape,...t};return Lt(this,"shape",i),i}});return Pe(e,o)}function ND(e,t){if(!Nt(t))throw Error("Invalid input to safeExtend: expected a plain object");let r=yt(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return Lt(this,"shape",n),n}});return Pe(e,r)}function CD(e,t){let r=yt(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return Lt(this,"shape",n),n},get catchall(){return t._zod.def.catchall},checks:[]});return Pe(e,r)}function xD(e,t,r){let o=t._zod.def.checks;if(o&&o.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let a=yt(t._zod.def,{get shape(){let c=t._zod.def.shape,u={...c};if(r)for(let s in r){if(!(s in c))throw Error(`Unrecognized key: "${s}"`);if(!r[s])continue;u[s]=e?new e({type:"optional",innerType:c[s]}):c[s]}else for(let s in c)u[s]=e?new e({type:"optional",innerType:c[s]}):c[s];return Lt(this,"shape",u),u},checks:[]});return Pe(t,a)}function zD(e,t,r){let n=yt(t._zod.def,{get shape(){let o=t._zod.def.shape,i={...o};if(r)for(let a in r){if(!(a in i))throw Error(`Unrecognized key: "${a}"`);if(!r[a])continue;i[a]=new e({type:"nonoptional",innerType:o[a]})}else for(let a in o)i[a]=new e({type:"nonoptional",innerType:o[a]});return Lt(this,"shape",i),i}});return Pe(t,n)}function Ct(e,t=0){if(e.aborted===!0)return!0;for(let r=t;r<e.issues.length;r++)if(e.issues[r]?.continue!==!0)return!0;return!1}function Ee(e,t){return t.map((r)=>{var n;return(n=r).path??(n.path=[]),r.path.unshift(e),r})}function Nr(e){return typeof e==="string"?e:e?.message}function Ce(e,t,r){let n={...e,path:e.path??[]};if(!e.message){let o=Nr(e.inst?._zod.def?.error?.(e))??Nr(t?.error?.(e))??Nr(r.customError?.(e))??Nr(r.localeError?.(e))??"Invalid input";n.message=o}if(delete n.inst,delete n.continue,!t?.reportInput)delete n.input;return n}function jr(e){if(e instanceof Set)return"set";if(e instanceof Map)return"map";if(e instanceof File)return"file";return"unknown"}function Er(e){if(Array.isArray(e))return"array";if(typeof e==="string")return"string";return"unknown"}function w(e){let t=typeof e;switch(t){case"number":return Number.isNaN(e)?"nan":"number";case"object":{if(e===null)return"null";if(Array.isArray(e))return"array";let r=e;if(r&&Object.getPrototypeOf(r)!==Object.prototype&&"constructor"in r&&r.constructor)return r.constructor.name}}return t}function fo(...e){let[t,r,n]=e;if(typeof t==="string")return{message:t,code:"custom",input:r,inst:n};return{...t}}function jD(e){return Object.entries(e).filter(([t,r])=>{return Number.isNaN(Number.parseInt(t,10))}).map((t)=>t[1])}function ik(e){let t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function ak(e){let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function ED(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),r="=".repeat((4-t.length%4)%4);return ik(t+r)}function UD(e){return ak(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function RD(e){let t=e.replace(/^0x/,"");if(t.length%2!==0)throw Error("Invalid hex string length");let r=new Uint8Array(t.length/2);for(let n=0;n<t.length;n+=2)r[n/2]=Number.parseInt(t.slice(n,n+2),16);return r}function FD(e){return Array.from(e).map((t)=>t.toString(16).padStart(2,"0")).join("")}class ck{constructor(...e){}}var nk,Bn,Zl,TD=(e)=>{let t=typeof e;switch(t){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(e))return"array";if(e===null)return"null";if(e.then&&typeof e.then==="function"&&e.catch&&typeof e.catch==="function")return"promise";if(typeof Map<"u"&&e instanceof Map)return"map";if(typeof Set<"u"&&e instanceof Set)return"set";if(typeof Date<"u"&&e instanceof Date)return"date";if(typeof File<"u"&&e instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${t}`)}},zr,eu,ou,ru;var x=g(()=>{nk=Symbol("evaluating");Bn="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};Zl=vo(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(e){return!1}});zr=new Set(["string","number","symbol"]),eu=new Set(["string","number","bigint","boolean","symbol","undefined"]);ou={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},ru={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]}});function Rr(e,t=(r)=>r.message){let r={},n=[];for(let o of e.issues)if(o.path.length>0)r[o.path[0]]=r[o.path[0]]||[],r[o.path[0]].push(t(o));else n.push(t(o));return{formErrors:n,fieldErrors:r}}function Fr(e,t=(r)=>r.message){let r={_errors:[]},n=(o)=>{for(let i of o.issues)if(i.code==="invalid_union"&&i.errors.length)i.errors.map((a)=>n({issues:a}));else if(i.code==="invalid_key")n({issues:i.issues});else if(i.code==="invalid_element")n({issues:i.issues});else if(i.path.length===0)r._errors.push(t(i));else{let a=r,c=0;while(c<i.path.length){let u=i.path[c];if(c!==i.path.length-1)a[u]=a[u]||{_errors:[]};else a[u]=a[u]||{_errors:[]},a[u]._errors.push(t(i));a=a[u],c++}}};return n(e),r}function nu(e,t=(r)=>r.message){let r={errors:[]},n=(o,i=[])=>{var a,c;for(let u of o.issues)if(u.code==="invalid_union"&&u.errors.length)u.errors.map((s)=>n({issues:s},u.path));else if(u.code==="invalid_key")n({issues:u.issues},u.path);else if(u.code==="invalid_element")n({issues:u.issues},u.path);else{let s=[...i,...u.path];if(s.length===0){r.errors.push(t(u));continue}let d=r,h=0;while(h<s.length){let b=s[h],p=h===s.length-1;if(typeof b==="string")d.properties??(d.properties={}),(a=d.properties)[b]??(a[b]={errors:[]}),d=d.properties[b];else d.items??(d.items=[]),(c=d.items)[b]??(c[b]={errors:[]}),d=d.items[b];if(p)d.errors.push(t(u));h++}}};return n(e),r}function uk(e){let t=[],r=e.map((n)=>typeof n==="object"?n.key:n);for(let n of r)if(typeof n==="number")t.push(`[${n}]`);else if(typeof n==="symbol")t.push(`[${JSON.stringify(String(n))}]`);else if(/[^\w$]/.test(n))t.push(`[${JSON.stringify(n)}]`);else{if(t.length)t.push(".");t.push(n)}return t.join("")}function iu(e){let t=[],r=[...e.issues].sort((n,o)=>(n.path??[]).length-(o.path??[]).length);for(let n of r)if(t.push(`✖ ${n.message}`),n.path?.length)t.push(`  → at ${uk(n.path)}`);return t.join(`
`)}var lk=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,yo,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Ur,xe;var au=g(()=>{mo();x();Ur=m("$ZodError",lk),xe=m("$ZodError",lk,{Parent:Error})});var Io=(e)=>(t,r,n,o)=>{let i=n?Object.assign(n,{async:!1}):{async:!1},a=t._zod.run({value:r,issues:[]},i);if(a instanceof Promise)throw new nt;if(a.issues.length){let c=new(o?.Err??e)(a.issues.map((u)=>Ce(u,i,ue())));throw Bn(c,o?.callee),c}return a.value},Gn,ko=(e)=>async(t,r,n,o)=>{let i=n?Object.assign(n,{async:!0}):{async:!0},a=t._zod.run({value:r,issues:[]},i);if(a instanceof Promise)a=await a;if(a.issues.length){let c=new(o?.Err??e)(a.issues.map((u)=>Ce(u,i,ue())));throw Bn(c,o?.callee),c}return a.value},Hn,wo=(e)=>(t,r,n)=>{let o=n?{...n,async:!1}:{async:!1},i=t._zod.run({value:r,issues:[]},o);if(i instanceof Promise)throw new nt;return i.issues.length?{success:!1,error:new(e??Ur)(i.issues.map((a)=>Ce(a,o,ue())))}:{success:!0,data:i.value}},cu,$o=(e)=>async(t,r,n)=>{let o=n?Object.assign(n,{async:!0}):{async:!0},i=t._zod.run({value:r,issues:[]},o);if(i instanceof Promise)i=await i;return i.issues.length?{success:!1,error:new e(i.issues.map((a)=>Ce(a,o,ue())))}:{success:!0,data:i.value}},lu,Mn=(e)=>(t,r,n)=>{let o=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return Io(e)(t,r,o)},BD,Jn=(e)=>(t,r,n)=>{return Io(e)(t,r,n)},GD,qn=(e)=>async(t,r,n)=>{let o=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return ko(e)(t,r,o)},HD,Vn=(e)=>async(t,r,n)=>{return ko(e)(t,r,n)},MD,Wn=(e)=>(t,r,n)=>{let o=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return wo(e)(t,r,o)},JD,Yn=(e)=>(t,r,n)=>{return wo(e)(t,r,n)},qD,Xn=(e)=>async(t,r,n)=>{let o=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return $o(e)(t,r,o)},VD,Zn=(e)=>async(t,r,n)=>{return $o(e)(t,r,n)},WD;var uu=g(()=>{mo();au();x();Gn=Io(xe),Hn=ko(xe),cu=wo(xe),lu=$o(xe),BD=Mn(xe),GD=Jn(xe),HD=qn(xe),MD=Vn(xe),JD=Wn(xe),qD=Yn(xe),VD=Xn(xe),WD=Zn(xe)});var qe={};et(qe,{xid:()=>gu,uuid7:()=>QD,uuid6:()=>ZD,uuid4:()=>XD,uuid:()=>Yt,uppercase:()=>Eu,unicodeEmail:()=>sk,undefined:()=>zu,ulid:()=>du,time:()=>Pu,string:()=>Du,sha512_hex:()=>IL,sha512_base64url:()=>wL,sha512_base64:()=>kL,sha384_hex:()=>yL,sha384_base64url:()=>fL,sha384_base64:()=>vL,sha256_hex:()=>bL,sha256_base64url:()=>mL,sha256_base64:()=>pL,sha1_hex:()=>hL,sha1_base64url:()=>gL,sha1_base64:()=>dL,rfc5322Email:()=>tL,number:()=>Kr,null:()=>xu,nanoid:()=>pu,md5_hex:()=>lL,md5_base64url:()=>sL,md5_base64:()=>uL,mac:()=>wu,lowercase:()=>ju,ksuid:()=>bu,ipv6:()=>ku,ipv4:()=>Iu,integer:()=>Nu,idnEmail:()=>oL,html5Email:()=>eL,hostname:()=>iL,hex:()=>cL,guid:()=>yu,extendedDuration:()=>YD,emoji:()=>fu,email:()=>vu,e164:()=>Su,duration:()=>mu,domain:()=>aL,datetime:()=>Au,date:()=>Tu,cuid2:()=>hu,cuid:()=>su,cidrv6:()=>_u,cidrv4:()=>$u,browserEmail:()=>rL,boolean:()=>Cu,bigint:()=>Lu,base64url:()=>Qn,base64:()=>Ou});function fu(){return new RegExp(nL,"u")}function dk(e){return typeof e.precision==="number"?e.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":e.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function Pu(e){return new RegExp(`^${dk(e)}$`)}function Au(e){let t=dk({precision:e.precision}),r=["Z"];if(e.local)r.push("");if(e.offset)r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let n=`${t}(?:${r.join("|")})`;return new RegExp(`^${hk}T(?:${n})$`)}function Br(e,t){return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`)}function Gr(e){return new RegExp(`^[A-Za-z0-9_-]{${e}}$`)}var su,hu,du,gu,bu,pu,mu,YD,yu,Yt=(e)=>{if(!e)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)},XD,ZD,QD,vu,eL,tL,sk,oL,rL,nL="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Iu,ku,wu=(e)=>{let t=Je(e??":");return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`)},$u,_u,Ou,Qn,iL,aL,Su,hk="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Tu,Du=(e)=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)},Lu,Nu,Kr,Cu,xu,zu,ju,Eu,cL,lL,uL,sL,hL,dL,gL,bL,pL,mL,yL,vL,fL,IL,kL,wL;var ei=g(()=>{x();su=/^[cC][^\s-]{8,}$/,hu=/^[0-9a-z]+$/,du=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,gu=/^[0-9a-vA-V]{20}$/,bu=/^[A-Za-z0-9]{27}$/,pu=/^[a-zA-Z0-9_-]{21}$/,mu=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,YD=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,yu=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,XD=Yt(4),ZD=Yt(6),QD=Yt(7),vu=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,eL=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,tL=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,sk=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,oL=sk,rL=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;Iu=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ku=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,$u=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,_u=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ou=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Qn=/^[A-Za-z0-9_-]*$/,iL=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,aL=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,Su=/^\+[1-9]\d{6,14}$/,Tu=new RegExp(`^${hk}$`);Lu=/^-?\d+n?$/,Nu=/^-?\d+$/,Kr=/^-?\d+(?:\.\d+)?$/,Cu=/^(?:true|false)$/i,xu=/^null$/i,zu=/^undefined$/i,ju=/^[^A-Z]*$/,Eu=/^[^a-z]*$/,cL=/^[0-9a-fA-F]*$/;lL=/^[0-9a-fA-F]{32}$/,uL=Br(22,"=="),sL=Gr(22),hL=/^[0-9a-fA-F]{40}$/,dL=Br(27,"="),gL=Gr(27),bL=/^[0-9a-fA-F]{64}$/,pL=Br(43,"="),mL=Gr(43),yL=/^[0-9a-fA-F]{96}$/,vL=Br(64,""),fL=Gr(64),IL=/^[0-9a-fA-F]{128}$/,kL=Br(86,"=="),wL=Gr(86)});function gk(e,t,r){if(e.issues.length)t.issues.push(...Ee(r,e.issues))}var te,bk,ti,oi,Uu,Ru,Fu,Ku,Bu,Gu,Hu,Mu,Ju,_o,qu,Vu,Wu,Yu,Xu,Zu,Qu,es,ts;var ri=g(()=>{mo();ei();x();te=m("$ZodCheck",(e,t)=>{var r;e._zod??(e._zod={}),e._zod.def=t,(r=e._zod).onattach??(r.onattach=[])}),bk={number:"number",bigint:"bigint",object:"date"},ti=m("$ZodCheckLessThan",(e,t)=>{te.init(e,t);let r=bk[typeof t.value];e._zod.onattach.push((n)=>{let o=n._zod.bag,i=(t.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;if(t.value<i)if(t.inclusive)o.maximum=t.value;else o.exclusiveMaximum=t.value}),e._zod.check=(n)=>{if(t.inclusive?n.value<=t.value:n.value<t.value)return;n.issues.push({origin:r,code:"too_big",maximum:typeof t.value==="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),oi=m("$ZodCheckGreaterThan",(e,t)=>{te.init(e,t);let r=bk[typeof t.value];e._zod.onattach.push((n)=>{let o=n._zod.bag,i=(t.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;if(t.value>i)if(t.inclusive)o.minimum=t.value;else o.exclusiveMinimum=t.value}),e._zod.check=(n)=>{if(t.inclusive?n.value>=t.value:n.value>t.value)return;n.issues.push({origin:r,code:"too_small",minimum:typeof t.value==="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Uu=m("$ZodCheckMultipleOf",(e,t)=>{te.init(e,t),e._zod.onattach.push((r)=>{var n;(n=r._zod.bag).multipleOf??(n.multipleOf=t.value)}),e._zod.check=(r)=>{if(typeof r.value!==typeof t.value)throw Error("Cannot mix number and bigint in multiple_of check.");if(typeof r.value==="bigint"?r.value%t.value===BigInt(0):Yl(r.value,t.value)===0)return;r.issues.push({origin:typeof r.value,code:"not_multiple_of",divisor:t.value,input:r.value,inst:e,continue:!t.abort})}}),Ru=m("$ZodCheckNumberFormat",(e,t)=>{te.init(e,t),t.format=t.format||"float64";let r=t.format?.includes("int"),n=r?"int":"number",[o,i]=ou[t.format];e._zod.onattach.push((a)=>{let c=a._zod.bag;if(c.format=t.format,c.minimum=o,c.maximum=i,r)c.pattern=Nu}),e._zod.check=(a)=>{let c=a.value;if(r){if(!Number.isInteger(c)){a.issues.push({expected:n,format:t.format,code:"invalid_type",continue:!1,input:c,inst:e});return}if(!Number.isSafeInteger(c)){if(c>0)a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});else a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});return}}if(c<o)a.issues.push({origin:"number",input:c,code:"too_small",minimum:o,inclusive:!0,inst:e,continue:!t.abort});if(c>i)a.issues.push({origin:"number",input:c,code:"too_big",maximum:i,inclusive:!0,inst:e,continue:!t.abort})}}),Fu=m("$ZodCheckBigIntFormat",(e,t)=>{te.init(e,t);let[r,n]=ru[t.format];e._zod.onattach.push((o)=>{let i=o._zod.bag;i.format=t.format,i.minimum=r,i.maximum=n}),e._zod.check=(o)=>{let i=o.value;if(i<r)o.issues.push({origin:"bigint",input:i,code:"too_small",minimum:r,inclusive:!0,inst:e,continue:!t.abort});if(i>n)o.issues.push({origin:"bigint",input:i,code:"too_big",maximum:n,inclusive:!0,inst:e,continue:!t.abort})}}),Ku=m("$ZodCheckMaxSize",(e,t)=>{var r;te.init(e,t),(r=e._zod.def).when??(r.when=(n)=>{let o=n.value;return!Dt(o)&&o.size!==void 0}),e._zod.onattach.push((n)=>{let o=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(t.maximum<o)n._zod.bag.maximum=t.maximum}),e._zod.check=(n)=>{let o=n.value;if(o.size<=t.maximum)return;n.issues.push({origin:jr(o),code:"too_big",maximum:t.maximum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Bu=m("$ZodCheckMinSize",(e,t)=>{var r;te.init(e,t),(r=e._zod.def).when??(r.when=(n)=>{let o=n.value;return!Dt(o)&&o.size!==void 0}),e._zod.onattach.push((n)=>{let o=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(t.minimum>o)n._zod.bag.minimum=t.minimum}),e._zod.check=(n)=>{let o=n.value;if(o.size>=t.minimum)return;n.issues.push({origin:jr(o),code:"too_small",minimum:t.minimum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Gu=m("$ZodCheckSizeEquals",(e,t)=>{var r;te.init(e,t),(r=e._zod.def).when??(r.when=(n)=>{let o=n.value;return!Dt(o)&&o.size!==void 0}),e._zod.onattach.push((n)=>{let o=n._zod.bag;o.minimum=t.size,o.maximum=t.size,o.size=t.size}),e._zod.check=(n)=>{let o=n.value,i=o.size;if(i===t.size)return;let a=i>t.size;n.issues.push({origin:jr(o),...a?{code:"too_big",maximum:t.size}:{code:"too_small",minimum:t.size},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),Hu=m("$ZodCheckMaxLength",(e,t)=>{var r;te.init(e,t),(r=e._zod.def).when??(r.when=(n)=>{let o=n.value;return!Dt(o)&&o.length!==void 0}),e._zod.onattach.push((n)=>{let o=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(t.maximum<o)n._zod.bag.maximum=t.maximum}),e._zod.check=(n)=>{let o=n.value;if(o.length<=t.maximum)return;let a=Er(o);n.issues.push({origin:a,code:"too_big",maximum:t.maximum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Mu=m("$ZodCheckMinLength",(e,t)=>{var r;te.init(e,t),(r=e._zod.def).when??(r.when=(n)=>{let o=n.value;return!Dt(o)&&o.length!==void 0}),e._zod.onattach.push((n)=>{let o=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(t.minimum>o)n._zod.bag.minimum=t.minimum}),e._zod.check=(n)=>{let o=n.value;if(o.length>=t.minimum)return;let a=Er(o);n.issues.push({origin:a,code:"too_small",minimum:t.minimum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Ju=m("$ZodCheckLengthEquals",(e,t)=>{var r;te.init(e,t),(r=e._zod.def).when??(r.when=(n)=>{let o=n.value;return!Dt(o)&&o.length!==void 0}),e._zod.onattach.push((n)=>{let o=n._zod.bag;o.minimum=t.length,o.maximum=t.length,o.length=t.length}),e._zod.check=(n)=>{let o=n.value,i=o.length;if(i===t.length)return;let a=Er(o),c=i>t.length;n.issues.push({origin:a,...c?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),_o=m("$ZodCheckStringFormat",(e,t)=>{var r,n;if(te.init(e,t),e._zod.onattach.push((o)=>{let i=o._zod.bag;if(i.format=t.format,t.pattern)i.patterns??(i.patterns=new Set),i.patterns.add(t.pattern)}),t.pattern)(r=e._zod).check??(r.check=(o)=>{if(t.pattern.lastIndex=0,t.pattern.test(o.value))return;o.issues.push({origin:"string",code:"invalid_format",format:t.format,input:o.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})});else(n=e._zod).check??(n.check=()=>{})}),qu=m("$ZodCheckRegex",(e,t)=>{_o.init(e,t),e._zod.check=(r)=>{if(t.pattern.lastIndex=0,t.pattern.test(r.value))return;r.issues.push({origin:"string",code:"invalid_format",format:"regex",input:r.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Vu=m("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=ju),_o.init(e,t)}),Wu=m("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=Eu),_o.init(e,t)}),Yu=m("$ZodCheckIncludes",(e,t)=>{te.init(e,t);let r=Je(t.includes),n=new RegExp(typeof t.position==="number"?`^.{${t.position}}${r}`:r);t.pattern=n,e._zod.onattach.push((o)=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(n)}),e._zod.check=(o)=>{if(o.value.includes(t.includes,t.position))return;o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:o.value,inst:e,continue:!t.abort})}}),Xu=m("$ZodCheckStartsWith",(e,t)=>{te.init(e,t);let r=new RegExp(`^${Je(t.prefix)}.*`);t.pattern??(t.pattern=r),e._zod.onattach.push((n)=>{let o=n._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(r)}),e._zod.check=(n)=>{if(n.value.startsWith(t.prefix))return;n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Zu=m("$ZodCheckEndsWith",(e,t)=>{te.init(e,t);let r=new RegExp(`.*${Je(t.suffix)}$`);t.pattern??(t.pattern=r),e._zod.onattach.push((n)=>{let o=n._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(r)}),e._zod.check=(n)=>{if(n.value.endsWith(t.suffix))return;n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}});Qu=m("$ZodCheckProperty",(e,t)=>{te.init(e,t),e._zod.check=(r)=>{let n=t.schema._zod.run({value:r.value[t.property],issues:[]},{});if(n instanceof Promise)return n.then((o)=>gk(o,r,t.property));gk(n,r,t.property);return}}),es=m("$ZodCheckMimeType",(e,t)=>{te.init(e,t);let r=new Set(t.mime);e._zod.onattach.push((n)=>{n._zod.bag.mime=t.mime}),e._zod.check=(n)=>{if(r.has(n.value.type))return;n.issues.push({code:"invalid_value",values:t.mime,input:n.value.type,inst:e,continue:!t.abort})}}),ts=m("$ZodCheckOverwrite",(e,t)=>{te.init(e,t),e._zod.check=(r)=>{r.value=t.tx(r.value)}})});class ni{constructor(e=[]){if(this.content=[],this.indent=0,this)this.args=e}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e==="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter((i)=>i),n=Math.min(...r.map((i)=>i.length-i.trimStart().length)),o=r.map((i)=>i.slice(n)).map((i)=>" ".repeat(this.indent*2)+i);for(let i of o)this.content.push(i)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[""]).map((o)=>`  ${o}`)];return new e(...t,n.join(`
`))}}var os;var rs=g(()=>{os={major:4,minor:3,patch:6}});function Os(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}function Tk(e){if(!Qn.test(e))return!1;let t=e.replace(/[-_]/g,(n)=>n==="-"?"+":"/"),r=t.padEnd(Math.ceil(t.length/4)*4,"=");return Os(r)}function Pk(e,t=null){try{let r=e.split(".");if(r.length!==3)return!1;let[n]=r;if(!n)return!1;let o=JSON.parse(atob(n));if("typ"in o&&o?.typ!=="JWT")return!1;if(!o.alg)return!1;if(t&&(!("alg"in o)||o.alg!==t))return!1;return!0}catch{return!1}}function mk(e,t,r){if(e.issues.length)t.issues.push(...Ee(r,e.issues));t.value[r]=e.value}function ui(e,t,r,n,o){if(e.issues.length){if(o&&!(r in n))return;t.issues.push(...Ee(r,e.issues))}if(e.value===void 0){if(r in n)t.value[r]=void 0}else t.value[r]=e.value}function Ak(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let r=tu(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(r)}}function Dk(e,t,r,n,o,i){let a=[],c=o.keySet,u=o.catchall._zod,s=u.def.type,d=u.optout==="optional";for(let h in t){if(c.has(h))continue;if(s==="never"){a.push(h);continue}let b=u.run({value:t[h],issues:[]},n);if(b instanceof Promise)e.push(b.then((p)=>ui(p,r,h,t,d)));else ui(b,r,h,t,d)}if(a.length)r.issues.push({code:"unrecognized_keys",keys:a,input:t,inst:i});if(!e.length)return r;return Promise.all(e).then(()=>{return r})}function yk(e,t,r,n){for(let i of e)if(i.issues.length===0)return t.value=i.value,t;let o=e.filter((i)=>!Ct(i));if(o.length===1)return t.value=o[0].value,o[0];return t.issues.push({code:"invalid_union",input:t.value,inst:r,errors:e.map((i)=>i.issues.map((a)=>Ce(a,n,ue())))}),t}function vk(e,t,r,n){let o=e.filter((i)=>i.issues.length===0);if(o.length===1)return t.value=o[0].value,t;if(o.length===0)t.issues.push({code:"invalid_union",input:t.value,inst:r,errors:e.map((i)=>i.issues.map((a)=>Ce(a,n,ue())))});else t.issues.push({code:"invalid_union",input:t.value,inst:r,errors:[],inclusive:!1});return t}function ns(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e===+t)return{valid:!0,data:e};if(Nt(e)&&Nt(t)){let r=Object.keys(t),n=Object.keys(e).filter((i)=>r.indexOf(i)!==-1),o={...e,...t};for(let i of n){let a=ns(e[i],t[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};o[i]=a.data}return{valid:!0,data:o}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let r=[];for(let n=0;n<e.length;n++){let o=e[n],i=t[n],a=ns(o,i);if(!a.valid)return{valid:!1,mergeErrorPath:[n,...a.mergeErrorPath]};r.push(a.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function fk(e,t,r){let n=new Map,o;for(let c of t.issues)if(c.code==="unrecognized_keys"){o??(o=c);for(let u of c.keys){if(!n.has(u))n.set(u,{});n.get(u).l=!0}}else e.issues.push(c);for(let c of r.issues)if(c.code==="unrecognized_keys")for(let u of c.keys){if(!n.has(u))n.set(u,{});n.get(u).r=!0}else e.issues.push(c);let i=[...n].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(i.length&&o)e.issues.push({...o,keys:i});if(Ct(e))return e;let a=ns(t.value,r.value);if(!a.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return e.value=a.data,e}function ii(e,t,r){if(e.issues.length)t.issues.push(...Ee(r,e.issues));t.value[r]=e.value}function Ik(e,t,r,n,o,i,a){if(e.issues.length)if(zr.has(typeof n))r.issues.push(...Ee(n,e.issues));else r.issues.push({code:"invalid_key",origin:"map",input:o,inst:i,issues:e.issues.map((c)=>Ce(c,a,ue()))});if(t.issues.length)if(zr.has(typeof n))r.issues.push(...Ee(n,t.issues));else r.issues.push({origin:"map",code:"invalid_element",input:o,inst:i,key:n,issues:t.issues.map((c)=>Ce(c,a,ue()))});r.value.set(e.value,t.value)}function kk(e,t){if(e.issues.length)t.issues.push(...e.issues);t.value.add(e.value)}function wk(e,t){if(e.issues.length&&t===void 0)return{issues:[],value:void 0};return e}function $k(e,t){if(e.value===void 0)e.value=t.defaultValue;return e}function _k(e,t){if(!e.issues.length&&e.value===void 0)e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t});return e}function ai(e,t,r){if(e.issues.length)return e.aborted=!0,e;return t._zod.run({value:e.value,issues:e.issues},r)}function ci(e,t,r){if(e.issues.length)return e.aborted=!0,e;if((r.direction||"forward")==="forward"){let o=t.transform(e.value,e);if(o instanceof Promise)return o.then((i)=>li(e,i,t.out,r));return li(e,o,t.out,r)}else{let o=t.reverseTransform(e.value,e);if(o instanceof Promise)return o.then((i)=>li(e,i,t.in,r));return li(e,o,t.in,r)}}function li(e,t,r,n){if(e.issues.length)return e.aborted=!0,e;return r._zod.run({value:t,issues:e.issues},n)}function Ok(e){return e.value=Object.freeze(e.value),e}function Sk(e,t,r,n){if(!e){let o={code:"custom",input:r,inst:n,path:[...n._zod.def.path??[]],continue:!n._zod.def.abort};if(n._zod.def.params)o.params=n._zod.def.params;t.issues.push(fo(o))}}var E,Xt,Q,is,as,cs,ls,us,ss,hs,ds,gs,bs,ps,ms,ys,vs,fs,Is,ks,ws,$s,_s,Ss,Ts,Ps,As,Ds,si,Ls,Hr,hi,Ns,Cs,xs,zs,js,Es,Us,Rs,Fs,Ks,Lk,Bs,Mr,Gs,Hs,Ms,di,Js,qs,Vs,Ws,Ys,Xs,Zs,gi,Qs,eh,th,oh,rh,nh,ih,ah,ch,Jr,lh,uh,sh,hh,dh,gh;var bh=g(()=>{ri();mo();uu();ei();x();rs();x();E=m("$ZodType",(e,t)=>{var r;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=os;let n=[...e._zod.def.checks??[]];if(e._zod.traits.has("$ZodCheck"))n.unshift(e);for(let o of n)for(let i of o._zod.onattach)i(e);if(n.length===0)(r=e._zod).deferred??(r.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let o=(a,c,u)=>{let s=Ct(a),d;for(let h of c){if(h._zod.def.when){if(!h._zod.def.when(a))continue}else if(s)continue;let b=a.issues.length,p=h._zod.check(a);if(p instanceof Promise&&u?.async===!1)throw new nt;if(d||p instanceof Promise)d=(d??Promise.resolve()).then(async()=>{if(await p,a.issues.length===b)return;if(!s)s=Ct(a,b)});else{if(a.issues.length===b)continue;if(!s)s=Ct(a,b)}}if(d)return d.then(()=>{return a});return a},i=(a,c,u)=>{if(Ct(a))return a.aborted=!0,a;let s=o(c,n,u);if(s instanceof Promise){if(u.async===!1)throw new nt;return s.then((d)=>e._zod.parse(d,u))}return e._zod.parse(s,u)};e._zod.run=(a,c)=>{if(c.skipChecks)return e._zod.parse(a,c);if(c.direction==="backward"){let s=e._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});if(s instanceof Promise)return s.then((d)=>{return i(d,a,c)});return i(s,a,c)}let u=e._zod.parse(a,c);if(u instanceof Promise){if(c.async===!1)throw new nt;return u.then((s)=>o(s,n,c))}return o(u,n,c)}}B(e,"~standard",()=>({validate:(o)=>{try{let i=cu(e,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch(i){return lu(e,o).then((a)=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),Xt=m("$ZodString",(e,t)=>{E.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Du(e._zod.bag),e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=String(r.value)}catch(o){}if(typeof r.value==="string")return r;return r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:e}),r}}),Q=m("$ZodStringFormat",(e,t)=>{_o.init(e,t),Xt.init(e,t)}),is=m("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=yu),Q.init(e,t)}),as=m("$ZodUUID",(e,t)=>{if(t.version){let n={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(n===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=Yt(n))}else t.pattern??(t.pattern=Yt());Q.init(e,t)}),cs=m("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=vu),Q.init(e,t)}),ls=m("$ZodURL",(e,t)=>{Q.init(e,t),e._zod.check=(r)=>{try{let n=r.value.trim(),o=new URL(n);if(t.hostname){if(t.hostname.lastIndex=0,!t.hostname.test(o.hostname))r.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:t.hostname.source,input:r.value,inst:e,continue:!t.abort})}if(t.protocol){if(t.protocol.lastIndex=0,!t.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol))r.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:r.value,inst:e,continue:!t.abort})}if(t.normalize)r.value=o.href;else r.value=n;return}catch(n){r.issues.push({code:"invalid_format",format:"url",input:r.value,inst:e,continue:!t.abort})}}}),us=m("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=fu()),Q.init(e,t)}),ss=m("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=pu),Q.init(e,t)}),hs=m("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=su),Q.init(e,t)}),ds=m("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=hu),Q.init(e,t)}),gs=m("$ZodULID",(e,t)=>{t.pattern??(t.pattern=du),Q.init(e,t)}),bs=m("$ZodXID",(e,t)=>{t.pattern??(t.pattern=gu),Q.init(e,t)}),ps=m("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=bu),Q.init(e,t)}),ms=m("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=Au(t)),Q.init(e,t)}),ys=m("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=Tu),Q.init(e,t)}),vs=m("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=Pu(t)),Q.init(e,t)}),fs=m("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=mu),Q.init(e,t)}),Is=m("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=Iu),Q.init(e,t),e._zod.bag.format="ipv4"}),ks=m("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=ku),Q.init(e,t),e._zod.bag.format="ipv6",e._zod.check=(r)=>{try{new URL(`http://[${r.value}]`)}catch{r.issues.push({code:"invalid_format",format:"ipv6",input:r.value,inst:e,continue:!t.abort})}}}),ws=m("$ZodMAC",(e,t)=>{t.pattern??(t.pattern=wu(t.delimiter)),Q.init(e,t),e._zod.bag.format="mac"}),$s=m("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=$u),Q.init(e,t)}),_s=m("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=_u),Q.init(e,t),e._zod.check=(r)=>{let n=r.value.split("/");try{if(n.length!==2)throw Error();let[o,i]=n;if(!i)throw Error();let a=Number(i);if(`${a}`!==i)throw Error();if(a<0||a>128)throw Error();new URL(`http://[${o}]`)}catch{r.issues.push({code:"invalid_format",format:"cidrv6",input:r.value,inst:e,continue:!t.abort})}}});Ss=m("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=Ou),Q.init(e,t),e._zod.bag.contentEncoding="base64",e._zod.check=(r)=>{if(Os(r.value))return;r.issues.push({code:"invalid_format",format:"base64",input:r.value,inst:e,continue:!t.abort})}});Ts=m("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=Qn),Q.init(e,t),e._zod.bag.contentEncoding="base64url",e._zod.check=(r)=>{if(Tk(r.value))return;r.issues.push({code:"invalid_format",format:"base64url",input:r.value,inst:e,continue:!t.abort})}}),Ps=m("$ZodE164",(e,t)=>{t.pattern??(t.pattern=Su),Q.init(e,t)});As=m("$ZodJWT",(e,t)=>{Q.init(e,t),e._zod.check=(r)=>{if(Pk(r.value,t.alg))return;r.issues.push({code:"invalid_format",format:"jwt",input:r.value,inst:e,continue:!t.abort})}}),Ds=m("$ZodCustomStringFormat",(e,t)=>{Q.init(e,t),e._zod.check=(r)=>{if(t.fn(r.value))return;r.issues.push({code:"invalid_format",format:t.format,input:r.value,inst:e,continue:!t.abort})}}),si=m("$ZodNumber",(e,t)=>{E.init(e,t),e._zod.pattern=e._zod.bag.pattern??Kr,e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=Number(r.value)}catch(a){}let o=r.value;if(typeof o==="number"&&!Number.isNaN(o)&&Number.isFinite(o))return r;let i=typeof o==="number"?Number.isNaN(o)?"NaN":!Number.isFinite(o)?"Infinity":void 0:void 0;return r.issues.push({expected:"number",code:"invalid_type",input:o,inst:e,...i?{received:i}:{}}),r}}),Ls=m("$ZodNumberFormat",(e,t)=>{Ru.init(e,t),si.init(e,t)}),Hr=m("$ZodBoolean",(e,t)=>{E.init(e,t),e._zod.pattern=Cu,e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=Boolean(r.value)}catch(i){}let o=r.value;if(typeof o==="boolean")return r;return r.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:e}),r}}),hi=m("$ZodBigInt",(e,t)=>{E.init(e,t),e._zod.pattern=Lu,e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=BigInt(r.value)}catch(o){}if(typeof r.value==="bigint")return r;return r.issues.push({expected:"bigint",code:"invalid_type",input:r.value,inst:e}),r}}),Ns=m("$ZodBigIntFormat",(e,t)=>{Fu.init(e,t),hi.init(e,t)}),Cs=m("$ZodSymbol",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(typeof o==="symbol")return r;return r.issues.push({expected:"symbol",code:"invalid_type",input:o,inst:e}),r}}),xs=m("$ZodUndefined",(e,t)=>{E.init(e,t),e._zod.pattern=zu,e._zod.values=new Set([void 0]),e._zod.optin="optional",e._zod.optout="optional",e._zod.parse=(r,n)=>{let o=r.value;if(typeof o>"u")return r;return r.issues.push({expected:"undefined",code:"invalid_type",input:o,inst:e}),r}}),zs=m("$ZodNull",(e,t)=>{E.init(e,t),e._zod.pattern=xu,e._zod.values=new Set([null]),e._zod.parse=(r,n)=>{let o=r.value;if(o===null)return r;return r.issues.push({expected:"null",code:"invalid_type",input:o,inst:e}),r}}),js=m("$ZodAny",(e,t)=>{E.init(e,t),e._zod.parse=(r)=>r}),Es=m("$ZodUnknown",(e,t)=>{E.init(e,t),e._zod.parse=(r)=>r}),Us=m("$ZodNever",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{return r.issues.push({expected:"never",code:"invalid_type",input:r.value,inst:e}),r}}),Rs=m("$ZodVoid",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(typeof o>"u")return r;return r.issues.push({expected:"void",code:"invalid_type",input:o,inst:e}),r}}),Fs=m("$ZodDate",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=new Date(r.value)}catch(c){}let o=r.value,i=o instanceof Date;if(i&&!Number.isNaN(o.getTime()))return r;return r.issues.push({expected:"date",code:"invalid_type",input:o,...i?{received:"Invalid Date"}:{},inst:e}),r}});Ks=m("$ZodArray",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(!Array.isArray(o))return r.issues.push({expected:"array",code:"invalid_type",input:o,inst:e}),r;r.value=Array(o.length);let i=[];for(let a=0;a<o.length;a++){let c=o[a],u=t.element._zod.run({value:c,issues:[]},n);if(u instanceof Promise)i.push(u.then((s)=>mk(s,r,a)));else mk(u,r,a)}if(i.length)return Promise.all(i).then(()=>r);return r}});Lk=m("$ZodObject",(e,t)=>{if(E.init(e,t),!Object.getOwnPropertyDescriptor(t,"shape")?.get){let c=t.shape;Object.defineProperty(t,"shape",{get:()=>{let u={...c};return Object.defineProperty(t,"shape",{value:u}),u}})}let n=vo(()=>Ak(t));B(e._zod,"propValues",()=>{let c=t.shape,u={};for(let s in c){let d=c[s]._zod;if(d.values){u[s]??(u[s]=new Set);for(let h of d.values)u[s].add(h)}}return u});let o=Wt,i=t.catchall,a;e._zod.parse=(c,u)=>{a??(a=n.value);let s=c.value;if(!o(s))return c.issues.push({expected:"object",code:"invalid_type",input:s,inst:e}),c;c.value={};let d=[],h=a.shape;for(let b of a.keys){let p=h[b],_=p._zod.optout==="optional",S=p._zod.run({value:s[b],issues:[]},u);if(S instanceof Promise)d.push(S.then((H)=>ui(H,c,b,s,_)));else ui(S,c,b,s,_)}if(!i)return d.length?Promise.all(d).then(()=>c):c;return Dk(d,s,c,u,n.value,e)}}),Bs=m("$ZodObjectJIT",(e,t)=>{Lk.init(e,t);let r=e._zod.parse,n=vo(()=>Ak(t)),o=(b)=>{let p=new ni(["shape","payload","ctx"]),_=n.value,S=(re)=>{let ve=Kn(re);return`shape[${ve}]._zod.run({ value: input[${ve}], issues: [] }, ctx)`};p.write("const input = payload.value;");let H=Object.create(null),K=0;for(let re of _.keys)H[re]=`key_${K++}`;p.write("const newResult = {};");for(let re of _.keys){let ve=H[re],Te=Kn(re),GT=b[re]?._zod?.optout==="optional";if(p.write(`const ${ve} = ${S(re)};`),GT)p.write(`
        if (${ve}.issues.length) {
          if (${Te} in input) {
            payload.issues = payload.issues.concat(${ve}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Te}, ...iss.path] : [${Te}]
            })));
          }
        }
        
        if (${ve}.value === undefined) {
          if (${Te} in input) {
            newResult[${Te}] = undefined;
          }
        } else {
          newResult[${Te}] = ${ve}.value;
        }
        
      `);else p.write(`
        if (${ve}.issues.length) {
          payload.issues = payload.issues.concat(${ve}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Te}, ...iss.path] : [${Te}]
          })));
        }
        
        if (${ve}.value === undefined) {
          if (${Te} in input) {
            newResult[${Te}] = undefined;
          }
        } else {
          newResult[${Te}] = ${ve}.value;
        }
        
      `)}p.write("payload.value = newResult;"),p.write("return payload;");let le=p.compile();return(re,ve)=>le(b,re,ve)},i,a=Wt,c=!Lr.jitless,s=c&&Zl.value,d=t.catchall,h;e._zod.parse=(b,p)=>{h??(h=n.value);let _=b.value;if(!a(_))return b.issues.push({expected:"object",code:"invalid_type",input:_,inst:e}),b;if(c&&s&&p?.async===!1&&p.jitless!==!0){if(!i)i=o(t.shape);if(b=i(b,p),!d)return b;return Dk([],_,b,p,h,e)}return r(b,p)}});Mr=m("$ZodUnion",(e,t)=>{E.init(e,t),B(e._zod,"optin",()=>t.options.some((o)=>o._zod.optin==="optional")?"optional":void 0),B(e._zod,"optout",()=>t.options.some((o)=>o._zod.optout==="optional")?"optional":void 0),B(e._zod,"values",()=>{if(t.options.every((o)=>o._zod.values))return new Set(t.options.flatMap((o)=>Array.from(o._zod.values)));return}),B(e._zod,"pattern",()=>{if(t.options.every((o)=>o._zod.pattern)){let o=t.options.map((i)=>i._zod.pattern);return new RegExp(`^(${o.map((i)=>xr(i.source)).join("|")})$`)}return});let r=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(o,i)=>{if(r)return n(o,i);let a=!1,c=[];for(let u of t.options){let s=u._zod.run({value:o.value,issues:[]},i);if(s instanceof Promise)c.push(s),a=!0;else{if(s.issues.length===0)return s;c.push(s)}}if(!a)return yk(c,o,e,i);return Promise.all(c).then((u)=>{return yk(u,o,e,i)})}});Gs=m("$ZodXor",(e,t)=>{Mr.init(e,t),t.inclusive=!1;let r=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(o,i)=>{if(r)return n(o,i);let a=!1,c=[];for(let u of t.options){let s=u._zod.run({value:o.value,issues:[]},i);if(s instanceof Promise)c.push(s),a=!0;else c.push(s)}if(!a)return vk(c,o,e,i);return Promise.all(c).then((u)=>{return vk(u,o,e,i)})}}),Hs=m("$ZodDiscriminatedUnion",(e,t)=>{t.inclusive=!1,Mr.init(e,t);let r=e._zod.parse;B(e._zod,"propValues",()=>{let o={};for(let i of t.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);for(let[c,u]of Object.entries(a)){if(!o[c])o[c]=new Set;for(let s of u)o[c].add(s)}}return o});let n=vo(()=>{let o=t.options,i=new Map;for(let a of o){let c=a._zod.propValues?.[t.discriminator];if(!c||c.size===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);for(let u of c){if(i.has(u))throw Error(`Duplicate discriminator value "${String(u)}"`);i.set(u,a)}}return i});e._zod.parse=(o,i)=>{let a=o.value;if(!Wt(a))return o.issues.push({code:"invalid_type",expected:"object",input:a,inst:e}),o;let c=n.value.get(a?.[t.discriminator]);if(c)return c._zod.run(o,i);if(t.unionFallback)return r(o,i);return o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:t.discriminator,input:a,path:[t.discriminator],inst:e}),o}}),Ms=m("$ZodIntersection",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value,i=t.left._zod.run({value:o,issues:[]},n),a=t.right._zod.run({value:o,issues:[]},n);if(i instanceof Promise||a instanceof Promise)return Promise.all([i,a]).then(([u,s])=>{return fk(r,u,s)});return fk(r,i,a)}});di=m("$ZodTuple",(e,t)=>{E.init(e,t);let r=t.items;e._zod.parse=(n,o)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({input:i,inst:e,expected:"tuple",code:"invalid_type"}),n;n.value=[];let a=[],c=[...r].reverse().findIndex((d)=>d._zod.optin!=="optional"),u=c===-1?0:r.length-c;if(!t.rest){let d=i.length>r.length,h=i.length<u-1;if(d||h)return n.issues.push({...d?{code:"too_big",maximum:r.length,inclusive:!0}:{code:"too_small",minimum:r.length},input:i,inst:e,origin:"array"}),n}let s=-1;for(let d of r){if(s++,s>=i.length){if(s>=u)continue}let h=d._zod.run({value:i[s],issues:[]},o);if(h instanceof Promise)a.push(h.then((b)=>ii(b,n,s)));else ii(h,n,s)}if(t.rest){let d=i.slice(r.length);for(let h of d){s++;let b=t.rest._zod.run({value:h,issues:[]},o);if(b instanceof Promise)a.push(b.then((p)=>ii(p,n,s)));else ii(b,n,s)}}if(a.length)return Promise.all(a).then(()=>n);return n}});Js=m("$ZodRecord",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(!Nt(o))return r.issues.push({expected:"record",code:"invalid_type",input:o,inst:e}),r;let i=[],a=t.keyType._zod.values;if(a){r.value={};let c=new Set;for(let s of a)if(typeof s==="string"||typeof s==="number"||typeof s==="symbol"){c.add(typeof s==="number"?s.toString():s);let d=t.valueType._zod.run({value:o[s],issues:[]},n);if(d instanceof Promise)i.push(d.then((h)=>{if(h.issues.length)r.issues.push(...Ee(s,h.issues));r.value[s]=h.value}));else{if(d.issues.length)r.issues.push(...Ee(s,d.issues));r.value[s]=d.value}}let u;for(let s in o)if(!c.has(s))u=u??[],u.push(s);if(u&&u.length>0)r.issues.push({code:"unrecognized_keys",input:o,inst:e,keys:u})}else{r.value={};for(let c of Reflect.ownKeys(o)){if(c==="__proto__")continue;let u=t.keyType._zod.run({value:c,issues:[]},n);if(u instanceof Promise)throw Error("Async schemas not supported in object keys currently");if(typeof c==="string"&&Kr.test(c)&&u.issues.length){let h=t.keyType._zod.run({value:Number(c),issues:[]},n);if(h instanceof Promise)throw Error("Async schemas not supported in object keys currently");if(h.issues.length===0)u=h}if(u.issues.length){if(t.mode==="loose")r.value[c]=o[c];else r.issues.push({code:"invalid_key",origin:"record",issues:u.issues.map((h)=>Ce(h,n,ue())),input:c,path:[c],inst:e});continue}let d=t.valueType._zod.run({value:o[c],issues:[]},n);if(d instanceof Promise)i.push(d.then((h)=>{if(h.issues.length)r.issues.push(...Ee(c,h.issues));r.value[u.value]=h.value}));else{if(d.issues.length)r.issues.push(...Ee(c,d.issues));r.value[u.value]=d.value}}}if(i.length)return Promise.all(i).then(()=>r);return r}}),qs=m("$ZodMap",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(!(o instanceof Map))return r.issues.push({expected:"map",code:"invalid_type",input:o,inst:e}),r;let i=[];r.value=new Map;for(let[a,c]of o){let u=t.keyType._zod.run({value:a,issues:[]},n),s=t.valueType._zod.run({value:c,issues:[]},n);if(u instanceof Promise||s instanceof Promise)i.push(Promise.all([u,s]).then(([d,h])=>{Ik(d,h,r,a,o,e,n)}));else Ik(u,s,r,a,o,e,n)}if(i.length)return Promise.all(i).then(()=>r);return r}});Vs=m("$ZodSet",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(!(o instanceof Set))return r.issues.push({input:o,inst:e,expected:"set",code:"invalid_type"}),r;let i=[];r.value=new Set;for(let a of o){let c=t.valueType._zod.run({value:a,issues:[]},n);if(c instanceof Promise)i.push(c.then((u)=>kk(u,r)));else kk(c,r)}if(i.length)return Promise.all(i).then(()=>r);return r}});Ws=m("$ZodEnum",(e,t)=>{E.init(e,t);let r=Cr(t.entries),n=new Set(r);e._zod.values=n,e._zod.pattern=new RegExp(`^(${r.filter((o)=>zr.has(typeof o)).map((o)=>typeof o==="string"?Je(o):o.toString()).join("|")})$`),e._zod.parse=(o,i)=>{let a=o.value;if(n.has(a))return o;return o.issues.push({code:"invalid_value",values:r,input:a,inst:e}),o}}),Ys=m("$ZodLiteral",(e,t)=>{if(E.init(e,t),t.values.length===0)throw Error("Cannot create literal schema with no valid values");let r=new Set(t.values);e._zod.values=r,e._zod.pattern=new RegExp(`^(${t.values.map((n)=>typeof n==="string"?Je(n):n?Je(n.toString()):String(n)).join("|")})$`),e._zod.parse=(n,o)=>{let i=n.value;if(r.has(i))return n;return n.issues.push({code:"invalid_value",values:t.values,input:i,inst:e}),n}}),Xs=m("$ZodFile",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{let o=r.value;if(o instanceof File)return r;return r.issues.push({expected:"file",code:"invalid_type",input:o,inst:e}),r}}),Zs=m("$ZodTransform",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{if(n.direction==="backward")throw new Vt(e.constructor.name);let o=t.transform(r.value,r);if(n.async)return(o instanceof Promise?o:Promise.resolve(o)).then((a)=>{return r.value=a,r});if(o instanceof Promise)throw new nt;return r.value=o,r}});gi=m("$ZodOptional",(e,t)=>{E.init(e,t),e._zod.optin="optional",e._zod.optout="optional",B(e._zod,"values",()=>{return t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0}),B(e._zod,"pattern",()=>{let r=t.innerType._zod.pattern;return r?new RegExp(`^(${xr(r.source)})?$`):void 0}),e._zod.parse=(r,n)=>{if(t.innerType._zod.optin==="optional"){let o=t.innerType._zod.run(r,n);if(o instanceof Promise)return o.then((i)=>wk(i,r.value));return wk(o,r.value)}if(r.value===void 0)return r;return t.innerType._zod.run(r,n)}}),Qs=m("$ZodExactOptional",(e,t)=>{gi.init(e,t),B(e._zod,"values",()=>t.innerType._zod.values),B(e._zod,"pattern",()=>t.innerType._zod.pattern),e._zod.parse=(r,n)=>{return t.innerType._zod.run(r,n)}}),eh=m("$ZodNullable",(e,t)=>{E.init(e,t),B(e._zod,"optin",()=>t.innerType._zod.optin),B(e._zod,"optout",()=>t.innerType._zod.optout),B(e._zod,"pattern",()=>{let r=t.innerType._zod.pattern;return r?new RegExp(`^(${xr(r.source)}|null)$`):void 0}),B(e._zod,"values",()=>{return t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0}),e._zod.parse=(r,n)=>{if(r.value===null)return r;return t.innerType._zod.run(r,n)}}),th=m("$ZodDefault",(e,t)=>{E.init(e,t),e._zod.optin="optional",B(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);if(r.value===void 0)return r.value=t.defaultValue,r;let o=t.innerType._zod.run(r,n);if(o instanceof Promise)return o.then((i)=>$k(i,t));return $k(o,t)}});oh=m("$ZodPrefault",(e,t)=>{E.init(e,t),e._zod.optin="optional",B(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);if(r.value===void 0)r.value=t.defaultValue;return t.innerType._zod.run(r,n)}}),rh=m("$ZodNonOptional",(e,t)=>{E.init(e,t),B(e._zod,"values",()=>{let r=t.innerType._zod.values;return r?new Set([...r].filter((n)=>n!==void 0)):void 0}),e._zod.parse=(r,n)=>{let o=t.innerType._zod.run(r,n);if(o instanceof Promise)return o.then((i)=>_k(i,e));return _k(o,e)}});nh=m("$ZodSuccess",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{if(n.direction==="backward")throw new Vt("ZodSuccess");let o=t.innerType._zod.run(r,n);if(o instanceof Promise)return o.then((i)=>{return r.value=i.issues.length===0,r});return r.value=o.issues.length===0,r}}),ih=m("$ZodCatch",(e,t)=>{E.init(e,t),B(e._zod,"optin",()=>t.innerType._zod.optin),B(e._zod,"optout",()=>t.innerType._zod.optout),B(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);let o=t.innerType._zod.run(r,n);if(o instanceof Promise)return o.then((i)=>{if(r.value=i.value,i.issues.length)r.value=t.catchValue({...r,error:{issues:i.issues.map((a)=>Ce(a,n,ue()))},input:r.value}),r.issues=[];return r});if(r.value=o.value,o.issues.length)r.value=t.catchValue({...r,error:{issues:o.issues.map((i)=>Ce(i,n,ue()))},input:r.value}),r.issues=[];return r}}),ah=m("$ZodNaN",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{if(typeof r.value!=="number"||!Number.isNaN(r.value))return r.issues.push({input:r.value,inst:e,expected:"nan",code:"invalid_type"}),r;return r}}),ch=m("$ZodPipe",(e,t)=>{E.init(e,t),B(e._zod,"values",()=>t.in._zod.values),B(e._zod,"optin",()=>t.in._zod.optin),B(e._zod,"optout",()=>t.out._zod.optout),B(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(r,n)=>{if(n.direction==="backward"){let i=t.out._zod.run(r,n);if(i instanceof Promise)return i.then((a)=>ai(a,t.in,n));return ai(i,t.in,n)}let o=t.in._zod.run(r,n);if(o instanceof Promise)return o.then((i)=>ai(i,t.out,n));return ai(o,t.out,n)}});Jr=m("$ZodCodec",(e,t)=>{E.init(e,t),B(e._zod,"values",()=>t.in._zod.values),B(e._zod,"optin",()=>t.in._zod.optin),B(e._zod,"optout",()=>t.out._zod.optout),B(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(r,n)=>{if((n.direction||"forward")==="forward"){let i=t.in._zod.run(r,n);if(i instanceof Promise)return i.then((a)=>ci(a,t,n));return ci(i,t,n)}else{let i=t.out._zod.run(r,n);if(i instanceof Promise)return i.then((a)=>ci(a,t,n));return ci(i,t,n)}}});lh=m("$ZodReadonly",(e,t)=>{E.init(e,t),B(e._zod,"propValues",()=>t.innerType._zod.propValues),B(e._zod,"values",()=>t.innerType._zod.values),B(e._zod,"optin",()=>t.innerType?._zod?.optin),B(e._zod,"optout",()=>t.innerType?._zod?.optout),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);let o=t.innerType._zod.run(r,n);if(o instanceof Promise)return o.then(Ok);return Ok(o)}});uh=m("$ZodTemplateLiteral",(e,t)=>{E.init(e,t);let r=[];for(let n of t.parts)if(typeof n==="object"&&n!==null){if(!n._zod.pattern)throw Error(`Invalid template literal part, no pattern found: ${[...n._zod.traits].shift()}`);let o=n._zod.pattern instanceof RegExp?n._zod.pattern.source:n._zod.pattern;if(!o)throw Error(`Invalid template literal part: ${n._zod.traits}`);let i=o.startsWith("^")?1:0,a=o.endsWith("$")?o.length-1:o.length;r.push(o.slice(i,a))}else if(n===null||eu.has(typeof n))r.push(Je(`${n}`));else throw Error(`Invalid template literal part: ${n}`);e._zod.pattern=new RegExp(`^${r.join("")}$`),e._zod.parse=(n,o)=>{if(typeof n.value!=="string")return n.issues.push({input:n.value,inst:e,expected:"string",code:"invalid_type"}),n;if(e._zod.pattern.lastIndex=0,!e._zod.pattern.test(n.value))return n.issues.push({input:n.value,inst:e,code:"invalid_format",format:t.format??"template_literal",pattern:e._zod.pattern.source}),n;return n}}),sh=m("$ZodFunction",(e,t)=>{return E.init(e,t),e._def=t,e._zod.def=t,e.implement=(r)=>{if(typeof r!=="function")throw Error("implement() must be called with a function");return function(...n){let o=e._def.input?Gn(e._def.input,n):n,i=Reflect.apply(r,this,o);if(e._def.output)return Gn(e._def.output,i);return i}},e.implementAsync=(r)=>{if(typeof r!=="function")throw Error("implementAsync() must be called with a function");return async function(...n){let o=e._def.input?await Hn(e._def.input,n):n,i=await Reflect.apply(r,this,o);if(e._def.output)return await Hn(e._def.output,i);return i}},e._zod.parse=(r,n)=>{if(typeof r.value!=="function")return r.issues.push({code:"invalid_type",expected:"function",input:r.value,inst:e}),r;if(e._def.output&&e._def.output._zod.def.type==="promise")r.value=e.implementAsync(r.value);else r.value=e.implement(r.value);return r},e.input=(...r)=>{let n=e.constructor;if(Array.isArray(r[0]))return new n({type:"function",input:new di({type:"tuple",items:r[0],rest:r[1]}),output:e._def.output});return new n({type:"function",input:r[0],output:e._def.output})},e.output=(r)=>{return new e.constructor({type:"function",input:e._def.input,output:r})},e}),hh=m("$ZodPromise",(e,t)=>{E.init(e,t),e._zod.parse=(r,n)=>{return Promise.resolve(r.value).then((o)=>t.innerType._zod.run({value:o,issues:[]},n))}}),dh=m("$ZodLazy",(e,t)=>{E.init(e,t),B(e._zod,"innerType",()=>t.getter()),B(e._zod,"pattern",()=>e._zod.innerType?._zod?.pattern),B(e._zod,"propValues",()=>e._zod.innerType?._zod?.propValues),B(e._zod,"optin",()=>e._zod.innerType?._zod?.optin??void 0),B(e._zod,"optout",()=>e._zod.innerType?._zod?.optout??void 0),e._zod.parse=(r,n)=>{return e._zod.innerType._zod.run(r,n)}}),gh=m("$ZodCustom",(e,t)=>{te.init(e,t),E.init(e,t),e._zod.parse=(r,n)=>{return r},e._zod.check=(r)=>{let n=r.value,o=t.fn(n);if(o instanceof Promise)return o.then((i)=>Sk(i,r,n,e));Sk(o,r,n,e);return}})});function ph(){return{localeError:_L()}}var _L=()=>{let e={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function t(o){return e[o]??null}let r={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`مدخلات غير مقبولة: يفترض إدخال instanceof ${o.expected}، ولكن تم إدخال ${c}`;return`مدخلات غير مقبولة: يفترض إدخال ${i}، ولكن تم إدخال ${c}`}case"invalid_value":if(o.values.length===1)return`مدخلات غير مقبولة: يفترض إدخال ${k(o.values[0])}`;return`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return` أكبر من اللازم: يفترض أن تكون ${o.origin??"القيمة"} ${i} ${o.maximum.toString()} ${a.unit??"عنصر"}`;return`أكبر من اللازم: يفترض أن تكون ${o.origin??"القيمة"} ${i} ${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`أصغر من اللازم: يفترض لـ ${o.origin} أن يكون ${i} ${o.minimum.toString()} ${a.unit}`;return`أصغر من اللازم: يفترض لـ ${o.origin} أن يكون ${i} ${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`نَص غير مقبول: يجب أن يبدأ بـ "${o.prefix}"`;if(i.format==="ends_with")return`نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"`;if(i.format==="includes")return`نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"`;if(i.format==="regex")return`نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}`;return`${r[i.format]??o.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${o.divisor}`;case"unrecognized_keys":return`معرف${o.keys.length>1?"ات":""} غريب${o.keys.length>1?"ة":""}: ${f(o.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${o.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${o.origin}`;default:return"مدخل غير مقبول"}}};var Nk=g(()=>{x()});function mh(){return{localeError:OL()}}var OL=()=>{let e={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function t(o){return e[o]??null}let r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Yanlış dəyər: gözlənilən instanceof ${o.expected}, daxil olan ${c}`;return`Yanlış dəyər: gözlənilən ${i}, daxil olan ${c}`}case"invalid_value":if(o.values.length===1)return`Yanlış dəyər: gözlənilən ${k(o.values[0])}`;return`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Çox böyük: gözlənilən ${o.origin??"dəyər"} ${i}${o.maximum.toString()} ${a.unit??"element"}`;return`Çox böyük: gözlənilən ${o.origin??"dəyər"} ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Çox kiçik: gözlənilən ${o.origin} ${i}${o.minimum.toString()} ${a.unit}`;return`Çox kiçik: gözlənilən ${o.origin} ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Yanlış mətn: "${i.prefix}" ilə başlamalıdır`;if(i.format==="ends_with")return`Yanlış mətn: "${i.suffix}" ilə bitməlidir`;if(i.format==="includes")return`Yanlış mətn: "${i.includes}" daxil olmalıdır`;if(i.format==="regex")return`Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır`;return`Yanlış ${r[i.format]??o.format}`}case"not_multiple_of":return`Yanlış ədəd: ${o.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${o.keys.length>1?"lar":""}: ${f(o.keys,", ")}`;case"invalid_key":return`${o.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${o.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};var Ck=g(()=>{x()});function xk(e,t,r,n){let o=Math.abs(e),i=o%10,a=o%100;if(a>=11&&a<=19)return n;if(i===1)return t;if(i>=2&&i<=4)return r;return n}function yh(){return{localeError:SL()}}var SL=()=>{let e={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function t(o){return e[o]??null}let r={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"},n={nan:"NaN",number:"лік",array:"масіў"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Няправільны ўвод: чакаўся instanceof ${o.expected}, атрымана ${c}`;return`Няправільны ўвод: чакаўся ${i}, атрымана ${c}`}case"invalid_value":if(o.values.length===1)return`Няправільны ўвод: чакалася ${k(o.values[0])}`;return`Няправільны варыянт: чакаўся адзін з ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a){let c=Number(o.maximum),u=xk(c,a.unit.one,a.unit.few,a.unit.many);return`Занадта вялікі: чакалася, што ${o.origin??"значэнне"} павінна ${a.verb} ${i}${o.maximum.toString()} ${u}`}return`Занадта вялікі: чакалася, што ${o.origin??"значэнне"} павінна быць ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a){let c=Number(o.minimum),u=xk(c,a.unit.one,a.unit.few,a.unit.many);return`Занадта малы: чакалася, што ${o.origin} павінна ${a.verb} ${i}${o.minimum.toString()} ${u}`}return`Занадта малы: чакалася, што ${o.origin} павінна быць ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Няправільны радок: павінен пачынацца з "${i.prefix}"`;if(i.format==="ends_with")return`Няправільны радок: павінен заканчвацца на "${i.suffix}"`;if(i.format==="includes")return`Няправільны радок: павінен змяшчаць "${i.includes}"`;if(i.format==="regex")return`Няправільны радок: павінен адпавядаць шаблону ${i.pattern}`;return`Няправільны ${r[i.format]??o.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${o.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${o.keys.length>1?"ключы":"ключ"}: ${f(o.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${o.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${o.origin}`;default:return"Няправільны ўвод"}}};var zk=g(()=>{x()});function vh(){return{localeError:TL()}}var TL=()=>{let e={string:{unit:"символа",verb:"да съдържа"},file:{unit:"байта",verb:"да съдържа"},array:{unit:"елемента",verb:"да съдържа"},set:{unit:"елемента",verb:"да съдържа"}};function t(o){return e[o]??null}let r={regex:"вход",email:"имейл адрес",url:"URL",emoji:"емоджи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO време",date:"ISO дата",time:"ISO време",duration:"ISO продължителност",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"base64-кодиран низ",base64url:"base64url-кодиран низ",json_string:"JSON низ",e164:"E.164 номер",jwt:"JWT",template_literal:"вход"},n={nan:"NaN",number:"число",array:"масив"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Невалиден вход: очакван instanceof ${o.expected}, получен ${c}`;return`Невалиден вход: очакван ${i}, получен ${c}`}case"invalid_value":if(o.values.length===1)return`Невалиден вход: очакван ${k(o.values[0])}`;return`Невалидна опция: очаквано едно от ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Твърде голямо: очаква се ${o.origin??"стойност"} да съдържа ${i}${o.maximum.toString()} ${a.unit??"елемента"}`;return`Твърде голямо: очаква се ${o.origin??"стойност"} да бъде ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Твърде малко: очаква се ${o.origin} да съдържа ${i}${o.minimum.toString()} ${a.unit}`;return`Твърде малко: очаква се ${o.origin} да бъде ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Невалиден низ: трябва да започва с "${i.prefix}"`;if(i.format==="ends_with")return`Невалиден низ: трябва да завършва с "${i.suffix}"`;if(i.format==="includes")return`Невалиден низ: трябва да включва "${i.includes}"`;if(i.format==="regex")return`Невалиден низ: трябва да съвпада с ${i.pattern}`;let a="Невалиден";if(i.format==="emoji")a="Невалидно";if(i.format==="datetime")a="Невалидно";if(i.format==="date")a="Невалидна";if(i.format==="time")a="Невалидно";if(i.format==="duration")a="Невалидна";return`${a} ${r[i.format]??o.format}`}case"not_multiple_of":return`Невалидно число: трябва да бъде кратно на ${o.divisor}`;case"unrecognized_keys":return`Неразпознат${o.keys.length>1?"и":""} ключ${o.keys.length>1?"ове":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Невалиден ключ в ${o.origin}`;case"invalid_union":return"Невалиден вход";case"invalid_element":return`Невалидна стойност в ${o.origin}`;default:return"Невалиден вход"}}};var jk=g(()=>{x()});function fh(){return{localeError:PL()}}var PL=()=>{let e={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function t(o){return e[o]??null}let r={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Tipus invàlid: s'esperava instanceof ${o.expected}, s'ha rebut ${c}`;return`Tipus invàlid: s'esperava ${i}, s'ha rebut ${c}`}case"invalid_value":if(o.values.length===1)return`Valor invàlid: s'esperava ${k(o.values[0])}`;return`Opció invàlida: s'esperava una de ${f(o.values," o ")}`;case"too_big":{let i=o.inclusive?"com a màxim":"menys de",a=t(o.origin);if(a)return`Massa gran: s'esperava que ${o.origin??"el valor"} contingués ${i} ${o.maximum.toString()} ${a.unit??"elements"}`;return`Massa gran: s'esperava que ${o.origin??"el valor"} fos ${i} ${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?"com a mínim":"més de",a=t(o.origin);if(a)return`Massa petit: s'esperava que ${o.origin} contingués ${i} ${o.minimum.toString()} ${a.unit}`;return`Massa petit: s'esperava que ${o.origin} fos ${i} ${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Format invàlid: ha de començar amb "${i.prefix}"`;if(i.format==="ends_with")return`Format invàlid: ha d'acabar amb "${i.suffix}"`;if(i.format==="includes")return`Format invàlid: ha d'incloure "${i.includes}"`;if(i.format==="regex")return`Format invàlid: ha de coincidir amb el patró ${i.pattern}`;return`Format invàlid per a ${r[i.format]??o.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${o.divisor}`;case"unrecognized_keys":return`Clau${o.keys.length>1?"s":""} no reconeguda${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${o.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${o.origin}`;default:return"Entrada invàlida"}}};var Ek=g(()=>{x()});function Ih(){return{localeError:AL()}}var AL=()=>{let e={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function t(o){return e[o]??null}let r={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"},n={nan:"NaN",number:"číslo",string:"řetězec",function:"funkce",array:"pole"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Neplatný vstup: očekáváno instanceof ${o.expected}, obdrženo ${c}`;return`Neplatný vstup: očekáváno ${i}, obdrženo ${c}`}case"invalid_value":if(o.values.length===1)return`Neplatný vstup: očekáváno ${k(o.values[0])}`;return`Neplatná možnost: očekávána jedna z hodnot ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Hodnota je příliš velká: ${o.origin??"hodnota"} musí mít ${i}${o.maximum.toString()} ${a.unit??"prvků"}`;return`Hodnota je příliš velká: ${o.origin??"hodnota"} musí být ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Hodnota je příliš malá: ${o.origin??"hodnota"} musí mít ${i}${o.minimum.toString()} ${a.unit??"prvků"}`;return`Hodnota je příliš malá: ${o.origin??"hodnota"} musí být ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Neplatný řetězec: musí začínat na "${i.prefix}"`;if(i.format==="ends_with")return`Neplatný řetězec: musí končit na "${i.suffix}"`;if(i.format==="includes")return`Neplatný řetězec: musí obsahovat "${i.includes}"`;if(i.format==="regex")return`Neplatný řetězec: musí odpovídat vzoru ${i.pattern}`;return`Neplatný formát ${r[i.format]??o.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${o.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${f(o.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${o.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${o.origin}`;default:return"Neplatný vstup"}}};var Uk=g(()=>{x()});function kh(){return{localeError:DL()}}var DL=()=>{let e={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}};function t(o){return e[o]??null}let r={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},n={nan:"NaN",string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Ugyldigt input: forventede instanceof ${o.expected}, fik ${c}`;return`Ugyldigt input: forventede ${i}, fik ${c}`}case"invalid_value":if(o.values.length===1)return`Ugyldig værdi: forventede ${k(o.values[0])}`;return`Ugyldigt valg: forventede en af følgende ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin),c=n[o.origin]??o.origin;if(a)return`For stor: forventede ${c??"value"} ${a.verb} ${i} ${o.maximum.toString()} ${a.unit??"elementer"}`;return`For stor: forventede ${c??"value"} havde ${i} ${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin),c=n[o.origin]??o.origin;if(a)return`For lille: forventede ${c} ${a.verb} ${i} ${o.minimum.toString()} ${a.unit}`;return`For lille: forventede ${c} havde ${i} ${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ugyldig streng: skal starte med "${i.prefix}"`;if(i.format==="ends_with")return`Ugyldig streng: skal ende med "${i.suffix}"`;if(i.format==="includes")return`Ugyldig streng: skal indeholde "${i.includes}"`;if(i.format==="regex")return`Ugyldig streng: skal matche mønsteret ${i.pattern}`;return`Ugyldig ${r[i.format]??o.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${o.divisor}`;case"unrecognized_keys":return`${o.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${f(o.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${o.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${o.origin}`;default:return"Ugyldigt input"}}};var Rk=g(()=>{x()});function wh(){return{localeError:LL()}}var LL=()=>{let e={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function t(o){return e[o]??null}let r={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"},n={nan:"NaN",number:"Zahl",array:"Array"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Ungültige Eingabe: erwartet instanceof ${o.expected}, erhalten ${c}`;return`Ungültige Eingabe: erwartet ${i}, erhalten ${c}`}case"invalid_value":if(o.values.length===1)return`Ungültige Eingabe: erwartet ${k(o.values[0])}`;return`Ungültige Option: erwartet eine von ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Zu groß: erwartet, dass ${o.origin??"Wert"} ${i}${o.maximum.toString()} ${a.unit??"Elemente"} hat`;return`Zu groß: erwartet, dass ${o.origin??"Wert"} ${i}${o.maximum.toString()} ist`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Zu klein: erwartet, dass ${o.origin} ${i}${o.minimum.toString()} ${a.unit} hat`;return`Zu klein: erwartet, dass ${o.origin} ${i}${o.minimum.toString()} ist`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ungültiger String: muss mit "${i.prefix}" beginnen`;if(i.format==="ends_with")return`Ungültiger String: muss mit "${i.suffix}" enden`;if(i.format==="includes")return`Ungültiger String: muss "${i.includes}" enthalten`;if(i.format==="regex")return`Ungültiger String: muss dem Muster ${i.pattern} entsprechen`;return`Ungültig: ${r[i.format]??o.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${o.divisor} sein`;case"unrecognized_keys":return`${o.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${f(o.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${o.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${o.origin}`;default:return"Ungültige Eingabe"}}};var Fk=g(()=>{x()});function qr(){return{localeError:NL()}}var NL=()=>{let e={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function t(o){return e[o]??null}let r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;return`Invalid input: expected ${i}, received ${c}`}case"invalid_value":if(o.values.length===1)return`Invalid input: expected ${k(o.values[0])}`;return`Invalid option: expected one of ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Too big: expected ${o.origin??"value"} to have ${i}${o.maximum.toString()} ${a.unit??"elements"}`;return`Too big: expected ${o.origin??"value"} to be ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Too small: expected ${o.origin} to have ${i}${o.minimum.toString()} ${a.unit}`;return`Too small: expected ${o.origin} to be ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Invalid string: must start with "${i.prefix}"`;if(i.format==="ends_with")return`Invalid string: must end with "${i.suffix}"`;if(i.format==="includes")return`Invalid string: must include "${i.includes}"`;if(i.format==="regex")return`Invalid string: must match pattern ${i.pattern}`;return`Invalid ${r[i.format]??o.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${o.divisor}`;case"unrecognized_keys":return`Unrecognized key${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Invalid key in ${o.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${o.origin}`;default:return"Invalid input"}}};var $h=g(()=>{x()});function _h(){return{localeError:CL()}}var CL=()=>{let e={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function t(o){return e[o]??null}let r={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"},n={nan:"NaN",number:"nombro",array:"tabelo",null:"senvalora"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Nevalida enigo: atendiĝis instanceof ${o.expected}, riceviĝis ${c}`;return`Nevalida enigo: atendiĝis ${i}, riceviĝis ${c}`}case"invalid_value":if(o.values.length===1)return`Nevalida enigo: atendiĝis ${k(o.values[0])}`;return`Nevalida opcio: atendiĝis unu el ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Tro granda: atendiĝis ke ${o.origin??"valoro"} havu ${i}${o.maximum.toString()} ${a.unit??"elementojn"}`;return`Tro granda: atendiĝis ke ${o.origin??"valoro"} havu ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Tro malgranda: atendiĝis ke ${o.origin} havu ${i}${o.minimum.toString()} ${a.unit}`;return`Tro malgranda: atendiĝis ke ${o.origin} estu ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Nevalida karaktraro: devas komenciĝi per "${i.prefix}"`;if(i.format==="ends_with")return`Nevalida karaktraro: devas finiĝi per "${i.suffix}"`;if(i.format==="includes")return`Nevalida karaktraro: devas inkluzivi "${i.includes}"`;if(i.format==="regex")return`Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}`;return`Nevalida ${r[i.format]??o.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${o.divisor}`;case"unrecognized_keys":return`Nekonata${o.keys.length>1?"j":""} ŝlosilo${o.keys.length>1?"j":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${o.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${o.origin}`;default:return"Nevalida enigo"}}};var Kk=g(()=>{x()});function Oh(){return{localeError:xL()}}var xL=()=>{let e={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function t(o){return e[o]??null}let r={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN",string:"texto",number:"número",boolean:"booleano",array:"arreglo",object:"objeto",set:"conjunto",file:"archivo",date:"fecha",bigint:"número grande",symbol:"símbolo",undefined:"indefinido",null:"nulo",function:"función",map:"mapa",record:"registro",tuple:"tupla",enum:"enumeración",union:"unión",literal:"literal",promise:"promesa",void:"vacío",never:"nunca",unknown:"desconocido",any:"cualquiera"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Entrada inválida: se esperaba instanceof ${o.expected}, recibido ${c}`;return`Entrada inválida: se esperaba ${i}, recibido ${c}`}case"invalid_value":if(o.values.length===1)return`Entrada inválida: se esperaba ${k(o.values[0])}`;return`Opción inválida: se esperaba una de ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin),c=n[o.origin]??o.origin;if(a)return`Demasiado grande: se esperaba que ${c??"valor"} tuviera ${i}${o.maximum.toString()} ${a.unit??"elementos"}`;return`Demasiado grande: se esperaba que ${c??"valor"} fuera ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin),c=n[o.origin]??o.origin;if(a)return`Demasiado pequeño: se esperaba que ${c} tuviera ${i}${o.minimum.toString()} ${a.unit}`;return`Demasiado pequeño: se esperaba que ${c} fuera ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Cadena inválida: debe comenzar con "${i.prefix}"`;if(i.format==="ends_with")return`Cadena inválida: debe terminar en "${i.suffix}"`;if(i.format==="includes")return`Cadena inválida: debe incluir "${i.includes}"`;if(i.format==="regex")return`Cadena inválida: debe coincidir con el patrón ${i.pattern}`;return`Inválido ${r[i.format]??o.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${o.divisor}`;case"unrecognized_keys":return`Llave${o.keys.length>1?"s":""} desconocida${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Llave inválida en ${n[o.origin]??o.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${n[o.origin]??o.origin}`;default:return"Entrada inválida"}}};var Bk=g(()=>{x()});function Sh(){return{localeError:zL()}}var zL=()=>{let e={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function t(o){return e[o]??null}let r={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"},n={nan:"NaN",number:"عدد",array:"آرایه"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`ورودی نامعتبر: می‌بایست instanceof ${o.expected} می‌بود، ${c} دریافت شد`;return`ورودی نامعتبر: می‌بایست ${i} می‌بود، ${c} دریافت شد`}case"invalid_value":if(o.values.length===1)return`ورودی نامعتبر: می‌بایست ${k(o.values[0])} می‌بود`;return`گزینه نامعتبر: می‌بایست یکی از ${f(o.values,"|")} می‌بود`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`خیلی بزرگ: ${o.origin??"مقدار"} باید ${i}${o.maximum.toString()} ${a.unit??"عنصر"} باشد`;return`خیلی بزرگ: ${o.origin??"مقدار"} باید ${i}${o.maximum.toString()} باشد`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`خیلی کوچک: ${o.origin} باید ${i}${o.minimum.toString()} ${a.unit} باشد`;return`خیلی کوچک: ${o.origin} باید ${i}${o.minimum.toString()} باشد`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`رشته نامعتبر: باید با "${i.prefix}" شروع شود`;if(i.format==="ends_with")return`رشته نامعتبر: باید با "${i.suffix}" تمام شود`;if(i.format==="includes")return`رشته نامعتبر: باید شامل "${i.includes}" باشد`;if(i.format==="regex")return`رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد`;return`${r[i.format]??o.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${o.divisor} باشد`;case"unrecognized_keys":return`کلید${o.keys.length>1?"های":""} ناشناس: ${f(o.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${o.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${o.origin}`;default:return"ورودی نامعتبر"}}};var Gk=g(()=>{x()});function Th(){return{localeError:jL()}}var jL=()=>{let e={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function t(o){return e[o]??null}let r={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Virheellinen tyyppi: odotettiin instanceof ${o.expected}, oli ${c}`;return`Virheellinen tyyppi: odotettiin ${i}, oli ${c}`}case"invalid_value":if(o.values.length===1)return`Virheellinen syöte: täytyy olla ${k(o.values[0])}`;return`Virheellinen valinta: täytyy olla yksi seuraavista: ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Liian suuri: ${a.subject} täytyy olla ${i}${o.maximum.toString()} ${a.unit}`.trim();return`Liian suuri: arvon täytyy olla ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Liian pieni: ${a.subject} täytyy olla ${i}${o.minimum.toString()} ${a.unit}`.trim();return`Liian pieni: arvon täytyy olla ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Virheellinen syöte: täytyy alkaa "${i.prefix}"`;if(i.format==="ends_with")return`Virheellinen syöte: täytyy loppua "${i.suffix}"`;if(i.format==="includes")return`Virheellinen syöte: täytyy sisältää "${i.includes}"`;if(i.format==="regex")return`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}`;return`Virheellinen ${r[i.format]??o.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${o.divisor} monikerta`;case"unrecognized_keys":return`${o.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${f(o.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};var Hk=g(()=>{x()});function Ph(){return{localeError:EL()}}var EL=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function t(o){return e[o]??null}let r={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},n={nan:"NaN",number:"nombre",array:"tableau"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Entrée invalide : instanceof ${o.expected} attendu, ${c} reçu`;return`Entrée invalide : ${i} attendu, ${c} reçu`}case"invalid_value":if(o.values.length===1)return`Entrée invalide : ${k(o.values[0])} attendu`;return`Option invalide : une valeur parmi ${f(o.values,"|")} attendue`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Trop grand : ${o.origin??"valeur"} doit ${a.verb} ${i}${o.maximum.toString()} ${a.unit??"élément(s)"}`;return`Trop grand : ${o.origin??"valeur"} doit être ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Trop petit : ${o.origin} doit ${a.verb} ${i}${o.minimum.toString()} ${a.unit}`;return`Trop petit : ${o.origin} doit être ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Chaîne invalide : doit commencer par "${i.prefix}"`;if(i.format==="ends_with")return`Chaîne invalide : doit se terminer par "${i.suffix}"`;if(i.format==="includes")return`Chaîne invalide : doit inclure "${i.includes}"`;if(i.format==="regex")return`Chaîne invalide : doit correspondre au modèle ${i.pattern}`;return`${r[i.format]??o.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${o.divisor}`;case"unrecognized_keys":return`Clé${o.keys.length>1?"s":""} non reconnue${o.keys.length>1?"s":""} : ${f(o.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${o.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${o.origin}`;default:return"Entrée invalide"}}};var Mk=g(()=>{x()});function Ah(){return{localeError:UL()}}var UL=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function t(o){return e[o]??null}let r={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Entrée invalide : attendu instanceof ${o.expected}, reçu ${c}`;return`Entrée invalide : attendu ${i}, reçu ${c}`}case"invalid_value":if(o.values.length===1)return`Entrée invalide : attendu ${k(o.values[0])}`;return`Option invalide : attendu l'une des valeurs suivantes ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"≤":"<",a=t(o.origin);if(a)return`Trop grand : attendu que ${o.origin??"la valeur"} ait ${i}${o.maximum.toString()} ${a.unit}`;return`Trop grand : attendu que ${o.origin??"la valeur"} soit ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?"≥":">",a=t(o.origin);if(a)return`Trop petit : attendu que ${o.origin} ait ${i}${o.minimum.toString()} ${a.unit}`;return`Trop petit : attendu que ${o.origin} soit ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Chaîne invalide : doit commencer par "${i.prefix}"`;if(i.format==="ends_with")return`Chaîne invalide : doit se terminer par "${i.suffix}"`;if(i.format==="includes")return`Chaîne invalide : doit inclure "${i.includes}"`;if(i.format==="regex")return`Chaîne invalide : doit correspondre au motif ${i.pattern}`;return`${r[i.format]??o.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${o.divisor}`;case"unrecognized_keys":return`Clé${o.keys.length>1?"s":""} non reconnue${o.keys.length>1?"s":""} : ${f(o.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${o.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${o.origin}`;default:return"Entrée invalide"}}};var Jk=g(()=>{x()});function Dh(){return{localeError:RL()}}var RL=()=>{let e={string:{label:"מחרוזת",gender:"f"},number:{label:"מספר",gender:"m"},boolean:{label:"ערך בוליאני",gender:"m"},bigint:{label:"BigInt",gender:"m"},date:{label:"תאריך",gender:"m"},array:{label:"מערך",gender:"m"},object:{label:"אובייקט",gender:"m"},null:{label:"ערך ריק (null)",gender:"m"},undefined:{label:"ערך לא מוגדר (undefined)",gender:"m"},symbol:{label:"סימבול (Symbol)",gender:"m"},function:{label:"פונקציה",gender:"f"},map:{label:"מפה (Map)",gender:"f"},set:{label:"קבוצה (Set)",gender:"f"},file:{label:"קובץ",gender:"m"},promise:{label:"Promise",gender:"m"},NaN:{label:"NaN",gender:"m"},unknown:{label:"ערך לא ידוע",gender:"m"},value:{label:"ערך",gender:"m"}},t={string:{unit:"תווים",shortLabel:"קצר",longLabel:"ארוך"},file:{unit:"בייטים",shortLabel:"קטן",longLabel:"גדול"},array:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},set:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},number:{unit:"",shortLabel:"קטן",longLabel:"גדול"}},r=(s)=>s?e[s]:void 0,n=(s)=>{let d=r(s);if(d)return d.label;return s??e.unknown.label},o=(s)=>`ה${n(s)}`,i=(s)=>{return(r(s)?.gender??"m")==="f"?"צריכה להיות":"צריך להיות"},a=(s)=>{if(!s)return null;return t[s]??null},c={regex:{label:"קלט",gender:"m"},email:{label:"כתובת אימייל",gender:"f"},url:{label:"כתובת רשת",gender:"f"},emoji:{label:"אימוג'י",gender:"m"},uuid:{label:"UUID",gender:"m"},nanoid:{label:"nanoid",gender:"m"},guid:{label:"GUID",gender:"m"},cuid:{label:"cuid",gender:"m"},cuid2:{label:"cuid2",gender:"m"},ulid:{label:"ULID",gender:"m"},xid:{label:"XID",gender:"m"},ksuid:{label:"KSUID",gender:"m"},datetime:{label:"תאריך וזמן ISO",gender:"m"},date:{label:"תאריך ISO",gender:"m"},time:{label:"זמן ISO",gender:"m"},duration:{label:"משך זמן ISO",gender:"m"},ipv4:{label:"כתובת IPv4",gender:"f"},ipv6:{label:"כתובת IPv6",gender:"f"},cidrv4:{label:"טווח IPv4",gender:"m"},cidrv6:{label:"טווח IPv6",gender:"m"},base64:{label:"מחרוזת בבסיס 64",gender:"f"},base64url:{label:"מחרוזת בבסיס 64 לכתובות רשת",gender:"f"},json_string:{label:"מחרוזת JSON",gender:"f"},e164:{label:"מספר E.164",gender:"m"},jwt:{label:"JWT",gender:"m"},ends_with:{label:"קלט",gender:"m"},includes:{label:"קלט",gender:"m"},lowercase:{label:"קלט",gender:"m"},starts_with:{label:"קלט",gender:"m"},uppercase:{label:"קלט",gender:"m"}},u={nan:"NaN"};return(s)=>{switch(s.code){case"invalid_type":{let d=s.expected,h=u[d??""]??n(d),b=w(s.input),p=u[b]??e[b]?.label??b;if(/^[A-Z]/.test(s.expected))return`קלט לא תקין: צריך להיות instanceof ${s.expected}, התקבל ${p}`;return`קלט לא תקין: צריך להיות ${h}, התקבל ${p}`}case"invalid_value":{if(s.values.length===1)return`ערך לא תקין: הערך חייב להיות ${k(s.values[0])}`;let d=s.values.map((p)=>k(p));if(s.values.length===2)return`ערך לא תקין: האפשרויות המתאימות הן ${d[0]} או ${d[1]}`;let h=d[d.length-1];return`ערך לא תקין: האפשרויות המתאימות הן ${d.slice(0,-1).join(", ")} או ${h}`}case"too_big":{let d=a(s.origin),h=o(s.origin??"value");if(s.origin==="string")return`${d?.longLabel??"ארוך"} מדי: ${h} צריכה להכיל ${s.maximum.toString()} ${d?.unit??""} ${s.inclusive?"או פחות":"לכל היותר"}`.trim();if(s.origin==="number"){let _=s.inclusive?`קטן או שווה ל-${s.maximum}`:`קטן מ-${s.maximum}`;return`גדול מדי: ${h} צריך להיות ${_}`}if(s.origin==="array"||s.origin==="set"){let _=s.origin==="set"?"צריכה":"צריך",S=s.inclusive?`${s.maximum} ${d?.unit??""} או פחות`:`פחות מ-${s.maximum} ${d?.unit??""}`;return`גדול מדי: ${h} ${_} להכיל ${S}`.trim()}let b=s.inclusive?"<=":"<",p=i(s.origin??"value");if(d?.unit)return`${d.longLabel} מדי: ${h} ${p} ${b}${s.maximum.toString()} ${d.unit}`;return`${d?.longLabel??"גדול"} מדי: ${h} ${p} ${b}${s.maximum.toString()}`}case"too_small":{let d=a(s.origin),h=o(s.origin??"value");if(s.origin==="string")return`${d?.shortLabel??"קצר"} מדי: ${h} צריכה להכיל ${s.minimum.toString()} ${d?.unit??""} ${s.inclusive?"או יותר":"לפחות"}`.trim();if(s.origin==="number"){let _=s.inclusive?`גדול או שווה ל-${s.minimum}`:`גדול מ-${s.minimum}`;return`קטן מדי: ${h} צריך להיות ${_}`}if(s.origin==="array"||s.origin==="set"){let _=s.origin==="set"?"צריכה":"צריך";if(s.minimum===1&&s.inclusive){let H=s.origin==="set"?"לפחות פריט אחד":"לפחות פריט אחד";return`קטן מדי: ${h} ${_} להכיל ${H}`}let S=s.inclusive?`${s.minimum} ${d?.unit??""} או יותר`:`יותר מ-${s.minimum} ${d?.unit??""}`;return`קטן מדי: ${h} ${_} להכיל ${S}`.trim()}let b=s.inclusive?">=":">",p=i(s.origin??"value");if(d?.unit)return`${d.shortLabel} מדי: ${h} ${p} ${b}${s.minimum.toString()} ${d.unit}`;return`${d?.shortLabel??"קטן"} מדי: ${h} ${p} ${b}${s.minimum.toString()}`}case"invalid_format":{let d=s;if(d.format==="starts_with")return`המחרוזת חייבת להתחיל ב "${d.prefix}"`;if(d.format==="ends_with")return`המחרוזת חייבת להסתיים ב "${d.suffix}"`;if(d.format==="includes")return`המחרוזת חייבת לכלול "${d.includes}"`;if(d.format==="regex")return`המחרוזת חייבת להתאים לתבנית ${d.pattern}`;let h=c[d.format],b=h?.label??d.format,_=(h?.gender??"m")==="f"?"תקינה":"תקין";return`${b} לא ${_}`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${s.divisor}`;case"unrecognized_keys":return`מפתח${s.keys.length>1?"ות":""} לא מזוה${s.keys.length>1?"ים":"ה"}: ${f(s.keys,", ")}`;case"invalid_key":return"שדה לא תקין באובייקט";case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${o(s.origin??"array")}`;default:return"קלט לא תקין"}}};var qk=g(()=>{x()});function Lh(){return{localeError:FL()}}var FL=()=>{let e={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function t(o){return e[o]??null}let r={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"},n={nan:"NaN",number:"szám",array:"tömb"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Érvénytelen bemenet: a várt érték instanceof ${o.expected}, a kapott érték ${c}`;return`Érvénytelen bemenet: a várt érték ${i}, a kapott érték ${c}`}case"invalid_value":if(o.values.length===1)return`Érvénytelen bemenet: a várt érték ${k(o.values[0])}`;return`Érvénytelen opció: valamelyik érték várt ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Túl nagy: ${o.origin??"érték"} mérete túl nagy ${i}${o.maximum.toString()} ${a.unit??"elem"}`;return`Túl nagy: a bemeneti érték ${o.origin??"érték"} túl nagy: ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Túl kicsi: a bemeneti érték ${o.origin} mérete túl kicsi ${i}${o.minimum.toString()} ${a.unit}`;return`Túl kicsi: a bemeneti érték ${o.origin} túl kicsi ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie`;if(i.format==="ends_with")return`Érvénytelen string: "${i.suffix}" értékkel kell végződnie`;if(i.format==="includes")return`Érvénytelen string: "${i.includes}" értéket kell tartalmaznia`;if(i.format==="regex")return`Érvénytelen string: ${i.pattern} mintának kell megfelelnie`;return`Érvénytelen ${r[i.format]??o.format}`}case"not_multiple_of":return`Érvénytelen szám: ${o.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${o.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${o.origin}`;default:return"Érvénytelen bemenet"}}};var Vk=g(()=>{x()});function Wk(e,t,r){return Math.abs(e)===1?t:r}function Oo(e){if(!e)return"";let t=["ա","ե","ը","ի","ո","ու","օ"],r=e[e.length-1];return e+(t.includes(r)?"ն":"ը")}function Nh(){return{localeError:KL()}}var KL=()=>{let e={string:{unit:{one:"նշան",many:"նշաններ"},verb:"ունենալ"},file:{unit:{one:"բայթ",many:"բայթեր"},verb:"ունենալ"},array:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"},set:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"}};function t(o){return e[o]??null}let r={regex:"մուտք",email:"էլ. հասցե",url:"URL",emoji:"էմոջի",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO ամսաթիվ և ժամ",date:"ISO ամսաթիվ",time:"ISO ժամ",duration:"ISO տևողություն",ipv4:"IPv4 հասցե",ipv6:"IPv6 հասցե",cidrv4:"IPv4 միջակայք",cidrv6:"IPv6 միջակայք",base64:"base64 ձևաչափով տող",base64url:"base64url ձևաչափով տող",json_string:"JSON տող",e164:"E.164 համար",jwt:"JWT",template_literal:"մուտք"},n={nan:"NaN",number:"թիվ",array:"զանգված"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Սխալ մուտքագրում․ սպասվում էր instanceof ${o.expected}, ստացվել է ${c}`;return`Սխալ մուտքագրում․ սպասվում էր ${i}, ստացվել է ${c}`}case"invalid_value":if(o.values.length===1)return`Սխալ մուտքագրում․ սպասվում էր ${k(o.values[1])}`;return`Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a){let c=Number(o.maximum),u=Wk(c,a.unit.one,a.unit.many);return`Չափազանց մեծ արժեք․ սպասվում է, որ ${Oo(o.origin??"արժեք")} կունենա ${i}${o.maximum.toString()} ${u}`}return`Չափազանց մեծ արժեք․ սպասվում է, որ ${Oo(o.origin??"արժեք")} լինի ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a){let c=Number(o.minimum),u=Wk(c,a.unit.one,a.unit.many);return`Չափազանց փոքր արժեք․ սպասվում է, որ ${Oo(o.origin)} կունենա ${i}${o.minimum.toString()} ${u}`}return`Չափազանց փոքր արժեք․ սպասվում է, որ ${Oo(o.origin)} լինի ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Սխալ տող․ պետք է սկսվի "${i.prefix}"-ով`;if(i.format==="ends_with")return`Սխալ տող․ պետք է ավարտվի "${i.suffix}"-ով`;if(i.format==="includes")return`Սխալ տող․ պետք է պարունակի "${i.includes}"`;if(i.format==="regex")return`Սխալ տող․ պետք է համապատասխանի ${i.pattern} ձևաչափին`;return`Սխալ ${r[i.format]??o.format}`}case"not_multiple_of":return`Սխալ թիվ․ պետք է բազմապատիկ լինի ${o.divisor}-ի`;case"unrecognized_keys":return`Չճանաչված բանալի${o.keys.length>1?"ներ":""}. ${f(o.keys,", ")}`;case"invalid_key":return`Սխալ բանալի ${Oo(o.origin)}-ում`;case"invalid_union":return"Սխալ մուտքագրում";case"invalid_element":return`Սխալ արժեք ${Oo(o.origin)}-ում`;default:return"Սխալ մուտքագրում"}}};var Yk=g(()=>{x()});function Ch(){return{localeError:BL()}}var BL=()=>{let e={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function t(o){return e[o]??null}let r={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Input tidak valid: diharapkan instanceof ${o.expected}, diterima ${c}`;return`Input tidak valid: diharapkan ${i}, diterima ${c}`}case"invalid_value":if(o.values.length===1)return`Input tidak valid: diharapkan ${k(o.values[0])}`;return`Pilihan tidak valid: diharapkan salah satu dari ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Terlalu besar: diharapkan ${o.origin??"value"} memiliki ${i}${o.maximum.toString()} ${a.unit??"elemen"}`;return`Terlalu besar: diharapkan ${o.origin??"value"} menjadi ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Terlalu kecil: diharapkan ${o.origin} memiliki ${i}${o.minimum.toString()} ${a.unit}`;return`Terlalu kecil: diharapkan ${o.origin} menjadi ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`String tidak valid: harus dimulai dengan "${i.prefix}"`;if(i.format==="ends_with")return`String tidak valid: harus berakhir dengan "${i.suffix}"`;if(i.format==="includes")return`String tidak valid: harus menyertakan "${i.includes}"`;if(i.format==="regex")return`String tidak valid: harus sesuai pola ${i.pattern}`;return`${r[i.format]??o.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${o.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${o.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${o.origin}`;default:return"Input tidak valid"}}};var Xk=g(()=>{x()});function xh(){return{localeError:GL()}}var GL=()=>{let e={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function t(o){return e[o]??null}let r={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"},n={nan:"NaN",number:"númer",array:"fylki"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Rangt gildi: Þú slóst inn ${c} þar sem á að vera instanceof ${o.expected}`;return`Rangt gildi: Þú slóst inn ${c} þar sem á að vera ${i}`}case"invalid_value":if(o.values.length===1)return`Rangt gildi: gert ráð fyrir ${k(o.values[0])}`;return`Ógilt val: má vera eitt af eftirfarandi ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Of stórt: gert er ráð fyrir að ${o.origin??"gildi"} hafi ${i}${o.maximum.toString()} ${a.unit??"hluti"}`;return`Of stórt: gert er ráð fyrir að ${o.origin??"gildi"} sé ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Of lítið: gert er ráð fyrir að ${o.origin} hafi ${i}${o.minimum.toString()} ${a.unit}`;return`Of lítið: gert er ráð fyrir að ${o.origin} sé ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ógildur strengur: verður að byrja á "${i.prefix}"`;if(i.format==="ends_with")return`Ógildur strengur: verður að enda á "${i.suffix}"`;if(i.format==="includes")return`Ógildur strengur: verður að innihalda "${i.includes}"`;if(i.format==="regex")return`Ógildur strengur: verður að fylgja mynstri ${i.pattern}`;return`Rangt ${r[i.format]??o.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${o.divisor}`;case"unrecognized_keys":return`Óþekkt ${o.keys.length>1?"ir lyklar":"ur lykill"}: ${f(o.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${o.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${o.origin}`;default:return"Rangt gildi"}}};var Zk=g(()=>{x()});function zh(){return{localeError:HL()}}var HL=()=>{let e={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function t(o){return e[o]??null}let r={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"numero",array:"vettore"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Input non valido: atteso instanceof ${o.expected}, ricevuto ${c}`;return`Input non valido: atteso ${i}, ricevuto ${c}`}case"invalid_value":if(o.values.length===1)return`Input non valido: atteso ${k(o.values[0])}`;return`Opzione non valida: atteso uno tra ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Troppo grande: ${o.origin??"valore"} deve avere ${i}${o.maximum.toString()} ${a.unit??"elementi"}`;return`Troppo grande: ${o.origin??"valore"} deve essere ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Troppo piccolo: ${o.origin} deve avere ${i}${o.minimum.toString()} ${a.unit}`;return`Troppo piccolo: ${o.origin} deve essere ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Stringa non valida: deve iniziare con "${i.prefix}"`;if(i.format==="ends_with")return`Stringa non valida: deve terminare con "${i.suffix}"`;if(i.format==="includes")return`Stringa non valida: deve includere "${i.includes}"`;if(i.format==="regex")return`Stringa non valida: deve corrispondere al pattern ${i.pattern}`;return`Invalid ${r[i.format]??o.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${o.divisor}`;case"unrecognized_keys":return`Chiav${o.keys.length>1?"i":"e"} non riconosciut${o.keys.length>1?"e":"a"}: ${f(o.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${o.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${o.origin}`;default:return"Input non valido"}}};var Qk=g(()=>{x()});function jh(){return{localeError:ML()}}var ML=()=>{let e={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function t(o){return e[o]??null}let r={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"},n={nan:"NaN",number:"数値",array:"配列"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`無効な入力: instanceof ${o.expected}が期待されましたが、${c}が入力されました`;return`無効な入力: ${i}が期待されましたが、${c}が入力されました`}case"invalid_value":if(o.values.length===1)return`無効な入力: ${k(o.values[0])}が期待されました`;return`無効な選択: ${f(o.values,"、")}のいずれかである必要があります`;case"too_big":{let i=o.inclusive?"以下である":"より小さい",a=t(o.origin);if(a)return`大きすぎる値: ${o.origin??"値"}は${o.maximum.toString()}${a.unit??"要素"}${i}必要があります`;return`大きすぎる値: ${o.origin??"値"}は${o.maximum.toString()}${i}必要があります`}case"too_small":{let i=o.inclusive?"以上である":"より大きい",a=t(o.origin);if(a)return`小さすぎる値: ${o.origin}は${o.minimum.toString()}${a.unit}${i}必要があります`;return`小さすぎる値: ${o.origin}は${o.minimum.toString()}${i}必要があります`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`無効な文字列: "${i.prefix}"で始まる必要があります`;if(i.format==="ends_with")return`無効な文字列: "${i.suffix}"で終わる必要があります`;if(i.format==="includes")return`無効な文字列: "${i.includes}"を含む必要があります`;if(i.format==="regex")return`無効な文字列: パターン${i.pattern}に一致する必要があります`;return`無効な${r[i.format]??o.format}`}case"not_multiple_of":return`無効な数値: ${o.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${o.keys.length>1?"群":""}: ${f(o.keys,"、")}`;case"invalid_key":return`${o.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${o.origin}内の無効な値`;default:return"無効な入力"}}};var ew=g(()=>{x()});function Eh(){return{localeError:JL()}}var JL=()=>{let e={string:{unit:"სიმბოლო",verb:"უნდა შეიცავდეს"},file:{unit:"ბაიტი",verb:"უნდა შეიცავდეს"},array:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"},set:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"}};function t(o){return e[o]??null}let r={regex:"შეყვანა",email:"ელ-ფოსტის მისამართი",url:"URL",emoji:"ემოჯი",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"თარიღი-დრო",date:"თარიღი",time:"დრო",duration:"ხანგრძლივობა",ipv4:"IPv4 მისამართი",ipv6:"IPv6 მისამართი",cidrv4:"IPv4 დიაპაზონი",cidrv6:"IPv6 დიაპაზონი",base64:"base64-კოდირებული სტრინგი",base64url:"base64url-კოდირებული სტრინგი",json_string:"JSON სტრინგი",e164:"E.164 ნომერი",jwt:"JWT",template_literal:"შეყვანა"},n={nan:"NaN",number:"რიცხვი",string:"სტრინგი",boolean:"ბულეანი",function:"ფუნქცია",array:"მასივი"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`არასწორი შეყვანა: მოსალოდნელი instanceof ${o.expected}, მიღებული ${c}`;return`არასწორი შეყვანა: მოსალოდნელი ${i}, მიღებული ${c}`}case"invalid_value":if(o.values.length===1)return`არასწორი შეყვანა: მოსალოდნელი ${k(o.values[0])}`;return`არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${f(o.values,"|")}-დან`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`ზედმეტად დიდი: მოსალოდნელი ${o.origin??"მნიშვნელობა"} ${a.verb} ${i}${o.maximum.toString()} ${a.unit}`;return`ზედმეტად დიდი: მოსალოდნელი ${o.origin??"მნიშვნელობა"} იყოს ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`ზედმეტად პატარა: მოსალოდნელი ${o.origin} ${a.verb} ${i}${o.minimum.toString()} ${a.unit}`;return`ზედმეტად პატარა: მოსალოდნელი ${o.origin} იყოს ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`არასწორი სტრინგი: უნდა იწყებოდეს "${i.prefix}"-ით`;if(i.format==="ends_with")return`არასწორი სტრინგი: უნდა მთავრდებოდეს "${i.suffix}"-ით`;if(i.format==="includes")return`არასწორი სტრინგი: უნდა შეიცავდეს "${i.includes}"-ს`;if(i.format==="regex")return`არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${i.pattern}`;return`არასწორი ${r[i.format]??o.format}`}case"not_multiple_of":return`არასწორი რიცხვი: უნდა იყოს ${o.divisor}-ის ჯერადი`;case"unrecognized_keys":return`უცნობი გასაღებ${o.keys.length>1?"ები":"ი"}: ${f(o.keys,", ")}`;case"invalid_key":return`არასწორი გასაღები ${o.origin}-ში`;case"invalid_union":return"არასწორი შეყვანა";case"invalid_element":return`არასწორი მნიშვნელობა ${o.origin}-ში`;default:return"არასწორი შეყვანა"}}};var tw=g(()=>{x()});function Vr(){return{localeError:qL()}}var qL=()=>{let e={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function t(o){return e[o]??null}let r={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"},n={nan:"NaN",number:"លេខ",array:"អារេ (Array)",null:"គ្មានតម្លៃ (null)"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${o.expected} ប៉ុន្តែទទួលបាន ${c}`;return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i} ប៉ុន្តែទទួលបាន ${c}`}case"invalid_value":if(o.values.length===1)return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${k(o.values[0])}`;return`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`ធំពេក៖ ត្រូវការ ${o.origin??"តម្លៃ"} ${i} ${o.maximum.toString()} ${a.unit??"ធាតុ"}`;return`ធំពេក៖ ត្រូវការ ${o.origin??"តម្លៃ"} ${i} ${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`តូចពេក៖ ត្រូវការ ${o.origin} ${i} ${o.minimum.toString()} ${a.unit}`;return`តូចពេក៖ ត្រូវការ ${o.origin} ${i} ${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"`;if(i.format==="ends_with")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"`;if(i.format==="includes")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"`;if(i.format==="regex")return`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}`;return`មិនត្រឹមត្រូវ៖ ${r[i.format]??o.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${o.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${f(o.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${o.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${o.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};var Uh=g(()=>{x()});function Rh(){return Vr()}var ow=g(()=>{Uh()});function Fh(){return{localeError:VL()}}var VL=()=>{let e={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function t(o){return e[o]??null}let r={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`잘못된 입력: 예상 타입은 instanceof ${o.expected}, 받은 타입은 ${c}입니다`;return`잘못된 입력: 예상 타입은 ${i}, 받은 타입은 ${c}입니다`}case"invalid_value":if(o.values.length===1)return`잘못된 입력: 값은 ${k(o.values[0])} 이어야 합니다`;return`잘못된 옵션: ${f(o.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{let i=o.inclusive?"이하":"미만",a=i==="미만"?"이어야 합니다":"여야 합니다",c=t(o.origin),u=c?.unit??"요소";if(c)return`${o.origin??"값"}이 너무 큽니다: ${o.maximum.toString()}${u} ${i}${a}`;return`${o.origin??"값"}이 너무 큽니다: ${o.maximum.toString()} ${i}${a}`}case"too_small":{let i=o.inclusive?"이상":"초과",a=i==="이상"?"이어야 합니다":"여야 합니다",c=t(o.origin),u=c?.unit??"요소";if(c)return`${o.origin??"값"}이 너무 작습니다: ${o.minimum.toString()}${u} ${i}${a}`;return`${o.origin??"값"}이 너무 작습니다: ${o.minimum.toString()} ${i}${a}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다`;if(i.format==="ends_with")return`잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다`;if(i.format==="includes")return`잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다`;if(i.format==="regex")return`잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다`;return`잘못된 ${r[i.format]??o.format}`}case"not_multiple_of":return`잘못된 숫자: ${o.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${f(o.keys,", ")}`;case"invalid_key":return`잘못된 키: ${o.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${o.origin}`;default:return"잘못된 입력"}}};var rw=g(()=>{x()});function nw(e){let t=Math.abs(e),r=t%10,n=t%100;if(n>=11&&n<=19||r===0)return"many";if(r===1)return"one";return"few"}function Kh(){return{localeError:WL()}}var Wr=(e)=>{return e.charAt(0).toUpperCase()+e.slice(1)},WL=()=>{let e={string:{unit:{one:"simbolis",few:"simboliai",many:"simbolių"},verb:{smaller:{inclusive:"turi būti ne ilgesnė kaip",notInclusive:"turi būti trumpesnė kaip"},bigger:{inclusive:"turi būti ne trumpesnė kaip",notInclusive:"turi būti ilgesnė kaip"}}},file:{unit:{one:"baitas",few:"baitai",many:"baitų"},verb:{smaller:{inclusive:"turi būti ne didesnis kaip",notInclusive:"turi būti mažesnis kaip"},bigger:{inclusive:"turi būti ne mažesnis kaip",notInclusive:"turi būti didesnis kaip"}}},array:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}},set:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}}};function t(o,i,a,c){let u=e[o]??null;if(u===null)return u;return{unit:u.unit[i],verb:u.verb[c][a?"inclusive":"notInclusive"]}}let r={regex:"įvestis",email:"el. pašto adresas",url:"URL",emoji:"jaustukas",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO data ir laikas",date:"ISO data",time:"ISO laikas",duration:"ISO trukmė",ipv4:"IPv4 adresas",ipv6:"IPv6 adresas",cidrv4:"IPv4 tinklo prefiksas (CIDR)",cidrv6:"IPv6 tinklo prefiksas (CIDR)",base64:"base64 užkoduota eilutė",base64url:"base64url užkoduota eilutė",json_string:"JSON eilutė",e164:"E.164 numeris",jwt:"JWT",template_literal:"įvestis"},n={nan:"NaN",number:"skaičius",bigint:"sveikasis skaičius",string:"eilutė",boolean:"loginė reikšmė",undefined:"neapibrėžta reikšmė",function:"funkcija",symbol:"simbolis",array:"masyvas",object:"objektas",null:"nulinė reikšmė"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Gautas tipas ${c}, o tikėtasi - instanceof ${o.expected}`;return`Gautas tipas ${c}, o tikėtasi - ${i}`}case"invalid_value":if(o.values.length===1)return`Privalo būti ${k(o.values[0])}`;return`Privalo būti vienas iš ${f(o.values,"|")} pasirinkimų`;case"too_big":{let i=n[o.origin]??o.origin,a=t(o.origin,nw(Number(o.maximum)),o.inclusive??!1,"smaller");if(a?.verb)return`${Wr(i??o.origin??"reikšmė")} ${a.verb} ${o.maximum.toString()} ${a.unit??"elementų"}`;let c=o.inclusive?"ne didesnis kaip":"mažesnis kaip";return`${Wr(i??o.origin??"reikšmė")} turi būti ${c} ${o.maximum.toString()} ${a?.unit}`}case"too_small":{let i=n[o.origin]??o.origin,a=t(o.origin,nw(Number(o.minimum)),o.inclusive??!1,"bigger");if(a?.verb)return`${Wr(i??o.origin??"reikšmė")} ${a.verb} ${o.minimum.toString()} ${a.unit??"elementų"}`;let c=o.inclusive?"ne mažesnis kaip":"didesnis kaip";return`${Wr(i??o.origin??"reikšmė")} turi būti ${c} ${o.minimum.toString()} ${a?.unit}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Eilutė privalo prasidėti "${i.prefix}"`;if(i.format==="ends_with")return`Eilutė privalo pasibaigti "${i.suffix}"`;if(i.format==="includes")return`Eilutė privalo įtraukti "${i.includes}"`;if(i.format==="regex")return`Eilutė privalo atitikti ${i.pattern}`;return`Neteisingas ${r[i.format]??o.format}`}case"not_multiple_of":return`Skaičius privalo būti ${o.divisor} kartotinis.`;case"unrecognized_keys":return`Neatpažint${o.keys.length>1?"i":"as"} rakt${o.keys.length>1?"ai":"as"}: ${f(o.keys,", ")}`;case"invalid_key":return"Rastas klaidingas raktas";case"invalid_union":return"Klaidinga įvestis";case"invalid_element":{let i=n[o.origin]??o.origin;return`${Wr(i??o.origin??"reikšmė")} turi klaidingą įvestį`}default:return"Klaidinga įvestis"}}};var iw=g(()=>{x()});function Bh(){return{localeError:YL()}}var YL=()=>{let e={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function t(o){return e[o]??null}let r={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"},n={nan:"NaN",number:"број",array:"низа"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Грешен внес: се очекува instanceof ${o.expected}, примено ${c}`;return`Грешен внес: се очекува ${i}, примено ${c}`}case"invalid_value":if(o.values.length===1)return`Invalid input: expected ${k(o.values[0])}`;return`Грешана опција: се очекува една ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Премногу голем: се очекува ${o.origin??"вредноста"} да има ${i}${o.maximum.toString()} ${a.unit??"елементи"}`;return`Премногу голем: се очекува ${o.origin??"вредноста"} да биде ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Премногу мал: се очекува ${o.origin} да има ${i}${o.minimum.toString()} ${a.unit}`;return`Премногу мал: се очекува ${o.origin} да биде ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Неважечка низа: мора да започнува со "${i.prefix}"`;if(i.format==="ends_with")return`Неважечка низа: мора да завршува со "${i.suffix}"`;if(i.format==="includes")return`Неважечка низа: мора да вклучува "${i.includes}"`;if(i.format==="regex")return`Неважечка низа: мора да одгоара на патернот ${i.pattern}`;return`Invalid ${r[i.format]??o.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${o.divisor}`;case"unrecognized_keys":return`${o.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${f(o.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${o.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${o.origin}`;default:return"Грешен внес"}}};var aw=g(()=>{x()});function Gh(){return{localeError:XL()}}var XL=()=>{let e={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function t(o){return e[o]??null}let r={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"nombor"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Input tidak sah: dijangka instanceof ${o.expected}, diterima ${c}`;return`Input tidak sah: dijangka ${i}, diterima ${c}`}case"invalid_value":if(o.values.length===1)return`Input tidak sah: dijangka ${k(o.values[0])}`;return`Pilihan tidak sah: dijangka salah satu daripada ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Terlalu besar: dijangka ${o.origin??"nilai"} ${a.verb} ${i}${o.maximum.toString()} ${a.unit??"elemen"}`;return`Terlalu besar: dijangka ${o.origin??"nilai"} adalah ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Terlalu kecil: dijangka ${o.origin} ${a.verb} ${i}${o.minimum.toString()} ${a.unit}`;return`Terlalu kecil: dijangka ${o.origin} adalah ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`String tidak sah: mesti bermula dengan "${i.prefix}"`;if(i.format==="ends_with")return`String tidak sah: mesti berakhir dengan "${i.suffix}"`;if(i.format==="includes")return`String tidak sah: mesti mengandungi "${i.includes}"`;if(i.format==="regex")return`String tidak sah: mesti sepadan dengan corak ${i.pattern}`;return`${r[i.format]??o.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${o.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${f(o.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${o.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${o.origin}`;default:return"Input tidak sah"}}};var cw=g(()=>{x()});function Hh(){return{localeError:ZL()}}var ZL=()=>{let e={string:{unit:"tekens",verb:"heeft"},file:{unit:"bytes",verb:"heeft"},array:{unit:"elementen",verb:"heeft"},set:{unit:"elementen",verb:"heeft"}};function t(o){return e[o]??null}let r={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"},n={nan:"NaN",number:"getal"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Ongeldige invoer: verwacht instanceof ${o.expected}, ontving ${c}`;return`Ongeldige invoer: verwacht ${i}, ontving ${c}`}case"invalid_value":if(o.values.length===1)return`Ongeldige invoer: verwacht ${k(o.values[0])}`;return`Ongeldige optie: verwacht één van ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin),c=o.origin==="date"?"laat":o.origin==="string"?"lang":"groot";if(a)return`Te ${c}: verwacht dat ${o.origin??"waarde"} ${i}${o.maximum.toString()} ${a.unit??"elementen"} ${a.verb}`;return`Te ${c}: verwacht dat ${o.origin??"waarde"} ${i}${o.maximum.toString()} is`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin),c=o.origin==="date"?"vroeg":o.origin==="string"?"kort":"klein";if(a)return`Te ${c}: verwacht dat ${o.origin} ${i}${o.minimum.toString()} ${a.unit} ${a.verb}`;return`Te ${c}: verwacht dat ${o.origin} ${i}${o.minimum.toString()} is`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ongeldige tekst: moet met "${i.prefix}" beginnen`;if(i.format==="ends_with")return`Ongeldige tekst: moet op "${i.suffix}" eindigen`;if(i.format==="includes")return`Ongeldige tekst: moet "${i.includes}" bevatten`;if(i.format==="regex")return`Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}`;return`Ongeldig: ${r[i.format]??o.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${o.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${o.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${o.origin}`;default:return"Ongeldige invoer"}}};var lw=g(()=>{x()});function Mh(){return{localeError:QL()}}var QL=()=>{let e={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function t(o){return e[o]??null}let r={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"tall",array:"liste"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Ugyldig input: forventet instanceof ${o.expected}, fikk ${c}`;return`Ugyldig input: forventet ${i}, fikk ${c}`}case"invalid_value":if(o.values.length===1)return`Ugyldig verdi: forventet ${k(o.values[0])}`;return`Ugyldig valg: forventet en av ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`For stor(t): forventet ${o.origin??"value"} til å ha ${i}${o.maximum.toString()} ${a.unit??"elementer"}`;return`For stor(t): forventet ${o.origin??"value"} til å ha ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`For lite(n): forventet ${o.origin} til å ha ${i}${o.minimum.toString()} ${a.unit}`;return`For lite(n): forventet ${o.origin} til å ha ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ugyldig streng: må starte med "${i.prefix}"`;if(i.format==="ends_with")return`Ugyldig streng: må ende med "${i.suffix}"`;if(i.format==="includes")return`Ugyldig streng: må inneholde "${i.includes}"`;if(i.format==="regex")return`Ugyldig streng: må matche mønsteret ${i.pattern}`;return`Ugyldig ${r[i.format]??o.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${o.divisor}`;case"unrecognized_keys":return`${o.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${f(o.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${o.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${o.origin}`;default:return"Ugyldig input"}}};var uw=g(()=>{x()});function Jh(){return{localeError:eN()}}var eN=()=>{let e={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function t(o){return e[o]??null}let r={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"},n={nan:"NaN",number:"numara",array:"saf",null:"gayb"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Fâsit giren: umulan instanceof ${o.expected}, alınan ${c}`;return`Fâsit giren: umulan ${i}, alınan ${c}`}case"invalid_value":if(o.values.length===1)return`Fâsit giren: umulan ${k(o.values[0])}`;return`Fâsit tercih: mûteberler ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Fazla büyük: ${o.origin??"value"}, ${i}${o.maximum.toString()} ${a.unit??"elements"} sahip olmalıydı.`;return`Fazla büyük: ${o.origin??"value"}, ${i}${o.maximum.toString()} olmalıydı.`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Fazla küçük: ${o.origin}, ${i}${o.minimum.toString()} ${a.unit} sahip olmalıydı.`;return`Fazla küçük: ${o.origin}, ${i}${o.minimum.toString()} olmalıydı.`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Fâsit metin: "${i.prefix}" ile başlamalı.`;if(i.format==="ends_with")return`Fâsit metin: "${i.suffix}" ile bitmeli.`;if(i.format==="includes")return`Fâsit metin: "${i.includes}" ihtivâ etmeli.`;if(i.format==="regex")return`Fâsit metin: ${i.pattern} nakşına uymalı.`;return`Fâsit ${r[i.format]??o.format}`}case"not_multiple_of":return`Fâsit sayı: ${o.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`${o.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${o.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};var sw=g(()=>{x()});function qh(){return{localeError:tN()}}var tN=()=>{let e={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function t(o){return e[o]??null}let r={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"},n={nan:"NaN",number:"عدد",array:"ارې"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`ناسم ورودي: باید instanceof ${o.expected} وای, مګر ${c} ترلاسه شو`;return`ناسم ورودي: باید ${i} وای, مګر ${c} ترلاسه شو`}case"invalid_value":if(o.values.length===1)return`ناسم ورودي: باید ${k(o.values[0])} وای`;return`ناسم انتخاب: باید یو له ${f(o.values,"|")} څخه وای`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`ډیر لوی: ${o.origin??"ارزښت"} باید ${i}${o.maximum.toString()} ${a.unit??"عنصرونه"} ولري`;return`ډیر لوی: ${o.origin??"ارزښت"} باید ${i}${o.maximum.toString()} وي`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`ډیر کوچنی: ${o.origin} باید ${i}${o.minimum.toString()} ${a.unit} ولري`;return`ډیر کوچنی: ${o.origin} باید ${i}${o.minimum.toString()} وي`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`ناسم متن: باید د "${i.prefix}" سره پیل شي`;if(i.format==="ends_with")return`ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي`;if(i.format==="includes")return`ناسم متن: باید "${i.includes}" ولري`;if(i.format==="regex")return`ناسم متن: باید د ${i.pattern} سره مطابقت ولري`;return`${r[i.format]??o.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${o.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${o.keys.length>1?"کلیډونه":"کلیډ"}: ${f(o.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${o.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${o.origin} کې`;default:return"ناسمه ورودي"}}};var hw=g(()=>{x()});function Vh(){return{localeError:oN()}}var oN=()=>{let e={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function t(o){return e[o]??null}let r={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"},n={nan:"NaN",number:"liczba",array:"tablica"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Nieprawidłowe dane wejściowe: oczekiwano instanceof ${o.expected}, otrzymano ${c}`;return`Nieprawidłowe dane wejściowe: oczekiwano ${i}, otrzymano ${c}`}case"invalid_value":if(o.values.length===1)return`Nieprawidłowe dane wejściowe: oczekiwano ${k(o.values[0])}`;return`Nieprawidłowa opcja: oczekiwano jednej z wartości ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Za duża wartość: oczekiwano, że ${o.origin??"wartość"} będzie mieć ${i}${o.maximum.toString()} ${a.unit??"elementów"}`;return`Zbyt duż(y/a/e): oczekiwano, że ${o.origin??"wartość"} będzie wynosić ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Za mała wartość: oczekiwano, że ${o.origin??"wartość"} będzie mieć ${i}${o.minimum.toString()} ${a.unit??"elementów"}`;return`Zbyt mał(y/a/e): oczekiwano, że ${o.origin??"wartość"} będzie wynosić ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"`;if(i.format==="ends_with")return`Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"`;if(i.format==="includes")return`Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"`;if(i.format==="regex")return`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}`;return`Nieprawidłow(y/a/e) ${r[i.format]??o.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${o.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${o.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${o.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};var dw=g(()=>{x()});function Wh(){return{localeError:rN()}}var rN=()=>{let e={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function t(o){return e[o]??null}let r={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},n={nan:"NaN",number:"número",null:"nulo"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Tipo inválido: esperado instanceof ${o.expected}, recebido ${c}`;return`Tipo inválido: esperado ${i}, recebido ${c}`}case"invalid_value":if(o.values.length===1)return`Entrada inválida: esperado ${k(o.values[0])}`;return`Opção inválida: esperada uma das ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Muito grande: esperado que ${o.origin??"valor"} tivesse ${i}${o.maximum.toString()} ${a.unit??"elementos"}`;return`Muito grande: esperado que ${o.origin??"valor"} fosse ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Muito pequeno: esperado que ${o.origin} tivesse ${i}${o.minimum.toString()} ${a.unit}`;return`Muito pequeno: esperado que ${o.origin} fosse ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Texto inválido: deve começar com "${i.prefix}"`;if(i.format==="ends_with")return`Texto inválido: deve terminar com "${i.suffix}"`;if(i.format==="includes")return`Texto inválido: deve incluir "${i.includes}"`;if(i.format==="regex")return`Texto inválido: deve corresponder ao padrão ${i.pattern}`;return`${r[i.format]??o.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${o.divisor}`;case"unrecognized_keys":return`Chave${o.keys.length>1?"s":""} desconhecida${o.keys.length>1?"s":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Chave inválida em ${o.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${o.origin}`;default:return"Campo inválido"}}};var gw=g(()=>{x()});function bw(e,t,r,n){let o=Math.abs(e),i=o%10,a=o%100;if(a>=11&&a<=19)return n;if(i===1)return t;if(i>=2&&i<=4)return r;return n}function Yh(){return{localeError:nN()}}var nN=()=>{let e={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function t(o){return e[o]??null}let r={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"},n={nan:"NaN",number:"число",array:"массив"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Неверный ввод: ожидалось instanceof ${o.expected}, получено ${c}`;return`Неверный ввод: ожидалось ${i}, получено ${c}`}case"invalid_value":if(o.values.length===1)return`Неверный ввод: ожидалось ${k(o.values[0])}`;return`Неверный вариант: ожидалось одно из ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a){let c=Number(o.maximum),u=bw(c,a.unit.one,a.unit.few,a.unit.many);return`Слишком большое значение: ожидалось, что ${o.origin??"значение"} будет иметь ${i}${o.maximum.toString()} ${u}`}return`Слишком большое значение: ожидалось, что ${o.origin??"значение"} будет ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a){let c=Number(o.minimum),u=bw(c,a.unit.one,a.unit.few,a.unit.many);return`Слишком маленькое значение: ожидалось, что ${o.origin} будет иметь ${i}${o.minimum.toString()} ${u}`}return`Слишком маленькое значение: ожидалось, что ${o.origin} будет ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Неверная строка: должна начинаться с "${i.prefix}"`;if(i.format==="ends_with")return`Неверная строка: должна заканчиваться на "${i.suffix}"`;if(i.format==="includes")return`Неверная строка: должна содержать "${i.includes}"`;if(i.format==="regex")return`Неверная строка: должна соответствовать шаблону ${i.pattern}`;return`Неверный ${r[i.format]??o.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${o.divisor}`;case"unrecognized_keys":return`Нераспознанн${o.keys.length>1?"ые":"ый"} ключ${o.keys.length>1?"и":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${o.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${o.origin}`;default:return"Неверные входные данные"}}};var pw=g(()=>{x()});function Xh(){return{localeError:iN()}}var iN=()=>{let e={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function t(o){return e[o]??null}let r={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"},n={nan:"NaN",number:"število",array:"tabela"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Neveljaven vnos: pričakovano instanceof ${o.expected}, prejeto ${c}`;return`Neveljaven vnos: pričakovano ${i}, prejeto ${c}`}case"invalid_value":if(o.values.length===1)return`Neveljaven vnos: pričakovano ${k(o.values[0])}`;return`Neveljavna možnost: pričakovano eno izmed ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Preveliko: pričakovano, da bo ${o.origin??"vrednost"} imelo ${i}${o.maximum.toString()} ${a.unit??"elementov"}`;return`Preveliko: pričakovano, da bo ${o.origin??"vrednost"} ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Premajhno: pričakovano, da bo ${o.origin} imelo ${i}${o.minimum.toString()} ${a.unit}`;return`Premajhno: pričakovano, da bo ${o.origin} ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Neveljaven niz: mora se začeti z "${i.prefix}"`;if(i.format==="ends_with")return`Neveljaven niz: mora se končati z "${i.suffix}"`;if(i.format==="includes")return`Neveljaven niz: mora vsebovati "${i.includes}"`;if(i.format==="regex")return`Neveljaven niz: mora ustrezati vzorcu ${i.pattern}`;return`Neveljaven ${r[i.format]??o.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${o.divisor}`;case"unrecognized_keys":return`Neprepoznan${o.keys.length>1?"i ključi":" ključ"}: ${f(o.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${o.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${o.origin}`;default:return"Neveljaven vnos"}}};var mw=g(()=>{x()});function Zh(){return{localeError:aN()}}var aN=()=>{let e={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function t(o){return e[o]??null}let r={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"},n={nan:"NaN",number:"antal",array:"lista"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Ogiltig inmatning: förväntat instanceof ${o.expected}, fick ${c}`;return`Ogiltig inmatning: förväntat ${i}, fick ${c}`}case"invalid_value":if(o.values.length===1)return`Ogiltig inmatning: förväntat ${k(o.values[0])}`;return`Ogiltigt val: förväntade en av ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`För stor(t): förväntade ${o.origin??"värdet"} att ha ${i}${o.maximum.toString()} ${a.unit??"element"}`;return`För stor(t): förväntat ${o.origin??"värdet"} att ha ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`För lite(t): förväntade ${o.origin??"värdet"} att ha ${i}${o.minimum.toString()} ${a.unit}`;return`För lite(t): förväntade ${o.origin??"värdet"} att ha ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ogiltig sträng: måste börja med "${i.prefix}"`;if(i.format==="ends_with")return`Ogiltig sträng: måste sluta med "${i.suffix}"`;if(i.format==="includes")return`Ogiltig sträng: måste innehålla "${i.includes}"`;if(i.format==="regex")return`Ogiltig sträng: måste matcha mönstret "${i.pattern}"`;return`Ogiltig(t) ${r[i.format]??o.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${o.divisor}`;case"unrecognized_keys":return`${o.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${f(o.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${o.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${o.origin??"värdet"}`;default:return"Ogiltig input"}}};var yw=g(()=>{x()});function Qh(){return{localeError:cN()}}var cN=()=>{let e={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function t(o){return e[o]??null}let r={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"},n={nan:"NaN",number:"எண்",array:"அணி",null:"வெறுமை"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${o.expected}, பெறப்பட்டது ${c}`;return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i}, பெறப்பட்டது ${c}`}case"invalid_value":if(o.values.length===1)return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${k(o.values[0])}`;return`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${f(o.values,"|")} இல் ஒன்று`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${o.origin??"மதிப்பு"} ${i}${o.maximum.toString()} ${a.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`;return`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${o.origin??"மதிப்பு"} ${i}${o.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${o.origin} ${i}${o.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்`;return`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${o.origin} ${i}${o.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்`;if(i.format==="ends_with")return`தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்`;if(i.format==="includes")return`தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்`;if(i.format==="regex")return`தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;return`தவறான ${r[i.format]??o.format}`}case"not_multiple_of":return`தவறான எண்: ${o.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${o.keys.length>1?"கள்":""}: ${f(o.keys,", ")}`;case"invalid_key":return`${o.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${o.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};var vw=g(()=>{x()});function ed(){return{localeError:lN()}}var lN=()=>{let e={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function t(o){return e[o]??null}let r={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"},n={nan:"NaN",number:"ตัวเลข",array:"อาร์เรย์ (Array)",null:"ไม่มีค่า (null)"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${o.expected} แต่ได้รับ ${c}`;return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${i} แต่ได้รับ ${c}`}case"invalid_value":if(o.values.length===1)return`ค่าไม่ถูกต้อง: ควรเป็น ${k(o.values[0])}`;return`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"ไม่เกิน":"น้อยกว่า",a=t(o.origin);if(a)return`เกินกำหนด: ${o.origin??"ค่า"} ควรมี${i} ${o.maximum.toString()} ${a.unit??"รายการ"}`;return`เกินกำหนด: ${o.origin??"ค่า"} ควรมี${i} ${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?"อย่างน้อย":"มากกว่า",a=t(o.origin);if(a)return`น้อยกว่ากำหนด: ${o.origin} ควรมี${i} ${o.minimum.toString()} ${a.unit}`;return`น้อยกว่ากำหนด: ${o.origin} ควรมี${i} ${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"`;if(i.format==="ends_with")return`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"`;if(i.format==="includes")return`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ`;if(i.format==="regex")return`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}`;return`รูปแบบไม่ถูกต้อง: ${r[i.format]??o.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${o.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${f(o.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${o.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${o.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};var fw=g(()=>{x()});function td(){return{localeError:uN()}}var uN=()=>{let e={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function t(o){return e[o]??null}let r={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Geçersiz değer: beklenen instanceof ${o.expected}, alınan ${c}`;return`Geçersiz değer: beklenen ${i}, alınan ${c}`}case"invalid_value":if(o.values.length===1)return`Geçersiz değer: beklenen ${k(o.values[0])}`;return`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Çok büyük: beklenen ${o.origin??"değer"} ${i}${o.maximum.toString()} ${a.unit??"öğe"}`;return`Çok büyük: beklenen ${o.origin??"değer"} ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Çok küçük: beklenen ${o.origin} ${i}${o.minimum.toString()} ${a.unit}`;return`Çok küçük: beklenen ${o.origin} ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Geçersiz metin: "${i.prefix}" ile başlamalı`;if(i.format==="ends_with")return`Geçersiz metin: "${i.suffix}" ile bitmeli`;if(i.format==="includes")return`Geçersiz metin: "${i.includes}" içermeli`;if(i.format==="regex")return`Geçersiz metin: ${i.pattern} desenine uymalı`;return`Geçersiz ${r[i.format]??o.format}`}case"not_multiple_of":return`Geçersiz sayı: ${o.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${o.keys.length>1?"lar":""}: ${f(o.keys,", ")}`;case"invalid_key":return`${o.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${o.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};var Iw=g(()=>{x()});function Yr(){return{localeError:sN()}}var sN=()=>{let e={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function t(o){return e[o]??null}let r={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"},n={nan:"NaN",number:"число",array:"масив"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Неправильні вхідні дані: очікується instanceof ${o.expected}, отримано ${c}`;return`Неправильні вхідні дані: очікується ${i}, отримано ${c}`}case"invalid_value":if(o.values.length===1)return`Неправильні вхідні дані: очікується ${k(o.values[0])}`;return`Неправильна опція: очікується одне з ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Занадто велике: очікується, що ${o.origin??"значення"} ${a.verb} ${i}${o.maximum.toString()} ${a.unit??"елементів"}`;return`Занадто велике: очікується, що ${o.origin??"значення"} буде ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Занадто мале: очікується, що ${o.origin} ${a.verb} ${i}${o.minimum.toString()} ${a.unit}`;return`Занадто мале: очікується, що ${o.origin} буде ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Неправильний рядок: повинен починатися з "${i.prefix}"`;if(i.format==="ends_with")return`Неправильний рядок: повинен закінчуватися на "${i.suffix}"`;if(i.format==="includes")return`Неправильний рядок: повинен містити "${i.includes}"`;if(i.format==="regex")return`Неправильний рядок: повинен відповідати шаблону ${i.pattern}`;return`Неправильний ${r[i.format]??o.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${o.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${o.keys.length>1?"і":""}: ${f(o.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${o.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${o.origin}`;default:return"Неправильні вхідні дані"}}};var od=g(()=>{x()});function rd(){return Yr()}var kw=g(()=>{od()});function nd(){return{localeError:hN()}}var hN=()=>{let e={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function t(o){return e[o]??null}let r={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"},n={nan:"NaN",number:"نمبر",array:"آرے",null:"نل"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`غلط ان پٹ: instanceof ${o.expected} متوقع تھا، ${c} موصول ہوا`;return`غلط ان پٹ: ${i} متوقع تھا، ${c} موصول ہوا`}case"invalid_value":if(o.values.length===1)return`غلط ان پٹ: ${k(o.values[0])} متوقع تھا`;return`غلط آپشن: ${f(o.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`بہت بڑا: ${o.origin??"ویلیو"} کے ${i}${o.maximum.toString()} ${a.unit??"عناصر"} ہونے متوقع تھے`;return`بہت بڑا: ${o.origin??"ویلیو"} کا ${i}${o.maximum.toString()} ہونا متوقع تھا`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`بہت چھوٹا: ${o.origin} کے ${i}${o.minimum.toString()} ${a.unit} ہونے متوقع تھے`;return`بہت چھوٹا: ${o.origin} کا ${i}${o.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے`;if(i.format==="ends_with")return`غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے`;if(i.format==="includes")return`غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے`;if(i.format==="regex")return`غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے`;return`غلط ${r[i.format]??o.format}`}case"not_multiple_of":return`غلط نمبر: ${o.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${o.keys.length>1?"ز":""}: ${f(o.keys,"، ")}`;case"invalid_key":return`${o.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${o.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};var ww=g(()=>{x()});function id(){return{localeError:dN()}}var dN=()=>{let e={string:{unit:"belgi",verb:"bo‘lishi kerak"},file:{unit:"bayt",verb:"bo‘lishi kerak"},array:{unit:"element",verb:"bo‘lishi kerak"},set:{unit:"element",verb:"bo‘lishi kerak"}};function t(o){return e[o]??null}let r={regex:"kirish",email:"elektron pochta manzili",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO sana va vaqti",date:"ISO sana",time:"ISO vaqt",duration:"ISO davomiylik",ipv4:"IPv4 manzil",ipv6:"IPv6 manzil",mac:"MAC manzil",cidrv4:"IPv4 diapazon",cidrv6:"IPv6 diapazon",base64:"base64 kodlangan satr",base64url:"base64url kodlangan satr",json_string:"JSON satr",e164:"E.164 raqam",jwt:"JWT",template_literal:"kirish"},n={nan:"NaN",number:"raqam",array:"massiv"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Noto‘g‘ri kirish: kutilgan instanceof ${o.expected}, qabul qilingan ${c}`;return`Noto‘g‘ri kirish: kutilgan ${i}, qabul qilingan ${c}`}case"invalid_value":if(o.values.length===1)return`Noto‘g‘ri kirish: kutilgan ${k(o.values[0])}`;return`Noto‘g‘ri variant: quyidagilardan biri kutilgan ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Juda katta: kutilgan ${o.origin??"qiymat"} ${i}${o.maximum.toString()} ${a.unit} ${a.verb}`;return`Juda katta: kutilgan ${o.origin??"qiymat"} ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Juda kichik: kutilgan ${o.origin} ${i}${o.minimum.toString()} ${a.unit} ${a.verb}`;return`Juda kichik: kutilgan ${o.origin} ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Noto‘g‘ri satr: "${i.prefix}" bilan boshlanishi kerak`;if(i.format==="ends_with")return`Noto‘g‘ri satr: "${i.suffix}" bilan tugashi kerak`;if(i.format==="includes")return`Noto‘g‘ri satr: "${i.includes}" ni o‘z ichiga olishi kerak`;if(i.format==="regex")return`Noto‘g‘ri satr: ${i.pattern} shabloniga mos kelishi kerak`;return`Noto‘g‘ri ${r[i.format]??o.format}`}case"not_multiple_of":return`Noto‘g‘ri raqam: ${o.divisor} ning karralisi bo‘lishi kerak`;case"unrecognized_keys":return`Noma’lum kalit${o.keys.length>1?"lar":""}: ${f(o.keys,", ")}`;case"invalid_key":return`${o.origin} dagi kalit noto‘g‘ri`;case"invalid_union":return"Noto‘g‘ri kirish";case"invalid_element":return`${o.origin} da noto‘g‘ri qiymat`;default:return"Noto‘g‘ri kirish"}}};var $w=g(()=>{x()});function ad(){return{localeError:gN()}}var gN=()=>{let e={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function t(o){return e[o]??null}let r={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"},n={nan:"NaN",number:"số",array:"mảng"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Đầu vào không hợp lệ: mong đợi instanceof ${o.expected}, nhận được ${c}`;return`Đầu vào không hợp lệ: mong đợi ${i}, nhận được ${c}`}case"invalid_value":if(o.values.length===1)return`Đầu vào không hợp lệ: mong đợi ${k(o.values[0])}`;return`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Quá lớn: mong đợi ${o.origin??"giá trị"} ${a.verb} ${i}${o.maximum.toString()} ${a.unit??"phần tử"}`;return`Quá lớn: mong đợi ${o.origin??"giá trị"} ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Quá nhỏ: mong đợi ${o.origin} ${a.verb} ${i}${o.minimum.toString()} ${a.unit}`;return`Quá nhỏ: mong đợi ${o.origin} ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"`;if(i.format==="ends_with")return`Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"`;if(i.format==="includes")return`Chuỗi không hợp lệ: phải bao gồm "${i.includes}"`;if(i.format==="regex")return`Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}`;return`${r[i.format]??o.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${o.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${f(o.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${o.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${o.origin}`;default:return"Đầu vào không hợp lệ"}}};var _w=g(()=>{x()});function cd(){return{localeError:bN()}}var bN=()=>{let e={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function t(o){return e[o]??null}let r={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"},n={nan:"NaN",number:"数字",array:"数组",null:"空值(null)"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`无效输入：期望 instanceof ${o.expected}，实际接收 ${c}`;return`无效输入：期望 ${i}，实际接收 ${c}`}case"invalid_value":if(o.values.length===1)return`无效输入：期望 ${k(o.values[0])}`;return`无效选项：期望以下之一 ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`数值过大：期望 ${o.origin??"值"} ${i}${o.maximum.toString()} ${a.unit??"个元素"}`;return`数值过大：期望 ${o.origin??"值"} ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`数值过小：期望 ${o.origin} ${i}${o.minimum.toString()} ${a.unit}`;return`数值过小：期望 ${o.origin} ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`无效字符串：必须以 "${i.prefix}" 开头`;if(i.format==="ends_with")return`无效字符串：必须以 "${i.suffix}" 结尾`;if(i.format==="includes")return`无效字符串：必须包含 "${i.includes}"`;if(i.format==="regex")return`无效字符串：必须满足正则表达式 ${i.pattern}`;return`无效${r[i.format]??o.format}`}case"not_multiple_of":return`无效数字：必须是 ${o.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${f(o.keys,", ")}`;case"invalid_key":return`${o.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${o.origin} 中包含无效值(value)`;default:return"无效输入"}}};var Ow=g(()=>{x()});function ld(){return{localeError:pN()}}var pN=()=>{let e={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function t(o){return e[o]??null}let r={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"},n={nan:"NaN"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`無效的輸入值：預期為 instanceof ${o.expected}，但收到 ${c}`;return`無效的輸入值：預期為 ${i}，但收到 ${c}`}case"invalid_value":if(o.values.length===1)return`無效的輸入值：預期為 ${k(o.values[0])}`;return`無效的選項：預期為以下其中之一 ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`數值過大：預期 ${o.origin??"值"} 應為 ${i}${o.maximum.toString()} ${a.unit??"個元素"}`;return`數值過大：預期 ${o.origin??"值"} 應為 ${i}${o.maximum.toString()}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`數值過小：預期 ${o.origin} 應為 ${i}${o.minimum.toString()} ${a.unit}`;return`數值過小：預期 ${o.origin} 應為 ${i}${o.minimum.toString()}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`無效的字串：必須以 "${i.prefix}" 開頭`;if(i.format==="ends_with")return`無效的字串：必須以 "${i.suffix}" 結尾`;if(i.format==="includes")return`無效的字串：必須包含 "${i.includes}"`;if(i.format==="regex")return`無效的字串：必須符合格式 ${i.pattern}`;return`無效的 ${r[i.format]??o.format}`}case"not_multiple_of":return`無效的數字：必須為 ${o.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${o.keys.length>1?"們":""}：${f(o.keys,"、")}`;case"invalid_key":return`${o.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${o.origin} 中有無效的值`;default:return"無效的輸入值"}}};var Sw=g(()=>{x()});function ud(){return{localeError:mN()}}var mN=()=>{let e={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function t(o){return e[o]??null}let r={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"},n={nan:"NaN",number:"nọ́mbà",array:"akopọ"};return(o)=>{switch(o.code){case"invalid_type":{let i=n[o.expected]??o.expected,a=w(o.input),c=n[a]??a;if(/^[A-Z]/.test(o.expected))return`Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${o.expected}, àmọ̀ a rí ${c}`;return`Ìbáwọlé aṣìṣe: a ní láti fi ${i}, àmọ̀ a rí ${c}`}case"invalid_value":if(o.values.length===1)return`Ìbáwọlé aṣìṣe: a ní láti fi ${k(o.values[0])}`;return`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${f(o.values,"|")}`;case"too_big":{let i=o.inclusive?"<=":"<",a=t(o.origin);if(a)return`Tó pọ̀ jù: a ní láti jẹ́ pé ${o.origin??"iye"} ${a.verb} ${i}${o.maximum} ${a.unit}`;return`Tó pọ̀ jù: a ní láti jẹ́ ${i}${o.maximum}`}case"too_small":{let i=o.inclusive?">=":">",a=t(o.origin);if(a)return`Kéré ju: a ní láti jẹ́ pé ${o.origin} ${a.verb} ${i}${o.minimum} ${a.unit}`;return`Kéré ju: a ní láti jẹ́ ${i}${o.minimum}`}case"invalid_format":{let i=o;if(i.format==="starts_with")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"`;if(i.format==="ends_with")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"`;if(i.format==="includes")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"`;if(i.format==="regex")return`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}`;return`Aṣìṣe: ${r[i.format]??o.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${o.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${f(o.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${o.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${o.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};var Tw=g(()=>{x()});var Xr={};et(Xr,{zhTW:()=>ld,zhCN:()=>cd,yo:()=>ud,vi:()=>ad,uz:()=>id,ur:()=>nd,uk:()=>Yr,ua:()=>rd,tr:()=>td,th:()=>ed,ta:()=>Qh,sv:()=>Zh,sl:()=>Xh,ru:()=>Yh,pt:()=>Wh,ps:()=>qh,pl:()=>Vh,ota:()=>Jh,no:()=>Mh,nl:()=>Hh,ms:()=>Gh,mk:()=>Bh,lt:()=>Kh,ko:()=>Fh,km:()=>Vr,kh:()=>Rh,ka:()=>Eh,ja:()=>jh,it:()=>zh,is:()=>xh,id:()=>Ch,hy:()=>Nh,hu:()=>Lh,he:()=>Dh,frCA:()=>Ah,fr:()=>Ph,fi:()=>Th,fa:()=>Sh,es:()=>Oh,eo:()=>_h,en:()=>qr,de:()=>wh,da:()=>kh,cs:()=>Ih,ca:()=>fh,bg:()=>vh,be:()=>yh,az:()=>mh,ar:()=>ph});var sd=g(()=>{Nk();Ck();zk();jk();Ek();Uk();Rk();Fk();$h();Kk();Bk();Gk();Hk();Mk();Jk();qk();Vk();Yk();Xk();Zk();Qk();ew();tw();ow();Uh();rw();iw();aw();cw();lw();uw();sw();hw();dw();gw();pw();mw();yw();vw();fw();Iw();kw();od();ww();$w();_w();Ow();Sw();Tw()});class gd{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let r=t[0];if(this._map.set(e,r),r&&typeof r==="object"&&"id"in r)this._idmap.set(r.id,e);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);if(t&&typeof t==="object"&&"id"in t)this._idmap.delete(t.id);return this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let r={...this.get(t)??{}};delete r.id;let n={...r,...this._map.get(e)};return Object.keys(n).length?n:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function bi(){return new gd}var Pw,hd,dd,fe;var Zr=g(()=>{hd=Symbol("ZodOutput"),dd=Symbol("ZodInput");(Pw=globalThis).__zod_globalRegistry??(Pw.__zod_globalRegistry=bi());fe=globalThis.__zod_globalRegistry});function bd(e,t){return new e({type:"string",...O(t)})}function pd(e,t){return new e({type:"string",coerce:!0,...O(t)})}function pi(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...O(t)})}function Qr(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...O(t)})}function mi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...O(t)})}function yi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...O(t)})}function vi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...O(t)})}function fi(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...O(t)})}function en(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...O(t)})}function Ii(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...O(t)})}function ki(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...O(t)})}function wi(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...O(t)})}function $i(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...O(t)})}function _i(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...O(t)})}function Oi(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...O(t)})}function Si(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...O(t)})}function Ti(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...O(t)})}function Pi(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...O(t)})}function md(e,t){return new e({type:"string",format:"mac",check:"string_format",abort:!1,...O(t)})}function Ai(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...O(t)})}function Di(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...O(t)})}function Li(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...O(t)})}function Ni(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...O(t)})}function Ci(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...O(t)})}function xi(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...O(t)})}function vd(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...O(t)})}function fd(e,t){return new e({type:"string",format:"date",check:"string_format",...O(t)})}function Id(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...O(t)})}function kd(e,t){return new e({type:"string",format:"duration",check:"string_format",...O(t)})}function wd(e,t){return new e({type:"number",checks:[],...O(t)})}function $d(e,t){return new e({type:"number",coerce:!0,checks:[],...O(t)})}function _d(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...O(t)})}function Od(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"float32",...O(t)})}function Sd(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"float64",...O(t)})}function Td(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"int32",...O(t)})}function Pd(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"uint32",...O(t)})}function Ad(e,t){return new e({type:"boolean",...O(t)})}function Dd(e,t){return new e({type:"boolean",coerce:!0,...O(t)})}function Ld(e,t){return new e({type:"bigint",...O(t)})}function Nd(e,t){return new e({type:"bigint",coerce:!0,...O(t)})}function Cd(e,t){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...O(t)})}function xd(e,t){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...O(t)})}function zd(e,t){return new e({type:"symbol",...O(t)})}function jd(e,t){return new e({type:"undefined",...O(t)})}function Ed(e,t){return new e({type:"null",...O(t)})}function Ud(e){return new e({type:"any"})}function Rd(e){return new e({type:"unknown"})}function Fd(e,t){return new e({type:"never",...O(t)})}function Kd(e,t){return new e({type:"void",...O(t)})}function Bd(e,t){return new e({type:"date",...O(t)})}function Gd(e,t){return new e({type:"date",coerce:!0,...O(t)})}function Hd(e,t){return new e({type:"nan",...O(t)})}function it(e,t){return new ti({check:"less_than",...O(t),value:e,inclusive:!1})}function Ue(e,t){return new ti({check:"less_than",...O(t),value:e,inclusive:!0})}function at(e,t){return new oi({check:"greater_than",...O(t),value:e,inclusive:!1})}function Ae(e,t){return new oi({check:"greater_than",...O(t),value:e,inclusive:!0})}function zi(e){return at(0,e)}function ji(e){return it(0,e)}function Ei(e){return Ue(0,e)}function Ui(e){return Ae(0,e)}function xt(e,t){return new Uu({check:"multiple_of",...O(t),value:e})}function zt(e,t){return new Ku({check:"max_size",...O(t),maximum:e})}function ct(e,t){return new Bu({check:"min_size",...O(t),minimum:e})}function Zt(e,t){return new Gu({check:"size_equals",...O(t),size:e})}function Qt(e,t){return new Hu({check:"max_length",...O(t),maximum:e})}function vt(e,t){return new Mu({check:"min_length",...O(t),minimum:e})}function eo(e,t){return new Ju({check:"length_equals",...O(t),length:e})}function So(e,t){return new qu({check:"string_format",format:"regex",...O(t),pattern:e})}function To(e){return new Vu({check:"string_format",format:"lowercase",...O(e)})}function Po(e){return new Wu({check:"string_format",format:"uppercase",...O(e)})}function Ao(e,t){return new Yu({check:"string_format",format:"includes",...O(t),includes:e})}function Do(e,t){return new Xu({check:"string_format",format:"starts_with",...O(t),prefix:e})}function Lo(e,t){return new Zu({check:"string_format",format:"ends_with",...O(t),suffix:e})}function Ri(e,t,r){return new Qu({check:"property",property:e,schema:t,...O(r)})}function No(e,t){return new es({check:"mime_type",mime:e,...O(t)})}function Ze(e){return new ts({check:"overwrite",tx:e})}function Co(e){return Ze((t)=>t.normalize(e))}function xo(){return Ze((e)=>e.trim())}function zo(){return Ze((e)=>e.toLowerCase())}function jo(){return Ze((e)=>e.toUpperCase())}function Eo(){return Ze((e)=>Xl(e))}function Md(e,t,r){return new e({type:"array",element:t,...O(r)})}function vN(e,t,r){return new e({type:"union",options:t,...O(r)})}function fN(e,t,r){return new e({type:"union",options:t,inclusive:!1,...O(r)})}function IN(e,t,r,n){return new e({type:"union",options:r,discriminator:t,...O(n)})}function kN(e,t,r){return new e({type:"intersection",left:t,right:r})}function wN(e,t,r,n){let o=r instanceof E;return new e({type:"tuple",items:t,rest:o?r:null,...O(o?n:r)})}function $N(e,t,r,n){return new e({type:"record",keyType:t,valueType:r,...O(n)})}function _N(e,t,r,n){return new e({type:"map",keyType:t,valueType:r,...O(n)})}function ON(e,t,r){return new e({type:"set",valueType:t,...O(r)})}function SN(e,t,r){let n=Array.isArray(t)?Object.fromEntries(t.map((o)=>[o,o])):t;return new e({type:"enum",entries:n,...O(r)})}function TN(e,t,r){return new e({type:"enum",entries:t,...O(r)})}function PN(e,t,r){return new e({type:"literal",values:Array.isArray(t)?t:[t],...O(r)})}function Jd(e,t){return new e({type:"file",...O(t)})}function AN(e,t){return new e({type:"transform",transform:t})}function DN(e,t){return new e({type:"optional",innerType:t})}function LN(e,t){return new e({type:"nullable",innerType:t})}function NN(e,t,r){return new e({type:"default",innerType:t,get defaultValue(){return typeof r==="function"?r():Ql(r)}})}function CN(e,t,r){return new e({type:"nonoptional",innerType:t,...O(r)})}function xN(e,t){return new e({type:"success",innerType:t})}function zN(e,t,r){return new e({type:"catch",innerType:t,catchValue:typeof r==="function"?r:()=>r})}function jN(e,t,r){return new e({type:"pipe",in:t,out:r})}function EN(e,t){return new e({type:"readonly",innerType:t})}function UN(e,t,r){return new e({type:"template_literal",parts:t,...O(r)})}function RN(e,t){return new e({type:"lazy",getter:t})}function FN(e,t){return new e({type:"promise",innerType:t})}function qd(e,t,r){let n=O(r);return n.abort??(n.abort=!0),new e({type:"custom",check:"custom",fn:t,...n})}function Vd(e,t,r){return new e({type:"custom",check:"custom",fn:t,...O(r)})}function Wd(e){let t=Aw((r)=>{return r.addIssue=(n)=>{if(typeof n==="string")r.issues.push(fo(n,r.value,t._zod.def));else{let o=n;if(o.fatal)o.continue=!1;o.code??(o.code="custom"),o.input??(o.input=r.value),o.inst??(o.inst=t),o.continue??(o.continue=!t._zod.def.abort),r.issues.push(fo(o))}},e(r.value,r)});return t}function Aw(e,t){let r=new te({check:"custom",...O(t)});return r._zod.check=e,r}function Yd(e){let t=new te({check:"describe"});return t._zod.onattach=[(r)=>{let n=fe.get(r)??{};fe.add(r,{...n,description:e})}],t._zod.check=()=>{},t}function Xd(e){let t=new te({check:"meta"});return t._zod.onattach=[(r)=>{let n=fe.get(r)??{};fe.add(r,{...n,...e})}],t._zod.check=()=>{},t}function Zd(e,t){let r=O(t),n=r.truthy??["true","1","yes","on","y","enabled"],o=r.falsy??["false","0","no","off","n","disabled"];if(r.case!=="sensitive")n=n.map((p)=>typeof p==="string"?p.toLowerCase():p),o=o.map((p)=>typeof p==="string"?p.toLowerCase():p);let i=new Set(n),a=new Set(o),c=e.Codec??Jr,u=e.Boolean??Hr,d=new(e.String??Xt)({type:"string",error:r.error}),h=new u({type:"boolean",error:r.error}),b=new c({type:"pipe",in:d,out:h,transform:(p,_)=>{let S=p;if(r.case!=="sensitive")S=S.toLowerCase();if(i.has(S))return!0;else if(a.has(S))return!1;else return _.issues.push({code:"invalid_value",expected:"stringbool",values:[...i,...a],input:_.value,inst:b,continue:!1}),{}},reverseTransform:(p,_)=>{if(p===!0)return n[0]||"true";else return o[0]||"false"},error:r.error});return b}function Uo(e,t,r,n={}){let o=O(n),i={...O(n),check:"string_format",type:"string",format:t,fn:typeof r==="function"?r:(c)=>r.test(c),...o};if(r instanceof RegExp)i.pattern=r;return new e(i)}var yd;var Dw=g(()=>{ri();Zr();bh();x();yd={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6}});function jt(e){let t=e?.target??"draft-2020-12";if(t==="draft-4")t="draft-04";if(t==="draft-7")t="draft-07";return{processors:e.processors??{},metadataRegistry:e?.metadata??fe,target:t,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function Z(e,t,r={path:[],schemaPath:[]}){var n;let o=e._zod.def,i=t.seen.get(e);if(i){if(i.count++,r.schemaPath.includes(e))i.cycle=r.path;return i.schema}let a={schema:{},count:1,cycle:void 0,path:r.path};t.seen.set(e,a);let c=e._zod.toJSONSchema?.();if(c)a.schema=c;else{let d={...r,schemaPath:[...r.schemaPath,e],path:r.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,a.schema,d);else{let b=a.schema,p=t.processors[o.type];if(!p)throw Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);p(e,t,b,d)}let h=e._zod.parent;if(h){if(!a.ref)a.ref=h;Z(h,t,d),t.seen.get(h).isParent=!0}}let u=t.metadataRegistry.get(e);if(u)Object.assign(a.schema,u);if(t.io==="input"&&De(e))delete a.schema.examples,delete a.schema.default;if(t.io==="input"&&a.schema._prefault)(n=a.schema).default??(n.default=a.schema._prefault);return delete a.schema._prefault,t.seen.get(e).schema}function Et(e,t){let r=e.seen.get(t);if(!r)throw Error("Unprocessed schema. This is a bug in Zod.");let n=new Map;for(let a of e.seen.entries()){let c=e.metadataRegistry.get(a[0])?.id;if(c){let u=n.get(c);if(u&&u!==a[0])throw Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);n.set(c,a[0])}}let o=(a)=>{let c=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){let h=e.external.registry.get(a[0])?.id,b=e.external.uri??((_)=>_);if(h)return{ref:b(h)};let p=a[1].defId??a[1].schema.id??`schema${e.counter++}`;return a[1].defId=p,{defId:p,ref:`${b("__shared")}#/${c}/${p}`}}if(a[1]===r)return{ref:"#"};let s=`${"#"}/${c}/`,d=a[1].schema.id??`__schema${e.counter++}`;return{defId:d,ref:s+d}},i=(a)=>{if(a[1].schema.$ref)return;let c=a[1],{ref:u,defId:s}=o(a);if(c.def={...c.schema},s)c.defId=s;let d=c.schema;for(let h in d)delete d[h];d.$ref=u};if(e.cycles==="throw")for(let a of e.seen.entries()){let c=a[1];if(c.cycle)throw Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let a of e.seen.entries()){let c=a[1];if(t===a[0]){i(a);continue}if(e.external){let s=e.external.registry.get(a[0])?.id;if(t!==a[0]&&s){i(a);continue}}if(e.metadataRegistry.get(a[0])?.id){i(a);continue}if(c.cycle){i(a);continue}if(c.count>1){if(e.reused==="ref"){i(a);continue}}}}function Ut(e,t){let r=e.seen.get(t);if(!r)throw Error("Unprocessed schema. This is a bug in Zod.");let n=(a)=>{let c=e.seen.get(a);if(c.ref===null)return;let u=c.def??c.schema,s={...u},d=c.ref;if(c.ref=null,d){n(d);let b=e.seen.get(d),p=b.schema;if(p.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"))u.allOf=u.allOf??[],u.allOf.push(p);else Object.assign(u,p);if(Object.assign(u,s),a._zod.parent===d)for(let S in u){if(S==="$ref"||S==="allOf")continue;if(!(S in s))delete u[S]}if(p.$ref&&b.def)for(let S in u){if(S==="$ref"||S==="allOf")continue;if(S in b.def&&JSON.stringify(u[S])===JSON.stringify(b.def[S]))delete u[S]}}let h=a._zod.parent;if(h&&h!==d){n(h);let b=e.seen.get(h);if(b?.schema.$ref){if(u.$ref=b.schema.$ref,b.def)for(let p in u){if(p==="$ref"||p==="allOf")continue;if(p in b.def&&JSON.stringify(u[p])===JSON.stringify(b.def[p]))delete u[p]}}}e.override({zodSchema:a,jsonSchema:u,path:c.path??[]})};for(let a of[...e.seen.entries()].reverse())n(a[0]);let o={};if(e.target==="draft-2020-12")o.$schema="https://json-schema.org/draft/2020-12/schema";else if(e.target==="draft-07")o.$schema="http://json-schema.org/draft-07/schema#";else if(e.target==="draft-04")o.$schema="http://json-schema.org/draft-04/schema#";else if(e.target==="openapi-3.0");if(e.external?.uri){let a=e.external.registry.get(t)?.id;if(!a)throw Error("Schema is missing an `id` property");o.$id=e.external.uri(a)}Object.assign(o,r.def??r.schema);let i=e.external?.defs??{};for(let a of e.seen.entries()){let c=a[1];if(c.def&&c.defId)i[c.defId]=c.def}if(e.external);else if(Object.keys(i).length>0)if(e.target==="draft-2020-12")o.$defs=i;else o.definitions=i;try{let a=JSON.parse(JSON.stringify(o));return Object.defineProperty(a,"~standard",{value:{...t["~standard"],jsonSchema:{input:Ro(t,"input",e.processors),output:Ro(t,"output",e.processors)}},enumerable:!1,writable:!1}),a}catch(a){throw Error("Error converting schema to JSON.")}}function De(e,t){let r=t??{seen:new Set};if(r.seen.has(e))return!1;r.seen.add(e);let n=e._zod.def;if(n.type==="transform")return!0;if(n.type==="array")return De(n.element,r);if(n.type==="set")return De(n.valueType,r);if(n.type==="lazy")return De(n.getter(),r);if(n.type==="promise"||n.type==="optional"||n.type==="nonoptional"||n.type==="nullable"||n.type==="readonly"||n.type==="default"||n.type==="prefault")return De(n.innerType,r);if(n.type==="intersection")return De(n.left,r)||De(n.right,r);if(n.type==="record"||n.type==="map")return De(n.keyType,r)||De(n.valueType,r);if(n.type==="pipe")return De(n.in,r)||De(n.out,r);if(n.type==="object"){for(let o in n.shape)if(De(n.shape[o],r))return!0;return!1}if(n.type==="union"){for(let o of n.options)if(De(o,r))return!0;return!1}if(n.type==="tuple"){for(let o of n.items)if(De(o,r))return!0;if(n.rest&&De(n.rest,r))return!0;return!1}return!1}var Qd=(e,t={})=>(r)=>{let n=jt({...r,processors:t});return Z(e,n),Et(n,e),Ut(n,e)},Ro=(e,t,r={})=>(n)=>{let{libraryOptions:o,target:i}=n??{},a=jt({...o??{},target:i,io:t,processors:r});return Z(e,a),Et(a,e),Ut(a,e)};var tn=g(()=>{Zr()});function Gi(e,t){if("_idmap"in e){let n=e,o=jt({...t,processors:Fi}),i={};for(let u of n._idmap.entries()){let[s,d]=u;Z(d,o)}let a={},c={registry:n,uri:t?.uri,defs:i};o.external=c;for(let u of n._idmap.entries()){let[s,d]=u;Et(o,d),a[s]=Ut(o,d)}if(Object.keys(i).length>0){let u=o.target==="draft-2020-12"?"$defs":"definitions";a.__shared={[u]:i}}return{schemas:a}}let r=jt({...t,processors:Fi});return Z(e,r),Et(r,e),Ut(r,e)}var KN,eg=(e,t,r,n)=>{let o=r;o.type="string";let{minimum:i,maximum:a,format:c,patterns:u,contentEncoding:s}=e._zod.bag;if(typeof i==="number")o.minLength=i;if(typeof a==="number")o.maxLength=a;if(c){if(o.format=KN[c]??c,o.format==="")delete o.format;if(c==="time")delete o.format}if(s)o.contentEncoding=s;if(u&&u.size>0){let d=[...u];if(d.length===1)o.pattern=d[0].source;else if(d.length>1)o.allOf=[...d.map((h)=>({...t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0"?{type:"string"}:{},pattern:h.source}))]}},tg=(e,t,r,n)=>{let o=r,{minimum:i,maximum:a,format:c,multipleOf:u,exclusiveMaximum:s,exclusiveMinimum:d}=e._zod.bag;if(typeof c==="string"&&c.includes("int"))o.type="integer";else o.type="number";if(typeof d==="number")if(t.target==="draft-04"||t.target==="openapi-3.0")o.minimum=d,o.exclusiveMinimum=!0;else o.exclusiveMinimum=d;if(typeof i==="number"){if(o.minimum=i,typeof d==="number"&&t.target!=="draft-04")if(d>=i)delete o.minimum;else delete o.exclusiveMinimum}if(typeof s==="number")if(t.target==="draft-04"||t.target==="openapi-3.0")o.maximum=s,o.exclusiveMaximum=!0;else o.exclusiveMaximum=s;if(typeof a==="number"){if(o.maximum=a,typeof s==="number"&&t.target!=="draft-04")if(s<=a)delete o.maximum;else delete o.exclusiveMaximum}if(typeof u==="number")o.multipleOf=u},og=(e,t,r,n)=>{r.type="boolean"},rg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("BigInt cannot be represented in JSON Schema")},ng=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Symbols cannot be represented in JSON Schema")},ig=(e,t,r,n)=>{if(t.target==="openapi-3.0")r.type="string",r.nullable=!0,r.enum=[null];else r.type="null"},ag=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Undefined cannot be represented in JSON Schema")},cg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Void cannot be represented in JSON Schema")},lg=(e,t,r,n)=>{r.not={}},ug=(e,t,r,n)=>{},sg=(e,t,r,n)=>{},hg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Date cannot be represented in JSON Schema")},dg=(e,t,r,n)=>{let o=e._zod.def,i=Cr(o.entries);if(i.every((a)=>typeof a==="number"))r.type="number";if(i.every((a)=>typeof a==="string"))r.type="string";r.enum=i},gg=(e,t,r,n)=>{let o=e._zod.def,i=[];for(let a of o.values)if(a===void 0){if(t.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a==="bigint")if(t.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else i.push(Number(a));else i.push(a);if(i.length===0);else if(i.length===1){let a=i[0];if(r.type=a===null?"null":typeof a,t.target==="draft-04"||t.target==="openapi-3.0")r.enum=[a];else r.const=a}else{if(i.every((a)=>typeof a==="number"))r.type="number";if(i.every((a)=>typeof a==="string"))r.type="string";if(i.every((a)=>typeof a==="boolean"))r.type="boolean";if(i.every((a)=>a===null))r.type="null";r.enum=i}},bg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("NaN cannot be represented in JSON Schema")},pg=(e,t,r,n)=>{let o=r,i=e._zod.pattern;if(!i)throw Error("Pattern not found in template literal");o.type="string",o.pattern=i.source},mg=(e,t,r,n)=>{let o=r,i={type:"string",format:"binary",contentEncoding:"binary"},{minimum:a,maximum:c,mime:u}=e._zod.bag;if(a!==void 0)i.minLength=a;if(c!==void 0)i.maxLength=c;if(u)if(u.length===1)i.contentMediaType=u[0],Object.assign(o,i);else Object.assign(o,i),o.anyOf=u.map((s)=>({contentMediaType:s}));else Object.assign(o,i)},yg=(e,t,r,n)=>{r.type="boolean"},vg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")},fg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Function types cannot be represented in JSON Schema")},Ig=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")},kg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Map cannot be represented in JSON Schema")},wg=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw Error("Set cannot be represented in JSON Schema")},$g=(e,t,r,n)=>{let o=r,i=e._zod.def,{minimum:a,maximum:c}=e._zod.bag;if(typeof a==="number")o.minItems=a;if(typeof c==="number")o.maxItems=c;o.type="array",o.items=Z(i.element,t,{...n,path:[...n.path,"items"]})},_g=(e,t,r,n)=>{let o=r,i=e._zod.def;o.type="object",o.properties={};let a=i.shape;for(let s in a)o.properties[s]=Z(a[s],t,{...n,path:[...n.path,"properties",s]});let c=new Set(Object.keys(a)),u=new Set([...c].filter((s)=>{let d=i.shape[s]._zod;if(t.io==="input")return d.optin===void 0;else return d.optout===void 0}));if(u.size>0)o.required=Array.from(u);if(i.catchall?._zod.def.type==="never")o.additionalProperties=!1;else if(!i.catchall){if(t.io==="output")o.additionalProperties=!1}else if(i.catchall)o.additionalProperties=Z(i.catchall,t,{...n,path:[...n.path,"additionalProperties"]})},Ki=(e,t,r,n)=>{let o=e._zod.def,i=o.inclusive===!1,a=o.options.map((c,u)=>Z(c,t,{...n,path:[...n.path,i?"oneOf":"anyOf",u]}));if(i)r.oneOf=a;else r.anyOf=a},Og=(e,t,r,n)=>{let o=e._zod.def,i=Z(o.left,t,{...n,path:[...n.path,"allOf",0]}),a=Z(o.right,t,{...n,path:[...n.path,"allOf",1]}),c=(s)=>("allOf"in s)&&Object.keys(s).length===1,u=[...c(i)?i.allOf:[i],...c(a)?a.allOf:[a]];r.allOf=u},Sg=(e,t,r,n)=>{let o=r,i=e._zod.def;o.type="array";let a=t.target==="draft-2020-12"?"prefixItems":"items",c=t.target==="draft-2020-12"?"items":t.target==="openapi-3.0"?"items":"additionalItems",u=i.items.map((b,p)=>Z(b,t,{...n,path:[...n.path,a,p]})),s=i.rest?Z(i.rest,t,{...n,path:[...n.path,c,...t.target==="openapi-3.0"?[i.items.length]:[]]}):null;if(t.target==="draft-2020-12"){if(o.prefixItems=u,s)o.items=s}else if(t.target==="openapi-3.0"){if(o.items={anyOf:u},s)o.items.anyOf.push(s);if(o.minItems=u.length,!s)o.maxItems=u.length}else if(o.items=u,s)o.additionalItems=s;let{minimum:d,maximum:h}=e._zod.bag;if(typeof d==="number")o.minItems=d;if(typeof h==="number")o.maxItems=h},Tg=(e,t,r,n)=>{let o=r,i=e._zod.def;o.type="object";let a=i.keyType,u=a._zod.bag?.patterns;if(i.mode==="loose"&&u&&u.size>0){let d=Z(i.valueType,t,{...n,path:[...n.path,"patternProperties","*"]});o.patternProperties={};for(let h of u)o.patternProperties[h.source]=d}else{if(t.target==="draft-07"||t.target==="draft-2020-12")o.propertyNames=Z(i.keyType,t,{...n,path:[...n.path,"propertyNames"]});o.additionalProperties=Z(i.valueType,t,{...n,path:[...n.path,"additionalProperties"]})}let s=a._zod.values;if(s){let d=[...s].filter((h)=>typeof h==="string"||typeof h==="number");if(d.length>0)o.required=d}},Pg=(e,t,r,n)=>{let o=e._zod.def,i=Z(o.innerType,t,n),a=t.seen.get(e);if(t.target==="openapi-3.0")a.ref=o.innerType,r.nullable=!0;else r.anyOf=[i,{type:"null"}]},Ag=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);i.ref=o.innerType},Dg=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);i.ref=o.innerType,r.default=JSON.parse(JSON.stringify(o.defaultValue))},Lg=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);if(i.ref=o.innerType,t.io==="input")r._prefault=JSON.parse(JSON.stringify(o.defaultValue))},Ng=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);i.ref=o.innerType;let a;try{a=o.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}r.default=a},Cg=(e,t,r,n)=>{let o=e._zod.def,i=t.io==="input"?o.in._zod.def.type==="transform"?o.out:o.in:o.out;Z(i,t,n);let a=t.seen.get(e);a.ref=i},xg=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);i.ref=o.innerType,r.readOnly=!0},zg=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);i.ref=o.innerType},Bi=(e,t,r,n)=>{let o=e._zod.def;Z(o.innerType,t,n);let i=t.seen.get(e);i.ref=o.innerType},jg=(e,t,r,n)=>{let o=e._zod.innerType;Z(o,t,n);let i=t.seen.get(e);i.ref=o},Fi;var on=g(()=>{tn();x();KN={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Fi={string:eg,number:tg,boolean:og,bigint:rg,symbol:ng,null:ig,undefined:ag,void:cg,never:lg,any:ug,unknown:sg,date:hg,enum:dg,literal:gg,nan:bg,template_literal:pg,file:mg,success:yg,custom:vg,function:fg,transform:Ig,map:kg,set:wg,array:$g,object:_g,union:Ki,intersection:Og,tuple:Sg,record:Tg,nullable:Pg,nonoptional:Ag,default:Dg,prefault:Lg,catch:Ng,pipe:Cg,readonly:xg,promise:zg,optional:Bi,lazy:jg}});class Eg{get metadataRegistry(){return this.ctx.metadataRegistry}get target(){return this.ctx.target}get unrepresentable(){return this.ctx.unrepresentable}get override(){return this.ctx.override}get io(){return this.ctx.io}get counter(){return this.ctx.counter}set counter(e){this.ctx.counter=e}get seen(){return this.ctx.seen}constructor(e){let t=e?.target??"draft-2020-12";if(t==="draft-4")t="draft-04";if(t==="draft-7")t="draft-07";this.ctx=jt({processors:Fi,target:t,...e?.metadata&&{metadata:e.metadata},...e?.unrepresentable&&{unrepresentable:e.unrepresentable},...e?.override&&{override:e.override},...e?.io&&{io:e.io}})}process(e,t={path:[],schemaPath:[]}){return Z(e,this.ctx,t)}emit(e,t){if(t){if(t.cycles)this.ctx.cycles=t.cycles;if(t.reused)this.ctx.reused=t.reused;if(t.external)this.ctx.external=t.external}Et(this.ctx,e);let r=Ut(this.ctx,e),{"~standard":n,...o}=r;return o}}var Lw=g(()=>{on();tn()});var Nw={};var Cw=()=>{};var ft={};et(ft,{version:()=>os,util:()=>$,treeifyError:()=>nu,toJSONSchema:()=>Gi,toDotPath:()=>uk,safeParseAsync:()=>lu,safeParse:()=>cu,safeEncodeAsync:()=>VD,safeEncode:()=>JD,safeDecodeAsync:()=>WD,safeDecode:()=>qD,registry:()=>bi,regexes:()=>qe,process:()=>Z,prettifyError:()=>iu,parseAsync:()=>Hn,parse:()=>Gn,meta:()=>Xd,locales:()=>Xr,isValidJWT:()=>Pk,isValidBase64URL:()=>Tk,isValidBase64:()=>Os,initializeContext:()=>jt,globalRegistry:()=>fe,globalConfig:()=>Lr,formatError:()=>Fr,flattenError:()=>Rr,finalize:()=>Ut,extractDefs:()=>Et,encodeAsync:()=>HD,encode:()=>BD,describe:()=>Yd,decodeAsync:()=>MD,decode:()=>GD,createToJSONSchemaMethod:()=>Qd,createStandardJSONSchemaMethod:()=>Ro,config:()=>ue,clone:()=>Pe,_xor:()=>fN,_xid:()=>Oi,_void:()=>Kd,_uuidv7:()=>fi,_uuidv6:()=>vi,_uuidv4:()=>yi,_uuid:()=>mi,_url:()=>en,_uppercase:()=>Po,_unknown:()=>Rd,_union:()=>vN,_undefined:()=>jd,_ulid:()=>_i,_uint64:()=>xd,_uint32:()=>Pd,_tuple:()=>wN,_trim:()=>xo,_transform:()=>AN,_toUpperCase:()=>jo,_toLowerCase:()=>zo,_templateLiteral:()=>UN,_symbol:()=>zd,_superRefine:()=>Wd,_success:()=>xN,_stringbool:()=>Zd,_stringFormat:()=>Uo,_string:()=>bd,_startsWith:()=>Do,_slugify:()=>Eo,_size:()=>Zt,_set:()=>ON,_safeParseAsync:()=>$o,_safeParse:()=>wo,_safeEncodeAsync:()=>Xn,_safeEncode:()=>Wn,_safeDecodeAsync:()=>Zn,_safeDecode:()=>Yn,_regex:()=>So,_refine:()=>Vd,_record:()=>$N,_readonly:()=>EN,_property:()=>Ri,_promise:()=>FN,_positive:()=>zi,_pipe:()=>jN,_parseAsync:()=>ko,_parse:()=>Io,_overwrite:()=>Ze,_optional:()=>DN,_number:()=>wd,_nullable:()=>LN,_null:()=>Ed,_normalize:()=>Co,_nonpositive:()=>Ei,_nonoptional:()=>CN,_nonnegative:()=>Ui,_never:()=>Fd,_negative:()=>ji,_nativeEnum:()=>TN,_nanoid:()=>ki,_nan:()=>Hd,_multipleOf:()=>xt,_minSize:()=>ct,_minLength:()=>vt,_min:()=>Ae,_mime:()=>No,_maxSize:()=>zt,_maxLength:()=>Qt,_max:()=>Ue,_map:()=>_N,_mac:()=>md,_lte:()=>Ue,_lt:()=>it,_lowercase:()=>To,_literal:()=>PN,_length:()=>eo,_lazy:()=>RN,_ksuid:()=>Si,_jwt:()=>xi,_isoTime:()=>Id,_isoDuration:()=>kd,_isoDateTime:()=>vd,_isoDate:()=>fd,_ipv6:()=>Pi,_ipv4:()=>Ti,_intersection:()=>kN,_int64:()=>Cd,_int32:()=>Td,_int:()=>_d,_includes:()=>Ao,_guid:()=>Qr,_gte:()=>Ae,_gt:()=>at,_float64:()=>Sd,_float32:()=>Od,_file:()=>Jd,_enum:()=>SN,_endsWith:()=>Lo,_encodeAsync:()=>qn,_encode:()=>Mn,_emoji:()=>Ii,_email:()=>pi,_e164:()=>Ci,_discriminatedUnion:()=>IN,_default:()=>NN,_decodeAsync:()=>Vn,_decode:()=>Jn,_date:()=>Bd,_custom:()=>qd,_cuid2:()=>$i,_cuid:()=>wi,_coercedString:()=>pd,_coercedNumber:()=>$d,_coercedDate:()=>Gd,_coercedBoolean:()=>Dd,_coercedBigint:()=>Nd,_cidrv6:()=>Di,_cidrv4:()=>Ai,_check:()=>Aw,_catch:()=>zN,_boolean:()=>Ad,_bigint:()=>Ld,_base64url:()=>Ni,_base64:()=>Li,_array:()=>Md,_any:()=>Ud,TimePrecision:()=>yd,NEVER:()=>ql,JSONSchemaGenerator:()=>Eg,JSONSchema:()=>Nw,Doc:()=>ni,$output:()=>hd,$input:()=>dd,$constructor:()=>m,$brand:()=>Vl,$ZodXor:()=>Gs,$ZodXID:()=>bs,$ZodVoid:()=>Rs,$ZodUnknown:()=>Es,$ZodUnion:()=>Mr,$ZodUndefined:()=>xs,$ZodUUID:()=>as,$ZodURL:()=>ls,$ZodULID:()=>gs,$ZodType:()=>E,$ZodTuple:()=>di,$ZodTransform:()=>Zs,$ZodTemplateLiteral:()=>uh,$ZodSymbol:()=>Cs,$ZodSuccess:()=>nh,$ZodStringFormat:()=>Q,$ZodString:()=>Xt,$ZodSet:()=>Vs,$ZodRegistry:()=>gd,$ZodRecord:()=>Js,$ZodRealError:()=>xe,$ZodReadonly:()=>lh,$ZodPromise:()=>hh,$ZodPrefault:()=>oh,$ZodPipe:()=>ch,$ZodOptional:()=>gi,$ZodObjectJIT:()=>Bs,$ZodObject:()=>Lk,$ZodNumberFormat:()=>Ls,$ZodNumber:()=>si,$ZodNullable:()=>eh,$ZodNull:()=>zs,$ZodNonOptional:()=>rh,$ZodNever:()=>Us,$ZodNanoID:()=>ss,$ZodNaN:()=>ah,$ZodMap:()=>qs,$ZodMAC:()=>ws,$ZodLiteral:()=>Ys,$ZodLazy:()=>dh,$ZodKSUID:()=>ps,$ZodJWT:()=>As,$ZodIntersection:()=>Ms,$ZodISOTime:()=>vs,$ZodISODuration:()=>fs,$ZodISODateTime:()=>ms,$ZodISODate:()=>ys,$ZodIPv6:()=>ks,$ZodIPv4:()=>Is,$ZodGUID:()=>is,$ZodFunction:()=>sh,$ZodFile:()=>Xs,$ZodExactOptional:()=>Qs,$ZodError:()=>Ur,$ZodEnum:()=>Ws,$ZodEncodeError:()=>Vt,$ZodEmoji:()=>us,$ZodEmail:()=>cs,$ZodE164:()=>Ps,$ZodDiscriminatedUnion:()=>Hs,$ZodDefault:()=>th,$ZodDate:()=>Fs,$ZodCustomStringFormat:()=>Ds,$ZodCustom:()=>gh,$ZodCodec:()=>Jr,$ZodCheckUpperCase:()=>Wu,$ZodCheckStringFormat:()=>_o,$ZodCheckStartsWith:()=>Xu,$ZodCheckSizeEquals:()=>Gu,$ZodCheckRegex:()=>qu,$ZodCheckProperty:()=>Qu,$ZodCheckOverwrite:()=>ts,$ZodCheckNumberFormat:()=>Ru,$ZodCheckMultipleOf:()=>Uu,$ZodCheckMinSize:()=>Bu,$ZodCheckMinLength:()=>Mu,$ZodCheckMimeType:()=>es,$ZodCheckMaxSize:()=>Ku,$ZodCheckMaxLength:()=>Hu,$ZodCheckLowerCase:()=>Vu,$ZodCheckLessThan:()=>ti,$ZodCheckLengthEquals:()=>Ju,$ZodCheckIncludes:()=>Yu,$ZodCheckGreaterThan:()=>oi,$ZodCheckEndsWith:()=>Zu,$ZodCheckBigIntFormat:()=>Fu,$ZodCheck:()=>te,$ZodCatch:()=>ih,$ZodCUID2:()=>ds,$ZodCUID:()=>hs,$ZodCIDRv6:()=>_s,$ZodCIDRv4:()=>$s,$ZodBoolean:()=>Hr,$ZodBigIntFormat:()=>Ns,$ZodBigInt:()=>hi,$ZodBase64URL:()=>Ts,$ZodBase64:()=>Ss,$ZodAsyncError:()=>nt,$ZodArray:()=>Ks,$ZodAny:()=>js});var Re=g(()=>{x();ei();sd();on();Lw();Cw();mo();uu();au();bh();ri();rs();Zr();Dw();tn()});var Hi={};et(Hi,{uppercase:()=>Po,trim:()=>xo,toUpperCase:()=>jo,toLowerCase:()=>zo,startsWith:()=>Do,slugify:()=>Eo,size:()=>Zt,regex:()=>So,property:()=>Ri,positive:()=>zi,overwrite:()=>Ze,normalize:()=>Co,nonpositive:()=>Ei,nonnegative:()=>Ui,negative:()=>ji,multipleOf:()=>xt,minSize:()=>ct,minLength:()=>vt,mime:()=>No,maxSize:()=>zt,maxLength:()=>Qt,lte:()=>Ue,lt:()=>it,lowercase:()=>To,length:()=>eo,includes:()=>Ao,gte:()=>Ae,gt:()=>at,endsWith:()=>Lo});var Mi=g(()=>{Re()});var Fo={};et(Fo,{time:()=>Fg,duration:()=>Kg,datetime:()=>Ug,date:()=>Rg,ZodISOTime:()=>Vi,ZodISODuration:()=>Wi,ZodISODateTime:()=>Ji,ZodISODate:()=>qi});function Ug(e){return vd(Ji,e)}function Rg(e){return fd(qi,e)}function Fg(e){return Id(Vi,e)}function Kg(e){return kd(Wi,e)}var Ji,qi,Vi,Wi;var rn=g(()=>{Re();an();Ji=m("ZodISODateTime",(e,t)=>{ms.init(e,t),ee.init(e,t)});qi=m("ZodISODate",(e,t)=>{ys.init(e,t),ee.init(e,t)});Vi=m("ZodISOTime",(e,t)=>{vs.init(e,t),ee.init(e,t)});Wi=m("ZodISODuration",(e,t)=>{fs.init(e,t),ee.init(e,t)})});var xw=(e,t)=>{Ur.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:(r)=>Fr(e,r)},flatten:{value:(r)=>Rr(e,r)},addIssue:{value:(r)=>{e.issues.push(r),e.message=JSON.stringify(e.issues,yo,2)}},addIssues:{value:(r)=>{e.issues.push(...r),e.message=JSON.stringify(e.issues,yo,2)}},isEmpty:{get(){return e.issues.length===0}}})},GN,ze;var Bg=g(()=>{Re();Re();x();GN=m("ZodError",xw),ze=m("ZodError",xw,{Parent:Error})});var Gg,Hg,Mg,Jg,qg,Vg,Wg,Yg,Xg,Zg,Qg,eb;var tb=g(()=>{Re();Bg();Gg=Io(ze),Hg=ko(ze),Mg=wo(ze),Jg=$o(ze),qg=Mn(ze),Vg=Jn(ze),Wg=qn(ze),Yg=Vn(ze),Xg=Wn(ze),Zg=Yn(ze),Qg=Xn(ze),eb=Zn(ze)});var nn={};et(nn,{xor:()=>O$,xid:()=>Vw,void:()=>f$,uuidv7:()=>Fw,uuidv6:()=>Rw,uuidv4:()=>Uw,uuid:()=>Ew,url:()=>Kw,unknown:()=>to,union:()=>ya,undefined:()=>y$,ulid:()=>qw,uint64:()=>p$,uint32:()=>d$,tuple:()=>fb,transform:()=>fa,templateLiteral:()=>U$,symbol:()=>m$,superRefine:()=>Jb,success:()=>z$,stringbool:()=>J$,stringFormat:()=>i$,string:()=>Yi,strictObject:()=>$$,set:()=>D$,refine:()=>Mb,record:()=>Ib,readonly:()=>Rb,promise:()=>R$,preprocess:()=>V$,prefault:()=>Nb,pipe:()=>sn,partialRecord:()=>T$,optional:()=>ln,object:()=>w$,number:()=>rb,nullish:()=>x$,nullable:()=>un,null:()=>lb,nonoptional:()=>Cb,never:()=>ma,nativeEnum:()=>L$,nanoid:()=>Hw,nan:()=>j$,meta:()=>H$,map:()=>A$,mac:()=>Xw,looseRecord:()=>P$,looseObject:()=>_$,literal:()=>N$,lazy:()=>Bb,ksuid:()=>Ww,keyof:()=>k$,jwt:()=>n$,json:()=>q$,ipv6:()=>Zw,ipv4:()=>Yw,intersection:()=>yb,int64:()=>b$,int32:()=>h$,int:()=>Xi,instanceof:()=>M$,httpUrl:()=>Bw,hostname:()=>a$,hex:()=>c$,hash:()=>l$,guid:()=>jw,function:()=>F$,float64:()=>s$,float32:()=>u$,file:()=>C$,exactOptional:()=>Tb,enum:()=>va,emoji:()=>Gw,email:()=>zw,e164:()=>r$,discriminatedUnion:()=>S$,describe:()=>G$,date:()=>I$,custom:()=>B$,cuid2:()=>Jw,cuid:()=>Mw,codec:()=>E$,cidrv6:()=>e$,cidrv4:()=>Qw,check:()=>K$,catch:()=>jb,boolean:()=>nb,bigint:()=>g$,base64url:()=>o$,base64:()=>t$,array:()=>gn,any:()=>v$,_function:()=>F$,_default:()=>Db,_ZodString:()=>Zi,ZodXor:()=>bb,ZodXID:()=>ia,ZodVoid:()=>db,ZodUnknown:()=>sb,ZodUnion:()=>pn,ZodUndefined:()=>ab,ZodUUID:()=>lt,ZodURL:()=>hn,ZodULID:()=>na,ZodType:()=>F,ZodTuple:()=>vb,ZodTransform:()=>Ob,ZodTemplateLiteral:()=>Fb,ZodSymbol:()=>ib,ZodSuccess:()=>xb,ZodStringFormat:()=>ee,ZodString:()=>Bo,ZodSet:()=>wb,ZodRecord:()=>mn,ZodReadonly:()=>Ub,ZodPromise:()=>Gb,ZodPrefault:()=>Lb,ZodPipe:()=>wa,ZodOptional:()=>Ia,ZodObject:()=>bn,ZodNumberFormat:()=>oo,ZodNumber:()=>Ho,ZodNullable:()=>Pb,ZodNull:()=>cb,ZodNonOptional:()=>ka,ZodNever:()=>hb,ZodNanoID:()=>ta,ZodNaN:()=>Eb,ZodMap:()=>kb,ZodMAC:()=>ob,ZodLiteral:()=>$b,ZodLazy:()=>Kb,ZodKSUID:()=>aa,ZodJWT:()=>ba,ZodIntersection:()=>mb,ZodIPv6:()=>la,ZodIPv4:()=>ca,ZodGUID:()=>cn,ZodFunction:()=>Hb,ZodFile:()=>_b,ZodExactOptional:()=>Sb,ZodEnum:()=>Ko,ZodEmoji:()=>ea,ZodEmail:()=>Qi,ZodE164:()=>ga,ZodDiscriminatedUnion:()=>pb,ZodDefault:()=>Ab,ZodDate:()=>dn,ZodCustomStringFormat:()=>Go,ZodCustom:()=>yn,ZodCodec:()=>$a,ZodCatch:()=>zb,ZodCUID2:()=>ra,ZodCUID:()=>oa,ZodCIDRv6:()=>sa,ZodCIDRv4:()=>ua,ZodBoolean:()=>Mo,ZodBigIntFormat:()=>pa,ZodBigInt:()=>Jo,ZodBase64URL:()=>da,ZodBase64:()=>ha,ZodArray:()=>gb,ZodAny:()=>ub});function Yi(e){return bd(Bo,e)}function zw(e){return pi(Qi,e)}function jw(e){return Qr(cn,e)}function Ew(e){return mi(lt,e)}function Uw(e){return yi(lt,e)}function Rw(e){return vi(lt,e)}function Fw(e){return fi(lt,e)}function Kw(e){return en(hn,e)}function Bw(e){return en(hn,{protocol:/^https?$/,hostname:qe.domain,...$.normalizeParams(e)})}function Gw(e){return Ii(ea,e)}function Hw(e){return ki(ta,e)}function Mw(e){return wi(oa,e)}function Jw(e){return $i(ra,e)}function qw(e){return _i(na,e)}function Vw(e){return Oi(ia,e)}function Ww(e){return Si(aa,e)}function Yw(e){return Ti(ca,e)}function Xw(e){return md(ob,e)}function Zw(e){return Pi(la,e)}function Qw(e){return Ai(ua,e)}function e$(e){return Di(sa,e)}function t$(e){return Li(ha,e)}function o$(e){return Ni(da,e)}function r$(e){return Ci(ga,e)}function n$(e){return xi(ba,e)}function i$(e,t,r={}){return Uo(Go,e,t,r)}function a$(e){return Uo(Go,"hostname",qe.hostname,e)}function c$(e){return Uo(Go,"hex",qe.hex,e)}function l$(e,t){let r=t?.enc??"hex",n=`${e}_${r}`,o=qe[n];if(!o)throw Error(`Unrecognized hash format: ${n}`);return Uo(Go,n,o,t)}function rb(e){return wd(Ho,e)}function Xi(e){return _d(oo,e)}function u$(e){return Od(oo,e)}function s$(e){return Sd(oo,e)}function h$(e){return Td(oo,e)}function d$(e){return Pd(oo,e)}function nb(e){return Ad(Mo,e)}function g$(e){return Ld(Jo,e)}function b$(e){return Cd(pa,e)}function p$(e){return xd(pa,e)}function m$(e){return zd(ib,e)}function y$(e){return jd(ab,e)}function lb(e){return Ed(cb,e)}function v$(){return Ud(ub)}function to(){return Rd(sb)}function ma(e){return Fd(hb,e)}function f$(e){return Kd(db,e)}function I$(e){return Bd(dn,e)}function gn(e,t){return Md(gb,e,t)}function k$(e){let t=e._zod.def.shape;return va(Object.keys(t))}function w$(e,t){let r={type:"object",shape:e??{},...$.normalizeParams(t)};return new bn(r)}function $$(e,t){return new bn({type:"object",shape:e,catchall:ma(),...$.normalizeParams(t)})}function _$(e,t){return new bn({type:"object",shape:e,catchall:to(),...$.normalizeParams(t)})}function ya(e,t){return new pn({type:"union",options:e,...$.normalizeParams(t)})}function O$(e,t){return new bb({type:"union",options:e,inclusive:!1,...$.normalizeParams(t)})}function S$(e,t,r){return new pb({type:"union",options:t,discriminator:e,...$.normalizeParams(r)})}function yb(e,t){return new mb({type:"intersection",left:e,right:t})}function fb(e,t,r){let n=t instanceof E,o=n?r:t;return new vb({type:"tuple",items:e,rest:n?t:null,...$.normalizeParams(o)})}function Ib(e,t,r){return new mn({type:"record",keyType:e,valueType:t,...$.normalizeParams(r)})}function T$(e,t,r){let n=Pe(e);return n._zod.values=void 0,new mn({type:"record",keyType:n,valueType:t,...$.normalizeParams(r)})}function P$(e,t,r){return new mn({type:"record",keyType:e,valueType:t,mode:"loose",...$.normalizeParams(r)})}function A$(e,t,r){return new kb({type:"map",keyType:e,valueType:t,...$.normalizeParams(r)})}function D$(e,t){return new wb({type:"set",valueType:e,...$.normalizeParams(t)})}function va(e,t){let r=Array.isArray(e)?Object.fromEntries(e.map((n)=>[n,n])):e;return new Ko({type:"enum",entries:r,...$.normalizeParams(t)})}function L$(e,t){return new Ko({type:"enum",entries:e,...$.normalizeParams(t)})}function N$(e,t){return new $b({type:"literal",values:Array.isArray(e)?e:[e],...$.normalizeParams(t)})}function C$(e){return Jd(_b,e)}function fa(e){return new Ob({type:"transform",transform:e})}function ln(e){return new Ia({type:"optional",innerType:e})}function Tb(e){return new Sb({type:"optional",innerType:e})}function un(e){return new Pb({type:"nullable",innerType:e})}function x$(e){return ln(un(e))}function Db(e,t){return new Ab({type:"default",innerType:e,get defaultValue(){return typeof t==="function"?t():$.shallowClone(t)}})}function Nb(e,t){return new Lb({type:"prefault",innerType:e,get defaultValue(){return typeof t==="function"?t():$.shallowClone(t)}})}function Cb(e,t){return new ka({type:"nonoptional",innerType:e,...$.normalizeParams(t)})}function z$(e){return new xb({type:"success",innerType:e})}function jb(e,t){return new zb({type:"catch",innerType:e,catchValue:typeof t==="function"?t:()=>t})}function j$(e){return Hd(Eb,e)}function sn(e,t){return new wa({type:"pipe",in:e,out:t})}function E$(e,t,r){return new $a({type:"pipe",in:e,out:t,transform:r.decode,reverseTransform:r.encode})}function Rb(e){return new Ub({type:"readonly",innerType:e})}function U$(e,t){return new Fb({type:"template_literal",parts:e,...$.normalizeParams(t)})}function Bb(e){return new Kb({type:"lazy",getter:e})}function R$(e){return new Gb({type:"promise",innerType:e})}function F$(e){return new Hb({type:"function",input:Array.isArray(e?.input)?fb(e?.input):e?.input??gn(to()),output:e?.output??to()})}function K$(e){let t=new te({check:"custom"});return t._zod.check=e,t}function B$(e,t){return qd(yn,e??(()=>!0),t)}function Mb(e,t={}){return Vd(yn,e,t)}function Jb(e){return Wd(e)}function M$(e,t={}){let r=new yn({type:"custom",check:"custom",fn:(n)=>n instanceof e,abort:!0,...$.normalizeParams(t)});return r._zod.bag.Class=e,r._zod.check=(n)=>{if(!(n.value instanceof e))n.issues.push({code:"invalid_type",expected:e.name,input:n.value,inst:r,path:[...r._zod.def.path??[]]})},r}function q$(e){let t=Bb(()=>{return ya([Yi(e),rb(),nb(),lb(),gn(t),Ib(Yi(),t)])});return t}function V$(e,t){return sn(fa(e),t)}var F,Zi,Bo,ee,Qi,cn,lt,hn,ea,ta,oa,ra,na,ia,aa,ca,ob,la,ua,sa,ha,da,ga,ba,Go,Ho,oo,Mo,Jo,pa,ib,ab,cb,ub,sb,hb,db,dn,gb,bn,pn,bb,pb,mb,vb,mn,kb,wb,Ko,$b,_b,Ob,Ia,Sb,Pb,Ab,Lb,ka,xb,zb,Eb,wa,$a,Ub,Fb,Kb,Gb,Hb,yn,G$,H$,J$=(...e)=>Zd({Codec:$a,Boolean:Mo,String:Bo},...e);var an=g(()=>{Re();Re();on();tn();Mi();rn();tb();F=m("ZodType",(e,t)=>{return E.init(e,t),Object.assign(e["~standard"],{jsonSchema:{input:Ro(e,"input"),output:Ro(e,"output")}}),e.toJSONSchema=Qd(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.check=(...r)=>{return e.clone($.mergeDefs(t,{checks:[...t.checks??[],...r.map((n)=>typeof n==="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},e.with=e.check,e.clone=(r,n)=>Pe(e,r,n),e.brand=()=>e,e.register=(r,n)=>{return r.add(e,n),e},e.parse=(r,n)=>Gg(e,r,n,{callee:e.parse}),e.safeParse=(r,n)=>Mg(e,r,n),e.parseAsync=async(r,n)=>Hg(e,r,n,{callee:e.parseAsync}),e.safeParseAsync=async(r,n)=>Jg(e,r,n),e.spa=e.safeParseAsync,e.encode=(r,n)=>qg(e,r,n),e.decode=(r,n)=>Vg(e,r,n),e.encodeAsync=async(r,n)=>Wg(e,r,n),e.decodeAsync=async(r,n)=>Yg(e,r,n),e.safeEncode=(r,n)=>Xg(e,r,n),e.safeDecode=(r,n)=>Zg(e,r,n),e.safeEncodeAsync=async(r,n)=>Qg(e,r,n),e.safeDecodeAsync=async(r,n)=>eb(e,r,n),e.refine=(r,n)=>e.check(Mb(r,n)),e.superRefine=(r)=>e.check(Jb(r)),e.overwrite=(r)=>e.check(Ze(r)),e.optional=()=>ln(e),e.exactOptional=()=>Tb(e),e.nullable=()=>un(e),e.nullish=()=>ln(un(e)),e.nonoptional=(r)=>Cb(e,r),e.array=()=>gn(e),e.or=(r)=>ya([e,r]),e.and=(r)=>yb(e,r),e.transform=(r)=>sn(e,fa(r)),e.default=(r)=>Db(e,r),e.prefault=(r)=>Nb(e,r),e.catch=(r)=>jb(e,r),e.pipe=(r)=>sn(e,r),e.readonly=()=>Rb(e),e.describe=(r)=>{let n=e.clone();return fe.add(n,{description:r}),n},Object.defineProperty(e,"description",{get(){return fe.get(e)?.description},configurable:!0}),e.meta=(...r)=>{if(r.length===0)return fe.get(e);let n=e.clone();return fe.add(n,r[0]),n},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e.apply=(r)=>r(e),e}),Zi=m("_ZodString",(e,t)=>{Xt.init(e,t),F.init(e,t),e._zod.processJSONSchema=(n,o,i)=>eg(e,n,o,i);let r=e._zod.bag;e.format=r.format??null,e.minLength=r.minimum??null,e.maxLength=r.maximum??null,e.regex=(...n)=>e.check(So(...n)),e.includes=(...n)=>e.check(Ao(...n)),e.startsWith=(...n)=>e.check(Do(...n)),e.endsWith=(...n)=>e.check(Lo(...n)),e.min=(...n)=>e.check(vt(...n)),e.max=(...n)=>e.check(Qt(...n)),e.length=(...n)=>e.check(eo(...n)),e.nonempty=(...n)=>e.check(vt(1,...n)),e.lowercase=(n)=>e.check(To(n)),e.uppercase=(n)=>e.check(Po(n)),e.trim=()=>e.check(xo()),e.normalize=(...n)=>e.check(Co(...n)),e.toLowerCase=()=>e.check(zo()),e.toUpperCase=()=>e.check(jo()),e.slugify=()=>e.check(Eo())}),Bo=m("ZodString",(e,t)=>{Xt.init(e,t),Zi.init(e,t),e.email=(r)=>e.check(pi(Qi,r)),e.url=(r)=>e.check(en(hn,r)),e.jwt=(r)=>e.check(xi(ba,r)),e.emoji=(r)=>e.check(Ii(ea,r)),e.guid=(r)=>e.check(Qr(cn,r)),e.uuid=(r)=>e.check(mi(lt,r)),e.uuidv4=(r)=>e.check(yi(lt,r)),e.uuidv6=(r)=>e.check(vi(lt,r)),e.uuidv7=(r)=>e.check(fi(lt,r)),e.nanoid=(r)=>e.check(ki(ta,r)),e.guid=(r)=>e.check(Qr(cn,r)),e.cuid=(r)=>e.check(wi(oa,r)),e.cuid2=(r)=>e.check($i(ra,r)),e.ulid=(r)=>e.check(_i(na,r)),e.base64=(r)=>e.check(Li(ha,r)),e.base64url=(r)=>e.check(Ni(da,r)),e.xid=(r)=>e.check(Oi(ia,r)),e.ksuid=(r)=>e.check(Si(aa,r)),e.ipv4=(r)=>e.check(Ti(ca,r)),e.ipv6=(r)=>e.check(Pi(la,r)),e.cidrv4=(r)=>e.check(Ai(ua,r)),e.cidrv6=(r)=>e.check(Di(sa,r)),e.e164=(r)=>e.check(Ci(ga,r)),e.datetime=(r)=>e.check(Ug(r)),e.date=(r)=>e.check(Rg(r)),e.time=(r)=>e.check(Fg(r)),e.duration=(r)=>e.check(Kg(r))});ee=m("ZodStringFormat",(e,t)=>{Q.init(e,t),Zi.init(e,t)}),Qi=m("ZodEmail",(e,t)=>{cs.init(e,t),ee.init(e,t)});cn=m("ZodGUID",(e,t)=>{is.init(e,t),ee.init(e,t)});lt=m("ZodUUID",(e,t)=>{as.init(e,t),ee.init(e,t)});hn=m("ZodURL",(e,t)=>{ls.init(e,t),ee.init(e,t)});ea=m("ZodEmoji",(e,t)=>{us.init(e,t),ee.init(e,t)});ta=m("ZodNanoID",(e,t)=>{ss.init(e,t),ee.init(e,t)});oa=m("ZodCUID",(e,t)=>{hs.init(e,t),ee.init(e,t)});ra=m("ZodCUID2",(e,t)=>{ds.init(e,t),ee.init(e,t)});na=m("ZodULID",(e,t)=>{gs.init(e,t),ee.init(e,t)});ia=m("ZodXID",(e,t)=>{bs.init(e,t),ee.init(e,t)});aa=m("ZodKSUID",(e,t)=>{ps.init(e,t),ee.init(e,t)});ca=m("ZodIPv4",(e,t)=>{Is.init(e,t),ee.init(e,t)});ob=m("ZodMAC",(e,t)=>{ws.init(e,t),ee.init(e,t)});la=m("ZodIPv6",(e,t)=>{ks.init(e,t),ee.init(e,t)});ua=m("ZodCIDRv4",(e,t)=>{$s.init(e,t),ee.init(e,t)});sa=m("ZodCIDRv6",(e,t)=>{_s.init(e,t),ee.init(e,t)});ha=m("ZodBase64",(e,t)=>{Ss.init(e,t),ee.init(e,t)});da=m("ZodBase64URL",(e,t)=>{Ts.init(e,t),ee.init(e,t)});ga=m("ZodE164",(e,t)=>{Ps.init(e,t),ee.init(e,t)});ba=m("ZodJWT",(e,t)=>{As.init(e,t),ee.init(e,t)});Go=m("ZodCustomStringFormat",(e,t)=>{Ds.init(e,t),ee.init(e,t)});Ho=m("ZodNumber",(e,t)=>{si.init(e,t),F.init(e,t),e._zod.processJSONSchema=(n,o,i)=>tg(e,n,o,i),e.gt=(n,o)=>e.check(at(n,o)),e.gte=(n,o)=>e.check(Ae(n,o)),e.min=(n,o)=>e.check(Ae(n,o)),e.lt=(n,o)=>e.check(it(n,o)),e.lte=(n,o)=>e.check(Ue(n,o)),e.max=(n,o)=>e.check(Ue(n,o)),e.int=(n)=>e.check(Xi(n)),e.safe=(n)=>e.check(Xi(n)),e.positive=(n)=>e.check(at(0,n)),e.nonnegative=(n)=>e.check(Ae(0,n)),e.negative=(n)=>e.check(it(0,n)),e.nonpositive=(n)=>e.check(Ue(0,n)),e.multipleOf=(n,o)=>e.check(xt(n,o)),e.step=(n,o)=>e.check(xt(n,o)),e.finite=()=>e;let r=e._zod.bag;e.minValue=Math.max(r.minimum??Number.NEGATIVE_INFINITY,r.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(r.maximum??Number.POSITIVE_INFINITY,r.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(r.format??"").includes("int")||Number.isSafeInteger(r.multipleOf??0.5),e.isFinite=!0,e.format=r.format??null});oo=m("ZodNumberFormat",(e,t)=>{Ls.init(e,t),Ho.init(e,t)});Mo=m("ZodBoolean",(e,t)=>{Hr.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>og(e,r,n,o)});Jo=m("ZodBigInt",(e,t)=>{hi.init(e,t),F.init(e,t),e._zod.processJSONSchema=(n,o,i)=>rg(e,n,o,i),e.gte=(n,o)=>e.check(Ae(n,o)),e.min=(n,o)=>e.check(Ae(n,o)),e.gt=(n,o)=>e.check(at(n,o)),e.gte=(n,o)=>e.check(Ae(n,o)),e.min=(n,o)=>e.check(Ae(n,o)),e.lt=(n,o)=>e.check(it(n,o)),e.lte=(n,o)=>e.check(Ue(n,o)),e.max=(n,o)=>e.check(Ue(n,o)),e.positive=(n)=>e.check(at(BigInt(0),n)),e.negative=(n)=>e.check(it(BigInt(0),n)),e.nonpositive=(n)=>e.check(Ue(BigInt(0),n)),e.nonnegative=(n)=>e.check(Ae(BigInt(0),n)),e.multipleOf=(n,o)=>e.check(xt(n,o));let r=e._zod.bag;e.minValue=r.minimum??null,e.maxValue=r.maximum??null,e.format=r.format??null});pa=m("ZodBigIntFormat",(e,t)=>{Ns.init(e,t),Jo.init(e,t)});ib=m("ZodSymbol",(e,t)=>{Cs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>ng(e,r,n,o)});ab=m("ZodUndefined",(e,t)=>{xs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>ag(e,r,n,o)});cb=m("ZodNull",(e,t)=>{zs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>ig(e,r,n,o)});ub=m("ZodAny",(e,t)=>{js.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>ug(e,r,n,o)});sb=m("ZodUnknown",(e,t)=>{Es.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>sg(e,r,n,o)});hb=m("ZodNever",(e,t)=>{Us.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>lg(e,r,n,o)});db=m("ZodVoid",(e,t)=>{Rs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>cg(e,r,n,o)});dn=m("ZodDate",(e,t)=>{Fs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(n,o,i)=>hg(e,n,o,i),e.min=(n,o)=>e.check(Ae(n,o)),e.max=(n,o)=>e.check(Ue(n,o));let r=e._zod.bag;e.minDate=r.minimum?new Date(r.minimum):null,e.maxDate=r.maximum?new Date(r.maximum):null});gb=m("ZodArray",(e,t)=>{Ks.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>$g(e,r,n,o),e.element=t.element,e.min=(r,n)=>e.check(vt(r,n)),e.nonempty=(r)=>e.check(vt(1,r)),e.max=(r,n)=>e.check(Qt(r,n)),e.length=(r,n)=>e.check(eo(r,n)),e.unwrap=()=>e.element});bn=m("ZodObject",(e,t)=>{Bs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>_g(e,r,n,o),$.defineLazy(e,"shape",()=>{return t.shape}),e.keyof=()=>va(Object.keys(e._zod.def.shape)),e.catchall=(r)=>e.clone({...e._zod.def,catchall:r}),e.passthrough=()=>e.clone({...e._zod.def,catchall:to()}),e.loose=()=>e.clone({...e._zod.def,catchall:to()}),e.strict=()=>e.clone({...e._zod.def,catchall:ma()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=(r)=>{return $.extend(e,r)},e.safeExtend=(r)=>{return $.safeExtend(e,r)},e.merge=(r)=>$.merge(e,r),e.pick=(r)=>$.pick(e,r),e.omit=(r)=>$.omit(e,r),e.partial=(...r)=>$.partial(Ia,e,r[0]),e.required=(...r)=>$.required(ka,e,r[0])});pn=m("ZodUnion",(e,t)=>{Mr.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Ki(e,r,n,o),e.options=t.options});bb=m("ZodXor",(e,t)=>{pn.init(e,t),Gs.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Ki(e,r,n,o),e.options=t.options});pb=m("ZodDiscriminatedUnion",(e,t)=>{pn.init(e,t),Hs.init(e,t)});mb=m("ZodIntersection",(e,t)=>{Ms.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Og(e,r,n,o)});vb=m("ZodTuple",(e,t)=>{di.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Sg(e,r,n,o),e.rest=(r)=>e.clone({...e._zod.def,rest:r})});mn=m("ZodRecord",(e,t)=>{Js.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Tg(e,r,n,o),e.keyType=t.keyType,e.valueType=t.valueType});kb=m("ZodMap",(e,t)=>{qs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>kg(e,r,n,o),e.keyType=t.keyType,e.valueType=t.valueType,e.min=(...r)=>e.check(ct(...r)),e.nonempty=(r)=>e.check(ct(1,r)),e.max=(...r)=>e.check(zt(...r)),e.size=(...r)=>e.check(Zt(...r))});wb=m("ZodSet",(e,t)=>{Vs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>wg(e,r,n,o),e.min=(...r)=>e.check(ct(...r)),e.nonempty=(r)=>e.check(ct(1,r)),e.max=(...r)=>e.check(zt(...r)),e.size=(...r)=>e.check(Zt(...r))});Ko=m("ZodEnum",(e,t)=>{Ws.init(e,t),F.init(e,t),e._zod.processJSONSchema=(n,o,i)=>dg(e,n,o,i),e.enum=t.entries,e.options=Object.values(t.entries);let r=new Set(Object.keys(t.entries));e.extract=(n,o)=>{let i={};for(let a of n)if(r.has(a))i[a]=t.entries[a];else throw Error(`Key ${a} not found in enum`);return new Ko({...t,checks:[],...$.normalizeParams(o),entries:i})},e.exclude=(n,o)=>{let i={...t.entries};for(let a of n)if(r.has(a))delete i[a];else throw Error(`Key ${a} not found in enum`);return new Ko({...t,checks:[],...$.normalizeParams(o),entries:i})}});$b=m("ZodLiteral",(e,t)=>{Ys.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>gg(e,r,n,o),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});_b=m("ZodFile",(e,t)=>{Xs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>mg(e,r,n,o),e.min=(r,n)=>e.check(ct(r,n)),e.max=(r,n)=>e.check(zt(r,n)),e.mime=(r,n)=>e.check(No(Array.isArray(r)?r:[r],n))});Ob=m("ZodTransform",(e,t)=>{Zs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Ig(e,r,n,o),e._zod.parse=(r,n)=>{if(n.direction==="backward")throw new Vt(e.constructor.name);r.addIssue=(i)=>{if(typeof i==="string")r.issues.push($.issue(i,r.value,t));else{let a=i;if(a.fatal)a.continue=!1;a.code??(a.code="custom"),a.input??(a.input=r.value),a.inst??(a.inst=e),r.issues.push($.issue(a))}};let o=t.transform(r.value,r);if(o instanceof Promise)return o.then((i)=>{return r.value=i,r});return r.value=o,r}});Ia=m("ZodOptional",(e,t)=>{gi.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Bi(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});Sb=m("ZodExactOptional",(e,t)=>{Qs.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Bi(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});Pb=m("ZodNullable",(e,t)=>{eh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Pg(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});Ab=m("ZodDefault",(e,t)=>{th.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Dg(e,r,n,o),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});Lb=m("ZodPrefault",(e,t)=>{oh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Lg(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});ka=m("ZodNonOptional",(e,t)=>{rh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Ag(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});xb=m("ZodSuccess",(e,t)=>{nh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>yg(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});zb=m("ZodCatch",(e,t)=>{ih.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Ng(e,r,n,o),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});Eb=m("ZodNaN",(e,t)=>{ah.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>bg(e,r,n,o)});wa=m("ZodPipe",(e,t)=>{ch.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>Cg(e,r,n,o),e.in=t.in,e.out=t.out});$a=m("ZodCodec",(e,t)=>{wa.init(e,t),Jr.init(e,t)});Ub=m("ZodReadonly",(e,t)=>{lh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>xg(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});Fb=m("ZodTemplateLiteral",(e,t)=>{uh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>pg(e,r,n,o)});Kb=m("ZodLazy",(e,t)=>{dh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>jg(e,r,n,o),e.unwrap=()=>e._zod.def.getter()});Gb=m("ZodPromise",(e,t)=>{hh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>zg(e,r,n,o),e.unwrap=()=>e._zod.def.innerType});Hb=m("ZodFunction",(e,t)=>{sh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>fg(e,r,n,o)});yn=m("ZodCustom",(e,t)=>{gh.init(e,t),F.init(e,t),e._zod.processJSONSchema=(r,n,o)=>vg(e,r,n,o)});G$=Yd,H$=Xd});function JN(e){ue({customError:e})}function qN(){return ue().customError}var MN,qb;var W$=g(()=>{Re();MN={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};(function(e){})(qb||(qb={}))});function WN(e,t){let r=e.$schema;if(r==="https://json-schema.org/draft/2020-12/schema")return"draft-2020-12";if(r==="http://json-schema.org/draft-07/schema#")return"draft-7";if(r==="http://json-schema.org/draft-04/schema#")return"draft-4";return t??"draft-2020-12"}function YN(e,t){if(!e.startsWith("#"))throw Error("External $ref is not supported, only local refs (#/...) are allowed");let r=e.slice(1).split("/").filter(Boolean);if(r.length===0)return t.rootSchema;let n=t.version==="draft-2020-12"?"$defs":"definitions";if(r[0]===n){let o=r[1];if(!o||!t.defs[o])throw Error(`Reference not found: ${e}`);return t.defs[o]}throw Error(`Reference not found: ${e}`)}function Y$(e,t){if(e.not!==void 0){if(typeof e.not==="object"&&Object.keys(e.not).length===0)return A.never();throw Error("not is not supported in Zod (except { not: {} } for never)")}if(e.unevaluatedItems!==void 0)throw Error("unevaluatedItems is not supported");if(e.unevaluatedProperties!==void 0)throw Error("unevaluatedProperties is not supported");if(e.if!==void 0||e.then!==void 0||e.else!==void 0)throw Error("Conditional schemas (if/then/else) are not supported");if(e.dependentSchemas!==void 0||e.dependentRequired!==void 0)throw Error("dependentSchemas and dependentRequired are not supported");if(e.$ref){let o=e.$ref;if(t.refs.has(o))return t.refs.get(o);if(t.processing.has(o))return A.lazy(()=>{if(!t.refs.has(o))throw Error(`Circular reference not resolved: ${o}`);return t.refs.get(o)});t.processing.add(o);let i=YN(o,t),a=Oe(i,t);return t.refs.set(o,a),t.processing.delete(o),a}if(e.enum!==void 0){let o=e.enum;if(t.version==="openapi-3.0"&&e.nullable===!0&&o.length===1&&o[0]===null)return A.null();if(o.length===0)return A.never();if(o.length===1)return A.literal(o[0]);if(o.every((a)=>typeof a==="string"))return A.enum(o);let i=o.map((a)=>A.literal(a));if(i.length<2)return i[0];return A.union([i[0],i[1],...i.slice(2)])}if(e.const!==void 0)return A.literal(e.const);let r=e.type;if(Array.isArray(r)){let o=r.map((i)=>{let a={...e,type:i};return Y$(a,t)});if(o.length===0)return A.never();if(o.length===1)return o[0];return A.union(o)}if(!r)return A.any();let n;switch(r){case"string":{let o=A.string();if(e.format){let i=e.format;if(i==="email")o=o.check(A.email());else if(i==="uri"||i==="uri-reference")o=o.check(A.url());else if(i==="uuid"||i==="guid")o=o.check(A.uuid());else if(i==="date-time")o=o.check(A.iso.datetime());else if(i==="date")o=o.check(A.iso.date());else if(i==="time")o=o.check(A.iso.time());else if(i==="duration")o=o.check(A.iso.duration());else if(i==="ipv4")o=o.check(A.ipv4());else if(i==="ipv6")o=o.check(A.ipv6());else if(i==="mac")o=o.check(A.mac());else if(i==="cidr")o=o.check(A.cidrv4());else if(i==="cidr-v6")o=o.check(A.cidrv6());else if(i==="base64")o=o.check(A.base64());else if(i==="base64url")o=o.check(A.base64url());else if(i==="e164")o=o.check(A.e164());else if(i==="jwt")o=o.check(A.jwt());else if(i==="emoji")o=o.check(A.emoji());else if(i==="nanoid")o=o.check(A.nanoid());else if(i==="cuid")o=o.check(A.cuid());else if(i==="cuid2")o=o.check(A.cuid2());else if(i==="ulid")o=o.check(A.ulid());else if(i==="xid")o=o.check(A.xid());else if(i==="ksuid")o=o.check(A.ksuid())}if(typeof e.minLength==="number")o=o.min(e.minLength);if(typeof e.maxLength==="number")o=o.max(e.maxLength);if(e.pattern)o=o.regex(new RegExp(e.pattern));n=o;break}case"number":case"integer":{let o=r==="integer"?A.number().int():A.number();if(typeof e.minimum==="number")o=o.min(e.minimum);if(typeof e.maximum==="number")o=o.max(e.maximum);if(typeof e.exclusiveMinimum==="number")o=o.gt(e.exclusiveMinimum);else if(e.exclusiveMinimum===!0&&typeof e.minimum==="number")o=o.gt(e.minimum);if(typeof e.exclusiveMaximum==="number")o=o.lt(e.exclusiveMaximum);else if(e.exclusiveMaximum===!0&&typeof e.maximum==="number")o=o.lt(e.maximum);if(typeof e.multipleOf==="number")o=o.multipleOf(e.multipleOf);n=o;break}case"boolean":{n=A.boolean();break}case"null":{n=A.null();break}case"object":{let o={},i=e.properties||{},a=new Set(e.required||[]);for(let[u,s]of Object.entries(i)){let d=Oe(s,t);o[u]=a.has(u)?d:d.optional()}if(e.propertyNames){let u=Oe(e.propertyNames,t),s=e.additionalProperties&&typeof e.additionalProperties==="object"?Oe(e.additionalProperties,t):A.any();if(Object.keys(o).length===0){n=A.record(u,s);break}let d=A.object(o).passthrough(),h=A.looseRecord(u,s);n=A.intersection(d,h);break}if(e.patternProperties){let u=e.patternProperties,s=Object.keys(u),d=[];for(let b of s){let p=Oe(u[b],t),_=A.string().regex(new RegExp(b));d.push(A.looseRecord(_,p))}let h=[];if(Object.keys(o).length>0)h.push(A.object(o).passthrough());if(h.push(...d),h.length===0)n=A.object({}).passthrough();else if(h.length===1)n=h[0];else{let b=A.intersection(h[0],h[1]);for(let p=2;p<h.length;p++)b=A.intersection(b,h[p]);n=b}break}let c=A.object(o);if(e.additionalProperties===!1)n=c.strict();else if(typeof e.additionalProperties==="object")n=c.catchall(Oe(e.additionalProperties,t));else n=c.passthrough();break}case"array":{let{prefixItems:o,items:i}=e;if(o&&Array.isArray(o)){let a=o.map((u)=>Oe(u,t)),c=i&&typeof i==="object"&&!Array.isArray(i)?Oe(i,t):void 0;if(c)n=A.tuple(a).rest(c);else n=A.tuple(a);if(typeof e.minItems==="number")n=n.check(A.minLength(e.minItems));if(typeof e.maxItems==="number")n=n.check(A.maxLength(e.maxItems))}else if(Array.isArray(i)){let a=i.map((u)=>Oe(u,t)),c=e.additionalItems&&typeof e.additionalItems==="object"?Oe(e.additionalItems,t):void 0;if(c)n=A.tuple(a).rest(c);else n=A.tuple(a);if(typeof e.minItems==="number")n=n.check(A.minLength(e.minItems));if(typeof e.maxItems==="number")n=n.check(A.maxLength(e.maxItems))}else if(i!==void 0){let a=Oe(i,t),c=A.array(a);if(typeof e.minItems==="number")c=c.min(e.minItems);if(typeof e.maxItems==="number")c=c.max(e.maxItems);n=c}else n=A.array(A.any());break}default:throw Error(`Unsupported type: ${r}`)}if(e.description)n=n.describe(e.description);if(e.default!==void 0)n=n.default(e.default);return n}function Oe(e,t){if(typeof e==="boolean")return e?A.any():A.never();let r=Y$(e,t),n=e.type||e.enum!==void 0||e.const!==void 0;if(e.anyOf&&Array.isArray(e.anyOf)){let c=e.anyOf.map((s)=>Oe(s,t)),u=A.union(c);r=n?A.intersection(r,u):u}if(e.oneOf&&Array.isArray(e.oneOf)){let c=e.oneOf.map((s)=>Oe(s,t)),u=A.xor(c);r=n?A.intersection(r,u):u}if(e.allOf&&Array.isArray(e.allOf))if(e.allOf.length===0)r=n?r:A.any();else{let c=n?r:Oe(e.allOf[0],t),u=n?0:1;for(let s=u;s<e.allOf.length;s++)c=A.intersection(c,Oe(e.allOf[s],t));r=c}if(e.nullable===!0&&t.version==="openapi-3.0")r=A.nullable(r);if(e.readOnly===!0)r=A.readonly(r);let o={},i=["$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor"];for(let c of i)if(c in e)o[c]=e[c];let a=["contentEncoding","contentMediaType","contentSchema"];for(let c of a)if(c in e)o[c]=e[c];for(let c of Object.keys(e))if(!VN.has(c))o[c]=e[c];if(Object.keys(o).length>0)t.registry.add(r,o);return r}function X$(e,t){if(typeof e==="boolean")return e?A.any():A.never();let r=WN(e,t?.defaultTarget),n=e.$defs||e.definitions||{},o={version:r,defs:n,refs:new Map,processing:new Set,rootSchema:e,registry:t?.registry??fe};return Oe(e,o)}var A,VN;var Z$=g(()=>{Zr();Mi();rn();an();A={...nn,...Hi,iso:Fo},VN=new Set(["$schema","$ref","$defs","definitions","$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor","type","enum","const","anyOf","oneOf","allOf","not","properties","required","additionalProperties","patternProperties","propertyNames","minProperties","maxProperties","items","prefixItems","additionalItems","minItems","maxItems","uniqueItems","contains","minContains","maxContains","minLength","maxLength","pattern","format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","multipleOf","description","default","contentEncoding","contentMediaType","contentSchema","unevaluatedItems","unevaluatedProperties","if","then","else","dependentSchemas","dependentRequired","nullable","readOnly"])});var Vb={};et(Vb,{string:()=>XN,number:()=>ZN,date:()=>tC,boolean:()=>QN,bigint:()=>eC});function XN(e){return pd(Bo,e)}function ZN(e){return $d(Ho,e)}function QN(e){return Dd(Mo,e)}function eC(e){return Nd(Jo,e)}function tC(e){return Gd(dn,e)}var Q$=g(()=>{Re();an()});var l={};et(l,{xor:()=>O$,xid:()=>Vw,void:()=>f$,uuidv7:()=>Fw,uuidv6:()=>Rw,uuidv4:()=>Uw,uuid:()=>Ew,util:()=>$,url:()=>Kw,uppercase:()=>Po,unknown:()=>to,union:()=>ya,undefined:()=>y$,ulid:()=>qw,uint64:()=>p$,uint32:()=>d$,tuple:()=>fb,trim:()=>xo,treeifyError:()=>nu,transform:()=>fa,toUpperCase:()=>jo,toLowerCase:()=>zo,toJSONSchema:()=>Gi,templateLiteral:()=>U$,symbol:()=>m$,superRefine:()=>Jb,success:()=>z$,stringbool:()=>J$,stringFormat:()=>i$,string:()=>Yi,strictObject:()=>$$,startsWith:()=>Do,slugify:()=>Eo,size:()=>Zt,setErrorMap:()=>JN,set:()=>D$,safeParseAsync:()=>Jg,safeParse:()=>Mg,safeEncodeAsync:()=>Qg,safeEncode:()=>Xg,safeDecodeAsync:()=>eb,safeDecode:()=>Zg,registry:()=>bi,regexes:()=>qe,regex:()=>So,refine:()=>Mb,record:()=>Ib,readonly:()=>Rb,property:()=>Ri,promise:()=>R$,prettifyError:()=>iu,preprocess:()=>V$,prefault:()=>Nb,positive:()=>zi,pipe:()=>sn,partialRecord:()=>T$,parseAsync:()=>Hg,parse:()=>Gg,overwrite:()=>Ze,optional:()=>ln,object:()=>w$,number:()=>rb,nullish:()=>x$,nullable:()=>un,null:()=>lb,normalize:()=>Co,nonpositive:()=>Ei,nonoptional:()=>Cb,nonnegative:()=>Ui,never:()=>ma,negative:()=>ji,nativeEnum:()=>L$,nanoid:()=>Hw,nan:()=>j$,multipleOf:()=>xt,minSize:()=>ct,minLength:()=>vt,mime:()=>No,meta:()=>H$,maxSize:()=>zt,maxLength:()=>Qt,map:()=>A$,mac:()=>Xw,lte:()=>Ue,lt:()=>it,lowercase:()=>To,looseRecord:()=>P$,looseObject:()=>_$,locales:()=>Xr,literal:()=>N$,length:()=>eo,lazy:()=>Bb,ksuid:()=>Ww,keyof:()=>k$,jwt:()=>n$,json:()=>q$,iso:()=>Fo,ipv6:()=>Zw,ipv4:()=>Yw,intersection:()=>yb,int64:()=>b$,int32:()=>h$,int:()=>Xi,instanceof:()=>M$,includes:()=>Ao,httpUrl:()=>Bw,hostname:()=>a$,hex:()=>c$,hash:()=>l$,guid:()=>jw,gte:()=>Ae,gt:()=>at,globalRegistry:()=>fe,getErrorMap:()=>qN,function:()=>F$,fromJSONSchema:()=>X$,formatError:()=>Fr,float64:()=>s$,float32:()=>u$,flattenError:()=>Rr,file:()=>C$,exactOptional:()=>Tb,enum:()=>va,endsWith:()=>Lo,encodeAsync:()=>Wg,encode:()=>qg,emoji:()=>Gw,email:()=>zw,e164:()=>r$,discriminatedUnion:()=>S$,describe:()=>G$,decodeAsync:()=>Yg,decode:()=>Vg,date:()=>I$,custom:()=>B$,cuid2:()=>Jw,cuid:()=>Mw,core:()=>ft,config:()=>ue,coerce:()=>Vb,codec:()=>E$,clone:()=>Pe,cidrv6:()=>e$,cidrv4:()=>Qw,check:()=>K$,catch:()=>jb,boolean:()=>nb,bigint:()=>g$,base64url:()=>o$,base64:()=>t$,array:()=>gn,any:()=>v$,_function:()=>F$,_default:()=>Db,_ZodString:()=>Zi,ZodXor:()=>bb,ZodXID:()=>ia,ZodVoid:()=>db,ZodUnknown:()=>sb,ZodUnion:()=>pn,ZodUndefined:()=>ab,ZodUUID:()=>lt,ZodURL:()=>hn,ZodULID:()=>na,ZodType:()=>F,ZodTuple:()=>vb,ZodTransform:()=>Ob,ZodTemplateLiteral:()=>Fb,ZodSymbol:()=>ib,ZodSuccess:()=>xb,ZodStringFormat:()=>ee,ZodString:()=>Bo,ZodSet:()=>wb,ZodRecord:()=>mn,ZodRealError:()=>ze,ZodReadonly:()=>Ub,ZodPromise:()=>Gb,ZodPrefault:()=>Lb,ZodPipe:()=>wa,ZodOptional:()=>Ia,ZodObject:()=>bn,ZodNumberFormat:()=>oo,ZodNumber:()=>Ho,ZodNullable:()=>Pb,ZodNull:()=>cb,ZodNonOptional:()=>ka,ZodNever:()=>hb,ZodNanoID:()=>ta,ZodNaN:()=>Eb,ZodMap:()=>kb,ZodMAC:()=>ob,ZodLiteral:()=>$b,ZodLazy:()=>Kb,ZodKSUID:()=>aa,ZodJWT:()=>ba,ZodIssueCode:()=>MN,ZodIntersection:()=>mb,ZodISOTime:()=>Vi,ZodISODuration:()=>Wi,ZodISODateTime:()=>Ji,ZodISODate:()=>qi,ZodIPv6:()=>la,ZodIPv4:()=>ca,ZodGUID:()=>cn,ZodFunction:()=>Hb,ZodFirstPartyTypeKind:()=>qb,ZodFile:()=>_b,ZodExactOptional:()=>Sb,ZodError:()=>GN,ZodEnum:()=>Ko,ZodEmoji:()=>ea,ZodEmail:()=>Qi,ZodE164:()=>ga,ZodDiscriminatedUnion:()=>pb,ZodDefault:()=>Ab,ZodDate:()=>dn,ZodCustomStringFormat:()=>Go,ZodCustom:()=>yn,ZodCodec:()=>$a,ZodCatch:()=>zb,ZodCUID2:()=>ra,ZodCUID:()=>oa,ZodCIDRv6:()=>sa,ZodCIDRv4:()=>ua,ZodBoolean:()=>Mo,ZodBigIntFormat:()=>pa,ZodBigInt:()=>Jo,ZodBase64URL:()=>da,ZodBase64:()=>ha,ZodArray:()=>gb,ZodAny:()=>ub,TimePrecision:()=>yd,NEVER:()=>ql,$output:()=>hd,$input:()=>dd,$brand:()=>Vl});var Wb=g(()=>{Re();Re();$h();Re();on();Z$();sd();rn();rn();Q$();an();Mi();Bg();tb();W$();ue(qr())});var Ie=g(()=>{Wb();Wb()});var D=(e)=>{let t={operationId:e.operationId,backend:e.backend,pagination:e.pagination,async:e.async,examples:e.examples??[]};return{...e,contract:Bm.$meta(t).route({method:e.route.method,path:e.route.path,tags:e.route.tags,operationId:e.operationId,description:e.description,successStatus:e.route.successStatus,successDescription:e.route.successDescription,deprecated:e.route.deprecated,inputStructure:e.route.inputStructure}).input(e.input).output(e.output)}};var Le=g(()=>{Xc()});var e_,Yb,oC,rC,t_,Xb,Zb,o_,r_,_a,n_,i_,qo,a_,c_,Oa,l_,u_,Vo,s_,h_,Sa,d_,g_,Ta,b_,p_,Pa,m_,y_,Aa,v_,f_,Da,nC;var Qb=g(()=>{Jl();Ie();Le();e_=po,Yb=l.enum(e_),oC=l.enum(["pending","provisioning","active","error"]),rC=l.object({name:l.string().describe("Field name used as the JSON key in metadata."),type:l.string().describe('Zod type name, e.g. "string", "boolean", "enum".'),required:l.boolean().describe("Whether the field is required."),sensitive:l.boolean().describe("Whether the field contains a secret and will be encrypted."),description:l.string().nullable().describe("Human-readable description of the field.")}),t_=l.object({id:l.string().describe("Data source type identifier."),name:l.string().describe("Human-readable display name."),metadataFields:l.array(rC).describe("Fields required in the metadata object when creating a connection."),setupSkill:l.string().nullable().describe("Markdown setup skill for AI agents. Null when no skill is available.")}),Xb=l.object({id:l.string().uuid(),projectId:l.string().uuid(),dataSourceType:Yb,displayName:l.string().nullable(),createdAt:l.string().datetime()}),Zb=l.object({id:l.string().uuid(),connectionId:l.string().uuid(),displayName:l.string(),config:l.record(l.string(),l.unknown()),status:oC,errorMessage:l.string().nullable(),createdAt:l.string().datetime()}),o_=l.object({}),r_=l.object({types:l.array(t_)}),_a=D({operationId:"dataSources.listTypes",description:"List all supported data source types with their metadata requirements.",backend:"api",route:{method:"GET",path:"/data-sources/types",tags:["Data Sources"]},input:o_,output:r_,pagination:"none",async:"sync"}),n_=l.object({projectId:l.string().uuid().optional().describe("Project to list connections for. Auto-filled from SDK context when omitted."),dataSourceType:Yb.optional().describe("Filter connections by data source type.")}),i_=l.object({connections:l.array(Xb)}),qo=D({operationId:"dataSources.listConnections",description:"List data source connections within one project.",backend:"api",route:{method:"GET",path:"/data-sources/connections",tags:["Data Sources"]},input:n_,output:i_,pagination:"none",async:"sync"}),a_=l.object({connectionId:l.string().uuid().describe("Connection ID to fetch.")}),c_=l.object({connection:Xb}),Oa=D({operationId:"dataSources.getConnection",description:"Get one data source connection by ID.",backend:"api",route:{method:"GET",path:"/data-sources/connections/{connectionId}",tags:["Data Sources"]},input:a_,output:c_,pagination:"none",async:"sync"}),l_=l.object({projectId:l.string().uuid().optional().describe("Project to create the connection in. Auto-filled from SDK context when omitted."),dataSourceType:Yb.describe("Data source type identifier."),metadata:l.record(l.string(),l.unknown()).describe("Platform-specific credentials. Fields vary by data source type."),displayName:l.string().optional().describe("Optional human-readable name for this connection.")}),u_=l.object({connectionId:l.string().uuid().describe("ID of the created connection."),publicKey:l.string().describe("Auto-generated public API key for this connection. Store this securely — it is only shown once.")}),Vo=D({operationId:"dataSources.createConnection",description:"Create a new data source connection. Validates credentials, encrypts sensitive fields, and auto-generates a public API key.",backend:"api",route:{method:"POST",path:"/data-sources/connections",successStatus:201,tags:["Data Sources"]},input:l_,output:u_,pagination:"none",async:"sync"}),s_=l.object({connectionId:l.string().uuid().describe("Connection ID to list streams for.")}),h_=l.object({streams:l.array(Zb)}),Sa=D({operationId:"dataSources.listStreams",description:"List streams for a data source connection.",backend:"api",route:{method:"GET",path:"/data-sources/connections/{connectionId}/streams",tags:["Data Sources"]},input:s_,output:h_,pagination:"none",async:"sync"}),d_=l.object({connectionId:l.string().uuid().describe("Connection ID to create the stream under."),displayName:l.string().describe("Resource name, e.g. service or app name."),config:l.record(l.string(),l.unknown()).describe("Platform-specific stream configuration.")}),g_=l.object({streamId:l.string().uuid().describe("ID of the created stream."),publicKey:l.string().optional().describe("Auto-generated public API key for this stream. Returned only when the data source mints a per-stream key (manual-only sources). Store this securely — it is only shown once.")}),Ta=D({operationId:"dataSources.createStream",description:"Create a new stream for a data source connection. Triggers async provisioning.",backend:"api",route:{method:"POST",path:"/data-sources/connections/{connectionId}/streams",successStatus:201,tags:["Data Sources"]},input:d_,output:g_,pagination:"none",async:"sync"}),b_=l.object({streamId:l.string().uuid().describe("Stream ID to fetch.")}),p_=l.object({stream:Zb}),Pa=D({operationId:"dataSources.getStream",description:"Get one data source stream by ID. Use to poll provisioning status.",backend:"api",route:{method:"GET",path:"/data-sources/streams/{streamId}",tags:["Data Sources"]},input:b_,output:p_,pagination:"none",async:"sync"}),m_=l.object({streamId:l.string().uuid().describe("Stream ID to delete.")}),y_=l.object({success:l.boolean()}),Aa=D({operationId:"dataSources.deleteStream",description:"Delete a data source stream. For manual-only sources where streams are stored as connection API keys, deletes the underlying public key.",backend:"api",route:{method:"DELETE",path:"/data-sources/streams/{streamId}",successStatus:204,tags:["Data Sources"]},input:m_,output:y_,pagination:"none",async:"sync"}),v_=l.object({connectionId:l.string().uuid().describe("Connection ID to disconnect.")}),f_=l.object({success:l.boolean(),connectionTeardownError:l.string().nullable().describe("Null when teardown succeeded; error message when remote cleanup failed.")}),Da=D({operationId:"dataSources.disconnectConnection",description:"Disconnect a data source connection. Soft-deletes the connection, all associated streams, and all associated API keys. Triggers async backend teardown when the source supports it.",backend:"api",route:{method:"DELETE",path:"/data-sources/connections/{connectionId}",successStatus:200,tags:["Data Sources"]},input:v_,output:f_,pagination:"none",async:"sync"}),nC={listTypes:_a.contract,listConnections:qo.contract,getConnection:Oa.contract,createConnection:Vo.contract,disconnectConnection:Da.contract,listStreams:Sa.contract,createStream:Ta.contract,getStream:Pa.contract,deleteStream:Aa.contract}});var ro,vn,I_,k_,w_,$_,__,O_,S_,T_,P_,A_,D_,Wo,La,Na,Ca,xa,za,iC;var ep=g(()=>{Ie();Le();ro=l.object({id:l.string().uuid(),projectId:l.string().uuid(),name:l.string(),whatHappened:l.string(),whyItHappened:l.string().nullable(),howToFix:l.string().nullable(),status:l.enum(["open","resolved","ignored"]),severity:l.enum(["low","medium","high","critical"]),statusComponentId:l.string().uuid().nullable(),createdAt:l.string().datetime(),resolvedAt:l.string().datetime().nullable(),mutedAt:l.string().datetime().nullable(),lastActivityAt:l.string().datetime().nullable()}),vn=l.object({projectId:l.string().uuid().optional().describe("Project to create the issue in. Auto-filled from CLI and SDK context when omitted."),name:l.string().trim().min(1).optional().describe("Stable issue name for indexing and mute matching. When omitted, the name is derived from whatHappened."),whatHappened:l.string().trim().min(1,"What happened cannot be empty").describe("Concise summary of what happened, including the user-visible impact."),whyItHappened:l.string().trim().min(1,"Why it happened cannot be empty").describe("Root cause or best current hypothesis."),howToFix:l.string().trim().min(1,"How to fix it cannot be empty").describe("Remediation guidance describing the next steps."),severity:l.enum(["low","medium","high","critical"]).default("medium").describe("Issue severity used for prioritization and triage."),statusComponentId:l.string().uuid().optional().describe("Optional status component ID to link to the issue.")}),I_=l.object({issue:ro}),k_=l.object({projectId:l.string().uuid().optional().describe("Project to list issues for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of issues to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),status:l.enum(["open","resolved","ignored"]).optional().describe("Filter by issue status."),severity:l.enum(["low","medium","high","critical"]).optional().describe("Filter by severity."),statusComponentId:l.string().uuid().optional().describe("Filter by status component ID.")}),w_=l.object({issues:l.array(ro),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),$_=l.object({issueId:l.string().uuid().describe("Issue ID to retrieve.")}),__=l.object({issue:ro}),O_=l.object({issueId:l.string().uuid().describe("Issue ID to resolve.")}),S_=l.object({issue:ro}),T_=l.object({issueId:l.string().uuid().describe("Issue ID to ignore.")}),P_=l.object({issue:ro}),A_=l.object({issueId:l.string().uuid().describe("Issue ID to unignore.")}),D_=l.object({issue:ro}),Wo=D({operationId:"issues.create",description:"Create an issue in a project.",backend:"api",route:{method:"POST",path:"/issues",tags:["Issues"],successStatus:201},input:vn,output:I_,pagination:"none",async:"sync"}),La=D({operationId:"issues.list",description:"List issues in a project, optionally filtered by status and severity.",backend:"api",route:{method:"GET",path:"/issues",tags:["Issues"]},input:k_,output:w_,pagination:"cursor",async:"sync"}),Na=D({operationId:"issues.get",description:"Get a single issue by ID.",backend:"api",route:{method:"GET",path:"/issues/{issueId}",tags:["Issues"]},input:$_,output:__,pagination:"none",async:"sync"}),Ca=D({operationId:"issues.resolve",description:"Resolve an open issue.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/resolve",tags:["Issues"]},input:O_,output:S_,pagination:"none",async:"sync"}),xa=D({operationId:"issues.ignore",description:"Ignore an open issue.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/ignore",tags:["Issues"]},input:T_,output:P_,pagination:"none",async:"sync"}),za=D({operationId:"issues.unignore",description:"Unignore an ignored issue. Mute is separate from ignored status.",backend:"api",route:{method:"POST",path:"/issues/{issueId}/unignore",tags:["Issues"]},input:A_,output:D_,pagination:"none",async:"sync"}),iC={create:Wo.contract,list:La.contract,get:Na.contract,resolve:Ca.contract,ignore:xa.contract,unignore:za.contract}});var ja,L_,Ea,Ua,N_,C_,x_,z_,Ra,tp,j_,E_,U_,R_,F_,K_,B_,G_,H_,M_,J_,q_,Yo,Xo,Zo,Qo,er,Fa,Ka,Ba,Ga,Ha,aC,cC;var op=g(()=>{Ie();Le();ja=/^[a-zA-Z0-9\s\-_]+$/,L_=l.object({id:l.string().uuid(),name:l.string(),expiresAt:l.string().datetime().nullable(),lastUsedAt:l.string().datetime().nullable(),createdAt:l.string().datetime()}),Ea=L_.extend({projectId:l.string().uuid(),dataSourceConnectionId:l.string().uuid().nullable().describe("Linked data source connection ID when this key is scoped to one data source."),deactivatedAt:l.string().datetime().nullable().describe("Timestamp when this public key was deactivated.")}),Ua=L_.extend({projectId:l.string().uuid().nullable()}),N_=l.object({projectId:l.string().uuid().optional().describe("Project to list keys for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),C_=l.object({publicKeys:l.array(Ea),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),x_=l.object({secretKeys:l.array(Ua),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),z_=l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),keyId:l.string().uuid().describe("Key ID to fetch.")}),Ra=l.object({publicKey:Ea}),tp=l.object({secretKey:Ua}),j_=l.object({projectId:l.string().uuid().optional().describe("Project to create the key in. Auto-filled from CLI and SDK context when omitted."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(ja,"Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),expiresAt:l.string().datetime().optional().describe("Optional expiration timestamp for the key.")}),E_=l.object({publicKey:Ea.extend({value:l.string()})}),U_=l.object({secretKey:Ua.extend({value:l.string()})}),R_=l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted."),keyId:l.string().uuid().describe("Key ID to update."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(ja,"Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),expiresAt:l.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")}),F_=l.object({params:l.object({keyId:l.string().uuid().describe("Public key ID to deactivate.")}),query:l.object({projectId:l.string().uuid().optional().describe("Project containing the key. Auto-filled from CLI and SDK context when omitted.")})}).transform(({params:e,query:t})=>({...t,...e})),K_=Ra,B_=l.void(),G_=l.object({limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of keys to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),H_=l.object({keyId:l.string().uuid().describe("Key ID to fetch.")}),M_=l.object({projectId:l.string().uuid().optional().describe("Project to scope this key to. When set, the key can only access resources within this project. Omit for organization-wide access."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(ja,"Name can only contain letters, numbers, spaces, hyphens, and underscores").describe("Human-readable name for the key."),expiresAt:l.string().datetime().optional().describe("Optional expiration timestamp for the key.")}),J_=l.object({keyId:l.string().uuid().describe("Key ID to update."),name:l.string().min(1,"Name is required").max(100,"Name must be 100 characters or less").regex(ja,"Name can only contain letters, numbers, spaces, hyphens, and underscores").optional().describe("New human-readable name for the key."),expiresAt:l.string().datetime().nullable().optional().describe("New expiration timestamp for the key, or null to clear it.")}),q_=l.object({params:l.object({keyId:l.string().uuid().describe("Key ID to delete.")})}).transform(({params:e})=>({...e})),Yo=D({operationId:"publicKeys.list",description:"List public keys within one project.",backend:"api",route:{method:"GET",path:"/public-keys",tags:["Public Keys"]},input:N_,output:C_,pagination:"cursor",async:"sync",examples:[{name:"list-public-keys",input:{projectId:"11111111-1111-4111-8111-111111111111",limit:25},output:{publicKeys:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),Xo=D({operationId:"publicKeys.get",description:"Get one public key within one project.",backend:"api",route:{method:"GET",path:"/public-keys/{keyId}",tags:["Public Keys"]},input:z_,output:Ra,pagination:"none",async:"sync",examples:[{name:"get-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",keyId:"22222222-2222-4222-8222-222222222222"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Zo=D({operationId:"publicKeys.create",description:"Create one public key within one project.",backend:"api",route:{method:"POST",path:"/public-keys",successStatus:201,tags:["Public Keys"]},input:j_,output:E_,pagination:"none",async:"sync",examples:[{name:"create-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z",value:"sazabi_public_example"}}}]}),Qo=D({operationId:"publicKeys.update",description:"Update one public key within one project.",backend:"api",route:{method:"PATCH",path:"/public-keys/{keyId}",tags:["Public Keys"]},input:R_,output:Ra,pagination:"none",async:"sync",examples:[{name:"rename-public-key",input:{projectId:"11111111-1111-4111-8111-111111111111",keyId:"22222222-2222-4222-8222-222222222222",name:"Updated CLI forwarder"},output:{publicKey:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",name:"Updated CLI forwarder",dataSourceConnectionId:null,deactivatedAt:null,expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),er=D({operationId:"publicKeys.deactivate",description:"Deactivate one public key within one project. Existing successful intake-auth cache entries may continue to authenticate until their current TTL expires.",backend:"api",route:{method:"POST",path:"/public-keys/{keyId}/deactivate",tags:["Public Keys"],inputStructure:"detailed"},input:F_,output:K_,pagination:"none",async:"sync"}),Fa=D({operationId:"secretKeys.list",description:"List secret keys within the organization.",backend:"api",route:{method:"GET",path:"/secret-keys",tags:["Secret Keys"]},input:G_,output:x_,pagination:"cursor",async:"sync",examples:[{name:"list-secret-keys",input:{limit:25},output:{secretKeys:[{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),Ka=D({operationId:"secretKeys.get",description:"Get one secret key within the organization.",backend:"api",route:{method:"GET",path:"/secret-keys/{keyId}",tags:["Secret Keys"]},input:H_,output:tp,pagination:"none",async:"sync",examples:[{name:"get-secret-key",input:{keyId:"33333333-3333-4333-8333-333333333333"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Ba=D({operationId:"secretKeys.create",description:"Create one secret key within the organization.",backend:"api",route:{method:"POST",path:"/secret-keys",successStatus:201,tags:["Secret Keys"]},input:M_,output:U_,pagination:"none",async:"sync",examples:[{name:"create-secret-key",input:{name:"CI agent"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z",value:"sazabi_secret_example"}}}]}),Ga=D({operationId:"secretKeys.update",description:"Update one secret key within the organization.",backend:"api",route:{method:"PATCH",path:"/secret-keys/{keyId}",tags:["Secret Keys"]},input:J_,output:tp,pagination:"none",async:"sync",examples:[{name:"rename-secret-key",input:{keyId:"33333333-3333-4333-8333-333333333333",name:"Updated CI agent"},output:{secretKey:{id:"33333333-3333-4333-8333-333333333333",projectId:null,name:"Updated CI agent",expiresAt:null,lastUsedAt:null,createdAt:"2026-01-01T00:00:00.000Z"}}}]}),Ha=D({operationId:"secretKeys.delete",description:"Delete one secret key within the organization.",backend:"api",route:{method:"DELETE",path:"/secret-keys/{keyId}",successStatus:204,tags:["Secret Keys"],inputStructure:"detailed"},input:q_,output:B_,pagination:"none",async:"sync"}),aC={list:Yo.contract,get:Xo.contract,create:Zo.contract,update:Qo.contract,deactivate:er.contract},cC={list:Fa.contract,get:Ka.contract,create:Ba.contract,update:Ga.contract,delete:Ha.contract}});var V_,W_,Y_,X_,Z_,Q_,eO,Ma,tO,oO,rO,rp,nO,iO,aO,cO,lO,uO,sO,hO,lC,dO,gO,tr,or,rr,nr,ir,uC;var np=g(()=>{Ie();Le();V_=l.enum(["eq","neq","in","contains","starts_with","gt","gte","lt","lte","between","exists"]).describe("Filter operator: 'eq' (equals), 'neq' (not equals), 'in' (in array), 'contains' (substring), 'starts_with' (prefix), 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal), 'between' (range), 'exists' (field exists)"),W_=l.enum(["any","all","phrase"]).describe("Search mode: 'any' (match any token), 'all' (match all tokens), 'phrase' (exact phrase match)"),Y_=l.object({query:l.string().min(1,"Search query must be at least 1 character").max(500,"Search query must be at most 500 characters").describe("Search query text (1-500 characters)"),fields:l.array(l.string()).optional().describe("Fields to search in (defaults to backend allowlist)"),mode:W_.optional().default("all").describe("Token matching mode")}),X_=l.object({field:l.string().describe("Field name to filter on"),op:V_.describe("Filter operator"),value:l.union([l.string(),l.number(),l.boolean(),l.array(l.union([l.string(),l.number()])),l.object({from:l.string(),to:l.string()})]).describe("Filter value (type depends on operator)")}).superRefine((e,t)=>{if(e.op==="in"&&!Array.isArray(e.value))t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be an array when op is 'in'",path:["value"]});if(e.op==="between"){let r=e.value;if(!(typeof r==="object"&&r!==null&&("from"in r)&&("to"in r)))t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be an object with from/to when op is 'between'",path:["value"]})}if(e.op==="exists"&&typeof e.value!=="boolean")t.addIssue({code:l.ZodIssueCode.custom,message:"Value must be boolean when op is 'exists'",path:["value"]})}),Z_=l.object({field:l.string().describe("Field name to sort by"),direction:l.enum(["asc","desc"]).default("desc").describe("Sort direction: 'asc' for ascending, 'desc' for descending")}),Q_=l.object({limit:l.number().int().min(1,"Limit must be at least 1").max(1000,"Limit must be at most 1000").default(50).describe("Maximum number of rows to return"),cursor:l.string().optional().describe("Opaque cursor from previous response for pagination")}),eO=l.object({projectId:l.string().uuid().optional().describe("Project to query logs for. Auto-filled from CLI and SDK context when omitted."),search:Y_.optional().describe("Full-text search configuration"),filters:l.array(X_).optional().describe("Structured filter clauses (ANDed together)"),select:l.array(l.string()).optional().describe("Fields to return (defaults to backend default set)"),sort:Z_.optional().describe("Sort configuration (defaults to timestamp desc)"),pagination:Q_.optional().describe("Pagination configuration")}),Ma=l.enum(["clickhouse","better-stack","datadog","gcp","axiom","cloudwatch","sentry","posthog","mezmo"]),tO=l.enum(["native","external"]),oO=l.object({projectId:l.string().uuid().optional().describe("Project to inspect. Auto-filled from CLI and SDK context when omitted.")}),rO=l.object({backend:l.object({id:Ma,name:l.string(),kind:tO}).describe("Active log backend for the project"),features:l.array(l.string()).describe("Backend features registered on the server"),commands:l.array(l.enum(["schema","query","volume","patterns","nativeQuery"])).describe("CLI/API commands available for this backend"),queryableFields:l.array(l.string()).describe("Fields accepted by the normalized logs.query contract"),searchableFields:l.array(l.string()).describe("Fields accepted by logs.query full-text search"),observedServiceNames:l.array(l.string()).describe("Recently observed service names for this project"),observedAttributeKeys:l.array(l.string()).describe("Recently observed log attribute keys for this project"),schemaContext:l.record(l.string(),l.any()).optional().describe("Backend-specific schema guidance and examples")}),rp=l.enum(["1m","5m","15m","1h"]),nO=l.enum(["service_name","severity_text","environment"]),iO=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),startDate:l.string().datetime({offset:!0}),endDate:l.string().datetime({offset:!0}),interval:rp.optional().describe("Aggregation bucket size for the volume series"),groupBy:nO.optional().describe("Optional field to split volume series by"),filters:l.object({service_name:l.string().optional(),severity_text:l.string().optional(),environment:l.string().optional()}).optional()}).refine((e)=>new Date(e.startDate)<new Date(e.endDate),{message:"startDate must be before endDate",path:["endDate"]}),aO=l.object({total:l.number().nonnegative(),startDate:l.string().datetime({offset:!0}),endDate:l.string().datetime({offset:!0}),interval:rp,series:l.array(l.object({group:l.string(),total:l.number().nonnegative(),points:l.array(l.object({bucket:l.string(),count:l.number().nonnegative()}))}))}),cO=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),query:l.string().min(1).max(500).optional().describe("Optional text to match against normalized log patterns"),severity:l.string().optional().describe("Optional severity_text value, for example ERROR"),startDate:l.string().datetime({offset:!0}).optional().describe("Optional earliest last-seen timestamp"),endDate:l.string().datetime({offset:!0}).optional().describe("Optional latest last-seen timestamp"),limit:l.number().int().min(1).max(100).default(25).describe("Maximum number of log patterns to return")}).refine((e)=>!e.startDate||!e.endDate||new Date(e.startDate)<new Date(e.endDate),{message:"startDate must be before endDate",path:["endDate"]}),lO=l.object({fingerprint:l.string(),pattern:l.string(),severity:l.string().nullable(),occurrences:l.number().nonnegative(),firstSeen:l.string().nullable(),lastSeen:l.string().nullable(),representativeId:l.string().nullable()}),uO=l.object({patterns:l.array(lO),meta:l.object({backendId:Ma,count:l.number().int().nonnegative(),took:l.number().nonnegative()})}),sO=l.object({projectId:l.string().uuid().optional().describe("Project to query. Auto-filled from CLI and SDK context when omitted."),query:l.string().min(1,"Query cannot be empty").max(1e4,"Query must be 10000 characters or less")}),hO=l.object({result:l.string().describe("Backend-formatted query result"),format:l.literal("text"),meta:l.object({backendId:Ma,took:l.number().nonnegative(),truncated:l.boolean()})}),lC=l.object({cursor:l.string().nullable().describe("Cursor for next page (null if no more results)"),hasMore:l.boolean().describe("Whether more results are available")}),dO=l.object({count:l.number().int().nonnegative().describe("Number of log rows returned in this response"),took:l.number().nonnegative().describe("Query execution time in milliseconds")}),gO=l.object({data:l.array(l.record(l.string(),l.any())).describe("Array of log rows with selected fields"),nextCursor:l.string().nullable().describe("Pass as 'cursor' in the next query to fetch the next page. Null when there are no more results."),meta:dO.describe("Query execution metadata")}),tr=D({operationId:"logs.query",description:"Query logs within one project via the platform API proxy.",backend:"api",route:{method:"POST",path:"/logs/query",tags:["Logs"]},input:eO,output:gO,pagination:"cursor",async:"sync"}),or=D({operationId:"logs.schema",description:"Describe the active log backend, supported commands, query fields, and schema context.",backend:"api",route:{method:"POST",path:"/logs/schema",tags:["Logs"]},input:oO,output:rO,pagination:"none",async:"sync"}),rr=D({operationId:"logs.volume",description:"Query pre-aggregated log volume for one project.",backend:"api",route:{method:"POST",path:"/logs/volume",tags:["Logs"]},input:iO,output:aO,pagination:"none",async:"sync"}),nr=D({operationId:"logs.patterns",description:"Query normalized log patterns for discovery workflows.",backend:"api",route:{method:"POST",path:"/logs/patterns",tags:["Logs"]},input:cO,output:uO,pagination:"none",async:"sync"}),ir=D({operationId:"logs.nativeQuery",description:"Run the active backend's native read-only query language through server-side guardrails.",backend:"api",route:{method:"POST",path:"/logs/native-query",tags:["Logs"]},input:sO,output:hO,pagination:"none",async:"sync"}),uC={query:tr.contract,schema:or.contract,volume:rr.contract,patterns:nr.contract,nativeQuery:ir.contract}});var ar,sC,hC,dC,gC,bC,pC,mC,ip,NM;var Ja=g(()=>{Ie();Le();ar=l.enum(["admin","member"]),sC=l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional(),role:ar}),hC=l.object({id:l.string().min(1),name:l.string().nullable(),email:l.string().email()}),dC=l.object({credentialType:l.literal("user"),user:hC,activeOrganizationId:l.string().min(1).nullable(),organizations:l.array(sC).describe("Organizations the user belongs to, including membership role.")}),gC=l.object({credentialType:l.literal("secret"),organization:l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional()}),keyName:l.string()}),bC=l.object({credentialType:l.literal("partner"),superorganization:l.object({id:l.string().uuid(),name:l.string()})}),pC=l.object({}),mC=l.discriminatedUnion("credentialType",[dC,gC,bC]),ip=D({operationId:"me.get",description:"Return the identity and available context for the current credential.",backend:"api",route:{method:"GET",path:"/me",tags:["Auth"]},input:pC,output:mC,pagination:"none",async:"sync"}),NM=ip.contract});var bO,yC,vC,fC,IC,kC,wC,ap,cp,lp,EM;var pO=g(()=>{Ie();Le();Ja();bO=l.object({membershipId:l.string().min(1).describe("Organization membership record ID."),userId:l.string().min(1).describe("User ID for the organization member."),name:l.string().nullable().describe("Display name for the member, when available."),email:l.string().email().describe("Email address for the member."),imageUrl:l.string().nullable().describe("Profile image URL for the member, when available."),role:ar.describe("Organization role."),createdAt:l.string().datetime().describe("When the membership was created.")}),yC=l.object({organizationId:l.string().min(1).optional().describe("Organization to list members for. Auto-filled from CLI and SDK context when omitted.")}),vC=l.object({members:l.array(bO).describe("Members visible within the selected organization.")}),fC=l.object({organizationId:l.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted."),userId:l.string().min(1).describe("User ID of the member to update."),role:ar.describe("Role to assign.")}),IC=l.object({member:bO.describe("Updated organization member.")}),kC=l.object({params:l.object({userId:l.string().min(1).describe("User ID of the member to remove.")}),query:l.object({organizationId:l.string().min(1).optional().describe("Organization containing the member. Auto-filled from CLI and SDK context when omitted.")})}).transform(({params:e,query:t})=>({...t,...e})),wC=l.object({removedUserId:l.string().min(1).describe("User ID removed from the organization.")}),ap=D({operationId:"members.list",description:"List members in an organization.",backend:"api",route:{method:"GET",path:"/members",tags:["Members"]},input:yC,output:vC,pagination:"none",async:"sync",examples:[{name:"organization-members",input:{organizationId:"organization-123"},output:{members:[{membershipId:"membership-123",userId:"user-123",name:"Alex Admin",email:"alex@example.com",imageUrl:null,role:"admin",createdAt:"2026-01-01T00:00:00.000Z"}]}}]}),cp=D({operationId:"members.updateRole",description:"Update a member's organization role.",backend:"api",route:{method:"PATCH",path:"/members/{userId}/role",tags:["Members"]},input:fC,output:IC,pagination:"none",async:"sync",examples:[{name:"promote-member",input:{organizationId:"organization-123",userId:"user-456",role:"admin"},output:{member:{membershipId:"membership-456",userId:"user-456",name:"Mina Member",email:"mina@example.com",imageUrl:null,role:"admin",createdAt:"2026-01-01T00:00:00.000Z"}}}]}),lp=D({operationId:"members.remove",description:"Remove a member from an organization.",backend:"api",route:{method:"DELETE",path:"/members/{userId}",tags:["Members"],inputStructure:"detailed"},input:kC,output:wC,pagination:"none",async:"sync"}),EM={list:ap.contract,updateRole:cp.contract,remove:lp.contract}});var mO,yO,$C,_C,OC,SC,TC,fn,PC,up,sp,hp,KM;var qa=g(()=>{Ie();Le();mO=l.enum(["processing","completed","aborted","error"]),yO=l.object({id:l.string().uuid(),threadId:l.string().uuid(),userMessageId:l.string().uuid().nullable(),assistantMessageId:l.string().uuid().nullable(),parentRunId:l.string().uuid().nullable(),workflowRunId:l.string().nullable(),status:mO,source:l.enum(["web","api","mcp","slack","github","agent","cli","automation"]),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),completedAt:l.string().datetime().nullable()}),$C=l.object({projectId:l.string().uuid().optional().describe("Project ID to list runs for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),cursor:l.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),_C=l.object({runs:l.array(yO),nextCursor:l.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),OC=l.object({threadId:l.string().uuid().describe("Thread ID to list runs for."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of runs to return per page."),cursor:l.string().datetime().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),SC=l.object({runs:l.array(yO),nextCursor:l.string().datetime().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),TC=l.object({runId:l.string().uuid().describe("Run ID returned by a deferred operation.")}),fn=l.object({completed:l.boolean().describe("Whether the run has reached a terminal status."),threadId:l.string().uuid().describe("Thread ID associated with the run."),runId:l.string().uuid().describe("Run ID for subsequent polling."),messageId:l.string().uuid().optional().describe("ID of the user message that triggered this run."),status:mO.describe("Current run lifecycle status."),response:l.string().nullable().describe("Assistant response text when the run has completed.")}),PC=fn.describe("Current run state and, when complete, the assistant response."),up=D({operationId:"runs.list",description:"List deferred runs within one project.",backend:"api",route:{method:"GET",path:"/runs",tags:["Runs"]},input:$C,output:_C,pagination:"cursor",async:"sync"}),sp=D({operationId:"runs.listForThread",description:"List deferred runs for one thread.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/runs",tags:["Runs"]},input:OC,output:SC,pagination:"cursor",async:"sync"}),hp=D({operationId:"runs.get",description:"Get the current result for a deferred run by run ID.",backend:"api",route:{method:"GET",path:"/runs/{runId}",tags:["Runs"]},input:TC,output:PC,pagination:"none",async:"sync",examples:[{name:"processing-run",input:{runId:"33333333-3333-4333-8333-333333333333"},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]}),KM={list:up.contract,listForThread:sp.contract,get:hp.contract}});var dp,AC,DC,LC,NC,CC,xC,zC,jC,gp,EC,UC,RC,FC,KC,BC,GC,HC,MC,JC,bp,pp,mp,yp,vp,JM;var fp=g(()=>{Ie();Le();qa();dp=l.object({id:l.string().uuid(),projectId:l.string().uuid(),title:l.string().nullable(),status:l.enum(["regular","archived"]),createdAt:l.string().datetime(),updatedAt:l.string().datetime()}),AC=l.object({type:l.literal("message"),message:l.string()}),DC=l.object({type:l.literal("reasoning"),reasoning:l.string(),status:l.enum(["in_progress","complete"]).optional()}),LC=l.object({type:l.literal("tool_call"),name:l.string(),params:l.any().optional(),result:l.any().optional(),status:l.enum(["in_progress","success","error","unknown"]).optional(),toolCallId:l.string().optional(),durationMs:l.number().nonnegative().optional()}),NC=l.object({type:l.literal("artifact"),name:l.enum(["timeseries","table","log_detail","integration_required","alert_card","issue_card"]),data:l.any(),toolCallId:l.string().optional()}),CC=l.object({type:l.literal("fork"),sourceThreadId:l.string(),sourceMessageId:l.string(),sourceThreadTitle:l.string().nullable()}),xC=l.object({type:l.literal("summary"),summary:l.string()}),zC=l.object({type:l.literal("slack_context"),channelId:l.string(),isTruncated:l.boolean().optional(),messages:l.array(l.object({timestamp:l.string(),slackUserId:l.string().optional(),displayName:l.string(),text:l.string(),isBot:l.boolean(),files:l.array(l.object({name:l.string(),mimetype:l.string(),size:l.number().optional(),attachmentId:l.string().uuid().optional(),ingestionStatus:l.enum(["attached","unsupported","oversized","skipped","unavailable"]).optional()})).optional()}))}),jC=l.union([AC,DC,LC,NC,CC,xC,zC]),gp=l.object({id:l.string().uuid(),role:l.enum(["user","assistant"]),content:l.array(jC),createdAt:l.string().datetime()}),EC=l.object({projectId:l.string().uuid().optional().describe("Project to list threads for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of threads to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page."),status:l.enum(["regular","archived"]).optional().describe("Filter by thread status. 'regular' returns active threads, 'archived' returns archived threads.")}),UC=l.object({threads:l.array(dp).describe("The page of threads matching the query."),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),RC=l.object({threadId:l.string().uuid().describe("Thread ID returned by threads.list or threads.create.")}),FC=l.object({thread:dp.describe("The requested thread."),messages:l.array(gp).describe("Messages currently stored on the thread in chronological order.")}),KC=l.object({projectId:l.string().uuid().optional().describe("Project to create the thread in. Auto-filled from CLI and SDK context when omitted."),message:l.string().min(1,"Message cannot be empty").max(1e4,"Message cannot exceed 10000 characters").describe("Initial user message that starts the thread."),wait:l.boolean().default(!0).describe("Whether the server should wait for the agent run before responding."),timeoutSeconds:l.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling."),automationId:l.string().uuid().optional().describe("Internal automation context. Set by the Sazabi CLI when an automation script starts an agent run.")}),BC=fn.describe("Deferred run result for creating a thread."),GC=l.object({threadId:l.string().uuid().describe("Thread ID whose current processing status should be returned.")}),HC=l.object({status:l.enum(["idle","processing"]),lastRunStatus:l.enum(["error"]).nullable()}),MC=l.object({threadId:l.string().uuid().describe("Thread ID of the thread to update."),status:l.enum(["regular","archived"]).describe("New status for the thread. 'archived' hides the thread from the sidebar.")}),JC=l.object({thread:dp.describe("The updated thread.")}),bp=D({operationId:"threads.list",description:"List threads in a project, optionally filtered by status.",backend:"api",route:{method:"GET",path:"/threads",tags:["Threads"]},input:EC,output:UC,pagination:"cursor",async:"sync",examples:[{name:"active-threads",input:{projectId:"11111111-1111-4111-8111-111111111111",status:"regular",limit:10},output:{threads:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"API returning 500s",status:"regular",createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-01T00:05:00.000Z"}],nextCursor:null}}]}),pp=D({operationId:"threads.get",description:"Get a thread and its messages.",backend:"api",route:{method:"GET",path:"/threads/{threadId}",tags:["Threads"]},input:RC,output:FC,pagination:"none",async:"sync"}),mp=D({operationId:"threads.getStatus",description:"Get the current processing status for a thread.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/status",tags:["Threads"]},input:GC,output:HC,pagination:"none",async:"sync",examples:[{name:"processing-thread",input:{threadId:"22222222-2222-4222-8222-222222222222"},output:{status:"processing",lastRunStatus:null}}]}),yp=D({operationId:"threads.create",description:"Create a thread with an initial message and optionally wait for the agent response.",backend:"api",route:{method:"POST",path:"/threads",tags:["Threads"],successStatus:201},input:KC,output:BC,pagination:"none",async:"deferred",examples:[{name:"async-handoff",input:{projectId:"11111111-1111-4111-8111-111111111111",message:"Investigate elevated 500s in production.",wait:!1,timeoutSeconds:20},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]}),vp=D({operationId:"threads.update",description:"Update a thread's status.",backend:"api",route:{method:"PATCH",path:"/threads/{threadId}",tags:["Threads"]},input:MC,output:JC,pagination:"none",async:"sync",examples:[{name:"archive-thread",input:{threadId:"22222222-2222-4222-8222-222222222222",status:"archived"},output:{thread:{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"API returning 500s",status:"archived",createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-01T00:10:00.000Z"}}}]}),JM={list:bp.contract,get:pp.contract,getStatus:mp.contract,create:yp.contract,update:vp.contract}});var qC,VC,WC,YC,vO,fO;var IO=g(()=>{Ie();Le();qa();fp();qC=l.object({threadId:l.string().uuid().describe("Thread ID to list messages for."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of messages to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),VC=l.object({messages:l.array(gp),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),WC=l.object({threadId:l.string().uuid().describe("Thread ID to append the message to."),message:l.string().min(1,"Message cannot be empty").max(1e4,"Message cannot exceed 10000 characters"),wait:l.boolean().default(!0).describe("Whether the server should wait for the appended message run before responding."),timeoutSeconds:l.coerce.number().int().min(1).max(20).default(20).describe("Maximum seconds to wait when wait is true before handing off to polling."),automationId:l.string().uuid().optional().describe("Internal automation context. Set by the Sazabi CLI when an automation script starts an agent run.")}),YC=fn.describe("Deferred run result for appending a message to an existing thread."),vO=D({operationId:"messages.list",description:"List messages in a thread with cursor pagination.",backend:"api",route:{method:"GET",path:"/threads/{threadId}/messages",tags:["Messages"]},input:qC,output:VC,pagination:"cursor",async:"sync",examples:[{name:"thread-messages",input:{threadId:"22222222-2222-4222-8222-222222222222",limit:2},output:{messages:[{id:"33333333-3333-4333-8333-333333333333",role:"user",content:[{type:"message",message:"What changed in the intake pipeline?"}],createdAt:"2026-01-01T00:00:00.000Z"}],nextCursor:null}}]}),fO=D({operationId:"messages.append",description:"Append a user message to an existing thread and trigger a deferred run.",backend:"api",route:{method:"POST",path:"/threads/{threadId}/messages",successStatus:201,tags:["Messages"]},input:WC,output:YC,pagination:"none",async:"deferred",examples:[{name:"append-processing",input:{threadId:"22222222-2222-4222-8222-222222222222",message:"Follow up on the intake backlog.",wait:!1,timeoutSeconds:20},output:{completed:!1,threadId:"22222222-2222-4222-8222-222222222222",runId:"33333333-3333-4333-8333-333333333333",status:"processing",response:null}}]})});var Ip,XC,ZC,QC,ex,tx,ox,rx,kp,wp,$p,oJ;var kO=g(()=>{Ie();Le();Ja();Ip=l.object({id:l.string().min(1),name:l.string(),slug:l.string(),logo:l.string().nullable().optional()}),XC=Ip.extend({role:ar.optional()}),ZC=l.object({}),QC=l.object({organizations:l.array(XC).describe("Organizations available to the current credential.")}),ex=l.object({organizationId:l.string().min(1).describe("Organization ID to fetch.")}),tx=l.object({organization:Ip}),ox=l.object({organizationId:l.string().min(1).describe("Organization ID to update. SDK and CLI callers can auto-fill this before dispatch."),name:l.string().trim().min(1).max(100).describe("New organization name.")}),rx=l.object({organization:Ip.describe("Updated organization.")}),kp=D({operationId:"organizations.list",description:"List organizations available to the current credential.",backend:"api",route:{method:"GET",path:"/organizations",tags:["Organizations"]},input:ZC,output:QC,pagination:"none",async:"sync"}),wp=D({operationId:"organizations.get",description:"Get one organization by ID.",backend:"api",route:{method:"GET",path:"/organizations/{organizationId}",tags:["Organizations"]},input:ex,output:tx,pagination:"none",async:"sync"}),$p=D({operationId:"organizations.update",description:"Update one organization.",backend:"api",route:{method:"PATCH",path:"/organizations/{organizationId}",tags:["Organizations"]},input:ox,output:rx,pagination:"none",async:"sync",examples:[{name:"rename-organization",input:{organizationId:"organization-123",name:"Observed Platform"},output:{organization:{id:"organization-123",name:"Observed Platform",slug:"acme",logo:null}}}]}),oJ={list:kp.contract,get:wp.contract,update:$p.contract}});var Va,_p,wO,$O,_O,OO,Wa,Ya,nx;var Op=g(()=>{Ie();Le();Va=l.enum(["us-east-1","us-east-2","us-west-1","us-west-2","eu-central-1","eu-central-2","eu-north-1","eu-south-1","eu-south-2","eu-west-1","eu-west-2","eu-west-3"]),_p=l.object({id:l.string().uuid(),organizationId:l.string().min(1),name:l.string(),region:Va}),wO=l.object({organizationId:l.string().min(1).optional().describe("Organization to list projects for. Auto-filled from CLI and SDK context when omitted.")}),$O=l.object({projects:l.array(_p).describe("Projects visible within the selected organization.")}),_O=l.object({projectId:l.string().uuid().describe("Project ID to fetch.")}),OO=l.object({project:_p}),Wa=D({operationId:"projects.list",description:"List projects in an organization.",backend:"api",route:{method:"GET",path:"/projects",tags:["Projects"]},input:wO,output:$O,pagination:"none",async:"sync"}),Ya=D({operationId:"projects.get",description:"Get one project by ID.",backend:"api",route:{method:"GET",path:"/projects/{projectId}",tags:["Projects"]},input:_O,output:OO,pagination:"none",async:"sync"}),nx={list:Wa.contract,get:Ya.contract}});var Sp,SO,TO,PO,AO,cr,lr,ix;var Tp=g(()=>{Ie();Le();Sp=l.object({projectId:l.string().uuid().optional().describe("Project to search within. Auto-filled from CLI and SDK context when omitted."),query:l.string().trim().min(1,"Query must be at least 1 character").max(500,"Query must be at most 500 characters"),limit:l.coerce.number().min(1).max(100).default(20).describe("Maximum number of search results to return."),page:l.coerce.number().min(1).default(1).describe("One-based page number.")}),SO=Sp.extend({status:l.enum(["regular","archived"]).optional().describe("Optional thread status filter.")}),TO=Sp.extend({threadId:l.string().uuid().optional().describe("Optional thread restriction for message search."),role:l.enum(["user","assistant"]).optional().describe("Optional message role filter.")}),PO=l.object({threads:l.array(l.object({id:l.string().uuid(),projectId:l.string().uuid().optional(),title:l.string(),status:l.enum(["regular","archived"]),labels:l.array(l.string()),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),highlights:l.array(l.string()),score:l.number().optional()})),pagination:l.object({page:l.number(),limit:l.number(),totalResults:l.number(),totalPages:l.number()}).describe("Page-based pagination metadata for the current search result.")}),AO=l.object({messages:l.array(l.object({id:l.string().uuid(),threadId:l.string().uuid(),threadTitle:l.string(),role:l.enum(["user","assistant"]),content:l.string(),createdAt:l.string().datetime(),updatedAt:l.string().datetime(),highlights:l.array(l.string()),score:l.number().optional()})),pagination:l.object({page:l.number(),limit:l.number(),totalResults:l.number(),totalPages:l.number()}).describe("Page-based pagination metadata for the current search result.")}),cr=D({operationId:"search.threads",description:"Search threads within one project.",backend:"api",route:{method:"GET",path:"/search/threads",tags:["Search"]},input:SO,output:PO,pagination:"page",async:"sync",examples:[{name:"search-open-incidents",input:{projectId:"11111111-1111-4111-8111-111111111111",query:"payment timeout",status:"regular",limit:10,page:1},output:{threads:[{id:"22222222-2222-4222-8222-222222222222",projectId:"11111111-1111-4111-8111-111111111111",title:"Payment timeout in us-west-2",status:"regular",labels:["payments","timeout"],createdAt:"2026-01-01T00:00:00.000Z",updatedAt:"2026-01-02T00:00:00.000Z",highlights:["payment timeout"],score:123.45}],pagination:{page:1,limit:10,totalResults:1,totalPages:1}}}]}),lr=D({operationId:"search.messages",description:"Search messages within one project.",backend:"api",route:{method:"GET",path:"/search/messages",tags:["Search"]},input:TO,output:AO,pagination:"page",async:"sync",examples:[{name:"search-assistant-messages",input:{projectId:"11111111-1111-4111-8111-111111111111",query:"rollback",role:"assistant",limit:10,page:1},output:{messages:[{id:"33333333-3333-4333-8333-333333333333",threadId:"22222222-2222-4222-8222-222222222222",threadTitle:"Deployment rollback guidance",role:"assistant",content:"Rollback the ingestion deployment and confirm queue depth.",createdAt:"2026-01-02T00:00:00.000Z",updatedAt:"2026-01-02T00:00:00.000Z",highlights:["Rollback the ingestion deployment"],score:98.76}],pagination:{page:1,limit:10,totalResults:1,totalPages:1}}}]}),ix={threads:cr.contract,messages:lr.contract}});var DO,ax,cx,lx,ux,Pp,Ap,dJ;var LO=g(()=>{Ie();Le();DO=l.object({id:l.string().uuid(),projectId:l.string().uuid(),name:l.string(),description:l.string().nullable(),currentStatus:l.enum(["operational","degraded","outage"]).describe("Current health status of this component."),firstSeenAt:l.string().datetime(),lastSeenAt:l.string().datetime()}),ax=l.object({projectId:l.string().uuid().optional().describe("Project to list status components for. Auto-filled from CLI and SDK context when omitted."),limit:l.coerce.number().int().min(1).max(100).default(50).describe("Maximum number of components to return per page."),cursor:l.string().uuid().optional().describe("Cursor from a previous response's nextCursor to fetch the next page.")}),cx=l.object({statusComponents:l.array(DO),nextCursor:l.string().uuid().nullable().describe("Pass as 'cursor' to fetch the next page. Null when there are no more results.")}),lx=l.object({componentId:l.string().uuid().describe("Status component ID to retrieve.")}),ux=l.object({statusComponent:DO}),Pp=D({operationId:"statusComponents.list",description:"List status page components in a project.",backend:"api",route:{method:"GET",path:"/status-components",tags:["Status Components"]},input:ax,output:cx,pagination:"cursor",async:"sync"}),Ap=D({operationId:"statusComponents.get",description:"Get a single status component by ID.",backend:"api",route:{method:"GET",path:"/status-components/{componentId}",tags:["Status Components"]},input:lx,output:ux,pagination:"none",async:"sync"}),dJ={list:Pp.contract,get:Ap.contract}});var NO;var CO=g(()=>{NO=["onboarding","setup"]});var xO,zO,jO,EO,In;var Dp=g(()=>{CO();Ie();Le();xO=l.enum(NO),zO=l.object({id:l.string().describe("Unique task identifier (e.g. install_github_app)."),label:l.string().describe("Short human-readable task name."),description:l.string().describe("Explanation of what needs to be completed to satisfy this task."),instructions:l.string().describe("Step-by-step instructions for completing this task."),completed:l.boolean().describe("Whether the task has been completed."),completedAt:l.string().datetime().nullable().describe("ISO 8601 timestamp of when the task was completed, or null."),category:xO.describe("Task category: onboarding (core setup steps) or setup (additional configuration).")}),jO=l.object({projectId:l.string().uuid().optional().describe("Project to list tasks for. Auto-filled from CLI and SDK context when omitted.")}),EO=l.object({tasks:l.array(zO).describe("All onboarding and setup tasks with their current completion status.")}),In=D({operationId:"tasks.list",description:"List all onboarding and setup tasks for a project, including their current completion status and a description of what is required to complete each task.",backend:"api",route:{method:"GET",path:"/tasks",tags:["Tasks"]},input:jO,output:EO,pagination:"none",async:"sync"})});var Lp;var UO=g(()=>{Qb();ep();op();np();Ja();pO();IO();kO();Op();qa();Tp();LO();Dp();fp();Lp={me:ip.contract,logs:{query:tr.contract,schema:or.contract,volume:rr.contract,patterns:nr.contract,nativeQuery:ir.contract},dataSources:{listTypes:_a.contract,listConnections:qo.contract,getConnection:Oa.contract,createConnection:Vo.contract,disconnectConnection:Da.contract,listStreams:Sa.contract,createStream:Ta.contract,getStream:Pa.contract,deleteStream:Aa.contract},organizations:{list:kp.contract,get:wp.contract,update:$p.contract},members:{list:ap.contract,updateRole:cp.contract,remove:lp.contract},publicKeys:{list:Yo.contract,get:Xo.contract,create:Zo.contract,update:Qo.contract,deactivate:er.contract},secretKeys:{list:Fa.contract,get:Ka.contract,create:Ba.contract,update:Ga.contract,delete:Ha.contract},projects:{list:Wa.contract,get:Ya.contract},search:{threads:cr.contract,messages:lr.contract},messages:{list:vO.contract,append:fO.contract},threads:{list:bp.contract,get:pp.contract,getStatus:mp.contract,create:yp.contract,update:vp.contract},runs:{list:up.contract,listForThread:sp.contract,get:hp.contract},issues:{create:Wo.contract,list:La.contract,get:Na.contract,resolve:Ca.contract,ignore:xa.contract,unignore:za.contract},tasks:{list:In.contract},statusComponents:{list:Pp.contract,get:Ap.contract}}});var Xa=g(()=>{UO();Qb();ep();op();np();Op();Tp();Dp()});var sx,CW,hx,Za=(e)=>{return hx.includes(e)};var Np=g(()=>{sx={"eu-central-1":"EU Central (Frankfurt)"},CW={"us-west-2":"US West","us-east-1":"US East","eu-central-1":sx["eu-central-1"]},hx=["us-west-2","us-east-1","eu-central-1"]});var Cp,xp,zp,RO;var FO=g(()=>{Ie();Cp=l.object({severities:l.array(l.string()).optional().describe("Limit results to the listed severities."),services:l.array(l.string()).optional().describe("Limit results to the listed service names."),environments:l.array(l.string()).optional().describe("Limit results to the listed deployment environments."),searchTerm:l.string().optional().describe("Case-insensitive substring match against the log body."),traceId:l.string().optional().describe("Limit results to one trace ID.")}),xp=l.object({service:l.string(),namespace:l.string(),environment:l.string(),host:l.string(),container:l.string(),pod:l.string()}),zp=l.object({id:l.string(),timestamp:l.string().datetime(),severity:l.string(),body:l.string(),service:l.string(),traceId:l.string(),spanId:l.string(),attributes:l.record(l.string(),l.string()),resource:xp}),RO=l.object({type:l.literal("logs"),timestamp:l.string().datetime(),data:l.array(zp)})});var dx="https://{region}.intake.sazabi.com",gx="wss://{region}.tail.sazabi.com",bx=3,BO=500,GO="sazabi.public_key",px=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},HO=(e)=>{let t=px(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},mx,yx,vx,MO=(e)=>{let t=new Map;return{tail:async(r)=>{let n=await Sx(e.credentialProvider,r.projectId,"logs.tail"),o=await Tx(e,t,n,r.region,"logs.tail"),i=fx({projectId:n,region:o,filters:r.filters,tailBaseUrl:e.tailBaseUrl}),a=await e.credentialProvider.getToken(),c=e.webSocket??globalThis.WebSocket;if(!c)throw Error("WebSocket transport is not available in this runtime.");return Dx({token:a,url:i,signal:r.signal,webSocket:c})},forward:async(r)=>{let n=await Px(e,t,r.projectId??await e.credentialProvider.getProjectId?.(),r.region,"logs.forward"),o=wx(n,e.intakeBaseUrl),i=e.fetch??globalThis.fetch,a=_x(r.logs,r.publicKey),c=xx(a);return await Cx(i,o,a),{forwardedCount:c,failedCount:0}}}},fx=(e)=>{let t=(e.tailBaseUrl??gx).replace("{region}",e.region),r=Ix(t)??new URL(t);r.searchParams.set("projectId",e.projectId);let n=kx(e.filters);if(n)r.searchParams.set("filters",n);return r.toString()},Ix=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!HO(t.hostname))return;return t.protocol="ws:",t.pathname="/tail",t},kx=(e)=>{if(!e)return;let t=Object.entries(e).filter(([,r])=>r!==void 0&&(!Array.isArray(r)||r.length>0)&&r!=="");if(t.length===0)return;return JSON.stringify(Object.fromEntries(t))},wx=(e,t)=>{let r=(t??dx).replace("{region}",e),n=r.endsWith("/")?r.slice(0,-1):r,o=$x(n);if(o)return o;let i=n.match(/^https:\/\/([a-z0-9-]+)\.intake\.([a-z0-9.]+)$/);return`${i?`https://otlp.${i[1]}.intake.${i[2]}`:n}/v1/logs`},$x=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!HO(t.hostname))return;return t.pathname="/adapters/otlp",t.toString()},_x=(e,t)=>{let r=e.resourceLogs;if(!r||r.length===0)return{...e,resourceLogs:[{resource:{attributes:[JO(t)]},scopeLogs:[]}]};return{...e,resourceLogs:r.map((n)=>({...n,resource:{...n.resource,attributes:Ox(n.resource?.attributes,t)}}))}},Ox=(e,t)=>{return[...(e??[]).filter((n)=>n?.key!==GO),JO(t)]},JO=(e)=>({key:GO,value:{stringValue:e}}),Sx=async(e,t,r)=>{let n=t??await e.getProjectId?.();if(n)return n;throw VO(r,"Project ID is required",["projectId"])},Tx=async(e,t,r,n,o)=>{let i=n??await qO(e,t,r);return Ax(i,o)},Px=async(e,t,r,n,o)=>{if(n)return n;if(!r)throw VO(o,"Project ID is required",["projectId"]);return qO(e,t,r)},qO=async(e,t,r)=>{let n=t.get(r);if(n)return n;let o=e.raw.projects.get({projectId:r}).then((i)=>i.project.region);t.set(r,o);try{return await o}catch(i){throw t.delete(r),i}},Ax=(e,t)=>{if(Za(e))return e;throw new pe("BAD_REQUEST",{message:`Log tail is not supported for project region ${e}.`,data:{operationId:t,missingContext:[]}})},Dx=async(e)=>{let t=[],r=[],n=!1,o=!1,i,a=0,c,u=(p)=>{if(n)return;n=!0,i=p;while(r.length>0){let _=r.shift();if(_)_({value:void 0,done:!0})}},s=(p)=>{let _=r.shift();if(_){_({value:p,done:!1});return}t.push(p)},d=()=>{if(c&&c.readyState<c.CLOSING)c.close(1000,"Client closed stream")},h=async()=>{await new Promise((p,_)=>{let S=!1,H;try{H=new e.webSocket(e.url,[e.token])}catch(K){_(K instanceof Error?K:Error("Failed to open WebSocket connection."));return}c=H,H.onopen=()=>{if(a=0,!S)S=!0,p()},H.onmessage=(K)=>{let le=Lx(K.data);for(let re of le)s(re)},H.onerror=()=>{if(!S)S=!0,_(Error("WebSocket connection failed. Check the close event for details."))},H.onclose=(K)=>{if(!S){S=!0,_(KO(K.code,K.reason));return}if(o||n){u();return}if(Nx(K.code)&&a<bx){a+=1,globalThis.setTimeout(()=>{h().catch((le)=>{u(le instanceof Error?le:Error(String(le)))})},BO*2**(a-1));return}u(KO(K.code,K.reason))}})};e.signal?.addEventListener("abort",()=>{o=!0,d(),u()},{once:!0}),await h();let b={[Symbol.asyncIterator](){return b},next:async()=>{if(t.length>0)return{value:t.shift(),done:!1};if(n){if(i)throw i;return{value:void 0,done:!0}}return new Promise((p)=>{r.push(p)}).then((p)=>{if(p.done&&i)throw i;return p})},return:async()=>{return o=!0,d(),u(),{value:void 0,done:!0}},throw:async(p)=>{throw o=!0,d(),u(p instanceof Error?p:Error(String(p))),p}};return b},Lx=(e)=>{let t=(()=>{if(typeof e==="string")return e;if(e instanceof ArrayBuffer)return new TextDecoder().decode(e);return null})();if(!t)return[];try{let r=RO.safeParse(JSON.parse(t));if(!r.success)return[];return r.data.data}catch{return[]}},Nx=(e)=>{return![1000,1001,1008,4001,4003,4004].includes(e)},KO=(e,t)=>{if(t)return Error(t);let r={1000:"Normal closure",1001:"Endpoint going away",1002:"Protocol error",1003:"Unsupported data",1006:"Connection closed abnormally (no close frame received)",1007:"Invalid payload data",1008:"Policy violation",1009:"Message too big",1010:"Missing extension",1011:"Internal server error",1015:"TLS handshake failure",4001:"Authentication failed - check your credential",4003:"Forbidden - credential may not have access to this project",4004:"Project not found"}[e]??`Unknown close code: ${e}`;return Error(`Connection closed: ${r}`)},Cx=async(e,t,r,n=3,o=1e4)=>{let i;for(let a=0;a<=n;a+=1){let c=new AbortController,u=globalThis.setTimeout(()=>c.abort(),o);try{let s=await e(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r),signal:c.signal});if(s.ok)return;let d=await s.text();if(s.status===401||s.status===403)throw Error("Authentication failed. Check your public key.");if(s.status>=400&&s.status<500&&s.status!==429)throw Error(`Client error (${s.status}): ${d}`);i=Error(s.status===429?`Rate limited (429): ${d}`:`Server error (${s.status}): ${d}`)}catch(s){let d=s instanceof Error?s.message:String(s);if(d.startsWith("Authentication failed")||d.startsWith("Client error ("))throw s instanceof Error?s:Error(d);i=s instanceof Error&&s.name==="AbortError"?Error("Request timed out"):s instanceof Error?s:Error(String(s))}finally{globalThis.clearTimeout(u)}if(a<n)await zx(BO*2**a)}throw Error(`Failed after ${n+1} attempts: ${i?.message??"Unknown error"}`)},xx=(e)=>{return e.resourceLogs?.reduce((t,r)=>t+(r.scopeLogs?.reduce((n,o)=>n+(o.logRecords?.length??0),0)??0),0)??0},zx=async(e)=>{await new Promise((t)=>globalThis.setTimeout(t,e))},VO=(e,t,r)=>{return new pe("BAD_REQUEST",{message:t,data:{operationId:e,missingContext:r}})};var jp=g(()=>{go();Np();FO();Ie();mx=l.object({projectId:l.string().uuid().optional().describe("Project to tail logs for. Auto-filled from CLI and SDK context when omitted."),filters:Cp.optional().describe("Optional filters applied by the tail WebSocket service.")}),yx=l.object({publicKey:l.string().min(1).describe("Public key for intake auth. Create or list one via the public key endpoints."),logs:l.custom((e)=>typeof e==="object"&&e!==null).describe("OTLP logs export request payload to send to the intake service.")}),vx=l.object({forwardedCount:l.number().int().nonnegative().describe("Number of log records accepted by the intake request."),failedCount:l.number().int().nonnegative().describe("Number of log records rejected by the intake request.")})});var jx="https://api.sazabi.com",YO="https://api.platform.sazabi.com",XO="sazabi-cli",Ex="urn:ietf:params:oauth:grant-type:device_code",ZO=(e)=>{let t=Kc(new el(Lp,{url:Ux(e.apiBaseUrl??jx),headers:async()=>new Headers({authorization:`Bearer ${await e.credentialProvider.getToken()}`}),fetch:e.fetch,customErrorResponseBodyDecoder:(n,o)=>{let i=Mx(n);if(!i)return null;return new pe(i.code,{message:i.message,status:o.status,data:{operationId:i.operationId,missingContext:i.missingContext}})}})),r=MO({raw:t,credentialProvider:e.credentialProvider,fetch:e.fetch,intakeBaseUrl:e.intakeBaseUrl,tailBaseUrl:e.tailBaseUrl,webSocket:e.webSocket});return{raw:t,me:async()=>t.me({}),logs:{...r,query:async(n={})=>t.logs.query(await me(e.credentialProvider,n,tr.operationId)),schema:async(n={})=>t.logs.schema(await me(e.credentialProvider,n,or.operationId)),volume:async(n)=>t.logs.volume(await me(e.credentialProvider,n,rr.operationId)),patterns:async(n={})=>t.logs.patterns(await me(e.credentialProvider,n,nr.operationId)),nativeQuery:async(n)=>t.logs.nativeQuery(await me(e.credentialProvider,n,ir.operationId))},organizations:{list:async()=>t.organizations.list({}),get:async(n)=>t.organizations.get(n),update:async(n)=>t.organizations.update(await Fx(e.credentialProvider,n))},members:{list:async(n={})=>t.members.list(await Qa(e.credentialProvider,n)),updateRole:async(n)=>t.members.updateRole(await Qa(e.credentialProvider,n)),remove:async(n)=>{let o=await Qa(e.credentialProvider,n);return t.members.remove({params:{userId:o.userId},query:{organizationId:o.organizationId}})}},publicKeys:{list:async(n={})=>t.publicKeys.list(await me(e.credentialProvider,n,Yo.operationId)),get:async(n)=>t.publicKeys.get(await me(e.credentialProvider,n,Xo.operationId)),create:async(n)=>t.publicKeys.create(await me(e.credentialProvider,n,Zo.operationId)),update:async(n)=>t.publicKeys.update(await me(e.credentialProvider,n,Qo.operationId)),deactivate:async(n)=>{let o=await me(e.credentialProvider,n,er.operationId);return t.publicKeys.deactivate({params:{keyId:o.keyId},query:{projectId:o.projectId}})}},secretKeys:{list:async(n={})=>t.secretKeys.list(n),get:async(n)=>t.secretKeys.get(n),create:async(n)=>t.secretKeys.create(n),update:async(n)=>t.secretKeys.update(n),delete:async(n)=>{await t.secretKeys.delete({params:{keyId:n.keyId}})}},search:{threads:async(n)=>t.search.threads(await me(e.credentialProvider,n,cr.operationId)),messages:async(n)=>t.search.messages(await me(e.credentialProvider,n,lr.operationId))},projects:{list:async(n={})=>t.projects.list(await Rx(e.credentialProvider,n)),get:async(n)=>t.projects.get(n)},messages:{list:async(n)=>t.messages.list(n),append:async(n)=>WO(t,await t.messages.append(Hx(n)))},threads:{list:async(n={})=>t.threads.list(await Kx(e.credentialProvider,n)),get:async(n)=>t.threads.get(n),getStatus:async(n)=>t.threads.getStatus(n),create:async(n)=>WO(t,await t.threads.create(await Gx(e.credentialProvider,n))),update:async(n)=>t.threads.update(n)},runs:{list:async(n={})=>t.runs.list(await Bx(e.credentialProvider,n)),listForThread:async(n)=>t.runs.listForThread(n),get:async(n)=>t.runs.get(n)},dataSources:{listTypes:async()=>t.dataSources.listTypes({}),connections:{list:async(n={})=>t.dataSources.listConnections(await me(e.credentialProvider,n,qo.operationId)),get:async(n)=>t.dataSources.getConnection(n),create:async(n)=>t.dataSources.createConnection(await me(e.credentialProvider,n,Vo.operationId)),disconnect:async(n)=>t.dataSources.disconnectConnection(n)},streams:{list:async(n)=>t.dataSources.listStreams(n),get:async(n)=>t.dataSources.getStream(n),create:async(n)=>t.dataSources.createStream(n),delete:async(n)=>t.dataSources.deleteStream(n)}},issues:{create:async(n)=>t.issues.create(await me(e.credentialProvider,n,Wo.operationId)),list:async(n={})=>t.issues.list(await me(e.credentialProvider,n,"issues.list")),get:async(n)=>t.issues.get(n),resolve:async(n)=>t.issues.resolve(n),ignore:async(n)=>t.issues.ignore(n),unignore:async(n)=>t.issues.unignore(n)},statusComponents:{list:async(n={})=>t.statusComponents.list(await me(e.credentialProvider,n,"statusComponents.list")),get:async(n)=>t.statusComponents.get(n)},tasks:{list:async(n={})=>t.tasks.list(await me(e.credentialProvider,n,In.operationId))}}},Up=async(e={})=>{let t=await tS(e.fetch)(QO(e.apiBaseUrl??YO,"/device/code"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({client_id:e.clientId??XO,...e.scope?{scope:e.scope}:{}})}),r=await t.json();if(!t.ok)throw Jx(r,t.status);let n=r;return{deviceCode:ur(n.device_code,"device_code"),userCode:ur(n.user_code,"user_code"),verificationUri:ur(n.verification_uri,"verification_uri"),verificationUriComplete:ur(n.verification_uri_complete,"verification_uri_complete"),expiresIn:Ep(n.expires_in,"expires_in"),interval:Ep(n.interval,"interval")}},Rp=async(e)=>{let t=await tS(e.fetch)(QO(e.apiBaseUrl??YO,"/device/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({grant_type:Ex,device_code:e.deviceCode,client_id:e.clientId??XO})}),r=await t.json();if(t.ok){let o=r;return{status:"authorized",accessToken:ur(o.access_token,"access_token"),tokenType:ur(o.token_type,"token_type"),expiresIn:Ep(o.expires_in,"expires_in"),scope:typeof o.scope==="string"?o.scope:""}}let n=eS(r);if(!n)throw Error(`Device authorization failed with status ${t.status}`);if(n.error==="authorization_pending")return{status:"pending"};if(n.error==="slow_down")return{status:"pending",interval:10};if(n.error==="access_denied")return{status:"denied",message:n.errorDescription};if(n.error==="expired_token"||n.error==="invalid_grant")return{status:"expired",message:n.errorDescription};throw Error(n.errorDescription)},Ux=(e)=>{let t=e.replace(/\/+$/,"");return t.endsWith("/v1")?t:`${t}/v1`},QO=(e,t)=>{return`${e.replace(/\/+$/,"")}/api/auth${t}`},Rx=async(e,t)=>{return Qa(e,t)},Qa=async(e,t)=>{let r=t.organizationId??await e.getOrganizationId?.();return r?{...t,organizationId:r}:t},Fx=async(e,t)=>{let r=t.organizationId??await e.getOrganizationId?.();if(!r)throw new pe("BAD_REQUEST",{message:"Organization ID is required",data:{operationId:"organizations.update",missingContext:["organizationId"]},status:400});return{...t,organizationId:r}},me=async(e,t,r)=>{let n=t.projectId??await e.getProjectId?.();if(!n)throw new pe("BAD_REQUEST",{message:"Project ID is required",data:{operationId:r,missingContext:["projectId"]},status:400});return{...t,projectId:n}},Kx=async(e,t)=>{let r=t.projectId??await e.getProjectId?.();return r?{...t,projectId:r}:t},Bx=async(e,t)=>{let r=t.projectId??await e.getProjectId?.();return r?{...t,projectId:r}:t},Gx=async(e,t)=>{let r=t.projectId??await e.getProjectId?.();return r?{...t,projectId:r}:t},Hx=(e)=>{return{threadId:e.threadId,message:e.message,wait:e.wait??!0,timeoutSeconds:e.timeoutSeconds??20,...e.automationId!==void 0?{automationId:e.automationId}:{}}},Mx=(e)=>{if(!e||typeof e!=="object")return null;let t=e;if(typeof t.code!=="string"||typeof t.message!=="string"||typeof t.operationId!=="string")return null;return{code:t.code,message:t.message,operationId:t.operationId,missingContext:Array.isArray(t.missingContext)?t.missingContext.filter((r)=>typeof r==="string"):[]}},eS=(e)=>{if(!e||typeof e!=="object")return null;let t=e;if(typeof t.error!=="string"||typeof t.error_description!=="string")return null;return{error:t.error,errorDescription:t.error_description}},Jx=(e,t)=>{let r=eS(e);return Error(r?.errorDescription??`Device authorization failed with status ${t}`)},tS=(e)=>{return e??globalThis.fetch},WO=(e,t)=>({result:t,poll:()=>e.runs.get({runId:t.runId}),waitForCompletion:async(r={})=>qx(e,t,r)}),qx=async(e,t,r)=>{if(t.completed)return t;let n=r.intervalMs??2000,o=Date.now(),i=t;while(!i.completed){if(r.timeoutMs!==void 0&&Date.now()-o>=r.timeoutMs)return i;await Vx(n),i=await e.runs.get({runId:i.runId})}return i},Vx=async(e)=>{await new Promise((t)=>globalThis.setTimeout(t,e))},ur=(e,t)=>{if(typeof e==="string")return e;throw Error(`Expected '${t}' to be a string.`)},Ep=(e,t)=>{if(typeof e==="number")return e;throw Error(`Expected '${t}' to be a number.`)};var Fp=g(()=>{go();Vm();Xa();jp();jp()});var ke=(e)=>({success:!0,value:e}),ge=(e,t,r)=>({success:!1,error:e,...t!==void 0&&{statusCode:t},...r!==void 0&&{errorPayload:r}}),I=(e,t,r)=>{if(!e.success){let n=`${t}: ${e.error}`;if(r)return v(e.errorPayload??n);return y(n)}return e.value};var X=g(()=>{G()});var Yx="https://api.sazabi.com",z=async(e)=>{try{return ke(await e())}catch(t){let r=Xx(t),n=Zx(t),o=t instanceof Error?t.message:String(t);return ge(o,n,r)}},Xx=(e)=>{if(!e||typeof e!=="object")return;let t=e;if(typeof t.code!=="string"||typeof t.message!=="string"||!t.data||typeof t.data!=="object")return;let r=t.data;if(typeof r.operationId!=="string")return;return{code:t.code,message:t.message,operationId:r.operationId,missingContext:Array.isArray(r.missingContext)?r.missingContext.filter((n)=>typeof n==="string"):[]}},Zx=(e)=>{if(!e||typeof e!=="object")return;let t=e;return typeof t.status==="number"?t.status:void 0},It=(e)=>{let t=ZO({apiBaseUrl:e.baseUrl??Yx,credentialProvider:{getToken:()=>e.token,getOrganizationId:()=>e.organizationId,getProjectId:()=>e.projectId},intakeBaseUrl:e.intakeBaseUrl,tailBaseUrl:e.tailBaseUrl});return{me:()=>z(()=>t.me()),logs:{tail:(r)=>z(()=>t.logs.tail(r)),forward:(r)=>z(()=>t.logs.forward(r)),query:(r={})=>z(()=>t.logs.query(r)),schema:(r={})=>z(()=>t.logs.schema(r)),volume:(r)=>z(()=>t.logs.volume(r)),patterns:(r={})=>z(()=>t.logs.patterns(r)),nativeQuery:(r)=>z(()=>t.logs.nativeQuery(r))},organizations:{list:()=>z(()=>t.organizations.list()),get:(r)=>z(()=>t.organizations.get({organizationId:r})),rename:(r,n)=>z(()=>t.organizations.update({organizationId:n,name:r}))},members:{list:(r={})=>z(()=>t.members.list(r)),updateRole:(r,n,o)=>z(()=>t.members.updateRole({organizationId:o,userId:r,role:n})),remove:(r,n)=>z(()=>t.members.remove({organizationId:n,userId:r}))},projects:{list:(r={})=>z(()=>t.projects.list(r)),get:(r)=>z(()=>t.projects.get({projectId:r}))},threads:{list:(r={})=>z(()=>t.threads.list(r)),get:(r)=>z(()=>t.threads.get({threadId:r})),create:(r)=>z(()=>t.threads.create(r)),getStatus:(r)=>z(()=>t.threads.getStatus({threadId:r})),update:(r,n)=>z(()=>t.threads.update({threadId:r,status:n}))},messages:{list:(r,n={})=>z(()=>t.messages.list({threadId:r,...n})),append:(r,n,o,i,a)=>z(()=>t.messages.append({threadId:r,message:n,wait:o,timeoutSeconds:i,...a!==void 0?{automationId:a}:{}}))},runs:{get:(r)=>z(()=>t.runs.get({runId:r}))},search:{threads:(r)=>z(()=>t.search.threads(r)),messages:(r)=>z(()=>t.search.messages(r))},publicKeys:{list:(r)=>z(()=>t.publicKeys.list(r)),get:(r,n)=>z(()=>t.publicKeys.get(n?{keyId:r,projectId:n}:{keyId:r})),create:(r)=>z(()=>t.publicKeys.create(r)),update:(r)=>z(()=>t.publicKeys.update(r)),deactivate:(r)=>z(()=>t.publicKeys.deactivate(r))},secretKeys:{list:(r)=>z(()=>t.secretKeys.list(r)),get:(r)=>z(()=>t.secretKeys.get({keyId:r})),create:(r)=>z(()=>t.secretKeys.create(r)),update:(r)=>z(()=>t.secretKeys.update(r)),delete:(r)=>z(()=>t.secretKeys.delete(r))},issues:{create:(r)=>z(()=>t.issues.create(r)),list:(r={})=>z(()=>t.issues.list(r)),get:(r)=>z(()=>t.issues.get({issueId:r})),resolve:(r)=>z(()=>t.issues.resolve({issueId:r})),ignore:(r)=>z(()=>t.issues.ignore({issueId:r})),unignore:(r)=>z(()=>t.issues.unignore({issueId:r}))},statusComponents:{list:(r={})=>z(()=>t.statusComponents.list(r)),get:(r)=>z(()=>t.statusComponents.get({componentId:r}))},tasks:{list:(r={})=>z(()=>t.tasks.list(r))},dataSources:{listTypes:()=>z(()=>t.dataSources.listTypes()),connections:{list:(r)=>z(()=>t.dataSources.connections.list(r)),get:(r)=>z(()=>t.dataSources.connections.get({connectionId:r})),create:(r)=>z(()=>t.dataSources.connections.create(r)),disconnect:(r)=>z(()=>t.dataSources.connections.disconnect({connectionId:r}))},streams:{list:(r)=>z(()=>t.dataSources.streams.list({connectionId:r})),get:(r)=>z(()=>t.dataSources.streams.get({streamId:r})),create:(r)=>z(()=>t.dataSources.streams.create(r)),delete:(r)=>z(()=>t.dataSources.streams.delete({streamId:r}))}}}};var kn=g(()=>{Fp();X()});var oS;var rS=g(()=>{oS={version:2,activeProfile:"default",profiles:{default:{}}}});import*as kt from"node:fs";import*as nS from"node:os";import*as Gp from"node:path";var Ne=(e)=>{if(e===void 0||e===null)return;if(typeof e==="string")return e.length>0?e:void 0;return},Kp,sr,Qx=()=>{if(!kt.existsSync(Kp))kt.mkdirSync(Kp,{recursive:!0,mode:448})},Bp,iS=(e)=>{Bp=e},aS=(e)=>({token:Ne(e.token),activeOrganizationId:Ne(e.activeOrganizationId??e.organizationId),organizationName:Ne(e.organizationName),activeProjectId:Ne(e.activeProjectId??e.defaultProjectId),apiBaseUrl:Ne(e.apiBaseUrl),authBaseUrl:Ne(e.authBaseUrl),webBaseUrl:Ne(e.webBaseUrl),intakeBaseUrl:Ne(e.intakeBaseUrl),tailBaseUrl:Ne(e.tailBaseUrl),apiDomain:Ne(e.apiDomain),webDomain:Ne(e.webDomain),intakeDomain:Ne(e.intakeDomain),tailDomain:Ne(e.tailDomain),forwardPublicKey:Ne(e.forwardPublicKey)}),ez=(e)=>({version:2,activeProfile:"default",profiles:{default:aS(e)}}),tz=(e)=>{let t=Ne(e.activeProfile)??"default",r=typeof e.profiles==="object"&&e.profiles!==null?e.profiles:{},n={};for(let[o,i]of Object.entries(r)){if(typeof i!=="object"||i===null)continue;n[o]=aS(i)}if(!n[t])n[t]={};return{version:2,activeProfile:t,profiles:n}},ie=()=>{try{if(!kt.existsSync(sr))return ke(oS);let e=kt.readFileSync(sr,"utf-8"),t=JSON.parse(e),r=typeof t.version==="number"?t.version:void 0;if(r!==void 0&&r>2)return ge("Settings file requires a newer CLI version. Please upgrade.");if(r===2)return ke(tz(t));let n=ez(t),o=ye(n);if(!o.success)return o;return ke(n)}catch(e){let t=e instanceof Error?e.message:String(e);return ge(`Failed to read settings: ${t}`)}},ye=(e)=>{try{return Qx(),kt.writeFileSync(sr,JSON.stringify(e,null,2),{encoding:"utf-8",mode:384}),ke(void 0)}catch(t){let r=t instanceof Error?t.message:String(t);return ge(`Failed to write settings: ${r}`)}},ut=(e,t)=>{if(t)return t;if(Bp)return Bp;let r=process.env.SAZABI_PROFILE?.trim();if(r)return r;return e.activeProfile??"default"},Qe=(e,t)=>{let r=ut(e,t),n=e.profiles[r];if(n)return ke(n);if(r==="default")return ke({});return ge(`Profile '${r}' does not exist. Run 'sazabi profiles create ${r}' first.`)},wt=()=>{let e=ie();if(!e.success)return e;return Qe(e.value)},Fe=(e,t,r)=>{let n=ut(e,r);if(!e.profiles[n])return ge(`Profile '${n}' does not exist. Run 'sazabi profiles create ${n}' first.`);return ke({...e,profiles:{...e.profiles,[n]:{...e.profiles[n],...t}}})};var Ve=g(()=>{rS();X();Kp=Gp.join(nS.homedir(),".sazabi"),sr=Gp.join(Kp,"settings.json")});var st=(e)=>{let{cliFlag:t,globalUrl:r,globalDomain:n,buildUrlFromDomain:o,defaultUrl:i}=e;if(t)return t;let a=process.env.SAZABI_API_URL?.trim();if(a)return a;if(r)return r;if(n)return o(n);return i},L=(e)=>{let{tokenFlag:t,organizationIdFlag:r,projectIdFlag:n,jsonMode:o}=e,i=t?.trim(),a=process.env.SAZABI_TOKEN?.trim(),c=process.env.SAZABI_ORGANIZATION_ID?.trim(),u=process.env.SAZABI_PROJECT_ID?.trim(),s=I(wt(),"Failed to read settings",o),d=s.token?.trim(),h=(i&&i.length>0?i:void 0)||(a&&a.length>0?a:void 0)||d,b=i&&i.length>0?"flag":a&&a.length>0?"environment":"settings";if(!h||h.length===0){if(o)return v("Not authenticated. Set SAZABI_TOKEN, pass --token, run 'sazabi auth login', or run 'sazabi auth save <token>'.");return y("Not authenticated. Set SAZABI_TOKEN, pass --token, run 'sazabi auth login', or run 'sazabi auth save <token>'.")}let p,_;if(r)p=r,_="flag";else if(c&&c.length>0)p=c,_="environment";else if(s.activeOrganizationId)p=s.activeOrganizationId,_="settings";let S,H;if(n)S=n,H="flag";else if(u&&u.length>0)S=u,H="environment";else if(s.activeProjectId)S=s.activeProjectId,H="settings";return{token:h,type:"token",projectId:S,organizationId:p,tokenSource:b,organizationSource:_,projectSource:H}},N=(e)=>{let t=I(wt(),"Failed to read settings",e.jsonMode),r=st({cliFlag:e.apiBaseUrlFlag,globalUrl:t.apiBaseUrl,globalDomain:t.apiDomain,buildUrlFromDomain:(n)=>`https://api.${n}`,defaultUrl:"https://api.sazabi.com"});return It({token:e.token,baseUrl:r,organizationId:e.organizationId,projectId:e.projectId})},cS,Hp,tc=async(e)=>{let t=I(wt(),"Failed to read settings",e.jsonMode),r=st({cliFlag:e.apiBaseUrlFlag,globalUrl:t.apiBaseUrl,globalDomain:t.apiDomain,buildUrlFromDomain:(u)=>`https://api.${u}`,defaultUrl:"https://api.sazabi.com"}),n=`${e.token}@${r}@${e.projectId??""}`,o=cS.get(n);if(o)return o;let i=Hp.get(n);if(i)return i;if(!e.projectId){if(e.jsonMode)return v("Project ID is required. Run 'sazabi projects use <project-id>' or set SAZABI_PROJECT_ID.");return y("Project ID is required. Run 'sazabi projects use <project-id>' or set SAZABI_PROJECT_ID.")}let a=e.projectId,c=(async()=>{let s=await It({token:e.token,baseUrl:r,projectId:a}).projects.get(a),h=I(s,"Failed to fetch project info",e.jsonMode).project;return cS.set(n,h),h})();Hp.set(n,c);try{return await c}finally{Hp.delete(n)}},ec=(e)=>{let t=e.trim().toLowerCase(),r=/^[a-z][a-z0-9+.-]*:\/\//.test(t)?t:`https://${t}`,n=t;try{n=new URL(r).hostname.toLowerCase()}catch{n=t.replace(/^[a-z][a-z0-9+.-]*:\/\//,"").replace(/[/?#].*$/,"").replace(/:\d+$/,"")}return`https://app.${n.replace(/^(?:app\.)+/,"")}`},wn=(e)=>{let t=(n)=>n.replace(/\/+$/,"");if(e)return t(e);let r=I(wt(),"Failed to read settings");if(r.webBaseUrl)return t(r.webBaseUrl);if(r.webDomain)return ec(r.webDomain);if(r.apiDomain)return ec(r.apiDomain);return"https://app.sazabi.com"},$t=(e,t,r,n)=>{let o=`${wn(r)}/projects/${e}/threads/${t}`;return n?`${o}?messageId=${encodeURIComponent(n)}`:o},lS=(e,t)=>{return`https://otlp.${t}.intake.${e}`};var oe=g(()=>{G();kn();X();Ve();cS=new Map,Hp=new Map});var sc,CT=(e)=>{sc.set(e.name,e)},hc=(e)=>{return sc.get(e)},_n=()=>{return Array.from(sc.values())},xT=(e)=>{return sc.has(e)};var Zp=g(()=>{sc=new Map});async function om(e){let t=await e.publicKeys.list({limit:20});if(!t.success)return[];return t.value.publicKeys.map((r)=>({value:r.id,description:r.name}))}async function rm(e){let t=await e.secretKeys.list({limit:20});if(!t.success)return[];return t.value.secretKeys.map((r)=>({value:r.id,description:r.name}))}async function D4(e){let t=await e.dataSources.connections.list();if(!t.success)return[];return t.value.connections.map((r)=>({value:r.id,description:r.displayName??void 0}))}async function ET(e){let t=await e.members.list();if(!t.success)return[];return t.value.members.map((r)=>({value:r.userId,description:r.name??r.email}))}var P4=3000,A4,UT=async(e,t,r)=>{try{let n=A4[e]?.[t];if(!n)return[];let o=wt();if(!o.success)return[];let i=o.value,a=process.env.SAZABI_TOKEN?.trim()||i.token?.trim();if(!a)return[];let c=st({globalUrl:i.apiBaseUrl,globalDomain:i.apiDomain,buildUrlFromDomain:(d)=>`https://api.${d}`,defaultUrl:"https://api.sazabi.com"}),u=It({token:a,baseUrl:c,organizationId:i.activeOrganizationId,projectId:i.activeProjectId});return(await Promise.race([n(u),new Promise((d)=>setTimeout(()=>d([]),P4))])).filter((d)=>d.value.startsWith(r))}catch{return[]}};var RT=g(()=>{kn();oe();Ve();A4={threads:{get:async(e)=>{let t=await e.threads.list({limit:20});if(!t.success)return[];return t.value.threads.map((r)=>({value:r.id,description:r.title??void 0}))}},projects:{use:async(e)=>{let t=await e.projects.list();if(!t.success)return[];return t.value.projects.map((r)=>({value:r.id,description:r.name}))}},organizations:{use:async(e)=>{let t=await e.organizations.list();if(!t.success)return[];return t.value.organizations.map((r)=>({value:r.id,description:r.name}))},rename:async(e)=>{let t=await e.organizations.list();if(!t.success)return[];return t.value.organizations.map((r)=>({value:r.id,description:r.name}))}},"public-keys":{get:om,update:om,deactivate:om},"secret-keys":{get:rm,update:rm,delete:rm},"data-sources":{"get-connection":D4},members:{"update-role":ET,remove:ET}}});var KT={};et(KT,{parseCompletionContext:()=>C4,getCompletions:()=>x4});var L4,N4,C4=(e)=>{let t=e.length>0?e:[""],r=t.length-1,n=t[r]??"";return{words:t,currentIndex:r,partial:n}},x4=async(e)=>{let{words:t,currentIndex:r,partial:n}=e,o=t[r-1];if(o==="--profile")return U4(n);let i=E4(t),a=Math.max(0,i.length-(t.length-r));if(a===0)return z4(n);let c=i[0]??"",u=hc(c);if(!u)return[];if(a===1&&u.subcommands){if(n.startsWith("-"))return FT(u.options,i);return j4(u,n)}let s=u.subcommands?i[1]:void 0,h=(s?u.subcommands?.[s]:void 0)?.options??u.options;if(n.startsWith("-"))return FT(h,i);if(o?.startsWith("--")){let b=o.slice(2);if(h?.[b]?.type==="string"){let _=`${c}:${s??""}`,S=N4[_]?.[b]??L4[b];if(S)return S.filter((H)=>H.startsWith(n)).map((H)=>({value:H}));return[]}}return UT(c,s??"",n)},z4=(e)=>{let r=_n().filter((o)=>o.name.startsWith(e)).map((o)=>({value:o.name,description:o.description})),n=[{value:"--help",description:"Show help"},{value:"--version",description:"Show version"},{value:"--profile",description:"Use a named profile"}];for(let o of n)if(o.value.startsWith(e))r.push(o);return r},j4=(e,t)=>{if(!e.subcommands)return[];return Object.values(e.subcommands).filter((r)=>r.name.startsWith(t)).map((r)=>({value:r.name,description:r.description}))},FT=(e,t)=>{let r=t[t.length-1]??"",n=new Set(t.filter((i)=>i.startsWith("--")).map((i)=>i.replace(/=.*/,""))),o=[];if(!n.has("--help")&&"--help".startsWith(r))o.push({value:"--help",description:"Show help"});if(!n.has("--profile")&&"--profile".startsWith(r))o.push({value:"--profile",description:"Use a named profile"});if(!e)return o;for(let[i,a]of Object.entries(e)){let c=`--${i}`;if(n.has(c))continue;if(!c.startsWith(r))continue;o.push({value:c,description:a.description})}return o},E4=(e)=>{let t=[];for(let r=0;r<e.length;r++){let n=e[r];if(n==="--profile"&&r+1<e.length)r++;else if(n.startsWith("--profile="));else t.push(n)}return t},U4=(e)=>{try{let t=ie();if(!t.success)return[];return Object.keys(t.value.profiles).filter((r)=>r.startsWith(e)).map((r)=>({value:r,description:r===t.value.activeProfile?"active":void 0}))}catch{return[]}};var BT=g(()=>{Zp();Ve();RT();L4={status:["regular","archived"],format:["json","text"]},N4={"members:update-role":{role:["admin","member"]},"messages:search":{role:["user","assistant"]},"messages:list":{role:["user","assistant"]}}});G();G();Fp();import{spawn as oz}from"node:child_process";G();import{parseArgs as Wx}from"node:util";var T=(e,t,r={})=>{let n=Wx({args:e,options:t,allowPositionals:Boolean(r.allowPositionals),strict:!1,tokens:!0}),o=Object.hasOwn(t,"json")&&n.values.json===!0,i=new Set(Object.keys(t)),a=new Set(Object.entries(t).map(([,u])=>u.short).filter((u)=>Boolean(u))),c=[];if(Array.isArray(n.tokens))for(let u of n.tokens){if(u.kind!=="option")continue;let s=u.name,d=s.length>1;if(!(i.has(s)||!d&&a.has(s))){let b=d?`--${s}`:`-${s}`;if(!c.includes(b))c.push(b)}}for(let u of Object.keys(n.values))if(!i.has(u)){let s=u.length>1?`--${u}`:`-${u}`;if(!c.includes(s))c.push(s)}if(c.length>0){let u=`Unknown option${c.length>1?"s":""}: ${c.join(", ")}`;if(o)v(u);y(u)}for(let[u,s]of Object.entries(t))if(s.type==="string"&&n.values[u]===!0){let h=`Option ${u.length===1?`-${u}`:`--${u}`} requires a value`;if(o)v(h);y(h)}for(let[u,s]of Object.entries(t)){let d=n.values[u];if(s.type==="string"&&typeof d==="string"){if(d.startsWith("--")||d.length===2&&d[0]==="-"&&/[a-zA-Z]/.test(d.charAt(1))){let p=`Option ${u.length===1?`-${u}`:`--${u}`} received "${d}" as its value. Did you forget to provide a value?`;if(o)v(p);y(p)}}}return{values:n.values,positionals:n.positionals}};var q={token:{type:"string"},"api-base-url":{type:"string"},json:{type:"boolean"}},V={token:{type:"string",description:"Override token"},"api-base-url":{type:"string",description:"Override API base URL"},json:{type:"boolean",description:"Output as JSON"}};oe();var oc=(e,t)=>{let r=e?.json;if(!r||r.type!=="boolean")throw Error(`${t} must include a boolean --json option (enforced by CommandBuilder)`)};class uS{name;description;handler;subcommands;options;examples;positionalArgs;allowNoJson=!1;constructor(e,t,r){this.name=e,this.description=t,this.handler=r}withOptions(e){return this.options=e,this}withSubcommands(e){return this.subcommands=e,this}withExamples(e){return this.examples=e,this}withPositionalArgs(e){return this.positionalArgs=e,this}build(){if(!this.handler&&!this.subcommands)throw Error(`Subcommand "${this.name}" must have either a handler or subcommands`);if(!this.allowNoJson&&this.handler)oc(this.options,`Subcommand "${this.name}"`);if(!this.allowNoJson&&this.subcommands){for(let[e,t]of Object.entries(this.subcommands))if(!t.subcommands)oc(t.options,`Subcommand "${this.name} ${e}"`)}return{name:this.name,description:this.description,handler:this.handler,subcommands:this.subcommands,options:this.options,examples:this.examples,positionalArgs:this.positionalArgs}}allowWithoutJson(){return this.allowNoJson=!0,this}}class sS{name;description;handler;subcommands;options;examples;positionalArgs;allowNoJson=!1;constructor(e,t){this.name=e,this.description=t}withHandler(e){return this.handler=e,this}withSubcommands(e){return this.subcommands=e,this}withOptions(e){return this.options=e,this}withExamples(e){return this.examples=e,this}withPositionalArgs(e){return this.positionalArgs=e,this}build(){if(!this.handler&&!this.subcommands)throw Error(`Command "${this.name}" must have either a handler or subcommands`);if(!this.allowNoJson){if(this.handler)oc(this.options,`Command "${this.name}"`);if(this.subcommands)for(let[e,t]of Object.entries(this.subcommands)){if(t.subcommands)continue;oc(t.options,`Subcommand "${this.name} ${e}"`)}}return{name:this.name,description:this.description,handler:this.handler,subcommands:this.subcommands,options:this.options,examples:this.examples,positionalArgs:this.positionalArgs}}allowWithoutJson(){return this.allowNoJson=!0,this}}var W=(e,t)=>{return new sS(e,t)},P=(e,t,r)=>{return new uS(e,t,r)};X();Ve();var hr=(e)=>{if(e==="flag")return"from flag";if(e==="environment")return"from environment";return"from settings"},rz=async(e={})=>{let t=L({jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.me(),"Failed to fetch authentication details",e.json);if(e.json){j({credential:n,activeOrganizationId:t.organizationId,activeProjectId:t.projectId,tokenSource:t.tokenSource,organizationSource:t.organizationSource,projectSource:t.projectSource});return}if(ce("Authentication"),n.credentialType==="user"){ne({Type:`User token (${hr(t.tokenSource)})`,User:n.user.name??n.user.email,Email:n.user.email,"Active Organization":t.organizationId&&t.organizationSource?`${t.organizationId} (${hr(t.organizationSource)})`:_e("(none)"),"Active Project":t.projectId&&t.projectSource?`${t.projectId} (${hr(t.projectSource)})`:_e("(none)"),Organizations:n.organizations.length.toString(),"Dashboard URL":wn()});return}if(n.credentialType==="secret"){ne({Type:`Secret key (${hr(t.tokenSource)})`,Organization:n.organization.name,"Key Name":n.keyName,"Active Project":t.projectId&&t.projectSource?`${t.projectId} (${hr(t.projectSource)})`:_e("(none)"),"Dashboard URL":wn()});return}ne({Type:`Partner key (${hr(t.tokenSource)})`,Superorganization:n.superorganization.name,"Dashboard URL":wn()})},nz=async(e,t={})=>{let r=e.trim();if(!r){if(t.json)return v("Token is required.");return y("Token is required.")}let n=I(ie(),"Failed to read settings",t.json);await Mp({token:r,options:t,cliSettings:n,status:"saved"})},hS=(e)=>{let t=process.platform,r,n;if(t==="darwin")r="open",n=[e];else if(t==="win32")r="cmd",n=["/c","start","",e];else r="xdg-open",n=[e];let o=oz(r,n,{detached:!0,stdio:"ignore"});o.on("error",()=>{}),o.unref()},dS=(e)=>new Promise((t)=>setTimeout(t,e)),iz=async(e={})=>{let t=I(ie(),"Failed to read settings",e.json),r=ut(t),n=t.profiles[r]??{},o=Jp(n,e.apiBaseUrl),i=gS(o,e.authBaseUrl??n.authBaseUrl),a;try{a=await Up({apiBaseUrl:i})}catch(b){let p=b instanceof Error?b.message:String(b);if(e.json)return v(`Failed to initiate signup: ${p}`);return y(`Failed to initiate signup: ${p}`)}let c=pS({profile:n,publicApiBaseUrl:o,authBaseUrl:i,apiBaseUrlOverride:e.apiBaseUrl,authBaseUrlOverride:e.authBaseUrl,webBaseUrlOverride:e.webBaseUrl,verificationUriComplete:a.verificationUriComplete}),u=`/login/cli?user_code=${encodeURIComponent(a.userCode)}`,s=`${c}/sign-up?returnTo=${encodeURIComponent(u)}`,d=new Date(Date.now()+a.expiresIn*1000),h=a.interval*1000;if(!e.json)R(),ce("Create a Sazabi account"),R(),tt(`Opening ${ae.info(s)}`),R(),hS(s),Y("Waiting for signup to complete...");while(new Date<d){await dS(h);try{let b=await Rp({apiBaseUrl:i,deviceCode:a.deviceCode});if(b.status==="pending"){h=(b.interval??a.interval)*1000;continue}if(b.status==="denied"){if(e.json)return v("Signup was denied.");return R(),y("Signup was denied.")}if(b.status==="expired"){if(e.json)return v("Signup request expired. Please try again.");return R(),y("Signup request expired. Please try again.")}await Mp({token:b.accessToken,options:e,cliSettings:t,status:"authorized"});return}catch(b){let p=b instanceof Error?b.message:String(b);if(e.json)return v(`Signup failed: ${p}`);return R(),y(`Signup failed: ${p}`)}}if(e.json)return v("Signup request expired. Please try again.");return R(),y("Signup request expired. Please try again.")},az=async(e={})=>{let t=I(ie(),"Failed to read settings",e.json),r=ut(t),n=t.profiles[r]??{},o=Jp(n,e.apiBaseUrl),i=gS(o,e.authBaseUrl??n.authBaseUrl),a;try{a=await Up({apiBaseUrl:i})}catch(h){let b=h instanceof Error?h.message:String(h);if(e.json)return v(`Failed to initiate login: ${b}`);return y(`Failed to initiate login: ${b}`)}let c=pS({profile:n,publicApiBaseUrl:o,authBaseUrl:i,apiBaseUrlOverride:e.apiBaseUrl,authBaseUrlOverride:e.authBaseUrl,webBaseUrlOverride:e.webBaseUrl,verificationUriComplete:a.verificationUriComplete}),u=bz(a.verificationUriComplete,c),s=new Date(Date.now()+a.expiresIn*1000),d=a.interval*1000;if(!e.json)R(),ce("Login to Sazabi"),R(),tt("Enter this code in your browser:"),R(),tt(ae.bold(a.userCode),4),R(),tt(`Opening ${ae.info(u)}`),R(),hS(u),Y("Waiting for authorization...");while(new Date<s){await dS(d);try{let h=await Rp({apiBaseUrl:i,deviceCode:a.deviceCode});if(h.status==="pending"){d=(h.interval??a.interval)*1000;continue}if(h.status==="denied"){if(e.json)return v("Authorization was denied.");return R(),y("Authorization was denied.")}if(h.status==="expired"){if(e.json)return v("Authorization request expired. Please try again.");return R(),y("Authorization request expired. Please try again.")}await Mp({token:h.accessToken,options:e,cliSettings:t,status:"authorized"});return}catch(h){let b=h instanceof Error?h.message:String(h);if(e.json)return v(`Authorization failed: ${b}`);return R(),y(`Authorization failed: ${b}`)}}if(e.json)return v("Authorization request expired. Please try again.");return R(),y("Authorization request expired. Please try again.")},cz=(e)=>{let t=I(ie(),"Failed to read settings",e.json),r=I(Qe(t),"Failed to resolve profile",e.json),n=Boolean(r.token),o=I(Fe(t,{token:void 0,activeOrganizationId:void 0,organizationName:void 0,activeProjectId:void 0}),"Failed to update profile",e.json);if(I(ye(o),"Failed to remove credentials",e.json),e.json){j({removed:n});return}if(n){M("Logged out successfully.");return}Y("No credentials were saved.")},Mp=async({token:e,options:t,cliSettings:r,status:n})=>{let o=ut(r),i=r.profiles[o]??{},a=Jp(i,t.apiBaseUrl),c=N({token:e,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),u=I(await c.me(),`Failed to resolve authenticated context at ${a} (pass --api-base-url to target a different environment)`,t.json);if(n==="authorized"&&u.credentialType!=="user"){if(t.json)return v("Expected a user session from device authorization.");return y("Expected a user session from device authorization.")}let s=r.profiles[o]?r:{...r,profiles:{...r.profiles,[o]:{}}},d=s.profiles[o],h=await lz({client:c,credential:u,currentProjectId:d.activeProjectId,jsonMode:t.json}),b=I(Fe(s,{token:e,activeOrganizationId:h.activeOrganizationId,organizationName:h.activeOrganizationName,activeProjectId:h.activeProjectId,apiBaseUrl:t.apiBaseUrl??d.apiBaseUrl,authBaseUrl:t.authBaseUrl??d.authBaseUrl,webBaseUrl:t.webBaseUrl??d.webBaseUrl}),"Failed to update profile",t.json);if(I(ye(b),"Failed to save credentials",t.json),t.json){j({status:n,credential:u,activeOrganizationId:h.activeOrganizationId,activeProjectId:h.activeProjectId,projects:h.projects});return}if(R(),M(n==="authorized"?"Successfully authenticated!":"Saved token."),R(),sz({credential:u,activeOrganizationName:h.activeOrganizationName,activeProjectId:h.activeProjectId,projects:h.projects}),h.projects.length>0){R(),ce("Available Projects");for(let p of h.projects){let S=p.id===h.activeProjectId?ae.success(" (active)"):"";tt(`${p.name} (${p.region})${S}`)}}},lz=async({client:e,credential:t,currentProjectId:r,jsonMode:n})=>{if(t.credentialType==="partner")return{projects:[]};let o=t.credentialType==="user"?t.activeOrganizationId??t.organizations[0]?.id:t.organization.id,i=t.credentialType==="user"?t.organizations.find((c)=>c.id===o)?.name:t.organization.name,a=o?I(await e.projects.list({organizationId:o}),"Failed to fetch projects",n).projects:[];return{activeOrganizationId:o,activeOrganizationName:i,activeProjectId:uz(a,r),projects:a}},uz=(e,t)=>{if(t&&e.some((r)=>r.id===t))return t;return e[0]?.id},sz=({credential:e,activeOrganizationName:t,activeProjectId:r,projects:n})=>{if(e.credentialType==="user"){ne({Type:"User token",User:e.user.name??e.user.email,Organizations:e.organizations.length.toString(),"Active Organization":t??"(none)","Active Project":n.find((o)=>o.id===r)?.name??"(none)"});return}if(e.credentialType==="secret"){ne({Type:"Secret key",Organization:e.organization.name,"Key Name":e.keyName,"Active Project":n.find((o)=>o.id===r)?.name??"(none)"});return}ne({Type:"Partner key",Superorganization:e.superorganization.name})},Jp=(e,t)=>{return st({cliFlag:t,globalUrl:e.apiBaseUrl,globalDomain:e.apiDomain,buildUrlFromDomain:(r)=>`https://api.${r}`,defaultUrl:"https://api.sazabi.com"})},gS=(e,t)=>{if(t)return t;try{let r=new URL(e);if(["localhost","127.0.0.1"].includes(r.hostname)&&["15005","15009"].includes(r.port))return r.port="15001",r.toString().replace(/\/$/,"");if(r.hostname==="api.sazabi.com")return r.hostname="api.platform.sazabi.com",r.toString().replace(/\/$/,"");if(r.hostname==="api.staging.sazabi.dev")return r.hostname="api.platform.staging.sazabi.dev",r.toString().replace(/\/$/,"");return r.toString().replace(/\/$/,"")}catch{return e}},bS=(e)=>e.replace(/\/+$/,""),Ke=(e)=>(e?.trim().length??0)>0,hz=(e)=>{if(!Ke(e))return;try{let t=new URL(e);return`${t.protocol}//${t.host}`}catch{return}},rc=(e)=>{if(!Ke(e))return;try{let r=new URL(e).hostname.toLowerCase();if(["localhost","127.0.0.1"].includes(r))return"https://localhost:5173";if(["api.staging.sazabi.dev","api.platform.staging.sazabi.dev"].includes(r))return"https://app.staging.sazabi.dev";if(["api.sazabi.com","api.platform.sazabi.com"].includes(r))return"https://app.sazabi.com"}catch{return}return},dz=(e)=>{if(Ke(e.webBaseUrl))return bS(e.webBaseUrl);if(Ke(e.webDomain))return ec(e.webDomain);return},gz=({profile:e,publicApiBaseUrl:t})=>{if(!(Ke(e.authBaseUrl)||Ke(e.apiBaseUrl)||Ke(e.apiDomain)))return;if(Ke(e.authBaseUrl)){let n=rc(e.authBaseUrl);if(n)return n}return rc(t)},pS=({profile:e,publicApiBaseUrl:t,authBaseUrl:r,apiBaseUrlOverride:n,authBaseUrlOverride:o,webBaseUrlOverride:i,verificationUriComplete:a})=>{if(Ke(i))return bS(i);let c=process.env.SAZABI_API_URL?.trim(),u=Ke(o)||Ke(n)||Ke(c),s=hz(a);if(u){let b=Ke(o)?rc(r):rc(t);if(b)return b;if(s)return s}let d=dz(e);if(d)return d;let h=gz({profile:e,publicApiBaseUrl:t});if(h)return h;if(s)return s;return"https://app.sazabi.com"},bz=(e,t)=>{if(!t)return e;try{let r=new URL(e),n=new URL(t);return r.protocol=n.protocol,r.host=n.host,r.toString()}catch{return e}},mS=W("auth","Manage authentication credentials").withSubcommands({signup:P("signup","Create a new Sazabi account via browser",async(e)=>{let{values:t,positionals:r}=T(e,{...q,"auth-base-url":{type:"string"},"web-base-url":{type:"string"}},{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}await iz({json:t.json,apiBaseUrl:t["api-base-url"],authBaseUrl:t["auth-base-url"],webBaseUrl:t["web-base-url"]})}).withOptions({...V,"auth-base-url":{type:"string",description:"Override auth API base URL"},"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth signup  # Create a new account via browser"]).build(),login:P("login","Authenticate via browser",async(e)=>{let{values:t,positionals:r}=T(e,{...q,"auth-base-url":{type:"string"},"web-base-url":{type:"string"}},{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}await az({json:t.json,apiBaseUrl:t["api-base-url"],authBaseUrl:t["auth-base-url"],webBaseUrl:t["web-base-url"]})}).withOptions({...V,"auth-base-url":{type:"string",description:"Override auth API base URL"},"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth login  # Authenticate via browser"]).build(),save:P("save","Save an existing bearer token",async(e)=>{let{values:t,positionals:r}=T(e,{...q,"web-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Token is required.");return y("Token is required.")}if(r.length>1){let o=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${o}`);return y(`Unexpected arguments: ${o}`)}await nz(n,{json:t.json,apiBaseUrl:t["api-base-url"],webBaseUrl:t["web-base-url"]})}).withPositionalArgs("<token>").withOptions({...V,"web-base-url":{type:"string",description:"Override web app base URL"}}).withExamples(["sazabi auth save sazabi_secret_xxx  # Save a secret key for future commands"]).build(),logout:P("logout","Remove saved credentials",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}cz({json:t.json})}).withOptions(V).withExamples(["sazabi auth logout  # Remove saved credentials"]).build(),whoami:P("whoami","Display current authentication context",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}await rz({json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions(V).withExamples(["sazabi auth whoami  # Show current context","sazabi auth whoami --json  # Output as JSON"]).build()}).withExamples(["sazabi auth signup  # Create a new account via browser","sazabi auth login  # Authenticate via browser","sazabi auth save sazabi_secret_xxx  # Save an existing token","sazabi auth logout  # Remove saved credentials","sazabi auth whoami  # Show current context"]).build();G();var yS=()=>`
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
`.trim(),vS=()=>`
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
`.trim();var pz=async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}}),r=yS();if(t.json){j({shell:"zsh",script:r});return}console.log(r)},mz=async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}}),r=vS();if(t.json){j({shell:"bash",script:r});return}console.log(r)},fS=W("completions","Shell completion scripts").withSubcommands({zsh:P("zsh","Output zsh completion script",pz).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(['eval "$(sazabi completions zsh)"   # Add to .zshrc']).build(),bash:P("bash","Output bash completion script",mz).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(['eval "$(sazabi completions bash)"  # Add to .bashrc']).build()}).withExamples(['eval "$(sazabi completions zsh)"   # Enable zsh completions','eval "$(sazabi completions bash)"  # Enable bash completions']).build();G();oe();X();var yz={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}}},vz={schema:yz,columns:["id","name"],header:"Data source types",emptyMessage:"No data source types found."},IS={id:{label:"ID",type:{kind:"string"}},dataSourceType:{label:"Type",type:{kind:"string"}},displayName:{label:"Name",type:{kind:"nullable-string"}},projectId:{label:"Project",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}}},fz={schema:IS,columns:["id","dataSourceType","displayName","createdAt"],header:"Connections",emptyMessage:"No data source connections found."},Iz={layout:"field-list",schema:IS,fields:["id","dataSourceType","displayName","projectId","createdAt"],title:"Connection"},kS={id:{label:"ID",type:{kind:"string"}},displayName:{label:"Name",type:{kind:"string"}},connectionId:{label:"Connection",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},errorMessage:{label:"Error",type:{kind:"nullable-string"}},createdAt:{label:"Created",type:{kind:"date"}}},kz={schema:kS,columns:["id","displayName","status","errorMessage","createdAt"],header:"Streams",emptyMessage:"No streams found for this connection."},wz={layout:"field-list",schema:kS,fields:["id","connectionId","displayName","status","errorMessage","createdAt"],title:"Stream"},ht=(e)=>{let t=e.json,r=L({tokenFlag:e.token,jsonMode:t});return{client:N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:t}),json:t}},$z=async(e)=>{let{values:t}=T(e,q),{client:r,json:n}=ht(t),{types:o}=I(await r.dataSources.listTypes(),"Failed to list data source types",n),i=[...o].sort((a,c)=>a.name.localeCompare(c.name));J(vz,i,{json:n})},_z=async(e)=>{let{values:t}=T(e,{...q,type:{type:"string"},"project-id":{type:"string"}}),{client:r,json:n}=ht(t),{connections:o}=I(await r.dataSources.connections.list({projectId:t["project-id"],dataSourceType:t.type}),"Failed to list connections",n);J(fz,o,{json:n})},Oz=async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Connection ID is required.");return y("Connection ID is required.")}let{client:o,json:i}=ht(t),{connection:a}=I(await o.dataSources.connections.get(n),"Failed to get connection",i);U(Iz,a,{json:i})},Sz=async(e)=>{let{values:t}=T(e,{...q,type:{type:"string"},metadata:{type:"string"},"display-name":{type:"string"},"project-id":{type:"string"}});if(!t.type){if(t.json)return v("--type is required.");return y("--type is required. Use 'sazabi data-sources types' to see available types.")}if(!t.metadata){if(t.json)return v("--metadata is required.");return y("--metadata is required. Pass a JSON object with the required fields.")}let r;try{r=JSON.parse(t.metadata)}catch{if(t.json)return v("--metadata must be valid JSON.");return y("--metadata must be valid JSON.")}let{client:n,json:o}=ht(t),i=I(await n.dataSources.connections.create({dataSourceType:t.type,metadata:r,displayName:t["display-name"],projectId:t["project-id"]}),"Failed to create connection",o);if(o){j(i);return}M("Connection created."),ne({"Connection ID":i.connectionId,"Public key":i.publicKey})},Tz=async(e)=>{let{values:t}=T(e,{...q,"connection-id":{type:"string"}});if(!t["connection-id"]){if(t.json)return v("--connection-id is required.");return y("--connection-id is required.")}let{client:r,json:n}=ht(t),{streams:o}=I(await r.dataSources.streams.list(t["connection-id"]),"Failed to list streams",n);J(kz,o,{json:n})},Pz=async(e)=>{let{values:t}=T(e,{...q,"connection-id":{type:"string"},"display-name":{type:"string"},config:{type:"string"}});if(!t["connection-id"]){if(t.json)return v("--connection-id is required.");return y("--connection-id is required.")}if(!t["display-name"]){if(t.json)return v("--display-name is required.");return y("--display-name is required.")}let r={};if(t.config)try{r=JSON.parse(t.config)}catch{if(t.json)return v("--config must be valid JSON.");return y("--config must be valid JSON.")}let{client:n,json:o}=ht(t),i=I(await n.dataSources.streams.create({connectionId:t["connection-id"],displayName:t["display-name"],config:r}),"Failed to create stream",o);if(o){j(i);return}M("Stream created. Provisioning started."),ne(i.publicKey?{"Stream ID":i.streamId,"Public key":i.publicKey}:{"Stream ID":i.streamId})},Az=async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Stream ID is required.");return y("Stream ID is required.")}let{client:o,json:i}=ht(t),{stream:a}=I(await o.dataSources.streams.get(n),"Failed to get stream",i);U(wz,a,{json:i})},Dz=async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Stream ID is required.");return y("Stream ID is required.")}let{client:o,json:i}=ht(t),a=I(await o.dataSources.streams.delete(n),"Failed to remove stream",i);if(i){j(a);return}M("Stream removed.")},Lz=async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Connection ID is required.");return y("Connection ID is required.")}let{client:o,json:i}=ht(t),a=I(await o.dataSources.connections.disconnect(n),"Failed to disconnect connection",i);if(i){j(a);return}if(a.connectionTeardownError){Be(`Connection disconnected, but remote cleanup failed: ${a.connectionTeardownError}`);return}M("Connection disconnected.")},Nz=async(e)=>{let{values:t}=T(e,{...q,type:{type:"string"}});if(!t.type){if(t.json)return v("--type is required.");return y("--type is required. Use 'sazabi data-sources types' to see types with skills.")}let{client:r,json:n}=ht(t),{types:o}=I(await r.dataSources.listTypes(),"Failed to list data source types",n),i=o.find((a)=>a.id===t.type);if(!i){if(n)return v(`Unknown data source type: ${t.type}`);return y(`Unknown data source type: ${t.type}`)}if(!i.setupSkill){if(n)return v(`No setup skill available for ${t.type}.`);return y(`No setup skill available for ${t.type}. This data source does not have an agent-ready skill yet.`)}if(n){j({type:t.type,setupSkill:i.setupSkill});return}Y(i.setupSkill)},wS=W("data-sources","Manage data source connections and streams").withSubcommands({types:P("types","List supported data source types",$z).withOptions(V).withExamples(["sazabi data-sources types           # List all types","sazabi data-sources types --json    # Output as JSON"]).build(),connections:P("connections","Manage data source connections").withSubcommands({list:P("list","List data source connections",_z).withOptions({...V,type:{type:"string",description:"Filter by data source type"},"project-id":{type:"string",description:"Project ID"}}).withExamples(["sazabi data-sources connections list                  # List all connections","sazabi data-sources connections list --type vercel    # Filter by type"]).build(),get:P("get","Get one data source connection",Oz).withPositionalArgs("<connection-id>").withOptions(V).withExamples(["sazabi data-sources connections get <id>  # Get connection details"]).build(),create:P("create","Create a data source connection",Sz).withOptions({...V,type:{type:"string",description:"Data source type (required)"},metadata:{type:"string",description:"JSON metadata (required)"},"display-name":{type:"string",description:"Human-readable name"},"project-id":{type:"string",description:"Project ID"}}).withExamples([`sazabi data-sources connections create --type fly_io --metadata '{"apiToken":"..."}'  # Create Fly.io connection`]).build(),disconnect:P("disconnect","Disconnect a data source connection",Lz).withPositionalArgs("<connection-id>").withOptions(V).withExamples(["sazabi data-sources connections disconnect <id>  # Disconnect connection"]).build()}).withExamples(["sazabi data-sources connections list                  # List all connections","sazabi data-sources connections list --type vercel    # Filter by type","sazabi data-sources connections disconnect <id>       # Disconnect a connection"]).build(),streams:P("streams","Manage data source streams").withSubcommands({list:P("list","List streams for a connection",Tz).withOptions({...V,"connection-id":{type:"string",description:"Connection ID (required)"}}).withExamples(["sazabi data-sources streams list --connection-id <id>  # List streams"]).build(),get:P("get","Get one stream (check provisioning status)",Az).withPositionalArgs("<stream-id>").withOptions(V).withExamples(["sazabi data-sources streams get <id>  # Check stream status"]).build(),create:P("create","Create a stream for a connection",Pz).withOptions({...V,"connection-id":{type:"string",description:"Connection ID (required)"},"display-name":{type:"string",description:"Resource name (required)"},config:{type:"string",description:"JSON stream config"}}).withExamples(['sazabi data-sources streams create --connection-id <id> --display-name "my-app"  # Create stream']).build(),remove:P("remove","Remove a stream from a connection",Dz).withPositionalArgs("<stream-id>").withOptions(V).withExamples(["sazabi data-sources streams remove <id>  # Remove a stream"]).build()}).withExamples(["sazabi data-sources streams list --connection-id <id>  # List streams","sazabi data-sources streams remove <id>                # Remove a stream"]).build(),skill:P("skill","Show setup skill for a data source type",Nz).withOptions({...V,type:{type:"string",description:"Data source type (required)"}}).withExamples(["sazabi data-sources skill --type gcp      # Show GCP setup skill","sazabi data-sources skill --type fly_io    # Show Fly.io setup skill"]).build()}).withExamples(["sazabi data-sources types                                                        # List available types","sazabi data-sources connections create --type fly_io --metadata '{...}'           # Create connection","sazabi data-sources streams list --connection-id <id>                             # List streams","sazabi data-sources skill --type gcp                                             # Show agent setup skill"]).build();G();Xa();import{readFile as Cz}from"node:fs/promises";oe();X();var $S={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},severity:{label:"Severity",type:{kind:"severity"}},createdAt:{label:"Created",type:{kind:"date"}},resolvedAt:{label:"Resolved",type:{kind:"nullable-date"}},mutedAt:{label:"Muted",type:{kind:"nullable-date"}},whatHappened:{label:"What Happened",type:{kind:"nullable-string"}},whyItHappened:{label:"Why It Happened",type:{kind:"nullable-string"}},howToFix:{label:"How To Fix",type:{kind:"nullable-string"}}},xz={schema:$S,columns:["id","name","status","severity","createdAt"],header:"Issues",emptyMessage:"No issues found."},$n={layout:"sections",schema:$S,primary:{title:"Issue",fields:["id","name","status","severity","createdAt","resolvedAt","mutedAt"]},secondary:[{title:"What Happened",field:"whatHappened"},{title:"Why It Happened",field:"whyItHappened"},{title:"How To Fix",field:"howToFix"}]},zz=vn.partial(),jz={whatHappened:"What happened cannot be empty",whyItHappened:"Why it happened cannot be empty",howToFix:"How to fix it cannot be empty"},Ez=async(e)=>{let t=await Gz(e);if(!t.ok){if(e.json)return v(t.message);return y(t.message)}let r=L({tokenFlag:e.token,jsonMode:e.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),o=I(await n.issues.create(t.input),"Failed to create issue",e.json);U($n,o.issue,{json:e.json})},Uz=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.issues.list({status:e.status,severity:e.severity,statusComponentId:e.statusComponentId,limit:e.limit,cursor:e.cursor}),"Failed to list issues",e.json);J(xz,n.issues,{json:e.json,nextCursor:n.nextCursor})},Rz=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.issues.get(e),"Failed to get issue",t.json);U($n,o.issue,{json:t.json})},Fz=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.issues.resolve(e),"Failed to resolve issue",t.json);U($n,o.issue,{json:t.json})},Kz=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.issues.ignore(e),"Failed to ignore issue",t.json);U($n,o.issue,{json:t.json})},Bz=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.issues.unignore(e),"Failed to unignore issue",t.json);U($n,o.issue,{json:t.json})},Gz=async(e)=>{let t=e.fromJson?await Hz(e.fromJson):{ok:!0,input:{}};if(!t.ok)return t;let r={...t.input,...e.name!==void 0?{name:e.name}:{},...e.whatHappened!==void 0?{whatHappened:e.whatHappened}:{},...e.whyItHappened!==void 0?{whyItHappened:e.whyItHappened}:{},...e.howToFix!==void 0?{howToFix:e.howToFix}:{},...e.severity!==void 0?{severity:e.severity}:{},...e.statusComponentId!==void 0?{statusComponentId:e.statusComponentId}:{}},n=vn.safeParse(r);if(!n.success)return{ok:!1,message:_S(n.error)};return{ok:!0,input:n.data}},Hz=async(e)=>{let t;try{t=e==="-"?await Mz():await Cz(e,"utf8")}catch(o){return{ok:!1,message:`Failed to read issue input: ${o instanceof Error?o.message:String(o)}`}}let r;try{r=JSON.parse(t)}catch(o){return{ok:!1,message:`Failed to parse issue input JSON: ${o instanceof Error?o.message:String(o)}`}}let n=zz.safeParse(r);if(!n.success)return{ok:!1,message:_S(n.error)};return{ok:!0,input:n.data}},Mz=async()=>{let e=[];process.stdin.setEncoding("utf8");for await(let t of process.stdin)e.push(String(t));return e.join("")},_S=(e)=>{let t=e.issues[0];if(!t)return"Invalid issue input.";let r=t.path[0];if(r&&t.code==="invalid_type")return jz[r]??t.message;return t.message},OS=W("issues","Manage issues").withSubcommands({create:P("create","Create an issue",async(e)=>{let{values:t}=T(e,{...q,name:{type:"string"},"what-happened":{type:"string"},"why-it-happened":{type:"string"},"how-to-fix":{type:"string"},severity:{type:"string"},"status-component":{type:"string"},"from-json":{type:"string"}});await Ez({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],name:t.name,whatHappened:t["what-happened"],whyItHappened:t["why-it-happened"],howToFix:t["how-to-fix"],severity:t.severity,statusComponentId:t["status-component"],fromJson:t["from-json"]})}).withOptions({...V,name:{type:"string",description:"Stable issue name for indexing and mute matching"},"what-happened":{type:"string",description:"Concise summary of what happened"},"why-it-happened":{type:"string",description:"Root cause or best current hypothesis"},"how-to-fix":{type:"string",description:"Remediation guidance describing the next steps"},severity:{type:"string",description:"Issue severity: low, medium, high, or critical (default: medium)"},"status-component":{type:"string",description:"Status component ID to link to this issue"},"from-json":{type:"string",description:"Read issue fields from a JSON file, or '-' for stdin"}}).withExamples(['sazabi issues create --what-happened "Checkout is returning 500s" --why-it-happened "The payments API is timing out" --how-to-fix "Rollback the payments deploy"  # Create an issue from flags',"sazabi issues create --from-json issue.json  # Create an issue from a JSON file","cat issue.json | sazabi issues create --from-json - --json  # Create an issue from stdin"]).build(),list:P("list","List issues in the active project",async(e)=>{let{values:t}=T(e,{...q,status:{type:"string"},severity:{type:"string"},"status-component":{type:"string"},limit:{type:"string"},cursor:{type:"string"}}),r=["open","resolved","ignored"];if(t.status&&!r.includes(t.status)){let i=`Invalid --status "${t.status}". Must be one of: ${r.join(", ")}.`;if(t.json)return v(i);return y(i)}let n=["low","medium","high","critical"];if(t.severity&&!n.includes(t.severity)){let i=`Invalid --severity "${t.severity}". Must be one of: ${n.join(", ")}.`;if(t.json)return v(i);return y(i)}let o=t.limit?Number(t.limit):void 0;if(o!==void 0&&(Number.isNaN(o)||o<1||o>100)){if(t.json)return v("Invalid --limit. Must be an integer between 1 and 100.");return y("Invalid --limit. Must be an integer between 1 and 100.")}await Uz({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],status:t.status,severity:t.severity,statusComponentId:t["status-component"],limit:o,cursor:t.cursor})}).withOptions({...V,status:{type:"string",description:"Filter by status: open, resolved, or ignored"},severity:{type:"string",description:"Filter by severity: low, medium, high, or critical"},"status-component":{type:"string",description:"Filter by status component ID"},limit:{type:"string",description:"Maximum number of issues to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples(["sazabi issues list                                        # List all issues","sazabi issues list --status open                          # List open issues only","sazabi issues list --status-component <component-id>      # List issues for a component"]).build(),get:P("get","Get one issue by ID",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Issue ID is required.");return y("Issue ID is required.")}await Rz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(V).withExamples(["sazabi issues get <issue-id>  # Get one issue"]).build(),resolve:P("resolve","Resolve an open issue",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Issue ID is required.");return y("Issue ID is required.")}await Fz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(V).withExamples(["sazabi issues resolve <issue-id>  # Resolve an issue"]).build(),ignore:P("ignore","Ignore an issue",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Issue ID is required.");return y("Issue ID is required.")}await Kz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(V).withExamples(["sazabi issues ignore <issue-id>  # Ignore an issue"]).build(),unignore:P("unignore","Unmute an issue",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Issue ID is required.");return y("Issue ID is required.")}await Bz(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<issue-id>").withOptions(V).withExamples(["sazabi issues unignore <issue-id>  # Unmute an issue"]).build()}).withExamples(["sazabi issues create --from-json issue.json # Create an issue","sazabi issues list                       # List all issues","sazabi issues get <issue-id>             # Get one issue","sazabi issues resolve <issue-id>         # Resolve an issue","sazabi issues ignore <issue-id>          # Ignore an issue","sazabi issues unignore <issue-id>        # Unmute an issue"]).build();G();oe();X();var Jz=async(e,t)=>{let r=L({tokenFlag:t.token,projectIdFlag:e==="public"?t.projectId:void 0,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:e==="public"?r.projectId:void 0,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json});if(e==="public"){let i=I(await n.publicKeys.list({projectId:r.projectId,limit:t.limit,cursor:t.cursor}),"Failed to list public keys",t.json);J(SS(e),i.publicKeys.map((a)=>_t(e,a)),{json:t.json,nextCursor:i.nextCursor});return}let o=I(await n.secretKeys.list({limit:t.limit,cursor:t.cursor}),"Failed to list secret keys",t.json);J(SS(e),o.secretKeys.map((i)=>_t(e,i)),{json:t.json,nextCursor:o.nextCursor})},qz=async(e,t,r)=>{let n=L({tokenFlag:r.token,projectIdFlag:e==="public"?r.projectId:void 0,jsonMode:r.json}),o=N({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:r.apiBaseUrl,jsonMode:r.json});if(e==="public"){let a=I(await o.publicKeys.get(t,n.projectId),"Failed to get public key",r.json);U(no(e),_t(e,a.publicKey),{json:r.json});return}let i=I(await o.secretKeys.get(t),"Failed to get secret key",r.json);U(no(e),_t(e,i.secretKey),{json:r.json})},Vz=async(e,t,r)=>{let n=L({tokenFlag:r.token,projectIdFlag:e==="public"?r.projectId:void 0,jsonMode:r.json}),o=N({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:r.apiBaseUrl,jsonMode:r.json});if(e==="public"){let c={projectId:n.projectId,name:t,...r.expiresAt?{expiresAt:r.expiresAt}:{}},u=I(await o.publicKeys.create(c),"Failed to create public key",r.json);if(r.json){j(u);return}M(`Created public key ${u.publicKey.name}.`),ne({Value:u.publicKey.value}),U(no(e),{..._t(e,u.publicKey)});return}let i={name:t,...r.expiresAt?{expiresAt:r.expiresAt}:{}},a=I(await o.secretKeys.create(i),"Failed to create secret key",r.json);if(r.json){j(a);return}M(`Created secret key ${a.secretKey.name}.`),ne({Value:a.secretKey.value}),U(no(e),{..._t(e,a.secretKey)})},Wz=async(e,t,r)=>{if(r.name===void 0&&r.expiresAt===void 0&&!r.clearExpiresAt){if(r.json)return v("At least one update is required. Pass --name, --expires-at, or --clear-expires-at.");return y("At least one update is required. Pass --name, --expires-at, or --clear-expires-at.")}if(r.expiresAt&&r.clearExpiresAt){if(r.json)return v("Use either --expires-at or --clear-expires-at, not both.");return y("Use either --expires-at or --clear-expires-at, not both.")}let n=L({tokenFlag:r.token,projectIdFlag:e==="public"?r.projectId:void 0,jsonMode:r.json}),o=N({token:n.token,organizationId:n.organizationId,projectId:e==="public"?n.projectId:void 0,apiBaseUrlFlag:r.apiBaseUrl,jsonMode:r.json}),i=r.clearExpiresAt?null:r.expiresAt!==void 0?r.expiresAt:void 0;if(e==="public"){let u={projectId:n.projectId,keyId:t,...r.name!==void 0?{name:r.name}:{},...i!==void 0?{expiresAt:i}:{}},s=I(await o.publicKeys.update(u),"Failed to update public key",r.json);U(no(e),_t(e,s.publicKey),{json:r.json});return}let a={keyId:t,...r.name!==void 0?{name:r.name}:{},...i!==void 0?{expiresAt:i}:{}},c=I(await o.secretKeys.update(a),"Failed to update secret key",r.json);U(no(e),_t(e,c.secretKey),{json:r.json})},Yz=async(e,t)=>{let r=L({tokenFlag:t.token,projectIdFlag:t.projectId,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.publicKeys.deactivate({projectId:r.projectId,keyId:e}),"Failed to deactivate public key",t.json);if(!t.json)M(`Deactivated public key ${e}.`);U(no("public"),_t("public",o.publicKey),{json:t.json})},Xz=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json});if(I(await n.secretKeys.delete({keyId:e}),"Failed to delete secret key",t.json),t.json){j({deleted:!0,keyId:e});return}M(`Deleted secret key ${e}.`)},TS=(e)=>{let t=Zz(e),r=qp(e),n=`${r} Keys`,o=e==="secret",i=o?"the organization":"the active project",a={token:{type:"string"},"project-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},s=o?{token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}:{token:{type:"string",description:"Override token"},"project-id":{type:"string",description:"Override project selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}};return W(t,`Manage ${e} API keys`).withSubcommands({list:P("list",`List ${e} keys in ${i}`,async(d)=>{let{values:h,positionals:b}=T(d,{...a,limit:{type:"string"},cursor:{type:"string"}},{allowPositionals:!0});if(b.length>0){let p=b.join(", ");if(h.json)return v(`Unexpected arguments: ${p}`);return y(`Unexpected arguments: ${p}`)}await Jz(e,{token:h.token,projectId:h["project-id"],limit:h.limit?Number(h.limit):void 0,cursor:h.cursor,json:h.json,apiBaseUrl:h["api-base-url"]})}).withOptions({...s,limit:{type:"string",description:"Maximum number of keys to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples([`sazabi ${t} list  # List ${e} keys in ${i}`]).build(),get:P("get",`Get one ${e} key by ID`,async(d)=>{let{values:h,positionals:b}=T(d,a,{allowPositionals:!0}),p=b[0];if(!p){let _=`${r} key ID is required.`;if(h.json)return v(_);return y(_)}await qz(e,p,{token:h.token,projectId:h["project-id"],json:h.json,apiBaseUrl:h["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(s).withExamples([`sazabi ${t} get <key-id>  # Get one ${e} key`]).build(),create:P("create",`Create one ${e} key in ${i}`,async(d)=>{let{values:h,positionals:b}=T(d,{...a,"expires-at":{type:"string"}},{allowPositionals:!0}),p=b.join(" ");if(!p){let _=`${r} key name is required.`;if(h.json)return v(_);return y(_)}await Vz(e,p,{token:h.token,projectId:h["project-id"],expiresAt:h["expires-at"],json:h.json,apiBaseUrl:h["api-base-url"]})}).withPositionalArgs("<name>").withOptions({...s,"expires-at":{type:"string",description:"Optional ISO timestamp when the key should expire"}}).withExamples([`sazabi ${t} create "CI agent"  # Create one ${e} key`]).build(),update:P("update",`Update one ${e} key in ${i}`,async(d)=>{let{values:h,positionals:b}=T(d,{...a,name:{type:"string"},"expires-at":{type:"string"},"clear-expires-at":{type:"boolean"}},{allowPositionals:!0}),p=b[0];if(!p){let _=`${r} key ID is required.`;if(h.json)return v(_);return y(_)}await Wz(e,p,{token:h.token,projectId:h["project-id"],name:h.name,expiresAt:h["expires-at"],clearExpiresAt:h["clear-expires-at"],json:h.json,apiBaseUrl:h["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions({...s,name:{type:"string",description:`New ${e} key name`},"expires-at":{type:"string",description:"New ISO timestamp when the key should expire"},"clear-expires-at":{type:"boolean",description:"Clear any configured expiration"}}).withExamples([`sazabi ${t} update <key-id> --name "Renamed key"  # Update one ${e} key`]).build(),...e==="public"?{deactivate:P("deactivate",`Deactivate one public key in ${i}`,async(d)=>{let{values:h,positionals:b}=T(d,a,{allowPositionals:!0}),p=b[0];if(!p){if(h.json)return v("Public key ID is required.");return y("Public key ID is required.")}await Yz(p,{token:h.token,projectId:h["project-id"],json:h.json,apiBaseUrl:h["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(s).withExamples([`sazabi ${t} deactivate <key-id>  # Deactivate one public key`]).build()}:{delete:P("delete",`Delete one secret key from ${i}`,async(d)=>{let{values:h,positionals:b}=T(d,a,{allowPositionals:!0}),p=b[0];if(!p){if(h.json)return v("Secret key ID is required.");return y("Secret key ID is required.")}await Xz(p,{token:h.token,json:h.json,apiBaseUrl:h["api-base-url"]})}).withPositionalArgs("<key-id>").withOptions(s).withExamples([`sazabi ${t} delete <key-id>  # Delete one secret key`]).build()}}).withExamples([`sazabi ${t} list  # List ${e} keys in ${i}`,`sazabi ${t} create "CI agent"  # Create one ${e} key`]).build()},PS={keyType:{label:"Type",type:{kind:"string"}},id:{label:"ID",type:{kind:"string"}},projectId:{label:"Project ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},status:{label:"Status",type:{kind:"string"}},expiresAt:{label:"Expires",type:{kind:"nullable-date"}},lastUsedAt:{label:"Last Used",type:{kind:"nullable-date"}},createdAt:{label:"Created",type:{kind:"date"}}},SS=(e)=>({schema:PS,columns:e==="public"?["id","name","status","expiresAt","lastUsedAt","createdAt"]:["id","name","expiresAt","lastUsedAt","createdAt"],header:`${qp(e)} Keys`,emptyMessage:`No ${e} keys found.`}),no=(e)=>({layout:"field-list",schema:PS,fields:e==="public"?["keyType","id","projectId","name","status","expiresAt","lastUsedAt","createdAt"]:["keyType","id","name","expiresAt","lastUsedAt","createdAt"]}),Zz=(e)=>{return e==="public"?"public-keys":"secret-keys"},qp=(e)=>{return e==="public"?"Public":"Secret"},_t=(e,t)=>{let r=e==="public"&&"deactivatedAt"in t&&t.deactivatedAt!==null;return{...t,keyType:`${qp(e)} key`,status:r?"Deactivated":"Active"}},AS=TS("public"),DS=TS("secret");G();G();var Se=(e,t,r,n,o)=>{let i=Number.parseInt(e,10);if(Number.isNaN(i)||i<t||i>r){let a=`${n} must be between ${t} and ${r}`;if(o)return v(a);return y(a)}return i},dt=(e,t,r,n)=>{if(!t.includes(e)){let o=t.map((a)=>`"${a}"`).join(" or "),i=`${r} must be ${o}`;if(n)return v(i);return y(i)}return e};G();Xa();kn();oe();import*as gt from"node:fs";import*as ic from"node:readline";var nc=(e)=>new Promise((t)=>setTimeout(t,e));var Qz=(e)=>{return`${e.getTime()*1e6}`},LS=(e,t)=>{let n=Qz(new Date),o=e.filter((i)=>i.trim().length>0).map((i)=>({timeUnixNano:n,observedTimeUnixNano:n,severityNumber:9,severityText:"INFO",body:{stringValue:i},attributes:[]}));return{resourceLogs:[{resource:{attributes:[{key:"service.name",value:{stringValue:"sazabi-cli"}},{key:"sazabi.public_key",value:{stringValue:t}}]},scopeLogs:[{scope:{name:"sazabi-cli-forward",version:"1.0.0"},logRecords:o}]}]}};X();Ve();var ej="15003",tj=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},oj=(e)=>{let t=tj(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},rj=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!oj(t.hostname))return;return t.protocol="http:",t.port=ej,t.pathname="",t.search="",t.hash="",t.toString()},nj=async(e,t)=>{if(!t)Y("Ensuring public key exists...");let r=await e.publicKeys.create({name:"sazabi-cli-forward"});if(!r.success){if(!t)Tt(`Failed to create public key: ${r.error}`);return null}if(!t)M(`Created new public key: ${r.value.publicKey.name}`);return r.value.publicKey.value},Vp=(e,t,r,n,o,i,a,c)=>{return async()=>{if(e.length===0)return;let u=LS(e,n),s=lj(u);if(e.length=0,s===0)return;if(!a)Y(`Forwarding ${s} logs...`);let d=await r.logs.forward({publicKey:n,logs:u,region:o,...i?{projectId:i}:{}});if(!d.success){if(uj(d)){I(d,"Failed to forward logs",a);return}if(t.totalFailed+=s,!a)Be(`Failed to forward logs: ${d.error}`);c?.({forwarded:0,failed:s});return}t.totalForwarded+=d.value.forwardedCount,t.totalFailed+=d.value.failedCount,c?.({forwarded:d.value.forwardedCount,failed:d.value.failedCount})}},ij=async(e,t,r,n,o,i,a,c)=>{let u=gt.createReadStream(e),s=ic.createInterface({input:u,crlfDelay:Number.POSITIVE_INFINITY}),d=[],h={totalForwarded:0,totalFailed:0},b=Vp(d,h,t,r,n,o,a,(p)=>c?.push(p));try{for await(let p of s)if(d.push(p),d.length>=i)await b()}catch(p){Tt(`Failed to read ${e}: ${p instanceof Error?p.message:String(p)}`);return}if(await b(),a);else if(R(),Bt(ae.muted("─".repeat(80))),M(`Forwarded ${h.totalForwarded} logs`),h.totalFailed>0)Be(`Failed to forward ${h.totalFailed} logs`)},aj=async(e,t,r,n,o,i,a)=>{let c=ic.createInterface({input:process.stdin,output:process.stdout,terminal:!1}),u=[],s={totalForwarded:0,totalFailed:0},d=Vp(u,s,e,t,r,n,i,(h)=>a?.push(h));try{for await(let h of c)if(u.push(h),u.length>=o)await d()}catch(h){Tt(`Failed to read from stdin: ${h instanceof Error?h.message:String(h)}`);return}if(await d(),i);else if(R(),Bt(ae.muted("─".repeat(80))),M(`Forwarded ${s.totalForwarded} logs`),s.totalFailed>0)Be(`Failed to forward ${s.totalFailed} logs`)},cj=async(e,t,r,n,o,i,a,c)=>{let u=[],s={totalForwarded:0,totalFailed:0},d=Vp(u,s,t,r,n,o,a,(re)=>c?.push(re)),h=null,b=null,p=async()=>{if(b)clearTimeout(b);if(h)h.close();if(await d(),a);else if(R(),Bt(ae.muted("─".repeat(80))),M(`Forwarded ${s.totalForwarded} logs`),s.totalFailed>0)Be(`Failed to forward ${s.totalFailed} logs`)};process.on("SIGINT",async()=>{R(),Y("Interrupted, flushing remaining logs..."),await p(),process.exit(0)});let _=null,S=null,H=!1,K=0,le=async()=>{if(H)return;H=!0;try{if((await gt.promises.stat(e)).size<K)K=0;_=gt.createReadStream(e,{encoding:"utf8",start:K}),S=ic.createInterface({input:_,crlfDelay:Number.POSITIVE_INFINITY});for await(let Te of S)if(u.push(Te),u.length>=i)await d();K=(await gt.promises.stat(e)).size}catch(re){Tt(`Failed to read ${e}: ${re instanceof Error?re.message:String(re)}`)}finally{H=!1}};await le(),h=gt.watch(e,async(re)=>{if(re==="change"){if(b)clearTimeout(b);b=setTimeout(async()=>{if(H)return;if(_)_.close();if(S)S.close();await nc(50),await le()},100)}})},NS=async(e)=>{let t=e.batchSize??100;if(t<=0){if(e.json)return v("Batch size must be a positive number");throw y("Batch size must be a positive number"),Error("Unreachable")}if(e.follow&&!e.file){if(e.json)return v("--follow flag requires --file to be specified");throw y("--follow flag requires --file to be specified"),Error("Unreachable")}let r=(()=>{let S=ie();if(!S.success)throw y(`Failed to read settings: ${S.error}`),Error("Unreachable");return S.value})(),n=I(Qe(r),"Failed to resolve profile"),o=e.json===!0,i=L({tokenFlag:e.token,jsonMode:o}),a=st({cliFlag:e.apiBaseUrl,globalUrl:n.apiBaseUrl,globalDomain:n.apiDomain,buildUrlFromDomain:(S)=>`https://api.${S}`,defaultUrl:"https://api.sazabi.com"});if(!o)ce("Forwarding logs...");let c=await tc({token:i.token,projectId:i.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:o});if(!o)Y(`Project: ${c.name}`);let u;if(e.region)u=sj(e.region,o);else u=c.region;if(!o)Y(`Region: ${u}`);if(!o)Y(`Batch size: ${t}`);let s=e.intakeBaseUrl??n.intakeBaseUrl??rj(a)??(n.intakeDomain?lS(n.intakeDomain,u):void 0)??`https://otlp.${u}.intake.sazabi.com`;try{let S=new URL(s);if(!o&&/\.intake\.sazabi\.(dev|com)$/.test(S.host)&&!S.host.startsWith("otlp."))Be("Intake base URL may not be the OTLP endpoint. For Sazabi, prefer https://otlp.{region}.intake.sazabi.dev or .com as appropriate.")}catch{}let d=It({token:i.token,projectId:i.projectId,baseUrl:a,intakeBaseUrl:s}),h=e.publicKey?.trim()||n.forwardPublicKey?.trim()||void 0;if(!h){let S=await nj(d,o);if(!S)throw y("Failed to get or create public key"),Error("Unreachable");h=S;let H=Fe(r,{forwardPublicKey:h});if(H.success){let K=ye(H.value);if(!K.success)Be(`Failed to store public key: ${K.error}`)}}if(!o)R(),Bt(ae.muted("─".repeat(80))),R();let b=!e.follow,p=[],_={forwarded:0,failed:0};if(e.follow&&e.file)await cj(e.file,d,h,u,i.projectId,t,o,b?p:void 0);else if(e.file)await ij(e.file,d,h,u,i.projectId,t,o,p);else await aj(d,h,u,i.projectId,t,o,p);for(let S of p)_.forwarded+=S.forwarded,_.failed+=S.failed;if(o){let S={forwardedCount:_.forwarded,failedCount:_.failed,batches:p,project:{id:c.id,name:c.name,region:u},intakeBaseUrl:s,batchSize:t,follow:Boolean(e.follow),file:e.file??void 0};console.log(JSON.stringify(S))}},lj=(e)=>{return e.resourceLogs?.reduce((t,r)=>t+(r.scopeLogs?.reduce((n,o)=>n+(o.logRecords?.length??0),0)??0),0)??0},uj=(e)=>{if(e.success)return!1;if(e.errorPayload)return!0;if(e.statusCode!==void 0&&e.statusCode<500)return!0;return e.error.startsWith("Authentication failed")||e.error.startsWith("Client error (")},sj=(e,t)=>{let r=Va.safeParse(e);if(r.success)return r.data;let n=`Invalid region: ${e}.`;if(t)return v(n);return y(n)};G();oe();X();import{readFile as hj}from"node:fs/promises";var dj={result:{label:"Result",type:{kind:"string"}},format:{label:"Format",type:{kind:"string"}},meta:{label:"Meta",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}}},gj={layout:"field-list",schema:dj,fields:["result","format","meta"]},CS=async(e)=>{if(!e.query&&!e.file){if(e.json)return v("Pass --query or --file");return y("Pass --query or --file")}if(e.query&&e.file){if(e.json)return v("Pass either --query or --file, not both");return y("Pass either --query or --file, not both")}let t;if(e.query!==void 0)t=e.query;else try{t=await hj(e.file,"utf8")}catch(i){let a=`Failed to read query file: ${i instanceof Error?i.message:String(i)}`;if(e.json)return v(a);return y(a)}if(t.trim().length===0){if(e.json)return v("Query cannot be empty");return y("Query cannot be empty")}let r=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),o=I(await n.logs.nativeQuery({query:t}),"Failed to run native log query",e.json);if(e.json){U(gj,o,{json:!0});return}Y(`Backend ${o.meta.backendId} returned ${o.result.length} characters in ${o.meta.took}ms${o.meta.truncated?" (truncated)":""}`),process.stdout.write(o.result.endsWith(`
`)?o.result:`${o.result}
`)};G();oe();X();G();var bj=/^(\d+)(s|m|h|d)$/u,pj=(e,t)=>{let r=bj.exec(e.trim());if(!r){if(t)return v("Duration must use s, m, h, or d units, for example 30m");return y("Duration must use s, m, h, or d units, for example 30m")}let n=Number(r[1]),o=r[2];return n*(o==="s"?1000:o==="m"?60000:o==="h"?3600000:86400000)},xS=(e,t,r)=>{let n=new Date(e);if(Number.isNaN(n.getTime())){let o=`${t} must be a valid ISO-8601 timestamp`;if(r)return v(o);return y(o)}return n.toISOString()},dr=(e)=>{if(e.last&&(e.from||e.to)){if(e.json)return v("Use either --last or --from/--to, not both");return y("Use either --last or --from/--to, not both")}if(e.last){let n=new Date,o=new Date(n.getTime()-pj(e.last,e.json));if(!Number.isFinite(o.getTime())||!Number.isFinite(n.getTime())){if(e.json)return v("--last is out of supported date range");return y("--last is out of supported date range")}return{startDate:o.toISOString(),endDate:n.toISOString()}}let t=e.from?xS(e.from,"--from",e.json):void 0,r=e.to?xS(e.to,"--to",e.json):void 0;if(t&&r&&new Date(t)>=new Date(r)){if(e.json)return v("--from must be before --to");return y("--from must be before --to")}return{startDate:t,endDate:r}};var mj={patterns:{label:"Patterns",type:{kind:"custom",render:(e)=>`${Array.isArray(e)?e.length:0} patterns`,serialize:(e)=>e}},meta:{label:"Meta",type:{kind:"custom",render:(e)=>JSON.stringify(e),serialize:(e)=>e}}},yj={layout:"field-list",schema:mj,fields:["patterns","meta"]},vj={severity:{label:"Severity",type:{kind:"custom",render:(e)=>typeof e==="string"&&e.length>0?bt(e):"(none)",serialize:(e)=>e}},occurrences:{label:"Occurrences",type:{kind:"number"},align:"right"},lastSeen:{label:"Last Seen",type:{kind:"nullable-date",emptyLabel:"(never)"}},pattern:{label:"Pattern",type:{kind:"truncated",maxLength:140}},representativeId:{label:"Representative",type:{kind:"nullable-string",emptyLabel:"(none)"}}},fj={schema:vj,columns:["severity","occurrences","lastSeen","pattern","representativeId"],header:{title:"Log patterns",variant:"search"},emptyMessage:"No matching log patterns."},Ij=(e)=>{let t=dr(e);return{...e.query?{query:e.query}:{},...e.severity?{severity:e.severity}:{},...t.startDate?{startDate:t.startDate}:{},...t.endDate?{endDate:t.endDate}:{},limit:e.limit??25}},zS=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),r=N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=I(await r.logs.patterns(Ij(e)),"Failed to query log patterns",e.json);if(e.json){U(yj,n,{json:!0});return}kj(n)},kj=(e)=>{if(e.patterns.length>0)Y(`Returned ${e.meta.count} pattern${e.meta.count===1?"":"s"} in ${e.meta.took}ms`);J(fj,e.patterns,{count:e.meta.count})};G();oe();X();var ac=500,wj=new Set(["eq","neq","in","contains","starts_with","gt","gte","lt","lte","between","exists"]),$j=(e)=>{if(e==="@timestamp")return"timestamp";return e},cc=(e,t)=>{for(let r of t){let n=e[r];if(n===void 0||n===null)continue;if(typeof n==="string")return n;if(typeof n==="number"||typeof n==="boolean")return String(n)}return""},_j=(e)=>{let t=cc(e,["@timestamp","timestamp","time","ts","date"]);if(!t)return _e("(no time)");let r=new Date(t);if(Number.isNaN(r.getTime()))return t;return r.toISOString()},Oj=(e)=>{return cc(e,["body","message","log","text","content","msg"])||_e("(no message)")},Sj=(e)=>{return cc(e,["severity","level","log_level","priority"])},Tj=(e)=>{return cc(e,["service","service_name","serviceName","source"])},Pj=(e,t)=>{let r={};if(!t.omitSearch)r.search={query:e,mode:t.mode??"all",...t.searchFields?.length?{fields:t.searchFields}:{}};if(t.cursor!==void 0||t.limit!==void 0||t.all)r.pagination={limit:t.limit??(t.all?100:50),...t.cursor!==void 0?{cursor:t.cursor}:{}};if(t["sort-field"])r.sort={field:$j(t["sort-field"]),direction:t["sort-direction"]??"desc"};if(t.select){let o=t.select.split(",").map((i)=>i.trim()).filter((i)=>i.length>0);if(o.length>0)r.select=o}let n=Nj(t);if(!n.ok)return{ok:!1,errors:n.errors};if(n.filters.length>0)r.filters=n.filters;return{ok:!0,input:r}};var Aj=(e)=>{if(e==="true")return!0;if(e==="false")return!1;let t=Number(e);if(e.trim()!==""&&Number.isFinite(t))return t;return e},Dj=(e)=>{let t=Number(e);if(e.trim()!==""&&Number.isFinite(t))return t;return e},Lj=(e)=>{let t=e.indexOf("=");if(t<=0)return{ok:!1,error:"Filter must use <field>.<op>=<value>"};let r=e.slice(0,t),n=e.slice(t+1),o=r.lastIndexOf(".");if(o<=0||o===r.length-1)return{ok:!1,error:"Filter must use <field>.<op>=<value>"};let i=r.slice(0,o),a=r.slice(o+1);if(!wj.has(a))return{ok:!1,error:`Unsupported filter operator: ${a}`};if(a==="in"){let c=n.split(",").map((u)=>Dj(u.trim())).filter((u)=>u!=="");if(c.length===0)return{ok:!1,error:"in filters must include at least one value"};return{ok:!0,filter:{field:i,op:a,value:c}}}if(a==="between"){let c=n.includes("..")?n.split(".."):n.split(",");if(c.length!==2)return{ok:!1,error:"between filters must use <from>..<to>"};let[u,s]=c.map((d)=>d.trim());if(!u||!s)return{ok:!1,error:"between filters must use <from>..<to>"};return{ok:!0,filter:{field:i,op:a,value:{from:u,to:s}}}}if(a==="exists"){if(n!=="true"&&n!=="false")return{ok:!1,error:"exists filters must use true or false"};return{ok:!0,filter:{field:i,op:a,value:n==="true"}}}return{ok:!0,filter:{field:i,op:a,value:Aj(n)}}},Nj=(e)=>{let t=[],r=[],n=dr({from:e.from,to:e.to,last:e.last,json:e.json});if(n.startDate&&n.endDate)t.push({field:"timestamp",op:"between",value:{from:n.startDate,to:n.endDate}});else if(n.startDate)t.push({field:"timestamp",op:"gte",value:n.startDate});else if(n.endDate)t.push({field:"timestamp",op:"lte",value:n.endDate});if(e.service)t.push({field:"service",op:"eq",value:e.service});if(e.severity)t.push({field:"severity",op:"eq",value:e.severity});if(e.env)t.push({field:"environment",op:"eq",value:e.env});if(e.traceId)t.push({field:"trace_id",op:"eq",value:e.traceId});for(let o of e.filters??[]){let i=Lj(o);if(i.ok)t.push(i.filter);else r.push(`${o}: ${i.error}`)}if(r.length>0)return{ok:!1,errors:r};return{ok:!0,filters:t}},jS=async(e,t)=>{let r=L({tokenFlag:t.token,projectIdFlag:t.project,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t["api-base-url"],jsonMode:t.json}),o=Pj(e,t);if(!o.ok){if(t.json)return v({success:!1,error:"Invalid log query filters",errors:o.errors});return y(`Invalid log query filters: ${o.errors.join("; ")}`)}let i=o.input,a=t.all?await Cj(n,i,t):I(await n.logs.query(i),"Failed to query logs",t.json);if(t.json){j(a);return}xj(a)},Cj=async(e,t,r)=>{let n=[],o=t.pagination?.cursor,i=0;do{let a={...t,pagination:{limit:t.pagination?.limit??r.limit??100,...o?{cursor:o}:{}}},c=I(await e.logs.query(a),"Failed to query logs",r.json);n.push(...c.data),i+=c.meta.took,o=c.nextCursor}while(o);return{data:n,nextCursor:null,meta:{count:n.length,took:i}}},xj=(e)=>{let{data:t,nextCursor:r,meta:n}=e;if(t.length===0){Rt("No matching log rows.");return}Y(`Returned ${n.count} row${n.count===1?"":"s"} in ${n.took}ms`);let o=t.map((i)=>{let a=i,c=Sj(a);return{time:_j(a),severity:c?bt(c,c):ae.muted(_e("(sev)")),service:Tj(a)||_e("(service)"),message:We(Oj(a),200)}});ot(o,[{header:"Time (UTC)",key:"time"},{header:"Severity",key:"severity"},{header:"Service",key:"service"},{header:"Message",key:"message"}],{header:{title:"Log query results",variant:"search",count:n.count}}),pt({type:"cursor",nextCursor:r})};G();oe();X();var zj={backend:{label:"Backend",type:{kind:"custom",render:(e)=>{let t=e;return`${t.name} (${t.id})`},serialize:(e)=>e}},features:{label:"Features",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},commands:{label:"Commands",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},queryableFields:{label:"Queryable",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},searchableFields:{label:"Searchable",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},observedServiceNames:{label:"Observed Services",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},observedAttributeKeys:{label:"Observed Attributes",type:{kind:"custom",render:(e)=>Array.isArray(e)?e.join(", "):"(none)",serialize:(e)=>e}},schemaContext:{label:"Schema Context",type:{kind:"custom",render:(e)=>e?JSON.stringify(e):"(none)",serialize:(e)=>e}}},jj={layout:"field-list",schema:zj,fields:["backend","features","commands","queryableFields","searchableFields","observedServiceNames","observedAttributeKeys","schemaContext"]},ES=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),r=N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=I(await r.logs.schema({}),"Failed to fetch log schema",e.json);if(e.json){U(jj,n,{json:!0});return}Ej(n)},Ej=(e)=>{if(ce("Log backend"),ne({Backend:`${e.backend.name} (${e.backend.id})`,Kind:e.backend.kind,Commands:e.commands.join(", "),Features:e.features.join(", ")||"(none)"}),ce("Normalized fields"),ne({Queryable:e.queryableFields.join(", ")||"(none)",Searchable:e.searchableFields.join(", ")||"(none)"}),e.observedServiceNames.length>0)ot(e.observedServiceNames.map((t)=>({service:We(t,80)})),[{header:"Observed Services",key:"service"}]);if(e.observedAttributeKeys.length>0)ot(e.observedAttributeKeys.map((t)=>({attribute:We(t,80)})),[{header:"Observed Attributes",key:"attribute"}])};G();Np();kn();oe();X();Ve();var US=["ERROR","WARN","INFO","DEBUG","TRACE"],Uj="15006",Rj=(e)=>{return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1):e},Fj=(e)=>{let t=Rj(e);return t==="localhost"||t==="127.0.0.1"||t==="::1"},Kj=(e)=>{let t=new Date(e.timestamp).toISOString().split("T")[1],r=bt(e.severity,e.severity.padEnd(7)),n=ae.cyan(e.service.padEnd(20)),o=e.body.length>120?`${e.body.substring(0,117)}...`:e.body;return`[${t}] ${r} ${n} ${o}`},FS=async(e)=>{let t=I(wt(),"Failed to read settings"),r=e.json??!1,n=Hj(t,e.apiBaseUrl),o=Gj(e.severities,r),i=Wp(e.services),a=Wp(e.environments),c=L({tokenFlag:e.token,jsonMode:r}),u=await qj({apiBaseUrlFlag:e.apiBaseUrl,jsonMode:r,projectId:c.projectId,regionFlag:e.region,token:c.token}),s=It({token:c.token,projectId:c.projectId,baseUrl:n,tailBaseUrl:Jj(t,e.tailBaseUrl,u,n)}),d={severities:o,services:i,environments:a,searchTerm:e.search,traceId:e.traceId},h=new AbortController,b,p=0,_,S,H=()=>{b="interrupted",h.abort()};if(!r)Bj({environments:a,region:u,search:e.search,services:i,severities:o,traceId:e.traceId});let K=I(await s.logs.tail({...c.projectId?{projectId:c.projectId}:{},...u?{region:u}:{},filters:d,signal:h.signal}),"Failed to tail logs",r);if(!r)M("Connected! Waiting for logs..."),R();if(process.on("SIGINT",H),e.duration&&e.duration>0)S=setTimeout(()=>{b="duration",h.abort()},e.duration*1000);try{for await(let le of K){if(p+=1,r){j(le);continue}Bt(Kj(le))}}catch(le){_=le instanceof Error?le:Error(String(le))}finally{if(process.removeListener("SIGINT",H),S)clearTimeout(S)}if(_){if(r)return v(_.message);R(),mr(),Tt(_.message);return}if(r)return;if(R(),b==="duration")Y("Duration reached, closing connection...");if(b==="interrupted")Y("Interrupted, closing connection...");mr(),Y(`Connection closed. Received ${p} logs.`)},Bj=(e)=>{if(ce("Tailing logs..."),e.severities?.length)Y(`Severities: ${e.severities.join(", ")}`);if(e.services?.length)Y(`Services: ${e.services.join(", ")}`);if(e.environments?.length)Y(`Environments: ${e.environments.join(", ")}`);if(e.search)Y(`Search: ${e.search}`);if(e.traceId)Y(`Trace ID: ${e.traceId}`);if(e.region)Y(`Region: ${e.region}`);mr(),R()},Wp=(e)=>{if(!e)return;let t=e.split(",").map((r)=>r.trim()).filter((r)=>r.length>0);return t.length>0?t:void 0},Gj=(e,t)=>{let r=Wp(e)?.map((i)=>i.toUpperCase());if(!r)return;let n=r.find((i)=>!US.includes(i));if(!n)return r;let o=`Invalid severity: ${n}. Valid values: ${US.join(", ")}`;if(t)return v(o);return y(o)},Hj=(e,t)=>{return st({cliFlag:t,globalUrl:e.apiBaseUrl,globalDomain:e.apiDomain,buildUrlFromDomain:(r)=>`https://api.${r}`,defaultUrl:"https://api.sazabi.com"})},Mj=(e)=>{let t=(()=>{try{return new URL(e)}catch{return null}})();if(!t)return;if(!Fj(t.hostname))return;return t.protocol="ws:",t.port=Uj,t.pathname="/tail",t.search="",t.hash="",t.toString()},Jj=(e,t,r,n)=>{if(t)return t;if(e.tailBaseUrl)return e.tailBaseUrl;let o=Mj(n);if(o)return o;if(e.tailDomain&&r)return`wss://${r}.tail.${e.tailDomain}`;if(r)return`wss://${r}.tail.sazabi.com`;return},qj=async(e)=>{if(e.regionFlag)return RS(e.regionFlag,e.jsonMode);if(!e.projectId)return;let t=await tc({token:e.token,projectId:e.projectId,apiBaseUrlFlag:e.apiBaseUrlFlag,jsonMode:e.jsonMode});return RS(t.region,e.jsonMode)},RS=(e,t)=>{if(Za(e))return e;let r=`Log tail is not supported for project region ${e}.`;if(t)return v(r);return y(r)};G();oe();X();var Vj={total:{label:"Total",type:{kind:"number"}},startDate:{label:"Start",type:{kind:"date"}},endDate:{label:"End",type:{kind:"date"}},interval:{label:"Interval",type:{kind:"string"}},series:{label:"Series",type:{kind:"custom",render:(e)=>`${Array.isArray(e)?e.length:0} series`,serialize:(e)=>e}}},Wj={layout:"field-list",schema:Vj,fields:["total","startDate","endDate","interval","series"]},Yj={group:{label:"Group",type:{kind:"string"}},total:{label:"Total",type:{kind:"number"},align:"right"},points:{label:"Points",type:{kind:"custom",render:(e)=>Array.isArray(e)?String(e.length):"0",serialize:(e)=>e},align:"right"}},Xj={schema:Yj,columns:["group","total","points"],header:{title:"Log volume",variant:"results"},emptyMessage:"No log volume found."},Zj=(e)=>{if(e==="service")return"service_name";if(e==="severity")return"severity_text";return e},Qj=(e)=>{let t=new Date,r=dr(e),n=r.endDate??t.toISOString();return{startDate:r.startDate??new Date(new Date(n).getTime()-3600000).toISOString(),endDate:n,...e.interval?{interval:e.interval}:{},...e.groupBy?{groupBy:Zj(e.groupBy)}:{},filters:{...e.service?{service_name:e.service}:{},...e.severity?{severity_text:e.severity}:{},...e.env?{environment:e.env}:{}}}},KS=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.project,jsonMode:e.json}),r=N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e["api-base-url"],jsonMode:e.json}),n=I(await r.logs.volume(Qj(e)),"Failed to query log volume",e.json);if(e.json){U(Wj,n,{json:!0});return}eE(n)},eE=(e)=>{if(e.series.length>0)Y(`Total ${e.total} logs from ${e.startDate} to ${e.endDate} at ${e.interval}`);J(Xj,e.series,{count:e.series.length})};var BS=(e,t)=>{let r=[],n=`--${t}=`;for(let o=0;o<e.length;o+=1){let i=e[o];if(i===void 0)continue;if(i===`--${t}`){let a=e[o+1];if(a!==void 0&&!a.startsWith("-"))r.push(a),o+=1;continue}if(i.startsWith(n))r.push(i.slice(n.length))}return r},GS=W("logs","Stream, search, and forward logs").withSubcommands({schema:P("schema","Describe the active log backend and query fields",async(e)=>{let{values:t}=T(e,{...q,project:{type:"string"}}),r={token:t.token,project:t.project,json:t.json,"api-base-url":t["api-base-url"]};await ES(r)}).withOptions({...V,project:{type:"string",description:"Override project ID (default: active project)"}}).withExamples(["sazabi logs schema  # Show backend, commands, and fields","sazabi logs schema --json  # Machine-readable schema context"]).build(),tail:P("tail","Stream logs from current project in real-time",async(e)=>{let{values:t}=T(e,{...q,severities:{type:"string"},services:{type:"string"},environments:{type:"string"},search:{type:"string"},"trace-id":{type:"string"},duration:{type:"string"},"tail-base-url":{type:"string"},region:{type:"string"}}),r={};if(t.token)r.token=t.token;if(t.severities)r.severities=t.severities;if(t.services)r.services=t.services;if(t.environments)r.environments=t.environments;if(t.search)r.search=t.search;if(t["trace-id"])r.traceId=t["trace-id"];if(t.duration)r.duration=Se(t.duration,1,Number.MAX_SAFE_INTEGER,"Duration",t.json);if(t.json)r.json=!0;if(t["tail-base-url"])r.tailBaseUrl=t["tail-base-url"];if(t.region)r.region=t.region;if(t["api-base-url"])r.apiBaseUrl=t["api-base-url"];await FS(r)}).withOptions({...V,severities:{type:"string",description:"Filter by comma-separated severities (e.g., ERROR,WARN,INFO)"},services:{type:"string",description:"Filter by comma-separated service names"},environments:{type:"string",description:"Filter by comma-separated environments"},search:{type:"string",description:"Filter by search term (case-insensitive)"},"trace-id":{type:"string",description:"Filter by trace ID"},duration:{type:"string",description:"Duration to tail in seconds (default: unlimited)"},"tail-base-url":{type:"string",description:"Override tail WebSocket base URL"},region:{type:"string",description:"Override project region"}}).withExamples(["sazabi logs tail  # Tail all logs in real-time","sazabi logs tail --severities ERROR,WARN  # Tail only errors and warnings","sazabi logs tail --services api,worker  # Tail specific services","sazabi logs tail --environments production,staging  # Tail specific environments",'sazabi logs tail --search "database"  # Tail logs matching search term',"sazabi logs tail --json  # Output as JSON"]).build(),query:P("query","Search stored logs in the current project (POST /logs/query)",async(e)=>{let{values:t,positionals:r}=T(e,{...q,project:{type:"string"},limit:{type:"string"},cursor:{type:"string"},mode:{type:"string"},"sort-field":{type:"string"},"sort-direction":{type:"string"},select:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},service:{type:"string"},severity:{type:"string"},env:{type:"string"},"trace-id":{type:"string"},filter:{type:"string"},"search-field":{type:"string"},"query-all":{type:"boolean"},all:{type:"boolean"}},{allowPositionals:!0}),n=r.join(" ").trim(),o=BS(e,"filter"),i=BS(e,"search-field"),a=Boolean(t.from||t.to||t.last||t.service||t.severity||t.env||t["trace-id"])||o.length>0;if(!n&&!t["query-all"]&&!a){if(t.json)return v("Search text, a structured filter, or --query-all is required. Usage: sazabi logs query <search-text> [options]");return y("Search text, a structured filter, or --query-all is required. Usage: sazabi logs query <search-text> [options]")}if(n.length>ac){if(t.json)return v(`Search text must be at most ${ac} characters`);return y(`Search text must be at most ${ac} characters`)}if(n&&t["query-all"]){if(t.json)return v("Pass either a search phrase or --query-all, not both");return y("Pass either a search phrase or --query-all, not both")}if(t.mode&&!n){if(t.json)return v("--mode requires search text (search is omitted)");return y("--mode requires search text (search is omitted)")}let c={token:t.token,project:t.project,json:t.json,"api-base-url":t["api-base-url"],omitSearch:t["query-all"]===!0||!n,from:t.from,to:t.to,last:t.last,service:t.service,severity:t.severity,env:t.env,traceId:t["trace-id"],filters:o,searchFields:i,all:t.all};if(t.limit)c.limit=Se(t.limit,1,1000,"Limit",t.json);if(t.cursor)c.cursor=t.cursor;if(t.mode)c.mode=dt(t.mode,["any","all","phrase"],"Mode",t.json);if(t["sort-field"])c["sort-field"]=t["sort-field"];if(t["sort-direction"]&&!t["sort-field"]){if(t.json)return v("--sort-direction requires --sort-field");return y("--sort-direction requires --sort-field")}if(t["sort-direction"])c["sort-direction"]=dt(t["sort-direction"],["asc","desc"],"Sort direction",t.json);if(t.select)c.select=t.select;await jS(n,c)}).withPositionalArgs("[search-text]").withOptions({...V,project:{type:"string",description:"Override project ID (default: active project)"},limit:{type:"string",description:"Max rows to return (1-1000, default: 50)"},cursor:{type:"string",description:"Pagination cursor from a previous response"},mode:{type:"string",description:"Token match mode: any, all, or phrase (default: all)"},"sort-field":{type:"string",description:"Field to sort by (e.g. @timestamp)"},"sort-direction":{type:"string",description:"Sort direction: asc or desc (default: desc)"},select:{type:"string",description:"Comma-separated fields to return"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},service:{type:"string",description:"Filter by service name"},severity:{type:"string",description:"Filter by severity, for example ERROR"},env:{type:"string",description:"Filter by deployment environment"},"trace-id":{type:"string",description:"Filter by trace ID"},filter:{type:"string",description:"Structured filter as <field>.<op>=<value>; repeatable"},"search-field":{type:"string",description:"Restrict full-text search to a field; repeatable"},"query-all":{type:"boolean",description:"Omit full-text search and return the API default slice (sort/pagination only; server may require other filters)"},all:{type:"boolean",description:"Fetch all pages until the server returns no cursor"}}).withExamples(['sazabi logs query "connection refused" --last 1h --service api --severity ERROR  # Search recent API errors',"sazabi logs query --trace-id abc123 --select timestamp,service,severity,body  # Find logs for one trace","sazabi logs query --filter http_status_code.gte=500 --limit 100 --json  # Machine-readable structured filter","sazabi logs query error --mode any --limit 100  # Match any token with a larger page","sazabi logs query --query-all --limit 20 --sort-field @timestamp  # Recent rows without full-text search","sazabi logs query slow --json  # Machine-readable output"]).build(),patterns:P("patterns","Search normalized log patterns for discovery",async(e)=>{let{values:t,positionals:r}=T(e,{...q,project:{type:"string"},severity:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},limit:{type:"string"}},{allowPositionals:!0}),n={token:t.token,project:t.project,query:r.join(" ").trim()||void 0,severity:t.severity,from:t.from,to:t.to,last:t.last,json:t.json,"api-base-url":t["api-base-url"]};if(t.limit)n.limit=Se(t.limit,1,100,"Limit",t.json);await zS(n)}).withPositionalArgs("[pattern-text]").withOptions({...V,project:{type:"string",description:"Override project ID (default: active project)"},severity:{type:"string",description:"Filter by severity, for example ERROR"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},limit:{type:"string",description:"Max patterns to return (1-100, default: 25)"}}).withExamples(['sazabi logs patterns "connection refused" --severity ERROR --limit 25  # Find recurring error patterns',"sazabi logs patterns --last 24h --json  # Export recent patterns"]).build(),volume:P("volume","Summarize log volume by time and optional dimension",async(e)=>{let{values:t}=T(e,{...q,project:{type:"string"},from:{type:"string"},to:{type:"string"},last:{type:"string"},interval:{type:"string"},"group-by":{type:"string"},service:{type:"string"},severity:{type:"string"},env:{type:"string"}}),r={token:t.token,project:t.project,from:t.from,to:t.to,last:t.last,service:t.service,severity:t.severity,env:t.env,json:t.json,"api-base-url":t["api-base-url"]};if(t.interval)r.interval=dt(t.interval,["1m","5m","15m","1h"],"Interval",t.json);if(t["group-by"])r.groupBy=dt(t["group-by"],["service","severity","environment"],"Group by",t.json);await KS(r)}).withOptions({...V,project:{type:"string",description:"Override project ID (default: active project)"},from:{type:"string",description:"Start time as ISO-8601 timestamp"},to:{type:"string",description:"End time as ISO-8601 timestamp"},last:{type:"string",description:"Relative time window, for example 30m, 6h, or 7d"},interval:{type:"string",description:"Bucket interval: 1m, 5m, 15m, or 1h"},"group-by":{type:"string",description:"Group by service, severity, or environment"},service:{type:"string",description:"Filter by service name"},severity:{type:"string",description:"Filter by severity, for example ERROR"},env:{type:"string",description:"Filter by deployment environment"}}).withExamples(["sazabi logs volume --last 6h --group-by service  # Compare service log volume","sazabi logs volume --last 24h --severity ERROR --interval 15m --json  # Export error volume"]).build(),"native-query":P("native-query","Run a backend-native read-only log query",async(e)=>{let{values:t}=T(e,{...q,project:{type:"string"},query:{type:"string"},file:{type:"string",short:"f"}}),r={token:t.token,project:t.project,query:t.query,file:t.file,json:t.json,"api-base-url":t["api-base-url"]};await CS(r)}).withOptions({...V,project:{type:"string",description:"Override project ID (default: active project)"},query:{type:"string",description:"Backend-native query text"},file:{type:"string",short:"f",description:"Read backend-native query text from a file"}}).withExamples(['sazabi logs native-query --query "SELECT service_name, count() FROM log_volume_per_minute GROUP BY service_name LIMIT 20"  # Run backend-native query text',"sazabi logs native-query --file investigation.sql --json  # Run a query from a file"]).build(),forward:P("forward","Forward plaintext logs to current project",async(e)=>{let{values:t}=T(e,{...q,file:{type:"string",short:"f"},follow:{type:"boolean"},"batch-size":{type:"string"},"intake-base-url":{type:"string"},"public-key":{type:"string"},region:{type:"string"}}),r={};if(t.token)r.token=t.token;if(t.file)r.file=t.file;if(t.follow)r.follow=t.follow;if(t["batch-size"])r.batchSize=Se(t["batch-size"],1,Number.MAX_SAFE_INTEGER,"Batch size",t.json);if(t["api-base-url"])r.apiBaseUrl=t["api-base-url"];if(t["intake-base-url"])r.intakeBaseUrl=t["intake-base-url"];if(t.region)r.region=t.region;if(t["public-key"])r.publicKey=t["public-key"];await NS({...r,json:t.json})}).withOptions({...V,json:{type:"boolean",description:"Output a final JSON summary"},file:{type:"string",short:"f",description:"Read from file instead of stdin"},follow:{type:"boolean",description:"Follow file for new lines (like tail -f)"},"batch-size":{type:"string",description:"Number of logs to batch before sending (default: 100)"},"intake-base-url":{type:"string",description:"Override intake base URL"},"public-key":{type:"string",description:"Use this public key value (skip creating/storing)"},region:{type:"string",description:"Override project region"}}).withExamples(['echo "Log message" | sazabi logs forward  # Forward from stdin',"sazabi logs forward --file app.log  # Forward from file","sazabi logs forward --file app.log --follow  # Forward file with tail -f behavior","sazabi logs forward --file app.log --batch-size 50  # Forward with custom batch size"]).build()}).withExamples(["sazabi logs tail  # Tail all logs in real-time","sazabi logs tail --severities ERROR,WARN  # Tail only errors and warnings",'sazabi logs query "timeout"  # Search stored logs',"sazabi logs forward --file app.log  # Forward from file"]).build();G();oe();X();var HS={membershipId:{label:"Membership ID",type:{kind:"string"}},userId:{label:"User ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"nullable-string"}},email:{label:"Email",type:{kind:"string"}},role:{label:"Role",type:{kind:"string"}}},tE={schema:HS,columns:["membershipId","userId","name","email","role"],header:"Members",emptyMessage:"No members found."},oE={layout:"field-list",schema:HS,fields:["membershipId","userId","name","email","role"]},rE=async(e)=>{let t=L({tokenFlag:e.token,organizationIdFlag:e.organizationId,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.members.list({organizationId:t.organizationId}),"Failed to list members",e.json);J(tE,n.members,{json:e.json})},nE=async(e,t)=>{let r=L({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.members.updateRole(e,t.role,r.organizationId),"Failed to update member role",t.json);U(oE,o.member,{json:t.json})},iE=async(e,t)=>{let r=L({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.members.remove(e,r.organizationId),"Failed to remove member",t.json);if(t.json){j(o);return}M(`Removed ${o.removedUserId} from the active organization.`)},MS=W("members","Manage organization members").withSubcommands({list:P("list","List members in the active organization",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}await rE({token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members list  # List members in the active organization"]).build(),"update-role":P("update-role","Update one member's organization role",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},"organization-id":{type:"string"},role:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("User ID is required.");return y("User ID is required.")}if(t.role!=="admin"&&t.role!=="member"){if(t.json)return v("Role must be either 'admin' or 'member'.");return y("Role must be either 'admin' or 'member'.")}await nE(n,{token:t.token,organizationId:t["organization-id"],role:t.role,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},role:{type:"string",description:"New role: admin or member"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members update-role user_123 --role admin  # Promote a member to admin"]).build(),remove:P("remove","Remove one member from the active organization",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("User ID is required.");return y("User ID is required.")}await iE(n,{token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi members remove user_123  # Remove a member from the active organization"]).build()}).withExamples(["sazabi members list  # List members in the active organization","sazabi members update-role user_123 --role admin  # Promote a member to admin","sazabi members remove user_123  # Remove a member from the active organization"]).build();G();oe();X();G();oe();X();X();var aE=2000,lc=async(e)=>{let t=e.pollIntervalMs??aE,r=Date.now(),n=!1,o={completed:!1,threadId:e.threadId,runId:e.runId,status:"processing",response:null};while(!0){let i=await e.client.runs.get(e.runId);if(!i.success){if(!lE(i))return Yp(e.printProgress,n),i}else if(o=i.value,i.value.completed)return Yp(e.printProgress,n),i;if(e.timeoutMs!==void 0&&Date.now()-r>=e.timeoutMs)return Yp(e.printProgress,n),ke(o);n=cE(e.printProgress,n),await nc(t)}},cE=(e,t)=>{if(!e)return t;if(!t)process.stdout.write(`
`);return process.stdout.write("."),!0},Yp=(e,t)=>{if(!e||!t)return;process.stdout.write(`
`)},lE=(e)=>{return e.statusCode===404};var uE={threadId:{label:"Thread ID",type:{kind:"id"}},messageId:{label:"Message ID",type:{kind:"nullable-string",emptyLabel:"(pending)"}},url:{label:"URL",type:{kind:"nullable-string"},get:(e)=>e.threadUrl??null},runId:{label:"Run ID",type:{kind:"id"}},status:{label:"Status",type:{kind:"string"}},pollWith:{label:"Poll with",type:{kind:"string"},get:(e)=>`sazabi runs get ${e.runId}`},response:{label:"Response",type:{kind:"nullable-string"},get:(e)=>e.response}},sE={layout:"sections",schema:uE,primary:{title:"Thread",fields:["threadId","messageId","url","runId","status","pollWith"]},secondary:[{title:"Response",field:"response"}]},hE=()=>{return process.env.SAZABI_AUTOMATION_ID??process.env.SAZABI_SCRIPT_PARAM_AUTOMATION_ID},qS=async(e,t={})=>{let r=Date.now(),n=L({tokenFlag:t.token,jsonMode:t.json}),o=N({token:n.token,projectId:n.projectId,apiBaseUrlFlag:t.apiBaseUrl}),i=await dE({message:e,threadId:t.threadId,projectId:n.projectId,json:t.json,client:o,wait:t.wait,timeoutMs:t.timeout,automationId:hE()});if(t.wait&&i.status==="processing"){let a=t.timeout===void 0?void 0:Math.max(0,t.timeout-(Date.now()-r)),c=I(await lc({client:o,runId:i.runId,threadId:i.threadId,timeoutMs:a,printProgress:!t.json}),"Failed to get run",t.json);i={...i,status:c.status,response:c.response,messageId:i.messageId??c.messageId}}U(sE,i,{json:t.json})},dE=async(e)=>{if(e.threadId){let r=I(await e.client.messages.append(e.threadId,e.message,e.wait??!1,JS(e.timeoutMs),e.automationId),"Failed to send message",e.json);return{threadId:e.threadId,runId:r.result.runId,messageId:r.result.messageId,status:r.result.status,response:r.result.response,threadUrl:e.projectId?$t(e.projectId,e.threadId,void 0,r.result.messageId):void 0}}let t=I(await e.client.threads.create({message:e.message,...e.projectId?{projectId:e.projectId}:{},wait:e.wait??!1,timeoutSeconds:JS(e.timeoutMs),...e.automationId!==void 0?{automationId:e.automationId}:{}}),"Failed to create thread",e.json);return{threadId:t.result.threadId,runId:t.result.runId,messageId:t.result.messageId,status:t.result.status,response:t.result.response,threadUrl:e.projectId?$t(e.projectId,t.result.threadId,void 0,t.result.messageId):void 0}},JS=(e)=>{if(e===void 0)return 20;return Math.max(1,Math.min(Math.ceil(e/1000),20))};var gE={id:{label:"ID",type:{kind:"string"}},role:{label:"Role",type:{kind:"role"}},content:{label:"Content",type:{kind:"custom",render:(e)=>{let r=e.find((n)=>n.type==="message"&&Boolean(n.message));return r?We(r.message):_e("(no text)")}}},createdAt:{label:"Created",type:{kind:"date"}}},bE={schema:gE,columns:["id","role","content","createdAt"],header:"Messages",emptyMessage:"No messages found."},pE={id:{label:"ID",type:{kind:"string"}},threadTitle:{label:"Thread",type:{kind:"nullable-string",emptyLabel:"(no title)"}},role:{label:"Role",type:{kind:"role"}},content:{label:"Content",type:{kind:"custom",render:(e)=>We(e)}},score:{label:"Score",align:"right",type:{kind:"custom",render:(e)=>e!=null?e.toFixed(2):"-"}}},mE={schema:pE,columns:["id","threadTitle","role","content","score"],header:{title:"Search Results",variant:"search"},emptyMessage:"No matching messages found."},yE=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{messages:o,nextCursor:i}=I(await n.messages.list(e,{limit:t.limit,cursor:t.cursor}),"Failed to list messages",t.json);J(bE,o,{json:t.json,nextCursor:i})},vE=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{messages:o,pagination:i}=I(await n.search.messages({query:e,limit:t.limit,page:t.page,threadId:t.threadId,role:t.role}),"Failed to search messages",t.json);if(t.json){j({messages:o,pagination:i});return}J(mE,o,{count:i.totalResults}),pt({type:"page",page:i.page,totalPages:i.totalPages})},VS=W("messages","Send, list, and search messages").withSubcommands({send:P("send","Send a message (creates new thread if --thread-id omitted)",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},"thread-id":{type:"string",short:"t"},wait:{type:"boolean"},timeout:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r.join(" ");if(!n){if(t.json)return v("Message is required. Usage: sazabi messages send <message> [--thread-id <id>]");return y("Message is required. Usage: sazabi messages send <message> [--thread-id <id>]")}let o=t.timeout?Se(t.timeout,1,3600,"Timeout",t.json)*1000:void 0,i={token:t.token,threadId:t["thread-id"],wait:t.wait,timeout:o,json:t.json,apiBaseUrl:t["api-base-url"]};await qS(n,i)}).withPositionalArgs("<message>").withOptions({token:{type:"string",description:"Override authentication token"},"thread-id":{type:"string",short:"t",description:"Thread ID to append to (creates new thread if omitted)"},wait:{type:"boolean",description:"Wait for assistant response and print it"},timeout:{type:"string",description:"Timeout in seconds to wait for response before returning processing state"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi messages send 'Hello'                         # Start a new thread","sazabi messages send 'Hello' --thread-id abc123      # Append to existing thread","sazabi messages send 'Hello' -t abc123 --wait        # Append and wait for reply","sazabi messages send 'Hello' --wait                  # New thread, wait for reply","sazabi messages send 'Hello' --wait --timeout 120    # Wait up to 2 minutes"]).build(),list:P("list","List messages in a thread",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},limit:{type:"string"},cursor:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi messages list <thread-id>");return y("Thread ID is required. Usage: sazabi messages list <thread-id>")}if(r.length>1){let i=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${i}`);return y(`Unexpected arguments: ${i}`)}let o={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)o.limit=Se(t.limit,1,100,"Limit",t.json);if(t.cursor)o.cursor=t.cursor;await yE(n,o)}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of messages to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi messages list <thread-id>  # List all messages in thread","sazabi messages list <thread-id> --limit 20  # List with custom limit","sazabi messages list <thread-id> --cursor xyz  # List next page"]).build(),search:P("search","Search messages in current project",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},limit:{type:"string"},page:{type:"string"},"thread-id":{type:"string"},role:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r.join(" ");if(!n){if(t.json)return v("Search query is required. Usage: sazabi messages search <query>");return y("Search query is required. Usage: sazabi messages search <query>")}let o={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)o.limit=Se(t.limit,1,100,"Limit",t.json);if(t.page)o.page=Se(t.page,1,Number.MAX_SAFE_INTEGER,"Page",t.json);if(t["thread-id"])o.threadId=t["thread-id"];if(t.role)o.role=dt(t.role,["user","assistant"],"Role",t.json);await vE(n,o)}).withPositionalArgs("<query>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of results (default: 20, max: 100)"},page:{type:"string",description:"Page number for pagination (default: 1)"},"thread-id":{type:"string",description:"Filter messages by thread ID"},role:{type:"string",description:"Filter by role: user or assistant"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi messages search "error handling"  # Search messages','sazabi messages search "bug" --limit 50  # Search with limit','sazabi messages search "user input" --role user  # Search user messages only','sazabi messages search "response" --thread-id thread-123  # Search in specific thread']).build()}).withExamples(["sazabi messages send 'Hello'                      # Start a new thread","sazabi messages send 'Follow up' -t <thread-id>   # Append to thread","sazabi messages list <thread-id>                  # List messages in thread",'sazabi messages search "error"                    # Search messages']).build();G();oe();X();Ve();var WS={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},slug:{label:"Slug",type:{kind:"string"}},role:{label:"Role",type:{kind:"nullable-string"}}},fE={schema:WS,columns:["id","name","slug","role"],header:"Organizations",emptyMessage:"No organizations found."},IE={layout:"field-list",schema:WS,fields:["id","name","slug","role"]},kE=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.organizations.list(),"Failed to list organizations",e.json);J(fE,n.organizations,{json:e.json})},wE=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=I(ie(),"Failed to read settings",t.json),o=N({token:r.token,organizationId:e,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await o.organizations.get(e),"Failed to select organization",t.json).organization,a=I(await o.projects.list({organizationId:e}),"Failed to fetch organization projects",t.json).projects,c=I(Qe(n),"Failed to resolve profile",t.json),u=I(Fe(n,{activeOrganizationId:i.id,organizationName:i.name,activeProjectId:c.activeProjectId&&a.some((s)=>s.id===c.activeProjectId)?c.activeProjectId:a[0]?.id}),"Failed to update profile",t.json);if(I(ye(u),"Failed to persist active organization",t.json),t.json){j({organization:i,activeProjectId:I(Qe(u),"Failed to resolve profile",t.json).activeProjectId});return}M(`Active organization set to ${i.name}.`)},$E=async(e,t)=>{let r=L({tokenFlag:t.token,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.organizations.rename(e,r.organizationId),"Failed to rename organization",t.json);_E(o.organization.id,o.organization.name),U(IE,o.organization,{json:t.json})},_E=(e,t)=>{let r=ie();if(!r.success)return;let n=r.value,o=Qe(n);if(!o.success)return;if(o.value.activeOrganizationId!==e)return;let i=Fe(n,{organizationName:t});if(i.success)ye(i.value)},YS=W("organizations","Manage organizations").withSubcommands({list:P("list","List organizations available to the current credential",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}await kE({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi organizations list  # List available organizations"]).build(),use:P("use","Set the active organization for future commands",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Organization ID is required.");return y("Organization ID is required.")}await wE(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi organizations use org_123  # Set the active organization"]).build(),rename:P("rename","Rename the active organization",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Organization name is required.");return y("Organization name is required.")}if(r.length>1){let o=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${o}`);return y(`Unexpected arguments: ${o}`)}await $E(n,{token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi organizations rename "Observed Platform"  # Rename the active organization']).build()}).withExamples(["sazabi organizations list  # List available organizations","sazabi organizations use org_123  # Set the active organization",'sazabi organizations rename "Observed Platform"  # Rename the active organization']).build();G();X();Ve();var OE={name:{label:"Profile",type:{kind:"string"}},active:{label:"Active",type:{kind:"custom",render:(e)=>e?ae.success("*"):"",serialize:(e)=>Boolean(e)}}},SE=(e)=>{let t=I(ie(),"Failed to read settings",e.json),r=Object.keys(t.profiles).map((n)=>({name:n,active:n===t.activeProfile}));J({schema:OE,columns:["name","active"],header:"Profiles",emptyMessage:"No profiles configured."},r,{json:e.json})},TE=(e,t)=>{let r=I(ie(),"Failed to read settings",t.json);if(!r.profiles[e]){let n=`Profile '${e}' does not exist. Run 'sazabi profiles list' to see available profiles.`;if(t.json)v(n);y(n)}if(r.activeProfile=e,I(ye(r),"Failed to write settings",t.json),t.json){j({activeProfile:e});return}M(`Active profile set to '${e}'.`)},PE=(e,t)=>{let r=I(ie(),"Failed to read settings",t.json);if(r.profiles[e]){let n=`Profile '${e}' already exists.`;if(t.json)v(n);y(n)}if(r.profiles[e]={},I(ye(r),"Failed to write settings",t.json),t.json){j({created:e});return}M(`Created profile '${e}'.`)},AE=(e,t)=>{let r=I(ie(),"Failed to read settings",t.json);if(!r.profiles[e]){let n=`Profile '${e}' does not exist.`;if(t.json)v(n);y(n)}if(e===r.activeProfile){let n=`Cannot delete the active profile '${e}'. Switch to a different profile first with 'sazabi profiles use <name>'.`;if(t.json)v(n);y(n)}if(delete r.profiles[e],I(ye(r),"Failed to write settings",t.json),t.json){j({deleted:e});return}M(`Deleted profile '${e}'.`)},XS=W("profiles","Manage named CLI profiles").withSubcommands({list:P("list","List all profiles",async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}});SE({json:t.json})}).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles list  # List all profiles"]).build(),use:P("use","Set the active profile",async(e)=>{let{values:t,positionals:r}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles use <name>");return y("Profile name is required. Usage: sazabi profiles use <name>")}TE(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles use staging  # Switch to staging profile"]).build(),create:P("create","Create a new empty profile",async(e)=>{let{values:t,positionals:r}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles create <name>");return y("Profile name is required. Usage: sazabi profiles create <name>")}PE(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles create staging  # Create a new profile"]).build(),delete:P("delete","Delete a profile",async(e)=>{let{values:t,positionals:r}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Profile name is required. Usage: sazabi profiles delete <name>");return y("Profile name is required. Usage: sazabi profiles delete <name>")}AE(n,{json:t.json})}).withPositionalArgs("<name>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi profiles delete staging  # Delete a profile"]).build()}).withExamples(["sazabi profiles list  # List all profiles","sazabi profiles use staging  # Switch to staging profile","sazabi profiles create local  # Create a new profile","sazabi profiles delete staging  # Delete a profile"]).build();G();oe();X();Ve();var DE={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},region:{label:"Region",type:{kind:"string"}},active:{label:"Active",type:{kind:"custom",render:(e)=>e?ae.success("*"):"",serialize:(e)=>e}}},LE={schema:DE,columns:["id","name","region","active"],header:"Projects",emptyMessage:"No projects found."},NE=async(e)=>{let t=L({tokenFlag:e.token,organizationIdFlag:e.organizationId,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),o=I(await r.projects.list({organizationId:t.organizationId}),"Failed to list projects",e.json).projects.map((i)=>({...i,active:i.id===t.projectId}));J(LE,o,{json:e.json})},CE=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=I(ie(),"Failed to read settings",t.json),o=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await o.projects.get(e),"Failed to select project",t.json).project,a=i.organizationId!==n.profiles[ut(n)]?.activeOrganizationId,c=I(Fe(n,{activeOrganizationId:i.organizationId,activeProjectId:i.id,...a&&{organizationName:void 0}}),"Failed to update profile",t.json);if(I(ye(c),"Failed to persist active project",t.json),t.json){j({project:i});return}M(`Active project set to ${i.name}.`)},ZS=W("projects","Manage projects").withSubcommands({list:P("list","List projects in the active organization",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},"organization-id":{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0});if(r.length>0){let n=r.join(", ");if(t.json)return v(`Unexpected arguments: ${n}`);return y(`Unexpected arguments: ${n}`)}await NE({token:t.token,organizationId:t["organization-id"],json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},"organization-id":{type:"string",description:"Override organization selection"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi projects list  # List projects in the active organization"]).build(),use:P("use","Set the active project for future commands",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Project ID is required.");return y("Project ID is required.")}await CE(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi projects use 11111111-1111-4111-8111-111111111111  # Set the active project"]).build()}).withExamples(["sazabi projects list  # List projects in the active organization","sazabi projects use 11111111-1111-4111-8111-111111111111  # Set the active project"]).build();G();oe();X();var xE={runId:{label:"Run ID",type:{kind:"id"}},threadId:{label:"Thread ID",type:{kind:"id"}},status:{label:"Status",type:{kind:"string"}},completed:{label:"Completed",type:{kind:"boolean"}},messageId:{label:"Message ID",type:{kind:"nullable-string",emptyLabel:"(none)"}},response:{label:"Response",type:{kind:"nullable-string"}}},zE={layout:"sections",schema:xE,primary:{title:"Run",fields:["runId","threadId","status","completed","messageId"]},secondary:[{title:"Response",field:"response"}]},jE=async(e,t={})=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),o=I(await n.runs.get(e),"Failed to get run",t.json),i=t.wait&&!o.completed?I(await lc({client:n,runId:e,threadId:o.threadId,timeoutMs:t.timeout,printProgress:!t.json}),"Failed to get run",t.json):o;if(U(zE,i,{json:t.json}),!t.json&&!i.completed)R(),Y(`Poll with: sazabi runs get ${i.runId}`)},QS=W("runs","Inspect deferred agent runs").withSubcommands({get:P("get","Get a deferred run by run ID",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},wait:{type:"boolean"},timeout:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Run ID is required. Usage: sazabi runs get <run-id>");return y("Run ID is required. Usage: sazabi runs get <run-id>")}if(r.length>1){let i=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${i}`);return y(`Unexpected arguments: ${i}`)}let o=t.timeout?Se(t.timeout,1,3600,"Timeout",t.json)*1000:void 0;await jE(n,{token:t.token,wait:t.wait,timeout:o,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<run-id>").withOptions({token:{type:"string",description:"Override authentication token"},wait:{type:"boolean",description:"Wait for terminal status and print the final result"},timeout:{type:"string",description:"Timeout in seconds to wait before returning processing state"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi runs get <run-id>  # Check current run status","sazabi runs get <run-id> --wait  # Wait until the run is terminal","sazabi runs get <run-id> --wait --timeout 60  # Wait up to 60 seconds","sazabi runs get <run-id> --json  # Output run state as JSON"]).build()}).withExamples(["sazabi runs get <run-id>  # Check current run status","sazabi runs get <run-id> --wait  # Wait until the run is terminal"]).build();G();X();Ve();var Xp=["apiBaseUrl","authBaseUrl","webBaseUrl","intakeBaseUrl","tailBaseUrl","apiDomain","webDomain","intakeDomain","tailDomain","forwardPublicKey"],eT=(e)=>{return Xp.includes(e)},EE=["apiBaseUrl","authBaseUrl","webBaseUrl","intakeBaseUrl","tailBaseUrl"],UE=(e)=>EE.includes(e),RE={apiBaseUrl:["http:","https:"],authBaseUrl:["http:","https:"],webBaseUrl:["http:","https:"],intakeBaseUrl:["http:","https:"],tailBaseUrl:["ws:","wss:","http:","https:"]},FE=(e,t)=>{let r=(()=>{try{return new URL(t)}catch{return null}})();if(!r)return ge(`Invalid URL for ${e}: '${t}'`);let n=RE[e];if(!n.includes(r.protocol))return ge(`Invalid protocol '${r.protocol}' for ${e}. Allowed: ${n.join(", ")}`);return ke(r.toString().replace(/\/+$/,""))},KE=(e={})=>{let t=I(ie(),"Failed to read settings",e.json),r=ut(t),n=I(Qe(t),"Failed to resolve profile",e.json);if(e.json){j({success:!0,settingsFile:sr,profile:r,settings:n});return}ne({"Settings file":sr,"Active profile":r}),R();let o=Object.entries(n).filter(([,a])=>a!=null);if(o.length===0){Rt("No settings configured.");return}let i=o.map(([a,c])=>({key:a,value:String(c)})).sort((a,c)=>a.key.localeCompare(c.key));ot(i,[{header:"Key",key:"key",width:20},{header:"Value",key:"value"}],{header:"Settings"})},BE=(e,t,r={})=>{if(!eT(e)){let a=Xp.join(", "),c=`Invalid setting key: '${e}'. Valid keys: ${a}`;if(r.json){v(c);return}y(c);return}let n=t;if(UE(e)){let a=FE(e,t);if(!a.success){if(r.json){v(a.error);return}y(a.error);return}n=a.value}let o=I(ie(),"Failed to read settings",r.json),i=I(Fe(o,{[e]:n}),"Failed to update profile",r.json);if(I(ye(i),"Failed to write settings",r.json),r.json){j({success:!0,key:e,value:n});return}M(`Set ${e} to ${n}`)},GE=(e,t={})=>{if(!eT(e)){let o=Xp.join(", "),i=`Invalid setting key: '${e}'. Valid keys: ${o}`;if(t.json){v(i);return}y(i);return}let r=I(ie(),"Failed to read settings",t.json),n=I(Fe(r,{[e]:void 0}),"Failed to update profile",t.json);if(I(ye(n),"Failed to write settings",t.json),t.json){j({success:!0,key:e});return}M(`Cleared ${e}`)},tT=W("settings","Manage global CLI settings").withSubcommands({view:P("view","Show current CLI settings and file location",async(e)=>{let{values:t}=T(e,{json:{type:"boolean"}});KE({json:t.json})}).withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings view  # Show current settings","sazabi settings view --json  # Output as JSON"]).build(),set:P("set","Set a global configuration value",async(e)=>{let{values:t,positionals:r}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=r[0],o=r[1];if(!n){if(t.json)return v("Setting key is required. Usage: sazabi settings set <key> <value>");return y("Setting key is required. Usage: sazabi settings set <key> <value>")}if(!o){if(t.json)return v("Value is required. Usage: sazabi settings set <key> <value>");return y("Value is required. Usage: sazabi settings set <key> <value>")}BE(n,o,{json:t.json})}).withPositionalArgs("<key> <value>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings set apiBaseUrl https://api.example.com  # Override a base URL (also: authBaseUrl, webBaseUrl, intakeBaseUrl, tailBaseUrl)"]).build(),unset:P("unset","Clear a global configuration value",async(e)=>{let{values:t,positionals:r}=T(e,{json:{type:"boolean"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Setting key is required. Usage: sazabi settings unset <key>");return y("Setting key is required. Usage: sazabi settings unset <key>")}GE(n,{json:t.json})}).withPositionalArgs("<key>").withOptions({json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi settings unset apiBaseUrl  # Clear API base URL override","sazabi settings unset --json apiBaseUrl  # Output as JSON"]).build()}).withExamples(["sazabi settings view  # Show current settings","sazabi settings set apiBaseUrl https://api.example.com  # Set API base URL","sazabi settings unset apiBaseUrl  # Clear API base URL override"]).build();G();X();import*as pT from"node:os";import*as mT from"node:path";import*as Ot from"node:path";var uc=["claude-code","codex","cursor","amp","opencode"],HE={"claude-code":{user:(e)=>Ot.join(e,".claude","skills"),project:(e)=>Ot.join(e,".claude","skills")},codex:{user:(e)=>Ot.join(e,".agents","skills"),project:(e)=>Ot.join(e,".agents","skills")},amp:{user:(e)=>Ot.join(e,".config","agents","skills"),project:(e)=>Ot.join(e,".agents","skills")},opencode:{user:(e)=>Ot.join(e,".config","opencode","skills"),project:(e)=>Ot.join(e,".opencode","skills")}},ME="Cursor does not support agent skills. Use Cursor Rules (.cursor/rules/*.mdc) instead. See https://cursor.com/docs/context/rules.",oT=(e)=>{if(e.agent==="cursor")return{kind:"unsupported",agent:"cursor",reason:ME};let t=HE[e.agent],r=e.scope==="user"?t.user(e.home):t.project(e.projectDir);return{kind:"supported",agent:e.agent,scope:e.scope,root:r}};Jl();import{dirname as QE,resolve as e4}from"node:path";import{fileURLToPath as t4}from"node:url";var rT=`# Sazabi CLI Reference

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
`;var nT=`# CLI Setup

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
`;var iT=`# MCP Server Setup

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
`;var aT=`---
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
`;var cT=`---
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
`;var lT='---\nname: sazabi-logs-search\ndescription: Search and analyze Sazabi logs with ClickHouse-backed tools. Use for log discovery, recurring errors, log volume, service liveness, attribute keys, raw log lookups, and after ClickHouse scan-limit, TYPE_MISMATCH, or UNKNOWN_TABLE errors.\n---\n\n# Sazabi Logs Search\n\nUse `clickhouse_query` for logs. Do not use `bash` for log queries.\n\n## Tools\n\n- `get_log_schema_context`: call first in a fresh log investigation. It returns available columns, services, attribute keys, and guardrails.\n- `clickhouse_query`: read-only `SELECT`. Org filtering is added automatically; you must add project/time filters where needed and `LIMIT` for row queries.\n- `clickhouse_health_check`: use only after connection/availability errors.\n- `log_detail`, `table`, `timeseries`: render artifacts when useful.\n\n## Pick The Table\n\n- Discovery questions: "do we log X?", "what patterns mention Y?", "common errors", "what is failing now?"\n  Use `log_pattern_state`. It is small and already aggregates normalized message patterns. No time filter is required for broad discovery.\n\n- Volume, liveness, intake health, bytes, per-minute trends, latest ingestion, adapter/public-key breakdown:\n  Use `log_volume_per_minute`. It has a 7-day TTL and aggregate-state columns.\n\n- Attribute-key discovery: "which keys does service X emit?", "does user.id exist?", "which services emit this key?"\n  Use `attributes`.\n\n- Raw rows, point lookups, structured-attribute filters, traces/spans, exact payloads:\n  Use `logs`. Always filter both `otel_timestamp_time` and `otel_timestamp` unless doing a point lookup by `canonical_id`, `otel_trace_id`, or `otel_span_id`.\n\n## Hard Rules\n\n1. Table name is `logs`, never `otel_logs`.\n2. Call `get_log_schema_context` before first query in a fresh investigation.\n3. Always add `LIMIT` to non-aggregation row queries. Hard ceiling is 10000.\n4. Never `SELECT *` from `logs`; avoid `raw`.\n5. On `logs`, use both time predicates:\n   `otel_timestamp_time >= ... AND otel_timestamp >= ...`.\n6. For body text search, use `hasAnyTokens(otel_body, \'lowercase needle\')`, `hasAllTokens`, or `hasPhrase`.\n7. Never use `lower(otel_body) LIKE \'%foo%\'`; it bypasses the text index and commonly hits scan limits.\n8. Low-cardinality fields like `otel_severity_text` can use `lower()`.\n9. Aggregate-state MVs need finalizers: `countMerge`, `sumMerge`, `maxMerge`.\n10. `log_pattern_state` time columns are `SimpleAggregateFunction`; finalize in `HAVING`, not `WHERE`.\n11. Use `parseDateTimeBestEffort(\'...\')` for `DateTime` and `parseDateTime64BestEffort(\'...\', 9)` for `DateTime64`.\n12. No `SETTINGS` clause. No joins except `ARRAY JOIN`. No `IN (SELECT ...)`; run the inner query first and expand explicit values.\n\n## Standard Flow\n\n1. Call `get_log_schema_context`.\n2. Pick the table using the rules above.\n3. Query with `clickhouse_query`.\n4. For an interesting pattern, drill into raw logs using its `representative_id` as `logs.canonical_id`.\n5. Use `timeseries` for bucketed numeric results, `table` for tabular results, and `log_detail` for one raw log entry.\n\n## Common Queries\n\n### Discover Patterns\n\n```sql\nSELECT\n  fingerprint,\n  any(pattern) AS pattern,\n  sum(occurrence_count) AS occurrences,\n  max(last_seen_at) AS last_seen,\n  any(representative_id) AS representative_id\nFROM log_pattern_state\nWHERE pattern ILIKE \'%<topic>%\'\nGROUP BY fingerprint\nORDER BY occurrences DESC\nLIMIT 50\n```\n\n### Top Recent Errors\n\n```sql\nSELECT\n  severity_text,\n  fingerprint,\n  any(pattern) AS pattern,\n  sum(occurrence_count) AS occurrences,\n  max(last_seen_at) AS last_seen,\n  any(representative_id) AS representative_id\nFROM log_pattern_state\nWHERE severity_text IN (\'ERROR\', \'FATAL\')\nGROUP BY severity_text, fingerprint\nHAVING max(last_seen_at) >= now() - INTERVAL 24 HOUR\nORDER BY occurrences DESC\nLIMIT 20\n```\n\nRare recent patterns: add\n`HAVING sum(occurrence_count) <= 3 AND max(last_seen_at) >= now() - INTERVAL 24 HOUR`.\n\n### Drill Into A Pattern\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_service_name,\n  otel_severity_text,\n  otel_body,\n  otel_log_attributes\nFROM logs\nWHERE canonical_id = \'<representative_id>\'\nLIMIT 1\n```\n\n### Volume / Traffic\n\n```sql\nSELECT\n  toStartOfInterval(minute, INTERVAL 1 HOUR) AS bucket,\n  countMerge(log_count) AS log_count,\n  sumMerge(bytes_sum) AS total_bytes\nFROM log_volume_per_minute\nWHERE minute >= now() - INTERVAL 24 HOUR\nGROUP BY bucket\nORDER BY bucket\n```\n\n### Service Liveness\n\n```sql\nSELECT\n  service_name,\n  maxMerge(last_ingested_at) AS last_ingested_at,\n  countMerge(log_count) AS recent_log_count\nFROM log_volume_per_minute\nWHERE minute >= now() - INTERVAL 1 HOUR\n  AND service_name = \'<service>\'\nGROUP BY service_name\n```\n\nGroup by `intake_adapter, public_api_key` for intake breakdowns.\n\n### Attribute Keys For A Service\n\n```sql\nSELECT\n  key,\n  maxMerge(last_seen_timestamp_state) AS last_seen\nFROM attributes\nWHERE service_name = \'<service>\'\nGROUP BY key\nORDER BY last_seen DESC\nLIMIT 100\n```\n\nWhich services emit a key:\n\n```sql\nSELECT\n  service_name,\n  maxMerge(last_seen_timestamp_state) AS last_seen\nFROM attributes\nWHERE key = \'<key>\'\nGROUP BY service_name\nORDER BY last_seen DESC\nLIMIT 100\n```\n\n### Raw Body Search\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_service_name,\n  otel_severity_text,\n  otel_body\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 24 HOUR\n  AND otel_timestamp >= now() - INTERVAL 24 HOUR\n  AND hasAnyTokens(otel_body, \'connection timeout\')\nORDER BY otel_timestamp DESC\nLIMIT 100\n```\n\nUse multiple token calls for AND semantics:\n`hasAnyTokens(otel_body, \'retry\') AND hasAnyTokens(otel_body, \'backoff\')`.\nUse an array for OR semantics:\n`hasAnyTokens(otel_body, [\'429\', \'timeout\', \'5xx\'])`.\nUse `hasPhrase(otel_body, \'cannot parse string\')` for ordered phrases.\n\n### Errors By Service\n\n```sql\nSELECT\n  otel_service_name,\n  count(*) AS count\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 1 HOUR\n  AND otel_timestamp >= now() - INTERVAL 1 HOUR\n  AND lower(otel_severity_text) = \'error\'\nGROUP BY otel_service_name\nORDER BY count DESC\nLIMIT 50\n```\n\n### Structured Attribute Filter\n\n```sql\nSELECT\n  otel_timestamp,\n  otel_body,\n  otel_log_attributes[\'user_id\'] AS user_id\nFROM logs\nWHERE otel_timestamp_time >= now() - INTERVAL 1 HOUR\n  AND otel_timestamp >= now() - INTERVAL 1 HOUR\n  AND otel_log_attributes[\'user_id\'] = \'123\'\nORDER BY otel_timestamp DESC\nLIMIT 50\n```\n\nPrefer promoted alias columns when available:\n`error_message`, `error_type`, `error_stack`, `exception_message`,\n`exception_type`, `http_status_code`, `http_route`, `http_method`,\n`url_path`, `span_duration_ms`.\n\nUse map helpers for attributes:\n- `mapContainsKey(otel_log_attributes, \'foo\')`\n- `mapContainsValue(otel_log_attributes, \'AI_RetryError\')`\n- `mapContainsValueLike(otel_log_attributes, \'% AI_RetryError %\')`\n\n### Point Lookups\n\nPoint lookups do not need time filters:\n\n```sql\nSELECT otel_timestamp, otel_service_name, otel_severity_text, otel_body\nFROM logs\nWHERE canonical_id = \'<uuidv7>\'\nLIMIT 1\n```\n\nAlso valid: exact-match `otel_trace_id = \'<32 hex>\'` or\n`otel_span_id = \'<16 hex>\'`.\n\n## Pitfalls\n\n- Scan limit: switch body discovery to `log_pattern_state`, replace `lower(otel_body) LIKE` with token functions, add both time predicates, or narrow the window.\n- `TYPE_MISMATCH`: wrap time strings with the correct `parseDateTime*` function.\n- `UNKNOWN_TABLE otel_logs`: use `logs`.\n- Empty/garbage MV aggregates: add `countMerge`, `sumMerge`, or `maxMerge`.\n- Empty `log_pattern_state WHERE last_seen_at`: move finalized time checks to `HAVING max(last_seen_at) ...`.\n- Missing map column like `otel_log_attributes.user_id`: use bracket access, e.g. `otel_log_attributes[\'user_id\']`.\n- Key not found: use `attributes` to discover exact case-sensitive keys.\n- `hasToken` rejects separators: use `hasAnyTokens`.\n- `LIMIT required`: add a limit, usually 100.\n- Connection error: run `clickhouse_health_check` once, then retry or report the outage.\n\nWhen unsure, call `get_log_schema_context` again. It is cheap and authoritative.\n';var uT=`---
name: sazabi-sandbox-builtins
description: Use Sazabi sandbox bash built-ins, including MCP connector discovery and tool calls from Daytona automation scripts.
---

# Sazabi sandbox built-ins

Use this skill when writing bash that runs inside the Sazabi Daytona sandbox and needs to call organization MCP connectors. This applies to saved automation scripts under \`/home/sazabi/scripts\`, monitor scripts, and one-off sandbox bash commands.

The sandbox loads these functions for interactive shells and non-interactive \`bash script.sh\` runs:

- \`sazabi_mcp_list\`
- \`sazabi_mcp_call <connectionKey> <toolName> [jsonArguments]\`

Do not call the hidden \`/system/mcp\` HTTP route directly from scripts. Use the functions so auth, base URL selection, error handling, and JSON request construction stay consistent.

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

## Handle failures

Both functions return non-zero when the request fails, auth is unavailable, arguments are invalid JSON, or the MCP tool reports an error. Capture stderr for evidence in monitors or automations.

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
- Do not print \`SAZABI_TOKEN\` or copy it into state files.
- Use \`/home/sazabi/store\` for durable cursors, dedupe keys, and processed IDs.
`;var $Z=e4(QE(t4(import.meta.url)),"../skills"),o4=[...po].sort().map((e)=>({relPath:`references/data-sources/${e}.md`,contents:tl(e)})),sT=[{name:"sazabi",files:[{relPath:"SKILL.md",contents:aT},{relPath:"references/cli/commands.md",contents:rT},{relPath:"references/cli/setup.md",contents:nT},{relPath:"references/mcp/setup.md",contents:iT},...o4]},{name:"sazabi-docs",files:[{relPath:"SKILL.md",contents:cT}]},{name:"sazabi-logs-search",files:[{relPath:"SKILL.md",contents:lT}]},{name:"sazabi-sandbox-builtins",files:[{relPath:"SKILL.md",contents:uT}]}];var gr=sT;X();import*as we from"node:fs";import*as be from"node:path";var dT=(e)=>{let t=[],r=be.resolve(e.targetRoot);for(let n of e.skills){let o=be.join(r,n.name),i=be.relative(r,o);if(i.startsWith("..")||be.isAbsolute(i))return ge(`Invalid skill name "${n.name}" escapes target root`);let a=[];for(let c of n.files){let u=be.resolve(o,c.relPath),s=be.relative(o,u);if(s.startsWith("..")||be.isAbsolute(s))return ge(`Invalid skill file path "${c.relPath}" in skill "${n.name}" escapes skill root`);a.push({absPath:u,contents:c.contents})}t.push({skillName:n.name,files:a})}return ke(t)},gT=(e)=>{let t=[];for(let r of e)for(let n of r.files)if(we.existsSync(n.absPath))t.push(n.absPath);return t},hT=(e)=>{let t=be.resolve(e);while(!we.existsSync(t)){let r=be.dirname(t);if(r===t)break;t=r}return t},bT=(e,t)=>{try{let r;if(t.targetRoot){let a=hT(t.targetRoot);r=we.existsSync(a)?we.realpathSync(a):be.resolve(t.targetRoot)}let n=[];for(let a of e)for(let c of a.files)n.push({absPath:c.absPath,contents:c.contents,existed:we.existsSync(c.absPath)});if(!t.force){let a=n.find((c)=>c.existed);if(a)return ge(`Refusing to overwrite ${a.absPath} (use --force to overwrite)`)}let o=[],i=[];for(let a of n){if(r){let u=be.dirname(a.absPath),s=hT(u);if(we.existsSync(s)){let d=we.realpathSync(s),h=be.relative(r,d);if(h.startsWith("..")||be.isAbsolute(h))return ge(`Refusing to write ${a.absPath}: symlink escape detected (resolves outside target root)`)}}we.mkdirSync(be.dirname(a.absPath),{recursive:!0,mode:493});let c=!1;try{if(we.lstatSync(a.absPath).isSymbolicLink())c=!0}catch(u){if(!(u instanceof Error&&("code"in u)&&u.code==="ENOENT"))throw u}if(c)return ge(`Refusing to write ${a.absPath}: path is a symbolic link`);if(t.force&&a.existed)try{we.unlinkSync(a.absPath)}catch(u){if(!(u instanceof Error&&("code"in u)&&u.code==="ENOENT"))throw u}try{we.writeFileSync(a.absPath,a.contents,{encoding:"utf-8",mode:420,flag:"wx"})}catch(u){if(u instanceof Error&&"code"in u&&u.code==="EEXIST"){let s=t.force?`Failed to write ${a.absPath}: file was recreated during operation (possible race condition)`:`Refusing to overwrite ${a.absPath} (use --force to overwrite)`;return ge(s)}throw u}if(a.existed)i.push(a.absPath);else o.push(a.absPath)}return ke({written:o,overwritten:i})}catch(r){let n=r instanceof Error?r.message:String(r);return ge(`Failed to write skill files: ${n}`)}};var io=(e,t)=>{if(t)return v(e);return y(e)},r4=(e)=>e!==void 0&&uc.includes(e),yT=async(e)=>{let t=Boolean(e.json);if(!e.agent)return void io(`Agent is required. Usage: sazabi skill install <agent>. Known agents: ${uc.join(", ")}.`,t);if(!r4(e.agent))return void io(`Unknown agent '${e.agent}'. Known agents: ${uc.join(", ")}.`,t);let r=e.agent;if(e.user&&e.project)return void io("--user and --project are mutually exclusive.",t);if(e.projectDir!==void 0&&!e.project)return void io("--project-dir is only valid with --project.",t);let n=e.project?"project":"user",o=e.projectDir!==void 0?mT.resolve(e.projectDir):process.cwd(),i=oT({agent:r,scope:n,home:pT.homedir(),projectDir:o});if(i.kind==="unsupported")return void io(i.reason,t);if(gr.length===0)return void io("No skills are available to install.",t);let a=I(dT({targetRoot:i.root,skills:gr}),"Failed to plan skill installation",t);if(!e.force){let u=gT(a);if(u.length>0)return void io(["Refusing to overwrite existing files (use --force to overwrite):",...u.map((s)=>`  ${s}`)].join(`
`),t)}let c=I(bT(a,{force:Boolean(e.force),targetRoot:i.root}),"Failed to install skills",t);if(t){j({agent:r,scope:n,targetRoot:i.root,skills:gr.map((u)=>({name:u.name,files:u.files.map((s)=>s.relPath)})),written:c.written,overwritten:c.overwritten});return}ce("Installed skills"),ne({Agent:r,Scope:n,Destination:i.root});for(let u of c.written)M(`wrote  ${u}`);for(let u of c.overwritten)Be(`replaced ${u}`);M(`Installed ${gr.length} skill${gr.length===1?"":"s"} to ${i.root}`)};var vT=W("skill","Manage Sazabi agent skills").withSubcommands({install:P("install","Install Sazabi skills into your AI agent's skills directory",async(e)=>{let{values:t,positionals:r}=T(e,{user:{type:"boolean"},project:{type:"boolean"},"project-dir":{type:"string"},force:{type:"boolean"},json:{type:"boolean"}},{allowPositionals:!0});await yT({agent:r[0],user:t.user,project:t.project,projectDir:t["project-dir"],force:t.force,json:t.json})}).withPositionalArgs("<agent>").withOptions({user:{type:"boolean",description:"Install into the user-scoped skills directory (default)"},project:{type:"boolean",description:"Install into the project-scoped skills directory"},"project-dir":{type:"string",description:"Project directory for --project (default: current working directory)"},force:{type:"boolean",description:"Overwrite existing skill files"},json:{type:"boolean",description:"Output as JSON"}}).withExamples(["sazabi skill install claude-code  # Install for Claude Code in $HOME (default --user)","sazabi skill install codex --project  # Install into current repo","sazabi skill install codex --project --project-dir ../other  # Install into another repo","sazabi skill install claude-code --force  # Overwrite existing files"]).build()}).withExamples(["sazabi skill install claude-code  # Install Sazabi skills for Claude Code in $HOME","sazabi skill install codex --project  # Install Sazabi skills into the current repo"]).build();G();oe();X();var n4={name:{label:"Name",type:{kind:"string"}},currentStatus:{label:"Status",type:{kind:"string"}},firstSeenAt:{label:"Created At",type:{kind:"date"}}},i4={schema:n4,columns:["name","currentStatus","firstSeenAt"],emptyMessage:"All clear — no status components found."},a4=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.statusComponents.list(),"Failed to fetch status",e.json);if(e.json){j(n);return}ce("Status Page"),J(i4,n.statusComponents)},fT=W("status","Show a summary of the status page").withHandler(async(e)=>{let{values:t}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}});await a4({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withOptions({token:{type:"string",description:"Override token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi status         # Show status page summary","sazabi status --json  # Output as JSON"]).build();G();oe();X();var IT={id:{label:"ID",type:{kind:"string"}},name:{label:"Name",type:{kind:"string"}},currentStatus:{label:"Status",type:{kind:"string"}},description:{label:"Description",type:{kind:"nullable-string"}},firstSeenAt:{label:"Created At",type:{kind:"date"}}},c4={schema:IT,columns:["id","name","currentStatus","firstSeenAt"],emptyMessage:"No status components found."},l4={layout:"field-list",schema:IT,fields:["id","name","currentStatus","description","firstSeenAt"],title:"Status Component"},u4=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.statusComponents.list({limit:e.limit,cursor:e.cursor}),"Failed to list status components",e.json);J(c4,n.statusComponents,{json:e.json,nextCursor:n.nextCursor})},s4=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),o=I(await n.statusComponents.get(e),"Failed to get status component",t.json);U(l4,o.statusComponent,{json:t.json})},kT=W("status-components","Manage status page components").withSubcommands({list:P("list","List status components in the active project",async(e)=>{let{values:t}=T(e,{...q,limit:{type:"string"},cursor:{type:"string"}});await u4({token:t.token,json:t.json,apiBaseUrl:t["api-base-url"],limit:t.limit?Number(t.limit):void 0,cursor:t.cursor})}).withOptions({...V,limit:{type:"string",description:"Maximum number of components to return (default: 50, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"}}).withExamples(["sazabi status-components list  # List all status components"]).build(),get:P("get","Get one status component by ID",async(e)=>{let{values:t,positionals:r}=T(e,q,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Component ID is required.");return y("Component ID is required.")}await s4(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<component-id>").withOptions(V).withExamples(["sazabi status-components get <component-id>  # Get one status component"]).build()}).withExamples(["sazabi status-components list                        # List all status components","sazabi status-components get <component-id>          # Get one status component"]).build();G();oe();X();var _T={id:{label:"ID",type:{kind:"id"}},label:{label:"Task",type:{kind:"string"}},description:{label:"Description",type:{kind:"string"}},instructions:{label:"Instructions",type:{kind:"string"}},completed:{label:"Status",type:{kind:"custom",render:(e)=>e?ae.success("✓  done"):ae.muted("○  pending"),serialize:(e)=>e}},completedAt:{label:"Completed at",type:{kind:"nullable-date",emptyLabel:"—"}},category:{label:"Category",type:{kind:"string"}}},h4={schema:_T,columns:["completed","label","id","category"],header:"Onboarding and setup tasks",emptyMessage:"No tasks found."},d4={layout:"field-list",schema:_T,fields:["id","label","completed","completedAt","category","description","instructions"],title:"Task"},g4=async(e)=>{let t=L({tokenFlag:e.token,projectIdFlag:e.projectId,organizationIdFlag:e.organizationId,jsonMode:e.json}),r=N({token:t.token,organizationId:t.organizationId,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl,jsonMode:e.json}),n=I(await r.tasks.list(),"Failed to list tasks",e.json);J(h4,n.tasks,{json:e.json})},b4=async(e,t)=>{let r=L({tokenFlag:t.token,projectIdFlag:t.projectId,organizationIdFlag:t.organizationId,jsonMode:t.json}),n=N({token:r.token,organizationId:r.organizationId,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl,jsonMode:t.json}),i=I(await n.tasks.list(),"Failed to list tasks",t.json).tasks.find((a)=>a.id===e);if(!i){if(t.json)return v(`Task not found: ${e}`);return y(`Task not found: ${e}`)}U(d4,i,{json:t.json})},wT={...q,"project-id":{type:"string"},"organization-id":{type:"string"}},$T={...V,"project-id":{type:"string",description:"Override active project ID"},"organization-id":{type:"string",description:"Override active organization ID"}},OT=W("tasks","View onboarding and setup tasks").withSubcommands({list:P("list","List all onboarding and setup tasks for the active project",async(e)=>{let{values:t}=T(e,wT);await g4({token:t.token,projectId:t["project-id"],organizationId:t["organization-id"],apiBaseUrl:t["api-base-url"],json:t.json})}).withOptions($T).withExamples(["sazabi tasks list           # List all tasks for the active project","sazabi tasks list --json    # Output tasks as JSON"]).build(),get:P("get","Get one task by ID",async(e)=>{let{values:t,positionals:r}=T(e,wT,{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Task ID is required.");return y("Task ID is required.")}await b4(n,{token:t.token,projectId:t["project-id"],organizationId:t["organization-id"],apiBaseUrl:t["api-base-url"],json:t.json})}).withPositionalArgs("<task-id>").withOptions($T).withExamples(["sazabi tasks get install_github_app   # Show task details and instructions","sazabi tasks get send_message --json  # Output as JSON"]).build()}).withExamples(["sazabi tasks list                           # List all tasks","sazabi tasks list --json                    # List tasks as JSON","sazabi tasks get install_github_app         # Get one task by ID","sazabi tasks get send_message --json        # Get one task as JSON"]).build();G();G();oe();X();var p4={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},m4={layout:"field-list",schema:p4,fields:["id","url","title","status","createdAt","updatedAt"]},ST=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:o}=I(await n.threads.update(e,"archived"),"Failed to archive thread",t.json),i={...o,url:$t(o.projectId,o.id)};U(m4,i,{json:t.json})};G();oe();X();var y4={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},v4={role:{label:"Role",type:{kind:"role"}},createdAt:{label:"When",type:{kind:"date"}},text:{label:"Message",type:{kind:"truncated",maxLength:80}}},f4=(e)=>{for(let t of e.content){if(t.type==="message"&&t.message)return t.message;if(t.type==="tool_call")return`[tool: ${t.name}]`;if(t.type==="artifact")return`[artifact: ${t.name}]`;if(t.type==="summary")return"[summary]";if(t.type==="reasoning")return"[reasoning]";if(t.type==="fork")return"[fork]";if(t.type==="slack_context")return"[slack context]"}return"(empty)"},TT=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:o,messages:i}=I(await n.threads.get(e),"Failed to get thread",t.json);if(t.json){j({thread:o,messages:i});return}let a={...o,url:$t(o.projectId,o.id)},c=i.map((u)=>({role:u.role,createdAt:u.createdAt,text:f4(u)}));U({layout:"field-list",schema:y4,fields:["id","url","title","status","createdAt","updatedAt"],title:"Thread"},a),R(),J({schema:v4,columns:["role","createdAt","text"],header:"Messages",emptyMessage:"No messages."},c)};G();oe();X();var I4={id:{label:"ID",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},updatedAt:{label:"Updated",type:{kind:"date"}}},k4={schema:I4,columns:["id","title","status","updatedAt"],header:"Threads",emptyMessage:"No threads found."},PT=async(e)=>{let t=L({tokenFlag:e.token,jsonMode:e.json}),n=await N({token:t.token,projectId:t.projectId,apiBaseUrlFlag:e.apiBaseUrl}).threads.list({limit:e.limit,cursor:e.cursor,status:e.status}),{threads:o,nextCursor:i}=I(n,"Failed to list threads",e.json);J(k4,o,{json:e.json,nextCursor:i})};G();oe();X();var w4={id:{label:"ID",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},score:{label:"Score",align:"right",type:{kind:"custom",render:(e)=>e!=null?e.toFixed(2):"-"}}},$4={schema:w4,columns:["id","title","status","score"],header:{title:"Search Results",variant:"search"},emptyMessage:"No matching threads found."},AT=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{threads:o,pagination:i}=I(await n.search.threads({query:e,limit:t.limit,page:t.page,status:t.status}),"Failed to search threads",t.json);if(t.json){j({threads:o,pagination:i});return}J($4,o,{count:i.totalResults}),pt({type:"page",page:i.page,totalPages:i.totalPages})};G();oe();X();var _4={id:{label:"ID",type:{kind:"id"}},url:{label:"URL",type:{kind:"string"}},title:{label:"Title",type:{kind:"nullable-string",emptyLabel:"(no title)"}},status:{label:"Status",type:{kind:"string"}},createdAt:{label:"Created",type:{kind:"date"}},updatedAt:{label:"Updated",type:{kind:"date"}}},O4={layout:"field-list",schema:_4,fields:["id","url","title","status","createdAt","updatedAt"]},DT=async(e,t)=>{let r=L({tokenFlag:t.token,jsonMode:t.json}),n=N({token:r.token,projectId:r.projectId,apiBaseUrlFlag:t.apiBaseUrl}),{thread:o}=I(await n.threads.update(e,"regular"),"Failed to unarchive thread",t.json),i={...o,url:$t(o.projectId,o.id)};U(O4,i,{json:t.json})};var LT=W("threads","Manage agent threads").withSubcommands({list:P("list","List threads from current project",async(e)=>{let{values:t}=T(e,{token:{type:"string"},limit:{type:"string"},cursor:{type:"string"},status:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}}),r={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)r.limit=Se(t.limit,1,100,"Limit",t.json);if(t.cursor)r.cursor=t.cursor;if(t.status)r.status=dt(t.status,["regular","archived"],"Status",t.json);await PT(r)}).withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of threads to return (default: 20, max: 100)"},cursor:{type:"string",description:"Pagination cursor from previous response"},status:{type:"string",description:"Filter by status: regular or archived"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads list  # List all threads","sazabi threads list --limit 50  # List with custom limit","sazabi threads list --status archived  # List archived threads","sazabi threads list --cursor xyz  # List next page"]).build(),get:P("get","Get thread with messages",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads get <thread-id>");return y("Thread ID is required. Usage: sazabi threads get <thread-id>")}if(r.length>1){let o=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${o}`);return y(`Unexpected arguments: ${o}`)}await TT(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads get <thread-id>  # Get thread with messages","sazabi threads get <thread-id> --json  # Output as JSON"]).build(),search:P("search","Search threads in current project",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},limit:{type:"string"},page:{type:"string"},status:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r.join(" ");if(!n){if(t.json)return v("Search query is required. Usage: sazabi threads search <query>");return y("Search query is required. Usage: sazabi threads search <query>")}let o={token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]};if(t.limit)o.limit=Se(t.limit,1,100,"Limit",t.json);if(t.page)o.page=Se(t.page,1,Number.MAX_SAFE_INTEGER,"Page",t.json);if(t.status)o.status=dt(t.status,["regular","archived"],"Status",t.json);await AT(n,o)}).withPositionalArgs("<query>").withOptions({token:{type:"string",description:"Override authentication token"},limit:{type:"string",description:"Maximum number of results (default: 20, max: 100)"},page:{type:"string",description:"Page number for pagination (default: 1)"},status:{type:"string",description:"Filter by status: regular or archived"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(['sazabi threads search "error handling"  # Search threads','sazabi threads search "bug" --limit 50  # Search with limit','sazabi threads search "authentication" --status regular  # Search only regular threads']).build(),archive:P("archive","Archive a thread",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads archive <thread-id>");return y("Thread ID is required. Usage: sazabi threads archive <thread-id>")}if(r.length>1){let o=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${o}`);return y(`Unexpected arguments: ${o}`)}await ST(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads archive <thread-id>  # Archive a thread","sazabi threads archive <thread-id> --json  # Output as JSON"]).build(),unarchive:P("unarchive","Unarchive a thread",async(e)=>{let{values:t,positionals:r}=T(e,{token:{type:"string"},json:{type:"boolean"},"api-base-url":{type:"string"}},{allowPositionals:!0}),n=r[0];if(!n){if(t.json)return v("Thread ID is required. Usage: sazabi threads unarchive <thread-id>");return y("Thread ID is required. Usage: sazabi threads unarchive <thread-id>")}if(r.length>1){let o=r.slice(1).join(", ");if(t.json)return v(`Unexpected arguments: ${o}`);return y(`Unexpected arguments: ${o}`)}await DT(n,{token:t.token,json:t.json,apiBaseUrl:t["api-base-url"]})}).withPositionalArgs("<thread-id>").withOptions({token:{type:"string",description:"Override authentication token"},json:{type:"boolean",description:"Output as JSON"},"api-base-url":{type:"string",description:"Override API base URL"}}).withExamples(["sazabi threads unarchive <thread-id>  # Unarchive a thread","sazabi threads unarchive <thread-id> --json  # Output as JSON"]).build()}).withExamples(["sazabi threads list  # List all threads","sazabi threads get <thread-id>  # Get thread with messages",'sazabi threads search "error"  # Search threads',"sazabi threads archive <thread-id>  # Archive a thread","sazabi threads unarchive <thread-id>  # Unarchive a thread"]).build();var NT=[mS,fS,wS,YS,MS,XS,ZS,AS,DS,tT,vT,GS,LT,VS,QS,OS,kT,fT,OT];Zp();G();var{renderSubcommandHelp:Qp,renderSubcommandGroupHelp:zT,renderCommandHelp:em,renderMainHelp:S4}=yc("sazabi");var tm=(e)=>S4(e,{title:"Sazabi CLI",description:"Command-line interface for the Sazabi public API",examples:["sazabi auth login                         # Authenticate via browser",'sazabi messages send "Hello"              # Start a new thread','sazabi messages send "Hi" -t <id>         # Send a message to a thread',"sazabi logs tail --severities ERROR,WARN  # Tail logs filtered by severity","sazabi threads list                       # List all threads"]});Ve();import*as dc from"node:fs";import*as On from"node:path";import{fileURLToPath as T4}from"node:url";var jT=()=>{try{let e=On.dirname(T4(import.meta.url));for(let t=0;t<5;t++){let r=On.join(e,"package.json");if(dc.existsSync(r)){let n=dc.readFileSync(r,"utf-8");return JSON.parse(n).version??"0.0.0"}e=On.dirname(e)}return"0.0.0"}catch{return"0.0.0"}};var R4=jT();for(let e of NT)CT(e);var F4=async()=>{let e=process.argv.slice(2);if(e[0]==="--get-completions"&&e[1]==="--"){let{getCompletions:h,parseCompletionContext:b}=await Promise.resolve().then(() => (BT(),KT)),p=b(e.slice(2)),_=await h(p);for(let S of _)if(S.description)console.log(`${S.value}	${S.description}`);else console.log(S.value);return}let t=[],r;for(let h=0;h<e.length;h++){let b=e[h];if(b==="--profile"){let p=e[h+1],_=e.includes("--json");if(p===void 0||p.startsWith("-")){let S=p===void 0?"--profile requires a value.":`--profile requires a value, but got '${p}'. Use '--profile <name>'.`;if(_)v(S);y(S)}r=p,h++}else if(b.startsWith("--profile=")){let p=b.slice(10),_=e.includes("--json");if(!p){if(_)v("--profile requires a value.");y("--profile requires a value.")}r=p}else t.push(b)}iS(r);let n=t[0]==="--json",o=n?t.slice(1):t,i=n||o.includes("--json");if(o.includes("--version")||o.includes("-v")){console.log(`sazabi ${R4}`);return}if(o.length===0){console.log(tm(_n()));return}if(o[0]?.startsWith("--")||o[0]==="-h"){if(o[0]==="--help"||o[0]==="-h"){console.log(tm(_n()));return}}let a=o[0];if(a&&!xT(a)){let b=a.startsWith("-")?`Unknown option: ${a}. Run 'sazabi -h' for usage.`:`Unknown command: ${a}. Run 'sazabi -h' for usage.`;if(i)v(b);throw y(b),Error("Unreachable")}if(!a)throw Error("Unexpected: commandName is undefined");let c=hc(a);if(!c)throw y(`Unknown command: ${a}. Run 'sazabi -h' for usage.`),Error("Unreachable");let u=o[1]??"",s=o.slice(2);if(u==="--help"||u==="-h"){console.log(em(c));return}if(!u&&c.subcommands&&!c.handler){console.log(em(c));return}let d=c.subcommands?.[u];if(!d){if(c.handler){let h=u?[u,...s]:s;await c.handler(h)}else{let b=u.startsWith("-")?`Subcommand required. Run 'sazabi ${a} -h' for usage.`:`Unknown subcommand: ${u}. Run 'sazabi ${a} -h' for usage.`;if(i)v(b);throw y(b),Error("Unreachable")}return}if(d.subcommands){let h=s[0]??"",b=s.slice(1);if(h==="--help"||h==="-h"||!h&&!d.handler){console.log(zT(a,d));return}let p=d.subcommands[h];if(p){if(b.includes("--help")||b.includes("-h")){console.log(Qp(`${a} ${u}`,p));return}if(p.handler)await p.handler(b);return}if(d.handler){await d.handler(s);return}let S=h.startsWith("-")?`Subcommand required. Run 'sazabi ${a} ${u} -h' for usage.`:`Unknown subcommand: ${h}. Run 'sazabi ${a} ${u} -h' for usage.`;if(i)v(S);throw y(S),Error("Unreachable")}if(s.includes("--help")||s.includes("-h")){console.log(Qp(a,d));return}if(d.handler)await d.handler(s)};F4().catch((e)=>{let t=process.argv.includes("--json"),r=`Unexpected error: ${String(e)}`;if(t)v(r);y(r)});
