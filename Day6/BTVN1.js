const listPerson = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
  ]

function countPersonByGender(listPerson, gender) {
    let count = 0;
    for (var i in listPerson) {
        if (listPerson[i].gender == gender) count++;
    }
    return count;
}

function statisticsByAge(listPerson) {
    let child = 0;
    let adults = 0;
    let older = 0;

    for (var i in listPerson) {
        if (listPerson[i].age < 18) child++;
        if (listPerson[i].age >= 18 && listPerson[i].age < 30) adults++;
        if (listPerson[i].age >= 30) older++;
    }

    const statistical = {
        treCon : child,
        thanhNien : adults,
        nguoiGia : older
    }
    for (var i in statistical) {
        console.log(i + ": " + statistical[i]);
    }
}

function main(){
    console.log('So nguoi gioi tinh nam: ' + countPersonByGender(listPerson, 'nam'));
    console.log('So nguoi gioi tinh nu: ' + countPersonByGender(listPerson, 'nữ'));
    statisticsByAge(listPerson);
    
}

main();