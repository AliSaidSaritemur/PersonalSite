<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



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
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="C:\\Users\\gizze\\PycharmProjects\\Instagram-Profile-Analysis\\images\\logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Instagram Profil Analizi</h3>

  <p align="center">
    Image Processing ve NLP ile Instagram Profil Analizi
    <br />
    <a href="https://github.com/gizemsutcu/InstagramProfileAnalysisV2"><strong>Kaynak kod için »</strong></a>
    <br />
    <br />
    <a href="https://github.com/gizemsutcu/InstagramProfileAnalysisV2">Demoyu Görüntüle</a>
    ·
    <a href="https://github.com/gizemsutcu/InstagramProfileAnalysisV2/issues">Hata Bildir</a>
    ·
    <a href="https://github.com/gizemsutcu/InstagramProfileAnalysisV2/issues">Özellik İste</a>
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
    <li>
      <a href="#getting-started">Başlarken</a>
      <ul>
        <li><a href="#prerequisites">Koşullar</a></li>
        <li><a href="#installation">Kurulum</a></li>
      </ul>
    </li>
    <li><a href="#usage">Kullanım</a></li>
    <li><a href="#roadmap">Yol Haritası</a></li>
    <li><a href="#contributing">Katkı</a></li>
    <li><a href="#license">Lisans</a></li>
    <li><a href="#contact">İletişim</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Proje Hakkında

Instagram gönderilerinin, yorum içeriği ve yorumu yapan profiller olarak ayrı kategorilerde ele alınıp Image Processing ve NLP teknolojileri 
yardımı ile analizi yapılmıştır. Bu analizde öncelikli hedef yorum yapan hesabın gerçek ve sahte olmasının ayırt edilmesidir. 

Analizin ikinci aşamasında ana ayrım olarak üretici ve diğer kullanıcılar olarak sınıflandırılıp alt başlıklar ile hesap türleri çeşitlendirilmiştir. Buradaki 
hedefimiz analizin daha spesifik istekler doğrultusunda kullanılabilmesidir. Yorumlar ise ayrı olarak ele alınıp ve sınıflandırılmıştır.

### Built With

Bu bölüm, projede kullanılan tüm ana framework ve modelleri listelemektedir.

* [instaloader(4.5.5)](https://instaloader.github.io/)
* [chromedriver89](https://chromedriver.chromium.org/downloads)
* [yolo-tiny.h5](https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/yolo-tiny.h5)
* [resnet50_coco_best_v2.1.0.h5](https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/resnet50_coco_best_v2.0.1.h5)


<!-- GETTING STARTED -->
## Başlarken

İlk aşama için DataScrapper ile veriler çekilip database oluşturulmalıdır.

Oluşan database den veriler çekilerek datasetler elde edilir. Bu işlem Extract-Load da gerçekleşir.

Veriler ilk olarak Extract-Load da ön hazırlama aşamasından geçerek Image Process ve NLP teknolojileri ile hazırlanır.

Sonraki aşama olarak veriler etiketlenir ve Machine Learning algoritmalarına verilir.

### Koşullar

Bu, yazılımı kullanmak için ihtiyaç duyduğunuz şeyleri nasıl listeleye

www.markdownguide.org
Basic Syntax | Markdown Guide
The Markdown elements outlined in John Gruber's design document.
ceğinize ve bunları nasıl kuracağınıza dair bir örnektir.
* pandas
  
sh
  pip install pandas

### Kurulum

1. Clone the repo
   
sh
   git clone https://github.com/gizemsutcu/InstagramProfileAnalysisV2.git
2. Install imageAI packages
   
sh
   pip install imageAI
3. Install imagehash packages
   
sh
   pip install imagehash
4. Install PIL packages
   
sh
   pip install PIL
5. Install keras packages
   
sh
   pip install keras
6. Install opencv-python packages
   
sh
   pip install opencv-python
7. Install tensorflow packages
   
sh
   pip install tensorflow
8. Install pillow packages
   
sh
   pip install pillow
9. Install pyspark packages
   
sh
   pip install pyspark
10. Install sparknlp packages
   
sh
   pip install spark-nlp
11. Install trunklucator packages
   
sh
   pip install trunklucator
12. Install pillow packages
   
sh
   pip install pillow
13. Install selenium packages
   
sh
   pip install selenium


<!-- USAGE EXAMPLES -->
## Kullanım

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Yol Haritası

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Katkı

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## Lisans

Distributed under the MIT License. See LICENSE for more information.



<!-- CONTACT -->
## İletişim

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo
othneildrew/Best-README-Template
An awesome README template to jumpstart your projects! - othneildrew/Best-README-Template
[Photo]
=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
