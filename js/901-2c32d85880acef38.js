(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{45921:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(42690);function n(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function a(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function o(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function c(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function l(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),d(e>>>0,t,r),d(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=n,t.writeInt16BE=n,t.writeUint16LE=a,t.writeInt16LE=a,t.readInt32BE=o,t.readUint32BE=s,t.readInt32LE=c,t.readUint32LE=l,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=o(e,t),i=o(e,t+4);return 4294967296*r+i-(i>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r},t.writeUint64BE=f,t.writeInt64BE=f,t.writeUint64LE=h,t.writeInt64LE=h,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var i=0,n=1,a=e/8+r-1;a>=r;a--)i+=t[a]*n,n*=256;return i},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var i=0,n=1,a=r;a<r+e/8;a++)i+=t[a]*n,n*=256;return i},t.writeUintBE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var a=1,o=e/8+n-1;o>=n;o--)r[o]=t/a&255,a*=256;return r},t.writeUintLE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var a=1,o=n;o<n+e/8;o++)r[o]=t/a&255,a*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},99863:function(e,t,r){"use strict";var i=r(12368),n=r(18286),a=r(1186),o=r(45921),s=r(61484);t.Cv=32,t.WH=12,t.pg=16;var c=new Uint8Array(16),l=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var o,s=new Uint8Array(16);s.set(e,s.length-e.length);var c=new Uint8Array(32);i.stream(this._key,s,c,4);var l=t.length+this.tagLength;if(n){if(n.length!==l)throw Error("ChaCha20Poly1305: incorrect destination length");o=n}else o=new Uint8Array(l);return i.streamXOR(this._key,s,t,o,4),this._authenticate(o.subarray(o.length-this.tagLength,o.length),c,o.subarray(0,o.length-this.tagLength),r),a.wipe(s),o},e.prototype.open=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var o,c=new Uint8Array(16);c.set(e,c.length-e.length);var l=new Uint8Array(32);i.stream(this._key,c,l,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,l,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var d=t.length-this.tagLength;if(n){if(n.length!==d)throw Error("ChaCha20Poly1305: incorrect destination length");o=n}else o=new Uint8Array(d);return i.streamXOR(this._key,c,t.subarray(0,t.length-this.tagLength),o,4),a.wipe(c),o},e.prototype.clean=function(){return a.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,i){var s=new n.Poly1305(t);i&&(s.update(i),i.length%16>0&&s.update(c.subarray(i.length%16))),s.update(r),r.length%16>0&&s.update(c.subarray(r.length%16));var l=new Uint8Array(8);i&&o.writeUint64LE(i.length,l),s.update(l),o.writeUint64LE(r.length,l),s.update(l);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),a.wipe(u),a.wipe(l)},e}();t.OK=l},12368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(45921),n=r(1186);function a(e,t,r,a,o){if(void 0===o&&(o=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(a.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===o){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");c=(s=new Uint8Array(16)).length-t.length,s.set(t,c)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,c=o}for(var s,c,l=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var n=r[3]<<24|r[2]<<16|r[1]<<8|r[0],a=r[7]<<24|r[6]<<16|r[5]<<8|r[4],o=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],c=r[19]<<24|r[18]<<16|r[17]<<8|r[16],l=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],d=r[31]<<24|r[30]<<16|r[29]<<8|r[28],f=t[3]<<24|t[2]<<16|t[1]<<8|t[0],h=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],b=1634760805,m=857760878,v=2036477234,y=1797285236,w=n,x=a,_=o,C=s,E=c,S=l,k=u,A=d,M=f,T=h,P=p,I=g,O=0;O<20;O+=2)M^=b=b+w|0,w^=E=E+(M=M>>>16|M<<16)|0,w=w>>>20|w<<12,T^=m=m+x|0,x^=S=S+(T=T>>>16|T<<16)|0,x=x>>>20|x<<12,P^=v=v+_|0,_^=k=k+(P=P>>>16|P<<16)|0,_=_>>>20|_<<12,I^=y=y+C|0,C^=A=A+(I=I>>>16|I<<16)|0,C=C>>>20|C<<12,P^=v=v+_|0,_^=k=k+(P=P>>>24|P<<8)|0,_=_>>>25|_<<7,I^=y=y+C|0,C^=A=A+(I=I>>>24|I<<8)|0,C=C>>>25|C<<7,T^=m=m+x|0,x^=S=S+(T=T>>>24|T<<8)|0,x=x>>>25|x<<7,M^=b=b+w|0,w^=E=E+(M=M>>>24|M<<8)|0,w=w>>>25|w<<7,I^=b=b+x|0,x^=k=k+(I=I>>>16|I<<16)|0,x=x>>>20|x<<12,M^=m=m+_|0,_^=A=A+(M=M>>>16|M<<16)|0,_=_>>>20|_<<12,T^=v=v+C|0,C^=E=E+(T=T>>>16|T<<16)|0,C=C>>>20|C<<12,P^=y=y+w|0,w^=S=S+(P=P>>>16|P<<16)|0,w=w>>>20|w<<12,T^=v=v+C|0,C^=E=E+(T=T>>>24|T<<8)|0,C=C>>>25|C<<7,P^=y=y+w|0,w^=S=S+(P=P>>>24|P<<8)|0,w=w>>>25|w<<7,M^=m=m+_|0,_^=A=A+(M=M>>>24|M<<8)|0,_=_>>>25|_<<7,I^=b=b+x|0,x^=k=k+(I=I>>>24|I<<8)|0,x=x>>>25|x<<7;i.writeUint32LE(b+1634760805|0,e,0),i.writeUint32LE(m+857760878|0,e,4),i.writeUint32LE(v+2036477234|0,e,8),i.writeUint32LE(y+1797285236|0,e,12),i.writeUint32LE(w+n|0,e,16),i.writeUint32LE(x+a|0,e,20),i.writeUint32LE(_+o|0,e,24),i.writeUint32LE(C+s|0,e,28),i.writeUint32LE(E+c|0,e,32),i.writeUint32LE(S+l|0,e,36),i.writeUint32LE(k+u|0,e,40),i.writeUint32LE(A+d|0,e,44),i.writeUint32LE(M+f|0,e,48),i.writeUint32LE(T+h|0,e,52),i.writeUint32LE(P+p|0,e,56),i.writeUint32LE(I+g|0,e,60)}(l,s,e);for(var d=u;d<u+64&&d<r.length;d++)a[d]=r[d]^l[d-u];!function(e,t,r){for(var i=1;r--;)i=i+(255&e[t])|0,e[t]=255&i,i>>>=8,t++;if(i>0)throw Error("ChaCha: counter overflow")}(s,0,c)}return n.wipe(l),0===o&&n.wipe(s),a}t.streamXOR=a,t.stream=function(e,t,r,i){return void 0===i&&(i=0),n.wipe(r),a(e,t,r,r,i)}},61484:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,i=0;i<e.length;i++)r|=e[i]^t[i];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},41093:function(e,t,r){"use strict";t.Xx=t._w=t.aP=t.KS=t.jQ=void 0,r(52403);let i=r(30901);function n(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}r(1186),t.jQ=64,t.KS=64,t.aP=32,new Uint8Array(32)[0]=9;let a=n(),o=n([1]),s=(n([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),n([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222])),c=n([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=n([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]);function u(e,t){for(let r=0;r<16;r++)e[r]=0|t[r]}function d(e){let t=1;for(let r=0;r<16;r++){let i=e[r]+t+65535;t=Math.floor(i/65536),e[r]=i-65536*t}e[0]+=t-1+37*(t-1)}function f(e,t,r){let i=~(r-1);for(let r=0;r<16;r++){let n=i&(e[r]^t[r]);e[r]^=n,t[r]^=n}}function h(e,t){let r=n(),i=n();for(let e=0;e<16;e++)i[e]=t[e];d(i),d(i),d(i);for(let e=0;e<2;e++){r[0]=i[0]-65517;for(let e=1;e<15;e++)r[e]=i[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,f(i,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&i[t],e[2*t+1]=i[t]>>8}n([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function p(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]+r[i]}function g(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]-r[i]}function b(e,t,r){let i,n,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,h=0,p=0,g=0,b=0,m=0,v=0,y=0,w=0,x=0,_=0,C=0,E=0,S=0,k=0,A=0,M=0,T=0,P=0,I=0,O=0,R=0,D=0,N=0,$=r[0],L=r[1],j=r[2],U=r[3],B=r[4],z=r[5],Z=r[6],F=r[7],H=r[8],V=r[9],W=r[10],q=r[11],G=r[12],Y=r[13],K=r[14],J=r[15];a+=(i=t[0])*$,o+=i*L,s+=i*j,c+=i*U,l+=i*B,u+=i*z,d+=i*Z,f+=i*F,h+=i*H,p+=i*V,g+=i*W,b+=i*q,m+=i*G,v+=i*Y,y+=i*K,w+=i*J,o+=(i=t[1])*$,s+=i*L,c+=i*j,l+=i*U,u+=i*B,d+=i*z,f+=i*Z,h+=i*F,p+=i*H,g+=i*V,b+=i*W,m+=i*q,v+=i*G,y+=i*Y,w+=i*K,x+=i*J,s+=(i=t[2])*$,c+=i*L,l+=i*j,u+=i*U,d+=i*B,f+=i*z,h+=i*Z,p+=i*F,g+=i*H,b+=i*V,m+=i*W,v+=i*q,y+=i*G,w+=i*Y,x+=i*K,_+=i*J,c+=(i=t[3])*$,l+=i*L,u+=i*j,d+=i*U,f+=i*B,h+=i*z,p+=i*Z,g+=i*F,b+=i*H,m+=i*V,v+=i*W,y+=i*q,w+=i*G,x+=i*Y,_+=i*K,C+=i*J,l+=(i=t[4])*$,u+=i*L,d+=i*j,f+=i*U,h+=i*B,p+=i*z,g+=i*Z,b+=i*F,m+=i*H,v+=i*V,y+=i*W,w+=i*q,x+=i*G,_+=i*Y,C+=i*K,E+=i*J,u+=(i=t[5])*$,d+=i*L,f+=i*j,h+=i*U,p+=i*B,g+=i*z,b+=i*Z,m+=i*F,v+=i*H,y+=i*V,w+=i*W,x+=i*q,_+=i*G,C+=i*Y,E+=i*K,S+=i*J,d+=(i=t[6])*$,f+=i*L,h+=i*j,p+=i*U,g+=i*B,b+=i*z,m+=i*Z,v+=i*F,y+=i*H,w+=i*V,x+=i*W,_+=i*q,C+=i*G,E+=i*Y,S+=i*K,k+=i*J,f+=(i=t[7])*$,h+=i*L,p+=i*j,g+=i*U,b+=i*B,m+=i*z,v+=i*Z,y+=i*F,w+=i*H,x+=i*V,_+=i*W,C+=i*q,E+=i*G,S+=i*Y,k+=i*K,A+=i*J,h+=(i=t[8])*$,p+=i*L,g+=i*j,b+=i*U,m+=i*B,v+=i*z,y+=i*Z,w+=i*F,x+=i*H,_+=i*V,C+=i*W,E+=i*q,S+=i*G,k+=i*Y,A+=i*K,M+=i*J,p+=(i=t[9])*$,g+=i*L,b+=i*j,m+=i*U,v+=i*B,y+=i*z,w+=i*Z,x+=i*F,_+=i*H,C+=i*V,E+=i*W,S+=i*q,k+=i*G,A+=i*Y,M+=i*K,T+=i*J,g+=(i=t[10])*$,b+=i*L,m+=i*j,v+=i*U,y+=i*B,w+=i*z,x+=i*Z,_+=i*F,C+=i*H,E+=i*V,S+=i*W,k+=i*q,A+=i*G,M+=i*Y,T+=i*K,P+=i*J,b+=(i=t[11])*$,m+=i*L,v+=i*j,y+=i*U,w+=i*B,x+=i*z,_+=i*Z,C+=i*F,E+=i*H,S+=i*V,k+=i*W,A+=i*q,M+=i*G,T+=i*Y,P+=i*K,I+=i*J,m+=(i=t[12])*$,v+=i*L,y+=i*j,w+=i*U,x+=i*B,_+=i*z,C+=i*Z,E+=i*F,S+=i*H,k+=i*V,A+=i*W,M+=i*q,T+=i*G,P+=i*Y,I+=i*K,O+=i*J,v+=(i=t[13])*$,y+=i*L,w+=i*j,x+=i*U,_+=i*B,C+=i*z,E+=i*Z,S+=i*F,k+=i*H,A+=i*V,M+=i*W,T+=i*q,P+=i*G,I+=i*Y,O+=i*K,R+=i*J,y+=(i=t[14])*$,w+=i*L,x+=i*j,_+=i*U,C+=i*B,E+=i*z,S+=i*Z,k+=i*F,A+=i*H,M+=i*V,T+=i*W,P+=i*q,I+=i*G,O+=i*Y,R+=i*K,D+=i*J,w+=(i=t[15])*$,x+=i*L,_+=i*j,C+=i*U,E+=i*B,S+=i*z,k+=i*Z,A+=i*F,M+=i*H,T+=i*V,P+=i*W,I+=i*q,O+=i*G,R+=i*Y,D+=i*K,N+=i*J,a+=38*x,o+=38*_,s+=38*C,c+=38*E,l+=38*S,u+=38*k,d+=38*A,f+=38*M,h+=38*T,p+=38*P,g+=38*I,b+=38*O,m+=38*R,v+=38*D,y+=38*N,n=Math.floor((i=a+(n=1)+65535)/65536),a=i-65536*n,n=Math.floor((i=o+n+65535)/65536),o=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,a+=n-1+37*(n-1),n=Math.floor((i=a+(n=1)+65535)/65536),a=i-65536*n,n=Math.floor((i=o+n+65535)/65536),o=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,a+=n-1+37*(n-1),e[0]=a,e[1]=o,e[2]=s,e[3]=c,e[4]=l,e[5]=u,e[6]=d,e[7]=f,e[8]=h,e[9]=p,e[10]=g,e[11]=b,e[12]=m,e[13]=v,e[14]=y,e[15]=w}function m(e,t){let r=n(),i=n(),a=n(),o=n(),c=n(),l=n(),u=n(),d=n(),f=n();g(r,e[1],e[0]),g(f,t[1],t[0]),b(r,r,f),p(i,e[0],e[1]),p(f,t[0],t[1]),b(i,i,f),b(a,e[3],t[3]),b(a,a,s),b(o,e[2],t[2]),p(o,o,o),g(c,i,r),g(l,o,a),p(u,o,a),p(d,i,r),b(e[0],c,l),b(e[1],d,u),b(e[2],u,l),b(e[3],c,d)}function v(e,t,r){for(let i=0;i<4;i++)f(e[i],t[i],r)}function y(e,t){let r=n(),i=n(),a=n();(function(e,t){let r;let i=n();for(r=0;r<16;r++)i[r]=t[r];for(r=253;r>=0;r--)b(i,i,i),2!==r&&4!==r&&b(i,i,t);for(r=0;r<16;r++)e[r]=i[r]})(a,t[2]),b(r,t[0],a),b(i,t[1],a),h(e,i),e[31]^=function(e){let t=new Uint8Array(32);return h(t,e),1&t[0]}(r)<<7}function w(e,t){let r=[n(),n(),n(),n()];u(r[0],c),u(r[1],l),u(r[2],o),b(r[3],c,l),function(e,t,r){u(e[0],a),u(e[1],o),u(e[2],o),u(e[3],a);for(let i=255;i>=0;--i){let n=r[i/8|0]>>(7&i)&1;v(e,t,n),m(t,e),m(e,e),v(e,t,n)}}(e,r,t)}t._w=function(e){if(e.length!==t.aP)throw Error(`ed25519: seed must be ${t.aP} bytes`);let r=(0,i.hash)(e);r[0]&=248,r[31]&=127,r[31]|=64;let a=new Uint8Array(32),o=[n(),n(),n(),n()];w(o,r),y(a,o);let s=new Uint8Array(64);return s.set(e),s.set(a,32),{publicKey:a,secretKey:s}};let x=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function _(e,t){let r,i,n,a;for(i=63;i>=32;--i){for(r=0,n=i-32,a=i-12;n<a;++n)t[n]+=r-16*t[i]*x[n-(i-32)],r=Math.floor((t[n]+128)/256),t[n]-=256*r;t[n]+=r,t[i]=0}for(n=0,r=0;n<32;n++)t[n]+=r-(t[31]>>4)*x[n],r=t[n]>>8,t[n]&=255;for(n=0;n<32;n++)t[n]-=r*x[n];for(i=0;i<32;i++)t[i+1]+=t[i]>>8,e[i]=255&t[i]}function C(e){let t=new Float64Array(64);for(let r=0;r<64;r++)t[r]=e[r];for(let t=0;t<64;t++)e[t]=0;_(e,t)}t.Xx=function(e,t){let r=new Float64Array(64),a=[n(),n(),n(),n()],o=(0,i.hash)(e.subarray(0,32));o[0]&=248,o[31]&=127,o[31]|=64;let s=new Uint8Array(64);s.set(o.subarray(32),32);let c=new i.SHA512;c.update(s.subarray(32)),c.update(t);let l=c.digest();c.clean(),C(l),w(a,l),y(s,a),c.reset(),c.update(s.subarray(0,32)),c.update(e.subarray(32)),c.update(t);let u=c.digest();C(u);for(let e=0;e<32;e++)r[e]=l[e];for(let e=0;e<32;e++)for(let t=0;t<32;t++)r[e+t]+=u[e]*o[t];return _(s.subarray(32),r),s}},23371:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},21480:function(e,t,r){"use strict";var i=r(20071),n=r(1186),a=function(){function e(e,t,r,n){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=n;var a=i.hmac(this._hash,r,t);this._hmac=new i.HMAC(e,a),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),n.wipe(this._buffer),n.wipe(this._counter),this._bufpos=0},e}();t.t=a},20071:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(23371),n=r(61484),a=r(1186),o=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var n=0;n<r.length;n++)r[n]^=54;this._inner.update(r);for(var n=0;n<r.length;n++)r[n]^=106;this._outer.update(r),i.isSerializableHash(this._inner)&&i.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),a.wipe(r)}return e.prototype.reset=function(){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){i.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),i.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=o,t.hmac=function(e,t,r){var i=new o(e,t);i.update(r);var n=i.digest();return i.clean(),n},t.equal=n.equal},42690:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,i=65535&t;return r*i+((e>>>16&65535)*i+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},18286:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(61484),n=r(1186);t.DIGEST_LENGTH=16;var a=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var i=e[2]|e[3]<<8;this._r[1]=(r>>>13|i<<3)&8191;var n=e[4]|e[5]<<8;this._r[2]=(i>>>10|n<<6)&7939;var a=e[6]|e[7]<<8;this._r[3]=(n>>>7|a<<9)&8191;var o=e[8]|e[9]<<8;this._r[4]=(a>>>4|o<<12)&255,this._r[5]=o>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(o>>>14|s<<2)&8191;var c=e[12]|e[13]<<8;this._r[7]=(s>>>11|c<<5)&8065;var l=e[14]|e[15]<<8;this._r[8]=(c>>>8|l<<8)&8191,this._r[9]=l>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var i=this._fin?0:2048,n=this._h[0],a=this._h[1],o=this._h[2],s=this._h[3],c=this._h[4],l=this._h[5],u=this._h[6],d=this._h[7],f=this._h[8],h=this._h[9],p=this._r[0],g=this._r[1],b=this._r[2],m=this._r[3],v=this._r[4],y=this._r[5],w=this._r[6],x=this._r[7],_=this._r[8],C=this._r[9];r>=16;){var E,S=e[t+0]|e[t+1]<<8;n+=8191&S;var k=e[t+2]|e[t+3]<<8;a+=(S>>>13|k<<3)&8191;var A=e[t+4]|e[t+5]<<8;o+=(k>>>10|A<<6)&8191;var M=e[t+6]|e[t+7]<<8;s+=(A>>>7|M<<9)&8191;var T=e[t+8]|e[t+9]<<8;c+=(M>>>4|T<<12)&8191,l+=T>>>1&8191;var P=e[t+10]|e[t+11]<<8;u+=(T>>>14|P<<2)&8191;var I=e[t+12]|e[t+13]<<8;d+=(P>>>11|I<<5)&8191;var O=e[t+14]|e[t+15]<<8;f+=(I>>>8|O<<8)&8191,h+=O>>>5|i;var R=0;R=(E=0+n*p+5*C*a+5*_*o+5*x*s+5*w*c)>>>13,E&=8191,E+=5*y*l+5*v*u+5*m*d+5*b*f+5*g*h,R+=E>>>13,E&=8191;var D=R;D+=n*g+a*p+5*C*o+5*_*s+5*x*c,R=D>>>13,D&=8191,D+=5*w*l+5*y*u+5*v*d+5*m*f+5*b*h,R+=D>>>13,D&=8191;var N=R;N+=n*b+a*g+o*p+5*C*s+5*_*c,R=N>>>13,N&=8191,N+=5*x*l+5*w*u+5*y*d+5*v*f+5*m*h,R+=N>>>13,N&=8191;var $=R;$+=n*m+a*b+o*g+s*p+5*C*c,R=$>>>13,$&=8191,$+=5*_*l+5*x*u+5*w*d+5*y*f+5*v*h,R+=$>>>13,$&=8191;var L=R;L+=n*v+a*m+o*b+s*g+c*p,R=L>>>13,L&=8191,L+=5*C*l+5*_*u+5*x*d+5*w*f+5*y*h,R+=L>>>13,L&=8191;var j=R;j+=n*y+a*v+o*m+s*b+c*g,R=j>>>13,j&=8191,j+=l*p+5*C*u+5*_*d+5*x*f+5*w*h,R+=j>>>13,j&=8191;var U=R;U+=n*w+a*y+o*v+s*m+c*b,R=U>>>13,U&=8191,U+=l*g+u*p+5*C*d+5*_*f+5*x*h,R+=U>>>13,U&=8191;var B=R;B+=n*x+a*w+o*y+s*v+c*m,R=B>>>13,B&=8191,B+=l*b+u*g+d*p+5*C*f+5*_*h,R+=B>>>13,B&=8191;var z=R;z+=n*_+a*x+o*w+s*y+c*v,R=z>>>13,z&=8191,z+=l*m+u*b+d*g+f*p+5*C*h,R+=z>>>13,z&=8191;var Z=R;Z+=n*C+a*_+o*x+s*w+c*y,R=Z>>>13,Z&=8191,Z+=l*v+u*m+d*b+f*g+h*p,R+=Z>>>13,Z&=8191,E=8191&(R=(R=(R<<2)+R|0)+E|0),R>>>=13,D+=R,n=E,a=D,o=N,s=$,c=L,l=j,u=U,d=B,f=z,h=Z,t+=16,r-=16}this._h[0]=n,this._h[1]=a,this._h[2]=o,this._h[3]=s,this._h[4]=c,this._h[5]=l,this._h[6]=u,this._h[7]=d,this._h[8]=f,this._h[9]=h},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,i,n,a,o=new Uint16Array(10);if(this._leftover){for(a=this._leftover,this._buffer[a++]=1;a<16;a++)this._buffer[a]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,a=2;a<10;a++)this._h[a]+=r,r=this._h[a]>>>13,this._h[a]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,o[0]=this._h[0]+5,r=o[0]>>>13,o[0]&=8191,a=1;a<10;a++)o[a]=this._h[a]+r,r=o[a]>>>13,o[a]&=8191;for(o[9]-=8192,i=(1^r)-1,a=0;a<10;a++)o[a]&=i;for(a=0,i=~i;a<10;a++)this._h[a]=this._h[a]&i|o[a];for(a=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,n=this._h[0]+this._pad[0],this._h[0]=65535&n;a<8;a++)n=(this._h[a]+this._pad[a]|0)+(n>>>16)|0,this._h[a]=65535&n;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,i=e.length;if(this._leftover){(t=16-this._leftover)>i&&(t=i);for(var n=0;n<t;n++)this._buffer[this._leftover+n]=e[r+n];if(i-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(i>=16&&(t=i-i%16,this._blocks(e,r,t),r+=t,i-=t),i){for(var n=0;n<i;n++)this._buffer[this._leftover+n]=e[r+n];this._leftover+=i}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=a,t.oneTimeAuth=function(e,t){var r=new a(e);r.update(t);var i=r.digest();return r.clean(),i},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&i.equal(e,r)}},52403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let i=r(99302),n=r(45921),a=r(1186);function o(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new i.SystemRandomSource,t.randomBytes=o,t.randomUint32=function(e=t.defaultRandomSource){let r=o(4,e),i=(0,n.readUint32LE)(r);return(0,a.wipe)(r),i};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function c(e,r=s,i=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let n="",c=r.length,l=256-256%c;for(;e>0;){let t=o(Math.ceil(256*e/l),i);for(let i=0;i<t.length&&e>0;i++){let a=t[i];a<l&&(n+=r.charAt(a%c),e--)}(0,a.wipe)(t)}return n}t.randomString=c,t.randomStringForEntropy=function(e,r=s,i=t.defaultRandomSource){return c(Math.ceil(e/(Math.log(r.length)/Math.LN2)),r,i)}},64850:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0;class r{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}t.BrowserRandomSource=r},95072:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let i=r(1186);class n{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(10985);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,i.wipe)(t),r}}t.NodeRandomSource=n},99302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let i=r(64850),n=r(95072);class a{constructor(){if(this.isAvailable=!1,this.name="",this._source=new i.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new n.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}t.SystemRandomSource=a},83785:function(e,t,r){"use strict";var i=r(45921),n=r(1186);t.k=32,t.cn=64;var a=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,n=t%64<56?64:128;this._buffer[r]=128;for(var a=r+1;a<n-8;a++)this._buffer[a]=0;i.writeUint32BE(t/536870912|0,this._buffer,n-8),i.writeUint32BE(t<<3,this._buffer,n-4),s(this._temp,this._state,this._buffer,0,n),this._finished=!0}for(var a=0;a<this.digestLength/4;a++)i.writeUint32BE(this._state[a],e,4*a);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){n.wipe(e.state),e.buffer&&n.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=a;var o=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,n,a){for(;a>=64;){for(var s=t[0],c=t[1],l=t[2],u=t[3],d=t[4],f=t[5],h=t[6],p=t[7],g=0;g<16;g++){var b=n+4*g;e[g]=i.readUint32BE(r,b)}for(var g=16;g<64;g++){var m=e[g-2],v=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,y=((m=e[g-15])>>>7|m<<25)^(m>>>18|m<<14)^m>>>3;e[g]=(v+e[g-7]|0)+(y+e[g-16]|0)}for(var g=0;g<64;g++){var v=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&f^~d&h)|0)+(p+(o[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&c^s&l^c&l)|0;p=h,h=f,f=d,d=u+v|0,u=l,l=c,c=s,s=v+y|0}t[0]+=s,t[1]+=c,t[2]+=l,t[3]+=u,t[4]+=d,t[5]+=f,t[6]+=h,t[7]+=p,n+=64,a-=64}return n}t.vp=function(e){var t=new a;t.update(e);var r=t.digest();return t.clean(),r}},30901:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(45921),n=r(1186);t.DIGEST_LENGTH=64,t.BLOCK_SIZE=128;var a=function(){function e(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._stateHi=new Int32Array(8),this._stateLo=new Int32Array(8),this._tempHi=new Int32Array(16),this._tempLo=new Int32Array(16),this._buffer=new Uint8Array(256),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._stateHi[0]=1779033703,this._stateHi[1]=3144134277,this._stateHi[2]=1013904242,this._stateHi[3]=2773480762,this._stateHi[4]=1359893119,this._stateHi[5]=2600822924,this._stateHi[6]=528734635,this._stateHi[7]=1541459225,this._stateLo[0]=4089235720,this._stateLo[1]=2227873595,this._stateLo[2]=4271175723,this._stateLo[3]=1595750129,this._stateLo[4]=2917565137,this._stateLo[5]=725511199,this._stateLo[6]=4215389547,this._stateLo[7]=327033209},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._tempHi),n.wipe(this._tempLo),this.reset()},e.prototype.update=function(e,r){if(void 0===r&&(r=e.length),this._finished)throw Error("SHA512: can't update because hash was finished.");var i=0;if(this._bytesHashed+=r,this._bufferLength>0){for(;this._bufferLength<t.BLOCK_SIZE&&r>0;)this._buffer[this._bufferLength++]=e[i++],r--;this._bufferLength===this.blockSize&&(s(this._tempHi,this._tempLo,this._stateHi,this._stateLo,this._buffer,0,this.blockSize),this._bufferLength=0)}for(r>=this.blockSize&&(i=s(this._tempHi,this._tempLo,this._stateHi,this._stateLo,e,i,r),r%=this.blockSize);r>0;)this._buffer[this._bufferLength++]=e[i++],r--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,n=t%128<112?128:256;this._buffer[r]=128;for(var a=r+1;a<n-8;a++)this._buffer[a]=0;i.writeUint32BE(t/536870912|0,this._buffer,n-8),i.writeUint32BE(t<<3,this._buffer,n-4),s(this._tempHi,this._tempLo,this._stateHi,this._stateLo,this._buffer,0,n),this._finished=!0}for(var a=0;a<this.digestLength/8;a++)i.writeUint32BE(this._stateHi[a],e,8*a),i.writeUint32BE(this._stateLo[a],e,8*a+4);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{stateHi:new Int32Array(this._stateHi),stateLo:new Int32Array(this._stateLo),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._stateHi.set(e.stateHi),this._stateLo.set(e.stateLo),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){n.wipe(e.stateHi),n.wipe(e.stateLo),e.buffer&&n.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.SHA512=a;var o=new Int32Array([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]);function s(e,t,r,n,a,s,c){for(var l,u,d,f,h,p,g,b,m=r[0],v=r[1],y=r[2],w=r[3],x=r[4],_=r[5],C=r[6],E=r[7],S=n[0],k=n[1],A=n[2],M=n[3],T=n[4],P=n[5],I=n[6],O=n[7];c>=128;){for(var R=0;R<16;R++){var D=8*R+s;e[R]=i.readUint32BE(a,D),t[R]=i.readUint32BE(a,D+4)}for(var R=0;R<80;R++){var N=m,$=v,L=y,j=w,U=x,B=_,z=C,Z=E,F=S,H=k,V=A,W=M,q=T,G=P,Y=I,K=O;if(l=E,h=65535&(u=O),p=u>>>16,g=65535&l,b=l>>>16,l=(x>>>14|T<<18)^(x>>>18|T<<14)^(T>>>9|x<<23),h+=65535&(u=(T>>>14|x<<18)^(T>>>18|x<<14)^(x>>>9|T<<23)),p+=u>>>16,g+=65535&l,b+=l>>>16,l=x&_^~x&C,h+=65535&(u=T&P^~T&I),p+=u>>>16,g+=65535&l,b+=l>>>16,l=o[2*R],h+=65535&(u=o[2*R+1]),p+=u>>>16,g+=65535&l,b+=l>>>16,l=e[R%16],h+=65535&(u=t[R%16]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,d=65535&g|b<<16,f=65535&h|p<<16,l=d,h=65535&(u=f),p=u>>>16,g=65535&l,b=l>>>16,l=(m>>>28|S<<4)^(S>>>2|m<<30)^(S>>>7|m<<25),h+=65535&(u=(S>>>28|m<<4)^(m>>>2|S<<30)^(m>>>7|S<<25)),p+=u>>>16,g+=65535&l,b+=l>>>16,l=m&v^m&y^v&y,h+=65535&(u=S&k^S&A^k&A),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,Z=65535&g|b<<16,K=65535&h|p<<16,l=j,h=65535&(u=W),p=u>>>16,g=65535&l,b=l>>>16,l=d,h+=65535&(u=f),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,j=65535&g|b<<16,W=65535&h|p<<16,v=N,y=$,w=L,x=j,_=U,C=B,E=z,m=Z,k=F,A=H,M=V,T=W,P=q,I=G,O=Y,S=K,R%16==15)for(var D=0;D<16;D++)l=e[D],h=65535&(u=t[D]),p=u>>>16,g=65535&l,b=l>>>16,l=e[(D+9)%16],h+=65535&(u=t[(D+9)%16]),p+=u>>>16,g+=65535&l,b+=l>>>16,l=((d=e[(D+1)%16])>>>1|(f=t[(D+1)%16])<<31)^(d>>>8|f<<24)^d>>>7,h+=65535&(u=(f>>>1|d<<31)^(f>>>8|d<<24)^(f>>>7|d<<25)),p+=u>>>16,g+=65535&l,b+=l>>>16,l=((d=e[(D+14)%16])>>>19|(f=t[(D+14)%16])<<13)^(f>>>29|d<<3)^d>>>6,h+=65535&(u=(f>>>19|d<<13)^(d>>>29|f<<3)^(f>>>6|d<<26)),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,e[D]=65535&g|b<<16,t[D]=65535&h|p<<16}l=m,h=65535&(u=S),p=u>>>16,g=65535&l,b=l>>>16,l=r[0],h+=65535&(u=n[0]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[0]=m=65535&g|b<<16,n[0]=S=65535&h|p<<16,l=v,h=65535&(u=k),p=u>>>16,g=65535&l,b=l>>>16,l=r[1],h+=65535&(u=n[1]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[1]=v=65535&g|b<<16,n[1]=k=65535&h|p<<16,l=y,h=65535&(u=A),p=u>>>16,g=65535&l,b=l>>>16,l=r[2],h+=65535&(u=n[2]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[2]=y=65535&g|b<<16,n[2]=A=65535&h|p<<16,l=w,h=65535&(u=M),p=u>>>16,g=65535&l,b=l>>>16,l=r[3],h+=65535&(u=n[3]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[3]=w=65535&g|b<<16,n[3]=M=65535&h|p<<16,l=x,h=65535&(u=T),p=u>>>16,g=65535&l,b=l>>>16,l=r[4],h+=65535&(u=n[4]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[4]=x=65535&g|b<<16,n[4]=T=65535&h|p<<16,l=_,h=65535&(u=P),p=u>>>16,g=65535&l,b=l>>>16,l=r[5],h+=65535&(u=n[5]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[5]=_=65535&g|b<<16,n[5]=P=65535&h|p<<16,l=C,h=65535&(u=I),p=u>>>16,g=65535&l,b=l>>>16,l=r[6],h+=65535&(u=n[6]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[6]=C=65535&g|b<<16,n[6]=I=65535&h|p<<16,l=E,h=65535&(u=O),p=u>>>16,g=65535&l,b=l>>>16,l=r[7],h+=65535&(u=n[7]),p+=u>>>16,g+=65535&l,b+=l>>>16,p+=h>>>16,g+=p>>>16,b+=g>>>16,r[7]=E=65535&g|b<<16,n[7]=O=65535&h|p<<16,s+=128,c-=128}return s}t.hash=function(e){var t=new a;t.update(e);var r=t.digest();return t.clean(),r}},1186:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},78166:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let i=r(52403),n=r(1186);function a(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let o=new Uint8Array(32);o[0]=9;let s=a([56129,1]);function c(e){let t=1;for(let r=0;r<16;r++){let i=e[r]+t+65535;t=Math.floor(i/65536),e[r]=i-65536*t}e[0]+=t-1+37*(t-1)}function l(e,t,r){let i=~(r-1);for(let r=0;r<16;r++){let n=i&(e[r]^t[r]);e[r]^=n,t[r]^=n}}function u(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]+r[i]}function d(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]-r[i]}function f(e,t,r){let i,n,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,h=0,p=0,g=0,b=0,m=0,v=0,y=0,w=0,x=0,_=0,C=0,E=0,S=0,k=0,A=0,M=0,T=0,P=0,I=0,O=0,R=0,D=0,N=0,$=r[0],L=r[1],j=r[2],U=r[3],B=r[4],z=r[5],Z=r[6],F=r[7],H=r[8],V=r[9],W=r[10],q=r[11],G=r[12],Y=r[13],K=r[14],J=r[15];a+=(i=t[0])*$,o+=i*L,s+=i*j,c+=i*U,l+=i*B,u+=i*z,d+=i*Z,f+=i*F,h+=i*H,p+=i*V,g+=i*W,b+=i*q,m+=i*G,v+=i*Y,y+=i*K,w+=i*J,o+=(i=t[1])*$,s+=i*L,c+=i*j,l+=i*U,u+=i*B,d+=i*z,f+=i*Z,h+=i*F,p+=i*H,g+=i*V,b+=i*W,m+=i*q,v+=i*G,y+=i*Y,w+=i*K,x+=i*J,s+=(i=t[2])*$,c+=i*L,l+=i*j,u+=i*U,d+=i*B,f+=i*z,h+=i*Z,p+=i*F,g+=i*H,b+=i*V,m+=i*W,v+=i*q,y+=i*G,w+=i*Y,x+=i*K,_+=i*J,c+=(i=t[3])*$,l+=i*L,u+=i*j,d+=i*U,f+=i*B,h+=i*z,p+=i*Z,g+=i*F,b+=i*H,m+=i*V,v+=i*W,y+=i*q,w+=i*G,x+=i*Y,_+=i*K,C+=i*J,l+=(i=t[4])*$,u+=i*L,d+=i*j,f+=i*U,h+=i*B,p+=i*z,g+=i*Z,b+=i*F,m+=i*H,v+=i*V,y+=i*W,w+=i*q,x+=i*G,_+=i*Y,C+=i*K,E+=i*J,u+=(i=t[5])*$,d+=i*L,f+=i*j,h+=i*U,p+=i*B,g+=i*z,b+=i*Z,m+=i*F,v+=i*H,y+=i*V,w+=i*W,x+=i*q,_+=i*G,C+=i*Y,E+=i*K,S+=i*J,d+=(i=t[6])*$,f+=i*L,h+=i*j,p+=i*U,g+=i*B,b+=i*z,m+=i*Z,v+=i*F,y+=i*H,w+=i*V,x+=i*W,_+=i*q,C+=i*G,E+=i*Y,S+=i*K,k+=i*J,f+=(i=t[7])*$,h+=i*L,p+=i*j,g+=i*U,b+=i*B,m+=i*z,v+=i*Z,y+=i*F,w+=i*H,x+=i*V,_+=i*W,C+=i*q,E+=i*G,S+=i*Y,k+=i*K,A+=i*J,h+=(i=t[8])*$,p+=i*L,g+=i*j,b+=i*U,m+=i*B,v+=i*z,y+=i*Z,w+=i*F,x+=i*H,_+=i*V,C+=i*W,E+=i*q,S+=i*G,k+=i*Y,A+=i*K,M+=i*J,p+=(i=t[9])*$,g+=i*L,b+=i*j,m+=i*U,v+=i*B,y+=i*z,w+=i*Z,x+=i*F,_+=i*H,C+=i*V,E+=i*W,S+=i*q,k+=i*G,A+=i*Y,M+=i*K,T+=i*J,g+=(i=t[10])*$,b+=i*L,m+=i*j,v+=i*U,y+=i*B,w+=i*z,x+=i*Z,_+=i*F,C+=i*H,E+=i*V,S+=i*W,k+=i*q,A+=i*G,M+=i*Y,T+=i*K,P+=i*J,b+=(i=t[11])*$,m+=i*L,v+=i*j,y+=i*U,w+=i*B,x+=i*z,_+=i*Z,C+=i*F,E+=i*H,S+=i*V,k+=i*W,A+=i*q,M+=i*G,T+=i*Y,P+=i*K,I+=i*J,m+=(i=t[12])*$,v+=i*L,y+=i*j,w+=i*U,x+=i*B,_+=i*z,C+=i*Z,E+=i*F,S+=i*H,k+=i*V,A+=i*W,M+=i*q,T+=i*G,P+=i*Y,I+=i*K,O+=i*J,v+=(i=t[13])*$,y+=i*L,w+=i*j,x+=i*U,_+=i*B,C+=i*z,E+=i*Z,S+=i*F,k+=i*H,A+=i*V,M+=i*W,T+=i*q,P+=i*G,I+=i*Y,O+=i*K,R+=i*J,y+=(i=t[14])*$,w+=i*L,x+=i*j,_+=i*U,C+=i*B,E+=i*z,S+=i*Z,k+=i*F,A+=i*H,M+=i*V,T+=i*W,P+=i*q,I+=i*G,O+=i*Y,R+=i*K,D+=i*J,w+=(i=t[15])*$,x+=i*L,_+=i*j,C+=i*U,E+=i*B,S+=i*z,k+=i*Z,A+=i*F,M+=i*H,T+=i*V,P+=i*W,I+=i*q,O+=i*G,R+=i*Y,D+=i*K,N+=i*J,a+=38*x,o+=38*_,s+=38*C,c+=38*E,l+=38*S,u+=38*k,d+=38*A,f+=38*M,h+=38*T,p+=38*P,g+=38*I,b+=38*O,m+=38*R,v+=38*D,y+=38*N,n=Math.floor((i=a+(n=1)+65535)/65536),a=i-65536*n,n=Math.floor((i=o+n+65535)/65536),o=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,a+=n-1+37*(n-1),n=Math.floor((i=a+(n=1)+65535)/65536),a=i-65536*n,n=Math.floor((i=o+n+65535)/65536),o=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,a+=n-1+37*(n-1),e[0]=a,e[1]=o,e[2]=s,e[3]=c,e[4]=l,e[5]=u,e[6]=d,e[7]=f,e[8]=h,e[9]=p,e[10]=g,e[11]=b,e[12]=m,e[13]=v,e[14]=y,e[15]=w}function h(e,t){let r=new Uint8Array(32),i=new Float64Array(80),n=a(),o=a(),h=a(),p=a(),g=a(),b=a();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(i,t);for(let e=0;e<16;e++)o[e]=i[e];n[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;l(n,o,t),l(h,p,t),u(g,n,h),d(n,n,h),u(h,o,p),d(o,o,p),f(p,g,g),f(b,n,n),f(n,h,n),f(h,o,g),u(g,n,h),d(n,n,h),f(o,n,n),d(h,p,b),f(n,h,s),u(n,n,p),f(h,h,n),f(n,p,b),f(p,o,i),f(o,g,g),l(n,o,t),l(h,p,t)}for(let e=0;e<16;e++)i[e+16]=n[e],i[e+32]=h[e],i[e+48]=o[e],i[e+64]=p[e];let m=i.subarray(32),v=i.subarray(16);!function(e,t){let r=a();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)f(r,r,r),2!==e&&4!==e&&f(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(m,m),f(v,v,m);let y=new Uint8Array(32);return!function(e,t){let r=a(),i=a();for(let e=0;e<16;e++)i[e]=t[e];c(i),c(i),c(i);for(let e=0;e<2;e++){r[0]=i[0]-65517;for(let e=1;e<15;e++)r[e]=i[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,l(i,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&i[t],e[2*t+1]=i[t]>>8}(y,v),y}t.Au=function(e){let r=(0,i.randomBytes)(32,e),a=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e);return{publicKey:h(r,o),secretKey:r}}(r);return(0,n.wipe)(r),a},t.gi=function(e,r,i=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let n=h(e,r);if(i){let e=0;for(let t=0;t<n.length;t++)e|=n[t];if(0===e)throw Error("X25519: invalid shared key")}return n}},55724:function(e,t,r){"use strict";r.d(t,{Ep:function(){return E},Fd:function(){return C},Rt:function(){return S},gw:function(){return n.a},jI:function(){return _}});var i=r(67269),n=r.n(i),a=r(39330);let o={level:"info"},s="custom_context";class c{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class l{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){let t=new c(e);if(t.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=t):this.head=t,this.tail=t,this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;let e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){let e=[],t=this.head;for(;null!==t;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};let t=e.value;return e=e.next,{done:!1,value:t}}}}}class u{constructor(e,t=1024e3){this.level=e??"error",this.levelValue=i.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new l(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,t){t===i.levels.values.error?console.error(e):t===i.levels.values.warn?console.warn(e):t===i.levels.values.debug?console.debug(e):t===i.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append((0,a.u)({timestamp:new Date().toISOString(),log:e}));let t="string"==typeof e?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new l(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){let t=this.getLogArray();return t.push((0,a.u)({extraMetadata:e})),new Blob(t,{type:"application/json"})}}class d{constructor(e,t=1024e3){this.baseChunkLogger=new u(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){let t=URL.createObjectURL(this.logsToBlob(e)),r=document.createElement("a");r.href=t,r.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)}}class f{constructor(e,t=1024e3){this.baseChunkLogger=new u(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var h=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e},x=(e,t)=>p(e,g(t));function _(e){return x(w({},e),{level:e?.level||o.level})}function C(e,t=s){return typeof e.bindings>"u"?function(e,t=s){return e[t]||""}(e,t):e.bindings().context||""}function E(e,t,r=s){let i=function(e,t,r=s){let i=C(e,r);return i.trim()?`${i}/${t}`:t}(e,t,r);return function(e,t,r=s){return e[r]=t,e}(e.child({context:i}),i,r)}function S(e){return"u">typeof e.loggerOverride&&"string"!=typeof e.loggerOverride?{logger:e.loggerOverride,chunkLoggerController:null}:"u">typeof window?function(e){var t,r;let i=new d(null==(t=e.opts)?void 0:t.level,e.maxSizeInBytes);return{logger:n()(x(w({},e.opts),{level:"trace",browser:x(w({},null==(r=e.opts)?void 0:r.browser),{write:e=>i.write(e)})})),chunkLoggerController:i}}(e):function(e){var t;let r=new f(null==(t=e.opts)?void 0:t.level,e.maxSizeInBytes);return{logger:n()(x(w({},e.opts),{level:"trace"}),r),chunkLoggerController:r}}(e)}},97815:function(e,t,r){"use strict";r.d(t,{iO:function(){return i}});let i={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}}},43013:function(e,t,r){"use strict";r.d(t,{decodeJWT:function(){return m},encodeIss:function(){return b},generateKeyPair:function(){return v},signJWT:function(){return y}});var i=r(41093),n=r(52403),a=r(15310);let o="base64url",s="utf8",c="utf8",l="base58btc";var u=r(60040),d=r(87050),f=r(37002),h=r(39330);function p(e){return(0,h.D)((0,d.B)((0,f.m)(e,o),s))}function g(e){return(0,d.B)((0,f.m)((0,h.u)(e),s),o)}function b(e){let t=(0,f.m)("K36",l);return["did","key","z"+(0,d.B)((0,u.z)([t,e]),l)].join(":")}function m(e){var t;let r=e.split("."),i=p(r[0]);return{header:i,payload:p(r[1]),signature:(t=r[2],(0,f.m)(t,o)),data:(0,f.m)(r.slice(0,2).join("."),c)}}function v(e=(0,n.randomBytes)(32)){return i._w(e)}async function y(e,t,r,n,s=(0,a.fromMiliseconds)(Date.now())){var l,u,h;let p={alg:"EdDSA",typ:"JWT"},m={iss:b(n.publicKey),sub:e,aud:t,iat:s,exp:s+r},v=(l={header:p,payload:m},(0,f.m)([g(l.header),g(l.payload)].join("."),c));return[g((u={header:p,payload:m,signature:i.Xx(n.secretKey,v)}).header),g(u.payload),(h=u.signature,(0,d.B)(h,o))].join(".")}r(38378)},38378:function(){},39330:function(e,t,r){"use strict";r.d(t,{D:function(){return a},u:function(){return o}});let i=e=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString()+"n":t),n=e=>JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,'$1"$2n"$3'),(e,t)=>"string"==typeof t&&t.match(/^\d+n$/)?BigInt(t.substring(0,t.length-1)):t);function a(e){if("string"!=typeof e)throw Error(`Cannot safe json parse value of type ${typeof e}`);try{return n(e)}catch(t){return e}}function o(e){return"string"==typeof e?e:i(e)||""}},94995:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52873);i.__exportStar(r(3764),t),i.__exportStar(r(23523),t)},3764:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},23523:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},15310:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52873);i.__exportStar(r(24450),t),i.__exportStar(r(18487),t),i.__exportStar(r(95082),t),i.__exportStar(r(94995),t)},95082:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(52873).__exportStar(r(14540),t)},14540:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0;class r{}t.IWatch=r},19317:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let i=r(94995);t.toMiliseconds=function(e){return e*i.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/i.ONE_THOUSAND)}},74202:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},24450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(52873);i.__exportStar(r(74202),t),i.__exportStar(r(19317),t)},18487:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=r,t.default=r},99149:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function i(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=i,t.getDocumentOrThrow=function(){return i("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return i("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return i("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return i("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return i("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},23686:function(e,t,r){"use strict";t.D=void 0;let i=r(99149);t.D=function(){let e,t,r;try{e=i.getDocumentOrThrow(),t=i.getLocationOrThrow()}catch(e){return null}function n(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let i=r[e],n=["itemprop","property","name"].map(e=>i.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(n.length&&n){let e=i.getAttribute("content");if(e)return e}}return""}let a=((r=n("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),o=n("description","og:description","twitter:description","keywords");return{description:o,url:t.origin,icons:function(){let r=e.getElementsByTagName("link"),i=[];for(let e=0;e<r.length;e++){let n=r[e],a=n.getAttribute("rel");if(a&&a.toLowerCase().indexOf("icon")>-1){let e=n.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let i=t.pathname.split("/");i.pop(),r+=i.join("/")+"/"+e}i.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;i.push(r)}else i.push(e)}}}return i}(),name:a}}},65772:function(e,t){"use strict";t.byteLength=function(e){var t=c(e),r=t[0],i=t[1];return(r+i)*3/4-i},t.toByteArray=function(e){var t,r,a=c(e),o=a[0],s=a[1],l=new n((o+s)*3/4-s),u=0,d=s>0?o-4:o;for(r=0;r<d;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,a=[],o=0,s=i-n;o<s;o+=16383)a.push(function(e,t,i){for(var n,a=[],o=t;o<i;o+=3)a.push(r[(n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return a.join("")}(e,o,o+16383>s?s:o+16383));return 1===n?a.push(r[(t=e[i-1])>>2]+r[t<<4&63]+"=="):2===n&&a.push(r[(t=(e[i-2]<<8)+e[i-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),a.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,s=a.length;o<s;++o)r[o]=a[o],i[a.charCodeAt(o)]=o;function c(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},98799:function(e,t,r){!function(e,t){"use strict";function i(e,t){if(!e)throw Error(t||"Assertion failed")}function n(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function a(e,t,r){if(a.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&(("le"===t||"be"===t)&&(r=t,t=10),this._init(e||0,t||10,r||"be"))}"object"==typeof e?e.exports=a:t.BN=a,a.BN=a,a.wordSize=26;try{l="undefined"!=typeof window&&void 0!==window.Buffer?window.Buffer:r(11314).Buffer}catch(e){}function o(e,t){var r=e.charCodeAt(t);return r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:r-48&15}function s(e,t,r){var i=o(e,r);return r-1>=t&&(i|=o(e,r-1)<<4),i}function c(e,t,r,i){for(var n=0,a=Math.min(e.length,r),o=t;o<a;o++){var s=e.charCodeAt(o)-48;n*=i,s>=49?n+=s-49+10:s>=17?n+=s-17+10:n+=s}return n}a.isBN=function(e){return e instanceof a||null!==e&&"object"==typeof e&&e.constructor.wordSize===a.wordSize&&Array.isArray(e.words)},a.max=function(e,t){return e.cmp(t)>0?e:t},a.min=function(e,t){return 0>e.cmp(t)?e:t},a.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),i(t===(0|t)&&t>=2&&t<=36);var n=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(n++,this.negative=1),n<e.length&&(16===t?this._parseHex(e,n,r):(this._parseBase(e,t,n),"le"===r&&this._initArray(this.toArray(),t,r)))},a.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(i(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},a.prototype._initArray=function(e,t,r){if(i("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=Array(this.length);for(var n,a,o=0;o<this.length;o++)this.words[o]=0;var s=0;if("be"===r)for(o=e.length-1,n=0;o>=0;o-=3)a=e[o]|e[o-1]<<8|e[o-2]<<16,this.words[n]|=a<<s&67108863,this.words[n+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,n++);else if("le"===r)for(o=0,n=0;o<e.length;o+=3)a=e[o]|e[o+1]<<8|e[o+2]<<16,this.words[n]|=a<<s&67108863,this.words[n+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,n++);return this.strip()},a.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=Array(this.length);for(var i,n=0;n<this.length;n++)this.words[n]=0;var a=0,o=0;if("be"===r)for(n=e.length-1;n>=t;n-=2)i=s(e,t,n)<<a,this.words[o]|=67108863&i,a>=18?(a-=18,o+=1,this.words[o]|=i>>>26):a+=8;else for(n=(e.length-t)%2==0?t+1:t;n<e.length;n+=2)i=s(e,t,n)<<a,this.words[o]|=67108863&i,a>=18?(a-=18,o+=1,this.words[o]|=i>>>26):a+=8;this.strip()},a.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var i=0,n=1;n<=67108863;n*=t)i++;i--,n=n/t|0;for(var a=e.length-r,o=a%i,s=Math.min(a,a-o)+r,l=0,u=r;u<s;u+=i)l=c(e,u,u+i,t),this.imuln(n),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(0!==o){var d=1;for(l=c(e,u,e.length,t),u=0;u<o;u++)d*=t;this.imuln(d),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}this.strip()},a.prototype.copy=function(e){e.words=Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},a.prototype.clone=function(){var e=new a(null);return this.copy(e),e},a.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},a.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},a.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},a.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var l,u=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function h(e,t,r){r.negative=t.negative^e.negative;var i=e.length+t.length|0;r.length=i,i=i-1|0;var n=0|e.words[0],a=0|t.words[0],o=n*a,s=67108863&o,c=o/67108864|0;r.words[0]=s;for(var l=1;l<i;l++){for(var u=c>>>26,d=67108863&c,f=Math.min(l,t.length-1),h=Math.max(0,l-e.length+1);h<=f;h++){var p=l-h|0;u+=(o=(n=0|e.words[p])*(a=0|t.words[h])+d)/67108864|0,d=67108863&o}r.words[l]=0|d,c=0|u}return 0!==c?r.words[l]=0|c:r.length--,r.strip()}a.prototype.toString=function(e,t){if(t=0|t||1,16===(e=e||10)||"hex"===e){r="";for(var r,n=0,a=0,o=0;o<this.length;o++){var s=this.words[o],c=((s<<n|a)&16777215).toString(16);r=0!=(a=s>>>24-n&16777215)||o!==this.length-1?u[6-c.length]+c+r:c+r,(n+=2)>=26&&(n-=26,o--)}for(0!==a&&(r=a.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var l=d[e],h=f[e];r="";var p=this.clone();for(p.negative=0;!p.isZero();){var g=p.modn(h).toString(e);r=(p=p.idivn(h)).isZero()?g+r:u[l-g.length]+g+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}i(!1,"Base should be between 2 and 36")},a.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&i(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},a.prototype.toJSON=function(){return this.toString(16)},a.prototype.toBuffer=function(e,t){return i(void 0!==l),this.toArrayLike(l,e,t)},a.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},a.prototype.toArrayLike=function(e,t,r){var n,a,o=this.byteLength(),s=r||Math.max(1,o);i(o<=s,"byte array longer than desired length"),i(s>0,"Requested array length <= 0"),this.strip();var c=new e(s),l=this.clone();if("le"===t){for(a=0;!l.isZero();a++)n=l.andln(255),l.iushrn(8),c[a]=n;for(;a<s;a++)c[a]=0}else{for(a=0;a<s-o;a++)c[a]=0;for(a=0;!l.isZero();a++)n=l.andln(255),l.iushrn(8),c[s-a-1]=n}return c},Math.clz32?a.prototype._countBits=function(e){return 32-Math.clz32(e)}:a.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},a.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return(8191&t)==0&&(r+=13,t>>>=13),(127&t)==0&&(r+=7,t>>>=7),(15&t)==0&&(r+=4,t>>>=4),(3&t)==0&&(r+=2,t>>>=2),(1&t)==0&&r++,r},a.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return(this.length-1)*26+t},a.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},a.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},a.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},a.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},a.prototype.isNeg=function(){return 0!==this.negative},a.prototype.neg=function(){return this.clone().ineg()},a.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},a.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},a.prototype.ior=function(e){return i((this.negative|e.negative)==0),this.iuor(e)},a.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},a.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},a.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},a.prototype.iand=function(e){return i((this.negative|e.negative)==0),this.iuand(e)},a.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},a.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},a.prototype.iuxor=function(e){this.length>e.length?(t=this,r=e):(t=e,r=this);for(var t,r,i=0;i<r.length;i++)this.words[i]=t.words[i]^r.words[i];if(this!==t)for(;i<t.length;i++)this.words[i]=t.words[i];return this.length=t.length,this.strip()},a.prototype.ixor=function(e){return i((this.negative|e.negative)==0),this.iuxor(e)},a.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},a.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},a.prototype.inotn=function(e){i("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var n=0;n<t;n++)this.words[n]=67108863&~this.words[n];return r>0&&(this.words[n]=~this.words[n]&67108863>>26-r),this.strip()},a.prototype.notn=function(e){return this.clone().inotn(e)},a.prototype.setn=function(e,t){i("number"==typeof e&&e>=0);var r=e/26|0,n=e%26;return this._expand(r+1),t?this.words[r]=this.words[r]|1<<n:this.words[r]=this.words[r]&~(1<<n),this.strip()},a.prototype.iadd=function(e){if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,i=e):(r=e,i=this);for(var t,r,i,n=0,a=0;a<i.length;a++)t=(0|r.words[a])+(0|i.words[a])+n,this.words[a]=67108863&t,n=t>>>26;for(;0!==n&&a<r.length;a++)t=(0|r.words[a])+n,this.words[a]=67108863&t,n=t>>>26;if(this.length=r.length,0!==n)this.words[this.length]=n,this.length++;else if(r!==this)for(;a<r.length;a++)this.words[a]=r.words[a];return this},a.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},a.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t,r,i=this.iadd(e);return e.negative=1,i._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var n=this.cmp(e);if(0===n)return this.negative=0,this.length=1,this.words[0]=0,this;n>0?(t=this,r=e):(t=e,r=this);for(var a=0,o=0;o<r.length;o++)a=(i=(0|t.words[o])-(0|r.words[o])+a)>>26,this.words[o]=67108863&i;for(;0!==a&&o<t.length;o++)a=(i=(0|t.words[o])+a)>>26,this.words[o]=67108863&i;if(0===a&&o<t.length&&t!==this)for(;o<t.length;o++)this.words[o]=t.words[o];return this.length=Math.max(this.length,o),t!==this&&(this.negative=1),this.strip()},a.prototype.sub=function(e){return this.clone().isub(e)};var p=function(e,t,r){var i,n,a,o=e.words,s=t.words,c=r.words,l=0,u=0|o[0],d=8191&u,f=u>>>13,h=0|o[1],p=8191&h,g=h>>>13,b=0|o[2],m=8191&b,v=b>>>13,y=0|o[3],w=8191&y,x=y>>>13,_=0|o[4],C=8191&_,E=_>>>13,S=0|o[5],k=8191&S,A=S>>>13,M=0|o[6],T=8191&M,P=M>>>13,I=0|o[7],O=8191&I,R=I>>>13,D=0|o[8],N=8191&D,$=D>>>13,L=0|o[9],j=8191&L,U=L>>>13,B=0|s[0],z=8191&B,Z=B>>>13,F=0|s[1],H=8191&F,V=F>>>13,W=0|s[2],q=8191&W,G=W>>>13,Y=0|s[3],K=8191&Y,J=Y>>>13,X=0|s[4],Q=8191&X,ee=X>>>13,et=0|s[5],er=8191&et,ei=et>>>13,en=0|s[6],ea=8191&en,eo=en>>>13,es=0|s[7],ec=8191&es,el=es>>>13,eu=0|s[8],ed=8191&eu,ef=eu>>>13,eh=0|s[9],ep=8191&eh,eg=eh>>>13;r.negative=e.negative^t.negative,r.length=19;var eb=(l+(i=Math.imul(d,z))|0)+((8191&(n=(n=Math.imul(d,Z))+Math.imul(f,z)|0))<<13)|0;l=((a=Math.imul(f,Z))+(n>>>13)|0)+(eb>>>26)|0,eb&=67108863,i=Math.imul(p,z),n=(n=Math.imul(p,Z))+Math.imul(g,z)|0,a=Math.imul(g,Z);var em=(l+(i=i+Math.imul(d,H)|0)|0)+((8191&(n=(n=n+Math.imul(d,V)|0)+Math.imul(f,H)|0))<<13)|0;l=((a=a+Math.imul(f,V)|0)+(n>>>13)|0)+(em>>>26)|0,em&=67108863,i=Math.imul(m,z),n=(n=Math.imul(m,Z))+Math.imul(v,z)|0,a=Math.imul(v,Z),i=i+Math.imul(p,H)|0,n=(n=n+Math.imul(p,V)|0)+Math.imul(g,H)|0,a=a+Math.imul(g,V)|0;var ev=(l+(i=i+Math.imul(d,q)|0)|0)+((8191&(n=(n=n+Math.imul(d,G)|0)+Math.imul(f,q)|0))<<13)|0;l=((a=a+Math.imul(f,G)|0)+(n>>>13)|0)+(ev>>>26)|0,ev&=67108863,i=Math.imul(w,z),n=(n=Math.imul(w,Z))+Math.imul(x,z)|0,a=Math.imul(x,Z),i=i+Math.imul(m,H)|0,n=(n=n+Math.imul(m,V)|0)+Math.imul(v,H)|0,a=a+Math.imul(v,V)|0,i=i+Math.imul(p,q)|0,n=(n=n+Math.imul(p,G)|0)+Math.imul(g,q)|0,a=a+Math.imul(g,G)|0;var ey=(l+(i=i+Math.imul(d,K)|0)|0)+((8191&(n=(n=n+Math.imul(d,J)|0)+Math.imul(f,K)|0))<<13)|0;l=((a=a+Math.imul(f,J)|0)+(n>>>13)|0)+(ey>>>26)|0,ey&=67108863,i=Math.imul(C,z),n=(n=Math.imul(C,Z))+Math.imul(E,z)|0,a=Math.imul(E,Z),i=i+Math.imul(w,H)|0,n=(n=n+Math.imul(w,V)|0)+Math.imul(x,H)|0,a=a+Math.imul(x,V)|0,i=i+Math.imul(m,q)|0,n=(n=n+Math.imul(m,G)|0)+Math.imul(v,q)|0,a=a+Math.imul(v,G)|0,i=i+Math.imul(p,K)|0,n=(n=n+Math.imul(p,J)|0)+Math.imul(g,K)|0,a=a+Math.imul(g,J)|0;var ew=(l+(i=i+Math.imul(d,Q)|0)|0)+((8191&(n=(n=n+Math.imul(d,ee)|0)+Math.imul(f,Q)|0))<<13)|0;l=((a=a+Math.imul(f,ee)|0)+(n>>>13)|0)+(ew>>>26)|0,ew&=67108863,i=Math.imul(k,z),n=(n=Math.imul(k,Z))+Math.imul(A,z)|0,a=Math.imul(A,Z),i=i+Math.imul(C,H)|0,n=(n=n+Math.imul(C,V)|0)+Math.imul(E,H)|0,a=a+Math.imul(E,V)|0,i=i+Math.imul(w,q)|0,n=(n=n+Math.imul(w,G)|0)+Math.imul(x,q)|0,a=a+Math.imul(x,G)|0,i=i+Math.imul(m,K)|0,n=(n=n+Math.imul(m,J)|0)+Math.imul(v,K)|0,a=a+Math.imul(v,J)|0,i=i+Math.imul(p,Q)|0,n=(n=n+Math.imul(p,ee)|0)+Math.imul(g,Q)|0,a=a+Math.imul(g,ee)|0;var ex=(l+(i=i+Math.imul(d,er)|0)|0)+((8191&(n=(n=n+Math.imul(d,ei)|0)+Math.imul(f,er)|0))<<13)|0;l=((a=a+Math.imul(f,ei)|0)+(n>>>13)|0)+(ex>>>26)|0,ex&=67108863,i=Math.imul(T,z),n=(n=Math.imul(T,Z))+Math.imul(P,z)|0,a=Math.imul(P,Z),i=i+Math.imul(k,H)|0,n=(n=n+Math.imul(k,V)|0)+Math.imul(A,H)|0,a=a+Math.imul(A,V)|0,i=i+Math.imul(C,q)|0,n=(n=n+Math.imul(C,G)|0)+Math.imul(E,q)|0,a=a+Math.imul(E,G)|0,i=i+Math.imul(w,K)|0,n=(n=n+Math.imul(w,J)|0)+Math.imul(x,K)|0,a=a+Math.imul(x,J)|0,i=i+Math.imul(m,Q)|0,n=(n=n+Math.imul(m,ee)|0)+Math.imul(v,Q)|0,a=a+Math.imul(v,ee)|0,i=i+Math.imul(p,er)|0,n=(n=n+Math.imul(p,ei)|0)+Math.imul(g,er)|0,a=a+Math.imul(g,ei)|0;var e_=(l+(i=i+Math.imul(d,ea)|0)|0)+((8191&(n=(n=n+Math.imul(d,eo)|0)+Math.imul(f,ea)|0))<<13)|0;l=((a=a+Math.imul(f,eo)|0)+(n>>>13)|0)+(e_>>>26)|0,e_&=67108863,i=Math.imul(O,z),n=(n=Math.imul(O,Z))+Math.imul(R,z)|0,a=Math.imul(R,Z),i=i+Math.imul(T,H)|0,n=(n=n+Math.imul(T,V)|0)+Math.imul(P,H)|0,a=a+Math.imul(P,V)|0,i=i+Math.imul(k,q)|0,n=(n=n+Math.imul(k,G)|0)+Math.imul(A,q)|0,a=a+Math.imul(A,G)|0,i=i+Math.imul(C,K)|0,n=(n=n+Math.imul(C,J)|0)+Math.imul(E,K)|0,a=a+Math.imul(E,J)|0,i=i+Math.imul(w,Q)|0,n=(n=n+Math.imul(w,ee)|0)+Math.imul(x,Q)|0,a=a+Math.imul(x,ee)|0,i=i+Math.imul(m,er)|0,n=(n=n+Math.imul(m,ei)|0)+Math.imul(v,er)|0,a=a+Math.imul(v,ei)|0,i=i+Math.imul(p,ea)|0,n=(n=n+Math.imul(p,eo)|0)+Math.imul(g,ea)|0,a=a+Math.imul(g,eo)|0;var eC=(l+(i=i+Math.imul(d,ec)|0)|0)+((8191&(n=(n=n+Math.imul(d,el)|0)+Math.imul(f,ec)|0))<<13)|0;l=((a=a+Math.imul(f,el)|0)+(n>>>13)|0)+(eC>>>26)|0,eC&=67108863,i=Math.imul(N,z),n=(n=Math.imul(N,Z))+Math.imul($,z)|0,a=Math.imul($,Z),i=i+Math.imul(O,H)|0,n=(n=n+Math.imul(O,V)|0)+Math.imul(R,H)|0,a=a+Math.imul(R,V)|0,i=i+Math.imul(T,q)|0,n=(n=n+Math.imul(T,G)|0)+Math.imul(P,q)|0,a=a+Math.imul(P,G)|0,i=i+Math.imul(k,K)|0,n=(n=n+Math.imul(k,J)|0)+Math.imul(A,K)|0,a=a+Math.imul(A,J)|0,i=i+Math.imul(C,Q)|0,n=(n=n+Math.imul(C,ee)|0)+Math.imul(E,Q)|0,a=a+Math.imul(E,ee)|0,i=i+Math.imul(w,er)|0,n=(n=n+Math.imul(w,ei)|0)+Math.imul(x,er)|0,a=a+Math.imul(x,ei)|0,i=i+Math.imul(m,ea)|0,n=(n=n+Math.imul(m,eo)|0)+Math.imul(v,ea)|0,a=a+Math.imul(v,eo)|0,i=i+Math.imul(p,ec)|0,n=(n=n+Math.imul(p,el)|0)+Math.imul(g,ec)|0,a=a+Math.imul(g,el)|0;var eE=(l+(i=i+Math.imul(d,ed)|0)|0)+((8191&(n=(n=n+Math.imul(d,ef)|0)+Math.imul(f,ed)|0))<<13)|0;l=((a=a+Math.imul(f,ef)|0)+(n>>>13)|0)+(eE>>>26)|0,eE&=67108863,i=Math.imul(j,z),n=(n=Math.imul(j,Z))+Math.imul(U,z)|0,a=Math.imul(U,Z),i=i+Math.imul(N,H)|0,n=(n=n+Math.imul(N,V)|0)+Math.imul($,H)|0,a=a+Math.imul($,V)|0,i=i+Math.imul(O,q)|0,n=(n=n+Math.imul(O,G)|0)+Math.imul(R,q)|0,a=a+Math.imul(R,G)|0,i=i+Math.imul(T,K)|0,n=(n=n+Math.imul(T,J)|0)+Math.imul(P,K)|0,a=a+Math.imul(P,J)|0,i=i+Math.imul(k,Q)|0,n=(n=n+Math.imul(k,ee)|0)+Math.imul(A,Q)|0,a=a+Math.imul(A,ee)|0,i=i+Math.imul(C,er)|0,n=(n=n+Math.imul(C,ei)|0)+Math.imul(E,er)|0,a=a+Math.imul(E,ei)|0,i=i+Math.imul(w,ea)|0,n=(n=n+Math.imul(w,eo)|0)+Math.imul(x,ea)|0,a=a+Math.imul(x,eo)|0,i=i+Math.imul(m,ec)|0,n=(n=n+Math.imul(m,el)|0)+Math.imul(v,ec)|0,a=a+Math.imul(v,el)|0,i=i+Math.imul(p,ed)|0,n=(n=n+Math.imul(p,ef)|0)+Math.imul(g,ed)|0,a=a+Math.imul(g,ef)|0;var eS=(l+(i=i+Math.imul(d,ep)|0)|0)+((8191&(n=(n=n+Math.imul(d,eg)|0)+Math.imul(f,ep)|0))<<13)|0;l=((a=a+Math.imul(f,eg)|0)+(n>>>13)|0)+(eS>>>26)|0,eS&=67108863,i=Math.imul(j,H),n=(n=Math.imul(j,V))+Math.imul(U,H)|0,a=Math.imul(U,V),i=i+Math.imul(N,q)|0,n=(n=n+Math.imul(N,G)|0)+Math.imul($,q)|0,a=a+Math.imul($,G)|0,i=i+Math.imul(O,K)|0,n=(n=n+Math.imul(O,J)|0)+Math.imul(R,K)|0,a=a+Math.imul(R,J)|0,i=i+Math.imul(T,Q)|0,n=(n=n+Math.imul(T,ee)|0)+Math.imul(P,Q)|0,a=a+Math.imul(P,ee)|0,i=i+Math.imul(k,er)|0,n=(n=n+Math.imul(k,ei)|0)+Math.imul(A,er)|0,a=a+Math.imul(A,ei)|0,i=i+Math.imul(C,ea)|0,n=(n=n+Math.imul(C,eo)|0)+Math.imul(E,ea)|0,a=a+Math.imul(E,eo)|0,i=i+Math.imul(w,ec)|0,n=(n=n+Math.imul(w,el)|0)+Math.imul(x,ec)|0,a=a+Math.imul(x,el)|0,i=i+Math.imul(m,ed)|0,n=(n=n+Math.imul(m,ef)|0)+Math.imul(v,ed)|0,a=a+Math.imul(v,ef)|0;var ek=(l+(i=i+Math.imul(p,ep)|0)|0)+((8191&(n=(n=n+Math.imul(p,eg)|0)+Math.imul(g,ep)|0))<<13)|0;l=((a=a+Math.imul(g,eg)|0)+(n>>>13)|0)+(ek>>>26)|0,ek&=67108863,i=Math.imul(j,q),n=(n=Math.imul(j,G))+Math.imul(U,q)|0,a=Math.imul(U,G),i=i+Math.imul(N,K)|0,n=(n=n+Math.imul(N,J)|0)+Math.imul($,K)|0,a=a+Math.imul($,J)|0,i=i+Math.imul(O,Q)|0,n=(n=n+Math.imul(O,ee)|0)+Math.imul(R,Q)|0,a=a+Math.imul(R,ee)|0,i=i+Math.imul(T,er)|0,n=(n=n+Math.imul(T,ei)|0)+Math.imul(P,er)|0,a=a+Math.imul(P,ei)|0,i=i+Math.imul(k,ea)|0,n=(n=n+Math.imul(k,eo)|0)+Math.imul(A,ea)|0,a=a+Math.imul(A,eo)|0,i=i+Math.imul(C,ec)|0,n=(n=n+Math.imul(C,el)|0)+Math.imul(E,ec)|0,a=a+Math.imul(E,el)|0,i=i+Math.imul(w,ed)|0,n=(n=n+Math.imul(w,ef)|0)+Math.imul(x,ed)|0,a=a+Math.imul(x,ef)|0;var eA=(l+(i=i+Math.imul(m,ep)|0)|0)+((8191&(n=(n=n+Math.imul(m,eg)|0)+Math.imul(v,ep)|0))<<13)|0;l=((a=a+Math.imul(v,eg)|0)+(n>>>13)|0)+(eA>>>26)|0,eA&=67108863,i=Math.imul(j,K),n=(n=Math.imul(j,J))+Math.imul(U,K)|0,a=Math.imul(U,J),i=i+Math.imul(N,Q)|0,n=(n=n+Math.imul(N,ee)|0)+Math.imul($,Q)|0,a=a+Math.imul($,ee)|0,i=i+Math.imul(O,er)|0,n=(n=n+Math.imul(O,ei)|0)+Math.imul(R,er)|0,a=a+Math.imul(R,ei)|0,i=i+Math.imul(T,ea)|0,n=(n=n+Math.imul(T,eo)|0)+Math.imul(P,ea)|0,a=a+Math.imul(P,eo)|0,i=i+Math.imul(k,ec)|0,n=(n=n+Math.imul(k,el)|0)+Math.imul(A,ec)|0,a=a+Math.imul(A,el)|0,i=i+Math.imul(C,ed)|0,n=(n=n+Math.imul(C,ef)|0)+Math.imul(E,ed)|0,a=a+Math.imul(E,ef)|0;var eM=(l+(i=i+Math.imul(w,ep)|0)|0)+((8191&(n=(n=n+Math.imul(w,eg)|0)+Math.imul(x,ep)|0))<<13)|0;l=((a=a+Math.imul(x,eg)|0)+(n>>>13)|0)+(eM>>>26)|0,eM&=67108863,i=Math.imul(j,Q),n=(n=Math.imul(j,ee))+Math.imul(U,Q)|0,a=Math.imul(U,ee),i=i+Math.imul(N,er)|0,n=(n=n+Math.imul(N,ei)|0)+Math.imul($,er)|0,a=a+Math.imul($,ei)|0,i=i+Math.imul(O,ea)|0,n=(n=n+Math.imul(O,eo)|0)+Math.imul(R,ea)|0,a=a+Math.imul(R,eo)|0,i=i+Math.imul(T,ec)|0,n=(n=n+Math.imul(T,el)|0)+Math.imul(P,ec)|0,a=a+Math.imul(P,el)|0,i=i+Math.imul(k,ed)|0,n=(n=n+Math.imul(k,ef)|0)+Math.imul(A,ed)|0,a=a+Math.imul(A,ef)|0;var eT=(l+(i=i+Math.imul(C,ep)|0)|0)+((8191&(n=(n=n+Math.imul(C,eg)|0)+Math.imul(E,ep)|0))<<13)|0;l=((a=a+Math.imul(E,eg)|0)+(n>>>13)|0)+(eT>>>26)|0,eT&=67108863,i=Math.imul(j,er),n=(n=Math.imul(j,ei))+Math.imul(U,er)|0,a=Math.imul(U,ei),i=i+Math.imul(N,ea)|0,n=(n=n+Math.imul(N,eo)|0)+Math.imul($,ea)|0,a=a+Math.imul($,eo)|0,i=i+Math.imul(O,ec)|0,n=(n=n+Math.imul(O,el)|0)+Math.imul(R,ec)|0,a=a+Math.imul(R,el)|0,i=i+Math.imul(T,ed)|0,n=(n=n+Math.imul(T,ef)|0)+Math.imul(P,ed)|0,a=a+Math.imul(P,ef)|0;var eP=(l+(i=i+Math.imul(k,ep)|0)|0)+((8191&(n=(n=n+Math.imul(k,eg)|0)+Math.imul(A,ep)|0))<<13)|0;l=((a=a+Math.imul(A,eg)|0)+(n>>>13)|0)+(eP>>>26)|0,eP&=67108863,i=Math.imul(j,ea),n=(n=Math.imul(j,eo))+Math.imul(U,ea)|0,a=Math.imul(U,eo),i=i+Math.imul(N,ec)|0,n=(n=n+Math.imul(N,el)|0)+Math.imul($,ec)|0,a=a+Math.imul($,el)|0,i=i+Math.imul(O,ed)|0,n=(n=n+Math.imul(O,ef)|0)+Math.imul(R,ed)|0,a=a+Math.imul(R,ef)|0;var eI=(l+(i=i+Math.imul(T,ep)|0)|0)+((8191&(n=(n=n+Math.imul(T,eg)|0)+Math.imul(P,ep)|0))<<13)|0;l=((a=a+Math.imul(P,eg)|0)+(n>>>13)|0)+(eI>>>26)|0,eI&=67108863,i=Math.imul(j,ec),n=(n=Math.imul(j,el))+Math.imul(U,ec)|0,a=Math.imul(U,el),i=i+Math.imul(N,ed)|0,n=(n=n+Math.imul(N,ef)|0)+Math.imul($,ed)|0,a=a+Math.imul($,ef)|0;var eO=(l+(i=i+Math.imul(O,ep)|0)|0)+((8191&(n=(n=n+Math.imul(O,eg)|0)+Math.imul(R,ep)|0))<<13)|0;l=((a=a+Math.imul(R,eg)|0)+(n>>>13)|0)+(eO>>>26)|0,eO&=67108863,i=Math.imul(j,ed),n=(n=Math.imul(j,ef))+Math.imul(U,ed)|0,a=Math.imul(U,ef);var eR=(l+(i=i+Math.imul(N,ep)|0)|0)+((8191&(n=(n=n+Math.imul(N,eg)|0)+Math.imul($,ep)|0))<<13)|0;l=((a=a+Math.imul($,eg)|0)+(n>>>13)|0)+(eR>>>26)|0,eR&=67108863;var eD=(l+(i=Math.imul(j,ep))|0)+((8191&(n=(n=Math.imul(j,eg))+Math.imul(U,ep)|0))<<13)|0;return l=((a=Math.imul(U,eg))+(n>>>13)|0)+(eD>>>26)|0,eD&=67108863,c[0]=eb,c[1]=em,c[2]=ev,c[3]=ey,c[4]=ew,c[5]=ex,c[6]=e_,c[7]=eC,c[8]=eE,c[9]=eS,c[10]=ek,c[11]=eA,c[12]=eM,c[13]=eT,c[14]=eP,c[15]=eI,c[16]=eO,c[17]=eR,c[18]=eD,0!==l&&(c[19]=l,r.length++),r};function g(e,t,r){return new b().mulp(e,t,r)}function b(e,t){this.x=e,this.y=t}Math.imul||(p=h),a.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?p(this,e,t):r<63?h(this,e,t):r<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var i=0,n=0,a=0;a<r.length-1;a++){var o=n;n=0;for(var s=67108863&i,c=Math.min(a,t.length-1),l=Math.max(0,a-e.length+1);l<=c;l++){var u=a-l,d=(0|e.words[u])*(0|t.words[l]),f=67108863&d;o=o+(d/67108864|0)|0,s=67108863&(f=f+s|0),n+=(o=o+(f>>>26)|0)>>>26,o&=67108863}r.words[a]=s,i=o,o=n}return 0!==i?r.words[a]=i:r.length--,r.strip()}(this,e,t):g(this,e,t)},b.prototype.makeRBT=function(e){for(var t=Array(e),r=a.prototype._countBits(e)-1,i=0;i<e;i++)t[i]=this.revBin(i,r,e);return t},b.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var i=0,n=0;n<t;n++)i|=(1&e)<<t-n-1,e>>=1;return i},b.prototype.permute=function(e,t,r,i,n,a){for(var o=0;o<a;o++)i[o]=t[e[o]],n[o]=r[e[o]]},b.prototype.transform=function(e,t,r,i,n,a){this.permute(a,e,t,r,i,n);for(var o=1;o<n;o<<=1)for(var s=o<<1,c=Math.cos(2*Math.PI/s),l=Math.sin(2*Math.PI/s),u=0;u<n;u+=s)for(var d=c,f=l,h=0;h<o;h++){var p=r[u+h],g=i[u+h],b=r[u+h+o],m=i[u+h+o],v=d*b-f*m;m=d*m+f*b,b=v,r[u+h]=p+b,i[u+h]=g+m,r[u+h+o]=p-b,i[u+h+o]=g-m,h!==s&&(v=c*d-l*f,f=c*f+l*d,d=v)}},b.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),i=1&r,n=0;for(r=r/2|0;r;r>>>=1)n++;return 1<<n+1+i},b.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var i=0;i<r/2;i++){var n=e[i];e[i]=e[r-i-1],e[r-i-1]=n,n=t[i],t[i]=-t[r-i-1],t[r-i-1]=-n}},b.prototype.normalize13b=function(e,t){for(var r=0,i=0;i<t/2;i++){var n=8192*Math.round(e[2*i+1]/t)+Math.round(e[2*i]/t)+r;e[i]=67108863&n,r=n<67108864?0:n/67108864|0}return e},b.prototype.convert13b=function(e,t,r,n){for(var a=0,o=0;o<t;o++)a+=0|e[o],r[2*o]=8191&a,a>>>=13,r[2*o+1]=8191&a,a>>>=13;for(o=2*t;o<n;++o)r[o]=0;i(0===a),i((-8192&a)==0)},b.prototype.stub=function(e){for(var t=Array(e),r=0;r<e;r++)t[r]=0;return t},b.prototype.mulp=function(e,t,r){var i=2*this.guessLen13b(e.length,t.length),n=this.makeRBT(i),a=this.stub(i),o=Array(i),s=Array(i),c=Array(i),l=Array(i),u=Array(i),d=Array(i),f=r.words;f.length=i,this.convert13b(e.words,e.length,o,i),this.convert13b(t.words,t.length,l,i),this.transform(o,a,s,c,i,n),this.transform(l,a,u,d,i,n);for(var h=0;h<i;h++){var p=s[h]*u[h]-c[h]*d[h];c[h]=s[h]*d[h]+c[h]*u[h],s[h]=p}return this.conjugate(s,c,i),this.transform(s,c,f,a,i,n),this.conjugate(f,a,i),this.normalize13b(f,i),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},a.prototype.mul=function(e){var t=new a(null);return t.words=Array(this.length+e.length),this.mulTo(e,t)},a.prototype.mulf=function(e){var t=new a(null);return t.words=Array(this.length+e.length),g(this,e,t)},a.prototype.imul=function(e){return this.clone().mulTo(e,this)},a.prototype.imuln=function(e){i("number"==typeof e),i(e<67108864);for(var t=0,r=0;r<this.length;r++){var n=(0|this.words[r])*e,a=(67108863&n)+(67108863&t);t>>=26,t+=(n/67108864|0)+(a>>>26),this.words[r]=67108863&a}return 0!==t&&(this.words[r]=t,this.length++),this},a.prototype.muln=function(e){return this.clone().imuln(e)},a.prototype.sqr=function(){return this.mul(this)},a.prototype.isqr=function(){return this.imul(this.clone())},a.prototype.pow=function(e){var t=function(e){for(var t=Array(e.bitLength()),r=0;r<t.length;r++){var i=r/26|0,n=r%26;t[r]=(e.words[i]&1<<n)>>>n}return t}(e);if(0===t.length)return new a(1);for(var r=this,i=0;i<t.length&&0===t[i];i++,r=r.sqr());if(++i<t.length)for(var n=r.sqr();i<t.length;i++,n=n.sqr())0!==t[i]&&(r=r.mul(n));return r},a.prototype.iushln=function(e){i("number"==typeof e&&e>=0);var t,r=e%26,n=(e-r)/26,a=67108863>>>26-r<<26-r;if(0!==r){var o=0;for(t=0;t<this.length;t++){var s=this.words[t]&a,c=(0|this.words[t])-s<<r;this.words[t]=c|o,o=s>>>26-r}o&&(this.words[t]=o,this.length++)}if(0!==n){for(t=this.length-1;t>=0;t--)this.words[t+n]=this.words[t];for(t=0;t<n;t++)this.words[t]=0;this.length+=n}return this.strip()},a.prototype.ishln=function(e){return i(0===this.negative),this.iushln(e)},a.prototype.iushrn=function(e,t,r){i("number"==typeof e&&e>=0),n=t?(t-t%26)/26:0;var n,a=e%26,o=Math.min((e-a)/26,this.length),s=67108863^67108863>>>a<<a;if(n-=o,n=Math.max(0,n),r){for(var c=0;c<o;c++)r.words[c]=this.words[c];r.length=o}if(0===o);else if(this.length>o)for(this.length-=o,c=0;c<this.length;c++)this.words[c]=this.words[c+o];else this.words[0]=0,this.length=1;var l=0;for(c=this.length-1;c>=0&&(0!==l||c>=n);c--){var u=0|this.words[c];this.words[c]=l<<26-a|u>>>a,l=u&s}return r&&0!==l&&(r.words[r.length++]=l),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},a.prototype.ishrn=function(e,t,r){return i(0===this.negative),this.iushrn(e,t,r)},a.prototype.shln=function(e){return this.clone().ishln(e)},a.prototype.ushln=function(e){return this.clone().iushln(e)},a.prototype.shrn=function(e){return this.clone().ishrn(e)},a.prototype.ushrn=function(e){return this.clone().iushrn(e)},a.prototype.testn=function(e){i("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;return!(this.length<=r)&&!!(this.words[r]&1<<t)},a.prototype.imaskn=function(e){i("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;return(i(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)?this:(0!==t&&r++,this.length=Math.min(r,this.length),0!==t&&(this.words[this.length-1]&=67108863^67108863>>>t<<t),this.strip())},a.prototype.maskn=function(e){return this.clone().imaskn(e)},a.prototype.iaddn=function(e){return(i("number"==typeof e),i(e<67108864),e<0)?this.isubn(-e):0!==this.negative?(1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0):(this.negative=0,this.isubn(e),this.negative=1),this):this._iaddn(e)},a.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},a.prototype.isubn=function(e){if(i("number"==typeof e),i(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},a.prototype.addn=function(e){return this.clone().iaddn(e)},a.prototype.subn=function(e){return this.clone().isubn(e)},a.prototype.iabs=function(){return this.negative=0,this},a.prototype.abs=function(){return this.clone().iabs()},a.prototype._ishlnsubmul=function(e,t,r){var n,a,o=e.length+r;this._expand(o);var s=0;for(n=0;n<e.length;n++){a=(0|this.words[n+r])+s;var c=(0|e.words[n])*t;a-=67108863&c,s=(a>>26)-(c/67108864|0),this.words[n+r]=67108863&a}for(;n<this.length-r;n++)s=(a=(0|this.words[n+r])+s)>>26,this.words[n+r]=67108863&a;if(0===s)return this.strip();for(i(-1===s),s=0,n=0;n<this.length;n++)s=(a=-(0|this.words[n])+s)>>26,this.words[n]=67108863&a;return this.negative=1,this.strip()},a.prototype._wordDiv=function(e,t){var r,i=this.length-e.length,n=this.clone(),o=e,s=0|o.words[o.length-1];0!=(i=26-this._countBits(s))&&(o=o.ushln(i),n.iushln(i),s=0|o.words[o.length-1]);var c=n.length-o.length;if("mod"!==t){(r=new a(null)).length=c+1,r.words=Array(r.length);for(var l=0;l<r.length;l++)r.words[l]=0}var u=n.clone()._ishlnsubmul(o,1,c);0===u.negative&&(n=u,r&&(r.words[c]=1));for(var d=c-1;d>=0;d--){var f=(0|n.words[o.length+d])*67108864+(0|n.words[o.length+d-1]);for(f=Math.min(f/s|0,67108863),n._ishlnsubmul(o,f,d);0!==n.negative;)f--,n.negative=0,n._ishlnsubmul(o,1,d),n.isZero()||(n.negative^=1);r&&(r.words[d]=f)}return r&&r.strip(),n.strip(),"div"!==t&&0!==i&&n.iushrn(i),{div:r||null,mod:n}},a.prototype.divmod=function(e,t,r){var n,o,s;return(i(!e.isZero()),this.isZero())?{div:new a(0),mod:new a(0)}:0!==this.negative&&0===e.negative?(s=this.neg().divmod(e,t),"mod"!==t&&(n=s.div.neg()),"div"!==t&&(o=s.mod.neg(),r&&0!==o.negative&&o.iadd(e)),{div:n,mod:o}):0===this.negative&&0!==e.negative?(s=this.divmod(e.neg(),t),"mod"!==t&&(n=s.div.neg()),{div:n,mod:s.mod}):(this.negative&e.negative)!=0?(s=this.neg().divmod(e.neg(),t),"div"!==t&&(o=s.mod.neg(),r&&0!==o.negative&&o.isub(e)),{div:s.div,mod:o}):e.length>this.length||0>this.cmp(e)?{div:new a(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new a(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new a(this.modn(e.words[0]))}:this._wordDiv(e,t)},a.prototype.div=function(e){return this.divmod(e,"div",!1).div},a.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},a.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},a.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,i=e.ushrn(1),n=e.andln(1),a=r.cmp(i);return a<0||1===n&&0===a?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},a.prototype.modn=function(e){i(e<=67108863);for(var t=67108864%e,r=0,n=this.length-1;n>=0;n--)r=(t*r+(0|this.words[n]))%e;return r},a.prototype.idivn=function(e){i(e<=67108863);for(var t=0,r=this.length-1;r>=0;r--){var n=(0|this.words[r])+67108864*t;this.words[r]=n/e|0,t=n%e}return this.strip()},a.prototype.divn=function(e){return this.clone().idivn(e)},a.prototype.egcd=function(e){i(0===e.negative),i(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var n=new a(1),o=new a(0),s=new a(0),c=new a(1),l=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++l;for(var u=r.clone(),d=t.clone();!t.isZero();){for(var f=0,h=1;(t.words[0]&h)==0&&f<26;++f,h<<=1);if(f>0)for(t.iushrn(f);f-- >0;)(n.isOdd()||o.isOdd())&&(n.iadd(u),o.isub(d)),n.iushrn(1),o.iushrn(1);for(var p=0,g=1;(r.words[0]&g)==0&&p<26;++p,g<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||c.isOdd())&&(s.iadd(u),c.isub(d)),s.iushrn(1),c.iushrn(1);t.cmp(r)>=0?(t.isub(r),n.isub(s),o.isub(c)):(r.isub(t),s.isub(n),c.isub(o))}return{a:s,b:c,gcd:r.iushln(l)}},a.prototype._invmp=function(e){i(0===e.negative),i(!e.isZero());var t,r=this,n=e.clone();r=0!==r.negative?r.umod(e):r.clone();for(var o=new a(1),s=new a(0),c=n.clone();r.cmpn(1)>0&&n.cmpn(1)>0;){for(var l=0,u=1;(r.words[0]&u)==0&&l<26;++l,u<<=1);if(l>0)for(r.iushrn(l);l-- >0;)o.isOdd()&&o.iadd(c),o.iushrn(1);for(var d=0,f=1;(n.words[0]&f)==0&&d<26;++d,f<<=1);if(d>0)for(n.iushrn(d);d-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);r.cmp(n)>=0?(r.isub(n),o.isub(s)):(n.isub(r),s.isub(o))}return 0>(t=0===r.cmpn(1)?o:s).cmpn(0)&&t.iadd(e),t},a.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var i=0;t.isEven()&&r.isEven();i++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var n=t.cmp(r);if(n<0){var a=t;t=r,r=a}else if(0===n||0===r.cmpn(1))break;t.isub(r)}return r.iushln(i)},a.prototype.invm=function(e){return this.egcd(e).a.umod(e)},a.prototype.isEven=function(){return(1&this.words[0])==0},a.prototype.isOdd=function(){return(1&this.words[0])==1},a.prototype.andln=function(e){return this.words[0]&e},a.prototype.bincn=function(e){i("number"==typeof e);var t=e%26,r=(e-t)/26,n=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=n,this;for(var a=n,o=r;0!==a&&o<this.length;o++){var s=0|this.words[o];s+=a,a=s>>>26,s&=67108863,this.words[o]=s}return 0!==a&&(this.words[o]=a,this.length++),this},a.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},a.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return -1;if(0===this.negative&&r)return 1;if(this.strip(),this.length>1)t=1;else{r&&(e=-e),i(e<=67108863,"Number is too big");var n=0|this.words[0];t=n===e?0:n<e?-1:1}return 0!==this.negative?0|-t:t},a.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return -1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},a.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return -1;for(var t=0,r=this.length-1;r>=0;r--){var i=0|this.words[r],n=0|e.words[r];if(i!==n){i<n?t=-1:i>n&&(t=1);break}}return t},a.prototype.gtn=function(e){return 1===this.cmpn(e)},a.prototype.gt=function(e){return 1===this.cmp(e)},a.prototype.gten=function(e){return this.cmpn(e)>=0},a.prototype.gte=function(e){return this.cmp(e)>=0},a.prototype.ltn=function(e){return -1===this.cmpn(e)},a.prototype.lt=function(e){return -1===this.cmp(e)},a.prototype.lten=function(e){return 0>=this.cmpn(e)},a.prototype.lte=function(e){return 0>=this.cmp(e)},a.prototype.eqn=function(e){return 0===this.cmpn(e)},a.prototype.eq=function(e){return 0===this.cmp(e)},a.red=function(e){return new C(e)},a.prototype.toRed=function(e){return i(!this.red,"Already a number in reduction context"),i(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},a.prototype.fromRed=function(){return i(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},a.prototype._forceRed=function(e){return this.red=e,this},a.prototype.forceRed=function(e){return i(!this.red,"Already a number in reduction context"),this._forceRed(e)},a.prototype.redAdd=function(e){return i(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},a.prototype.redIAdd=function(e){return i(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},a.prototype.redSub=function(e){return i(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},a.prototype.redISub=function(e){return i(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},a.prototype.redShl=function(e){return i(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},a.prototype.redMul=function(e){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},a.prototype.redIMul=function(e){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},a.prototype.redSqr=function(){return i(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},a.prototype.redISqr=function(){return i(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},a.prototype.redSqrt=function(){return i(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},a.prototype.redInvm=function(){return i(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},a.prototype.redNeg=function(){return i(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},a.prototype.redPow=function(e){return i(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var m={k256:null,p224:null,p192:null,p25519:null};function v(e,t){this.name=e,this.p=new a(t,16),this.n=this.p.bitLength(),this.k=new a(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function y(){v.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function w(){v.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function x(){v.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function _(){v.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function C(e){if("string"==typeof e){var t=a._prime(e);this.m=t.p,this.prime=t}else i(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function E(e){C.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new a(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}v.prototype._tmp=function(){var e=new a(null);return e.words=Array(Math.ceil(this.n/13)),e},v.prototype.ireduce=function(e){var t,r=e;do this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength();while(t>this.n);var i=t<this.n?-1:r.ucmp(this.p);return 0===i?(r.words[0]=0,r.length=1):i>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},v.prototype.split=function(e,t){e.iushrn(this.n,0,t)},v.prototype.imulK=function(e){return e.imul(this.k)},n(y,v),y.prototype.split=function(e,t){for(var r=Math.min(e.length,9),i=0;i<r;i++)t.words[i]=e.words[i];if(t.length=r,e.length<=9){e.words[0]=0,e.length=1;return}var n=e.words[9];for(i=10,t.words[t.length++]=4194303&n;i<e.length;i++){var a=0|e.words[i];e.words[i-10]=(4194303&a)<<4|n>>>22,n=a}n>>>=22,e.words[i-10]=n,0===n&&e.length>10?e.length-=10:e.length-=9},y.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var i=0|e.words[r];t+=977*i,e.words[r]=67108863&t,t=64*i+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},n(w,v),n(x,v),n(_,v),_.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var i=(0|e.words[r])*19+t,n=67108863&i;i>>>=26,e.words[r]=n,t=i}return 0!==t&&(e.words[e.length++]=t),e},a._prime=function(e){var t;if(m[e])return m[e];if("k256"===e)t=new y;else if("p224"===e)t=new w;else if("p192"===e)t=new x;else if("p25519"===e)t=new _;else throw Error("Unknown prime "+e);return m[e]=t,t},C.prototype._verify1=function(e){i(0===e.negative,"red works only with positives"),i(e.red,"red works only with red numbers")},C.prototype._verify2=function(e,t){i((e.negative|t.negative)==0,"red works only with positives"),i(e.red&&e.red===t.red,"red works only with red numbers")},C.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},C.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},C.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},C.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},C.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return 0>r.cmpn(0)&&r.iadd(this.m),r._forceRed(this)},C.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return 0>r.cmpn(0)&&r.iadd(this.m),r},C.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},C.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},C.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},C.prototype.isqr=function(e){return this.imul(e,e.clone())},C.prototype.sqr=function(e){return this.mul(e,e)},C.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(i(t%2==1),3===t){var r=this.m.add(new a(1)).iushrn(2);return this.pow(e,r)}for(var n=this.m.subn(1),o=0;!n.isZero()&&0===n.andln(1);)o++,n.iushrn(1);i(!n.isZero());var s=new a(1).toRed(this),c=s.redNeg(),l=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new a(2*u*u).toRed(this);0!==this.pow(u,l).cmp(c);)u.redIAdd(c);for(var d=this.pow(u,n),f=this.pow(e,n.addn(1).iushrn(1)),h=this.pow(e,n),p=o;0!==h.cmp(s);){for(var g=h,b=0;0!==g.cmp(s);b++)g=g.redSqr();i(b<p);var m=this.pow(d,new a(1).iushln(p-b-1));f=f.redMul(m),d=m.redSqr(),h=h.redMul(d),p=b}return f},C.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},C.prototype.pow=function(e,t){if(t.isZero())return new a(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=Array(16);r[0]=new a(1).toRed(this),r[1]=e;for(var i=2;i<r.length;i++)r[i]=this.mul(r[i-1],e);var n=r[0],o=0,s=0,c=t.bitLength()%26;for(0===c&&(c=26),i=t.length-1;i>=0;i--){for(var l=t.words[i],u=c-1;u>=0;u--){var d=l>>u&1;if(n!==r[0]&&(n=this.sqr(n)),0===d&&0===o){s=0;continue}o<<=1,o|=d,(4==++s||0===i&&0===u)&&(n=this.mul(n,r[o]),s=0,o=0)}c=26}return n},C.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},C.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},a.mont=function(e){return new E(e)},n(E,C),E.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},E.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},E.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),i=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),n=r.isub(i).iushrn(this.shift),a=n;return n.cmp(this.m)>=0?a=n.isub(this.m):0>n.cmpn(0)&&(a=n.iadd(this.m)),a._forceRed(this)},E.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new a(0)._forceRed(this);var r=e.mul(t),i=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),n=r.isub(i).iushrn(this.shift),o=n;return n.cmp(this.m)>=0?o=n.isub(this.m):0>n.cmpn(0)&&(o=n.iadd(this.m)),o._forceRed(this)},E.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e=r.nmd(e),this)},76640:function(e,t,r){var i;function n(e){this.rand=e}if(e.exports=function(e){return i||(i=new n(null)),i.generate(e)},e.exports.Rand=n,n.prototype.generate=function(e){return this._rand(e)},n.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(n.prototype._rand=function(){throw Error("Not implemented yet")});else try{var a=r(81388);if("function"!=typeof a.randomBytes)throw Error("Not supported");n.prototype._rand=function(e){return a.randomBytes(e)}}catch(e){}},5438:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let i=r(65772),n=r(95113),a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),i=o(r),n=i.write(e,t);return n!==r&&(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(L(e,Uint8Array)){let t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(L(e,ArrayBuffer)||e&&L(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(L(e,SharedArrayBuffer)||e&&L(e.buffer,SharedArrayBuffer)))return f(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return s.from(i,t,r);let n=function(e){var t;if(s.isBuffer(e)){let t=0|h(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?o(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return l(e),o(e<0?0:0|h(e))}function d(e){let t=e.length<0?0:0|h(e.length),r=o(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function f(e,t,r){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),i}function h(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||L(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(n)return i?-1:D(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=j[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}(this,t,r);case"base64":var a,o;return a=t,o=r,0===a&&o===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(a,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let i=e.slice(t,r),n="";for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function b(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}function m(e,t,r,i,n){var a;if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(a=r=+r)!=a&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return -1;r=e.length-1}else if(r<0){if(!n)return -1;r=0}if("string"==typeof t&&(t=s.from(t,i)),s.isBuffer(t))return 0===t.length?-1:v(e,t,r,i,n);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,i,n);throw TypeError("val must be string, number or Buffer")}function v(e,t,r,i,n){let a,o=1,s=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;o=2,s/=2,c/=2,r/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(n){let i=-1;for(a=r;a<s;a++)if(l(e,a)===l(t,-1===i?0:a-i)){if(-1===i&&(i=a),a-i+1===c)return i*o}else -1!==i&&(a-=a-i),i=-1}else for(r+c>s&&(r=s-c),a=r;a>=0;a--){let r=!0;for(let i=0;i<c;i++)if(l(e,a+i)!==l(t,i)){r=!1;break}if(r)return a}return -1}function y(e,t,r){r=Math.min(e.length,r);let i=[],n=t;for(;n<r;){let t=e[n],a=null,o=t>239?4:t>223?3:t>191?2:1;if(n+o<=r){let r,i,s,c;switch(o){case 1:t<128&&(a=t);break;case 2:(192&(r=e[n+1]))==128&&(c=(31&t)<<6|63&r)>127&&(a=c);break;case 3:r=e[n+1],i=e[n+2],(192&r)==128&&(192&i)==128&&(c=(15&t)<<12|(63&r)<<6|63&i)>2047&&(c<55296||c>57343)&&(a=c);break;case 4:r=e[n+1],i=e[n+2],s=e[n+3],(192&r)==128&&(192&i)==128&&(192&s)==128&&(c=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&s)>65535&&c<1114112&&(a=c)}}null===a?(a=65533,o=1):a>65535&&(a-=65536,i.push(a>>>10&1023|55296),a=56320|1023&a),i.push(a),n+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return r}(i)}function w(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,i,n,a){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<a)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function _(e,t,r,i,n){P(t,i,n,e,r,7);let a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function C(e,t,r,i,n){P(t,i,n,e,r,7);let a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function E(e,t,r,i,n,a){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,i,a){return t=+t,r>>>=0,a||E(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}function k(e,t,r,i,a){return t=+t,r>>>=0,a||E(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}t.lW=s,t.h2=50,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(l(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(L(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),L(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,a=Math.min(r,i);n<a;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let i=s.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(L(t,Uint8Array))n+t.length>i.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else if(s.isBuffer(t))t.copy(i,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return i},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},a&&(s.prototype[a]=s.prototype.inspect),s.prototype.compare=function(e,t,r,i,n){if(L(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,n>>>=0,this===e)return 0;let a=n-i,o=r-t,c=Math.min(a,o),l=this.slice(i,n),u=e.slice(t,r);for(let e=0;e<c;++e)if(l[e]!==u[e]){a=l[e],o=u[e];break}return a<o?-1:o<a?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},s.prototype.write=function(e,t,r,i){var n,a,o,s,c,l,u,d;if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let h=!1;for(;;)switch(i){case"hex":return function(e,t,r,i){let n;r=Number(r)||0;let a=e.length-r;i?(i=Number(i))>a&&(i=a):i=a;let o=t.length;for(i>o/2&&(i=o/2),n=0;n<i;++n){let i=parseInt(t.substr(2*n,2),16);if(i!=i)break;e[r+n]=i}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,a=r,$(D(e,this.length-n),this,n,a);case"ascii":case"latin1":case"binary":return o=t,s=r,$(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,s);case"base64":return c=t,l=r,$(N(e),this,c,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,$(function(e,t){let r,i;let n=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)i=(r=e.charCodeAt(a))>>8,n.push(r%256),n.push(i);return n}(e,this.length-u),this,u,d);default:if(h)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),h=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let i=this[e],n=1,a=0;for(;++a<t&&(n*=256);)i+=this[e+a]*n;return i},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||w(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||w(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||w(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||w(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||w(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=U(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+16777216*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(i)+(BigInt(n)<<BigInt(32))}),s.prototype.readBigUInt64BE=U(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let i=16777216*t+65536*this[++e]+256*this[++e]+this[++e],n=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let i=this[e],n=1,a=0;for(;++a<t&&(n*=256);)i+=this[e+a]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let i=t,n=1,a=this[e+--i];for(;i>0&&(n*=256);)a+=this[e+--i]*n;return a>=(n*=128)&&(a-=Math.pow(2,8*t)),a},s.prototype.readInt8=function(e,t){return(e>>>=0,t||w(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||w(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||w(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||w(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||w(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=U(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=U(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||w(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||w(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||w(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||w(e,8,this.length),n.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,e,t,r,i,0)}let n=1,a=0;for(this[t]=255&e;++a<r&&(n*=256);)this[t+a]=e/n&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,e,t,r,i,0)}let n=r-1,a=1;for(this[t+n]=255&e;--n>=0&&(a*=256);)this[t+n]=e/a&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=U(function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=U(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,e,t,r,i-1,-i)}let n=0,a=1,o=0;for(this[t]=255&e;++n<r&&(a*=256);)e<0&&0===o&&0!==this[t+n-1]&&(o=1),this[t+n]=(e/a>>0)-o&255;return t+r},s.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,e,t,r,i-1,-i)}let n=r-1,a=1,o=0;for(this[t+n]=255&e;--n>=0&&(a*=256);)e<0&&0===o&&0!==this[t+n+1]&&(o=1),this[t+n]=(e/a>>0)-o&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=U(function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=U(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return k(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return k(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,i){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);let n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},s.prototype.fill=function(e,t,r,i){let n;if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let a=s.isBuffer(e)?e:s.from(e,i),o=a.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=a[n%o]}return this};let A={};function M(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function T(e){let t="",r=e.length,i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function P(e,t,r,i,n,a){if(e>r||e<t){let i;let n="bigint"==typeof t?"n":"";throw i=a>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(a+1)*8}${n}`:`>= -(2${n} ** ${(a+1)*8-1}${n}) and < 2 ** ${(a+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new A.ERR_OUT_OF_RANGE("value",i,e)}I(n,"offset"),(void 0===i[n]||void 0===i[n+a])&&O(n,i.length-(a+1))}function I(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function O(e,t,r){if(Math.floor(e)!==e)throw I(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}M("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),M("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),M("ERR_OUT_OF_RANGE",function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?n=T(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=T(n)),n+="n"),i+=` It must be ${t}. Received ${n}`},RangeError);let R=/[^+/0-9A-Za-z-_]/g;function D(e,t){let r;t=t||1/0;let i=e.length,n=null,a=[];for(let o=0;o<i;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!n){if(r>56319||o+1===i){(t-=3)>-1&&a.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&a.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return a}function N(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(R,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function $(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function L(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let j=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();function U(e){return"undefined"==typeof BigInt?B:e}function B(){throw Error("BigInt not supported")}},54079:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",n="week",a="month",o="quarter",s="year",c="date",l="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},h="en",p={};p[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var g="$isDayjsObject",b=function(e){return e instanceof w||!(!e||!e[g])},m=function e(t,r,i){var n;if(!t)return h;if("string"==typeof t){var a=t.toLowerCase();p[a]&&(n=a),r&&(p[a]=r,n=a);var o=t.split("-");if(!n&&o.length>1)return e(o[0])}else{var s=t.name;p[s]=t,n=s}return!i&&n&&(h=n),n||!i&&h},v=function(e,t){if(b(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},y={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,a),o=r-n<0,s=t.clone().add(i+(o?-1:1),a);return+(-(i+(r-n)/(o?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:a,y:s,w:n,d:"day",D:c,h:i,m:r,s:t,ms:e,Q:o})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=m,y.i=b,y.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function f(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var n=i[2]-1||0,a=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,o){var l=this,u=!!y.u(o)||o,d=y.p(e),f=function(e,t){var r=y.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?r:r.endOf("day")},h=function(e,t){return y.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},p=this.$W,g=this.$M,b=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case s:return u?f(1,0):f(31,11);case a:return u?f(1,g):f(0,g+1);case n:var v=this.$locale().weekStart||0,w=(p<v?p+7:p)-v;return f(u?b-w:b+(6-w),g);case"day":case c:return h(m+"Hours",0);case i:return h(m+"Minutes",1);case r:return h(m+"Seconds",2);case t:return h(m+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(n,o){var l,u=y.p(n),d="set"+(this.$u?"UTC":""),f=((l={}).day=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[s]=d+"FullYear",l[i]=d+"Hours",l[r]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[u],h="day"===u?this.$D+(o-this.$W):o;if(u===a||u===s){var p=this.clone().set(c,1);p.$d[f](h),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,o){var c,l=this;e=Number(e);var u=y.p(o),d=function(t){var r=v(l);return y.w(r.date(r.date()+Math.round(t*e)),l)};if(u===a)return this.set(a,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var f=((c={})[r]=6e4,c[i]=36e5,c[t]=1e3,c)[u]||1,h=this.$d.getTime()+e*f;return y.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),a=this.$H,o=this.$m,s=this.$M,c=r.weekdays,u=r.months,f=r.meridiem,h=function(e,r,n,a){return e&&(e[r]||e(t,i))||n[r].slice(0,a)},p=function(e){return y.s(a%12||12,e,"0")},g=f||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return h(r.monthsShort,s,u,3);case"MMMM":return h(u,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(r.weekdaysMin,t.$W,c,2);case"ddd":return h(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(a);case"HH":return y.s(a,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return y.s(o,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,c,l){var u,d=this,f=y.p(c),h=v(e),p=(h.utcOffset()-this.utcOffset())*6e4,g=this-h,b=function(){return y.m(d,h)};switch(f){case s:u=b()/12;break;case a:u=b();break;case o:u=b()/3;break;case n:u=(g-p)/6048e5;break;case"day":u=(g-p)/864e5;break;case i:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return l?u:y.a(u)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=m(e,t,!0);return i&&(r.$L=i),r},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),x=w.prototype;return v.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",s],["$D",c]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,w,v),e.$i=!0),v},v.locale=m,v.isDayjs=b,v.unix=function(e){return v(1e3*e)},v.en=p[h],v.Ls=p,v.p={},v},e.exports=t()},35820:function(e){var t;t=function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}}},e.exports=t()},11926:function(e){var t;t=function(){return function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,a,o,s){for(var c,l,u,d=a.$locale().relativeTime||n,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=f.length,p=0;p<h;p+=1){var g=f[p];g.d&&(c=o?r(t).diff(a,g.d,!0):a.diff(t,g.d,!0));var b=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,b<=g.r||!g.r){b<=1&&p>0&&(g=f[p-1]);var m=d[g.l];s&&(b=s(""+b)),l="string"==typeof m?m.replace("%d",b):m(b,i,g.l,u);break}}if(i)return l;var v=u?d.future:d.past;return"function"==typeof v?v(l):v.replace("%s",l)},i.to=function(e,t){return a(e,t,this,!0)},i.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(o(this),e)},i.fromNow=function(e){return this.from(o(this),e)}}},e.exports=t()},72307:function(e){var t;t=function(){return function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},e.exports=t()},55388:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),i=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var a=function(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(r)||[],i=1;i<t.length;i++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var i=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],e(i),e(n))})(t,i).join("")).match(r)||[];return e}}(n[0]);a!==n[0]&&(t[n[0]]=a)}n=i.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var c=o[s];e=e.replace(RegExp(c,"g"),t[c])}return e}(e)}}},43048:function(e,t,r){"use strict";r.d(t,{qY:function(){return h}});var i=r(47973),n=function(e,t,r){if(r||2==arguments.length)for(var i,n=0,a=t.length;n<a;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},a=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},o=function(e){this.version=e,this.type="node",this.name="node",this.os=i.platform},s=function(e,t,r,i){this.name=e,this.version=t,this.os=r,this.bot=i,this.type="bot-device"},c=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},u=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,d=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],f=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function h(e){return e?p(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!=typeof navigator?p(navigator.userAgent):void 0!==i&&i.version?new o(i.version.slice(1)):null}function p(e){var t=""!==e&&d.reduce(function(t,r){var i=r[0],n=r[1];if(t)return t;var a=n.exec(e);return!!a&&[i,a]},!1);if(!t)return null;var r=t[0],i=t[1];if("searchbot"===r)return new c;var o=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);o?o.length<3&&(o=n(n([],o,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-o.length),!0)):o=[];var l=o.join("."),h=function(e){for(var t=0,r=f.length;t<r;t++){var i=f[t],n=i[0];if(i[1].exec(e))return n}return null}(e),p=u.exec(e);return p&&p[1]?new s(r,l,h,p[1]):new a(r,l,h)}},59853:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,a,o,s,c,l,u,d={},f={};f[r]=0;var h=t.PriorityQueue.make();for(h.push(r,0);!h.empty();)for(o in a=(n=h.pop()).value,s=n.cost,c=e[a]||{})c.hasOwnProperty(o)&&(l=s+c[o],u=f[o],(void 0===f[o]||u>l)&&(f[o]=l,h.push(o,l),d[o]=a));if(void 0!==i&&void 0===f[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},98982:function(e,t,r){"use strict";t.version=r(29069).i8,t.utils=r(70250),t.rand=r(76640),t.curve=r(12349),t.curves=r(49162),t.ec=r(43940),t.eddsa=r(61695)},30557:function(e,t,r){"use strict";var i=r(98799),n=r(70250),a=n.getNAF,o=n.getJSF,s=n.assert;function c(e,t){this.type=e,this.p=new i(t.p,16),this.red=t.prime?i.red(t.prime):i.mont(this.p),this.zero=new i(0).toRed(this.red),this.one=new i(1).toRed(this.red),this.two=new i(2).toRed(this.red),this.n=t.n&&new i(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=[,,,,],this._wnafT2=[,,,,],this._wnafT3=[,,,,],this._wnafT4=[,,,,],this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function l(e,t){this.curve=e,this.type=t,this.precomputed=null}e.exports=c,c.prototype.point=function(){throw Error("Not implemented")},c.prototype.validate=function(){throw Error("Not implemented")},c.prototype._fixedNafMul=function(e,t){s(e.precomputed);var r,i,n=e._getDoubles(),o=a(t,1,this._bitLength),c=(1<<n.step+1)-(n.step%2==0?2:1);c/=3;var l=[];for(r=0;r<o.length;r+=n.step){i=0;for(var u=r+n.step-1;u>=r;u--)i=(i<<1)+o[u];l.push(i)}for(var d=this.jpoint(null,null,null),f=this.jpoint(null,null,null),h=c;h>0;h--){for(r=0;r<l.length;r++)(i=l[r])===h?f=f.mixedAdd(n.points[r]):i===-h&&(f=f.mixedAdd(n.points[r].neg()));d=d.add(f)}return d.toP()},c.prototype._wnafMul=function(e,t){var r=4,i=e._getNAFPoints(r);r=i.wnd;for(var n=i.points,o=a(t,r,this._bitLength),c=this.jpoint(null,null,null),l=o.length-1;l>=0;l--){for(var u=0;l>=0&&0===o[l];l--)u++;if(l>=0&&u++,c=c.dblp(u),l<0)break;var d=o[l];s(0!==d),c="affine"===e.type?d>0?c.mixedAdd(n[d-1>>1]):c.mixedAdd(n[-d-1>>1].neg()):d>0?c.add(n[d-1>>1]):c.add(n[-d-1>>1].neg())}return"affine"===e.type?c.toP():c},c.prototype._wnafMulAdd=function(e,t,r,i,n){var s,c,l,u=this._wnafT1,d=this._wnafT2,f=this._wnafT3,h=0;for(s=0;s<i;s++){var p=(l=t[s])._getNAFPoints(e);u[s]=p.wnd,d[s]=p.points}for(s=i-1;s>=1;s-=2){var g=s-1,b=s;if(1!==u[g]||1!==u[b]){f[g]=a(r[g],u[g],this._bitLength),f[b]=a(r[b],u[b],this._bitLength),h=Math.max(f[g].length,h),h=Math.max(f[b].length,h);continue}var m=[t[g],null,null,t[b]];0===t[g].y.cmp(t[b].y)?(m[1]=t[g].add(t[b]),m[2]=t[g].toJ().mixedAdd(t[b].neg())):0===t[g].y.cmp(t[b].y.redNeg())?(m[1]=t[g].toJ().mixedAdd(t[b]),m[2]=t[g].add(t[b].neg())):(m[1]=t[g].toJ().mixedAdd(t[b]),m[2]=t[g].toJ().mixedAdd(t[b].neg()));var v=[-3,-1,-5,-7,0,7,5,1,3],y=o(r[g],r[b]);for(c=0,h=Math.max(y[0].length,h),f[g]=Array(h),f[b]=Array(h);c<h;c++){var w=0|y[0][c],x=0|y[1][c];f[g][c]=v[(w+1)*3+(x+1)],f[b][c]=0,d[g]=m}}var _=this.jpoint(null,null,null),C=this._wnafT4;for(s=h;s>=0;s--){for(var E=0;s>=0;){var S=!0;for(c=0;c<i;c++)C[c]=0|f[c][s],0!==C[c]&&(S=!1);if(!S)break;E++,s--}if(s>=0&&E++,_=_.dblp(E),s<0)break;for(c=0;c<i;c++){var k=C[c];0!==k&&(k>0?l=d[c][k-1>>1]:k<0&&(l=d[c][-k-1>>1].neg()),_="affine"===l.type?_.mixedAdd(l):_.add(l))}}for(s=0;s<i;s++)d[s]=null;return n?_:_.toP()},c.BasePoint=l,l.prototype.eq=function(){throw Error("Not implemented")},l.prototype.validate=function(){return this.curve.validate(this)},c.prototype.decodePoint=function(e,t){e=n.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?s(e[e.length-1]%2==0):7===e[0]&&s(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw Error("Unknown point format")},l.prototype.encodeCompressed=function(e){return this.encode(e,!0)},l.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},l.prototype.encode=function(e,t){return n.encode(this._encode(t),e)},l.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},l.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},l.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],i=this,n=0;n<t;n+=e){for(var a=0;a<e;a++)i=i.dbl();r.push(i)}return{step:e,points:r}},l.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,i=1===r?null:this.dbl(),n=1;n<r;n++)t[n]=t[n-1].add(i);return{wnd:e,points:t}},l.prototype._getBeta=function(){return null},l.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}},77576:function(e,t,r){"use strict";var i=r(70250),n=r(98799),a=r(16701),o=r(30557),s=i.assert;function c(e){this.twisted=(0|e.a)!=1,this.mOneA=this.twisted&&(0|e.a)==-1,this.extended=this.mOneA,o.call(this,"edwards",e),this.a=new n(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new n(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new n(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),s(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=(0|e.c)==1}function l(e,t,r,i,a){o.BasePoint.call(this,e,"projective"),null===t&&null===r&&null===i?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new n(t,16),this.y=new n(r,16),this.z=i?new n(i,16):this.curve.one,this.t=a&&new n(a,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,!this.curve.extended||this.t||(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}a(c,o),e.exports=c,c.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},c.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},c.prototype.jpoint=function(e,t,r,i){return this.point(e,t,r,i)},c.prototype.pointFromX=function(e,t){(e=new n(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),i=this.c2.redSub(this.a.redMul(r)),a=this.one.redSub(this.c2.redMul(this.d).redMul(r)),o=i.redMul(a.redInvm()),s=o.redSqrt();if(0!==s.redSqr().redSub(o).cmp(this.zero))throw Error("invalid point");var c=s.fromRed().isOdd();return(t&&!c||!t&&c)&&(s=s.redNeg()),this.point(e,s)},c.prototype.pointFromY=function(e,t){(e=new n(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),i=r.redSub(this.c2),a=r.redMul(this.d).redMul(this.c2).redSub(this.a),o=i.redMul(a.redInvm());if(0===o.cmp(this.zero)){if(!t)return this.point(this.zero,e);throw Error("invalid point")}var s=o.redSqrt();if(0!==s.redSqr().redSub(o).cmp(this.zero))throw Error("invalid point");return s.fromRed().isOdd()!==t&&(s=s.redNeg()),this.point(s,e)},c.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),r=e.y.redSqr(),i=t.redMul(this.a).redAdd(r),n=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));return 0===i.cmp(n)},a(l,o.BasePoint),c.prototype.pointFromJSON=function(e){return l.fromJSON(this,e)},c.prototype.point=function(e,t,r,i){return new l(this,e,t,r,i)},l.fromJSON=function(e,t){return new l(e,t[0],t[1],t[2])},l.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},l.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},l.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var i=this.curve._mulA(e),n=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),a=i.redAdd(t),o=a.redSub(r),s=i.redSub(t),c=n.redMul(o),l=a.redMul(s),u=n.redMul(s),d=o.redMul(a);return this.curve.point(c,l,d,u)},l.prototype._projDbl=function(){var e,t,r,i,n,a,o=this.x.redAdd(this.y).redSqr(),s=this.x.redSqr(),c=this.y.redSqr();if(this.curve.twisted){var l=(i=this.curve._mulA(s)).redAdd(c);this.zOne?(e=o.redSub(s).redSub(c).redMul(l.redSub(this.curve.two)),t=l.redMul(i.redSub(c)),r=l.redSqr().redSub(l).redSub(l)):(n=this.z.redSqr(),a=l.redSub(n).redISub(n),e=o.redSub(s).redISub(c).redMul(a),t=l.redMul(i.redSub(c)),r=l.redMul(a))}else i=s.redAdd(c),n=this.curve._mulC(this.z).redSqr(),a=i.redSub(n).redSub(n),e=this.curve._mulC(o.redISub(i)).redMul(a),t=this.curve._mulC(i).redMul(s.redISub(c)),r=i.redMul(a);return this.curve.point(e,t,r)},l.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},l.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),r=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),i=this.t.redMul(this.curve.dd).redMul(e.t),n=this.z.redMul(e.z.redAdd(e.z)),a=r.redSub(t),o=n.redSub(i),s=n.redAdd(i),c=r.redAdd(t),l=a.redMul(o),u=s.redMul(c),d=a.redMul(c),f=o.redMul(s);return this.curve.point(l,u,f,d)},l.prototype._projAdd=function(e){var t,r,i=this.z.redMul(e.z),n=i.redSqr(),a=this.x.redMul(e.x),o=this.y.redMul(e.y),s=this.curve.d.redMul(a).redMul(o),c=n.redSub(s),l=n.redAdd(s),u=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(o),d=i.redMul(c).redMul(u);return this.curve.twisted?(t=i.redMul(l).redMul(o.redSub(this.curve._mulA(a))),r=c.redMul(l)):(t=i.redMul(l).redMul(o.redSub(a)),r=this.curve._mulC(c).redMul(l)),this.curve.point(d,t,r)},l.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},l.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},l.prototype.mulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!1)},l.prototype.jmulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!0)},l.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},l.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},l.prototype.getX=function(){return this.normalize(),this.x.fromRed()},l.prototype.getY=function(){return this.normalize(),this.y.fromRed()},l.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},l.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var r=e.clone(),i=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(i),0===this.x.cmp(t))return!0}},l.prototype.toP=l.prototype.normalize,l.prototype.mixedAdd=l.prototype.add},12349:function(e,t,r){"use strict";t.base=r(30557),t.short=r(87751),t.mont=r(27187),t.edwards=r(77576)},27187:function(e,t,r){"use strict";var i=r(98799),n=r(16701),a=r(30557),o=r(70250);function s(e){a.call(this,"mont",e),this.a=new i(e.a,16).toRed(this.red),this.b=new i(e.b,16).toRed(this.red),this.i4=new i(4).toRed(this.red).redInvm(),this.two=new i(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function c(e,t,r){a.BasePoint.call(this,e,"projective"),null===t&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new i(t,16),this.z=new i(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}n(s,a),e.exports=s,s.prototype.validate=function(e){var t=e.normalize().x,r=t.redSqr(),i=r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);return 0===i.redSqrt().redSqr().cmp(i)},n(c,a.BasePoint),s.prototype.decodePoint=function(e,t){return this.point(o.toArray(e,t),1)},s.prototype.point=function(e,t){return new c(this,e,t)},s.prototype.pointFromJSON=function(e){return c.fromJSON(this,e)},c.prototype.precompute=function(){},c.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},c.fromJSON=function(e,t){return new c(e,t[0],t[1]||e.one)},c.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},c.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},c.prototype.dbl=function(){var e=this.x.redAdd(this.z).redSqr(),t=this.x.redSub(this.z).redSqr(),r=e.redSub(t),i=e.redMul(t),n=r.redMul(t.redAdd(this.curve.a24.redMul(r)));return this.curve.point(i,n)},c.prototype.add=function(){throw Error("Not supported on Montgomery curve")},c.prototype.diffAdd=function(e,t){var r=this.x.redAdd(this.z),i=this.x.redSub(this.z),n=e.x.redAdd(e.z),a=e.x.redSub(e.z).redMul(r),o=n.redMul(i),s=t.z.redMul(a.redAdd(o).redSqr()),c=t.x.redMul(a.redISub(o).redSqr());return this.curve.point(s,c)},c.prototype.mul=function(e){for(var t=e.clone(),r=this,i=this.curve.point(null,null),n=[];0!==t.cmpn(0);t.iushrn(1))n.push(t.andln(1));for(var a=n.length-1;a>=0;a--)0===n[a]?(r=r.diffAdd(i,this),i=i.dbl()):(i=r.diffAdd(i,this),r=r.dbl());return i},c.prototype.mulAdd=function(){throw Error("Not supported on Montgomery curve")},c.prototype.jumlAdd=function(){throw Error("Not supported on Montgomery curve")},c.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},c.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},c.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},87751:function(e,t,r){"use strict";var i=r(70250),n=r(98799),a=r(16701),o=r(30557),s=i.assert;function c(e){o.call(this,"short",e),this.a=new n(e.a,16).toRed(this.red),this.b=new n(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=[,,,,],this._endoWnafT2=[,,,,]}function l(e,t,r,i){o.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new n(t,16),this.y=new n(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function u(e,t,r,i){o.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===i?(this.x=this.curve.one,this.y=this.curve.one,this.z=new n(0)):(this.x=new n(t,16),this.y=new n(r,16),this.z=new n(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}a(c,o),e.exports=c,c.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){if(e.beta)t=new n(e.beta,16).toRed(this.red);else{var t,r,i,a=this._getEndoRoots(this.p);t=(t=0>a[0].cmp(a[1])?a[0]:a[1]).toRed(this.red)}if(e.lambda)r=new n(e.lambda,16);else{var o=this._getEndoRoots(this.n);0===this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))?r=o[0]:(r=o[1],s(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return i=e.basis?e.basis.map(function(e){return{a:new n(e.a,16),b:new n(e.b,16)}}):this._getEndoBasis(r),{beta:t,lambda:r,basis:i}}},c.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:n.mont(e),r=new n(2).toRed(t).redInvm(),i=r.redNeg(),a=new n(3).toRed(t).redNeg().redSqrt().redMul(r);return[i.redAdd(a).fromRed(),i.redSub(a).fromRed()]},c.prototype._getEndoBasis=function(e){for(var t,r,i,a,o,s,c,l,u,d=this.n.ushrn(Math.floor(this.n.bitLength()/2)),f=e,h=this.n.clone(),p=new n(1),g=new n(0),b=new n(0),m=new n(1),v=0;0!==f.cmpn(0);){var y=h.div(f);l=h.sub(y.mul(f)),u=b.sub(y.mul(p));var w=m.sub(y.mul(g));if(!i&&0>l.cmp(d))t=c.neg(),r=p,i=l.neg(),a=u;else if(i&&2==++v)break;c=l,h=f,f=l,b=p,p=u,m=g,g=w}o=l.neg(),s=u;var x=i.sqr().add(a.sqr());return o.sqr().add(s.sqr()).cmp(x)>=0&&(o=t,s=r),i.negative&&(i=i.neg(),a=a.neg()),o.negative&&(o=o.neg(),s=s.neg()),[{a:i,b:a},{a:o,b:s}]},c.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],i=t[1],n=i.b.mul(e).divRound(this.n),a=r.b.neg().mul(e).divRound(this.n),o=n.mul(r.a),s=a.mul(i.a),c=n.mul(r.b),l=a.mul(i.b);return{k1:e.sub(o).sub(s),k2:c.add(l).neg()}},c.prototype.pointFromX=function(e,t){(e=new n(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),i=r.redSqrt();if(0!==i.redSqr().redSub(r).cmp(this.zero))throw Error("invalid point");var a=i.fromRed().isOdd();return(t&&!a||!t&&a)&&(i=i.redNeg()),this.point(e,i)},c.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,i=this.a.redMul(t),n=t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);return 0===r.redSqr().redISub(n).cmpn(0)},c.prototype._endoWnafMulAdd=function(e,t,r){for(var i=this._endoWnafT1,n=this._endoWnafT2,a=0;a<e.length;a++){var o=this._endoSplit(t[a]),s=e[a],c=s._getBeta();o.k1.negative&&(o.k1.ineg(),s=s.neg(!0)),o.k2.negative&&(o.k2.ineg(),c=c.neg(!0)),i[2*a]=s,i[2*a+1]=c,n[2*a]=o.k1,n[2*a+1]=o.k2}for(var l=this._wnafMulAdd(1,i,n,2*a,r),u=0;u<2*a;u++)i[u]=null,n[u]=null;return l},a(l,o.BasePoint),c.prototype.point=function(e,t,r){return new l(this,e,t,r)},c.prototype.pointFromJSON=function(e,t){return l.fromJSON(this,e,t)},l.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,i=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(i)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(i)}}}return t}},l.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},l.fromJSON=function(e,t,r){"string"==typeof t&&(t=JSON.parse(t));var i=e.point(t[0],t[1],r);if(!t[2])return i;function n(t){return e.point(t[0],t[1],r)}var a=t[2];return i.precomputed={beta:null,doubles:a.doubles&&{step:a.doubles.step,points:[i].concat(a.doubles.points.map(n))},naf:a.naf&&{wnd:a.naf.wnd,points:[i].concat(a.naf.points.map(n))}},i},l.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},l.prototype.isInfinity=function(){return this.inf},l.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e)||0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),i=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,i)},l.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),i=e.redInvm(),n=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),a=n.redSqr().redISub(this.x.redAdd(this.x)),o=n.redMul(this.x.redSub(a)).redISub(this.y);return this.curve.point(a,o)},l.prototype.getX=function(){return this.x.fromRed()},l.prototype.getY=function(){return this.y.fromRed()},l.prototype.mul=function(e){return(e=new n(e,16),this.isInfinity())?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},l.prototype.mulAdd=function(e,t,r){var i=[this,t],n=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,n):this.curve._wnafMulAdd(1,i,n,2)},l.prototype.jmulAdd=function(e,t,r){var i=[this,t],n=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,n,!0):this.curve._wnafMulAdd(1,i,n,2,!0)},l.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},l.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,i=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(i)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(i)}}}return t},l.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},a(u,o.BasePoint),c.prototype.jpoint=function(e,t,r){return new u(this,e,t,r)},u.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),i=this.y.redMul(t).redMul(e);return this.curve.point(r,i)},u.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},u.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),i=this.x.redMul(t),n=e.x.redMul(r),a=this.y.redMul(t.redMul(e.z)),o=e.y.redMul(r.redMul(this.z)),s=i.redSub(n),c=a.redSub(o);if(0===s.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=s.redSqr(),u=l.redMul(s),d=i.redMul(l),f=c.redSqr().redIAdd(u).redISub(d).redISub(d),h=c.redMul(d.redISub(f)).redISub(a.redMul(u)),p=this.z.redMul(e.z).redMul(s);return this.curve.jpoint(f,h,p)},u.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,i=e.x.redMul(t),n=this.y,a=e.y.redMul(t).redMul(this.z),o=r.redSub(i),s=n.redSub(a);if(0===o.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=o.redSqr(),l=c.redMul(o),u=r.redMul(c),d=s.redSqr().redIAdd(l).redISub(u).redISub(u),f=s.redMul(u.redISub(d)).redISub(n.redMul(l)),h=this.z.redMul(o);return this.curve.jpoint(d,f,h)},u.prototype.dblp=function(e){if(0===e||this.isInfinity())return this;if(!e)return this.dbl();if(this.curve.zeroA||this.curve.threeA){var t,r=this;for(t=0;t<e;t++)r=r.dbl();return r}var i=this.curve.a,n=this.curve.tinv,a=this.x,o=this.y,s=this.z,c=s.redSqr().redSqr(),l=o.redAdd(o);for(t=0;t<e;t++){var u=a.redSqr(),d=l.redSqr(),f=d.redSqr(),h=u.redAdd(u).redIAdd(u).redIAdd(i.redMul(c)),p=a.redMul(d),g=h.redSqr().redISub(p.redAdd(p)),b=p.redISub(g),m=h.redMul(b);m=m.redIAdd(m).redISub(f);var v=l.redMul(s);t+1<e&&(c=c.redMul(f)),a=g,s=v,l=m}return this.curve.jpoint(a,l.redMul(n),s)},u.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},u.prototype._zeroDbl=function(){if(this.zOne){var e,t,r,i=this.x.redSqr(),n=this.y.redSqr(),a=n.redSqr(),o=this.x.redAdd(n).redSqr().redISub(i).redISub(a);o=o.redIAdd(o);var s=i.redAdd(i).redIAdd(i),c=s.redSqr().redISub(o).redISub(o),l=a.redIAdd(a);l=(l=l.redIAdd(l)).redIAdd(l),e=c,t=s.redMul(o.redISub(c)).redISub(l),r=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),d=this.y.redSqr(),f=d.redSqr(),h=this.x.redAdd(d).redSqr().redISub(u).redISub(f);h=h.redIAdd(h);var p=u.redAdd(u).redIAdd(u),g=p.redSqr(),b=f.redIAdd(f);b=(b=b.redIAdd(b)).redIAdd(b),e=g.redISub(h).redISub(h),t=p.redMul(h.redISub(e)).redISub(b),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},u.prototype._threeDbl=function(){if(this.zOne){var e,t,r,i=this.x.redSqr(),n=this.y.redSqr(),a=n.redSqr(),o=this.x.redAdd(n).redSqr().redISub(i).redISub(a);o=o.redIAdd(o);var s=i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),c=s.redSqr().redISub(o).redISub(o);e=c;var l=a.redIAdd(a);l=(l=l.redIAdd(l)).redIAdd(l),t=s.redMul(o.redISub(c)).redISub(l),r=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),d=this.y.redSqr(),f=this.x.redMul(d),h=this.x.redSub(u).redMul(this.x.redAdd(u));h=h.redAdd(h).redIAdd(h);var p=f.redIAdd(f),g=(p=p.redIAdd(p)).redAdd(p);e=h.redSqr().redISub(g),r=this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);var b=d.redSqr();b=(b=(b=b.redIAdd(b)).redIAdd(b)).redIAdd(b),t=h.redMul(p.redISub(e)).redISub(b)}return this.curve.jpoint(e,t,r)},u.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,i=this.z,n=i.redSqr().redSqr(),a=t.redSqr(),o=r.redSqr(),s=a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n)),c=t.redAdd(t),l=(c=c.redIAdd(c)).redMul(o),u=s.redSqr().redISub(l.redAdd(l)),d=l.redISub(u),f=o.redSqr();f=(f=(f=f.redIAdd(f)).redIAdd(f)).redIAdd(f);var h=s.redMul(d).redISub(f),p=r.redAdd(r).redMul(i);return this.curve.jpoint(u,h,p)},u.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),i=t.redSqr(),n=e.redAdd(e).redIAdd(e),a=n.redSqr(),o=this.x.redAdd(t).redSqr().redISub(e).redISub(i),s=(o=(o=(o=o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(a)).redSqr(),c=i.redIAdd(i);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var l=n.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(c),u=t.redMul(l);u=(u=u.redIAdd(u)).redIAdd(u);var d=this.x.redMul(s).redISub(u);d=(d=d.redIAdd(d)).redIAdd(d);var f=this.y.redMul(l.redMul(c.redISub(l)).redISub(o.redMul(s)));f=(f=(f=f.redIAdd(f)).redIAdd(f)).redIAdd(f);var h=this.z.redAdd(o).redSqr().redISub(r).redISub(s);return this.curve.jpoint(d,f,h)},u.prototype.mul=function(e,t){return e=new n(e,t),this.curve._wnafMul(this,e)},u.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var i=t.redMul(this.z),n=r.redMul(e.z);return 0===this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)},u.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var i=e.clone(),n=this.curve.redN.redMul(t);;){if(i.iadd(this.curve.n),i.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(n),0===this.x.cmp(r))return!0}},u.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},u.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},49162:function(e,t,r){"use strict";var i,n=r(18141),a=r(12349),o=r(70250).assert;function s(e){"short"===e.type?this.curve=new a.short(e):"edwards"===e.type?this.curve=new a.edwards(e):this.curve=new a.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,o(this.g.validate(),"Invalid curve"),o(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function c(e,r){Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){var i=new s(r);return Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:i}),i}})}t.PresetCurve=s,c("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:n.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),c("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:n.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),c("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:n.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),c("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:n.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),c("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:n.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),c("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:n.sha256,gRed:!1,g:["9"]}),c("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:n.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{i=r(50710)}catch(e){i=void 0}c("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:n.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",i]})},43940:function(e,t,r){"use strict";var i=r(98799),n=r(56412),a=r(70250),o=r(49162),s=r(76640),c=a.assert,l=r(64841),u=r(71079);function d(e){if(!(this instanceof d))return new d(e);"string"==typeof e&&(c(Object.prototype.hasOwnProperty.call(o,e),"Unknown curve "+e),e=o[e]),e instanceof o.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}e.exports=d,d.prototype.keyPair=function(e){return new l(this,e)},d.prototype.keyFromPrivate=function(e,t){return l.fromPrivate(this,e,t)},d.prototype.keyFromPublic=function(e,t){return l.fromPublic(this,e,t)},d.prototype.genKeyPair=function(e){e||(e={});for(var t=new n({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||s(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),a=this.n.sub(new i(2));;){var o=new i(t.generate(r));if(!(o.cmp(a)>0))return o.iaddn(1),this.keyFromPrivate(o)}},d.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return(r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0)?e.sub(this.n):e},d.prototype.sign=function(e,t,r,a){"object"==typeof r&&(a=r,r=null),a||(a={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new i(e,16));for(var o=this.n.byteLength(),s=t.getPrivate().toArray("be",o),c=e.toArray("be",o),l=new n({hash:this.hash,entropy:s,nonce:c,pers:a.pers,persEnc:a.persEnc||"utf8"}),d=this.n.sub(new i(1)),f=0;;f++){var h=a.k?a.k(f):new i(l.generate(this.n.byteLength()));if(!(0>=(h=this._truncateToN(h,!0)).cmpn(1)||h.cmp(d)>=0)){var p=this.g.mul(h);if(!p.isInfinity()){var g=p.getX(),b=g.umod(this.n);if(0!==b.cmpn(0)){var m=h.invm(this.n).mul(b.mul(t.getPrivate()).iadd(e));if(0!==(m=m.umod(this.n)).cmpn(0)){var v=(p.getY().isOdd()?1:0)|(0!==g.cmp(b)?2:0);return a.canonical&&m.cmp(this.nh)>0&&(m=this.n.sub(m),v^=1),new u({r:b,s:m,recoveryParam:v})}}}}}},d.prototype.verify=function(e,t,r,n){e=this._truncateToN(new i(e,16)),r=this.keyFromPublic(r,n);var a,o=(t=new u(t,"hex")).r,s=t.s;if(0>o.cmpn(1)||o.cmp(this.n)>=0||0>s.cmpn(1)||s.cmp(this.n)>=0)return!1;var c=s.invm(this.n),l=c.mul(e).umod(this.n),d=c.mul(o).umod(this.n);return this.curve._maxwellTrick?!(a=this.g.jmulAdd(l,r.getPublic(),d)).isInfinity()&&a.eqXToP(o):!(a=this.g.mulAdd(l,r.getPublic(),d)).isInfinity()&&0===a.getX().umod(this.n).cmp(o)},d.prototype.recoverPubKey=function(e,t,r,n){c((3&r)===r,"The recovery param is more than two bits"),t=new u(t,n);var a=this.n,o=new i(e),s=t.r,l=t.s,d=1&r,f=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&f)throw Error("Unable to find sencond key candinate");s=f?this.curve.pointFromX(s.add(this.curve.n),d):this.curve.pointFromX(s,d);var h=t.r.invm(a),p=a.sub(o).mul(h).umod(a),g=l.mul(h).umod(a);return this.g.mulAdd(p,s,g)},d.prototype.getKeyRecoveryParam=function(e,t,r,i){if(null!==(t=new u(t,i)).recoveryParam)return t.recoveryParam;for(var n,a=0;a<4;a++){try{n=this.recoverPubKey(e,t,a)}catch(e){continue}if(n.eq(r))return a}throw Error("Unable to find valid recovery factor")}},64841:function(e,t,r){"use strict";var i=r(98799),n=r(70250).assert;function a(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}e.exports=a,a.fromPublic=function(e,t,r){return t instanceof a?t:new a(e,{pub:t,pubEnc:r})},a.fromPrivate=function(e,t,r){return t instanceof a?t:new a(e,{priv:t,privEnc:r})},a.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},a.prototype.getPublic=function(e,t){return("string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t)?this.pub.encode(t,e):this.pub},a.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},a.prototype._importPrivate=function(e,t){this.priv=new i(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},a.prototype._importPublic=function(e,t){if(e.x||e.y){"mont"===this.ec.curve.type?n(e.x,"Need x coordinate"):("short"===this.ec.curve.type||"edwards"===this.ec.curve.type)&&n(e.x&&e.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(e.x,e.y);return}this.pub=this.ec.curve.decodePoint(e,t)},a.prototype.derive=function(e){return e.validate()||n(e.validate(),"public point not validated"),e.mul(this.priv).getX()},a.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},a.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},a.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},71079:function(e,t,r){"use strict";var i=r(98799),n=r(70250),a=n.assert;function o(e,t){if(e instanceof o)return e;this._importDER(e,t)||(a(e.r&&e.s,"Signature without r or s"),this.r=new i(e.r,16),this.s=new i(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function s(){this.place=0}function c(e,t){var r=e[t.place++];if(!(128&r))return r;var i=15&r;if(0===i||i>4||0===e[t.place])return!1;for(var n=0,a=0,o=t.place;a<i;a++,o++)n<<=8,n|=e[o],n>>>=0;return!(n<=127)&&(t.place=o,n)}function l(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function u(e,t){if(t<128){e.push(t);return}var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}e.exports=o,o.prototype._importDER=function(e,t){e=n.toArray(e,t);var r=new s;if(48!==e[r.place++])return!1;var a=c(e,r);if(!1===a||a+r.place!==e.length||2!==e[r.place++])return!1;var o=c(e,r);if(!1===o||(128&e[r.place])!=0)return!1;var l=e.slice(r.place,o+r.place);if(r.place+=o,2!==e[r.place++])return!1;var u=c(e,r);if(!1===u||e.length!==u+r.place||(128&e[r.place])!=0)return!1;var d=e.slice(r.place,u+r.place);if(0===l[0]){if(!(128&l[1]))return!1;l=l.slice(1)}if(0===d[0]){if(!(128&d[1]))return!1;d=d.slice(1)}return this.r=new i(l),this.s=new i(d),this.recoveryParam=null,!0},o.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=l(t),r=l(r);!r[0]&&!(128&r[1]);)r=r.slice(1);var i=[2];u(i,t.length),(i=i.concat(t)).push(2),u(i,r.length);var a=i.concat(r),o=[48];return u(o,a.length),o=o.concat(a),n.encode(o,e)}},61695:function(e,t,r){"use strict";var i=r(18141),n=r(49162),a=r(70250),o=a.assert,s=a.parseBytes,c=r(60936),l=r(6347);function u(e){if(o("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof u))return new u(e);e=n[e].curve,this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=i.sha512}e.exports=u,u.prototype.sign=function(e,t){e=s(e);var r=this.keyFromSecret(t),i=this.hashInt(r.messagePrefix(),e),n=this.g.mul(i),a=this.encodePoint(n),o=this.hashInt(a,r.pubBytes(),e).mul(r.priv()),c=i.add(o).umod(this.curve.n);return this.makeSignature({R:n,S:c,Rencoded:a})},u.prototype.verify=function(e,t,r){if(e=s(e),(t=this.makeSignature(t)).S().gte(t.eddsa.curve.n)||t.S().isNeg())return!1;var i=this.keyFromPublic(r),n=this.hashInt(t.Rencoded(),i.pubBytes(),e),a=this.g.mul(t.S());return t.R().add(i.pub().mul(n)).eq(a)},u.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t]);return a.intFromLE(e.digest()).umod(this.curve.n)},u.prototype.keyFromPublic=function(e){return c.fromPublic(this,e)},u.prototype.keyFromSecret=function(e){return c.fromSecret(this,e)},u.prototype.makeSignature=function(e){return e instanceof l?e:new l(this,e)},u.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength);return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},u.prototype.decodePoint=function(e){var t=(e=a.parseBytes(e)).length-1,r=e.slice(0,t).concat(-129&e[t]),i=(128&e[t])!=0,n=a.intFromLE(r);return this.curve.pointFromY(n,i)},u.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},u.prototype.decodeInt=function(e){return a.intFromLE(e)},u.prototype.isPoint=function(e){return e instanceof this.pointClass}},60936:function(e,t,r){"use strict";var i=r(70250),n=i.assert,a=i.parseBytes,o=i.cachedProperty;function s(e,t){this.eddsa=e,this._secret=a(t.secret),e.isPoint(t.pub)?this._pub=t.pub:this._pubBytes=a(t.pub)}s.fromPublic=function(e,t){return t instanceof s?t:new s(e,{pub:t})},s.fromSecret=function(e,t){return t instanceof s?t:new s(e,{secret:t})},s.prototype.secret=function(){return this._secret},o(s,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),o(s,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),o(s,"privBytes",function(){var e=this.eddsa,t=this.hash(),r=e.encodingLength-1,i=t.slice(0,e.encodingLength);return i[0]&=248,i[r]&=127,i[r]|=64,i}),o(s,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),o(s,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),o(s,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),s.prototype.sign=function(e){return n(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},s.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},s.prototype.getSecret=function(e){return n(this._secret,"KeyPair is public only"),i.encode(this.secret(),e)},s.prototype.getPublic=function(e){return i.encode(this.pubBytes(),e)},e.exports=s},6347:function(e,t,r){"use strict";var i=r(98799),n=r(70250),a=n.assert,o=n.cachedProperty,s=n.parseBytes;function c(e,t){this.eddsa=e,"object"!=typeof t&&(t=s(t)),Array.isArray(t)&&(a(t.length===2*e.encodingLength,"Signature has invalid size"),t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),a(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof i&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}o(c,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),o(c,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),o(c,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),o(c,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),c.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},c.prototype.toHex=function(){return n.encode(this.toBytes(),"hex").toUpperCase()},e.exports=c},50710:function(e){e.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},70250:function(e,t,r){"use strict";var i=r(98799),n=r(59238),a=r(46821);t.assert=n,t.toArray=a.toArray,t.zero2=a.zero2,t.toHex=a.toHex,t.encode=a.encode,t.getNAF=function(e,t,r){var i=Array(Math.max(e.bitLength(),r)+1);for(o=0;o<i.length;o+=1)i[o]=0;var n=1<<t+1,a=e.clone();for(o=0;o<i.length;o++){var o,s,c=a.andln(n-1);a.isOdd()?(s=c>(n>>1)-1?(n>>1)-c:c,a.isubn(s)):s=0,i[o]=s,a.iushrn(1)}return i},t.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var i=0,n=0;e.cmpn(-i)>0||t.cmpn(-n)>0;){var a,o,s,c=e.andln(3)+i&3,l=t.andln(3)+n&3;3===c&&(c=-1),3===l&&(l=-1),o=(1&c)==0?0:(3==(a=e.andln(7)+i&7)||5===a)&&2===l?-c:c,r[0].push(o),s=(1&l)==0?0:(3==(a=t.andln(7)+n&7)||5===a)&&2===c?-l:l,r[1].push(s),2*i===o+1&&(i=1-i),2*n===s+1&&(n=1-n),e.iushrn(1),t.iushrn(1)}return r},t.cachedProperty=function(e,t,r){var i="_"+t;e.prototype[t]=function(){return void 0!==this[i]?this[i]:this[i]=r.call(this)}},t.parseBytes=function(e){return"string"==typeof e?t.toArray(e,"hex"):e},t.intFromLE=function(e){return new i(e,"hex","le")}},18732:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var a=e.charCodeAt(i+1);a>=56320&&a<=57343&&(n=(n-55296)*1024+a-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},97630:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function a(e,t,i,a,o){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,a||e,o),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,a=i.length,o=Array(a);n<a;n++)o[n]=i[n].fn;return o},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,a),!0;case 6:return u.fn.call(u.context,t,i,n,a,o),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var f,h=u.length;for(l=0;l<h;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,i);break;case 4:u[l].fn.call(u[l].context,t,i,n);break;default:if(!c)for(f=1,c=Array(d-1);f<d;f++)c[f-1]=arguments[f];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,r){return a(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return a(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return o(this,a),this;var s=this._events[a];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||o(this,a);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||n&&!s[c].once||i&&s[c].context!==i)&&l.push(s[c]);l.length?this._events[a]=1===l.length?l[0]:l:o(this,a)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&o(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},47879:function(e){"use strict";e.exports=function(e,t){for(var r={},i=Object.keys(e),n=Array.isArray(t),a=0;a<i.length;a++){var o=i[a],s=e[o];(n?-1!==t.indexOf(o):t(o,s,e))&&(r[o]=s)}return r}},18141:function(e,t,r){t.utils=r(33729),t.common=r(37689),t.sha=r(52292),t.ripemd=r(9447),t.hmac=r(43285),t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160},37689:function(e,t,r){"use strict";var i=r(33729),n=r(59238);function a(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}t.BlockHash=a,a.prototype.update=function(e,t){if(e=i.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=i.join32(e,0,e.length-r,this.endian);for(var n=0;n<e.length;n+=this._delta32)this._update(e,n,n+this._delta32)}return this},a.prototype.digest=function(e){return this.update(this._pad()),n(null===this.pending),this._digest(e)},a.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,i=Array(r+this.padLength);i[0]=128;for(var n=1;n<r;n++)i[n]=0;if(e<<=3,"big"===this.endian){for(var a=8;a<this.padLength;a++)i[n++]=0;i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=e>>>24&255,i[n++]=e>>>16&255,i[n++]=e>>>8&255,i[n++]=255&e}else for(a=8,i[n++]=255&e,i[n++]=e>>>8&255,i[n++]=e>>>16&255,i[n++]=e>>>24&255,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0;a<this.padLength;a++)i[n++]=0;return i}},43285:function(e,t,r){"use strict";var i=r(33729),n=r(59238);function a(e,t,r){if(!(this instanceof a))return new a(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(i.toArray(t,r))}e.exports=a,a.prototype._init=function(e){e.length>this.blockSize&&(e=new this.Hash().update(e).digest()),n(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(t=0,this.inner=new this.Hash().update(e);t<e.length;t++)e[t]^=106;this.outer=new this.Hash().update(e)},a.prototype.update=function(e,t){return this.inner.update(e,t),this},a.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},9447:function(e,t,r){"use strict";var i=r(33729),n=r(37689),a=i.rotl32,o=i.sum32,s=i.sum32_3,c=i.sum32_4,l=n.BlockHash;function u(){if(!(this instanceof u))return new u;l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function d(e,t,r,i){return e<=15?t^r^i:e<=31?t&r|~t&i:e<=47?(t|~r)^i:e<=63?t&i|r&~i:t^(r|~i)}i.inherits(u,l),t.ripemd160=u,u.blockSize=512,u.outSize=160,u.hmacStrength=192,u.padLength=64,u.prototype._update=function(e,t){for(var r=this.h[0],i=this.h[1],n=this.h[2],l=this.h[3],u=this.h[4],b=r,m=i,v=n,y=l,w=u,x=0;x<80;x++){var _,C,E=o(a(c(r,d(x,i,n,l),e[f[x]+t],(_=x)<=15?0:_<=31?1518500249:_<=47?1859775393:_<=63?2400959708:2840853838),p[x]),u);r=u,u=l,l=a(n,10),n=i,i=E,E=o(a(c(b,d(79-x,m,v,y),e[h[x]+t],(C=x)<=15?1352829926:C<=31?1548603684:C<=47?1836072691:C<=63?2053994217:0),g[x]),w),b=w,w=y,y=a(v,10),v=m,m=E}E=s(this.h[1],n,y),this.h[1]=s(this.h[2],l,w),this.h[2]=s(this.h[3],u,b),this.h[3]=s(this.h[4],r,m),this.h[4]=s(this.h[0],i,v),this.h[0]=E},u.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"little"):i.split32(this.h,"little")};var f=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],h=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],p=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],g=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},52292:function(e,t,r){"use strict";t.sha1=r(97003),t.sha224=r(95818),t.sha256=r(669),t.sha384=r(27094),t.sha512=r(36723)},97003:function(e,t,r){"use strict";var i=r(33729),n=r(37689),a=r(86229),o=i.rotl32,s=i.sum32,c=i.sum32_5,l=a.ft_1,u=n.BlockHash,d=[1518500249,1859775393,2400959708,3395469782];function f(){if(!(this instanceof f))return new f;u.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=Array(80)}i.inherits(f,u),e.exports=f,f.blockSize=512,f.outSize=160,f.hmacStrength=80,f.padLength=64,f.prototype._update=function(e,t){for(var r=this.W,i=0;i<16;i++)r[i]=e[t+i];for(;i<r.length;i++)r[i]=o(r[i-3]^r[i-8]^r[i-14]^r[i-16],1);var n=this.h[0],a=this.h[1],u=this.h[2],f=this.h[3],h=this.h[4];for(i=0;i<r.length;i++){var p=~~(i/20),g=c(o(n,5),l(p,a,u,f),h,r[i],d[p]);h=f,f=u,u=o(a,30),a=n,n=g}this.h[0]=s(this.h[0],n),this.h[1]=s(this.h[1],a),this.h[2]=s(this.h[2],u),this.h[3]=s(this.h[3],f),this.h[4]=s(this.h[4],h)},f.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},95818:function(e,t,r){"use strict";var i=r(33729),n=r(669);function a(){if(!(this instanceof a))return new a;n.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}i.inherits(a,n),e.exports=a,a.blockSize=512,a.outSize=224,a.hmacStrength=192,a.padLength=64,a.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,7),"big"):i.split32(this.h.slice(0,7),"big")}},669:function(e,t,r){"use strict";var i=r(33729),n=r(37689),a=r(86229),o=r(59238),s=i.sum32,c=i.sum32_4,l=i.sum32_5,u=a.ch32,d=a.maj32,f=a.s0_256,h=a.s1_256,p=a.g0_256,g=a.g1_256,b=n.BlockHash,m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function v(){if(!(this instanceof v))return new v;b.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=m,this.W=Array(64)}i.inherits(v,b),e.exports=v,v.blockSize=512,v.outSize=256,v.hmacStrength=192,v.padLength=64,v.prototype._update=function(e,t){for(var r=this.W,i=0;i<16;i++)r[i]=e[t+i];for(;i<r.length;i++)r[i]=c(g(r[i-2]),r[i-7],p(r[i-15]),r[i-16]);var n=this.h[0],a=this.h[1],b=this.h[2],m=this.h[3],v=this.h[4],y=this.h[5],w=this.h[6],x=this.h[7];for(o(this.k.length===r.length),i=0;i<r.length;i++){var _=l(x,h(v),u(v,y,w),this.k[i],r[i]),C=s(f(n),d(n,a,b));x=w,w=y,y=v,v=s(m,_),m=b,b=a,a=n,n=s(_,C)}this.h[0]=s(this.h[0],n),this.h[1]=s(this.h[1],a),this.h[2]=s(this.h[2],b),this.h[3]=s(this.h[3],m),this.h[4]=s(this.h[4],v),this.h[5]=s(this.h[5],y),this.h[6]=s(this.h[6],w),this.h[7]=s(this.h[7],x)},v.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},27094:function(e,t,r){"use strict";var i=r(33729),n=r(36723);function a(){if(!(this instanceof a))return new a;n.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}i.inherits(a,n),e.exports=a,a.blockSize=1024,a.outSize=384,a.hmacStrength=192,a.padLength=128,a.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,12),"big"):i.split32(this.h.slice(0,12),"big")}},36723:function(e,t,r){"use strict";var i=r(33729),n=r(37689),a=r(59238),o=i.rotr64_hi,s=i.rotr64_lo,c=i.shr64_hi,l=i.shr64_lo,u=i.sum64,d=i.sum64_hi,f=i.sum64_lo,h=i.sum64_4_hi,p=i.sum64_4_lo,g=i.sum64_5_hi,b=i.sum64_5_lo,m=n.BlockHash,v=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function y(){if(!(this instanceof y))return new y;m.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=v,this.W=Array(160)}i.inherits(y,m),e.exports=y,y.blockSize=1024,y.outSize=512,y.hmacStrength=192,y.padLength=128,y.prototype._prepareBlock=function(e,t){for(var r=this.W,i=0;i<32;i++)r[i]=e[t+i];for(;i<r.length;i+=2){var n=function(e,t){var r=o(e,t,19)^o(t,e,29)^c(e,t,6);return r<0&&(r+=4294967296),r}(r[i-4],r[i-3]),a=function(e,t){var r=s(e,t,19)^s(t,e,29)^l(e,t,6);return r<0&&(r+=4294967296),r}(r[i-4],r[i-3]),u=r[i-14],d=r[i-13],f=function(e,t){var r=o(e,t,1)^o(e,t,8)^c(e,t,7);return r<0&&(r+=4294967296),r}(r[i-30],r[i-29]),g=function(e,t){var r=s(e,t,1)^s(e,t,8)^l(e,t,7);return r<0&&(r+=4294967296),r}(r[i-30],r[i-29]),b=r[i-32],m=r[i-31];r[i]=h(n,a,u,d,f,g,b,m),r[i+1]=p(n,a,u,d,f,g,b,m)}},y.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,i=this.h[0],n=this.h[1],c=this.h[2],l=this.h[3],h=this.h[4],p=this.h[5],m=this.h[6],v=this.h[7],y=this.h[8],w=this.h[9],x=this.h[10],_=this.h[11],C=this.h[12],E=this.h[13],S=this.h[14],k=this.h[15];a(this.k.length===r.length);for(var A=0;A<r.length;A+=2){var M=S,T=k,P=function(e,t){var r=o(e,t,14)^o(e,t,18)^o(t,e,9);return r<0&&(r+=4294967296),r}(y,w),I=function(e,t){var r=s(e,t,14)^s(e,t,18)^s(t,e,9);return r<0&&(r+=4294967296),r}(y,w),O=function(e,t,r,i,n){var a=e&r^~e&n;return a<0&&(a+=4294967296),a}(y,0,x,0,C,E),R=function(e,t,r,i,n,a){var o=t&i^~t&a;return o<0&&(o+=4294967296),o}(0,w,0,_,0,E),D=this.k[A],N=this.k[A+1],$=r[A],L=r[A+1],j=g(M,T,P,I,O,R,D,N,$,L),U=b(M,T,P,I,O,R,D,N,$,L);M=function(e,t){var r=o(e,t,28)^o(t,e,2)^o(t,e,7);return r<0&&(r+=4294967296),r}(i,n);var B=d(M,T=function(e,t){var r=s(e,t,28)^s(t,e,2)^s(t,e,7);return r<0&&(r+=4294967296),r}(i,n),P=function(e,t,r,i,n){var a=e&r^e&n^r&n;return a<0&&(a+=4294967296),a}(i,0,c,0,h,p),I=function(e,t,r,i,n,a){var o=t&i^t&a^i&a;return o<0&&(o+=4294967296),o}(0,n,0,l,0,p)),z=f(M,T,P,I);S=C,k=E,C=x,E=_,x=y,_=w,y=d(m,v,j,U),w=f(v,v,j,U),m=h,v=p,h=c,p=l,c=i,l=n,i=d(j,U,B,z),n=f(j,U,B,z)}u(this.h,0,i,n),u(this.h,2,c,l),u(this.h,4,h,p),u(this.h,6,m,v),u(this.h,8,y,w),u(this.h,10,x,_),u(this.h,12,C,E),u(this.h,14,S,k)},y.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},86229:function(e,t,r){"use strict";var i=r(33729).rotr32;function n(e,t,r){return e&t^e&r^t&r}t.ft_1=function(e,t,r,i){return 0===e?t&r^~t&i:1===e||3===e?t^r^i:2===e?n(t,r,i):void 0},t.ch32=function(e,t,r){return e&t^~e&r},t.maj32=n,t.p32=function(e,t,r){return e^t^r},t.s0_256=function(e){return i(e,2)^i(e,13)^i(e,22)},t.s1_256=function(e){return i(e,6)^i(e,11)^i(e,25)},t.g0_256=function(e){return i(e,7)^i(e,18)^e>>>3},t.g1_256=function(e){return i(e,17)^i(e,19)^e>>>10}},33729:function(e,t,r){"use strict";var i=r(59238),n=r(16701);function a(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function o(e){return 1===e.length?"0"+e:e}function s(e){if(7===e.length)return"0"+e;if(6===e.length)return"00"+e;if(5===e.length)return"000"+e;if(4===e.length)return"0000"+e;if(3===e.length)return"00000"+e;if(2===e.length)return"000000"+e;if(1===e.length)return"0000000"+e;else return e}t.inherits=n,t.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e){if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/ig,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var i=0,n=0;n<e.length;n++){var a,o,s=e.charCodeAt(n);s<128?r[i++]=s:(s<2048?r[i++]=s>>6|192:((a=e,o=n,(64512&a.charCodeAt(o))!=55296||o<0||o+1>=a.length?1:(64512&a.charCodeAt(o+1))!=56320)?r[i++]=s>>12|224:(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++n)),r[i++]=s>>18|240,r[i++]=s>>12&63|128),r[i++]=s>>6&63|128),r[i++]=63&s|128)}}else for(n=0;n<e.length;n++)r[n]=0|e[n];return r},t.toHex=function(e){for(var t="",r=0;r<e.length;r++)t+=o(e[r].toString(16));return t},t.htonl=a,t.toHex32=function(e,t){for(var r="",i=0;i<e.length;i++){var n=e[i];"little"===t&&(n=a(n)),r+=s(n.toString(16))}return r},t.zero2=o,t.zero8=s,t.join32=function(e,t,r,n){var a,o=r-t;i(o%4==0);for(var s=Array(o/4),c=0,l=t;c<s.length;c++,l+=4)a="big"===n?e[l]<<24|e[l+1]<<16|e[l+2]<<8|e[l+3]:e[l+3]<<24|e[l+2]<<16|e[l+1]<<8|e[l],s[c]=a>>>0;return s},t.split32=function(e,t){for(var r=Array(4*e.length),i=0,n=0;i<e.length;i++,n+=4){var a=e[i];"big"===t?(r[n]=a>>>24,r[n+1]=a>>>16&255,r[n+2]=a>>>8&255,r[n+3]=255&a):(r[n+3]=a>>>24,r[n+2]=a>>>16&255,r[n+1]=a>>>8&255,r[n]=255&a)}return r},t.rotr32=function(e,t){return e>>>t|e<<32-t},t.rotl32=function(e,t){return e<<t|e>>>32-t},t.sum32=function(e,t){return e+t>>>0},t.sum32_3=function(e,t,r){return e+t+r>>>0},t.sum32_4=function(e,t,r,i){return e+t+r+i>>>0},t.sum32_5=function(e,t,r,i,n){return e+t+r+i+n>>>0},t.sum64=function(e,t,r,i){var n=e[t],a=i+e[t+1]>>>0;e[t]=(a<i?1:0)+r+n>>>0,e[t+1]=a},t.sum64_hi=function(e,t,r,i){return(t+i>>>0<t?1:0)+e+r>>>0},t.sum64_lo=function(e,t,r,i){return t+i>>>0},t.sum64_4_hi=function(e,t,r,i,n,a,o,s){var c,l=t;return e+r+n+o+(0+((l=l+i>>>0)<t?1:0)+((l=l+a>>>0)<a?1:0)+((l=l+s>>>0)<s?1:0))>>>0},t.sum64_4_lo=function(e,t,r,i,n,a,o,s){return t+i+a+s>>>0},t.sum64_5_hi=function(e,t,r,i,n,a,o,s,c,l){var u,d=t;return e+r+n+o+c+(0+((d=d+i>>>0)<t?1:0)+((d=d+a>>>0)<a?1:0)+((d=d+s>>>0)<s?1:0)+((d=d+l>>>0)<l?1:0))>>>0},t.sum64_5_lo=function(e,t,r,i,n,a,o,s,c,l){return t+i+a+s+l>>>0},t.rotr64_hi=function(e,t,r){return(t<<32-r|e>>>r)>>>0},t.rotr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0},t.shr64_hi=function(e,t,r){return e>>>r},t.shr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0}},56412:function(e,t,r){"use strict";var i=r(18141),n=r(46821),a=r(59238);function o(e){if(!(this instanceof o))return new o(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=n.toArray(e.entropy,e.entropyEnc||"hex"),r=n.toArray(e.nonce,e.nonceEnc||"hex"),i=n.toArray(e.pers,e.persEnc||"hex");a(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}e.exports=o,o.prototype._init=function(e,t,r){var i=e.concat(t).concat(r);this.K=Array(this.outLen/8),this.V=Array(this.outLen/8);for(var n=0;n<this.V.length;n++)this.K[n]=0,this.V[n]=1;this._update(i),this._reseed=1,this.reseedInterval=281474976710656},o.prototype._hmac=function(){return new i.hmac(this.hash,this.K)},o.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},o.prototype.reseed=function(e,t,r,i){"string"!=typeof t&&(i=r,r=t,t=null),e=n.toArray(e,t),r=n.toArray(r,i),a(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},o.prototype.generate=function(e,t,r,i){if(this._reseed>this.reseedInterval)throw Error("Reseed is required");"string"!=typeof t&&(i=r,r=t,t=null),r&&(r=n.toArray(r,i||"hex"),this._update(r));for(var a=[];a.length<e;)this.V=this._hmac().update(this.V).digest(),a=a.concat(this.V);var o=a.slice(0,e);return this._update(r),this._reseed++,n.encode(o,t)}},95113:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,i,n){var a,o,s=8*n-i-1,c=(1<<s)-1,l=c>>1,u=-7,d=r?n-1:0,f=r?-1:1,h=e[t+d];for(d+=f,a=h&(1<<-u)-1,h>>=-u,u+=s;u>0;a=256*a+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=i;u>0;o=256*o+e[t+d],d+=f,u-=8);if(0===a)a=1-l;else{if(a===c)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,i),a-=l}return(h?-1:1)*o*Math.pow(2,a-i)},t.write=function(e,t,r,i,n,a){var o,s,c,l=8*a-n-1,u=(1<<l)-1,d=u>>1,f=23===n?5960464477539062e-23:0,h=i?0:a-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*Math.pow(2,1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*Math.pow(2,n),o+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,n),o=0));n>=8;e[r+h]=255&s,h+=p,s/=256,n-=8);for(o=o<<n|s,l+=n;l>0;e[r+h]=255&o,h+=p,o/=256,l-=8);e[r+h-p]|=128*g}},16701:function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}},10414:function(e,t,r){var i=0/0,n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),f=Object.prototype.toString,h=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return i;if(b(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):a.test(e)?i:+e}e.exports=function(e,t,r){var i,n,a,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(t){var r=i,a=n;return i=n=void 0,l=t,o=e.apply(a,r)}function y(e){var r=e-c,i=e-l;return void 0===c||r>=t||r<0||d&&i>=a}function w(){var e,r,i,n=g();if(y(n))return x(n);s=setTimeout(w,(e=n-c,r=n-l,i=t-e,d?p(i,a-r):i))}function x(e){return(s=void 0,f&&i)?v(e):(i=n=void 0,o)}function _(){var e,r=g(),a=y(r);if(i=arguments,n=this,c=r,a){if(void 0===s)return l=e=c,s=setTimeout(w,t),u?v(e):o;if(d)return s=setTimeout(w,t),v(c)}return void 0===s&&(s=setTimeout(w,t)),o}return t=m(t)||0,b(r)&&(u=!!r.leading,a=(d="maxWait"in r)?h(m(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),_.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=n=s=void 0},_.flush=function(){return void 0===s?o:x(g())},_}},41242:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(50026);/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:l="",children:u,iconNode:d,...f}=e;return(0,i.createElement)("svg",{ref:t,...o,width:n,height:n,stroke:r,strokeWidth:c?24*Number(s)/Number(n):s,className:a("lucide",l),...f},[...d.map(e=>{let[t,r]=e;return(0,i.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),c=(e,t)=>{let r=(0,i.forwardRef)((r,o)=>{let{className:c,...l}=r;return(0,i.createElement)(s,{ref:o,iconNode:t,className:a("lucide-".concat(n(e)),c),...l})});return r.displayName="".concat(e),r}},47831:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(41242).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},59238:function(e){function t(e,t){if(!e)throw Error(t||"Assertion failed")}e.exports=t,t.equal=function(e,t,r){if(e!=t)throw Error(r||"Assertion failed: "+e+" != "+t)}},46821:function(e,t){"use strict";function r(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",i=0;i<e.length;i++)t+=r(e[i].toString(16));return t}t.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var i=0;i<e.length;i++)r[i]=0|e[i];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/ig,"")).length%2!=0&&(e="0"+e);for(var i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(var i=0;i<e.length;i++){var n=e.charCodeAt(i),a=n>>8,o=255&n;a?r.push(a,o):r.push(o)}return r},t.zero2=r,t.toHex=i,t.encode=function(e,t){return"hex"===t?i(e):e}},42617:function(e,t,r){"use strict";var i=r(27925);Object.defineProperty(t,"__esModule",{value:!0}),t.BroadcastChannel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){var r=function(r){if(r.key===e){var i,n=JSON.parse(null!==(i=r.newValue)&&void 0!==i?i:"{}");(null==n?void 0:n.event)==="session"&&null!=n&&n.data&&t(n)}};return window.addEventListener("storage",r),function(){return window.removeEventListener("storage",r)}},post:function(t){if("undefined"!=typeof window)try{localStorage.setItem(e,JSON.stringify(c(c({},t),{},{timestamp:d()})))}catch(e){}}}},t.apiBaseUrl=u,t.fetchData=function(e,t,r){return l.apply(this,arguments)},t.now=d;var n=i(r(71182)),a=i(r(58438)),o=i(r(58887));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,a.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(){return(l=(0,o.default)(n.default.mark(function e(t,r,i){var a,o,s,l,d,f,h,p,g,b=arguments;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=(a=b.length>3&&void 0!==b[3]?b[3]:{}).ctx,l=void 0===(s=a.req)?null==o?void 0:o.req:s,d="".concat(u(r),"/").concat(t),e.prev=2,h={headers:c({"Content-Type":"application/json"},null!=l&&null!==(f=l.headers)&&void 0!==f&&f.cookie?{cookie:l.headers.cookie}:{})},null!=l&&l.body&&(h.body=JSON.stringify(l.body),h.method="POST"),e.next=7,fetch(d,h);case 7:return p=e.sent,e.next=10,p.json();case 10:if(g=e.sent,p.ok){e.next=13;break}throw g;case 13:return e.abrupt("return",Object.keys(g).length>0?g:null);case 16:return e.prev=16,e.t0=e.catch(2),i.error("CLIENT_FETCH_ERROR",{error:e.t0,url:d}),e.abrupt("return",null);case 20:case"end":return e.stop()}},e,null,[[2,16]])}))).apply(this,arguments)}function u(e){return"undefined"==typeof window?"".concat(e.baseUrlServer).concat(e.basePathServer):e.basePath}function d(){return Math.floor(Date.now()/1e3)}},57024:function(e,t,r){"use strict";var i=r(27925);Object.defineProperty(t,"__esModule",{value:!0}),t.UnsupportedStrategy=t.UnknownError=t.OAuthCallbackError=t.MissingSecret=t.MissingAuthorize=t.MissingAdapterMethods=t.MissingAdapter=t.MissingAPIRoute=t.InvalidCallbackUrl=t.AccountNotLinkedError=void 0,t.adapterErrorHandler=function(e,t){if(e)return Object.keys(e).reduce(function(r,i){return r[i]=(0,a.default)(n.default.mark(function r(){var a,o,s,c,l,u=arguments;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(r.prev=0,o=Array(a=u.length),s=0;s<a;s++)o[s]=u[s];return t.debug("adapter_".concat(i),{args:o}),c=e[i],r.next=6,c.apply(void 0,o);case 6:return r.abrupt("return",r.sent);case 9:throw r.prev=9,r.t0=r.catch(0),t.error("adapter_error_".concat(i),r.t0),(l=new p(r.t0)).name="".concat(S(i),"Error"),l;case 15:case"end":return r.stop()}},r,null,[[0,9]])})),r},{})},t.capitalize=S,t.eventsErrorHandler=function(e,t){return Object.keys(e).reduce(function(r,i){return r[i]=(0,a.default)(n.default.mark(function r(){var a,o=arguments;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=e[i],r.next=4,a.apply(void 0,o);case 4:return r.abrupt("return",r.sent);case 7:r.prev=7,r.t0=r.catch(0),t.error("".concat(E(i),"_EVENT_ERROR"),r.t0);case 10:case"end":return r.stop()}},r,null,[[0,7]])})),r},{})},t.upperSnake=E;var n=i(r(71182)),a=i(r(58887)),o=i(r(84268)),s=i(r(58438)),c=i(r(24888)),l=i(r(96098)),u=i(r(21762)),d=i(r(14145)),f=i(r(90640));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,i=(0,f.default)(e);return r=t?Reflect.construct(i,arguments,(0,f.default)(this).constructor):i.apply(this,arguments),(0,d.default)(this,r)}}var p=function(e){(0,u.default)(r,e);var t=h(r);function r(e){var i,n;return(0,c.default)(this,r),(n=t.call(this,null!==(i=null==e?void 0:e.message)&&void 0!==i?i:e)).name="UnknownError",n.code=e.code,e instanceof Error&&(n.stack=e.stack),n}return(0,l.default)(r,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),r}((0,i(r(61179)).default)(Error));t.UnknownError=p;var g=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","OAuthCallbackError"),e}return(0,l.default)(r)}(p);t.OAuthCallbackError=g;var b=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","AccountNotLinkedError"),e}return(0,l.default)(r)}(p);t.AccountNotLinkedError=b;var m=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","MissingAPIRouteError"),(0,s.default)((0,o.default)(e),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),e}return(0,l.default)(r)}(p);t.MissingAPIRoute=m;var v=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","MissingSecretError"),(0,s.default)((0,o.default)(e),"code","NO_SECRET"),e}return(0,l.default)(r)}(p);t.MissingSecret=v;var y=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","MissingAuthorizeError"),(0,s.default)((0,o.default)(e),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),e}return(0,l.default)(r)}(p);t.MissingAuthorize=y;var w=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","MissingAdapterError"),(0,s.default)((0,o.default)(e),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),e}return(0,l.default)(r)}(p);t.MissingAdapter=w;var x=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","MissingAdapterMethodsError"),(0,s.default)((0,o.default)(e),"code","MISSING_ADAPTER_METHODS_ERROR"),e}return(0,l.default)(r)}(p);t.MissingAdapterMethods=x;var _=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","UnsupportedStrategyError"),(0,s.default)((0,o.default)(e),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),e}return(0,l.default)(r)}(p);t.UnsupportedStrategy=_;var C=function(e){(0,u.default)(r,e);var t=h(r);function r(){var e;(0,c.default)(this,r);for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,o.default)(e),"name","InvalidCallbackUrl"),(0,s.default)((0,o.default)(e),"code","INVALID_CALLBACK_URL_ERROR"),e}return(0,l.default)(r)}(p);function E(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()}function S(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}t.InvalidCallbackUrl=C},43356:function(e,t,r){"use strict";var i,n,a,o,s,c=r(47973),l=r(27925),u=r(90186);Object.defineProperty(t,"__esModule",{value:!0});var d={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};t.SessionContext=void 0,t.SessionProvider=function(e){if(!T)throw Error("React Context is unavailable in Server Components");var t,r,i,n,a,o,s=e.children,c=e.basePath,l=e.refetchInterval,u=e.refetchWhenOffline;c&&(k.basePath=c);var d=void 0!==e.session;k._lastSync=d?(0,y.now)():0;var h=b.useState(function(){return d&&(k._session=e.session),e.session}),m=(0,g.default)(h,2),v=m[0],x=m[1],_=b.useState(!d),C=(0,g.default)(_,2),E=C[0],S=C[1];b.useEffect(function(){return k._getSession=(0,p.default)(f.default.mark(function e(){var t,r,i=arguments;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(i.length>0&&void 0!==i[0]?i[0]:{}).event,e.prev=1,!((r="storage"===t)||void 0===k._session)){e.next=10;break}return k._lastSync=(0,y.now)(),e.next=7,P({broadcast:!r});case 7:return k._session=e.sent,x(k._session),e.abrupt("return");case 10:if(!(!t||null===k._session||(0,y.now)()<k._lastSync)){e.next=12;break}return e.abrupt("return");case 12:return k._lastSync=(0,y.now)(),e.next=15,P();case 15:k._session=e.sent,x(k._session),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),M.error("CLIENT_SESSION_ERROR",e.t0);case 22:return e.prev=22,S(!1),e.finish(22);case 25:case"end":return e.stop()}},e,null,[[1,19,22,25]])})),k._getSession(),function(){k._lastSync=0,k._session=void 0,k._getSession=function(){}}},[]),b.useEffect(function(){var e=A.receive(function(){return k._getSession({event:"storage"})});return function(){return e()}},[]),b.useEffect(function(){var t=e.refetchOnWindowFocus,r=void 0===t||t,i=function(){r&&"visible"===document.visibilityState&&k._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",i,!1),function(){return document.removeEventListener("visibilitychange",i,!1)}},[e.refetchOnWindowFocus]);var I=(t=b.useState("undefined"!=typeof navigator&&navigator.onLine),i=(r=(0,g.default)(t,2))[0],n=r[1],a=function(){return n(!0)},o=function(){return n(!1)},b.useEffect(function(){return window.addEventListener("online",a),window.addEventListener("offline",o),function(){window.removeEventListener("online",a),window.removeEventListener("offline",o)}},[]),i),R=!1!==u||I;b.useEffect(function(){if(l&&R){var e=setInterval(function(){k._session&&k._getSession({event:"poll"})},1e3*l);return function(){return clearInterval(e)}}},[l,R]);var D=b.useMemo(function(){return{data:v,status:E?"loading":v?"authenticated":"unauthenticated",update:function(e){return(0,p.default)(f.default.mark(function t(){var r;return f.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(E||!v)){t.next=2;break}return t.abrupt("return");case 2:return S(!0),t.t0=y.fetchData,t.t1=k,t.t2=M,t.next=8,O();case 8:return t.t3=t.sent,t.t4=e,t.t5={csrfToken:t.t3,data:t.t4},t.t6={body:t.t5},t.t7={req:t.t6},t.next=15,(0,t.t0)("session",t.t1,t.t2,t.t7);case 15:return r=t.sent,S(!1),r&&(x(r),A.post({event:"session",data:{trigger:"getSession"}})),t.abrupt("return",r);case 19:case"end":return t.stop()}},t)}))()}}},[v,E]);return(0,w.jsx)(T.Provider,{value:D,children:s})},t.getCsrfToken=O,t.getProviders=D,t.getSession=P,t.signIn=function(e,t,r){return $.apply(this,arguments)},t.signOut=function(e){return L.apply(this,arguments)},t.useSession=function(e){if(!T)throw Error("React Context is unavailable in Server Components");var t=b.useContext(T),r=null!=e?e:{},i=r.required,n=r.onUnauthenticated,a=i&&"unauthenticated"===t.status;return(b.useEffect(function(){if(a){var e="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));n?n():window.location.href=e}},[a,n]),a)?{data:t.data,update:t.update,status:"loading"}:t};var f=l(r(71182)),h=l(r(58438)),p=l(r(58887)),g=l(r(30137)),b=C(r(50026)),m=C(r(2269)),v=l(r(10311)),y=r(42617),w=r(8932),x=r(10608);function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_=function(e){return e?r:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach(function(t){(0,h.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.keys(x).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(d,e))&&(e in t&&t[e]===x[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return x[e]}}))});var k={baseUrl:(0,v.default)(null!==(i=c.env.NEXTAUTH_URL)&&void 0!==i?i:c.env.VERCEL_URL).origin,basePath:(0,v.default)(c.env.NEXTAUTH_URL).path,baseUrlServer:(0,v.default)(null!==(n=null!==(a=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==a?a:c.env.NEXTAUTH_URL)&&void 0!==n?n:c.env.VERCEL_URL).origin,basePathServer:(0,v.default)(null!==(o=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==o?o:c.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},A=(0,y.BroadcastChannel)(),M=(0,m.proxyLogger)(m.default,k.basePath),T=null===(s=b.createContext)||void 0===s?void 0:s.call(b,void 0);function P(e){return I.apply(this,arguments)}function I(){return(I=(0,p.default)(f.default.mark(function e(t){var r,i;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.fetchData)("session",k,M,t);case 2:return i=e.sent,(null===(r=null==t?void 0:t.broadcast)||void 0===r||r)&&A.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",i);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){return R.apply(this,arguments)}function R(){return(R=(0,p.default)(f.default.mark(function e(t){var r;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.fetchData)("csrf",k,M,t);case 2:return r=e.sent,e.abrupt("return",null==r?void 0:r.csrfToken);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(){return N.apply(this,arguments)}function N(){return(N=(0,p.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.fetchData)("providers",k,M);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(){return($=(0,p.default)(f.default.mark(function e(t,r,i){var n,a,o,s,c,l,u,d,h,p,g,b,m,v,w,x,_;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0===(a=(n=null!=r?r:{}).callbackUrl)?window.location.href:a,c=void 0===(s=n.redirect)||s,l=(0,y.apiBaseUrl)(k),e.next=4,D();case 4:if(u=e.sent){e.next=8;break}return window.location.href="".concat(l,"/error"),e.abrupt("return");case 8:if(!(!t||!(t in u))){e.next=11;break}return window.location.href="".concat(l,"/signin?").concat(new URLSearchParams({callbackUrl:o})),e.abrupt("return");case 11:return d="credentials"===u[t].type,h="email"===u[t].type,p=d||h,g="".concat(l,"/").concat(d?"callback":"signin","/").concat(t),b="".concat(g).concat(i?"?".concat(new URLSearchParams(i)):""),e.t0=fetch,e.t1=b,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=S,e.t5=S({},r),e.t6={},e.next=25,O();case 25:return e.t7=e.sent,e.t8=o,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return m=e.sent,e.next=36,m.json();case 36:if(v=e.sent,!(c||!p)){e.next=42;break}return x=null!==(w=v.url)&&void 0!==w?w:o,window.location.href=x,x.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(_=new URL(v.url).searchParams.get("error"),!m.ok){e.next=46;break}return e.next=46,k._getSession({event:"storage"});case 46:return e.abrupt("return",{error:_,status:m.status,ok:m.ok,url:_?null:v.url});case 47:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(){return(L=(0,p.default)(f.default.mark(function e(t){var r,i,n,a,o,s,c,l,u;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0===(i=(null!=t?t:{}).callbackUrl)?window.location.href:i,a=(0,y.apiBaseUrl)(k),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=6,O();case 6:return e.t2=e.sent,e.t3=n,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),o={method:"post",headers:e.t0,body:e.t5},e.next=13,fetch("".concat(a,"/signout"),o);case 13:return s=e.sent,e.next=16,s.json();case 16:if(c=e.sent,A.post({event:"session",data:{trigger:"signout"}}),!(null===(r=null==t?void 0:t.redirect)||void 0===r||r)){e.next=23;break}return u=null!==(l=c.url)&&void 0!==l?l:n,window.location.href=u,u.includes("#")&&window.location.reload(),e.abrupt("return");case 23:return e.next=25,k._getSession({event:"storage"});case 25:return e.abrupt("return",c);case 26:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.SessionContext=T},10608:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},2269:function(e,t,r){"use strict";var i=r(27925);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.proxyLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return e;var r={},i=function(e){r[e]=function(r,i){c[e](r,i),"error"===e&&(i=s(i)),i.client=!0;var a="".concat(t,"/_log"),l=new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({level:e,code:r},i));return navigator.sendBeacon?navigator.sendBeacon(a,l):fetch(a,{method:"POST",body:l,keepalive:!0})}};for(var a in e)i(a);return r}catch(e){return c}},t.setLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t||(c.debug=function(){}),e.error&&(c.error=e.error),e.warn&&(c.warn=e.warn),e.debug&&(c.debug=e.debug)};var n=i(r(58438)),a=r(57024);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function s(e){var t;return e instanceof Error&&!(e instanceof a.UnknownError)?{message:e.message,stack:e.stack,name:e.name}:(null!=e&&e.error&&(e.error=s(e.error),e.message=null!==(t=e.message)&&void 0!==t?t:e.error.message),e)}var c={error:function(e,t){t=s(t),console.error("[next-auth][error][".concat(e,"]"),"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),t.message,t)},warn:function(e){console.warn("[next-auth][warn][".concat(e,"]"),"\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))},debug:function(e,t){console.log("[next-auth][debug][".concat(e,"]"),t)}};t.default=c},10311:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;let r=new URL("http://localhost:3000/api/auth");e&&!e.startsWith("http")&&(e=`https://${e}`);let i=new URL(null!==(t=e)&&void 0!==t?t:r),n=("/"===i.pathname?r.pathname:i.pathname).replace(/\/$/,""),a=`${i.origin}${n}`;return{origin:i.origin,host:i.host,path:n,base:a,toString:()=>a}}},39045:function(e,t,r){"use strict";var i=r(41457);r.o(i,"usePathname")&&r.d(t,{usePathname:function(){return i.usePathname}}),r.o(i,"useRouter")&&r.d(t,{useRouter:function(){return i.useRouter}}),r.o(i,"useSearchParams")&&r.d(t,{useSearchParams:function(){return i.useSearchParams}})},47973:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(63891)},63891:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function d(){l&&i&&(l=!1,i.length?c=i.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(i=c,c=[];++u<t;)i&&i[u].run();u=-1,t=c.length}i=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,i),o=!1}finally{o&&delete r[e]}return a.exports}i.ab="//";var n=i(229);e.exports=n}()},67338:function(e,t,r){let i=r(31026),n=r(9896),a=r(60950),o=r(40568);function s(e,t,r,a,o){let s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!i())throw Error("Callback required as last argument");if(l){if(c<2)throw Error("Too few arguments provided");2===c?(o=r,r=t,t=a=void 0):3===c&&(t.getContext&&void 0===o?(o=a,a=void 0):(o=a,a=r,r=t,t=void 0))}else{if(c<1)throw Error("Too few arguments provided");return 1===c?(r=t,t=a=void 0):2!==c||t.getContext||(a=r,r=t,t=void 0),new Promise(function(i,o){try{let o=n.create(r,a);i(e(o,t,a))}catch(e){o(e)}})}try{let i=n.create(r,a);o(null,e(i,t,a))}catch(e){o(e)}}t.create=n.create,t.toCanvas=s.bind(null,a.render),t.toDataURL=s.bind(null,a.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return o.render(e,r)})},31026:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},84485:function(e,t,r){let i=r(35801).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),a=[r-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-n;return a.push(6),a.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},40905:function(e,t,r){let i=r(6303),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function a(e){this.mode=i.ALPHANUMERIC,this.data=e}a.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=a},98939:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},48788:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},92765:function(e,t,r){let i=r(18732),n=r(6303);function a(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}a.getBitsLength=function(e){return 8*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=a},76464:function(e,t,r){let i=r(38097),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return a[(e-1)*4+0];case i.M:return a[(e-1)*4+1];case i.Q:return a[(e-1)*4+2];case i.H:return a[(e-1)*4+3];default:return}}},38097:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},11958:function(e,t,r){let i=r(35801).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},70961:function(e,t,r){let i=r(35801),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,a=r<<10;for(;i.getBCHDigit(a)-n>=0;)a^=1335<<i.getBCHDigit(a)-n;return(r<<10|a)^21522}},66822:function(e,t){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},4451:function(e,t,r){let i=r(6303),n=r(35801);function a(e){this.mode=i.KANJI,this.data=e}a.getBitsLength=function(e){return 13*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=a},84741:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,a=0,o=null,s=null;for(let c=0;c<t;c++){n=a=0,o=s=null;for(let l=0;l<t;l++){let t=e.get(c,l);t===o?n++:(n>=5&&(i+=r.N1+(n-5)),o=t,n=1),(t=e.get(l,c))===s?a++:(a>=5&&(i+=r.N1+(a-5)),s=t,a=1)}n>=5&&(i+=r.N1+(n-5)),a>=5&&(i+=r.N1+(a-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,a=0;for(let r=0;r<t;r++){n=a=0;for(let o=0;o<t;o++)n=n<<1&2047|e.get(r,o),o>=10&&(1488===n||93===n)&&i++,a=a<<1&2047|e.get(o,r),o>=10&&(1488===a||93===a)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/i/5)-10)*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let a=0;a<i;a++)r.isReserved(a,n)||r.xor(a,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,a,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,a=1/0;for(let o=0;o<i;o++){r(o),t.applyMask(o,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(o,e),i<a&&(a=i,n=o)}return n}},6303:function(e,t,r){let i=r(8401),n=r(6051);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},74316:function(e,t,r){let i=r(6303);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},93692:function(e,t,r){let i=r(66822);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let a=0;a<t.length;a++)r[n+a]^=i.mul(e[n],t[a]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},9896:function(e,t,r){let i=r(35801),n=r(38097),a=r(98939),o=r(48788),s=r(84485),c=r(11958),l=r(84741),u=r(76464),d=r(92461),f=r(92282),h=r(70961),p=r(6303),g=r(14929);function b(e,t,r){let i,n;let a=e.size,o=h.getEncodedBits(t,r);for(i=0;i<15;i++)n=(o>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(a-15+i,8,n,!0),i<8?e.set(8,a-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(a-8,8,1,!0)}t.create=function(e,t){let r,h;if(void 0===e||""===e)throw Error("No input text");let m=n.M;return void 0!==t&&(m=n.from(t.errorCorrectionLevel,n.M),r=f.from(t.version),h=l.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let h;if(Array.isArray(e))h=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=f.getBestVersionForData(t,r)}h=g.fromString(e,i||40)}else throw Error("Invalid data");let m=f.getBestVersionForData(h,r);if(!m)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;let v=function(e,t,r){let n=new a;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(n)});let o=(i.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(o-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,a;let o=i.getSymbolTotalCodewords(t),s=o-u.getTotalCodewordsCount(t,r),c=u.getBlocksCount(t,r),l=o%c,f=c-l,h=Math.floor(o/c),p=Math.floor(s/c),g=p+1,b=h-p,m=new d(b),v=0,y=Array(c),w=Array(c),x=0,_=new Uint8Array(e.buffer);for(let e=0;e<c;e++){let t=e<f?p:g;y[e]=_.slice(v,v+t),w[e]=m.encode(y[e]),v+=t,x=Math.max(x,t)}let C=new Uint8Array(o),E=0;for(n=0;n<x;n++)for(a=0;a<c;a++)n<y[a].length&&(C[E++]=y[a][n]);for(n=0;n<b;n++)for(a=0;a<c;a++)C[E++]=w[a][n];return C}(n,e,t)}(t,r,h),y=new o(i.getSymbolSize(t));return function(e,t){let r=e.size,i=c.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],a=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)a+i<=-1||r<=a+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,a+i,!0,!0):e.set(n+t,a+i,!1,!0))}}(y,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(y),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(y,t),b(y,r,0),t>=7&&function(e,t){let r,i,n;let a=e.size,o=f.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+a-8-3,n=(o>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(y,t),function(e,t){let r=e.size,i=-1,n=r-1,a=7,o=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;o<t.length&&(i=(t[o]>>>a&1)==1),e.set(n,s-r,i),-1==--a&&(o++,a=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(y,v),isNaN(n)&&(n=l.getBestMask(y,b.bind(null,y,r))),l.applyMask(n,y),b(y,r,n),{modules:y,version:t,errorCorrectionLevel:r,maskPattern:n,segments:h}}(e,r,m,h)}},92461:function(e,t,r){let i=r(93692);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},6051:function(e,t){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+i+"$"),o=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return o.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},14929:function(e,t,r){let i=r(6303),n=r(74316),a=r(40905),o=r(92765),s=r(4451),c=r(6051),l=r(35801),u=r(59853);function d(e){return unescape(encodeURIComponent(e)).length}function f(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function h(e){let t,r;let n=f(c.NUMERIC,i.NUMERIC,e),a=f(c.ALPHANUMERIC,i.ALPHANUMERIC,e);return l.isKanjiModeEnabled()?(t=f(c.BYTE,i.BYTE,e),r=f(c.KANJI,i.KANJI,e)):(t=f(c.BYTE_KANJI,i.BYTE,e),r=[]),n.concat(a,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return a.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return o.getBitsLength(e)}}function g(e,t){let r;let c=i.getBestModeForData(e);if((r=i.from(t,c))!==i.BYTE&&r.bit<c.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(c));switch(r!==i.KANJI||l.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new a(e);case i.KANJI:return new s(e);case i.BYTE:return new o(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},a=["start"];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=""+o+e;c.push(u),r[u]={node:l,lastCount:0},n[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(n[o][u]=p(r[o].lastCount+l.length,l.mode)-p(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),n[o][u]=p(l.length,l.mode)+4+i.getCharCountIndicator(l.mode,t))}}a=c}for(let e=0;e<a.length;e++)n[a[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(h(e,l.isKanjiModeEnabled())),r),a=u.find_path(n.map,"start","end"),o=[];for(let e=1;e<a.length-1;e++)o.push(n.table[a[e]].node);return t.fromArray(o.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(h(e,l.isKanjiModeEnabled()))}},35801:function(e,t){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},8401:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},92282:function(e,t,r){let i=r(35801),n=r(76464),a=r(38097),o=r(6303),s=r(8401),c=i.getBCHDigit(7973);function l(e,t){return o.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=o.BYTE);let a=(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===o.MIXED)return a;let c=a-l(r,e);switch(r){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,r){let i;let n=a.from(r,a.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(function(e,t){let r=0;return e.forEach(function(e){let i=l(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i)<=t.getCapacity(i,r,o.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-c>=0;)t^=7973<<i.getBCHDigit(t)-c;return e<<12|t}},60950:function(e,t,r){let i=r(64105);t.render=function(e,t,r){var n;let a=r,o=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),a=i.getOptions(a);let s=i.getImageWidth(e.modules.size,a),c=o.getContext("2d"),l=c.createImageData(s,s);return i.qrToImageData(l.data,e,a),n=o,c.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",c.putImageData(l,0,0),o},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let a=t.render(e,r,n),o=n.type||"image/png",s=n.rendererOpts||{};return a.toDataURL(o,s.quality)}},40568:function(e,t,r){let i=r(64105);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function a(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let o=i.getOptions(t),s=e.modules.size,c=e.modules.data,l=s+2*o.margin,u=o.color.light.a?"<path "+n(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+n(o.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);l||o||(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?a("M",l+r,.5+u+r):a("m",n,0),n=0,o=!1),l+1<t&&e[c+1]||(i+=a("h",s),s=0)):n++}return i}(c,s,o.margin)+'"/>',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+('viewBox="0 0 '+l)+" "+l+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,f),f}},64105:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,a=r.modules.data,o=t.getScale(n,i),s=Math.floor((n+2*i.margin)*o),c=i.margin*o,l=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=i.color.light;t>=c&&r>=c&&t<s-c&&r<s-c&&(d=l[a[Math.floor((t-c)/o)*n+Math.floor((r-c)/o)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},73513:function(e,t,r){"use strict";let i=r(31265),n=r(55388),a=r(54849),o=r(47879),s=e=>null==e,c=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function d(e,t){return t.decode?n(e):e}function f(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function h(e){let t=(e=f(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,i)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){i[e]=r;return}void 0===i[e]&&(i[e]={}),i[e][t[1]]=r};case"bracket":return(e,r,i)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"colon-list-separator":return(e,r,i)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"comma":case"separator":return(t,r,i)=>{let n="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!n&&d(r,e).includes(e.arrayFormatSeparator);r=a?d(r,e):r;let o=n||a?r.split(e.arrayFormatSeparator).map(t=>d(t,e)):null===r?r:d(r,e);i[t]=o};case"bracket-separator":return(t,r,i)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){i[t]=r?d(r,e):r;return}let a=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>d(t,e));if(void 0===i[t]){i[t]=a;return}i[t]=[].concat(i[t],a)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),i=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return i;for(let n of e.split("&")){if(""===n)continue;let[e,o]=a(t.decode?n.replace(/\+/g," "):n,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:d(o,t),r(d(e,t),o,i)}for(let e of Object.keys(i)){let r=i[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else i[e]=p(r,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((e,t)=>{let r=i[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=h,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],i=function(e){switch(e.arrayFormat){case"index":return t=>(r,i)=>{let n=r.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[",n,"]"].join("")]:[...r,[u(t,e),"[",u(n,e),"]=",u(i,e)].join("")]};case"bracket":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(i,e)].join("")];case"colon-list-separator":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:(n=null===n?"":n,0===i.length)?[[u(r,e),t,u(n,e)].join("")]:[[i,u(n,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,u(t,e)]:[...r,[u(t,e),"=",u(i,e)].join("")]}}(t),n={};for(let t of Object.keys(e))r(t)||(n[t]=e[t]);let a=Object.keys(n);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{let n=e[r];return void 0===n?"":null===n?u(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":n.reduce(i(r),[]).join("&"):u(r,t)+"="+u(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,i]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(h(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);let i=f(e.url).split("?")[0]||"",n=t.extract(e.url),a=Object.assign(t.parse(n,{sort:!1}),e.query),o=t.stringify(a,r);o&&(o=`?${o}`);let s=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s=`#${r[c]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${i}${o}${s}`},t.pick=(e,r,i)=>{i=Object.assign({parseFragmentIdentifier:!0,[c]:!1},i);let{url:n,query:a,fragmentIdentifier:s}=t.parseUrl(e,i);return t.stringifyUrl({url:n,query:o(a,r),fragmentIdentifier:s},i)},t.exclude=(e,r,i)=>{let n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,i)}},90550:function(e){"use strict";function t(e){try{return JSON.stringify(e)}catch(e){return'"[Circular]"'}}e.exports=function(e,r,i){var n=i&&i.stringify||t;if("object"==typeof e&&null!==e){var a=r.length+1;if(1===a)return e;var o=Array(a);o[0]=n(e);for(var s=1;s<a;s++)o[s]=n(r[s]);return o.join(" ")}if("string"!=typeof e)return e;var c=r.length;if(0===c)return e;for(var l="",u=0,d=-1,f=e&&e.length||0,h=0;h<f;){if(37===e.charCodeAt(h)&&h+1<f){switch(d=d>-1?d:0,e.charCodeAt(h+1)){case 100:case 102:if(u>=c||null==r[u])break;d<h&&(l+=e.slice(d,h)),l+=Number(r[u]),d=h+2,h++;break;case 105:if(u>=c||null==r[u])break;d<h&&(l+=e.slice(d,h)),l+=Math.floor(Number(r[u])),d=h+2,h++;break;case 79:case 111:case 106:if(u>=c||void 0===r[u])break;d<h&&(l+=e.slice(d,h));var p=typeof r[u];if("string"===p){l+="'"+r[u]+"'",d=h+2,h++;break}if("function"===p){l+=r[u].name||"<anonymous>",d=h+2,h++;break}l+=n(r[u]),d=h+2,h++;break;case 115:if(u>=c)break;d<h&&(l+=e.slice(d,h)),l+=String(r[u]),d=h+2,h++;break;case 37:d<h&&(l+=e.slice(d,h)),l+="%",d=h+2,h++,u--}++u}++h}return -1===d?e:(d<f&&(l+=e.slice(d)),l)}},54849:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},31265:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},52873:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return a},__asyncDelegator:function(){return w},__asyncGenerator:function(){return y},__asyncValues:function(){return x},__await:function(){return v},__awaiter:function(){return u},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return k},__createBinding:function(){return f},__decorate:function(){return s},__exportStar:function(){return h},__extends:function(){return n},__generator:function(){return d},__importDefault:function(){return E},__importStar:function(){return C},__makeTemplateObject:function(){return _},__metadata:function(){return l},__param:function(){return c},__read:function(){return g},__rest:function(){return o},__spread:function(){return b},__spreadArrays:function(){return m},__values:function(){return p}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}function s(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}function c(e,t){return function(r,i){t(r,i,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,i){return new(r||(r=Promise))(function(n,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,s)}c((i=i.apply(e,t||[])).next())})}function d(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function f(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}function h(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=a.next()).done;)o.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return o}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var i=Array(e),n=0,t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,n++)i[n]=a[o];return i}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,n=r.apply(e,t||[]),a=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(e){n[e]&&(i[e]=function(t){return new Promise(function(r,i){a.push([e,t,r,i])>1||s(e,t)})})}function s(e,t){try{var r;(r=n[e](t)).value instanceof v?Promise.resolve(r.value.v).then(c,l):u(a[0][2],r)}catch(e){u(a[0][3],e)}}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function w(e){var t,r;return t={},i("next"),i("throw",function(e){throw e}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(i,n){t[i]=e[i]?function(t){return(r=!r)?{value:v(e[i](t)),done:"return"===i}:n?n(t):t}:n}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=e[r]&&function(t){return new Promise(function(i,n){!function(e,t,r,i){Promise.resolve(i).then(function(t){e({value:t,done:r})},t)}(i,n,(t=e[r](t)).done,t.value)})}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},22991:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(50026),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useState,o=i.useEffect,s=i.useLayoutEffect,c=i.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),i=a({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return s(function(){n.value=r,n.getSnapshot=t,l(n)&&u({inst:n})},[e,r,t]),o(function(){return l(n)&&u({inst:n}),e(function(){l(n)&&u({inst:n})})},[e]),c(r),r};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:u},93233:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(50026),n=r(325),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useSyncExternalStore,s=i.useRef,c=i.useEffect,l=i.useMemo,u=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var h=o(e,(d=l(function(){function e(e){if(!c){if(c=!0,o=e,e=i(e),void 0!==n&&f.hasValue){var t=f.value;if(n(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var r=i(e);return void 0!==n&&n(t,r)?t:(o=e,s=r)}var o,s,c=!1,l=void 0===r?null:r;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,r,i,n]))[0],d[1]);return c(function(){f.hasValue=!0,f.value=h},[h]),u(h),h}},325:function(e,t,r){"use strict";e.exports=r(22991)},7481:function(e,t,r){"use strict";e.exports=r(93233)},10723:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i},e.exports.__esModule=!0,e.exports.default=e.exports},28722:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},84268:function(e){e.exports=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},58887:function(e){function t(e,t,r,i,n,a,o){try{var s=e[a](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(i,n)}e.exports=function(e){return function(){var r=this,i=arguments;return new Promise(function(n,a){var o=e.apply(r,i);function s(e){t(o,n,a,s,c,"next",e)}function c(e){t(o,n,a,s,c,"throw",e)}s(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},24888:function(e){e.exports=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},32214:function(e,t,r){var i=r(91767),n=r(28683);e.exports=function(e,t,r){if(i())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports},96098:function(e,t,r){var i=r(8911);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},58438:function(e,t,r){var i=r(8911);e.exports=function(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},90640:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},21762:function(e,t,r){var i=r(28683);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},27925:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},26152:function(e){e.exports=function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}},e.exports.__esModule=!0,e.exports.default=e.exports},91767:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},13657:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,n,a,o,s=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(i=a.call(r)).done)&&(s.push(i.value),s.length!==t);c=!0);}catch(e){l=!0,n=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw n}}return s}},e.exports.__esModule=!0,e.exports.default=e.exports},29523:function(e){e.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},14145:function(e,t,r){var i=r(90186).default,n=r(84268);e.exports=function(e,t){if(t&&("object"==i(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9381:function(e,t,r){var i=r(90186).default;function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=n=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},a=Object.prototype,o=a.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",d=c.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function h(e,r,i,n){var a,o,c=Object.create((r&&r.prototype instanceof y?r:y).prototype);return s(c,"_invoke",{value:(a=new P(n||[]),o=g,function(r,n){if(o===b)throw Error("Generator is already running");if(o===m){if("throw"===r)throw n;return{value:t,done:!0}}for(a.method=r,a.arg=n;;){var s=a.delegate;if(s){var c=function e(r,i){var n=i.method,a=r.iterator[n];if(a===t)return i.delegate=null,"throw"===n&&r.iterator.return&&(i.method="return",i.arg=t,e(r,i),"throw"===i.method)||"return"!==n&&(i.method="throw",i.arg=TypeError("The iterator does not provide a '"+n+"' method")),v;var o=p(a,r.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,v;var s=o.arg;return s?s.done?(i[r.resultName]=s.value,i.next=r.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,v):s:(i.method="throw",i.arg=TypeError("iterator result is not an object"),i.delegate=null,v)}(s,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(o===g)throw o=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o=b;var l=p(e,i,a);if("normal"===l.type){if(o=a.done?m:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(o=m,a.method="throw",a.arg=l.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var g="suspendedStart",b="executing",m="completed",v={};function y(){}function w(){}function x(){}var _={};f(_,l,function(){return this});var C=Object.getPrototypeOf,E=C&&C(C(I([])));E&&E!==a&&o.call(E,l)&&(_=E);var S=x.prototype=y.prototype=Object.create(_);function k(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function A(e,t){var r;s(this,"_invoke",{value:function(n,a){function s(){return new t(function(r,s){!function r(n,a,s,c){var l=p(e[n],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&o.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,s,c)},function(e){r("throw",e,s,c)}):t.resolve(d).then(function(e){u.value=e,s(u)},function(e){return r("throw",e,s,c)})}c(l.arg)}(n,a,r,s)})}return r=r?r.then(s,s):s()}})}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(i(e)+" is not iterable")}return w.prototype=x,s(S,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,d,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,f(e,d,"GeneratorFunction")),e.prototype=Object.create(S),e},r.awrap=function(e){return{__await:e}},k(A.prototype),f(A.prototype,u,function(){return this}),r.AsyncIterator=A,r.async=function(e,t,i,n,a){void 0===a&&(a=Promise);var o=new A(h(e,t,i,n),a);return r.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},k(S),f(S,d,"Generator"),f(S,l,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),r.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function e(){for(;r.length;){var i=r.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},r.values=I,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(i,n){return s.type="throw",s.arg=e,r.next=i,n&&(r.method="next",r.arg=t),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=e,a.arg=t,n?(this.method="next",this.next=n.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;T(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,i){return this.delegate={iterator:I(e),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=t),v}},r}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},28683:function(e){function t(r,i){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,i)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},30137:function(e,t,r){var i=r(28722),n=r(13657),a=r(55821),o=r(29523);e.exports=function(e,t){return i(e)||n(e,t)||a(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},46546:function(e,t,r){var i=r(90186).default;e.exports=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8911:function(e,t,r){var i=r(90186).default,n=r(46546);e.exports=function(e){var t=n(e,"string");return"symbol"==i(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},90186:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},55821:function(e,t,r){var i=r(10723);e.exports=function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},61179:function(e,t,r){var i=r(90640),n=r(28683),a=r(26152),o=r(32214);function s(t){var r="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return o(e,arguments,i(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,s(t)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports},71182:function(e,t,r){var i=r(9381)();e.exports=i;try{regeneratorRuntime=i}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},67269:function(e,t,r){"use strict";let i=r(90550);e.exports=a;let n=function(){function e(e){return void 0!==e&&e}try{if("undefined"!=typeof globalThis)return globalThis;return Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{};function a(e){var t,r;(e=e||{}).browser=e.browser||{};let i=e.browser.transmit;if(i&&"function"!=typeof i.send)throw Error("pino: transmit option must have a send function");let u=e.browser.write||n;e.browser.write&&(e.browser.asObject=!0);let d=e.serializers||{},g=Array.isArray(t=e.browser.serialize)?t.filter(function(e){return"!stdSerializers.err"!==e}):!0===t&&Object.keys(d),b=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(b=!1),"function"==typeof u&&(u.error=u.fatal=u.warn=u.info=u.debug=u.trace=u),!1===e.enabled&&(e.level="silent");let m=e.level||"info",v=Object.create(u);v.log||(v.log=f),Object.defineProperty(v,"levelVal",{get:function(){return"silent"===this.level?1/0:this.levels.values[this.level]}}),Object.defineProperty(v,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,o(y,v,"error","log"),o(y,v,"fatal","error"),o(y,v,"warn","error"),o(y,v,"info","log"),o(y,v,"debug","log"),o(y,v,"trace","log")}});let y={transmit:i,serialize:g,asObject:e.browser.asObject,levels:["error","fatal","warn","info","debug","trace"],timestamp:"function"==typeof(r=e).timestamp?r.timestamp:!1===r.timestamp?h:p};return v.levels=a.levels,v.level=m,v.setMaxListeners=v.getMaxListeners=v.emit=v.addListener=v.on=v.prependListener=v.once=v.prependOnceListener=v.removeListener=v.removeAllListeners=v.listeners=v.listenerCount=v.eventNames=v.write=v.flush=f,v.serializers=d,v._serialize=g,v._stdErrSerialize=b,v.child=function(t,r){if(!t)throw Error("missing bindings for child Pino");r=r||{},g&&t.serializers&&(r.serializers=t.serializers);let n=r.serializers;if(g&&n){var a=Object.assign({},d,n),o=!0===e.browser.serialize?Object.keys(a):g;delete t.serializers,s([t],o,a,this._stdErrSerialize)}function u(e){this._childLevel=(0|e._childLevel)+1,this.error=c(e,t,"error"),this.fatal=c(e,t,"fatal"),this.warn=c(e,t,"warn"),this.info=c(e,t,"info"),this.debug=c(e,t,"debug"),this.trace=c(e,t,"trace"),a&&(this.serializers=a,this._serialize=o),i&&(this._logEvent=l([].concat(e._logEvent.bindings,t)))}return u.prototype=this,new u(this)},i&&(v._logEvent=l()),v}function o(e,t,r,o){let c=Object.getPrototypeOf(t);t[r]=t.levelVal>t.levels.values[r]?f:c[r]?c[r]:n[r]||n[o]||f,function(e,t,r){if(e.transmit||t[r]!==f){var o;t[r]=(o=t[r],function(){let c=e.timestamp(),u=Array(arguments.length),d=Object.getPrototypeOf&&Object.getPrototypeOf(this)===n?n:this;for(var f=0;f<u.length;f++)u[f]=arguments[f];if(e.serialize&&!e.asObject&&s(u,this._serialize,this.serializers,this._stdErrSerialize),e.asObject?o.call(d,function(e,t,r,n){e._serialize&&s(r,e._serialize,e.serializers,e._stdErrSerialize);let o=r.slice(),c=o[0],l={};n&&(l.time=n),l.level=a.levels.values[t];let u=(0|e._childLevel)+1;if(u<1&&(u=1),null!==c&&"object"==typeof c){for(;u--&&"object"==typeof o[0];)Object.assign(l,o.shift());c=o.length?i(o.shift(),o):void 0}else"string"==typeof c&&(c=i(o.shift(),o));return void 0!==c&&(l.msg=c),l}(this,r,u,c)):o.apply(d,u),e.transmit){let i=e.transmit.level||t.level,n=a.levels.values[i],o=a.levels.values[r];if(o<n)return;(function(e,t,r){let i=t.send,n=t.ts,a=t.methodLevel,o=t.methodValue,c=t.val,u=e._logEvent.bindings;s(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=n,e._logEvent.messages=r.filter(function(e){return -1===u.indexOf(e)}),e._logEvent.level.label=a,e._logEvent.level.value=o,i(a,e._logEvent,c),e._logEvent=l(u)})(this,{ts:c,methodLevel:r,methodValue:o,transmitLevel:i,transmitValue:a.levels.values[e.transmit.level||t.level],send:e.transmit.send,val:t.levelVal},u)}})}}(e,t,r)}function s(e,t,r,i){for(let n in e)if(i&&e[n]instanceof Error)e[n]=a.stdSerializers.err(e[n]);else if("object"==typeof e[n]&&!Array.isArray(e[n]))for(let i in e[n])t&&t.indexOf(i)>-1&&i in r&&(e[n][i]=r[i](e[n][i]))}function c(e,t,r){return function(){let i=Array(1+arguments.length);i[0]=t;for(var n=1;n<i.length;n++)i[n]=arguments[n-1];return e[r].apply(this,i)}}function l(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function u(){return{}}function d(e){return e}function f(){}function h(){return!1}function p(){return Date.now()}a.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},a.stdSerializers={mapHttpRequest:u,mapHttpResponse:u,wrapRequestSerializer:d,wrapResponseSerializer:d,wrapErrorSerializer:d,req:u,res:u,err:function(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let r in e)void 0===t[r]&&(t[r]=e[r]);return t}},a.stdTimeFunctions=Object.assign({},{nullTime:h,epochTime:p,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}})},51149:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var i=r(94526);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},a=(e=n,t,r)=>{let{kind:i,metadata:a}=r,o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function o(e){return(t,r)=>"object"==typeof r?a(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},80404:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var i=r(51149);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n(e){return(0,i.C)({...e,state:!0,attribute:!1})}},94526:function(e,t,r){"use strict";r.d(t,{fl:function(){return k},iv:function(){return l},Ts:function(){return C},Qu:function(){return E},$m:function(){return c}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}}let c=e=>new s("string"==typeof e?e:e+"",void 0,a),l=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,a),u=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:f,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:b,getPrototypeOf:m}=Object,v=globalThis,y=v.trustedTypes,w=y?y.emptyScript:"",x=v.reactiveElementPolyfillSupport,_=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!f(e,t),S={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let a=i?.call(this);n.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){let e=this.properties;for(let t of[...g(e),...b(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(d(r));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:C).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[_("elementProperties")]=new Map,k[_("finalized")]=new Map,x?.({ReactiveElement:k}),(v.reactiveElementVersions??=[]).push("2.0.4")},68352:function(e,t,r){"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`positive integer expected, not ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name))throw Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)}function a(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");i(e.outputLen),i(e.blockLen)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function s(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}r.d(t,{Gg:function(){return o},J8:function(){return s},Rx:function(){return i},aI:function(){return n},vp:function(){return a}})},24762:function(e,t,r){"use strict";r.d(t,{kb:function(){return h},l1:function(){return u},eV:function(){return f},GL:function(){return o},iA:function(){return c},O6:function(){return g},np:function(){return s},O0:function(){return d},Jq:function(){return a},hE:function(){return p}});let i="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;var n=r(68352);let a=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),o=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),s=(e,t)=>e<<32-t|e>>>t,c=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],l=e=>e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255;function u(e){for(let t=0;t<e.length;t++)e[t]=l(e[t])}function d(e){return"string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),(0,n.aI)(e),e}function f(...e){let t=0;for(let r=0;r<e.length;r++){let i=e[r];(0,n.aI)(i),t+=i.length}let r=new Uint8Array(t);for(let t=0,i=0;t<e.length;t++){let n=e[t];r.set(n,i),i+=n.length}return r}class h{clone(){return this._cloneInto()}}function p(e){let t=t=>e().update(d(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function g(e=32){if(i&&"function"==typeof i.getRandomValues)return i.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}},89209:function(e,t,r){"use strict";r.d(t,{D:function(){return o}});var i=r(70479),n=r(47973),a=r(47973);function o(e){let t="object"==typeof e.client?e.client:{},r="object"==typeof e.server?e.server:{},o=e.shared,s=e.runtimeEnv?e.runtimeEnv:{...a.env,...e.experimental__runtimeEnv};return function(e){let t=e.runtimeEnvStrict??e.runtimeEnv??n.env;if(e.emptyStringAsUndefined)for(let[e,r]of Object.entries(t))""===r&&delete t[e];if(e.skipValidation)return t;let r="object"==typeof e.client?e.client:{},a="object"==typeof e.server?e.server:{},o="object"==typeof e.shared?e.shared:{},s=i.z.object(r),c=i.z.object(a),l=i.z.object(o),u=e.isServer??"undefined"==typeof window,d=s.merge(l),f=c.merge(l).merge(s),h=u?f.safeParse(t):d.safeParse(t),p=e.onValidationError??(e=>{throw console.error("❌ Invalid environment variables:",e.flatten().fieldErrors),Error("Invalid environment variables")}),g=e.onInvalidAccess??(e=>{throw Error("❌ Attempted to access a server-side environment variable on the client")});if(!1===h.success)return p(h.error);let b=t=>!e.clientPrefix||!t.startsWith(e.clientPrefix)&&!(t in l.shape),m=e=>u||!b(e),v=e=>"__esModule"===e||"$$typeof"===e,y=(e.extends??[]).reduce((e,t)=>Object.assign(e,t),{});return new Proxy(Object.assign(h.data,y),{get(e,t){if("string"==typeof t&&!v(t))return m(t)?Reflect.get(e,t):g(t)}})}({...e,shared:o,client:t,server:r,clientPrefix:"NEXT_PUBLIC_",runtimeEnv:s})}},28869:function(e,t,r){"use strict";r.d(t,{a:function(){return l}});var i=r(23651),n=r(20528),a=r(43691),o=r(64681),s=r(49145),c=r(66206);function l(e){let t,u,d,f,h,p,g,b;let m=e.isNewChainsStale??!0;return(0,i.K)(i=>({id:"walletConnect",name:"WalletConnect",type:l.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(h||(h=this.onConnect.bind(this),e.on("connect",h)),g||(g=this.onSessionDelete.bind(this),e.on("session_delete",g)))},async connect({chainId:e,...t}={}){try{let r=await this.getProvider();if(!r)throw new n.M;p||(p=this.onDisplayUri,r.on("display_uri",p));let a=e;if(!a){let e=await i.storage?.getItem("state")??{};a=i.chains.some(t=>t.id===e.chainId)?e.chainId:i.chains[0]?.id}if(!a)throw Error("No chains found on connector.");let s=await this.isChainsStale();if(r.session&&s&&await r.disconnect(),!r.session||s){let e=i.chains.filter(e=>e.id!==a).map(e=>e.id);await r.connect({optionalChains:[a,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(i.chains.map(e=>e.id))}let c=(await r.enable()).map(e=>(0,o.K)(e)),l=await this.getChainId();return p&&(r.removeListener("display_uri",p),p=void 0),h&&(r.removeListener("connect",h),h=void 0),d||(d=this.onAccountsChanged.bind(this),r.on("accountsChanged",d)),f||(f=this.onChainChanged.bind(this),r.on("chainChanged",f)),b||(b=this.onDisconnect.bind(this),r.on("disconnect",b)),g||(g=this.onSessionDelete.bind(this),r.on("session_delete",g)),{accounts:c,chainId:l}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new s.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{f&&(e?.removeListener("chainChanged",f),f=void 0),b&&(e?.removeListener("disconnect",b),b=void 0),h||(h=this.onConnect.bind(this),e?.on("connect",h)),d&&(e?.removeListener("accountsChanged",d),d=void 0),g&&(e?.removeListener("session_delete",g),g=void 0),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(e=>(0,o.K)(e))},async getProvider({chainId:n}={}){async function a(){let t=i.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:n}=await r.e(862).then(r.bind(r,79862));return await n.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(i.chains.map(e=>{let[t]=function(e){let{chain:t}=e,r=t.rpcUrls.default.http[0];if(!e.transports)return[r];let i=e.transports?.[t.id]?.({chain:t});return(i?.value?.transports||[i]).map(({value:e})=>e?.url||r)}({chain:e,transports:i.transports});return[e.id,t]})),showQrModal:e.showQrModal??!0})}return t||(u||(u=a()),t=await u,t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),n&&await this.switchChain?.({chainId:n}),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;if(await this.isChainsStale()&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider();if(!r)throw new n.M;let o=i.chains.find(e=>e.id===t);if(!o)throw new s.x3(new a.X4);try{await Promise.all([new Promise(e=>{let r=({chainId:n})=>{n===t&&(i.emitter.off("change",r),e())};i.emitter.on("change",r)}),r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.eC)(t)}]})]);let e=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...e,t]),o}catch(i){if(/(user rejected)/i.test(i.message))throw new s.ab(i);try{let i,n;i=e?.blockExplorerUrls?e.blockExplorerUrls:o.blockExplorers?.default.url?[o.blockExplorers?.default.url]:[],n=e?.rpcUrls?.length?e.rpcUrls:[...o.rpcUrls.default.http];let a={blockExplorerUrls:i,chainId:(0,c.eC)(t),chainName:e?.chainName??o.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??o.nativeCurrency,rpcUrls:n};await r.request({method:"wallet_addEthereumChain",params:[a]});let s=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...s,t]),o}catch(e){throw new s.ab(e)}}},onAccountsChanged(e){0===e.length?this.onDisconnect():i.emitter.emit("change",{accounts:e.map(e=>(0,o.K)(e))})},onChainChanged(e){let t=Number(e);i.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),r=await this.getAccounts();i.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),i.emitter.emit("disconnect");let t=await this.getProvider();d&&(t.removeListener("accountsChanged",d),d=void 0),f&&(t.removeListener("chainChanged",f),f=void 0),b&&(t.removeListener("disconnect",b),b=void 0),g&&(t.removeListener("session_delete",g),g=void 0),h||(h=this.onConnect.bind(this),t.on("connect",h))},onDisplayUri(e){i.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds:()=>t?t.session?.namespaces.eip155?.accounts?.map(e=>Number.parseInt(e.split(":")[1]||""))??[]:[],async getRequestedChainsIds(){return await i.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(!m)return!1;let e=i.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let r=await this.getRequestedChainsIds();return!e.every(e=>r.includes(e))},async setRequestedChainsIds(e){await i.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}}))}l.type="walletConnect"},50911:function(e,t,r){"use strict";function i(e){let t=e.state.current,r=e.state.connections.get(t),i=r?.accounts,n=i?.[0],a=e.chains.find(e=>e.id===r?.chainId),o=e.state.status;switch(o){case"connected":return{address:n,addresses:i,chain:a,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:o};case"reconnecting":return{address:n,addresses:i,chain:a,chainId:r?.chainId,connector:r?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:o};case"connecting":return{address:n,addresses:i,chain:a,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:o};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:o}}}r.d(t,{D:function(){return i}})},36927:function(e,t,r){"use strict";r.d(t,{L:function(){return a}});var i=r(2762),n=r(57139);function a(e,t){let{chainId:r,...a}=t,o=e.getClient({chainId:r});return(0,n.s)(o,i.L,"readContract")(a)}},24990:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});let i=!1;async function n(e,t={}){let r;if(i)return[];i=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let n=[];if(t.connectors?.length)for(let r of t.connectors){let t;t="function"==typeof r?e._internal.connectors.setup(r):r,n.push(t)}else n.push(...e.connectors);try{r=await e.storage?.getItem("recentConnectorId")}catch{}let a={};for(let[,t]of e.state.connections)a[t.connector.id]=1;r&&(a[r]=0);let o=Object.keys(a).length>0?[...n].sort((e,t)=>(a[e.id]??10)-(a[t.id]??10)):n,s=!1,c=[],l=[];for(let t of o){let r=await t.getProvider().catch(()=>void 0);if(!r||l.some(e=>e===r)||!await t.isAuthorized())continue;let i=await t.connect({isReconnecting:!0}).catch(()=>null);i&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let r=new Map(s?e.connections:new Map).set(t.uid,{accounts:i.accounts,chainId:i.chainId,connector:t});return{...e,current:s?e.current:t.uid,connections:r}}),c.push({accounts:i.accounts,chainId:i.chainId,connector:t}),l.push(r),s=!0)}return("reconnecting"===e.state.status||"connecting"===e.state.status)&&(s?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:null,status:"disconnected"}))),i=!1,c}},75063:function(e,t,r){"use strict";r.d(t,{u:function(){return a}});var i=r(18640),n=r(50911);function a(e,t){let{onChange:r}=t;return e.subscribe(()=>(0,n.D)(e),r,{equalityFn(e,t){let{connector:r,...n}=e,{connector:a,...o}=t;return(0,i.v)(n,o)&&r?.id===a?.id&&r?.uid===a?.uid}})}},23651:function(e,t,r){"use strict";function i(e){return e}r.d(t,{K:function(){return i}})},73119:function(e,t,r){"use strict";r.d(t,{L:function(){return h}});var i=r(64681),n=r(49145),a=r(27274),o=r(14332),s=r(66206),c=r(43691),l=r(20528),u=r(23651);let d=/(rabby|trustwallet)/,f={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:p(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>p(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:p(e,"isPhantom")}};function h(e={}){let t,r,g,b;let{shimDisconnect:m=!0,unstable_shimAsyncInject:v}=e;function y(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...f[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return(0,u.K)(u=>({get icon(){return y().icon},get id(){return y().id},get name(){return y().name},get supportsSimulation(){return d.test(this.id.toLowerCase())},type:h.type,async setup(){let r=await this.getProvider();r&&e.target&&(g||(g=this.onConnect.bind(this),r.on("connect",g)),t||(t=this.onAccountsChanged.bind(this),r.on("accountsChanged",t)))},async connect({chainId:a,isReconnecting:o}={}){let s=await this.getProvider();if(!s)throw new l.M;let c=[];if(o)c=await this.getAccounts().catch(()=>[]);else if(m)try{let e=await s.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});(c=e[0]?.caveats?.[0]?.value?.map(e=>i.K(e))).length>0&&(c=await this.getAccounts())}catch(e){if(e.code===n.ab.code)throw new n.ab(e);if(e.code===n.pT.code)throw e}try{c?.length||o||(c=(await s.request({method:"eth_requestAccounts"})).map(e=>(0,i.K)(e))),g&&(s.removeListener("connect",g),g=void 0),t||(t=this.onAccountsChanged.bind(this),s.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),s.on("chainChanged",r)),b||(b=this.onDisconnect.bind(this),s.on("disconnect",b));let l=await this.getChainId();if(a&&l!==a){let e=await this.switchChain({chainId:a}).catch(e=>{if(e.code===n.ab.code)throw e;return{id:l}});l=e?.id??l}return m&&await u.storage?.removeItem(`${this.id}.disconnected`),e.target||await u.storage?.setItem("injected.connected",!0),{accounts:c,chainId:l}}catch(e){if(e.code===n.ab.code)throw new n.ab(e);if(e.code===n.pT.code)throw new n.pT(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new l.M;r&&(t.removeListener("chainChanged",r),r=void 0),b&&(t.removeListener("disconnect",b),b=void 0),g||(g=this.onConnect.bind(this),t.on("connect",g));try{await (0,a.F)(()=>t.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}m&&await u.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await u.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new l.M;return(await e.request({method:"eth_accounts"})).map(e=>(0,i.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new l.M;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("undefined"==typeof window)return;let t=y();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?p(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(m&&await u.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await u.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==v&&!1!==v){let e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof v?v:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(r=>setTimeout(()=>r(e()),t))]))return!0}throw new l.M}return!!(await (0,o.J)(()=>this.getAccounts())).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider();if(!r)throw new l.M;let i=u.chains.find(e=>e.id===t);if(!i)throw new n.x3(new c.X4);try{return await Promise.all([r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,s.eC)(t)}]}).then(async()=>{await this.getChainId()===t&&u.emitter.emit("change",{chainId:t})}),new Promise(e=>u.emitter.once("change",({chainId:r})=>{r===t&&e()}))]),i}catch(a){if(4902===a.code||a?.data?.originalError?.code===4902)try{let a,o;let{default:c,...l}=i.blockExplorers??{};e?.blockExplorerUrls?a=e.blockExplorerUrls:c&&(a=[c.url,...Object.values(l).map(e=>e.url)]),o=e?.rpcUrls?.length?e.rpcUrls:[i.rpcUrls.default?.http[0]??""];let u={blockExplorerUrls:a,chainId:(0,s.eC)(t),chainName:e?.chainName??i.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??i.nativeCurrency,rpcUrls:o};if(await r.request({method:"wallet_addEthereumChain",params:[u]}),await this.getChainId()!==t)throw new n.ab(Error("User rejected switch after adding network."));return i}catch(e){throw new n.ab(e)}if(a.code===n.ab.code)throw new n.ab(a);throw new n.x3(a)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(u.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),m&&await u.storage?.removeItem(`${this.id}.disconnected`)}else u.emitter.emit("change",{accounts:e.map(e=>(0,i.K)(e))})},onChainChanged(e){let t=Number(e);u.emitter.emit("change",{chainId:t})},async onConnect(e){let i=await this.getAccounts();if(0===i.length)return;let n=Number(e.chainId);u.emitter.emit("connect",{accounts:i,chainId:n});let a=await this.getProvider();a&&(g&&(a.removeListener("connect",g),g=void 0),t||(t=this.onAccountsChanged.bind(this),a.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),a.on("chainChanged",r)),b||(b=this.onDisconnect.bind(this),a.on("disconnect",b)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(u.emitter.emit("disconnect"),t&&(r&&(t.removeListener("chainChanged",r),r=void 0),b&&(t.removeListener("disconnect",b),b=void 0),g||(g=this.onConnect.bind(this),t.on("connect",g))))}}))}function p(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let i=e.ethereum;return i?.providers?i.providers.find(e=>r(e)):i&&r(i)?i:void 0}h.type="injected"},54250:function(e,t,r){"use strict";let i;r.d(t,{_:function(){return y}});var n=r(56961);let a=e=>(t,r,i)=>{let n=i.subscribe;return i.subscribe=(e,t,r)=>{let a=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,o=e(i.getState());a=r=>{let i=e(r);if(!n(o,i)){let e=o;t(o=i,e)}},(null==r?void 0:r.fireImmediately)&&t(o,o)}return n(a)},e(t,r,i)},o=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>o(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>o(t)(e)}}},s=(e,t)=>(r,i,n)=>{let a,s,c={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,u=new Set,d=new Set;try{a=c.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),r(...e)},i,n);let f=o(c.serialize),h=()=>{let e;let t=f({state:c.partialize({...i()}),version:c.version}).then(e=>a.setItem(c.name,e)).catch(t=>{e=t});if(e)throw e;return t},p=n.setState;n.setState=(e,t)=>{p(e,t),h()};let g=e((...e)=>{r(...e),h()},i,n),b=()=>{var e;if(!a)return;l=!1,u.forEach(e=>e(i()));let t=(null==(e=c.onRehydrateStorage)?void 0:e.call(c,i()))||void 0;return o(a.getItem.bind(a))(c.name).then(e=>{if(e)return c.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===c.version)return e.state;if(c.migrate)return c.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(s=c.merge(e,null!=(t=i())?t:g),!0),h()}).then(()=>{null==t||t(s,void 0),l=!0,d.forEach(e=>e(s))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{c={...c,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>b(),hasHydrated:()=>l,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},b(),s||g},c=(e,t)=>(r,i,n)=>{let a,s={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var t;let i=e=>null===e?null:JSON.parse(e,void 0),n=null!=(t=r.getItem(e))?t:null;return n instanceof Promise?n.then(i):i(n)},setItem:(e,t)=>r.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,l=new Set,u=new Set,d=s.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let f=()=>{let e=s.partialize({...i()});return d.setItem(s.name,{state:e,version:s.version})},h=n.setState;n.setState=(e,t)=>{h(e,t),f()};let p=e((...e)=>{r(...e),f()},i,n),g=()=>{var e,t;if(!d)return;c=!1,l.forEach(e=>{var t;return e(null!=(t=i())?t:p)});let n=(null==(t=s.onRehydrateStorage)?void 0:t.call(s,null!=(e=i())?e:p))||void 0;return o(d.getItem.bind(d))(s.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:p),!0),f()}).then(()=>{null==n||n(a,void 0),a=i(),c=!0,u.forEach(e=>e(a))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>c,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},s.skipHydration||g(),a||p},l=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),s(e,t)):c(e,t),u=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,a={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,a),a},d=e=>e?u(e):u;var f=r(73119),h=r(97630);class p{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new h})}on(e,t){this._emitter.on(e,t)}once(e,t){this._emitter.once(e,t)}off(e,t){this._emitter.off(e,t)}emit(e,...t){let r=t[0];this._emitter.emit(e,{uid:this.uid,...r})}listenerCount(e){return this._emitter.listenerCount(e)}}var g=r(84196),b=r(43691);let m=256;var v=r(63050);function y(e){let t;let{multiInjectedProviderDiscovery:r=!0,storage:o=(0,g.o)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:g.w}),syncConnectedChain:s=!0,ssr:c=!1,...u}=e,h="undefined"!=typeof window&&r?function(){let e=new Set,t=[],r=()=>(function(e){if("undefined"==typeof window)return;let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(r=>{t.some(({info:e})=>e.uuid===r.info.uuid)||(t=[...t,r],e.forEach(e=>e(t,{added:[r]})))}),i=r();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),i?.()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),i?.(),i=r()},subscribe:(r,{emitImmediately:i}={})=>(e.add(r),i&&r(t,{added:t}),()=>e.delete(r))}}():void 0,y=d(()=>u.chains),w=d(()=>[...u.connectors??[],...c?[]:h?.getProviders().map(_)??[]].map(x));function x(e){let t=new p(function(e=11){if(!i||m+e>512){i="",m=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(m,m+++e)}()),r={...e({emitter:t,chains:y.getState(),storage:o,transports:u.transports}),emitter:t,uid:t.uid};return t.on("connect",T),r.setup?.(),r}function _(e){let{info:t}=e,r=e.provider;return(0,f.L)({target:{...t,id:t.rdns,provider:r}})}let C=new Map;function E(){return{chainId:y.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let S="0.0.0-canary-";t=v.i.startsWith(S)?Number.parseInt(v.i.replace(S,"")):Number.parseInt(v.i.split(".")[0]??"0");let k=d(a(o?l(E,{migrate(e,r){if(r===t)return e;let i=E(),n=A(e,i.chainId);return{...i,chainId:n}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:i,type:n,uid:a}=t.connector;return[e,{...t,connector:{id:r,name:i,type:n,uid:a}}]})},chainId:e.chainId,current:e.current}),merge(e,t){"object"==typeof e&&e&&"status"in e&&delete e.status;let r=A(e,t.chainId);return{...t,...e,chainId:r}},skipHydration:c,storage:o,version:t}):E));function A(e,t){return e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId&&y.getState().some(t=>t.id===e.chainId)?e.chainId:t}function M(e){k.setState(t=>{let r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t})}function T(e){"connecting"!==k.getState().status&&"reconnecting"!==k.getState().status&&k.setState(t=>{let r=w.getState().find(t=>t.uid===e.uid);return r?(r.emitter.listenerCount("connect")&&r.emitter.off("connect",M),r.emitter.listenerCount("change")||r.emitter.on("change",M),r.emitter.listenerCount("disconnect")||r.emitter.on("disconnect",P),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}):t})}function P(e){k.setState(t=>{let r=t.connections.get(e.uid);if(r){let e=r.connector;e.emitter.listenerCount("change")&&r.connector.emitter.off("change",M),e.emitter.listenerCount("disconnect")&&r.connector.emitter.off("disconnect",P),e.emitter.listenerCount("connect")||r.connector.emitter.on("connect",T)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};let i=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:i.connector.uid}})}return s&&k.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(y.getState().some(t=>t.id===e))return k.setState(t=>({...t,chainId:e??t.chainId}))}),h?.subscribe(e=>{let t=new Map;for(let e of w.getState())t.set(e.id,!0);let r=[];for(let i of e){let e=x(_(i));t.has(e.id)||r.push(e)}(!o||k.persist.hasHydrated())&&w.setState(e=>[...e,...r],!0)}),{get chains(){return y.getState()},get connectors(){return w.getState()},storage:o,getClient:function(e={}){let t;let r=e.chainId??k.getState().chainId,i=y.getState().find(e=>e.id===r);if(e.chainId&&!i)throw new b.X4;{let e=C.get(k.getState().chainId);if(e&&!i)return e;if(!i)throw new b.X4}{let e=C.get(r);if(e)return e}if(u.client)t=u.client({chain:i});else{let e=i.id,r=y.getState().map(e=>e.id),a={};for(let[t,i]of Object.entries(u))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof i){if(e in i)a[t]=i[e];else{if(r.some(e=>e in i))continue;a[t]=i}}else a[t]=i}t=(0,n.e)({...a,chain:i,batch:a.batch??{multicall:!0},transport:t=>u.transports[e]({...t,connectors:w})})}return C.set(r,t),t},get state(){return k.getState()},setState(e){let t;t="function"==typeof e?e(k.getState()):e;let r=E();"object"!=typeof t&&(t=r),Object.keys(r).some(e=>!(e in t))&&(t=r),k.setState(t,!0)},subscribe:(e,t,r)=>k.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:h,store:k,ssr:!!c,syncConnectedChain:s,transports:u.transports,chains:{setState(e){let t="function"==typeof e?e(y.getState()):e;if(0!==t.length)return y.setState(t,!0)},subscribe:e=>y.subscribe(e)},connectors:{providerDetailToConnector:_,setup:x,setState:e=>w.setState("function"==typeof e?e(w.getState()):e,!0),subscribe:e=>w.subscribe(e)},events:{change:M,connect:T,disconnect:P}}}}},84196:function(e,t,r){"use strict";function i(e,t){return JSON.parse(e,(e,r)=>{let i=r;return i?.__type==="bigint"&&(i=BigInt(i.value)),i?.__type==="Map"&&(i=new Map(i.value)),t?.(e,i)??i})}function n(e,t){return e.slice(0,t).join(".")||"."}function a(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function o(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,o=[],s=[];return function(c,l){if("object"==typeof l){if(o.length){let e=a(o,this);0===e?o[o.length]=this:(o.splice(e),s.splice(e)),s[s.length]=c;let r=a(o,l);if(0!==r)return i?t.call(this,c,l,n(s,r)):`[ref=${n(s,r)}]`}else o[0]=l,s[0]=c}return r?e.call(this,c,l):l}}((e,r)=>{let i=r;return"bigint"==typeof i&&(i={__type:"bigint",value:r.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(r.entries())}),t?.(e,i)??i},i),r??void 0)}function s(e){let{deserialize:t=i,key:r="wagmi",serialize:n=o,storage:a=c}=e;function s(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...a,key:r,async getItem(e,i){let n=a.getItem(`${r}.${e}`),o=await s(n);return o?t(o)??null:i??null},async setItem(e,t){let i=`${r}.${e}`;null===t?await s(a.removeItem(i)):await s(a.setItem(i,n(t)))},async removeItem(e){await s(a.removeItem(`${r}.${e}`))}}}r.d(t,{o:function(){return s},w:function(){return c}});let c={getItem:()=>null,setItem:()=>{},removeItem:()=>{}}},79092:function(e,t,r){"use strict";r.d(t,{G:function(){return c}});var i,n,a=r(63050);let o=()=>`@wagmi/core@${a.i}`;var s=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class c extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return o()}constructor(e,t={}){super(),i.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof c?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof c&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,i,"m",n).call(this,this,e)}}i=new WeakSet,n=function e(t,r){return r?.(t)?t:t.cause?s(this,i,"m",e).call(this,t.cause,r):t}},43691:function(e,t,r){"use strict";r.d(t,{$S:function(){return l},JK:function(){return s},X4:function(){return n},XZ:function(){return c},aH:function(){return o},wi:function(){return a}});var i=r(79092);class n extends i.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class a extends i.G{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class o extends i.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class s extends i.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class c extends i.G{constructor({connectionChainId:e,connectorChainId:t}){super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}class l extends i.G{constructor({connector:e}){super(`Connector "${e.name}" unavailable while reconnecting.`,{details:"During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uuid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorUnavailableReconnectingError"})}}},20528:function(e,t,r){"use strict";r.d(t,{M:function(){return n},O:function(){return a}});var i=r(79092);class n extends i.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class a extends i.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},1780:function(e,t,r){"use strict";r.d(t,{Dr:function(){return i}});let i={getItem:e=>"undefined"==typeof window?null:function(e,t){let r=e.split("; ").find(e=>e.startsWith(`${t}=`));if(r)return r.substring(t.length+1)}(document.cookie,e)??null,setItem(e,t){"undefined"!=typeof window&&(document.cookie=`${e}=${t};path=/;samesite=Lax`)},removeItem(e){"undefined"!=typeof window&&(document.cookie=`${e}=;max-age=-1;path=/`)}}},18640:function(e,t,r){"use strict";r.d(t,{v:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!==r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let a=Object.keys(t);if((i=a.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,a[n]))return!1;for(n=i;0!=n--;){let i=a[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}}})},57139:function(e,t,r){"use strict";function i(e,t,r){let i=e[t.name];if("function"==typeof i)return i;let n=e[r];return"function"==typeof n?n:r=>t(e,r)}r.d(t,{s:function(){return i}})},63050:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});let i="2.13.5"},48387:function(e,t,r){"use strict";r.d(t,{bq:function(){return M},Em:function(){return c},kg:function(){return S},UE:function(){return A},p1:function(){return l},C6:function(){return E},em:function(){return k},tU:function(){return T}});var i=r(54079),n=r(35820),a=r(11926),o=r(72307);i.extend(a),i.extend(o);let s={...n,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};i.locale("en-web3-modal",s);let c={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).locale("en-web3-modal").fromNow(!0),formatDate:(e,t="DD MMM")=>i(e).format(t)},l={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,parseEvmChainId(e){return"string"==typeof e?this.caipNetworkIdToNumber(e):e}};var u=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,d=Math.ceil,f=Math.floor,h="[BigNumber Error] ",p=h+"Number primitive has more than 15 significant digits: ",g=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function b(e){var t=0|e;return e>0||e===t?t:t-1}function m(e){for(var t,r,i=1,n=e.length,a=e[0]+"";i<n;){for(r=14-(t=e[i++]+"").length;r--;t="0"+t);a+=t}for(n=a.length;48===a.charCodeAt(--n););return a.slice(0,n+1||1)}function v(e,t){var r,i,n=e.c,a=t.c,o=e.s,s=t.s,c=e.e,l=t.e;if(!o||!s)return null;if(r=n&&!n[0],i=a&&!a[0],r||i)return r?i?0:-s:o;if(o!=s)return o;if(r=o<0,i=c==l,!n||!a)return i?0:!n^r?1:-1;if(!i)return c>l^r?1:-1;for(o=0,s=(c=n.length)<(l=a.length)?c:l;o<s;o++)if(n[o]!=a[o])return n[o]>a[o]^r?1:-1;return c==l?0:c>l^r?1:-1}function y(e,t,r,i){if(e<t||e>r||e!==f(e))throw Error(h+(i||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function w(e){var t=e.c.length-1;return b(e.e/14)==t&&e.c[t]%2!=0}function x(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function _(e,t,r){var i,n;if(t<0){for(n=r+".";++t;n+=r);e=n+e}else if(i=e.length,++t>i){for(n=r,t-=i;--t;n+=r);e+=n}else t<i&&(e=e.slice(0,t)+"."+e.slice(t));return e}var C=function e(t){var r,i,n,a,o,s,c,l,C,E=j.prototype={constructor:j,toString:null,valueOf:null},S=new j(1),k=20,A=4,M=-7,T=21,P=-1e7,I=1e7,O=!1,R=1,D=0,N={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},$="0123456789abcdefghijklmnopqrstuvwxyz",L=!0;function j(e,t){var r,i,n,a,o,s,c,d,h=this;if(!(h instanceof j))return new j(e,t);if(null==t){if(e&&!0===e._isBigNumber){h.s=e.s,!e.c||e.e>I?h.c=h.e=null:e.e<P?h.c=[h.e=0]:(h.e=e.e,h.c=e.c.slice());return}if((s="number"==typeof e)&&0*e==0){if(h.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,o=e;o>=10;o/=10,a++);a>I?h.c=h.e=null:(h.e=a,h.c=[e]);return}d=String(e)}else{if(!u.test(d=String(e)))return C(h,d,s);h.s=45==d.charCodeAt(0)?(d=d.slice(1),-1):1}(a=d.indexOf("."))>-1&&(d=d.replace(".","")),(o=d.search(/e/i))>0?(a<0&&(a=o),a+=+d.slice(o+1),d=d.substring(0,o)):a<0&&(a=d.length)}else{if(y(t,2,$.length,"Base"),10==t&&L)return Z(h=new j(e),k+h.e+1,A);if(d=String(e),s="number"==typeof e){if(0*e!=0)return C(h,d,s,t);if(h.s=1/e<0?(d=d.slice(1),-1):1,j.DEBUG&&d.replace(/^0\.0*|\./,"").length>15)throw Error(p+e)}else h.s=45===d.charCodeAt(0)?(d=d.slice(1),-1):1;for(r=$.slice(0,t),a=o=0,c=d.length;o<c;o++)if(0>r.indexOf(i=d.charAt(o))){if("."==i){if(o>a){a=c;continue}}else if(!n&&(d==d.toUpperCase()&&(d=d.toLowerCase())||d==d.toLowerCase()&&(d=d.toUpperCase()))){n=!0,o=-1,a=0;continue}return C(h,String(e),s,t)}s=!1,(a=(d=l(d,t,10,h.s)).indexOf("."))>-1?d=d.replace(".",""):a=d.length}for(o=0;48===d.charCodeAt(o);o++);for(c=d.length;48===d.charCodeAt(--c););if(d=d.slice(o,++c)){if(c-=o,s&&j.DEBUG&&c>15&&(e>9007199254740991||e!==f(e)))throw Error(p+h.s*e);if((a=a-o-1)>I)h.c=h.e=null;else if(a<P)h.c=[h.e=0];else{if(h.e=a,h.c=[],o=(a+1)%14,a<0&&(o+=14),o<c){for(o&&h.c.push(+d.slice(0,o)),c-=14;o<c;)h.c.push(+d.slice(o,o+=14));o=14-(d=d.slice(o)).length}else o-=c;for(;o--;d+="0");h.c.push(+d)}}else h.c=[h.e=0]}function U(e,t,r,i){var n,a,o,s,c;if(null==r?r=A:y(r,0,8),!e.c)return e.toString();if(n=e.c[0],o=e.e,null==t)c=m(e.c),c=1==i||2==i&&(o<=M||o>=T)?x(c,o):_(c,o,"0");else if(a=(e=Z(new j(e),t,r)).e,s=(c=m(e.c)).length,1==i||2==i&&(t<=a||a<=M)){for(;s<t;c+="0",s++);c=x(c,a)}else if(t-=o,c=_(c,a,"0"),a+1>s){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=a-s)>0)for(a+1==s&&(c+=".");t--;c+="0");return e.s<0&&n?"-"+c:c}function B(e,t){for(var r,i,n=1,a=new j(e[0]);n<e.length;n++)(i=new j(e[n])).s&&(r=v(a,i))!==t&&(0!==r||a.s!==t)||(a=i);return a}function z(e,t,r){for(var i=1,n=t.length;!t[--n];t.pop());for(n=t[0];n>=10;n/=10,i++);return(r=i+14*r-1)>I?e.c=e.e=null:r<P?e.c=[e.e=0]:(e.e=r,e.c=t),e}function Z(e,t,r,i){var n,a,o,s,c,l,u,h=e.c;if(h){e:{for(n=1,s=h[0];s>=10;s/=10,n++);if((a=t-n)<0)a+=14,o=t,u=f((c=h[l=0])/g[n-o-1]%10);else if((l=d((a+1)/14))>=h.length){if(i){for(;h.length<=l;h.push(0));c=u=0,n=1,a%=14,o=a-14+1}else break e}else{for(n=1,c=s=h[l];s>=10;s/=10,n++);a%=14,u=(o=a-14+n)<0?0:f(c/g[n-o-1]%10)}if(i=i||t<0||null!=h[l+1]||(o<0?c:c%g[n-o-1]),i=r<4?(u||i)&&(0==r||r==(e.s<0?3:2)):u>5||5==u&&(4==r||i||6==r&&(a>0?o>0?c/g[n-o]:0:h[l-1])%10&1||r==(e.s<0?8:7)),t<1||!h[0])return h.length=0,i?(t-=e.e+1,h[0]=g[(14-t%14)%14],e.e=-t||0):h[0]=e.e=0,e;if(0==a?(h.length=l,s=1,l--):(h.length=l+1,s=g[14-a],h[l]=o>0?f(c/g[n-o]%g[o])*s:0),i)for(;;){if(0==l){for(a=1,o=h[0];o>=10;o/=10,a++);for(o=h[0]+=s,s=1;o>=10;o/=10,s++);a!=s&&(e.e++,1e14==h[0]&&(h[0]=1));break}if(h[l]+=s,1e14!=h[l])break;h[l--]=0,s=1}for(a=h.length;0===h[--a];h.pop());}e.e>I?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}function F(e){var t,r=e.e;return null===r?e.toString():(t=m(e.c),t=r<=M||r>=T?x(t,r):_(t,r,"0"),e.s<0?"-"+t:t)}return j.clone=e,j.ROUND_UP=0,j.ROUND_DOWN=1,j.ROUND_CEIL=2,j.ROUND_FLOOR=3,j.ROUND_HALF_UP=4,j.ROUND_HALF_DOWN=5,j.ROUND_HALF_EVEN=6,j.ROUND_HALF_CEIL=7,j.ROUND_HALF_FLOOR=8,j.EUCLID=9,j.config=j.set=function(e){var t,r;if(null!=e){if("object"==typeof e){if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(y(r=e[t],0,1e9,t),k=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(y(r=e[t],0,8,t),A=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(y(r[0],-1e9,0,t),y(r[1],0,1e9,t),M=r[0],T=r[1]):(y(r,-1e9,1e9,t),M=-(T=r<0?-r:r))),e.hasOwnProperty(t="RANGE")){if((r=e[t])&&r.pop)y(r[0],-1e9,-1,t),y(r[1],1,1e9,t),P=r[0],I=r[1];else if(y(r,-1e9,1e9,t),r)P=-(I=r<0?-r:r);else throw Error(h+t+" cannot be zero: "+r)}if(e.hasOwnProperty(t="CRYPTO")){if(!!(r=e[t])===r){if(r){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))O=r;else throw O=!r,Error(h+"crypto unavailable")}else O=r}else throw Error(h+t+" not true or false: "+r)}if(e.hasOwnProperty(t="MODULO_MODE")&&(y(r=e[t],0,9,t),R=r),e.hasOwnProperty(t="POW_PRECISION")&&(y(r=e[t],0,1e9,t),D=r),e.hasOwnProperty(t="FORMAT")){if("object"==typeof(r=e[t]))N=r;else throw Error(h+t+" not an object: "+r)}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(h+t+" invalid: "+r);L="0123456789"==r.slice(0,10),$=r}}else throw Error(h+"Object expected: "+e)}return{DECIMAL_PLACES:k,ROUNDING_MODE:A,EXPONENTIAL_AT:[M,T],RANGE:[P,I],CRYPTO:O,MODULO_MODE:R,POW_PRECISION:D,FORMAT:N,ALPHABET:$}},j.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!j.DEBUG)return!0;var t,r,i=e.c,n=e.e,a=e.s;e:if("[object Array]"==({}).toString.call(i)){if((1===a||-1===a)&&n>=-1e9&&n<=1e9&&n===f(n)){if(0===i[0]){if(0===n&&1===i.length)return!0;break e}if((t=(n+1)%14)<1&&(t+=14),String(i[0]).length==t){for(t=0;t<i.length;t++)if((r=i[t])<0||r>=1e14||r!==f(r))break e;if(0!==r)return!0}}}else if(null===i&&null===n&&(null===a||1===a||-1===a))return!0;throw Error(h+"Invalid BigNumber: "+e)},j.maximum=j.max=function(){return B(arguments,-1)},j.minimum=j.min=function(){return B(arguments,1)},j.random=(r=9007199254740992*Math.random()&2097151?function(){return f(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(e){var t,i,n,a,o,s=0,c=[],l=new j(S);if(null==e?e=k:y(e,0,1e9),a=d(e/14),O){if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(a*=2));s<a;)(o=131072*t[s]+(t[s+1]>>>11))>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),t[s]=i[0],t[s+1]=i[1]):(c.push(o%1e14),s+=2);s=a/2}else if(crypto.randomBytes){for(t=crypto.randomBytes(a*=7);s<a;)(o=(31&t[s])*281474976710656+1099511627776*t[s+1]+4294967296*t[s+2]+16777216*t[s+3]+(t[s+4]<<16)+(t[s+5]<<8)+t[s+6])>=9e15?crypto.randomBytes(7).copy(t,s):(c.push(o%1e14),s+=7);s=a/7}else throw O=!1,Error(h+"crypto unavailable")}if(!O)for(;s<a;)(o=r())<9e15&&(c[s++]=o%1e14);for(a=c[--s],e%=14,a&&e&&(o=g[14-e],c[s]=f(a/o)*o);0===c[s];c.pop(),s--);if(s<0)c=[n=0];else{for(n=-1;0===c[0];c.splice(0,1),n-=14);for(s=1,o=c[0];o>=10;o/=10,s++);s<14&&(n-=14-s)}return l.e=n,l.c=c,l}),j.sum=function(){for(var e=1,t=arguments,r=new j(t[0]);e<t.length;)r=r.plus(t[e++]);return r},l=function(){var e="0123456789";function t(e,t,r,i){for(var n,a,o=[0],s=0,c=e.length;s<c;){for(a=o.length;a--;o[a]*=t);for(o[0]+=i.indexOf(e.charAt(s++)),n=0;n<o.length;n++)o[n]>r-1&&(null==o[n+1]&&(o[n+1]=0),o[n+1]+=o[n]/r|0,o[n]%=r)}return o.reverse()}return function(r,i,n,a,o){var s,l,u,d,f,h,p,g,b=r.indexOf("."),v=k,y=A;for(b>=0&&(d=D,D=0,r=r.replace(".",""),h=(g=new j(i)).pow(r.length-b),D=d,g.c=t(_(m(h.c),h.e,"0"),10,n,e),g.e=g.c.length),u=d=(p=t(r,i,n,o?(s=$,e):(s=e,$))).length;0==p[--d];p.pop());if(!p[0])return s.charAt(0);if(b<0?--u:(h.c=p,h.e=u,h.s=a,p=(h=c(h,g,v,y,n)).c,f=h.r,u=h.e),b=p[l=u+v+1],d=n/2,f=f||l<0||null!=p[l+1],f=y<4?(null!=b||f)&&(0==y||y==(h.s<0?3:2)):b>d||b==d&&(4==y||f||6==y&&1&p[l-1]||y==(h.s<0?8:7)),l<1||!p[0])r=f?_(s.charAt(1),-v,s.charAt(0)):s.charAt(0);else{if(p.length=l,f)for(--n;++p[--l]>n;)p[l]=0,l||(++u,p=[1].concat(p));for(d=p.length;!p[--d];);for(b=0,r="";b<=d;r+=s.charAt(p[b++]));r=_(r,u,s.charAt(0))}return r}}(),c=function(){function e(e,t,r){var i,n,a,o,s=0,c=e.length,l=t%1e7,u=t/1e7|0;for(e=e.slice();c--;)i=u*(a=e[c]%1e7)+(o=e[c]/1e7|0)*l,s=((n=l*a+i%1e7*1e7+s)/r|0)+(i/1e7|0)+u*o,e[c]=n%r;return s&&(e=[s].concat(e)),e}function t(e,t,r,i){var n,a;if(r!=i)a=r>i?1:-1;else for(n=a=0;n<r;n++)if(e[n]!=t[n]){a=e[n]>t[n]?1:-1;break}return a}function r(e,t,r,i){for(var n=0;r--;)e[r]-=n,n=e[r]<t[r]?1:0,e[r]=n*i+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,n,a,o,s){var c,l,u,d,h,p,g,m,v,y,w,x,_,C,E,S,k,A=i.s==n.s?1:-1,M=i.c,T=n.c;if(!M||!M[0]||!T||!T[0])return new j(i.s&&n.s&&(M?!T||M[0]!=T[0]:T)?M&&0==M[0]||!T?0*A:A/0:NaN);for(v=(m=new j(A)).c=[],A=a+(l=i.e-n.e)+1,s||(s=1e14,l=b(i.e/14)-b(n.e/14),A=A/14|0),u=0;T[u]==(M[u]||0);u++);if(T[u]>(M[u]||0)&&l--,A<0)v.push(1),d=!0;else{for(C=M.length,S=T.length,u=0,A+=2,(h=f(s/(T[0]+1)))>1&&(T=e(T,h,s),M=e(M,h,s),S=T.length,C=M.length),_=S,w=(y=M.slice(0,S)).length;w<S;y[w++]=0);k=[0].concat(k=T.slice()),E=T[0],T[1]>=s/2&&E++;do{if(h=0,(c=t(T,y,S,w))<0){if(x=y[0],S!=w&&(x=x*s+(y[1]||0)),(h=f(x/E))>1)for(h>=s&&(h=s-1),g=(p=e(T,h,s)).length,w=y.length;1==t(p,y,g,w);)h--,r(p,S<g?k:T,g,s),g=p.length,c=1;else 0==h&&(c=h=1),g=(p=T.slice()).length;if(g<w&&(p=[0].concat(p)),r(y,p,w,s),w=y.length,-1==c)for(;1>t(T,y,S,w);)h++,r(y,S<w?k:T,w,s),w=y.length}else 0===c&&(h++,y=[0]);v[u++]=h,y[0]?y[w++]=M[_]||0:(y=[M[_]],w=1)}while((_++<C||null!=y[0])&&A--);d=null!=y[0],v[0]||v.splice(0,1)}if(1e14==s){for(u=1,A=v[0];A>=10;A/=10,u++);Z(m,a+(m.e=u+14*l-1)+1,o,d)}else m.e=l,m.r=+d;return m}}(),i=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,a=/^\.([^.]+)$/,o=/^-?(Infinity|NaN)$/,s=/^\s*\+(?=[\w.])|^\s+|\s+$/g,C=function(e,t,r,c){var l,u=r?t:t.replace(s,"");if(o.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!r&&(u=u.replace(i,function(e,t,r){return l="x"==(r=r.toLowerCase())?16:"b"==r?2:8,c&&c!=l?e:t}),c&&(l=c,u=u.replace(n,"$1").replace(a,"0.$1")),t!=u))return new j(u,l);if(j.DEBUG)throw Error(h+"Not a"+(c?" base "+c:"")+" number: "+t);e.s=null}e.c=e.e=null},E.absoluteValue=E.abs=function(){var e=new j(this);return e.s<0&&(e.s=1),e},E.comparedTo=function(e,t){return v(this,new j(e,t))},E.decimalPlaces=E.dp=function(e,t){var r,i,n;if(null!=e)return y(e,0,1e9),null==t?t=A:y(t,0,8),Z(new j(this),e+this.e+1,t);if(!(r=this.c))return null;if(i=((n=r.length-1)-b(this.e/14))*14,n=r[n])for(;n%10==0;n/=10,i--);return i<0&&(i=0),i},E.dividedBy=E.div=function(e,t){return c(this,new j(e,t),k,A)},E.dividedToIntegerBy=E.idiv=function(e,t){return c(this,new j(e,t),0,1)},E.exponentiatedBy=E.pow=function(e,t){var r,i,n,a,o,s,c,l,u,p=this;if((e=new j(e)).c&&!e.isInteger())throw Error(h+"Exponent not an integer: "+F(e));if(null!=t&&(t=new j(t)),s=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return u=new j(Math.pow(+F(p),s?e.s*(2-w(e)):+F(e))),t?u.mod(t):u;if(c=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new j(NaN);(i=!c&&p.isInteger()&&t.isInteger())&&(p=p.mod(t))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||s&&p.c[1]>=24e7:p.c[0]<8e13||s&&p.c[0]<=9999975e7)))return a=p.s<0&&w(e)?-0:0,p.e>-1&&(a=1/a),new j(c?1/a:a);D&&(a=d(D/14+2))}for(s?(r=new j(.5),c&&(e.s=1),l=w(e)):l=(n=Math.abs(+F(e)))%2,u=new j(S);;){if(l){if(!(u=u.times(p)).c)break;a?u.c.length>a&&(u.c.length=a):i&&(u=u.mod(t))}if(n){if(0===(n=f(n/2)))break;l=n%2}else if(Z(e=e.times(r),e.e+1,1),e.e>14)l=w(e);else{if(0==(n=+F(e)))break;l=n%2}p=p.times(p),a?p.c&&p.c.length>a&&(p.c.length=a):i&&(p=p.mod(t))}return i?u:(c&&(u=S.div(u)),t?u.mod(t):a?Z(u,D,A,o):u)},E.integerValue=function(e){var t=new j(this);return null==e?e=A:y(e,0,8),Z(t,t.e+1,e)},E.isEqualTo=E.eq=function(e,t){return 0===v(this,new j(e,t))},E.isFinite=function(){return!!this.c},E.isGreaterThan=E.gt=function(e,t){return v(this,new j(e,t))>0},E.isGreaterThanOrEqualTo=E.gte=function(e,t){return 1===(t=v(this,new j(e,t)))||0===t},E.isInteger=function(){return!!this.c&&b(this.e/14)>this.c.length-2},E.isLessThan=E.lt=function(e,t){return 0>v(this,new j(e,t))},E.isLessThanOrEqualTo=E.lte=function(e,t){return -1===(t=v(this,new j(e,t)))||0===t},E.isNaN=function(){return!this.s},E.isNegative=function(){return this.s<0},E.isPositive=function(){return this.s>0},E.isZero=function(){return!!this.c&&0==this.c[0]},E.minus=function(e,t){var r,i,n,a,o=this.s;if(t=(e=new j(e,t)).s,!o||!t)return new j(NaN);if(o!=t)return e.s=-t,this.plus(e);var s=this.e/14,c=e.e/14,l=this.c,u=e.c;if(!s||!c){if(!l||!u)return l?(e.s=-t,e):new j(u?this:NaN);if(!l[0]||!u[0])return u[0]?(e.s=-t,e):new j(l[0]?this:3==A?-0:0)}if(s=b(s),c=b(c),l=l.slice(),o=s-c){for((a=o<0)?(o=-o,n=l):(c=s,n=u),n.reverse(),t=o;t--;n.push(0));n.reverse()}else for(i=(a=(o=l.length)<(t=u.length))?o:t,o=t=0;t<i;t++)if(l[t]!=u[t]){a=l[t]<u[t];break}if(a&&(n=l,l=u,u=n,e.s=-e.s),(t=(i=u.length)-(r=l.length))>0)for(;t--;l[r++]=0);for(t=1e14-1;i>o;){if(l[--i]<u[i]){for(r=i;r&&!l[--r];l[r]=t);--l[r],l[i]+=1e14}l[i]-=u[i]}for(;0==l[0];l.splice(0,1),--c);return l[0]?z(e,l,c):(e.s=3==A?-1:1,e.c=[e.e=0],e)},E.modulo=E.mod=function(e,t){var r,i;return(e=new j(e,t),this.c&&e.s&&(!e.c||e.c[0]))?e.c&&(!this.c||this.c[0])?(9==R?(i=e.s,e.s=1,r=c(this,e,0,3),e.s=i,r.s*=i):r=c(this,e,0,R),(e=this.minus(r.times(e))).c[0]||1!=R||(e.s=this.s),e):new j(this):new j(NaN)},E.multipliedBy=E.times=function(e,t){var r,i,n,a,o,s,c,l,u,d,f,h,p,g=this.c,m=(e=new j(e,t)).c;if(!g||!m||!g[0]||!m[0])return this.s&&e.s&&(!g||g[0]||m)&&(!m||m[0]||g)?(e.s*=this.s,g&&m?(e.c=[0],e.e=0):e.c=e.e=null):e.c=e.e=e.s=null,e;for(i=b(this.e/14)+b(e.e/14),e.s*=this.s,(c=g.length)<(d=m.length)&&(p=g,g=m,m=p,n=c,c=d,d=n),n=c+d,p=[];n--;p.push(0));for(n=d;--n>=0;){for(r=0,f=m[n]%1e7,h=m[n]/1e7|0,a=n+(o=c);a>n;)s=h*(l=g[--o]%1e7)+(u=g[o]/1e7|0)*f,r=((l=f*l+s%1e7*1e7+p[a]+r)/1e14|0)+(s/1e7|0)+h*u,p[a--]=l%1e14;p[a]=r}return r?++i:p.splice(0,1),z(e,p,i)},E.negated=function(){var e=new j(this);return e.s=-e.s||null,e},E.plus=function(e,t){var r,i=this.s;if(t=(e=new j(e,t)).s,!i||!t)return new j(NaN);if(i!=t)return e.s=-t,this.minus(e);var n=this.e/14,a=e.e/14,o=this.c,s=e.c;if(!n||!a){if(!o||!s)return new j(i/0);if(!o[0]||!s[0])return s[0]?e:new j(o[0]?this:0*i)}if(n=b(n),a=b(a),o=o.slice(),i=n-a){for(i>0?(a=n,r=s):(i=-i,r=o),r.reverse();i--;r.push(0));r.reverse()}for((i=o.length)-(t=s.length)<0&&(r=s,s=o,o=r,t=i),i=0;t;)i=(o[--t]=o[t]+s[t]+i)/1e14|0,o[t]=1e14===o[t]?0:o[t]%1e14;return i&&(o=[i].concat(o),++a),z(e,o,a)},E.precision=E.sd=function(e,t){var r,i,n;if(null!=e&&!!e!==e)return y(e,1,1e9),null==t?t=A:y(t,0,8),Z(new j(this),e,t);if(!(r=this.c))return null;if(i=14*(n=r.length-1)+1,n=r[n]){for(;n%10==0;n/=10,i--);for(n=r[0];n>=10;n/=10,i++);}return e&&this.e+1>i&&(i=this.e+1),i},E.shiftedBy=function(e){return y(e,-9007199254740991,9007199254740991),this.times("1e"+e)},E.squareRoot=E.sqrt=function(){var e,t,r,i,n,a=this.c,o=this.s,s=this.e,l=k+4,u=new j("0.5");if(1!==o||!a||!a[0])return new j(!o||o<0&&(!a||a[0])?NaN:a?this:1/0);if(0==(o=Math.sqrt(+F(this)))||o==1/0?(((t=m(a)).length+s)%2==0&&(t+="0"),o=Math.sqrt(+t),s=b((s+1)/2)-(s<0||s%2),r=new j(t=o==1/0?"5e"+s:(t=o.toExponential()).slice(0,t.indexOf("e")+1)+s)):r=new j(o+""),r.c[0]){for((o=(s=r.e)+l)<3&&(o=0);;)if(n=r,r=u.times(n.plus(c(this,n,l,1))),m(n.c).slice(0,o)===(t=m(r.c)).slice(0,o)){if(r.e<s&&--o,"9999"!=(t=t.slice(o-3,o+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(Z(r,r.e+k+2,1),e=!r.times(r).eq(this));break}if(!i&&(Z(n,n.e+k+2,0),n.times(n).eq(this))){r=n;break}l+=4,o+=4,i=1}}return Z(r,r.e+k+1,A,e)},E.toExponential=function(e,t){return null!=e&&(y(e,0,1e9),e++),U(this,e,t,1)},E.toFixed=function(e,t){return null!=e&&(y(e,0,1e9),e=e+this.e+1),U(this,e,t)},E.toFormat=function(e,t,r){var i;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=N;else if("object"!=typeof r)throw Error(h+"Argument not an object: "+r);if(i=this.toFixed(e,t),this.c){var n,a=i.split("."),o=+r.groupSize,s=+r.secondaryGroupSize,c=r.groupSeparator||"",l=a[0],u=a[1],d=this.s<0,f=d?l.slice(1):l,p=f.length;if(s&&(n=o,o=s,s=n,p-=n),o>0&&p>0){for(n=p%o||o,l=f.substr(0,n);n<p;n+=o)l+=c+f.substr(n,o);s>0&&(l+=c+f.slice(n)),d&&(l="-"+l)}i=u?l+(r.decimalSeparator||"")+((s=+r.fractionGroupSize)?u.replace(RegExp("\\d{"+s+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):u):l}return(r.prefix||"")+i+(r.suffix||"")},E.toFraction=function(e){var t,r,i,n,a,o,s,l,u,d,f,p,b=this.c;if(null!=e&&(!(s=new j(e)).isInteger()&&(s.c||1!==s.s)||s.lt(S)))throw Error(h+"Argument "+(s.isInteger()?"out of range: ":"not an integer: ")+F(s));if(!b)return new j(this);for(t=new j(S),u=r=new j(S),i=l=new j(S),p=m(b),a=t.e=p.length-this.e-1,t.c[0]=g[(o=a%14)<0?14+o:o],e=!e||s.comparedTo(t)>0?a>0?t:u:s,o=I,I=1/0,s=new j(p),l.c[0]=0;d=c(s,t,0,1),1!=(n=r.plus(d.times(i))).comparedTo(e);)r=i,i=n,u=l.plus(d.times(n=u)),l=n,t=s.minus(d.times(n=t)),s=n;return n=c(e.minus(r),i,0,1),l=l.plus(n.times(u)),r=r.plus(n.times(i)),l.s=u.s=this.s,a*=2,f=1>c(u,i,a,A).minus(this).abs().comparedTo(c(l,r,a,A).minus(this).abs())?[u,i]:[l,r],I=o,f},E.toNumber=function(){return+F(this)},E.toPrecision=function(e,t){return null!=e&&y(e,1,1e9),U(this,e,t,2)},E.toString=function(e){var t,r=this,i=r.s,n=r.e;return null===n?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=n<=M||n>=T?x(m(r.c),n):_(m(r.c),n,"0"):10===e&&L?t=_(m((r=Z(new j(r),k+n+1,A)).c),r.e,"0"):(y(e,2,$.length,"Base"),t=l(_(m(r.c),n,"0"),10,e,i,!0)),i<0&&r.c[0]&&(t="-"+t)),t},E.valueOf=E.toJSON=function(){return F(this)},E._isBigNumber=!0,E[Symbol.toStringTag]="BigNumber",E[Symbol.for("nodejs.util.inspect.custom")]=E.valueOf,null!=t&&j.set(t),j}();let E={bigNumber:e=>new C(e),multiply(e,t){if(void 0===e||void 0===t)return C(0);let r=new C(e),i=new C(t);return r.multipliedBy(i)},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},S={numericInputKeyDown(e,t,r){let i=e.metaKey||e.ctrlKey,n=e.key,a=n.toLocaleLowerCase(),o=","===n,s="."===n,c=n>="0"&&n<="9";i||"a"!==a&&"c"!==a&&"v"!==a&&"x"!==a||e.preventDefault(),"0"!==t||o||s||"0"!==n||e.preventDefault(),"0"===t&&c&&(r(n),e.preventDefault()),(o||s)&&(t||(r("0."),e.preventDefault()),(t?.includes(".")||t?.includes(","))&&e.preventDefault()),c||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(n)||s||o||e.preventDefault()}},k=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],A={URLS:{FAQ:"https://walletconnect.com/faq"}},M={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME_MAP:{evm:"Ethereum",solana:"Solana"}};function T(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}},68001:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return ea},ApiController:function(){return L},WM:function(){return v},fz:function(){return ew},Lr:function(){return F},RY:function(){return O},ConnectionController:function(){return K},ConnectorController:function(){return _},bq:function(){return c},j1:function(){return l},a:function(){return ev},Xs:function(){return k},IN:function(){return es},fB:function(){return D},ph:function(){return ed},OptionsController:function(){return U},Ie:function(){return M},RouterController:function(){return Q},_4:function(){return ex},Si:function(){return eh},SnackController:function(){return V},MO:function(){return b},nY:function(){return ei},ThemeController:function(){return w},fw:function(){return eg},sl:function(){return G}});var i=r(11562),n=r(81086),a=r(48387);let o="https://secure.walletconnect.org",s=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["evm"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["evm","solana"]}],c={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:{evm:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111"},CONVERT_SLIPPAGE_TOLERANCE:1},l={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=c.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=c.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+c.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(l.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!l.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t,r){window.open(e,t,r||"noreferrer noopener")},returnOpenHref:(e,t,r)=>window.open(e,t,r||"noreferrer noopener"),preloadImage:async e=>Promise.race([new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e}),l.wait(2e3)]),formatBalance(e,t){let r="0.000";if("string"==typeof e){let t=Number(e);if(t){let e=Math.floor(1e3*t)/1e3;e&&(r=e.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){let r;if("0"===e)r="0";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:"0"===r?"000":"",symbol:t}},getApiUrl:()=>a.bq.W3M_API_URL,getBlockchainApiUrl:()=>a.bq.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>a.bq.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let i=r[e.id],n=r[t.id];return void 0!==i&&void 0!==n?i-n:void 0!==i?-1:void 0!==n?1:0})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let[t,r]=e.toFixed(2).split(".");return{dollars:t,pennies:r}},isAddress(e,t="evm"){switch(t){case"evm":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))return!0;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let r=new Set;return e.filter(e=>{let i=e[t];return!r.has(i)&&(r.add(i),!0)})}};async function u(...e){let t=await fetch(...e);if(!t.ok)throw Error(`HTTP status code: ${t.status}`,{cause:t});return t}class d{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:r,...i}){let n=this.createUrl(i);return(await u(n,{method:"GET",headers:e,signal:t,cache:r})).json()}async getBlob({headers:e,signal:t,...r}){let i=this.createUrl(r);return(await u(i,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await u(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await u(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await u(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}}let f="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",p="@w3m/connected_connector",g="@w3m/connected_social",b={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(f,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(f);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(f)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=b.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedConnector(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(p)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(e){try{localStorage.setItem(g,e)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(g)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem("@w3m-storage/SOCIAL_USERNAME")}catch{console.info("Unable to get Connected Social Username")}}},m=(0,n.sj)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),v={state:m,subscribeNetworkImages:e=>(0,n.Ld)(m.networkImages,()=>e(m.networkImages)),subscribeKey:(e,t)=>(0,i.VW)(m,e,t),subscribe:e=>(0,n.Ld)(m,()=>e(m)),setWalletImage(e,t){m.walletImages[e]=t},setNetworkImage(e,t){m.networkImages[e]=t},setChainImage(e,t){m.chainImages[e]=t},setConnectorImage(e,t){m.connectorImages[e]=t},setTokenImage(e,t){m.tokenImages[e]=t},setCurrencyImage(e,t){m.currencyImages[e]=t}},y=(0,n.sj)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),w={state:y,subscribe:e=>(0,n.Ld)(y,()=>e(y)),setThemeMode(e){y.themeMode=e;try{let t=_.getAuthConnector();if(t){let r=w.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:(0,a.tU)(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){y.themeVariables={...y.themeVariables,...e};try{let e=_.getAuthConnector();if(e){let t=w.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,a.tU)(y.themeVariables,y.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,n.CO)(y)},x=(0,n.sj)({unMergedConnectors:[],connectors:[]}),_={state:x,subscribeKey:(e,t)=>(0,i.VW)(x,e,t),setConnectors(e){e.forEach(this.syncIfAuthConnector),x.unMergedConnectors=[...x.unMergedConnectors,...e],x.connectors=this.mergeMultiChainConnectors(x.unMergedConnectors)},mergeMultiChainConnectors(e){return Array.from(this.generateConnectorMapByName(e).values()).map(e=>e.length>1?{name:e[0]?.name,imageUrl:e[0]?.imageUrl,imageId:e[0]?.imageId,providers:this.getUniqueConnectorsByName(e),type:"MULTI_CHAIN"}:e[0])},generateConnectorMapByName(e){let t=new Map;return e.forEach(e=>{let{name:r}=e;if(!r)return;let i=t.get(r)||[];i.find(t=>t.chain===e.chain)||i.push(e),t.set(r,i)}),t},getUniqueConnectorsByName(e){let t=[];return e.forEach(e=>{t.find(t=>t.chain===e.chain)||t.push({...e,name:a.bq.CHAIN_NAME_MAP[e.chain]})}),t},addConnector(e){this.setConnectors([e])},getAuthConnector:()=>x.connectors.find(e=>"AUTH"===e.type),getAnnouncedConnectorRdns:()=>x.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>x.connectors,getConnector:(e,t)=>x.connectors.find(r=>r.explorerId===e||r.info?.rdns===t),syncIfAuthConnector(e){if("w3mAuth"!==e.id)return;let t=(0,n.CO)(U.state),r=w.getSnapshot().themeMode,i=w.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId}),e.provider.syncTheme({themeMode:r,themeVariables:i,w3mThemeVariables:(0,a.tU)(i,r)})}},C=new d({baseUrl:l.getAnalyticsUrl(),clientId:null}),E=["MODAL_CREATED"],S=(0,n.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),k={state:S,subscribe:e=>(0,n.Ld)(S,()=>e(S)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=U.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(E.includes(e.data.event)||"undefined"==typeof window)return;await C.post({path:"/e",headers:k._getApiHeaders(),body:{eventId:l.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){S.timestamp=Date.now(),S.data=e,U.state.enableAnalytics&&k._sendAnalyticsEvent(S)}},A=(0,n.sj)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),M={state:A,subscribe:e=>(0,n.Ld)(A,()=>e(A)),set(e){Object.assign(A,{...A,...e})}},T={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},P={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},I=(0,n.sj)({chains:(0,i.Yr)(),activeChain:void 0,activeCaipNetwork:void 0}),O={state:I,subscribeKey:(e,t)=>(0,i.VW)(I,e,t),subscribeChain(e){let t;return(0,n.Ld)(I.chains,()=>{let r=I.activeChain;if(r){let i=I.chains.get(r);t&&t===i||(t=i,e(i))}})},subscribeChainProp(e,t){let r;return(0,n.Ld)(I.chains,()=>{let i=I.activeChain;if(i){let n=I.chains.get(i)?.[e];r!==n&&(r=n,t(n))}})},initialize(e){let t=e?.[0];if(!t)throw Error("Adapter is required to initialize ChainController");I.activeChain=t.chain,M.set({activeChain:t.chain}),this.setActiveCaipNetwork(t.defaultChain),e.forEach(e=>{I.chains.set(e.chain,{chain:e.chain,connectionControllerClient:e.connectionControllerClient,networkControllerClient:e.networkControllerClient,accountState:T,networkState:P})})},setChainNetworkData(e,t,r=!1){if(!e)throw Error("Chain is required to update chain network data");let i=I.chains.get(e);i&&(i.networkState=(0,n.iH)({...i.networkState,...t}),I.chains.set(e,(0,n.iH)(i)),(r||1===I.chains.size||I.activeChain===e)&&D.replaceState(i.networkState))},setChainAccountData(e,t,r=!0){if(!e)throw Error("Chain is required to update chain account data");let i=I.chains.get(e);i&&(i.accountState=(0,n.iH)({...i.accountState,...t}),I.chains.set(e,i),(r||1===I.chains.size||I.activeChain===e)&&ea.replaceState(i.accountState))},setAccountProp(e,t,r){this.setChainAccountData(r,{[e]:t})},setActiveChain(e){let t=e?I.chains.get(e):void 0;t&&t.chain!==I.activeChain&&(I.activeChain=t.chain,I.activeCaipNetwork=t.networkState?.caipNetwork?(0,n.iH)(t.networkState?.caipNetwork):void 0,ea.replaceState(t.accountState),D.replaceState(t.networkState),this.setCaipNetwork(t.chain,t.networkState?.caipNetwork),M.set({activeChain:e,selectedNetworkId:t.networkState?.caipNetwork?.id}))},setActiveCaipNetwork(e){e&&(e.chain!==I.activeChain&&this.setActiveChain(e.chain),I.activeCaipNetwork=(0,n.iH)(e),I.activeChain=e.chain,this.setCaipNetwork(e.chain,e,!0),M.set({activeChain:e.chain,selectedNetworkId:e?.id}))},setCaipNetwork(e,t,r=!1){this.setChainNetworkData(e,{caipNetwork:t},r)},setActiveConnector(e){e&&(I.activeConnector=(0,n.iH)(e))},getNetworkControllerClient(){let e=I.activeChain;if(!e)throw Error("Chain is required to get network controller client");let t=I.chains.get(e);if(!t)throw Error("Chain adapter not found");if(!t.networkControllerClient)throw Error("NetworkController client not set");return t.networkControllerClient},getConnectionControllerClient(e){let t=e||I.activeChain;if(!t)throw Error("Chain is required to get connection controller client");let r=I.chains.get(t);if(!r)throw Error("Chain adapter not found");if(!r.connectionControllerClient)throw Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){let r=I.activeChain;if(t&&(r=t),!r)return;let i=I.chains.get(r)?.accountState;if(i)return i[e]},getNetworkProp(e){let t=I.activeChain;if(!t)return;let r=I.chains.get(t)?.networkState;if(r)return r[e]},resetAccount(e){if(!e)throw Error("Chain is required to set account prop");this.setChainAccountData(e,(0,n.iH)({isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0}))}},R=(0,n.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),D={state:R,replaceState(e){e&&Object.assign(R,(0,n.iH)(e))},subscribeKey(e,t){let r;return O.subscribeChainProp("networkState",i=>{if(i){let n=i[e];r!==n&&(r=n,t(n))}})},_getClient:()=>O.getNetworkControllerClient(),initializeDefaultNetwork(){let e=this.getRequestedCaipNetworks();e.length>0&&this.setCaipNetwork(e[0])},setDefaultCaipNetwork(e){e&&(O.setCaipNetwork(e.chain,e,!0),O.setChainNetworkData(e.chain,{isDefaultCaipNetwork:!0}),M.set({selectedNetworkId:e.id}))},setActiveCaipNetwork(e){e&&(O.setActiveCaipNetwork(e),O.setChainNetworkData(e.chain,{caipNetwork:e}),M.set({activeChain:e.chain,selectedNetworkId:e?.id}),O.state.chains.get(e.chain)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI())},setCaipNetwork(e){if(e){if(!e?.chain)throw Error("chain is required to set active network");O.setCaipNetwork(e?.chain,e),O.state.chains.get(e.chain)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI()}},setRequestedCaipNetworks(e,t){O.setChainNetworkData(t,{requestedCaipNetworks:e})},setAllowUnsupportedChain(e,t){O.setChainNetworkData(t||O.state.activeChain,{allowUnsupportedChain:e})},setSmartAccountEnabledNetworks(e,t){O.setChainNetworkData(t,{smartAccountEnabledNetworks:e})},getRequestedCaipNetworks(e){let t;if(!O.state.activeChain)throw Error("activeChain is required to get requested networks");if(e){if(!e)throw Error("chain is required to get requested networks");t=[e]}else t=[...O.state.chains.keys()];let r=[],i=[];return t.forEach(e=>{O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds&&r.push(...O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds||[]),O.state.chains.get(e)?.networkState?.requestedCaipNetworks&&i.push(...O.state.chains.get(e)?.networkState?.requestedCaipNetworks||[])}),l.sortRequestedNetworks(r,i)},async switchActiveNetwork(e){let t=e?O.state.chains.get(e.chain)?.networkControllerClient:void 0;if(!t)throw Error("networkControllerClient not found for given network object");O.setActiveCaipNetwork(e),await t?.switchCaipNetwork(e),e&&k.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},getApprovedCaipNetworkIds(e){if(e){if(!e)throw Error("chain is required to get approved network IDs");return O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds}let t=[];return Object.values(O.state.chains).forEach(e=>{e.networkState.approvedCaipNetworkIds&&t.push(...e.networkState?.approvedCaipNetworkIds||[])}),t},async setApprovedCaipNetworksData(e){let t=O.getNetworkControllerClient(),r=await t.getApprovedCaipNetworksData();if(!e)throw Error("chain is required to set approved network data");O.setChainNetworkData(e,{approvedCaipNetworkIds:r?.approvedCaipNetworkIds,supportsAllNetworks:r?.supportsAllNetworks||!1})},checkIfSupportedNetwork(){let e=O.state.activeChain;if(!e)return!1;let t=O.state.chains.get(e)?.networkState?.caipNetwork,r=this.getRequestedCaipNetworks();return!r.length||r?.some(e=>e.id===t?.id)},checkIfSmartAccountEnabled(){let e=a.p1.caipNetworkIdToNumber(R.caipNetwork?.id);if(!O.state.activeChain)throw Error("activeChain is required to check if smart account is enabled");if(!e)return!1;let t=O.getNetworkProp("smartAccountEnabledNetworks");return!!t?.includes(e)},resetNetwork(){let e=O.state.activeChain;if(!e)throw Error("chain is required to reset network");O.setChainNetworkData(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){let e=O.state.activeChain;if(!e)throw Error("chain is required to check if network supports all networks");return O.state.chains.get(e)?.networkState?.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{es.open({view:"UnsupportedChain"})},300)},getActiveNetworkTokenAddress(){let e=c.NATIVE_TOKEN_ADDRESS[this.state.caipNetwork?.chain||"evm"];return`${this.state.caipNetwork?.id||"eip155:1"}:${e}`}},N=new d({baseUrl:l.getApiUrl(),clientId:null}),$=(0,n.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),L={state:$,subscribeKey:(e,t)=>(0,i.VW)($,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=U.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},_filterOutExtensions:e=>U.state.isUniversalProvider?e.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):e,async _fetchWalletImage(e){let t=`${N.baseUrl}/getWalletImage/${e}`,r=await N.getBlob({path:t,headers:L._getApiHeaders()});v.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${N.baseUrl}/public/getAssetImage/${e}`,r=await N.getBlob({path:t,headers:L._getApiHeaders()});v.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${N.baseUrl}/public/getAssetImage/${e}`,r=await N.getBlob({path:t,headers:L._getApiHeaders()});v.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${N.baseUrl}/public/getCurrencyImage/${e}`,r=await N.getBlob({path:t,headers:L._getApiHeaders()});v.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${N.baseUrl}/public/getTokenImage/${e}`,r=await N.getBlob({path:t,headers:L._getApiHeaders()});v.setTokenImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let e=D.getRequestedCaipNetworks(),t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>L._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=_.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>L._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>L._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>L._fetchTokenImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=U.state;if(e?.length){let{data:t}=await N.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>L._fetchWalletImage(e))),$.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=U.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:a}=await N.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",chains:D.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:i?.join(",")}}),o=b.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),c=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...c].map(e=>L._fetchWalletImage(e))),$.recommended=n,$.count=a??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=U.state,n=[...$.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:a,count:o}=await N.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:String(e),entries:"40",chains:D.state.caipNetwork?.id,include:t?.join(","),exclude:n.join(",")}}),s=a.slice(0,20).map(e=>e.image_id).filter(Boolean);await Promise.allSettled(s.map(e=>L._fetchWalletImage(e))),$.wallets=l.uniqueBy([...$.wallets,...L._filterOutExtensions(a)],"id"),$.count=o>$.count?o:$.count,$.page=e},async searchWalletByIds({ids:e}){let{data:t}=await N.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",entries:String(e.length),chains:D.state.caipNetwork?.id,include:e?.join(",")}});t&&t.forEach(e=>{e?.rdns&&$.excludedRDNS.push(e.rdns)})},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=U.state;$.search=[];let{data:i}=await N.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",entries:"100",search:e?.trim(),chains:D.state.caipNetwork?.id,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>L._fetchWalletImage(e)),l.wait(300)]),$.search=L._filterOutExtensions(i)},async reFetchWallets(){$.page=1,$.wallets=[],await L.fetchFeaturedWallets(),await L.fetchRecommendedWallets()},prefetch(){let e=[L.fetchFeaturedWallets(),L.fetchRecommendedWallets(),L.fetchNetworkImages(),L.fetchConnectorImages()];void 0===U.state.enableAnalytics&&e.push(L.fetchAnalyticsConfig()),$.prefetchPromise=Promise.race([Promise.allSettled(e)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await N.get({path:"/getAnalyticsConfig",headers:L._getApiHeaders()});U.setEnableAnalytics(e)}},j=(0,n.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),U={state:j,subscribeKey:(e,t)=>(0,i.VW)(j,e,t),setOptions(e){Object.assign(j,e)},setProjectId(e){j.projectId=e},setAllWallets(e){j.allWallets=e},setIncludeWalletIds(e){j.includeWalletIds=e},setExcludeWalletIds(e){j.excludeWalletIds=e,e&&L.searchWalletByIds({ids:e})},setFeaturedWalletIds(e){j.featuredWalletIds=e},setTokens(e){j.tokens=e},setTermsConditionsUrl(e){j.termsConditionsUrl=e},setPrivacyPolicyUrl(e){j.privacyPolicyUrl=e},setCustomWallets(e){j.customWallets=e},setIsSiweEnabled(e){j.isSiweEnabled=e},setIsUniversalProvider(e){j.isUniversalProvider=e},setEnableAnalytics(e){j.enableAnalytics=e},setSdkVersion(e){j.sdkVersion=e},setMetadata(e){j.metadata=e},setOnrampEnabled(e){j.enableOnramp=e},setDisableAppend(e){j.disableAppend=e},setEIP6963Enabled(e){j.enableEIP6963=e},setHasMultipleAddresses(e){j.hasMultipleAddresses=e},setEnableSwaps(e){j.enableSwaps=e}},B={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},z=l.getBlockchainApiUrl(),Z=(0,n.sj)({clientId:null,api:new d({baseUrl:z,clientId:null})}),F={state:Z,fetchIdentity:({address:e})=>Z.api.get({path:`/v1/identity/${e}`,params:{projectId:U.state.projectId,sender:ea.state.address}}),fetchTransactions:({account:e,projectId:t,cursor:r,onramp:i,signal:n,cache:a,chainId:o})=>Z.api.get({path:`/v1/account/${e}/history`,params:{projectId:t,cursor:r,onramp:i,chainId:o},signal:n,cache:a}),fetchSwapQuote:({projectId:e,amount:t,userAddress:r,from:i,to:n,gasPrice:a})=>Z.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:e,amount:t,userAddress:r,from:i,to:n,gasPrice:a}}),fetchSwapTokens:({projectId:e,chainId:t})=>Z.api.get({path:"/v1/convert/tokens",params:{projectId:e,chainId:t}}),fetchTokenPrice:({projectId:e,addresses:t})=>Z.api.post({path:"/v1/fungible/price",body:{projectId:e,currency:"usd",addresses:t},headers:{"Content-Type":"application/json"}}),fetchSwapAllowance({projectId:e,tokenAddress:t,userAddress:r}){let{sdkType:i,sdkVersion:n}=U.state;return Z.api.get({path:"/v1/convert/allowance",params:{projectId:e,tokenAddress:t,userAddress:r},headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":n}})},fetchGasPrice({projectId:e,chainId:t}){let{sdkType:r,sdkVersion:i}=U.state;return Z.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":i},params:{projectId:e,chainId:t}})},generateSwapCalldata:({amount:e,from:t,projectId:r,to:i,userAddress:n})=>Z.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:c.CONVERT_SLIPPAGE_TOLERANCE},from:t,projectId:r,to:i,userAddress:n}}),generateApproveCalldata({from:e,projectId:t,to:r,userAddress:i}){let{sdkType:n,sdkVersion:a}=U.state;return Z.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":n,"x-sdk-version":a},params:{projectId:t,userAddress:i,from:e,to:r}})},async getBalance(e,t,r){let{sdkType:i,sdkVersion:n}=U.state;return Z.api.get({path:`/v1/account/${e}/balance`,headers:{"x-sdk-type":i,"x-sdk-version":n},params:{currency:"usd",projectId:U.state.projectId,chainId:t,forceUpdate:r}})},lookupEnsName:async e=>Z.api.get({path:`/v1/profile/account/${e}${a.bq.WC_NAME_SUFFIX}`,params:{projectId:U.state.projectId,apiVersion:"2"}}),reverseLookupEnsName:async({address:e})=>Z.api.get({path:`/v1/profile/reverse/${e}`,params:{sender:ea.state.address,projectId:U.state.projectId,apiVersion:"2"}}),getEnsNameSuggestions:async e=>Z.api.get({path:`/v1/profile/suggestions/${e}`,params:{projectId:U.state.projectId}}),registerEnsName:async({coinType:e,address:t,message:r,signature:i})=>Z.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:i},headers:{"Content-Type":"application/json"}}),generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:i,paymentAmount:n})=>(await Z.api.post({path:"/v1/generators/onrampurl",params:{projectId:U.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:n}})).url,async getOnrampOptions(){try{return await Z.api.get({path:"/v1/onramp/options",params:{projectId:U.state.projectId}})}catch(e){return B}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}){try{return await Z.api.post({path:"/v1/onramp/quote",params:{projectId:U.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}})}catch(e){return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},setClientId(e){Z.clientId=e,Z.api=new d({baseUrl:z,clientId:e})}},H=(0,n.sj)({message:"",variant:"success",open:!1}),V={state:H,subscribeKey:(e,t)=>(0,i.VW)(H,e,t),showLoading(e){H.message=e,H.variant="loading",H.open=!0},showSuccess(e){H.message=e,H.variant="success",H.open=!0},showError(e){let t=l.parseError(e);H.message=t,H.variant="error",H.open=!0},hide(){H.open=!1}};var W=r(39468);let q=(0,n.sj)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),G={state:q,subscribe:e=>(0,n.Ld)(q,()=>e(q)),setLastNetworkInView(e){q.lastNetworkInView=e},async fetchTransactions(e,t){let{projectId:r}=U.state;if(!r||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");q.loading=!0;try{let i=await F.fetchTransactions({account:e,projectId:r,cursor:q.next,onramp:t,cache:"coinbase"===t?"no-cache":void 0,chainId:D.state.caipNetwork?.id}),n=this.filterSpamTransactions(i.data),a=this.filterByConnectedChain(n),o=[...q.transactions,...a];q.loading=!1,"coinbase"===t?q.coinbaseTransactions=this.groupTransactionsByYearAndMonth(q.coinbaseTransactions,i.data):(q.transactions=o,q.transactionsByYear=this.groupTransactionsByYearAndMonth(q.transactionsByYear,a)),q.empty=0===o.length,q.next=i.next?i.next:void 0}catch(t){k.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:r,cursor:q.next,isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),V.showError("Failed to fetch transactions"),q.loading=!1,q.empty=!0,q.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),i=new Date(t.metadata.minedAt).getMonth(),n=e[r]??{},a=(n[i]??[]).filter(e=>e.id!==t.id);e[r]={...n,[i]:[...a,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),filterByConnectedChain(e){let t=D.state.caipNetwork?.id;return e.filter(e=>e.metadata.chain===t)},clearCursor(){q.next=void 0},resetTransactions(){q.transactions=[],q.transactionsByYear={},q.lastNetworkInView=void 0,q.loading=!1,q.empty=!1,q.next=void 0}},Y=(0,n.sj)({wcError:!1,buffering:!1}),K={state:Y,subscribeKey:(e,t)=>(0,i.VW)(Y,e,t),_getClient:e=>O.getConnectionControllerClient(e),setClient(e){Y._client=(0,n.iH)(e)},async connectWalletConnect(){b.setConnectedConnector("WALLET_CONNECT"),await this._getClient().connectWalletConnect(e=>{Y.wcUri=e,Y.wcPairingExpiry=l.getPairingExpiry()})},async connectExternal(e,t){await this._getClient(t).connectExternal?.(e),O.setActiveChain(t),b.setConnectedConnector(e.type)},async reconnectExternal(e){await this._getClient().reconnectExternal?.(e),b.setConnectedConnector(e.type)},async setPreferredAccountType(e){es.setLoading(!0);let t=_.getAuthConnector();t&&(await t?.provider.setPreferredAccount(e),await this.reconnectExternal(t),es.setLoading(!1),k.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:D.state.caipNetwork?.id||""}}))},async signMessage(e){return this._getClient().signMessage(e)},parseUnits(e,t){return this._getClient().parseUnits(e,t)},formatUnits(e,t){return this._getClient().formatUnits(e,t)},async sendTransaction(e){return this._getClient().sendTransaction(e)},async estimateGas(e){return this._getClient().estimateGas(e)},async writeContract(e){return this._getClient().writeContract(e)},async getEnsAddress(e){return this._getClient().getEnsAddress(e)},async getEnsAvatar(e){return this._getClient().getEnsAvatar(e)},checkInstalled(e,t){return this._getClient(t).checkInstalled?.(e)||!1},resetWcConnection(){Y.wcUri=void 0,Y.wcPairingExpiry=void 0,Y.wcLinking=void 0,Y.recentWallet=void 0,G.resetTransactions(),b.deleteWalletConnectDeepLink()},setWcLinking(e){Y.wcLinking=e},setWcError(e){Y.wcError=e,Y.buffering=!1},setRecentWallet(e){Y.recentWallet=e},setBuffering(e){Y.buffering=e},async disconnect(){let e=this._getClient();try{await e.disconnect(),this.resetWcConnection()}catch(e){throw Error("Failed to disconnect")}}},J={async getTokenList(){let e=D.state.caipNetwork,t=await F.fetchSwapTokens({chainId:e?.id,projectId:U.state.projectId});return t?.tokens?.map(e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]},async fetchGasPrice(){let e=U.state.projectId,t=D.state.caipNetwork;if(!t)return null;try{if("solana"===t.chain){let e=(await K.estimateGas({chainNamespace:"solana"})).toString();return{standard:e,fast:e,instant:e}}return await F.fetchGasPrice({projectId:e,chainId:t.id})}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:r,sourceTokenDecimals:i}){let n=U.state.projectId,a=await F.fetchSwapAllowance({projectId:n,tokenAddress:e,userAddress:t});if(a?.allowance&&r&&i){let e=K.parseUnits(r,i)||0;return BigInt(a.allowance)>=e}return!1},async getMyTokensWithBalance(e){let t=ea.state.address,r=D.state.caipNetwork;if(!t||!r)return[];let i=(await F.getBalance(t,r.id,e)).balances.filter(e=>"0"!==e.quantity.decimals);return ea.setTokenBalance(i,O.state.activeChain),this.mapBalancesToSwapTokens(i)},mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:D.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]},X=(0,n.sj)({view:"Connect",history:["Connect"],transactionStack:[]}),Q={state:X,subscribeKey:(e,t)=>(0,i.VW)(X,e,t),pushTransactionStack(e){X.transactionStack.push(e)},popTransactionStack(e){let t=X.transactionStack.pop();t&&(e?(this.goBack(),t?.onCancel?.()):(t.goBack?this.goBack():t.view&&this.reset(t.view),t?.onSuccess?.()))},push(e,t){e!==X.view&&(X.view=e,X.history.push(e),X.data=t)},reset(e){X.view=e,X.history=[e]},replace(e,t){X.history.length>=1&&X.history.at(-1)!==e&&(X.view=e,X.history[X.history.length-1]=e,X.data=t)},goBack(){if(X.history.length>1){X.history.pop();let[e]=X.history.slice(-1);e&&(X.view=e)}},goBackToIndex(e){if(X.history.length>1){X.history=X.history.slice(0,e+1);let[t]=X.history.slice(-1);t&&(X.view=t)}}},ee={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,r){let i=ee.getGasPriceInEther(t,r);return a.C6.bigNumber(e).multipliedBy(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:r,toTokenAmount:i}){let n=a.C6.bigNumber(e).multipliedBy(t),o=a.C6.bigNumber(i).multipliedBy(r);return n.minus(o).dividedBy(n).multipliedBy(100).toNumber()},getMaxSlippage(e,t){let r=a.C6.bigNumber(e).dividedBy(100);return a.C6.multiply(t,r).toNumber()},getProviderFee:(e,t=.0085)=>a.C6.bigNumber(e).multipliedBy(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!a.C6.bigNumber(e).isZero()||a.C6.bigNumber(a.C6.bigNumber(t||"0")).isGreaterThan(e),isInsufficientSourceTokenForSwap(e,t,r){let i=r?.find(e=>e.address===t)?.quantity?.numeric;return a.C6.bigNumber(i||"0").isLessThan(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:r,toTokenPrice:i,sourceTokenAmount:n}){if("0"===n||!e||!t)return"0";let o=e.decimals,s=t.decimals;if(i<=0)return"0";let c=a.C6.bigNumber(n).multipliedBy(.0085),l=a.C6.bigNumber(n).minus(c).multipliedBy(a.C6.bigNumber(10).pow(o)),u=a.C6.bigNumber(r).dividedBy(i),d=o-s;return l.multipliedBy(u).dividedBy(a.C6.bigNumber(10).pow(d)).dividedBy(a.C6.bigNumber(10).pow(s)).toFixed(s).toString()}},et={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:c.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},er=(0,n.sj)(et),ei={state:er,subscribe:e=>(0,n.Ld)(er,()=>e(er)),subscribeKey:(e,t)=>(0,i.VW)(er,e,t),getParams(){let e=ea.state.address,t=D.getActiveNetworkTokenAddress(),r=b.getConnectedConnector(),i=_.getAuthConnector();if(!e)throw Error("No address found to swap the tokens from.");let n=ea.state.caipAddress,o=!er.toToken?.address||!er.toToken?.decimals,s=!er.sourceToken?.address||!er.sourceToken?.decimals||!a.C6.bigNumber(er.sourceTokenAmount).isGreaterThan(0),c=!er.sourceTokenAmount;return{networkAddress:t,fromAddress:e,fromCaipAddress:ea.state.caipAddress,sourceTokenAddress:er.sourceToken?.address,toTokenAddress:er.toToken?.address,toTokenAmount:er.toTokenAmount,toTokenDecimals:er.toToken?.decimals,sourceTokenAmount:er.sourceTokenAmount,sourceTokenDecimals:er.sourceToken?.decimals,invalidToToken:o,invalidSourceToken:s,invalidSourceTokenAmount:c,availableToSwap:n&&!o&&!s&&!c,isAuthConnector:i?.walletFeatures&&"AUTH"===r}},setSourceToken(e){if(!e){er.sourceToken=e,er.sourceTokenAmount="",er.sourceTokenPriceInUSD=0;return}er.sourceToken=e,this.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){er.sourceTokenAmount=e},setToToken(e){if(!e){er.toToken=e,er.toTokenAmount="",er.toTokenPriceInUSD=0;return}er.toToken=e,this.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){er.toTokenAmount=e?a.C6.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){let{availableToSwap:r}=this.getParams(),i=er.tokensPriceMap[e]||0;i||(er.loadingPrices=!0,i=await this.getAddressPrice(e)),"sourceToken"===t?er.sourceTokenPriceInUSD=i:"toToken"===t&&(er.toTokenPriceInUSD=i),er.loadingPrices&&(er.loadingPrices=!1,r&&this.swapTokens())},switchTokens(){if(er.initializing||!er.initialized)return;let e=er.toToken?{...er.toToken}:void 0,t=er.sourceToken?{...er.sourceToken}:void 0,r=e&&""===er.toTokenAmount?"1":er.toTokenAmount;this.setSourceToken(e),this.setToToken(t),this.setSourceTokenAmount(r),this.setToTokenAmount(""),this.swapTokens()},resetState(){er.myTokensWithBalance=et.myTokensWithBalance,er.tokensPriceMap=et.tokensPriceMap,er.initialized=et.initialized,er.sourceToken=et.sourceToken,er.sourceTokenAmount=et.sourceTokenAmount,er.sourceTokenPriceInUSD=et.sourceTokenPriceInUSD,er.toToken=et.toToken,er.toTokenAmount=et.toTokenAmount,er.toTokenPriceInUSD=et.toTokenPriceInUSD,er.networkPrice=et.networkPrice,er.networkTokenSymbol=et.networkTokenSymbol,er.networkBalanceInUSD=et.networkBalanceInUSD,er.inputError=et.inputError},resetValues(){let{networkAddress:e}=this.getParams(),t=er.tokens?.find(t=>t.address===e);this.setSourceToken(t),this.setToToken(void 0)},getApprovalLoadingState:()=>er.loadingApprovalTransaction,clearError(){er.transactionError=void 0},async initializeState(){if(!er.initializing){if(er.initializing=!0,!er.initialized)try{await this.fetchTokens(),er.initialized=!0}catch(e){er.initialized=!1,V.showError("Failed to initialize swap"),Q.goBack()}er.initializing=!1}},async fetchTokens(){let{networkAddress:e}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();let t=er.tokens?.find(t=>t.address===e);t&&(er.networkTokenSymbol=t.symbol,this.setSourceToken(t),this.setSourceTokenAmount("1"))},async getTokenList(){let e=await J.getTokenList();er.tokens=e,er.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),er.suggestedTokens=e.filter(e=>!!c.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){let t=er.tokensPriceMap[e];if(t)return t;let r=(await F.fetchTokenPrice({projectId:U.state.projectId,addresses:[e]})).fungibles||[],i=[...er.tokens||[],...er.myTokensWithBalance||[]],n=i?.find(t=>t.address===e)?.symbol,a=parseFloat((r.find(e=>e.symbol.toLowerCase()===n?.toLowerCase())?.price||0).toString());return er.tokensPriceMap[e]=a,a},async getNetworkTokenPrice(){let{networkAddress:e}=this.getParams(),t=await F.fetchTokenPrice({projectId:U.state.projectId,addresses:[e]}).catch(()=>(V.showError("Failed to fetch network token price"),{fungibles:[]})),r=t.fungibles?.[0],i=r?.price.toString()||"0";er.tokensPriceMap[e]=parseFloat(i),er.networkTokenSymbol=r?.symbol||"",er.networkPrice=i},async getMyTokensWithBalance(e){let t=await J.getMyTokensWithBalance(e);t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(e){let{networkAddress:t}=this.getParams(),r=D.state.caipNetwork;if(!r)return;let i=e.find(e=>e.address===t);e.forEach(e=>{er.tokensPriceMap[e.address]=e.price||0}),er.myTokensWithBalance=e.filter(e=>e.address.startsWith(r.id)),er.networkBalanceInUSD=i?a.C6.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){let e=await J.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};if(D.state.caipNetwork?.chain==="solana")return er.gasFee=e.standard,er.gasPriceInUSD=a.C6.multiply(e.standard,er.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt(er.gasFee),gasPriceInUSD:Number(er.gasPriceInUSD)};{let t=e.standard,r=BigInt(t),i=BigInt(15e4),n=ee.getGasPriceInUSD(er.networkPrice,i,r);return er.gasFee=t,er.gasPriceInUSD=n,{gasPrice:r,gasPriceInUSD:n}}},async swapTokens(){let e=ea.state.address,t=er.sourceToken,r=er.toToken,i=a.C6.bigNumber(er.sourceTokenAmount).isGreaterThan(0);if(!r||!t||er.loadingPrices||!i)return;er.loadingQuote=!0;let n=a.C6.bigNumber(er.sourceTokenAmount).multipliedBy(10**t.decimals),o=await F.fetchSwapQuote({userAddress:e,projectId:U.state.projectId,from:t.address,to:r.address,gasPrice:er.gasFee,amount:n.toString()});er.loadingQuote=!1;let s=o?.quotes?.[0]?.toAmount;if(!s)return;let c=a.C6.bigNumber(s).dividedBy(10**r.decimals).toString();this.setToTokenAmount(c),this.hasInsufficientToken(er.sourceTokenAmount,t.address)?er.inputError="Insufficient balance":(er.inputError=void 0,this.setTransactionDetails())},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=this.getParams(),r=er.sourceToken,i=er.toToken;if(e&&t&&r&&i&&!er.loadingQuote)try{let t;return er.loadingBuildTransaction=!0,t=await J.fetchSwapAllowance({userAddress:e,tokenAddress:r.address,sourceTokenAmount:er.sourceTokenAmount,sourceTokenDecimals:r.decimals})?await this.createSwapTransaction():await this.createAllowanceTransaction(),er.loadingBuildTransaction=!1,er.fetchError=!1,t}catch(e){Q.goBack(),V.showError("Failed to check allowance"),er.loadingBuildTransaction=!1,er.approvalTransaction=void 0,er.swapTransaction=void 0,er.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,fromAddress:t,sourceTokenAddress:r,toTokenAddress:i}=this.getParams();if(e&&i){if(!r)throw Error("createAllowanceTransaction - No source token address found.");try{let n=await F.generateApproveCalldata({projectId:U.state.projectId,from:r,to:i,userAddress:e}),a=await K.estimateGas({address:t,to:l.getPlainAddress(n.tx.to),data:n.tx.data}),o={data:n.tx.data,to:l.getPlainAddress(n.tx.from),gas:a,gasPrice:BigInt(n.tx.eip155.gasPrice),value:BigInt(n.tx.value),toAmount:er.toTokenAmount};return er.swapTransaction=void 0,er.approvalTransaction=o,o}catch(e){Q.goBack(),V.showError("Failed to create approval transaction"),er.approvalTransaction=void 0,er.swapTransaction=void 0,er.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:r}=this.getParams(),i=er.sourceToken,n=er.toToken;if(!t||!r||!i||!n)return;let a=K.parseUnits(r,i.decimals).toString();try{let r=await F.generateSwapCalldata({projectId:U.state.projectId,userAddress:t,from:i.address,to:n.address,amount:a}),o=i.address===e,s=BigInt(r.tx.eip155.gas),c=BigInt(r.tx.eip155.gasPrice),u={data:r.tx.data,to:l.getPlainAddress(r.tx.to),gas:s,gasPrice:c,value:o?BigInt(a):BigInt("0"),toAmount:er.toTokenAmount};return er.gasPriceInUSD=ee.getGasPriceInUSD(er.networkPrice,s,c),er.approvalTransaction=void 0,er.swapTransaction=u,u}catch(e){Q.goBack(),V.showError("Failed to create transaction"),er.approvalTransaction=void 0,er.swapTransaction=void 0,er.fetchError=!0;return}},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:r}=this.getParams();er.loadingApprovalTransaction=!0;let i="Approve limit increase in your wallet";r?Q.pushTransactionStack({view:null,goBack:!0,onSuccess(){V.showLoading(i)}}):V.showLoading(i);try{await K.sendTransaction({address:t,to:e.to,data:e.data,value:BigInt(e.value),gasPrice:BigInt(e.gasPrice)}),await this.swapTokens(),await this.getTransaction(),er.approvalTransaction=void 0,er.loadingApprovalTransaction=!1}catch(e){er.transactionError=e?.shortMessage,er.loadingApprovalTransaction=!1,V.showError(e?.shortMessage||"Transaction error")}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:r,isAuthConnector:i}=this.getParams();er.loadingTransaction=!0;let n=`Swapping ${er.sourceToken?.symbol} to ${a.C6.formatNumberToLocalString(r,3)} ${er.toToken?.symbol}`,o=`Swapped ${er.sourceToken?.symbol} to ${a.C6.formatNumberToLocalString(r,3)} ${er.toToken?.symbol}`;i?Q.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){V.showLoading(n),ei.resetState()}}):V.showLoading("Confirm transaction in your wallet");try{let r=[er.sourceToken?.address,er.toToken?.address].join(","),n=await K.sendTransaction({address:t,to:e.to,data:e.data,gas:e.gas,gasPrice:BigInt(e.gasPrice),value:e.value});return er.loadingTransaction=!1,V.showSuccess(o),k.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:D.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),ei.resetState(),i||Q.replace("Account"),ei.getMyTokensWithBalance(r),n}catch(e){er.transactionError=e?.shortMessage,er.loadingTransaction=!1,V.showError(e?.shortMessage||"Transaction error"),k.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:D.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){let r=ee.isInsufficientSourceTokenForSwap(e,t,er.myTokensWithBalance);return ee.isInsufficientNetworkTokenForGas(er.networkBalanceInUSD,er.gasPriceInUSD)||r},setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=this.getParams();e&&t&&(er.gasPriceInUSD=ee.getGasPriceInUSD(er.networkPrice,BigInt(er.gasFee),BigInt(15e4)),er.priceImpact=ee.getPriceImpact({sourceTokenAmount:er.sourceTokenAmount,sourceTokenPriceInUSD:er.sourceTokenPriceInUSD,toTokenPriceInUSD:er.toTokenPriceInUSD,toTokenAmount:er.toTokenAmount}),er.maxSlippage=ee.getMaxSlippage(er.slippage,er.toTokenAmount),er.providerFee=ee.getProviderFee(er.sourceTokenAmount))}},en=(0,n.sj)({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),ea={state:en,replaceState(e){e&&Object.assign(en,(0,n.iH)(e))},subscribe:e=>O.subscribeChainProp("accountState",t=>{if(t)return e(t)}),subscribeKey(e,t){let r;return O.subscribeChainProp("accountState",i=>{if(i){let n=i[e];r!==n&&(r=n,t(n))}})},setIsConnected(e,t){O.setAccountProp("isConnected",e,t)},getChainIsConnected:e=>O.getAccountProp("isConnected",e),setCaipAddress(e,t){let r=e?l.getPlainAddress(e):void 0;O.setAccountProp("caipAddress",e,t),O.setAccountProp("address",r,t)},setBalance(e,t,r){O.setAccountProp("balance",e,r),O.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){O.setAccountProp("profileName",e,t)},setProfileImage(e,t){O.setAccountProp("profileImage",e,t)},setAddressExplorerUrl(e,t){O.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){O.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){O.setAccountProp("currentTab",e,O.state.activeChain)},setTokenBalance(e,t){e&&O.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){O.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){O.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){let i=O.getAccountProp("addressLabels",r)||new Map;i.set(e,t),O.setAccountProp("addressLabels",i,O.state.activeChain)},removeAddressLabel(e,t){let r=O.getAccountProp("addressLabels",t)||new Map;r.delete(e),O.setAccountProp("addressLabels",r,O.state.activeChain)},setConnectedWalletInfo(e,t){O.setAccountProp("connectedWalletInfo",e,t)},setPreferredAccountType(e,t){O.setAccountProp("preferredAccountType",e,t)},setSocialProvider(e,t){e&&O.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){e&&O.setAccountProp("socialWindow",(0,n.iH)(e),t)},setFarcasterUrl(e,t){e&&O.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(){let e=D.state.caipNetwork?.id,t=D.state.caipNetwork?.chain,r=ea.state.address;try{if(r&&e&&t){let i=await F.getBalance(r,e),n=i.balances.filter(e=>"0"!==e.quantity.decimals);this.setTokenBalance(n,t),ei.setBalances(J.mapBalancesToSwapTokens(i.balances))}}catch(e){V.showError("Failed to fetch token balance")}},resetAccount(e){O.resetAccount(e)}},eo=(0,n.sj)({loading:!1,open:!1,shake:!1}),es={state:eo,subscribe:e=>(0,n.Ld)(eo,()=>e(eo)),subscribeKey:(e,t)=>(0,i.VW)(eo,e,t),async open(e){await L.state.prefetchPromise;let t=ea.state.isConnected;e?.view?Q.reset(e.view):t?Q.reset("Account"):Q.reset("Connect"),eo.open=!0,M.set({open:!0}),k.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){let e=ea.state.isConnected||!1;eo.open=!1,M.set({open:!1}),k.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){eo.loading=e,M.set({loading:e})},shake(){eo.shake||(eo.shake=!0,setTimeout(()=>{eo.shake=!1},500))}},ec={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},el={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},eu=(0,n.sj)({providers:s,selectedProvider:null,error:null,purchaseCurrency:ec,paymentCurrency:el,purchaseCurrencies:[ec],paymentCurrencies:[],quotesLoading:!1}),ed={state:eu,subscribe:e=>(0,n.Ld)(eu,()=>e(eu)),subscribeKey:(e,t)=>(0,i.VW)(eu,e,t),setSelectedProvider(e){if(e&&"meld"===e.name){let t=O.state.activeChain===a.bq.CHAIN.SOLANA?"SOL":"USDC",r=ea.state.address??"",i=new URL(e.url);i.searchParams.append("publicKey","WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU"),i.searchParams.append("destinationCurrencyCode",t),i.searchParams.append("walletAddress",r),e.url=i.toString()}eu.selectedProvider=e},setPurchaseCurrency(e){eu.purchaseCurrency=e},setPaymentCurrency(e){eu.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){let e=await F.getOnrampOptions();eu.purchaseCurrencies=e.purchaseCurrencies,eu.paymentCurrencies=e.paymentCurrencies,eu.paymentCurrency=e.paymentCurrencies[0]||el,eu.purchaseCurrency=e.purchaseCurrencies[0]||ec,await L.fetchCurrencyImages(e.paymentCurrencies.map(e=>e.id)),await L.fetchTokenImages(e.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){eu.quotesLoading=!0;try{let e=await F.getOnrampQuote({purchaseCurrency:eu.purchaseCurrency,paymentCurrency:eu.paymentCurrency,amount:eu.paymentAmount?.toString()||"0",network:eu.purchaseCurrency?.symbol});return eu.quotesLoading=!1,eu.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return eu.error=e.message,eu.quotesLoading=!1,null}finally{eu.quotesLoading=!1}},resetState(){eu.providers=s,eu.selectedProvider=null,eu.error=null,eu.purchaseCurrency=ec,eu.paymentCurrency=el,eu.purchaseCurrencies=[ec],eu.paymentCurrencies=[],eu.paymentAmount=void 0,eu.purchaseAmount=void 0,eu.quotesLoading=!1}},ef=(0,n.sj)({loading:!1}),eh={state:ef,subscribe:e=>(0,n.Ld)(ef,()=>e(ef)),subscribeKey:(e,t)=>(0,i.VW)(ef,e,t),setToken(e){e&&(ef.token=(0,n.iH)(e))},setTokenAmount(e){ef.sendTokenAmount=e},setReceiverAddress(e){ef.receiverAddress=e},setReceiverProfileImageUrl(e){ef.receiverProfileImageUrl=e},setReceiverProfileName(e){ef.receiverProfileName=e},setGasPrice(e){ef.gasPrice=e},setGasPriceInUsd(e){ef.gasPriceInUSD=e},setLoading(e){ef.loading=e},sendToken(){switch(O.state.activeCaipNetwork?.chain){case"evm":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw Error("Unsupported chain")}},sendEvmToken(){this.state.token?.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(k.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:D.state.caipNetwork?.id||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&this.state.token?.quantity.decimals&&(k.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol,amount:this.state.sendTokenAmount,network:D.state.caipNetwork?.id||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async sendNativeToken(e){Q.pushTransactionStack({view:"Account",goBack:!1});let t=e.receiverAddress,r=ea.state.address,i=K.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{await K.sendTransaction({to:t,address:r,data:"0x",value:i,gasPrice:e.gasPrice}),V.showSuccess("Transaction started"),k.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:e.sendTokenAmount,network:D.state.caipNetwork?.id||""}}),this.resetSend()}catch(t){k.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:ea.state.preferredAccountType===W.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:e.sendTokenAmount,network:D.state.caipNetwork?.id||""}}),V.showError("Something went wrong")}},async sendERC20Token(e){Q.pushTransactionStack({view:"Account",goBack:!1});let t=K.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{ea.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress&&(await K.writeContract({fromAddress:ea.state.address,tokenAddress:l.getPlainAddress(e.tokenAddress),receiverAddress:e.receiverAddress,tokenAmount:t,method:"transfer",abi:a.em}),V.showSuccess("Transaction started"),this.resetSend())}catch(e){V.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){V.showError("Please enter a valid amount and receiver address");return}Q.pushTransactionStack({view:"Account",goBack:!1}),K.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),ea.fetchTokenBalance()}).catch(e=>{V.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",e)})},resetSend(){ef.token=void 0,ef.sendTokenAmount=void 0,ef.receiverAddress=void 0,ef.receiverProfileImageUrl=void 0,ef.receiverProfileName=void 0,ef.loading=!1}},ep=(0,n.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),eg={state:ep,subscribe:e=>(0,n.Ld)(ep,()=>e(ep)),subscribeKey:(e,t)=>(0,i.VW)(ep,e,t),showTooltip({message:e,triggerRect:t,variant:r}){ep.open=!0,ep.message=e,ep.triggerRect=t,ep.variant=r},hide(){ep.open=!1,ep.message="",ep.triggerRect={width:0,height:0,top:0,left:0}}},eb={convertEVMChainIdToCoinType(e){if(e>=2147483648)throw Error("Invalid chainId");return(2147483648|e)>>>0}},em=(0,n.sj)({suggestions:[],loading:!1}),ev={state:em,subscribe:e=>(0,n.Ld)(em,()=>e(em)),subscribeKey:(e,t)=>(0,i.VW)(em,e,t),async resolveName(e){try{return await F.lookupEnsName(e)}catch(e){throw Error(e?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(e){try{return await F.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{em.loading=!0,em.suggestions=[];let t=await F.getEnsNameSuggestions(e);return em.suggestions=t.suggestions.map(e=>({...e,name:e.name.replace(a.bq.WC_NAME_SUFFIX,"")}))||[],em.suggestions}catch(e){throw Error(this.parseEnsApiError(e,"Error fetching name suggestions"))}finally{em.loading=!1}},async getNamesForAddress(e){try{if(!D.state.caipNetwork)return[];return await F.reverseLookupEnsName({address:e})}catch(e){throw Error(this.parseEnsApiError(e,"Error fetching names for address"))}},async registerName(e){let t=D.state.caipNetwork;if(!t)throw Error("Network not found");let r=ea.state.address,i=_.getAuthConnector();if(!r||!i)throw Error("Address or auth connector not found");em.loading=!0;try{let i=JSON.stringify({name:`${e}${a.bq.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});Q.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){em.loading=!1}});let n=await K.signMessage(i),o=a.p1.caipNetworkIdToNumber(t.id);if(!o)throw Error("Network not found");let s=eb.convertEVMChainIdToCoinType(o);await F.registerEnsName({coinType:s,address:r,signature:n,message:i}),ea.setProfileName(`${e}${a.bq.WC_NAME_SUFFIX}`,O.state.activeChain),Q.replace("RegisterAccountNameSuccess")}catch(r){let t=this.parseEnsApiError(r,`Error registering name ${e}`);throw Q.replace("RegisterAccountName"),Error(t)}finally{em.loading=!1}},validateName:e=>/^[a-zA-Z0-9-]{4,}$/u.test(e),parseEnsApiError:(e,t)=>e?.reasons?.[0]?.description||t},ey={evm:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ew={async fetchWalletImage(e){if(e)return await L._fetchWalletImage(e),this.getWalletImageById(e)},getWalletImageById(e){if(e)return v.state.walletImages[e]},getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?v.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?v.state.networkImages[e.imageId]:void 0,getNetworkImageById(e){if(e)return v.state.networkImages[e]},getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?v.state.connectorImages[e.imageId]:void 0,getChainImage:e=>v.state.networkImages[ey[e]]},ex={goBackOrCloseModal(){Q.state.history.length>1?Q.goBack():es.close()},navigateAfterNetworkSwitch(){let{history:e}=Q.state,t=e.findIndex(e=>"Networks"===e);t>=1?Q.goBackToIndex(t-1):es.close()},navigateAfterPreferredAccountTypeSelect(){let{isSiweEnabled:e}=U.state;e&&O.state.activeChain===a.bq.CHAIN.EVM?Q.push("ConnectingSiwe"):Q.push("Account")}}},11557:function(e,t,r){"use strict";var i=r(5438);"undefined"==typeof window||(window.Buffer||(window.Buffer=i.lW),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}))},65852:function(e,t,r){"use strict";r.d(t,{SIWEController:function(){return s},ui:function(){return y},wv:function(){return u.wvx},getDidAddress:function(){return u.NmC},getDidChainId:function(){return u.ZzI}});var i=r(11562),n=r(81086),a=r(68001);let o=(0,n.sj)({status:"uninitialized"}),s={state:o,subscribeKey:(e,t)=>(0,i.VW)(o,e,t),subscribe:e=>(0,n.Ld)(o,()=>e(o)),_getClient(){if(!o._client)throw Error("SIWEController client not set");return o._client},async getNonce(e){let t=this._getClient(),r=await t.getNonce(e);return this.setNonce(r),r},async getSession(){try{let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){o._client=(0,n.iH)(e),o.status="ready",a.OptionsController.setIsSiweEnabled(e.options.enabled)},setNonce(e){o.nonce=e},setStatus(e){o.status=e},setMessage(e){o.message=e},setSession(e){o.session=e,o.status=e?"success":"ready"}};var c=r(48387);class l{constructor(e){let{enabled:t=!0,nonceRefetchIntervalMs:r=3e5,sessionRefetchIntervalMs:i=3e5,signOutOnAccountChange:n=!0,signOutOnDisconnect:a=!0,signOutOnNetworkChange:o=!0,...s}=e;this.options={enabled:t,nonceRefetchIntervalMs:r,sessionRefetchIntervalMs:i,signOutOnDisconnect:a,signOutOnAccountChange:n,signOutOnNetworkChange:o},this.methods=s}async getNonce(e){let t=await this.methods.getNonce(e);if(!t)throw Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await this.methods.getMessageParams?.()||{}}createMessage(e){let t=this.methods.createMessage(e);if(!t)throw Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){let e=await this.methods.getSession();if(!e)throw Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){if(!s.state._client)throw Error("SIWE client needs to be initialized before calling signIn");let e=a.AccountController.state.address,t=await this.methods.getNonce(e);if(!e)throw Error("An address is required to create a SIWE message.");let r=a.RY.getNetworkProp("caipNetwork");if(!r?.id)throw Error("A chainId is required to create a SIWE message.");let i=c.p1.caipNetworkIdToNumber(r.id);if(!i)throw Error("A chainId is required to create a SIWE message.");let n=s.state._client?.options.signOutOnNetworkChange;n&&(s.state._client.options.signOutOnNetworkChange=!1,await this.signOut()),await a.fB.switchActiveNetwork(r),n&&(s.state._client.options.signOutOnNetworkChange=!0);let o=await this.getMessageParams?.(),l=this.methods.createMessage({address:`eip155:${i}:${e}`,chainId:i,nonce:t,version:"1",iat:o?.iat||new Date().toISOString(),...o});"AUTH"===a.MO.getConnectedConnector()&&a.RouterController.pushTransactionStack({view:null,goBack:!1,replace:!0,onCancel(){a.RouterController.replace("ConnectingSiwe")}});let u=await a.ConnectionController.signMessage(l);if(!await this.methods.verifyMessage({message:l,signature:u}))throw Error("Error verifying SIWE signature");let d=await this.methods.getSession();if(!d)throw Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(d),a._4.navigateAfterNetworkSwitch(),d}async signOut(){return this.methods.onSignOut?.(),this.methods.signOut()}}var u=r(7197),d=r(93690),f=r(73089),h=(0,f.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let p=class extends f.oi{constructor(){super(...arguments),this.dappImageUrl=a.OptionsController.state.metadata?.icons,this.walletImageUrl=a.AccountController.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,f.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};p.styles=h,p=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,d.customElement)("w3m-connecting-siwe")],p);var g=r(47964),b=r(39468),m=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let v=class extends f.oi{constructor(){super(...arguments),this.dappName=a.OptionsController.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),(0,f.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){s.state.session&&a.IN.close()}async onSign(){this.isSigning=!0,a.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:a.fB.state.caipNetwork?.id||"",isSmartAccount:a.AccountController.state.preferredAccountType===b.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{s.setStatus("loading");let e=await s.signIn();return s.setStatus("success"),a.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:a.fB.state.caipNetwork?.id||"",isSmartAccount:a.AccountController.state.preferredAccountType===b.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(t){let e=a.AccountController.state.preferredAccountType===b.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return e?a.SnackController.showError("This application might not support Smart Accounts"):a.SnackController.showError("Signature declined"),s.setStatus("error"),a.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:a.fB.state.caipNetwork?.id||"",isSmartAccount:e}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,a.AccountController.state.isConnected?(await a.ConnectionController.disconnect(),a.IN.close()):a.RouterController.push("Connect"),this.isCancelling=!1,a.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:a.fB.state.caipNetwork?.id||"",isSmartAccount:a.AccountController.state.preferredAccountType===b.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};function y(e){return new l(e)}m([(0,g.SB)()],v.prototype,"isSigning",void 0),m([(0,g.SB)()],v.prototype,"isCancelling",void 0),m([(0,d.customElement)("w3m-connecting-siwe-view")],v)},93690:function(e,t,r){"use strict";let i,n,a;r.r(t),r.d(t,{MathUtil:function(){return nH},TransactionUtil:function(){return nq},UiHelperUtil:function(){return tA},WuiAccountButton:function(){return tU},WuiAllWalletsImage:function(){return tV},WuiAvatar:function(){return tR},WuiBalance:function(){return iX},WuiBanner:function(){return nn},WuiBannerImg:function(){return ns},WuiButton:function(){return tJ},WuiCard:function(){return x},WuiCardSelect:function(){return t7},WuiCardSelectLoader:function(){return t1},WuiChip:function(){return rr},WuiChipButton:function(){return i9},WuiCompatibleNetwork:function(){return nt},WuiConnectButton:function(){return ra},WuiCtaButton:function(){return rc},WuiDetailsGroup:function(){return ru},WuiDetailsGroupItem:function(){return rh},WuiDropdownMenu:function(){return rb},WuiEmailInput:function(){return rC},WuiEnsInput:function(){return rk},WuiFlex:function(){return tP},WuiGrid:function(){return nB},WuiIcon:function(){return eF},WuiIconBox:function(){return t$},WuiIconButton:function(){return nM},WuiIconLink:function(){return rT},WuiImage:function(){return eW},WuiInputAmount:function(){return nv},WuiInputElement:function(){return rO},WuiInputNumeric:function(){return rN},WuiInputText:function(){return rw},WuiLink:function(){return rj},WuiListAccordion:function(){return iL},WuiListAccount:function(){return nS},WuiListButton:function(){return nI},WuiListContent:function(){return iB},WuiListDescription:function(){return nh},WuiListItem:function(){return rz},WuiListNetwork:function(){return iF},WuiListSocial:function(){return nD},WuiListToken:function(){return nu},WuiListWallet:function(){return r1},WuiListWalletTransaction:function(){return iW},WuiLoadingHexagon:function(){return eG},WuiLoadingSpinner:function(){return eJ},WuiLoadingThumbnail:function(){return e0},WuiLogo:function(){return r3},WuiLogoSelect:function(){return r8},WuiNetworkButton:function(){return ie},WuiNetworkImage:function(){return t4},WuiNoticeCard:function(){return iD},WuiOtp:function(){return ii},WuiPreviewItem:function(){return nx},WuiProfileButton:function(){return i1},WuiProfileButtonV2:function(){return i6},WuiPromo:function(){return iY},WuiQrCode:function(){return iu},WuiSearchBar:function(){return ih},WuiSelect:function(){return nL},WuiSeparator:function(){return nF},WuiShimmer:function(){return e5},WuiSnackbar:function(){return ib},WuiTabs:function(){return iy},WuiTag:function(){return rX},WuiText:function(){return e7},WuiTokenButton:function(){return i_},WuiTokenListItem:function(){return iM},WuiTooltip:function(){return iS},WuiTransactionListItem:function(){return rq},WuiTransactionListItemLoader:function(){return rY},WuiTransactionVisual:function(){return rH},WuiVisual:function(){return tS},WuiVisualThumbnail:function(){return iI},WuiWalletImage:function(){return tZ},customElement:function(){return y},initializeTheming:function(){return f},setColorTheme:function(){return h},setThemeVariables:function(){return p},swapInputMaskBottomSvg:function(){return l},swapInputMaskTopSvg:function(){return u}});var o,s,c=r(73089);let l=(0,c.YP)`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,u=(0,c.YP)`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var d=r(48387);function f(e,t){i=document.createElement("style"),n=document.createElement("style"),a=document.createElement("style"),i.textContent=g(e).core.cssText,n.textContent=g(e).dark.cssText,a.textContent=g(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(a),h(t)}function h(e){n&&a&&("light"===e?(n.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),n.media="enabled"))}function p(e){i&&n&&a&&(i.textContent=g(e).core.cssText,n.textContent=g(e).dark.cssText,a.textContent=g(e).light.cssText)}function g(e){return{core:(0,c.iv)`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,c.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,c.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,c.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,c.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,c.$m)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:(0,c.iv)`
      :root {
        --w3m-color-mix: ${(0,c.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,c.$m)((0,d.tU)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,c.$m)((0,d.tU)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:(0,c.iv)`
      :root {
        --w3m-color-mix: ${(0,c.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,c.$m)((0,d.tU)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,c.$m)((0,d.tU)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}let b=(0,c.iv)`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,m=(0,c.iv)`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,v=(0,c.iv)`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function y(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var w=(0,c.iv)`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let x=class extends c.oi{render(){return(0,c.dy)`<slot></slot>`}};x.styles=[b,w],x=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([y("wui-card")],x);var _=r(47964),C=(0,c.iv)`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let E=(0,c.YP)`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,S=(0,c.YP)`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,k=(0,c.YP)`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,A=(0,c.YP)`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,M=(0,c.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,T=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,P=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,I=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,O=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,R=(0,c.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,D=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,N=(0,c.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,$=(0,c.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,L=(0,c.YP)`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,j=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,U=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,B=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,z=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Z=(0,c.YP)`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,F=(0,c.YP)`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,H=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,V=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,W=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,q=(0,c.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,G=(0,c.YP)` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Y=(0,c.YP)`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,K=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,J=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,X=(0,c.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Q=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,ee=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,et=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,er=(0,c.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ei=(0,c.YP)`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,en=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ea=(0,c.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eo=(0,c.YP)`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,es=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ec=(0,c.YP)`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,el=(0,c.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,eu=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ed=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ef=(0,c.YP)`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,eh=(0,c.YP)`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ep=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,eg=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,eb=(0,c.YP)` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,em=(0,c.YP)`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,ev=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ey=(0,c.YP)`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,ew=(0,c.YP)`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ex=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,e_=(0,c.YP)`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,eC=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eE=(0,c.YP)`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,eS=(0,c.YP)`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,ek=(0,c.YP)`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,eA=(0,c.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eM=(0,c.YP)`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,eT=(0,c.YP)`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,eP=(0,c.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eI=(0,c.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,eO=(0,c.YP)`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,eR=(0,c.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,eD=(0,c.YP)`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,eN=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,e$=(0,c.YP)`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eL=(0,c.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,ej=(0,c.YP)`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,eU=(0,c.YP)`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,eB=(0,c.YP)`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var ez=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eZ={add:E,allWallets:S,arrowBottomCircle:k,appStore:A,apple:M,arrowBottom:T,arrowLeft:P,arrowRight:I,arrowTop:O,bank:R,browser:D,card:N,checkmark:L,checkmarkBold:$,chevronBottom:j,chevronLeft:U,chevronRight:B,chevronTop:z,chromeStore:Z,clock:F,close:H,compass:W,coinPlaceholder:V,copy:q,cursor:G,cursorTransparent:Y,desktop:K,disconnect:J,discord:X,etherscan:Q,extension:ee,externalLink:et,facebook:er,farcaster:ei,filters:en,github:ea,google:eo,helpCircle:es,image:ec,id:eU,infoCircle:el,lightbulb:ej,mail:eu,mobile:ed,more:ef,networkPlaceholder:eh,nftPlaceholder:ep,off:eg,playStore:eb,plus:em,qrCode:ev,recycleHorizontal:ey,refresh:ew,search:ex,send:e_,swapHorizontal:eC,swapHorizontalMedium:eS,swapHorizontalBold:eE,swapHorizontalRoundedBold:ek,swapVertical:eA,telegram:eM,threeDots:eT,twitch:eP,twitter:eB,twitterIcon:eI,verify:eO,verifyFilled:eR,wallet:eN,walletConnect:e$,walletPlaceholder:eD,warningCircle:eL,x:eB},eF=class extends c.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,(0,c.dy)`${eZ[this.name]}`}};eF.styles=[b,v,C],ez([(0,_.Cb)()],eF.prototype,"size",void 0),ez([(0,_.Cb)()],eF.prototype,"name",void 0),ez([(0,_.Cb)()],eF.prototype,"color",void 0),eF=ez([y("wui-icon")],eF);var eH=(0,c.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,eV=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eW=class extends c.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,c.dy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};eW.styles=[b,v,eH],eV([(0,_.Cb)()],eW.prototype,"src",void 0),eV([(0,_.Cb)()],eW.prototype,"alt",void 0),eV([(0,_.Cb)()],eW.prototype,"size",void 0),eW=eV([y("wui-image")],eW);var eq=(0,c.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let eG=class extends c.oi{render(){return(0,c.dy)`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eG.styles=[b,eq],eG=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([y("wui-loading-hexagon")],eG);var eY=(0,c.iv)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eK=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eJ=class extends c.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,(0,c.dy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eJ.styles=[b,eY],eK([(0,_.Cb)()],eJ.prototype,"color",void 0),eK([(0,_.Cb)()],eJ.prototype,"size",void 0),eJ=eK([y("wui-loading-spinner")],eJ);var eX=(0,c.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eQ=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let e0=class extends c.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,c.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};e0.styles=[b,eX],eQ([(0,_.Cb)({type:Number})],e0.prototype,"radius",void 0),e0=eQ([y("wui-loading-thumbnail")],e0);var e1=(0,c.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,e2=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let e5=class extends c.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,c.dy)`<slot></slot>`}};e5.styles=[e1],e2([(0,_.Cb)()],e5.prototype,"width",void 0),e2([(0,_.Cb)()],e5.prototype,"height",void 0),e2([(0,_.Cb)()],e5.prototype,"borderRadius",void 0),e2([(0,_.Cb)()],e5.prototype,"variant",void 0),e5=e2([y("wui-shimmer")],e5);var e3=r(97426),e6=r(90606);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e4=(0,e6.XM)(class extends e6.Xe{constructor(e){if(super(e),e.type!==e6.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return e3.Jb}});var e8=(0,c.iv)`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,e9=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let e7=class extends c.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,c.dy)`<slot class=${e4(e)}></slot>`}};e7.styles=[b,e8],e9([(0,_.Cb)()],e7.prototype,"variant",void 0),e9([(0,_.Cb)()],e7.prototype,"color",void 0),e9([(0,_.Cb)()],e7.prototype,"align",void 0),e9([(0,_.Cb)()],e7.prototype,"lineClamp",void 0),e7=e9([y("wui-text")],e7);let te=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,tt=(0,c.YP)`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tr=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,ti=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tn=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,ta=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,to=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ts=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tc=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tl=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,tu=(0,c.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,td=(0,c.YP)`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,tf=(0,c.YP)`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,th=(0,c.YP)`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,tp=(0,c.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tg=(0,c.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tb=(0,c.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tm=(0,c.YP)`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,tv=(0,c.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,ty=(0,c.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,tw=(0,c.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,tx=(0,c.YP)`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`;var t_=(0,c.iv)`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,tC=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tE={browser:te,dao:tt,defi:tr,defiAlt:ti,eth:tn,layers:ta,lock:to,login:ts,network:tc,nft:tl,noun:tu,profile:td,system:tf,coinbase:th,meld:tx,onrampCard:tm,moonpay:tp,stripe:tg,paypal:tb,google:tv,pencil:ty,lightbulb:tw},tS=class extends c.oi{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,(0,c.dy)`${tE[this.name]}`}};tS.styles=[b,t_],tC([(0,_.Cb)()],tS.prototype,"name",void 0),tC([(0,_.Cb)()],tS.prototype,"size",void 0),tS=tC([y("wui-visual")],tS);var tk=r(83395);let tA={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){try{return new URL(e).hostname}catch(e){return""}},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),a=`${n}% ${n}% at 65% 40%`,o=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);o.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>e.toString().length>=t?Number(e).toFixed(r):e,formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})};var tM=(0,c.iv)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,tT=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tP=class extends c.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tA.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tA.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tA.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tA.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tA.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tA.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tA.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tA.getSpacingStyles(this.margin,3)};
    `,(0,c.dy)`<slot></slot>`}};tP.styles=[b,tM],tT([(0,_.Cb)()],tP.prototype,"flexDirection",void 0),tT([(0,_.Cb)()],tP.prototype,"flexWrap",void 0),tT([(0,_.Cb)()],tP.prototype,"flexBasis",void 0),tT([(0,_.Cb)()],tP.prototype,"flexGrow",void 0),tT([(0,_.Cb)()],tP.prototype,"flexShrink",void 0),tT([(0,_.Cb)()],tP.prototype,"alignItems",void 0),tT([(0,_.Cb)()],tP.prototype,"justifyContent",void 0),tT([(0,_.Cb)()],tP.prototype,"columnGap",void 0),tT([(0,_.Cb)()],tP.prototype,"rowGap",void 0),tT([(0,_.Cb)()],tP.prototype,"gap",void 0),tT([(0,_.Cb)()],tP.prototype,"padding",void 0),tT([(0,_.Cb)()],tP.prototype,"margin",void 0),tP=tT([y("wui-flex")],tP);var tI=(0,c.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,tO=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tR=class extends c.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,(0,c.dy)`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=tA.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};tR.styles=[b,tI],tO([(0,_.Cb)()],tR.prototype,"imageSrc",void 0),tO([(0,_.Cb)()],tR.prototype,"alt",void 0),tO([(0,_.Cb)()],tR.prototype,"address",void 0),tO([(0,_.Cb)()],tR.prototype,"size",void 0),tR=tO([y("wui-avatar")],tR);var tD=(0,c.iv)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,tN=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t$=class extends c.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i="gray"===this.background,n="opaque"===this.background,a="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n,o=`var(--wui-color-${this.backgroundColor})`;return a?o=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(o=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${o};
       --local-bg-mix: ${a||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,c.dy)` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};t$.styles=[b,m,tD],tN([(0,_.Cb)()],t$.prototype,"size",void 0),tN([(0,_.Cb)()],t$.prototype,"backgroundColor",void 0),tN([(0,_.Cb)()],t$.prototype,"iconColor",void 0),tN([(0,_.Cb)()],t$.prototype,"iconSize",void 0),tN([(0,_.Cb)()],t$.prototype,"background",void 0),tN([(0,_.Cb)({type:Boolean})],t$.prototype,"border",void 0),tN([(0,_.Cb)()],t$.prototype,"borderColor",void 0),tN([(0,_.Cb)()],t$.prototype,"icon",void 0),t$=tN([y("wui-icon-box")],t$);var tL=(0,c.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,tj=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tU=class extends c.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return(0,c.dy)`
      <button
        ?disabled=${this.disabled}
        class=${(0,tk.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?tA.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return(0,c.dy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?(0,c.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,c.dy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return(0,c.dy)`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};tU.styles=[b,m,tL],tj([(0,_.Cb)()],tU.prototype,"networkSrc",void 0),tj([(0,_.Cb)()],tU.prototype,"avatarSrc",void 0),tj([(0,_.Cb)()],tU.prototype,"balance",void 0),tj([(0,_.Cb)({type:Boolean})],tU.prototype,"isUnsupportedChain",void 0),tj([(0,_.Cb)({type:Boolean})],tU.prototype,"disabled",void 0),tj([(0,_.Cb)()],tU.prototype,"address",void 0),tj([(0,_.Cb)()],tU.prototype,"profileName",void 0),tj([(0,_.Cb)()],tU.prototype,"charsStart",void 0),tj([(0,_.Cb)()],tU.prototype,"charsEnd",void 0),tU=tj([y("wui-account-button")],tU);var tB=(0,c.iv)`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,tz=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tZ=class extends c.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,c.dy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,c.dy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,c.dy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tZ.styles=[b,tB],tz([(0,_.Cb)()],tZ.prototype,"size",void 0),tz([(0,_.Cb)()],tZ.prototype,"name",void 0),tz([(0,_.Cb)()],tZ.prototype,"imageSrc",void 0),tz([(0,_.Cb)()],tZ.prototype,"walletIcon",void 0),tz([(0,_.Cb)({type:Boolean})],tZ.prototype,"installed",void 0),tz([(0,_.Cb)()],tZ.prototype,"badgeSize",void 0),tZ=tz([y("wui-wallet-image")],tZ);var tF=(0,c.iv)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,tH=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tV=class extends c.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return(0,c.dy)`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>(0,c.dy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,tk.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>(0,c.dy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tV.styles=[b,tF],tH([(0,_.Cb)({type:Array})],tV.prototype,"walletImages",void 0),tV=tH([y("wui-all-wallets-image")],tV);var tW=(0,c.iv)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,tq=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tG={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},tY={lg:"paragraph-600",md:"small-600"},tK={lg:"md",md:"md"},tJ=class extends c.oi{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??tY[this.size];return(0,c.dy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let e=tK[this.size],t=this.disabled?tG.disabled:tG[this.variant];return(0,c.dy)`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return(0,c.dy)``}};tJ.styles=[b,m,tW],tq([(0,_.Cb)()],tJ.prototype,"size",void 0),tq([(0,_.Cb)({type:Boolean})],tJ.prototype,"disabled",void 0),tq([(0,_.Cb)({type:Boolean})],tJ.prototype,"fullWidth",void 0),tq([(0,_.Cb)({type:Boolean})],tJ.prototype,"loading",void 0),tq([(0,_.Cb)()],tJ.prototype,"variant",void 0),tq([(0,_.Cb)({type:Boolean})],tJ.prototype,"hasIconLeft",void 0),tq([(0,_.Cb)({type:Boolean})],tJ.prototype,"hasIconRight",void 0),tq([(0,_.Cb)()],tJ.prototype,"borderRadius",void 0),tq([(0,_.Cb)()],tJ.prototype,"textVariant",void 0),tJ=tq([y("wui-button")],tJ);let tX=(0,c.YP)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tQ=(0,c.iv)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`,t0=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t1=class extends c.oi{constructor(){super(...arguments),this.type="wallet"}render(){return(0,c.dy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,c.dy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tX}`:(0,c.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};t1.styles=[b,m,tQ],t0([(0,_.Cb)()],t1.prototype,"type",void 0),t1=t0([y("wui-card-select-loader")],t1);let t2=(0,c.YP)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,t5=(0,c.YP)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var t3=(0,c.iv)`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,t6=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t4=class extends c.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:t2,md:tX,lg:t5},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,(0,c.dy)`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};t4.styles=[b,t3],t6([(0,_.Cb)()],t4.prototype,"size",void 0),t6([(0,_.Cb)()],t4.prototype,"name",void 0),t6([(0,_.Cb)({type:Object})],t4.prototype,"networkImagesBySize",void 0),t6([(0,_.Cb)()],t4.prototype,"imageSrc",void 0),t6([(0,_.Cb)({type:Boolean})],t4.prototype,"selected",void 0),t6([(0,_.Cb)({type:Boolean})],t4.prototype,"round",void 0),t4=t6([y("wui-network-image")],t4);var t8=(0,c.iv)`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`,t9=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t7=class extends c.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return(0,c.dy)`
      <button data-selected=${(0,tk.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?(0,c.dy)`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tk.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:(0,c.dy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,tk.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};t7.styles=[b,m,t8],t9([(0,_.Cb)()],t7.prototype,"name",void 0),t9([(0,_.Cb)()],t7.prototype,"type",void 0),t9([(0,_.Cb)()],t7.prototype,"imageSrc",void 0),t9([(0,_.Cb)({type:Boolean})],t7.prototype,"disabled",void 0),t9([(0,_.Cb)({type:Boolean})],t7.prototype,"selected",void 0),t9([(0,_.Cb)({type:Boolean})],t7.prototype,"installed",void 0),t7=t9([y("wui-card-select")],t7);var re=(0,c.iv)`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,rt=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rr=class extends c.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,c.dy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:tA.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}};rr.styles=[b,m,re],rt([(0,_.Cb)()],rr.prototype,"variant",void 0),rt([(0,_.Cb)()],rr.prototype,"imageSrc",void 0),rt([(0,_.Cb)({type:Boolean})],rr.prototype,"disabled",void 0),rt([(0,_.Cb)()],rr.prototype,"icon",void 0),rt([(0,_.Cb)()],rr.prototype,"href",void 0),rt([(0,_.Cb)()],rr.prototype,"text",void 0),rr=rt([y("wui-chip")],rr);var ri=(0,c.iv)`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,rn=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ra=class extends c.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return(0,c.dy)`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?(0,c.dy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ra.styles=[b,m,ri],rn([(0,_.Cb)()],ra.prototype,"size",void 0),rn([(0,_.Cb)({type:Boolean})],ra.prototype,"loading",void 0),ra=rn([y("wui-connect-button")],ra);var ro=(0,c.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rs=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rc=class extends c.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,c.dy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};rc.styles=[b,m,ro],rs([(0,_.Cb)({type:Boolean})],rc.prototype,"disabled",void 0),rs([(0,_.Cb)()],rc.prototype,"label",void 0),rs([(0,_.Cb)()],rc.prototype,"buttonLabel",void 0),rc=rs([y("wui-cta-button")],rc);var rl=(0,c.iv)`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;let ru=class extends c.oi{render(){return(0,c.dy)`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};ru.styles=[b,m,rl],ru=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([y("wui-details-group")],ru);var rd=(0,c.iv)`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`,rf=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rh=class extends c.oi{constructor(){super(...arguments),this.name=""}render(){return(0,c.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};rh.styles=[b,m,rd],rf([(0,_.Cb)()],rh.prototype,"name",void 0),rh=rf([y("wui-details-group-item")],rh);var rp=(0,c.iv)`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`,rg=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rb=class extends c.oi{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?(0,c.dy)`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>(0,c.dy)`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};rb.styles=[b,m,rp],rg([(0,_.Cb)({type:Array})],rb.prototype,"actions",void 0),rg([(0,_.Cb)({type:Boolean})],rb.prototype,"isOpen",void 0),rb=rg([y("wui-dropdown-menu")],rb);var rm=r(16110),rv=(0,c.iv)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,ry=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rw=class extends c.oi{constructor(){super(...arguments),this.inputElementRef=(0,rm.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-padding-right-${this.inputRightPadding}`,t={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return(0,c.dy)`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,rm.i)(this.inputElementRef)}
        class=${e4(t)}
        type=${this.type}
        enterkeyhint=${(0,tk.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,c.dy)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};rw.styles=[b,m,rv],ry([(0,_.Cb)()],rw.prototype,"size",void 0),ry([(0,_.Cb)()],rw.prototype,"icon",void 0),ry([(0,_.Cb)({type:Boolean})],rw.prototype,"disabled",void 0),ry([(0,_.Cb)()],rw.prototype,"placeholder",void 0),ry([(0,_.Cb)()],rw.prototype,"type",void 0),ry([(0,_.Cb)()],rw.prototype,"keyHint",void 0),ry([(0,_.Cb)()],rw.prototype,"value",void 0),ry([(0,_.Cb)()],rw.prototype,"inputRightPadding",void 0),rw=ry([y("wui-input-text")],rw);var rx=(0,c.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,r_=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rC=class extends c.oi{constructor(){super(...arguments),this.disabled=!1}render(){return(0,c.dy)`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,c.dy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};rC.styles=[b,rx],r_([(0,_.Cb)()],rC.prototype,"errorMessage",void 0),r_([(0,_.Cb)({type:Boolean})],rC.prototype,"disabled",void 0),r_([(0,_.Cb)()],rC.prototype,"value",void 0),rC=r_([y("wui-email-input")],rC);var rE=(0,c.iv)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`,rS=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rk=class extends c.oi{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return(0,c.dy)`
      <wui-input-text
        value=${(0,tk.o)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return(0,c.dy)`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${d.bq.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?(0,c.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?(0,c.dy)`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};rk.styles=[b,rE],rS([(0,_.Cb)()],rk.prototype,"errorMessage",void 0),rS([(0,_.Cb)({type:Boolean})],rk.prototype,"disabled",void 0),rS([(0,_.Cb)()],rk.prototype,"value",void 0),rS([(0,_.Cb)({type:Boolean})],rk.prototype,"loading",void 0),rk=rS([y("wui-ens-input")],rk);var rA=(0,c.iv)`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,rM=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rT=class extends c.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,(0,c.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rT.styles=[b,m,v,rA],rM([(0,_.Cb)()],rT.prototype,"size",void 0),rM([(0,_.Cb)({type:Boolean})],rT.prototype,"disabled",void 0),rM([(0,_.Cb)()],rT.prototype,"icon",void 0),rM([(0,_.Cb)()],rT.prototype,"iconColor",void 0),rT=rM([y("wui-icon-link")],rT);var rP=(0,c.iv)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,rI=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rO=class extends c.oi{constructor(){super(...arguments),this.icon="copy"}render(){return(0,c.dy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};rO.styles=[b,m,rP],rI([(0,_.Cb)()],rO.prototype,"icon",void 0),rO=rI([y("wui-input-element")],rO);var rR=(0,c.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`,rD=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rN=class extends c.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return(0,c.dy)`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};rN.styles=[b,m,rR],rD([(0,_.Cb)({type:Boolean})],rN.prototype,"disabled",void 0),rD([(0,_.Cb)({type:String})],rN.prototype,"value",void 0),rN=rD([y("wui-input-numeric")],rN);var r$=(0,c.iv)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,rL=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rj=class extends c.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return(0,c.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};rj.styles=[b,m,r$],rL([(0,_.Cb)({type:Boolean})],rj.prototype,"disabled",void 0),rL([(0,_.Cb)()],rj.prototype,"color",void 0),rj=rL([y("wui-link")],rj);var rU=(0,c.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,rB=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rz=class extends c.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return(0,c.dy)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,tk.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return(0,c.dy)`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return(0,c.dy)`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?(0,c.dy)`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:(0,c.dy)``}chevronTemplate(){return this.chevron?(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};rz.styles=[b,m,rU],rB([(0,_.Cb)()],rz.prototype,"icon",void 0),rB([(0,_.Cb)()],rz.prototype,"iconSize",void 0),rB([(0,_.Cb)()],rz.prototype,"variant",void 0),rB([(0,_.Cb)()],rz.prototype,"iconVariant",void 0),rB([(0,_.Cb)({type:Boolean})],rz.prototype,"disabled",void 0),rB([(0,_.Cb)()],rz.prototype,"imageSrc",void 0),rB([(0,_.Cb)()],rz.prototype,"alt",void 0),rB([(0,_.Cb)({type:Boolean})],rz.prototype,"chevron",void 0),rB([(0,_.Cb)({type:Boolean})],rz.prototype,"loading",void 0),rz=rB([y("wui-list-item")],rz),(o=s||(s={})).approve="approved",o.bought="bought",o.borrow="borrowed",o.burn="burnt",o.cancel="canceled",o.claim="claimed",o.deploy="deployed",o.deposit="deposited",o.execute="executed",o.mint="minted",o.receive="received",o.repay="repaid",o.send="sent",o.sell="sold",o.stake="staked",o.trade="swapped",o.unstake="unstaked",o.withdraw="withdrawn";var rZ=(0,c.iv)`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,rF=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rH=class extends c.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,(0,c.dy)`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?(0,c.dy)`<div class="swap-images-container">
        ${e?.url?(0,c.dy)`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?(0,c.dy)`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?(0,c.dy)`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?(0,c.dy)`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};rH.styles=[rZ],rF([(0,_.Cb)()],rH.prototype,"type",void 0),rF([(0,_.Cb)()],rH.prototype,"status",void 0),rF([(0,_.Cb)()],rH.prototype,"direction",void 0),rF([(0,_.Cb)({type:Boolean})],rH.prototype,"onlyDirectionIcon",void 0),rF([(0,_.Cb)({type:Array})],rH.prototype,"images",void 0),rF([(0,_.Cb)({type:Object})],rH.prototype,"secondImage",void 0),rH=rF([y("wui-transaction-visual")],rH);var rV=(0,c.iv)`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,rW=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rq=class extends c.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return(0,c.dy)`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,tk.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,tk.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${s[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?(0,c.dy)`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?(0,c.dy)`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};rq.styles=[b,rV],rW([(0,_.Cb)()],rq.prototype,"type",void 0),rW([(0,_.Cb)({type:Array})],rq.prototype,"descriptions",void 0),rW([(0,_.Cb)()],rq.prototype,"date",void 0),rW([(0,_.Cb)({type:Boolean})],rq.prototype,"onlyDirectionIcon",void 0),rW([(0,_.Cb)()],rq.prototype,"status",void 0),rW([(0,_.Cb)()],rq.prototype,"direction",void 0),rW([(0,_.Cb)({type:Array})],rq.prototype,"images",void 0),rW([(0,_.Cb)({type:Array})],rq.prototype,"price",void 0),rW([(0,_.Cb)({type:Array})],rq.prototype,"amount",void 0),rW([(0,_.Cb)({type:Array})],rq.prototype,"symbol",void 0),rq=rW([y("wui-transaction-list-item")],rq);var rG=(0,c.iv)`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let rY=class extends c.oi{render(){return(0,c.dy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};rY.styles=[b,rG],rY=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([y("wui-transaction-list-item-loader")],rY);var rK=(0,c.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,rJ=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rX=class extends c.oi{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"mini-700":"micro-700";return(0,c.dy)`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};rX.styles=[b,rK],rJ([(0,_.Cb)()],rX.prototype,"variant",void 0),rJ([(0,_.Cb)()],rX.prototype,"size",void 0),rX=rJ([y("wui-tag")],rX);var rQ=(0,c.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,r0=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r1=class extends c.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return(0,c.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,c.dy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,c.dy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,c.dy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:(0,c.dy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?(0,c.dy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,c.dy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};r1.styles=[b,m,rQ],r0([(0,_.Cb)({type:Array})],r1.prototype,"walletImages",void 0),r0([(0,_.Cb)()],r1.prototype,"imageSrc",void 0),r0([(0,_.Cb)()],r1.prototype,"name",void 0),r0([(0,_.Cb)()],r1.prototype,"tagLabel",void 0),r0([(0,_.Cb)()],r1.prototype,"tagVariant",void 0),r0([(0,_.Cb)()],r1.prototype,"icon",void 0),r0([(0,_.Cb)()],r1.prototype,"walletIcon",void 0),r0([(0,_.Cb)({type:Boolean})],r1.prototype,"installed",void 0),r0([(0,_.Cb)({type:Boolean})],r1.prototype,"disabled",void 0),r0([(0,_.Cb)({type:Boolean})],r1.prototype,"showAllWallets",void 0),r1=r0([y("wui-list-wallet")],r1);var r2=(0,c.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,r5=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r3=class extends c.oi{constructor(){super(...arguments),this.logo="google"}render(){return(0,c.dy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};r3.styles=[b,r2],r5([(0,_.Cb)()],r3.prototype,"logo",void 0),r3=r5([y("wui-logo")],r3);var r6=(0,c.iv)`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,r4=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r8=class extends c.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return(0,c.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};r8.styles=[b,m,r6],r4([(0,_.Cb)()],r8.prototype,"logo",void 0),r4([(0,_.Cb)({type:Boolean})],r8.prototype,"disabled",void 0),r8=r4([y("wui-logo-select")],r8);var r9=(0,c.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,r7=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ie=class extends c.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return(0,c.dy)`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?(0,c.dy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,c.dy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ie.styles=[b,m,r9],r7([(0,_.Cb)()],ie.prototype,"imageSrc",void 0),r7([(0,_.Cb)({type:Boolean})],ie.prototype,"isUnsupportedChain",void 0),r7([(0,_.Cb)({type:Boolean})],ie.prototype,"disabled",void 0),ie=r7([y("wui-network-button")],ie);var it=(0,c.iv)`
  :host {
    position: relative;
    display: block;
  }
`,ir=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ii=class extends c.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return(0,c.dy)`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>(0,c.dy)`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map((e,i)=>i===t?r:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;"insertFromPaste"===e.inputType?this.handlePaste(i,r,t):tA.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let i=t[0];if(i&&tA.isNumber(i)){this.updateInput(e,r,i);let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};ii.styles=[b,it],ir([(0,_.Cb)({type:Number})],ii.prototype,"length",void 0),ir([(0,_.Cb)({type:String})],ii.prototype,"otp",void 0),ir([(0,_.SB)()],ii.prototype,"values",void 0),ii=ir([y("wui-otp")],ii);var ia=r(67338);function io(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let is={generate(e,t,r){let i="#141414",n=[],a=function(e,t){let r=Array.prototype.slice.call(ia.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),o=t/a.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(a.length-7)*o*e,l=(a.length-7)*o*t;for(let e=0;e<s.length;e+=1){let t=o*(7-2*e);n.push((0,c.YP)`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+o*e+2.5:l+o*e}
              y= ${0===e?r+o*e+2.5:r+o*e}
            />
          `)}});let l=Math.floor((r+25)/o),u=a.length/2-l/2,d=a.length/2+l/2-1,f=[];a.forEach((e,t)=>{e.forEach((e,r)=>{!a[t][r]||t<7&&r<7||t>a.length-8&&r<7||t<7&&r>a.length-8||t>u&&t<d&&r>u&&r<d||f.push([t*o+o/2,r*o+o/2])})});let h={};return f.forEach(([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]}),Object.entries(h).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!io(e,t,o)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push((0,c.YP)`<circle cx=${e} cy=${t} fill=${i} r=${o/2.5} />`)})}),Object.entries(h).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>io(e,t,o)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>io(e,t,o)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push((0,c.YP)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${o/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var ic=(0,c.iv)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,il=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iu=class extends c.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,(0,c.dy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return(0,c.YP)`
      <svg height=${e} width=${e}>
        ${is.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,c.dy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,c.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};iu.styles=[b,ic],il([(0,_.Cb)()],iu.prototype,"uri",void 0),il([(0,_.Cb)({type:Number})],iu.prototype,"size",void 0),il([(0,_.Cb)()],iu.prototype,"theme",void 0),il([(0,_.Cb)()],iu.prototype,"imageSrc",void 0),il([(0,_.Cb)()],iu.prototype,"alt",void 0),il([(0,_.Cb)({type:Boolean})],iu.prototype,"arenaClear",void 0),il([(0,_.Cb)({type:Boolean})],iu.prototype,"farcaster",void 0),iu=il([y("wui-qr-code")],iu);var id=(0,c.iv)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let ih=class extends c.oi{constructor(){super(...arguments),this.inputComponentRef=(0,rm.V)()}render(){return(0,c.dy)`
      <wui-input-text
        ${(0,rm.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};ih.styles=[b,id],ih=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([y("wui-search-bar")],ih);var ip=(0,c.iv)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,ig=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ib=class extends c.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return(0,c.dy)`
      ${this.loading?(0,c.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:(0,c.dy)`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ib.styles=[b,ip],ig([(0,_.Cb)()],ib.prototype,"backgroundColor",void 0),ig([(0,_.Cb)()],ib.prototype,"iconColor",void 0),ig([(0,_.Cb)()],ib.prototype,"icon",void 0),ig([(0,_.Cb)()],ib.prototype,"message",void 0),ig([(0,_.Cb)()],ib.prototype,"loading",void 0),ib=ig([y("wui-snackbar")],ib);var im=(0,c.iv)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,iv=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iy=class extends c.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return(0,c.dy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?(0,c.dy)`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),a=i?.querySelector("wui-text"),o=i?.getBoundingClientRect(),s=a?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&o&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+s.width)+6}px`,i.animate([{width:`${o.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};iy.styles=[b,m,im],iv([(0,_.Cb)({type:Array})],iy.prototype,"tabs",void 0),iv([(0,_.Cb)()],iy.prototype,"onTabChange",void 0),iv([(0,_.Cb)({type:Array})],iy.prototype,"buttons",void 0),iv([(0,_.Cb)({type:Boolean})],iy.prototype,"disabled",void 0),iv([(0,_.Cb)()],iy.prototype,"localTabWidth",void 0),iv([(0,_.SB)()],iy.prototype,"activeTab",void 0),iv([(0,_.SB)()],iy.prototype,"isDense",void 0),iy=iv([y("wui-tabs")],iy);var iw=(0,c.iv)`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,ix=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let i_=class extends c.oi{constructor(){super(...arguments),this.text=""}render(){return(0,c.dy)`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,c.dy)`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};i_.styles=[b,m,iw],ix([(0,_.Cb)()],i_.prototype,"imageSrc",void 0),ix([(0,_.Cb)()],i_.prototype,"text",void 0),i_=ix([y("wui-token-button")],i_);var iC=(0,c.iv)`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,iE=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iS=class extends c.oi{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,(0,c.dy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};iS.styles=[b,m,iC],iE([(0,_.Cb)()],iS.prototype,"placement",void 0),iE([(0,_.Cb)()],iS.prototype,"variant",void 0),iE([(0,_.Cb)()],iS.prototype,"message",void 0),iS=iE([y("wui-tooltip")],iS);var ik=(0,c.iv)`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,iA=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iM=class extends c.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let e=this.amount&&this.price?d.C6.multiply(this.price,this.amount)?.toFixed(3):null;return(0,c.dy)`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?(0,c.dy)`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${tA.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?(0,c.dy)`<wui-text variant="small-400" color="fg-200">
                  ${tA.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?(0,c.dy)`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?(0,c.dy)`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};iM.styles=[b,m,ik],iA([(0,_.Cb)()],iM.prototype,"imageSrc",void 0),iA([(0,_.Cb)()],iM.prototype,"name",void 0),iA([(0,_.Cb)()],iM.prototype,"symbol",void 0),iA([(0,_.Cb)()],iM.prototype,"price",void 0),iA([(0,_.Cb)()],iM.prototype,"amount",void 0),iA([(0,_.SB)()],iM.prototype,"visible",void 0),iA([(0,_.SB)()],iM.prototype,"imageError",void 0),iM=iA([y("wui-token-list-item")],iM);var iT=(0,c.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,iP=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iI=class extends c.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,(0,c.dy)`${this.templateVisual()}`}templateVisual(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:(0,c.dy)`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};iI.styles=[b,iT],iP([(0,_.Cb)()],iI.prototype,"imageSrc",void 0),iP([(0,_.Cb)()],iI.prototype,"alt",void 0),iP([(0,_.Cb)({type:Boolean})],iI.prototype,"borderRadiusFull",void 0),iI=iP([y("wui-visual-thumbnail")],iI);var iO=(0,c.iv)`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,iR=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iD=class extends c.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return(0,c.dy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};iD.styles=[b,m,iO],iR([(0,_.Cb)()],iD.prototype,"label",void 0),iR([(0,_.Cb)()],iD.prototype,"description",void 0),iR([(0,_.Cb)()],iD.prototype,"icon",void 0),iD=iR([y("wui-notice-card")],iD);var iN=(0,c.iv)`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,i$=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iL=class extends c.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;let r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return(0,c.dy)`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?(0,c.dy)` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};iL.styles=[b,m,iN],i$([(0,_.Cb)()],iL.prototype,"textTitle",void 0),i$([(0,_.Cb)()],iL.prototype,"overflowedContent",void 0),iL=i$([y("wui-list-accordion")],iL);var ij=(0,c.iv)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,iU=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iB=class extends c.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return(0,c.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?(0,c.dy)` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};iB.styles=[b,m,ij],iU([(0,_.Cb)()],iB.prototype,"imageSrc",void 0),iU([(0,_.Cb)()],iB.prototype,"textTitle",void 0),iU([(0,_.Cb)()],iB.prototype,"textValue",void 0),iB=iU([y("wui-list-content")],iB);var iz=(0,c.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,iZ=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iF=class extends c.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return(0,c.dy)`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?(0,c.dy)`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?(0,c.dy)`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:(0,c.dy)`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};iF.styles=[b,m,iz],iZ([(0,_.Cb)()],iF.prototype,"imageSrc",void 0),iZ([(0,_.Cb)()],iF.prototype,"name",void 0),iZ([(0,_.Cb)({type:Boolean})],iF.prototype,"disabled",void 0),iZ([(0,_.Cb)({type:Boolean})],iF.prototype,"selected",void 0),iZ([(0,_.Cb)({type:Boolean})],iF.prototype,"transparent",void 0),iF=iZ([y("wui-list-network")],iF);var iH=(0,c.iv)`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,iV=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iW=class extends c.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return(0,c.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?(0,c.dy)`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};iW.styles=[b,m,iH],iV([(0,_.Cb)()],iW.prototype,"amount",void 0),iV([(0,_.Cb)()],iW.prototype,"networkCurreny",void 0),iV([(0,_.Cb)()],iW.prototype,"networkImageUrl",void 0),iV([(0,_.Cb)()],iW.prototype,"receiverAddress",void 0),iV([(0,_.Cb)()],iW.prototype,"addressExplorerUrl",void 0),iW=iV([y("wui-list-wallet-transaction")],iW);var iq=(0,c.iv)`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`,iG=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iY=class extends c.oi{constructor(){super(...arguments),this.text=""}render(){return(0,c.dy)`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};iY.styles=[b,m,iq],iG([(0,_.Cb)()],iY.prototype,"text",void 0),iY=iG([y("wui-promo")],iY);var iK=(0,c.iv)`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,iJ=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let iX=class extends c.oi{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return(0,c.dy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};iX.styles=[b,iK],iJ([(0,_.Cb)()],iX.prototype,"dollars",void 0),iJ([(0,_.Cb)()],iX.prototype,"pennies",void 0),iX=iJ([y("wui-balance")],iX);var iQ=(0,c.iv)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,i0=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let i1=class extends c.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return(0,c.dy)`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${tA.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?(0,c.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,c.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};i1.styles=[b,m,iQ],i0([(0,_.Cb)()],i1.prototype,"networkSrc",void 0),i0([(0,_.Cb)()],i1.prototype,"avatarSrc",void 0),i0([(0,_.Cb)()],i1.prototype,"profileName",void 0),i0([(0,_.Cb)()],i1.prototype,"address",void 0),i0([(0,_.Cb)()],i1.prototype,"icon",void 0),i1=i0([y("wui-profile-button")],i1);var i2=(0,c.iv)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,i5=r(68001),i3=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let i6=class extends c.oi{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=i5.MO.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector}render(){return(0,c.dy)`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${tA.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&"copy-address"===e.target.id){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return(0,c.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};i6.styles=[b,m,i2],i3([(0,_.Cb)()],i6.prototype,"avatarSrc",void 0),i3([(0,_.Cb)()],i6.prototype,"profileName",void 0),i3([(0,_.Cb)()],i6.prototype,"address",void 0),i3([(0,_.Cb)()],i6.prototype,"icon",void 0),i3([(0,_.Cb)()],i6.prototype,"onProfileClick",void 0),i3([(0,_.Cb)()],i6.prototype,"onCopyClick",void 0),i6=i3([y("wui-profile-button-v2")],i6);var i4=(0,c.iv)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,i8=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let i9=class extends c.oi{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e="sm"===this.size?"small-600":"paragraph-600";return(0,c.dy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};i9.styles=[b,m,i4],i8([(0,_.Cb)()],i9.prototype,"variant",void 0),i8([(0,_.Cb)()],i9.prototype,"imageSrc",void 0),i8([(0,_.Cb)({type:Boolean})],i9.prototype,"disabled",void 0),i8([(0,_.Cb)()],i9.prototype,"icon",void 0),i8([(0,_.Cb)()],i9.prototype,"size",void 0),i8([(0,_.Cb)()],i9.prototype,"text",void 0),i9=i8([y("wui-chip-button")],i9);var i7=(0,c.iv)`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,ne=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nt=class extends c.oi{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return(0,c.dy)`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return(0,c.dy)` <wui-flex class="networks">
      ${e?.map(e=>c.dy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};nt.styles=[b,m,i7],ne([(0,_.Cb)({type:Array})],nt.prototype,"networkImages",void 0),ne([(0,_.Cb)()],nt.prototype,"text",void 0),nt=ne([y("wui-compatible-network")],nt);var nr=(0,c.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,ni=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nn=class extends c.oi{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return(0,c.dy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};nn.styles=[b,m,nr],ni([(0,_.Cb)()],nn.prototype,"icon",void 0),ni([(0,_.Cb)()],nn.prototype,"text",void 0),nn=ni([y("wui-banner")],nn);var na=(0,c.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,no=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ns=class extends c.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return(0,c.dy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};ns.styles=[b,m,na],no([(0,_.Cb)()],ns.prototype,"imageSrc",void 0),no([(0,_.Cb)()],ns.prototype,"text",void 0),no([(0,_.Cb)()],ns.prototype,"size",void 0),ns=no([y("wui-banner-img")],ns);var nc=(0,c.iv)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,nl=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nu=class extends c.oi{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return(0,c.dy)`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${tA.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?(0,c.dy)`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:(0,c.dy)`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};nu.styles=[b,m,nc],nl([(0,_.Cb)()],nu.prototype,"tokenName",void 0),nl([(0,_.Cb)()],nu.prototype,"tokenImageUrl",void 0),nl([(0,_.Cb)({type:Number})],nu.prototype,"tokenValue",void 0),nl([(0,_.Cb)()],nu.prototype,"tokenAmount",void 0),nl([(0,_.Cb)()],nu.prototype,"tokenCurrency",void 0),nl([(0,_.Cb)({type:Boolean})],nu.prototype,"clickable",void 0),nu=nl([y("wui-list-token")],nu);var nd=(0,c.iv)`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,nf=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nh=class extends c.oi{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return(0,c.dy)`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?(0,c.dy)` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:(0,c.dy)`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};nh.styles=[b,m,nd],nf([(0,_.Cb)()],nh.prototype,"icon",void 0),nf([(0,_.Cb)()],nh.prototype,"text",void 0),nf([(0,_.Cb)()],nh.prototype,"description",void 0),nf([(0,_.Cb)()],nh.prototype,"tag",void 0),nf([(0,_.Cb)()],nh.prototype,"iconBackgroundColor",void 0),nf([(0,_.Cb)()],nh.prototype,"iconColor",void 0),nf([(0,_.Cb)({type:Boolean})],nh.prototype,"disabled",void 0),nh=nf([y("wui-list-description")],nh);var np=(0,c.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;let ng=/[.*+?^${}()|[\]\\]/gu,nb=/[0-9,.]/u;var nm=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nv=class extends c.oi{constructor(){super(...arguments),this.inputElementRef=(0,rm.V)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),(0,c.dy)`<input
      ${(0,rm.i)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let t=e.data;if(t&&this.inputElementRef?.value){if(","===t){let e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else nb.test(t)||(this.inputElementRef.value.value=this.value.replace(RegExp(t.replace(ng,"\\$&"),"gu"),""))}this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};nv.styles=[b,m,np],nm([(0,_.Cb)({type:Boolean})],nv.prototype,"disabled",void 0),nm([(0,_.Cb)({type:String})],nv.prototype,"value",void 0),nm([(0,_.Cb)({type:String})],nv.prototype,"placeholder",void 0),nv=nm([y("wui-input-amount")],nv);var ny=(0,c.iv)`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,nw=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nx=class extends c.oi{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return(0,c.dy)`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?(0,c.dy)`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,c.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};nx.styles=[b,m,ny],nw([(0,_.Cb)()],nx.prototype,"text",void 0),nw([(0,_.Cb)()],nx.prototype,"address",void 0),nw([(0,_.Cb)()],nx.prototype,"imageSrc",void 0),nw([(0,_.Cb)({type:Boolean})],nx.prototype,"isAddress",void 0),nx=nw([y("wui-preview-item")],nx);var n_=(0,c.iv)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,nC=r(39468),nE=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nS=class extends c.oi{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=i5.MO.getConnectedConnector(),this.labels=i5.AccountController.state.addressLabels,this.caipNetwork=i5.fB.state.caipNetwork,this.socialProvider=i5.MO.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),i5.Lr.getBalance(this.accountAddress,this.caipNetwork?.id).then(e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce((e,t)=>e+(t?.value||0),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})}render(){let e=this.getLabel();return this.shouldShowIcon="AUTH"===this.connectedConnector,(0,c.dy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?(0,c.dy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===nC.y_.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:(0,c.dy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${tA.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?(0,c.dy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:(0,c.dy)` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);return e||"AUTH"!==this.connectedConnector?(e||"INJECTED"!==this.connectedConnector)&&"ANNOUNCED"!==this.connectedConnector?e||(e="EOA"):e="Injected Account":e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};nS.styles=[b,m,n_],nE([(0,_.Cb)()],nS.prototype,"accountAddress",void 0),nE([(0,_.Cb)()],nS.prototype,"accountType",void 0),nE([(0,_.Cb)({type:Boolean})],nS.prototype,"selected",void 0),nE([(0,_.Cb)({type:Function})],nS.prototype,"onSelect",void 0),nS=nE([y("wui-list-account")],nS);var nk=(0,c.iv)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,nA=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nM=class extends c.oi{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return(0,c.dy)`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};nM.styles=[b,m,nk],nA([(0,_.Cb)()],nM.prototype,"text",void 0),nA([(0,_.Cb)()],nM.prototype,"icon",void 0),nM=nA([y("wui-icon-button")],nM);var nT=(0,c.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,nP=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nI=class extends c.oi{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return(0,c.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};nI.styles=[b,m,nT],nP([(0,_.Cb)()],nI.prototype,"text",void 0),nP([(0,_.Cb)({type:Boolean})],nI.prototype,"disabled",void 0),nI=nP([y("wui-list-button")],nI);var nO=(0,c.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,nR=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nD=class extends c.oi{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return(0,c.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?(0,c.dy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};nD.styles=[b,m,nO],nR([(0,_.Cb)()],nD.prototype,"logo",void 0),nR([(0,_.Cb)()],nD.prototype,"name",void 0),nR([(0,_.Cb)()],nD.prototype,"align",void 0),nR([(0,_.Cb)({type:Boolean})],nD.prototype,"disabled",void 0),nD=nR([y("wui-list-social")],nD);var nN=(0,c.iv)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,n$=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nL=class extends c.oi{constructor(){super(...arguments),this.imageSrc=""}render(){return(0,c.dy)`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?(0,c.dy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:(0,c.dy)`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};nL.styles=[b,m,v,nN],n$([(0,_.Cb)()],nL.prototype,"imageSrc",void 0),nL=n$([y("wui-select")],nL);var nj=(0,c.iv)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,nU=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nB=class extends c.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tA.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tA.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tA.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tA.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tA.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tA.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tA.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tA.getSpacingStyles(this.margin,3)};
    `,(0,c.dy)`<slot></slot>`}};nB.styles=[b,nj],nU([(0,_.Cb)()],nB.prototype,"gridTemplateRows",void 0),nU([(0,_.Cb)()],nB.prototype,"gridTemplateColumns",void 0),nU([(0,_.Cb)()],nB.prototype,"justifyItems",void 0),nU([(0,_.Cb)()],nB.prototype,"alignItems",void 0),nU([(0,_.Cb)()],nB.prototype,"justifyContent",void 0),nU([(0,_.Cb)()],nB.prototype,"alignContent",void 0),nU([(0,_.Cb)()],nB.prototype,"columnGap",void 0),nU([(0,_.Cb)()],nB.prototype,"rowGap",void 0),nU([(0,_.Cb)()],nB.prototype,"gap",void 0),nU([(0,_.Cb)()],nB.prototype,"padding",void 0),nU([(0,_.Cb)()],nB.prototype,"margin",void 0),nB=nU([y("wui-grid")],nB);var nz=(0,c.iv)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,nZ=function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let nF=class extends c.oi{constructor(){super(...arguments),this.text=""}render(){return(0,c.dy)`${this.template()}`}template(){return this.text?(0,c.dy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};nF.styles=[b,nz],nZ([(0,_.Cb)()],nF.prototype,"text",void 0),nF=nZ([y("wui-separator")],nF);let nH={interpolate(e,t,r){if(2!==e.length||2!==t.length)throw Error("inputRange and outputRange must be an array of length 2");let i=e[0]||0,n=e[1]||0,a=t[0]||0,o=t[1]||0;return r<i?a:r>n?o:(o-a)/(n-i)*(r-i)+a}},nV=["receive","deposit","borrow","claim"],nW=["withdraw","repay","burn"],nq={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){let r=d.Em.getYear(),i=this.getMonthName(t);return e===r?i:`${i} ${e}`},getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1;return e?.length!==2||i?n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:nq.getTransactionTransferTokenType(e),url:nq.getTransactionImageURL(e)}),getTransactionImageURL(e){let t;let r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){let t=e?.metadata?.operationType,r=e?.transfers,i=e?.transfers?.length>0,n=e?.transfers?.length>1,a=i&&r?.every(e=>!!e?.fungible_info),[o,s]=r,c=this.getTransferDescription(o);if(this.getTransferDescription(s),!i)return("send"===t||"receive"===t)&&a?[c=tA.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),tA.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return r.map(e=>this.getTransferDescription(e));let l="";return nV.includes(t)?l="+":nW.includes(t)&&(l="-"),[c=l.concat(c)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},39468:function(e,t,r){"use strict";let i;r.d(t,{$D:function(){return rp},y_:function(){return h}}),r(11557);var n,a,o,s,c,l,u,d=r(47973);d.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,d.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL;let f={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},h={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};(n=s||(s={})).assertEqual=e=>e,n.assertIs=function(e){},n.assertNever=function(e){throw Error()},n.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},n.getValidEnumValues=e=>{let t=n.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let i of t)r[i]=e[i];return n.objectValues(r)},n.objectValues=e=>n.objectKeys(e).map(function(t){return e[t]}),n.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},n.find=(e,t)=>{for(let r of e)if(t(r))return r},n.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,n.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},n.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(c||(c={})).mergeShapes=(e,t)=>({...e,...t});let p=s.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),g=e=>{switch(typeof e){case"undefined":return p.undefined;case"string":return p.string;case"number":return isNaN(e)?p.nan:p.number;case"boolean":return p.boolean;case"function":return p.function;case"bigint":return p.bigint;case"symbol":return p.symbol;case"object":if(Array.isArray(e))return p.array;if(null===e)return p.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return p.promise;if("undefined"!=typeof Map&&e instanceof Map)return p.map;if("undefined"!=typeof Set&&e instanceof Set)return p.set;if("undefined"!=typeof Date&&e instanceof Date)return p.date;return p.object;default:return p.unknown}},b=s.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class m extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){let r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,s.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}m.create=e=>new m(e);let v=(e,t)=>{let r;switch(e.code){case b.invalid_type:r=e.received===p.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case b.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,s.jsonStringifyReplacer)}`;break;case b.unrecognized_keys:r=`Unrecognized key(s) in object: ${s.joinValues(e.keys,", ")}`;break;case b.invalid_union:r="Invalid input";break;case b.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${s.joinValues(e.options)}`;break;case b.invalid_enum_value:r=`Invalid enum value. Expected ${s.joinValues(e.options)}, received '${e.received}'`;break;case b.invalid_arguments:r="Invalid function arguments";break;case b.invalid_return_type:r="Invalid function return type";break;case b.invalid_date:r="Invalid date";break;case b.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:s.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case b.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case b.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case b.custom:r="Invalid input";break;case b.invalid_intersection_types:r="Intersection results could not be merged";break;case b.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case b.not_finite:r="Number must be finite";break;default:r=t.defaultError,s.assertNever(e)}return{message:r}},y=v;function w(){return y}let x=e=>{let{data:t,path:r,errorMaps:i,issueData:n}=e,a=[...r,...n.path||[]],o={...n,path:a},s="";for(let e of i.filter(e=>!!e).slice().reverse())s=e(o,{data:t,defaultError:s}).message;return{...n,path:a,message:n.message||s}};function _(e,t){let r=x({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,w(),v].filter(e=>!!e)});e.common.issues.push(r)}class C{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return E;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return C.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:n}=i;if("aborted"===t.status||"aborted"===n.status)return E;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||i.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}}let E=Object.freeze({status:"aborted"}),S=e=>({status:"dirty",value:e}),k=e=>({status:"valid",value:e}),A=e=>"aborted"===e.status,M=e=>"dirty"===e.status,T=e=>"valid"===e.status,P=e=>"undefined"!=typeof Promise&&e instanceof Promise;(a=l||(l={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},a.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class I{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let O=(e,t)=>{if(T(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new m(e.common.issues);return this._error=t,this._error}}};function R(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:n}}class D{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return g(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:g(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new C,ctx:{common:e.parent.common,data:e.data,parsedType:g(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(P(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:g(e)},n=this._parseSync({data:e,path:i.path,parent:i});return O(i,n)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:g(e)},i=this._parse({data:e,path:r.path,parent:r});return O(r,await (P(i)?i:Promise.resolve(i)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,i)=>{let n=e(t),a=()=>i.addIssue({code:b.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then(e=>!!e||(a(),!1)):!!n||(a(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new ev({schema:this,typeName:u.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ey.create(this,this._def)}nullable(){return ew.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return et.create(this,this._def)}promise(){return em.create(this,this._def)}or(e){return ei.create([this,e],this._def)}and(e){return eo.create(this,e,this._def)}transform(e){return new ev({...R(this._def),schema:this,typeName:u.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new ex({...R(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:u.ZodDefault})}brand(){return new eS({typeName:u.ZodBranded,type:this,...R(this._def)})}catch(e){return new e_({...R(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:u.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return ek.create(this,e)}readonly(){return eA.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let N=/^c[^\s-]{8,}$/i,$=/^[a-z][a-z0-9]*$/,L=/^[0-9A-HJKMNP-TV-Z]{26}$/,j=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,U=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,B=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,z=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Z=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class F extends D{_parse(e){let t;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==p.string){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.string,received:t.parsedType}),E}let r=new C;for(let o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if("max"===o.kind)e.data.length>o.value&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if("length"===o.kind){let i=e.data.length>o.value,n=e.data.length<o.value;(i||n)&&(t=this._getOrReturnCtx(e,t),i?_(t,{code:b.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):n&&_(t,{code:b.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if("email"===o.kind)U.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"email",code:b.invalid_string,message:o.message}),r.dirty());else if("emoji"===o.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:b.invalid_string,message:o.message}),r.dirty());else if("uuid"===o.kind)j.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:b.invalid_string,message:o.message}),r.dirty());else if("cuid"===o.kind)N.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:b.invalid_string,message:o.message}),r.dirty());else if("cuid2"===o.kind)$.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:b.invalid_string,message:o.message}),r.dirty());else if("ulid"===o.kind)L.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:b.invalid_string,message:o.message}),r.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(i){_(t=this._getOrReturnCtx(e,t),{validation:"url",code:b.invalid_string,message:o.message}),r.dirty()}else if("regex"===o.kind)o.regex.lastIndex=0,o.regex.test(e.data)||(_(t=this._getOrReturnCtx(e,t),{validation:"regex",code:b.invalid_string,message:o.message}),r.dirty());else if("trim"===o.kind)e.data=e.data.trim();else if("includes"===o.kind)e.data.includes(o.value,o.position)||(_(t=this._getOrReturnCtx(e,t),{code:b.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty());else if("toLowerCase"===o.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===o.kind)e.data=e.data.toUpperCase();else if("startsWith"===o.kind)e.data.startsWith(o.value)||(_(t=this._getOrReturnCtx(e,t),{code:b.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty());else if("endsWith"===o.kind)e.data.endsWith(o.value)||(_(t=this._getOrReturnCtx(e,t),{code:b.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty());else if("datetime"===o.kind)Z(o).test(e.data)||(_(t=this._getOrReturnCtx(e,t),{code:b.invalid_string,validation:"datetime",message:o.message}),r.dirty());else if("ip"===o.kind){var n,a;n=e.data,("v4"===(a=o.version)||!a)&&B.test(n)||("v6"===a||!a)&&z.test(n)||(_(t=this._getOrReturnCtx(e,t),{validation:"ip",code:b.invalid_string,message:o.message}),r.dirty())}else s.assertNever(o);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:b.invalid_string,...l.errToObj(r)})}_addCheck(e){return new F({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...l.errToObj(e)})}url(e){return this._addCheck({kind:"url",...l.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...l.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...l.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...l.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...l.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...l.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...l.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...l.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...l.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...l.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...l.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...l.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...l.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...l.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...l.errToObj(t)})}nonempty(e){return this.min(1,l.errToObj(e))}trim(){return new F({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new F({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new F({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}F.create=e=>{var t;return new F({checks:[],typeName:u.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...R(e)})};class H extends D{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==p.number){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.number,received:t.parsedType}),E}let r=new C;for(let i of this._def.checks)"int"===i.kind?s.isInteger(e.data)||(_(t=this._getOrReturnCtx(e,t),{code:b.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}(e.data,i.value)&&(_(t=this._getOrReturnCtx(e,t),{code:b.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(_(t=this._getOrReturnCtx(e,t),{code:b.not_finite,message:i.message}),r.dirty()):s.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,l.toString(t))}gt(e,t){return this.setLimit("min",e,!1,l.toString(t))}lte(e,t){return this.setLimit("max",e,!0,l.toString(t))}lt(e,t){return this.setLimit("max",e,!1,l.toString(t))}setLimit(e,t,r,i){return new H({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:l.toString(i)}]})}_addCheck(e){return new H({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:l.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:l.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:l.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:l.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:l.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:l.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:l.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:l.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:l.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&s.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}H.create=e=>new H({checks:[],typeName:u.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...R(e)});class V extends D{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==p.bigint){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.bigint,received:t.parsedType}),E}let r=new C;for(let i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(_(t=this._getOrReturnCtx(e,t),{code:b.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):s.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,l.toString(t))}gt(e,t){return this.setLimit("min",e,!1,l.toString(t))}lte(e,t){return this.setLimit("max",e,!0,l.toString(t))}lt(e,t){return this.setLimit("max",e,!1,l.toString(t))}setLimit(e,t,r,i){return new V({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:l.toString(i)}]})}_addCheck(e){return new V({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:l.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:l.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:l.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:l.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:l.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}V.create=e=>{var t;return new V({checks:[],typeName:u.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...R(e)})};class W extends D{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==p.boolean){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.boolean,received:t.parsedType}),E}return k(e.data)}}W.create=e=>new W({typeName:u.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...R(e)});class q extends D{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==p.date){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.date,received:t.parsedType}),E}if(isNaN(e.data.getTime()))return _(this._getOrReturnCtx(e),{code:b.invalid_date}),E;let r=new C;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(_(t=this._getOrReturnCtx(e,t),{code:b.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):s.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new q({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:l.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:l.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}q.create=e=>new q({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:u.ZodDate,...R(e)});class G extends D{_parse(e){if(this._getType(e)!==p.symbol){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.symbol,received:t.parsedType}),E}return k(e.data)}}G.create=e=>new G({typeName:u.ZodSymbol,...R(e)});class Y extends D{_parse(e){if(this._getType(e)!==p.undefined){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.undefined,received:t.parsedType}),E}return k(e.data)}}Y.create=e=>new Y({typeName:u.ZodUndefined,...R(e)});class K extends D{_parse(e){if(this._getType(e)!==p.null){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.null,received:t.parsedType}),E}return k(e.data)}}K.create=e=>new K({typeName:u.ZodNull,...R(e)});class J extends D{constructor(){super(...arguments),this._any=!0}_parse(e){return k(e.data)}}J.create=e=>new J({typeName:u.ZodAny,...R(e)});class X extends D{constructor(){super(...arguments),this._unknown=!0}_parse(e){return k(e.data)}}X.create=e=>new X({typeName:u.ZodUnknown,...R(e)});class Q extends D{_parse(e){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.never,received:t.parsedType}),E}}Q.create=e=>new Q({typeName:u.ZodNever,...R(e)});class ee extends D{_parse(e){if(this._getType(e)!==p.undefined){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.void,received:t.parsedType}),E}return k(e.data)}}ee.create=e=>new ee({typeName:u.ZodVoid,...R(e)});class et extends D{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==p.array)return _(t,{code:b.invalid_type,expected:p.array,received:t.parsedType}),E;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&(_(t,{code:e?b.too_big:b.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(_(t,{code:b.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(_(t,{code:b.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new I(t,e,t.path,r)))).then(e=>C.mergeArray(r,e));let n=[...t.data].map((e,r)=>i.type._parseSync(new I(t,e,t.path,r)));return C.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new et({...this._def,minLength:{value:e,message:l.toString(t)}})}max(e,t){return new et({...this._def,maxLength:{value:e,message:l.toString(t)}})}length(e,t){return new et({...this._def,exactLength:{value:e,message:l.toString(t)}})}nonempty(e){return this.min(1,e)}}et.create=(e,t)=>new et({type:e,minLength:null,maxLength:null,exactLength:null,typeName:u.ZodArray,...R(t)});class er extends D{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=s.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==p.object){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.object,received:t.parsedType}),E}let{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof Q&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||a.push(e);let o=[];for(let e of n){let t=i[e],n=r.data[e];o.push({key:{status:"valid",value:e},value:t._parse(new I(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof Q){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of a)o.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)a.length>0&&(_(r,{code:b.unrecognized_keys,keys:a}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of a){let i=r.data[t];o.push({key:{status:"valid",value:t},value:e._parse(new I(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>C.mergeObjectSync(t,e)):C.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(e){return l.errToObj,new er({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n,a,o;let s=null!==(a=null===(n=(i=this._def).errorMap)||void 0===n?void 0:n.call(i,t,r).message)&&void 0!==a?a:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(o=l.errToObj(e).message)&&void 0!==o?o:s}:{message:s}}}:{}})}strip(){return new er({...this._def,unknownKeys:"strip"})}passthrough(){return new er({...this._def,unknownKeys:"passthrough"})}extend(e){return new er({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new er({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:u.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new er({...this._def,catchall:e})}pick(e){let t={};return s.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new er({...this._def,shape:()=>t})}omit(e){let t={};return s.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new er({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof er){let r={};for(let i in t.shape){let n=t.shape[i];r[i]=ey.create(e(n))}return new er({...t._def,shape:()=>r})}return t instanceof et?new et({...t._def,type:e(t.element)}):t instanceof ey?ey.create(e(t.unwrap())):t instanceof ew?ew.create(e(t.unwrap())):t instanceof es?es.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return s.objectKeys(this.shape).forEach(r=>{let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new er({...this._def,shape:()=>t})}required(e){let t={};return s.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof ey;)e=e._def.innerType;t[r]=e}}),new er({...this._def,shape:()=>t})}keyof(){return ep(s.objectKeys(this.shape))}}er.create=(e,t)=>new er({shape:()=>e,unknownKeys:"strip",catchall:Q.create(),typeName:u.ZodObject,...R(t)}),er.strictCreate=(e,t)=>new er({shape:()=>e,unknownKeys:"strict",catchall:Q.create(),typeName:u.ZodObject,...R(t)}),er.lazycreate=(e,t)=>new er({shape:e,unknownKeys:"strip",catchall:Q.create(),typeName:u.ZodObject,...R(t)});class ei extends D{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new m(e.ctx.common.issues));return _(t,{code:b.invalid_union,unionErrors:r}),E});{let e;let i=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},a=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===a.status)return a;"dirty"!==a.status||e||(e={result:a,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=i.map(e=>new m(e));return _(t,{code:b.invalid_union,unionErrors:n}),E}}get options(){return this._def.options}}ei.create=(e,t)=>new ei({options:e,typeName:u.ZodUnion,...R(t)});let en=e=>{if(e instanceof ef)return en(e.schema);if(e instanceof ev)return en(e.innerType());if(e instanceof eh)return[e.value];if(e instanceof eg)return e.options;if(e instanceof eb)return Object.keys(e.enum);if(e instanceof ex)return en(e._def.innerType);if(e instanceof Y)return[void 0];else if(e instanceof K)return[null];else return null};class ea extends D{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.object)return _(t,{code:b.invalid_type,expected:p.object,received:t.parsedType}),E;let r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(_(t,{code:b.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),E)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=en(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(i.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new ea({typeName:u.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...R(r)})}}class eo extends D{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(A(e)||A(i))return E;let n=function e(t,r){let i=g(t),n=g(r);if(t===r)return{valid:!0,data:t};if(i===p.object&&n===p.object){let i=s.objectKeys(r),n=s.objectKeys(t).filter(e=>-1!==i.indexOf(e)),a={...t,...r};for(let i of n){let n=e(t[i],r[i]);if(!n.valid)return{valid:!1};a[i]=n.data}return{valid:!0,data:a}}if(i===p.array&&n===p.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let a=e(t[n],r[n]);if(!a.valid)return{valid:!1};i.push(a.data)}return{valid:!0,data:i}}return i===p.date&&n===p.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return n.valid?((M(e)||M(i))&&t.dirty(),{status:t.value,value:n.data}):(_(r,{code:b.invalid_intersection_types}),E)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>i(e,t)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}eo.create=(e,t,r)=>new eo({left:e,right:t,typeName:u.ZodIntersection,...R(r)});class es extends D{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.array)return _(r,{code:b.invalid_type,expected:p.array,received:r.parsedType}),E;if(r.data.length<this._def.items.length)return _(r,{code:b.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),E;!this._def.rest&&r.data.length>this._def.items.length&&(_(r,{code:b.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new I(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>C.mergeArray(t,e)):C.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new es({...this._def,rest:e})}}es.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new es({items:e,typeName:u.ZodTuple,rest:null,...R(t)})};class ec extends D{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.object)return _(r,{code:b.invalid_type,expected:p.object,received:r.parsedType}),E;let i=[],n=this._def.keyType,a=this._def.valueType;for(let e in r.data)i.push({key:n._parse(new I(r,e,r.path,e)),value:a._parse(new I(r,r.data[e],r.path,e))});return r.common.async?C.mergeObjectAsync(t,i):C.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new ec(t instanceof D?{keyType:e,valueType:t,typeName:u.ZodRecord,...R(r)}:{keyType:F.create(),valueType:e,typeName:u.ZodRecord,...R(t)})}}class el extends D{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.map)return _(r,{code:b.invalid_type,expected:p.map,received:r.parsedType}),E;let i=this._def.keyType,n=this._def.valueType,a=[...r.data.entries()].map(([e,t],a)=>({key:i._parse(new I(r,e,r.path,[a,"key"])),value:n._parse(new I(r,t,r.path,[a,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of a){let i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return E;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of a){let i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return E;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}el.create=(e,t,r)=>new el({valueType:t,keyType:e,typeName:u.ZodMap,...R(r)});class eu extends D{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.set)return _(r,{code:b.invalid_type,expected:p.set,received:r.parsedType}),E;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(_(r,{code:b.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(_(r,{code:b.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let n=this._def.valueType;function a(e){let r=new Set;for(let i of e){if("aborted"===i.status)return E;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let o=[...r.data.values()].map((e,t)=>n._parse(new I(r,e,r.path,t)));return r.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(e,t){return new eu({...this._def,minSize:{value:e,message:l.toString(t)}})}max(e,t){return new eu({...this._def,maxSize:{value:e,message:l.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}eu.create=(e,t)=>new eu({valueType:e,minSize:null,maxSize:null,typeName:u.ZodSet,...R(t)});class ed extends D{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.function)return _(t,{code:b.invalid_type,expected:p.function,received:t.parsedType}),E;function r(e,r){return x({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,w(),v].filter(e=>!!e),issueData:{code:b.invalid_arguments,argumentsError:r}})}function i(e,r){return x({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,w(),v].filter(e=>!!e),issueData:{code:b.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof em){let e=this;return k(async function(...t){let o=new m([]),s=await e._def.args.parseAsync(t,n).catch(e=>{throw o.addIssue(r(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,n).catch(e=>{throw o.addIssue(i(c,e)),o})})}{let e=this;return k(function(...t){let o=e._def.args.safeParse(t,n);if(!o.success)throw new m([r(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,n);if(!c.success)throw new m([i(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ed({...this._def,args:es.create(e).rest(X.create())})}returns(e){return new ed({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new ed({args:e||es.create([]).rest(X.create()),returns:t||X.create(),typeName:u.ZodFunction,...R(r)})}}class ef extends D{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ef.create=(e,t)=>new ef({getter:e,typeName:u.ZodLazy,...R(t)});class eh extends D{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return _(t,{received:t.data,code:b.invalid_literal,expected:this._def.value}),E}return{status:"valid",value:e.data}}get value(){return this._def.value}}function ep(e,t){return new eg({values:e,typeName:u.ZodEnum,...R(t)})}eh.create=(e,t)=>new eh({value:e,typeName:u.ZodLiteral,...R(t)});class eg extends D{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return _(t,{expected:s.joinValues(r),received:t.parsedType,code:b.invalid_type}),E}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return _(t,{received:t.data,code:b.invalid_enum_value,options:r}),E}return k(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return eg.create(e)}exclude(e){return eg.create(this.options.filter(t=>!e.includes(t)))}}eg.create=ep;class eb extends D{_parse(e){let t=s.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==p.string&&r.parsedType!==p.number){let e=s.objectValues(t);return _(r,{expected:s.joinValues(e),received:r.parsedType,code:b.invalid_type}),E}if(-1===t.indexOf(e.data)){let e=s.objectValues(t);return _(r,{received:r.data,code:b.invalid_enum_value,options:e}),E}return k(e.data)}get enum(){return this._def.values}}eb.create=(e,t)=>new eb({values:e,typeName:u.ZodNativeEnum,...R(t)});class em extends D{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==p.promise&&!1===t.common.async?(_(t,{code:b.invalid_type,expected:p.promise,received:t.parsedType}),E):k((t.parsedType===p.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}em.create=(e,t)=>new em({type:e,typeName:u.ZodPromise,...R(t)});class ev extends D{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===u.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{_(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){let e=i.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?E:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?E:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>T(e)?Promise.resolve(i.transform(e.value,n)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!T(e))return e;let a=i.transform(e.value,n);if(a instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}}s.assertNever(i)}}ev.create=(e,t,r)=>new ev({schema:e,typeName:u.ZodEffects,effect:t,...R(r)}),ev.createWithPreprocess=(e,t,r)=>new ev({schema:t,effect:{type:"preprocess",transform:e},typeName:u.ZodEffects,...R(r)});class ey extends D{_parse(e){return this._getType(e)===p.undefined?k(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ey.create=(e,t)=>new ey({innerType:e,typeName:u.ZodOptional,...R(t)});class ew extends D{_parse(e){return this._getType(e)===p.null?k(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ew.create=(e,t)=>new ew({innerType:e,typeName:u.ZodNullable,...R(t)});class ex extends D{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===p.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ex.create=(e,t)=>new ex({innerType:e,typeName:u.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...R(t)});class e_ extends D{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return P(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new m(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new m(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}e_.create=(e,t)=>new e_({innerType:e,typeName:u.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...R(t)});class eC extends D{_parse(e){if(this._getType(e)!==p.nan){let t=this._getOrReturnCtx(e);return _(t,{code:b.invalid_type,expected:p.nan,received:t.parsedType}),E}return{status:"valid",value:e.data}}}eC.create=e=>new eC({typeName:u.ZodNaN,...R(e)});let eE=Symbol("zod_brand");class eS extends D{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class ek extends D{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?E:"dirty"===e.status?(t.dirty(),S(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?E:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new ek({in:e,out:t,typeName:u.ZodPipeline})}}class eA extends D{_parse(e){let t=this._def.innerType._parse(e);return T(t)&&(t.value=Object.freeze(t.value)),t}}eA.create=(e,t)=>new eA({innerType:e,typeName:u.ZodReadonly,...R(t)});let eM=(e,t={},r)=>e?J.create().superRefine((i,n)=>{var a,o;if(!e(i)){let e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(o=null!==(a=e.fatal)&&void 0!==a?a:r)||void 0===o||o;n.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):J.create(),eT={object:er.lazycreate};(o=u||(u={})).ZodString="ZodString",o.ZodNumber="ZodNumber",o.ZodNaN="ZodNaN",o.ZodBigInt="ZodBigInt",o.ZodBoolean="ZodBoolean",o.ZodDate="ZodDate",o.ZodSymbol="ZodSymbol",o.ZodUndefined="ZodUndefined",o.ZodNull="ZodNull",o.ZodAny="ZodAny",o.ZodUnknown="ZodUnknown",o.ZodNever="ZodNever",o.ZodVoid="ZodVoid",o.ZodArray="ZodArray",o.ZodObject="ZodObject",o.ZodUnion="ZodUnion",o.ZodDiscriminatedUnion="ZodDiscriminatedUnion",o.ZodIntersection="ZodIntersection",o.ZodTuple="ZodTuple",o.ZodRecord="ZodRecord",o.ZodMap="ZodMap",o.ZodSet="ZodSet",o.ZodFunction="ZodFunction",o.ZodLazy="ZodLazy",o.ZodLiteral="ZodLiteral",o.ZodEnum="ZodEnum",o.ZodEffects="ZodEffects",o.ZodNativeEnum="ZodNativeEnum",o.ZodOptional="ZodOptional",o.ZodNullable="ZodNullable",o.ZodDefault="ZodDefault",o.ZodCatch="ZodCatch",o.ZodPromise="ZodPromise",o.ZodBranded="ZodBranded",o.ZodPipeline="ZodPipeline",o.ZodReadonly="ZodReadonly";let eP=F.create,eI=H.create,eO=eC.create,eR=V.create,eD=W.create,eN=q.create,e$=G.create,eL=Y.create,ej=K.create,eU=J.create,eB=X.create,ez=Q.create,eZ=ee.create,eF=et.create,eH=er.create,eV=er.strictCreate,eW=ei.create,eq=ea.create,eG=eo.create,eY=es.create,eK=ec.create,eJ=el.create,eX=eu.create,eQ=ed.create,e0=ef.create,e1=eh.create,e2=eg.create,e5=eb.create,e3=em.create,e6=ev.create,e4=ey.create,e8=ew.create,e9=ev.createWithPreprocess,e7=ek.create;var te=Object.freeze({__proto__:null,defaultErrorMap:v,setErrorMap:function(e){y=e},getErrorMap:w,makeIssue:x,EMPTY_PATH:[],addIssueToContext:_,ParseStatus:C,INVALID:E,DIRTY:S,OK:k,isAborted:A,isDirty:M,isValid:T,isAsync:P,get util(){return s},get objectUtil(){return c},ZodParsedType:p,getParsedType:g,ZodType:D,ZodString:F,ZodNumber:H,ZodBigInt:V,ZodBoolean:W,ZodDate:q,ZodSymbol:G,ZodUndefined:Y,ZodNull:K,ZodAny:J,ZodUnknown:X,ZodNever:Q,ZodVoid:ee,ZodArray:et,ZodObject:er,ZodUnion:ei,ZodDiscriminatedUnion:ea,ZodIntersection:eo,ZodTuple:es,ZodRecord:ec,ZodMap:el,ZodSet:eu,ZodFunction:ed,ZodLazy:ef,ZodLiteral:eh,ZodEnum:eg,ZodNativeEnum:eb,ZodPromise:em,ZodEffects:ev,ZodTransformer:ev,ZodOptional:ey,ZodNullable:ew,ZodDefault:ex,ZodCatch:e_,ZodNaN:eC,BRAND:eE,ZodBranded:eS,ZodPipeline:ek,ZodReadonly:eA,custom:eM,Schema:D,ZodSchema:D,late:eT,get ZodFirstPartyTypeKind(){return u},coerce:{string:e=>F.create({...e,coerce:!0}),number:e=>H.create({...e,coerce:!0}),boolean:e=>W.create({...e,coerce:!0}),bigint:e=>V.create({...e,coerce:!0}),date:e=>q.create({...e,coerce:!0})},any:eU,array:eF,bigint:eR,boolean:eD,date:eN,discriminatedUnion:eq,effect:e6,enum:e2,function:eQ,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>eM(t=>t instanceof e,t),intersection:eG,lazy:e0,literal:e1,map:eJ,nan:eO,nativeEnum:e5,never:ez,null:ej,nullable:e8,number:eI,object:eH,oboolean:()=>eD().optional(),onumber:()=>eI().optional(),optional:e4,ostring:()=>eP().optional(),pipeline:e7,preprocess:e9,promise:e3,record:eK,set:eX,strictObject:eV,string:eP,symbol:e$,transformer:e6,tuple:eY,undefined:eL,union:eW,unknown:eB,void:eZ,NEVER:E,ZodIssueCode:b,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:m});let tt=te.object({message:te.string()});function tr(e){return te.literal(f[e])}te.object({accessList:te.array(te.string()),blockHash:te.string().nullable(),blockNumber:te.string().nullable(),chainId:te.string().or(te.number()),from:te.string(),gas:te.string(),hash:te.string(),input:te.string().nullable(),maxFeePerGas:te.string(),maxPriorityFeePerGas:te.string(),nonce:te.string(),r:te.string(),s:te.string(),to:te.string(),transactionIndex:te.string().nullable(),type:te.string(),v:te.string(),value:te.string()});let ti=te.object({chainId:te.string().or(te.number())}),tn=te.object({email:te.string().email()}),ta=te.object({otp:te.string()}),to=te.object({uri:te.string()}),ts=te.object({chainId:te.optional(te.string().or(te.number())),preferredAccountType:te.optional(te.string())}),tc=te.object({provider:te.enum(["google","github","apple","facebook","x","discord"])}),tl=te.object({email:te.string().email()}),tu=te.object({otp:te.string()}),td=te.object({otp:te.string()}),tf=te.object({themeMode:te.optional(te.enum(["light","dark"])),themeVariables:te.optional(te.record(te.string(),te.string().or(te.number()))),w3mThemeVariables:te.optional(te.record(te.string(),te.string()))}),th=te.object({metadata:te.object({name:te.string(),description:te.string(),url:te.string(),icons:te.array(te.string())}).optional(),sdkVersion:te.string(),projectId:te.string()}),tp=te.object({type:te.string()}),tg=te.object({action:te.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),tb=te.object({url:te.string()}),tm=te.object({userName:te.string()}),tv=te.object({email:te.string(),address:te.string(),chainId:te.string().or(te.number()),accounts:te.array(te.object({address:te.string(),type:te.enum([h.ACCOUNT_TYPES.EOA,h.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:te.string().optional()}),ty=te.object({action:te.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),tw=te.object({email:te.string().email().optional().nullable(),address:te.string(),chainId:te.string().or(te.number()),smartAccountDeployed:te.optional(te.boolean()),accounts:te.array(te.object({address:te.string(),type:te.enum([h.ACCOUNT_TYPES.EOA,h.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:te.optional(te.string())}),tx=te.object({uri:te.string()}),t_=te.object({isConnected:te.boolean()}),tC=te.object({chainId:te.string().or(te.number())}),tE=te.object({chainId:te.string().or(te.number())}),tS=te.object({newEmail:te.string().email()}),tk=te.object({smartAccountEnabledNetworks:te.array(te.number())});te.object({address:te.string(),isDeployed:te.boolean()});let tA=te.object({type:te.string(),address:te.string()}),tM=te.any(),tT=te.object({method:te.literal("eth_accounts")}),tP=te.object({method:te.literal("eth_blockNumber")}),tI=te.object({method:te.literal("eth_call"),params:te.array(te.any())}),tO=te.object({method:te.literal("eth_chainId")}),tR=te.object({method:te.literal("eth_estimateGas"),params:te.array(te.any())}),tD=te.object({method:te.literal("eth_feeHistory"),params:te.array(te.any())}),tN=te.object({method:te.literal("eth_gasPrice")}),t$=te.object({method:te.literal("eth_getAccount"),params:te.array(te.any())}),tL=te.object({method:te.literal("eth_getBalance"),params:te.array(te.any())}),tj=te.object({method:te.literal("eth_getBlockByHash"),params:te.array(te.any())}),tU=te.object({method:te.literal("eth_getBlockByNumber"),params:te.array(te.any())}),tB=te.object({method:te.literal("eth_getBlockReceipts"),params:te.array(te.any())}),tz=te.object({method:te.literal("eth_getBlockTransactionCountByHash"),params:te.array(te.any())}),tZ=te.object({method:te.literal("eth_getBlockTransactionCountByNumber"),params:te.array(te.any())}),tF=te.object({method:te.literal("eth_getCode"),params:te.array(te.any())}),tH=te.object({method:te.literal("eth_getFilterChanges"),params:te.array(te.any())}),tV=te.object({method:te.literal("eth_getFilterLogs"),params:te.array(te.any())}),tW=te.object({method:te.literal("eth_getLogs"),params:te.array(te.any())}),tq=te.object({method:te.literal("eth_getProof"),params:te.array(te.any())}),tG=te.object({method:te.literal("eth_getStorageAt"),params:te.array(te.any())}),tY=te.object({method:te.literal("eth_getTransactionByBlockHashAndIndex"),params:te.array(te.any())}),tK=te.object({method:te.literal("eth_getTransactionByBlockNumberAndIndex"),params:te.array(te.any())}),tJ=te.object({method:te.literal("eth_getTransactionByHash"),params:te.array(te.any())}),tX=te.object({method:te.literal("eth_getTransactionCount"),params:te.array(te.any())}),tQ=te.object({method:te.literal("eth_getTransactionReceipt"),params:te.array(te.any())}),t0=te.object({method:te.literal("eth_getUncleCountByBlockHash"),params:te.array(te.any())}),t1=te.object({method:te.literal("eth_getUncleCountByBlockNumber"),params:te.array(te.any())}),t2=te.object({method:te.literal("eth_maxPriorityFeePerGas")}),t5=te.object({method:te.literal("eth_newBlockFilter")}),t3=te.object({method:te.literal("eth_newFilter"),params:te.array(te.any())}),t6=te.object({method:te.literal("eth_newPendingTransactionFilter")}),t4=te.object({method:te.literal("eth_sendRawTransaction"),params:te.array(te.any())}),t8=te.object({method:te.literal("eth_syncing"),params:te.array(te.any())}),t9=te.object({method:te.literal("eth_uninstallFilter"),params:te.array(te.any())}),t7=te.object({method:te.literal("personal_sign"),params:te.array(te.any())}),re=te.object({method:te.literal("eth_signTypedData_v4"),params:te.array(te.any())}),rt=te.object({method:te.literal("eth_sendTransaction"),params:te.array(te.any())}),rr=te.object({method:te.literal("solana_signMessage"),params:te.object({message:te.string(),pubkey:te.string()})}),ri=te.object({method:te.literal("solana_signTransaction"),params:te.object({transaction:te.string()})}),rn=te.object({method:te.literal("solana_signAllTransactions"),params:te.object({transactions:te.array(te.string())})}),ra=te.object({method:te.literal("solana_signAndSendTransaction"),params:te.object({transaction:te.string(),options:te.object({skipPreflight:te.boolean().optional(),preflightCommitment:te.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:te.number().optional(),minContextSlot:te.number().optional()}).optional()})}),ro=te.object({method:te.literal("wallet_sendCalls"),params:te.array(te.object({chainId:te.string().or(te.number()).optional(),from:te.string().optional(),version:te.string().optional(),capabilities:te.any().optional(),calls:te.array(te.object({to:te.string().startsWith("0x"),data:te.string().startsWith("0x").optional(),value:te.string().optional()}))}))}),rs=te.object({method:te.literal("wallet_getCallsStatus"),params:te.array(te.string())}),rc=te.object({method:te.literal("wallet_getCapabilities")}),rl=te.object({method:te.literal("wallet_grantPermissions"),params:te.array(te.any())}),ru=te.object({token:te.string()}),rd=te.object({id:te.string().optional()});rd.extend({type:tr("APP_SWITCH_NETWORK"),payload:ti}).or(rd.extend({type:tr("APP_CONNECT_EMAIL"),payload:tn})).or(rd.extend({type:tr("APP_CONNECT_DEVICE")})).or(rd.extend({type:tr("APP_CONNECT_OTP"),payload:ta})).or(rd.extend({type:tr("APP_CONNECT_SOCIAL"),payload:to})).or(rd.extend({type:tr("APP_GET_FARCASTER_URI")})).or(rd.extend({type:tr("APP_CONNECT_FARCASTER")})).or(rd.extend({type:tr("APP_GET_USER"),payload:te.optional(ts)})).or(rd.extend({type:tr("APP_GET_SOCIAL_REDIRECT_URI"),payload:tc})).or(rd.extend({type:tr("APP_SIGN_OUT")})).or(rd.extend({type:tr("APP_IS_CONNECTED"),payload:te.optional(ru)})).or(rd.extend({type:tr("APP_GET_CHAIN_ID")})).or(rd.extend({type:tr("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(rd.extend({type:tr("APP_INIT_SMART_ACCOUNT")})).or(rd.extend({type:tr("APP_SET_PREFERRED_ACCOUNT"),payload:tp})).or(rd.extend({type:tr("APP_RPC_REQUEST"),payload:t7.or(rt).or(tT).or(tP).or(tI).or(tO).or(tR).or(tD).or(tN).or(t$).or(tL).or(tj).or(tU).or(tB).or(tz).or(tZ).or(tF).or(tH).or(tV).or(tW).or(tq).or(tG).or(tY).or(tK).or(tJ).or(tX).or(tQ).or(t0).or(t1).or(t2).or(t5).or(t3).or(t6).or(t4).or(t8).or(t9).or(t7).or(re).or(rt).or(rr).or(ri).or(rn).or(ra).or(rs).or(ro).or(rc).or(rl)})).or(rd.extend({type:tr("APP_UPDATE_EMAIL"),payload:tl})).or(rd.extend({type:tr("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:tu})).or(rd.extend({type:tr("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:td})).or(rd.extend({type:tr("APP_SYNC_THEME"),payload:tf})).or(rd.extend({type:tr("APP_SYNC_DAPP_DATA"),payload:th})),rd.extend({type:tr("FRAME_SWITCH_NETWORK_ERROR"),payload:tt}).or(rd.extend({type:tr("FRAME_SWITCH_NETWORK_SUCCESS"),payload:tE})).or(rd.extend({type:tr("FRAME_CONNECT_EMAIL_SUCCESS"),payload:tg})).or(rd.extend({type:tr("FRAME_CONNECT_EMAIL_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:tb})).or(rd.extend({type:tr("FRAME_GET_FARCASTER_URI_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:tm})).or(rd.extend({type:tr("FRAME_CONNECT_FARCASTER_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_CONNECT_OTP_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_CONNECT_OTP_SUCCESS")})).or(rd.extend({type:tr("FRAME_CONNECT_DEVICE_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_CONNECT_DEVICE_SUCCESS")})).or(rd.extend({type:tr("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:tv})).or(rd.extend({type:tr("FRAME_CONNECT_SOCIAL_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_GET_USER_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_GET_USER_SUCCESS"),payload:tw})).or(rd.extend({type:tr("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:tx})).or(rd.extend({type:tr("FRAME_SIGN_OUT_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_SIGN_OUT_SUCCESS")})).or(rd.extend({type:tr("FRAME_IS_CONNECTED_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_IS_CONNECTED_SUCCESS"),payload:t_})).or(rd.extend({type:tr("FRAME_GET_CHAIN_ID_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_GET_CHAIN_ID_SUCCESS"),payload:tC})).or(rd.extend({type:tr("FRAME_RPC_REQUEST_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_RPC_REQUEST_SUCCESS"),payload:tM})).or(rd.extend({type:tr("FRAME_SESSION_UPDATE"),payload:ru})).or(rd.extend({type:tr("FRAME_UPDATE_EMAIL_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_UPDATE_EMAIL_SUCCESS"),payload:ty})).or(rd.extend({type:tr("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(rd.extend({type:tr("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:tS})).or(rd.extend({type:tr("FRAME_SYNC_THEME_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_SYNC_THEME_SUCCESS")})).or(rd.extend({type:tr("FRAME_SYNC_DAPP_DATA_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(rd.extend({type:tr("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:tk})).or(rd.extend({type:tr("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:tt})).or(rd.extend({type:tr("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:tA})).or(rd.extend({type:tr("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:tt}));let rf={set(e,t){rp.isClient&&localStorage.setItem(`${f.STORAGE_KEY}${e}`,t)},get:e=>rp.isClient?localStorage.getItem(`${f.STORAGE_KEY}${e}`):null,delete(e,t){rp.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${f.STORAGE_KEY}${e}`))}},rh={transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},rp={checkIfAllowedToTriggerEmail(){let e=rf.get(f.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=rf.get(f.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0},checkIfRequestExists:e=>h.NOT_SAFE_RPC_METHODS.includes(e.method)||h.SAFE_RPC_METHODS.includes(e.method),getResponseType:e=>"string"==typeof e&&(e?.match(rh.transactionHash)||e?.match(rh.signedMessage))?f.RPC_RESPONSE_TYPE_TX:f.RPC_RESPONSE_TYPE_OBJECT,checkIfRequestIsSafe:e=>h.SAFE_RPC_METHODS.includes(e.method),isClient:"undefined"!=typeof window};r(48387),r(55724)},72674:function(e,t,r){"use strict";function i(e,t){let r=e.exec(t);return r?.groups}r.d(t,{Zw:function(){return i},cN:function(){return o},eL:function(){return n},lh:function(){return a}});let n=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,a=/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,o=/^\(.+?\).*?$/},90606:function(e,t,r){"use strict";r.d(t,{XM:function(){return n},Xe:function(){return a},pX:function(){return i}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this.t=e,this._$AM=t,this.i=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},97426:function(e,t,r){"use strict";r.d(t,{Jb:function(){return k},Ld:function(){return A},YP:function(){return S},_$LH:function(){return z},dy:function(){return E},sY:function(){return F}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.trustedTypes,a=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,o="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+s,l=`<${c}>`,u=document,d=()=>u.createComment(""),f=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,p=e=>h(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,v=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,x=/"/g,_=/^(?:script|style|textarea|title)$/i,C=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=C(1),S=C(2),k=(C(3),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),M=new WeakMap,T=u.createTreeWalker(u,129);function P(e,t){if(!h(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(t):t}let I=(e,t)=>{let r=e.length-1,i=[],n,a=2===t?"<svg>":3===t?"<math>":"",c=b;for(let t=0;t<r;t++){let r=e[t],u,d,f=-1,h=0;for(;h<r.length&&(c.lastIndex=h,null!==(d=c.exec(r)));)h=c.lastIndex,c===b?"!--"===d[1]?c=m:void 0!==d[1]?c=v:void 0!==d[2]?(_.test(d[2])&&(n=RegExp("</"+d[2],"g")),c=y):void 0!==d[3]&&(c=y):c===y?">"===d[0]?(c=n??b,f=-1):void 0===d[1]?f=-2:(f=c.lastIndex-d[2].length,u=d[1],c=void 0===d[3]?y:'"'===d[3]?x:w):c===x||c===w?c=y:c===m||c===v?c=b:(c=y,n=void 0);let p=c===y&&e[t+1].startsWith("/>")?" ":"";a+=c===b?r+l:f>=0?(i.push(u),r.slice(0,f)+o+r.slice(f)+s+p):r+s+(-2===f?t:p)}return[P(e,a+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class O{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let a=0,l=0,u=e.length-1,f=this.parts,[h,p]=I(e,t);if(this.el=O.createElement(h,r),T.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=T.nextNode())&&f.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(o)){let t=p[l++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);f.push({type:1,index:a,name:n[2],strings:r,ctor:"."===n[1]?L:"?"===n[1]?j:"@"===n[1]?U:$}),i.removeAttribute(e)}else e.startsWith(s)&&(f.push({type:6,index:a}),i.removeAttribute(e));if(_.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),T.nextNode(),f.push({type:2,index:++a});i.append(e[t],d())}}}else if(8===i.nodeType){if(i.data===c)f.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)f.push({type:7,index:a}),e+=s.length-1}}a++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function R(e,t,r=e,i){if(t===k)return t;let n=void 0!==i?r.o?.[i]:r.l,a=f(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,r,i),void 0!==i?(r.o??=[])[i]=n:r.l=n),void 0!==n&&(t=R(e,n._$AS(e,t.values),n,i)),t}class D{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);T.currentNode=i;let n=T.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new N(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new B(n,this,e)),this._$AV.push(t),s=r[++o]}a!==s?.index&&(n=T.nextNode(),a++)}return T.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,r,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){f(e=R(this,e,t))?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):p(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&f(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=O.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new D(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=M.get(e.strings);return void 0===t&&M.set(e.strings,t=new O(e)),t}k(e){h(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new N(this.O(d()),this.O(d()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class ${get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(e,t=this,r,i){let n=this.strings,a=!1;if(void 0===n)(a=!f(e=R(this,e,t,0))||e!==this._$AH&&e!==k)&&(this._$AH=e);else{let i,o;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(o=R(this,s[r+i],t,i))===k&&(o=this._$AH[i]),a||=!f(o)||o!==this._$AH[i],o===A?e=A:e!==A&&(e+=(o??"")+n[i+1]),this._$AH[i]=o}a&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class L extends ${constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class j extends ${constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class U extends ${constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??A)===k)return;let r=this._$AH,i=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}let z={M:o,P:s,A:c,C:1,L:I,R:D,D:p,V:R,I:N,H:$,N:j,U:U,B:L,F:B},Z=i.litHtmlPolyfillSupport;Z?.(O,N),(i.litHtmlVersions??=[]).push("3.2.0");let F=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new N(t.insertBefore(d(),e),e,void 0,r??{})}return n._$AI(e),n}},47964:function(e,t,r){"use strict";r.d(t,{Cb:function(){return i.C},SB:function(){return n.S}});var i=r(51149),n=r(80404)},83395:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(97426);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>e??i.Ld},16110:function(e,t,r){"use strict";r.d(t,{V:function(){return p},i:function(){return m}});var i=r(97426);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:n}=i._$LH,a=e=>void 0===e.strings;var o=r(90606);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),s(e,t);return!0},c=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},l=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),f(t)}};function u(e){void 0!==this._$AN?(c(this),this._$AM=e,l(this)):this._$AM=e}function d(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)s(i[e],!1),c(i[e]);else null!=i&&(s(i,!1),c(i))}else s(this,e)}}let f=e=>{e.type==o.pX.CHILD&&(e._$AP??=d,e._$AQ??=u)};class h extends o.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),l(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),c(this))}setValue(e){if(a(this.t))this.t._$AI(e,this);else{let t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=()=>new g;class g{}let b=new WeakMap,m=(0,o.XM)(class extends h{render(e){return i.Ld}update(e,[t]){let r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){let t=this.ht??globalThis,r=b.get(t);void 0===r&&(r=new WeakMap,b.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?b.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},73089:function(e,t,r){"use strict";r.d(t,{oi:function(){return a},iv:function(){return i.iv},dy:function(){return n.dy},YP:function(){return n.YP},$m:function(){return i.$m}});var i=r(94526),n=r(97426);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends i.fl{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=(0,n.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return n.Jb}}a._$litElement$=!0,a.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:a});let o=globalThis.litElementPolyfillSupport;o?.({LitElement:a}),(globalThis.litElementVersions??=[]).push("4.1.0")},84712:function(e,t,r){"use strict";function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?globalThis.Buffer.allocUnsafe(e):new Uint8Array(e)}r.d(t,{E:function(){return i}})},60040:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var i=r(84712);function n(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,i.E)(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return r}},37002:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var i=r(80424);function n(e,t="utf8"){let r=i.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e,"utf8"):r.decoder.decode(`${r.prefix}${e}`)}},15329:function(e,t,r){"use strict";r.d(t,{BB:function(){return a.B},mL:function(){return n.m},zo:function(){return i.z}});var i=r(60040),n=r(37002),a=r(87050)},87050:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(80424);function n(e,t="utf8"){let r=i.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},80424:function(e,t,r){"use strict";r.d(t,{Z:function(){return eq}});var i={};r.r(i),r.d(i,{identity:function(){return O}});var n={};r.r(n),r.d(n,{base2:function(){return R}});var a={};r.r(a),r.d(a,{base8:function(){return D}});var o={};r.r(o),r.d(o,{base10:function(){return N}});var s={};r.r(s),r.d(s,{base16:function(){return $},base16upper:function(){return L}});var c={};r.r(c),r.d(c,{base32:function(){return j},base32hex:function(){return Z},base32hexpad:function(){return H},base32hexpadupper:function(){return V},base32hexupper:function(){return F},base32pad:function(){return B},base32padupper:function(){return z},base32upper:function(){return U},base32z:function(){return W}});var l={};r.r(l),r.d(l,{base36:function(){return q},base36upper:function(){return G}});var u={};r.r(u),r.d(u,{base58btc:function(){return Y},base58flickr:function(){return K}});var d={};r.r(d),r.d(d,{base64:function(){return J},base64pad:function(){return X},base64url:function(){return Q},base64urlpad:function(){return ee}});var f={};r.r(f),r.d(f,{base256emoji:function(){return en}});var h={};r.r(h),r.d(h,{sha256:function(){return em},sha512:function(){return ev}});var p={};r.r(p),r.d(p,{identity:function(){return ey}});var g={};r.r(g),r.d(g,{code:function(){return ex},decode:function(){return eC},encode:function(){return e_},name:function(){return ew}});var b={};r.r(b),r.d(b,{code:function(){return eA},decode:function(){return eT},encode:function(){return eM},name:function(){return ek}});var m=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),i=0;i<r.length;i++)r[i]=255;for(var n=0;n<e.length;n++){var a=e.charAt(n),o=a.charCodeAt(0);if(255!==r[o])throw TypeError(a+" is ambiguous");r[o]=n}var s=e.length,c=e.charAt(0),l=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var i=0,n=0;e[t]===c;)i++,t++;for(var a=(e.length-t)*l+1>>>0,o=new Uint8Array(a);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var d=0,f=a-1;(0!==u||d<n)&&-1!==f;f--,d++)u+=s*o[f]>>>0,o[f]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");n=d,t++}if(" "!==e[t]){for(var h=a-n;h!==a&&0===o[h];)h++;for(var p=new Uint8Array(i+(a-h)),g=i;h!==a;)p[g++]=o[h++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,i=0,n=0,a=t.length;n!==a&&0===t[n];)n++,r++;for(var o=(a-n)*u+1>>>0,l=new Uint8Array(o);n!==a;){for(var d=t[n],f=0,h=o-1;(0!==d||f<i)&&-1!==h;h--,f++)d+=256*l[h]>>>0,l[h]=d%s>>>0,d=d/s>>>0;if(0!==d)throw Error("Non-zero carry");i=f,n++}for(var p=o-i;p!==o&&0===l[p];)p++;for(var g=c.repeat(r);p<o;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let v=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0},y=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},w=e=>new TextEncoder().encode(e),x=e=>new TextDecoder().decode(e);class _{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class C{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return S(this,e)}}class E{constructor(e){this.decoders=e}or(e){return S(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let S=(e,t)=>new E({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class k{constructor(e,t,r,i){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=i,this.encoder=new _(e,t,r),this.decoder=new C(e,t,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let A=({name:e,prefix:t,encode:r,decode:i})=>new k(e,t,r,i),M=({prefix:e,name:t,alphabet:r})=>{let{encode:i,decode:n}=m(r,t);return A({prefix:e,name:t,encode:i,decode:e=>y(n(e))})},T=(e,t,r,i)=>{let n={};for(let e=0;e<t.length;++e)n[t[e]]=e;let a=e.length;for(;"="===e[a-1];)--a;let o=new Uint8Array(a*r/8|0),s=0,c=0,l=0;for(let t=0;t<a;++t){let a=n[e[t]];if(void 0===a)throw SyntaxError(`Non-${i} character`);c=c<<r|a,(s+=r)>=8&&(s-=8,o[l++]=255&c>>s)}if(s>=r||255&c<<8-s)throw SyntaxError("Unexpected end of data");return o},P=(e,t,r)=>{let i="="===t[t.length-1],n=(1<<r)-1,a="",o=0,s=0;for(let i=0;i<e.length;++i)for(s=s<<8|e[i],o+=8;o>r;)o-=r,a+=t[n&s>>o];if(o&&(a+=t[n&s<<r-o]),i)for(;a.length*r&7;)a+="=";return a},I=({name:e,prefix:t,bitsPerChar:r,alphabet:i})=>A({prefix:t,name:e,encode:e=>P(e,i,r),decode:t=>T(t,i,r,e)}),O=A({prefix:"\0",name:"identity",encode:e=>x(e),decode:e=>w(e)}),R=I({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),D=I({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),N=M({prefix:"9",name:"base10",alphabet:"0123456789"}),$=I({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),L=I({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),j=I({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),U=I({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),B=I({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),z=I({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Z=I({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),F=I({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),H=I({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),V=I({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),W=I({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),q=M({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),G=M({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),Y=M({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),K=M({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),J=I({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),X=I({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Q=I({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),ee=I({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),et=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),er=et.reduce((e,t,r)=>(e[r]=t,e),[]),ei=et.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),en=A({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=er[t],"")},decode:function(e){let t=[];for(let r of e){let e=ei[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var ea=function e(t,r,i){r=r||[];for(var n=i=i||0;t>=2147483648;)r[i++]=255&t|128,t/=128;for(;-128&t;)r[i++]=255&t|128,t>>>=7;return r[i]=0|t,e.bytes=i-n+1,r},eo=function e(t,r){var i,n=0,r=r||0,a=0,o=r,s=t.length;do{if(o>=s)throw e.bytes=0,RangeError("Could not decode varint");i=t[o++],n+=a<28?(127&i)<<a:(127&i)*Math.pow(2,a),a+=7}while(i>=128);return e.bytes=o-r,n};let es=(e,t=0)=>[eo(e,t),eo.bytes],ec=(e,t,r=0)=>(ea(e,t,r),t),el=e=>e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10,eu=(e,t)=>{let r=t.byteLength,i=el(e),n=i+el(r),a=new Uint8Array(n+r);return ec(e,a,0),ec(r,a,i),a.set(t,n),new eh(e,r,t,a)},ed=e=>{let t=y(e),[r,i]=es(t),[n,a]=es(t.subarray(i)),o=t.subarray(i+a);if(o.byteLength!==n)throw Error("Incorrect length");return new eh(r,n,o,t)},ef=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&v(e.bytes,t.bytes);class eh{constructor(e,t,r,i){this.code=e,this.size=t,this.digest=r,this.bytes=i}}let ep=({name:e,code:t,encode:r})=>new eg(e,t,r);class eg{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?eu(this.code,t):t.then(e=>eu(this.code,e))}throw Error("Unknown type, must be binary type")}}let eb=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),em=ep({name:"sha2-256",code:18,encode:eb("SHA-256")}),ev=ep({name:"sha2-512",code:19,encode:eb("SHA-512")}),ey={code:0,name:"identity",encode:y,digest:e=>eu(0,y(e))},ew="raw",ex=85,e_=e=>y(e),eC=e=>y(e),eE=new TextEncoder,eS=new TextDecoder,ek="json",eA=512,eM=e=>eE.encode(JSON.stringify(e)),eT=e=>JSON.parse(eS.decode(e));class eP{constructor(e,t,r,i){this.code=t,this.version=e,this.multihash=r,this.bytes=i,this.byteOffset=i.byteOffset,this.byteLength=i.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eU,byteLength:eU,code:ej,version:ej,multihash:ej,bytes:ej,_baseCache:eU,asCID:eU})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eD)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eN)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eP.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=eu(e,t);return eP.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&ef(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:i}=this;return 0===r?eO(t,i,e||Y.encoder):eR(t,i,e||j.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eB(/^0\.0/,ez),!!(e&&(e[eL]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eP)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:i,bytes:n}=e;return new eP(t,r,i,n||e$(t,r,i.bytes))}if(null==e||!0!==e[eL])return null;{let{version:t,multihash:r,code:i}=e,n=ed(r);return eP.create(t,i,n)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eD)return new eP(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eD}) block encoding`);case 1:{let i=e$(e,t,r.bytes);return new eP(e,t,r,i)}default:throw Error("Invalid version")}}static createV0(e){return eP.create(0,eD,e)}static createV1(e,t){return eP.create(1,e,t)}static decode(e){let[t,r]=eP.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eP.inspectBytes(e),r=t.size-t.multihashSize,i=y(e.subarray(r,r+t.multihashSize));if(i.byteLength!==t.multihashSize)throw Error("Incorrect length");let n=i.subarray(t.multihashSize-t.digestSize),a=new eh(t.multihashCode,t.digestSize,n,i);return[0===t.version?eP.createV0(a):eP.createV1(t.codec,a),e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,i]=es(e.subarray(t));return t+=i,r},i=r(),n=eD;if(18===i?(i=0,t=0):1===i&&(n=r()),0!==i&&1!==i)throw RangeError(`Invalid CID version ${i}`);let a=t,o=r(),s=r(),c=t+s;return{version:i,codec:n,multihashCode:o,digestSize:s,multihashSize:c-a,size:c}}static parse(e,t){let[r,i]=eI(e,t),n=eP.decode(i);return n._baseCache.set(r,e),n}}let eI=(e,t)=>{switch(e[0]){case"Q":return[Y.prefix,(t||Y).decode(`${Y.prefix}${e}`)];case Y.prefix:return[Y.prefix,(t||Y).decode(e)];case j.prefix:return[j.prefix,(t||j).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eO=(e,t,r)=>{let{prefix:i}=r;if(i!==Y.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let n=t.get(i);if(null!=n)return n;{let n=r.encode(e).slice(1);return t.set(i,n),n}},eR=(e,t,r)=>{let{prefix:i}=r,n=t.get(i);if(null!=n)return n;{let n=r.encode(e);return t.set(i,n),n}},eD=112,eN=18,e$=(e,t,r)=>{let i=el(e),n=i+el(t),a=new Uint8Array(n+r.byteLength);return ec(e,a,0),ec(t,a,i),a.set(r,n),a},eL=Symbol.for("@ipld/js-cid/CID"),ej={writable:!1,configurable:!1,enumerable:!0},eU={writable:!1,enumerable:!1,configurable:!1},eB=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},ez=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,eZ={...i,...n,...a,...o,...s,...c,...l,...u,...d,...f};({...h,...p});var eF=r(84712);function eH(e,t,r,i){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:i}}}let eV=eH("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),eW=eH("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,eF.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t});var eq={utf8:eV,"utf-8":eV,hex:eZ.base16,latin1:eW,ascii:eW,binary:eW,...eZ}},89693:function(e,t,r){"use strict";r.d(t,{_:function(){return c},t$:function(){return u},tm:function(){return l}});var i=r(50026);r(10414);var n="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;function a(e,t,r,a){let o=(0,i.useRef)(t);n(()=>{o.current=t},[t]),(0,i.useEffect)(()=>{let t=(null==r?void 0:r.current)??window;if(!(t&&t.addEventListener))return;let i=e=>{o.current(e)};return t.addEventListener(e,i,a),()=>{t.removeEventListener(e,i,a)}},[e,r,a])}function o(e){let t=(0,i.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return n(()=>{t.current=e},[e]),(0,i.useCallback)((...e)=>{var r;return null==(r=t.current)?void 0:r.call(t,...e)},[t])}var s="undefined"==typeof window;function c(e,t,r={}){let{initializeWithValue:n=!0}=r,c=(0,i.useCallback)(e=>r.serializer?r.serializer(e):JSON.stringify(e),[r]),l=(0,i.useCallback)(e=>{let i;if(r.deserializer)return r.deserializer(e);if("undefined"===e)return;let n=t instanceof Function?t():t;try{i=JSON.parse(e)}catch(e){return console.error("Error parsing JSON:",e),n}return i},[r,t]),u=(0,i.useCallback)(()=>{let r=t instanceof Function?t():t;if(s)return r;try{let t=window.localStorage.getItem(e);return t?l(t):r}catch(t){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,t),r}},[t,e,l]),[d,f]=(0,i.useState)(()=>n?u():t instanceof Function?t():t),h=o(t=>{s&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{let r=t instanceof Function?t(u()):t;window.localStorage.setItem(e,c(r)),f(r),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(t){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,t)}}),p=o(()=>{s&&console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);let r=t instanceof Function?t():t;window.localStorage.removeItem(e),f(r),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});(0,i.useEffect)(()=>{f(u())},[e]);let g=(0,i.useCallback)(t=>{t.key&&t.key!==e||f(u())},[e,u]);return a("storage",g),a("local-storage",g),[d,h,p]}function l(){let e=(0,i.useRef)(!1);return(0,i.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,i.useCallback)(()=>e.current,[])}function u(e,t,r="mousedown",i={}){a(r,r=>{let i=r.target;i&&i.isConnected&&(Array.isArray(e)?e.filter(e=>!!e.current).every(e=>e.current&&!e.current.contains(i)):e.current&&!e.current.contains(i))&&t(r)},void 0,i)}},81086:function(e,t,r){"use strict";r.d(t,{sj:function(){return h},iH:function(){return b},CO:function(){return g},Ld:function(){return p}}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,a=new WeakMap,o=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>o(e)&&e[i]||null,c=(e,t=!0)=>{a.set(e,t)},l=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,[f]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,a=(e,t,r=i)=>{let o=n.get(e);if((null==o?void 0:o[0])===t)return o[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return c(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(d.has(i))c(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=a(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},o=new WeakMap,f=[1,1],h=i=>{if(!l(i))throw Error("object required");let n=o.get(i);if(n)return n;let c=f[0],p=new Set,g=(e,t=++f[0])=>{c!==t&&(c=t,p.forEach(r=>r(e,t)))},b=f[1],m=(e=++f[1])=>(b===e||p.size||(b=e,y.forEach(([t])=>{let r=t[1](e);r>c&&(c=r)})),c),v=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},y=new Map,w=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](v(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},_=e=>{p.add(e),1===p.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](v(r));y.set(r,[e,i])});let t=()=>{p.delete(e),0===p.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},C=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),E={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,a){let c=Reflect.has(t,i),f=Reflect.get(t,i,a);if(c&&(e(f,n)||o.has(n)&&e(f,o.get(n))))return!0;x(i),l(n)&&(n=s(n)||n);let p=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(p=h(n));let e=!d.has(p)&&u.get(p);e&&w(i,e)}return Reflect.set(t,i,p,a),g(["set",[i],n,f]),!0}},S=t(C,E);o.set(i,S);let k=[C,m,a,_];return u.set(S,k),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(S[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)}),S})=>[h,u,d,e,t,r,i,n,a,o,f])();function h(e={}){return f(e)}function p(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let a=[],o=n[3],s=!1,c=o(e=>{if(a.push(e),r){t(a.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(a.splice(0))}))});return s=!0,()=>{s=!1,c()}}function g(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,a]=r;return a(i,n(),t)}function b(e){return d.add(e),e}},11562:function(e,t,r){"use strict";r.d(t,{VW:function(){return n},Yr:function(){return a}});var i=r(81086);function n(e,t,r,n){let a=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(a,i)||r(a=i)},n)}function a(e){let t=(0,i.sj)({data:Array.from(e||[]),has(e){return this.data.some(t=>t[0]===e)},set(e,t){let r=this.data.find(t=>t[0]===e);return r?r[1]=t:this.data.push([e,t]),this},get(e){var t;return null==(t=this.data.find(t=>t[0]===e))?void 0:t[1]},delete(e){let t=this.data.findIndex(t=>t[0]===e);return -1!==t&&(this.data.splice(t,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(e){this.data.forEach(t=>{e(t[1],t[0],this)})},keys(){return this.data.map(e=>e[0]).values()},values(){return this.data.map(e=>e[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}Symbol()},28854:function(e,t,r){"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return i}})},87435:function(e,t,r){"use strict";r.d(t,{R:function(){return ee}});var i=r(72674);let n=/^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,a=/^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,o=/^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,s=/^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,c=/^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,l=/^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,u=/^receive\(\) external payable$/,d=new Set(["indexed"]),f=new Set(["calldata","memory","storage"]);class h extends Error{constructor(e,t={}){let r=t.cause instanceof h?t.cause.details:t.cause?.message?t.cause.message:t.details,i=t.cause instanceof h&&t.cause.docsPath||t.docsPath;super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...i?[`Docs: https://abitype.dev${i}`]:[],...r?[`Details: ${r}`]:[],"Version: abitype@1.0.5"].join("\n")),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiTypeError"}),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=i,this.metaMessages=t.metaMessages,this.shortMessage=e}}class p extends h{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownTypeError"})}}class g extends h{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSolidityTypeError"})}}class b extends h{constructor({param:e}){super("Invalid ABI parameter.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParameterError"})}}class m extends h{constructor({param:e,name:t}){super("Invalid ABI parameter.",{details:e,metaMessages:[`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SolidityProtectedKeywordError"})}}class v extends h{constructor({param:e,type:t,modifier:r}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidModifierError"})}}class y extends h{constructor({param:e,type:t,modifier:r}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`,`Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidFunctionModifierError"})}}class w extends h{constructor({abiParameter:e}){super("Invalid ABI parameter.",{details:JSON.stringify(e,null,2),metaMessages:["ABI parameter type is invalid."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiTypeParameterError"})}}class x extends h{constructor({signature:e,type:t}){super(`Invalid ${t} signature.`,{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSignatureError"})}}class _ extends h{constructor({signature:e}){super("Unknown signature.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSignatureError"})}}class C extends h{constructor({signature:e}){super("Invalid struct signature.",{details:e,metaMessages:["No properties exist."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStructSignatureError"})}}class E extends h{constructor({type:e}){super("Circular reference detected.",{metaMessages:[`Struct "${e}" is a circular reference.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CircularReferenceError"})}}class S extends h{constructor({current:e,depth:t}){super("Unbalanced parentheses.",{metaMessages:[`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],details:`Depth "${t}"`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParenthesisError"})}}let k=new Map([["address",{type:"address"}],["bool",{type:"bool"}],["bytes",{type:"bytes"}],["bytes32",{type:"bytes32"}],["int",{type:"int256"}],["int256",{type:"int256"}],["string",{type:"string"}],["uint",{type:"uint256"}],["uint8",{type:"uint8"}],["uint16",{type:"uint16"}],["uint24",{type:"uint24"}],["uint32",{type:"uint32"}],["uint64",{type:"uint64"}],["uint96",{type:"uint96"}],["uint112",{type:"uint112"}],["uint160",{type:"uint160"}],["uint192",{type:"uint192"}],["uint256",{type:"uint256"}],["address owner",{type:"address",name:"owner"}],["address to",{type:"address",name:"to"}],["bool approved",{type:"bool",name:"approved"}],["bytes _data",{type:"bytes",name:"_data"}],["bytes data",{type:"bytes",name:"data"}],["bytes signature",{type:"bytes",name:"signature"}],["bytes32 hash",{type:"bytes32",name:"hash"}],["bytes32 r",{type:"bytes32",name:"r"}],["bytes32 root",{type:"bytes32",name:"root"}],["bytes32 s",{type:"bytes32",name:"s"}],["string name",{type:"string",name:"name"}],["string symbol",{type:"string",name:"symbol"}],["string tokenURI",{type:"string",name:"tokenURI"}],["uint tokenId",{type:"uint256",name:"tokenId"}],["uint8 v",{type:"uint8",name:"v"}],["uint256 balance",{type:"uint256",name:"balance"}],["uint256 tokenId",{type:"uint256",name:"tokenId"}],["uint256 value",{type:"uint256",name:"value"}],["event:address indexed from",{type:"address",name:"from",indexed:!0}],["event:address indexed to",{type:"address",name:"to",indexed:!0}],["event:uint indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}],["event:uint256 indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}]]),A=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,M=/^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,T=/^u?int$/;function P(e,t){var r,n,a;let o;let s=(r=t?.type)?`${r}:${e}`:e;if(k.has(s))return k.get(s);let c=i.cN.test(e),l=(0,i.Zw)(c?M:A,e);if(!l)throw new b({param:e});if(l.name&&("address"===(n=l.name)||"bool"===n||"function"===n||"string"===n||"tuple"===n||i.eL.test(n)||i.lh.test(n)||R.test(n)))throw new m({param:e,name:l.name});let u=l.name?{name:l.name}:{},d="indexed"===l.modifier?{indexed:!0}:{},h=t?.structs??{},p={};if(c){o="tuple";let e=I(l.type),t=[],r=e.length;for(let i=0;i<r;i++)t.push(P(e[i],{structs:h}));p={components:t}}else if(l.type in h)o="tuple",p={components:h[l.type]};else if(T.test(l.type))o=`${l.type}256`;else if(o=l.type,t?.type!=="struct"&&!O(o))throw new g({type:o});if(l.modifier){if(!t?.modifiers?.has?.(l.modifier))throw new v({param:e,type:t?.type,modifier:l.modifier});if(f.has(l.modifier)&&(a=o,!l.array&&"bytes"!==a&&"string"!==a&&"tuple"!==a))throw new y({param:e,type:t?.type,modifier:l.modifier})}let w={type:`${o}${l.array??""}`,...u,...d,...p};return k.set(s,w),w}function I(e,t=[],r="",i=0){let n=e.trim().length;for(let a=0;a<n;a++){let n=e[a],o=e.slice(a+1);switch(n){case",":return 0===i?I(o,[...t,r.trim()]):I(o,t,`${r}${n}`,i);case"(":return I(o,t,`${r}${n}`,i+1);case")":return I(o,t,`${r}${n}`,i-1);default:return I(o,t,`${r}${n}`,i)}}if(""===r)return t;if(0!==i)throw new S({current:r,depth:i});return t.push(r.trim()),t}function O(e){return"address"===e||"bool"===e||"function"===e||"string"===e||i.eL.test(e)||i.lh.test(e)}let R=/^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,D=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;function N(e){let t=function(e){let t={},r=e.length;for(let n=0;n<r;n++){let r=e[n];if(!s.test(r))continue;let a=(0,i.Zw)(s,r);if(!a)throw new x({signature:r,type:"struct"});let o=a.properties.split(";"),c=[],l=o.length;for(let e=0;e<l;e++){let t=o[e].trim();if(!t)continue;let r=P(t,{type:"struct"});c.push(r)}if(!c.length)throw new C({signature:r});t[a.name]=c}let n={},a=Object.entries(t),o=a.length;for(let e=0;e<o;e++){let[r,o]=a[e];n[r]=function e(t,r,n=new Set){let a=[],o=t.length;for(let s=0;s<o;s++){let o=t[s];if(i.cN.test(o.type))a.push(o);else{let t=(0,i.Zw)(D,o.type);if(!t?.type)throw new w({abiParameter:o});let{array:s,type:c}=t;if(c in r){if(n.has(c))throw new E({type:c});a.push({...o,type:`tuple${s??""}`,components:e(r[c]??[],r,new Set([...n,c]))})}else if(O(c))a.push(o);else throw new p({type:c})}}return a}(o,t)}return n}(e),r=[],h=e.length;for(let p=0;p<h;p++){let h=e[p];s.test(h)||r.push(function(e,t={}){if(o.test(e)){let r=(0,i.Zw)(o,e);if(!r)throw new x({signature:e,type:"function"});let n=I(r.parameters),a=[],s=n.length;for(let e=0;e<s;e++)a.push(P(n[e],{modifiers:f,structs:t,type:"function"}));let c=[];if(r.returns){let e=I(r.returns),i=e.length;for(let r=0;r<i;r++)c.push(P(e[r],{modifiers:f,structs:t,type:"function"}))}return{name:r.name,type:"function",stateMutability:r.stateMutability??"nonpayable",inputs:a,outputs:c}}if(a.test(e)){let r=(0,i.Zw)(a,e);if(!r)throw new x({signature:e,type:"event"});let n=I(r.parameters),o=[],s=n.length;for(let e=0;e<s;e++)o.push(P(n[e],{modifiers:d,structs:t,type:"event"}));return{name:r.name,type:"event",inputs:o}}if(n.test(e)){let r=(0,i.Zw)(n,e);if(!r)throw new x({signature:e,type:"error"});let a=I(r.parameters),o=[],s=a.length;for(let e=0;e<s;e++)o.push(P(a[e],{structs:t,type:"error"}));return{name:r.name,type:"error",inputs:o}}if(c.test(e)){let r=(0,i.Zw)(c,e);if(!r)throw new x({signature:e,type:"constructor"});let n=I(r.parameters),a=[],o=n.length;for(let e=0;e<o;e++)a.push(P(n[e],{structs:t,type:"constructor"}));return{type:"constructor",stateMutability:r.stateMutability??"nonpayable",inputs:a}}if(l.test(e))return{type:"fallback"};if(u.test(e))return{type:"receive",stateMutability:"payable"};throw new _({signature:e})}(h,t))}return r}var $=r(28854),L=r(78258),j=r(86287),U=r(50628),B=r(23356),z=r(17803),Z=r(65281),F=r(17445),H=r(98056),V=r(7919),W=r(66206),q=r(92874),G=r(57897),Y=r(83852),K=r(59193),J=r(75204),X=r(86926),Q=r(30658);async function ee(e,t){let{account:i=e.account,batch:n=!!e.batch?.multicall,blockNumber:a,blockTag:o="latest",accessList:s,blobs:c,code:l,data:u,factory:d,factoryData:f,gas:h,gasPrice:p,maxFeePerBlobGas:g,maxFeePerGas:b,maxPriorityFeePerGas:m,nonce:v,to:y,value:w,stateOverride:x,..._}=t,C=i?(0,$.T)(i):void 0;if(l&&(d||f))throw new U.G("Cannot provide both `code` & `factory`/`factoryData` as parameters.");if(l&&y)throw new U.G("Cannot provide both `code` & `to` as parameters.");let E=l&&u,S=d&&f&&y&&u,k=E||S,A=E?function(e){let{code:t,data:r}=e;return(0,F.w)({abi:N(["constructor(bytes, bytes)"]),bytecode:j.NO,args:[t,r]})}({code:l,data:u}):S?function(e){let{data:t,factory:r,factoryData:i,to:n}=e;return(0,F.w)({abi:N(["constructor(address, bytes, address, bytes)"]),bytecode:j.pG,args:[n,t,r,i]})}({data:u,factory:d,factoryData:f,to:y}):u;try{(0,Q.F)(t);let r=(a?(0,W.eC)(a):void 0)||o,i=(0,X.mF)(x),l=e.chain?.formatters?.transactionRequest?.format,u=(l||K.tG)({...(0,Y.K)(_,{format:l}),from:C?.address,accessList:s,blobs:c,data:A,gas:h,gasPrice:p,maxFeePerBlobGas:g,maxFeePerGas:b,maxPriorityFeePerGas:m,nonce:v,to:k?void 0:y,value:w});if(n&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:u})&&!i)try{return await et(e,{...u,blockNumber:a,blockTag:o})}catch(e){if(!(e instanceof B.pZ)&&!(e instanceof B.mm))throw e}let d=await e.request({method:"eth_call",params:i?[u,r,i]:[u,r]});if("0x"===d)return{data:void 0};return{data:d}}catch(o){let i=function(e){if(!(e instanceof U.G))return;let t=e.walk();return"object"==typeof t?.data?t.data?.data:t.data}(o),{offchainLookup:n,offchainLookupSignature:a}=await r.e(927).then(r.bind(r,85927));if(!1!==e.ccipRead&&i?.slice(0,10)===a&&y)return{data:await n(e,{data:i,to:y})};if(k&&i?.slice(0,10)==="0x101bb98d")throw new z.Mo({factory:d});throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,G.k)(e,r);return t instanceof q.cj?e:t})();return new z.cg(i,{docsPath:t,...r})}(o,{...t,account:C,chain:e.chain})}}async function et(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:n,blockTag:a="latest",data:o,multicallAddress:s,to:c}=t,l=s;if(!l){if(!e.chain)throw new B.pZ;l=(0,V.L)({blockNumber:n,chain:e.chain,contract:"multicall3"})}let u=(n?(0,W.eC)(n):void 0)||a,{schedule:d}=(0,J.S)({id:`${e.uid}.${u}`,wait:i,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*r,fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,H.R)({abi:L.F8,args:[r],functionName:"aggregate3"}),n=await e.request({method:"eth_call",params:[{data:i,to:l},u]});return(0,Z.k)({abi:L.F8,args:[r],functionName:"aggregate3",data:n||"0x"})}}),[{returnData:f,success:h}]=await d({data:o,to:c});if(!h)throw new z.VQ({data:f});return"0x"===f?{data:void 0}:{data:f}}},2762:function(e,t,r){"use strict";r.d(t,{L:function(){return c}});var i=r(65281),n=r(98056),a=r(95595),o=r(2630),s=r(87435);async function c(e,t){let{abi:r,address:c,args:l,functionName:u,...d}=t,f=(0,n.R)({abi:r,args:l,functionName:u});try{let{data:t}=await (0,o.s)(e,s.R,"call")({...d,data:f,to:c});return(0,i.k)({abi:r,args:l,functionName:u,data:t||"0x"})}catch(e){throw(0,a.S)(e,{abi:r,address:c,args:l,docsPath:"/docs/contract/readContract",functionName:u})}}},56961:function(e,t,r){"use strict";r.d(t,{e:function(){return a}});var i=r(28854),n=r(1325);function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,ccipRead:a,key:o="base",name:s="Base Client",pollingInterval:c=4e3,type:l="base"}=e,u=e.chain,d=e.account?(0,i.T)(e.account):void 0,{config:f,request:h,value:p}=e.transport({chain:u,pollingInterval:c}),g={account:d,batch:t,cacheTime:r,ccipRead:a,chain:u,key:o,name:s,pollingInterval:c,request:h,transport:{...f,...p},type:l,uid:(0,n.h)()};return Object.assign(g,{extend:function e(t){return r=>{let i=r(t);for(let e in g)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(g)})}},4572:function(e,t,r){"use strict";r.d(t,{q:function(){return f}});var i=r(50628),n=r(37013),a=r(49145),o=r(66206),s=r(63183);let c=new(r(93611)).k(8192);var l=r(14332),u=r(30728),d=r(1325);function f({key:e,name:t,request:r,retryCount:f=3,retryDelay:h=150,timeout:p,type:g},b){return{config:{key:e,name:t,request:r,retryCount:f,retryDelay:h,timeout:p,type:g},request:function(e,t={}){return async(r,d={})=>{let{dedupe:f=!1,retryDelay:h=150,retryCount:p=3,uid:g}={...t,...d},b=f?(0,s.w)((0,o.$G)(`${g}.${(0,u.P)(r)}`)):void 0;return function(e,{enabled:t=!0,id:r}){if(!t||!r)return e();if(c.get(r))return c.get(r);let i=e().finally(()=>c.delete(r));return c.set(r,i),i}(()=>(0,l.J)(async()=>{try{return await e(r)}catch(e){switch(e.code){case a.s7.code:throw new a.s7(e);case a.B.code:throw new a.B(e);case a.LX.code:throw new a.LX(e,{method:r.method});case a.nY.code:throw new a.nY(e);case a.XS.code:throw new a.XS(e);case a.yR.code:throw new a.yR(e);case a.Og.code:throw new a.Og(e);case a.pT.code:throw new a.pT(e);case a.KB.code:throw new a.KB(e);case a.gS.code:throw new a.gS(e,{method:r.method});case a.Pv.code:throw new a.Pv(e);case a.GD.code:throw new a.GD(e);case a.ab.code:throw new a.ab(e);case a.PE.code:throw new a.PE(e);case a.Ts.code:throw new a.Ts(e);case a.u5.code:throw new a.u5(e);case a.I0.code:throw new a.I0(e);case a.x3.code:throw new a.x3(e);case 5e3:throw new a.ab(e);default:if(e instanceof i.G)throw e;throw new a.ir(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof n.Gg){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e)}return~~(1<<e)*h},retryCount:p,shouldRetry:({error:e})=>"code"in e&&"number"==typeof e.code?-1===e.code||e.code===a.Pv.code||e.code===a.XS.code:!(e instanceof n.Gg)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status}),{enabled:f,id:b})}}(r,{retryCount:f,retryDelay:h,uid:(0,d.h)()}),value:b}}},38206:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var i=r(37013),n=r(50628);class a extends n.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}var o=r(75204),s=r(27274),c=r(30728);let l={current:0,take(){return this.current++},reset(){this.current=0}};var u=r(4572);function d(e,t={}){let{batch:r,fetchOptions:n,key:d="http",name:f="HTTP JSON-RPC",onFetchRequest:h,onFetchResponse:p,retryDelay:g}=t;return({chain:b,retryCount:m,timeout:v})=>{let{batchSize:y=1e3,wait:w=0}="object"==typeof r?r:{},x=t.retryCount??m,_=v??t.timeout??1e4,C=e||b?.rpcUrls.default.http[0];if(!C)throw new a;let E=function(e,t={}){return{async request(r){let{body:n,onRequest:a=t.onRequest,onResponse:o=t.onResponse,timeout:u=t.timeout??1e4}=r,d={...t.fetchOptions??{},...r.fetchOptions??{}},{headers:f,method:h,signal:p}=d;try{let t;let r=await (0,s.F)(async({signal:t})=>{let r={...d,body:Array.isArray(n)?(0,c.P)(n.map(e=>({jsonrpc:"2.0",id:e.id??l.take(),...e}))):(0,c.P)({jsonrpc:"2.0",id:n.id??l.take(),...n}),headers:{"Content-Type":"application/json",...f},method:h||"POST",signal:p||(u>0?t:null)},i=new Request(e,r);return a&&await a(i),await fetch(e,r)},{errorInstance:new i.W5({body:n,url:e}),timeout:u,signal:!0});if(o&&await o(r),r.headers.get("Content-Type")?.startsWith("application/json")?t=await r.json():(t=await r.text(),t=JSON.parse(t||"{}")),!r.ok)throw new i.Gg({body:n,details:(0,c.P)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof i.Gg||t instanceof i.W5)throw t;throw new i.Gg({body:n,cause:t,url:e})}}}}(C,{fetchOptions:n,onRequest:h,onResponse:p,timeout:_});return(0,u.q)({key:d,name:f,async request({method:e,params:t}){let n={method:e,params:t},{schedule:a}=(0,o.S)({id:C,wait:w,shouldSplitBatch:e=>e.length>y,fn:e=>E.request({body:e}),sort:(e,t)=>e.id-t.id}),s=async e=>r?a(e):[await E.request({body:e})],[{error:c,result:l}]=await s(n);if(c)throw new i.bs({body:n,error:c,url:C});return l},retryCount:x,retryDelay:g,timeout:_,type:"http"},{fetchOptions:n,url:C})}}},78258:function(e,t,r){"use strict";r.d(t,{$o:function(){return l},F8:function(){return i},Wo:function(){return u},X$:function(){return c},du:function(){return o},k3:function(){return a},nZ:function(){return s}});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],a=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],o=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],c=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],l=[{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],u=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}]},86287:function(e,t,r){"use strict";r.d(t,{NO:function(){return i},ST:function(){return a},pG:function(){return n}});let i="0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",n="0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",a="0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"},58094:function(e,t,r){"use strict";r.d(t,{$:function(){return i},Up:function(){return n},hZ:function(){return a}});let i={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},a={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},87852:function(e,t,r){"use strict";r.d(t,{Bd:function(){return a},Zn:function(){return n},ez:function(){return i}});let i={gwei:9,wei:18},n={ether:-9,wei:9},a={ether:-18,gwei:-9}},34666:function(e,t,r){"use strict";r.d(t,{CI:function(){return E},FM:function(){return p},Gy:function(){return _},KY:function(){return w},M4:function(){return d},MX:function(){return v},S4:function(){return y},SM:function(){return x},cO:function(){return s},dh:function(){return C},fM:function(){return o},fs:function(){return f},gr:function(){return u},hn:function(){return S},lC:function(){return g},mv:function(){return b},wM:function(){return k},wb:function(){return l},xB:function(){return c},xL:function(){return m},yP:function(){return h}});var i=r(17818),n=r(37809),a=r(50628);class o extends a.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e,name:"AbiConstructorNotFoundError"})}}class s extends a.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e,name:"AbiConstructorParamsNotFoundError"})}}class c extends a.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`],name:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class l extends a.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.',{name:"AbiDecodingZeroDataError"})}}class u extends a.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,{name:"AbiEncodingArrayLengthMismatchError"})}}class d extends a.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`,{name:"AbiEncodingBytesSizeMismatchError"})}}class f extends a.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,{name:"AbiEncodingLengthMismatchError"})}}class h extends a.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t,name:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends a.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e,name:"AbiEventSignatureEmptyTopicsError"})}}class g extends a.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t,name:"AbiEventSignatureNotFoundError"})}}class b extends a.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t,name:"AbiEventNotFoundError"})}}class m extends a.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t,name:"AbiFunctionNotFoundError"})}}class v extends a.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t,name:"AbiFunctionOutputsNotFoundError"})}}class y extends a.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,i.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,i.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."],name:"AbiItemAmbiguityError"})}}class w extends a.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`,{name:"BytesSizeMismatchError"})}}class x extends a.G{constructor({abiItem:e,data:t,params:r,size:n}){super(`Data size of ${n} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,i.h)(r,{includeName:!0})})`,`Data:   ${t} (${n} bytes)`],name:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=n}}class _ extends a.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,i.t)(e,{includeName:!0})}".`,{name:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class C extends a.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t,name:"InvalidAbiEncodingType"})}}class E extends a.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t,name:"InvalidAbiDecodingType"})}}class S extends a.G{constructor(e){super(`Value "${e}" is not a valid array.`,{name:"InvalidArrayError"})}}class k extends a.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,{name:"InvalidDefinitionTypeError"})}}},52602:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});var i=r(50628);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}},50628:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});let i="2.21.5",n={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:r})=>t?`${e??"https://viem.sh"}${t}${r?`#${r}`:""}`:void 0,version:i};class a extends Error{constructor(e,t={}){let r=t.cause instanceof a?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof a&&t.cause.docsPath||t.docsPath,s=n.getDocsUrl?.({...t,docsPath:o});super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...s?[`Docs: ${s}`]:[],...r?[`Details: ${r}`]:[],...n.version?[`Version: ${n.version}`]:[]].join("\n"),t.cause?{cause:t.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.name=t.name??this.name,this.shortMessage=e,this.version=i}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},23356:function(e,t,r){"use strict";r.d(t,{Bk:function(){return o},Yl:function(){return a},mm:function(){return n},pZ:function(){return s}});var i=r(50628);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]],name:"ChainDoesNotSupportContract"})}}class a extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`],name:"ChainMismatchError"})}}class o extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",{name:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client.",{name:"ClientChainNotConfiguredError"})}}},17803:function(e,t,r){"use strict";r.d(t,{cg:function(){return m},uq:function(){return v},Lu:function(){return y},Dk:function(){return w},Mo:function(){return x},VQ:function(){return _}});var i=r(28854),n=r(58094),a=r(54156),o=r(17818),s=r(30728);function c({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var l=r(8710),u=r(68520),d=r(38733),f=r(34666),h=r(50628),p=r(79739),g=r(27565),b=r(77319);class m extends h.G{constructor(e,{account:t,docsPath:r,chain:n,data:a,gas:o,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:f,to:h,value:b,stateOverride:m}){let v=t?(0,i.T)(t):void 0,y=(0,g.xr)({from:v?.address,to:h,value:void 0!==b&&`${(0,u.d)(b)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:o,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,nonce:f});m&&(y+=`
${(0,p.Bj)(m)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean),name:"CallExecutionError"}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}}class v extends h.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:a,sender:s}){let u=(0,l.mE)({abi:t,args:r,name:a}),d=u?c({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,f=u?(0,o.t)(u,{includeName:!0}):void 0,h=(0,g.xr)({address:i&&(0,b.C)(i),function:f,args:d&&"()"!==d&&`${[...Array(a?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],h&&"Contract Call:",h].filter(Boolean),name:"ContractFunctionExecutionError"}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=a,this.sender=s}}class y extends h.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,l,u,d,h;if(t&&"0x"!==t)try{let{abiItem:r,errorName:i,args:s}=h=(0,a.p)({abi:e,data:t});if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,o.t)(r,{includeName:!0}):void 0,t=r&&s?c({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;l=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof f.yP&&(d=s.signature,l=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:l,name:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=h,this.reason=u,this.signature=d}}class w extends h.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."],name:"ContractFunctionZeroDataError"})}}class x extends h.G{constructor({factory:e}){super(`Deployment for counterfactual contract call failed${e?` for factory "${e}".`:""}`,{metaMessages:["Please ensure:","- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).","- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],name:"CounterfactualDeploymentFailedError"})}}class _ extends h.G{constructor({data:e,message:t}){super(t||"",{name:"RawContractError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},75272:function(e,t,r){"use strict";r.d(t,{KD:function(){return o},T_:function(){return n},lQ:function(){return a}});var i=r(50628);class n extends i.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class a extends i.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,{name:"PositionOutOfBoundsError"})}}class o extends i.G{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,{name:"RecursiveReadLimitExceededError"})}}},13654:function(e,t,r){"use strict";r.d(t,{$s:function(){return a},W_:function(){return o},mV:function(){return n}});var i=r(50628);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`,{name:"SliceOffsetOutOfBoundsError"})}}class a extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,{name:"SizeExceedsPaddingSizeError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,{name:"InvalidBytesLengthError"})}}},36055:function(e,t,r){"use strict";r.d(t,{J5:function(){return n},M6:function(){return o},yr:function(){return a}});var i=r(50628);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`,{name:"IntegerOutOfRangeError"})}}class a extends i.G{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,{name:"InvalidBytesBooleanError"})}}class o extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}},92874:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return o},M_:function(){return a},WF:function(){return f},ZI:function(){return c},cj:function(){return b},cs:function(){return g},dR:function(){return h},pZ:function(){return p},se:function(){return u},vU:function(){return l}});var i=r(38733),n=r(50628);class a extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class o extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e,name:"FeeCapTooLowError"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e,name:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e,name:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e,name:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/});class f extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e,name:"IntrinsicGasTooHighError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class h extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e,name:"IntrinsicGasTooLowError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e,name:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class b extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e,name:"UnknownNodeError"})}}},37013:function(e,t,r){"use strict";r.d(t,{Gg:function(){return o},W5:function(){return c},bs:function(){return s}});var i=r(30728),n=r(50628),a=r(77319);class o extends n.G{constructor({body:e,cause:t,details:r,headers:n,status:o,url:s}){super("HTTP request failed.",{cause:t,details:r,metaMessages:[o&&`Status: ${o}`,`URL: ${(0,a.G)(s)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=o,this.url=s}}class s extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,a.G)(r)}`,`Request body: ${(0,i.P)(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,a.G)(t)}`,`Request body: ${(0,i.P)(e)}`],name:"TimeoutError"})}}},49145:function(e,t,r){"use strict";r.d(t,{B:function(){return c},GD:function(){return v},I0:function(){return C},KB:function(){return g},LX:function(){return l},Og:function(){return h},PE:function(){return w},Pv:function(){return m},Ts:function(){return x},XS:function(){return d},ab:function(){return y},gS:function(){return b},ir:function(){return S},nY:function(){return u},pT:function(){return p},s7:function(){return s},u5:function(){return _},x3:function(){return E},yR:function(){return f}});var i=r(50628),n=r(37013);class a extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,name:a,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages,name:a||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=a||e.name,this.code=e instanceof n.bs?e.code:t??-1}}class o extends a{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends a{constructor(e){super(e,{code:s.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class c extends a{constructor(e){super(e,{code:c.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class l extends a{constructor(e,{method:t}={}){super(e,{code:l.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends a{constructor(e){super(e,{code:u.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends a{constructor(e){super(e,{code:d.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class f extends a{constructor(e){super(e,{code:f.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class h extends a{constructor(e){super(e,{code:h.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends a{constructor(e){super(e,{code:p.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends a{constructor(e){super(e,{code:g.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class b extends a{constructor(e,{method:t}={}){super(e,{code:b.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not implemented.`})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class m extends a{constructor(e){super(e,{code:m.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class v extends a{constructor(e){super(e,{code:v.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends o{constructor(e){super(e,{code:y.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class w extends o{constructor(e){super(e,{code:w.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends o{constructor(e,{method:t}={}){super(e,{code:x.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class _ extends o{constructor(e){super(e,{code:_.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class C extends o{constructor(e){super(e,{code:C.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class E extends o{constructor(e){super(e,{code:E.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends a{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}},79739:function(e,t,r){"use strict";r.d(t,{Bj:function(){return s},Nc:function(){return n},Z8:function(){return a}});var i=r(50628);class n extends i.G{constructor({address:e}){super(`State for account "${e}" is set multiple times.`,{name:"AccountStateConflictError"})}}class a extends i.G{constructor(){super("state and stateDiff are set on the same account.",{name:"StateAssignmentConflictError"})}}function o(e){return e.reduce((e,{slot:t,value:r})=>`${e}        ${t}: ${r}
`,"")}function s(e){return e.reduce((e,{address:t,...r})=>{let i=`${e}    ${t}:
`;return r.nonce&&(i+=`      nonce: ${r.nonce}
`),r.balance&&(i+=`      balance: ${r.balance}
`),r.code&&(i+=`      code: ${r.code}