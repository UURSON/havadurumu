Ülkelerin veya şehirlerin anlık hava durumu bilgilerini gösteren uygulama.

Uygulama girilen ülkenin veya şehrin o anki hava durumu, sıcaklık, havanın açık, kapalı ve bulutlu gibi özelliklerini göstermektedir. Axios kütüphanesi kullanılmıştır. Api olarak da OpenWeatherMap sitesinin apisi kullanılmıştır.

Kurulum:
index.html 
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

Örnek:
OpenWeatherMap sitesine üyelik açmamız gerekiyor api kullanımı sağlamamız için üyelik sonrası bir api key e sahip 
oluyoruz ve bu key get isteği oluştulurken url için kullanılıyor.

Axios get isteği oluşturmak.

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
