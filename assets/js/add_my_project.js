
const projects = [];
//fungsi menghitung total berapa jumlah 
function hitungHari(starDate, endDate) {
    const tanggalMulai = new Date(starDate);
    const tanggalAkhir = new Date(endDate);

    // Hitung selisih dalam milidetik
    const selisih = tanggalAkhir - tanggalMulai;

    // Konversi milidetik ke hari
    let totalHari = Math.floor(selisih / (1000 * 60 * 60 * 24)) % 30;

    return totalHari;
}


function hitungBulan(starDate, endDate) {
    const tanggalMulai = new Date(starDate);
    const tanggalAkhir = new Date(endDate);

    const tahunMulai = tanggalMulai.getFullYear();
    const tahunAkhir = tanggalAkhir.getFullYear();
    const bulanMulai = tanggalMulai.getMonth();
    const bulanAkhir = tanggalAkhir.getMonth();

    let totalBulan = (tahunAkhir - tahunMulai) * 12 + (bulanAkhir - bulanMulai);

    return totalBulan;
}

function hitungTahun(starDate, endDate) {
    const totalBulan = hitungBulan(starDate, endDate);
    const tahun = Math.floor(totalBulan / 12);
    return tahun;
}


function addProject(event) {
    event.preventDefault();





    // Ambil nilai dari input formulir
    const projectName = document.getElementById("project_name").value;
    const starDate = document.getElementById("star_date").value;
    const endDate = document.getElementById("end_date").value;
    const description = document.getElementById("descriptions").value;
    let uploadedFile = document.getElementById("upload_image").files; // Ambil URL dari file yang di-upload
    const checkedTechnologies = document.querySelectorAll('input[name="ck_ipn"]:checked');

    // pemanggilan funtion hitung hari bln 
    const totalHari = hitungHari(starDate, endDate);
    const totalBulan = hitungBulan(starDate, endDate);
    const totalTahun = hitungTahun(starDate, endDate);

    uploadedFile = URL.createObjectURL(uploadedFile[0]);

    // Dapatkan nilai dari teknologi button yang dipilih

    // Hitung  bulan antara starDate dan endDate
    const totalMonths = hitungBulan(starDate, endDate);


    let techValues = [];

    for (let i = 0; i < checkedTechnologies.length; i++) {
        techValues.push(checkedTechnologies[i].value);
    }


    // Buat objek untuk menyimpan data proyek
    const projectData = {
        projectName: projectName,
        starDate: starDate,
        endDate: endDate,
        totalMonths: totalMonths + " bulan",
        description: description,
        uploadedFile: uploadedFile,
        totalDays: totalHari + " hari",
        totalMonths: totalBulan + " bulan",
        totalYears: totalTahun + " tahun",
        techvalues: techValues
    };



    projects.unshift(projectData);

    // Tampilkan array of objects di console
    console.log(projects);

    // Panggil fungsi renderProject untuk memperbarui tampilan
    renderProject();
}

function renderProject() {
    let html = '';

    // Loop melalui setiap proyek di array projects
    for (let index = 0; index < projects.length; index++) {
        const project = projects[index]; // Dapatkan satu proyek dari array

        let logo = '';
        for (let i = 0; i < project.techvalues.length; i++) {
            const tech = project.techvalues[i];
            if (tech === "node_js") { // Memeriksa apakah teknologi adalah "node_js"
                logo += `<i class="fa-brands fa-node-js"></i>`;
            }
            if (tech === "react_js") { // Memeriksa apakah teknologi adalah "node_js"
                logo += `<i class="fa-brands fa-react"></i>`;
            }
            if (tech === "java") { // Memeriksa apakah teknologi adalah "node_js"
                logo += `<i class="fa-brands fa-java"></i>`;
            }
            if (tech === "laravel") { // Memeriksa apakah teknologi adalah "node_js"
                logo += `<i class="fa-brands fa-laravel"></i>`;
            }
            // Anda bisa menambahkan kondisi lain di sini untuk teknologi lainnya jika diperlukan
        }

        // kondisi duarasi
        let duration = '';
        //  jika totalYears, totalMonths, atau totalDays tidak sama dengan 0
        if (parseInt(project.totalYears) !== 0) {
            duration += project.totalYears + ', ';
        }
        if (parseInt(project.totalMonths) !== 0) {
            duration += project.totalMonths + ', ';
        }
        if (parseInt(project.totalDays) !== 0) {
            duration += project.totalDays;
        }

        html += `  
        <div class="card_my_project">
        <img src=" ${project.uploadedFile}" alt="" class="img_project flex">
        <a href="/detail.html" class="link lk_project">${project.projectName}</a>
        <p class="tekx_card_project">durasi: ${duration}</p>
        <p class="flex description_card_project">${project.description}</p>
        <div class="flex warp_icn_card_project">
            ${logo}
        </div>
        <div class="flex warp_btn_edit_delete">
            <a href="" class="btn_contact btn_edit_delete flex">edit</a>
            <a href="" class="btn_contact btn_edit_delete flex">delete</a>
        </div>
    </div>`;
    }

    document.getElementById("warp_my_project").innerHTML = html;
}
