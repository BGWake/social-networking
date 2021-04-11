(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"grey lighten-4"},[s("div",{attrs:{id:"app"}},[s("div",{staticClass:"body"},[s("header-section"),s("router-view")],1)])])},o=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("v-app-bar",{attrs:{fixed:""}},[s("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),s("router-link",{staticClass:"home",attrs:{text:"",router:"",to:{name:"home"}}},[s("h1",[s("v-toolbar-title",{staticClass:"text-uppercase home"},[e._v(" The Social Node ")])],1)]),s("v-spacer"),s("v-btn",{directives:[{name:"show",rawName:"v-show",value:""!=e.currentUser,expression:"currentUser != ''"}],attrs:{id:"logout"},on:{click:e.logout}},[e._v(" logout ")])],1),s("v-navigation-drawer",{staticClass:"lighten-5",attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[s("ul",[s("li",[s("router-link",{staticClass:"links lighten-4",staticStyle:{color:"black"},attrs:{text:"",to:{name:"your-feed"}}},[s("span",{staticClass:"links"},[e._v("Your Node")])]),s("u",{staticClass:"ma-3"},[e._v("Follow the Community")]),s("router-link",{key:e.$route.fullPath,staticClass:"links lighten-4",staticStyle:{color:"black"},attrs:{text:"",to:"/feed/"+e.clickedUser}},e._l(e.allUsers,(function(t){return s("span",{directives:[{name:"show",rawName:"v-show",value:t.username!=e.currentUser,expression:"user.username != currentUser"}],key:t.username,staticClass:"links lighten-4",staticStyle:{color:"black"},on:{click:function(s){return e.storeUser(t.username)}}},[e._v(" "+e._s(t.username)+"'s Node ")])})),0)],1)])])],1)},i=[],l=s("bc3a"),c=s.n(l),u="https://the-social-node.herokuapp.com",d={register:function(e){return c.a.post("".concat(u,"/register"),e)},login:function(e){return c.a.post("".concat(u,"/login"),e)},logout:function(e){return c.a.post("".concat(u,"/logoutUser"),e)}},m="https://the-social-node.herokuapp.com",p={getPostsByUsername:function(e){return c.a.get("".concat(m,"/post/").concat(e))},createPost:function(e){return c.a.post("".concat(m,"/post/save"),e)},getAllUsers:function(){return c.a.get("".concat(m,"/user/all"))},follow:function(e){return c.a.post("".concat(m,"/follow"),e)},getRelevantPosts:function(e){return c.a.get("".concat(m,"/posts/").concat(e))},updateRelevantPosts:function(e){return c.a.put("".concat(m,"/post/all/save"),e)},getFollowing:function(e){return c.a.get("".concat(m,"/following/").concat(e))}},h={data:function(){return{drawer:!1,logOutButton:[{name:"Log Out",route:"logout"}],navLinks:[{name:"Your Feed",route:"your-feed"}],allUsers:[],currentUser:"",clickedUser:"",posts:[]}},watch:{"$route.path":function(e,t){e!==t&&this.renderComponent()}},methods:{renderComponent:function(){var e=this;this.currentUser=this.$store.state.loggedInUsername,p.getAllUsers().then((function(t){e.allUsers=t.data,e.$store.commit("STORE_ALL_USERS",e.allUsers)})).catch((function(e){console.error(e+" errors")}))},logout:function(){var e=this;this.posts=this.$store.state.postsInCaseOfLogOut,p.updateRelevantPosts(this.posts);var t={username:"",following:""};d.logout(this.currentUser).then((function(s){201==s.status&&"/"!=e.$route.path?(e.$store.commit("SET_LOGGED_IN_USER",t),e.$router.push("/")):201==s.status&&"/"==e.$route.path?(e.currentUser="",e.$store.commit("SET_LOGGED_IN_USER",t),e.renderComponent):(console.error(s+" errors"),e.renderComponent)})).catch((function(e){console.error(e+" errors")}))},storeUser:function(e){this.clickedUser=e,this.$store.commit("STORE_USER",e)}},mounted:function(){this.renderComponent()}},f=h,v=(s("913b"),s("2877")),g=s("6544"),_=s.n(g),b=s("40dc"),w=s("5bc1"),k=s("8336"),y=s("f774"),x=s("2fa4"),U=s("2a7f"),C=Object(v["a"])(f,a,i,!1,null,null,null),O=C.exports;_()(C,{VAppBar:b["a"],VAppBarNavIcon:w["a"],VBtn:k["a"],VNavigationDrawer:y["a"],VSpacer:x["a"],VToolbarTitle:U["a"]});var S={components:{headerSection:O}},I=S,P=(s("034f"),s("7496")),E=Object(v["a"])(I,n,o,!1,null,null,null),$=E.exports;_()(E,{VApp:P["a"]});var T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("br"),s("h1",{staticClass:"home-header ma-4"},[e._v("Welcome to The Social Node")]),s("login")],1)},N=[],R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[s("v-card",{staticClass:"mx-auto pa-4 teal lighten-4",staticStyle:{margin:"30px",width:"50%"},attrs:{outlined:"",elevation:"6"}},[s("h2",[e._v("Log In")]),s("v-spacer"),s("v-form",{staticClass:"ma-2",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("validation-provider",{attrs:{name:"username",rules:"required|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[s("v-text-field",{attrs:{counter:20,"error-messages":r,label:"Username",required:"","prepend-inner-icon":"mdi-account-circle"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})]}}],null,!0)}),s("validation-provider",{attrs:{name:"password",rules:"required|min:4|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[s("v-text-field",{attrs:{counter:20,"error-messages":r,type:"Password",label:"Password",required:"","prepend-inner-icon":"mdi-lock","append-icon":"mdi-eye-off"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})]}}],null,!0)}),s("router-link",{attrs:{to:{name:"register"}}},[e._v("Need an account?")]),s("br"),s("br"),s("div",{staticClass:"text-center",attrs:{id:"login"}},[s("v-btn",{staticClass:"mr-4",attrs:{disabled:r},on:{click:e.login}},[e._v(" submit ")]),s("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)],1)],1)]}}])}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isPasswordIncorrect,expression:"isPasswordIncorrect"}],staticClass:"node-headline"},[e._v(" "+e._s(e.isPasswordIncorrectMsg)+" ")])],1)},A=[],V=s("5530"),L=s("4c93"),j=s("7bb1");Object(j["d"])("eager"),Object(j["c"])("required",Object(V["a"])(Object(V["a"])({},L["c"]),{},{message:"{_field_} can not be empty"})),Object(j["c"])("max",Object(V["a"])(Object(V["a"])({},L["a"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(j["c"])("min",Object(V["a"])(Object(V["a"])({},L["b"]),{},{message:"{_field_} must be at least {length} characters"}));var D={components:{ValidationProvider:j["b"],ValidationObserver:j["a"]},data:function(){return{user:{username:"",password:""},isPasswordIncorrect:!1,isPasswordIncorrectMsg:"Incorrect password or account does not exist. You can register with the 'Need an account?' link."}},methods:{login:function(){var e=this;d.login(this.user).then((function(t){201==t.status&&(e.$store.commit("SET_LOGGED_IN_USER",e.user),e.$router.push("/your-feed"))})).catch((function(t){e.isPasswordIncorrect=!0,console.error(t+" errors")}))},clear:function(){this.user.username="",this.user.password="",this.$refs.observer.reset()}}},F=D,q=s("b0af"),G=s("a523"),Y=s("4bd4"),B=s("8654"),M=Object(v["a"])(F,R,A,!1,null,null,null),K=M.exports;_()(M,{VBtn:k["a"],VCard:q["a"],VContainer:G["a"],VForm:Y["a"],VSpacer:x["a"],VTextField:B["a"]});var H={components:{login:K}},z=H,J=(s("cccb"),Object(v["a"])(z,T,N,!1,null,null,null)),W=J.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("br"),""==e.posts?s("h1",{staticClass:"node-headline"},[e._v(" Hi "+e._s(e.currentUser)+", make your first post below! ")]):e._e(),""==e.posts?s("p",{staticClass:"node-headline"},[e._v(" • You can follow other users to see their posts on your Node. "),s("br"),e._v(" • If you tag a user using '@', your post will post to their Node in addition to yours. For example: \"Hey @bob, I want to introduce you to @steve!\" "),s("br"),e._v(" • Other users will not see the posts of who you follow when they visit your node, only your posts and posts you are tagged in. ")]):s("h1",{staticClass:"node-headline"},[e._v(" Hi "+e._s(e.currentUser)+"! Welcome to your Node. ")]),s("br"),s("v-textarea",{staticClass:"mx-auto ma-2",staticStyle:{margin:"30px",width:"50%"},attrs:{outlined:"",counter:255,label:"Type your post here"},model:{value:e.newPost.content,callback:function(t){e.$set(e.newPost,"content",t)},expression:"newPost.content"}}),s("span",{staticClass:"node-headline"},[s("v-btn",{staticClass:"mx-2",attrs:{type:"submit"},on:{click:e.post}},[e._v(" post ")]),s("v-btn",{staticClass:"mx-2",on:{click:e.clear}},[e._v(" clear ")])],1),e._l(e.posts.slice().reverse(),(function(t){return s("v-card",{key:t.time,staticClass:"mx-auto",staticStyle:{margin:"30px",width:"50%"},attrs:{id:"cards",outlined:"",elevation:"6"},model:{value:t.id,callback:function(s){e.$set(t,"id",s)},expression:"post.id"}},[s("div",{staticClass:"d-flex justify-space-between"},[s("v-card-title",{staticClass:"headline font-weight-bold"},[e._v(" "+e._s(t.username))]),s("v-img",{staticClass:"mt-5 mr-5 rounded-xl",attrs:{"lazy-src":e.findPhoto(t.username),alt:"","max-height":"100","max-width":"100",src:e.findPhoto(t.username)}})],1),s("v-card-subtitle",{staticClass:"mt-n12"},[e._v("posted on "+e._s(t.time.substring(0,10))+" at "+e._s(t.time.substring(11,19)))]),s("v-card-text",{staticClass:"headline"},[e._v('"'+e._s(t.content)+'"')]),""!=e.$store.state.loggedInUsername&&-1!=e.liked.indexOf(t.id)?s("v-card-subtitle",[s("v-icon",{attrs:{color:"red",type:"submit"},on:{click:function(s){return e.likeClick(t)}}},[e._v("mdi-heart ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.likes&&null!=t.likes,expression:"post.likes != '' && post.likes != null"}]},[e._v(" Liked by "+e._s(t.likes))])],1):s("v-card-subtitle",[s("v-icon",{directives:[{name:"show",rawName:"v-show",value:""!=e.$store.state.loggedInUsername,expression:"$store.state.loggedInUsername != ''"}],staticClass:"heart",attrs:{type:"submit"},on:{click:function(s){return e.likeClick(t)}}},[e._v("mdi-heart ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.likes&&null!=t.likes,expression:"post.likes != '' && post.likes != null"}]},[e._v(" Liked by "+e._s(t.likes))])],1)],1)}))],2)},X=[],Z=(s("caad"),s("2532"),{data:function(){return{newPost:{username:"",content:""},currentUser:"",posts:[],liked:[],allUsers:[]}},methods:{getYourRelevantPosts:function(){var e=this;""==this.$store.state.loggedInUsername?this.$router.push("/"):p.getRelevantPosts(this.currentUser).then((function(t){200==t.status?(e.posts=t.data,e.addPostIdsToLikedArrayIfCurrentUserLikesThem(e.posts)):console.error(t+" errors")})).catch((function(e){console.error(e+" errors")}))},addPostIdsToLikedArrayIfCurrentUserLikesThem:function(e){for(var t=0;t<e.length;t++)null!=e[t].likes&&e[t].likes.includes(this.currentUser)&&this.liked.push(e[t].id)},findPhoto:function(e){for(var t=0;t<this.$store.state.allUsers.length;t++)if(this.$store.state.allUsers[t].username===e)return this.$store.state.allUsers[t].profilePic},likeClick:function(e){this.$store.commit("STORE_LIKED_ARRAY",this.liked),this.$store.commit("EDIT_AND_STORE_LIKES_STRING_IN_POST_AND_EDIT_STORED_LIKED_ARRAY",e),this.liked=this.$store.state.liked,this.post=this.$store.state.post,p.updateRelevantPosts(this.posts),this.$store.commit("STORE_POSTS_IN_CASE_OF_LOGOUT",this.posts)},post:function(){var e=this;this.newPost.username=this.currentUser,p.createPost(this.newPost).then((function(t){201==t.status?p.getRelevantPosts(e.currentUser).then((function(t){e.posts=t.data})):console.error(t+" errors")})).catch((function(e){console.error(e+" errors")})),this.clear()},clear:function(){this.newPost.content=""}},mounted:function(){this.currentUser=this.$store.state.loggedInUsername,this.getYourRelevantPosts()}}),ee=Z,te=s("99d9"),se=s("132d"),re=s("adda"),ne=s("a844"),oe=Object(v["a"])(ee,Q,X,!1,null,null,null),ae=oe.exports;_()(oe,{VBtn:k["a"],VCard:q["a"],VCardSubtitle:te["a"],VCardText:te["b"],VCardTitle:te["c"],VContainer:G["a"],VIcon:se["a"],VImg:re["a"],VTextarea:ne["a"]});var ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("br"),""==e.posts?s("h1",{staticClass:"node-headline"},[e._v(" "+e._s(e.userNode)+" hasn't made their first post yet, but you can tag them! ")]):s("h1",{staticClass:"node-headline"},[e._v(e._s(e.userNode)+"'s Node")]),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.$store.state.loggedInUsername,expression:"$store.state.loggedInUsername != ''"}],staticClass:"node-headline"},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.alreadyFollowing,expression:"!alreadyFollowing"}],staticClass:"ma-4",attrs:{type:"submit"},on:{click:e.follow}},[e._v(" follow "+e._s(e.userNode)+" ")])],1),e._l(e.posts.slice().reverse(),(function(t){return s("v-card",{key:t.time,staticClass:"mx-auto",staticStyle:{margin:"30px",width:"50%"},attrs:{id:"cards",outlined:"",elevation:"6"},model:{value:t.id,callback:function(s){e.$set(t,"id",s)},expression:"post.id"}},[s("div",{staticClass:"d-flex justify-space-between"},[s("v-card-title",{staticClass:"headline font-weight-bold"},[e._v(" "+e._s(t.username))]),s("v-img",{staticClass:"mt-5 mr-5 rounded-xl",attrs:{"lazy-src":e.findPhoto(t.username),alt:"","max-height":"100","max-width":"100",src:e.findPhoto(t.username)}})],1),s("v-card-subtitle",{staticClass:"mt-n12"},[e._v("posted on "+e._s(t.time.substring(0,10))+" at "+e._s(t.time.substring(11,19)))]),s("v-card-text",{staticClass:"headline"},[e._v('"'+e._s(t.content)+'"')]),""!=e.$store.state.loggedInUsername&&-1!=e.liked.indexOf(t.id)?s("v-card-subtitle",[s("v-icon",{attrs:{color:"red",type:"submit"},on:{click:function(s){return e.likeClick(t)}}},[e._v("mdi-heart ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.likes&&null!=t.likes,expression:"post.likes != '' && post.likes != null"}]},[e._v(" Liked by "+e._s(t.likes))])],1):s("v-card-subtitle",[s("v-icon",{directives:[{name:"show",rawName:"v-show",value:""!=e.$store.state.loggedInUsername,expression:"$store.state.loggedInUsername != ''"}],staticClass:"heart",attrs:{type:"submit"},on:{click:function(s){return e.likeClick(t)}}},[e._v("mdi-heart ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.likes&&null!=t.likes,expression:"post.likes != '' && post.likes != null"}]},[e._v(" Liked by "+e._s(t.likes))])],1)],1)}))],2)},le=[],ce={data:function(){return{user:{username:"",following:""},alreadyFollowing:!1,userNode:"",currentUser:"",currentUsersFollowing:"",posts:[],liked:[],allUsers:[]}},watch:{"$route.path":function(e,t){e!==t&&this.renderComponent()}},methods:{renderComponent:function(){var e=this;this.currentUser=this.$store.state.loggedInUsername,this.userNode=this.$store.state.storeUsername,""!=this.currentUser&&p.getFollowing(this.currentUser).then((function(t){200==t.status?(e.currentUsersFollowing=t.data,e.checkIfAlreadyFollowing(e.currentUsersFollowing)):console.error(t+" errors")})).catch((function(e){console.error(e+" errors")})),p.getPostsByUsername(this.userNode).then((function(t){e.posts=t.data,200==t.status?(e.posts=t.data,e.addPostIdsToLikedArrayIfCurrentUserLikesThem(e.posts)):console.error(t+" errors")})).catch((function(e){console.error(e+" errors")}))},checkIfAlreadyFollowing:function(e){e.includes(this.userNode+",")?this.alreadyFollowing=!0:this.alreadyFollowing=!1},addPostIdsToLikedArrayIfCurrentUserLikesThem:function(e){for(var t=0;t<e.length;t++)null!=e[t].likes&&e[t].likes.includes(this.currentUser)&&this.liked.push(e[t].id)},findPhoto:function(e){for(var t=0;t<this.$store.state.allUsers.length;t++)if(this.$store.state.allUsers[t].username===e)return this.$store.state.allUsers[t].profilePic},likeClick:function(e){this.$store.commit("STORE_LIKED_ARRAY",this.liked),this.$store.commit("EDIT_AND_STORE_LIKES_STRING_IN_POST_AND_EDIT_STORED_LIKED_ARRAY",e),this.liked=this.$store.state.liked,this.post=this.$store.state.post,p.updateRelevantPosts(this.posts),this.$store.commit("STORE_POSTS_IN_CASE_OF_LOGOUT",this.posts)},follow:function(){var e=this;this.user.username=this.$store.state.loggedInUsername,this.user.following=this.userNode,p.follow(this.user).then((function(t){201==t.status?e.alreadyFollowing=!0:console.error(t+" errors")})).catch((function(e){console.error(e+" errors")}))}},mounted:function(){this.renderComponent()}},ue=ce,de=Object(v["a"])(ue,ie,le,!1,null,null,null),me=de.exports;_()(de,{VBtn:k["a"],VCard:q["a"],VCardSubtitle:te["a"],VCardText:te["b"],VCardTitle:te["c"],VContainer:G["a"],VIcon:se["a"],VImg:re["a"]});var pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("br"),s("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[s("v-card",{staticClass:"mx-auto pa-4 teal lighten-4",staticStyle:{margin:"30px",width:"50%"},attrs:{outlined:"",elevation:"6"}},[s("h2",[e._v("Register A New Account")]),s("v-spacer"),s("v-form",{staticClass:"ma-2",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("validation-provider",{attrs:{name:"username",rules:"required|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[s("v-text-field",{attrs:{counter:20,"error-messages":r,label:"Username",required:"","prepend-inner-icon":"mdi-human-greeting"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})]}}],null,!0)}),s("validation-provider",{attrs:{name:"password",rules:"required|min:4|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[s("v-text-field",{attrs:{counter:20,"error-messages":r,label:"Password",type:"Password",required:"","prepend-inner-icon":"mdi-lock","append-icon":"mdi-eye-off"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})]}}],null,!0)}),s("validation-provider",{attrs:{name:"confirm password",rules:"required|min:4|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[s("v-text-field",{attrs:{counter:20,"error-messages":r,label:"Confirm Password",type:"Password",required:"","prepend-inner-icon":"mdi-lock-alert-outline","append-icon":"mdi-eye-off"},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})]}}],null,!0)}),s("validation-provider",{attrs:{name:"link a profile picture",rules:"min:8|max:250"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[s("v-text-field",{attrs:{counter:250,"error-messages":r,label:"Link A Profile Picture (Optional)","prepend-inner-icon":"mdi-camera"},model:{value:e.user.profilePic,callback:function(t){e.$set(e.user,"profilePic",t)},expression:"user.profilePic"}})]}}],null,!0)}),s("br"),s("div",{staticClass:"text-center",attrs:{id:"login"}},[s("v-btn",{staticClass:"mr-4",attrs:{disabled:r},on:{click:e.register}},[e._v(" submit ")]),s("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)],1)],1)]}}])}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.registrationErrors,expression:"registrationErrors"}],staticClass:"node-headline"},[e._v(" "+e._s(e.registrationErrorMsg)+" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.userAlreadyExists,expression:"userAlreadyExists"}],staticClass:"node-headline"},[e._v(" "+e._s(e.userAlreadyExistsMsg)+" ")])],1)},he=[];Object(j["d"])("eager"),Object(j["c"])("required",Object(V["a"])(Object(V["a"])({},L["c"]),{},{message:"{_field_} can not be empty"})),Object(j["c"])("max",Object(V["a"])(Object(V["a"])({},L["a"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(j["c"])("min",Object(V["a"])(Object(V["a"])({},L["b"]),{},{message:"{_field_} must be at least {length} characters"}));var fe={components:{ValidationProvider:j["b"],ValidationObserver:j["a"]},data:function(){return{user:{username:"",password:"",confirmPassword:"",following:"",profilePic:""},registrationErrors:!1,registrationErrorMsg:"Password and Confirm Password do not match.",userAlreadyExists:!1,userAlreadyExistsMsg:"Sorry, that username already exists."}},methods:{register:function(){var e=this;this.user.password!=this.user.confirmPassword?this.registrationErrors=!0:d.register(this.user).then((function(t){201==t.status&&e.$router.push({path:"/login",query:{registration:"success"}})})).catch((function(t){e.userAlreadyExists=!0,console.error(t+" errors")}))},submit:function(){this.$refs.observer.validate()},clear:function(){this.user.username="",this.user.password="",this.user.confirmPassword="",this.user.profilePic="",this.$refs.observer.reset()}}},ve=fe,ge=Object(v["a"])(ve,pe,he,!1,null,null,null),_e=ge.exports;_()(ge,{VBtn:k["a"],VCard:q["a"],VContainer:G["a"],VForm:Y["a"],VSpacer:x["a"],VTextField:B["a"]});var be=s("8c4f");r["a"].use(be["a"]);var we=new be["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:W,meta:{requiresAuth:!1}},{path:"/login",name:"login",component:K,meta:{requiresAuth:!1}},{path:"/register",name:"register",component:_e,meta:{requiresAuth:!1}},{path:"/your-feed",name:"your-feed",component:ae},{path:"/feed/:name",name:"feed",component:me}]}),ke=we,ye=(s("5319"),s("ac1f"),s("a434"),s("2f62"));r["a"].use(ye["a"]);var xe=new ye["a"].Store({state:{loggedInUsername:"",storeUsername:"",postsInCaseOfLogOut:[],allUsers:[],liked:[],post:[]},mutations:{SET_LOGGED_IN_USER:function(e,t){e.loggedInUsername=t.username,e.following=t.following},STORE_USER:function(e,t){e.storeUsername=t},STORE_POSTS_IN_CASE_OF_LOGOUT:function(e,t){e.postsInCaseOfLogOut=t},STORE_ALL_USERS:function(e,t){e.allUsers=t},STORE_LIKED_ARRAY:function(e,t){e.liked=t},EDIT_AND_STORE_LIKES_STRING_IN_POST_AND_EDIT_STORED_LIKED_ARRAY:function(e,t){if(e.liked.includes(t.id)){var s=", "+e.loggedInUsername+", ",r=", "+e.loggedInUsername,n=e.loggedInUsername+", ",o=", ";t.likes.includes(s)?t.likes=t.likes.replace(s,o):t.likes.includes(r)?t.likes=t.likes.replace(r,""):t.likes.includes(n)?t.likes=t.likes.replace(n,""):t.likes=t.likes.replace(e.loggedInUsername,"");for(var a=0;a<e.liked.length;a++)e.liked[a]===t.id&&e.liked.splice(a,1)}else e.liked.push(t.id),""!=e.loggedInUsername&&null!=t.likes&&""!=t.likes?t.likes=t.likes+", "+e.loggedInUsername:t.likes=e.loggedInUsername;e.post=t}}}),Ue=s("f309");r["a"].use(Ue["a"]);var Ce=new Ue["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ke,store:xe,vuetify:Ce,render:function(e){return e($)}}).$mount("#app")},"5ced":function(e,t,s){},"85ec":function(e,t,s){},"913b":function(e,t,s){"use strict";s("f6bd")},cccb:function(e,t,s){"use strict";s("5ced")},f6bd:function(e,t,s){}});
//# sourceMappingURL=app.78c93019.js.map