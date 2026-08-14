// Simple Wait Function
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runAnimation() {
    // Get all elements
    const actClick = document.getElementById('action-click');
    const actResult = document.getElementById('action-result');
    const packetSend = document.getElementById('packet-send');
    const packetReturn = document.getElementById('packet-return');
    const actCalc = document.getElementById('action-calc');
    const actConfirm = document.getElementById('action-confirm');

    while (true) { // Infinite Loop
        // RESET STATE (0s)
        actClick.classList.remove('visible');
        actResult.classList.remove('visible');
        actCalc.classList.remove('visible');
        actConfirm.classList.remove('visible');
        
        packetSend.classList.remove('visible');
        packetSend.style.transition = 'none';
        packetSend.style.left = '0%';

        packetReturn.classList.remove('visible');
        packetReturn.style.transition = 'none';
        packetReturn.style.right = '0%';

        await wait(2000); // 2 second pause before starting

        // STEP 1: Click (2s)
        actClick.classList.add('visible');
        await wait(1500);

        // STEP 2: Packet Appears (3.5s)
        packetSend.classList.add('visible');
        await wait(1000);

        // STEP 3: Packet Moves to Server (4.5s -> 6.5s)
        packetSend.style.transition = 'left 2s linear';
        packetSend.style.left = '85%';
        await wait(2000);

        // STEP 4: Server Calculates (6.5s)
        packetSend.classList.remove('visible');
        actCalc.classList.add('visible');
        await wait(1500);

        // STEP 5: Server Confirms (8.0s)
        actCalc.classList.remove('visible');
        actConfirm.classList.add('visible');
        await wait(1500);

        // STEP 6: Return Packet Appears (9.5s)
        packetReturn.classList.add('visible');
        await wait(1000);

        // STEP 7: Return Packet Moves to Client (10.5s -> 12.5s)
        packetReturn.style.transition = 'right 2s linear';
        packetReturn.style.right = '85%';
        await wait(2000);

        // STEP 8: Client Shows Hitmarker (12.5s)
        packetReturn.classList.remove('visible');
        actResult.classList.add('visible');
        
        // Wait at the end of the sequence before restarting (16s)
        await wait(4000); 
    }
}

// Start the animation when the page loads
window.onload = runAnimation;
