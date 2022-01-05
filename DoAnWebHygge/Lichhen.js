document.querySelector(".containerRight").classList.add("batTac");
document.querySelector(".containerRight2").classList.add("batTac");
var dropdown1 = document.querySelectorAll("#dropdown1 li");  

const thongTinBN = [
    {
        ten:"Bệnh nhân 1", 
        tuoi:"20", 
        gioiTinh:"Nam",
        ngheNghiep:"Sinh viên",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Bạn cùng phòng",
        thoiGian:"ngay",
        ngay:"ngay",
        hinhThuc:"hinhThuc"
    },
    {
        ten:"Bệnh nhân 2", 
        tuoi:"21", 
        gioiTinh:"Giới tính",
        ngheNghiep:"Nghề nghiệp",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Bạn cùng phòng",
        thoiGian:"ngay",
        ngay:"ngay",
        hinhThuc:"hinhThuc"
    },
    {
        ten:"Bệnh nhân 3", 
        tuoi:"18", 
        gioiTinh:"Nữ",
        ngheNghiep:"Nghề nghiệp",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Bạn cùng phòng",
        thoiGian:"ngay",
        ngay:"ngay",
        hinhThuc:"hinhThuc"
    }
]; 

// lắng nghe sự kiện click vào bệnh nhân. 

dropdown1.forEach(function(dropChild) {
    dropChild.addEventListener("click",function(){ 
        var tenBN = document.querySelector(".tenBenNhan");
        var tuoiBN = document.querySelector(".tuoiBN"); 
        var gioiTinh = document.querySelector(".gioiTinhBN");
        var ngheNghiep = document.querySelector(".ngheNghiepBN");
        var tinhTrang = document.querySelector(".tinhTrangBN"); 
        var oChung = document.querySelector(".dangChungVoi");
        var thoiGian = document.querySelector("thoiGianBN");
        var ngayBN = document.querySelector(".ngayBN"); 
        var hinhThuc = document.querySelector(".hinhThuc");
        const thongBao = document.querySelector(".containerRight");  
        thongBao.classList.add("batTac"); 
        document.querySelector(".containerRight2").classList.add("batTac");
        
        if (dropChild.id == "BN1") {
            thongBao.classList.remove("batTac"); 
            tenBN.innerHTML = thongTinBN[0].ten; 
            tuoiBN.innerHTML = thongTinBN[0].tuoi; 
            gioiTinh.innerHTML = thongTinBN[0].gioiTinh; 
            ngheNghiep.innerHTML = thongTinBN[0].ngheNghiep;
            tinhTrang.innerHTML = thongTinBN[0].tinhTrangHonNhan; 
            oChung.innerHTML= thongTinBN[0].dangOChung; 
            thoiGian.innerHTML = thongTinBN[0].thoiGian;
            ngayBN.innerHTML = thongTinBN[0].ngay;
            hinhThuc.innerHTML = thongTinBN[0].hinhThuc; 
        }
        else if (dropChild.id == "BN2") {
            thongBao.classList.remove("batTac"); 
            tenBN.innerHTML = thongTinBN[1].ten; 
            tuoiBN.innerHTML = thongTinBN[1].tuoi; 
            gioiTinh.innerHTML = thongTinBN[1].gioiTinh; 
            ngheNghiep.innerHTML = thongTinBN[1].ngheNghiep;
            tinhTrang.innerHTML = thongTinBN[1].tinhTrangHonNhan; 
            oChung.innerHTML= thongTinBN[1].dangOChung; 
            thoiGian.innerHTML = thongTinBN[1].thoiGian;
            ngayBN.innerHTML = thongTinBN[1].ngay;
            hinhThuc.innerHTML = thongTinBN[1].hinhThuc; 
        }
        else {
            thongBao.classList.remove("batTac"); 
            tenBN.innerHTML = thongTinBN[2].ten; 
            tuoiBN.innerHTML = thongTinBN[2].tuoi; 
            gioiTinh.innerHTML = thongTinBN[2].gioiTinh; 
            ngheNghiep.innerHTML = thongTinBN[2].ngheNghiep;
            tinhTrang.innerHTML = thongTinBN[2].tinhTrangHonNhan; 
            oChung.innerHTML= thongTinBN[2].dangOChung; 
            thoiGian.innerHTML = thongTinBN[2].thoiGian;
            ngayBN.innerHTML = thongTinBN[2].ngay;
            hinhThuc.innerHTML = thongTinBN[2].hinhThuc; 
        }
    }
    )
})

var btnLichHen = document.querySelector(".tieuDedivLichHen"); 
btnLichHen.addEventListener("click",function(){
    var btnDrop1 = document.getElementById("dropdown1"); 
    btnDrop1.classList.toggle("batTac"); 
    var x1 = document.querySelector(".icon1"); 
    var x2 = document.querySelector(".icon2"); 
    x1.classList.toggle("batTac");
    x2.classList.toggle("batTac");
}); 



// logic xử lý cho drop2  
var listChild2 = document.querySelectorAll(".child-down2"); 

listChild2.forEach(

    function (child2) {
        child2.addEventListener('click',
            function () {
                
            }
        )
    }
)


var btn2 = document.querySelector(".clickDropdown2"); 

btn2.addEventListener("click",function(){
    var btnDrop1 = document.getElementById("dropdown2"); 
    btnDrop1.classList.toggle("batTac"); 
    var x1 = document.querySelector(".icon3"); 
    var x2 = document.querySelector(".icon4"); 
    x1.classList.toggle("batTac");
    x2.classList.toggle("batTac");
    // bật lên cái khung thử
    // => cho thằng kia none 
    document.querySelector(".containerRight").classList.add("batTac");
    document.querySelector(".containerRight2").classList.remove("batTac");

});