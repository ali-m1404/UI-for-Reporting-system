// مدیریت احراز هویت

// رویدادهای فرم ورود
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// مدیریت ورود
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // در حالت واقعی، این اطلاعات با سرور چک می‌شود
    // اینجا فقط یک شبیه‌سازی ساده انجام می‌دهیم
    
    if (email && password) {
        // کاربر نمونه برای تست
        const sampleUser = {
            id: 1,
            firstName: "علی",
            lastName: "محمدی",
            email: email,
            phone: "09123456789",
            role: "superadmin", // می‌تواند superadmin, admin, user باشد
            profileImage: "./assets/images/user-placeholder.jpg",
            createdAt: "2023-01-15"
        };
        
        // ذخیره اطلاعات کاربر در localStorage
        localStorage.setItem('currentUser', JSON.stringify(sampleUser));
        
        // هدایت به صفحه اصلی
        window.location.href = 'index.html';
    } else {
        alert('لطفاً ایمیل و رمز عبور را وارد کنید.');
    }
}

// مدیریت ثبت‌نام
function handleRegister(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // اعتبارسنجی اولیه
    if (!firstName || !lastName || !email || !phone || !password) {
        alert('لطفاً تمام فیلدهای ضروری را پر کنید.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('رمز عبور و تکرار آن مطابقت ندارند.');
        return;
    }
    
    // در حالت واقعی، اطلاعات به سرور ارسال می‌شود
    // اینجا فقط یک شبیه‌سازی ساده انجام می‌دهیم
    
    // ایجاد کاربر جدید
    const newUser = {
        id: Math.floor(Math.random() * 1000) + 3, // ID تصادفی
        firstName,
        lastName,
        email,
        phone,
        role: "user", // کاربران جدید همیشه نقش user دارند
        profileImage: "./assets/images/user-placeholder.jpg",
        status: "pending", // وضعیت در انتظار تایید
        createdAt: new Date().toISOString().split('T')[0]
    };
    
    alert('ثبت‌نام با موفقیت انجام شد. حساب کاربری شما پس از تایید فعال خواهد شد.');
    
    // هدایت به صفحه ورود
    window.location.href = 'login.html';
}