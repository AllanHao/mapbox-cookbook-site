(window.webpackJsonp=window.webpackJsonp||[]).push([[19,26],{411:function(t,e,n){"use strict";n.r(e);var a={components:{baseMap:n(65).default},data:function(){return{container:"m-line",center:[-122.486552,37.831048],zoom:14.5}},methods:{handleMapLoaded:function(t){!function(t){t.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-122.48369693756104,37.83381888486939],[-122.48348236083984,37.83317489144141],[-122.48339653015138,37.83270036637107],[-122.48356819152832,37.832056363179625],[-122.48404026031496,37.83114119107971],[-122.48404026031496,37.83049717427869],[-122.48348236083984,37.829920943955045],[-122.48356819152832,37.82954808664175],[-122.48507022857666,37.82944639795659],[-122.48610019683838,37.82880236636284],[-122.48695850372314,37.82931081282506],[-122.48700141906738,37.83080223556934],[-122.48751640319824,37.83168351665737],[-122.48803138732912,37.832158048267786],[-122.48888969421387,37.83297152392784],[-122.48987674713133,37.83263257682617],[-122.49043464660643,37.832937629287755],[-122.49125003814696,37.832429207817725],[-122.49163627624512,37.832564787218985],[-122.49223709106445,37.83337825839438],[-122.49378204345702,37.83368330777276]]}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#fb5614","line-width":6,"line-gap-width":4}})}(t)}}},i=n(0),o=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("base-map",{attrs:{container:this.container,center:this.center,zoom:this.zoom},on:{load:this.handleMapLoaded}})},[],!1,null,null,null);e.default=o.exports},59:function(t,e,n){},64:function(t,e,n){"use strict";var a=n(59);n.n(a).a},65:function(t,e,n){"use strict";n.r(e);n(67),n(69),n(70),n(31);var a=n(75),i=n.n(a),o=(n(76),{name:"base-map",props:{container:{type:String,default:"map-".concat((new Date).getTime())},height:{type:Number,default:400},mapStyle:{type:String,default:"mapbox://styles/huanglii/cjmn2rlvn0c8u2sl97kkiep6r"},center:{type:Array,default:function(){return[-74.5,40]}},zoom:{type:Number,default:9},minZoom:{type:Number,default:0},maxZoom:{type:Number,default:22},scrollZoom:{type:Boolean,default:!0},pitch:{type:Number,default:0},bearing:{type:Number,default:0}},data:function(){return{map:null,maploaded:!1}},mounted:function(){var t=this.container,e=this.mapStyle,n=this.center,a=this.zoom,i=this.minZoom,o=this.maxZoom,r=this.scrollZoom,s=this.pitch,l=this.bearing;this.initMap({container:t,style:e,center:n,zoom:a,minZoom:i,maxZoom:o,scrollZoom:r,pitch:s,bearing:l}),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){i.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new i.a.Map(t),this.map.addControl(new i.a.NavigationControl({showCompass:!1}),"top-left"),this.map.addControl(new i.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.maploaded=!0,this.$emit("load",t.target),this.map.on("click",this.handleMapClick)},handleMapClick:function(t){var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],a=n.layer,o=n.properties;(new i.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(a.id,o)).addTo(this.map)}},createPropHtml:function(t,e){return'\n        <div class="title"><b>'.concat(t,'</b></div>\n        <div class="content">\n          ').concat(Object.keys(e).map(function(t){return"".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"))}).join(""),"\n        </div>\n      ")},resize:function(){this.map.resize()}}}),r=(n(64),n(0)),s=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("div",{style:{width:"100%",height:this.height+"px",borderRadius:"6px"},attrs:{id:this.container}}),this._v(" "),this.maploaded?this._t("default"):this._e()],2)},[],!1,null,null,null);e.default=s.exports}}]);