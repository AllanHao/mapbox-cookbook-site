(window.webpackJsonp=window.webpackJsonp||[]).push([[12,28],{114:function(t,e,n){"use strict";var i=n(82);n.n(i).a},142:function(t,e,n){"use strict";n.r(e);n(67),n(69),n(70),n(31);var i=n(75),a=n.n(i),o=(n(76),{name:"custom-map",props:{container:{type:String,default:"map-".concat((new Date).getTime())},height:{type:Number,default:400},mapStyle:{type:String,default:"mapbox://styles/huanglii/cjmn2rlvn0c8u2sl97kkiep6r"},center:{type:Array,default:function(){return[-74.5,40]}},zoom:{type:Number,default:9},minZoom:{type:Number,default:0},maxZoom:{type:Number,default:22},scrollZoom:{type:Boolean,default:!0},pitch:{type:Number,default:0},bearing:{type:Number,default:0}},data:function(){return{map:null,maploaded:!1}},mounted:function(){var t=this.container,e=this.mapStyle,n=this.center,i=this.zoom,a=this.minZoom,o=this.maxZoom,r=this.scrollZoom,s=this.pitch,l=this.bearing;this.initMap({container:t,style:e,center:n,zoom:i,minZoom:a,maxZoom:o,scrollZoom:r,pitch:s,bearing:l}),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){a.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new a.a.Map(t),this.map.addControl(new a.a.NavigationControl({showCompass:!1}),"top-left"),this.map.addControl(new a.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.maploaded=!0,this.$emit("load",t.target),this.map.on("click",this.handleMapClick)},handleMapClick:function(t){var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],i=n.layer,o=n.properties;(new a.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(i.id,o)).addTo(this.map)}},createPropHtml:function(t,e){return'\n      <div class="title"><b>'.concat(t,'</b></div>\n      <div class="content">\n        ').concat(Object.keys(e).map(function(t){return"".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"))}).join(""),"\n      </div>\n    ")},resize:function(){this.map.resize()}}}),r=(n(114),n(0)),s=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("div",{style:{width:"100%",height:this.height+"px",borderRadius:"6px"},attrs:{id:this.container}},[this._t("custom")],2),this._v(" "),this.maploaded?this._t("default"):this._e()],2)},[],!1,null,null,null);e.default=s.exports},180:function(t,e){},409:function(t,e,n){"use strict";n.r(e);var i=n(142),a=(n(343),n(249)),o=n(377),r=n(396),s=n(245),l=n(193),c=n(402),p=n(398),d={BUILDINGS:"https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/trips/buildings.json",TRIPS:"https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/trips/trips-v7.json"},u=new r.a({color:[255,255,255],intensity:1}),m=new s.a({color:[255,255,255],intensity:2,position:[-74.05,40.7,8e3]}),h=new l.a({ambientLight:u,pointLight:m}),f={buildingColor:[74,80,87],trailColor0:[253,128,93],trailColor1:[23,184,190],material:new o.a({ambient:.1,diffuse:.6,shininess:32,specularColor:[60,64,70]}),effects:[h]},g={longitude:-74,latitude:40.72,zoom:13,pitch:45,bearing:0},b=[[[-74,40.7],[-74.02,40.7],[-74.02,40.72],[-74,40.72]]];var w={components:{customMap:i.default},data:function(){return{container:"m-deckgl-trips",center:[7,47.65],zoom:4.5,pitch:50,bearing:0,style:"mapbox://styles/mapbox/dark-v9?optimize=true"}},methods:{handleMapLoaded:function(t){!function(t,e){var n=d.BUILDINGS,i=d.TRIPS,o=f,r=new c.a({id:"ground",data:b,getPolygon:function(t){return t},stroked:!1,getFillColor:[0,0,0,0]}),s=new c.a({id:"buildings",data:n,extruded:!0,wireframe:!1,opacity:.5,getPolygon:function(t){return t.polygon},getElevation:function(t){return t.height},getFillColor:o.buildingColor,material:o.material}),l=new p.a({id:"trips",data:i,getPath:function(t){return t.path},getTimestamps:function(t){return t.timestamps},getColor:function(t){return 0===t.vendor?o.trailColor0:o.trailColor1},opacity:.3,widthMinPixels:2,rounded:!0,trailLength:180,currentTime:1,shadowEnabled:!1}),u=new a.a({canvas:e,id:e,width:"100%",height:"100%",style:{postion:"relative",top:"0px"},initialViewState:g,controller:!0,onViewStateChange:function(e){var n=e.viewState;t.jumpTo({center:[n.longitude,n.latitude],zoom:n.zoom,bearing:n.bearing,pitch:n.pitch})},effects:o.effects,layers:[l,r,s]});!function t(){var e=Date.now()/1e3%60/60*1800,n={};Object.assign(n,l.props,{currentTime:e,data:i});var a=[new p.a(n),r,s];u.setProps({layers:a});window.requestAnimationFrame(t)}()}(t,"trips-canvas")}}},y=n(0),v=Object(y.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("custom-map",{attrs:{container:this.container,center:this.center,zoom:this.zoom,pitch:this.pitch,mapStyle:this.style,bearing:this.bearing},on:{load:this.handleMapLoaded}},[e("canvas",{staticStyle:{"z-index":"2"},attrs:{slot:"custom",id:"trips-canvas"},slot:"custom"})])},[],!1,null,null,null);e.default=v.exports},82:function(t,e,n){}}]);