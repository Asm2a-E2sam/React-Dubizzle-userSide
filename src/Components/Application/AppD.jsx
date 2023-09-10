const AppD = () => {
    return (
        <>
      {/* Footer */}
      <div className="bg-light">
        <div className="row  px-5 py-3 foorter border-bottom">
          {/* Footer 1 */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <p className="fs-4 fw-bold pt-4 pe-5">
                Find amazing deals on the go
                <span className="d-block text-danger">
                  Download the app now! 
                </span>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-end pe-5">
              <img
                className="w-50 px-4"
                src="https://www.dubizzle.com.eg/assets/brandMobileApp.0053aa25c45ccb88f3056b71272aab15.webp"
                alt=""
              />
            </div>
            {/* Social */}
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="d-flex flex-row">
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    );
}

export default AppD;
