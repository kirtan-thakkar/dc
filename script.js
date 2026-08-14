const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runAnimation() {
    // Get Scenes
    const scenes = [
        document.getElementById('scene-1'),
        document.getElementById('scene-2'),
        document.getElementById('scene-3'),
        document.getElementById('scene-4')
    ];

    // Scene 1 Elements
    const s1Click = document.getElementById('s1-click');
    const s1Laser = document.getElementById('s1-laser');

    // Scene 2 Elements
    const s2Packet = document.getElementById('s2-packet');

    // Scene 3 Elements
    const s3Step1 = document.getElementById('s3-step1');
    const s3Step2 = document.getElementById('s3-step2');
    const s3Step3 = document.getElementById('s3-step3');

    // Scene 4 Elements
    const s4PacketA = document.getElementById('s4-packet-a');
    const s4PacketB = document.getElementById('s4-packet-b');
    const s4ResA = document.getElementById('s4-res-a');
    const s4ResB = document.getElementById('s4-res-b');

    while (true) {
        // --- RESET EVERYTHING ---
        scenes.forEach(s => s.classList.remove('active'));
        s1Click.classList.remove('show');
        s1Laser.classList.remove('shoot');
        
        s2Packet.classList.remove('move');
        
        s3Step1.classList.remove('show');
        s3Step2.classList.remove('show');
        s3Step3.classList.remove('show');
        
        s4PacketA.classList.remove('move');
        s4PacketB.classList.remove('move');
        s4ResA.classList.remove('show');
        s4ResB.classList.remove('show');

        await wait(2000);

        // --- SCENE 1: Local Illusion ---
        scenes[0].classList.add('active');
        await wait(3000); // Plenty of time to read intro text
        
        s1Click.classList.add('show');
        await wait(800);
        s1Laser.classList.add('shoot');
        
        await wait(5000); // Hold scene for 5s to explain local prediction
        scenes[0].classList.remove('active');
        await wait(1000); // Fade out gap

        // --- SCENE 2: Data Travels ---
        scenes[1].classList.add('active');
        await wait(3000); // Plenty of time to read text
        
        s2Packet.classList.add('move'); // CSS transition handles the movement over 4s now
        
        await wait(6000); // Hold scene (4s move + 2s hold)
        scenes[1].classList.remove('active');
        await wait(1000); // Fade out gap

        // --- SCENE 3: Server Processing ---
        scenes[2].classList.add('active');
        await wait(3000); // Read text
        
        s3Step1.classList.add('show');
        await wait(2000); // Slow down the steps
        s3Step2.classList.add('show');
        await wait(2000); 
        s3Step3.classList.add('show'); 
        
        await wait(5000); // Hold scene for 5s to explain server authority
        scenes[2].classList.remove('active');
        await wait(1000); // Fade out gap

        // --- SCENE 4: State Synchronization ---
        scenes[3].classList.add('active');
        await wait(3000); // Read text
        
        // Packets shoot out from server to clients
        s4PacketA.classList.add('move');
        s4PacketB.classList.add('move');
        
        await wait(3000); // Wait for slow packets to reach players
        
        // Both clients display results
        s4ResA.classList.add('show'); 
        s4ResB.classList.add('show'); 
        
        await wait(7000); // Hold final scene for 7s to summarize everything
        scenes[3].classList.remove('active');
        await wait(1500); // Fade out gap before looping back to Scene 1
    }
}

window.onload = runAnimation;
