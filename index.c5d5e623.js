const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};l();const d=6,u=1,[f,a,m]=document.querySelectorAll(".dice-button"),i=r=>{const o=p(u,d),n=document.querySelector(`#dice${r} img`);n.src=`dice/dice-${o}.png`},p=(r,o)=>Math.floor(Math.random()*(o-r+1)+r);f.addEventListener("click",()=>{i(1)});a.addEventListener("click",()=>{i(2)});m.addEventListener("click",()=>{i(3)});
