# Lesson 30 — Quote likes and shared components

Based on the lesson code in `Group300126/Lesson29/quotes-app`.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Nasıl çalışıyor?

1. `src/quotes.js`: Her alıntının `likedBy: []` dizisi var. Bu dizi, alıntıyı beğenen kullanıcıların kimliklerini tutar.
2. `src/app/page.jsx`: `userId` şimdilik sabit bir kullanıcı kimliği. `useState` alıntıları ve ekranda gösterilen alıntının indeksini tutar.
3. `includes(userId)` kullanıcının beğenip beğenmediğini kontrol eder.
4. `handleLike`, `map` ile yalnızca seçili alıntıyı günceller. Beğeni varsa `filter` kimliği kaldırır; yoksa `[...quote.likedBy, userId]` ekler. Eski nesneyi/diziyi değiştirmeden yeni değer oluştururuz.
5. `setQuotes(previousQuotes => ...)` güncellemeyi en son state üzerinden hesaplar. React yeni state ile ekranı tekrar oluşturur.
6. `isLiked`, butonun `Like` veya `Liked` yazmasını belirler. `aria-pressed` hem erişilebilir beğeni durumunu bildirir hem farklı arka plan rengini etkinleştirir.
7. Previous/Next, `% quotes.length` sayesinde listenin başı ve sonu arasında döner. Her alıntının beğenisi kendi nesnesinde kalır.

## Ortak bileşenler

- `QuoteText`: Büyük ve italik alıntı metni.
- `AuthorText`: Küçük, daha açık renkte ve sağa hizalı yazar metni.
- `Button`: Ortak buton görünümü; `children` ile metni, props ile `onClick` ve `aria-pressed` değerlerini alır.
- `Card`: `children` içeriğini ortak kenarlık, arka plan ve boşluklarla sarar. Alıntı veya buton mantığını bilmez.

Örneğin `<Card><QuoteText>Merhaba</QuoteText></Card>` içinde `QuoteText`, Card bileşeninin `children` değeridir. Böylece aynı Card başka içeriklerle de kullanılabilir.

Beğeniler yalnızca React state'inde tutulur; sayfa yenilendiğinde sıfırlanır. Bu ödevde giriş sistemi veya kalıcı kayıt yoktur.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed.
- Browser: like, unlike, separate likes per quote, preserving likes after navigation, first/last wrapping, and narrow-screen layout checked.

## Kendin dene

Bir alıntıyı beğen, sonraki alıntıya geç, sonra geri dön. Beğeninin neden korunduğunu `quotes` state'i üzerinden açıkla. Ardından tekrar beğeniye basıp `filter` sonucunu düşün: kullanıcı kimliği artık dizide var mı?
