/* ================= PERSON 1 START (COMMENTED OUT) ================= */
/*
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
*/
/* ================= PERSON 1 END ================= */

/* ================= PERSON 2 START (ACTIVE) ================= */
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runTechAnimation() {
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');
    
    // Nodes
    const customer = document.getElementById('customer');
    const atm = document.getElementById('atm');
    const osiContainer = document.getElementById('osi-stack');
    const l7 = document.getElementById('l7');
    const l6 = document.getElementById('l6');
    const l5 = document.getElementById('l5');
    const l4 = document.getElementById('l4');
    const l3 = document.getElementById('l3');
    const l2 = document.getElementById('l2');
    const l1 = document.getElementById('l1');
    const serverBox = document.getElementById('bank-server');
    const svrAuth = document.getElementById('svr-auth');
    const svrTx = document.getElementById('svr-tx');
    const database = document.getElementById('database');
    const arrows = document.querySelectorAll('.arrow');

    const allNodes = [customer, atm, osiContainer, l7, l6, l5, l4, l3, l2, l1, serverBox, svrAuth, svrTx, database, ...arrows];

    function updateInfo(title, desc) {
        infoTitle.innerText = title;
        infoDesc.innerText = desc;
    }

    while (true) {
        // Reset all nodes
        allNodes.forEach(node => {
            if(node) node.classList.remove('active');
        });
        
        updateInfo("System Idle", "Waiting for customer to insert card.");
        await wait(2000);

        // Step 1: Customer
        updateInfo("Customer Action", "Customer initiates a withdrawal request at the ATM.");
        customer.classList.add('active');
        await wait(1500);
        
        document.getElementById('arrow-1').classList.add('active');
        await wait(500);

        // Step 2: ATM Client
        updateInfo("ATM (Client)", "The ATM prepares the data message to send to the Bank Server.");
        atm.classList.add('active');
        await wait(2000);
        
        document.getElementById('arrow-2').classList.add('active');
        await wait(500);

        // Step 3: OSI Encapsulation
        osiContainer.classList.add('active');
        
        updateInfo("L7: Application Layer", "Withdrawal request data is created by the ATM application.");
        l7.classList.add('active');
        await wait(1500);
        
        updateInfo("L6: Presentation Layer", "Data is formatted and encrypted for secure transit.");
        l6.classList.add('active');
        await wait(1500);

        updateInfo("L5: Session Layer", "Manages and maintains the secure connection to the bank.");
        l5.classList.add('active');
        await wait(1500);

        updateInfo("L4: Transport Layer", "TCP segments the data, ensuring reliable delivery.");
        l4.classList.add('active');
        await wait(1500);

        updateInfo("L3: Network Layer", "IP addressing is added to route the packet to the server.");
        l3.classList.add('active');
        await wait(1500);

        updateInfo("L2: DataLink Layer", "MAC addressing is added for local node-to-node transfer.");
        l2.classList.add('active');
        await wait(1500);

        updateInfo("L1: Physical Layer", "The fully encapsulated packet is transmitted as bits over fiber/cable.");
        l1.classList.add('active');
        await wait(2500);
        
        document.getElementById('arrow-3').classList.add('active');
        await wait(1000);

        // Step 4: Bank Server
        updateInfo("Bank Server", "The Distributed System receives the request from the network.");
        serverBox.classList.add('active');
        await wait(1500);

        updateInfo("Authentication", "Authentication Server verifies PIN and identity.");
        svrAuth.classList.add('active');
        await wait(1500);

        updateInfo("Transaction Processing", "Transaction Server processes the withdrawal logic.");
        svrTx.classList.add('active');
        await wait(2000);
        
        document.getElementById('arrow-4').classList.add('active');
        await wait(1000);

        // Step 5: Database
        updateInfo("Database", "Account balance is updated. A 'Result' is returned to the server.");
        database.classList.add('active');
        await wait(3000);

        // Step 6: Response
        updateInfo("Response", "The Bank Server sends a Response back to the ATM (Layers 7 down to 1 again), dispensing cash to the Customer.");
        await wait(5000);

        // Loop pause
        updateInfo("Complete", "Transaction complete. Resetting whiteboard...");
        await wait(2000);
    }
}

window.onload = runTechAnimation;
/* ================= PERSON 2 END ================= */
