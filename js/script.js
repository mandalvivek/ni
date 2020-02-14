
//wow
new WOW().init();






var tl;

$(window).on("load", function (e) {

  $('.carousel').carousel('pause');





  let checkModal = ($("#designPopup").data('bs.modal') || {}).isShown ;
  console.log(checkModal);
  

  


  $('body, html').on("click", ".pulseBlock button", function (e) {
      tl  = gsap.timeline({ repeat: 0, delay:1});
      tl.fromTo("#designPopup .imageA.red-circle", {opacity: 0},{ opacity: 1, duration: 1 });
      tl.to("#designPopup .imageA.red-circle", {opacity: 0, duration: 1});
      tl.to("#designPopup .data-folders", {x: 220, scale:.5, duration: 1});

      tl.to("#designPopup .productImage .imageB .txt", {opacity: 0, duration: .5},"-=1");

      tl.to("#designPopup .data-folders", {x: 85, y:-15, scale:.75, duration: 1, delay:1});
      tl.to("#designPopup .imageB", {x: -135,y:-30, scale:1.5, duration: 1}, "-=1");
      
      tl.to("#designPopup .productImage .imageB .txt", {opacity: 1,y: 55, scale:1.3, duration: 1});

      // then we can control the whole thing easily...
      tl.pause();
        tl.resume();
      })
  
})