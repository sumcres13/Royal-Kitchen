const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="R&I株式会社 ホーム" data-i18n-aria="companyHome"><span class="company-wordmark"><span class="company-title">R&I株式会社</span></span></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><svg class="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse><path d="M3 12h18"></path></svg><span class="language-target">English</span><span class="language-chevron" aria-hidden="true">↗</span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a><a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a><a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html"><span class="company-wordmark"><span class="company-title">R&I株式会社</span></span></a><p data-i18n="footerStatement">信頼と革新、品質へのこだわりを大切に。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">〒242-0023 神奈川県大和市渋谷８丁目１４−１ チュニカ 103</span></p><a href="tel:0462696994">046-269-6994</a><a class="footer-email" href="mailto:kamalshrestha785@gmail.com">kamalshrestha785@gmail.com</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">R&I株式会社</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  "navHome": "Home",
  "navAbout": "About us",
  "navStore": "Store & access",
  "navReservePlain": "Reservations",
  "companyName": "R&I株式会社",
  "companyHome": "Royal Kitchen home",
  "footerStatement": "Authentic flavors and heartfelt hospitality.",
  "heroLine1": "A world of spice,",
  "heroLine2": "a warm welcome in Yamato.",
  "heroCopy": "Welcome to Royal Kitchen.<br class=\"desktop-break\">Indian, Nepali and Thai flavors, served with care.",
  "heroReserve": "Reserve a table",
  "heroAccess": "Store & access",
  "heroImageAlt": "Curry, naan, biryani and other dishes, illustrative Royal Kitchen hero image",
  "aboutTitle": "<span class=\"about-heading-line\">Authentic flavors.</span><span class=\"about-heading-line\">Heartfelt hospitality.</span>",
  "aboutBody": "Royal Kitchen is operated by R&I株式会社. We bring together fragrant spices, carefully prepared food and a warm welcome. Share Indian, Nepali and Thai cuisine with family and friends.",
  "aboutLink": "About our company",
  "diningImageAlt": "Bright table seating at Royal Kitchen",
  "homeStoreInfoLabel": "STORE INFORMATION",
  "shopName": "Royal Kitchen",
  "homeQuality1Title": "Indian, Nepali & Thai flavors",
  "homeQuality1Text": "Enjoy curry and naan alongside a wide choice of rice dishes, including biryani and gapao rice.",
  "homeQuality2Title": "Make yourself at home",
  "homeQuality2Text": "Vegetarian options are available. Our restaurant is also suited to watching sports.",
  "homeQuality3Title": "Enjoy at the restaurant or at home",
  "homeQuality3Text": "Dine in, or order through Uber Eats, Demae-can or Rocket Now.",
  "snsTitle": "Stay close to Royal Kitchen.",
  "snsCopy": "Connect with Royal Kitchen on LINE.",
  "lineFollow": "Connect on LINE",
  "homeReserveTitle": "Reservations & inquiries",
  "homeReserveCopy": "Find reservation methods and delivery services here.",
  "reservePage": "Reservations",
  "aboutPageTitle": "About us",
  "repRole": "R&I株式会社 / Owner",
  "representativeName": "アディカリ・サミル",
  "representativeAlt": "アディカリ・サミル, owner of R&I株式会社",
  "ceoP1": "Namaste, and welcome. Thank you for visiting our website. We created this restaurant with a wish to share the authentic flavors of India. Through fragrant spices, careful preparation and warm hospitality, we hope to bring the traditions and heart of Indian cuisine to Japan. A meal is a precious time that connects people. We hope our food makes the moments you share with family and friends a little more enjoyable and fulfilling. We will continue to serve authentic Indian cuisine with care. Please relax, enjoy your meal, and know that we look forward to welcoming you.",
  "valuesTitle": "Our values",
  "value1Title": "Authentic flavors",
  "value1Text": "Sharing the traditions and heart of Indian cuisine with Japan.",
  "value2Title": "Careful preparation",
  "value2Text": "Fragrant spices and food prepared with care.",
  "value3Title": "Warm hospitality",
  "value3Text": "Making time with family and friends more enjoyable and fulfilling.",
  "companyTitle": "Company overview",
  "companyNameLabel": "Company",
  "companyRepLabel": "Owner",
  "companyRepValue": "アディカリ・サミル",
  "companyBusinessLabel": "Business",
  "companyBusiness": "Operating Royal Kitchen, an Indian, Nepali & Thai Restaurant & Bar.",
  "companyLocationLabel": "Restaurant address",
  "storesPageTitle": "Store & access",
  "storeCuisine": "Indian, Nepali & Thai Restaurant & Bar",
  "addressLabel": "Address",
  "addressFull": "Chunika 103, 8-14-1 Shibuya, Yamato, Kanagawa 242-0023",
  "hoursLabel": "Hours",
  "hoursValue": "11:00–22:00",
  "closedLabel": "Closed",
  "closedValue": "Open every day",
  "phoneLabel": "Phone",
  "galleryTitle": "Scenes from Royal Kitchen",
  "slideOne": "We look forward to welcoming you.",
  "slideTwo": "Unwind in our colorful dining room.",
  "slideThree": "A table for moments with family and friends.",
  "locationTitle": "Location",
  "openMap": "Open in Google Maps ↗",
  "mapTitle": "Map to Royal Kitchen",
  "storeImageAlt": "Entrance to Royal Kitchen",
  "bookingTitle": "Reservations & inquiries",
  "bookingIntro": "Visit our restaurant listings, or call us. Please check reservation availability with each service.",
  "telephoneTitle": "Reserve by phone",
  "telephoneAction": "Call now",
  "deliveryTitle": "Delivery",
  "deliveryIntro": "Order Royal Kitchen food through a delivery partner.",
  "orderAction": "Order now",
  "uberAlt": "Uber Eats",
  "demaeAlt": "Demae-can",
  "rocketAlt": "Rocket Now",
  "lineAlt": "LINE",
  "mainNavigation": "Main navigation",
  "mobileNavigation": "Mobile navigation",
  "openMenu": "Open menu",
  "closeMenu": "Close menu",
  "contactLabel": "CONTACT",
  "navigationLabel": "NAVIGATION",
  "previousPhoto": "Previous photo",
  "nextPhoto": "Next photo",
  "galleryPhotos": "Choose a gallery photo",
  "photoOne": "Photo 1",
  "photoTwo": "Photo 2",
  "photoThree": "Photo 3",
  "skipLink": "Skip to content",
  "footerBack": "BACK TO TOP ↑",
  "rightsReserved": "All rights reserved.",
  "companyEmailLabel": "Email",
  "interiorWideAlt": "Daytime entrance and sign of Royal Kitchen",
  "interiorDetailAlt": "Blue walls and counter seating inside Royal Kitchen",
  "gurunaviTitle": "Rakuten Gurunavi",
  "gurunaviAlt": "Rakuten Gurunavi",
  "listingExternal": "View restaurant information",
  "listingAction": "View store details",
  "ceoCatch": "Namaste,<br>and welcome.",
  "ceoMessageLabel": "A MESSAGE FROM OUR OWNER",
  "companyPhoneLabel": "Company phone",
  "tabelogTitle": "Tabelog",
  "tabelogAlt": "Tabelog",
  "tabelogDetails": "Menus & restaurant information",
  "tabelogAction": "Open Tabelog",
  "hotpepperTitle": "Hot Pepper Gourmet",
  "hotpepperDetails": "Check availability & restaurant information",
  "hotpepperAction": "Open Hot Pepper",
  "featuresLabel": "Features",
  "featuresValue": "Vegetarian options, a setting for watching sports, and a wide choice of rice dishes including biryani and gapao rice."
};

const ja = {
  "companyName": "R&I株式会社",
  "companyHome": "R&I株式会社 ホーム",
  "footerStatement": "信頼と誠実さ、人とのつながりを大切に。",
  "heroLine1": "大和市渋谷で、",
  "heroLine2": "本場の味と、温かな時間。",
  "heroCopy": "ロイヤルキッチンへようこそ。<br class=\"desktop-break\">インド・ネパール・タイの味わいを、心を込めて。",
  "heroImageAlt": "ロイヤルキッチンのカレー、ナン、ビリヤニなどの料理イメージ",
  "aboutTitle": "<span class=\"about-heading-line\">本場の味を、そのままに。</span><span class=\"about-heading-line\">心を込めたおもてなし。</span>",
  "aboutBody": "R&I株式会社が運営するロイヤルキッチン。スパイスの香りと、手間を惜しまない調理、温かなおもてなしを大切にしています。ご家族やご友人と、本格インド・ネパール・タイ料理をお楽しみください。",
  "diningImageAlt": "ロイヤルキッチンの明るいテーブル席",
  "shopName": "ロイヤルキッチン",
  "homeQuality1Title": "インド・ネパール・タイの味わい",
  "homeQuality1Text": "カレーやナンに加え、ビリヤニやガパオライスなど、ライスメニューも豊富に揃えています。",
  "homeQuality2Title": "それぞれの楽しみ方で",
  "homeQuality2Text": "ベジタリアンメニューをご用意しています。スポーツ観戦を楽しみたい日にもどうぞ。",
  "homeQuality3Title": "お店でも、ご自宅でも",
  "homeQuality3Text": "店内でのお食事はもちろん、Uber Eats・出前館・Rocket Nowからもご注文いただけます。",
  "snsTitle": "ロイヤルキッチンを、もっと身近に。",
  "snsCopy": "ロイヤルキッチンのLINEはこちらから。",
  "repRole": "R&I株式会社 / 代表者",
  "representativeName": "アディカリ・サミル",
  "representativeAlt": "R&I株式会社の代表者 アディカリ・サミル",
  "ceoP1": "ナマステ、そしてようこそ。 当店のホームページをご覧いただき、誠にありがとうございます。 私たちは“本場インドの味をそのままに”という想いで、このお店をつくりました。スパイスの香り、手間を惜しまない調理、そして温かなおもてなし。インド料理に込められた伝統と心を、日本の皆さまにお届けしたいと考えております。 食事は、人と人をつなぐ大切な時間です。ご家族やご友人とのひとときが、私たちの料理で少しでも楽しく、豊かなものになれば幸いです。 これからも真心を込めて、本格インド料理を提供してまいります。どうぞゆっくりとお楽しみください。皆さまのご来店を心よりお待ちしております。",
  "value1Title": "本場の味",
  "value1Text": "インド料理に込められた伝統と心を、日本の皆さまにお届けします。",
  "value2Title": "手間を惜しまない調理",
  "value2Text": "スパイスの香りを大切に、真心を込めて料理を提供します。",
  "value3Title": "温かなおもてなし",
  "value3Text": "ご家族やご友人との時間が、楽しく豊かなひとときとなるように。",
  "companyRepValue": "アディカリ・サミル",
  "companyBusiness": "本格インド・ネパール・タイレストラン＆バー ロイヤルキッチンの運営。",
  "companyEmailLabel": "メールアドレス",
  "storeCuisine": "本格インド・ネパール・タイレストラン＆バー",
  "addressFull": "〒242-0023 神奈川県大和市渋谷８丁目１４−１ チュニカ 103",
  "hoursValue": "11:00～22:00",
  "closedValue": "なし",
  "galleryTitle": "ロイヤルキッチンの風景",
  "slideOne": "ロイヤルキッチンの入口でお待ちしています。",
  "slideTwo": "青い壁に彩られた店内で、ゆっくりと。",
  "slideThree": "ご家族やご友人と囲む、温かなひととき。",
  "mapTitle": "ロイヤルキッチンの所在地の地図",
  "storeImageAlt": "ロイヤルキッチンの店舗入口",
  "interiorWideAlt": "ロイヤルキッチンの昼の店舗入口と看板",
  "interiorDetailAlt": "ロイヤルキッチンの青い壁とカウンターのある店内",
  "bookingIntro": "グルメサイトの店舗ページ、またはお電話からどうぞ。ご予約の可否は各サービスでご確認ください。",
  "gurunaviTitle": "楽天ぐるなび",
  "gurunaviAlt": "楽天ぐるなび",
  "listingExternal": "店舗情報をご覧いただけます",
  "listingAction": "店舗情報を見る",
  "deliveryIntro": "ロイヤルキッチンのお料理を、各サービスからご注文いただけます。",
  "ceoCatch": "ナマステ、<br>そしてようこそ。",
  "ceoMessageLabel": "代表者メッセージ",
  "companyPhoneLabel": "会社電話",
  "tabelogTitle": "食べログ",
  "tabelogAlt": "食べログ",
  "tabelogDetails": "メニュー・店舗情報をご覧いただけます",
  "tabelogAction": "食べログを見る",
  "hotpepperTitle": "ホットペッパーグルメ",
  "hotpepperDetails": "空席・店舗情報をご確認いただけます",
  "hotpepperAction": "ホットペッパーを見る",
  "featuresLabel": "お店の特徴",
  "featuresValue": "ベジタリアンメニューあり。スポーツ観戦に。ビリヤニ・ガパオライスなどライスメニューも豊富。"
};
document.querySelectorAll("[data-i18n]").forEach(element => {
  if (ja[element.dataset.i18n] !== undefined) element.innerHTML = ja[element.dataset.i18n];
});
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
  const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
  const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
  if (ja[key] !== undefined) element.setAttribute(attribute, ja[key]);
});
const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("royalKitchenLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-target").textContent = language === "ja" ? "English" : "日本語";
  languageButton.lang = language === "ja" ? "en" : "ja";
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = {"ja": {"home": "大和市渋谷のロイヤルキッチン。インド・ネパール・タイ料理、店舗情報、ご予約、デリバリーをご案内します。", "about": "R&I株式会社の代表者アディカリ・サミルからのご挨拶と会社概要。", "stores": "ロイヤルキッチンの住所、営業時間、電話番号、店内写真とアクセスをご案内します。", "reservation": "ロイヤルキッチンの電話予約と店舗情報、Uber Eats・出前館・Rocket Nowのデリバリーサービス。"}, "en": {"home": "ロイヤルキッチン Indian, Nepali & Thai Dining & Bar in Shibuya, Yamato, operated by R&I株式会社.", "about": "Meet R&I株式会社 and owner アディカリ・サミル. Read our vision and values.", "stores": "Find the ロイヤルキッチン address, opening hours, phone number, dining room photos, and map.", "reservation": "Call ロイヤルキッチン for reservations, view Rakuten Gurunavi, or order with Uber Eats, Demae-can, and Rocket Now."}};
  document.querySelector('meta[name="description"]').content = descriptions[language][page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + "ロイヤルキッチン";
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("royalKitchenLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const slides=[...document.querySelectorAll(".gallery-slide")];
if(slides.length){
 const stage=document.getElementById("gallery-stage"),dots=[...stage.querySelectorAll(".gallery-dots button")],toggle=document.getElementById("gallery-autoplay");
 const motion=matchMedia("(prefers-reduced-motion: reduce)");let current=0,timer,enabled=!motion.matches;
 function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle("is-active",i===current);slide.setAttribute("aria-hidden",String(i!==current));});dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===current);if(i===current)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current");});}
 function label(){toggle.textContent=language==="ja"?(enabled?"Ⅱ 一時停止":"▶ 再生"):(enabled?"Ⅱ Pause":"▶ Play");toggle.setAttribute("aria-pressed",String(!enabled));}
 function schedule(){clearTimeout(timer);if(enabled&&!document.hidden&&!stage.matches(":hover")&&!stage.matches(":focus-within"))timer=setTimeout(()=>{showSlide(current+1);schedule();},4000);}
 function move(index){showSlide(index);schedule();}
 stage.querySelector(".gallery-prev").addEventListener("click",()=>move(current-1));stage.querySelector(".gallery-next").addEventListener("click",()=>move(current+1));dots.forEach((dot,i)=>dot.addEventListener("click",()=>move(i)));
 toggle.addEventListener("click",()=>{enabled=!enabled;label();schedule();});
 ["mouseenter","mouseleave","focusin"].forEach(event=>stage.addEventListener(event,schedule));stage.addEventListener("focusout",()=>queueMicrotask(schedule));document.addEventListener("visibilitychange",schedule);
 motion.addEventListener("change",()=>{enabled=!motion.matches;label();schedule();});languageButton.addEventListener("click",label);
 showSlide(0);label();schedule();
}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();

document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!mobileNav.hidden){mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");menuToggle.focus();}});
