(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top','-'+0+'px');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // Execute when the DOM is fully loaded
  $(document).ready(function () {

    // Animation
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
        $(this).dequeue(); // Important to continue the queue
      });
    });

    // Handle campaign subscription clicks
    $('[data-beacon-subscribe]').each(function() {
      $(this).on('click', function(e) {
        // Check if extension API is available
        if (typeof boycottBeacon !== 'undefined' && typeof boycottBeacon.subscribeToCampaign === 'function') {
          e.preventDefault(); // Prevent default link behavior only if extension handles it
          const subscribeUrl = $(this).attr('href');
          console.log("Attempting to subscribe via Boycott Beacon:", subscribeUrl); // Optional: for debugging
          try {
            boycottBeacon.subscribeToCampaign(subscribeUrl);
          } catch (error) {
            console.error("Error calling boycottBeacon.subscribeToCampaign:", error);
          }
        } else {
          // Optional: Log if the extension isn't detected
          console.log("Boycott Beacon extension not detected or subscribeToCampaign function missing.");
          // Allow default link behavior (e.g., navigating to the campaign.json)
        }
      });
    });

    // Cookie Consent Logic
    const cookieBox = document.getElementById('js-cookie-box');
    const cookieButton = document.getElementById('js-cookie-button');

    // Check if the cookie box element exists on the page and js-cookie is loaded
    if (cookieBox && cookieButton && typeof Cookies !== 'undefined') {
      // Check if the cookie hasn't been set
      if (!Cookies.get('cookie-box')) {
        // Show the cookie box
        cookieBox.classList.remove('cookie-box-hide');

        // Add click listener to the accept button
        cookieButton.onclick = function () {
          // Read expire days from data attribute
          const expireDaysAttr = cookieBox.getAttribute('data-expire-days');
          const expireDays = parseInt(expireDaysAttr) || 30; // Default to 30 if attribute is missing or invalid

          // Set the cookie using js-cookie library
          Cookies.set('cookie-box', true, {
            expires: expireDays,
            path: '/' // Set path to ensure cookie applies site-wide
          });
          // Hide the cookie box
          cookieBox.classList.add('cookie-box-hide');
        };
      }
    } // End if (cookieBox && cookieButton && Cookies)

  }); // END $(document).ready()

  //  Count Up - placed outside ready as it depends on scroll event which is bound separately
  function counter() {
    var oTop;
    var $counts = $('.count'); // Cache selector

    // Check if any .count elements exist before trying to get offset
    if ($counts.length > 0) {
      // Get the offset relative to the document of the first element, calculate trigger point
      oTop = $counts.first().offset().top - window.innerHeight;

      // Check if user has scrolled past the trigger point
      if ($(window).scrollTop() > oTop) {
        $counts.each(function () {
          var $this = $(this);
          // Ensure animation runs only once per element
          if ($this.hasClass('counted')) {
            return;
          }
          $this.addClass('counted'); // Mark as counted

          var countTo = $this.attr('data-count');
          // Ensure countTo is a valid number, default to 0 if not
          countTo = parseFloat(countTo) || 0;

          // Get current text, default to 0 if not a number
          var currentNum = parseFloat($this.text()) || 0;

          $({ countNum: currentNum }).animate({
            countNum: countTo
          }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
              // Always display integers during animation
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              // Ensure the final value is displayed correctly
              $this.text(countTo);
            }
          });
        });
      }
    } // End if $counts.length > 0
  }

  // Bind counter function to scroll event
  $(window).on('scroll', function () {
    counter();
  });

})(jQuery);
