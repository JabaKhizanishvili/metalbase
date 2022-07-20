import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
// import { ReactComponent as TilesIcon } from "/assets/images/icons/svg/tiles.svg";
// import { tileSlider } from "../components/Data";
import { ProductBox } from "../components/Shared";
import { BiChevronRight } from "react-icons/bi";
import Layout from "../Layouts/Layout";

const Tiles = ({ seo, page, product, name }) => {
    const tileSlider = [
        {
            name: "Arabesco Marfil",
            size: "45x45",
            img: "/assets/images/products/1.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil ikji",
            size: "45x45",
            img: "/assets/images/products/2.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil",
            size: "45x45",
            img: "/assets/images/products/3.png",
            link: "/single-product",
        },
        {
            name: "Arabesco ",
            size: "45x45",
            img: "/assets/images/products/4.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil unique j",
            size: "45x45",
            img: "/assets/images/products/5.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil",
            size: "45x45",
            img: "/assets/images/products/3.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil ikji",
            size: "45x45",
            img: "/assets/images/products/2.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil unique j",
            size: "45x45",
            img: "/assets/images/products/5.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil",
            size: "45x45",
            img: "/assets/images/products/3.png",
            link: "/single-product",
        },
        {
            name: "Arabesco Marfil ikji",
            size: "45x45",
            img: "/assets/images/products/3.png",
            link: "/single-product",
        },
    ];
    console.log(product.data, 'esaa');

    return (
        <Layout seo={seo}>
            <div className="bg-neutral-100">
                <div className="wrapper">
                    <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="  inline-block lowercase">ფილები</p>
                    </div>
                    <div className="mt-10 mb-12 text-2xl ">
                        {/* <TilesIcon className="inline-block" /> გრანიტის ფილები */}
                        <img className="inline-block" src="/assets/images/icons/svg/tiles.svg" /> გრანიტის ფილები
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {product.data.map((item, index) => {
                            return (
                                // <ProductBox
                                //     key={index}
                                //     name={item.title}
                                //     size={item.height + ' x ' + item.width}
                                //     img={
                                //         item.latest_image != null
                                //             ? "/" +
                                //             item.latest_image.path +
                                //             "/" +
                                //             item.latest_image.title
                                //             : null
                                //     }
                                //     link={item.link}
                                // />
                                <div className={`p-4 transition hover:bg-zinc-50 relative max-w-sm`}>
                                    <div className="text-xl whitespace-nowrap mb-2">{item.title}</div>
                                    <div className="opacity-50 lowercase">ზომა: {item.height + ' x ' + item.width}</div>
                                    <div className="w-full h-60 my-5">
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <Link href={item.link} className="lowercase ">
                                        ნახე სრულად <BiChevronRight className="inline-block" />
                                    </Link>
                                </div>


                            );
                        })}
                    </div>
                    <div className="pb-20 flex items-center justify-center">
                        <button className="mx-1 opacity-100">1</button>
                        <button className="mx-1 opacity-50">2</button>
                        <button className="mx-1 opacity-50">3</button>
                        <button className="mx-1 opacity-50">4</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tiles;
