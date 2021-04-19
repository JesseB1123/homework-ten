var homeContent = `<section class="promo-tours">
<div class="promo" id="promo1">
    <div class="promo-details">
        <div class="big-text promo-headers">ISRAEL</div>
        <div class="price price-size">FROM $1000</div>
        <div class="button rounded">LEARN MORE</div>
    </div>
</div>
<div class="promo" id="promo2">
    <div class="promo-details">
        <div class="big-text promo-headers">U.S.A.</div>
        <div class="price price-size">FROM $1500</div>
        <div class="button rounded">LEARN MORE</div>
    </div>
</div>
<div class="promo" id="promo3">
    <div class="promo-details">
        <div class="big-text promo-headers">AUSTRALIA</div>
        <div class="price price-size">FROM $1800</div>
        <div class="button rounded">LEARN MORE</div>
    </div>
</div>
</section>

<section class="booking-form">
<div class="form-holder">
    <div class="form-header">BOOKING FORM</div>
    <!-- BEGIN FORM -->
    <form action="#">
        <div class="form-row">
            <input type="text" placeholder="name..." class="half">
            <input type="email" placeholder="email..." class="half">
        </div>
        <div class="form-row">
            <input type="text" placeholder="country..." class="half">
            <input type="email" placeholder="hotel..." class="half">
        </div>
        <div class="form-row">
            <div class="form-text">Check-in</div>
            <input type="date" placeholder="mm/dd/yyyy" class="most">
        </div>
        <div class="form-row">
            <div class="form-text">Check-out</div>
            <input type="date" placeholder="mm/dd/yyyy" class="most">
        </div>
        <div class="form-row">
            <div class="selectors">
                <div class="form-text">Adults</div>
                <select name="adult">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>

                <div class="form-text">Children</div>
                <select name="children">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>


                <div class="form-text">Rooms</div>
                <select name="rooms">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <textarea name="message" placeholder="message..." cols="30" rows="10" class="full"></textarea>
        </div>
        <div class="form-row">
            <input type="submit" value="SUBMIT" id="submit-button">
        </div>
    </form>
    <!-- END FORM -->
</div>
</section>`;
var aboutContent = `<section class="about">
<div class="about-top-section">
    <h1>ABOUT:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="about-bottom-section">
    <h1>CLIENT QUOTES:</h1>
    <div class="client">
        <div class="client-img client1">
            <!-- <img src="img/about-client-01.jpg" alt="client 1"> -->
        </div>
        <div class="client-quote">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </p>
            <div class="client-quote-name">- MIRANDA BROWN</div>
        </div>
    </div>
    <div class="client">
        <div class="client-img client2">
            <!-- <img src="img/about-client-02.jpg" alt="client 2"> -->
        </div>
        <div class="client-quote">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </p>
            <div class="client-quote-name">- JOHNATHAN WES</div>
        </div>
    </div>
</div>
</section>`;
var toursContent = `<div class="tour">
<header>
    <span>tours:</span>
</header>
<div class="tours">
    <div class="tour-promo one">
        <h1 class="big-text tour-promo-header">israel</h1>
        <div class="big-text tour-promo-price">from $1000</div>
        <span class="tour-promo-button"><a id="tour1" href="#">learn more</a></span>
    </div>
    <div class="tour-promo two">
        <h1 class="big-text tour-promo-header">u.s.a.</h1>
        <div class="big-text tour-promo-price">from $1500</div>
        <span class="tour-promo-button"><a id="tour2" href="#">learn more</a></span>
    </div>
    <div class="tour-promo three">
        <h1 class="big-text tour-promo-header">austrailia</h1>
        <div class="big-text tour-promo-price">from $1800</div>
        <span class="tour-promo-button"><a id="tour3" href="#">learn more</a></span>
    </div>

    <div class="tour-promo four">
        <h1 class="big-text tour-promo-header">new zealand</h1>
        <div class="big-text tour-promo-price">from $2500</div>
        <span class="tour-promo-button"><a  id="tour4" href="#">learn more</a></span>
    </div>
    <div class="tour-promo five">
        <h1 class="big-text tour-promo-header">france</h1>
        <div class="big-text tour-promo-price">from $2500</div>
        <span class="tour-promo-button"><a id="tour5" href="#">learn more</a></span>
    </div>
    <div class="tour-promo six">
        <h1 class="big-text tour-promo-header">egypt</h1>
        <div class="big-text tour-promo-price">from $900</div>
        <span class="tour-promo-button"><a id="tour6" href="#">learn more</a></span>
    </div>

    <div class="tour-promo seven">
        <h1 class="big-text tour-promo-header">japan</h1>
        <div class="big-text tour-promo-price">from $1300</div>
        <span class="tour-promo-button"><a id="tour7" href="#">learn more</a></span>
    </div>
    <div class="tour-promo eight">
        <h1 class="big-text tour-promo-header">canada</h1>
        <div class="big-text tour-promo-price">from $2000</div>
        <span class="tour-promo-button"><a id="tour8" href="#">learn more</a></span>
    </div>
    <div class="tour-promo nine">
        <h1 class="big-text tour-promo-header">u.a.e.</h1>
        <div class="big-text tour-promo-price">from $3000</div>
        <span class="tour-promo-button"><a id="tour9" href="#">learn more</a></span>
    </div>
</div>
</div>`;
var tour1Content = `<section class="singleTour">
<div class="singleTour-header israel-header">
    <div class="singleTour-header-title big-text">israel tour package:</div>
    <div class="singleTour-header-price big-text">starting from $1000 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image israel-image-one"></div>
    <div class="singleTour-image israel-image-two"></div>
    <div class="singleTour-image israel-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour2Content = `<section class="singleTour">
<div class="singleTour-header usa-header">
    <div class="singleTour-header-title big-text">u.s.a. tour package:</div>
    <div class="singleTour-header-price big-text">starting from $1500 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image usa-image-one"></div>
    <div class="singleTour-image usa-image-two"></div>
    <div class="singleTour-image usa-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour3Content = `<section class="singleTour">
<div class="singleTour-header aust-header">
    <div class="singleTour-header-title big-text">australia tour package:</div>
    <div class="singleTour-header-price big-text">starting from $1800 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image aust-image-one"></div>
    <div class="singleTour-image aust-image-two"></div>
    <div class="singleTour-image aust-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour4Content = `<section class="singleTour">
<div class="singleTour-header nz-header">
    <div class="singleTour-header-title big-text">new zealand tour package:</div>
    <div class="singleTour-header-price big-text">starting from $2500 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image nz-image-one"></div>
    <div class="singleTour-image nz-image-two"></div>
    <div class="singleTour-image nz-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour5Content = `<section class="singleTour">
<div class="singleTour-header france-header">
    <div class="singleTour-header-title big-text">france tour package:</div>
    <div class="singleTour-header-price big-text">starting from $2500 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image france-image-one"></div>
    <div class="singleTour-image france-image-two"></div>
    <div class="singleTour-image france-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour6Content = `<section class="singleTour">
<div class="singleTour-header egypt-header">
    <div class="singleTour-header-title big-text">egypt tour package:</div>
    <div class="singleTour-header-price big-text">starting from $900 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image egypt-image-one"></div>
    <div class="singleTour-image egypt-image-two"></div>
    <div class="singleTour-image egypt-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour7Content = `<section class="singleTour">
<div class="singleTour-header japan-header">
    <div class="singleTour-header-title big-text">japan tour package:</div>
    <div class="singleTour-header-price big-text">starting from $1300 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image japan-image-one"></div>
    <div class="singleTour-image japan-image-two"></div>
    <div class="singleTour-image japan-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour8Content = `<section class="singleTour">
<div class="singleTour-header canada-header">
    <div class="singleTour-header-title big-text">canada tour package:</div>
    <div class="singleTour-header-price big-text">starting from $2000 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image canada-image-one"></div>
    <div class="singleTour-image canada-image-two"></div>
    <div class="singleTour-image canada-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var tour9Content = `<section class="singleTour">
<div class="singleTour-header uae-header">
    <div class="singleTour-header-title big-text">u.a.e. tour package:</div>
    <div class="singleTour-header-price big-text">starting from $3000 (prices may vary)</div>
</div>
<div class="singleTour-images">
    <div class="singleTour-image uae-image-one"></div>
    <div class="singleTour-image uae-image-two"></div>
    <div class="singleTour-image uae-image-three"></div>
</div>
<div class="singleTour-text">
    <h1 class="big-text">day #1:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #2:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <h1 class="big-text">day #3:</h1>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
</div>
<div class="singleTour-book-button">book now</div>
</section>`;
var specialOffersContent = `<section class="special">
<h1>special offers:</h1>
<div class="special-offer">
    <div class="special-offer-img spain">
        <!-- BACKGROUND IMAGE -->
    </div>
    <div class="special-offer-text">
        <div class="special-offer-header">
            <h1>barcelona, spain</h1>
            <p>(20% off)</p>
        </div>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
        </p>
        <span class="special-offer-button">learn more</span>
    </div>
</div>
<div class="special-offer">
    <div class="special-offer-img thailand">
        <!-- BACKGROUND IMAGE -->
    </div>
    <div class="special-offer-text">
        <div class="special-offer-header">
            <h1>bangcock, thailand</h1>
            <p>(10% off)</p>
        </div>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
        </p>
        <span class="special-offer-button">learn more</span>
    </div>
</div>
</section>`;
var blogContent = `<section class="blog">
<h1>blog:</h1>
<div class="blog-post">
    <div class="left-column">
        <div class="blog-post-date">
            <div class="day">06</div>
            <div class="month">jun</div>
        </div>
    </div>
    <div class="right-column">
        <div class="blog-post-content">
            <div class="blog-post-content-img">
                <!-- BACKGROUND IMAGE -->
            </div>
            <div class="blog-post-content-title">
                Sed et persipiatis unde omnis iste natus
            </div>
            <div class="blog-post-content-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </div>
        </div>
    </div>
</div>
<div class="blog-post">
    <div class="left-column">
        <div class="blog-post-date">
            <div class="day">23</div>
            <div class="month">jul</div>
        </div>
    </div>
    <div class="right-column">
        <div class="blog-post-content">
            <div class="blog-post-content-img">
                <!-- BACKGROUND IMAGE -->
            </div>
            <div class="blog-post-content-title">
                Sed et persipiatis unde omnis iste natus
            </div>
            <div class="blog-post-content-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </div>
        </div>
    </div>
</div>
</section>`;
var contactContent = `<section class="contact">
<h1>contact us:</h1>
<div class="contact-body">
    <div class="left-column">
        <div class="map">
            <!-- BACKGROUND IMAGE -->
        </div>
        <div class="address">
            travel-fly Inc.<br />
            8901 Marmora Road,<br />
            Glasgow, D04 89GR.<br />
            Freephone:+1 800 559 6580<br />
            Telephone:+1 800 603 6035<br />
            FAX:+1 800 889 9898<br />
            E-mail: mail@travelfly.org
        </div>
    </div>
    <div class="right-column">
        <form action="#">
            <input type="text" placeholder="Your Name...">
            <input type="email" placeholder="Email Address...">
            <input type="text" placeholder="Company...">
            <textarea name="message" id="message" cols="30" rows="12" placeholder="Message..."></textarea>
            <input type="submit" value="SEND MESSAGE" class="contact-button">
        </form>
    </div>
</div>
</section>`;

export function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}