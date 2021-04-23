require('./sourcemap-register.js');module.exports=(()=>{"use strict";var e={351:function(e,t,n){var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=i(n(87));const r=n(278);function issueCommand(e,t,n){const i=new Command(e,t,n);process.stdout.write(i.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const i=this.properties[n];if(i){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(i)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return r.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return r.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=n(351);const o=n(717);const u=n(278);const c=s(n(87));const a=s(n(622));var l;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(l=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=u.toCommandValue(t);process.env[e]=n;const i=process.env["GITHUB_ENV"]||"";if(i){const t="_GitHubActionsFileCommandDelimeter_";const i=`${e}<<${t}${c.EOL}${n}${c.EOL}${t}`;o.issueCommand("ENV",i)}else{r.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){r.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){o.issueCommand("PATH",e)}else{r.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${a.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){r.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){r.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=l.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){r.issueCommand("debug",{},e)}t.debug=debug;function error(e){r.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){r.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+c.EOL)}t.info=info;function startGroup(e){r.issue("group",e)}t.startGroup=startGroup;function endGroup(){r.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){r.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=i(n(747));const r=i(n(87));const o=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}s.appendFileSync(n,`${o.toCommandValue(t)}${r.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},514:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=s(n(159));function exec(e,t,n){return i(this,void 0,void 0,function*(){const i=r.argStringToArray(e);if(i.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const s=i[0];t=i.slice(1).concat(t||[]);const o=new r.ToolRunner(s,t,n);return o.exec()})}t.exec=exec},159:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=s(n(87));const o=s(n(614));const u=s(n(129));const c=s(n(622));const a=s(n(436));const l=s(n(962));const f=process.platform==="win32";class ToolRunner extends o.EventEmitter{constructor(e,t,n){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=n||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const n=this._getSpawnFileName();const i=this._getSpawnArgs(e);let s=t?"":"[command]";if(f){if(this._isCmdFile()){s+=n;for(const e of i){s+=` ${e}`}}else if(e.windowsVerbatimArguments){s+=`"${n}"`;for(const e of i){s+=` ${e}`}}else{s+=this._windowsQuoteCmdArg(n);for(const e of i){s+=` ${this._windowsQuoteCmdArg(e)}`}}}else{s+=n;for(const e of i){s+=` ${e}`}}return s}_processLineBuffer(e,t,n){try{let i=t+e.toString();let s=i.indexOf(r.EOL);while(s>-1){const e=i.substring(0,s);n(e);i=i.substring(s+r.EOL.length);s=i.indexOf(r.EOL)}t=i}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(f){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(f){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const n of this.args){t+=" ";t+=e.windowsVerbatimArguments?n:this._windowsQuoteCmdArg(n)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let n=false;for(const i of e){if(t.some(e=>e===i)){n=true;break}}if(!n){return e}let i='"';let s=true;for(let t=e.length;t>0;t--){i+=e[t-1];if(s&&e[t-1]==="\\"){i+="\\"}else if(e[t-1]==='"'){s=true;i+='"'}else{s=false}}i+='"';return i.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let n=true;for(let i=e.length;i>0;i--){t+=e[i-1];if(n&&e[i-1]==="\\"){t+="\\"}else if(e[i-1]==='"'){n=true;t+="\\"}else{n=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const n={};n.cwd=e.cwd;n.env=e.env;n["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){n.argv0=`"${t}"`}return n}exec(){return i(this,void 0,void 0,function*(){if(!l.isRooted(this.toolPath)&&(this.toolPath.includes("/")||f&&this.toolPath.includes("\\"))){this.toolPath=c.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield a.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const n=this._cloneExecOptions(this.options);if(!n.silent&&n.outStream){n.outStream.write(this._getCommandString(n)+r.EOL)}const i=new ExecState(n,this.toolPath);i.on("debug",e=>{this._debug(e)});const s=this._getSpawnFileName();const o=u.spawn(s,this._getSpawnArgs(n),this._getSpawnOptions(this.options,s));const c="";if(o.stdout){o.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!n.silent&&n.outStream){n.outStream.write(e)}this._processLineBuffer(e,c,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const a="";if(o.stderr){o.stderr.on("data",e=>{i.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!n.silent&&n.errStream&&n.outStream){const t=n.failOnStdErr?n.errStream:n.outStream;t.write(e)}this._processLineBuffer(e,a,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}o.on("error",e=>{i.processError=e.message;i.processExited=true;i.processClosed=true;i.CheckComplete()});o.on("exit",e=>{i.processExitCode=e;i.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);i.CheckComplete()});o.on("close",e=>{i.processExitCode=e;i.processExited=true;i.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);i.CheckComplete()});i.on("done",(n,i)=>{if(c.length>0){this.emit("stdline",c)}if(a.length>0){this.emit("errline",a)}o.removeAllListeners();if(n){t(n)}else{e(i)}});if(this.options.input){if(!o.stdin){throw new Error("child process missing stdin")}o.stdin.end(this.options.input)}})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let n=false;let i=false;let s="";function append(e){if(i&&e!=='"'){s+="\\"}s+=e;i=false}for(let r=0;r<e.length;r++){const o=e.charAt(r);if(o==='"'){if(!i){n=!n}else{append(o)}continue}if(o==="\\"&&i){append(o);continue}if(o==="\\"&&n){i=true;continue}if(o===" "&&!n){if(s.length>0){t.push(s);s=""}continue}append(o)}if(s.length>0){t.push(s.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends o.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},962:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var s;Object.defineProperty(t,"__esModule",{value:true});const r=n(357);const o=n(747);const u=n(622);s=o.promises,t.chmod=s.chmod,t.copyFile=s.copyFile,t.lstat=s.lstat,t.mkdir=s.mkdir,t.readdir=s.readdir,t.readlink=s.readlink,t.rename=s.rename,t.rmdir=s.rmdir,t.stat=s.stat,t.symlink=s.symlink,t.unlink=s.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return i(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,n=false){return i(this,void 0,void 0,function*(){const i=n?yield t.stat(e):yield t.lstat(e);return i.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,n=1e3,s=1){return i(this,void 0,void 0,function*(){r.ok(e,"a path argument must be provided");e=u.resolve(e);if(s>=n)return t.mkdir(e);try{yield t.mkdir(e);return}catch(i){switch(i.code){case"ENOENT":{yield mkdirP(u.dirname(e),n,s+1);yield t.mkdir(e);return}default:{let n;try{n=yield t.stat(e)}catch(e){throw i}if(!n.isDirectory())throw i}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,n){return i(this,void 0,void 0,function*(){let i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){const t=u.extname(e).toUpperCase();if(n.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(i)){return e}}}const s=e;for(const r of n){e=s+r;i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){try{const n=u.dirname(e);const i=u.basename(e).toUpperCase();for(const s of yield t.readdir(n)){if(i===s.toUpperCase()){e=u.join(n,s);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(i)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},436:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const s=n(129);const r=n(622);const o=n(669);const u=n(962);const c=o.promisify(s.exec);function cp(e,t,n={}){return i(this,void 0,void 0,function*(){const{force:i,recursive:s}=readCopyOptions(n);const o=(yield u.exists(t))?yield u.stat(t):null;if(o&&o.isFile()&&!i){return}const c=o&&o.isDirectory()?r.join(t,r.basename(e)):t;if(!(yield u.exists(e))){throw new Error(`no such file or directory: ${e}`)}const a=yield u.stat(e);if(a.isDirectory()){if(!s){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,c,0,i)}}else{if(r.relative(e,c)===""){throw new Error(`'${c}' and '${e}' are the same file`)}yield copyFile(e,c,i)}})}t.cp=cp;function mv(e,t,n={}){return i(this,void 0,void 0,function*(){if(yield u.exists(t)){let i=true;if(yield u.isDirectory(t)){t=r.join(t,r.basename(e));i=yield u.exists(t)}if(i){if(n.force==null||n.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(r.dirname(t));yield u.rename(e,t)})}t.mv=mv;function rmRF(e){return i(this,void 0,void 0,function*(){if(u.IS_WINDOWS){try{if(yield u.isDirectory(e,true)){yield c(`rd /s /q "${e}"`)}else{yield c(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield u.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield u.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield c(`rm -rf "${e}"`)}else{yield u.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return i(this,void 0,void 0,function*(){yield u.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return i(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(u.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(u.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(r.delimiter)){if(e){t.push(e)}}}if(u.isRooted(e)){const n=yield u.tryGetExecutablePath(e,t);if(n){return n}return""}if(e.includes("/")||u.IS_WINDOWS&&e.includes("\\")){return""}const n=[];if(process.env.PATH){for(const e of process.env.PATH.split(r.delimiter)){if(e){n.push(e)}}}for(const i of n){const n=yield u.tryGetExecutablePath(i+r.sep+e,t);if(n){return n}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}})}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const n=Boolean(e.recursive);return{force:t,recursive:n}}function cpDirRecursive(e,t,n,s){return i(this,void 0,void 0,function*(){if(n>=255)return;n++;yield mkdirP(t);const i=yield u.readdir(e);for(const r of i){const i=`${e}/${r}`;const o=`${t}/${r}`;const c=yield u.lstat(i);if(c.isDirectory()){yield cpDirRecursive(i,o,n,s)}else{yield copyFile(i,o,s)}}yield u.chmod(t,(yield u.stat(e)).mode)})}function copyFile(e,t,n){return i(this,void 0,void 0,function*(){if((yield u.lstat(e)).isSymbolicLink()){try{yield u.lstat(t);yield u.unlink(t)}catch(e){if(e.code==="EPERM"){yield u.chmod(t,"0666");yield u.unlink(t)}}const n=yield u.readlink(e);yield u.symlink(n,t,u.IS_WINDOWS?"junction":null)}else if(!(yield u.exists(t))||n){yield u.copyFile(e,t)}})}},69:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.Outputs=t.Inputs=void 0;var n;(function(e){e["DIGESTFILE"]="digestfile";e["EXTRA_ARGS"]="extra-args";e["IMAGE"]="image";e["PASSWORD"]="password";e["REGISTRY"]="registry";e["TAGS"]="tags";e["TLS_VERIFY"]="tls-verify";e["USERNAME"]="username"})(n=t.Inputs||(t.Inputs={}));var i;(function(e){e["DIGEST"]="digest";e["REGISTRY_PATH"]="registry-path";e["REGISTRY_PATHS"]="registry-paths"})(i=t.Outputs||(t.Outputs={}))},144:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});const i=n(186);const s=n(514);const r=n(436);const o=n(747);const u=n(622);const c=n(629);const a=n(69);let l;let f=false;let d;let p;let h;async function getPodmanPath(){if(l==null){l=await r.which("podman",true);await execute(l,["version"],{group:true})}return l}const g=`docker.io`;const m=g+`/library`;async function run(){const e="latest";const t=i.getInput(a.Inputs.IMAGE,{required:true});const n=i.getInput(a.Inputs.TAGS);p=n.split(" ");h=t.indexOf("/")>-1?g:m;if(p.length===0){i.info(`Input "${a.Inputs.TAGS}" is not provided, using default tag "${e}"`);p.push(e)}const s=i.getInput(a.Inputs.REGISTRY,{required:true});const r=i.getInput(a.Inputs.USERNAME);const u=i.getInput(a.Inputs.PASSWORD);const l=i.getInput(a.Inputs.TLS_VERIFY);const w=i.getInput(a.Inputs.DIGESTFILE);const y=i.getInput(a.Inputs.EXTRA_ARGS);let $=[];if(y){const e=c.splitByNewline(y);$=e.flatMap(e=>e.split(" ")).map(e=>e.trim())}d=`${t}`;const v=[];const _=await checkImageInPodman();const S=_.foundTags;const E=_.missingTags;if(S.length>0){i.info(`Tag${S.length!==1?"s":""} "${S.join(", ")}" `+`of "${d}" found in Podman image storage`)}if(E.length>0&&S.length>0){i.warning(`Tag${E.length!==1?"s":""} "${E.join(", ")}" `+`of "${d}" not found in Podman image storage`)}const b=await pullImageFromDocker();const x=b.foundTags;const C=b.missingTags;if(x.length>0){i.info(`Tag${x.length!==1?"s":""} "${x.join(", ")}" `+`of "${d}" found in Docker image storage`)}if(C.length>0&&x.length>0){i.warning(`Tag${C.length!==1?"s":""} "${C.join(", ")}" `+`of "${d}" not found in Docker image storage`)}if(E.length>0&&C.length>0){throw new Error(`❌ All tags for "${d}" were not found in either Podman image storage, or Docker image storage. `+`Tag${E.length!==1?"s":""} "${E.join(", ")}" `+`not found in Podman image storage, and tag${C.length!==1?"s":""} `+`"${C.join(", ")}" not found in Docker image storage.`)}const O=S.length===p.length;const I=x.length===p.length;if(O&&I){const e=await isPodmanLocalImageLatest();if(!e){i.warning(`The version of "${d}" in the Docker image storage is more recent `+`than the version in the Podman image storage. The image(s) from the Docker image storage `+`will be pushed.`);d=`${h}/${d}`;f=true}else{i.warning(`The version of "${d}" in the Podman image storage is more recent `+`than the version in the Docker image storage. The image(s) from the Podman image `+`storage will be pushed.`)}}else if(I){d=`${h}/${d}`;i.info(`"${d}" was found in the Docker image storage, but not in the Podman `+`image storage. The image(s) will be pulled into Podman image storage, pushed, and then `+`removed from the Podman image storage.`);f=true}else{i.info(`"${d}" was found in the Podman image storage, but not in the Docker `+`image storage. The image(s) will be pushed from Podman image storage.`)}let A=`⏳ Pushing "${d}" with tag${p.length!==1?"s":""} `+`"${p.join(", ")}" to "${s}"`;if(r){A+=` as "${r}"`}i.info(A);let R="";if(r&&!u){i.warning("Username is provided, but password is missing")}else if(!r&&u){i.warning("Password is provided, but username is missing")}else if(r&&u){R=`${r}:${u}`}let T=w;const D=`${d}:${p[0]}`;if(!T){T=`${D.replace(/[/\\/?%*:|"<>]/g,"-")}_digest.txt`}const j=s.replace(/\/$/,"");const k=`${j}/${t}`;i.info(`Combining image name "${t}" and registry "${s}" `+`to form registry path "${k}"`);if(t.indexOf("/")>-1&&s.indexOf("/")>-1){i.warning(`"${k}" does not seem to be a valid registry path. `+`The registry path should not contain more than 2 slashes. `+`Refer to the Inputs section of the readme for naming image and registry.`)}for(const e of p){const t=`${d}:${e}`;const n=`${k}:${e}`;const s=["push","--quiet","--digestfile",T,t,n];if($.length>0){s.push(...$)}if(l){s.push(`--tls-verify=${l}`)}if(R){s.push(`--creds=${R}`)}await execute(await getPodmanPath(),s);i.info(`✅ Successfully pushed "${t}" to "${n}"`);v.push(n);try{const e=(await o.promises.readFile(T)).toString();i.info(e);i.setOutput(a.Outputs.DIGEST,e)}catch(e){i.warning(`Failed to read digest file "${T}": ${e}`)}}i.setOutput(a.Outputs.REGISTRY_PATH,v[0]);i.setOutput(a.Outputs.REGISTRY_PATHS,JSON.stringify(v))}async function pullImageFromDocker(){i.info(`🔍 Checking if "${d}" with tag${p.length!==1?"s":""} `+`"${p.join(", ")}" is present in Docker image storage`);let e;const t=[];const n=[];try{for(const i of p){e=`${d}:${i}`;const s=await execute(await getPodmanPath(),["pull",`docker-daemon:${e}`],{ignoreReturnCode:true,failOnStdErr:false,group:true});if(s.exitCode===0){t.push(i)}else{n.push(i)}}}catch(e){i.warning(e)}return{foundTags:t,missingTags:n}}async function checkImageInPodman(){i.info(`🔍 Checking if "${d}" with tag${p.length!==1?"s":""} `+`"${p.join(", ")}" is present in Podman image storage`);let e;const t=[];const n=[];try{for(const i of p){e=`${d}:${i}`;const s=await execute(await getPodmanPath(),["image","exists",e],{ignoreReturnCode:true});if(s.exitCode===0){t.push(i)}else{n.push(i)}}}catch(e){i.debug(e)}return{foundTags:t,missingTags:n}}async function isPodmanLocalImageLatest(){const e=`${d}:${p[0]}`;const t=await execute(await getPodmanPath(),["image","inspect",e,"--format","{{.Created}}"]);const n=await execute(await getPodmanPath(),["image","inspect",`${h}/${e}`,"--format","{{.Created}}"]);const i=new Date(t.stdout).getTime();const s=new Date(n.stdout).getTime();return i>s}async function removeDockerImage(){if(d){i.info(`Removing "${d}" from the Podman image storage`);for(const e of p){const t=`${d}:${e}`;await execute(await getPodmanPath(),["rmi",t])}}}async function execute(e,t,n={}){let r="";let o="";const c={...n};c.ignoreReturnCode=true;c.listeners={stdline:e=>{r+=`${e}\n`},errline:e=>{o+=`${e}\n`}};if(n.group){const n=[e,...t].join(" ");i.startGroup(n)}try{const a=await s.exec(e,t,c);if(n.ignoreReturnCode!==true&&a!==0){let t=`${u.basename(e)} exited with code ${a}`;if(o){t+=`\n${o}`}throw new Error(t)}return{exitCode:a,stdout:r,stderr:o}}finally{if(n.group){i.endGroup()}}}run().then(async()=>{if(f){await removeDockerImage()}}).catch(e=>{i.setFailed(e.message)})},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.splitByNewline=void 0;function splitByNewline(e){return e.split(/\r?\n/)}t.splitByNewline=splitByNewline},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},614:e=>{e.exports=require("events")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")}};var t={};function __webpack_require__(n){if(t[n]){return t[n].exports}var i=t[n]={exports:{}};var s=true;try{e[n].call(i.exports,i,i.exports,__webpack_require__);s=false}finally{if(s)delete t[n]}return i.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(144)})();
//# sourceMappingURL=index.js.map