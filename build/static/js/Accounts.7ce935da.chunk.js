(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1393:function(e,t,a){"use strict";a.d(t,"a",function(){return Q});var n=a(1405),r=a.n(n),c=a(55),l=a.n(c),o=a(257),s=a.n(o),i=a(1390),d=a.n(i),u=a(2),g=a.n(u),m=a(24),p=a(5),E=a(13),f=a(12),A=a(20),h=a(19),b=a(21),I=a(0),v=a.n(I),B=a(3),k=a(16);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Q=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(A.a)(this,Object(h.a)(t).call(this,e))).loadDatas=Object(p.a)(g.a.mark(function e(){var t,n,r,c,l=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,k.a.getTokens(y({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=y({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(y({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?y({},e,{name:v.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?v.a.createElement("span",{key:a,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:v.a.createElement("div",{className:"custom-filter-dropdown"},v.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch})," ",v.a.createElement(s.a,{type:"primary",onClick:a.onSearch}," ",Object(B.c)("search")," ")," ",v.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset}," ",Object(B.c)("reset")," ")," "),filterIcon:v.a.createElement(l.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],c=!0,o=!1,i=void 0;try{for(var u,g=e[Symbol.iterator]();!(c=(u=g.next()).done);c=!0){var m=u.value;if(m.sorter&&!m.filterDropdown){var p={sorter:t(m.key)};r.push(y({},m,{},p))}else if(!m.sorter&&m.filterDropdown){var E=y({},n);r.push(y({},m,{},E))}else if(m.sorter&&m.filterDropdown){var f=y({sorter:t(m.key)},n);r.push(y({},m,{},f))}else r.push(m)}}catch(A){o=!0,i=A}finally{try{c||null==g.return||g.return()}finally{if(o)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:y({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,c=e.column,l=e.bordered,o=e.pagination,s=void 0===o||o,i=e.scroll,d=e.Footer,u=e.locale,g=e.addr,m=e.transfers,p=(e.contractAddress,e.isPaddingTop,this.setColumn(c)),E=s?y({total:t},this.state.pagination):s;return v.a.createElement("div",null," ",g?v.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},v.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,footer:d,pagination:E,loading:a,onChange:this.handleTableChange})," "):v.a.createElement("div",{className:"card table_pos"},v.a.createElement(r.a,{bordered:l,columns:p,footer:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:E,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(I.Component)},1401:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},2408:function(e,t){e.exports="data:image/png;base64,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"},3485:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a.n(n),c=a(114),l=a.n(c),o=a(255),s=a.n(o),i=a(2),d=a.n(i),u=a(5),g=a(13),m=a(12),p=a(20),E=a(19),f=a(21),A=a(0),h=a.n(A),b=a(31),I=a(18),v=a(3),B=a(10),k=a(23),C=a(6),y=a(137),Q=a(1393),O=a(89),S=(a(256),a(15),a(16)),x=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).loadAccounts=Object(u.a)(d.a.mark(function t(){var a,n,r,c,l,o,s=arguments;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:20,e.setState({loading:!0}),t.next=5,S.a.getAccounts({sort:"-balance",limit:n,start:(a-1)*n});case 5:r=t.sent,c=r.accounts,l=r.total,o=r.rangeTotal,e.setState({loading:!1,accounts:c,total:l,rangeTotal:o});case 10:case"end":return t.stop()}},t)})),e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchFieldChangeHandler=function(t){e.setState({searchString:t.target.value})},e.customizedColumn=function(){var t=e.props.intl;return[{title:s()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,a,n){return 2==a.accountType?h.a.createElement("span",{className:"d-flex"},h.a.createElement(l.a,{placement:"top",title:t.formatMessage({id:"contracts"})},h.a.createElement("span",null,h.a.createElement("i",{className:"far fa-file mr-1"}))),h.a.createElement(k.a,{address:e,isContract:2==a.toAddressType})):h.a.createElement(k.a,{address:e})}},{title:"Name Tag",dataIndex:"addressTag",key:"addressTag",align:"left",render:function(e,t,a){return h.a.createElement("span",{style:{whiteSpace:"nowrap"}}," ",t.addressTag?t.addressTag:""," ")}},{title:s()(t.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return h.a.createElement("div",null,h.a.createElement(B.c,{value:parseInt(e)/C.E/C.h*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:s()(t.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return h.a.createElement(B.c,{value:parseInt(e)/C.E})}},{title:s()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return h.a.createElement(y.b,{amount:parseInt(e)/C.E})}}]},e.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}]},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return(t=t.toUpperCase()).length>0&&(e=r()(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return h.a.createElement(A.Fragment,null,h.a.createElement("div",{className:"table-responsive"},h.a.createElement("table",{className:"table table-striped m-0"},h.a.createElement("thead",{className:"thead-dark"},h.a.createElement("tr",null,h.a.createElement("th",null,Object(v.c)("address")),h.a.createElement("th",{className:"d-md-table-cell"},Object(v.c)("supply")),h.a.createElement("th",{className:"d-md-table-cell"},Object(v.c)("power")),h.a.createElement("th",null,Object(v.c)("balance")))),h.a.createElement("tbody",null,e.map(function(e,t){return h.a.createElement("tr",{key:e.address},h.a.createElement("th",null,h.a.createElement(k.a,{address:e.address})),h.a.createElement("td",{className:"d-md-table-cell text-nowrap"},h.a.createElement(B.c,{value:e.balance/C.E/C.h*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),h.a.createElement("td",{className:"text-nowrap d-md-table-cell"},h.a.createElement(B.c,{value:e.power/C.E})),h.a.createElement("td",{className:"text-nowrap"},h.a.createElement(y.b,{amount:e.balance/C.E})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,c=n.loading,l=n.rangeTotal,o=void 0===l?0:l,s=n.accounts,i=this.customizedColumn();a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"view_total"}),a.formatMessage({id:"table_info_account_tip2"});return h.a.createElement("main",{className:"container header-overlap pb-3 token_black"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-12"},h.a.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},h.a.createElement("div",{className:"card-body"},h.a.createElement("h3",{className:"text-primary"},h.a.createElement(B.c,{value:o})),Object(v.c)("total_accounts"))))),c&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(O.b,null)),h.a.createElement("div",{className:"row mt-2"},h.a.createElement("div",{className:"col-md-12 table_pos"},r?h.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},h.a.createElement("div",null,Object(v.c)("view_total")," ",o," ",Object(v.c)("account_unit"),h.a.createElement("br",null),o>1e4?h.a.createElement("span",null,"(",Object(v.c)("table_info_big1"),"10000",Object(v.c)("table_info_big2"),")"):"")):"",h.a.createElement(Q.a,{bordered:!0,loading:c,column:i,data:s,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(A.Component);var w={loadAccounts:I.r};t.default=Object(b.connect)(function(e){return{accounts:e.app.accounts}},w)(Object(B.h)(x))},3528:function(e,t,a){"use strict";a.r(t);var n,r=a(1405),c=a.n(r),l=a(255),o=a.n(l),s=a(38),i=a.n(s),d=a(2),u=a.n(d),g=a(24),m=a(5),p=a(13),E=a(12),f=a(20),A=a(19),h=a(21),b=a(1390),I=a.n(b),v=a(0),B=a.n(v),k=a(31),C=a(18),y=a(3),Q=a(10),O=a(23),S=a(6),x=a(137),w=a(1393),H=a(89),_=(a(256),a(15),a(16)),j=a(8),D=a(52),N=a(140),J=Object(k.connect)(function(e){return{account:e.app.account,wallet:e.app.wallet,tokenBalances:e.account.tokens,trxBalance:e.account.trxBalance||e.account.balance}},{reloadWallet:D.c})(n=Object(Q.h)(n=Object(N.a)(n=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(A.a)(t).call(this,e))).hideModal=function(){var e=a.props.onHide;e&&e()},a.customizedColumn=function(){var e=a.props.intl;return[{title:o()(e.formatMessage({id:"propose_number"})),dataIndex:"index",align:"left",render:function(e,t,a){return B.a.createElement("div",null,a+1)}},{title:o()(e.formatMessage({id:"developers_contribution_link"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"80%",render:function(e,t,a){return B.a.createElement(O.e,{href:t.url,target:"_blank",className:"text-muted"},B.a.createElement("span",{style:{wordBreak:"break-all"}},t.url))}},{title:o()(e.formatMessage({id:"developers_earn_points"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(Q.c,{value:t.points}))}}]},a.state={loading:!1},a}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.loading,t=this.props,a=(t.intl,t.notes),n=a.length,r=this.customizedColumn();return B.a.createElement(j.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered _freezeContent developers_note"},B.a.createElement(j.f,{className:"text-center _freezeHeader",toggle:this.hideModal},Object(y.c)("developers_points_details")),B.a.createElement(j.d,{className:"text-center _freezeBody token_black"},B.a.createElement(w.a,{bordered:!0,loading:e,column:r,data:a,total:n,position:"bottom"})))}}]),t}(B.a.PureComponent))||n)||n)||n;a(263);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L=I.a.Search,Z=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(f.a)(this,Object(A.a)(t).call(this))).loadAccounts=Object(m.a)(u.a.mark(function t(){var a,n,r,c,l,o,s,i,d=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.length>0&&void 0!==d[0]?d[0]:1,n=d.length>1&&void 0!==d[1]?d[1]:20,r=e.state,c=r.searchCriteria,l=r.filter,e.setState({loading:!0}),t.next=6,_.a.getUserList(Y({search:c,pageSize:n,page:a},l));case 6:o=t.sent,s=o.data,i=o.total,s.map(function(e,t){e.index=t+1,e.extraData=new Function("return "+e.extra)()}),e.setState({loading:!1,developers:s,total:i,pagination:Y({},e.state.pagination,{total:i})});case 11:case"end":return t.stop()}},t)})),e.handleTableChange=function(t,a,n){var r=Y({},e.state.pagination);r.current=t.current,r.pageSize=t.pageSize;e.setState({pagination:r,filter:Y({},e.state.filter,{sortField:{currentYear:"currentYear",currentQuarter:"currentQuarter",currentMonth:"currentMonth"}[n.columnKey]||"currentMonth",userSort:{descend:-1,ascend:1}[n.order]||"-1",order_current:n.order})},function(){return e.loadAccounts(r.current,r.pageSize)})},e.hideModal=function(){e.setState({modal:null})},e.showNote=function(t){var a=new Function("return "+e.state.developers[t].note)();e.setState({modal:B.a.createElement(J,{notes:a,onHide:e.hideModal})})},e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)},function(){e.loadAccounts()})},e.customizedColumn=function(){var t=e.props.intl,n=e.state.filter,r=a(1401);return[{title:o()(t.formatMessage({id:"developers_username"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",width:"40%",render:function(e,t,n){return B.a.createElement("div",null,t.extraData&&"null"!==t.extraData.imgUrl?B.a.createElement("div",null,B.a.createElement("img",{src:t.extraData.imgUrl,width:"20",height:"20",alt:"@"+t.name,onError:function(e){e.target.onerror=null,e.target.src=r}}),B.a.createElement("span",{className:"ml-2"},t.name)):B.a.createElement("div",null,B.a.createElement("img",{src:a(2408),width:"20",height:"20",alt:"@"+t.name}),B.a.createElement("span",{className:"ml-2"},t.name)))}},{title:o()(t.formatMessage({id:"developers_current_year"})),dataIndex:"currentYear",key:"currentYear",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentYear"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(Q.c,{value:t.currentYear}))}},{title:o()(t.formatMessage({id:"developers_current_quarter"})),dataIndex:"currentQuarter",key:"currentQuarter",align:"center",sorter:!0,sortOrder:"currentQuarter"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(Q.c,{value:t.currentQuarter}))}},{title:o()(t.formatMessage({id:"developers_current_month"})),dataIndex:"currentMonth",key:"currentMonth",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentMonth"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(Q.c,{value:t.currentMonth}))}},{title:o()(t.formatMessage({id:"trc20_cur_order_header_action"})),dataIndex:"action",key:"action",align:"right",className:"ant_table",render:function(t,a,n){return B.a.createElement("a",{href:"javascript:;",onClick:function(){e.showNote(n)}},Object(y.c)("developers_view_points"))}}]},e.state={modal:null,loading:!0,searchString:"",developers:[],total:0,searchCriteria:"",pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},filter:{sortField:"currentMonth",userSort:-1,order_current:"descend"}},e}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"renderAccounts",value:function(){var e=this.state.developers;if(0!==e.length)return B.a.createElement(v.Fragment,null,B.a.createElement("div",{className:"table-responsive"},B.a.createElement("table",{className:"table table-striped m-0"},B.a.createElement("thead",{className:"thead-dark"},B.a.createElement("tr",null,B.a.createElement("th",null,Object(y.c)("address")),B.a.createElement("th",{className:"d-md-table-cell"},Object(y.c)("supply")),B.a.createElement("th",{className:"d-md-table-cell"},Object(y.c)("power")),B.a.createElement("th",null,Object(y.c)("balance")))),B.a.createElement("tbody",null,e.map(function(e,t){return B.a.createElement("tr",{key:e.address},B.a.createElement("th",null,B.a.createElement(O.a,{address:e.address})),B.a.createElement("td",{className:"d-md-table-cell text-nowrap"},B.a.createElement(Q.c,{value:e.balance/S.E/S.h*100,minimumFractionDigits:8,maximumFractionDigits:8})," ","%"),B.a.createElement("td",{className:"text-nowrap d-md-table-cell"},B.a.createElement(Q.c,{value:e.power/S.E})),B.a.createElement("td",{className:"text-nowrap"},B.a.createElement(x.b,{amount:e.balance/S.E})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,o=n.rangeTotal,s=void 0===o?0:o,i=n.developers,d=n.modal,u=this.customizedColumn();a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"}),a.formatMessage({id:"table_info_account_tip2"});return B.a.createElement("main",{className:"container header-overlap pb-3 token_black"},d,l&&B.a.createElement("div",{className:"loading-style"},B.a.createElement(H.b,null)),B.a.createElement("div",{className:"row mt-2"},r?B.a.createElement("p",{className:"developers_reward_tip"},Object(y.c)("developers_reward_tip")):"",B.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg"},r?B.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},B.a.createElement("div",null,Object(y.c)("view_total")," ",r," ",Object(y.c)("developers_account"))):"",B.a.createElement("div",{className:"table_pos_search",style:{right:"15px"}},B.a.createElement(L,{placeholder:a.formatMessage({id:"developers_search"}),enterButton:a.formatMessage({id:"search"}),size:"large",onSearch:function(t){return e.onSearchChange(t)}})),B.a.createElement("div",{className:"card table_pos table_pos_addr table_pos_addr_data"},B.a.createElement(c.a,{columns:u,rowKey:function(e,t){return t},dataSource:i,loading:l,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.index<6)return"trc20-star-ad"}})),r?B.a.createElement("p",{className:"developers_tip_bottom"},Object(y.c)("developers_niTron")):"")))}}]),t}(v.Component);var T={loadAccounts:C.r};t.default=Object(k.connect)(function(e){return{accounts:e.app.accounts}},T)(Object(Q.h)(Z))}}]);