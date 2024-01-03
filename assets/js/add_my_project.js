
const projects = [];
//fungsi menghitung total berapa jumlah 
function hitungBulan(starDate, endDate) {
    const tanggalMulai = new Date(starDate);
    const tanggalAkhir = new Date(endDate);

    const Tahun = tanggalAkhir.getFullYear() - tanggalMulai.getFullYear();
    const Bulan = tanggalAkhir.getMonth() - tanggalMulai.getMonth();
    const totalBulan = (Tahun * 12) + Bulan;

    return totalBulan;

}

function addProject(event) {
    event.preventDefault();

    // Ambil nilai dari input formulir
    const projectName = document.getElementById("project_name").value;
    const starDate = document.getElementById("star_date").value;
    const endDate = document.getElementById("end_date").value;
    const description = document.getElementById("descriptions").value;
    let uploadedFile = document.getElementById("upload_image").files;

    uploadedFile = URL.createObjectURL(uploadedFile[0]); 

    // Dapatkan nilai dari teknologi button yang dipilih
    let teknologi = "";

    const teknologis = document.getElementsByName("ck_ipn");
    for (let i = 0; i < teknologis.length; i++) {
        if (teknologis[i].checked) {
            teknologi = teknologis[i].value;
        }
    }

    // Hitung  bulan antara starDate dan endDate
    const totalMonths = hitungBulan(starDate, endDate);

    // Buat objek untuk menyimpan data proyek
    const projectData = {
        projectName: projectName,
        starDate: starDate,
        endDate: endDate,
        totalMonths: totalMonths + " bulan",
        teknologi: teknologi,
        description: description,
        uploadedFile: uploadedFile
    };

    projects.unshift(projectData);

    // Tampilkan array of objects di console
    console.log(projects);

    // Panggil fungsi renderProject untuk memperbarui tampilan
    renderProject();
}

// ... kode Anda sebelumnya ...

function renderProject() {
    let html = '';

    // Loop melalui setiap proyek di array projects
    for (let index = 0; index < projects.length; index++) {
        const project = projects[index]; // Dapatkan satu proyek dari array

        html += `  
        <div class="card_my_project">
        <img src=" ${project.uploadedFile}" alt="" class="img_project flex">
        <a href="/detail.html" class="link lk_project">${project.projectName}</a>
        <p class="tekx_card_project">durasi: 3bln</p>
        <p>       ${project.description}</p>
        <div class="flex warp_icn_card_project">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                viewBox="0 0 30 30">
                <path
                    d="M 7.6230469 3.2109375 L 18 13.585938 L 20.677734 10.908203 C 17.018734 8.6882031 12.118063 5.7100938 9.9140625 4.3710938 L 8.4375 3.4765625 C 8.1765 3.3175625 7.8970469 3.2319375 7.6230469 3.2109375 z M 6.0390625 4.453125 C 6.0180625 4.567125 6 4.6816875 6 4.8046875 L 6 25.308594 C 6 25.394594 6.0172969 25.474641 6.0292969 25.556641 L 16.585938 15 L 6.0390625 4.453125 z M 22.4375 11.976562 L 19.414062 15 L 22.384766 17.970703 C 23.958766 17.016703 25.048922 16.35425 25.169922 16.28125 C 25.704922 15.95425 26.007047 15.460875 25.998047 14.921875 C 25.990047 14.392875 25.687828 13.919906 25.173828 13.628906 C 25.058828 13.562906 23.9835 12.913563 22.4375 11.976562 z M 18 16.414062 L 7.6542969 26.759766 C 7.8552969 26.724766 8.0560469 26.664828 8.2480469 26.548828 C 8.5140469 26.386828 15.7 22.027062 20.625 19.039062 L 18 16.414062 z">
                </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                viewBox="0 0 30 30">
                <path
                    d="M 9.6777344 1.515625 A 0.50005 0.50005 0 0 0 9.28125 2.3046875 L 10.759766 4.4414062 C 9.3401698 5.5292967 8.3458783 7.145415 8.0800781 9 L 21.919922 9 C 21.654122 7.145415 20.65983 5.5292967 19.240234 4.4414062 L 20.71875 2.3046875 A 0.50005 0.50005 0 0 0 20.306641 1.515625 A 0.50005 0.50005 0 0 0 19.896484 1.7363281 L 18.40625 3.8925781 C 17.398252 3.3277312 16.238794 3 15 3 C 13.761206 3 12.601748 3.3277312 11.59375 3.8925781 L 10.103516 1.7363281 A 0.50005 0.50005 0 0 0 9.6777344 1.515625 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 5 11 C 4.448 11 4 11.448 4 12 L 4 20 C 4 20.552 4.448 21 5 21 C 5.552 21 6 20.552 6 20 L 6 12 C 6 11.448 5.552 11 5 11 z M 8 11 L 8 21 C 8 22.105 8.895 23 10 23 L 10 26.5 C 10 27.328 10.672 28 11.5 28 C 12.328 28 13 27.328 13 26.5 L 13 23 L 17 23 L 17 26.5 C 17 27.328 17.672 28 18.5 28 C 19.328 28 20 27.328 20 26.5 L 20 23 C 21.105 23 22 22.105 22 21 L 22 11 L 8 11 z M 25 11 C 24.448 11 24 11.448 24 12 L 24 20 C 24 20.552 24.448 21 25 21 C 25.552 21 26 20.552 26 20 L 26 12 C 26 11.448 25.552 11 25 11 z">
                </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                viewBox="0 0 50 50">
                <path
                    d="M 28.1875 -0.00390625 C 30.9375 6.359375 18.320313 10.289063 17.152344 15.59375 C 16.074219 20.460938 24.640625 26.121094 24.644531 26.121094 C 23.34375 24.105469 22.402344 22.441406 21.097656 19.304688 C 18.890625 14 34.53125 9.203125 28.1875 -0.00390625 Z M 36.550781 8.8125 C 36.550781 8.8125 25.503906 9.511719 24.941406 16.582031 C 24.691406 19.730469 27.84375 21.410156 27.9375 23.703125 C 28.007813 25.570313 26.050781 27.128906 26.050781 27.128906 C 26.050781 27.128906 29.601563 26.460938 30.714844 23.605469 C 31.945313 20.4375 28.328125 18.273438 28.691406 15.738281 C 29.042969 13.3125 36.550781 8.8125 36.550781 8.8125 Z M 39.230469 25.144531 C 38.074219 25.09375 36.789063 25.476563 35.625 26.3125 C 37.90625 25.824219 39.835938 27.21875 39.835938 28.828125 C 39.835938 32.453125 34.597656 35.878906 34.597656 35.878906 C 34.597656 35.878906 42.707031 34.953125 42.707031 29 C 42.707031 26.539063 41.152344 25.234375 39.230469 25.144531 Z M 19.183594 25.152344 C 19.183594 25.152344 9.0625 25.015625 9.0625 27.878906 C 9.0625 30.871094 22.316406 31.082031 31.78125 29.238281 C 31.78125 29.238281 34.308594 27.507813 34.980469 26.863281 C 28.777344 28.128906 14.621094 28.296875 14.621094 27.203125 C 14.621094 26.191406 19.183594 25.152344 19.183594 25.152344 Z M 16.738281 30.722656 C 15.1875 30.722656 12.871094 31.921875 12.871094 33.078125 C 12.871094 35.402344 24.5625 37.195313 33.21875 33.796875 L 30.222656 31.960938 C 24.355469 33.839844 13.539063 33.238281 16.738281 30.722656 Z M 18.179688 35.921875 C 16.050781 35.921875 14.671875 37.234375 14.671875 38.203125 C 14.671875 41.1875 27.378906 41.488281 32.414063 38.453125 L 29.214844 36.417969 C 25.453125 38.007813 16.007813 38.222656 18.179688 35.921875 Z M 11.089844 38.625 C 7.621094 38.554688 5.367188 40.113281 5.367188 41.40625 C 5.363281 48.28125 40.890625 47.949219 40.890625 40.921875 C 40.890625 39.757813 39.515625 39.203125 39.019531 38.9375 C 41.921875 45.65625 9.96875 45.136719 9.96875 41.171875 C 9.96875 40.269531 12.3125 39.382813 14.492188 39.808594 L 12.644531 38.757813 C 12.101563 38.675781 11.582031 38.632813 11.089844 38.625 Z M 44.636719 43.25 C 39.234375 48.367188 25.546875 50.234375 11.78125 47.074219 C 25.542969 52.703125 44.566406 49.535156 44.636719 43.25 Z">
                </path>
            </svg>
        </div>
        <div class="flex warp_btn_edit_delete">
            <a href="" class="btn_contact btn_edit_delete flex">edit</a>
            <a href="" class="btn_contact btn_edit_delete flex">delete</a>
        </div>
    </div>`;
    }

    document.getElementById("warp_my_project").innerHTML = html;
}
