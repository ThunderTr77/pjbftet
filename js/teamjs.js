const boxes = document.querySelectorAll('.info__box'); 
let index = 0; // Đặt biến index bắt đầu từ 0

function showBox() {
    if (index < boxes.length) {
        boxes[index].classList.add('show');
        setTimeout(() => {
            boxes[index].classList.remove('show');
            boxes[index].classList.add('hide');
            setTimeout(() => {
                boxes[index].classList.remove('hide');
                index++;
                if (index >= boxes.length) {
                    index = 0; // Đặt lại biến index về 0 khi đã duyệt qua tất cả các thẻ
                }
                setTimeout(showBox, 1000); // Thời gian trước khi hiển thị thẻ tiếp theo
            }, 1000); // Thời gian trước khi xóa 'hide'
        }, 4000); // Thời gian trước khi ẩn thẻ 
    }
}

showBox(); 
