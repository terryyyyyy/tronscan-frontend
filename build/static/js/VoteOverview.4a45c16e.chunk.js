(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1721:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StickyContainer=t.Sticky=void 0;var a=s(n(1808)),r=s(n(1809));function s(e){return e&&e.__esModule?e:{default:e}}t.Sticky=a.default,t.StickyContainer=r.default,t.default=a.default},1808:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),s=l(r),o=l(n(17)),c=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={isSticky:!1,wasSticky:!1,style:{}},a.handleContainerEvent=function(e){var t=e.distanceFromTop,n=e.distanceFromBottom,r=e.eventSource,s=a.context.getParent(),o=!1;a.props.relative&&(o=r!==s,t=-(r.scrollTop+r.offsetTop)+a.placeholder.offsetTop);var c=a.placeholder.getBoundingClientRect(),l=a.content.getBoundingClientRect().height,i=n-a.props.bottomOffset-l,u=!!a.state.isSticky,d=o?u:t<=-a.props.topOffset&&n>-a.props.bottomOffset;n=(a.props.relative?s.scrollHeight-s.scrollTop:n)-l;var m=d?{position:"fixed",top:i>0?a.props.relative?s.offsetTop-s.offsetParent.scrollTop:0:i,left:c.left,width:c.width}:{};a.props.disableHardwareAcceleration||(m.transform="translateZ(0)"),a.setState({isSticky:d,wasSticky:u,distanceFromTop:t,distanceFromBottom:n,calculatedHeight:l,style:m})},i(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var e=this,t=s.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(t){e.content=o.default.findDOMNode(t)}});return s.default.createElement("div",null,s.default.createElement("div",{ref:function(t){return e.placeholder=t}}),t)}}]),t}();u.propTypes={topOffset:c.default.number,bottomOffset:c.default.number,relative:c.default.bool,children:c.default.func.isRequired},u.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1},u.contextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=u},1809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o=i(s),c=i(n(1)),l=i(n(1810));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],a.subscribers=[],a.rafHandle=null,a.subscribe=function(e){a.subscribers=a.subscribers.concat(e)},a.unsubscribe=function(e){a.subscribers=a.subscribers.filter(function(t){return t!==e})},a.notifySubscribers=function(e){if(!a.framePending){var t=e.currentTarget;a.rafHandle=(0,l.default)(function(){a.framePending=!1;var e=a.node.getBoundingClientRect(),n=e.top,r=e.bottom;a.subscribers.forEach(function(e){return e({distanceFromTop:n,distanceFromBottom:r,eventSource:t===window?document.body:a.node})})}),a.framePending=!0}},a.getParent=function(){return a.node},u(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.PureComponent),r(t,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var e=this;this.events.forEach(function(t){return window.addEventListener(t,e.notifySubscribers)})}},{key:"componentWillUnmount",value:function(){var e=this;this.rafHandle&&(l.default.cancel(this.rafHandle),this.rafHandle=null),this.events.forEach(function(t){return window.removeEventListener(t,e.notifySubscribers)})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",a({},this.props,{ref:function(t){return e.node=t},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),t}();d.childContextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=d},1810:function(e,t,n){(function(t){for(var a=n(265),r="undefined"===typeof window?t:window,s=["moz","webkit"],o="AnimationFrame",c=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],i=0;!c&&i<s.length;i++)c=r[s[i]+"Request"+o],l=r[s[i]+"Cancel"+o]||r[s[i]+"CancelRequest"+o];if(!c||!l){var u=0,d=0,m=[];c=function(e){if(0===m.length){var t=a(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return m.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return c.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=c,e.cancelAnimationFrame=l}}).call(this,n(28))},2294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDifference=t.zeroPad=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=c(n(0)),o=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}var l=t.zeroPad=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return e;var n=String(e);return n.length>=t?n:("0".repeat(t)+n).slice(-1*t)},i=t.getTimeDifference=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.now,a=void 0===n?Date.now:n,r=t.precision,s=void 0===r?0:r,o=t.controlled,c=void 0!==o&&o,l="string"===typeof e?new Date(e):e,i=parseInt(1e3*(Math.max(0,c?l:l-a())/1e3).toFixed(Math.max(0,Math.min(20,s))),10),u=i/1e3;return{total:i,days:Math.floor(u/86400),hours:Math.floor(u/3600%24),minutes:Math.floor(u/60%60),seconds:Math.floor(u%60),milliseconds:Number((u%1*1e3).toFixed()),completed:i<=0}},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));d.call(n);var r=n.props,s=r.date,o=r.now,c=r.precision,l=r.controlled;return n.mounted=!1,n.state=a({},i(s,{now:o,precision:c,controlled:l})),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),r(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.controlled||(this.interval=setInterval(this.tick,this.props.intervalDelay))}},{key:"componentWillReceiveProps",value:function(e){var t=e.date,n=e.now,a=e.precision,r=e.controlled;this.setDeltaState(i(t,{now:n,precision:a,controlled:r}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.clearInterval()}},{key:"setDeltaState",value:function(e){!this.state.completed&&e.completed&&(this.clearInterval(),this.props.onComplete&&this.props.onComplete(e)),this.mounted&&this.setState(a({},e))}},{key:"getFormattedDelta",value:function(){var e=this.state,t=e.days,n=e.hours,a=this.state,r=a.minutes,s=a.seconds,o=this.props,c=o.daysInHours,i=o.zeroPadLength;return c?(n=l(n+24*t,i),t=null):n=l(n,Math.min(2,i)),{days:t,hours:n,minutes:l(r,Math.min(2,i)),seconds:l(s,Math.min(2,i))}}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearInterval(this.interval),delete this.interval})},{key:"render",value:function(){var e=this.getFormattedDelta();if(this.props.renderer)return this.props.renderer(a({},this.props,this.state,e));if(this.state.completed&&this.props.children){var t=a({},this.props,this.state,e);return delete t.children,s.default.cloneElement(this.props.children,{countdown:t})}var n=e.days,r=e.hours,o=e.minutes,c=e.seconds;return s.default.createElement("span",null,n,null!=n?":":"",r,":",o,":",c)}}]),t}(),d=function(){var e=this;this.tick=function(){var t=e.props,n=t.date,r=t.now,s=t.precision,o=t.controlled,c=t.onTick,l=i(n,{now:r,precision:s,controlled:o});e.setDeltaState(a({},l)),c&&l.total>0&&c(l)}};t.default=u,u.propTypes={date:o.default.oneOfType([o.default.instanceOf(Date),o.default.string,o.default.number]).isRequired,daysInHours:o.default.bool,zeroPadLength:o.default.number,controlled:o.default.bool,intervalDelay:o.default.number,precision:o.default.number,children:o.default.any,renderer:o.default.func,now:o.default.func,onTick:o.default.func,onComplete:o.default.func},u.defaultProps={daysInHours:!1,zeroPadLength:2,controlled:!1,intervalDelay:1e3,precision:0,children:null}},3122:function(e,t,n){var a=n(167),r=n(3123);e.exports=function(e,t){return e&&e.length?r(e,a(t,2)):0}},3123:function(e,t){e.exports=function(e,t){for(var n,a=-1,r=e.length;++a<r;){var s=t(e[a]);void 0!==s&&(n=void 0===n?s:n+s)}return n}},3124:function(e,t,n){var a=n(3125);e.exports=function(e){return a(e)&&e!=+e}},3125:function(e,t,n){var a=n(144),r=n(102),s="[object Number]";e.exports=function(e){return"number"==typeof e||r(e)&&a(e)==s}},3470:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return Q});var a,r,s=n(24),o=n(80),c=n.n(o),l=n(38),i=n.n(l),u=n(2),d=n.n(u),m=n(5),p=n(3122),f=n.n(p),h=n(3124),b=n.n(h),v=n(13),g=n(12),y=n(20),E=n(19),w=n(21),x=n(16),O=n(3),_=n(0),k=n.n(_),N=n(23),j=n(10),S=n(2294),C=n.n(S),T=n(1721),V=n(31),P=n(8),D=n(89),M=n(256),R=n(51),F=n.n(R),I=n(6),L=n(18),B=n(52),A=n(65),H=n(2740),W=n.n(H),z=n(25),U=n(369),q=n(311),K=n(64),J=(n(11),n(140));function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Z(e){var t=e.value,n=e.arrow,a=void 0!==n&&n;return t>0?k.a.createElement("span",{className:"text-success"},k.a.createElement("span",{className:"mr-1"},"+",t),a&&k.a.createElement("i",{className:"fa fa-arrow-up"})):t<0?k.a.createElement("span",{className:"text-danger"},k.a.createElement("span",{className:"mr-1"},t),a&&k.a.createElement("i",{className:"fa fa-arrow-down"})):k.a.createElement("span",null,"-")}var Q=(a=Object(V.connect)(function(e){return{account:e.app.account,tokenBalances:e.account.tokens,wallet:e.wallet,flags:e.app.flags,voteList:e.voting.voteList,voteTimer:e.voting.voteTimer,walletType:e.app.wallet,isRightText:e.app.isRightText}},{login:L.v,reloadWallet:B.c,loadVoteTimer:q.c}),Object(J.a)(r=Object(j.h)(r=Object(U.a)(r=a(r=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(y.a)(this,Object(E.a)(t).call(this))).setVote=function(t,n){var a=e.state.votes;""!==n&&(n=parseInt(n,10),(n=b()(n)?"":n)<0&&(n=0));var r=e.getVoteStatus().votesAvailable;n>(r+=a[t]||0)&&(n=r),a[t]=n,e.setState({votes:a})},e.getVoteStatus=function(){var t=e.props.wallet,n=e.state.votes,a=0;t.isOpen&&(a=t.current.frozenTrx/I.E);var r=f()(Object.values(n),function(e){return parseInt(e,10)||0}),s=a-r,o=0;return s>0?o=1:s<0&&(o=-1),0===a&&(o=-2),{trxBalance:a,votesSpend:r,votesAvailable:s,spendAll:r>0&&0===s,voteState:o,votePercentage:r/a*100}},e.enableVoting=function(){e.setState({votingEnabled:!0})},e.loadVoteList=Object(m.a)(d.a.mark(function t(){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getVotesList();case 2:n=t.sent,e.setState({votesList:n});case 4:case"end":return t.stop()}},t)})),e.loadVoteTimer=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.loadVoteTimer();case 1:case"end":return t.stop()}},t)})),e.loadVotes=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return 0===e.props.voteList.length&&e.setState({loading:!0}),t.next=4,e.loadVoteList();case 4:e.setState({loading:!1});case 5:case"end":return t.stop()}},t)})),e.loadCurrentVotes=function(){var t=Object(m.a)(d.a.mark(function t(n){var a,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getAccountVotes(n);case 2:a=t.sent,r=a.votes,e.setState({votes:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)})},e.notSignedIn=function(){e.setState({goSignedIn:!0})},e.resetVotes=function(){e.setState({votes:{}})},e.cancelVotes=function(){e.loadCurrentVotes(e.props.account.address),e.setState({votingEnabled:!1,searchCriteria:""})},e.hideModal=function(){e.setState({modal:null})},e.submitVotes=Object(m.a)(d.a.mark(function t(){var n,a,r,s,o,c,l,i,u,m,p,f,h,b,v,g,y,E,w,_,N,j;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e.props.account,a=e.state.votes,e.setState({submittingVotes:!0}),s={},o=e.props.tronWeb(),c=e.props.account,l=c.tronWeb,i=c.sunWeb,u=0,m=Object.keys(a);u<m.length;u++)p=m[u],""!=a[p]&&(s[p]=parseInt(a[p],10));if(!I.v){t.next=50;break}if("ACCOUNT_LEDGER"!==e.props.walletType.type){t.next=25;break}return t.prev=9,t.next=12,o.transactionBuilder.vote(s,n.address).catch(function(e){return!1});case 12:return f=t.sent,t.next=15,Object(K.c)(f,o);case 15:h=t.sent,b=h.result,r=b,t.next=23;break;case 20:t.prev=20,t.t0=t.catch(9),console.error("error",t.t0);case 23:t.next=48;break;case 25:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type){t.next=33;break}return t.next=28,x.a.voteForWitnesses(n.address,s)(n.key);case 28:v=t.sent,g=v.success,r=g,t.next=48;break;case 33:if("ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=48;break}return t.prev=34,t.next=37,l.transactionBuilder.vote(s,n.address).catch(function(e){console.error(e)});case 37:return y=t.sent,t.next=40,Object(K.c)(y,l);case 40:E=t.sent,w=E.result,r=w,t.next=48;break;case 45:t.prev=45,t.t1=t.catch(34),console.error(t.t1);case 48:t.next=65;break;case 50:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type&&"ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=65;break}return t.prev=51,t.next=54,i.sidechain.transactionBuilder.vote(s,n.address).catch(function(e){return!1});case 54:return _=t.sent,t.next=57,Object(K.e)(_,i);case 57:N=t.sent,j=N.result,r=j,t.next=65;break;case 62:t.prev=62,t.t2=t.catch(51),console.error(t.t2);case 65:r?(setTimeout(function(){return e.props.reloadWallet()},1200),setTimeout(function(){return e.setState({votesSubmitted:!1})},5e3),e.setState({votesSubmitted:!0,submittingVotes:!1,votingEnabled:!1,modal:k.a.createElement(F.a,{success:!0,title:Object(O.c)("submissing_vote_message_title"),onConfirm:e.hideModal},Object(O.c)("submissing_vote_message_0"),k.a.createElement("br",null),Object(O.c)("submissing_vote_message_1"))})):e.setState({votesSubmitted:!1,submittingVotes:!1,votingEnabled:!1,modal:k.a.createElement(F.a,{danger:!0,title:Object(O.c)("error"),onConfirm:e.hideModal},Object(O.c)("submitting_vote_error_message"))});case 66:case"end":return t.stop()}},t,null,[[9,20],[34,45],[51,62]])})),e.state={privateKey:"",votingEnabled:!1,votesSubmitted:!1,submittingVotes:!1,loading:!1,votes:{},searchCriteria:"",modal:null,viewStats:!1,colors:W()("mpn65",20),votesList:{},liveVotes:null,goSignedIn:!1},e}return Object(w.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.account.isLoggedIn&&this.props.account.address!==e.account.address&&this.loadCurrentVotes(this.props.account.address)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.props.account).isLoggedIn&&(this.props.reloadWallet(),this.loadCurrentVotes(t.address)),e.next=4,this.loadVotes();case 4:return e.next=6,this.loadVoteTimer();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderVoteStatus",value:function(){var e=this.getVoteStatus(),t=e.votesAvailable;switch(e.voteState){case 0:return k.a.createElement("span",{className:"text-success"},Object(O.c)("all_votes_are_used_message"));case 1:return k.a.createElement("span",null,Object(O.c)("votes_remaining_message"),":\xa0",k.a.createElement("b",null,k.a.createElement(j.c,{value:t})));case-1:return k.a.createElement("span",{className:"text-danger"},Object(O.c)("to_much_votes_massage"));case-2:return k.a.createElement("span",{className:"text-danger"},Object(O.c)("need_min_trx_to_vote_message"))}}},{key:"renderVotingBar",value:function(){var e=this,t=this.state,n=t.votingEnabled,a=t.votesSubmitted,r=t.submittingVotes,s=this.props,o=s.intl,c=s.account,l=this.getVoteStatus().trxBalance;return c.isLoggedIn?a?k.a.createElement(P.a,{color:"success",className:"text-center m-0"},Object(O.c)("thanks_submitting_vote_message")):n&&l<=0?k.a.createElement("div",{className:"text-center"},Object(O.c)("warning_votes")," ",k.a.createElement(A.a,{to:"/account",className:"text-primary"},Object(O.c)("account_page"))):r?k.a.createElement("div",{className:"d-flex justify-content-center p-3",style:{lineHeight:"36px"}},k.a.createElement(D.a,{width:160})):n?k.a.createElement("div",{className:"d-flex flex-wrap flex-sm-nowrap",style:{lineHeight:"36px"}},k.a.createElement("div",{className:"d-flex"},k.a.createElement("div",{style:{width:"35px",height:"35px",paddingLeft:"10px"}},k.a.createElement("i",{className:"fa fa-search"})),k.a.createElement("input",{style:{background:"#F3F3F3"},type:"text",className:"form-control",placeholder:o.formatMessage({id:"search"}),onChange:function(t){return e.onSearchChange(t.target.value)}})),k.a.createElement("div",{className:"ml-auto"},this.renderVoteStatus()),k.a.createElement("div",{className:"ml-2 mt-2 ml-sm-auto mt-sm-0"},k.a.createElement("button",{className:"btn btn-danger ml-auto _cancel",onClick:this.cancelVotes},Object(O.c)("cancel")),k.a.createElement("button",{className:"btn btn-warning ml-1 _reset",onClick:this.resetVotes},Object(O.c)("reset")),k.a.createElement("button",{className:"btn btn-success ml-1 _submit",onClick:this.submitVotes},Object(O.c)("submit_votes")))):k.a.createElement("div",{className:"text-center"},k.a.createElement("a",{className:"",onClick:this.enableVoting,style:{color:"#C23631"}},Object(O.c)("click_to_start_voting"))):k.a.createElement("div",{className:"text-center"},Object(O.c)("open_wallet_start_voting_message"))}},{key:"renderVotingBarFalse",value:function(){var e=this.props,t=(e.intl,e.account),n=this.state.goSignedIn;if(!t.isLoggedIn)return k.a.createElement("div",{className:"text-center"},n?k.a.createElement("span",{style:{color:"#333333"}},Object(O.c)("not_signed_in")):k.a.createElement("a",{href:"javascript:;",onClick:this.notSignedIn},Object(O.c)("click_to_start_voting")))}},{key:"getNextCycle",value:function(){return this.props.voteTimer}},{key:"render",value:function(){var e=this,t=this.state,n=t.votingEnabled,a=t.votes,r=t.votesList,s=t.loading,o=t.modal,l=t.viewStats,u=t.colors,d=t.searchCriteria,m=this.props,p=m.wallet,f=m.isRightText,h=r.data||[],b=h.map(function(e,t){return Object.assign({rank:t},e)});""!==d&&(b=c()(h,function(e){return!(!e.address||-1===i()(e.address.toLowerCase()).indexOf(d.toLowerCase()))}));var v=r.totalVotes||0,g=r.fastestRise||{},y=this.getVoteStatus().trxBalance,E=Math.ceil(y/20);return k.a.createElement("main",{className:"container header-overlap _voteOverview"},o,k.a.createElement("div",{className:"row _badge"},k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},k.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_nextRound"},k.a.createElement("div",{className:"card-body"},k.a.createElement("h3",{className:"text-primary"},k.a.createElement(C.a,{date:this.getNextCycle(),daysInHours:!0,onComplete:function(){e.loadVotes(),e.loadVoteTimer()}})),Object(O.c)("next_round")))),k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0 position-relative"},k.a.createElement("div",{className:"card h-100 widget-icon bg-line_green bg-image_totalVotes"},k.a.createElement("div",{className:"card-body text-left"},k.a.createElement("h3",{className:"text-secondary"},k.a.createElement(j.c,{value:v})),Object(O.c)("total_votes")))),k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},k.a.createElement("div",{className:"card h-100 widget-icon bg-line_yellow bg-image_mostRank"},k.a.createElement("div",{className:"card-body text-left"},k.a.createElement("h3",{className:"text-success"},k.a.createElement(Z,{value:g.change_cycle,arrow:!0})),k.a.createElement("div",{className:(f?"flex-row-reverse justify-content-end":"")+" d-flex"},k.a.createElement("div",{className:"_ranks mr-2",style:{whiteSpace:"nowrap"}},Object(O.c)("most_ranks")),k.a.createElement("div",{className:"",style:f?{maxWidth:"110px"}:{}},Math.abs(g.change_cycle)?k.a.createElement(N.a,{address:g.address},g.name||g.url):k.a.createElement("span",{style:{color:"#999999"}},"-"))))))),s?k.a.createElement("div",{className:"card mt-2"},k.a.createElement(D.b,null,Object(O.c)("loading_super_representatives"))):k.a.createElement("div",{className:"row mt-2"},k.a.createElement("div",{className:"col-md-12"},k.a.createElement(T.StickyContainer,null,k.a.createElement("div",{className:"card mt-1"},p.isOpen&&k.a.createElement(T.Sticky,null,function(t){var n=t.style;return k.a.createElement("div",{style:G({borderBottom:"1px solid #D8D8D8",zIndex:100},n),className:"card-body bg-white p-3"},e.renderVotingBar())}),!p.isOpen&&k.a.createElement(T.Sticky,null,function(t){var n=t.style;return k.a.createElement("div",{style:G({borderBottom:"1px solid #D8D8D8",zIndex:100},n),className:"card-body bg-white p-3"},e.renderVotingBarFalse())}),k.a.createElement("div",{className:"table-responsive table-scroll"},k.a.createElement("table",{className:"table vote-table table-hover m-0"},k.a.createElement("thead",{className:"thead-light"},k.a.createElement("tr",null,k.a.createElement("th",{className:"text-center",style:{width:50}},Object(O.c)("SR_rank")),k.a.createElement("th",null,Object(O.c)("name")),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(O.c)("SR_votes")),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(O.c)("live")),k.a.createElement("th",{className:"text-right",style:{width:100}},Object(O.c)("percentage")),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(O.c)("SR_voteRatio"),k.a.createElement("span",{className:"ml-2"},k.a.createElement(M.a,{placement:"top",text:"voting_brokerage_tip"}))),n&&y>0&&k.a.createElement("th",{style:{width:200}},Object(O.c)("your_vote")))),k.a.createElement("tbody",null,d.length>0&&0===b.length&&k.a.createElement("tr",null,k.a.createElement("td",{colSpan:"6",className:"p-3 text-center"},"No Super Representatives found for"," ",k.a.createElement("b",null,d))),b.map(function(t,r){return k.a.createElement("tr",{key:t.address+"_"+r},l?k.a.createElement("th",{className:"font-weight-bold pt-4 text-center",style:{backgroundColor:"#"+u[t.rank]}},t.lastRanking):k.a.createElement("th",{className:"font-weight-bold pt-4 text-center"},t.lastRanking),k.a.createElement("td",{className:"d-flex flex-row "},k.a.createElement("div",{className:"text-center text-sm-left",style:{minWidth:"150px"}},k.a.createElement(z.a,null,k.a.createElement(N.a,{address:t.address,className:"font-weight-bold"},t.name||t.url)),k.a.createElement(N.a,{className:"small text-muted",address:t.address})),!n&&t.hasPage&&k.a.createElement("div",{className:"_team ml-0 ml-sm-auto"},k.a.createElement(A.a,{className:"btn btn-lg btn-block btn-default mt-1",to:"/representative/".concat(t.address)},Object(O.c)("open_team_page"),k.a.createElement("i",{className:"fas fa-users ml-2"})))),k.a.createElement("td",{className:"small text-right align-middle"},v>0&&k.a.createElement(_.Fragment,null,k.a.createElement(j.c,{value:t.lastCycleVotes}),k.a.createElement("br",null))),k.a.createElement("td",{className:"small text-right align-middle _liveVotes"},v>0&&k.a.createElement(_.Fragment,null,k.a.createElement(j.c,{value:t.realTimeVotes}),k.a.createElement("br",null),t.changeVotes>0?k.a.createElement("span",{className:"color-green"},"+",k.a.createElement(j.c,{value:t.changeVotes})):k.a.createElement("span",{className:"color-red"},k.a.createElement(j.c,{value:t.changeVotes})))),k.a.createElement("td",{className:"small text-right align-middle"},v>0&&k.a.createElement(_.Fragment,null,k.a.createElement(j.c,{value:t.votesPercentage,minimumFractionDigits:2,maximumFractionDigits:2}),"%")),k.a.createElement("td",{className:"small text-right align-middle"},k.a.createElement(_.Fragment,null,k.a.createElement("span",null,t.brokerage||0==t.brokerage?100-t.brokerage+"%":""))),n&&y>0&&k.a.createElement("td",{className:"vote-input-field"},k.a.createElement("div",{className:"input-group"},k.a.createElement("div",{className:"input-group-prepend"},k.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.setVote(t.address,(a[t.address]||0)-E)},type:"button"},"-")),k.a.createElement("input",{type:"text",value:a[t.address]||"",className:"form-control text-center",onChange:function(n){return e.setVote(t.address,n.target.value)}}),k.a.createElement("div",{className:"input-group-append"},k.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e.setVote(t.address,(a[t.address]||0)+E)},type:"button"},"+")))))})))))))))}}]),t}(k.a.Component))||r)||r)||r)||r)}}]);