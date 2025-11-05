// مدیریت احراز هویت - نسخه ایمن
document.addEventListener('DOMContentLoaded', function() {
    initializeAuthForms();
});

// مقداردهی اولیه فرم‌ها
function initializeAuthForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        setupLoginValidation();
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        setupRegisterValidation();
    }
}

// تنظیم اعتبارسنجی فرم ورود
function setupLoginValidation() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if (emailInput) {
        emailInput.addEventListener('blur', validateEmail);
    }
    if (passwordInput) {
        passwordInput.addEventListener('blur', validatePassword);
    }
}

// تنظیم اعتبارسنجی فرم ثبت‌نام
function setupRegisterValidation() {
    const inputs = ['firstName', 'lastName', 'email', 'phone', 'password', 'confirmPassword'];
    
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('blur', () => {
                if (inputId === 'email') validateEmail();
                else if (inputId === 'password') validatePassword();
                else if (inputId === 'confirmPassword') validateConfirmPassword();
                else if (inputId === 'phone') validatePhone();
                else validateRequiredField(inputId);
            });
        }
    });
}

// مدیریت ورود - نسخه ایمن
async function handleLogin(e) {
    e.preventDefault();
    
    if (!validateLoginForm()) {
        return;
    }
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    showLoading('در حال ورود...');
    
    try {
        // شبیه‌سازی درخواست به سرور
        const authResult = await authenticateUser(email, password);
        
        if (authResult.success) {
            showSuccess('ورود موفقیت‌آمیز بود!');
            
            // ذخیره اطلاعات کاربر
            localStorage.setItem('currentUser', JSON.stringify(authResult.user));
            localStorage.setItem('authToken', authResult.token);
            localStorage.setItem('loginTime', new Date().toISOString());
            
            // هدایت به صفحه اصلی پس از تاخیر
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
            
        } else {
            showError(authResult.message || 'ایمیل یا رمز عبور اشتباه است');
        }
        
    } catch (error) {
        console.error('Login error:', error);
        showError('خطا در ارتباط با سرور. لطفاً مجدد تلاش کنید.');
    } finally {
        hideLoading();
    }
}

// 🔐 اعتبارسنجی کاربر
async function authenticateUser(email, password) {
    // شبیه‌سازی تاخیر شبکه
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // دریافت کاربران از localStorage (در حالت واقعی از سرور)
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // پیدا کردن کاربر
    const user = users.find(u => u.email === email && u.status === 'active');
    
    if (!user) {
        return { 
            success: false, 
            message: 'کاربری با این ایمیل یافت نشد' 
        };
    }
    
    // در حالت واقعی، اینجا رمز عبور هش شده بررسی می‌شود
    // اینجا یک شبیه‌سازی ساده داریم
    if (user.password !== hashPassword(password)) {
        return { 
            success: false, 
            message: 'رمز عبور اشتباه است' 
        };
    }
    
    // ایجاد توکن (در حالت واقعی از JWT استفاده می‌شود)
    const token = generateAuthToken(user);
    
    return {
        success: true,
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profileImage: user.profileImage,
            createdAt: user.createdAt
        },
        token: token
    };
}

// مدیریت ثبت‌نام - نسخه ایمن
async function handleRegister(e) {
    e.preventDefault();
    
    if (!validateRegisterForm()) {
        return;
    }
    
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim().toLowerCase(),
        phone: document.getElementById('phone').value.trim(),
        password: document.getElementById('password').value
    };
    
    showLoading('در حال ثبت‌نام...');
    
    try {
        const registerResult = await registerUser(formData);
        
        if (registerResult.success) {
            showSuccess('ثبت‌نام با موفقیت انجام شد!');
            
            // پاک کردن فرم
            document.getElementById('register-form').reset();
            
            // هدایت به صفحه ورود پس از تاخیر
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
            
        } else {
            showError(registerResult.message);
        }
        
    } catch (error) {
        console.error('Registration error:', error);
        showError('خطا در ثبت‌نام. لطفاً مجدد تلاش کنید.');
    } finally {
        hideLoading();
    }
}

// 👤 ثبت کاربر جدید
async function registerUser(userData) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // دریافت کاربران موجود
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // بررسی تکراری نبودن ایمیل
    if (users.some(u => u.email === userData.email)) {
        return { 
            success: false, 
            message: 'این ایمیل قبلاً ثبت شده است' 
        };
    }
    
    // بررسی تکراری نبودن شماره تلفن
    if (users.some(u => u.phone === userData.phone)) {
        return { 
            success: false, 
            message: 'این شماره تلفن قبلاً ثبت شده است' 
        };
    }
    
    // ایجاد کاربر جدید
    const newUser = {
        id: generateUserId(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        password: hashPassword(userData.password), // در واقعیت هرگز رمز عبور plain ذخیره نکنید!
        role: "user",
        profileImage: "./assets/images/user-placeholder.jpg",
        status: "active", // در حالت واقعی ممکن است 'pending' باشد
        createdAt: new Date().toISOString(),
        lastLogin: null
    };
    
    // ذخیره کاربر
    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    return { success: true };
}

// 🛡️ توابع اعتبارسنجی
function validateLoginForm() {
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    
    return emailValid && passwordValid;
}

function validateRegisterForm() {
    const requiredValid = ['firstName', 'lastName', 'email', 'phone', 'password']
        .every(field => validateRequiredField(field));
    
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmValid = validateConfirmPassword();
    const phoneValid = validatePhone();
    
    return requiredValid && emailValid && passwordValid && confirmValid && phoneValid;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('email-error');
    const email = emailInput.value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showFieldError(emailInput, errorElement, 'ایمیل الزامی است');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        showFieldError(emailInput, errorElement, 'فرمت ایمیل نامعتبر است');
        return false;
    }
    
    clearFieldError(emailInput, errorElement);
    return true;
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('password-error');
    const password = passwordInput.value;
    
    if (!password) {
        showFieldError(passwordInput, errorElement, 'رمز عبور الزامی است');
        return false;
    }
    
    if (password.length < 6) {
        showFieldError(passwordInput, errorElement, 'رمز عبور باید حداقل ۶ کاراکتر باشد');
        return false;
    }
    
    clearFieldError(passwordInput, errorElement);
    return true;
}

function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    const errorElement = document.getElementById('confirmPassword-error');
    
    if (passwordInput.value !== confirmInput.value) {
        showFieldError(confirmInput, errorElement, 'رمز عبور و تکرار آن مطابقت ندارند');
        return false;
    }
    
    clearFieldError(confirmInput, errorElement);
    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const errorElement = document.getElementById('phone-error');
    const phone = phoneInput.value.trim();
    
    const phoneRegex = /^09[0-9]{9}$/;
    
    if (!phone) {
        showFieldError(phoneInput, errorElement, 'شماره تلفن الزامی است');
        return false;
    }
    
    if (!phoneRegex.test(phone)) {
        showFieldError(phoneInput, errorElement, 'فرمت شماره تلفن نامعتبر است (09xxxxxxxxx)');
        return false;
    }
    
    clearFieldError(phoneInput, errorElement);
    return true;
}

function validateRequiredField(fieldId) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (!input.value.trim()) {
        showFieldError(input, errorElement, 'این فیلد الزامی است');
        return false;
    }
    
    clearFieldError(input, errorElement);
    return true;
}

// 🛠️ توابع کمکی
function showFieldError(input, errorElement, message) {
    input.classList.add('border-red-500');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

function clearFieldError(input, errorElement) {
    input.classList.remove('border-red-500');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    }
}

function showLoading(message = 'لطفاً منتظر بمانید...') {
    // پیاده‌سازی loading spinner
    console.log('Loading:', message);
}

function hideLoading() {
    // پنهان کردن loading spinner
}

function showSuccess(message) {
    alert('✅ ' + message); // در حالت واقعی از toast استفاده کنید
}

function showError(message) {
    alert('❌ ' + message); // در حالت واقعی از toast استفاده کنید
}

function hashPassword(password) {
    // در حالت واقعی از bcrypt استفاده می‌شود
    // اینجا یک شبیه‌سازی ساده
    return btoa(password); // هرگز در تولید استفاده نکنید!
}

function generateAuthToken(user) {
    // در حالت واقعی از JWT استفاده می‌شود
    return 'token_' + user.id + '_' + Date.now();
}

function generateUserId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

// داده‌های اولیه برای تست
function initializeSampleData() {
    if (!localStorage.getItem('registeredUsers')) {
        const sampleUsers = [
            {
                id: 1,
                firstName: "علی",
                lastName: "محمدی",
                email: "admin@example.com",
                phone: "09123456789",
                password: hashPassword("123456"),
                role: "superadmin",
                profileImage: "./assets/images/user-placeholder.jpg",
                status: "active",
                createdAt: "2023-01-15"
            },
            {
                id: 2,
                firstName: "مریم",
                lastName: "رضایی",
                email: "user@example.com",
                phone: "09129876543",
                password: hashPassword("123456"),
                role: "user",
                profileImage: "./assets/images/user-placeholder.jpg",
                status: "active",
                createdAt: "2023-02-20"
            }
        ];
        
        localStorage.setItem('registeredUsers', JSON.stringify(sampleUsers));
    }
}

// مقداردهی اولیه داده‌های نمونه
initializeSampleData();