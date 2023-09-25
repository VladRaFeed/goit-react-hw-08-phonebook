"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[823],{7823:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var s="Form_form_section__yOf8f",a="Form_form_title__X60Vy",r="Form_main_form__WSp0k",c="Form_form_label__P+0MD",i="Form_form_input__Z9luk",o="Form_from_btn__4qQkk",l=n(3855),_=n(6136),m=n(9394),u=n(3402),d=n(3329);function h(){var e=(0,l.I0)(),t=(0,l.v9)(m.Af);return(0,d.jsxs)("section",{className:s,children:[(0,d.jsx)("h1",{className:a,children:"Phonebook"}),(0,d.jsxs)("form",{className:r,onSubmit:function(n){n.preventDefault();var s=n.target,a={name:s.elements.name.value,number:s.elements.number.value};if(t.find((function(e){return e.name.toLowerCase().trim()===a.name.toLowerCase().trim()})))return u.ZP.error("this name already in list");u.ZP.success("Contact added to your list"),e((0,_.uK)(a)),s.reset()},children:[(0,d.jsx)("label",{className:c,children:"Name"}),(0,d.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Contact-name",required:!0}),(0,d.jsx)("label",{className:c,children:"Phone number"}),(0,d.jsx)("input",{className:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Phone-number",required:!0}),(0,d.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})]})}var p="ContactsList_contacts_section__XsrtE",f="ContactsList_contacts_title__uFI7H",x="ContactsList_contacts_list__G9kNw",b="ContactsList_contact_item__fr5Np",j="ContactsList_contact_name__ihiMv",N="ContactsList_contact_delete__nDgEI",C=function(){return(0,d.jsx)("h1",{children:"LOADING..."})},v=n(2791),F=function(){var e=(0,l.I0)(),t=(0,l.v9)(m.xU),n=(0,l.v9)(m.hF);return(0,v.useEffect)((function(){e((0,_.yF)())}),[e]),(0,d.jsxs)("section",{className:p,children:[t&&(0,d.jsx)(C,{}),(0,d.jsx)("h2",{className:f,children:"Contacts"}),(0,d.jsx)("ul",{className:x,children:n.map((function(t){return(0,d.jsxs)("li",{className:b,children:[(0,d.jsxs)("p",{className:j,children:[t.name,": ",t.number]}),(0,d.jsx)("button",{type:"button",onClick:function(){e((0,_.GK)(t.id)),u.ZP.success("Contact delete on your list")},className:N,children:"Delete"})]},t.id)}))})]})},k="Filter_filter_wrapper__wbaT1",y="Filter_filter_label__5ITod",w="Filter_filter_input__eu2zm",L=n(2253),g=function(){var e=(0,l.I0)();return(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)("label",{className:y,children:"Filter"}),(0,d.jsx)("input",{type:"text",onChange:function(t){e((0,L.b)(t.currentTarget.value))},className:w,placeholder:"example: Rosie"})]})},A="Contacts_section_wrapper__TI6CZ";function I(){return(0,d.jsx)("main",{children:(0,d.jsxs)("section",{className:A,children:[(0,d.jsx)(h,{}),(0,d.jsx)(g,{}),(0,d.jsx)(F,{})]})})}}}]);
//# sourceMappingURL=823.287d94b8.chunk.js.map