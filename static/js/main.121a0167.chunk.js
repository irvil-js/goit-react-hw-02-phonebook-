(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"ContactList_list__1ysH9",item:"ContactList_item__10N-n",name:"ContactList_name__malbC",number:"ContactList_number__NvLfb",button:"ContactList_button__3CsvS"}},function(t,e,n){t.exports={label:"ContactForm_label__3VglD",input:"ContactForm_input__3DiKU",button:"ContactForm_button__2oAr7"}},,,,,,,function(t,e,n){t.exports={section:"Section_section__2FLTB",title:"Section_title__2VnS8"}},function(t,e,n){t.exports={label:"Filter_label__2bwo9",input:"Filter_input__385QQ"}},,,function(t,e,n){t.exports={wrapper:"App_wrapper__-wKzb"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),s=n(15),o=n(4),l=n(5),u=n(8),b=n(7),m=n(10),d=n.n(m),j=n(0),h=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:d.a.section,children:[Object(j.jsx)("h2",{className:d.a.title,children:e}),n]})},p=h;h.defaultProps={title:"New section"};var f=n(13),_=n(6),C=n(25),O=n(3),v=n.n(O),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=Object(C.a)();t.props.onSubmit(Object(f.a)({id:n},t.state)),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleSubmit,c=this.handleChange;return Object(j.jsxs)("form",{onSubmit:a,children:[Object(j.jsxs)("label",{className:v.a.label,children:["Name",Object(j.jsx)("input",{className:v.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:c})]}),Object(j.jsxs)("label",{className:v.a.label,children:["Number",Object(j.jsx)("input",{className:v.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:c})]}),Object(j.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(2),N=n.n(g),S=function(t){var e=t.id,n=t.name,a=t.number,c=t.onClick;return Object(j.jsxs)("li",{className:N.a.item,children:[Object(j.jsx)("p",{className:N.a.name,children:n}),Object(j.jsx)("p",{className:N.a.number,children:a}),Object(j.jsx)("button",{className:N.a.button,type:"button",onClick:function(){return c(e)},children:"Delete"})]})},y=function(t){var e=t.contacts,n=t.onClick;return Object(j.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)(S,{name:a,number:c,onClick:n,id:e},e)}))})},w=n(11),k=n.n(w),A=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:k.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:k.a.input,type:"text",value:e,onChange:n})]})},F=n(14),L=n.n(F),z=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=t.state.contacts,a=e.name;n.map((function(t){return t.name})).includes(a)?alert("".concat(a," is already in contacts")):t.setState((function(t){return{contacts:[e].concat(Object(s.a)(t.contacts))}}))},t.onChangeFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.formSubmitHandler,n=this.onChangeFilter,a=this.deleteContact,c=(0,this.filterContacts)();return Object(j.jsxs)("div",{className:L.a.wrapper,children:[Object(j.jsx)(p,{title:"Phonebook",children:Object(j.jsx)(x,{onSubmit:e})}),Object(j.jsxs)(p,{title:"Contacts",children:[Object(j.jsx)(A,{value:t,onChange:n}),Object(j.jsx)(y,{contacts:c,onClick:a})]})]})}}]),n}(a.Component);n(21),n(22);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"));var D=c.a.createElement("a",{href:"reactjs.org"},"Ssylka");console.log(D)}],[[23,1,2]]]);
//# sourceMappingURL=main.121a0167.chunk.js.map