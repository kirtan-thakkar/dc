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
    const s1Tag = document.getElementById('s1-tag');

    // Scene 2 Elements
    const s2Packet = document.getElementById('s2-packet');
    const osi65 = document.getElementById('osi-65');
    const osi4 = document.getElementById('osi-4');
    const osi3 = document.getElementById('osi-3');
    const osi21 = document.getElementById('osi-21');

    // Scene 3 Elements
    const s3Tag = document.getElementById('s3-tag');
    const s3Step1 = document.getElementById('s3-step1');
    const s3Step2 = document.getElementById('s3-step2');
    const s3Step3 = document.getElementById('s3-step3');

    // Scene 4 Elements
    const s4Tag = document.getElementById('s4-tag');
    const s4PacketA = document.getElementById('s4-packet-a');
    const s4PacketB = document.getElementById('s4-packet-b');
    const s4ResA = document.getElementById('s4-res-a');
    const s4ResB = document.getElementById('s4-res-b');

    while (true) {
        // --- RESET EVERYTHING ---
        scenes.forEach(s => s.classList.remove('active'));
        s1Click.classList.remove('show');
        s1Laser.classList.remove('shoot');
        s1Tag.classList.remove('show');
        
        s2Packet.classList.remove('move');
        osi65.classList.remove('show');
        osi4.classList.remove('show');
        osi3.classList.remove('show');
        osi21.classList.remove('show');
        
        s3Tag.classList.remove('show');
        s3Step1.classList.remove('show');
        s3Step2.classList.remove('show');
        s3Step3.classList.remove('show');
        
        s4Tag.classList.remove('show');
        s4PacketA.classList.remove('move');
        s4PacketB.classList.remove('move');
        s4ResA.classList.remove('show');
        s4ResB.classList.remove('show');

        await wait(2000);

        // --- SCENE 1: Local Illusion ---
        scenes[0].classList.add('active');
        await wait(1500); 
        s1Tag.classList.add('show'); // Application Layer tag
        await wait(1500); // Read text
        
        s1Click.classList.add('show');
        await wait(800);
        s1Laser.classList.add('shoot');
        
        await wait(5000); // Hold scene
        scenes[0].classList.remove('active');
        await wait(1000); // Fade out gap

        // --- SCENE 2: Data Travels (OSI Encapsulation) ---
        scenes[1].classList.add('active');
        await wait(2000); // Read text
        
        // Packet starts moving (takes 4s)
        s2Packet.classList.add('move'); 
        
        // As packet moves, list the OSI layers encapsulated
        await wait(500);
        osi65.classList.add('show');
        await wait(1000);
        osi4.classList.add('show');
        await wait(1000);
        osi3.classList.add('show');
        await wait(1000);
        osi21.classList.add('show');
        
        await wait(4000); // Hold scene after packet stops
        scenes[1].classList.remove('active');
        await wait(1000); // Fade out gap

        // --- SCENE 3: Server Processing ---
        scenes[2].classList.add('active');
        await wait(1500);
        s3Tag.classList.add('show'); // Reverse OSI tag
        await wait(1500); // Read text
        
        s3Step1.classList.add('show');
        await wait(2000);
        s3Step2.classList.add('show');
        await wait(2000); 
        s3Step3.classList.add('show'); 
        
        await wait(5000); // Hold scene
        scenes[2].classList.remove('active');
        await wait(1000); // Fade out gap

        // --- SCENE 4: State Synchronization ---
        scenes[3].classList.add('active');
        await wait(1500); 
        s4Tag.classList.add('show'); // UDP/IP Broadcast tag
        await wait(1500); // Read text
        
        // Packets shoot out from server to clients
        s4PacketA.classList.add('move');
        s4PacketB.classList.add('move');
        
        await wait(3000); // Wait for slow packets to reach players
        
        // Both clients display results
        s4ResA.classList.add('show'); 
        s4ResB.classList.add('show'); 
        
        await wait(7000); // Hold final scene
        scenes[3].classList.remove('active');
        await wait(1500); // Fade out gap before looping
    }
}

window.onload = runAnimation;
