(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[112],{1252:function(e,t,a){},2055:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(14),r=a(16),c=a(15),s=a(0),u=a.n(s),o=a(801),m=a(1081),i=a(1082),p=a(169),h=a(94),d=a(1083),E=a(1084),v=a(1085),f=a(1086),g=a(171),b=a(1127),C=a(969),y=["value","dragging","index"],k=(0,C.a.createSliderWithTooltip)(C.a.Range),j=C.a.Handle,O=function(e){var t=e.value,a=e.dragging,n=e.index,l=Object(h.a)(e,y);return u.a.createElement(b.a,{prefixCls:"rc-slider-tooltip",overlay:t,visible:a,placement:"top",key:n},u.a.createElement(j,Object.assign({value:t},l)))},S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:20},e.onSliderChange=function(t){e.setState({value:t})},e.resetSlider=function(){e.setState({value:null})},e}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(E.a,null,u.a.createElement(v.a,null,"Sliders")),u.a.createElement(f.a,null,u.a.createElement("h5",{className:"my-1"},"Default"),u.a.createElement(C.a,{min:0,max:20,defaultValue:3,handle:O,reverse:"rtl"===this.props.rtl,tipProps:{prefixCls:"rc-slider-tooltip"}}),u.a.createElement("h5",{className:"mt-3"},"Fixed Values"),u.a.createElement(C.a,{min:20,defaultValue:20,marks:{20:20,40:40,60:60,100:100},step:null,reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"mt-3"},"Custom Tooltip"),u.a.createElement(k,{min:0,max:20,defaultValue:[3,10],tipFormatter:function(e){return"".concat(e,"%")},reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"mt-3"},"Disabled Slider"),u.a.createElement(C.a,{reverse:"rtl"===this.props.rtl,disabled:!0}),u.a.createElement("h5",{className:"mt-3"},"Reset Button"),u.a.createElement(C.a,{value:this.state.value,onChange:this.onSliderChange,onAfterChange:this.onAfterChange,reverse:"rtl"===this.props.rtl}),u.a.createElement(g.a.Ripple,{color:"primary",onClick:this.resetSlider,className:"mt-1"},"Reset")))}}]),a}(u.a.Component),x={"-10":"-10\xb0C",0:u.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:u.a.createElement("strong",null,"100\xb0C")}},N=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(E.a,null,u.a.createElement(v.a,null,"Marks")),u.a.createElement(f.a,null,u.a.createElement(C.a,{min:-10,marks:x,step:null,defaultValue:20,className:"pb-2",reverse:"rtl"===this.props.rtl})))}}]),a}(u.a.Component),R=C.a.Range,B=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:[20,40,60,80]},e.handleControlledRange=function(t){e.setState({value:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(E.a,null,u.a.createElement(v.a,null,"Range")),u.a.createElement(f.a,null,u.a.createElement("h5",{className:"my-2"},"Basic Range"),u.a.createElement(R,{defaultValue:[0,20],reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"my-2"},"Range With Steps"),u.a.createElement(R,{defaultValue:[0,20],step:20,reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"my-2"},"Range With Steps And Dots"),u.a.createElement(R,{defaultValue:[0,40],step:20,dots:!0,reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"my-2"},"Disabled Range"),u.a.createElement(R,{defaultValue:[0,40],disabled:!0,reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"my-2"},"Multi Range"),u.a.createElement(R,{count:3,defaultValue:[20,40,60,80],reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"my-2"},"Multi Range With Track Colors"),u.a.createElement(R,{count:3,defaultValue:[20,40,60,80],pushable:!0,trackStyle:[{backgroundColor:"#7367F0"},{backgroundColor:"#28C76F"},{backgroundColor:"#EA5455"}],handleStyle:[{backgroundColor:"#7367F0"},{backgroundColor:"#28C76F"},{backgroundColor:"#EA5455"}],railStyle:{backgroundColor:"#f0f0f0"},reverse:"rtl"===this.props.rtl}),u.a.createElement("h5",{className:"my-2"},"Controlled Range"),u.a.createElement(R,{value:this.state.value,onChange:this.handleControlledRange})))}}]),a}(u.a.Component),V=a(802),w=a(794),A=a(792),M=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lowerBound:20,upperBound:40,min:0,max:100,value:[20,100]},e.handleApply=function(){var t=e.state,a=t.lowerBound,n=t.upperBound;e.setState({value:[a,n]})},e.onLowerBoundChange=function(t){e.setState({lowerBound:+t.target.value,value:[+t.target.value,e.state.upperBound]})},e.onUpperBoundChange=function(t){e.setState({upperBound:+t.target.value,value:[e.state.lowerBound,+t.target.value]})},e.onSliderChange=function(t){e.setState({value:t})},e.onMinChange=function(t){e.setState({min:+t.target.value||0})},e.onMaxChange=function(t){e.setState({max:+t.target.value||100})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(d.a,null,u.a.createElement(E.a,null,u.a.createElement(v.a,null,"Dynamic")),u.a.createElement(f.a,null,u.a.createElement(V.a,null,u.a.createElement(w.a,null,"LowerBound:"),u.a.createElement(A.a,{type:"number",value:this.state.lowerBound,onChange:function(t){return e.onLowerBoundChange(t)}})),u.a.createElement(V.a,null,u.a.createElement(w.a,null,"UpperBound:"),u.a.createElement(A.a,{type:"number",value:this.state.upperBound,onChange:function(t){return e.onUpperBoundChange(t)}})),u.a.createElement(V.a,null,u.a.createElement(w.a,null,"Min:"),u.a.createElement(A.a,{type:"number",value:this.state.min,onChange:function(t){return e.onMinChange(t)}})),u.a.createElement(V.a,null,u.a.createElement(w.a,null,"Max:"),u.a.createElement(A.a,{type:"number",value:this.state.max,onChange:function(t){return e.onMaxChange(t)}})),u.a.createElement(C.a.Range,{value:this.state.value,min:this.state.min,max:this.state.max,onChange:function(t){return e.onSliderChange(e.state.value)},reverse:"rtl"===this.props.rtl})))}}]),a}(u.a.Component),F={"-10":"-10\xb0C",0:u.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:u.a.createElement("strong",null,"100\xb0C")}},T={float:"left",width:200,height:400,marginLeft:10,marginTop:10,display:"flex",flexDirection:"column",alignItems:"center"},D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(E.a,null,u.a.createElement(v.a,null,"Vertical")),u.a.createElement(f.a,null,u.a.createElement(m.a,null,u.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},u.a.createElement("div",{style:T},u.a.createElement("h5",{className:"my-1"},"Basic Vertical"),u.a.createElement(C.a,{vertical:!0,min:-10,marks:F,step:null,defaultValue:20,reverse:"rtl"===this.props.rtl}))),u.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},u.a.createElement("div",{style:T},u.a.createElement("h5",{className:"my-1"}," Steps And Marks"),u.a.createElement(C.a,{vertical:!0,dots:!0,min:-10,marks:F,step:10,defaultValue:20,reverse:"rtl"===this.props.rtl}))),u.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},u.a.createElement("div",{style:T},u.a.createElement("h5",{className:"my-1"},"Vertical Range"),u.a.createElement(C.a.Range,{vertical:!0,min:-10,marks:F,defaultValue:[20,40],reverse:"rtl"===this.props.rtl}))),u.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},u.a.createElement("div",{style:T},u.a.createElement("h5",{className:"my-1"}," Range Steps And Marks"),u.a.createElement(C.a.Range,{vertical:!0,min:-10,marks:F,step:10,defaultValue:[20,40],reverse:"rtl"===this.props.rtl}))))))}}]),a}(u.a.Component),L=(a(1251),a(1252),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(o.a,{title:"Rc Slider",subTitle:"Slider UI component for React",link:"https://github.com/react-component/slider/"}),u.a.createElement(p.a.Consumer,null,(function(e){return u.a.createElement(m.a,null,u.a.createElement(i.a,{sm:"12"},u.a.createElement(S,{rtl:e.state.direction})),u.a.createElement(i.a,{sm:"12"},u.a.createElement(N,{rtl:e.state.direction})),u.a.createElement(i.a,{sm:"12"},u.a.createElement(B,{rtl:e.state.direction})),u.a.createElement(i.a,{sm:"12"},u.a.createElement(D,{rtl:e.state.direction})),u.a.createElement(i.a,{sm:"12"},u.a.createElement(M,{rtl:e.state.direction})))})))}}]),a}(u.a.Component));t.default=L},801:function(e,t,a){"use strict";var n=a(13),l=a(14),r=a(16),c=a(15),s=a(0),u=a.n(s),o=a(1081),m=a(1082),i=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(o.a,{className:"mb-2"},u.a.createElement(m.a,{sm:"12",className:"ml-50"},u.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?u.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):u.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(u.a.Component);t.a=i}}]);
//# sourceMappingURL=112.668d0353.chunk.js.map