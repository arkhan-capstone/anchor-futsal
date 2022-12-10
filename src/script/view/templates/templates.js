/* eslint-disable object-curly-newline */
const homeListLapangan = (fields) => `
<div class="col-xl-4 col-md-6 portfolio-item filter-interlock">
<div class="portfolio-wrap">
  <a href="assets/img/lap-rumput.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="${fields.pictureField}" class="img-fluid" alt="${fields.fieldType}"></a>
  <div class="portfolio-info">
    <h4><a href="detail-Lapangan.html" title="More Details">${fields.fieldType}</a></h4>
    <p>Yogyakarta ⭐ 4.5</p> 
    <p>Rp ${fields.pricePerHour}/ jam</p>
  </div>
</div>
</div>
`;

const detailLapangan = (fields) => `
<div class="container-header-detail" id="content">
<div class="header-dtl">
  <a href="home.html">
    <i class="fa fa-chevron-left"> </i>Back
  </a>
</div>

<div class="slideshow-container">
  <div class="mySlides fade">
    <img class="lap" src="${fields.pictureField}" style="width: 100%" alt="${fields.fieldType}"/>
    <div class="text">Cap${fields.fieldType}</div>
  </div>

  <div class="mySlides fade">
    <img class="lap" src="${fields.pictureField}" style="width: 100%" alt="${fields.fieldType}"/>
    <div class="text">Cap${fields.fieldType}</div>
  </div>

  <div class="mySlides fade">
    <img class="lap" src="${fields.pictureField}" style="width: 100%" alt="${fields.fieldType}"/>
    <div class="text">Cap${fields.fieldType}</div>
  </div>
  <a class="prev" onclick="plusSlides(-1)">
    &#10094;
  </a>
  <a class="next" onclick="plusSlides(1)">
    &#10095;
  </a>
</div>
<br />

<div style="text-align: center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
</div>
<div class="container-detail">
<div class="wrapper">
  <div class="detail-lapangan col-md-3">
    <div class="detail-header">
      <h1>${fields.fieldType}</h1>

      <p class="lokasi">
        Price : ${fields.pricePerHour}
      </p>
      <p class="rate">
        <i class="fa-solid fa-star fa-lg"></i> 4.5
      </p>
    </div>
  </div>
  <div class="detail-fasilitas">
    <div class="list-fasilitas">
      <p>Kamar Mandi</p>
      <p>Bola</p>
      <p>Lapangan</p>
      <p>Parkiran</p>
    </div>

    <div class="jumlah-fasilitas">
      <p>1 Kamar Mandi</p>
      <p>15 Bola</p>
      <p>${fields.fieldType}</p>
      <p>Luas</p>
    </div>
  </div>

  <div class="deskripsi">
    <h1>Deskripsi</h1>
    <div class="detail-deskripsi">
      <p>
      ${fields.description}  
      </p>
    </div>
  </div>
</div>

<div class="btn-booking">
  <a href="/#/login"> Booking</a>
</div>
</div>
`;

const loginPage = () => `
<div id="bg"></div>
    <div class="container">
      <div class="forms">
        <div class="form login">
          <span class="title">Login</span>

          <form action="#">
            <div class="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i class="uil uil-envelope icon"></i>
            </div>
            <div class="input-field">
              <input type="password" class="password" placeholder="Enter your password" required />
              <i class="uil uil-lock icon"></i>
              <i class="uil uil-eye-slash showHidePw"></i>
            </div>

            <div class="input-field button">
              <input type="button" value="Login" />
            </div>
          </form>

          <div class="login-signup">
            <span class="text"
              >Not a member?
              <a href="#" class="text signup-link">Signup Now</a>
            </span>
          </div>
        </div>

        <!-- Registration Form -->
        <div class="form signup">
          <span class="title">Registration</span>

          <form action="#">
            <div class="input-field">
              <input type="text" placeholder="Enter your name" required />
              <i class="uil uil-user"></i>
            </div>
            <div class="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i class="uil uil-envelope icon"></i>
            </div>
            <div class="input-field">
              <input type="password" class="password" placeholder="Create a password" required />
              <i class="uil uil-lock icon"></i>
            </div>
            <div class="input-field">
              <input type="password" class="password" placeholder="Confirm a password" required />
              <i class="uil uil-lock icon"></i>
              <i class="uil uil-eye-slash showHidePw"></i>
            </div>

            <div class="input-field button">
              <input type="button" value="Signup" />
            </div>
          </form>

          <div class="login-signup">
            <span class="text"
              >Already a member?
              <a href="#" class="text login-link">Login Now</a>
            </span>
          </div>
        </div>
      </div>
    </div>
`;

const homePage = () => `
<main id="main">
<!-- ======= Portfolio Section ======= -->
<section id="portfolio" class="portfolio sections-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Galery</h2>
      <p>Berikut adalah lapangan futsal rekomendasi dari kami</p>
    </div>

    <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

      <div>
        <ul class="portfolio-flters">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-rumput">Lap.Rumput</li>
          <li data-filter=".filter-interlock">Lap.Interlock</li>
        </ul>
      </div>

      <div class="row gy-4 portfolio-container" id="list-lapangan">
      </div>

    </div>

  </div>
</section>
</main>
`;

const aboutPage = () => `
<section id="about" class="about">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>About Us</h2>
      <p>Di dalam lapangan futsal memiliki beberapa jenis lapangan, untuk memudahkan kamu mencari jenis lapangan yuk simak informasi berikut !</p>
    </div>

    <div class="row gy-4">
      <div class="col-lg-6">
        <h3>Lapangan Rumput</h3>
        <img src="assets/img/lap-rumput.jpg" class="img-fluid rounded-4 mb-4" alt="">
        <p>Lantai interlock futsal jenis ini menggunakan bahan dasar plastik PP dengan tujuan agar tidak mudah sobek atau rusak mengingat olahraga futsal membutuhkan pergerakan yang intens. Tekstur lantai dengan bahan ini padat serta hampir seperti keramik. Penggunaan interlocking floor semacam ini tidak hanya untuk lapangan futsal saja, tetapi bisa juga untuk lapangan olahraga lainnya seperti voli dan bulutangkis.p>
      </div>
      <div class="col-lg-6">
        <div class="content ps-0 ps-lg-5">
          <p class="fst-italic">
            Karpet rumput sintetis futsal ini adalah jenis karpet yang paling populer. Bukan hanya dipergunakan sebagai alas lantai futsal saja, tetapi juga untuk lantai rumah, playground dan masih banyak lagi yang lainnya. Seperti namanya, rumput sintetis ini berbentuk seperti rumput asli hanya saja terbuat dari bahan plastik atau vinyl. Dengan penggunaan rumput sintetis ini, maka kondisi lapangan futsal jadi terlihat mirip dengan lapangan sepak bola. 
          </p>
          <h3>Lapangan Interlock</h3>

          <div class="position-relative mt-4">
            <img src="assets/img/interlock.jpg" class="img-fluid rounded-4" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

`;

const contactPage = () => `
<section id="contact" class="contact">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Contact</h2>
    </div>

    <div class="row gx-lg-0 gy-4 justify-content-center">

      <div class="col-lg-8" >
        <form action="forms/contact.php" method="post" role="for  m" class="php-email-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="7" placeholder="Message" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>

    </div>

  </div>
</section>`;

export { homePage, detailLapangan, loginPage, homeListLapangan, aboutPage, contactPage };
