(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkoutMedicine"],{"0b42":function(t,e,i){var r=i("e8b5"),n=i("68ee"),s=i("861d"),c=i("b622"),a=c("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,n(e)&&(e===Array||r(e.prototype))?e=void 0:s(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"1c58":function(t,e,i){},5260:function(t,e,i){"use strict";i("1c58")},"658e":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("MedicineTitle",{attrs:{titleText:"Checkout"}}),t._l(t.address,(function(e,r){return i("div",{key:r},[i("h6",[t._v("Shipping Address")]),i("p",[t._v(t._s(e.shippingAddress))])])})),i("div",{staticClass:"order-detail"},t._l(t.cart,(function(t,e){return i("van-card",{key:e,attrs:{num:t.quantity,price:t.price,desc:t.medicineDescription,title:t.medicineName,thumb:"https://img01.yzcdn.cn/vant/ipad.jpeg"}})})),1),i("van-submit-bar",{attrs:{price:this.price,"button-text":"Submit Order",currency:"$"},on:{submit:t.submit}}),i("button",{staticClass:"trigger",attrs:{type:"submit"},on:{click:t.submitForm}})],2)},n=[],s=(i("7db0"),i("eb66")),c=i("bc3a"),a=i.n(c),u=i("4328"),o=i.n(u),d={name:"checkoutMedicine",components:{MedicineTitle:s["a"]},data:function(){return{cart:{},price:"",address:{},productSubmit:[]}},methods:{submit:function(){this.submitForm()},submitForm:function(){this.submitMedicineOrder()},submitMedicineOrder:function(){for(var t=this.cart,e={},i=[],r=0;r<t.length;r++)e.medicineName=t[r].medicineName,e.quantity=t[r].quantity,i.push(e),e={};var n=JSON.stringify({subtotal:this.price/100,shippingAddress:this.address[0].shippingAddress,medicines:i});a()({method:"post",url:"http://deco.logfox.xyz/servlet_project/createMedicineOrderServlet",data:o.a.stringify(n)}),this.$router.push({path:"/checkoutCompleted"})}},created:function(){this.cart=this.$store.state.cart,this.price=this.$store.state.totalPrice,this.address=this.$store.state.customerAddress.data.find((function(t){return!0===t.defaultAddress}))}},f=d,p=(i("5260"),i("2877")),h=Object(p["a"])(f,r,n,!1,null,"357e13ca",null);e["default"]=h.exports},"65f0":function(t,e,i){var r=i("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"7db0":function(t,e,i){"use strict";var r=i("23e7"),n=i("b727").find,s=i("44d2"),c="find",a=!0;c in[]&&Array(1)[c]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(c)},b727:function(t,e,i){var r=i("0366"),n=i("44ad"),s=i("7b0b"),c=i("07fa"),a=i("65f0"),u=[].push,o=function(t){var e=1==t,i=2==t,o=3==t,d=4==t,f=6==t,p=7==t,h=5==t||f;return function(l,m,b,v){for(var y,g,A=s(l),x=n(A),k=r(m,b,3),w=c(x),_=0,M=v||a,O=e?M(l,w):i||p?M(l,0):void 0;w>_;_++)if((h||_ in x)&&(y=x[_],g=k(y,_,A),t))if(e)O[_]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:u.call(O,y)}else switch(t){case 4:return!1;case 7:u.call(O,y)}return f?-1:o||d?d:O}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6),filterReject:o(7)}},e8b5:function(t,e,i){var r=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=checkoutMedicine.ad8a4bfb.js.map