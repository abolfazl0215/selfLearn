import React from 'react';
import img from './telegram.png'

const Footer = () => {
    return ( 
        <div>
             <footer>
        <div className="container-fluid ">
            <div className="row">

                <div id="part-1"  className="col-md-4 col-sm-12 col-xs-12">
                    <h4>خدمات مشتریان</h4>
                    <a href="#">پاسخ به پرسش های متداول</a><br />
                    <a href="#">شرایط بازگشت کالا</a><br />
                    <a href="#">فرصت های شغلی</a><br />
                    <a href="#">حریم خصوصی</a><br />
                    <a href="#">راهنمای خرید</a>

                </div>
                <div id="part-2"  className="col-md-4 col-sm-12 col-xs-12">
                    <h4>اطلاعات beteen</h4>
                    <a href="#">درباره ما</a><br />
                    <a href="#">تماس باما</a><br />
                    <a href="#">پشتیبانی <br /> 021-12345678</a>
                </div>
            
                <div id="part-3"  className="col-md-4 col-sm-12 col-xs-12">
                    <h4>مارا در شبکه های اجتماعی دنبال کنید</h4>
                    <div className="container">

                        <img src={img} alt="" />
                        <img src={img} alt="" />

                    </div>
                </div>
            </div>

        </div>
    </footer>
        </div>
     );
}
 
export default Footer;