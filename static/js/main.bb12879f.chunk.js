(this["webpackJsonpreact-base"]=this["webpackJsonpreact-base"]||[]).push([[0],{13:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__qyaub",BreadTop:"BurgerIngredient_BreadTop__1jYvp",Seeds1:"BurgerIngredient_Seeds1__3ldr8",Seeds2:"BurgerIngredient_Seeds2__3LazN",Meat:"BurgerIngredient_Meat__1Z-Y8",Cheese:"BurgerIngredient_Cheese__CFrj1",Salad:"BurgerIngredient_Salad__3ZzAY",Bacon:"BurgerIngredient_Bacon__2DsNC"}},15:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1mZFU",Open:"SideDrawer_Open__6HhyH",Close:"SideDrawer_Close__2mmv3",Logo:"SideDrawer_Logo__2LV9G"}},16:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__2uo2A",Input:"ContactData_Input__XN4kF"}},19:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__12FiT",Label:"BuildControl_Label__Vgh1h",Less:"BuildControl_Less__1npxT",More:"BuildControl_More__3la12"}},22:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1_J7O",Logo:"Toolbar_Logo__W4AGs",DesktopOnly:"Toolbar_DesktopOnly__EKKSC"}},25:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__HYLkT",active:"NavigationItem_active__1STAs"}},28:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3uZ4X",OrderButton:"BuildControls_OrderButton__2zRI1",enable:"BuildControls_enable__F7XnP"}},29:function(e,t,n){e.exports={Button:"Button_Button__1ETmV",Success:"Button_Success__11GJa",Danger:"Button_Danger__VTSZU"}},30:function(e,t,n){e.exports={CheckoutSummary:"CheckouSummary_CheckoutSummary__IhULv",Title:"CheckouSummary_Title__5tVKh"}},41:function(e,t,n){e.exports={Content:"Layout_Content__251Ek"}},42:function(e,t,n){e.exports={Logo:"Logo_Logo__1NErK"}},43:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1c2u4"}},45:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1ayL3"}},46:function(e,t,n){e.exports={Backdrop:"Bachdrop_Backdrop__1uTXf"}},47:function(e,t,n){e.exports={Burger:"Burger_Burger__hnfnK"}},48:function(e,t,n){e.exports={Modal:"Modal_Modal__28z3E"}},49:function(e,t,n){e.exports={Loader:"Spinner_Loader__2RZXc",load2:"Spinner_load2__2-Y8h"}},52:function(e,t,n){e.exports={Order:"Order_Order__1CizV"}},58:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(40),s=n.n(c),i=(n(58),n(2)),o=n(7),d=n(8),l=n(10),u=n(9),j=function(e){return e.children},h=n(41),b=n.n(h),p=n(22),O=n.n(p),g=n.p+"static/media/burger-logo.ec69c7f6.png",x=n(42),m=n.n(x),_=n(0),f=function(e){return Object(_.jsx)("div",{className:m.a.Logo,style:{height:e.height},children:Object(_.jsx)("img",{src:g,alt:"burgerLogo"})})},v=n(43),C=n.n(v),y=n(20),k=n(25),N=n.n(k),S=function(e){return Object(_.jsx)("li",{className:N.a.NavigationItem,children:Object(_.jsx)(y.b,{to:e.link,exact:e.exact,activeClassName:N.a.active,children:e.children})})},B=function(){return Object(_.jsxs)("ul",{className:C.a.NavigationItems,children:[Object(_.jsx)(S,{link:"/",exact:!0,children:"Burger Builder"}),Object(_.jsx)(S,{link:"/orders",children:"Orders"})]})},w=n(45),D=n.n(w),T=function(e){return Object(_.jsxs)("div",{className:D.a.DrawerToggle,onClick:e.clicked,children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})},I=function(e){return Object(_.jsxs)("header",{className:O.a.Toolbar,children:[Object(_.jsx)(T,{clicked:e.drawerToggle}),Object(_.jsx)("div",{className:O.a.Logo,children:Object(_.jsx)(f,{})}),Object(_.jsx)("nav",{className:O.a.DesktopOnly,children:Object(_.jsx)(B,{})})]})},L=n(15),H=n.n(L),P=n(46),M=n.n(P),A=function(e){return e.show?Object(_.jsx)("div",{className:M.a.Backdrop,onClick:e.close}):null},E=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),Object(_.jsxs)(j,{children:[Object(_.jsx)(A,{show:e.open,close:e.drawerClose}),Object(_.jsxs)("div",{className:t.join(" "),children:[Object(_.jsx)("div",{className:H.a.Logo,children:Object(_.jsx)(f,{})}),Object(_.jsx)("nav",{children:Object(_.jsx)(B,{})})]})]})},F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(j,{children:[Object(_.jsx)(I,{drawerToggle:this.sideDrawerToggleHandler}),Object(_.jsx)(E,{open:this.state.showSideDrawer,drawerClose:this.sideDrawerClosedHandler}),Object(_.jsx)("main",{className:b.a.Content,children:this.props.children})]})}}]),n}(r.Component),R=n(12),Y=n(53),U=n(47),z=n.n(U),K=n(13),V=n.n(K),Z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(_.jsx)("div",{className:V.a.BreadBottom});break;case"bread-top":e=Object(_.jsxs)("div",{className:V.a.BreadTop,children:[Object(_.jsx)("div",{className:V.a.Seeds1}),Object(_.jsx)("div",{className:V.a.Seeds2})]});break;case"meat":e=Object(_.jsx)("div",{className:V.a.Meat});break;case"cheese":e=Object(_.jsx)("div",{className:V.a.Cheese});break;case"salad":e=Object(_.jsx)("div",{className:V.a.Salad});break;case"bacon":e=Object(_.jsx)("div",{className:V.a.Bacon});break;default:e=null}return e}}]),n}(r.Component),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(Y.a)(Array(e.ingredients[t])).map((function(e,n){return Object(_.jsx)(Z,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(_.jsx)("p",{children:"Please start adding ingredients"})),Object(_.jsxs)("div",{className:z.a.Burger,children:[Object(_.jsx)(Z,{type:"bread-top"}),t,Object(_.jsx)(Z,{type:"bread-bottom"})]})},J=n(19),G=n.n(J),W=function(e){return Object(_.jsxs)("div",{className:G.a.BuildControl,children:[Object(_.jsxs)("div",{className:G.a.Label,children:[" ",e.label]}),Object(_.jsx)("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(_.jsx)("button",{className:G.a.More,onClick:e.added,children:"More"})]})},q=n(28),Q=n.n(q),$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return Object(_.jsxs)("div",{className:Q.a.BuildControls,children:[Object(_.jsxs)("p",{children:["Current price: ",Object(_.jsx)("strong",{children:e.price.toFixed(2)})]}),$.map((function(t){return Object(_.jsx)(W,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(_.jsx)("button",{className:Q.a.OrderButton,disabled:!e.purchase,onClick:e.ordered,children:"ORDER NOW"})]})},te=n(48),ne=n.n(te),re=function(e){return Object(_.jsxs)(j,{children:[Object(_.jsx)(A,{show:e.show,close:e.modalClose}),Object(_.jsx)("div",{className:ne.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},ae=n(29),ce=n.n(ae),se=function(e){return Object(_.jsx)("button",{className:[ce.a.Button,ce.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ie=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(_.jsxs)("li",{children:[Object(_.jsxs)("span",{style:{textDecoration:"capitalize"},children:[t,":"]})," ",e.ingredients[t]]},t)}));return Object(_.jsxs)(j,{children:[Object(_.jsx)("h3",{children:"Your Order"}),Object(_.jsx)("p",{children:"Burger with following ingredients:"}),Object(_.jsx)("ul",{children:t}),Object(_.jsx)("p",{children:Object(_.jsxs)("strong",{children:["Total Price: ",e.price.toFixed(2)]})}),Object(_.jsx)("p",{children:"Continue to Checkout?"}),Object(_.jsx)(se,{btnType:"Danger",clicked:e.purchaseCancelled,children:"CANCEL"}),Object(_.jsx)(se,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},oe=n(49),de=n.n(oe),le=function(){return Object(_.jsx)("div",{className:de.a.Loader,children:"Loading..."})},ue={salad:.5,cheese:.4,meat:1.3,bacon:.7},je=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:1,bacon:1,cheese:1,meat:1},totalPrice:4,purchaseable:!0,purchasing:!1,loading:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(R.a)({},e.state.ingredients);r[t]=n;var a=ue[t],c=e.state.totalPrice+a;e.setState({totalPrice:c,ingredients:r}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var r=n-1,a=Object(R.a)({},e.state.ingredients);a[t]=r;var c=ue[t],s=e.state.totalPrice-c;e.setState({totalPrice:s,ingredients:a}),e.updatePurchaseState(a)}},e.purchaseHandler=function(){e.setState((function(){return{purchasing:!e.state.purchasing}}))},e.purchaseContinueHandler=function(){var t=[];for(var n in e.state.ingredients)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e.state.ingredients[n]));t.push("price="+e.state.totalPrice);var r=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+r})},e}return Object(d.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(R.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=Object(_.jsx)(ie,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseHandler,purchaseContinued:this.purchaseContinueHandler});return this.state.loading&&(n=Object(_.jsx)(le,{})),Object(_.jsxs)(j,{children:[Object(_.jsx)(re,{show:this.state.purchasing,modalClose:this.purchaseHandler,children:n}),Object(_.jsx)(X,{ingredients:this.state.ingredients}),Object(_.jsx)(ee,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchase:this.state.purchaseable,price:this.state.totalPrice,ordered:this.purchaseHandler})]})}}]),n}(r.Component),he=n(50),be=n(30),pe=n.n(be),Oe=function(e){return Object(_.jsxs)("div",{className:pe.a.CheckoutSummary,children:[Object(_.jsx)("h1",{className:pe.a.Title,children:"we find you"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(X,{ingredients:e.ingredients}),Object(_.jsx)(se,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(_.jsx)(se,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})]})},ge=n(51),xe=n.n(ge).a.create({baseURL:"https://burgerbuilder-104c8-default-rtdb.firebaseio.com/"}),me=n(16),_e=n.n(me),fe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:"",address:{street:"",postalCode:""},loading:!1},e.orderHandler=function(){e.setState({loading:!0});var t={ingredients:e.props.ingredients,price:e.props.price,customer:{name:"Taka Toka",address:{street:"Sovet 2",zipCode:"123412",country:"Kyrgyzstan"},email:"test@mail.com"},deliveryMethod:"fastest"};xe.post("/orders.json",t).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){return e.setState({loading:!1})}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object(_.jsxs)("form",{children:[Object(_.jsx)("input",{className:_e.a.Input,type:"text",name:"name",placeholder:"Your name"}),Object(_.jsx)("input",{className:_e.a.Input,type:"email",name:"email",placeholder:"Your email"}),Object(_.jsx)("input",{className:_e.a.Input,type:"text",name:"street",placeholder:"Your street"}),Object(_.jsx)("input",{className:_e.a.Input,type:"text",name:"postal",placeholder:"Your postal"})]});return this.state.loading&&(e=Object(_.jsx)(le,{})),Object(_.jsxs)("div",{className:_e.a.ContactData,children:[Object(_.jsx)("h4",{children:"Enter your Contact Data"}),e,Object(_.jsx)(se,{btnType:"Success",clicked:this.orderHandler,children:"ORDER"})]})}}]),n}(r.Component),ve=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:null,totalPrice:0},e.checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.push("/checkout/contact-data")},e}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),n={},r=0,a=Object(he.a)(t.entries());try{for(a.s();!(e=a.n()).done;){var c=e.value;"price"===c[0]?r=c[1]:n[c[0]]=+c[1]}}catch(s){a.e(s)}finally{a.f()}this.setState({ingredients:n,totalPrice:r})}},{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{children:[Object(_.jsx)(Oe,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(_.jsx)(i.a,{path:this.props.match.path+"/contact-data",render:function(t){return Object(_.jsx)(fe,Object(R.a)({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}})]})}}]),n}(r.Component),Ce=n(52),ye=n.n(Ce),ke=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return Object(_.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(_.jsxs)("div",{className:ye.a.Order,children:[Object(_.jsxs)("p",{children:["ingredients: ",r]}),Object(_.jsxs)("p",{children:["Price: ",Object(_.jsxs)("strong",{children:["USD ",Number.parseFloat(e.price)]})]})]})},Ne=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={orders:[],loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;xe.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(Object(R.a)(Object(R.a)({},t.data[r]),{},{id:r}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(_.jsx)("div",{children:this.state.orders.map((function(e){return Object(_.jsx)(ke,{ingredients:e.ingredients,price:e.price},e.id)}))})}}]),n}(r.Component);var Se=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(F,{children:Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{path:"/",exact:!0,component:je}),Object(_.jsx)(i.a,{path:"/orders",component:Ne}),Object(_.jsx)(i.a,{path:"/checkout",component:ve})]})})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(_.jsx)(y.a,{children:Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(Se,{})})}),document.getElementById("root")),Be()}},[[83,1,2]]]);
//# sourceMappingURL=main.bb12879f.chunk.js.map