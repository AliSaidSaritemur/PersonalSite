
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AliSaidSaritemur/PersonalSite">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Kişisel Websitesi</h3>

  <p align="center">
   Sakarya Üniversitesi- Web Teknolojileri dersinin proje ödevidir. CV ve kişinin memleketi hakkında bilgi içeren bir web sitesinden oluşmaktadır
    <br />
    <a href="https://github.com/AliSaidSaritemur/PersonalSite"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AliSaidSaritemur/PersonalSite">Demoyu Görüntüle</a>
    ·
    <a href="https://github.com/AliSaidSaritemur/PersonalSite">Hata Bildir</a>
    ·
    <a href="https://github.com/AliSaidSaritemur/PersonalSite">Özellik İste</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>İÇİNDEKİLER</summary>
  <ol>
    <li>
      <a href="#about-the-project">Proje Hakkında</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">İçerdikleri</a></li>
    <li>
      <a href="#getting-started">Başlarken</a>
      <ul>
        <li><a href="#prerequisites">Koşullar</a></li>
        <li><a href="#installation">Kurulum</a></li>
      </ul>
    </li>
    <li><a href="#usage">Kullanım</a></li>
    <li><a href="#contributing">Katkı</a></li>
    <li><a href="#license">Lisans</a></li>
    <li><a href="#contact">İletişim</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Proje Hakkında

Projede oluşturulan websitesinde kullanıcıları ilk olarak hakkında sayfası karşılar. Bu kısımda site sahibi hakkında bilgiler bulunur. Bu bilgileri hobileri, fobileri, katıldığı etkinlikler, siteyi neden açtığı,hayalleri gibi bilgiler karşılar. 

Diğer sayfalardandan bahsedilecek olursa
 * Eğitim bilgileri, iş geçmişi, bildiği diller ve daha birçok bilgiyi kapsana özgeçmiş sayfasından
 * Bir şehrin nufusu, turistik yerleri, fotoğrafları, nelerinin meşhur olduğu şehrim sayfasından
 * Şehre ait kültürel miras niteliğindeki önemli bir eseri tanıtan mirasımız sayfasından
 * Site sahibinin ilgi alanı olan futbolla ilgili gerçek zamanlı veri sunan ilgi alanlarım sayfasından
 * Diğer sayfalardan bir kısmını görmek için giriş yapılması gereken login sayfasından

ve iletişim sayfasından bahsedilebilir.

Elbette ihtiyaçlarınız farklı olabileceğinden hiçbir şablon tüm projelere hizmet etmeyecektir. Bu yüzden yakın gelecekte daha fazlasını ekleyeceğim. Bu depoyu fork ve bir pull talebi oluşturarak veya bir sorunu açarak da değişiklik önerebilirsiniz. Bu şablonun genişletilmesine katkıda bulunan herkese teşekkürler!

Yararlı bulduğum yaygın olarak kullanılan kaynakların bir listesi teşekkürlerde listelenmiştir.

### Built With

Bu bölüm, projede kullanılan tüm ana framework ve teknolojileri listelemektedir.

* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [JavaScript](https://javascript.com/)
* [HTML](https://html.com/)
* [CSS](https://css.com)
* [API-FOOTBALL](https://football-api.com/)
* [Leaflet](https://leaflet.com)


## İçerdikleri

Bu projede özgeçmiş bilgileri Ali Said Sarıtemur'a aittir. Seçilen şehir ise Adıyaman olmakla birlikte şehre ait kültürel miras niteliğindeki önemli bir eser olarak Nemrut Dağı seçilmiştir. Login olduktan sonra kültürel miras ve ilgi alanı sayfası görüntüleneilmektedir. İletişim sayfasında İstanbul lokasyonu görülmektedir bu da Leaflet API'si ile sağlanmıştır.

<!-- GETTING STARTED -->
## Başlarken

Ide olarak Visual Studio kullanılmıştır. Futbol ile ilgili veriler için API-FOOTBALL ve Bootstrap içeren responsive bir yapı kullanılmıştır. Axios kullanılmıştır.


### Koşullar

Bu, yazılımı kullanmak için ihtiyaç duyduğunuz şeyleri nasıl listeleyeceğinize ve bunları nasıl kuracağınıza dair bir örnektir.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Kurulum
1. Real time fotbol verileri için Ücretsiz api->  [https://rapidapi.com/api-sports/api/api-football/tutorials](https://rapidapi.com/api-sports/api/api-football/tutorials)

2. Etkileşimli haritalar için ücretsiz api->  [https://leafletjs.com/](https://leafletjs.com/)

3. Repoyu klonlama
   ```sh
   git clone https://github.com/AliSaidSaritemur/PersonalSite
   ```

3. NPM paketlerini install etme
   ```sh
   npm install
   ```

4. Axios paketlerini install etme
   ```sh
   npm install axios
   ```

3. Leaflet paketlerini install etme
   ```sh
   npm install leaflet
   ```

4. Bootstrap paketlerini install etme
   ```sh
   npm install bootstrap
   ```

5. Font-awesome paketlerini install etme
   ```sh
   npm install font-awesome
   ```
5. Ücretsiz hosting hizmeti veren site için ->  [https://tr.000webhost.com/](https://tr.000webhost.com/)




<!-- USAGE EXAMPLES -->
## Kullanım

Projenin nasıl kullanılabileceğine ilişkin yararlı örnekleri göstermek için bu alan proje ilerledikçe kullanılacaktır. Ek ekran görüntüleri, kod örnekleri ve demolar eklenecektir.


<!-- CONTRIBUTING -->
## Katkı

Katkılar, açık kaynak topluluğunu öğrenmek, ilham vermek ve yaratmak için harika bir şeydir. Yaptığınız tüm katkılar için **çok teşekkür ederim**.

1. Projeyi forklayın
2. Feature Branch'ınızı oluşturun (`git checkout -b feature/ AmazingFeature`)
3. Commit'inizi Kaydedin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'ı push edin (`git push origin feature/AmazingFeature`)
5. Bir pull isteği oluşturun



<!-- LICENSE -->
## Lisans

MIT Lisansı altında dağıtılmaktadır. Daha fazla bilgi için "LİSANS" bölümüne bakın


<!-- CONTACT -->
## İletişim

Your Name - [@your_twitter](https://twitter.com/alisaidsartemur) - email@example.com

Proje Linki: [https://github.com/AliSaidSaritemur/PersonalSite](https://github.com/AliSaidSaritemur/PersonalSite)



<!-- ACKNOWLEDGEMENTS -->
## Teşekkür
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/AliSaidSaritemur/PersonalSite/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/AliSaidSaritemur/PersonalSite/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/AliSaidSaritemur/PersonalSite/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/AliSaidSaritemur/PersonalSite/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/
[product-screenshot]: images/Download.png

