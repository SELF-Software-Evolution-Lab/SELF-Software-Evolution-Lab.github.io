(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{260:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return c}));t(38),t(177);var A=t(0),r=t.n(A),n=t(250),i=t(267),s=t(273),d=t(122),l=t(270),o=(t(254),t(274));a.default=function(e){var a=e.data;return r.a.createElement(A.Fragment,null,r.a.createElement(n.a,null),r.a.createElement(d.a,{className:"mt-3"},a.allMembersJson.edges.find((function(e){return"professor"===e.node.category}))?r.a.createElement(A.Fragment,null,r.a.createElement("h1",null,"Professors"),r.a.createElement(l.a,null,a.allMembersJson.edges.map((function(e){return"professor"===e.node.category?r.a.createElement(i.a,{key:e.node.name,node:e.node}):""})))):"",a.allMembersJson.edges.find((function(e){return"phd"===e.node.category}))?r.a.createElement(A.Fragment,null,r.a.createElement("h1",null,"PHD Candidates"),r.a.createElement(o.a,{variant:"flush"},a.allMembersJson.edges.map((function(e){return"phd"===e.node.category?r.a.createElement(s.a,{key:e.node.name,node:e.node}):""})))):"",a.allMembersJson.edges.find((function(e){return"msc"===e.node.category}))?r.a.createElement(A.Fragment,null,r.a.createElement("h1",null,"Master's Degree Candidates"),r.a.createElement(o.a,{variant:"flush"},a.allMembersJson.edges.map((function(e){return"msc"===e.node.category?r.a.createElement(s.a,{key:e.node.name,node:e.node}):""})))):"",a.allMembersJson.edges.find((function(e){return"bsc"===e.node.category}))?r.a.createElement(A.Fragment,null,r.a.createElement("h1",null,"Bachelor's Degree Candidates"),r.a.createElement(o.a,{variant:"flush"},a.allMembersJson.edges.map((function(e){return"bsc"===e.node.category?r.a.createElement(s.a,{key:e.node.name,node:e.node}):""})))):""))};var c="1404968209"},266:function(e,a,t){"use strict";t(13),t(11),t(8),t(98),t(178),t(179);var A=t(12);a.__esModule=!0,a.default=void 0;var r,n=A(t(6)),i=A(t(40)),s=A(t(99)),d=A(t(37)),l=A(t(0)),o=A(t(39)),c=function(e){var a=(0,d.default)({},e),t=a.resolutions,A=a.sizes,r=a.critical;return t&&(a.fixed=t,delete a.resolutions),A&&(a.fluid=A,delete a.sizes),r&&(a.loading="eager"),a.fluid&&(a.fluid=B([].concat(a.fluid))),a.fixed&&(a.fixed=B([].concat(a.fixed))),a},u=function(e){var a=e.fluid,t=e.fixed;return(a&&a[0]||t&&t[0]).src},f=Object.create({}),g=function(e){var a=c(e),t=u(a);return f[t]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,E=m&&window.IntersectionObserver,b=new WeakMap;function h(e){return e.map((function(e){var a=e.src,t=e.srcSet,A=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:a},A&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:A,sizes:n}),l.default.createElement("source",{media:r,srcSet:t,sizes:n}))}))}function B(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function j(e){return e.map((function(e){var a=e.src,t=e.media,A=e.tracedSVG;return l.default.createElement("source",{key:a,media:t,srcSet:A})}))}function S(e){return e.map((function(e){var a=e.src,t=e.media,A=e.base64;return l.default.createElement("source",{key:a,media:t,srcSet:A})}))}function w(e,a){var t=e.srcSet,A=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(a?A:t)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var y=function(e,a){var t=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var a=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),a())}}))}),{rootMargin:"200px"})),r);return t&&(t.observe(e),b.set(e,a)),function(){t.unobserve(e),b.delete(e)}},Q=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",A=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+l+i+s+t+A+a+n+r+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var a=e.src,t=e.imageVariants,A=e.generateSources,r=e.spreadProps,n=l.default.createElement(C,(0,d.default)({src:a},r));return t.length>1?l.default.createElement("picture",null,A(t),n):n},C=l.default.forwardRef((function(e,a){var t=e.sizes,A=e.srcSet,r=e.src,n=e.style,i=e.onLoad,o=e.onError,c=e.onClick,u=e.loading,f=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:t,srcSet:A,src:r},g,{onLoad:i,onError:o,onClick:c,ref:a,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:o.default.object,onError:o.default.func,onClick:o.default.func,onLoad:o.default.func};var N=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=m&&g(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!p&&E&&!t.isCritical&&!t.seenBefore;var A=t.isCritical||m&&(p||!t.useIOSupport);return t.state={isVisible:A,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=l.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)(t)),t.handleRef=t.handleRef.bind((0,n.default)(t)),t}(0,i.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,(function(){var e=g(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=c(e),t=u(a),f[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=c(this.props),a=e.title,t=e.alt,A=e.className,r=e.style,n=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,o=e.placeholderStyle,u=void 0===o?{}:o,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,B=e.itemProp,w=e.loading,y=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,v=(0,d.default)({opacity:N?1:0,transition:R?"opacity "+E+"ms":"none"},s),Y="boolean"==typeof m?"lightgray":m,k={transitionDelay:E+"ms"},x=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&k,{},s,{},u),G={title:a,alt:this.state.isVisible?"":t,style:x,className:f,itemProp:B};if(g){var M=g,O=M[0];return l.default.createElement(b,{className:(A||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),Y&&l.default.createElement(b,{title:a,style:(0,d.default)({backgroundColor:Y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&k)}),O.base64&&l.default.createElement(I,{src:O.base64,spreadProps:G,imageVariants:M,generateSources:S}),O.tracedSVG&&l.default.createElement(I,{src:O.tracedSVG,spreadProps:G,imageVariants:M,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,h(M),l.default.createElement(C,{alt:t,title:a,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:B,loading:w,draggable:y})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Q((0,d.default)({alt:t,title:a,loading:w},O,{imageVariants:M}))}}))}if(p){var P=p,D=P[0],z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete z.display,l.default.createElement(b,{className:(A||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},Y&&l.default.createElement(b,{title:a,style:(0,d.default)({backgroundColor:Y,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},R&&k)}),D.base64&&l.default.createElement(I,{src:D.base64,spreadProps:G,imageVariants:P,generateSources:S}),D.tracedSVG&&l.default.createElement(I,{src:D.tracedSVG,spreadProps:G,imageVariants:P,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,h(P),l.default.createElement(C,{alt:t,title:a,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:B,loading:w,draggable:y})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Q((0,d.default)({alt:t,title:a,loading:w},D,{imageVariants:P}))}}))}return null},a}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),v=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string});N.propTypes={resolutions:R,sizes:v,fixed:o.default.oneOfType([R,o.default.arrayOf(R)]),fluid:o.default.oneOfType([v,o.default.arrayOf(v)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onClick:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var Y=N;a.default=Y},267:function(e,a,t){"use strict";t(38),t(177);var A=t(268),r=t(0),n=t.n(r),i=t(251),s=t(252),d=t(266),l=t.n(d);a.a=function(e){return n.a.createElement(s.a,{query:"237998829",render:function(a){return n.a.createElement(i.a,{className:"border-0 shadow mb-4"},a.allFile.edges.find((function(a){return a.node.childImageSharp.fluid.originalName===e.node.image}))?n.a.createElement(l.a,{fluid:a.allFile.edges.find((function(a){return a.node.childImageSharp.fluid.originalName===e.node.image})).node.childImageSharp.fluid}):n.a.createElement(i.a.Img,{variant:"top",src:"https://via.placeholder.com/350x350"}),n.a.createElement(i.a.Body,null,n.a.createElement(i.a.Title,{as:"h4",className:"text-center"},n.a.createElement("a",{href:e.node.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",null,e.node.name))),n.a.createElement(i.a.Text,{className:"text-center"},e.node.subCategory," ",e.node.subCategory&&"inactive"===e.node.state&&n.a.createElement("br",null),"inactive"===e.node.state?n.a.createElement("small",{className:"text-muted"},"past member"):"")))},data:A})}},268:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABcBAQADAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAbc5rFGYjNyWWGb/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIREiEy/9oACAEBAAEFAtFmi+ucWrJeiL5//8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQMBAT8Bg//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8B61Ff/8QAGRAAAQUAAAAAAAAAAAAAAAAAABARIDEy/9oACAEBAAY/AltjUf/EABwQAAICAgMAAAAAAAAAAAAAAAABITEQEUFhsf/aAAgBAQABPyFjfn3BRbssaLTR0ZBjY1LJ/9oADAMBAAIAAwAAABBo18P/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAEDAQE/EAhuh3//xAAYEQEBAAMAAAAAAAAAAAAAAAAAAREhMf/aAAgBAgEBPxC0zcI3X//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWEQUeH/2gAIAQEAAT8QKt46hsAHFW8SxB5M13iBiEYC8nv53FXaI6iRjoIIGBRwn//Z","aspectRatio":1,"src":"/static/1420c17bb93d20ad92904a932c58ea9f/d278e/s200_giacomo.barbieri.jpg","srcSet":"/static/1420c17bb93d20ad92904a932c58ea9f/d278e/s200_giacomo.barbieri.jpg 200w","sizes":"(max-width: 200px) 100vw, 200px","originalName":"s200_giacomo.barbieri.jpg"}}}},{"node":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAb80/ZdJsdWStIS//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEgARITH/2gAIAQEAAQUCXpNt13kj0EjKFtgRXkeFEQef/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8BI//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhEhEBJhcf/aAAgBAQAGPwJETgamOhFzQZ9VLVwpUMf/xAAdEAEAAwABBQAAAAAAAAAAAAABABEhMUFxgZHB/9oACAEBAAE/IXUHNMXKKBnUNlybW/GCj51ueYUDVOwHcd5GB7GOqHHaf//aAAwDAQACAAMAAAAQeDi+/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/EByE/8QAFhEBAQEAAAAAAAAAAAAAAAAAECFB/9oACAECAQE/EKMP/8QAHRABAQACAwADAAAAAAAAAAAAAREAITFBUaGx0f/aAAgBAQABPxBEQXEOYXHMAUYEXmTrKIEmrc3EU62uxP3j1N3AfoyyoUR9yqgCGSGp5i/kqNG4hwBoI18Z/9k=","aspectRatio":1,"src":"/static/5dda607e9240f6e4f132cfee6be57339/32ee9/n.cardozo2.jpg","srcSet":"/static/5dda607e9240f6e4f132cfee6be57339/d278e/n.cardozo2.jpg 200w,\\n/static/5dda607e9240f6e4f132cfee6be57339/8539d/n.cardozo2.jpg 400w,\\n/static/5dda607e9240f6e4f132cfee6be57339/32ee9/n.cardozo2.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px","originalName":"n.cardozo2.jpg"}}}},{"node":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqUlEQVQ4yxWTSVOaBwCGv3/RXtImWgV1RFyIxIRQTEzDpgEBDYJA2GTfZZMdZJX948MPWWQHNSFgojE2kzRNDu1MZjrTmc700N7annroL6g5P/PMM+/hBepgtApGB41COh5q92PVbvDoGXT+fj+ZDISjzlIj8abf/uO3X/7795+//vy9WAjnIG/rxJtJmfOZPaB3mDtvFr4/roLJaK0baA+ScMF18SGfywUFXPaWhB33mF604Fcd+LxbKcChdNZdqm5HI9psIgacNQqvWweX3cqVXG95O/09ELIeDYIs5vLIta+RN4ZGh0YUAvbrzn6/UQKT9kzK3miawyEVlEsDr5rwWQO+PKrkM/FS2Vptu4pll93MWb9/T8mgiChLU6OjyKEbLSj65qSeSLuje7buaSiSdYBX5fN2sX8InjULqehuIr9drJuTGcsG47t9kzyll0YVPOZ9/FdffGmUC3/oNXJQIJdzhzNb/pipkE0Ar1oHg2rusltK74VDeXO9bU5ld4Ts5ZxO8iJkLpllbj7jzgSCSSWetYoZ0B+O2iIZmSOkyacSwPte7bQKnTXhdCzsg+zVI5srqLdJOb/Wsx8L4Yu440PKaWUSmRRiez+1X4zFC0EvbPQkd6oHeeDDoPmyBvXL2WRoNwhaCx2rw6tkEb/9BO++jTif2lTv4jYre4WAw3XgdC4Xtjh0JodMqxNrZALg7XHlpJB4WYegRAxsZisX6Xxlb5GAO/Iaf074BzZNz6Mm38Zg59Cb61TGypJQyOQKWRz+GnudAbw/7fRqcK9+kE/Fklezw063zUAmEixC1kfQfexW59W8J6xlu0UvFonVekkiH7TnXK6E02hUAT6rwSgXq0U84WPmYyaZQrpHun9HpOS29hw/Qb5BwNixyzwqic1mUyi1Fue2P+zRO3QGu0GyxQNodKJayjUpJFaT3mK30phswhINzub/Pi19gv0fM853YT3ssuIp/KUlKo/PNFh1cg3NuL2xyd0AiNTFjXWKQszb9TikYvn1a8i5u0zrTvISTv24H3kLRcpu+7rQPk3YGLo+MTaGpq+uimUrOu1dDvchoNEZtUpRxG937sjn5wnDw1OPRXYs3Uzlu3yxEl3kw9JtN+nWReqTibFZJGJuBn17k08RbeE3+TMAmC/1n3ZqhwcqjeIzm8X7k3WRGZqnWfn6eCB7smnI4lgOMkM2MYaZRC0gEbP0VQxfjFljo4BkIq7VKBVK6fKjNQRi9jZ+JV25MASb4w90Wg/sSXbJT/yCbZDEkI8jMZOT2OGhaTIVJ5RhiMtzQKVS3vXv9I5rJNLq8BBKa3SnDl+zNCBHlybyvFRRkCb2ZUo9GteImrw1Pj73zfD0XTxOpLhHpE0CR43CswZUyATnby4iEHO7kSzXAFKlcak5TeG7LZHWdrBGFAQsPhiFuoVATI+OzKDRN1UG9soaBkhE5HBGZFCvTU/j0VMLtE3Lhi4dSLeWeS66JJguv6wdX9AkAYE6gEYtjI5cHRSNRM5wBCQmDwt43HSbhc5eo6OmcDPoBexDCVkYyhSfc0ylB/yQO3Ws95f5usgSQzU+hhkdQX/2R2ZIjwgsPvZ/Iuwm4gI2MMsAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/393b1283ba4ec706a60f94fc5d7544b1/af144/RubbyCasallas.png","srcSet":"/static/393b1283ba4ec706a60f94fc5d7544b1/7c0ed/RubbyCasallas.png 200w,\\n/static/393b1283ba4ec706a60f94fc5d7544b1/647de/RubbyCasallas.png 400w,\\n/static/393b1283ba4ec706a60f94fc5d7544b1/af144/RubbyCasallas.png 800w","sizes":"(max-width: 800px) 100vw, 800px","originalName":"RubbyCasallas.png"}}}},{"node":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAEzlAABM5QF1zvCVAAAFTElEQVQ4yyWUe1cT9h3G8xa2brXFKEiAFEFFCAQCgXARSy5CMQlNIFcC5J4QyJUACQkRMKBtxWu71U2g1qq1Cm7aVltnz+nO2Tk7+2dvYe/isx/bH8/5/fX7nOd7eb6SpaQe/5SGaZeGj00duG0aRi60oNM2MWkfZMphJBY0458ZY8LSRzptIBQaJhE34nSdIxYdZj1ey1KmE2+wB0l0ehDfZC+zvvPi8yDjFjUT5j48zh4sxi60g53odQP0DfTQqVIyYugmnzewUTaxmLvAwryK3Gw9NpsKo0mJZMbVg82qwmpS4XJ043SrcDpV+DznmRgboPlsM63N7eg0GppONSGrlqPXq8kXhti8pedm+SzFqBR/qA+HUwDddjUeRy9Tkz2E/Woc461YzS0kowb6u7s42ajg8Y1P+M/3XxE2G5AePUZN1UlmvH2Ur11kM6+glKwnnhoUZgQwnTtPaK4Xs01NPKNlPtHH4pyeRNCCVFqF32Hjzb3bvLpV5vWnBboaTyKtqKRf00Jp9QLrC0oKGSWZxXPYxtVIFko60qtabD4NRmcXDk+76Ise19gIR955l/tbq7y6uc7B1gpfpkPo205Td6KGRnkdgel+ykk5c94P8Ey143GfQ+Kd7Sd/2YAr1IvJ1kky000pa6ZDoaC+upIX20X+vXODN9sbfLM8x2eBCeSVldTX1hMW27GVkjHtbGDSrSYZ1yExWnqYDA5gcvczv2IkuzHKZtlBp1LJsaNS7i77+OlqkT+E/Ww6TWTMOmorq5C+X8XIh43CYTWpzDmCQS2ZlHAYTQwSS5+nUB4lUxwmtaJnKqRD1dJCyOfj1d0r/P1GkZ1EiMn+DhpPHEN2vIqKI1LUbXXkYnKS2SH8wV4urWmQfHI7ydb1Oa4dvp9GuXLVjnZIyVZpje+fPeH1wXfcL85SdH1EYsbJoFpFdcVRjr1/HE17I/lEK/6wkdTSGPk1K5J8yUWh5CQ678AyrhfrIBJgd/C3X97y69uf+fH5Po927rJz57rQNpeXM5h0Wo789l2aG+vEmom0ZJMsrl0iuVISix0y4J7WiemaGTVpWVhMsRSJsGN3s39/jx9ePOfZg695vLfHl9ufcfDwARuXVvn9b36HXFaFw2YgW1xiLpMimowjsbi1DI9psLqGKJc3Wb9UIu2d5mVdM3uKbvZ37/Hi5XOePHrI7t4u3373LQsOJ52KVsbNeuKRj8kuJMgtxymspJFk1wLMZqdIZKNsrBZIxWOsRIL8o7WPf1W38E17Hze8fta9M9wOhrhpdXL1xCnmJ6wEfB4ikRmS6ZgY6haLxQKSm1/cYffRY/74p3vk0gkSiRhr4QBvGjr4Ud7KQeUpHr5Xy76sifvHG7j8ThW335OzaBjB7nYSm5sXwDDRsJVEKoIkt3GFeK5ELl9gdSkjztIsq0EvP9W38UNNMwe1zbyQK3hQfZo/VzawI9x9UVFPtKsXx6STQCAgrk6WeMxOIjSA5Otn+2xd26aQz4nIRYkLYCno49eTHfyzvp1XdQr+IsCHeikTqm3hcVUTCWU3E04bE1YL8USQfC5DetaI5PNbmyznlynmlsQh9RIRiVj0uHn9gZJfhPYF6GnNWZ7IDtXEA6E70gYibZ3YBNBuNTPj0jMftZMMdCApl+ZIJSKUBNQvSnBNWAhNudhtaONneRtPRclPBeyp7P/Qr2RnuC5K9naoGbOYsZiN+N3DhGYMRKaaBHA9T3m9RDIWxXJxhOGhDwmEvVzrGeBtjeJ//fvrYS8PgdVN7FWfYbtCjqerm5GLHzE6PIprvB+76QyTltP8F0XbZivxE+jIAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/dfb65032a924a82bdde6444ae5b10d43/3fa08/kj.garces971.png","srcSet":"/static/dfb65032a924a82bdde6444ae5b10d43/7c0ed/kj.garces971.png 200w,\\n/static/dfb65032a924a82bdde6444ae5b10d43/647de/kj.garces971.png 400w,\\n/static/dfb65032a924a82bdde6444ae5b10d43/3fa08/kj.garces971.png 500w","sizes":"(max-width: 500px) 100vw, 500px","originalName":"kj.garces971.png"}}}},{"node":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABwupbKKRz/8QAGhABAQACAwAAAAAAAAAAAAAAAQACEgMRIf/aAAgBAQABBQLPkdt2X1JxLq//xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAIAQMBAT8BuK//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8BlEo//8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAEDFR/9oACAEBAAY/AiRnJiCirK//xAAaEAACAwEBAAAAAAAAAAAAAAABEQAhMYGR/9oACAEBAAE/ISAiGvWxZtuhwZoK7AWFEXomIME//9oADAMBAAIAAwAAABDE3//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAwEBPxB4D//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/EKF//8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFx0f/aAAgBAQABPxBjhrJHOFPcCl7CrX5tjN7ry5lWhTsrcckKCveRltABzP/Z","aspectRatio":1.7645965042766827,"src":"/static/9a02116f916ef643b39d50e7d65022c1/bc3a8/grupo.jpg","srcSet":"/static/9a02116f916ef643b39d50e7d65022c1/d278e/grupo.jpg 200w,\\n/static/9a02116f916ef643b39d50e7d65022c1/8539d/grupo.jpg 400w,\\n/static/9a02116f916ef643b39d50e7d65022c1/bc3a8/grupo.jpg 800w,\\n/static/9a02116f916ef643b39d50e7d65022c1/81ef8/grupo.jpg 1200w,\\n/static/9a02116f916ef643b39d50e7d65022c1/989b1/grupo.jpg 1600w,\\n/static/9a02116f916ef643b39d50e7d65022c1/d9dfa/grupo.jpg 4745w","sizes":"(max-width: 800px) 100vw, 800px","originalName":"grupo.jpg"}}}}]}}}')},269:function(e,a,t){"use strict";var A=t(1),r=t(2),n=t(3),i=t.n(n),s=t(0),d=t.n(s),l=t(124),o=t(17),c=t(4),u=d.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,u=e.disabled,f=e.className,g=e.variant,p=e.action,m=e.as,E=e.eventKey,b=e.onClick,h=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(c.b)(t,"list-group-item");var B=Object(s.useCallback)((function(e){if(u)return e.preventDefault(),void e.stopPropagation();b&&b(e)}),[u,b]);return d.a.createElement(l.a,Object(A.a)({ref:a},h,{eventKey:Object(o.b)(E,h.href),as:m||(p?h.href?"a":"button":"div"),onClick:B,className:i()(f,t,n&&"active",u&&"disabled",g&&t+"-"+g,p&&t+"-action")}))}));u.defaultProps={variant:null,active:!1,disabled:!1},u.displayName="ListGroupItem",a.a=u},270:function(e,a,t){"use strict";var A=t(24);a.a=Object(A.a)("card-deck")},273:function(e,a,t){"use strict";t(38);var A=t(0),r=t.n(A),n=t(269);a.a=function(e){return r.a.createElement(n.a,null,r.a.createElement("h6",null,e.node.name),"  ",e.node.subCategory&&"inactive"===e.node.state&&r.a.createElement("br",null),"inactive"===e.node.state?r.a.createElement("small",{className:"text-muted"},"past member"):"")}},274:function(e,a,t){"use strict";var A=t(1),r=t(2),n=t(3),i=t.n(n),s=t(0),d=t.n(s),l=t(64),o=t(4),c=t(125),u=t(269),f=d.a.forwardRef((function(e,a){var t=Object(l.a)(e,{activeKey:"onSelect"}),n=t.className,s=t.bsPrefix,u=t.variant,f=t.as,g=void 0===f?"div":f,p=Object(r.a)(t,["className","bsPrefix","variant","as"]);return s=Object(o.b)(s,"list-group"),d.a.createElement(c.a,Object(A.a)({ref:a},p,{as:g,className:i()(n,s,u&&s+"-"+u)}))}));f.defaultProps={variant:null},f.displayName="ListGroup",f.Item=u.a,a.a=f}}]);
//# sourceMappingURL=component---src-pages-past-members-js-fea6486cf49222531504.js.map