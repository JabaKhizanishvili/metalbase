<?php

/**
 *  app/Http/Controllers/Admin/CategoryController.php
 *
 * Date-Time: 30.07.21
 * Time: 09:18
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BrandRequest;
use App\Models\Brands;
use App\Models\File;
use App\Models\Language;
use App\Models\Translations\CategoryTranslation;
use App\Repositories\BrandRepositoryInterface;
use App\Repositories\Eloquent\BrandRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class BrandController extends Controller
{
    private $brandRepository;

    public function __construct(
        BrandRepository $brandRepository
    ) {
        $this->brandRepository = $brandRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(BrandRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.brands.index', [
            'data' => $this->brandRepository->getData($request),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $category = $this->categoryRepository->model;
        $url = locale_route('category.store', [], false);
        $method = 'POST';

        return view('admin.nowa.views.categories.form', [
            'url' => $url,
            'method' => $method,
            'category' => $category,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(CategoryRequest $request)
    {

        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        //$saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $customer = $this->staffRepository->create($saveData);


        //dd($saveData);


        // Save Files
        if ($request->hasFile('images')) {
            $customer = $this->staffRepository->saveFiles($customer->id, $request);
        }

        return redirect(locale_route('category.index', $customer->id))->with('success', __('admin.create_successfully'));
    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Product $product
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, Customer $product)
    {
        return view('admin.pages.product.show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Category $category
     *
     * @return Application|Factory|View
     */
    public function edit(string $locale, Category $category)
    {
        $url = locale_route('category.update', $category->id, false);
        $method = 'PUT';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.categories.form', [
            'staff' => $category,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(CategoryRequest $request, string $locale, Category $staff)
    {
        // dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];


        //dd($staff->id);

        if ($this->categoryRepository->update($staff->id, $saveData)) {
        }

        $this->categoryRepository->saveFiles($staff->id, $request);


        return redirect(locale_route('category.index', $staff->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, Category $category)
    {
        if (!$this->categoryRepository->delete($category->id)) {
            return redirect(locale_route('category.index', $category->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('category.index'))->with('success', __('admin.delete_message'));
    }

    public function docDelete($locale, $id)
    {
        $file = File::query()->where('id', $id)->firstOrFail();
        $id = $file->fileable_id;
        //dd($file);
        if (Storage::exists('public/Customer/' . $file->fileable_id . '/files/' . $file->title)) {
            Storage::delete('public/Customer/' . $file->fileable_id . '/files/' . $file->title);
        }

        $file->delete();
        return redirect(locale_route('customer.edit', $id))->with('success', __('admin.delete_message'));
    }
}
