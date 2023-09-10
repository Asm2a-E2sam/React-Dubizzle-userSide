import './SingleProductPage.css'
import { useEffect } from 'react';
import $ from 'jquery';
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronCompactRight, BsShare , BsGeoAlt , BsFlag , BsChevronCompactLeft , BsTelephone } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';

export default function SingleProductPage() {
    useEffect(() => {
        $('.imgo').click(function () {
            var src = $(this).attr('src');
            var index = $(this).parent().index() + 1;
            var total = $('.gallery img').length;
            $('.overlay-image').attr('src', src);
            $('#image-number').text(index + ' / ' + total);
            $('.overlay').css('display', 'flex').fadeIn();
        });

        $('.overlay').click(function (e) {
            if (e.target === this) {
                $('.overlay').fadeOut();
            }
        });

        $('.prev').click(function () {
            var currentImage = $('.overlay-image').attr('src');
            var prevImage = $('.gallery .carousel-item:has(img[src="' + currentImage + '"])').prev().find('img').attr('src');
            if (prevImage) {
                $('.overlay-image').attr('src', prevImage);
            } else {
                var firstImage = $('.gallery .carousel-item').last().find('img').attr('src');
                $('.overlay-image').attr('src', firstImage);
            }
            updateImageNumber();
        });

        $('.next').click(function () {
            var currentImage = $('.overlay-image').attr('src');
            var nextImage = $('.gallery .carousel-item:has(img[src="' + currentImage + '"])').next().find('img').attr('src');
            if (nextImage) {
                $('.overlay-image').attr('src', nextImage);
            } else {
                var lastImage = $('.gallery .carousel-item').first().find('img').attr('src');
                $('.overlay-image').attr('src', lastImage);
            }
            updateImageNumber();
        });

        function updateImageNumber() {
            var currentImage = $('.overlay-image').attr('src');
            var imageIndex = $('.gallery img').index($('.gallery img[src="' + currentImage + '"]')) + 1;
            var totalImages = $('.gallery img').length;
            $('#image-number').text(imageIndex + ' / ' + totalImages);
        }

        $('.close-overlay').click(function () {
            $('.overlay').fadeOut();
        });

        $('.loc-btn').click(function () {
            var src = $('.loc-img img').attr('src');
            $('.overlay-image2').attr('src', src);
            $('.overlay2').css('display', 'flex').fadeIn();
        });

        $('.close-overlay2').click(function () {
            $('.overlay2').fadeOut();
        });

        $('.overlay2').click(function (e) {
            if (e.target === this) {
                $('.overlay2').fadeOut();
            }
        });

        return () => {
            $('.imgo').off();
            $('.overlay').off();
            $('.prev').off();
            $('.next').off();
            $('.close-overlay').off();
            $('.loc-btn').off();
            $('.close-overlay2').off();
            $('.overlay2').off();
        };
    }, []);

    return (
        <>
         <Helmet>
        <title>singlePage</title>
      </Helmet>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xxl-8">
                        <div id="carouselExampleIndicators" className="carousel slide gallery">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../../../assets/Images/1.jpeg" className="d-block w-100 rounded imgo img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="../../../assets/Images/2.jpeg" className="d-block w-100 rounded imgo img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="../../../assets/Images/3.jpeg" className="d-block w-100 rounded imgo img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="../../../assets/Images/4.jpeg" className="d-block w-100 rounded imgo img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="../../../assets/Images/5.jpeg" className="d-block w-100 rounded imgo img-fluid" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev main-add" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span id="carouselPT" className="carousel-control-prev-icon"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next main-add" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span id="carouselNT" className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="mt-3 border rounded p-3">
                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <h1 className="fw-bold" style={{ color: "#E00000" }}>EGP 963,100</h1>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end fs-4">
                                        <BsShare className='me-3' />
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                            </div>
                            <h5 className="fw-bold mt-3">فيلا للبيع في نايا ويست الشيخ زايد بالتقسيط علي 9 سنوات Naia West</h5>
                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <div className="d-flex fs-6 fw-semibold " style={{ color: "#737577" }}>
                                            <BsGeoAlt className='me-2 align-self-center' />
                                            <p className="m-0">Sheikh Zayed, Giza</p>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <p className="m-0">2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border rounded p-3">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h4>Details</h4>
                                </div>
                                <div className="col-3">
                                    <p>Type</p>
                                    <p>Price Type</p>
                                    <p>Bedrooms</p>
                                    <p>Furnished</p>
                                    <p>Delivery Date</p>
                                    <p>Video</p>
                                </div>
                                <div className="col-3 fw-bold">
                                    <p>Twin House</p>
                                    <p>Price</p>
                                    <p>4</p>
                                    <p>No</p>
                                    <p>2026</p>
                                    <p>Not Available</p>
                                </div>
                                <div className="col-3">
                                    <p>Price</p>
                                    <p>Area (m²)</p>
                                    <p>Bathrooms</p>
                                    <p>Payment Option</p>
                                    <p>Delivery Term</p>
                                    <p>Virtual Tour</p>
                                </div>
                                <div className="col-3">
                                    <p>963,100</p>
                                    <p>295</p>
                                    <p>4</p>
                                    <p>Cash or Installment</p>
                                    <p>Not Finished</p>
                                    <p>Not Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border rounded p-3">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h4>Description</h4>
                                </div>
                                <div className="col-12">
                                    <p>امتلك فيلتك في كمبوند نايا ويست Naia west بجوار سوديك علي الصحراوي مباشرة في الشيخ زايد
                                        الجديدة بالتقسيط علي 9 سنوات </p>
                                </div>
                                <div className="col-12">
                                    <p>موقع المشروع:
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>- مباشرة على طريق مصر اسكندرية الصحراوي بجانب سوديك و إعمار مباشرة <br />
                                        -3 دقائق من مطار سفنكس الدولي<br />
                                        -7 دقائق من المحور<br />
                                        -7 دقائق من مول العرب<br />
                                        -10 دقائق من المتحف الكبير<br />
                                        -15 دقيقة من مول مصر<br />
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        مساحة المشروع <br />
                                        140 فدان
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        فيلات فخمه بتصميم كلاسيكي جديد <br />
                                        بواسطة <br />
                                        RMC رأفت ميلر <br />
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        الخدمات والمرافق Naia west <br />
                                        - مدرسة دولية<br />
                                        -منطقة تجارية<br />
                                        - مباني اداريه<br />
                                        - مركز عيادات<br />
                                        - كلوب هاوس<br />
                                        - بحيرات صناعيه <br />
                                        - حمامات سباحه <br />
                                        - كيدز اريا <br />
                                        - منطقة ترفيهية<br />
                                        - فوود كورت<br />
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        مساحة المباني : 255 متر <br />
                                        مساحة الأرض : 269 متر <br />
                                        مساحة الحديقة : 172 متر <br />
                                        مساحة الرووف : 40 متر <br />
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        3 غرف نوم<br />
                                        غرفة معيشة<br />
                                        4 حمام<br />
                                        ريسيبشن<br />
                                        2 تيراس<br />
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        السعر: 9,631,000
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        التقسيط علي 9 سنوات
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p>
                                        لمزيد من التفاصيل تواصل بإتصال أو واتس أب علي 01007087576 <br />
                                        متواجدين 24 ساعه للرد علي أي استفسار<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border rounded p-3">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h4>Amenities</h4>
                                </div>
                                <div className="col-12 d-flex" style={{ flexWrap: 'wrap' }}>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Balcony</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Private Garden</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Security</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Pets Allowed</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Pool</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Electricity Meter</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Water Meter</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Natural Gas</p>
                                    </div>
                                    <div className="border p-2 rounded border-secondary-subtle me-2 mb-2">
                                        <p className="m-0">Landline</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border rounded p-3">
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <h4>Location</h4>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex fs-6 fw-semibold" style={{ color: " black" }}>
                                            <BsGeoAlt className='me-2 align-self-center' />
                                            <p className="m-0">Sheikh Zayed, Giza</p>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="loc-img">
                                            <img src="../../../assets/Images/1000x500.png" alt="" className="w-100 rounde" />
                                        </div>
                                        <button
                                            className="d-flex fs-6 fw-semibold border border-danger-subtle justify-content-center loc-btn p-2 rounded"
                                            style={{ color: 'black', backgroundColor: 'white' }}>
                                            <BsGeoAlt className='me-2 align-self-center' />
                                            <p className="m-0">See location</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overlay2 col-xxl-12">
                            <div className="overlay2">
                                <img className="overlay-image2" src="" alt="" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <div className="d-flex fs-6 fw-semibold">
                                        <p className="m-0">AD ID 198183035</p>
                                    </div>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                    <div className="d-flex fs-6 fw-bold">
                                        <BsFlag className="bi bi-flag me-2 align-self-center" style={{ color: "#E00000" }} />
                                        <p className="m-0">Report this ad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border h-0"></div>
                        <div className="mt-3  mb-5">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h4>Related ads</h4>
                                </div>
                                <div className="col-12 mb-2">
                                    <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="false">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="card-group">
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This is a wider card with supporting text below
                                                                as a natural lead-in to additional content. This content is a
                                                                little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/2.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This card has supporting text below as a
                                                                natural lead-in to additional content.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/3.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This is a wider card with supporting text below
                                                                as a natural lead-in to additional content. This card has even
                                                                longer content than the first to show that equal height action.
                                                            </p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card-group">
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/4.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This is a wider card with supporting text below
                                                                as a natural lead-in to additional content. This content is a
                                                                little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/5.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This card has supporting text below as a
                                                                natural lead-in to additional content.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/6.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This is a wider card with supporting text below
                                                                as a natural lead-in to additional content. This card has even
                                                                longer content than the first to show that equal height action.
                                                            </p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card-group">
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/7.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This is a wider card with supporting text below
                                                                as a natural lead-in to additional content. This content is a
                                                                little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/8.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This card has supporting text below as a
                                                                natural lead-in to additional content.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="card border">
                                                        <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-7 d-flex align-items-center pe-0">
                                                                    <div className="d-flex fw-semibold fs-5">
                                                                        <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                            1,240,440</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                    <div className="d-flex fw-bold">
                                                                        <AiOutlineHeart className='align-self-center' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="card-text">This is a wider card with supporting text below
                                                                as a natural lead-in to additional content. This card has even
                                                                longer content than the first to show that equal height action.
                                                            </p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                                ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev adds" type="button"
                                            data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            <span id="carouselPB" className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next adds" type="button"
                                            data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            <span id="carouselNB" className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <div id="carouselExampleCaptions2" className="carousel carousel-dark slide"
                                        data-bs-ride="false">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="card border">
                                                    <img src="../../../assets/Images/1.jpeg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-7 d-flex align-items-center pe-0">
                                                                <div className="d-flex fw-semibold fs-5">
                                                                    <p className="card-title" style={{ color: "#E00000" }}>EGP
                                                                        1,240,440</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-5 d-flex justify-content-end align-items-center ps-0">
                                                                <div className="d-flex fw-bold">
                                                                    <AiOutlineHeart className='align-self-center' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="card-text">This is a wider card with supporting text below
                                                            as a natural lead-in to additional content. This card has even
                                                            longer content than the first to show that equal height action.
                                                        </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                            ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev adds" type="button"
                                            data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                                            <span id="carouselPB" className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next adds" type="button"
                                            data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                                            <span id="carouselNB" className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3"
                            style={{ flexWrap: 'wrap' }}>
                            <div className="ms-2 me-4">
                                <h6 className="fw-bold">Company</h6>
                                <p className="m-0">member since nove 2020</p>
                                <p>comm ID: 3215142</p>
                                <h6 style={{ color: '#E00000', fontWeight: 'bold' }}>See profile <i
                                    className="fa-solid fa-chevron-right"></i></h6>
                            </div>
                            <div>
                                <img src="../../../assets/Images/584-400x300.jpeg" className="rounded comp-logo-img" alt="" />
                            </div>
                            <div className="w-100">
                                <div style={{ backgroundColor: '#E00000', color: 'white' }}
                                    className="d-flex justify-content-center align-items-center fs-5 fw-semibold rounded pt-2 pb-2 mx-1 mt-3 showPhone">
                                    <BsTelephone className='me-2' />
                                    <p className="m-0">Show Phone Number</p>
                                </div>
                                <div className="d-flex justify-content-center align-items-center fs-5 fw-semibold rounded pt-2 pb-2 mx-1 mt-3 border border-danger chato">
                                    <IoChatbubblesOutline className="me-2" style={{ color: "#E00000" }} />
                                    <p className="m-0">Chat</p>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded mt-3 p-3">
                            <h4>Your safety matters to us!</h4>
                            <ul>
                                <li>Only meet in public / crowded places for example metro stations and malls.</li>
                                <li>Never go alone to meet a buyer / seller, always take someone with you.</li>
                                <li>Check and inspect the product properly before purchasing it.</li>
                                <li>Never pay anything in advance or transfer money before inspecting the product.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="overlay col-xxl-12">
                                <div className="overlay">
                                    <img className="overlay-image" src="" alt="" />
                                    <div className="pagination">
                                        <button className="prev"><BsChevronCompactLeft /></button>
                                        <button className="next"><BsChevronCompactRight /></button>
                                    </div>
                                    <p id="image-number" className="image-number"></p>
                                    <span className="close-overlay">X</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}