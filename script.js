document.addEventListener('DOMContentLoaded', () => {
    // Create master timeline with continuous auto-looping
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Elements
    const leftClickBtn = document.getElementById('left-click-btn');
    const clickRipple = document.getElementById('click-ripple');
    const cardPrediction = document.getElementById('card-prediction');
    
    const packetInput = document.getElementById('packet-input');
    const packetResponseA = document.getElementById('packet-response-a');
    const packetResponseB = document.getElementById('packet-response-b');

    const tick102Box = document.getElementById('tick-102-box');
    const tick104Box = document.getElementById('tick-104-box');
    const rewindArrow = document.getElementById('rewind-arrow');
    const rewindLabel = document.getElementById('rewind-label');

    const serverRaycast = document.getElementById('server-raycast');
    const targetHitbox = document.getElementById('target-hitbox');
    const impactFlash = document.getElementById('impact-flash');
    const badgeHitResult = document.getElementById('badge-hit-result');

    const hitmarkerBox = document.getElementById('hitmarker-box');
    const killbannerBox = document.getElementById('killbanner-box');
    
    const hpText = document.getElementById('hp-text');
    const hpChange = document.getElementById('hp-change');
    const hpBox = document.getElementById('hp-box');

    // Initial setup state
    gsap.set(serverRaycast, strokeDashoffset: 300);
    
    // ================= ANIMATION SEQUENCING ================= //

    // STEP 1: LEFT CLICK & CLIENT PREDICTION (0.0s - 1.5s)
    tl.to(leftClickBtn, { fill: '#34D399', duration: 0.2 })
      .to(clickRipple, { opacity: 1, scale: 2.5, transformOrigin: 'center center', duration: 0.5 }, "-=0.1")
      .to(clickRipple, { opacity: 0, duration: 0.2 })
      .to(leftClickBtn, { fill: '#38BDF8', duration: 0.2 })
      
      // Client Prediction Local FX highlight
      .to(cardPrediction, { stroke: '#38BDF8', strokeWidth: 2.5, duration: 0.3 }, "-=0.2")
      .to(cardPrediction, { stroke: '#334155', strokeWidth: 1.5, duration: 0.4 }, "+=0.3");

    // STEP 2: INPUT PACKET TRAVEL TO SERVER (1.5s - 3.5s)
    tl.to(packetInput, { opacity: 1, duration: 0.2 })
      .to(packetInput, {
          x: 710,
          y: 380,
          duration: 1.8,
          ease: "power1.inOut"
      })
      .to(packetInput, { opacity: 0, duration: 0.2 });

    // STEP 3: SERVER RECEIVE & TICK REWIND (3.5s - 6.0s)
    tl.to(tick104Box, { strokeWidth: 3, fill: '#331D2C', duration: 0.3 })
      .to(rewindArrow, { opacity: 1, duration: 0.4 })
      .to(rewindLabel, { opacity: 1, duration: 0.4 }, "-=0.2")
      .to(tick102Box, { fill: '#0EA5E9', stroke: '#F8FAFC', strokeWidth: 3, duration: 0.4 })
      .to(tick102Box, { fill: '#1E293B', stroke: '#38BDF8', strokeWidth: 2, duration: 0.4 });

    // STEP 4: SERVER RAYCAST & HIT VALIDATION (6.0s - 7.5s)
    tl.fromTo(serverRaycast, 
        { strokeDasharray: 300, strokeDashoffset: 300 }, 
        { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }
      )
      .to(impactFlash, { opacity: 1, scale: 1.8, transformOrigin: "center center", duration: 0.2 }, "-=0.1")
      .to(targetHitbox, { fill: '#FF4655', opacity: 0.8, duration: 0.2 }, "-=0.2")
      .to(impactFlash, { opacity: 0, duration: 0.2 })
      .to(badgeHitResult, { fill: '#059669', opacity: 0.4, duration: 0.3 });

    // STEP 5: STATE BROADCAST (7.5s - 9.5s)
    tl.to([packetResponseA, packetResponseB], { opacity: 1, duration: 0.2 })
      .to(packetResponseA, {
          x: 540,
          y: 760,
          duration: 1.6,
          ease: "power1.inOut"
      }, "broadcast")
      .to(packetResponseB, {
          x: 1380,
          y: 570,
          duration: 1.6,
          ease: "power1.inOut"
      }, "broadcast")
      .to([packetResponseA, packetResponseB], { opacity: 0, duration: 0.2 });

    // STEP 6: STATE RECONCILIATION ON CLIENTS (9.5s - 11.5s)
    tl.to(hitmarkerBox, { opacity: 1, fill: '#064E3B', strokeWidth: 2, duration: 0.4 }, "reconcile")
      .to(killbannerBox, { opacity: 1, fill: '#064E3B', strokeWidth: 2, duration: 0.4 }, "reconcile+=0.2")
      .to(hpBox, { opacity: 1, fill: '#450A0A', strokeWidth: 2, duration: 0.4 }, "reconcile")
      .to(hpText, { textContent: "0 HP", fill: '#FF4655', duration: 0.2 }, "reconcile+=0.2")
      .to(hpChange, { fill: '#F8FAFC', textContent: "(DEAD)", duration: 0.2 }, "reconcile+=0.2");

    // HOLD FINAL STATE THEN RESET FOR LOOP (11.5s - 13.0s)
    tl.to({}, { duration: 1.5 })
      .to([
          rewindArrow, 
          rewindLabel, 
          hitmarkerBox, 
          killbannerBox, 
          badgeHitResult
      ], { opacity: 0, duration: 0.5 }, "reset")
      .to(hpBox, { opacity: 0.4, fill: '#1E293B', duration: 0.5 }, "reset")
      .to(hpText, { textContent: "100 HP", fill: '#FF4655', duration: 0.5 }, "reset")
      .to(hpChange, { textContent: "0 HP", fill: '#FF4655', duration: 0.5 }, "reset")
      .to(targetHitbox, { opacity: 0.3, duration: 0.5 }, "reset");
});
