
    function transcript() {
        let arr_english = ["phone", "mouse", "monitor", "cup", "keyboard"];
        let arr_vietnamese = ["dien thoai", "chuot", "man hinh", "coc", "ban phim"];
        let string = document.getElementById("string").value;
        let index_eng = 0;
        let result = "";
        for (let i = 0; i < arr_english.length; i++) {
            if (string == arr_english[i]) {
                index_eng = i; //2
                for (let j = 0; j < arr_vietnamese.length; j++) {
                    if (index_eng == j) { //2 = 2
                        result = arr_vietnamese[j]; //tao
                    }
                }
            }
        }
        document.getElementById("result").innerHTML = result;
    }
