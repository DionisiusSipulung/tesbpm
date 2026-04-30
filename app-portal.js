// Memindahkan seluruh HTML asli ke dalam variabel JS agar tidak terlihat di View Source
const uiLayout = `
    <div id="comingSoonLayer" class="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gray-900/95 backdrop-blur-xl transition-opacity duration-1000">
        <div class="text-center px-4 animate-fade">
            <h1 class="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-4 uppercase">Coming <span class="text-blue-600">Soon</span></h1>
            <p class="text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-12 italic">Portal SEMA BPM FT UNTAG Samarinda</p>
            <div class="flex gap-4 md:gap-8 justify-center items-center mb-16">
                <div class="text-center">
                    <div id="days" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</div>
                    <div class="text-[10px] text-gray-500 font-bold uppercase mt-2">Hari</div>
                </div>
                <div class="text-4xl text-blue-600 font-black mb-6">:</div>
                <div class="text-center">
                    <div id="hours" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</div>
                    <div class="text-[10px] text-gray-500 font-bold uppercase mt-2">Jam</div>
                </div>
                <div class="text-4xl text-blue-600 font-black mb-6">:</div>
                <div class="text-center">
                    <div id="minutes" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</div>
                    <div class="text-[10px] text-gray-500 font-bold uppercase mt-2">Menit</div>
                </div>
                <div class="text-4xl text-blue-600 font-black mb-6">:</div>
                <div class="text-center">
                    <div id="seconds" class="text-4xl md:text-6xl font-black text-white italic tracking-tighter">00</div>
                    <div class="text-[10px] text-gray-500 font-bold uppercase mt-2">Detik</div>
                </div>
            </div>
            <button onclick="adminSkipWithAuth()" class="mx-auto bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white text-[9px] font-black py-3 px-8 rounded-full border border-white/10 transition uppercase tracking-widest">Skip Overlay (Admin Only)</button>
        </div>
    </div>

    <nav class="fixed w-full z-50 glass border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
            <div class="flex-shrink-0 font-bold text-2xl tracking-tighter text-blue-600">SEMABPM<span class="text-gray-800">FT</span></div>
            <div id="publicMenu" class="md:flex space-x-8 items-center font-semibold text-sm">
                <a href="#home" class="hover:text-blue-600 uppercase tracking-wide">Home</a>
                <div class="relative dropdown">
                    <button class="flex items-center hover:text-blue-600 uppercase tracking-wide">Profil <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg></button>
                    <div class="absolute hidden dropdown-menu bg-white shadow-xl rounded-lg py-2 w-48 border border-gray-100 animate-fade">
                        <a href="#visi-misi" class="block px-4 py-2 hover:bg-blue-50">Visi-Misi</a>
                        <a href="#struktur" class="block px-4 py-2 hover:bg-blue-50">Struktur Organisasi</a>
                    </div>
                </div>
                <a href="#akademik" class="hover:text-blue-600 uppercase tracking-wide">Info Akademik</a>
                <button id="loginBtnNav" onclick="toggleAuthModal()" class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200">Login</button>
            </div>
            <div id="userMenu" class="hidden flex items-center gap-4">
                <span class="text-sm font-bold text-gray-700">Halo, <span id="userNameDisplay" class="text-blue-600">Mahasiswa</span></span>
                <button onclick="handleLogout()" class="text-xs font-bold text-red-500 border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 transition">Keluar</button>
            </div>
        </div>
    </nav>

    <div id="publicContent">
        <section id="home" class="pt-32 pb-20 px-4 bg-white">
            <div class="max-w-7xl mx-auto text-center mb-16">
                <h2 class="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">Tentang Kami</h2>
                <h3 class="text-4xl font-black italic tracking-tighter uppercase">Lembaga Kemahasiswaan FT</h3>
                <div class="grid md:grid-cols-2 gap-12 items-start mt-12 text-left">
                    <div class="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-600">
                        <h1 class="text-3xl font-black mb-4 uppercase italic text-blue-700">SEMA FT</h1>
                        <p class="text-gray-700 leading-relaxed italic">Senat Mahasiswa (SEMA) Fakultas Teknik merupakan lembaga eksekutif tertinggi...</p>
                    </div>
                    <div class="bg-gray-100 p-8 rounded-3xl border-l-8 border-gray-400">
                        <h1 class="text-3xl font-black mb-4 uppercase italic text-gray-600">BPM FT</h1>
                        <p class="text-gray-700 leading-relaxed italic">Badan Perwakilan Mahasiswa (BPM) Fakultas Teknik memegang peran legislatif...</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="visi-misi" class="py-20 bg-gray-50 px-4 border-y border-gray-100">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-center text-3xl font-black mb-10 italic uppercase tracking-tighter">Visi & Misi</h2>
                <div class="flex justify-center mb-8 bg-gray-200 p-1 rounded-xl">
                    <button onclick="openTab(event, 'tab-sema')" class="tab-btn active w-full py-3 font-bold uppercase tracking-widest rounded-lg transition">SEMA FT</button>
                    <button onclick="openTab(event, 'tab-bpm')" class="tab-btn w-full py-3 font-bold uppercase tracking-widest rounded-lg transition">BPM FT</button>
                </div>
                <div id="tab-sema" class="tab-content active animate-fade bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
                    <h4 class="text-blue-600 font-bold mb-2 uppercase italic tracking-tighter">Visi SEMA</h4>
                    <p class="italic text-gray-600 mb-6 text-lg">"Terwujudnya SEMA FT yang aktif, harmonis, dan profesional..."</p>
                </div>
                <div id="tab-bpm" class="tab-content animate-fade bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <h4 class="text-gray-800 font-bold mb-2 uppercase italic tracking-tighter">Visi BPM</h4>
                    <p class="italic text-gray-600 mb-6 text-lg">"Menciptakan iklim organisasi legislatif yang transparan..."</p>
                </div>
            </div>
        </section>

        <section id="struktur" class="py-20 bg-white px-4">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-center text-3xl font-black mb-16 italic uppercase tracking-tighter">Pengurus Inti</h2>
                <div class="grid md:grid-cols-2 gap-16">
                    <div class="bg-gray-50 p-8 rounded-3xl border border-dashed border-blue-200">
                        <h3 class="text-center font-bold text-blue-600 uppercase tracking-widest mb-10 text-lg italic">SEMA FT</h3>
                        <div class="flex justify-center gap-8 md:gap-12">
                            <div class="text-center group">
                                <div class="w-32 h-44 bg-gray-200 rounded-2xl mb-4 mx-auto border-2 border-transparent group-hover:border-blue-500 transition overflow-hidden flex items-center justify-center text-[10px] text-gray-400">FOTO KETUA</div>
                                <p class="font-bold text-sm uppercase">Nama Ketua</p>
                                <p class="text-[10px] text-blue-500 font-black italic uppercase">Ketua SEMA</p>
                            </div>
                            <div class="text-center group">
                                <div class="w-32 h-44 bg-gray-200 rounded-2xl mb-4 mx-auto border-2 border-transparent group-hover:border-blue-500 transition overflow-hidden flex items-center justify-center text-[10px] text-gray-400">FOTO WAKIL</div>
                                <p class="font-bold text-sm uppercase">Nama Wakil</p>
                                <p class="text-[10px] text-blue-500 font-black italic uppercase">Wakil SEMA</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-300">
                        <h3 class="text-center font-bold text-gray-600 uppercase tracking-widest mb-10 text-lg italic">BPM FT</h3>
                        <div class="flex justify-center gap-8 md:gap-12">
                            <div class="text-center group">
                                <div class="w-32 h-44 bg-gray-200 rounded-2xl mb-4 mx-auto border-2 border-transparent group-hover:border-gray-500 transition overflow-hidden flex items-center justify-center text-[10px] text-gray-400">FOTO KETUA</div>
                                <p class="font-bold text-sm uppercase">Nama Ketua</p>
                                <p class="text-[10px] text-gray-400 font-black italic uppercase">Ketua BPM</p>
                            </div>
                            <div class="text-center group">
                                <div class="w-32 h-44 bg-gray-200 rounded-2xl mb-4 mx-auto border-2 border-transparent group-hover:border-gray-500 transition overflow-hidden flex items-center justify-center text-[10px] text-gray-400">FOTO WAKIL</div>
                                <p class="font-bold text-sm uppercase">Nama Wakil</p>
                                <p class="text-[10px] text-gray-400 font-black italic uppercase">Wakil BPM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="akademik" class="py-20 bg-gray-900 text-white px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-center text-3xl font-black mb-16 uppercase italic tracking-tighter text-blue-500">Program Studi</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div onclick="toggleDetailSipil()" class="bg-gray-800 p-8 rounded-3xl border-b-4 border-blue-600 shadow-2xl cursor-pointer hover:scale-105 transition group">
                        <h3 class="text-2xl font-extrabold mb-6 italic text-blue-400 uppercase tracking-tighter group-hover:text-white transition">Teknik Sipil</h3>
                        <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 italic">Klik untuk Detail Praktikum & Berkas</p>
                    </div>
                    <div class="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 flex flex-col items-center justify-center text-center opacity-50">
                        <h3 class="text-2xl font-bold mb-3 italic text-gray-500 uppercase tracking-tighter">Arsitektur</h3>
                        <span class="text-[10px] font-black bg-gray-700 px-3 py-1 rounded-full text-gray-400 uppercase italic">Coming Soon</span>
                    </div>
                    <div class="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 flex flex-col items-center justify-center text-center opacity-50">
                        <h3 class="text-2xl font-bold mb-3 italic text-gray-500 uppercase tracking-tighter">PWK</h3>
                        <span class="text-[10px] font-black bg-gray-700 px-3 py-1 rounded-full text-gray-400 uppercase italic">Coming Soon</span>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <main id="dashboardHome" class="hidden pt-24 pb-20 px-4 max-w-7xl mx-auto animate-fade">
        <div class="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2.5rem] p-10 text-white mb-10 shadow-2xl relative overflow-hidden">
            <h1 class="text-4xl font-black mb-4 italic tracking-tighter">Dashboard Portal Mahasiswa</h1>
        </div>
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition group">
                <h3 class="font-black text-2xl mb-4 italic uppercase tracking-tighter text-red-600">Kotak Aspirasi</h3>
                <button onclick="toggleAspirasiModal()" class="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-black uppercase tracking-widest group-hover:bg-red-600 group-hover:text-white transition">Kirim Suara Mahasiswa →</button>
            </div>
        </div>
        <section id="adminPanel" class="hidden animate-fade">
            <div class="bg-white rounded-[2.5rem] shadow-xl border border-gray-200 overflow-hidden">
                <div class="bg-gray-800 p-8 text-white flex justify-between items-center">
                    <h2 class="text-xl font-black uppercase tracking-tighter italic text-blue-400">Daftar Aspirasi Masuk</h2>
                    <span class="bg-blue-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest animate-pulse">Admin Mode</span>
                </div>
                <table class="w-full text-left">
                    <tbody id="adminAspirasiList" class="divide-y divide-gray-50 text-sm italic"></tbody>
                </table>
            </div>
        </section>
    </main>

    <div id="authModal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-black/50 p-4">
        <div class="bg-white rounded-[2.5rem] p-10 max-w-md w-full relative animate-fade">
            <button onclick="toggleAuthModal()" class="absolute top-6 right-6 text-gray-300 hover:text-black text-3xl font-light">&times;</button>
            <div id="loginForm">
                <h2 class="text-3xl font-black mb-8 text-blue-600 uppercase italic tracking-tighter text-center">Masuk Portal</h2>
                <input type="text" id="loginUser" placeholder="Username" class="w-full bg-gray-50 border-none p-4 rounded-2xl mb-4 outline-none">
                <input type="password" id="loginPass" placeholder="Password" class="w-full bg-gray-50 border-none p-4 rounded-2xl mb-8 outline-none">
                <button onclick="handleLogin()" class="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest">Masuk</button>
            </div>
        </div>
    </div>

    <div id="aspirasiModal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-black/60 p-4">
        <div class="bg-white rounded-[2.5rem] p-10 max-w-2xl w-full relative animate-fade">
            <button onclick="toggleAspirasiModal()" class="absolute top-6 right-8 text-gray-300 hover:text-black text-4xl font-light">&times;</button>
            <textarea id="aspirasiMsg" rows="6" class="w-full bg-gray-50 border-none p-6 rounded-3xl mb-6 outline-none italic" placeholder="Tuliskan aspirasi..."></textarea>
            <button onclick="submitAspirasi()" class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest">Kirim Sekarang</button>
        </div>
    </div>

    <div id="detailSipilModal" class="fixed inset-0 z-[110] hidden flex items-center justify-center bg-black/80 p-4">
        <div class="bg-white rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-12">
            <button onclick="toggleDetailSipil()" class="absolute top-6 right-8 text-gray-400 text-4xl">&times;</button>
            <h2 class="text-3xl font-black mb-6 text-blue-600 uppercase italic border-b-4 border-blue-600 inline-block">Teknik Sipil</h2>
            <p class="text-gray-700 italic">Detail praktikum dan persyaratan berkas...</p>
        </div>
    </div>

    <footer class="py-12 text-center text-gray-400 text-[10px] border-t bg-white uppercase tracking-[0.2em] font-black">
        <p>&copy; 2026 SEMA BPM FT UNTAG Samarinda</p>
    </footer>
`;

// SUNTIKKAN HTML KE DOM SEGERA SETELAH FILE JS DIMUAT
document.getElementById('app-root').innerHTML = uiLayout;

// KONFIGURASI FIREBASE (TIDAK BERUBAH)
const firebaseConfig = {
    apiKey: "AIzaSyB6GJuC9u4qrJBDPGA0cJMrtcnIRGUfiSA",
    authDomain: "bpmsenatft.firebaseapp.com",
    projectId: "bpmsenatft",
    storageBucket: "bpmsenatft.firebasestorage.app",
    messagingSenderId: "271741798642",
    appId: "1:271741798642:web:d89e0c3d2e0e2b45ac686b"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// LOGIKA COUNTDOWN (TIDAK BERUBAH)[cite: 4]
const targetDate = new Date("June 30, 2026 23:59:59").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) { closeComingSoon(); return; }
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);
    if(document.getElementById("days")){
        document.getElementById("days").innerText = d < 10 ? "0"+d : d;
        document.getElementById("hours").innerText = h < 10 ? "0"+h : h;
        document.getElementById("minutes").innerText = m < 10 ? "0"+m : m;
        document.getElementById("seconds").innerText = s < 10 ? "0"+s : s;
    }
}
setInterval(updateCountdown, 1000);

// FUNGSI ADMIN & OVERLAY[cite: 4]
function adminSkipWithAuth() {
    const pass = prompt("Masukkan Kata Sandi Admin:");
    if (pass === "adminFT2026") { closeComingSoon(); }
    else if (pass !== null) { alert("Sandi Salah!"); }
}

function closeComingSoon() {
    const layer = document.getElementById('comingSoonLayer');
    if(layer){
        layer.style.opacity = '0';
        setTimeout(() => { layer.classList.add('hidden'); document.body.classList.remove('lock-scroll'); }, 1000);
    }
}

// MODAL & TABS[cite: 4]
function toggleAuthModal() { document.getElementById('authModal').classList.toggle('hidden'); }
function toggleAspirasiModal() { document.getElementById('aspirasiModal').classList.toggle('hidden'); }
function toggleDetailSipil() {
    const modal = document.getElementById('detailSipilModal');
    modal.classList.toggle('hidden');
    document.body.style.overflow = modal.classList.contains('hidden') ? 'auto' : 'hidden';
}
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].classList.remove("active"); }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) { tablinks[i].classList.remove("active"); }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// FIREBASE AUTH & DATABASE LOGIC[cite: 4]
async function handleLogin() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    try {
        await auth.signInWithEmailAndPassword(`${user.toLowerCase().trim()}@bpmsenat.com`, pass);
        toggleAuthModal();
    } catch (e) { alert("Login Gagal!"); }
}

function handleLogout() { auth.signOut().then(() => location.reload()); }

auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById('publicContent').classList.add('hidden');
        document.getElementById('loginBtnNav').classList.add('hidden');
        document.getElementById('dashboardHome').classList.remove('hidden');
        document.getElementById('userMenu').classList.remove('hidden');
        db.collection("users").doc(user.uid).get().then(doc => {
            if (doc.exists) {
                const userData = doc.data();
                document.getElementById('userNameDisplay').innerText = (userData.nama_lengkap || user.email.split('@')[0]).toUpperCase();
                if(userData.role === 'admin') {
                    document.getElementById('adminPanel').classList.remove('hidden');
                    loadAspirasiForAdmin(); 
                }
            }
        });
    }
});

async function submitAspirasi() {
    const msg = document.getElementById('aspirasiMsg').value;
    if(!msg.trim()) return alert("Tuliskan pesan.");
    try {
        await db.collection("aspirasi").add({
            uid: auth.currentUser.uid,
            pesan: msg,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        alert("Terkirim!");
        document.getElementById('aspirasiMsg').value = "";
        toggleAspirasiModal();
    } catch (e) { alert("Gagal."); }
}

function loadAspirasiForAdmin() {
    db.collection("aspirasi").orderBy("timestamp", "desc").onSnapshot(snap => {
        const list = document.getElementById('adminAspirasiList');
        if(list){
            list.innerHTML = "";
            snap.forEach(doc => {
                list.innerHTML += `<tr class="border-b"><td class="p-6 text-gray-700">${doc.data().pesan}</td></tr>`;
            });
        }
    });
}
