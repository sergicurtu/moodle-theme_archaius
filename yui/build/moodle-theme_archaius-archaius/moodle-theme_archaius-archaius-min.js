YUI.add("moodle-theme_archaius-archaius",function(e,t){M.theme_archaius_loader=M.theme_archaius_loader||{},M.theme_archaius_loader={activateAccordionBlocks:1,activateTopicsCourseMenu:1,activateSlideshow:0,activateHideAndShowBlocks:1,activatePausePlaySlideshow:0,archaiusJSEffects:ArchaiusJSEffects.getInstance(),slideshowTimeout:4e3,currentModuleName:0,currentModuleId:0,courseContextId:0,showRegionPre:1,showRegionPost:1,init:function(e){this.activateAccordionBlocks=parseInt(e.accordionBlocks,10),this.activateSlideshow=parseInt(e.activateSlideshow,10),this.activateHideAndShowBlocks=parseInt(e.activateHideAndShowBlocks,10),this.activateTopicsCourseMenu=parseInt(e.activateTopicsCourseMenu,10),this.activatePausePlaySlideshow=parseInt(e.activatePausePlaySlideshow,10),this.slideshowTimeout=parseInt(e.slideshowTimeout,10),this.confirmationDeleteSlide=e.confirmationDeleteSlide,this.noSlides=e.noSlides,this.courseContextId=e.courseContextId,this.showRegionPre=parseInt(e.showRegionPre,10),this.showRegionPost=parseInt(e.showRegionPost,10),e.currentModuleName!==undefined&&e.currentModuleId!==undefined&&(this.currentModuleName=e.currentModuleName,this.currentModuleId=e.currentModuleId),this.activateAccordionBlocks?this.accordionBlocks():this.commonBlocks(),this.activateHideAndShowBlocks&&this.hideShowBlocks(),this.activateSlideshow&&this.startSlideshow(this.activatePausePlaySlideshow,this.slideshowTimeout,this.confirmationDeleteSlide,this.noSlides),this.topicsCourseMenu(this.activateTopicsCourseMenu)},commonBlocks:function(){this.archaiusJSEffects.commonBlocks()},accordionBlocks:function(){this.archaiusJSEffects.accordionBlocks()},hideShowBlocks:function(){this.archaiusJSEffects.hideShowBlocks()},topicsCourseMenu:function(e){this.archaiusJSEffects.topicsCourseMenu(e)},startSlideshow:function(e,t,n,r){this.archaiusJSEffects.initSlideshow(e,t,n,r)},getUserPreferenceName:function(e){var t="archaius-blocks-region-"+e+"-context-"+this.courseContextId;return this.currentModuleName!==0&&this.currentModuleId!==0&&(t+="-"+this.currentModuleName+"-"+this.currentModuleId),t},setUserPreference:function(e,t){var n=this.getUserPreferenceName(e);M.util.set_user_preference(n,t)}}},"@VERSION@",{requires:["base"]});
