/* ==========================================================================
   Gunite Pools Renovations - JavaScript Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Mobile Navigation Toggle
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. Finish Visualizer
     ------------------------------------------------------------------------ */
  const finishData = {
    plaster: {
      title: 'Traditional White & Sky Blue Plaster',
      desc: 'Silky smooth white cement marble plaster. Delivers bright sky-blue reflections under natural sunlight and maximum comfort for bare feet.',
      color: 'Sky Blue / Light Aqua',
      lifespan: '7 - 10 Years',
      feel: 'Ultra Smooth',
      stain: '70%',
      durability: '75%',
      img: 'assets/quartz_finish.png',
      cta: 'Select Plaster for Free Estimate'
    },
    quartz: {
      title: 'Quartz Aggregate Finish (Color-Hardened)',
      desc: 'Engineered with natural quartz aggregate crystals blended into fortified polymer cement. High resistance to pool chemical imbalances and surface staining.',
      color: 'Emerald Cyan / Diamond Blue',
      lifespan: '10 - 15 Years',
      feel: 'Lightly Textured',
      stain: '88%',
      durability: '90%',
      img: 'assets/quartz_finish.png',
      cta: 'Select Quartz for Free Estimate'
    },
    pebble: {
      title: 'Luxury Pebble Finish (Pebble Tec Style)',
      desc: 'Selected natural smooth river pebbles embedded in a high-strength matrix. Offers maximum stain resistance, unmatched durability, and a natural tropical lagoon ambiance.',
      color: 'Deep Ocean Blue / Sapphire',
      lifespan: '20+ Years Warranty',
      feel: 'Natural Tactile Pebble',
      stain: '98%',
      durability: '99%',
      img: 'assets/pebble_finish.png',
      cta: 'Select Pebble Tec Finish for Free Estimate'
    },
    tile: {
      title: 'Full Custom Glass Mosaic Tile Surface',
      desc: 'Hand-tiled throughout the entire pool shell using freeze-proof iridescent glass mosaic tiles. Impervious to water absorption and chemical discoloration.',
      color: 'Iridescent Royal Blue Glow',
      lifespan: '30+ Years Lifetime',
      feel: 'Polished Smooth Glass',
      stain: '100%',
      durability: '100%',
      img: 'assets/tile_coping.png',
      cta: 'Select All-Tile Surface for Free Estimate'
    }
  };

  const visTabs = document.querySelectorAll('.vis-tab');
  const visImage = document.getElementById('visImage');
  const visTitle = document.getElementById('visTitle');
  const visDesc = document.getElementById('visDesc');
  const specColor = document.getElementById('specColor');
  const specLifespan = document.getElementById('specLifespan');
  const specFeel = document.getElementById('specFeel');
  const specStain = document.getElementById('specStain');
  const specDurability = document.getElementById('specDurability');
  const visCtaBtn = document.getElementById('visCtaBtn');

  visTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      visTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.dataset.finish;
      const data = finishData[key];

      if (data) {
        visImage.src = data.img;
        visTitle.textContent = data.title;
        visDesc.textContent = data.desc;
        specColor.textContent = data.color;
        specLifespan.textContent = data.lifespan;
        specFeel.textContent = data.feel;
        specStain.style.width = data.stain;
        specDurability.style.width = data.durability;
        visCtaBtn.textContent = data.cta;
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. Before & After Drag Slider
     ------------------------------------------------------------------------ */
  const baContainer = document.getElementById('baContainer');
  const baBeforeWrapper = document.getElementById('baBeforeWrapper');
  const baHandle = document.getElementById('baHandle');

  if (baContainer && baBeforeWrapper && baHandle) {
    let isDragging = false;

    const setSliderPosition = (x) => {
      const rect = baContainer.getBoundingClientRect();
      let pos = x - rect.left;
      if (pos < 0) pos = 0;
      if (pos > rect.width) pos = rect.width;

      const percentage = (pos / rect.width) * 100;
      baBeforeWrapper.style.width = `${percentage}%`;
      baHandle.style.left = `${percentage}%`;
    };

    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    });
  }

  /* ------------------------------------------------------------------------
     4. Estimate Calculator
     ------------------------------------------------------------------------ */
  const calcStepIndicators = document.querySelectorAll('.calc-step');
  const calcStepPanels = document.querySelectorAll('.calc-panel');
  const nextBtns = document.querySelectorAll('.next-step-btn');
  const prevBtns = document.querySelectorAll('.prev-step-btn');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcSummaryText = document.getElementById('calcSummaryText');

  const goToStep = (stepNumber) => {
    calcStepPanels.forEach(panel => panel.classList.remove('active'));
    document.getElementById(`step${stepNumber}`).classList.add('active');

    calcStepIndicators.forEach(ind => {
      const stepIdx = parseInt(ind.dataset.step);
      if (stepIdx <= stepNumber) {
        ind.classList.add('active');
      } else {
        ind.classList.remove('active');
      }
    });
  };

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.dataset.next);
      if (nextStep === 4) calculatePrice();
      goToStep(nextStep);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.dataset.prev);
      goToStep(prevStep);
    });
  });

  function calculatePrice() {
    const service = document.querySelector('input[name="calcService"]:checked')?.value || 'Full Renovation';
    const size = document.querySelector('input[name="calcSize"]:checked')?.value || 'Medium (16x32 ft)';
    const finish = document.querySelector('input[name="calcFinish"]:checked')?.value || 'Standard Plaster';

    let baseMin = 4500;
    let baseMax = 7000;

    if (size.includes('Medium')) {
      baseMin *= 1.4;
      baseMax *= 1.45;
    } else if (size.includes('Large')) {
      baseMin *= 1.9;
      baseMax *= 2.0;
    } else if (size.includes('Custom')) {
      baseMin *= 2.5;
      baseMax *= 2.8;
    }

    if (service.includes('Full Renovation')) {
      baseMin += 2500;
      baseMax += 4000;
    } else if (service.includes('Tile & Coping')) {
      baseMin *= 0.6;
      baseMax *= 0.7;
    }

    if (finish.includes('Quartz')) {
      baseMin += 1200;
      baseMax += 1800;
    } else if (finish.includes('Pebble')) {
      baseMin += 2800;
      baseMax += 4200;
    } else if (finish.includes('Glass Tile')) {
      baseMin += 8000;
      baseMax += 14000;
    }

    const minStr = Math.round(baseMin).toLocaleString('en-US');
    const maxStr = Math.round(baseMax).toLocaleString('en-US');

    calcPriceDisplay.textContent = `$${minStr} - $${maxStr}`;
    calcSummaryText.textContent = `Estimated cost range for ${service} (${size}) with ${finish} in Massachusetts.`;
  }

  const calcForm = document.getElementById('calcForm');
  const calcSuccessMsg = document.getElementById('calcSuccessMsg');
  const submitQuoteBtn = document.getElementById('submitQuoteBtn');

  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitQuoteBtn.disabled = true;
      submitQuoteBtn.innerHTML = 'Submitting Request...';

      setTimeout(() => {
        calcSuccessMsg.style.display = 'block';
        submitQuoteBtn.style.display = 'none';
      }, 800);
    });
  }

  /* ------------------------------------------------------------------------
     5. MA Service Area Checker
     ------------------------------------------------------------------------ */
  const maTowns = [
    'boston', 'worcester', 'springfield', 'cambridge', 'lowell', 'brockton', 'quincy',
    'lynn', 'newton', 'fall river', 'somerville', 'lawrence', 'framingham', 'haverhill',
    'malden', 'waltham', 'brookline', 'plymouth', 'medford', 'taunton', 'chicopee',
    'weymouth', 'revere', 'peabody', 'methuen', 'barnstable', 'pittsfield', 'attleboro',
    'arlington', 'everett', 'salem', 'westfield', 'leominster', 'fitchburg', 'beverly',
    'holyoke', 'marlborough', 'woburn', 'amherst', 'braintree', 'shrewsbury', 'chelsea',
    'dartmouth', 'chelmsford', 'natick', 'andover', 'lexington', 'wellesley', 'needham',
    'concord', 'cape cod', 'hyannis', 'falmouth', 'marthas vineyard', 'nantucket', 'hingham',
    'scituate', 'cohasset', 'marblehead', 'duxbury', 'sudbury', 'acton', 'weston'
  ];

  const zipInput = document.getElementById('zipInput');
  const checkZipBtn = document.getElementById('checkZipBtn');
  const zipResult = document.getElementById('zipResult');

  if (checkZipBtn && zipInput && zipResult) {
    const performCheck = () => {
      const val = zipInput.value.trim().toLowerCase();
      if (!val) {
        zipResult.textContent = 'Please enter a town name or 5-digit Zip Code in MA.';
        zipResult.className = 'checker-msg error';
        return;
      }

      const isZip = /^\d{5}$/.test(val);
      const isMaZip = isZip && (val.startsWith('01') || val.startsWith('02'));
      const isTownMatch = maTowns.some(town => town.includes(val) || val.includes(town));

      if (isMaZip || isTownMatch || val.includes('ma') || val.includes('mass')) {
        zipResult.innerHTML = `✓ Great news! Gunite Pools Renovations operates full crews in <strong>${zipInput.value}</strong>! Call (978) 596-4103 for your Free Estimate.`;
        zipResult.className = 'checker-msg success';
      } else {
        zipResult.innerHTML = `✓ We service all of Massachusetts (MA)! Call us at (978) 596-4103 to confirm your inspection date.`;
        zipResult.className = 'checker-msg success';
      }
    };

    checkZipBtn.addEventListener('click', performCheck);
    zipInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performCheck();
    });
  }

  /* ------------------------------------------------------------------------
     6. Direct Contact Form
     ------------------------------------------------------------------------ */
  const directContactForm = document.getElementById('directContactForm');
  const directSubmitBtn = document.getElementById('directSubmitBtn');
  const contactSuccess = document.getElementById('contactSuccess');

  if (directContactForm) {
    directContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      directSubmitBtn.disabled = true;
      directSubmitBtn.innerHTML = 'Sending...';

      setTimeout(() => {
        contactSuccess.style.display = 'block';
        directSubmitBtn.style.display = 'none';
      }, 800);
    });
  }

});
