<?php

/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite LLC <hello@insite.international>
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\OwnerAppController;
use App\Http\Controllers\Admin\EvaluationController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Client\ServiceController;
use App\Http\Controllers\Client\DocumentationController;
use App\Http\Controllers\Client\OurTeamController;
use App\Http\Controllers\Client\LoginPageController;




Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->name('upload');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('adminpanel')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', 'adminpanel/page');

                // Language
                Route::resource('language', LanguageController::class);
                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');

                // Translation
                Route::resource('translation', TranslationController::class);

                // Category
                // Route::resource('category', \App\Http\Controllers\Admin\CategoryController::class);
                // Route::get('category/{category}/destroy', [\App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('category.destroy');
                //
                // Product
                Route::resource('product', \App\Http\Controllers\Admin\ProductController::class);
                Route::get('product/{product}/destroy', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('product.destroy');
                //                // Gallery
                Route::resource('gallery', GalleryController::class);
                Route::get('gallery/{gallery}/destroy', [GalleryController::class, 'destroy'])->name('gallery.destroy');



                // Slider
                Route::resource('slider', SliderController::class);
                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');

                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');
                Route::get('page/doc/{doc}/destroy', [PageController::class, 'docDelete'])->name('page.delete-doc');


                Route::get('setting/active', [SettingController::class, 'setActive'])->name('setting.active');
                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');

                Route::resource('customer', \App\Http\Controllers\Admin\CustomerController::class);
                Route::get('customer/{customer}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroy'])->name('customer.destroy');
                Route::get('customer/doc/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'docDelete'])->name('customer.delete-doc');
                Route::get('customer/subclass/{customer}/create', [\App\Http\Controllers\Admin\CustomerController::class, 'createSubClass'])->name('subclass.create');
                Route::post('customer/subclass/{customer}/store', [\App\Http\Controllers\Admin\CustomerController::class, 'storeSubClass'])->name('subclass.store');
                Route::get('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'editSubClass'])->name('subclass.edit');
                Route::put('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'updateSubClass'])->name('subclass.update');
                Route::get('customer/subclass/{customer}/{subclass}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroySubClass'])->name('subclass.destroy');
                Route::get('customer/subclass/{customer}/{subclass}/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'subclassDocDelete'])->name('subclass.delete-doc');

                Route::resource('vacancy', \App\Http\Controllers\Admin\VacancyController::class);
                Route::get('vacancy/{vacancy}/destroy', [\App\Http\Controllers\Admin\VacancyController::class, 'destroy'])->name('vacancy.destroy');
                Route::get('vacancy/doc/{doc}/destroy', [\App\Http\Controllers\Admin\VacancyController::class, 'docDelete'])->name('vacancy.delete-doc');
                Route::get('vacancy/{vacancy}/resumes', [\App\Http\Controllers\Admin\VacancyController::class, 'viewResumes'])->name('vacancy.resumes');

                Route::resource('skill', \App\Http\Controllers\Admin\SkillController::class);
                Route::get('skill/{skill}/destroy', [\App\Http\Controllers\Admin\SkillController::class, 'destroy'])->name('skill.destroy');

                //staff
                Route::resource('staff', \App\Http\Controllers\Admin\StaffController::class);
                Route::get('staff/{staff}/destroy', [\App\Http\Controllers\Admin\StaffController::class, 'destroy'])->name('staff.destroy');

                //ownerapplications
                Route::resource('ownerapplications', \App\Http\Controllers\Admin\OwnerAppController::class);
                Route::get('appdetails/{id}', [\App\Http\Controllers\Admin\OwnerAppController::class, 'details'])->name('app.details');
                //evaluation
                Route::resource('evaluations', \App\Http\Controllers\Admin\EvaluationController::class);
                Route::get('evaldetails/{id}', [EvaluationController::class, 'details'])->name('eval.details');

                // Password
                Route::get('password', [\App\Http\Controllers\Admin\PasswordController::class, 'index'])->name('password.index');
                Route::post('password', [\App\Http\Controllers\Admin\PasswordController::class, 'update'])->name('password.update');

                Route::resource('classification', \App\Http\Controllers\Admin\ClassificationController::class);
                Route::get('classification/{classification}/destroy', [\App\Http\Controllers\Admin\ClassificationController::class, 'destroy'])->name('classification.destroy');
            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index');

            //services
            Route::get('/services', [ServiceController::class, 'index'])->name('client.services.index');
            Route::get('stators', [ServiceController::class, 'stators'])->name('client.services.stators');
            Route::get('/certification', [ServiceController::class, 'Certification'])->name('client.services.certifications');
            Route::get('/comprecognition', [ServiceController::class, 'Comprecognition'])->name('client.services.comprecognition');

            // stators
            Route::get('/stators/{id?}', [ServiceController::class, 'statorsId'])->name('client.services.stators');


            // documentation
            Route::get('/owner-application', [DocumentationController::class, 'index'])->name('client.services.ownerapplication');
            Route::get('/evaluation', [DocumentationController::class, 'evaluation'])->name('client.services.evaluation');
            Route::post('rateservices', [DocumentationController::class, 'add_rateservices'])->name('client.documentations.rateservices');
            Route::post('sendapplication', [DocumentationController::class, 'sendapplication'])->name('client.documentations.sendapplication');
            Route::get('/circulars', [DocumentationController::class, 'circulars'])->name('client.services.circulars');


            // our team
            Route::get('/office', [OurTeamController::class, 'index'])->name('client.services.office');
            Route::get('/inspectors', [OurTeamController::class, 'inspectors'])->name('client.services.inspectors');
            Route::get('/career', [OurTeamController::class, 'career'])->name('client.services.career');

            Route::get('/vacancy/{vacancy}', [OurTeamController::class, 'viewVacancy'])->name('client.vacancy.show');

            Route::post('vacancy/upload_application', [OurTeamController::class, 'appUpload'])->name('client.app-upload');


            // cabinet
            Route::get('/cabinet', [LoginPageController::class, 'Cabinet'])->name('client.cabinet');


            Route::get('/login', [LoginPageController::class, 'Login'])->name('client.login');

            Route::post('/loginuser', [LoginPageController::class, 'auth'])->name('client.auth');

            Route::get('/register', [LoginPageController::class, 'Register'])->name('client.register');
            Route::post('/registeruser', [App\Http\Controllers\Auth\AuthFrontendCostumController::class, 'register'])->name('register');

            Route::middleware('customer:customer')->group(function () {
                Route::get('/cabinet', [\App\Http\Controllers\Client\CabinetController::class, 'index'])->name('client.cabinet');
            });

            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');
            // contact us from navbar
            Route::post('/contactus', [ContactController::class, 'ContactMail'])->name('client.contact.contactmail');

            // About Page

            Route::get('aboutus', [LoginPageController::class, 'aboutus'])->name('client.aboutus');

            // partners page

            Route::get('partners', [LoginPageController::class, 'partners'])->name('client.partners.index');


            // Product Page
            Route::get('products', [\App\Http\Controllers\Client\ProductController::class, 'index'])->name('client.product.index');
            Route::get('product/{product}', [\App\Http\Controllers\Client\ProductController::class, 'show'])->name('client.product.show');

            Route::get('category/{category}', [\App\Http\Controllers\Client\CategoryController::class, 'show'])->name('client.category.show');
            Route::get('popular', [\App\Http\Controllers\Client\CategoryController::class, 'popular'])->name('client.category.popular');
        });
    });
