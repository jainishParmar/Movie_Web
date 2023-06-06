import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 py-6">
        <Head title="about us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                welcome to netflixo
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                  ,mvbhdsfvnsfmvdsfuvsdfnmvudvdfjhvsdfv
                  jsdbvydsbvkdjbyidcbiuvivfbodsugyvdfjdasfuudgvyg
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6  mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold ">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    vnsdfgvcvnhkdsfbsdfvnkdfum nm mnbj mhvivv,v
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold ">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Completely free without registration
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="/images/aboutus.jpg"
                alt="aboutus"
                className="w-full xl:block hidden h-header object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
