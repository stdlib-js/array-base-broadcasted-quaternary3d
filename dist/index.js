"use strict";var rr=function(t,v){return function(){return v||t((v={exports:{}}).exports,v),v.exports}};var p=rr(function(tr,$){
var n=require('@stdlib/array-base-broadcast-array/dist');function ar(t,v,h){var g,l,B,C,D,E,F,G,H,I,J,K,o,x,w,i,e,u,z,f,s,c,m,y,j,k,q,S,b,A,L,M,N,O,P,Q,R,T,U,V,d,r,a,W,X,Y,Z,_;if(d=v[4],o=d[2],x=d[1],w=d[0],!(o<=0||x<=0||w<=0))for(a=n(t[0],v[0],d),W=a.data,r=a.strides,g=r[2],l=r[1],B=r[0],a=n(t[1],v[1],d),X=a.data,r=a.strides,C=r[2],D=r[1],E=r[0],a=n(t[2],v[2],d),Y=a.data,r=a.strides,F=r[2],G=r[1],H=r[0],a=n(t[3],v[3],d),Z=a.data,r=a.strides,I=r[2],J=r[1],K=r[0],_=t[4],s=0,y=0,q=0,A=0,u=0;u<w;u++){for(f=0,m=0,k=0,b=0,M=W[s],O=X[y],Q=Y[q],T=Z[A],V=_[u],e=0;e<x;e++){for(z=0,c=0,j=0,S=0,L=M[f],N=O[m],P=Q[k],R=T[b],U=V[e],i=0;i<o;i++)U[i]=h(L[z],N[c],P[j],R[S]),z+=g,c+=C,j+=F,S+=I;f+=l,m+=D,k+=G,b+=J}s+=B,y+=E,q+=H,A+=K}}$.exports=ar
});var vr=p();module.exports=vr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
