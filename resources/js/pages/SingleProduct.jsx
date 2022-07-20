// import { ReactComponent as TilesIcon } from "/assets/images/icons/svg/tiles.svg";
import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";

import { BiChevronRight } from "react-icons/bi";
// import tile1 from "../assets/images/products/1.png";
// import tile2 from "../assets/images/products/2.png";
// import tile3 from "../assets/images/products/3.png";
// import tile4 from "../assets/images/products/4.png";
// import tile5 from "../assets/images/products/5.png";
// import { Link } from "react-router-dom";

const SingleProduct = ({ seo, page }) => {
    const otherItems = [
        {
            img: "/assets/images/products/1.png",
            name: "Arabesco Marfil",
        },
        {
            img: "/assets/images/products/2.png",
            name: "PRE 311",
        },
        {
            img: "/assets/images/products/3.png",
            name: "PRE 310",
        },
        {
            img: "/assets/images/products/4.png",
            name: "Caesar Natural",
        },
        {
            img: "/assets/images/products/5.png",
            name: "Atenea Beige",
        },
        {
            img: "/assets/images/products/5.png",
            name: "Portoro Black",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="wrapper">
                <div className="block pt-6">
                    <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                    <BiChevronRight className="inline-block mx-1" />
                    <p className="  inline-block lowercase">ფილები</p>
                </div>
                <div className="mt-10 mb-12 text-2xl ">
                    {/* <TilesIcon className="inline-block" /> Arabesco Antic Marfil */}
                    <img className="inline-block" src="/assets/images/icons/svg/tiles.svg" /> Arabesco Antic Marfil
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-start mb-12">
                    <div className="lg:w-1/3 lg:h-96 lg:mx-0 lg:mr-10 w-auto mx-auto mb-10 ">
                        <img src="/assets/images/products/3.png" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="max-w-lg">
                        <div className="lowercase tetx-justify mb-10">
                            პროდუქტის აღწერა, რა არის, რისთვის გამოიყენება, როგორ მზადდება. ამ
                            კონკრეტულ შემთხვევაში როგორი ხარისხისაა, საიდან არის შემოტანილი ან
                            სადაა წარმოებული და ა.შ.
                        </div>
                        <div>მახასიათებლები</div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            ბრენდი: Portland Ceniza PW
                        </div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            სიგრძე: 60 სმ
                        </div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            სიგრძე: 60 სმ
                        </div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            მწარმოებელი: ესპანეთი
                        </div>
                    </div>
                </div>
                <div className="mb-5">მსგავსი პროდუქტი</div>
                <div className="block pb-20">
                    {otherItems.map((item, index) => {
                        return (
                            <Link
                                href="/single-product"
                                key={index}
                                className="mr-8 mb-8 w-32 inline-block align-top"
                            >
                                <div className="w-full h-32 mb-3 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-sm">{item.name}</div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default SingleProduct;
