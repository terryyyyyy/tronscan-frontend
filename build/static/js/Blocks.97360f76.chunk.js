(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1393:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var n=a(1405),r=a.n(n),o=a(55),i=a.n(o),l=a(254),s=a.n(l),c=a(1390),u=a.n(c),d=a(2),m=a.n(d),p=a(24),f=a(5),h=a(13),b=a(14),g=a(20),v=a(19),O=a(21),w=a(0),k=a.n(w),A=a(3),E=a(16);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).loadDatas=Object(f.a)(m.a.mark(function e(){var t,n,r,o,i=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n=i.length>1&&void 0!==i[1]?i[1]:40,r=a.state.filter,e.next=5,E.a.getTokens(j({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=j({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(j({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?j({},e,{name:k.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?k.a.createElement("span",{key:a,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:k.a.createElement("div",{className:"custom-filter-dropdown"},k.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch})," ",k.a.createElement(s.a,{type:"primary",onClick:a.onSearch}," ",Object(A.c)("search")," ")," ",k.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset}," ",Object(A.c)("reset")," ")," "),filterIcon:k.a.createElement(i.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],o=!0,l=!1,c=void 0;try{for(var d,m=e[Symbol.iterator]();!(o=(d=m.next()).done);o=!0){var p=d.value;if(p.sorter&&!p.filterDropdown){var f={sorter:t(p.key)};r.push(j({},p,{},f))}else if(!p.sorter&&p.filterDropdown){var h=j({},n);r.push(j({},p,{},h))}else if(p.sorter&&p.filterDropdown){var b=j({sorter:t(p.key)},n);r.push(j({},p,{},b))}else r.push(p)}}catch(g){l=!0,c=g}finally{try{o||null==m.return||m.return()}finally{if(l)throw c}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:j({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,i=e.bordered,l=e.pagination,s=void 0===l||l,c=e.scroll,u=e.Footer,d=e.locale,m=e.addr,p=e.transfers,f=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),h=s?j({total:t},this.state.pagination):s;return k.a.createElement("div",null," ",m?k.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==p?" transfer-mt-100":" transfer-pt-100")},k.a.createElement(r.a,{bordered:i,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:c,footer:u,pagination:h,loading:a,onChange:this.handleTableChange})," "):k.a.createElement("div",{className:"card table_pos"},k.a.createElement(r.a,{bordered:i,columns:f,footer:u,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:c,pagination:h,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(w.Component)},1422:function(e,t,a){"use strict";var n=a(13),r=a(14),o=a(20),i=a(19),l=a(21),s=a(0),c=a.n(s),u=a(10),d=a(1432),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={time:e.time,newTime:Object(d.b)(e.time),timer:null},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateTime()}},{key:"updateTime",value:function(){var e=this,t=setInterval(function(){e.setState({newTime:Object(d.b)(e.props.time)})},1e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.state.newTime;return c.a.createElement("div",{className:"token_black table_pos"},c.a.createElement("div",null,e))}}]),t}(c.a.Component);t.a=Object(u.h)(m)},1432:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var n=a(251),r=a.n(n);function o(e){var t=e.indexOf("T"),a=e.indexOf("Z"),n=e.substr(0,t),r=e.substr(t+1,a-t-1),o=n.replace(/\-/g,"/")+" "+r,i=new Date(Date.parse(o));return i=i.getTime(),i/=1e3,i+=28800,new Date(1e3*parseInt(i)).toLocaleDatetimeObj()+" "+new Date(1e3*parseInt(i)).totimeObj().match(/\d{2}:\d{2}:\d{2}/)[0]}function i(e,t,a,n){var r=t[n[a+1]]-e[n[a]].unit*t[n[a]],o=t[n[a]]>1?e[n[a]].plural:e[n[a]].odd,i=r>1?e[n[a+1]].plural:e[n[a+1]].odd,l=t[n[a]],s=r;return{firstTime:l,secondTime:s,firstUnit:o,secondUnit:i,string:s&&s>0?"".concat(l).concat(o," ").concat(s).concat(i):"".concat(l," ").concat(o)}}function l(e){return function(e){var t=r()(e),a=r()(),n="",o={day:{key:"days",plural:"days",odd:"day",unit:24},hour:{key:"hours",plural:"hrs",odd:"hr",unit:60},minute:{key:"minutes",plural:"mins",odd:"min",unit:60},second:{key:"seconds",plural:"secs",odd:"sec"}},l={};for(var s in o)l[s]=a.diff(t,o[s].key);var c=["day","hour","minute","second"],u="",d="";l[c[0]]>=1?n=i(o,l,0,c):l[c[1]]>=1?n=i(o,l,1,c):l[c[2]]>=1?n=i(o,l,2,c):(u=l[c[3]]>1?o[c[3]].plural:o[c[3]].odd,n={firstTime:d=l[c[3]],secondTime:0,firstUnit:u,secondUnit:null,string:d<1?"less than 1sec":"".concat(d).concat(u)});return n}(e).string+" ago"}},1442:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAA9RJREFUWAnNmc9vG0UUx78zsxsbh0iJ1fyASIRUSBwoN86Vqt4QAgI0nJC4JeKARCu1gnDwpUJCHLhy4tJTWqUcuMAB/gFOICGEECVCgfxAsZGIieOdeX1vnfXaztpe/0jsJ9k7M/vem4/f7vx6VuhXvixkMZmbhrE5eNpHpTIBY/zQnbVVZDInCFwVnjuCP1XCy+9X+ulK9WT0wxc+fj+Yg6dm4Cjbky28/+GCEoqz+1hbq6a1TQe4uWmAXxdg1DyIdFrniXpKOZx4uzDLe1hdtYk6DY3dAb/+ZAZltwRNXoPd4EXtVaEy21j5oNTJGUemjRApvOAvwtIzUBgsakldkDOgah5vXydsfvdfkoq0JUeQChpf5ZZhT2baGQ61XZlD/FT5A4WCa/V7NjISuYuEEyKyebyYebYVTupnH7E8VtjZJOXzbaMnkh53cwRlQGg8db4gHbwTLeJhYbpRIwaUqURG66iFskuQMXAq9QIyj+aHPpVEvfRydYGPLX8+MqkBygoRBAtR48ivpBfwfSGcd2uAsnwNukKk+VWOl0iFXHdVa3DohwO1Bihr63mLUrcY7ls49Q2gr3btztaYFGRXMuVd6WowiAKpj9n8tboLpX4B3Dv1eruCC37U4ZapncIw2lvhxCe5f1K59iandbifS6Xdh1ISHGifPX2WyltwPKnDzWYq7R6V2sGRWed3cSeVN8/4OtwJp9JmJc07Z9J3QOoeV95ta9YJTts/29q13nDa98JtOlHrreS6w1v8AvGHheh5hpyDcp82KQ8LTpwayxHsSahpnWTKGxzR23UXw4Q7depBDjhaZ+qddCoY8wCBfZVVLsVqISRXaYK/4qkkVOABIe9cL481dsybKlPV4emrsbFT2QYHULTOKi3TBEMOG044+FSow6OhVNLLdjJko4MBIxe50pYBrSlH9R6uHSCHBCcwXvZI46jc8VTVATqCbDzjFgd651o7C45KtUPT1t0rvR/ET71p9RwcbrL9v3xu/pynn73WfvqqO13G6kc/1866ARX73uo7+o0B3mN7mRv7Ykk0MszEUpsHL3M6Qk78YyPGIl89iAFf4lyJx+mIcRHldnGtEMSAUqpwrsSpsHGknJISeaNaf4/jpU4SOTm9PVI46Vwd8+wQZxhiQLn5yodFHpF/S3EkotQOVgpN014zoFDd2PgLZiIcQRcKKfmZNzfOBOcsoFKE18uPLhQySh4lRCQ5uyWKkkS6f/fpvufHhM4Sm+SxJkQu0m0PGGmMOIHZHVBAxzoFHEVSrmObRG+EjMpp/4awlTKezBf7/RviMUwweV8zgtReAAAAAElFTkSuQmCC"},1443:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABBhJREFUWAnNWUtPGlEUZmZ4ikQwFGiN0K7qot250MT0J7Qb665rTbsxNGlddOHOTWNMXOmqa+0faNOFTUx04aqbsmik2Gh9oICCPIZHvzPhkplhgJkBpCRw75x7zrnffPeecx9wFpOf5eVlZy6X85bL5SEbPqIo2mu1mo3ccRwnQlSCTHS5XLmbm5v0+vp60UxXnBGjjY0NWywWCwiC4KtUKk4jttDN45vGS51vbm6Kem11Adza2hL29vZCYCgIdni9zrX04KNqt9tP4/H42fb2dkVLRy7rCHBpaclXKBQiAGaVG3Zbp2lQrVYTa2tr6Xa+hFaNeFPu+vp6DEMZ7pa1Fn0I8Ds6NTVV29/fz7bQsWgyiADgMVceIQB8rQx7LL8aGRn5jX6rar9N84mYu2NwhGk0k8k8VIOj56YhpmHF3LinpdxnmUtruBUMUkAAxP0+A2npHnNybHFx0StXaACkVELRKm8cRJ3n+QjFAOu7UTk4OKAc19NUwjoxUiIGbOl0OshsJIC0QpRKpRATDroEiyGwKJElAaTlq0+5TvGuHo/Hh1VkSCHUeACLAgiTAlUCSGurhl5PRZFI5G0gEPg6Pj7+JRgMPuvkvFgsSpg4UOlEDnrSyaCb9nA4/AG7mxfMBxiKHR4evmLPrUok7x+0YijCupWyWbkaHPlBnk3q8ZfNZr087ef0KJvR0QIHP+eXl5cfdfpz87TZ1KlsSK0NuAVsYI/1OAPTNivthPUok47T6bSFQqEoguop7L4dHR190rJtBw457o+WjZaMciJPP1qNWjK/3z8LcLNoewzi3yAy36n1egWO/FqtVltjJVF3pPUMA0VA4fmlHGQvwbH+rUjQdD5wMEG7EpP7M3LYc7DuZ3p1kBbI7PJUUm+ngFgwMqzML5UIYJGCpCQXtqtjcl+kUqkFvJQiTRDIXoMjHEQeT0fDdqDUbWAkoQVSpdcVc8wX1mSRx9vfMoHesgPInoCrY8nxbrc7rReYXI+BhEw+Aqlu5pzcP9WHh4fTws7OTnlmZmYUk9zwXjCfz2eQdr5jhxJBUv2JoX+PgDhRd2TmGcN7u7KyciqBwtEyBSemtvrJZPIXvq/NgGhn43A4CJNFyoMTExPnYLDpyNfOQT/bEL0VjMpFA+D8/LxI1xH97NSIb0yXU2wDyw2AVJmcnDwDi5LQiLNe61Lu83q9Z8xvY6mbm5urYDOQYA2DKsFeAuw1ppvi4L67u1uYnp6m6xDPIABiBI9xmaRYpRoMMkCrq6snSN5SBDHZHZVXAPdX3VcTQMyBGpJ3/I5BSpdHanD0rHm7RQ2gm4tGow9QNZUfyYeeT31Ym5hjti0BMoVBX2B2BEhA/+srYMYklf/tJbocJKvTgZ/O1J3+hqDtHG7NUmb/hvgH1qMV7a6f7wwAAAAASUVORK5CYII="},1446:function(e,t,a){"use strict";var n=a(13),r=a(14),o=a(20),i=a(19),l=a(21),s=a(0),c=a.n(s),u=a(10),d=a(3),m=a(253),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,a=e.rangeTotal,n=e.typeText,r=e.common,o=void 0!==r&&r,i=e.intl,l=e.markName,u=void 0===l?"table-question-mark":l,p=e.top,f=void 0===p?"26px":p,h=e.isQuestionMark,b=void 0===h||h,g=e.selected,v=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n}),O=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n})+"<br/>("+i.formatMessage({id:"table_info_big"})+")",w=a>1e4?O:v,k=i.formatMessage({id:"table_info_new_tip"});return c.a.createElement(s.Fragment,null,g?c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},0!==t?c.a.createElement("div",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n),b?c.a.createElement("span",{className:"ml-1"},c.a.createElement(m.a,{placement:"top",info:i.formatMessage({id:"select_tip"})})):"",c.a.createElement("br",null),c.a.createElement("span",null,Object(d.d)("date_number_tip",{total:a}),a>2e3?c.a.createElement("span",null,", ",Object(d.c)("date_list_tip")):"")):c.a.createElement("span",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n))):o?c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},w,c.a.createElement("span",{className:"ml-1"},c.a.createElement(m.a,{placement:"top",text:"to_provide_a_better_experience"}))):c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},a>1e4?c.a.createElement("div",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n),b?c.a.createElement(m.a,{placement:"top",info:k}):"",c.a.createElement("br",null)," ",c.a.createElement("span",null,"(",Object(d.c)("table_info_big1")),c.a.createElement("span",null,t),c.a.createElement("span",null,Object(d.c)("table_info_big2"),")")):c.a.createElement("span",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n)),c.a.createElement("span",{className:a>1e4?u:"table-question-mark-small"})))}}]),t}(c.a.Component);t.a=Object(u.h)(p)},1697:function(e,t,a){"use strict";var n=a(1438),r=a.n(n),o=a(24),i=a(13),l=a(14),s=a(20),c=a(19),u=a(21),d=a(0),m=a.n(d),p=a(10),f=a(251),h=a.n(f),b=a(77),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).disabledStartDate=function(e){var t=a.state.endValue;return e&&t?e.valueOf()>t.valueOf()||e.valueOf()<h()([2018,5,25]).valueOf():e.valueOf()>h()().valueOf()||e.valueOf()<h()([2018,5,25]).valueOf()},a.disabledEndDate=function(e){var t=a.state.startValue;return e&&t&&e.valueOf()<=t.valueOf()||e.valueOf()>h()().valueOf()},a.onChange=function(e,t){a.setState(Object(o.a)({},e,t))},a.onStartChange=function(e){a.onChange("startValue",e)},a.onEndChange=function(e){a.onChange("endValue",e)},a.handleStartOpenChange=function(e){e||a.setState({endOpen:!0})},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a.handleOk=function(e,t){var n=a.props,r=n.onDateOk,o=n.intl;e?t?r(e,t):b.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"select_end_time"})):b.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"select_start_time"}))},a.state={startValue:h()([2018,5,25]).startOf("day"),endValue:h()(),endOpen:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.startValue,n=t.endValue,o=t.endOpen,i=this.props.dateClass,l=void 0===i?"date-range-box":i;return m.a.createElement("div",{className:l},m.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:a,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange}),"\xa0\xa0~\xa0\xa0",m.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"End",onChange:this.onEndChange,open:o,onOpenChange:this.handleEndOpenChange,onOk:function(){return e.handleOk(a,n)}}))}}]),t}(m.a.Component);t.a=Object(p.h)(g)},3493:function(e,t,a){"use strict";a.r(t);var n=a(252),r=a.n(n),o=a(2),i=a.n(o),l=a(89),s=a(5),c=a(13),u=a(14),d=a(20),m=a(19),p=a(21),f=a(1438),h=a.n(f),b=a(0),g=a.n(b),v=a(365),O=a(31),w=(a(251),a(3)),k=a(10),A=a(16),E=a(23),y=a(1393),j=a(87),C=a(1446),S=(a(1697),a(1422)),T=(a(15),h.a.RangePicker,function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).onChange=function(t,a){e.loadBlocks(t,a)},e.loadBlocks=Object(s.a)(i.a.mark(function t(){var a,n,r,o,s,c,u,d,m,p,f=arguments;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.length>0&&void 0!==f[0]?f[0]:1,n=f.length>1&&void 0!==f[1]?f[1]:20,r=e.props,r.location,o=r.match,o.params.date,parseInt(o.params.date)-864e5,e.setState({loading:!0,page:a,pageSize:n}),t.next=8,Promise.all([A.a.getBlocks({limit:n,start:(a-1)*n,sort:"-number",start_timestamp:e.start,end_timestamp:e.end}),A.a.getBlocks({limit:0})]).catch(function(e){console.log("error:"+e)});case 8:s=t.sent,c=Object(l.a)(s,2),u=c[0].blocks,d=c[1],m=d.total,p=d.rangeTotal,e.setState({loading:!1,blocks:u,total:m,rangeTotal:p});case 11:case"end":return t.stop()}},t)})),e.setProducedName=function(e){return e.witnessName?g.a.createElement("span",null,e.witnessName):e.number?g.a.createElement("span",null,e.witnessAddress):g.a.createElement("span",null)},e.customizedColumn=function(){var t=e.props.intl;return[{title:r()(t.formatMessage({id:"height"})),dataIndex:"number",key:"number",align:"center",className:"ant_table",width:"12%",render:function(e,t,a){return g.a.createElement(E.b,{number:e})}},{title:r()(t.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",align:"left",className:"ant_table",render:function(e,t,a){return g.a.createElement(S.a,{time:e})}},{title:r()(t.formatMessage({id:"status"})),dataIndex:"status",key:"status",align:"left",render:function(e,t,n){return g.a.createElement("span",null,t.confirmed?g.a.createElement("span",null,g.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1442)})," ",Object(w.c)("full_node_version_confirmed")):g.a.createElement("span",null,g.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1443)})," ",Object(w.c)("full_node_version_unconfirmed")))}},{title:r()(t.formatMessage({id:"transactions"})),dataIndex:"nrOfTrx",key:"nrOfTrx",align:"center",render:function(e,t,a){return g.a.createElement(k.c,{value:e})}},{title:r()(t.formatMessage({id:"produced_by"})),dataIndex:"witnessName",key:"witnessName",align:"left",width:"40%",className:"ant_table",render:function(t,a,n){return g.a.createElement(E.a,{address:a.witnessAddress},e.setProducedName(a))}},{title:r()(t.formatMessage({id:"bytes"})),dataIndex:"size",key:"size",align:"center",className:"ant_table",render:function(e,t,a){return g.a.createElement(k.c,{value:e})}}]},e.start="",e.end="",e.state={loading:!1,blocks:[],total:0},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBlocks()}},{key:"componentDidUpdate",value:function(){}},{key:"onDateOk",value:function(e,t){this.start=e.valueOf(),this.end=t.valueOf();var a=this.state,n=a.page,r=a.pageSize;this.loadBlocks(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.blocks,n=t.total,r=t.rangeTotal,o=t.loading,i=(t.page,t.pageSize,this.props),l=(i.match,i.intl,this.customizedColumn());return g.a.createElement("main",{className:"container header-overlap pb-3 token_black"},o&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(j.b,null)),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 table_pos"},n?g.a.createElement(C.a,{total:n,rangeTotal:r,isQuestionMark:!1,typeText:"block_unit"}):"",g.a.createElement(y.a,{bordered:!0,loading:o,column:l,data:a,total:n,onPageChange:function(t,a){e.loadBlocks(t,a)}}))))}}]),t}(g.a.Component));var x={loadTokens:v.b};t.default=Object(O.connect)(function(e){return{}},x)(Object(k.h)(T))}}]);