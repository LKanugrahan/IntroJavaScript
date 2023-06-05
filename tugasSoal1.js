//Jawaban No. 1
const 
  namaLengkap = "Langgeng Kanugrahan",
  email = "lkanugrahan@gmail.com",
  nomorHandphone = "082180881420",
  tempatTanggalLahir = "Bekasi, 15 Februari 1999",
  golonganDarah = "O",
  programmingExperience = [
    "R", "SQL", "HTML", "CSS", "Javascript"
  ],
  riwayatPendidikan = [
    {
      namaSekolah: "SDN Setia Mekar 03",
      tingkat: "SD",
      tahunMasuk: "2005",
      tahunKeluar: "2011",
      jurusan: null,
      direkomendasikan: true,
      lokasi: "Kab. Bekasi, Jawa Barat",
      pengajarFavorit: [
        "Bu Ningsih", "Pak Hadi"
      ],
      materiFavorit: [
        {
          nama: "Matematika",
          tahunAjar: "2009/2010",
          pengajar: "Bu Ningsih",
          alasan: [
            "suka dengan logika", "pembelajarannya menarik"
          ],
          kesulitan: false
        },
        {
          nama: "PKN",
          tahunAjar: "2010/2011",
          pengajar: "Pak Hadi",
          alasan: [
            "suka dengan pembawaannya", "pembelajarannya menarik"
          ],
          kesulitan: true
        },
        {
          nama: "Olahraga",
          tahunAjar: "2010/2011",
          pengajar: "Pak Budi",
          alasan: [
            "suka pelajaran fisik", "pembelajarannya di luar kelas"
          ],
          kesulitan: false
        }
      ]
    },
    {
      namaSekolah: "SMPN 8 Tambun Selatan",
      tingkat: "SMP",
      tahunMasuk: "2011",
      tahunKeluar: "2014",
      jurusan: null,
      direkomendasikan: false,
      lokasi: "Kab. Bekasi, Jawa Barat",
      pengajarFavorit: [
        "Bu Myra", "Pak Ujang"
      ],
      materiFavorit: [
        {
          nama: "Bhs. Inggris",
          tahunAjar: "2012/2013",
          pengajar: "Bu Myra",
          alasan: [
            "suka dengan cara belajar", "pembawaannya yang memotivasi"
          ],
          kesulitan: false
        },
        {
          nama: "Olahraga",
          tahunAjar: "2011/2012",
          pengajar: "Pak Ujang",
          alasan: [
            "suka dengan pembawaannya", "perawakannya yang lucu"
          ],
          kesulitan: false
        },
        {
          nama: "TIK",
          tahunAjar: "2011/2012",
          pengajar: "Pak Jauhari",
          alasan: [
            "suka pelajaran komputer", "suka dengan pembawaannya"
          ],
          kesulitan: false
        }
      ]
    },
    {
      namaSekolah: "SMAN 2 Tambun Utara",
      tingkat: "SMA",
      tahunMasuk: "2014",
      tahunKeluar: "2017",
      jurusan: "MIPA",
      direkomendasikan: false,
      lokasi: "Kab. Bekasi, Jawa Barat",
      pengajarFavorit: [
        "Bu Rini", "Pak Karnadi"
      ],
      materiFavorit: [
        {
          nama: "Fisika",
          tahunAjar: "2015/2016",
          pengajar: "Bu Rini",
          alasan: [
            "suka dengan fisika", "pembelajarannya menarik"
          ],
          kesulitan: false
        },
        {
          nama: "Fisika",
          tahunAjar: "2014/2015",
          pengajar: "Pak Karnadi",
          alasan: [
            "suka dengan fisika", "pembelajarannya menarik"
          ],
          kesulitan: false
        },
        {
          nama: "Matematika",
          tahunAjar: "2015/2016",
          pengajar: "Bu Hanim",
          alasan: [
            "suka pelajaran matematika", "pembelajarannya menarik"
          ],
          kesulitan: false
        }
      ]
    },
    {
      namaSekolah: "Universitas Siliwangi",
      tingkat: "Universitas",
      tahunMasuk: "2017",
      tahunKeluar: "2023",
      jurusan: "Pendidikan Fisika",
      direkomendasikan: true,
      lokasi: "Kota Tasikmalaya, Jawa Barat",
      pengajarFavorit: [
        "Pak Eko", "Pak Arifin"
      ],
      materiFavorit: [
        {
          nama: "Gelombang dan Optik",
          tahunAjar: "2019",
          pengajar: "Pak Eko",
          alasan: [
            "suka dengan fisika", "pembelajarannya menarik"
          ],
          kesulitan: false
        },
        {
          nama: "Fisika Zat Padat",
          tahunAjar: "2020",
          pengajar: "Pak Arifin",
          alasan: [
            "suka dengan fisika", "pembelajarannya menarik"
          ],
          kesulitan: false
        },
        {
          nama: "Fisika Modern",
          tahunAjar: "2019",
          pengajar: "Bu Yanti",
          alasan: [
            "suka pelajaran fisika", "pembelajarannya menarik"
          ],
          kesulitan: false
        }
      ]
    }
  ]
  

let
  umur = 24,
  alamat = "Jl. Kalimusada Raya Blok B3 No. 13, Desa Setia Mekar, Kec. Tambun Selatan",
  kota = "Bekasi",
  provinsi = "Jawa Barat",
  kodePos = "17510",
  hobi = [
    "membaca", "catur", "ngulik"
  ],
  makananFavorit = [
    {
      nama: "Gudeg",
      asal: "Yogyakarta, Indonesia",
    },
    {
      nama: "Rendang",
      asal: "Padang, Indonesia",
    },
    {
      nama: "Kerak Telor",
      asal: "Jakarta, Indonesia",
    }
  ]
//Jawaban No. 2

const biodata = {
  namaLengkapBio: namaLengkap,
  emailBio: email,
  nomorHandphoneBio: nomorHandphone,
  tempatTanggalLahirBio: tempatTanggalLahir,
  golonganDarahBio: golonganDarah,
  programmingExperienceBio: programmingExperience,
  riwayatPendidikanBio: riwayatPendidikan,
  umurBio: umur,
  alamatBio: alamat,
  kotaBio: kota,
  provinsiBio: provinsi,
  kodePosBio: kodePos,
  hobiBio: hobi,
  makananFavoritBio: makananFavorit,
}
  //Jawaban No. 3
console.log(
  "Nama lengkap: " + biodata.namaLengkapBio,
  "\nNomor handphone: " + biodata.nomorHandphoneBio,
  "\nProgramming experience: " + biodata.programmingExperienceBio,
  "\nNama makanan dan asalnya: " + biodata.makananFavoritBio[0].nama + " dari " + biodata.makananFavoritBio[0].asal,
  "\nHobi: "+ biodata.hobiBio[2],
  "\nNama materi dan pengajarnya: " + biodata.riwayatPendidikanBio[3].materiFavorit[0].nama + " diajar oleh " + biodata.riwayatPendidikanBio[3].materiFavorit[0].pengajar
)
