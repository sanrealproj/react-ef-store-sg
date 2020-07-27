import React from 'react';
import Title from '../Title'
import aboutBcg from "../../images/aboutBcg.jpeg";
const Info = () => {
    return  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img
            src={aboutBcg}
            className="img-fluid img-thumbnail"
            alt="about company"
            style={{ background: "var(--darkGrey)" }}
          />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="about us" />
          <p className="text-lead text-muted my-3">
          My Team is behind The Digital Specs.

In our blog, we used to share our research and help you to choose bestselling products from ecommerce platform.

Our passion is to read lots article of upcoming and existing products and prone to analyse products from different sources even most of the time we share our experience for our owned products that we used or my friends used.

Although it is not a biggest blog site, but one of the things you will notice in the blogs is that was our whole brief view. We don’t want you to get lost in an extensive full of inappropriate information. Instead, we want you to easily pilot the digital-related reviews, guides, guidelines and tutorials available here.

All information we have used the content those come from consistent sources and basically used items by our friend, family, colleagues and from different reliable source. We have combined them with our experience to make you understand better. In practice, your choice of selecting products will surely thank me further. Since we know that if we pretend information that will not help to build our character, so we always provide you better reviews. And these assessments could save you a lot of time, money and hindrance many people felt while make a conclusion.
          </p>
          <p className="text-lead text-muted my-3">
          If you are enquiring my reliability in this field, let me state you that we don’t like to bore you with our life story. we actually believe that we have spent more time next to find pros and cons of the products described here.

 

So, by adapting a unique approach, we have strived to bring more value to you. We have designed our blog as conveniently as possible by avoiding annoying banners popping up on your screen. As a result, you can go through our blog without any hassle or untimeliness.

 

We hope you will appreciate the fillings we have drawn together in our blog. But most importantly, we hope you finalise your purchase decision on a product with the help of comparison!

 

Please don’t forget to thank me later – Once you are happy with your acquisitions!

 

If you have any enquiries, do not vacillate to contact us 😊
          </p>
          <button
            className="main-link"
            type="button"
            style={{ marginTop: "2rem" }}
          >
            more info
          </button>
        </div>
      </div>
    </div>
  </section>;
}


export default Info;