"use client";

import Script from "next/script";

const META_PIXEL_ID = "806545258929190"; // use o ID correto do seu Pixel

export default function PixelScripts() {
  if (!META_PIXEL_ID) return null;

  return (
    <>
      {/* Meta Pixel com PageView usando eventID */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq) return; n=f.fbq=function(){ n.callMethod ?
            n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
            if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
            n.queue=[]; t=b.createElement(e); t.async=!0;
            t.src=v; s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

          fbq('init','${META_PIXEL_ID}');

          // Gera e fixa um eventID para este PageView na sessão
          (function(){
            try {
              var KEY = '__pv_event_id__';
              var id = sessionStorage.getItem(KEY);
              if (!id) {
                var canUUID = typeof crypto !== 'undefined' && crypto.randomUUID;
                id = canUUID ? crypto.randomUUID() : ('pv_' + Date.now() + '_' + Math.random());
                sessionStorage.setItem(KEY, id);
              }
              // PageView com eventID no client
              fbq('track','PageView',{ eventID: id });
              // Exponha um helper global para outros eventos com eventID
              window.fbTrack = function(eventName, params){
                var canUUID = typeof crypto !== 'undefined' && crypto.randomUUID;
                var eid = canUUID ? crypto.randomUUID() : (eventName + '_' + Date.now() + '_' + Math.random());
                var p = Object.assign({}, params || {}, { eventID: eid });
                fbq('track', eventName, p);
                return eid; // útil se depois você enviar o mesmo ID via servidor
              };
            } catch (e) {
              // fallback sem eventID se der erro
              fbq('track','PageView');
            }
          })();
        `}
      </Script>

      {/* NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Google Ads opcional. Deixe como estava se usar. */}
    </>
  );
}
