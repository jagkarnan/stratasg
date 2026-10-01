import Script from "next/script"

const metaPixelId = "1747241863174318"
const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

export function MarketingTags() {
  return (
    <>
      <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              if (!window.__strataMetaPixelInitialized) {
              window.__strataMetaPixelInitialized = true;
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              // Use explicit website events instead of inferred button events.
              fbq('set', 'autoConfig', false, '${metaPixelId}');
              fbq('init', '${metaPixelId}');
              fbq('trackSingle', '${metaPixelId}', 'PageView');
              }
            `}
          </Script>
          {/* Keep fallback HTML inert during React hydration when JS is enabled. */}
          <noscript dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${metaPixelId}&amp;ev=PageView&amp;noscript=1" alt="" />`,
          }} />
      </>

      {linkedInPartnerId ? (
        <>
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = '${linkedInPartnerId}';
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}var s = document.getElementsByTagName('script')[0];
              var b = document.createElement('script');b.type = 'text/javascript';b.async = true;
              b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif`}
            />
          </noscript>
        </>
      ) : null}
    </>
  )
}
