import React from 'react';

function ExpertiseSection() {
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <h1 className='display-3 text-center'>Our Expertise</h1>




        <section>
          <div class=" border-top border-3">
            <div class="row  g-0 mt-5  d-flex justify-content-center">
              <div class="col-sm col-md-11 col-lg-4 " >
                <div class="card_main">
                  <a class="card1" href="/#">
                    <p class="fs-3"> Kitchen Management</p>
                    <p class="small ">Our serving staff is trained to provide attentive and courteous service, ensuring that every customer's needs are met with efficiency and professionalism.</p>
                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                      <i class="fa-solid fa-bowl-food"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm col-md-11 col-lg-4" >
                <div class="card_main">
                  <a class="card1 " href="/#">
                    <p class="fs-3">Serving Management</p>
                    <p class="small ">Our serving staff is trained to provide attentive and courteous service, ensuring that every customer's needs are met with efficiency and professionalism.</p>
                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                      <i class="fa-brands fa-magento"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm col-md-11 col-lg-4">
                <div class="card_main">
                  <a class="card1" href="/#">
                    <p class="fs-3">Operation Management</p>
                    <p class="small">Behind the scenes, our operations team works tirelessly to keep everything running smoothly, from inventory management to logistics coordination.</p>
                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                      <i class="fa-solid fa-box-open"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm col-md-11 col-lg-4">
                <div class="card_main">
                  <a class="card1" href="/#">
                    <p class="fs-3">Customer Relations</p>
                    <p class="small">Our floor incharge leads the charge in building strong relationships with our customers, understanding their preferences and ensuring that they leave satisfied after every visit.</p>
                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                      <i class="fa-solid fa-user-plus"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}

export default ExpertiseSection;
