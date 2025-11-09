// فایل اصلی جاوااسکریپت برای سیستم گزارش‌دهی - نسخه RTL

// داده‌های نمونه برای نمایش
const sampleData = {
    currentUser: {
        id: 1,
        firstName: "علی",
        lastName: "محمدی",
        email: "ali@example.com",
        phone: "09123456789",
        role: "superadmin", // superadmin, admin, user
        profileImage: "./assets/images/user-placeholder.jpg",
        createdAt: "2023-01-15"
    },
    users: [
        {
            id: 1,
            firstName: "علی",
            lastName: "محمدی",
            email: "ali@example.com",
            phone: "09123456789",
            role: "superadmin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-01-15"
        },
        {
            id: 2,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 2,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 2,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 2,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 5,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 6,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 7,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 8,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 9,
            firstName: "رضا",
            lastName: "احمدی",
            email: "reza@example.com",
            phone: "09129876543",
            role: "admin",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-02-20"
        },
        {
            id: 10,
            firstName: "سارا",
            lastName: "کریمی",
            email: "sara@example.com",
            phone: "09351234567",
            role: "user",
            profileImage: "./assets/images/user-placeholder.jpg",
            status: "active",
            createdAt: "2023-03-10"
        }
    ],
    reports: [
        {
            id: 1,
            userId: 3,
            userName: "سارا کریمی",
            title: "گزارش هفتگی فروش",
            content: "گزارش کامل از فروش هفته گذشته...",
            type: "فروش",
            status: "pending", // pending, approved, rejected
            createdAt: "2023-11-01",
            updatedAt: "2023-11-01"
        },
        {
            id: 2,
            userId: 3,
            userName: "سارا کریمی",
            title: "گزارش موجودی انبار",
            content: "گزارش موجودی کالاها در انبار...",
            type: "انبار",
            status: "approved",
            createdAt: "2023-10-28",
            updatedAt: "2023-10-30"
        },
        {
            id: 3,
            userId: 2,
            userName: "رضا احمدی",
            title: "گزارش مالی ماهانه",
            content: "گزارش کامل از وضعیت مالی شرکت...",
            type: "مالی",
            status: "rejected",
            createdAt: "2023-10-25",
            updatedAt: "2023-10-27"
        }
        ,
        {
            id: 11,
            userId: 2,
            userName: "رضا احمدی",
            title: "گزارش مالی ماهانه",
            content: "گزارش کامل از وضعیت مالی شرکت...",
            type: "مالی",
            status: "rejected",
            createdAt: "2023-10-25",
            updatedAt: "2023-10-27"
        }
        ,
        {
            id: 12,
            userId: 2,
            userName: "رضا احمدی",
            title: "گزارش مالی ماهانه",
            content: "گزارش کامل از وضعیت مالی شرکت...",
            type: "مالی",
            status: "rejected",
            createdAt: "2023-10-25",
            updatedAt: "2023-10-27"
        },
        {
            id: 13,
            userId: 2,
            userName: "رضا احمدی",
            title: "گزارش مالی ماهانه",
            content: "گزارش کامل از وضعیت مالی شرکت...",
            type: "مالی",
            status: "rejected",
            createdAt: "2023-10-25",
            updatedAt: "2023-10-27"
        }
        ,
        {
            id: 14,
            userId: 2,
            userName: "رضا احمدی",
            title: "گزارش مالی ماهانه",
            content: "گزارش کامل از وضعیت مالی شرکت...",
            type: "مالی",
            status: "rejected",
            createdAt: "2023-10-25",
            updatedAt: "2023-10-27"
        }
    ]
};

// وضعیت برنامه
let appState = {
    currentUser: null,
    currentPage: 'dashboard',
    currentData: null
};

// مقداردهی اولیه برنامه
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// تابع مقداردهی اولیه
function initializeApp() {
    // بررسی وضعیت ورود کاربر
    checkLoginStatus();
    
    // بررسی اگر از صفحه ثبت‌نام برگشته‌ایم
    checkReturnFromRegistration();
    
    // تنظیم منو بر اساس نقش کاربر
    setupMenu();
    
    // نمایش صفحه پیش‌فرض
    showDashboard();
    
    // تنظیم رویدادها
    setupEventListeners();
}

// بررسی وضعیت ورود کاربر
function checkLoginStatus() {
    // در حالت واقعی، این اطلاعات از سرور یا localStorage دریافت می‌شود
    const savedUser = localStorage.getItem('currentUser');
    
    if (savedUser) {
        appState.currentUser = JSON.parse(savedUser);
        document.getElementById('user-name').textContent = 
            `${appState.currentUser.firstName} ${appState.currentUser.lastName}`;
    } else {
        // اگر کاربر لاگین نکرده باشد، به صفحه ورود هدایت می‌شود
        window.location.href = 'login.html';
    }
}
// بررسی بازگشت از صفحه ثبت‌نام
function checkReturnFromRegistration() {
    const returnToPage = localStorage.getItem('returnToPage');
    
    if (returnToPage) {
        const state = JSON.parse(returnToPage);
        
        // اگر از صفحه ثبت‌نام برگشته‌ایم و زمان معقولی گذشته
        if (state.page === 'users' && Date.now() - state.timestamp < 300000) { // 5 دقیقه
            // نمایش صفحه کاربران
            showUsers();
            
            // پاک کردن اطلاعات بازگشت
            localStorage.removeItem('returnToPage');
        }
    }
}

// تنظیم منو بر اساس نقش کاربر
function setupMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    
    // منوهای اصلی (بدون profile)
    const mainMenus = [
        { id: 'dashboard', icon: 'fas fa-tachometer-alt', text: 'صفحه اصلی' }
    ];
    
    let roleSpecificMenus = [];
    
    if (appState.currentUser.role === 'superadmin') {
        roleSpecificMenus = [
            { id: 'users', icon: 'fas fa-users', text: 'مدیریت کاربران' },
            { id: 'reports', icon: 'fas fa-file-alt', text: 'گزارشات' },
            { id: 'admins', icon: 'fas fa-user-shield', text: 'ادمین ها' }
        ];
    } else if (appState.currentUser.role === 'admin') {
        roleSpecificMenus = [
            { id: 'users', icon: 'fas fa-users', text: 'مدیریت کاربران' },
            { id: 'reports', icon: 'fas fa-file-alt', text: 'گزارشات' }
        ];
    } else {
        roleSpecificMenus = [
            { id: 'reports', icon: 'fas fa-file-alt', text: 'گزارشات' }
        ];
    }
    
    // منوی profile که همیشه آخر می‌آید
    const profileMenu = [
        { id: 'profile', icon: 'fas fa-user', text: 'پروفایل' }
    ];
    
    // ترکیب: اول منوهای اصلی، سپس منوهای نقش، در انتها profile
    const allMenus = [...mainMenus, ...roleSpecificMenus,...profileMenu];
    
    // ایجاد منوها
    allMenus.forEach(menu => {
        const menuItem = document.createElement('li');
        menuItem.className = 'menu-item';
        menuItem.dataset.page = menu.id;
        menuItem.innerHTML = `
            <i class="${menu.icon}"></i>
            <span>${menu.text}</span>
        `;
        menuList.appendChild(menuItem);
    });
    
    // اضافه کردن رویداد کلیک
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });
}

// هندلر کلیک منو
function handleMenuClick(pageId) {
    this.activateMenuItem(pageId);
    this.navigateToPage(pageId);
}

// فعال کردن منوی انتخاب شده
function activateMenuItem(pageId) {
    // حذف کلاس active از همه منوها
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
    });
    
    // اضافه کردن کلاس active به منوی انتخاب شده
    const activeMenuItem = document.querySelector(`.menu-item[data-page="${pageId}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
        activeMenuItem.setAttribute('aria-selected', 'true');
        activeMenuItem.focus();
    }
}

// پیمایش بین صفحات
function navigateToPage(page) {
    // اعتبارسنجی دسترسی بر اساس نقش
    if (!this.hasAccessToPage(page)) {
        console.warn(`User does not have access to page: ${page}`);
        this.showNotification('شما دسترسی به این صفحه را ندارید', 'error');
        return;
    }
    
    // نمایش صفحه مربوطه
    const pageHandlers = {
        'dashboard': () => showDashboard(),
        'users': () => showUsers(),
        'reports': () => showReports(),
        'admins': () => showAdmins(),
        'profile': () => showProfile()
    };
    
    const handler = pageHandlers[page] || (() => showDashboard());
    handler();
    
    // به روز رسانی history state
    window.history.pushState({ page }, '', `#${page}`);
}

// بررسی دسترسی به صفحه
function hasAccessToPage(page) {
    const userRole = appState.currentUser?.role;
    const pagePermissions = {
        'dashboard': ['superadmin', 'admin', 'user'],
        'profile': ['superadmin', 'admin', 'user'],
        'reports': ['superadmin', 'admin', 'user'],
        'users': ['superadmin', 'admin'],
        'admins': ['superadmin']
    };
    
    return pagePermissions[page]?.includes(userRole) || false;
}

// جلوگیری از XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// هندلر تغییر رویداد popstate برای پشتیبانی از دکمه بازگشت مرورگر
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        activateMenuItem(event.state.page);
        navigateToPage(event.state.page);
    }
});

// نمایش داشبورد
function showDashboard() {
    const contentArea = document.getElementById('content-area');
    
    // محاسبه آمار
    const totalUsers = sampleData.users.length;
    const totalReports = sampleData.reports.length;
    const pendingReports = sampleData.reports.filter(r => r.status === 'pending').length;
    const rejectedReports = sampleData.reports.filter(r => r.status === 'rejected').length;
    const pendingUsers = sampleData.users.filter(u => u.status === 'pending').length;
    
    contentArea.innerHTML = `
        <div class="fade-in">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">داشبورد سیستم</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="stat-card primary">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-gray-500">تعداد کاربران</p>
                            <p class="text-2xl font-bold mt-1">${totalUsers}</p>
                        </div>
                        <div class="p-3 bg-blue-100 rounded-lg">
                            <i class="fas fa-users text-blue-600 text-xl"></i>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card success">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-gray-500">کل گزارشات</p>
                            <p class="text-2xl font-bold mt-1">${totalReports}</p>
                        </div>
                        <div class="p-3 bg-green-100 rounded-lg">
                            <i class="fas fa-file-alt text-green-600 text-xl"></i>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card warning">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-gray-500">گزارشات در انتظار</p>
                            <p class="text-2xl font-bold mt-1">${pendingReports}</p>
                        </div>
                        <div class="p-3 bg-yellow-100 rounded-lg">
                            <i class="fas fa-clock text-yellow-600 text-xl"></i>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card danger">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-gray-500">گزارشات رد شده</p>
                            <p class="text-2xl font-bold mt-1">${rejectedReports}</p>
                        </div>
                        <div class="p-3 bg-red-100 rounded-lg">
                            <i class="fas fa-times-circle text-red-600 text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">آخرین گزارشات</h3>
                <div class="overflow-x-auto">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>عنوان گزارش</th>
                                <th>نوع</th>
                                <th>کاربر</th>
                                <th>تاریخ</th>
                                <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${sampleData.reports.slice(0, 5).map(report => `
                                <tr>
                                    <td>${report.title}</td>
                                    <td>${report.type}</td>
                                    <td>${report.userName}</td>
                                    <td>${report.createdAt}</td>
                                    <td>
                                        <span class="status-${report.status}">
                                            ${getStatusText(report.status)}
                                        </span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// نمایش مدیریت کاربران
function showUsers() {
    const contentArea = document.getElementById('content-area');
    
    // فیلتر کردن کاربران بر اساس نقش کاربر فعلی
    let usersToShow = [...sampleData.users];
    
    if (appState.currentUser.role === 'admin') {
        // ادمین فقط کاربران ساده را می‌بیند
        usersToShow = usersToShow.filter(user => user.role === 'user');
    }
    
    contentArea.innerHTML = `
        <div class="fade-in ">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">مدیریت کاربران</h2>
                ${appState.currentUser.role !== 'user' ? `
                    <button id="add-user-btn" class="btn btn-primary" onclick="goToRegistrationPage()">
                        <i class="fas fa-plus mr-2"></i>
                        افزودن کاربر
                    </button>
                ` : ''}
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="mb-4 md:mb-0">
                        <input type="text" id="user-search" placeholder="جستجوی کاربر..." 
                            class="form-input w-full md:w-64">
                    </div>
                    <div class="flex space-x-2">
                        <select id="user-role-filter" class="form-input w-full md:w-auto">
                            <option value="">همه نقش‌ها</option>
                            <option value="superadmin">سوپر ادمین</option>
                            <option value="admin">ادمین</option>
                            <option value="user">کاربر ساده</option>
                        </select>
                        <select id="user-status-filter" class="form-input w-full md:w-auto">
                            <option value="">همه وضعیت‌ها</option>
                            <option value="active">فعال</option>
                            <option value="inactive">غیرفعال</option>
                            <option value="pending">در انتظار</option>
                        </select>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>نام کاربر</th>
                                <th>ایمیل</th>
                                <th>شماره تماس</th>
                                <th>نقش</th>
                                <th>وضعیت</th>
                                <th>تاریخ عضویت</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${usersToShow.map(user => `
                                <tr>
                                    <td>
                                        <div class="flex items-center">
                                            <img src="${user.profileImage}" alt="${user.firstName} ${user.lastName}" 
                                                class="w-8 h-8 rounded-full mr-3">
                                            <span>${user.firstName} ${user.lastName}</span>
                                        </div>
                                    </td>
                                    <td>${user.email}</td>
                                    <td>${user.phone}</td>
                                    <td>${getRoleText(user.role)}</td>
                                    <td>
                                        <span class="status-${user.status}">
                                            ${getUserStatusText(user.status)}
                                        </span>
                                    </td>
                                    <td>${user.createdAt}</td>
                                    <td>
                                        <div class="flex space-x-2">
                                            <button class="text-blue-600 hover:text-blue-800 view-user" data-id="${user.id}">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            ${appState.currentUser.role === 'superadmin' || (appState.currentUser.role === 'admin' && user.role === 'user') ? `
                                                <button class="text-yellow-600 hover:text-yellow-800 edit-user" data-id="${user.id}">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button class="text-red-600 hover:text-red-800 delete-user" data-id="${user.id}">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            ` : ''}
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div class="p-4 border-t border-gray-200 flex justify-between items-center">
                    <div class="text-sm text-gray-500">
                        نمایش ${usersToShow.length} از ${usersToShow.length} کاربر
                    </div>
                    <div class="flex space-x-2">
                        <button class="px-3 py-1 bg-gray-200 rounded-md text-gray-700 disabled:opacity-50" disabled>
                            قبلی
                        </button>
                        <button class="px-3 py-1 bg-blue-600 text-white rounded-md">
                            1
                        </button>
                        <button class="px-3 py-1 bg-gray-200 rounded-md text-gray-700 disabled:opacity-50" disabled>
                            بعدی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // اضافه کردن رویدادها به دکمه‌های عملیات
    setupUserActionListeners();
}

// تابع انتقال به صفحه ثبت‌نام
function goToRegistrationPage() {
    // ذخیره اطلاعات فعلی برای بازگشت
    const currentState = {
        page: 'users',
        timestamp: Date.now()
    };
    localStorage.setItem('returnToPage', JSON.stringify(currentState));
    
    // انتقال به صفحه ثبت‌نام
    window.location.href = 'register.html';
}

// نمایش گزارشات
function showReports() {
    const contentArea = document.getElementById('content-area');
    
    // فیلتر کردن گزارشات بر اساس نقش کاربر فعلی
    let reportsToShow = [...sampleData.reports];
    
    if (appState.currentUser.role === 'user') {
        // کاربر ساده فقط گزارشات خودش را می‌بیند
        reportsToShow = reportsToShow.filter(report => report.userId === appState.currentUser.id);
    } else if (appState.currentUser.role === 'admin') {
        // ادمین گزارشات کاربران ساده را می‌بیند
        const simpleUsers = sampleData.users.filter(user => user.role === 'user').map(user => user.id);
        reportsToShow = reportsToShow.filter(report => simpleUsers.includes(report.userId));
    }
    
    contentArea.innerHTML = `
        <div class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">مدیریت گزارشات</h2>
                ${appState.currentUser.role === 'user' ? `
                    <button id="add-report-btn" class="btn btn-primary">
                        <i class="fas fa-plus mr-2"></i>
                        گزارش جدید
                    </button>
                ` : ''}
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="mb-4 md:mb-0">
                        <input type="text" id="report-search" placeholder="جستجوی گزارش..." 
                            class="form-input w-full md:w-64">
                    </div>
                    <div class="flex space-x-2 flex-wrap">
                        <select id="report-type-filter" class="form-input w-full md:w-auto mb-2 md:mb-0">
                            <option value="">همه انواع</option>
                            <option value="فروش">فروش</option>
                            <option value="مالی">مالی</option>
                            <option value="انبار">انبار</option>
                            <option value="پروژه">پروژه</option>
                        </select>
                        <select id="report-status-filter" class="form-input w-full md:w-auto mb-2 md:mb-0">
                            <option value="">همه وضعیت‌ها</option>
                            <option value="pending">در انتظار</option>
                            <option value="approved">تایید شده</option>
                            <option value="rejected">رد شده</option>
                        </select>
                        <input type="date" id="report-date-filter" class="form-input w-full md:w-auto">
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>عنوان گزارش</th>
                                <th>نوع</th>
                                <th>کاربر</th>
                                <th>تاریخ ایجاد</th>
                                <th>وضعیت</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsToShow.map(report => `
                                <tr>
                                    <td>${report.title}</td>
                                    <td>${report.type}</td>
                                    <td>${report.userName}</td>
                                    <td>${report.createdAt}</td>
                                    <td>
                                        <span class="status-${report.status}">
                                            ${getStatusText(report.status)}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="flex space-x-2">
                                            <button class="text-blue-600 hover:text-blue-800 view-report" data-id="${report.id}">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            ${appState.currentUser.role !== 'user' ? `
                                                <button class="text-green-600 hover:text-green-800 approve-report" data-id="${report.id}">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button class="text-red-600 hover:text-red-800 reject-report" data-id="${report.id}">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            ` : ''}
                                            ${appState.currentUser.role === 'superadmin' ? `
                                                <button class="text-red-600 hover:text-red-800 delete-report" data-id="${report.id}">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            ` : ''}
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div class="p-4 border-t border-gray-200 flex justify-between items-center">
                    <div class="text-sm text-gray-500">
                        نمایش ${reportsToShow.length} از ${reportsToShow.length} گزارش
                    </div>
                    <div class="flex space-x-2">
                        <button class="px-3 py-1 bg-gray-200 rounded-md text-gray-700 disabled:opacity-50" disabled>
                            قبلی
                        </button>
                        <button class="px-3 py-1 bg-blue-600 text-white rounded-md">
                            1
                        </button>
                        <button class="px-3 py-1 bg-gray-200 rounded-md text-gray-700 disabled:opacity-50" disabled>
                            بعدی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // اضافه کردن رویدادها به دکمه‌های عملیات گزارشات
    setupReportActionListeners();
}

// نمایش مدیریت ادمین‌ها (فقط برای سوپر ادمین)
function showAdmins() {
    if (appState.currentUser.role !== 'superadmin') {
        showDashboard();
        return;
    }
    
    const contentArea = document.getElementById('content-area');
    const admins = sampleData.users.filter(user => user.role === 'admin' || user.role === 'superadmin');
    
    contentArea.innerHTML = `
        <div class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">مدیریت ادمین‌ها</h2>
                <button id="add-admin-btn" class="btn btn-primary">
                    <i class="fas fa-plus mr-2"></i>
                    افزودن ادمین
                </button>
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="p-4 border-b border-gray-200">
                    <input type="text" id="admin-search" placeholder="جستجوی ادمین..." 
                        class="form-input w-full md:w-64">
                </div>
                
                <div class="overflow-x-auto">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>نام ادمین</th>
                                <th>ایمیل</th>
                                <th>شماره تماس</th>
                                <th>نقش</th>
                                <th>وضعیت</th>
                                <th>تاریخ عضویت</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${admins.map(admin => `
                                <tr>
                                    <td>
                                        <div class="flex items-center">
                                            <img src="${admin.profileImage}" alt="${admin.firstName} ${admin.lastName}" 
                                                class="w-8 h-8 rounded-full mr-3">
                                            <span>${admin.firstName} ${admin.lastName}</span>
                                        </div>
                                    </td>
                                    <td>${admin.email}</td>
                                    <td>${admin.phone}</td>
                                    <td>${getRoleText(admin.role)}</td>
                                    <td>
                                        <span class="status-${admin.status}">
                                            ${getUserStatusText(admin.status)}
                                        </span>
                                    </td>
                                    <td>${admin.createdAt}</td>
                                    <td>
                                        <div class="flex space-x-2">
                                            <button class="text-blue-600 hover:text-blue-800 view-admin" data-id="${admin.id}">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="text-yellow-600 hover:text-yellow-800 edit-admin" data-id="${admin.id}">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                            ${admin.role !== 'superadmin' ? `
                                                <button class="text-red-600 hover:text-red-800 delete-admin" data-id="${admin.id}">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            ` : ''}
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// نمایش پروفایل کاربر
function showProfile() {
    const contentArea = document.getElementById('content-area');
    const user = appState.currentUser;
    
    contentArea.innerHTML = `
        <div class="fade-in">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">پروفایل کاربر</h2>
            
            <div class="bg-white rounded-xl shadow-md p-6">
                <div class="flex flex-col md:flex-row items-startn  space-y-6 space-x-6 md:space-y-0 ml:space-x-6">
                    <div class="flex-shrink-0">
                        <div class="relative">
                            <img src="${user.profileImage}" alt="${user.firstName} ${user.lastName}" 
                                class="w-32 h-32 rounded-full object-cover border-4 border-blue-100">
                            <button class="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                                <i class="fas fa-camera"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex-1">
                        <form id="profile-form">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                
                                
                                <div class="form-group">
                                    <label for="profile-email" class="form-label">ایمیل</label>
                                    <input type="email" id="profile-email" class="form-input" value="${user.email}">
                                </div>
                                
                                <div class="form-group">
                                    <label for="profile-phone" class="form-label">شماره موبایل</label>
                                    <input type="tel" id="profile-phone" class="form-input" value="${user.phone}">
                                </div>
                                
                                <div class="form-group">
                                    <label for="profile-password" class="form-label">رمز عبور جدید</label>
                                    <input type="password" id="profile-password" class="form-input" placeholder="در صورت تمایل به تغییر وارد کنید">
                                </div>
                                
                                <div class="form-group">
                                    <label for="profile-confirmPassword" class="form-label">تکرار رمز عبور</label>
                                    <input type="password" id="profile-confirmPassword" class="form-input" placeholder="تکرار رمز عبور جدید">
                                </div>
                            </div>
                            
                            <div class="mt-6 flex justify-end">
                                <button type="submit" class="btn btn-primary">
                                    ذخیره تغییرات
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // اضافه کردن رویداد به فرم پروفایل
    document.getElementById('profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('تغییرات با موفقیت ذخیره شد!');
    });
}

// تنظیم رویدادهای کلی برنامه
function setupEventListeners() {
    // رویداد خروج
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        }
    });
}

// تنظیم رویدادهای عملیات کاربران
function setupUserActionListeners() {
    // مشاهده کاربر
    document.querySelectorAll('.view-user').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.dataset.id);
            viewUser(userId);
        });
    });
    
    // ویرایش کاربر
    document.querySelectorAll('.edit-user').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.dataset.id);
            editUser(userId);
        });
    });
    
    // حذف کاربر
    document.querySelectorAll('.delete-user').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.dataset.id);
            deleteUser(userId);
        });
    });
    
    // افزودن کاربر
    if (document.getElementById('add-user-btn')) {
        document.getElementById('add-user-btn').addEventListener('click', function() {
            addUser();
        });
    }
}

// تنظیم رویدادهای عملیات گزارشات
function setupReportActionListeners() {
    // مشاهده گزارش
    document.querySelectorAll('.view-report').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.dataset.id);
            viewReport(reportId);
        });
    });
    
    // تایید گزارش
    document.querySelectorAll('.approve-report').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.dataset.id);
            approveReport(reportId);
        });
    });
    
    // رد گزارش
    document.querySelectorAll('.reject-report').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.dataset.id);
            rejectReport(reportId);
        });
    });
    
    // حذف گزارش
    document.querySelectorAll('.delete-report').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.dataset.id);
            deleteReport(reportId);
        });
    });
    
    // افزودن گزارش
    if (document.getElementById('add-report-btn')) {
        document.getElementById('add-report-btn').addEventListener('click', function() {
            addReport();
        });
    }
}

// توابع کمکی
function getStatusText(status) {
    const statusMap = {
        'pending': 'در انتظار',
        'approved': 'تایید شده',
        'rejected': 'رد شده'
    };
    return statusMap[status] || status;
}

function getRoleText(role) {
    const roleMap = {
        'superadmin': 'سوپر ادمین',
        'admin': 'ادمین',
        'user': 'کاربر ساده'
    };
    return roleMap[role] || role;
}

function getUserStatusText(status) {
    const statusMap = {
        'active': 'فعال',
        'inactive': 'غیرفعال',
        'pending': 'در انتظار'
    };
    return statusMap[status] || status;
}

// توابع عملیات کاربران
function viewUser(userId) {
    const user = sampleData.users.find(u => u.id === userId);
    if (user) {
        alert(`مشاهده کاربر: ${user.firstName} ${user.lastName}\nایمیل: ${user.email}\nنقش: ${getRoleText(user.role)}`);
    }
}

function editUser(userId) {
    const user = sampleData.users.find(u => u.id === userId);
    if (user) {
        alert(`ویرایش کاربر: ${user.firstName} ${user.lastName}`);
    }
}

function deleteUser(userId) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟')) {
        alert(`کاربر با شناسه ${userId} حذف شد.`);
        // در حالت واقعی، درخواست حذف به سرور ارسال می‌شود
    }
}

function addUser() {
    alert('افزودن کاربر جدید');
}

// توابع عملیات گزارشات
function viewReport(reportId) {
    const report = sampleData.reports.find(r => r.id === reportId);
    if (report) {
        alert(`مشاهده گزارش: ${report.title}\nنوع: ${report.type}\nوضعیت: ${getStatusText(report.status)}`);
    }
}

function approveReport(reportId) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این گزارش را تایید کنید؟')) {
        alert(`گزارش با شناسه ${reportId} تایید شد.`);
        // در حالت واقعی، درخواست تایید به سرور ارسال می‌شود
    }
}

function rejectReport(reportId) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این گزارش را رد کنید؟')) {
        alert(`گزارش با شناسه ${reportId} رد شد.`);
        // در حالت واقعی، درخواست رد به سرور ارسال می‌شود
    }
}

function deleteReport(reportId) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این گزارش را حذف کنید؟')) {
        alert(`گزارش با شناسه ${reportId} حذف شد.`);
        // در حالت واقعی، درخواست حذف به سرور ارسال می‌شود
    }
}

function addReport() {
    alert('افزودن گزارش جدید');
}