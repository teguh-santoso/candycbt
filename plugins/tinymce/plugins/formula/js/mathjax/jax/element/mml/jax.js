MathJax.ElementJax.mml=MathJax.ElementJax({mimeType:"jax/mml"},{id:"mml",version:"2.7.0",directory:MathJax.ElementJax.directory+"/mml",extensionDir:MathJax.ElementJax.extensionDir+"/mml",optableDir:MathJax.ElementJax.directory+"/mml/optable"}),MathJax.ElementJax.mml.Augment({Init:function(){if(1===arguments.length&&"math"===arguments[0].type?this.root=arguments[0]:this.root=MathJax.ElementJax.mml.math.apply(this,arguments),this.root.attr&&this.root.attr.mode){this.root.display||"display"!==this.root.attr.mode||(this.root.display="block",this.root.attrNames.push("display")),delete this.root.attr.mode;for(var t=0,e=this.root.attrNames.length;t<e;t++)if("mode"===this.root.attrNames[t]){this.root.attrNames.splice(t,1);break}}}},{INHERIT:"_inherit_",AUTO:"_auto_",SIZE:{INFINITY:"infinity",SMALL:"small",NORMAL:"normal",BIG:"big"},COLOR:{TRANSPARENT:"transparent"},VARIANT:{NORMAL:"normal",BOLD:"bold",ITALIC:"italic",BOLDITALIC:"bold-italic",DOUBLESTRUCK:"double-struck",FRAKTUR:"fraktur",BOLDFRAKTUR:"bold-fraktur",SCRIPT:"script",BOLDSCRIPT:"bold-script",SANSSERIF:"sans-serif",BOLDSANSSERIF:"bold-sans-serif",SANSSERIFITALIC:"sans-serif-italic",SANSSERIFBOLDITALIC:"sans-serif-bold-italic",MONOSPACE:"monospace",INITIAL:"inital",TAILED:"tailed",LOOPED:"looped",STRETCHED:"stretched",CALIGRAPHIC:"-tex-caligraphic",OLDSTYLE:"-tex-oldstyle"},FORM:{PREFIX:"prefix",INFIX:"infix",POSTFIX:"postfix"},LINEBREAK:{AUTO:"auto",NEWLINE:"newline",NOBREAK:"nobreak",GOODBREAK:"goodbreak",BADBREAK:"badbreak"},LINEBREAKSTYLE:{BEFORE:"before",AFTER:"after",DUPLICATE:"duplicate",INFIXLINBREAKSTYLE:"infixlinebreakstyle"},INDENTALIGN:{LEFT:"left",CENTER:"center",RIGHT:"right",AUTO:"auto",ID:"id",INDENTALIGN:"indentalign"},INDENTSHIFT:{INDENTSHIFT:"indentshift"},LINETHICKNESS:{THIN:"thin",MEDIUM:"medium",THICK:"thick"},NOTATION:{LONGDIV:"longdiv",ACTUARIAL:"actuarial",RADICAL:"radical",BOX:"box",ROUNDEDBOX:"roundedbox",CIRCLE:"circle",LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",UPDIAGONALSTRIKE:"updiagonalstrike",DOWNDIAGONALSTRIKE:"downdiagonalstrike",UPDIAGONALARROW:"updiagonalarrow",VERTICALSTRIKE:"verticalstrike",HORIZONTALSTRIKE:"horizontalstrike",PHASORANGLE:"phasorangle",MADRUWB:"madruwb"},ALIGN:{TOP:"top",BOTTOM:"bottom",CENTER:"center",BASELINE:"baseline",AXIS:"axis",LEFT:"left",RIGHT:"right"},LINES:{NONE:"none",SOLID:"solid",DASHED:"dashed"},SIDE:{LEFT:"left",RIGHT:"right",LEFTOVERLAP:"leftoverlap",RIGHTOVERLAP:"rightoverlap"},WIDTH:{AUTO:"auto",FIT:"fit"},ACTIONTYPE:{TOGGLE:"toggle",STATUSLINE:"statusline",TOOLTIP:"tooltip",INPUT:"input"},LENGTH:{VERYVERYTHINMATHSPACE:"veryverythinmathspace",VERYTHINMATHSPACE:"verythinmathspace",THINMATHSPACE:"thinmathspace",MEDIUMMATHSPACE:"mediummathspace",THICKMATHSPACE:"thickmathspace",VERYTHICKMATHSPACE:"verythickmathspace",VERYVERYTHICKMATHSPACE:"veryverythickmathspace",NEGATIVEVERYVERYTHINMATHSPACE:"negativeveryverythinmathspace",NEGATIVEVERYTHINMATHSPACE:"negativeverythinmathspace",NEGATIVETHINMATHSPACE:"negativethinmathspace",NEGATIVEMEDIUMMATHSPACE:"negativemediummathspace",NEGATIVETHICKMATHSPACE:"negativethickmathspace",NEGATIVEVERYTHICKMATHSPACE:"negativeverythickmathspace",NEGATIVEVERYVERYTHICKMATHSPACE:"negativeveryverythickmathspace"},OVERFLOW:{LINBREAK:"linebreak",SCROLL:"scroll",ELIDE:"elide",TRUNCATE:"truncate",SCALE:"scale"},UNIT:{EM:"em",EX:"ex",PX:"px",IN:"in",CM:"cm",MM:"mm",PT:"pt",PC:"pc"},TEXCLASS:{ORD:0,OP:1,BIN:2,REL:3,OPEN:4,CLOSE:5,PUNCT:6,INNER:7,VCENTER:8,NONE:-1},TEXCLASSNAMES:["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"],skipAttributes:{texClass:!0,useHeight:!0,texprimestyle:!0},copyAttributes:{displaystyle:1,scriptlevel:1,open:1,close:1,form:1,actiontype:1,fontfamily:!0,fontsize:!0,fontweight:!0,fontstyle:!0,color:!0,background:!0,id:!0,class:1,href:!0,style:!0},copyAttributeNames:["displaystyle","scriptlevel","open","close","form","actiontype","fontfamily","fontsize","fontweight","fontstyle","color","background","id","class","href","style"],nocopyAttributes:{fontfamily:!0,fontsize:!0,fontweight:!0,fontstyle:!0,color:!0,background:!0,id:!0,class:!0,href:!0,style:!0,xmlns:!0},Error:function(t,e){var s=this.merror(t),a=MathJax.Localization.fontDirection(),i=MathJax.Localization.fontFamily();return e&&(s=s.With(e)),(a||i)&&(s=this.mstyle(s),a&&(s.dir=a),i&&(s.style.fontFamily="font-family: "+i)),s}}),function(t){t.mbase=MathJax.Object.Subclass({type:"base",isToken:!1,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT},noInherit:{},noInheritAttribute:{texClass:!0},getRemoved:{},linebreakContainer:!1,Init:function(){this.data=[],!this.inferRow||1===arguments.length&&arguments[0].inferred||this.Append(t.mrow().With({inferred:!0,notParent:!0})),this.Append.apply(this,arguments)},With:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);return this},Append:function(){if(this.inferRow&&this.data.length)this.data[0].Append.apply(this.data[0],arguments);else for(var t=0,e=arguments.length;t<e;t++)this.SetData(this.data.length,arguments[t])},SetData:function(e,s){null!=s&&(s instanceof t.mbase||(s=this.isToken||this.isChars?t.chars(s):t.mtext(s)),s.parent=this,s.setInherit(this.inheritFromMe?this:this.inherit)),this.data[e]=s},Parent:function(){for(var t=this.parent;t&&t.notParent;)t=t.parent;return t},Get:function(e,s,a){if(!a){if(null!=this[e])return this[e];if(this.attr&&null!=this.attr[e])return this.attr[e]}var i=this.Parent();if(i&&null!=i["adjustChild_"+e])return i["adjustChild_"+e](this.childPosition(),s);for(var n=this.inherit,r=n;n;){var l=n[e];if(null==l&&n.attr&&(l=n.attr[e]),n.removedStyles&&n.getRemoved[e]&&null==l&&(l=n.removedStyles[n.getRemoved[e]]),null!=l&&n.noInheritAttribute&&!n.noInheritAttribute[e]){var o=n.noInherit[this.type];if(!o||!o[e])return l}r=n,n=n.inherit}if(!s){if(this.defaults[e]===t.AUTO)return this.autoDefault(e);if(this.defaults[e]!==t.INHERIT&&null!=this.defaults[e])return this.defaults[e];if(r)return r.defaults[e]}return null},hasValue:function(t){return null!=this.Get(t,!0)},getValues:function(){for(var t={},e=0,s=arguments.length;e<s;e++)t[arguments[e]]=this.Get(arguments[e]);return t},adjustChild_scriptlevel:function(t,e){return this.Get("scriptlevel",e)},adjustChild_displaystyle:function(t,e){return this.Get("displaystyle",e)},adjustChild_texprimestyle:function(t,e){return this.Get("texprimestyle",e)},childPosition:function(){for(var t=this,e=t.parent;e.notParent;)t=e,e=t.parent;for(var s=0,a=e.data.length;s<a;s++)if(e.data[s]===t)return s;return null},setInherit:function(t){if(t!==this.inherit&&null==this.inherit){this.inherit=t;for(var e=0,s=this.data.length;e<s;e++)this.data[e]&&this.data[e].setInherit&&this.data[e].setInherit(t)}},setTeXclass:function(t){return this.getPrevClass(t),"undefined"!=typeof this.texClass?this:t},getPrevClass:function(t){t&&(this.prevClass=t.Get("texClass"),this.prevLevel=t.Get("scriptlevel"))},updateTeXclass:function(t){t&&(this.prevClass=t.prevClass,delete t.prevClass,this.prevLevel=t.prevLevel,delete t.prevLevel,this.texClass=t.Get("texClass"))},texSpacing:function(){var e=null!=this.prevClass?this.prevClass:t.TEXCLASS.NONE,s=this.Get("texClass")||t.TEXCLASS.ORD;if(e===t.TEXCLASS.NONE||s===t.TEXCLASS.NONE)return"";e===t.TEXCLASS.VCENTER&&(e=t.TEXCLASS.ORD),s===t.TEXCLASS.VCENTER&&(s=t.TEXCLASS.ORD);var a=this.TEXSPACE[e][s];return(this.prevLevel>0||this.Get("scriptlevel")>0)&&a>=0?"":this.TEXSPACELENGTH[Math.abs(a)]},TEXSPACELENGTH:["",t.LENGTH.THINMATHSPACE,t.LENGTH.MEDIUMMATHSPACE,t.LENGTH.THICKMATHSPACE],TEXSPACE:[[0,-1,2,3,0,0,0,1],[-1,-1,0,3,0,0,0,1],[2,2,0,0,2,0,0,2],[3,3,0,0,3,0,0,3],[0,0,0,0,0,0,0,0],[0,-1,2,3,0,0,0,1],[1,1,0,1,1,1,1,1],[1,-1,2,3,1,0,1,1]],autoDefault:function(t){return""},isSpacelike:function(){return!1},isEmbellished:function(){return!1},Core:function(){return this},CoreMO:function(){return this},childIndex:function(t){if(null!=t)for(var e=0,s=this.data.length;e<s;e++)if(t===this.data[e])return e},CoreIndex:function(){return(this.inferRow?this.data[0]||this:this).childIndex(this.Core())},hasNewline:function(){if(this.isEmbellished())return this.CoreMO().hasNewline();if(this.isToken||this.linebreakContainer)return!1;for(var t=0,e=this.data.length;t<e;t++)if(this.data[t]&&this.data[t].hasNewline())return!0;return!1},array:function(){return this.inferred?this.data:[this]},toString:function(){return this.type+"("+this.data.join(",")+")"},getAnnotation:function(){return null}},{childrenSpacelike:function(){for(var t=0,e=this.data.length;t<e;t++)if(!this.data[t].isSpacelike())return!1;return!0},childEmbellished:function(){return this.data[0]&&this.data[0].isEmbellished()},childCore:function(){return this.inferRow&&this.data[0]?this.data[0].Core():this.data[0]},childCoreMO:function(){return this.data[0]?this.data[0].CoreMO():null},setChildTeXclass:function(t){return this.data[0]&&(t=this.data[0].setTeXclass(t),this.updateTeXclass(this.data[0])),t},setBaseTeXclasses:function(e){this.getPrevClass(e),this.texClass=null,this.data[0]?this.isEmbellished()||this.data[0].isa(t.mi)?(e=this.data[0].setTeXclass(e),this.updateTeXclass(this.Core())):(this.data[0].setTeXclass(),e=this):e=this;for(var s=1,a=this.data.length;s<a;s++)this.data[s]&&this.data[s].setTeXclass();return e},setSeparateTeXclasses:function(t){this.getPrevClass(t);for(var e=0,s=this.data.length;e<s;e++)this.data[e]&&this.data[e].setTeXclass();return this.isEmbellished()&&this.updateTeXclass(this.Core()),this}}),t.mi=t.mbase.Subclass({type:"mi",isToken:!0,texClass:t.TEXCLASS.ORD,defaults:{mathvariant:t.AUTO,mathsize:t.INHERIT,mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT},autoDefault:function(e){if("mathvariant"===e){var s=(this.data[0]||"").toString();return 1===s.length||2===s.length&&s.charCodeAt(0)>=55296&&s.charCodeAt(0)<56320?t.VARIANT.ITALIC:t.VARIANT.NORMAL}return""},setTeXclass:function(e){this.getPrevClass(e);var s=this.data.join("");return s.length>1&&s.match(/^[a-z][a-z0-9]*$/i)&&this.texClass===t.TEXCLASS.ORD&&(this.texClass=t.TEXCLASS.OP,this.autoOP=!0),this}}),t.mn=t.mbase.Subclass({type:"mn",isToken:!0,texClass:t.TEXCLASS.ORD,defaults:{mathvariant:t.INHERIT,mathsize:t.INHERIT,mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT}}),t.mo=t.mbase.Subclass({type:"mo",isToken:!0,defaults:{mathvariant:t.INHERIT,mathsize:t.INHERIT,mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT,form:t.AUTO,fence:t.AUTO,separator:t.AUTO,lspace:t.AUTO,rspace:t.AUTO,stretchy:t.AUTO,symmetric:t.AUTO,maxsize:t.AUTO,minsize:t.AUTO,largeop:t.AUTO,movablelimits:t.AUTO,accent:t.AUTO,linebreak:t.LINEBREAK.AUTO,lineleading:t.INHERIT,linebreakstyle:t.AUTO,linebreakmultchar:t.INHERIT,indentalign:t.INHERIT,indentshift:t.INHERIT,indenttarget:t.INHERIT,indentalignfirst:t.INHERIT,indentshiftfirst:t.INHERIT,indentalignlast:t.INHERIT,indentshiftlast:t.INHERIT,texClass:t.AUTO},defaultDef:{form:t.FORM.INFIX,fence:!1,separator:!1,lspace:t.LENGTH.THICKMATHSPACE,rspace:t.LENGTH.THICKMATHSPACE,stretchy:!1,symmetric:!1,maxsize:t.SIZE.INFINITY,minsize:"0em",largeop:!1,movablelimits:!1,accent:!1,linebreak:t.LINEBREAK.AUTO,lineleading:"1ex",linebreakstyle:"before",indentalign:t.INDENTALIGN.AUTO,indentshift:"0",indenttarget:"",indentalignfirst:t.INDENTALIGN.INDENTALIGN,indentshiftfirst:t.INDENTSHIFT.INDENTSHIFT,indentalignlast:t.INDENTALIGN.INDENTALIGN,indentshiftlast:t.INDENTSHIFT.INDENTSHIFT,texClass:t.TEXCLASS.REL},SPACE_ATTR:{lspace:1,rspace:2,form:4},useMMLspacing:7,autoDefault:function(e,s){var a=this.def;if(!a){if("form"===e)return this.useMMLspacing&=~this.SPACE_ATTR.form,this.getForm();for(var i=this.data.join(""),n=[this.Get("form"),t.FORM.INFIX,t.FORM.POSTFIX,t.FORM.PREFIX],r=0,l=n.length;r<l;r++){var o=this.OPTABLE[n[r]][i];if(o){a=this.makeDef(o);break}}a||(a=this.CheckRange(i)),!a&&s?a={}:(a||(a=MathJax.Hub.Insert({},this.defaultDef)),this.parent?this.def=a:a=MathJax.Hub.Insert({},a),a.form=n[0])}return this.useMMLspacing&=~(this.SPACE_ATTR[e]||0),null!=a[e]?a[e]:s?"":this.defaultDef[e]},CheckRange:function(e){var s=e.charCodeAt(0);s>=55296&&s<56320&&(s=(s-55296<<10)+(e.charCodeAt(1)-56320)+65536);for(var a=0,i=this.RANGES.length;a<i&&this.RANGES[a][0]<=s;a++)if(s<=this.RANGES[a][1]){if(this.RANGES[a][3]){var n=t.optableDir+"/"+this.RANGES[a][3]+".js";this.RANGES[a][3]=null,MathJax.Hub.RestartAfter(MathJax.Ajax.Require(n))}var r=t.TEXCLASSNAMES[this.RANGES[a][2]];return r=this.OPTABLE.infix[e]=t.mo.OPTYPES["BIN"===r?"BIN3":r],this.makeDef(r)}return null},makeDef:function(e){null==e[2]&&(e[2]=this.defaultDef.texClass),e[3]||(e[3]={});var s=MathJax.Hub.Insert({},e[3]);return s.lspace=this.SPACE[e[0]],s.rspace=this.SPACE[e[1]],s.texClass=e[2],s.texClass===t.TEXCLASS.REL&&(this.movablelimits||this.data.join("").match(/^[a-z]+$/i))&&(s.texClass=t.TEXCLASS.OP),s},getForm:function(){for(var e=this,s=this.parent,a=this.Parent();a&&a.isEmbellished();)e=s,s=a.parent,a=a.Parent();if(s&&"mrow"===s.type&&1!==s.NonSpaceLength()){if(s.FirstNonSpace()===e)return t.FORM.PREFIX;if(s.LastNonSpace()===e)return t.FORM.POSTFIX}return t.FORM.INFIX},isEmbellished:function(){return!0},hasNewline:function(){return this.Get("linebreak")===t.LINEBREAK.NEWLINE},CoreParent:function(){for(var e=this;e&&e.isEmbellished()&&e.CoreMO()===this&&!e.isa(t.math);)e=e.Parent();return e},CoreText:function(e){if(!e)return"";if(e.isEmbellished())return e.CoreMO().data.join("");for(;((e.isa(t.mrow)||e.isa(t.TeXAtom)||e.isa(t.mstyle)||e.isa(t.mphantom))&&1===e.data.length||e.isa(t.munderover))&&e.data[0];)e=e.data[0];return e.isToken?e.data.join(""):""},remapChars:{"*":"∗",'"':"″","°":"∘","²":"2","³":"3","´":"′","¹":"1"},remap:function(t,e){return t=t.replace(/-/g,"−"),e&&(t=t.replace(/'/g,"′").replace(/`/g,"‵"),1===t.length&&(t=e[t]||t)),t},setTeXclass:function(e){var s=this.getValues("form","lspace","rspace","fence");return this.useMMLspacing?(this.texClass=t.TEXCLASS.NONE,this):(s.fence&&!this.texClass&&(s.form===t.FORM.PREFIX&&(this.texClass=t.TEXCLASS.OPEN),s.form===t.FORM.POSTFIX&&(this.texClass=t.TEXCLASS.CLOSE)),this.texClass=this.Get("texClass"),"⁡"===this.data.join("")?(e&&(e.texClass=t.TEXCLASS.OP,e.fnOP=!0),this.texClass=this.prevClass=t.TEXCLASS.NONE,e):this.adjustTeXclass(e))},adjustTeXclass:function(e){if(this.texClass===t.TEXCLASS.NONE)return e;if(e?(!e.autoOP||this.texClass!==t.TEXCLASS.BIN&&this.texClass!==t.TEXCLASS.REL||(e.texClass=t.TEXCLASS.ORD),this.prevClass=e.texClass||t.TEXCLASS.ORD,this.prevLevel=e.Get("scriptlevel")):this.prevClass=t.TEXCLASS.NONE,this.texClass!==t.TEXCLASS.BIN||this.prevClass!==t.TEXCLASS.NONE&&this.prevClass!==t.TEXCLASS.BIN&&this.prevClass!==t.TEXCLASS.OP&&this.prevClass!==t.TEXCLASS.REL&&this.prevClass!==t.TEXCLASS.OPEN&&this.prevClass!==t.TEXCLASS.PUNCT)if(this.prevClass!==t.TEXCLASS.BIN||this.texClass!==t.TEXCLASS.REL&&this.texClass!==t.TEXCLASS.CLOSE&&this.texClass!==t.TEXCLASS.PUNCT){if(this.texClass===t.TEXCLASS.BIN){for(var s=this,a=this.parent;a&&a.parent&&a.isEmbellished()&&(1===a.data.length||"mrow"!==a.type&&a.Core()===s);)s=a,a=a.parent;a.data[a.data.length-1]===s&&(this.texClass=t.TEXCLASS.ORD)}}else e.texClass=this.prevClass=t.TEXCLASS.ORD;else this.texClass=t.TEXCLASS.ORD;return this}}),t.mtext=t.mbase.Subclass({type:"mtext",isToken:!0,isSpacelike:function(){return!0},texClass:t.TEXCLASS.ORD,defaults:{mathvariant:t.INHERIT,mathsize:t.INHERIT,mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT}}),t.mspace=t.mbase.Subclass({type:"mspace",isToken:!0,isSpacelike:function(){return!0},defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,width:"0em",height:"0ex",depth:"0ex",linebreak:t.LINEBREAK.AUTO},hasDimAttr:function(){return this.hasValue("width")||this.hasValue("height")||this.hasValue("depth")},hasNewline:function(){return!this.hasDimAttr()&&this.Get("linebreak")===t.LINEBREAK.NEWLINE}}),t.ms=t.mbase.Subclass({type:"ms",isToken:!0,texClass:t.TEXCLASS.ORD,defaults:{mathvariant:t.INHERIT,mathsize:t.INHERIT,mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT,lquote:'"',rquote:'"'}}),t.mglyph=t.mbase.Subclass({type:"mglyph",isToken:!0,texClass:t.TEXCLASS.ORD,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,alt:"",src:"",width:t.AUTO,height:t.AUTO,valign:"0em"}}),t.mrow=t.mbase.Subclass({type:"mrow",isSpacelike:t.mbase.childrenSpacelike,inferred:!1,notParent:!1,isEmbellished:function(){for(var t=!1,e=0,s=this.data.length;e<s;e++)if(null!=this.data[e])if(this.data[e].isEmbellished()){if(t)return!1;t=!0,this.core=e}else if(!this.data[e].isSpacelike())return!1;return t},NonSpaceLength:function(){for(var t=0,e=0,s=this.data.length;e<s;e++)this.data[e]&&!this.data[e].isSpacelike()&&t++;return t},FirstNonSpace:function(){for(var t=0,e=this.data.length;t<e;t++)if(this.data[t]&&!this.data[t].isSpacelike())return this.data[t];return null},LastNonSpace:function(){for(var t=this.data.length-1;t>=0;t--)if(this.data[0]&&!this.data[t].isSpacelike())return this.data[t];return null},Core:function(){return this.isEmbellished()&&"undefined"!=typeof this.core?this.data[this.core]:this},CoreMO:function(){return this.isEmbellished()&&"undefined"!=typeof this.core?this.data[this.core].CoreMO():this},toString:function(){return this.inferred?"["+this.data.join(",")+"]":this.SUPER(arguments).toString.call(this)},setTeXclass:function(e){var s,a=this.data.length;if(!this.open&&!this.close||e&&e.fnOP){for(s=0;s<a;s++)this.data[s]&&(e=this.data[s].setTeXclass(e));return this.data[0]&&this.updateTeXclass(this.data[0]),e}for(this.getPrevClass(e),e=null,s=0;s<a;s++)this.data[s]&&(e=this.data[s].setTeXclass(e));return this.hasOwnProperty("texClass")||(this.texClass=t.TEXCLASS.INNER),this},getAnnotation:function(t){return 1!=this.data.length?null:this.data[0].getAnnotation(t)}}),t.mfrac=t.mbase.Subclass({type:"mfrac",num:0,den:1,linebreakContainer:!0,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,linethickness:t.LINETHICKNESS.MEDIUM,numalign:t.ALIGN.CENTER,denomalign:t.ALIGN.CENTER,bevelled:!1},adjustChild_displaystyle:function(t){return!1},adjustChild_scriptlevel:function(t){var e=this.Get("scriptlevel");return(!this.Get("displaystyle")||e>0)&&e++,e},adjustChild_texprimestyle:function(t){return t==this.den||this.Get("texprimestyle")},setTeXclass:t.mbase.setSeparateTeXclasses}),t.msqrt=t.mbase.Subclass({type:"msqrt",inferRow:!0,linebreakContainer:!0,texClass:t.TEXCLASS.ORD,setTeXclass:t.mbase.setSeparateTeXclasses,adjustChild_texprimestyle:function(t){return!0}}),t.mroot=t.mbase.Subclass({type:"mroot",linebreakContainer:!0,texClass:t.TEXCLASS.ORD,adjustChild_displaystyle:function(t){return 1!==t&&this.Get("displaystyle")},adjustChild_scriptlevel:function(t){var e=this.Get("scriptlevel");return 1===t&&(e+=2),e},adjustChild_texprimestyle:function(t){return 0===t||this.Get("texprimestyle")},setTeXclass:t.mbase.setSeparateTeXclasses}),t.mstyle=t.mbase.Subclass({type:"mstyle",isSpacelike:t.mbase.childrenSpacelike,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,inferRow:!0,defaults:{scriptlevel:t.INHERIT,displaystyle:t.INHERIT,scriptsizemultiplier:Math.sqrt(.5),scriptminsize:"8pt",mathbackground:t.INHERIT,mathcolor:t.INHERIT,dir:t.INHERIT,infixlinebreakstyle:t.LINEBREAKSTYLE.BEFORE,decimalseparator:"."},adjustChild_scriptlevel:function(t){var e=this.scriptlevel;if(null==e)e=this.Get("scriptlevel");else if(String(e).match(/^ *[-+]/)){var s=this.Get("scriptlevel",null,!0);e=s+parseInt(e)}return e},inheritFromMe:!0,noInherit:{mpadded:{width:!0,height:!0,depth:!0,lspace:!0,voffset:!0},mtable:{width:!0,height:!0,depth:!0,align:!0}},getRemoved:{fontfamily:"fontFamily",fontweight:"fontWeight",fontstyle:"fontStyle",fontsize:"fontSize"},setTeXclass:t.mbase.setChildTeXclass}),t.merror=t.mbase.Subclass({type:"merror",inferRow:!0,linebreakContainer:!0,texClass:t.TEXCLASS.ORD}),t.mpadded=t.mbase.Subclass({type:"mpadded",inferRow:!0,isSpacelike:t.mbase.childrenSpacelike,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,width:"",height:"",depth:"",lspace:0,voffset:0},setTeXclass:t.mbase.setChildTeXclass}),t.mphantom=t.mbase.Subclass({type:"mphantom",texClass:t.TEXCLASS.ORD,inferRow:!0,isSpacelike:t.mbase.childrenSpacelike,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,setTeXclass:t.mbase.setChildTeXclass}),t.mfenced=t.mbase.Subclass({type:"mfenced",defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,open:"(",close:")",separators:","},addFakeNodes:function(){var e=this.getValues("open","close","separators");if(e.open=e.open.replace(/[ \t\n\r]/g,""),e.close=e.close.replace(/[ \t\n\r]/g,""),e.separators=e.separators.replace(/[ \t\n\r]/g,""),""!==e.open&&(this.SetData("open",t.mo(e.open).With({fence:!0,form:t.FORM.PREFIX,texClass:t.TEXCLASS.OPEN})),this.data.open.useMMLspacing=0),""!==e.separators){for(;e.separators.length<this.data.length;)e.separators+=e.separators.charAt(e.separators.length-1);for(var s=1,a=this.data.length;s<a;s++)this.data[s]&&(this.SetData("sep"+s,t.mo(e.separators.charAt(s-1)).With({separator:!0})),this.data["sep"+s].useMMLspacing=0)}""!==e.close&&(this.SetData("close",t.mo(e.close).With({fence:!0,form:t.FORM.POSTFIX,texClass:t.TEXCLASS.CLOSE})),this.data.close.useMMLspacing=0)},texClass:t.TEXCLASS.OPEN,setTeXclass:function(e){this.addFakeNodes(),this.getPrevClass(e),this.data.open&&(e=this.data.open.setTeXclass(e)),this.data[0]&&(e=this.data[0].setTeXclass(e));for(var s=1,a=this.data.length;s<a;s++)this.data["sep"+s]&&(e=this.data["sep"+s].setTeXclass(e)),this.data[s]&&(e=this.data[s].setTeXclass(e));return this.data.close&&(e=this.data.close.setTeXclass(e)),this.updateTeXclass(this.data.open),this.texClass=t.TEXCLASS.INNER,e}}),t.menclose=t.mbase.Subclass({type:"menclose",inferRow:!0,linebreakContainer:!0,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,notation:t.NOTATION.LONGDIV,texClass:t.TEXCLASS.ORD},setTeXclass:t.mbase.setSeparateTeXclasses}),t.msubsup=t.mbase.Subclass({type:"msubsup",base:0,sub:1,sup:2,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,subscriptshift:"",superscriptshift:"",texClass:t.AUTO},autoDefault:function(e){return"texClass"===e?this.isEmbellished()?this.CoreMO().Get(e):t.TEXCLASS.ORD:0},adjustChild_displaystyle:function(t){return!(t>0)&&this.Get("displaystyle")},adjustChild_scriptlevel:function(t){var e=this.Get("scriptlevel");return t>0&&e++,e},adjustChild_texprimestyle:function(t){return t===this.sub||this.Get("texprimestyle")},setTeXclass:t.mbase.setBaseTeXclasses}),t.msub=t.msubsup.Subclass({type:"msub"}),t.msup=t.msubsup.Subclass({type:"msup",sub:2,sup:1}),t.mmultiscripts=t.msubsup.Subclass({type:"mmultiscripts",adjustChild_texprimestyle:function(t){return t%2===1||this.Get("texprimestyle")}}),t.mprescripts=t.mbase.Subclass({type:"mprescripts"}),t.none=t.mbase.Subclass({type:"none"}),t.munderover=t.mbase.Subclass({type:"munderover",base:0,under:1,over:2,sub:1,sup:2,ACCENTS:["","accentunder","accent"],linebreakContainer:!0,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,accent:t.AUTO,accentunder:t.AUTO,align:t.ALIGN.CENTER,texClass:t.AUTO,subscriptshift:"",superscriptshift:""},autoDefault:function(e){return"texClass"===e?this.isEmbellished()?this.CoreMO().Get(e):t.TEXCLASS.ORD:"accent"===e&&this.data[this.over]?this.data[this.over].CoreMO().Get("accent"):!("accentunder"!==e||!this.data[this.under])&&this.data[this.under].CoreMO().Get("accent")},adjustChild_displaystyle:function(t){return!(t>0)&&this.Get("displaystyle")},adjustChild_scriptlevel:function(t){var e=this.Get("scriptlevel"),s=this.data[this.base]&&!this.Get("displaystyle")&&this.data[this.base].CoreMO().Get("movablelimits");return t!=this.under||!s&&this.Get("accentunder")||e++,t!=this.over||!s&&this.Get("accent")||e++,e},adjustChild_texprimestyle:function(t){return!(t!==this.base||!this.data[this.over])||this.Get("texprimestyle")},setTeXclass:t.mbase.setBaseTeXclasses}),t.munder=t.munderover.Subclass({type:"munder"}),t.mover=t.munderover.Subclass({type:"mover",over:1,under:2,sup:1,sub:2,ACCENTS:["","accent","accentunder"]}),t.mtable=t.mbase.Subclass({type:"mtable",defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,align:t.ALIGN.AXIS,rowalign:t.ALIGN.BASELINE,columnalign:t.ALIGN.CENTER,groupalign:"{left}",alignmentscope:!0,columnwidth:t.WIDTH.AUTO,width:t.WIDTH.AUTO,rowspacing:"1ex",columnspacing:".8em",rowlines:t.LINES.NONE,columnlines:t.LINES.NONE,frame:t.LINES.NONE,framespacing:"0.4em 0.5ex",equalrows:!1,equalcolumns:!1,displaystyle:!1,side:t.SIDE.RIGHT,minlabelspacing:"0.8em",texClass:t.TEXCLASS.ORD,useHeight:1},adjustChild_displaystyle:function(){return null!=this.displaystyle?this.displaystyle:this.defaults.displaystyle},inheritFromMe:!0,noInherit:{mover:{align:!0},munder:{align:!0},munderover:{align:!0},mtable:{align:!0,rowalign:!0,columnalign:!0,groupalign:!0,alignmentscope:!0,columnwidth:!0,width:!0,rowspacing:!0,columnspacing:!0,rowlines:!0,columnlines:!0,frame:!0,framespacing:!0,equalrows:!0,equalcolumns:!0,displaystyle:!0,side:!0,minlabelspacing:!0,texClass:!0,useHeight:1}},linebreakContainer:!0,Append:function(){for(var e=0,s=arguments.length;e<s;e++)arguments[e]instanceof t.mtr||arguments[e]instanceof t.mlabeledtr||(arguments[e]=t.mtr(arguments[e]));this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:t.mbase.setSeparateTeXclasses}),t.mtr=t.mbase.Subclass({type:"mtr",defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,rowalign:t.INHERIT,columnalign:t.INHERIT,groupalign:t.INHERIT},inheritFromMe:!0,noInherit:{mrow:{rowalign:!0,columnalign:!0,groupalign:!0},mtable:{rowalign:!0,columnalign:!0,groupalign:!0}},linebreakContainer:!0,Append:function(){for(var e=0,s=arguments.length;e<s;e++)arguments[e]instanceof t.mtd||(arguments[e]=t.mtd(arguments[e]));this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:t.mbase.setSeparateTeXclasses}),t.mtd=t.mbase.Subclass({type:"mtd",inferRow:!0,linebreakContainer:!0,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,rowspan:1,columnspan:1,rowalign:t.INHERIT,columnalign:t.INHERIT,groupalign:t.INHERIT},setTeXclass:t.mbase.setSeparateTeXclasses}),t.maligngroup=t.mbase.Subclass({type:"maligngroup",isSpacelike:function(){return!0},defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,groupalign:t.INHERIT},inheritFromMe:!0,noInherit:{mrow:{groupalign:!0},mtable:{groupalign:!0}}}),t.malignmark=t.mbase.Subclass({type:"malignmark",defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,edge:t.SIDE.LEFT},isSpacelike:function(){return!0}}),t.mlabeledtr=t.mtr.Subclass({type:"mlabeledtr"}),t.maction=t.mbase.Subclass({type:"maction",defaults:{mathbackground:t.INHERIT,mathcolor:t.INHERIT,actiontype:t.ACTIONTYPE.TOGGLE,selection:1},selected:function(){return this.data[this.Get("selection")-1]||t.NULL},isEmbellished:function(){return this.selected().isEmbellished()},isSpacelike:function(){return this.selected().isSpacelike()},Core:function(){return this.selected().Core()},CoreMO:function(){return this.selected().CoreMO()},setTeXclass:function(e){this.Get("actiontype")===t.ACTIONTYPE.TOOLTIP&&this.data[1]&&this.data[1].setTeXclass();var s=this.selected();return e=s.setTeXclass(e),this.updateTeXclass(s),e}}),t.semantics=t.mbase.Subclass({type:"semantics",notParent:!0,isEmbellished:t.mbase.childEmbellished,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,defaults:{definitionURL:null,encoding:null},setTeXclass:t.mbase.setChildTeXclass,getAnnotation:function(t){var e=MathJax.Hub.config.MathMenu.semanticsAnnotations[t];if(e)for(var s=0,a=this.data.length;s<a;s++){var i=this.data[s].Get("encoding");if(i)for(var n=0,r=e.length;n<r;n++)if(e[n]===i)return this.data[s]}return null}}),t.annotation=t.mbase.Subclass({type:"annotation",isChars:!0,linebreakContainer:!0,defaults:{definitionURL:null,encoding:null,cd:"mathmlkeys",name:"",src:null}}),t["annotation-xml"]=t.mbase.Subclass({type:"annotation-xml",linebreakContainer:!0,defaults:{definitionURL:null,encoding:null,cd:"mathmlkeys",name:"",src:null}}),t.math=t.mstyle.Subclass({type:"math",defaults:{mathvariant:t.VARIANT.NORMAL,mathsize:t.SIZE.NORMAL,mathcolor:"",mathbackground:t.COLOR.TRANSPARENT,dir:"ltr",scriptlevel:0,displaystyle:t.AUTO,display:"inline",maxwidth:"",overflow:t.OVERFLOW.LINEBREAK,altimg:"","altimg-width":"","altimg-height":"","altimg-valign":"",alttext:"",cdgroup:"",scriptsizemultiplier:Math.sqrt(.5),scriptminsize:"8px",infixlinebreakstyle:t.LINEBREAKSTYLE.BEFORE,lineleading:"1ex",indentshift:"auto",indentalign:t.INDENTALIGN.AUTO,indentalignfirst:t.INDENTALIGN.INDENTALIGN,indentshiftfirst:t.INDENTSHIFT.INDENTSHIFT,indentalignlast:t.INDENTALIGN.INDENTALIGN,indentshiftlast:t.INDENTSHIFT.INDENTSHIFT,decimalseparator:".",texprimestyle:!1},autoDefault:function(t){return"displaystyle"===t?"block"===this.Get("display"):""},linebreakContainer:!0,setTeXclass:t.mbase.setChildTeXclass,getAnnotation:function(t){return 1!=this.data.length?null:this.data[0].getAnnotation(t)}}),t.chars=t.mbase.Subclass({type:"chars",Append:function(){this.data.push.apply(this.data,arguments)},value:function(){return this.data.join("")},toString:function(){return this.data.join("")}}),t.entity=t.mbase.Subclass({type:"entity",Append:function(){this.data.push.apply(this.data,arguments)},value:function(){return"#x"===this.data[0].substr(0,2)?parseInt(this.data[0].substr(2),16):"#"===this.data[0].substr(0,1)?parseInt(this.data[0].substr(1)):0},toString:function(){var t=this.value();return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode((t>>10)+55296)+String.fromCharCode((1023&t)+56320))}}),t.xml=t.mbase.Subclass({type:"xml",Init:function(){return this.div=document.createElement("div"),this.SUPER(arguments).Init.apply(this,arguments)},Append:function(){for(var t=0,e=arguments.length;t<e;t++){var s=this.Import(arguments[t]);this.data.push(s),this.div.appendChild(s)}},Import:function(t){if(document.importNode)return document.importNode(t,!0);var e,s,a;if(1===t.nodeType){for(e=document.createElement(t.nodeName),s=0,a=t.attributes.length;s<a;s++){var i=t.attributes[s];i.specified&&null!=i.nodeValue&&""!=i.nodeValue&&e.setAttribute(i.nodeName,i.nodeValue),"style"===i.nodeName&&(e.style.cssText=i.nodeValue)}t.className&&(e.className=t.className)}else if(3===t.nodeType||4===t.nodeType)e=document.createTextNode(t.nodeValue);else{if(8!==t.nodeType)return document.createTextNode("");e=document.createComment(t.nodeValue)}for(s=0,a=t.childNodes.length;s<a;s++)e.appendChild(this.Import(t.childNodes[s]));return e},value:function(){return this.div},toString:function(){return this.div.innerHTML}}),t.TeXAtom=t.mbase.Subclass({type:"texatom",linebreakContainer:!0,inferRow:!0,notParent:!0,texClass:t.TEXCLASS.ORD,Core:t.mbase.childCore,CoreMO:t.mbase.childCoreMO,isEmbellished:t.mbase.childEmbellished,setTeXclass:function(t){return this.data[0].setTeXclass(),this.adjustTeXclass(t)},adjustTeXclass:t.mo.prototype.adjustTeXclass}),t.NULL=t.mbase().With({type:"null"});var e=t.TEXCLASS,s={ORD:[0,0,e.ORD],ORD11:[1,1,e.ORD],ORD21:[2,1,e.ORD],ORD02:[0,2,e.ORD],ORD55:[5,5,e.ORD],OP:[1,2,e.OP,{largeop:!0,movablelimits:!0,symmetric:!0}],OPFIXED:[1,2,e.OP,{largeop:!0,movablelimits:!0}],INTEGRAL:[0,1,e.OP,{largeop:!0,symmetric:!0}],INTEGRAL2:[1,2,e.OP,{largeop:!0,symmetric:!0}],BIN3:[3,3,e.BIN],BIN4:[4,4,e.BIN],BIN01:[0,1,e.BIN],BIN5:[5,5,e.BIN],TALLBIN:[4,4,e.BIN,{stretchy:!0}],BINOP:[4,4,e.BIN,{largeop:!0,movablelimits:!0}],REL:[5,5,e.REL],REL1:[1,1,e.REL,{stretchy:!0}],REL4:[4,4,e.REL],RELSTRETCH:[5,5,e.REL,{stretchy:!0}],RELACCENT:[5,5,e.REL,{accent:!0}],WIDEREL:[5,5,e.REL,{accent:!0,stretchy:!0}],OPEN:[0,0,e.OPEN,{fence:!0,stretchy:!0,symmetric:!0}],CLOSE:[0,0,e.CLOSE,{fence:!0,stretchy:!0,symmetric:!0}],INNER:[0,0,e.INNER],
PUNCT:[0,3,e.PUNCT],ACCENT:[0,0,e.ORD,{accent:!0}],WIDEACCENT:[0,0,e.ORD,{accent:!0,stretchy:!0}]};t.mo.Augment({SPACE:["0em","0.1111em","0.1667em","0.2222em","0.2667em","0.3333em"],RANGES:[[32,127,e.REL,"BasicLatin"],[160,255,e.ORD,"Latin1Supplement"],[256,383,e.ORD],[384,591,e.ORD],[688,767,e.ORD,"SpacingModLetters"],[768,879,e.ORD,"CombDiacritMarks"],[880,1023,e.ORD,"GreekAndCoptic"],[7680,7935,e.ORD],[8192,8303,e.PUNCT,"GeneralPunctuation"],[8304,8351,e.ORD],[8352,8399,e.ORD],[8400,8447,e.ORD,"CombDiactForSymbols"],[8448,8527,e.ORD,"LetterlikeSymbols"],[8528,8591,e.ORD],[8592,8703,e.REL,"Arrows"],[8704,8959,e.BIN,"MathOperators"],[8960,9215,e.ORD,"MiscTechnical"],[9312,9471,e.ORD],[9472,9631,e.ORD],[9632,9727,e.ORD,"GeometricShapes"],[9984,10175,e.ORD,"Dingbats"],[10176,10223,e.ORD,"MiscMathSymbolsA"],[10224,10239,e.REL,"SupplementalArrowsA"],[10496,10623,e.REL,"SupplementalArrowsB"],[10624,10751,e.ORD,"MiscMathSymbolsB"],[10752,11007,e.BIN,"SuppMathOperators"],[11008,11263,e.ORD,"MiscSymbolsAndArrows"],[119808,120831,e.ORD]],OPTABLE:{prefix:{"∀":s.ORD21,"∂":s.ORD21,"∃":s.ORD21,"∇":s.ORD21,"∏":s.OP,"∐":s.OP,"∑":s.OP,"−":s.BIN01,"∓":s.BIN01,"√":[1,1,e.ORD,{stretchy:!0}],"∠":s.ORD,"∫":s.INTEGRAL,"∮":s.INTEGRAL,"⋀":s.OP,"⋁":s.OP,"⋂":s.OP,"⋃":s.OP,"⌈":s.OPEN,"⌊":s.OPEN,"⟨":s.OPEN,"⟮":s.OPEN,"⨀":s.OP,"⨁":s.OP,"⨂":s.OP,"⨄":s.OP,"⨆":s.OP,"¬":s.ORD21,"±":s.BIN01,"(":s.OPEN,"+":s.BIN01,"-":s.BIN01,"[":s.OPEN,"{":s.OPEN,"|":s.OPEN},postfix:{"!":[1,0,e.CLOSE],"&":s.ORD,"′":s.ORD02,"‾":s.WIDEACCENT,"⌉":s.CLOSE,"⌋":s.CLOSE,"⏞":s.WIDEACCENT,"⏟":s.WIDEACCENT,"♭":s.ORD02,"♮":s.ORD02,"♯":s.ORD02,"⟩":s.CLOSE,"⟯":s.CLOSE,"ˆ":s.WIDEACCENT,"ˇ":s.WIDEACCENT,"ˉ":s.WIDEACCENT,"ˊ":s.ACCENT,"ˋ":s.ACCENT,"˘":s.ACCENT,"˙":s.ACCENT,"˜":s.WIDEACCENT,"̂":s.WIDEACCENT,"¨":s.ACCENT,"¯":s.WIDEACCENT,")":s.CLOSE,"]":s.CLOSE,"^":s.WIDEACCENT,_:s.WIDEACCENT,"`":s.ACCENT,"|":s.CLOSE,"}":s.CLOSE,"~":s.WIDEACCENT},infix:{"":s.ORD,"%":[3,3,e.ORD],"•":s.BIN4,"…":s.INNER,"⁄":s.TALLBIN,"⁡":s.ORD,"⁢":s.ORD,"⁣":[0,0,e.ORD,{linebreakstyle:"after",separator:!0}],"⁤":s.ORD,"←":s.WIDEREL,"↑":s.RELSTRETCH,"→":s.WIDEREL,"↓":s.RELSTRETCH,"↔":s.WIDEREL,"↕":s.RELSTRETCH,"↖":s.RELSTRETCH,"↗":s.RELSTRETCH,"↘":s.RELSTRETCH,"↙":s.RELSTRETCH,"↦":s.WIDEREL,"↩":s.WIDEREL,"↪":s.WIDEREL,"↼":s.WIDEREL,"↽":s.WIDEREL,"⇀":s.WIDEREL,"⇁":s.WIDEREL,"⇌":s.WIDEREL,"⇐":s.WIDEREL,"⇑":s.RELSTRETCH,"⇒":s.WIDEREL,"⇓":s.RELSTRETCH,"⇔":s.WIDEREL,"⇕":s.RELSTRETCH,"∈":s.REL,"∉":s.REL,"∋":s.REL,"−":s.BIN4,"∓":s.BIN4,"∕":s.TALLBIN,"∖":s.BIN4,"∗":s.BIN4,"∘":s.BIN4,"∙":s.BIN4,"∝":s.REL,"∣":s.REL,"∥":s.REL,"∧":s.BIN4,"∨":s.BIN4,"∩":s.BIN4,"∪":s.BIN4,"∼":s.REL,"≀":s.BIN4,"≃":s.REL,"≅":s.REL,"≈":s.REL,"≍":s.REL,"≐":s.REL,"≠":s.REL,"≡":s.REL,"≤":s.REL,"≥":s.REL,"≪":s.REL,"≫":s.REL,"≺":s.REL,"≻":s.REL,"⊂":s.REL,"⊃":s.REL,"⊆":s.REL,"⊇":s.REL,"⊎":s.BIN4,"⊑":s.REL,"⊒":s.REL,"⊓":s.BIN4,"⊔":s.BIN4,"⊕":s.BIN4,"⊖":s.BIN4,"⊗":s.BIN4,"⊘":s.BIN4,"⊙":s.BIN4,"⊢":s.REL,"⊣":s.REL,"⊤":s.ORD55,"⊥":s.REL,"⊨":s.REL,"⋄":s.BIN4,"⋅":s.BIN4,"⋆":s.BIN4,"⋈":s.REL,"⋮":s.ORD55,"⋯":s.INNER,"⋱":[5,5,e.INNER],"△":s.BIN4,"▵":s.BIN4,"▹":s.BIN4,"▽":s.BIN4,"▿":s.BIN4,"◃":s.BIN4,"❘":s.REL,"⟵":s.WIDEREL,"⟶":s.WIDEREL,"⟷":s.WIDEREL,"⟸":s.WIDEREL,"⟹":s.WIDEREL,"⟺":s.WIDEREL,"⟼":s.WIDEREL,"⨯":s.BIN4,"⨿":s.BIN4,"⪯":s.REL,"⪰":s.REL,"±":s.BIN4,"·":s.BIN4,"×":s.BIN4,"÷":s.BIN4,"*":s.BIN3,"+":s.BIN4,",":[0,3,e.PUNCT,{linebreakstyle:"after",separator:!0}],"-":s.BIN4,".":[3,3,e.ORD],"/":s.ORD11,":":[1,2,e.REL],";":[0,3,e.PUNCT,{linebreakstyle:"after",separator:!0}],"<":s.REL,"=":s.REL,">":s.REL,"?":[1,1,e.CLOSE],"\\":s.ORD,"^":s.ORD11,_:s.ORD11,"|":[2,2,e.ORD,{fence:!0,stretchy:!0,symmetric:!0}],"#":s.ORD,$:s.ORD,".":[0,3,e.PUNCT,{separator:!0}],"ʹ":s.ORD,"̀":s.ACCENT,"́":s.ACCENT,"̃":s.WIDEACCENT,"̄":s.ACCENT,"̆":s.ACCENT,"̇":s.ACCENT,"̈":s.ACCENT,"̌":s.ACCENT,"̲":s.WIDEACCENT,"̸":s.REL4,"―":[0,0,e.ORD,{stretchy:!0}],"‗":[0,0,e.ORD,{stretchy:!0}],"†":s.BIN3,"‡":s.BIN3,"⃗":s.ACCENT,"ℑ":s.ORD,"ℓ":s.ORD,"℘":s.ORD,"ℜ":s.ORD,"∅":s.ORD,"∞":s.ORD,"⌅":s.BIN3,"⌆":s.BIN3,"⌢":s.REL4,"⌣":s.REL4,"〈":s.OPEN,"〉":s.CLOSE,"⎪":s.ORD,"⎯":[0,0,e.ORD,{stretchy:!0}],"⎰":s.OPEN,"⎱":s.CLOSE,"─":s.ORD,"◯":s.BIN3,"♠":s.ORD,"♡":s.ORD,"♢":s.ORD,"♣":s.ORD,"〈":s.OPEN,"〉":s.CLOSE,"︷":s.WIDEACCENT,"︸":s.WIDEACCENT}}},{OPTYPES:s});var a=t.mo.prototype.OPTABLE;a.infix["^"]=s.WIDEREL,a.infix._=s.WIDEREL,a.prefix["∣"]=s.OPEN,a.prefix["∥"]=s.OPEN,a.postfix["∣"]=s.CLOSE,a.postfix["∥"]=s.CLOSE}(MathJax.ElementJax.mml),MathJax.ElementJax.mml.loadComplete("jax.js");