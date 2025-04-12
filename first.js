const gif = document.querySelector('.image');

// ฟังก์ชันรีโหลด GIF โดยการเปลี่ยน src ชั่วคราว
function reloadGif() {
    const currentSrc = gif.src;
    gif.src = '';
    // ให้เบราว์เซอร์ "ล้าง" ภาพ แล้วหลังจากนั้นนำกลับมาใช้งาน
    setTimeout(() => { gif.src = currentSrc; }, 50);
}

// เรียกฟังก์ชัน reloadGif ทุกๆ 10 วินาที
setInterval(reloadGif, 10000);
