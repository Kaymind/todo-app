(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{14:function(e,t,o){e.exports=o(28)},19:function(e,t,o){},20:function(e,t,o){},28:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(10),l=o.n(c),r=(o(19),o(20),o(1)),d=o(3),u=o(4),i=o(11),m=o.n(i),s=Object(n.createContext)(),p=function(e){Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos"));e&&f(e)}),[]);var t=Object(n.useState)(null),o=Object(d.a)(t,2),c=o[0],l=o[1],r=Object(n.useState)([]),i=Object(d.a)(r,2),p=i[0],f=i[1];return a.a.createElement(s.Provider,{value:{todos:p,addTodo:function(e,t){var o=[].concat(Object(u.a)(p),[{text:e,complete:!1,id:m()()}]);f(o),localStorage.setItem("todos",JSON.stringify(o))},doneTodo:function(e){var t=Object(u.a)(p),o=t.find((function(t){return t.id===e}));o.complete=!o.complete,f(t),localStorage.setItem("todos",JSON.stringify(t))},removeTodo:function(e){var t=p.filter((function(t){return t.id!==e}));f(t),localStorage.setItem("todos",JSON.stringify(t))},updateTodo:function(e){l(e)},alterTodo:function(e,t){var o=Object(u.a)(p);o.find((function(e){return e.id===t})).text=e,f(o),l(null),localStorage.setItem("todos",JSON.stringify(o))},editTodo:c}},e.children)},f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),o=t[0],c=t[1],l=Object(n.useContext)(s),r=l.addTodo,u=l.editTodo,i=l.alterTodo;return Object(n.useEffect)((function(){null!==u&&c(u.text)}),[u]),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"input-group col-md-6 row"},a.a.createElement("label",{htmlFor:"todoInput",className:"col-md-2"},"Todo:"," "),a.a.createElement("input",{type:"text",id:"todoInput",className:"col-md-10",placeholder:"Enter what you want to do here...",value:o,onChange:function(e){return c(e.target.value)}})),a.a.createElement("div",{className:"input-group col-md-6"},a.a.createElement("button",{onClick:function(){null!==u?(i(o,u.id),c("")):""!==o&&(r(o),c(""))}},null!==u?"EDIT":"ADD")))},E=function(e){var t=e.todo,o=Object(n.useContext)(s),c=o.removeTodo,l=o.updateTodo,d=o.doneTodo;return a.a.createElement("tr",null,a.a.createElement("td",{style:{width:"50%"}},a.a.createElement("span",{className:t.complete?"todo-marked":""},t.text)),a.a.createElement("td",{style:{width:"50%"}},!t.complete&&a.a.createElement(r.b,{className:"btn",to:"",onClick:function(){return d(t.id)}},"Done"),!t.complete&&a.a.createElement("span",null,"|"),!t.complete&&a.a.createElement(r.b,{to:"",className:"btn",onClick:function(){return l(t)}},"Edit"),!t.complete&&a.a.createElement("span",null,"|"),a.a.createElement(r.b,{to:"",className:"btn",onClick:function(){return c(t.id)}},"Remove")))},b=function(){var e=Object(n.useContext)(s),t=e.todos;e.addTodo,e.removeTodo,e.updateTodo,e.doneTodo;return t.length?a.a.createElement("table",{className:"table table-bordered my-2"},a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement(E,{key:e.id,todo:e})})))):a.a.createElement("div",{className:"my-2"},"No Todo...")},v=function(){return a.a.createElement("div",{className:"App container p-4"},a.a.createElement(r.a,null,a.a.createElement(p,null,a.a.createElement(f,null),a.a.createElement(b,null))))};l.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0e11104f.chunk.js.map