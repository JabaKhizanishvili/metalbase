// import bg from "../assets/images/partners/bg.png";
import { BiChevronRight } from "react-icons/bi";
import { partnersPage } from "../components/Data";
import Layout from "../Layouts/Layout";
import React from "react";

const Partners = ({ seo, page, partners }) => {
    console.log(partners);

    return (
        <Layout seo={seo}>
            <div
                className="bg-cover bg-no-repeat bg-center text-white pb-32"
                style={{ backgroundImage: `url('/assets/images/partners/bg.png')` }}
            >
                <div className="wrapper">
                    <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="  inline-block lowercase">პარტნიორები</p>
                    </div>
                    <div className="sm:text-center max-w-xl mx-auto my-12">
                        <div className="lowercase">აღმშენებლობა სმბ მეტალო ბაზა</div>
                        <div className="sm:text-4xl text-2xl my-5">
                            რაიმე სლოგანი კომპანიის საქმიანობის შესახებ
                        </div>
                        <p className="lowercase">
                            ემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული
                            ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი
                            წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა
                        </p>
                    </div>
                    <div className="block text-center sm:text-left">
                        {partners.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className="text-center inline-block bg-white mr-3 mb-3 grayscale transition hover:grayscale-0 text-black text-sm h-32 w-60 align-top p-4 overflow-hidden"
                                >
                                    <div className="h-12  w-auto m-auto flex items-center justify-center mb-2">
                                        {/* <img src={item.logo} alt="" className="object-contain " /> */}
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <div className="lowercase">{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Partners;
