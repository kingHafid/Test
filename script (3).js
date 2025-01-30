document.getElementById("discountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("يرجى ملء جميع الحقول");
    } else {
        alert("شكراً لتسجيلك! سيتم إرسال العرض إلى بريدك الإلكتروني.");
        document.getElementById("discountForm").reset();
    }
});